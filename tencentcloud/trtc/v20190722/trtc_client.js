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
const CreateCloudRecordingResponse = models.CreateCloudRecordingResponse;
const CloudStorage = models.CloudStorage;
const StorageFile = models.StorageFile;
const WaterMark = models.WaterMark;
const DescribeCloudRecordingResponse = models.DescribeCloudRecordingResponse;
const DismissRoomByStrRoomIdRequest = models.DismissRoomByStrRoomIdRequest;
const DismissRoomResponse = models.DismissRoomResponse;
const MixLayout = models.MixLayout;
const RemoveUserRequest = models.RemoveUserRequest;
const StorageParams = models.StorageParams;
const DismissRoomRequest = models.DismissRoomRequest;
const RemoveUserByStrRoomIdResponse = models.RemoveUserByStrRoomIdResponse;
const DescribeCloudRecordingRequest = models.DescribeCloudRecordingRequest;
const TencentVod = models.TencentVod;
const RecordParams = models.RecordParams;
const CreateCloudRecordingRequest = models.CreateCloudRecordingRequest;
const DeleteCloudRecordingResponse = models.DeleteCloudRecordingResponse;
const MixTranscodeParams = models.MixTranscodeParams;
const RemoveUserByStrRoomIdRequest = models.RemoveUserByStrRoomIdRequest;
const SubscribeStreamUserIds = models.SubscribeStreamUserIds;
const ModifyCloudRecordingRequest = models.ModifyCloudRecordingRequest;
const VideoParams = models.VideoParams;
const WaterMarkImage = models.WaterMarkImage;
const CloudVod = models.CloudVod;
const MixLayoutParams = models.MixLayoutParams;
const DeleteCloudRecordingRequest = models.DeleteCloudRecordingRequest;
const RemoveUserResponse = models.RemoveUserResponse;
const AudioParams = models.AudioParams;
const DismissRoomByStrRoomIdResponse = models.DismissRoomByStrRoomIdResponse;
const ModifyCloudRecordingResponse = models.ModifyCloudRecordingResponse;


/**
 * trtc client
 * @class
 */
class TrtcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("trtc.tencentcloudapi.com", "2019-07-22", credential, region, profile);
    }
    
    /**
     * This API is used to remove all users from a room and close the room. It works on all platforms. For Android, iOS, Windows, and macOS, you need to update the TRTC SDK to version 6.6 or above.
     * @param {DismissRoomByStrRoomIdRequest} req
     * @param {function(string, DismissRoomByStrRoomIdResponse):void} cb
     * @public
     */
    DismissRoomByStrRoomId(req, cb) {
        let resp = new DismissRoomByStrRoomIdResponse();
        this.request("DismissRoomByStrRoomId", req, resp, cb);
    }

    /**
     * This API is used to query the status of a recording task after it starts. It works only when a task is in progress. If the task has already ended when this API is called, an error will be returned.
     * @param {DescribeCloudRecordingRequest} req
     * @param {function(string, DescribeCloudRecordingResponse):void} cb
     * @public
     */
    DescribeCloudRecording(req, cb) {
        let resp = new DescribeCloudRecordingResponse();
        this.request("DescribeCloudRecording", req, resp, cb);
    }

    /**
     * ### API description
This API is used to start an on-cloud recording task. It records the audio and video streams in a room and saves them to the specified cloud storage. You can use this API to record the streams in a room separately, or you can mix the streams first and then record the mixed stream.

### You can use this API to perform the following operations:
* Specify the anchors whose streams you want or do not want to record by using the `RecordParams` parameter
* Specify the storage service you want to save recording files to by using the `StorageParams` parameter
* Specify transcoding settings for mixed-stream recording, including video resolution, video bitrate, frame rate, and audio quality, by using `MixTranscodeParams`
* Specify the layout of different videos in mixed-stream recording mode or select an auto-arranged layout template

### Key concepts
* Single-stream recording: Record the audio and video of each subscribed user (`UserId`) in a room and save the recording files (M3U8/TS) to the cloud
* Mixed-stream recording: Mix the audios and videos of subscribed users (`UserId`) in a room, record the mixed stream, and save the recording files (M3U8/TS) to the cloud
     * @param {CreateCloudRecordingRequest} req
     * @param {function(string, CreateCloudRecordingResponse):void} cb
     * @public
     */
    CreateCloudRecording(req, cb) {
        let resp = new CreateCloudRecordingResponse();
        this.request("CreateCloudRecording", req, resp, cb);
    }

    /**
     * This API is used to stop a recording task. It works only when a task is in progress. If the task has already ended when this API is called, an error will be returned. If a task is stopped successfully, but the uploading of recording files has not completed, the backend will continue to upload the files and will notify you via a callback when the upload is completed.
     * @param {DeleteCloudRecordingRequest} req
     * @param {function(string, DeleteCloudRecordingResponse):void} cb
     * @public
     */
    DeleteCloudRecording(req, cb) {
        let resp = new DeleteCloudRecordingResponse();
        this.request("DeleteCloudRecording", req, resp, cb);
    }

    /**
     * This API is used to remove a user from a room. It is applicable to scenarios where the anchor, room owner, or admin wants to kick out a user. It supports all platforms. For Android, iOS, Windows, and macOS, the TRTC SDK needs to be upgraded to v6.6 or above.
     * @param {RemoveUserRequest} req
     * @param {function(string, RemoveUserResponse):void} cb
     * @public
     */
    RemoveUser(req, cb) {
        let resp = new RemoveUserResponse();
        this.request("RemoveUser", req, resp, cb);
    }

    /**
     * This API is used to modify a recording task. It works only when a task is in progress. If the task has already ended when this API is called, an error will be returned. You need to specify all the parameters for each request instead of just the ones you want to modify.
     * @param {ModifyCloudRecordingRequest} req
     * @param {function(string, ModifyCloudRecordingResponse):void} cb
     * @public
     */
    ModifyCloudRecording(req, cb) {
        let resp = new ModifyCloudRecordingResponse();
        this.request("ModifyCloudRecording", req, resp, cb);
    }

    /**
     * This API is used to remove a user from a room. It allows the anchor, room owner, or admin to kick out a user, and works on all platforms. For Android, iOS, Windows, and macOS, you need to update the TRTC SDK to version 6.6 or above.
     * @param {RemoveUserByStrRoomIdRequest} req
     * @param {function(string, RemoveUserByStrRoomIdResponse):void} cb
     * @public
     */
    RemoveUserByStrRoomId(req, cb) {
        let resp = new RemoveUserByStrRoomIdResponse();
        this.request("RemoveUserByStrRoomId", req, resp, cb);
    }

    /**
     * This API is used to remove all users from a room and dismiss the room. It supports all platforms. For Android, iOS, Windows, and macOS, the TRTC SDK needs to be upgraded to v6.6 or above.
     * @param {DismissRoomRequest} req
     * @param {function(string, DismissRoomResponse):void} cb
     * @public
     */
    DismissRoom(req, cb) {
        let resp = new DismissRoomResponse();
        this.request("DismissRoom", req, resp, cb);
    }


}
module.exports = TrtcClient;
