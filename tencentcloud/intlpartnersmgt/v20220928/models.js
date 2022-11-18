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

module.exports = {
    AllocateCustomerCreditRequest: AllocateCustomerCreditRequest,
    GetCountryCodesResponse: GetCountryCodesResponse,
    QueryCustomersCreditRequest: QueryCustomersCreditRequest,
    QueryCreditAllocationHistoryResponse: QueryCreditAllocationHistoryResponse,
    QueryCreditAllocationHistoryRequest: QueryCreditAllocationHistoryRequest,
    QueryCustomersCreditResponse: QueryCustomersCreditResponse,
    CreateAccountRequest: CreateAccountRequest,
    QueryDirectCustomersCreditResponse: QueryDirectCustomersCreditResponse,
    QueryCreditByUinListRequest: QueryCreditByUinListRequest,
    CreateAccountResponse: CreateAccountResponse,
    QueryCreditAllocationHistoryData: QueryCreditAllocationHistoryData,
    AllocateCustomerCreditResponse: AllocateCustomerCreditResponse,
    QueryPartnerCreditRequest: QueryPartnerCreditRequest,
    QueryCreditByUinListResponse: QueryCreditByUinListResponse,
    QueryPartnerCreditResponse: QueryPartnerCreditResponse,
    QueryDirectCustomersCreditData: QueryDirectCustomersCreditData,
    QueryCustomersCreditData: QueryCustomersCreditData,
    GetCountryCodesRequest: GetCountryCodesRequest,
    QueryDirectCustomersCreditRequest: QueryDirectCustomersCreditRequest,
    CountryCodeItem: CountryCodeItem,

}
