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
 * GetUser response structure.
 * @class
 */
class GetUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-user UIN
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Sub-user username
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Sub-user UID
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * Sub-user remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * If sub-user can log in to the Console
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * Mobile number
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * Country/Area code
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * Email
         * @type {string || null}
         */
        this.Email = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Email = 'Email' in params ? params.Email : null;
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
         * Sub-user username
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether to forcibly delete the sub-user. The default input parameter is `0`. `0`: do not delete the user if the user has undeleted API keys; `1`: first delete the API keys then delete the user if the user has undeleted API keys. To delete API keys, you need to have cam:DeleteApiKey permission, which enables you to delete both enabled and disabled API keys. If you do not have this permission, you will not be able to delete API keys and the user.
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
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * DetachGroupPolicy request structure.
 * @class
 */
class DetachGroupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * User Group ID
         * @type {number || null}
         */
        this.DetachGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.DetachGroupId = 'DetachGroupId' in params ? params.DetachGroupId : null;

    }
}

/**
 * DescribeRoleList response structure.
 * @class
 */
class DescribeRoleListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role details list
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<RoleInfo> || null}
         */
        this.List = null;

        /**
         * Total number of roles
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new RoleInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePolicy response structure.
 * @class
 */
class CreatePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of newly added policy
         * @type {number || null}
         */
        this.PolicyId = null;

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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRole request structure.
 * @class
 */
class GetRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role ID, used to specify role. Input either `RoleId` or `RoleName`
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * Role name, used to specify role. Input either `RoleId` or `RoleName`
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * ListAttachedGroupPolicies request structure.
 * @class
 */
class ListAttachedGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group ID
         * @type {number || null}
         */
        this.TargetGroupId = null;

        /**
         * Page number, which starts from 1. Default is 1
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of entries per page; 20 by default
         * @type {number || null}
         */
        this.Rp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;

    }
}

/**
 * ListGroupsForUser request structure.
 * @class
 */
class ListGroupsForUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-user UID
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * Number of entries per page; default is 20
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * Page number; default is 1
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Sub-account UIN
         * @type {number || null}
         */
        this.SubUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;

    }
}

/**
 * AttachRolePolicy response structure.
 * @class
 */
class AttachRolePolicyResponse extends  AbstractModel {
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
 * AttachGroupPolicy response structure.
 * @class
 */
class AttachGroupPolicyResponse extends  AbstractModel {
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
 * ListUsers response structure.
 * @class
 */
class ListUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-user information
         * @type {Array.<SubAccountInfo> || null}
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
                let obj = new SubAccountInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateRoleDescription response structure.
 * @class
 */
class UpdateRoleDescriptionResponse extends  AbstractModel {
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
 * DetachUserPolicy request structure.
 * @class
 */
class DetachUserPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Sub-account UIN
         * @type {number || null}
         */
        this.DetachUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.DetachUin = 'DetachUin' in params ? params.DetachUin : null;

    }
}

/**
 * ListGroups response structure.
 * @class
 */
class ListGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of User Groups
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * User group information array
         * @type {Array.<GroupInfo> || null}
         */
        this.GroupInfo = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.GroupInfo) {
            this.GroupInfo = new Array();
            for (let z in params.GroupInfo) {
                let obj = new GroupInfo();
                obj.deserialize(params.GroupInfo[z]);
                this.GroupInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetCustomMFATokenInfo request structure.
 * @class
 */
class GetCustomMFATokenInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom multi-factor verification Token
         * @type {string || null}
         */
        this.MFAToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MFAToken = 'MFAToken' in params ? params.MFAToken : null;

    }
}

/**
 * DescribeRoleList request structure.
 * @class
 */
class DescribeRoleListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number, beginning from 1
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of lines per page, no greater than 200
         * @type {number || null}
         */
        this.Rp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;

    }
}

/**
 * GetGroup request structure.
 * @class
 */
class GetGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User Group ID
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DeleteRole response structure.
 * @class
 */
class DeleteRoleResponse extends  AbstractModel {
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
 * ListSAMLProviders request structure.
 * @class
 */
class ListSAMLProvidersRequest extends  AbstractModel {
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
 * ListGroups request structure.
 * @class
 */
class ListGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number; default is 1
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of entries per page; default is 20
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * Filter by User Group name
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
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * UpdateSAMLProvider request structure.
 * @class
 */
class UpdateSAMLProviderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML identity provider name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * SAML identity provider description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * SAML identity provider metadata document (Base64)
         * @type {string || null}
         */
        this.SAMLMetadataDocument = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SAMLMetadataDocument = 'SAMLMetadataDocument' in params ? params.SAMLMetadataDocument : null;

    }
}

/**
 * UpdateAssumeRolePolicy request structure.
 * @class
 */
class UpdateAssumeRolePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy document
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * Role ID, used to specify a role. Input either `RoleId` or `RoleName`
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * Role name, used to specify a role. Input either `RoleId` or `RoleName`
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * ListGroupsForUser response structure.
 * @class
 */
class ListGroupsForUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of User Groups to which the sub-user has been added
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * User Group information
         * @type {Array.<GroupInfo> || null}
         */
        this.GroupInfo = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.GroupInfo) {
            this.GroupInfo = new Array();
            for (let z in params.GroupInfo) {
                let obj = new GroupInfo();
                obj.deserialize(params.GroupInfo[z]);
                this.GroupInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUsersForGroup request structure.
 * @class
 */
class ListUsersForGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Page number; default is 1
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of entries per page; default is 20
         * @type {number || null}
         */
        this.Rp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;

    }
}

/**
 * RemoveUserFromGroup request structure.
 * @class
 */
class RemoveUserFromGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The UID of the user to be deleted and an array corresponding to the User Group IDs
         * @type {Array.<GroupIdOfUidInfo> || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Info) {
            this.Info = new Array();
            for (let z in params.Info) {
                let obj = new GroupIdOfUidInfo();
                obj.deserialize(params.Info[z]);
                this.Info.push(obj);
            }
        }

    }
}

/**
 * ListPolicies response structure.
 * @class
 */
class ListPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of policies
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Policy array. Each array contains fields including `policyId`, `policyName`, `addTime`, `type`, `description`, and `createMode`. 
policyId: policy ID 
policyName: policy name
addTime: policy creation time
type: 1: custom policy, 2: preset policy 
description: policy description 
createMode: 1 indicates a policy created based on business permissions, while other values indicate that the policy syntax can be viewed and the policy can be updated using the policy syntax
Attachments: number of associated users
ServiceType: the product the policy is associated with
IsAttached: this value should not be null when querying if a marked entity has been associated with a policy. 0 indicates that no policy has been associated, and 1 indicates that a policy has been associated
         * @type {Array.<StrategyInfo> || null}
         */
        this.List = null;

        /**
         * Reserved field
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.ServiceTypeList = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new StrategyInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.ServiceTypeList = 'ServiceTypeList' in params ? params.ServiceTypeList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information on the association between a sub-user and a User Group
 * @class
 */
class GroupIdOfUidInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-user UID
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * User Group ID
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * UpdateRoleDescription request structure.
 * @class
 */
class UpdateRoleDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Role ID, used to specify a role. Input either `RoleId` or `RoleName`
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * Role name, used to specify a role. Input either `RoleId` or `RoleName`
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * Role details
 * @class
 */
class RoleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role ID
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * Role name
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Role policy document
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * Role description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Time role created
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Time role last updated
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * If login is allowed for the role
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * User role. Valid values: `user`, `system`, `service_linked`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RoleType = null;

        /**
         * Valid period
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SessionDuration = null;

        /**
         * Task identifier for deleting a service-linked role 
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeletionTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.RoleType = 'RoleType' in params ? params.RoleType : null;
        this.SessionDuration = 'SessionDuration' in params ? params.SessionDuration : null;
        this.DeletionTaskId = 'DeletionTaskId' in params ? params.DeletionTaskId : null;

    }
}

/**
 * DeleteGroup request structure.
 * @class
 */
class DeleteGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User Group ID
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * ListAttachedRolePolicies response structure.
 * @class
 */
class ListAttachedRolePoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of policies associated with the role
         * @type {Array.<AttachedPolicyOfRole> || null}
         */
        this.List = null;

        /**
         * Total number of policies associated with the role
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new AttachedPolicyOfRole();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
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
 * DetachRolePolicy request structure.
 * @class
 */
class DetachRolePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID. Either `PolicyId` or `PolicyName` must be entered
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Role ID, used to specify a role. Input either `AttachRoleId` or `AttachRoleName`
         * @type {string || null}
         */
        this.DetachRoleId = null;

        /**
         * Role name, used to specify a role. Input either `AttachRoleId` or `AttachRoleName`
         * @type {string || null}
         */
        this.DetachRoleName = null;

        /**
         * Policy name. Either `PolicyId` or `PolicyName` must be entered
         * @type {string || null}
         */
        this.PolicyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.DetachRoleId = 'DetachRoleId' in params ? params.DetachRoleId : null;
        this.DetachRoleName = 'DetachRoleName' in params ? params.DetachRoleName : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;

    }
}

/**
 * Policy information
 * @class
 */
class StrategyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Time policy created
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Policy type. 1: Custom policy; 2: Preset policy
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Policy description
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * How the policy was created: 1: Via console; 2: Via syntax
         * @type {number || null}
         */
        this.CreateMode = null;

        /**
         * Number of associated users
         * @type {number || null}
         */
        this.Attachments = null;

        /**
         * Product associated with the policy
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 
         * @type {number || null}
         */
        this.IsAttached = null;

        /**
         * Queries if the policy has been deactivated
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Deactived = null;

        /**
         * List of deprecated products
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DeactivedDetail = null;

        /**
         * The deletion task identifier used to check the deletion status of the service-linked role
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsServiceLinkedPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;
        this.Attachments = 'Attachments' in params ? params.Attachments : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.IsAttached = 'IsAttached' in params ? params.IsAttached : null;
        this.Deactived = 'Deactived' in params ? params.Deactived : null;
        this.DeactivedDetail = 'DeactivedDetail' in params ? params.DeactivedDetail : null;
        this.IsServiceLinkedPolicy = 'IsServiceLinkedPolicy' in params ? params.IsServiceLinkedPolicy : null;

    }
}

/**
 * DeletePolicy request structure.
 * @class
 */
class DeletePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array. Array elements are policy IDs. Policies can be deleted in a batch
         * @type {Array.<number> || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * User Group information
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * User Group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Time User Group created
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * User Group description
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * AddUser request structure.
 * @class
 */
class AddUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-user username
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Sub-user remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Whether or not the sub-user is allowed to log in to the console. 0: No; 1: Yes.
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * Whether or not to generate keys for sub-users. 0: No; 1: Yes.
         * @type {number || null}
         */
        this.UseApi = null;

        /**
         * Sub-user's console login password. If no password rules have been set, the password must have a minimum of 8 characters containing uppercase letters, lowercase letters, digits, and special characters by default. This parameter will be valid only when the sub-user is allowed to log in to the console. If it is not specified and console login is allowed, the system will automatically generate a random 32-character password that contains uppercase letters, lowercase letters, digits, and special characters.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * If the sub-user needs to reset their password when they next log in to the console. 0: No; 1: Yes.
         * @type {number || null}
         */
        this.NeedResetPassword = null;

        /**
         * Mobile number
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * Country/Area Code
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * Email
         * @type {string || null}
         */
        this.Email = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.UseApi = 'UseApi' in params ? params.UseApi : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.NeedResetPassword = 'NeedResetPassword' in params ? params.NeedResetPassword : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Email = 'Email' in params ? params.Email : null;

    }
}

/**
 * DeleteRole request structure.
 * @class
 */
class DeleteRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role ID, used to specify a role. Input either `RoleId` or `RoleName`
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * Role name, used to specify a role. Input either `RoleId` or `RoleName`
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * UpdateRoleConsoleLogin request structure.
 * @class
 */
class UpdateRoleConsoleLoginRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether login is allowed. 1: yes, 0: no
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * Role ID
         * @type {number || null}
         */
        this.RoleId = null;

        /**
         * Role name
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * GetCustomMFATokenInfo response structure.
 * @class
 */
class GetCustomMFATokenInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account ID corresponding to the custom multi-factor verification Token
         * @type {number || null}
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
 * UpdateAssumeRolePolicy response structure.
 * @class
 */
class UpdateAssumeRolePolicyResponse extends  AbstractModel {
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
 * ListAttachedUserPolicies response structure.
 * @class
 */
class ListAttachedUserPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of policies
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Policy list
         * @type {Array.<AttachPolicyInfo> || null}
         */
        this.List = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new AttachPolicyInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSAMLProvider response structure.
 * @class
 */
class CreateSAMLProviderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML identity provider resource descriptor
         * @type {string || null}
         */
        this.ProviderArn = null;

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
        this.ProviderArn = 'ProviderArn' in params ? params.ProviderArn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetUser request structure.
 * @class
 */
class GetUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-user username
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * Sub-user information
 * @class
 */
class SubAccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-user user ID
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Sub-user username
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Sub-user UID
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * Sub-user remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * If sub-user can log in to the console
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * Mobile number
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * Country/Area code
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * Email
         * @type {string || null}
         */
        this.Email = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Email = 'Email' in params ? params.Email : null;

    }
}

/**
 * SAML identity provider
 * @class
 */
class SAMLProviderInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML identity provider name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * SAML identity provider description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Time SAML identity provider created
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Time SAML identity provider last modified
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * UpdateSAMLProvider response structure.
 * @class
 */
class UpdateSAMLProviderResponse extends  AbstractModel {
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
 * UpdateUser request structure.
 * @class
 */
class UpdateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-user username
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Sub-user remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Whether or not the sub-user is allowed to log in to the console. 0: No; 1: Yes.
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * Sub-user's console login password. If no password rules have been set, the password must have a minimum of 8 characters containing uppercase letters, lowercase letters, digits, and special characters by default. This parameter will be valid only when the sub-user is allowed to log in to the console. If it is not specified and console login is allowed, the system will automatically generate a random 32-character password that contains uppercase letters, lowercase letters, digits, and special characters.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * If the sub-user needs to reset their password when they next log in to the console. 0: No; 1: Yes.
         * @type {number || null}
         */
        this.NeedResetPassword = null;

        /**
         * Mobile number
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * Country/Area Code
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * Email
         * @type {string || null}
         */
        this.Email = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.NeedResetPassword = 'NeedResetPassword' in params ? params.NeedResetPassword : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Email = 'Email' in params ? params.Email : null;

    }
}

/**
 * CreateSAMLProvider request structure.
 * @class
 */
class CreateSAMLProviderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML identity provider name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * SAML identity provider description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * SAML identity provider metadata document (Base64)
         * @type {string || null}
         */
        this.SAMLMetadataDocument = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SAMLMetadataDocument = 'SAMLMetadataDocument' in params ? params.SAMLMetadataDocument : null;

    }
}

/**
 * Associated policy
 * @class
 */
class AttachPolicyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy name
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Time created
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * How the policy was created: 1: Via console; 2: Via syntax
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.CreateMode = null;

        /**
         * Valid values: `user` and `QCS`
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 
         * @type {string || null}
         */
        this.OperateOwnerUin = null;

        /**
         * 
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * 
         * @type {number || null}
         */
        this.OperateUinType = null;

        /**
         * Queries if the policy has been deactivated
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Deactived = null;

        /**
         * List of deprecated products
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DeactivedDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.OperateOwnerUin = 'OperateOwnerUin' in params ? params.OperateOwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        this.OperateUinType = 'OperateUinType' in params ? params.OperateUinType : null;
        this.Deactived = 'Deactived' in params ? params.Deactived : null;
        this.DeactivedDetail = 'DeactivedDetail' in params ? params.DeactivedDetail : null;

    }
}

/**
 * UpdateRoleConsoleLogin response structure.
 * @class
 */
class UpdateRoleConsoleLoginResponse extends  AbstractModel {
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
 * AttachRolePolicy request structure.
 * @class
 */
class AttachRolePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID. Either `PolicyId` or `PolicyName` must be entered
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Role ID, used to specify a role. Input either `AttachRoleId` or `AttachRoleName`
         * @type {string || null}
         */
        this.AttachRoleId = null;

        /**
         * Role name, used to specify a role. Input either `AttachRoleId` or `AttachRoleName`
         * @type {string || null}
         */
        this.AttachRoleName = null;

        /**
         * Policy name. Either `PolicyId` or `PolicyName` must be entered
         * @type {string || null}
         */
        this.PolicyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.AttachRoleId = 'AttachRoleId' in params ? params.AttachRoleId : null;
        this.AttachRoleName = 'AttachRoleName' in params ? params.AttachRoleName : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;

    }
}

/**
 * ConsumeCustomMFAToken response structure.
 * @class
 */
class ConsumeCustomMFATokenResponse extends  AbstractModel {
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
 * AttachUserPolicy request structure.
 * @class
 */
class AttachUserPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Sub-account UIN
         * @type {number || null}
         */
        this.AttachUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.AttachUin = 'AttachUin' in params ? params.AttachUin : null;

    }
}

/**
 * ListAttachedGroupPolicies response structure.
 * @class
 */
class ListAttachedGroupPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of policies
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Policy list
         * @type {Array.<AttachPolicyInfo> || null}
         */
        this.List = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new AttachPolicyInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePolicy response structure.
 * @class
 */
class DeletePolicyResponse extends  AbstractModel {
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
 * ConsumeCustomMFAToken request structure.
 * @class
 */
class ConsumeCustomMFATokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom multi-factor verification Token
         * @type {string || null}
         */
        this.MFAToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MFAToken = 'MFAToken' in params ? params.MFAToken : null;

    }
}

/**
 * GetGroup response structure.
 * @class
 */
class GetGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User Group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * User Group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Number of members in the User Group
         * @type {number || null}
         */
        this.GroupNum = null;

        /**
         * User Group description
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Time User Group created
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * User Group member information
         * @type {Array.<GroupMemberInfo> || null}
         */
        this.UserInfo = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupNum = 'GroupNum' in params ? params.GroupNum : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.UserInfo) {
            this.UserInfo = new Array();
            for (let z in params.UserInfo) {
                let obj = new GroupMemberInfo();
                obj.deserialize(params.UserInfo[z]);
                this.UserInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSAMLProvider request structure.
 * @class
 */
class DeleteSAMLProviderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML identity provider name
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DeleteSAMLProvider response structure.
 * @class
 */
class DeleteSAMLProviderResponse extends  AbstractModel {
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
 * UpdateUser response structure.
 * @class
 */
class UpdateUserResponse extends  AbstractModel {
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
 * AddUserToGroup response structure.
 * @class
 */
class AddUserToGroupResponse extends  AbstractModel {
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
 * ListCollaborators request structure.
 * @class
 */
class ListCollaboratorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of entries per page. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination start value. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

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

    }
}

/**
 * UpdatePolicy response structure.
 * @class
 */
class UpdatePolicyResponse extends  AbstractModel {
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
 * CreateGroup request structure.
 * @class
 */
class CreateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User Group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * User Group description
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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * UpdateGroup response structure.
 * @class
 */
class UpdateGroupResponse extends  AbstractModel {
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
 * ListEntitiesForPolicy request structure.
 * @class
 */
class ListEntitiesForPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Page number, which starts from 1. Default is 1
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of entries per page; 20 by default
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * Valid values: `All`, `User`, `Group`, and `Role`. `All` means all entity types will be returned; `User` means only sub-accounts will be returned; `Group` means only User Groups will be returned; `Role` means only roles will be returned. `All` is the default value.
         * @type {string || null}
         */
        this.EntityFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.EntityFilter = 'EntityFilter' in params ? params.EntityFilter : null;

    }
}

/**
 * ListPolicies request structure.
 * @class
 */
class ListPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of entries per page: must be greater than 0 and no greater than 200. Default is 20
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * Page number. Starts from 1 and cannot be greater than 200. Default is 1
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Valid values: `All`, `QCS`, and `Local`. `All` means all policies will be returned; `QCS` means only preset policies will be returned; `Local` means only custom policies will be returned. `All` is the default value
         * @type {string || null}
         */
        this.Scope = null;

        /**
         * Filter by policy name
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
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Scope = 'Scope' in params ? params.Scope : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * DetachGroupPolicy response structure.
 * @class
 */
class DetachGroupPolicyResponse extends  AbstractModel {
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
 * CreatePolicy request structure.
 * @class
 */
class CreatePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Policy document, such as `{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}`, where `principal` is used to specify the resources that the role is authorized to access. For more information on this parameter, please see the `RoleInfo` output parameter of the [GetRole](https://cloud.tencent.com/document/product/598/36221) API
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * Policy description
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
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * UpdateGroup request structure.
 * @class
 */
class UpdateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User Group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * User Group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * User Group description
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * AttachGroupPolicy request structure.
 * @class
 */
class AttachGroupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * User Group ID
         * @type {number || null}
         */
        this.AttachGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.AttachGroupId = 'AttachGroupId' in params ? params.AttachGroupId : null;

    }
}

/**
 * CreateRole response structure.
 * @class
 */
class CreateRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role ID
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.RoleId = null;

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
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSAMLProvider response structure.
 * @class
 */
class GetSAMLProviderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML identity provider name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * SAML identity provider description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Time SAML identity provider created
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Time SAML identity provider last modified
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * SAML identity provider metadata document
         * @type {string || null}
         */
        this.SAMLMetadata = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.SAMLMetadata = 'SAMLMetadata' in params ? params.SAMLMetadata : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPolicy request structure.
 * @class
 */
class GetPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * AddUserToGroup request structure.
 * @class
 */
class AddUserToGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * How sub-user UIDs are associated with the ID of the user group they are added to.
         * @type {Array.<GroupIdOfUidInfo> || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Info) {
            this.Info = new Array();
            for (let z in params.Info) {
                let obj = new GroupIdOfUidInfo();
                obj.deserialize(params.Info[z]);
                this.Info.push(obj);
            }
        }

    }
}

/**
 * RemoveUserFromGroup response structure.
 * @class
 */
class RemoveUserFromGroupResponse extends  AbstractModel {
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
 * DetachRolePolicy response structure.
 * @class
 */
class DetachRolePolicyResponse extends  AbstractModel {
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
 * Policy associated with the role
 * @class
 */
class AttachedPolicyOfRole extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Time of association
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Policy type. `User` indicates custom policy; `QCS` indicates preset policy
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * Policy creation method. 1: indicates the policy was created based on product function or item permission; other values indicate the policy was created based on the policy syntax
         * @type {number || null}
         */
        this.CreateMode = null;

        /**
         * Whether the product has been deprecated (0: no; 1: yes)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Deactived = null;

        /**
         * List of deprecated products
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DeactivedDetail = null;

        /**
         * Policy description
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;
        this.Deactived = 'Deactived' in params ? params.Deactived : null;
        this.DeactivedDetail = 'DeactivedDetail' in params ? params.DeactivedDetail : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ListSAMLProviders response structure.
 * @class
 */
class ListSAMLProvidersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of SAML identity providers
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of SAML identity providers
         * @type {Array.<SAMLProviderInfo> || null}
         */
        this.SAMLProviderSet = null;

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

        if (params.SAMLProviderSet) {
            this.SAMLProviderSet = new Array();
            for (let z in params.SAMLProviderSet) {
                let obj = new SAMLProviderInfo();
                obj.deserialize(params.SAMLProviderSet[z]);
                this.SAMLProviderSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAttachedRolePolicies request structure.
 * @class
 */
class ListAttachedRolePoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number, beginning from 1
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of lines per page, no more than 200
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * Role ID, used to specify a role. Input either `RoleId` or `RoleName`
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * Role name, used to specify a role. Input either `RoleId` or `RoleName`
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Filter according to policy type. `User` indicates querying custom policies only. `QCS` indicates querying preset policies only
         * @type {string || null}
         */
        this.PolicyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;

    }
}

/**
 * GetSAMLProvider request structure.
 * @class
 */
class GetSAMLProviderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML identity provider name
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DetachUserPolicy response structure.
 * @class
 */
class DetachUserPolicyResponse extends  AbstractModel {
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
 * GetRole response structure.
 * @class
 */
class GetRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role details
         * @type {RoleInfo || null}
         */
        this.RoleInfo = null;

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

        if (params.RoleInfo) {
            let obj = new RoleInfo();
            obj.deserialize(params.RoleInfo)
            this.RoleInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRole request structure.
 * @class
 */
class CreateRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role name
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Policy document
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * Role description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether login is allowed. 1: yes, 0: no
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * The maximum validity period of the temporary key for creating a role (range: 0-43200)
         * @type {number || null}
         */
        this.SessionDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.SessionDuration = 'SessionDuration' in params ? params.SessionDuration : null;

    }
}

/**
 * GetPolicy response structure.
 * @class
 */
class GetPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy name
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Policy description
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 1: Custom policy; 2: Preset policy
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Time created
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Time of latest update
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Policy document
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * Remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PresetAlias = null;

        /**
         * Whether it is a service-linked policy
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsServiceLinkedRolePolicy = null;

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
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.PresetAlias = 'PresetAlias' in params ? params.PresetAlias : null;
        this.IsServiceLinkedRolePolicy = 'IsServiceLinkedRolePolicy' in params ? params.IsServiceLinkedRolePolicy : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteGroup response structure.
 * @class
 */
class DeleteGroupResponse extends  AbstractModel {
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
 * The entity associated with the policy
 * @class
 */
class AttachEntityOfPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Entity ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Entity Name
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Entity UIN
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Type of entity association. 1: Associate by users; 2: Associate by User Groups
         * @type {number || null}
         */
        this.RelatedType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RelatedType = 'RelatedType' in params ? params.RelatedType : null;

    }
}

/**
 * ListUsersForGroup response structure.
 * @class
 */
class ListUsersForGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of users associated with the User Group
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Sub-user information
         * @type {Array.<GroupMemberInfo> || null}
         */
        this.UserInfo = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.UserInfo) {
            this.UserInfo = new Array();
            for (let z in params.UserInfo) {
                let obj = new GroupMemberInfo();
                obj.deserialize(params.UserInfo[z]);
                this.UserInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddUser response structure.
 * @class
 */
class AddUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-user UIN
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Sub-user username
         * @type {string || null}
         */
        this.Name = null;

        /**
         * If the combination of input parameters indicates that a random password should be generated, the generated password is returned
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Sub-user’s key ID
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * Sub-user’s secret key
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Sub-user UID
         * @type {number || null}
         */
        this.Uid = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListEntitiesForPolicy response structure.
 * @class
 */
class ListEntitiesForPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of entities
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Entity list
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<AttachEntityOfPolicy> || null}
         */
        this.List = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new AttachEntityOfPolicy();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUsers request structure.
 * @class
 */
class ListUsersRequest extends  AbstractModel {
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
 * AttachUserPolicy response structure.
 * @class
 */
class AttachUserPolicyResponse extends  AbstractModel {
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
 * ListCollaborators response structure.
 * @class
 */
class ListCollaboratorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Collaborator information
         * @type {Array.<SubAccountInfo> || null}
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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SubAccountInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAttachedUserPolicies request structure.
 * @class
 */
class ListAttachedUserPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-account UIN
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Page number, which starts from 1. Default is 1
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of entries per page; 20 by default
         * @type {number || null}
         */
        this.Rp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;

    }
}

/**
 * UpdatePolicy request structure.
 * @class
 */
class UpdatePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Policy description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Policy document, such as `{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}`, where `principal` is used to specify the resources that the role is authorized to access. For more information on this parameter, please see the `RoleInfo` output parameter of the [GetRole](https://cloud.tencent.com/document/product/598/36221) API
         * @type {string || null}
         */
        this.PolicyDocument = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;

    }
}

/**
 * User Group user information
 * @class
 */
class GroupMemberInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-user UID
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * Sub-user UIN
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Sub-user name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Mobile number
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * Mobile number country/area code
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * If mobile number has been verified
         * @type {number || null}
         */
        this.PhoneFlag = null;

        /**
         * Email address
         * @type {string || null}
         */
        this.Email = null;

        /**
         * If email has been verified
         * @type {number || null}
         */
        this.EmailFlag = null;

        /**
         * User type
         * @type {number || null}
         */
        this.UserType = null;

        /**
         * Time policy created
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * If the user is the main message recipient
         * @type {number || null}
         */
        this.IsReceiverOwner = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.PhoneFlag = 'PhoneFlag' in params ? params.PhoneFlag : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.EmailFlag = 'EmailFlag' in params ? params.EmailFlag : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IsReceiverOwner = 'IsReceiverOwner' in params ? params.IsReceiverOwner : null;

    }
}

/**
 * CreateGroup response structure.
 * @class
 */
class CreateGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User Group ID
         * @type {number || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    GetUserResponse: GetUserResponse,
    DeleteUserRequest: DeleteUserRequest,
    DetachGroupPolicyRequest: DetachGroupPolicyRequest,
    DescribeRoleListResponse: DescribeRoleListResponse,
    CreatePolicyResponse: CreatePolicyResponse,
    GetRoleRequest: GetRoleRequest,
    ListAttachedGroupPoliciesRequest: ListAttachedGroupPoliciesRequest,
    ListGroupsForUserRequest: ListGroupsForUserRequest,
    AttachRolePolicyResponse: AttachRolePolicyResponse,
    AttachGroupPolicyResponse: AttachGroupPolicyResponse,
    ListUsersResponse: ListUsersResponse,
    UpdateRoleDescriptionResponse: UpdateRoleDescriptionResponse,
    DetachUserPolicyRequest: DetachUserPolicyRequest,
    ListGroupsResponse: ListGroupsResponse,
    GetCustomMFATokenInfoRequest: GetCustomMFATokenInfoRequest,
    DescribeRoleListRequest: DescribeRoleListRequest,
    GetGroupRequest: GetGroupRequest,
    DeleteRoleResponse: DeleteRoleResponse,
    ListSAMLProvidersRequest: ListSAMLProvidersRequest,
    ListGroupsRequest: ListGroupsRequest,
    UpdateSAMLProviderRequest: UpdateSAMLProviderRequest,
    UpdateAssumeRolePolicyRequest: UpdateAssumeRolePolicyRequest,
    ListGroupsForUserResponse: ListGroupsForUserResponse,
    ListUsersForGroupRequest: ListUsersForGroupRequest,
    RemoveUserFromGroupRequest: RemoveUserFromGroupRequest,
    ListPoliciesResponse: ListPoliciesResponse,
    GroupIdOfUidInfo: GroupIdOfUidInfo,
    UpdateRoleDescriptionRequest: UpdateRoleDescriptionRequest,
    RoleInfo: RoleInfo,
    DeleteGroupRequest: DeleteGroupRequest,
    ListAttachedRolePoliciesResponse: ListAttachedRolePoliciesResponse,
    DeleteUserResponse: DeleteUserResponse,
    DetachRolePolicyRequest: DetachRolePolicyRequest,
    StrategyInfo: StrategyInfo,
    DeletePolicyRequest: DeletePolicyRequest,
    GroupInfo: GroupInfo,
    AddUserRequest: AddUserRequest,
    DeleteRoleRequest: DeleteRoleRequest,
    UpdateRoleConsoleLoginRequest: UpdateRoleConsoleLoginRequest,
    GetCustomMFATokenInfoResponse: GetCustomMFATokenInfoResponse,
    UpdateAssumeRolePolicyResponse: UpdateAssumeRolePolicyResponse,
    ListAttachedUserPoliciesResponse: ListAttachedUserPoliciesResponse,
    CreateSAMLProviderResponse: CreateSAMLProviderResponse,
    GetUserRequest: GetUserRequest,
    SubAccountInfo: SubAccountInfo,
    SAMLProviderInfo: SAMLProviderInfo,
    UpdateSAMLProviderResponse: UpdateSAMLProviderResponse,
    UpdateUserRequest: UpdateUserRequest,
    CreateSAMLProviderRequest: CreateSAMLProviderRequest,
    AttachPolicyInfo: AttachPolicyInfo,
    UpdateRoleConsoleLoginResponse: UpdateRoleConsoleLoginResponse,
    AttachRolePolicyRequest: AttachRolePolicyRequest,
    ConsumeCustomMFATokenResponse: ConsumeCustomMFATokenResponse,
    AttachUserPolicyRequest: AttachUserPolicyRequest,
    ListAttachedGroupPoliciesResponse: ListAttachedGroupPoliciesResponse,
    DeletePolicyResponse: DeletePolicyResponse,
    ConsumeCustomMFATokenRequest: ConsumeCustomMFATokenRequest,
    GetGroupResponse: GetGroupResponse,
    DeleteSAMLProviderRequest: DeleteSAMLProviderRequest,
    DeleteSAMLProviderResponse: DeleteSAMLProviderResponse,
    UpdateUserResponse: UpdateUserResponse,
    AddUserToGroupResponse: AddUserToGroupResponse,
    ListCollaboratorsRequest: ListCollaboratorsRequest,
    UpdatePolicyResponse: UpdatePolicyResponse,
    CreateGroupRequest: CreateGroupRequest,
    UpdateGroupResponse: UpdateGroupResponse,
    ListEntitiesForPolicyRequest: ListEntitiesForPolicyRequest,
    ListPoliciesRequest: ListPoliciesRequest,
    DetachGroupPolicyResponse: DetachGroupPolicyResponse,
    CreatePolicyRequest: CreatePolicyRequest,
    UpdateGroupRequest: UpdateGroupRequest,
    AttachGroupPolicyRequest: AttachGroupPolicyRequest,
    CreateRoleResponse: CreateRoleResponse,
    GetSAMLProviderResponse: GetSAMLProviderResponse,
    GetPolicyRequest: GetPolicyRequest,
    AddUserToGroupRequest: AddUserToGroupRequest,
    RemoveUserFromGroupResponse: RemoveUserFromGroupResponse,
    DetachRolePolicyResponse: DetachRolePolicyResponse,
    AttachedPolicyOfRole: AttachedPolicyOfRole,
    ListSAMLProvidersResponse: ListSAMLProvidersResponse,
    ListAttachedRolePoliciesRequest: ListAttachedRolePoliciesRequest,
    GetSAMLProviderRequest: GetSAMLProviderRequest,
    DetachUserPolicyResponse: DetachUserPolicyResponse,
    GetRoleResponse: GetRoleResponse,
    CreateRoleRequest: CreateRoleRequest,
    GetPolicyResponse: GetPolicyResponse,
    DeleteGroupResponse: DeleteGroupResponse,
    AttachEntityOfPolicy: AttachEntityOfPolicy,
    ListUsersForGroupResponse: ListUsersForGroupResponse,
    AddUserResponse: AddUserResponse,
    ListEntitiesForPolicyResponse: ListEntitiesForPolicyResponse,
    ListUsersRequest: ListUsersRequest,
    AttachUserPolicyResponse: AttachUserPolicyResponse,
    ListCollaboratorsResponse: ListCollaboratorsResponse,
    ListAttachedUserPoliciesRequest: ListAttachedUserPoliciesRequest,
    UpdatePolicyRequest: UpdatePolicyRequest,
    GroupMemberInfo: GroupMemberInfo,
    CreateGroupResponse: CreateGroupResponse,

}
