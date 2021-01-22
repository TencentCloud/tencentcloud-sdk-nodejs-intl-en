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
const DescribeAbnormalEventResponse = models.DescribeAbnormalEventResponse;
const RealtimeData = models.RealtimeData;
const DescribeAbnormalEventRequest = models.DescribeAbnormalEventRequest;
const LayoutParams = models.LayoutParams;
const TimeValue = models.TimeValue;
const StopMCUMixTranscodeResponse = models.StopMCUMixTranscodeResponse;
const DescribeRealtimeScaleResponse = models.DescribeRealtimeScaleResponse;
const DismissRoomResponse = models.DismissRoomResponse;
const DescribeRealtimeNetworkResponse = models.DescribeRealtimeNetworkResponse;
const DescribeUserInformationRequest = models.DescribeUserInformationRequest;
const DescribeCallDetailRequest = models.DescribeCallDetailRequest;
const DescribeRealtimeNetworkRequest = models.DescribeRealtimeNetworkRequest;
const DescribeUserInformationResponse = models.DescribeUserInformationResponse;
const EncodeParams = models.EncodeParams;
const StartMCUMixTranscodeRequest = models.StartMCUMixTranscodeRequest;
const DescribeRealtimeQualityResponse = models.DescribeRealtimeQualityResponse;
const StopMCUMixTranscodeRequest = models.StopMCUMixTranscodeRequest;
const UserInformation = models.UserInformation;
const DescribeHistoryScaleRequest = models.DescribeHistoryScaleRequest;
const DescribeRoomInformationResponse = models.DescribeRoomInformationResponse;
const RemoveUserRequest = models.RemoveUserRequest;
const OutputParams = models.OutputParams;
const EventMessage = models.EventMessage;
const CreateTroubleInfoResponse = models.CreateTroubleInfoResponse;
const QualityData = models.QualityData;
const AbnormalEvent = models.AbnormalEvent;
const DescribeRealtimeQualityRequest = models.DescribeRealtimeQualityRequest;
const ScaleInfomation = models.ScaleInfomation;
const CreateTroubleInfoRequest = models.CreateTroubleInfoRequest;
const EventList = models.EventList;
const DismissRoomRequest = models.DismissRoomRequest;
const DescribeDetailEventResponse = models.DescribeDetailEventResponse;
const StartMCUMixTranscodeResponse = models.StartMCUMixTranscodeResponse;
const SmallVideoLayoutParams = models.SmallVideoLayoutParams;
const PresetLayoutConfig = models.PresetLayoutConfig;
const DescribeRealtimeScaleRequest = models.DescribeRealtimeScaleRequest;
const DescribeCallDetailResponse = models.DescribeCallDetailResponse;
const PublishCdnParams = models.PublishCdnParams;
const DescribeRoomInformationRequest = models.DescribeRoomInformationRequest;
const DescribeDetailEventRequest = models.DescribeDetailEventRequest;
const AbnormalExperience = models.AbnormalExperience;
const RoomState = models.RoomState;
const RemoveUserResponse = models.RemoveUserResponse;
const DescribeHistoryScaleResponse = models.DescribeHistoryScaleResponse;


/**
 * trtc client
 * @class
 */
class TrtcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("trtc.tencentcloudapi.com", "2019-07-22", credential, region, profile);
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
     * This API is used to create exception information.
     * @param {CreateTroubleInfoRequest} req
     * @param {function(string, CreateTroubleInfoResponse):void} cb
     * @public
     */
    CreateTroubleInfo(req, cb) {
        let resp = new CreateTroubleInfoResponse();
        this.request("CreateTroubleInfo", req, resp, cb);
    }

    /**
     * This API is used to query the daily numbers of rooms and users under a specified `SDKAppID`. It can query data once per minute for the last 14 days. If a day has not ended, the numbers of rooms and users on the day cannot be queried.
     * @param {DescribeHistoryScaleRequest} req
     * @param {function(string, DescribeHistoryScaleResponse):void} cb
     * @public
     */
    DescribeHistoryScale(req, cb) {
        let resp = new DescribeHistoryScaleResponse();
        this.request("DescribeHistoryScale", req, resp, cb);
    }

    /**
     * This API is used to enable On-Cloud MixTranscoding and specify the position of each channel of image in stream mixing.

There may be multiple channels of audio/video streams in a TRTC room. You can call this API to request the Tencent Cloud server to combine multiple channels of video images and audio into one channel and specify the position of each image so as to produce just one channel of audio/video stream for recording and live streaming. The mixing stops automatically after a room is destroyed.

You can use this API to perform the following operations:
- Set image and audio quality parameters of the final live stream, including video resolution, video bitrate, video frame rate, and audio quality.
- Set the layout, i.e., the position of each channel of image. You only need to set it once when enabling On-Cloud MixTranscoding, and the layout engine will automatically arrange images as configured.
- Set the names of recording files for future playback.
- Set the stream ID for CDN live streaming.

Currently, On-Cloud MixTranscoding supports the following layout templates:
- Floating: the entire screen is covered by the video image of the first user who enters the room, and the images of other users are displayed as small images in horizontal rows in the bottom-left corner in room entry sequence. The screen can accommodate up to 4 rows of 4 small images, which float over the big image. Up to 1 big image and 15 small images can be displayed. A user sending audio only will still occupy an image spot.
- Grid: the images of the users split the entire screen evenly. The more the users, the smaller the image dimensions. Up to 16 images can be displayed. A user sending audio only will still occupy an image spot.
- Screen sharing: this is designed for video conferencing and online education. The shared screen (image of the anchor) is always displayed as the big image, which occupies the left half of the screen, and the images of other users occupy the right half in up to 2 columns of up to 8 small images each. Up to 1 big image and 15 small images can be displayed. If the aspect ratio of upstream images do not match that of output images, the big image on the left will be scaled and displayed in whole, while the small images on the right will be cropped.
- Picture-in-picture: this is designed for mixing the dual-channel (small and big) image or big image with the audio of other users. The small images float over the big image. You can specify which users to be displayed as the big/small images as well as the positions of the small images. Up to 2 images are supported.
- Custom: this is designed for cases where you want to specify the image positions of users in the mixed stream or preset image positions. If users are assigned to preset positions, the layout engine will reserve the positions for the users; if not, users will occupy the positions in room entry sequence. Once all preset positions are occupied, TRTC will stop mixing the audio and images of other users. If the placeholding feature is enabled for a custom template (`PlaceHolderMode` in `LayoutParams` set to 1), but a user for whom a place is reserved is not sending video data, the position will show the corresponding placeholder image (`PlaceImageId`).

Note: only applications created on and after January 9, 2020 can call this API directly. Applications created before use the stream mixing service of LVB by default. If you want to switch to MCU On-Cloud MixTranscoding, please [submit a ticket](https://console.cloud.tencent.com/workorder/category).
     * @param {StartMCUMixTranscodeRequest} req
     * @param {function(string, StartMCUMixTranscodeResponse):void} cb
     * @public
     */
    StartMCUMixTranscode(req, cb) {
        let resp = new StartMCUMixTranscodeResponse();
        this.request("StartMCUMixTranscode", req, resp, cb);
    }

    /**
     *  This API is used to query the scale of an `SDKAppID` in the last 24 hours on a per-minute basis. The query period must be 1-60 minutes.
     * @param {DescribeRealtimeScaleRequest} req
     * @param {function(string, DescribeRealtimeScaleResponse):void} cb
     * @public
     */
    DescribeRealtimeScale(req, cb) {
        let resp = new DescribeRealtimeScaleResponse();
        this.request("DescribeRealtimeScale", req, resp, cb);
    }

    /**
     * This API is used to query the network conditions of an `SDKAppID`, including upstream and downstream packet loss, in the last 24 hours on a per-minute basis. The query period must be 1-60 minutes.
     * @param {DescribeRealtimeNetworkRequest} req
     * @param {function(string, DescribeRealtimeNetworkResponse):void} cb
     * @public
     */
    DescribeRealtimeNetwork(req, cb) {
        let resp = new DescribeRealtimeNetworkResponse();
        this.request("DescribeRealtimeNetwork", req, resp, cb);
    }

    /**
     * This API is used to query the room list of an `SDKAppID` in the last 14 days. It returns 10 calls by default and can return up to 100 calls per query.
Note: you are not advised to use the API for the processing of real-time business logic.
     * @param {DescribeRoomInformationRequest} req
     * @param {function(string, DescribeRoomInformationResponse):void} cb
     * @public
     */
    DescribeRoomInformation(req, cb) {
        let resp = new DescribeRoomInformationResponse();
        this.request("DescribeRoomInformation", req, resp, cb);
    }

    /**
     * This API is used to query a user’s activity details such as room entry/exit and video enablement/disablement during a call. It can query data for the last 14 days.
     * @param {DescribeDetailEventRequest} req
     * @param {function(string, DescribeDetailEventResponse):void} cb
     * @public
     */
    DescribeDetailEvent(req, cb) {
        let resp = new DescribeDetailEventResponse();
        this.request("DescribeDetailEvent", req, resp, cb);
    }

    /**
     * This API is used to query the user list and call quality data of a specified time range in the last 14 days. When `DataType` is not null, data of up to 6 users during a period of up to 1 hour can be queried each time, and the period can start on one day and end on the next. When `DataType` and `UserIds` are null, 6 users are queried by default, and data of up to 100 users can be displayed on each page (`PageSize` set to 100 or lower). This API is used to query call quality and is not recommended for billing.
Note: you are not advised to use the API for the processing of real-time business logic.
     * @param {DescribeCallDetailRequest} req
     * @param {function(string, DescribeCallDetailResponse):void} cb
     * @public
     */
    DescribeCallDetail(req, cb) {
        let resp = new DescribeCallDetailResponse();
        this.request("DescribeCallDetail", req, resp, cb);
    }

    /**
     * This API is used to end On-Cloud MixTranscoding.
     * @param {StopMCUMixTranscodeRequest} req
     * @param {function(string, StopMCUMixTranscodeResponse):void} cb
     * @public
     */
    StopMCUMixTranscode(req, cb) {
        let resp = new StopMCUMixTranscodeResponse();
        this.request("StopMCUMixTranscode", req, resp, cb);
    }

    /**
     * This API is used to query exception occurrences under a specified `SDKAppID` and return the exception ID and possible causes. It queries data in last 5 days, and the query period is up to 1 hour which can start and end on different days. For more information about exceptions, please see the exception ID mapping table: https://intl.cloud.tencent.com/document/product/647/37906
     * @param {DescribeAbnormalEventRequest} req
     * @param {function(string, DescribeAbnormalEventResponse):void} cb
     * @public
     */
    DescribeAbnormalEvent(req, cb) {
        let resp = new DescribeAbnormalEventResponse();
        this.request("DescribeAbnormalEvent", req, resp, cb);
    }

    /**
     * This API is used to query the quality metrics of an `SDKAppID` in the last 24 hours on a per-minute basis, including room entry success rate, instant playback rate of the first frame, and audio/video lag rate. The query period must be 1-60 minutes.
     * @param {DescribeRealtimeQualityRequest} req
     * @param {function(string, DescribeRealtimeQualityResponse):void} cb
     * @public
     */
    DescribeRealtimeQuality(req, cb) {
        let resp = new DescribeRealtimeQualityResponse();
        this.request("DescribeRealtimeQuality", req, resp, cb);
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

    /**
     * This API is used to query the user list of a specified time range (up to 4 hours) in the last 14 days. Data of 6 users is displayed on each page by default, and data of up to 100 users can be displayed on each page (`PageSize` set to 100 or lower).
Note: you are not advised to use the API for the processing of real-time business logic.
     * @param {DescribeUserInformationRequest} req
     * @param {function(string, DescribeUserInformationResponse):void} cb
     * @public
     */
    DescribeUserInformation(req, cb) {
        let resp = new DescribeUserInformationResponse();
        this.request("DescribeUserInformation", req, resp, cb);
    }


}
module.exports = TrtcClient;
