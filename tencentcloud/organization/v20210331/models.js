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
 * Relationship policy permission
 * @class
 */
class OrgPermission extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Permission name
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * BindOrganizationMemberAuthAccount request structure.
 * @class
 */
class BindOrganizationMemberAuthAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Policy ID, which can be obtained through the `DescribeOrganizationMemberPolicies` API.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * List of sub-account UINs of the organization admin, which can contain up to five UINs.
         * @type {Array.<number> || null}
         */
        this.OrgSubAccountUins = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.OrgSubAccountUins = 'OrgSubAccountUins' in params ? params.OrgSubAccountUins : null;

    }
}

/**
 * CreateOrganizationMember request structure.
 * @class
 */
class CreateOrganizationMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member name, which can contain up to 25 letters, digits, and symbols `+@&._[]-:,`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Relationship policy. Valid value: `Financial`.
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * List of member financial permission IDs. `7` indicates paying, which is the default value.
         * @type {Array.<number> || null}
         */
        this.PermissionIds = null;

        /**
         * ID of the node of the member's department, which can be obtained through the `DescribeOrganizationNodes` API.
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Account name, which can contain up to 25 letters, digits, and symbols `+@&._[]-:,`.
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Member creation record ID, which is required during retry upon creation exception.
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * Payer UIN, which is required during paying for a member.
         * @type {string || null}
         */
        this.PayUin = null;

        /**
         * List of member access identity IDs, which can be obtained through the `ListOrganizationIdentity` API. `1` indicates supported, which is the default value.
         * @type {Array.<number> || null}
         */
        this.IdentityRoleID = null;

        /**
         * Verified entity relationship ID, which is required during creating members for different entities.
         * @type {number || null}
         */
        this.AuthRelationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PermissionIds = 'PermissionIds' in params ? params.PermissionIds : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.PayUin = 'PayUin' in params ? params.PayUin : null;
        this.IdentityRoleID = 'IdentityRoleID' in params ? params.IdentityRoleID : null;
        this.AuthRelationId = 'AuthRelationId' in params ? params.AuthRelationId : null;

    }
}

/**
 * Organization member
 * @class
 */
class OrgMember extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Member name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Member type. Valid values: `Invite` (invited); `Create` (created).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MemberType = null;

        /**
         * Relationship policy type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgPolicyType = null;

        /**
         * Relationship policy name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgPolicyName = null;

        /**
         * Relationship policy permission
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OrgPermission> || null}
         */
        this.OrgPermission = null;

        /**
         * Node ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Node name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * Remarks
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Creation time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Whether the member is allowed to leave. Valid values: `Allow`, `Denied`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsAllowQuit = null;

        /**
         * Payer UIN
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayUin = null;

        /**
         * Payer name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayName = null;

        /**
         * Management identity
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MemberIdentity> || null}
         */
        this.OrgIdentity = null;

        /**
         * Security information binding status. Valid values: `Unbound`, `Valid`, `Success`, `Failed`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BindStatus = null;

        /**
         * Member permission status. Valid values: `Confirmed`, `UnConfirmed`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PermissionStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MemberType = 'MemberType' in params ? params.MemberType : null;
        this.OrgPolicyType = 'OrgPolicyType' in params ? params.OrgPolicyType : null;
        this.OrgPolicyName = 'OrgPolicyName' in params ? params.OrgPolicyName : null;

        if (params.OrgPermission) {
            this.OrgPermission = new Array();
            for (let z in params.OrgPermission) {
                let obj = new OrgPermission();
                obj.deserialize(params.OrgPermission[z]);
                this.OrgPermission.push(obj);
            }
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.IsAllowQuit = 'IsAllowQuit' in params ? params.IsAllowQuit : null;
        this.PayUin = 'PayUin' in params ? params.PayUin : null;
        this.PayName = 'PayName' in params ? params.PayName : null;

        if (params.OrgIdentity) {
            this.OrgIdentity = new Array();
            for (let z in params.OrgIdentity) {
                let obj = new MemberIdentity();
                obj.deserialize(params.OrgIdentity[z]);
                this.OrgIdentity.push(obj);
            }
        }
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;
        this.PermissionStatus = 'PermissionStatus' in params ? params.PermissionStatus : null;

    }
}

/**
 * DescribeOrganizationMemberAuthIdentities request structure.
 * @class
 */
class DescribeOrganizationMemberAuthIdentitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset, which is an integer multiple of the value of `Limit`. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit, which defaults to `10`. Value range: 1-50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Organization member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;

    }
}

/**
 * CreateOrganizationMemberPolicy request structure.
 * @class
 */
class CreateOrganizationMemberPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Policy name, which can contain up to 128 letters, digits, and symbols `+=,.@_-`.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Member access identity ID, which can be obtained through the `DescribeOrganizationMemberAuthIdentities` API.
         * @type {number || null}
         */
        this.IdentityId = null;

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
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeOrganization request structure.
 * @class
 */
class DescribeOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: `en` (Tencent Cloud International); `zh` (Tencent Cloud).
         * @type {string || null}
         */
        this.Lang = null;

        /**
         * Abbreviation of the trusted service, which is required during querying the trusted service admin.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeOrganizationNodes request structure.
 * @class
 */
class DescribeOrganizationNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maximum number of returned results. Maximum value: `50`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset.
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
 * BindOrganizationMemberAuthAccount response structure.
 * @class
 */
class BindOrganizationMemberAuthAccountResponse extends  AbstractModel {
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
 * CreateOrganizationMember response structure.
 * @class
 */
class CreateOrganizationMemberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * MoveOrganizationNodeMembers request structure.
 * @class
 */
class MoveOrganizationNodeMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization node ID.
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Member UIN list.
         * @type {Array.<number> || null}
         */
        this.MemberUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;

    }
}

/**
 * ListOrganizationIdentity request structure.
 * @class
 */
class ListOrganizationIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset.  It must be an integer multiple of the value of `Limit`.  Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The limit for the number of query results.  Value range:  1-50.  Default value:  `10`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Search by name.
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Search by identity ID.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Identity type.  Valid values: `1` (Preset), `2` (Custom).
         * @type {number || null}
         */
        this.IdentityType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;

    }
}

/**
 * Member management identity
 * @class
 */
class MemberIdentity extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Identity name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IdentityAliasName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityAliasName = 'IdentityAliasName' in params ? params.IdentityAliasName : null;

    }
}

/**
 * MoveOrganizationNodeMembers response structure.
 * @class
 */
class MoveOrganizationNodeMembersResponse extends  AbstractModel {
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
 * DeleteOrganizationMembers request structure.
 * @class
 */
class DeleteOrganizationMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of UINs of the members to be deleted.
         * @type {Array.<number> || null}
         */
        this.MemberUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;

    }
}

/**
 * DeleteOrganizationNodes request structure.
 * @class
 */
class DeleteOrganizationNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of node IDs.
         * @type {Array.<number> || null}
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

    }
}

/**
 * AddOrganizationNode response structure.
 * @class
 */
class AddOrganizationNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID.
         * @type {number || null}
         */
        this.NodeId = null;

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
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Organization identity policy
 * @class
 */
class IdentityPolicy extends  AbstractModel {
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

    }
}

/**
 * ListOrganizationIdentity response structure.
 * @class
 */
class ListOrganizationIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Item details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OrgIdentity> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new OrgIdentity();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrganizationNodes response structure.
 * @class
 */
class DescribeOrganizationNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OrgNode> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new OrgNode();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrganizationMembers response structure.
 * @class
 */
class DescribeOrganizationMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member list.
         * @type {Array.<OrgMember> || null}
         */
        this.Items = null;

        /**
         * Total number.
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new OrgMember();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOrganizationMemberPolicy response structure.
 * @class
 */
class CreateOrganizationMemberPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * CancelOrganizationMemberAuthAccount response structure.
 * @class
 */
class CancelOrganizationMemberAuthAccountResponse extends  AbstractModel {
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
 * DescribeOrganization response structure.
 * @class
 */
class DescribeOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OrgId = null;

        /**
         * Creator UIN.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HostUin = null;

        /**
         * Creator name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * Organization type.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OrgType = null;

        /**
         * Whether the member is the organization admin. Valid values: `true` (yes); `false` (no).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsManager = null;

        /**
         * Policy type. Valid values: `Financial` (finance management).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgPolicyType = null;

        /**
         * Policy name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgPolicyName = null;

        /**
         * List of member financial permissions.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OrgPermission> || null}
         */
        this.OrgPermission = null;

        /**
         * Organization root node ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RootNodeId = null;

        /**
         * Organization creation time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Member joining time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JoinTime = null;

        /**
         * Whether the member is allowed to leave. Valid values: `Allow`, `Denied`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsAllowQuit = null;

        /**
         * Payer UIN.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayUin = null;

        /**
         * Payer name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayName = null;

        /**
         * Whether the member is the trusted service admin. Valid values: `true` (yes); `false` (no).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsAssignManager = null;

        /**
         * Whether the member is the verified entity admin. Valid values: `true` (yes); `false` (no).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsAuthManager = null;

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
        this.OrgId = 'OrgId' in params ? params.OrgId : null;
        this.HostUin = 'HostUin' in params ? params.HostUin : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.OrgType = 'OrgType' in params ? params.OrgType : null;
        this.IsManager = 'IsManager' in params ? params.IsManager : null;
        this.OrgPolicyType = 'OrgPolicyType' in params ? params.OrgPolicyType : null;
        this.OrgPolicyName = 'OrgPolicyName' in params ? params.OrgPolicyName : null;

        if (params.OrgPermission) {
            this.OrgPermission = new Array();
            for (let z in params.OrgPermission) {
                let obj = new OrgPermission();
                obj.deserialize(params.OrgPermission[z]);
                this.OrgPermission.push(obj);
            }
        }
        this.RootNodeId = 'RootNodeId' in params ? params.RootNodeId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.JoinTime = 'JoinTime' in params ? params.JoinTime : null;
        this.IsAllowQuit = 'IsAllowQuit' in params ? params.IsAllowQuit : null;
        this.PayUin = 'PayUin' in params ? params.PayUin : null;
        this.PayName = 'PayName' in params ? params.PayName : null;
        this.IsAssignManager = 'IsAssignManager' in params ? params.IsAssignManager : null;
        this.IsAuthManager = 'IsAuthManager' in params ? params.IsAuthManager : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrganizationMemberPolicies request structure.
 * @class
 */
class DescribeOrganizationMemberPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of returned results. Maximum value: `50`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Search keyword, which can be the policy name or description.
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * AddOrganizationNode request structure.
 * @class
 */
class AddOrganizationNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parent node ID, which can be obtained through the `DescribeOrganizationNodes` API.
         * @type {number || null}
         */
        this.ParentNodeId = null;

        /**
         * Node name, which can contain up to 40 letters, digits, and symbols `+@&._[]-`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Remarks.
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
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeOrganizationMemberAuthIdentities response structure.
 * @class
 */
class DescribeOrganizationMemberAuthIdentitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of authorizable identities
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OrgMemberAuthIdentity> || null}
         */
        this.Items = null;

        /**
         * Total number.
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new OrgMemberAuthIdentity();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Authorized policy of the organization member
 * @class
 */
class OrgMemberPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Identity ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Identity role name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IdentityRoleName = null;

        /**
         * Identity role alias.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IdentityRoleAliasName = null;

        /**
         * Description.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityRoleName = 'IdentityRoleName' in params ? params.IdentityRoleName : null;
        this.IdentityRoleAliasName = 'IdentityRoleAliasName' in params ? params.IdentityRoleAliasName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * UpdateOrganizationNode response structure.
 * @class
 */
class UpdateOrganizationNodeResponse extends  AbstractModel {
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
 * DescribeOrganizationMemberAuthAccounts request structure.
 * @class
 */
class DescribeOrganizationMemberAuthAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of returned results.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Policy ID.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * CancelOrganizationMemberAuthAccount request structure.
 * @class
 */
class CancelOrganizationMemberAuthAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Organization sub-account UIN.
         * @type {number || null}
         */
        this.OrgSubAccountUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.OrgSubAccountUin = 'OrgSubAccountUin' in params ? params.OrgSubAccountUin : null;

    }
}

/**
 * DeleteOrganizationNodes response structure.
 * @class
 */
class DeleteOrganizationNodesResponse extends  AbstractModel {
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
 * DescribeOrganizationMemberAuthAccounts response structure.
 * @class
 */
class DescribeOrganizationMemberAuthAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OrgMemberAuthAccount> || null}
         */
        this.Items = null;

        /**
         * Total number
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new OrgMemberAuthAccount();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Authorization relationship between the member and sub-account
 * @class
 */
class OrgMemberAuthAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization sub-account UIN.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OrgSubAccountUin = null;

        /**
         * Policy ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Identity ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Identity role name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IdentityRoleName = null;

        /**
         * Identity role alias.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IdentityRoleAliasName = null;

        /**
         * Creation time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Sub-account name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgSubAccountName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgSubAccountUin = 'OrgSubAccountUin' in params ? params.OrgSubAccountUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityRoleName = 'IdentityRoleName' in params ? params.IdentityRoleName : null;
        this.IdentityRoleAliasName = 'IdentityRoleAliasName' in params ? params.IdentityRoleAliasName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.OrgSubAccountName = 'OrgSubAccountName' in params ? params.OrgSubAccountName : null;

    }
}

/**
 * Authorizable identity of the organization member
 * @class
 */
class OrgMemberAuthIdentity extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Role name of an identity
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IdentityRoleName = null;

        /**
         * Role alias of an identity
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IdentityRoleAliasName = null;

        /**
         * Description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Identity type (`1`: Preset; `2`: Custom)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IdentityType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityRoleName = 'IdentityRoleName' in params ? params.IdentityRoleName : null;
        this.IdentityRoleAliasName = 'IdentityRoleAliasName' in params ? params.IdentityRoleAliasName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;

    }
}

/**
 * DescribeOrganizationMemberPolicies response structure.
 * @class
 */
class DescribeOrganizationMemberPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OrgMemberPolicy> || null}
         */
        this.Items = null;

        /**
         * Total number.
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new OrgMemberPolicy();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Organization identity
 * @class
 */
class OrgIdentity extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Identity name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IdentityAliasName = null;

        /**
         * Description.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Identity policy.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<IdentityPolicy> || null}
         */
        this.IdentityPolicy = null;

        /**
         * Identity type. Valid values: `1` (preset); `2` (custom).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IdentityType = null;

        /**
         * Update time.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityAliasName = 'IdentityAliasName' in params ? params.IdentityAliasName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.IdentityPolicy) {
            this.IdentityPolicy = new Array();
            for (let z in params.IdentityPolicy) {
                let obj = new IdentityPolicy();
                obj.deserialize(params.IdentityPolicy[z]);
                this.IdentityPolicy.push(obj);
            }
        }
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeOrganizationMembers request structure.
 * @class
 */
class DescribeOrganizationMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset, which is an integer multiple of the value of `Limit`. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit, which defaults to `10`. Value range: 1-50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Valid values: `en` (Tencent Cloud International); `zh` (Tencent Cloud).
         * @type {string || null}
         */
        this.Lang = null;

        /**
         * Search by member name or ID.
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Entity name.
         * @type {string || null}
         */
        this.AuthName = null;

        /**
         * Abbreviation of the trusted service, which is required during querying the trusted service admin.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.AuthName = 'AuthName' in params ? params.AuthName : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * UpdateOrganizationNode request structure.
 * @class
 */
class UpdateOrganizationNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID.
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Node name, which can contain up to 40 letters, digits, and symbols `+@&._[]-`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Remarks.
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
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * Department
 * @class
 */
class OrgNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization node ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parent node ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ParentNodeId = null;

        /**
         * Remarks
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Creation time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DeleteOrganizationMembers response structure.
 * @class
 */
class DeleteOrganizationMembersResponse extends  AbstractModel {
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

module.exports = {
    OrgPermission: OrgPermission,
    BindOrganizationMemberAuthAccountRequest: BindOrganizationMemberAuthAccountRequest,
    CreateOrganizationMemberRequest: CreateOrganizationMemberRequest,
    OrgMember: OrgMember,
    DescribeOrganizationMemberAuthIdentitiesRequest: DescribeOrganizationMemberAuthIdentitiesRequest,
    CreateOrganizationMemberPolicyRequest: CreateOrganizationMemberPolicyRequest,
    DescribeOrganizationRequest: DescribeOrganizationRequest,
    DescribeOrganizationNodesRequest: DescribeOrganizationNodesRequest,
    BindOrganizationMemberAuthAccountResponse: BindOrganizationMemberAuthAccountResponse,
    CreateOrganizationMemberResponse: CreateOrganizationMemberResponse,
    MoveOrganizationNodeMembersRequest: MoveOrganizationNodeMembersRequest,
    ListOrganizationIdentityRequest: ListOrganizationIdentityRequest,
    MemberIdentity: MemberIdentity,
    MoveOrganizationNodeMembersResponse: MoveOrganizationNodeMembersResponse,
    DeleteOrganizationMembersRequest: DeleteOrganizationMembersRequest,
    DeleteOrganizationNodesRequest: DeleteOrganizationNodesRequest,
    AddOrganizationNodeResponse: AddOrganizationNodeResponse,
    IdentityPolicy: IdentityPolicy,
    ListOrganizationIdentityResponse: ListOrganizationIdentityResponse,
    DescribeOrganizationNodesResponse: DescribeOrganizationNodesResponse,
    DescribeOrganizationMembersResponse: DescribeOrganizationMembersResponse,
    CreateOrganizationMemberPolicyResponse: CreateOrganizationMemberPolicyResponse,
    CancelOrganizationMemberAuthAccountResponse: CancelOrganizationMemberAuthAccountResponse,
    DescribeOrganizationResponse: DescribeOrganizationResponse,
    DescribeOrganizationMemberPoliciesRequest: DescribeOrganizationMemberPoliciesRequest,
    AddOrganizationNodeRequest: AddOrganizationNodeRequest,
    DescribeOrganizationMemberAuthIdentitiesResponse: DescribeOrganizationMemberAuthIdentitiesResponse,
    OrgMemberPolicy: OrgMemberPolicy,
    UpdateOrganizationNodeResponse: UpdateOrganizationNodeResponse,
    DescribeOrganizationMemberAuthAccountsRequest: DescribeOrganizationMemberAuthAccountsRequest,
    CancelOrganizationMemberAuthAccountRequest: CancelOrganizationMemberAuthAccountRequest,
    DeleteOrganizationNodesResponse: DeleteOrganizationNodesResponse,
    DescribeOrganizationMemberAuthAccountsResponse: DescribeOrganizationMemberAuthAccountsResponse,
    OrgMemberAuthAccount: OrgMemberAuthAccount,
    OrgMemberAuthIdentity: OrgMemberAuthIdentity,
    DescribeOrganizationMemberPoliciesResponse: DescribeOrganizationMemberPoliciesResponse,
    OrgIdentity: OrgIdentity,
    DescribeOrganizationMembersRequest: DescribeOrganizationMembersRequest,
    UpdateOrganizationNodeRequest: UpdateOrganizationNodeRequest,
    OrgNode: OrgNode,
    DeleteOrganizationMembersResponse: DeleteOrganizationMembersResponse,

}
