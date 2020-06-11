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
const RealtimeData = models.RealtimeData;
const TimeValue = models.TimeValue;
const DescribeRealtimeScaleResponse = models.DescribeRealtimeScaleResponse;
const DismissRoomResponse = models.DismissRoomResponse;
const DescribeRealtimeQualityRequest = models.DescribeRealtimeQualityRequest;
const RemoveUserRequest = models.RemoveUserRequest;
const DescribeCallDetailRequest = models.DescribeCallDetailRequest;
const DescribeRealtimeNetworkRequest = models.DescribeRealtimeNetworkRequest;
const DismissRoomRequest = models.DismissRoomRequest;
const DescribeRealtimeQualityResponse = models.DescribeRealtimeQualityResponse;
const DescribeHistoryScaleRequest = models.DescribeHistoryScaleRequest;
const DescribeRoomInformationResponse = models.DescribeRoomInformationResponse;
const QualityData = models.QualityData;
const DescribeRealtimeNetworkResponse = models.DescribeRealtimeNetworkResponse;
const ScaleInfomation = models.ScaleInfomation;
const DescribeRealtimeScaleRequest = models.DescribeRealtimeScaleRequest;
const DescribeCallDetailResponse = models.DescribeCallDetailResponse;
const DescribeRoomInformationRequest = models.DescribeRoomInformationRequest;
const UserInformation = models.UserInformation;
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
     * This API is used to query real-time quality data for the last 24 hours according to `sdkappid`, including the room entry success rate, instant playback rate of the first frame, audio lag rate, and video lag rate. The query time range cannot exceed 1 hour.
     * @param {DescribeRealtimeQualityRequest} req
     * @param {function(string, DescribeRealtimeQualityResponse):void} cb
     * @public
     */
    DescribeRealtimeQuality(req, cb) {
        let resp = new DescribeRealtimeQualityResponse();
        this.request("DescribeRealtimeQuality", req, resp, cb);
    }

    /**
     * This API is used to query the number of historical rooms and users for the last 5 days. It can query once per minute.
     * @param {DescribeHistoryScaleRequest} req
     * @param {function(string, DescribeHistoryScaleResponse):void} cb
     * @public
     */
    DescribeHistoryScale(req, cb) {
        let resp = new DescribeHistoryScaleResponse();
        this.request("DescribeHistoryScale", req, resp, cb);
    }

    /**
     * This API is used to query the real-time scale for the last 24 hours according to `sdkappid`. The query time range cannot exceed 1 hour.
     * @param {DescribeRealtimeScaleRequest} req
     * @param {function(string, DescribeRealtimeScaleResponse):void} cb
     * @public
     */
    DescribeRealtimeScale(req, cb) {
        let resp = new DescribeRealtimeScaleResponse();
        this.request("DescribeRealtimeScale", req, resp, cb);
    }

    /**
     * This API is used to query real-time network status for the last 24 hours according to `sdkappid`, including upstream and downstream packet losses. The query time range cannot exceed 1 hour.
     * @param {DescribeRealtimeNetworkRequest} req
     * @param {function(string, DescribeRealtimeNetworkResponse):void} cb
     * @public
     */
    DescribeRealtimeNetwork(req, cb) {
        let resp = new DescribeRealtimeNetworkResponse();
        this.request("DescribeRealtimeNetwork", req, resp, cb);
    }

    /**
     * This API is used to query the room list for the last 5 days according to `sdkappid`. It returns 10 calls by default and up to 100 calls at a time.
     * @param {DescribeRoomInformationRequest} req
     * @param {function(string, DescribeRoomInformationResponse):void} cb
     * @public
     */
    DescribeRoomInformation(req, cb) {
        let resp = new DescribeRoomInformationResponse();
        this.request("DescribeRoomInformation", req, resp, cb);
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
     * This API is used to query the user list and user call quality data in a specified time period. It can query data of up to 6 users for the last 5 days, and the query time range cannot exceed 1 hour.
     * @param {DescribeCallDetailRequest} req
     * @param {function(string, DescribeCallDetailResponse):void} cb
     * @public
     */
    DescribeCallDetail(req, cb) {
        let resp = new DescribeCallDetailResponse();
        this.request("DescribeCallDetail", req, resp, cb);
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
