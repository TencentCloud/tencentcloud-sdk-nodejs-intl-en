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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const MoveOrganizationMembersToNodeRequest = models.MoveOrganizationMembersToNodeRequest;
const GetOrganizationRequest = models.GetOrganizationRequest;
const ListOrganizationMembersRequest = models.ListOrganizationMembersRequest;
const DeleteOrganizationMemberFromNodeRequest = models.DeleteOrganizationMemberFromNodeRequest;
const OrgMember = models.OrgMember;
const UpdateOrganizationNodeResponse = models.UpdateOrganizationNodeResponse;
const GetOrganizationMemberResponse = models.GetOrganizationMemberResponse;
const CreateOrganizationRequest = models.CreateOrganizationRequest;
const DeleteOrganizationRequest = models.DeleteOrganizationRequest;
const QuitOrganizationResponse = models.QuitOrganizationResponse;
const UpdateOrganizationMemberResponse = models.UpdateOrganizationMemberResponse;
const DeleteOrganizationMembersRequest = models.DeleteOrganizationMembersRequest;
const CreateOrganizationResponse = models.CreateOrganizationResponse;
const DeleteOrganizationNodesRequest = models.DeleteOrganizationNodesRequest;
const AddOrganizationNodeResponse = models.AddOrganizationNodeResponse;
const ListOrganizationInvitationsResponse = models.ListOrganizationInvitationsResponse;
const AcceptOrganizationInvitationRequest = models.AcceptOrganizationInvitationRequest;
const ListOrganizationNodeMembersResponse = models.ListOrganizationNodeMembersResponse;
const GetOrganizationMemberRequest = models.GetOrganizationMemberRequest;
const DenyOrganizationInvitationResponse = models.DenyOrganizationInvitationResponse;
const SendOrganizationInvitationResponse = models.SendOrganizationInvitationResponse;
const OrgInvitation = models.OrgInvitation;
const UpdateOrganizationMemberRequest = models.UpdateOrganizationMemberRequest;
const QuitOrganizationRequest = models.QuitOrganizationRequest;
const ListOrganizationInvitationsRequest = models.ListOrganizationInvitationsRequest;
const AddOrganizationNodeRequest = models.AddOrganizationNodeRequest;
const ListOrganizationNodeMembersRequest = models.ListOrganizationNodeMembersRequest;
const UpdateOrganizationNodeRequest = models.UpdateOrganizationNodeRequest;
const CancelOrganizationInvitationRequest = models.CancelOrganizationInvitationRequest;
const DeleteOrganizationMemberFromNodeResponse = models.DeleteOrganizationMemberFromNodeResponse;
const DenyOrganizationInvitationRequest = models.DenyOrganizationInvitationRequest;
const DeleteOrganizationNodesResponse = models.DeleteOrganizationNodesResponse;
const DeleteOrganizationResponse = models.DeleteOrganizationResponse;
const CancelOrganizationInvitationResponse = models.CancelOrganizationInvitationResponse;
const AcceptOrganizationInvitationResponse = models.AcceptOrganizationInvitationResponse;
const ListOrganizationNodesRequest = models.ListOrganizationNodesRequest;
const SendOrganizationInvitationRequest = models.SendOrganizationInvitationRequest;
const DeleteOrganizationMembersResponse = models.DeleteOrganizationMembersResponse;
const GetOrganizationResponse = models.GetOrganizationResponse;
const ListOrganizationMembersResponse = models.ListOrganizationMembersResponse;
const ListOrganizationNodesResponse = models.ListOrganizationNodesResponse;
const MoveOrganizationMembersToNodeResponse = models.MoveOrganizationMembersToNodeResponse;
const OrgNode = models.OrgNode;


/**
 * organization client
 * @class
 */
class OrganizationClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("organization.intl.tencentcloudapi.com", "2018-12-25", credential, region, profile);
    }
    
    /**
     * This API is used to decline an invitation to an organization.
     * @param {DenyOrganizationInvitationRequest} req
     * @param {function(string, DenyOrganizationInvitationResponse):void} cb
     * @public
     */
    DenyOrganizationInvitation(req, cb) {
        let resp = new DenyOrganizationInvitationResponse();
        this.request("DenyOrganizationInvitation", req, resp, cb);
    }

    /**
     * This API is used to obtain an invitation list.
     * @param {ListOrganizationInvitationsRequest} req
     * @param {function(string, ListOrganizationInvitationsResponse):void} cb
     * @public
     */
    ListOrganizationInvitations(req, cb) {
        let resp = new ListOrganizationInvitationsResponse();
        this.request("ListOrganizationInvitations", req, resp, cb);
    }

    /**
     * This API is used to update organizational units.
     * @param {UpdateOrganizationNodeRequest} req
     * @param {function(string, UpdateOrganizationNodeResponse):void} cb
     * @public
     */
    UpdateOrganizationNode(req, cb) {
        let resp = new UpdateOrganizationNodeResponse();
        this.request("UpdateOrganizationNode", req, resp, cb);
    }

    /**
     * This API is used to accept an invitation to an organization.
     * @param {AcceptOrganizationInvitationRequest} req
     * @param {function(string, AcceptOrganizationInvitationResponse):void} cb
     * @public
     */
    AcceptOrganizationInvitation(req, cb) {
        let resp = new AcceptOrganizationInvitationResponse();
        this.request("AcceptOrganizationInvitation", req, resp, cb);
    }

    /**
     * This API is used to obtain information on organization members.
     * @param {GetOrganizationMemberRequest} req
     * @param {function(string, GetOrganizationMemberResponse):void} cb
     * @public
     */
    GetOrganizationMember(req, cb) {
        let resp = new GetOrganizationMemberResponse();
        this.request("GetOrganizationMember", req, resp, cb);
    }

    /**
     * This API is used to obtain information on organizations.
     * @param {GetOrganizationRequest} req
     * @param {function(string, GetOrganizationResponse):void} cb
     * @public
     */
    GetOrganization(req, cb) {
        let resp = new GetOrganizationResponse();
        this.request("GetOrganization", req, resp, cb);
    }

    /**
     * This API is used to obtain a list of organizational units.
     * @param {ListOrganizationNodesRequest} req
     * @param {function(string, ListOrganizationNodesResponse):void} cb
     * @public
     */
    ListOrganizationNodes(req, cb) {
        let resp = new ListOrganizationNodesResponse();
        this.request("ListOrganizationNodes", req, resp, cb);
    }

    /**
     * This API is used to update information on organization members.
     * @param {UpdateOrganizationMemberRequest} req
     * @param {function(string, UpdateOrganizationMemberResponse):void} cb
     * @public
     */
    UpdateOrganizationMember(req, cb) {
        let resp = new UpdateOrganizationMemberResponse();
        this.request("UpdateOrganizationMember", req, resp, cb);
    }

    /**
     * This API is used to quit an organization.
     * @param {QuitOrganizationRequest} req
     * @param {function(string, QuitOrganizationResponse):void} cb
     * @public
     */
    QuitOrganization(req, cb) {
        let resp = new QuitOrganizationResponse();
        this.request("QuitOrganization", req, resp, cb);
    }

    /**
     * This API is used to delete multiple organizational units in a single request.
     * @param {DeleteOrganizationNodesRequest} req
     * @param {function(string, DeleteOrganizationNodesResponse):void} cb
     * @public
     */
    DeleteOrganizationNodes(req, cb) {
        let resp = new DeleteOrganizationNodesResponse();
        this.request("DeleteOrganizationNodes", req, resp, cb);
    }

    /**
     * This API is used to obtain a list of organization members.
     * @param {ListOrganizationMembersRequest} req
     * @param {function(string, ListOrganizationMembersResponse):void} cb
     * @public
     */
    ListOrganizationMembers(req, cb) {
        let resp = new ListOrganizationMembersResponse();
        this.request("ListOrganizationMembers", req, resp, cb);
    }

    /**
     * This API is used to delete an organization member.
     * @param {DeleteOrganizationMemberFromNodeRequest} req
     * @param {function(string, DeleteOrganizationMemberFromNodeResponse):void} cb
     * @public
     */
    DeleteOrganizationMemberFromNode(req, cb) {
        let resp = new DeleteOrganizationMemberFromNodeResponse();
        this.request("DeleteOrganizationMemberFromNode", req, resp, cb);
    }

    /**
     * This API is used to add an organizational unit.
     * @param {AddOrganizationNodeRequest} req
     * @param {function(string, AddOrganizationNodeResponse):void} cb
     * @public
     */
    AddOrganizationNode(req, cb) {
        let resp = new AddOrganizationNodeResponse();
        this.request("AddOrganizationNode", req, resp, cb);
    }

    /**
     * This API is used to send an invitation to join an organization.
     * @param {SendOrganizationInvitationRequest} req
     * @param {function(string, SendOrganizationInvitationResponse):void} cb
     * @public
     */
    SendOrganizationInvitation(req, cb) {
        let resp = new SendOrganizationInvitationResponse();
        this.request("SendOrganizationInvitation", req, resp, cb);
    }

    /**
     * This API is used to cancel an invitation to an organization.
     * @param {CancelOrganizationInvitationRequest} req
     * @param {function(string, CancelOrganizationInvitationResponse):void} cb
     * @public
     */
    CancelOrganizationInvitation(req, cb) {
        let resp = new CancelOrganizationInvitationResponse();
        this.request("CancelOrganizationInvitation", req, resp, cb);
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
     * This API is used to delete multiple organization members in a single request.
     * @param {DeleteOrganizationMembersRequest} req
     * @param {function(string, DeleteOrganizationMembersResponse):void} cb
     * @public
     */
    DeleteOrganizationMembers(req, cb) {
        let resp = new DeleteOrganizationMembersResponse();
        this.request("DeleteOrganizationMembers", req, resp, cb);
    }

    /**
     * This API is used to obtain a list of organizational unit members.
     * @param {ListOrganizationNodeMembersRequest} req
     * @param {function(string, ListOrganizationNodeMembersResponse):void} cb
     * @public
     */
    ListOrganizationNodeMembers(req, cb) {
        let resp = new ListOrganizationNodeMembersResponse();
        this.request("ListOrganizationNodeMembers", req, resp, cb);
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
     * This API is used to move members to a specified organizational unit.
     * @param {MoveOrganizationMembersToNodeRequest} req
     * @param {function(string, MoveOrganizationMembersToNodeResponse):void} cb
     * @public
     */
    MoveOrganizationMembersToNode(req, cb) {
        let resp = new MoveOrganizationMembersToNodeResponse();
        this.request("MoveOrganizationMembersToNode", req, resp, cb);
    }


}
module.exports = OrganizationClient;
