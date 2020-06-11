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
const AbstractModel = require("../../common/abstract_model");

/**
 * Returned data of seconds-level monitoring
 * @class
 */
class RealtimeData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned data
         * @type {Array.<TimeValue> || null}
         */
        this.Content = null;

        /**
         * Data type field
         * @type {string || null}
         */
        this.DataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new TimeValue();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * Returned quality data in the format of time:value
 * @class
 */
class TimeValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time
         * @type {number || null}
         */
        this.Time = null;

        /**
         * Current time value in the format of UNIX timestamp
         * @type {number || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeRealtimeScale response structure.
 * @class
 */
class DescribeRealtimeScaleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned data array
         * @type {Array.<RealtimeData> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new RealtimeData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DismissRoom response structure.
 * @class
 */
class DismissRoomResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRealtimeQuality request structure.
 * @class
 */
class DescribeRealtimeQualityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query start time in the format of local UNIX timestamp, such as 1588031999s, which is a point in time in the last 24 hours.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of local UNIX timestamp, such as 1588031999s.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * User `sdkappid`
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * Type of data to query
enterTotalSuccPercent: room entry success rate;
fistFreamInSecRate: instant playback rate of the first frame;
blockPercent: video lag rate;
audioBlockPercent: audio lag rate.
         * @type {Array.<string> || null}
         */
        this.DataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * RemoveUser request structure.
 * @class
 */
class RemoveUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `SDKAppId` of TRTC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Room number.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * List of up to 10 users to be removed.
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * DescribeCallDetail request structure.
 * @class
 */
class DescribeCallDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Call ID (unique call ID): sdkappid_roomgString (room ID)_createTime (room creation time in UNIX timestamp in seconds). You can get the parameter value through the `DescribeRoomInformation` API which is used to query the room list.
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * Query start time in the format of local UNIX timestamp, such as 1588031999s, which is a point in time in the last 5 days.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of local UNIX timestamp, such as 1588031999s.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * User `sdkappid`
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * User array to query, which contains up to 6 users. If it is left empty, 6 users will be returned by default.
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * Metric to query. The user list will be returned if it is left empty; all metrics will be returned if its value is `all`.
appCpu: CPU utilization of application;
sysCpu: CPU utilization of system;
aBit: upstream/downstream audio bitrate;
aBlock: audio lag duration;
vBit: upstream/downstream video bitrate;
vCapFps: video capturing frame rate;
vEncFps: video sending frame rate;
vDecFps: rendering frame rate;
vBlock: video lag duration;
aLoss: upstream/downstream audio packet loss;
vLoss: upstream/downstream video packet loss;
vWidth: upstream/downstream resolution in width;
vHeight: upstream/downstream resolution in height.
         * @type {Array.<string> || null}
         */
        this.DataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommId = 'CommId' in params ? params.CommId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * DescribeRealtimeNetwork request structure.
 * @class
 */
class DescribeRealtimeNetworkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query start time in the format of local UNIX timestamp, such as 1588031999s, which is a point in time in the last 24 hours.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of local UNIX timestamp, such as 1588031999s.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * User `sdkappid`
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * Type of data to query
sendLossRateRaw: upstream packet loss rate;
recvLossRateRaw: downstream packet loss rate.
         * @type {Array.<string> || null}
         */
        this.DataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * DismissRoom request structure.
 * @class
 */
class DismissRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `SDKAppId` of TRTC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Room number.
         * @type {number || null}
         */
        this.RoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * DescribeRealtimeQuality response structure.
 * @class
 */
class DescribeRealtimeQualityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of returned data
         * @type {Array.<RealtimeData> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new RealtimeData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHistoryScale request structure.
 * @class
 */
class DescribeHistoryScaleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User `sdkappid`
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * Query start time in the format of local UNIX timestamp, such as 1588031999s, which is a point in time in the last 5 days.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of local UNIX timestamp, such as 1588031999s.
         * @type {number || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeRoomInformation response structure.
 * @class
 */
class DescribeRoomInformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of returned data entries.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Room information list
         * @type {Array.<RoomState> || null}
         */
        this.RoomList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.RoomList) {
            this.RoomList = new Array();
            for (let z in params.RoomList) {
                let obj = new RoomState();
                obj.deserialize(params.RoomList[z]);
                this.RoomList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Quality data returned by ES
 * @class
 */
class QualityData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data content
         * @type {Array.<TimeValue> || null}
         */
        this.Content = null;

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Peer ID. An empty value indicates that the returned data is upstream.
         * @type {string || null}
         */
        this.PeerId = null;

        /**
         * Data type
         * @type {string || null}
         */
        this.DataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new TimeValue();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.PeerId = 'PeerId' in params ? params.PeerId : null;
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * DescribeRealtimeNetwork response structure.
 * @class
 */
class DescribeRealtimeNetworkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data returned by query
         * @type {Array.<RealtimeData> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new RealtimeData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Historical scale information
 * @class
 */
class ScaleInfomation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time for each day
         * @type {number || null}
         */
        this.Time = null;

        /**
         * Number of users in room
         * @type {number || null}
         */
        this.UserNumber = null;

        /**
         * Number of times a room has been entered
         * @type {number || null}
         */
        this.UserCount = null;

        /**
         * Number of rooms.
         * @type {number || null}
         */
        this.RoomNumbers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.UserNumber = 'UserNumber' in params ? params.UserNumber : null;
        this.UserCount = 'UserCount' in params ? params.UserCount : null;
        this.RoomNumbers = 'RoomNumbers' in params ? params.RoomNumbers : null;

    }
}

/**
 * DescribeRealtimeScale request structure.
 * @class
 */
class DescribeRealtimeScaleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query start time in the format of local UNIX timestamp, such as 1588031999s, which is a point in time in the last 24 hours.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of local UNIX timestamp, such as 1588031999s.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * User `sdkappid`
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * Type of data to query
`UserNum: number of users in call;
RoomNum: number of rooms.
         * @type {Array.<string> || null}
         */
        this.DataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * DescribeCallDetail response structure.
 * @class
 */
class DescribeCallDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of returned users
         * @type {number || null}
         */
        this.Total = null;

        /**
         * User information list
         * @type {Array.<UserInformation> || null}
         */
        this.UserList = null;

        /**
         * Quality data
         * @type {Array.<QualityData> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.UserList) {
            this.UserList = new Array();
            for (let z in params.UserList) {
                let obj = new UserInformation();
                obj.deserialize(params.UserList[z]);
                this.UserList.push(obj);
            }
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new QualityData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoomInformation request structure.
 * @class
 */
class DescribeRoomInformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User `sdkappid`
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * Query start time in the format of local UNIX timestamp, such as 1588031999s, which is a point in time in the last 5 days.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of local UNIX timestamp, such as 1588031999s.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Room ID of uint type
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * Page index. If it is left empty, 10 entries will be returned by default.
         * @type {string || null}
         */
        this.PageNumber = null;

        /**
         * Page size. Maximum value: 100. If it is left empty, 10 entries will be returned by default.
         * @type {string || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * User information, including when the user enters/exits a room, etc.
 * @class
 */
class UserInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Room ID of string type.
         * @type {string || null}
         */
        this.RoomStr = null;

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The time when the user enters the room
         * @type {number || null}
         */
        this.JoinTs = null;

        /**
         * The time when the user exits the room
         * @type {number || null}
         */
        this.LeaveTs = null;

        /**
         * Device type
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * SDK version number
         * @type {string || null}
         */
        this.SdkVersion = null;

        /**
         * Client IP
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * Determine whether a user has left the room
         * @type {boolean || null}
         */
        this.Finished = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomStr = 'RoomStr' in params ? params.RoomStr : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.JoinTs = 'JoinTs' in params ? params.JoinTs : null;
        this.LeaveTs = 'LeaveTs' in params ? params.LeaveTs : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.SdkVersion = 'SdkVersion' in params ? params.SdkVersion : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Finished = 'Finished' in params ? params.Finished : null;

    }
}

/**
 * Room information list
 * @class
 */
class RoomState extends  AbstractModel {
    constructor(){
        super();

        /**
         * Call ID (unique call ID)
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * Room ID of string type
         * @type {string || null}
         */
        this.RoomString = null;

        /**
         * Room creation time
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Room termination time
         * @type {number || null}
         */
        this.DestroyTime = null;

        /**
         * Whether the room is terminated
         * @type {boolean || null}
         */
        this.IsFinished = null;

        /**
         * Room creator ID
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommId = 'CommId' in params ? params.CommId : null;
        this.RoomString = 'RoomString' in params ? params.RoomString : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DestroyTime = 'DestroyTime' in params ? params.DestroyTime : null;
        this.IsFinished = 'IsFinished' in params ? params.IsFinished : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * RemoveUser response structure.
 * @class
 */
class RemoveUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHistoryScale response structure.
 * @class
 */
class DescribeHistoryScaleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned data entries
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Returned data
         * @type {Array.<ScaleInfomation> || null}
         */
        this.ScaleList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ScaleList) {
            this.ScaleList = new Array();
            for (let z in params.ScaleList) {
                let obj = new ScaleInfomation();
                obj.deserialize(params.ScaleList[z]);
                this.ScaleList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    RealtimeData: RealtimeData,
    TimeValue: TimeValue,
    DescribeRealtimeScaleResponse: DescribeRealtimeScaleResponse,
    DismissRoomResponse: DismissRoomResponse,
    DescribeRealtimeQualityRequest: DescribeRealtimeQualityRequest,
    RemoveUserRequest: RemoveUserRequest,
    DescribeCallDetailRequest: DescribeCallDetailRequest,
    DescribeRealtimeNetworkRequest: DescribeRealtimeNetworkRequest,
    DismissRoomRequest: DismissRoomRequest,
    DescribeRealtimeQualityResponse: DescribeRealtimeQualityResponse,
    DescribeHistoryScaleRequest: DescribeHistoryScaleRequest,
    DescribeRoomInformationResponse: DescribeRoomInformationResponse,
    QualityData: QualityData,
    DescribeRealtimeNetworkResponse: DescribeRealtimeNetworkResponse,
    ScaleInfomation: ScaleInfomation,
    DescribeRealtimeScaleRequest: DescribeRealtimeScaleRequest,
    DescribeCallDetailResponse: DescribeCallDetailResponse,
    DescribeRoomInformationRequest: DescribeRoomInformationRequest,
    UserInformation: UserInformation,
    RoomState: RoomState,
    RemoveUserResponse: RemoveUserResponse,
    DescribeHistoryScaleResponse: DescribeHistoryScaleResponse,

}
