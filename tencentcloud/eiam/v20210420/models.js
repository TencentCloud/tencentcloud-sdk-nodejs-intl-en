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
 * DescribeOrgNode response structure.
 * @class
 */
class DescribeOrgNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Displayed organization node name, which can contain up to 64 characters and is the same as the organization name by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * Last modification time of the organization node in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastModifiedDate = null;

        /**
         * External ID of the organization node.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomizedOrgNodeId = null;

        /**
         * Parent node ID of the current organization node.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ParentOrgNodeId = null;

        /**
         * Organization node ID, which is globally unique.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * Data source.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * Organization node creation time in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedDate = null;

        /**
         * List of sub-nodes under the current organization node.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OrgNodeChildInfo> || null}
         */
        this.OrgNodeChildInfo = null;

        /**
         * Organization node description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

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
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;
        this.CustomizedOrgNodeId = 'CustomizedOrgNodeId' in params ? params.CustomizedOrgNodeId : null;
        this.ParentOrgNodeId = 'ParentOrgNodeId' in params ? params.ParentOrgNodeId : null;
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;

        if (params.OrgNodeChildInfo) {
            this.OrgNodeChildInfo = new Array();
            for (let z in params.OrgNodeChildInfo) {
                let obj = new OrgNodeChildInfo();
                obj.deserialize(params.OrgNodeChildInfo[z]);
                this.OrgNodeChildInfo.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListApplications request structure.
 * @class
 */
class ListApplicationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fuzzy match search criterion. You can combine multiple search criteria and search in multiple data ranges. In addition, multiple query methods such as full match, partial match, and range match are supported. Specifically, double quotation marks ("") indicate full match, and an asterisk (*) at the end of the field indicates partial match. The fuzzy match search feature and the exact match query feature will not take effect at the same time. If both `SearchCondition` and `ApplicationIdList` are specified, `ApplicationIdList` will take effect by default for exact match query; otherwise, the information of all applications will be returned by default.
         * @type {ApplicationInfoSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * Set of sort criteria. Valid values: DisplayName: application name; CreatedDate: creation time; LastModifiedDate: last modification time. If this field is left empty, the results will be sorted in alphabetical order by application name.
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * Set of sort criteria. Valid values: DisplayName: application name; CreatedDate: creation time; LastModifiedDate: last modification time. If this field is left empty, the results will be sorted in alphabetical order by application name.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results read per page. The `Offset` and `Limit` fields need to be used together; otherwise, the query results will not be paginated.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Application ID list, through which the corresponding application information will be matched exactly. The fuzzy match search feature and the exact match query feature will not take effect at the same time. If both `SearchCondition` and `ApplicationIdList` are specified, `ApplicationIdList` will take effect by default for exact match query; otherwise, the information of all applications will be returned by default.
         * @type {Array.<string> || null}
         */
        this.ApplicationIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SearchCondition) {
            let obj = new ApplicationInfoSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ApplicationIdList = 'ApplicationIdList' in params ? params.ApplicationIdList : null;

    }
}

/**
 * User attribute search criteria.
 * @class
 */
class UserSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username, which can contain up to 64 characters.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * User's mobile number.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * User's email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * User status. Valid values: NORMAL: normal; FREEZE: frozen; LOCKED: locked; NOT_ENABLED: disabled.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * User creation time in ISO 8601 format.
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * The user's last update time.
         * @type {string || null}
         */
        this.LastUpdateTime = null;

        /**
         * Search by name. The match criteria include username and user ID.
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * AddAccountToAccountGroup response structure.
 * @class
 */
class AddAccountToAccountGroupResponse extends  AbstractModel {
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
 * DeleteUser request structure.
 * @class
 */
class DeleteUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username, which can contain up to 32 characters. You need to select either `UserName` or `UserId` as the search criterion; if both are selected, `UserName` will be used by default.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * User ID. You need to select either `UserName` or `UserId` as the search criterion. If both are selected, `UserName` will be used by default.
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * Returned list of eligible user data
 * @class
 */
class AuthorizationUserResouceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Authorized resource
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Inheritance relationship
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {InheritedForm || null}
         */
        this.InheritedForm = null;

        /**
         * Application account
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ApplicationAccounts = null;

        /**
         * Resource name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.InheritedForm) {
            let obj = new InheritedForm();
            obj.deserialize(params.InheritedForm)
            this.InheritedForm = obj;
        }
        this.ApplicationAccounts = 'ApplicationAccounts' in params ? params.ApplicationAccounts : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;

    }
}

/**
 * CreateAppAccount response structure.
 * @class
 */
class CreateAppAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountId = null;

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
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAuthorizedApplicationsToUserGroup request structure.
 * @class
 */
class ListAuthorizedApplicationsToUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group ID.
         * @type {string || null}
         */
        this.UserGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

    }
}

/**
 * ModifyApplication response structure.
 * @class
 */
class ModifyApplicationResponse extends  AbstractModel {
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
 * User information list under the organization sub-node
 * @class
 */
class OrgNodeChildUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization node ID, which is globally unique and can contain up to 64 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * User information list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserInfo> || null}
         */
        this.UserInfo = null;

        /**
         * Total number of users under the current organization node.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalUserNum = null;

        /**
         * Organization ID path.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgNodeIdPath = null;

        /**
         * Organization name path.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgNodeNamePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;

        if (params.UserInfo) {
            this.UserInfo = new Array();
            for (let z in params.UserInfo) {
                let obj = new UserInfo();
                obj.deserialize(params.UserInfo[z]);
                this.UserInfo.push(obj);
            }
        }
        this.TotalUserNum = 'TotalUserNum' in params ? params.TotalUserNum : null;
        this.OrgNodeIdPath = 'OrgNodeIdPath' in params ? params.OrgNodeIdPath : null;
        this.OrgNodeNamePath = 'OrgNodeNamePath' in params ? params.OrgNodeNamePath : null;

    }
}

/**
 * DeleteAccountGroup request structure.
 * @class
 */
class DeleteAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of account group IDs.
         * @type {Array.<string> || null}
         */
        this.AccountGroupIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupIdList = 'AccountGroupIdList' in params ? params.AccountGroupIdList : null;

    }
}

/**
 * AddUserToUserGroup request structure.
 * @class
 */
class AddUserToUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the users to be added to the user group.
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * User group ID, which is globally unique.
         * @type {string || null}
         */
        this.UserGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

    }
}

/**
 * Application information list.
 * @class
 */
class ApplicationInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID, which is globally unique.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Displayed application name, which can contain up to 64 characters and is the same as the application name by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * Application creation time in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedDate = null;

        /**
         * Last update time in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastModifiedDate = null;

        /**
         * Application status.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.AppStatus = null;

        /**
         * Application icon.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Icon = null;

        /**
         * Application type.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * Client ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;
        this.AppStatus = 'AppStatus' in params ? params.AppStatus : null;
        this.Icon = 'Icon' in params ? params.Icon : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;

    }
}

/**
 * ListUsers response structure.
 * @class
 */
class ListUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of users returned for the query.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserInformation> || null}
         */
        this.UserList = null;

        /**
         * Total number of users returned for the query, which will be returned only when the `IncludeTotal` input parameter is set to `true`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.UserList) {
            this.UserList = new Array();
            for (let z in params.UserList) {
                let obj = new UserInformation();
                obj.deserialize(params.UserList[z]);
                this.UserList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAppAccount request structure.
 * @class
 */
class DeleteAppAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of account IDs .
         * @type {Array.<string> || null}
         */
        this.AccountIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountIdList = 'AccountIdList' in params ? params.AccountIdList : null;

    }
}

/**
 * Returned user group list.
 * @class
 */
class UserGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Nickname, which can contain up to 64 characters and is the same as the username by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * User group ID, which is globally unique and can contain up to 64 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * User group remarks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;

    }
}

/**
 * UpdateOrgNode request structure.
 * @class
 */
class UpdateOrgNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization node ID, which is globally unique.
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * Organization node name, which can contain up to 64 characters.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * Organization node description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * External ID of the organization node, which is optional and customizable. If this parameter is specified, its uniqueness will be verified.
         * @type {string || null}
         */
        this.CustomizedOrgNodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CustomizedOrgNodeId = 'CustomizedOrgNodeId' in params ? params.CustomizedOrgNodeId : null;

    }
}

/**
 * CreateOrgNode request structure.
 * @class
 */
class CreateOrgNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization node name, which can contain up to 64 characters.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * Parent organization node ID. If this parameter is left empty, the organization will be created under the root organization node by default.
         * @type {string || null}
         */
        this.ParentOrgNodeId = null;

        /**
         * Organization node description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * External ID of the organization node, which is optional and customizable. If this parameter is specified, its uniqueness will be verified.
         * @type {string || null}
         */
        this.CustomizedOrgNodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.ParentOrgNodeId = 'ParentOrgNodeId' in params ? params.ParentOrgNodeId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CustomizedOrgNodeId = 'CustomizedOrgNodeId' in params ? params.CustomizedOrgNodeId : null;

    }
}

/**
 * RemoveUserFromUserGroup request structure.
 * @class
 */
class RemoveUserFromUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the users to be added to the user group.
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * User group ID, which is globally unique.
         * @type {string || null}
         */
        this.UserGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

    }
}

/**
 * ModifyAppAccount request structure.
 * @class
 */
class ModifyAppAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account ID.
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * Account name. When this parameter is not specified, the name will not be modified.
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Account password. When this parameter is not specified, the password will not be changed.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Description. When this parameter is not specified, the description will not be modified.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ListAuthorizedApplicationsToUserGroup response structure.
 * @class
 */
class ListAuthorizedApplicationsToUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the applications accessible to the user group.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ApplicationIds = null;

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
        this.ApplicationIds = 'ApplicationIds' in params ? params.ApplicationIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAccountGroup response structure.
 * @class
 */
class DeleteAccountGroupResponse extends  AbstractModel {
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
 * User group attribute search criteria.
 * @class
 */
class UserGroupInfoSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * Search by name. The match criteria include user group name and user group ID.
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * DescribeUserInfo request structure.
 * @class
 */
class DescribeUserInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username, which can contain up to 64 characters. You need to specify at least `UserName` or `UserId`. If both are specified, `UserName` will be used first.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * User ID, which can contain up to 64 characters. You need to specify at least `UserName` or `UserId`. If both are specified, `UserName` will be used first.
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * ListAuthorizedApplicationsToOrgNode request structure.
 * @class
 */
class ListAuthorizedApplicationsToOrgNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization node ID.
         * @type {string || null}
         */
        this.OrgNodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;

    }
}

/**
 * DescribePublicKey response structure.
 * @class
 */
class DescribePublicKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Public key information used for JWT signature verification.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * JWT key ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Application ID, which is globally unique.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationId = null;

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
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrgNode request structure.
 * @class
 */
class DescribeOrgNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization node ID, which is globally unique and can contain up to 64 characters. If this parameter is left empty, the information of the root organization node will be read by default.
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * Whether to read the information of its sub-nodes. When this parameter is left empty or specified as `false`, only the information of the current organization node will be read by default. When it is specified as `true`, the information of the current organization node and its level-1 sub-nodes will be read.
         * @type {boolean || null}
         */
        this.IncludeOrgNodeChildInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.IncludeOrgNodeChildInfo = 'IncludeOrgNodeChildInfo' in params ? params.IncludeOrgNodeChildInfo : null;

    }
}

/**
 * CreateAccountGroup request structure.
 * @class
 */
class CreateAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Account group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeUserGroup request structure.
 * @class
 */
class DescribeUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group ID, which is globally unique.
         * @type {string || null}
         */
        this.UserGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

    }
}

/**
 * CreateOrgNode response structure.
 * @class
 */
class CreateOrgNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization node ID, which is globally unique.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgNodeId = null;

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
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * User group attribute search criteria in the list of the user's user groups.
 * @class
 */
class UserGroupInformationSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * Search by name. The match criteria include user group name.
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * Account group query parameters
 * @class
 */
class AccountGroupSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

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
         * Returned ID of the newly created user, which is globally unique.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserId = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Third-Party account information.
 * @class
 */
class ThirdPartyAccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Third-Party account code. `2` indicates WeCom account.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountCode = null;

        /**
         * Username of the account.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountCode = 'AccountCode' in params ? params.AccountCode : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;

    }
}

/**
 * ModifyAppAccount response structure.
 * @class
 */
class ModifyAppAccountResponse extends  AbstractModel {
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
 * DeleteUser response structure.
 * @class
 */
class DeleteUserResponse extends  AbstractModel {
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
 * ListUsersInUserGroup response structure.
 * @class
 */
class ListUsersInUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group ID, which is globally unique.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * Returned user information list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserInfo> || null}
         */
        this.UserInfo = null;

        /**
         * Total number of returned user information items.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalNum = null;

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
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

        if (params.UserInfo) {
            this.UserInfo = new Array();
            for (let z in params.UserInfo) {
                let obj = new UserInfo();
                obj.deserialize(params.UserInfo[z]);
                this.UserInfo.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAppAccount request structure.
 * @class
 */
class CreateAppAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Account name
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Account password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeApplication response structure.
 * @class
 */
class DescribeApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Displayed application name, which can contain up to 64 characters and is the same as the application name by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * Last modification time of the application in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastModifiedDate = null;

        /**
         * Client ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientId = null;

        /**
         * Application type, i.e., the application template type selected during application creation.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * Application creation time in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedDate = null;

        /**
         * Application ID, which is globally unique.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Token validity period in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TokenExpired = null;

        /**
         * Client secret.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientSecret = null;

        /**
         * Public key information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * Authorization address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthorizeUrl = null;

        /**
         * Access address of the application icon image.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IconUrl = null;

        /**
         * Security level.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecureLevel = null;

        /**
         * Application status.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.AppStatus = null;

        /**
         * Description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.TokenExpired = 'TokenExpired' in params ? params.TokenExpired : null;
        this.ClientSecret = 'ClientSecret' in params ? params.ClientSecret : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.AuthorizeUrl = 'AuthorizeUrl' in params ? params.AuthorizeUrl : null;
        this.IconUrl = 'IconUrl' in params ? params.IconUrl : null;
        this.SecureLevel = 'SecureLevel' in params ? params.SecureLevel : null;
        this.AppStatus = 'AppStatus' in params ? params.AppStatus : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAppAccount response structure.
 * @class
 */
class DescribeAppAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records returned for the query.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Application ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Returned list of eligible data.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AppAccountInfo> || null}
         */
        this.AppAccountList = null;

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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.AppAccountList) {
            this.AppAccountList = new Array();
            for (let z in params.AppAccountList) {
                let obj = new AppAccountInfo();
                obj.deserialize(params.AppAccountList[z]);
                this.AppAccountList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Returned user group list.
 * @class
 */
class UserGroupInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group ID.
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * User group name.
         * @type {string || null}
         */
        this.UserGroupName = null;

        /**
         * Last update time in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastModifiedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;
        this.UserGroupName = 'UserGroupName' in params ? params.UserGroupName : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;

    }
}

/**
 * Displays user attribute search criteria under the organization.
 * @class
 */
class ListUsersInOrgNodeSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username, which can contain up to 64 characters.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * User's mobile number.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * User's email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * User status. Valid values: NORMAL: normal; FREEZE: frozen; LOCKED: locked; NOT_ENABLED: disabled.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * User creation time in ISO 8601 format.
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Last update time of the user.
         * @type {string || null}
         */
        this.LastUpdateTime = null;

        /**
         * Search by name. The match criteria include username and user's mobile number.
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * DescribeAccountGroup response structure.
 * @class
 */
class DescribeAccountGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records returned for the query.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Application ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Returned list of eligible data.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AccountGroupInfo> || null}
         */
        this.AccountGroupList = null;

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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.AccountGroupList) {
            this.AccountGroupList = new Array();
            for (let z in params.AccountGroupList) {
                let obj = new AccountGroupInfo();
                obj.deserialize(params.AccountGroupList[z]);
                this.AccountGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUserGroup request structure.
 * @class
 */
class CreateUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group nickname, which is unique and can contain up to 64 characters.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * User group remarks, which can contain up to 512 characters.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeUserInfo response structure.
 * @class
 */
class DescribeUserInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * User status. Valid values: NORMAL: normal; FREEZE: frozen; LOCKED: locked; NOT_ENABLED: disabled.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Nickname
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * User remarks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * List of IDs of the user's user groups.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.UserGroupIds = null;

        /**
         * User ID, which can contain up to 64 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * User's email address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * User's mobile number.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * Unique ID of the user's primary organization.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * Data source
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * User expiration time in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpirationTime = null;

        /**
         * User activation time in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActivationTime = null;

        /**
         * Whether the password of the current user needs to be reset. `false` indicates no.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.PwdNeedReset = null;

        /**
         * List of IDs of the user's secondary organizations.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SecondaryOrgNodeIdList = null;

        /**
         * Whether the user is an admin. Valid values: 0: no; 1: yes.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AdminFlag = null;

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
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UserGroupIds = 'UserGroupIds' in params ? params.UserGroupIds : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.ExpirationTime = 'ExpirationTime' in params ? params.ExpirationTime : null;
        this.ActivationTime = 'ActivationTime' in params ? params.ActivationTime : null;
        this.PwdNeedReset = 'PwdNeedReset' in params ? params.PwdNeedReset : null;
        this.SecondaryOrgNodeIdList = 'SecondaryOrgNodeIdList' in params ? params.SecondaryOrgNodeIdList : null;
        this.AdminFlag = 'AdminFlag' in params ? params.AdminFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteOrgNode request structure.
 * @class
 */
class DeleteOrgNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization node ID, which is globally unique.
         * @type {string || null}
         */
        this.OrgNodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;

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
         * Information of the users failed to be deleted. When the business parameter is `DeleteIdList`, this field will return the list of IDs of the users failed to be deleted. When the business parameter is `DeleteNameList`, this field will return the list of usernames of the users failed to be deleted.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FailedItems = null;

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
        this.FailedItems = 'FailedItems' in params ? params.FailedItems : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * List of queried account information.
 * @class
 */
class AppAccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account ID.
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * Account name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * User information list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LinkUserInfo> || null}
         */
        this.UserList = null;

        /**
         * Description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;

        if (params.UserList) {
            this.UserList = new Array();
            for (let z in params.UserList) {
                let obj = new LinkUserInfo();
                obj.deserialize(params.UserList[z]);
                this.UserList.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;

    }
}

/**
 * DescribeAccountGroup request structure.
 * @class
 */
class DescribeAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Search criterion. You can combine multiple search criteria and search in multiple data ranges. In addition, multiple query methods such as full match, partial match, and range match are supported. Specifically, double quotation marks ("") indicate full match, an asterisk (*) at the end of the field indicates partial match, and an empty field indicates to query the full table by default.
         * @type {AccountGroupSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.SearchCondition) {
            let obj = new AccountGroupSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Account query parameters
 * @class
 */
class AppAccountSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * DescribeAppAccount request structure.
 * @class
 */
class DescribeAppAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Search criterion. You can combine multiple search criteria and search in multiple data ranges. In addition, multiple query methods such as full match, partial match, and range match are supported. Specifically, double quotation marks ("") indicate full match, an asterisk (*) at the end of the field indicates partial match, and an empty field indicates to query the full table by default.
         * @type {AppAccountSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.SearchCondition) {
            let obj = new AppAccountSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ListUsersInUserGroup request structure.
 * @class
 */
class ListUsersInUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group ID, which is globally unique.
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * User attribute search criterion. The supported search criteria include username, mobile number, email address, user locking status, user freezing status, creation time, and last modification time, which can also be combined. In addition, multiple query methods such as full match, partial match, and range match are supported. Specifically, double quotation marks ("") indicate full match, an asterisk (*) at the end of the field indicates partial match, brackets separated by a comma ([Min,Max]) indicate query within a closed interval, braces separated by a comma ({Min,Max}) indicate query within an open interval, and a bracket and a brace can be used together (for example, {Min,Max] indicates that the minimum value is excluded and the maximum value is included in the query). Range query supports using an asterisk (for example, {20,*] indicates an interval including all data greater than 20) and querying by time period. The supported attributes include creation time (CreationTime) and last modification time (LastUpdateTime) in ISO 8601 format, such as `2021-01-13T09:44:07.182+0000`.
         * @type {UserSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * Set of sort criteria. The supported attributes for sorting include username (UserName), nickname (DisplayName), mobile number (Phone), email address (Email), user status (Status), creation time (CreatedDate), and last modification time (LastModifiedDate). If this field is left empty, the results will be sorted in alphabetical order by nickname (DisplayName).
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * Pagination offset. Default value: 0. The `Offset` and `Limit` fields need to be used together; otherwise, the query results will not be paginated, and up to 50 users will be returned.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results read per page. Default value: 50. Maximum value: 100. The `Offset` and `Limit` fields need to be used together; otherwise, the query results will not be paginated, and up to 50 users will be returned.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

        if (params.SearchCondition) {
            let obj = new UserSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * User information list.
 * @class
 */
class UserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID, which is globally unique and can contain up to 64 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Nickname, which can contain up to 64 characters and is the same as the username by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * Username.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * User's mobile number.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * Email address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * User status.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Data source.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;

    }
}

/**
 * DeleteAppAccount response structure.
 * @class
 */
class DeleteAppAccountResponse extends  AbstractModel {
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
 * ModifyAccountGroup request structure.
 * @class
 */
class ModifyAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Account group name. When this parameter is not specified, the name will not be modified.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Description. When this parameter is not specified, the description will not be modified.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ListUsersInOrgNode response structure.
 * @class
 */
class ListUsersInOrgNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User information list under the organization sub-node.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OrgNodeChildUserInfo> || null}
         */
        this.OrgNodeChildUserInfo = null;

        /**
         * Organization node ID, which is globally unique and can contain up to 64 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * User information list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserInfo> || null}
         */
        this.UserInfo = null;

        /**
         * Total number of users under the current organization node.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalUserNum = null;

        /**
         * Organization ID path.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgNodeIdPath = null;

        /**
         * Organization name path.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgNodeNamePath = null;

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

        if (params.OrgNodeChildUserInfo) {
            this.OrgNodeChildUserInfo = new Array();
            for (let z in params.OrgNodeChildUserInfo) {
                let obj = new OrgNodeChildUserInfo();
                obj.deserialize(params.OrgNodeChildUserInfo[z]);
                this.OrgNodeChildUserInfo.push(obj);
            }
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;

        if (params.UserInfo) {
            this.UserInfo = new Array();
            for (let z in params.UserInfo) {
                let obj = new UserInfo();
                obj.deserialize(params.UserInfo[z]);
                this.UserInfo.push(obj);
            }
        }
        this.TotalUserNum = 'TotalUserNum' in params ? params.TotalUserNum : null;
        this.OrgNodeIdPath = 'OrgNodeIdPath' in params ? params.OrgNodeIdPath : null;
        this.OrgNodeNamePath = 'OrgNodeNamePath' in params ? params.OrgNodeNamePath : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListApplicationAuthorizations request structure.
 * @class
 */
class ListApplicationAuthorizationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query type. Valid values: User: user; UserGroup: user group; OrgNode: organization.
         * @type {string || null}
         */
        this.EntityType = null;

        /**
         * Search criterion. You can combine multiple search criteria and search in multiple data ranges. In addition, multiple query methods such as full match, partial match, and range match are supported. Specifically, double quotation marks ("") indicate full match, an asterisk (*) at the end of the field indicates partial match, and an empty field indicates to query the full table by default.
         * @type {AuthorizationInfoSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * Set of sort criteria. You can sort the results by last modification time (lastModifiedDate). If this field is left empty, the results will be sorted in alphabetical order by application name.
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * Pagination offset. The `Offset` and `Limit` fields need to be used together; otherwise, the query results will not be paginated.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results read per page. The `Offset` and `Limit` fields need to be used together; otherwise, the query results will not be paginated.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntityType = 'EntityType' in params ? params.EntityType : null;

        if (params.SearchCondition) {
            let obj = new AuthorizationInfoSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyAccountGroup response structure.
 * @class
 */
class ModifyAccountGroupResponse extends  AbstractModel {
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
 * DeleteUsers request structure.
 * @class
 */
class DeleteUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the users to be deleted. You need to specify at least `DeleteIdList` or `DeleteNameList`. If both are specified, `DeleteNameList` will be used first.
         * @type {Array.<string> || null}
         */
        this.DeleteIdList = null;

        /**
         * List of usernames of the users to be deleted. You need to specify at least `DeleteIdList` or `DeleteNameList`. If both are specified, `DeleteNameList` will be used first.
         * @type {Array.<string> || null}
         */
        this.DeleteNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeleteIdList = 'DeleteIdList' in params ? params.DeleteIdList : null;
        this.DeleteNameList = 'DeleteNameList' in params ? params.DeleteNameList : null;

    }
}

/**
 * List of queried account group information.
 * @class
 */
class AccountGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Account group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreatedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;

    }
}

/**
 * List of sub-nodes under the current organization node
 * @class
 */
class OrgNodeChildInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Displayed organization node name, which can contain up to 64 characters and is the same as the organization name by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * Last modification time of the organization node in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastModifiedDate = null;

        /**
         * External ID of the organization node, which is optional and customizable.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomizedOrgNodeId = null;

        /**
         * Parent node ID of the current organization node.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ParentOrgNodeId = null;

        /**
         * Organization node ID, which is globally unique.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * Data source.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * Organization node creation time in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedDate = null;

        /**
         * Organization node description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;
        this.CustomizedOrgNodeId = 'CustomizedOrgNodeId' in params ? params.CustomizedOrgNodeId : null;
        this.ParentOrgNodeId = 'ParentOrgNodeId' in params ? params.ParentOrgNodeId : null;
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ListAuthorizedApplicationsToUser request structure.
 * @class
 */
class ListAuthorizedApplicationsToUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Whether the query scope includes the application access of the user groups and organizations associated with the user. Valid values: false: no; true: yes. Default value: false.
         * @type {boolean || null}
         */
        this.IncludeInheritedAuthorizations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.IncludeInheritedAuthorizations = 'IncludeInheritedAuthorizations' in params ? params.IncludeInheritedAuthorizations : null;

    }
}

/**
 * DeleteOrgNode response structure.
 * @class
 */
class DeleteOrgNodeResponse extends  AbstractModel {
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
 * ListAccountInAccountGroup response structure.
 * @class
 */
class ListAccountInAccountGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of accounts returned for the query.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AppAccountInfo> || null}
         */
        this.AccountList = null;

        /**
         * Total number of accounts returned for the query.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Account group ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountGroupId = null;

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

        if (params.AccountList) {
            this.AccountList = new Array();
            for (let z in params.AccountList) {
                let obj = new AppAccountInfo();
                obj.deserialize(params.AccountList[z]);
                this.AccountList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserResourcesAuthorization response structure.
 * @class
 */
class DescribeUserResourcesAuthorizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique application ID.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Application account.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ApplicationAccounts = null;

        /**
         * Unique ID of the authorized user.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Username of the authorized user.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Returned resource list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AuthorizationUserResouceInfo> || null}
         */
        this.AuthorizationUserResourceList = null;

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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationAccounts = 'ApplicationAccounts' in params ? params.ApplicationAccounts : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

        if (params.AuthorizationUserResourceList) {
            this.AuthorizationUserResourceList = new Array();
            for (let z in params.AuthorizationUserResourceList) {
                let obj = new AuthorizationUserResouceInfo();
                obj.deserialize(params.AuthorizationUserResourceList[z]);
                this.AuthorizationUserResourceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUsersInOrgNode request structure.
 * @class
 */
class ListUsersInOrgNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization node ID, which is globally unique and can contain up to 64 characters. If this parameter is left empty, the user information under the root organization node will be read by default.
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * Whether to read the information of its sub-nodes. When this parameter is left empty or specified as `false`, only the information of the current organization node will be read by default. When it is specified as `true`, the information of the current organization node and its level-1 sub-nodes will be read.
         * @type {boolean || null}
         */
        this.IncludeOrgNodeChildInfo = null;

        /**
         * User attribute search criterion. The supported search criteria include username, mobile number, email address, user locking status, user freezing status, creation time, and last modification time, which can also be combined. In addition, multiple query methods such as full match, partial match, and range match are supported. Specifically, double quotation marks ("") indicate full match, an asterisk (*) at the end of the field indicates partial match, brackets separated by a comma ([Min,Max]) indicate query within a closed interval, braces separated by a comma ({Min,Max}) indicate query within an open interval, and a bracket and a brace can be used together (for example, {Min,Max] indicates that the minimum value is excluded and the maximum value is included in the query). Range query supports using an asterisk (for example, {20,*] indicates an interval including all data greater than 20) and querying by time period. The supported attributes include creation time (CreationTime) and last modification time (LastUpdateTime) in ISO 8601 format, such as `2021-01-13T09:44:07.182+0000`.
         * @type {ListUsersInOrgNodeSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * Set of sort criteria. The supported attributes for sorting include username (UserName), mobile number (Phone), email address (Email), user status (Status), creation time (CreatedDate), and last modification time (LastModifiedDate). If this field is left empty, the results will be sorted in alphabetical order by nickname (DisplayName).
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * Pagination offset. Default value: 0. The `Offset` and `Limit` fields need to be used together; otherwise, the query results will not be paginated, and up to 50 users will be returned.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results read per page. Default value: 50. Maximum value: 100. The `Offset` and `Limit` fields need to be used together; otherwise, the query results will not be paginated, and up to 50 users will be returned.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.IncludeOrgNodeChildInfo = 'IncludeOrgNodeChildInfo' in params ? params.IncludeOrgNodeChildInfo : null;

        if (params.SearchCondition) {
            let obj = new ListUsersInOrgNodeSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Application information list.
 * @class
 */
class InheritedForm extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the user's user groups.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.UserGroupIds = null;

        /**
         * List of IDs of the user's organization nodes.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.OrgNodeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupIds = 'UserGroupIds' in params ? params.UserGroupIds : null;
        this.OrgNodeIds = 'OrgNodeIds' in params ? params.OrgNodeIds : null;

    }
}

/**
 * RemoveAccountFromAccountGroup response structure.
 * @class
 */
class RemoveAccountFromAccountGroupResponse extends  AbstractModel {
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
 * ListUserGroups request structure.
 * @class
 */
class ListUserGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Search criterion. You can combine multiple search criteria and search in multiple data ranges. In addition, multiple query methods such as full match, partial match, and range match are supported. Specifically, double quotation marks ("") indicate full match, an asterisk (*) at the end of the field indicates partial match, and an empty field indicates to query the full table by default.
         * @type {UserGroupInfoSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * Set of sort criteria. The supported attributes for sorting include user group name (DisplayName), user group ID (UserGroupId), and last modification time (LastModifiedDate). If this field is left empty, the results will be sorted in alphabetical order by user group name.
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * Pagination offset. The `Offset` and `Limit` fields need to be used together; otherwise, the query results will not be paginated.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results read per page. The `Offset` and `Limit` fields need to be used together; otherwise, the query results will not be paginated.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SearchCondition) {
            let obj = new UserGroupInfoSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * UpdateOrgNode response structure.
 * @class
 */
class UpdateOrgNodeResponse extends  AbstractModel {
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
 * ListAuthorizedApplicationsToUser response structure.
 * @class
 */
class ListAuthorizedApplicationsToUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of information of the applications accessible to the user.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ApplicationAuthorizationInfo> || null}
         */
        this.ApplicationAuthorizationInfo = null;

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

        if (params.ApplicationAuthorizationInfo) {
            this.ApplicationAuthorizationInfo = new Array();
            for (let z in params.ApplicationAuthorizationInfo) {
                let obj = new ApplicationAuthorizationInfo();
                obj.deserialize(params.ApplicationAuthorizationInfo[z]);
                this.ApplicationAuthorizationInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApplication request structure.
 * @class
 */
class ModifyApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID, which is globally unique.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Security level.
         * @type {string || null}
         */
        this.SecureLevel = null;

        /**
         * Displayed application name, which can contain up to 32 characters and is the same as the application name by default.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * Application status. Valid values: true: enabled; false: disabled.
         * @type {boolean || null}
         */
        this.AppStatus = null;

        /**
         * Access address of the application icon image.
         * @type {string || null}
         */
        this.IconUrl = null;

        /**
         * Description, which can contain up to 128 characters.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.SecureLevel = 'SecureLevel' in params ? params.SecureLevel : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.AppStatus = 'AppStatus' in params ? params.AppStatus : null;
        this.IconUrl = 'IconUrl' in params ? params.IconUrl : null;
        this.Description = 'Description' in params ? params.Description : null;

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
         * Username, which can contain up to 64 characters.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * User password, which needs to be configured according to the password policy.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Nickname, which can contain up to 64 characters and is the same as the username by default.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * User remarks, which can contain up to 512 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * List of IDs of the user's user groups.
         * @type {Array.<string> || null}
         */
        this.UserGroupIds = null;

        /**
         * User's mobile number, such as `+86-1xxxxxxxxxx`.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * Unique ID of the user's primary organization. If this parameter is left empty, the user will be created under the root node by default.
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * User expiration time in ISO 8601 format.
         * @type {string || null}
         */
        this.ExpirationTime = null;

        /**
         * User's email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Whether the password needs to be reset. Default value: false (no).
         * @type {boolean || null}
         */
        this.PwdNeedReset = null;

        /**
         * List of IDs of the user's secondary organizations.
         * @type {Array.<string> || null}
         */
        this.SecondaryOrgNodeIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UserGroupIds = 'UserGroupIds' in params ? params.UserGroupIds : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.ExpirationTime = 'ExpirationTime' in params ? params.ExpirationTime : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.PwdNeedReset = 'PwdNeedReset' in params ? params.PwdNeedReset : null;
        this.SecondaryOrgNodeIdList = 'SecondaryOrgNodeIdList' in params ? params.SecondaryOrgNodeIdList : null;

    }
}

/**
 * DescribePublicKey request structure.
 * @class
 */
class DescribePublicKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID, which is globally unique.
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * RemoveAccountFromAccountGroup request structure.
 * @class
 */
class RemoveAccountFromAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account group ID
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * List of IDs of the accounts to be removed.
         * @type {Array.<string> || null}
         */
        this.AccountIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.AccountIds = 'AccountIds' in params ? params.AccountIds : null;

    }
}

/**
 * ListApplicationAuthorizations response structure.
 * @class
 */
class ListApplicationAuthorizationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned list of application authorization information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AuthorizationInfo> || null}
         */
        this.AuthorizationInfoList = null;

        /**
         * Total number of returned application information items.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.AuthorizationInfoList) {
            this.AuthorizationInfoList = new Array();
            for (let z in params.AuthorizationInfoList) {
                let obj = new AuthorizationInfo();
                obj.deserialize(params.AuthorizationInfoList[z]);
                this.AuthorizationInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Sort criterion.
 * @class
 */
class SortCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sorting attribute.
         * @type {string || null}
         */
        this.SortKey = null;

        /**
         * Sorting order. Valid values: ASC: ascending order; DESC: descending order.
         * @type {string || null}
         */
        this.SortOrder = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SortKey = 'SortKey' in params ? params.SortKey : null;
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;

    }
}

/**
 * DescribeUserGroup response structure.
 * @class
 */
class DescribeUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group nickname, which is not unique and can contain up to 64 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * User group remarks, which can contain up to 512 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * User group ID, which is globally unique.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserGroupId = null;

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
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUserGroupsOfUser request structure.
 * @class
 */
class ListUserGroupsOfUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID, which is globally unique.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Fuzzy search criterion. You can search by user group name (DisplayName). If this field is left empty, all of the user's user groups will be displayed by default.
         * @type {UserGroupInformationSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * Set of sort criteria. Valid values: DisplayName: user group name; UserGroupId: user group ID; CreatedDate: creation time. If this field is left empty, the results will be sorted in alphabetical order by user group name.
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * Pagination offset. Default value: 0. The `Offset` and `Limit` fields need to be used together; otherwise, the query results will not be paginated, and up to 50 user groups will be returned.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results read per page. Default value: 50. Maximum value: 100. The `Offset` and `Limit` fields need to be used together; otherwise, the query results will not be paginated, and up to 50 user groups will be returned.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.SearchCondition) {
            let obj = new UserGroupInformationSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * User information list.
 * @class
 */
class UserInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username, which can contain up to 32 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * User status.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Nickname, which can contain up to 64 characters and is the same as the username by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * User remarks, which can contain up to 512 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Last update time of the user in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastUpdateTime = null;

        /**
         * User creation time in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Path ID of the user's primary organization.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgPath = null;

        /**
         * User's mobile number with country code, such as `+86-00000000000`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * List of IDs of the user's user groups.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SubjectGroups = null;

        /**
         * User's email address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Last login time of the user in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastLoginTime = null;

        /**
         * User ID, which is globally unique and can contain up to 64 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.OrgPath = 'OrgPath' in params ? params.OrgPath : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.SubjectGroups = 'SubjectGroups' in params ? params.SubjectGroups : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.LastLoginTime = 'LastLoginTime' in params ? params.LastLoginTime : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * DescribeApplication request structure.
 * @class
 */
class DescribeApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID, which is globally unique. You must specify at least this parameter or `ClientId`.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Client ID. You must specify at least this parameter or `ApplicationId`.
         * @type {string || null}
         */
        this.ClientId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;

    }
}

/**
 * ModifyUserInfo request structure.
 * @class
 */
class ModifyUserInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username, which can contain up to 32 characters. You need to select either `Username` or `UserId` as the search criterion; if both are selected, `Username` will be used by default.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Nickname, which can contain up to 64 characters and is the same as the username by default.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * User remarks, which can contain up to 512 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * List of IDs of the user's user groups.
         * @type {Array.<string> || null}
         */
        this.UserGroupIds = null;

        /**
         * User ID. You need to select either `UserName` or `UserId` as the search criterion. If both are selected, `UserName` will be used by default.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * User's mobile number.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * User expiration time in ISO 8601 format.
         * @type {string || null}
         */
        this.ExpirationTime = null;

        /**
         * User password, which needs to be configured according to the password policy.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * User's email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Whether the password needs to be reset. Default value: false (no).
         * @type {boolean || null}
         */
        this.PwdNeedReset = null;

        /**
         * Unique ID of the user's primary organization. If this parameter is left empty, the user will be created under the root node by default.
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * List of IDs of the user's secondary organizations.
         * @type {Array.<string> || null}
         */
        this.SecondaryOrgNodeIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UserGroupIds = 'UserGroupIds' in params ? params.UserGroupIds : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.ExpirationTime = 'ExpirationTime' in params ? params.ExpirationTime : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.PwdNeedReset = 'PwdNeedReset' in params ? params.PwdNeedReset : null;
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.SecondaryOrgNodeIdList = 'SecondaryOrgNodeIdList' in params ? params.SecondaryOrgNodeIdList : null;

    }
}

/**
 * RemoveUserFromUserGroup response structure.
 * @class
 */
class RemoveUserFromUserGroupResponse extends  AbstractModel {
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
 * DescribeUserThirdPartyAccountInfo request structure.
 * @class
 */
class DescribeUserThirdPartyAccountInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username. You need to specify at least `Username` or `UserId`. If both are specified, `Username` will be used first.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * User ID. You need to specify at least `Username` or `UserId`. If both are specified, `Username` will be used first.
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * ModifyUserInfo response structure.
 * @class
 */
class ModifyUserInfoResponse extends  AbstractModel {
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
 * ListAuthorizedApplicationsToOrgNode response structure.
 * @class
 */
class ListAuthorizedApplicationsToOrgNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the applications accessible to the organization node.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ApplicationIds = null;

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
        this.ApplicationIds = 'ApplicationIds' in params ? params.ApplicationIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddUserToUserGroup response structure.
 * @class
 */
class AddUserToUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the users failed to be added to the user group.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FailedItems = null;

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
        this.FailedItems = 'FailedItems' in params ? params.FailedItems : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Returned authorization information.
 * @class
 */
class AuthorizationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique application ID.
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * Application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Type name.
         * @type {string || null}
         */
        this.EntityName = null;

        /**
         * Unique type ID.
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * Last update time in ISO 8601 format.
         * @type {string || null}
         */
        this.LastModifiedDate = null;

        /**
         * Unique authorization type ID.
         * @type {string || null}
         */
        this.AuthorizationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.EntityName = 'EntityName' in params ? params.EntityName : null;
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;
        this.AuthorizationId = 'AuthorizationId' in params ? params.AuthorizationId : null;

    }
}

/**
 * CreateUserGroup response structure.
 * @class
 */
class CreateUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group ID, which is globally unique.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserGroupId = null;

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
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserThirdPartyAccountInfo response structure.
 * @class
 */
class DescribeUserThirdPartyAccountInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Third-Party account binding information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ThirdPartyAccountInfo> || null}
         */
        this.ThirdPartyAccounts = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

        if (params.ThirdPartyAccounts) {
            this.ThirdPartyAccounts = new Array();
            for (let z in params.ThirdPartyAccounts) {
                let obj = new ThirdPartyAccountInfo();
                obj.deserialize(params.ThirdPartyAccounts[z]);
                this.ThirdPartyAccounts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Application information list.
 * @class
 */
class ApplicationAuthorizationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the user's accounts under authorized applications
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ApplicationAccounts = null;

        /**
         * Application ID, which is globally unique.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * List of IDs of the user's user groups and organization nodes that have access to the application.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {InheritedForm || null}
         */
        this.InheritedForm = null;

        /**
         * Application name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * Application creation time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationAccounts = 'ApplicationAccounts' in params ? params.ApplicationAccounts : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.InheritedForm) {
            let obj = new InheritedForm();
            obj.deserialize(params.InheritedForm)
            this.InheritedForm = obj;
        }
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;

    }
}

/**
 * User information associated with the account
 * @class
 */
class LinkUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID, which is globally unique and can contain up to 64 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Username.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

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

    }
}

/**
 * ListUserGroups response structure.
 * @class
 */
class ListUserGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned user group list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserGroupInformation> || null}
         */
        this.UserGroupList = null;

        /**
         * Total number of returned user group information items.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.UserGroupList) {
            this.UserGroupList = new Array();
            for (let z in params.UserGroupList) {
                let obj = new UserGroupInformation();
                obj.deserialize(params.UserGroupList[z]);
                this.UserGroupList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAccountInAccountGroup request structure.
 * @class
 */
class ListAccountInAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Search criterion. You can combine multiple search criteria and search in multiple data ranges.
         * @type {AccountGroupSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;

        if (params.SearchCondition) {
            let obj = new AccountGroupSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteUserGroup response structure.
 * @class
 */
class DeleteUserGroupResponse extends  AbstractModel {
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
 * User attribute search criteria.

 * @class
 */
class AuthorizationInfoSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * Search by name. When the query type is user, the match criteria include username and application name. When the query type is user group, the match criteria include user group name and application name. When the query type is organization, the match criteria include organization name and application name.
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * ListUserGroupsOfUser response structure.
 * @class
 */
class ListUserGroupsOfUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the user's user groups.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.UserGroupIds = null;

        /**
         * User ID, which is globally unique.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * List of information of the user's user groups.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserGroupInfo> || null}
         */
        this.UserGroupInfoList = null;

        /**
         * Total number of returned user group information items.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

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
        this.UserGroupIds = 'UserGroupIds' in params ? params.UserGroupIds : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.UserGroupInfoList) {
            this.UserGroupInfoList = new Array();
            for (let z in params.UserGroupInfoList) {
                let obj = new UserGroupInfo();
                obj.deserialize(params.UserGroupInfoList[z]);
                this.UserGroupInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAccountGroup response structure.
 * @class
 */
class CreateAccountGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account group ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountGroupId = null;

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
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserResourcesAuthorization request structure.
 * @class
 */
class DescribeUserResourcesAuthorizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * User ID. You need to specify at least `UserName` or `UserId`. If both are specified, `UserName` will be used first.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Username. You need to specify at least `UserName` or `UserId`. If both are specified, `UserName` will be used first.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Whether the query scope includes the application access of the user groups and organizations associated with the user. Valid values: false: no; true: yes. Default value: false.
         * @type {boolean || null}
         */
        this.IncludeInheritedAuthorizations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.IncludeInheritedAuthorizations = 'IncludeInheritedAuthorizations' in params ? params.IncludeInheritedAuthorizations : null;

    }
}

/**
 * ListUsers request structure.
 * @class
 */
class ListUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User attribute search criterion. The supported search criteria include username, mobile number, email address, user locking status, user freezing status, creation time, and last modification time, which can also be combined. In addition, multiple query methods such as full match, partial match, and range match are supported. Specifically, double quotation marks ("") indicate full match, an asterisk (*) at the end of the field indicates partial match, brackets separated by a comma ([Min,Max]) indicate query within a closed interval, braces separated by a comma ({Min,Max}) indicate query within an open interval, and a bracket and a brace can be used together (for example, {Min,Max] indicates that the minimum value is excluded and the maximum value is included in the query). Range query supports using an asterisk (for example, {20,*] indicates an interval including all data greater than 20) and querying by time period. The supported attributes include creation time (CreationTime) and last modification time (LastUpdateTime) in ISO 8601 format, such as `2021-01-13T09:44:07.182+0000`.
         * @type {UserSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * User attributes expected to be returned. All built-in user attributes will be returned by default, including user UUID (UserId), nickname (DisplayName), username (UserName), mobile number (Phone), email address (Email), status (Status), user group (SubjectGroups), organization path (OrgPath), remarks (Description), creation time (CreationTime), last modification time (LastUpdateTime), and last login time (LastLoginTime).
         * @type {Array.<string> || null}
         */
        this.ExpectedFields = null;

        /**
         * Set of sort criteria. The supported attributes for sorting include username (UserName), nickname (DisplayName), mobile number (Phone), email address (Email), user status (Status), creation time (CreatedDate), last modification time (LastUpdateTime), and last login time (LastLoginTime). If this field is left empty, the results will be sorted in alphabetical order by nickname (DisplayName).
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * Pagination offset. Default value: 0. The `Offset` and `Limit` fields need to be used together; otherwise, the query results will not be paginated, and up to 1,000 users will be returned.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results read per page. Default value: 50. Maximum value: 100. The `Offset` and `Limit` fields need to be used together; otherwise, the query results will not be paginated, and up to 1,000 users will be returned.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Whether to view the total number of search results. Default value: false (no).
         * @type {boolean || null}
         */
        this.IncludeTotal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SearchCondition) {
            let obj = new UserSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }
        this.ExpectedFields = 'ExpectedFields' in params ? params.ExpectedFields : null;

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.IncludeTotal = 'IncludeTotal' in params ? params.IncludeTotal : null;

    }
}

/**
 * DeleteUserGroup request structure.
 * @class
 */
class DeleteUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group ID, which is globally unique.
         * @type {string || null}
         */
        this.UserGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

    }
}

/**
 * Application attribute search criteria.
 * @class
 */
class ApplicationInfoSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application search keyword, which can be application name or ID.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Application type. Valid values: OAUTH2, JWT, CAS, SAML2, FORM, OIDC, APIGW
         * @type {string || null}
         */
        this.ApplicationType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;

    }
}

/**
 * ListApplications response structure.
 * @class
 */
class ListApplicationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of returned application information items.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Returned application information list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ApplicationInformation> || null}
         */
        this.ApplicationInfoList = null;

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

        if (params.ApplicationInfoList) {
            this.ApplicationInfoList = new Array();
            for (let z in params.ApplicationInfoList) {
                let obj = new ApplicationInformation();
                obj.deserialize(params.ApplicationInfoList[z]);
                this.ApplicationInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddAccountToAccountGroup request structure.
 * @class
 */
class AddAccountToAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account group ID
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * List of IDs of the accounts to be added to the account group.
         * @type {Array.<string> || null}
         */
        this.AccountIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.AccountIds = 'AccountIds' in params ? params.AccountIds : null;

    }
}

module.exports = {
    DescribeOrgNodeResponse: DescribeOrgNodeResponse,
    ListApplicationsRequest: ListApplicationsRequest,
    UserSearchCriteria: UserSearchCriteria,
    AddAccountToAccountGroupResponse: AddAccountToAccountGroupResponse,
    DeleteUserRequest: DeleteUserRequest,
    AuthorizationUserResouceInfo: AuthorizationUserResouceInfo,
    CreateAppAccountResponse: CreateAppAccountResponse,
    ListAuthorizedApplicationsToUserGroupRequest: ListAuthorizedApplicationsToUserGroupRequest,
    ModifyApplicationResponse: ModifyApplicationResponse,
    OrgNodeChildUserInfo: OrgNodeChildUserInfo,
    DeleteAccountGroupRequest: DeleteAccountGroupRequest,
    AddUserToUserGroupRequest: AddUserToUserGroupRequest,
    ApplicationInformation: ApplicationInformation,
    ListUsersResponse: ListUsersResponse,
    DeleteAppAccountRequest: DeleteAppAccountRequest,
    UserGroupInfo: UserGroupInfo,
    UpdateOrgNodeRequest: UpdateOrgNodeRequest,
    CreateOrgNodeRequest: CreateOrgNodeRequest,
    RemoveUserFromUserGroupRequest: RemoveUserFromUserGroupRequest,
    ModifyAppAccountRequest: ModifyAppAccountRequest,
    ListAuthorizedApplicationsToUserGroupResponse: ListAuthorizedApplicationsToUserGroupResponse,
    DeleteAccountGroupResponse: DeleteAccountGroupResponse,
    UserGroupInfoSearchCriteria: UserGroupInfoSearchCriteria,
    DescribeUserInfoRequest: DescribeUserInfoRequest,
    ListAuthorizedApplicationsToOrgNodeRequest: ListAuthorizedApplicationsToOrgNodeRequest,
    DescribePublicKeyResponse: DescribePublicKeyResponse,
    DescribeOrgNodeRequest: DescribeOrgNodeRequest,
    CreateAccountGroupRequest: CreateAccountGroupRequest,
    DescribeUserGroupRequest: DescribeUserGroupRequest,
    CreateOrgNodeResponse: CreateOrgNodeResponse,
    UserGroupInformationSearchCriteria: UserGroupInformationSearchCriteria,
    AccountGroupSearchCriteria: AccountGroupSearchCriteria,
    CreateUserResponse: CreateUserResponse,
    ThirdPartyAccountInfo: ThirdPartyAccountInfo,
    ModifyAppAccountResponse: ModifyAppAccountResponse,
    DeleteUserResponse: DeleteUserResponse,
    ListUsersInUserGroupResponse: ListUsersInUserGroupResponse,
    CreateAppAccountRequest: CreateAppAccountRequest,
    DescribeApplicationResponse: DescribeApplicationResponse,
    DescribeAppAccountResponse: DescribeAppAccountResponse,
    UserGroupInformation: UserGroupInformation,
    ListUsersInOrgNodeSearchCriteria: ListUsersInOrgNodeSearchCriteria,
    DescribeAccountGroupResponse: DescribeAccountGroupResponse,
    CreateUserGroupRequest: CreateUserGroupRequest,
    DescribeUserInfoResponse: DescribeUserInfoResponse,
    DeleteOrgNodeRequest: DeleteOrgNodeRequest,
    DeleteUsersResponse: DeleteUsersResponse,
    AppAccountInfo: AppAccountInfo,
    DescribeAccountGroupRequest: DescribeAccountGroupRequest,
    AppAccountSearchCriteria: AppAccountSearchCriteria,
    DescribeAppAccountRequest: DescribeAppAccountRequest,
    ListUsersInUserGroupRequest: ListUsersInUserGroupRequest,
    UserInfo: UserInfo,
    DeleteAppAccountResponse: DeleteAppAccountResponse,
    ModifyAccountGroupRequest: ModifyAccountGroupRequest,
    ListUsersInOrgNodeResponse: ListUsersInOrgNodeResponse,
    ListApplicationAuthorizationsRequest: ListApplicationAuthorizationsRequest,
    ModifyAccountGroupResponse: ModifyAccountGroupResponse,
    DeleteUsersRequest: DeleteUsersRequest,
    AccountGroupInfo: AccountGroupInfo,
    OrgNodeChildInfo: OrgNodeChildInfo,
    ListAuthorizedApplicationsToUserRequest: ListAuthorizedApplicationsToUserRequest,
    DeleteOrgNodeResponse: DeleteOrgNodeResponse,
    ListAccountInAccountGroupResponse: ListAccountInAccountGroupResponse,
    DescribeUserResourcesAuthorizationResponse: DescribeUserResourcesAuthorizationResponse,
    ListUsersInOrgNodeRequest: ListUsersInOrgNodeRequest,
    InheritedForm: InheritedForm,
    RemoveAccountFromAccountGroupResponse: RemoveAccountFromAccountGroupResponse,
    ListUserGroupsRequest: ListUserGroupsRequest,
    UpdateOrgNodeResponse: UpdateOrgNodeResponse,
    ListAuthorizedApplicationsToUserResponse: ListAuthorizedApplicationsToUserResponse,
    ModifyApplicationRequest: ModifyApplicationRequest,
    CreateUserRequest: CreateUserRequest,
    DescribePublicKeyRequest: DescribePublicKeyRequest,
    RemoveAccountFromAccountGroupRequest: RemoveAccountFromAccountGroupRequest,
    ListApplicationAuthorizationsResponse: ListApplicationAuthorizationsResponse,
    SortCondition: SortCondition,
    DescribeUserGroupResponse: DescribeUserGroupResponse,
    ListUserGroupsOfUserRequest: ListUserGroupsOfUserRequest,
    UserInformation: UserInformation,
    DescribeApplicationRequest: DescribeApplicationRequest,
    ModifyUserInfoRequest: ModifyUserInfoRequest,
    RemoveUserFromUserGroupResponse: RemoveUserFromUserGroupResponse,
    DescribeUserThirdPartyAccountInfoRequest: DescribeUserThirdPartyAccountInfoRequest,
    ModifyUserInfoResponse: ModifyUserInfoResponse,
    ListAuthorizedApplicationsToOrgNodeResponse: ListAuthorizedApplicationsToOrgNodeResponse,
    AddUserToUserGroupResponse: AddUserToUserGroupResponse,
    AuthorizationInfo: AuthorizationInfo,
    CreateUserGroupResponse: CreateUserGroupResponse,
    DescribeUserThirdPartyAccountInfoResponse: DescribeUserThirdPartyAccountInfoResponse,
    ApplicationAuthorizationInfo: ApplicationAuthorizationInfo,
    LinkUserInfo: LinkUserInfo,
    ListUserGroupsResponse: ListUserGroupsResponse,
    ListAccountInAccountGroupRequest: ListAccountInAccountGroupRequest,
    DeleteUserGroupResponse: DeleteUserGroupResponse,
    AuthorizationInfoSearchCriteria: AuthorizationInfoSearchCriteria,
    ListUserGroupsOfUserResponse: ListUserGroupsOfUserResponse,
    CreateAccountGroupResponse: CreateAccountGroupResponse,
    DescribeUserResourcesAuthorizationRequest: DescribeUserResourcesAuthorizationRequest,
    ListUsersRequest: ListUsersRequest,
    DeleteUserGroupRequest: DeleteUserGroupRequest,
    ApplicationInfoSearchCriteria: ApplicationInfoSearchCriteria,
    ListApplicationsResponse: ListApplicationsResponse,
    AddAccountToAccountGroupRequest: AddAccountToAccountGroupRequest,

}
