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
const DescribeOrgNodeResponse = models.DescribeOrgNodeResponse;
const ListApplicationsRequest = models.ListApplicationsRequest;
const UserSearchCriteria = models.UserSearchCriteria;
const AddAccountToAccountGroupResponse = models.AddAccountToAccountGroupResponse;
const DeleteUserRequest = models.DeleteUserRequest;
const AuthorizationUserResouceInfo = models.AuthorizationUserResouceInfo;
const CreateAppAccountResponse = models.CreateAppAccountResponse;
const ListAuthorizedApplicationsToUserGroupRequest = models.ListAuthorizedApplicationsToUserGroupRequest;
const ModifyApplicationResponse = models.ModifyApplicationResponse;
const OrgNodeChildUserInfo = models.OrgNodeChildUserInfo;
const DeleteAccountGroupRequest = models.DeleteAccountGroupRequest;
const AddUserToUserGroupRequest = models.AddUserToUserGroupRequest;
const ApplicationInformation = models.ApplicationInformation;
const ListUsersResponse = models.ListUsersResponse;
const DeleteAppAccountRequest = models.DeleteAppAccountRequest;
const UserGroupInfo = models.UserGroupInfo;
const UpdateOrgNodeRequest = models.UpdateOrgNodeRequest;
const CreateOrgNodeRequest = models.CreateOrgNodeRequest;
const RemoveUserFromUserGroupRequest = models.RemoveUserFromUserGroupRequest;
const ModifyAppAccountRequest = models.ModifyAppAccountRequest;
const ListAuthorizedApplicationsToUserGroupResponse = models.ListAuthorizedApplicationsToUserGroupResponse;
const DeleteAccountGroupResponse = models.DeleteAccountGroupResponse;
const UserGroupInfoSearchCriteria = models.UserGroupInfoSearchCriteria;
const DescribeUserInfoRequest = models.DescribeUserInfoRequest;
const ListAuthorizedApplicationsToOrgNodeRequest = models.ListAuthorizedApplicationsToOrgNodeRequest;
const DescribePublicKeyResponse = models.DescribePublicKeyResponse;
const DescribeOrgNodeRequest = models.DescribeOrgNodeRequest;
const CreateAccountGroupRequest = models.CreateAccountGroupRequest;
const DescribeUserGroupRequest = models.DescribeUserGroupRequest;
const CreateOrgNodeResponse = models.CreateOrgNodeResponse;
const UserGroupInformationSearchCriteria = models.UserGroupInformationSearchCriteria;
const AccountGroupSearchCriteria = models.AccountGroupSearchCriteria;
const CreateUserResponse = models.CreateUserResponse;
const ThirdPartyAccountInfo = models.ThirdPartyAccountInfo;
const ModifyAppAccountResponse = models.ModifyAppAccountResponse;
const DeleteUserResponse = models.DeleteUserResponse;
const ListUsersInUserGroupResponse = models.ListUsersInUserGroupResponse;
const CreateAppAccountRequest = models.CreateAppAccountRequest;
const DescribeApplicationResponse = models.DescribeApplicationResponse;
const DescribeAppAccountResponse = models.DescribeAppAccountResponse;
const UserGroupInformation = models.UserGroupInformation;
const ListUsersInOrgNodeSearchCriteria = models.ListUsersInOrgNodeSearchCriteria;
const DescribeAccountGroupResponse = models.DescribeAccountGroupResponse;
const CreateUserGroupRequest = models.CreateUserGroupRequest;
const DescribeUserInfoResponse = models.DescribeUserInfoResponse;
const DeleteOrgNodeRequest = models.DeleteOrgNodeRequest;
const DeleteUsersResponse = models.DeleteUsersResponse;
const AppAccountInfo = models.AppAccountInfo;
const DescribeAccountGroupRequest = models.DescribeAccountGroupRequest;
const AppAccountSearchCriteria = models.AppAccountSearchCriteria;
const DescribeAppAccountRequest = models.DescribeAppAccountRequest;
const ListUsersInUserGroupRequest = models.ListUsersInUserGroupRequest;
const UserInfo = models.UserInfo;
const DeleteAppAccountResponse = models.DeleteAppAccountResponse;
const ModifyAccountGroupRequest = models.ModifyAccountGroupRequest;
const ListUsersInOrgNodeResponse = models.ListUsersInOrgNodeResponse;
const ListApplicationAuthorizationsRequest = models.ListApplicationAuthorizationsRequest;
const ModifyAccountGroupResponse = models.ModifyAccountGroupResponse;
const DeleteUsersRequest = models.DeleteUsersRequest;
const AccountGroupInfo = models.AccountGroupInfo;
const OrgNodeChildInfo = models.OrgNodeChildInfo;
const ListAuthorizedApplicationsToUserRequest = models.ListAuthorizedApplicationsToUserRequest;
const DeleteOrgNodeResponse = models.DeleteOrgNodeResponse;
const ListAccountInAccountGroupResponse = models.ListAccountInAccountGroupResponse;
const DescribeUserResourcesAuthorizationResponse = models.DescribeUserResourcesAuthorizationResponse;
const ListUsersInOrgNodeRequest = models.ListUsersInOrgNodeRequest;
const InheritedForm = models.InheritedForm;
const RemoveAccountFromAccountGroupResponse = models.RemoveAccountFromAccountGroupResponse;
const ListUserGroupsRequest = models.ListUserGroupsRequest;
const UpdateOrgNodeResponse = models.UpdateOrgNodeResponse;
const ListAuthorizedApplicationsToUserResponse = models.ListAuthorizedApplicationsToUserResponse;
const ModifyApplicationRequest = models.ModifyApplicationRequest;
const CreateUserRequest = models.CreateUserRequest;
const DescribePublicKeyRequest = models.DescribePublicKeyRequest;
const RemoveAccountFromAccountGroupRequest = models.RemoveAccountFromAccountGroupRequest;
const ListApplicationAuthorizationsResponse = models.ListApplicationAuthorizationsResponse;
const SortCondition = models.SortCondition;
const DescribeUserGroupResponse = models.DescribeUserGroupResponse;
const ListUserGroupsOfUserRequest = models.ListUserGroupsOfUserRequest;
const UserInformation = models.UserInformation;
const DescribeApplicationRequest = models.DescribeApplicationRequest;
const ModifyUserInfoRequest = models.ModifyUserInfoRequest;
const RemoveUserFromUserGroupResponse = models.RemoveUserFromUserGroupResponse;
const DescribeUserThirdPartyAccountInfoRequest = models.DescribeUserThirdPartyAccountInfoRequest;
const ModifyUserInfoResponse = models.ModifyUserInfoResponse;
const ListAuthorizedApplicationsToOrgNodeResponse = models.ListAuthorizedApplicationsToOrgNodeResponse;
const AddUserToUserGroupResponse = models.AddUserToUserGroupResponse;
const AuthorizationInfo = models.AuthorizationInfo;
const CreateUserGroupResponse = models.CreateUserGroupResponse;
const DescribeUserThirdPartyAccountInfoResponse = models.DescribeUserThirdPartyAccountInfoResponse;
const ApplicationAuthorizationInfo = models.ApplicationAuthorizationInfo;
const LinkUserInfo = models.LinkUserInfo;
const ListUserGroupsResponse = models.ListUserGroupsResponse;
const ListAccountInAccountGroupRequest = models.ListAccountInAccountGroupRequest;
const DeleteUserGroupResponse = models.DeleteUserGroupResponse;
const AuthorizationInfoSearchCriteria = models.AuthorizationInfoSearchCriteria;
const ListUserGroupsOfUserResponse = models.ListUserGroupsOfUserResponse;
const CreateAccountGroupResponse = models.CreateAccountGroupResponse;
const DescribeUserResourcesAuthorizationRequest = models.DescribeUserResourcesAuthorizationRequest;
const ListUsersRequest = models.ListUsersRequest;
const DeleteUserGroupRequest = models.DeleteUserGroupRequest;
const ApplicationInfoSearchCriteria = models.ApplicationInfoSearchCriteria;
const ListApplicationsResponse = models.ListApplicationsResponse;
const AddAccountToAccountGroupRequest = models.AddAccountToAccountGroupRequest;


/**
 * eiam client
 * @class
 */
class EiamClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("eiam.intl.tencentcloudapi.com", "2021-04-20", credential, region, profile);
    }
    
    /**
     * This API is used to get the information of a user group.
     * @param {DescribeUserGroupRequest} req
     * @param {function(string, DescribeUserGroupResponse):void} cb
     * @public
     */
    DescribeUserGroup(req, cb) {
        let resp = new DescribeUserGroupResponse();
        this.request("DescribeUserGroup", req, resp, cb);
    }

    /**
     * This API is used to create an account group.
     * @param {CreateAccountGroupRequest} req
     * @param {function(string, CreateAccountGroupResponse):void} cb
     * @public
     */
    CreateAccountGroup(req, cb) {
        let resp = new CreateAccountGroupResponse();
        this.request("CreateAccountGroup", req, resp, cb);
    }

    /**
     * This API is used to modify the information of a user by username or user ID.
     * @param {ModifyUserInfoRequest} req
     * @param {function(string, ModifyUserInfoResponse):void} cb
     * @public
     */
    ModifyUserInfo(req, cb) {
        let resp = new ModifyUserInfoResponse();
        this.request("ModifyUserInfo", req, resp, cb);
    }

    /**
     * This API is used to get the information of a JWT public key.
     * @param {DescribePublicKeyRequest} req
     * @param {function(string, DescribePublicKeyResponse):void} cb
     * @public
     */
    DescribePublicKey(req, cb) {
        let resp = new DescribePublicKeyResponse();
        this.request("DescribePublicKey", req, resp, cb);
    }

    /**
     * This API is used to get the information of the user list.
     * @param {ListUsersRequest} req
     * @param {function(string, ListUsersResponse):void} cb
     * @public
     */
    ListUsers(req, cb) {
        let resp = new ListUsersResponse();
        this.request("ListUsers", req, resp, cb);
    }

    /**
     * This API is used to remove an account from an account group.
     * @param {RemoveAccountFromAccountGroupRequest} req
     * @param {function(string, RemoveAccountFromAccountGroupResponse):void} cb
     * @public
     */
    RemoveAccountFromAccountGroup(req, cb) {
        let resp = new RemoveAccountFromAccountGroupResponse();
        this.request("RemoveAccountFromAccountGroup", req, resp, cb);
    }

    /**
     *  This API is used to get the list of accounts in an account group.
     * @param {ListAccountInAccountGroupRequest} req
     * @param {function(string, ListAccountInAccountGroupResponse):void} cb
     * @public
     */
    ListAccountInAccountGroup(req, cb) {
        let resp = new ListAccountInAccountGroupResponse();
        this.request("ListAccountInAccountGroup", req, resp, cb);
    }

    /**
     * This API is used to get the list of accessible applications by user group ID.
     * @param {ListAuthorizedApplicationsToUserGroupRequest} req
     * @param {function(string, ListAuthorizedApplicationsToUserGroupResponse):void} cb
     * @public
     */
    ListAuthorizedApplicationsToUserGroup(req, cb) {
        let resp = new ListAuthorizedApplicationsToUserGroupResponse();
        this.request("ListAuthorizedApplicationsToUserGroup", req, resp, cb);
    }

    /**
     * This API is used to get the list of authorization relationships of an application (including search criteria-based match).
     * @param {ListApplicationAuthorizationsRequest} req
     * @param {function(string, ListApplicationAuthorizationsResponse):void} cb
     * @public
     */
    ListApplicationAuthorizations(req, cb) {
        let resp = new ListApplicationAuthorizationsResponse();
        this.request("ListApplicationAuthorizations", req, resp, cb);
    }

    /**
     * This API is used to modify an account group.
     * @param {ModifyAccountGroupRequest} req
     * @param {function(string, ModifyAccountGroupResponse):void} cb
     * @public
     */
    ModifyAccountGroup(req, cb) {
        let resp = new ModifyAccountGroupResponse();
        this.request("ModifyAccountGroup", req, resp, cb);
    }

    /**
     * This API is used to query the list of resource authorizations under the specified user.
     * @param {DescribeUserResourcesAuthorizationRequest} req
     * @param {function(string, DescribeUserResourcesAuthorizationResponse):void} cb
     * @public
     */
    DescribeUserResourcesAuthorization(req, cb) {
        let resp = new DescribeUserResourcesAuthorizationResponse();
        this.request("DescribeUserResourcesAuthorization", req, resp, cb);
    }

    /**
     * This API is used to modify an application account.
     * @param {ModifyAppAccountRequest} req
     * @param {function(string, ModifyAppAccountResponse):void} cb
     * @public
     */
    ModifyAppAccount(req, cb) {
        let resp = new ModifyAppAccountResponse();
        this.request("ModifyAppAccount", req, resp, cb);
    }

    /**
     * This API is used to get the third-party account binding information by username or user ID.
     * @param {DescribeUserThirdPartyAccountInfoRequest} req
     * @param {function(string, DescribeUserThirdPartyAccountInfoResponse):void} cb
     * @public
     */
    DescribeUserThirdPartyAccountInfo(req, cb) {
        let resp = new DescribeUserThirdPartyAccountInfoResponse();
        this.request("DescribeUserThirdPartyAccountInfo", req, resp, cb);
    }

    /**
     * This API is used to delete a user group.
     * @param {DeleteUserGroupRequest} req
     * @param {function(string, DeleteUserGroupResponse):void} cb
     * @public
     */
    DeleteUserGroup(req, cb) {
        let resp = new DeleteUserGroupResponse();
        this.request("DeleteUserGroup", req, resp, cb);
    }

    /**
     * This API is used to delete an account group.
     * @param {DeleteAccountGroupRequest} req
     * @param {function(string, DeleteAccountGroupResponse):void} cb
     * @public
     */
    DeleteAccountGroup(req, cb) {
        let resp = new DeleteAccountGroupResponse();
        this.request("DeleteAccountGroup", req, resp, cb);
    }

    /**
     * This API is used to update the information of an application.
     * @param {ModifyApplicationRequest} req
     * @param {function(string, ModifyApplicationResponse):void} cb
     * @public
     */
    ModifyApplication(req, cb) {
        let resp = new ModifyApplicationResponse();
        this.request("ModifyApplication", req, resp, cb);
    }

    /**
     * This API is used to get the information of the user group list (including query conditions).
     * @param {ListUserGroupsRequest} req
     * @param {function(string, ListUserGroupsResponse):void} cb
     * @public
     */
    ListUserGroups(req, cb) {
        let resp = new ListUserGroupsResponse();
        this.request("ListUserGroups", req, resp, cb);
    }

    /**
     * This API is used to add a user to a user group.
     * @param {AddUserToUserGroupRequest} req
     * @param {function(string, AddUserToUserGroupResponse):void} cb
     * @public
     */
    AddUserToUserGroup(req, cb) {
        let resp = new AddUserToUserGroupResponse();
        this.request("AddUserToUserGroup", req, resp, cb);
    }

    /**
     * This API is used to delete an application account.
     * @param {DeleteAppAccountRequest} req
     * @param {function(string, DeleteAppAccountResponse):void} cb
     * @public
     */
    DeleteAppAccount(req, cb) {
        let resp = new DeleteAppAccountResponse();
        this.request("DeleteAppAccount", req, resp, cb);
    }

    /**
     * This API is used to query the list of account groups.
     * @param {DescribeAccountGroupRequest} req
     * @param {function(string, DescribeAccountGroupResponse):void} cb
     * @public
     */
    DescribeAccountGroup(req, cb) {
        let resp = new DescribeAccountGroupResponse();
        this.request("DescribeAccountGroup", req, resp, cb);
    }

    /**
     * This API is used to batch delete the users under the current node. If an error occurs when a user is deleted, the deletion of other selected users will not be affected, and the username/ID of the user who fails to be deleted will be prompted.
     * @param {DeleteUsersRequest} req
     * @param {function(string, DeleteUsersResponse):void} cb
     * @public
     */
    DeleteUsers(req, cb) {
        let resp = new DeleteUsersResponse();
        this.request("DeleteUsers", req, resp, cb);
    }

    /**
     * This API is used to create an application account.
     * @param {CreateAppAccountRequest} req
     * @param {function(string, CreateAppAccountResponse):void} cb
     * @public
     */
    CreateAppAccount(req, cb) {
        let resp = new CreateAppAccountResponse();
        this.request("CreateAppAccount", req, resp, cb);
    }

    /**
     * This API is used to get the list of the users in a user group.
     * @param {ListUsersInUserGroupRequest} req
     * @param {function(string, ListUsersInUserGroupResponse):void} cb
     * @public
     */
    ListUsersInUserGroup(req, cb) {
        let resp = new ListUsersInUserGroupResponse();
        this.request("ListUsersInUserGroup", req, resp, cb);
    }

    /**
     * This API is used to get the list of a user's user groups.
     * @param {ListUserGroupsOfUserRequest} req
     * @param {function(string, ListUserGroupsOfUserResponse):void} cb
     * @public
     */
    ListUserGroupsOfUser(req, cb) {
        let resp = new ListUserGroupsOfUserResponse();
        this.request("ListUserGroupsOfUser", req, resp, cb);
    }

    /**
     * This API is used to get the list of accessible applications by user ID.
     * @param {ListAuthorizedApplicationsToUserRequest} req
     * @param {function(string, ListAuthorizedApplicationsToUserResponse):void} cb
     * @public
     */
    ListAuthorizedApplicationsToUser(req, cb) {
        let resp = new ListAuthorizedApplicationsToUserResponse();
        this.request("ListAuthorizedApplicationsToUser", req, resp, cb);
    }

    /**
     * This API is used to query the list of application accounts.
     * @param {DescribeAppAccountRequest} req
     * @param {function(string, DescribeAppAccountResponse):void} cb
     * @public
     */
    DescribeAppAccount(req, cb) {
        let resp = new DescribeAppAccountResponse();
        this.request("DescribeAppAccount", req, resp, cb);
    }

    /**
     * This API is used to read the information of an organization node by organization node ID.
     * @param {DescribeOrgNodeRequest} req
     * @param {function(string, DescribeOrgNodeResponse):void} cb
     * @public
     */
    DescribeOrgNode(req, cb) {
        let resp = new DescribeOrgNodeResponse();
        this.request("DescribeOrgNode", req, resp, cb);
    }

    /**
     * This API is used to search for a user by username or user ID.
     * @param {DescribeUserInfoRequest} req
     * @param {function(string, DescribeUserInfoResponse):void} cb
     * @public
     */
    DescribeUserInfo(req, cb) {
        let resp = new DescribeUserInfoResponse();
        this.request("DescribeUserInfo", req, resp, cb);
    }

    /**
     * This API is used to remove a user from a user group.
     * @param {RemoveUserFromUserGroupRequest} req
     * @param {function(string, RemoveUserFromUserGroupResponse):void} cb
     * @public
     */
    RemoveUserFromUserGroup(req, cb) {
        let resp = new RemoveUserFromUserGroupResponse();
        this.request("RemoveUserFromUserGroup", req, resp, cb);
    }

    /**
     * This API is used to create an organization node.
     * @param {CreateOrgNodeRequest} req
     * @param {function(string, CreateOrgNodeResponse):void} cb
     * @public
     */
    CreateOrgNode(req, cb) {
        let resp = new CreateOrgNodeResponse();
        this.request("CreateOrgNode", req, resp, cb);
    }

    /**
     * This API is used to delete a user by username or user ID.
     * @param {DeleteUserRequest} req
     * @param {function(string, DeleteUserResponse):void} cb
     * @public
     */
    DeleteUser(req, cb) {
        let resp = new DeleteUserResponse();
        this.request("DeleteUser", req, resp, cb);
    }

    /**
     * This API is used to get the list of applications.
     * @param {ListApplicationsRequest} req
     * @param {function(string, ListApplicationsResponse):void} cb
     * @public
     */
    ListApplications(req, cb) {
        let resp = new ListApplicationsResponse();
        this.request("ListApplications", req, resp, cb);
    }

    /**
     * This API is used to get the list of accessible applications by organization node ID.
     * @param {ListAuthorizedApplicationsToOrgNodeRequest} req
     * @param {function(string, ListAuthorizedApplicationsToOrgNodeResponse):void} cb
     * @public
     */
    ListAuthorizedApplicationsToOrgNode(req, cb) {
        let resp = new ListAuthorizedApplicationsToOrgNodeResponse();
        this.request("ListAuthorizedApplicationsToOrgNode", req, resp, cb);
    }

    /**
     * This API is used to delete an organization node.
     * @param {DeleteOrgNodeRequest} req
     * @param {function(string, DeleteOrgNodeResponse):void} cb
     * @public
     */
    DeleteOrgNode(req, cb) {
        let resp = new DeleteOrgNodeResponse();
        this.request("DeleteOrgNode", req, resp, cb);
    }

    /**
     * This API is used to add an account to an account group.
     * @param {AddAccountToAccountGroupRequest} req
     * @param {function(string, AddAccountToAccountGroupResponse):void} cb
     * @public
     */
    AddAccountToAccountGroup(req, cb) {
        let resp = new AddAccountToAccountGroupResponse();
        this.request("AddAccountToAccountGroup", req, resp, cb);
    }

    /**
     * This API is used to create a user group.
     * @param {CreateUserGroupRequest} req
     * @param {function(string, CreateUserGroupResponse):void} cb
     * @public
     */
    CreateUserGroup(req, cb) {
        let resp = new CreateUserGroupResponse();
        this.request("CreateUserGroup", req, resp, cb);
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
     * This API is used to get the information of an application.
     * @param {DescribeApplicationRequest} req
     * @param {function(string, DescribeApplicationResponse):void} cb
     * @public
     */
    DescribeApplication(req, cb) {
        let resp = new DescribeApplicationResponse();
        this.request("DescribeApplication", req, resp, cb);
    }

    /**
     * This API is used to read the users under an organization node by organization node ID.
     * @param {ListUsersInOrgNodeRequest} req
     * @param {function(string, ListUsersInOrgNodeResponse):void} cb
     * @public
     */
    ListUsersInOrgNode(req, cb) {
        let resp = new ListUsersInOrgNodeResponse();
        this.request("ListUsersInOrgNode", req, resp, cb);
    }

    /**
     * This API is used to create an organization node.
     * @param {UpdateOrgNodeRequest} req
     * @param {function(string, UpdateOrgNodeResponse):void} cb
     * @public
     */
    UpdateOrgNode(req, cb) {
        let resp = new UpdateOrgNodeResponse();
        this.request("UpdateOrgNode", req, resp, cb);
    }


}
module.exports = EiamClient;
