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
 * UpgradeProxyVersion request structure.
 * @class
 */
class UpgradeProxyVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Current proxy version. Call the [DescribeInstances](https://www.tencentcloud.com/document/product/239/20018?from_cn_redirect=1) API to obtain the current proxy version for the instance.
         * @type {string || null}
         */
        this.CurrentProxyVersion = null;

        /**
         * Upgradable Redis version. Call the [DescribeInstances](https://www.tencentcloud.com/document/product/239/20018?from_cn_redirect=1) API to obtain the upgradable Redis version for the instance.
         * @type {string || null}
         */
        this.UpgradeProxyVersion = null;

        /**
         * Specifies whether to upgrade immediately.
- 1: Upgrade immediately.
- 0: Upgrade during the maintenance window.
         * @type {number || null}
         */
        this.InstanceTypeUpgradeNow = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CurrentProxyVersion = 'CurrentProxyVersion' in params ? params.CurrentProxyVersion : null;
        this.UpgradeProxyVersion = 'UpgradeProxyVersion' in params ? params.UpgradeProxyVersion : null;
        this.InstanceTypeUpgradeNow = 'InstanceTypeUpgradeNow' in params ? params.InstanceTypeUpgradeNow : null;

    }
}

/**
 * RemoveReplicationGroup request structure.
 * @class
 */
class RemoveReplicationGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Replication group ID. Log in to the [Redis console and go to the global replication](https://console.cloud.tencent.com/redis/replication) page to obtain the ID.
         * @type {string || null}
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * UpgradeSmallVersion request structure.
 * @class
 */
class UpgradeSmallVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Current Redis minor version. For minor version information, see [Upgrading Instance Version](https://www.tencentcloud.com/document/product/239/37710).
         * @type {string || null}
         */
        this.CurrentRedisVersion = null;

        /**
         * Upgraded Redis minor version. For minor version information, see [Upgrading Instance Version](https://www.tencentcloud.com/document/product/239/37710).
         * @type {string || null}
         */
        this.UpgradeRedisVersion = null;

        /**
         * Whether to upgrade immediately.
- 1: Upgrade immediately.
- 0: Upgrade during the maintenance window.
         * @type {number || null}
         */
        this.InstanceTypeUpgradeNow = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CurrentRedisVersion = 'CurrentRedisVersion' in params ? params.CurrentRedisVersion : null;
        this.UpgradeRedisVersion = 'UpgradeRedisVersion' in params ? params.UpgradeRedisVersion : null;
        this.InstanceTypeUpgradeNow = 'InstanceTypeUpgradeNow' in params ? params.InstanceTypeUpgradeNow : null;

    }
}

/**
 * ModifyInstanceParams response structure.
 * @class
 */
class ModifyInstanceParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the parameter configuration is successfully modified.<br> <li>true: successful;</li> <li>false: failed.</li>
         * @type {boolean || null}
         */
        this.Changed = null;

        /**
         * ID of the task
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.Changed = 'Changed' in params ? params.Changed : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableReplicaReadonly request structure.
 * @class
 */
class EnableReplicaReadonlyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Read-only routing policy.
- master: read-only routing to the primary node.
- replication: read-only routing to the secondary node. The default value is replication.
         * @type {Array.<string> || null}
         */
        this.ReadonlyPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;

    }
}

/**
 * ModifyInstanceAvailabilityZones request structure.
 * @class
 */
class ModifyInstanceAvailabilityZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specify the instance ID.
 For example: crs-xjhsdj****, please log in to the [Redis Console] (https://console.cloud.tencent.com/redis#/) and copy the instance ID from the instance list.

         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Switch time.
- 1: Switch during the maintenance window.
- 2: Switch immediately.
         * @type {number || null}
         */
        this.SwitchOption = null;

        /**
         * Instance node information includes the node ID, node type, and node availability zone ID, and so on. For specific information, please see [RedisNodeInfo ](https://intl.cloud.tencent.com/document/product/239/20022?from_cn_redirect=1).
For instances in a single availability zone, there is no need to configure the NodeId. For instances in multiple availability zones, the NodeId is required to configure.
         * @type {Array.<RedisNodeInfo> || null}
         */
        this.NodeSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SwitchOption = 'SwitchOption' in params ? params.SwitchOption : null;

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new RedisNodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }

    }
}

/**
 * Array of instance backups
 * @class
 */
class RedisBackupSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Backup task ID
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * Backup type. Valid values:  `1` (Automatic backup in the early morning initiated by the system.) `0`: Manual backup initiated by the user.
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * Backup status. Valid values:  - `1`: The backup is locked by another process. - `2`: The backup is normal and not locked by any process. - `-1`: The backup is expired. - `3`: The backup is being exported. - `4`: Exported the backup successfully.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Backup remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Whether the backup is locked. Valid values:  - `0` (no) - `1` (yes)
         * @type {number || null}
         */
        this.Locked = null;

        /**
         * Internal field, which can be ignored.
         * @type {number || null}
         */
        this.BackupSize = null;

        /**
         * Internal field, which can be ignored.
         * @type {number || null}
         */
        this.FullBackup = null;

        /**
         * Internal field, which can be ignored.
         * @type {number || null}
         */
        this.InstanceType = null;

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
         * The region where the local backup resides.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Backup end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Backup file type
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * Backup file expiration time
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.BackupSize = 'BackupSize' in params ? params.BackupSize : null;
        this.FullBackup = 'FullBackup' in params ? params.FullBackup : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmd response structure.
 * @class
 */
class DescribeInstanceMonitorTopNCmdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access command information
         * @type {Array.<SourceCommand> || null}
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
                let obj = new SourceCommand();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceAvailabilityZones response structure.
 * @class
 */
class ModifyInstanceAvailabilityZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoBackupConfig response structure.
 * @class
 */
class ModifyAutoBackupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Automatic backup type.  Valid value:  `1` (scheduled backup).
         * @type {number || null}
         */
        this.AutoBackupType = null;

        /**
         * Automatic backup cycle. Valid values: `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`.
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * Time period for automatic scheduled backup  in the format of  “00:00-01:00, 01:00-02:00...... 23:00-00:00”.
         * @type {string || null}
         */
        this.TimePeriod = null;

        /**
         * Retention time of full backup files in days
         * @type {number || null}
         */
        this.BackupStorageDays = null;

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
        this.AutoBackupType = 'AutoBackupType' in params ? params.AutoBackupType : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.BackupStorageDays = 'BackupStorageDays' in params ? params.BackupStorageDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestoreInstance request structure.
 * @class
 */
class RestoreInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance to be operated, which can be obtained through the response parameter InstanceId of the [DescribeInstances](https://www.tencentcloud.com/document/product/239/20018?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup ID, which can be obtained through the response parameter RedisBackupSet of the [DescribeInstanceBackups](https://www.tencentcloud.com/document/product/239/20011?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * Instance password, which needs to be validated during instance restoration (this parameter is not required for password-free instances)
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
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * AllocateWanAddress request structure.
 * @class
 */
class AllocateWanAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
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
 * ApplyParamsTemplate request structure.
 * @class
 */
class ApplyParamsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy the instance ID in the instance list.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * ID of the applied parameter template.
- The parameter template ID can be obtained through the response parameter **TemplateId** of the API [DescribeParamTemplateInfo](https://www.tencentcloud.com/document/product/239/58748?from_cn_redirect=1).
- The operation can only be successfully performed when the parameter template version matches the architecture version of the target instance. A version mismatch will trigger an execution error.
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeReplicationGroupInstance request structure.
 * @class
 */
class DescribeReplicationGroupInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID. Example: crs-xjhsdj****. Log in to the [TencentDB for Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
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
 * UpgradeInstanceVersion response structure.
 * @class
 */
class UpgradeInstanceVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID
         * @type {string || null}
         */
        this.DealId = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInstances request structure.
 * @class
 */
class CreateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance type.

<ul><li>2: Redis 2.8 memory edition (standard architecture).</li><li>3: CKV 3.2 memory edition (standard architecture).</li><li>4: CKV 3.2 memory edition (cluster architecture).</li><li>6: Redis 4.0 memory edition (standard architecture).</li><li>7: Redis 4.0 memory edition (cluster architecture).</li><li>8: Redis 5.0 memory edition (standard architecture).</li><li>9: Redis 5.0 memory edition (cluster architecture).</li><li>15: Redis 6.2 memory edition (standard architecture).</li><li>16: Redis 6.2 memory edition (cluster architecture).</li><li>17: Redis 7.0 memory edition (standard architecture).</li><li>18: Redis 7.0 memory edition (cluster architecture).</li><li>200: Memcached 1.6 memory edition (cluster architecture).</li>Note: CKV editions are currently used by some users and are temporarily retained.</ul>
         * @type {number || null}
         */
        this.TypeId = null;

        /**
         * Memory capacity in MB, which must be an integer multiple of 1024. For specific specifications, query the sales specifications in all regions through the [DescribeProductInfo](https://intl.cloud.tencent.com/document/api/239/30600?from_cn_redirect=1) API.
- When **TypeId** is a standard architecture, **MemSize** is the total memory capacity of the instance;
- When **TypeId** is a cluster architecture, **MemSize** is the single-shard memory capacity.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * The number of instances for each purchase. For details, query the sales specifications in all regions through the [DescribeProductInfo](https://intl.cloud.tencent.com/document/api/239/30600?from_cn_redirect=1) API.
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * The purchase duration of an instance
- If `BillingMode` is `1`, that is, when the billing mode is monthly subscription, you need to set this parameter to specify the duration of the purchased instance. Unit: month. Value range: [1,2,3,4,5,6,7,8,9,10,11,12,24,36].
- If `BillingMode` is `0`, that is, when the billing mode is pay-as-you-go, you need to set this parameter to `1`.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Billing mode. 0: pay-as-you-go
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * ID of the AZ where the instance resides. For more information, see [Regions and AZs](https://intl.cloud.tencent.com/document/product/239/4106?from_cn_redirect=1).
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Instance access password.
 - If the input parameter **NoAuth** is set to **true**, indicating that instance access requires no password, Password does not need to be specified. Otherwise, Password is required.
 - If the instance type (**TypeId**) is Redis 2.8 memory edition standard architecture or Redis 4.0/5.0/6.2/7.0 memory edition standard architecture or cluster architecture, the password complexity requirements are as follows: It should contain 8 to 64 characters but cannot start with a forward slash (/). It should contain at least two types of the following characters: lowercase letters, uppercase letters, digits, and special characters: ()`~!@#$%^&*-+=_|{}[]:;<>,.?/
 - When the instance type parameter **TypeId** is set to CKV 3.2 memory edition (standard architecture or cluster architecture), the password should contain 8 to 30 characters, including only letters and digits.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * VPC ID. If this parameter is not passed in, the classic network will be selected by default. You can query the specific VPC ID in the [VPC console](https://console.cloud.tencent.com/vpc).
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID. This parameter is not required for the classic network. You can get the specific subnet ID by querying the subnet list in the [VPC console](https://console.cloud.tencent.com/vpc).
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Project ID. Log in to the [Redis console](https://console.cloud.tencent.com/redis#/), go to the account information menu in the top-right corner, and select **Project Management** to query the project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Auto-renewal flag
- `0`: Manual renewal (default).
- `1`: Auto-renewal.
- `2`: Not auto-renewal (set by user).
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * Array of security group IDs.
- A security group is a virtual firewall that controls network access to cloud database instances. It is recommended to bind the corresponding security group when you create an instance.
- Obtain the security group ID of the instance through the API [DescribeInstanceSecurityGroup](https://intl.cloud.tencent.com/document/product/239/34447?from_cn_redirect=1).
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIdList = null;

        /**
         * User-defined network port. Default value: `6379`. Range: [1024,65535].
         * @type {number || null}
         */
        this.VPort = null;

        /**
         * Quantity of instance shards
- This parameter is not required for instances of Standard Edition.
- For instances of Cluster Edition, the range of shard quantity is [1, 3, 5, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128].
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * Quantity of instance replicas
- For Redis Memory Edition 4.0, 5.0, 6.2 (regardless of architecture), the range of replica quantity is [1,5].
- For Redis 2.8 Standard Edition and CKV Standard Edition, the replica quantity is `1`.
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * Whether to support read-only replicas.
- Redis 2.8 Standard Edition and CKV Standard Edition don’t support read-only replicas.
- If read-only replicas are enabled, read/write separation will be automatically enabled for an instance, with write requests routed to the master node and read requests to the replica node.
- To enable read-only replicas, we recommend that you create two or more replicas.
         * @type {boolean || null}
         */
        this.ReplicasReadonly = null;

        /**
         * Instance name, which can contain up to 60 letters, digits, hyphens, and underscores.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Whether to support password-free access for an instance
- `true`: The instance access is password-free.
- `false`: The instance access is password-enabled. Default value: `false`. Only instances in a VPC support the password-free access.
         * @type {boolean || null}
         */
        this.NoAuth = null;

        /**
         * The node information of the instance, including node ID, type, and AZ. For more information, see [RedisNodeInfo](https://intl.cloud.tencent.com/document/product/239/20022?from_cn_redirect=1).
Node information of an instance. Currently, information about the node type (master or replica) and node AZ can be passed in. This parameter is not required for instances deployed in a single AZ.
         * @type {Array.<RedisNodeInfo> || null}
         */
        this.NodeSet = null;

        /**
         * The tag for an instance
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * Name of the AZ where the instance resides. For more information, see [Regions and AZs](https://intl.cloud.tencent.com/document/product/239/4106?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * The parameter template ID associated with the instance
- If this parameter is not configured, the system will automatically adapt the corresponding default template based on the selected compatible version and architecture.
- Query the list of parameter templates of an instance to get the template ID through the [DescribeParamTemplates](https://intl.cloud.tencent.com/document/product/239/58750?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * An internal parameter used to indicate whether to check when creating an instance.
- `false`: Default value. Send a normal request and create an instance if all the requirements are met.
- `true`: Send a check request and create no instance.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * Specifies the instance deployment mode.
 - local: traditional architecture. It is the default value.
 - cdc: dedicated cluster.
 - cloud: cloud native. Currently, this mode is unavailable.
         * @type {string || null}
         */
        this.ProductVersion = null;

        /**
         * Exclusive cluster ID. When `ProductVersion` is set to `cdc`, this parameter is required.
         * @type {string || null}
         */
        this.RedisClusterId = null;

        /**
         * Alarm policy ID array.- Please log in to [Tencent Cloud Observability Platform - Alarm Management - Policy Management](https://console.cloud.tencent.com/monitor/alarm/policy) to access the alarm policy ID.- If this parameter is not configured, the default alarm policy will be bound. For the specific information about the default alarm policy, please log in to [Tencent Cloud Observability Platform - Alarm Management - Policy Management](https://console.cloud.tencent.com/monitor/alarm/policy) to view.
         * @type {Array.<string> || null}
         */
        this.AlarmPolicyList = null;

        /**
         * Whether to encrypt the password.
         * @type {boolean || null}
         */
        this.EncryptPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.SecurityGroupIdList = 'SecurityGroupIdList' in params ? params.SecurityGroupIdList : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.ReplicasReadonly = 'ReplicasReadonly' in params ? params.ReplicasReadonly : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new RedisNodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.ProductVersion = 'ProductVersion' in params ? params.ProductVersion : null;
        this.RedisClusterId = 'RedisClusterId' in params ? params.RedisClusterId : null;
        this.AlarmPolicyList = 'AlarmPolicyList' in params ? params.AlarmPolicyList : null;
        this.EncryptPassword = 'EncryptPassword' in params ? params.EncryptPassword : null;

    }
}

/**
 * CreateReplicationGroup request structure.
 * @class
 */
class CreateReplicationGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the primary instance in the replication group. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Replication group name. The name should contain 2 to 64 characters, including only letters, digits, underscores (_), and hyphens (-).
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Remark information.
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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeInstanceSpecBandwidth response structure.
 * @class
 */
class DescribeInstanceSpecBandwidthResponse extends  AbstractModel {
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
 * DescribeInstanceZoneInfo request structure.
 * @class
 */
class DescribeInstanceZoneInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
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
 * ModifyConnectionConfig response structure.
 * @class
 */
class ModifyConnectionConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNetworkConfig response structure.
 * @class
 */
class ModifyNetworkConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution status. Ignore this parameter.
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * New subnet ID of the instance
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * New VPC ID of the instance
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * New private IPv4 address of the instance
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Task ID. Obtain **taskId** and query the task execution status through the API [DescribeTaskInfo](https://intl.cloud.tencent.com/document/product/239/30601?from_cn_redirect=1).
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Command duration
 * @class
 */
class CommandTake extends  AbstractModel {
    constructor(){
        super();

        /**
         * Command name.
         * @type {string || null}
         */
        this.Cmd = null;

        /**
         * Time consumed. Unit: ms.
         * @type {number || null}
         */
        this.Took = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cmd = 'Cmd' in params ? params.Cmd : null;
        this.Took = 'Took' in params ? params.Took : null;

    }
}

/**
 * DescribeInstanceMonitorBigKey response structure.
 * @class
 */
class DescribeInstanceMonitorBigKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Big key details
         * @type {Array.<BigKeyInfo> || null}
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
                let obj = new BigKeyInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Security group inbound rule
 * @class
 */
class Inbound extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy. Valid values: ACCEPT, DROP.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * All the addresses that the address group ID represents.
         * @type {string || null}
         */
        this.AddressModule = null;

        /**
         * Source IP or IP address range, such as 192.168.0.0/16.
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Network protocol, such as UDP and TCP.
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * Port.
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * All the protocols and ports that the service group ID represents.
         * @type {string || null}
         */
        this.ServiceModule = null;

        /**
         * All the addresses that the security group ID represents.
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
        this.Action = 'Action' in params ? params.Action : null;
        this.AddressModule = 'AddressModule' in params ? params.AddressModule : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.ServiceModule = 'ServiceModule' in params ? params.ServiceModule : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * AssociateSecurityGroups request structure.
 * @class
 */
class AssociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name, which is `redis` for this API.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * ID of the security group to be bound. Obtain it on the [security group](https://console.tencentcloud.com/vpc/security-group) page of the console.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * ID of the bound instance. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list. You can specify multiple instance IDs.
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
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeTaskList response structure.
 * @class
 */
class DescribeTaskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Task details
         * @type {Array.<TaskInfoDetail> || null}
         */
        this.Tasks = null;

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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInfoDetail();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancePassword response structure.
 * @class
 */
class ModifyInstancePasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecondLevelBackupInfo response structure.
 * @class
 */
class DescribeSecondLevelBackupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup record ID.
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * Backup timestamp.
         * @type {number || null}
         */
        this.BackupTimestamp = null;

        /**
         * Timestamp range within which backup is missing.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SecondLevelBackupMissingTimestamps> || null}
         */
        this.MissingTimestamps = null;

        /**
         * Timestamp when second-level backup is enabled for the instance.
         * @type {number || null}
         */
        this.StartTimestamp = null;

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
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.BackupTimestamp = 'BackupTimestamp' in params ? params.BackupTimestamp : null;

        if (params.MissingTimestamps) {
            this.MissingTimestamps = new Array();
            for (let z in params.MissingTimestamps) {
                let obj = new SecondLevelBackupMissingTimestamps();
                obj.deserialize(params.MissingTimestamps[z]);
                this.MissingTimestamps.push(obj);
            }
        }
        this.StartTimestamp = 'StartTimestamp' in params ? params.StartTimestamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Transaction ID
         * @type {string || null}
         */
        this.DealId = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSlowLog response structure.
 * @class
 */
class DescribeSlowLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of slow queries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Slow query log details. This parameter has been deprecated and will be replaced by InstanceSlowLogDetail because it is not properly named.
         * @type {Array.<InstanceSlowlogDetail> || null}
         */
        this.InstanceSlowlogDetail = null;

        /**
         * Slow query details. Note: If the value of TotalCount is greater than 10,000, indicating that the number of slow logs exceeds 10,000, log details cannot be returned. Instead, the returned data is empty. It is recommended to reduce the interval between BeginTime and EndTime and perform multiple queries.
         * @type {Array.<InstanceSlowlogDetail> || null}
         */
        this.InstanceSlowLogDetail = null;

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

        if (params.InstanceSlowlogDetail) {
            this.InstanceSlowlogDetail = new Array();
            for (let z in params.InstanceSlowlogDetail) {
                let obj = new InstanceSlowlogDetail();
                obj.deserialize(params.InstanceSlowlogDetail[z]);
                this.InstanceSlowlogDetail.push(obj);
            }
        }

        if (params.InstanceSlowLogDetail) {
            this.InstanceSlowLogDetail = new Array();
            for (let z in params.InstanceSlowLogDetail) {
                let obj = new InstanceSlowlogDetail();
                obj.deserialize(params.InstanceSlowLogDetail[z]);
                this.InstanceSlowLogDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCommonDBInstances request structure.
 * @class
 */
class DescribeCommonDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of VPC IDs
         * @type {Array.<number> || null}
         */
        this.VpcIds = null;

        /**
         * List of subnet IDs
         * @type {Array.<number> || null}
         */
        this.SubnetIds = null;

        /**
         * List of billing modes. 0: monthly subscription; 1: pay-as-you-go
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Instance ID filter information list, with a maximum array length of 100.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * List of instance names
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * List of instance status
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * Sorting field
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * List of instance VIPs
         * @type {Array.<string> || null}
         */
        this.Vips = null;

        /**
         * List of VPC IDs
         * @type {Array.<string> || null}
         */
        this.UniqVpcIds = null;

        /**
         * List of unique subnet IDs
         * @type {Array.<string> || null}
         */
        this.UniqSubnetIds = null;

        /**
         * Quantity limit. Recommended default value: 100.
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
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Vips = 'Vips' in params ? params.Vips : null;
        this.UniqVpcIds = 'UniqVpcIds' in params ? params.UniqVpcIds : null;
        this.UniqSubnetIds = 'UniqSubnetIds' in params ? params.UniqSubnetIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeDBSecurityGroups response structure.
 * @class
 */
class DescribeDBSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group rules
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * Private IPv4 address of an instance
         * @type {string || null}
         */
        this.VIP = null;

        /**
         * Private network port
         * @type {string || null}
         */
        this.VPort = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.VIP = 'VIP' in params ? params.VIP : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestoreInstance response structure.
 * @class
 */
class RestoreInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID, which can be used to query the task execution status through the `DescribeTaskInfo` API.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Master or replica node information of the TencentDB for Redis instance.
 * @class
 */
class RedisNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node type. <ul><li>`0`: Master node.</li><li>`1`: Replica node.</li></ul>
         * @type {number || null}
         */
        this.NodeType = null;

        /**
         * ID of the master or replica node <ul><li>This parameter is optional when the [CreateInstances](https://intl.cloud.tencent.com/document/product/239/20026?from_cn_redirect=1) API is used to create a TencentDB for Redis instance, but it is required when the [UpgradeInstance](https://intl.cloud.tencent.com/document/product/239/20013?from_cn_redirect=1) API is used to adjust the configuration of an instance by deleting a replica.  </li><li>You can use the [DescribeInstances](https://intl.cloud.tencent.com/document/product/239/20018?from_cn_redirect=1) API to get the node ID of integer type. </li></ul> </li></ul>
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * ID of the AZ of the master or replica node
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Name of the AZ of the master or replica node
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * ModifyBackupDownloadRestriction response structure.
 * @class
 */
class ModifyBackupDownloadRestrictionResponse extends  AbstractModel {
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
 * DescribeBackupUrl request structure.
 * @class
 */
class DescribeBackupUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup ID, which can be obtained through the `RedisBackupSet` parameter returned by the [DescribeInstanceBackups](https://intl.cloud.tencent.com/document/product/239/20011?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * Limit type of the network from which you can download backup files. If this parameter is not configured, the user-defined configuration will be used.
- NoLimit: There is no limit. Backup files can be downloaded from both Tencent Cloud private and public networks.
- LimitOnlyIntranet: Backup files can be downloaded 
 only from the private IP address automatically assigned by Tencent Cloud.
- Customize: Backup files can be downloaded from the user-defined VPC.
         * @type {string || null}
         */
        this.LimitType = null;

        /**
         * Only `In` can be passed in for this parameter, indicating that backup files can be downloaded in the custom `LimitVpc`.
         * @type {string || null}
         */
        this.VpcComparisonSymbol = null;

        /**
         * Whether backup files can be downloaded from the custom IP address specified by LimitIp.
- In: yes. This is the default value.
- NotIn: no.
         * @type {string || null}
         */
        this.IpComparisonSymbol = null;

        /**
         * VPC ID of the custom backup file download address, which is required if `LimitType` is `Customize`.
         * @type {Array.<BackupLimitVpcItem> || null}
         */
        this.LimitVpc = null;

        /**
         * VPC IP of the custom backup file download address, which is required if `LimitType` is `Customize`.
         * @type {Array.<string> || null}
         */
        this.LimitIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.LimitType = 'LimitType' in params ? params.LimitType : null;
        this.VpcComparisonSymbol = 'VpcComparisonSymbol' in params ? params.VpcComparisonSymbol : null;
        this.IpComparisonSymbol = 'IpComparisonSymbol' in params ? params.IpComparisonSymbol : null;

        if (params.LimitVpc) {
            this.LimitVpc = new Array();
            for (let z in params.LimitVpc) {
                let obj = new BackupLimitVpcItem();
                obj.deserialize(params.LimitVpc[z]);
                this.LimitVpc.push(obj);
            }
        }
        this.LimitIp = 'LimitIp' in params ? params.LimitIp : null;

    }
}

/**
 * DeleteParamTemplate response structure.
 * @class
 */
class DeleteParamTemplateResponse extends  AbstractModel {
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
         * List of instance details
         * @type {Array.<InstanceSet> || null}
         */
        this.InstanceSet = null;

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
                let obj = new InstanceSet();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Task details
 * @class
 */
class TaskInfoDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Task start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task type.

- FLOW_CREATE: "001", indicating instance creation.
- FLOW_RESIZE: "002", indicating configuration modification.
- FLOW_CLOSE: "003", indicating instance disabling.
- FLOW_CLEAN: "004", indicating instance cleanup.
- FLOW_STARTUP: "005", indicating instance enabling.
- FLOW_DELETE: "006", indicating instance deletion.
- FLOW_SETPWD: "007", indicating password reset.
- FLOW_EXPORTBACKUP: "009", indicating backup file export.
- FLOW_RESTOREBACKUP: "010", indicating backup restoration.
- FLOW_BACKUPINSTANCE: "012", indicating instance backup.
- FLOW_MIGRATEINSTANCE: "013", indicating instance migration.
- FLOW_DELBACKUP: "014", indicating backup deletion.
- FLOW_EXCHANGEINSTANCE: "016", indicating instance switch.
- FLOW_AUTOBACKUP: "017", indicating automatic instance backup.
- FLOW_MIGRATECHECK: "022", indicating migration parameter verification.
- FLOW_MIGRATETASK: "023", indicating that data migration is in progress.
- FLOW_CLEANDB: "025", indicating database cleanup.
- FLOW_CLONEBACKUP: "026": indicating backup cloning.
- FLOW_CHANGEVIP: "027", indicating VIP address modification.
- FLOW_EXPORSHR: "028", indicating scaling.
- FLOW_ADDNODES: "029", indicating node addition (removal).
- FLOW_CHANGENET: "031", indicating network type modification.
- FLOW_MODIFYINSTACEREADONLY: "033": indicating read-only policy modification.
- FLOW_MODIFYINSTANCEPARAMS: "034", indicating instance parameter modification.
- FLOW_MODIFYINSTANCEPASSWORDFREE: "035", indicating password-free access settings.
- FLOW_SWITCHINSTANCEVIP: "036", indicating instance VIP address switch.
- FLOW_MODIFYINSTANCEACCOUNT: "037", indicating instance account modification.
- FLOW_MODIFYINSTANCEBANDWIDTH: "038", indicating instance bandwidth modification.
- FLOW_ENABLEINSTANCE_REPLICATE: "039", indicating enabling of read-only replica.
- FLOW_DISABLEINSTANCE_REPLICATE: "040", indicating disabling of read-only replica.
- FLOW_UpgradeArch: "041", indicating instance architecture upgrade from the standard architecture to the cluster architecture.
- FLOW_DowngradeArch: "042", indicating instance architecture downgrade from the cluster architecture to the standard architecture.
- FLOW_UpgradeVersion: "043", indicating version upgrade.
- FLOW_MODIFYCONNECTIONCONFIG: "044", indicating adjustment of the bandwidth and the number of connections.
- FLOW_CLEARNETWORK: "045", indicating network change.
- FLOW_REMOVE_BACKUP_FILE: "046", indicating backup deletion.
- FLOW_UPGRADE_SUPPORT_MULTI_AZ: "047", indicating instance upgrade to multi-AZ deployment.
- FLOW_SHUTDOWN_MASTER: "048", indicating fault simulation.
- FLOW_CHANGE_REPLICA_TO_MASTER: "049", indicating manual promotion to the primary node.
- FLOW_CODE_ADD_REPLICATION_INSTANCE: "050", indicating replication group addition.
- FLOW_OPEN_WAN: "052", indicating enabling of public network access.
- FLOW_CLOSE_WAN: "053", indicating disabling of public network access.
- FLOW_CODE_DELETE_REPLICATION_INSTANCE: "055", indicating replication group unbinding.
- FLOW_CODE_CHANGE_MASTER_INSTANCE: "056", indicating switching a replication group instance to the primary instance.
- FLOW_CODE_CHANGE_INSTANCE_ROLE: "057", indicating modification of the replication group instance role.
- FLOW_MIGRATE_NODE: "058", indicating node migration.
- FLOW_SWITCH_NODE: "059", indicating node switch.
- FLOW_UPGRADE_SMALL_VERSION: "060", indicating Redis version upgrade.
- FLOW_UPGRADE_PROXY_VERSION: "061", indicating proxy version upgrade.
- FLOW_MODIFY_INSTANCE_NETWORK: "062", indicating instance network modification.
- FLOW_MIGRATE_PROXY_NODE: "063", indicating proxy node migration.
- FLOW_MIGRATION_INSTANCE_ZONE: "066", indicating that instance migration to another AZ is in progress.
- FLOW_UPGRADE_INSTANCE_CACHE_AND_PROXY: "067", indicating that instance version upgrade is in progress.
- FLOW_MODIFY_PROXY_NUM: "069", indicating proxy node addition (removal).
- FLOW_MODIFYBACKUPMOD: "070", indicating instance backup mode modification.
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Task progress.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Task execution end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Task execution status.



0: initializing the task.
1: executing.
2. completed.
4: failed.
         * @type {number || null}
         */
        this.Result = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Result = 'Result' in params ? params.Result : null;

    }
}

/**
 * DescribeInstanceZoneInfo response structure.
 * @class
 */
class DescribeInstanceZoneInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instance node groups
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instance node groups
         * @type {Array.<ReplicaGroup> || null}
         */
        this.ReplicaGroups = null;

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

        if (params.ReplicaGroups) {
            this.ReplicaGroups = new Array();
            for (let z in params.ReplicaGroups) {
                let obj = new ReplicaGroup();
                obj.deserialize(params.ReplicaGroups[z]);
                this.ReplicaGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Sub-account information
 * @class
 */
class Account extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Account name.
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Account description.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Read/Write permission policy.
- r: read-only.

 - w: write-only.
- rw: read/write.
         * @type {string || null}
         */
        this.Privilege = null;

        /**
         * Read-only routing policy.
 - master: primary node.
 - replication: replica node.
         * @type {Array.<string> || null}
         */
        this.ReadonlyPolicy = null;

        /**
         * Sub-account status.
 - 1: account under modification.
 - 2: valid account.
 - 4: account deleted.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * Proxy slow query details
 * @class
 */
class InstanceProxySlowlogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Slow query duration in milliseconds
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Client address
         * @type {string || null}
         */
        this.Client = null;

        /**
         * Slow query command
         * @type {string || null}
         */
        this.Command = null;

        /**
         * Detailed command line information of slow query
         * @type {string || null}
         */
        this.CommandLine = null;

        /**
         * Execution time
         * @type {string || null}
         */
        this.ExecuteTime = null;

        /**
         * Duration of receiving client requests (ms).
         * @type {number || null}
         */
        this.RecvClientEnd = null;

        /**
         * Duration of sending client requests (ms).
         * @type {number || null}
         */
        this.SendClientEnd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Client = 'Client' in params ? params.Client : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.CommandLine = 'CommandLine' in params ? params.CommandLine : null;
        this.ExecuteTime = 'ExecuteTime' in params ? params.ExecuteTime : null;
        this.RecvClientEnd = 'RecvClientEnd' in params ? params.RecvClientEnd : null;
        this.SendClientEnd = 'SendClientEnd' in params ? params.SendClientEnd : null;

    }
}

/**
 * Security group inbound/outbound rules
 * @class
 */
class SecurityGroupsInboundAndOutbound extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the inbound and outbound IP addresses and ports of the database are allowed.
- ACCEPT: allowed.
- DROP: disallowed.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * IP address for accessing the database
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Port number
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Protocol type
         * @type {string || null}
         */
        this.Proto = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Proto = 'Proto' in params ? params.Proto : null;

    }
}

/**
 * ResetPassword response structure.
 * @class
 */
class ResetPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID (this parameter is the task ID when changing a password. If you are switching between password-free and password-enabled instance mode, you can leave this parameter alone)
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearInstance request structure.
 * @class
 */
class ClearInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance access password.
- Password-free access: No configuration is required.
- Password authentication: The password is required. It cannot start with a forward slash (/) and should contain 8 to 64 characters, including at least two of the following types: lowercase letters, uppercase letters, digits, and special characters (such as ()`~!@#$%^&*-+=_|{}[]:;<>,.?/).
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Whether to encrypt the password.
         * @type {boolean || null}
         */
        this.EncryptPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.EncryptPassword = 'EncryptPassword' in params ? params.EncryptPassword : null;

    }
}

/**
 * UpgradeInstanceVersion request structure.
 * @class
 */
class UpgradeInstanceVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target instance type after the change, which is the same as the `TypeId` of the [CreateInstances](https://intl.cloud.tencent.com/document/api/239/20026?from_cn_redirect=1) API.
- For Redis 4.0 or later, a standard architecture instance can be upgraded to a cluster architecture instance on the same version; for example, you can upgrade from Redis 4.0 Standard Architecture to Redis 4.0 Cluster Architecture.
- Cross-version architecture upgrade is not supported; for example, you cannot upgrade from Redis 4.0 Standard Architecture to Redis 5.0 Cluster Architecture.
- The architecture of Redis 2.8 cannot be upgraded.
- Cluster architecture cannot be downgraded to standard architecture.

         * @type {string || null}
         */
        this.TargetInstanceType = null;

        /**
         * Switch time. Valid values:
- `1`: Switch in the maintenance time.
- `2` (default value): Switch now.
         * @type {number || null}
         */
        this.SwitchOption = null;

        /**
         * ID of the specified instance, such as `crs-xjhsdj****`. Log in to the [Redis console](https://console.cloud.tencent.com/redis#/), and copy it in the instance list.
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
        this.TargetInstanceType = 'TargetInstanceType' in params ? params.TargetInstanceType : null;
        this.SwitchOption = 'SwitchOption' in params ? params.SwitchOption : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Region information
 * @class
 */
class RegionConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region abbreviation
         * @type {string || null}
         */
        this.RegionShortName = null;

        /**
         * Name of the area where a region is located
         * @type {string || null}
         */
        this.Area = null;

        /**
         * AZ information
         * @type {Array.<ZoneCapacityConf> || null}
         */
        this.ZoneSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionShortName = 'RegionShortName' in params ? params.RegionShortName : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneCapacityConf();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }

    }
}

/**
 * Big key details
 * @class
 */
class BigKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database
         * @type {number || null}
         */
        this.DB = null;

        /**
         * Big key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Size
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Data timestamp
         * @type {number || null}
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DB = 'DB' in params ? params.DB : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * DescribeBandwidthRange response structure.
 * @class
 */
class DescribeBandwidthRangeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Standard bandwidth, which is the bandwidth allocated by the system to each node when an instance is purchased.
         * @type {number || null}
         */
        this.BaseBandwidth = null;

        /**
         * The additional bandwidth of the instance. If the standard bandwidth does not meet your needs, you can increase the bandwidth on your own. <ul><li>If read-only replica is enabled, the total instance bandwidth = additional bandwidth * shard quantity + standard bandwidth * shard quantity * Max ([read-only replica quantity, 1]). The shard quantity in the standard architecture is 1. </li><li>If read-only replica is not enabled, the total instance bandwidth = additional bandwidth * shard quantity + standard bandwidth * shard quantity. The shard quantity in the standard architecture is 1.</li></ul>
         * @type {number || null}
         */
        this.AddBandwidth = null;

        /**
         * The lower limit for additional bandwidth
         * @type {number || null}
         */
        this.MinAddBandwidth = null;

        /**
         * The upper limit for additional bandwidth
         * @type {number || null}
         */
        this.MaxAddBandwidth = null;

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
        this.BaseBandwidth = 'BaseBandwidth' in params ? params.BaseBandwidth : null;
        this.AddBandwidth = 'AddBandwidth' in params ? params.AddBandwidth : null;
        this.MinAddBandwidth = 'MinAddBandwidth' in params ? params.MinAddBandwidth : null;
        this.MaxAddBandwidth = 'MaxAddBandwidth' in params ? params.MaxAddBandwidth : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeParamTemplates request structure.
 * @class
 */
class DescribeParamTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product type array.
- 2: Redis 2.8 Memory Edition (standard architecture).
- 3: CKV 3.2 Memory Edition (standard architecture).
- 4: CKV 3.2 Memory Edition (cluster architecture).
- 6: Redis 4.0 Memory Edition (standard architecture).
- 7: Redis 4.0 Memory Edition (cluster architecture).
- 8: Redis 5.0 Memory Edition (standard architecture).
- 9: Redis 5.0 Memory Edition (cluster architecture).
- 15: Redis 6.2 Memory Edition (standard architecture).
- 16: Redis 6.2 Memory Edition (cluster architecture).
- 17: Redis 7.0 Memory Edition (standard architecture).
- 18: Redis 7.0 Memory Edition (cluster architecture).
         * @type {Array.<number> || null}
         */
        this.ProductTypes = null;

        /**
         * Template name array, with the maximum array length of 50.
         * @type {Array.<string> || null}
         */
        this.TemplateNames = null;

        /**
         * Template ID array, with the maximum array length of 50.
         * @type {Array.<string> || null}
         */
        this.TemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductTypes = 'ProductTypes' in params ? params.ProductTypes : null;
        this.TemplateNames = 'TemplateNames' in params ? params.TemplateNames : null;
        this.TemplateIds = 'TemplateIds' in params ? params.TemplateIds : null;

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
         * Validity period in months
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The parameter used to determine whether to modify the billing mode. <ul><li>If you want to change the billing mode from pay-as-you-go to monthly subscription, specify this parameter as <b>prepaid</b>. </li><li>If the current instance is monthly subscribed, this parameter is not required. </li></ul>
         * @type {string || null}
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
        this.Period = 'Period' in params ? params.Period : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ModifyPayMode = 'ModifyPayMode' in params ? params.ModifyPayMode : null;

    }
}

/**
 * Instance event information.
 * @class
 */
class RedisInstanceEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Event type. Currently, the type can only be related to instance migration, resource movement, and IDC deletion. This parameter can be set only to **InstanceMigration**.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Event level. The levels are divided into critical, important, medium, and general based on severity and urgency.
 - Critical: critical.
 - High: important.
 - Middle: medium.
 - Low.
         * @type {string || null}
         */
        this.Grade = null;

        /**
         * Scheduled event execution date.
         * @type {string || null}
         */
        this.ExecutionDate = null;

        /**
         * Start date of scheduled event execution.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End date of scheduled event execution.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Latest execution date of the Ops event. The event should be completed before this date. Otherwise, the business may be affected.
         * @type {string || null}
         */
        this.LatestExecutionDate = null;

        /**
         * Current event status.
 - Waiting: event not reached the execution date or not within the maintenance window.
 - Running: event within the maintenance window and under maintenance execution.
 - Finished: event with maintenance completed.
- Canceled: Execution of the event is canceled.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Completion time of the event execution task.
         * @type {string || null}
         */
        this.TaskEndTime = null;

        /**
         * Event impact information.
         * @type {string || null}
         */
        this.EffectInfo = null;

        /**
         * Initial scheduled event execution date.
         * @type {string || null}
         */
        this.InitialExecutionDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Grade = 'Grade' in params ? params.Grade : null;
        this.ExecutionDate = 'ExecutionDate' in params ? params.ExecutionDate : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.LatestExecutionDate = 'LatestExecutionDate' in params ? params.LatestExecutionDate : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskEndTime = 'TaskEndTime' in params ? params.TaskEndTime : null;
        this.EffectInfo = 'EffectInfo' in params ? params.EffectInfo : null;
        this.InitialExecutionDate = 'InitialExecutionDate' in params ? params.InitialExecutionDate : null;

    }
}

/**
 * UpgradeVersionToMultiAvailabilityZones response structure.
 * @class
 */
class UpgradeVersionToMultiAvailabilityZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * Security group rules
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation time in the format of yyyy-mm-dd hh:mm:ss.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Security group ID.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group name.
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * Security group remarks.
         * @type {string || null}
         */
        this.SecurityGroupRemark = null;

        /**
         * Outbound rule.
         * @type {Array.<Outbound> || null}
         */
        this.Outbound = null;

        /**
         * Inbound rule.
         * @type {Array.<Inbound> || null}
         */
        this.Inbound = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new Outbound();
                obj.deserialize(params.Outbound[z]);
                this.Outbound.push(obj);
            }
        }

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new Inbound();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

    }
}

/**
 * DescribeBandwidthRange request structure.
 * @class
 */
class DescribeBandwidthRangeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
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
 * DescribeInstanceParamRecords response structure.
 * @class
 */
class DescribeInstanceParamRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of modifications.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information of modifications.
         * @type {Array.<InstanceParamHistory> || null}
         */
        this.InstanceParamHistory = null;

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

        if (params.InstanceParamHistory) {
            this.InstanceParamHistory = new Array();
            for (let z in params.InstanceParamHistory) {
                let obj = new InstanceParamHistory();
                obj.deserialize(params.InstanceParamHistory[z]);
                this.InstanceParamHistory.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoBackupConfig request structure.
 * @class
 */
class ModifyAutoBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.

         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Automatic backup cycle. Valid values: `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`. This parameter currently cannot be modified.
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * Automatic backup time in the format of 00:00-01:00, 01:00-02:00... 23:00-00:00.
         * @type {string || null}
         */
        this.TimePeriod = null;

        /**
         * Automatic backup type.  Valid value:  `1` (scheduled backup).
         * @type {number || null}
         */
        this.AutoBackupType = null;

        /**
         * Specifies the retention days of full backup files. unit: day.
         * @type {number || null}
         */
        this.BackupStorageDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.AutoBackupType = 'AutoBackupType' in params ? params.AutoBackupType : null;
        this.BackupStorageDays = 'BackupStorageDays' in params ? params.BackupStorageDays : null;

    }
}

/**
 * Description of the instance parameter in Multi type
 * @class
 */
class InstanceMultiParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Parameter Type such as  `MULTI`
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * Whether to restart the database after modifying the parameter. Valid values:  - `true` (required) - `false` (not required)
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * Default value of the parameter
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Current value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Tips = null;

        /**
         * Parameter enumeration value.
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * Parameter modification status. Valid values: - `1` (modifying) - `2` (modified)
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
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeInstanceDealDetail request structure.
 * @class
 */
class DescribeInstanceDealDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order transaction ID array, which is the output parameter DealId of [CreateInstances](https://intl.cloud.tencent.com/document/api/239/20026?from_cn_redirect=1), with the maximum array length of 10.
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealIds = 'DealIds' in params ? params.DealIds : null;

    }
}

/**
 * KillMasterGroup response structure.
 * @class
 */
class KillMasterGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Running information of Redis nodes
 * @class
 */
class RedisNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of keys on Redis nodes
         * @type {number || null}
         */
        this.Keys = null;

        /**
         * Slot distribution range for Redis node.  Value range:  0-5460.
         * @type {string || null}
         */
        this.Slot = null;

        /**
         * Node sequence ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * Node status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Node role
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Slot = 'Slot' in params ? params.Slot : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * DescribeProjectSecurityGroup request structure.
 * @class
 */
class DescribeProjectSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID for query.
- 0: default project.
- -1: all projects.
- Greater than 0: specific project. Log in to the [project management](https://console.tencentcloud.com/project) page of the Redis console and copy the project ID in **Project Name**.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Security group ID, which can be obtained through the sub-parameter **SecurityGroupId** of the response parameter **InstanceSecurityGroupsDetail** of the API [DescribeInstanceSecurityGroup](https://intl.cloud.tencent.com/document/product/239/34447?from_cn_redirect=1).
         * @type {string || null}
         */
        this.SecurityGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

    }
}

/**
 * Details of the parameters in the parameter template
 * @class
 */
class ParameterDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter Type
         * @type {string || null}
         */
        this.ParamType = null;

        /**
         * Default value of the parameter
         * @type {string || null}
         */
        this.Default = null;

        /**
         * Parameter description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Current value of the parameter
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Whether to restart the database for the modified parameters to take effect
- `0`: No restart.
- `1`: Restart required.
         * @type {number || null}
         */
        this.NeedReboot = null;

        /**
         * Maximum parameter value allowed.
         * @type {string || null}
         */
        this.Max = null;

        /**
         * Minimum parameter value allowed.
         * @type {string || null}
         */
        this.Min = null;

        /**
         * Optional enumeration values of a parameter. For non-enumeration parameters, it is empty.
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ParamType = 'ParamType' in params ? params.ParamType : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.NeedReboot = 'NeedReboot' in params ? params.NeedReboot : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;

    }
}

/**
 * DescribeInstanceShards response structure.
 * @class
 */
class DescribeInstanceShardsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List information of the instance shards, which includes  node information, node ID, key count, used capacity, and capacity slope.
         * @type {Array.<InstanceClusterShard> || null}
         */
        this.InstanceShards = null;

        /**
         * Number of instance shard nodes
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

        if (params.InstanceShards) {
            this.InstanceShards = new Array();
            for (let z in params.InstanceShards) {
                let obj = new InstanceClusterShard();
                obj.deserialize(params.InstanceShards[z]);
                this.InstanceShards.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRedisClusterOverview response structure.
 * @class
 */
class DescribeRedisClusterOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of resource packages.
         * @type {number || null}
         */
        this.TotalBundle = null;

        /**
         * Total memory size occupied by resource packages. Unit: GB.
         * @type {number || null}
         */
        this.TotalMemory = null;

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
        this.TotalBundle = 'TotalBundle' in params ? params.TotalBundle : null;
        this.TotalMemory = 'TotalMemory' in params ? params.TotalMemory : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableReplicaReadonly request structure.
 * @class
 */
class DisableReplicaReadonlyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
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
 * Details of the dedicated Redis cluster.
 * @class
 */
class CDCResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * App ID of a user.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Region ID.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * AZ ID.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * ID of the dedicated Redis cluster.
         * @type {string || null}
         */
        this.RedisClusterId = null;

        /**
         * Billing mode. 1: monthly subscription; 0: pay-as-you-go.
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Automatic renewal flag. 0: default status (manual renewal); 1: automatic renewal; 2: no automatic renewal.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Dedicated cluster name.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Instance expiration time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Cluster status. 1: in process; 2: running; 3: isolated.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Basic control resource package.
         * @type {Array.<ResourceBundle> || null}
         */
        this.BaseBundles = null;

        /**
         * Resource package list.
         * @type {Array.<ResourceBundle> || null}
         */
        this.ResourceBundles = null;

        /**
         * Local dedicated cluster ID.
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RedisClusterId = 'RedisClusterId' in params ? params.RedisClusterId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.BaseBundles) {
            this.BaseBundles = new Array();
            for (let z in params.BaseBundles) {
                let obj = new ResourceBundle();
                obj.deserialize(params.BaseBundles[z]);
                this.BaseBundles.push(obj);
            }
        }

        if (params.ResourceBundles) {
            this.ResourceBundles = new Array();
            for (let z in params.ResourceBundles) {
                let obj = new ResourceBundle();
                obj.deserialize(params.ResourceBundles[z]);
                this.ResourceBundles.push(obj);
            }
        }
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;

    }
}

/**
 * ModifyInstanceLogDelivery response structure.
 * @class
 */
class ModifyInstanceLogDeliveryResponse extends  AbstractModel {
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
 * ModifyBackupDownloadRestriction request structure.
 * @class
 */
class ModifyBackupDownloadRestrictionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of the network restrictions for downloading backup files. Valid values:

- `NoLimit`: Backup files can be downloaded over both public and private networks.
- `LimitOnlyIntranet`: Backup files can be downloaded only at private network addresses auto-assigned by Tencent Cloud.
- `Customize`: Backup files can be downloaded only in the customized VPC.
         * @type {string || null}
         */
        this.LimitType = null;

        /**
         * Only `In` can be passed in for this parameter, indicating that backup files can be downloaded in the custom `LimitVpc`.
         * @type {string || null}
         */
        this.VpcComparisonSymbol = null;

        /**
         * Whether backups can be downloaded at the custom `LimitIp` address.

- `In`: Download is allowed for the custom IP.
- `NotIn`: Download is not allowed for the custom IP.
         * @type {string || null}
         */
        this.IpComparisonSymbol = null;

        /**
         * VPC ID of the custom backup file download address, which is required if `LimitType` is `Customize`.
         * @type {Array.<BackupLimitVpcItem> || null}
         */
        this.LimitVpc = null;

        /**
         * VPC IP of the custom backup file download address, which is required if `LimitType` is `Customize`.

         * @type {Array.<string> || null}
         */
        this.LimitIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LimitType = 'LimitType' in params ? params.LimitType : null;
        this.VpcComparisonSymbol = 'VpcComparisonSymbol' in params ? params.VpcComparisonSymbol : null;
        this.IpComparisonSymbol = 'IpComparisonSymbol' in params ? params.IpComparisonSymbol : null;

        if (params.LimitVpc) {
            this.LimitVpc = new Array();
            for (let z in params.LimitVpc) {
                let obj = new BackupLimitVpcItem();
                obj.deserialize(params.LimitVpc[z]);
                this.LimitVpc.push(obj);
            }
        }
        this.LimitIp = 'LimitIp' in params ? params.LimitIp : null;

    }
}

/**
 * DisableReplicaReadonly response structure.
 * @class
 */
class DisableReplicaReadonlyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyPrepaidInstance request structure.
 * @class
 */
class DestroyPrepaidInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
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
 * CreateParamTemplate response structure.
 * @class
 */
class CreateParamTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID.
         * @type {string || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance tag information
 * @class
 */
class InstanceTagInfo extends  AbstractModel {
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
 * DescribeInstanceDTSInfo response structure.
 * @class
 */
class DescribeInstanceDTSInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DTS task ID.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * DTS task name.
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Task status. 1: creating (Creating); 3: checking (Checking); 4: check successful (CheckPass); 5: check failed (CheckNotPass); 7: task running (Running); 8: preparation completed (ReadyComplete); 9: task successful (Success); 10: task failed (Failed); 11: stopping (Stopping); 12: completing (Completing).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Status description.
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Synchronization delay. Unit: bytes.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Disconnection time.
         * @type {string || null}
         */
        this.CutDownTime = null;

        /**
         * Source instance information.
         * @type {DescribeInstanceDTSInstanceInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Destination instance information.
         * @type {DescribeInstanceDTSInstanceInfo || null}
         */
        this.DstInfo = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.CutDownTime = 'CutDownTime' in params ? params.CutDownTime : null;

        if (params.SrcInfo) {
            let obj = new DescribeInstanceDTSInstanceInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new DescribeInstanceDTSInstanceInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceEvents request structure.
 * @class
 */
class DescribeInstanceEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start date for querying the event execution plan, with a maximum query span of 30 days.
         * @type {string || null}
         */
        this.ExecutionStartDate = null;

        /**
         * End date for querying the event execution plan, with a maximum query span of 30 days.
         * @type {string || null}
         */
        this.ExecutionEndDate = null;

        /**
         * Specifies the instance ID. Example: crs-xjhsdj****. Log in to the [TencentDB for Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Outputs the number of events displayed per page.
- Default value: 10.
- Value range: [1, 100].
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Configures the output page number for querying events. You can query events on a certain page by specifying PageNo (page number) and PageSize (number of output results per page).
- Default value: 1.
- Value range: positive integers greater than 0.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Current status of the event.- Waiting: The event is waiting for execution on the execution date or during the operations period.- Running: The event is being executed during the operations period.- Finished: Execution of the event is completed.- Canceled: Execution of the event is canceled.
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * Event type. Currently, the type can only be related to instance migration, resource movement, and IDC deletion. This parameter can be set only to **InstanceMigration**.
         * @type {Array.<string> || null}
         */
        this.EventTypes = null;

        /**
         * Configures the level of the queried event. Events are divided into Critical, High, Medium, and Low events according to the severity and urgency.- Critical- High- Medium- Low
         * @type {Array.<string> || null}
         */
        this.Grades = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecutionStartDate = 'ExecutionStartDate' in params ? params.ExecutionStartDate : null;
        this.ExecutionEndDate = 'ExecutionEndDate' in params ? params.ExecutionEndDate : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EventTypes = 'EventTypes' in params ? params.EventTypes : null;
        this.Grades = 'Grades' in params ? params.Grades : null;

    }
}

/**
 * DescribeGlobalReplicationArea request structure.
 * @class
 */
class DescribeGlobalReplicationAreaRequest extends  AbstractModel {
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
 * AddReplicationInstance response structure.
 * @class
 */
class AddReplicationInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asynchronous process ID.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyPostpaidInstance response structure.
 * @class
 */
class DestroyPostpaidInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchInstanceVip request structure.
 * @class
 */
class SwitchInstanceVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.SrcInstanceId = null;

        /**
         * Target instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.DstInstanceId = null;

        /**
         * DTS disconnection time between the source instance and target instance. Unit: second. If the DTS disconnection time exceeds TimeDelay, the VIP will not be switched. It is recommended to set an acceptable value based on business needs.
         * @type {number || null}
         */
        this.TimeDelay = null;

        /**
         * Whether to force a switch in the case of a DTS disconnection.
- 1: Force the switch.
- 0: Do not force the switch.
         * @type {number || null}
         */
        this.ForceSwitch = null;

        /**
         * now: switch now; syncComplete: switch after sync is completed
         * @type {string || null}
         */
        this.SwitchTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcInstanceId = 'SrcInstanceId' in params ? params.SrcInstanceId : null;
        this.DstInstanceId = 'DstInstanceId' in params ? params.DstInstanceId : null;
        this.TimeDelay = 'TimeDelay' in params ? params.TimeDelay : null;
        this.ForceSwitch = 'ForceSwitch' in params ? params.ForceSwitch : null;
        this.SwitchTime = 'SwitchTime' in params ? params.SwitchTime : null;

    }
}

/**
 * ChangeReplicaToMaster request structure.
 * @class
 */
class ChangeReplicaToMasterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.

         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ID of the replica node group. You can get more ID information of the multi-AZ replica node group though the [DescribeInstanceZoneInfo](https://intl.cloud.tencent.com/document/product/239/50312?from_cn_redirect=1) API.  This parameter is not required for a single-AZ replica node group.
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
 * Proxy node information
 * @class
 */
class ProxyNodes extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID.
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * AZ ID.
         * @type {number || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

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
 * Instance information
 * @class
 */
class RedisCommonInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * User APPID, which is the unique application ID that matches an account. Some Tencent Cloud products use this APPID.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Project ID of the instance
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Instance region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Instance AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance status information
- `1`: Task running.
- `2`: Instance running.
- `-2`: Instance isolated.
- `-3`: Instance being eliminated.
- `-4`: Instance eliminated.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Private network IP address of an instance
         * @type {Array.<string> || null}
         */
        this.Vips = null;

        /**
         * Instance network port
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.Createtime = null;

        /**
         * Billing type
- `0`: Pay-as-you-go.
- `1`: Monthly subscription.
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Network Type
- `0`: Classic network.
- `1`: VPC.
         * @type {number || null}
         */
        this.NetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vips = 'Vips' in params ? params.Vips : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Createtime = 'Createtime' in params ? params.Createtime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.NetType = 'NetType' in params ? params.NetType : null;

    }
}

/**
 * Access source information
 * @class
 */
class SourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Number of connections
         * @type {number || null}
         */
        this.Conn = null;

        /**
         * Command
         * @type {number || null}
         */
        this.Cmd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Conn = 'Conn' in params ? params.Conn : null;
        this.Cmd = 'Cmd' in params ? params.Cmd : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups response structure.
 * @class
 */
class ModifyDBInstanceSecurityGroupsResponse extends  AbstractModel {
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
 * ChangeMasterInstance request structure.
 * @class
 */
class ChangeMasterInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Replication group ID, such as `crs-rpl-m3zt****`. It is the unique identifier automatically assigned by the system when creating a replication group. Log in to the [TencentDB for Redis console](https://console.cloud.tencent.com/redis/replication), and get it in the global replication list.

         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * ID of the read-only instance to be promoted to the master instance, such as `crs-xjhsdj****`. Log in to the the [TencentDB for Redis console](https://console.cloud.tencent.com/redis), and copy it in the instance list.


         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether to promote the read-only instance to the master instance forcibly. Valid values:
- `true`: Yes
- `false`: No
         * @type {boolean || null}
         */
        this.ForceSwitch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ForceSwitch = 'ForceSwitch' in params ? params.ForceSwitch : null;

    }
}

/**
 * DescribeInstanceDTSInfo request structure.
 * @class
 */
class DescribeInstanceDTSInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
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
 * CreateParamTemplate request structure.
 * @class
 */
class CreateParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template name, which can contain [2, 64] characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter template description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Product type.
- 6: Redis 4.0 Memory Edition (standard architecture).
- 7: Redis 4.0 Memory Edition (cluster architecture).
- 8: Redis 5.0 Memory Edition (standard architecture).
- 9: Redis 5.0 Memory Edition (cluster architecture).
- 15: Redis 6.2 Memory Edition (standard architecture).
- 16: Redis 6.2 Memory Edition (cluster architecture).
- 17: Redis 7.0 Memory Edition (standard architecture).
- 18: Redis 7.0 Memory Edition (cluster architecture).
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * ID of the source parameter template.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Parameter list.
         * @type {Array.<InstanceParam> || null}
         */
        this.ParamList = null;

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
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new InstanceParam();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

    }
}

/**
 * DescribeTendisSlowLog response structure.
 * @class
 */
class DescribeTendisSlowLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of slow queries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Slow query details. Note: If the value of TotalCount is greater than 10,000, indicating that the number of slow logs exceeds 10,000, log details cannot be returned. Instead, the returned data is empty. It is recommended to reduce the interval between BeginTime and EndTime and perform multiple queries.
         * @type {Array.<TendisSlowLogDetail> || null}
         */
        this.TendisSlowLogDetail = null;

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

        if (params.TendisSlowLogDetail) {
            this.TendisSlowLogDetail = new Array();
            for (let z in params.TendisSlowLogDetail) {
                let obj = new TendisSlowLogDetail();
                obj.deserialize(params.TendisSlowLogDetail[z]);
                this.TendisSlowLogDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProductInfo response structure.
 * @class
 */
class DescribeProductInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Selling information on the region. The selling information on all regions is returned even if a region is specified.
         * @type {Array.<RegionConf> || null}
         */
        this.RegionSet = null;

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

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionConf();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceAccount request structure.
 * @class
 */
class ModifyInstanceAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Specifies the account that needs modification.
- root: refers to the automatically generated account when a TencentDB for Redis® instance is created. Users cannot modify read-write permissions for the account, but can only modify its request routing policies.
- Custom account: an account manually created by users after successful instance creation. Users can modify read-write permissions and request routing policies for the account at any time.
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Specifies the access password for the account to be modified.
         * @type {string || null}
         */
        this.AccountPassword = null;

        /**
         * Account description information.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Specifies the read-write request routing policies for the account to be modified.
- master: read-write request routing to the primary node.
- replication: read-write request routing to the secondary node.
         * @type {Array.<string> || null}
         */
        this.ReadonlyPolicy = null;

        /**
         * Specifies the read-write permissions for the account to be modified.
- r: read-only.
- w: write-only.
- rw: read-write.
         * @type {string || null}
         */
        this.Privilege = null;

        /**
         * Specifies whether to set the default account (root) to a password-free account. Custom accounts do not support password-free access.
- true: set the default account (root) to a password-free account.
- false: not set the default account (root) to a password-free account.
         * @type {boolean || null}
         */
        this.NoAuth = null;

        /**
         * Specifies whether to encrypt the password for the account to be modified.
         * @type {boolean || null}
         */
        this.EncryptPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;
        this.EncryptPassword = 'EncryptPassword' in params ? params.EncryptPassword : null;

    }
}

/**
 * ModifyMaintenanceWindow request structure.
 * @class
 */
class ModifyMaintenanceWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time of the maintenance window, for example, 17:00.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the maintenance window, for example, 19:00.
**Note:** Maintenance window duration. Valid values: 30 minutes, 1 hour, 1.5 hours, 2 hours, and 3 hours.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeParamTemplateInfo request structure.
 * @class
 */
class DescribeParamTemplateInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The parameter template ID for query. Get parameter template list information through the [DescribeParamTemplates](https://intl.cloud.tencent.com/document/product/239/58750?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeBackupUrl response structure.
 * @class
 */
class DescribeBackupUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Public network download address (valid for six hours). This field will be disused soon.
         * @type {Array.<string> || null}
         */
        this.DownloadUrl = null;

        /**
         * Private network download address (valid for six hours). This field will be disused soon.
         * @type {Array.<string> || null}
         */
        this.InnerDownloadUrl = null;

        /**
         * Filename. This field will be disused soon.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Filenames = null;

        /**
         * Backup file information list.
         * @type {Array.<BackupDownloadInfo> || null}
         */
        this.BackupInfos = null;

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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.InnerDownloadUrl = 'InnerDownloadUrl' in params ? params.InnerDownloadUrl : null;
        this.Filenames = 'Filenames' in params ? params.Filenames : null;

        if (params.BackupInfos) {
            this.BackupInfos = new Array();
            for (let z in params.BackupInfos) {
                let obj = new BackupDownloadInfo();
                obj.deserialize(params.BackupInfos[z]);
                this.BackupInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSecurityGroups request structure.
 * @class
 */
class DescribeDBSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name, which is `redis` for this API.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * ID of the specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.

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
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyInstanceLogDelivery request structure.
 * @class
 */
class ModifyInstanceLogDeliveryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Log type. Currently, only slowlog is supported, indicating the slow query log.
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * Whether log shopping is enabled.
- true: enabled.
- false: disabled.
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * ID of the shipped logset. It can be obtained through the API [DescribeLogsets](https://intl.cloud.tencent.com/document/api/614/58624?from_cn_redirect=1).
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * ID of the shipped log topic. It can be obtained through the API [DescribeTopics](https://intl.cloud.tencent.com/document/api/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Logset name. It is required when **LogsetId** is left blank. The system will create a logset with the value of LogsetName and ship logs.
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * Log topic name. It is required when **TopicId** is left blank. The system will create a log topic with the value of TopicName and ship logs.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Region where the logset is located. If it is not provided, the region where the instance is located will be used by default.
         * @type {string || null}
         */
        this.LogRegion = null;

        /**
         * Log storage duration. Default value: 30 days. Value range: 1 to 3600 days.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether to create an index when creating a log topic.
         * @type {boolean || null}
         */
        this.CreateIndex = null;

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
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.LogRegion = 'LogRegion' in params ? params.LogRegion : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.CreateIndex = 'CreateIndex' in params ? params.CreateIndex : null;

    }
}

/**
 * DescribeProductInfo request structure.
 * @class
 */
class DescribeProductInfoRequest extends  AbstractModel {
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
 * InquiryPriceCreateInstance response structure.
 * @class
 */
class InquiryPriceCreateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price.
         * @type {number || null}
         */
        this.Price = null;

        /**
         * High precision price. 
         * @type {number || null}
         */
        this.HighPrecisionPrice = null;

        /**
         * Currency.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Price unit.

 - pent: cent.
 - microPent: microcent.
         * @type {string || null}
         */
        this.AmountUnit = null;

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
        this.Price = 'Price' in params ? params.Price : null;
        this.HighPrecisionPrice = 'HighPrecisionPrice' in params ? params.HighPrecisionPrice : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.AmountUnit = 'AmountUnit' in params ? params.AmountUnit : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Security group information of the instance
 * @class
 */
class InstanceSecurityGroupDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Security group information, which includes  security group ID, name, outbound and inbound rules.
         * @type {Array.<SecurityGroupDetail> || null}
         */
        this.SecurityGroupDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.SecurityGroupDetails) {
            this.SecurityGroupDetails = new Array();
            for (let z in params.SecurityGroupDetails) {
                let obj = new SecurityGroupDetail();
                obj.deserialize(params.SecurityGroupDetails[z]);
                this.SecurityGroupDetails.push(obj);
            }
        }

    }
}

/**
 * DescribeInstanceParams response structure.
 * @class
 */
class DescribeInstanceParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of the parameter lists
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance parameter in Enum type
         * @type {Array.<InstanceEnumParam> || null}
         */
        this.InstanceEnumParam = null;

        /**
         * Instance parameter in Integer type
         * @type {Array.<InstanceIntegerParam> || null}
         */
        this.InstanceIntegerParam = null;

        /**
         * Instance parameter in Char type
         * @type {Array.<InstanceTextParam> || null}
         */
        this.InstanceTextParam = null;

        /**
         * Instance parameter in Multi type
         * @type {Array.<InstanceMultiParam> || null}
         */
        this.InstanceMultiParam = null;

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

        if (params.InstanceEnumParam) {
            this.InstanceEnumParam = new Array();
            for (let z in params.InstanceEnumParam) {
                let obj = new InstanceEnumParam();
                obj.deserialize(params.InstanceEnumParam[z]);
                this.InstanceEnumParam.push(obj);
            }
        }

        if (params.InstanceIntegerParam) {
            this.InstanceIntegerParam = new Array();
            for (let z in params.InstanceIntegerParam) {
                let obj = new InstanceIntegerParam();
                obj.deserialize(params.InstanceIntegerParam[z]);
                this.InstanceIntegerParam.push(obj);
            }
        }

        if (params.InstanceTextParam) {
            this.InstanceTextParam = new Array();
            for (let z in params.InstanceTextParam) {
                let obj = new InstanceTextParam();
                obj.deserialize(params.InstanceTextParam[z]);
                this.InstanceTextParam.push(obj);
            }
        }

        if (params.InstanceMultiParam) {
            this.InstanceMultiParam = new Array();
            for (let z in params.InstanceMultiParam) {
                let obj = new InstanceMultiParam();
                obj.deserialize(params.InstanceMultiParam[z]);
                this.InstanceMultiParam.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReplicationGroupInstance response structure.
 * @class
 */
class DescribeReplicationGroupInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * AppID。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Numerical code of a region.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * String ID of a replication group.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Replication group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Instance replication group role.
- r: secondary instance.
- rw: primary instance.
         * @type {string || null}
         */
        this.InstanceRole = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeProxyVersion response structure.
 * @class
 */
class UpgradeProxyVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
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
 * ResetPassword request structure.
 * @class
 */
class ResetPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Reset password. This parameter can be left unspecified when a password-free instance is used.
- It should contain 8 to 32 characters. 12 or more characters are recommended.
- It cannot start with a forward slash (/).
- It should contain at least two of the following types: lowercase letters, uppercase letters, digits, and special characters (such as ()~!@#$%^&*-+=_|{}[]:;<>,.?/).
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Whether to switch to a password-free instance.
- false: switch to an instance that requires a password. The default value is false.
- true: switch to a password-free instance.
         * @type {boolean || null}
         */
        this.NoAuth = null;

        /**
         * Whether to encrypt the password.
- false: non-encrypted password. The default value is false.
- true: encrypted password.
         * @type {boolean || null}
         */
        this.EncryptPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;
        this.EncryptPassword = 'EncryptPassword' in params ? params.EncryptPassword : null;

    }
}

/**
 * ModifyInstanceAccount response structure.
 * @class
 */
class ModifyInstanceAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Delay distribution details
 * @class
 */
class DelayDistribution extends  AbstractModel {
    constructor(){
        super();

        /**
         * The delay distribution. The mapping between delay range and `Ladder` value is as follows:  - `1`: [0ms,1ms]. - `5`: [1ms,5ms]. - `10`: [5ms,10ms]. - `50`: [10ms,50ms]. - `200`:  [50ms,200ms]. - `-1`: [200ms,∞].
         * @type {number || null}
         */
        this.Ladder = null;

        /**
         * The number of commands with delay falling within the current delay range -
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Modification time
         * @type {number || null}
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ladder = 'Ladder' in params ? params.Ladder : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * DescribeProjectSecurityGroups response structure.
 * @class
 */
class DescribeProjectSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group rules.
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * Total number of eligible security groups.
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceReadOnly response structure.
 * @class
 */
class ModifyInstanceReadOnlyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupDetail request structure.
 * @class
 */
class DescribeBackupDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup ID, which can be obtained through the response parameter **RedisBackupSet** of the API [DescribeInstanceBackups](https://intl.cloud.tencent.com/document/product/239/20011?from_cn_redirect=1).
         * @type {string || null}
         */
        this.BackupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;

    }
}

/**
 * DescribeInstanceMonitorTookDist response structure.
 * @class
 */
class DescribeInstanceMonitorTookDistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Latency distribution information.
         * @type {Array.<DelayDistribution> || null}
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
                let obj = new DelayDistribution();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceBackups response structure.
 * @class
 */
class DescribeInstanceBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of backups.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of instance backups.
         * @type {Array.<RedisBackupSet> || null}
         */
        this.BackupSet = null;

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

        if (params.BackupSet) {
            this.BackupSet = new Array();
            for (let z in params.BackupSet) {
                let obj = new RedisBackupSet();
                obj.deserialize(params.BackupSet[z]);
                this.BackupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Description of the instance parameter in Integer type
 * @class
 */
class InstanceIntegerParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Parameter type: Integer
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * Whether restart is required after a modification is made. Valid values: true, false
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * Default value of the parameter
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Current value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Parameter description
         * @type {string || null}
         */
        this.Tips = null;

        /**
         * Minimum value of the parameter
         * @type {string || null}
         */
        this.Min = null;

        /**
         * Maximum value of the parameter
         * @type {string || null}
         */
        this.Max = null;

        /**
         * Parameter status. 1: modifying; 2: modified
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Parameter unit.
         * @type {string || null}
         */
        this.Unit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * UpgradeVersionToMultiAvailabilityZones request structure.
 * @class
 */
class UpgradeVersionToMultiAvailabilityZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.cloud.tencent.com/redis/instance/list), and copy it from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Specifies whether the nearby access feature is supported after an upgrade to multi-AZ.
- true: support the nearby access feature. The upgrade process requires simultaneous upgrades of the proxy version and Redis kernel minor version, which involves data migration and may take several hours.
- false: no need to support the nearby access feature. Upgrade to multi-AZ only involves metadata migration management, with no impact on the service. The upgrade process is usually completed within 3 minutes, and the default value is false.
         * @type {boolean || null}
         */
        this.UpgradeProxyAndRedisServer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UpgradeProxyAndRedisServer = 'UpgradeProxyAndRedisServer' in params ? params.UpgradeProxyAndRedisServer : null;

    }
}

/**
 * ModfiyInstancePassword response structure.
 * @class
 */
class ModfiyInstancePasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AllocateWanAddress response structure.
 * @class
 */
class AllocateWanAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Status of enabling public network access
         * @type {string || null}
         */
        this.WanStatus = null;

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
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorTookDist request structure.
 * @class
 */
class DescribeInstanceMonitorTookDistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Query date.
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Time range.
- 1: real-time.
- 2: last 30 minutes.
- 3: last 6 hours.
- 4: last 24 hours.
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

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
         * Replication group ID. Log in to the [global replication](https://console.tencentcloud.com/redis/replication) page of the Redis console and obtain it.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Data synchronization type.
- true: Strong synchronization is required.
- false: Strong synchronization is not required, and only the primary instance can be deleted.
         * @type {boolean || null}
         */
        this.SyncType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SyncType = 'SyncType' in params ? params.SyncType : null;

    }
}

/**
 * SwitchAccessNewInstance request structure.
 * @class
 */
class SwitchAccessNewInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specify the instance ID.
 For example: crs-xjhsdj****. Please log in to the [Redis Console] (https://console.cloud.tencent.com/redis#/) and copy the instance ID from the instance list.
Sample value: crs-asdasdas.
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
 * RemoveReplicationGroup response structure.
 * @class
 */
class RemoveReplicationGroupResponse extends  AbstractModel {
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
 * KillMasterGroup request structure.
 * @class
 */
class KillMasterGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * A parameter used to configure the access password for a specified instance. If password-free authentication is enabled, this parameter will not be required. Required password strength. - It must contains 8-30 characters. We recommend that you use a password of more than 12 characters. - It must contain at least two of the following types: lowercase letters, uppercase letters, digits, and symbols (()`~!@#$%^&*-+=_|{}[]:;<>,.?/), and it cannot start with a slash (/).
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Sharded cluster ID, which can be obtained through **ClusterId** of the response parameter 
 **Redis** of the API [DescribeInstanceNodeInfo](https://intl.cloud.tencent.com/document/product/239/48603?from_cn_redirect=1).
         * @type {Array.<number> || null}
         */
        this.ShardIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ShardIds = 'ShardIds' in params ? params.ShardIds : null;

    }
}

/**
 * SwitchAccessNewInstance response structure.
 * @class
 */
class SwitchAccessNewInstanceResponse extends  AbstractModel {
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
 * CloneInstances response structure.
 * @class
 */
class CloneInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Request task ID
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * Clone instance ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Parameter template information
 * @class
 */
class ParamTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Parameter template name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter template description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Instance type
- `2`: Redis 2.8 Memory Edition (Standard Architecture).
- `3`: CKV 3.2 Memory Edition (Standard Architecture).
- `4`: CKV 3.2 Memory Edition (Cluster Architecture).
- `5`: Redis 2.8 Memory Edition (Standalone).
- `6`: Redis 4.0 Memory Edition (Standard Architecture).
- `7`: Redis 4.0 Memory Edition (Cluster Architecture).
- `8`: Redis 5.0 Memory Edition (Standard Architecture).
- `9`: Redis 5.0 Memory Edition (Cluster Architecture).
- `15`: Redis 6.2 Memory Edition (Standard Architecture).
- `16`: Redis 6.2 Memory Edition (Cluster Architecture).
         * @type {number || null}
         */
        this.ProductType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmdTook response structure.
 * @class
 */
class DescribeInstanceMonitorTopNCmdTookResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Duration details
         * @type {Array.<CommandTake> || null}
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
                let obj = new CommandTake();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseSSL request structure.
 * @class
 */
class CloseSSLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
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
 * DescribeInstanceMonitorBigKeySizeDist request structure.
 * @class
 */
class DescribeInstanceMonitorBigKeySizeDistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time, such as "20190219"
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DescribeInstanceAccount request structure.
 * @class
 */
class DescribeInstanceAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Pagination size. The default value is 20, the minimum value is 1, and the maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset,  which is an integral multiple of `Limit`.  Calculation formula:  `offset` = `limit` * (page number - 1).
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
 * Description of instance parameter in Char type
 * @class
 */
class InstanceTextParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Parameter type such as  `Text`.
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * Whether to restart the database after modifying the parameter. Valid values:  - `true` (required) - `false` (not required)
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * Default value of the parameter
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Current value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Tips = null;

        /**
         * Acceptable values of the parameter
         * @type {Array.<string> || null}
         */
        this.TextValue = null;

        /**
         * Parameter modification status. Valid values: - `1` (modifying) - `2` (modified)
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
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.TextValue = 'TextValue' in params ? params.TextValue : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeInstanceLogDelivery response structure.
 * @class
 */
class DescribeInstanceLogDeliveryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Slow query log shipping information of the instance.
         * @type {LogDeliveryInfo || null}
         */
        this.SlowLog = null;

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

        if (params.SlowLog) {
            let obj = new LogDeliveryInfo();
            obj.deserialize(params.SlowLog)
            this.SlowLog = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceParamRecords request structure.
 * @class
 */
class DescribeInstanceParamRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.cloud.tencent.com/redis/instance/list), and copy it from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Pagination size. The default value is 100, and the maximum value is 200.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset, which is an integer multiple of Limit. Calculation formula: Offset = Limit x (Page number – 1). The default value is 0.
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
 * DescribeTaskList request structure.
 * @class
 */
class DescribeTaskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name. Log in to the [Redis console](https://console.cloud.tencent.com/redis/instance/list), and copy it from the instance list.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Number of taskss returned per page.  Default value: `20`. Maximum value: `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is an integer multiple of Limit. Offset = Limit x (Page number – 1). The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Project ID. This field has been deprecated. Please ignore it.
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * Task type.



- FLOW_CREATE: "001", indicating instance creation.
- FLOW_RESIZE: "002", indicating configuration modification.
- FLOW_CLOSE: "003", indicating instance disabling.
- FLOW_CLEAN: "004", indicating instance cleanup.
- FLOW_STARTUP: "005", indicating instance enabling.
- FLOW_DELETE: "006", indicating instance deletion.
- FLOW_SETPWD: "007", indicating password reset.
- FLOW_EXPORTBACKUP: "009", indicating backup file export.
- FLOW_RESTOREBACKUP: "010", indicating backup restoration.
- FLOW_BACKUPINSTANCE: "012", indicating instance backup.
- FLOW_MIGRATEINSTANCE: "013", indicating instance migration.
- FLOW_DELBACKUP: "014", indicating backup deletion.
- FLOW_EXCHANGEINSTANCE: "016", indicating instance switch.
- FLOW_AUTOBACKUP: "017", indicating automatic instance backup.
- FLOW_MIGRATECHECK: "022", indicating migration parameter verification.
- FLOW_MIGRATETASK: "023", indicating that data migration is in progress.
- FLOW_CLEANDB: "025", indicating database cleanup.
- FLOW_CLONEBACKUP: "026": indicating backup cloning.
- FLOW_CHANGEVIP: "027", indicating VIP address modification.
- FLOW_EXPORSHR: "028", indicating scaling.
- FLOW_ADDNODES: "029", indicating node addition (removal).
- FLOW_CHANGENET: "031", indicating network type modification.
- FLOW_MODIFYINSTACEREADONLY: "033": indicating read-only policy modification.
- FLOW_MODIFYINSTANCEPARAMS: "034", indicating instance parameter modification.
- FLOW_MODIFYINSTANCEPASSWORDFREE: "035", indicating password-free access settings.
- FLOW_SWITCHINSTANCEVIP: "036", indicating instance VIP address switch.
- FLOW_MODIFYINSTANCEACCOUNT: "037", indicating instance account modification.
- FLOW_MODIFYINSTANCEBANDWIDTH: "038", indicating instance bandwidth modification.
- FLOW_ENABLEINSTANCE_REPLICATE: "039", indicating enabling of read-only replica.
- FLOW_DISABLEINSTANCE_REPLICATE: "040", indicating disabling of read-only replica.
- FLOW_UpgradeArch: "041", indicating instance architecture upgrade from the standard architecture to the cluster architecture.
- FLOW_DowngradeArch: "042", indicating instance architecture downgrade from the cluster architecture to the standard architecture.
- FLOW_UpgradeVersion: "043", indicating version upgrade.
- FLOW_MODIFYCONNECTIONCONFIG: "044", indicating adjustment of the bandwidth and the number of connections.
- FLOW_CLEARNETWORK: "045", indicating network change.
- FLOW_REMOVE_BACKUP_FILE: "046", indicating backup deletion.
- FLOW_UPGRADE_SUPPORT_MULTI_AZ: "047", indicating instance upgrade to multi-AZ deployment.
- FLOW_SHUTDOWN_MASTER: "048", indicating fault simulation.
- FLOW_CHANGE_REPLICA_TO_MASTER: "049", indicating manual promotion to the primary node.
- FLOW_CODE_ADD_REPLICATION_INSTANCE: "050", indicating replication group addition.
- FLOW_OPEN_WAN: "052", indicating enabling of public network access.
- FLOW_CLOSE_WAN: "053", indicating disabling of public network access.
 - FLOW_UPDATE_WAN: "054", indicating update of the public network access configuration.
- FLOW_CODE_DELETE_REPLICATION_INSTANCE: "055", indicating replication group unbinding.
- FLOW_CODE_CHANGE_MASTER_INSTANCE: "056", indicating switching a replication group instance to the primary instance.
- FLOW_CODE_CHANGE_INSTANCE_ROLE: "057", indicating modification of the replication group instance role.
- FLOW_MIGRATE_NODE: "058", indicating node migration.
- FLOW_SWITCH_NODE: "059", indicating node switch.
- FLOW_UPGRADE_SMALL_VERSION: "060", indicating Redis version upgrade.
- FLOW_UPGRADE_PROXY_VERSION: "061", indicating proxy version upgrade.
- FLOW_MODIFY_INSTANCE_NETWORK: "062", indicating instance network modification.
- FLOW_MIGRATE_PROXY_NODE: "063", indicating proxy node migration.
- FLOW_MIGRATION_INSTANCE_ZONE: "066", indicating that instance migration to another AZ is in progress.
- FLOW_UPGRADE_INSTANCE_CACHE_AND_PROXY: "067", indicating that instance version upgrade is in progress.
- FLOW_MODIFY_PROXY_NUM: "069", indicating proxy node addition (removal).
- FLOW_MODIFYBACKUPMOD: "070", indicating instance backup mode modification.
         * @type {Array.<string> || null}
         */
        this.TaskTypes = null;

        /**
         * Start time of the task, for example, in the format of 2021-12-30 00:00:00. Data in the last 30 days can be queried.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time of the task, for example, in the format of 2021-12-30 20:59:35. Data in the last 30 days can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * This parameter is only for internal use and can be ignored.
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

        /**
         * Task execution status. Valid values: - `0` (initilized) - `1` (executing) - `2` (completed) - `4` (failed)
         * @type {Array.<number> || null}
         */
        this.Result = null;

        /**
         * The field `OperatorUin` has been disused and replaced by `OperateUin`.
         * @type {Array.<number> || null}
         */
        this.OperatorUin = null;

        /**
         * Operator account ID or UIN
         * @type {Array.<string> || null}
         */
        this.OperateUin = null;

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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.TaskTypes = 'TaskTypes' in params ? params.TaskTypes : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.OperatorUin = 'OperatorUin' in params ? params.OperatorUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;

    }
}

/**
 * ChangeMasterInstance response structure.
 * @class
 */
class ChangeMasterInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceEvent request structure.
 * @class
 */
class ModifyInstanceEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID. Example: crs-xjhsdj****. Log in to the [TencentDB for Redis console](https://console.cloud.tencent.com/redis#/) and copy the instance ID in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Event ID. Call the [DescribeInstanceEvents](https://www.tencentcloud.com/document/product/239/104779?from_cn_redirect=1) API to obtain the ID of the event to be modified.
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * Modifies the scheduled start time of event execution.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Modifies the scheduled end time of event execution. After the start time is configured, the end time can only be 30 minutes, 1 hour, 1.5 hours, 2 hours, or 3 hours later than the start time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Modifies the start date of the event execution schedule.
         * @type {string || null}
         */
        this.ExecutionDate = null;

        /**
         * Modifies the running status of the event. Currently, this parameter can be set only to **Canceled**, indicating that the execution of the current event is canceled. You can query the running status and level of the current event using DescribeInstanceEvents.- Critical or High events cannot be canceled, which means that they must be executed.- Only events in the Waiting state (to be executed) can be canceled.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ExecutionDate = 'ExecutionDate' in params ? params.ExecutionDate : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Timestamp range within which second-level backup is missing
 * @class
 */
class SecondLevelBackupMissingTimestamps extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start timestamp.
         * @type {number || null}
         */
        this.StartTimeStamp = null;

        /**
         * End timestamp.
         * @type {number || null}
         */
        this.EndTimeStamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeStamp = 'StartTimeStamp' in params ? params.StartTimeStamp : null;
        this.EndTimeStamp = 'EndTimeStamp' in params ? params.EndTimeStamp : null;

    }
}

/**
 * DescribeBackupDetail response structure.
 * @class
 */
class DescribeBackupDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup ID.
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * Backup start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Backup end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Backup mode.

- 1: manual backup.
- 0: automatic backup.
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * Backup status.

- 1: The backup is locked by other processes.
- 2: The backup is normal and not locked by any processes.
- -1: The backup has expired.
- 3: The backup is being exported.
- 4: The backup is successfully exported.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Backup remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Whether the backup is locked.

- 0: not locked.
- 1: locked.
         * @type {number || null}
         */
        this.Locked = null;

        /**
         * Backup file size. Unit: byte.
         * @type {number || null}
         */
        this.BackupSize = null;

        /**
         * Instance type.
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Memory size of a single shard. Unit: MB.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of shards.
         * @type {number || null}
         */
        this.ShardNum = null;

        /**
         * Number of replicas.
         * @type {number || null}
         */
        this.ReplicasNum = null;

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
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.BackupSize = 'BackupSize' in params ? params.BackupSize : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.ReplicasNum = 'ReplicasNum' in params ? params.ReplicasNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChangeReplicaToMaster response structure.
 * @class
 */
class ChangeReplicaToMasterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInstances response structure.
 * @class
 */
class CreateInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transaction ID
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * Instance ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskInfo request structure.
 * @class
 */
class DescribeTaskInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID, which can be obtained through the sub-parameter **TaskId** of the response parameter **Tasks** of the API [DescribeTaskList](https://intl.cloud.tencent.com/document/product/239/39374?from_cn_redirect=1).
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CloneInstances request structure.
 * @class
 */
class CloneInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the source instance to be cloned, such as "crs-xjhsdj****". Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The number of clone instances at a time
- The maximum number of monthly subscribed instances is 100 for each purchase.
- The maximum number of pay-as-you-go instances is 30 for each purchase.
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * ID of the AZ where the clone instance resides. For more information, see [Regions and AZs](https://intl.cloud.tencent.com/document/product/239/4106?from_cn_redirect=1).
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Billing mode. Valid values: <ul><li>`0` (Pay-as-you-go) </li><li>`1` (Monthly subscription) </li></ul>
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * Purchase duration of an instance. <ul><li>Unit: Month</li><li>Valid values: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`, `48`, `60` (for monthly subscription mode).</li><li> Valid value: `1` (for pay-as-you-go mode).</li></ul>
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Security group ID. Call the [DescribeInstanceSecurityGroup](https://www.tencentcloud.com/document/product/239/34447?from_cn_redirect=1) API to obtain the security group ID for the instance.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIdList = null;

        /**
         * Backup ID of the clone instance, which can be obtained through the [DescribeInstanceBackups](https://intl.cloud.tencent.com/document/product/239/20011?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * Whether the clone instance supports password-free access. Valid values: <ul><li>`true` (Yes)</li><li>`false` (No. When SSL or public network is enabled). Default value: `false`.</li></ul>
         * @type {boolean || null}
         */
        this.NoAuth = null;

        /**
         * The VPC ID of the clone instance. If this parameter is not passed in, the classic network will be selected by default.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The VPC subnet ID to which the clone instance belongs, which is not required for the classic network.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Name of the clone instance. <br>Enter up to 60 letters, digits, hyphens, and underscores.</br>
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * The access password of the clone instance. <ul><li>When the input parameter <b>NoAuth</b> is <b>true</b>, this parameter is not required. </li><li>When the instance is Redis 2.8, 4.0, or 5.0, the password must contain 8–30 characters in at least two of the following types: lowercase letters, uppercase letters, digits, and special characters `()`~!@#$%^&*-+=_|{}[]:;<>,.?/` and cannot start with `/`.</li><li>When the instance is CKV 3.2, the password must and can only contain 8–30 letters and digits.</li></ul>
         * @type {string || null}
         */
        this.Password = null;

        /**
         * The auto-renewal flag. Valid values <ul><li>`0`: Manual renewal (default). </li><li>`1`: Auto-renewal. </li><li>`2`: Not auto-renewal (set by user).</ul>
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * Customized port. Valid range: 1024-65535. Default value: `6379`.
         * @type {number || null}
         */
        this.VPort = null;

        /**
         * Node information of an instance. <ul><li>Currently supported type and AZ information of a node to be configured (master node or replica node) For more information, see [RedisNodeInfo](https://intl.cloud.tencent.com/document/product/239/20022?from_cn_redirect=1#RedisNodeInfo).</li><li>This parameter is not required for single-AZ deployment.</li></ul>
         * @type {Array.<RedisNodeInfo> || null}
         */
        this.NodeSet = null;

        /**
         * Project ID. Log in to the [Redis console](https://console.cloud.tencent.com/redis#/), and find the project ID in <b>Account Center</b> > <b>Project Management</b> in the top-right corner.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Tag to be bound for the clone instance
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * The parameter template ID associated with the clone instance
- If this parameter is not configured, the system will automatically adapt the corresponding default template based on the selected compatible version and architecture.
- You can query the parameter template list of the instance to get the template ID through the [DescribeParamTemplates](https://intl.cloud.tencent.com/document/product/239/58750?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * The alarm policy ID of the instance to be cloned. Log in to the [Tencent Cloud Observable Platform console](https://console.cloud.tencent.com/monitor/alarm2/policy), and get the policy ID in <b>Alarm Management</b> > <b>Policy Management</b>.
         * @type {Array.<string> || null}
         */
        this.AlarmPolicyList = null;

        /**
         * Time to restore data for cloning.
Only instances with second-level backup enabled are supported.

         * @type {string || null}
         */
        this.CloneTime = null;

        /**
         * Whether to encrypt the password.
         * @type {boolean || null}
         */
        this.EncryptPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.SecurityGroupIdList = 'SecurityGroupIdList' in params ? params.SecurityGroupIdList : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.VPort = 'VPort' in params ? params.VPort : null;

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new RedisNodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.AlarmPolicyList = 'AlarmPolicyList' in params ? params.AlarmPolicyList : null;
        this.CloneTime = 'CloneTime' in params ? params.CloneTime : null;
        this.EncryptPassword = 'EncryptPassword' in params ? params.EncryptPassword : null;

    }
}

/**
 * ApplyParamsTemplate response structure.
 * @class
 */
class ApplyParamsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {Array.<number> || null}
         */
        this.TaskIds = null;

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
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReplicationGroup request structure.
 * @class
 */
class DescribeReplicationGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Size of the output instance list per page. The value is a positive integer greater than 0, and the default value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is an integral multiple of `Limit`. `offset` = `limit` * (page number - 1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * ID of the specified replication group, such as `crs-rpl-m3zt****`. Log in to the [TencentDB for Redis console](https://console.cloud.tencent.com/redis/replication), and get it in the global replication group list.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Keyword for fuzzy query, which can be a replication group ID or name. Log in to the [TencentDB for Redis console](https://console.cloud.tencent.com/redis/replication), and get them in the global replication group list.
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * Redis node information
 * @class
 */
class RedisNodes extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * Node role
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * Shard ID
         * @type {number || null}
         */
        this.ClusterId = null;

        /**
         * AZ ID
         * @type {number || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmd request structure.
 * @class
 */
class DescribeInstanceMonitorTopNCmdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time range.
- 1: real-time.
- 2: last 30 minutes.
- 3: last 6 hours.
- 4: last 24 hours.
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * ModifyNetworkConfig request structure.
 * @class
 */
class ModifyNetworkConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Network change type. Valid values:
- `changeVip`: VPC change, including the private IPv4 address and port.
- `changeVpc`: Subnet change.
- `changeBaseToVpc`: Change from classic network to VPC.
- `changeVPort`: Port change.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Private IPv4 address of the instance, which is required if `Operation` is `changeVip`.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * VPC ID after the modification.
- Configure this parameter when **Operation** is set to **changeVpc** or **changeBaseToVpc**.
- Log in to the [Redis console](https://console.tencentcloud.com/redis/instance), switch to the **Instance Details** page, and click the VPC name next to the associated network in the **Network Information** area to obtain the VPC ID.

         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ID of the subnet to which the VPC belongs after the modification.
- Configure this parameter when **Operation** is set to **changeVpc** or **changeBaseToVpc**.
- Log in to the [Redis console](https://console.tencentcloud.com/redis/instance), switch to the **Instance Details** page, and click the subnet name next to the associated network in the **Network Information** area to obtain the subnet ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Retention duration of the original private IPv4 address.
- Unit: day.
- Valid values: 0, 1, 2, 3, 7, and 15.
**Note**: If the retention duration is not set or set to 0, the original network address will be released immediately.
         * @type {number || null}
         */
        this.Recycle = null;

        /**
         * Network port after the change, which is required if `Operation` is `changeVPort` or `changeVip`. Value range: [1024,65535].
         * @type {number || null}
         */
        this.VPort = null;

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
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Recycle = 'Recycle' in params ? params.Recycle : null;
        this.VPort = 'VPort' in params ? params.VPort : null;

    }
}

/**
 * DescribeInstanceSecurityGroup request structure.
 * @class
 */
class DescribeInstanceSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. The array length limit is [0, 100]. Log in to the [Redis console](https://console.cloud.tencent.com/redis/instance/list), and copy the instance ID from the instance list.
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * History of instance parameter modifications
 * @class
 */
class InstanceParamHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * The value of the parameter before modification
         * @type {string || null}
         */
        this.PreValue = null;

        /**
         * The value of the parameter after modification
         * @type {string || null}
         */
        this.NewValue = null;

        /**
         * Parameter configuration status
- `1`: The parameter configuration is being modified.
- `2`: The parameter configuration has been modified successfully.
- `3`: Failed to modify the parameter configuration.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.PreValue = 'PreValue' in params ? params.PreValue : null;
        this.NewValue = 'NewValue' in params ? params.NewValue : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeInstanceParams request structure.
 * @class
 */
class DescribeInstanceParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
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
 * CleanUpInstance response structure.
 * @class
 */
class CleanUpInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups request structure.
 * @class
 */
class ModifyDBInstanceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name, which is `redis` for this API.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Replaces with the new security group ID list, which is an array of one or more security group IDs.
- To configure a security group for an instance for the first time, call the API [AssociateSecurityGroups](https://www.tencentcloud.com/document/product/239/41260?from_cn_redirect=1) to bind a security group first.
- To replace the security group, obtain the security group ID on the [security group](https://console.tencentcloud.com/vpc/security-group) page of the console.

**Note:** This input parameter performs a full replacement on all existing collections but not an incremental update. To modify it, import the expected full collections.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
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
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeParamTemplates response structure.
 * @class
 */
class DescribeParamTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of parameter templates of the user.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Parameter template details.
         * @type {Array.<ParamTemplateInfo> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParamTemplateInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceShards request structure.
 * @class
 */
class DescribeInstanceShardsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Specifies whether to filter out secondary node information.
- true: filter out secondary nodes.
- false: filtering not required. The default value is false.
         * @type {boolean || null}
         */
        this.FilterSlave = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.FilterSlave = 'FilterSlave' in params ? params.FilterSlave : null;

    }
}

/**
 * Security group outbound rule
 * @class
 */
class Outbound extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy. Valid values: ACCEPT, DROP.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * All the addresses that the address group ID represents.
         * @type {string || null}
         */
        this.AddressModule = null;

        /**
         * Source IP or IP address range, such as 192.168.0.0/16.
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Network protocol, such as UDP and TCP.
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * Port.
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * All the protocols and ports that the service group ID represents.
         * @type {string || null}
         */
        this.ServiceModule = null;

        /**
         * All the addresses that the security group ID represents.
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
        this.Action = 'Action' in params ? params.Action : null;
        this.AddressModule = 'AddressModule' in params ? params.AddressModule : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.ServiceModule = 'ServiceModule' in params ? params.ServiceModule : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeAutoBackupConfig response structure.
 * @class
 */
class DescribeAutoBackupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * This parameter is retained due to compatibility and can be ignored.
         * @type {number || null}
         */
        this.AutoBackupType = null;

        /**
         * Backup cycle, which will be daily by default. Valid values: `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`.
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * Time period for backup task initialization
         * @type {string || null}
         */
        this.TimePeriod = null;

        /**
         * Retention time of full backup files in days.  Default value: `7`.  To retain the files for more days, [submit a ticket](https://console.cloud.tencent.com/workorder/category) for application.
         * @type {number || null}
         */
        this.BackupStorageDays = null;

        /**
         * This parameter has been disused.
         * @type {number || null}
         */
        this.BinlogStorageDays = null;

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
        this.AutoBackupType = 'AutoBackupType' in params ? params.AutoBackupType : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.BackupStorageDays = 'BackupStorageDays' in params ? params.BackupStorageDays : null;
        this.BinlogStorageDays = 'BinlogStorageDays' in params ? params.BinlogStorageDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceUpgradeInstance request structure.
 * @class
 */
class InquiryPriceUpgradeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Shard size. Unit: MB.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of shards.
- The instance adopts the standard architecture. The default value of RedisShardNum is 1.
- This parameter is not required for Redis 2.8 Primary-Secondary Edition, CKV Primary-Secondary Edition, and Redis 2.8 Stand-Alone Edition.
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * Number of replicas. This parameter is not required for Redis 2.8 Primary-Secondary Edition, CKV Primary-Secondary Edition, and Redis 2.8 Single-node Edition.
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;

    }
}

/**
 * ModifyParamTemplate response structure.
 * @class
 */
class ModifyParamTemplateResponse extends  AbstractModel {
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
 * DescribeProjectSecurityGroups request structure.
 * @class
 */
class DescribeProjectSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name, which is `redis` for this API.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Project ID. Log in to the [Project Management](https://console.tencentcloud.com/project) page of the Redis console and copy the project ID in **Project Name**.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Offset, which is an integral multiple of `Limit`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of security groups to be pulled. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Search criteria. You can enter a security group ID or name.
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeySizeDist response structure.
 * @class
 */
class DescribeInstanceMonitorBigKeySizeDistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Big key size distribution details
         * @type {Array.<DelayDistribution> || null}
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
                let obj = new DelayDistribution();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceEvents response structure.
 * @class
 */
class DescribeInstanceEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of events.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance event information.
         * @type {Array.<RedisInstanceEvent> || null}
         */
        this.RedisInstanceEvents = null;

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

        if (params.RedisInstanceEvents) {
            this.RedisInstanceEvents = new Array();
            for (let z in params.RedisInstanceEvents) {
                let obj = new RedisInstanceEvent();
                obj.deserialize(params.RedisInstanceEvents[z]);
                this.RedisInstanceEvents.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInstanceAccount request structure.
 * @class
 */
class CreateInstanceAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Custom account name for accessing the database.
- It contains only letters, digits, underscores (_), and hyphens (-).
- The length cannot exceed 32 characters.
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Password of the custom account. The password complexity requirements are as follows:
- It can contain 8 to 64 characters.
- It should contain at least two of the following types: lowercase letters, uppercase letters, digits, and special characters (such as ()`~!@#$%^&*-+=_|{}[]:;<>,.?/).
- It cannot start with a forward slash (/).

         * @type {string || null}
         */
        this.AccountPassword = null;

        /**
         * The read requests for the designated account are routed to either the master node or replica nodes. If the Read-Only Replica is not enabled, the selection of replica nodes is not supported.
- master: Master node.- replication: Replica node.
         * @type {Array.<string> || null}
         */
        this.ReadonlyPolicy = null;

        /**
         * Read-write permissions of the account. It supports the selection of read-only and read-write permissions.
- r: read-only.
- rw: read-write.
         * @type {string || null}
         */
        this.Privilege = null;

        /**
         * Description information about account remarks, with a length of [0, 64] bytes.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Whether to encrypt the password.
         * @type {boolean || null}
         */
        this.EncryptPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.EncryptPassword = 'EncryptPassword' in params ? params.EncryptPassword : null;

    }
}

/**
 * RemoveReplicationInstance request structure.
 * @class
 */
class RemoveReplicationInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Replication group ID, for example, crs-rpl-m3zt****. Log in to the [Redis console](https://console.tencentcloud.com/redis/replication) and obtain it in the global replication group list.

         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Specifies the instance ID. Example: crs-xjhsdj****. Log in to the [TencentDB for Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Data synchronization type.
- true: Strong synchronization is required.
- false: Strong synchronization is not required, and only the primary instance can be deleted.
         * @type {boolean || null}
         */
        this.SyncType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SyncType = 'SyncType' in params ? params.SyncType : null;

    }
}

/**
 * EnableReplicaReadonly response structure.
 * @class
 */
class EnableReplicaReadonlyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ERROR: incorrect; OK: correct (discarded).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task ID.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
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
         * Instance modification operation. Valid values:
- rename: rename an instance.
- modifyProject: modify the project to which the instance belongs.
- modifyAutoRenew: modify the instance renewal flag.
- modifyDeleteProtectionSwitch: modify the instance deletion protection switch status.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list. The maximum number of instances per request is 10.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * New name of the instance. Only Chinese characters, letters, digits, underscores (_), and delimiters (-) are supported. The length can be up to 60 characters.
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * Project ID. Log in to the [Project Management](https://console.tencentcloud.com/project) page of the Redis console and copy the project ID in **Project Name**.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Auto-renewal flag.

- 0: default status (manual renewal).
- 1: automatic renewal.
- 2: no automatic renewal.
         * @type {Array.<number> || null}
         */
        this.AutoRenews = null;

        /**
         * Deletion protection switch. - 0: disabled by default; - 1: enabled.
         * @type {Array.<number> || null}
         */
        this.DeleteProtectionSwitches = null;

        /**
         * This parameter is currently being deprecated and can still be used by existing users. It is recommended that new users use InstanceIds.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Disused
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * This parameter has been deprecated.
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
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AutoRenews = 'AutoRenews' in params ? params.AutoRenews : null;
        this.DeleteProtectionSwitches = 'DeleteProtectionSwitches' in params ? params.DeleteProtectionSwitches : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

    }
}

/**
 * DescribeMaintenanceWindow response structure.
 * @class
 */
class DescribeMaintenanceWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the maintenance window. Value range: any time point between 00:00 and 23:00, for example, 03:24.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the maintenance window.
- Value range: any time point between 00:00 and 23:00, for example, 04:24.
- The minimum maintenance duration is 30 minutes and the maximum is 3 hours.
- The end time should be later than the start time.
         * @type {string || null}
         */
        this.EndTime = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceSecurityGroup response structure.
 * @class
 */
class DescribeInstanceSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group information of an instance
         * @type {Array.<InstanceSecurityGroupDetail> || null}
         */
        this.InstanceSecurityGroupsDetail = null;

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

        if (params.InstanceSecurityGroupsDetail) {
            this.InstanceSecurityGroupsDetail = new Array();
            for (let z in params.InstanceSecurityGroupsDetail) {
                let obj = new InstanceSecurityGroupDetail();
                obj.deserialize(params.InstanceSecurityGroupsDetail[z]);
                this.InstanceSecurityGroupsDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReleaseWanAddress response structure.
 * @class
 */
class ReleaseWanAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Status of disabling public network access
         * @type {string || null}
         */
        this.WanStatus = null;

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
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Product information
 * @class
 */
class ProductConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product type
- `2`: Redis 2.8 Memory Edition (Standard Architecture).
- `3`: CKV 3.2 Memory Edition (Standard Architecture).
- `4`: CKV 3.2 Memory Edition (Cluster Architecture).
- `5`: Redis 2.8 Memory Edition (Standalone).
- `6`: Redis 4.0 Memory Edition (Standard Architecture).
- `7`: Redis 4.0 Memory Edition (Cluster Architecture).
- `8`: Redis 5.0 Memory Edition (Standard Architecture).
- `9`: Redis 5.0 Memory Edition (Cluster Architecture).
- `15`: Redis 6.2 Memory Edition (Standard Architecture).
- `16`: Redis 6.2 Memory Edition (Cluster Architecture).
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Product names, including Redis Master-Replica Edition, Redis Standalone Edition, Redis 4.0 Cluster Edition, CKV Master-Replica Edition, and CKV Standalone Edition.
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * Minimum purchasable quantity
         * @type {number || null}
         */
        this.MinBuyNum = null;

        /**
         * Maximum purchasable quantity
         * @type {number || null}
         */
        this.MaxBuyNum = null;

        /**
         * Whether a product is sold out
- `true`: Sold out.
- `false`: Not sold out.
         * @type {boolean || null}
         */
        this.Saleout = null;

        /**
         * Product engine. Valid values: Redis and CKV.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Compatible versions, including Redis 2.8, 3.2, 4.0, 5.0, and 6.2.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Total capacity in GB
         * @type {Array.<string> || null}
         */
        this.TotalSize = null;

        /**
         * Shard size in GB
         * @type {Array.<string> || null}
         */
        this.ShardSize = null;

        /**
         * Quantity of replicas
         * @type {Array.<string> || null}
         */
        this.ReplicaNum = null;

        /**
         * Quantity of shards
         * @type {Array.<string> || null}
         */
        this.ShardNum = null;

        /**
         * Supported billing modes
- `1`: Monthly subscription.
- `0`: Pay-as-you-go.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Due to spelling inconsistency in this parameter name, it is recommended to use the **EnableReplicaReadOnly** parameter instead. Its meaning refers to whether the Read-Only Replica is supported.
- true: Supported.
- false: Not supported.
         * @type {boolean || null}
         */
        this.EnableRepicaReadOnly = null;

        /**
         * Whether read-only replica is supported.
 - true: read-only replica supported.
 - false: not supported.
         * @type {boolean || null}
         */
        this.EnableReplicaReadOnly = null;

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
        this.MinBuyNum = 'MinBuyNum' in params ? params.MinBuyNum : null;
        this.MaxBuyNum = 'MaxBuyNum' in params ? params.MaxBuyNum : null;
        this.Saleout = 'Saleout' in params ? params.Saleout : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.ShardSize = 'ShardSize' in params ? params.ShardSize : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.EnableRepicaReadOnly = 'EnableRepicaReadOnly' in params ? params.EnableRepicaReadOnly : null;
        this.EnableReplicaReadOnly = 'EnableReplicaReadOnly' in params ? params.EnableReplicaReadOnly : null;

    }
}

/**
 * ModifyConnectionConfig request structure.
 * @class
 */
class ModifyConnectionConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Additional bandwidth, in MB, which should be greater than 0.
**Note**: The Bandwidth and ClientLimit parameters cannot be empty simultaneously. You should select at least one of them for configuration.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Total number of connections per shard.
- When read-only replicas are not enabled, the lower limit is 10,000 and the upper limit is 40,000.
- When read-only replicas are enabled, the lower limit is 10,000, and the upper limit is calculated as follows: 10,000 x (Number of read-only replicas + 3).
**Note**: The Bandwidth and ClientLimit parameters cannot be empty simultaneously. You should select at least one of them for configuration.
         * @type {number || null}
         */
        this.ClientLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ClientLimit = 'ClientLimit' in params ? params.ClientLimit : null;

    }
}

/**
 * ManualBackupInstance response structure.
 * @class
 */
class ManualBackupInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance node
 * @class
 */
class InstanceNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Node details
         * @type {Array.<InstanceClusterNode> || null}
         */
        this.InstanceClusterNode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

        if (params.InstanceClusterNode) {
            this.InstanceClusterNode = new Array();
            for (let z in params.InstanceClusterNode) {
                let obj = new InstanceClusterNode();
                obj.deserialize(params.InstanceClusterNode[z]);
                this.InstanceClusterNode.push(obj);
            }
        }

    }
}

/**
 * ModifyInstanceBackupMode response structure.
 * @class
 */
class ModifyInstanceBackupModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchProxy response structure.
 * @class
 */
class SwitchProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartupInstance response structure.
 * @class
 */
class StartupInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * This parameter has been deprecated. Determine whether the instance has been deisolated based on the status obtained through the instance query API.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of instances in the DTS task
 * @class
 */
class DescribeInstanceDTSInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Repository ID.
         * @type {number || null}
         */
        this.SetId = null;

        /**
         * AZ ID.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Instance type.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance access address.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Status.
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
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SetId = 'SetId' in params ? params.SetId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Order transaction information
 * @class
 */
class TradeDealDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID, which is used when a TencentCloud API is called.
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * Long order ID, which is used when an order issue is submitted for assistance.
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * AZ ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Number of instances associated with the order
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Creator UIN
         * @type {string || null}
         */
        this.Creater = null;

        /**
         * Order creation time
         * @type {string || null}
         */
        this.CreatTime = null;

        /**
         * Order timeout period
         * @type {string || null}
         */
        this.OverdueTime = null;

        /**
         * Order completion time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Order status. 1: unpaid; 2: paid but not delivered; 3: In delivery; 4: successfully delivered; 5: delivery failed; 6: refunded; 7: order closed; 8: order expired; 9: order invalidated; 10: product invalidated; 11: requested payment rejected; 12: paying
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Order status description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Order actual total price (in cents)
         * @type {number || null}
         */
        this.Price = null;

        /**
         * Instance ID
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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Creater = 'Creater' in params ? params.Creater : null;
        this.CreatTime = 'CreatTime' in params ? params.CreatTime : null;
        this.OverdueTime = 'OverdueTime' in params ? params.OverdueTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * Tag bound to the instance purchased via API
 * @class
 */
class ResourceTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * The value corresponding to the tag key
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
 * AssociateSecurityGroups response structure.
 * @class
 */
class AssociateSecurityGroupsResponse extends  AbstractModel {
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
 * Log shipping information.
 * @class
 */
class LogDeliveryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enabling status of log shipping. true: enabled; false: disabled.
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Log set ID.
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Log topic ID.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Logset region
         * @type {string || null}
         */
        this.LogRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LogRegion = 'LogRegion' in params ? params.LogRegion : null;

    }
}

/**
 * DescribeTaskInfo response structure.
 * @class
 */
class DescribeTaskInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: 
- `preparing`: To be run
- `running`: Running
- `succeed`: Succeeded
- `failed`: Failed
- `Error`: Error occurred while running
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task type, including `Create`, `Configure`, `Disable Instance`, `Clear Instance`, `Reset Password`, `Upgrade Version`, `Back up Instance`, `Modify Network`, `Migrate to New AZ` and `Promote to Master`.
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Message returned by task execution, which will be an error message when execution fails or be empty when the status is `running `or `succeed-`.
         * @type {string || null}
         */
        this.TaskMessage = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TaskMessage = 'TaskMessage' in params ? params.TaskMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeyTypeDist response structure.
 * @class
 */
class DescribeInstanceMonitorBigKeyTypeDistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Big key type distribution details
         * @type {Array.<BigKeyTypeInfo> || null}
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
                let obj = new BigKeyTypeInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
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
         * Asynchronous task ID.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CleanUpInstance request structure.
 * @class
 */
class CleanUpInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console recycle bin](https://console.cloud.tencent.com/redis/recycle), and copy it from the instance list.
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
 * DescribeInstanceDealDetail response structure.
 * @class
 */
class DescribeInstanceDealDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order details
         * @type {Array.<TradeDealDetail> || null}
         */
        this.DealDetails = null;

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

        if (params.DealDetails) {
            this.DealDetails = new Array();
            for (let z in params.DealDetails) {
                let obj = new TradeDealDetail();
                obj.deserialize(params.DealDetails[z]);
                this.DealDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyReplicationGroup request structure.
 * @class
 */
class ModifyReplicationGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Replication group ID. Log in to the [global replication](https://console.tencentcloud.com/redis/replication) page of the Redis console and obtain it.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Replication group name after the modification.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Description of remarks.
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * Replication group info
 * @class
 */
class Groups extends  AbstractModel {
    constructor(){
        super();

        /**
         * User APPID, which is the unique application ID that matches an account. Some Tencent Cloud products use this APPID.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Region ID.
 - 1: Guangzhou.
 - 4: Shanghai.
 - 5: Hong Kong (China).
 - 7: Shanghai Finance.
 - 8: Beijing.
 - 9: Singapore.
 - 11: Shenzhen Finance.
 - 15: Western US (Silicon Valley).
 - 16: Chengdu.
 - 17: Germany.
 - 18: South Korea.
 - 19: Chongqing.
 - 22: Eastern US (Virginia).
 - 23: Thailand.
- 25: Japan.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Replication group ID in the format of "crs-rpl-deind****"
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Replication group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Status of replication group
- `37`: Associating replication group
- `38`: Reconnecting to replication group
- `51`: Disassociating replication group
- `52`: Switching with master instance in replication group
- `53`: Modifying the roles
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Number of replication groups
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Instance information on the replication group.
         * @type {Array.<Instances> || null}
         */
        this.Instances = null;

        /**
         * Remark information.
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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new Instances();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;

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
         * Number of instances returned per page. Default value: `20`. Maximum value: `1000`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is an integral multiple of `Limit`. Calculation formula:  `offset` = `limit` * (page number - 1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * ID of a specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.


         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The instance list is sorted according to the following enumeration valid values:
- projectId: By project ID.- createtime: By the creation time of instances.- instancename: By the name of instances.- type: By the type of instances.- curDeadline: By the expiration time of instances.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * For instance sorting order, the default is descending order.
- 1: Descending order.
- 0: Ascending order.
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * Array of VPC IDs such as 47525. If this parameter is not passed in or the array is empty, the classic network will be selected by default. This parameter is retained and can be ignored. It is set based on `UniqVpcIds` parameter format.
         * @type {Array.<string> || null}
         */
        this.VpcIds = null;

        /**
         * Array of VPC subnet IDs such as 56854. This parameter is retained and can be ignored. It is set based on `UniqSubnetIds` parameter format.
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Setting keywords field for fuzzy query, only instance names support fuzzy query.
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Array of project IDs
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Array of VPC IDs such as vpc-sad23jfdfk. If this parameter is not passed in or or the array is empty, the classic network will be selected by default.
         * @type {Array.<string> || null}
         */
        this.UniqVpcIds = null;

        /**
         * Array of VPC subnet IDs such as subnet-fdj24n34j2
         * @type {Array.<string> || null}
         */
        this.UniqSubnetIds = null;

        /**
         * Array of region IDs (disused). The corresponding region can be queried through the common parameter `Region`.
         * @type {Array.<number> || null}
         */
        this.RegionIds = null;

        /**
         * Instance status.
- 0: To be initialized.
- 1: In process.
- 2: Running.
- -2: Isolated.
- -3: Pending Delete.
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * Instance architecture version.
- 1: Single-node edition.
- 2: Master-replica edition.- 3: Cluster edition.
         * @type {number || null}
         */
        this.TypeVersion = null;

        /**
         * Storage engine information. Valid values: `Redis-2.8`, `Redis-4.0`, `Redis-5.0`, `Redis-6.0` or `CKV`.
         * @type {string || null}
         */
        this.EngineName = null;

        /**
         * Renewal pattern.
- 0: Manual renewal.
- 1: Automatic renewal.
- 2: No renewal after expiry.
         * @type {Array.<number> || null}
         */
        this.AutoRenew = null;

        /**
         * Billing mode. Only pay-as-you-go billing is supported.
         * @type {string || null}
         */
        this.BillingMode = null;

        /**
         * Instance type.

- 2: Redis 2.8 memory edition (standard architecture).
- 3: CKV 3.2 memory edition (standard architecture).
- 4: CKV 3.2 memory edition (cluster architecture).
- 5: Redis 2.8 memory edition (standalone).
- 6: Redis 4.0 memory edition (standard architecture).
- 7: Redis 4.0 memory edition (cluster architecture).
- 8: Redis 5.0 memory edition (standard architecture).
- 9: Redis 5.0 memory edition (cluster architecture).
- 15: Redis 6.2 memory edition (standard architecture).
- 16: Redis 6.2 memory edition (cluster architecture).
- 17: Redis 7.0 memory edition (standard architecture).
- 18: Redis 7.0 memory edition (cluster architecture).
- 200: Memcached 1.6 memory edition (cluster architecture).
         * @type {number || null}
         */
        this.Type = null;

        /**
         * This parameter is of array type and supports the configuration of instance names, instance IDs, and IP addresses. Among these, the instance name is fuzzy matching while the instance ID and IP address are precise matching.
- Each element in the array is used for a union-based matching query.- When both **InstanceId** and **SearchKeys** are configured simultaneously, their intersection will be used for the matching query.
         * @type {Array.<string> || null}
         */
        this.SearchKeys = null;

        /**
         * Internal parameter, which can be ignored.
         * @type {Array.<number> || null}
         */
        this.TypeList = null;

        /**
         * Internal parameter, which can be ignored.
         * @type {string || null}
         */
        this.MonitorVersion = null;

        /**
         * Resources filter by tag key and value. If this parameter is not specified or is an empty array, resources will not be filtered.
         * @type {Array.<InstanceTagInfo> || null}
         */
        this.InstanceTags = null;

        /**
         * Resources filter by tag key. If this parameter is not specified or is an empty array, resources will not be filtered.
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * The product version of the instance. If this parameter is not configured or the array is set to empty, instances will not be filtered based on this parameter by default.
- local: local Disk Edition.- cdc: Cluster dedicated edition.

         * @type {Array.<string> || null}
         */
        this.ProductVersions = null;

        /**
         * Batch query of the specified instances ID. The number of results returned is based on `Limit`.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Availability zone mode.
- singleaz: Single availability zone.- multiaz: Multiple availability zones.
         * @type {string || null}
         */
        this.AzMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.UniqVpcIds = 'UniqVpcIds' in params ? params.UniqVpcIds : null;
        this.UniqSubnetIds = 'UniqSubnetIds' in params ? params.UniqSubnetIds : null;
        this.RegionIds = 'RegionIds' in params ? params.RegionIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TypeVersion = 'TypeVersion' in params ? params.TypeVersion : null;
        this.EngineName = 'EngineName' in params ? params.EngineName : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SearchKeys = 'SearchKeys' in params ? params.SearchKeys : null;
        this.TypeList = 'TypeList' in params ? params.TypeList : null;
        this.MonitorVersion = 'MonitorVersion' in params ? params.MonitorVersion : null;

        if (params.InstanceTags) {
            this.InstanceTags = new Array();
            for (let z in params.InstanceTags) {
                let obj = new InstanceTagInfo();
                obj.deserialize(params.InstanceTags[z]);
                this.InstanceTags.push(obj);
            }
        }
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.ProductVersions = 'ProductVersions' in params ? params.ProductVersions : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.AzMode = 'AzMode' in params ? params.AzMode : null;

    }
}

/**
 * Access command
 * @class
 */
class SourceCommand extends  AbstractModel {
    constructor(){
        super();

        /**
         * Command name.
         * @type {string || null}
         */
        this.Cmd = null;

        /**
         * Number of executions.
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
        this.Cmd = 'Cmd' in params ? params.Cmd : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * ModfiyInstancePassword request structure.
 * @class
 */
class ModfiyInstancePasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, such as "crs-xjhsdj****". Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Old password of an instance
         * @type {string || null}
         */
        this.OldPassword = null;

        /**
         * New instance password. The password complexity requirements are as follows:
 - It should contain 8 to 64 characters. 12 or more characters are recommended.
 - It cannot start with a forward slash (/).
 - It should contain at least two of the following types: lowercase letters (a–z), uppercase letters (A–Z), digits (0–9), and special characters (such as ()~!@#$%^&*-+=_|{}[]:;<>,.?/).
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Whether to encrypt the password.
         * @type {boolean || null}
         */
        this.EncryptPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OldPassword = 'OldPassword' in params ? params.OldPassword : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.EncryptPassword = 'EncryptPassword' in params ? params.EncryptPassword : null;

    }
}

/**
 * DescribeSlowLog request structure.
 * @class
 */
class DescribeSlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.

         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time for pre-querying slow query logs, with a maximum query span of 30 days.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time for pre-querying slow query logs, with a maximum query span of 30 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Average execution time threshold for slow queries, in milliseconds. The value is a positive integer greater than 0
         * @type {number || null}
         */
        this.MinQueryTime = null;

        /**
         * Number of slow query results displayed per page. The default value is 20, the minimum value is 1, and the maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset of the number of slow queries. The value is an integer multiple of Limit. Calculation formula: Offset = Limit x (Page number – 1). The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Node role.
- master: Master node.- slave: Replica node.
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MinQueryTime = 'MinQueryTime' in params ? params.MinQueryTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * ModifyInstancePassword request structure.
 * @class
 */
class ModifyInstancePasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID. Example: crs-xjhsdj****. Log in to the [TencentDB for Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Old password of the instance.
         * @type {string || null}
         */
        this.OldPassword = null;

        /**
         * New password of the instance. The password complexity requirements are as follows:
- It can contain 8 to 30 characters. It is recommended to use a password of more than 12 characters.
- It cannot start with a forward slash (/).
- It should contain at least two of the following types: lowercase letters, uppercase letters, digits, and special characters (such as ()~!@#$%^&*-+=_|{}[]:;<>,.?/).
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
        this.OldPassword = 'OldPassword' in params ? params.OldPassword : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * ModifyReplicationGroup response structure.
 * @class
 */
class ModifyReplicationGroupResponse extends  AbstractModel {
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
 * DeleteParamTemplate request structure.
 * @class
 */
class DeleteParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID. Log in to the [Redis console and go to the parameter template page](https://console.cloud.tencent.com/redis/templates) to obtain the template ID.
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeAutoBackupConfig request structure.
 * @class
 */
class DescribeAutoBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
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
 * DescribeInstanceMonitorSIP response structure.
 * @class
 */
class DescribeInstanceMonitorSIPResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access source information
         * @type {Array.<SourceInfo> || null}
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
                let obj = new SourceInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyPostpaidInstance request structure.
 * @class
 */
class DestroyPostpaidInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.cloud.tencent.com/redis/instance/list), and copy the pay-as-you-go instance ID from the instance list.
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
 * ChangeInstanceRole request structure.
 * @class
 */
class ChangeInstanceRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Replication group ID. Log in to the [global replication](https://console.tencentcloud.com/redis/replication) page of the Redis console and obtain it.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance role.
- rw: read/write.
- r: read-only.
         * @type {string || null}
         */
        this.InstanceRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;

    }
}

/**
 * DescribeInstanceSupportFeature request structure.
 * @class
 */
class DescribeInstanceSupportFeatureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID. Log in to the [Redis console](https://console.cloud.tencent.com/redis#/), and copy it from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The features that support queries are as follows.
- read-local-node-only: nearby access.
- multi-account: multi-account management.
- auto-failback: fault recovery scenario, such as whether automatic failback is enabled for the primary node.
         * @type {string || null}
         */
        this.FeatureName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.FeatureName = 'FeatureName' in params ? params.FeatureName : null;

    }
}

/**
 * DeleteInstanceAccount request structure.
 * @class
 */
class DeleteInstanceAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Sub-account name. Log in to the [Redis console](https://console.tencentcloud.com/redis) and switch to the **Account Management** page to obtain it. For details, see [Managing Account](https://www.tencentcloud.com/document/product/239/34590).
         * @type {string || null}
         */
        this.AccountName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;

    }
}

/**
 * DescribeInstanceMonitorHotKey request structure.
 * @class
 */
class DescribeInstanceMonitorHotKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Query time range.
- 1: real-time.
- 2: last 30 minutes.
- 3: last 6 hours.
- 4: last 24 hours.
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * DescribeBackupDownloadRestriction response structure.
 * @class
 */
class DescribeBackupDownloadRestrictionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of the network restrictions for downloading backup files. Valid values:

- `NoLimit`: Backup files can be downloaded over both public and private networks.
- `LimitOnlyIntranet`: Backup files can be downloaded only at private network addresses auto-assigned by Tencent Cloud.
- `Customize`: Backup files can be downloaded only in the customized VPC.
         * @type {string || null}
         */
        this.LimitType = null;

        /**
         * Only `In` can be passed in for this parameter, indicating that backup files can be downloaded in the custom `LimitVpc`.
         * @type {string || null}
         */
        this.VpcComparisonSymbol = null;

        /**
         * Whether backups can be downloaded at the custom `LimitIp` address.

- `In`: Download is allowed for the custom IP.
- `NotIn`: Download is not allowed for the custom IP.
         * @type {string || null}
         */
        this.IpComparisonSymbol = null;

        /**
         * VPC ID of the custom backup file download address, which will be displayed if `LimitType` is `Customize`.
         * @type {Array.<BackupLimitVpcItem> || null}
         */
        this.LimitVpc = null;

        /**
         * Custom VPC IP address for downloading backup files.
 This parameter is displayed when the **LimitType** parameter is set to **Customize**.

         * @type {Array.<string> || null}
         */
        this.LimitIp = null;

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
        this.LimitType = 'LimitType' in params ? params.LimitType : null;
        this.VpcComparisonSymbol = 'VpcComparisonSymbol' in params ? params.VpcComparisonSymbol : null;
        this.IpComparisonSymbol = 'IpComparisonSymbol' in params ? params.IpComparisonSymbol : null;

        if (params.LimitVpc) {
            this.LimitVpc = new Array();
            for (let z in params.LimitVpc) {
                let obj = new BackupLimitVpcItem();
                obj.deserialize(params.LimitVpc[z]);
                this.LimitVpc.push(obj);
            }
        }
        this.LimitIp = 'LimitIp' in params ? params.LimitIp : null;
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
         * Order ID
         * @type {string || null}
         */
        this.DealId = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Dedicated Redis cluster resource package.
 * @class
 */
class ResourceBundle extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource package name.
         * @type {string || null}
         */
        this.ResourceBundleName = null;

        /**
         * Saleable memory. Unit: GB.
         * @type {number || null}
         */
        this.AvailableMemory = null;

        /**
         * Number of resource packages.
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
        this.ResourceBundleName = 'ResourceBundleName' in params ? params.ResourceBundleName : null;
        this.AvailableMemory = 'AvailableMemory' in params ? params.AvailableMemory : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * ManualBackupInstance request structure.
 * @class
 */
class ManualBackupInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Remarks for manual backup task
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Retention period of backup data in days.  Default value: 7 days.  Value range: [0,1825].  If the value exceeds 7 days, [submit a ticket](https://console.cloud.tencent.com/workorder/category) for application. - If this parameter is not configured, it will set to be the same as the period of automatic backup retention. - If automatic backup is not set, the default value will be 7 days.
         * @type {number || null}
         */
        this.StorageDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.StorageDays = 'StorageDays' in params ? params.StorageDays : null;

    }
}

/**
 * DescribeReplicationGroup response structure.
 * @class
 */
class DescribeReplicationGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of replication groups
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Replication group information
         * @type {Array.<Groups> || null}
         */
        this.Groups = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new Groups();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyParamTemplate request structure.
 * @class
 */
class ModifyParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source parameter template ID, which can be obtained through the response parameter **TemplateId** of the API [DescribeParamTemplateInfo](https://intl.cloud.tencent.com/document/product/239/58748?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * New name after the parameter template is modified.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * New description after the parameter template is modified.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * New parameter list after the parameter template is modified.
         * @type {Array.<InstanceParam> || null}
         */
        this.ParamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new InstanceParam();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

    }
}

/**
 * Available region information.
 * @class
 */
class AvailableRegion extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * AZ information
         * @type {Array.<string> || null}
         */
        this.AvailableZones = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.AvailableZones = 'AvailableZones' in params ? params.AvailableZones : null;

    }
}

/**
 * List of instance details
 * @class
 */
class InstanceSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * App ID of a user, which is an application ID that uniquely corresponds to the account ID. Certain Tencent Cloud products use this app ID.

         * @type {number || null}
         */
        this.Appid = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Region ID.<ul><li>1: Guangzhou.</li><li>4: Shanghai.</li><li>5: Hong Kong (China).</li><li>7: Shanghai Finance.</li><li>8: Beijing.</li><li>9: Singapore.</li><li>11: Shenzhen Finance.</li><li>15: Western US (Silicon Valley).</li><li>16: Chengdu.</li><li>17: Frankfurt.</li><li>18: Seoul.</li><li>19: Chongqing.</li><li>22: Eastern US (Virginia).</li><li>23: Bangkok.</li><li>25: Tokyo.</li></ul>
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Zone ID.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * VPC ID, for example, 75101.
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * ID of the subnet under VPC, for example, 46315.
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * Current instance status. <ul><li>0: to be initialized;</li> <li>1: in process;</li> <li>2: running;</li> <li>-2: isolated;</li> <li>-3: to be deleted.</li></ul>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance VIP.
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * Instance port number.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Instance creation time, for example, in the format of 2020-01-15 10:20:00.
         * @type {string || null}
         */
        this.Createtime = null;

        /**
         * Instance memory capacity. Unit: MB (1 MB = 1024 KB).
         * @type {number || null}
         */
        this.Size = null;

        /**
         * This parameter has been deprecated. Obtain the memory capacity used by the instance through the TCOP API [GetMonitorData](https://intl.cloud.tencent.com/document/product/248/31014?from_cn_redirect=1).
         * @type {number || null}
         */
        this.SizeUsed = null;

        /**
         * Instance type.

- 2: Redis 2.8 memory edition (standard architecture).
- 3: CKV 3.2 memory edition (standard architecture).
- 4: CKV 3.2 memory edition (cluster architecture).
- 5: Redis 2.8 memory edition (standalone).
- 6: Redis 4.0 memory edition (standard architecture).
- 7: Redis 4.0 memory edition (cluster architecture).
- 8: Redis 5.0 memory edition (standard architecture).
- 9: Redis 5.0 memory edition (cluster architecture).
- 15: Redis 6.2 memory edition (standard architecture).
- 16: Redis 6.2 memory edition (cluster architecture).
- 17: Redis 7.0 memory edition (standard architecture).
- 18: Redis 7.0 memory edition (cluster architecture).
- 200: Memcached 1.6 memory edition (cluster architecture).
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Whether the automatic renewal flag is set for an instance. <ul><li>1: set;</li> <li>0: not set.</li></ul>
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Expiration time of a monthly subscription instance.
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * Engine. Valid values: Redis Community Edition and Tencent Cloud CKV.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Product type. <ul><li>standalone: Standard Edition;</li> <li>cluster: Cluster Edition.</li></ul>
         * @type {string || null}
         */
        this.ProductType = null;

        /**
         * VPC ID, for example, vpc-fk33jsf43kgv.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * ID of the subnet under VPC, for example, subnet-fd3j6l35mm0.
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Billing mode. Only pay-as-you-go billing is supported.
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * Description of the instance running status, for example, running.
         * @type {string || null}
         */
        this.InstanceTitle = null;

        /**
         * Default termination time of isolated instances, for example, in the format of 2020-02-15 10:20:00. By default, a pay-as-you-go instance will be terminated after 2 hours of isolation, and a monthly subscription instance will be terminated after 7 days.
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * Sub-status returned for the instance in the process.
 - 0: disk read-write status.
 - 1: disk read-only status because the upper limit is exceeded.
         * @type {number || null}
         */
        this.SubStatus = null;

        /**
         * Anti-affinity tag.
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * Instance node information.
         * @type {Array.<InstanceNode> || null}
         */
        this.InstanceNode = null;

        /**
         * Shard size.
         * @type {number || null}
         */
        this.RedisShardSize = null;

        /**
         * Number of shards.
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * Number of replicas.
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * Billing ID.
         * @type {number || null}
         */
        this.PriceId = null;

        /**
         * Time when an instance starts to be isolated.
         * @type {string || null}
         */
        this.CloseTime = null;

        /**
         * Read weight of a secondary node.
- 0: disable read-only replicas.
- 100: enable read-only replicas.
         * @type {number || null}
         */
        this.SlaveReadWeight = null;

        /**
         * Information on tags associated with the instance.
         * @type {Array.<InstanceTagInfo> || null}
         */
        this.InstanceTags = null;

        /**
         * Project name
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Whether the instance is password-free.<ul><li>true: password-free instance.</li><li>false: password required by the instance.</li></ul>
         * @type {boolean || null}
         */
        this.NoAuth = null;

        /**
         * Number of client connections.
         * @type {number || null}
         */
        this.ClientLimit = null;

        /**
         * DTS status. (Internal parameter, which can be ignored.)
         * @type {number || null}
         */
        this.DtsStatus = null;

        /**
         * Shard bandwidth limit. Unit: MB.
         * @type {number || null}
         */
        this.NetLimit = null;

        /**
         * Password-free instance flag. (Internal parameter, which can be ignored.)
         * @type {number || null}
         */
        this.PasswordFree = null;

        /**
         * This parameter encounters a naming issue. It is recommended to use the parameter IPv6 instead. It is an internal parameter and can be ignored.
         * @type {string || null}
         */
        this.Vip6 = null;

        /**
         * Internal parameter, which can be ignored.
         * @type {string || null}
         */
        this.IPv6 = null;

        /**
         * Instance read-only flag. (Internal parameter, which can be ignored.)
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * Internal parameter, which can be ignored.
         * @type {string || null}
         */
        this.RemainBandwidthDuration = null;

        /**
         * For TencentDB for Redis® instances, ignore this parameter.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Monitoring version.<ul><li>1m: monitoring with the 1-minute granularity. Currently, this monitoring granularity is unavailable. For details, see [1-Minute Granularity Will Be Disused](https://intl.cloud.tencent.com/document/product/239/80653?from_cn_redirect=1).</li><li>5s: monitoring with the 5-second granularity.</li></ul>
         * @type {string || null}
         */
        this.MonitorVersion = null;

        /**
         * Minimum value that can be set for the maximum number of client connections.
         * @type {number || null}
         */
        this.ClientLimitMin = null;

        /**
         * Maximum value that can be set for the maximum number of client connections.
         * @type {number || null}
         */
        this.ClientLimitMax = null;

        /**
         * Node details of the instance.

It is returned only for multi-AZ instances.
         * @type {Array.<RedisNodeInfo> || null}
         */
        this.NodeSet = null;

        /**
         * Region information on the instance. For example, ap-guangzhou.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Public network address.
         * @type {string || null}
         */
        this.WanAddress = null;

        /**
         * Polaris service address for internal use.
         * @type {string || null}
         */
        this.PolarisServer = null;

        /**
         * CDC cluster ID of TencentDB for Redis®.
         * @type {string || null}
         */
        this.RedisClusterId = null;

        /**
         * CDC cluster ID.
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

        /**
         * Product edition.<ul><li>local: local disk.</li><li>cloud: cloud disk edition.</li><li>cdc: CDC cluster edition.</li></ul>
         * @type {string || null}
         */
        this.ProductVersion = null;

        /**
         * Current proxy version of the instance.
         * @type {string || null}
         */
        this.CurrentProxyVersion = null;

        /**
         * Current cache minor version of the instance. If the instance is added to a global replication group, the global replication kernel version is displayed.
         * @type {string || null}
         */
        this.CurrentRedisVersion = null;

        /**
         * Upgradable proxy version for the instance.
         * @type {string || null}
         */
        this.UpgradeProxyVersion = null;

        /**
         * Upgradable cache minor version for the instance.
         * @type {string || null}
         */
        this.UpgradeRedisVersion = null;

        /**
         * Backup mode. - SecondLevelBackup: second-level backup. - NormalLevelBackup: ordinary backup.
         * @type {string || null}
         */
        this.BackupMode = null;

        /**
         * Deletion protection switch. 0: disabled; 1: enabled.
         * @type {number || null}
         */
        this.DeleteProtectionSwitch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.WanIp = 'WanIp' in params ? params.WanIp : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Createtime = 'Createtime' in params ? params.Createtime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.SizeUsed = 'SizeUsed' in params ? params.SizeUsed : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.InstanceTitle = 'InstanceTitle' in params ? params.InstanceTitle : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.SubStatus = 'SubStatus' in params ? params.SubStatus : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

        if (params.InstanceNode) {
            this.InstanceNode = new Array();
            for (let z in params.InstanceNode) {
                let obj = new InstanceNode();
                obj.deserialize(params.InstanceNode[z]);
                this.InstanceNode.push(obj);
            }
        }
        this.RedisShardSize = 'RedisShardSize' in params ? params.RedisShardSize : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.PriceId = 'PriceId' in params ? params.PriceId : null;
        this.CloseTime = 'CloseTime' in params ? params.CloseTime : null;
        this.SlaveReadWeight = 'SlaveReadWeight' in params ? params.SlaveReadWeight : null;

        if (params.InstanceTags) {
            this.InstanceTags = new Array();
            for (let z in params.InstanceTags) {
                let obj = new InstanceTagInfo();
                obj.deserialize(params.InstanceTags[z]);
                this.InstanceTags.push(obj);
            }
        }
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;
        this.ClientLimit = 'ClientLimit' in params ? params.ClientLimit : null;
        this.DtsStatus = 'DtsStatus' in params ? params.DtsStatus : null;
        this.NetLimit = 'NetLimit' in params ? params.NetLimit : null;
        this.PasswordFree = 'PasswordFree' in params ? params.PasswordFree : null;
        this.Vip6 = 'Vip6' in params ? params.Vip6 : null;
        this.IPv6 = 'IPv6' in params ? params.IPv6 : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.RemainBandwidthDuration = 'RemainBandwidthDuration' in params ? params.RemainBandwidthDuration : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.MonitorVersion = 'MonitorVersion' in params ? params.MonitorVersion : null;
        this.ClientLimitMin = 'ClientLimitMin' in params ? params.ClientLimitMin : null;
        this.ClientLimitMax = 'ClientLimitMax' in params ? params.ClientLimitMax : null;

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new RedisNodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.WanAddress = 'WanAddress' in params ? params.WanAddress : null;
        this.PolarisServer = 'PolarisServer' in params ? params.PolarisServer : null;
        this.RedisClusterId = 'RedisClusterId' in params ? params.RedisClusterId : null;
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;
        this.ProductVersion = 'ProductVersion' in params ? params.ProductVersion : null;
        this.CurrentProxyVersion = 'CurrentProxyVersion' in params ? params.CurrentProxyVersion : null;
        this.CurrentRedisVersion = 'CurrentRedisVersion' in params ? params.CurrentRedisVersion : null;
        this.UpgradeProxyVersion = 'UpgradeProxyVersion' in params ? params.UpgradeProxyVersion : null;
        this.UpgradeRedisVersion = 'UpgradeRedisVersion' in params ? params.UpgradeRedisVersion : null;
        this.BackupMode = 'BackupMode' in params ? params.BackupMode : null;
        this.DeleteProtectionSwitch = 'DeleteProtectionSwitch' in params ? params.DeleteProtectionSwitch : null;

    }
}

/**
 * ReleaseWanAddress request structure.
 * @class
 */
class ReleaseWanAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
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
 * CloseSSL response structure.
 * @class
 */
class CloseSSLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMaintenanceWindow response structure.
 * @class
 */
class ModifyMaintenanceWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Modification status. Valid values: success, failed.
         * @type {string || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReplicationGroup response structure.
 * @class
 */
class CreateReplicationGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asynchronous process ID.
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Replication group ID of the string type.
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeyTypeDist request structure.
 * @class
 */
class DescribeInstanceMonitorBigKeyTypeDistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time, such as "20190219"
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmdTook request structure.
 * @class
 */
class DescribeInstanceMonitorTopNCmdTookRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Query time range.
- 1: real-time.
- 2: last 30 minutes.
- 3: last 6 hours.
- 4: last 24 hours.
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * DestroyPrepaidInstance response structure.
 * @class
 */
class DestroyPrepaidInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID
         * @type {string || null}
         */
        this.DealId = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of the instance node group
 * @class
 */
class ReplicaGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Node group name, which is empty for the master node
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Node AZ ID, such as ap-guangzhou-1
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Node group type. master: primary node; replica: replica node.
         * @type {string || null}
         */
        this.Role = null;

        /**
         * List of nodes in the node group
         * @type {Array.<RedisNode> || null}
         */
        this.RedisNodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Role = 'Role' in params ? params.Role : null;

        if (params.RedisNodes) {
            this.RedisNodes = new Array();
            for (let z in params.RedisNodes) {
                let obj = new RedisNode();
                obj.deserialize(params.RedisNodes[z]);
                this.RedisNodes.push(obj);
            }
        }

    }
}

/**
 * DescribeRedisClusterOverview request structure.
 * @class
 */
class DescribeRedisClusterOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CDC ID. Log in to the [CDC console](https://console.cloud.tencent.com/cdc/dedicatedcluster/index?rid=1)
and obtain the cluster ID in the instance list.
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;

    }
}

/**
 * DescribeCommonDBInstances response structure.
 * @class
 */
class DescribeCommonDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance information
         * @type {Array.<RedisCommonInstanceList> || null}
         */
        this.InstanceDetails = null;

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

        if (params.InstanceDetails) {
            this.InstanceDetails = new Array();
            for (let z in params.InstanceDetails) {
                let obj = new RedisCommonInstanceList();
                obj.deserialize(params.InstanceDetails[z]);
                this.InstanceDetails.push(obj);
            }
        }
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
         * Instance type.

- 2: Redis 2.8 memory edition (standard architecture).
- 6: Redis 4.0 memory edition (standard architecture).
- 7: Redis 4.0 memory edition (cluster architecture).
- 8: Redis 5.0 memory edition (standard architecture).
- 9: Redis 5.0 memory edition (cluster architecture).
- 15: Redis 6.2 memory edition (standard architecture).
- 16: Redis 6.2 memory edition (cluster architecture).
- 17: Redis 7.0 memory edition (standard architecture).
- 18: Redis 7.0 memory edition (cluster architecture).
- 200: Memcached 1.6 memory edition (cluster architecture).
         * @type {number || null}
         */
        this.TypeId = null;

        /**
         * Memory capacity in MB, which must be a multiple of 1,024. It is subject to the purchasable specifications returned by the [DescribeProductInfo API](https://intl.cloud.tencent.com/document/api/239/30600?from_cn_redirect=1).
If `TypeId` indicates the standard architecture, `MemSize` indicates the total memory capacity of an instance; if `TypeId` indicates the cluster architecture, `MemSize` indicates the memory capacity per shard.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of instances. The actual quantity purchasable at a time is subject to the specifications returned by the [DescribeProductInfo API](https://intl.cloud.tencent.com/document/api/239/30600?from_cn_redirect=1).
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Length of purchase in months, which is required when creating a monthly-subscribed instance. Value range: [1,2,3,4,5,6,7,8,9,10,11,12,24,36]. For pay-as-you-go instances, set the parameter to `1`.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Billing mode.
- 0: pay-as-you-go.
- 1: monthly subscription.
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * ID of the AZ to which the instance belongs. See [Regions and AZs](https://www.tencentcloud.com/document/product/239/4106?from_cn_redirect=1).
**Note**: Specify at least one parameter from **ZoneId** and **ZoneName**.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Number of instance shards.
- The number of shards is required to be set to 1 for the standard architecture.
- The number of shards can be set to 1, 3, 5, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, or 128 for the cluster architecture.
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * Number of instance replicas. Valid values: 1, 2, 3, 4, and 5.
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * Whether replica read-only is supported. For the standard architecture of Redis 2.8 and CKV, this parameter does not need to be configured.
- true: Replica read-only is not required.
- false: Replica read-only is required.
         * @type {boolean || null}
         */
        this.ReplicasReadonly = null;

        /**
         * Name of the AZ to which the instance belongs. See [Regions and AZs](https://www.tencentcloud.com/document/product/239/4106?from_cn_redirect=1).
**Note**: Specify at least one parameter from **ZoneId** and **ZoneName**.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Deployment mode.
- local: local disk. This is the default value.
- cloud: cloud disk.
- cdc: CDC.
         * @type {string || null}
         */
        this.ProductVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.ReplicasReadonly = 'ReplicasReadonly' in params ? params.ReplicasReadonly : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ProductVersion = 'ProductVersion' in params ? params.ProductVersion : null;

    }
}

/**
 * DescribeRedisClusters request structure.
 * @class
 */
class DescribeRedisClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dedicated Redis cluster ID. Log in to the [CDC console](https://console.cloud.tencent.com/cdc/dedicatedcluster/index?rid=1),
switch to the **Cloud Service Management** page, select **TencentDB for Redis** from the drop-down list, and obtain the dedicated cluster ID.
         * @type {Array.<string> || null}
         */
        this.RedisClusterIds = null;

        /**
         * Cluster status.
- 1: in process.
- 2: running.
- 3: isolated.
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * Project ID array. Log in to the [project management](https://console.tencentcloud.com/project) page and copy the project ID in **Project Name**.
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * Renewal mode.
- 0: default status (manual renewal).
- 1: automatic renewal.
- 2: no automatic renewal.
         * @type {Array.<number> || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Dedicated Redis cluster name.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Search keyword. Valid values: cluster ID and cluster name.
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Limit on the number of records returned in pagination mode. If this parameter is not specified, the value 20 will be used by default.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset, which is an integer multiple of Limit.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * CDC ID. Log in to the [CDC console](https://console.cloud.tencent.com/cdc/dedicatedcluster/index?rid=1)
and obtain the cluster ID in the instance list.
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RedisClusterIds = 'RedisClusterIds' in params ? params.RedisClusterIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;

    }
}

/**
 * UpgradeSmallVersion response structure.
 * @class
 */
class UpgradeSmallVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
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
 * ModifyInstanceParams request structure.
 * @class
 */
class ModifyInstanceParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of instance parameters modified
         * @type {Array.<InstanceParam> || null}
         */
        this.InstanceParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.InstanceParams) {
            this.InstanceParams = new Array();
            for (let z in params.InstanceParams) {
                let obj = new InstanceParam();
                obj.deserialize(params.InstanceParams[z]);
                this.InstanceParams.push(obj);
            }
        }

    }
}

/**
 * DescribeSSLStatus request structure.
 * @class
 */
class DescribeSSLStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.cloud.tencent.com/redis/instance/list), and copy it from the instance list.
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
 * OpenSSL request structure.
 * @class
 */
class OpenSSLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
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
 * Backup download information
 * @class
 */
class BackupDownloadInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup file name
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Backup file size in bytes. If the parameter value is `0`, the backup file size is unknown.
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Address (valid for six hours) used to download the backup file over the public network
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * Address (valid for six hours) used to download the backup file over the private network
         * @type {string || null}
         */
        this.InnerDownloadUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.InnerDownloadUrl = 'InnerDownloadUrl' in params ? params.InnerDownloadUrl : null;

    }
}

/**
 * Big key type distribution details
 * @class
 */
class BigKeyTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Count
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Size
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Timestamp
         * @type {number || null}
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * DescribeInstanceNodeInfo request structure.
 * @class
 */
class DescribeInstanceNodeInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List size Size of node information returned per page.  Default value: `20`. Maximum value: `1000`.  This field has been disused.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is an integral multiple of `Limit`. Calculation formula:  `offset` = `limit` * (page number - 1). This field has been disused.
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
 * DescribeMaintenanceWindow request structure.
 * @class
 */
class DescribeMaintenanceWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID. Example: crs-xjhsdj****. Log in to the [TencentDB for Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.
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
 * DescribeInstanceSupportFeature response structure.
 * @class
 */
class DescribeInstanceSupportFeatureResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to support.
         * @type {boolean || null}
         */
        this.Support = null;

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
        this.Support = 'Support' in params ? params.Support : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceLogDelivery request structure.
 * @class
 */
class DescribeInstanceLogDeliveryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.cloud.tencent.com/redis/instance), and copy it from the instance list.
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
 * AddReplicationInstance request structure.
 * @class
 */
class AddReplicationInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Replication group ID. Log in to the [global replication](https://console.tencentcloud.com/redis/replication) page of the Redis console and obtain it.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Instance ID.
- There are region and AZ limitations for adding a replication group instance. For detailed information, see [Use Limits](https://www.tencentcloud.com/document/product/239/71934?from_cn_redirect=1).
- Currently, only Redis 4.0 and 5.0 cluster architecture instances support being added to the replication groups.
- Log in to the [Redis console](https://console.cloud.tencent.com/redis/instance/list), and copy the ID of the instance that needs to be added to the replication group in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Assigns roles to instances added to the replication group. <ul><li>rw: read-write;</li> <li>r: read-only.</li></ul>
         * @type {string || null}
         */
        this.InstanceRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;

    }
}

/**
 * Instance node type
 * @class
 */
class InstanceClusterNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node group name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * ID of the runtime node of an instance
         * @type {string || null}
         */
        this.RunId = null;

        /**
         * Cluster role. Valid values:  - `0` (master) - `1` (replica)
         * @type {number || null}
         */
        this.Role = null;

        /**
         * Node status. Valid values:  - `0` (read/write) - `1` (read) - `2` (backup)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Service status. Valid values: `0` (down), `1` (on).
         * @type {number || null}
         */
        this.Connected = null;

        /**
         * Node creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Node elimination time
         * @type {string || null}
         */
        this.DownTime = null;

        /**
         * Node slot distribution range
         * @type {string || null}
         */
        this.Slots = null;

        /**
         * Distribution of node keys
         * @type {number || null}
         */
        this.Keys = null;

        /**
         * Node QPS Number of executions per second on sharded nodes Unit: Counts/sec
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * QPS slope of a node
         * @type {number || null}
         */
        this.QpsSlope = null;

        /**
         * Node storage
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Node storage slope
         * @type {number || null}
         */
        this.StorageSlope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.RunId = 'RunId' in params ? params.RunId : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Connected = 'Connected' in params ? params.Connected : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DownTime = 'DownTime' in params ? params.DownTime : null;
        this.Slots = 'Slots' in params ? params.Slots : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.QpsSlope = 'QpsSlope' in params ? params.QpsSlope : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.StorageSlope = 'StorageSlope' in params ? params.StorageSlope : null;

    }
}

/**
 * DescribeSSLStatus response structure.
 * @class
 */
class DescribeSSLStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Download address for SSL certificate
         * @type {string || null}
         */
        this.CertDownloadUrl = null;

        /**
         * Expiration time of the certificate download address
         * @type {string || null}
         */
        this.UrlExpiredTime = null;

        /**
         * Whether the SSL is enabled for the identified instance.
- `true`: Enabled
- `false`: Disabled
         * @type {boolean || null}
         */
        this.SSLConfig = null;

        /**
         * Whether SSL is supported for the identified instance.
-`true`: Supported
-`false`: Not supported
         * @type {boolean || null}
         */
        this.FeatureSupport = null;

        /**
         * Status of SSL configuration
- `1`: Configuring
- `2`: Configured successfully
         * @type {number || null}
         */
        this.Status = null;

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
        this.CertDownloadUrl = 'CertDownloadUrl' in params ? params.CertDownloadUrl : null;
        this.UrlExpiredTime = 'UrlExpiredTime' in params ? params.UrlExpiredTime : null;
        this.SSLConfig = 'SSLConfig' in params ? params.SSLConfig : null;
        this.FeatureSupport = 'FeatureSupport' in params ? params.FeatureSupport : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTendisSlowLog request structure.
 * @class
 */
class DescribeTendisSlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Tendis console](https://console.cloud.tencent.com/tendis) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time for a query, for example, 2019-09-08 12:12:41, with a maximum query span of 30 days.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time for a query, for example, 2019-09-09 12:12:41, with a maximum query span of 30 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Slow query threshold, in milliseconds. The value is a positive integer greater than 0.
         * @type {number || null}
         */
        this.MinQueryTime = null;

        /**
         * Page size. The default value is 20, the minimum value is 1, and the maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is an integer multiple of Limit. Calculation formula: Offset = Limit x (Page number – 1). The default value is 0.
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
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MinQueryTime = 'MinQueryTime' in params ? params.MinQueryTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeProxySlowLog request structure.
 * @class
 */
class DescribeProxySlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a specified instance,  such as  "crs-xjhsdj****" Log in to the [Redis console](https://console.cloud.tencent.com/redis) and copy the instance ID in the instance list.

         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time of a slow query, with a maximum query span of 30 days.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time of a slow query, with a maximum query span of 30 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Slow query threshold, in milliseconds. The value is a positive integer greater than 0.
         * @type {number || null}
         */
        this.MinQueryTime = null;

        /**
         * Size of the output task list per page. The default value is 20, the minimum value is 1, and the maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is an integer multiple of Limit. Calculation formula: Offset = Limit x (Page number – 1). The default value is 0.
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
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MinQueryTime = 'MinQueryTime' in params ? params.MinQueryTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeRedisClusters response structure.
 * @class
 */
class DescribeRedisClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of clusters.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * CDC cluster resource list.
         * @type {Array.<CDCResource> || null}
         */
        this.Resources = null;

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

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new CDCResource();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceBackupMode request structure.
 * @class
 */
class ModifyInstanceBackupModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.cloud.tencent.com/redis/instance/list), and copy it from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup mode:
- SecondLevelBackup: second-level backup.
- NormalLevelBackup: ordinary backup.
         * @type {string || null}
         */
        this.BackupMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMode = 'BackupMode' in params ? params.BackupMode : null;

    }
}

/**
 * DescribeProxySlowLog response structure.
 * @class
 */
class DescribeProxySlowLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of slow queries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Slow query details. Note: If the value of TotalCount is greater than 10,000, indicating that the number of slow logs exceeds 10,000, log details cannot be returned. Instead, the returned data is empty. It is recommended to reduce the interval between BeginTime and EndTime and perform multiple queries.
         * @type {Array.<InstanceProxySlowlogDetail> || null}
         */
        this.InstanceProxySlowLogDetail = null;

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

        if (params.InstanceProxySlowLogDetail) {
            this.InstanceProxySlowLogDetail = new Array();
            for (let z in params.InstanceProxySlowLogDetail) {
                let obj = new InstanceProxySlowlogDetail();
                obj.deserialize(params.InstanceProxySlowLogDetail[z]);
                this.InstanceProxySlowLogDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceReadOnly request structure.
 * @class
 */
class ModifyInstanceReadOnlyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance input mode.
- 0: read/write.
- 1: read-only.
         * @type {string || null}
         */
        this.InputMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InputMode = 'InputMode' in params ? params.InputMode : null;

    }
}

/**
 * DescribeInstanceAccount response structure.
 * @class
 */
class DescribeInstanceAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account details.
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * Number of accounts.
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

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorBigKey request structure.
 * @class
 */
class DescribeInstanceMonitorBigKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Request type. 1: string type; 2: all types
         * @type {number || null}
         */
        this.ReqType = null;

        /**
         * Time, such as "20190219"
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ReqType = 'ReqType' in params ? params.ReqType : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DescribeBackupDownloadRestriction request structure.
 * @class
 */
class DescribeBackupDownloadRestrictionRequest extends  AbstractModel {
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
 * Tendis node information
 * @class
 */
class TendisNodes extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * Node role
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * AZ ID.	
         * @type {number || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DescribeParamTemplateInfo response structure.
 * @class
 */
class DescribeParamTemplateInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quantity of parameters in the parameter template
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Parameter template ID.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Parameter template name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Product type.
- 2: Redis 2.8 Memory Edition (standard architecture).
- 3: CKV 3.2 Memory Edition (standard architecture).
- 4: CKV 3.2 Memory Edition (cluster architecture).
- 5: Redis 2.8 Memory Edition (stand-alone).
- 6: Redis 4.0 Memory Edition (standard architecture).
- 7: Redis 4.0 Memory Edition (cluster architecture).
- 8: Redis 5.0 Memory Edition (standard architecture).
- 9: Redis 5.0 Memory Edition (cluster architecture).
- 15: Redis 6.2 Memory Edition (standard architecture).
- 16: Redis 6.2 Memory Edition (cluster architecture).
- 17: Redis 7.0 Memory Edition (standard architecture).
- 18: Redis 7.0 Memory Edition (cluster architecture).
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * Parameter template description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Parameter details, including parameter name, current value, default value, maximum value, minimum value, enumeration value and other information.
         * @type {Array.<ParameterDetail> || null}
         */
        this.Items = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParameterDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchProxy request structure.
 * @class
 */
class SwitchProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Proxy ID of an instance, which can be obtained through NodeId of the response parameter **Proxy** of the API [DescribeInstanceNodeInfo](https://intl.cloud.tencent.com/document/product/239/48603?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ProxyID = null;

        /**
         * Instance proxy ID list. Call the API [DescribeInstanceNodeInfo](https://www.tencentcloud.com/document/product/239/48603?from_cn_redirect=1) to obtain IDs from **NodeId** in the **Proxy** response parameter.
         * @type {Array.<string> || null}
         */
        this.ProxyIDList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProxyID = 'ProxyID' in params ? params.ProxyID : null;
        this.ProxyIDList = 'ProxyIDList' in params ? params.ProxyIDList : null;

    }
}

/**
 * DescribeInstanceSpecBandwidth request structure.
 * @class
 */
class DescribeInstanceSpecBandwidthRequest extends  AbstractModel {
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
 * SwitchInstanceVip response structure.
 * @class
 */
class SwitchInstanceVipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The VPC that corresponds to the configured download address of the backup file
 * @class
 */
class BackupLimitVpcItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The region of the VPC that corresponds to the download address of the backup file
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The list of VPCs that correspond to the download addresses of the backup files
         * @type {Array.<string> || null}
         */
        this.VpcList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcList = 'VpcList' in params ? params.VpcList : null;

    }
}

/**
 * DisassociateSecurityGroups request structure.
 * @class
 */
class DisassociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name, which is `redis` for this API.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Security group ID, which can be obtained through the sub-parameter **SecurityGroupId** of the response parameter InstanceSecurityGroupsDetail of the API [DescribeInstanceSecurityGroup](https://intl.cloud.tencent.com/document/product/239/34447?from_cn_redirect=1).
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Instance ID list, which is an array of one or more instance IDs. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
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
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * StartupInstance request structure.
 * @class
 */
class StartupInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.cloud.tencent.com/redis/instance/list), and copy the ID of the instance to be deisolated from the recycle bin.
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
 * Hot key details
 * @class
 */
class HotKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the hot key.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Key type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Number of accesses for the hot key in a specified time period.
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * Description of the instance parameter in Enum type
 * @class
 */
class InstanceEnumParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Parameter type, such as `Enum`.
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * Whether to restart the database after modifying the parameters. Valid values: - `true` (required) - `false` (not required)
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * Default value of the parameter
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Current value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Tips = null;

        /**
         * Acceptable values for the parameter
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * Parameter modification status. Valid values: - `1` (modifying) - `2` (modified)
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
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateInstanceAccount response structure.
 * @class
 */
class CreateInstanceAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceBackups request structure.
 * @class
 */
class DescribeInstanceBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of backups returned per page. Default value: `20`. Maximum value: `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is an integral multiple of `Limit`. `offset` = `limit` * (page number - 1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * ID of the instance to be operated on, which can be obtained through the `InstanceId` field in the return value of the `DescribeInstance` API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time for a query, for example, in the format of 2017-02-08 16:46:34, with a maximum query span of 30 days. You can query the list of instances backed up within the [beginTime, endTime] period.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time for a query, for example, in the format of 2017-02-08 19:09:26, with a maximum query span of 30 days. You can query the list of instances backed up within the [BeginTime, EndTime] period.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Backup task status:
`1`: The backup is in the process.
`2`: The backup is normal.
`3`: The backup is being converted to an RDB file.
`4`: Conversion to RDB has been completed.
`-1`: The backup expired.
`-2`: The backup has been deleted.
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * Instance name, which can be fuzzily searched.
         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * RemoveReplicationInstance response structure.
 * @class
 */
class RemoveReplicationInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asynchronous task ID.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecondLevelBackupInfo request structure.
 * @class
 */
class DescribeSecondLevelBackupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID. Log in to the [Redis console](https://console.cloud.tencent.com/redis/instance/list), and copy it from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Second-level backup timestamp.
- Setting range: support any second-level time point within 7 days.
- Timestamp format: UNIX timestamp.
         * @type {number || null}
         */
        this.BackupTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupTimestamp = 'BackupTimestamp' in params ? params.BackupTimestamp : null;

    }
}

/**
 * Security group details
 * @class
 */
class SecurityGroupDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Security group creation time
         * @type {string || null}
         */
        this.CreateTime = null;

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

        /**
         * Inbound rules of the security group, which control the access source to the database.
         * @type {Array.<SecurityGroupsInboundAndOutbound> || null}
         */
        this.InboundRule = null;

        /**
         * Security group outbound rule
         * @type {Array.<SecurityGroupsInboundAndOutbound> || null}
         */
        this.OutboundRule = null;

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
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

        if (params.InboundRule) {
            this.InboundRule = new Array();
            for (let z in params.InboundRule) {
                let obj = new SecurityGroupsInboundAndOutbound();
                obj.deserialize(params.InboundRule[z]);
                this.InboundRule.push(obj);
            }
        }

        if (params.OutboundRule) {
            this.OutboundRule = new Array();
            for (let z in params.OutboundRule) {
                let obj = new SecurityGroupsInboundAndOutbound();
                obj.deserialize(params.OutboundRule[z]);
                this.OutboundRule.push(obj);
            }
        }

    }
}

/**
 * InquiryPriceUpgradeInstance response structure.
 * @class
 */
class InquiryPriceUpgradeInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price.
         * @type {number || null}
         */
        this.Price = null;

        /**
         * High precision price.
         * @type {number || null}
         */
        this.HighPrecisionPrice = null;

        /**
         * Currency.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Price unit.

 - pent: cent.
 - microPent: microcent.
         * @type {string || null}
         */
        this.AmountUnit = null;

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
        this.Price = 'Price' in params ? params.Price : null;
        this.HighPrecisionPrice = 'HighPrecisionPrice' in params ? params.HighPrecisionPrice : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.AmountUnit = 'AmountUnit' in params ? params.AmountUnit : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInstanceAccount response structure.
 * @class
 */
class DeleteInstanceAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorSIP request structure.
 * @class
 */
class DescribeInstanceMonitorSIPRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [Redis console](https://console.tencentcloud.com/redis/instance) and copy it in the instance list.
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
 * Information list of instance shards
 * @class
 */
class InstanceClusterShard extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of a shard node
         * @type {string || null}
         */
        this.ShardName = null;

        /**
         * The serial number of a shard node
         * @type {string || null}
         */
        this.ShardId = null;

        /**
         * The role of a shard node
- `0`: Master node.
- `1`: Replica node.
         * @type {number || null}
         */
        this.Role = null;

        /**
         * Number of keys
         * @type {number || null}
         */
        this.Keys = null;

        /**
         * Slot information
         * @type {string || null}
         */
        this.Slots = null;

        /**
         * Used Capacity
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Capacity slope
         * @type {number || null}
         */
        this.StorageSlope = null;

        /**
         * This field is recommended to use the RunId instead due to spelling inconsistency.
 Meaning: The node ID during instance runtime.

         * @type {string || null}
         */
        this.Runid = null;

        /**
         * The node ID during instance runtime.
         * @type {string || null}
         */
        this.RunId = null;

        /**
         * Service status
- `0`: Down.
- `1`: On.
         * @type {number || null}
         */
        this.Connected = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardName = 'ShardName' in params ? params.ShardName : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Slots = 'Slots' in params ? params.Slots : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.StorageSlope = 'StorageSlope' in params ? params.StorageSlope : null;
        this.Runid = 'Runid' in params ? params.Runid : null;
        this.RunId = 'RunId' in params ? params.RunId : null;
        this.Connected = 'Connected' in params ? params.Connected : null;

    }
}

/**
 * OpenSSL response structure.
 * @class
 */
class OpenSSLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Tendis slow query details
 * @class
 */
class TendisSlowLogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution time
         * @type {string || null}
         */
        this.ExecuteTime = null;

        /**
         * Duration of the slow query (ms)
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Command
         * @type {string || null}
         */
        this.Command = null;

        /**
         * Command line details
         * @type {string || null}
         */
        this.CommandLine = null;

        /**
         * Node ID
         * @type {string || null}
         */
        this.Node = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecuteTime = 'ExecuteTime' in params ? params.ExecuteTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.CommandLine = 'CommandLine' in params ? params.CommandLine : null;
        this.Node = 'Node' in params ? params.Node : null;

    }
}

/**
 * ChangeInstanceRole response structure.
 * @class
 */
class ChangeInstanceRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGlobalReplicationArea response structure.
 * @class
 */
class DescribeGlobalReplicationAreaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Available region information.
         * @type {Array.<AvailableRegion> || null}
         */
        this.AvailableRegions = null;

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

        if (params.AvailableRegions) {
            this.AvailableRegions = new Array();
            for (let z in params.AvailableRegions) {
                let obj = new AvailableRegion();
                obj.deserialize(params.AvailableRegions[z]);
                this.AvailableRegions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Product information in the availability zone
 * @class
 */
class ZoneCapacityConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ ID, such as ap-guangzhou-3
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Availability zone name.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Whether the AZ is sold out.
         * @type {boolean || null}
         */
        this.IsSaleout = null;

        /**
         * Whether the default AZ is used.
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * Network type.

- basenet: basic network.
- vpcnet: VPC.
         * @type {Array.<string> || null}
         */
        this.NetWorkType = null;

        /**
         * Information of an AZ, such as product specifications in it
         * @type {Array.<ProductConf> || null}
         */
        this.ProductSet = null;

        /**
         * AZ ID, such as 100003
         * @type {number || null}
         */
        this.OldZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.IsSaleout = 'IsSaleout' in params ? params.IsSaleout : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.NetWorkType = 'NetWorkType' in params ? params.NetWorkType : null;

        if (params.ProductSet) {
            this.ProductSet = new Array();
            for (let z in params.ProductSet) {
                let obj = new ProductConf();
                obj.deserialize(params.ProductSet[z]);
                this.ProductSet.push(obj);
            }
        }
        this.OldZoneId = 'OldZoneId' in params ? params.OldZoneId : null;

    }
}

/**
 * ModifyInstanceEvent response structure.
 * @class
 */
class ModifyInstanceEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event ID.
         * @type {number || null}
         */
        this.EventId = null;

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
        this.EventId = 'EventId' in params ? params.EventId : null;
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
         * ID of the instance whose configuration is to be modified. Log in to the [TencentDB for Redis® console](https://console.cloud.tencent.com/Redis/instance/list) and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * New memory size of an instance shard. <ul><li>Unit: MB. </li><li>You can only modify one of the three parameters at a time: `MemSize`, `RedisShardNum`, and `RedisReplicasNum`. To modify one of them, you need to enter the other two, which are consistent with the original configuration specifications of the instance. </li><li>In case of capacity reduction, the new specification must be at least 1.3 times the used capacity; otherwise, the operation will fail.</li></ul>
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * New number of instance shards. <ul><li>This parameter is not required for standard architecture instances, but for cluster architecture instances. </li><li>For cluster architecture, you can only modify one of the three parameters at a time: `MemSize`, `RedisShardNum`, and `RedisReplicasNum`. To modify one of them, you need to enter the other two, which are consistent with the original configuration specifications of the instance. </li></ul>
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * New replica quantity. <ul><li>You can only modify one of the three parameters at a time: `MemSize`, `RedisShardNum`, and `RedisReplicasNum`. To modify one of them, you need to enter the other two, which are consistent with the original configuration specifications of the instance. </li></ul>To modify the number of replicas in a multi-AZ instance, `NodeSet` must be passed in.</li></ul>
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * Node information set when you add a replica for multi-AZ instances, including the ID and AZ information of the replica. This parameter is not required for non-multi-AZ instances.
         * @type {Array.<RedisNodeInfo> || null}
         */
        this.NodeSet = null;

        /**
         * Switch time.
 - 1: Perform the operation within the maintenance window: Specification upgrade is executed within the set maintenance window. Use the API [DescribeMaintenanceWindow](https://intl.cloud.tencent.com/document/product/239/46336?from_cn_redirect=1) to query the time period of the set maintenance window. Replica addition/removal, shard addition/removal, and memory capacity expansion/shrinkage are supported within the maintenance window. Specification upgrade within the maintenance window is being gradually tested and published by region. It is already supported in some regions. For urgent integration in regions that do not support it, [submit a ticket](https://console.cloud.tencent.com/workorder/category) to apply for an allowlist.
 -2: Perform the operation immediately: The operation will be performed immediately, without the need to wait for the maintenance window. Operations will be performed immediately by default for the system.
         * @type {number || null}
         */
        this.SwitchOption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new RedisNodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.SwitchOption = 'SwitchOption' in params ? params.SwitchOption : null;

    }
}

/**
 * DescribeInstanceNodeInfo response structure.
 * @class
 */
class DescribeInstanceNodeInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of proxy nodes
         * @type {number || null}
         */
        this.ProxyCount = null;

        /**
         * Proxy node information.
         * @type {Array.<ProxyNodes> || null}
         */
        this.Proxy = null;

        /**
         * The number of Redis nodes
         * @type {number || null}
         */
        this.RedisCount = null;

        /**
         * TencentDB for Redis® node information.
         * @type {Array.<RedisNodes> || null}
         */
        this.Redis = null;

        /**
         * This parameter has been disused.
         * @type {number || null}
         */
        this.TendisCount = null;

        /**
         * This parameter is no longer used. Please ignore it.
         * @type {Array.<TendisNodes> || null}
         */
        this.Tendis = null;

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
        this.ProxyCount = 'ProxyCount' in params ? params.ProxyCount : null;

        if (params.Proxy) {
            this.Proxy = new Array();
            for (let z in params.Proxy) {
                let obj = new ProxyNodes();
                obj.deserialize(params.Proxy[z]);
                this.Proxy.push(obj);
            }
        }
        this.RedisCount = 'RedisCount' in params ? params.RedisCount : null;

        if (params.Redis) {
            this.Redis = new Array();
            for (let z in params.Redis) {
                let obj = new RedisNodes();
                obj.deserialize(params.Redis[z]);
                this.Redis.push(obj);
            }
        }
        this.TendisCount = 'TendisCount' in params ? params.TendisCount : null;

        if (params.Tendis) {
            this.Tendis = new Array();
            for (let z in params.Tendis) {
                let obj = new TendisNodes();
                obj.deserialize(params.Tendis[z]);
                this.Tendis.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProjectSecurityGroup response structure.
 * @class
 */
class DescribeProjectSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group of the project
         * @type {Array.<SecurityGroupDetail> || null}
         */
        this.SecurityGroupDetails = null;

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

        if (params.SecurityGroupDetails) {
            this.SecurityGroupDetails = new Array();
            for (let z in params.SecurityGroupDetails) {
                let obj = new SecurityGroupDetail();
                obj.deserialize(params.SecurityGroupDetails[z]);
                this.SecurityGroupDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instances in replication group
 * @class
 */
class Instances extends  AbstractModel {
    constructor(){
        super();

        /**
         * User APPID, which is the unique application ID that matches an account. Some Tencent Cloud products use this APPID.
         * @type {number || null}
         */
        this.AppId = null;

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
         * Region ID. <ul><li>1: Guangzhou;</li> <li>4: Shanghai;</li> <li>5: Hong Kong (China);</li> <li>7: Shanghai Finance;</li> <li>8: Beijing;</li> <li>9: Singapore;</li> <li>11: Shenzhen Finance;</li> <li>15: Western United States (Silicon Valley).</li></ul>
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Number of replicas
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * Number of shards
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * Shard memory size.
         * @type {number || null}
         */
        this.RedisShardSize = null;

        /**
         * Instance disk size.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Engine: Redis Community Edition, Tencent Cloud CKV.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Read-write permission of the instance. <ul><li>`rw`: Read/Write. </li><li>`r`: Read-only. </li></ul>
         * @type {string || null}
         */
        this.Role = null;

        /**
         * Instance VIP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * This parameter encounters a naming issue. It is recommended to use the parameter IPv6 instead. It is an internal parameter and can be ignored.
         * @type {string || null}
         */
        this.Vip6 = null;

        /**
         * Internal parameter, which can be ignored.
         * @type {string || null}
         */
        this.IPv6 = null;

        /**
         * VPC ID, such as `75101`.
         * @type {number || null}
         */
        this.VpcID = null;

        /**
         * Instance port
         * @type {number || null}
         */
        this.VPort = null;

        /**
         * Instance status. <ul><li>`0`: Uninitialized. </li><li>`1`: In the process. </li><li>`2`: Running. </li><li>`-2`: Isolated. </li><li>`-3`: To be deleted. </li></ul>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Repository ID
         * @type {number || null}
         */
        this.GrocerySysId = null;

        /**
         * Instance type
- `2`: Redis 2.8 Memory Edition (Standard Architecture).
- `3`: CKV 3.2 Memory Edition (Standard Architecture).
- `4`: CKV 3.2 Memory Edition (Cluster Architecture)
- `5`: Redis 2.8 Memory Edition (Standalone)
- `6`: Redis 4.0 Memory Edition (Standard Architecture).
- `7`: Redis 4.0 Memory Edition (Cluster Architecture)
- `8`: Redis 5.0 Memory Edition (Standard Architecture).
- `9`: Redis 5.0 Memory Edition (Cluster Architecture)
- `15`: Redis 6.2 Memory Edition (Standard Architecture).
- `16`: Redis 6.2 Memory Edition (Cluster Architecture)
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * The time when the instance was added to the replication group.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The time when instances in the replication group were updated.
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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisShardSize = 'RedisShardSize' in params ? params.RedisShardSize : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vip6 = 'Vip6' in params ? params.Vip6 : null;
        this.IPv6 = 'IPv6' in params ? params.IPv6 : null;
        this.VpcID = 'VpcID' in params ? params.VpcID : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.GrocerySysId = 'GrocerySysId' in params ? params.GrocerySysId : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeInstanceMonitorHotKey response structure.
 * @class
 */
class DescribeInstanceMonitorHotKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hot key details.
         * @type {Array.<HotKeyInfo> || null}
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
                let obj = new HotKeyInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance parameter
 * @class
 */
class InstanceParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name, such as “timeout”. For supported custom parameters, see <a href="https://www.tencentcloud.com/document/product/239/39796">Setting Instance Parameters</a>
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Current parameter value. For example, if you set the current value of “timeout” to 120 (in seconds), the client connections that remain idle longer than 120 seconds will be closed. For more information on parameter values, see <a href="https://www.tencentcloud.com/document/product/239/39796">Setting Instance Parameters</a>
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
 * DisassociateSecurityGroups response structure.
 * @class
 */
class DisassociateSecurityGroupsResponse extends  AbstractModel {
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
 * ClearInstance response structure.
 * @class
 */
class ClearInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Slow log details
 * @class
 */
class InstanceSlowlogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Slow log duration
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Client address
         * @type {string || null}
         */
        this.Client = null;

        /**
         * Command
         * @type {string || null}
         */
        this.Command = null;

        /**
         * Command line details
         * @type {string || null}
         */
        this.CommandLine = null;

        /**
         * Execution duration
         * @type {string || null}
         */
        this.ExecuteTime = null;

        /**
         * Node ID
         * @type {string || null}
         */
        this.Node = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Client = 'Client' in params ? params.Client : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.CommandLine = 'CommandLine' in params ? params.CommandLine : null;
        this.ExecuteTime = 'ExecuteTime' in params ? params.ExecuteTime : null;
        this.Node = 'Node' in params ? params.Node : null;

    }
}

module.exports = {
    UpgradeProxyVersionRequest: UpgradeProxyVersionRequest,
    RemoveReplicationGroupRequest: RemoveReplicationGroupRequest,
    UpgradeSmallVersionRequest: UpgradeSmallVersionRequest,
    ModifyInstanceParamsResponse: ModifyInstanceParamsResponse,
    EnableReplicaReadonlyRequest: EnableReplicaReadonlyRequest,
    ModifyInstanceAvailabilityZonesRequest: ModifyInstanceAvailabilityZonesRequest,
    RedisBackupSet: RedisBackupSet,
    DescribeInstanceMonitorTopNCmdResponse: DescribeInstanceMonitorTopNCmdResponse,
    ModifyInstanceAvailabilityZonesResponse: ModifyInstanceAvailabilityZonesResponse,
    ModifyAutoBackupConfigResponse: ModifyAutoBackupConfigResponse,
    RestoreInstanceRequest: RestoreInstanceRequest,
    AllocateWanAddressRequest: AllocateWanAddressRequest,
    ApplyParamsTemplateRequest: ApplyParamsTemplateRequest,
    DescribeReplicationGroupInstanceRequest: DescribeReplicationGroupInstanceRequest,
    UpgradeInstanceVersionResponse: UpgradeInstanceVersionResponse,
    CreateInstancesRequest: CreateInstancesRequest,
    CreateReplicationGroupRequest: CreateReplicationGroupRequest,
    DescribeInstanceSpecBandwidthResponse: DescribeInstanceSpecBandwidthResponse,
    DescribeInstanceZoneInfoRequest: DescribeInstanceZoneInfoRequest,
    ModifyConnectionConfigResponse: ModifyConnectionConfigResponse,
    ModifyNetworkConfigResponse: ModifyNetworkConfigResponse,
    CommandTake: CommandTake,
    DescribeInstanceMonitorBigKeyResponse: DescribeInstanceMonitorBigKeyResponse,
    Inbound: Inbound,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    DescribeTaskListResponse: DescribeTaskListResponse,
    ModifyInstancePasswordResponse: ModifyInstancePasswordResponse,
    DescribeSecondLevelBackupInfoResponse: DescribeSecondLevelBackupInfoResponse,
    RenewInstanceResponse: RenewInstanceResponse,
    DescribeSlowLogResponse: DescribeSlowLogResponse,
    DescribeCommonDBInstancesRequest: DescribeCommonDBInstancesRequest,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    RestoreInstanceResponse: RestoreInstanceResponse,
    RedisNodeInfo: RedisNodeInfo,
    ModifyBackupDownloadRestrictionResponse: ModifyBackupDownloadRestrictionResponse,
    DescribeBackupUrlRequest: DescribeBackupUrlRequest,
    DeleteParamTemplateResponse: DeleteParamTemplateResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    TaskInfoDetail: TaskInfoDetail,
    DescribeInstanceZoneInfoResponse: DescribeInstanceZoneInfoResponse,
    Account: Account,
    InstanceProxySlowlogDetail: InstanceProxySlowlogDetail,
    SecurityGroupsInboundAndOutbound: SecurityGroupsInboundAndOutbound,
    ResetPasswordResponse: ResetPasswordResponse,
    ClearInstanceRequest: ClearInstanceRequest,
    UpgradeInstanceVersionRequest: UpgradeInstanceVersionRequest,
    RegionConf: RegionConf,
    BigKeyInfo: BigKeyInfo,
    DescribeBandwidthRangeResponse: DescribeBandwidthRangeResponse,
    DescribeParamTemplatesRequest: DescribeParamTemplatesRequest,
    RenewInstanceRequest: RenewInstanceRequest,
    RedisInstanceEvent: RedisInstanceEvent,
    UpgradeVersionToMultiAvailabilityZonesResponse: UpgradeVersionToMultiAvailabilityZonesResponse,
    SecurityGroup: SecurityGroup,
    DescribeBandwidthRangeRequest: DescribeBandwidthRangeRequest,
    DescribeInstanceParamRecordsResponse: DescribeInstanceParamRecordsResponse,
    ModifyAutoBackupConfigRequest: ModifyAutoBackupConfigRequest,
    InstanceMultiParam: InstanceMultiParam,
    DescribeInstanceDealDetailRequest: DescribeInstanceDealDetailRequest,
    KillMasterGroupResponse: KillMasterGroupResponse,
    RedisNode: RedisNode,
    DescribeProjectSecurityGroupRequest: DescribeProjectSecurityGroupRequest,
    ParameterDetail: ParameterDetail,
    DescribeInstanceShardsResponse: DescribeInstanceShardsResponse,
    DescribeRedisClusterOverviewResponse: DescribeRedisClusterOverviewResponse,
    DisableReplicaReadonlyRequest: DisableReplicaReadonlyRequest,
    CDCResource: CDCResource,
    ModifyInstanceLogDeliveryResponse: ModifyInstanceLogDeliveryResponse,
    ModifyBackupDownloadRestrictionRequest: ModifyBackupDownloadRestrictionRequest,
    DisableReplicaReadonlyResponse: DisableReplicaReadonlyResponse,
    DestroyPrepaidInstanceRequest: DestroyPrepaidInstanceRequest,
    CreateParamTemplateResponse: CreateParamTemplateResponse,
    InstanceTagInfo: InstanceTagInfo,
    DescribeInstanceDTSInfoResponse: DescribeInstanceDTSInfoResponse,
    DescribeInstanceEventsRequest: DescribeInstanceEventsRequest,
    DescribeGlobalReplicationAreaRequest: DescribeGlobalReplicationAreaRequest,
    AddReplicationInstanceResponse: AddReplicationInstanceResponse,
    DestroyPostpaidInstanceResponse: DestroyPostpaidInstanceResponse,
    SwitchInstanceVipRequest: SwitchInstanceVipRequest,
    ChangeReplicaToMasterRequest: ChangeReplicaToMasterRequest,
    ProxyNodes: ProxyNodes,
    ModifyInstanceResponse: ModifyInstanceResponse,
    RedisCommonInstanceList: RedisCommonInstanceList,
    SourceInfo: SourceInfo,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    ChangeMasterInstanceRequest: ChangeMasterInstanceRequest,
    DescribeInstanceDTSInfoRequest: DescribeInstanceDTSInfoRequest,
    CreateParamTemplateRequest: CreateParamTemplateRequest,
    DescribeTendisSlowLogResponse: DescribeTendisSlowLogResponse,
    DescribeProductInfoResponse: DescribeProductInfoResponse,
    ModifyInstanceAccountRequest: ModifyInstanceAccountRequest,
    ModifyMaintenanceWindowRequest: ModifyMaintenanceWindowRequest,
    DescribeParamTemplateInfoRequest: DescribeParamTemplateInfoRequest,
    DescribeBackupUrlResponse: DescribeBackupUrlResponse,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    ModifyInstanceLogDeliveryRequest: ModifyInstanceLogDeliveryRequest,
    DescribeProductInfoRequest: DescribeProductInfoRequest,
    InquiryPriceCreateInstanceResponse: InquiryPriceCreateInstanceResponse,
    InstanceSecurityGroupDetail: InstanceSecurityGroupDetail,
    DescribeInstanceParamsResponse: DescribeInstanceParamsResponse,
    DescribeReplicationGroupInstanceResponse: DescribeReplicationGroupInstanceResponse,
    UpgradeProxyVersionResponse: UpgradeProxyVersionResponse,
    ResetPasswordRequest: ResetPasswordRequest,
    ModifyInstanceAccountResponse: ModifyInstanceAccountResponse,
    DelayDistribution: DelayDistribution,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    ModifyInstanceReadOnlyResponse: ModifyInstanceReadOnlyResponse,
    DescribeBackupDetailRequest: DescribeBackupDetailRequest,
    DescribeInstanceMonitorTookDistResponse: DescribeInstanceMonitorTookDistResponse,
    DescribeInstanceBackupsResponse: DescribeInstanceBackupsResponse,
    InstanceIntegerParam: InstanceIntegerParam,
    UpgradeVersionToMultiAvailabilityZonesRequest: UpgradeVersionToMultiAvailabilityZonesRequest,
    ModfiyInstancePasswordResponse: ModfiyInstancePasswordResponse,
    AllocateWanAddressResponse: AllocateWanAddressResponse,
    DescribeInstanceMonitorTookDistRequest: DescribeInstanceMonitorTookDistRequest,
    DeleteReplicationInstanceRequest: DeleteReplicationInstanceRequest,
    SwitchAccessNewInstanceRequest: SwitchAccessNewInstanceRequest,
    RemoveReplicationGroupResponse: RemoveReplicationGroupResponse,
    KillMasterGroupRequest: KillMasterGroupRequest,
    SwitchAccessNewInstanceResponse: SwitchAccessNewInstanceResponse,
    CloneInstancesResponse: CloneInstancesResponse,
    ParamTemplateInfo: ParamTemplateInfo,
    DescribeInstanceMonitorTopNCmdTookResponse: DescribeInstanceMonitorTopNCmdTookResponse,
    CloseSSLRequest: CloseSSLRequest,
    DescribeInstanceMonitorBigKeySizeDistRequest: DescribeInstanceMonitorBigKeySizeDistRequest,
    DescribeInstanceAccountRequest: DescribeInstanceAccountRequest,
    InstanceTextParam: InstanceTextParam,
    DescribeInstanceLogDeliveryResponse: DescribeInstanceLogDeliveryResponse,
    DescribeInstanceParamRecordsRequest: DescribeInstanceParamRecordsRequest,
    DescribeTaskListRequest: DescribeTaskListRequest,
    ChangeMasterInstanceResponse: ChangeMasterInstanceResponse,
    ModifyInstanceEventRequest: ModifyInstanceEventRequest,
    SecondLevelBackupMissingTimestamps: SecondLevelBackupMissingTimestamps,
    DescribeBackupDetailResponse: DescribeBackupDetailResponse,
    ChangeReplicaToMasterResponse: ChangeReplicaToMasterResponse,
    CreateInstancesResponse: CreateInstancesResponse,
    DescribeTaskInfoRequest: DescribeTaskInfoRequest,
    CloneInstancesRequest: CloneInstancesRequest,
    ApplyParamsTemplateResponse: ApplyParamsTemplateResponse,
    DescribeReplicationGroupRequest: DescribeReplicationGroupRequest,
    RedisNodes: RedisNodes,
    DescribeInstanceMonitorTopNCmdRequest: DescribeInstanceMonitorTopNCmdRequest,
    ModifyNetworkConfigRequest: ModifyNetworkConfigRequest,
    DescribeInstanceSecurityGroupRequest: DescribeInstanceSecurityGroupRequest,
    InstanceParamHistory: InstanceParamHistory,
    DescribeInstanceParamsRequest: DescribeInstanceParamsRequest,
    CleanUpInstanceResponse: CleanUpInstanceResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DescribeParamTemplatesResponse: DescribeParamTemplatesResponse,
    DescribeInstanceShardsRequest: DescribeInstanceShardsRequest,
    Outbound: Outbound,
    DescribeAutoBackupConfigResponse: DescribeAutoBackupConfigResponse,
    InquiryPriceUpgradeInstanceRequest: InquiryPriceUpgradeInstanceRequest,
    ModifyParamTemplateResponse: ModifyParamTemplateResponse,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    DescribeInstanceMonitorBigKeySizeDistResponse: DescribeInstanceMonitorBigKeySizeDistResponse,
    DescribeInstanceEventsResponse: DescribeInstanceEventsResponse,
    CreateInstanceAccountRequest: CreateInstanceAccountRequest,
    RemoveReplicationInstanceRequest: RemoveReplicationInstanceRequest,
    EnableReplicaReadonlyResponse: EnableReplicaReadonlyResponse,
    ModifyInstanceRequest: ModifyInstanceRequest,
    DescribeMaintenanceWindowResponse: DescribeMaintenanceWindowResponse,
    DescribeInstanceSecurityGroupResponse: DescribeInstanceSecurityGroupResponse,
    ReleaseWanAddressResponse: ReleaseWanAddressResponse,
    ProductConf: ProductConf,
    ModifyConnectionConfigRequest: ModifyConnectionConfigRequest,
    ManualBackupInstanceResponse: ManualBackupInstanceResponse,
    InstanceNode: InstanceNode,
    ModifyInstanceBackupModeResponse: ModifyInstanceBackupModeResponse,
    SwitchProxyResponse: SwitchProxyResponse,
    StartupInstanceResponse: StartupInstanceResponse,
    DescribeInstanceDTSInstanceInfo: DescribeInstanceDTSInstanceInfo,
    TradeDealDetail: TradeDealDetail,
    ResourceTag: ResourceTag,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    LogDeliveryInfo: LogDeliveryInfo,
    DescribeTaskInfoResponse: DescribeTaskInfoResponse,
    DescribeInstanceMonitorBigKeyTypeDistResponse: DescribeInstanceMonitorBigKeyTypeDistResponse,
    DeleteReplicationInstanceResponse: DeleteReplicationInstanceResponse,
    CleanUpInstanceRequest: CleanUpInstanceRequest,
    DescribeInstanceDealDetailResponse: DescribeInstanceDealDetailResponse,
    ModifyReplicationGroupRequest: ModifyReplicationGroupRequest,
    Groups: Groups,
    DescribeInstancesRequest: DescribeInstancesRequest,
    SourceCommand: SourceCommand,
    ModfiyInstancePasswordRequest: ModfiyInstancePasswordRequest,
    DescribeSlowLogRequest: DescribeSlowLogRequest,
    ModifyInstancePasswordRequest: ModifyInstancePasswordRequest,
    ModifyReplicationGroupResponse: ModifyReplicationGroupResponse,
    DeleteParamTemplateRequest: DeleteParamTemplateRequest,
    DescribeAutoBackupConfigRequest: DescribeAutoBackupConfigRequest,
    DescribeInstanceMonitorSIPResponse: DescribeInstanceMonitorSIPResponse,
    DestroyPostpaidInstanceRequest: DestroyPostpaidInstanceRequest,
    ChangeInstanceRoleRequest: ChangeInstanceRoleRequest,
    DescribeInstanceSupportFeatureRequest: DescribeInstanceSupportFeatureRequest,
    DeleteInstanceAccountRequest: DeleteInstanceAccountRequest,
    DescribeInstanceMonitorHotKeyRequest: DescribeInstanceMonitorHotKeyRequest,
    DescribeBackupDownloadRestrictionResponse: DescribeBackupDownloadRestrictionResponse,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    ResourceBundle: ResourceBundle,
    ManualBackupInstanceRequest: ManualBackupInstanceRequest,
    DescribeReplicationGroupResponse: DescribeReplicationGroupResponse,
    ModifyParamTemplateRequest: ModifyParamTemplateRequest,
    AvailableRegion: AvailableRegion,
    InstanceSet: InstanceSet,
    ReleaseWanAddressRequest: ReleaseWanAddressRequest,
    CloseSSLResponse: CloseSSLResponse,
    ModifyMaintenanceWindowResponse: ModifyMaintenanceWindowResponse,
    CreateReplicationGroupResponse: CreateReplicationGroupResponse,
    DescribeInstanceMonitorBigKeyTypeDistRequest: DescribeInstanceMonitorBigKeyTypeDistRequest,
    DescribeInstanceMonitorTopNCmdTookRequest: DescribeInstanceMonitorTopNCmdTookRequest,
    DestroyPrepaidInstanceResponse: DestroyPrepaidInstanceResponse,
    ReplicaGroup: ReplicaGroup,
    DescribeRedisClusterOverviewRequest: DescribeRedisClusterOverviewRequest,
    DescribeCommonDBInstancesResponse: DescribeCommonDBInstancesResponse,
    InquiryPriceCreateInstanceRequest: InquiryPriceCreateInstanceRequest,
    DescribeRedisClustersRequest: DescribeRedisClustersRequest,
    UpgradeSmallVersionResponse: UpgradeSmallVersionResponse,
    ModifyInstanceParamsRequest: ModifyInstanceParamsRequest,
    DescribeSSLStatusRequest: DescribeSSLStatusRequest,
    OpenSSLRequest: OpenSSLRequest,
    BackupDownloadInfo: BackupDownloadInfo,
    BigKeyTypeInfo: BigKeyTypeInfo,
    DescribeInstanceNodeInfoRequest: DescribeInstanceNodeInfoRequest,
    DescribeMaintenanceWindowRequest: DescribeMaintenanceWindowRequest,
    DescribeInstanceSupportFeatureResponse: DescribeInstanceSupportFeatureResponse,
    DescribeInstanceLogDeliveryRequest: DescribeInstanceLogDeliveryRequest,
    AddReplicationInstanceRequest: AddReplicationInstanceRequest,
    InstanceClusterNode: InstanceClusterNode,
    DescribeSSLStatusResponse: DescribeSSLStatusResponse,
    DescribeTendisSlowLogRequest: DescribeTendisSlowLogRequest,
    DescribeProxySlowLogRequest: DescribeProxySlowLogRequest,
    DescribeRedisClustersResponse: DescribeRedisClustersResponse,
    ModifyInstanceBackupModeRequest: ModifyInstanceBackupModeRequest,
    DescribeProxySlowLogResponse: DescribeProxySlowLogResponse,
    ModifyInstanceReadOnlyRequest: ModifyInstanceReadOnlyRequest,
    DescribeInstanceAccountResponse: DescribeInstanceAccountResponse,
    DescribeInstanceMonitorBigKeyRequest: DescribeInstanceMonitorBigKeyRequest,
    DescribeBackupDownloadRestrictionRequest: DescribeBackupDownloadRestrictionRequest,
    TendisNodes: TendisNodes,
    DescribeParamTemplateInfoResponse: DescribeParamTemplateInfoResponse,
    SwitchProxyRequest: SwitchProxyRequest,
    DescribeInstanceSpecBandwidthRequest: DescribeInstanceSpecBandwidthRequest,
    SwitchInstanceVipResponse: SwitchInstanceVipResponse,
    BackupLimitVpcItem: BackupLimitVpcItem,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    StartupInstanceRequest: StartupInstanceRequest,
    HotKeyInfo: HotKeyInfo,
    InstanceEnumParam: InstanceEnumParam,
    CreateInstanceAccountResponse: CreateInstanceAccountResponse,
    DescribeInstanceBackupsRequest: DescribeInstanceBackupsRequest,
    RemoveReplicationInstanceResponse: RemoveReplicationInstanceResponse,
    DescribeSecondLevelBackupInfoRequest: DescribeSecondLevelBackupInfoRequest,
    SecurityGroupDetail: SecurityGroupDetail,
    InquiryPriceUpgradeInstanceResponse: InquiryPriceUpgradeInstanceResponse,
    DeleteInstanceAccountResponse: DeleteInstanceAccountResponse,
    DescribeInstanceMonitorSIPRequest: DescribeInstanceMonitorSIPRequest,
    InstanceClusterShard: InstanceClusterShard,
    OpenSSLResponse: OpenSSLResponse,
    TendisSlowLogDetail: TendisSlowLogDetail,
    ChangeInstanceRoleResponse: ChangeInstanceRoleResponse,
    DescribeGlobalReplicationAreaResponse: DescribeGlobalReplicationAreaResponse,
    ZoneCapacityConf: ZoneCapacityConf,
    ModifyInstanceEventResponse: ModifyInstanceEventResponse,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    DescribeInstanceNodeInfoResponse: DescribeInstanceNodeInfoResponse,
    DescribeProjectSecurityGroupResponse: DescribeProjectSecurityGroupResponse,
    Instances: Instances,
    DescribeInstanceMonitorHotKeyResponse: DescribeInstanceMonitorHotKeyResponse,
    InstanceParam: InstanceParam,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    ClearInstanceResponse: ClearInstanceResponse,
    InstanceSlowlogDetail: InstanceSlowlogDetail,

}
