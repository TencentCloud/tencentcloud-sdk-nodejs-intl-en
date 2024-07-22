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
 * The layout parameters.
 * @class
 */
class McuLayout extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information of the stream that is displayed. If you do not pass this parameter, TRTC will display the videos of anchors in the room according to their room entry sequence.
         * @type {UserMediaStream || null}
         */
        this.UserMediaStream = null;

        /**
         * The video width (pixels). If you do not pass this parameter, 0 will be used.
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * The video height (pixels). If you do not pass this parameter, 0 will be used.
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * The horizontal offset (pixels) of the video. The sum of `LocationX` and `ImageWidth` cannot exceed the width of the canvas. If you do not pass this parameter, 0 will be used.
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * The vertical offset of the video. The sum of `LocationY` and `ImageHeight` cannot exceed the height of the canvas. If you do not pass this parameter, 0 will be used.
         * @type {number || null}
         */
        this.LocationY = null;

        /**
         * The image layer of the video. If you do not pass this parameter, 0 will be used.
         * @type {number || null}
         */
        this.ZOrder = null;

        /**
         * The rendering mode of the video. 0 (the video is scaled and the excess parts are cropped), 1 (the video is scaled), 2 (the video is scaled and the blank spaces are filled with black bars). If you do not pass this parameter, 0 will be used.
         * @type {number || null}
         */
        this.RenderMode = null;

        /**
         * (Not supported yet) The background color of a video. Below are the values for some commonly used colors:
Red: `0xcc0033`
Yellow: `0xcc9900`
Green: `0xcccc33`
Blue: `0x99CCFF`
Black: `0x000000`
White: `0xFFFFFF`
Grey: `0x999999`
         * @type {string || null}
         */
        this.BackGroundColor = null;

        /**
         * The URL of the background image for the video. This parameter allows you to specify an image to display when the user’s camera is turned off or before the user enters the room. If the dimensions of the image specified are different from those of the video window, the image will be stretched to fit the space. This parameter has a higher priority than `BackGroundColor`.
         * @type {string || null}
         */
        this.BackgroundImageUrl = null;

        /**
         * Custom cropping.
         * @type {McuCustomCrop || null}
         */
        this.CustomCrop = null;

        /**
         * The display mode of the sub-background image during output: 0 for cropping, 1 for scaling and displaying the background, 2 for scaling and displaying the black background, 3 for proportional scaling. If not filled in, the default is 3.
         * @type {number || null}
         */
        this.BackgroundRenderMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UserMediaStream) {
            let obj = new UserMediaStream();
            obj.deserialize(params.UserMediaStream)
            this.UserMediaStream = obj;
        }
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;
        this.ZOrder = 'ZOrder' in params ? params.ZOrder : null;
        this.RenderMode = 'RenderMode' in params ? params.RenderMode : null;
        this.BackGroundColor = 'BackGroundColor' in params ? params.BackGroundColor : null;
        this.BackgroundImageUrl = 'BackgroundImageUrl' in params ? params.BackgroundImageUrl : null;

        if (params.CustomCrop) {
            let obj = new McuCustomCrop();
            obj.deserialize(params.CustomCrop)
            this.CustomCrop = obj;
        }
        this.BackgroundRenderMode = 'BackgroundRenderMode' in params ? params.BackgroundRenderMode : null;

    }
}

/**
 * DescribeRelayUsage request structure.
 * @class
 */
class DescribeRelayUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start date in the format of YYYY-MM-DD.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end date in the format of YYYY-MM-DD.
The period queried per request cannot be longer than 31 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The `SDKAppID` of the TRTC application to which the target room belongs. If you do not specify this parameter, the usage statistics of all TRTC applications under the current account will be returned.
         * @type {number || null}
         */
        this.SdkAppId = null;

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

    }
}

/**
 * The custom layout parameters.
 * @class
 */
class MixLayout extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Y axis of the window’s top-left corner. Value range: [0, 1920]. The value cannot be larger than the canvas height.
         * @type {number || null}
         */
        this.Top = null;

        /**
         * The X axis of the window’s top-left corner. Value range: [0, 1920]. The value cannot be larger than the canvas width.
         * @type {number || null}
         */
        this.Left = null;

        /**
         * The relative width of the window. Value range: [0, 1920]. The sum of the values of this parameter and `Left` cannot exceed the canvas width.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * The relative height of the window. Value range: [0, 1920]. The sum of the values of this parameter and `Top` cannot exceed the canvas height.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * The user ID (string) of the anchor whose video is shown in the window. If you do not set this parameter, anchors’ videos will be shown in their room entry sequence.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The degree of transparency of the canvas. Value range: [0, 255]. 0 means fully opaque, and 255 means fully transparent.
         * @type {number || null}
         */
        this.Alpha = null;

        /**
         * 0: Stretch. In this mode, the image is stretched to fill the space available. The whole image is visible after scaling. However, if the original aspect ratio is different from the target, the image may be distorted.

1: Crop (default). In this mode, if the original aspect ratio is different from the target, the image will be cropped according to the target before being stretched to fill the space available. The image will not be distorted.

2: Blank. This mode stretches the image while keeping its original aspect ratio. If the original aspect ratio is different from the target, there may be blank spaces to the top and bottom or to the left and right of the window.

3: Smart stretch. This mode is similar to the crop mode, except that it restricts cropping to 20% of the image’s width or height at most.
         * @type {number || null}
         */
        this.RenderMode = null;

        /**
         * The type of the stream subscribed to.
0: Primary stream (default)
1: Substream
         * @type {number || null}
         */
        this.MediaId = null;

        /**
         * The image layer. 0 is the default value and means the bottommost layer.
         * @type {number || null}
         */
        this.ImageLayer = null;

        /**
         * The URL of the background image for a window. The image must be in JPG or PNG format and cannot be larger than 5 MB. If the image’s aspect ratio is different from that of the window, the image will be rendered according to the value of `RenderMode`.
         * @type {string || null}
         */
        this.SubBackgroundImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Top = 'Top' in params ? params.Top : null;
        this.Left = 'Left' in params ? params.Left : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Alpha = 'Alpha' in params ? params.Alpha : null;
        this.RenderMode = 'RenderMode' in params ? params.RenderMode : null;
        this.MediaId = 'MediaId' in params ? params.MediaId : null;
        this.ImageLayer = 'ImageLayer' in params ? params.ImageLayer : null;
        this.SubBackgroundImage = 'SubBackgroundImage' in params ? params.SubBackgroundImage : null;

    }
}

/**
 * The video parameters for relaying.
 * @class
 */
class McuVideoParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The video encoding parameters.
         * @type {VideoEncode || null}
         */
        this.VideoEncode = null;

        /**
         * The layout parameters.
         * @type {McuLayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * The canvas color. Below are the values for some common colors:
Red: 0xcc0033
Yellow: 0xcc9900
Green: 0xcccc33
Blue: 0x99CCFF
Black: 0x000000
White: 0xFFFFFF
Grey: 0x999999
         * @type {string || null}
         */
        this.BackGroundColor = null;

        /**
         * The URL of the background image for the canvas. This parameter has a higher priority than `BackGroundColor`.
         * @type {string || null}
         */
        this.BackgroundImageUrl = null;

        /**
         * The watermark information for the mixed stream.
         * @type {Array.<McuWaterMarkParams> || null}
         */
        this.WaterMarkList = null;

        /**
         * Background image display mode during output: 0 for crop, 1 for scale and display with black background, 2 for proportional scaling. The backend default is proportional scaling.
         * @type {number || null}
         */
        this.BackgroundRenderMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VideoEncode) {
            let obj = new VideoEncode();
            obj.deserialize(params.VideoEncode)
            this.VideoEncode = obj;
        }

        if (params.LayoutParams) {
            let obj = new McuLayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }
        this.BackGroundColor = 'BackGroundColor' in params ? params.BackGroundColor : null;
        this.BackgroundImageUrl = 'BackgroundImageUrl' in params ? params.BackgroundImageUrl : null;

        if (params.WaterMarkList) {
            this.WaterMarkList = new Array();
            for (let z in params.WaterMarkList) {
                let obj = new McuWaterMarkParams();
                obj.deserialize(params.WaterMarkList[z]);
                this.WaterMarkList.push(obj);
            }
        }
        this.BackgroundRenderMode = 'BackgroundRenderMode' in params ? params.BackgroundRenderMode : null;

    }
}

/**
 * DescribeTRTCRealTimeScaleData request structure.
 * @class
 */
class DescribeTRTCRealTimeScaleDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User SDKAppId (e.g., 1400xxxxxx)
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * Start time, unix timestamp, Unit: seconds (Query time range depends on the function version of the monitoring dashboard, premium edition can query up to 1 hours)
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time, unix timestamp, Unit: seconds
         * @type {number || null}
         */
        this.EndTime = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * DescribeTRTCMarketScaleData request structure.
 * @class
 */
class DescribeTRTCMarketScaleDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User SDKAppId
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * Query start time, format is YYYY-MM-DD. (The query time range depends on the monitoring dashboard function version, the premium edition can query up to 60 days)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time, format is YYYY-MM-DD.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The granularity of the returned data, which can be set to the following values:
 d: by day. This returns data for the entire UTC day of the query time range.
 h: by hour. This returns data for the entire UTC hour of the query time range.
         * @type {string || null}
         */
        this.Period = null;

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
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * The SEI parameters for audio volume layout. You can specify the `AppData` and `PayloadType`.
This parameter may be empty, in which case the default SEI parameters for audio volume layout will be used.
 * @class
 */
class McuLayoutVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * The application data, which will be embedded in the `app_data` field of the custom SEI. It must be shorter than 4,096 characters.
         * @type {string || null}
         */
        this.AppData = null;

        /**
         * The payload type of the SEI message. The default is 100. Value range: 100-254 (244 is used internally by Tencent Cloud for timestamps).
         * @type {number || null}
         */
        this.PayloadType = null;

        /**
         * The SEI sending interval (milliseconds). The default value is 1000.
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Valid values: `1`: SEI is guaranteed when keyframes are sent; `0` (default): SEI is not guaranteed when keyframes are sent.
         * @type {number || null}
         */
        this.FollowIdr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppData = 'AppData' in params ? params.AppData : null;
        this.PayloadType = 'PayloadType' in params ? params.PayloadType : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.FollowIdr = 'FollowIdr' in params ? params.FollowIdr : null;

    }
}

/**
 * SetUserBlocked request structure.
 * @class
 */
class SetUserBlockedRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The room ID (number).
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * The user ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Whether to disable the user’s audio and video. 0: Enable; 1: Disable.
         * @type {number || null}
         */
        this.IsMute = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.IsMute = 'IsMute' in params ? params.IsMute : null;

    }
}

/**
 * DescribeUserEvent request structure.
 * @class
 */
class DescribeUserEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of a call, whose format is `SdkAppId_CreateTime`, such as `1400xxxxxx_218695_1590065777`. `createTime` is the UNIX timestamp (seconds) when the room was created. Its value can be obtained using the [DescribeRoomInfo](https://intl.cloud.tencent.com/document/product/647/44050?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * The start time, which is a Unix timestamp (seconds) in local time, such as `1590065777`.
Note: Only data in the last 14 days can be queried.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The end time, which is a Unix timestamp (seconds) in local time, such as `1590065877`.
Note: If you pass in an end time later than the room end time, the room end time will be used.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * The user ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The room ID, such as `223`.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * The application ID, such as `1400xxxxxx`.
         * @type {number || null}
         */
        this.SdkAppId = null;

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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * SetUserBlocked response structure.
 * @class
 */
class SetUserBlockedResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * 
 * @class
 */
class WaterMarkChar extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Y coordinate of the text watermark from the top left.
         * @type {number || null}
         */
        this.Top = null;

        /**
         * The X coordinate of the text watermark from the top left.
         * @type {number || null}
         */
        this.Left = null;

        /**
         * The watermark width (pixels).
         * @type {number || null}
         */
        this.Width = null;

        /**
         * The watermark height (pixels).
         * @type {number || null}
         */
        this.Height = null;

        /**
         * The text.
         * @type {string || null}
         */
        this.Chars = null;

        /**
         * The font size (pixels). The default value is `14`.
         * @type {number || null}
         */
        this.FontSize = null;

        /**
         * The text color. The default color is white.
         * @type {string || null}
         */
        this.FontColor = null;

        /**
         * The background color. If this parameter is empty, the background will be transparent (default).
         * @type {string || null}
         */
        this.BackGroundColor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Top = 'Top' in params ? params.Top : null;
        this.Left = 'Left' in params ? params.Left : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Chars = 'Chars' in params ? params.Chars : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;
        this.BackGroundColor = 'BackGroundColor' in params ? params.BackGroundColor : null;

    }
}

/**
 * DescribeTrtcRoomUsage response structure.
 * @class
 */
class DescribeTrtcRoomUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The usage data grouped by room, in CSV format.
         * @type {string || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopPublishCdnStream response structure.
 * @class
 */
class StopPublishCdnStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The information of an error event (the possible cause of an abnormal user experience).
 * @class
 */
class AbnormalEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * The error event ID. For details, see https://www.tencentcloud.com/document/product/647/37906?has_map=1
         * @type {number || null}
         */
        this.AbnormalEventId = null;

        /**
         * The remote user ID. If this parameter is empty, it indicates that the error event is not associated with a remote user.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * The room and user number.
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
         * The number of users. If a user enters a room multiple times, it will be counted as one user.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UserNumber = null;

        /**
         * The number of room entries. Every time a user enters a room, it will be counted as one room entry.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UserCount = null;

        /**
         * The total number of rooms of the application on a day.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * The information of the relaying robot in the room.
 * @class
 */
class AgentParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The [user ID](https://intl.cloud.tencent.com/document/product/647/37714) of the relaying robot in the TRTC room, which cannot be the same as a user ID already in use. We recommend you include the room ID in this user ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The signature (similar to a login password) required for the relaying robot to enter the room. For information on how to calculate the signature, see [What is UserSig?](https://intl.cloud.tencent.com/document/product/647/38104). |
         * @type {string || null}
         */
        this.UserSig = null;

        /**
         * The timeout period (seconds) for relaying to stop automatically after all the users whose streams are mixed leave the room. The value cannot be smaller than 5 or larger than 86400 (24 hours). Default value: 30.
         * @type {number || null}
         */
        this.MaxIdleTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserSig = 'UserSig' in params ? params.UserSig : null;
        this.MaxIdleTime = 'MaxIdleTime' in params ? params.MaxIdleTime : null;

    }
}

/**
 * Video transcoding parameters
 * @class
 */
class VideoEncodeParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Width. Value range [0,1920], unit is pixel value.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Height. Value range [0,1080], unit is pixel value.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Frame Rate. Value range [1,60], indicating that the frame rate can be selected from 1 to 60fps.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Bitrate. Value range [1,10000], unit is kbps.
         * @type {number || null}
         */
        this.BitRate = null;

        /**
         * Gop. Value range [1,2], unit is second.
         * @type {number || null}
         */
        this.Gop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.BitRate = 'BitRate' in params ? params.BitRate : null;
        this.Gop = 'Gop' in params ? params.Gop : null;

    }
}

/**
 * DescribeUserEvent response structure.
 * @class
 */
class DescribeUserEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The event list. An empty array will be returned if no data is obtained.
         * @type {Array.<EventList> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * The video encoding parameters.
 * @class
 */
class VideoEncode extends  AbstractModel {
    constructor(){
        super();

        /**
         * The width of the output stream (pixels). This parameter is required if audio and video are relayed. Value range: [0, 1920].
         * @type {number || null}
         */
        this.Width = null;

        /**
         * The height of the output stream (pixels). This parameter is required if audio and video are relayed. Value range: [0, 1080].
         * @type {number || null}
         */
        this.Height = null;

        /**
         * The frame rate (fps) of the output stream. This parameter is required if audio and video are relayed. Value range: [0, 60].
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * The bitrate (Kbps) of the output stream. This parameter is required if audio and video are relayed. Value range: [0, 10000].
         * @type {number || null}
         */
        this.BitRate = null;

        /**
         * The GOP (seconds) of the output stream. This parameter is required if audio and video are relayed. Value range: [1, 5].
         * @type {number || null}
         */
        this.Gop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.BitRate = 'BitRate' in params ? params.BitRate : null;
        this.Gop = 'Gop' in params ? params.Gop : null;

    }
}

/**
 * DescribeCallDetailInfo request structure.
 * @class
 */
class DescribeCallDetailInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of a call, whose format is `SdkAppId_CreateTime`, such as `1400xxxxxx_218695_1590065777`. `createTime` is the UNIX timestamp (seconds) when the room was created. Its value can be obtained using the [DescribeRoomInfo](https://intl.cloud.tencent.com/document/product/647/44050?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * The start time, which is a Unix timestamp (seconds) in local time, such as `1590065777`.
Note: Only data in the last 14 days can be queried.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The end time, which is a Unix timestamp (seconds) in local time, such as `1590065877`.
Note: If `DataType` is not null, the end time and start time cannot be more than one hour apart; if `DataType` is null, the end time and start time cannot be more than four hours apart.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * The application ID, such as `1400xxxxxx`.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The users to query. If you do not specify this, the data of six users will be returned.
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * The metrics to query. If you do not specify this, only the user list will be returned. If you pass in `all`, all metrics will be returned.
`appCpu`: The CPU utilization of the application.
`sysCpu`: The CPU utilization of the system.
`aBit`: The upstream/downstream audio bitrate (bps).
`aBlock`: The audio stutter duration (ms).
`bigvBit`: The upstream/downstream video bitrate (bps).
`bigvCapFps`: The frame rate for capturing videos.
`bigvEncFps`: The frame rate for sending videos.
`bigvDecFps`: The rendering frame rate.
`bigvBlock`: The video stutter duration (ms).
`aLoss`: The upstream/downstream audio packet loss.
`bigvLoss`: The upstream/downstream video packet loss.
`bigvWidth`: The upstream/downstream resolution (width).
`bigvHeight`: The upstream/downstream resolution (height).
         * @type {Array.<string> || null}
         */
        this.DataType = null;

        /**
         * The page number. The default is 0.
Note: If `PageNumber` or `PageSize` is not specified, six records will be returned.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * The number of records per page. The default is `6`.
Value range: 1-100.
Note: If `DataType` is not null, the length of the array `UserIds` and the value of `PageSize` cannot exceed `6`.
If `DataType` is null, the length of the array `UserIds` and the value of `PageSize` cannot exceed `100`.
         * @type {number || null}
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
 * DescribeTRTCMarketScaleData response structure.
 * @class
 */
class DescribeTRTCMarketScaleDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC Data Dashboard output parameters
         * @type {TRTCDataResult || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
            let obj = new TRTCDataResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserInfo request structure.
 * @class
 */
class DescribeUserInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of a call, whose format is `SdkAppId_CreateTime`, such as `1400xxxxxx_218695_1590065777`. `createTime` is the UNIX timestamp (seconds) when the room was created. Its value can be obtained using the [DescribeRoomInfo](https://intl.cloud.tencent.com/document/product/647/44050?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * The start time, which is a Unix timestamp (seconds) in local time, such as `1590065777`.
Note: Only data in the last 14 days can be queried.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The end time, which is a Unix timestamp (seconds) in local time, such as `1590065877`.
Note: The end and start time cannot be more than four hours apart.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * The application ID, such as `1400xxxxxx`.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The users to query. If you do not specify this, the information of six users will be returned.
Array length: 1-100.
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * The page number. The default is 0.
Note: If `PageNumber` or `PageSize` is not specified, six records will be returned.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * The number of records per page. The default is `6`.
Array length: 1-100.
         * @type {number || null}
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
 * Audio transcoding parameters
 * @class
 */
class AudioEncodeParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audio Sample rate, Value range [48000, 44100], unit is Hz.
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * Audio Channel number, Value range [1,2], 1 means Audio is Mono-channel, 2 means Audio is Dual-channel.
         * @type {number || null}
         */
        this.Channel = null;

        /**
         * Audio Bitrate, Value range [8,500], unit is kbps.
         * @type {number || null}
         */
        this.BitRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.BitRate = 'BitRate' in params ? params.BitRate : null;

    }
}

/**
 * The cloud storage information.
 * @class
 */
class CloudStorage extends  AbstractModel {
    constructor(){
        super();

        /**
         * The cloud storage provider.
`0`: Tencent Cloud COS; `1`: AWS storage. Other vendors are not supported currently.
         * @type {number || null}
         */
        this.Vendor = null;

        /**
         * The region of cloud storage.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The storage bucket.
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * The access_key of the cloud storage account.
         * @type {string || null}
         */
        this.AccessKey = null;

        /**
         * The secret_key of the cloud storage account.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * The bucket to save data, which is an array of strings that can contain letters (a-z and A-Z), numbers (0-9), underscores (_), and hyphens (-). For example, if the value of this parameter is `["prefix1", "prefix2"]`, the recording file `xxx.m3u8` will be saved as `prefix1/prefix2/TaskId/xxx.m3u8`.
         * @type {Array.<string> || null}
         */
        this.FileNamePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vendor = 'Vendor' in params ? params.Vendor : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.AccessKey = 'AccessKey' in params ? params.AccessKey : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.FileNamePrefix = 'FileNamePrefix' in params ? params.FileNamePrefix : null;

    }
}

/**
 * DescribeTrtcUsage response structure.
 * @class
 */
class DescribeTrtcUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The usage type. Each element of this parameter corresponds to an element of `UsageValue` in the order they are listed.
         * @type {Array.<string> || null}
         */
        this.UsageKey = null;

        /**
         * The usage data in each time unit.
         * @type {Array.<TrtcUsage> || null}
         */
        this.UsageList = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.UsageKey = 'UsageKey' in params ? params.UsageKey : null;

        if (params.UsageList) {
            this.UsageList = new Array();
            for (let z in params.UsageList) {
                let obj = new TrtcUsage();
                obj.deserialize(params.UsageList[z]);
                this.UsageList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The quality data, which consists of the `time` and `value` parameters.
 * @class
 */
class TimeValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * The UNIX timestamp (seconds), such as `1590065877`.
         * @type {number || null}
         */
        this.Time = null;

        /**
         * The metric value. For example, if the video capturing frame rate (`bigvCapFps`) at the time `1590065877` is `0`, the value of this parameter will be `0`.
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
 * CreateCloudRecording response structure.
 * @class
 */
class CreateCloudRecordingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID assigned by the recording service, which uniquely identifies a recording process and becomes invalid after a recording task ends. After a recording task starts, if you want to perform other actions on the task, you need to specify the task ID when making API requests.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTRTCRealTimeScaleData response structure.
 * @class
 */
class DescribeTRTCRealTimeScaleDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC Real- Time Monitoring
 output parameter
         * @type {TRTCDataResult || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
            let obj = new TRTCDataResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoomInfo request structure.
 * @class
 */
class DescribeRoomInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The application ID, such as `1400xxxxxx`.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The start time, which is a Unix timestamp (seconds) in local time, such as `1590065777`.
Note: Only data in the last 14 days can be queried.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The end time, which is a Unix timestamp (seconds) in local time, such as `1590065877`.
Note: The end and start time cannot be more than 24 hours apart.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * The room ID, such as `223`.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * The page number. The default is 0.
Note: If `PageNumber` or `PageSize` is not specified, 10 records will be returned.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * The number of records per page. The default is `10`.
Value range: 1-100.
         * @type {number || null}
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
 * The storage parameters.
 * @class
 */
class StorageParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The account information for third-party storage. Please note that if you save files to COS, a recording-to-COS fee will be incurred. For details, see the document "Billing of On-Cloud Recording". If you save files to VOD, there won't be such a fee.
         * @type {CloudStorage || null}
         */
        this.CloudStorage = null;

        /**
         * The account information for VOD storage.
         * @type {CloudVod || null}
         */
        this.CloudVod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CloudStorage) {
            let obj = new CloudStorage();
            obj.deserialize(params.CloudStorage)
            this.CloudStorage = obj;
        }

        if (params.CloudVod) {
            let obj = new CloudVod();
            obj.deserialize(params.CloudVod)
            this.CloudVod = obj;
        }

    }
}

/**
 * The VOD parameters.
 * @class
 */
class CloudVod extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Tencent Cloud VOD parameters.
         * @type {TencentVod || null}
         */
        this.TencentVod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TencentVod) {
            let obj = new TencentVod();
            obj.deserialize(params.TencentVod)
            this.TencentVod = obj;
        }

    }
}

/**
 * DescribeCallDetailInfo response structure.
 * @class
 */
class DescribeCallDetailInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of records returned.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The user information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserInformation> || null}
         */
        this.UserList = null;

        /**
         * The call quality data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<QualityData> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeTRTCRealTimeQualityData response structure.
 * @class
 */
class DescribeTRTCRealTimeQualityDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC Real- Time Monitoring output parameters
         * @type {TRTCDataResult || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
            let obj = new TRTCDataResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The cropping parameters for mixed videos.
 * @class
 */
class McuCustomCrop extends  AbstractModel {
    constructor(){
        super();

        /**
         * The horizontal offset (pixels) of the starting point for cropping. This parameter must be greater than 0.
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * The vertical offset (pixels) of the starting point for cropping. This parameter must be greater than 0.
         * @type {number || null}
         */
        this.LocationY = null;

        /**
         * The video width (pixels) after cropping. The sum of this parameter and `LocationX` cannot be greater than 10000.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * The video height (pixels) after cropping. The sum of this parameter and `LocationY` cannot be greater than 10000.
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * DescribeMixTranscodingUsage request structure.
 * @class
 */
class DescribeMixTranscodingUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start date in the format of YYYY-MM-DD.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end date in the format of YYYY-MM-DD.
The period queried per request cannot be longer than 31 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The `SDKAppID` of the TRTC application to which the target room belongs. If you do not specify this parameter, the usage statistics of all TRTC applications under the current account will be returned.
         * @type {number || null}
         */
        this.SdkAppId = null;

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

    }
}

/**
 * DescribeStreamIngest response structure.
 * @class
 */
class DescribeStreamIngestResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status information. InProgress: Indicates that the current task is in progress. NotExist: Indicates that the current task does not exist. Example value: InProgress
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The audio and video parameters for recording.
 * @class
 */
class MixTranscodeParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The video transcoding parameters for recording. If you set this parameter, you must specify all its fields. If you do not set it, the default will be used.
         * @type {VideoParams || null}
         */
        this.VideoParams = null;

        /**
         * The audio transcoding parameters for recording. If you set this parameter, you must specify all its fields. If you do not set it, the default will be used.
         * @type {AudioParams || null}
         */
        this.AudioParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VideoParams) {
            let obj = new VideoParams();
            obj.deserialize(params.VideoParams)
            this.VideoParams = obj;
        }

        if (params.AudioParams) {
            let obj = new AudioParams();
            obj.deserialize(params.AudioParams)
            this.AudioParams = obj;
        }

    }
}

/**
 * StopStreamIngest request structure.
 * @class
 */
class StopStreamIngestRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppId of TRTC, which is the same as the SDKAppId corresponding to the task's room.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The unique Task ID, which will be returned after the task is successfully started.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeTRTCMarketQualityData response structure.
 * @class
 */
class DescribeTRTCMarketQualityDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC Data Dashboard output parameters
         * @type {TRTCDataResult || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
            let obj = new TRTCDataResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The subscription allowlist/blocklist. You cannot specify an allowlist and a blocklist for audio/video subscription at the same time. The maximum number of streams one can receive at the same time is 25. When streams are mixed, up to 24 videos are supported. You can use `.*$` to specify user IDs with the same prefix, but make sure there aren’t users whose IDs contain ".*$" and are exactly the same as the prefix you pass in. If there are, TRTC will only allow or block those users.
 * @class
 */
class SubscribeStreamUserIds extends  AbstractModel {
    constructor(){
        super();

        /**
         * The allowlist for audio subscription. For example, `["1", "2", "3"]` means to only subscribe to the audios of users 1, 2, and 3, and ["1.*$"] means to only subscribe to the audios of users whose ID prefix is `1`. If this parameter is left empty, the audios of all anchors in the room will be received. The array can contain at most 32 elements.
         * @type {Array.<string> || null}
         */
        this.SubscribeAudioUserIds = null;

        /**
         * The blocklist for audio subscription. For example, `["1", "2", "3"]` means to not subscribe to the audios of users 1, 2, and 3, and `["1.*$"]` means to not subscribe to users whose ID prefix is `1`. If this parameter is left empty, the audios of all anchors in the room will be received. The array can contain at most 32 elements.
         * @type {Array.<string> || null}
         */
        this.UnSubscribeAudioUserIds = null;

        /**
         * The allowlist for video subscription. For example, `["1", "2", "3"]` means to only subscribe to the videos of users 1, 2, and 3, and `["1.*$"]` means to only subscribe to the videos of users whose ID prefix is `1`. If this parameter is left empty, the videos of all anchors in the room will be received. The array can contain at most 32 elements.
         * @type {Array.<string> || null}
         */
        this.SubscribeVideoUserIds = null;

        /**
         * The blocklist for video subscription. For example, `["1", "2", "3"]` means to not subscribe to the videos of users 1, 2, and 3, and `["1.*$"]` means to not subscribe to the videos of users whose ID prefix is `1`. If this parameter is left empty, the videos of all anchors in the room will be received. The array can contain at most 32 elements.
         * @type {Array.<string> || null}
         */
        this.UnSubscribeVideoUserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeAudioUserIds = 'SubscribeAudioUserIds' in params ? params.SubscribeAudioUserIds : null;
        this.UnSubscribeAudioUserIds = 'UnSubscribeAudioUserIds' in params ? params.UnSubscribeAudioUserIds : null;
        this.SubscribeVideoUserIds = 'SubscribeVideoUserIds' in params ? params.SubscribeVideoUserIds : null;
        this.UnSubscribeVideoUserIds = 'UnSubscribeVideoUserIds' in params ? params.UnSubscribeVideoUserIds : null;

    }
}

/**
 * The information of watermark images.
 * @class
 */
class WaterMarkImage extends  AbstractModel {
    constructor(){
        super();

        /**
         * The download URLs of the watermark images, which must be in JPG or PNG format and cannot be larger than 5 MB.
         * @type {string || null}
         */
        this.WaterMarkUrl = null;

        /**
         * The Y axis of the image's top-left corner. Value range: [0, 2560]. The value cannot be larger than the canvas height.
         * @type {number || null}
         */
        this.Top = null;

        /**
         * The X axis of the image’s top-left corner. Value range: [0, 2560]. The value cannot be larger than the canvas width.
         * @type {number || null}
         */
        this.Left = null;

        /**
         * The relative width of the image. Value range: [0, 2560]. The sum of the values of this parameter and `Left` cannot exceed the canvas width.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * The relative height of the image. Value range: [0, 2560]. The sum of the values of this parameter and `Top` cannot exceed the canvas height.
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WaterMarkUrl = 'WaterMarkUrl' in params ? params.WaterMarkUrl : null;
        this.Top = 'Top' in params ? params.Top : null;
        this.Left = 'Left' in params ? params.Left : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * The users whose streams are mixed.
 * @class
 */
class McuUserInfoParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The user information.
         * @type {MixUserInfo || null}
         */
        this.UserInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UserInfo) {
            let obj = new MixUserInfo();
            obj.deserialize(params.UserInfo)
            this.UserInfo = obj;
        }

    }
}

/**
 * The stream information.
 * @class
 */
class UserMediaStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * The user information.
         * @type {MixUserInfo || null}
         */
        this.UserInfo = null;

        /**
         * The stream type. 0: Camera; 1: Screen sharing. If you do not pass this parameter, 0 will be used.
         * @type {number || null}
         */
        this.StreamType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UserInfo) {
            let obj = new MixUserInfo();
            obj.deserialize(params.UserInfo)
            this.UserInfo = obj;
        }
        this.StreamType = 'StreamType' in params ? params.StreamType : null;

    }
}

/**
 * A list of SDK or WebRTC events.
 * @class
 */
class EventList extends  AbstractModel {
    constructor(){
        super();

        /**
         * The event information.
         * @type {Array.<EventMessage> || null}
         */
        this.Content = null;

        /**
         * The user ID of the sender.
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
 * DescribeTrtcUsage request structure.
 * @class
 */
class DescribeTrtcUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start date in the format of YYYY-MM-DD.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end date in the format of YYYY-MM-DD.
The period queried per request cannot be longer than 31 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The `SDKAppID` of the TRTC application to which the target room belongs. If you do not specify this parameter, the usage statistics of all TRTC applications under the current account will be returned.
         * @type {number || null}
         */
        this.SdkAppId = null;

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

    }
}

/**
 * DescribeRoomInfo response structure.
 * @class
 */
class DescribeRoomInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of records returned.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The room information.
         * @type {Array.<RoomState> || null}
         */
        this.RoomList = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * The layout parameters.
 * @class
 */
class McuLayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The layout mode. Valid values: 1 (floating), 2 (screen sharing), 3 (grid), 4 (custom). Floating, screen sharing, and grid are dynamic layouts. Custom layouts are static layouts.
         * @type {number || null}
         */
        this.MixLayoutMode = null;

        /**
         * Whether to display users who publish only audio. 0: No; 1: Yes. This parameter is valid only if a dynamic layout is used. If you do not pass this parameter, 0 will be used.
         * @type {number || null}
         */
        this.PureAudioHoldPlaceMode = null;

        /**
         * The details of a custom layout.
         * @type {Array.<McuLayout> || null}
         */
        this.MixLayoutList = null;

        /**
         * The information of the large video in screen sharing or floating layout mode.
         * @type {MaxVideoUser || null}
         */
        this.MaxVideoUser = null;

        /**
         * The image fill mode. This parameter is valid if the layout mode is screen sharing, floating, or grid. `0`: The image will be cropped. `1`: The image will be scaled. `2`: The image will be scaled and there may be black bars.
         * @type {number || null}
         */
        this.RenderMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MixLayoutMode = 'MixLayoutMode' in params ? params.MixLayoutMode : null;
        this.PureAudioHoldPlaceMode = 'PureAudioHoldPlaceMode' in params ? params.PureAudioHoldPlaceMode : null;

        if (params.MixLayoutList) {
            this.MixLayoutList = new Array();
            for (let z in params.MixLayoutList) {
                let obj = new McuLayout();
                obj.deserialize(params.MixLayoutList[z]);
                this.MixLayoutList.push(obj);
            }
        }

        if (params.MaxVideoUser) {
            let obj = new MaxVideoUser();
            obj.deserialize(params.MaxVideoUser)
            this.MaxVideoUser = obj;
        }
        this.RenderMode = 'RenderMode' in params ? params.RenderMode : null;

    }
}

/**
 * StartStreamIngest request structure.
 * @class
 */
class StartStreamIngestRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC's [SdkAppId](https://intl.cloud.tencent.com/document/product/647/46351?from_cn_redirect=1#sdkappid), the same as the SdkAppId corresponding to the Record room.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * TRTC's [RoomId](https://intl.cloud.tencent.com/document/product/647/46351?from_cn_redirect=1#roomid), the RoomId corresponding to the Record TRTC room.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * Type of TRTC RoomId. [*Note] Must be the same as the RoomId type corresponding to the Record room: 0: String type RoomId 1: 32-bit Integer type RoomId (default)
         * @type {number || null}
         */
        this.RoomIdType = null;

        /**
         * UserId of the Pull stream Relay Robot, used to enter the room and initiate the Pull stream Relay Task.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * UserSig corresponding to the Pull stream Relay Robot UserId, i.e., UserId and UserSig are equivalent to the Robot's Login password for entering the room. For the specific Calculation method, please refer to the TRTC [UserSig](https://www.tencentcloud.com/zh/document/product/647/39074) Scheme.
         * @type {string || null}
         */
        this.UserSig = null;

        /**
         * 	
Source URL. Example value: https://a.b/test.mp4
         * @type {Array.<string> || null}
         */
        this.SourceUrl = null;

        /**
         * TRTC room permission Encryption ticket, only needed when advanced permission control is enabled in the Console. After enabling advanced permission control in the TRTC Console, TRTC's backend service system will verify a so-called [PrivateMapKey] 'Permission ticket', which contains an encrypted RoomId and an encrypted 'Permission bit list'. Since PrivateMapKey contains RoomId, providing only UserSig without PrivateMapKey does not allow entry into the specified room.
         * @type {string || null}
         */
        this.PrivateMapKey = null;

        /**
         * Video Codec Parameters. Optional, if not filled, Keep original stream Parameters.
         * @type {VideoEncodeParams || null}
         */
        this.VideoEncodeParams = null;

        /**
         * Audio Codec Parameters. Optional, if not filled, Keep original stream Parameters.
         * @type {AudioEncodeParams || null}
         */
        this.AudioEncodeParams = null;

        /**
         * 
         * @type {string || null}
         */
        this.StreamUrl = null;

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
        this.RoomIdType = 'RoomIdType' in params ? params.RoomIdType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserSig = 'UserSig' in params ? params.UserSig : null;
        this.SourceUrl = 'SourceUrl' in params ? params.SourceUrl : null;
        this.PrivateMapKey = 'PrivateMapKey' in params ? params.PrivateMapKey : null;

        if (params.VideoEncodeParams) {
            let obj = new VideoEncodeParams();
            obj.deserialize(params.VideoEncodeParams)
            this.VideoEncodeParams = obj;
        }

        if (params.AudioEncodeParams) {
            let obj = new AudioEncodeParams();
            obj.deserialize(params.AudioEncodeParams)
            this.AudioEncodeParams = obj;
        }
        this.StreamUrl = 'StreamUrl' in params ? params.StreamUrl : null;

    }
}

/**
 * DescribeUserInfo response structure.
 * @class
 */
class DescribeUserInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of records returned.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The user information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserInformation> || null}
         */
        this.UserList = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * RemoveUserByStrRoomId response structure.
 * @class
 */
class RemoveUserByStrRoomIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * The information of the watermark image.
 * @class
 */
class McuWaterMarkImage extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL of the watermark image, which must be in PNG, JPG, or JPEG format and cannot exceed 5 MB.
         * @type {string || null}
         */
        this.WaterMarkUrl = null;

        /**
         * The watermark width (pixels).
         * @type {number || null}
         */
        this.WaterMarkWidth = null;

        /**
         * The watermark height (pixels).
         * @type {number || null}
         */
        this.WaterMarkHeight = null;

        /**
         * The horizontal offset (pixels) of the watermark.
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * The vertical offset (pixels) of the watermark.
         * @type {number || null}
         */
        this.LocationY = null;

        /**
         * The image layer of the watermark. If you do not pass this parameter, 0 will be used.
         * @type {number || null}
         */
        this.ZOrder = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WaterMarkUrl = 'WaterMarkUrl' in params ? params.WaterMarkUrl : null;
        this.WaterMarkWidth = 'WaterMarkWidth' in params ? params.WaterMarkWidth : null;
        this.WaterMarkHeight = 'WaterMarkHeight' in params ? params.WaterMarkHeight : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;
        this.ZOrder = 'ZOrder' in params ? params.ZOrder : null;

    }
}

/**
 * StartPublishCdnStream response structure.
 * @class
 */
class StartPublishCdnStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID, which is generated by the Tencent Cloud server. You need to pass in the task ID when making a request to update or stop a relaying task.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The TRTC audio/video duration generated in a certain time period.
 * @class
 */
class TrtcUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * The time point in the format of `YYYY-MM-DD HH:mm:ss`. If more than one day is queried, `HH:mm:ss` is `00:00:00`.
         * @type {string || null}
         */
        this.TimeKey = null;

        /**
         * The usage (minutes). Each element of this parameter corresponds to an element of `UsageKey` in the order they are listed.
         * @type {Array.<number> || null}
         */
        this.UsageValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeKey = 'TimeKey' in params ? params.TimeKey : null;
        this.UsageValue = 'UsageValue' in params ? params.UsageValue : null;

    }
}

/**
 * DescribeRelayUsage response structure.
 * @class
 */
class DescribeRelayUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The usage type. Each element of this parameter corresponds to an element of `UsageValue` in the order they are listed.
         * @type {Array.<string> || null}
         */
        this.UsageKey = null;

        /**
         * The usage data in each time unit.
         * @type {Array.<TrtcUsage> || null}
         */
        this.UsageList = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.UsageKey = 'UsageKey' in params ? params.UsageKey : null;

        if (params.UsageList) {
            this.UsageList = new Array();
            for (let z in params.UsageList) {
                let obj = new TrtcUsage();
                obj.deserialize(params.UsageList[z]);
                this.UsageList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordingUsage response structure.
 * @class
 */
class DescribeRecordingUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The usage type. Each element of this parameter corresponds to an element of `UsageValue` in the order they are listed.
         * @type {Array.<string> || null}
         */
        this.UsageKey = null;

        /**
         * The usage data in each time unit.
         * @type {Array.<TrtcUsage> || null}
         */
        this.UsageList = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.UsageKey = 'UsageKey' in params ? params.UsageKey : null;

        if (params.UsageList) {
            this.UsageList = new Array();
            for (let z in params.UsageList) {
                let obj = new TrtcUsage();
                obj.deserialize(params.UsageList[z]);
                this.UsageList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordingUsage request structure.
 * @class
 */
class DescribeRecordingUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start date in the format of YYYY-MM-DD.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end date in the format of YYYY-MM-DD.
The period queried per request cannot be longer than 31 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Whether to query single-stream or mixed-stream recording. Valid values: `single`, `multi`.
         * @type {string || null}
         */
        this.MixType = null;

        /**
         * The `SDKAppID` of the TRTC application to which the target room belongs. If you do not specify this parameter, the usage statistics of all TRTC applications under the current account will be returned.
         * @type {number || null}
         */
        this.SdkAppId = null;

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
        this.MixType = 'MixType' in params ? params.MixType : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * The information of the recording files, which is returned by the `DescribeCloudRecording` API.
 * @class
 */
class StorageFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * The user whose stream is recorded into the file. In the mixed-stream recording mode, this parameter will be empty.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The filename.
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * The type of the media recorded.
video
audio
audio_video
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TrackType = null;

        /**
         * The start time (Unix timestamp) of the recording file.
         * @type {number || null}
         */
        this.BeginTimeStamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.TrackType = 'TrackType' in params ? params.TrackType : null;
        this.BeginTimeStamp = 'BeginTimeStamp' in params ? params.BeginTimeStamp : null;

    }
}

/**
 * The watermark layout.
 * @class
 */
class WaterMark extends  AbstractModel {
    constructor(){
        super();

        /**
         * The watermark type. 0 (default): image; 1: text (not supported yet).
         * @type {number || null}
         */
        this.WaterMarkType = null;

        /**
         * The information of watermark images. This parameter is required if the watermark type is image.
         * @type {WaterMarkImage || null}
         */
        this.WaterMarkImage = null;

        /**
         * The information of the text watermark. This parameter is required if `WaterMarkType` is `1`.
         * @type {WaterMarkChar || null}
         */
        this.WaterMarkChar = null;

        /**
         * The information of the timestamp watermark. This parameter is required if `WaterMarkType` is `2`.
         * @type {WaterMarkTimestamp || null}
         */
        this.WaterMarkTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WaterMarkType = 'WaterMarkType' in params ? params.WaterMarkType : null;

        if (params.WaterMarkImage) {
            let obj = new WaterMarkImage();
            obj.deserialize(params.WaterMarkImage)
            this.WaterMarkImage = obj;
        }

        if (params.WaterMarkChar) {
            let obj = new WaterMarkChar();
            obj.deserialize(params.WaterMarkChar)
            this.WaterMarkChar = obj;
        }

        if (params.WaterMarkTimestamp) {
            let obj = new WaterMarkTimestamp();
            obj.deserialize(params.WaterMarkTimestamp)
            this.WaterMarkTimestamp = obj;
        }

    }
}

/**
 * DescribeScaleInfo response structure.
 * @class
 */
class DescribeScaleInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of records returned.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The returned data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ScaleInfomation> || null}
         */
        this.ScaleList = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * The layout parameters for mixed-stream recording.
 * @class
 */
class MixLayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layout mode:
1: Floating
2: Screen sharing
3: Grid (default)
4: Custom

Floating: By default, the video of the first anchor (you can also specify an anchor) who enters the room is scaled to fill the screen. When other anchors enter the room, their videos appear smaller and are superimposed over the large video from left to right starting from the bottom of the canvas according to their room entry sequence. If the total number of videos is 17 or less, there will be four windows in each row (4 x 4); if it is greater than 17, there will be five windows in each row (5 x 5). Up to 25 videos can be displayed. A user who publishes only audio will still be displayed in one window.

Screen sharing: The video of a specified anchor occupies a larger part of the canvas on the left side (if you do not specify an anchor, the left window will display the canvas background). The videos of other anchors are smaller and are positioned on the right side. If the total number of videos is 17 or less, the small videos are positioned from top to bottom in up to two columns on the right side, with eight videos per column at most. If there are more than 17 videos, the additional videos are positioned at the bottom of the canvas from left to right. Up to 25 videos can be displayed. A user who publishes only audio will still be displayed in one window.

Grid: The videos of anchors are scaled and positioned automatically according to the total number of anchors in a room. Each video has the same size. Up to 25 videos can be displayed.

Custom: Specify the layout of videos by using the `MixLayoutList` parameter.
         * @type {number || null}
         */
        this.MixLayoutMode = null;

        /**
         * The custom layout details. This parameter is valid if `MixLayoutMode` is set to `4`. Up to 25 videos can be displayed.
         * @type {Array.<MixLayout> || null}
         */
        this.MixLayoutList = null;

        /**
         * The background color, which is a hexadecimal value (starting with "#", followed by the color value) converted from an 8-bit RGB value. For example, the RGB value of orange is `R:255 G:165 B:0`, and its hexadecimal value is `#FFA500`. The default color is black.
         * @type {string || null}
         */
        this.BackGroundColor = null;

        /**
         * The user whose video is displayed in the big window. This parameter is valid if `MixLayoutMode` is set to `1` (floating) or `2` (screen sharing). If it is left empty, the first anchor entering the room is displayed in the big window in the floating mode and the canvas background is displayed in the screen sharing mode.
         * @type {string || null}
         */
        this.MaxResolutionUserId = null;

        /**
         * The stream type.
0: Primary stream (default)
1: Substream (screen sharing stream)
This parameter specifies the type of the stream displayed in the big window. If it appears in `MixLayoutList`, it indicates the type of the stream of a specified user.
         * @type {number || null}
         */
        this.MediaId = null;

        /**
         * The URL of the background image, which cannot contain Chinese characters. The image must be in JPG or PNG format and cannot be larger than 5 MB.
         * @type {string || null}
         */
        this.BackgroundImageUrl = null;

        /**
         * `1` means to use placeholders, and `0` (default) means to not use placeholders. If this parameter is set to `1`, when a user is not publishing video, a placeholder image will be displayed in the window reserved for the user.
         * @type {number || null}
         */
        this.PlaceHolderMode = null;

        /**
         * The render mode to use when the aspect ratio of a video is different from that of the window. This parameter is defined the same as `RenderMode` in `MixLayoufList`.
         * @type {number || null}
         */
        this.BackgroundImageRenderMode = null;

        /**
         * The URL of the background image for a window. The image must be in JPG or PNG format and cannot be larger than 5 MB. If the image’s aspect ratio is different from that of the window, the image will be rendered according to the value of `RenderMode`.
         * @type {string || null}
         */
        this.DefaultSubBackgroundImage = null;

        /**
         * The watermark layout. Up to 25 watermarks are supported.
         * @type {Array.<WaterMark> || null}
         */
        this.WaterMarkList = null;

        /**
         * The render mode to use when the aspect ratio of a video is different from that of the window. This parameter is invalid if a custom layout is used. It is defined the same as `RenderMode` in `MixLayoufList`.
         * @type {number || null}
         */
        this.RenderMode = null;

        /**
         * This parameter is valid only if the screen sharing layout is used. If you set it to `1`, the large video window will appear on the right and the small window on the left. The default value is `0`.
         * @type {number || null}
         */
        this.MaxResolutionUserAlign = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MixLayoutMode = 'MixLayoutMode' in params ? params.MixLayoutMode : null;

        if (params.MixLayoutList) {
            this.MixLayoutList = new Array();
            for (let z in params.MixLayoutList) {
                let obj = new MixLayout();
                obj.deserialize(params.MixLayoutList[z]);
                this.MixLayoutList.push(obj);
            }
        }
        this.BackGroundColor = 'BackGroundColor' in params ? params.BackGroundColor : null;
        this.MaxResolutionUserId = 'MaxResolutionUserId' in params ? params.MaxResolutionUserId : null;
        this.MediaId = 'MediaId' in params ? params.MediaId : null;
        this.BackgroundImageUrl = 'BackgroundImageUrl' in params ? params.BackgroundImageUrl : null;
        this.PlaceHolderMode = 'PlaceHolderMode' in params ? params.PlaceHolderMode : null;
        this.BackgroundImageRenderMode = 'BackgroundImageRenderMode' in params ? params.BackgroundImageRenderMode : null;
        this.DefaultSubBackgroundImage = 'DefaultSubBackgroundImage' in params ? params.DefaultSubBackgroundImage : null;

        if (params.WaterMarkList) {
            this.WaterMarkList = new Array();
            for (let z in params.WaterMarkList) {
                let obj = new WaterMark();
                obj.deserialize(params.WaterMarkList[z]);
                this.WaterMarkList.push(obj);
            }
        }
        this.RenderMode = 'RenderMode' in params ? params.RenderMode : null;
        this.MaxResolutionUserAlign = 'MaxResolutionUserAlign' in params ? params.MaxResolutionUserAlign : null;

    }
}

/**
 * DescribeMixTranscodingUsage response structure.
 * @class
 */
class DescribeMixTranscodingUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The usage type. Each element of this parameter corresponds to an element of `UsageValue` in the order they are listed.
         * @type {Array.<string> || null}
         */
        this.UsageKey = null;

        /**
         * The usage data in each time unit.
         * @type {Array.<TrtcUsage> || null}
         */
        this.UsageList = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.UsageKey = 'UsageKey' in params ? params.UsageKey : null;

        if (params.UsageList) {
            this.UsageList = new Array();
            for (let z in params.UsageList) {
                let obj = new TrtcUsage();
                obj.deserialize(params.UsageList[z]);
                this.UsageList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Parameters for relaying to a TRTC room.
 * @class
 */
class McuFeedBackRoomParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room ID.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * The ID type of the room to which streams are relayed. `0` indicates integer, and `1` indicates string.
         * @type {number || null}
         */
        this.RoomIdType = null;

        /**
         * The [user ID](https://www.tencentcloud.com/document/product/647/37714) of the relaying robot in the TRTC room, which cannot be the same as a user ID already in use. We recommend you include the room ID in this user ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The signature (similar to login password) required for the relaying robot to enter the room. For information on how to calculate the signature, see [What is UserSig?](https://www.tencentcloud.com/document/product/647/38104).
         * @type {string || null}
         */
        this.UserSig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.RoomIdType = 'RoomIdType' in params ? params.RoomIdType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserSig = 'UserSig' in params ? params.UserSig : null;

    }
}

/**
 * The audio encoding parameters.
 * @class
 */
class AudioEncode extends  AbstractModel {
    constructor(){
        super();

        /**
         * The audio sample rate (Hz). Valid values: 48000, 44100, 32000, 24000, 16000, 8000.
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * The number of sound channels. Valid values: 1 (mono), 2 (dual).
         * @type {number || null}
         */
        this.Channel = null;

        /**
         * The audio bitrate (Kbps). Value range: 8-500.
         * @type {number || null}
         */
        this.BitRate = null;

        /**
         * The audio codec. Valid values: 0 (LC-AAC), 1 (HE-AAC), 2 (HE-AACv2). The default value is 0. If this parameter is set to 2, `Channel` must be 2. If it is set to 1 or 2, `SampleRate` can only be 48000, 44100, 32000, 24000, or 16000.
         * @type {number || null}
         */
        this.Codec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.BitRate = 'BitRate' in params ? params.BitRate : null;
        this.Codec = 'Codec' in params ? params.Codec : null;

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
 * DescribeUnusualEvent request structure.
 * @class
 */
class DescribeUnusualEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The application ID, such as `1400xxxxxx`.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The start time, which is a Unix timestamp (seconds) in local time, such as `1590065777`.
Note: Only data in the last 14 days can be queried.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The end time, which is a Unix timestamp (seconds) in local time, such as `1590065877`. The end time and start time cannot be more than one hour apart.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * The room ID. Up to 20 random abnormal user experiences of the specified room will be returned.
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
 * DescribeCloudRecording request structure.
 * @class
 */
class DescribeCloudRecordingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `SDKAppID` of the room whose streams are recorded.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The unique ID of the recording task, which is returned after recording starts successfully.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * The Tencent Cloud VOD parameters.
 * @class
 */
class TencentVod extends  AbstractModel {
    constructor(){
        super();

        /**
         * The operation to perform on the media uploaded. The value of this parameter is the name of a task flow template. You can create a custom task flow template in Tencent Cloud VOD.
         * @type {string || null}
         */
        this.Procedure = null;

        /**
         * The expiration time of the media file, which is a time period (seconds) from the current time. For example, `86400` means to save the media file for one day. To save the file permanently, set this parameter to `0`.
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * The storage region. Set this parameter if you have special requirements on the storage region.
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * The category ID, which is returned after you create a category by calling an API. You can use categories to manage media files.
The default value is `0`, which means others.
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * The VOD subapplication ID. If you need to access a resource in a subapplication, set this parameter to the subapplication ID; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * The task flow context, which is passed through after the task is completed.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * The upload context, which is passed through after upload is completed.
         * @type {string || null}
         */
        this.SourceContext = null;

        /**
         * The format of recording files uploaded to VOD. `0` (default): MP4; `1`: HLS; `2`: AAC (valid only if `StreamType` is `1`); `3`: HLS+MP4; `4`: HLS+AAC.
         * @type {number || null}
         */
        this.MediaType = null;

        /**
         * The custom prefix of recording files. This parameter is valid only if recording files are uploaded to VOD. It can contain letters, numbers, underscores, and hyphens and cannot exceed 64 bytes. This prefix and the automatically generated filename are connected with `__UserId_u_`.
         * @type {string || null}
         */
        this.UserDefineRecordId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SourceContext = 'SourceContext' in params ? params.SourceContext : null;
        this.MediaType = 'MediaType' in params ? params.MediaType : null;
        this.UserDefineRecordId = 'UserDefineRecordId' in params ? params.UserDefineRecordId : null;

    }
}

/**
 * The custom pass-through SEI.
 * @class
 */
class McuPassThrough extends  AbstractModel {
    constructor(){
        super();

        /**
         * The payload of the pass-through SEI.
         * @type {string || null}
         */
        this.PayloadContent = null;

        /**
         * The payload type of the SEI message. Value range: 5 and 100-254 (244 is used internally by Tencent Cloud for timestamps).
         * @type {number || null}
         */
        this.PayloadType = null;

        /**
         * This parameter is required only if `PayloadType` is 5. It must be a 32-character hexadecimal string. If `PayloadType` is not 5, this parameter will be ignored.
         * @type {string || null}
         */
        this.PayloadUuid = null;

        /**
         * The SEI sending interval (milliseconds). The default value is 1000.
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Valid values: `1`: SEI is guaranteed when keyframes are sent; `0` (default): SEI is not guaranteed when keyframes are sent.
         * @type {number || null}
         */
        this.FollowIdr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayloadContent = 'PayloadContent' in params ? params.PayloadContent : null;
        this.PayloadType = 'PayloadType' in params ? params.PayloadType : null;
        this.PayloadUuid = 'PayloadUuid' in params ? params.PayloadUuid : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.FollowIdr = 'FollowIdr' in params ? params.FollowIdr : null;

    }
}

/**
 * SetUserBlockedByStrRoomId response structure.
 * @class
 */
class SetUserBlockedByStrRoomIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * TRTC Data Dashboard/Real-Time Monitoring API output parameters
 * @class
 */
class TRTCDataResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * StatementID value, fixed at 0 for Monitoring Dashboard.
         * @type {number || null}
         */
        this.StatementID = null;

        /**
         * Query result data, returned in Columns-Values format.
         * @type {Array.<SeriesInfos> || null}
         */
        this.Series = null;

        /**
         * Total value, fixed at 1 for Monitoring Dashboard.
         * @type {number || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatementID = 'StatementID' in params ? params.StatementID : null;

        if (params.Series) {
            this.Series = new Array();
            for (let z in params.Series) {
                let obj = new SeriesInfos();
                obj.deserialize(params.Series[z]);
                this.Series.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * DescribeTRTCRealTimeQualityData request structure.
 * @class
 */
class DescribeTRTCRealTimeQualityDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User SDKAppId (e.g., 1400xxxxxx)
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * Start time, unix timestamp, Unit: seconds (Query time range depends on the monitoring dashboard function version, standard edition can query the last 3 hours, premium edition can query the last 12 hours)
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time, unix timestamp, Unit: seconds
         * @type {number || null}
         */
        this.EndTime = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * CreateCloudRecording request structure.
 * @class
 */
class CreateCloudRecordingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The [SDKAppID](https://intl.cloud.tencent.com/document/product/647/37714) of the TRTC room whose streams are recorded.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The [room ID](https://intl.cloud.tencent.com/document/product/647/37714) of the TRTC room whose streams are recorded.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * The [user ID](https://www.tencentcloud.com/document/product/647/37714#userid) of the recording robot in the TRTC room, which cannot be identical to the user IDs of anchors in the room or other recording robots. To distinguish this user ID from others, we recommend you include the room ID in the user ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The signature (similar to a login password) required for the recording robot to enter the room. Each user ID corresponds to a signature. For information on how to calculate the signature, see [What is UserSig?](https://intl.cloud.tencent.com/document/product/647/38104).
         * @type {string || null}
         */
        this.UserSig = null;

        /**
         * The on-cloud recording parameters.
         * @type {RecordParams || null}
         */
        this.RecordParams = null;

        /**
         * The storage information of the recording file. Currently, you can save recording files to Tencent Cloud VOD or COS.
         * @type {StorageParams || null}
         */
        this.StorageParams = null;

        /**
         * The type of the TRTC room ID, which must be the same as the ID type of the room whose streams are recorded.
0: String
1: 32-bit integer (default)
         * @type {number || null}
         */
        this.RoomIdType = null;

        /**
         * The stream mixing parameters, which are valid if the mixed-stream recording mode is used.
         * @type {MixTranscodeParams || null}
         */
        this.MixTranscodeParams = null;

        /**
         * The layout parameters, which are valid if the mixed-stream recording mode is used.
         * @type {MixLayoutParams || null}
         */
        this.MixLayoutParams = null;

        /**
         * The amount of time (in hours) during which API requests can be made after recording starts. Calculation starts when a recording task is started (when the recording task ID is returned). Once the period elapses, the query, modification, and stop recording APIs can no longer be called, but the recording task will continue. The default value is `72` (three days), and the maximum and minimum values allowed are `720` (30 days) and `6` respectively. If you do not set this parameter, the query, modification, and stop recording APIs can be called within 72 hours after recording starts.
         * @type {number || null}
         */
        this.ResourceExpiredHour = null;

        /**
         * The permission ticket for a TRTC room. This parameter is required if advanced permission control is enabled in the console, in which case the TRTC backend will verify users’ [PrivateMapKey](https://intl.cloud.tencent.com/document/product/647/32240?from_cn_redirect=1), which include an encrypted room ID and permission bit list. A user providing only `UserSig` and not `PrivateMapKey` will be unable to enter the room.
         * @type {string || null}
         */
        this.PrivateMapKey = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserSig = 'UserSig' in params ? params.UserSig : null;

        if (params.RecordParams) {
            let obj = new RecordParams();
            obj.deserialize(params.RecordParams)
            this.RecordParams = obj;
        }

        if (params.StorageParams) {
            let obj = new StorageParams();
            obj.deserialize(params.StorageParams)
            this.StorageParams = obj;
        }
        this.RoomIdType = 'RoomIdType' in params ? params.RoomIdType : null;

        if (params.MixTranscodeParams) {
            let obj = new MixTranscodeParams();
            obj.deserialize(params.MixTranscodeParams)
            this.MixTranscodeParams = obj;
        }

        if (params.MixLayoutParams) {
            let obj = new MixLayoutParams();
            obj.deserialize(params.MixLayoutParams)
            this.MixLayoutParams = obj;
        }
        this.ResourceExpiredHour = 'ResourceExpiredHour' in params ? params.ResourceExpiredHour : null;
        this.PrivateMapKey = 'PrivateMapKey' in params ? params.PrivateMapKey : null;

    }
}

/**
 * DeleteCloudRecording response structure.
 * @class
 */
class DeleteCloudRecordingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID assigned by the recording service, which uniquely identifies a recording process and becomes invalid after a recording task ends.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The quality data returned by ES.
 * @class
 */
class QualityData extends  AbstractModel {
    constructor(){
        super();

        /**
         * The quality data.
         * @type {Array.<TimeValue> || null}
         */
        this.Content = null;

        /**
         * The user ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The remote user ID. An empty string indicates that the data is upstream data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PeerId = null;

        /**
         * The data type.
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
 * StopPublishCdnStream request structure.
 * @class
 */
class StopPublishCdnStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The [SDKAppID](https://intl.cloud.tencent.com/document/product/647/37714) of the TRTC room whose streams are relayed.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The task ID.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * ModifyCloudRecording request structure.
 * @class
 */
class ModifyCloudRecordingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `SDKAppID` of the room whose streams are recorded.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The unique ID of the recording task, which is returned after recording starts successfully.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The new stream mixing layout to use.
         * @type {MixLayoutParams || null}
         */
        this.MixLayoutParams = null;

        /**
         * The allowlist/blocklist for stream subscription.
         * @type {SubscribeStreamUserIds || null}
         */
        this.SubscribeStreamUserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.MixLayoutParams) {
            let obj = new MixLayoutParams();
            obj.deserialize(params.MixLayoutParams)
            this.MixLayoutParams = obj;
        }

        if (params.SubscribeStreamUserIds) {
            let obj = new SubscribeStreamUserIds();
            obj.deserialize(params.SubscribeStreamUserIds)
            this.SubscribeStreamUserIds = obj;
        }

    }
}

/**
 * The video transcoding parameters for recording.
 * @class
 */
class VideoParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The video width in pixels. The value of this parameter cannot be larger than 1920, and the result of multiplying `Width` and `Height` cannot exceed 1920 x 1080. The default value is `360`.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * The video height in pixels. The value of this parameter cannot be larger than 1920, and the result of multiplying `Width` and `Height` cannot exceed 1920 x 1080. The default value is `640`.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * The video frame rate. Value range: [1, 60]. Default: 15.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * The video bitrate (bps). Value range: [64000, 8192000]. Default: 550000.
         * @type {number || null}
         */
        this.BitRate = null;

        /**
         * The keyframe interval (seconds). Default value: 10.
         * @type {number || null}
         */
        this.Gop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.BitRate = 'BitRate' in params ? params.BitRate : null;
        this.Gop = 'Gop' in params ? params.Gop : null;

    }
}

/**
 * StartPublishCdnStream request structure.
 * @class
 */
class StartPublishCdnStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The [SDKAppID](https://intl.cloud.tencent.com/document/product/647/37714) of the TRTC room whose streams are relayed.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The ID of the room whose streams are relayed (the main room).
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * The type of the `RoomId` parameter, which must be the same as the ID type of the room whose streams are relayed. 0: integer; 1: string.
         * @type {number || null}
         */
        this.RoomIdType = null;

        /**
         * The information of the relaying robot in the room.
         * @type {AgentParams || null}
         */
        this.AgentParams = null;

        /**
         * Whether to transcode the streams. `0`: No. `1`: Yes. This parameter determines whether transcoding fees are charged. If it is `0`, streams will only be relayed, and no transcoding fees will be incurred. If it is `1`, streams will be transcoded before being relayed, and transcoding fees will be incurred.
         * @type {number || null}
         */
        this.WithTranscoding = null;

        /**
         * The audio encoding parameters. Because audio is always transcoded (no fees are incurred), this parameter is required when you start a relay task.
         * @type {McuAudioParams || null}
         */
        this.AudioParams = null;

        /**
         * The video encoding parameters for relaying. If you do not pass this parameter, only audio will be relayed.
         * @type {McuVideoParams || null}
         */
        this.VideoParams = null;

        /**
         * The information of a single stream relayed. When you relay a single stream, set `WithTranscoding` to 0.
         * @type {SingleSubscribeParams || null}
         */
        this.SingleSubscribeParams = null;

        /**
         * The information of the CDNs to relay to. You need to specify at least one between this parameter and `FeedBackRoomParams.N`.
         * @type {Array.<McuPublishCdnParam> || null}
         */
        this.PublishCdnParams = null;

        /**
         * The stream mixing SEI parameters.
         * @type {McuSeiParams || null}
         */
        this.SeiParams = null;

        /**
         * The information of the room to which streams are relayed. Between this parameter and `PublishCdnParams`, you must specify at least one. Please note that relaying to a TRTC room is only supported in some SDK versions. For details, please contact technical support.
         * @type {Array.<McuFeedBackRoomParams> || null}
         */
        this.FeedBackRoomParams = null;

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
        this.RoomIdType = 'RoomIdType' in params ? params.RoomIdType : null;

        if (params.AgentParams) {
            let obj = new AgentParams();
            obj.deserialize(params.AgentParams)
            this.AgentParams = obj;
        }
        this.WithTranscoding = 'WithTranscoding' in params ? params.WithTranscoding : null;

        if (params.AudioParams) {
            let obj = new McuAudioParams();
            obj.deserialize(params.AudioParams)
            this.AudioParams = obj;
        }

        if (params.VideoParams) {
            let obj = new McuVideoParams();
            obj.deserialize(params.VideoParams)
            this.VideoParams = obj;
        }

        if (params.SingleSubscribeParams) {
            let obj = new SingleSubscribeParams();
            obj.deserialize(params.SingleSubscribeParams)
            this.SingleSubscribeParams = obj;
        }

        if (params.PublishCdnParams) {
            this.PublishCdnParams = new Array();
            for (let z in params.PublishCdnParams) {
                let obj = new McuPublishCdnParam();
                obj.deserialize(params.PublishCdnParams[z]);
                this.PublishCdnParams.push(obj);
            }
        }

        if (params.SeiParams) {
            let obj = new McuSeiParams();
            obj.deserialize(params.SeiParams)
            this.SeiParams = obj;
        }

        if (params.FeedBackRoomParams) {
            this.FeedBackRoomParams = new Array();
            for (let z in params.FeedBackRoomParams) {
                let obj = new McuFeedBackRoomParams();
                obj.deserialize(params.FeedBackRoomParams[z]);
                this.FeedBackRoomParams.push(obj);
            }
        }

    }
}

/**
 * Two-dimensional array of SeriesInfo type
 * @class
 */
class RowValues extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data value
         * @type {Array.<number> || null}
         */
        this.RowValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RowValue = 'RowValue' in params ? params.RowValue : null;

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
 * StartStreamIngest response structure.
 * @class
 */
class StartStreamIngestResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Task ID of the Pull stream Relay. The Task ID is a unique identifier for a Pull stream Relay lifecycle process, and it loses its meaning when the task ends. The Task ID needs to be saved by the business as a parameter for the next operation on this task.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCloudRecording request structure.
 * @class
 */
class DeleteCloudRecordingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `SDKAppID` of the room whose streams are recorded.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The unique ID of the recording task, which is returned after recording starts successfully.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * SetUserBlockedByStrRoomId request structure.
 * @class
 */
class SetUserBlockedByStrRoomIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The room ID (string).
         * @type {string || null}
         */
        this.StrRoomId = null;

        /**
         * The user ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Whether to disable the user’s audio and video. 0: Enable; 1: Disable.
         * @type {number || null}
         */
        this.IsMute = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.IsMute = 'IsMute' in params ? params.IsMute : null;

    }
}

/**
 * DescribeTrtcRoomUsage request structure.
 * @class
 */
class DescribeTrtcRoomUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `SDKAppID` of the room.
         * @type {number || null}
         */
        this.SdkAppid = null;

        /**
         * The start time in the format of `YYYY-MM-DD HH:MM` (accurate to the minute).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time in the format of `YYYY-MM-DD HH:MM`. The start and end time cannot be more than 24 hours apart.
         * @type {string || null}
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
        this.SdkAppid = 'SdkAppid' in params ? params.SdkAppid : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * The user information, including when the user entered/left the room.
 * @class
 */
class UserInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room ID.
         * @type {string || null}
         */
        this.RoomStr = null;

        /**
         * The user ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The time when the user entered the room.
         * @type {number || null}
         */
        this.JoinTs = null;

        /**
         * The time when the user left the room. If the user is still in the room, the current time will be returned.
         * @type {number || null}
         */
        this.LeaveTs = null;

        /**
         * The device type.
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * The SDK version number.
         * @type {string || null}
         */
        this.SdkVersion = null;

        /**
         * The client IP address.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * Whether a user has left the room.
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
 * DescribeScaleInfo request structure.
 * @class
 */
class DescribeScaleInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The application ID, such as `1400xxxxxx`.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The start time, which is a Unix timestamp (seconds) in local time, such as `1590065777`.
Note: Only data in the last 14 days can be queried.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The end time, which is a Unix timestamp (seconds) in local time, such as `1590065877`. The end time and start time should preferably be more than 24 hours apart.
Note: Data is collected on a daily basis. To query the data of a day, make sure the end time is later than 00:00 on that day. Otherwise, no data will be returned. For example, to query the data on the 20th, the end time must be later than 00:00 on the 20th.
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
 * DismissRoomByStrRoomId response structure.
 * @class
 */
class DismissRoomByStrRoomIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeUnusualEvent response structure.
 * @class
 */
class DescribeUnusualEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of records returned.
Value range: 0-20.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The information of the abnormal user experiences.
         * @type {Array.<AbnormalExperience> || null}
         */
        this.AbnormalExperienceList = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * ModifyCloudRecording response structure.
 * @class
 */
class ModifyCloudRecordingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID assigned by the recording service, which uniquely identifies a recording process and becomes invalid after a recording task ends.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCloudRecording response structure.
 * @class
 */
class DescribeCloudRecordingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the recording task.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The status of the on-cloud recording task.
Idle: The task is idle.
InProgress: The task is in progress.
Exited: The task is being ended.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The information of the recording files.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<StorageFile> || null}
         */
        this.StorageFileList = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.StorageFileList) {
            this.StorageFileList = new Array();
            for (let z in params.StorageFileList) {
                let obj = new StorageFile();
                obj.deserialize(params.StorageFileList[z]);
                this.StorageFileList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopStreamIngest response structure.
 * @class
 */
class StopStreamIngestResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * The user information.
 * @class
 */
class MixUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * If a dynamic layout is used, the value of this parameter should be the ID of the main room. If a custom layout is used, the value of this parameter should be the same as the room ID in `MixLayoutList`.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * The type of the `RoomId` parameter. 0: integer; 1: string.
         * @type {number || null}
         */
        this.RoomIdType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.RoomIdType = 'RoomIdType' in params ? params.RoomIdType : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeTRTCMarketQualityData request structure.
 * @class
 */
class DescribeTRTCMarketQualityDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User SDKAppId (e.g., 1400xxxxxx)
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * Query start time, format is YYYY-MM-DD. (The query time range depends on the monitoring dashboard function version, the premium edition can query up to 30 days)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time, format is YYYY-MM-DD.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The granularity of the returned data, which can be set to the following values:
d: by day. This returns data for the entire UTC day of the query time range. 
h: by hour. This returns data for the entire UTC hour of the query time range.
         * @type {string || null}
         */
        this.Period = null;

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
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * UpdatePublishCdnStream request structure.
 * @class
 */
class UpdatePublishCdnStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The [SDKAppID](https://intl.cloud.tencent.com/document/product/647/37714) of the TRTC room whose streams are relayed.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The sequence of a request. This parameter ensures the requests to change the parameters of the same relaying task are in the correct order. It increases each time a new request is made.
         * @type {number || null}
         */
        this.SequenceNumber = null;

        /**
         * Whether to transcode the streams. 0: No; 1: Yes.
         * @type {number || null}
         */
        this.WithTranscoding = null;

        /**
         * Pass this parameter to change the users whose audios are mixed. If you do not pass this parameter, no changes will be made.
         * @type {McuAudioParams || null}
         */
        this.AudioParams = null;

        /**
         * Pass this parameter to change video parameters other than the codec, including the video layout, background image, background color, and watermark information. This parameter is valid only if streams are transcoded. If you do not pass it, no changes will be made.
         * @type {McuVideoParams || null}
         */
        this.VideoParams = null;

        /**
         * Pass this parameter to change the single stream that is relayed. This parameter is valid only if streams are not transcoded. If you do not pass this parameter, no changes will be made.
         * @type {SingleSubscribeParams || null}
         */
        this.SingleSubscribeParams = null;

        /**
         * Pass this parameter to change the CDNs to relay to. If you do not pass this parameter, no changes will be made.
         * @type {Array.<McuPublishCdnParam> || null}
         */
        this.PublishCdnParams = null;

        /**
         * The stream mixing SEI parameters.
         * @type {McuSeiParams || null}
         */
        this.SeiParams = null;

        /**
         * The information of the room to which streams are relayed.
         * @type {Array.<McuFeedBackRoomParams> || null}
         */
        this.FeedBackRoomParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SequenceNumber = 'SequenceNumber' in params ? params.SequenceNumber : null;
        this.WithTranscoding = 'WithTranscoding' in params ? params.WithTranscoding : null;

        if (params.AudioParams) {
            let obj = new McuAudioParams();
            obj.deserialize(params.AudioParams)
            this.AudioParams = obj;
        }

        if (params.VideoParams) {
            let obj = new McuVideoParams();
            obj.deserialize(params.VideoParams)
            this.VideoParams = obj;
        }

        if (params.SingleSubscribeParams) {
            let obj = new SingleSubscribeParams();
            obj.deserialize(params.SingleSubscribeParams)
            this.SingleSubscribeParams = obj;
        }

        if (params.PublishCdnParams) {
            this.PublishCdnParams = new Array();
            for (let z in params.PublishCdnParams) {
                let obj = new McuPublishCdnParam();
                obj.deserialize(params.PublishCdnParams[z]);
                this.PublishCdnParams.push(obj);
            }
        }

        if (params.SeiParams) {
            let obj = new McuSeiParams();
            obj.deserialize(params.SeiParams)
            this.SeiParams = obj;
        }

        if (params.FeedBackRoomParams) {
            this.FeedBackRoomParams = new Array();
            for (let z in params.FeedBackRoomParams) {
                let obj = new McuFeedBackRoomParams();
                obj.deserialize(params.FeedBackRoomParams[z]);
                this.FeedBackRoomParams.push(obj);
            }
        }

    }
}

/**
 * The information of the large video in screen sharing or floating layout mode.
 * @class
 */
class MaxVideoUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * The stream information.
         * @type {UserMediaStream || null}
         */
        this.UserMediaStream = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UserMediaStream) {
            let obj = new UserMediaStream();
            obj.deserialize(params.UserMediaStream)
            this.UserMediaStream = obj;
        }

    }
}

/**
 * The stream mixing SEI parameters.
 * @class
 */
class McuSeiParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The audio volume layout SEI.
         * @type {McuLayoutVolume || null}
         */
        this.LayoutVolume = null;

        /**
         * The pass-through SEI.
         * @type {McuPassThrough || null}
         */
        this.PassThrough = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LayoutVolume) {
            let obj = new McuLayoutVolume();
            obj.deserialize(params.LayoutVolume)
            this.LayoutVolume = obj;
        }

        if (params.PassThrough) {
            let obj = new McuPassThrough();
            obj.deserialize(params.PassThrough)
            this.PassThrough = obj;
        }

    }
}

/**
 * The event information, including the timestamp and event ID.
 * @class
 */
class EventMessage extends  AbstractModel {
    constructor(){
        super();

        /**
         * The video stream type. Valid values:
`0`: A non-video event
`2`: The big video
`3`: The small video
`7`: A relayed video
         * @type {number || null}
         */
        this.Type = null;

        /**
         * The event reporting time in the format of UNIX timestamp (milliseconds), such as `1589891188801`.
         * @type {number || null}
         */
        this.Time = null;

        /**
         * The event ID. Events are classified into SDK events and WebRTC events. For more information, see https://www.tencentcloud.com/document/product/647/37906?has_map=1
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * The first event parameter, such as the video width.
         * @type {number || null}
         */
        this.ParamOne = null;

        /**
         * The second event parameter, such as the video height.
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
 * UpdatePublishCdnStream response structure.
 * @class
 */
class UpdatePublishCdnStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The text watermark configuration.
 * @class
 */
class McuWaterMarkText extends  AbstractModel {
    constructor(){
        super();

        /**
         * The text.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * The watermark width (pixels).
         * @type {number || null}
         */
        this.WaterMarkWidth = null;

        /**
         * The watermark height (pixels).
         * @type {number || null}
         */
        this.WaterMarkHeight = null;

        /**
         * The horizontal offset (pixels) of the watermark.
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * The vertical offset (pixels) of the watermark.
         * @type {number || null}
         */
        this.LocationY = null;

        /**
         * The font size.
         * @type {number || null}
         */
        this.FontSize = null;

        /**
         * The text color. The default color is white. Values for some commonly used colors: Red: `0xcc0033`; yellow: `0xcc9900`; green: `0xcccc33`; blue: `0x99CCFF`; black: `0x000000`; white: `0xFFFFFF`; gray: `0x999999`.	
         * @type {string || null}
         */
        this.FontColor = null;

        /**
         * The text fill color. If you do not specify this parameter, the fill color will be transparent. Values for some commonly used colors: Red: `0xcc0033`; yellow: `0xcc9900`; green: `0xcccc33`; blue: `0x99CCFF`; black: `0x000000`; white: `0xFFFFFF`; gray: `0x999999`.	
         * @type {string || null}
         */
        this.BackGroundColor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.WaterMarkWidth = 'WaterMarkWidth' in params ? params.WaterMarkWidth : null;
        this.WaterMarkHeight = 'WaterMarkHeight' in params ? params.WaterMarkHeight : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;
        this.BackGroundColor = 'BackGroundColor' in params ? params.BackGroundColor : null;

    }
}

/**
 * The room information.
 * @class
 */
class RoomState extends  AbstractModel {
    constructor(){
        super();

        /**
         * The call ID, which uniquely identifies a call.
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * The room ID.
         * @type {string || null}
         */
        this.RoomString = null;

        /**
         * The room creation time.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * The room termination time.
         * @type {number || null}
         */
        this.DestroyTime = null;

        /**
         * Whether the room is terminated.
         * @type {boolean || null}
         */
        this.IsFinished = null;

        /**
         * The user ID of the room creator.
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
 * The on-cloud recording parameters.
 * @class
 */
class RecordParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The recording mode.
1: Single-stream recording. Records the audio and video of each subscribed user (`UserId`) in a room and saves the recording files to the cloud.
2: Mixed-stream recording. Mixes the audios and videos of subscribed users (`UserId`) in a room, records the mixed stream, and saves the recording files to the cloud.
         * @type {number || null}
         */
        this.RecordMode = null;

        /**
         * The time period (seconds) to wait to automatically stop recording after there are no anchors (users who publish streams) in a room. Value range: 5-86400 (max 24 hours). Default value: 30.
         * @type {number || null}
         */
        this.MaxIdleTime = null;

        /**
         * The media type of the streams to record.
0: Audio and video streams (default)
1: Audio streams only
2: Video streams only
         * @type {number || null}
         */
        this.StreamType = null;

        /**
         * The allowlist/blocklist for stream subscription.
         * @type {SubscribeStreamUserIds || null}
         */
        this.SubscribeStreamUserIds = null;

        /**
         * The output format. `0` (default): HLS; `1`: HLS + MP4; `2`: HLS + AAC;  `3` : MP4,  `4` : AAC. This parameter is invalid if you save recording files to VOD. To specify the format of files saved to VOD, use `MediaType` of `TencentVod`.
         * @type {number || null}
         */
        this.OutputFormat = null;

        /**
         * Whether to merge the audio and video of a user in the single-stream recording mode. 0 (default): Do not mix the audio and video; 1: Mix the audio and video into one TS file. You don’t need to specify this parameter for mixed-stream recording, which merges audios and videos by default.
         * @type {number || null}
         */
        this.AvMerge = null;

        /**
         * The maximum file duration allowed (minutes). If the output format is AAC or MP4, and the maximum file duration is exceeded, the file will be segmented. Value range: 1-1440. Default value: 1440 (24 hours). The maximum file size allowed is 2 GB. If the file size exceeds 2 GB, or the file duration exceeds 24 hours, the file will also be segmented.
This parameter is invalid if the output format is HLS.
         * @type {number || null}
         */
        this.MaxMediaFileDuration = null;

        /**
         * The type of stream to record. `0` (default): The primary stream and substream; `1`: The primary stream; `2`: The substream.
         * @type {number || null}
         */
        this.MediaId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordMode = 'RecordMode' in params ? params.RecordMode : null;
        this.MaxIdleTime = 'MaxIdleTime' in params ? params.MaxIdleTime : null;
        this.StreamType = 'StreamType' in params ? params.StreamType : null;

        if (params.SubscribeStreamUserIds) {
            let obj = new SubscribeStreamUserIds();
            obj.deserialize(params.SubscribeStreamUserIds)
            this.SubscribeStreamUserIds = obj;
        }
        this.OutputFormat = 'OutputFormat' in params ? params.OutputFormat : null;
        this.AvMerge = 'AvMerge' in params ? params.AvMerge : null;
        this.MaxMediaFileDuration = 'MaxMediaFileDuration' in params ? params.MaxMediaFileDuration : null;
        this.MediaId = 'MediaId' in params ? params.MediaId : null;

    }
}

/**
 * DescribeStreamIngest request structure.
 * @class
 */
class DescribeStreamIngestRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppId of TRTC should be the same as the SDKAppId corresponding to the task room.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The unique Id of the task, will return after successfully starting the task.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * The audio parameters for relaying.
 * @class
 */
class McuAudioParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The audio encoding parameters.
         * @type {AudioEncode || null}
         */
        this.AudioEncode = null;

        /**
         * The audio mix allowlist. For the `StartPublishCdnStream` API, if you do not pass this parameter or leave it empty, the audios of all anchors will be mixed. For the `UpdatePublishCdnStream` API, if you do not pass this parameter, no changes will be made to the current allowlist; if you pass in an empty string, the audios of all anchors will be mixed.
In cases where `SubscribeAudioList` and `UnSubscribeAudioList` are used at the same time, you need to specify both parameters. If you pass neither `SubscribeAudioList` nor `UnSubscribeAudioList`, no changes will be made. If a user is included in both parameters, the user’s audio will not be mixed.
         * @type {Array.<McuUserInfoParams> || null}
         */
        this.SubscribeAudioList = null;

        /**
         * The audio mix blocklist. If you do not pass this parameter or leave it empty, there won’t be a blocklist. For the `UpdatePublishCdnStream` API, if you do not pass this parameter, no changes will be made to the current blocklist; if you pass in an empty string, the blocklist will be reset.
In cases where `SubscribeAudioList` and `UnSubscribeAudioList` are used at the same time, you need to specify both parameters. If you pass neither `SubscribeAudioList` nor `UnSubscribeAudioList`, no changes will be made. If a user is included in both parameters, the user’s audio will not be mixed.
         * @type {Array.<McuUserInfoParams> || null}
         */
        this.UnSubscribeAudioList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AudioEncode) {
            let obj = new AudioEncode();
            obj.deserialize(params.AudioEncode)
            this.AudioEncode = obj;
        }

        if (params.SubscribeAudioList) {
            this.SubscribeAudioList = new Array();
            for (let z in params.SubscribeAudioList) {
                let obj = new McuUserInfoParams();
                obj.deserialize(params.SubscribeAudioList[z]);
                this.SubscribeAudioList.push(obj);
            }
        }

        if (params.UnSubscribeAudioList) {
            this.UnSubscribeAudioList = new Array();
            for (let z in params.UnSubscribeAudioList) {
                let obj = new McuUserInfoParams();
                obj.deserialize(params.UnSubscribeAudioList[z]);
                this.UnSubscribeAudioList.push(obj);
            }
        }

    }
}

/**
 * The relaying parameters.
 * @class
 */
class McuPublishCdnParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URLs of the CDNs to relay to.
         * @type {string || null}
         */
        this.PublishCdnUrl = null;

        /**
         * Whether to relay to Tencent Cloud’s CDN. `0`: Third-party CDN; `1` (default): Tencent Cloud’s CDN. Relaying to a third-party CDN will incur fees. To avoid unexpected charges, we recommend you pass in a specific value. For details, see the API document.
         * @type {number || null}
         */
        this.IsTencentCdn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublishCdnUrl = 'PublishCdnUrl' in params ? params.PublishCdnUrl : null;
        this.IsTencentCdn = 'IsTencentCdn' in params ? params.IsTencentCdn : null;

    }
}

/**
 * The audio transcoding parameters for recording.
 * @class
 */
class AudioParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The audio sample rate.
1: 48000 Hz (default)
2: 44100 Hz
3: 16000 Hz
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * The number of sound channels.
1: Mono-channel
2: Dual-channel (default)
         * @type {number || null}
         */
        this.Channel = null;

        /**
         * The audio bitrate (bps). Value range: [32000, 128000]. Default: 64000.
         * @type {number || null}
         */
        this.BitRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.BitRate = 'BitRate' in params ? params.BitRate : null;

    }
}

/**
 * 
 * @class
 */
class WaterMarkTimestamp extends  AbstractModel {
    constructor(){
        super();

        /**
         * The position of the timestamp watermark. Valid values: `0` (top left), `1` (top right), `2` (bottom left), `3` (bottom right), `4` (top center), `5` (bottom center), `6` (center).
         * @type {number || null}
         */
        this.Pos = null;

        /**
         * The time zone. The default is UTC+8.
         * @type {number || null}
         */
        this.TimeZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Pos = 'Pos' in params ? params.Pos : null;
        this.TimeZone = 'TimeZone' in params ? params.TimeZone : null;

    }
}

/**
 * The information of a single stream relayed.
 * @class
 */
class SingleSubscribeParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The stream information.
         * @type {UserMediaStream || null}
         */
        this.UserMediaStream = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UserMediaStream) {
            let obj = new UserMediaStream();
            obj.deserialize(params.UserMediaStream)
            this.UserMediaStream = obj;
        }

    }
}

/**
 * The Watermark information.
 * @class
 */
class McuWaterMarkParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The watermark type. Valid values: `0` (default): Image; `1`: Text.
         * @type {number || null}
         */
        this.WaterMarkType = null;

        /**
         * The watermark image information. This parameter is required if `WaterMarkType` is 0.
         * @type {McuWaterMarkImage || null}
         */
        this.WaterMarkImage = null;

        /**
         * The text watermark configuration. This parameter is required if `WaterMarkType` is `1`.
         * @type {McuWaterMarkText || null}
         */
        this.WaterMarkText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WaterMarkType = 'WaterMarkType' in params ? params.WaterMarkType : null;

        if (params.WaterMarkImage) {
            let obj = new McuWaterMarkImage();
            obj.deserialize(params.WaterMarkImage)
            this.WaterMarkImage = obj;
        }

        if (params.WaterMarkText) {
            let obj = new McuWaterMarkText();
            obj.deserialize(params.WaterMarkText)
            this.WaterMarkText = obj;
        }

    }
}

/**
 * The information of an abnormal user experience and the possible causes.
 * @class
 */
class AbnormalExperience extends  AbstractModel {
    constructor(){
        super();

        /**
         * The user ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The abnormal experience ID.
         * @type {number || null}
         */
        this.ExperienceId = null;

        /**
         * The room ID (string).
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * The possible error events.
         * @type {Array.<AbnormalEvent> || null}
         */
        this.AbnormalEventList = null;

        /**
         * The report time.
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
 * SeriesInfos type
 * @class
 */
class SeriesInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data columns
         * @type {Array.<string> || null}
         */
        this.Columns = null;

        /**
         * Data values
         * @type {Array.<RowValues> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Columns = 'Columns' in params ? params.Columns : null;

        if (params.Values) {
            this.Values = new Array();
            for (let z in params.Values) {
                let obj = new RowValues();
                obj.deserialize(params.Values[z]);
                this.Values.push(obj);
            }
        }

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
    McuLayout: McuLayout,
    DescribeRelayUsageRequest: DescribeRelayUsageRequest,
    MixLayout: MixLayout,
    McuVideoParams: McuVideoParams,
    DescribeTRTCRealTimeScaleDataRequest: DescribeTRTCRealTimeScaleDataRequest,
    DescribeTRTCMarketScaleDataRequest: DescribeTRTCMarketScaleDataRequest,
    McuLayoutVolume: McuLayoutVolume,
    SetUserBlockedRequest: SetUserBlockedRequest,
    DescribeUserEventRequest: DescribeUserEventRequest,
    SetUserBlockedResponse: SetUserBlockedResponse,
    WaterMarkChar: WaterMarkChar,
    DescribeTrtcRoomUsageResponse: DescribeTrtcRoomUsageResponse,
    StopPublishCdnStreamResponse: StopPublishCdnStreamResponse,
    AbnormalEvent: AbnormalEvent,
    ScaleInfomation: ScaleInfomation,
    AgentParams: AgentParams,
    VideoEncodeParams: VideoEncodeParams,
    DescribeUserEventResponse: DescribeUserEventResponse,
    VideoEncode: VideoEncode,
    DescribeCallDetailInfoRequest: DescribeCallDetailInfoRequest,
    DescribeTRTCMarketScaleDataResponse: DescribeTRTCMarketScaleDataResponse,
    DescribeUserInfoRequest: DescribeUserInfoRequest,
    AudioEncodeParams: AudioEncodeParams,
    CloudStorage: CloudStorage,
    DescribeTrtcUsageResponse: DescribeTrtcUsageResponse,
    TimeValue: TimeValue,
    CreateCloudRecordingResponse: CreateCloudRecordingResponse,
    DescribeTRTCRealTimeScaleDataResponse: DescribeTRTCRealTimeScaleDataResponse,
    DescribeRoomInfoRequest: DescribeRoomInfoRequest,
    StorageParams: StorageParams,
    CloudVod: CloudVod,
    DescribeCallDetailInfoResponse: DescribeCallDetailInfoResponse,
    DescribeTRTCRealTimeQualityDataResponse: DescribeTRTCRealTimeQualityDataResponse,
    McuCustomCrop: McuCustomCrop,
    DescribeMixTranscodingUsageRequest: DescribeMixTranscodingUsageRequest,
    DescribeStreamIngestResponse: DescribeStreamIngestResponse,
    MixTranscodeParams: MixTranscodeParams,
    StopStreamIngestRequest: StopStreamIngestRequest,
    DescribeTRTCMarketQualityDataResponse: DescribeTRTCMarketQualityDataResponse,
    SubscribeStreamUserIds: SubscribeStreamUserIds,
    WaterMarkImage: WaterMarkImage,
    McuUserInfoParams: McuUserInfoParams,
    UserMediaStream: UserMediaStream,
    EventList: EventList,
    DescribeTrtcUsageRequest: DescribeTrtcUsageRequest,
    DescribeRoomInfoResponse: DescribeRoomInfoResponse,
    McuLayoutParams: McuLayoutParams,
    StartStreamIngestRequest: StartStreamIngestRequest,
    DescribeUserInfoResponse: DescribeUserInfoResponse,
    RemoveUserByStrRoomIdResponse: RemoveUserByStrRoomIdResponse,
    McuWaterMarkImage: McuWaterMarkImage,
    StartPublishCdnStreamResponse: StartPublishCdnStreamResponse,
    TrtcUsage: TrtcUsage,
    DescribeRelayUsageResponse: DescribeRelayUsageResponse,
    DescribeRecordingUsageResponse: DescribeRecordingUsageResponse,
    DescribeRecordingUsageRequest: DescribeRecordingUsageRequest,
    StorageFile: StorageFile,
    WaterMark: WaterMark,
    DescribeScaleInfoResponse: DescribeScaleInfoResponse,
    MixLayoutParams: MixLayoutParams,
    DescribeMixTranscodingUsageResponse: DescribeMixTranscodingUsageResponse,
    McuFeedBackRoomParams: McuFeedBackRoomParams,
    AudioEncode: AudioEncode,
    RemoveUserRequest: RemoveUserRequest,
    DismissRoomRequest: DismissRoomRequest,
    DescribeUnusualEventRequest: DescribeUnusualEventRequest,
    DescribeCloudRecordingRequest: DescribeCloudRecordingRequest,
    TencentVod: TencentVod,
    McuPassThrough: McuPassThrough,
    SetUserBlockedByStrRoomIdResponse: SetUserBlockedByStrRoomIdResponse,
    TRTCDataResult: TRTCDataResult,
    DescribeTRTCRealTimeQualityDataRequest: DescribeTRTCRealTimeQualityDataRequest,
    CreateCloudRecordingRequest: CreateCloudRecordingRequest,
    DeleteCloudRecordingResponse: DeleteCloudRecordingResponse,
    QualityData: QualityData,
    StopPublishCdnStreamRequest: StopPublishCdnStreamRequest,
    ModifyCloudRecordingRequest: ModifyCloudRecordingRequest,
    VideoParams: VideoParams,
    StartPublishCdnStreamRequest: StartPublishCdnStreamRequest,
    RowValues: RowValues,
    DismissRoomByStrRoomIdRequest: DismissRoomByStrRoomIdRequest,
    StartStreamIngestResponse: StartStreamIngestResponse,
    DeleteCloudRecordingRequest: DeleteCloudRecordingRequest,
    SetUserBlockedByStrRoomIdRequest: SetUserBlockedByStrRoomIdRequest,
    DescribeTrtcRoomUsageRequest: DescribeTrtcRoomUsageRequest,
    UserInformation: UserInformation,
    DescribeScaleInfoRequest: DescribeScaleInfoRequest,
    DismissRoomByStrRoomIdResponse: DismissRoomByStrRoomIdResponse,
    DescribeUnusualEventResponse: DescribeUnusualEventResponse,
    ModifyCloudRecordingResponse: ModifyCloudRecordingResponse,
    DescribeCloudRecordingResponse: DescribeCloudRecordingResponse,
    StopStreamIngestResponse: StopStreamIngestResponse,
    MixUserInfo: MixUserInfo,
    DismissRoomResponse: DismissRoomResponse,
    DescribeTRTCMarketQualityDataRequest: DescribeTRTCMarketQualityDataRequest,
    UpdatePublishCdnStreamRequest: UpdatePublishCdnStreamRequest,
    MaxVideoUser: MaxVideoUser,
    McuSeiParams: McuSeiParams,
    EventMessage: EventMessage,
    UpdatePublishCdnStreamResponse: UpdatePublishCdnStreamResponse,
    McuWaterMarkText: McuWaterMarkText,
    RoomState: RoomState,
    RemoveUserByStrRoomIdRequest: RemoveUserByStrRoomIdRequest,
    RecordParams: RecordParams,
    DescribeStreamIngestRequest: DescribeStreamIngestRequest,
    McuAudioParams: McuAudioParams,
    McuPublishCdnParam: McuPublishCdnParam,
    AudioParams: AudioParams,
    WaterMarkTimestamp: WaterMarkTimestamp,
    SingleSubscribeParams: SingleSubscribeParams,
    McuWaterMarkParams: McuWaterMarkParams,
    AbnormalExperience: AbnormalExperience,
    SeriesInfos: SeriesInfos,
    RemoveUserResponse: RemoveUserResponse,

}
