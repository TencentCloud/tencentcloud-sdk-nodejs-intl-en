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
 * QueryAgentCredit request structure.
 * @class
 */
class QueryAgentCreditRequest extends  AbstractModel {
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
 * AssignClientCredit request structure.
 * @class
 */
class AssignClientCreditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specific value of the credit allocated to the customer
         * @type {number || null}
         */
        this.QuotaNum = null;

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
        this.QuotaNum = 'QuotaNum' in params ? params.QuotaNum : null;
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
 * Queries reseller's credit allocation records and returns individual records
 * @class
 */
class QueryUinCreditHistoryData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Credit allocatee UIN
         * @type {number || null}
         */
        this.CreditAssignUin = null;

        /**
         * Allocation time
         * @type {string || null}
         */
        this.AssginTime = null;

        /**
         * Operator
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Allocated credit value
         * @type {number || null}
         */
        this.CreditAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreditAssignUin = 'CreditAssignUin' in params ? params.CreditAssignUin : null;
        this.AssginTime = 'AssginTime' in params ? params.AssginTime : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.CreditAmount = 'CreditAmount' in params ? params.CreditAmount : null;

    }
}

/**
 * QueryCreditHistory response structure.
 * @class
 */
class QueryCreditHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of record details
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<QueryUinCreditHistoryData> || null}
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
                let obj = new QueryUinCreditHistoryData();
                obj.deserialize(params.History[z]);
                this.History.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssignClientCredit response structure.
 * @class
 */
class AssignClientCreditResponse extends  AbstractModel {
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
 * Reseller's customer list
 * @class
 */
class QueryClientListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Phone
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * Email
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Overdue payment flag
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Arrears = null;

        /**
         * Binding time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssociationTime = null;

        /**
         * Expiration time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecentExpiry = null;

        /**
         * Customer UIN
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ClientUin = null;

        /**
         * Credit granted to customer
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreditAmount = null;

        /**
         * Customer's remaining credit
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RestCreditAmount = null;

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
        this.CreditAmount = 'CreditAmount' in params ? params.CreditAmount : null;
        this.RestCreditAmount = 'RestCreditAmount' in params ? params.RestCreditAmount : null;

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
         * Account type of a new customer. Valid value: `business`.
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
A password must contain numbers, letters, and special symbols [!@#$%^&*()]. Spaces are not allowed.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Confirm the password. It must be the same as the `Password` field.
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
         * Country code, which can be obtained via the `GetCountryCodes` API, such as 852.
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * ISO2 standard country code, which can be obtained via the `GetCountryCodes` API. It should correspond to the `CountryCode` field.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Expanded field, which is left empty by default.
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
 * QueryCreditHistory request structure.
 * @class
 */
class QueryCreditHistoryRequest extends  AbstractModel {
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
        this.PageRow = null;

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
        this.PageRow = 'PageRow' in params ? params.PageRow : null;

    }
}

/**
 * QueryAgentCredit response structure.
 * @class
 */
class QueryAgentCreditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Allocated credit
         * @type {number || null}
         */
        this.AssignedCreditAmount = null;

        /**
         * Total credit
         * @type {number || null}
         */
        this.CustomerCreditAmount = null;

        /**
         * Remaining credit
         * @type {number || null}
         */
        this.RemainingCreditAmount = null;

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
        this.AssignedCreditAmount = 'AssignedCreditAmount' in params ? params.AssignedCreditAmount : null;
        this.CustomerCreditAmount = 'CustomerCreditAmount' in params ? params.CustomerCreditAmount : null;
        this.RemainingCreditAmount = 'RemainingCreditAmount' in params ? params.RemainingCreditAmount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryClientList request structure.
 * @class
 */
class QueryClientListRequest extends  AbstractModel {
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
 * QueryClientList response structure.
 * @class
 */
class QueryClientListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries the list of customers
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<QueryClientListItem> || null}
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
                let obj = new QueryClientListItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
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
 * Country/region code list
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
         * IOS2 standard country/region code
         * @type {string || null}
         */
        this.IOS2 = null;

        /**
         * IOS3 standard country/region code
         * @type {string || null}
         */
        this.IOS3 = null;

        /**
         * Phone code
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
    QueryAgentCreditRequest: QueryAgentCreditRequest,
    AssignClientCreditRequest: AssignClientCreditRequest,
    GetCountryCodesResponse: GetCountryCodesResponse,
    QueryUinCreditHistoryData: QueryUinCreditHistoryData,
    QueryCreditHistoryResponse: QueryCreditHistoryResponse,
    AssignClientCreditResponse: AssignClientCreditResponse,
    QueryClientListItem: QueryClientListItem,
    CreateAccountRequest: CreateAccountRequest,
    CreateAccountResponse: CreateAccountResponse,
    QueryCreditHistoryRequest: QueryCreditHistoryRequest,
    QueryAgentCreditResponse: QueryAgentCreditResponse,
    QueryClientListRequest: QueryClientListRequest,
    QueryClientListResponse: QueryClientListResponse,
    GetCountryCodesRequest: GetCountryCodesRequest,
    CountryCodeItem: CountryCodeItem,

}
