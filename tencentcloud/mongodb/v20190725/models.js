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
 * DescribeSpecInfo request structure.
 * @class
 */
class DescribeSpecInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ to be queried. For currently supported AZs, see [Regions and AZs](https://www.tencentcloud.comom/document/product/240/3637?from_cn_redirect=1).
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
         *  - Specifies the number of primary and secondary nodes for each replica set during replica set instance creation. Call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API to obtain the maximum and minimum number of nodes supported for each replica set.
 - Specifies the number of primary and secondary nodes for each shard during sharded cluster instance creation. Call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API to obtain the maximum and minimum number of nodes supported for each shard.
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Instance memory size. Unit: GB. Call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API to obtain specific saleable memory specifications.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size. Unit: GB. Call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API to obtain the maximum and minimum disk sizes corresponding to each CPU specification.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Refers to version information. The [DescribeSpecInfo](https://www.tencentcloud.comom/document/product/240/38567?from_cn_redirect=1) API can be called to obtain detailed information about the supported versions.
- MONGO_40_WT: version of the MongoDB 4.0 WiredTiger storage engine.
- MONGO_42_WT: version of the MongoDB 4.2 WiredTiger storage engine.
- MONGO_44_WT: version of the MongoDB 4.4 WiredTiger storage engine.
- MONGO_50_WT: version of the MongoDB 5.0 WiredTiger storage engine.
- MONGO_60_WT: version of the MongoDB 6.0 WiredTiger storage engine.
- MONGO_70_WT: version of the MongoDB 7.0 WiredTiger storage engine.
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * Number of instances. The minimum value is 1, and the maximum value is 30.
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * AZ information. Format: ap-guangzhou-2.
 - Call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API to obtain the specific information.
 - This parameter indicates the primary AZ. If multi-AZ deployment is adopted, the value of Zone should be one of the values of AvailabilityZoneList.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Specifies the purchase duration during the instance purchase, in months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, and 36.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Product specification type.
 - HIO10G: general high-I/O 10GE type.
 - HCD: cloud disk type.
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * Instance architecture type.
 - REPLSET: replica set.
 - SHARD: sharded cluster.
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         *  - Specifies the number of replica sets during replica set instance creation. This parameter can only be set to 1.
 - Specifies the number of shards during sharded cluster instance creation. Call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API to query the range of shard quantity. The parameters MinReplicateSetNum and MaxReplicateSetNum in the returned data structure SpecItems correspond to the minimum value and maximum value, respectively.
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * Project ID.  - The default project is used if this parameter is not specified.
 - The project ID can be obtained on the [project management page in the TencentDB for MongoDB console](https://console.cloud.tencent.com/project).
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * VPC ID.
- Only VPC configuration is supported, and a VPC in the same region as the instance should be selected. Log in to the [VPC console](https://console.cloud.tencent.com/vpc) to obtain the available VPC ID.
- After successful instance creation, VPCs can be changed. For detailed operations, see [Changing the Network](https://www.tencentcloud.comom/document/product/239/30910?from_cn_redirect=1).
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID of the VPC.
- A subnet should be specified within the selected VPC. Log in to the [VPC console](https://console.cloud.tencent.com/vpc) to obtain the available subnet ID.
- After successful instance creation, VPCs and subnets can be changed. For detailed operations, see [Changing the Network](https://www.tencentcloud.comom/document/product/239/30910?from_cn_redirect=1).
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance password. The requirements are as follows:
 - The number of characters should be in the range of [8, 32].
 - Characters within the ranges [A,Z], [a,z], and [0,9] are allowed.
 - Special characters that can be entered include exclamation marks (!), at signs (@), number signs (#), percent signs (%), carets (^), asterisks (\*), brackets (()), and underscores (_).
 - It cannot contain only the same letters or digits.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Instance tag information.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Automatic renewal flag.
 - 0: no automatic renewal.
 - 1: automatic renewal.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Whether to automatically select a voucher.
 - 1: yes.
 - 0: no. Default value: 0.
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Instance type.
- 1: formal instance.
- 3: read-only instance.
- 4: disaster recovery instance.
- 5: cloned instance. Note: For a cloned instance, RestoreTime is required.
         * @type {number || null}
         */
        this.Clone = null;

        /**
         * Parent instance ID.
- This parameter is required when the value of the **Clone** parameter is set to 3 or 4, indicating a read-only or disaster recovery instance.
- Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the parent instance ID from the instance list.
         * @type {string || null}
         */
        this.Father = null;

        /**
         * Security group ID. Log in to the [security group console](https://console.cloud.tencent.com/vpc/security-group) to obtain the ID of the security group in the same region as the database instance.
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * Rollback time of the cloned instance. It is required when the Clone value is 5 or 6. - This parameter is required for cloned instances. Format: 2021-08-13 16:30:00. - Rollback time range: Only data within the last 7 days can be rolled back.
         * @type {string || null}
         */
        this.RestoreTime = null;

        /**
         * Instance name. Only Chinese characters, letters, digits, underscores (_), and delimiters (-) are supported, with a length of 128 characters. When database instances are purchased in batches, the automatic ascending feature is supported through the custom naming pattern string and numeric suffix to set instance names efficiently.
- Basic mode: prefix + automatic ascending number (starting from 1 by default). Only a custom instance name prefix is required for **lnstanceName**. For example, it can be set to cmgo. If the purchase quantity is set to 5, after purchase, the instances will be sequentially named cmgo1, cmgo2, cmgo3, cmgo4, and cmgo5, respectively.
- Custom starting number mode: prefix + {R:x} (x is the custom starting number). Prefix{R:x} is required for **InstanceName**. For example, cmgo{R:3}. If the purchase quantity is set to 5, the instance names will be sequentially named cmgo3, cmgo4, cmgo5, cmgo6, and cmgo7.
- Composite pattern string: prefix 1{R:x} + prefix 2{R:y}+ ⋯ + fixed suffix, where x and y are the starting numbers of each prefix. A composite pattern string is required for **instanceName**. For example, cmgo{R:10}\_node{R:12}\_db. If the batch purchase quantity is set to 5, the instances will be sequentially named cmgo10\_node12\_db, cmgo11\_node13\_db, cmgo12\_node14\_db, cmgo13\_node15\_db, and cmgo14\_node16\_db.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Specifies the list of AZs during multi-AZ deployment of TencentDB for MongoDB instances.
 - For instances in multi-AZ deployment mode, the **Zone** parameter specifies the primary AZ, and **AvailabilityZoneList** specifies all AZs, including the primary AZ. Format: [ap-guangzhou-2,ap-guangzhou-3,ap-guangzhou-4].
 - The [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API can be called to obtain AZs planned for TencentDB for MongoDB instances in different regions, helping you specify valid AZs.
 - Nodes in multi-AZ deployment mode can only be deployed in 3 different AZs. Deploying most nodes of a cluster in the same AZ is not supported. For example, a 3-node cluster does not support deploying 2 nodes in the same AZ.
         * @type {Array.<string> || null}
         */
        this.AvailabilityZoneList = null;

        /**
         * Number of Mongos node CPU cores. Valid values: 1, 2, 4, 8, and 16. This parameter is required during sharded cluster instance purchase.
         * @type {number || null}
         */
        this.MongosCpu = null;

        /**
         * Mongos node memory size.
 - This parameter is required during sharded cluster instance purchase.
 - Unit: GB. 1-core 2GB, 2-core 4GB, 4-core 8GB, 8-core 16GB, and 16-core 32GB are supported.
         * @type {number || null}
         */
        this.MongosMemory = null;

        /**
         * Number of Mongos nodes. This parameter is required during sharded cluster instance purchase.
 - For instances in single-AZ deployment mode, the value range is [3,32].
 - For instances in multi-AZ deployment mode, the value range is [6,32].
         * @type {number || null}
         */
        this.MongosNodeNum = null;

        /**
         * Number of read-only nodes. Value ranges: [0,5].
         * @type {number || null}
         */
        this.ReadonlyNodeNum = null;

        /**
         * Array of AZs of read-only nodes. This parameter is required for instances in multi-AZ deployment mode when **ReadonlyNodeNum** is not set to **0**.
         * @type {Array.<string> || null}
         */
        this.ReadonlyNodeAvailabilityZoneList = null;

        /**
         * AZ of the hidden node. This parameter is required for instances in multi-AZ deployment mode.
         * @type {string || null}
         */
        this.HiddenZone = null;

        /**
         * Parameter template ID.
- A parameter template is a collection of predefined parameter values that can be used to quickly configure new MongoDB instances. Proper use of parameter templates can significantly enhance the deployment efficiency and operational performance of the database.
- The [DescribeDBInstanceParamTpl](https://www.tencentcloud.comom/document/product/240/109155?from_cn_redirect=1) API can be called to obtain the parameter template ID. Select the parameter template ID corresponding to the instance version and architecture.
         * @type {string || null}
         */
        this.ParamTemplateId = null;

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
        this.RestoreTime = 'RestoreTime' in params ? params.RestoreTime : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AvailabilityZoneList = 'AvailabilityZoneList' in params ? params.AvailabilityZoneList : null;
        this.MongosCpu = 'MongosCpu' in params ? params.MongosCpu : null;
        this.MongosMemory = 'MongosMemory' in params ? params.MongosMemory : null;
        this.MongosNodeNum = 'MongosNodeNum' in params ? params.MongosNodeNum : null;
        this.ReadonlyNodeNum = 'ReadonlyNodeNum' in params ? params.ReadonlyNodeNum : null;
        this.ReadonlyNodeAvailabilityZoneList = 'ReadonlyNodeAvailabilityZoneList' in params ? params.ReadonlyNodeAvailabilityZoneList : null;
        this.HiddenZone = 'HiddenZone' in params ? params.HiddenZone : null;
        this.ParamTemplateId = 'ParamTemplateId' in params ? params.ParamTemplateId : null;

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
         * Request ID.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
         * Unit price of the instance, in USD.
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * Original price of the instance, in USD.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discount price of the instance, in USD.
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
 * DeleteLogDownloadTask response structure.
 * @class
 */
class DeleteLogDownloadTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. 0: successful.
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceNamespace response structure.
 * @class
 */
class DescribeDBInstanceNamespaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of databases of the queried instance. If no database is specified for querying with DbName, a list of databases of only the queried instance is returned instead of the information indicated by Collections.
         * @type {Array.<string> || null}
         */
        this.Databases = null;

        /**
         * Queried collection information. If DbName is specified, a list of collections of only this database is returned.
         * @type {Array.<string> || null}
         */
        this.Collections = null;

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
        this.Databases = 'Databases' in params ? params.Databases : null;
        this.Collections = 'Collections' in params ? params.Collections : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Slow log start time.
- Format: yyyy-mm-dd hh:mm:ss. For example, 2019-06-01 10:00:00.
- The query start and end time interval cannot exceed 24 hours. Only slow logs within the last 7 days can be queried.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Slow log end time.
- Format: yyyy-mm-dd hh:mm:ss. For example, 2019-06-02 12:00:00.- The query start and end time interval cannot exceed 24 hours. Only slow logs within the last 7 days can be queried.
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
         * Return format of slow log. The original slow log format is returned by default, and the format can be set to JSON on versions 4.4 and later.
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
 * FlushInstanceRouterConfig response structure.
 * @class
 */
class FlushInstanceRouterConfigResponse extends  AbstractModel {
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
 * SetDBInstanceDeletionProtection request structure.
 * @class
 */
class SetDBInstanceDeletionProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list, in the format of cmgo-p8vnipr5. It is the same as the format of the instance ID displayed on the TencentDB for MongoDB console page.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Instance termination protection switch. Valid values: 0 - disabled; 1 - enabled.
         * @type {number || null}
         */
        this.EnableDeletionProtection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.EnableDeletionProtection = 'EnableDeletionProtection' in params ? params.EnableDeletionProtection : null;

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
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
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
 * DescribeInstanceSSL request structure.
 * @class
 */
class DescribeInstanceSSLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, in the format of cmgo-p8vnipr5. It is the same as the format of the instance ID displayed on the TencentDB for MongoDB console page.
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
 * Slow log statistics of MongoDB database
 * @class
 */
class SlowLogPattern extends  AbstractModel {
    constructor(){
        super();

        /**
         * Slow log output format: database name.table name.command.
         * @type {string || null}
         */
        this.Pattern = null;

        /**
         * queryHash value carried during slow log recording. It can be used to identify a query type.
         * @type {string || null}
         */
        this.QueryHash = null;

        /**
         * Maximum execution time, in milliseconds.
         * @type {number || null}
         */
        this.MaxTime = null;

        /**
         * Average execution time, in milliseconds.
         * @type {number || null}
         */
        this.AverageTime = null;

        /**
         * Number of slow logs.
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
        this.QueryHash = 'QueryHash' in params ? params.QueryHash : null;
        this.MaxTime = 'MaxTime' in params ? params.MaxTime : null;
        this.AverageTime = 'AverageTime' in params ? params.AverageTime : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * Log download task description.
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * Download task type. 0: slow log; 1: error log.
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Creation time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * File size.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Task status. 0: initialized; 1: running; 2: successful; 3: failed.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Percentage.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * Download URL.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.Url = 'Url' in params ? params.Url : null;

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
         * Lists async task ids returned.
         * @type {Array.<number> || null}
         */
        this.FlowIds = null;

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
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Order status.
- 1: unpaid.
- 2: paid.
- 3: delivering.
- 4: delivered successfully.
- 5: delivery failed.
- 6: refund.
- 7: order closed.
- 8: closed due to unpaid timeout.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Original price of the order, in USD.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discount price of the order, in USD.
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * Order operation behavior.
- purchase: newly purchased.
- renew: renewed.
- upgrade: configuration upgraded.
- downgrade: configuration downgraded.
- refund: return and refund.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Instance ID of the current order.
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
        this.Status = 'Status' in params ? params.Status : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The collection of modifiable string parameters of an instance which are used to represent time ranges.
 * @class
 */
class InstanceMultiParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current parameter value.
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Default parameter value.
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Reference value range.
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * Whether a restart is required for the parameters to take effect after modification.
 - 1: Restart is required for the parameters to take effect.
 - 0: Restart is not required. Once set, the parameters take effect immediately.
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Whether the parameter values are used during running.
 - 1. parameter values used during running.
 - 0: parameter values not used during running.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Parameter description.
         * @type {Array.<string> || null}
         */
        this.Tips = null;

        /**
         * Describes the type of the current values. Default value: multi.
         * @type {string || null}
         */
        this.ValueType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;

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
         * All entries that meet the query conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Download task list.
         * @type {Array.<BackupDownloadTask> || null}
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
                let obj = new BackupDownloadTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Node details of the instance to be modified.
 * @class
 */
class AddNodeList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Roles of nodes to be added.
 - SECONDARY: Mongod node.
 - READONLY: read-only node.
 - MONGOS: Mongos node.
         * @type {string || null}
         */
        this.Role = null;

        /**
         * AZ corresponding to the node. For the currently supported AZs, see [Regions and AZs](https://www.tencentcloud.comom/document/product/240/3637?from_cn_redirect=1).
- Single AZ: All nodes are in the same AZ.
- Multiple AZs: The current standard specification involves three AZs. The primary and secondary nodes are not in the same AZ. Note: AZs corresponding to the nodes to be added should be specified. After addition, the number of nodes in any 2 AZs should be greater than that in the third AZ.
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
        this.Role = 'Role' in params ? params.Role : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

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
 * UpgradeDbInstanceVersion request structure.
 * @class
 */
class UpgradeDbInstanceVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance IDs, which are in the format of cmgo-p8vnipr5. It is the same as the format of the instance ID displayed on the TencentDB for MongoDB console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Newly upgraded database version. Currently, it only supports MONGO_40_WT (version of the MongoDB 4.0 WiredTiger storage engine) and MONGO_42_WT (version of the MongoDB 4.2 WiredTiger storage engine).
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * Whether to perform the upgrade during the maintenance period. 0 - upgrade now; 1 - upgrade during the maintenance period.
         * @type {number || null}
         */
        this.InMaintenance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.InMaintenance = 'InMaintenance' in params ? params.InMaintenance : null;

    }
}

/**
 * ModifyDBInstanceNetworkAddress request structure.
 * @class
 */
class ModifyDBInstanceNetworkAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the ID of the instance for modifying the network. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/MongoDB) and copy the instance ID from the instance list.

         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Retention period of the original IP address.
 - Unit: minutes. 0 means that the IP address is immediately repossessed.
 - The original IP address will be released after a scheduled period. Both the original and new IP addresses are accessible before release.

         * @type {number || null}
         */
        this.OldIpExpiredTime = null;

        /**
         * VPC ID after the switch. If the instance is using a basic network, this field is not required. The [DescribeDBInstances](https://www.tencentcloud.comom/document/product/240/38568?from_cn_redirect=1) API can be called to obtain the VPC ID.
         * @type {string || null}
         */
        this.NewUniqVpcId = null;

        /**
         * VPC subnet ID after the switch. If the instance is using a basic network, this field is not required. The [DescribeDBInstances](https://www.tencentcloud.comom/document/product/240/38568?from_cn_redirect=1) API can be called to obtain the subnet ID of the VPC.
         * @type {string || null}
         */
        this.NewUniqSubnetId = null;

        /**
         * IP address information, including the new IP address and the original IP address.
         * @type {Array.<ModifyNetworkAddress> || null}
         */
        this.NetworkAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OldIpExpiredTime = 'OldIpExpiredTime' in params ? params.OldIpExpiredTime : null;
        this.NewUniqVpcId = 'NewUniqVpcId' in params ? params.NewUniqVpcId : null;
        this.NewUniqSubnetId = 'NewUniqSubnetId' in params ? params.NewUniqSubnetId : null;

        if (params.NetworkAddresses) {
            this.NetworkAddresses = new Array();
            for (let z in params.NetworkAddresses) {
                let obj = new ModifyNetworkAddress();
                obj.deserialize(params.NetworkAddresses[z]);
                this.NetworkAddresses.push(obj);
            }
        }

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
         * List of IDs of the created instances
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
 * InstanceEnableSSL request structure.
 * @class
 */
class InstanceEnableSSLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Configures whether to enable SSL for access.
- true: enabled.
- false: disabled.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * DescribeDBInstanceNamespace request structure.
 * @class
 */
class DescribeDBInstanceNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID for querying the database. Batch querying is supported. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/MongoDB) and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Specifies the database name for querying. If this parameter is left blank, a list of all databases of the current instance is returned.
         * @type {string || null}
         */
        this.DbName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;

    }
}

/**
 * DescribeDBInstanceNodeProperty request structure.
 * @class
 */
class DescribeDBInstanceNodePropertyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Node ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), go to Node Management, and copy the node ID.
         * @type {Array.<string> || null}
         */
        this.NodeIds = null;

        /**
         * Node role. Valid values:
- PRIMARY: primary node.
- SECONDARY: secondary node.
- READONLY: read-only node.
- ARBITER: arbitration node.
         * @type {Array.<string> || null}
         */
        this.Roles = null;

        /**
         * Whether the node is a hidden node. Default value: false.
         * @type {boolean || null}
         */
        this.OnlyHidden = null;

        /**
         * Priority of the node for electing it as the new primary node. Value range: [0, 100]. A larger value indicates a higher priority.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Node voting right.- 1: The node has the right to vote.
- 0: The node does not have the right to vote.
         * @type {number || null}
         */
        this.Votes = null;

        /**
         * Node tag.
         * @type {Array.<NodeTag> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NodeIds = 'NodeIds' in params ? params.NodeIds : null;
        this.Roles = 'Roles' in params ? params.Roles : null;
        this.OnlyHidden = 'OnlyHidden' in params ? params.OnlyHidden : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Votes = 'Votes' in params ? params.Votes : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new NodeTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Log details.
 * @class
 */
class LogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log category.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogComponent = null;

        /**
         * Log level.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogLevel = null;

        /**
         * Log generation time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogTime = null;

        /**
         * Log details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogDetail = null;

        /**
         * Log connection information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogConnection = null;

        /**
         * Log ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogComponent = 'LogComponent' in params ? params.LogComponent : null;
        this.LogLevel = 'LogLevel' in params ? params.LogLevel : null;
        this.LogTime = 'LogTime' in params ? params.LogTime : null;
        this.LogDetail = 'LogDetail' in params ? params.LogDetail : null;
        this.LogConnection = 'LogConnection' in params ? params.LogConnection : null;
        this.LogId = 'LogId' in params ? params.LogId : null;

    }
}

/**
 * TencentDB for MongoDB instance sales specification.
 * @class
 */
class SpecItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specification information identifier. Format: mongo.HIO10G.128G. It consists of three parts: node type, specification type, and memory specification.
- Node type: **mongo** indicates a Mongod node; **mongos** indicates a Mongos node; **cfgstr** indicates a ConfigServer node.
- Specification type: **HIO10G** indicates the general HIO 10GE type; **HCD** indicates the Cloud Disk Edition type.
- Memory specification, in GB. Valid values: 4, 8, 16, 32, 64, 128, 240, and 512. 128g indicates 128 GB.
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * Saleable specification status flag. Valid values are as follows:
 - 0: selling stopped.
 - 1: available for sale.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Computing resource specification, indicating the number of CPU cores.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory specification. Unit: MB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Default disk specification. Unit: MB.
         * @type {number || null}
         */
        this.DefaultStorage = null;

        /**
         * Maximum disk specification. Unit: MB.
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * Minimum disk specification. Unit: MB.
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * Maximum number of requests per second. Unit: requests/second.
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * Maximum number of connections supported for the specification.
         * @type {number || null}
         */
        this.Conns = null;

        /**
         * Storage engine version information on instances.
- MONGO_40_WT: version of the MongoDB 4.0 WiredTiger storage engine.
- MONGO_42_WT: version of the MongoDB 4.2 WiredTiger storage engine.
- MONGO_44_WT: version of the MongoDB 4.4 WiredTiger storage engine.
- MONGO_50_WT: version of the MongoDB 5.0 WiredTiger storage engine.
- MONGO_60_WT: version of the MongoDB 6.0 WiredTiger storage engine.
- MONGO_70_WT: version of the MongoDB 7.0 WiredTiger storage engine.
         * @type {string || null}
         */
        this.MongoVersionCode = null;

        /**
         * Digital version corresponding to the instance version.
         * @type {number || null}
         */
        this.MongoVersionValue = null;

        /**
         * Instance version information. Valid values: 4.2, 4.4, 5.0, 6.0, and 7.0.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Storage engine.
         * @type {string || null}
         */
        this.EngineName = null;

        /**
         * Cluster type. Valid values are as follows:
 - 1: sharded cluster.
 - 0: replica set cluster.
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * Minimum number of nodes for each replica set.
         * @type {number || null}
         */
        this.MinNodeNum = null;

        /**
         * Maximum number of nodes for each replica set.
         * @type {number || null}
         */
        this.MaxNodeNum = null;

        /**
         * Minimum number of shards.
         * @type {number || null}
         */
        this.MinReplicateSetNum = null;

        /**
         * Maximum number of shards.
         * @type {number || null}
         */
        this.MaxReplicateSetNum = null;

        /**
         * Minimum number of nodes for each shard.
         * @type {number || null}
         */
        this.MinReplicateSetNodeNum = null;

        /**
         * Maximum number of nodes for each shard.
         * @type {number || null}
         */
        this.MaxReplicateSetNodeNum = null;

        /**
         * Cluster specification type. Valid values are as follows:
 - HIO10G: general high-I/O 10GE type.
 - HCD: cloud disk type.
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
 * DescribeDetailedSlowLogs request structure.
 * @class
 */
class DescribeDetailedSlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Specifies the start time for querying slow logs. - Format: yyyy-mm-dd hh:mm:ss. For example, 2019-06-01 10:00:00. - The query start and end time interval cannot exceed 24 hours. Only slow logs within the last 7 days can be queried.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Specifies the end time for querying slow logs.
- Format: yyyy-mm-dd hh:mm:ss. For example, 2019-06-02 12:00:00.
- The query start and end time interval cannot exceed 24 hours. Only slow logs within the last 7 days can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies the threshold for querying slow logs, in milliseconds. It indicates that the execution time of the slow log query exceeds this value. The default value is 100.
         * @type {number || null}
         */
        this.ExecTime = null;

        /**
         * Specifies the command type for querying slow logs.
         * @type {Array.<string> || null}
         */
        this.Commands = null;

        /**
         * Full-text search keyword. The logical operator among multiple keywords is OR.
         * @type {Array.<string> || null}
         */
        this.Texts = null;

        /**
         * Specifies the node name for querying slow logs. The [DescribeDBInstanceNodeProperty](https://www.tencentcloud.comom/document/product/240/82022?from_cn_redirect=1) API can be called to query the node name.
         * @type {Array.<string> || null}
         */
        this.NodeNames = null;

        /**
         * Specifies the queryHash value to be queried.
         * @type {Array.<string> || null}
         */
        this.QueryHash = null;

        /**
         * Pagination offset. The default value is 0, and the value range is [0, 100].

         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. The default value is 20, and the value range is [0, 10000].
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Specifies the sorting condition for slow logs.
- StartTime: sort by the generation time of slow logs.
- ExecTime: sort by the execution time of slow logs.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Specifies the sorting method.
- desc: descending order.
- asc: ascending order.
         * @type {string || null}
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ExecTime = 'ExecTime' in params ? params.ExecTime : null;
        this.Commands = 'Commands' in params ? params.Commands : null;
        this.Texts = 'Texts' in params ? params.Texts : null;
        this.NodeNames = 'NodeNames' in params ? params.NodeNames : null;
        this.QueryHash = 'QueryHash' in params ? params.QueryHash : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * ModifyDBInstanceNetworkAddress response structure.
 * @class
 */
class ModifyDBInstanceNetworkAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the asynchronous process task for modifying the network information.
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
 * Result of creating a backup download task.
 * @class
 */
class BackupDownloadTaskStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shard name.
         * @type {string || null}
         */
        this.ReplicaSetId = null;

        /**
         * Current status of the task.
- 0: wait for execution.
- 1: downloading.
- 2: download completed.
- 3: download failed.
- 4: wait for retry.
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
 * DescribeSlowLogs response structure.
 * @class
 */
class DescribeSlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of slow logs.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Slow log details.
         * @type {Array.<string> || null}
         */
        this.SlowLogs = null;

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
        this.Count = 'Count' in params ? params.Count : null;
        this.SlowLogs = 'SlowLogs' in params ? params.SlowLogs : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Instance ID. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance memory size after configuration changes, in GB. The [DescribeSpecInfo](https://www.tencentcloud.comom/document/product/240/38567?from_cn_redirect=1) API can be called to obtain the specific sales specifications for memory.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size after configuration changes, in GB. The [DescribeSpecInfo](https://www.tencentcloud.comom/document/product/240/38567?from_cn_redirect=1) API can be called to obtain the maximum and minimum disk sizes corresponding to each CPU specification.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Number of instance nodes. The [DescribeSpecInfo](https://www.tencentcloud.comom/document/product/240/38567?from_cn_redirect=1) API can be called to obtain the number of instance nodes.
- Replica set instance, which refers to the number of primary and secondary nodes for the instance after configuration changes.
- Sharded cluster instance, which refers to the number of primary and secondary nodes per shard for the instance after configuration changes.
**Note**: Do not initiate tasks of adjusting the number of nodes and shards and the node specifications simultaneously.
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Sharded cluster instance, which refers to the number of shards for the instance after configuration changes. Value range: [2, 36].
**Note**: The number of shards after changes cannot be less than the current number. Do not initiate tasks of adjusting the number of nodes and shards and the node specifications simultaneously.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;

    }
}

/**
 * Backup information.
 * @class
 */
class BackupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup method.
- 0: automatic backup.
- 1: manual backup.
         * @type {number || null}
         */
        this.BackupType = null;

        /**
         * Backup file name.
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * Backup task remarks.
         * @type {string || null}
         */
        this.BackupDesc = null;

        /**
         * Backup file size, in KB.
         * @type {number || null}
         */
        this.BackupSize = null;

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
         * Backup status.
- 1: backing up.
- 2: backup successful.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Backup method.
- 0: logical backup.
- 1: physical backup.
- 3: snapshot backup.
**Note:**
- The General Edition instance supports logical and physical backup. The Cloud Disk Edition instance supports physical and snapshot backup, but does not support logical backup currently.
- Physical backup is not supported when storage encryption is enabled for the instance.
         * @type {number || null}
         */
        this.BackupMethod = null;

        /**
         * Backup record ID.
         * @type {number || null}
         */
        this.BackId = null;

        /**
         * Backup deletion time.
         * @type {string || null}
         */
        this.DeleteTime = null;

        /**
         * Cross-region backup region.
         * @type {string || null}
         */
        this.BackupRegion = null;

        /**
         * Rollback time supported by the backup.
         * @type {string || null}
         */
        this.RestoreTime = null;

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
        this.BackId = 'BackId' in params ? params.BackId : null;
        this.DeleteTime = 'DeleteTime' in params ? params.DeleteTime : null;
        this.BackupRegion = 'BackupRegion' in params ? params.BackupRegion : null;
        this.RestoreTime = 'RestoreTime' in params ? params.RestoreTime : null;

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
         * Instance ID list. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Specifies the instance type for querying. Valid values:
- 0: all instances.
- 1: formal instance.
- 2: temporary instance.
- 3: read-only instance.
- -1: the query range includes the formal, read-only, and disaster recovery instances simultaneously.
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Specifies the cluster type of the instance to be queried. Valid values:
- 0: replica set instance.
- 1: sharded cluster instance.
- -1: replica set and sharded cluster instance.
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * Specifies the current status of the instance to be queried. Valid values:
- 0: to be initialized.
- 1: processing, such as specification changes and parameter modifications.
- 2: running normally.
- -2: isolated (yearly/monthly subscription).
- -3: isolated (pay-as-you-go).
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * VPC ID.
 - You do not need to specify this parameter for basic networks.
 - Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/MongoDB), click a VPC name in the instance list, and obtain the ID on the **VPC** page.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID.
 - You do not need to specify this parameter for basic networks.
 - Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/MongoDB), click a VPC name in the instance list, and obtain the subnet ID on the **VPC** page.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Billing type. Valid value: 0 (pay-as-you-go)
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Number of entries returned per request. The default value is 20, and the value range is (1, 100].
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Configures the field for sorting returned results. Currently, "ProjectId", "InstanceName", and "CreateTime" are supported for sorting.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Configures the method for sorting returned results.
 - ASC: ascending order.
 - DESC: descending order.
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Project ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/MongoDB) and select Project Management in the account information drop-down menu at the top right corner to query projects.
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * Specifies the keyword for search. Specific instance IDs, instance names, or private IP addresses are supported.
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Tag information, including the tag key and tag value.
         * @type {Array.<TagInfo> || null}
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
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * InstanceEnableSSL response structure.
 * @class
 */
class InstanceEnableSSLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSL enabling status.
- 0: disabled.
- 1: enabled.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Certificate file expiration time, in the format of 2023-05-01 12:00:00.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * Download URL of the certificate file.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertUrl = null;

        /**
         * Process ID.
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
        this.Status = 'Status' in params ? params.Status : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.CertUrl = 'CertUrl' in params ? params.CertUrl : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Memory size after instance configuration changes, in GB. If this parameter is left blank, the default value is the current memory size of the instance. For the currently supported memory specifications, see [Product Specifications](https://www.tencentcloud.comom/document/product/240/64125?from_cn_redirect=1).
**Note**: Memory and disk configurations should be upgraded or downgraded simultaneously, meaning that Memory and Volume should be modified at the same time.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Hard disk size after instance configuration changes, in GB. If this parameter is left blank, the default value is the current disk size of the instance. For the currently supported disk capacity, see [Product Specifications](https://www.tencentcloud.comom/document/product/240/64125?from_cn_redirect=1).
- Memory and disk configurations should be upgraded or downgraded at the same time, meaning that Memory and Volume should be modified at the same time.
- During configuration downgrade, the disk capacity after changes should be greater than 1.2 times the used disk capacity.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * (Deprecated) Use the independent API ResizeOplog.

Oplog size after instance configuration modification.
 - Unit: GB.
 - By default, the capacity occupied by Oplog is 10% of the disk capacity. The range of capacity occupied by Oplog supported by the system is [10%,90%] of the disk capacity.
         * @type {number || null}
         */
        this.OplogSize = null;

        /**
         * Number of Mongod nodes after instance changes (excluding read-only nodes).
- Number of replica set nodes. The value range of the number of nodes can be obtained through the response parameters MinNodeNum and MaxNodeNum of the [DescribeSpecInfo ](https://www.tencentcloud.comom/document/product/240/38567?from_cn_redirect=1) API.
- Number of nodes per shard in a sharded cluster. The value range of the number of nodes can be obtained through the response parameters MinReplicateSetNodeNum and MaxReplicateSetNodeNum of the [DescribeSpecInfo ](https://www.tencentcloud.comom/document/product/240/38567?from_cn_redirect=1) API.
**Note**: When the CPU and memory specifications of Mongod or Mongos nodes are changed, this parameter is not required, or enter the current number of Mongod or Mongos nodes (excluding read-only nodes).
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Number of shards after instance changes.
- The value range for the number of instance shards can be obtained through the response parameters **MinReplicateSetNum** and **MaxReplicateSetNum** of the [DescribeSpecInfo](https://www.tencentcloud.comom/document/product/240/38567?from_cn_redirect=1) API.
- The number of instance shards can only be increased and cannot be decreased.
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * Switch time for instance configuration modification.
 - 0: Execute the configuration modification task immediately after the adjustment is completed. Default value: 0.
 - 1: Execute the configuration modification task within the maintenance window.
**Note**: Adjusting the number of nodes and shards is unsupported <b>within the maintenance window</b>.
         * @type {number || null}
         */
        this.InMaintenance = null;

        /**
         * Memory size of the Mongos node after sharded cluster instance configuration changes, in GB. For the specifications supported by the instance, see [Product Specifications](https://www.tencentcloud.comom/document/product/240/64125?from_cn_redirect=1).
         * @type {string || null}
         */
        this.MongosMemory = null;

        /**
         * List of nodes to be added, containing the node type and AZ information.
         * @type {Array.<AddNodeList> || null}
         */
        this.AddNodeList = null;

        /**
         * Deletes the node list.
**Note**: According to the consistency principle for nodes of each shard on a sharded cluster instance, specify the nodes on shard 0 for node deletion from the sharded cluster instance. For example, cmgo-9nl1czif_0-node-readonly0 will delete the first read-only node of each shard.
         * @type {Array.<RemoveNodeList> || null}
         */
        this.RemoveNodeList = null;

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
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;
        this.InMaintenance = 'InMaintenance' in params ? params.InMaintenance : null;
        this.MongosMemory = 'MongosMemory' in params ? params.MongosMemory : null;

        if (params.AddNodeList) {
            this.AddNodeList = new Array();
            for (let z in params.AddNodeList) {
                let obj = new AddNodeList();
                obj.deserialize(params.AddNodeList[z]);
                this.AddNodeList.push(obj);
            }
        }

        if (params.RemoveNodeList) {
            this.RemoveNodeList = new Array();
            for (let z in params.RemoveNodeList) {
                let obj = new RemoveNodeList();
                obj.deserialize(params.RemoveNodeList[z]);
                this.RemoveNodeList.push(obj);
            }
        }

    }
}

/**
 * DescribeLogDownloadTasks request structure.
 * @class
 */
class DescribeLogDownloadTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of queries.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Start time of the download task.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the download task.
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * Specifies the instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Specifies the account name for which the password needs to be changed. The [DescribeAccountUsers](https://www.tencentcloud.comom/document/product/240/80800?from_cn_redirect=1) API can be called to obtain the account list and copy the account name for which the password needs to be changed.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Specifies a new password for the account. Password complexity requirements:
- It should contain 8–32 characters.
- It should contain at least two types of the following: letters, digits, and special characters (!@#%^\*()\_).
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
 * Collection of modifiable instance parameters of the Integer type.
 * @class
 */
class InstanceIntegerParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current parameter value.
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Default parameter value.
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Maximum parameter value.
         * @type {string || null}
         */
        this.Max = null;

        /**
         * Minimum value.
         * @type {string || null}
         */
        this.Min = null;

        /**
         * Whether a restart is required for the parameters to take effect after modification.
 - 1: Restart is required for the parameters to take effect.
 - 0: Restart is not required. Once set, the parameters take effect immediately.
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Parameter description.
         * @type {Array.<string> || null}
         */
        this.Tips = null;

        /**
         * Parameter type.
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * Whether the parameter values are used during running.
 - 1. parameter values used during running.
 - 0: parameter values not used during running.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Redundant field. It can be ignored.
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
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * Database IP to be modified
 * @class
 */
class ModifyNetworkAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * New IP
         * @type {string || null}
         */
        this.NewIPAddress = null;

        /**
         * Old IP
         * @type {string || null}
         */
        this.OldIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NewIPAddress = 'NewIPAddress' in params ? params.NewIPAddress : null;
        this.OldIpAddress = 'OldIpAddress' in params ? params.OldIpAddress : null;

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
         * Status. Valid values: `initial` (initializing), `running`, `paused` (paused due to failure), `undoed` (rolled back due to failure), `failed` (ended due to failure), `success`
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task execution start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task execution end time.
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
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
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
 * CreateLogDownloadTask request structure.
 * @class
 */
class CreateLogDownloadTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Node name.
         * @type {Array.<string> || null}
         */
        this.NodeNames = null;

        /**
         * Log category.
         * @type {Array.<string> || null}
         */
        this.LogComponents = null;

        /**
         * Log level.
         * @type {Array.<string> || null}
         */
        this.LogLevels = null;

        /**
         * Log ID.
         * @type {Array.<string> || null}
         */
        this.LogIds = null;

        /**
         * Log connection information.
         * @type {Array.<string> || null}
         */
        this.LogConnections = null;

        /**
         * Filtering fields for log details.
         * @type {Array.<string> || null}
         */
        this.LogDetailParams = null;

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
        this.NodeNames = 'NodeNames' in params ? params.NodeNames : null;
        this.LogComponents = 'LogComponents' in params ? params.LogComponents : null;
        this.LogLevels = 'LogLevels' in params ? params.LogLevels : null;
        this.LogIds = 'LogIds' in params ? params.LogIds : null;
        this.LogConnections = 'LogConnections' in params ? params.LogConnections : null;
        this.LogDetailParams = 'LogDetailParams' in params ? params.LogDetailParams : null;

    }
}

/**
 * Collection of modifiable instance parameters whose values are of the Text type.
 * @class
 */
class InstanceTextParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current parameter value.
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Default parameter value.
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Whether a restart is required after the parameter values are modified.
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Corresponding values of the Text-type parameters.
         * @type {string || null}
         */
        this.TextValue = null;

        /**
         * Parameter description.
         * @type {Array.<string> || null}
         */
        this.Tips = null;

        /**
         * Parameter type description.
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * Whether the parameter values are used during running.
 - 1. parameter values used during running.
 - 0: parameter values not used during running.
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
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.TextValue = 'TextValue' in params ? params.TextValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroup request structure.
 * @class
 */
class ModifyDBInstanceSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Target security group ID. Log in to the [security group console](https://console.cloud.tencent.com/vpc/security-group) page to copy the target security group ID.
**Note**: This input parameter performs a full replacement on all existing collections but not an incremental update. To modify it, import the expected full collections.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

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
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/MongoDB) and copy the instance ID from the instance list. Up to 5 instances can be queried at a time.
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
 * DescribeBackupDownloadTask request structure.
 * @class
 */
class DescribeBackupDownloadTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Specifies the backup file name for filtering download tasks of the specified file. The [DescribeDBBackups](https://www.tencentcloud.comom/document/product/240/38574?from_cn_redirect=1) API can be called to obtain the backup file name.
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * Specifies the task within the query time range, and StartTime specifies the start time. If not specified, there are no limitations on the start time by default.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Specifies the task within the query time range, and EndTime specifies the end time. If not specified, there are no limitations on the end time by default.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of entries returned for this query. Value range: 1–100. The default value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Specifies the number of pages returned for this query. The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting field.
- createTime: sort by the creation time of the backup download task. The default value is createTime.
- finishTime: sort by the completion time of the backup download task.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting method.
- asc: ascending order.
- desc: descending order. The default value is desc.
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Specifies the task status for filtering download tasks. If this parameter is not configured, tasks of all status types will be returned.
- 0: wait for execution.
- 1: downloading.
- 2: download completed.
- 3: download failed.
- 4: wait for retry.
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
 * DescribeClientConnections response structure.
 * @class
 */
class DescribeClientConnectionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Client connection information, including the numbers of connections of the client IP address and the database access IP address.
         * @type {Array.<ClientConnection> || null}
         */
        this.Clients = null;

        /**
         * The total number of records that meet the query condition, which can be used for paginated queries.
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
 * TerminateDBInstances request structure.
 * @class
 */
class TerminateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the ID of the pre-isolated instance. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
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
 * DescribeDBBackups response structure.
 * @class
 */
class DescribeDBBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup list.
         * @type {Array.<BackupInfo> || null}
         */
        this.BackupList = null;

        /**
         * Number of backups.
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
 * ModifyDBInstanceSecurityGroup response structure.
 * @class
 */
class ModifyDBInstanceSecurityGroupResponse extends  AbstractModel {
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
 * Node details of the instance to be modified.
 * @class
 */
class RemoveNodeList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Roles of nodes to be deleted.
 - SECONDARY: Mongod secondary node.
 - READONLY: read-only node.
 - MONGOS: Mongos node.
         * @type {string || null}
         */
        this.Role = null;

        /**
         * IDs of nodes to be deleted. For a sharded cluster instance, specify the names of nodes to be deleted on one shard. Nodes with the same names on other shards will also be deleted.
- Obtaining method: Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), go to the **Node Management** tab, and obtain the **node ID**.
- Note: For a sharded cluster instance, specify the IDs of nodes on shard 0. For example, cmgo-6hfk\*\*\*\*\_0-node-primary.
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * AZ corresponding to the node. For the currently supported AZs, see [Regions and AZs](https://www.tencentcloud.comom/document/product/240/3637?from_cn_redirect=1).
- Single AZ: all nodes are in the same AZ.
- Multiple AZs: The current standard specification involves three AZs. The primary and secondary nodes are not in the same AZ. Note: AZs corresponding to the nodes to be deleted should be specified. After deletion, the number of nodes in any 2 AZs should be larger than that in the third AZ.
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
        this.Role = 'Role' in params ? params.Role : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * Node tag.
 * @class
 */
class NodeTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node tag key.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Node tag value.
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

        if (params.Price) {
            let obj = new DBInstancePrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Information on security groups bound to the instance.
         * @type {Array.<SecurityGroup> || null}
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
 * Security group information
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Associated project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Security group creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Security group inbound rule.
         * @type {Array.<SecurityGroupBound> || null}
         */
        this.Inbound = null;

        /**
         * Security group outbound rule.
         * @type {Array.<SecurityGroupBound> || null}
         */
        this.Outbound = null;

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
 * Shard information.
 * @class
 */
class ReplicaSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Replica set ID.
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
 * ResetDBInstancePassword response structure.
 * @class
 */
class ResetDBInstancePasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task request ID.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
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
         * IP address of the connected client.
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Number of connections corresponding to the client IP address.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Whether it is an internal IP address.
         * @type {boolean || null}
         */
        this.InternalService = null;

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
        this.InternalService = 'InternalService' in params ? params.InternalService : null;

    }
}

/**
 * Replica set information.
 * @class
 */
class ReplicateSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node attributes.
         * @type {Array.<NodeProperty> || null}
         */
        this.Nodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Nodes) {
            this.Nodes = new Array();
            for (let z in params.Nodes) {
                let obj = new NodeProperty();
                obj.deserialize(params.Nodes[z]);
                this.Nodes.push(obj);
            }
        }

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
         * Order ID.
- Pay-as-you-go instance. It can be obtained through the output parameter **DealId** of the [CreateDBInstanceHour](https://www.tencentcloud.comom/document/product/240/38570?from_cn_redirect=1) API.
- Yearly/monthly subscription instance. It can be obtained through the output parameter **DealId** of the [CreateDBInstance](https://www.tencentcloud.comom/document/product/240/38571?from_cn_redirect=1) API.
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
 * UpgradeDBInstanceKernelVersion response structure.
 * @class
 */
class UpgradeDBInstanceKernelVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asynchronous process task ID.
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
 * DescribeAsyncRequestInfo request structure.
 * @class
 */
class DescribeAsyncRequestInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the ID of the asynchronous request to be queried. When an asynchronous process is involved in the API operation (such as [CreateBackupDBInstance](https://www.tencentcloud.comom/document/product/240/46599?from_cn_redirect=1)), the response value of AsyncRequestId is the ID to be filled in for this parameter.
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
 * CreateBackupDownloadTask request structure.
 * @class
 */
class CreateBackupDownloadTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Name of the backup file to be downloaded. The [DescribeDBBackups](https://www.tencentcloud.comom/document/product/240/38574?from_cn_redirect=1) API can be called to obtain it.
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * Specifies the node ID of the replica set to be downloaded or the shard node ID list of the sharded cluster.
- If the replica set instance ID is cmgo-p8vnipr5, for example, BackupSets.0=cmgo-p8vnipr5_0, full data can be downloaded.
- If the sharded cluster instance ID is cmgo-p8vnipr5, for example, BackupSets.0=cmgo-p8vnipr5_0&BackupSets.1=cmgo-p8vnipr5_1, download the data of Shard 0 and Shard 1. If a full download is needed for the sharded cluster, import all shard names as shown in the example.
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

        if (params.Price) {
            let obj = new DBInstancePrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Execution policy.
- ACCEPT: allow. Access requests for the port can be released.
- DROP: reject. Data packets are discarded without any response.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Inbound IP address or IP range for database access.
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * Port for database access.
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * Transport layer protocol: TCP.
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * Security group ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Parameter template ID for the IP address or IP address group. Log in to the [parameter template console](https://console.cloud.tencent.com/vpc/template/ip) to obtain the parameter template IP address details.
         * @type {string || null}
         */
        this.AddressModule = null;

        /**
         * Parameter template ID for the protocol port or protocol port group. Log in to the [parameter template console](https://console.cloud.tencent.com/vpc/template/protoport) to obtain the parameter template protocol port details.
         * @type {string || null}
         */
        this.ServiceModule = null;

        /**
         * Security group description information.
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
 * DescribeDBInstanceNodeProperty response structure.
 * @class
 */
class DescribeDBInstanceNodePropertyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mongos node attributes.
         * @type {Array.<NodeProperty> || null}
         */
        this.Mongos = null;

        /**
         * Replica set node information.
         * @type {Array.<ReplicateSetInfo> || null}
         */
        this.ReplicateSets = null;

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

        if (params.Mongos) {
            this.Mongos = new Array();
            for (let z in params.Mongos) {
                let obj = new NodeProperty();
                obj.deserialize(params.Mongos[z]);
                this.Mongos.push(obj);
            }
        }

        if (params.ReplicateSets) {
            this.ReplicateSets = new Array();
            for (let z in params.ReplicateSets) {
                let obj = new ReplicateSetInfo();
                obj.deserialize(params.ReplicateSets[z]);
                this.ReplicateSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMongodbLogs response structure.
 * @class
 */
class DescribeMongodbLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of logs.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of log details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LogInfo> || null}
         */
        this.LogList = null;

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

        if (params.LogList) {
            this.LogList = new Array();
            for (let z in params.LogList) {
                let obj = new LogInfo();
                obj.deserialize(params.LogList[z]);
                this.LogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceSSL response structure.
 * @class
 */
class DescribeInstanceSSLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSL enabling status. 0 indicates disabled; 1 indicates enabled.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Certificate expiration time, in the format of 2023-05-01 12:00:00.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * Certificate download URL.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertUrl = null;

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
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.CertUrl = 'CertUrl' in params ? params.CertUrl : null;
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
         * Task creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Backup file name.
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * Shard name.
         * @type {string || null}
         */
        this.ReplicaSetId = null;

        /**
         * Backup data size, in bytes.
         * @type {number || null}
         */
        this.BackupSize = null;

        /**
         * Task status.
- 0: wait for execution.
- 1: downloading.
- 2: download completed.
- 3: download failed.
- 4: wait for retry.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Task progress percentage.
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * Duration, in seconds.
         * @type {number || null}
         */
        this.TimeSpend = null;

        /**
         * Download link for backup data.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Backup method.
- 0: logical backup.
- 1: physical backup.
- 3: snapshot backup.
**Note**:
1. The General Edition instance supports logical and physical backup. The Cloud Disk Edition instance supports physical and snapshot backup, but does not support logical backup currently.
2. Physical backup is not supported when storage encryption is enabled for the instance.
         * @type {number || null}
         */
        this.BackupMethod = null;

        /**
         * Specified remarks for initiating backup tasks.
         * @type {string || null}
         */
        this.BackupDesc = null;

        /**
         * Region information.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Bucket information.
         * @type {string || null}
         */
        this.Bucket = null;

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
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupDesc = 'BackupDesc' in params ? params.BackupDesc : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;

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
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup method.
- 0: logical backup.
- 1: physical backup.
- 3: snapshot backup.
**Note**:
1. The General Edition instance supports logical and physical backup. The Cloud Disk Edition instance supports physical and snapshot backup, but does not support logical backup currently.
2. Physical backup is not supported when storage encryption is enabled for the instance.
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
         * Specifies the ID of the instance to be queried. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/MongoDB) and copy the instance ID from the instance list.

         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of entries returned per request. Minimum value: 1. Maximum value: 1000. Default value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0. Offset = Limit x (page number - 1).
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
 * SetDBInstanceDeletionProtection response structure.
 * @class
 */
class SetDBInstanceDeletionProtectionResponse extends  AbstractModel {
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
 * DescribeDetailedSlowLogs response structure.
 * @class
 */
class DescribeDetailedSlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of slow logs that meet the conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Slow log details.
         * @type {Array.<SlowLogItem> || null}
         */
        this.DetailedSlowLogs = null;

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

        if (params.DetailedSlowLogs) {
            this.DetailedSlowLogs = new Array();
            for (let z in params.DetailedSlowLogs) {
                let obj = new SlowLogItem();
                obj.deserialize(params.DetailedSlowLogs[z]);
                this.DetailedSlowLogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

/**
 * TerminateDBInstances response structure.
 * @class
 */
class TerminateDBInstancesResponse extends  AbstractModel {
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
 * RenameInstance request structure.
 * @class
 */
class RenameInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Format: cmgo-p8vnipr5. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/MongoDB#/) and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Custom instance name. It can contain any character, with a length from 1 to 128 characters.
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
 * RenewDBInstances response structure.
 * @class
 */
class RenewDBInstancesResponse extends  AbstractModel {
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
 * The collection of modifiable enum parameters of an instance.
 * @class
 */
class InstanceEnumParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current parameter value.
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Default parameter value.
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Enumerated values, which indicate all supported values.
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * Whether a restart is required for the parameters to take effect after modification.
 - 1: Restart is required for the parameters to take effect.
 - 0: Restart is not required. Once set, the parameters take effect immediately.
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Parameter description.
         * @type {Array.<string> || null}
         */
        this.Tips = null;

        /**
         * Parameter type description.
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * Whether the parameter values are used during running.
 - 1. parameter values used during running.
 - 0: parameter values not used during running.
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
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * CreateBackupDBInstance request structure.
 * @class
 */
class CreateBackupDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/MongoDB) and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Sets the backup method.
- 0: logical backup.
- 1: physical backup.
- 3: snapshot backup.
**Note**:
1. The General Edition instance supports logical and physical backup. The Cloud Disk Edition instance supports physical and snapshot backup, but does not support logical backup currently.
2. Physical backup is not supported when storage encryption is enabled for the instance.
         * @type {number || null}
         */
        this.BackupMethod = null;

        /**
         * Backup remarks information.
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
 * UpgradeDbInstanceVersion response structure.
 * @class
 */
class UpgradeDbInstanceVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asynchronous process task ID.
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
 * Node attributes.
 * @class
 */
class NodeProperty extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node AZ.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Node name.
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * Node access address.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Public network access address (IP address or domain name) of the node. The example value is an IP address.
         * @type {string || null}
         */
        this.WanServiceAddress = null;

        /**
         * Node role.
- PRIMARY: primary node.
- SECONDARY: secondary node.
- READONLY: read-only node.
- ARBITER: arbitration node.
         * @type {string || null}
         */
        this.Role = null;

        /**
         * Whether the node is a hidden node.
- true: a hidden node.
- false: not a hidden node.
         * @type {boolean || null}
         */
        this.Hidden = null;

        /**
         * Node status.
- NORMAL: running normally.
- STARTUP: starting.
- STARTUP2: starting and processing the intermediate data.
- RECOVERING: recovering and not available.
- DOWN: offline.
- UNKNOWN: unknown status.
- ROLLBACK: rolling back.
- REMOVED: removed.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Delay time of primary-secondary synchronization, in seconds.
         * @type {number || null}
         */
        this.SlaveDelay = null;

        /**
         * Node priority. Value range: [0, 100]. A larger value indicates a higher priority.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Node voting right.
- 1: The node has the right to vote.
- 0: The node does not have the right to vote.
         * @type {number || null}
         */
        this.Votes = null;

        /**
         * Node tag.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<NodeTag> || null}
         */
        this.Tags = null;

        /**
         * Replica set ID.
         * @type {string || null}
         */
        this.ReplicateSetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.WanServiceAddress = 'WanServiceAddress' in params ? params.WanServiceAddress : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Hidden = 'Hidden' in params ? params.Hidden : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SlaveDelay = 'SlaveDelay' in params ? params.SlaveDelay : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Votes = 'Votes' in params ? params.Votes : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new NodeTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ReplicateSetId = 'ReplicateSetId' in params ? params.ReplicateSetId : null;

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
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the ID of the instance to be isolated from the instance list.
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
 * CreateDBInstanceHour request structure.
 * @class
 */
class CreateDBInstanceHourRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance memory size. Unit: GB. Call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API to obtain specific saleable memory specifications.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size. Unit: GB. Call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API to obtain the maximum and minimum disk sizes corresponding to each CPU specification.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         *  - Specifies the number of replica sets during replica set instance creation. This parameter can only be set to 1.
 - Specifies the number of shards during sharded cluster instance creation. Call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API to query the range of shard quantity. The parameters MinReplicateSetNum and MaxReplicateSetNum in the returned data structure SpecItems correspond to the minimum value and maximum value, respectively.
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         *  - Specifies the number of primary and secondary nodes for each replica set during replica set instance creation. Call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API to obtain the maximum and minimum number of nodes supported for each replica set.
 - Specifies the number of primary and secondary nodes for each shard during sharded cluster instance creation. Call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API to obtain the maximum and minimum number of nodes supported for each shard.
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Refers to version information. The [DescribeSpecInfo](https://www.tencentcloud.comom/document/product/240/38567?from_cn_redirect=1) API can be called to obtain detailed information about the supported versions.
- MONGO_40_WT: version of the MongoDB 4.0 WiredTiger storage engine.
- MONGO_42_WT: version of the MongoDB 4.2 WiredTiger storage engine.
- MONGO_44_WT: version of the MongoDB 4.4 WiredTiger storage engine.
- MONGO_50_WT: version of the MongoDB 5.0 WiredTiger storage engine.
- MONGO_60_WT: version of the MongoDB 6.0 WiredTiger storage engine.
- MONGO_70_WT: version of the MongoDB 7.0 WiredTiger storage engine.
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * Product specification type.
 - HIO10G: general high-I/O 10GE type.
 - HCD: cloud disk type.
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * Number of instances. The minimum value is 1, and the maximum value is 30.
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * AZ information in the format of ap-guangzhou-2
- For more information, query through the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API.
- If multi-AZ deployment is enabled, this parameter refers to the primary AZ and must be one of the values of `AvailabilityZoneList`.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance architecture type
- REPLSET: Replica set
- SHARD: Sharded cluster
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * VPC ID.
- Only VPC configuration is supported, and a VPC in the same region as the instance should be selected. Log in to the [VPC console](https://console.cloud.tencent.com/vpc) to obtain the available VPC ID.
- After successful instance creation, VPCs can be changed. For detailed operations, see [Changing the Network](https://www.tencentcloud.comom/document/product/239/30910?from_cn_redirect=1).
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID of the VPC.
- A subnet should be specified within the selected VPC. Log in to the [VPC console](https://console.cloud.tencent.com/vpc) to obtain the available subnet ID.
- After successful instance creation, VPCs and subnets can be changed. For detailed operations, see [Changing the Network](https://www.tencentcloud.comom/document/product/239/30910?from_cn_redirect=1).
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance password. The requirements are as follows:
 - The number of characters should be in the range of [8, 32].
 - Characters within the ranges [A,Z], [a,z], and [0,9] are allowed.
 - Special characters that can be entered include exclamation marks (!), at signs (@), number signs (#), percent signs (%), carets (^), asterisks (\*), brackets (()), and underscores (_).
 - It cannot contain only the same letters or digits.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Project ID. - The default project is used if this parameter is not specified.
 - The project ID can be obtained on the [project management page in the TencentDB for MongoDB console](https://console.cloud.tencent.com/project).
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Instance tag information
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Instance type.
- 1: formal instance.
- 3: read-only instance.
- 4: disaster recovery instance.
- 5. cloned instance. Note: For a cloned instance, RestoreTime is required.
         * @type {number || null}
         */
        this.Clone = null;

        /**
         * Parent instance ID.
- This parameter is required when the value of the **Clone** parameter is set to 3 or 4, indicating a read-only or disaster recovery instance.
- Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the parent instance ID from the instance list.
         * @type {string || null}
         */
        this.Father = null;

        /**
         * Security group ID. Log in to the [security group console](https://console.cloud.tencent.com/vpc/security-group) to obtain the ID of the security group in the same region as the database instance.
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * Rollback time of the cloned instance
- This parameter is required for a cloned instance in the format of 2021-08-13 16:30:00.
- Time range for rollback: You can roll back data in the last 7 days.
         * @type {string || null}
         */
        this.RestoreTime = null;

        /**
         * Instance name. Only Chinese characters, letters, digits, underscores (_), and delimiters (-) are supported, with a length of 128 characters. When database instances are purchased in batches, the automatic ascending feature is supported through the custom naming pattern string and numeric suffix to set instance names efficiently.
- Basic mode: prefix + automatic ascending number (starting from 1 by default). Only a custom instance name prefix is required for **lnstanceName**. For example, it can be set to cmgo. If the purchase quantity is set to 5, after purchase, the instances will be sequentially named cmgo1, cmgo2, cmgo3, cmgo4, and cmgo5, respectively.
- Custom starting number mode: prefix + {R:x} (x is the custom starting number). Prefix{R:x} is required for **InstanceName**. For example, cmgo{R:3}. If the purchase quantity is set to 5, the instance names will be sequentially named cmgo3, cmgo4, cmgo5, cmgo6, and cmgo7.
- Composite pattern string: prefix 1{R:x} + prefix 2{R:y}+ ⋯ + fixed suffix, where x and y are the starting numbers of each prefix. A composite pattern string is required for **instanceName**. For example, cmgo{R:10}\_node{R:12}\_db. If the batch purchase quantity is set to 5, the instances will be sequentially named cmgo10\_node12\_db, cmgo11\_node13\_db, cmgo12\_node14\_db, cmgo13\_node15\_db, and cmgo14\_node16\_db.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Specifies the list of AZs during multi-AZ deployment of TencentDB for MongoDB instances.
- For instances in multi-AZ deployment mode, the **Zone** parameter specifies the primary AZ, and **AvailabilityZoneList** specifies all AZs, including the primary AZ. Format: [ap-guangzhou-2,ap-guangzhou-3,ap-guangzhou-4].
- The [DescribeSpecInfo](https://www.tencentcloud.comom/document/product/240/38567?from_cn_redirect=1) API can be called to obtain AZs planned for TencentDB for MongoDB instances in different regions, helping you specify valid AZs.
- Nodes in multi-AZ deployment mode can only be deployed in 3 different AZs. Deploying most nodes of a cluster in the same AZ is not supported. For example, a 3-node cluster does not support deploying 2 nodes in the same AZ.
         * @type {Array.<string> || null}
         */
        this.AvailabilityZoneList = null;

        /**
         * Number of Mongos node CPU cores. Valid values: 1, 2, 4, 8, and 16. This parameter is required during sharded cluster instance purchase.
         * @type {number || null}
         */
        this.MongosCpu = null;

        /**
         * Mongos node memory size.
- This parameter is required during sharded cluster instance purchase.
- Unit: GB. 1-core 2 GB, 2-core 4 GB, 4-core 8 GB, 8-core 16 GB, and 16-core 32 GB are supported.
         * @type {number || null}
         */
        this.MongosMemory = null;

        /**
         * Number of Mongos nodes. This parameter is required during sharded cluster instance purchase.
 - For instances in single-AZ deployment mode, the value range is [3,32].
 - For instances in multi-AZ deployment mode, the value range is [6,32].
         * @type {number || null}
         */
        this.MongosNodeNum = null;

        /**
         * Number of read-only nodes. Value ranges: [0,5].
         * @type {number || null}
         */
        this.ReadonlyNodeNum = null;

        /**
         * Array of AZs of read-only nodes. This parameter is required for instances in multi-AZ deployment mode when **ReadonlyNodeNum** is not set to **0**.
         * @type {Array.<string> || null}
         */
        this.ReadonlyNodeAvailabilityZoneList = null;

        /**
         * AZ where the hidden node resides, which is required in cross-AZ instance deployment.
         * @type {string || null}
         */
        this.HiddenZone = null;

        /**
         * Parameter template ID.
- A parameter template is a collection of predefined parameter values that can be used to quickly configure new MongoDB instances. Proper use of parameter templates can significantly enhance the deployment efficiency and operational performance of the database.
- The [DescribeDBInstanceParamTpl](https://www.tencentcloud.comom/document/product/240/109155?from_cn_redirect=1) API can be called to obtain the parameter template ID. Select the parameter template ID corresponding to the instance version and architecture.
         * @type {string || null}
         */
        this.ParamTemplateId = null;

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
        this.RestoreTime = 'RestoreTime' in params ? params.RestoreTime : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AvailabilityZoneList = 'AvailabilityZoneList' in params ? params.AvailabilityZoneList : null;
        this.MongosCpu = 'MongosCpu' in params ? params.MongosCpu : null;
        this.MongosMemory = 'MongosMemory' in params ? params.MongosMemory : null;
        this.MongosNodeNum = 'MongosNodeNum' in params ? params.MongosNodeNum : null;
        this.ReadonlyNodeNum = 'ReadonlyNodeNum' in params ? params.ReadonlyNodeNum : null;
        this.ReadonlyNodeAvailabilityZoneList = 'ReadonlyNodeAvailabilityZoneList' in params ? params.ReadonlyNodeAvailabilityZoneList : null;
        this.HiddenZone = 'HiddenZone' in params ? params.HiddenZone : null;
        this.ParamTemplateId = 'ParamTemplateId' in params ? params.ParamTemplateId : null;

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
         * Instance ID list. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/MongoDB) and copy the instance ID from the instance list.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Project ID, the unique ID of the project created by the user. Go to the [project management](https://console.cloud.tencent.com/project) area of the account center in the console to copy the project ID.
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
 * DescribeMongodbLogs request structure.
 * @class
 */
class DescribeMongodbLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb#/), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time for querying logs.
- Format: yyyy-mm-dd hh:mm:ss. For example, 2019-06-01 10:00:00.
- Query time range: Only log data within the last 7 days can be queried.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time for querying logs.
- Format: yyyy-mm-dd hh:mm:ss. For example, 2019-06-01 10:00:00.
- Query time range: Only log data within the last 7 days can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Node ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and go to the **Node Management** page to obtain the ID of the node to be queried.
         * @type {Array.<string> || null}
         */
        this.NodeNames = null;

        /**
         * Log category.
- Log categories include but are not limited to COMMAND, ACCESS, CONTROL, FTDC, INDEX, NETWORK, QUERY, REPL, SHARDING, STORAGE, RECOVERY, JOURNAL, and WRITE. The specific supported categories may vary depending on the MongoDB version. For details, see Log Messages (https://www.mongodb.com/zh-cn/docs/v5.0/reference/log-messages/#log-message-examples).
- Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and view the **log category** on the **Error Log** tab of the **Log Management** page.
         * @type {Array.<string> || null}
         */
        this.LogComponents = null;

        /**
         * Log level.
- The log levels are ranked by severity from high to low: FATAL, ERROR, and WARNING.
-Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and view the **log level** on the **Error Log** tab of the **Log Management** page.
         * @type {Array.<string> || null}
         */
        this.LogLevels = null;

        /**
         * Log ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and view the **log ID** on the **Error Log** tab of the **Log Management** page.
         * @type {Array.<string> || null}
         */
        this.LogIds = null;

        /**
         * Log connection information. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and view the **log connection information** on the **Error Log** tab of the **Log Management** page.
         * @type {Array.<string> || null}
         */
        this.LogConnections = null;

        /**
         * Specifies the field for filtering the logs.
         * @type {Array.<string> || null}
         */
        this.LogDetailParams = null;

        /**
         * Offset. The minimum value is 0, and the maximum value is 10000. The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination size. The minimum value is 1, and the maximum value is 100. The default value is 20.
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
        this.NodeNames = 'NodeNames' in params ? params.NodeNames : null;
        this.LogComponents = 'LogComponents' in params ? params.LogComponents : null;
        this.LogLevels = 'LogLevels' in params ? params.LogLevels : null;
        this.LogIds = 'LogIds' in params ? params.LogIds : null;
        this.LogConnections = 'LogConnections' in params ? params.LogConnections : null;
        this.LogDetailParams = 'LogDetailParams' in params ? params.LogDetailParams : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * Status of the download task.
         * @type {Array.<BackupDownloadTaskStatus> || null}
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
 * CreateLogDownloadTask response structure.
 * @class
 */
class CreateLogDownloadTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status.
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLogDownloadTask request structure.
 * @class
 */
class DeleteLogDownloadTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Task ID.
         * @type {string || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * Instance specification information.
 * @class
 */
class SpecificationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region information.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * AZ information.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Sales specification information.
         * @type {Array.<SpecItem> || null}
         */
        this.SpecItems = null;

        /**
         * Whether cross-AZ deployment is supported.
- 1: supported.
- 0: not supported.
         * @type {number || null}
         */
        this.SupportMultiAZ = null;

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
        this.SupportMultiAZ = 'SupportMultiAZ' in params ? params.SupportMultiAZ : null;

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
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Slow log start time.
- Format: yyyy-mm-dd hh:mm:ss. For example, 2019-06-01 10:00:00.
- The query start and end time interval cannot exceed 24 hours. Only slow logs within the last 7 days can be queried.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Slow log end time.
- Format: yyyy-mm-dd hh:mm:ss. For example, 2019-06-02 12:00:00.
- The query start and end time interval cannot exceed 24 hours. Only slow logs within the last 7 days can be queried.
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
 * DescribeSpecInfo response structure.
 * @class
 */
class DescribeSpecInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of sales specification information on the instance.
         * @type {Array.<SpecificationInfo> || null}
         */
        this.SpecInfoList = null;

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

        if (params.Price) {
            let obj = new DBInstancePrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Number of eligible instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instance details
         * @type {Array.<InstanceDetail> || null}
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
         * Instance ID. Log in to the [TencentDB for MongoDB console recycle bin](https://console.cloud.tencent.com/mongodb/recycle), and copy the ID of the instance to be eliminated from the instance list.
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
 * InquirePriceCreateDBInstances request structure.
 * @class
 */
class InquirePriceCreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region and AZ information of the instance. For details, see [Regions and AZs](https://www.tencentcloud.comom/document/product/240/3637?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * -Specifies the number of primary and secondary nodes for each replica set during replica set instance creation. call the [DescribeSpecInfo](https://www.tencentcloud.comom/document/product/240/38567?from_cn_redirect=1) API to obtain the maximum and minimum number of nodes supported for each replica set.
- Specifies the number of primary and secondary nodes for each shard during sharded cluster instance creation. Call the [DescribeSpecInfo](https://www.tencentcloud.comom/document/product/240/38567?from_cn_redirect=1) API to obtain the maximum and minimum number of nodes supported for each shard.
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Instance memory size.

 - Unit: GB.
 - For the value range, call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API. The CPU and Memory parameters in the returned data structure SpecItems correspond to the number of CPU cores and the memory specification, respectively.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size.
 - Unit: GB.
 - For the value range, call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API. The MinStorage and MaxStorage parameters in the returned data structure SpecItems correspond to the minimum and maximum disk specifications, respectively.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Instance version information. The [DescribeSpecInfo](https://www.tencentcloud.comom/document/product/240/38567?from_cn_redirect=1) API can be called to obtain specific supported versions. The MongoVersionCode parameter in the returned data structure SpecItems indicates the information on versions supported by instances. The corresponding relationship between version information and version number is as follows:
- MONGO_40_WT: version of the MongoDB 4.0 WiredTiger storage engine.
- MONGO_42_WT: version of the MongoDB 4.2 WiredTiger storage engine.
- MONGO_44_WT: version of the MongoDB 4.4 WiredTiger storage engine.
- MONGO_50_WT: version of the MongoDB 5.0 WiredTiger storage engine.
- MONGO_60_WT: version of the MongoDB 6.0 WiredTiger storage engine.
- MONGO_70_WT: version of the MongoDB 7.0 WiredTiger storage engine.
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * Product specification type.
 - HIO10G: general high-I/O 10GE type.
 - HCD: cloud disk.
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * Number of instances. Minimum value: 1. Maximum value: 10.
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Instance type.

 - REPLSET: replica set.
 - SHARD: sharded cluster.
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         *  - Specifies the number of replica sets during replica set instance creation. This parameter can only be set to 1.
 - Specifies the number of shards during sharded cluster instance creation. Call the [DescribeSpecInfo](https://intl.cloud.tencent.com/document/product/240/38567?from_cn_redirect=1) API to query the range of shard quantity. The parameters MinReplicateSetNum and MaxReplicateSetNum in the returned data structure SpecItems correspond to the minimum value and maximum value, respectively.
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         *  - When the monthly subscription mode is selected, that is, when <b>InstanceChargeType</b> is set to <b>PREPAID</b>, this parameter is required for specifying the purchase duration of instances. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, and 36. Unit: months.
 - When pay-as-you-go is selected, that is, when <b>InstanceChargeType</b> is set to **POSTPAID_BY_HOUR**, this parameter only can be set to 1.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Instance payment method.
 - PREPAID: monthly subscription.
 - POSTPAID_BY_HOUR: pay-as-you-go.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Number of Mongos node CPU cores. Valid values: 1, 2, 4, 8, and 16. This parameter is required during sharded cluster instance purchase. If this parameter is left blank, the default value 2 is used.
         * @type {number || null}
         */
        this.MongosCpu = null;

        /**
         * Mongos node memory size. - This parameter is required during sharded cluster instance purchase. - Unit: GB. Valid values: 2 (for 1 core), 4 (for 2 cores), 8 (for 4 cores), 16 (for 8 cores), and 32 (for 16 cores). If this parameter is left blank, the default value 4 is used.
         * @type {number || null}
         */
        this.MongosMemory = null;

        /**
         * Specifies the number of Mongos nodes. Value range: [3,32]. For querying the price of sharded cluster instances, this parameter is required. If it is left blank, the default value 3 is used.
         * @type {number || null}
         */
        this.MongosNum = null;

        /**
         * Specifies the number of ConfigServer CPU cores. The value is fixed as 1.
         * @type {number || null}
         */
        this.ConfigServerCpu = null;

        /**
         * Specifies the ConfigServer memory size. The value is fixed as 2. Unit: GB. This parameter can be left blank.
         * @type {number || null}
         */
        this.ConfigServerMemory = null;

        /**
         * Specifies the ConfigServer disk size. The value is fixed as 20. Unit: GB. This parameter can be left blank.
         * @type {number || null}
         */
        this.ConfigServerVolume = null;

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
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.MongosCpu = 'MongosCpu' in params ? params.MongosCpu : null;
        this.MongosMemory = 'MongosMemory' in params ? params.MongosMemory : null;
        this.MongosNum = 'MongosNum' in params ? params.MongosNum : null;
        this.ConfigServerCpu = 'ConfigServerCpu' in params ? params.ConfigServerCpu : null;
        this.ConfigServerMemory = 'ConfigServerMemory' in params ? params.ConfigServerMemory : null;
        this.ConfigServerVolume = 'ConfigServerVolume' in params ? params.ConfigServerVolume : null;

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
         * Collection of parameters whose values are of the Enum type.
         * @type {Array.<InstanceEnumParam> || null}
         */
        this.InstanceEnumParam = null;

        /**
         * Collection of parameters whose values are of the Integer type.
         * @type {Array.<InstanceIntegerParam> || null}
         */
        this.InstanceIntegerParam = null;

        /**
         * Collection of parameters whose values are of the Text type.
         * @type {Array.<InstanceTextParam> || null}
         */
        this.InstanceTextParam = null;

        /**
         * Collection of parameters whose values are of different types.
         * @type {Array.<InstanceMultiParam> || null}
         */
        this.InstanceMultiParam = null;

        /**
         * Number of modifiable parameters supported by the current instance.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Specifies the instance ID for querying the parameter list. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/MongoDB) and copy the instance ID from the instance list.
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
 * DescribeLogDownloadTasks response structure.
 * @class
 */
class DescribeLogDownloadTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quantity.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Task list.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Task> || null}
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
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Slow log details.
 * @class
 */
class SlowLogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Slow log details.
         * @type {string || null}
         */
        this.Log = null;

        /**
         * Node name.
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * Queries the hash value.
         * @type {string || null}
         */
        this.QueryHash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Log = 'Log' in params ? params.Log : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.QueryHash = 'QueryHash' in params ? params.QueryHash : null;

    }
}

/**
 * Instance details.
 * @class
 */
class InstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
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
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Cluster type.
- 0: replica set instance.
- 1: sharded cluster instance.
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
         * Network type.
- 0: basic network.
- 1: VPC.
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
         * Instance status.
- 0: to be initialized.
- 1: processing, such as specification changes and parameter modifications.
- 2: running normally.
- -2: isolated (yearly/monthly subscription).
- -3: isolated (pay-as-you-go).
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
         * Storage engine version information on instances.
- MONGO_36_WT: version of the MongoDB 3.6 WiredTiger storage engine.
- MONGO_40_WT: version of the MongoDB 4.0 WiredTiger storage engine.
- MONGO_42_WT: version of the MongoDB 4.2 WiredTiger storage engine.
- MONGO_44_WT: version of the MongoDB 4.4 WiredTiger storage engine.
- MONGO_50_WT: version of the MongoDB 5.0 WiredTiger storage engine.
- MONGO_60_WT: version of the MongoDB 6.0 WiredTiger storage engine.
- MONGO_70_WT: version of the MongoDB 7.0 WiredTiger storage engine.
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * Instance memory specification, in MB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk specification, in MB.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Number of the instance CPU cores.
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * Instance machine type.
- HIO10G: general HIO 10GE type.
- HCD: Cloud Disk Edition type.
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
         * Automatic renewal flag for the instance.
- 0: manual renewal.
- 1: automatic renewal.
- 2: no renewal after confirmation.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Used capacity, in MB.
         * @type {number || null}
         */
        this.UsedVolume = null;

        /**
         * Start time of the maintenance time
         * @type {string || null}
         */
        this.MaintenanceStart = null;

        /**
         * End time of the maintenance time
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
         * Information of associated instances. For a regular instance, this field represents the information of its temp instance; for a temp instance, this field represents the information of its regular instance; and for a read-only instance or a disaster recovery instance, this field represents the information of its primary instance.
         * @type {DBInstanceInfo || null}
         */
        this.RelatedInstance = null;

        /**
         * Instance tag information set
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Instance version
         * @type {number || null}
         */
        this.InstanceVer = null;

        /**
         * Instance version
         * @type {number || null}
         */
        this.ClusterVer = null;

        /**
         * Protocol information: mongodb.
         * @type {number || null}
         */
        this.Protocol = null;

        /**
         * Instance type.
- 0: all instances.
- 1: formal instance.
- 2: temporary instance.
- 3: read-only instance.
- -1: include the formal, read-only, and disaster recovery instance simultaneously.
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Instance status description.
         * @type {string || null}
         */
        this.InstanceStatusDesc = null;

        /**
         * Physical instance ID corresponding to the instance. The instances that have been rolled back and replaced have different InstanceIds and RealInstanceIds, which need to be obtained through the physical ID in scenarios such as obtaining monitoring data from Barad.
         * @type {string || null}
         */
        this.RealInstanceId = null;

        /**
         * Number of Mongos nodes.
         * @type {number || null}
         */
        this.MongosNodeNum = null;

        /**
         * Mongos node memory, in MB.
         * @type {number || null}
         */
        this.MongosMemory = null;

        /**
         * Number of Mongos node CPU cores.
         * @type {number || null}
         */
        this.MongosCpuNum = null;

        /**
         * Number of ConfigServer nodes.
         * @type {number || null}
         */
        this.ConfigServerNodeNum = null;

        /**
         * Config Server node memory, in MB.
         * @type {number || null}
         */
        this.ConfigServerMemory = null;

        /**
         * Config Server node disk size, in MB.
         * @type {number || null}
         */
        this.ConfigServerVolume = null;

        /**
         * Number of ConfigServer node CPU cores.
         * @type {number || null}
         */
        this.ConfigServerCpuNum = null;

        /**
         * Number of read-only nodes.
         * @type {number || null}
         */
        this.ReadonlyNodeNum = null;

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
        this.MongosNodeNum = 'MongosNodeNum' in params ? params.MongosNodeNum : null;
        this.MongosMemory = 'MongosMemory' in params ? params.MongosMemory : null;
        this.MongosCpuNum = 'MongosCpuNum' in params ? params.MongosCpuNum : null;
        this.ConfigServerNodeNum = 'ConfigServerNodeNum' in params ? params.ConfigServerNodeNum : null;
        this.ConfigServerMemory = 'ConfigServerMemory' in params ? params.ConfigServerMemory : null;
        this.ConfigServerVolume = 'ConfigServerVolume' in params ? params.ConfigServerVolume : null;
        this.ConfigServerCpuNum = 'ConfigServerCpuNum' in params ? params.ConfigServerCpuNum : null;
        this.ReadonlyNodeNum = 'ReadonlyNodeNum' in params ? params.ReadonlyNodeNum : null;

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
         * Order ID.
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
 * Description on the billing mode of an instance
 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance purchase duration. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, and 36. Default value: 1.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Automatic renewal flag. Valid values:
 - NOTIFY_AND_AUTO_RENEW: A notification is sent upon expiration, and the instance is renewed automatically. If the account balance is sufficient, the instance will be renewed automatically on a monthly basis after expiration.
 - NOTIFY_AND_MANUAL_RENEW: A notification is sent upon expiration, but the instance is not renewed automatically. Default value: NOTIFY_AND_MANUAL_RENEW.
 - DISABLE_NOTIFY_AND_MANUAL_RENEW: No notification is sent upon expiration, and the instance is not renewed automatically.
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
 * RenewDBInstances request structure.
 * @class
 */
class RenewDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the ID or IDs of one or multiple instances to be renewed.
- It can be obtained through the response parameter **InstanceId** of the [DescribeDBInstances](https://www.tencentcloud.comom/document/product/240/38568?from_cn_redirect=1) API.
- The maximum number of instances for each renewal request is 100.
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
 * UpgradeDBInstanceKernelVersion request structure.
 * @class
 */
class UpgradeDBInstanceKernelVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance IDs, which are in the format of cmgo-p8vnipr5. It is the same as the format of the instance ID displayed on the TencentDB for MongoDB console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether to perform the upgrade during the maintenance period. 0 - no; 1 - yes.
         * @type {number || null}
         */
        this.InMaintenance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InMaintenance = 'InMaintenance' in params ? params.InMaintenance : null;

    }
}

module.exports = {
    DescribeSpecInfoRequest: DescribeSpecInfoRequest,
    CreateDBInstanceRequest: CreateDBInstanceRequest,
    CreateBackupDBInstanceResponse: CreateBackupDBInstanceResponse,
    DBInstancePrice: DBInstancePrice,
    DeleteLogDownloadTaskResponse: DeleteLogDownloadTaskResponse,
    DescribeDBInstanceNamespaceResponse: DescribeDBInstanceNamespaceResponse,
    DescribeSlowLogsRequest: DescribeSlowLogsRequest,
    FlushInstanceRouterConfigResponse: FlushInstanceRouterConfigResponse,
    SetDBInstanceDeletionProtectionRequest: SetDBInstanceDeletionProtectionRequest,
    DescribeSecurityGroupRequest: DescribeSecurityGroupRequest,
    DescribeInstanceSSLRequest: DescribeInstanceSSLRequest,
    SlowLogPattern: SlowLogPattern,
    Task: Task,
    AssignProjectResponse: AssignProjectResponse,
    DescribeDBInstanceDealResponse: DescribeDBInstanceDealResponse,
    OfflineIsolatedDBInstanceResponse: OfflineIsolatedDBInstanceResponse,
    IsolateDBInstanceResponse: IsolateDBInstanceResponse,
    InstanceMultiParam: InstanceMultiParam,
    DescribeBackupDownloadTaskResponse: DescribeBackupDownloadTaskResponse,
    AddNodeList: AddNodeList,
    FlushInstanceRouterConfigRequest: FlushInstanceRouterConfigRequest,
    DBInstanceInfo: DBInstanceInfo,
    UpgradeDbInstanceVersionRequest: UpgradeDbInstanceVersionRequest,
    ModifyDBInstanceNetworkAddressRequest: ModifyDBInstanceNetworkAddressRequest,
    CreateDBInstanceHourResponse: CreateDBInstanceHourResponse,
    InstanceEnableSSLRequest: InstanceEnableSSLRequest,
    DescribeDBInstanceNamespaceRequest: DescribeDBInstanceNamespaceRequest,
    DescribeDBInstanceNodePropertyRequest: DescribeDBInstanceNodePropertyRequest,
    LogInfo: LogInfo,
    SpecItem: SpecItem,
    DescribeDetailedSlowLogsRequest: DescribeDetailedSlowLogsRequest,
    ModifyDBInstanceNetworkAddressResponse: ModifyDBInstanceNetworkAddressResponse,
    DescribeSlowLogPatternsResponse: DescribeSlowLogPatternsResponse,
    BackupDownloadTaskStatus: BackupDownloadTaskStatus,
    DescribeSlowLogsResponse: DescribeSlowLogsResponse,
    InquirePriceModifyDBInstanceSpecRequest: InquirePriceModifyDBInstanceSpecRequest,
    BackupInfo: BackupInfo,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    InstanceEnableSSLResponse: InstanceEnableSSLResponse,
    ModifyDBInstanceSpecRequest: ModifyDBInstanceSpecRequest,
    DescribeLogDownloadTasksRequest: DescribeLogDownloadTasksRequest,
    ResetDBInstancePasswordRequest: ResetDBInstancePasswordRequest,
    InstanceIntegerParam: InstanceIntegerParam,
    ModifyNetworkAddress: ModifyNetworkAddress,
    DescribeAsyncRequestInfoResponse: DescribeAsyncRequestInfoResponse,
    CreateDBInstanceResponse: CreateDBInstanceResponse,
    CreateLogDownloadTaskRequest: CreateLogDownloadTaskRequest,
    InstanceTextParam: InstanceTextParam,
    ModifyDBInstanceSecurityGroupRequest: ModifyDBInstanceSecurityGroupRequest,
    InquirePriceRenewDBInstancesRequest: InquirePriceRenewDBInstancesRequest,
    DescribeBackupDownloadTaskRequest: DescribeBackupDownloadTaskRequest,
    DescribeClientConnectionsResponse: DescribeClientConnectionsResponse,
    TerminateDBInstancesRequest: TerminateDBInstancesRequest,
    DescribeDBBackupsResponse: DescribeDBBackupsResponse,
    ModifyDBInstanceSecurityGroupResponse: ModifyDBInstanceSecurityGroupResponse,
    RemoveNodeList: RemoveNodeList,
    NodeTag: NodeTag,
    InquirePriceCreateDBInstancesResponse: InquirePriceCreateDBInstancesResponse,
    DescribeSecurityGroupResponse: DescribeSecurityGroupResponse,
    SecurityGroup: SecurityGroup,
    ReplicaSetInfo: ReplicaSetInfo,
    ResetDBInstancePasswordResponse: ResetDBInstancePasswordResponse,
    ClientConnection: ClientConnection,
    ReplicateSetInfo: ReplicateSetInfo,
    DescribeDBInstanceDealRequest: DescribeDBInstanceDealRequest,
    UpgradeDBInstanceKernelVersionResponse: UpgradeDBInstanceKernelVersionResponse,
    DescribeAsyncRequestInfoRequest: DescribeAsyncRequestInfoRequest,
    CreateBackupDownloadTaskRequest: CreateBackupDownloadTaskRequest,
    InquirePriceModifyDBInstanceSpecResponse: InquirePriceModifyDBInstanceSpecResponse,
    SecurityGroupBound: SecurityGroupBound,
    DescribeDBInstanceNodePropertyResponse: DescribeDBInstanceNodePropertyResponse,
    DescribeMongodbLogsResponse: DescribeMongodbLogsResponse,
    DescribeInstanceSSLResponse: DescribeInstanceSSLResponse,
    BackupDownloadTask: BackupDownloadTask,
    DescribeDBBackupsRequest: DescribeDBBackupsRequest,
    DescribeClientConnectionsRequest: DescribeClientConnectionsRequest,
    SetDBInstanceDeletionProtectionResponse: SetDBInstanceDeletionProtectionResponse,
    DescribeDetailedSlowLogsResponse: DescribeDetailedSlowLogsResponse,
    ShardInfo: ShardInfo,
    TerminateDBInstancesResponse: TerminateDBInstancesResponse,
    RenameInstanceRequest: RenameInstanceRequest,
    RenewDBInstancesResponse: RenewDBInstancesResponse,
    InstanceEnumParam: InstanceEnumParam,
    RenameInstanceResponse: RenameInstanceResponse,
    CreateBackupDBInstanceRequest: CreateBackupDBInstanceRequest,
    UpgradeDbInstanceVersionResponse: UpgradeDbInstanceVersionResponse,
    NodeProperty: NodeProperty,
    IsolateDBInstanceRequest: IsolateDBInstanceRequest,
    CreateDBInstanceHourRequest: CreateDBInstanceHourRequest,
    AssignProjectRequest: AssignProjectRequest,
    DescribeMongodbLogsRequest: DescribeMongodbLogsRequest,
    CreateBackupDownloadTaskResponse: CreateBackupDownloadTaskResponse,
    CreateLogDownloadTaskResponse: CreateLogDownloadTaskResponse,
    DeleteLogDownloadTaskRequest: DeleteLogDownloadTaskRequest,
    SpecificationInfo: SpecificationInfo,
    DescribeSlowLogPatternsRequest: DescribeSlowLogPatternsRequest,
    DescribeSpecInfoResponse: DescribeSpecInfoResponse,
    InquirePriceRenewDBInstancesResponse: InquirePriceRenewDBInstancesResponse,
    TagInfo: TagInfo,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    OfflineIsolatedDBInstanceRequest: OfflineIsolatedDBInstanceRequest,
    InquirePriceCreateDBInstancesRequest: InquirePriceCreateDBInstancesRequest,
    DescribeInstanceParamsResponse: DescribeInstanceParamsResponse,
    DescribeInstanceParamsRequest: DescribeInstanceParamsRequest,
    DescribeLogDownloadTasksResponse: DescribeLogDownloadTasksResponse,
    SlowLogItem: SlowLogItem,
    InstanceDetail: InstanceDetail,
    ModifyDBInstanceSpecResponse: ModifyDBInstanceSpecResponse,
    InstanceChargePrepaid: InstanceChargePrepaid,
    RenewDBInstancesRequest: RenewDBInstancesRequest,
    UpgradeDBInstanceKernelVersionRequest: UpgradeDBInstanceKernelVersionRequest,

}
