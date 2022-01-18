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
 * DescribeInstancesTrafficPackages request structure.
 * @class
 */
class DescribeInstancesTrafficPackagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. Each request can contain up to 100 instances at a time. You can get an instance ID from the `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/1207/47573?from_cn_redirect=1) API.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * AssociateInstancesKeyPairs response structure.
 * @class
 */
class AssociateInstancesKeyPairsResponse extends  AbstractModel {
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
 * DescribeDisksDeniedActions request structure.
 * @class
 */
class DescribeDisksDeniedActionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of cloud disk IDs.
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
 * DescribeInstancesTrafficPackages response structure.
 * @class
 */
class DescribeInstancesTrafficPackagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instance traffic package details.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instance traffic package details.
         * @type {Array.<InstanceTrafficPackage> || null}
         */
        this.InstanceTrafficPackageSet = null;

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

        if (params.InstanceTrafficPackageSet) {
            this.InstanceTrafficPackageSet = new Array();
            for (let z in params.InstanceTrafficPackageSet) {
                let obj = new InstanceTrafficPackage();
                obj.deserialize(params.InstanceTrafficPackageSet[z]);
                this.InstanceTrafficPackageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesDeniedActions request structure.
 * @class
 */
class DescribeInstancesDeniedActionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. Each request can contain up to 100 instances at a time. You can get an instance ID from the `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/1207/47573?from_cn_redirect=1) API.
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
 * DeleteKeyPairs response structure.
 * @class
 */
class DeleteKeyPairsResponse extends  AbstractModel {
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
 * AttachCcn request structure.
 * @class
 */
class AttachCcnRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN instance ID.
         * @type {string || null}
         */
        this.CcnId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

    }
}

/**
 * DescribeSnapshotsDeniedActions response structure.
 * @class
 */
class DescribeSnapshotsDeniedActionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of snapshot operation limit details.
         * @type {Array.<SnapshotDeniedActions> || null}
         */
        this.SnapshotDeniedActionSet = null;

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

        if (params.SnapshotDeniedActionSet) {
            this.SnapshotDeniedActionSet = new Array();
            for (let z in params.SnapshotDeniedActionSet) {
                let obj = new SnapshotDeniedActions();
                obj.deserialize(params.SnapshotDeniedActionSet[z]);
                this.SnapshotDeniedActionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Region information.
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name, such as `ap-guangzhou`.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region description, such as South China (Guangzhou).
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region availability status. Its value can only be `AVAILABLE`.
         * @type {string || null}
         */
        this.RegionState = null;

        /**
         * Whether the region is in the Chinese mainland
         * @type {boolean || null}
         */
        this.IsChinaMainland = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;
        this.IsChinaMainland = 'IsChinaMainland' in params ? params.IsChinaMainland : null;

    }
}

/**
 * DescribeBlueprintInstances response structure.
 * @class
 */
class DescribeBlueprintInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible image instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Image instance list information.
         * @type {Array.<BlueprintInstance> || null}
         */
        this.BlueprintInstanceSet = null;

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

        if (params.BlueprintInstanceSet) {
            this.BlueprintInstanceSet = new Array();
            for (let z in params.BlueprintInstanceSet) {
                let obj = new BlueprintInstance();
                obj.deserialize(params.BlueprintInstanceSet[z]);
                this.BlueprintInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * List of instance operation limits.
 * @class
 */
class InstanceDeniedActions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of operation limits.
         * @type {Array.<DeniedAction> || null}
         */
        this.DeniedActions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DeniedActions) {
            this.DeniedActions = new Array();
            for (let z in params.DeniedActions) {
                let obj = new DeniedAction();
                obj.deserialize(params.DeniedActions[z]);
                this.DeniedActions.push(obj);
            }
        }

    }
}

/**
 * InquirePriceCreateDisks request structure.
 * @class
 */
class InquirePriceCreateDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk size in GB.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Cloud disk media type. Valid values: "CLOUD_PREMIUM" (premium cloud storage), "CLOUD_SSD" (SSD cloud disk).
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Parameter settings for purchasing the monthly subscribed cloud disk.
         * @type {DiskChargePrepaid || null}
         */
        this.DiskChargePrepaid = null;

        /**
         * Number of cloud disks. Default value: 1.
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
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;

        if (params.DiskChargePrepaid) {
            let obj = new DiskChargePrepaid();
            obj.deserialize(params.DiskChargePrepaid)
            this.DiskChargePrepaid = obj;
        }
        this.DiskCount = 'DiskCount' in params ? params.DiskCount : null;

    }
}

/**
 * Changeable packages for the instance.
 * @class
 */
class ModifyBundle extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price difference that you need to pay for the new instance package after change.
         * @type {Price || null}
         */
        this.ModifyPrice = null;

        /**
         * Package change status. Valid values:
<li>SOLD_OUT: packages are sold out</li>
<li>AVAILABLE: packages can be changed</li>
<li>UNAVAILABLE: packages cannot be changed currently</li>
         * @type {string || null}
         */
        this.ModifyBundleState = null;

        /**
         * Package information.
         * @type {Bundle || null}
         */
        this.Bundle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ModifyPrice) {
            let obj = new Price();
            obj.deserialize(params.ModifyPrice)
            this.ModifyPrice = obj;
        }
        this.ModifyBundleState = 'ModifyBundleState' in params ? params.ModifyBundleState : null;

        if (params.Bundle) {
            let obj = new Bundle();
            obj.deserialize(params.Bundle)
            this.Bundle = obj;
        }

    }
}

/**
 * DetachCcn response structure.
 * @class
 */
class DetachCcnResponse extends  AbstractModel {
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
 * CreateInstanceSnapshot response structure.
 * @class
 */
class CreateInstanceSnapshotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot ID.
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
 * InquirePriceRenewInstances response structure.
 * @class
 */
class InquirePriceRenewInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price query information.
         * @type {Price || null}
         */
        this.Price = null;

        /**
         * List of data disk price information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DataDiskPrice> || null}
         */
        this.DataDiskPriceSet = null;

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
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }

        if (params.DataDiskPriceSet) {
            this.DataDiskPriceSet = new Array();
            for (let z in params.DataDiskPriceSet) {
                let obj = new DataDiskPrice();
                obj.deserialize(params.DataDiskPriceSet[z]);
                this.DataDiskPriceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteFirewallRules response structure.
 * @class
 */
class DeleteFirewallRulesResponse extends  AbstractModel {
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
 * DescribeGeneralResourceQuotas request structure.
 * @class
 */
class DescribeGeneralResourceQuotasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of resource names. Valid values: USER_KEY_PAIR, INSTANCE, SNAPSHOT.
         * @type {Array.<string> || null}
         */
        this.ResourceNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceNames = 'ResourceNames' in params ? params.ResourceNames : null;

    }
}

/**
 * DeleteKeyPairs request structure.
 * @class
 */
class DeleteKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair ID list. Each request can contain up to 10 key pairs.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * Information of the block device where the OS is installed, namely, the system disk.
 * @class
 */
class SystemDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * System disk type.
Valid values: 
<li> LOCAL_BASIC: local disk</li><li> LOCAL_SSD: local SSD disk</li><li> CLOUD_BASIC: HDD cloud disk</li><li> CLOUD_SSD: SSD cloud disk</li><li> CLOUD_PREMIUM: Premium Cloud Storage</li>
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * System disk size in GB.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * System disk ID.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;

    }
}

/**
 * Image reset information
 * @class
 */
class ResetInstanceBlueprint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image details
         * @type {Blueprint || null}
         */
        this.BlueprintInfo = null;

        /**
         * Whether the image can be reset as the target image
         * @type {boolean || null}
         */
        this.IsResettable = null;

        /**
         * Non-Resettable flag. If the image is resettable, it will be ""
         * @type {string || null}
         */
        this.NonResettableMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BlueprintInfo) {
            let obj = new Blueprint();
            obj.deserialize(params.BlueprintInfo)
            this.BlueprintInfo = obj;
        }
        this.IsResettable = 'IsResettable' in params ? params.IsResettable : null;
        this.NonResettableMessage = 'NonResettableMessage' in params ? params.NonResettableMessage : null;

    }
}

/**
 * DescribeBundles response structure.
 * @class
 */
class DescribeBundlesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of package details.
         * @type {Array.<Bundle> || null}
         */
        this.BundleSet = null;

        /**
         * Total number of eligible packages, which is used for pagination.
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

        if (params.BundleSet) {
            this.BundleSet = new Array();
            for (let z in params.BundleSet) {
                let obj = new Bundle();
                obj.deserialize(params.BundleSet[z]);
                this.BundleSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquirePriceRenewInstances request structure.
 * @class
 */
class InquirePriceRenewInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance to be renewed.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Prepaid mode, i.e., monthly subscription. This parameter can specify the purchase period and other attributes such as auto-renewal. It is required for prepaid instances.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * Whether to renew the data disk
         * @type {boolean || null}
         */
        this.RenewDataDisk = null;

        /**
         * Whether the data disk has the same expiration time as the instance
         * @type {boolean || null}
         */
        this.AlignInstanceExpiredTime = null;

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
        this.RenewDataDisk = 'RenewDataDisk' in params ? params.RenewDataDisk : null;
        this.AlignInstanceExpiredTime = 'AlignInstanceExpiredTime' in params ? params.AlignInstanceExpiredTime : null;

    }
}

/**
 * Package discount details (only returned for price query APIs called in the console).
 * @class
 */
class DiscountDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing duration.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Billing unit.
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Total price.
         * @type {number || null}
         */
        this.TotalCost = null;

        /**
         * Discounted total price.
         * @type {number || null}
         */
        this.RealTotalCost = null;

        /**
         * Discount.
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * Discount details.
         * @type {PolicyDetail || null}
         */
        this.PolicyDetail = null;

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
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;

        if (params.PolicyDetail) {
            let obj = new PolicyDetail();
            obj.deserialize(params.PolicyDetail)
            this.PolicyDetail = obj;
        }

    }
}

/**
 * DescribeDiskConfigs request structure.
 * @class
 */
class DescribeDiskConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter list.
<li>zone</li>Filter by availability zone.
Type: String
Required: no
         * @type {Array.<Filter> || null}
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeRegions response structure.
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of regions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Region information list.
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionSet = null;

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

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssociateInstancesKeyPairs request structure.
 * @class
 */
class AssociateInstancesKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair ID list. Each request can contain up to 100 key pairs.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Instance ID list. Each request can contain up to 100 instances at a time. You can get an instance ID from the `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/1207/47573?from_cn_redirect=1) API.
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
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * AttachCcn response structure.
 * @class
 */
class AttachCcnResponse extends  AbstractModel {
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
 * RebootInstances request structure.
 * @class
 */
class RebootInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. Each request can contain up to 100 instances at a time. You can get an instance ID from the `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/1207/47573?from_cn_redirect=1) API.
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
 * ResetAttachCcn request structure.
 * @class
 */
class ResetAttachCcnRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN instance ID.
         * @type {string || null}
         */
        this.CcnId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

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
         * List of cloud disk IDs.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether Auto-Renewal is enabled 
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * ImportKeyPair response structure.
 * @class
 */
class ImportKeyPairResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair ID.
         * @type {string || null}
         */
        this.KeyId = null;

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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
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
         * List of IDs of snapshots to be queried.
You cannot specify `SnapshotIds` and `Filters` at the same time.
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

        /**
         * Filter list.
<li>snapshot-id</li>Filter by **snapshot ID**.
Type: String
Required: no
<li>disk-id</li>Filter by **disk ID**.
Type: String
Required: no
<li>snapshot-name</li>Filter by **snapshot name**.
Type: String
Required: no
<li>instance-id</li>Filter by **instance ID**.
Type: String
Required: no
Each request can contain up to 10 `Filters` and 5 `Filter.Values`. You cannot specify both `SnapshotIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
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
 * Key pair information.
 * @class
 */
class KeyPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair ID, which is the unique identifier of a key pair.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Key pair name.
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * Public key (in plain text) of key pair.
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * List of IDs of instances associated with the key pair.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AssociatedInstanceIds = null;

        /**
         * Creation time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Private key of key pair.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrivateKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.AssociatedInstanceIds = 'AssociatedInstanceIds' in params ? params.AssociatedInstanceIds : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;

    }
}

/**
 * DescribeFirewallRulesTemplate request structure.
 * @class
 */
class DescribeFirewallRulesTemplateRequest extends  AbstractModel {
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
 * DescribeKeyPairs response structure.
 * @class
 */
class DescribeKeyPairsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible key pairs.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of key pair details.
         * @type {Array.<KeyPair> || null}
         */
        this.KeyPairSet = null;

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

        if (params.KeyPairSet) {
            this.KeyPairSet = new Array();
            for (let z in params.KeyPairSet) {
                let obj = new KeyPair();
                obj.deserialize(params.KeyPairSet[z]);
                this.KeyPairSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBlueprintAttribute request structure.
 * @class
 */
class ModifyBlueprintAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID, which can be obtained from the `BlueprintId` returned by the [DescribeBlueprints](https://intl.cloud.tencent.com/document/product/1207/47689?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.BlueprintId = null;

        /**
         * New image name, which can contain up to 60 characters.
         * @type {string || null}
         */
        this.BlueprintName = null;

        /**
         * New image description, which can contain up to 60 characters.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;
        this.BlueprintName = 'BlueprintName' in params ? params.BlueprintName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * InquirePriceRenewDisks request structure.
 * @class
 */
class InquirePriceRenewDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of cloud disk IDs.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Parameter settings for renewing the monthly subscribed cloud disk.
         * @type {RenewDiskChargePrepaid || null}
         */
        this.RenewDiskChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;

        if (params.RenewDiskChargePrepaid) {
            let obj = new RenewDiskChargePrepaid();
            obj.deserialize(params.RenewDiskChargePrepaid)
            this.RenewDiskChargePrepaid = obj;
        }

    }
}

/**
 * Disk information
 * @class
 */
class Disk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disk ID
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Availability zone
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Disk name
         * @type {string || null}
         */
        this.DiskName = null;

        /**
         * Disk type
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * Disk media type
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Disk payment type
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * Disk size
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Renewal flag
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Disk status
         * @type {string || null}
         */
        this.DiskState = null;

        /**
         * Whether the disk is attached to an instance
         * @type {boolean || null}
         */
        this.Attached = null;

        /**
         * Whether to release the disk along with the instance
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

        /**
         * Last operation
         * @type {string || null}
         */
        this.LatestOperation = null;

        /**
         * Last operation status
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * Last request ID
         * @type {string || null}
         */
        this.LatestOperationRequestId = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Expiration date
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * Isolation time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsolatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DiskName = 'DiskName' in params ? params.DiskName : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskChargeType = 'DiskChargeType' in params ? params.DiskChargeType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.DiskState = 'DiskState' in params ? params.DiskState : null;
        this.Attached = 'Attached' in params ? params.Attached : null;
        this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null;
        this.LatestOperation = 'LatestOperation' in params ? params.LatestOperation : null;
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;
        this.LatestOperationRequestId = 'LatestOperationRequestId' in params ? params.LatestOperationRequestId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;

    }
}

/**
 * AZ details
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Chinese name of AZ
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * AZ tags on instance purchase page
         * @type {string || null}
         */
        this.InstanceDisplayLabel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.InstanceDisplayLabel = 'InstanceDisplayLabel' in params ? params.InstanceDisplayLabel : null;

    }
}

/**
 * DescribeBlueprintInstances request structure.
 * @class
 */
class DescribeBlueprintInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list, which currently can contain only one instance.
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
 * ApplyInstanceSnapshot response structure.
 * @class
 */
class ApplyInstanceSnapshotResponse extends  AbstractModel {
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
         * List of cloud disk IDs.
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
 * ModifyFirewallRules request structure.
 * @class
 */
class ModifyFirewallRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Firewall rule list.
         * @type {Array.<FirewallRule> || null}
         */
        this.FirewallRules = null;

        /**
         * Current firewall version number. Every time you update the firewall rule version, it will be automatically increased by 1 to prevent the rule from expiring. If it is left empty, conflicts will not be considered.
         * @type {number || null}
         */
        this.FirewallVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FirewallRules) {
            this.FirewallRules = new Array();
            for (let z in params.FirewallRules) {
                let obj = new FirewallRule();
                obj.deserialize(params.FirewallRules[z]);
                this.FirewallRules.push(obj);
            }
        }
        this.FirewallVersion = 'FirewallVersion' in params ? params.FirewallVersion : null;

    }
}

/**
 * CreateBlueprint request structure.
 * @class
 */
class CreateBlueprintRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image name, which can contain up to 60 characters.
         * @type {string || null}
         */
        this.BlueprintName = null;

        /**
         * Image description, which can contain up to 60 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * ID of the instance for which to make an image.
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
        this.BlueprintName = 'BlueprintName' in params ? params.BlueprintName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DeleteFirewallRules request structure.
 * @class
 */
class DeleteFirewallRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Firewall rule list.
         * @type {Array.<FirewallRule> || null}
         */
        this.FirewallRules = null;

        /**
         * Current firewall version number. Every time you update the firewall rule version, it will be automatically increased by 1 to prevent the rule from expiring. If it is left empty, conflicts will not be considered.
         * @type {number || null}
         */
        this.FirewallVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FirewallRules) {
            this.FirewallRules = new Array();
            for (let z in params.FirewallRules) {
                let obj = new FirewallRule();
                obj.deserialize(params.FirewallRules[z]);
                this.FirewallRules.push(obj);
            }
        }
        this.FirewallVersion = 'FirewallVersion' in params ? params.FirewallVersion : null;

    }
}

/**
 * DescribeInstanceVncUrl request structure.
 * @class
 */
class DescribeInstanceVncUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, which can be obtained from the `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/1207/47573?from_cn_redirect=1) API.
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
 * ModifyFirewallRuleDescription request structure.
 * @class
 */
class ModifyFirewallRuleDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Firewall rule.
         * @type {FirewallRule || null}
         */
        this.FirewallRule = null;

        /**
         * Current firewall version number. Every time you update the firewall rule version, it will be automatically increased by 1 to prevent the rule from expiring. If it is left empty, conflicts will not be considered.
         * @type {number || null}
         */
        this.FirewallVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FirewallRule) {
            let obj = new FirewallRule();
            obj.deserialize(params.FirewallRule)
            this.FirewallRule = obj;
        }
        this.FirewallVersion = 'FirewallVersion' in params ? params.FirewallVersion : null;

    }
}

/**
 * Instance traffic package details
 * @class
 */
class InstanceTrafficPackage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of traffic package details.
         * @type {Array.<TrafficPackage> || null}
         */
        this.TrafficPackageSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.TrafficPackageSet) {
            this.TrafficPackageSet = new Array();
            for (let z in params.TrafficPackageSet) {
                let obj = new TrafficPackage();
                obj.deserialize(params.TrafficPackageSet[z]);
                this.TrafficPackageSet.push(obj);
            }
        }

    }
}

/**
 * StartInstances response structure.
 * @class
 */
class StartInstancesResponse extends  AbstractModel {
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
 * TerminateInstances response structure.
 * @class
 */
class TerminateInstancesResponse extends  AbstractModel {
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
 * Traffic package details.
 * @class
 */
class TrafficPackage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Traffic package ID.
         * @type {string || null}
         */
        this.TrafficPackageId = null;

        /**
         * Used traffic in bytes during traffic package validity period.
         * @type {number || null}
         */
        this.TrafficUsed = null;

        /**
         * Total traffic in bytes during traffic package validity period.
         * @type {number || null}
         */
        this.TrafficPackageTotal = null;

        /**
         * Remaining traffic in bytes during traffic package validity period.
         * @type {number || null}
         */
        this.TrafficPackageRemaining = null;

        /**
         * Traffic exceeding package amount in bytes during traffic package validity period.
         * @type {number || null}
         */
        this.TrafficOverflow = null;

        /**
         * Start time of traffic package validity period according to ISO 8601 standard. UTC time is used. 
Format: YYYY-MM-DDThh:mm:ssZ.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of traffic package validity period according to ISO 8601 standard. UTC time is used. 
Format: YYYY-MM-DDThh:mm:ssZ.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Traffic package expiration time according to ISO 8601 standard. UTC time is used. 
Format: YYYY-MM-DDThh:mm:ssZ.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Deadline = null;

        /**
         * Traffic package status:
<li>NETWORK_NORMAL: normal</li>
<li>OVERDUE_NETWORK_DISABLED: the network is disconnected due to overdue payments</li>
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
        this.TrafficPackageId = 'TrafficPackageId' in params ? params.TrafficPackageId : null;
        this.TrafficUsed = 'TrafficUsed' in params ? params.TrafficUsed : null;
        this.TrafficPackageTotal = 'TrafficPackageTotal' in params ? params.TrafficPackageTotal : null;
        this.TrafficPackageRemaining = 'TrafficPackageRemaining' in params ? params.TrafficPackageRemaining : null;
        this.TrafficOverflow = 'TrafficOverflow' in params ? params.TrafficOverflow : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * List of instance IDs.
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
 * DescribeBlueprints request structure.
 * @class
 */
class DescribeBlueprintsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID list.
         * @type {Array.<string> || null}
         */
        this.BlueprintIds = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, please see the relevant section in [Overview](https://intl.cloud.tencent.com/document/product/1207/47578?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, please see the relevant section in the API [Overview](https://intl.cloud.tencent.com/document/product/1207/47578?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter list
<li>blueprint-id</li>Filter by **image ID**.
Type: String
Required: no
<li>blueprint-type</li>Filter by **image type**.
Valid values: `APP_OS`: application image; `PURE_OS`: system image; `PRIVATE`: custom image; `SHARED`: shared image
Type: String
Required: no
<li>platform-type</li>Filter by **image platform type**.
Valid values: `LINUX_UNIX`: Linux or Unix; `WINDOWS`: Windows
Type: String
Required: no
<li>blueprint-name</li>Filter by **image name**.
Type: String
Required: no
<li>blueprint-state</li>Filter by **image status**.
Type: String
Required: no

Each request can contain up to 10 `Filters` and 5 `Filter.Values`. `BlueprintIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<Filter> || null}
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
        this.BlueprintIds = 'BlueprintIds' in params ? params.BlueprintIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * Whether the instance can be returned.
 * @class
 */
class InstanceReturnable extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether the instance can be returned.
         * @type {boolean || null}
         */
        this.IsReturnable = null;

        /**
         * Error code of instance return failure.
         * @type {number || null}
         */
        this.ReturnFailCode = null;

        /**
         * Error message of instance return failure.
         * @type {string || null}
         */
        this.ReturnFailMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IsReturnable = 'IsReturnable' in params ? params.IsReturnable : null;
        this.ReturnFailCode = 'ReturnFailCode' in params ? params.ReturnFailCode : null;
        this.ReturnFailMessage = 'ReturnFailMessage' in params ? params.ReturnFailMessage : null;

    }
}

/**
 * DescribeInstancesDeniedActions response structure.
 * @class
 */
class DescribeInstancesDeniedActionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance operation limit details.
         * @type {Array.<InstanceDeniedActions> || null}
         */
        this.InstanceDeniedActionSet = null;

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

        if (params.InstanceDeniedActionSet) {
            this.InstanceDeniedActionSet = new Array();
            for (let z in params.InstanceDeniedActionSet) {
                let obj = new InstanceDeniedActions();
                obj.deserialize(params.InstanceDeniedActionSet[z]);
                this.InstanceDeniedActionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDisksAttribute request structure.
 * @class
 */
class ModifyDisksAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of cloud disk IDs.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Cloud disk name.
         * @type {string || null}
         */
        this.DiskName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;
        this.DiskName = 'DiskName' in params ? params.DiskName : null;

    }
}

/**
 * ModifyInstancesAttribute request structure.
 * @class
 */
class ModifyInstancesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. Each request can contain up to 100 instances at a time. You can get an instance ID from the `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/1207/47573?from_cn_redirect=1) API.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Instance name, which is customizable and can contain up to 60 characters.
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * DescribeZones request structure.
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
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
 * StartInstances request structure.
 * @class
 */
class StartInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. Each request can contain up to 100 instances at a time. You can get an instance ID from the `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/1207/47573?from_cn_redirect=1) API.
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
 * List of snapshot operation limits.
 * @class
 */
class SnapshotDeniedActions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot ID.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * List of operation limits.
         * @type {Array.<DeniedAction> || null}
         */
        this.DeniedActions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;

        if (params.DeniedActions) {
            this.DeniedActions = new Array();
            for (let z in params.DeniedActions) {
                let obj = new DeniedAction();
                obj.deserialize(params.DeniedActions[z]);
                this.DeniedActions.push(obj);
            }
        }

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
         * List of IDs of snapshots to be deleted, which can be queried through `DescribeSnapshots`.
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
 * ModifySnapshotAttribute request structure.
 * @class
 */
class ModifySnapshotAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot ID, which can be queried through `DescribeSnapshots`.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * New snapshot name, which can contain up to 60 characters.
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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;

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
         * List of cloud disk information.
         * @type {Array.<Disk> || null}
         */
        this.DiskSet = null;

        /**
         * Number of eligible cloud disks.
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

        if (params.DiskSet) {
            this.DiskSet = new Array();
            for (let z in params.DiskSet) {
                let obj = new Disk();
                obj.deserialize(params.DiskSet[z]);
                this.DiskSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBundleDiscount response structure.
 * @class
 */
class DescribeBundleDiscountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Currency: CNY, USD.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Discount tier details. The information of each tier includes the duration, discounted quantity, total price, discounted price, and discount details (user discount, official website discount, or final discount).
         * @type {Array.<DiscountDetail> || null}
         */
        this.DiscountDetail = null;

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
        this.Currency = 'Currency' in params ? params.Currency : null;

        if (params.DiscountDetail) {
            this.DiscountDetail = new Array();
            for (let z in params.DiscountDetail) {
                let obj = new DiscountDetail();
                obj.deserialize(params.DiscountDetail[z]);
                this.DiscountDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifyDisksRenewFlag request structure.
 * @class
 */
class ModifyDisksRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of cloud disk IDs.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Whether Auto-Renewal is enabled 
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
 * DisassociateInstancesKeyPairs request structure.
 * @class
 */
class DisassociateInstancesKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair ID list. Each request can contain up to 100 key pairs.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Instance ID list. Each request can contain up to 100 instances at a time. You can get an instance ID from the `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/1207/47573?from_cn_redirect=1) API.
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
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * Data disk price
 * @class
 */
class DataDiskPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk ID.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Cloud disk unit price.
         * @type {number || null}
         */
        this.OriginalDiskPrice = null;

        /**
         * Total cloud disk price.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discount.
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * Discounted total price.
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
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.OriginalDiskPrice = 'OriginalDiskPrice' in params ? params.OriginalDiskPrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

    }
}

/**
 * ImportKeyPair request structure.
 * @class
 */
class ImportKeyPairRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair name, which can contain up to 25 digits, letters, and underscores.
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * Public key content of the key pair, which is in the OpenSSH RSA format.
         * @type {string || null}
         */
        this.PublicKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;

    }
}

/**
 * DeleteBlueprints response structure.
 * @class
 */
class DeleteBlueprintsResponse extends  AbstractModel {
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
 * ModifyInstancesLoginKeyPairAttribute request structure.
 * @class
 */
class ModifyInstancesLoginKeyPairAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. Each request can contain up to 100 instances at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Whether to allow login with the default key pair. Valid values: YES: yes; NO: no.
         * @type {string || null}
         */
        this.PermitLogin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.PermitLogin = 'PermitLogin' in params ? params.PermitLogin : null;

    }
}

/**
 * StopInstances response structure.
 * @class
 */
class StopInstancesResponse extends  AbstractModel {
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
 * Firewall rule information.
 * @class
 */
class FirewallRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol. Valid values: TCP, UDP, ICMP, ALL.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Port. Valid values: ALL, one single port, multiple ports separated by commas, or port range indicated by a minus sign
         * @type {string || null}
         */
        this.Port = null;

        /**
         * IP range or IP (mutually exclusive). Default value: 0.0.0.0/0, which indicates all sources.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Valid values: ACCEPT, DROP. Default value: ACCEPT.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Firewall rule description.
         * @type {string || null}
         */
        this.FirewallRuleDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.FirewallRuleDescription = 'FirewallRuleDescription' in params ? params.FirewallRuleDescription : null;

    }
}

/**
 * ModifyBlueprintAttribute response structure.
 * @class
 */
class ModifyBlueprintAttributeResponse extends  AbstractModel {
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
 * DescribeFirewallRulesTemplate response structure.
 * @class
 */
class DescribeFirewallRulesTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible firewall rules.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Firewall rule details list.
         * @type {Array.<FirewallRuleInfo> || null}
         */
        this.FirewallRuleSet = null;

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

        if (params.FirewallRuleSet) {
            this.FirewallRuleSet = new Array();
            for (let z in params.FirewallRuleSet) {
                let obj = new FirewallRuleInfo();
                obj.deserialize(params.FirewallRuleSet[z]);
                this.FirewallRuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions request structure.
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
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
 * DescribeInstancesDiskNum response structure.
 * @class
 */
class DescribeInstancesDiskNumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of all attached disks
         * @type {Array.<AttachDetail> || null}
         */
        this.AttachDetailSet = null;

        /**
         * Number of attached cloud disks
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

        if (params.AttachDetailSet) {
            this.AttachDetailSet = new Array();
            for (let z in params.AttachDetailSet) {
                let obj = new AttachDetail();
                obj.deserialize(params.AttachDetailSet[z]);
                this.AttachDetailSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquirePriceCreateBlueprint response structure.
 * @class
 */
class InquirePriceCreateBlueprintResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom image price.
         * @type {BlueprintPrice || null}
         */
        this.BlueprintPrice = null;

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

        if (params.BlueprintPrice) {
            let obj = new BlueprintPrice();
            obj.deserialize(params.BlueprintPrice)
            this.BlueprintPrice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesReturnable request structure.
 * @class
 */
class DescribeInstancesReturnableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. Each request can contain up to 100 instances at a time. You can get an instance ID from the `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/1207/47573?from_cn_redirect=1) API.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Details of the returnable cloud disk
 * @class
 */
class DiskReturnable extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk ID.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Whether the cloud disk can be returned.
         * @type {boolean || null}
         */
        this.IsReturnable = null;

        /**
         * Error code of cloud disk return failure.
         * @type {number || null}
         */
        this.ReturnFailCode = null;

        /**
         * Error message of cloud disk return failure.
         * @type {string || null}
         */
        this.ReturnFailMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.IsReturnable = 'IsReturnable' in params ? params.IsReturnable : null;
        this.ReturnFailCode = 'ReturnFailCode' in params ? params.ReturnFailCode : null;
        this.ReturnFailMessage = 'ReturnFailMessage' in params ? params.ReturnFailMessage : null;

    }
}

/**
 * DescribeBlueprints response structure.
 * @class
 */
class DescribeBlueprintsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible images.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Image details list.
         * @type {Array.<Blueprint> || null}
         */
        this.BlueprintSet = null;

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

        if (params.BlueprintSet) {
            this.BlueprintSet = new Array();
            for (let z in params.BlueprintSet) {
                let obj = new Blueprint();
                obj.deserialize(params.BlueprintSet[z]);
                this.BlueprintSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKeyPairs request structure.
 * @class
 */
class DescribeKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair ID list.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter list
<li>key-id</li>Filter by **key pair ID**.
Type: String
Required: no
<li>key-name</li>Filter by **key pair name**.
Type: String
Required: no
Each request can contain up to 10 `Filters` and 5 `Filter.Values`. `KeyIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<Filter> || null}
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
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeCcnAttachedInstances request structure.
 * @class
 */
class DescribeCcnAttachedInstancesRequest extends  AbstractModel {
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
 * ResetInstancesPassword response structure.
 * @class
 */
class ResetInstancesPasswordResponse extends  AbstractModel {
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
 * Instance login configuration and information.
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key ID list. After a key is associated, you can use it to access the instance. Note: this field may return [], indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * Instance information.
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Package ID.
         * @type {string || null}
         */
        this.BundleId = null;

        /**
         * Image ID.
         * @type {string || null}
         */
        this.BlueprintId = null;

        /**
         * Number of instance CPU cores.
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * Instance memory capacity in GB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance billing mode. Valid values: 
PREPAID: prepaid (i.e., monthly subscription).
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Instance system disk information.
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Private IP of instance primary ENI. 
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PrivateAddresses = null;

        /**
         * Public IP of instance primary ENI. 
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PublicAddresses = null;

        /**
         * Instance bandwidth information.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Auto-Renewal flag. Valid values: 
NOTIFY_AND_MANUAL_RENEW: notify upon expiration but do not renew automatically  
NOTIFY_AND_AUTO_RENEW: notify upon expiration and renew automatically.
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Instance login settings.
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Instance status. Valid values: 
<li>PENDING: creating</li><li>LAUNCH_FAILED: creation failed</li><li>RUNNING: running</li><li>STOPPED: shut down</li><li>STARTING: starting</li><li>STOPPING: shutting down</li><li>REBOOTING: rebooting</li><li>SHUTDOWN: shut down and to be terminated</li><li>TERMINATING: terminating</li>
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * Globally unique ID of instance.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Last instance operation, such as `StopInstances` and `ResetInstance`. Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LatestOperation = null;

        /**
         * Last instance operation status. Valid values: 
SUCCESS: operation succeeded 
OPERATING: the operation is being executed 
FAILED: operation failed 
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * Unique request ID for the last operation of the instance. 
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LatestOperationRequestId = null;

        /**
         * Isolation time according to ISO 8601 standard. UTC time is used. 
Format: YYYY-MM-DDThh:mm:ssZ.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * Creation time according to ISO 8601 standard. UTC time is used. 
Format: YYYY-MM-DDThh:mm:ssZ.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Expiration time according to ISO 8601 standard. UTC time is used. 
Format: YYYY-MM-DDThh:mm:ssZ.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * OS type, such as LINUX_UNIX and WINDOWS.
         * @type {string || null}
         */
        this.PlatformType = null;

        /**
         * OS type.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * OS name.
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * AZ.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * The list of tags associated with the instance
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BundleId = 'BundleId' in params ? params.BundleId : null;
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }
        this.PrivateAddresses = 'PrivateAddresses' in params ? params.PrivateAddresses : null;
        this.PublicAddresses = 'PublicAddresses' in params ? params.PublicAddresses : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.LatestOperation = 'LatestOperation' in params ? params.LatestOperation : null;
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;
        this.LatestOperationRequestId = 'LatestOperationRequestId' in params ? params.LatestOperationRequestId : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

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
 * CreateKeyPair response structure.
 * @class
 */
class CreateKeyPairResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair information.
         * @type {KeyPair || null}
         */
        this.KeyPair = null;

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

        if (params.KeyPair) {
            let obj = new KeyPair();
            obj.deserialize(params.KeyPair)
            this.KeyPair = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceVncUrl response structure.
 * @class
 */
class DescribeInstanceVncUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance VNC URL.
         * @type {string || null}
         */
        this.InstanceVncUrl = null;

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
        this.InstanceVncUrl = 'InstanceVncUrl' in params ? params.InstanceVncUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyFirewallRules response structure.
 * @class
 */
class ModifyFirewallRulesResponse extends  AbstractModel {
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
 * Cloud disk price
 * @class
 */
class DiskPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk unit price.
         * @type {number || null}
         */
        this.OriginalDiskPrice = null;

        /**
         * Total cloud disk price.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discount.
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * Discounted total price.
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
        this.OriginalDiskPrice = 'OriginalDiskPrice' in params ? params.OriginalDiskPrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

    }
}

/**
 * DescribeCcnAttachedInstances response structure.
 * @class
 */
class DescribeCcnAttachedInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instances associated with the CCN instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CcnAttachedInstance> || null}
         */
        this.CcnAttachedInstanceSet = null;

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

        if (params.CcnAttachedInstanceSet) {
            this.CcnAttachedInstanceSet = new Array();
            for (let z in params.CcnAttachedInstanceSet) {
                let obj = new CcnAttachedInstance();
                obj.deserialize(params.CcnAttachedInstanceSet[z]);
                this.CcnAttachedInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBundles request structure.
 * @class
 */
class DescribeBundlesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Package ID list.
         * @type {Array.<string> || null}
         */
        this.BundleIds = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, please see the relevant section in [Overview](https://intl.cloud.tencent.com/document/product/1207/47578?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, please see the relevant section in the API [Overview](https://intl.cloud.tencent.com/document/product/1207/47578?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter list.
<li>bundle-id</li>Filter by **package ID**.
Type: String
Required: no
<li>support-platform-type</li>Filter by **system type**.
Valid values: LINUX_UNIX (Linux/Unix), WINDOWS ( Windows)
Type: String
Required: no
Each request can contain up to 10 `Filters` and 5 `Filter.Values`. You cannot specify both `BundleIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * AZ list, which contains all AZs by default.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BundleIds = 'BundleIds' in params ? params.BundleIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Zones = 'Zones' in params ? params.Zones : null;

    }
}

/**
 * Image information.
 * @class
 */
class Blueprint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID, which is the unique identifier of `Blueprint`.
         * @type {string || null}
         */
        this.BlueprintId = null;

        /**
         * Image title to be displayed.
         * @type {string || null}
         */
        this.DisplayTitle = null;

        /**
         * Image version to be displayed.
         * @type {string || null}
         */
        this.DisplayVersion = null;

        /**
         * Image description information.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * OS name.
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * OS type.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * OS type, such as LINUX_UNIX and WINDOWS.
         * @type {string || null}
         */
        this.PlatformType = null;

        /**
         * Image type, such as APP_OS, PURE_OS, and PRIVATE.
         * @type {string || null}
         */
        this.BlueprintType = null;

        /**
         * Image picture URL.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * System disk size required by image in GB.
         * @type {number || null}
         */
        this.RequiredSystemDiskSize = null;

        /**
         * Image status.
         * @type {string || null}
         */
        this.BlueprintState = null;

        /**
         * Creation time according to ISO 8601 standard. UTC time is used. 
Format: YYYY-MM-DDThh:mm:ssZ.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Image name.
         * @type {string || null}
         */
        this.BlueprintName = null;

        /**
         * Whether the image supports automation tools.
         * @type {boolean || null}
         */
        this.SupportAutomationTools = null;

        /**
         * Memory size required by image in GB.
         * @type {number || null}
         */
        this.RequiredMemorySize = null;

        /**
         * ID of the Lighthouse image shared from a CVM image
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ImageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;
        this.DisplayTitle = 'DisplayTitle' in params ? params.DisplayTitle : null;
        this.DisplayVersion = 'DisplayVersion' in params ? params.DisplayVersion : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;
        this.BlueprintType = 'BlueprintType' in params ? params.BlueprintType : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RequiredSystemDiskSize = 'RequiredSystemDiskSize' in params ? params.RequiredSystemDiskSize : null;
        this.BlueprintState = 'BlueprintState' in params ? params.BlueprintState : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.BlueprintName = 'BlueprintName' in params ? params.BlueprintName : null;
        this.SupportAutomationTools = 'SupportAutomationTools' in params ? params.SupportAutomationTools : null;
        this.RequiredMemorySize = 'RequiredMemorySize' in params ? params.RequiredMemorySize : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

    }
}

/**
 * Restricted operation.
 * @class
 */
class DeniedAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Restricted operation name.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Restricted operation message code.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Restricted operation message.
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
        this.Action = 'Action' in params ? params.Action : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * ModifyInstancesLoginKeyPairAttribute response structure.
 * @class
 */
class ModifyInstancesLoginKeyPairAttributeResponse extends  AbstractModel {
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
 * InquirePriceRenewDisks response structure.
 * @class
 */
class InquirePriceRenewDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk price.
         * @type {DiskPrice || null}
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
            let obj = new DiskPrice();
            obj.deserialize(params.DiskPrice)
            this.DiskPrice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Package information.
 * @class
 */
class Bundle extends  AbstractModel {
    constructor(){
        super();

        /**
         * Package ID.
         * @type {string || null}
         */
        this.BundleId = null;

        /**
         * Memory size in GB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * System disk type.
Valid values: 
<li> LOCAL_BASIC: local disk</li><li> LOCAL_SSD: local SSD disk</li><li> CLOUD_BASIC: HDD cloud disk</li><li> CLOUD_SSD: SSD cloud disk</li><li> CLOUD_PREMIUM: Premium Cloud Storage</li>
         * @type {string || null}
         */
        this.SystemDiskType = null;

        /**
         * System disk size.
         * @type {number || null}
         */
        this.SystemDiskSize = null;

        /**
         * Monthly network traffic in Gb.
         * @type {number || null}
         */
        this.MonthlyTraffic = null;

        /**
         * Whether Linux/Unix is supported.
         * @type {boolean || null}
         */
        this.SupportLinuxUnixPlatform = null;

        /**
         * Whether Windows is supported.
         * @type {boolean || null}
         */
        this.SupportWindowsPlatform = null;

        /**
         * Current package unit price information.
         * @type {Price || null}
         */
        this.Price = null;

        /**
         * Number of CPU cores.
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * Peak bandwidth in Mbps.
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * Network billing mode.
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * Package sale status. Valid values: AVAILABLE, SOLD_OUT
         * @type {string || null}
         */
        this.BundleSalesState = null;

        /**
         * Package type.
Valid values:
<li> GENERAL_BUNDLE: general</li><li> STORAGE_BUNDLE: Storage</li>
         * @type {string || null}
         */
        this.BundleType = null;

        /**
         * Package tag.
Valid values:
"ACTIVITY": promotional package
"NORMAL": regular package
"CAREFREE": carefree package
         * @type {string || null}
         */
        this.BundleDisplayLabel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BundleId = 'BundleId' in params ? params.BundleId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.SystemDiskType = 'SystemDiskType' in params ? params.SystemDiskType : null;
        this.SystemDiskSize = 'SystemDiskSize' in params ? params.SystemDiskSize : null;
        this.MonthlyTraffic = 'MonthlyTraffic' in params ? params.MonthlyTraffic : null;
        this.SupportLinuxUnixPlatform = 'SupportLinuxUnixPlatform' in params ? params.SupportLinuxUnixPlatform : null;
        this.SupportWindowsPlatform = 'SupportWindowsPlatform' in params ? params.SupportWindowsPlatform : null;

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.BundleSalesState = 'BundleSalesState' in params ? params.BundleSalesState : null;
        this.BundleType = 'BundleType' in params ? params.BundleType : null;
        this.BundleDisplayLabel = 'BundleDisplayLabel' in params ? params.BundleDisplayLabel : null;

    }
}

/**
 * Cloud disk configuration
 * @class
 */
class DiskConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Availability zone.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Cloud disk type.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Cloud disk sale status.
         * @type {string || null}
         */
        this.DiskSalesState = null;

        /**
         * Maximum cloud disk size.
         * @type {number || null}
         */
        this.MaxDiskSize = null;

        /**
         * Minimum cloud disk size.
         * @type {number || null}
         */
        this.MinDiskSize = null;

        /**
         * Cloud disk increment.
         * @type {number || null}
         */
        this.DiskStepSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSalesState = 'DiskSalesState' in params ? params.DiskSalesState : null;
        this.MaxDiskSize = 'MaxDiskSize' in params ? params.MaxDiskSize : null;
        this.MinDiskSize = 'MinDiskSize' in params ? params.MinDiskSize : null;
        this.DiskStepSize = 'DiskStepSize' in params ? params.DiskStepSize : null;

    }
}

/**
 * InquirePriceCreateInstances response structure.
 * @class
 */
class InquirePriceCreateInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price query information.
         * @type {Price || null}
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
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSnapshotsDeniedActions request structure.
 * @class
 */
class DescribeSnapshotsDeniedActionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot ID list, which can be queried through `DescribeSnapshots`.
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
 * DescribeDiskDiscount response structure.
 * @class
 */
class DescribeDiskDiscountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Currency: CNY, USD.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Discount tier details. The information of each tier includes the duration, discounted quantity, total price, discounted price, and discount details (user discount, official website discount, or final discount).
         * @type {Array.<DiscountDetail> || null}
         */
        this.DiscountDetail = null;

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
        this.Currency = 'Currency' in params ? params.Currency : null;

        if (params.DiscountDetail) {
            this.DiscountDetail = new Array();
            for (let z in params.DiscountDetail) {
                let obj = new DiscountDetail();
                obj.deserialize(params.DiscountDetail[z]);
                this.DiscountDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetInstancesPassword request structure.
 * @class
 */
class ResetInstancesPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. Each request can contain up to 100 instances at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Login password of the instance(s). The password requirements vary among different operating systems:
The password of a `LINUX_UNIX` instance must contain 8–30 characters (above 12 characters preferably) in at least three of the following types and cannot begin with "/": <br><li>Lowercase letters: [a–z]<br><li>Uppercase letters: [A–Z]<br><li>Digits: 0–9<br><li>Special symbols: ()\`~!@#$%^&\*-+=\_|{}[]:;'<>,.?/</li>
The password of a `WINDOWS` instance must contain 12–30 characters in at least three of the following types and cannot begin with "/" or include the username: <br><li>Lowercase letters: [a–z]<br><li>Uppercase letters: [A–Z]<br><li>Digits: 0–9<br><li>Special symbols: ()\`~!@#$%^&\*-+=\_|{}[]:;' <>,.?/<br><li>If both `LINUX_UNIX` and `WINDOWS` instances exist, the requirements for password complexity of `WINDOWS` instances shall prevail.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * OS username of the instance for which you want to reset the password, which can contain up to 64 characters.
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * Parameter settings for the monthly subscribed cloud disk
 * @class
 */
class DiskChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchase duration.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether Auto-Renewal is enabled 
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Purchase duration unit. Default value: "m" (month)
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
        this.Period = 'Period' in params ? params.Period : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;

    }
}

/**
 * CreateKeyPair request structure.
 * @class
 */
class CreateKeyPairRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair name, which can contain up to 25 digits, letters, and underscores.
         * @type {string || null}
         */
        this.KeyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyName = 'KeyName' in params ? params.KeyName : null;

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
         * Instance ID list. Each request can contain up to 100 instances at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Filter list
<li>instance-name</li>Filter by the instance name
Type: String
Required: no
<li>private-ip-address</li>Filter by the private IP of instance primary ENI
Type: String
Required: no
<li>public-ip-address</li>Filter by the public IP of instance primary ENI
Type: String
Required: no
<li>zone</li>Filter by the availability zone
Type: String
Required: no
<li>instance-state</li>Filter by **instance status**.
Type: String
Required: no
Each request can contain up to 10 filters, each of which can have 5 values. You cannot specify both `InstanceIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, please see the relevant section in [Overview](https://intl.cloud.tencent.com/document/product/1207/47578?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, please see the relevant section in the API [Overview](https://intl.cloud.tencent.com/document/product/1207/47578?from_cn_redirect=1).
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

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

    }
}

/**
 * DetachCcn request structure.
 * @class
 */
class DetachCcnRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN instance ID.
         * @type {string || null}
         */
        this.CcnId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

    }
}

/**
 * >Key-Value pair filter for conditional filtering queries, such as filtering name
> * If there are multiple `Filter` parameters, the relationship among them is the logical `AND`.
> * If there are multiple `Values` for the same `Filter`, the relationship among the `Values` is the logical `OR`.
>
> Taking the `Filter` in the `DescribeInstances` API as an example, you can use the following filters to query the instance whose name (`instance-name`) is `test` ***and*** private IP (`private-ip-address`) is 10.10.10.10:
```
Filters.0.Name=instance-name
&Filters.0.Values.0=test
&Filters.1.Name=private-ip-address
&Filters.1.Values.0=10.10.10.10
```
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field to be filtered.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter value of field.
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
 * Snapshot information.
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
         * Type of the disk for which the snapshot is created. Valid values: <li>SYSTEM_DISK: system disk</li>
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * ID of the disk for which the snapshot is created.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Size of the disk in GB for which the snapshot is created.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Snapshot name, which is a custom snapshot alias.
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * Snapshot status. Valid values:
<li>NORMAL: normal </li>
<li>CREATING: creating</li>
<li>ROLLBACKING: rolling back</li>
         * @type {string || null}
         */
        this.SnapshotState = null;

        /**
         * Snapshot creation or rollback progress in percentage. After success, the value of this field will become 100.
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * Last snapshot operation. It is recorded only during snapshot creation and rollback.
Example values: CreateInstanceSnapshot, RollbackInstanceSnapshot.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LatestOperation = null;

        /**
         * Last snapshot operation status. It is recorded only during snapshot creation and rollback.
Valid values:
<li>SUCCESS: operation succeeded</li>
<li>OPERATING: the operation is being executed</li>
<li>FAILED: operation failed</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * Unique request ID for the last snapshot operation. It is recorded only during snapshot creation and rollback.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LatestOperationRequestId = null;

        /**
         * Snapshot creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.SnapshotState = 'SnapshotState' in params ? params.SnapshotState : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.LatestOperation = 'LatestOperation' in params ? params.LatestOperation : null;
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;
        this.LatestOperationRequestId = 'LatestOperationRequestId' in params ? params.LatestOperationRequestId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * ModifyFirewallRuleDescription response structure.
 * @class
 */
class ModifyFirewallRuleDescriptionResponse extends  AbstractModel {
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
 * DescribeDiskDiscount request structure.
 * @class
 */
class DescribeDiskDiscountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk type. Valid values: "CLOUD_PREMIUM".
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Cloud disk size.
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
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * InquirePriceCreateBlueprint request structure.
 * @class
 */
class InquirePriceCreateBlueprintRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of custom images. Default value: 1.
         * @type {number || null}
         */
        this.BlueprintCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlueprintCount = 'BlueprintCount' in params ? params.BlueprintCount : null;

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
 * CreateFirewallRules request structure.
 * @class
 */
class CreateFirewallRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Firewall rule list.
         * @type {Array.<FirewallRule> || null}
         */
        this.FirewallRules = null;

        /**
         * Current firewall version number. Every time you update the firewall rule version, it will be automatically increased by 1 to prevent the rule from expiring. If it is left empty, conflicts will not be considered.
         * @type {number || null}
         */
        this.FirewallVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FirewallRules) {
            this.FirewallRules = new Array();
            for (let z in params.FirewallRules) {
                let obj = new FirewallRule();
                obj.deserialize(params.FirewallRules[z]);
                this.FirewallRules.push(obj);
            }
        }
        this.FirewallVersion = 'FirewallVersion' in params ? params.FirewallVersion : null;

    }
}

/**
 * Image software information.
 * @class
 */
class Software extends  AbstractModel {
    constructor(){
        super();

        /**
         * Software name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Software version.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Software picture URL.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Software installation directory.
         * @type {string || null}
         */
        this.InstallDir = null;

        /**
         * List of software details.
         * @type {Array.<SoftwareDetail> || null}
         */
        this.DetailSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.InstallDir = 'InstallDir' in params ? params.InstallDir : null;

        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new SoftwareDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }

    }
}

/**
 * DescribeFirewallRules response structure.
 * @class
 */
class DescribeFirewallRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible firewall rules.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Firewall rule details list.
         * @type {Array.<FirewallRuleInfo> || null}
         */
        this.FirewallRuleSet = null;

        /**
         * Firewall version number.
         * @type {number || null}
         */
        this.FirewallVersion = null;

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

        if (params.FirewallRuleSet) {
            this.FirewallRuleSet = new Array();
            for (let z in params.FirewallRuleSet) {
                let obj = new FirewallRuleInfo();
                obj.deserialize(params.FirewallRuleSet[z]);
                this.FirewallRuleSet.push(obj);
            }
        }
        this.FirewallVersion = 'FirewallVersion' in params ? params.FirewallVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesReturnable response structure.
 * @class
 */
class DescribeInstancesReturnableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of returnable instance details.
         * @type {Array.<InstanceReturnable> || null}
         */
        this.InstanceReturnableSet = null;

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

        if (params.InstanceReturnableSet) {
            this.InstanceReturnableSet = new Array();
            for (let z in params.InstanceReturnableSet) {
                let obj = new InstanceReturnable();
                obj.deserialize(params.InstanceReturnableSet[z]);
                this.InstanceReturnableSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteBlueprints request structure.
 * @class
 */
class DeleteBlueprintsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID list, which can be obtained from the `BlueprintId` returned by the [DescribeBlueprints](https://intl.cloud.tencent.com/document/product/1207/47689?from_cn_redirect=1) API.
         * @type {Array.<string> || null}
         */
        this.BlueprintIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlueprintIds = 'BlueprintIds' in params ? params.BlueprintIds : null;

    }
}

/**
 * Firewall rule details.
 * @class
 */
class FirewallRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application type. Valid values: custom, HTTP (80), HTTPS (443), Linux login (22), Windows login (3389), MySQL (3306), SQL Server (1433), all TCP ports, all UDP ports, Ping-ICMP, ALL.
         * @type {string || null}
         */
        this.AppType = null;

        /**
         * Protocol. Valid values: TCP, UDP, ICMP, ALL.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Port. Valid values: ALL, one single port, multiple ports separated by commas, or port range indicated by a minus sign
         * @type {string || null}
         */
        this.Port = null;

        /**
         * IP range or IP (mutually exclusive). Default value: 0.0.0.0/0, which indicates all sources.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Valid values: ACCEPT, DROP. Default value: ACCEPT.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Firewall rule description.
         * @type {string || null}
         */
        this.FirewallRuleDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppType = 'AppType' in params ? params.AppType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.FirewallRuleDescription = 'FirewallRuleDescription' in params ? params.FirewallRuleDescription : null;

    }
}

/**
 * CreateFirewallRules response structure.
 * @class
 */
class CreateFirewallRulesResponse extends  AbstractModel {
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
         * List of cloud disk IDs.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Filter list.
disk-id
Filter by **cloud disk ID**.
Type: String
Required: no
instance-id
Filter by **instance ID**.
Type: String
Required: no
disk-name
Filter by **cloud disk name**.
Type: String
Required: no
zone
Filter by **availability zone**.
Type: String
Required: no
disk-usage
Filter by **cloud disk type**.
Type: String
Required: no
disk-state
Filter by **cloud disk status**.
Type: String
Required: no
Each request can contain up to 10 filters, each of which can have 5 values. You cannot specify both `DiskIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The field by which the cloud disks are sorted. Valid values: "CREATED_TIME" (creation time), "EXPIRED_TIME" (expiration time), "DISK_SIZE" (size of cloud disks). Default value: "CREATED_TIME".
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Sorting order of the output cloud disks. Valid values: "ASC" (ascending order), "DESC" (descending order). Default value: "DESC".
         * @type {string || null}
         */
        this.Order = null;

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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;

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
        this.TotalCount = null;

        /**
         * List of instance details.
         * @type {Array.<Instance> || null}
         */
        this.InstanceSet = null;

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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new Instance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZones response structure.
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of AZs
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of AZ details
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneInfoSet = null;

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

        if (params.ZoneInfoSet) {
            this.ZoneInfoSet = new Array();
            for (let z in params.ZoneInfoSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneInfoSet[z]);
                this.ZoneInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBlueprint response structure.
 * @class
 */
class CreateBlueprintResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom image ID.
         * @type {string || null}
         */
        this.BlueprintId = null;

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
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Discount details.
 * @class
 */
class PolicyDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * User discount.
         * @type {number || null}
         */
        this.UserDiscount = null;

        /**
         * Public discount.
         * @type {number || null}
         */
        this.CommonDiscount = null;

        /**
         * Final discount.
         * @type {number || null}
         */
        this.FinalDiscount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserDiscount = 'UserDiscount' in params ? params.UserDiscount : null;
        this.CommonDiscount = 'CommonDiscount' in params ? params.CommonDiscount : null;
        this.FinalDiscount = 'FinalDiscount' in params ? params.FinalDiscount : null;

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
 * DescribeResetInstanceBlueprints request structure.
 * @class
 */
class DescribeResetInstanceBlueprintsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, please see the relevant section in [Overview](https://intl.cloud.tencent.com/document/product/1207/47578?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, please see the relevant section in the API [Overview](https://intl.cloud.tencent.com/document/product/1207/47578?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter list
<li>blueprint-id</li>Filter by **image ID**.
Type: String
Required: no
<li>blueprint-type</li>Filter by **image type**.
Valid values: `APP_OS`: application image; `PURE_OS`: system image; `PRIVATE`: custom image
Type: String
Required: no
<li>platform-type</li>Filter by **image platform type**.
Valid values: `LINUX_UNIX`: Linux or Unix; `WINDOWS`: Windows
Type: String
Required: no
<li>blueprint-name</li>Filter by **image name**.
Type: String
Required: no
<li>blueprint-state</li>Filter by **image status**.
Type: String
Required: no

Each request can contain up to 10 `Filters` and 5 `Filter.Values`. `BlueprintIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<Filter> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * ResetAttachCcn response structure.
 * @class
 */
class ResetAttachCcnResponse extends  AbstractModel {
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
 * ModifyInstancesRenewFlag response structure.
 * @class
 */
class ModifyInstancesRenewFlagResponse extends  AbstractModel {
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
 * ApplyInstanceSnapshot request structure.
 * @class
 */
class ApplyInstanceSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Snapshot ID.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;

    }
}

/**
 * DisassociateInstancesKeyPairs response structure.
 * @class
 */
class DisassociateInstancesKeyPairsResponse extends  AbstractModel {
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
 * TerminateInstances request structure.
 * @class
 */
class TerminateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list, which can be obtained from the `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/1207/47573?from_cn_redirect=1) API.
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
 * Parameter settings for renewing the monthly subscribed cloud disk
 * @class
 */
class RenewDiskChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchase duration.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether Auto-Renewal is enabled 
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Duration unit. Default value: "m" (month).
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Expiration time of the current instance.
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
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.CurInstanceDeadline = 'CurInstanceDeadline' in params ? params.CurInstanceDeadline : null;

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
         * List of cloud disk IDs.
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
 * ResetInstance request structure.
 * @class
 */
class ResetInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, which can be obtained from the `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/1207/47573?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Image ID, which can be obtained from the `BlueprintId` returned by the [DescribeBlueprints](https://intl.cloud.tencent.com/document/product/1207/47689?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.BlueprintId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;

    }
}

/**
 * DescribeDiskConfigs response structure.
 * @class
 */
class DescribeDiskConfigsResponse extends  AbstractModel {
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
 * Public network accessibility of the instance created by the launch configuration, public network usage billing mode of the instance, maximum bandwidth, etc.
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network billing mode. Valid values:
<li>Bill by traffic package: TRAFFIC_POSTPAID_BY_HOUR</li>
<li>Bill by bandwidth: BANDWIDTH_POSTPAID_BY_HOUR</li>
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * Public network outbound bandwidth cap in Mbps.
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * Whether to assign a public IP.
         * @type {boolean || null}
         */
        this.PublicIpAssigned = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.PublicIpAssigned = 'PublicIpAssigned' in params ? params.PublicIpAssigned : null;

    }
}

/**
 * RebootInstances response structure.
 * @class
 */
class RebootInstancesResponse extends  AbstractModel {
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
 * DescribeDisksDeniedActions response structure.
 * @class
 */
class DescribeDisksDeniedActionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of operation limits of cloud disks.
         * @type {Array.<DiskDeniedActions> || null}
         */
        this.DiskDeniedActionSet = null;

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

        if (params.DiskDeniedActionSet) {
            this.DiskDeniedActionSet = new Array();
            for (let z in params.DiskDeniedActionSet) {
                let obj = new DiskDeniedActions();
                obj.deserialize(params.DiskDeniedActionSet[z]);
                this.DiskDeniedActionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceLoginKeyPairAttribute request structure.
 * @class
 */
class DescribeInstanceLoginKeyPairAttributeRequest extends  AbstractModel {
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
 * DescribeBundleDiscount request structure.
 * @class
 */
class DescribeBundleDiscountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Package ID.
         * @type {string || null}
         */
        this.BundleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BundleId = 'BundleId' in params ? params.BundleId : null;

    }
}

/**
 * Price information
 * @class
 */
class Price extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance price.
         * @type {InstancePrice || null}
         */
        this.InstancePrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstancePrice) {
            let obj = new InstancePrice();
            obj.deserialize(params.InstancePrice)
            this.InstancePrice = obj;
        }

    }
}

/**
 * DescribeDisksReturnable response structure.
 * @class
 */
class DescribeDisksReturnableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of returnable cloud disks.
         * @type {Array.<DiskReturnable> || null}
         */
        this.DiskReturnableSet = null;

        /**
         * Number of eligible cloud disks.
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

        if (params.DiskReturnableSet) {
            this.DiskReturnableSet = new Array();
            for (let z in params.DiskReturnableSet) {
                let obj = new DiskReturnable();
                obj.deserialize(params.DiskReturnableSet[z]);
                this.DiskReturnableSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BlueprintPrice	Custom image price parameter.
 * @class
 */
class BlueprintPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original image unit price in USD.
         * @type {number || null}
         */
        this.OriginalBlueprintPrice = null;

        /**
         * Original image total price in USD.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discount.
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * Discounted image total price in USD.
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
        this.OriginalBlueprintPrice = 'OriginalBlueprintPrice' in params ? params.OriginalBlueprintPrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

    }
}

/**
 * General resource quota information.


 * @class
 */
class GeneralResourceQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource name.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Number of available resources.
         * @type {number || null}
         */
        this.ResourceQuotaAvailable = null;

        /**
         * Total number of resources.
         * @type {number || null}
         */
        this.ResourceQuotaTotal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ResourceQuotaAvailable = 'ResourceQuotaAvailable' in params ? params.ResourceQuotaAvailable : null;
        this.ResourceQuotaTotal = 'ResourceQuotaTotal' in params ? params.ResourceQuotaTotal : null;

    }
}

/**
 * DescribeResetInstanceBlueprints response structure.
 * @class
 */
class DescribeResetInstanceBlueprintsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible images.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Image reset information list
         * @type {Array.<ResetInstanceBlueprint> || null}
         */
        this.ResetInstanceBlueprintSet = null;

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

        if (params.ResetInstanceBlueprintSet) {
            this.ResetInstanceBlueprintSet = new Array();
            for (let z in params.ResetInstanceBlueprintSet) {
                let obj = new ResetInstanceBlueprint();
                obj.deserialize(params.ResetInstanceBlueprintSet[z]);
                this.ResetInstanceBlueprintSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDisksReturnable request structure.
 * @class
 */
class DescribeDisksReturnableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of cloud disk IDs.
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
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
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Image software details.
 * @class
 */
class SoftwareDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique detail key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Detail title.
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Detail value.
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
        this.Title = 'Title' in params ? params.Title : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Price information of Lighthouse instances
 * @class
 */
class InstancePrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original package unit price.
         * @type {number || null}
         */
        this.OriginalBundlePrice = null;

        /**
         * Original price.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discount.
         * @type {number || null}
         */
        this.Discount = null;

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
        this.OriginalBundlePrice = 'OriginalBundlePrice' in params ? params.OriginalBundlePrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

    }
}

/**
 * Information on tags
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
 * DescribeGeneralResourceQuotas response structure.
 * @class
 */
class DescribeGeneralResourceQuotasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of general resource quota details.
         * @type {Array.<GeneralResourceQuota> || null}
         */
        this.GeneralResourceQuotaSet = null;

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

        if (params.GeneralResourceQuotaSet) {
            this.GeneralResourceQuotaSet = new Array();
            for (let z in params.GeneralResourceQuotaSet) {
                let obj = new GeneralResourceQuota();
                obj.deserialize(params.GeneralResourceQuotaSet[z]);
                this.GeneralResourceQuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancesRenewFlag request structure.
 * @class
 */
class ModifyInstancesRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. Each request can contain up to 100 instances at a time. You can get an instance ID from the `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/1207/47573?from_cn_redirect=1) API.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Auto-Renewal flag. Valid values: <br><li>NOTIFY_AND_AUTO_RENEW: notify upon expiration and renew automatically <br><li>NOTIFY_AND_MANUAL_RENEW: notify upon expiration but do not renew automatically <br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW: neither notify upon expiration nor renew automatically <br><br>If this parameter is specified as `NOTIFY_AND_AUTO_RENEW`, the instance will be automatically renewed monthly if the account balance is sufficient.
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * StopInstances request structure.
 * @class
 */
class StopInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. Each request can contain up to 100 instances at a time. You can get an instance ID from the `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/1207/47573?from_cn_redirect=1) API.
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
 * DescribeModifyInstanceBundles request structure.
 * @class
 */
class DescribeModifyInstanceBundlesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Filter list.
<li>bundle-id</li>Filter by **package ID**.
Type: String
Required: no
<li>support-platform-type</li>Filter by **system type**.
Valid values: LINUX_UNIX (Linux/Unix), WINDOWS ( Windows)
Type: String
Required: no
Each request can contain up to 10 `Filters` and 5 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, please see the relevant section in [Overview](https://intl.cloud.tencent.com/document/product/1207/47578?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, please see the relevant section in the API [Overview](https://intl.cloud.tencent.com/document/product/1207/47578?from_cn_redirect=1).
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

    }
}

/**
 * ResetInstance response structure.
 * @class
 */
class ResetInstanceResponse extends  AbstractModel {
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
 * DescribeFirewallRules request structure.
 * @class
 */
class DescribeFirewallRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * List of operation limits of disks.
 * @class
 */
class DiskDeniedActions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk ID.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * List of operation limits.
         * @type {Array.<DeniedAction> || null}
         */
        this.DeniedActions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskId = 'DiskId' in params ? params.DiskId : null;

        if (params.DeniedActions) {
            this.DeniedActions = new Array();
            for (let z in params.DeniedActions) {
                let obj = new DeniedAction();
                obj.deserialize(params.DeniedActions[z]);
                this.DeniedActions.push(obj);
            }
        }

    }
}

/**
 * InquirePriceCreateInstances request structure.
 * @class
 */
class InquirePriceCreateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance package ID.
         * @type {string || null}
         */
        this.BundleId = null;

        /**
         * Number of instances to be created. Default value: 1.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Prepaid mode, i.e., monthly subscription. This parameter can specify the purchase period and other attributes such as auto-renewal. It is required for prepaid instances.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * Application image ID, which is required if a paid application image is used and can be obtained from the `BlueprintId` returned by the [DescribeBlueprints](https://intl.cloud.tencent.com/document/product/1207/47689?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.BlueprintId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BundleId = 'BundleId' in params ? params.BundleId : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;

    }
}

/**
 * List of instances associated with the CCN instance.
 * @class
 */
class CcnAttachedInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * CCN instance ID.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * CIDR block of associated instance.
         * @type {Array.<string> || null}
         */
        this.CidrBlock = null;

        /**
         * Associated instance status:

•  PENDING: applying
•  ACTIVE: connected
•  EXPIRED: expired
•  REJECTED: rejected
•  DELETED: deleted
•  FAILED: failed (it will be asynchronously unassociated after 2 hours)
•  ATTACHING: associating
•  DETACHING: unassociating
•  DETACHFAILED: failed to unassociate (it will be asynchronously unassociated after 2 hours)
         * @type {string || null}
         */
        this.State = null;

        /**
         * Association time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttachedTime = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.State = 'State' in params ? params.State : null;
        this.AttachedTime = 'AttachedTime' in params ? params.AttachedTime : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeModifyInstanceBundles response structure.
 * @class
 */
class DescribeModifyInstanceBundlesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of matched instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * New package details
         * @type {Array.<ModifyBundle> || null}
         */
        this.ModifyBundleSet = null;

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

        if (params.ModifyBundleSet) {
            this.ModifyBundleSet = new Array();
            for (let z in params.ModifyBundleSet) {
                let obj = new ModifyBundle();
                obj.deserialize(params.ModifyBundleSet[z]);
                this.ModifyBundleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Attachment information 
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
         * Number of elastic cloud disks attached to the instance
         * @type {number || null}
         */
        this.AttachedDiskCount = null;

        /**
         * Upper limit of attached elastic cloud disks
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
 * ModifyDisksAttribute response structure.
 * @class
 */
class ModifyDisksAttributeResponse extends  AbstractModel {
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
 * CreateInstanceSnapshot request structure.
 * @class
 */
class CreateInstanceSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance for which to create a snapshot.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Snapshot name, which can contain up to 60 characters.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;

    }
}

/**
 * Image instance information.
 * @class
 */
class BlueprintInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image information.
         * @type {Blueprint || null}
         */
        this.Blueprint = null;

        /**
         * Software list.
         * @type {Array.<Software> || null}
         */
        this.SoftwareSet = null;

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

        if (params.Blueprint) {
            let obj = new Blueprint();
            obj.deserialize(params.Blueprint)
            this.Blueprint = obj;
        }

        if (params.SoftwareSet) {
            this.SoftwareSet = new Array();
            for (let z in params.SoftwareSet) {
                let obj = new Software();
                obj.deserialize(params.SoftwareSet[z]);
                this.SoftwareSet.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * InquirePriceCreateDisks response structure.
 * @class
 */
class InquirePriceCreateDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud disk price.
         * @type {DiskPrice || null}
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
            let obj = new DiskPrice();
            obj.deserialize(params.DiskPrice)
            this.DiskPrice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance billing mode
 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subscription period in months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Auto-Renewal flag. Valid values: <br><li>NOTIFY_AND_AUTO_RENEW: notify upon expiration and renew automatically <br><li>NOTIFY_AND_MANUAL_RENEW: notify upon expiration but do not renew automatically. You need to manually renew <br><li>DISABLE_NOTIFY_AND_AUTO_RENEW: neither notify upon expiration nor renew automatically<br><br>Default value: NOTIFY_AND_MANUAL_RENEW. If this parameter is specified as `NOTIFY_AND_AUTO_RENEW`, the instance will be automatically renewed monthly if the account balance is sufficient.
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
 * ModifyInstancesAttribute response structure.
 * @class
 */
class ModifyInstancesAttributeResponse extends  AbstractModel {
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
 * DescribeInstanceLoginKeyPairAttribute response structure.
 * @class
 */
class DescribeInstanceLoginKeyPairAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to allow login with the default key pair. Valid values: YES, NO.
         * @type {string || null}
         */
        this.PermitLogin = null;

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
        this.PermitLogin = 'PermitLogin' in params ? params.PermitLogin : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeInstancesTrafficPackagesRequest: DescribeInstancesTrafficPackagesRequest,
    AssociateInstancesKeyPairsResponse: AssociateInstancesKeyPairsResponse,
    DescribeDisksDeniedActionsRequest: DescribeDisksDeniedActionsRequest,
    DescribeInstancesTrafficPackagesResponse: DescribeInstancesTrafficPackagesResponse,
    DescribeInstancesDeniedActionsRequest: DescribeInstancesDeniedActionsRequest,
    DeleteKeyPairsResponse: DeleteKeyPairsResponse,
    AttachCcnRequest: AttachCcnRequest,
    DescribeSnapshotsDeniedActionsResponse: DescribeSnapshotsDeniedActionsResponse,
    RegionInfo: RegionInfo,
    DescribeBlueprintInstancesResponse: DescribeBlueprintInstancesResponse,
    InstanceDeniedActions: InstanceDeniedActions,
    InquirePriceCreateDisksRequest: InquirePriceCreateDisksRequest,
    ModifyBundle: ModifyBundle,
    DetachCcnResponse: DetachCcnResponse,
    CreateInstanceSnapshotResponse: CreateInstanceSnapshotResponse,
    InquirePriceRenewInstancesResponse: InquirePriceRenewInstancesResponse,
    DeleteFirewallRulesResponse: DeleteFirewallRulesResponse,
    DescribeGeneralResourceQuotasRequest: DescribeGeneralResourceQuotasRequest,
    DeleteKeyPairsRequest: DeleteKeyPairsRequest,
    SystemDisk: SystemDisk,
    ResetInstanceBlueprint: ResetInstanceBlueprint,
    DescribeBundlesResponse: DescribeBundlesResponse,
    InquirePriceRenewInstancesRequest: InquirePriceRenewInstancesRequest,
    DiscountDetail: DiscountDetail,
    DescribeDiskConfigsRequest: DescribeDiskConfigsRequest,
    DescribeRegionsResponse: DescribeRegionsResponse,
    AssociateInstancesKeyPairsRequest: AssociateInstancesKeyPairsRequest,
    AttachCcnResponse: AttachCcnResponse,
    RebootInstancesRequest: RebootInstancesRequest,
    ResetAttachCcnRequest: ResetAttachCcnRequest,
    AttachDisksRequest: AttachDisksRequest,
    ImportKeyPairResponse: ImportKeyPairResponse,
    DescribeSnapshotsRequest: DescribeSnapshotsRequest,
    TerminateDisksResponse: TerminateDisksResponse,
    KeyPair: KeyPair,
    DescribeFirewallRulesTemplateRequest: DescribeFirewallRulesTemplateRequest,
    DescribeKeyPairsResponse: DescribeKeyPairsResponse,
    ModifyBlueprintAttributeRequest: ModifyBlueprintAttributeRequest,
    InquirePriceRenewDisksRequest: InquirePriceRenewDisksRequest,
    Disk: Disk,
    ZoneInfo: ZoneInfo,
    DescribeBlueprintInstancesRequest: DescribeBlueprintInstancesRequest,
    ApplyInstanceSnapshotResponse: ApplyInstanceSnapshotResponse,
    DetachDisksRequest: DetachDisksRequest,
    ModifyFirewallRulesRequest: ModifyFirewallRulesRequest,
    CreateBlueprintRequest: CreateBlueprintRequest,
    DeleteFirewallRulesRequest: DeleteFirewallRulesRequest,
    DescribeInstanceVncUrlRequest: DescribeInstanceVncUrlRequest,
    ModifyFirewallRuleDescriptionRequest: ModifyFirewallRuleDescriptionRequest,
    InstanceTrafficPackage: InstanceTrafficPackage,
    StartInstancesResponse: StartInstancesResponse,
    TerminateInstancesResponse: TerminateInstancesResponse,
    TrafficPackage: TrafficPackage,
    DescribeInstancesDiskNumRequest: DescribeInstancesDiskNumRequest,
    DescribeBlueprintsRequest: DescribeBlueprintsRequest,
    InstanceReturnable: InstanceReturnable,
    DescribeInstancesDeniedActionsResponse: DescribeInstancesDeniedActionsResponse,
    ModifyDisksAttributeRequest: ModifyDisksAttributeRequest,
    ModifyInstancesAttributeRequest: ModifyInstancesAttributeRequest,
    DescribeZonesRequest: DescribeZonesRequest,
    StartInstancesRequest: StartInstancesRequest,
    SnapshotDeniedActions: SnapshotDeniedActions,
    DeleteSnapshotsRequest: DeleteSnapshotsRequest,
    ModifyDisksRenewFlagResponse: ModifyDisksRenewFlagResponse,
    ModifySnapshotAttributeRequest: ModifySnapshotAttributeRequest,
    DescribeDisksResponse: DescribeDisksResponse,
    DescribeBundleDiscountResponse: DescribeBundleDiscountResponse,
    DeleteSnapshotsResponse: DeleteSnapshotsResponse,
    ModifyDisksRenewFlagRequest: ModifyDisksRenewFlagRequest,
    DisassociateInstancesKeyPairsRequest: DisassociateInstancesKeyPairsRequest,
    DataDiskPrice: DataDiskPrice,
    ImportKeyPairRequest: ImportKeyPairRequest,
    DeleteBlueprintsResponse: DeleteBlueprintsResponse,
    ModifyInstancesLoginKeyPairAttributeRequest: ModifyInstancesLoginKeyPairAttributeRequest,
    StopInstancesResponse: StopInstancesResponse,
    FirewallRule: FirewallRule,
    ModifyBlueprintAttributeResponse: ModifyBlueprintAttributeResponse,
    DescribeFirewallRulesTemplateResponse: DescribeFirewallRulesTemplateResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeInstancesDiskNumResponse: DescribeInstancesDiskNumResponse,
    InquirePriceCreateBlueprintResponse: InquirePriceCreateBlueprintResponse,
    DescribeInstancesReturnableRequest: DescribeInstancesReturnableRequest,
    DiskReturnable: DiskReturnable,
    DescribeBlueprintsResponse: DescribeBlueprintsResponse,
    DescribeKeyPairsRequest: DescribeKeyPairsRequest,
    DescribeCcnAttachedInstancesRequest: DescribeCcnAttachedInstancesRequest,
    ResetInstancesPasswordResponse: ResetInstancesPasswordResponse,
    LoginSettings: LoginSettings,
    Instance: Instance,
    CreateKeyPairResponse: CreateKeyPairResponse,
    DescribeInstanceVncUrlResponse: DescribeInstanceVncUrlResponse,
    ModifyFirewallRulesResponse: ModifyFirewallRulesResponse,
    DiskPrice: DiskPrice,
    DescribeCcnAttachedInstancesResponse: DescribeCcnAttachedInstancesResponse,
    DescribeBundlesRequest: DescribeBundlesRequest,
    Blueprint: Blueprint,
    DeniedAction: DeniedAction,
    ModifyInstancesLoginKeyPairAttributeResponse: ModifyInstancesLoginKeyPairAttributeResponse,
    InquirePriceRenewDisksResponse: InquirePriceRenewDisksResponse,
    Bundle: Bundle,
    DiskConfig: DiskConfig,
    InquirePriceCreateInstancesResponse: InquirePriceCreateInstancesResponse,
    DescribeSnapshotsDeniedActionsRequest: DescribeSnapshotsDeniedActionsRequest,
    DescribeDiskDiscountResponse: DescribeDiskDiscountResponse,
    ResetInstancesPasswordRequest: ResetInstancesPasswordRequest,
    DiskChargePrepaid: DiskChargePrepaid,
    CreateKeyPairRequest: CreateKeyPairRequest,
    DescribeInstancesRequest: DescribeInstancesRequest,
    DetachCcnRequest: DetachCcnRequest,
    Filter: Filter,
    DescribeSnapshotsResponse: DescribeSnapshotsResponse,
    Snapshot: Snapshot,
    ModifyFirewallRuleDescriptionResponse: ModifyFirewallRuleDescriptionResponse,
    DescribeDiskDiscountRequest: DescribeDiskDiscountRequest,
    InquirePriceCreateBlueprintRequest: InquirePriceCreateBlueprintRequest,
    AttachDisksResponse: AttachDisksResponse,
    CreateFirewallRulesRequest: CreateFirewallRulesRequest,
    Software: Software,
    DescribeFirewallRulesResponse: DescribeFirewallRulesResponse,
    DescribeInstancesReturnableResponse: DescribeInstancesReturnableResponse,
    DeleteBlueprintsRequest: DeleteBlueprintsRequest,
    FirewallRuleInfo: FirewallRuleInfo,
    CreateFirewallRulesResponse: CreateFirewallRulesResponse,
    DescribeDisksRequest: DescribeDisksRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    CreateBlueprintResponse: CreateBlueprintResponse,
    PolicyDetail: PolicyDetail,
    DetachDisksResponse: DetachDisksResponse,
    DescribeResetInstanceBlueprintsRequest: DescribeResetInstanceBlueprintsRequest,
    ResetAttachCcnResponse: ResetAttachCcnResponse,
    ModifyInstancesRenewFlagResponse: ModifyInstancesRenewFlagResponse,
    ApplyInstanceSnapshotRequest: ApplyInstanceSnapshotRequest,
    DisassociateInstancesKeyPairsResponse: DisassociateInstancesKeyPairsResponse,
    TerminateInstancesRequest: TerminateInstancesRequest,
    RenewDiskChargePrepaid: RenewDiskChargePrepaid,
    TerminateDisksRequest: TerminateDisksRequest,
    ResetInstanceRequest: ResetInstanceRequest,
    DescribeDiskConfigsResponse: DescribeDiskConfigsResponse,
    InternetAccessible: InternetAccessible,
    RebootInstancesResponse: RebootInstancesResponse,
    DescribeDisksDeniedActionsResponse: DescribeDisksDeniedActionsResponse,
    DescribeInstanceLoginKeyPairAttributeRequest: DescribeInstanceLoginKeyPairAttributeRequest,
    DescribeBundleDiscountRequest: DescribeBundleDiscountRequest,
    Price: Price,
    DescribeDisksReturnableResponse: DescribeDisksReturnableResponse,
    BlueprintPrice: BlueprintPrice,
    GeneralResourceQuota: GeneralResourceQuota,
    DescribeResetInstanceBlueprintsResponse: DescribeResetInstanceBlueprintsResponse,
    DescribeDisksReturnableRequest: DescribeDisksReturnableRequest,
    SoftwareDetail: SoftwareDetail,
    InstancePrice: InstancePrice,
    Tag: Tag,
    ModifySnapshotAttributeResponse: ModifySnapshotAttributeResponse,
    DescribeGeneralResourceQuotasResponse: DescribeGeneralResourceQuotasResponse,
    ModifyInstancesRenewFlagRequest: ModifyInstancesRenewFlagRequest,
    StopInstancesRequest: StopInstancesRequest,
    DescribeModifyInstanceBundlesRequest: DescribeModifyInstanceBundlesRequest,
    ResetInstanceResponse: ResetInstanceResponse,
    DescribeFirewallRulesRequest: DescribeFirewallRulesRequest,
    DiskDeniedActions: DiskDeniedActions,
    InquirePriceCreateInstancesRequest: InquirePriceCreateInstancesRequest,
    CcnAttachedInstance: CcnAttachedInstance,
    DescribeModifyInstanceBundlesResponse: DescribeModifyInstanceBundlesResponse,
    AttachDetail: AttachDetail,
    ModifyDisksAttributeResponse: ModifyDisksAttributeResponse,
    CreateInstanceSnapshotRequest: CreateInstanceSnapshotRequest,
    BlueprintInstance: BlueprintInstance,
    InquirePriceCreateDisksResponse: InquirePriceCreateDisksResponse,
    InstanceChargePrepaid: InstanceChargePrepaid,
    ModifyInstancesAttributeResponse: ModifyInstancesAttributeResponse,
    DescribeInstanceLoginKeyPairAttributeResponse: DescribeInstanceLoginKeyPairAttributeResponse,

}
