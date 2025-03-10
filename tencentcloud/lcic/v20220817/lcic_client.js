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
const CreateRoomRequest = models.CreateRoomRequest;
const DescribeQuestionListRequest = models.DescribeQuestionListRequest;
const ModifyRoomResponse = models.ModifyRoomResponse;
const GetWatermarkResponse = models.GetWatermarkResponse;
const DeleteSupervisorRequest = models.DeleteSupervisorRequest;
const DescribeSupervisorsResponse = models.DescribeSupervisorsResponse;
const KickUserFromRoomResponse = models.KickUserFromRoomResponse;
const BatchDeleteRecordRequest = models.BatchDeleteRecordRequest;
const BatchRegisterRequest = models.BatchRegisterRequest;
const DeleteRoomResponse = models.DeleteRoomResponse;
const ModifyUserProfileRequest = models.ModifyUserProfileRequest;
const CreateGroupWithMembersRequest = models.CreateGroupWithMembersRequest;
const DescribeDocumentsByRoomRequest = models.DescribeDocumentsByRoomRequest;
const BatchCreateGroupWithMembersResponse = models.BatchCreateGroupWithMembersResponse;
const GetRoomEventResponse = models.GetRoomEventResponse;
const BatchCreateRoomResponse = models.BatchCreateRoomResponse;
const MemberRecord = models.MemberRecord;
const DeleteAppCustomContentRequest = models.DeleteAppCustomContentRequest;
const BatchAddGroupMemberResponse = models.BatchAddGroupMemberResponse;
const ModifyUserProfileResponse = models.ModifyUserProfileResponse;
const ModifyAppResponse = models.ModifyAppResponse;
const LoginOriginIdRequest = models.LoginOriginIdRequest;
const BatchRegisterResponse = models.BatchRegisterResponse;
const BindDocumentToRoomResponse = models.BindDocumentToRoomResponse;
const CreateGroupWithSubGroupRequest = models.CreateGroupWithSubGroupRequest;
const RoomItem = models.RoomItem;
const SetWatermarkRequest = models.SetWatermarkRequest;
const DescribeRoomRequest = models.DescribeRoomRequest;
const BatchDescribeDocumentRequest = models.BatchDescribeDocumentRequest;
const EndRoomRequest = models.EndRoomRequest;
const UnbindDocumentFromRoomResponse = models.UnbindDocumentFromRoomResponse;
const CreateDocumentResponse = models.CreateDocumentResponse;
const DescribeGroupResponse = models.DescribeGroupResponse;
const SetAppCustomContentResponse = models.SetAppCustomContentResponse;
const BatchUserRequest = models.BatchUserRequest;
const LoginUserResponse = models.LoginUserResponse;
const ModifyGroupRequest = models.ModifyGroupRequest;
const DeleteGroupRequest = models.DeleteGroupRequest;
const StartRoomRequest = models.StartRoomRequest;
const AddGroupMemberRequest = models.AddGroupMemberRequest;
const DescribeGroupListRequest = models.DescribeGroupListRequest;
const GetRoomMessageRequest = models.GetRoomMessageRequest;
const DescribeDocumentsResponse = models.DescribeDocumentsResponse;
const DocumentInfo = models.DocumentInfo;
const DeleteDocumentResponse = models.DeleteDocumentResponse;
const DeleteRecordRequest = models.DeleteRecordRequest;
const BatchDeleteGroupMemberResponse = models.BatchDeleteGroupMemberResponse;
const CreateGroupWithSubGroupResponse = models.CreateGroupWithSubGroupResponse;
const DescribeDocumentsRequest = models.DescribeDocumentsRequest;
const MessageItem = models.MessageItem;
const GroupInfo = models.GroupInfo;
const GetRoomEventRequest = models.GetRoomEventRequest;
const DescribeDocumentResponse = models.DescribeDocumentResponse;
const DeleteGroupMemberResponse = models.DeleteGroupMemberResponse;
const DescribeGroupMemberListResponse = models.DescribeGroupMemberListResponse;
const EventInfo = models.EventInfo;
const DeleteRecordResponse = models.DeleteRecordResponse;
const DescribeAnswerListRequest = models.DescribeAnswerListRequest;
const BatchCreateRoomRequest = models.BatchCreateRoomRequest;
const DescribeGroupMemberListRequest = models.DescribeGroupMemberListRequest;
const UserInfo = models.UserInfo;
const DescribeUserResponse = models.DescribeUserResponse;
const DescribeDocumentRequest = models.DescribeDocumentRequest;
const BatchDeleteRecordResponse = models.BatchDeleteRecordResponse;
const WatermarkConfig = models.WatermarkConfig;
const SetAppCustomContentRequest = models.SetAppCustomContentRequest;
const DescribeUserRequest = models.DescribeUserRequest;
const RegisterUserResponse = models.RegisterUserResponse;
const StartRoomResponse = models.StartRoomResponse;
const BindDocumentToRoomRequest = models.BindDocumentToRoomRequest;
const CreateDocumentRequest = models.CreateDocumentRequest;
const GetRoomMessageResponse = models.GetRoomMessageResponse;
const BatchUserInfo = models.BatchUserInfo;
const BatchAddGroupMemberRequest = models.BatchAddGroupMemberRequest;
const DescribeRoomResponse = models.DescribeRoomResponse;
const DescribeCurrentMemberListRequest = models.DescribeCurrentMemberListRequest;
const DescribeSdkAppIdUsersResponse = models.DescribeSdkAppIdUsersResponse;
const EventDataInfo = models.EventDataInfo;
const DescribeAnswerListResponse = models.DescribeAnswerListResponse;
const DescribeRoomStatisticsResponse = models.DescribeRoomStatisticsResponse;
const DeleteDocumentRequest = models.DeleteDocumentRequest;
const DescribeSupervisorsRequest = models.DescribeSupervisorsRequest;
const MessageList = models.MessageList;
const DeleteGroupMemberRequest = models.DeleteGroupMemberRequest;
const EndRoomResponse = models.EndRoomResponse;
const GetWatermarkRequest = models.GetWatermarkRequest;
const CreateGroupWithMembersResponse = models.CreateGroupWithMembersResponse;
const BatchDeleteGroupMemberRequest = models.BatchDeleteGroupMemberRequest;
const ModifyAppRequest = models.ModifyAppRequest;
const UnbindDocumentFromRoomRequest = models.UnbindDocumentFromRoomRequest;
const RegisterUserRequest = models.RegisterUserRequest;
const GroupBaseInfo = models.GroupBaseInfo;
const LoginUserRequest = models.LoginUserRequest;
const AnswerStat = models.AnswerStat;
const DeleteSupervisorResponse = models.DeleteSupervisorResponse;
const SetWatermarkResponse = models.SetWatermarkResponse;
const RoomInfo = models.RoomInfo;
const ModifyRoomRequest = models.ModifyRoomRequest;
const AnswerInfo = models.AnswerInfo;
const DescribeRoomStatisticsRequest = models.DescribeRoomStatisticsRequest;
const CustomMsgContent = models.CustomMsgContent;
const DescribeDocumentsByRoomResponse = models.DescribeDocumentsByRoomResponse;
const LoginOriginIdResponse = models.LoginOriginIdResponse;
const DescribeQuestionListResponse = models.DescribeQuestionListResponse;
const GetRoomsResponse = models.GetRoomsResponse;
const QuestionInfo = models.QuestionInfo;
const KickUserFromRoomRequest = models.KickUserFromRoomRequest;
const GetRoomsRequest = models.GetRoomsRequest;
const DescribeDeveloperRequest = models.DescribeDeveloperRequest;
const AppCustomContent = models.AppCustomContent;
const BatchDescribeDocumentResponse = models.BatchDescribeDocumentResponse;
const DeleteGroupResponse = models.DeleteGroupResponse;
const DescribeSdkAppIdUsersRequest = models.DescribeSdkAppIdUsersRequest;
const AddGroupMemberResponse = models.AddGroupMemberResponse;
const CreateSupervisorResponse = models.CreateSupervisorResponse;
const DeleteRoomRequest = models.DeleteRoomRequest;
const BatchCreateGroupWithMembersRequest = models.BatchCreateGroupWithMembersRequest;
const DescribeGroupRequest = models.DescribeGroupRequest;
const CreateSupervisorRequest = models.CreateSupervisorRequest;
const BackgroundPictureConfig = models.BackgroundPictureConfig;
const DeleteAppCustomContentResponse = models.DeleteAppCustomContentResponse;
const DescribeCurrentMemberListResponse = models.DescribeCurrentMemberListResponse;
const ModifyGroupResponse = models.ModifyGroupResponse;
const DescribeGroupListResponse = models.DescribeGroupListResponse;
const CreateRoomResponse = models.CreateRoomResponse;
const DescribeDeveloperResponse = models.DescribeDeveloperResponse;
const TextMarkConfig = models.TextMarkConfig;


/**
 * lcic client
 * @class
 */
class LcicClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("lcic.tencentcloudapi.com", "2022-08-17", credential, region, profile);
    }
    
    /**
     * This API is used to get the message history of a room (room messages are retained for seven days).
     * @param {GetRoomMessageRequest} req
     * @param {function(string, GetRoomMessageResponse):void} cb
     * @public
     */
    GetRoomMessage(req, cb) {
        let resp = new GetRoomMessageResponse();
        this.request("GetRoomMessage", req, resp, cb);
    }

    /**
     * A new API is offered for this action now.

This API is used to query courseware. It has been deprecated. Please use `BatchDescribeDocument` instead.
     * @param {DescribeDocumentsRequest} req
     * @param {function(string, DescribeDocumentsResponse):void} cb
     * @public
     */
    DescribeDocuments(req, cb) {
        let resp = new DescribeDocumentsResponse();
        this.request("DescribeDocuments", req, resp, cb);
    }

    /**
     * This API is used to get the document list of a specific room.
A maximum of 20 requests can be initiated per second for this API.
     * @param {DescribeDocumentsByRoomRequest} req
     * @param {function(string, DescribeDocumentsByRoomResponse):void} cb
     * @public
     */
    DescribeDocumentsByRoom(req, cb) {
        let resp = new DescribeDocumentsByRoomResponse();
        this.request("DescribeDocumentsByRoom", req, resp, cb);
    }

    /**
     * This API is used to modify a room.
A maximum of 20 requests can be initiated per second for this API.
     * @param {ModifyRoomRequest} req
     * @param {function(string, ModifyRoomResponse):void} cb
     * @public
     */
    ModifyRoom(req, cb) {
        let resp = new ModifyRoomResponse();
        this.request("ModifyRoom", req, resp, cb);
    }

    /**
     * This API is used to delete the custom elements. The `Scenes` parameter specifies the custom elements to delete. If `Scenes` is empty, all custom elements will be deleted.
     * @param {DeleteAppCustomContentRequest} req
     * @param {function(string, DeleteAppCustomContentResponse):void} cb
     * @public
     */
    DeleteAppCustomContent(req, cb) {
        let resp = new DeleteAppCustomContentResponse();
        this.request("DeleteAppCustomContent", req, resp, cb);
    }

    /**
     * This API is used to remove a user from the room.
     * @param {KickUserFromRoomRequest} req
     * @param {function(string, KickUserFromRoomResponse):void} cb
     * @public
     */
    KickUserFromRoom(req, cb) {
        let resp = new KickUserFromRoomResponse();
        this.request("KickUserFromRoom", req, resp, cb);
    }

    /**
     * This API is used to configure watermarks.
A maximum of 20 requests can be initiated per second for this API.
     * @param {SetWatermarkRequest} req
     * @param {function(string, SetWatermarkResponse):void} cb
     * @public
     */
    SetWatermark(req, cb) {
        let resp = new SetWatermarkResponse();
        this.request("SetWatermark", req, resp, cb);
    }

    /**
     * This API is used to modify a user profile such as the nickname and profile photo.
A maximum of 20 requests can be initiated per second for this API.
     * @param {ModifyUserProfileRequest} req
     * @param {function(string, ModifyUserProfileResponse):void} cb
     * @public
     */
    ModifyUserProfile(req, cb) {
        let resp = new ModifyUserProfileResponse();
        this.request("ModifyUserProfile", req, resp, cb);
    }

    /**
     * This API is used to get watermark settings.
A maximum of 20 requests can be initiated per second for this API.
     * @param {GetWatermarkRequest} req
     * @param {function(string, GetWatermarkResponse):void} cb
     * @public
     */
    GetWatermark(req, cb) {
        let resp = new GetWatermarkResponse();
        this.request("GetWatermark", req, resp, cb);
    }

    /**
     * This API is used to get the details of a group.
A maximum of 20 requests can be initiated per second for this API.
     * @param {DescribeGroupRequest} req
     * @param {function(string, DescribeGroupResponse):void} cb
     * @public
     */
    DescribeGroup(req, cb) {
        let resp = new DescribeGroupResponse();
        this.request("DescribeGroup", req, resp, cb);
    }

    /**
     * This API is used to modify an application.
A maximum of 20 requests can be initiated per second for this API.
     * @param {ModifyAppRequest} req
     * @param {function(string, ModifyAppResponse):void} cb
     * @public
     */
    ModifyApp(req, cb) {
        let resp = new ModifyAppResponse();
        this.request("ModifyApp", req, resp, cb);
    }

    /**
     * This API is used to unbind a document from a room.
     * @param {UnbindDocumentFromRoomRequest} req
     * @param {function(string, UnbindDocumentFromRoomResponse):void} cb
     * @public
     */
    UnbindDocumentFromRoom(req, cb) {
        let resp = new UnbindDocumentFromRoomResponse();
        this.request("UnbindDocumentFromRoom", req, resp, cb);
    }

    /**
     * This API is used to get the user list of a specific application.
A maximum of 20 requests can be initiated per second for this API.
     * @param {DescribeSdkAppIdUsersRequest} req
     * @param {function(string, DescribeSdkAppIdUsersResponse):void} cb
     * @public
     */
    DescribeSdkAppIdUsers(req, cb) {
        let resp = new DescribeSdkAppIdUsersResponse();
        this.request("DescribeSdkAppIdUsers", req, resp, cb);
    }

    /**
     * This API is used to start a room. Before you call this API, make sure a user has entered the room so that the class is initialized.
     * @param {StartRoomRequest} req
     * @param {function(string, StartRoomResponse):void} cb
     * @public
     */
    StartRoom(req, cb) {
        let resp = new StartRoomResponse();
        this.request("StartRoom", req, resp, cb);
    }

    /**
     * This API is used to remove users from a group.
A maximum of 20 requests can be initiated per second for this API.
     * @param {DeleteGroupMemberRequest} req
     * @param {function(string, DeleteGroupMemberResponse):void} cb
     * @public
     */
    DeleteGroupMember(req, cb) {
        let resp = new DeleteGroupMemberResponse();
        this.request("DeleteGroupMember", req, resp, cb);
    }

    /**
     * This API is used to create a document to be used in a room.
     * @param {CreateDocumentRequest} req
     * @param {function(string, CreateDocumentResponse):void} cb
     * @public
     */
    CreateDocument(req, cb) {
        let resp = new CreateDocumentResponse();
        this.request("CreateDocument", req, resp, cb);
    }

    /**
     * This API is used to get the spectators of a room.
     * @param {DescribeSupervisorsRequest} req
     * @param {function(string, DescribeSupervisorsResponse):void} cb
     * @public
     */
    DescribeSupervisors(req, cb) {
        let resp = new DescribeSupervisorsResponse();
        this.request("DescribeSupervisors", req, resp, cb);
    }

    /**
     * This API is used to delete one or multiple groups.
A maximum of 20 requests can be initiated per second for this API.
     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        let resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }

    /**
     * This API is used to obtain user profile.
     * @param {DescribeUserRequest} req
     * @param {function(string, DescribeUserResponse):void} cb
     * @public
     */
    DescribeUser(req, cb) {
        let resp = new DescribeUserResponse();
        this.request("DescribeUser", req, resp, cb);
    }

    /**
     * This API is used to get the members of a group.
A maximum of 20 requests can be initiated per second for this API.
     * @param {DescribeGroupMemberListRequest} req
     * @param {function(string, DescribeGroupMemberListResponse):void} cb
     * @public
     */
    DescribeGroupMemberList(req, cb) {
        let resp = new DescribeGroupMemberListResponse();
        this.request("DescribeGroupMemberList", req, resp, cb);
    }

    /**
     * This API is used to modify a group.
A maximum of 20 requests can be initiated per second for this API.
     * @param {ModifyGroupRequest} req
     * @param {function(string, ModifyGroupResponse):void} cb
     * @public
     */
    ModifyGroup(req, cb) {
        let resp = new ModifyGroupResponse();
        this.request("ModifyGroup", req, resp, cb);
    }

    /**
     * This API is used to register multiple users (up to 1,000) at a time. If a user ID already exists, the existing one will be overwritten.
A maximum of 20 requests can be initiated per second for this API.
     * @param {BatchRegisterRequest} req
     * @param {function(string, BatchRegisterResponse):void} cb
     * @public
     */
    BatchRegister(req, cb) {
        let resp = new BatchRegisterResponse();
        this.request("BatchRegister", req, resp, cb);
    }

    /**
     * This API is used to delete spectators.
     * @param {DeleteSupervisorRequest} req
     * @param {function(string, DeleteSupervisorResponse):void} cb
     * @public
     */
    DeleteSupervisor(req, cb) {
        let resp = new DeleteSupervisorResponse();
        this.request("DeleteSupervisor", req, resp, cb);
    }

    /**
     * This API is used to remove users from multiple groups at a time.
A maximum of 20 requests can be initiated per second for this API.
     * @param {BatchDeleteGroupMemberRequest} req
     * @param {function(string, BatchDeleteGroupMemberResponse):void} cb
     * @public
     */
    BatchDeleteGroupMember(req, cb) {
        let resp = new BatchDeleteGroupMemberResponse();
        this.request("BatchDeleteGroupMember", req, resp, cb);
    }

    /**
     * This API is used to get the events of a room. It only works within one hour after a class ends.
     * @param {GetRoomEventRequest} req
     * @param {function(string, GetRoomEventResponse):void} cb
     * @public
     */
    GetRoomEvent(req, cb) {
        let resp = new GetRoomEventResponse();
        this.request("GetRoomEvent", req, resp, cb);
    }

    /**
     * This API is used to get room information.
A maximum of 20 requests can be initiated per second for this API.
     * @param {DescribeRoomRequest} req
     * @param {function(string, DescribeRoomResponse):void} cb
     * @public
     */
    DescribeRoom(req, cb) {
        let resp = new DescribeRoomResponse();
        this.request("DescribeRoom", req, resp, cb);
    }

    /**
     * This example shows you how to delete the recording files of a specific room.
A maximum of 20 requests can be initiated per second for this API.
     * @param {DeleteRecordRequest} req
     * @param {function(string, DeleteRecordResponse):void} cb
     * @public
     */
    DeleteRecord(req, cb) {
        let resp = new DeleteRecordResponse();
        this.request("DeleteRecord", req, resp, cb);
    }

    /**
     * This API is used to query groups.
A maximum of 20 requests can be initiated per second for this API.
     * @param {DescribeGroupListRequest} req
     * @param {function(string, DescribeGroupListResponse):void} cb
     * @public
     */
    DescribeGroupList(req, cb) {
        let resp = new DescribeGroupListResponse();
        this.request("DescribeGroupList", req, resp, cb);
    }

    /**
     * This API is used to add users to multiple groups at a time.
A maximum of 20 requests can be initiated per second for this API.
     * @param {BatchAddGroupMemberRequest} req
     * @param {function(string, BatchAddGroupMemberResponse):void} cb
     * @public
     */
    BatchAddGroupMember(req, cb) {
        let resp = new BatchAddGroupMemberResponse();
        this.request("BatchAddGroupMember", req, resp, cb);
    }

    /**
     * This API is used to add users to a group.
A maximum of 20 requests can be initiated per second for this API.
     * @param {AddGroupMemberRequest} req
     * @param {function(string, AddGroupMemberResponse):void} cb
     * @public
     */
    AddGroupMember(req, cb) {
        let resp = new AddGroupMemberResponse();
        this.request("AddGroupMember", req, resp, cb);
    }

    /**
     * This API is used to register a user.
     * @param {RegisterUserRequest} req
     * @param {function(string, RegisterUserResponse):void} cb
     * @public
     */
    RegisterUser(req, cb) {
        let resp = new RegisterUserResponse();
        this.request("RegisterUser", req, resp, cb);
    }

    /**
     * This API is used to obtain the statistics of a room. It can be called only after the room is ended.
A maximum of 20 requests can be initiated per second for this API.
     * @param {DescribeRoomStatisticsRequest} req
     * @param {function(string, DescribeRoomStatisticsResponse):void} cb
     * @public
     */
    DescribeRoomStatistics(req, cb) {
        let resp = new DescribeRoomStatisticsResponse();
        this.request("DescribeRoomStatistics", req, resp, cb);
    }

    /**
     * This API is used to bind a document to a room.
     * @param {BindDocumentToRoomRequest} req
     * @param {function(string, BindDocumentToRoomResponse):void} cb
     * @public
     */
    BindDocumentToRoom(req, cb) {
        let resp = new BindDocumentToRoomResponse();
        this.request("BindDocumentToRoom", req, resp, cb);
    }

    /**
     * This API is used to log in with an origin account, which is the `originId` entered during registration.
     * @param {LoginOriginIdRequest} req
     * @param {function(string, LoginOriginIdResponse):void} cb
     * @public
     */
    LoginOriginId(req, cb) {
        let resp = new LoginOriginIdResponse();
        this.request("LoginOriginId", req, resp, cb);
    }

    /**
     * This API is used to log in.
     * @param {LoginUserRequest} req
     * @param {function(string, LoginUserResponse):void} cb
     * @public
     */
    LoginUser(req, cb) {
        let resp = new LoginUserResponse();
        this.request("LoginUser", req, resp, cb);
    }

    /**
     * his API is used to create a group and specify its members.
A maximum of 20 requests can be initiated per second for this API.
     * @param {CreateGroupWithMembersRequest} req
     * @param {function(string, CreateGroupWithMembersResponse):void} cb
     * @public
     */
    CreateGroupWithMembers(req, cb) {
        let resp = new CreateGroupWithMembersResponse();
        this.request("CreateGroupWithMembers", req, resp, cb);
    }

    /**
     * This API is used to get developer information.
     * @param {DescribeDeveloperRequest} req
     * @param {function(string, DescribeDeveloperResponse):void} cb
     * @public
     */
    DescribeDeveloper(req, cb) {
        let resp = new DescribeDeveloperResponse();
        this.request("DescribeDeveloper", req, resp, cb);
    }

    /**
     * This API is used to create a spectator.
     * @param {CreateSupervisorRequest} req
     * @param {function(string, CreateSupervisorResponse):void} cb
     * @public
     */
    CreateSupervisor(req, cb) {
        let resp = new CreateSupervisorResponse();
        this.request("CreateSupervisor", req, resp, cb);
    }

    /**
     * This API is used to get the quiz details of a room.
     * @param {DescribeQuestionListRequest} req
     * @param {function(string, DescribeQuestionListResponse):void} cb
     * @public
     */
    DescribeQuestionList(req, cb) {
        let resp = new DescribeQuestionListResponse();
        this.request("DescribeQuestionList", req, resp, cb);
    }

    /**
     * This API is used to set or update the custom content of an application, including the application icon and custom code. After you update JS and CSS content, you also need to call this API for the updates to take effect.
     * @param {SetAppCustomContentRequest} req
     * @param {function(string, SetAppCustomContentResponse):void} cb
     * @public
     */
    SetAppCustomContent(req, cb) {
        let resp = new SetAppCustomContentResponse();
        this.request("SetAppCustomContent", req, resp, cb);
    }

    /**
     * This API is used to get courseware information.
     * @param {BatchDescribeDocumentRequest} req
     * @param {function(string, BatchDescribeDocumentResponse):void} cb
     * @public
     */
    BatchDescribeDocument(req, cb) {
        let resp = new BatchDescribeDocumentResponse();
        this.request("BatchDescribeDocument", req, resp, cb);
    }

    /**
     * This API is used to get the user list of a room. This API will not work if a room has ended or expired.
A maximum of 20 requests can be initiated per second for this API.
     * @param {DescribeCurrentMemberListRequest} req
     * @param {function(string, DescribeCurrentMemberListResponse):void} cb
     * @public
     */
    DescribeCurrentMemberList(req, cb) {
        let resp = new DescribeCurrentMemberListResponse();
        this.request("DescribeCurrentMemberList", req, resp, cb);
    }

    /**
     * This API is used to create multiple rooms at a time.
     * @param {BatchCreateRoomRequest} req
     * @param {function(string, BatchCreateRoomResponse):void} cb
     * @public
     */
    BatchCreateRoom(req, cb) {
        let resp = new BatchCreateRoomResponse();
        this.request("BatchCreateRoom", req, resp, cb);
    }

    /**
     * This API is used to get the answers to a quiz question in a room.
     * @param {DescribeAnswerListRequest} req
     * @param {function(string, DescribeAnswerListResponse):void} cb
     * @public
     */
    DescribeAnswerList(req, cb) {
        let resp = new DescribeAnswerListResponse();
        this.request("DescribeAnswerList", req, resp, cb);
    }

    /**
     * This API is used to delete a document.
A maximum of 20 requests can be initiated per second for this API.
     * @param {DeleteDocumentRequest} req
     * @param {function(string, DeleteDocumentResponse):void} cb
     * @public
     */
    DeleteDocument(req, cb) {
        let resp = new DeleteDocumentResponse();
        this.request("DeleteDocument", req, resp, cb);
    }

    /**
     * This API is used to delete the recordings of multiple rooms.
A maximum of 20 requests can be initiated per second for this API.
     * @param {BatchDeleteRecordRequest} req
     * @param {function(string, BatchDeleteRecordResponse):void} cb
     * @public
     */
    BatchDeleteRecord(req, cb) {
        let resp = new BatchDeleteRecordResponse();
        this.request("BatchDeleteRecord", req, resp, cb);
    }

    /**
     * This API is used to end a room.
     * @param {EndRoomRequest} req
     * @param {function(string, EndRoomResponse):void} cb
     * @public
     */
    EndRoom(req, cb) {
        let resp = new EndRoomResponse();
        this.request("EndRoom", req, resp, cb);
    }

    /**
     * This API is used to get the room list.
     * @param {GetRoomsRequest} req
     * @param {function(string, GetRoomsResponse):void} cb
     * @public
     */
    GetRooms(req, cb) {
        let resp = new GetRoomsResponse();
        this.request("GetRooms", req, resp, cb);
    }

    /**
     * This API is used to delete a room.
     * @param {DeleteRoomRequest} req
     * @param {function(string, DeleteRoomResponse):void} cb
     * @public
     */
    DeleteRoom(req, cb) {
        let resp = new DeleteRoomResponse();
        this.request("DeleteRoom", req, resp, cb);
    }

    /**
     * This API is used to get the information of a specific document.
A maximum of 20 requests can be initiated per second for this API.
     * @param {DescribeDocumentRequest} req
     * @param {function(string, DescribeDocumentResponse):void} cb
     * @public
     */
    DescribeDocument(req, cb) {
        let resp = new DescribeDocumentResponse();
        this.request("DescribeDocument", req, resp, cb);
    }

    /**
     * This API is used to merge groups.
A maximum of 20 requests can be initiated per second for this API.
     * @param {CreateGroupWithSubGroupRequest} req
     * @param {function(string, CreateGroupWithSubGroupResponse):void} cb
     * @public
     */
    CreateGroupWithSubGroup(req, cb) {
        let resp = new CreateGroupWithSubGroupResponse();
        this.request("CreateGroupWithSubGroup", req, resp, cb);
    }

    /**
     * This API is used to create multiple groups at a time.
A maximum of 20 requests can be initiated per second for this API.
     * @param {BatchCreateGroupWithMembersRequest} req
     * @param {function(string, BatchCreateGroupWithMembersResponse):void} cb
     * @public
     */
    BatchCreateGroupWithMembers(req, cb) {
        let resp = new BatchCreateGroupWithMembersResponse();
        this.request("BatchCreateGroupWithMembers", req, resp, cb);
    }

    /**
     * This API is used to create a room.
A maximum of 20 requests can be initiated per second for this API.
     * @param {CreateRoomRequest} req
     * @param {function(string, CreateRoomResponse):void} cb
     * @public
     */
    CreateRoom(req, cb) {
        let resp = new CreateRoomResponse();
        this.request("CreateRoom", req, resp, cb);
    }


}
module.exports = LcicClient;
