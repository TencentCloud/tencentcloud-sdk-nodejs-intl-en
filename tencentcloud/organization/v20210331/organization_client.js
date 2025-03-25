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
const UpdateRoleConfigurationResponse = models.UpdateRoleConfigurationResponse;
const ListRoleConfigurationsRequest = models.ListRoleConfigurationsRequest;
const DeleteSCIMCredentialRequest = models.DeleteSCIMCredentialRequest;
const ListGroupMembersResponse = models.ListGroupMembersResponse;
const SetExternalSAMLIdentityProviderRequest = models.SetExternalSAMLIdentityProviderRequest;
const ListGroupMembersRequest = models.ListGroupMembersRequest;
const RoleConfigurationProvisionings = models.RoleConfigurationProvisionings;
const DescribeShareUnitResourcesResponse = models.DescribeShareUnitResourcesResponse;
const DescribeOrganizationMemberEmailBindResponse = models.DescribeOrganizationMemberEmailBindResponse;
const UpdateOrganizationIdentityRequest = models.UpdateOrganizationIdentityRequest;
const DeleteUserRequest = models.DeleteUserRequest;
const RoleProvisioningsTask = models.RoleProvisioningsTask;
const ProvisionRoleConfigurationRequest = models.ProvisionRoleConfigurationRequest;
const ListGroupsResponse = models.ListGroupsResponse;
const UpdateZoneResponse = models.UpdateZoneResponse;
const DeleteOrganizationRequest = models.DeleteOrganizationRequest;
const RejectJoinShareUnitInvitationRequest = models.RejectJoinShareUnitInvitationRequest;
const DescribeIdentityCenterResponse = models.DescribeIdentityCenterResponse;
const GetExternalSAMLIdentityProviderResponse = models.GetExternalSAMLIdentityProviderResponse;
const ListOrganizationIdentityRequest = models.ListOrganizationIdentityRequest;
const DeleteOrganizationMembersRequest = models.DeleteOrganizationMembersRequest;
const CreateOrganizationResponse = models.CreateOrganizationResponse;
const AddShareUnitResourcesResponse = models.AddShareUnitResourcesResponse;
const AddOrganizationNodeResponse = models.AddOrganizationNodeResponse;
const UpdateSCIMSynchronizationStatusResponse = models.UpdateSCIMSynchronizationStatusResponse;
const ListPermissionPoliciesInRoleConfigurationResponse = models.ListPermissionPoliciesInRoleConfigurationResponse;
const MoveOrganizationNodeMembersResponse = models.MoveOrganizationNodeMembersResponse;
const UpdateUserSyncProvisioningRequest = models.UpdateUserSyncProvisioningRequest;
const DeleteShareUnitResponse = models.DeleteShareUnitResponse;
const UpdateShareUnitRequest = models.UpdateShareUnitRequest;
const RemoveExternalSAMLIdPCertificateResponse = models.RemoveExternalSAMLIdPCertificateResponse;
const CreateGroupRequest = models.CreateGroupRequest;
const ListUsersResponse = models.ListUsersResponse;
const DeleteRoleConfigurationRequest = models.DeleteRoleConfigurationRequest;
const CreateOrganizationIdentityRequest = models.CreateOrganizationIdentityRequest;
const ListOrganizationServiceResponse = models.ListOrganizationServiceResponse;
const DeleteUserSyncProvisioningResponse = models.DeleteUserSyncProvisioningResponse;
const ProvisionRoleConfigurationResponse = models.ProvisionRoleConfigurationResponse;
const DescribeOrganizationResponse = models.DescribeOrganizationResponse;
const ListOrgServiceAssignMemberRequest = models.ListOrgServiceAssignMemberRequest;
const DescribeOrganizationMemberPoliciesRequest = models.DescribeOrganizationMemberPoliciesRequest;
const CreateOrgServiceAssignRequest = models.CreateOrgServiceAssignRequest;
const TaskStatus = models.TaskStatus;
const DeleteOrganizationMembersPolicyResponse = models.DeleteOrganizationMembersPolicyResponse;
const DismantleRoleConfigurationResponse = models.DismantleRoleConfigurationResponse;
const ClearExternalSAMLIdentityProviderRequest = models.ClearExternalSAMLIdentityProviderRequest;
const CreateUserSyncProvisioningResponse = models.CreateUserSyncProvisioningResponse;
const ListUserSyncProvisioningsRequest = models.ListUserSyncProvisioningsRequest;
const ShareUnitMember = models.ShareUnitMember;
const ListRoleAssignmentsRequest = models.ListRoleAssignmentsRequest;
const CancelOrganizationMemberAuthAccountRequest = models.CancelOrganizationMemberAuthAccountRequest;
const GetGroupRequest = models.GetGroupRequest;
const OrganizationServiceAssign = models.OrganizationServiceAssign;
const DeleteOrganizationResponse = models.DeleteOrganizationResponse;
const DismantleRoleConfigurationRequest = models.DismantleRoleConfigurationRequest;
const UpdateCustomPolicyForRoleConfigurationResponse = models.UpdateCustomPolicyForRoleConfigurationResponse;
const DescribeShareUnitMembersResponse = models.DescribeShareUnitMembersResponse;
const MemberMainInfo = models.MemberMainInfo;
const CreateRoleAssignmentRequest = models.CreateRoleAssignmentRequest;
const CreateUserResponse = models.CreateUserResponse;
const DeleteShareUnitResourcesRequest = models.DeleteShareUnitResourcesRequest;
const Tag = models.Tag;
const RejectJoinShareUnitInvitationResponse = models.RejectJoinShareUnitInvitationResponse;
const ListRoleAssignmentsResponse = models.ListRoleAssignmentsResponse;
const UpdateUserResponse = models.UpdateUserResponse;
const RemoveUserFromGroupRequest = models.RemoveUserFromGroupRequest;
const AddPermissionPolicyToRoleConfigurationRequest = models.AddPermissionPolicyToRoleConfigurationRequest;
const OrgPermission = models.OrgPermission;
const BindOrganizationMemberAuthAccountRequest = models.BindOrganizationMemberAuthAccountRequest;
const DescribeShareUnitsResponse = models.DescribeShareUnitsResponse;
const UpdateOrganizationMemberEmailBindResponse = models.UpdateOrganizationMemberEmailBindResponse;
const GetZoneSAMLServiceProviderInfoResponse = models.GetZoneSAMLServiceProviderInfoResponse;
const DeleteOrganizationMembersResponse = models.DeleteOrganizationMembersResponse;
const ManagerShareUnit = models.ManagerShareUnit;
const UpdateSCIMCredentialStatusResponse = models.UpdateSCIMCredentialStatusResponse;
const ShareUnitResource = models.ShareUnitResource;
const DescribeOrganizationMemberAuthIdentitiesRequest = models.DescribeOrganizationMemberAuthIdentitiesRequest;
const CreateOrganizationMemberAuthIdentityResponse = models.CreateOrganizationMemberAuthIdentityResponse;
const DeleteOrgServiceAssignRequest = models.DeleteOrgServiceAssignRequest;
const DescribeOrganizationRequest = models.DescribeOrganizationRequest;
const ListPermissionPoliciesInRoleConfigurationRequest = models.ListPermissionPoliciesInRoleConfigurationRequest;
const ClearExternalSAMLIdentityProviderResponse = models.ClearExternalSAMLIdentityProviderResponse;
const BindOrganizationMemberAuthAccountResponse = models.BindOrganizationMemberAuthAccountResponse;
const CreateOrganizationMemberResponse = models.CreateOrganizationMemberResponse;
const RoleAssignments = models.RoleAssignments;
const MoveOrganizationNodeMembersRequest = models.MoveOrganizationNodeMembersRequest;
const GetTaskStatusResponse = models.GetTaskStatusResponse;
const UserSyncProvisioning = models.UserSyncProvisioning;
const UpdateOrganizationMemberResponse = models.UpdateOrganizationMemberResponse;
const CreateSCIMCredentialResponse = models.CreateSCIMCredentialResponse;
const DeleteGroupRequest = models.DeleteGroupRequest;
const GetUserResponse = models.GetUserResponse;
const DeleteOrganizationNodesRequest = models.DeleteOrganizationNodesRequest;
const DeleteUserResponse = models.DeleteUserResponse;
const IdentityPolicy = models.IdentityPolicy;
const UpdateCustomPolicyForRoleConfigurationRequest = models.UpdateCustomPolicyForRoleConfigurationRequest;
const AddOrganizationMemberEmailRequest = models.AddOrganizationMemberEmailRequest;
const ListOrganizationIdentityResponse = models.ListOrganizationIdentityResponse;
const ShareArea = models.ShareArea;
const DescribeOrganizationMembersResponse = models.DescribeOrganizationMembersResponse;
const GroupInfo = models.GroupInfo;
const GetSCIMSynchronizationStatusResponse = models.GetSCIMSynchronizationStatusResponse;
const GetZoneStatisticsRequest = models.GetZoneStatisticsRequest;
const NodeMainInfo = models.NodeMainInfo;
const RemovePermissionPolicyFromRoleConfigurationRequest = models.RemovePermissionPolicyFromRoleConfigurationRequest;
const InviteOrganizationMemberRequest = models.InviteOrganizationMemberRequest;
const QuitOrganizationRequest = models.QuitOrganizationRequest;
const ListTasksResponse = models.ListTasksResponse;
const AddOrganizationNodeRequest = models.AddOrganizationNodeRequest;
const AddShareUnitMembersRequest = models.AddShareUnitMembersRequest;
const AddShareUnitRequest = models.AddShareUnitRequest;
const SendOrgMemberAccountBindEmailResponse = models.SendOrgMemberAccountBindEmailResponse;
const OrgNode = models.OrgNode;
const OpenIdentityCenterRequest = models.OpenIdentityCenterRequest;
const DescribeOrganizationMemberAuthAccountsRequest = models.DescribeOrganizationMemberAuthAccountsRequest;
const SCIMCredential = models.SCIMCredential;
const GetUserRequest = models.GetUserRequest;
const UpdateOrganizationNodeResponse = models.UpdateOrganizationNodeResponse;
const AcceptJoinShareUnitInvitationResponse = models.AcceptJoinShareUnitInvitationResponse;
const DescribeShareAreasRequest = models.DescribeShareAreasRequest;
const DescribeOrganizationMemberAuthAccountsResponse = models.DescribeOrganizationMemberAuthAccountsResponse;
const RoleAssignmentInfo = models.RoleAssignmentInfo;
const ListRoleConfigurationProvisioningsRequest = models.ListRoleConfigurationProvisioningsRequest;
const GetSCIMSynchronizationStatusRequest = models.GetSCIMSynchronizationStatusRequest;
const OrgIdentity = models.OrgIdentity;
const DescribeIdentityCenterRequest = models.DescribeIdentityCenterRequest;
const UpdateShareUnitResponse = models.UpdateShareUnitResponse;
const UserInfo = models.UserInfo;
const DeleteOrganizationMemberAuthIdentityResponse = models.DeleteOrganizationMemberAuthIdentityResponse;
const UpdateOrganizationMemberEmailBindRequest = models.UpdateOrganizationMemberEmailBindRequest;
const TaskInfo = models.TaskInfo;
const DeleteOrganizationMemberAuthIdentityRequest = models.DeleteOrganizationMemberAuthIdentityRequest;
const UpdateUserRequest = models.UpdateUserRequest;
const ListGroupsRequest = models.ListGroupsRequest;
const UpdateRoleConfigurationRequest = models.UpdateRoleConfigurationRequest;
const ListOrgServiceAssignMemberResponse = models.ListOrgServiceAssignMemberResponse;
const SendOrgMemberAccountBindEmailRequest = models.SendOrgMemberAccountBindEmailRequest;
const DeleteRoleAssignmentResponse = models.DeleteRoleAssignmentResponse;
const GetTaskStatusRequest = models.GetTaskStatusRequest;
const CreateOrgServiceAssignResponse = models.CreateOrgServiceAssignResponse;
const AddOrganizationMemberEmailResponse = models.AddOrganizationMemberEmailResponse;
const AddShareUnitMembersResponse = models.AddShareUnitMembersResponse;
const CreateOrganizationMemberPolicyRequest = models.CreateOrganizationMemberPolicyRequest;
const SAMLIdPCertificate = models.SAMLIdPCertificate;
const CreateOrganizationRequest = models.CreateOrganizationRequest;
const ListJoinedGroupsForUserRequest = models.ListJoinedGroupsForUserRequest;
const ShareResource = models.ShareResource;
const CreateOrganizationMembersPolicyRequest = models.CreateOrganizationMembersPolicyRequest;
const MemberIdentity = models.MemberIdentity;
const GetExternalSAMLIdentityProviderRequest = models.GetExternalSAMLIdentityProviderRequest;
const DeleteRoleConfigurationResponse = models.DeleteRoleConfigurationResponse;
const OrganizationServiceAssignMember = models.OrganizationServiceAssignMember;
const AddShareUnitResponse = models.AddShareUnitResponse;
const DescribeShareUnitResourcesRequest = models.DescribeShareUnitResourcesRequest;
const GetGroupResponse = models.GetGroupResponse;
const GetProvisioningTaskStatusResponse = models.GetProvisioningTaskStatusResponse;
const OrgMemberPolicy = models.OrgMemberPolicy;
const CreateOrganizationMemberPolicyResponse = models.CreateOrganizationMemberPolicyResponse;
const UpdateSCIMSynchronizationStatusRequest = models.UpdateSCIMSynchronizationStatusRequest;
const AcceptJoinShareUnitInvitationRequest = models.AcceptJoinShareUnitInvitationRequest;
const CancelOrganizationMemberAuthAccountResponse = models.CancelOrganizationMemberAuthAccountResponse;
const ListTasksRequest = models.ListTasksRequest;
const AddShareUnitResourcesRequest = models.AddShareUnitResourcesRequest;
const GetRoleConfigurationResponse = models.GetRoleConfigurationResponse;
const ShareMember = models.ShareMember;
const SetExternalSAMLIdentityProviderResponse = models.SetExternalSAMLIdentityProviderResponse;
const UpdateUserStatusRequest = models.UpdateUserStatusRequest;
const DeleteShareUnitMembersRequest = models.DeleteShareUnitMembersRequest;
const OpenIdentityCenterResponse = models.OpenIdentityCenterResponse;
const ListUsersRequest = models.ListUsersRequest;
const DescribeOrganizationMemberAuthIdentitiesResponse = models.DescribeOrganizationMemberAuthIdentitiesResponse;
const CreateRoleAssignmentResponse = models.CreateRoleAssignmentResponse;
const RoleConfiguration = models.RoleConfiguration;
const CreateUserRequest = models.CreateUserRequest;
const QuitOrganizationResponse = models.QuitOrganizationResponse;
const GetZoneStatisticsResponse = models.GetZoneStatisticsResponse;
const DeleteShareUnitMembersResponse = models.DeleteShareUnitMembersResponse;
const UpdateGroupResponse = models.UpdateGroupResponse;
const ListExternalSAMLIdPCertificatesRequest = models.ListExternalSAMLIdPCertificatesRequest;
const DeleteOrganizationIdentityResponse = models.DeleteOrganizationIdentityResponse;
const DescribeOrganizationMemberEmailBindRequest = models.DescribeOrganizationMemberEmailBindRequest;
const RemovePermissionPolicyFromRoleConfigurationResponse = models.RemovePermissionPolicyFromRoleConfigurationResponse;
const ListRoleConfigurationsResponse = models.ListRoleConfigurationsResponse;
const UpdateUserSyncProvisioningResponse = models.UpdateUserSyncProvisioningResponse;
const OrgMemberAuthAccount = models.OrgMemberAuthAccount;
const CreateOrganizationMemberRequest = models.CreateOrganizationMemberRequest;
const AuthRelationFile = models.AuthRelationFile;
const OrgMemberAuthIdentity = models.OrgMemberAuthIdentity;
const PolicyDetail = models.PolicyDetail;
const GetZoneSAMLServiceProviderInfoRequest = models.GetZoneSAMLServiceProviderInfoRequest;
const AddExternalSAMLIdPCertificateRequest = models.AddExternalSAMLIdPCertificateRequest;
const GetProvisioningTaskStatusRequest = models.GetProvisioningTaskStatusRequest;
const ListJoinedGroupsForUserResponse = models.ListJoinedGroupsForUserResponse;
const SAMLServiceProvider = models.SAMLServiceProvider;
const UpdateUserStatusResponse = models.UpdateUserStatusResponse;
const UpdateGroupRequest = models.UpdateGroupRequest;
const ListExternalSAMLIdPCertificatesResponse = models.ListExternalSAMLIdPCertificatesResponse;
const DescribeShareUnitMembersRequest = models.DescribeShareUnitMembersRequest;
const RemoveExternalSAMLIdPCertificateRequest = models.RemoveExternalSAMLIdPCertificateRequest;
const GetUserSyncProvisioningRequest = models.GetUserSyncProvisioningRequest;
const CreateOrganizationMemberAuthIdentityRequest = models.CreateOrganizationMemberAuthIdentityRequest;
const GetUserSyncProvisioningResponse = models.GetUserSyncProvisioningResponse;
const ListRoleConfigurationProvisioningsResponse = models.ListRoleConfigurationProvisioningsResponse;
const OrgMember = models.OrgMember;
const AddPermissionPolicyToRoleConfigurationResponse = models.AddPermissionPolicyToRoleConfigurationResponse;
const ListOrganizationServiceRequest = models.ListOrganizationServiceRequest;
const CreateRoleConfigurationRequest = models.CreateRoleConfigurationRequest;
const UpdateOrganizationMemberRequest = models.UpdateOrganizationMemberRequest;
const CreateOrganizationMembersPolicyResponse = models.CreateOrganizationMembersPolicyResponse;
const GetRoleConfigurationRequest = models.GetRoleConfigurationRequest;
const AddUserToGroupRequest = models.AddUserToGroupRequest;
const CreateOrganizationIdentityResponse = models.CreateOrganizationIdentityResponse;
const DescribeOrganizationMembersRequest = models.DescribeOrganizationMembersRequest;
const ZoneStatistics = models.ZoneStatistics;
const ListSCIMCredentialsResponse = models.ListSCIMCredentialsResponse;
const DescribeOrganizationNodesRequest = models.DescribeOrganizationNodesRequest;
const InviteOrganizationMemberResponse = models.InviteOrganizationMemberResponse;
const AddExternalSAMLIdPCertificateResponse = models.AddExternalSAMLIdPCertificateResponse;
const UpdateOrganizationIdentityResponse = models.UpdateOrganizationIdentityResponse;
const DescribeShareAreasResponse = models.DescribeShareAreasResponse;
const DeleteShareUnitResourcesResponse = models.DeleteShareUnitResourcesResponse;
const ListUserSyncProvisioningsResponse = models.ListUserSyncProvisioningsResponse;
const DeleteUserSyncProvisioningRequest = models.DeleteUserSyncProvisioningRequest;
const DescribeOrganizationNodesResponse = models.DescribeOrganizationNodesResponse;
const CreateUserSyncProvisioningRequest = models.CreateUserSyncProvisioningRequest;
const DeleteOrganizationMembersPolicyRequest = models.DeleteOrganizationMembersPolicyRequest;
const CreateSCIMCredentialRequest = models.CreateSCIMCredentialRequest;
const RemoveUserFromGroupResponse = models.RemoveUserFromGroupResponse;
const DeleteGroupResponse = models.DeleteGroupResponse;
const JoinedGroups = models.JoinedGroups;
const CreateRoleConfigurationResponse = models.CreateRoleConfigurationResponse;
const GroupMembers = models.GroupMembers;
const DeleteRoleAssignmentRequest = models.DeleteRoleAssignmentRequest;
const DeleteOrganizationIdentityRequest = models.DeleteOrganizationIdentityRequest;
const UpdateOrganizationNodeRequest = models.UpdateOrganizationNodeRequest;
const DeleteOrganizationNodesResponse = models.DeleteOrganizationNodesResponse;
const AddUserToGroupResponse = models.AddUserToGroupResponse;
const ProductResource = models.ProductResource;
const DeleteShareUnitRequest = models.DeleteShareUnitRequest;
const DeleteOrgServiceAssignResponse = models.DeleteOrgServiceAssignResponse;
const DescribeOrganizationMemberPoliciesResponse = models.DescribeOrganizationMemberPoliciesResponse;
const DescribeShareUnitsRequest = models.DescribeShareUnitsRequest;
const UserProvisioningsTask = models.UserProvisioningsTask;
const UserProvisioning = models.UserProvisioning;
const ListSCIMCredentialsRequest = models.ListSCIMCredentialsRequest;
const UpdateSCIMCredentialStatusRequest = models.UpdateSCIMCredentialStatusRequest;
const SAMLIdentityProviderConfiguration = models.SAMLIdentityProviderConfiguration;
const RolePolicie = models.RolePolicie;
const CreateGroupResponse = models.CreateGroupResponse;
const UpdateZoneRequest = models.UpdateZoneRequest;
const DeleteSCIMCredentialResponse = models.DeleteSCIMCredentialResponse;


/**
 * organization client
 * @class
 */
class OrganizationClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("organization.intl.tencentcloudapi.com", "2021-03-31", credential, region, profile);
    }
    
    /**
     * This API is used to exit an organization.
     * @param {QuitOrganizationRequest} req
     * @param {function(string, QuitOrganizationResponse):void} cb
     * @public
     */
    QuitOrganization(req, cb) {
        let resp = new QuitOrganizationResponse();
        this.request("QuitOrganization", req, resp, cb);
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
     * This API is used to modify the mailbox of a bound member.
     * @param {UpdateOrganizationMemberEmailBindRequest} req
     * @param {function(string, UpdateOrganizationMemberEmailBindResponse):void} cb
     * @public
     */
    UpdateOrganizationMemberEmailBind(req, cb) {
        let resp = new UpdateOrganizationMemberEmailBindResponse();
        this.request("UpdateOrganizationMemberEmailBind", req, resp, cb);
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
     * This API is used to enable or disable a SCIM key.
     * @param {UpdateSCIMCredentialStatusRequest} req
     * @param {function(string, UpdateSCIMCredentialStatusResponse):void} cb
     * @public
     */
    UpdateSCIMCredentialStatus(req, cb) {
        let resp = new UpdateSCIMCredentialStatusResponse();
        this.request("UpdateSCIMCredentialStatus", req, resp, cb);
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
     * This API is used to activate Identity Center service (CIC).
     * @param {OpenIdentityCenterRequest} req
     * @param {function(string, OpenIdentityCenterResponse):void} cb
     * @public
     */
    OpenIdentityCenter(req, cb) {
        let resp = new OpenIdentityCenterResponse();
        this.request("OpenIdentityCenter", req, resp, cb);
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
     * This API is used to query detailed information about member mailbox binding.
     * @param {DescribeOrganizationMemberEmailBindRequest} req
     * @param {function(string, DescribeOrganizationMemberEmailBindResponse):void} cb
     * @public
     */
    DescribeOrganizationMemberEmailBind(req, cb) {
        let resp = new DescribeOrganizationMemberEmailBindResponse();
        this.request("DescribeOrganizationMemberEmailBind", req, resp, cb);
    }

    /**
     * This API is used to delete shared unit resources.
     * @param {DeleteShareUnitResourcesRequest} req
     * @param {function(string, DeleteShareUnitResourcesResponse):void} cb
     * @public
     */
    DeleteShareUnitResources(req, cb) {
        let resp = new DeleteShareUnitResourcesResponse();
        this.request("DeleteShareUnitResources", req, resp, cb);
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
     * This API is used to accept an invitation to join a shared unit.
     * @param {AcceptJoinShareUnitInvitationRequest} req
     * @param {function(string, AcceptJoinShareUnitInvitationResponse):void} cb
     * @public
     */
    AcceptJoinShareUnitInvitation(req, cb) {
        let resp = new AcceptJoinShareUnitInvitationResponse();
        this.request("AcceptJoinShareUnitInvitation", req, resp, cb);
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
     * This API is used to update an organization identity.
     * @param {UpdateOrganizationIdentityRequest} req
     * @param {function(string, UpdateOrganizationIdentityResponse):void} cb
     * @public
     */
    UpdateOrganizationIdentity(req, cb) {
        let resp = new UpdateOrganizationIdentityResponse();
        this.request("UpdateOrganizationIdentity", req, resp, cb);
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
     * This API is used to create an organization member access policy.
     * @param {CreateOrganizationMembersPolicyRequest} req
     * @param {function(string, CreateOrganizationMembersPolicyResponse):void} cb
     * @public
     */
    CreateOrganizationMembersPolicy(req, cb) {
        let resp = new CreateOrganizationMembersPolicyResponse();
        this.request("CreateOrganizationMembersPolicy", req, resp, cb);
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
     * This API is used to add an organization identity.
     * @param {CreateOrganizationIdentityRequest} req
     * @param {function(string, CreateOrganizationIdentityResponse):void} cb
     * @public
     */
    CreateOrganizationIdentity(req, cb) {
        let resp = new CreateOrganizationIdentityResponse();
        this.request("CreateOrganizationIdentity", req, resp, cb);
    }

    /**
     * This API is used to reject an invitation to join a shared unit.
     * @param {RejectJoinShareUnitInvitationRequest} req
     * @param {function(string, RejectJoinShareUnitInvitationResponse):void} cb
     * @public
     */
    RejectJoinShareUnitInvitation(req, cb) {
        let resp = new RejectJoinShareUnitInvitationResponse();
        this.request("RejectJoinShareUnitInvitation", req, resp, cb);
    }

    /**
     * This API is used to delete a shared unit member.
     * @param {DeleteShareUnitMembersRequest} req
     * @param {function(string, DeleteShareUnitMembersResponse):void} cb
     * @public
     */
    DeleteShareUnitMembers(req, cb) {
        let resp = new DeleteShareUnitMembersResponse();
        this.request("DeleteShareUnitMembers", req, resp, cb);
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
     * This API is used to create a shared unit.
     * @param {AddShareUnitRequest} req
     * @param {function(string, AddShareUnitResponse):void} cb
     * @public
     */
    AddShareUnit(req, cb) {
        let resp = new AddShareUnitResponse();
        this.request("AddShareUnit", req, resp, cb);
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
     * This API is used to add a shared unit member.
     * @param {AddShareUnitMembersRequest} req
     * @param {function(string, AddShareUnitMembersResponse):void} cb
     * @public
     */
    AddShareUnitMembers(req, cb) {
        let resp = new AddShareUnitMembersResponse();
        this.request("AddShareUnitMembers", req, resp, cb);
    }

    /**
     * This API is used to resend an email for activating the member's bound mailbox.
     * @param {SendOrgMemberAccountBindEmailRequest} req
     * @param {function(string, SendOrgMemberAccountBindEmailResponse):void} cb
     * @public
     */
    SendOrgMemberAccountBindEmail(req, cb) {
        let resp = new SendOrgMemberAccountBindEmailResponse();
        this.request("SendOrgMemberAccountBindEmail", req, resp, cb);
    }

    /**
     * This API is used to obtain a list of shared units.
     * @param {DescribeShareUnitsRequest} req
     * @param {function(string, DescribeShareUnitsResponse):void} cb
     * @public
     */
    DescribeShareUnits(req, cb) {
        let resp = new DescribeShareUnitsResponse();
        this.request("DescribeShareUnits", req, resp, cb);
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
     * This API is used to delete an organization member access policy.
     * @param {DeleteOrganizationMembersPolicyRequest} req
     * @param {function(string, DeleteOrganizationMembersPolicyResponse):void} cb
     * @public
     */
    DeleteOrganizationMembersPolicy(req, cb) {
        let resp = new DeleteOrganizationMembersPolicyResponse();
        this.request("DeleteOrganizationMembersPolicy", req, resp, cb);
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
     * This API is used to obtain the member list of a shared unit.
     * @param {DescribeShareUnitMembersRequest} req
     * @param {function(string, DescribeShareUnitMembersResponse):void} cb
     * @public
     */
    DescribeShareUnitMembers(req, cb) {
        let resp = new DescribeShareUnitMembersResponse();
        this.request("DescribeShareUnitMembers", req, resp, cb);
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
     * This API is used to delete a shared unit.
     * @param {DeleteShareUnitRequest} req
     * @param {function(string, DeleteShareUnitResponse):void} cb
     * @public
     */
    DeleteShareUnit(req, cb) {
        let resp = new DeleteShareUnitResponse();
        this.request("DeleteShareUnit", req, resp, cb);
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
     * This API is used to add an organization member's mailbox.
     * @param {AddOrganizationMemberEmailRequest} req
     * @param {function(string, AddOrganizationMemberEmailResponse):void} cb
     * @public
     */
    AddOrganizationMemberEmail(req, cb) {
        let resp = new AddOrganizationMemberEmailResponse();
        this.request("AddOrganizationMemberEmail", req, resp, cb);
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
     * This API is used to query SCIM synchronization status.
     * @param {GetSCIMSynchronizationStatusRequest} req
     * @param {function(string, GetSCIMSynchronizationStatusResponse):void} cb
     * @public
     */
    GetSCIMSynchronizationStatus(req, cb) {
        let resp = new GetSCIMSynchronizationStatusResponse();
        this.request("GetSCIMSynchronizationStatus", req, resp, cb);
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
     * This API is used to delete an organization.
     * @param {DeleteOrganizationRequest} req
     * @param {function(string, DeleteOrganizationResponse):void} cb
     * @public
     */
    DeleteOrganization(req, cb) {
        let resp = new DeleteOrganizationResponse();
        this.request("DeleteOrganization", req, resp, cb);
    }

    /**
     * This API is used to delete a SCIM key.
     * @param {DeleteSCIMCredentialRequest} req
     * @param {function(string, DeleteSCIMCredentialResponse):void} cb
     * @public
     */
    DeleteSCIMCredential(req, cb) {
        let resp = new DeleteSCIMCredentialResponse();
        this.request("DeleteSCIMCredential", req, resp, cb);
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
     * This API is used to enable or disable user SCIM synchronization.
     * @param {UpdateSCIMSynchronizationStatusRequest} req
     * @param {function(string, UpdateSCIMSynchronizationStatusResponse):void} cb
     * @public
     */
    UpdateSCIMSynchronizationStatus(req, cb) {
        let resp = new UpdateSCIMSynchronizationStatusResponse();
        this.request("UpdateSCIMSynchronizationStatus", req, resp, cb);
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
     * This API is used to obtain the resource list of a shared unit.
     * @param {DescribeShareUnitResourcesRequest} req
     * @param {function(string, DescribeShareUnitResourcesResponse):void} cb
     * @public
     */
    DescribeShareUnitResources(req, cb) {
        let resp = new DescribeShareUnitResourcesResponse();
        this.request("DescribeShareUnitResources", req, resp, cb);
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
     * This API is used to update a shared unit.
     * @param {UpdateShareUnitRequest} req
     * @param {function(string, UpdateShareUnitResponse):void} cb
     * @public
     */
    UpdateShareUnit(req, cb) {
        let resp = new UpdateShareUnitResponse();
        this.request("UpdateShareUnit", req, resp, cb);
    }

    /**
     * This API is used to update organization member information.
     * @param {UpdateOrganizationMemberRequest} req
     * @param {function(string, UpdateOrganizationMemberResponse):void} cb
     * @public
     */
    UpdateOrganizationMember(req, cb) {
        let resp = new UpdateOrganizationMemberResponse();
        this.request("UpdateOrganizationMember", req, resp, cb);
    }

    /**
     * This API is used to obtain TCO Identity Center service information.
     * @param {DescribeIdentityCenterRequest} req
     * @param {function(string, DescribeIdentityCenterResponse):void} cb
     * @public
     */
    DescribeIdentityCenter(req, cb) {
        let resp = new DescribeIdentityCenterResponse();
        this.request("DescribeIdentityCenter", req, resp, cb);
    }

    /**
     * This API is used to create a SCIM key.
     * @param {CreateSCIMCredentialRequest} req
     * @param {function(string, CreateSCIMCredentialResponse):void} cb
     * @public
     */
    CreateSCIMCredential(req, cb) {
        let resp = new CreateSCIMCredentialResponse();
        this.request("CreateSCIMCredential", req, resp, cb);
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
     * This API is used to query the user SCIM key list.
     * @param {ListSCIMCredentialsRequest} req
     * @param {function(string, ListSCIMCredentialsResponse):void} cb
     * @public
     */
    ListSCIMCredentials(req, cb) {
        let resp = new ListSCIMCredentialsResponse();
        this.request("ListSCIMCredentials", req, resp, cb);
    }

    /**
     * This API is used to add organization member access authorization.
     * @param {CreateOrganizationMemberAuthIdentityRequest} req
     * @param {function(string, CreateOrganizationMemberAuthIdentityResponse):void} cb
     * @public
     */
    CreateOrganizationMemberAuthIdentity(req, cb) {
        let resp = new CreateOrganizationMemberAuthIdentityResponse();
        this.request("CreateOrganizationMemberAuthIdentity", req, resp, cb);
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
     * This API is used to add resources to a shared unit.
     * @param {AddShareUnitResourcesRequest} req
     * @param {function(string, AddShareUnitResourcesResponse):void} cb
     * @public
     */
    AddShareUnitResources(req, cb) {
        let resp = new AddShareUnitResourcesResponse();
        this.request("AddShareUnitResources", req, resp, cb);
    }

    /**
     * This API is used to obtain a list of shareable regions.
     * @param {DescribeShareAreasRequest} req
     * @param {function(string, DescribeShareAreasResponse):void} cb
     * @public
     */
    DescribeShareAreas(req, cb) {
        let resp = new DescribeShareAreasResponse();
        this.request("DescribeShareAreas", req, resp, cb);
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
     * This API is used to create an organization.
     * @param {CreateOrganizationRequest} req
     * @param {function(string, CreateOrganizationResponse):void} cb
     * @public
     */
    CreateOrganization(req, cb) {
        let resp = new CreateOrganizationResponse();
        this.request("CreateOrganization", req, resp, cb);
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
     * This API is used to delete an organization identity.
     * @param {DeleteOrganizationIdentityRequest} req
     * @param {function(string, DeleteOrganizationIdentityResponse):void} cb
     * @public
     */
    DeleteOrganizationIdentity(req, cb) {
        let resp = new DeleteOrganizationIdentityResponse();
        this.request("DeleteOrganizationIdentity", req, resp, cb);
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
     * This API is used to create an organization member access authorization policy.
     * @param {CreateOrganizationMemberPolicyRequest} req
     * @param {function(string, CreateOrganizationMemberPolicyResponse):void} cb
     * @public
     */
    CreateOrganizationMemberPolicy(req, cb) {
        let resp = new CreateOrganizationMemberPolicyResponse();
        this.request("CreateOrganizationMemberPolicy", req, resp, cb);
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
     * This API is used to modify a custom policy for permission configurations.
     * @param {UpdateCustomPolicyForRoleConfigurationRequest} req
     * @param {function(string, UpdateCustomPolicyForRoleConfigurationResponse):void} cb
     * @public
     */
    UpdateCustomPolicyForRoleConfiguration(req, cb) {
        let resp = new UpdateCustomPolicyForRoleConfigurationResponse();
        this.request("UpdateCustomPolicyForRoleConfiguration", req, resp, cb);
    }

    /**
     * This API is used to delete organization member access authorization.
     * @param {DeleteOrganizationMemberAuthIdentityRequest} req
     * @param {function(string, DeleteOrganizationMemberAuthIdentityResponse):void} cb
     * @public
     */
    DeleteOrganizationMemberAuthIdentity(req, cb) {
        let resp = new DeleteOrganizationMemberAuthIdentityResponse();
        this.request("DeleteOrganizationMemberAuthIdentity", req, resp, cb);
    }


}
module.exports = OrganizationClient;
