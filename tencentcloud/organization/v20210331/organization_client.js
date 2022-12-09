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
const OrgPermission = models.OrgPermission;
const BindOrganizationMemberAuthAccountRequest = models.BindOrganizationMemberAuthAccountRequest;
const CreateOrganizationMemberRequest = models.CreateOrganizationMemberRequest;
const OrgMember = models.OrgMember;
const DescribeOrganizationMemberAuthIdentitiesRequest = models.DescribeOrganizationMemberAuthIdentitiesRequest;
const CreateOrganizationMemberPolicyRequest = models.CreateOrganizationMemberPolicyRequest;
const DescribeOrganizationRequest = models.DescribeOrganizationRequest;
const DescribeOrganizationNodesRequest = models.DescribeOrganizationNodesRequest;
const BindOrganizationMemberAuthAccountResponse = models.BindOrganizationMemberAuthAccountResponse;
const CreateOrganizationMemberResponse = models.CreateOrganizationMemberResponse;
const MoveOrganizationNodeMembersRequest = models.MoveOrganizationNodeMembersRequest;
const ListOrganizationIdentityRequest = models.ListOrganizationIdentityRequest;
const MemberIdentity = models.MemberIdentity;
const MoveOrganizationNodeMembersResponse = models.MoveOrganizationNodeMembersResponse;
const DeleteOrganizationMembersRequest = models.DeleteOrganizationMembersRequest;
const DeleteOrganizationNodesRequest = models.DeleteOrganizationNodesRequest;
const AddOrganizationNodeResponse = models.AddOrganizationNodeResponse;
const IdentityPolicy = models.IdentityPolicy;
const ListOrganizationIdentityResponse = models.ListOrganizationIdentityResponse;
const DescribeOrganizationNodesResponse = models.DescribeOrganizationNodesResponse;
const DescribeOrganizationMembersResponse = models.DescribeOrganizationMembersResponse;
const CreateOrganizationMemberPolicyResponse = models.CreateOrganizationMemberPolicyResponse;
const CancelOrganizationMemberAuthAccountResponse = models.CancelOrganizationMemberAuthAccountResponse;
const DescribeOrganizationResponse = models.DescribeOrganizationResponse;
const DescribeOrganizationMemberPoliciesRequest = models.DescribeOrganizationMemberPoliciesRequest;
const AddOrganizationNodeRequest = models.AddOrganizationNodeRequest;
const DescribeOrganizationMemberAuthIdentitiesResponse = models.DescribeOrganizationMemberAuthIdentitiesResponse;
const OrgMemberPolicy = models.OrgMemberPolicy;
const UpdateOrganizationNodeResponse = models.UpdateOrganizationNodeResponse;
const DescribeOrganizationMemberAuthAccountsRequest = models.DescribeOrganizationMemberAuthAccountsRequest;
const CancelOrganizationMemberAuthAccountRequest = models.CancelOrganizationMemberAuthAccountRequest;
const DeleteOrganizationNodesResponse = models.DeleteOrganizationNodesResponse;
const DescribeOrganizationMemberAuthAccountsResponse = models.DescribeOrganizationMemberAuthAccountsResponse;
const OrgMemberAuthAccount = models.OrgMemberAuthAccount;
const OrgMemberAuthIdentity = models.OrgMemberAuthIdentity;
const DescribeOrganizationMemberPoliciesResponse = models.DescribeOrganizationMemberPoliciesResponse;
const OrgIdentity = models.OrgIdentity;
const DescribeOrganizationMembersRequest = models.DescribeOrganizationMembersRequest;
const UpdateOrganizationNodeRequest = models.UpdateOrganizationNodeRequest;
const OrgNode = models.OrgNode;
const DeleteOrganizationMembersResponse = models.DeleteOrganizationMembersResponse;


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
     * This API is used to get the list of manageable identities of an organization member.
     * @param {DescribeOrganizationMemberAuthIdentitiesRequest} req
     * @param {function(string, DescribeOrganizationMemberAuthIdentitiesResponse):void} cb
     * @public
     */
    DescribeOrganizationMemberAuthIdentities(req, cb) {
        let resp = new DescribeOrganizationMemberAuthIdentitiesResponse();
        this.request("DescribeOrganizationMemberAuthIdentities", req, resp, cb);
    }

    /**
     * This API is used to batch delete organization members.
     * @param {DeleteOrganizationMembersRequest} req
     * @param {function(string, DeleteOrganizationMembersResponse):void} cb
     * @public
     */
    DeleteOrganizationMembers(req, cb) {
        let resp = new DeleteOrganizationMembersResponse();
        this.request("DeleteOrganizationMembers", req, resp, cb);
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


}
module.exports = OrganizationClient;
