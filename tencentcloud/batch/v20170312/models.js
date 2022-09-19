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
 * Describes local disk specifications.
 * @class
 */
class LocalDiskType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of a local disk.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Attributes of a local disk.
         * @type {string || null}
         */
        this.PartitionType = null;

        /**
         * Minimum size of a local disk.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * Maximum size of a local disk.
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * Whether a local disk is required during purchase. Valid values:<br><li>REQUIRED: required<br><li>OPTIONAL: optional
         * @type {string || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.PartitionType = 'PartitionType' in params ? params.PartitionType : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.Required = 'Required' in params ? params.Required : null;

    }
}

/**
 * DescribeCvmZoneInstanceConfigInfos response structure.
 * @class
 */
class DescribeCvmZoneInstanceConfigInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of model configurations in the availability zone.
         * @type {Array.<InstanceTypeQuotaItem> || null}
         */
        this.InstanceTypeQuotaSet = null;

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

        if (params.InstanceTypeQuotaSet) {
            this.InstanceTypeQuotaSet = new Array();
            for (let z in params.InstanceTypeQuotaSet) {
                let obj = new InstanceTypeQuotaItem();
                obj.deserialize(params.InstanceTypeQuotaSet[z]);
                this.InstanceTypeQuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAvailableCvmInstanceTypes request structure.
 * @class
 */
class DescribeAvailableCvmInstanceTypesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter.
<li> zone - String - Required: No - (Filter) Filter by availability zone.</li>
<li> instance-family - String - Required: No - (Filter) Filter by model family such as S1, I1, and M1.</li>
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
 * DescribeInstanceCategories request structure.
 * @class
 */
class DescribeInstanceCategoriesRequest extends  AbstractModel {
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
 * Information of InstanceTypeConfig available to BatchCompute
 * @class
 */
class InstanceTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Memory size in GB.
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * Number of CPU cores.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Instance model.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Availability zone.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance model family.
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
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;

    }
}

/**
 * DescribeCvmZoneInstanceConfigInfos request structure.
 * @class
 */
class DescribeCvmZoneInstanceConfigInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter.
<li> zone - String - Required: No - (Filter) Filter by availability zone.</li>
<li> instance-family - String - Required: No - (Filter) Filter by model family such as S1, I1, and M1.</li>
<li> instance-type - String - Required: No - (Filter) Filter by model.</li>
<li> instance-charge-type - String - Required: No - (Filter) Filter by instance billing method. ( POSTPAID_BY_HOUR: pay-as-you-go | SPOTPAID: bidding.)  </li>
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
 * Additional data
 * @class
 */
class Externals extends  AbstractModel {
    constructor(){
        super();

        /**
         * Release address
Note: This field may return null, indicating that no valid value is found.
         * @type {boolean || null}
         */
        this.ReleaseAddress = null;

        /**
         * Not supported network. Value: <br><li>BASIC: classic network<br><li>VPC1.0: VPC1.0
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.UnsupportNetworks = null;

        /**
         * Attributes of local HDD storage
Note: This field may return null, indicating that no valid value is found.
         * @type {StorageBlock || null}
         */
        this.StorageBlockAttr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReleaseAddress = 'ReleaseAddress' in params ? params.ReleaseAddress : null;
        this.UnsupportNetworks = 'UnsupportNetworks' in params ? params.UnsupportNetworks : null;

        if (params.StorageBlockAttr) {
            let obj = new StorageBlock();
            obj.deserialize(params.StorageBlockAttr)
            this.StorageBlockAttr = obj;
        }

    }
}

/**
 * Information on local HDD storage.
 * @class
 */
class StorageBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * Local HDD storage type. Value: LOCAL_PRO.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Minimum capacity of local HDD storage
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * Maximum capacity of local HDD storage
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * > Key-value pair filters used for conditional queries, such as filtering results by ID, name, and state.
> * If there are multiple `Filter` parameters, they are evaluated using the logical `AND` operator.
> * If a `Filter` contains multiple `Values`, they are evaluated using the logical `OR` operator.
>
> Take [DescribeInstances](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) as an example. You can use the following filters to query the instances in availability zone (`zone`) Guangzhou Zone 1 ***and*** whose billing plan (`instance-charge-type`) is pay-as-you-go:
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=POSTPAID_BY_HOUR
```
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter values.
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
 * DescribeInstanceCategories response structure.
 * @class
 */
class DescribeInstanceCategoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of CVM instance categories
         * @type {Array.<InstanceCategoryItem> || null}
         */
        this.InstanceCategorySet = null;

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

        if (params.InstanceCategorySet) {
            this.InstanceCategorySet = new Array();
            for (let z in params.InstanceCategorySet) {
                let obj = new InstanceCategoryItem();
                obj.deserialize(params.InstanceCategorySet[z]);
                this.InstanceCategorySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes instance model quota.
 * @class
 */
class InstanceTypeQuotaItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Availability zone.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance model.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Instance billing plan. Valid values: <br><li>POSTPAID_BY_HOUR: pay after use. You are billed for your traffic by the hour.<br><li>`CDHPAID`: [`CDH`](https://intl.cloud.tencent.com/document/product/416?from_cn_redirect=1) billing plan. Applicable to `CDH` only, not the instances on the host.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * ENI type. For example, 25 represents an ENI of 25 GB.
         * @type {number || null}
         */
        this.NetworkCard = null;

        /**
         * Additional data.
Note: This field may return null, indicating that no valid value is found.
         * @type {Externals || null}
         */
        this.Externals = null;

        /**
         * Number of CPU cores of an instance model.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Instance memory capacity; unit: `GB`.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance model family.
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * Model name.
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * List of local disk specifications. If the parameter returns null, it means that local disks cannot be created.
         * @type {Array.<LocalDiskType> || null}
         */
        this.LocalDiskTypeList = null;

        /**
         * Whether an instance model is available. Valid values: <br><li>SELL: available <br><li>SOLD_OUT: sold out
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Price of an instance model.
         * @type {ItemPrice || null}
         */
        this.Price = null;

        /**
         * Details of out-of-stock items
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.SoldOutReason = null;

        /**
         * Private network bandwidth, in Gbps.
         * @type {number || null}
         */
        this.InstanceBandwidth = null;

        /**
         * The max packet sending and receiving capability (in 10k PPS).
         * @type {number || null}
         */
        this.InstancePps = null;

        /**
         * Number of local storage blocks.
         * @type {number || null}
         */
        this.StorageBlockAmount = null;

        /**
         * CPU type.
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * Number of GPUs of the instance.
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * Number of FPGAs of the instance.
         * @type {number || null}
         */
        this.Fpga = null;

        /**
         * Descriptive information of the instance.
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.NetworkCard = 'NetworkCard' in params ? params.NetworkCard : null;

        if (params.Externals) {
            let obj = new Externals();
            obj.deserialize(params.Externals)
            this.Externals = obj;
        }
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;

        if (params.LocalDiskTypeList) {
            this.LocalDiskTypeList = new Array();
            for (let z in params.LocalDiskTypeList) {
                let obj = new LocalDiskType();
                obj.deserialize(params.LocalDiskTypeList[z]);
                this.LocalDiskTypeList.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Price) {
            let obj = new ItemPrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.SoldOutReason = 'SoldOutReason' in params ? params.SoldOutReason : null;
        this.InstanceBandwidth = 'InstanceBandwidth' in params ? params.InstanceBandwidth : null;
        this.InstancePps = 'InstancePps' in params ? params.InstancePps : null;
        this.StorageBlockAmount = 'StorageBlockAmount' in params ? params.StorageBlockAmount : null;
        this.CpuType = 'CpuType' in params ? params.CpuType : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.Fpga = 'Fpga' in params ? params.Fpga : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeAvailableCvmInstanceTypes response structure.
 * @class
 */
class DescribeAvailableCvmInstanceTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of model configurations
         * @type {Array.<InstanceTypeConfig> || null}
         */
        this.InstanceTypeConfigSet = null;

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

        if (params.InstanceTypeConfigSet) {
            this.InstanceTypeConfigSet = new Array();
            for (let z in params.InstanceTypeConfigSet) {
                let obj = new InstanceTypeConfig();
                obj.deserialize(params.InstanceTypeConfigSet[z]);
                this.InstanceTypeConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * List of instance categories
 * @class
 */
class InstanceCategoryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance type name
         * @type {string || null}
         */
        this.InstanceCategory = null;

        /**
         * List of instance families
         * @type {Array.<string> || null}
         */
        this.InstanceFamilySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceCategory = 'InstanceCategory' in params ? params.InstanceCategory : null;
        this.InstanceFamilySet = 'InstanceFamilySet' in params ? params.InstanceFamilySet : null;

    }
}

/**
 * Describes pricing information.
 * @class
 */
class ItemPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * The original unit price for pay-as-you-go mode in USD. <br><li>When a billing tier is returned, it indicates the price fo the returned billing tier. For example, if `UnitPriceSecondStep` is returned, it refers to the unit price for the usage between 0 to 96 hours. Otherwise, it refers to that the unit price for unlimited usage.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * Billing unit for pay-as-you-go mode. Valid values: <br><li>HOUR: billed on an hourly basis. It's used for hourly postpaid instances (`POSTPAID_BY_HOUR`). <br><li>GB: bill by traffic in GB. It's used for postpaid products that are billed by the hourly traffic (`TRAFFIC_POSTPAID_BY_HOUR`).
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ChargeUnit = null;

        /**
         * The original price of a pay-in-advance instance, in USD.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discount price of a prepaid instance, in USD.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * Percentage of the original price. For example, if you enter "20.0", the discounted price will be 20% of the original price.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * The discounted unit price for pay-as-you-go mode in USD. <br><li>When a billing tier is returned, it indicates the price fo the returned billing tier. For example, if `UnitPriceSecondStep` is returned, it refers to the unit price for the usage between 0 to 96 hours. Otherwise, it refers to that the unit price for unlimited usage.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscount = null;

        /**
         * Original unit price for the usage between 96 to 360 hours in USD. It's applicable to pay-as-you-go mode.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceSecondStep = null;

        /**
         * Discounted unit price for the usage between 96 to 360 hours in USD. It's applicable to pay-as-you-go mode.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscountSecondStep = null;

        /**
         * Original unit price for the usage after 360 hours in USD. It's applicable to pay-as-you-go mode.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceThirdStep = null;

        /**
         * Discounted unit price for the usage after 360 hours in USD. It's applicable to pay-as-you-go mode.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscountThirdStep = null;

        /**
         * Original 3-year payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OriginalPriceThreeYear = null;

        /**
         * Discounted 3-year upfront payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountPriceThreeYear = null;

        /**
         * Discount for 3-year upfront payment. For example, 20.0 indicates 80% off.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountThreeYear = null;

        /**
         * Original 5-year payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OriginalPriceFiveYear = null;

        /**
         * Discounted 5-year upfront payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountPriceFiveYear = null;

        /**
         * Discount for 5-year upfront payment. For example, 20.0 indicates 80% off.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountFiveYear = null;

        /**
         * Original 1-year payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OriginalPriceOneYear = null;

        /**
         * Discounted 1-year payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountPriceOneYear = null;

        /**
         * Discount for 1-year upfront payment. For example, 20.0 indicates 80% off.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountOneYear = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.ChargeUnit = 'ChargeUnit' in params ? params.ChargeUnit : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.UnitPriceDiscount = 'UnitPriceDiscount' in params ? params.UnitPriceDiscount : null;
        this.UnitPriceSecondStep = 'UnitPriceSecondStep' in params ? params.UnitPriceSecondStep : null;
        this.UnitPriceDiscountSecondStep = 'UnitPriceDiscountSecondStep' in params ? params.UnitPriceDiscountSecondStep : null;
        this.UnitPriceThirdStep = 'UnitPriceThirdStep' in params ? params.UnitPriceThirdStep : null;
        this.UnitPriceDiscountThirdStep = 'UnitPriceDiscountThirdStep' in params ? params.UnitPriceDiscountThirdStep : null;
        this.OriginalPriceThreeYear = 'OriginalPriceThreeYear' in params ? params.OriginalPriceThreeYear : null;
        this.DiscountPriceThreeYear = 'DiscountPriceThreeYear' in params ? params.DiscountPriceThreeYear : null;
        this.DiscountThreeYear = 'DiscountThreeYear' in params ? params.DiscountThreeYear : null;
        this.OriginalPriceFiveYear = 'OriginalPriceFiveYear' in params ? params.OriginalPriceFiveYear : null;
        this.DiscountPriceFiveYear = 'DiscountPriceFiveYear' in params ? params.DiscountPriceFiveYear : null;
        this.DiscountFiveYear = 'DiscountFiveYear' in params ? params.DiscountFiveYear : null;
        this.OriginalPriceOneYear = 'OriginalPriceOneYear' in params ? params.OriginalPriceOneYear : null;
        this.DiscountPriceOneYear = 'DiscountPriceOneYear' in params ? params.DiscountPriceOneYear : null;
        this.DiscountOneYear = 'DiscountOneYear' in params ? params.DiscountOneYear : null;

    }
}

module.exports = {
    LocalDiskType: LocalDiskType,
    DescribeCvmZoneInstanceConfigInfosResponse: DescribeCvmZoneInstanceConfigInfosResponse,
    DescribeAvailableCvmInstanceTypesRequest: DescribeAvailableCvmInstanceTypesRequest,
    DescribeInstanceCategoriesRequest: DescribeInstanceCategoriesRequest,
    InstanceTypeConfig: InstanceTypeConfig,
    DescribeCvmZoneInstanceConfigInfosRequest: DescribeCvmZoneInstanceConfigInfosRequest,
    Externals: Externals,
    StorageBlock: StorageBlock,
    Filter: Filter,
    DescribeInstanceCategoriesResponse: DescribeInstanceCategoriesResponse,
    InstanceTypeQuotaItem: InstanceTypeQuotaItem,
    DescribeAvailableCvmInstanceTypesResponse: DescribeAvailableCvmInstanceTypesResponse,
    InstanceCategoryItem: InstanceCategoryItem,
    ItemPrice: ItemPrice,

}
