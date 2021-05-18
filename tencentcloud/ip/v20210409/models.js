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
 * CreateAccount request structure.
 * @class
 */
class CreateAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The account type identification of the newly created customer. The value of this interface is: business
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * Registered email address. The caller needs to ensure the validity and correctness of the email address.
The email format must be met. For example: account@qq.com
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * Account password.
Length limit: [8,20].
It must also contain numbers, letters and special symbols (!@#$%^&*() and other non-spaces)
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Reconfirm the password. It must be the same as the Password value
         * @type {string || null}
         */
        this.ConfirmPassword = null;

        /**
         * Customer's mobile phone number. The caller is required to ensure the validity and correctness of the mobile phone number.
Length limit: [1,32]. Global mobile phone numbers are supported. For example, 18888888888
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * The country code of the customer. For the value, please refer to the GetCountryCodes interface GetCountryCodes. Such as 86
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * Customer's IOS2 standard country code. Refer to the GetCountryCodes interface for obtaining country codes. It needs to correspond to the CountryCode value. Such as CN
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Extension field, default is empty
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
 * GetCountryCodes response structure.
 * @class
 */
class GetCountryCodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of Country Codes
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
 * CreateAccount response structure.
 * @class
 */
class CreateAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The uin of the account
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
 * Get an element type of the country code interface
 * @class
 */
class CountryCodeItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Country English Name
         * @type {string || null}
         */
        this.EnName = null;

        /**
         * Country Chinese Name
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
         * Phone Code
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
    CreateAccountRequest: CreateAccountRequest,
    GetCountryCodesRequest: GetCountryCodesRequest,
    GetCountryCodesResponse: GetCountryCodesResponse,
    CreateAccountResponse: CreateAccountResponse,
    CountryCodeItem: CountryCodeItem,

}
