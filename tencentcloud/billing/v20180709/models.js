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
 * DescribeBillSummaryByTag response structure.
 * @class
 */
class DescribeBillSummaryByTagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether or not the data is ready. `0`: not ready; `1`: ready.
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
 * DescribeBillSummaryByPayMode response structure.
 * @class
 */
class DescribeBillSummaryByPayModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether or not the data is ready. 0 = not ready, 1 = ready.
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
 * Information about resources charged in the bill
 * @class
 */
class BillResourceSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name: major categories of Tencent Cloud services, e.g. CVM and TencentDB for MySQL
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Subproduct name, which is the subcategory of a Tencent Cloud product, such as CVM-Standard S1. If no subproduct name can be obtained, `-` is returned.
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * Billing mode
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Project
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Region
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Availability zone
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource instance namDeduction timee
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Transaction type
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Order ID
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Payment time
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * Service start time
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * Service end time
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * Configuration description
         * @type {string || null}
         */
        this.ConfigDesc = null;

        /**
         * Extension field 1
         * @type {string || null}
         */
        this.ExtendField1 = null;

        /**
         * Extension field 2
         * @type {string || null}
         */
        this.ExtendField2 = null;

        /**
         * Cost, in USD
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Discount
If different discounts or contract prices are applied, `-` will be returned for this parameter.
         * @type {string || null}
         */
        this.Discount = null;

        /**
         * Offer type
         * @type {string || null}
         */
        this.ReduceType = null;

        /**
         * Total cost after discount, in USD
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Amount paid in voucher, in USD
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Amount paid in cash, in USD
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Amount paid in trial credit, in USD
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Extension field 3
         * @type {string || null}
         */
        this.ExtendField3 = null;

        /**
         * Extension field 4
         * @type {string || null}
         */
        this.ExtendField4 = null;

        /**
         * Extension field 5
         * @type {string || null}
         */
        this.ExtendField5 = null;

        /**
         * Tag information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillTagInfo> || null}
         */
        this.Tags = null;

        /**
         * Payer UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Resource owner UIN; '-' is returned if no value is obtained
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Operator UIN; '-' is returned if no value is obtained
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
         * 
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * The special instance (resource pack, reserved instance, savings plan, or spot instance) that is applied to deduction. Valid values:

ri=Standard RI

svp=Savings Plan

si=Spot Instances

rp=Resource Pack
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * The amount deducted by a reserved instance based on the original component cost.
         * @type {string || null}
         */
        this.OriginalCostWithRI = null;

        /**
         * The savings plan deduction amount.
         * @type {string || null}
         */
        this.SPDeduction = null;

        /**
         * The amount deducted by a savings plan based on the original component cost.
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
         * Cost allocation tag key
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
         * Indicates whether or not the data is ready. 0 = not ready, 1 = ready.
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
 * DescribeBillSummaryByRegion response structure.
 * @class
 */
class DescribeBillSummaryByRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether or not the data is ready. 0 = not ready, 1 = ready.
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
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Actual cost
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Cash amount
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Trial credit amount
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

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

        /**
         * Payment by commission credits
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
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;

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
         * The start time of the period; format: Y-m-d H:i:s. You only have to enter either Month or BeginTime and EndTime. When you enter values for BeginTime and EndTime, Month becomes invalid. BeginTime and EndTime must be inputted as a pair. This value must be no earlier than the month when Bill 2.0 is activated; last 24 months data are available.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The end time of the period; format: Y-m-d H:i:s. You only have to enter either Month or BeginTime and EndTime. When you enter values for BeginTime and EndTime, Month becomes invalid. BeginTime and EndTime must be inputted as a pair. This value must be no earlier than the month when Bill 2.0 is activated; last 24 months data are available.
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
 * Summarize product details by product
 * @class
 */
class BusinessSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product code
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Product name: major categories of Tencent Cloud services, e.g. CVM and TencentDB for MySQL
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Actual cost
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Cash amount
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Trial credit amount
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

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

        /**
         * Payment by commission credits
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
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;

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
         * Component type: type of a resource component, e.g. memory, disk, etc.
         * @type {string || null}
         */
        this.ComponentCodeName = null;

        /**
         * Component name: name of a resource component, e.g. TencentDB for MySQL-memory
         * @type {string || null}
         */
        this.ItemCodeName = null;

        /**
         * Component published price: original price of a resource component with the original granularity
         * @type {string || null}
         */
        this.SinglePrice = null;

        /**
         * Specified price of the component
         * @type {string || null}
         */
        this.SpecifiedPrice = null;

        /**
         * Price unit
         * @type {string || null}
         */
        this.PriceUnit = null;

        /**
         * Component usage
         * @type {string || null}
         */
        this.UsedAmount = null;

        /**
         * Component usage unit
         * @type {string || null}
         */
        this.UsedAmountUnit = null;

        /**
         * Usage period
         * @type {string || null}
         */
        this.TimeSpan = null;

        /**
         * Time unit
         * @type {string || null}
         */
        this.TimeUnitName = null;

        /**
         * Original price of the component
         * @type {string || null}
         */
        this.Cost = null;

        /**
         * Discount rate
         * @type {string || null}
         */
        this.Discount = null;

        /**
         * Offer type
         * @type {string || null}
         */
        this.ReduceType = null;

        /**
         * Total discounted price
         * @type {string || null}
         */
        this.RealCost = null;

        /**
         * Amount paid in voucher
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Amount paid in cash
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Amount paid in trial credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Component type code
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ItemCode = null;

        /**
         * Component code
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentCode = null;

        /**
         * Contract price
         * @type {string || null}
         */
        this.ContractPrice = null;

        /**
         * The special instance (resource pack, reserved instance, savings plan, or spot instance) that is applied to deduction. Valid values:
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * The usage duration deducted by a reserved instance. The unit of measurement for deduction is the same as that for usage duration.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.RiTimeSpan = null;

        /**
         * The amount deducted by a reserved instance based on the original component cost.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.OriginalCostWithRI = null;

        /**
         * The discount multiplier that applies to the component based on the remaining commitment of the savings plan.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.SPDeductionRate = null;

        /**
         * The savings plan deduction amount.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.SPDeduction = null;

        /**
         * The amount deducted by a savings plan based on the original component cost.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.OriginalCostWithSP = null;

        /**
         * The blended discount multiplier that combines the official website discount, reserved instance discount, and savings plan discount. If no reserved instance and savings plan discounts are available, the blended discount multiplier equals the discount multiplier.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.BlendedDiscount = null;

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
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnitName = 'TimeUnitName' in params ? params.TimeUnitName : null;
        this.Cost = 'Cost' in params ? params.Cost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.ReduceType = 'ReduceType' in params ? params.ReduceType : null;
        this.RealCost = 'RealCost' in params ? params.RealCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
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
         * Total number of resource summary lists
Note: This field may return null, indicating that no valid value was found.
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
         * Transaction type
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Transaction type name
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Actual cost
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Cash amount
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Trial credit amount
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

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
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

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
         * The start time of the promotional campaign.
         * @type {string || null}
         */
        this.TimeFrom = null;

        /**
         * The end time of the promotional campaign.
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
 * DescribeBillResourceSummary request structure.
 * @class
 */
class DescribeBillResourceSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity, maximum is 1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Month; format: yyyy-mm. This value cannot be earlier than the month when Bill 2.0 is enabled. Last 24 months data are available.
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
 * Total cost
 * @class
 */
class SummaryTotal extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total cost
Note: this field may return `null`, indicating that no valid values can be obtained.
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
 * Bill details
 * @class
 */
class BillDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name: major categories of Tencent Cloud services, e.g. CVM and TencentDB for MySQL
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Sub-product name: sub-categories of Tencent Cloud services, such as CVM-Standard S1
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * Billing mode
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Project: project of a resource
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Region: region of a resource, e.g. South China (Guangzhou)
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Availability zone: availability zone of a resource, e.g. Guangzhou Zone 3
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Transaction type
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Order ID
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Transaction ID
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * Payment time
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * Service start time
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * Service end time
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * Component list
         * @type {Array.<BillDetailComponent> || null}
         */
        this.ComponentSet = null;

        /**
         * Payer's UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * User's UIN
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Operator's UIN
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * Tag information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillTagInfo> || null}
         */
        this.Tags = null;

        /**
         * Product code
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Subproduct code
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Transaction type
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Project ID: ID of the project to which the resource belongs
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
         * Actual cost
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cost percentage rounded to two decimal places
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Payment by cash credits
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Payment by free credits
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Payment by vouchers
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Payment by commission credits
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;

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
         * Project name
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Actual cost
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Cash amount
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Trial credit amount
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

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

        /**
         * Payment by commission credits
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;

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
         * Total number of records
Note: This field may return null, indicating that no valid value was found.
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

        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new BillDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
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
 * DescribeBillSummaryByProject response structure.
 * @class
 */
class DescribeBillSummaryByProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether or not the data is ready. 0 = not ready, 1 = ready.
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
 * Detailed summary of purchases by billing mode
 * @class
 */
class PayModeSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing mode
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Billing mode name
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Actual cost
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Detailed summary of purchases by transaction type
         * @type {Array.<ActionSummaryOverviewItem> || null}
         */
        this.Detail = null;

        /**
         * Cash amount
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Trial credit amount
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Payment by commission credits
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
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new ActionSummaryOverviewItem();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;

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
         * Total cost
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Voucher amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Trial credit amount
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Cash amount
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Payment by commission credits
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
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;

    }
}

module.exports = {
    UsageDetails: UsageDetails,
    DescribeBillSummaryByTagResponse: DescribeBillSummaryByTagResponse,
    DescribeBillSummaryByPayModeResponse: DescribeBillSummaryByPayModeResponse,
    BillResourceSummary: BillResourceSummary,
    DescribeBillSummaryByTagRequest: DescribeBillSummaryByTagRequest,
    DescribeBillSummaryByProductResponse: DescribeBillSummaryByProductResponse,
    BillTagInfo: BillTagInfo,
    DescribeBillSummaryByRegionResponse: DescribeBillSummaryByRegionResponse,
    RegionSummaryOverviewItem: RegionSummaryOverviewItem,
    DescribeBillDetailRequest: DescribeBillDetailRequest,
    DescribeVoucherInfoResponse: DescribeVoucherInfoResponse,
    VoucherInfos: VoucherInfos,
    BusinessSummaryOverviewItem: BusinessSummaryOverviewItem,
    BillDetailComponent: BillDetailComponent,
    DescribeBillSummaryByRegionRequest: DescribeBillSummaryByRegionRequest,
    DescribeBillSummaryByPayModeRequest: DescribeBillSummaryByPayModeRequest,
    UsageRecords: UsageRecords,
    DescribeBillResourceSummaryResponse: DescribeBillResourceSummaryResponse,
    ActionSummaryOverviewItem: ActionSummaryOverviewItem,
    DescribeVoucherInfoRequest: DescribeVoucherInfoRequest,
    ApplicableProducts: ApplicableProducts,
    DescribeBillSummaryByProjectRequest: DescribeBillSummaryByProjectRequest,
    DescribeVoucherUsageDetailsRequest: DescribeVoucherUsageDetailsRequest,
    DescribeBillResourceSummaryRequest: DescribeBillResourceSummaryRequest,
    DescribeBillSummaryByProductRequest: DescribeBillSummaryByProductRequest,
    SummaryTotal: SummaryTotal,
    BillDetail: BillDetail,
    TagSummaryOverviewItem: TagSummaryOverviewItem,
    ProjectSummaryOverviewItem: ProjectSummaryOverviewItem,
    DescribeBillDetailResponse: DescribeBillDetailResponse,
    DescribeVoucherUsageDetailsResponse: DescribeVoucherUsageDetailsResponse,
    DescribeBillSummaryByProjectResponse: DescribeBillSummaryByProjectResponse,
    ExcludedProducts: ExcludedProducts,
    PayModeSummaryOverviewItem: PayModeSummaryOverviewItem,
    BusinessSummaryTotal: BusinessSummaryTotal,

}
