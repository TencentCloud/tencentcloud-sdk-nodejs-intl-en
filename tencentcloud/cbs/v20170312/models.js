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
 * The snapshot operation log.
 * @class
 */
class SnapshotOperationLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN of operator.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Operation type. Value range:
SNAP_OPERATION_DELETE: Delete snapshot
SNAP_OPERATION_ROLLBACK: Roll back snapshot
SNAP_OPERATION_MODIFY: Modify snapshot attributes
SNAP_OPERATION_CREATE: Create snapshot
SNAP_OPERATION_COPY: Cross-region replication of snapshot
ASP_OPERATION_CREATE_SNAP: Create snapshot with scheduled snapshot policy
ASP_OPERATION_DELETE_SNAP: Delete snapshot from scheduled snapshot policy
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * ID of snapshot being operated.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Status of operation. Value range:
SUCCESS: Operation successful 
FAILED: Operation failed 
PROCESSING: Operation in process
         * @type {string || null}
         */
        this.OperationState = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.OperationState = 'OperationState' in params ? params.OperationState : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyDiskExtraPerformance request structure.
 * @class
 */
class ModifyDiskExtraPerformanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cloud disk to create a snapshot, which can be obtained via the [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * The extra throughput to purchase, in MB/s
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
        this.ThroughputPerformance = 'ThroughputPerformance' in params ? params.ThroughputPerformance : null;

    }
}

/**
 * ModifyDiskAttributes response structure.
 * @class
 */
class ModifyDiskAttributesResponse extends  AbstractModel {
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
 * DescribeDiskBackups request structure.
 * @class
 */
class DescribeDiskBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the backup points to be queried. `DiskBackupIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.DiskBackupIds = null;

        /**
         * Filter. `DiskBackupIds` and `Filters` cannot be specified at the same time. Valid values: <br><li>disk-backup-id - Array of String - Required: No - (Filter) Filter by backup point ID in the format of `dbp-11112222`.
<br><li>disk-id - Array of String - Required: No - (Filter) Filter by ID of the cloud disk for which backup points are created.
<br><li>disk-usage - Array of String - Required: No - (Filter) Filter by type of the cloud disk for which backup points are created. (SYSTEM_DISK: System disk | DATA_DISK: Data disk)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section of the API [Overview](https://intl.cloud.tencent.com/document/product/362/15633?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section of the API [Overview](https://intl.cloud.tencent.com/document/product/362/15633?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Sorting order of cloud disk backup points. Valid values:<br><li>ASC: Ascending<br><li>DESC: Descending
         * @type {string || null}
         */
        this.Order = null;

        /**
         * The field by which cloud disk backup points are sorted. Valid values:<br><li>CREATE_TIME: Sort by creation time<br>Backup points are sorted by creation time by default.
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskBackupIds = 'DiskBackupIds' in params ? params.DiskBackupIds : null;

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
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

/**
 * This describes the detailed information of the scheduled snapshot policy.
 * @class
 */
class AutoSnapshotPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of cloud disk IDs that the current scheduled snapshot policy is bound to.
         * @type {Array.<string> || null}
         */
        this.DiskIdSet = null;

        /**
         * Whether scheduled snapshot policy is activated.
         * @type {boolean || null}
         */
        this.IsActivated = null;

        /**
         * Scheduled snapshot policy state. Value range:<br><li>NORMAL: Normal<br><li>ISOLATED: Isolated.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyState = null;

        /**
         * Whether it is to replicate a snapshot across accounts. `1`: yes, `0`: no.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsCopyToRemote = null;

        /**
         * Whether the snapshot created by this scheduled snapshot policy is retained permanently.
         * @type {boolean || null}
         */
        this.IsPermanent = null;

        /**
         * The time the scheduled snapshot will be triggered again.
         * @type {string || null}
         */
        this.NextTriggerTime = null;

        /**
         * Scheduled snapshot policy name.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyName = null;

        /**
         * Scheduled snapshot policy ID.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * The policy for executing the scheduled snapshot.
         * @type {Array.<Policy> || null}
         */
        this.Policy = null;

        /**
         * The time the scheduled snapshot policy was created.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Number of days the snapshot created by this scheduled snapshot policy is retained.
         * @type {number || null}
         */
        this.RetentionDays = null;

        /**
         * ID of the replication target account
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CopyToAccountUin = null;

        /**
         * List of IDs of the instances associated with the scheduled snapshot policy.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIdSet = 'DiskIdSet' in params ? params.DiskIdSet : null;
        this.IsActivated = 'IsActivated' in params ? params.IsActivated : null;
        this.AutoSnapshotPolicyState = 'AutoSnapshotPolicyState' in params ? params.AutoSnapshotPolicyState : null;
        this.IsCopyToRemote = 'IsCopyToRemote' in params ? params.IsCopyToRemote : null;
        this.IsPermanent = 'IsPermanent' in params ? params.IsPermanent : null;
        this.NextTriggerTime = 'NextTriggerTime' in params ? params.NextTriggerTime : null;
        this.AutoSnapshotPolicyName = 'AutoSnapshotPolicyName' in params ? params.AutoSnapshotPolicyName : null;
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;

        if (params.Policy) {
            this.Policy = new Array();
            for (let z in params.Policy) {
                let obj = new Policy();
                obj.deserialize(params.Policy[z]);
                this.Policy.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RetentionDays = 'RetentionDays' in params ? params.RetentionDays : null;
        this.CopyToAccountUin = 'CopyToAccountUin' in params ? params.CopyToAccountUin : null;
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * DescribeSnapshotOperationLogs request structure.
 * @class
 */
class DescribeSnapshotOperationLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions. The following conditions are supported:
<li>snapshot-id - Array of String - Required or not: Yes - Filter by snapshot ID, with maximum of 10 snapshot IDs able to be specified per request.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The start time of the operation logs to be queried, for example: '2019-11-22 00:00:00"
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The end time of the operation logs to be queried, for example: '2019-11-22 23:59:59"
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * CopySnapshotCrossRegions response structure.
 * @class
 */
class CopySnapshotCrossRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result of the cross-region replication task. The ID of the new snapshot replica is returned if the request succeeds. Otherwise `Error` is returned.
         * @type {Array.<SnapshotCopyResult> || null}
         */
        this.SnapshotCopyResultSet = null;

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

        if (params.SnapshotCopyResultSet) {
            this.SnapshotCopyResultSet = new Array();
            for (let z in params.SnapshotCopyResultSet) {
                let obj = new SnapshotCopyResult();
                obj.deserialize(params.SnapshotCopyResultSet[z]);
                this.SnapshotCopyResultSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoSnapshotPolicyAttribute response structure.
 * @class
 */
class ModifyAutoSnapshotPolicyAttributeResponse extends  AbstractModel {
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
 * ModifyDiskBackupQuota request structure.
 * @class
 */
class ModifyDiskBackupQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk ID.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Cloud disk backup point quota after the adjustment
         * @type {number || null}
         */
        this.DiskBackupQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskBackupQuota = 'DiskBackupQuota' in params ? params.DiskBackupQuota : null;

    }
}

/**
 * InquiryPriceCreateDisks response structure.
 * @class
 */
class InquiryPriceCreateDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Describes the price of newly purchased cloud disks.
         * @type {Price || null}
         */
        this.DiskPrice = null;

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

        if (params.DiskPrice) {
            let obj = new Price();
            obj.deserialize(params.DiskPrice)
            this.DiskPrice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindAutoSnapshotPolicy request structure.
 * @class
 */
class BindAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of scheduled snapshot policy to be bound.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * List of cloud disk IDs to be bound. Maximum of 80 cloud disks can be bound per request.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;

    }
}

/**
 * CreateSnapshot response structure.
 * @class
 */
class CreateSnapshotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the new snapshot.
         * @type {string || null}
         */
        this.SnapshotId = null;

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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAutoSnapshotPolicies request structure.
 * @class
 */
class DescribeAutoSnapshotPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of scheduled snapshot policy IDs to be queried. The parameter does not support specifying both `SnapshotIds` and `Filters`.
         * @type {Array.<string> || null}
         */
        this.AutoSnapshotPolicyIds = null;

        /**
         * Filter conditions. Specification of both the `AutoSnapshotPolicyIds` and `Filters` parameters is not supported.<br><li>auto-snapshot-policy-id - Array of String - Required or not: No - (Filter condition) Filters according to the scheduled snapshot policy ID. The format of the scheduled snapshot policy ID is as follows: `asp-11112222`. <br><li>auto-snapshot-policy-state - Array of String - Required or not: No - (Filter condition) Filters according to the status of the scheduled snapshot policy. The format of the scheduled snapshot policy ID is as follows: `asp-11112222`. (NORMAL: normal | ISOLATED: isolated)<br><li>auto-snapshot-policy-name - Array of String - Required or not: No - (Filter condition) Filters according to the name of the scheduled snapshot policy.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of results to be returned. Default is 20. Maximum is 100. For more information on `Limit`, please see relevant sections in API [Introduction](https://intl.cloud.tencent.com/document/product/362/15633?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default is 0. For more information on `Offset`, please see relevant sections in API [Introduction](https://intl.cloud.tencent.com/document/product/362/15633?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Outputs the ordering of the scheduled snapshot lists. Value range: <br><li>ASC: Ascending order <br><li>DESC: Descending order.
         * @type {string || null}
         */
        this.Order = null;

        /**
         * The sorting filter applied to the scheduled snapshot list. Value range: <Sort by creation time of scheduled snapshot. By default, this is sorted by creation time.
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyIds = 'AutoSnapshotPolicyIds' in params ? params.AutoSnapshotPolicyIds : null;

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
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

/**
 * ModifySnapshotsSharePermission response structure.
 * @class
 */
class ModifySnapshotsSharePermissionResponse extends  AbstractModel {
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
 * DeleteDiskBackups request structure.
 * @class
 */
class DeleteDiskBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cloud disk backup point to be deleted.
         * @type {Array.<string> || null}
         */
        this.DiskBackupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskBackupIds = 'DiskBackupIds' in params ? params.DiskBackupIds : null;

    }
}

/**
 * InitializeDisks response structure.
 * @class
 */
class InitializeDisksResponse extends  AbstractModel {
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
 * DeleteDiskBackups response structure.
 * @class
 */
class DeleteDiskBackupsResponse extends  AbstractModel {
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
 * DescribeDiskBackups response structure.
 * @class
 */
class DescribeDiskBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible cloud disk backup points.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of details of cloud disk backup points.
         * @type {Array.<DiskBackup> || null}
         */
        this.DiskBackupSet = null;

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

        if (params.DiskBackupSet) {
            this.DiskBackupSet = new Array();
            for (let z in params.DiskBackupSet) {
                let obj = new DiskBackup();
                obj.deserialize(params.DiskBackupSet[z]);
                this.DiskBackupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Result of the cross-region replication task
 * @class
 */
class SnapshotCopyResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the snapshot replica
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Error message. It’s null if the request succeeds.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Error code. It’s `Success` if the request succeeds.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Destination region of the replication task
         * @type {string || null}
         */
        this.DestinationRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.DestinationRegion = 'DestinationRegion' in params ? params.DestinationRegion : null;

    }
}

/**
 * InquirePriceModifyDiskExtraPerformance response structure.
 * @class
 */
class InquirePriceModifyDiskExtraPerformanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price for purchasing the extra performance
         * @type {Price || null}
         */
        this.DiskPrice = null;

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

        if (params.DiskPrice) {
            let obj = new Price();
            obj.deserialize(params.DiskPrice)
            this.DiskPrice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDisks request structure.
 * @class
 */
class CreateDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Location of the instance. You can use this parameter to specify the attributes of the instance, such as its availability zone and project. If no project is specified, the default project will be used.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Cloud disk billing mode. POSTPAID_BY_HOUR: Pay-as-you-go by hour<br><li>CDCPAID: Billed together with the bound dedicated cluster<br>For more information on the pricing in each mode, see [Pricing Overview](https://intl.cloud.tencent.com/document/product/362/2413?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * Cloud disk media type. Valid values: <br><li>CLOUD_BASIC: HDD Cloud Storage<br><li>CLOUD_PREMIUM: Premium Cloud Disk<br><li>CLOUD_BSSD: Balanced SSD<br><li>CLOUD_SSD: SSD<br><li>CLOUD_HSSD: Enhanced SSD<br><li>CLOUD_TSSD: ulTra SSD.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Cloud disk name. If it is not specified, "Unnamed" will be used by default. The maximum length is 60 bytes.
         * @type {string || null}
         */
        this.DiskName = null;

        /**
         * Tags bound to the cloud disk.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Snapshot ID. If this parameter is specified, the cloud disk will be created based on the snapshot. The snapshot must be a data disk snapshot. To query the type of a snapshot, call the [DescribeSnapshots](https://intl.cloud.tencent.com/document/product/362/15647?from_cn_redirect=1) API and see the `DiskUsage` field in the response.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Number of cloud disks to be created. If it is not specified, `1` will be used by default. There is an upper limit on the maximum number of cloud disks that can be created in a single request. For more information, see [Use Limits](https://intl.cloud.tencent.com/doc/product/362/5145?from_cn_redirect=1).
         * @type {number || null}
         */
        this.DiskCount = null;

        /**
         * Extra performance purchased for a cloud disk.<br>This optional parameter is only valid for ulTra SSD (CLOUD_TSSD) and Enhanced SSD (CLOUD_HSSD).
         * @type {number || null}
         */
        this.ThroughputPerformance = null;

        /**
         * Cloud disk size in GB. <br><li>`DiskSize` is not required if `SnapshotId` is specified. In this case, the size of the cloud disk will be equal to that of the snapshot. <br><li>If you specify both `SnapshotId` and `DiskSize`, the specified disk size cannot be smaller than the snapshot size. <br><li>For the value range of cloud disk size, see [Cloud Disk Types](https://intl.cloud.tencent.com/document/product/362/2353?from_cn_redirect=1).
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Optional parameter. Default value: `False`. If `True` is specified, the new cloud disk will be shared.
         * @type {boolean || null}
         */
        this.Shareable = null;

        /**
         * A unique string supplied by the client to ensure that the request is idempotent. Its maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * This parameter is used to create encrypted cloud disks. It is fixed at `ENCRYPT`.
         * @type {string || null}
         */
        this.Encrypt = null;

        /**
         * Relevant parameter settings for the prepaid mode (i.e., monthly subscription). The monthly subscription cloud disk purchase attributes such as usage period and whether or not auto-renewal is set up can be specified using this parameter. <br>This parameter is required when creating a prepaid cloud disk. This parameter is not required when creating an hourly postpaid cloud disk. 
         * @type {DiskChargePrepaid || null}
         */
        this.DiskChargePrepaid = null;

        /**
         * Whether to delete the associated non-permanently reserved snapshots upon deletion of the source cloud disk. `0`: No (default value). `1`: Yes. To check whether a snapshot is permanently reserved, see the `IsPermanent` field returned by the `DescribeSnapshots` API.
         * @type {number || null}
         */
        this.DeleteSnapshot = null;

        /**
         * Specifies whether to automatically attach and initialize the newly created data disk.
         * @type {AutoMountConfiguration || null}
         */
        this.AutoMountConfiguration = null;

        /**
         * Specifies the cloud disk backup point quota.
         * @type {number || null}
         */
        this.DiskBackupQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.DiskChargeType = 'DiskChargeType' in params ? params.DiskChargeType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskName = 'DiskName' in params ? params.DiskName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.DiskCount = 'DiskCount' in params ? params.DiskCount : null;
        this.ThroughputPerformance = 'ThroughputPerformance' in params ? params.ThroughputPerformance : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.Shareable = 'Shareable' in params ? params.Shareable : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;

        if (params.DiskChargePrepaid) {
            let obj = new DiskChargePrepaid();
            obj.deserialize(params.DiskChargePrepaid)
            this.DiskChargePrepaid = obj;
        }
        this.DeleteSnapshot = 'DeleteSnapshot' in params ? params.DeleteSnapshot : null;

        if (params.AutoMountConfiguration) {
            let obj = new AutoMountConfiguration();
            obj.deserialize(params.AutoMountConfiguration)
            this.AutoMountConfiguration = obj;
        }
        this.DiskBackupQuota = 'DiskBackupQuota' in params ? params.DiskBackupQuota : null;

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
         * ID of the CVM instance on which the cloud disk will be mounted. It can be queried via the API [DescribeInstances](https://intl.cloud.tencent.com/document/product/213/15728?from_cn_redirect=1).
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ID of the elastic cloud disk to be mounted, which can be queried through the API [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1). A maximum of 10 elastic cloud disks can be mounted in a single request.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Optional parameter. If this is not passed only the mount operation is executed. If `True` is passed, the cloud disk will be configured to be terminated when the server it is mounted to is terminated. This is only valid for pay-as-you-go cloud disks.
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

        /**
         * (Optional) Specifies the cloud disk mounting method. It’s only valid for BM models. Valid values: <br><li>PF<br><li>VF
         * @type {string || null}
         */
        this.AttachMode = null;

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
        this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null;
        this.AttachMode = 'AttachMode' in params ? params.AttachMode : null;

    }
}

/**
 * DescribeDiskAssociatedAutoSnapshotPolicy request structure.
 * @class
 */
class DescribeDiskAssociatedAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the queried cloud disk.
         * @type {string || null}
         */
        this.DiskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskId = 'DiskId' in params ? params.DiskId : null;

    }
}

/**
 * DescribeSnapshots request structure.
 * @class
 */
class DescribeSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of snapshot IDs to be queried. The parameter does not support specifying both `SnapshotIds` and `Filters`.
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

        /**
         * Filters. It cannot be specified together with `SnapshotIds`.<br><li>snapshot-id - Array of String - Optional - Filters by snapshot ID, such as `snap-11112222`.<br><li>snapshot-name - Array of String - Optional - Filters by snapshot name. <br><li>snapshot-state - Array of String - Optional - Filters by snapshot state (NORMAL: normal | CREATING: creating | ROLLBACKING: rolling back). <br><li>disk-usage - Array of String - Optional - Filters by the type of the cloud disk from which a snapshot is created (SYSTEM_DISK: system disk | DATA_DISK: data disk).<br><li>project-id - Array of String - Optional - Filters by the ID of the project to which a cloud disk belongs. <br><li>disk-id - Array of String - Optional - Filters by the ID of the cloud disk from which a snapshot is created.<br><li>zone - Array of String - Optional - Filters by [availability zone](https://intl.cloud.tencent.com/document/product/213/15753?from_cn_redirect=1#ZoneInfo).<br><li>encrypt - Array of String - Optional - Filters by whether a snapshot is created from an encrypted cloud disk. (TRUE: a snapshot of an encrypted cloud disk | FALSE: not a snapshot of an encrypted cloud disk.)
<li>snapshot-type- Array of String - Optional - Filters by the snapshot type specified in `snapshot-type`.
(SHARED_SNAPSHOT: a shared snapshot | PRIVATE_SNAPSHOT: a private snapshot.)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default is 0. For more information on `Offset`, please see relevant sections in API [Introduction](https://intl.cloud.tencent.com/document/product/362/15633?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. Default is 20. Maximum is 100. For more information on `Limit`, please see relevant sections in API [Introduction](https://intl.cloud.tencent.com/document/product/362/15633?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Outputs the ordering of the cloud disk list. Value range: <br><li>ASC: Ascending order <br><li>DESC: Descending order.
         * @type {string || null}
         */
        this.Order = null;

        /**
         * The field by which the snapshot list is sorted. Value range: <br><li>CREATE_TIME: sorted by the creation time of the snapshots <br>By default, the snapshot list is sorted by the creation time of snapshots.
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotIds = 'SnapshotIds' in params ? params.SnapshotIds : null;

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
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

/**
 * ModifyAutoSnapshotPolicyAttribute request structure.
 * @class
 */
class ModifyAutoSnapshotPolicyAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scheduled snapshot policy ID.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * Whether or not the scheduled snapshot policy is activated. FALSE: Not activated. TRUE: Activated. The default value is TRUE.
         * @type {boolean || null}
         */
        this.IsActivated = null;

        /**
         * Whether the snapshot created by this scheduled snapshot policy is retained permanently. FALSE: Not retained permanently. TRUE: Retained permanently. The default value is FALSE.
         * @type {boolean || null}
         */
        this.IsPermanent = null;

        /**
         * The name of the scheduled snapshot policy to be created. If it is left empty, the default is 'Not named'. The maximum length cannot exceed 60 bytes.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyName = null;

        /**
         * The policy for executing the scheduled snapshot.
         * @type {Array.<Policy> || null}
         */
        this.Policy = null;

        /**
         * Number of days to retain the snapshots created according to this scheduled snapshot policy. If this parameter is specified, `IsPermanent` cannot be specified as `TRUE`; otherwise, they will conflict with each other.
         * @type {number || null}
         */
        this.RetentionDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.IsActivated = 'IsActivated' in params ? params.IsActivated : null;
        this.IsPermanent = 'IsPermanent' in params ? params.IsPermanent : null;
        this.AutoSnapshotPolicyName = 'AutoSnapshotPolicyName' in params ? params.AutoSnapshotPolicyName : null;

        if (params.Policy) {
            this.Policy = new Array();
            for (let z in params.Policy) {
                let obj = new Policy();
                obj.deserialize(params.Policy[z]);
                this.Policy.push(obj);
            }
        }
        this.RetentionDays = 'RetentionDays' in params ? params.RetentionDays : null;

    }
}

/**
 * DescribeDiskConfigQuota response structure.
 * @class
 */
class DescribeDiskConfigQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of cloud disk configurations.
         * @type {Array.<DiskConfig> || null}
         */
        this.DiskConfigSet = null;

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

        if (params.DiskConfigSet) {
            this.DiskConfigSet = new Array();
            for (let z in params.DiskConfigSet) {
                let obj = new DiskConfig();
                obj.deserialize(params.DiskConfigSet[z]);
                this.DiskConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApplyDiskBackup response structure.
 * @class
 */
class ApplyDiskBackupResponse extends  AbstractModel {
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
 * InquiryPriceResizeDisk response structure.
 * @class
 */
class InquiryPriceResizeDiskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Describes the price of expanding the cloud disk.
         * @type {PrepayPrice || null}
         */
        this.DiskPrice = null;

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

        if (params.DiskPrice) {
            let obj = new PrepayPrice();
            obj.deserialize(params.DiskPrice)
            this.DiskPrice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ResizeDisk response structure.
 * @class
 */
class ResizeDiskResponse extends  AbstractModel {
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
 * The details of a cloud disk
 * @class
 */
class Disk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the cloud disk terminates along with the instance mounted to it. <br><li>true: Cloud disk will also be terminated when instance terminates, so only hourly postpaid cloud disk are supported.<br><li>false: Cloud disk does not terminate when instance terminates.
Note: This field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

        /**
         * Auto renewal flag. Supported values:<br><li>NOTIFY_AND_AUTO_RENEW: Notify expiry and renew automatically<br><li>NOTIFY_AND_MANUAL_RENEW: Notify expiry but not renew automatically<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW: Neither notify expiry nor renew automatically.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Cloud disk types. Valid values: <br><li>CLOUD_BASIC: HDD cloud disk <br><li>CLOUD_PREMIUM: Premium Cloud Disk <br><li>CLOUD_BSSD: General Purpose SSD <br><li>CLOUD_SSD: SSD <br><li>CLOUD_HSSD: Enhanced SSD <br><li>CLOUD_TSSD: Tremendous SSD
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * The state of the cloud disk. Value range: <br><li>UNATTACHED: Not mounted <br><li>ATTACHING: Mounting <br><li>ATTACHED: Mounted <br><li>DETACHING: Un-mounting <br><li>EXPANDING: Expanding <br><li>ROLLBACKING: Rolling back <br><li>TORECYCE: Pending recycling. <br><li>DUMPING: Copying the hard drive.
         * @type {string || null}
         */
        this.DiskState = null;

        /**
         * The total number of snapshots of the cloud disk.
         * @type {number || null}
         */
        this.SnapshotCount = null;

        /**
         * Cloud disk already mounted to CVM, and both CVM and cloud disk use monthly subscription.<br><li>true: CVM has auto-renewal flag set up, but cloud disk does not.<br><li>false: Cloud disk auto-renewal flag set up normally.
Note: This field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.AutoRenewFlagError = null;

        /**
         * Whether the cloud disk is in the status of snapshot rollback. Value range: <br><li>false: No <br><li>true: Yes
         * @type {boolean || null}
         */
        this.Rollbacking = null;

        /**
         * For non-shareable cloud disks, this parameter is null. For shareable cloud disks, this parameters indicates this cloud disk's Instance IDs currently mounted to the CVM.
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

        /**
         * Whether the cloud disk is encrypted. Value range: <br><li>false: Not encrypted <br><li>true: Encrypted.
         * @type {boolean || null}
         */
        this.Encrypt = null;

        /**
         * Cloud disk name.
         * @type {string || null}
         */
        this.DiskName = null;

        /**
         * Specifies whether to create a snapshot when the cloud disk is terminated due to overdue payment or expiration. `true`: create snapshot; `false`: do not create snapshot.
         * @type {boolean || null}
         */
        this.BackupDisk = null;

        /**
         * The tag bound to the cloud disk. The value Null is used when no tag is bound to the cloud disk.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * ID of the CVM to which the cloud disk is mounted.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Cloud disk mount method. Valid values: <br><li>PF: mount as a PF (Physical Function)<br><li>VF: mount as a VF (Virtual Function)
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.AttachMode = null;

        /**
         * ID of the periodic snapshot associated to the cloud disk. This parameter is returned only if the value of parameter ReturnBindAutoSnapshotPolicy is TRUE when the API DescribeDisks is called.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.AutoSnapshotPolicyIds = null;

        /**
         * Extra performance for a cloud disk, in MB/sec.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ThroughputPerformance = null;

        /**
         * Whether cloud disk is in process of type change. Value range: <br><li>false: Cloud disk not in process of type change. <br><li>true: Cloud disk type change has been launched, and migration is in process.
Note: This field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.Migrating = null;

        /**
         * Cloud disk ID.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * The total capacity of the snapshots of the cloud disk. Unit: MB.
         * @type {number || null}
         */
        this.SnapshotSize = null;

        /**
         * Location of the cloud disk.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Determines whether or not prepaid cloud disk supports active return. <br><li>true: Active return supported.<br><li>false: Active return not supported.
Note: This field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.IsReturnable = null;

        /**
         * Expiration time of the cloud disk.
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * Whether the cloud disk is mounted to the CVM. Value range: <br><li>false: Unmounted <br><li>true: Mounted.
         * @type {boolean || null}
         */
        this.Attached = null;

        /**
         * Cloud disk size (in GB).
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Migration progress of cloud disk type change, from 0 to 100.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.MigratePercent = null;

        /**
         * Cloud disk type. Value range:<br><li>SYSTEM_DISK: System disk <br><li>DATA_DISK: Data disk.
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * Billing method. Value range: <br><li>PREPAID: Prepaid, that is, monthly subscription<br><li>POSTPAID_BY_HOUR: Postpaid, that is, pay as you go.
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * Whether it is an elastic cloud disk. false: Non-elastic cloud disk; true: Elastic cloud disk.
         * @type {boolean || null}
         */
        this.Portable = null;

        /**
         * Whether the cloud disk has the capability to create snapshots. Value range: <br><li>false: Cannot create snapshots. true: Can create snapshots.
         * @type {boolean || null}
         */
        this.SnapshotAbility = null;

        /**
         * This field is only applicable when the instance is already mounted to the cloud disk, and both the instance and the cloud disk use monthly subscription. <br><li>true: Expiration time of cloud disk is earlier than that of the instance.<br><li>false:Expiration time of cloud disk is later than that of the instance.
Note: This field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.DeadlineError = null;

        /**
         * Rollback progress of a cloud disk snapshot.
         * @type {number || null}
         */
        this.RollbackPercent = null;

        /**
         * Number of days from current time until disk expiration (only applicable for prepaid disks).
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DifferDaysOfDeadline = null;

        /**
         * In circumstances where the prepaid cloud disk does not support active return, this parameter indicates the reason that return is not supported. Value range: <br><li>1: The cloud disk has already been returned. <br><li>2: The cloud disk has already expired. <br><li>3: The cloud disk does not support return. <br><li> 8: The limit on the number of returns is exceeded.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.ReturnFailCode = null;

        /**
         * Whether or not cloud disk is shareable cloud disk.
         * @type {boolean || null}
         */
        this.Shareable = null;

        /**
         * Creation time of the cloud disk.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Delete the associated non-permanently reserved snapshots upon deletion of the source cloud disk. `0`: No (default). `1`: Yes. To check whether a snapshot is permanently reserved, refer to the `IsPermanent` field returned by the `DescribeSnapshots` API. 
         * @type {number || null}
         */
        this.DeleteSnapshot = null;

        /**
         * Number of used cloud disk backups.
         * @type {number || null}
         */
        this.DiskBackupCount = null;

        /**
         * Type of the instance mounted to the cloud disk. Valid values: <br><li>CVM<br><li>EKS
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
        this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskState = 'DiskState' in params ? params.DiskState : null;
        this.SnapshotCount = 'SnapshotCount' in params ? params.SnapshotCount : null;
        this.AutoRenewFlagError = 'AutoRenewFlagError' in params ? params.AutoRenewFlagError : null;
        this.Rollbacking = 'Rollbacking' in params ? params.Rollbacking : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;
        this.DiskName = 'DiskName' in params ? params.DiskName : null;
        this.BackupDisk = 'BackupDisk' in params ? params.BackupDisk : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AttachMode = 'AttachMode' in params ? params.AttachMode : null;
        this.AutoSnapshotPolicyIds = 'AutoSnapshotPolicyIds' in params ? params.AutoSnapshotPolicyIds : null;
        this.ThroughputPerformance = 'ThroughputPerformance' in params ? params.ThroughputPerformance : null;
        this.Migrating = 'Migrating' in params ? params.Migrating : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.SnapshotSize = 'SnapshotSize' in params ? params.SnapshotSize : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.IsReturnable = 'IsReturnable' in params ? params.IsReturnable : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.Attached = 'Attached' in params ? params.Attached : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.MigratePercent = 'MigratePercent' in params ? params.MigratePercent : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.DiskChargeType = 'DiskChargeType' in params ? params.DiskChargeType : null;
        this.Portable = 'Portable' in params ? params.Portable : null;
        this.SnapshotAbility = 'SnapshotAbility' in params ? params.SnapshotAbility : null;
        this.DeadlineError = 'DeadlineError' in params ? params.DeadlineError : null;
        this.RollbackPercent = 'RollbackPercent' in params ? params.RollbackPercent : null;
        this.DifferDaysOfDeadline = 'DifferDaysOfDeadline' in params ? params.DifferDaysOfDeadline : null;
        this.ReturnFailCode = 'ReturnFailCode' in params ? params.ReturnFailCode : null;
        this.Shareable = 'Shareable' in params ? params.Shareable : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DeleteSnapshot = 'DeleteSnapshot' in params ? params.DeleteSnapshot : null;
        this.DiskBackupCount = 'DiskBackupCount' in params ? params.DiskBackupCount : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * TerminateDisks response structure.
 * @class
 */
class TerminateDisksResponse extends  AbstractModel {
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
 * ApplySnapshot response structure.
 * @class
 */
class ApplySnapshotResponse extends  AbstractModel {
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
 * DetachDisks request structure.
 * @class
 */
class DetachDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of the cloud disks to be unmounted, which can be queried via the [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1) API. Up to 10 elastic cloud disks can be unmounted in a single request.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Indicates the CVM from which you want to unmount the disks. This parameter is only available for shared cloud disks.
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
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * CreateSnapshot request structure.
 * @class
 */
class CreateSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cloud disk for which to create a snapshot, which can be queried through the [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Snapshot name. If it is not specified, "Unnamed" will be used by default.
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * Expiration time of the snapshot. It must be in UTC ISO-8601 format, such as 2022-01-08T09:47:55+00:00. The snapshot will be automatically deleted when it expires.
         * @type {string || null}
         */
        this.Deadline = null;

        /**
         * ID of the cloud disk backup point. When this parameter is specified, the snapshot will be created from the backup point.
         * @type {string || null}
         */
        this.DiskBackupId = null;

        /**
         * Tags bound to the snapshot.
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
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.DiskBackupId = 'DiskBackupId' in params ? params.DiskBackupId : null;

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
 * DescribeInstancesDiskNum request structure.
 * @class
 */
class DescribeInstancesDiskNumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the CVM instance can be queried via the API [DescribeInstances](https://intl.cloud.tencent.com/document/product/213/15728?from_cn_redirect=1).
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
 * DescribeSnapshotSharePermission response structure.
 * @class
 */
class DescribeSnapshotSharePermissionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The set of snapshot sharing information
         * @type {Array.<SharePermission> || null}
         */
        this.SharePermissionSet = null;

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

        if (params.SharePermissionSet) {
            this.SharePermissionSet = new Array();
            for (let z in params.SharePermissionSet) {
                let obj = new SharePermission();
                obj.deserialize(params.SharePermissionSet[z]);
                this.SharePermissionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDiskBackupQuota response structure.
 * @class
 */
class ModifyDiskBackupQuotaResponse extends  AbstractModel {
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
 * DescribeSnapshotSharePermission request structure.
 * @class
 */
class DescribeSnapshotSharePermissionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the snapshot to be queried. You can obtain this by using [DescribeSnapshots](https://intl.cloud.tencent.com/document/api/362/15647?from_cn_redirect=1).
         * @type {string || null}
         */
        this.SnapshotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;

    }
}

/**
 * InquirePriceModifyDiskBackupQuota request structure.
 * @class
 */
class InquirePriceModifyDiskBackupQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk ID, which can be queried through the `DescribeDisks` API.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Cloud disk backup point quota after the modification, i.e., the number of backup points that a cloud disk can have.
         * @type {number || null}
         */
        this.DiskBackupQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskBackupQuota = 'DiskBackupQuota' in params ? params.DiskBackupQuota : null;

    }
}

/**
 * DescribeSnapshotOperationLogs response structure.
 * @class
 */
class DescribeSnapshotOperationLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of snapshot operation logs.
         * @type {Array.<SnapshotOperationLog> || null}
         */
        this.SnapshotOperationLogSet = null;

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

        if (params.SnapshotOperationLogSet) {
            this.SnapshotOperationLogSet = new Array();
            for (let z in params.SnapshotOperationLogSet) {
                let obj = new SnapshotOperationLog();
                obj.deserialize(params.SnapshotOperationLogSet[z]);
                this.SnapshotOperationLogSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSnapshots request structure.
 * @class
 */
class DeleteSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of snapshots to be deleted, which can be queried via [DescribeSnapshots](https://intl.cloud.tencent.com/document/product/362/15647?from_cn_redirect=1).
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

        /**
         * Whether to forcibly delete the image associated with the snapshot
         * @type {boolean || null}
         */
        this.DeleteBindImages = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotIds = 'SnapshotIds' in params ? params.SnapshotIds : null;
        this.DeleteBindImages = 'DeleteBindImages' in params ? params.DeleteBindImages : null;

    }
}

/**
 * DeleteAutoSnapshotPolicies response structure.
 * @class
 */
class DeleteAutoSnapshotPoliciesResponse extends  AbstractModel {
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
 * DescribeDisks response structure.
 * @class
 */
class DescribeDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The quantity of cloud disks meeting the conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of cloud disk details.
         * @type {Array.<Disk> || null}
         */
        this.DiskSet = null;

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

        if (params.DiskSet) {
            this.DiskSet = new Array();
            for (let z in params.DiskSet) {
                let obj = new Disk();
                obj.deserialize(params.DiskSet[z]);
                this.DiskSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * This describes the abstract location of the instance, including the availability zone in which it is located, the projects to which it belongs, and the ID and name of the dedicated clusters to which it belongs.
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the [Availability Zone](https://intl.cloud.tencent.com/document/product/213/15753?from_cn_redirect=1#ZoneInfo) to which the cloud disk belongs. This parameter can be obtained from the Zone field in the returned values of [DescribeZones](https://intl.cloud.tencent.com/document/product/213/15707?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Cage ID. When it is an input parameter, the specified CageID resource is operated, and it can be left blank. When it is an output parameter, it is the ID of the cage the resource belongs to, and it can be left blank.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.CageId = null;

        /**
         * ID of the project to which the instance belongs. This parameter can be obtained from the projectId field in the returned values of [DescribeProject](https://intl.cloud.tencent.com/document/api/378/4400?from_cn_redirect=1). If this is left empty, default project is used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Dedicated cluster name. When it is an input parameter, it is ignored.  When it is an output parameter, it is the name of the dedicated cluster the cloud disk belongs to, and it can be left blank.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.CdcName = null;

        /**
         * ID of dedicated cluster which the instance belongs to. When it is an input parameter, the specified CdcId dedicated cluster resource is operated, and it can be left blank. When it is an output parameter, it is the ID of the dedicated cluster which the resource belongs to, and it can be left blank.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.CdcId = null;

        /**
         * Dedicated cluster ID
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CageId = 'CageId' in params ? params.CageId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CdcName = 'CdcName' in params ? params.CdcName : null;
        this.CdcId = 'CdcId' in params ? params.CdcId : null;
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;

    }
}

/**
 * DeleteSnapshots response structure.
 * @class
 */
class DeleteSnapshotsResponse extends  AbstractModel {
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
 * ModifySnapshotAttribute response structure.
 * @class
 */
class ModifySnapshotAttributeResponse extends  AbstractModel {
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
 * ModifyDiskAttributes request structure.
 * @class
 */
class ModifyDiskAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of one or more cloud disks to be operated. If multiple cloud disk IDs are selected, it only supports modifying all cloud disks with the same attributes.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * The new project ID of the cloud disk. Only the project ID of elastic cloud disk can be modified. The available projects and their IDs can be queried via the API [DescribeProject](https://intl.cloud.tencent.com/document/api/378/4400?from_cn_redirect=1).
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Name of new cloud disk.
         * @type {string || null}
         */
        this.DiskName = null;

        /**
         * Whether it is an elastic cloud disk. FALSE: non-elastic cloud disk; TRUE: elastic cloud disk. You can only modify non-elastic cloud disks to elastic cloud disks.
         * @type {boolean || null}
         */
        this.Portable = null;

        /**
         * Whether the cloud disk is terminated with the CVM after it has been successfully mounted. `TRUE` indicates that it is terminated with the CVM. `FALSE` indicates that it is not terminated with the CVM. This is only supported for cloud disks and data disks that are pay-as-you-go.
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

        /**
         * When changing the type of a cloud disk, this parameter can be passed to indicate the desired cloud disk type. Value range: <br><li>CLOUD_PREMIUM: Premium cloud storage.  <br><li>CLOUD_SSD: SSD cloud disk. <br>Currently, batch operations are not supported for changing type. That is, when `DiskType` is passed, only one cloud disk can be passed through `DiskIds`. <br>When the cloud disk type is changed, the changing of other attributes is not supported concurrently.
         * @type {string || null}
         */
        this.DiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DiskName = 'DiskName' in params ? params.DiskName : null;
        this.Portable = 'Portable' in params ? params.Portable : null;
        this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;

    }
}

/**
 * GetSnapOverview request structure.
 * @class
 */
class GetSnapOverviewRequest extends  AbstractModel {
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
 * Image
 * @class
 */
class Image extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image instance ID.
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Image name.
         * @type {string || null}
         */
        this.ImageName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;

    }
}

/**
 * TerminateDisks request structure.
 * @class
 */
class TerminateDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of cloud disk IDs required to be returned.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Delete the associated non-permanently reserved snapshots upon deletion of the source cloud disk. `0`: No (default). `1`: Yes. To check whether a snapshot is permanently reserved, refer to the `IsPermanent` field returned by the `DescribeSnapshots` API. 
         * @type {number || null}
         */
        this.DeleteSnapshot = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;
        this.DeleteSnapshot = 'DeleteSnapshot' in params ? params.DeleteSnapshot : null;

    }
}

/**
 * DescribeInstancesDiskNum response structure.
 * @class
 */
class DescribeInstancesDiskNumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The quantity of mounted and mountable elastic cloud disks for each cloud virtual machine
         * @type {Array.<AttachDetail> || null}
         */
        this.AttachDetail = null;

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

        if (params.AttachDetail) {
            this.AttachDetail = new Array();
            for (let z in params.AttachDetail) {
                let obj = new AttachDetail();
                obj.deserialize(params.AttachDetail[z]);
                this.AttachDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDiskOperationLogs response structure.
 * @class
 */
class DescribeDiskOperationLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of cloud disk operation logs.
         * @type {Array.<DiskOperationLog> || null}
         */
        this.DiskOperationLogSet = null;

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

        if (params.DiskOperationLogSet) {
            this.DiskOperationLogSet = new Array();
            for (let z in params.DiskOperationLogSet) {
                let obj = new DiskOperationLog();
                obj.deserialize(params.DiskOperationLogSet[z]);
                this.DiskOperationLogSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResizeDisk request structure.
 * @class
 */
class ResizeDiskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cloud disk, which can be queried via the API [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Cloud disk size after scale out (in GB). This must be larger than the current size of the cloud disk. For the value range of the cloud disk sizes, see cloud disk [Product Types](https://intl.cloud.tencent.com/document/product/362/2353?from_cn_redirect=1).
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
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * ApplyDiskBackup request structure.
 * @class
 */
class ApplyDiskBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cloud disk backup point, which can be queried through the `DescribeDiskBackups` API.
         * @type {string || null}
         */
        this.DiskBackupId = null;

        /**
         * ID of the original cloud disk of the backup point, which can be queried through the `DescribeDisks` API.
         * @type {string || null}
         */
        this.DiskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskBackupId = 'DiskBackupId' in params ? params.DiskBackupId : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;

    }
}

/**
 * InitializeDisks request structure.
 * @class
 */
class InitializeDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID list of the cloud disks to be reinitialized. Up to 20 disks can be reinitialized at a time.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;

    }
}

/**
 * CreateAutoSnapshotPolicy response structure.
 * @class
 */
class CreateAutoSnapshotPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the newly created scheduled snapshot policy.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * The time that initial backup will start.
         * @type {string || null}
         */
        this.NextTriggerTime = null;

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
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.NextTriggerTime = 'NextTriggerTime' in params ? params.NextTriggerTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySnapshotAttribute request structure.
 * @class
 */
class ModifySnapshotAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot ID, which can be queried via [DescribeSnapshots](https://intl.cloud.tencent.com/document/product/362/15647?from_cn_redirect=1).
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Name of new snapshot. Maximum length is 60 bytes.
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * Snapshot retention mode. Valid values: `FALSE`: non-permanent retention; `TRUE`: permanent retention.
         * @type {boolean || null}
         */
        this.IsPermanent = null;

        /**
         * Expiration time of the snapshot. Setting this parameter will set the snapshot retention mode to `FALSE` (non-permanent retention) and the snapshot will be automatically deleted upon expiration.
         * @type {string || null}
         */
        this.Deadline = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.IsPermanent = 'IsPermanent' in params ? params.IsPermanent : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;

    }
}

/**
 * Cloud disk configuration.
 * @class
 */
class DiskConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the configuration is available.
         * @type {boolean || null}
         */
        this.Available = null;

        /**
         * Billing method. Value range: <br><li>PREPAID: Prepaid, that is, monthly subscription<br><li>POSTPAID_BY_HOUR: Postpaid, that is, pay as you go.
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * The [Availability Region](https://intl.cloud.tencent.com/document/product/213/15753?from_cn_redirect=1#ZoneInfo) of the cloud drive.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance model series. For more information, please see [Instance Models](https://intl.cloud.tencent.com/document/product/213/11518?from_cn_redirect=1)
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * Type of cloud disk medium. Value range: <br><li>CLOUD_BASIC: Ordinary cloud disk <br><li>CLOUD_PREMIUM: Premium cloud storage <br><li>CLOUD_SSD: SSD cloud disk.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Minimum increment of cloud disk size adjustment in GB.
Note: This field might return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepSize = null;

        /**
         * Additional performance range.
Note: This field might return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.ExtraPerformanceRange = null;

        /**
         * Instance model.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.DeviceClass = null;

        /**
         * Cloud disk type. Value range: <br><li>SYSTEM_DISK: System disk <br><li>DATA_DISK: Data disk.
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * The minimum configurable cloud disk size (in GB).
         * @type {number || null}
         */
        this.MinDiskSize = null;

        /**
         * The maximum configurable cloud disk size (in GB).
         * @type {number || null}
         */
        this.MaxDiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Available = 'Available' in params ? params.Available : null;
        this.DiskChargeType = 'DiskChargeType' in params ? params.DiskChargeType : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.StepSize = 'StepSize' in params ? params.StepSize : null;
        this.ExtraPerformanceRange = 'ExtraPerformanceRange' in params ? params.ExtraPerformanceRange : null;
        this.DeviceClass = 'DeviceClass' in params ? params.DeviceClass : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.MinDiskSize = 'MinDiskSize' in params ? params.MinDiskSize : null;
        this.MaxDiskSize = 'MaxDiskSize' in params ? params.MaxDiskSize : null;

    }
}

/**
 * InquirePriceModifyDiskBackupQuota response structure.
 * @class
 */
class InquirePriceModifyDiskBackupQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price of the cloud disk after its backup point quota is modified.
         * @type {Price || null}
         */
        this.DiskPrice = null;

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

        if (params.DiskPrice) {
            let obj = new Price();
            obj.deserialize(params.DiskPrice)
            this.DiskPrice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAutoSnapshotPolicies request structure.
 * @class
 */
class DeleteAutoSnapshotPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of scheduled snapshot policy IDs to be deleted.
         * @type {Array.<string> || null}
         */
        this.AutoSnapshotPolicyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyIds = 'AutoSnapshotPolicyIds' in params ? params.AutoSnapshotPolicyIds : null;

    }
}

/**
 * Billing mode of the instance
 * @class
 */
class DiskChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subscription period of the cloud disk in months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Auto-renewal flag. Valid values: <br><li>NOTIFY_AND_AUTO_RENEW: Notify upon expiration and renew automatically <br><li>NOTIFY_AND_MANUAL_RENEW: Notify upon expiration but do not renew automatically <br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW: Neither notify upon expiration nor renew automatically <br><br>Default value: NOTIFY_AND_MANUAL_RENEW.
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * You can specify this parameter when you need to ensure that a cloud disk and the CVM instance to which it is attached have the same expiration time. This parameter represents the current expiration time of the instance. In this case, if you specify `Period`, `Period` will represent how long you want to renew the instance, and the cloud disk will be renewed based on the new expiration time of the instance. For example, the value of this parameter can be `2018-03-30 20:15:03`.
         * @type {string || null}
         */
        this.CurInstanceDeadline = null;

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
        this.CurInstanceDeadline = 'CurInstanceDeadline' in params ? params.CurInstanceDeadline : null;

    }
}

/**
 * Key-value pair filters for conditional filtering queries.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of filter key.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * One or more filter values.
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
 * InquiryPriceCreateDisks request structure.
 * @class
 */
class InquiryPriceCreateDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk billing mode. <br><li>POSTPAID_BY_HOUR: Hourly pay-as-you-go.
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * Cloud disk media type. Valid values: <br><li>CLOUD_BASIC: HDD Cloud Storage<br><li>CLOUD_PREMIUM: Premium Cloud Disk<br><li>CLOUD_SSD: SSD<br><li>CLOUD_HSSD: Enhanced SSD<br><li>CLOUD_TSSD: ulTra SSD.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Cloud disk size in GB. For the value range, see [Cloud Disk Types](https://intl.cloud.tencent.com/document/product/362/2353?from_cn_redirect=1).
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * ID of the project to which the cloud disk belongs.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Number of cloud disks to be purchased. If it is not specified, `1` will be used by default.
         * @type {number || null}
         */
        this.DiskCount = null;

        /**
         * Extra performance in MB/s purchased for a cloud disk.<br>This parameter is only valid for Enhanced SSD (CLOUD_HSSD) and ulTra SSD (CLOUD_TSSD).
         * @type {number || null}
         */
        this.ThroughputPerformance = null;

        /**
         * Relevant parameter settings for the prepaid mode (i.e., monthly subscription). The monthly subscription cloud disk purchase attributes such as usage period and whether or not auto-renewal is set up can be specified using this parameter. <br>This parameter is required when creating a prepaid cloud disk. This parameter is not required when creating an hourly postpaid cloud disk.
         * @type {DiskChargePrepaid || null}
         */
        this.DiskChargePrepaid = null;

        /**
         * Specifies the cloud disk backup point quota.
         * @type {number || null}
         */
        this.DiskBackupQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskChargeType = 'DiskChargeType' in params ? params.DiskChargeType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DiskCount = 'DiskCount' in params ? params.DiskCount : null;
        this.ThroughputPerformance = 'ThroughputPerformance' in params ? params.ThroughputPerformance : null;

        if (params.DiskChargePrepaid) {
            let obj = new DiskChargePrepaid();
            obj.deserialize(params.DiskChargePrepaid)
            this.DiskChargePrepaid = obj;
        }
        this.DiskBackupQuota = 'DiskBackupQuota' in params ? params.DiskBackupQuota : null;

    }
}

/**
 * DescribeSnapshots response structure.
 * @class
 */
class DescribeSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of snapshots.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of snapshot details.
         * @type {Array.<Snapshot> || null}
         */
        this.SnapshotSet = null;

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

        if (params.SnapshotSet) {
            this.SnapshotSet = new Array();
            for (let z in params.SnapshotSet) {
                let obj = new Snapshot();
                obj.deserialize(params.SnapshotSet[z]);
                this.SnapshotSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The details of a snapshot
 * @class
 */
class Snapshot extends  AbstractModel {
    constructor(){
        super();

        /**
         * Location of the snapshot.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Whether the snapshot is replicated across regions. Value range: <br><li>true: Indicates that the snapshot is replicated across regions. <br><li>false: Indicates that the snapshot belongs to the local region.
         * @type {boolean || null}
         */
        this.CopyFromRemote = null;

        /**
         * Snapshot status. Valid values: <br><li>NORMAL: normal <br><li>CREATING: creating<br><li>ROLLBACKING: rolling back<br><li>COPYING_FROM_REMOTE: cross-region replicating<li>CHECKING_COPIED: verifying the cross-region replicated data<br><li>TORECYCLE: to be repossessed.
         * @type {string || null}
         */
        this.SnapshotState = null;

        /**
         * Whether it is a permanent snapshot. Value range: <br><li>true: Permanent snapshot <br><li>false: Non-permanent snapshot.
         * @type {boolean || null}
         */
        this.IsPermanent = null;

        /**
         * Snapshot name, the user-defined snapshot alias. Call [ModifySnapshotAttribute](https://intl.cloud.tencent.com/document/product/362/15650?from_cn_redirect=1) to modify this field.
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * The expiration time of the snapshot. If the snapshot is permanently retained, this field is blank.
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * The progress percentage for snapshot creation. This field is always 100 after the snapshot is created successfully.
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * List of images associated with snapshot.
         * @type {Array.<Image> || null}
         */
        this.Images = null;

        /**
         * Number of snapshots currently shared
         * @type {number || null}
         */
        this.ShareReference = null;

        /**
         * Snapshot type. This value can currently be either PRIVATE_SNAPSHOT or SHARED_SNAPSHOT.
         * @type {string || null}
         */
        this.SnapshotType = null;

        /**
         * Size of the cloud disk used to create this snapshot (in GB).
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * ID of the cloud disk used to create this snapshot.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * The destination region to which the snapshot is being replicated. Default value is [ ].
         * @type {Array.<string> || null}
         */
        this.CopyingToRegions = null;

        /**
         * Whether the snapshot is created from an encrypted disk. Value range: <br><li>true: Yes <br><li>false: No.
         * @type {boolean || null}
         */
        this.Encrypt = null;

        /**
         * Creation time of the snapshot.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Number of images associated with snapshot.
         * @type {number || null}
         */
        this.ImageCount = null;

        /**
         * The type of the cloud disk used to create the snapshot. Value range: <br><li>SYSTEM_DISK: System disk <br><li>DATA_DISK: Data disk.
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * Snapshot ID.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * The time when the snapshot sharing starts
         * @type {string || null}
         */
        this.TimeStartShare = null;

        /**
         * List of tags associated with the snapshot.
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

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.CopyFromRemote = 'CopyFromRemote' in params ? params.CopyFromRemote : null;
        this.SnapshotState = 'SnapshotState' in params ? params.SnapshotState : null;
        this.IsPermanent = 'IsPermanent' in params ? params.IsPermanent : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.Percent = 'Percent' in params ? params.Percent : null;

        if (params.Images) {
            this.Images = new Array();
            for (let z in params.Images) {
                let obj = new Image();
                obj.deserialize(params.Images[z]);
                this.Images.push(obj);
            }
        }
        this.ShareReference = 'ShareReference' in params ? params.ShareReference : null;
        this.SnapshotType = 'SnapshotType' in params ? params.SnapshotType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.CopyingToRegions = 'CopyingToRegions' in params ? params.CopyingToRegions : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ImageCount = 'ImageCount' in params ? params.ImageCount : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.TimeStartShare = 'TimeStartShare' in params ? params.TimeStartShare : null;

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
 * CreateDisks response structure.
 * @class
 */
class CreateDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the created cloud disks.
         * @type {Array.<string> || null}
         */
        this.DiskIdSet = null;

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
        this.DiskIdSet = 'DiskIdSet' in params ? params.DiskIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifySnapshotsSharePermission request structure.
 * @class
 */
class ModifySnapshotsSharePermissionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of account IDs with which a snapshot is shared. For the format of array-type parameters, see [API Introduction](https://intl.cloud.tencent.com/document/api/213/568?from_cn_redirect=1). You can find the account ID in [Account Information](https://console.cloud.tencent.com/developer).
         * @type {Array.<string> || null}
         */
        this.AccountIds = null;

        /**
         * Operations. Valid values: `SHARE`, sharing an image; `CANCEL`, cancelling the sharing of an image.
         * @type {string || null}
         */
        this.Permission = null;

        /**
         * The ID of the snapshot. You can obtain this by using [DescribeSnapshots](https://intl.cloud.tencent.com/document/api/362/15647?from_cn_redirect=1).
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountIds = 'AccountIds' in params ? params.AccountIds : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.SnapshotIds = 'SnapshotIds' in params ? params.SnapshotIds : null;

    }
}

/**
 * The operation log of the cloud disk.
 * @class
 */
class DiskOperationLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN of operator.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Operation type. Value range:
CBS_OPERATION_ATTACH: Mount cloud disk
CBS_OPERATION_DETACH: Unmount cloud disk
CBS_OPERATION_RENEW: Renew
CBS_OPERATION_EXPAND: Expand
CBS_OPERATION_CREATE: Create
CBS_OPERATION_ISOLATE: Isolate
CBS_OPERATION_MODIFY: Modify cloud disk attributes
ASP_OPERATION_BIND: Associate scheduled snapshot policy
ASP_OPERATION_UNBIND: Cancel associated scheduled snapshot policy
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Cloud disk ID of operation.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Status of operation. Value range:
SUCCESS: Operation successful 
FAILED: Operation failed 
PROCESSING: Operation in process
         * @type {string || null}
         */
        this.OperationState = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.OperationState = 'OperationState' in params ? params.OperationState : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * BindAutoSnapshotPolicy response structure.
 * @class
 */
class BindAutoSnapshotPolicyResponse extends  AbstractModel {
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
 * DescribeDiskOperationLogs request structure.
 * @class
 */
class DescribeDiskOperationLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions. The following conditions are supported:
<li>disk-id - Array of String - Required or not: Yes - Filter by cloud disk ID, with maximum of 10 cloud disk IDs able to be specified per request.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The start time of the operation logs to be queried, for example: '2019-11-22 00:00:00"
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The end time of the operation logs to be queried, for example: '2019-11-22 23:59:59"
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Cloud disk backup point.
 * @class
 */
class DiskBackup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk backup point ID.
         * @type {string || null}
         */
        this.DiskBackupId = null;

        /**
         * ID of the cloud disk with which the backup point is associated.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Cloud disk size in GB.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Cloud disk type. Valid values:<br><li>SYSTEM_DISK: System disk <br><li>DATA_DISK: Data disk
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * Backup point name.
         * @type {string || null}
         */
        this.DiskBackupName = null;

        /**
         * Cloud disk backup point status. Valid values:<br><li>NORMAL: Normal<br><li>CREATING: Creating<br><li>ROLLBACKING: Rolling back
         * @type {string || null}
         */
        this.DiskBackupState = null;

        /**
         * Cloud disk creation progress in percentage.
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * Creation time of the cloud disk backup point.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Whether the cloud disk is encrypted. Valid values: <br><li>false: Not encrypted <br><li>true: Encrypted
         * @type {boolean || null}
         */
        this.Encrypt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskBackupId = 'DiskBackupId' in params ? params.DiskBackupId : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.DiskBackupName = 'DiskBackupName' in params ? params.DiskBackupName : null;
        this.DiskBackupState = 'DiskBackupState' in params ? params.DiskBackupState : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;

    }
}

/**
 * DescribeDisks request structure.
 * @class
 */
class DescribeDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query by one or more cloud disk IDs, such as `disk-11112222`. For the format of this parameter, please see the ids.N section of the API [Introduction](https://intl.cloud.tencent.com/document/product/362/15633?from_cn_redirect=1). This parameter does not support specifying both `DiskIds` and `Filters`.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Filters. You cannot specify `DiskIds` and `Filters` at the same time. <br><li>disk-usage - Array of String - Optional - Filters by cloud disk type. (SYSTEM_DISK: system disk | DATA_DISK: data disk) <br><li>disk-charge-type - Array of String - Optional - Filters by cloud disk billing method. (POSTPAID_BY_HOUR: pay-as-you-go) <br><li>portable - Array of String- Optional - Filters by whether the cloud disk is elastic or not. (TRUE: elastic | FALSE: non-elastic) <br><li>project-id - Array of Integer - Optional - Filters by the ID of the project to which a cloud disk belongs. <br><li>disk-id - Array of String - Optional - Filters by cloud disk ID, such as `disk-11112222`. <br><li>disk-name - Array of String - Optional - Filters by cloud disk name. <br><li>disk-type - Array of String - Optional - Filters by cloud disk media type (CLOUD_BASIC: HDD cloud disk | CLOUD_PREMIUM: Premium Cloud Storage | CLOUD_SSD: SSD cloud disk.) <br><li>disk-state - Array of String - Optional - Filters by cloud disk state. (UNATTACHED: not mounted | ATTACHING: being mounted | ATTACHED: mounted | DETACHING: being unmounted | EXPANDING: being expanded | ROLLBACKING: being rolled back | TORECYCLE: to be repossessed.) <br><li>instance-id - Array of String - Optional - Filters by the ID of the CVM instance on which a cloud disk is mounted. You can use this parameter to query the cloud disks mounted on specific CVMs. <br><li>zone - Array of String - Optional - Filters by [availability zone](https://intl.cloud.tencent.com/document/product/213/15753?from_cn_redirect=1#ZoneInfo) <br><li>instance-ip-address - Array of String - Optional - Filters by the private or public IP of the CVM on which a cloud disk is mounted. <br><li>instance-name - Array of String - Optional - Filters by the name of the instance on which a cloud disk is mounted. <br><li>tag-key - Array of String - Optional - Filters by tag key. <br><li>tag-value - Array of String - Optional - Filters by tag value. <br><li>tag:tag-key - Array of String - Optional - Filters by tag key-value pair. Please replace `tag-key` with a specific tag key.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default is 0. For more information on `Offset`, please see relevant sections in API [Introduction](https://intl.cloud.tencent.com/document/product/362/15633?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. Default is 20. Maximum is 100. For more information on `Limit`, please see relevant sections in API [Introduction](https://intl.cloud.tencent.com/document/product/362/15633?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Outputs the ordering of the cloud disk list. Value range: <br><li>ASC: Ascending order <br><li>DESC: Descending order.
         * @type {string || null}
         */
        this.Order = null;

        /**
         * The field by which the cloud disk list is sorted. Value range: <br><li>CREATE_TIME: sorted by the creation time of cloud disks <br><li>DEADLINE: sorted by the expiration time of cloud disks<br>By default, the cloud disk list is sorted by the creation time of cloud disks.
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Whether the ID of the periodic snapshot policy bound to the cloud disk needs to be returned in the cloud disk details. TRUE: return; FALSE: do not return.
         * @type {boolean || null}
         */
        this.ReturnBindAutoSnapshotPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;

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
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.ReturnBindAutoSnapshotPolicy = 'ReturnBindAutoSnapshotPolicy' in params ? params.ReturnBindAutoSnapshotPolicy : null;

    }
}

/**
 * DetachDisks response structure.
 * @class
 */
class DetachDisksResponse extends  AbstractModel {
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
 * Snapshot sharing information set
 * @class
 */
class SharePermission extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot sharing time
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * ID of the shared account
         * @type {string || null}
         */
        this.AccountId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.AccountId = 'AccountId' in params ? params.AccountId : null;

    }
}

/**
 * Execution policy for scheduled snapshot. It indicates that a scheduled snapshot policy is executed at the specified `Hour` in the days specified by `DayOfWeek` or `DayOfMonth` or once every `IntervalDays` days. Note: `DayOfWeek`, `DayOfMonth`, and `IntervalDays` are mutually exclusive, and only one policy rule can be set.
 * @class
 */
class Policy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the time that that the scheduled snapshot policy will be triggered. The unit is hour. The value range is [0-23]. 00:00-23:00 is a total of 24 time points that can be selected. 1 indicates 01:00, and so on.
         * @type {Array.<number> || null}
         */
        this.Hour = null;

        /**
         * Specifies the days of the week, from Monday to Sunday, on which a scheduled snapshot will be triggered. Value range: [0, 6]. 0 indicates triggering on Sunday, 1-6 indicate triggering on Monday-Saturday.
         * @type {Array.<number> || null}
         */
        this.DayOfWeek = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hour = 'Hour' in params ? params.Hour : null;
        this.DayOfWeek = 'DayOfWeek' in params ? params.DayOfWeek : null;

    }
}

/**
 * ModifyDiskExtraPerformance response structure.
 * @class
 */
class ModifyDiskExtraPerformanceResponse extends  AbstractModel {
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
 * InquirePriceModifyDiskExtraPerformance request structure.
 * @class
 */
class InquirePriceModifyDiskExtraPerformanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk ID, which can be queried via the [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * The extra throughput to purchase, in MB/s
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
        this.ThroughputPerformance = 'ThroughputPerformance' in params ? params.ThroughputPerformance : null;

    }
}

/**
 * InquiryPriceResizeDisk request structure.
 * @class
 */
class InquiryPriceResizeDiskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cloud disk, which can be queried via the API [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Cloud disk size after scale out (in GB). This cannot be smaller than the current size of the cloud disk. For the value range of the cloud disk sizes, see cloud disk [Product Types](https://intl.cloud.tencent.com/document/product/362/2353?from_cn_redirect=1).
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * ID of project the cloud disk belongs to. If selected, it can only be used for authentication.
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
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeDiskConfigQuota request structure.
 * @class
 */
class DescribeDiskConfigQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Inquiry type. Value range: INQUIRY_CBS_CONFIG: query the configuration list of cloud disks <br><li>INQUIRY_CVM_CONFIG: query the configuration list of cloud disks and instances.
         * @type {string || null}
         */
        this.InquiryType = null;

        /**
         * Query configuration under one or more [availability zone](https://intl.cloud.tencent.com/document/product/213/15753?from_cn_redirect=1#ZoneInfo).
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Billing mode. Value range: <br><li>POSTPAID_BY_HOUR: postpaid.
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * Cloud disk media type. Valid values: <br><li>CLOUD_BASIC: HDD cloud disk<br><li>CLOUD_PREMIUM: Premium Cloud Storage<br><li>CLOUD_SSD: SSD<br><li>CLOUD_HSSD: Enhanced SSD
         * @type {Array.<string> || null}
         */
        this.DiskTypes = null;

        /**
         * The system disk or data disk. Value range: <br><li>SYSTEM_DISK: System disk <br><li>DATA_DISK: Data disk.
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * Filter by the instance model series, such as S1, I1 and M1. For more information, please see [Instance Types](https://intl.cloud.tencent.com/document/product/213/11518?from_cn_redirect=1)
         * @type {Array.<string> || null}
         */
        this.InstanceFamilies = null;

        /**
         * Instance CPU cores.
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * Instance memory size.
         * @type {number || null}
         */
        this.Memory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InquiryType = 'InquiryType' in params ? params.InquiryType : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.DiskChargeType = 'DiskChargeType' in params ? params.DiskChargeType : null;
        this.DiskTypes = 'DiskTypes' in params ? params.DiskTypes : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.InstanceFamilies = 'InstanceFamilies' in params ? params.InstanceFamilies : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;

    }
}

/**
 * DescribeDiskAssociatedAutoSnapshotPolicy response structure.
 * @class
 */
class DescribeDiskAssociatedAutoSnapshotPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The quantity of scheduled snapshots binded to cloud disk.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of scheduled snapshots bound to cloud disk.
         * @type {Array.<AutoSnapshotPolicy> || null}
         */
        this.AutoSnapshotPolicySet = null;

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

        if (params.AutoSnapshotPolicySet) {
            this.AutoSnapshotPolicySet = new Array();
            for (let z in params.AutoSnapshotPolicySet) {
                let obj = new AutoSnapshotPolicy();
                obj.deserialize(params.AutoSnapshotPolicySet[z]);
                this.AutoSnapshotPolicySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSnapOverview response structure.
 * @class
 */
class GetSnapOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total snapshot size of the user
         * @type {number || null}
         */
        this.TotalSize = null;

        /**
         * The total billed snapshot size of the user
         * @type {number || null}
         */
        this.RealTradeSize = null;

        /**
         * Free tier of snapshot
         * @type {number || null}
         */
        this.FreeQuota = null;

        /**
         * Total number of snapshots
         * @type {number || null}
         */
        this.TotalNums = null;

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
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.RealTradeSize = 'RealTradeSize' in params ? params.RealTradeSize : null;
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;
        this.TotalNums = 'TotalNums' in params ? params.TotalNums : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes how a newly purchased cloud disk is initialized and attached to a CVM instance.
 * @class
 */
class AutoMountConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance to which the cloud disk is attached.
         * @type {Array.<string> || null}
         */
        this.InstanceId = null;

        /**
         * Mount point in the instance.
         * @type {Array.<string> || null}
         */
        this.MountPoint = null;

        /**
         * File system type. Valid values: `ext4`, `xfs`.
         * @type {string || null}
         */
        this.FileSystemType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MountPoint = 'MountPoint' in params ? params.MountPoint : null;
        this.FileSystemType = 'FileSystemType' in params ? params.FileSystemType : null;

    }
}

/**
 * CopySnapshotCrossRegions request structure.
 * @class
 */
class CopySnapshotCrossRegionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Destination regions of the replication task. You can query the value of regions by calling [DescribeRegions](https://intl.cloud.tencent.com/document/product/213/9456?from_cn_redirect=1) API. Note that you can only specify regions that support snapshots.
         * @type {Array.<string> || null}
         */
        this.DestinationRegions = null;

        /**
         * Snapshot ID, which can be queried via the [DescribeSnapshots](https://intl.cloud.tencent.com/document/product/362/15647?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Name of the snapshot replica. If it’s not specified, it defaults to “Copied [source snapshot ID from [region name]”
         * @type {string || null}
         */
        this.SnapshotName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DestinationRegions = 'DestinationRegions' in params ? params.DestinationRegions : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;

    }
}

/**
 * The cost of a prepaid order.
 * @class
 */
class PrepayPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original payment of a monthly-subscribed cloud disk or a snapshot, in USD.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discounted price of a monthly-subscribed cloud disk or a snapshot, in USD.
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * Original payment of a monthly-subscribed cloud disk or a snapshot, in USD, with six decimal places.
         * @type {string || null}
         */
        this.OriginalPriceHigh = null;

        /**
         * Discounted price of a monthly-subscribed cloud disk or a snapshot, in USD, with six decimal places.
         * @type {string || null}
         */
        this.DiscountPriceHigh = null;

        /**
         * Original unit price of a pay-as-you-go cloud disk, in USD.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * Billing unit for pay-as-you-go cloud disks. Valid value: <br><li>HOUR: billed hourly.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChargeUnit = null;

        /**
         * Discount unit price of a pay-as-you-go cloud disk, in USD.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscount = null;

        /**
         * Original unit price of a pay-as-you-go cloud disk, in USD, with six decimal places.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UnitPriceHigh = null;

        /**
         * Discounted unit price of a pay-as-you-go cloud disk, in USD, with six decimal places.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UnitPriceDiscountHigh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.OriginalPriceHigh = 'OriginalPriceHigh' in params ? params.OriginalPriceHigh : null;
        this.DiscountPriceHigh = 'DiscountPriceHigh' in params ? params.DiscountPriceHigh : null;
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.ChargeUnit = 'ChargeUnit' in params ? params.ChargeUnit : null;
        this.UnitPriceDiscount = 'UnitPriceDiscount' in params ? params.UnitPriceDiscount : null;
        this.UnitPriceHigh = 'UnitPriceHigh' in params ? params.UnitPriceHigh : null;
        this.UnitPriceDiscountHigh = 'UnitPriceDiscountHigh' in params ? params.UnitPriceDiscountHigh : null;

    }
}

/**
 * DescribeAutoSnapshotPolicies response structure.
 * @class
 */
class DescribeAutoSnapshotPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The quantity of valid scheduled snapshot policies.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of scheduled snapshot policies.
         * @type {Array.<AutoSnapshotPolicy> || null}
         */
        this.AutoSnapshotPolicySet = null;

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

        if (params.AutoSnapshotPolicySet) {
            this.AutoSnapshotPolicySet = new Array();
            for (let z in params.AutoSnapshotPolicySet) {
                let obj = new AutoSnapshotPolicy();
                obj.deserialize(params.AutoSnapshotPolicySet[z]);
                this.AutoSnapshotPolicySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindAutoSnapshotPolicy request structure.
 * @class
 */
class UnbindAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of cloud disk IDs scheduled snapshot policy to be unbound from.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * ID of scheduled snapshot policy to be unbound.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;

    }
}

/**
 * UnbindAutoSnapshotPolicy response structure.
 * @class
 */
class UnbindAutoSnapshotPolicyResponse extends  AbstractModel {
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
 * This describes the number of mounted and mountable data disks of an instance.
 * @class
 */
class AttachDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The number of instances mounted to data disk.
         * @type {number || null}
         */
        this.AttachedDiskCount = null;

        /**
         * The maximum number of instances that can be mounted to data disk.
         * @type {number || null}
         */
        this.MaxAttachCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AttachedDiskCount = 'AttachedDiskCount' in params ? params.AttachedDiskCount : null;
        this.MaxAttachCount = 'MaxAttachCount' in params ? params.MaxAttachCount : null;

    }
}

/**
 * CreateAutoSnapshotPolicy request structure.
 * @class
 */
class CreateAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The policy for executing the scheduled snapshot.
         * @type {Array.<Policy> || null}
         */
        this.Policy = null;

        /**
         * The name of the scheduled snapshot policy to be created. If it is left empty, the default is 'Not named'. The maximum length cannot exceed 60 bytes.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyName = null;

        /**
         * Whether or not the scheduled snapshot policy is activated. FALSE: Not activated. TRUE: Activated. The default value is TRUE.
         * @type {boolean || null}
         */
        this.IsActivated = null;

        /**
         * Whether the snapshot created by this scheduled snapshot policy is retained permanently. FALSE: Not retained permanently. TRUE: Retained permanently. The default value is FALSE.
         * @type {boolean || null}
         */
        this.IsPermanent = null;

        /**
         * The number of days that a snapshot created by this scheduled snapshot policy is retained. The default value is 7. If this parameter is specified, the IsPermanent input parameter can not be TRUE, otherwise a conflict will occur.
         * @type {number || null}
         */
        this.RetentionDays = null;

        /**
         * Whether to create an execution policy for the scheduled snapshot. TRUE: Only the time of the initial backup needs to be obtained, and no scheduled snapshot policy is actually created. FALSE: Create. The default value is FALSE.
         * @type {boolean || null}
         */
        this.DryRun = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Policy) {
            this.Policy = new Array();
            for (let z in params.Policy) {
                let obj = new Policy();
                obj.deserialize(params.Policy[z]);
                this.Policy.push(obj);
            }
        }
        this.AutoSnapshotPolicyName = 'AutoSnapshotPolicyName' in params ? params.AutoSnapshotPolicyName : null;
        this.IsActivated = 'IsActivated' in params ? params.IsActivated : null;
        this.IsPermanent = 'IsPermanent' in params ? params.IsPermanent : null;
        this.RetentionDays = 'RetentionDays' in params ? params.RetentionDays : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * Describes the prepaid or postpaid price for the cloud disk.
 * @class
 */
class Price extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original price of a monthly-subscribed cloud disk, in USD.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discounted price of a monthly-subscribed cloud disk, in USD.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * Original unit price of a pay-as-you-go cloud disk, in USD.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * Billing unit of a postpaid cloud disk. Value range: <br><li>HOUR: Billed by hour.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ChargeUnit = null;

        /**
         * Discount unit price of a pay-as-you-go cloud disk, in USD.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscount = null;

        /**
         * Original payment of a monthly-subscribed cloud disk, in USD, with six decimal places.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalPriceHigh = null;

        /**
         * Discounted payment price of a monthly-subscribed cloud disk, in USD, with six decimal places.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiscountPriceHigh = null;

        /**
         * Original unit price of a pay-as-you-go cloud disk, in USD, with six decimal places.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UnitPriceHigh = null;

        /**
         * Discounted unit price of a pay-as-you-go cloud disk, in USD, with six decimal places.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UnitPriceDiscountHigh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.ChargeUnit = 'ChargeUnit' in params ? params.ChargeUnit : null;
        this.UnitPriceDiscount = 'UnitPriceDiscount' in params ? params.UnitPriceDiscount : null;
        this.OriginalPriceHigh = 'OriginalPriceHigh' in params ? params.OriginalPriceHigh : null;
        this.DiscountPriceHigh = 'DiscountPriceHigh' in params ? params.DiscountPriceHigh : null;
        this.UnitPriceHigh = 'UnitPriceHigh' in params ? params.UnitPriceHigh : null;
        this.UnitPriceDiscountHigh = 'UnitPriceDiscountHigh' in params ? params.UnitPriceDiscountHigh : null;

    }
}

/**
 * ApplySnapshot request structure.
 * @class
 */
class ApplySnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot ID, which can be queried via [DescribeSnapshots](https://intl.cloud.tencent.com/document/product/362/15647?from_cn_redirect=1).
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * ID of the original cloud disk corresponding to the snapshot, which can be queried via the API [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Specifies whether to shut down a CVM automatically before a rollback
         * @type {boolean || null}
         */
        this.AutoStopInstance = null;

        /**
         * Specifies whether to start up a CVM automatically after a rollback
         * @type {boolean || null}
         */
        this.AutoStartInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.AutoStopInstance = 'AutoStopInstance' in params ? params.AutoStopInstance : null;
        this.AutoStartInstance = 'AutoStartInstance' in params ? params.AutoStartInstance : null;

    }
}

module.exports = {
    SnapshotOperationLog: SnapshotOperationLog,
    ModifyDiskExtraPerformanceRequest: ModifyDiskExtraPerformanceRequest,
    ModifyDiskAttributesResponse: ModifyDiskAttributesResponse,
    DescribeDiskBackupsRequest: DescribeDiskBackupsRequest,
    AutoSnapshotPolicy: AutoSnapshotPolicy,
    DescribeSnapshotOperationLogsRequest: DescribeSnapshotOperationLogsRequest,
    CopySnapshotCrossRegionsResponse: CopySnapshotCrossRegionsResponse,
    ModifyAutoSnapshotPolicyAttributeResponse: ModifyAutoSnapshotPolicyAttributeResponse,
    ModifyDiskBackupQuotaRequest: ModifyDiskBackupQuotaRequest,
    InquiryPriceCreateDisksResponse: InquiryPriceCreateDisksResponse,
    BindAutoSnapshotPolicyRequest: BindAutoSnapshotPolicyRequest,
    CreateSnapshotResponse: CreateSnapshotResponse,
    DescribeAutoSnapshotPoliciesRequest: DescribeAutoSnapshotPoliciesRequest,
    ModifySnapshotsSharePermissionResponse: ModifySnapshotsSharePermissionResponse,
    DeleteDiskBackupsRequest: DeleteDiskBackupsRequest,
    InitializeDisksResponse: InitializeDisksResponse,
    DeleteDiskBackupsResponse: DeleteDiskBackupsResponse,
    DescribeDiskBackupsResponse: DescribeDiskBackupsResponse,
    SnapshotCopyResult: SnapshotCopyResult,
    InquirePriceModifyDiskExtraPerformanceResponse: InquirePriceModifyDiskExtraPerformanceResponse,
    CreateDisksRequest: CreateDisksRequest,
    AttachDisksRequest: AttachDisksRequest,
    DescribeDiskAssociatedAutoSnapshotPolicyRequest: DescribeDiskAssociatedAutoSnapshotPolicyRequest,
    DescribeSnapshotsRequest: DescribeSnapshotsRequest,
    ModifyAutoSnapshotPolicyAttributeRequest: ModifyAutoSnapshotPolicyAttributeRequest,
    DescribeDiskConfigQuotaResponse: DescribeDiskConfigQuotaResponse,
    ApplyDiskBackupResponse: ApplyDiskBackupResponse,
    InquiryPriceResizeDiskResponse: InquiryPriceResizeDiskResponse,
    Tag: Tag,
    ResizeDiskResponse: ResizeDiskResponse,
    Disk: Disk,
    TerminateDisksResponse: TerminateDisksResponse,
    ApplySnapshotResponse: ApplySnapshotResponse,
    DetachDisksRequest: DetachDisksRequest,
    CreateSnapshotRequest: CreateSnapshotRequest,
    DescribeInstancesDiskNumRequest: DescribeInstancesDiskNumRequest,
    DescribeSnapshotSharePermissionResponse: DescribeSnapshotSharePermissionResponse,
    ModifyDiskBackupQuotaResponse: ModifyDiskBackupQuotaResponse,
    DescribeSnapshotSharePermissionRequest: DescribeSnapshotSharePermissionRequest,
    InquirePriceModifyDiskBackupQuotaRequest: InquirePriceModifyDiskBackupQuotaRequest,
    DescribeSnapshotOperationLogsResponse: DescribeSnapshotOperationLogsResponse,
    DeleteSnapshotsRequest: DeleteSnapshotsRequest,
    DeleteAutoSnapshotPoliciesResponse: DeleteAutoSnapshotPoliciesResponse,
    DescribeDisksResponse: DescribeDisksResponse,
    Placement: Placement,
    DeleteSnapshotsResponse: DeleteSnapshotsResponse,
    ModifySnapshotAttributeResponse: ModifySnapshotAttributeResponse,
    ModifyDiskAttributesRequest: ModifyDiskAttributesRequest,
    GetSnapOverviewRequest: GetSnapOverviewRequest,
    Image: Image,
    TerminateDisksRequest: TerminateDisksRequest,
    DescribeInstancesDiskNumResponse: DescribeInstancesDiskNumResponse,
    DescribeDiskOperationLogsResponse: DescribeDiskOperationLogsResponse,
    ResizeDiskRequest: ResizeDiskRequest,
    ApplyDiskBackupRequest: ApplyDiskBackupRequest,
    InitializeDisksRequest: InitializeDisksRequest,
    CreateAutoSnapshotPolicyResponse: CreateAutoSnapshotPolicyResponse,
    ModifySnapshotAttributeRequest: ModifySnapshotAttributeRequest,
    DiskConfig: DiskConfig,
    InquirePriceModifyDiskBackupQuotaResponse: InquirePriceModifyDiskBackupQuotaResponse,
    DeleteAutoSnapshotPoliciesRequest: DeleteAutoSnapshotPoliciesRequest,
    DiskChargePrepaid: DiskChargePrepaid,
    Filter: Filter,
    InquiryPriceCreateDisksRequest: InquiryPriceCreateDisksRequest,
    DescribeSnapshotsResponse: DescribeSnapshotsResponse,
    Snapshot: Snapshot,
    CreateDisksResponse: CreateDisksResponse,
    AttachDisksResponse: AttachDisksResponse,
    ModifySnapshotsSharePermissionRequest: ModifySnapshotsSharePermissionRequest,
    DiskOperationLog: DiskOperationLog,
    BindAutoSnapshotPolicyResponse: BindAutoSnapshotPolicyResponse,
    DescribeDiskOperationLogsRequest: DescribeDiskOperationLogsRequest,
    DiskBackup: DiskBackup,
    DescribeDisksRequest: DescribeDisksRequest,
    DetachDisksResponse: DetachDisksResponse,
    SharePermission: SharePermission,
    Policy: Policy,
    ModifyDiskExtraPerformanceResponse: ModifyDiskExtraPerformanceResponse,
    InquirePriceModifyDiskExtraPerformanceRequest: InquirePriceModifyDiskExtraPerformanceRequest,
    InquiryPriceResizeDiskRequest: InquiryPriceResizeDiskRequest,
    DescribeDiskConfigQuotaRequest: DescribeDiskConfigQuotaRequest,
    DescribeDiskAssociatedAutoSnapshotPolicyResponse: DescribeDiskAssociatedAutoSnapshotPolicyResponse,
    GetSnapOverviewResponse: GetSnapOverviewResponse,
    AutoMountConfiguration: AutoMountConfiguration,
    CopySnapshotCrossRegionsRequest: CopySnapshotCrossRegionsRequest,
    PrepayPrice: PrepayPrice,
    DescribeAutoSnapshotPoliciesResponse: DescribeAutoSnapshotPoliciesResponse,
    UnbindAutoSnapshotPolicyRequest: UnbindAutoSnapshotPolicyRequest,
    UnbindAutoSnapshotPolicyResponse: UnbindAutoSnapshotPolicyResponse,
    AttachDetail: AttachDetail,
    CreateAutoSnapshotPolicyRequest: CreateAutoSnapshotPolicyRequest,
    Price: Price,
    ApplySnapshotRequest: ApplySnapshotRequest,

}
