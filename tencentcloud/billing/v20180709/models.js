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
         * Sub-product name: sub-categories of Tencent Cloud services, such as CVM-Standard S1; if no subproduct name is obtained, '-' is returned.
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
         * 
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * 
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * 
         * @type {number || null}
         */
        this.RegionId = null;

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
         * Payer UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Currently the period to be queried must start from a time point in the current month, and the starting time and the end time must be in the same month. Example: 2018-09-01 00:00:00.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * Currently the period to be queried must end at a time point in the current month, and the starting time and the end time must be in the same month. Example: 2018-09-30 23:59:59.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Cost allocation tag key
         * @type {string || null}
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
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

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
         * 
         * @type {string || null}
         */
        this.ActionType = null;

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
Note: This field may return null, indicating that no valid value was found.
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
         * Component type/code (optional)
         * @type {string || null}
         */
        this.ItemCode = null;

        /**
         * Component name/code (optional)
         * @type {string || null}
         */
        this.ComponentCode = null;

        /**
         * Contract price
         * @type {string || null}
         */
        this.ContractPrice = null;

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
         * Queries bill data user's UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Only beginning in the current month is supported, and it must be the same month as the EndTime. For example, 2018-09-01 00:00:00.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * Only ending in the current month is supported, and it must be the same month as the BeginTime. For example, 2018-09-30 23:59:59.
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
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * Query bill data user's UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Only beginning in the current month is supported, and it must be the same month as the EndTime. For example, 2018-09-01 00:00:00.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * Only ending in the current month is supported, and it must be the same month as the BeginTime. For example, 2018-09-30 23:59:59.
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
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * Queries bill data user's UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Only beginning in the current month is supported, and it must be the same month as the EndTime. For example, 2018-09-01 00:00:00.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * Only ending in the current month is supported, and it must be the same month as the BeginTime. For example, 2018-09-30 23:59:59.
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
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * The period type. byUsedTime: By usage period; byPayTime: by payment period. Must be the same as the period of the current monthly bill of the Billing Center. You can check your bill statistics period type at the top of the [Bill Overview](https://console.cloud.tencent.com/expense/bill/overview) page.
         * @type {string || null}
         */
        this.PeriodType = null;

        /**
         * Month; format: yyyy-mm. This value cannot be earlier than the month when Bill 2.0 is enabled. Last 24 months data are available.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Indicates whether or not the total number of records of accessing the list is required, used for frontend pages.
1 = yes, 0 = no
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * 
         * @type {string || null}
         */
        this.ActionType = null;

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
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

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
         * Queries bill data user's UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Only beginning in the current month is supported, and it must be the same month as the EndTime. For example, 2018-09-01 00:00:00.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * Only ending in the current month is supported, and it must be the same month as the BeginTime. For example, 2018-09-30 23:59:59.
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
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * Product name/code (optional)
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Subproduct name/code (optional)
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Transaction type/code (optional)
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 
         * @type {string || null}
         */
        this.RegionId = null;

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

    }
}

module.exports = {
    DescribeBillSummaryByTagResponse: DescribeBillSummaryByTagResponse,
    DescribeBillSummaryByPayModeResponse: DescribeBillSummaryByPayModeResponse,
    BillResourceSummary: BillResourceSummary,
    DescribeBillSummaryByTagRequest: DescribeBillSummaryByTagRequest,
    DescribeBillSummaryByProductResponse: DescribeBillSummaryByProductResponse,
    BillTagInfo: BillTagInfo,
    DescribeBillSummaryByRegionResponse: DescribeBillSummaryByRegionResponse,
    DescribeBillDetailRequest: DescribeBillDetailRequest,
    RegionSummaryOverviewItem: RegionSummaryOverviewItem,
    BusinessSummaryOverviewItem: BusinessSummaryOverviewItem,
    BillDetailComponent: BillDetailComponent,
    DescribeBillSummaryByRegionRequest: DescribeBillSummaryByRegionRequest,
    DescribeBillSummaryByPayModeRequest: DescribeBillSummaryByPayModeRequest,
    DescribeBillResourceSummaryResponse: DescribeBillResourceSummaryResponse,
    ActionSummaryOverviewItem: ActionSummaryOverviewItem,
    DescribeBillSummaryByProjectRequest: DescribeBillSummaryByProjectRequest,
    DescribeBillResourceSummaryRequest: DescribeBillResourceSummaryRequest,
    DescribeBillSummaryByProductRequest: DescribeBillSummaryByProductRequest,
    BillDetail: BillDetail,
    TagSummaryOverviewItem: TagSummaryOverviewItem,
    ProjectSummaryOverviewItem: ProjectSummaryOverviewItem,
    DescribeBillDetailResponse: DescribeBillDetailResponse,
    DescribeBillSummaryByProjectResponse: DescribeBillSummaryByProjectResponse,
    PayModeSummaryOverviewItem: PayModeSummaryOverviewItem,
    BusinessSummaryTotal: BusinessSummaryTotal,

}
