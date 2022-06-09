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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
0: Tencent Cloud COS. The storage services of other providers are not supported currently.
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
         * The download URL of the background image for a window. The image must be in JPG or PNG format and cannot be larger than 5 MB. If the image’s aspect ratio is different from that of the window, the image will be rendered according to the value of `RenderMode`.
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
 * The storage parameters.
 * @class
 */
class StorageParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * The cloud storage information.
         * @type {CloudStorage || null}
         */
        this.CloudStorage = null;

        /**
         * The VOD information.
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
1: Single-stream recording. Records the audio and video of each subscribed user (`UserId`) in a room and saves the recording files (M3U8/TS) to the cloud.
2: Mixed-stream recording. Mixes the audios and videos of subscribed users (`UserId`) in a room, records the mixed stream, and saves the recording files (M3U8/TS) to the cloud.
         * @type {number || null}
         */
        this.RecordMode = null;

        /**
         * The time period (seconds) to wait after there are no anchors in a room to stop recording automatically. The value cannot be smaller than 5 or larger than 86400 (24 hours). Default value: 30.
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
         * The format of recording files. 0 (default): HLS; 1: HLS + MP4 (recorded in HLS and converted to MP4).
         * @type {number || null}
         */
        this.OutputFormat = null;

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
         * The [user ID](https://intl.cloud.tencent.com/document/product/647/37714) of the recording robot in the TRTC room, which cannot be the same as a user ID already in use. We recommend you include this user ID in the room ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The signature (similar to login password) required for the recording robot to enter the room. For information on how to calculate the signature, see [What is UserSig?](https://intl.cloud.tencent.com/document/product/647/38104). |
         * @type {string || null}
         */
        this.UserSig = null;

        /**
         * The on-cloud recording parameters.
         * @type {RecordParams || null}
         */
        this.RecordParams = null;

        /**
         * The cloud storage parameters.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
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
         * The download URL of the background image for the canvas, which must be in JPG or PNG format and cannot be larger than 5 MB.
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
         * The download URL of the default background image for a window. The image must be in JPG or PNG format and cannot be larger than 5 MB. If the image’s aspect ratio is different from that of the window, the image will be rendered according to the value of `RenderMode`.
         * @type {string || null}
         */
        this.DefaultSubBackgroundImage = null;

        /**
         * The watermark layout. Up to 25 watermarks are supported.
         * @type {Array.<WaterMark> || null}
         */
        this.WaterMarkList = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateCloudRecordingResponse: CreateCloudRecordingResponse,
    CloudStorage: CloudStorage,
    StorageFile: StorageFile,
    WaterMark: WaterMark,
    DescribeCloudRecordingResponse: DescribeCloudRecordingResponse,
    DismissRoomByStrRoomIdRequest: DismissRoomByStrRoomIdRequest,
    DismissRoomResponse: DismissRoomResponse,
    MixLayout: MixLayout,
    RemoveUserRequest: RemoveUserRequest,
    StorageParams: StorageParams,
    DismissRoomRequest: DismissRoomRequest,
    RemoveUserByStrRoomIdResponse: RemoveUserByStrRoomIdResponse,
    DescribeCloudRecordingRequest: DescribeCloudRecordingRequest,
    TencentVod: TencentVod,
    RecordParams: RecordParams,
    CreateCloudRecordingRequest: CreateCloudRecordingRequest,
    DeleteCloudRecordingResponse: DeleteCloudRecordingResponse,
    MixTranscodeParams: MixTranscodeParams,
    RemoveUserByStrRoomIdRequest: RemoveUserByStrRoomIdRequest,
    SubscribeStreamUserIds: SubscribeStreamUserIds,
    ModifyCloudRecordingRequest: ModifyCloudRecordingRequest,
    VideoParams: VideoParams,
    WaterMarkImage: WaterMarkImage,
    CloudVod: CloudVod,
    MixLayoutParams: MixLayoutParams,
    DeleteCloudRecordingRequest: DeleteCloudRecordingRequest,
    RemoveUserResponse: RemoveUserResponse,
    AudioParams: AudioParams,
    DismissRoomByStrRoomIdResponse: DismissRoomByStrRoomIdResponse,
    ModifyCloudRecordingResponse: ModifyCloudRecordingResponse,

}
