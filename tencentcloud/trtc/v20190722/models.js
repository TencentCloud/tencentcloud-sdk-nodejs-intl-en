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
 * DescribeAbnormalEvent response structure.
 * @class
 */
class DescribeAbnormalEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned data entries.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Exceptional experience list.
         * @type {Array.<AbnormalExperience> || null}
         */
        this.AbnormalExperienceList = null;

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

        if (params.AbnormalExperienceList) {
            this.AbnormalExperienceList = new Array();
            for (let z in params.AbnormalExperienceList) {
                let obj = new AbnormalExperience();
                obj.deserialize(params.AbnormalExperienceList[z]);
                this.AbnormalExperienceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

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
 * DescribeAbnormalEvent request structure.
 * @class
 */
class DescribeAbnormalEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User `SDKAppID`, which can be used to query 20 exceptional experience events (in one or more rooms)
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * Query start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Room ID, which can be used to query up to 20 exceptional experience events in a specific room
         * @type {string || null}
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * StartMCUMixTranscodeByStrRoomId request structure.
 * @class
 */
class StartMCUMixTranscodeByStrRoomIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `SDKAppId` of TRTC
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Room ID in string type
         * @type {string || null}
         */
        this.StrRoomId = null;

        /**
         * On-Cloud MixTranscoding output parameters
         * @type {OutputParams || null}
         */
        this.OutputParams = null;

        /**
         * On-Cloud MixTranscoding output encoding parameters
         * @type {EncodeParams || null}
         */
        this.EncodeParams = null;

        /**
         * On-Cloud MixTranscoding output layout parameters
         * @type {LayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * Relayed push parameters of a non-Tencent Cloud CDN
         * @type {PublishCdnParams || null}
         */
        this.PublishCdnParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StrRoomId = 'StrRoomId' in params ? params.StrRoomId : null;

        if (params.OutputParams) {
            let obj = new OutputParams();
            obj.deserialize(params.OutputParams)
            this.OutputParams = obj;
        }

        if (params.EncodeParams) {
            let obj = new EncodeParams();
            obj.deserialize(params.EncodeParams)
            this.EncodeParams = obj;
        }

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }

        if (params.PublishCdnParams) {
            let obj = new PublishCdnParams();
            obj.deserialize(params.PublishCdnParams)
            this.PublishCdnParams = obj;
        }

    }
}

/**
 * MCU On-Cloud MixTranscoding layout parameters
 * @class
 */
class LayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * On-cloud stream mix layout template ID. 0: floating template (default value); 1: grid template; 2: screen sharing template; 3: picture-in-picture template; 4: custom template.
         * @type {number || null}
         */
        this.Template = null;

        /**
         * ID of the user in the big image, which takes effect in a screen sharing, floating, or picture-in-picture template.
         * @type {string || null}
         */
        this.MainVideoUserId = null;

        /**
         * Stream type of the big image, which takes effect in a screen sharing, floating, or picture-in-picture template. 0: camera; 1: screen sharing. If a web user's stream is displayed in the big image on the left, enter 0 for this parameter.
         * @type {number || null}
         */
        this.MainVideoStreamType = null;

        /**
         * Layout parameter of the small image, which takes effect in a picture-in-picture template.
         * @type {SmallVideoLayoutParams || null}
         */
        this.SmallVideoLayoutParams = null;

        /**
         * You can set the layout parameter as 1 or 0 in the screen sharing template. 1: big image on the right and small images on the left, 0: big image on the left and small images on the right. The default value is 0. 
         * @type {number || null}
         */
        this.MainVideoRightAlign = null;

        /**
         * A user list, which takes effect for floating, grid, or screen sharing templates. When the user list has been set, the stream mix output for users in this user list will include both audio and video; the stream mix output for users not in the list will only include audio. Up to 16 users can be set.
         * @type {Array.<string> || null}
         */
        this.MixVideoUids = null;

        /**
         * Valid in custom template, used to specify the video image position of a user in mixed streams.
         * @type {Array.<PresetLayoutConfig> || null}
         */
        this.PresetLayoutConfig = null;

        /**
         * Valid in custom templates. 1: the placeholding feature is enabled; 0 (default): the feature is disabled. When the feature is enabled, but a user for whom a position is reserved is not sending video data, the position will show the corresponding placeholder image.
         * @type {number || null}
         */
        this.PlaceHolderMode = null;

        /**
         * Whether an audio-only stream occupies an image spot, which takes effect in a floating, grid, or screen sharing template. Valid values: 0 (default): when a floating or grid template is used, users sending audio only occupy image spots; when a screen sharing template is used, users (except the user whose screen is shared) sending audio only do not occupy image spots; 1: users sending audio only occupy image spots; 2: users sending audio only do not occupy image spots.
         * @type {number || null}
         */
        this.PureAudioHoldPlaceMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Template = 'Template' in params ? params.Template : null;
        this.MainVideoUserId = 'MainVideoUserId' in params ? params.MainVideoUserId : null;
        this.MainVideoStreamType = 'MainVideoStreamType' in params ? params.MainVideoStreamType : null;

        if (params.SmallVideoLayoutParams) {
            let obj = new SmallVideoLayoutParams();
            obj.deserialize(params.SmallVideoLayoutParams)
            this.SmallVideoLayoutParams = obj;
        }
        this.MainVideoRightAlign = 'MainVideoRightAlign' in params ? params.MainVideoRightAlign : null;
        this.MixVideoUids = 'MixVideoUids' in params ? params.MixVideoUids : null;

        if (params.PresetLayoutConfig) {
            this.PresetLayoutConfig = new Array();
            for (let z in params.PresetLayoutConfig) {
                let obj = new PresetLayoutConfig();
                obj.deserialize(params.PresetLayoutConfig[z]);
                this.PresetLayoutConfig.push(obj);
            }
        }
        this.PlaceHolderMode = 'PlaceHolderMode' in params ? params.PlaceHolderMode : null;
        this.PureAudioHoldPlaceMode = 'PureAudioHoldPlaceMode' in params ? params.PureAudioHoldPlaceMode : null;

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
         * Time in the format of UNIX timestamp, such as 1590065877s.
         * @type {number || null}
         */
        this.Time = null;

        /**
         * Parameter value returned in the current time. For example, if `bigvCapFps` is set to 0 when the current time is 1590065877s (UNIX timestamp), the value of this parameter is 0.
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
 * DismissRoomByStrRoomId request structure.
 * @class
 */
class DismissRoomByStrRoomIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `SDKAppId` of TRTC
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Room ID
         * @type {string || null}
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
 * StopMCUMixTranscode response structure.
 * @class
 */
class StopMCUMixTranscodeResponse extends  AbstractModel {
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
 * RemoveUserByStrRoomId request structure.
 * @class
 */
class RemoveUserByStrRoomIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `SDKAppId` of TRTC
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Room ID
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * List of up to 10 users to be removed
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
 * DescribeUserInformation request structure.
 * @class
 */
class DescribeUserInformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a call: sdkappid_roomgString_createTime. The `roomgString` refers to the room ID, and `createTime` refers to the creation time of a room in the format of UNIX timestamp in seconds, such as 1400353843_218695_1590065777. Its value can be obtained from the `DescribeRoomInformation` API (related document: https://intl.cloud.tencent.com/document/product/647/44050?from_cn_redirect=1).
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * Query start time in the format of UNIX timestamp (e.g. 1588031999s) in the last 5 days.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of UNIX timestamp (e.g. 1588031999s).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * User `SDKAppID` (e.g. 1400188366).
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * The array of user IDs for query. You can enter up to 6 user IDs. If it is left empty, data of 6 users will be returned.
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * Page index starting from 0. If either `PageNumber` or `PageSize` is left empty, 6 data entries will be returned.
         * @type {string || null}
         */
        this.PageNumber = null;

        /**
         * Number of entries per page. If either `PageNumber` or `PageSize` is left empty, 6 data entries will be returned. `PageSize` is up to 100.
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
        this.CommId = 'CommId' in params ? params.CommId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

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
         * Unique ID of a call: sdkappid_roomgString_createTime. The `roomgString` refers to the room ID, and `createTime` refers to the creation time of a room in the format of UNIX timestamp in seconds, such as 1400353843_218695_1590065777. Its value can be obtained from the `DescribeRoomInformation` API (related document: https://intl.cloud.tencent.com/document/product/647/44050?from_cn_redirect=1).
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * Query start time in the format of UNIX timestamp, such as 1588031999s, which is a point in time in the last 14 days.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of local UNIX timestamp, such as 1588031999s.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * User `SDKAppID`, such as 1400188366.
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
appCpu: CPU utilization of the application;
sysCpu: CPU utilization of the system;
aBit: upstream/downstream audio bitrate;
aBlock: audio lag duration;
bigvBit: upstream/downstream video bitrate;
bigvCapFps: frame rate for capturing videos;
bigvEncFps: frame rate for sending videos;
bigvDecFps: rendering frame rate;
bigvBlock: video lag duration;
aLoss: upstream/downstream audio packet loss;
bigvLoss: upstream/downstream video packet loss;
bigvWidth: upstream/downstream resolution in width;
bigvHeight: upstream/downstream resolution in height.
         * @type {Array.<string> || null}
         */
        this.DataType = null;

        /**
         * Page index starting from 0. If either `PageNumber` or `PageSize` is left empty, 6 data entries will be returned by default.
         * @type {string || null}
         */
        this.PageNumber = null;

        /**
         * Number of entries per page. If either `PageNumber` or `PageSize` is left empty, 6 data entries will be returned by default. When either `DataType` or `UserId` is not null, `PageSize` is up to 6. When `DataType` and `UserId` are null, `PageSize` is up to 100.
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
        this.CommId = 'CommId' in params ? params.CommId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.DataType = 'DataType' in params ? params.DataType : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

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
         * Query start time in the format of UNIX timestamp, such as 1588031999s, which is a point in time in the last 24 hours.
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
 * DescribeUserInformation response structure.
 * @class
 */
class DescribeUserInformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of users whose information will be returned
         * @type {number || null}
         */
        this.Total = null;

        /**
         * User information list
Note: this field may return `null`, indicating that no valid value was found.
         * @type {Array.<UserInformation> || null}
         */
        this.UserList = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Output stream encoding parameters for MCU On-Cloud MixTranscoding
 * @class
 */
class EncodeParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output stream audio sample rate for On-Cloud MixTranscoding in Hz. Valid values: 48000, 44100, 32000, 24000, 16000, 12000, 8000.
         * @type {number || null}
         */
        this.AudioSampleRate = null;

        /**
         * Output stream audio bitrate in Kbps for On-Cloud MixTranscoding. Value range: [8, 500].
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * Number of sound channels of output stream for On-Cloud MixTranscoding. Valid values: 1, 2. 1 represents mono-channel, and 2 represents dual-channel.
         * @type {number || null}
         */
        this.AudioChannels = null;

        /**
         * Output stream width in pixels for On-Cloud MixTranscoding, which is required for audio/video output. Value range: [0, 1920].
         * @type {number || null}
         */
        this.VideoWidth = null;

        /**
         * Output stream height in pixels for On-Cloud MixTranscoding, which is required for audio/video output. Value range: [0, 1080].
         * @type {number || null}
         */
        this.VideoHeight = null;

        /**
         * Output stream bitrate in Kbps for On-Cloud MixTranscoding, which is required for audio/video output. Value range: [1, 10000].
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * Output stream frame rate for On-Cloud MixTranscoding in FPS. This parameter is required for audio/video outputs. Value range: [1, 60].
         * @type {number || null}
         */
        this.VideoFramerate = null;

        /**
         * Output stream GOP in seconds for On-Cloud MixTranscoding, which is required for audio/video output. Value range: [1, 5].
         * @type {number || null}
         */
        this.VideoGop = null;

        /**
         * Output stream background color for On-Cloud MixTranscoding.
         * @type {number || null}
         */
        this.BackgroundColor = null;

        /**
         * Output stream background image for stream mix. Its value is the ID of image uploaded through the TRTC Console.
         * @type {number || null}
         */
        this.BackgroundImageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AudioSampleRate = 'AudioSampleRate' in params ? params.AudioSampleRate : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.AudioChannels = 'AudioChannels' in params ? params.AudioChannels : null;
        this.VideoWidth = 'VideoWidth' in params ? params.VideoWidth : null;
        this.VideoHeight = 'VideoHeight' in params ? params.VideoHeight : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.VideoFramerate = 'VideoFramerate' in params ? params.VideoFramerate : null;
        this.VideoGop = 'VideoGop' in params ? params.VideoGop : null;
        this.BackgroundColor = 'BackgroundColor' in params ? params.BackgroundColor : null;
        this.BackgroundImageId = 'BackgroundImageId' in params ? params.BackgroundImageId : null;

    }
}

/**
 * RemoveUserByStrRoomId response structure.
 * @class
 */
class RemoveUserByStrRoomIdResponse extends  AbstractModel {
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
 * StartMCUMixTranscode request structure.
 * @class
 */
class StartMCUMixTranscodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `SDKAppId` of TRTC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Room ID.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * On-Cloud MixTranscoding output control parameters.
         * @type {OutputParams || null}
         */
        this.OutputParams = null;

        /**
         * On-Cloud MixTranscoding output encoding parameters.
         * @type {EncodeParams || null}
         */
        this.EncodeParams = null;

        /**
         * On-Cloud MixTranscoding output layout parameters.
         * @type {LayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * Relayed push parameters of a non-Tencent Cloud CDN
         * @type {PublishCdnParams || null}
         */
        this.PublishCdnParams = null;

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

        if (params.OutputParams) {
            let obj = new OutputParams();
            obj.deserialize(params.OutputParams)
            this.OutputParams = obj;
        }

        if (params.EncodeParams) {
            let obj = new EncodeParams();
            obj.deserialize(params.EncodeParams)
            this.EncodeParams = obj;
        }

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }

        if (params.PublishCdnParams) {
            let obj = new PublishCdnParams();
            obj.deserialize(params.PublishCdnParams)
            this.PublishCdnParams = obj;
        }

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
 * StopMCUMixTranscode request structure.
 * @class
 */
class StopMCUMixTranscodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `SDKAppId` of TRTC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Room ID.
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
 * User information, including when the user enters/exits a room
 * @class
 */
class UserInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Room ID
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
         * The time when the user exits the room. If the user is still in the room, the current time will be returned
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
         * Total number of data entries displayed on the current page
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
 * MCU On-Cloud MixTranscoding output parameters
 * @class
 */
class OutputParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom live stream ID, which must be different from the ID of relayed stream.
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Value range: [0, 1]. If it is 0, live streams are audio and video; if it is 1, live streams are only audio. Default value: 0.
         * @type {number || null}
         */
        this.PureAudioStream = null;

        /**
         * Custom recording file name. Please enable the recording feature in the TRTC console first. https://intl.cloud.tencent.com/document/product/647/50768?from_cn_redirect=1
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * Value range: [0, 1]. If it is 0, the recording template configured in the console will be used; if it is 1, streams are recorded as .mp3 files.
         * @type {number || null}
         */
        this.RecordAudioOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.PureAudioStream = 'PureAudioStream' in params ? params.PureAudioStream : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.RecordAudioOnly = 'RecordAudioOnly' in params ? params.RecordAudioOnly : null;

    }
}

/**
 * Event information, including event timestamp and event ID.
 * @class
 */
class EventMessage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video stream type:
0: non-video event;
2: big image;
3: small image;
7: relayed stream image.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Event reporting time in the format of UNIX timestamp, such as 1589891188801ms
         * @type {number || null}
         */
        this.Time = null;

        /**
         * Event ID. Events divide into SDK events and WebRTC events. For more information, please see Appendix - Event ID Mapping Table at https://intl.cloud.tencent.com/document/product/647/44916?from_cn_redirect=1
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * First event parameter, such as video resolution width
         * @type {number || null}
         */
        this.ParamOne = null;

        /**
         * Second event parameter, such as video resolution height
         * @type {number || null}
         */
        this.ParamTwo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.ParamOne = 'ParamOne' in params ? params.ParamOne : null;
        this.ParamTwo = 'ParamTwo' in params ? params.ParamTwo : null;

    }
}

/**
 * CreateTroubleInfo response structure.
 * @class
 */
class CreateTroubleInfoResponse extends  AbstractModel {
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
 * StopMCUMixTranscodeByStrRoomId request structure.
 * @class
 */
class StopMCUMixTranscodeByStrRoomIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `SDKAppId` of TRTC
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Room ID in string type
         * @type {string || null}
         */
        this.StrRoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StrRoomId = 'StrRoomId' in params ? params.StrRoomId : null;

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
 * Types of exception events that can cause an exceptional experience
 * @class
 */
class AbnormalEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Exception event ID. For specific values, please see Appendix. Exceptional Experience ID Mapping Table.
         * @type {number || null}
         */
        this.AbnormalEventId = null;

        /**
         * Remote user ID. If this parameter is left empty, it indicates that the exception event is not caused by the remote user.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PeerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AbnormalEventId = 'AbnormalEventId' in params ? params.AbnormalEventId : null;
        this.PeerId = 'PeerId' in params ? params.PeerId : null;

    }
}

/**
 * StopMCUMixTranscodeByStrRoomId response structure.
 * @class
 */
class StopMCUMixTranscodeByStrRoomIdResponse extends  AbstractModel {
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
         * Number of users in room. If a user enters the room for multiple times, the user will be counted as one user.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UserNumber = null;

        /**
         * Number of room entries. Every time when a user enters the room, it will be counted as one room entry.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UserCount = null;

        /**
         * Number of rooms under `sdkappid` on a day
Note: this field may return null, indicating that no valid values can be obtained.
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
 * CreateTroubleInfo request structure.
 * @class
 */
class CreateTroubleInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * Room ID
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * Teacher user ID
         * @type {string || null}
         */
        this.TeacherUserId = null;

        /**
         * Student user ID
         * @type {string || null}
         */
        this.StudentUserId = null;

        /**
         * ID of the user (teacher or student) with exception.
         * @type {string || null}
         */
        this.TroubleUserId = null;

        /**
         * Exception type.
1: exceptional video
2: exceptional audio
3: exceptional video and audio
5: exceptional room entry
4: course switch
6: help seeking
7: problem feedback
8: complaint
         * @type {number || null}
         */
        this.TroubleType = null;

        /**
         * UNIX timestamp when the exception occurred in seconds.
         * @type {number || null}
         */
        this.TroubleTime = null;

        /**
         * Exception details
         * @type {string || null}
         */
        this.TroubleMsg = null;

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
        this.TeacherUserId = 'TeacherUserId' in params ? params.TeacherUserId : null;
        this.StudentUserId = 'StudentUserId' in params ? params.StudentUserId : null;
        this.TroubleUserId = 'TroubleUserId' in params ? params.TroubleUserId : null;
        this.TroubleType = 'TroubleType' in params ? params.TroubleType : null;
        this.TroubleTime = 'TroubleTime' in params ? params.TroubleTime : null;
        this.TroubleMsg = 'TroubleMsg' in params ? params.TroubleMsg : null;

    }
}

/**
 * List of SDK or WebRTC events.
 * @class
 */
class EventList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data content
         * @type {Array.<EventMessage> || null}
         */
        this.Content = null;

        /**
         * Sender `userId`
         * @type {string || null}
         */
        this.PeerId = null;

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
                let obj = new EventMessage();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.PeerId = 'PeerId' in params ? params.PeerId : null;

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
 * DescribeDetailEvent response structure.
 * @class
 */
class DescribeDetailEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of returned events
         * @type {Array.<EventList> || null}
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
                let obj = new EventList();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartMCUMixTranscode response structure.
 * @class
 */
class StartMCUMixTranscodeResponse extends  AbstractModel {
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
 * Layout parameter of the small image, which takes effect in a picture-in-picture template
 * @class
 */
class SmallVideoLayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the user in the small image.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Stream type of the small image. 0: camera; 1: screen sharing. If a web user's stream is displayed in the small image, enter 0 for this parameter.
         * @type {number || null}
         */
        this.StreamType = null;

        /**
         * Output width of the small image in pixels. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * Output height of the small image in pixels. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * Output X-axis offset of the small image in pixels. The sum of `LocationX` and `ImageWidth` cannot exceed the total width of the output mixed stream. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * Output Y-axis offset of the small image in pixels. The sum of `LocationY` and `ImageHeight` cannot exceed the total height of the output mixed stream. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.LocationY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.StreamType = 'StreamType' in params ? params.StreamType : null;
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;

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
 * Valid in custom template, used to specify the video image position of a user in mixed streams.
 * @class
 */
class PresetLayoutConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Used to assign users to preset positions; if not assigned, users will occupy the positions set in `PresetLayoutConfig` in room entry sequence.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Stream type of the user when a specified user is assigned to the image. 0: camera; 1: screen sharing. Set this parameter to 0 when the small image is occupied by a web user.
         * @type {number || null}
         */
        this.StreamType = null;

        /**
         * Width of the output image in pixels. If this parameter is not set, 0 is used by default.
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * Height of the output image in pixels. If this parameter is not set, 0 is used by default.
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * X offset of the output image in pixels. The sum of `LocationX` and `ImageWidth` cannot exceed the total width of the mixed stream. If this parameter is not set, 0 is used by default.
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * Y offset of the output image in pixels. The sum of `LocationY` and `ImageHeight` cannot exceed the total height of the mixed stream. If this parameter is not set, 0 is used by default.
         * @type {number || null}
         */
        this.LocationY = null;

        /**
         * Z-order of the image in pixels. If this parameter is not set, 0 is used by default.
         * @type {number || null}
         */
        this.ZOrder = null;

        /**
         * Render mode of the output image. 0: cropping; 1: scaling; 2: scaling on a black background. If this parameter is not set, 0 is used by default.
         * @type {number || null}
         */
        this.RenderMode = null;

        /**
         * Media type of the mixed stream of the user occupying the current position. 0 (default): audio and video; 1: audio; 2: video. You are advised to specify a user ID when using this parameter.
         * @type {number || null}
         */
        this.MixInputType = null;

        /**
         * ID of the placeholder image. If the placeholding feature is enabled, and a user for whom an image position is reserved is not sending video data, the position will show the placeholder image. The ID is generated after the placeholder image is uploaded in the TRTC console. https://intl.cloud.tencent.com/document/product/647/50769?from_cn_redirect=1
         * @type {number || null}
         */
        this.PlaceImageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.StreamType = 'StreamType' in params ? params.StreamType : null;
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;
        this.ZOrder = 'ZOrder' in params ? params.ZOrder : null;
        this.RenderMode = 'RenderMode' in params ? params.RenderMode : null;
        this.MixInputType = 'MixInputType' in params ? params.MixInputType : null;
        this.PlaceImageId = 'PlaceImageId' in params ? params.PlaceImageId : null;

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
 * Relayed push parameters of a non-Tencent Cloud CDN
 * @class
 */
class PublishCdnParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tencent Cloud LVB BizId
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Destination of non-Tencent Cloud CDN relayed push. It is possible to push to only one non-Tencent Cloud CDN address at a time.
         * @type {Array.<string> || null}
         */
        this.PublishCdnUrls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.PublishCdnUrls = 'PublishCdnUrls' in params ? params.PublishCdnUrls : null;

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
         * Query start time in the format of UNIX timestamp, such as 1588031999s, which is a point in time in the last 14 days.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of local UNIX timestamp, such as 1588031999s.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Room ID in string type
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * Page index starting from 0 (if either `PageNumber` or `PageSize` is left empty, 10 data entries will be returned by default)
         * @type {string || null}
         */
        this.PageNumber = null;

        /**
         * Number of entries per page (if either `PageNumber` or `PageSize` is left empty, 10 data entries will be returned by default. Maximum value: 100)
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
 * DescribeDetailEvent request structure.
 * @class
 */
class DescribeDetailEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a call: sdkappid_roomgString_createTime. The `roomgString` refers to the room ID, and `createTime` refers to the creation time of a room in the format of UNIX timestamp in seconds. Its value can be obtained from the `DescribeRoomInformation` API (related document: https://intl.cloud.tencent.com/document/product/647/44050?from_cn_redirect=1).
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * Query start time in the format of UNIX timestamp, such as 1588031999s, which is a point in time in the last 14 days.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of local UNIX timestamp, such as 1588031999s.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Room ID
         * @type {string || null}
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
        this.CommId = 'CommId' in params ? params.CommId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * Exceptional user experience and possible causes
 * @class
 */
class AbnormalExperience extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Exceptional experience ID
         * @type {number || null}
         */
        this.ExperienceId = null;

        /**
         * Room ID in string type
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * Exception event array
         * @type {Array.<AbnormalEvent> || null}
         */
        this.AbnormalEventList = null;

        /**
         * Report time of the exception event
         * @type {number || null}
         */
        this.EventTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.ExperienceId = 'ExperienceId' in params ? params.ExperienceId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

        if (params.AbnormalEventList) {
            this.AbnormalEventList = new Array();
            for (let z in params.AbnormalEventList) {
                let obj = new AbnormalEvent();
                obj.deserialize(params.AbnormalEventList[z]);
                this.AbnormalEventList.push(obj);
            }
        }
        this.EventTime = 'EventTime' in params ? params.EventTime : null;

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
 * DismissRoomByStrRoomId response structure.
 * @class
 */
class DismissRoomByStrRoomIdResponse extends  AbstractModel {
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

/**
 * StartMCUMixTranscodeByStrRoomId response structure.
 * @class
 */
class StartMCUMixTranscodeByStrRoomIdResponse extends  AbstractModel {
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

module.exports = {
    DescribeAbnormalEventResponse: DescribeAbnormalEventResponse,
    RealtimeData: RealtimeData,
    DescribeAbnormalEventRequest: DescribeAbnormalEventRequest,
    StartMCUMixTranscodeByStrRoomIdRequest: StartMCUMixTranscodeByStrRoomIdRequest,
    LayoutParams: LayoutParams,
    TimeValue: TimeValue,
    DismissRoomByStrRoomIdRequest: DismissRoomByStrRoomIdRequest,
    StopMCUMixTranscodeResponse: StopMCUMixTranscodeResponse,
    RemoveUserByStrRoomIdRequest: RemoveUserByStrRoomIdRequest,
    DescribeRealtimeScaleResponse: DescribeRealtimeScaleResponse,
    DismissRoomResponse: DismissRoomResponse,
    DescribeRealtimeNetworkResponse: DescribeRealtimeNetworkResponse,
    DescribeUserInformationRequest: DescribeUserInformationRequest,
    DescribeCallDetailRequest: DescribeCallDetailRequest,
    DescribeRealtimeNetworkRequest: DescribeRealtimeNetworkRequest,
    DescribeUserInformationResponse: DescribeUserInformationResponse,
    EncodeParams: EncodeParams,
    RemoveUserByStrRoomIdResponse: RemoveUserByStrRoomIdResponse,
    StartMCUMixTranscodeRequest: StartMCUMixTranscodeRequest,
    DescribeRealtimeQualityResponse: DescribeRealtimeQualityResponse,
    StopMCUMixTranscodeRequest: StopMCUMixTranscodeRequest,
    UserInformation: UserInformation,
    DescribeHistoryScaleRequest: DescribeHistoryScaleRequest,
    DescribeRoomInformationResponse: DescribeRoomInformationResponse,
    RemoveUserRequest: RemoveUserRequest,
    OutputParams: OutputParams,
    EventMessage: EventMessage,
    CreateTroubleInfoResponse: CreateTroubleInfoResponse,
    StopMCUMixTranscodeByStrRoomIdRequest: StopMCUMixTranscodeByStrRoomIdRequest,
    QualityData: QualityData,
    AbnormalEvent: AbnormalEvent,
    StopMCUMixTranscodeByStrRoomIdResponse: StopMCUMixTranscodeByStrRoomIdResponse,
    DescribeRealtimeQualityRequest: DescribeRealtimeQualityRequest,
    ScaleInfomation: ScaleInfomation,
    CreateTroubleInfoRequest: CreateTroubleInfoRequest,
    EventList: EventList,
    DismissRoomRequest: DismissRoomRequest,
    DescribeDetailEventResponse: DescribeDetailEventResponse,
    StartMCUMixTranscodeResponse: StartMCUMixTranscodeResponse,
    SmallVideoLayoutParams: SmallVideoLayoutParams,
    RemoveUserResponse: RemoveUserResponse,
    PresetLayoutConfig: PresetLayoutConfig,
    DescribeRealtimeScaleRequest: DescribeRealtimeScaleRequest,
    DescribeCallDetailResponse: DescribeCallDetailResponse,
    PublishCdnParams: PublishCdnParams,
    DescribeRoomInformationRequest: DescribeRoomInformationRequest,
    DescribeDetailEventRequest: DescribeDetailEventRequest,
    AbnormalExperience: AbnormalExperience,
    RoomState: RoomState,
    DismissRoomByStrRoomIdResponse: DismissRoomByStrRoomIdResponse,
    DescribeHistoryScaleResponse: DescribeHistoryScaleResponse,
    StartMCUMixTranscodeByStrRoomIdResponse: StartMCUMixTranscodeByStrRoomIdResponse,

}
