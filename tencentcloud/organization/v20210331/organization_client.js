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
const ListRoleConfigurationsRequest = models.ListRoleConfigurationsRequest;
const GetProvisioningTaskStatusResponse = models.GetProvisioningTaskStatusResponse;
const ListGroupMembersResponse = models.ListGroupMembersResponse;
const SetExternalSAMLIdentityProviderRequest = models.SetExternalSAMLIdentityProviderRequest;
const ListGroupMembersRequest = models.ListGroupMembersRequest;
const RoleConfigurationProvisionings = models.RoleConfigurationProvisionings;
const DeleteUserRequest = models.DeleteUserRequest;
const RoleProvisioningsTask = models.RoleProvisioningsTask;
const ProvisionRoleConfigurationRequest = models.ProvisionRoleConfigurationRequest;
const ListGroupsResponse = models.ListGroupsResponse;
const DescribeIdentityCenterResponse = models.DescribeIdentityCenterResponse;
const ListOrganizationIdentityRequest = models.ListOrganizationIdentityRequest;
const DeleteOrganizationMembersRequest = models.DeleteOrganizationMembersRequest;
const AddOrganizationNodeResponse = models.AddOrganizationNodeResponse;
const ListPermissionPoliciesInRoleConfigurationResponse = models.ListPermissionPoliciesInRoleConfigurationResponse;
const MoveOrganizationNodeMembersResponse = models.MoveOrganizationNodeMembersResponse;
const RemoveExternalSAMLIdPCertificateResponse = models.RemoveExternalSAMLIdPCertificateResponse;
const CreateGroupRequest = models.CreateGroupRequest;
const ListUsersResponse = models.ListUsersResponse;
const DeleteRoleConfigurationRequest = models.DeleteRoleConfigurationRequest;
const ListOrganizationServiceResponse = models.ListOrganizationServiceResponse;
const DeleteUserSyncProvisioningResponse = models.DeleteUserSyncProvisioningResponse;
const ProvisionRoleConfigurationResponse = models.ProvisionRoleConfigurationResponse;
const DescribeOrganizationResponse = models.DescribeOrganizationResponse;
const ListOrgServiceAssignMemberRequest = models.ListOrgServiceAssignMemberRequest;
const DescribeOrganizationMemberPoliciesRequest = models.DescribeOrganizationMemberPoliciesRequest;
const CreateOrgServiceAssignRequest = models.CreateOrgServiceAssignRequest;
const TaskStatus = models.TaskStatus;
const DismantleRoleConfigurationResponse = models.DismantleRoleConfigurationResponse;
const CreateUserSyncProvisioningResponse = models.CreateUserSyncProvisioningResponse;
const ListUserSyncProvisioningsRequest = models.ListUserSyncProvisioningsRequest;
const CancelOrganizationMemberAuthAccountRequest = models.CancelOrganizationMemberAuthAccountRequest;
const GetGroupRequest = models.GetGroupRequest;
const OrganizationServiceAssign = models.OrganizationServiceAssign;
const ClearExternalSAMLIdentityProviderRequest = models.ClearExternalSAMLIdentityProviderRequest;
const DismantleRoleConfigurationRequest = models.DismantleRoleConfigurationRequest;
const OrgMemberAuthAccount = models.OrgMemberAuthAccount;
const MemberMainInfo = models.MemberMainInfo;
const CreateRoleAssignmentRequest = models.CreateRoleAssignmentRequest;
const GetTaskStatusResponse = models.GetTaskStatusResponse;
const Tag = models.Tag;
const ListRoleAssignmentsResponse = models.ListRoleAssignmentsResponse;
const UpdateUserResponse = models.UpdateUserResponse;
const RemoveUserFromGroupRequest = models.RemoveUserFromGroupRequest;
const GetExternalSAMLIdentityProviderResponse = models.GetExternalSAMLIdentityProviderResponse;
const OrgPermission = models.OrgPermission;
const BindOrganizationMemberAuthAccountRequest = models.BindOrganizationMemberAuthAccountRequest;
const GetZoneSAMLServiceProviderInfoResponse = models.GetZoneSAMLServiceProviderInfoResponse;
const DeleteOrganizationMembersResponse = models.DeleteOrganizationMembersResponse;
const DescribeOrganizationMemberAuthIdentitiesRequest = models.DescribeOrganizationMemberAuthIdentitiesRequest;
const DeleteOrgServiceAssignRequest = models.DeleteOrgServiceAssignRequest;
const DescribeOrganizationRequest = models.DescribeOrganizationRequest;
const ListPermissionPoliciesInRoleConfigurationRequest = models.ListPermissionPoliciesInRoleConfigurationRequest;
const ClearExternalSAMLIdentityProviderResponse = models.ClearExternalSAMLIdentityProviderResponse;
const BindOrganizationMemberAuthAccountResponse = models.BindOrganizationMemberAuthAccountResponse;
const CreateOrganizationMemberResponse = models.CreateOrganizationMemberResponse;
const MoveOrganizationNodeMembersRequest = models.MoveOrganizationNodeMembersRequest;
const UserSyncProvisioning = models.UserSyncProvisioning;
const DeleteGroupRequest = models.DeleteGroupRequest;
const GetUserResponse = models.GetUserResponse;
const DeleteOrganizationNodesRequest = models.DeleteOrganizationNodesRequest;
const DeleteUserResponse = models.DeleteUserResponse;
const IdentityPolicy = models.IdentityPolicy;
const ListOrganizationIdentityResponse = models.ListOrganizationIdentityResponse;
const DescribeOrganizationMembersResponse = models.DescribeOrganizationMembersResponse;
const GroupInfo = models.GroupInfo;
const RoleAssignments = models.RoleAssignments;
const GetZoneStatisticsRequest = models.GetZoneStatisticsRequest;
const NodeMainInfo = models.NodeMainInfo;
const RemovePermissionPolicyFromRoleConfigurationRequest = models.RemovePermissionPolicyFromRoleConfigurationRequest;
const InviteOrganizationMemberRequest = models.InviteOrganizationMemberRequest;
const ListTasksResponse = models.ListTasksResponse;
const AddOrganizationNodeRequest = models.AddOrganizationNodeRequest;
const OrgNode = models.OrgNode;
const OpenIdentityCenterRequest = models.OpenIdentityCenterRequest;
const DescribeOrganizationMemberAuthAccountsRequest = models.DescribeOrganizationMemberAuthAccountsRequest;
const GetUserRequest = models.GetUserRequest;
const DescribeOrganizationMemberAuthAccountsResponse = models.DescribeOrganizationMemberAuthAccountsResponse;
const RoleAssignmentInfo = models.RoleAssignmentInfo;
const ListRoleConfigurationProvisioningsRequest = models.ListRoleConfigurationProvisioningsRequest;
const OrgIdentity = models.OrgIdentity;
const DescribeIdentityCenterRequest = models.DescribeIdentityCenterRequest;
const UserInfo = models.UserInfo;
const JoinedGroups = models.JoinedGroups;
const TaskInfo = models.TaskInfo;
const ListExternalSAMLIdPCertificatesResponse = models.ListExternalSAMLIdPCertificatesResponse;
const UpdateUserRequest = models.UpdateUserRequest;
const ListGroupsRequest = models.ListGroupsRequest;
const UpdateRoleConfigurationRequest = models.UpdateRoleConfigurationRequest;
const DeleteRoleAssignmentResponse = models.DeleteRoleAssignmentResponse;
const ListOrgServiceAssignMemberResponse = models.ListOrgServiceAssignMemberResponse;
const CreateOrgServiceAssignResponse = models.CreateOrgServiceAssignResponse;
const AddPermissionPolicyToRoleConfigurationRequest = models.AddPermissionPolicyToRoleConfigurationRequest;
const UpdateOrganizationNodeResponse = models.UpdateOrganizationNodeResponse;
const CreateOrganizationMemberPolicyRequest = models.CreateOrganizationMemberPolicyRequest;
const SAMLIdPCertificate = models.SAMLIdPCertificate;
const ListTasksRequest = models.ListTasksRequest;
const ListJoinedGroupsForUserRequest = models.ListJoinedGroupsForUserRequest;
const MemberIdentity = models.MemberIdentity;
const GetExternalSAMLIdentityProviderRequest = models.GetExternalSAMLIdentityProviderRequest;
const DeleteRoleConfigurationResponse = models.DeleteRoleConfigurationResponse;
const OrganizationServiceAssignMember = models.OrganizationServiceAssignMember;
const GetGroupResponse = models.GetGroupResponse;
const OrgMemberPolicy = models.OrgMemberPolicy;
const CreateOrganizationMemberPolicyResponse = models.CreateOrganizationMemberPolicyResponse;
const GetUserSyncProvisioningResponse = models.GetUserSyncProvisioningResponse;
const CancelOrganizationMemberAuthAccountResponse = models.CancelOrganizationMemberAuthAccountResponse;
const GetRoleConfigurationResponse = models.GetRoleConfigurationResponse;
const SetExternalSAMLIdentityProviderResponse = models.SetExternalSAMLIdentityProviderResponse;
const UpdateUserStatusRequest = models.UpdateUserStatusRequest;
const OpenIdentityCenterResponse = models.OpenIdentityCenterResponse;
const ListUsersRequest = models.ListUsersRequest;
const GroupMembers = models.GroupMembers;
const CreateRoleAssignmentResponse = models.CreateRoleAssignmentResponse;
const RoleConfiguration = models.RoleConfiguration;
const CreateUserRequest = models.CreateUserRequest;
const UpdateZoneResponse = models.UpdateZoneResponse;
const GetZoneStatisticsResponse = models.GetZoneStatisticsResponse;
const UpdateUserSyncProvisioningRequest = models.UpdateUserSyncProvisioningRequest;
const UpdateGroupResponse = models.UpdateGroupResponse;
const ListExternalSAMLIdPCertificatesRequest = models.ListExternalSAMLIdPCertificatesRequest;
const UpdateRoleConfigurationResponse = models.UpdateRoleConfigurationResponse;
const RemovePermissionPolicyFromRoleConfigurationResponse = models.RemovePermissionPolicyFromRoleConfigurationResponse;
const ListRoleConfigurationsResponse = models.ListRoleConfigurationsResponse;
const UpdateUserSyncProvisioningResponse = models.UpdateUserSyncProvisioningResponse;
const CreateOrganizationMemberRequest = models.CreateOrganizationMemberRequest;
const AuthRelationFile = models.AuthRelationFile;
const PolicyDetail = models.PolicyDetail;
const OrgMemberAuthIdentity = models.OrgMemberAuthIdentity;
const AddExternalSAMLIdPCertificateRequest = models.AddExternalSAMLIdPCertificateRequest;
const GetProvisioningTaskStatusRequest = models.GetProvisioningTaskStatusRequest;
const ListJoinedGroupsForUserResponse = models.ListJoinedGroupsForUserResponse;
const UpdateUserStatusResponse = models.UpdateUserStatusResponse;
const UpdateGroupRequest = models.UpdateGroupRequest;
const ListRoleAssignmentsRequest = models.ListRoleAssignmentsRequest;
const RemoveExternalSAMLIdPCertificateRequest = models.RemoveExternalSAMLIdPCertificateRequest;
const GetUserSyncProvisioningRequest = models.GetUserSyncProvisioningRequest;
const ListRoleConfigurationProvisioningsResponse = models.ListRoleConfigurationProvisioningsResponse;
const OrgMember = models.OrgMember;
const AddPermissionPolicyToRoleConfigurationResponse = models.AddPermissionPolicyToRoleConfigurationResponse;
const ListOrganizationServiceRequest = models.ListOrganizationServiceRequest;
const CreateRoleConfigurationRequest = models.CreateRoleConfigurationRequest;
const GetRoleConfigurationRequest = models.GetRoleConfigurationRequest;
const AddUserToGroupRequest = models.AddUserToGroupRequest;
const RemoveUserFromGroupResponse = models.RemoveUserFromGroupResponse;
const DescribeOrganizationMembersRequest = models.DescribeOrganizationMembersRequest;
const ZoneStatistics = models.ZoneStatistics;
const DescribeOrganizationNodesRequest = models.DescribeOrganizationNodesRequest;
const InviteOrganizationMemberResponse = models.InviteOrganizationMemberResponse;
const AddExternalSAMLIdPCertificateResponse = models.AddExternalSAMLIdPCertificateResponse;
const SAMLServiceProvider = models.SAMLServiceProvider;
const CreateUserResponse = models.CreateUserResponse;
const ListUserSyncProvisioningsResponse = models.ListUserSyncProvisioningsResponse;
const DeleteUserSyncProvisioningRequest = models.DeleteUserSyncProvisioningRequest;
const DescribeOrganizationNodesResponse = models.DescribeOrganizationNodesResponse;
const CreateUserSyncProvisioningRequest = models.CreateUserSyncProvisioningRequest;
const DeleteGroupResponse = models.DeleteGroupResponse;
const CreateRoleConfigurationResponse = models.CreateRoleConfigurationResponse;
const DeleteRoleAssignmentRequest = models.DeleteRoleAssignmentRequest;
const GetTaskStatusRequest = models.GetTaskStatusRequest;
const UpdateOrganizationNodeRequest = models.UpdateOrganizationNodeRequest;
const DeleteOrganizationNodesResponse = models.DeleteOrganizationNodesResponse;
const AddUserToGroupResponse = models.AddUserToGroupResponse;
const GetZoneSAMLServiceProviderInfoRequest = models.GetZoneSAMLServiceProviderInfoRequest;
const DeleteOrgServiceAssignResponse = models.DeleteOrgServiceAssignResponse;
const DescribeOrganizationMemberPoliciesResponse = models.DescribeOrganizationMemberPoliciesResponse;
const UserProvisioningsTask = models.UserProvisioningsTask;
const UserProvisioning = models.UserProvisioning;
const SAMLIdentityProviderConfiguration = models.SAMLIdentityProviderConfiguration;
const RolePolicie = models.RolePolicie;
const CreateGroupResponse = models.CreateGroupResponse;
const UpdateZoneRequest = models.UpdateZoneRequest;
const DescribeOrganizationMemberAuthIdentitiesResponse = models.DescribeOrganizationMemberAuthIdentitiesResponse;


/**
 * organization client
 * @class
 */
class OrganizationClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("organization.tencentcloudapi.com", "2021-03-31", credential, region, profile);
    }
    
    /**
     * This API is used to get the list of organization members.
     * @param {DescribeOrganizationMembersRequest} req
     * @param {function(string, DescribeOrganizationMembersResponse):void} cb
     * @public
     */
    DescribeOrganizationMembers(req, cb) {
        let resp = new DescribeOrganizationMembersResponse();
        this.request("DescribeOrganizationMembers", req, resp, cb);
    }

    /**
     * This API is used to configure the SAML identity provider information.
     * @param {SetExternalSAMLIdentityProviderRequest} req
     * @param {function(string, SetExternalSAMLIdentityProviderResponse):void} cb
     * @public
     */
    SetExternalSAMLIdentityProvider(req, cb) {
        let resp = new SetExternalSAMLIdentityProviderResponse();
        this.request("SetExternalSAMLIdentityProvider", req, resp, cb);
    }

    /**
     * This API is used to grant authorizations on member accounts.
     * @param {CreateRoleAssignmentRequest} req
     * @param {function(string, CreateRoleAssignmentResponse):void} cb
     * @public
     */
    CreateRoleAssignment(req, cb) {
        let resp = new CreateRoleAssignmentResponse();
        this.request("CreateRoleAssignment", req, resp, cb);
    }

    /**
     * This API is used to create permission configurations.
     * @param {CreateRoleConfigurationRequest} req
     * @param {function(string, CreateRoleConfigurationResponse):void} cb
     * @public
     */
    CreateRoleConfiguration(req, cb) {
        let resp = new CreateRoleConfigurationResponse();
        this.request("CreateRoleConfiguration", req, resp, cb);
    }

    /**
     * This API is used to create sub-user synchronization tasks.
     * @param {CreateUserSyncProvisioningRequest} req
     * @param {function(string, CreateUserSyncProvisioningResponse):void} cb
     * @public
     */
    CreateUserSyncProvisioning(req, cb) {
        let resp = new CreateUserSyncProvisioningResponse();
        this.request("CreateUserSyncProvisioning", req, resp, cb);
    }

    /**
     * This API is used to query the user list of the user group.
     * @param {ListGroupMembersRequest} req
     * @param {function(string, ListGroupMembersResponse):void} cb
     * @public
     */
    ListGroupMembers(req, cb) {
        let resp = new ListGroupMembersResponse();
        this.request("ListGroupMembers", req, resp, cb);
    }

    /**
     * This API is used to add policies to permission configurations.
     * @param {AddPermissionPolicyToRoleConfigurationRequest} req
     * @param {function(string, AddPermissionPolicyToRoleConfigurationResponse):void} cb
     * @public
     */
    AddPermissionPolicyToRoleConfiguration(req, cb) {
        let resp = new AddPermissionPolicyToRoleConfigurationResponse();
        this.request("AddPermissionPolicyToRoleConfiguration", req, resp, cb);
    }

    /**
     * This API is used to query the permission configuration information.
     * @param {GetRoleConfigurationRequest} req
     * @param {function(string, GetRoleConfigurationResponse):void} cb
     * @public
     */
    GetRoleConfiguration(req, cb) {
        let resp = new GetRoleConfigurationResponse();
        this.request("GetRoleConfiguration", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of organization member access authorization.
     * @param {DescribeOrganizationMemberAuthIdentitiesRequest} req
     * @param {function(string, DescribeOrganizationMemberAuthIdentitiesResponse):void} cb
     * @public
     */
    DescribeOrganizationMemberAuthIdentities(req, cb) {
        let resp = new DescribeOrganizationMemberAuthIdentitiesResponse();
        this.request("DescribeOrganizationMemberAuthIdentities", req, resp, cb);
    }

    /**
     * This API is used to add an organization node.
     * @param {AddOrganizationNodeRequest} req
     * @param {function(string, AddOrganizationNodeResponse):void} cb
     * @public
     */
    AddOrganizationNode(req, cb) {
        let resp = new AddOrganizationNodeResponse();
        this.request("AddOrganizationNode", req, resp, cb);
    }

    /**
     * This API is used to modify the user status.
     * @param {UpdateUserStatusRequest} req
     * @param {function(string, UpdateUserStatusResponse):void} cb
     * @public
     */
    UpdateUserStatus(req, cb) {
        let resp = new UpdateUserStatusResponse();
        this.request("UpdateUserStatus", req, resp, cb);
    }

    /**
     * This API is used to modify the permission configuration information.
     * @param {UpdateRoleConfigurationRequest} req
     * @param {function(string, UpdateRoleConfigurationResponse):void} cb
     * @public
     */
    UpdateRoleConfiguration(req, cb) {
        let resp = new UpdateRoleConfigurationResponse();
        this.request("UpdateRoleConfiguration", req, resp, cb);
    }

    /**
     * This API is used to create user groups.
     * @param {CreateGroupRequest} req
     * @param {function(string, CreateGroupResponse):void} cb
     * @public
     */
    CreateGroup(req, cb) {
        let resp = new CreateGroupResponse();
        this.request("CreateGroup", req, resp, cb);
    }

    /**
     * This API is used to obtain the CAM Identity Center service information.
     * @param {DescribeIdentityCenterRequest} req
     * @param {function(string, DescribeIdentityCenterResponse):void} cb
     * @public
     */
    DescribeIdentityCenter(req, cb) {
        let resp = new DescribeIdentityCenterResponse();
        this.request("DescribeIdentityCenter", req, resp, cb);
    }

    /**
     * This API is used to undeploy permission configurations on member accounts.
     * @param {DismantleRoleConfigurationRequest} req
     * @param {function(string, DismantleRoleConfigurationResponse):void} cb
     * @public
     */
    DismantleRoleConfiguration(req, cb) {
        let resp = new DismantleRoleConfigurationResponse();
        this.request("DismantleRoleConfiguration", req, resp, cb);
    }

    /**
     * This API is used to create sub-user synchronization tasks.
     * @param {UpdateUserSyncProvisioningRequest} req
     * @param {function(string, UpdateUserSyncProvisioningResponse):void} cb
     * @public
     */
    UpdateUserSyncProvisioning(req, cb) {
        let resp = new UpdateUserSyncProvisioningResponse();
        this.request("UpdateUserSyncProvisioning", req, resp, cb);
    }

    /**
     * This API is used to query space statistics.
     * @param {GetZoneStatisticsRequest} req
     * @param {function(string, GetZoneStatisticsResponse):void} cb
     * @public
     */
    GetZoneStatistics(req, cb) {
        let resp = new GetZoneStatisticsResponse();
        this.request("GetZoneStatistics", req, resp, cb);
    }

    /**
     * This API is used to query the permission configuration list.
     * @param {ListRoleConfigurationsRequest} req
     * @param {function(string, ListRoleConfigurationsResponse):void} cb
     * @public
     */
    ListRoleConfigurations(req, cb) {
        let resp = new ListRoleConfigurationsResponse();
        this.request("ListRoleConfigurations", req, resp, cb);
    }

    /**
     * This API is used to query the SAML identity provider configuration information.
     * @param {GetExternalSAMLIdentityProviderRequest} req
     * @param {function(string, GetExternalSAMLIdentityProviderResponse):void} cb
     * @public
     */
    GetExternalSAMLIdentityProvider(req, cb) {
        let resp = new GetExternalSAMLIdentityProviderResponse();
        this.request("GetExternalSAMLIdentityProvider", req, resp, cb);
    }

    /**
     * This API is used to clear the SAML identity provider configuration information.
     * @param {ClearExternalSAMLIdentityProviderRequest} req
     * @param {function(string, ClearExternalSAMLIdentityProviderResponse):void} cb
     * @public
     */
    ClearExternalSAMLIdentityProvider(req, cb) {
        let resp = new ClearExternalSAMLIdentityProviderResponse();
        this.request("ClearExternalSAMLIdentityProvider", req, resp, cb);
    }

    /**
     * This API is used to update an organization node.
     * @param {UpdateOrganizationNodeRequest} req
     * @param {function(string, UpdateOrganizationNodeResponse):void} cb
     * @public
     */
    UpdateOrganizationNode(req, cb) {
        let resp = new UpdateOrganizationNodeResponse();
        this.request("UpdateOrganizationNode", req, resp, cb);
    }

    /**
     * This API is used to remove a member account from the organization, rather than delete the account.
     * @param {DeleteOrganizationMembersRequest} req
     * @param {function(string, DeleteOrganizationMembersResponse):void} cb
     * @public
     */
    DeleteOrganizationMembers(req, cb) {
        let resp = new DeleteOrganizationMembersResponse();
        this.request("DeleteOrganizationMembers", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of delegated admins of the organization service.
     * @param {ListOrgServiceAssignMemberRequest} req
     * @param {function(string, ListOrgServiceAssignMemberResponse):void} cb
     * @public
     */
    ListOrgServiceAssignMember(req, cb) {
        let resp = new ListOrgServiceAssignMemberResponse();
        this.request("ListOrgServiceAssignMember", req, resp, cb);
    }

    /**
     * This API is used to deploy permission configurations on member accounts.
     * @param {ProvisionRoleConfigurationRequest} req
     * @param {function(string, ProvisionRoleConfigurationResponse):void} cb
     * @public
     */
    ProvisionRoleConfiguration(req, cb) {
        let resp = new ProvisionRoleConfigurationResponse();
        this.request("ProvisionRoleConfiguration", req, resp, cb);
    }

    /**
     * This API is used to batch delete organization nodes.
     * @param {DeleteOrganizationNodesRequest} req
     * @param {function(string, DeleteOrganizationNodesResponse):void} cb
     * @public
     */
    DeleteOrganizationNodes(req, cb) {
        let resp = new DeleteOrganizationNodesResponse();
        this.request("DeleteOrganizationNodes", req, resp, cb);
    }

    /**
     * This API is used to delete user groups.
     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        let resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }

    /**
     * This API is used to add a delegated admin of the organization service.
     * @param {CreateOrgServiceAssignRequest} req
     * @param {function(string, CreateOrgServiceAssignResponse):void} cb
     * @public
     */
    CreateOrgServiceAssign(req, cb) {
        let resp = new CreateOrgServiceAssignResponse();
        this.request("CreateOrgServiceAssign", req, resp, cb);
    }

    /**
     * This API is used to query the authorization list.
     * @param {ListRoleAssignmentsRequest} req
     * @param {function(string, ListRoleAssignmentsResponse):void} cb
     * @public
     */
    ListRoleAssignments(req, cb) {
        let resp = new ListRoleAssignmentsResponse();
        this.request("ListRoleAssignments", req, resp, cb);
    }

    /**
     * This API is used to query the user information.
     * @param {GetUserRequest} req
     * @param {function(string, GetUserResponse):void} cb
     * @public
     */
    GetUser(req, cb) {
        let resp = new GetUserResponse();
        this.request("GetUser", req, resp, cb);
    }

    /**
     * This API is used to activate the CIC service.
     * @param {OpenIdentityCenterRequest} req
     * @param {function(string, OpenIdentityCenterResponse):void} cb
     * @public
     */
    OpenIdentityCenter(req, cb) {
        let resp = new OpenIdentityCenterResponse();
        this.request("OpenIdentityCenter", req, resp, cb);
    }

    /**
     * This API is used to get the list of authorization policies of an organization member.
     * @param {DescribeOrganizationMemberPoliciesRequest} req
     * @param {function(string, DescribeOrganizationMemberPoliciesResponse):void} cb
     * @public
     */
    DescribeOrganizationMemberPolicies(req, cb) {
        let resp = new DescribeOrganizationMemberPoliciesResponse();
        this.request("DescribeOrganizationMemberPolicies", req, resp, cb);
    }

    /**
     * This API is used to unbind an organization member from a sub-account of the organization admin.
     * @param {CancelOrganizationMemberAuthAccountRequest} req
     * @param {function(string, CancelOrganizationMemberAuthAccountResponse):void} cb
     * @public
     */
    CancelOrganizationMemberAuthAccount(req, cb) {
        let resp = new CancelOrganizationMemberAuthAccountResponse();
        this.request("CancelOrganizationMemberAuthAccount", req, resp, cb);
    }

    /**
     * This API is used to delete sub-user synchronization tasks.
     * @param {DeleteUserSyncProvisioningRequest} req
     * @param {function(string, DeleteUserSyncProvisioningResponse):void} cb
     * @public
     */
    DeleteUserSyncProvisioning(req, cb) {
        let resp = new DeleteUserSyncProvisioningResponse();
        this.request("DeleteUserSyncProvisioning", req, resp, cb);
    }

    /**
     * This API is used to query the user group joined by users.
     * @param {ListJoinedGroupsForUserRequest} req
     * @param {function(string, ListJoinedGroupsForUserResponse):void} cb
     * @public
     */
    ListJoinedGroupsForUser(req, cb) {
        let resp = new ListJoinedGroupsForUserResponse();
        this.request("ListJoinedGroupsForUser", req, resp, cb);
    }

    /**
     * This API is used to query the user group information.
     * @param {GetGroupRequest} req
     * @param {function(string, GetGroupResponse):void} cb
     * @public
     */
    GetGroup(req, cb) {
        let resp = new GetGroupResponse();
        this.request("GetGroup", req, resp, cb);
    }

    /**
     * This API is used to invite a member.
     * @param {InviteOrganizationMemberRequest} req
     * @param {function(string, InviteOrganizationMemberResponse):void} cb
     * @public
     */
    InviteOrganizationMember(req, cb) {
        let resp = new InviteOrganizationMemberResponse();
        this.request("InviteOrganizationMember", req, resp, cb);
    }

    /**
     * This API is used to modify user information.
     * @param {UpdateUserRequest} req
     * @param {function(string, UpdateUserResponse):void} cb
     * @public
     */
    UpdateUser(req, cb) {
        let resp = new UpdateUserResponse();
        this.request("UpdateUser", req, resp, cb);
    }

    /**
     * This API is used to remove authorizations on member accounts.
     * @param {DeleteRoleAssignmentRequest} req
     * @param {function(string, DeleteRoleAssignmentResponse):void} cb
     * @public
     */
    DeleteRoleAssignment(req, cb) {
        let resp = new DeleteRoleAssignmentResponse();
        this.request("DeleteRoleAssignment", req, resp, cb);
    }

    /**
     * This API is used to query the async task list.
     * @param {ListTasksRequest} req
     * @param {function(string, ListTasksResponse):void} cb
     * @public
     */
    ListTasks(req, cb) {
        let resp = new ListTasksResponse();
        this.request("ListTasks", req, resp, cb);
    }

    /**
     * This API is used to create a user.
     * @param {CreateUserRequest} req
     * @param {function(string, CreateUserResponse):void} cb
     * @public
     */
    CreateUser(req, cb) {
        let resp = new CreateUserResponse();
        this.request("CreateUser", req, resp, cb);
    }

    /**
     * This API is used to query the CAM user synchronization.
     * @param {GetUserSyncProvisioningRequest} req
     * @param {function(string, GetUserSyncProvisioningResponse):void} cb
     * @public
     */
    GetUserSyncProvisioning(req, cb) {
        let resp = new GetUserSyncProvisioningResponse();
        this.request("GetUserSyncProvisioning", req, resp, cb);
    }

    /**
     * This API is used to query the user group list.
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
     * This API is used to move a member to the specified organization node.
     * @param {MoveOrganizationNodeMembersRequest} req
     * @param {function(string, MoveOrganizationNodeMembersResponse):void} cb
     * @public
     */
    MoveOrganizationNodeMembers(req, cb) {
        let resp = new MoveOrganizationNodeMembersResponse();
        this.request("MoveOrganizationNodeMembers", req, resp, cb);
    }

    /**
     * This API is used to delete the permission configuration information.
     * @param {DeleteRoleConfigurationRequest} req
     * @param {function(string, DeleteRoleConfigurationResponse):void} cb
     * @public
     */
    DeleteRoleConfiguration(req, cb) {
        let resp = new DeleteRoleConfigurationResponse();
        this.request("DeleteRoleConfiguration", req, resp, cb);
    }

    /**
     * This API is used to update the user's space name.
     * @param {UpdateZoneRequest} req
     * @param {function(string, UpdateZoneResponse):void} cb
     * @public
     */
    UpdateZone(req, cb) {
        let resp = new UpdateZoneResponse();
        this.request("UpdateZone", req, resp, cb);
    }

    /**
     * This API is used to add SAML signing certificates.
     * @param {AddExternalSAMLIdPCertificateRequest} req
     * @param {function(string, AddExternalSAMLIdPCertificateResponse):void} cb
     * @public
     */
    AddExternalSAMLIdPCertificate(req, cb) {
        let resp = new AddExternalSAMLIdPCertificateResponse();
        this.request("AddExternalSAMLIdPCertificate", req, resp, cb);
    }

    /**
     * This API is used to get the organization information.
     * @param {DescribeOrganizationRequest} req
     * @param {function(string, DescribeOrganizationResponse):void} cb
     * @public
     */
    DescribeOrganization(req, cb) {
        let resp = new DescribeOrganizationResponse();
        this.request("DescribeOrganization", req, resp, cb);
    }

    /**
     * This API is used to remove policies from permission configurations.
     * @param {RemovePermissionPolicyFromRoleConfigurationRequest} req
     * @param {function(string, RemovePermissionPolicyFromRoleConfigurationResponse):void} cb
     * @public
     */
    RemovePermissionPolicyFromRoleConfiguration(req, cb) {
        let resp = new RemovePermissionPolicyFromRoleConfigurationResponse();
        this.request("RemovePermissionPolicyFromRoleConfiguration", req, resp, cb);
    }

    /**
     * This API is used to delete a delegated admin of the organization service.
     * @param {DeleteOrgServiceAssignRequest} req
     * @param {function(string, DeleteOrgServiceAssignResponse):void} cb
     * @public
     */
    DeleteOrgServiceAssign(req, cb) {
        let resp = new DeleteOrgServiceAssignResponse();
        this.request("DeleteOrgServiceAssign", req, resp, cb);
    }

    /**
     * This API is used to delete a user.
     * @param {DeleteUserRequest} req
     * @param {function(string, DeleteUserResponse):void} cb
     * @public
     */
    DeleteUser(req, cb) {
        let resp = new DeleteUserResponse();
        this.request("DeleteUser", req, resp, cb);
    }

    /**
     * This API is used to create an organization member.
     * @param {CreateOrganizationMemberRequest} req
     * @param {function(string, CreateOrganizationMemberResponse):void} cb
     * @public
     */
    CreateOrganizationMember(req, cb) {
        let resp = new CreateOrganizationMemberResponse();
        this.request("CreateOrganizationMember", req, resp, cb);
    }

    /**
     * This API is used to bind an organization member to a sub-account of the organization admin.
     * @param {BindOrganizationMemberAuthAccountRequest} req
     * @param {function(string, BindOrganizationMemberAuthAccountResponse):void} cb
     * @public
     */
    BindOrganizationMemberAuthAccount(req, cb) {
        let resp = new BindOrganizationMemberAuthAccountResponse();
        this.request("BindOrganizationMemberAuthAccount", req, resp, cb);
    }

    /**
     * This API is used to obtain the policy list in permission configurations.
     * @param {ListPermissionPoliciesInRoleConfigurationRequest} req
     * @param {function(string, ListPermissionPoliciesInRoleConfigurationResponse):void} cb
     * @public
     */
    ListPermissionPoliciesInRoleConfiguration(req, cb) {
        let resp = new ListPermissionPoliciesInRoleConfigurationResponse();
        this.request("ListPermissionPoliciesInRoleConfiguration", req, resp, cb);
    }

    /**
     * This API is used to query the SAML service provider configuration information.
     * @param {GetZoneSAMLServiceProviderInfoRequest} req
     * @param {function(string, GetZoneSAMLServiceProviderInfoResponse):void} cb
     * @public
     */
    GetZoneSAMLServiceProviderInfo(req, cb) {
        let resp = new GetZoneSAMLServiceProviderInfoResponse();
        this.request("GetZoneSAMLServiceProviderInfo", req, resp, cb);
    }

    /**
     * This API is used to removes users from a user group.
     * @param {RemoveUserFromGroupRequest} req
     * @param {function(string, RemoveUserFromGroupResponse):void} cb
     * @public
     */
    RemoveUserFromGroup(req, cb) {
        let resp = new RemoveUserFromGroupResponse();
        this.request("RemoveUserFromGroup", req, resp, cb);
    }

    /**
     * This API is used to get the list of access identities of an organization member.
     * @param {ListOrganizationIdentityRequest} req
     * @param {function(string, ListOrganizationIdentityResponse):void} cb
     * @public
     */
    ListOrganizationIdentity(req, cb) {
        let resp = new ListOrganizationIdentityResponse();
        this.request("ListOrganizationIdentity", req, resp, cb);
    }

    /**
     * This API is used to get the list of sub-accounts bound to an organization member.
     * @param {DescribeOrganizationMemberAuthAccountsRequest} req
     * @param {function(string, DescribeOrganizationMemberAuthAccountsResponse):void} cb
     * @public
     */
    DescribeOrganizationMemberAuthAccounts(req, cb) {
        let resp = new DescribeOrganizationMemberAuthAccountsResponse();
        this.request("DescribeOrganizationMemberAuthAccounts", req, resp, cb);
    }

    /**
     * This API is used to query the permission configuration deployment list.
     * @param {ListRoleConfigurationProvisioningsRequest} req
     * @param {function(string, ListRoleConfigurationProvisioningsResponse):void} cb
     * @public
     */
    ListRoleConfigurationProvisionings(req, cb) {
        let resp = new ListRoleConfigurationProvisioningsResponse();
        this.request("ListRoleConfigurationProvisionings", req, resp, cb);
    }

    /**
     * This API is used to get the list of organization nodes.
     * @param {DescribeOrganizationNodesRequest} req
     * @param {function(string, DescribeOrganizationNodesResponse):void} cb
     * @public
     */
    DescribeOrganizationNodes(req, cb) {
        let resp = new DescribeOrganizationNodesResponse();
        this.request("DescribeOrganizationNodes", req, resp, cb);
    }

    /**
     * This API is used to query the user list.
     * @param {ListUsersRequest} req
     * @param {function(string, ListUsersResponse):void} cb
     * @public
     */
    ListUsers(req, cb) {
        let resp = new ListUsersResponse();
        this.request("ListUsers", req, resp, cb);
    }

    /**
     * This API is used to modify user group information.
     * @param {UpdateGroupRequest} req
     * @param {function(string, UpdateGroupResponse):void} cb
     * @public
     */
    UpdateGroup(req, cb) {
        let resp = new UpdateGroupResponse();
        this.request("UpdateGroup", req, resp, cb);
    }

    /**
     * This API is used to query the status of async tasks.
     * @param {GetTaskStatusRequest} req
     * @param {function(string, GetTaskStatusResponse):void} cb
     * @public
     */
    GetTaskStatus(req, cb) {
        let resp = new GetTaskStatusResponse();
        this.request("GetTaskStatus", req, resp, cb);
    }

    /**
     * This API is used to create an organization member access policy.
     * @param {CreateOrganizationMemberPolicyRequest} req
     * @param {function(string, CreateOrganizationMemberPolicyResponse):void} cb
     * @public
     */
    CreateOrganizationMemberPolicy(req, cb) {
        let resp = new CreateOrganizationMemberPolicyResponse();
        this.request("CreateOrganizationMemberPolicy", req, resp, cb);
    }

    /**
     * This API is used to query the SAML signing certificate list.
     * @param {ListExternalSAMLIdPCertificatesRequest} req
     * @param {function(string, ListExternalSAMLIdPCertificatesResponse):void} cb
     * @public
     */
    ListExternalSAMLIdPCertificates(req, cb) {
        let resp = new ListExternalSAMLIdPCertificatesResponse();
        this.request("ListExternalSAMLIdPCertificates", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of organization service settings.
     * @param {ListOrganizationServiceRequest} req
     * @param {function(string, ListOrganizationServiceResponse):void} cb
     * @public
     */
    ListOrganizationService(req, cb) {
        let resp = new ListOrganizationServiceResponse();
        this.request("ListOrganizationService", req, resp, cb);
    }

    /**
     * This API is used to query the status of async tasks of user synchronization.
     * @param {GetProvisioningTaskStatusRequest} req
     * @param {function(string, GetProvisioningTaskStatusResponse):void} cb
     * @public
     */
    GetProvisioningTaskStatus(req, cb) {
        let resp = new GetProvisioningTaskStatusResponse();
        this.request("GetProvisioningTaskStatus", req, resp, cb);
    }

    /**
     * This API is used to remove SAML signing certificates.
     * @param {RemoveExternalSAMLIdPCertificateRequest} req
     * @param {function(string, RemoveExternalSAMLIdPCertificateResponse):void} cb
     * @public
     */
    RemoveExternalSAMLIdPCertificate(req, cb) {
        let resp = new RemoveExternalSAMLIdPCertificateResponse();
        this.request("RemoveExternalSAMLIdPCertificate", req, resp, cb);
    }

    /**
     * This API is used to query the CAM user synchronization list.
     * @param {ListUserSyncProvisioningsRequest} req
     * @param {function(string, ListUserSyncProvisioningsResponse):void} cb
     * @public
     */
    ListUserSyncProvisionings(req, cb) {
        let resp = new ListUserSyncProvisioningsResponse();
        this.request("ListUserSyncProvisionings", req, resp, cb);
    }


}
module.exports = OrganizationClient;
