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
 * ListUserGroups request structure.
 * @class
 */
class ListUserGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * Number of queried pages
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Query conditions (user group ID or user group name)
         * @type {string || null}
         */
        this.Condition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Condition = 'Condition' in params ? params.Condition : null;

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
 * ListUserGroups response structure.
 * @class
 */
class ListUserGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserGroup> || null}
         */
        this.Content = null;

        /**
         * Total number
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Pagination
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Pageable || null}
         */
        this.Pageable = null;

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

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new UserGroup();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Pageable) {
            let obj = new Pageable();
            obj.deserialize(params.Pageable)
            this.Pageable = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * User group
 * @class
 */
class UserGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group ID
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * User group name
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * User group description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * User directory ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * Tenant ID
         * @type {string || null}
         */
        this.TenantId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.TenantId = 'TenantId' in params ? params.TenantId : null;

    }
}

module.exports = {
    ListUserGroupsRequest: ListUserGroupsRequest,
    Pageable: Pageable,
    ListUserGroupsResponse: ListUserGroupsResponse,
    UserGroup: UserGroup,

}
