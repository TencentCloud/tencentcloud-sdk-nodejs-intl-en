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
 * UpdateUser request structure.
 * @class
 */
class UpdateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Mobile number
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * Email address
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Nickname
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * Address
         * @type {string || null}
         */
        this.Address = null;

        /**
         * User group
         * @type {Array.<string> || null}
         */
        this.UserGroup = null;

        /**
         * Date of birth
         * @type {number || null}
         */
        this.Birthdate = null;

        /**
         * Custom attribute
         * @type {Array.<MemberMap> || null}
         */
        this.CustomizationAttributes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.UserGroup = 'UserGroup' in params ? params.UserGroup : null;
        this.Birthdate = 'Birthdate' in params ? params.Birthdate : null;

        if (params.CustomizationAttributes) {
            this.CustomizationAttributes = new Array();
            for (let z in params.CustomizationAttributes) {
                let obj = new MemberMap();
                obj.deserialize(params.CustomizationAttributes[z]);
                this.CustomizationAttributes.push(obj);
            }
        }

    }
}

/**
 * DescribeUserById request structure.
 * @class
 */
class DescribeUserByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 
         * @type {boolean || null}
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
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Original = 'Original' in params ? params.Original : null;

    }
}

/**
 * ListUser request structure.
 * @class
 */
class ListUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * Pagination data
         * @type {Pageable || null}
         */
        this.Pageable = null;

        /**
         * Valid values of `Key`: `condition`, `userGroupId`.

<li> **condition** </li>	Values = Query condition, which can be user ID, username, mobile number, or email address.
<li> **userGroupId** </li>	Values = User group ID
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 
         * @type {boolean || null}
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
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;

        if (params.Pageable) {
            let obj = new Pageable();
            obj.deserialize(params.Pageable)
            this.Pageable = obj;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Original = 'Original' in params ? params.Original : null;

    }
}

/**
 * ResetPassword request structure.
 * @class
 */
class ResetPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;

    }
}

/**
 * Failure details
 * @class
 */
class ErrorDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * User information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Failure cause
         * @type {string || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Error = 'Error' in params ? params.Error : null;

    }
}

/**
 * DeleteUsers request structure.
 * @class
 */
class DeleteUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * Array of user IDs
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * Imported user information
1. One of the eight attributes of `UserName`, `PhoneNumber`, `Email`, `WechatOpenId`, `WechatUnionId`, `AlipayUserId`, `QqOpenId`, and `QqUnionId` must be included during import and comply with the regular expression rules for initializing custom attributes. The regular expressions for `UserName`, `PhoneNumber`, and `Email` can be queried in the custom attributes in the console.
2. For password import, the imported password supports plaintext import, MD5 ciphertext import, SHA1 ciphertext import, and BCRYPT ciphertext import. This needs to be specified in the `PasswordEncryptTypeEnum` field.
3. `IdentityVerified` and `IdentityVerificationMethod` can be imported.
If `IdentityVerified` is `true`, `IdentityVerificationMethod` is required.
If `IdentityVerificationMethod` is `nameAndIdCard`, `Name` and `ResidentIdentityCard` are required.
If `IdentityVerificationMethod` is `nameIdCardAndPhone`, `Name`, `PhoneNumber`, and `ResidentIdentityCard` are required.
 * @class
 */
class ImportUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Mobile number
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * Email address
         * @type {string || null}
         */
        this.Email = null;

        /**
         * ID card number
         * @type {string || null}
         */
        this.ResidentIdentityCard = null;

        /**
         * Nickname
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * Address
         * @type {string || null}
         */
        this.Address = null;

        /**
         * User group ID
         * @type {Array.<string> || null}
         */
        this.UserGroup = null;

        /**
         * `qqOpenId` on QQ
         * @type {string || null}
         */
        this.QqOpenId = null;

        /**
         * `qqUnionId` on QQ
         * @type {string || null}
         */
        this.QqUnionId = null;

        /**
         * `wechatOpenId` on WeChat
         * @type {string || null}
         */
        this.WechatOpenId = null;

        /**
         * `wechatUnionId` on WeChat
         * @type {string || null}
         */
        this.WechatUnionId = null;

        /**
         * `alipayUserId` on Alipay
         * @type {string || null}
         */
        this.AlipayUserId = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Date of birth
         * @type {string || null}
         */
        this.Birthdate = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Coordinate
         * @type {string || null}
         */
        this.Locale = null;

        /**
         * Gender. Valid values: `MALE`, `FEMALE`, `UNKNOWN`.
         * @type {string || null}
         */
        this.Gender = null;

        /**
         * Identity verification method
         * @type {string || null}
         */
        this.IdentityVerificationMethod = null;

        /**
         * Whether the identity is verified
         * @type {boolean || null}
         */
        this.IdentityVerified = null;

        /**
         * Job
         * @type {string || null}
         */
        this.Job = null;

        /**
         * Country/Region
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * Time zone
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Password ciphertext
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Custom attribute
         * @type {Array.<MemberMap> || null}
         */
        this.CustomizationAttributes = null;

        /**
         * Password salt
         * @type {Salt || null}
         */
        this.Salt = null;

        /**
         * Password encryption method. Valid values: `SHA1`, `BCRYPT`.
         * @type {string || null}
         */
        this.PasswordEncryptTypeEnum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.ResidentIdentityCard = 'ResidentIdentityCard' in params ? params.ResidentIdentityCard : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.UserGroup = 'UserGroup' in params ? params.UserGroup : null;
        this.QqOpenId = 'QqOpenId' in params ? params.QqOpenId : null;
        this.QqUnionId = 'QqUnionId' in params ? params.QqUnionId : null;
        this.WechatOpenId = 'WechatOpenId' in params ? params.WechatOpenId : null;
        this.WechatUnionId = 'WechatUnionId' in params ? params.WechatUnionId : null;
        this.AlipayUserId = 'AlipayUserId' in params ? params.AlipayUserId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Birthdate = 'Birthdate' in params ? params.Birthdate : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Locale = 'Locale' in params ? params.Locale : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.IdentityVerificationMethod = 'IdentityVerificationMethod' in params ? params.IdentityVerificationMethod : null;
        this.IdentityVerified = 'IdentityVerified' in params ? params.IdentityVerified : null;
        this.Job = 'Job' in params ? params.Job : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.CustomizationAttributes) {
            this.CustomizationAttributes = new Array();
            for (let z in params.CustomizationAttributes) {
                let obj = new MemberMap();
                obj.deserialize(params.CustomizationAttributes[z]);
                this.CustomizationAttributes.push(obj);
            }
        }

        if (params.Salt) {
            let obj = new Salt();
            obj.deserialize(params.Salt)
            this.Salt = obj;
        }
        this.PasswordEncryptTypeEnum = 'PasswordEncryptTypeEnum' in params ? params.PasswordEncryptTypeEnum : null;

    }
}

/**
 * UpdateUserStatus response structure.
 * @class
 */
class UpdateUserStatusResponse extends  AbstractModel {
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
 * Failed user
 * @class
 */
class FailedUsers extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the failed user
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FailedUserIdentification = null;

        /**
         * Failure cause for user import
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FailedReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FailedUserIdentification = 'FailedUserIdentification' in params ? params.FailedUserIdentification : null;
        this.FailedReason = 'FailedReason' in params ? params.FailedReason : null;

    }
}

/**
 * ListUserByProperty request structure.
 * @class
 */
class ListUserByPropertyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * Query attribute

<li> **phoneNumber** </li>	  Mobile number
<li> **email** </li>  Email
         * @type {string || null}
         */
        this.PropertyCode = null;

        /**
         * Attribute value
         * @type {string || null}
         */
        this.PropertyValue = null;

        /**
         * 
         * @type {boolean || null}
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
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.PropertyCode = 'PropertyCode' in params ? params.PropertyCode : null;
        this.PropertyValue = 'PropertyValue' in params ? params.PropertyValue : null;
        this.Original = 'Original' in params ? params.Original : null;

    }
}

/**
 * CreateUser response structure.
 * @class
 */
class CreateUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of the created user
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {User || null}
         */
        this.User = null;

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

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Query condition
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key value
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Logical value
         * @type {boolean || null}
         */
        this.Logic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Values = 'Values' in params ? params.Values : null;
        this.Logic = 'Logic' in params ? params.Logic : null;

    }
}

/**
 * SetPassword response structure.
 * @class
 */
class SetPasswordResponse extends  AbstractModel {
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
 * ListUserByProperty response structure.
 * @class
 */
class ListUserByPropertyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of users
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<User> || null}
         */
        this.Users = null;

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

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new User();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListJobs request structure.
 * @class
 */
class ListJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * List of task IDs. If this parameter is empty, all tasks will be returned.
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.JobIds = 'JobIds' in params ? params.JobIds : null;

    }
}

/**
 * DescribeUserById response structure.
 * @class
 */
class DescribeUserByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {User || null}
         */
        this.User = null;

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

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Task details
 * @class
 */
class Job extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Task status

<li> **PENDING** </li>  Pending
<li> **PROCESSING** </li>  Executing
<li> **COMPLETED** </li>  Completed
<li> **FAILED** </li>  Failed
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task type

<li> **IMPORT_USER** </li>  User import
<li> **EXPORT_USER** </li>  User export
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Task creation time
         * @type {number || null}
         */
        this.CreatedDate = null;

        /**
         * Data type of the task

<li> **JSON** </li>  JSON
<li> **NDJSON** </li>  New-line Delimited JSON
<li> **CSV** </li>  Comma-Separated Values
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Task result download address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Location = null;

        /**
         * Failure details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ErrorDetails> || null}
         */
        this.ErrorDetails = null;

        /**
         * Failed user
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<FailedUsers> || null}
         */
        this.FailedUsers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Location = 'Location' in params ? params.Location : null;

        if (params.ErrorDetails) {
            this.ErrorDetails = new Array();
            for (let z in params.ErrorDetails) {
                let obj = new ErrorDetails();
                obj.deserialize(params.ErrorDetails[z]);
                this.ErrorDetails.push(obj);
            }
        }

        if (params.FailedUsers) {
            this.FailedUsers = new Array();
            for (let z in params.FailedUsers) {
                let obj = new FailedUsers();
                obj.deserialize(params.FailedUsers[z]);
                this.FailedUsers.push(obj);
            }
        }

    }
}

/**
 * CreateFileExportUserJob request structure.
 * @class
 */
class CreateFileExportUserJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * Exported data type

<li> **JSON** </li>  JSON
<li> **NDJSON** </li>  New-line Delimited JSON
<li> **CSV** </li>  Comma-Separated Values
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Valid values of `Key`: `condition`, `userGroupId`.

<li> **condition** </li>	Values = Query condition, which can be user ID, username, mobile number, or email address.
<li> **userGroupId** </li>	Values = User group ID
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Attributes and mapping names included in the exported user information. If this parameter is empty, all attributes will be included.
         * @type {Array.<ExportPropertyMap> || null}
         */
        this.ExportPropertyMaps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.Format = 'Format' in params ? params.Format : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.ExportPropertyMaps) {
            this.ExportPropertyMaps = new Array();
            for (let z in params.ExportPropertyMaps) {
                let obj = new ExportPropertyMap();
                obj.deserialize(params.ExportPropertyMaps[z]);
                this.ExportPropertyMaps.push(obj);
            }
        }

    }
}

/**
 * User information
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Username
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Mobile number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * Email address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Last login time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LastSignOn = null;

        /**
         * Creation time
         * @type {number || null}
         */
        this.CreatedDate = null;

        /**
         * Status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * User source
         * @type {string || null}
         */
        this.UserDataSourceEnum = null;

        /**
         * Nickname
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Date of birth
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Birthdate = null;

        /**
         * User group ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.UserGroups = null;

        /**
         * Last modified time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LastModifiedDate = null;

        /**
         * Custom attribute
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MemberMap> || null}
         */
        this.CustomAttributes = null;

        /**
         * ID card number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResidentIdentityCard = null;

        /**
         * `OpenId` on QQ
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.QqOpenId = null;

        /**
         * `UnionId` on QQ
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.QqUnionId = null;

        /**
         * `WechatOpenId` on WeChat
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WechatOpenId = null;

        /**
         * `WechatUnionId` on WeChat
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WechatUnionId = null;

        /**
         * `AlipayUserId` on Alipay
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AlipayUserId = null;

        /**
         * Description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Coordinate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Locale = null;

        /**
         * Gender
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Gender = null;

        /**
         * Identity verification method
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IdentityVerificationMethod = null;

        /**
         * Whether the identity is verified
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IdentityVerified = null;

        /**
         * Job
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Job = null;

        /**
         * Country/Region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * Whether the account is the primary account (after account merge, this parameter is `true` for primary accounts and `false` for secondary account).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * Time zone
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Whether the account has ever logged in.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.AlreadyFirstLogin = null;

        /**
         * Tenant ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TenantId = null;

        /**
         * User directory ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * Version
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Version = null;

        /**
         * Lock type (locked by admin or locked by login policy)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LockType = null;

        /**
         * Lock time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LockTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.LastSignOn = 'LastSignOn' in params ? params.LastSignOn : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UserDataSourceEnum = 'UserDataSourceEnum' in params ? params.UserDataSourceEnum : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Birthdate = 'Birthdate' in params ? params.Birthdate : null;
        this.UserGroups = 'UserGroups' in params ? params.UserGroups : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;

        if (params.CustomAttributes) {
            this.CustomAttributes = new Array();
            for (let z in params.CustomAttributes) {
                let obj = new MemberMap();
                obj.deserialize(params.CustomAttributes[z]);
                this.CustomAttributes.push(obj);
            }
        }
        this.ResidentIdentityCard = 'ResidentIdentityCard' in params ? params.ResidentIdentityCard : null;
        this.QqOpenId = 'QqOpenId' in params ? params.QqOpenId : null;
        this.QqUnionId = 'QqUnionId' in params ? params.QqUnionId : null;
        this.WechatOpenId = 'WechatOpenId' in params ? params.WechatOpenId : null;
        this.WechatUnionId = 'WechatUnionId' in params ? params.WechatUnionId : null;
        this.AlipayUserId = 'AlipayUserId' in params ? params.AlipayUserId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Locale = 'Locale' in params ? params.Locale : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.IdentityVerificationMethod = 'IdentityVerificationMethod' in params ? params.IdentityVerificationMethod : null;
        this.IdentityVerified = 'IdentityVerified' in params ? params.IdentityVerified : null;
        this.Job = 'Job' in params ? params.Job : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.AlreadyFirstLogin = 'AlreadyFirstLogin' in params ? params.AlreadyFirstLogin : null;
        this.TenantId = 'TenantId' in params ? params.TenantId : null;
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.LockType = 'LockType' in params ? params.LockType : null;
        this.LockTime = 'LockTime' in params ? params.LockTime : null;

    }
}

/**
 * Pagination object
 * @class
 */
class Pageable extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Current page number
         * @type {number || null}
         */
        this.PageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * ResetPassword response structure.
 * @class
 */
class ResetPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User password after reset
         * @type {string || null}
         */
        this.Password = null;

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
        this.Password = 'Password' in params ? params.Password : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateUser response structure.
 * @class
 */
class UpdateUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User information after update
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {User || null}
         */
        this.User = null;

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

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetPassword request structure.
 * @class
 */
class SetPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Password
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * Salt location
 * @class
 */
class SaltLocation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Password salt type. Valid values: `HEAD`, `TAIL`, `OTHER`.
         * @type {string || null}
         */
        this.SaltLocationTypeEnum = null;

        /**
         * Salting rule
         * @type {SaltLocationRule || null}
         */
        this.SaltLocationRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SaltLocationTypeEnum = 'SaltLocationTypeEnum' in params ? params.SaltLocationTypeEnum : null;

        if (params.SaltLocationRule) {
            let obj = new SaltLocationRule();
            obj.deserialize(params.SaltLocationRule)
            this.SaltLocationRule = obj;
        }

    }
}

/**
 * UpdateUserStatus request structure.
 * @class
 */
class UpdateUserStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * User status

<li> **NORMAL** </li>	  Normal
<li> **LOCK** </li>  Locked
<li> **FREEZE** </li>	  Frozen
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
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ListJobs response structure.
 * @class
 */
class ListJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of tasks
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Job> || null}
         */
        this.JobSet = null;

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

        if (params.JobSet) {
            this.JobSet = new Array();
            for (let z in params.JobSet) {
                let obj = new Job();
                obj.deserialize(params.JobSet[z]);
                this.JobSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Exported attribute mapping
 * @class
 */
class ExportPropertyMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * User attribute code
         * @type {string || null}
         */
        this.UserPropertyCode = null;

        /**
         * User attribute mapping name
         * @type {string || null}
         */
        this.ColumnName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserPropertyCode = 'UserPropertyCode' in params ? params.UserPropertyCode : null;
        this.ColumnName = 'ColumnName' in params ? params.ColumnName : null;

    }
}

/**
 * LinkAccount response structure.
 * @class
 */
class LinkAccountResponse extends  AbstractModel {
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
 * CreateUser request structure.
 * @class
 */
class CreateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * Mobile number
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * Email address
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Nickname
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * Address
         * @type {string || null}
         */
        this.Address = null;

        /**
         * User group ID
         * @type {Array.<string> || null}
         */
        this.UserGroup = null;

        /**
         * Date of birth
         * @type {number || null}
         */
        this.Birthdate = null;

        /**
         * Custom attribute
         * @type {Array.<MemberMap> || null}
         */
        this.CustomizationAttributes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.UserGroup = 'UserGroup' in params ? params.UserGroup : null;
        this.Birthdate = 'Birthdate' in params ? params.Birthdate : null;

        if (params.CustomizationAttributes) {
            this.CustomizationAttributes = new Array();
            for (let z in params.CustomizationAttributes) {
                let obj = new MemberMap();
                obj.deserialize(params.CustomizationAttributes[z]);
                this.CustomizationAttributes.push(obj);
            }
        }

    }
}

/**
 * Password salt
 * @class
 */
class Salt extends  AbstractModel {
    constructor(){
        super();

        /**
         * Salt value
         * @type {string || null}
         */
        this.SaltValue = null;

        /**
         * Salt value location
         * @type {SaltLocation || null}
         */
        this.SaltLocation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SaltValue = 'SaltValue' in params ? params.SaltValue : null;

        if (params.SaltLocation) {
            let obj = new SaltLocation();
            obj.deserialize(params.SaltLocation)
            this.SaltLocation = obj;
        }

    }
}

/**
 * DeleteUsers response structure.
 * @class
 */
class DeleteUsersResponse extends  AbstractModel {
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
 * CreateApiImportUserJob request structure.
 * @class
 */
class CreateApiImportUserJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * Imported user data
         * @type {Array.<ImportUser> || null}
         */
        this.DataFlowUserCreateList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;

        if (params.DataFlowUserCreateList) {
            this.DataFlowUserCreateList = new Array();
            for (let z in params.DataFlowUserCreateList) {
                let obj = new ImportUser();
                obj.deserialize(params.DataFlowUserCreateList[z]);
                this.DataFlowUserCreateList.push(obj);
            }
        }

    }
}

/**
 * CreateFileExportUserJob response structure.
 * @class
 */
class CreateFileExportUserJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data flow task
         * @type {Job || null}
         */
        this.Job = null;

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

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApiImportUserJob response structure.
 * @class
 */
class CreateApiImportUserJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data flow task
         * @type {Job || null}
         */
        this.Job = null;

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

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LinkAccount request structure.
 * @class
 */
class LinkAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * Primary user ID
         * @type {string || null}
         */
        this.PrimaryUserId = null;

        /**
         * Secondary user ID
         * @type {string || null}
         */
        this.SecondaryUserId = null;

        /**
         * Fusion attribute

<li> **PHONENUMBER** </li>	  Mobile number
<li> **EMAIL** </li>  Email
         * @type {string || null}
         */
        this.UserLinkedOnAttribute = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.PrimaryUserId = 'PrimaryUserId' in params ? params.PrimaryUserId : null;
        this.SecondaryUserId = 'SecondaryUserId' in params ? params.SecondaryUserId : null;
        this.UserLinkedOnAttribute = 'UserLinkedOnAttribute' in params ? params.UserLinkedOnAttribute : null;

    }
}

/**
 * ListLogMessageByCondition request structure.
 * @class
 */
class ListLogMessageByConditionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User pool ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * Pagination data
         * @type {Pageable || null}
         */
        this.Pageable = null;

        /**
         * Start timestamp accurate to the millisecond
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Valid values of `Key`: `events`.

<li> **events** </li>	Values can be one or multiple items in ["SIGNUP", "USER_UPDATE", "USER_DELETE", "USER_CREATE", "ACCOUNT_LINKING"].
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
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;

        if (params.Pageable) {
            let obj = new Pageable();
            obj.deserialize(params.Pageable)
            this.Pageable = obj;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

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
 * Salt location rule
 * @class
 */
class SaltLocationRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Expression
         * @type {string || null}
         */
        this.Regex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Regex = 'Regex' in params ? params.Regex : null;

    }
}

/**
 * Map data type
 * @class
 */
class MemberMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Value
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * ListUser response structure.
 * @class
 */
class ListUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Pagination object
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Pageable || null}
         */
        this.Pageable = null;

        /**
         * List of users
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<User> || null}
         */
        this.Content = null;

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

        if (params.Pageable) {
            let obj = new Pageable();
            obj.deserialize(params.Pageable)
            this.Pageable = obj;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new User();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Log details
 * @class
 */
class LogMessage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log ID
         * @type {string || null}
         */
        this.LogId = null;

        /**
         * Tenant ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TenantId = null;

        /**
         * User pool ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * Event code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EventCode = null;

        /**
         * Event timestamp in milliseconds
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EventDate = null;

        /**
         * Description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Event participant

<li> **TENANT** </li>  Tenant
<li> **USER** </li>  User
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Participant = null;

        /**
         * Application `clientId`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationClientId = null;

        /**
         * Application name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * Authentication source ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthSourceId = null;

        /**
         * Authentication source name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthSourceName = null;

        /**
         * Authentication source type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthSourceType = null;

        /**
         * Authentication source category
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthSourceCategory = null;

        /**
         * IP address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * User agent
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * User ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
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
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.TenantId = 'TenantId' in params ? params.TenantId : null;
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.EventCode = 'EventCode' in params ? params.EventCode : null;
        this.EventDate = 'EventDate' in params ? params.EventDate : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Participant = 'Participant' in params ? params.Participant : null;
        this.ApplicationClientId = 'ApplicationClientId' in params ? params.ApplicationClientId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.AuthSourceId = 'AuthSourceId' in params ? params.AuthSourceId : null;
        this.AuthSourceName = 'AuthSourceName' in params ? params.AuthSourceName : null;
        this.AuthSourceType = 'AuthSourceType' in params ? params.AuthSourceType : null;
        this.AuthSourceCategory = 'AuthSourceCategory' in params ? params.AuthSourceCategory : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Detail = 'Detail' in params ? params.Detail : null;

    }
}

/**
 * ListLogMessageByCondition response structure.
 * @class
 */
class ListLogMessageByConditionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Pagination object
         * @type {Pageable || null}
         */
        this.Pageable = null;

        /**
         * List of logs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LogMessage> || null}
         */
        this.Content = null;

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

        if (params.Pageable) {
            let obj = new Pageable();
            obj.deserialize(params.Pageable)
            this.Pageable = obj;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new LogMessage();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    UpdateUserRequest: UpdateUserRequest,
    DescribeUserByIdRequest: DescribeUserByIdRequest,
    ListUserRequest: ListUserRequest,
    ResetPasswordRequest: ResetPasswordRequest,
    ErrorDetails: ErrorDetails,
    DeleteUsersRequest: DeleteUsersRequest,
    ImportUser: ImportUser,
    UpdateUserStatusResponse: UpdateUserStatusResponse,
    FailedUsers: FailedUsers,
    ListUserByPropertyRequest: ListUserByPropertyRequest,
    CreateUserResponse: CreateUserResponse,
    Filter: Filter,
    SetPasswordResponse: SetPasswordResponse,
    ListUserByPropertyResponse: ListUserByPropertyResponse,
    ListJobsRequest: ListJobsRequest,
    DescribeUserByIdResponse: DescribeUserByIdResponse,
    Job: Job,
    CreateFileExportUserJobRequest: CreateFileExportUserJobRequest,
    User: User,
    Pageable: Pageable,
    ResetPasswordResponse: ResetPasswordResponse,
    UpdateUserResponse: UpdateUserResponse,
    SetPasswordRequest: SetPasswordRequest,
    SaltLocation: SaltLocation,
    UpdateUserStatusRequest: UpdateUserStatusRequest,
    ListJobsResponse: ListJobsResponse,
    ExportPropertyMap: ExportPropertyMap,
    LinkAccountResponse: LinkAccountResponse,
    CreateUserRequest: CreateUserRequest,
    Salt: Salt,
    DeleteUsersResponse: DeleteUsersResponse,
    CreateApiImportUserJobRequest: CreateApiImportUserJobRequest,
    CreateFileExportUserJobResponse: CreateFileExportUserJobResponse,
    CreateApiImportUserJobResponse: CreateApiImportUserJobResponse,
    LinkAccountRequest: LinkAccountRequest,
    ListLogMessageByConditionRequest: ListLogMessageByConditionRequest,
    SaltLocationRule: SaltLocationRule,
    MemberMap: MemberMap,
    ListUserResponse: ListUserResponse,
    LogMessage: LogMessage,
    ListLogMessageByConditionResponse: ListLogMessageByConditionResponse,

}
