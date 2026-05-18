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
         * AZ to be queried. For currently supported AZs, see [Regions and AZs](https://www.tencentcloud.com/document/product/240/3637?from_cn_redirect=1).
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
         * <ul><li>Specifies the number of primary and secondary nodes for each replica set during replica set instance creation. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to obtain the maximum and minimum number of nodes supported for each replica set.</li><li>Specifies the number of primary and secondary nodes for each shard during sharded cluster instance creation. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to obtain the maximum and minimum number of nodes supported for each shard.</li></ul>
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * <p>Instance memory size. Unit: GB. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to obtain specific saleable memory specifications.</p>
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * <p>Instance disk size. Unit: GB. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to obtain the maximum and minimum disk sizes corresponding to each CPU specification.</p>
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * <p>Refers to version information. For supported versions, use the interface <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> to query.</p><ul><li>MONGO_40_WT: MongoDB 4.0 WiredTiger engine version.</li><li>MONGO_42_WT: MongoDB 4.2 WiredTiger engine version.</li><li>MONGO_44_WT: MongoDB 4.4 WiredTiger engine version.</li><li>MONGO_50_WT: MongoDB 5.0 WiredTiger engine version.</li><li>MONGO_60_WT: MongoDB 6.0 WiredTiger engine version.</li><li>MONGO_70_WT: MongoDB 7.0 WiredTiger engine version.</li><li>MONGO_80_WT: MongoDB 8.0 WiredTiger engine version.</li></ul>
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * <p>Number of instances. The minimum value is 1, and the maximum value is 30.</p>
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * <p>AZ information. The input format must be ap-guangzhou-2.</p><ul><li>For details, use the interface <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> to obtain them.</li><li>This parameter is the primary AZ. If multi-AZ deployment is used, Zone must be one of AvailabilityZoneList.</li></ul>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Specifies the purchase duration during instance purchase. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, and 36. Unit: months.</p>
         * @type {number || null}
         */
        this.Period = null;

        /**
         * <p>Recommended product specification types:</p><ul><li>GE.LD.T1: Local disk (Common I).</li><li>GE.CD.T1: Cloud disk (Common I).</li></ul><p>Product allowlist specification types:</p><ul><li>HIO10G: Local disk (High IO 10G).</li><li>HCD: Cloud disk (Cloud disk edition).</li></ul><p>Note: Allowlist specification types are under allowlist control. If needed, <a href="https://console.cloud.tencent.com/workorder/category">submit a ticket</a> to apply.</p>
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * <p>Instance architecture type.</p><ul><li>REPLSET (replica set)</li><li>SHARD (sharded cluster)</li></ul>
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * <ul><li>Specifies the number of replica sets during replica set instance creation. This parameter can only be 1.</li><li>Specifies the number of shards during sharded cluster instance creation. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to query the range of shard quantity. The parameters MinReplicateSetNum and MaxReplicateSetNum in the returned data structure SpecItems correspond to the minimum value and maximum value, respectively.</li></ul>
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * <p>Project ID.</p><ul><li>If this parameter is not set, the default project is used.</li><li>You can obtain the project ID on the <a href="https://console.cloud.tencent.com/project">MongoDB console project management</a> page.</li></ul>
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * <p>VPC ID.</p><ul><li>Only private networks can be configured, and a private network in the same region as the instance must be selected. Log in to the <a href="https://console.cloud.tencent.com/vpc">VPC console</a> to obtain a used private network ID.</li><li>After successful instance creation, VPC replacement is allowed. For detailed operations, see <a href="https://www.tencentcloud.com/document/product/239/30910?from_cn_redirect=1">Changing the Network</a>.</li></ul>
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>Subnet ID of the VPC.</p><ul><li>You must specify a subnet within the selected private network. Log in to the <a href="https://console.cloud.tencent.com/vpc">VPC console</a> to obtain the subnet ID.</li><li>After the instance is successfully created, replacement of the private network and subnet is allowed. For detailed operations, please refer to <a href="https://www.tencentcloud.com/document/product/239/30910?from_cn_redirect=1">Network Change</a>.</li></ul>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Instance password. The requirements are as follows:</p><ul><li>Character count is [8,32].</li><li>Enter characters within [A,Z], [a,z], [0,9].</li><li>Special characters include: exclamation mark "!", at "@", pound sign "#", percent sign "%", caret "^", asterisk "*", brackets "()", underscore "_".</li><li>Cannot set a single letter or number.</li></ul>
         * @type {string || null}
         */
        this.Password = null;

        /**
         * <p>Instance tag information.</p>
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * <p>Auto-renewal flag.</p><ul><li>0: no auto-renewal.</li><li>1: auto-renewal.</li></ul>
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * <p>Indicates whether to automatically select voucher.</p><ul><li>1: Yes.</li><li>0: No. Default is 0.</li></ul>
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * <p>Instance type.</p><ul><li>1: Formal instance.</li><li>3: Read-only instance.</li><li>4: Disaster recovery instance.</li><li>5: Clone instance. Note: RestoreTime is a required item when you clone an instance.</li></ul>
         * @type {number || null}
         */
        this.Clone = null;

        /**
         * <p>Parent instance ID.</p><ul><li>When the <strong>Clone</strong> parameter is 3 or 4, that is, the instance is read-only or a disaster recovery instance, this parameter must be configured.</li><li>Log in to the <a href="https://console.cloud.tencent.com/mongodb">MongoDB console</a> and copy the parent instance ID in the instance list.</li></ul>
         * @type {string || null}
         */
        this.Father = null;

        /**
         * <p>Security group ID. Log in to the <a href="https://console.cloud.tencent.com/vpc/security-group">security group console</a> to obtain the ID of the security group within the same region as the database instance.</p>
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * <p>Rollback time of the cloned instance. It is required when the Clone value is 5 or 6. - This parameter is required for cloned instances. Format: 2021-08-13 16:30:00. - Rollback time range: Only data within the last 7 days can be rolled back.</p>
         * @type {string || null}
         */
        this.RestoreTime = null;

        /**
         * <p>Instance name. Only Chinese, English, digits, underscores (_), and hyphens (-) are supported, with a maximum length of 128 characters. When purchasing database instances in batches, you can efficiently set instance names by using custom pattern strings and automatically ascending numeric suffixes.</p><ul><li>Basic mode: prefix + automatic ascending number (starting from 1 by default). Only a custom instance name prefix is required for <strong>lnstanceName</strong>. For example, it can be set to cmgo. If the purchase quantity is set to 5, after purchase, the instances will be sequentially named cmgo1, cmgo2, cmgo3, cmgo4, and cmgo5, respectively.</li><li>Custom starting number mode: prefix + {R:x} (x is the custom starting number). <strong>InstanceName</strong> requires "prefix{R:x}". For example, cmgo{R:3}. If the purchase quantity is set to 5, the instance names will be cmgo3, cmgo4, cmgo5, cmgo6, and cmgo7.</li><li>Composite pattern string: prefix1{R:x} + prefix2{R:y} + ⋯ + fixed suffix, where x and y are the starting numbers for each prefix. <strong>InstanceName</strong> requires a composite pattern string. For example, cmgo{R:10}_node{R:12}_db. If the batch purchase quantity is set to 5, the instance names will be cmgo10_node12_db, cmgo11_node13_db, cmgo12_node14_db, cmgo13_node15_db, and cmgo14_node16_db.</li></ul>
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * <p>For cloud database instances in multi-AZ deployment, specify the availability zone list.</p><ul><li>For instances in multi-AZ deployment mode, the <strong>Zone</strong> parameter specifies the primary AZ, and <strong>AvailabilityZoneList</strong> specifies all AZs, including the primary AZ. Format: [ap-guangzhou-2,ap-guangzhou-3,ap-guangzhou-4].</li><li>Use the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to access cloud databases and obtain availability zone information planned for different regions, so that you can assign valid AZs.</li><li>Nodes in multi-AZ deployment can only be deployed in 3 different availability zones. Deploying most nodes of a cluster in the same availability zone is not supported. For example, a 3-node cluster does not support deploying 2 nodes in the same zone.</li></ul>
         * @type {Array.<string> || null}
         */
        this.AvailabilityZoneList = null;

        /**
         * <p>Number of Mongos node CPU cores. Valid values: 1, 2, 4, 8, and 16. This parameter is required during sharded cluster instance purchase.</p>
         * @type {number || null}
         */
        this.MongosCpu = null;

        /**
         * <p>Mongos node memory size.</p><ul><li>This parameter is required during sharded cluster instance purchase.</li><li>Unit: GB. Valid values: 2 (for 1 core), 4 (for 2 cores), 8 (for 4 cores), 16 (for 8 cores), and 32 (for 16 cores).</li></ul>
         * @type {number || null}
         */
        this.MongosMemory = null;

        /**
         * <p>Number of Mongos nodes. This parameter is required during sharded cluster instance purchase.</p><ul><li>For single-AZ deployment instances, the quantity range is [3,32].</li><li>For instances deployed across multiple availability zones, the quantity range is [6,32].</li></ul>
         * @type {number || null}
         */
        this.MongosNodeNum = null;

        /**
         * <p>Number of read-only nodes. Value ranges from 0 to 5.</p>
         * @type {number || null}
         */
        this.ReadonlyNodeNum = null;

        /**
         * <p>Array of AZs of read-only nodes. This parameter is required for instances in multi-AZ deployment mode when <strong>ReadonlyNodeNum</strong> is not set to <strong>0</strong>.</p>
         * @type {Array.<string> || null}
         */
        this.ReadonlyNodeAvailabilityZoneList = null;

        /**
         * <p>Availability zone of the Hidden node. To deploy instances across availability zones, you must configure this parameter.</p>
         * @type {string || null}
         */
        this.HiddenZone = null;

        /**
         * <p>Parameter template ID.</p><ul><li>A parameter template is a collection of preset specific parameters applicable to quick configuration of new MongoDB instances. Proper use of parameter templates can effectively improve database deployment efficiency and operating performance.</li><li>The parameter template ID can be obtained through the <a href="https://www.tencentcloud.com/document/product/240/109155?from_cn_redirect=1">DescribeDBInstanceParamTpl</a> API. Please select the parameter template ID corresponding to your instance version and architecture.</li></ul>
         * @type {string || null}
         */
        this.ParamTemplateId = null;

        /**
         * <p>Instance CPU core size. Unit: C. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to obtain specific saleable CPU specifications.<br>Note: CPU size must be set for common I Instance Type.</p>
         * @type {number || null}
         */
        this.CpuCore = null;

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
        this.CpuCore = 'CpuCore' in params ? params.CpuCore : null;

    }
}

/**
 * DescribeCurrentOp response structure.
 * @class
 */
class DescribeCurrentOpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of operations meeting the query conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of the current operations.
         * @type {Array.<CurrentOp> || null}
         */
        this.CurrentOps = null;

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

        if (params.CurrentOps) {
            this.CurrentOps = new Array();
            for (let z in params.CurrentOps) {
                let obj = new CurrentOp();
                obj.deserialize(params.CurrentOps[z]);
                this.CurrentOps.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Whether the modification on the parameter configuration takes effect.
- true: the modified parameter value has taken effect.
- false: execution failed.

         * @type {boolean || null}
         */
        this.Changed = null;

        /**
         * This parameter is temporarily meaningless (to be compatible with the earlier versions, reserve this parameter at the frontend).
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
 * SetInstanceMaintenance response structure.
 * @class
 */
class SetInstanceMaintenanceResponse extends  AbstractModel {
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
 * DescribeAuditLogs request structure.
 * @class
 */
class DescribeAuditLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, in the format of cmgo-xftsghuy. It is the same as the instance ID displayed on the TencentDB console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time, format: "2017-07-12 10:29:20".
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, format: "2017-07-12 10:29:20".
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Filter conditions. You can filter logs based on these conditions.
         * @type {AuditLogFilter || null}
         */
        this.Filter = null;

        /**
         * Pagination parameter indicates the number of returned data entries. Default value is 100. Maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting method of the audit log.
<ul><li>ASC: ascending.</li><li>DESC: descending order.</li></ul>
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Sorting field of the audit log, including:
<ul><li>timestamp: Timestamp.</li>
<li>affectRows: Number of affected rows.</li>
<li>execTime: Execution time.</li></ul>
         * @type {string || null}
         */
        this.OrderBy = null;

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

        if (params.Filter) {
            let obj = new AuditLogFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

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
 * KillOps request structure.
 * @class
 */
class KillOpsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Operation to be terminated.
         * @type {Array.<Operation> || null}
         */
        this.Operations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Operations) {
            this.Operations = new Array();
            for (let z in params.Operations) {
                let obj = new Operation();
                obj.deserialize(params.Operations[z]);
                this.Operations.push(obj);
            }
        }

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
 * DescribeAuditLogFiles response structure.
 * @class
 */
class DescribeAuditLogFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible audit log files.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Audit log file details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AuditLogFile> || null}
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
                let obj = new AuditLogFile();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
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
 * DescribeSRVConnectionDomain response structure.
 * @class
 */
class DescribeSRVConnectionDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * srv domain information of the current instance.
         * @type {string || null}
         */
        this.Domain = null;

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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeBackupRules response structure.
 * @class
 */
class DescribeBackupRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Retention period for backup data, in days.
         * @type {number || null}
         */
        this.BackupSaveTime = null;

        /**
         * Backup frequency. Backup interval in hours. Value: 12, 24.
         * @type {number || null}
         */
        this.BackupFrequency = null;

        /**
         * Automatic backup start time.
         * @type {number || null}
         */
        this.BackupTime = null;

        /**
         * Backup mode.
- 0: logical backup.
- 1: physical backup.
-3: Snapshot backup.
**Description**:
1. The General Edition instance supports logical and physical backup. The Cloud Disk Edition instance supports physical and snapshot backup, but does not support logical backup currently.
2. Physical backup is not supported when storage encryption is enabled for the instance.
         * @type {number || null}
         */
        this.BackupMethod = null;

        /**
         * Day of week for backup, 0-6, separated by commas
         * @type {string || null}
         */
        this.ActiveWeekdays = null;

        /**
         * Long-term backup period. weekly - by week, monthly - by month, empty means not enabled.
         * @type {string || null}
         */
        this.LongTermInterval = null;

        /**
         * Date of long-term backup, week 0-6, month 1-31
         * @type {string || null}
         */
        this.LongTermActiveDays = null;

        /**
         * Long-term backup retention period
         * @type {number || null}
         */
        this.LongTermExpiredDays = null;

        /**
         * Incremental backup retention period
         * @type {number || null}
         */
        this.OplogExpiredDays = null;

        /**
         * Backup version. 0 - Old backup method, 1 - Advanced backup.
         * @type {number || null}
         */
        this.BackupVersion = null;

        /**
         * Backup size
         * @type {BackupTotalSize || null}
         */
        this.BackupTotalSize = null;

        /**
         * alarm limit
         * @type {number || null}
         */
        this.AlertThreshold = null;

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
        this.BackupSaveTime = 'BackupSaveTime' in params ? params.BackupSaveTime : null;
        this.BackupFrequency = 'BackupFrequency' in params ? params.BackupFrequency : null;
        this.BackupTime = 'BackupTime' in params ? params.BackupTime : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.ActiveWeekdays = 'ActiveWeekdays' in params ? params.ActiveWeekdays : null;
        this.LongTermInterval = 'LongTermInterval' in params ? params.LongTermInterval : null;
        this.LongTermActiveDays = 'LongTermActiveDays' in params ? params.LongTermActiveDays : null;
        this.LongTermExpiredDays = 'LongTermExpiredDays' in params ? params.LongTermExpiredDays : null;
        this.OplogExpiredDays = 'OplogExpiredDays' in params ? params.OplogExpiredDays : null;
        this.BackupVersion = 'BackupVersion' in params ? params.BackupVersion : null;

        if (params.BackupTotalSize) {
            let obj = new BackupTotalSize();
            obj.deserialize(params.BackupTotalSize)
            this.BackupTotalSize = obj;
        }
        this.AlertThreshold = 'AlertThreshold' in params ? params.AlertThreshold : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifySRVConnectionUrl response structure.
 * @class
 */
class ModifySRVConnectionUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start the task ID.
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
 * Audit log filter criteria
 * @class
 */
class AuditLogFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Client IP address.
         * @type {Array.<string> || null}
         */
        this.Host = null;

        /**
         * Username.
         * @type {Array.<string> || null}
         */
        this.User = null;

        /**
         * Execution time. Unit: ms. Filter audit logs with execution time more than this value.
         * @type {number || null}
         */
        this.ExecTime = null;

        /**
         * Number of affected rows. Filter audit logs with affected rows more than this value.
         * @type {number || null}
         */
        this.AffectRows = null;

        /**
         * Operation type.
         * @type {Array.<string> || null}
         */
        this.Atype = null;

        /**
         * Execution result.
         * @type {Array.<string> || null}
         */
        this.Result = null;

        /**
         * Filter logs using this keyword
         * @type {Array.<string> || null}
         */
        this.Param = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.User = 'User' in params ? params.User : null;
        this.ExecTime = 'ExecTime' in params ? params.ExecTime : null;
        this.AffectRows = 'AffectRows' in params ? params.AffectRows : null;
        this.Atype = 'Atype' in params ? params.Atype : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Param = 'Param' in params ? params.Param : null;

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
 * DescribeAuditLogs response structure.
 * @class
 */
class DescribeAuditLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible audit log entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Audit log details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AuditLog> || null}
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
                let obj = new AuditLog();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
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
 * DisableSRVConnectionUrl response structure.
 * @class
 */
class DisableSRVConnectionUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start the task ID.
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
 * DescribeBackupRules request structure.
 * @class
 */
class DescribeBackupRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
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
         * AZ corresponding to the node. For the currently supported AZs, see [Regions and AZs](https://www.tencentcloud.com/document/product/240/3637?from_cn_redirect=1).
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
 * SetAccountUserPrivilege response structure.
 * @class
 */
class SetAccountUserPrivilegeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
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
         * VPC ID after the switch. If the instance is using a basic network, this field is not required. The [DescribeDBInstances](https://www.tencentcloud.com/document/product/240/38568?from_cn_redirect=1) API can be called to obtain the VPC ID.
         * @type {string || null}
         */
        this.NewUniqVpcId = null;

        /**
         * VPC subnet ID after the switch. If the instance is using a basic network, this field is not required. The [DescribeDBInstances](https://www.tencentcloud.com/document/product/240/38568?from_cn_redirect=1) API can be called to obtain the subnet ID of the VPC.
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
         * <p>Order ID.</p>
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * <p>List of instance created IDs.</p>
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
 * EnableTransparentDataEncryption request structure.
 * @class
 */
class EnableTransparentDataEncryptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. For example, cmgo-p8vn****. Log in to the[TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb) to copy the instance ID from the instance list. Currently, the supported general versions include 4.4 and 5.0, and Cloud Disk Edition is not supported.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         *  Region where the [Key Management Service (KMS)](https://www.tencentcloud.com/document/product/573/18809?from_cn_redirect=1) instance is located. For example, ap-shanghai.
         * @type {string || null}
         */
        this.KmsRegion = null;

        /**
         * Key ID. If the parameter is left unspecified, there is no specific key ID, Tencent Cloud will generate the key automatically.
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

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
 * DeleteAccountUser request structure.
 * @class
 */
class DeleteAccountUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID for the account to be deleted. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.

         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Configures the name of the account to be deleted.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Configures the password corresponding to the mongouser account. mongouser is the default account of the system. Enter the password corresponding to it.
         * @type {string || null}
         */
        this.MongoUserPassword = null;

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
        this.MongoUserPassword = 'MongoUserPassword' in params ? params.MongoUserPassword : null;

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
- MONGO_80_WT: version of the MongoDB 8.0 WiredTiger storage engine.
         * @type {string || null}
         */
        this.MongoVersionCode = null;

        /**
         * Digital version corresponding to the instance version.
- MongoDB version 3.2: 2.
- MongoDB version 3.6: 4.
- MongoDB version 4.0: 5.
- MongoDB version 4.2: 9.
- MongoDB version 4.4: 10.
- MongoDB version 5.0: 11.
- MongoDB version 6.0: 12.
- MongoDB version 7.0: 13.
- MongoDB version 8.0: 14.
         * @type {number || null}
         */
        this.MongoVersionValue = null;

        /**
         * Instance version information. Valid values: 4.2, 4.4, 5.0, 6.0, 7.0, and 8.0.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Storage engine. Only WiredTiger is supported.
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
         * Specifies the node name for querying slow logs. The [DescribeDBInstanceNodeProperty](https://www.tencentcloud.com/document/product/240/82022?from_cn_redirect=1) API can be called to query the node name.
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
         * The newly upgraded database version. Currently supported versions are as follows. Upgrade from an earlier version to a high version is supported. Cross-version upgrade is not supported.
- MONGO_40_WT: Version 4.0.
- MONGO_42_WT: Version 4.2.
- MONGO_44_WT: Version 4.4.
- MONGO_50_WT: Version 5.0.
- MONGO_60_WT: Version 6.0.
-MONGO_70_WT: Version 7.0.
- MONGO_80_WT: Version 8.0.
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * Specify whether to perform the upgrade during the maintenance period.
-0: Upgrade now.
- 1: Upgrade during the maintenance window.
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
 * CreateAccountUser response structure.
 * @class
 */
class CreateAccountUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creates a task ID.
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
         * Instance memory size after configuration changes, in GB. The [DescribeSpecInfo](https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1) API can be called to obtain the specific sales specifications for memory.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size after configuration changes, in GB. The [DescribeSpecInfo](https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1) API can be called to obtain the maximum and minimum disk sizes corresponding to each CPU specification.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Number of instance nodes. The [DescribeSpecInfo](https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1) API can be called to obtain the number of instance nodes.
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

        /**
         * CPU size after configuration changes, in C. The [DescribeSpecInfo](https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1) API can be called to obtain the specific sales specifications for CPU.
Note: For Common I Instance Type pricing, you need to pass in the CPU core size corresponding to the memory.
         * @type {number || null}
         */
        this.Cpu = null;

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
        this.Cpu = 'Cpu' in params ? params.Cpu : null;

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
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Backup method.</p><ul><li>0: Automatic backup.</li><li>1: Manual backup.</li></ul>
         * @type {number || null}
         */
        this.BackupType = null;

        /**
         * <p>Backup file name.</p>
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * <p>Backup task notes.</p>
         * @type {string || null}
         */
        this.BackupDesc = null;

        /**
         * <p>Backup file size, in KB.</p>
         * @type {number || null}
         */
        this.BackupSize = null;

        /**
         * <p>Backup start time.</p>
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * <p>Backup end time.</p>
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * <p>Backup status.</p><ul><li>1: Backup in progress.</li><li>2: Backup successful.</li></ul>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * <p>Backup method.</p><ul><li>0: Logical backup.</li><li>1: Physical backup.</li><li>3: Snapshot backup.<br><strong>Description:</strong></li><li>The General Edition instance supports logical and physical backup. The Cloud Disk Edition instance supports physical and snapshot backup, but does not support logical backup currently.</li><li>If storage encryption is activated for the instance, physical backup is not supported.</li></ul>
         * @type {number || null}
         */
        this.BackupMethod = null;

        /**
         * <p>Backup record ID.</p>
         * @type {number || null}
         */
        this.BackId = null;

        /**
         * <p>Backup deletion time.</p>
         * @type {string || null}
         */
        this.DeleteTime = null;

        /**
         * <p>Backup region in a different location.</p>
         * @type {string || null}
         */
        this.BackupRegion = null;

        /**
         * <p>Rollback time supported by the backup.</p>
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
 * Current operation on the TencentDB for MongoDB instance.
 * @class
 */
class CurrentOp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation number.
         * @type {number || null}
         */
        this.OpId = null;

        /**
         * Namespace where the operation is located, in the format of db.collection.
         * @type {string || null}
         */
        this.Ns = null;

        /**
         * Execution statement of the operation.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Operation type.
- none: special status; idle connections or internal tasks.
- update: update data.
- insert: insertion operation.
- query: query operation.
- command: command operation.
- getmore: obtain more data.
- remove: deletion operation.
- killcursors: operation of releasing the query cursor.
         * @type {string || null}
         */
        this.Op = null;

        /**
         * Name of the shard where the operation is performed.
         * @type {string || null}
         */
        this.ReplicaSetName = null;

        /**
         * Name of the node where the operation is performed.
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * Detailed information about the operation.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Node role.
- primary: primary node.
- secondary: secondary node.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Execution time of the operation, in ms.
         * @type {number || null}
         */
        this.MicrosecsRunning = null;

        /**
         * Information about the node where the current operation is performed.
         * @type {string || null}
         */
        this.ExecNode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpId = 'OpId' in params ? params.OpId : null;
        this.Ns = 'Ns' in params ? params.Ns : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Op = 'Op' in params ? params.Op : null;
        this.ReplicaSetName = 'ReplicaSetName' in params ? params.ReplicaSetName : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.State = 'State' in params ? params.State : null;
        this.MicrosecsRunning = 'MicrosecsRunning' in params ? params.MicrosecsRunning : null;
        this.ExecNode = 'ExecNode' in params ? params.ExecNode : null;

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
         * <p>Instance ID. Log in to the <a href="https://console.cloud.tencent.com/mongodb">MongoDB console</a> and copy the instance ID from the instance list.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Memory size after instance configuration modification. Unit: GB. The current instance memory size is used by default if this parameter is left blank. For supported memory specifications, please refer to <a href="https://www.tencentcloud.com/document/product/240/64125?from_cn_redirect=1">product specifications</a>.<br><strong>Note</strong>: Memory and disk configurations should be upgraded or downgraded at the same time, meaning that Memory and Volume should be modified at the same time.</p>
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * <p>Hard disk size after instance configuration modification. Unit: GB. The current instance disk size is used by default if this parameter is left blank. For supported disk capacity, please refer to <a href="https://www.tencentcloud.com/document/product/240/64125?from_cn_redirect=1">product specification</a>.</p><ul><li>Memory and disk configurations should be upgraded or downgraded at the same time, meaning that Memory and Volume should be modified simultaneously.</li><li>When downgrading, the disk capacity after modification must be greater than 1.2 times the used disk capacity.</li></ul>
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * <p>(Abandoned) Please use the standalone ResizeOplog API to complete.</p><p>Oplog size after instance configuration change.</p><ul><li>Unit: GB.</li><li>Default oplog capacity used is 10% of disk space. The system allows oplog capacity settings ranging from 10% to 90% of disk space.</li></ul>
         * @type {number || null}
         */
        this.OplogSize = null;

        /**
         * <p>Number of mongod nodes after instance change (excluding read-only nodes).</p><ul><li>Replica set node count: Use the MinNodeNum and MaxNodeNum parameters in the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API response to obtain the node count range.</li><li>Number of shard nodes in a sharded cluster: Use the MinReplicateSetNodeNum and MaxReplicateSetNodeNum parameters in the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API response to obtain the node count range.<br><strong>Note</strong>: When modifying the CPU or memory specifications of mongod or mongos, you may not configure this parameter or enter the current number of mongod or mongos nodes (excluding read-only nodes).</li></ul>
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * <p>Number of shards after instance change.</p><ul><li>The value range for the number of instance shards can be obtained through the response parameters <strong>MinReplicateSetNum</strong> and <strong>MaxReplicateSetNum</strong> of the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API.</li><li>Only allow adding shards, not reducing them.</li></ul>
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * <p>Switch time for instance configuration change.</p><ul><li>0: Immediately execute the configuration modification task upon completion of adjustment. Default is 0.</li><li>1: Execute the configuration modification task within the maintenance window.<br><strong>Note</strong>: Adjusting the number of nodes and shard quantity is unsupported within the <b>maintenance window</b>.</li></ul>
         * @type {number || null}
         */
        this.InMaintenance = null;

        /**
         * <p>Memory size of mongos after sharding instance configuration change. Unit: GB. For instance support specifications, see <a href="https://www.tencentcloud.com/document/product/240/64125?from_cn_redirect=1">product specification</a>.</p>
         * @type {string || null}
         */
        this.MongosMemory = null;

        /**
         * <p>List of nodes to be added, containing the node type and AZ information.</p>
         * @type {Array.<AddNodeList> || null}
         */
        this.AddNodeList = null;

        /**
         * <p>Delete node list.<br><strong>Note</strong>: Based on the consistency principle of sharded instance nodes, when deleting shard instance nodes, only need to specify the node corresponding to shard 0, for example: cmgo-9nl1czif_0-node-readonly0 will delete the first read-only node of each shard.</p>
         * @type {Array.<RemoveNodeList> || null}
         */
        this.RemoveNodeList = null;

        /**
         * <p>CPU size after instance configuration changes. Unit: C. If empty, the default value is the current CPU size of the instance. For currently supported CPU specifications, see <a href="https://www.tencentcloud.com/document/product/240/64125?from_cn_redirect=1">Product Specifications</a>.</p>
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * <p>The product specification type after instance configuration change. If empty, the default value is the current instance product specification type.<br>Currently supported product specification types are as follows:<br>Recommended product specification types:</p><ul><li>GE.LD.T1: Local disk (Common I).</li><li>GE.CD.T1: Cloud disk (Common I).</li></ul><p>Product allowlist specification types:</p><ul><li>HIO10G: Local disk (High IO 10G).</li><li>HCD: Cloud disk (Cloud Disk Edition).</li></ul><p>Note:</p><ol><li>Allowlist specification types are controlled by allowlist. If needed, <a href="https://console.cloud.tencent.com/workorder/category">submit a ticket</a> to apply.</li><li>Common I cannot be changed to allowlist specification types.</li></ol>
         * @type {string || null}
         */
        this.MachineCode = null;

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
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;

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
 * 
 * @class
 */
class Auth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission information of the current account.
- 0: no permissions.
- 1: read-only.
- 3: read-write.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Mask = null;

        /**
         * Specifies the name of the database that has the current account permissions.
- \*: indicates all databases.
- db.name: indicates the database with a specific name.
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
        this.Mask = 'Mask' in params ? params.Mask : null;
        this.NameSpace = 'NameSpace' in params ? params.NameSpace : null;

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
         * Specifies the account name for which the password needs to be changed. The [DescribeAccountUsers](https://www.tencentcloud.com/document/product/240/74804) API can be called to obtain the account list and copy the account name for which the password needs to be changed.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Specifies a new password for the account. Password complexity requirements:
- It should contain 8-32 characters.
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
 * ModifyInstanceAz request structure.
 * @class
 */
class ModifyInstanceAzRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID, such as cmgo-p8vn****. Log in to the <a href="https://console.cloud.tencent.com/mongodb">MongoDB console</a> and copy the instance ID from the instance list.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Availability zone ID where the primary node is located. For the method for obtaining, please see <a href="https://www.tencentcloud.com/document/product/240/3637?from_cn_redirect=1">Regions and Availability Zones</a>.</p>
         * @type {string || null}
         */
        this.PrimaryNodeZone = null;

        /**
         * <p>ID list of the availability zone where the secondary node resides.<br><strong>Note</strong>: It cannot contain the availability zones where the primary node and Hidden nodes reside.</p>
         * @type {Array.<string> || null}
         */
        this.SecondaryNodeZone = null;

        /**
         * <p>If the current instance has no configuration for Hidden nodes, this parameter is not required.</p>
         * @type {string || null}
         */
        this.HiddenNodeZone = null;

        /**
         * <p>List of AZ IDs where read-only nodes reside.<br><strong>Note</strong>: If the current instance contains read-only nodes, this parameter is required.</p>
         * @type {Array.<string> || null}
         */
        this.ReadonlyNodeZone = null;

        /**
         * <p>Specify the time policy for executing the availability zone switch.</p><ul><li>0: Execute the switch immediately.</li><li>1: Execute the switch within the set maintenance window. For details, please refer to <a href="https://www.tencentcloud.com/document/product/240/19910?from_cn_redirect=1">setting instance maintenance time</a>.</li></ul>
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
        this.PrimaryNodeZone = 'PrimaryNodeZone' in params ? params.PrimaryNodeZone : null;
        this.SecondaryNodeZone = 'SecondaryNodeZone' in params ? params.SecondaryNodeZone : null;
        this.HiddenNodeZone = 'HiddenNodeZone' in params ? params.HiddenNodeZone : null;
        this.ReadonlyNodeZone = 'ReadonlyNodeZone' in params ? params.ReadonlyNodeZone : null;
        this.InMaintenance = 'InMaintenance' in params ? params.InMaintenance : null;

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
 * EnableSRVConnectionUrl response structure.
 * @class
 */
class EnableSRVConnectionUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start the task ID.
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
         * <p>Order ID</p>
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * <p>List of instance created IDs</p>
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
 * mongodb public network service node information.
 * @class
 */
class WanServiceNodeList extends  AbstractModel {
    constructor(){
        super();

        /**
         * vip and port information of the instance node.
         * @type {string || null}
         */
        this.VipVport = null;

        /**
         * The listening port of a CLB listener ranges from 1 to 65535.
         * @type {string || null}
         */
        this.ListenerPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VipVport = 'VipVport' in params ? params.VipVport : null;
        this.ListenerPort = 'ListenerPort' in params ? params.ListenerPort : null;

    }
}

/**
 * CreateAccountUser request structure.
 * @class
 */
class CreateAccountUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/MongoDB), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * New account name. The format requirements are as follows:
- The value range for the character length is [1, 64].
- Allowed characters include uppercase letters, lowercase letters, digits (1–9), underscores (\_), and hyphens (-).
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * New account password. The password complexity requirements are as follows:
- The value range for the character length is [8, 32].
- It should include at least two of the following: letters, digits, and special characters (the exclamation mark (!), at sign (@), number sign (#), percent sign (%), caret (^), asterisk (*), parentheses (), and underscore (_)).
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Password corresponding to the mongouser account. mongouser is the default account of the system; it indicates the password set during instance creation.
         * @type {string || null}
         */
        this.MongoUserPassword = null;

        /**
         * Account remarks.
         * @type {string || null}
         */
        this.UserDesc = null;

        /**
         * Read/Write permission information of the account.
         * @type {Array.<Auth> || null}
         */
        this.AuthRole = null;

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
        this.MongoUserPassword = 'MongoUserPassword' in params ? params.MongoUserPassword : null;
        this.UserDesc = 'UserDesc' in params ? params.UserDesc : null;

        if (params.AuthRole) {
            this.AuthRole = new Array();
            for (let z in params.AuthRole) {
                let obj = new Auth();
                obj.deserialize(params.AuthRole[z]);
                this.AuthRole.push(obj);
            }
        }

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
         * Specifies the backup file name for filtering download tasks of the specified file. The [DescribeDBBackups](https://www.tencentcloud.com/document/product/240/38574?from_cn_redirect=1) API can be called to obtain the backup file name.
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
 * ModifySRVConnectionUrl request structure.
 * @class
 */
class ModifySRVConnectionUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Custom instance access domain name.
         * @type {string || null}
         */
        this.CustomDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CustomDomain = 'CustomDomain' in params ? params.CustomDomain : null;

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
 * DisableSRVConnectionUrl request structure.
 * @class
 */
class DisableSRVConnectionUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
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
 * DescribeSRVConnectionDomain request structure.
 * @class
 */
class DescribeSRVConnectionDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
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
         * <p>Price</p>
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
 * CloseAuditService request structure.
 * @class
 */
class CloseAuditServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, in the format of cmgo-test1234. It is the same as the instance ID displayed on the TencentDB console page.
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
 * EnableWanService request structure.
 * @class
 */
class EnableWanServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * CLB ID.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Node and listening port information.
         * @type {Array.<WanServiceNodeList> || null}
         */
        this.NodeList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.NodeList) {
            this.NodeList = new Array();
            for (let z in params.NodeList) {
                let obj = new WanServiceNodeList();
                obj.deserialize(params.NodeList[z]);
                this.NodeList.push(obj);
            }
        }

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
- Pay-as-you-go instance. It can be obtained through the output parameter **DealId** of the [CreateDBInstanceHour](https://www.tencentcloud.com/document/product/240/38570?from_cn_redirect=1) API.
- Yearly/monthly subscription instance. It can be obtained through the output parameter **DealId** of the [CreateDBInstance](https://www.tencentcloud.com/document/product/240/38571?from_cn_redirect=1) API.
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
         * Specifies the ID of the asynchronous request to be queried. When an asynchronous process is involved in the API operation (such as [CreateBackupDBInstance](https://www.tencentcloud.com/document/product/240/46599?from_cn_redirect=1)), the response value of AsyncRequestId is the ID to be filled in for this parameter.
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
         * Name of the backup file to be downloaded. The [DescribeDBBackups](https://www.tencentcloud.com/document/product/240/38574?from_cn_redirect=1) API can be called to obtain it.
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
 * CreateDBInstanceHour request structure.
 * @class
 */
class CreateDBInstanceHourRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance memory size. Unit: GB. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to obtain specific saleable memory specifications.</p>
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * <p>Instance disk size. Unit: GB. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to obtain the maximum and minimum disk sizes corresponding to each CPU specification.</p>
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * <ul><li>Specifies the number of replica sets during replica set instance creation. This parameter can only be 1.</li><li>Specifies the number of shards during sharded cluster instance creation. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to query the range of shard quantity. The parameters MinReplicateSetNum and MaxReplicateSetNum in the returned data structure SpecItems correspond to the minimum value and maximum value, respectively.</li></ul>
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * <ul><li>Specifies the number of primary and secondary nodes for each replica set during replica set instance creation. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to obtain the maximum and minimum number of nodes supported for each replica set.</li><li>Specifies the number of primary and secondary nodes for each shard during sharded cluster instance creation. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to obtain the maximum and minimum number of nodes supported for each shard.</li></ul>
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * <p>Refers to version information. For supported versions, use the interface <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> to query.</p><ul><li>MONGO_40_WT: MongoDB 4.0 WiredTiger engine version.</li><li>MONGO_42_WT: MongoDB 4.2 WiredTiger engine version.</li><li>MONGO_44_WT: MongoDB 4.4 WiredTiger engine version.</li><li>MONGO_50_WT: MongoDB 5.0 WiredTiger engine version.</li><li>MONGO_60_WT: MongoDB 6.0 WiredTiger engine version.</li><li>MONGO_70_WT: MongoDB 7.0 WiredTiger engine version.</li><li>MONGO_80_WT: MongoDB 8.0 WiredTiger engine version.</li></ul>
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * <p>Recommended product specification types:</p><ul><li>GE.LD.T1: Local disk (Common I).</li><li>GE.CD.T1: Cloud disk (Common I).</li></ul><p>Product allowlist specification types:</p><ul><li>HIO10G: Local disk (High IO 10G).</li><li>HCD: Cloud disk (Cloud disk edition).</li></ul><p>Note: Allowlist specification types are under allowlist control. If needed, <a href="https://console.cloud.tencent.com/workorder/category">submit a ticket</a> to apply.</p>
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * <p>Number of instances. The minimum value is 1, and the maximum value is 30.</p>
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * <p>AZ information. The input format must be ap-guangzhou-2.</p><ul><li>For details, use the interface <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> to obtain them.</li><li>This parameter is the primary AZ. If multi-AZ deployment is used, Zone must be one of AvailabilityZoneList.</li></ul>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Instance architecture type.</p><ul><li>REPLSET (replica set)</li><li>SHARD (sharded cluster)</li></ul>
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * <p>VPC ID.</p><ul><li>Only supports configuration of private networks. A private network in the same region as the instance must be selected. Log in to the <a href="https://console.cloud.tencent.com/vpc">VPC console</a> to obtain a usable VPC ID.</li><li>After successful instance creation, VPC replacement is allowed. For detailed operations, see <a href="https://www.tencentcloud.com/document/product/239/30910?from_cn_redirect=1">Changing the Network</a>.</li></ul>
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>Subnet ID of the VPC.</p><ul><li>You must specify a subnet within the selected private network. Log in to the <a href="https://console.cloud.tencent.com/vpc">VPC console</a> to obtain the subnet ID.</li><li>After the instance is successfully created, replacement of the private network and subnet is allowed. For detailed operations, please refer to <a href="https://www.tencentcloud.com/document/product/239/30910?from_cn_redirect=1">Network Change</a>.</li></ul>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Instance password. The requirements are as follows:</p><ul><li>Character count is [8,32].</li><li>Enter characters within [A,Z], [a,z], [0,9].</li><li>Special characters include: exclamation mark "!", at "@", pound sign "#", percent sign "%", caret "^", asterisk "*", brackets "()", underscore "_".</li><li>Cannot set a single letter or number.</li></ul>
         * @type {string || null}
         */
        this.Password = null;

        /**
         * <p>Project ID.</p><ul><li>If this parameter is not set, the default project is used.</li><li>You can obtain the project ID on the <a href="https://console.cloud.tencent.com/project">MongoDB console project management</a> page.</li></ul>
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * <p>Instance tag information.</p>
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * <p>Instance type.</p><ul><li>1: Formal instance.</li><li>3: Read-only instance.</li><li>4: Disaster recovery instance.</li><li>5: Clone instance. Note: RestoreTime is a required item when you clone an instance.</li></ul>
         * @type {number || null}
         */
        this.Clone = null;

        /**
         * <p>Parent instance ID.</p><ul><li>When the <strong>Clone</strong> parameter is 3 or 4, that is, the instance is read-only or a disaster recovery instance, this parameter must be configured.</li><li>Log in to the <a href="https://console.cloud.tencent.com/mongodb">MongoDB console</a> and copy the parent instance ID in the instance list.</li></ul>
         * @type {string || null}
         */
        this.Father = null;

        /**
         * <p>Security group ID. Log in to the <a href="https://console.cloud.tencent.com/vpc/security-group">security group console</a> to obtain the ID of the security group within the same region as the database instance.</p>
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * <p>Rollback time of the cloned instance.</p><ul><li>This parameter is required for cloned instances. Format: 2021-08-13 16:30:00.</li><li>Rollback time range: Only data within the last 7 days can be rolled back.</li></ul>
         * @type {string || null}
         */
        this.RestoreTime = null;

        /**
         * <p>Instance name. Only Chinese, English, digits, underscores (_), and hyphens (-) are supported, with a maximum length of 128 characters. When purchasing database instances in batches, you can efficiently set instance names by using custom pattern strings and automatically ascending numeric suffixes.</p><ul><li>Basic mode: prefix + automatic ascending number (starting from 1 by default). Only a custom instance name prefix is required for <strong>lnstanceName</strong>. For example, it can be set to cmgo. If the purchase quantity is set to 5, after purchase, the instances will be sequentially named cmgo1, cmgo2, cmgo3, cmgo4, and cmgo5, respectively.</li><li>Custom starting number mode: prefix + {R:x} (x is the custom starting number). <strong>InstanceName</strong> requires "prefix{R:x}". For example, cmgo{R:3}. If the purchase quantity is set to 5, the instance names will be cmgo3, cmgo4, cmgo5, cmgo6, and cmgo7.</li><li>Composite pattern string: prefix1{R:x} + prefix2{R:y} + ⋯ + fixed suffix, where x and y are the starting numbers for each prefix. <strong>InstanceName</strong> requires a composite pattern string. For example, cmgo{R:10}_node{R:12}_db. If the batch purchase quantity is set to 5, the instance names will be cmgo10_node12_db, cmgo11_node13_db, cmgo12_node14_db, cmgo13_node15_db, and cmgo14_node16_db.</li></ul>
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * <p>For cloud database instances in multi-AZ deployment, specify the availability zone list.</p><ul><li>For instances in multi-AZ deployment mode, the <strong>Zone</strong> parameter specifies the primary AZ, and <strong>AvailabilityZoneList</strong> specifies all AZs, including the primary AZ. Format: [ap-guangzhou-2,ap-guangzhou-3,ap-guangzhou-4].</li><li>Use the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to access cloud databases and obtain availability zone information planned for different regions, so that you can assign valid AZs.</li><li>Nodes in multi-AZ deployment can only be deployed in 3 different availability zones. Deploying most nodes of a cluster in the same availability zone is not supported. For example, a 3-node cluster does not support deploying 2 nodes in the same zone.</li></ul>
         * @type {Array.<string> || null}
         */
        this.AvailabilityZoneList = null;

        /**
         * <p>Number of Mongos node CPU cores. Valid values: 1, 2, 4, 8, and 16. This parameter is required during sharded cluster instance purchase.</p>
         * @type {number || null}
         */
        this.MongosCpu = null;

        /**
         * <p>Mongos node memory size.</p><ul><li>This parameter is required during sharded cluster instance purchase.</li><li>Unit: GB. Valid values: 2 (for 1 core), 4 (for 2 cores), 8 (for 4 cores), 16 (for 8 cores), and 32 (for 16 cores).</li></ul>
         * @type {number || null}
         */
        this.MongosMemory = null;

        /**
         * <p>Number of Mongos nodes. This parameter is required during sharded cluster instance purchase.</p><ul><li>For single-AZ deployment instances, the quantity range is [3,32].</li><li>For instances deployed across multiple availability zones, the quantity range is [6,32].</li></ul>
         * @type {number || null}
         */
        this.MongosNodeNum = null;

        /**
         * <p>Number of read-only nodes. Value ranges from 0 to 5.</p>
         * @type {number || null}
         */
        this.ReadonlyNodeNum = null;

        /**
         * <p>Array of AZs of read-only nodes. This parameter is required for instances in multi-AZ deployment mode when <strong>ReadonlyNodeNum</strong> is not set to <strong>0</strong>.</p>
         * @type {Array.<string> || null}
         */
        this.ReadonlyNodeAvailabilityZoneList = null;

        /**
         * <p>Availability zone of the Hidden node. To deploy instances across availability zones, you must configure this parameter.</p>
         * @type {string || null}
         */
        this.HiddenZone = null;

        /**
         * <p>Parameter template ID.</p><ul><li>A parameter template is a collection of preset specific parameters applicable to quick configuration of new MongoDB instances. Proper use of parameter templates can effectively improve database deployment efficiency and operating performance.</li><li>The parameter template ID can be obtained through the <a href="https://www.tencentcloud.com/document/product/240/109155?from_cn_redirect=1">DescribeDBInstanceParamTpl</a> API. Please select the parameter template ID corresponding to your instance version and architecture.</li></ul>
         * @type {string || null}
         */
        this.ParamTemplateId = null;

        /**
         * <p>Instance CPU core size. Unit: C. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to obtain specific saleable CPU specifications.<br>Note: CPU size must be set for common I Instance Type.</p>
         * @type {number || null}
         */
        this.CpuCore = null;

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
        this.CpuCore = 'CpuCore' in params ? params.CpuCore : null;

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
 * RestoreDBInstance response structure.
 * @class
 */
class RestoreDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Rollback task process ID.</p>
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
 * Total size of instance backup
 * @class
 */
class BackupTotalSize extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total size of full backup, in bytes
         * @type {number || null}
         */
        this.SnapshotSize = null;

        /**
         * Incremental backup total size
         * @type {number || null}
         */
        this.OplogSize = null;

        /**
         * free quota
         * @type {number || null}
         */
        this.FreeQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotSize = 'SnapshotSize' in params ? params.SnapshotSize : null;
        this.OplogSize = 'OplogSize' in params ? params.OplogSize : null;
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;

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
 * CloseAuditService response structure.
 * @class
 */
class CloseAuditServiceResponse extends  AbstractModel {
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
 * DescribeCurrentOp request structure.
 * @class
 */
class DescribeCurrentOpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID to be queried. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Namespace where the operation belongs, in the format of db.collection.
         * @type {string || null}
         */
        this.Ns = null;

        /**
         * Sets the query and filtering condition to the execution time of the operation task.
- The default value is 0, and the value range is [0, 3600000], in milliseconds.
- The result will return the operation whose execution time exceeds the set time.
         * @type {number || null}
         */
        this.MillisecondRunning = null;

        /**
         * Sets the query and filtering condition to the type of the operation task. Valid values:
- none: special status; idle connections or internal tasks.
- update: update data.
- insert: insertion operation.
- query: query operation.
- command: command operation.
- getmore: obtain more data.
- remove: deletion operation.
- killcursors: operation of releasing the query cursor.
         * @type {string || null}
         */
        this.Op = null;

        /**
         * Filtering condition, such as the shard name.
         * @type {string || null}
         */
        this.ReplicaSetName = null;

        /**
         * Sets the query and filtering condition to the node role.
- primary: primary node.
- secondary: secondary node.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Number of entries returned per request. The default value is 100, and the value range is [0, 100].
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. The default value is 0, and the value range is [0, 10000].
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting field of the returned result set. Currently, sorting by MicrosecsRunning (execution time of the operation task) is supported.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting method of the returned result set.
- ASC: ascending order. The default value is ASC, which indicates sorting in ascending order.
- DESC: descending order.
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
        this.Ns = 'Ns' in params ? params.Ns : null;
        this.MillisecondRunning = 'MillisecondRunning' in params ? params.MillisecondRunning : null;
        this.Op = 'Op' in params ? params.Op : null;
        this.ReplicaSetName = 'ReplicaSetName' in params ? params.ReplicaSetName : null;
        this.State = 'State' in params ? params.State : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

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
 * EnableSRVConnectionUrl request structure.
 * @class
 */
class EnableSRVConnectionUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.
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
 * ModifyInstanceAz response structure.
 * @class
 */
class ModifyInstanceAzResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Order ID for availability zone adjustment.</p>
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
 * DescribeAuditConfig request structure.
 * @class
 */
class DescribeAuditConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, in the format of cmgo-xftsghuy. It is the same as the instance ID displayed on the TencentDB console page.
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
 * Rollback database and table to new instance, database table information
 * @class
 */
class RestoreDatabases extends  AbstractModel {
    constructor(){
        super();

        /**
         * DB name.
         * @type {string || null}
         */
        this.Db = null;

        /**
         * Collection information to be rolled back.
         * @type {Array.<RestoreCollection> || null}
         */
        this.Collections = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Db = 'Db' in params ? params.Db : null;

        if (params.Collections) {
            this.Collections = new Array();
            for (let z in params.Collections) {
                let obj = new RestoreCollection();
                obj.deserialize(params.Collections[z]);
                this.Collections.push(obj);
            }
        }

    }
}

/**
 * SetAccountUserPrivilege request structure.
 * @class
 */
class SetAccountUserPrivilegeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID for the account to be configured. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/MongoDB), and copy the instance ID from the instance list.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Sets the account name to access the instance. The setting requirements are as follows: The name should be started with a letter and its length should be 1–64 characters. Only uppercase letters, lowercase letters, digits (1–9), underscores (_), and hyphens (-) can be entered.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Sets the permission information.
         * @type {Array.<Auth> || null}
         */
        this.AuthRole = null;

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

        if (params.AuthRole) {
            this.AuthRole = new Array();
            for (let z in params.AuthRole) {
                let obj = new Auth();
                obj.deserialize(params.AuthRole[z]);
                this.AuthRole.push(obj);
            }
        }

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
 * KillOps response structure.
 * @class
 */
class KillOpsResponse extends  AbstractModel {
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
 * Audit log file.
 * @class
 */
class AuditLogFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audit log file name.
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Creation time of the audit log file, in the format: "2019-03-20 17:09:13".
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * File status value. May return the following values:
"creating" - generating
"Failed" - Creation failed.
"success" - generated.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * File size in KB.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Download URL for the audit log.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * Error message.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * Download progress
         * @type {number || null}
         */
        this.ProgressRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.ProgressRate = 'ProgressRate' in params ? params.ProgressRate : null;

    }
}

/**
 * EnableTransparentDataEncryption response structure.
 * @class
 */
class EnableTransparentDataEncryptionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asynchronous process ID for enabling TDE, which is used for querying the process status.
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
 * ModifyInstanceParams request structure.
 * @class
 */
class ModifyInstanceParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.

         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Specifies the parameter name and value to be modified. For details about the currently supported parameter names and the corresponding valid values, see [DescribeInstanceParams](https://www.tencentcloud.com/document/product/240/65903?from_cn_redirect=1).
         * @type {Array.<ModifyMongoDBParamType> || null}
         */
        this.InstanceParams = null;

        /**
         * Operation type. Valid values:
- IMMEDIATELY: immediate adjustment.
- DELAY: delayed adjustment. It is an optional field. The default value is immediate adjustment if this parameter is left unspecified.
         * @type {string || null}
         */
        this.ModifyType = null;

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
                let obj = new ModifyMongoDBParamType();
                obj.deserialize(params.InstanceParams[z]);
                this.InstanceParams.push(obj);
            }
        }
        this.ModifyType = 'ModifyType' in params ? params.ModifyType : null;

    }
}

/**
 * DescribeAuditConfig response structure.
 * @class
 */
class DescribeAuditConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * true indicates full audit, false indicates rule audit
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.AuditAll = null;

        /**
         * The time when the instance enables database audit.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Audit log retention period.
Unit: day. Currently supports retention duration including 0, 30, 180, 365, 1095, 1825.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LogExpireDay = null;

        /**
         * Audit log storage type. Currently only support "storage": Storage type.
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * Whether the auditing feature is being disabled.
<ul><li>true: Yes.</li><li>false: No.</li></ul>
         * @type {string || null}
         */
        this.IsClosing = null;

        /**
         * Whether the audit feature is being enabled.<ul><li>true: Yes.</li><li>false: No.</li></ul>
         * @type {string || null}
         */
        this.IsOpening = null;

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
        this.AuditAll = 'AuditAll' in params ? params.AuditAll : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LogExpireDay = 'LogExpireDay' in params ? params.LogExpireDay : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.IsClosing = 'IsClosing' in params ? params.IsClosing : null;
        this.IsOpening = 'IsOpening' in params ? params.IsOpening : null;
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
         * AZ corresponding to the node. For the currently supported AZs, see [Regions and AZs](https://www.tencentcloud.com/document/product/240/3637?from_cn_redirect=1).
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
 * DeleteAccountUser response structure.
 * @class
 */
class DeleteAccountUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account deletion task ID.
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
         * <p>Region and AZ information of the instance. For details, please see <a href="https://www.tencentcloud.com/document/product/240/3637?from_cn_redirect=1">Regions and Availability Zones</a>.</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <ul><li>Specifies the number of primary and secondary nodes for each replica set during replica set instance creation. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to obtain the maximum and minimum number of nodes supported for each replica set.</li><li>Specifies the number of primary and secondary nodes for each shard during sharded cluster instance creation. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to obtain the maximum and minimum number of nodes supported for each shard.</li></ul>
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * <p>Instance memory size.</p><ul><li>Unit: GB.</li><li>For the value range, call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API. The CPU and Memory parameters in the returned data structure SpecItems correspond to the number of CPU cores and the memory specifications, respectively.</li></ul>
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * <p>Instance disk size.</p><ul><li>Unit: GB.</li><li>For the value range, call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API. The MinStorage and MaxStorage parameters in the returned data structure SpecItems correspond to the minimum and maximum disk specifications, respectively.</li></ul>
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * <p>Instance version information. The <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API can be called to obtain specific supported versions. The MongoVersionCode parameter in the returned data structure SpecItems indicates the information on versions supported by instances. The corresponding relationship between version information and version number is as follows:</p><ul><li>MONGO_40_WT: MongoDB 4.0 WiredTiger storage engine version.</li><li>MONGO_42_WT: MongoDB 4.2 WiredTiger storage engine version.</li><li>MONGO_44_WT: MongoDB 4.4 WiredTiger storage engine version.</li><li>MONGO_50_WT: MongoDB 5.0 WiredTiger storage engine version.</li><li>MONGO_60_WT: MongoDB 6.0 WiredTiger storage engine version.</li><li>MONGO_70_WT: MongoDB 7.0 WiredTiger storage engine version.</li><li>MONGO_80_WT: MongoDB 8.0 WiredTiger storage engine version.</li></ul>
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * <p>Recommended product specification types:</p><ul><li>GE.LD.T1: Local disk (Common I).</li><li>GE.CD.T1: Cloud disk (Common I).</li></ul><p>Product allowlist specification types:</p><ul><li>HIO10G: Local disk (High IO 10G).</li><li>HCD: Cloud disk (Cloud disk edition).</li></ul><p>Note: Allowlist specification types are under allowlist control. If needed, <a href="https://console.cloud.tencent.com/workorder/category">submit a ticket</a> to apply.</p>
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * <p>Number of instances. Value range: [1,10].</p>
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * <p>Instance type.</p><ul><li>REPLSET (replica set)</li><li>SHARD (sharded cluster)</li></ul>
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * <ul><li>Specifies the number of replica sets during replica set instance creation. This parameter can only be 1.</li><li>Specifies the number of shards during sharded cluster instance creation. Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API to query the range of shard quantity. The parameters MinReplicateSetNum and MaxReplicateSetNum in the returned data structure SpecItems correspond to the minimum value and maximum value, respectively.</li></ul>
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * <ul><li>When the monthly subscription mode is selected, that is, when <b>InstanceChargeType</b> is set to <b>PREPAID</b>, this parameter is required for specifying the purchase duration of instances. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, and 36. Unit: months.<br>- When the pay-as-you-go mode is selected, that is, when <b>InstanceChargeType</b> is set to <strong>POSTPAID_BY_HOUR</strong>, this parameter can only be set to 1.</li></ul>
         * @type {number || null}
         */
        this.Period = null;

        /**
         * <p>Instance payment method.</p><ul><li>PREPAID: Annual and monthly subscription.</li><li>POSTPAID_BY_HOUR: Pay-As-You-Go.</li></ul>
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * <p>Number of Mongos node CPU cores. Valid values: 1, 2, 4, 8, and 16. This parameter is required during sharded cluster instance purchase. If this parameter is left blank, the default value 2 is used.</p>
         * @type {number || null}
         */
        this.MongosCpu = null;

        /**
         * <p>Mongos node memory size. - This parameter is required during sharded cluster instance purchase. - Unit: GB. Valid values: 2 (for 1 core), 4 (for 2 cores), 8 (for 4 cores), 16 (for 8 cores), and 32 (for 16 cores). If this parameter is left blank, the default value 4 is used.</p>
         * @type {number || null}
         */
        this.MongosMemory = null;

        /**
         * <p>Specifies the number of Mongos nodes. Value range: [3,32]. For querying the price of sharded cluster instances, this parameter is required. If it is left blank, the default value 3 is used.</p>
         * @type {number || null}
         */
        this.MongosNum = null;

        /**
         * <p>Refers to the number of ConfigServer CPU cores, value fixed at 1, unit: GB. This parameter can be left blank.</p>
         * @type {number || null}
         */
        this.ConfigServerCpu = null;

        /**
         * <p>Specifies the ConfigServer memory size. The value is fixed as 2. Unit: GB. This parameter can be left blank.</p>
         * @type {number || null}
         */
        this.ConfigServerMemory = null;

        /**
         * <p>Specifies the ConfigServer disk size. The value is fixed at 20. Unit: GB. This parameter can be left blank.</p>
         * @type {number || null}
         */
        this.ConfigServerVolume = null;

        /**
         * <ul><li>Create a replica set instance. It refers to the read-only node quantity in each replica set.</li><li>Create a sharded cluster instance. It refers to the read-only node quantity in each shard.<br>Value range: [1,5].</li></ul>
         * @type {number || null}
         */
        this.ReadonlyNodeNum = null;

        /**
         * <p>CPU size of the instance.</p><ul><li>Unit: C.</li><li>Value range: Call the <a href="https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1">DescribeSpecInfo</a> API. The CPU and Memory parameters in the returned data structure SpecItems correspond to the number of CPU cores and the memory specifications, respectively.</li><li>Note: You need to pass in the CPU core size corresponding to the memory when querying the price of a Common I Instance Type.</li></ul>
         * @type {number || null}
         */
        this.Cpu = null;

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
        this.ReadonlyNodeNum = 'ReadonlyNodeNum' in params ? params.ReadonlyNodeNum : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;

    }
}

/**
 * Operation to be terminated.
 * @class
 */
class Operation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the shard where the operation is performed. The [DescribeCurrentOp](https://www.tencentcloud.com/document/product/240/48120?from_cn_redirect=1) API can be called to query the shard name.
         * @type {string || null}
         */
        this.ReplicaSetName = null;

        /**
         * Name of the node where the operation is performed. The [DescribeCurrentOp](https://www.tencentcloud.com/document/product/240/48120?from_cn_redirect=1) API can be called to query the node name.
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * Operation number. The [DescribeCurrentOp](https://www.tencentcloud.com/document/product/240/48120?from_cn_redirect=1) API can be called to query the operation number.
         * @type {number || null}
         */
        this.OpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReplicaSetName = 'ReplicaSetName' in params ? params.ReplicaSetName : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.OpId = 'OpId' in params ? params.OpId : null;

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
 * Audit log
 * @class
 */
class AuditLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of affected rows
         * @type {number || null}
         */
        this.AffectRows = null;

        /**
         * Operation type. For example: grantRolesToRole, dropRole.
         * @type {string || null}
         */
        this.Atype = null;

        /**
         * Execution time. Unit: ms.
         * @type {number || null}
         */
        this.ExecTime = null;

        /**
         * Client IP address.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Operation parameter. Includes operation parameter information.
         * @type {string || null}
         */
        this.Param = null;

        /**
         * Execution result. 0 indicates success, non-0 indicates failure.
         * @type {number || null}
         */
        this.Result = null;

        /**
         * User role list. Format: role@db,role@db.
         * @type {string || null}
         */
        this.Roles = null;

        /**
         * Operation timestamp. Format: YYYY-MM-DD HH:mm:ss.
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * Username. Format: user@db.
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
        this.AffectRows = 'AffectRows' in params ? params.AffectRows : null;
        this.Atype = 'Atype' in params ? params.Atype : null;
        this.ExecTime = 'ExecTime' in params ? params.ExecTime : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Param = 'Param' in params ? params.Param : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Roles = 'Roles' in params ? params.Roles : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.User = 'User' in params ? params.User : null;

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
 * Modifies the request parameters of a TencentDB for MongoDB instance.
 * @class
 */
class ModifyMongoDBParamType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name to be modified. Strictly refer to the parameter names supported by the current instance, which are obtained through DescribeInstanceParams.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Corresponding value of the parameter name to be modified. Strictly refer to the value ranges corresponding to the parameters obtained through DescribeInstanceParams.
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
 * SetInstanceMaintenance request structure.
 * @class
 */
class SetInstanceMaintenanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID. For example, cmgo-p8vn****. Log in to the [TencentDB for MongoDB console](https://console.cloud.tencent.com/mongodb), and copy the instance ID from the instance list.

         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time of the maintenance window. The value range is any hour or half-hour between 00:00 and 23:00, such as 00:00 or 00:30.
         * @type {string || null}
         */
        this.MaintenanceStart = null;

        /**
         * End time of the maintenance window.
- The value range is any hour or half-hour between 00:00 and 23:00. The minimum value of maintenance time is 30 minutes, and the maximum value is 3 hours.
- The end time should be later than the start time.
         * @type {string || null}
         */
        this.MaintenanceEnd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MaintenanceStart = 'MaintenanceStart' in params ? params.MaintenanceStart : null;
        this.MaintenanceEnd = 'MaintenanceEnd' in params ? params.MaintenanceEnd : null;

    }
}

/**
 * DescribeAuditLogFiles request structure.
 * @class
 */
class DescribeAuditLogFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, in the format of cmgo-xfts****. It is the same as the instance ID displayed on the TencentDB console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Page size. Default value: 20; value ranges from 1 to 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Audit log file name. This API filters related audit log files based on this parameter.
         * @type {string || null}
         */
        this.FileName = null;

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
        this.FileName = 'FileName' in params ? params.FileName : null;

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
- MONGO_80_WT: version of the MongoDB 8.0 WiredTiger storage engine.
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
         * <p>Order ID.</p>
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
 * collection to be rolled back
 * @class
 */
class RestoreCollection extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original collection to be rolled back
         * @type {string || null}
         */
        this.OldCollection = null;

        /**
         * Rolled-back collection
         * @type {string || null}
         */
        this.NewCollection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OldCollection = 'OldCollection' in params ? params.OldCollection : null;
        this.NewCollection = 'NewCollection' in params ? params.NewCollection : null;

    }
}

/**
 * RestoreDBInstance request structure.
 * @class
 */
class RestoreDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID. Log in to the <a href="https://console.cloud.tencent.com/mongodb/instance">MongoDB console</a> and copy the instance ID from the instance list.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Specify the target time point to roll back. The time must be in the backup retention period of the instance.</p><p>Parameter format: YYYY-MM-DD hh:mm:ss</p>
         * @type {string || null}
         */
        this.RestoreTime = null;

        /**
         * <p>Database table information to be rolled back.</p>
         * @type {Array.<RestoreDatabases> || null}
         */
        this.Databases = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RestoreTime = 'RestoreTime' in params ? params.RestoreTime : null;

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new RestoreDatabases();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }

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
- It can be obtained through the response parameter **InstanceId** of the [DescribeDBInstances](https://www.tencentcloud.com/document/product/240/38568?from_cn_redirect=1) API.
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

/**
 * EnableWanService response structure.
 * @class
 */
class EnableWanServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asynchronous task ID.
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

module.exports = {
    DescribeSpecInfoRequest: DescribeSpecInfoRequest,
    CreateDBInstanceRequest: CreateDBInstanceRequest,
    DescribeCurrentOpResponse: DescribeCurrentOpResponse,
    ModifyInstanceParamsResponse: ModifyInstanceParamsResponse,
    SetInstanceMaintenanceResponse: SetInstanceMaintenanceResponse,
    CreateBackupDBInstanceResponse: CreateBackupDBInstanceResponse,
    DescribeAuditLogsRequest: DescribeAuditLogsRequest,
    DBInstancePrice: DBInstancePrice,
    TerminateDBInstancesRequest: TerminateDBInstancesRequest,
    KillOpsRequest: KillOpsRequest,
    DeleteLogDownloadTaskResponse: DeleteLogDownloadTaskResponse,
    InquirePriceRenewDBInstancesRequest: InquirePriceRenewDBInstancesRequest,
    DescribeAuditLogFilesResponse: DescribeAuditLogFilesResponse,
    DescribeSlowLogsRequest: DescribeSlowLogsRequest,
    FlushInstanceRouterConfigResponse: FlushInstanceRouterConfigResponse,
    SetDBInstanceDeletionProtectionRequest: SetDBInstanceDeletionProtectionRequest,
    InstanceMultiParam: InstanceMultiParam,
    DescribeSRVConnectionDomainResponse: DescribeSRVConnectionDomainResponse,
    DescribeInstanceSSLRequest: DescribeInstanceSSLRequest,
    DescribeBackupRulesResponse: DescribeBackupRulesResponse,
    SlowLogPattern: SlowLogPattern,
    Task: Task,
    ModifySRVConnectionUrlResponse: ModifySRVConnectionUrlResponse,
    AssignProjectResponse: AssignProjectResponse,
    AuditLogFilter: AuditLogFilter,
    DescribeDBInstanceDealResponse: DescribeDBInstanceDealResponse,
    DescribeAuditLogsResponse: DescribeAuditLogsResponse,
    OfflineIsolatedDBInstanceResponse: OfflineIsolatedDBInstanceResponse,
    IsolateDBInstanceResponse: IsolateDBInstanceResponse,
    DisableSRVConnectionUrlResponse: DisableSRVConnectionUrlResponse,
    DescribeSecurityGroupRequest: DescribeSecurityGroupRequest,
    RenameInstanceRequest: RenameInstanceRequest,
    DescribeBackupRulesRequest: DescribeBackupRulesRequest,
    DescribeBackupDownloadTaskResponse: DescribeBackupDownloadTaskResponse,
    AddNodeList: AddNodeList,
    FlushInstanceRouterConfigRequest: FlushInstanceRouterConfigRequest,
    DBInstanceInfo: DBInstanceInfo,
    SetAccountUserPrivilegeResponse: SetAccountUserPrivilegeResponse,
    ModifyDBInstanceNetworkAddressRequest: ModifyDBInstanceNetworkAddressRequest,
    CreateDBInstanceHourResponse: CreateDBInstanceHourResponse,
    InstanceEnableSSLRequest: InstanceEnableSSLRequest,
    DescribeDBInstanceNamespaceRequest: DescribeDBInstanceNamespaceRequest,
    EnableTransparentDataEncryptionRequest: EnableTransparentDataEncryptionRequest,
    LogInfo: LogInfo,
    DeleteAccountUserRequest: DeleteAccountUserRequest,
    SpecItem: SpecItem,
    DescribeDetailedSlowLogsRequest: DescribeDetailedSlowLogsRequest,
    UpgradeDbInstanceVersionRequest: UpgradeDbInstanceVersionRequest,
    ModifyDBInstanceNetworkAddressResponse: ModifyDBInstanceNetworkAddressResponse,
    CreateAccountUserResponse: CreateAccountUserResponse,
    DescribeSlowLogPatternsResponse: DescribeSlowLogPatternsResponse,
    BackupDownloadTaskStatus: BackupDownloadTaskStatus,
    DescribeSlowLogsResponse: DescribeSlowLogsResponse,
    InquirePriceModifyDBInstanceSpecRequest: InquirePriceModifyDBInstanceSpecRequest,
    BackupInfo: BackupInfo,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    InstanceEnableSSLResponse: InstanceEnableSSLResponse,
    CurrentOp: CurrentOp,
    ModifyDBInstanceSpecRequest: ModifyDBInstanceSpecRequest,
    DescribeLogDownloadTasksRequest: DescribeLogDownloadTasksRequest,
    Auth: Auth,
    ResetDBInstancePasswordRequest: ResetDBInstancePasswordRequest,
    InstanceIntegerParam: InstanceIntegerParam,
    ModifyInstanceAzRequest: ModifyInstanceAzRequest,
    ModifyNetworkAddress: ModifyNetworkAddress,
    EnableSRVConnectionUrlResponse: EnableSRVConnectionUrlResponse,
    DescribeAsyncRequestInfoResponse: DescribeAsyncRequestInfoResponse,
    CreateDBInstanceResponse: CreateDBInstanceResponse,
    CreateLogDownloadTaskRequest: CreateLogDownloadTaskRequest,
    WanServiceNodeList: WanServiceNodeList,
    CreateAccountUserRequest: CreateAccountUserRequest,
    InstanceTextParam: InstanceTextParam,
    ModifyDBInstanceSecurityGroupRequest: ModifyDBInstanceSecurityGroupRequest,
    DescribeDBInstanceNamespaceResponse: DescribeDBInstanceNamespaceResponse,
    DescribeBackupDownloadTaskRequest: DescribeBackupDownloadTaskRequest,
    ModifySRVConnectionUrlRequest: ModifySRVConnectionUrlRequest,
    DescribeClientConnectionsResponse: DescribeClientConnectionsResponse,
    DisableSRVConnectionUrlRequest: DisableSRVConnectionUrlRequest,
    DescribeSRVConnectionDomainRequest: DescribeSRVConnectionDomainRequest,
    DescribeDBBackupsResponse: DescribeDBBackupsResponse,
    ModifyDBInstanceSecurityGroupResponse: ModifyDBInstanceSecurityGroupResponse,
    DescribeInstanceParamsRequest: DescribeInstanceParamsRequest,
    NodeTag: NodeTag,
    InquirePriceCreateDBInstancesResponse: InquirePriceCreateDBInstancesResponse,
    CloseAuditServiceRequest: CloseAuditServiceRequest,
    DescribeSecurityGroupResponse: DescribeSecurityGroupResponse,
    SecurityGroup: SecurityGroup,
    EnableWanServiceRequest: EnableWanServiceRequest,
    ReplicaSetInfo: ReplicaSetInfo,
    ResetDBInstancePasswordResponse: ResetDBInstancePasswordResponse,
    ClientConnection: ClientConnection,
    ReplicateSetInfo: ReplicateSetInfo,
    DescribeDBInstanceDealRequest: DescribeDBInstanceDealRequest,
    UpgradeDBInstanceKernelVersionResponse: UpgradeDBInstanceKernelVersionResponse,
    DescribeAsyncRequestInfoRequest: DescribeAsyncRequestInfoRequest,
    CreateBackupDownloadTaskRequest: CreateBackupDownloadTaskRequest,
    InquirePriceModifyDBInstanceSpecResponse: InquirePriceModifyDBInstanceSpecResponse,
    CreateDBInstanceHourRequest: CreateDBInstanceHourRequest,
    SecurityGroupBound: SecurityGroupBound,
    RestoreDBInstanceResponse: RestoreDBInstanceResponse,
    BackupTotalSize: BackupTotalSize,
    DescribeDBInstanceNodePropertyResponse: DescribeDBInstanceNodePropertyResponse,
    CloseAuditServiceResponse: CloseAuditServiceResponse,
    DescribeMongodbLogsResponse: DescribeMongodbLogsResponse,
    DescribeInstanceSSLResponse: DescribeInstanceSSLResponse,
    DescribeCurrentOpRequest: DescribeCurrentOpRequest,
    BackupDownloadTask: BackupDownloadTask,
    DescribeDBBackupsRequest: DescribeDBBackupsRequest,
    DescribeClientConnectionsRequest: DescribeClientConnectionsRequest,
    SetDBInstanceDeletionProtectionResponse: SetDBInstanceDeletionProtectionResponse,
    DescribeDBInstanceNodePropertyRequest: DescribeDBInstanceNodePropertyRequest,
    DescribeDetailedSlowLogsResponse: DescribeDetailedSlowLogsResponse,
    ShardInfo: ShardInfo,
    TerminateDBInstancesResponse: TerminateDBInstancesResponse,
    EnableSRVConnectionUrlRequest: EnableSRVConnectionUrlRequest,
    RenewDBInstancesResponse: RenewDBInstancesResponse,
    InstanceEnumParam: InstanceEnumParam,
    RenameInstanceResponse: RenameInstanceResponse,
    ModifyInstanceAzResponse: ModifyInstanceAzResponse,
    DescribeAuditConfigRequest: DescribeAuditConfigRequest,
    CreateBackupDBInstanceRequest: CreateBackupDBInstanceRequest,
    RestoreDatabases: RestoreDatabases,
    SetAccountUserPrivilegeRequest: SetAccountUserPrivilegeRequest,
    UpgradeDbInstanceVersionResponse: UpgradeDbInstanceVersionResponse,
    NodeProperty: NodeProperty,
    KillOpsResponse: KillOpsResponse,
    IsolateDBInstanceRequest: IsolateDBInstanceRequest,
    AuditLogFile: AuditLogFile,
    EnableTransparentDataEncryptionResponse: EnableTransparentDataEncryptionResponse,
    AssignProjectRequest: AssignProjectRequest,
    DescribeMongodbLogsRequest: DescribeMongodbLogsRequest,
    CreateBackupDownloadTaskResponse: CreateBackupDownloadTaskResponse,
    CreateLogDownloadTaskResponse: CreateLogDownloadTaskResponse,
    ModifyInstanceParamsRequest: ModifyInstanceParamsRequest,
    DescribeAuditConfigResponse: DescribeAuditConfigResponse,
    DeleteLogDownloadTaskRequest: DeleteLogDownloadTaskRequest,
    SpecificationInfo: SpecificationInfo,
    DescribeSlowLogPatternsRequest: DescribeSlowLogPatternsRequest,
    RemoveNodeList: RemoveNodeList,
    DescribeSpecInfoResponse: DescribeSpecInfoResponse,
    InquirePriceRenewDBInstancesResponse: InquirePriceRenewDBInstancesResponse,
    TagInfo: TagInfo,
    DeleteAccountUserResponse: DeleteAccountUserResponse,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    OfflineIsolatedDBInstanceRequest: OfflineIsolatedDBInstanceRequest,
    InquirePriceCreateDBInstancesRequest: InquirePriceCreateDBInstancesRequest,
    Operation: Operation,
    DescribeInstanceParamsResponse: DescribeInstanceParamsResponse,
    AuditLog: AuditLog,
    DescribeLogDownloadTasksResponse: DescribeLogDownloadTasksResponse,
    SlowLogItem: SlowLogItem,
    ModifyMongoDBParamType: ModifyMongoDBParamType,
    SetInstanceMaintenanceRequest: SetInstanceMaintenanceRequest,
    DescribeAuditLogFilesRequest: DescribeAuditLogFilesRequest,
    InstanceDetail: InstanceDetail,
    ModifyDBInstanceSpecResponse: ModifyDBInstanceSpecResponse,
    RestoreCollection: RestoreCollection,
    RestoreDBInstanceRequest: RestoreDBInstanceRequest,
    InstanceChargePrepaid: InstanceChargePrepaid,
    RenewDBInstancesRequest: RenewDBInstancesRequest,
    UpgradeDBInstanceKernelVersionRequest: UpgradeDBInstanceKernelVersionRequest,
    EnableWanServiceResponse: EnableWanServiceResponse,

}
