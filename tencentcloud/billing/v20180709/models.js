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
 * Voucher information.
 * @class
 */
class VoucherInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * The owner of the voucher.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * The status of the voucher: `unUsed`, `used`, `delivered`, `cancel`, `overdue`
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The value of the voucher. The value of this parameter is the voucher value (USD, rounded to 8 decimal places) multiplied by 100,000,000.
         * @type {number || null}
         */
        this.NominalValue = null;

        /**
         * The balance left. The value of this parameter is the balance left (USD, rounded to 8 decimal places) multiplied by 100,000,000.
         * @type {number || null}
         */
        this.Balance = null;

        /**
         * The voucher ID.
         * @type {string || null}
         */
        this.VoucherId = null;

        /**
         * `postPay`: pay-as-you-go; `prePay`: prepaid; `riPay`: reserved instance; empty or `*`: all.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * If `PayMode` is `postPay`, this parameter may be `spotpay` (spot instance) or `settle account` (regular pay-as-you-go). If `PayMode` is `prePay`, this parameter may be `purchase`, `renew`, or `modify` (downgrade/upgrade). If `PayMode` is `riPay`, this parameter may be `oneOffFee` (prepayment of reserved instance) or `hourlyFee` (hourly billing of reserved instance). `*` means to query vouchers that support all billing scenarios.
         * @type {string || null}
         */
        this.PayScene = null;

        /**
         * The start time of the validity period.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The end time of the validity period.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The products that are applicable.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {ApplicableProducts || null}
         */
        this.ApplicableProducts = null;

        /**
         * The products that are not applicable.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<ExcludedProducts> || null}
         */
        this.ExcludedProducts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NominalValue = 'NominalValue' in params ? params.NominalValue : null;
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.VoucherId = 'VoucherId' in params ? params.VoucherId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayScene = 'PayScene' in params ? params.PayScene : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.ApplicableProducts) {
            let obj = new ApplicableProducts();
            obj.deserialize(params.ApplicableProducts)
            this.ApplicableProducts = obj;
        }

        if (params.ExcludedProducts) {
            this.ExcludedProducts = new Array();
            for (let z in params.ExcludedProducts) {
                let obj = new ExcludedProducts();
                obj.deserialize(params.ExcludedProducts[z]);
                this.ExcludedProducts.push(obj);
            }
        }

    }
}

/**
 * The product purchased.
 * @class
 */
class UsageDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the product.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 
         * @type {string || null}
         */
        this.SubProductName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.SubProductName = 'SubProductName' in params ? params.SubProductName : null;

    }
}

/**
 * DescribeBillSummaryForOrganization request structure.
 * @class
 */
class DescribeBillSummaryForOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bill month in the format of "yyyy-mm".
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Bill dimension. Valid values: `business`, `project`, `region`, `payMode`, and `tag`.
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * Tag key. Pass in it when `GroupType` is `tag`.
         * @type {Array.<string> || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Month = 'Month' in params ? params.Month : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

    }
}

/**
 * DescribeBillSummaryByTag response structure.
 * @class
 */
class DescribeBillSummaryByTagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. `0`: Not ready. `1`: Ready. If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Details about cost distribution over different tags
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

        /**
         * Total cost
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {SummaryTotal || null}
         */
        this.SummaryTotal = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new TagSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }

        if (params.SummaryTotal) {
            let obj = new SummaryTotal();
            obj.deserialize(params.SummaryTotal)
            this.SummaryTotal = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Bill details configuration descriptions
 * @class
 */
class BillDetailComponentConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration description name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Configuration description value
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DescribeBillSummary response structure.
 * @class
 */
class DescribeBillSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. `0`: Not ready. `1`: Ready. If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Detailed summary of costs by multiple dimensions
         * @type {Array.<SummaryDetail> || null}
         */
        this.SummaryDetail = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryDetail) {
            this.SummaryDetail = new Array();
            for (let z in params.SummaryDetail) {
                let obj = new SummaryDetail();
                obj.deserialize(params.SummaryDetail[z]);
                this.SummaryDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillSummaryByPayMode response structure.
 * @class
 */
class DescribeBillSummaryByPayModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. `0`: Not ready. `1`: Ready. If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Detailed cost distribution for all billing modes
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<PayModeSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new PayModeSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Total cost
 * @class
 */
class SummaryTotal extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total amount after discount. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * Information about resources charged in the bill
 * @class
 */
class BillResourceSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name: The name of a Tencent Cloud product purchased by the user, such as CVM.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Subproduct name: The subcategory of a Tencent Cloud product purchased by the user, such as CVM – Standard S1.
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * Billing mode, which can be monthly subscription or pay-as-you-go.
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Project name: The project to which a resource belongs, which is user-designated. If a resource has not been assigned to a project, it will automatically belong to the default project.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Region: The region to which a resource belongs, such as South China (Guangzhou).
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Availability zone: The availability zone to which a resource belongs, such as Guangzhou Zone 3.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Instance ID: The object ID of a billed resource, such as a CVM instance ID. This object ID may vary due to various forms and contents of resources in different products.	
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Instance name: The resource name set by the user in the console. If it is not set, it will be empty by default.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Transaction type, which can be monthly subscription purchase, monthly subscription renewal, or pay-as-you-go deduction.
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Order ID: The order number for a monthly subscription purchase
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Transaction time: The time at which a payment was deducted
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * Usage start time: The time at which product or service usage starts
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * Usage end time: The time at which product or service usage ends
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * Configuration description: The billable item names and usage of a resource, which are displayed on the resource bill only.
         * @type {string || null}
         */
        this.ConfigDesc = null;

        /**
         * Extended field 1: Extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField1 = null;

        /**
         * Extended field 2: Extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField2 = null;

        /**
         * Original cost: The original cost of a resource, which is "List price x Usage x Usage duration". If a customer has applied for a fixed preferential price or contract price or applied for a refund, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Discount multiplier: The discount multiplier applied to the cost of the resource. If a customer has applied for a fixed preferential price or contract price or applied for a refund, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.Discount = null;

        /**
         * Offer type
         * @type {string || null}
         */
        this.ReduceType = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Extended field 3: Extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField3 = null;

        /**
         * Extended field 4: Extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField4 = null;

        /**
         * Extended field 5: Extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField5 = null;

        /**
         * Tag information. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillTagInfo> || null}
         */
        this.Tags = null;

        /**
         * Payer account ID: The account ID of the payer, which is the unique identifier of a Tencent Cloud user.
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Owner account ID: The account ID of the actual resource user
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Operator account ID: The account or role ID of the operator who purchases or activates a resource.
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * Product code
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Subproduct code
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Instance type: The instance type of a product or service purchased, which can be resource package, RI, SP, or spot instance. Other instance types are not displayed by default.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * RI deduction (cost): The amount deducted from the original cost by RI	
         * @type {string || null}
         */
        this.OriginalCostWithRI = null;

        /**
         * Cost deduction by SP. This parameter has been deprecated.
         * @type {string || null}
         */
        this.SPDeduction = null;

        /**
         * SP deduction (cost): SP deduction (cost) = Cost deduction by SP / SP deduction rate	
         * @type {string || null}
         */
        this.OriginalCostWithSP = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;
        this.ConfigDesc = 'ConfigDesc' in params ? params.ConfigDesc : null;
        this.ExtendField1 = 'ExtendField1' in params ? params.ExtendField1 : null;
        this.ExtendField2 = 'ExtendField2' in params ? params.ExtendField2 : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.ReduceType = 'ReduceType' in params ? params.ReduceType : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.ExtendField3 = 'ExtendField3' in params ? params.ExtendField3 : null;
        this.ExtendField4 = 'ExtendField4' in params ? params.ExtendField4 : null;
        this.ExtendField5 = 'ExtendField5' in params ? params.ExtendField5 : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new BillTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.OriginalCostWithRI = 'OriginalCostWithRI' in params ? params.OriginalCostWithRI : null;
        this.SPDeduction = 'SPDeduction' in params ? params.SPDeduction : null;
        this.OriginalCostWithSP = 'OriginalCostWithSP' in params ? params.OriginalCostWithSP : null;

    }
}

/**
 * DescribeBillSummaryByTag request structure.
 * @class
 */
class DescribeBillSummaryByTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as `EndTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as `BeginTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Cost allocation tag key, which can be customized.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Payer UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Resource tag value
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
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DescribeBillSummaryByProduct response structure.
 * @class
 */
class DescribeBillSummaryByProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. `0`: Not ready. `1`: Ready. If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Total cost details
Note: This field may return null, indicating that no valid value was found.
         * @type {BusinessSummaryTotal || null}
         */
        this.SummaryTotal = null;

        /**
         * Cost distribution of all products
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<BusinessSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryTotal) {
            let obj = new BusinessSummaryTotal();
            obj.deserialize(params.SummaryTotal)
            this.SummaryTotal = obj;
        }

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new BusinessSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Bill tag information.
 * @class
 */
class BillTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cost allocation tag key
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
 * Tag information.
 * @class
 */
class TagDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cost allocation tag key.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag type. Valid values: `0` (general tags), `1` (cost allocation tags).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Time to set the cost allocation tag. It will not be returned if `Status` is `0`.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeBillSummaryByRegion response structure.
 * @class
 */
class DescribeBillSummaryByRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. `0`: Not ready. `1`: Ready. If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Detailed cost distribution for all regions
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<RegionSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new RegionSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAllocationTag response structure.
 * @class
 */
class CreateAllocationTagResponse extends  AbstractModel {
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
 * Detailed summary of purchases by region
 * @class
 */
class RegionSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region: The region to which a resource belongs, such as South China (Guangzhou).
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Billing month, e.g. `2019-08`
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

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
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * DescribeAccountBalance request structure.
 * @class
 */
class DescribeAccountBalanceRequest extends  AbstractModel {
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
 * DescribeBillDetail request structure.
 * @class
 */
class DescribeBillDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity, maximum is 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The period type. byUsedTime: By usage period; byPayTime: By payment period. Must be the same as the period of the current monthly bill of the Billing Center. You can check your bill statistics period type at the top of the [Bill Overview](https://console.cloud.tencent.com/expense/bill/overview) page. 
         * @type {string || null}
         */
        this.PeriodType = null;

        /**
         * Month; format: yyyy-mm. You only have to enter either Month or BeginTime and EndTime. When you enter values for BeginTime and EndTime, Month becomes invalid. This value must be no earlier than the month when Bill 2.0 is activated; last 24 months data are available.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * The start time of the query range, which should be in the format Y-m-d H:i:s . The query range must be in the last 18 months and cannot be earlier than May 2018 (when Bill 2.0 was introduced). The start time and end time must be in the same month.

Example: tccli billing DescribeBillDetail --cli-unfold-argument --Offset 1 --Limit 100 --BeginTime '2023-04-01 12:05:15' --EndTime '2023-04-18 12:00:10' --ProjectId 1000000731  --version "2018-07-09"

Alternatively, you can use Month to query the billing details of a month.
Example:
ccli billing DescribeBillDetail --cli-unfold-argument --Offset 1 --Limit 100 --Month 2023-04  --version "2018-07-09" --ResourceId "disk-oj9okstm"
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The end time of the query range, which should be in the format `Y-m-d H:i:s `. The query range must be in the last 18 months and cannot be earlier than May 2018 (when Bill 2.0 was introduced). The start time and end time must be in the same month.

Example: tccli billing DescribeBillDetail --cli-unfold-argument --Offset 1 --Limit 100 --BeginTime '2023-04-01 12:05:15' --EndTime '2023-04-18 12:00:10' --ProjectId 1000000731  --version "2018-07-09"

Alternatively, you can use `Month` to query the billing details of a month. 
Example:
ccli billing DescribeBillDetail --cli-unfold-argument --Offset 1 --Limit 100 --Month 2023-04  --version "2018-07-09" --ResourceId "disk-oj9okstm"
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Indicates whether or not the total number of records of accessing the list is required, used for frontend pages.
1 = yes, 0 = no
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * Queries information on a specified product
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Billing mode: prePay/postPay
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Queries information on a specified resource
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Action type to query. Valid values:
Purchase
Renewal
Modify
Refund
Deduction
Hourly settlement
Daily settlement
Monthly settlement
Offline project deduction
Offline deduction
adjust-CR
adjust-DR
One-off RI Fee
Spot
Hourly RI fee
New monthly subscription
Monthly subscription renewal
Monthly subscription specification adjustment
Monthly subscription specification adjustment
Monthly subscription refund
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Project ID: ID of the project to which the resource belongs
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Product code
Note: To query the product codes used in the current month, call <a href="https://intl.cloud.tencent.com/document/product/555/35761?from_cn_redirect=1">DescribeBillSummaryByProduct</a>.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Context information returned by the last request. You can set `Month` to `2023-05` or later to accelerate queries. We recommend users whose data volume is over 100 thousand entries use the paginated query feature, which can help greatly speed up your queries.
         * @type {string || null}
         */
        this.Context = null;

        /**
         * The account ID of the payer, which is the unique identifier of a Tencent Cloud user. This account is allowed to query its own bills by default. If an organization admin account needs to query the self-pay bills of members, this field should be specified as the member account ID.
         * @type {string || null}
         */
        this.PayerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;

    }
}

/**
 * DescribeBillResourceSummaryForOrganization request structure.
 * @class
 */
class DescribeBillResourceSummaryForOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination offset. If `Offset` is `0`, it indicates the first page. When `Limit` is `100`, if `Offset` is `100`, it indicates the second page; if `Offset` is `200`, it indicates the third page, and so on.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of entries returned at a time. The maximum value is `1000`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Bill month in the format of "yyyy-mm". This value must be no earlier than the month when Bill 2.0 is activated.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Cycle type, which can be `byUsedTime` (by billing cycle) or `byPayTime` (by deduction time). This value must be the same as the billing period type in Billing Center for that particular month. You can check your billing cycle at the top of the [Bill Overview](https://console.cloud.tencent.com/expense/bill/overview) page.
         * @type {string || null}
         */
        this.PeriodType = null;

        /**
         * Indicates whether the total number of records is required, used for pagination.
Valid values: `1` (required), `0` (not required).
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * Transaction type. This parameter needs to be input using the `ActionTypeName` value. Valid values:
Monthly subscription purchase
Monthly subscription renewal
Monthly subscription upgrade/downgrade
Monthly subscription refund 
Pay-as-you-go deduction 
Offline project deduction 
Offline product deduction 
Adjustment deduction 
Adjustment compensation 
Hourly pay-as-you-go 
Daily pay-as-you-go 
Monthly pay-as-you-go 
Hourly spot instance 
Offline project adjustment compensation 
Offline product adjustment compensation 
Offer deduction 
Offer compensation 
Pay-as-you-go resource migration in 
Pay-as-you-go resource migration out 
Monthly subscription resource migration in 
Monthly subscription resource migration out 
Prepaid 
Hourly 
RI refund 
Pay-as-you-go reversal 
Monthly subscription to pay-as-you-go 
Minimum spend deduction 
Hourly savings plan fee
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * ID of the instance to be queried.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Billing mode. Valid values: `prePay`, `postPay`.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Product code
Note: To query the product codes (`BusinessCode`) used in the current month, call <a href="https://intl.cloud.tencent.com/document/product/555/35761?from_cn_redirect=1">DescribeBillSummaryByProduct</a>.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Cost allocation tag key, which can be customized. This parameter can be used for querying bills after January 2021.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Resource tag value. If it is left empty, there are no records with tag values set under this tag key.
This parameter can be used for querying bills after January 2021.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DescribeVoucherInfo response structure.
 * @class
 */
class DescribeVoucherInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of vouchers.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The total voucher balance. The value of this parameter is the total balance (USD, rounded to 8 decimal places) multiplied by 100,000,000.
         * @type {number || null}
         */
        this.TotalBalance = null;

        /**
         * The voucher information.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<VoucherInfos> || null}
         */
        this.VoucherInfos = null;

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
        this.TotalBalance = 'TotalBalance' in params ? params.TotalBalance : null;

        if (params.VoucherInfos) {
            this.VoucherInfos = new Array();
            for (let z in params.VoucherInfos) {
                let obj = new VoucherInfos();
                obj.deserialize(params.VoucherInfos[z]);
                this.VoucherInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAllocationTag response structure.
 * @class
 */
class DeleteAllocationTagResponse extends  AbstractModel {
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
 * Detailed summary of costs by multiple dimensions
 * @class
 */
class SummaryDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bill dimension code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupKey = null;

        /**
         * Bill dimension value. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupValue = null;

        /**
         * Original cost in USD. This parameter has become valid since Bill 3.0 took effect in May 2021, and before that `-` was returned for this parameter. If a customer has applied for a contract price different from the prices listed on the official website, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Detailed summary of products. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BusinessSummaryInfo> || null}
         */
        this.Business = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupKey = 'GroupKey' in params ? params.GroupKey : null;
        this.GroupValue = 'GroupValue' in params ? params.GroupValue : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;

        if (params.Business) {
            this.Business = new Array();
            for (let z in params.Business) {
                let obj = new BusinessSummaryInfo();
                obj.deserialize(params.Business[z]);
                this.Business.push(obj);
            }
        }

    }
}

/**
 * DescribeAccountBalance response structure.
 * @class
 */
class DescribeAccountBalanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Available account balance in cents, which takes the same calculation rules as `RealBalance`, `CreditBalance`, and `RealCreditBalance`.
         * @type {number || null}
         */
        this.Balance = null;

        /**
         * The UIN to query.
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Available account balance in cents, which takes the same calculation rules as `Balance`, `CreditBalance`, and `RealCreditBalance`.
         * @type {number || null}
         */
        this.RealBalance = null;

        /**
         * Cash account balance in cents. Currently, this field is not applied.
         * @type {number || null}
         */
        this.CashAccountBalance = null;

        /**
         * Income account balance in cents. Currently, this field is not applied.
         * @type {number || null}
         */
        this.IncomeIntoAccountBalance = null;

        /**
         * Present account balance in cents. Currently, this field is not applied.
         * @type {number || null}
         */
        this.PresentAccountBalance = null;

        /**
         * Frozen amount in cents.
         * @type {number || null}
         */
        this.FreezeAmount = null;

        /**
         * Overdue amount in cents, which is when the available credit balance is negative.
         * @type {number || null}
         */
        this.OweAmount = null;

        /**
         * Whether overdue payments are allowed. Currently, this field is not applied.
         * @type {boolean || null}
         */
        this.IsAllowArrears = null;

        /**
         * Whether you have a credit limit. Currently, this field is not applied.
         * @type {boolean || null}
         */
        this.IsCreditLimited = null;

        /**
         * Credit limit in cents. Credit limit－available credit balance = consumption amount
         * @type {number || null}
         */
        this.CreditAmount = null;

        /**
         * Available credit balance in cents, which takes the same calculation rules as `Balance`, `RealBalance`, and `RealCreditBalance`.
         * @type {number || null}
         */
        this.CreditBalance = null;

        /**
         * Available account balance in cents, which takes the same calculation rules as `Balance`, `RealBalance`, and `CreditBalance`.
         * @type {number || null}
         */
        this.RealCreditBalance = null;

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
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RealBalance = 'RealBalance' in params ? params.RealBalance : null;
        this.CashAccountBalance = 'CashAccountBalance' in params ? params.CashAccountBalance : null;
        this.IncomeIntoAccountBalance = 'IncomeIntoAccountBalance' in params ? params.IncomeIntoAccountBalance : null;
        this.PresentAccountBalance = 'PresentAccountBalance' in params ? params.PresentAccountBalance : null;
        this.FreezeAmount = 'FreezeAmount' in params ? params.FreezeAmount : null;
        this.OweAmount = 'OweAmount' in params ? params.OweAmount : null;
        this.IsAllowArrears = 'IsAllowArrears' in params ? params.IsAllowArrears : null;
        this.IsCreditLimited = 'IsCreditLimited' in params ? params.IsCreditLimited : null;
        this.CreditAmount = 'CreditAmount' in params ? params.CreditAmount : null;
        this.CreditBalance = 'CreditBalance' in params ? params.CreditBalance : null;
        this.RealCreditBalance = 'RealCreditBalance' in params ? params.RealCreditBalance : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVoucherInfo request structure.
 * @class
 */
class DescribeVoucherInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of records per page. The default is 20, and the maximum is 1,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page number the records start from. The default is 1.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The voucher status. Valid values: `unUsed`, `used`, `delivered`, `cancel`, `overdue`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The voucher ID.
         * @type {string || null}
         */
        this.VoucherId = null;

        /**
         * The voucher order ID.
         * @type {string || null}
         */
        this.CodeId = null;

        /**
         * The product code.
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * The campaign ID.
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The voucher name.
         * @type {string || null}
         */
        this.VoucherName = null;

        /**
         * The start date of the voucher issuance, such as `2021-01-01`.
         * @type {string || null}
         */
        this.TimeFrom = null;

        /**
         * The end date of the voucher issuance, such as `2021-01-01`.
         * @type {string || null}
         */
        this.TimeTo = null;

        /**
         * The field used to sort the records. Valid values: BeginTime, EndTime, CreateTime.
         * @type {string || null}
         */
        this.SortField = null;

        /**
         * Whether to sort the records in ascending or descending order. Valid values: desc, asc.
         * @type {string || null}
         */
        this.SortOrder = null;

        /**
         * The payment mode. Valid values: `postPay`: pay-as-you-go; `prePay`: prepaid; `riPay`: reserved instance; empty or `*`: all. If this parameter is empty or `*`, `productCode` and `subProductCode` must also be empty.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * If `PayMode` is `postPay`, this parameter may be `spotpay` (spot instance) or `settle account` (regular pay-as-you-go). If `PayMode` is `prePay`, this parameter may be `purchase`, `renew`, or `modify` (downgrade/upgrade). If `PayMode` is `riPay`, this parameter may be `oneOffFee` (prepayment of reserved instance) or `hourlyFee` (hourly billing of reserved instance). `*` means to query vouchers that support all billing scenarios.
         * @type {string || null}
         */
        this.PayScene = null;

        /**
         * The operator. The default is the UIN of the current user.
         * @type {string || null}
         */
        this.Operator = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.VoucherId = 'VoucherId' in params ? params.VoucherId : null;
        this.CodeId = 'CodeId' in params ? params.CodeId : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.VoucherName = 'VoucherName' in params ? params.VoucherName : null;
        this.TimeFrom = 'TimeFrom' in params ? params.TimeFrom : null;
        this.TimeTo = 'TimeTo' in params ? params.TimeTo : null;
        this.SortField = 'SortField' in params ? params.SortField : null;
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayScene = 'PayScene' in params ? params.PayScene : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribeBillDetailForOrganization response structure.
 * @class
 */
class DescribeBillDetailForOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details list.
         * @type {Array.<DistributionBillDetail> || null}
         */
        this.DetailSet = null;

        /**
         * Total number of records, which is cached every 24 hours and may be less than the actual total number of records.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Context information of the current request, which can be used in the parameters of the next request to speed up the query.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Context = null;

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

        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new DistributionBillDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information about components charged in the bill
 * @class
 */
class BillDetailComponent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Component type: The component type of a product or service purchased, such as CVM instance components including CPU and memory.
         * @type {string || null}
         */
        this.ComponentCodeName = null;

        /**
         * Component name: The specific component of a product or service purchased
         * @type {string || null}
         */
        this.ItemCodeName = null;

        /**
         * Component list price: The listed unit price of a component. If a customer has applied for a fixed preferential price or contract price, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.SinglePrice = null;

        /**
         * Specified price of a component. This parameter has been deprecated.
         * @type {string || null}
         */
        this.SpecifiedPrice = null;

        /**
         * Component price measurement unit: The unit of measurement for a component price, which is composed of USD, usage unit, and duration unit.
         * @type {string || null}
         */
        this.PriceUnit = null;

        /**
         * Component usage: The actually settled usage of a component, which is "Raw usage - Deducted usage (including packages)".
         * @type {string || null}
         */
        this.UsedAmount = null;

        /**
         * Component usage unit: The unit of measurement for component usage
         * @type {string || null}
         */
        this.UsedAmountUnit = null;

        /**
         * Raw usage/duration: The raw usage/duration of a component before deduction. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealTotalMeasure = null;

        /**
         * Deducted usage/duration (including packages): The usage/duration deducted with a package. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeductedMeasure = null;

        /**
         * Usage duration: The resource usage duration
         * @type {string || null}
         */
        this.TimeSpan = null;

        /**
         * Duration unit: The unit of measurement for usage duration
         * @type {string || null}
         */
        this.TimeUnitName = null;

        /**
         * Original cost: The original cost of a resource, which is "List price x Usage x Usage duration". If a customer has applied for a fixed preferential price or contract price or is in a refund scenario, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.Cost = null;

        /**
         * Discount multiplier: The discount multiplier applied to the cost of the resource. If a customer has applied for a fixed preferential price or contract price or is in a refund scenario, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.Discount = null;

        /**
         * Offer type
         * @type {string || null}
         */
        this.ReduceType = null;

        /**
         * Total amount after discount: Total amount after discount = (Original cost - RI deduction (cost) - SP deduction (cost)) x Discount multiplier
         * @type {string || null}
         */
        this.RealCost = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Component type code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ItemCode = null;

        /**
         * Component name code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentCode = null;

        /**
         * Component contracted price: The contracted unit price of a component, which is "List price x Discount". Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContractPrice = null;

        /**
         * Instance type: The instance type of a product or service purchased, which can be resource package, RI, SP, or spot instance. Other instance types are not displayed by default. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * RI deduction (duration): The usage duration deducted by RI. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RiTimeSpan = null;

        /**
         * RI deduction (cost): The amount deducted from the original cost by RI. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCostWithRI = null;

        /**
         * Savings plan deduction rate: The discount multiplier that applies to the component based on the remaining commitment of the savings plan. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SPDeductionRate = null;

        /**
         * Cost deduction by SP. This parameter has been deprecated. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SPDeduction = null;

        /**
         * SP deduction (cost): SP deduction (cost) = Cost deduction by SP / SP deduction rate. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCostWithSP = null;

        /**
         * Blended discount multiplier: The final discount multiplier that is applied after combining multiple discount types, which is "Total amount after discount / Original cost". Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BlendedDiscount = null;

        /**
         * Configuration description: The specification configuration of an instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillDetailComponentConfig> || null}
         */
        this.ComponentConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentCodeName = 'ComponentCodeName' in params ? params.ComponentCodeName : null;
        this.ItemCodeName = 'ItemCodeName' in params ? params.ItemCodeName : null;
        this.SinglePrice = 'SinglePrice' in params ? params.SinglePrice : null;
        this.SpecifiedPrice = 'SpecifiedPrice' in params ? params.SpecifiedPrice : null;
        this.PriceUnit = 'PriceUnit' in params ? params.PriceUnit : null;
        this.UsedAmount = 'UsedAmount' in params ? params.UsedAmount : null;
        this.UsedAmountUnit = 'UsedAmountUnit' in params ? params.UsedAmountUnit : null;
        this.RealTotalMeasure = 'RealTotalMeasure' in params ? params.RealTotalMeasure : null;
        this.DeductedMeasure = 'DeductedMeasure' in params ? params.DeductedMeasure : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnitName = 'TimeUnitName' in params ? params.TimeUnitName : null;
        this.Cost = 'Cost' in params ? params.Cost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.ReduceType = 'ReduceType' in params ? params.ReduceType : null;
        this.RealCost = 'RealCost' in params ? params.RealCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.ItemCode = 'ItemCode' in params ? params.ItemCode : null;
        this.ComponentCode = 'ComponentCode' in params ? params.ComponentCode : null;
        this.ContractPrice = 'ContractPrice' in params ? params.ContractPrice : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.RiTimeSpan = 'RiTimeSpan' in params ? params.RiTimeSpan : null;
        this.OriginalCostWithRI = 'OriginalCostWithRI' in params ? params.OriginalCostWithRI : null;
        this.SPDeductionRate = 'SPDeductionRate' in params ? params.SPDeductionRate : null;
        this.SPDeduction = 'SPDeduction' in params ? params.SPDeduction : null;
        this.OriginalCostWithSP = 'OriginalCostWithSP' in params ? params.OriginalCostWithSP : null;
        this.BlendedDiscount = 'BlendedDiscount' in params ? params.BlendedDiscount : null;

        if (params.ComponentConfig) {
            this.ComponentConfig = new Array();
            for (let z in params.ComponentConfig) {
                let obj = new BillDetailComponentConfig();
                obj.deserialize(params.ComponentConfig[z]);
                this.ComponentConfig.push(obj);
            }
        }

    }
}

/**
 * DescribeBillDownloadUrl request structure.
 * @class
 */
class DescribeBillDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bill type. Valid values:
`billOverview` (L0: PDF bills)
`billSummary` (L1: Bill summary)	
`billResource` (L2: Bill by instance)	
`billDetail` (L3: Bill details)	
`billPack` (Bill packs)
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * Bill month.
The earliest month that can be queried is January 2021.
L0 bills and bill packs cannot be downloaded for the current month. Please download the current month's bills after it is generated at 19:00 on the 1st day of the next month.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * List of account IDs for downloading the bill. By default, it queries the bill for the current account. If you are an admin account and need to download bills for member accounts with their own payment, input the member account's UIN for this parameter.
         * @type {Array.<string> || null}
         */
        this.ChildUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.ChildUin = 'ChildUin' in params ? params.ChildUin : null;

    }
}

/**
 * DescribeBillSummaryByPayMode request structure.
 * @class
 */
class DescribeBillSummaryByPayModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as `EndTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as `BeginTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Query bill data user's UIN
         * @type {string || null}
         */
        this.PayerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;

    }
}

/**
 * The usage records.
 * @class
 */
class UsageRecords extends  AbstractModel {
    constructor(){
        super();

        /**
         * The amount used. The value of this parameter is the amount used (USD, rounded to 8 decimal places) multiplied by 100,000,000.
         * @type {number || null}
         */
        this.UsedAmount = null;

        /**
         * The time when the voucher was used.
         * @type {string || null}
         */
        this.UsedTime = null;

        /**
         * The details of the product purchased.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<UsageDetails> || null}
         */
        this.UsageDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsedAmount = 'UsedAmount' in params ? params.UsedAmount : null;
        this.UsedTime = 'UsedTime' in params ? params.UsedTime : null;

        if (params.UsageDetails) {
            this.UsageDetails = new Array();
            for (let z in params.UsageDetails) {
                let obj = new UsageDetails();
                obj.deserialize(params.UsageDetails[z]);
                this.UsageDetails.push(obj);
            }
        }

    }
}

/**
 * DescribeDosageCosDetailByDate response structure.
 * @class
 */
class DescribeDosageCosDetailByDateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of usage
         * @type {Array.<CosDetailSets> || null}
         */
        this.DetailSets = null;

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

        if (params.DetailSets) {
            this.DetailSets = new Array();
            for (let z in params.DetailSets) {
                let obj = new CosDetailSets();
                obj.deserialize(params.DetailSets[z]);
                this.DetailSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillSummary request structure.
 * @class
 */
class DescribeBillSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bill month in the format of "yyyy-mm"
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Bill dimension. Valid values: `business`, `project`, `region`, `payMode`, and `tag`
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * Tag key, which is used when `GroupType` is `tag`.
         * @type {Array.<string> || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Month = 'Month' in params ? params.Month : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

    }
}

/**
 * DescribeBillResourceSummary response structure.
 * @class
 */
class DescribeBillResourceSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource summary list
         * @type {Array.<BillResourceSummary> || null}
         */
        this.ResourceSummarySet = null;

        /**
         * Total number of resource summary lists, which will not be returned when `NeedRecordNum` is `0`. This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.ResourceSummarySet) {
            this.ResourceSummarySet = new Array();
            for (let z in params.ResourceSummarySet) {
                let obj = new BillResourceSummary();
                obj.deserialize(params.ResourceSummarySet[z]);
                this.ResourceSummarySet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Detailed summary of costs by transaction type
 * @class
 */
class ActionSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transaction type code
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Transaction type, which can be monthly subscription purchase, monthly subscription renewal, or pay-as-you-go deduction.
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Billing month, e.g. `2019-08`
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * DescribeBillDetailForOrganization request structure.
 * @class
 */
class DescribeBillDetailForOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination offset. If `Offset` is `0`, it indicates the first page. When `Limit` is `100`, if `Offset` is `100`, it indicates the second page; if `Offset` is `200`, it indicates the third page, and so on.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of entries returned at a time. The maximum value is `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Cycle type, which can be `byUsedTime` (by billing cycle) or `byPayTime` (by deduction time). This value must be the same as the billing period type in Billing Center for that particular month. You can check your billing cycle at the top of the [Bill Overview](https://console.cloud.tencent.com/expense/bill/overview) page.
         * @type {string || null}
         */
        this.PeriodType = null;

        /**
         * Bill month in the format of "yyyy-mm". You only have to enter either `Month` or `BeginTime` and `EndTime`. When you enter values for `BeginTime` and `EndTime`, `Month` becomes invalid. This value must be no earlier than the month when Bill 2.0 is activated; last 18 months data is available.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Start time of the cycle in the format of "yyyy-mm-dd hh:ii:ss". You only have to enter either `Month` or `BeginTime` and `EndTime`. When you enter values for `BeginTime` and `EndTime`, `Month` becomes invalid. `BeginTime` and `EndTime` must be passed together, and their values must be of the same month. Query period must start and end on the same month, andthe query result returned will be of the entire month. This value must be no earlier than the month when Bill 2.0 is activated; last 18 months data is available.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time of the cycle in the format of "yyyy-mm-dd hh:ii:ss". You only have to enter either `Month` or `BeginTime` and `EndTime`. When you enter values for `BeginTime` and `EndTime`, `Month` becomes invalid. `BeginTime` and `EndTime` must be passed together, and their values must be of the same month. Query period must start and end on the same month, andthe query result returned will be of the entire month. This value must be no earlier than the month when Bill 2.0 is activated; last 18 months data is available.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Indicates whether the total number of records is required, used for pagination.
Valid values: `1` (required), `0` (not required).
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * Billing mode, which can be `prePay` (monthly subscription) or `postPay` (pay-as-you-go).
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * ID of the instance to be queried.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Transaction type. This parameter needs to be input using the `ActionTypeName` value. Valid values:
Monthly subscription purchase
Monthly subscription renewal
Monthly subscription upgrade/downgrade
Monthly subscription refund 
Pay-as-you-go deduction 
Offline project deduction 
Offline product deduction 
Adjustment deduction 
Adjustment compensation 
Hourly pay-as-you-go 
Daily pay-as-you-go 
Monthly pay-as-you-go 
Hourly spot instance 
Offline project adjustment compensation 
Offline product adjustment compensation 
Offer deduction 
Offer compensation 
Pay-as-you-go resource migration in 
Pay-as-you-go resource migration out 
Monthly subscription resource migration in 
Monthly subscription resource migration out 
Prepaid 
Hourly 
RI refund 
Pay-as-you-go reversal 
Monthly subscription to pay-as-you-go 
Minimum spend deduction 
Hourly savings plan fee
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Project ID: The ID of the project to which the resource belongs.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Product code.
Note: To query the product codes used in the current month, call <a href="https://intl.cloud.tencent.com/document/product/555/35761?from_cn_redirect=1">DescribeBillSummaryByProduct</a>.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Context information returned by the last response. You can view multiple pages when querying for data after May 2023 to speed up the query. We recommend you use this query method if your data volume is above 100 thousand entries, which can improve query speed by 2-10 times.
         * @type {string || null}
         */
        this.Context = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.Context = 'Context' in params ? params.Context : null;

    }
}

/**
 * The products that are applicable.
 * @class
 */
class ApplicableProducts extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: `all products` or names of the applicable products (string). Multiple names are separated by commas.
         * @type {string || null}
         */
        this.GoodsName = null;

        /**
         * Valid values: `postPay`: pay-as-you-go; `prePay`: prepaid; `riPay`: reserved instance; empty or `*`: all. If `GoodsName` contains multiple product names and `PayMode` is `*`, it indicates that the voucher can be used in all billing modes for each of the products.
         * @type {string || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GoodsName = 'GoodsName' in params ? params.GoodsName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * Objects of reseller bill details
 * @class
 */
class DistributionBillDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name: The name of a Tencent Cloud product purchased by the user, such as CVM.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Subproduct name: The subcategory of a Tencent Cloud product purchased by the user, such as CVM - Standard S1.
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * Billing mode: The billing mode, which can be monthly subscription or pay-as-you-go.
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Project Name: The project to which a resource belongs, which is user-designated. If a resource has not been assigned to a project, it will automatically belong to the default project.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Region: The region of a resource, e.g. South China (Guangzhou).
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Availability zone: availability zone of a resource, e.g. Guangzhou Zone 3.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Instance ID: The object ID of a billed resource, such as a CVM instance ID. This object ID may vary due to various forms and contents of resources in different products.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Instance name: The resource name set by the user in the console. If it is not set, it will be empty by default.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Transaction type, which can be monthly subscription purchase, monthly subscription renewal, pay-as-you-go deduction, etc.
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Order ID: The ID of a monthly subscription order.
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Transaction ID: The ID of a settlement bill.
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * Deduction time: The settlement cost deduction time.
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * Usage start time: The time at which product or service usage starts.
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * Usage end time: The time at which product or service usage ends.
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * List of components.
         * @type {Array.<BillDetailComponent> || null}
         */
        this.ComponentSet = null;

        /**
         * Owner account ID: The account ID of the actual resource user.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Operator account ID: The account or role ID of the operator who purchases or activates a resource.
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * Tag information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillTagInfo> || null}
         */
        this.Tags = null;

        /**
         * Product code.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Subproduct code.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Transaction type code.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Region ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Price attribute: A set of attributes which will determine the price of a component, apart from unit price and usage duration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PriceInfo = null;

        /**
         * Associated transaction document ID: The ID of the document associated with a transaction, such as a write-off order, the original order showing a deduction error during first settlement, a restructured order, or the original purchase order corresponding to a refund order.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {BillDetailAssociatedOrder || null}
         */
        this.AssociatedOrder = null;

        /**
         * Calculation formula: The detailed calculation formula for a specific transaction type, such as refund or configuration change.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Formula = null;

        /**
         * Billing rules: Official website links for detailed billing rules of each product.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FormulaUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;

        if (params.ComponentSet) {
            this.ComponentSet = new Array();
            for (let z in params.ComponentSet) {
                let obj = new BillDetailComponent();
                obj.deserialize(params.ComponentSet[z]);
                this.ComponentSet.push(obj);
            }
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new BillTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PriceInfo = 'PriceInfo' in params ? params.PriceInfo : null;

        if (params.AssociatedOrder) {
            let obj = new BillDetailAssociatedOrder();
            obj.deserialize(params.AssociatedOrder)
            this.AssociatedOrder = obj;
        }
        this.Formula = 'Formula' in params ? params.Formula : null;
        this.FormulaUrl = 'FormulaUrl' in params ? params.FormulaUrl : null;

    }
}

/**
 * DescribeBillSummaryByProject request structure.
 * @class
 */
class DescribeBillSummaryByProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as `EndTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as `BeginTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Queries bill data user's UIN
         * @type {string || null}
         */
        this.PayerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;

    }
}

/**
 * DescribeVoucherUsageDetails request structure.
 * @class
 */
class DescribeVoucherUsageDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of records per page. The default is 20, and the maximum is 1,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page number the records start from. The default is 1.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The voucher ID.
         * @type {string || null}
         */
        this.VoucherId = null;

        /**
         * The operator. The default is the UIN of the current.
         * @type {string || null}
         */
        this.Operator = null;

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
        this.VoucherId = 'VoucherId' in params ? params.VoucherId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribeDosageCosDetailByDate request structure.
 * @class
 */
class DescribeDosageCosDetailByDateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start date of the usage query, such as `2020-09-01`.
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * The end date of the usage query (end date must be in the same month as the start date), such as `2020-09-30`.
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * Bucket name. You can use `Get Service` to query the list of all buckets under a requester account. For details, see [GET Service (List Buckets)](https://www.tencentcloud.com/document/product/436/8291).
         * @type {string || null}
         */
        this.BucketName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.BucketName = 'BucketName' in params ? params.BucketName : null;

    }
}

/**
 * DescribeBillResourceSummary request structure.
 * @class
 */
class DescribeBillResourceSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination offset. If `Offset` is `0`, it indicates the first page. If `Limit` is `100`, "`Offset` = `100`" indicates the second page, then "`Offset` = `200`" indicates the third page, and so on.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity, maximum is 1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Bill month in the format of "yyyy-mm". This value must be no earlier than March 2019, when Bill 2.0 was launched.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * The period type. byUsedTime: By usage period; byPayTime: by payment period. Must be the same as the period of the current monthly bill of the Billing Center. You can check your bill statistics period type at the top of the [Bill Overview](https://console.cloud.tencent.com/expense/bill/overview) page.
         * @type {string || null}
         */
        this.PeriodType = null;

        /**
         * Indicates whether or not the total number of records of accessing the list is required, used for frontend pages.
1 = yes, 0 = no
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * Action type to query. Valid values:
Purchase
Renewal
Modify
Refund
Deduction
Hourly settlement
Daily settlement
Monthly settlement
Offline project deduction
Offline deduction
adjust-CR
adjust-DR
One-off RI Fee
Spot
Hourly RI fee
New monthly subscription
Monthly subscription renewal
Monthly subscription specification adjustment
Monthly subscription refund
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * ID of the instance to be queried
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Billing mode. Valid values: `prePay` (prepaid), `postPay` (postpaid)
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Product code
Note: To query the product codes used in the current month, call <a href="https://intl.cloud.tencent.com/document/product/555/35761?from_cn_redirect=1">DescribeBillSummaryByProduct</a>.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * The account ID of the payer, which is the unique identifier of a Tencent Cloud user. This account is allowed to query its own bills by default. If an organization admin account needs to query the self-pay bills of members, this field should be specified as the member account ID.
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Cost allocation tag key, which can be customized. This parameter can be used for querying bills after January 2021.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Resource tag value. If it is left empty, there are no records with tag values set under this tag key.
This parameter can be used for querying bills after January 2021.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DeleteAllocationTag request structure.
 * @class
 */
class DeleteAllocationTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cost allocation tag key
         * @type {Array.<string> || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

    }
}

/**
 * Summarize product details by product
 * @class
 */
class BusinessSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Product name: The name of a Tencent Cloud product purchased by the user, such as CVM.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Billing month, e.g. `2019-08`
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * DescribeBillSummaryByProduct request structure.
 * @class
 */
class DescribeBillSummaryByProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as `EndTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as `BeginTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Queries bill data user's UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * A bill type, which corresponds to a subtotal type of L0 bills.
This parameter has become valid since v3.0 bills took effect in May 2021.
Valid values:
`consume`: consumption
`refund`: refund
`adjustment`: bill adjustment
         * @type {string || null}
         */
        this.PayType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.PayType = 'PayType' in params ? params.PayType : null;

    }
}

/**
 * Summary objects for a reseller bill
 * @class
 */
class BillDistributionResourceSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name: The name of a Tencent Cloud product purchased by the user, such as CVM.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Subproduct name: The subcategory of a Tencent Cloud product purchased by the user, such as CVM - Standard S1.
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * Billing mode: The billing mode, which can be monthly subscription or pay-as-you-go.
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Project Name: The project to which a resource belongs, which is user-designated. If a resource has not been assigned to a project, it will automatically belong to the default project.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Region: The region of a resource, e.g. South China (Guangzhou).
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Availability zone: The availability zone of a resource, e.g. Guangzhou Zone 3.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Instance ID: The object ID of a billed resource, such as a CVM instance ID. This object ID may vary due to various forms and contents of resources in different products.	
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Instance name: The resource name set by the user in the console. If it is not set, it will be empty by default.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Transaction type, which can be monthly subscription purchase, monthly subscription renewal, pay-as-you-go deduction, etc.
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Order ID: The ID of a monthly subscription order.
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Deduction time: The settlement cost deduction time.
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * Usage start time: The time at which product or service usage starts.
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * Usage end time: The time at which product or service usage ends.
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * Configuration description: The billable item names and usage of a resource, which are displayed on the resource bill only.
         * @type {string || null}
         */
        this.ConfigDesc = null;

        /**
         * Extended Field 1: The extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField1 = null;

        /**
         * Extended field 2: The extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField2 = null;

        /**
         * Original cost. The original cost of a component = Component price x Usage x Usage duration. If a customer has applied for a fixed preferential price or contract price or if a customer is in a refund scenario, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Discount multiplier: The discount multiplier that applies to the component. If a customer has applied for a fixed preferential price or contract price or if a customer is in a refund scenario, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.Discount = null;

        /**
         * Offer type.
         * @type {string || null}
         */
        this.ReduceType = null;

        /**
         * Total amount after discount.
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Voucher payment: The voucher deduction amount.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Cash credit payment: The amount paid through the user's cash account.
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit payment: The amount paid with the user's free credit.
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Commission credit payment: The amount paid with the user's commission credit.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Extended field 3: The extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField3 = null;

        /**
         * Extended field 4: The extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField4 = null;

        /**
         * Extended field 5: The extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField5 = null;

        /**
         * Tag information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillTagInfo> || null}
         */
        this.Tags = null;

        /**
         * Owner account ID: The account ID of the actual resource user.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Operator account ID: The account or role ID of the operator who purchases or activates a resource.
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * Product code.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Subproduct code.
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Region ID.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Instance type: The instance type of a product or service purchased, which can be resource package, RI, SP, or spot instance. Other instance types are not displayed by default.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * RI deduction (cost): The amount deducted from the original cost by RI.	
         * @type {string || null}
         */
        this.OriginalCostWithRI = null;

        /**
         * Savings plan deduction (disused).
         * @type {string || null}
         */
        this.SPDeduction = null;

        /**
         * SP deduction (cost): The amount of cost deducted by a savings plan based on the component's original cost. SP deduction (cost) = Cost deduction by SP / SP deduction rate	
         * @type {string || null}
         */
        this.OriginalCostWithSP = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;
        this.ConfigDesc = 'ConfigDesc' in params ? params.ConfigDesc : null;
        this.ExtendField1 = 'ExtendField1' in params ? params.ExtendField1 : null;
        this.ExtendField2 = 'ExtendField2' in params ? params.ExtendField2 : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.ReduceType = 'ReduceType' in params ? params.ReduceType : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.ExtendField3 = 'ExtendField3' in params ? params.ExtendField3 : null;
        this.ExtendField4 = 'ExtendField4' in params ? params.ExtendField4 : null;
        this.ExtendField5 = 'ExtendField5' in params ? params.ExtendField5 : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new BillTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.OriginalCostWithRI = 'OriginalCostWithRI' in params ? params.OriginalCostWithRI : null;
        this.SPDeduction = 'SPDeduction' in params ? params.SPDeduction : null;
        this.OriginalCostWithSP = 'OriginalCostWithSP' in params ? params.OriginalCostWithSP : null;

    }
}

/**
 * Information of the document associated with bill details
 * @class
 */
class BillDetailAssociatedOrder extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchase order.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrepayPurchase = null;

        /**
         * Renewal order.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrepayRenew = null;

        /**
         * Upgrade order.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrepayModifyUp = null;

        /**
         * Write-off order.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReverseOrder = null;

        /**
         * The order after discount.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewOrder = null;

        /**
         * The original order before discount.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Original = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrepayPurchase = 'PrepayPurchase' in params ? params.PrepayPurchase : null;
        this.PrepayRenew = 'PrepayRenew' in params ? params.PrepayRenew : null;
        this.PrepayModifyUp = 'PrepayModifyUp' in params ? params.PrepayModifyUp : null;
        this.ReverseOrder = 'ReverseOrder' in params ? params.ReverseOrder : null;
        this.NewOrder = 'NewOrder' in params ? params.NewOrder : null;
        this.Original = 'Original' in params ? params.Original : null;

    }
}

/**
 * Bill details
 * @class
 */
class BillDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name: The name of a Tencent Cloud product purchased by the user, such as CVM.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Subproduct name: The subcategory of a Tencent Cloud product purchased by the user, such as CVM – Standard S1.
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * Billing mode, which can be monthly subscription or pay-as-you-go.
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Project name: The project to which a resource belongs, which is user-designated. If a resource has not been assigned to a project, it will automatically belong to the default project.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Region: The region to which a resource belongs, such as South China (Guangzhou).
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Availability zone: availability zone of a resource, e.g. Guangzhou Zone 3
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Instance ID: The object ID of a billed resource, such as a CVM instance ID. This object ID may vary due to various forms and contents of resources in different products.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Instance name: The resource name set by the user in the console. If it is not set, it will be empty by default.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Transaction type, which can be monthly subscription purchase, monthly subscription renewal, or pay-as-you-go deduction.
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Order ID: The order number for a monthly subscription purchase
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Transaction ID: The bill number for a deducted payment
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * Transaction time: The time at which a payment was deducted
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * Usage start time: The time at which product or service usage starts
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * Usage end time: The time at which product or service usage ends
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * Component list
         * @type {Array.<BillDetailComponent> || null}
         */
        this.ComponentSet = null;

        /**
         * Payer account ID: The account ID of the payer, which is the unique identifier of a Tencent Cloud user.
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Owner account ID: The account ID of the actual resource user
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Operator account ID: The account or role ID of the operator who purchases or activates a resource
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * Tag information. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillTagInfo> || null}
         */
        this.Tags = null;

        /**
         * Product code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Subproduct code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Transaction type code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Region ID. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Price attribute: A set of attributes which will determine the price of a component, apart from unit price and usage duration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PriceInfo = null;

        /**
         * Associated transaction document ID: The ID of the document associated with a transaction, such as a write-off order, the original order showing a deduction error during first settlement, a restructured order, or the original purchase order corresponding to a refund order.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {BillDetailAssociatedOrder || null}
         */
        this.AssociatedOrder = null;

        /**
         * Calculation formula: The detailed calculation formula for a specific transaction type, such as refund or configuration change.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Formula = null;

        /**
         * Billing rules: Official website links for detailed billing rules of each product.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FormulaUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;

        if (params.ComponentSet) {
            this.ComponentSet = new Array();
            for (let z in params.ComponentSet) {
                let obj = new BillDetailComponent();
                obj.deserialize(params.ComponentSet[z]);
                this.ComponentSet.push(obj);
            }
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new BillTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PriceInfo = 'PriceInfo' in params ? params.PriceInfo : null;

        if (params.AssociatedOrder) {
            let obj = new BillDetailAssociatedOrder();
            obj.deserialize(params.AssociatedOrder)
            this.AssociatedOrder = obj;
        }
        this.Formula = 'Formula' in params ? params.Formula : null;
        this.FormulaUrl = 'FormulaUrl' in params ? params.FormulaUrl : null;

    }
}

/**
 * Detailed summary of products
 * @class
 */
class BusinessSummaryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product code
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Product name: The name of a Tencent Cloud product purchased by the user, such as CVM.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Original cost in USD. This parameter became valid when Bill 3.0 took effect in May 2021. Before that, `-` was returned for this parameter. If a customer has applied for a contract price different from the prices listed on the official website, `-` will also be returned for this parameter. 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;

    }
}

/**
 * Details about cost distribution over different tags.
 * @class
 */
class TagSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag value
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * Cost percentage rounded to two decimal places
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Total amount after discount. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The amount deducted by using vouchers. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * Detailed summary of purchases by project
 * @class
 */
class ProjectSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Project name: The project to which a resource belongs, which is user-designated. If a resource has not been assigned to a project, it will automatically belong to the default project.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Billing month, e.g. `2019-08`
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * DescribeBillDetail response structure.
 * @class
 */
class DescribeBillDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details list
         * @type {Array.<BillDetail> || null}
         */
        this.DetailSet = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Context information returned by this request. The value can be passed in as the value of parameters in the next request to accelerate queries. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Context = null;

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

        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new BillDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillSummaryForOrganization response structure.
 * @class
 */
class DescribeBillSummaryForOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. Valid values: `0` (not ready), `1` (ready). If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Bills summarized by multiple dimensions.
         * @type {Array.<SummaryDetail> || null}
         */
        this.SummaryDetail = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryDetail) {
            this.SummaryDetail = new Array();
            for (let z in params.SummaryDetail) {
                let obj = new SummaryDetail();
                obj.deserialize(params.SummaryDetail[z]);
                this.SummaryDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVoucherUsageDetails response structure.
 * @class
 */
class DescribeVoucherUsageDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of vouchers.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The total amount used. The value of this parameter is the total amount used (USD, rounded to 8 decimal places) multiplied by 100,000,000.
         * @type {number || null}
         */
        this.TotalUsedAmount = null;

        /**
         * The usage details.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<UsageRecords> || null}
         */
        this.UsageRecords = null;

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
        this.TotalUsedAmount = 'TotalUsedAmount' in params ? params.TotalUsedAmount : null;

        if (params.UsageRecords) {
            this.UsageRecords = new Array();
            for (let z in params.UsageRecords) {
                let obj = new UsageRecords();
                obj.deserialize(params.UsageRecords[z]);
                this.UsageRecords.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillSummaryByRegion request structure.
 * @class
 */
class DescribeBillSummaryByRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as `EndTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as `BeginTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Queries bill data user's UIN
         * @type {string || null}
         */
        this.PayerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;

    }
}

/**
 * DescribeTagList response structure.
 * @class
 */
class DescribeTagListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records.
         * @type {number || null}
         */
        this.RecordNum = null;

        /**
         * Tag information.
         * @type {Array.<TagDataInfo> || null}
         */
        this.Data = null;

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
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TagDataInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information about the data structure of the returned COS usage details
 * @class
 */
class CosDetailSets extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bucket name
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * The start time of the usage
         * @type {string || null}
         */
        this.DosageBeginTime = null;

        /**
         * The end time of the usage
         * @type {string || null}
         */
        this.DosageEndTime = null;

        /**
         * Subproduct name
         * @type {string || null}
         */
        this.SubProductCodeName = null;

        /**
         * Billable item name
         * @type {string || null}
         */
        this.BillingItemCodeName = null;

        /**
         * Usage
         * @type {string || null}
         */
        this.DosageValue = null;

        /**
         * Unit of the billable item
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
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.DosageBeginTime = 'DosageBeginTime' in params ? params.DosageBeginTime : null;
        this.DosageEndTime = 'DosageEndTime' in params ? params.DosageEndTime : null;
        this.SubProductCodeName = 'SubProductCodeName' in params ? params.SubProductCodeName : null;
        this.BillingItemCodeName = 'BillingItemCodeName' in params ? params.BillingItemCodeName : null;
        this.DosageValue = 'DosageValue' in params ? params.DosageValue : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * DescribeTagList request structure.
 * @class
 */
class DescribeTagListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of entries returned at a time. The maximum value is `1000`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset. If `Offset` is `0`, it indicates the first page. When `Limit` is `100`, if `Offset` is `100`, it indicates the second page; if `Offset` is `200`, it indicates the third page, and so on.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Cost allocation tag key, used for fuzzy search.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag type, used for tag filtering. Valid values: `0` (general tags), `1` (cost allocation tags). If it is not specified, all tag keys will be queried.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Sorting order. Valid values: `asc` (ascending order), `desc` (descending order).
         * @type {string || null}
         */
        this.OrderType = null;

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
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;

    }
}

/**
 * DescribeBillSummaryByProject response structure.
 * @class
 */
class DescribeBillSummaryByProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. `0`: Not ready. `1`: Ready. If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Detailed cost distribution for all projects
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<ProjectSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new ProjectSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillDownloadUrl response structure.
 * @class
 */
class DescribeBillDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the bill file is ready. Valid values: `0` (the file is being generated), `1` (the file has been generated).
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Bill download URL, valid for one hour.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DownloadUrl = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillResourceSummaryForOrganization response structure.
 * @class
 */
class DescribeBillResourceSummaryForOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource summary list.
         * @type {Array.<BillDistributionResourceSummary> || null}
         */
        this.ResourceSummarySet = null;

        /**
         * Total number of resource summary lists. It will not be returned if `NeedRecordNum` is `0`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.ResourceSummarySet) {
            this.ResourceSummarySet = new Array();
            for (let z in params.ResourceSummarySet) {
                let obj = new BillDistributionResourceSummary();
                obj.deserialize(params.ResourceSummarySet[z]);
                this.ResourceSummarySet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAllocationTag request structure.
 * @class
 */
class CreateAllocationTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cost allocation tag key.
         * @type {Array.<string> || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

    }
}

/**
 * The products that are not applicable.
 * @class
 */
class ExcludedProducts extends  AbstractModel {
    constructor(){
        super();

        /**
         * The names of non-applicable products.
         * @type {string || null}
         */
        this.GoodsName = null;

        /**
         * `postPay`: pay-as-you-go; `prePay`: prepaid; `riPay`: reserved instance; empty or `*`: all.
         * @type {string || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GoodsName = 'GoodsName' in params ? params.GoodsName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * Detailed summary of costs by billing mode
 * @class
 */
class PayModeSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing mode code
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Billing mode, which can be monthly subscription or pay-as-you-go.
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash balance
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Detailed summary of costs by transaction type
         * @type {Array.<ActionSummaryOverviewItem> || null}
         */
        this.Detail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new ActionSummaryOverviewItem();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }

    }
}

/**
 * Summarize total cost by product
 * @class
 */
class BusinessSummaryTotal extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total amount after discount

         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

module.exports = {
    VoucherInfos: VoucherInfos,
    UsageDetails: UsageDetails,
    DescribeBillSummaryForOrganizationRequest: DescribeBillSummaryForOrganizationRequest,
    DescribeBillSummaryByTagResponse: DescribeBillSummaryByTagResponse,
    BillDetailComponentConfig: BillDetailComponentConfig,
    DescribeBillSummaryResponse: DescribeBillSummaryResponse,
    DescribeBillSummaryByPayModeResponse: DescribeBillSummaryByPayModeResponse,
    SummaryTotal: SummaryTotal,
    BillResourceSummary: BillResourceSummary,
    DescribeBillSummaryByTagRequest: DescribeBillSummaryByTagRequest,
    DescribeBillSummaryByProductResponse: DescribeBillSummaryByProductResponse,
    BillTagInfo: BillTagInfo,
    TagDataInfo: TagDataInfo,
    DescribeBillSummaryByRegionResponse: DescribeBillSummaryByRegionResponse,
    CreateAllocationTagResponse: CreateAllocationTagResponse,
    RegionSummaryOverviewItem: RegionSummaryOverviewItem,
    DescribeAccountBalanceRequest: DescribeAccountBalanceRequest,
    DescribeBillDetailRequest: DescribeBillDetailRequest,
    DescribeBillResourceSummaryForOrganizationRequest: DescribeBillResourceSummaryForOrganizationRequest,
    DescribeVoucherInfoResponse: DescribeVoucherInfoResponse,
    DeleteAllocationTagResponse: DeleteAllocationTagResponse,
    SummaryDetail: SummaryDetail,
    DescribeAccountBalanceResponse: DescribeAccountBalanceResponse,
    DescribeVoucherInfoRequest: DescribeVoucherInfoRequest,
    DescribeBillDetailForOrganizationResponse: DescribeBillDetailForOrganizationResponse,
    BillDetailComponent: BillDetailComponent,
    DescribeBillDownloadUrlRequest: DescribeBillDownloadUrlRequest,
    DescribeBillSummaryByPayModeRequest: DescribeBillSummaryByPayModeRequest,
    UsageRecords: UsageRecords,
    DescribeDosageCosDetailByDateResponse: DescribeDosageCosDetailByDateResponse,
    DescribeBillSummaryRequest: DescribeBillSummaryRequest,
    DescribeBillResourceSummaryResponse: DescribeBillResourceSummaryResponse,
    ActionSummaryOverviewItem: ActionSummaryOverviewItem,
    DescribeBillDetailForOrganizationRequest: DescribeBillDetailForOrganizationRequest,
    ApplicableProducts: ApplicableProducts,
    DistributionBillDetail: DistributionBillDetail,
    DescribeBillSummaryByProjectRequest: DescribeBillSummaryByProjectRequest,
    DescribeVoucherUsageDetailsRequest: DescribeVoucherUsageDetailsRequest,
    DescribeDosageCosDetailByDateRequest: DescribeDosageCosDetailByDateRequest,
    DescribeBillResourceSummaryRequest: DescribeBillResourceSummaryRequest,
    DeleteAllocationTagRequest: DeleteAllocationTagRequest,
    BusinessSummaryOverviewItem: BusinessSummaryOverviewItem,
    DescribeBillSummaryByProductRequest: DescribeBillSummaryByProductRequest,
    BillDistributionResourceSummary: BillDistributionResourceSummary,
    BillDetailAssociatedOrder: BillDetailAssociatedOrder,
    BillDetail: BillDetail,
    BusinessSummaryInfo: BusinessSummaryInfo,
    TagSummaryOverviewItem: TagSummaryOverviewItem,
    ProjectSummaryOverviewItem: ProjectSummaryOverviewItem,
    DescribeBillDetailResponse: DescribeBillDetailResponse,
    DescribeBillSummaryForOrganizationResponse: DescribeBillSummaryForOrganizationResponse,
    DescribeVoucherUsageDetailsResponse: DescribeVoucherUsageDetailsResponse,
    DescribeBillSummaryByRegionRequest: DescribeBillSummaryByRegionRequest,
    DescribeTagListResponse: DescribeTagListResponse,
    CosDetailSets: CosDetailSets,
    DescribeTagListRequest: DescribeTagListRequest,
    DescribeBillSummaryByProjectResponse: DescribeBillSummaryByProjectResponse,
    DescribeBillDownloadUrlResponse: DescribeBillDownloadUrlResponse,
    DescribeBillResourceSummaryForOrganizationResponse: DescribeBillResourceSummaryForOrganizationResponse,
    CreateAllocationTagRequest: CreateAllocationTagRequest,
    ExcludedProducts: ExcludedProducts,
    PayModeSummaryOverviewItem: PayModeSummaryOverviewItem,
    BusinessSummaryTotal: BusinessSummaryTotal,

}
