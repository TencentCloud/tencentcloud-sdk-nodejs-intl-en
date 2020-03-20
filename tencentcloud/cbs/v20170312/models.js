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
 * DetachDisks request structure.
 * @class
 */
class DetachDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cloud disk to be unmounted, which can be queried through the API [DescribeDisks](/document/product/362/16315). A maximum of 10 elastic cloud disks can be unmounted in a single request.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * For a cloud disk that is not shared, this parameter is ignored. For a shared cloud disk, this parameter indicates which CVM instance the cloud disk is to be unmounted from.
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
         * ID of the cloud disk, which can be queried via the API [DescribeDisks](/document/product/362/16315).
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Cloud disk size after scale out (in GB). This must be larger than the current size of the cloud disk. For the value range of the cloud disk sizes, see cloud disk [Product Types](/document/product/362/2353).
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
 * ModifyDisksChargeType response structure.
 * @class
 */
class ModifyDisksChargeTypeResponse extends  AbstractModel {
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
 * DescribeDisks request structure.
 * @class
 */
class DescribeDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query by one or more cloud disk IDs, such as `disk-11112222`. For the format of this parameter, please see the ids.N section of the API [Introduction](/document/product/362/15633). This parameter does not support specifying both `DiskIds` and `Filters`.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Filters. You cannot specify `DiskIds` and `Filters` at the same time. <br><li>disk-usage - Array of String - Optional - Filters by cloud disk type. (SYSTEM_DISK: system disk | DATA_DISK: data disk) <br><li>disk-charge-type - Array of String - Optional - Filters by cloud disk billing method. (POSTPAID_BY_HOUR: pay-as-you-go) <br><li>portable - Array of String- Optional - Filters by whether the cloud disk is elastic or not. (TRUE: elastic | FALSE: non-elastic) <br><li>project-id - Array of Integer - Optional - Filters by the ID of the project to which a cloud disk belongs. <br><li>disk-id - Array of String - Optional - Filters by cloud disk ID, such as `disk-11112222`. <br><li>disk-name - Array of String - Optional - Filters by cloud disk name. <br><li>disk-type - Array of String - Optional - Filters by cloud disk media type (CLOUD_BASIC: HDD cloud disk | CLOUD_PREMIUM: Premium Cloud Storage | CLOUD_SSD: SSD cloud disk.) <br><li>disk-state - Array of String - Optional - Filters by cloud disk state. (UNATTACHED: not mounted | ATTACHING: being mounted | ATTACHED: mounted | DETACHING: being unmounted | EXPANDING: being expanded | ROLLBACKING: being rolled back | TORECYCLE: to be repossessed.) <br><li>instance-id - Array of String - Optional - Filters by the ID of the CVM instance on which a cloud disk is mounted. You can use this parameter to query the cloud disks mounted on specific CVMs. <br><li>zone - Array of String - Optional - Filters by [availability zone](/document/product/213/15753#ZoneInfo) <br><li>instance-ip-address - Array of String - Optional - Filters by the private or public IP of the CVM on which a cloud disk is mounted. <br><li>instance-name - Array of String - Optional - Filters by the name of the instance on which a cloud disk is mounted. <br><li>tag-key - Array of String - Optional - Filters by tag key. <br><li>tag-value - Array of String - Optional - Filters by tag value. <br><li>tag:tag-key - Array of String - Optional - Filters by tag key-value pair. Please replace `tag-key` with a specific tag key.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default is 0. For more information on `Offset`, please see relevant sections in API [Introduction](/document/product/362/15633).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. Default is 20. Maximum is 100. For more information on `Limit`, please see relevant sections in API [Introduction](/document/product/362/15633).
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
 * DescribeInstancesDiskNum request structure.
 * @class
 */
class DescribeInstancesDiskNumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the CVM instance can be queried via the API [DescribeInstances](/document/product/213/15728).
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
 * This describes the detailed information of the scheduled snapshot policy.
 * @class
 */
class AutoSnapshotPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scheduled snapshot policy ID.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * Scheduled snapshot policy name.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyName = null;

        /**
         * Scheduled snapshot policy state. Value range:<br><li>NORMAL: Normal<br><li>ISOLATED: Isolated.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyState = null;

        /**
         * Whether scheduled snapshot policy is activated.
         * @type {boolean || null}
         */
        this.IsActivated = null;

        /**
         * Whether the snapshot created by this scheduled snapshot policy is retained permanently.
         * @type {boolean || null}
         */
        this.IsPermanent = null;

        /**
         * Number of days the snapshot created by this scheduled snapshot policy is retained.
         * @type {number || null}
         */
        this.RetentionDays = null;

        /**
         * The time the scheduled snapshot policy was created.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The time the scheduled snapshot will be triggered again.
         * @type {string || null}
         */
        this.NextTriggerTime = null;

        /**
         * The policy for executing the scheduled snapshot.
         * @type {Array.<Policy> || null}
         */
        this.Policy = null;

        /**
         * The list of cloud disk IDs that the current scheduled snapshot policy is bound to.
         * @type {Array.<string> || null}
         */
        this.DiskIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.AutoSnapshotPolicyName = 'AutoSnapshotPolicyName' in params ? params.AutoSnapshotPolicyName : null;
        this.AutoSnapshotPolicyState = 'AutoSnapshotPolicyState' in params ? params.AutoSnapshotPolicyState : null;
        this.IsActivated = 'IsActivated' in params ? params.IsActivated : null;
        this.IsPermanent = 'IsPermanent' in params ? params.IsPermanent : null;
        this.RetentionDays = 'RetentionDays' in params ? params.RetentionDays : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.NextTriggerTime = 'NextTriggerTime' in params ? params.NextTriggerTime : null;

        if (params.Policy) {
            this.Policy = new Array();
            for (let z in params.Policy) {
                let obj = new Policy();
                obj.deserialize(params.Policy[z]);
                this.Policy.push(obj);
            }
        }
        this.DiskIdSet = 'DiskIdSet' in params ? params.DiskIdSet : null;

    }
}

/**
 * Describes the execution policy for scheduled snapshots. This can be understood as that, on the days specified by DayOfWeek, the scheduled snapshot policy is executed at the hour specified by Hour.
 * @class
 */
class Policy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the days of the week, from Monday to Sunday, on which a scheduled snapshot will be triggered. Value range: [0, 6]. 0 indicates triggering on Sunday, 1-6 indicate triggering on Monday-Saturday.
         * @type {Array.<number> || null}
         */
        this.DayOfWeek = null;

        /**
         * Specifies the time that that the scheduled snapshot policy will be triggered. The unit is hour. The value range is [0-23]. 00:00-23:00 is a total of 24 time points that can be selected. 1 indicates 01:00, and so on.
         * @type {Array.<number> || null}
         */
        this.Hour = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DayOfWeek = 'DayOfWeek' in params ? params.DayOfWeek : null;
        this.Hour = 'Hour' in params ? params.Hour : null;

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
         * The start time of the operation logs to be queried, for example: “2019-11-22 00:00:00"
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The end time of the operation logs to be queried, for example: “2019-11-22 23:59:59"
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
 * ModifySnapshotAttribute request structure.
 * @class
 */
class ModifySnapshotAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot ID, which can be queried via [DescribeSnapshots](/document/product/362/15647).
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Name of new snapshot. Maximum length is 60 bytes.
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * The retention time of the snapshot. FALSE: non-permanent retention; TRUE: permanent retention. You can only modify non-permanent snapshots to permanent snapshots.
         * @type {boolean || null}
         */
        this.IsPermanent = null;

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

    }
}

/**
 * InquiryPriceRenewDisks request structure.
 * @class
 */
class InquiryPriceRenewDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cloud disk, which can be queried via the API [DescribeDisks](/document/product/362/16315).
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Relevant parameter settings for the prepaid mode (i.e., monthly subscription). The monthly subscription cloud disk purchase usage period can be specified using this parameter. If this parameter is specified as CurInstanceDeadline, then it will be renewed according to the aligned CVM expiration time. If it is a batch renewal price query, then this parameter will correspond to the Disks parameter, and the element quantity needs to be kept the same.
         * @type {Array.<DiskChargePrepaid> || null}
         */
        this.DiskChargePrepaids = null;

        /**
         * Specify the new expiration time of the cloud disk, in such format as 2017-12-17 00:00:00. The parameters `NewDeadline` and `DiskChargePrepaids` are two options to specify the inquiry length, and you must specify at least one.
         * @type {string || null}
         */
        this.NewDeadline = null;

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
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;

        if (params.DiskChargePrepaids) {
            this.DiskChargePrepaids = new Array();
            for (let z in params.DiskChargePrepaids) {
                let obj = new DiskChargePrepaid();
                obj.deserialize(params.DiskChargePrepaids[z]);
                this.DiskChargePrepaids.push(obj);
            }
        }
        this.NewDeadline = 'NewDeadline' in params ? params.NewDeadline : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

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
         * The ID of the snapshot to be queried. You can obtain this by using [DescribeSnapshots](https://cloud.tencent.com/document/api/362/15647).
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
 * InquiryPriceRenewDisks response structure.
 * @class
 */
class InquiryPriceRenewDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Describes the price of renewing the cloud disk.
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
 * ModifyDisksRenewFlag request structure.
 * @class
 */
class ModifyDisksRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of one or more cloud disks to be operated.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Cloud disk renewal flag. Value range: <br><li>NOTIFY_AND_AUTO_RENEW: Notify expiry and renew automatically. <br><li>NOTIFY_AND_MANUAL_RENEW: Notify expiry but do not renew automatically. <br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW: Neither notify expiry nor renew automatically.
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
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

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
 * ModifyDisksChargeType request structure.
 * @class
 */
class ModifyDisksChargeTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID(s) of one or multiple cloud disks to be operated. The maximum number of cloud disks per request is 100.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * 
         * @type {DiskChargePrepaid || null}
         */
        this.DiskChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;

        if (params.DiskChargePrepaid) {
            let obj = new DiskChargePrepaid();
            obj.deserialize(params.DiskChargePrepaid)
            this.DiskChargePrepaid = obj;
        }

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
         * Original price of the advanced payment for a prepaid cloud disk (in CNY).
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discount price of the advanced payment for a prepaid cloud disk (in CNY).
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * Original unit price of a postpaid cloud disk (in CNY).
Note: This field may return null, indicating that no valid value was found.
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
         * Postpaid cloud disk discount price. Unit: CNY.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.UnitPriceDiscount = null;

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
 * InquiryPriceCreateDisks response structure.
 * @class
 */
class InquiryPriceCreateDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Describes the price of purchasing new cloud disk.
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
         * Type of cloud disk medium. Value range: <br><li>CLOUD_BASIC: Ordinary cloud disk <br><li>CLOUD_PREMIUM: Premium cloud storage <br><li>CLOUD_SSD: SSD cloud disk.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Cloud disk type. Value range: <br><li>SYSTEM_DISK: System disk <br><li>DATA_DISK: Data disk.
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * Billing method. Value range: <br><li>PREPAID: Prepaid, that is, monthly subscription<br><li>POSTPAID_BY_HOUR: Postpaid, that is, pay as you go.
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * The maximum configurable cloud disk size (in GB).
         * @type {number || null}
         */
        this.MaxDiskSize = null;

        /**
         * The minimum configurable cloud disk size (in GB).
         * @type {number || null}
         */
        this.MinDiskSize = null;

        /**
         * The [Availability Region](/document/product/213/15753#ZoneInfo) of the cloud drive.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance model.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.DeviceClass = null;

        /**
         * Instance model series. For more information, please see [Instance Models](https://cloud.tencent.com/document/product/213/11518)
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceFamily = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Available = 'Available' in params ? params.Available : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.DiskChargeType = 'DiskChargeType' in params ? params.DiskChargeType : null;
        this.MaxDiskSize = 'MaxDiskSize' in params ? params.MaxDiskSize : null;
        this.MinDiskSize = 'MinDiskSize' in params ? params.MinDiskSize : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DeviceClass = 'DeviceClass' in params ? params.DeviceClass : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;

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
 * DeleteSnapshots request structure.
 * @class
 */
class DeleteSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of snapshots to be deleted, which can be queried via [DescribeSnapshots](/document/product/362/15647).
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
        this.SnapshotIds = 'SnapshotIds' in params ? params.SnapshotIds : null;

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
         * Query configuration under one or more [availability zone](/document/product/213/15753#ZoneInfo).
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Billing mode. Value range: <br><li>POSTPAID_BY_HOUR: postpaid.
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * Type of hard disk medium. Value range: <br><li>CLOUD_BASIC: Ordinary cloud disk <br><li>CLOUD_PREMIUM: Premium cloud storage <br><li>CLOUD_SSD: SSD cloud disk.
         * @type {Array.<string> || null}
         */
        this.DiskTypes = null;

        /**
         * The system disk or data disk. Value range: <br><li>SYSTEM_DISK: System disk <br><li>DATA_DISK: Data disk.
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * Filter by the instance model series, such as S1, I1 and M1. For more information, please see [Instance Types](https://cloud.tencent.com/document/product/213/11518)
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
 * The billing method of an instance
 * @class
 */
class DiskChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * The purchased usage period of a cloud disk (in months). Value range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Auto Renewal flag. Value range: <br><li>NOTIFY_AND_AUTO_RENEW: Notify expiry and renew automatically <br><li>NOTIFY_AND_MANUAL_RENEW: Notify expiry but do not renew automatically <br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW: Neither notify expiry nor renew automatically <br><br>Default value range: NOTIFY_AND_MANUAL_RENEW: Notify expiry but do not renew automatically.
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * This parameter is used when you align the expiration time of the cloud disk with that of the mounted server. It is the current expiration time of the server. In this case, the Period passed represents the renewal period of the server, and the cloud disk will be automatically renewed in alignment with the expiration time of the renewed server. Example value: 2018-03-30 20:15:03.
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
 * ModifyDisksRenewFlag response structure.
 * @class
 */
class ModifyDisksRenewFlagResponse extends  AbstractModel {
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
 * InquiryPriceResizeDisk request structure.
 * @class
 */
class InquiryPriceResizeDiskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cloud disk, which can be queried via the API [DescribeDisks](/document/product/362/16315).
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Cloud disk size after scale out (in GB). This cannot be smaller than the current size of the cloud disk. For the value range of the cloud disk sizes, see cloud disk [Product Types](/document/product/362/2353).
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
 * The cost of a prepaid order.
 * @class
 */
class PrepayPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original price of the advanced payment for a prepaid cloud disk or snapshot (in CNY).
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discount price of the advanced payment for a prepaid cloud disk or snapshot (in CNY).
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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

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
         * Type of cloud hard disk. Value range: <br><li>Ordinary cloud disk: CLOUD_BASIC <br><li>Premium cloud storage: CLOUD_PREMIUM <br><li>SSD cloud disk: CLOUD_SSD.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Cloud disk size (in GB). For the value range of the cloud disk sizes, see cloud disk [Product Types](/document/product/362/2353).
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Cloud disk billing method. <br><li>POSTPAID_BY_HOUR: Pay-as-you-go on an hourly basis
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * Relevant parameter settings for the prepaid mode (i.e., monthly subscription). The monthly subscription cloud disk purchase attributes such as usage period and whether or not auto-renewal is set up can be specified using this parameter. <br>This parameter is required when creating a prepaid cloud disk. This parameter is not required when creating an hourly postpaid cloud disk.
         * @type {DiskChargePrepaid || null}
         */
        this.DiskChargePrepaid = null;

        /**
         * Quantity of cloud disks purchased. If left empty, default is 1.
         * @type {number || null}
         */
        this.DiskCount = null;

        /**
         * ID of project the cloud disk belongs to.
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
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskChargeType = 'DiskChargeType' in params ? params.DiskChargeType : null;

        if (params.DiskChargePrepaid) {
            let obj = new DiskChargePrepaid();
            obj.deserialize(params.DiskChargePrepaid)
            this.DiskChargePrepaid = obj;
        }
        this.DiskCount = 'DiskCount' in params ? params.DiskCount : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

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
         * Snapshot ID.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Location of the snapshot.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * The type of the cloud disk used to create the snapshot. Value range: <br><li>SYSTEM_DISK: System disk <br><li>DATA_DISK: Data disk.
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * ID of the cloud disk used to create this snapshot.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Size of the cloud disk used to create this snapshot (in GB).
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Status of the snapshot. Value range: <br><li>NORMAL: Normal <br><li>CREATING: Creating <br><li>ROLLBACKING: Rolling backing <br><li>COPYING_FROM_REMOTE: Copying snapshot across regions.
         * @type {string || null}
         */
        this.SnapshotState = null;

        /**
         * Snapshot name, the user-defined snapshot alias. Call [ModifySnapshotAttribute](/document/product/362/15650) to modify this field.
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * The progress percentage for snapshot creation. This field is always 100 after the snapshot is created successfully.
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * Creation time of the snapshot.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The expiration time of the snapshot. If the snapshot is permanently retained, this field is blank.
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * Whether the snapshot is created from an encrypted disk. Value range: <br><li>true: Yes <br><li>false: No.
         * @type {boolean || null}
         */
        this.Encrypt = null;

        /**
         * Whether it is a permanent snapshot. Value range: <br><li>true: Permanent snapshot <br><li>false: Non-permanent snapshot.
         * @type {boolean || null}
         */
        this.IsPermanent = null;

        /**
         * The destination region to which the snapshot is being replicated. Default value is [ ].
         * @type {Array.<string> || null}
         */
        this.CopyingToRegions = null;

        /**
         * Whether the snapshot is replicated across regions. Value range: <br><li>true: Indicates that the snapshot is replicated across regions. <br><li>false: Indicates that the snapshot belongs to the local region.
         * @type {boolean || null}
         */
        this.CopyFromRemote = null;

        /**
         * List of images associated with snapshot.
         * @type {Array.<Image> || null}
         */
        this.Images = null;

        /**
         * Number of images associated with snapshot.
         * @type {number || null}
         */
        this.ImageCount = null;

        /**
         * Snapshot type. This value can currently be either PRIVATE_SNAPSHOT or SHARED_SNAPSHOT.
         * @type {string || null}
         */
        this.SnapshotType = null;

        /**
         * Number of snapshots currently shared
         * @type {number || null}
         */
        this.ShareReference = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.SnapshotState = 'SnapshotState' in params ? params.SnapshotState : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;
        this.IsPermanent = 'IsPermanent' in params ? params.IsPermanent : null;
        this.CopyingToRegions = 'CopyingToRegions' in params ? params.CopyingToRegions : null;
        this.CopyFromRemote = 'CopyFromRemote' in params ? params.CopyFromRemote : null;

        if (params.Images) {
            this.Images = new Array();
            for (let z in params.Images) {
                let obj = new Image();
                obj.deserialize(params.Images[z]);
                this.Images.push(obj);
            }
        }
        this.ImageCount = 'ImageCount' in params ? params.ImageCount : null;
        this.SnapshotType = 'SnapshotType' in params ? params.SnapshotType : null;
        this.ShareReference = 'ShareReference' in params ? params.ShareReference : null;

    }
}

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
 * CreateDisks response structure.
 * @class
 */
class CreateDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of created cloud disk IDs. 
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
 * ModifySnapshotsSharePermission request structure.
 * @class
 */
class ModifySnapshotsSharePermissionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of account IDs with which a snapshot is shared. For the format of array-type parameters, see [API Introduction](https://cloud.tencent.com/document/api/213/568). You can find the account ID in [Account Information](https://console.cloud.tencent.com/developer).
         * @type {Array.<string> || null}
         */
        this.AccountIds = null;

        /**
         * Operations. Valid values: `SHARE`, sharing an image; `CANCEL`, cancelling the sharing of an image.
         * @type {string || null}
         */
        this.Permission = null;

        /**
         * The ID of the snapshot. You can obtain this by using [DescribeSnapshots](https://cloud.tencent.com/document/api/362/15647).
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
         * The start time of the operation logs to be queried, for example: “2019-11-22 00:00:00"
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The end time of the operation logs to be queried, for example: “2019-11-22 23:59:59"
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
 * CreateDisks request structure.
 * @class
 */
class CreateDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of hard disk medium. Value range: <br><li>CLOUD_BASIC: Ordinary cloud disk <br><li>CLOUD_PREMIUM: Premium cloud storage <br><li>CLOUD_SSD: SSD cloud disk.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Cloud disk billing method. POSTPAID_BY_HOUR: pay as you go by hour<br><li>CDCPAID: Billed together with the bound dedicated cluster<br>For information about the pricing of each method, see the cloud disk [Pricing Overview](/document/product/362/2413).
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * The location of the instance. The availability zone and the project that the instance belongs to can be specified using this parameter. If the project is not specified, it will be created under the default project.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * The displayed name of the cloud disk. If it is left empty, the default is “Not named”. The maximum length cannot exceed 60 bytes.
         * @type {string || null}
         */
        this.DiskName = null;

        /**
         * If the number of cloud disks to be created is left empty, the default is 1. There is a limit to the maximum number of cloud disks that can be created for a single request. For more information, please see [CBS Use Limits](https://cloud.tencent.com/doc/product/362/5145).
         * @type {number || null}
         */
        this.DiskCount = null;

        /**
         * Relevant parameter settings for the prepaid mode (i.e., monthly subscription). The monthly subscription cloud disk purchase attributes such as usage period and whether or not auto-renewal is set up can be specified using this parameter. <br>This parameter is required when creating a prepaid cloud disk. This parameter is not required when creating an hourly postpaid cloud disk. 
         * @type {DiskChargePrepaid || null}
         */
        this.DiskChargePrepaid = null;

        /**
         * Cloud hard disk size (in GB). <br><li> If `SnapshotId` is passed, `DiskSize` cannot be passed. In this case, the size of the cloud disk is the size of the snapshot. <br><li>To pass `SnapshotId` and `DiskSize` at the same time, the size of the disk must be larger than or equal to the size of the snapshot. <br><li>For information about the size range of cloud disks, see cloud disk [Product Types](/document/product/362/2353).
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Snapshot ID. If this parameter is specified, the cloud disk is created based on the snapshot. The snapshot type must be a data disk snapshot. The snapshot can be queried in the DiskUsage field in the output parameter through the API [DescribeSnapshots](/document/product/362/15647).
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * A string to ensure the idempotency of the request, which is generated by the client. Each request shall have a unique string with a maximum of 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be ensured.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * This parameter is used to create an encrypted cloud disk. Its value is always ENCRYPT.
         * @type {string || null}
         */
        this.Encrypt = null;

        /**
         * Cloud disk binding tag.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * The default of optional parameter is False. When True is selected, the cloud disk will be created as a shareable cloud disk.
         * @type {boolean || null}
         */
        this.Shareable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskChargeType = 'DiskChargeType' in params ? params.DiskChargeType : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.DiskName = 'DiskName' in params ? params.DiskName : null;
        this.DiskCount = 'DiskCount' in params ? params.DiskCount : null;

        if (params.DiskChargePrepaid) {
            let obj = new DiskChargePrepaid();
            obj.deserialize(params.DiskChargePrepaid)
            this.DiskChargePrepaid = obj;
        }
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Shareable = 'Shareable' in params ? params.Shareable : null;

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
         * ID of the elastic cloud disk to be mounted, which can be queried through the API [DescribeDisks](/document/product/362/16315). A maximum of 10 elastic cloud disks can be mounted in a single request.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * ID of the CVM instance on which the cloud disk will be mounted. It can be queried via the API [DescribeInstances](/document/product/213/15728).
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Optional parameter. If this is not passed only the mount operation is executed. If `True` is passed, the cloud disk will be configured to be terminated when the server it is mounted to is terminated. This is only valid for pay-as-you-go cloud disks.
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

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
        this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null;

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
         * Number of results to be returned. Default is 20. Maximum is 100. For more information on `Limit`, please see relevant sections in API [Introduction](/document/product/362/15633).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default is 0. For more information on `Offset`, please see relevant sections in API [Introduction](/document/product/362/15633).
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
         * The new project ID of the cloud disk. Only the project ID of elastic cloud disk can be modified. The available projects and their IDs can be queried via the API [DescribeProject](/document/api/378/4400).
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
 * CreateSnapshot request structure.
 * @class
 */
class CreateSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cloud disk, for which a snapshot needs to be created. It can be queried via the API [DescribeDisks](/document/product/362/16315).
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Snapshot name. If it is left empty, the new snapshot name is "Not named" by default.
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
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;

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
         * Filter conditions. The specification of both the `SnapshotIds` and `Filters` parameters is not supported. <br><li>snapshot-id - Array of String - Required or not: No - (Filter condition) Filter by the snapshot ID. The format of the snapshot ID is as follows: `snap-11112222`. <br><li>snapshot-name - Array of String - Required or not: No - (Filter condition) Filter by the snapshot name. <br><li>snapshot-state - Array of String - Required or not: No - (Filter condition) Filter by the snapshot status (NORMAL: normal | CREATING: creating | ROLLBACKING: rolling back). <br><li>disk-usage - Array of String - Required or not: No - (Filter condition) Filter by the type of the cloud disk for which the snapshot is created (SYSTEM_DISK: system disk | DATA_DISK: data disk). <br><li>project-id - Array of String - Required or not: No - (Filter condition) Filter by ID of the project to which the cloud disk belongs. <br><li>disk-id - Array of String - Required or not: No - (Filter condition) Filter by the ID of the cloud disk for which the snapshot is created. <br><li>zone - Array of String - Required or not: No - (Filter condition) Filter by [Availability Zone](/document/product/213/15753#ZoneInfo). <br><li>encrypt - Array of String - Required or not: No - (Filter condition) According to whether it is an encrypted disk snapshot. (TRUE: indicates an encrypted disk snapshot | FALSE: indicates that it is not an encrypted disk snapshot.)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default is 0. For more information on `Offset`, please see relevant sections in API [Introduction](/document/product/362/15633).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. Default is 20. Maximum is 100. For more information on `Limit`, please see relevant sections in API [Introduction](/document/product/362/15633).
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
 * This describes the abstract location of the instance, including the availability zone in which it is located, the projects to which it belongs, and the ID and name of the dedicated clusters to which it belongs.
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the [Availability Zone](/document/product/213/15753#ZoneInfo) to which the cloud disk belongs. This parameter can be obtained from the Zone field in the returned values of [DescribeZones](/document/product/213/15707).
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * ID of the project to which the instance belongs. This parameter can be obtained from the projectId field in the returned values of [DescribeProject](/document/api/378/4400). If this is left empty, default project is used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * ID of dedicated cluster which the instance belongs to. When it is an input parameter, the specified CdcId dedicated cluster resource is operated, and it can be left blank. When it is an output parameter, it is the ID of the dedicated cluster which the resource belongs to, and it can be left blank.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.CdcId = null;

        /**
         * Cage ID. When it is an input parameter, the specified CageID resource is operated, and it can be left blank. When it is an output parameter, it is the ID of the cage the resource belongs to, and it can be left blank.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.CageId = null;

        /**
         * Dedicated cluster name. When it is an input parameter, it is ignored.  When it is an output parameter, it is the name of the dedicated cluster the cloud disk belongs to, and it can be left blank.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.CdcName = null;

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
        this.CdcId = 'CdcId' in params ? params.CdcId : null;
        this.CageId = 'CageId' in params ? params.CageId : null;
        this.CdcName = 'CdcName' in params ? params.CdcName : null;

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
         * The name of the scheduled snapshot policy to be created. If it is left empty, the default is “Not named”. The maximum length cannot exceed 60 bytes.
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
 * The details of a cloud disk
 * @class
 */
class Disk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk ID.
         * @type {string || null}
         */
        this.DiskId = null;

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
         * Location of the cloud disk.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Whether the cloud disk has the capability to create snapshots. Value range: <br><li>false: Cannot create snapshots. true: Can create snapshots.
         * @type {boolean || null}
         */
        this.SnapshotAbility = null;

        /**
         * Cloud disk name.
         * @type {string || null}
         */
        this.DiskName = null;

        /**
         * Cloud disk size (in GB).
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * The state of the cloud disk. Value range: <br><li>UNATTACHED: Not mounted <br><li>ATTACHING: Mounting <br><li>ATTACHED: Mounted <br><li>DETACHING: Un-mounting <br><li>EXPANDING: Expanding <br><li>ROLLBACKING: Rolling back <br><li>TORECYCE: Pending recycling. <br><li>DUMPING: Copying the hard drive.
         * @type {string || null}
         */
        this.DiskState = null;

        /**
         * Type of cloud disk medium. Value range: <br><li>CLOUD_BASIC: Ordinary cloud disk <br><li>CLOUD_PREMIUM: Premium cloud storage <br><li>CLOUD_SSD: SSD cloud disk.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Whether the cloud disk is mounted to the CVM. Value range: <br><li>false: Unmounted <br><li>true: Mounted.
         * @type {boolean || null}
         */
        this.Attached = null;

        /**
         * ID of the CVM to which the cloud disk is mounted.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Creation time of the cloud disk.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Expiration time of the cloud disk.
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * Whether the cloud disk is in the status of snapshot rollback. Value range: <br><li>false: No <br><li>true: Yes
         * @type {boolean || null}
         */
        this.Rollbacking = null;

        /**
         * Rollback progress of a cloud disk snapshot.
         * @type {number || null}
         */
        this.RollbackPercent = null;

        /**
         * Whether the cloud disk is encrypted. Value range: <br><li>false: Not encrypted <br><li>true: Encrypted.
         * @type {boolean || null}
         */
        this.Encrypt = null;

        /**
         * Cloud disk already mounted to CVM, and both CVM and cloud disk use monthly subscription.<br><li>true: CVM has auto-renewal flag set up, but cloud disk does not.<br><li>false: Cloud disk auto-renewal flag set up normally.
Note: This field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.AutoRenewFlagError = null;

        /**
         * Auto renewal flag. Supported values:<br><li>NOTIFY_AND_AUTO_RENEW: Notify expiry and renew automatically<br><li>NOTIFY_AND_MANUAL_RENEW: Notify expiry but not renew automatically<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW: Neither notify expiry nor renew automatically.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * This field is only applicable when the instance is already mounted to the cloud disk, and both the instance and the cloud disk use monthly subscription. <br><li>true: Expiration time of cloud disk is earlier than that of the instance.<br><li>false: Expiration time of cloud disk is later than that of the instance.
Note: This field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.DeadlineError = null;

        /**
         * Determines whether or not prepaid cloud disk supports active return. <br><li>true: Active return supported.<br><li>false: Active return not supported.
Note: This field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.IsReturnable = null;

        /**
         * In circumstances where the prepaid cloud disk does not support active return, this parameter indicates the reason that return is not supported. Value range: <br><li>1: The cloud disk has already been returned. <br><li>2: The cloud disk has already expired. <br><li>3: The cloud disk does not support return. <br><li> 8: The limit on the number of returns is exceeded.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.ReturnFailCode = null;

        /**
         * ID of the periodic snapshot associated to the cloud disk. This parameter is returned only if the value of parameter ReturnBindAutoSnapshotPolicy is TRUE when the API DescribeDisks is called.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.AutoSnapshotPolicyIds = null;

        /**
         * The tag bound to the cloud disk. The value Null is used when no tag is bound to the cloud disk.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether the cloud disk terminates along with the instance mounted to it. <br><li>true: Cloud disk will also be terminated when instance terminates, so only hourly postpaid cloud disk are supported.<br><li>false: Cloud disk does not terminate when instance terminates.
Note: This field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

        /**
         * Number of days from current time until disk expiration (only applicable for prepaid disks).
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DifferDaysOfDeadline = null;

        /**
         * Whether cloud disk is in process of type change. Value range: <br><li>false: Cloud disk not in process of type change. <br><li>true: Cloud disk type change has been launched, and migration is in process.
Note: This field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.Migrating = null;

        /**
         * Migration progress of cloud disk type change, from 0 to 100.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.MigratePercent = null;

        /**
         * Whether or not cloud disk is shareable cloud disk.
         * @type {boolean || null}
         */
        this.Shareable = null;

        /**
         * For non-shareable cloud disks, this parameter is null. For shareable cloud disks, this parameters indicates this cloud disk’s Instance IDs currently mounted to the CVM.
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

        /**
         * The total number of snapshots of the cloud disk.
         * @type {number || null}
         */
        this.SnapshotCount = null;

        /**
         * The total capacity of the snapshots of the cloud disk. Unit: MB.
         * @type {number || null}
         */
        this.SnapshotSize = null;

        /**
         * Indicates whether a snapshot should be created for backup when the cloud disk is terminated due to arrears or expiration. `True`: create a snapshot to backup the disk upon termination. `False`: terminate the disk without backup
         * @type {boolean || null}
         */
        this.BackupDisk = null;

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
        this.DiskChargeType = 'DiskChargeType' in params ? params.DiskChargeType : null;
        this.Portable = 'Portable' in params ? params.Portable : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.SnapshotAbility = 'SnapshotAbility' in params ? params.SnapshotAbility : null;
        this.DiskName = 'DiskName' in params ? params.DiskName : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskState = 'DiskState' in params ? params.DiskState : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.Attached = 'Attached' in params ? params.Attached : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.Rollbacking = 'Rollbacking' in params ? params.Rollbacking : null;
        this.RollbackPercent = 'RollbackPercent' in params ? params.RollbackPercent : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;
        this.AutoRenewFlagError = 'AutoRenewFlagError' in params ? params.AutoRenewFlagError : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.DeadlineError = 'DeadlineError' in params ? params.DeadlineError : null;
        this.IsReturnable = 'IsReturnable' in params ? params.IsReturnable : null;
        this.ReturnFailCode = 'ReturnFailCode' in params ? params.ReturnFailCode : null;
        this.AutoSnapshotPolicyIds = 'AutoSnapshotPolicyIds' in params ? params.AutoSnapshotPolicyIds : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null;
        this.DifferDaysOfDeadline = 'DifferDaysOfDeadline' in params ? params.DifferDaysOfDeadline : null;
        this.Migrating = 'Migrating' in params ? params.Migrating : null;
        this.MigratePercent = 'MigratePercent' in params ? params.MigratePercent : null;
        this.Shareable = 'Shareable' in params ? params.Shareable : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;
        this.SnapshotCount = 'SnapshotCount' in params ? params.SnapshotCount : null;
        this.SnapshotSize = 'SnapshotSize' in params ? params.SnapshotSize : null;
        this.BackupDisk = 'BackupDisk' in params ? params.BackupDisk : null;

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
         * The policy for executing the scheduled snapshot.
         * @type {Array.<Policy> || null}
         */
        this.Policy = null;

        /**
         * The name of the scheduled snapshot policy to be created. If it is left empty, the default is “Not named”. The maximum length cannot exceed 60 bytes.
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
         * The number of days for which snapshots created by this policy are retained. This parameter cannot clash with `IsPermanent`, which is, if the scheduled snapshot policy is configured to retain permanently, `RetentionDays` must be 0.
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
 * ApplySnapshot request structure.
 * @class
 */
class ApplySnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot ID, which can be queried via [DescribeSnapshots](/document/product/362/15647).
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * ID of the original cloud disk corresponding to the snapshot, which can be queried via the API [DescribeDisks](/document/product/362/16315).
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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;

    }
}

module.exports = {
    DetachDisksRequest: DetachDisksRequest,
    DescribeDiskOperationLogsResponse: DescribeDiskOperationLogsResponse,
    ResizeDiskRequest: ResizeDiskRequest,
    TerminateDisksResponse: TerminateDisksResponse,
    DescribeSnapshotSharePermissionResponse: DescribeSnapshotSharePermissionResponse,
    SharePermission: SharePermission,
    ModifyDiskAttributesResponse: ModifyDiskAttributesResponse,
    TerminateDisksRequest: TerminateDisksRequest,
    ModifyDisksChargeTypeResponse: ModifyDisksChargeTypeResponse,
    DescribeDisksRequest: DescribeDisksRequest,
    DescribeInstancesDiskNumRequest: DescribeInstancesDiskNumRequest,
    AutoSnapshotPolicy: AutoSnapshotPolicy,
    Policy: Policy,
    ModifySnapshotsSharePermissionResponse: ModifySnapshotsSharePermissionResponse,
    DescribeSnapshotOperationLogsRequest: DescribeSnapshotOperationLogsRequest,
    ModifySnapshotAttributeRequest: ModifySnapshotAttributeRequest,
    InquiryPriceRenewDisksRequest: InquiryPriceRenewDisksRequest,
    DescribeSnapshotSharePermissionRequest: DescribeSnapshotSharePermissionRequest,
    InquiryPriceRenewDisksResponse: InquiryPriceRenewDisksResponse,
    ModifyDisksRenewFlagRequest: ModifyDisksRenewFlagRequest,
    ModifyAutoSnapshotPolicyAttributeResponse: ModifyAutoSnapshotPolicyAttributeResponse,
    ModifyDisksChargeTypeRequest: ModifyDisksChargeTypeRequest,
    Price: Price,
    UnbindAutoSnapshotPolicyResponse: UnbindAutoSnapshotPolicyResponse,
    InquiryPriceCreateDisksResponse: InquiryPriceCreateDisksResponse,
    DiskConfig: DiskConfig,
    BindAutoSnapshotPolicyRequest: BindAutoSnapshotPolicyRequest,
    CreateSnapshotResponse: CreateSnapshotResponse,
    DeleteSnapshotsRequest: DeleteSnapshotsRequest,
    DescribeDiskConfigQuotaRequest: DescribeDiskConfigQuotaRequest,
    DeleteAutoSnapshotPoliciesRequest: DeleteAutoSnapshotPoliciesRequest,
    DiskChargePrepaid: DiskChargePrepaid,
    DescribeSnapshotOperationLogsResponse: DescribeSnapshotOperationLogsResponse,
    ModifyDisksRenewFlagResponse: ModifyDisksRenewFlagResponse,
    DescribeDiskAssociatedAutoSnapshotPolicyResponse: DescribeDiskAssociatedAutoSnapshotPolicyResponse,
    InquiryPriceResizeDiskRequest: InquiryPriceResizeDiskRequest,
    ApplySnapshotResponse: ApplySnapshotResponse,
    DeleteAutoSnapshotPoliciesResponse: DeleteAutoSnapshotPoliciesResponse,
    DescribeDisksResponse: DescribeDisksResponse,
    ModifySnapshotAttributeResponse: ModifySnapshotAttributeResponse,
    PrepayPrice: PrepayPrice,
    DeleteSnapshotsResponse: DeleteSnapshotsResponse,
    DetachDisksResponse: DetachDisksResponse,
    Filter: Filter,
    InquiryPriceCreateDisksRequest: InquiryPriceCreateDisksRequest,
    DescribeSnapshotsResponse: DescribeSnapshotsResponse,
    Snapshot: Snapshot,
    SnapshotOperationLog: SnapshotOperationLog,
    CreateDisksResponse: CreateDisksResponse,
    AttachDisksResponse: AttachDisksResponse,
    CreateAutoSnapshotPolicyResponse: CreateAutoSnapshotPolicyResponse,
    ModifySnapshotsSharePermissionRequest: ModifySnapshotsSharePermissionRequest,
    DiskOperationLog: DiskOperationLog,
    UnbindAutoSnapshotPolicyRequest: UnbindAutoSnapshotPolicyRequest,
    DescribeDiskOperationLogsRequest: DescribeDiskOperationLogsRequest,
    BindAutoSnapshotPolicyResponse: BindAutoSnapshotPolicyResponse,
    CreateDisksRequest: CreateDisksRequest,
    AttachDisksRequest: AttachDisksRequest,
    DescribeAutoSnapshotPoliciesResponse: DescribeAutoSnapshotPoliciesResponse,
    DescribeDiskAssociatedAutoSnapshotPolicyRequest: DescribeDiskAssociatedAutoSnapshotPolicyRequest,
    DescribeAutoSnapshotPoliciesRequest: DescribeAutoSnapshotPoliciesRequest,
    Image: Image,
    DescribeDiskConfigQuotaResponse: DescribeDiskConfigQuotaResponse,
    ModifyDiskAttributesRequest: ModifyDiskAttributesRequest,
    CreateSnapshotRequest: CreateSnapshotRequest,
    AttachDetail: AttachDetail,
    InquiryPriceResizeDiskResponse: InquiryPriceResizeDiskResponse,
    DescribeInstancesDiskNumResponse: DescribeInstancesDiskNumResponse,
    ResizeDiskResponse: ResizeDiskResponse,
    DescribeSnapshotsRequest: DescribeSnapshotsRequest,
    Placement: Placement,
    CreateAutoSnapshotPolicyRequest: CreateAutoSnapshotPolicyRequest,
    Disk: Disk,
    ModifyAutoSnapshotPolicyAttributeRequest: ModifyAutoSnapshotPolicyAttributeRequest,
    Tag: Tag,
    ApplySnapshotRequest: ApplySnapshotRequest,

}
