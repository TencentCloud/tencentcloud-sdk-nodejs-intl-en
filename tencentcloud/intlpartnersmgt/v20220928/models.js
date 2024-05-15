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
 * QueryDirectCustomersCredit response structure.
 * @class
 */
class QueryDirectCustomersCreditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Direct customer information list
         * @type {Array.<QueryDirectCustomersCreditData> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new QueryDirectCustomersCreditData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Detailed summary by billing dimension
 * @class
 */
class SummaryDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product information list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BusinessInfo> || null}
         */
        this.Business = null;

        /**
         * Original price
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * Voucher amount
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Daily deduction
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RICost = null;

        /**
         * Total amount
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Summary key by classification dimension Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupKey = null;

        /**
         *  Summary value by classification dimension
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Business) {
            this.Business = new Array();
            for (let z in params.Business) {
                let obj = new BusinessInfo();
                obj.deserialize(params.Business[z]);
                this.Business.push(obj);
            }
        }
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.RICost = 'RICost' in params ? params.RICost : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.GroupKey = 'GroupKey' in params ? params.GroupKey : null;
        this.GroupValue = 'GroupValue' in params ? params.GroupValue : null;

    }
}

/**
 * QueryPartnerCredit response structure.
 * @class
 */
class QueryPartnerCreditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Allocated credit
         * @type {number || null}
         */
        this.AllocatedCredit = null;

        /**
         * Total credit
         * @type {number || null}
         */
        this.TotalCredit = null;

        /**
         * Remaining credit
         * @type {number || null}
         */
        this.RemainingCredit = null;

        /**
         * Allocated quota for the client
         * @type {number || null}
         */
        this.CustomerTotalCredit = null;

        /**
         * Remaining quota for the client
         * @type {number || null}
         */
        this.CustomerRemainingCredit = null;

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
        this.AllocatedCredit = 'AllocatedCredit' in params ? params.AllocatedCredit : null;
        this.TotalCredit = 'TotalCredit' in params ? params.TotalCredit : null;
        this.RemainingCredit = 'RemainingCredit' in params ? params.RemainingCredit : null;
        this.CustomerTotalCredit = 'CustomerTotalCredit' in params ? params.CustomerTotalCredit : null;
        this.CustomerRemainingCredit = 'CustomerRemainingCredit' in params ? params.CustomerRemainingCredit : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryVoucherListByUin request structure.
 * @class
 */
class QueryVoucherListByUinRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer UIN list. Array length value: 1-20.
         * @type {Array.<number> || null}
         */
        this.ClientUins = null;

        /**
         * Voucher status. If this parameter is not passed in, all status will be queried by default. Valid values: `Unused`, `Used`, `Expired`.
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
        this.ClientUins = 'ClientUins' in params ? params.ClientUins : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * QueryVoucherAmountByUin request structure.
 * @class
 */
class QueryVoucherAmountByUinRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer UIN list. Array length value: 1-20.
         * @type {Array.<number> || null}
         */
        this.ClientUins = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientUins = 'ClientUins' in params ? params.ClientUins : null;

    }
}

/**
 * QueryVoucherAmountByUin response structure.
 * @class
 */
class QueryVoucherAmountByUinResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer voucher quota information
         * @type {Array.<QueryVoucherAmountByUinItem> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new QueryVoucherAmountByUinItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Customer voucher quota
 * @class
 */
class QueryVoucherAmountByUinItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer UIN
         * @type {number || null}
         */
        this.ClientUin = null;

        /**
         * Voucher quota
         * @type {number || null}
         */
        this.TotalAmount = null;

        /**
         * Voucher amount
         * @type {number || null}
         */
        this.RemainAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.TotalAmount = 'TotalAmount' in params ? params.TotalAmount : null;
        this.RemainAmount = 'RemainAmount' in params ? params.RemainAmount : null;

    }
}

/**
 * Returned information for querying the customer credit allocation records
 * @class
 */
class QueryCreditAllocationHistoryData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Allocation time
         * @type {string || null}
         */
        this.AllocatedTime = null;

        /**
         * Operator
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Allocated credit value
         * @type {number || null}
         */
        this.Credit = null;

        /**
         * The allocated total credit
         * @type {number || null}
         */
        this.AllocatedCredit = null;

        /**
         * Available credits after allocation
Note: The return value may be null, indicating that no valid data can be obtained.
         * @type {number || null}
         */
        this.ClientCreditAfter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllocatedTime = 'AllocatedTime' in params ? params.AllocatedTime : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Credit = 'Credit' in params ? params.Credit : null;
        this.AllocatedCredit = 'AllocatedCredit' in params ? params.AllocatedCredit : null;
        this.ClientCreditAfter = 'ClientCreditAfter' in params ? params.ClientCreditAfter : null;

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
         * Detailed summary by billing dimensionNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SummaryDetails> || null}
         */
        this.SummaryDetail = null;

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

        if (params.SummaryDetail) {
            this.SummaryDetail = new Array();
            for (let z in params.SummaryDetail) {
                let obj = new SummaryDetails();
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
         * Payment mode details in the customer bill data totaled by payment mode
Note: This field may return null, indicating that no valid values can be obtained.
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
 * QueryCreditQuota response structure.
 * @class
 */
class QueryCreditQuotaResponse extends  AbstractModel {
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
 * Product information
 * @class
 */
class BusinessInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ProductNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Product codeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Original price
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * Voucher amount
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Daily deduction
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RICost = null;

        /**
         * Total amount
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.RICost = 'RICost' in params ? params.RICost : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * Voucher information of a single customer
 * @class
 */
class QueryVoucherListByUinItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer UIN
         * @type {number || null}
         */
        this.ClientUin = null;

        /**
         * The total number of vouchers
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Voucher details
         * @type {Array.<QueryVoucherListByUinVoucherItem> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new QueryVoucherListByUinVoucherItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

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
         * Bill details from the product dimension
Note: This field may return null, indicating that no valid values can be obtained.
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
 * QueryPartnerCredit request structure.
 * @class
 */
class QueryPartnerCreditRequest extends  AbstractModel {
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
 * AllocateCustomerCredit request structure.
 * @class
 */
class AllocateCustomerCreditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specific value of the credit allocated to the customer
         * @type {number || null}
         */
        this.AddedCredit = null;

        /**
         * Customer UIN
         * @type {number || null}
         */
        this.ClientUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddedCredit = 'AddedCredit' in params ? params.AddedCredit : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;

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
         * Region details in the customer bill data totaled by region
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DescribeCustomerBillSummary response structure.
 * @class
 */
class DescribeCustomerBillSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total amount
         * @type {number || null}
         */
        this.TotalCost = null;

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
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryCustomersCredit request structure.
 * @class
 */
class QueryCustomersCreditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Search condition type. You can only search by customer ID, name, remarks, or email.
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * Search condition
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * A pagination parameter that specifies the current page number, with a value starting from 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * A pagination parameter that specifies the number of entries per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * A sort parameter that specifies the sort order. Valid values: `desc` (descending order), or `asc` (ascending order) based on `AssociationTime`. The value will be `desc` if left empty.
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
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Order = 'Order' in params ? params.Order : null;

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
         * The queried month in the format of “YYYY-MM”, such as 2023-01.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Page parameter: Indicates the number of entries per page. Value range: [1, 200]
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page parameter: Indicates the current page number. The minimum value is 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Billing mode. Valid values: `prePay` (Monthly subscription), postPay` (Pay-As-You-Go resources).
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Transaction type. Valid values: `prepay_purchase` (Purchase), `prepay_renew` (Renewal), `prepay_modify` (Upgrade/Downgrade), `prepay_return` ( Monthly subscription refund), `postpay_deduct` (Pay-as-you-go), `postpay_deduct_h` (Hourly settlement), `postpay_deduct_d` (Daily settlement), `postpay_deduct_m` (Monthly settlement), `offline_deduct` (Offline project deduction), `online_deduct` (Offline product deduction), `recon_deduct` (Adjustment - deduction), `recon_increase` (Adjustment - compensation), `ripay_purchase` (One-off RI Fee), `postpay_deduct_s` (Spot), `ri_hour_pay` (Hourly RI fee), `prePurchase` (New monthly subscription), `preRenew` (Monthly subscription renewal), `preUpgrade` (Upgrade/Downgrade), `preDowngrade` (Upgrade/Downgrade), `svp_hour_pay` (Hourly Savings Plan fee), `recon_guarantee` (Minimum spend deduction), `pre_purchase` (New monthly subscription), `pre_renew` (Monthly subscription renewal), `pre_upgrade` (Upgrade/Downgrade), `pre_downgrade` (Upgrade/Downgrade).
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
        this.Month = 'Month' in params ? params.Month : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * QueryCreditByUinList request structure.
 * @class
 */
class QueryCreditByUinListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of user. Array length value: 1-50.
         * @type {Array.<number> || null}
         */
        this.UinList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UinList = 'UinList' in params ? params.UinList : null;

    }
}

/**
 * CreateAccount response structure.
 * @class
 */
class CreateAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account UIN
         * @type {string || null}
         */
        this.Uin = null;

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
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryAccountVerificationStatus response structure.
 * @class
 */
class QueryAccountVerificationStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account verification status
         * @type {boolean || null}
         */
        this.AccountStatus = null;

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
        this.AccountStatus = 'AccountStatus' in params ? params.AccountStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Region details in the customer bill data totaled by region
 * @class
 */
class RegionSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * The actual total consumption amount accurate down to eight decimal places
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * The deducted voucher amount accurate down to eight decimal places
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Total consumption amount accurate down to eight decimal places
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * Customer bill details
 * @class
 */
class CustomerBillDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Reseller account
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PayerAccountId = null;

        /**
         * Customer account
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OwnerAccountId = null;

        /**
         * Operator account
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OperatorAccountId = null;

        /**
         * Product name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Billing mode
`Monthly subscription` (Monthly subscription)
`Pay-As-You-Go resources` (Pay-as-you-go)
`Standard RI` (Reserved instance)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BillingMode = null;

        /**
         * Project name

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Resource region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Resource AZ
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AvailabilityZone = null;

        /**
         * Instance ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Subproduct name

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubProductName = null;

        /**
         * Settlement type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransactionType = null;

        /**
         * Transaction ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * Settlement time

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransactionTime = null;

        /**
         * Start time of resource use
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsageStartTime = null;

        /**
         * End time of resource use
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsageEndTime = null;

        /**
         * Component
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentType = null;

        /**
         * Component name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * Component list price
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentListPrice = null;

        /**
         * Price unit
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentPriceMeasurementUnit = null;

        /**
         * Component usage
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentUsage = null;

        /**
         * Component usage unit
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentUsageUnit = null;

        /**
         * Resource usage duration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsageDuration = null;

        /**
         * Duration unit
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DurationUnit = null;

        /**
         * Original cost
Original cost = component list price * component usage * usage duration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * Currency
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Total cost = discounted total - voucher deduction
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * ID
Note: The return value may be null, indicating that no valid data can be obtained.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Tag informationNote: This field may return null, indicating that no valid values can be obtained.
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
        this.PayerAccountId = 'PayerAccountId' in params ? params.PayerAccountId : null;
        this.OwnerAccountId = 'OwnerAccountId' in params ? params.OwnerAccountId : null;
        this.OperatorAccountId = 'OperatorAccountId' in params ? params.OperatorAccountId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.AvailabilityZone = 'AvailabilityZone' in params ? params.AvailabilityZone : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.SubProductName = 'SubProductName' in params ? params.SubProductName : null;
        this.TransactionType = 'TransactionType' in params ? params.TransactionType : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.TransactionTime = 'TransactionTime' in params ? params.TransactionTime : null;
        this.UsageStartTime = 'UsageStartTime' in params ? params.UsageStartTime : null;
        this.UsageEndTime = 'UsageEndTime' in params ? params.UsageEndTime : null;
        this.ComponentType = 'ComponentType' in params ? params.ComponentType : null;
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.ComponentListPrice = 'ComponentListPrice' in params ? params.ComponentListPrice : null;
        this.ComponentPriceMeasurementUnit = 'ComponentPriceMeasurementUnit' in params ? params.ComponentPriceMeasurementUnit : null;
        this.ComponentUsage = 'ComponentUsage' in params ? params.ComponentUsage : null;
        this.ComponentUsageUnit = 'ComponentUsageUnit' in params ? params.ComponentUsageUnit : null;
        this.UsageDuration = 'UsageDuration' in params ? params.UsageDuration : null;
        this.DurationUnit = 'DurationUnit' in params ? params.DurationUnit : null;
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.Id = 'Id' in params ? params.Id : null;

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
 * GetCountryCodes response structure.
 * @class
 */
class GetCountryCodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of country/region codes
         * @type {Array.<CountryCodeItem> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CountryCodeItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryCreditByUinList response structure.
 * @class
 */
class QueryCreditByUinListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User information list
         * @type {Array.<QueryDirectCustomersCreditData> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new QueryDirectCustomersCreditData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomerInfo response structure.
 * @class
 */
class DescribeCustomerInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer information Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DescribeCustomerInfoData> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DescribeCustomerInfoData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Product details in the customer bill data totaled by product
 * @class
 */
class BusinessSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Product name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * List price accurate down to eight decimal places
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * The deducted voucher amount accurate down to eight decimal places
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Consumption amount accurate down to eight decimal places
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * List of customer UINs
 * @class
 */
class DescribeCustomerUinData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer UIN Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerUin = 'CustomerUin' in params ? params.CustomerUin : null;

    }
}

/**
 * DescribeCustomerUin response structure.
 * @class
 */
class DescribeCustomerUinResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of customer UINs Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DescribeCustomerUinData> || null}
         */
        this.Data = null;

        /**
         * The number of customers
         * @type {string || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DescribeCustomerUinData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
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
         * Bill month in the format of "yyyy-MM"
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * Customer UIN
         * @type {number || null}
         */
        this.CustomerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.CustomerUin = 'CustomerUin' in params ? params.CustomerUin : null;

    }
}

/**
 * QueryVoucherPool response structure.
 * @class
 */
class QueryVoucherPoolResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Reseller name
         * @type {string || null}
         */
        this.AgentName = null;

        /**
         * Reseller role type (1: Reseller; 2: Distributor; 3: Second-level reseller)
         * @type {number || null}
         */
        this.AccountType = null;

        /**
         * Total quota
         * @type {number || null}
         */
        this.TotalQuota = null;

        /**
         * Remaining quota
         * @type {number || null}
         */
        this.RemainingQuota = null;

        /**
         * The number of issued vouchers
         * @type {number || null}
         */
        this.IssuedNum = null;

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
        this.AgentName = 'AgentName' in params ? params.AgentName : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.TotalQuota = 'TotalQuota' in params ? params.TotalQuota : null;
        this.RemainingQuota = 'RemainingQuota' in params ? params.RemainingQuota : null;
        this.IssuedNum = 'IssuedNum' in params ? params.IssuedNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cost Allocation Tags
 * @class
 */
class TagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag keyNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag valueNote: This field may return null, indicating that no valid values can be obtained.
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
 * DescribeCustomerBillDetail request structure.
 * @class
 */
class DescribeCustomerBillDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer UIN
         * @type {number || null}
         */
        this.CustomerUin = null;

        /**
         * The queried month in “YYYY-MM” format, such as 2023-01.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Page parameter: Indicates the number of entries per page. Value range: [1, 200]
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page parameter: Indicates the current page number. The minimum value is 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Billing mode. Valid values:
`prePay` (Monthly subscription)
`postPay` (Pay-as-you-go)
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Transaction type. Valid values:
`prepay_purchase` (Purchase)
`prepay_renew` (Renewal)
`prepay_modify` (Upgrade/Downgrade)
`prepay_return` ( Monthly subscription refund)
`postpay_deduct` (Pay-as-you-go)
`postpay_deduct_h` (Hourly settlement)
`postpay_deduct_d` (Daily settlement)
`postpay_deduct_m` (Monthly settlement)
`offline_deduct` (Offline project deduction)
`online_deduct` (Offline product deduction)
`recon_deduct` (Adjustment - deduction)
`recon_increase` (Adjustment - compensation)
`ripay_purchase` (One-off RI Fee)
`postpay_deduct_s` (Spot)
`ri_hour_pay` (Hourly RI fee)
`prePurchase` (New monthly subscription)
`preRenew` (Monthly subscription renewal)
`preUpgrade` (Upgrade/Downgrade)
`preDowngrade` (Upgrade/Downgrade)
`svp_hour_pay` (Hourly Savings Plan fee)
`recon_guarantee` (Minimum spend deduction)
`pre_purchase` (New monthly subscription)
`pre_renew` (Monthly subscription renewal)
`pre_upgrade` (Upgrade/Downgrade)
`pre_downgrade` (Upgrade/Downgrade)
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Payment status
`0`: N/A
`1`: Paid
`2`: Unpaid
         * @type {string || null}
         */
        this.IsConfirmed = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerUin = 'CustomerUin' in params ? params.CustomerUin : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.IsConfirmed = 'IsConfirmed' in params ? params.IsConfirmed : null;

    }
}

/**
 * DescribeCustomerBillDetail response structure.
 * @class
 */
class DescribeCustomerBillDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of data entries
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Data details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillDetailData> || null}
         */
        this.DetailSet = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new BillDetailData();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClientRemark response structure.
 * @class
 */
class ModifyClientRemarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * If successful, returns the new customer remarks
         * @type {string || null}
         */
        this.ClientRemark = null;

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
        this.ClientRemark = 'ClientRemark' in params ? params.ClientRemark : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryAccountVerificationStatus request structure.
 * @class
 */
class QueryAccountVerificationStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer UIN
         * @type {number || null}
         */
        this.ClientUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;

    }
}

/**
 * QueryCreditAllocationHistory response structure.
 * @class
 */
class QueryCreditAllocationHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of record details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<QueryCreditAllocationHistoryData> || null}
         */
        this.History = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.History) {
            this.History = new Array();
            for (let z in params.History) {
                let obj = new QueryCreditAllocationHistoryData();
                obj.deserialize(params.History[z]);
                this.History.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAccount request structure.
 * @class
 */
class CreateAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account type of a new customer. Valid values: `personal`, `company`.
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * Registered email address, which should be valid and correct.
For example, account@qq.com.
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * Account password
Length limit: 8-20 characters
A password must contain numbers, letters, and symbols (!@#$%^&*()). Space is not allowed.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * The confirmed password, which must be the same as that entered in the `Password` field.
         * @type {string || null}
         */
        this.ConfirmPassword = null;

        /**
         * Customer mobile number, which should be valid and correct.
A global mobile number within 1-32 digits is allowed, such as 18888888888.
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * Customer's country/region code, which can be obtained via the `GetCountryCodes` API, such as "852".
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * Customer's ISO2 standard country/region code, which can be obtained via the `GetCountryCodes` API. It should correspond to the `CountryCode` field, such as `HK`.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Extension field, which is left empty by default.
         * @type {string || null}
         */
        this.Extended = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ConfirmPassword = 'ConfirmPassword' in params ? params.ConfirmPassword : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Extended = 'Extended' in params ? params.Extended : null;

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
         * Bill month in the format of "yyyy-mm".
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Billing dimension. Optional parameters: product, project, tag
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * Tag value list
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
 * DescribeBillSummaryByPayMode request structure.
 * @class
 */
class DescribeBillSummaryByPayModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bill month in the format of "yyyy-MM"
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * Customer UIN
         * @type {number || null}
         */
        this.CustomerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.CustomerUin = 'CustomerUin' in params ? params.CustomerUin : null;

    }
}

/**
 * Transaction type details in the customer bill data totaled by payment mode
 * @class
 */
class ActionSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transaction type code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Transaction type name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * The actual total consumption amount accurate down to eight decimal places
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * The deducted voucher amount accurate down to eight decimal places
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Total consumption amount accurate down to eight decimal places
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * DescribeCustomerInfo request structure.
 * @class
 */
class DescribeCustomerInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of customer UIN. Array length value: 1-20.
         * @type {Array.<number> || null}
         */
        this.CustomerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerUin = 'CustomerUin' in params ? params.CustomerUin : null;

    }
}

/**
 * QueryCreditQuota request structure.
 * @class
 */
class QueryCreditQuotaRequest extends  AbstractModel {
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
 * AllocateCustomerCredit response structure.
 * @class
 */
class AllocateCustomerCreditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The updated total credit
         * @type {number || null}
         */
        this.TotalCredit = null;

        /**
         * The updated available credit
         * @type {number || null}
         */
        this.RemainingCredit = null;

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
        this.TotalCredit = 'TotalCredit' in params ? params.TotalCredit : null;
        this.RemainingCredit = 'RemainingCredit' in params ? params.RemainingCredit : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Customer voucher information
 * @class
 */
class QueryVoucherListByUinVoucherItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Voucher ID
         * @type {string || null}
         */
        this.VoucherId = null;

        /**
         * Voucher status
         * @type {string || null}
         */
        this.VoucherStatus = null;

        /**
         * Voucher value
         * @type {number || null}
         */
        this.TotalAmount = null;

        /**
         * Balance
         * @type {number || null}
         */
        this.RemainAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VoucherId = 'VoucherId' in params ? params.VoucherId : null;
        this.VoucherStatus = 'VoucherStatus' in params ? params.VoucherStatus : null;
        this.TotalAmount = 'TotalAmount' in params ? params.TotalAmount : null;
        this.RemainAmount = 'RemainAmount' in params ? params.RemainAmount : null;

    }
}

/**
 * ModifyClientRemark request structure.
 * @class
 */
class ModifyClientRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer UIN
         * @type {string || null}
         */
        this.ClientUin = null;

        /**
         * New customer remarks
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
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

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
         * Bill month in the format of "yyyy-MM"
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * Customer UIN
         * @type {number || null}
         */
        this.CustomerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.CustomerUin = 'CustomerUin' in params ? params.CustomerUin : null;

    }
}

/**
 * The credit information of direct customers
 * @class
 */
class QueryDirectCustomersCreditData extends  AbstractModel {
    constructor(){
        super();

        /**
         * User UIN
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Total credit
         * @type {number || null}
         */
        this.TotalCredit = null;

        /**
         * Remaining credit
         * @type {number || null}
         */
        this.RemainingCredit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.TotalCredit = 'TotalCredit' in params ? params.TotalCredit : null;
        this.RemainingCredit = 'RemainingCredit' in params ? params.RemainingCredit : null;

    }
}

/**
 * GetCountryCodes request structure.
 * @class
 */
class GetCountryCodesRequest extends  AbstractModel {
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
 * Element type of the `GetCountryCodes` API
 * @class
 */
class CountryCodeItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Country/region name in English
         * @type {string || null}
         */
        this.EnName = null;

        /**
         * Country/region name in Chinese
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 
         * @type {string || null}
         */
        this.IOS2 = null;

        /**
         * 
         * @type {string || null}
         */
        this.IOS3 = null;

        /**
         * International dialing code
         * @type {string || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnName = 'EnName' in params ? params.EnName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IOS2 = 'IOS2' in params ? params.IOS2 : null;
        this.IOS3 = 'IOS3' in params ? params.IOS3 : null;
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * Customer bill details
 * @class
 */
class BillDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Reseller account
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PayerAccountId = null;

        /**
         * Customer account
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OwnerAccountId = null;

        /**
         * Operator account
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OperatorAccountId = null;

        /**
         * Product name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Billing mode
`Monthly subscription` (Monthly subscription)
`Pay-As-You-Go resources` (Pay-as-you-go)
`Standard RI` (Reserved instance)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BillingMode = null;

        /**
         * Project name

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Resource region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Resource AZ
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AvailabilityZone = null;

        /**
         * Instance ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Subproduct name

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubProductName = null;

        /**
         * Settlement type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransactionType = null;

        /**
         * Transaction ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * Settlement time

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransactionTime = null;

        /**
         * Start time of resource use
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsageStartTime = null;

        /**
         * End time of resource use
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsageEndTime = null;

        /**
         * Component
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentType = null;

        /**
         * Component name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * Component list price
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentListPrice = null;

        /**
         * Price unit
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentPriceMeasurementUnit = null;

        /**
         * Component usage
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentUsage = null;

        /**
         * Component usage unit
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentUsageUnit = null;

        /**
         * Resource usage duration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsageDuration = null;

        /**
         * Duration unit
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DurationUnit = null;

        /**
         * Original cost
Original cost = component list price * component usage * usage duration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * Discount, which defaults to `1`, indicating there is no discount.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiscountRate = null;

        /**
         * Currency
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Discounted total
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TotalAmountAfterDiscount = null;

        /**
         * Voucher deduction
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherDeduction = null;

        /**
         * Total cost = discounted total - voucher deduction
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * ID
Note: The return value may be null, indicating that no valid data can be obtained.
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
        this.PayerAccountId = 'PayerAccountId' in params ? params.PayerAccountId : null;
        this.OwnerAccountId = 'OwnerAccountId' in params ? params.OwnerAccountId : null;
        this.OperatorAccountId = 'OperatorAccountId' in params ? params.OperatorAccountId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.AvailabilityZone = 'AvailabilityZone' in params ? params.AvailabilityZone : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.SubProductName = 'SubProductName' in params ? params.SubProductName : null;
        this.TransactionType = 'TransactionType' in params ? params.TransactionType : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.TransactionTime = 'TransactionTime' in params ? params.TransactionTime : null;
        this.UsageStartTime = 'UsageStartTime' in params ? params.UsageStartTime : null;
        this.UsageEndTime = 'UsageEndTime' in params ? params.UsageEndTime : null;
        this.ComponentType = 'ComponentType' in params ? params.ComponentType : null;
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.ComponentListPrice = 'ComponentListPrice' in params ? params.ComponentListPrice : null;
        this.ComponentPriceMeasurementUnit = 'ComponentPriceMeasurementUnit' in params ? params.ComponentPriceMeasurementUnit : null;
        this.ComponentUsage = 'ComponentUsage' in params ? params.ComponentUsage : null;
        this.ComponentUsageUnit = 'ComponentUsageUnit' in params ? params.ComponentUsageUnit : null;
        this.UsageDuration = 'UsageDuration' in params ? params.UsageDuration : null;
        this.DurationUnit = 'DurationUnit' in params ? params.DurationUnit : null;
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountRate = 'DiscountRate' in params ? params.DiscountRate : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.TotalAmountAfterDiscount = 'TotalAmountAfterDiscount' in params ? params.TotalAmountAfterDiscount : null;
        this.VoucherDeduction = 'VoucherDeduction' in params ? params.VoucherDeduction : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.Id = 'Id' in params ? params.Id : null;

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
         * Data details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CustomerBillDetailData> || null}
         */
        this.DetailSet = null;

        /**
         * Total number of data entries
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

        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new CustomerBillDetailData();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryCreditAllocationHistory request structure.
 * @class
 */
class QueryCreditAllocationHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer UIN
         * @type {number || null}
         */
        this.ClientUin = null;

        /**
         * Page number
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of data entries per page
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * QueryCustomersCredit response structure.
 * @class
 */
class QueryCustomersCreditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of queried customers
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<QueryCustomersCreditData> || null}
         */
        this.Data = null;

        /**
         * Number of customers
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new QueryCustomersCreditData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Bill month in the format of "yyyy-mm"; the earliest month available for query is June, 2022. Current month's billing data may be inaccurate; please download the current month's bill after it is generated at 1:00 on the 5th of the next month.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Type of bill. Valid values: L2 or L3
         * @type {string || null}
         */
        this.FileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Month = 'Month' in params ? params.Month : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

    }
}

/**
 * DescribeCustomerUin request structure.
 * @class
 */
class DescribeCustomerUinRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of data entries per page
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Page = 'Page' in params ? params.Page : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * QueryVoucherListByUin response structure.
 * @class
 */
class QueryVoucherListByUinResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer voucher information
         * @type {Array.<QueryVoucherListByUinItem> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new QueryVoucherListByUinItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryVoucherPool request structure.
 * @class
 */
class QueryVoucherPoolRequest extends  AbstractModel {
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
 * Customer information
 * @class
 */
class DescribeCustomerInfoData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer UIN Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomerUin = null;

        /**
         * Email Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Mobile number Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * Remarks Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Mark = null;

        /**
         * Displayed name Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Binding time Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BindTime = null;

        /**
         * Account status
0: Normal
1: Forcibly mandatory (this function is not supported yet)
2. Mandatory arrears
Note: The return value may be null, indicating that no valid data can be obtained.
         * @type {string || null}
         */
        this.AccountStatus = null;

        /**
         * Identity verification status
-1: Files not uploaded
0: Not submitted for review
1: Under review
2: Review error
3: Approved
Note: The return value may be null, indicating that no valid data can be obtained.
         * @type {string || null}
         */
        this.AuthStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerUin = 'CustomerUin' in params ? params.CustomerUin : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Mark = 'Mark' in params ? params.Mark : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.BindTime = 'BindTime' in params ? params.BindTime : null;
        this.AccountStatus = 'AccountStatus' in params ? params.AccountStatus : null;
        this.AuthStatus = 'AuthStatus' in params ? params.AuthStatus : null;

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
         * File download address, valid for one hour.
         * @type {string || null}
         */
        this.DownloadUrl = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Payment mode details in the customer bill data totaled by payment mode
 * @class
 */
class PayModeSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing mode
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Billing mode name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * The actual total consumption amount accurate down to eight decimal places
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * Bill details in each payment mode
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ActionSummaryOverviewItem> || null}
         */
        this.Detail = null;

        /**
         * The deducted voucher amount accurate down to eight decimal places
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Total consumption amount accurate down to eight decimal places
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new ActionSummaryOverviewItem();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * Complex type of output parameters for querying customer's credit
 * @class
 */
class QueryCustomersCreditData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Mobile number
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * Email
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Overdue payment flag
         * @type {string || null}
         */
        this.Arrears = null;

        /**
         * Binding time
         * @type {string || null}
         */
        this.AssociationTime = null;

        /**
         * Expiration time
         * @type {string || null}
         */
        this.RecentExpiry = null;

        /**
         * Customer UIN
         * @type {number || null}
         */
        this.ClientUin = null;

        /**
         * Credit allocated to a customer
         * @type {number || null}
         */
        this.Credit = null;

        /**
         * The remaining credit of a customer
         * @type {number || null}
         */
        this.RemainingCredit = null;

        /**
         * `0`: Identity not verified; `1`: Individual identity verified; `2`: Enterprise identity verified.
         * @type {number || null}
         */
        this.IdentifyType = null;

        /**
         * Customer remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Forced status
         * @type {number || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Arrears = 'Arrears' in params ? params.Arrears : null;
        this.AssociationTime = 'AssociationTime' in params ? params.AssociationTime : null;
        this.RecentExpiry = 'RecentExpiry' in params ? params.RecentExpiry : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.Credit = 'Credit' in params ? params.Credit : null;
        this.RemainingCredit = 'RemainingCredit' in params ? params.RemainingCredit : null;
        this.IdentifyType = 'IdentifyType' in params ? params.IdentifyType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * DescribeCustomerBillSummary request structure.
 * @class
 */
class DescribeCustomerBillSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer UIN
         * @type {number || null}
         */
        this.CustomerUin = null;

        /**
         * The queried month in “YYYY-MM” format, such as 2023-01.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Billing mode. Valid values:
`prePay` (Monthly subscription)
`postPay` (Pay-as-you-go)
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Transaction type. Valid values:
`prepay_purchase` (Purchase)
`prepay_renew` (Renewal)
`prepay_modify` (Upgrade/Downgrade)
`prepay_return` (Monthly subscription refund)
`postpay_deduct` (Pay-as-you-go)
`postpay_deduct_h` (Hourly settlement)
`postpay_deduct_d` (Daily settlement)
`postpay_deduct_m` (Monthly settlement)
`offline_deduct` (Offline project deduction)
`online_deduct` (Offline product deduction)
`recon_deduct` (Adjustment - deduction)
`recon_increase` (Adjustment - compensation)
`ripay_purchase` (One-off RI Fee)
`postpay_deduct_s` (Spot)
`ri_hour_pay` (Hourly RI fee)
`prePurchase` (New monthly subscription)
`preRenew` (Monthly subscription renewal)
`preUpgrade` (Upgrade/Downgrade)
`preDowngrade` (Upgrade/Downgrade)
`svp_hour_pay` (Hourly Savings Plan fee)
`recon_guarantee` (Minimum spend deduction)
`pre_purchase` (New monthly subscription)
`pre_renew` (Monthly subscription renewal)
`pre_upgrade` (Upgrade/Downgrade)
`pre_downgrade` (Upgrade/Downgrade)
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Payment status
`0`: N/A
`1`: Paid
`2`: Unpaid
         * @type {string || null}
         */
        this.IsConfirmed = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerUin = 'CustomerUin' in params ? params.CustomerUin : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.IsConfirmed = 'IsConfirmed' in params ? params.IsConfirmed : null;

    }
}

/**
 * QueryDirectCustomersCredit request structure.
 * @class
 */
class QueryDirectCustomersCreditRequest extends  AbstractModel {
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

module.exports = {
    QueryDirectCustomersCreditResponse: QueryDirectCustomersCreditResponse,
    SummaryDetails: SummaryDetails,
    QueryPartnerCreditResponse: QueryPartnerCreditResponse,
    QueryVoucherListByUinRequest: QueryVoucherListByUinRequest,
    QueryVoucherAmountByUinRequest: QueryVoucherAmountByUinRequest,
    QueryVoucherAmountByUinResponse: QueryVoucherAmountByUinResponse,
    QueryVoucherAmountByUinItem: QueryVoucherAmountByUinItem,
    QueryCreditAllocationHistoryData: QueryCreditAllocationHistoryData,
    DescribeBillSummaryResponse: DescribeBillSummaryResponse,
    DescribeBillSummaryByPayModeResponse: DescribeBillSummaryByPayModeResponse,
    QueryCreditQuotaResponse: QueryCreditQuotaResponse,
    BusinessInfo: BusinessInfo,
    QueryVoucherListByUinItem: QueryVoucherListByUinItem,
    DescribeBillSummaryByProductResponse: DescribeBillSummaryByProductResponse,
    QueryPartnerCreditRequest: QueryPartnerCreditRequest,
    AllocateCustomerCreditRequest: AllocateCustomerCreditRequest,
    DescribeBillSummaryByRegionResponse: DescribeBillSummaryByRegionResponse,
    DescribeCustomerBillSummaryResponse: DescribeCustomerBillSummaryResponse,
    QueryCustomersCreditRequest: QueryCustomersCreditRequest,
    DescribeBillDetailRequest: DescribeBillDetailRequest,
    QueryCreditByUinListRequest: QueryCreditByUinListRequest,
    CreateAccountResponse: CreateAccountResponse,
    QueryAccountVerificationStatusResponse: QueryAccountVerificationStatusResponse,
    RegionSummaryOverviewItem: RegionSummaryOverviewItem,
    CustomerBillDetailData: CustomerBillDetailData,
    GetCountryCodesResponse: GetCountryCodesResponse,
    QueryCreditByUinListResponse: QueryCreditByUinListResponse,
    DescribeCustomerInfoResponse: DescribeCustomerInfoResponse,
    BusinessSummaryOverviewItem: BusinessSummaryOverviewItem,
    DescribeCustomerUinData: DescribeCustomerUinData,
    DescribeCustomerUinResponse: DescribeCustomerUinResponse,
    DescribeBillSummaryByRegionRequest: DescribeBillSummaryByRegionRequest,
    QueryVoucherPoolResponse: QueryVoucherPoolResponse,
    TagInfo: TagInfo,
    DescribeCustomerBillDetailRequest: DescribeCustomerBillDetailRequest,
    DescribeCustomerBillDetailResponse: DescribeCustomerBillDetailResponse,
    ModifyClientRemarkResponse: ModifyClientRemarkResponse,
    QueryAccountVerificationStatusRequest: QueryAccountVerificationStatusRequest,
    QueryCreditAllocationHistoryResponse: QueryCreditAllocationHistoryResponse,
    CreateAccountRequest: CreateAccountRequest,
    DescribeBillSummaryRequest: DescribeBillSummaryRequest,
    DescribeBillSummaryByPayModeRequest: DescribeBillSummaryByPayModeRequest,
    ActionSummaryOverviewItem: ActionSummaryOverviewItem,
    DescribeCustomerInfoRequest: DescribeCustomerInfoRequest,
    QueryCreditQuotaRequest: QueryCreditQuotaRequest,
    AllocateCustomerCreditResponse: AllocateCustomerCreditResponse,
    QueryVoucherListByUinVoucherItem: QueryVoucherListByUinVoucherItem,
    ModifyClientRemarkRequest: ModifyClientRemarkRequest,
    DescribeBillSummaryByProductRequest: DescribeBillSummaryByProductRequest,
    QueryDirectCustomersCreditData: QueryDirectCustomersCreditData,
    GetCountryCodesRequest: GetCountryCodesRequest,
    CountryCodeItem: CountryCodeItem,
    BillDetailData: BillDetailData,
    DescribeBillDetailResponse: DescribeBillDetailResponse,
    QueryCreditAllocationHistoryRequest: QueryCreditAllocationHistoryRequest,
    QueryCustomersCreditResponse: QueryCustomersCreditResponse,
    DescribeBillDownloadUrlRequest: DescribeBillDownloadUrlRequest,
    DescribeCustomerUinRequest: DescribeCustomerUinRequest,
    QueryVoucherListByUinResponse: QueryVoucherListByUinResponse,
    QueryVoucherPoolRequest: QueryVoucherPoolRequest,
    DescribeCustomerInfoData: DescribeCustomerInfoData,
    DescribeBillDownloadUrlResponse: DescribeBillDownloadUrlResponse,
    PayModeSummaryOverviewItem: PayModeSummaryOverviewItem,
    QueryCustomersCreditData: QueryCustomersCreditData,
    DescribeCustomerBillSummaryRequest: DescribeCustomerBillSummaryRequest,
    QueryDirectCustomersCreditRequest: QueryDirectCustomersCreditRequest,

}
