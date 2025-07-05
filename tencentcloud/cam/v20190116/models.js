/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * Sub-user information
 * @class
 */
class SubAccountUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-user ID
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Sub-user name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Sub-user UID. UID is the unique identifier of a user who is a message recipient, while UIN is a unique identifier of a user.
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * Sub-user remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Creation time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * User type (1: root account; 2: sub-user; 3: WeCom sub-user; 4: collaborator; 5: message recipient)
         * @type {number || null}
         */
        this.UserType = null;

        /**
         * 
         * @type {string || null}
         */
        this.LastLoginIp = null;

        /**
         * 
         * @type {string || null}
         */
        this.LastLoginTime = null;

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
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.LastLoginIp = 'LastLoginIp' in params ? params.LastLoginIp : null;
        this.LastLoginTime = 'LastLoginTime' in params ? params.LastLoginTime : null;

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
 * Login and sensitive operation flag
 * @class
 */
class LoginActionFlagIntl extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mobile number
         * @type {number || null}
         */
        this.Phone = null;

        /**
         * Hard token
         * @type {number || null}
         */
        this.Token = null;

        /**
         * Soft token
         * @type {number || null}
         */
        this.Stoken = null;

        /**
         * WeChat
         * @type {number || null}
         */
        this.Wechat = null;

        /**
         * Custom
         * @type {number || null}
         */
        this.Custom = null;

        /**
         * Email
         * @type {number || null}
         */
        this.Mail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.Stoken = 'Stoken' in params ? params.Stoken : null;
        this.Wechat = 'Wechat' in params ? params.Wechat : null;
        this.Custom = 'Custom' in params ? params.Custom : null;
        this.Mail = 'Mail' in params ? params.Mail : null;

    }
}

/**
 * UpdateUserOIDCConfig response structure.
 * @class
 */
class UpdateUserOIDCConfigResponse extends  AbstractModel {
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
 * ListAccessKeys request structure.
 * @class
 */
class ListAccessKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `UIN` of the specified user. If this parameter is left empty, access keys of the current user will be listed by default
         * @type {number || null}
         */
        this.TargetUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;

    }
}

/**
 * SetMfaFlag response structure.
 * @class
 */
class SetMfaFlagResponse extends  AbstractModel {
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
 * TagRole response structure.
 * @class
 */
class TagRoleResponse extends  AbstractModel {
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
 * CreateServiceLinkedRole request structure.
 * @class
 */
class CreateServiceLinkedRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Authorized service, i.e., Tencent Cloud service entity with this role attached.
         * @type {Array.<string> || null}
         */
        this.QCSServiceName = null;

        /**
         * Custom suffix. A string you provide, which is combined with the service-provided prefix to form the complete role name.
         * @type {string || null}
         */
        this.CustomSuffix = null;

        /**
         * Role description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Tags bound to the role.
         * @type {Array.<RoleTags> || null}
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
        this.QCSServiceName = 'QCSServiceName' in params ? params.QCSServiceName : null;
        this.CustomSuffix = 'CustomSuffix' in params ? params.CustomSuffix : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new RoleTags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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

        /**
         * Search by keyword
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
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

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
 * UpdatePolicy response structure.
 * @class
 */
class UpdatePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID, which will be returned only if the input parameter is `PolicyName`
Note: this field may return null, indicating that no valid values can be obtained.
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
 * DescribeOIDCConfig request structure.
 * @class
 */
class DescribeOIDCConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name.
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
 * GetServiceLinkedRoleDeletionStatus response structure.
 * @class
 */
class GetServiceLinkedRoleDeletionStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status: NOT_STARTED, IN_PROGRESS, SUCCEEDED, FAILED
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Reasons why the deletion failed.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * Service type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Service name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceName = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSecurityLastUsed request structure.
 * @class
 */
class GetSecurityLastUsedRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key ID list query. Up to 10 key IDs can be queried.
         * @type {Array.<string> || null}
         */
        this.SecretIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretIdList = 'SecretIdList' in params ? params.SecretIdList : null;

    }
}

/**
 * DescribeUserSAMLConfig response structure.
 * @class
 */
class DescribeUserSAMLConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML metadata document.
         * @type {string || null}
         */
        this.SAMLMetadata = null;

        /**
         * Status. `0`: not set, `1`: enabled, `2`: disabled.
         * @type {number || null}
         */
        this.Status = null;

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
        this.SAMLMetadata = 'SAMLMetadata' in params ? params.SAMLMetadata : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteUserPermissionsBoundary response structure.
 * @class
 */
class DeleteUserPermissionsBoundaryResponse extends  AbstractModel {
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
 * GetAccountSummary request structure.
 * @class
 */
class GetAccountSummaryRequest extends  AbstractModel {
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
 * GetUserAppId response structure.
 * @class
 */
class GetUserAppIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN of the current account.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * OwnerUin of the current account.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * AppId of the current account.
         * @type {number || null}
         */
        this.AppId = null;

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
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetUserAppId request structure.
 * @class
 */
class GetUserAppIdRequest extends  AbstractModel {
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
 * DescribeOIDCConfig response structure.
 * @class
 */
class DescribeOIDCConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IdP type. 11: Role IdP.
         * @type {number || null}
         */
        this.ProviderType = null;

        /**
         * IdP URL.
         * @type {string || null}
         */
        this.IdentityUrl = null;

        /**
         * Public key for signature.
         * @type {string || null}
         */
        this.IdentityKey = null;

        /**
         * Client ID.
         * @type {Array.<string> || null}
         */
        this.ClientId = null;

        /**
         * Status. 0: Not set; 2: Disabled; 11: Enabled.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Name.
         * @type {string || null}
         */
        this.Name = null;

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
        this.ProviderType = 'ProviderType' in params ? params.ProviderType : null;
        this.IdentityUrl = 'IdentityUrl' in params ? params.IdentityUrl : null;
        this.IdentityKey = 'IdentityKey' in params ? params.IdentityKey : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListPolicyVersions request structure.
 * @class
 */
class ListPolicyVersionsRequest extends  AbstractModel {
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

        /**
         * A parameter used to filter the list of roles under a tag.
         * @type {Array.<RoleTags> || null}
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
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new RoleTags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeUserSAMLConfig request structure.
 * @class
 */
class DescribeUserSAMLConfigRequest extends  AbstractModel {
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
 * DeleteAccessKey response structure.
 * @class
 */
class DeleteAccessKeyResponse extends  AbstractModel {
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
 * PutRolePermissionsBoundary request structure.
 * @class
 */
class PutRolePermissionsBoundaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Role ID (either it or the role name must be entered)
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * Role name (either it or the role ID must be entered)
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

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
         * This value should not be null when querying whether a marked entity has been associated with a policy. 0 indicates that no policy has been associated, while 1 indicates that a policy has been associated
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

        /**
         * The number of entities associated with the policy.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AttachEntityCount = null;

        /**
         * The number of entities associated with the permission boundary.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AttachEntityBoundaryCount = null;

        /**
         * The last edited time.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

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
        this.AttachEntityCount = 'AttachEntityCount' in params ? params.AttachEntityCount : null;
        this.AttachEntityBoundaryCount = 'AttachEntityBoundaryCount' in params ? params.AttachEntityBoundaryCount : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
 * Policy version list element structure
 * @class
 */
class PolicyVersionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy version ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VersionId = null;

        /**
         * Policy version creation time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * Whether it is the operative version. 0: no, 1: yes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsDefaultVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.IsDefaultVersion = 'IsDefaultVersion' in params ? params.IsDefaultVersion : null;

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
 * DescribeSubAccounts request structure.
 * @class
 */
class DescribeSubAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of sub-user UINs. Up to 50 UINs are supported.
         * @type {Array.<number> || null}
         */
        this.FilterSubAccountUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FilterSubAccountUin = 'FilterSubAccountUin' in params ? params.FilterSubAccountUin : null;

    }
}

/**
 * DeleteUserPermissionsBoundary request structure.
 * @class
 */
class DeleteUserPermissionsBoundaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-account `Uin`
         * @type {number || null}
         */
        this.TargetUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;

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
 * CreateAccessKey response structure.
 * @class
 */
class CreateAccessKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access key
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AccessKeyDetail || null}
         */
        this.AccessKey = null;

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

        if (params.AccessKey) {
            let obj = new AccessKeyDetail();
            obj.deserialize(params.AccessKey)
            this.AccessKey = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePolicyVersion response structure.
 * @class
 */
class DeletePolicyVersionResponse extends  AbstractModel {
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
 * CreateAccessKey request structure.
 * @class
 */
class CreateAccessKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN of the specified user. If this parameter is left empty, the access key will be created for the current user by default.
         * @type {number || null}
         */
        this.TargetUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;

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
 * Information on policies that are associated with the user and inherited from the user group
 * @class
 */
class AttachedUserPolicyGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Group name.
         * @type {string || null}
         */
        this.GroupName = null;

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
         * The user’s UIN/UID to be deleted and the array corresponding to the user group ID.
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
 * CreatePolicyVersion response structure.
 * @class
 */
class CreatePolicyVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy version ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VersionId = null;

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
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteAccessKey request structure.
 * @class
 */
class DeleteAccessKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the specified access key that needs to be deleted
         * @type {string || null}
         */
        this.AccessKeyId = null;

        /**
         * UIN of the specified user. If this parameter is left empty, the access key will be deleted for the current user by default.
         * @type {number || null}
         */
        this.TargetUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;

    }
}

/**
 * Access key
 * @class
 */
class AccessKeyDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access key ID
         * @type {string || null}
         */
        this.AccessKeyId = null;

        /**
         * Access key, which is visible only when it is created. Keep it properly.
         * @type {string || null}
         */
        this.SecretAccessKey = null;

        /**
         * Key status. Valid values: `Active` (activated), `Inactive` (not activated).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.SecretAccessKey = 'SecretAccessKey' in params ? params.SecretAccessKey : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * Suspicious login location settings
 * @class
 */
class OffsiteFlag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Verification flag
         * @type {number || null}
         */
        this.VerifyFlag = null;

        /**
         * Phone notification
         * @type {number || null}
         */
        this.NotifyPhone = null;

        /**
         * Email notification
         * @type {number || null}
         */
        this.NotifyEmail = null;

        /**
         * WeChat notification
         * @type {number || null}
         */
        this.NotifyWechat = null;

        /**
         * Alert
         * @type {number || null}
         */
        this.Tips = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VerifyFlag = 'VerifyFlag' in params ? params.VerifyFlag : null;
        this.NotifyPhone = 'NotifyPhone' in params ? params.NotifyPhone : null;
        this.NotifyEmail = 'NotifyEmail' in params ? params.NotifyEmail : null;
        this.NotifyWechat = 'NotifyWechat' in params ? params.NotifyWechat : null;
        this.Tips = 'Tips' in params ? params.Tips : null;

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
         * User Group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Sub-user UID
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * Sub-user UIN. For UIN and UID, at least one of them is required.
         * @type {number || null}
         */
        this.Uin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Uin = 'Uin' in params ? params.Uin : null;

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
 * UpdateUserSAMLConfig request structure.
 * @class
 */
class UpdateUserSAMLConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of the modification operation. `enable`: enable, `disable`: disable, `updateSAML`: modify metadata document.
         * @type {string || null}
         */
        this.Operate = null;

        /**
         * Metadata document, which must be Base64 encoded. This parameter is required only when the value of `Operate` is `updateSAML`.
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
        this.Operate = 'Operate' in params ? params.Operate : null;
        this.SAMLMetadataDocument = 'SAMLMetadataDocument' in params ? params.SAMLMetadataDocument : null;

    }
}

/**
 * SetDefaultPolicyVersion request structure.
 * @class
 */
class SetDefaultPolicyVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy version, which can be obtained through `ListPolicyVersions`.
         * @type {number || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

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

        /**
         * Tags.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<RoleTags> || null}
         */
        this.Tags = null;

        /**
         * The Role Arn 
         * @type {string || null}
         */
        this.RoleArn = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new RoleTags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;

    }
}

/**
 * CreatePolicyVersion request structure.
 * @class
 */
class CreatePolicyVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * The policy document to use as the content for the new version
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * Specifies whether to set this version as the default version
         * @type {boolean || null}
         */
        this.SetAsDefault = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.SetAsDefault = 'SetAsDefault' in params ? params.SetAsDefault : null;

    }
}

/**
 * The last time the key was used.
 * @class
 */
class SecretIdLastUsed extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key ID.
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * The date when the key ID was last used (the value is obtained one day later).
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.LastUsedDate = null;

        /**
         * The most recent date the key was accessed
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LastSecretUsedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.LastUsedDate = 'LastUsedDate' in params ? params.LastUsedDate : null;
        this.LastSecretUsedDate = 'LastSecretUsedDate' in params ? params.LastSecretUsedDate : null;

    }
}

/**
 * UpdateAccessKey response structure.
 * @class
 */
class UpdateAccessKeyResponse extends  AbstractModel {
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
 * CreateUserOIDCConfig response structure.
 * @class
 */
class CreateUserOIDCConfigResponse extends  AbstractModel {
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
 * ListAttachedUserAllPolicies response structure.
 * @class
 */
class ListAttachedUserAllPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy list.
         * @type {Array.<AttachedUserPolicy> || null}
         */
        this.PolicyList = null;

        /**
         * Total number of policies.
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

        if (params.PolicyList) {
            this.PolicyList = new Array();
            for (let z in params.PolicyList) {
                let obj = new AttachedUserPolicy();
                obj.deserialize(params.PolicyList[z]);
                this.PolicyList.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Whether the sub-user can log in to the console. `0`: No; `1`: Yes.
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
         * Last login IP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecentlyLoginIP = null;

        /**
         * Last login time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecentlyLoginTime = null;

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
        this.RecentlyLoginIP = 'RecentlyLoginIP' in params ? params.RecentlyLoginIP : null;
        this.RecentlyLoginTime = 'RecentlyLoginTime' in params ? params.RecentlyLoginTime : null;
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
         * Role ID, which is used to specify a role. The input parameter is either `DetachRoleId` or `DetachRoleName`.
         * @type {string || null}
         */
        this.DetachRoleId = null;

        /**
         * Role name, which is used to specify a role. The input parameter is either `DetachRoleId` or `DetachRoleName`.
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
 * UntagRole response structure.
 * @class
 */
class UntagRoleResponse extends  AbstractModel {
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
 * DeleteRolePermissionsBoundary request structure.
 * @class
 */
class DeleteRolePermissionsBoundaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role ID (either it or the role name must be entered)
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * Role name (either it or the role ID must be entered)
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
 * Role tag type
 * @class
 */
class RoleTags extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value.
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeUserOIDCConfig response structure.
 * @class
 */
class DescribeUserOIDCConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IdP type. 12: user OIDC IdP
         * @type {number || null}
         */
        this.ProviderType = null;

        /**
         * IdP URL
         * @type {string || null}
         */
        this.IdentityUrl = null;

        /**
         * Signature public key
         * @type {string || null}
         */
        this.IdentityKey = null;

        /**
         * Client ID
         * @type {string || null}
         */
        this.ClientId = null;

        /**
         * Status. 0: not set; 2: disabled; 11: enabled.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Authorization endpoint
         * @type {string || null}
         */
        this.AuthorizationEndpoint = null;

        /**
         * Authorization scope
         * @type {Array.<string> || null}
         */
        this.Scope = null;

        /**
         * Authorization response type
         * @type {string || null}
         */
        this.ResponseType = null;

        /**
         * Authorization response mode
         * @type {string || null}
         */
        this.ResponseMode = null;

        /**
         * Mapping field name
         * @type {string || null}
         */
        this.MappingFiled = null;

        /**
         * Description
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
        this.ProviderType = 'ProviderType' in params ? params.ProviderType : null;
        this.IdentityUrl = 'IdentityUrl' in params ? params.IdentityUrl : null;
        this.IdentityKey = 'IdentityKey' in params ? params.IdentityKey : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AuthorizationEndpoint = 'AuthorizationEndpoint' in params ? params.AuthorizationEndpoint : null;
        this.Scope = 'Scope' in params ? params.Scope : null;
        this.ResponseType = 'ResponseType' in params ? params.ResponseType : null;
        this.ResponseMode = 'ResponseMode' in params ? params.ResponseMode : null;
        this.MappingFiled = 'MappingFiled' in params ? params.MappingFiled : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * Login and sensitive operation flag
 * @class
 */
class LoginActionFlag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Phone
         * @type {number || null}
         */
        this.Phone = null;

        /**
         * Hard token
         * @type {number || null}
         */
        this.Token = null;

        /**
         * Soft token
         * @type {number || null}
         */
        this.Stoken = null;

        /**
         * WeChat
         * @type {number || null}
         */
        this.Wechat = null;

        /**
         * Custom
         * @type {number || null}
         */
        this.Custom = null;

        /**
         * Mail
         * @type {number || null}
         */
        this.Mail = null;

        /**
         * U2F token
         * @type {number || null}
         */
        this.U2FToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.Stoken = 'Stoken' in params ? params.Stoken : null;
        this.Wechat = 'Wechat' in params ? params.Wechat : null;
        this.Custom = 'Custom' in params ? params.Custom : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.U2FToken = 'U2FToken' in params ? params.U2FToken : null;

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
         * Role ID. Use either `RoleId` or `RoleName` as the input parameter.
         * @type {number || null}
         */
        this.RoleId = null;

        /**
         * Role name. Use either `RoleId` or `RoleName` as the input parameter.
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
 * GetPolicyVersion request structure.
 * @class
 */
class GetPolicyVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy version, which can be obtained through `ListPolicyVersions`.
         * @type {number || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

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
 * DeleteRolePermissionsBoundary response structure.
 * @class
 */
class DeleteRolePermissionsBoundaryResponse extends  AbstractModel {
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
 * Login and sensitive operation flag
 * @class
 */
class LoginActionMfaFlag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mobile phone
         * @type {number || null}
         */
        this.Phone = null;

        /**
         * Soft token
         * @type {number || null}
         */
        this.Stoken = null;

        /**
         * WeChat
         * @type {number || null}
         */
        this.Wechat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Stoken = 'Stoken' in params ? params.Stoken : null;
        this.Wechat = 'Wechat' in params ? params.Wechat : null;

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

        /**
         * Creation time
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Nickname.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NickName = null;

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
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.NickName = 'NickName' in params ? params.NickName : null;

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
 * DisableUserSSO request structure.
 * @class
 */
class DisableUserSSORequest extends  AbstractModel {
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
 * UpdateAccessKey request structure.
 * @class
 */
class UpdateAccessKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the specified access key that needs to be updated
         * @type {string || null}
         */
        this.AccessKeyId = null;

        /**
         * Key status. Valid values: `Active` (activated), `Inactive` (not activated).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * UIN of the specified user. If this parameter is left empty, the access key will be updated for the current user by default.
         * @type {number || null}
         */
        this.TargetUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;

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
         * Policy remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Root account of the operator associating the policy
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OperateOwnerUin = null;

        /**
         * The ID of the account associating the policy. If `UinType` is 0, this indicates that this is a sub-account `UIN`. If `UinType` is 1, this indicates this is a role ID
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * If `UinType` is 0, `OperateUin` indicates that this is a sub-account `UIN`. If `UinType` is 1, `OperateUin` indicates that this is a role ID
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
 * PutUserPermissionsBoundary response structure.
 * @class
 */
class PutUserPermissionsBoundaryResponse extends  AbstractModel {
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
 * GetPolicyVersion response structure.
 * @class
 */
class GetPolicyVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy version details
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PolicyVersionDetail || null}
         */
        this.PolicyVersion = null;

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

        if (params.PolicyVersion) {
            let obj = new PolicyVersionDetail();
            obj.deserialize(params.PolicyVersion)
            this.PolicyVersion = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DisableUserSSO response structure.
 * @class
 */
class DisableUserSSOResponse extends  AbstractModel {
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
 * CreateOIDCConfig request structure.
 * @class
 */
class CreateOIDCConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IdP URL.
         * @type {string || null}
         */
        this.IdentityUrl = null;

        /**
         * Public key for signature, which must be Base64-encoded.
         * @type {string || null}
         */
        this.IdentityKey = null;

        /**
         * Client ID.
         * @type {Array.<string> || null}
         */
        this.ClientId = null;

        /**
         * Name.
         * @type {string || null}
         */
        this.Name = null;

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
        this.IdentityUrl = 'IdentityUrl' in params ? params.IdentityUrl : null;
        this.IdentityKey = 'IdentityKey' in params ? params.IdentityKey : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Access key list
 * @class
 */
class AccessKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access key ID
         * @type {string || null}
         */
        this.AccessKeyId = null;

        /**
         * Key status. Valid values: Active (activated), Inactive (not activated)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

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
 * UpdateOIDCConfig response structure.
 * @class
 */
class UpdateOIDCConfigResponse extends  AbstractModel {
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
 * GetAccountSummary response structure.
 * @class
 */
class GetAccountSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of policies
         * @type {number || null}
         */
        this.Policies = null;

        /**
         * Number of roles
         * @type {number || null}
         */
        this.Roles = null;

        /**
         * Number of identity providers
         * @type {number || null}
         */
        this.Idps = null;

        /**
         * Number of sub-accounts
         * @type {number || null}
         */
        this.User = null;

        /**
         * Number of groups
         * @type {number || null}
         */
        this.Group = null;

        /**
         * Total number of grouped users
         * @type {number || null}
         */
        this.Member = null;

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
        this.Policies = 'Policies' in params ? params.Policies : null;
        this.Roles = 'Roles' in params ? params.Roles : null;
        this.Idps = 'Idps' in params ? params.Idps : null;
        this.User = 'User' in params ? params.User : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.Member = 'Member' in params ? params.Member : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateServiceLinkedRole response structure.
 * @class
 */
class CreateServiceLinkedRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role ID
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
 * CreateUserOIDCConfig request structure.
 * @class
 */
class CreateUserOIDCConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * OpenID Connect IdP URL.
It corresponds to the value of the `issuer` field in the `Openid-configuration` provided by the enterprise IdP.
         * @type {string || null}
         */
        this.IdentityUrl = null;

        /**
         * Signature public key, which is used to verify the OpenID Connect IdP's ID token and must be Base64-encoded. For the security of your account, we recommend you rotate it regularly.
         * @type {string || null}
         */
        this.IdentityKey = null;

        /**
         * Client ID registered with the OpenID Connect IdP.
         * @type {string || null}
         */
        this.ClientId = null;

        /**
         * OpenID Connect IdP authorization endpoint. It corresponds to the value of the `authorization_endpoint` field in the `Openid-configuration` provided by the enterprise IdP.
         * @type {string || null}
         */
        this.AuthorizationEndpoint = null;

        /**
         * Authorization response type, which is always `id_token`.
         * @type {string || null}
         */
        this.ResponseType = null;

        /**
         * Authorization response mode. Valid values: form_post (recommended); fragment.
         * @type {string || null}
         */
        this.ResponseMode = null;

        /**
         * Mapping field name. It indicates which field in the `id_token` of the IdP is mapped to the username of a sub-user. It is usually the `sub` or `name` field
         * @type {string || null}
         */
        this.MappingFiled = null;

        /**
         * Authorization information scope. Valid values: openid (default); email; profile.
         * @type {Array.<string> || null}
         */
        this.Scope = null;

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
        this.IdentityUrl = 'IdentityUrl' in params ? params.IdentityUrl : null;
        this.IdentityKey = 'IdentityKey' in params ? params.IdentityKey : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.AuthorizationEndpoint = 'AuthorizationEndpoint' in params ? params.AuthorizationEndpoint : null;
        this.ResponseType = 'ResponseType' in params ? params.ResponseType : null;
        this.ResponseMode = 'ResponseMode' in params ? params.ResponseMode : null;
        this.MappingFiled = 'MappingFiled' in params ? params.MappingFiled : null;
        this.Scope = 'Scope' in params ? params.Scope : null;
        this.Description = 'Description' in params ? params.Description : null;

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
 * TagRole request structure.
 * @class
 */
class TagRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag.
         * @type {Array.<RoleTags> || null}
         */
        this.Tags = null;

        /**
         * Role name. Specify either the role name or role ID.
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Role ID. Specify either the role ID or role name.
         * @type {string || null}
         */
        this.RoleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new RoleTags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;

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
 * GetServiceLinkedRoleDeletionStatus request structure.
 * @class
 */
class GetServiceLinkedRoleDeletionStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Deletion task ID
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
        this.DeletionTaskId = 'DeletionTaskId' in params ? params.DeletionTaskId : null;

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
         * Whether the mobile phone has been verified. `0`: No; `1`: Yes.
         * @type {number || null}
         */
        this.PhoneFlag = null;

        /**
         * Email address
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Whether the email has been verified. `0`: No; `1`: Yes.
         * @type {number || null}
         */
        this.EmailFlag = null;

        /**
         * User type. `1`: Global collaborator; `2`: Project collaborator; `3`: Message recipient.
         * @type {number || null}
         */
        this.UserType = null;

        /**
         * Time policy created
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Whether the user is the primary message recipient. `0`: No; `1`: Yes.
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
         * Policy document, such as `{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}`, where `principal` is used to specify the resources that the role is authorized to access. For more information on this parameter, please see the `RoleInfo` output parameter of the [GetRole](https://intl.cloud.tencent.com/document/product/598/36221?from_cn_redirect=1) API
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
 * ListAttachedUserAllPolicies request structure.
 * @class
 */
class ListAttachedUserAllPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target user ID.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * The number of policies displayed on each page. Value range: 1-200.
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * Page number. Value range: 1-200.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * `0`: return policies that are directly associated and inherited from the user group; `1`: return policies that are directly associated; `2`: return policies inherited from the user group.
         * @type {number || null}
         */
        this.AttachType = null;

        /**
         * Policy type.
         * @type {number || null}
         */
        this.StrategyType = null;

        /**
         * Keyword for searching.
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
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.AttachType = 'AttachType' in params ? params.AttachType : null;
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * DeletePolicyVersion request structure.
 * @class
 */
class DeletePolicyVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy version ID
         * @type {Array.<number> || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * CreateUserSAMLConfig request structure.
 * @class
 */
class CreateUserSAMLConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML metadata document, which must be Base64 encoded.
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
        this.SAMLMetadataDocument = 'SAMLMetadataDocument' in params ? params.SAMLMetadataDocument : null;

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
 * UpdateOIDCConfig request structure.
 * @class
 */
class UpdateOIDCConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IdP URL.
         * @type {string || null}
         */
        this.IdentityUrl = null;

        /**
         * Public key for signature, which must be Base64-encoded.
         * @type {string || null}
         */
        this.IdentityKey = null;

        /**
         * Client ID.
         * @type {Array.<string> || null}
         */
        this.ClientId = null;

        /**
         * Name.
         * @type {string || null}
         */
        this.Name = null;

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
        this.IdentityUrl = 'IdentityUrl' in params ? params.IdentityUrl : null;
        this.IdentityKey = 'IdentityKey' in params ? params.IdentityKey : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

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
 * DescribeSafeAuthFlagIntl response structure.
 * @class
 */
class DescribeSafeAuthFlagIntlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Login protection settings
         * @type {LoginActionFlagIntl || null}
         */
        this.LoginFlag = null;

        /**
         * Sensitive operation protection settings
         * @type {LoginActionFlagIntl || null}
         */
        this.ActionFlag = null;

        /**
         * Suspicious login location protection settings
         * @type {OffsiteFlag || null}
         */
        this.OffsiteFlag = null;

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

        if (params.LoginFlag) {
            let obj = new LoginActionFlagIntl();
            obj.deserialize(params.LoginFlag)
            this.LoginFlag = obj;
        }

        if (params.ActionFlag) {
            let obj = new LoginActionFlagIntl();
            obj.deserialize(params.ActionFlag)
            this.ActionFlag = obj;
        }

        if (params.OffsiteFlag) {
            let obj = new OffsiteFlag();
            obj.deserialize(params.OffsiteFlag)
            this.OffsiteFlag = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ListPolicyVersions response structure.
 * @class
 */
class ListPolicyVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy version list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PolicyVersionItem> || null}
         */
        this.Versions = null;

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

        if (params.Versions) {
            this.Versions = new Array();
            for (let z in params.Versions) {
                let obj = new PolicyVersionItem();
                obj.deserialize(params.Versions[z]);
                this.Versions.push(obj);
            }
        }
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
 * DescribeSafeAuthFlagIntl request structure.
 * @class
 */
class DescribeSafeAuthFlagIntlRequest extends  AbstractModel {
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
 * UpdateUserOIDCConfig request structure.
 * @class
 */
class UpdateUserOIDCConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * OpenID Connect IdP URL.
It corresponds to the value of the `issuer` field in the `Openid-configuration` provided by the enterprise IdP.
         * @type {string || null}
         */
        this.IdentityUrl = null;

        /**
         * Signature public key, which is used to verify the OpenID Connect IdP's ID token and must be Base64-encoded. For the security of your account, we recommend you rotate it regularly.
         * @type {string || null}
         */
        this.IdentityKey = null;

        /**
         * Client ID registered with the OpenID Connect IdP.
         * @type {string || null}
         */
        this.ClientId = null;

        /**
         * OpenID Connect IdP authorization endpoint. It corresponds to the value of the `authorization_endpoint` field in the `Openid-configuration` provided by the enterprise IdP.
         * @type {string || null}
         */
        this.AuthorizationEndpoint = null;

        /**
         * Authorization response type, which is always `id_token`.
         * @type {string || null}
         */
        this.ResponseType = null;

        /**
         * Authorization response mode. Valid values: form_post (recommended); fragment.
         * @type {string || null}
         */
        this.ResponseMode = null;

        /**
         * Mapping field name. It indicates which field in the `id_token` of the IdP is mapped to the username of a sub-user. It is usually the `sub` or `name` field
         * @type {string || null}
         */
        this.MappingFiled = null;

        /**
         * Authorization information scope. Valid values: openid (default); email; profile.
         * @type {Array.<string> || null}
         */
        this.Scope = null;

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
        this.IdentityUrl = 'IdentityUrl' in params ? params.IdentityUrl : null;
        this.IdentityKey = 'IdentityKey' in params ? params.IdentityKey : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.AuthorizationEndpoint = 'AuthorizationEndpoint' in params ? params.AuthorizationEndpoint : null;
        this.ResponseType = 'ResponseType' in params ? params.ResponseType : null;
        this.ResponseMode = 'ResponseMode' in params ? params.ResponseMode : null;
        this.MappingFiled = 'MappingFiled' in params ? params.MappingFiled : null;
        this.Scope = 'Scope' in params ? params.Scope : null;
        this.Description = 'Description' in params ? params.Description : null;

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
         * The association between the user group ID and the sub-user UIN/UID.
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
 * DescribeUserOIDCConfig request structure.
 * @class
 */
class DescribeUserOIDCConfigRequest extends  AbstractModel {
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
 * CreateOIDCConfig response structure.
 * @class
 */
class CreateOIDCConfigResponse extends  AbstractModel {
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
 * PutUserPermissionsBoundary request structure.
 * @class
 */
class PutUserPermissionsBoundaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-account `Uin`
         * @type {number || null}
         */
        this.TargetUin = null;

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
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

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
 * SetDefaultPolicyVersion response structure.
 * @class
 */
class SetDefaultPolicyVersionResponse extends  AbstractModel {
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

        /**
         * Search by keyword
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
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

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

        /**
         * Tags bound to the role.
         * @type {Array.<RoleTags> || null}
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
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.SessionDuration = 'SessionDuration' in params ? params.SessionDuration : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new RoleTags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Details of policies associated with the user
 * @class
 */
class AttachedUserPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID.
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Policy name.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Policy description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Policy type (`1`: custom policy; `2`: preset policy).
         * @type {string || null}
         */
        this.StrategyType = null;

        /**
         * Creation mode (`1`: create by product feature or project permission; other values: create by policy syntax).
         * @type {string || null}
         */
        this.CreateMode = null;

        /**
         * Information on policies inherited from the user group.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<AttachedUserPolicyGroupInfo> || null}
         */
        this.Groups = null;

        /**
         * Whether the product has been deprecated (`0`: no; `1`: yes).
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Deactived = null;

        /**
         * List of deprecated products.
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new AttachedUserPolicyGroupInfo();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.Deactived = 'Deactived' in params ? params.Deactived : null;
        this.DeactivedDetail = 'DeactivedDetail' in params ? params.DeactivedDetail : null;

    }
}

/**
 * DeleteServiceLinkedRole response structure.
 * @class
 */
class DeleteServiceLinkedRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Deletion task identifier, which can be used to check the status of a service-linked role deletion.
         * @type {string || null}
         */
        this.DeletionTaskId = null;

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
        this.DeletionTaskId = 'DeletionTaskId' in params ? params.DeletionTaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteServiceLinkedRole request structure.
 * @class
 */
class DeleteServiceLinkedRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the service-linked role to be deleted.
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
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

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

        /**
         * Policy association time
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AttachmentTime = null;

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
        this.AttachmentTime = 'AttachmentTime' in params ? params.AttachmentTime : null;

    }
}

/**
 * DeleteOIDCConfig response structure.
 * @class
 */
class DeleteOIDCConfigResponse extends  AbstractModel {
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
 * Policy version details
 * @class
 */
class PolicyVersionDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy version ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VersionId = null;

        /**
         * Policy version creation time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * Whether it is the operative version. 0: no, 1: yes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsDefaultVersion = null;

        /**
         * Policy syntax text
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Document = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.IsDefaultVersion = 'IsDefaultVersion' in params ? params.IsDefaultVersion : null;
        this.Document = 'Document' in params ? params.Document : null;

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
         * Sub-user's key ID
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * Sub-user's secret key
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
 * CreateUserSAMLConfig response structure.
 * @class
 */
class CreateUserSAMLConfigResponse extends  AbstractModel {
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
 * DescribeSubAccounts response structure.
 * @class
 */
class DescribeSubAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-user list
         * @type {Array.<SubAccountUser> || null}
         */
        this.SubAccounts = null;

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

        if (params.SubAccounts) {
            this.SubAccounts = new Array();
            for (let z in params.SubAccounts) {
                let obj = new SubAccountUser();
                obj.deserialize(params.SubAccounts[z]);
                this.SubAccounts.push(obj);
            }
        }
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
 * UpdateUserSAMLConfig response structure.
 * @class
 */
class UpdateUserSAMLConfigResponse extends  AbstractModel {
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
 * DescribeSafeAuthFlagColl response structure.
 * @class
 */
class DescribeSafeAuthFlagCollResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Login protection settings
         * @type {LoginActionFlag || null}
         */
        this.LoginFlag = null;

        /**
         * Sensitive operation protection settings
         * @type {LoginActionFlag || null}
         */
        this.ActionFlag = null;

        /**
         * Suspicious login location protection settings
         * @type {OffsiteFlag || null}
         */
        this.OffsiteFlag = null;

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

        if (params.LoginFlag) {
            let obj = new LoginActionFlag();
            obj.deserialize(params.LoginFlag)
            this.LoginFlag = obj;
        }

        if (params.ActionFlag) {
            let obj = new LoginActionFlag();
            obj.deserialize(params.ActionFlag)
            this.ActionFlag = obj;
        }

        if (params.OffsiteFlag) {
            let obj = new OffsiteFlag();
            obj.deserialize(params.OffsiteFlag)
            this.OffsiteFlag = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSafeAuthFlagColl request structure.
 * @class
 */
class DescribeSafeAuthFlagCollRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-account
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
        this.SubUin = 'SubUin' in params ? params.SubUin : null;

    }
}

/**
 * PutRolePermissionsBoundary response structure.
 * @class
 */
class PutRolePermissionsBoundaryResponse extends  AbstractModel {
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
 * SetMfaFlag request structure.
 * @class
 */
class SetMfaFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sets user UIN
         * @type {number || null}
         */
        this.OpUin = null;

        /**
         * Sets login protection
         * @type {LoginActionMfaFlag || null}
         */
        this.LoginFlag = null;

        /**
         * Sets operation protection
         * @type {LoginActionMfaFlag || null}
         */
        this.ActionFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpUin = 'OpUin' in params ? params.OpUin : null;

        if (params.LoginFlag) {
            let obj = new LoginActionMfaFlag();
            obj.deserialize(params.LoginFlag)
            this.LoginFlag = obj;
        }

        if (params.ActionFlag) {
            let obj = new LoginActionMfaFlag();
            obj.deserialize(params.ActionFlag)
            this.ActionFlag = obj;
        }

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
 * ListAccessKeys response structure.
 * @class
 */
class ListAccessKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access key list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AccessKey> || null}
         */
        this.AccessKeys = null;

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

        if (params.AccessKeys) {
            this.AccessKeys = new Array();
            for (let z in params.AccessKeys) {
                let obj = new AccessKey();
                obj.deserialize(params.AccessKeys[z]);
                this.AccessKeys.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSecurityLastUsed response structure.
 * @class
 */
class GetSecurityLastUsedResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of key ID’s recent usage records.
         * @type {Array.<SecretIdLastUsed> || null}
         */
        this.SecretIdLastUsedRows = null;

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

        if (params.SecretIdLastUsedRows) {
            this.SecretIdLastUsedRows = new Array();
            for (let z in params.SecretIdLastUsedRows) {
                let obj = new SecretIdLastUsed();
                obj.deserialize(params.SecretIdLastUsedRows[z]);
                this.SecretIdLastUsedRows.push(obj);
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
         * Policy ID. Either `PolicyId` or `PolicyName` must be entered
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy name. Either `PolicyName` or `PolicyId` must be entered
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Policy description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Policy documentation, for example: `{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}`, where `principal` is used to specify the service that is authorized to use the role. For more information about this parameter, see **RoleInfo** under **Output Parameters** in the [GetRole](https://intl.cloud.tencent.com/document/product/598/36221?from_cn_redirect=1).
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * Preset policy remark
         * @type {string || null}
         */
        this.Alias = null;

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
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * DeleteOIDCConfig request structure.
 * @class
 */
class DeleteOIDCConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * OIDC IdP name.
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
 * UntagRole request structure.
 * @class
 */
class UntagRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * Role name. Specify either the role name or role ID.
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Role ID. Specify either the role ID or role name.
         * @type {string || null}
         */
        this.RoleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;

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
    SubAccountUser: SubAccountUser,
    ListAttachedRolePoliciesResponse: ListAttachedRolePoliciesResponse,
    LoginActionFlagIntl: LoginActionFlagIntl,
    UpdateUserOIDCConfigResponse: UpdateUserOIDCConfigResponse,
    ListAccessKeysRequest: ListAccessKeysRequest,
    SetMfaFlagResponse: SetMfaFlagResponse,
    DeleteUserRequest: DeleteUserRequest,
    DetachGroupPolicyRequest: DetachGroupPolicyRequest,
    DescribeRoleListResponse: DescribeRoleListResponse,
    DeleteUserResponse: DeleteUserResponse,
    TagRoleResponse: TagRoleResponse,
    GetRoleRequest: GetRoleRequest,
    CreateServiceLinkedRoleRequest: CreateServiceLinkedRoleRequest,
    ListAttachedGroupPoliciesRequest: ListAttachedGroupPoliciesRequest,
    ListGroupsForUserRequest: ListGroupsForUserRequest,
    AttachRolePolicyResponse: AttachRolePolicyResponse,
    UpdatePolicyResponse: UpdatePolicyResponse,
    DescribeOIDCConfigRequest: DescribeOIDCConfigRequest,
    GetServiceLinkedRoleDeletionStatusResponse: GetServiceLinkedRoleDeletionStatusResponse,
    GetSecurityLastUsedRequest: GetSecurityLastUsedRequest,
    DescribeUserSAMLConfigResponse: DescribeUserSAMLConfigResponse,
    DeleteUserPermissionsBoundaryResponse: DeleteUserPermissionsBoundaryResponse,
    ListUsersResponse: ListUsersResponse,
    UpdateRoleDescriptionResponse: UpdateRoleDescriptionResponse,
    GetAccountSummaryRequest: GetAccountSummaryRequest,
    DeletePolicyResponse: DeletePolicyResponse,
    GetUserAppIdResponse: GetUserAppIdResponse,
    GetUserAppIdRequest: GetUserAppIdRequest,
    DescribeOIDCConfigResponse: DescribeOIDCConfigResponse,
    ListPolicyVersionsRequest: ListPolicyVersionsRequest,
    GetCustomMFATokenInfoRequest: GetCustomMFATokenInfoRequest,
    DescribeRoleListRequest: DescribeRoleListRequest,
    DescribeUserSAMLConfigRequest: DescribeUserSAMLConfigRequest,
    DeleteAccessKeyResponse: DeleteAccessKeyResponse,
    PutRolePermissionsBoundaryRequest: PutRolePermissionsBoundaryRequest,
    GetGroupRequest: GetGroupRequest,
    StrategyInfo: StrategyInfo,
    DeleteRoleResponse: DeleteRoleResponse,
    PolicyVersionItem: PolicyVersionItem,
    DetachUserPolicyRequest: DetachUserPolicyRequest,
    DescribeSubAccountsRequest: DescribeSubAccountsRequest,
    DeleteUserPermissionsBoundaryRequest: DeleteUserPermissionsBoundaryRequest,
    ListSAMLProvidersRequest: ListSAMLProvidersRequest,
    CreateAccessKeyResponse: CreateAccessKeyResponse,
    DeletePolicyVersionResponse: DeletePolicyVersionResponse,
    CreateAccessKeyRequest: CreateAccessKeyRequest,
    UpdateSAMLProviderRequest: UpdateSAMLProviderRequest,
    AttachedUserPolicyGroupInfo: AttachedUserPolicyGroupInfo,
    ListGroupsForUserResponse: ListGroupsForUserResponse,
    ListUsersForGroupRequest: ListUsersForGroupRequest,
    RemoveUserFromGroupRequest: RemoveUserFromGroupRequest,
    CreatePolicyVersionResponse: CreatePolicyVersionResponse,
    ListPoliciesResponse: ListPoliciesResponse,
    DeleteAccessKeyRequest: DeleteAccessKeyRequest,
    AccessKeyDetail: AccessKeyDetail,
    OffsiteFlag: OffsiteFlag,
    GroupIdOfUidInfo: GroupIdOfUidInfo,
    UpdateRoleDescriptionRequest: UpdateRoleDescriptionRequest,
    UpdateUserSAMLConfigRequest: UpdateUserSAMLConfigRequest,
    SetDefaultPolicyVersionRequest: SetDefaultPolicyVersionRequest,
    RoleInfo: RoleInfo,
    CreatePolicyVersionRequest: CreatePolicyVersionRequest,
    SecretIdLastUsed: SecretIdLastUsed,
    UpdateAccessKeyResponse: UpdateAccessKeyResponse,
    CreateUserOIDCConfigResponse: CreateUserOIDCConfigResponse,
    ListAttachedUserAllPoliciesResponse: ListAttachedUserAllPoliciesResponse,
    DeleteGroupRequest: DeleteGroupRequest,
    GetUserResponse: GetUserResponse,
    CreatePolicyResponse: CreatePolicyResponse,
    DetachRolePolicyRequest: DetachRolePolicyRequest,
    UntagRoleResponse: UntagRoleResponse,
    DeleteRolePermissionsBoundaryRequest: DeleteRolePermissionsBoundaryRequest,
    RoleTags: RoleTags,
    DescribeUserOIDCConfigResponse: DescribeUserOIDCConfigResponse,
    DeletePolicyRequest: DeletePolicyRequest,
    GroupInfo: GroupInfo,
    AddUserRequest: AddUserRequest,
    UpdateAssumeRolePolicyRequest: UpdateAssumeRolePolicyRequest,
    LoginActionFlag: LoginActionFlag,
    DeleteRoleRequest: DeleteRoleRequest,
    UpdateRoleConsoleLoginRequest: UpdateRoleConsoleLoginRequest,
    UpdateUserResponse: UpdateUserResponse,
    UpdateAssumeRolePolicyResponse: UpdateAssumeRolePolicyResponse,
    GetPolicyVersionRequest: GetPolicyVersionRequest,
    CreateSAMLProviderResponse: CreateSAMLProviderResponse,
    DeleteRolePermissionsBoundaryResponse: DeleteRolePermissionsBoundaryResponse,
    GetUserRequest: GetUserRequest,
    LoginActionMfaFlag: LoginActionMfaFlag,
    SubAccountInfo: SubAccountInfo,
    CreateGroupRequest: CreateGroupRequest,
    SAMLProviderInfo: SAMLProviderInfo,
    DisableUserSSORequest: DisableUserSSORequest,
    UpdateSAMLProviderResponse: UpdateSAMLProviderResponse,
    UpdateAccessKeyRequest: UpdateAccessKeyRequest,
    UpdateUserRequest: UpdateUserRequest,
    CreateSAMLProviderRequest: CreateSAMLProviderRequest,
    AttachPolicyInfo: AttachPolicyInfo,
    ConsumeCustomMFATokenRequest: ConsumeCustomMFATokenRequest,
    UpdateRoleConsoleLoginResponse: UpdateRoleConsoleLoginResponse,
    AttachRolePolicyRequest: AttachRolePolicyRequest,
    ConsumeCustomMFATokenResponse: ConsumeCustomMFATokenResponse,
    AttachUserPolicyRequest: AttachUserPolicyRequest,
    ListAttachedGroupPoliciesResponse: ListAttachedGroupPoliciesResponse,
    ListAttachedUserPoliciesResponse: ListAttachedUserPoliciesResponse,
    ListGroupsResponse: ListGroupsResponse,
    PutUserPermissionsBoundaryResponse: PutUserPermissionsBoundaryResponse,
    GetPolicyVersionResponse: GetPolicyVersionResponse,
    GetCustomMFATokenInfoResponse: GetCustomMFATokenInfoResponse,
    DisableUserSSOResponse: DisableUserSSOResponse,
    CreateOIDCConfigRequest: CreateOIDCConfigRequest,
    AccessKey: AccessKey,
    GetGroupResponse: GetGroupResponse,
    UpdateOIDCConfigResponse: UpdateOIDCConfigResponse,
    AttachGroupPolicyRequest: AttachGroupPolicyRequest,
    DeleteSAMLProviderResponse: DeleteSAMLProviderResponse,
    GetAccountSummaryResponse: GetAccountSummaryResponse,
    CreateServiceLinkedRoleResponse: CreateServiceLinkedRoleResponse,
    ListUsersRequest: ListUsersRequest,
    ListCollaboratorsRequest: ListCollaboratorsRequest,
    CreateUserOIDCConfigRequest: CreateUserOIDCConfigRequest,
    AttachGroupPolicyResponse: AttachGroupPolicyResponse,
    UpdateGroupResponse: UpdateGroupResponse,
    ListEntitiesForPolicyRequest: ListEntitiesForPolicyRequest,
    TagRoleRequest: TagRoleRequest,
    ListPoliciesRequest: ListPoliciesRequest,
    GetServiceLinkedRoleDeletionStatusRequest: GetServiceLinkedRoleDeletionStatusRequest,
    DetachGroupPolicyResponse: DetachGroupPolicyResponse,
    GroupMemberInfo: GroupMemberInfo,
    CreatePolicyRequest: CreatePolicyRequest,
    ListAttachedUserAllPoliciesRequest: ListAttachedUserAllPoliciesRequest,
    DeletePolicyVersionRequest: DeletePolicyVersionRequest,
    CreateUserSAMLConfigRequest: CreateUserSAMLConfigRequest,
    UpdateGroupRequest: UpdateGroupRequest,
    DeleteSAMLProviderRequest: DeleteSAMLProviderRequest,
    UpdateOIDCConfigRequest: UpdateOIDCConfigRequest,
    CreateRoleResponse: CreateRoleResponse,
    GetSAMLProviderResponse: GetSAMLProviderResponse,
    DescribeSafeAuthFlagIntlResponse: DescribeSafeAuthFlagIntlResponse,
    ListGroupsRequest: ListGroupsRequest,
    ListPolicyVersionsResponse: ListPolicyVersionsResponse,
    GetPolicyRequest: GetPolicyRequest,
    DescribeSafeAuthFlagIntlRequest: DescribeSafeAuthFlagIntlRequest,
    UpdateUserOIDCConfigRequest: UpdateUserOIDCConfigRequest,
    AddUserToGroupRequest: AddUserToGroupRequest,
    RemoveUserFromGroupResponse: RemoveUserFromGroupResponse,
    DetachRolePolicyResponse: DetachRolePolicyResponse,
    DescribeUserOIDCConfigRequest: DescribeUserOIDCConfigRequest,
    CreateOIDCConfigResponse: CreateOIDCConfigResponse,
    AttachedPolicyOfRole: AttachedPolicyOfRole,
    PutUserPermissionsBoundaryRequest: PutUserPermissionsBoundaryRequest,
    ListSAMLProvidersResponse: ListSAMLProvidersResponse,
    SetDefaultPolicyVersionResponse: SetDefaultPolicyVersionResponse,
    ListAttachedRolePoliciesRequest: ListAttachedRolePoliciesRequest,
    GetSAMLProviderRequest: GetSAMLProviderRequest,
    DetachUserPolicyResponse: DetachUserPolicyResponse,
    GetRoleResponse: GetRoleResponse,
    CreateRoleRequest: CreateRoleRequest,
    AttachedUserPolicy: AttachedUserPolicy,
    DeleteServiceLinkedRoleResponse: DeleteServiceLinkedRoleResponse,
    ListUsersForGroupResponse: ListUsersForGroupResponse,
    GetPolicyResponse: GetPolicyResponse,
    DeleteGroupResponse: DeleteGroupResponse,
    DeleteServiceLinkedRoleRequest: DeleteServiceLinkedRoleRequest,
    AttachEntityOfPolicy: AttachEntityOfPolicy,
    DeleteOIDCConfigResponse: DeleteOIDCConfigResponse,
    PolicyVersionDetail: PolicyVersionDetail,
    AddUserResponse: AddUserResponse,
    CreateUserSAMLConfigResponse: CreateUserSAMLConfigResponse,
    DescribeSubAccountsResponse: DescribeSubAccountsResponse,
    ListEntitiesForPolicyResponse: ListEntitiesForPolicyResponse,
    AddUserToGroupResponse: AddUserToGroupResponse,
    UpdateUserSAMLConfigResponse: UpdateUserSAMLConfigResponse,
    AttachUserPolicyResponse: AttachUserPolicyResponse,
    DescribeSafeAuthFlagCollResponse: DescribeSafeAuthFlagCollResponse,
    DescribeSafeAuthFlagCollRequest: DescribeSafeAuthFlagCollRequest,
    PutRolePermissionsBoundaryResponse: PutRolePermissionsBoundaryResponse,
    SetMfaFlagRequest: SetMfaFlagRequest,
    ListCollaboratorsResponse: ListCollaboratorsResponse,
    ListAccessKeysResponse: ListAccessKeysResponse,
    GetSecurityLastUsedResponse: GetSecurityLastUsedResponse,
    ListAttachedUserPoliciesRequest: ListAttachedUserPoliciesRequest,
    UpdatePolicyRequest: UpdatePolicyRequest,
    DeleteOIDCConfigRequest: DeleteOIDCConfigRequest,
    UntagRoleRequest: UntagRoleRequest,
    CreateGroupResponse: CreateGroupResponse,

}
