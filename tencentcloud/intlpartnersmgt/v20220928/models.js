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
         * Customer UIN list
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
 * QueryCreditByUinList request structure.
 * @class
 */
class QueryCreditByUinListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User list
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
         * A pagination parameter that specifies the number of entries per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * A pagination parameter that specifies the current page number
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
 * QueryVoucherAmountByUin request structure.
 * @class
 */
class QueryVoucherAmountByUinRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Customer UIN list
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

    }
}

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

module.exports = {
    QueryPartnerCreditResponse: QueryPartnerCreditResponse,
    QueryVoucherListByUinRequest: QueryVoucherListByUinRequest,
    QueryVoucherAmountByUinResponse: QueryVoucherAmountByUinResponse,
    QueryVoucherAmountByUinItem: QueryVoucherAmountByUinItem,
    QueryDirectCustomersCreditData: QueryDirectCustomersCreditData,
    QueryVoucherListByUinItem: QueryVoucherListByUinItem,
    QueryPartnerCreditRequest: QueryPartnerCreditRequest,
    AllocateCustomerCreditRequest: AllocateCustomerCreditRequest,
    DescribeCustomerBillSummaryResponse: DescribeCustomerBillSummaryResponse,
    QueryCustomersCreditRequest: QueryCustomersCreditRequest,
    QueryCreditByUinListRequest: QueryCreditByUinListRequest,
    CreateAccountResponse: CreateAccountResponse,
    GetCountryCodesRequest: GetCountryCodesRequest,
    QueryCreditByUinListResponse: QueryCreditByUinListResponse,
    QueryVoucherPoolResponse: QueryVoucherPoolResponse,
    DescribeCustomerBillDetailRequest: DescribeCustomerBillDetailRequest,
    DescribeCustomerBillDetailResponse: DescribeCustomerBillDetailResponse,
    QueryCreditAllocationHistoryResponse: QueryCreditAllocationHistoryResponse,
    CreateAccountRequest: CreateAccountRequest,
    GetCountryCodesResponse: GetCountryCodesResponse,
    QueryDirectCustomersCreditRequest: QueryDirectCustomersCreditRequest,
    AllocateCustomerCreditResponse: AllocateCustomerCreditResponse,
    QueryVoucherListByUinVoucherItem: QueryVoucherListByUinVoucherItem,
    QueryVoucherAmountByUinRequest: QueryVoucherAmountByUinRequest,
    QueryCreditAllocationHistoryData: QueryCreditAllocationHistoryData,
    QueryCreditAllocationHistoryRequest: QueryCreditAllocationHistoryRequest,
    CountryCodeItem: CountryCodeItem,
    BillDetailData: BillDetailData,
    QueryDirectCustomersCreditResponse: QueryDirectCustomersCreditResponse,
    QueryVoucherListByUinResponse: QueryVoucherListByUinResponse,
    QueryVoucherPoolRequest: QueryVoucherPoolRequest,
    DescribeCustomerBillSummaryRequest: DescribeCustomerBillSummaryRequest,
    QueryCustomersCreditData: QueryCustomersCreditData,
    QueryCustomersCreditResponse: QueryCustomersCreditResponse,

}
