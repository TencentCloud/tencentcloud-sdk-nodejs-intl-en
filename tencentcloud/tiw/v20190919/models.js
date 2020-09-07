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
 * Mixed stream canvas parameter
 * @class
 */
class Canvas extends  AbstractModel {
    constructor(){
        super();

        /**
         * Width and height of the mixed stream canvas
         * @type {LayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * Background color, which is black by default. Its format is RGB. for example, "#FF0000" for the red color.
         * @type {string || null}
         */
        this.BackgroundColor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }
        this.BackgroundColor = 'BackgroundColor' in params ? params.BackgroundColor : null;

    }
}

/**
 * Custom mixed stream layout parameter
 * @class
 */
class LayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream image width. Value range: [2,3000]
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Stream image height. Value range: [2,3000]
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Offset of the top point in the upper-left corner of the current image to the X axis of the top point in the upper-left corner of the canvas. Default value: 0. Value range: [0,3000].
         * @type {number || null}
         */
        this.X = null;

        /**
         * Offset of the top point in the upper-left corner of the current image to the Y axis of the top point in the upper-left corner of the canvas. Default value: 0. Value range: [0,3000].
         * @type {number || null}
         */
        this.Y = null;

        /**
         * Z-axis position of the image. The default value is 0.
The Z axis determines the overlap sequence of images. The image with the largest z-axis value is at the top layer.
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
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.ZOrder = 'ZOrder' in params ? params.ZOrder : null;

    }
}

/**
 * A group of parameters for recording over specified streams. It specifies whether to disable the audio recording and whether to record high-resolution or low-resolution videos.
 * @class
 */
class StreamControl extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video stream ID
Description of the possible video stream ID values:
1. `tic_record_user`: the whiteboard video stream
2. `tic_substream`: the auxiliary video stream
3. Specific user ID: the video stream of the specified user

The actual recording uses the prefix match of the video stream ID. The real stream becomes the specified stream once its ID prefix matches with the stream ID.
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Whether to disable recording over the stream.

true: does not record this stream. This stream will not be included in the final recording file.
false: records this stream. This stream will be included in the final recording file.

Default value: false
         * @type {boolean || null}
         */
        this.DisableRecord = null;

        /**
         * Whether to disable the audio recording of the stream.

true: does not record the audio of the stream. In the final recording file, this stream will be soundless.
false: the stream has both video and audio recording.

Default value: false
         * @type {boolean || null}
         */
        this.DisableAudio = null;

        /**
         * Whether to only record low-resolution stream videos.

true: records only low-resolution videos. In this case, please make sure that the client pushes low-resolution videos upstream. Otherwise, the recorded video may be black. 
false: records only high-resolution videos.

Default value: false
         * @type {boolean || null}
         */
        this.PullSmallVideo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.DisableAudio = 'DisableAudio' in params ? params.DisableAudio : null;
        this.PullSmallVideo = 'PullSmallVideo' in params ? params.PullSmallVideo : null;

    }
}

/**
 * ResumeOnlineRecord response structure.
 * @class
 */
class ResumeOnlineRecordResponse extends  AbstractModel {
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
 * StartOnlineRecord request structure.
 * @class
 */
class StartOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the room for recording. Value range: (1, 4294967295)
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * User ID used by the real-time recording service for entering a room. Its format is `tic_record_user_${RoomId}_${Random}`, where `${RoomId}` indicates the ID of the room for recording and `${Random}` is a random string.
The ID must be an unused ID in the SDK. The real-time recording service uses the user ID to enter the room for audio, video, and whiteboard recording. If this ID is already used in the SDK, the SDK and recording service will conflict, affecting the recording operation.
         * @type {string || null}
         */
        this.RecordUserId = null;

        /**
         * Signature corresponding to RecordUserId
         * @type {string || null}
         */
        this.RecordUserSig = null;

        /**
         * (Disused) IM group ID of the whiteboard. By default, it is the same as the room ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Real-time recording video splicing parameter
         * @type {Concat || null}
         */
        this.Concat = null;

        /**
         * Real-time recording whiteboard parameter, such as the whiteboard width and height
         * @type {Whiteboard || null}
         */
        this.Whiteboard = null;

        /**
         * Real-time recording stream mixing parameter
Notes:
1. The stream mixing feature needs to be enabled separately. If you need the feature, contact TIW customer service.
2. To use the stream mixing feature, the Extras parameter is required and must contain "MIX_STREAM".
         * @type {MixStream || null}
         */
        this.MixStream = null;

        /**
         * List of advanced features used
List of possible values:
MIX_STREAM - Stream mixing feature
         * @type {Array.<string> || null}
         */
        this.Extras = null;

        /**
         * Whether to return the audio-only recording file of different streams in the result callback. The file format is mp3.
         * @type {boolean || null}
         */
        this.AudioFileNeeded = null;

        /**
         * A group of real-time recording parameters. It specifies the streams to be recorded, whether to disable the audio recording, and whether to record only low-resolution videos, etc.
         * @type {RecordControl || null}
         */
        this.RecordControl = null;

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
        this.RecordUserId = 'RecordUserId' in params ? params.RecordUserId : null;
        this.RecordUserSig = 'RecordUserSig' in params ? params.RecordUserSig : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.Concat) {
            let obj = new Concat();
            obj.deserialize(params.Concat)
            this.Concat = obj;
        }

        if (params.Whiteboard) {
            let obj = new Whiteboard();
            obj.deserialize(params.Whiteboard)
            this.Whiteboard = obj;
        }

        if (params.MixStream) {
            let obj = new MixStream();
            obj.deserialize(params.MixStream)
            this.MixStream = obj;
        }
        this.Extras = 'Extras' in params ? params.Extras : null;
        this.AudioFileNeeded = 'AudioFileNeeded' in params ? params.AudioFileNeeded : null;

        if (params.RecordControl) {
            let obj = new RecordControl();
            obj.deserialize(params.RecordControl)
            this.RecordControl = obj;
        }

    }
}

/**
 * DescribeOnlineRecordCallback request structure.
 * @class
 */
class DescribeOnlineRecordCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the application
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * DescribeOnlineRecordCallback response structure.
 * @class
 */
class DescribeOnlineRecordCallbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Callback address of the real-time recording event. If no callback address is set, this field is null.
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * Authentication key of the real-time recording callback
         * @type {string || null}
         */
        this.CallbackKey = null;

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
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetTranscodeCallback response structure.
 * @class
 */
class SetTranscodeCallbackResponse extends  AbstractModel {
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
 * StopOnlineRecord request structure.
 * @class
 */
class StopOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the recording task to stop
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
 * 
 * @class
 */
class StreamLayout extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {LayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * 
         * @type {string || null}
         */
        this.InputStreamId = null;

        /**
         * 
         * @type {string || null}
         */
        this.BackgroundColor = null;

        /**
         * Video filling mode.

0: self-adaption mode. Scales the video proportionally to completely display it in the specified area. In this mode, there may be black bars.
1: full-screen mode. Scales the video to make it fill the entire specified area. In this mode, no black bars will appear, but the video may not be displayed fully.
         * @type {number || null}
         */
        this.FillMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }
        this.InputStreamId = 'InputStreamId' in params ? params.InputStreamId : null;
        this.BackgroundColor = 'BackgroundColor' in params ? params.BackgroundColor : null;
        this.FillMode = 'FillMode' in params ? params.FillMode : null;

    }
}

/**
 * CreateTranscode response structure.
 * @class
 */
class CreateTranscodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the document transcoding task, which is used to query the task progress and transcoding result
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
 * Video information
 * @class
 */
class VideoInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video playback start time, in milliseconds
         * @type {number || null}
         */
        this.VideoPlayTime = null;

        /**
         * Video size, in bytes
         * @type {number || null}
         */
        this.VideoSize = null;

        /**
         * Video format
         * @type {string || null}
         */
        this.VideoFormat = null;

        /**
         * Video playback duration, in milliseconds
         * @type {number || null}
         */
        this.VideoDuration = null;

        /**
         * Video file URL
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * Video file ID
         * @type {string || null}
         */
        this.VideoId = null;

        /**
         * Video stream type - 0: camera video - 1: screen-sharing video - 2: whiteboard video - 3: mixed stream video - 4: audio-only (mp3)
         * @type {number || null}
         */
        this.VideoType = null;

        /**
         * ID of the user to which the camera video or screen-sharing video belongs (whiteboard video: null, mixed stream video: tic_mixstream_<Room ID>_<Mixed stream layout type>, auxiliary video: tic_substream_user ID)
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Width of the video resolution.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Height of the video resolution.
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
        this.VideoPlayTime = 'VideoPlayTime' in params ? params.VideoPlayTime : null;
        this.VideoSize = 'VideoSize' in params ? params.VideoSize : null;
        this.VideoFormat = 'VideoFormat' in params ? params.VideoFormat : null;
        this.VideoDuration = 'VideoDuration' in params ? params.VideoDuration : null;
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.VideoId = 'VideoId' in params ? params.VideoId : null;
        this.VideoType = 'VideoType' in params ? params.VideoType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * Custom mixed stream layout parameter
 * @class
 */
class CustomLayout extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mixed stream canvas parameter
         * @type {Canvas || null}
         */
        this.Canvas = null;

        /**
         * Stream layout. The layout of each stream cannot exceed the canvas area.
         * @type {Array.<StreamLayout> || null}
         */
        this.InputStreamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Canvas) {
            let obj = new Canvas();
            obj.deserialize(params.Canvas)
            this.Canvas = obj;
        }

        if (params.InputStreamList) {
            this.InputStreamList = new Array();
            for (let z in params.InputStreamList) {
                let obj = new StreamLayout();
                obj.deserialize(params.InputStreamList[z]);
                this.InputStreamList.push(obj);
            }
        }

    }
}

/**
 * SetTranscodeCallbackKey response structure.
 * @class
 */
class SetTranscodeCallbackKeyResponse extends  AbstractModel {
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
 * Real-time recording video splicing parameter
 * @class
 */
class Concat extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the video splicing feature
If the video splicing feature is enabled, the real-time recording service will splice multiple video clips resulting from the pause into one video.
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Download address of the padding image used during video splicing. If it is not specified, a pure black image is used by default.
         * @type {string || null}
         */
        this.Image = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Image = 'Image' in params ? params.Image : null;

    }
}

/**
 * DescribeOnlineRecord request structure.
 * @class
 */
class DescribeOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the real-time recording task
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
 * StartOnlineRecord response structure.
 * @class
 */
class StartOnlineRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the real-time recording task
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
 * Real-time recording whiteboard parameter, such as the whiteboard width and height
 * @class
 */
class Whiteboard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whiteboard video width in the real-time recording result. The default value is 1280.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Whiteboard video height in the real-time recording result. The default value is 960.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Whiteboard initialization parameter, which is passed through to the whiteboard SDK
         * @type {string || null}
         */
        this.InitParam = null;

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
        this.InitParam = 'InitParam' in params ? params.InitParam : null;

    }
}

/**
 * DescribeOnlineRecord response structure.
 * @class
 */
class DescribeOnlineRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recording stop reason
- AUTO: recording automatically stops because no upstream audio/video or whiteboard operation occurs in the room for a long time.
- USER_CALL: the API for stopping recording is called.
- EXCEPTION: an exception occurred during recording.
         * @type {string || null}
         */
        this.FinishReason = null;

        /**
         * ID of the recording task to be queried.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Recording task status
- PREPARED: preparing
- RECORDING: recording
- PAUSED: recording is paused.
- STOPPED: recording is stopped, and the recorded video is being processed and uploaded.
- FINISHED: the recorded video has been processed and uploaded, and the recording result is generated.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Room ID
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * Group ID of the whiteboard
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * ID of the recording user
         * @type {string || null}
         */
        this.RecordUserId = null;

        /**
         * Actual recording start time, which is a UNIX timestamp in seconds
         * @type {number || null}
         */
        this.RecordStartTime = null;

        /**
         * Actual recording stop time, which is a UNIX timestamp in seconds
         * @type {number || null}
         */
        this.RecordStopTime = null;

        /**
         * Total video playback duration, in milliseconds
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * Number of exceptions during recording
         * @type {number || null}
         */
        this.ExceptionCnt = null;

        /**
         * Duration to be deleted in the spliced video. This parameter is valid only when the video splicing feature is enabled.
         * @type {Array.<OmittedDuration> || null}
         */
        this.OmittedDurations = null;

        /**
         * List of recorded videos
         * @type {Array.<VideoInfo> || null}
         */
        this.VideoInfos = null;

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
        this.FinishReason = 'FinishReason' in params ? params.FinishReason : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RecordUserId = 'RecordUserId' in params ? params.RecordUserId : null;
        this.RecordStartTime = 'RecordStartTime' in params ? params.RecordStartTime : null;
        this.RecordStopTime = 'RecordStopTime' in params ? params.RecordStopTime : null;
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.ExceptionCnt = 'ExceptionCnt' in params ? params.ExceptionCnt : null;

        if (params.OmittedDurations) {
            this.OmittedDurations = new Array();
            for (let z in params.OmittedDurations) {
                let obj = new OmittedDuration();
                obj.deserialize(params.OmittedDurations[z]);
                this.OmittedDurations.push(obj);
            }
        }

        if (params.VideoInfos) {
            this.VideoInfos = new Array();
            for (let z in params.VideoInfos) {
                let obj = new VideoInfo();
                obj.deserialize(params.VideoInfos[z]);
                this.VideoInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTranscode request structure.
 * @class
 */
class CreateTranscodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Address of the file for transcoding
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Whether the PowerPoint file is static. The default value is False.
If IsStaticPPT is False, documents with the .ppt or .pptx extension will be dynamically transcoded to HTML5 pages, and documents with other extensions will be statically transcoded to images. If IsStaticPPT is True, documents with any extensions will be statically transcoded to images.
         * @type {boolean || null}
         */
        this.IsStaticPPT = null;

        /**
         * Minimum resolution of the transcoded document. If no value or null is specified for it or the resolution format is invalid, the original document resolution is used.

 
         * @type {string || null}
         */
        this.MinResolution = null;

        /**
         * Resolution of the thumbnail generated for the dynamically transcoded PowerPoint file. If no value or null is specified for it or the resolution format is invalid, no thumbnail will be generated. The resolution format is the same as that of MinResolution.

For static transcoding, this parameter does not work.
         * @type {string || null}
         */
        this.ThumbnailResolution = null;

        /**
         * Compression format of the transcoded file. If no value or null is specified for it or the specified format is invalid, no compression file will be generated. Currently, the following compression formats are supported:

`zip`: generates a .zip compression package.
`tar.gz: generates a .tar.gz compression package.
         * @type {string || null}
         */
        this.CompressFileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.IsStaticPPT = 'IsStaticPPT' in params ? params.IsStaticPPT : null;
        this.MinResolution = 'MinResolution' in params ? params.MinResolution : null;
        this.ThumbnailResolution = 'ThumbnailResolution' in params ? params.ThumbnailResolution : null;
        this.CompressFileType = 'CompressFileType' in params ? params.CompressFileType : null;

    }
}

/**
 * SetOnlineRecordCallbackKey response structure.
 * @class
 */
class SetOnlineRecordCallbackKeyResponse extends  AbstractModel {
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
 * PauseOnlineRecord response structure.
 * @class
 */
class PauseOnlineRecordResponse extends  AbstractModel {
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
 * SetTranscodeCallbackKey request structure.
 * @class
 */
class SetTranscodeCallbackKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the application
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Authentication key for the document transcoding callback. It is a string that can have up to 64 characters. If an empty string is passed in, the existing callback authentication key will be deleted. For more information about callback authentication, please [see here](https://intl.cloud.tencent.com/document/product/1137/40257?from_cn_redirect=1).
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * DescribeTranscode request structure.
 * @class
 */
class DescribeTranscodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Unique ID of the document transcoding task
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
 * DescribeTranscode response structure.
 * @class
 */
class DescribeTranscodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of document pages
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Transcoding progress. Value range: 0 to 100
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Document resolution
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * URL of the transcoding result
Dynamic transcoding: link of the HTML5 page transcoded from a PowerPoint file
Static transcoding: URL prefix of the image transcoded for each document page. For example, if the URL prefix is `http://example.com/g0jb42ps49vtebjshilb/`, the image URL of the first page is
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`, and so on.
         * @type {string || null}
         */
        this.ResultUrl = null;

        /**
         * Current task state
- QUEUED: queuing for transcoding
- PROCESSING: transcoding is in progress
- FINISHED: transcoded
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Unique ID of the transcoding task
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Document name
         * @type {string || null}
         */
        this.Title = null;

        /**
         * URL prefix of the thumbnail. If the URL prefix is `http://example.com/g0jb42ps49vtebjshilb/ `, the thumbnail URL for the first page of the dynamically transcoded PowerPoint file is
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`, and so on.

If the document transcoding request carries the ThumbnailResolution parameter and the transcoding type is dynamic transcoding, this parameter is not null. In other cases, this parameter is null.
         * @type {string || null}
         */
        this.ThumbnailUrl = null;

        /**
         * Resolution of the thumbnail generated for dynamic transcoding
         * @type {string || null}
         */
        this.ThumbnailResolution = null;

        /**
         * URL for downloading the transcoded and compressed file. If `CompressFileType` carried in the document transcoding request is null or is not a supported compression format, this parameter is null.
         * @type {string || null}
         */
        this.CompressFileUrl = null;

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
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.ThumbnailUrl = 'ThumbnailUrl' in params ? params.ThumbnailUrl : null;
        this.ThumbnailResolution = 'ThumbnailResolution' in params ? params.ThumbnailResolution : null;
        this.CompressFileUrl = 'CompressFileUrl' in params ? params.CompressFileUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetOnlineRecordCallback response structure.
 * @class
 */
class SetOnlineRecordCallbackResponse extends  AbstractModel {
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
 * SetOnlineRecordCallbackKey request structure.
 * @class
 */
class SetOnlineRecordCallbackKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the application
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Authentication key for the real-time recording callback. It is a string that can have up to 64 characters. If an empty string is passed in, the existing callback authentication key will be deleted. For more information, please [see here](https://intl.cloud.tencent.com/document/product/1137/40257?from_cn_redirect=1).
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * StopOnlineRecord response structure.
 * @class
 */
class StopOnlineRecordResponse extends  AbstractModel {
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
 * DescribeTranscodeCallback request structure.
 * @class
 */
class DescribeTranscodeCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the application
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * ResumeOnlineRecord request structure.
 * @class
 */
class ResumeOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the resumed real-time recording task
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
 * DescribeTranscodeCallback response structure.
 * @class
 */
class DescribeTranscodeCallbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Document transcoding callback address
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * Authentication key of the document transcoding callback
         * @type {string || null}
         */
        this.CallbackKey = null;

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
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetTranscodeCallback request structure.
 * @class
 */
class SetTranscodeCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Callback address for the document transcoding progress. If an empty string is passed in, the existing callback address will be deleted. The callback address only supports the HTTP or HTTPS protocol, so the callback address must start with `http://` or `https://`.
For more information about the callback format, please [see here](https://intl.cloud.tencent.com/document/product/1137/40260?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Callback = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

/**
 * It specifies the global recording parameters and the recording parameters over a specific stream. For example, you can specify the streams you want to record and whether to record low-resolution videos only.
 * @class
 */
class RecordControl extends  AbstractModel {
    constructor(){
        super();

        /**
         * It specifies whether to enable RecordControl. Valid values: true (yes); false (no).
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * A global parameter generally used in conjunction with `StreamControls` that specifies whether to disable recording. Valid values:

true: no stream is recorded.
false: all streams are recorded. Default value: false.

The setting in this parameter is applied to all streams. However, if `StreamControls` is passed in, the parameters in `StreamControls` will take precedence.
         * @type {boolean || null}
         */
        this.DisableRecord = null;

        /**
         * A global parameter generally used in conjunction with `StreamControls` that specifies whether to disable audio recording over all streams. Valid values:

true: no audio recording of any streams.
false: audio recording of all streams. Default value: false.

The setting in this parameter is applied to all streams. However, if `StreamControls` is passed in, the parameters in `StreamControls` will take precedence.
         * @type {boolean || null}
         */
        this.DisableAudio = null;

        /**
         * A global parameter generally used in conjunction with `StreamControls` that specifies whether to record low-resolution videos only. Valid values:

true: only records low-resolution videos for all streams. Please ensure that the up-streaming end pushes the low-resolution videos. Otherwise, the recorded video may be black.
false: high-resolution video recording of all streams. Default value: false.

The setting in this parameter is applied to all streams. However, if `StreamControls` is passed in, the parameters in `StreamControls` will take precedence.
         * @type {boolean || null}
         */
        this.PullSmallVideo = null;

        /**
         * Parameters over specific streams, which take priority over global configurations. If it’s empty, all streams are recorded according to the global configurations. 
         * @type {Array.<StreamControl> || null}
         */
        this.StreamControls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.DisableAudio = 'DisableAudio' in params ? params.DisableAudio : null;
        this.PullSmallVideo = 'PullSmallVideo' in params ? params.PullSmallVideo : null;

        if (params.StreamControls) {
            this.StreamControls = new Array();
            for (let z in params.StreamControls) {
                let obj = new StreamControl();
                obj.deserialize(params.StreamControls[z]);
                this.StreamControls.push(obj);
            }
        }

    }
}

/**
 * SetOnlineRecordCallback request structure.
 * @class
 */
class SetOnlineRecordCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Callback address of the real-time recording task result. If an empty string is passed in, the existing callback address will be deleted. The callback address only supports the HTTP or HTTPS protocol, so the callback address must start with `http://` or `https://`. For the callback format, please [see here](https://intl.cloud.tencent.com/document/product/1137/40258?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Callback = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

/**
 * Stream mixing configuration
 * @class
 */
class MixStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether stream mixing is enabled
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Whether audio stream mixing is disabled
         * @type {boolean || null}
         */
        this.DisableAudio = null;

        /**
         * ID of the embedded mixed stream layout template. Valid values: 1 and 2. For more information on the differences of both values, see the sample embedded mixed stream layout template.
If the Custom field is not specified, ModelId is required.
         * @type {number || null}
         */
        this.ModelId = null;

        /**
         * ID of a teacher account
This field is valid only when ModelId is specified.
If you specify TeacherID for a user, the user's video stream will be displayed in the first image of the embedded template.
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * Custom mixed stream layout parameter
If this parameter is available, the ModelId and TeacherId fields will be ignored.
         * @type {CustomLayout || null}
         */
        this.Custom = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.DisableAudio = 'DisableAudio' in params ? params.DisableAudio : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;

        if (params.Custom) {
            let obj = new CustomLayout();
            obj.deserialize(params.Custom)
            this.Custom = obj;
        }

    }
}

/**
 * Duration to be ignored in the spliced video
 * @class
 */
class OmittedDuration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset of the paused time in the spliced video, in milliseconds
         * @type {number || null}
         */
        this.VideoTime = null;

        /**
         * Recording pause timestamp, in milliseconds
         * @type {number || null}
         */
        this.PauseTime = null;

        /**
         * Recording resumption timestamp, in milliseconds
         * @type {number || null}
         */
        this.ResumeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VideoTime = 'VideoTime' in params ? params.VideoTime : null;
        this.PauseTime = 'PauseTime' in params ? params.PauseTime : null;
        this.ResumeTime = 'ResumeTime' in params ? params.ResumeTime : null;

    }
}

/**
 * PauseOnlineRecord request structure.
 * @class
 */
class PauseOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the real-time recording task
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

module.exports = {
    Canvas: Canvas,
    LayoutParams: LayoutParams,
    StreamControl: StreamControl,
    ResumeOnlineRecordResponse: ResumeOnlineRecordResponse,
    StartOnlineRecordRequest: StartOnlineRecordRequest,
    DescribeOnlineRecordCallbackRequest: DescribeOnlineRecordCallbackRequest,
    DescribeOnlineRecordCallbackResponse: DescribeOnlineRecordCallbackResponse,
    SetTranscodeCallbackResponse: SetTranscodeCallbackResponse,
    StopOnlineRecordRequest: StopOnlineRecordRequest,
    StreamLayout: StreamLayout,
    CreateTranscodeResponse: CreateTranscodeResponse,
    VideoInfo: VideoInfo,
    CustomLayout: CustomLayout,
    SetTranscodeCallbackKeyResponse: SetTranscodeCallbackKeyResponse,
    Concat: Concat,
    DescribeOnlineRecordRequest: DescribeOnlineRecordRequest,
    StartOnlineRecordResponse: StartOnlineRecordResponse,
    Whiteboard: Whiteboard,
    DescribeOnlineRecordResponse: DescribeOnlineRecordResponse,
    CreateTranscodeRequest: CreateTranscodeRequest,
    SetOnlineRecordCallbackKeyResponse: SetOnlineRecordCallbackKeyResponse,
    PauseOnlineRecordResponse: PauseOnlineRecordResponse,
    SetTranscodeCallbackKeyRequest: SetTranscodeCallbackKeyRequest,
    DescribeTranscodeRequest: DescribeTranscodeRequest,
    DescribeTranscodeResponse: DescribeTranscodeResponse,
    SetOnlineRecordCallbackResponse: SetOnlineRecordCallbackResponse,
    SetOnlineRecordCallbackKeyRequest: SetOnlineRecordCallbackKeyRequest,
    StopOnlineRecordResponse: StopOnlineRecordResponse,
    DescribeTranscodeCallbackRequest: DescribeTranscodeCallbackRequest,
    ResumeOnlineRecordRequest: ResumeOnlineRecordRequest,
    DescribeTranscodeCallbackResponse: DescribeTranscodeCallbackResponse,
    SetTranscodeCallbackRequest: SetTranscodeCallbackRequest,
    RecordControl: RecordControl,
    SetOnlineRecordCallbackRequest: SetOnlineRecordCallbackRequest,
    MixStream: MixStream,
    OmittedDuration: OmittedDuration,
    PauseOnlineRecordRequest: PauseOnlineRecordRequest,

}
