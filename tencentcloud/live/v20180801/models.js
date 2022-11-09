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
 * CreateLiveSnapshotRule request structure.
 * @class
 */
class CreateLiveSnapshotRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
Note: if this parameter is a non-empty string, the rule will take effect only for the particular stream.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * The time shifting billing data.
 * @class
 */
class TimeShiftBillData extends  AbstractModel {
    constructor(){
        super();

        /**
         * The push domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The time-shift video length (minutes).
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * The time-shift days.
         * @type {number || null}
         */
        this.StoragePeriod = null;

        /**
         * The time for the data returned. Format: YYYY-MM-DDThh:mm:ssZ.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * The total time-shift duration (minutes).
         * @type {number || null}
         */
        this.TotalDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.StoragePeriod = 'StoragePeriod' in params ? params.StoragePeriod : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.TotalDuration = 'TotalDuration' in params ? params.TotalDuration : null;

    }
}

/**
 * EnableLiveDomain response structure.
 * @class
 */
class EnableLiveDomainResponse extends  AbstractModel {
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
 * DescribeUploadStreamNums response structure.
 * @class
 */
class DescribeUploadStreamNumsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Detailed data.
         * @type {Array.<ConcurrentRecordStreamNum> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new ConcurrentRecordStreamNum();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopRecordTask response structure.
 * @class
 */
class StopRecordTaskResponse extends  AbstractModel {
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
 * DescribeDeliverBandwidthList response structure.
 * @class
 */
class DescribeDeliverBandwidthListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billable bandwidth of live stream relaying.
         * @type {Array.<BandwidthInfo> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new BandwidthInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveRecordRule request structure.
 * @class
 */
class DeleteLiveRecordRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
Domain name+AppName+StreamName uniquely identifies a single transcoding rule. If you need to delete it, strong match is required. For example, even if AppName is blank, you need to pass in a blank string to make a strong match.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
Domain name+AppName+StreamName uniquely identifies a single transcoding rule. If you need to delete it, strong match is required. For example, even if AppName is blank, you need to pass in a blank string to make a strong match.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
Domain name+AppName+StreamName uniquely identifies a single transcoding rule. If you need to delete it, strong match is required. For example, even if AppName is blank, you need to pass in a blank string to make a strong match.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * ResumeLiveStream request structure.
 * @class
 */
class ResumeLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Your push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DeleteLiveTranscodeTemplate response structure.
 * @class
 */
class DeleteLiveTranscodeTemplateResponse extends  AbstractModel {
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
 * Special FLV recording setting.
 * @class
 */
class FlvSpecialParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable upload while recording. This parameter is only valid for FLV recording.
         * @type {boolean || null}
         */
        this.UploadInRecording = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UploadInRecording = 'UploadInRecording' in params ? params.UploadInRecording : null;

    }
}

/**
 * Transcoding template information.
 * @class
 */
class TemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Codec: h264/h265/origin. Default value: h264.

origin: keep the original codec.
         * @type {string || null}
         */
        this.Vcodec = null;

        /**
         * Video bitrate. Value range: 0–8,000 Kbps.
If the value is 0, the original bitrate will be retained.
Note: transcoding templates require a unique bitrate. The final saved bitrate may differ from the input bitrate.
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * Audio codec: aac. Default value: aac.
Note: This parameter will not take effect for now and will be supported soon.
         * @type {string || null}
         */
        this.Acodec = null;

        /**
         * Audio bitrate. Value range: 0–500 Kbps.
0 by default.
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * Width. Default value: 0.
Value range: [0-3,000].
The value must be a multiple of 2. The original width is 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Height. Default value: 0.
Value range: [0-3,000].
The value must be a multiple of 2. The original width is 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Frame rate. Default value: 0.
Range: 0-60 Fps.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Keyframe interval, unit: second.
Original interval by default
Range: 2-6
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * Rotation angle. Default value: 0.
Value range: 0, 90, 180, 270
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * Encoding quality:
baseline/main/high. Default value: baseline.
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * Whether to use the original bitrate when the set bitrate is larger than the original bitrate.
0: no, 1: yes
Default value: 0.
         * @type {number || null}
         */
        this.BitrateToOrig = null;

        /**
         * Whether to use the original height when the set height is higher than the original height.
0: no, 1: yes
Default value: 0.
         * @type {number || null}
         */
        this.HeightToOrig = null;

        /**
         * Whether to use the original frame rate when the set frame rate is larger than the original frame rate.
0: no, 1: yes
Default value: 0.
         * @type {number || null}
         */
        this.FpsToOrig = null;

        /**
         * Whether to keep the video. 0: no; 1: yes.
         * @type {number || null}
         */
        this.NeedVideo = null;

        /**
         * Whether to keep the audio. 0: no; 1: yes.
         * @type {number || null}
         */
        this.NeedAudio = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether it is a top speed codec template. 0: no, 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.AiTransCode = null;

        /**
         * Bitrate compression ratio of top speed code video.
Target bitrate of top speed code = VideoBitrate * (1-AdaptBitratePercent)

Value range: 0.0-0.5.
         * @type {number || null}
         */
        this.AdaptBitratePercent = null;

        /**
         * Whether to take the shorter side as height. 0: no, 1: yes. Default value: 0.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.ShortEdgeAsHeight = null;

        /**
         * The DRM encryption type. Valid values: fairplay, normalaes, widevine.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DRMType = null;

        /**
         * The tracks to encrypt. Valid values: AUDIO, SD, HD, UHD1, UHD2. Separate multiple tracks with “|”. You can choose only one video track (SD, HD, UHD1, or UHD2).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DRMTracks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vcodec = 'Vcodec' in params ? params.Vcodec : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.Acodec = 'Acodec' in params ? params.Acodec : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.BitrateToOrig = 'BitrateToOrig' in params ? params.BitrateToOrig : null;
        this.HeightToOrig = 'HeightToOrig' in params ? params.HeightToOrig : null;
        this.FpsToOrig = 'FpsToOrig' in params ? params.FpsToOrig : null;
        this.NeedVideo = 'NeedVideo' in params ? params.NeedVideo : null;
        this.NeedAudio = 'NeedAudio' in params ? params.NeedAudio : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AiTransCode = 'AiTransCode' in params ? params.AiTransCode : null;
        this.AdaptBitratePercent = 'AdaptBitratePercent' in params ? params.AdaptBitratePercent : null;
        this.ShortEdgeAsHeight = 'ShortEdgeAsHeight' in params ? params.ShortEdgeAsHeight : null;
        this.DRMType = 'DRMType' in params ? params.DRMType : null;
        this.DRMTracks = 'DRMTracks' in params ? params.DRMTracks : null;

    }
}

/**
 * DeleteLiveCallbackRule response structure.
 * @class
 */
class DeleteLiveCallbackRuleResponse extends  AbstractModel {
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
 * ResumeDelayLiveStream request structure.
 * @class
 */
class ResumeDelayLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DescribeLiveStreamPublishedList request structure.
 * @class
 */
class DescribeLiveStreamPublishedListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Your push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * End time.
In UTC format, such as 2016-06-30T19:00:00Z.
This cannot be after the current time.
Note: The difference between EndTime and StartTime cannot be greater than 30 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Start time. 
In UTC format, such as 2016-06-29T19:00:00Z.
This supports querying data in the past 60 days.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default. Fuzzy match is not supported.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Page number to get.
Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page.
Maximum value: 100
Valid values: integers between 10 and 100
Default value: 10
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Stream name, which supports fuzzy match.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DescribeLiveCallbackTemplate response structure.
 * @class
 */
class DescribeLiveCallbackTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Callback template information.
         * @type {CallBackTemplateInfo || null}
         */
        this.Template = null;

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

        if (params.Template) {
            let obj = new CallBackTemplateInfo();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLivePullStreamTask request structure.
 * @class
 */
class CreateLivePullStreamTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The source type. Valid values:
PullLivePushLive: Live streaming
PullVodPushLive: Video files
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * The source URL(s).
If `SourceType` is `PullLivePushLive`, you can specify only one source URL.
If `SourceType` is `PullVodPushLive`, you can specify at most 30 source URLs.
Supported file formats: FLV, MP4, HLS.
Supported protocols: HTTP, HTTPS, RTMP, RTMPS, RTSP, SRT.
Notes:
1. We recommend you use FLV files as the source. Poorly interleaved MP4 files may result in playback stuttering. You can also re-interleave your MP4 files before adding them as the source.
2. Do not use private network domains or malicious URLs. CSS will block accounts that do.
3. To avoid push and playback issues, make sure the source files are properly interleaved.
4. Supported video coding formats: H.264, H.265.
5. Supported audio coding format: AAC.
6. Use small video files, preferably not longer than one hour. Large files may take a long time to load or resume after pause. Relay may fail if the time consumed exceeds 15 seconds.
         * @type {Array.<string> || null}
         */
        this.SourceUrls = null;

        /**
         * The push domain name.
The pulled stream is pushed to this domain.
Note: If the destination is not a CSS address and its format is different from that of CSS addresses, pass the full address to `ToUrl`. For details, see the description of the `ToUrl` parameter.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * The application to push to.
The pulled stream is pushed to this application.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * The stream name.
The pulled stream is pushed under this name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * The start time.
It must be in UTC format.
Example: 2019-01-08T10:00:00Z.
Note: Beijing time is 8 hours ahead of UTC. The [ISO 8601 format](https://intl.cloud.tencent.com/document/product/266/11732#iso-date-format) is used.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time. Notes:
1. The end time must be later than the start time.
2. The end time and start time must be later than the current time.
3. The end time and start time must be less than seven days apart.
It must be in UTC format.
Example: 2019-01-08T10:00:00Z.
Note: Beijing time is 8 hours ahead of UTC. The [ISO 8601 format](https://intl.cloud.tencent.com/document/product/266/11732#iso-date-format) is used.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The operator.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * The push parameter.
This is a custom parameter carried during push.
Example:
bak=1&test=2
         * @type {string || null}
         */
        this.PushArgs = null;

        /**
         * The events to listen for. If you do not pass this parameter, all events will be listened for.
TaskStart: Callback for starting a task
TaskExit: Callback for ending a task
VodSourceFileStart: Callback for starting to pull from video files
VodSourceFileFinish: Callback for stopping pulling from video files
ResetTaskConfig: Callback for modifying a task

`TaskAlarm` indicates a warning event. `AlarmType` examples:
PullFileUnstable: Pull from video files is unstable.
PushStreamUnstable: Push is unstable.
PullFileFailed: Error pulling from video files.
PushStreamFailed: Push error.
FileEndEarly: The video file ended prematurely.
         * @type {Array.<string> || null}
         */
        this.CallbackEvents = null;

        /**
         * The number of times to loop video files. Default value: -1.
-1: Loop indefinitely
0: Do not loop
> 0: The number of loop times. A task will end either when the videos are looped for the specified number of times or at the specified task end time, whichever is earlier.
This parameter is valid only when the source is video files.
         * @type {string || null}
         */
        this.VodLoopTimes = null;

        /**
         * The behavior after the source video files (`SourceUrls`) are changed.
ImmediateNewSource: Play the new videos immediately
ContinueBreakPoint: Play the new videos after the current video is finished playing (the remaining videos in the old playlist will not be played).

This parameter is valid only if the source before the change is video files.
         * @type {string || null}
         */
        this.VodRefreshType = null;

        /**
         * A custom callback URL.
Callbacks about pull and relay events will be sent to this URL.
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * Other parameters.
For example, you can use `ignore_region` to ignore the region passed in and assign a region based on load distribution.
         * @type {string || null}
         */
        this.ExtraCmd = null;

        /**
         * The remarks for a task, not longer than 512 bytes.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * The complete destination URL.
If you specify this parameter, make sure you pass in an empty string for `DomainName`, `AppName`, and `StreamName`.

Note: Make sure that the expiration time of the signature is later than the task end time.
         * @type {string || null}
         */
        this.ToUrl = null;

        /**
         * The backup source type.
PullLivePushLive: Live streaming
PullVodPushLive: Video files
Notes:
1. Backup sources are supported only if the primary source type is live streaming.
2. When pull from the primary source is interrupted, the system will pull from the backup source.
3. If the backup source is a video file, each time the video is finished, the system will check if the primary source is recovered and will switch back if it is.
         * @type {string || null}
         */
        this.BackupSourceType = null;

        /**
         * The URL of the backup source.
You can specify only one backup source URL.
         * @type {string || null}
         */
        this.BackupSourceUrl = null;

        /**
         * The information of watermarks to add.
Notes:
1. You can add up to four watermarks to different locations of the video.
2. Make sure you use publicly accessible URLs for the watermark images.
3. Supported image formats include PNG, JPG, and GIF.
         * @type {Array.<PullPushWatermarkInfo> || null}
         */
        this.WatermarkList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.SourceUrls = 'SourceUrls' in params ? params.SourceUrls : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.PushArgs = 'PushArgs' in params ? params.PushArgs : null;
        this.CallbackEvents = 'CallbackEvents' in params ? params.CallbackEvents : null;
        this.VodLoopTimes = 'VodLoopTimes' in params ? params.VodLoopTimes : null;
        this.VodRefreshType = 'VodRefreshType' in params ? params.VodRefreshType : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.ExtraCmd = 'ExtraCmd' in params ? params.ExtraCmd : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.ToUrl = 'ToUrl' in params ? params.ToUrl : null;
        this.BackupSourceType = 'BackupSourceType' in params ? params.BackupSourceType : null;
        this.BackupSourceUrl = 'BackupSourceUrl' in params ? params.BackupSourceUrl : null;

        if (params.WatermarkList) {
            this.WatermarkList = new Array();
            for (let z in params.WatermarkList) {
                let obj = new PullPushWatermarkInfo();
                obj.deserialize(params.WatermarkList[z]);
                this.WatermarkList.push(obj);
            }
        }

    }
}

/**
 * DeleteLiveSnapshotTemplate request structure.
 * @class
 */
class DeleteLiveSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
1. Get from the returned value of the [CreateLiveSnapshotTemplate](https://intl.cloud.tencent.com/document/product/267/32624?from_cn_redirect=1) API call.
2. You can query the list of created screencapturing templates through the [DescribeLiveSnapshotTemplates](https://intl.cloud.tencent.com/document/product/267/32619?from_cn_redirect=1) API.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DeleteLiveTranscodeRule request structure.
 * @class
 */
class DeleteLiveTranscodeRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * Push authentication key information.
 * @class
 */
class PushAuthKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Whether to enable. 0: disabled; 1: enabled.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Master authentication key.
         * @type {string || null}
         */
        this.MasterAuthKey = null;

        /**
         * Standby authentication key.
         * @type {string || null}
         */
        this.BackupAuthKey = null;

        /**
         * Validity period in seconds.
         * @type {number || null}
         */
        this.AuthDelta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.MasterAuthKey = 'MasterAuthKey' in params ? params.MasterAuthKey : null;
        this.BackupAuthKey = 'BackupAuthKey' in params ? params.BackupAuthKey : null;
        this.AuthDelta = 'AuthDelta' in params ? params.AuthDelta : null;

    }
}

/**
 * DeleteLiveRecordTemplate request structure.
 * @class
 */
class DeleteLiveRecordTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID obtained through the `DescribeRecordTemplates` API.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DeleteLiveCallbackTemplate response structure.
 * @class
 */
class DeleteLiveCallbackTemplateResponse extends  AbstractModel {
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
 * DescribeLiveStreamOnlineList response structure.
 * @class
 */
class DescribeLiveStreamOnlineListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of eligible ones.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries displayed per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Active push information list.
         * @type {Array.<StreamOnlineInfo> || null}
         */
        this.OnlineInfo = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.OnlineInfo) {
            this.OnlineInfo = new Array();
            for (let z in params.OnlineInfo) {
                let obj = new StreamOnlineInfo();
                obj.deserialize(params.OnlineInfo[z]);
                this.OnlineInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLivePlayAuthKey request structure.
 * @class
 */
class ModifyLivePlayAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Whether to enable. 0: disabled; 1: enabled.
If this parameter is left empty, the current value will not be modified.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Authentication key.
If this parameter is left empty, the current value will not be modified.
         * @type {string || null}
         */
        this.AuthKey = null;

        /**
         * Validity period in seconds.
If this parameter is left empty, the current value will not be modified.
         * @type {number || null}
         */
        this.AuthDelta = null;

        /**
         * Backup authentication key.
If this parameter is left empty, the current value will not be modified.
         * @type {string || null}
         */
        this.AuthBackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;
        this.AuthDelta = 'AuthDelta' in params ? params.AuthDelta : null;
        this.AuthBackKey = 'AuthBackKey' in params ? params.AuthBackKey : null;

    }
}

/**
 * DescribeLiveDelayInfoList request structure.
 * @class
 */
class DescribeLiveDelayInfoListRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * Domain name certificate information
 * @class
 */
class DomainCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID.
         * @type {number || null}
         */
        this.CertId = null;

        /**
         * Certificate name.
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time in UTC format.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Certificate content.
         * @type {string || null}
         */
        this.HttpsCrt = null;

        /**
         * Certificate type.
0: user-added certificate
1: Tencent Cloud-hosted certificate.
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * Certificate expiration time in UTC format.
         * @type {string || null}
         */
        this.CertExpireTime = null;

        /**
         * Domain name that uses this certificate.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Certificate status.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * List of domain names in the certificate.
["*.x.com"] for example.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.CertDomains = null;

        /**
         * Tencent Cloud SSL certificate ID.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CloudCertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.HttpsCrt = 'HttpsCrt' in params ? params.HttpsCrt : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertExpireTime = 'CertExpireTime' in params ? params.CertExpireTime : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CertDomains = 'CertDomains' in params ? params.CertDomains : null;
        this.CloudCertId = 'CloudCertId' in params ? params.CloudCertId : null;

    }
}

/**
 * Recording template information
 * @class
 */
class RecordTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Message description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * FLV recording parameter.
         * @type {RecordParam || null}
         */
        this.FlvParam = null;

        /**
         * HLS recording parameter.
         * @type {RecordParam || null}
         */
        this.HlsParam = null;

        /**
         * MP4 recording parameter.
         * @type {RecordParam || null}
         */
        this.Mp4Param = null;

        /**
         * AAC recording parameter.
         * @type {RecordParam || null}
         */
        this.AacParam = null;

        /**
         * 0: LVB,
1: LCB.
         * @type {number || null}
         */
        this.IsDelayLive = null;

        /**
         * A special parameter for HLS recording.
         * @type {HlsSpecialParam || null}
         */
        this.HlsSpecialParam = null;

        /**
         * MP3 recording parameter.
         * @type {RecordParam || null}
         */
        this.Mp3Param = null;

        /**
         * Whether the watermark is removed.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.RemoveWatermark = null;

        /**
         * A special parameter for FLV recording.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {FlvSpecialParam || null}
         */
        this.FlvSpecialParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.FlvParam) {
            let obj = new RecordParam();
            obj.deserialize(params.FlvParam)
            this.FlvParam = obj;
        }

        if (params.HlsParam) {
            let obj = new RecordParam();
            obj.deserialize(params.HlsParam)
            this.HlsParam = obj;
        }

        if (params.Mp4Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp4Param)
            this.Mp4Param = obj;
        }

        if (params.AacParam) {
            let obj = new RecordParam();
            obj.deserialize(params.AacParam)
            this.AacParam = obj;
        }
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;

        if (params.HlsSpecialParam) {
            let obj = new HlsSpecialParam();
            obj.deserialize(params.HlsSpecialParam)
            this.HlsSpecialParam = obj;
        }

        if (params.Mp3Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp3Param)
            this.Mp3Param = obj;
        }
        this.RemoveWatermark = 'RemoveWatermark' in params ? params.RemoveWatermark : null;

        if (params.FlvSpecialParam) {
            let obj = new FlvSpecialParam();
            obj.deserialize(params.FlvSpecialParam)
            this.FlvSpecialParam = obj;
        }

    }
}

/**
 * DeleteLiveTranscodeRule response structure.
 * @class
 */
class DeleteLiveTranscodeRuleResponse extends  AbstractModel {
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
 * Number of concurrent recording channels
 * @class
 */
class ConcurrentRecordStreamNum extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time point.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Number of channels.
         * @type {number || null}
         */
        this.Num = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Num = 'Num' in params ? params.Num : null;

    }
}

/**
 * DescribeStreamPlayInfoList response structure.
 * @class
 */
class DescribeStreamPlayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistics list at a 1-minute granularity.
         * @type {Array.<DayStreamPlayInfo> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new DayStreamPlayInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScreenShotSheetNumList response structure.
 * @class
 */
class DescribeScreenShotSheetNumListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data information list.
         * @type {Array.<TimeValue> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new TimeValue();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLiveSnapshotTemplate response structure.
 * @class
 */
class ModifyLiveSnapshotTemplateResponse extends  AbstractModel {
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
 * CreateLivePullStreamTask response structure.
 * @class
 */
class CreateLivePullStreamTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID.
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
 * ModifyLivePushAuthKey request structure.
 * @class
 */
class ModifyLivePushAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Whether to enable. 0: disabled; 1: enabled.
If this parameter is left empty, the current value will not be modified.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Master authentication key.
If this parameter is left empty, the current value will not be modified.
         * @type {string || null}
         */
        this.MasterAuthKey = null;

        /**
         * Backup authentication key.
If this parameter is left empty, the current value will not be modified.
         * @type {string || null}
         */
        this.BackupAuthKey = null;

        /**
         * Validity period in seconds.
         * @type {number || null}
         */
        this.AuthDelta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.MasterAuthKey = 'MasterAuthKey' in params ? params.MasterAuthKey : null;
        this.BackupAuthKey = 'BackupAuthKey' in params ? params.BackupAuthKey : null;
        this.AuthDelta = 'AuthDelta' in params ? params.AuthDelta : null;

    }
}

/**
 * DeleteLiveSnapshotTemplate response structure.
 * @class
 */
class DeleteLiveSnapshotTemplateResponse extends  AbstractModel {
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
 * DescribeLiveStreamState request structure.
 * @class
 */
class DescribeLiveStreamStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Your push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DescribeLivePlayAuthKey response structure.
 * @class
 */
class DescribeLivePlayAuthKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback authentication key information.
         * @type {PlayAuthKeyInfo || null}
         */
        this.PlayAuthKeyInfo = null;

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

        if (params.PlayAuthKeyInfo) {
            let obj = new PlayAuthKeyInfo();
            obj.deserialize(params.PlayAuthKeyInfo)
            this.PlayAuthKeyInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveCallbackTemplates request structure.
 * @class
 */
class DescribeLiveCallbackTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * LVB domain name information
 * @class
 */
class DomainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * LVB domain name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Domain name type:
0: push.
1: playback.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Domain name status:
0: deactivated.
1: activated.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Whether there is a CNAME record pointing to a fixed rule domain name:
0: no.
1: yes.
         * @type {number || null}
         */
        this.BCName = null;

        /**
         * Domain name corresponding to CNAME record.
         * @type {string || null}
         */
        this.TargetDomain = null;

        /**
         * Playback region. This parameter is valid only if `Type` is 1.
1: in Mainland China.
2: global.
3: outside Mainland China.
         * @type {number || null}
         */
        this.PlayType = null;

        /**
         * Whether it is LCB:
0: LVB.
1: LCB.
         * @type {number || null}
         */
        this.IsDelayLive = null;

        /**
         * Information of currently used CNAME record.
         * @type {string || null}
         */
        this.CurrentCName = null;

        /**
         * Disused parameter, which can be ignored.
         * @type {number || null}
         */
        this.RentTag = null;

        /**
         * Disused parameter, which can be ignored.
         * @type {string || null}
         */
        this.RentExpireTime = null;

        /**
         * 0: LVB.
1: LVB on Mini Program.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsMiniProgramLive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BCName = 'BCName' in params ? params.BCName : null;
        this.TargetDomain = 'TargetDomain' in params ? params.TargetDomain : null;
        this.PlayType = 'PlayType' in params ? params.PlayType : null;
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;
        this.CurrentCName = 'CurrentCName' in params ? params.CurrentCName : null;
        this.RentTag = 'RentTag' in params ? params.RentTag : null;
        this.RentExpireTime = 'RentExpireTime' in params ? params.RentExpireTime : null;
        this.IsMiniProgramLive = 'IsMiniProgramLive' in params ? params.IsMiniProgramLive : null;

    }
}

/**
 * DescribeLiveTranscodeRules request structure.
 * @class
 */
class DescribeLiveTranscodeRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * An array of template IDs to be filtered.
         * @type {Array.<number> || null}
         */
        this.TemplateIds = null;

        /**
         * An array of domain names to be filtered.
         * @type {Array.<string> || null}
         */
        this.DomainNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateIds = 'TemplateIds' in params ? params.TemplateIds : null;
        this.DomainNames = 'DomainNames' in params ? params.DomainNames : null;

    }
}

/**
 * DeleteLiveSnapshotRule request structure.
 * @class
 */
class DeleteLiveSnapshotRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DescribePlayErrorCodeDetailInfoList request structure.
 * @class
 */
class DescribePlayErrorCodeDetailInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time (Beijing time),
In the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time (Beijing time),
In the format of `yyyy-mm-dd HH:MM:SS`.
Note: `EndTime` and `StartTime` only support querying data for the last day.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Query granularity:
1: 1-minute granularity.
         * @type {number || null}
         */
        this.Granularity = null;

        /**
         * Yes. Valid values: "4xx", "5xx". Mixed codes in the format of `4xx,5xx` are also supported.
         * @type {string || null}
         */
        this.StatType = null;

        /**
         * Playback domain name list.
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * Region. Valid values: Mainland (data for Mainland China), Oversea (data for regions outside Mainland China), China (data for China, including Hong Kong, Macao, and Taiwan), Foreign (data for regions outside China, excluding Hong Kong, Macao, and Taiwan), Global (default). If this parameter is left empty, data for all regions will be queried.
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

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
        this.Granularity = 'Granularity' in params ? params.Granularity : null;
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;

    }
}

/**
 * DeleteLivePullStreamTask request structure.
 * @class
 */
class DeleteLivePullStreamTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The operator.
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * General stream mix output parameter.
 * @class
 */
class CommonMixOutputParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output stream name.
         * @type {string || null}
         */
        this.OutputStreamName = null;

        /**
         * Output stream type. Valid values: [0,1].
If this parameter is left empty, 0 will be used by default.
If the output stream is a stream in the input stream list, enter 0.
If you want the stream mix result to be a new stream, enter 1.
If this value is 1, `output_stream_id` cannot appear in `input_stram_list`, and there cannot be a stream with the same ID on the LVB backend.
         * @type {number || null}
         */
        this.OutputStreamType = null;

        /**
         * Output stream bitrate. Value range: [1,50000].
If this parameter is left empty, the system will automatically determine.
         * @type {number || null}
         */
        this.OutputStreamBitRate = null;

        /**
         * Output stream GOP size. Value range: [1,10].
If this parameter is left empty, the system will automatically determine.
         * @type {number || null}
         */
        this.OutputStreamGop = null;

        /**
         * Output stream frame rate. Value range: [1,60].
If this parameter is left empty, the system will automatically determine.
         * @type {number || null}
         */
        this.OutputStreamFrameRate = null;

        /**
         * Output stream audio bitrate. Value range: [1,500]
If this parameter is left empty, the system will automatically determine.
         * @type {number || null}
         */
        this.OutputAudioBitRate = null;

        /**
         * Output stream audio sample rate. Valid values: [96000, 88200, 64000, 48000, 44100, 32000,24000, 22050, 16000, 12000, 11025, 8000].
If this parameter is left empty, the system will automatically determine.
         * @type {number || null}
         */
        this.OutputAudioSampleRate = null;

        /**
         * Output stream audio sound channel. Valid values: [1,2].
If this parameter is left empty, the system will automatically determine.
         * @type {number || null}
         */
        this.OutputAudioChannels = null;

        /**
         * SEI information in output stream. If there are no special needs, leave it empty.
         * @type {string || null}
         */
        this.MixSei = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputStreamName = 'OutputStreamName' in params ? params.OutputStreamName : null;
        this.OutputStreamType = 'OutputStreamType' in params ? params.OutputStreamType : null;
        this.OutputStreamBitRate = 'OutputStreamBitRate' in params ? params.OutputStreamBitRate : null;
        this.OutputStreamGop = 'OutputStreamGop' in params ? params.OutputStreamGop : null;
        this.OutputStreamFrameRate = 'OutputStreamFrameRate' in params ? params.OutputStreamFrameRate : null;
        this.OutputAudioBitRate = 'OutputAudioBitRate' in params ? params.OutputAudioBitRate : null;
        this.OutputAudioSampleRate = 'OutputAudioSampleRate' in params ? params.OutputAudioSampleRate : null;
        this.OutputAudioChannels = 'OutputAudioChannels' in params ? params.OutputAudioChannels : null;
        this.MixSei = 'MixSei' in params ? params.MixSei : null;

    }
}

/**
 * DescribeUploadStreamNums request structure.
 * @class
 */
class DescribeUploadStreamNumsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time point in the format of yyyy-mm-dd HH:MM:SS.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time point in the format of yyyy-mm-dd HH:MM:SS. The difference between the start time and end time cannot be greater than 31 days. Data in the last 31 days can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * LVB domain names. If this parameter is left empty, data of all domain names will be queried.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Time granularity of the data. Valid values:
5: 5-minute granularity (the query period is up to 1 day)
1440: 1-day granularity (the query period is up to 1 month)
Default value: 5
         * @type {number || null}
         */
        this.Granularity = null;

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
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * DescribeLiveSnapshotRules response structure.
 * @class
 */
class DescribeLiveSnapshotRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule list.
         * @type {Array.<RuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveTranscodeDetailInfo response structure.
 * @class
 */
class DescribeLiveTranscodeDetailInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistics list.
         * @type {Array.<TranscodeDetailInfo> || null}
         */
        this.DataInfoList = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new TranscodeDetailInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveDomain request structure.
 * @class
 */
class DescribeLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * AuthenticateDomainOwner response structure.
 * @class
 */
class AuthenticateDomainOwnerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The content verified.
If `VerifyType` is `dnsCheck`, this is the TXT record that should be added for verification.
If `VerifyType` is `fileCheck`, this is the file that should be uploaded for verification.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * The verification status.
If the value of this parameter is 0 or greater, the domain has been verified.
If the value of this parameter is smaller than 0, the domain has not been verified.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The primary domain of the domain verified.
Verification is not required if another domain under the same primary domain has been successfully verified.
         * @type {string || null}
         */
        this.MainDomain = null;

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
        this.Content = 'Content' in params ? params.Content : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MainDomain = 'MainDomain' in params ? params.MainDomain : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGroupProIspPlayInfoList response structure.
 * @class
 */
class DescribeGroupProIspPlayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data content.
         * @type {Array.<GroupProIspDataInfo> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new GroupProIspDataInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveRecordRule request structure.
 * @class
 */
class CreateLiveRecordRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
Note: If the parameter is a non-empty string, the rule will be only applicable to the particular stream.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DescribeLiveSnapshotTemplates request structure.
 * @class
 */
class DescribeLiveSnapshotTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * AddLiveWatermark response structure.
 * @class
 */
class AddLiveWatermarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID.
         * @type {number || null}
         */
        this.WatermarkId = null;

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
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveStreamPushInfoList response structure.
 * @class
 */
class DescribeLiveStreamPushInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Live stream statistics list.
         * @type {Array.<PushDataInfo> || null}
         */
        this.DataInfoList = null;

        /**
         * Total number of live streams.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * Page number where the current data resides.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of live streams per page.
         * @type {number || null}
         */
        this.PageSize = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new PushDataInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveDomainCert response structure.
 * @class
 */
class DescribeLiveDomainCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate information.
         * @type {DomainCertInfo || null}
         */
        this.DomainCertInfo = null;

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

        if (params.DomainCertInfo) {
            let obj = new DomainCertInfo();
            obj.deserialize(params.DomainCertInfo)
            this.DomainCertInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveRecordTemplate request structure.
 * @class
 */
class DescribeLiveRecordTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID obtained by [DescribeLiveRecordTemplates](https://intl.cloud.tencent.com/document/product/267/32609?from_cn_redirect=1).
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * CreateLiveWatermarkRule response structure.
 * @class
 */
class CreateLiveWatermarkRuleResponse extends  AbstractModel {
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
 * ForbidLiveStream request structure.
 * @class
 */
class ForbidLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Your push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * The time (in UTC format) to resume the stream, such as 2018-11-29T19:00:00Z.
Notes:
1. The default stream disabling period is seven days. A stream can be disabled for up to 90 days.
2. Beijing time is 8 hours ahead of UTC. The [ISO 8601 format](https://intl.cloud.tencent.com/document/product/266/11732#iso-date-format) is used.
         * @type {string || null}
         */
        this.ResumeTime = null;

        /**
         * Reason for forbidding.
Note: Be sure to enter the reason for forbidding to avoid any faulty operations.
Length limit: 2,048 bytes.
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.ResumeTime = 'ResumeTime' in params ? params.ResumeTime : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * DescribeDeliverBandwidthList request structure.
 * @class
 */
class DescribeDeliverBandwidthListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time in the format of "%Y-%m-%d %H:%M:%S".
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time in the format of "%Y-%m-%d %H:%M:%S". Data in the last 3 months can be queried, and the query period is up to 1 month.
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Total occurrences of each status code. Most HTTP return codes are supported.
 * @class
 */
class PlayCodeTotalInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP code. Valid values:
400, 403, 404, 500, 502, 503, 504.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Total occurrences.
         * @type {number || null}
         */
        this.Num = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Num = 'Num' in params ? params.Num : null;

    }
}

/**
 * DescribeConcurrentRecordStreamNum response structure.
 * @class
 */
class DescribeConcurrentRecordStreamNumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistics list.
         * @type {Array.<ConcurrentRecordStreamNum> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new ConcurrentRecordStreamNum();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The number of tasks.
 * @class
 */
class TranscodeTaskNum extends  AbstractModel {
    constructor(){
        super();

        /**
         * The time of query.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * The bitrate.
         * @type {number || null}
         */
        this.CodeRate = null;

        /**
         * The number of tasks.
         * @type {number || null}
         */
        this.Num = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.CodeRate = 'CodeRate' in params ? params.CodeRate : null;
        this.Num = 'Num' in params ? params.Num : null;

    }
}

/**
 * ModifyLivePlayDomain request structure.
 * @class
 */
class ModifyLivePlayDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Pull domain name type. 1: Mainland China. 2: global, 3: outside Mainland China
         * @type {number || null}
         */
        this.PlayType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.PlayType = 'PlayType' in params ? params.PlayType : null;

    }
}

/**
 * DeleteLiveRecordTemplate response structure.
 * @class
 */
class DeleteLiveRecordTemplateResponse extends  AbstractModel {
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
 * DescribeLiveWatermark request structure.
 * @class
 */
class DescribeLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID returned by the `DescribeLiveWatermarks` API.
         * @type {number || null}
         */
        this.WatermarkId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;

    }
}

/**
 * Playback error code information
 * @class
 */
class ProIspPlayCodeDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Country or region.
         * @type {string || null}
         */
        this.CountryAreaName = null;

        /**
         * District.
         * @type {string || null}
         */
        this.ProvinceName = null;

        /**
         * ISP.
         * @type {string || null}
         */
        this.IspName = null;

        /**
         * Occurrences of 2xx error codes.
         * @type {number || null}
         */
        this.Code2xx = null;

        /**
         * Occurrences of 3xx error codes.
         * @type {number || null}
         */
        this.Code3xx = null;

        /**
         * Occurrences of 4xx error codes.
         * @type {number || null}
         */
        this.Code4xx = null;

        /**
         * Occurrences of 5xx error codes.
         * @type {number || null}
         */
        this.Code5xx = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CountryAreaName = 'CountryAreaName' in params ? params.CountryAreaName : null;
        this.ProvinceName = 'ProvinceName' in params ? params.ProvinceName : null;
        this.IspName = 'IspName' in params ? params.IspName : null;
        this.Code2xx = 'Code2xx' in params ? params.Code2xx : null;
        this.Code3xx = 'Code3xx' in params ? params.Code3xx : null;
        this.Code4xx = 'Code4xx' in params ? params.Code4xx : null;
        this.Code5xx = 'Code5xx' in params ? params.Code5xx : null;

    }
}

/**
 * AddDelayLiveStream request structure.
 * @class
 */
class AddDelayLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Delay time in seconds, up to 600s.
         * @type {number || null}
         */
        this.DelayTime = null;

        /**
         * Expiration time of the configured delayed playback in UTC format, such as 2018-11-29T19:00:00Z.
Notes:
1. The configuration will expire after 7 days by default and can last up to 7 days.
2. The Beijing time is in UTC+8. This value should be in the format as required by ISO 8601. For more information, please see [ISO Date and Time Format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * DescribeLiveDomainCert request structure.
 * @class
 */
class DescribeLiveDomainCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeLiveStreamEventList request structure.
 * @class
 */
class DescribeLiveStreamEventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time. 
In UTC format, such as 2018-12-29T19:00:00Z.
This supports querying the history of 60 days.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time.
In UTC format, such as 2018-12-29T20:00:00Z.
This cannot be after the current time and cannot be more than 30 days after the start time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name; query with wildcard (*) is not supported; fuzzy match by default.
The IsStrict field can be used to change to exact query.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Page number to get.
Default value: 1.
Note: Currently, query for up to 10,000 entries is supported.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page.
Maximum value: 100.
Value range: any integer between 1 and 100.
Default value: 10.
Note: currently, query for up to 10,000 entries is supported.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Whether to filter. No filtering by default.
0: No filtering at all.
1: Filter out the failing streams and return only the successful ones.
         * @type {number || null}
         */
        this.IsFilter = null;

        /**
         * Whether to query exactly. Fuzzy match by default.
0: Fuzzy match.
1: Exact query.
Note: This parameter takes effect when StreamName is used.
         * @type {number || null}
         */
        this.IsStrict = null;

        /**
         * Whether to display in ascending order by end time. Descending order by default.
0: Descending.
1: Ascending.
         * @type {number || null}
         */
        this.IsAsc = null;

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
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.IsFilter = 'IsFilter' in params ? params.IsFilter : null;
        this.IsStrict = 'IsStrict' in params ? params.IsStrict : null;
        this.IsAsc = 'IsAsc' in params ? params.IsAsc : null;

    }
}

/**
 * Callback template information.
 * @class
 */
class CallBackTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Stream starting callback URL.
         * @type {string || null}
         */
        this.StreamBeginNotifyUrl = null;

        /**
         * Stream mixing callback URL (disused)
         * @type {string || null}
         */
        this.StreamMixNotifyUrl = null;

        /**
         * Interruption callback URL.
         * @type {string || null}
         */
        this.StreamEndNotifyUrl = null;

        /**
         * Recording callback URL.
         * @type {string || null}
         */
        this.RecordNotifyUrl = null;

        /**
         * Screencapturing callback URL.
         * @type {string || null}
         */
        this.SnapshotNotifyUrl = null;

        /**
         * Porn detection callback URL.
         * @type {string || null}
         */
        this.PornCensorshipNotifyUrl = null;

        /**
         * Callback authentication key.
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.StreamBeginNotifyUrl = 'StreamBeginNotifyUrl' in params ? params.StreamBeginNotifyUrl : null;
        this.StreamMixNotifyUrl = 'StreamMixNotifyUrl' in params ? params.StreamMixNotifyUrl : null;
        this.StreamEndNotifyUrl = 'StreamEndNotifyUrl' in params ? params.StreamEndNotifyUrl : null;
        this.RecordNotifyUrl = 'RecordNotifyUrl' in params ? params.RecordNotifyUrl : null;
        this.SnapshotNotifyUrl = 'SnapshotNotifyUrl' in params ? params.SnapshotNotifyUrl : null;
        this.PornCensorshipNotifyUrl = 'PornCensorshipNotifyUrl' in params ? params.PornCensorshipNotifyUrl : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * DescribePlayErrorCodeSumInfoList response structure.
 * @class
 */
class DescribePlayErrorCodeSumInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of error codes starting with 2, 3, 4, or 5 by district and ISP.
         * @type {Array.<ProIspPlayCodeDataInfo> || null}
         */
        this.ProIspInfoList = null;

        /**
         * Total occurrences of all status codes.
         * @type {number || null}
         */
        this.TotalCodeAll = null;

        /**
         * Occurrences of 4xx status codes.
         * @type {number || null}
         */
        this.TotalCode4xx = null;

        /**
         * Occurrences of 5xx status codes.
         * @type {number || null}
         */
        this.TotalCode5xx = null;

        /**
         * Total occurrences of each status code.
         * @type {Array.<PlayCodeTotalInfo> || null}
         */
        this.TotalCodeList = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * Total number of results.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Occurrences of 2xx status codes.
         * @type {number || null}
         */
        this.TotalCode2xx = null;

        /**
         * Occurrences of 3xx status codes.
         * @type {number || null}
         */
        this.TotalCode3xx = null;

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

        if (params.ProIspInfoList) {
            this.ProIspInfoList = new Array();
            for (let z in params.ProIspInfoList) {
                let obj = new ProIspPlayCodeDataInfo();
                obj.deserialize(params.ProIspInfoList[z]);
                this.ProIspInfoList.push(obj);
            }
        }
        this.TotalCodeAll = 'TotalCodeAll' in params ? params.TotalCodeAll : null;
        this.TotalCode4xx = 'TotalCode4xx' in params ? params.TotalCode4xx : null;
        this.TotalCode5xx = 'TotalCode5xx' in params ? params.TotalCode5xx : null;

        if (params.TotalCodeList) {
            this.TotalCodeList = new Array();
            for (let z in params.TotalCodeList) {
                let obj = new PlayCodeTotalInfo();
                obj.deserialize(params.TotalCodeList[z]);
                this.TotalCodeList.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalCode2xx = 'TotalCode2xx' in params ? params.TotalCode2xx : null;
        this.TotalCode3xx = 'TotalCode3xx' in params ? params.TotalCode3xx : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnBindLiveDomainCert request structure.
 * @class
 */
class UnBindLiveDomainCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Valid values:
`gray`: unbind the canary certificate
`formal` (default): unbind the formal certificate

`formal` will be used if no value is passed in
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DeleteLiveRecord response structure.
 * @class
 */
class DeleteLiveRecordResponse extends  AbstractModel {
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
 * DescribeScreenShotSheetNumList request structure.
 * @class
 */
class DescribeScreenShotSheetNumListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time in UTC time in the format of `yyyy-mm-ddTHH:MM:SSZ`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time in UTC time in the format of `yyyy-mm-ddTHH:MM:SSZ`. Data for the last year can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Region information. Valid values: Mainland, Oversea. The former is to query data within Mainland China, while the latter outside Mainland China. If this parameter is left empty, data of all regions will be queried.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Push domain name (data at the domain name level after November 1, 2019 can be queried).
         * @type {Array.<string> || null}
         */
        this.PushDomains = null;

        /**
         * Data granularity. There is a 1.5-hour delay in data reporting. Valid values: `Minute` (5-minute granularity; query period of up to 31 days); `Day` (1-day granularity based on UTC+8:00; query period of up to 186 days)
         * @type {string || null}
         */
        this.Granularity = null;

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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.PushDomains = 'PushDomains' in params ? params.PushDomains : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * DescribeLiveDomains response structure.
 * @class
 */
class DescribeLiveDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results.
         * @type {number || null}
         */
        this.AllCount = null;

        /**
         * List of domain name details.
         * @type {Array.<DomainInfo> || null}
         */
        this.DomainList = null;

        /**
         * The number of domain names that can be added
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateLimitCount = null;

        /**
         * The number of domains accelerated in the Chinese mainland, globally, and outside the Chinese mainland respectively.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.PlayTypeCount = null;

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
        this.AllCount = 'AllCount' in params ? params.AllCount : null;

        if (params.DomainList) {
            this.DomainList = new Array();
            for (let z in params.DomainList) {
                let obj = new DomainInfo();
                obj.deserialize(params.DomainList[z]);
                this.DomainList.push(obj);
            }
        }
        this.CreateLimitCount = 'CreateLimitCount' in params ? params.CreateLimitCount : null;
        this.PlayTypeCount = 'PlayTypeCount' in params ? params.PlayTypeCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Metric value at a specified point in time.
 * @class
 */
class TimeValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * UTC time in the format of `yyyy-mm-ddTHH:MM:SSZ`.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Value.
         * @type {number || null}
         */
        this.Num = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Num = 'Num' in params ? params.Num : null;

    }
}

/**
 * ModifyLiveDomainCertBindings response structure.
 * @class
 */
class ModifyLiveDomainCertBindingsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domains skipped due to certificate mismatch.
         * @type {Array.<string> || null}
         */
        this.MismatchedDomainNames = null;

        /**
         * The domains that the API failed to bind, including those in `MismatchedDomainNames`, and the error information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BatchDomainOperateErrors> || null}
         */
        this.Errors = null;

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
        this.MismatchedDomainNames = 'MismatchedDomainNames' in params ? params.MismatchedDomainNames : null;

        if (params.Errors) {
            this.Errors = new Array();
            for (let z in params.Errors) {
                let obj = new BatchDomainOperateErrors();
                obj.deserialize(params.Errors[z]);
                this.Errors.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Queries active push information
 * @class
 */
class StreamOnlineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Push time list
         * @type {Array.<PublishTime> || null}
         */
        this.PublishTimeList = null;

        /**
         * Application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

        if (params.PublishTimeList) {
            this.PublishTimeList = new Array();
            for (let z in params.PublishTimeList) {
                let obj = new PublishTime();
                obj.deserialize(params.PublishTimeList[z]);
                this.PublishTimeList.push(obj);
            }
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * CreateLiveRecord response structure.
 * @class
 */
class CreateLiveRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID, which uniquely identifies a recording task globally.
         * @type {number || null}
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
 * Rule information.
 * @class
 */
class RuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Rule update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * UpdateLiveWatermark response structure.
 * @class
 */
class UpdateLiveWatermarkResponse extends  AbstractModel {
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
 * ModifyLiveDomainCertBindings request structure.
 * @class
 */
class ModifyLiveDomainCertBindingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The playback domains to bind and whether to enable HTTPS for them.
If neither `CloudCertId` nor the public/private key is specified, and a domain is already bound with a certificate, this API will only update the HTTPS configuration of the domain and, if the certificate is a self-owned certificate, upload it to Tencent Cloud.
         * @type {Array.<LiveCertDomainInfo> || null}
         */
        this.DomainInfos = null;

        /**
         * The SSL certificate ID assigned by Tencent Cloud.
For details, see https://intl.cloud.tencent.com/document/api/400/41665?from_cn_redirect=1
         * @type {string || null}
         */
        this.CloudCertId = null;

        /**
         * The public key of the certificate.
You can specify either `CloudCertId` or the public/private key. If both are specified, the private and public key parameters will be ignored. If you pass in only the public and private keys, the corresponding certificate will be uploaded to Tencent Cloud SSL Certificate Service, which will generate a `CloudCertId` for the certificate.
         * @type {string || null}
         */
        this.CertificatePublicKey = null;

        /**
         * The private key of the certificate.
You can specify either `CloudCertId` or the public/private key. If both are specified, the private and public key parameters will be ignored. If you pass in only the public and private keys, the corresponding certificate will be uploaded to Tencent Cloud SSL Certificate Service, which will generate a `CloudCertId` for the certificate.
         * @type {string || null}
         */
        this.CertificatePrivateKey = null;

        /**
         * The remarks for the certificate in Tencent Cloud SSL Certificate Service. This parameter will be ignored if `CloudCertId` is specified.
         * @type {string || null}
         */
        this.CertificateAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DomainInfos) {
            this.DomainInfos = new Array();
            for (let z in params.DomainInfos) {
                let obj = new LiveCertDomainInfo();
                obj.deserialize(params.DomainInfos[z]);
                this.DomainInfos.push(obj);
            }
        }
        this.CloudCertId = 'CloudCertId' in params ? params.CloudCertId : null;
        this.CertificatePublicKey = 'CertificatePublicKey' in params ? params.CertificatePublicKey : null;
        this.CertificatePrivateKey = 'CertificatePrivateKey' in params ? params.CertificatePrivateKey : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;

    }
}

/**
 * CreateLiveTranscodeTemplate response structure.
 * @class
 */
class CreateLiveTranscodeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The domains to bind to a certificate.
 * @class
 */
class LiveCertDomainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Whether to enable HTTPS for the domain.
1: Enable
0: Disable
-1: Keep the current configuration
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Stream playback information
 * @class
 */
class DayStreamPlayInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data point in time in the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Bandwidth in Mbps.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Traffic in MB.
         * @type {number || null}
         */
        this.Flux = null;

        /**
         * Number of requests.
         * @type {number || null}
         */
        this.Request = null;

        /**
         * Number of online viewers.
         * @type {number || null}
         */
        this.Online = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Flux = 'Flux' in params ? params.Flux : null;
        this.Request = 'Request' in params ? params.Request : null;
        this.Online = 'Online' in params ? params.Online : null;

    }
}

/**
 * ModifyLivePlayDomain response structure.
 * @class
 */
class ModifyLivePlayDomainResponse extends  AbstractModel {
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
 * CancelCommonMixStream response structure.
 * @class
 */
class CancelCommonMixStreamResponse extends  AbstractModel {
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
 * DescribeLiveDomainCertBindings response structure.
 * @class
 */
class DescribeLiveDomainCertBindingsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information of domains that meet the query criteria.
         * @type {Array.<LiveDomainCertBindings> || null}
         */
        this.LiveDomainCertBindings = null;

        /**
         * The number of records returned, which is needed for pagination.
         * @type {number || null}
         */
        this.TotalNum = null;

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

        if (params.LiveDomainCertBindings) {
            this.LiveDomainCertBindings = new Array();
            for (let z in params.LiveDomainCertBindings) {
                let obj = new LiveDomainCertBindings();
                obj.deserialize(params.LiveDomainCertBindings[z]);
                this.LiveDomainCertBindings.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddLiveWatermark request structure.
 * @class
 */
class AddLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark image URL.
Unallowed characters in the URL:
 ;(){}$>`#"\'|
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * Watermark name.
Up to 16 bytes.
         * @type {string || null}
         */
        this.WatermarkName = null;

        /**
         * Display position: X-axis offset in %. Default value: 0.
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * Display position: Y-axis offset in %. Default value: 0.
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * Watermark width or its percentage of the live streaming video width. It is recommended to just specify either height or width as the other will be scaled proportionally to avoid distortions. The original width is used by default.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Watermark height, which is set by entering a percentage of the live stream image’s original height. You are advised to set either the height or width as the other will be scaled proportionally to avoid distortions. Default value: original height.
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
        this.PictureUrl = 'PictureUrl' in params ? params.PictureUrl : null;
        this.WatermarkName = 'WatermarkName' in params ? params.WatermarkName : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * DescribeLiveTimeShiftBillInfoList request structure.
 * @class
 */
class DescribeLiveTimeShiftBillInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time for query. You can query data from the past three months. The longest time period that can be queried is one month.

It must be in UTC format.
Example: 2019-01-08T10:00:00Z.
Note: Beijing time is 8 hours ahead of UTC. The [ISO 8601 format](https://intl.cloud.tencent.com/document/product/266/11732#iso-date-format) is used.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time for query. You can query data from the past three months. The longest time period that can be queried is one month.

It must be in UTC format.
Example: 2019-01-08T10:00:00Z.
Note: Beijing time is 8 hours ahead of UTC. The [ISO 8601 format](https://intl.cloud.tencent.com/document/product/266/11732#iso-date-format) is used.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The push domains to query. If you leave this empty, the time shifting billing data of all push domains will be returned.
         * @type {Array.<string> || null}
         */
        this.PushDomains = null;

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
        this.PushDomains = 'PushDomains' in params ? params.PushDomains : null;

    }
}

/**
 * DescribeLiveCerts response structure.
 * @class
 */
class DescribeLiveCertsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate information list.
         * @type {Array.<CertInfo> || null}
         */
        this.CertInfoSet = null;

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

        if (params.CertInfoSet) {
            this.CertInfoSet = new Array();
            for (let z in params.CertInfoSet) {
                let obj = new CertInfo();
                obj.deserialize(params.CertInfoSet[z]);
                this.CertInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * General stream mix input parameter.
 * @class
 */
class CommonMixInputParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input stream name, which can contain up to 80 bytes of letters, digits, and underscores.
The value should be the name of an input stream for stream mix when `LayoutParams.InputType` is set to `0` (audio and video), `4` (pure audio), or `5` (pure video).
The value can be a random name for identification, such as `Canvas1` or `Picture1`, when `LayoutParams.InputType` is set to `2` (image) or `3` (canvas).
         * @type {string || null}
         */
        this.InputStreamName = null;

        /**
         * Input stream layout parameter.
         * @type {CommonMixLayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * Input stream crop parameter.
         * @type {CommonMixCropParams || null}
         */
        this.CropParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputStreamName = 'InputStreamName' in params ? params.InputStreamName : null;

        if (params.LayoutParams) {
            let obj = new CommonMixLayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }

        if (params.CropParams) {
            let obj = new CommonMixCropParams();
            obj.deserialize(params.CropParams)
            this.CropParams = obj;
        }

    }
}

/**
 * DescribeLiveWatermarkRules response structure.
 * @class
 */
class DescribeLiveWatermarkRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermarking rule list.
         * @type {Array.<RuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveRecordTemplates response structure.
 * @class
 */
class DescribeLiveRecordTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recording template information list.
         * @type {Array.<RecordTemplateInfo> || null}
         */
        this.Templates = null;

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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new RecordTemplateInfo();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Playback information at the stream level.
 * @class
 */
class PlayDataInfoByStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Total traffic in MB.
         * @type {number || null}
         */
        this.TotalFlux = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TotalFlux = 'TotalFlux' in params ? params.TotalFlux : null;

    }
}

/**
 * DescribeLiveCert request structure.
 * @class
 */
class DescribeLiveCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID obtained through the `DescribeLiveCerts` API.
         * @type {number || null}
         */
        this.CertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * DescribeLiveCallbackTemplates response structure.
 * @class
 */
class DescribeLiveCallbackTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template information list.
         * @type {Array.<CallBackTemplateInfo> || null}
         */
        this.Templates = null;

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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new CallBackTemplateInfo();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLivePlayAuthKey response structure.
 * @class
 */
class ModifyLivePlayAuthKeyResponse extends  AbstractModel {
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
 * CreateLiveCallbackTemplate request structure.
 * @class
 */
class CreateLiveCallbackTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name.
Maximum length: 255 bytes.
Only letters, digits, underscores, and hyphens can be contained.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Description.
Maximum length: 1,024 bytes.
Only letters, digits, underscores, and hyphens can be contained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Stream starting callback URL,
Protocol document: [Event Message Notification](https://intl.cloud.tencent.com/document/product/267/32744?from_cn_redirect=1).
         * @type {string || null}
         */
        this.StreamBeginNotifyUrl = null;

        /**
         * Interruption callback URL,
Protocol document: [Event Message Notification](https://intl.cloud.tencent.com/document/product/267/32744?from_cn_redirect=1).
         * @type {string || null}
         */
        this.StreamEndNotifyUrl = null;

        /**
         * Recording callback URL,
Protocol document: [Event Message Notification](https://intl.cloud.tencent.com/document/product/267/32744?from_cn_redirect=1).
         * @type {string || null}
         */
        this.RecordNotifyUrl = null;

        /**
         * Screencapturing callback URL,
Protocol document: [Event Message Notification](https://intl.cloud.tencent.com/document/product/267/32744?from_cn_redirect=1).
         * @type {string || null}
         */
        this.SnapshotNotifyUrl = null;

        /**
         * Porn detection callback URL,
Protocol document: [Event Message Notification](https://intl.cloud.tencent.com/document/product/267/32741?from_cn_redirect=1).
         * @type {string || null}
         */
        this.PornCensorshipNotifyUrl = null;

        /**
         * Callback key. The callback URL is public. For the callback signature, please see the event message notification document.
[Event Message Notification](https://intl.cloud.tencent.com/document/product/267/32744?from_cn_redirect=1).
         * @type {string || null}
         */
        this.CallbackKey = null;

        /**
         * Disused
         * @type {string || null}
         */
        this.StreamMixNotifyUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.StreamBeginNotifyUrl = 'StreamBeginNotifyUrl' in params ? params.StreamBeginNotifyUrl : null;
        this.StreamEndNotifyUrl = 'StreamEndNotifyUrl' in params ? params.StreamEndNotifyUrl : null;
        this.RecordNotifyUrl = 'RecordNotifyUrl' in params ? params.RecordNotifyUrl : null;
        this.SnapshotNotifyUrl = 'SnapshotNotifyUrl' in params ? params.SnapshotNotifyUrl : null;
        this.PornCensorshipNotifyUrl = 'PornCensorshipNotifyUrl' in params ? params.PornCensorshipNotifyUrl : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;
        this.StreamMixNotifyUrl = 'StreamMixNotifyUrl' in params ? params.StreamMixNotifyUrl : null;

    }
}

/**
 * DescribeTopClientIpSumInfoList response structure.
 * @class
 */
class DescribeTopClientIpSumInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number. Value range: [1,1000]. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Value range: [1,1000]. Default value: 20.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Sorting metric. Valid values: "TotalRequest", "FailedRequest", "TotalFlux".
         * @type {string || null}
         */
        this.OrderParam = null;

        /**
         * Total number of results.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of result pages.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * Data content.
         * @type {Array.<ClientIpPlaySumInfo> || null}
         */
        this.DataInfoList = null;

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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.OrderParam = 'OrderParam' in params ? params.OrderParam : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new ClientIpPlaySumInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DropLiveStream response structure.
 * @class
 */
class DropLiveStreamResponse extends  AbstractModel {
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
 * DescribeLiveStreamState response structure.
 * @class
 */
class DescribeLiveStreamStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream status,
active: active
inactive: Inactive
forbid: forbidden.
         * @type {string || null}
         */
        this.StreamState = null;

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
        this.StreamState = 'StreamState' in params ? params.StreamState : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopLiveRecord request structure.
 * @class
 */
class StopLiveRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Task ID returned by the `CreateLiveRecord` API.
         * @type {number || null}
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
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DeleteLiveWatermarkRule request structure.
 * @class
 */
class DeleteLiveWatermarkRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * Streaming event information.
 * @class
 */
class StreamEventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Push start time.
In UTC format, such as 2019-01-07T12:00:00Z.
         * @type {string || null}
         */
        this.StreamStartTime = null;

        /**
         * Push end time.
In UTC format, such as 2019-01-07T15:00:00Z.
         * @type {string || null}
         */
        this.StreamEndTime = null;

        /**
         * Stop reason.
         * @type {string || null}
         */
        this.StopReason = null;

        /**
         * Push duration in seconds.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Host IP.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * Resolution.
         * @type {string || null}
         */
        this.Resolution = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.StreamStartTime = 'StreamStartTime' in params ? params.StreamStartTime : null;
        this.StreamEndTime = 'StreamEndTime' in params ? params.StreamEndTime : null;
        this.StopReason = 'StopReason' in params ? params.StopReason : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;

    }
}

/**
 * DeleteRecordTask response structure.
 * @class
 */
class DeleteRecordTaskResponse extends  AbstractModel {
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
 * DescribeLiveWatermarks request structure.
 * @class
 */
class DescribeLiveWatermarksRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * CreateLiveTranscodeRule request structure.
 * @class
 */
class CreateLiveTranscodeRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default. If you only bind a domain name, leave this parameter empty.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name. If only the domain name or path is bound, leave this parameter blank.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Designates an existing template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeLiveWatermarkRules request structure.
 * @class
 */
class DescribeLiveWatermarkRulesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DropLiveStream request structure.
 * @class
 */
class DropLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Your push domain.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * The push path, which should be the same as `AppName` in the push and playback URL. The default value is `live`.
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * The watermark configuration for a relay task.
 * @class
 */
class PullPushWatermarkInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The watermark image URL.
Characters not allowed:
;(){}$>`#"'|
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * The horizontal offset (%) of the watermark. The default value is 0.
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * The vertical offset (%) of the watermark. The default value is 0.
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * The watermark width as a percentage of the video width. To avoid distorted images, we recommend you specify only the width or height so that the other side can be scaled proportionally. By default, the original width of the watermark image is used.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * The watermark height as a percentage of the video height. To avoid distorted images, we recommend you specify only the width or height so that the other side can be scaled proportionally. By default, the original height of the watermark image is used.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * The origin. The default value is 0.
0: Top left corner
1: Top right corner
2: Bottom right corner
3: Bottom left corner
         * @type {number || null}
         */
        this.Location = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PictureUrl = 'PictureUrl' in params ? params.PictureUrl : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Location = 'Location' in params ? params.Location : null;

    }
}

/**
 * DescribeProvinceIspPlayInfoList response structure.
 * @class
 */
class DescribeProvinceIspPlayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback information list.
         * @type {Array.<PlayStatInfo> || null}
         */
        this.DataInfoList = null;

        /**
         * Statistics type, which is the same as the input parameter.
         * @type {string || null}
         */
        this.StatType = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new PlayStatInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCommonMixStream request structure.
 * @class
 */
class CreateCommonMixStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a stream mix session (from applying for the stream mix to cancelling it). This parameter can contain up to 80 bytes of letters, digits, and underscores.
         * @type {string || null}
         */
        this.MixStreamSessionId = null;

        /**
         * Input stream list for stream mix.
         * @type {Array.<CommonMixInputParam> || null}
         */
        this.InputStreamList = null;

        /**
         * Output stream parameter for stream mix.
         * @type {CommonMixOutputParams || null}
         */
        this.OutputParams = null;

        /**
         * Input template ID. If this parameter is set, the output will be generated according to the default template layout, and there is no need to enter the custom position parameters.
If this parameter is left empty, 0 will be used by default.
For two input sources, 10, 20, 30, 40, and 50 are supported.
For three input sources, 310, 390, and 391 are supported.
For four input sources, 410 is supported.
For five input sources, 510 and 590 are supported.
For six input sources, 610 is supported.
         * @type {number || null}
         */
        this.MixStreamTemplateId = null;

        /**
         * Special control parameter for stream mix. If there are no special needs, leave it empty.
         * @type {CommonMixControlParams || null}
         */
        this.ControlParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MixStreamSessionId = 'MixStreamSessionId' in params ? params.MixStreamSessionId : null;

        if (params.InputStreamList) {
            this.InputStreamList = new Array();
            for (let z in params.InputStreamList) {
                let obj = new CommonMixInputParam();
                obj.deserialize(params.InputStreamList[z]);
                this.InputStreamList.push(obj);
            }
        }

        if (params.OutputParams) {
            let obj = new CommonMixOutputParams();
            obj.deserialize(params.OutputParams)
            this.OutputParams = obj;
        }
        this.MixStreamTemplateId = 'MixStreamTemplateId' in params ? params.MixStreamTemplateId : null;

        if (params.ControlParams) {
            let obj = new CommonMixControlParams();
            obj.deserialize(params.ControlParams)
            this.ControlParams = obj;
        }

    }
}

/**
 * Referer allowlist/blocklist configuration of a live streaming domain name
 * @class
 */
class RefererAuthConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Whether to enable referer. Valid values: `0` (no), `1` (yes)
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * List type. Valid values: `0` (blocklist), `1` (allowlist)
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Whether to allow empty referer. Valid values: `0` (no), `1` (yes)
         * @type {number || null}
         */
        this.AllowEmpty = null;

        /**
         * Referer list. Separate items in it with semicolons (;).
         * @type {string || null}
         */
        this.Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AllowEmpty = 'AllowEmpty' in params ? params.AllowEmpty : null;
        this.Rules = 'Rules' in params ? params.Rules : null;

    }
}

/**
 * Push information
 * @class
 */
class PushDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Push path.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push client IP.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * IP of the server that receives the stream.
         * @type {string || null}
         */
        this.ServerIp = null;

        /**
         * Pushed video frame rate in Hz.
         * @type {number || null}
         */
        this.VideoFps = null;

        /**
         * Video bitrate (bps) for publishing
         * @type {number || null}
         */
        this.VideoSpeed = null;

        /**
         * Pushed audio frame rate in Hz.
         * @type {number || null}
         */
        this.AudioFps = null;

        /**
         * Audio bitrate (bps) for publishing
         * @type {number || null}
         */
        this.AudioSpeed = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.PushDomain = null;

        /**
         * Push start time.
         * @type {string || null}
         */
        this.BeginPushTime = null;

        /**
         * Audio codec,
Example: AAC.
         * @type {string || null}
         */
        this.Acodec = null;

        /**
         * Video codec,
Example: H.264.
         * @type {string || null}
         */
        this.Vcodec = null;

        /**
         * Resolution.
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * Sample rate.
         * @type {number || null}
         */
        this.AsampleRate = null;

        /**
         * Audio bitrate (bps) in metadata
         * @type {number || null}
         */
        this.MetaAudioSpeed = null;

        /**
         * Video bitrate (bps) in metadata
         * @type {number || null}
         */
        this.MetaVideoSpeed = null;

        /**
         * Frame rate in `metadata`.
         * @type {number || null}
         */
        this.MetaFps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.ServerIp = 'ServerIp' in params ? params.ServerIp : null;
        this.VideoFps = 'VideoFps' in params ? params.VideoFps : null;
        this.VideoSpeed = 'VideoSpeed' in params ? params.VideoSpeed : null;
        this.AudioFps = 'AudioFps' in params ? params.AudioFps : null;
        this.AudioSpeed = 'AudioSpeed' in params ? params.AudioSpeed : null;
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;
        this.BeginPushTime = 'BeginPushTime' in params ? params.BeginPushTime : null;
        this.Acodec = 'Acodec' in params ? params.Acodec : null;
        this.Vcodec = 'Vcodec' in params ? params.Vcodec : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.AsampleRate = 'AsampleRate' in params ? params.AsampleRate : null;
        this.MetaAudioSpeed = 'MetaAudioSpeed' in params ? params.MetaAudioSpeed : null;
        this.MetaVideoSpeed = 'MetaVideoSpeed' in params ? params.MetaVideoSpeed : null;
        this.MetaFps = 'MetaFps' in params ? params.MetaFps : null;

    }
}

/**
 * General stream mix layout parameter.
 * @class
 */
class CommonMixLayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input layer. Value range: [1,16]
(1) For the background stream, i.e., the room owner’s image or the canvas, set this parameter to `1`.
(2) This parameter is required for audio-only stream mixing as well.
Note that two inputs cannot have the same `ImageLayer` value.
         * @type {number || null}
         */
        this.ImageLayer = null;

        /**
         * Input type. Value range: [0,5].
If this parameter is left empty, 0 will be used by default.
0: the input stream is audio/video.
2: the input stream is image.
3: the input stream is canvas. 
4: the input stream is audio.
5: the input stream is pure video.
         * @type {number || null}
         */
        this.InputType = null;

        /**
         * Output height of input video image. Value range:
Pixel: [0,2000]
Percentage: [0.01,0.99]
If this parameter is left empty, the input stream height will be used by default.
If percentage is used, the expected output is (percentage * background height).
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * Output width of input video image. Value range:
Pixel: [0,2000]
Percentage: [0.01,0.99]
If this parameter is left empty, the input stream width will be used by default.
If percentage is used, the expected output is (percentage * background width).
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * X-axis offset of input in output video image. Value range:
Pixel: [0,2000]
Percentage: [0.01,0.99]
If this parameter is left empty, 0 will be used by default.
Horizontal offset from the top-left corner of main host background video image. 
If percentage is used, the expected output is (percentage * background width).
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * Y-axis offset of input in output video image. Value range:
Pixel: [0,2000]
Percentage: [0.01,0.99]
If this parameter is left empty, 0 will be used by default.
Vertical offset from the top-left corner of main host background video image. 
If percentage is used, the expected output is (percentage * background width)
         * @type {number || null}
         */
        this.LocationY = null;

        /**
         * When `InputType` is 3 (canvas), this value indicates the canvas color.
Commonly used colors include:
Red: 0xcc0033.
Yellow: 0xcc9900.
Green: 0xcccc33.
Blue: 0x99CCFF.
Black: 0x000000.
White: 0xFFFFFF.
Gray: 0x999999
         * @type {string || null}
         */
        this.Color = null;

        /**
         * When `InputType` is 2 (image), this value is the watermark ID.
         * @type {number || null}
         */
        this.WatermarkId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageLayer = 'ImageLayer' in params ? params.ImageLayer : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;
        this.Color = 'Color' in params ? params.Color : null;
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;

    }
}

/**
 * DescribeGroupProIspPlayInfoList request structure.
 * @class
 */
class DescribeGroupProIspPlayInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time point in the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time point in the format of `yyyy-mm-dd HH:MM:SS`
The time span is (0,3 hours]. Data for the last month can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Playback domain name. If this parameter is left empty, full data will be queried.
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * District list. If this parameter is left empty, data for all districts will be returned.
         * @type {Array.<string> || null}
         */
        this.ProvinceNames = null;

        /**
         * ISP list. If this parameter is left empty, data of all ISPs will be returned.
         * @type {Array.<string> || null}
         */
        this.IspNames = null;

        /**
         * Within or outside Mainland China. Valid values: Mainland (data for Mainland China), Oversea (data for regions outside Mainland China). If this parameter is left empty, data for all regions will be queried.
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

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
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;
        this.ProvinceNames = 'ProvinceNames' in params ? params.ProvinceNames : null;
        this.IspNames = 'IspNames' in params ? params.IspNames : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;

    }
}

/**
 * DescribeStreamDayPlayInfoList request structure.
 * @class
 */
class DescribeStreamDayPlayInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Date in the format of YYYY-mm-dd
Data is available at 3am Beijing Time the next day. You are recommended to query the latest data after this time point. Data in the last 3 months can be queried.
         * @type {string || null}
         */
        this.DayTime = null;

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.PlayDomain = null;

        /**
         * Page number. Value range: [1,1000]. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Value range: [100,1000]. Default value: 1,000.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Valid values:
Mainland: query data for Mainland China,
Oversea: query data for regions outside Mainland China,
Default: query data for all regions.
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

        /**
         * Service name. Valid values: LVB, LEB. If this parameter is left empty, all data of LVB and LEB will be queried.
         * @type {string || null}
         */
        this.ServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DayTime = 'DayTime' in params ? params.DayTime : null;
        this.PlayDomain = 'PlayDomain' in params ? params.PlayDomain : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

    }
}

/**
 * Transcoding details.
 * @class
 */
class TranscodeDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Start time (Beijing time) in the format of `yyyy-mm-dd HH:MM`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time (Beijing time) in the format of `yyyy-mm-dd HH:MM`.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Transcoding duration in minutes.
Note: given the possible interruptions during push, duration here is the sum of actual duration of transcoding instead of the interval between the start time and end time.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Codec with modules,
Example:
liveprocessor_H264: LVB transcoding - H264,
liveprocessor_H265: LVB transcoding - H265,
topspeed_H264: top speed codec - H264,
topspeed_H265: top speed codec - H265.
         * @type {string || null}
         */
        this.ModuleCodec = null;

        /**
         * Bitrate.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * The task type. Valid values: Transcode, MixStream, WaterMark, Webrtc.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.PushDomain = null;

        /**
         * Resolution.
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * The region. Valid values:
`Mainland`: Inside the Chinese mainland.
`Overseas`: Outside the Chinese mainland.
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ModuleCodec = 'ModuleCodec' in params ? params.ModuleCodec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;

    }
}

/**
 * DescribeLiveSnapshotTemplate response structure.
 * @class
 */
class DescribeLiveSnapshotTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Screencapturing template information.
         * @type {SnapshotTemplateInfo || null}
         */
        this.Template = null;

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

        if (params.Template) {
            let obj = new SnapshotTemplateInfo();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveTranscodeRules response structure.
 * @class
 */
class DescribeLiveTranscodeRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of transcoding rules.
         * @type {Array.<RuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveDomainReferer response structure.
 * @class
 */
class DescribeLiveDomainRefererResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Referer allowlist/blocklist configuration of a domain name
         * @type {RefererAuthConfig || null}
         */
        this.RefererAuthConfig = null;

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

        if (params.RefererAuthConfig) {
            let obj = new RefererAuthConfig();
            obj.deserialize(params.RefererAuthConfig)
            this.RefererAuthConfig = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddLiveDomain request structure.
 * @class
 */
class AddLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Domain name type.
0: push domain name.
1: playback domain name.
         * @type {number || null}
         */
        this.DomainType = null;

        /**
         * Pull domain name type:
1: Mainland China.
2: global.
3: outside Mainland China.
Default value: 1.
         * @type {number || null}
         */
        this.PlayType = null;

        /**
         * Whether it is LCB:
0: LVB,
1: LCB.
Default value: 0.
         * @type {number || null}
         */
        this.IsDelayLive = null;

        /**
         * Whether it is LVB on Mini Program.
0: LVB.
1: LVB on Mini Program.
Default value: 0.
         * @type {number || null}
         */
        this.IsMiniProgramLive = null;

        /**
         * The domain verification type.
Valid values (the value of this parameter must be the same as `VerifyType` of the `AuthenticateDomainOwner` API):
dnsCheck: Check immediately whether the verification DNS record has been added successfully. If so, record this verification result.
fileCheck: Check immediately whether the verification HTML file has been uploaded successfully. If so, record this verification result.
dbCheck: Check whether the domain has already been verified.
If you do not pass a value, `dbCheck` will be used.
         * @type {string || null}
         */
        this.VerifyOwnerType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DomainType = 'DomainType' in params ? params.DomainType : null;
        this.PlayType = 'PlayType' in params ? params.PlayType : null;
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;
        this.IsMiniProgramLive = 'IsMiniProgramLive' in params ? params.IsMiniProgramLive : null;
        this.VerifyOwnerType = 'VerifyOwnerType' in params ? params.VerifyOwnerType : null;

    }
}

/**
 * Stream name list.
 * @class
 */
class StreamName extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push start time.
In UTC format, such as 2019-01-07T12:00:00Z.
         * @type {string || null}
         */
        this.StreamStartTime = null;

        /**
         * Push end time.
In UTC format, such as 2019-01-07T15:00:00Z.
         * @type {string || null}
         */
        this.StreamEndTime = null;

        /**
         * Stop reason.
         * @type {string || null}
         */
        this.StopReason = null;

        /**
         * Push duration in seconds.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Host IP.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * Resolution.
         * @type {string || null}
         */
        this.Resolution = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamStartTime = 'StreamStartTime' in params ? params.StreamStartTime : null;
        this.StreamEndTime = 'StreamEndTime' in params ? params.StreamEndTime : null;
        this.StopReason = 'StopReason' in params ? params.StopReason : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;

    }
}

/**
 * DescribeLiveCerts request structure.
 * @class
 */
class DescribeLiveCertsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeLivePullStreamTasks request structure.
 * @class
 */
class DescribeLivePullStreamTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID. 
A task ID is returned by the `CreateLivePullStreamTask` API.
If you do not pass this parameter, all tasks will be returned, sorted by last updated time in descending order.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The number of page to start from. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * The maximum number of records per page. Default value: 10.
Valid values: Any integer between 1 and 20.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * Downstream playback statistical metrics
 * @class
 */
class CdnPlayStatData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time point in the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Bandwidth in Mbps.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Traffic in MB.
         * @type {number || null}
         */
        this.Flux = null;

        /**
         * Number of new requests.
         * @type {number || null}
         */
        this.Request = null;

        /**
         * Number of concurrent connections.
         * @type {number || null}
         */
        this.Online = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Flux = 'Flux' in params ? params.Flux : null;
        this.Request = 'Request' in params ? params.Request : null;
        this.Online = 'Online' in params ? params.Online : null;

    }
}

/**
 * AddLiveDomain response structure.
 * @class
 */
class AddLiveDomainResponse extends  AbstractModel {
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
 * DescribeHttpStatusInfoList request structure.
 * @class
 */
class DescribeHttpStatusInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time (Beijing time).
Format: yyyy-mm-dd HH:MM:SS.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time (Beijing time).
Format: yyyy-mm-dd HH:MM:SS.
Note: data in the last 3 months can be queried and the query period is up to 1 day.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Playback domain name list.
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

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
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;

    }
}

/**
 * ModifyLiveCallbackTemplate request structure.
 * @class
 */
class ModifyLiveCallbackTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID returned by the `DescribeLiveCallbackTemplates` API.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Stream starting callback URL.
         * @type {string || null}
         */
        this.StreamBeginNotifyUrl = null;

        /**
         * Interruption callback URL.
         * @type {string || null}
         */
        this.StreamEndNotifyUrl = null;

        /**
         * Recording callback URL.
         * @type {string || null}
         */
        this.RecordNotifyUrl = null;

        /**
         * Screencapturing callback URL.
         * @type {string || null}
         */
        this.SnapshotNotifyUrl = null;

        /**
         * Porn detection callback URL.
         * @type {string || null}
         */
        this.PornCensorshipNotifyUrl = null;

        /**
         * Callback key. The callback URL is public. For the callback signature, please see the event message notification document.
[Event Message Notification](https://intl.cloud.tencent.com/document/product/267/32744?from_cn_redirect=1).
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.StreamBeginNotifyUrl = 'StreamBeginNotifyUrl' in params ? params.StreamBeginNotifyUrl : null;
        this.StreamEndNotifyUrl = 'StreamEndNotifyUrl' in params ? params.StreamEndNotifyUrl : null;
        this.RecordNotifyUrl = 'RecordNotifyUrl' in params ? params.RecordNotifyUrl : null;
        this.SnapshotNotifyUrl = 'SnapshotNotifyUrl' in params ? params.SnapshotNotifyUrl : null;
        this.PornCensorshipNotifyUrl = 'PornCensorshipNotifyUrl' in params ? params.PornCensorshipNotifyUrl : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * DescribeProvinceIspPlayInfoList request structure.
 * @class
 */
class DescribeProvinceIspPlayInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start point in time (Beijing time).
Example: 2019-02-21 10:00:00.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End point in time (Beijing time).
Example: 2019-02-21 12:00:00.
Note: `EndTime` and `StartTime` only support querying data for the last day.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Supported granularities:
1: 1-minute granularity (the query interval should be within 1 day)
         * @type {number || null}
         */
        this.Granularity = null;

        /**
         * Statistical metric type:
"Bandwidth": bandwidth
"FluxPerSecond": average traffic
"Flux": traffic
"Request": number of requests
"Online": number of concurrent connections
         * @type {string || null}
         */
        this.StatType = null;

        /**
         * Playback domain name list.
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * List of the districts to be queried, such as Beijing.
         * @type {Array.<string> || null}
         */
        this.ProvinceNames = null;

        /**
         * List of the ISPs to be queried, such as China Mobile. If this parameter is left empty, the data of all ISPs will be queried.
         * @type {Array.<string> || null}
         */
        this.IspNames = null;

        /**
         * Region. Valid values: Mainland (data for Mainland China), Oversea (data for regions outside Mainland China), China (data for China, including Hong Kong, Macao, and Taiwan), Foreign (data for regions outside China, excluding Hong Kong, Macao, and Taiwan), Global (default). If this parameter is left empty, data for all regions will be queried.
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

        /**
         * IP type:
"Ipv6": IPv6 data
Data of all IPs will be returned if this parameter is left empty.
         * @type {string || null}
         */
        this.IpType = null;

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
        this.Granularity = 'Granularity' in params ? params.Granularity : null;
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;
        this.ProvinceNames = 'ProvinceNames' in params ? params.ProvinceNames : null;
        this.IspNames = 'IspNames' in params ? params.IspNames : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;
        this.IpType = 'IpType' in params ? params.IpType : null;

    }
}

/**
 * DescribeLivePlayAuthKey request structure.
 * @class
 */
class DescribeLivePlayAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DeleteLivePullStreamTask response structure.
 * @class
 */
class DeleteLivePullStreamTaskResponse extends  AbstractModel {
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
 * AuthenticateDomainOwner request structure.
 * @class
 */
class AuthenticateDomainOwnerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain to verify.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * The verification type. Valid values:
dnsCheck: Check immediately whether the verification DNS record has been added successfully. If so, record this verification result.
fileCheck: Check immediately whether the verification HTML file has been uploaded successfully. If so, record this verification result.
dbCheck: Check whether the domain has already been successfully verified.
         * @type {string || null}
         */
        this.VerifyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;

    }
}

/**
 * DescribeLiveForbidStreamList response structure.
 * @class
 */
class DescribeLiveForbidStreamListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of eligible ones.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries displayed per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * List of forbidden streams.
         * @type {Array.<ForbidStreamInfo> || null}
         */
        this.ForbidStreamList = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.ForbidStreamList) {
            this.ForbidStreamList = new Array();
            for (let z in params.ForbidStreamList) {
                let obj = new ForbidStreamInfo();
                obj.deserialize(params.ForbidStreamList[z]);
                this.ForbidStreamList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVisitTopSumInfoList request structure.
 * @class
 */
class DescribeVisitTopSumInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start point in time in the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End point in time in the format of `yyyy-mm-dd HH:MM:SS`
The time span is (0,4 hours]. Data for the last day can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Bandwidth metric. Valid values: "Domain", "StreamId".
         * @type {string || null}
         */
        this.TopIndex = null;

        /**
         * Playback domain name. If this parameter is left empty, full data will be queried by default.
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * Page number,
Value range: [1,1000],
Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Value range: [1,1000].
Default value: 20.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Sorting metric. Valid values: "AvgFluxPerSecond", "TotalRequest" (default), "TotalFlux".
         * @type {string || null}
         */
        this.OrderParam = null;

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
        this.TopIndex = 'TopIndex' in params ? params.TopIndex : null;
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.OrderParam = 'OrderParam' in params ? params.OrderParam : null;

    }
}

/**
 * DescribeLivePullStreamTasks response structure.
 * @class
 */
class DescribeLivePullStreamTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information of stream pulling tasks.
         * @type {Array.<PullStreamTaskInfo> || null}
         */
        this.TaskInfos = null;

        /**
         * The page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * The number of records per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * The total number of records.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * The total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * The maximum number of tasks allowed.
         * @type {number || null}
         */
        this.LimitTaskNum = null;

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

        if (params.TaskInfos) {
            this.TaskInfos = new Array();
            for (let z in params.TaskInfos) {
                let obj = new PullStreamTaskInfo();
                obj.deserialize(params.TaskInfos[z]);
                this.TaskInfos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.LimitTaskNum = 'LimitTaskNum' in params ? params.LimitTaskNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveWatermark response structure.
 * @class
 */
class DescribeLiveWatermarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark information.
         * @type {WatermarkInfo || null}
         */
        this.Watermark = null;

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

        if (params.Watermark) {
            let obj = new WatermarkInfo();
            obj.deserialize(params.Watermark)
            this.Watermark = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResumeLiveStream response structure.
 * @class
 */
class ResumeLiveStreamResponse extends  AbstractModel {
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
 * ModifyLiveRecordTemplate request structure.
 * @class
 */
class ModifyLiveRecordTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID obtained through the `DescribeRecordTemplates` API.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Message description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * FLV recording parameter, which is set when FLV recording is enabled.
         * @type {RecordParam || null}
         */
        this.FlvParam = null;

        /**
         * HLS recording parameter, which is set when HLS recording is enabled.
         * @type {RecordParam || null}
         */
        this.HlsParam = null;

        /**
         * MP4 recording parameter, which is set when MP4 recording is enabled.
         * @type {RecordParam || null}
         */
        this.Mp4Param = null;

        /**
         * AAC recording parameter, which is set when AAC recording is enabled.
         * @type {RecordParam || null}
         */
        this.AacParam = null;

        /**
         * Custom HLS recording parameter.
         * @type {HlsSpecialParam || null}
         */
        this.HlsSpecialParam = null;

        /**
         * MP3 recording parameter, which is set when MP3 recording is enabled.
         * @type {RecordParam || null}
         */
        this.Mp3Param = null;

        /**
         * Whether to remove the watermark. This parameter is invalid if `IsDelayLive` is `1`.
         * @type {boolean || null}
         */
        this.RemoveWatermark = null;

        /**
         * A special parameter for FLV recording.
         * @type {FlvSpecialParam || null}
         */
        this.FlvSpecialParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.FlvParam) {
            let obj = new RecordParam();
            obj.deserialize(params.FlvParam)
            this.FlvParam = obj;
        }

        if (params.HlsParam) {
            let obj = new RecordParam();
            obj.deserialize(params.HlsParam)
            this.HlsParam = obj;
        }

        if (params.Mp4Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp4Param)
            this.Mp4Param = obj;
        }

        if (params.AacParam) {
            let obj = new RecordParam();
            obj.deserialize(params.AacParam)
            this.AacParam = obj;
        }

        if (params.HlsSpecialParam) {
            let obj = new HlsSpecialParam();
            obj.deserialize(params.HlsSpecialParam)
            this.HlsSpecialParam = obj;
        }

        if (params.Mp3Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp3Param)
            this.Mp3Param = obj;
        }
        this.RemoveWatermark = 'RemoveWatermark' in params ? params.RemoveWatermark : null;

        if (params.FlvSpecialParam) {
            let obj = new FlvSpecialParam();
            obj.deserialize(params.FlvSpecialParam)
            this.FlvSpecialParam = obj;
        }

    }
}

/**
 * DescribeLiveStreamPushInfoList request structure.
 * @class
 */
class DescribeLiveStreamPushInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.PushDomain = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Number of pages,
Value range: [1,10000],
Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page,
Value range: [1,1000],
Default value: 200.
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
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * StopLiveRecord response structure.
 * @class
 */
class StopLiveRecordResponse extends  AbstractModel {
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
 * DescribeLiveWatermarks response structure.
 * @class
 */
class DescribeLiveWatermarksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of watermarks.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Watermark information list.
         * @type {Array.<WatermarkInfo> || null}
         */
        this.WatermarkList = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.WatermarkList) {
            this.WatermarkList = new Array();
            for (let z in params.WatermarkList) {
                let obj = new WatermarkInfo();
                obj.deserialize(params.WatermarkList[z]);
                this.WatermarkList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Watermark information.
 * @class
 */
class WatermarkInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID.
         * @type {number || null}
         */
        this.WatermarkId = null;

        /**
         * Watermark image URL.
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * Display position: X-axis offset.
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * Display position: Y-axis offset.
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * Watermark name.
         * @type {string || null}
         */
        this.WatermarkName = null;

        /**
         * Current status. 0: not used. 1: in use.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Watermark width.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Watermark height.
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
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;
        this.PictureUrl = 'PictureUrl' in params ? params.PictureUrl : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;
        this.WatermarkName = 'WatermarkName' in params ? params.WatermarkName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * DescribeLiveForbidStreamList request structure.
 * @class
 */
class DescribeLiveForbidStreamListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number to get. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Maximum value: 100. 
Value: any integer between 1 and 100.
Default value: 10.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Stream name for query
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DescribeTopClientIpSumInfoList request structure.
 * @class
 */
class DescribeTopClientIpSumInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start point in time in the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End point in time in the format of `yyyy-mm-dd HH:MM:SS`
The time span is [0,4 hours]. Data for the last day can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Playback domain name. If this parameter is left empty, full data will be queried by default.
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * Page number. Value range: [1,1000]. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Value range: [1,1000]. Default value: 20.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Sorting metric. Valid values: TotalRequest (default value), FailedRequest, TotalFlux.
         * @type {string || null}
         */
        this.OrderParam = null;

        /**
         * Region. Valid values: Mainland (data for Mainland China), Oversea (data for regions outside Mainland China), China (data for China, including Hong Kong, Macao, and Taiwan), Foreign (data for regions outside China, excluding Hong Kong, Macao, and Taiwan), Global (default). If this parameter is left empty, data for all regions will be queried.
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

        /**
         * Language used in the output field. Valid values: Chinese (default), English. Currently, country/region, district, and ISP parameters support multiple languages.
         * @type {string || null}
         */
        this.OutLanguage = null;

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
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.OrderParam = 'OrderParam' in params ? params.OrderParam : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;
        this.OutLanguage = 'OutLanguage' in params ? params.OutLanguage : null;

    }
}

/**
 * CreateLiveCallbackRule request structure.
 * @class
 */
class CreateLiveCallbackRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DeleteLiveWatermarkRule response structure.
 * @class
 */
class DeleteLiveWatermarkRuleResponse extends  AbstractModel {
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
 * Push time.
 * @class
 */
class PublishTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push time.
In UTC format, such as 2018-06-29T19:00:00Z.
         * @type {string || null}
         */
        this.PublishTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublishTime = 'PublishTime' in params ? params.PublishTime : null;

    }
}

/**
 * ModifyLiveTranscodeTemplate response structure.
 * @class
 */
class ModifyLiveTranscodeTemplateResponse extends  AbstractModel {
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
 * ModifyLivePullStreamTask request structure.
 * @class
 */
class ModifyLivePullStreamTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The operator.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * The source URL(s).
If `SourceType` is `PullLivePushLive`, you can specify only one source URL.
If `SourceType` is `PullVodPushLive`, you can specify at most 30 source URLs.
         * @type {Array.<string> || null}
         */
        this.SourceUrls = null;

        /**
         * The start time.
It must be in UTC format.
Example: 2019-01-08T10:00:00Z.
Note: Beijing time is 8 hours ahead of UTC. The [ISO 8601 format](https://intl.cloud.tencent.com/document/product/266/11732#iso-date-format) is used.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time. Notes:
1. The end time must be later than the start time.
2. The end time and start time must be later than the current time.
3. The end time and start time must be less than seven days apart.
It must be in UTC format.
Example: 2019-01-08T10:00:00Z.
Note: Beijing time is 8 hours ahead of UTC. The [ISO 8601 format](https://intl.cloud.tencent.com/document/product/266/11732#iso-date-format) is used.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The number of times to loop video files.
-1: Loop indefinitely
0: Do not loop
> 0: The number of loop times. A task will end either when the videos are looped for the specified number of times or at the specified task end time, whichever is earlier.
This parameter is valid only if the source is video files.
         * @type {number || null}
         */
        this.VodLoopTimes = null;

        /**
         * The behavior after the source video files (`SourceUrls`) are changed.
ImmediateNewSource: Play the new videos immediately
ContinueBreakPoint: Finish the current video first and then pull from the new source.
This parameter is valid only if the source is video files.
         * @type {string || null}
         */
        this.VodRefreshType = null;

        /**
         * Whether to enable or pause the task. Valid values:
enable
pause
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The events to listen for. If you do not pass this parameter, all events will be listened for.
TaskStart: Callback for starting a task
TaskExit: Callback for ending a task
VodSourceFileStart: Callback for starting to pull from video files
VodSourceFileFinish: Callback for stopping pulling from video files
ResetTaskConfig: Callback for modifying a task
         * @type {Array.<string> || null}
         */
        this.CallbackEvents = null;

        /**
         * A custom callback URL.
Callbacks will be sent to this URL.
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * The index of the video to start from.
The value of this parameter cannot be smaller than 1 or larger than the number of elements in `SourceUrls`.
         * @type {number || null}
         */
        this.FileIndex = null;

        /**
         * The playback offset (seconds).
Notes:
1. This parameter should be used together with `FileIndex`.
         * @type {number || null}
         */
        this.OffsetTime = null;

        /**
         * The remarks for the task.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * The backup source type.
PullLivePushLive: Live streaming
PullVodPushLive: Video files
Notes:
1. Backup sources are supported only if the primary source type is live streaming.
2. When pull from the primary source is interrupted, the system will pull from the backup source.
3. If the backup source is a video file, each time the video is finished, the system will check if the primary source is recovered and will switch back if it is.
         * @type {string || null}
         */
        this.BackupSourceType = null;

        /**
         * The URL of the backup source.
You can specify only one backup source URL.
         * @type {string || null}
         */
        this.BackupSourceUrl = null;

        /**
         * The information of watermarks to add.
Notes:
1. You can add up to four watermarks to different locations of the video.
2. Make sure you use publicly accessible URLs for the watermark images.
3. Supported image formats include PNG and JPG.
4. If you change the watermark configuration of a task whose source is a list of video files, the new configuration will take effect for the next file in the list.
5. If you change the watermark configuration of a task whose source is a live stream, the new configuration will take effect immediately.
6. If you want to stop using watermarks, pass in an empty array.
7. Currently, animated watermarks are not supported.
         * @type {Array.<PullPushWatermarkInfo> || null}
         */
        this.WatermarkList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.SourceUrls = 'SourceUrls' in params ? params.SourceUrls : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.VodLoopTimes = 'VodLoopTimes' in params ? params.VodLoopTimes : null;
        this.VodRefreshType = 'VodRefreshType' in params ? params.VodRefreshType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CallbackEvents = 'CallbackEvents' in params ? params.CallbackEvents : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.FileIndex = 'FileIndex' in params ? params.FileIndex : null;
        this.OffsetTime = 'OffsetTime' in params ? params.OffsetTime : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.BackupSourceType = 'BackupSourceType' in params ? params.BackupSourceType : null;
        this.BackupSourceUrl = 'BackupSourceUrl' in params ? params.BackupSourceUrl : null;

        if (params.WatermarkList) {
            this.WatermarkList = new Array();
            for (let z in params.WatermarkList) {
                let obj = new PullPushWatermarkInfo();
                obj.deserialize(params.WatermarkList[z]);
                this.WatermarkList.push(obj);
            }
        }

    }
}

/**
 * DescribeLiveTranscodeDetailInfo request structure.
 * @class
 */
class DescribeLiveTranscodeDetailInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.PushDomain = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Query date (UTC+8)
Format: yyyymmdd
Note: you can query the statistics for a day in the past month, with yesterday as the latest date allowed.
         * @type {string || null}
         */
        this.DayTime = null;

        /**
         * Number of pages. Default value: 1.
Up to 100 pages.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Default value: 20,
Value range: [10,1000].
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Start day time (Beijing time),
In the format of `yyyymmdd`.
Note: details for the last month can be queried.
         * @type {string || null}
         */
        this.StartDayTime = null;

        /**
         * End date (UTC+8)
Format: yyyymmdd
Note: you can query the statistics for a period in the past month, with yesterday as the latest date allowed. You must specify either `DayTime`, or `StartDayTime` and `EndDayTime`. If you specify all three parameters, only `DayTime` will be applied.
         * @type {string || null}
         */
        this.EndDayTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.DayTime = 'DayTime' in params ? params.DayTime : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.StartDayTime = 'StartDayTime' in params ? params.StartDayTime : null;
        this.EndDayTime = 'EndDayTime' in params ? params.EndDayTime : null;

    }
}

/**
 * ModifyLiveDomainReferer response structure.
 * @class
 */
class ModifyLiveDomainRefererResponse extends  AbstractModel {
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
 * DeleteLiveWatermark request structure.
 * @class
 */
class DeleteLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID.
Watermark ID obtained in the returned value of the [AddLiveWatermark](https://intl.cloud.tencent.com/document/product/267/30154?from_cn_redirect=1) API call.
Watermark ID returned by the `DescribeLiveWatermarks` API.
         * @type {number || null}
         */
        this.WatermarkId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;

    }
}

/**
 * DescribeLiveDomains request structure.
 * @class
 */
class DescribeLiveDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter by domain name status. 0: disabled, 1: enabled.
         * @type {number || null}
         */
        this.DomainStatus = null;

        /**
         * Filter by domain name type. 0: push. 1: playback
         * @type {number || null}
         */
        this.DomainType = null;

        /**
         * Number of entries per page. Value range: 10-100. Default value: 10.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number to get. Value range: 1-100000. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 0: LVB, 1: LCB. Default value: 0.
         * @type {number || null}
         */
        this.IsDelayLive = null;

        /**
         * Domain name prefix.
         * @type {string || null}
         */
        this.DomainPrefix = null;

        /**
         * Playback region. This parameter is valid only when `DomainType` is set to `1`.
`1`: Chinese mainland
`2`: global
`3`: outside Chinese mainland
         * @type {number || null}
         */
        this.PlayType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;
        this.DomainType = 'DomainType' in params ? params.DomainType : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;
        this.DomainPrefix = 'DomainPrefix' in params ? params.DomainPrefix : null;
        this.PlayType = 'PlayType' in params ? params.PlayType : null;

    }
}

/**
 * The latest pull information.
 * @class
 */
class RecentPullInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL of the file currently pulled.
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * The offset of the file currently pulled.
         * @type {number || null}
         */
        this.OffsetTime = null;

        /**
         * The time when the offset is reported, in UTC format.
Example: 2020-07-23T03:20:39Z
Note: Beijing time is 8 hours ahead of UTC.
         * @type {string || null}
         */
        this.ReportTime = null;

        /**
         * The number of times looped.
         * @type {number || null}
         */
        this.LoopedTimes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.OffsetTime = 'OffsetTime' in params ? params.OffsetTime : null;
        this.ReportTime = 'ReportTime' in params ? params.ReportTime : null;
        this.LoopedTimes = 'LoopedTimes' in params ? params.LoopedTimes : null;

    }
}

/**
 * Screencapturing template information.
 * @class
 */
class SnapshotTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Screencapturing interval. Value range: 5-300s.
         * @type {number || null}
         */
        this.SnapshotInterval = null;

        /**
         * Screenshot width. Value range: 0-3000. 
0: original width and fit to the original ratio.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Screenshot height. Value range: 0-2000.
0: original height and fit to the original ratio.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Whether to enable porn detection. 0: no, 1: yes.
         * @type {number || null}
         */
        this.PornFlag = null;

        /**
         * COS application ID.
         * @type {number || null}
         */
        this.CosAppId = null;

        /**
         * COS bucket name.
         * @type {string || null}
         */
        this.CosBucket = null;

        /**
         * COS region.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * COS bucket folder prefix.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CosPrefix = null;

        /**
         * COS filename.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CosFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.SnapshotInterval = 'SnapshotInterval' in params ? params.SnapshotInterval : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.PornFlag = 'PornFlag' in params ? params.PornFlag : null;
        this.CosAppId = 'CosAppId' in params ? params.CosAppId : null;
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CosPrefix = 'CosPrefix' in params ? params.CosPrefix : null;
        this.CosFileName = 'CosFileName' in params ? params.CosFileName : null;

    }
}

/**
 * DeleteLiveSnapshotRule response structure.
 * @class
 */
class DeleteLiveSnapshotRuleResponse extends  AbstractModel {
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
 * CreateLiveRecord request structure.
 * @class
 */
class CreateLiveRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name. This parameter must be set for multi-domain name push.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Recording start time, which is China standard time and should be URL-encoded (RFC3986). For example, the encoding of 2017-01-01 10:10:01 is 2017-01-01+10%3a10%3a01.
In scheduled recording mode, this field must be set; in real-time video recording mode, this field is ignored.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Recording end time, which is China standard time and should be URL-encoded (RFC3986). For example, the encoding of 2017-01-01 10:30:01 is 2017-01-01+10%3a30%3a01.
In scheduled recording mode, this field must be set; in real-time video recording mode, this field is optional. If the recording is set to real-time video recording mode through the `Highlight` parameter, the set end time should not be more than 30 minutes after the current time. If the set end time is more than 30 minutes after the current time, earlier than the current time, or left empty, the actual end time will be 30 minutes after the current time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Recording type.
"video": Audio-video recording **(default)**.
"audio": audio recording.
In both scheduled and real-time video recording modes, this parameter is valid and is not case sensitive.
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Recording file format. Valid values:
"flv" **(default)**, "hls", "mp4", "aac", "mp3".
In both scheduled and real-time video recording modes, this parameter is valid and is not case sensitive.
         * @type {string || null}
         */
        this.FileFormat = null;

        /**
         * Mark for enabling real-time video recording mode.
0: Real-time video recording mode is not enabled, i.e., the scheduled recording mode is used **(default)**. See [Sample 1](#.E7.A4.BA.E4.BE.8B1-.E5.88.9B.E5.BB.BA.E5.AE.9A.E6.97.B6.E5.BD.95.E5.88.B6.E4.BB.BB.E5.8A.A1).
1: Real-time video recording mode is enabled. See [Sample 2](#.E7.A4.BA.E4.BE.8B2-.E5.88.9B.E5.BB.BA.E5.AE.9E.E6.97.B6.E5.BD.95.E5.88.B6.E4.BB.BB.E5.8A.A1).
         * @type {number || null}
         */
        this.Highlight = null;

        /**
         * Flag for enabling A+B=C mixed stream recording.
0: A+B=C mixed stream recording is not enabled **(default)**.
1: A+B=C mixed stream recording is enabled.
In both scheduled and real-time video recording modes, this parameter is valid.
         * @type {number || null}
         */
        this.MixStream = null;

        /**
         * Recording stream parameter. The following parameters are supported currently:
record_interval: recording interval in seconds. Value range: 1800-7200.
storage_time: recording file storage duration in seconds.
Example: record_interval=3600&storage_time=2592000.
Note: the parameter needs to be URL-encoded.
In both scheduled and real-time video recording modes, this parameter is valid.
         * @type {string || null}
         */
        this.StreamParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.FileFormat = 'FileFormat' in params ? params.FileFormat : null;
        this.Highlight = 'Highlight' in params ? params.Highlight : null;
        this.MixStream = 'MixStream' in params ? params.MixStream : null;
        this.StreamParam = 'StreamParam' in params ? params.StreamParam : null;

    }
}

/**
 * DescribeLiveTimeShiftBillInfoList response structure.
 * @class
 */
class DescribeLiveTimeShiftBillInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The time shifting billing data.
         * @type {Array.<TimeShiftBillData> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new TimeShiftBillData();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Bandwidth information
 * @class
 */
class BandwidthInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Format of return value:
yyyy-mm-dd HH:MM:SS
The time accuracy matches with the query granularity.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Bandwidth.
         * @type {number || null}
         */
        this.Bandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

    }
}

/**
 * CancelCommonMixStream request structure.
 * @class
 */
class CancelCommonMixStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of stream mix session (from applying for stream mix to canceling stream mix).
This value is the same as the `MixStreamSessionId` in `CreateCommonMixStream`.
         * @type {string || null}
         */
        this.MixStreamSessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MixStreamSessionId = 'MixStreamSessionId' in params ? params.MixStreamSessionId : null;

    }
}

/**
 * UpdateLiveWatermark request structure.
 * @class
 */
class UpdateLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID.
Get the watermark ID in the returned value of the [AddLiveWatermark](https://intl.cloud.tencent.com/document/product/267/30154?from_cn_redirect=1) API call.
         * @type {number || null}
         */
        this.WatermarkId = null;

        /**
         * Watermark image URL.
Unallowed characters in the URL:
 ;(){}$>`#"\'|
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * Display position: X-axis offset in %. Default value: 0.
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * Display position: Y-axis offset in %. Default value: 0.
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * Watermark name.
Up to 16 bytes.
         * @type {string || null}
         */
        this.WatermarkName = null;

        /**
         * Watermark width or its percentage of the live streaming video width. It is recommended to just specify either height or width as the other will be scaled proportionally to avoid distortions. The original width is used by default.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Watermark height or its percentage of the live streaming video width. It is recommended to just specify either height or width as the other will be scaled proportionally to avoid distortions. The original height is used by default.
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
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;
        this.PictureUrl = 'PictureUrl' in params ? params.PictureUrl : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;
        this.WatermarkName = 'WatermarkName' in params ? params.WatermarkName : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * Certificate information.
 * @class
 */
class CertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID.
         * @type {number || null}
         */
        this.CertId = null;

        /**
         * Certificate name.
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time in UTC format.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Certificate content.
         * @type {string || null}
         */
        this.HttpsCrt = null;

        /**
         * Certificate type.
0: user-added certificate
1: Tencent Cloud-hosted certificate
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * Certificate expiration time in UTC format.
         * @type {string || null}
         */
        this.CertExpireTime = null;

        /**
         * List of domain names that use this certificate.
         * @type {Array.<string> || null}
         */
        this.DomainList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.HttpsCrt = 'HttpsCrt' in params ? params.HttpsCrt : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertExpireTime = 'CertExpireTime' in params ? params.CertExpireTime : null;
        this.DomainList = 'DomainList' in params ? params.DomainList : null;

    }
}

/**
 * ModifyLivePushAuthKey response structure.
 * @class
 */
class ModifyLivePushAuthKeyResponse extends  AbstractModel {
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
 * DescribeLiveDelayInfoList response structure.
 * @class
 */
class DescribeLiveDelayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Delayed playback information list.
         * @type {Array.<DelayInfo> || null}
         */
        this.DelayInfoList = null;

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

        if (params.DelayInfoList) {
            this.DelayInfoList = new Array();
            for (let z in params.DelayInfoList) {
                let obj = new DelayInfo();
                obj.deserialize(params.DelayInfoList[z]);
                this.DelayInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveTranscodeTemplate request structure.
 * @class
 */
class DeleteLiveTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
1. Get the template ID in the returned value of the [CreateLiveTranscodeTemplate](https://intl.cloud.tencent.com/document/product/267/32646?from_cn_redirect=1) API call.
2. You can query the list of created templates through the [DescribeLiveTranscodeTemplates](https://intl.cloud.tencent.com/document/product/267/32641?from_cn_redirect=1) API.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeLiveCallbackRules request structure.
 * @class
 */
class DescribeLiveCallbackRulesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * Aggregated playback information of client IP.
 * @class
 */
class ClientIpPlaySumInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Client IP in dotted-decimal notation.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * District where the client is located.
         * @type {string || null}
         */
        this.Province = null;

        /**
         * Total traffic.
         * @type {number || null}
         */
        this.TotalFlux = null;

        /**
         * Total number of requests.
         * @type {number || null}
         */
        this.TotalRequest = null;

        /**
         * Total number of failed requests.
         * @type {number || null}
         */
        this.TotalFailedRequest = null;

        /**
         * Country/region where the client is located.
         * @type {string || null}
         */
        this.CountryArea = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.TotalFlux = 'TotalFlux' in params ? params.TotalFlux : null;
        this.TotalRequest = 'TotalRequest' in params ? params.TotalRequest : null;
        this.TotalFailedRequest = 'TotalFailedRequest' in params ? params.TotalFailedRequest : null;
        this.CountryArea = 'CountryArea' in params ? params.CountryArea : null;

    }
}

/**
 * DescribeLiveTranscodeTemplate response structure.
 * @class
 */
class DescribeLiveTranscodeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template information.
         * @type {TemplateInfo || null}
         */
        this.Template = null;

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

        if (params.Template) {
            let obj = new TemplateInfo();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveSnapshotTemplate response structure.
 * @class
 */
class CreateLiveSnapshotTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConcurrentRecordStreamNum request structure.
 * @class
 */
class DescribeConcurrentRecordStreamNumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Live streaming type. SlowLive: LCB.
NormalLive: LVB.
         * @type {string || null}
         */
        this.LiveType = null;

        /**
         * Start time in the format of `yyyy-mm-dd HH:MM:SS`.
Data for the last 180 days can be queried.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time in the format of `yyyy-mm-dd HH:MM:SS`.
The maximum time span supported is 31 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Valid values: Mainland (data for Mainland China), Oversea (data for regions outside Mainland China). If this parameter is left empty, data for all regions will be queried.
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

        /**
         * Playback domain name list. If this parameter is left empty, full data will be queried.
         * @type {Array.<string> || null}
         */
        this.PushDomains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LiveType = 'LiveType' in params ? params.LiveType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;
        this.PushDomains = 'PushDomains' in params ? params.PushDomains : null;

    }
}

/**
 * DescribePlayErrorCodeSumInfoList request structure.
 * @class
 */
class DescribePlayErrorCodeSumInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start point in time (Beijing time).
In the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End point in time (Beijing time).
In the format of `yyyy-mm-dd HH:MM:SS`.
Note: `EndTime` and `StartTime` only support querying data for the last day.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Playback domain name list. If this parameter is left empty, full data will be queried.
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * Number of pages. Value range: [1,1000]. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Value range: [1,1000]. Default value: 20.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Region. Valid values: Mainland (data for Mainland China), Oversea (data for regions outside Mainland China), China (data for China, including Hong Kong, Macao, and Taiwan), Foreign (data for regions outside China, excluding Hong Kong, Macao, and Taiwan), Global (default). If this parameter is left empty, data for all regions will be queried.
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

        /**
         * Grouping parameter. Valid values: CountryProIsp (default value), Country (country/region). Grouping is made by country/region + district + ISP by default. Currently, districts and ISPs outside Mainland China cannot be recognized.
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * Language used in the output field. Valid values: Chinese (default), English. Currently, country/region, district, and ISP parameters support multiple languages.
         * @type {string || null}
         */
        this.OutLanguage = null;

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
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.OutLanguage = 'OutLanguage' in params ? params.OutLanguage : null;

    }
}

/**
 * ModifyLiveRecordTemplate response structure.
 * @class
 */
class ModifyLiveRecordTemplateResponse extends  AbstractModel {
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
 * General stream mix control parameter
 * @class
 */
class CommonMixControlParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value range: [0,1]. 
If 1 is entered, when the layer resolution in the parameter is different from the actual video resolution, the video will be automatically cropped according to the resolution set by the layer.
         * @type {number || null}
         */
        this.UseMixCropCenter = null;

        /**
         * Value range: [0,1].
If this parameter is set to 1, when both `InputStreamList` and `OutputParams.OutputStreamType` are set to 1, you can copy a stream instead of canceling it.
         * @type {number || null}
         */
        this.AllowCopy = null;

        /**
         * Valid values: 0, 1
If you set this parameter to 1, SEI (Supplemental Enhanced Information) of the input streams will be passed through.
         * @type {number || null}
         */
        this.PassInputSei = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UseMixCropCenter = 'UseMixCropCenter' in params ? params.UseMixCropCenter : null;
        this.AllowCopy = 'AllowCopy' in params ? params.AllowCopy : null;
        this.PassInputSei = 'PassInputSei' in params ? params.PassInputSei : null;

    }
}

/**
 * Total usage of the transcoding service
 * @class
 */
class TranscodeTotalInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usage time (Beijing time)
Example: 2019-03-01 00:00:00
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Transcoding duration in minutes
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Codec, with modules
Examples:
`liveprocessor_H264`: live transcoding-H264
`liveprocessor_H265`: live transcoding-H265
`topspeed_H264`: top speed codec-H264
`topspeed_H265`: top speed codec-H265
         * @type {string || null}
         */
        this.ModuleCodec = null;

        /**
         * Resolution
Example: 540*480
         * @type {string || null}
         */
        this.Resolution = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ModuleCodec = 'ModuleCodec' in params ? params.ModuleCodec : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;

    }
}

/**
 * DescribeTranscodeTaskNum response structure.
 * @class
 */
class DescribeTranscodeTaskNumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of tasks.
         * @type {Array.<TranscodeTaskNum> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new TranscodeTaskNum();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnBindLiveDomainCert response structure.
 * @class
 */
class UnBindLiveDomainCertResponse extends  AbstractModel {
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
 * ForbidLiveDomain request structure.
 * @class
 */
class ForbidLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * LVB domain name to be disabled.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeLiveRecordRules request structure.
 * @class
 */
class DescribeLiveRecordRulesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribePlayErrorCodeDetailInfoList response structure.
 * @class
 */
class DescribePlayErrorCodeDetailInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistics list.
         * @type {Array.<HttpCodeInfo> || null}
         */
        this.HttpCodeList = null;

        /**
         * Statistics type.
         * @type {string || null}
         */
        this.StatType = null;

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

        if (params.HttpCodeList) {
            this.HttpCodeList = new Array();
            for (let z in params.HttpCodeList) {
                let obj = new HttpCodeInfo();
                obj.deserialize(params.HttpCodeList[z]);
                this.HttpCodeList.push(obj);
            }
        }
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveRecordTemplate response structure.
 * @class
 */
class CreateLiveRecordTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Bandwidth, traffic, number of requests, and number of concurrent connections of an ISP in a district.
 * @class
 */
class GroupProIspDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * District.
         * @type {string || null}
         */
        this.ProvinceName = null;

        /**
         * ISP.
         * @type {string || null}
         */
        this.IspName = null;

        /**
         * Detailed data at the minute level.
         * @type {Array.<CdnPlayStatData> || null}
         */
        this.DetailInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProvinceName = 'ProvinceName' in params ? params.ProvinceName : null;
        this.IspName = 'IspName' in params ? params.IspName : null;

        if (params.DetailInfoList) {
            this.DetailInfoList = new Array();
            for (let z in params.DetailInfoList) {
                let obj = new CdnPlayStatData();
                obj.deserialize(params.DetailInfoList[z]);
                this.DetailInfoList.push(obj);
            }
        }

    }
}

/**
 * Recording template parameter.
 * @class
 */
class RecordParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Max recording time per file
Default value: `1800` (seconds)
Value range: 30-7200
This parameter is invalid for HLS. Only one HLS file will be generated from push start to push end.
         * @type {number || null}
         */
        this.RecordInterval = null;

        /**
         * Storage duration of the recording file
Value range: 0-129600000 seconds (0-1500 days)
`0`: permanent
         * @type {number || null}
         */
        this.StorageTime = null;

        /**
         * Whether to enable recording in the current format. Default value: 0. 0: no, 1: yes.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * VOD subapplication ID.
         * @type {number || null}
         */
        this.VodSubAppId = null;

        /**
         * Recording filename.
Supported special placeholders include:
{StreamID}: stream ID
{StartYear}: start time - year
{StartMonth}: start time - month
{StartDay}: start time - day
{StartHour}: start time - hour
{StartMinute}: start time - minute
{StartSecond}: start time - second
{StartMillisecond}: start time - millisecond
{EndYear}: end time - year
{EndMonth}: end time - month
{EndDay}: end time - day
{EndHour}: end time - hour
{EndMinute}: end time - minute
{EndSecond}: end time - second
{EndMillisecond}: end time - millisecond

If this parameter is not set, the recording filename will be `{StreamID}_{StartYear}-{StartMonth}-{StartDay}-{StartHour}-{StartMinute}-{StartSecond}_{EndYear}-{EndMonth}-{EndDay}-{EndHour}-{EndMinute}-{EndSecond}` by default
         * @type {string || null}
         */
        this.VodFileName = null;

        /**
         * Task flow
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Procedure = null;

        /**
         * Video storage class. Valid values:
`normal`: STANDARD
`cold`: STANDARD_IA
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.StorageMode = null;

        /**
         * VOD subapplication category
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.ClassId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordInterval = 'RecordInterval' in params ? params.RecordInterval : null;
        this.StorageTime = 'StorageTime' in params ? params.StorageTime : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.VodSubAppId = 'VodSubAppId' in params ? params.VodSubAppId : null;
        this.VodFileName = 'VodFileName' in params ? params.VodFileName : null;
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.StorageMode = 'StorageMode' in params ? params.StorageMode : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;

    }
}

/**
 * ForbidLiveStream response structure.
 * @class
 */
class ForbidLiveStreamResponse extends  AbstractModel {
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
 * Playback error code information
 * @class
 */
class HttpStatusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback HTTP status code.
         * @type {string || null}
         */
        this.HttpStatus = null;

        /**
         * Quantity.
         * @type {number || null}
         */
        this.Num = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HttpStatus = 'HttpStatus' in params ? params.HttpStatus : null;
        this.Num = 'Num' in params ? params.Num : null;

    }
}

/**
 * DeleteLiveRecord request structure.
 * @class
 */
class DeleteLiveRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Task ID returned by the `CreateLiveRecord` API.
         * @type {number || null}
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
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeLiveSnapshotTemplates response structure.
 * @class
 */
class DescribeLiveSnapshotTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Screencapturing template list.
         * @type {Array.<SnapshotTemplateInfo> || null}
         */
        this.Templates = null;

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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new SnapshotTemplateInfo();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopRecordTask request structure.
 * @class
 */
class StopRecordTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recording task ID.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeLiveDomainReferer request structure.
 * @class
 */
class DescribeLiveDomainRefererRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * Playback error code information
 * @class
 */
class HttpStatusData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data point in time,
In the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Playback status code details.
         * @type {Array.<HttpStatusInfo> || null}
         */
        this.HttpStatusInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;

        if (params.HttpStatusInfoList) {
            this.HttpStatusInfoList = new Array();
            for (let z in params.HttpStatusInfoList) {
                let obj = new HttpStatusInfo();
                obj.deserialize(params.HttpStatusInfoList[z]);
                this.HttpStatusInfoList.push(obj);
            }
        }

    }
}

/**
 * HTTP return code and statistics
 * @class
 */
class HttpCodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP return code.
Example: "2xx", "3xx", "4xx", "5xx".
         * @type {string || null}
         */
        this.HttpCode = null;

        /**
         * Statistics. 0 will be added for points in time when there is no data.
         * @type {Array.<HttpCodeValue> || null}
         */
        this.ValueList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HttpCode = 'HttpCode' in params ? params.HttpCode : null;

        if (params.ValueList) {
            this.ValueList = new Array();
            for (let z in params.ValueList) {
                let obj = new HttpCodeValue();
                obj.deserialize(params.ValueList[z]);
                this.ValueList.push(obj);
            }
        }

    }
}

/**
 * DescribeStreamPlayInfoList request structure.
 * @class
 */
class DescribeStreamPlayInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time (Beijing time) in the format of yyyy-mm-dd HH:MM:SS
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time (Beijing time) in the format of yyyy-mm-dd HH:MM:SS.
The start time and end time cannot be more than 24 hours apart and must be within the past month.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Playback domain name,
If this parameter is left empty, data of live streams of all playback domain names will be queried.
         * @type {string || null}
         */
        this.PlayDomain = null;

        /**
         * Stream name (exact match).
If this parameter is left empty, full playback data will be queried.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Push address. Its value is the same as the `AppName` in playback address. It supports exact match, and takes effect only when `StreamName` is passed at the same time.
If it is left empty, the full playback data will be queried.
Note: to query by `AppName`, you need to submit a ticket first. After your application succeeds, it will take about 5 business days (subject to the time in the reply) for the configuration to take effect.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Service name. Valid values: LVB, LEB. If this parameter is left empty, all data of LVB and LEB will be queried.
         * @type {string || null}
         */
        this.ServiceName = null;

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
        this.PlayDomain = 'PlayDomain' in params ? params.PlayDomain : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

    }
}

/**
 * CreateLiveTranscodeTemplate request structure.
 * @class
 */
class CreateLiveTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name, such as “900p”. This can be only a combination of letters and digits.
Length limit:
  Standard transcoding: 1-10 characters
  Top speed codec transcoding: 3-10 characters
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Video bitrate in Kbps. Value range: 100-8000.
Note: the transcoding template requires that the bitrate be unique. Therefore, the final saved bitrate may be different from the input bitrate.
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * Audio codec. Default value: aac.
Note: this parameter is unsupported now.
         * @type {string || null}
         */
        this.Acodec = null;

        /**
         * Audio bitrate. Default value: 0.
Value range: 0-500.
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * Video codec. Valid values: h264, h265, origin (default)

origin: original codec as the output codec
         * @type {string || null}
         */
        this.Vcodec = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether to keep the video. 0: no; 1: yes. Default value: 1.
         * @type {number || null}
         */
        this.NeedVideo = null;

        /**
         * Width. Default value: 0.
Value range: 0-3000
It must be a multiple of 2. The original width is 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Whether to keep the audio. 0: no; 1: yes. Default value: 1.
         * @type {number || null}
         */
        this.NeedAudio = null;

        /**
         * Height. Default value: 0
Value range: 0-3000
The value must be a multiple of 2. The original height is `0`.
This parameter is required for a top speed codec template (when `AiTransCode` is `1`).
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Frame rate. Default value: 0.
Value range: 0-60
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Keyframe interval in seconds. Default value: original interval
Value range: 2-6
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * Rotation angle. Default value: 0.
Valid values: 0, 90, 180, 270
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * Encoding quality:
baseline/main/high. Default value: baseline.
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * Whether to use the original bitrate when the set bitrate is larger than the original bitrate.
0: no, 1: yes
Default value: 0.
         * @type {number || null}
         */
        this.BitrateToOrig = null;

        /**
         * Whether to use the original height when the set height is higher than the original height.
0: no, 1: yes
Default value: 0.
         * @type {number || null}
         */
        this.HeightToOrig = null;

        /**
         * Whether to use the original frame rate when the set frame rate is larger than the original frame rate.
0: no, 1: yes
Default value: 0.
         * @type {number || null}
         */
        this.FpsToOrig = null;

        /**
         * Whether it is a top speed codec template. 0: no, 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.AiTransCode = null;

        /**
         * Bitrate compression ratio of top speed codec video.
Target bitrate of top speed code = VideoBitrate * (1-AdaptBitratePercent)

Value range: 0.0-0.5.
         * @type {number || null}
         */
        this.AdaptBitratePercent = null;

        /**
         * Whether to use the short side as the video height. 0: no, 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.ShortEdgeAsHeight = null;

        /**
         * The DRM encryption type. Valid values: fairplay, normalaes, widevine.
If you do not pass this parameter or pass in an empty string, the existing configuration will be reset.
         * @type {string || null}
         */
        this.DRMType = null;

        /**
         * The tracks to encrypt. Valid values: AUDIO, SD, HD, UHD1, UHD2. You can choose only one video track (SD, HD, UHD1, or UHD2).
If you do not pass this parameter or pass in an empty string, the existing configuration will be reset.
         * @type {string || null}
         */
        this.DRMTracks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.Acodec = 'Acodec' in params ? params.Acodec : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.Vcodec = 'Vcodec' in params ? params.Vcodec : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.NeedVideo = 'NeedVideo' in params ? params.NeedVideo : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.NeedAudio = 'NeedAudio' in params ? params.NeedAudio : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.BitrateToOrig = 'BitrateToOrig' in params ? params.BitrateToOrig : null;
        this.HeightToOrig = 'HeightToOrig' in params ? params.HeightToOrig : null;
        this.FpsToOrig = 'FpsToOrig' in params ? params.FpsToOrig : null;
        this.AiTransCode = 'AiTransCode' in params ? params.AiTransCode : null;
        this.AdaptBitratePercent = 'AdaptBitratePercent' in params ? params.AdaptBitratePercent : null;
        this.ShortEdgeAsHeight = 'ShortEdgeAsHeight' in params ? params.ShortEdgeAsHeight : null;
        this.DRMType = 'DRMType' in params ? params.DRMType : null;
        this.DRMTracks = 'DRMTracks' in params ? params.DRMTracks : null;

    }
}

/**
 * DescribeLiveStreamPublishedList response structure.
 * @class
 */
class DescribeLiveStreamPublishedListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push record information.
         * @type {Array.<StreamName> || null}
         */
        this.PublishInfo = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of eligible ones.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.PublishInfo) {
            this.PublishInfo = new Array();
            for (let z in params.PublishInfo) {
                let obj = new StreamName();
                obj.deserialize(params.PublishInfo[z]);
                this.PublishInfo.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveDomain request structure.
 * @class
 */
class DeleteLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name to be deleted.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Type. 0: push, 1: playback.
         * @type {number || null}
         */
        this.DomainType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DomainType = 'DomainType' in params ? params.DomainType : null;

    }
}

/**
 * AddDelayLiveStream response structure.
 * @class
 */
class AddDelayLiveStreamResponse extends  AbstractModel {
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
 * DescribeLiveTranscodeTemplates response structure.
 * @class
 */
class DescribeLiveTranscodeTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of transcoding templates.
         * @type {Array.<TemplateInfo> || null}
         */
        this.Templates = null;

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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new TemplateInfo();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveCallbackRule request structure.
 * @class
 */
class DeleteLiveCallbackRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * Playback authentication key information.
 * @class
 */
class PlayAuthKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Whether to enable:
0: disable.
1: enable.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Authentication key.
         * @type {string || null}
         */
        this.AuthKey = null;

        /**
         * Validity period in seconds.
         * @type {number || null}
         */
        this.AuthDelta = null;

        /**
         * Authentication `BackKey`.
         * @type {string || null}
         */
        this.AuthBackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;
        this.AuthDelta = 'AuthDelta' in params ? params.AuthDelta : null;
        this.AuthBackKey = 'AuthBackKey' in params ? params.AuthBackKey : null;

    }
}

/**
 * Error information for domains that a batch domain operation API fails to operate.
 * @class
 */
class BatchDomainOperateErrors extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain that the API failed to operate.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * The API 3.0 error code.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * The API 3.0 error message.
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * ModifyLiveTranscodeTemplate request structure.
 * @class
 */
class ModifyLiveTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Video codec. Valid values: h264, h265, origin (default)

origin: original codec as the output codec
         * @type {string || null}
         */
        this.Vcodec = null;

        /**
         * Audio codec. Defaut value: aac.
Note: this parameter is unsupported now.
         * @type {string || null}
         */
        this.Acodec = null;

        /**
         * Audio bitrate. Default value: 0.
Value range: 0-500.
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Video bitrate in Kbps. Value range: 100-8000.
Note: the transcoding template requires that the bitrate be unique. Therefore, the final saved bitrate may be different from the input bitrate.
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * Width in pixels. Value range: 0-3000.
It must be a multiple of 2. The original width is 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Whether to keep the video. 0: no; 1: yes. Default value: 1.
         * @type {number || null}
         */
        this.NeedVideo = null;

        /**
         * Whether to keep the audio. 0: no; 1: yes. Default value: 1.
         * @type {number || null}
         */
        this.NeedAudio = null;

        /**
         * Height in pixels. Value range: 0-3000.
It must be a multiple of 2. The original height is 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Frame rate in fps. Default value: 0.
Value range: 0-60
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Keyframe interval in seconds.
Value range: 2-6
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * Rotation angle. Default value: 0.
Valid values: 0, 90, 180, 270
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * Encoding quality:
baseline/main/high.
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * Whether to use the original bitrate when the set bitrate is larger than the original bitrate.
0: no, 1: yes
Default value: 0.
         * @type {number || null}
         */
        this.BitrateToOrig = null;

        /**
         * Whether to use the original height when the set height is higher than the original height.
0: no, 1: yes
Default value: 0.
         * @type {number || null}
         */
        this.HeightToOrig = null;

        /**
         * Whether to use the original frame rate when the set frame rate is larger than the original frame rate.
0: no, 1: yes
Default value: 0.
         * @type {number || null}
         */
        this.FpsToOrig = null;

        /**
         * Bitrate compression ratio of top speed codec video.
Target bitrate of top speed code = VideoBitrate * (1-AdaptBitratePercent)

Value range: 0.0-0.5.
         * @type {number || null}
         */
        this.AdaptBitratePercent = null;

        /**
         * Whether to use the short side as the video height. 0: no, 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.ShortEdgeAsHeight = null;

        /**
         * The DRM encryption type. Valid values: fairplay, normalaes, widevine.
If you do not pass this parameter or pass in an empty string, the existing configuration will be reset.
         * @type {string || null}
         */
        this.DRMType = null;

        /**
         * The tracks to encrypt. Valid values: AUDIO, SD, HD, UHD1, UHD2. You can choose only one video track (SD, HD, UHD1, or UHD2).
If you do not pass this parameter or pass in an empty string, the existing configuration will be reset.
         * @type {string || null}
         */
        this.DRMTracks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Vcodec = 'Vcodec' in params ? params.Vcodec : null;
        this.Acodec = 'Acodec' in params ? params.Acodec : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.NeedVideo = 'NeedVideo' in params ? params.NeedVideo : null;
        this.NeedAudio = 'NeedAudio' in params ? params.NeedAudio : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.BitrateToOrig = 'BitrateToOrig' in params ? params.BitrateToOrig : null;
        this.HeightToOrig = 'HeightToOrig' in params ? params.HeightToOrig : null;
        this.FpsToOrig = 'FpsToOrig' in params ? params.FpsToOrig : null;
        this.AdaptBitratePercent = 'AdaptBitratePercent' in params ? params.AdaptBitratePercent : null;
        this.ShortEdgeAsHeight = 'ShortEdgeAsHeight' in params ? params.ShortEdgeAsHeight : null;
        this.DRMType = 'DRMType' in params ? params.DRMType : null;
        this.DRMTracks = 'DRMTracks' in params ? params.DRMTracks : null;

    }
}

/**
 * EnableLiveDomain request structure.
 * @class
 */
class EnableLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * LVB domain name to be enabled.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeLiveTranscodeTotalInfo response structure.
 * @class
 */
class DescribeLiveTranscodeTotalInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of transcoding data
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {Array.<TranscodeTotalInfo> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new TranscodeTotalInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveSnapshotRules request structure.
 * @class
 */
class DescribeLiveSnapshotRulesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * CreateRecordTask request structure.
 * @class
 */
class CreateRecordTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Recording end time in UNIX timestamp format. `EndTime` should be later than `StartTime` and the current time, and the duration between `EndTime` and `StartTime` is up to 24 hours.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Recording start time in UNIX timestamp format. Leaving this parameter empty means starting recording now. `StartTime` cannot be later than the current time plus 6 days.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Push type. Default value: 0. Valid values:
0: LVB push.
1: mixed stream, i.e., A + B = C mixed stream.
         * @type {number || null}
         */
        this.StreamType = null;

        /**
         * Recording template ID, which is the returned value of `CreateLiveRecordTemplate`. If this parameter is left empty or incorrect, the stream will be recorded in HLS format and retained permanently by default.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Extension field which is not defined now. It is empty by default.
         * @type {string || null}
         */
        this.Extension = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.StreamType = 'StreamType' in params ? params.StreamType : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Extension = 'Extension' in params ? params.Extension : null;

    }
}

/**
 * CreateLiveTranscodeRule response structure.
 * @class
 */
class CreateLiveTranscodeRuleResponse extends  AbstractModel {
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
 * CreateLiveCallbackRule response structure.
 * @class
 */
class CreateLiveCallbackRuleResponse extends  AbstractModel {
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
 * DescribeLiveRecordTemplate response structure.
 * @class
 */
class DescribeLiveRecordTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recording template information.
         * @type {RecordTemplateInfo || null}
         */
        this.Template = null;

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

        if (params.Template) {
            let obj = new RecordTemplateInfo();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVisitTopSumInfoList response structure.
 * @class
 */
class DescribeVisitTopSumInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number,
Value range: [1,1000],
Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Value range: [1,1000].
Default value: 20.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Bandwidth metric. Valid values: "Domain", "StreamId".
         * @type {string || null}
         */
        this.TopIndex = null;

        /**
         * Sorting metric. Valid values: AvgFluxPerSecond (sort by average traffic per second), TotalRequest (sort by total requests), TotalFlux (sort by total traffic). Default value: TotalRequest.
         * @type {string || null}
         */
        this.OrderParam = null;

        /**
         * Total number of results.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of result pages.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * Data content.
         * @type {Array.<PlaySumStatInfo> || null}
         */
        this.DataInfoList = null;

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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TopIndex = 'TopIndex' in params ? params.TopIndex : null;
        this.OrderParam = 'OrderParam' in params ? params.OrderParam : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new PlaySumStatInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Rule information
 * @class
 */
class CallBackRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Rule update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path.
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * Aggregated playback statistics.
 * @class
 */
class PlaySumStatInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name or stream ID.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Average download speed,
In MB/s.
Calculation formula: average download speed per minute.
         * @type {number || null}
         */
        this.AvgFluxPerSecond = null;

        /**
         * Total traffic in MB.
         * @type {number || null}
         */
        this.TotalFlux = null;

        /**
         * Total number of requests.
         * @type {number || null}
         */
        this.TotalRequest = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.AvgFluxPerSecond = 'AvgFluxPerSecond' in params ? params.AvgFluxPerSecond : null;
        this.TotalFlux = 'TotalFlux' in params ? params.TotalFlux : null;
        this.TotalRequest = 'TotalRequest' in params ? params.TotalRequest : null;

    }
}

/**
 * DescribeLiveTranscodeTemplates request structure.
 * @class
 */
class DescribeLiveTranscodeTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * HLS-specific recording parameter
 * @class
 */
class HlsSpecialParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Timeout period for restarting an interrupted HLS push.
Value range: [0, 1,800].
         * @type {number || null}
         */
        this.FlowContinueDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowContinueDuration = 'FlowContinueDuration' in params ? params.FlowContinueDuration : null;

    }
}

/**
 * DescribeLiveRecordRules response structure.
 * @class
 */
class DescribeLiveRecordRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of rules.
         * @type {Array.<RuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveSnapshotTemplate request structure.
 * @class
 */
class CreateLiveSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name.
Maximum length: 255 bytes.
Only letters, digits, underscores, and hyphens can be contained.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * COS application ID.
         * @type {number || null}
         */
        this.CosAppId = null;

        /**
         * COS bucket name.
Note: the value of `CosBucket` cannot contain `-[appid]`.
         * @type {string || null}
         */
        this.CosBucket = null;

        /**
         * COS region.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Description.
Maximum length: 1,024 bytes.
Only letters, digits, underscores, and hyphens can be contained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Screencapturing interval (s). Default value: 10
Value range: 2-300
         * @type {number || null}
         */
        this.SnapshotInterval = null;

        /**
         * Screenshot width. Default value: `0` (original width)
Value range: 0-3000
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Screenshot height. Default value: `0` (original height)
Value range: 0-2000
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Whether to enable porn detection. 0: no, 1: yes. Default value: 0
         * @type {number || null}
         */
        this.PornFlag = null;

        /**
         * COS Bucket folder prefix.
If no value is entered, the default value
`/{Year}-{Month}-{Day}`
will be used.
         * @type {string || null}
         */
        this.CosPrefix = null;

        /**
         * COS filename.
If no value is entered, the default value 
`{StreamID}-screenshot-{Hour}-{Minute}-{Second}-{Width}x{Height}{Ext}`
will be used.
         * @type {string || null}
         */
        this.CosFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.CosAppId = 'CosAppId' in params ? params.CosAppId : null;
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SnapshotInterval = 'SnapshotInterval' in params ? params.SnapshotInterval : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.PornFlag = 'PornFlag' in params ? params.PornFlag : null;
        this.CosPrefix = 'CosPrefix' in params ? params.CosPrefix : null;
        this.CosFileName = 'CosFileName' in params ? params.CosFileName : null;

    }
}

/**
 * HTTP return code data
 * @class
 */
class HttpCodeValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time in the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Occurrences.
         * @type {number || null}
         */
        this.Numbers = null;

        /**
         * Proportion.
         * @type {number || null}
         */
        this.Percentage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Numbers = 'Numbers' in params ? params.Numbers : null;
        this.Percentage = 'Percentage' in params ? params.Percentage : null;

    }
}

/**
 * DescribeLiveStreamOnlineList request structure.
 * @class
 */
class DescribeLiveStreamOnlineListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name. If you use multiple paths, enter the `DomainName`.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default. If you use multiple paths, enter the `AppName`.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Page number to get. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Maximum value: 100. 
Value: any integer between 10 and 100.
Default value: 10.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Stream name, which is used for exact query.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DeleteLiveCallbackTemplate request structure.
 * @class
 */
class DeleteLiveCallbackTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
1. Get the template ID in the returned value of the [CreateLiveCallbackTemplate](https://intl.cloud.tencent.com/document/product/267/32637?from_cn_redirect=1) API call.
2. You can query the list of created templates through the [DescribeLiveCallbackTemplates](https://intl.cloud.tencent.com/document/product/267/32632?from_cn_redirect=1) API.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeLiveSnapshotTemplate request structure.
 * @class
 */
class DescribeLiveSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
Template ID returned by the [CreateLiveSnapshotTemplate](https://intl.cloud.tencent.com/document/product/267/32624?from_cn_redirect=1) API call.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * The domain and certificate information returned by `DescribeLiveDomainCertBindings` and `DescribeLiveDomainCertBindingsGray`.
 * @class
 */
class LiveDomainCertBindings extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * The remarks for the certificate. This parameter is the same as `CertName`.
         * @type {string || null}
         */
        this.CertificateAlias = null;

        /**
         * The certificate type.
0: Self-owned certificate
1: Tencent Cloud-hosted certificate
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * Whether HTTPS is enabled.
1: Enabled
0: Disabled
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The expiration time of the certificate.
         * @type {string || null}
         */
        this.CertExpireTime = null;

        /**
         * The certificate ID.
         * @type {number || null}
         */
        this.CertId = null;

        /**
         * The SSL certificate ID assigned by Tencent Cloud.
         * @type {string || null}
         */
        this.CloudCertId = null;

        /**
         * The last updated time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CertExpireTime = 'CertExpireTime' in params ? params.CertExpireTime : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CloudCertId = 'CloudCertId' in params ? params.CloudCertId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateCommonMixStream response structure.
 * @class
 */
class CreateCommonMixStreamResponse extends  AbstractModel {
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
 * ModifyLiveDomainReferer request structure.
 * @class
 */
class ModifyLiveDomainRefererRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Whether to enable referer allowlist/blocklist authentication for the current domain name
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * List type. Valid values: `0` (blocklist), `1` (allowlist)
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Whether to allow empty referer. Valid values: `0` (no), `1` (yes)
         * @type {number || null}
         */
        this.AllowEmpty = null;

        /**
         * Referer list. Separate items in it with semicolons (;).
         * @type {string || null}
         */
        this.Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AllowEmpty = 'AllowEmpty' in params ? params.AllowEmpty : null;
        this.Rules = 'Rules' in params ? params.Rules : null;

    }
}

/**
 * CreateLiveCallbackTemplate response structure.
 * @class
 */
class CreateLiveCallbackTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLivePushAuthKey request structure.
 * @class
 */
class DescribeLivePushAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * Queries the playback information by ISP and district.
 * @class
 */
class PlayStatInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data point in time.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Value of bandwidth/traffic/number of requests/number of concurrent connections/download speed. If there is no data returned, the value is 0.
Note: this field may return null, indicating that no valid values can be obtained.
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
 * DescribeLiveCallbackTemplate request structure.
 * @class
 */
class DescribeLiveCallbackTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
1. Get the template ID in the returned value of the [CreateLiveCallbackTemplate](https://intl.cloud.tencent.com/document/product/267/32637?from_cn_redirect=1) API call.
2. You can query the list of created templates through the [DescribeLiveCallbackTemplates](https://intl.cloud.tencent.com/document/product/267/32632?from_cn_redirect=1) API.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * ModifyLiveSnapshotTemplate request structure.
 * @class
 */
class ModifyLiveSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * The COS application ID.
**Please note that this parameter is required now**.
         * @type {number || null}
         */
        this.CosAppId = null;

        /**
         * The COS bucket name.
Note: Do not include the `-[appid]` part in the value of `CosBucket`.
**Please note that this parameter is required now**.
         * @type {string || null}
         */
        this.CosBucket = null;

        /**
         * The COS region.
**Please note that this parameter is required now**.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Template name.
Maximum length: 255 bytes.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Description.
Maximum length: 1,024 bytes.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Screencapturing interval in seconds. Default value: 10s.
Value range: 5-300s.
         * @type {number || null}
         */
        this.SnapshotInterval = null;

        /**
         * Screenshot width. Default value: 0 (original width).
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Screenshot height. Default value: 0 (original height).
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Whether to enable porn detection. Default value: 0.
0: do not enable.
1: enable.
         * @type {number || null}
         */
        this.PornFlag = null;

        /**
         * COS bucket folder prefix.
         * @type {string || null}
         */
        this.CosPrefix = null;

        /**
         * COS filename.
         * @type {string || null}
         */
        this.CosFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.CosAppId = 'CosAppId' in params ? params.CosAppId : null;
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SnapshotInterval = 'SnapshotInterval' in params ? params.SnapshotInterval : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.PornFlag = 'PornFlag' in params ? params.PornFlag : null;
        this.CosPrefix = 'CosPrefix' in params ? params.CosPrefix : null;
        this.CosFileName = 'CosFileName' in params ? params.CosFileName : null;

    }
}

/**
 * DescribeLiveCert response structure.
 * @class
 */
class DescribeLiveCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate information.
         * @type {CertInfo || null}
         */
        this.CertInfo = null;

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

        if (params.CertInfo) {
            let obj = new CertInfo();
            obj.deserialize(params.CertInfo)
            this.CertInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveRecordRule response structure.
 * @class
 */
class CreateLiveRecordRuleResponse extends  AbstractModel {
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
 * DescribeLiveTranscodeTemplate request structure.
 * @class
 */
class DescribeLiveTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
Note: get the template ID in the returned value of the [CreateLiveTranscodeTemplate](https://intl.cloud.tencent.com/document/product/267/32646?from_cn_redirect=1) API call.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * ModifyLiveCallbackTemplate response structure.
 * @class
 */
class ModifyLiveCallbackTemplateResponse extends  AbstractModel {
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
 * DeleteLiveWatermark response structure.
 * @class
 */
class DeleteLiveWatermarkResponse extends  AbstractModel {
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
 * DescribeLivePushAuthKey response structure.
 * @class
 */
class DescribeLivePushAuthKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push authentication key information.
         * @type {PushAuthKeyInfo || null}
         */
        this.PushAuthKeyInfo = null;

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

        if (params.PushAuthKeyInfo) {
            let obj = new PushAuthKeyInfo();
            obj.deserialize(params.PushAuthKeyInfo)
            this.PushAuthKeyInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveWatermarkRule request structure.
 * @class
 */
class CreateLiveWatermarkRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Watermark ID, which is the `WatermarkId` returned by the [AddLiveWatermark](https://intl.cloud.tencent.com/document/product/267/30154?from_cn_redirect=1) API.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeLiveRecordTemplates request structure.
 * @class
 */
class DescribeLiveRecordTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is an LCB template. Default value: 0.
0: LVB.
1: LCB.
         * @type {number || null}
         */
        this.IsDelayLive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;

    }
}

/**
 * DescribeLiveDomain response structure.
 * @class
 */
class DescribeLiveDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name information.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {DomainInfo || null}
         */
        this.DomainInfo = null;

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

        if (params.DomainInfo) {
            let obj = new DomainInfo();
            obj.deserialize(params.DomainInfo)
            this.DomainInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRecordTask request structure.
 * @class
 */
class DeleteRecordTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID returned by `CreateRecordTask`. The recording task specified by `TaskId` will be deleted.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * The information of a stream pulling task.
 * @class
 */
class PullStreamTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The source type. Valid values:
PullLivePushLive: Live streaming
PullVodPushLive: Video files
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * The source URL(s).
If `SourceType` is `PullLiveToLive`, there can be only one source URL.
If `SourceType` is `PullVodToLive`, there can be at most 10 source URLs.
         * @type {Array.<string> || null}
         */
        this.SourceUrls = null;

        /**
         * The push domain name.
The pulled stream is pushed to this domain.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * The application to push to.
The pulled stream is pushed to this application.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * The stream name.
The pulled stream is pushed under this name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * The push parameter.
A custom push parameter.
         * @type {string || null}
         */
        this.PushArgs = null;

        /**
         * The start time.
It must be in UTC format.
Example: 2019-01-08T10:00:00Z.
Note: Beijing time is 8 hours ahead of UTC. The [ISO 8601 format](https://intl.cloud.tencent.com/document/product/266/11732#iso-date-format) is used.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time. Notes:
1. The end time must be later than the start time.
2. The end time and start time must be later than the current time.
3. The end time and start time must be less than seven days apart.
It must be in UTC format.
Example: 2019-01-08T10:00:00Z.
Note: Beijing time is 8 hours ahead of UTC. The [ISO 8601 format](https://intl.cloud.tencent.com/document/product/266/11732#iso-date-format) is used.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The region of the source (please choose the nearest region).
ap-beijing: North China (Beijing)
ap-shanghai: East China (Shanghai)
ap-guangzhou: South China (Guangzhou)
ap-mumbai: India
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The number of times to loop video files.
-1: Loop indefinitely
0: Do not loop
> 0: The number of loop times. A task will end either when the videos are looped for the specified number of times or at the specified task end time, whichever is earlier.
This parameter is valid only if the source is video files.
         * @type {number || null}
         */
        this.VodLoopTimes = null;

        /**
         * The behavior after the source video files (`SourceUrls`) are changed.
ImmediateNewSource: Play the new videos immediately
ContinueBreakPoint: Finish the current video first and then pull from the new source.

This parameter is valid only if the source is video files.
         * @type {string || null}
         */
        this.VodRefreshType = null;

        /**
         * The task creation time.
It must be in UTC format.
Example: 2019-01-08T10:00:00Z.
Note: Beijing time is 8 hours ahead of UTC. The [ISO 8601 format](https://intl.cloud.tencent.com/document/product/266/11732#iso-date-format) is used.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The last updated time.
It must be in UTC format.
Example: 2019-01-08T10:00:00Z.
Note: Beijing time is 8 hours ahead of UTC. The [ISO 8601 format](https://intl.cloud.tencent.com/document/product/266/11732#iso-date-format) is used.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The task creator.
         * @type {string || null}
         */
        this.CreateBy = null;

        /**
         * The operator of the last update.
         * @type {string || null}
         */
        this.UpdateBy = null;

        /**
         * The callback URL.
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * The events to listen for.
TaskStart: Callback for starting a task
TaskExit: Callback for ending a task
VodSourceFileStart: Callback for starting to pull from video files
VodSourceFileFinish: Callback for stopping pulling from video files
ResetTaskConfig: Callback for modifying a task
         * @type {Array.<string> || null}
         */
        this.CallbackEvents = null;

        /**
         * Note: This parameter is not returned currently.
The information of the last callback.
         * @type {string || null}
         */
        this.CallbackInfo = null;

        /**
         * Note: This parameter is not returned currently.
Error message.
         * @type {string || null}
         */
        this.ErrorInfo = null;

        /**
         * The task status.
enable: Enabled
pause: Paused
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Note: This parameter is returned only if one task is queried.
The latest pull information.
The information includes the source URL, offset, and report time.
         * @type {RecentPullInfo || null}
         */
        this.RecentPullInfo = null;

        /**
         * The remarks for the task.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * The backup source type. Valid values:
PullLivePushLive: Live streaming
PullVodPushLive: Video files
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupSourceType = null;

        /**
         * The URL of the backup source.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupSourceUrl = null;

        /**
         * The information of watermarks to add.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PullPushWatermarkInfo> || null}
         */
        this.WatermarkList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.SourceUrls = 'SourceUrls' in params ? params.SourceUrls : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.PushArgs = 'PushArgs' in params ? params.PushArgs : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.VodLoopTimes = 'VodLoopTimes' in params ? params.VodLoopTimes : null;
        this.VodRefreshType = 'VodRefreshType' in params ? params.VodRefreshType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateBy = 'CreateBy' in params ? params.CreateBy : null;
        this.UpdateBy = 'UpdateBy' in params ? params.UpdateBy : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.CallbackEvents = 'CallbackEvents' in params ? params.CallbackEvents : null;
        this.CallbackInfo = 'CallbackInfo' in params ? params.CallbackInfo : null;
        this.ErrorInfo = 'ErrorInfo' in params ? params.ErrorInfo : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.RecentPullInfo) {
            let obj = new RecentPullInfo();
            obj.deserialize(params.RecentPullInfo)
            this.RecentPullInfo = obj;
        }
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.BackupSourceType = 'BackupSourceType' in params ? params.BackupSourceType : null;
        this.BackupSourceUrl = 'BackupSourceUrl' in params ? params.BackupSourceUrl : null;

        if (params.WatermarkList) {
            this.WatermarkList = new Array();
            for (let z in params.WatermarkList) {
                let obj = new PullPushWatermarkInfo();
                obj.deserialize(params.WatermarkList[z]);
                this.WatermarkList.push(obj);
            }
        }

    }
}

/**
 * DescribeStreamDayPlayInfoList response structure.
 * @class
 */
class DescribeStreamDayPlayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback data information list.
         * @type {Array.<PlayDataInfoByStream> || null}
         */
        this.DataInfoList = null;

        /**
         * Total number.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * Page number where the current data resides.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.PageSize = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new PlayDataInfoByStream();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLivePullStreamTask response structure.
 * @class
 */
class ModifyLivePullStreamTaskResponse extends  AbstractModel {
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
 * CreateLiveSnapshotRule response structure.
 * @class
 */
class CreateLiveSnapshotRuleResponse extends  AbstractModel {
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
 * Delayed playback information.
 * @class
 */
class DelayInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the 
 `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Delay time in seconds.
         * @type {number || null}
         */
        this.DelayInterval = null;

        /**
         * Creation time in UTC time.
Note: the difference between UTC time and Beijing time is 8 hours.
Example: 2019-06-18T12:00:00Z (i.e., June 18, 2019 20:00:00 Beijing time).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Expiration time in UTC time.
Note: the difference between UTC time and Beijing time is 8 hours.
Example: 2019-06-18T12:00:00Z (i.e., June 18, 2019 20:00:00 Beijing time).
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Current status:
-1: expired.
1: in effect.
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.DelayInterval = 'DelayInterval' in params ? params.DelayInterval : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeLiveStreamEventList response structure.
 * @class
 */
class DescribeLiveStreamEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of streaming events.
         * @type {Array.<StreamEventInfo> || null}
         */
        this.EventList = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of eligible ones.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.EventList) {
            this.EventList = new Array();
            for (let z in params.EventList) {
                let obj = new StreamEventInfo();
                obj.deserialize(params.EventList[z]);
                this.EventList.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ForbidLiveDomain response structure.
 * @class
 */
class ForbidLiveDomainResponse extends  AbstractModel {
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
 * DescribeTranscodeTaskNum request structure.
 * @class
 */
class DescribeTranscodeTaskNumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time in the format of yyyy-mm-dd HH:MM:SS.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time in the format of yyyy-mm-dd HH:MM:SS.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The push domains to query. If you do not pass a value, all push domains will be queried.
         * @type {Array.<string> || null}
         */
        this.PushDomains = null;

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
        this.PushDomains = 'PushDomains' in params ? params.PushDomains : null;

    }
}

/**
 * DescribeLiveCallbackRules response structure.
 * @class
 */
class DescribeLiveCallbackRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule information list.
         * @type {Array.<CallBackRuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new CallBackRuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveTranscodeTotalInfo request structure.
 * @class
 */
class DescribeLiveTranscodeTotalInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time (Beijing time)
Format: yyyy-mm-dd HH:MM:SS
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time (Beijing time)
Format: yyyy-mm-dd HH:MM:SS
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of push domains to query. If this parameter is left empty, the data of all domains is queried.
If this parameter is specified, the data returned will be on an hourly basis.
         * @type {Array.<string> || null}
         */
        this.PushDomains = null;

        /**
         * Valid values:
`Mainland`: queries transcoding data in the Chinese mainland
`Oversea`: queries transcoding data outside the Chinese mainland
By default, the data both in and outside the Chinese mainland is queried.
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

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
        this.PushDomains = 'PushDomains' in params ? params.PushDomains : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;

    }
}

/**
 * CreateRecordTask response structure.
 * @class
 */
class CreateRecordTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A globally unique task ID. If `TaskId` is returned, the recording task has been successfully created.
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
 * List of forbidden streams
 * @class
 */
class ForbidStreamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Forbidding expiration time.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * The push path.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * The push domain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * ResumeDelayLiveStream response structure.
 * @class
 */
class ResumeDelayLiveStreamResponse extends  AbstractModel {
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
 * DescribeLiveDomainCertBindings request structure.
 * @class
 */
class DescribeLiveDomainCertBindingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The keyword to use to search for domains.
         * @type {string || null}
         */
        this.DomainSearch = null;

        /**
         * The number of records to skip before starting to return any results. 0 means to start from the first record and is the default.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The maximum number of records to return. The default is 50.
If this parameter is not specified, up to 50 records will be returned.
         * @type {number || null}
         */
        this.Length = null;

        /**
         * The name of a particular domain to query.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Valid values:
ExpireTimeAsc: Sort the records by certificate expiration time in ascending order.
ExpireTimeDesc: Sort the records by certificate expiration time in descending order.
         * @type {string || null}
         */
        this.OrderBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainSearch = 'DomainSearch' in params ? params.DomainSearch : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

    }
}

/**
 * DeleteLiveDomain response structure.
 * @class
 */
class DeleteLiveDomainResponse extends  AbstractModel {
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
 * General stream mix input crop parameter.
 * @class
 */
class CommonMixCropParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Crop width. Value range: [0,2000].
         * @type {number || null}
         */
        this.CropWidth = null;

        /**
         * Crop height. Value range: [0,2000].
         * @type {number || null}
         */
        this.CropHeight = null;

        /**
         * Starting crop X coordinate. Value range: [0,2000].
         * @type {number || null}
         */
        this.CropStartLocationX = null;

        /**
         * Starting crop Y coordinate. Value range: [0,2000].
         * @type {number || null}
         */
        this.CropStartLocationY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CropWidth = 'CropWidth' in params ? params.CropWidth : null;
        this.CropHeight = 'CropHeight' in params ? params.CropHeight : null;
        this.CropStartLocationX = 'CropStartLocationX' in params ? params.CropStartLocationX : null;
        this.CropStartLocationY = 'CropStartLocationY' in params ? params.CropStartLocationY : null;

    }
}

/**
 * CreateLiveRecordTemplate request structure.
 * @class
 */
class CreateLiveRecordTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name. Only letters, digits, underscores, and hyphens can be contained.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Message description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * FLV recording parameter, which is set when FLV recording is enabled.
         * @type {RecordParam || null}
         */
        this.FlvParam = null;

        /**
         * HLS recording parameter, which is set when HLS recording is enabled.
         * @type {RecordParam || null}
         */
        this.HlsParam = null;

        /**
         * Mp4 recording parameter, which is set when Mp4 recording is enabled.
         * @type {RecordParam || null}
         */
        this.Mp4Param = null;

        /**
         * AAC recording parameter, which is set when AAC recording is enabled.
         * @type {RecordParam || null}
         */
        this.AacParam = null;

        /**
         * LVB type. Default value: 0.
0: LVB.
1: LCB.
         * @type {number || null}
         */
        this.IsDelayLive = null;

        /**
         * HLS-specific recording parameter.
         * @type {HlsSpecialParam || null}
         */
        this.HlsSpecialParam = null;

        /**
         * Mp3 recording parameter, which is set when Mp3 recording is enabled.
         * @type {RecordParam || null}
         */
        this.Mp3Param = null;

        /**
         * Whether to remove the watermark. This parameter is invalid if `IsDelayLive` is `1`.
         * @type {boolean || null}
         */
        this.RemoveWatermark = null;

        /**
         * A special parameter for FLV recording.
         * @type {FlvSpecialParam || null}
         */
        this.FlvSpecialParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.FlvParam) {
            let obj = new RecordParam();
            obj.deserialize(params.FlvParam)
            this.FlvParam = obj;
        }

        if (params.HlsParam) {
            let obj = new RecordParam();
            obj.deserialize(params.HlsParam)
            this.HlsParam = obj;
        }

        if (params.Mp4Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp4Param)
            this.Mp4Param = obj;
        }

        if (params.AacParam) {
            let obj = new RecordParam();
            obj.deserialize(params.AacParam)
            this.AacParam = obj;
        }
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;

        if (params.HlsSpecialParam) {
            let obj = new HlsSpecialParam();
            obj.deserialize(params.HlsSpecialParam)
            this.HlsSpecialParam = obj;
        }

        if (params.Mp3Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp3Param)
            this.Mp3Param = obj;
        }
        this.RemoveWatermark = 'RemoveWatermark' in params ? params.RemoveWatermark : null;

        if (params.FlvSpecialParam) {
            let obj = new FlvSpecialParam();
            obj.deserialize(params.FlvSpecialParam)
            this.FlvSpecialParam = obj;
        }

    }
}

/**
 * DescribeHttpStatusInfoList response structure.
 * @class
 */
class DescribeHttpStatusInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback status code list.
         * @type {Array.<HttpStatusData> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new HttpStatusData();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveRecordRule response structure.
 * @class
 */
class DeleteLiveRecordRuleResponse extends  AbstractModel {
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
    CreateLiveSnapshotRuleRequest: CreateLiveSnapshotRuleRequest,
    TimeShiftBillData: TimeShiftBillData,
    EnableLiveDomainResponse: EnableLiveDomainResponse,
    DescribeUploadStreamNumsResponse: DescribeUploadStreamNumsResponse,
    StopRecordTaskResponse: StopRecordTaskResponse,
    DescribeDeliverBandwidthListResponse: DescribeDeliverBandwidthListResponse,
    DeleteLiveRecordRuleRequest: DeleteLiveRecordRuleRequest,
    ResumeLiveStreamRequest: ResumeLiveStreamRequest,
    DeleteLiveTranscodeTemplateResponse: DeleteLiveTranscodeTemplateResponse,
    FlvSpecialParam: FlvSpecialParam,
    TemplateInfo: TemplateInfo,
    DeleteLiveCallbackRuleResponse: DeleteLiveCallbackRuleResponse,
    ResumeDelayLiveStreamRequest: ResumeDelayLiveStreamRequest,
    DescribeLiveStreamPublishedListRequest: DescribeLiveStreamPublishedListRequest,
    DescribeLiveCallbackTemplateResponse: DescribeLiveCallbackTemplateResponse,
    CreateLivePullStreamTaskRequest: CreateLivePullStreamTaskRequest,
    DeleteLiveSnapshotTemplateRequest: DeleteLiveSnapshotTemplateRequest,
    DeleteLiveTranscodeRuleRequest: DeleteLiveTranscodeRuleRequest,
    PushAuthKeyInfo: PushAuthKeyInfo,
    DeleteLiveRecordTemplateRequest: DeleteLiveRecordTemplateRequest,
    DeleteLiveCallbackTemplateResponse: DeleteLiveCallbackTemplateResponse,
    DescribeLiveStreamOnlineListResponse: DescribeLiveStreamOnlineListResponse,
    ModifyLivePlayAuthKeyRequest: ModifyLivePlayAuthKeyRequest,
    DescribeLiveDelayInfoListRequest: DescribeLiveDelayInfoListRequest,
    DomainCertInfo: DomainCertInfo,
    RecordTemplateInfo: RecordTemplateInfo,
    DeleteLiveTranscodeRuleResponse: DeleteLiveTranscodeRuleResponse,
    ConcurrentRecordStreamNum: ConcurrentRecordStreamNum,
    DescribeStreamPlayInfoListResponse: DescribeStreamPlayInfoListResponse,
    DescribeScreenShotSheetNumListResponse: DescribeScreenShotSheetNumListResponse,
    ModifyLiveSnapshotTemplateResponse: ModifyLiveSnapshotTemplateResponse,
    CreateLivePullStreamTaskResponse: CreateLivePullStreamTaskResponse,
    ModifyLivePushAuthKeyRequest: ModifyLivePushAuthKeyRequest,
    DeleteLiveSnapshotTemplateResponse: DeleteLiveSnapshotTemplateResponse,
    DescribeLiveStreamStateRequest: DescribeLiveStreamStateRequest,
    DescribeLivePlayAuthKeyResponse: DescribeLivePlayAuthKeyResponse,
    DescribeLiveCallbackTemplatesRequest: DescribeLiveCallbackTemplatesRequest,
    DomainInfo: DomainInfo,
    DescribeLiveTranscodeRulesRequest: DescribeLiveTranscodeRulesRequest,
    DeleteLiveSnapshotRuleRequest: DeleteLiveSnapshotRuleRequest,
    DescribePlayErrorCodeDetailInfoListRequest: DescribePlayErrorCodeDetailInfoListRequest,
    DeleteLivePullStreamTaskRequest: DeleteLivePullStreamTaskRequest,
    CommonMixOutputParams: CommonMixOutputParams,
    DescribeUploadStreamNumsRequest: DescribeUploadStreamNumsRequest,
    DescribeLiveSnapshotRulesResponse: DescribeLiveSnapshotRulesResponse,
    DescribeLiveTranscodeDetailInfoResponse: DescribeLiveTranscodeDetailInfoResponse,
    DescribeLiveDomainRequest: DescribeLiveDomainRequest,
    AuthenticateDomainOwnerResponse: AuthenticateDomainOwnerResponse,
    DescribeGroupProIspPlayInfoListResponse: DescribeGroupProIspPlayInfoListResponse,
    CreateLiveRecordRuleRequest: CreateLiveRecordRuleRequest,
    DescribeLiveSnapshotTemplatesRequest: DescribeLiveSnapshotTemplatesRequest,
    AddLiveWatermarkResponse: AddLiveWatermarkResponse,
    DescribeLiveStreamPushInfoListResponse: DescribeLiveStreamPushInfoListResponse,
    DescribeLiveDomainCertResponse: DescribeLiveDomainCertResponse,
    DescribeLiveRecordTemplateRequest: DescribeLiveRecordTemplateRequest,
    CreateLiveWatermarkRuleResponse: CreateLiveWatermarkRuleResponse,
    ForbidLiveStreamRequest: ForbidLiveStreamRequest,
    DescribeDeliverBandwidthListRequest: DescribeDeliverBandwidthListRequest,
    PlayCodeTotalInfo: PlayCodeTotalInfo,
    DescribeConcurrentRecordStreamNumResponse: DescribeConcurrentRecordStreamNumResponse,
    TranscodeTaskNum: TranscodeTaskNum,
    ModifyLivePlayDomainRequest: ModifyLivePlayDomainRequest,
    DeleteLiveRecordTemplateResponse: DeleteLiveRecordTemplateResponse,
    DescribeLiveWatermarkRequest: DescribeLiveWatermarkRequest,
    ProIspPlayCodeDataInfo: ProIspPlayCodeDataInfo,
    AddDelayLiveStreamRequest: AddDelayLiveStreamRequest,
    DescribeLiveDomainCertRequest: DescribeLiveDomainCertRequest,
    DescribeLiveStreamEventListRequest: DescribeLiveStreamEventListRequest,
    CallBackTemplateInfo: CallBackTemplateInfo,
    DescribePlayErrorCodeSumInfoListResponse: DescribePlayErrorCodeSumInfoListResponse,
    UnBindLiveDomainCertRequest: UnBindLiveDomainCertRequest,
    DeleteLiveRecordResponse: DeleteLiveRecordResponse,
    DescribeScreenShotSheetNumListRequest: DescribeScreenShotSheetNumListRequest,
    DescribeLiveDomainsResponse: DescribeLiveDomainsResponse,
    TimeValue: TimeValue,
    ModifyLiveDomainCertBindingsResponse: ModifyLiveDomainCertBindingsResponse,
    StreamOnlineInfo: StreamOnlineInfo,
    CreateLiveRecordResponse: CreateLiveRecordResponse,
    RuleInfo: RuleInfo,
    UpdateLiveWatermarkResponse: UpdateLiveWatermarkResponse,
    ModifyLiveDomainCertBindingsRequest: ModifyLiveDomainCertBindingsRequest,
    CreateLiveTranscodeTemplateResponse: CreateLiveTranscodeTemplateResponse,
    LiveCertDomainInfo: LiveCertDomainInfo,
    DayStreamPlayInfo: DayStreamPlayInfo,
    ModifyLivePlayDomainResponse: ModifyLivePlayDomainResponse,
    CancelCommonMixStreamResponse: CancelCommonMixStreamResponse,
    DescribeLiveDomainCertBindingsResponse: DescribeLiveDomainCertBindingsResponse,
    AddLiveWatermarkRequest: AddLiveWatermarkRequest,
    DescribeLiveTimeShiftBillInfoListRequest: DescribeLiveTimeShiftBillInfoListRequest,
    DescribeLiveCertsResponse: DescribeLiveCertsResponse,
    CommonMixInputParam: CommonMixInputParam,
    DescribeLiveWatermarkRulesResponse: DescribeLiveWatermarkRulesResponse,
    DescribeLiveRecordTemplatesResponse: DescribeLiveRecordTemplatesResponse,
    PlayDataInfoByStream: PlayDataInfoByStream,
    DescribeLiveCertRequest: DescribeLiveCertRequest,
    DescribeLiveCallbackTemplatesResponse: DescribeLiveCallbackTemplatesResponse,
    ModifyLivePlayAuthKeyResponse: ModifyLivePlayAuthKeyResponse,
    CreateLiveCallbackTemplateRequest: CreateLiveCallbackTemplateRequest,
    DescribeTopClientIpSumInfoListResponse: DescribeTopClientIpSumInfoListResponse,
    DropLiveStreamResponse: DropLiveStreamResponse,
    DescribeLiveStreamStateResponse: DescribeLiveStreamStateResponse,
    StopLiveRecordRequest: StopLiveRecordRequest,
    DeleteLiveWatermarkRuleRequest: DeleteLiveWatermarkRuleRequest,
    StreamEventInfo: StreamEventInfo,
    DeleteRecordTaskResponse: DeleteRecordTaskResponse,
    DescribeLiveWatermarksRequest: DescribeLiveWatermarksRequest,
    CreateLiveTranscodeRuleRequest: CreateLiveTranscodeRuleRequest,
    DescribeLiveWatermarkRulesRequest: DescribeLiveWatermarkRulesRequest,
    DropLiveStreamRequest: DropLiveStreamRequest,
    PullPushWatermarkInfo: PullPushWatermarkInfo,
    DescribeProvinceIspPlayInfoListResponse: DescribeProvinceIspPlayInfoListResponse,
    CreateCommonMixStreamRequest: CreateCommonMixStreamRequest,
    RefererAuthConfig: RefererAuthConfig,
    PushDataInfo: PushDataInfo,
    CommonMixLayoutParams: CommonMixLayoutParams,
    DescribeGroupProIspPlayInfoListRequest: DescribeGroupProIspPlayInfoListRequest,
    DescribeStreamDayPlayInfoListRequest: DescribeStreamDayPlayInfoListRequest,
    TranscodeDetailInfo: TranscodeDetailInfo,
    DescribeLiveSnapshotTemplateResponse: DescribeLiveSnapshotTemplateResponse,
    DescribeLiveTranscodeRulesResponse: DescribeLiveTranscodeRulesResponse,
    DescribeLiveDomainRefererResponse: DescribeLiveDomainRefererResponse,
    AddLiveDomainRequest: AddLiveDomainRequest,
    StreamName: StreamName,
    DescribeLiveCertsRequest: DescribeLiveCertsRequest,
    DescribeLivePullStreamTasksRequest: DescribeLivePullStreamTasksRequest,
    CdnPlayStatData: CdnPlayStatData,
    AddLiveDomainResponse: AddLiveDomainResponse,
    DescribeHttpStatusInfoListRequest: DescribeHttpStatusInfoListRequest,
    ModifyLiveCallbackTemplateRequest: ModifyLiveCallbackTemplateRequest,
    DescribeProvinceIspPlayInfoListRequest: DescribeProvinceIspPlayInfoListRequest,
    DescribeLivePlayAuthKeyRequest: DescribeLivePlayAuthKeyRequest,
    DeleteLivePullStreamTaskResponse: DeleteLivePullStreamTaskResponse,
    AuthenticateDomainOwnerRequest: AuthenticateDomainOwnerRequest,
    DescribeLiveForbidStreamListResponse: DescribeLiveForbidStreamListResponse,
    DescribeVisitTopSumInfoListRequest: DescribeVisitTopSumInfoListRequest,
    DescribeLivePullStreamTasksResponse: DescribeLivePullStreamTasksResponse,
    DescribeLiveWatermarkResponse: DescribeLiveWatermarkResponse,
    ResumeLiveStreamResponse: ResumeLiveStreamResponse,
    ModifyLiveRecordTemplateRequest: ModifyLiveRecordTemplateRequest,
    DescribeLiveStreamPushInfoListRequest: DescribeLiveStreamPushInfoListRequest,
    StopLiveRecordResponse: StopLiveRecordResponse,
    DescribeLiveWatermarksResponse: DescribeLiveWatermarksResponse,
    WatermarkInfo: WatermarkInfo,
    DescribeLiveForbidStreamListRequest: DescribeLiveForbidStreamListRequest,
    DescribeTopClientIpSumInfoListRequest: DescribeTopClientIpSumInfoListRequest,
    CreateLiveCallbackRuleRequest: CreateLiveCallbackRuleRequest,
    DeleteLiveWatermarkRuleResponse: DeleteLiveWatermarkRuleResponse,
    PublishTime: PublishTime,
    ModifyLiveTranscodeTemplateResponse: ModifyLiveTranscodeTemplateResponse,
    ModifyLivePullStreamTaskRequest: ModifyLivePullStreamTaskRequest,
    DescribeLiveTranscodeDetailInfoRequest: DescribeLiveTranscodeDetailInfoRequest,
    ModifyLiveDomainRefererResponse: ModifyLiveDomainRefererResponse,
    DeleteLiveWatermarkRequest: DeleteLiveWatermarkRequest,
    DescribeLiveDomainsRequest: DescribeLiveDomainsRequest,
    RecentPullInfo: RecentPullInfo,
    SnapshotTemplateInfo: SnapshotTemplateInfo,
    DeleteLiveSnapshotRuleResponse: DeleteLiveSnapshotRuleResponse,
    CreateLiveRecordRequest: CreateLiveRecordRequest,
    DescribeLiveTimeShiftBillInfoListResponse: DescribeLiveTimeShiftBillInfoListResponse,
    BandwidthInfo: BandwidthInfo,
    CancelCommonMixStreamRequest: CancelCommonMixStreamRequest,
    UpdateLiveWatermarkRequest: UpdateLiveWatermarkRequest,
    CertInfo: CertInfo,
    ModifyLivePushAuthKeyResponse: ModifyLivePushAuthKeyResponse,
    DescribeLiveDelayInfoListResponse: DescribeLiveDelayInfoListResponse,
    DeleteLiveTranscodeTemplateRequest: DeleteLiveTranscodeTemplateRequest,
    DescribeLiveCallbackRulesRequest: DescribeLiveCallbackRulesRequest,
    ClientIpPlaySumInfo: ClientIpPlaySumInfo,
    DescribeLiveTranscodeTemplateResponse: DescribeLiveTranscodeTemplateResponse,
    CreateLiveSnapshotTemplateResponse: CreateLiveSnapshotTemplateResponse,
    DescribeConcurrentRecordStreamNumRequest: DescribeConcurrentRecordStreamNumRequest,
    DescribePlayErrorCodeSumInfoListRequest: DescribePlayErrorCodeSumInfoListRequest,
    ModifyLiveRecordTemplateResponse: ModifyLiveRecordTemplateResponse,
    CommonMixControlParams: CommonMixControlParams,
    TranscodeTotalInfo: TranscodeTotalInfo,
    DescribeTranscodeTaskNumResponse: DescribeTranscodeTaskNumResponse,
    UnBindLiveDomainCertResponse: UnBindLiveDomainCertResponse,
    ForbidLiveDomainRequest: ForbidLiveDomainRequest,
    DescribeLiveRecordRulesRequest: DescribeLiveRecordRulesRequest,
    DescribePlayErrorCodeDetailInfoListResponse: DescribePlayErrorCodeDetailInfoListResponse,
    CreateLiveRecordTemplateResponse: CreateLiveRecordTemplateResponse,
    GroupProIspDataInfo: GroupProIspDataInfo,
    RecordParam: RecordParam,
    ForbidLiveStreamResponse: ForbidLiveStreamResponse,
    HttpStatusInfo: HttpStatusInfo,
    DeleteLiveRecordRequest: DeleteLiveRecordRequest,
    DescribeLiveSnapshotTemplatesResponse: DescribeLiveSnapshotTemplatesResponse,
    StopRecordTaskRequest: StopRecordTaskRequest,
    DescribeLiveDomainRefererRequest: DescribeLiveDomainRefererRequest,
    HttpStatusData: HttpStatusData,
    HttpCodeInfo: HttpCodeInfo,
    DescribeStreamPlayInfoListRequest: DescribeStreamPlayInfoListRequest,
    CreateLiveTranscodeTemplateRequest: CreateLiveTranscodeTemplateRequest,
    DescribeLiveStreamPublishedListResponse: DescribeLiveStreamPublishedListResponse,
    DeleteLiveDomainRequest: DeleteLiveDomainRequest,
    AddDelayLiveStreamResponse: AddDelayLiveStreamResponse,
    DescribeLiveTranscodeTemplatesResponse: DescribeLiveTranscodeTemplatesResponse,
    DeleteLiveCallbackRuleRequest: DeleteLiveCallbackRuleRequest,
    PlayAuthKeyInfo: PlayAuthKeyInfo,
    BatchDomainOperateErrors: BatchDomainOperateErrors,
    ModifyLiveTranscodeTemplateRequest: ModifyLiveTranscodeTemplateRequest,
    EnableLiveDomainRequest: EnableLiveDomainRequest,
    DescribeLiveTranscodeTotalInfoResponse: DescribeLiveTranscodeTotalInfoResponse,
    DescribeLiveSnapshotRulesRequest: DescribeLiveSnapshotRulesRequest,
    CreateRecordTaskRequest: CreateRecordTaskRequest,
    CreateLiveTranscodeRuleResponse: CreateLiveTranscodeRuleResponse,
    CreateLiveCallbackRuleResponse: CreateLiveCallbackRuleResponse,
    DescribeLiveRecordTemplateResponse: DescribeLiveRecordTemplateResponse,
    DescribeVisitTopSumInfoListResponse: DescribeVisitTopSumInfoListResponse,
    CallBackRuleInfo: CallBackRuleInfo,
    PlaySumStatInfo: PlaySumStatInfo,
    DescribeLiveTranscodeTemplatesRequest: DescribeLiveTranscodeTemplatesRequest,
    HlsSpecialParam: HlsSpecialParam,
    DescribeLiveRecordRulesResponse: DescribeLiveRecordRulesResponse,
    CreateLiveSnapshotTemplateRequest: CreateLiveSnapshotTemplateRequest,
    HttpCodeValue: HttpCodeValue,
    DescribeLiveStreamOnlineListRequest: DescribeLiveStreamOnlineListRequest,
    DeleteLiveCallbackTemplateRequest: DeleteLiveCallbackTemplateRequest,
    DescribeLiveSnapshotTemplateRequest: DescribeLiveSnapshotTemplateRequest,
    LiveDomainCertBindings: LiveDomainCertBindings,
    CreateCommonMixStreamResponse: CreateCommonMixStreamResponse,
    ModifyLiveDomainRefererRequest: ModifyLiveDomainRefererRequest,
    CreateLiveCallbackTemplateResponse: CreateLiveCallbackTemplateResponse,
    DescribeLivePushAuthKeyRequest: DescribeLivePushAuthKeyRequest,
    PlayStatInfo: PlayStatInfo,
    DescribeLiveCallbackTemplateRequest: DescribeLiveCallbackTemplateRequest,
    ModifyLiveSnapshotTemplateRequest: ModifyLiveSnapshotTemplateRequest,
    DescribeLiveCertResponse: DescribeLiveCertResponse,
    CreateLiveRecordRuleResponse: CreateLiveRecordRuleResponse,
    DescribeLiveTranscodeTemplateRequest: DescribeLiveTranscodeTemplateRequest,
    ModifyLiveCallbackTemplateResponse: ModifyLiveCallbackTemplateResponse,
    DeleteLiveWatermarkResponse: DeleteLiveWatermarkResponse,
    DescribeLivePushAuthKeyResponse: DescribeLivePushAuthKeyResponse,
    CreateLiveWatermarkRuleRequest: CreateLiveWatermarkRuleRequest,
    DescribeLiveRecordTemplatesRequest: DescribeLiveRecordTemplatesRequest,
    DescribeLiveDomainResponse: DescribeLiveDomainResponse,
    DeleteRecordTaskRequest: DeleteRecordTaskRequest,
    PullStreamTaskInfo: PullStreamTaskInfo,
    DescribeStreamDayPlayInfoListResponse: DescribeStreamDayPlayInfoListResponse,
    ModifyLivePullStreamTaskResponse: ModifyLivePullStreamTaskResponse,
    CreateLiveSnapshotRuleResponse: CreateLiveSnapshotRuleResponse,
    DelayInfo: DelayInfo,
    DescribeLiveStreamEventListResponse: DescribeLiveStreamEventListResponse,
    ForbidLiveDomainResponse: ForbidLiveDomainResponse,
    DescribeTranscodeTaskNumRequest: DescribeTranscodeTaskNumRequest,
    DescribeLiveCallbackRulesResponse: DescribeLiveCallbackRulesResponse,
    DescribeLiveTranscodeTotalInfoRequest: DescribeLiveTranscodeTotalInfoRequest,
    CreateRecordTaskResponse: CreateRecordTaskResponse,
    ForbidStreamInfo: ForbidStreamInfo,
    ResumeDelayLiveStreamResponse: ResumeDelayLiveStreamResponse,
    DescribeLiveDomainCertBindingsRequest: DescribeLiveDomainCertBindingsRequest,
    DeleteLiveDomainResponse: DeleteLiveDomainResponse,
    CommonMixCropParams: CommonMixCropParams,
    CreateLiveRecordTemplateRequest: CreateLiveRecordTemplateRequest,
    DescribeHttpStatusInfoListResponse: DescribeHttpStatusInfoListResponse,
    DeleteLiveRecordRuleResponse: DeleteLiveRecordRuleResponse,

}
