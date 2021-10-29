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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const SubAccountUser = models.SubAccountUser;
const ListAttachedRolePoliciesResponse = models.ListAttachedRolePoliciesResponse;
const LoginActionFlagIntl = models.LoginActionFlagIntl;
const ListAccessKeysRequest = models.ListAccessKeysRequest;
const SetMfaFlagResponse = models.SetMfaFlagResponse;
const DeleteUserRequest = models.DeleteUserRequest;
const DetachGroupPolicyRequest = models.DetachGroupPolicyRequest;
const DescribeRoleListResponse = models.DescribeRoleListResponse;
const CreatePolicyResponse = models.CreatePolicyResponse;
const GetRoleRequest = models.GetRoleRequest;
const CreateServiceLinkedRoleRequest = models.CreateServiceLinkedRoleRequest;
const ListAttachedGroupPoliciesRequest = models.ListAttachedGroupPoliciesRequest;
const ListGroupsForUserRequest = models.ListGroupsForUserRequest;
const AttachRolePolicyResponse = models.AttachRolePolicyResponse;
const GetServiceLinkedRoleDeletionStatusResponse = models.GetServiceLinkedRoleDeletionStatusResponse;
const GetSecurityLastUsedRequest = models.GetSecurityLastUsedRequest;
const DescribeUserSAMLConfigResponse = models.DescribeUserSAMLConfigResponse;
const DeleteUserPermissionsBoundaryResponse = models.DeleteUserPermissionsBoundaryResponse;
const ListUsersResponse = models.ListUsersResponse;
const UpdateRoleDescriptionResponse = models.UpdateRoleDescriptionResponse;
const GetAccountSummaryRequest = models.GetAccountSummaryRequest;
const DetachUserPolicyRequest = models.DetachUserPolicyRequest;
const ListGroupsResponse = models.ListGroupsResponse;
const ListPolicyVersionsRequest = models.ListPolicyVersionsRequest;
const GetCustomMFATokenInfoRequest = models.GetCustomMFATokenInfoRequest;
const DescribeRoleListRequest = models.DescribeRoleListRequest;
const DescribeUserSAMLConfigRequest = models.DescribeUserSAMLConfigRequest;
const GetGroupRequest = models.GetGroupRequest;
const DeleteRoleResponse = models.DeleteRoleResponse;
const PolicyVersionItem = models.PolicyVersionItem;
const DescribeSubAccountsRequest = models.DescribeSubAccountsRequest;
const DeleteUserPermissionsBoundaryRequest = models.DeleteUserPermissionsBoundaryRequest;
const ListSAMLProvidersRequest = models.ListSAMLProvidersRequest;
const ListGroupsRequest = models.ListGroupsRequest;
const DeletePolicyVersionResponse = models.DeletePolicyVersionResponse;
const UpdateSAMLProviderRequest = models.UpdateSAMLProviderRequest;
const UpdateAssumeRolePolicyRequest = models.UpdateAssumeRolePolicyRequest;
const ListGroupsForUserResponse = models.ListGroupsForUserResponse;
const ListUsersForGroupRequest = models.ListUsersForGroupRequest;
const RemoveUserFromGroupRequest = models.RemoveUserFromGroupRequest;
const CreatePolicyVersionResponse = models.CreatePolicyVersionResponse;
const ListPoliciesResponse = models.ListPoliciesResponse;
const OffsiteFlag = models.OffsiteFlag;
const GroupIdOfUidInfo = models.GroupIdOfUidInfo;
const UpdateRoleDescriptionRequest = models.UpdateRoleDescriptionRequest;
const UpdateUserSAMLConfigRequest = models.UpdateUserSAMLConfigRequest;
const DeleteGroupResponse = models.DeleteGroupResponse;
const RoleInfo = models.RoleInfo;
const DescribeSafeAuthFlagResponse = models.DescribeSafeAuthFlagResponse;
const CreatePolicyVersionRequest = models.CreatePolicyVersionRequest;
const SecretIdLastUsed = models.SecretIdLastUsed;
const DeleteGroupRequest = models.DeleteGroupRequest;
const GetUserResponse = models.GetUserResponse;
const DeleteUserResponse = models.DeleteUserResponse;
const DetachRolePolicyRequest = models.DetachRolePolicyRequest;
const DeleteRolePermissionsBoundaryRequest = models.DeleteRolePermissionsBoundaryRequest;
const StrategyInfo = models.StrategyInfo;
const DeletePolicyRequest = models.DeletePolicyRequest;
const GroupInfo = models.GroupInfo;
const AddUserRequest = models.AddUserRequest;
const LoginActionFlag = models.LoginActionFlag;
const DeleteRoleRequest = models.DeleteRoleRequest;
const UpdateRoleConsoleLoginRequest = models.UpdateRoleConsoleLoginRequest;
const GetCustomMFATokenInfoResponse = models.GetCustomMFATokenInfoResponse;
const UpdateAssumeRolePolicyResponse = models.UpdateAssumeRolePolicyResponse;
const GetPolicyVersionRequest = models.GetPolicyVersionRequest;
const CreateSAMLProviderResponse = models.CreateSAMLProviderResponse;
const DeleteRolePermissionsBoundaryResponse = models.DeleteRolePermissionsBoundaryResponse;
const GetUserRequest = models.GetUserRequest;
const LoginActionMfaFlag = models.LoginActionMfaFlag;
const SubAccountInfo = models.SubAccountInfo;
const CreateGroupRequest = models.CreateGroupRequest;
const SAMLProviderInfo = models.SAMLProviderInfo;
const UpdateSAMLProviderResponse = models.UpdateSAMLProviderResponse;
const UpdateUserRequest = models.UpdateUserRequest;
const CreateSAMLProviderRequest = models.CreateSAMLProviderRequest;
const AttachPolicyInfo = models.AttachPolicyInfo;
const PutRolePermissionsBoundaryRequest = models.PutRolePermissionsBoundaryRequest;
const UpdateRoleConsoleLoginResponse = models.UpdateRoleConsoleLoginResponse;
const AttachRolePolicyRequest = models.AttachRolePolicyRequest;
const ConsumeCustomMFATokenResponse = models.ConsumeCustomMFATokenResponse;
const AttachUserPolicyRequest = models.AttachUserPolicyRequest;
const ListAttachedGroupPoliciesResponse = models.ListAttachedGroupPoliciesResponse;
const ListAttachedUserPoliciesResponse = models.ListAttachedUserPoliciesResponse;
const PutUserPermissionsBoundaryResponse = models.PutUserPermissionsBoundaryResponse;
const DeletePolicyResponse = models.DeletePolicyResponse;
const ConsumeCustomMFATokenRequest = models.ConsumeCustomMFATokenRequest;
const AccessKey = models.AccessKey;
const GetGroupResponse = models.GetGroupResponse;
const DeleteSAMLProviderRequest = models.DeleteSAMLProviderRequest;
const DeleteSAMLProviderResponse = models.DeleteSAMLProviderResponse;
const UpdateUserResponse = models.UpdateUserResponse;
const GetAccountSummaryResponse = models.GetAccountSummaryResponse;
const CreateServiceLinkedRoleResponse = models.CreateServiceLinkedRoleResponse;
const ListUsersRequest = models.ListUsersRequest;
const ListCollaboratorsRequest = models.ListCollaboratorsRequest;
const UpdatePolicyResponse = models.UpdatePolicyResponse;
const AttachGroupPolicyResponse = models.AttachGroupPolicyResponse;
const UpdateGroupResponse = models.UpdateGroupResponse;
const ListEntitiesForPolicyRequest = models.ListEntitiesForPolicyRequest;
const ListPoliciesRequest = models.ListPoliciesRequest;
const GetServiceLinkedRoleDeletionStatusRequest = models.GetServiceLinkedRoleDeletionStatusRequest;
const DetachGroupPolicyResponse = models.DetachGroupPolicyResponse;
const CreatePolicyRequest = models.CreatePolicyRequest;
const DeletePolicyVersionRequest = models.DeletePolicyVersionRequest;
const CreateUserSAMLConfigRequest = models.CreateUserSAMLConfigRequest;
const UpdateGroupRequest = models.UpdateGroupRequest;
const GetPolicyVersionResponse = models.GetPolicyVersionResponse;
const CreateRoleResponse = models.CreateRoleResponse;
const GetSAMLProviderResponse = models.GetSAMLProviderResponse;
const DescribeSafeAuthFlagIntlResponse = models.DescribeSafeAuthFlagIntlResponse;
const ListPolicyVersionsResponse = models.ListPolicyVersionsResponse;
const GetPolicyRequest = models.GetPolicyRequest;
const DescribeSafeAuthFlagIntlRequest = models.DescribeSafeAuthFlagIntlRequest;
const SetDefaultPolicyVersionRequest = models.SetDefaultPolicyVersionRequest;
const AddUserToGroupRequest = models.AddUserToGroupRequest;
const RemoveUserFromGroupResponse = models.RemoveUserFromGroupResponse;
const DetachRolePolicyResponse = models.DetachRolePolicyResponse;
const AttachedPolicyOfRole = models.AttachedPolicyOfRole;
const PutUserPermissionsBoundaryRequest = models.PutUserPermissionsBoundaryRequest;
const ListSAMLProvidersResponse = models.ListSAMLProvidersResponse;
const SetDefaultPolicyVersionResponse = models.SetDefaultPolicyVersionResponse;
const ListAttachedRolePoliciesRequest = models.ListAttachedRolePoliciesRequest;
const GetSAMLProviderRequest = models.GetSAMLProviderRequest;
const DetachUserPolicyResponse = models.DetachUserPolicyResponse;
const GetRoleResponse = models.GetRoleResponse;
const CreateRoleRequest = models.CreateRoleRequest;
const DeleteServiceLinkedRoleResponse = models.DeleteServiceLinkedRoleResponse;
const GetPolicyResponse = models.GetPolicyResponse;
const DescribeSafeAuthFlagRequest = models.DescribeSafeAuthFlagRequest;
const AttachGroupPolicyRequest = models.AttachGroupPolicyRequest;
const DeleteServiceLinkedRoleRequest = models.DeleteServiceLinkedRoleRequest;
const AttachEntityOfPolicy = models.AttachEntityOfPolicy;
const ListUsersForGroupResponse = models.ListUsersForGroupResponse;
const PolicyVersionDetail = models.PolicyVersionDetail;
const AddUserResponse = models.AddUserResponse;
const CreateUserSAMLConfigResponse = models.CreateUserSAMLConfigResponse;
const DescribeSubAccountsResponse = models.DescribeSubAccountsResponse;
const ListEntitiesForPolicyResponse = models.ListEntitiesForPolicyResponse;
const AddUserToGroupResponse = models.AddUserToGroupResponse;
const UpdateUserSAMLConfigResponse = models.UpdateUserSAMLConfigResponse;
const AttachUserPolicyResponse = models.AttachUserPolicyResponse;
const DescribeSafeAuthFlagCollResponse = models.DescribeSafeAuthFlagCollResponse;
const DescribeSafeAuthFlagCollRequest = models.DescribeSafeAuthFlagCollRequest;
const PutRolePermissionsBoundaryResponse = models.PutRolePermissionsBoundaryResponse;
const SetMfaFlagRequest = models.SetMfaFlagRequest;
const ListCollaboratorsResponse = models.ListCollaboratorsResponse;
const ListAccessKeysResponse = models.ListAccessKeysResponse;
const GetSecurityLastUsedResponse = models.GetSecurityLastUsedResponse;
const ListAttachedUserPoliciesRequest = models.ListAttachedUserPoliciesRequest;
const UpdatePolicyRequest = models.UpdatePolicyRequest;
const GroupMemberInfo = models.GroupMemberInfo;
const CreateGroupResponse = models.CreateGroupResponse;


/**
 * cam client
 * @class
 */
class CamClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cam.tencentcloudapi.com", "2019-01-16", credential, region, profile);
    }
    
    /**
     * This API is used to set account verification for login and sensitive operations for sub-users.
     * @param {SetMfaFlagRequest} req
     * @param {function(string, SetMfaFlagResponse):void} cb
     * @public
     */
    SetMfaFlag(req, cb) {
        let resp = new SetMfaFlagResponse();
        this.request("SetMfaFlag", req, resp, cb);
    }

    /**
     * This API is used to modify a role's login permissions.
     * @param {UpdateRoleConsoleLoginRequest} req
     * @param {function(string, UpdateRoleConsoleLoginResponse):void} cb
     * @public
     */
    UpdateRoleConsoleLogin(req, cb) {
        let resp = new UpdateRoleConsoleLoginResponse();
        this.request("UpdateRoleConsoleLogin", req, resp, cb);
    }

    /**
     * This API is used to create a user group.
     * @param {CreateGroupRequest} req
     * @param {function(string, CreateGroupResponse):void} cb
     * @public
     */
    CreateGroup(req, cb) {
        let resp = new CreateGroupResponse();
        this.request("CreateGroup", req, resp, cb);
    }

    /**
     * This API is used to delete a service-linked role.
     * @param {DeleteServiceLinkedRoleRequest} req
     * @param {function(string, DeleteServiceLinkedRoleResponse):void} cb
     * @public
     */
    DeleteServiceLinkedRole(req, cb) {
        let resp = new DeleteServiceLinkedRoleResponse();
        this.request("DeleteServiceLinkedRole", req, resp, cb);
    }

    /**
     * This API is used to add sub-users.
     * @param {AddUserRequest} req
     * @param {function(string, AddUserResponse):void} cb
     * @public
     */
    AddUser(req, cb) {
        let resp = new AddUserResponse();
        this.request("AddUser", req, resp, cb);
    }

    /**
     * This API is used to create a service-linked role.
     * @param {CreateServiceLinkedRoleRequest} req
     * @param {function(string, CreateServiceLinkedRoleResponse):void} cb
     * @public
     */
    CreateServiceLinkedRole(req, cb) {
        let resp = new CreateServiceLinkedRoleResponse();
        this.request("CreateServiceLinkedRole", req, resp, cb);
    }

    /**
     * This API is used to query SAML identity provider details.
     * @param {GetSAMLProviderRequest} req
     * @param {function(string, GetSAMLProviderResponse):void} cb
     * @public
     */
    GetSAMLProvider(req, cb) {
        let resp = new GetSAMLProviderResponse();
        this.request("GetSAMLProvider", req, resp, cb);
    }

    /**
     * This API is used to query the list of SAML identity providers.
     * @param {ListSAMLProvidersRequest} req
     * @param {function(string, ListSAMLProvidersResponse):void} cb
     * @public
     */
    ListSAMLProviders(req, cb) {
        let resp = new ListSAMLProvidersResponse();
        this.request("ListSAMLProviders", req, resp, cb);
    }

    /**
     * This API (CreateRole) is used to create a role.
     * @param {CreateRoleRequest} req
     * @param {function(string, CreateRoleResponse):void} cb
     * @public
     */
    CreateRole(req, cb) {
        let resp = new CreateRoleResponse();
        this.request("CreateRole", req, resp, cb);
    }

    /**
     * This API is used to set a role permission boundary.
     * @param {PutRolePermissionsBoundaryRequest} req
     * @param {function(string, PutRolePermissionsBoundaryResponse):void} cb
     * @public
     */
    PutRolePermissionsBoundary(req, cb) {
        let resp = new PutRolePermissionsBoundaryResponse();
        this.request("PutRolePermissionsBoundary", req, resp, cb);
    }

    /**
     * This API is used to pull sub-users.
     * @param {ListUsersRequest} req
     * @param {function(string, ListUsersResponse):void} cb
     * @public
     */
    ListUsers(req, cb) {
        let resp = new ListUsersResponse();
        this.request("ListUsers", req, resp, cb);
    }

    /**
     * This API (ListAttachedRolePolicies) is used to obtain the list of the policies associated with a role.
     * @param {ListAttachedRolePoliciesRequest} req
     * @param {function(string, ListAttachedRolePoliciesResponse):void} cb
     * @public
     */
    ListAttachedRolePolicies(req, cb) {
        let resp = new ListAttachedRolePoliciesResponse();
        this.request("ListAttachedRolePolicies", req, resp, cb);
    }

    /**
     * This API (DeletePolicy) is used to delete a policy.
     * @param {DeletePolicyRequest} req
     * @param {function(string, DeletePolicyResponse):void} cb
     * @public
     */
    DeletePolicy(req, cb) {
        let resp = new DeletePolicyResponse();
        this.request("DeletePolicy", req, resp, cb);
    }

    /**
     * This API is used to delete a role permission boundary.
     * @param {DeleteRolePermissionsBoundaryRequest} req
     * @param {function(string, DeleteRolePermissionsBoundaryResponse):void} cb
     * @public
     */
    DeleteRolePermissionsBoundary(req, cb) {
        let resp = new DeleteRolePermissionsBoundaryResponse();
        this.request("DeleteRolePermissionsBoundary", req, resp, cb);
    }

    /**
     * This API is used to query user SAML configurations.
     * @param {DescribeUserSAMLConfigRequest} req
     * @param {function(string, DescribeUserSAMLConfigResponse):void} cb
     * @public
     */
    DescribeUserSAMLConfig(req, cb) {
        let resp = new DescribeUserSAMLConfigResponse();
        this.request("DescribeUserSAMLConfig", req, resp, cb);
    }

    /**
     * This API is used to delete a policy version of a policy.
     * @param {DeletePolicyVersionRequest} req
     * @param {function(string, DeletePolicyVersionResponse):void} cb
     * @public
     */
    DeletePolicyVersion(req, cb) {
        let resp = new DeletePolicyVersionResponse();
        this.request("DeletePolicyVersion", req, resp, cb);
    }

    /**
     * This API (DetachRolePolicy) is used to unassociate a policy and a role.
     * @param {DetachRolePolicyRequest} req
     * @param {function(string, DetachRolePolicyResponse):void} cb
     * @public
     */
    DetachRolePolicy(req, cb) {
        let resp = new DetachRolePolicyResponse();
        this.request("DetachRolePolicy", req, resp, cb);
    }

    /**
     * This API is used to set the operative policy version.
     * @param {SetDefaultPolicyVersionRequest} req
     * @param {function(string, SetDefaultPolicyVersionResponse):void} cb
     * @public
     */
    SetDefaultPolicyVersion(req, cb) {
        let resp = new SetDefaultPolicyVersionResponse();
        this.request("SetDefaultPolicyVersion", req, resp, cb);
    }

    /**
     * This API (DescribeRoleList) is used to get the role list under the account.
     * @param {DescribeRoleListRequest} req
     * @param {function(string, DescribeRoleListResponse):void} cb
     * @public
     */
    DescribeRoleList(req, cb) {
        let resp = new DescribeRoleListResponse();
        this.request("DescribeRoleList", req, resp, cb);
    }

    /**
     * This API is used to create a SAML identity provider.
     * @param {CreateSAMLProviderRequest} req
     * @param {function(string, CreateSAMLProviderResponse):void} cb
     * @public
     */
    CreateSAMLProvider(req, cb) {
        let resp = new CreateSAMLProviderResponse();
        this.request("CreateSAMLProvider", req, resp, cb);
    }

    /**
     * This API is used to delete a SAML identity provider.
     * @param {DeleteSAMLProviderRequest} req
     * @param {function(string, DeleteSAMLProviderResponse):void} cb
     * @public
     */
    DeleteSAMLProvider(req, cb) {
        let resp = new DeleteSAMLProviderResponse();
        this.request("DeleteSAMLProvider", req, resp, cb);
    }

    /**
     * This API is used to update a sub-user.
     * @param {UpdateUserRequest} req
     * @param {function(string, UpdateUserResponse):void} cb
     * @public
     */
    UpdateUser(req, cb) {
        let resp = new UpdateUserResponse();
        this.request("UpdateUser", req, resp, cb);
    }

    /**
     * This API (GetPolicy) is used to query and view policy details.
     * @param {GetPolicyRequest} req
     * @param {function(string, GetPolicyResponse):void} cb
     * @public
     */
    GetPolicy(req, cb) {
        let resp = new GetPolicyResponse();
        this.request("GetPolicy", req, resp, cb);
    }

    /**
     * This API is used to update SAML identity provider information.
     * @param {UpdateSAMLProviderRequest} req
     * @param {function(string, UpdateSAMLProviderResponse):void} cb
     * @public
     */
    UpdateSAMLProvider(req, cb) {
        let resp = new UpdateSAMLProviderResponse();
        this.request("UpdateSAMLProvider", req, resp, cb);
    }

    /**
     * This API is used to get information associated with a custom multi-factor Token
     * @param {GetCustomMFATokenInfoRequest} req
     * @param {function(string, GetCustomMFATokenInfoResponse):void} cb
     * @public
     */
    GetCustomMFATokenInfo(req, cb) {
        let resp = new GetCustomMFATokenInfoResponse();
        this.request("GetCustomMFATokenInfo", req, resp, cb);
    }

    /**
     * This API is used to list the access keys associated with a specified CAM user.
     * @param {ListAccessKeysRequest} req
     * @param {function(string, ListAccessKeysResponse):void} cb
     * @public
     */
    ListAccessKeys(req, cb) {
        let resp = new ListAccessKeysResponse();
        this.request("ListAccessKeys", req, resp, cb);
    }

    /**
     * This API is used to delete a user group.
     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        let resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }

    /**
     * This API (DeleteRole) is used to delete a specified role.
     * @param {DeleteRoleRequest} req
     * @param {function(string, DeleteRoleResponse):void} cb
     * @public
     */
    DeleteRole(req, cb) {
        let resp = new DeleteRoleResponse();
        this.request("DeleteRole", req, resp, cb);
    }

    /**
     * This API is used to query sub-users.
     * @param {GetUserRequest} req
     * @param {function(string, GetUserResponse):void} cb
     * @public
     */
    GetUser(req, cb) {
        let resp = new GetUserResponse();
        this.request("GetUser", req, resp, cb);
    }

    /**
     * This API is used to delete a user permission boundary.
     * @param {DeleteUserPermissionsBoundaryRequest} req
     * @param {function(string, DeleteUserPermissionsBoundaryResponse):void} cb
     * @public
     */
    DeleteUserPermissionsBoundary(req, cb) {
        let resp = new DeleteUserPermissionsBoundaryResponse();
        this.request("DeleteUserPermissionsBoundary", req, resp, cb);
    }

    /**
     * This API (ListAttachedGroupPolicies) is used to query the list of policies associated with a user group.
     * @param {ListAttachedGroupPoliciesRequest} req
     * @param {function(string, ListAttachedGroupPoliciesResponse):void} cb
     * @public
     */
    ListAttachedGroupPolicies(req, cb) {
        let resp = new ListAttachedGroupPoliciesResponse();
        this.request("ListAttachedGroupPolicies", req, resp, cb);
    }

    /**
     * This API is used to get the status of the service-linked role deletion based on the `TaskId`
     * @param {GetServiceLinkedRoleDeletionStatusRequest} req
     * @param {function(string, GetServiceLinkedRoleDeletionStatusResponse):void} cb
     * @public
     */
    GetServiceLinkedRoleDeletionStatus(req, cb) {
        let resp = new GetServiceLinkedRoleDeletionStatusResponse();
        this.request("GetServiceLinkedRoleDeletionStatus", req, resp, cb);
    }

    /**
     * This API is used to verify a custom multi-factor Token.
     * @param {ConsumeCustomMFATokenRequest} req
     * @param {function(string, ConsumeCustomMFATokenResponse):void} cb
     * @public
     */
    ConsumeCustomMFAToken(req, cb) {
        let resp = new ConsumeCustomMFATokenResponse();
        this.request("ConsumeCustomMFAToken", req, resp, cb);
    }

    /**
     * This API is used to query user group details.
     * @param {GetGroupRequest} req
     * @param {function(string, GetGroupResponse):void} cb
     * @public
     */
    GetGroup(req, cb) {
        let resp = new GetGroupResponse();
        this.request("GetGroup", req, resp, cb);
    }

    /**
     * This API is used to query policy version details.
     * @param {GetPolicyVersionRequest} req
     * @param {function(string, GetPolicyVersionResponse):void} cb
     * @public
     */
    GetPolicyVersion(req, cb) {
        let resp = new GetPolicyVersionResponse();
        this.request("GetPolicyVersion", req, resp, cb);
    }

    /**
     * This API (UpdateAssumeRolePolicy) is used to modify the trust policy of a role.
     * @param {UpdateAssumeRolePolicyRequest} req
     * @param {function(string, UpdateAssumeRolePolicyResponse):void} cb
     * @public
     */
    UpdateAssumeRolePolicy(req, cb) {
        let resp = new UpdateAssumeRolePolicyResponse();
        this.request("UpdateAssumeRolePolicy", req, resp, cb);
    }

    /**
     * This API is used to create user SAML configurations.
     * @param {CreateUserSAMLConfigRequest} req
     * @param {function(string, CreateUserSAMLConfigResponse):void} cb
     * @public
     */
    CreateUserSAMLConfig(req, cb) {
        let resp = new CreateUserSAMLConfigResponse();
        this.request("CreateUserSAMLConfig", req, resp, cb);
    }

    /**
     * This API is used to query the list of user groups.
     * @param {ListGroupsRequest} req
     * @param {function(string, ListGroupsResponse):void} cb
     * @public
     */
    ListGroups(req, cb) {
        let resp = new ListGroupsResponse();
        this.request("ListGroups", req, resp, cb);
    }

    /**
     * This API is used to add users to a user group.
     * @param {AddUserToGroupRequest} req
     * @param {function(string, AddUserToGroupResponse):void} cb
     * @public
     */
    AddUserToGroup(req, cb) {
        let resp = new AddUserToGroupResponse();
        this.request("AddUserToGroup", req, resp, cb);
    }

    /**
     * This API (AttachRolePolicy) is used to associate a policy with a role.
     * @param {AttachRolePolicyRequest} req
     * @param {function(string, AttachRolePolicyResponse):void} cb
     * @public
     */
    AttachRolePolicy(req, cb) {
        let resp = new AttachRolePolicyResponse();
        this.request("AttachRolePolicy", req, resp, cb);
    }

    /**
     * This API is used to query security settings.
     * @param {DescribeSafeAuthFlagCollRequest} req
     * @param {function(string, DescribeSafeAuthFlagCollResponse):void} cb
     * @public
     */
    DescribeSafeAuthFlagColl(req, cb) {
        let resp = new DescribeSafeAuthFlagCollResponse();
        this.request("DescribeSafeAuthFlagColl", req, resp, cb);
    }

    /**
     * This API is used to query account summary. 
     * @param {GetAccountSummaryRequest} req
     * @param {function(string, GetAccountSummaryResponse):void} cb
     * @public
     */
    GetAccountSummary(req, cb) {
        let resp = new GetAccountSummaryResponse();
        this.request("GetAccountSummary", req, resp, cb);
    }

    /**
     * This API is used to get the list of policy versions.
     * @param {ListPolicyVersionsRequest} req
     * @param {function(string, ListPolicyVersionsResponse):void} cb
     * @public
     */
    ListPolicyVersions(req, cb) {
        let resp = new ListPolicyVersionsResponse();
        this.request("ListPolicyVersions", req, resp, cb);
    }

    /**
     * This API is used to query security settings.
     * @param {DescribeSafeAuthFlagRequest} req
     * @param {function(string, DescribeSafeAuthFlagResponse):void} cb
     * @public
     */
    DescribeSafeAuthFlag(req, cb) {
        let resp = new DescribeSafeAuthFlagResponse();
        this.request("DescribeSafeAuthFlag", req, resp, cb);
    }

    /**
     * This API is used to query security settings.
     * @param {DescribeSafeAuthFlagIntlRequest} req
     * @param {function(string, DescribeSafeAuthFlagIntlResponse):void} cb
     * @public
     */
    DescribeSafeAuthFlagIntl(req, cb) {
        let resp = new DescribeSafeAuthFlagIntlResponse();
        this.request("DescribeSafeAuthFlagIntl", req, resp, cb);
    }

    /**
     * This API (GetRole) is used to get the details of a specified role.
     * @param {GetRoleRequest} req
     * @param {function(string, GetRoleResponse):void} cb
     * @public
     */
    GetRole(req, cb) {
        let resp = new GetRoleResponse();
        this.request("GetRole", req, resp, cb);
    }

    /**
     * This API (UpdateRoleDescription) is used to modify the description of a role.
     * @param {UpdateRoleDescriptionRequest} req
     * @param {function(string, UpdateRoleDescriptionResponse):void} cb
     * @public
     */
    UpdateRoleDescription(req, cb) {
        let resp = new UpdateRoleDescriptionResponse();
        this.request("UpdateRoleDescription", req, resp, cb);
    }

    /**
     * This API (ListAttachedUserPolicies) is used to query the list of policies associated with a sub-account.
     * @param {ListAttachedUserPoliciesRequest} req
     * @param {function(string, ListAttachedUserPoliciesResponse):void} cb
     * @public
     */
    ListAttachedUserPolicies(req, cb) {
        let resp = new ListAttachedUserPoliciesResponse();
        this.request("ListAttachedUserPolicies", req, resp, cb);
    }

    /**
     * This API is used to delete a sub-user.
     * @param {DeleteUserRequest} req
     * @param {function(string, DeleteUserResponse):void} cb
     * @public
     */
    DeleteUser(req, cb) {
        let resp = new DeleteUserResponse();
        this.request("DeleteUser", req, resp, cb);
    }

    /**
     * This API is used to add a policy version. After creating a policy version, you can easily change the policy by changing the policy version.
     * @param {CreatePolicyVersionRequest} req
     * @param {function(string, CreatePolicyVersionResponse):void} cb
     * @public
     */
    CreatePolicyVersion(req, cb) {
        let resp = new CreatePolicyVersionResponse();
        this.request("CreatePolicyVersion", req, resp, cb);
    }

    /**
     * This API is used to get the collaborator list.
     * @param {ListCollaboratorsRequest} req
     * @param {function(string, ListCollaboratorsResponse):void} cb
     * @public
     */
    ListCollaborators(req, cb) {
        let resp = new ListCollaboratorsResponse();
        this.request("ListCollaborators", req, resp, cb);
    }

    /**
     * This API (DetachGroupPolicy) is used to unassociate a policy and a user group.
     * @param {DetachGroupPolicyRequest} req
     * @param {function(string, DetachGroupPolicyResponse):void} cb
     * @public
     */
    DetachGroupPolicy(req, cb) {
        let resp = new DetachGroupPolicyResponse();
        this.request("DetachGroupPolicy", req, resp, cb);
    }

    /**
     * This API is used to query sub-users through the sub-user UIN list.
     * @param {DescribeSubAccountsRequest} req
     * @param {function(string, DescribeSubAccountsResponse):void} cb
     * @public
     */
    DescribeSubAccounts(req, cb) {
        let resp = new DescribeSubAccountsResponse();
        this.request("DescribeSubAccounts", req, resp, cb);
    }

    /**
     * This API is used to delete users from a user group.
     * @param {RemoveUserFromGroupRequest} req
     * @param {function(string, RemoveUserFromGroupResponse):void} cb
     * @public
     */
    RemoveUserFromGroup(req, cb) {
        let resp = new RemoveUserFromGroupResponse();
        this.request("RemoveUserFromGroup", req, resp, cb);
    }

    /**
     * This API is used to query the policy list.
     * @param {ListPoliciesRequest} req
     * @param {function(string, ListPoliciesResponse):void} cb
     * @public
     */
    ListPolicies(req, cb) {
        let resp = new ListPoliciesResponse();
        this.request("ListPolicies", req, resp, cb);
    }

    /**
     * This API is used to query the list of users associated with a user group.
     * @param {ListUsersForGroupRequest} req
     * @param {function(string, ListUsersForGroupResponse):void} cb
     * @public
     */
    ListUsersForGroup(req, cb) {
        let resp = new ListUsersForGroupResponse();
        this.request("ListUsersForGroup", req, resp, cb);
    }

    /**
     * This API (AttachUserPolicy) is used to associates a policy with a user.
     * @param {AttachUserPolicyRequest} req
     * @param {function(string, AttachUserPolicyResponse):void} cb
     * @public
     */
    AttachUserPolicy(req, cb) {
        let resp = new AttachUserPolicyResponse();
        this.request("AttachUserPolicy", req, resp, cb);
    }

    /**
     * This API (ListEntitiesForPolicy) is used to query the list of entities associated with a policy.
     * @param {ListEntitiesForPolicyRequest} req
     * @param {function(string, ListEntitiesForPolicyResponse):void} cb
     * @public
     */
    ListEntitiesForPolicy(req, cb) {
        let resp = new ListEntitiesForPolicyResponse();
        this.request("ListEntitiesForPolicy", req, resp, cb);
    }

    /**
     * This API is used to modify user SAML configurations.
     * @param {UpdateUserSAMLConfigRequest} req
     * @param {function(string, UpdateUserSAMLConfigResponse):void} cb
     * @public
     */
    UpdateUserSAMLConfig(req, cb) {
        let resp = new UpdateUserSAMLConfigResponse();
        this.request("UpdateUserSAMLConfig", req, resp, cb);
    }

    /**
     * This API is used to get a key’s recent usage details.
     * @param {GetSecurityLastUsedRequest} req
     * @param {function(string, GetSecurityLastUsedResponse):void} cb
     * @public
     */
    GetSecurityLastUsed(req, cb) {
        let resp = new GetSecurityLastUsedResponse();
        this.request("GetSecurityLastUsed", req, resp, cb);
    }

    /**
     * This API (AttachGroupPolicy) is used to associate a policy with a user group.
     * @param {AttachGroupPolicyRequest} req
     * @param {function(string, AttachGroupPolicyResponse):void} cb
     * @public
     */
    AttachGroupPolicy(req, cb) {
        let resp = new AttachGroupPolicyResponse();
        this.request("AttachGroupPolicy", req, resp, cb);
    }

    /**
     * This API is used to update a user group.
     * @param {UpdateGroupRequest} req
     * @param {function(string, UpdateGroupResponse):void} cb
     * @public
     */
    UpdateGroup(req, cb) {
        let resp = new UpdateGroupResponse();
        this.request("UpdateGroup", req, resp, cb);
    }

    /**
     * This API is used to set a user permission boundary.
     * @param {PutUserPermissionsBoundaryRequest} req
     * @param {function(string, PutUserPermissionsBoundaryResponse):void} cb
     * @public
     */
    PutUserPermissionsBoundary(req, cb) {
        let resp = new PutUserPermissionsBoundaryResponse();
        this.request("PutUserPermissionsBoundary", req, resp, cb);
    }

    /**
     * This API (CreatePolicy) is used to create a policy.
     * @param {CreatePolicyRequest} req
     * @param {function(string, CreatePolicyResponse):void} cb
     * @public
     */
    CreatePolicy(req, cb) {
        let resp = new CreatePolicyResponse();
        this.request("CreatePolicy", req, resp, cb);
    }

    /**
     * This API (DetachUserPolicy) is used to unassociate a policy and a user.
     * @param {DetachUserPolicyRequest} req
     * @param {function(string, DetachUserPolicyResponse):void} cb
     * @public
     */
    DetachUserPolicy(req, cb) {
        let resp = new DetachUserPolicyResponse();
        this.request("DetachUserPolicy", req, resp, cb);
    }

    /**
     * This API is used to list user groups associated with a user.
     * @param {ListGroupsForUserRequest} req
     * @param {function(string, ListGroupsForUserResponse):void} cb
     * @public
     */
    ListGroupsForUser(req, cb) {
        let resp = new ListGroupsForUserResponse();
        this.request("ListGroupsForUser", req, resp, cb);
    }

    /**
     * This API is used to update a policy.
This API will update the default version of an existing policy instead of creating a new one. If no policy exists, a default version will be created.
     * @param {UpdatePolicyRequest} req
     * @param {function(string, UpdatePolicyResponse):void} cb
     * @public
     */
    UpdatePolicy(req, cb) {
        let resp = new UpdatePolicyResponse();
        this.request("UpdatePolicy", req, resp, cb);
    }


}
module.exports = CamClient;
