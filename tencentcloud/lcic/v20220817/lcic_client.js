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
const SetAppCustomContentRequest = models.SetAppCustomContentRequest;
const UnbindDocumentFromRoomResponse = models.UnbindDocumentFromRoomResponse;
const DescribeUserRequest = models.DescribeUserRequest;
const CreateDocumentResponse = models.CreateDocumentResponse;
const DescribeRoomStatisticsRequest = models.DescribeRoomStatisticsRequest;
const BindDocumentToRoomRequest = models.BindDocumentToRoomRequest;
const CreateDocumentRequest = models.CreateDocumentRequest;
const SetAppCustomContentResponse = models.SetAppCustomContentResponse;
const LoginOriginIdResponse = models.LoginOriginIdResponse;
const LoginUserResponse = models.LoginUserResponse;
const DescribeRoomResponse = models.DescribeRoomResponse;
const DeleteRoomResponse = models.DeleteRoomResponse;
const AppCustomContent = models.AppCustomContent;
const DescribeRoomStatisticsResponse = models.DescribeRoomStatisticsResponse;
const CreateSupervisorResponse = models.CreateSupervisorResponse;
const DeleteRoomRequest = models.DeleteRoomRequest;
const RegisterUserResponse = models.RegisterUserResponse;
const ModifyAppResponse = models.ModifyAppResponse;
const MemberRecord = models.MemberRecord;
const ModifyAppRequest = models.ModifyAppRequest;
const CreateSupervisorRequest = models.CreateSupervisorRequest;
const UnbindDocumentFromRoomRequest = models.UnbindDocumentFromRoomRequest;
const LoginOriginIdRequest = models.LoginOriginIdRequest;
const RegisterUserRequest = models.RegisterUserRequest;
const LoginUserRequest = models.LoginUserRequest;
const BindDocumentToRoomResponse = models.BindDocumentToRoomResponse;
const CreateRoomResponse = models.CreateRoomResponse;
const DescribeUserResponse = models.DescribeUserResponse;
const DescribeRoomRequest = models.DescribeRoomRequest;


/**
 * lcic client
 * @class
 */
class LcicClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("lcic.tencentcloudapi.com", "2022-08-17", credential, region, profile);
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
     * This API is used to obtain the statistics of a room. It can be called only after the room is ended.
     * @param {DescribeRoomStatisticsRequest} req
     * @param {function(string, DescribeRoomStatisticsResponse):void} cb
     * @public
     */
    DescribeRoomStatistics(req, cb) {
        let resp = new DescribeRoomStatisticsResponse();
        this.request("DescribeRoomStatistics", req, resp, cb);
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
     * This API is used to modify an application.
     * @param {ModifyAppRequest} req
     * @param {function(string, ModifyAppResponse):void} cb
     * @public
     */
    ModifyApp(req, cb) {
        let resp = new ModifyAppResponse();
        this.request("ModifyApp", req, resp, cb);
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
     * This API is used to get room information.
     * @param {DescribeRoomRequest} req
     * @param {function(string, DescribeRoomResponse):void} cb
     * @public
     */
    DescribeRoom(req, cb) {
        let resp = new DescribeRoomResponse();
        this.request("DescribeRoom", req, resp, cb);
    }

    /**
     * This API is used to create a room.
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
