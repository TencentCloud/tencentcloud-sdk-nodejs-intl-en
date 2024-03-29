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
 * DeleteStreamLiveChannel response structure.
 * @class
 */
class DeleteStreamLiveChannelResponse extends  AbstractModel {
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
 * Pipeline input video statistics.
 * @class
 */
class VideoPipelineInputStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video FPS.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Video bitrate in bps.
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * Video `Pid`, which is available only if the input is `rtp/udp`.
         * @type {number || null}
         */
        this.Pid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Pid = 'Pid' in params ? params.Pid : null;

    }
}

/**
 * CreateStreamLiveInputSecurityGroup response structure.
 * @class
 */
class CreateStreamLiveInputSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group ID
         * @type {string || null}
         */
        this.Id = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Complement the last video frame related settings.
 * @class
 */
class InputLossBehaviorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The time to fill in the last video frame, unit ms, range 0-1000000, 1000000 means always inserting, default 0 means filling in black screen frame.
         * @type {number || null}
         */
        this.RepeatLastFrameMs = null;

        /**
         * Fill frame type, COLOR means solid color filling, IMAGE means picture filling, the default is COLOR.
         * @type {string || null}
         */
        this.InputLossImageType = null;

        /**
         * When the type is COLOR, the corresponding rgb value
         * @type {string || null}
         */
        this.ColorRGB = null;

        /**
         * When the type is IMAGE, the corresponding image url value
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepeatLastFrameMs = 'RepeatLastFrameMs' in params ? params.RepeatLastFrameMs : null;
        this.InputLossImageType = 'InputLossImageType' in params ? params.InputLossImageType : null;
        this.ColorRGB = 'ColorRGB' in params ? params.ColorRGB : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * Video information of pushed streams.
 * @class
 */
class StreamVideoInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video `Pid`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Video codec.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Video frame rate.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Video bitrate.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * Video width.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Video height.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * CreateStreamLivePlan request structure.
 * @class
 */
class CreateStreamLivePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the channel for which you want to configure an event
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Event configuration
         * @type {PlanReq || null}
         */
        this.Plan = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

        if (params.Plan) {
            let obj = new PlanReq();
            obj.deserialize(params.Plan)
            this.Plan = obj;
        }

    }
}

/**
 * DescribeStreamLiveWatermarks response structure.
 * @class
 */
class DescribeStreamLiveWatermarksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of watermark information
         * @type {Array.<DescribeWatermarkInfo> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new DescribeWatermarkInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLiveInput request structure.
 * @class
 */
class DescribeStreamLiveInputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * The stream status of the queried input.
 * @class
 */
class QueryDispatchInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The input ID.
         * @type {string || null}
         */
        this.InputID = null;

        /**
         * The input name.
         * @type {string || null}
         */
        this.InputName = null;

        /**
         * The input protocol.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The stream status of the input.
         * @type {Array.<InputStreamInfo> || null}
         */
        this.InputStreamInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputID = 'InputID' in params ? params.InputID : null;
        this.InputName = 'InputName' in params ? params.InputName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.InputStreamInfoList) {
            this.InputStreamInfoList = new Array();
            for (let z in params.InputStreamInfoList) {
                let obj = new InputStreamInfo();
                obj.deserialize(params.InputStreamInfoList[z]);
                this.InputStreamInfoList.push(obj);
            }
        }

    }
}

/**
 * CreateStreamLiveInput request structure.
 * @class
 */
class CreateStreamLiveInputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input name, which can contain 1-32 case-sensitive letters, digits, and underscores and must be unique at the region level
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Input type
Valid values: `RTMP_PUSH`, `RTP_PUSH`, `UDP_PUSH`, `RTMP_PULL`, `HLS_PULL`, `MP4_PULL`
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of the input security group to attach
You can attach only one security group to an input.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Input settings. For the type `RTMP_PUSH`, `RTMP_PULL`, `HLS_PULL`, or `MP4_PULL`, 1 or 2 inputs of the corresponding type can be configured.
         * @type {Array.<InputSettingInfo> || null}
         */
        this.InputSettings = null;

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
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.InputSettings) {
            this.InputSettings = new Array();
            for (let z in params.InputSettings) {
                let obj = new InputSettingInfo();
                obj.deserialize(params.InputSettings[z]);
                this.InputSettings.push(obj);
            }
        }

    }
}

/**
 * Audio `Pid` selection.
 * @class
 */
class AudioPidSelectionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audio `Pid`. Default value: 0.
         * @type {number || null}
         */
        this.Pid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Pid = 'Pid' in params ? params.Pid : null;

    }
}

/**
 * Pipeline input audio statistics.
 * @class
 */
class AudioPipelineInputStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audio FPS.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Audio bitrate in bps.
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * Audio `Pid`, which is available only if the input is `rtp/udp`.
         * @type {number || null}
         */
        this.Pid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Pid = 'Pid' in params ? params.Pid : null;

    }
}

/**
 * CreateStreamLivePlan response structure.
 * @class
 */
class CreateStreamLivePlanResponse extends  AbstractModel {
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
 * The input stream information.
 * @class
 */
class InputStreamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The input stream address.
         * @type {string || null}
         */
        this.InputAddress = null;

        /**
         * The input stream path.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * The input stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * The input stream status. `1` indicates the stream is active.
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
        this.InputAddress = 'InputAddress' in params ? params.InputAddress : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Pipeline failover information.
 * @class
 */
class PipelineInputSettingsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pipeline failover configuration, the valid value is: 1.PIPELINE_FAILOVER (channels are mutually failover); 2.PIPELINE_FILLING (channels fill in themselves). Default value: PIPELINE_FILLING. The specific content is specified by FaultBehavior.
         * @type {string || null}
         */
        this.FaultBehavior = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FaultBehavior = 'FaultBehavior' in params ? params.FaultBehavior : null;

    }
}

/**
 * DescribeStreamLiveChannelOutputStatistics request structure.
 * @class
 */
class DescribeStreamLiveChannelOutputStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Start time for query, which is 1 hour ago by default. You can query statistics in the last 7 days.
UTC time, such as `2020-01-01T12:00:00Z`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time for query, which is 1 hour after `StartTime` by default
UTC time, such as `2020-01-01T12:00:00Z`
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Data collection interval. Valid values: `5s`, `1min` (default), `5min`, `15min`
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
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * Channel alarm details.
 * @class
 */
class ChannelPipelineAlerts extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm start time in UTC time.
         * @type {string || null}
         */
        this.SetTime = null;

        /**
         * Alarm end time in UTC time.
This time is available only after the alarm ends.
         * @type {string || null}
         */
        this.ClearTime = null;

        /**
         * Alarm type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Alarm details.
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
        this.SetTime = 'SetTime' in params ? params.SetTime : null;
        this.ClearTime = 'ClearTime' in params ? params.ClearTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * Input information.
 * @class
 */
class InputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input region.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Input ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Input name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Input type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Array of security groups associated with input.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Array of channels associated with input.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AttachedChannels = null;

        /**
         * Input configuration array.
         * @type {Array.<InputSettingInfo> || null}
         */
        this.InputSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.AttachedChannels = 'AttachedChannels' in params ? params.AttachedChannels : null;

        if (params.InputSettings) {
            this.InputSettings = new Array();
            for (let z in params.InputSettings) {
                let obj = new InputSettingInfo();
                obj.deserialize(params.InputSettings[z]);
                this.InputSettings.push(obj);
            }
        }

    }
}

/**
 * Audio/Video transcoding template
 * @class
 */
class AVTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of an audio/video transcoding template, which can contain 1-20 case-sensitive letters and digits
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether video is needed. `0`: not needed; `1`: needed
         * @type {number || null}
         */
        this.NeedVideo = null;

        /**
         * Video codec. Valid values: `H264`, `H265`. If this parameter is left empty, the original video codec will be used.
         * @type {string || null}
         */
        this.Vcodec = null;

        /**
         * Video width. Value range: (0, 3000]. The value must be an integer multiple of 4. If this parameter is left empty, the original video width will be used.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Video height. Value range: (0, 3000]. The value must be an integer multiple of 4. If this parameter is left empty, the original video height will be used.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Video frame rate. Value range: [1, 240]. If this parameter is left empty, the original frame rate will be used.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Whether to enable top speed codec transcoding. Valid values: `CLOSE` (disable), `OPEN` (enable). Default value: `CLOSE`
         * @type {string || null}
         */
        this.TopSpeed = null;

        /**
         * Compression ratio for top speed codec transcoding. Value range: [0, 50]. The lower the compression ratio, the higher the image quality.
         * @type {number || null}
         */
        this.BitrateCompressionRatio = null;

        /**
         * Whether audio is needed. `0`: not needed; `1`: needed
         * @type {number || null}
         */
        this.NeedAudio = null;

        /**
         * Audio codec. Valid value: `AAC` (default)
         * @type {string || null}
         */
        this.Acodec = null;

        /**
         * Audio bitrate. If this parameter is left empty, the original bitrate will be used.
Valid values: `6000`, `7000`, `8000`, `10000`, `12000`, `14000`, `16000`, `20000`, `24000`, `28000`, `32000`, `40000`, `48000`, `56000`, `64000`, `80000`, `96000`, `112000`, `128000`, `160000`, `192000`, `224000`, `256000`, `288000`, `320000`, `384000`, `448000`, `512000`, `576000`, `640000`, `768000`, `896000`, `1024000`
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * Video bitrate. Value range: [50000, 40000000]. The value must be an integer multiple of 1000. If this parameter is left empty, the original bitrate will be used.
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * Bitrate control mode. Valid values: `CBR`, `ABR` (default)
         * @type {string || null}
         */
        this.RateControlMode = null;

        /**
         * Watermark ID
         * @type {string || null}
         */
        this.WatermarkId = null;

        /**
         * Whether to convert audio to text. `0` (default): No; `1`: Yes.
         * @type {number || null}
         */
        this.SmartSubtitles = null;

        /**
         * The subtitle settings. Currently, the following subtitles are supported:
`eng2eng`: English speech to English text.
`eng2chs`: English speech to Chinese text. 
`eng2chseng`: English speech to English and Chinese text. 
`chs2chs`: Chinese speech to Chinese text.   
`chs2eng`: Chinese speech to English text. 
`chs2chseng`: Chinese speech to Chinese and English text.
         * @type {string || null}
         */
        this.SubtitleConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.NeedVideo = 'NeedVideo' in params ? params.NeedVideo : null;
        this.Vcodec = 'Vcodec' in params ? params.Vcodec : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.TopSpeed = 'TopSpeed' in params ? params.TopSpeed : null;
        this.BitrateCompressionRatio = 'BitrateCompressionRatio' in params ? params.BitrateCompressionRatio : null;
        this.NeedAudio = 'NeedAudio' in params ? params.NeedAudio : null;
        this.Acodec = 'Acodec' in params ? params.Acodec : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.RateControlMode = 'RateControlMode' in params ? params.RateControlMode : null;
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;
        this.SmartSubtitles = 'SmartSubtitles' in params ? params.SmartSubtitles : null;
        this.SubtitleConfiguration = 'SubtitleConfiguration' in params ? params.SubtitleConfiguration : null;

    }
}

/**
 * Relay destination address.
 * @class
 */
class DestinationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Relay destination address. Length limit: [1,512].
         * @type {string || null}
         */
        this.OutputUrl = null;

        /**
         * Authentication key. Length limit: [1,128].
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthKey = null;

        /**
         * Authentication username. Length limit: [1,128].
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Authentication password. Length limit: [1,128].
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputUrl = 'OutputUrl' in params ? params.OutputUrl : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DeleteStreamLiveInput request structure.
 * @class
 */
class DeleteStreamLiveInputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ModifyStreamLiveInputSecurityGroup response structure.
 * @class
 */
class ModifyStreamLiveInputSecurityGroupResponse extends  AbstractModel {
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
 * ModifyStreamLiveInput request structure.
 * @class
 */
class ModifyStreamLiveInputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Input name, which can contain 1-32 case-sensitive letters, digits, and underscores and must be unique at the region level
         * @type {string || null}
         */
        this.Name = null;

        /**
         * List of the IDs of the security groups to attach
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Input settings
For the type `RTMP_PUSH`, `RTMP_PULL`, `HLS_PULL`, or `MP4_PULL`, 1 or 2 inputs of the corresponding type can be configured.
This parameter can be left empty for RTP_PUSH and UDP_PUSH inputs.
Note: If this parameter is not specified or empty, the original input settings will be used.
         * @type {Array.<InputSettingInfo> || null}
         */
        this.InputSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.InputSettings) {
            this.InputSettings = new Array();
            for (let z in params.InputSettings) {
                let obj = new InputSettingInfo();
                obj.deserialize(params.InputSettings[z]);
                this.InputSettings.push(obj);
            }
        }

    }
}

/**
 * DescribeStreamLiveChannel response structure.
 * @class
 */
class DescribeStreamLiveChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel information
         * @type {StreamLiveChannelInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new StreamLiveChannelInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLiveRegions request structure.
 * @class
 */
class DescribeStreamLiveRegionsRequest extends  AbstractModel {
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
 * DescribeStreamLiveChannelAlerts request structure.
 * @class
 */
class DescribeStreamLiveChannelAlertsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.ChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

    }
}

/**
 * Audio selector.
 * @class
 */
class AudioSelectorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audio name, which can contain 1-32 letters, digits, and underscores.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Audio `Pid` selection.
         * @type {AudioPidSelectionInfo || null}
         */
        this.AudioPidSelection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AudioPidSelection) {
            let obj = new AudioPidSelectionInfo();
            obj.deserialize(params.AudioPidSelection)
            this.AudioPidSelection = obj;
        }

    }
}

/**
 * Log information.
 * @class
 */
class LogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log type.
It contains the value of `StreamStart` which refers to the push information.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Time when the log is printed.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Log details.
         * @type {LogMessageInfo || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Time = 'Time' in params ? params.Time : null;

        if (params.Message) {
            let obj = new LogMessageInfo();
            obj.deserialize(params.Message)
            this.Message = obj;
        }

    }
}

/**
 * DescribeStreamLiveWatermark request structure.
 * @class
 */
class DescribeStreamLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DRM configuration information, which takes effect only for HLS and DASH.
 * @class
 */
class DrmSettingsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable DRM encryption. Valid values: `CLOSE` (disable), `OPEN` (enable). Default value: `CLOSE`
DRM encryption is supported only for HLS, DASH, HLS_ARCHIVE, DASH_ARCHIVE, HLS_MEDIAPACKAGE, and DASH_MEDIAPACKAGE outputs.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Valid values: `CustomDRMKeys` (default value), `SDMCDRM`
`CustomDRMKeys` means encryption keys customized by users.
`SDMCDRM` means the DRM key management system of SDMC.
         * @type {string || null}
         */
        this.Scheme = null;

        /**
         * If `Scheme` is set to `CustomDRMKeys`, this parameter is required.
If `Scheme` is set to `SDMCDRM`, this parameter is optional. It supports digits, letters, hyphens, and underscores and must contain 1 to 36 characters. If it is not specified, the value of `ChannelId` will be used.
         * @type {string || null}
         */
        this.ContentId = null;

        /**
         * The key customized by the content user, which is required when `Scheme` is set to CustomDRMKeys.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DrmKey> || null}
         */
        this.Keys = null;

        /**
         * SDMC key configuration. This parameter is used when `Scheme` is set to `SDMCDRM`.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {SDMCSettingsInfo || null}
         */
        this.SDMCSettings = null;

        /**
         * The DRM type. Valid values: `FAIRPLAY`, `WIDEVINE`, `AES128`, `PLAYREADY`. For HLS, this can be `FAIRPLAY` or `AES128` or `PLAYREADY`. For DASH, valid values: `WIDEVINE` or `PLAYREADY`. 
         * @type {string || null}
         */
        this.DrmType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.State = 'State' in params ? params.State : null;
        this.Scheme = 'Scheme' in params ? params.Scheme : null;
        this.ContentId = 'ContentId' in params ? params.ContentId : null;

        if (params.Keys) {
            this.Keys = new Array();
            for (let z in params.Keys) {
                let obj = new DrmKey();
                obj.deserialize(params.Keys[z]);
                this.Keys.push(obj);
            }
        }

        if (params.SDMCSettings) {
            let obj = new SDMCSettingsInfo();
            obj.deserialize(params.SDMCSettings)
            this.SDMCSettings = obj;
        }
        this.DrmType = 'DrmType' in params ? params.DrmType : null;

    }
}

/**
 * Channel output statistics.
 * @class
 */
class PipelineOutputStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Timestamp.
In seconds, indicating data time.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Output bandwidth in bps.
         * @type {number || null}
         */
        this.NetworkOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.NetworkOut = 'NetworkOut' in params ? params.NetworkOut : null;

    }
}

/**
 * DeleteStreamLivePlan response structure.
 * @class
 */
class DeleteStreamLivePlanResponse extends  AbstractModel {
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
 * Watermark text settings
 * @class
 */
class CreateTextSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Text
         * @type {string || null}
         */
        this.Text = null;

        /**
         * Origin. Valid values: TOP_LEFT, BOTTOM_LEFT, TOP_RIGHT, BOTTOM_RIGHT.
         * @type {string || null}
         */
        this.Location = null;

        /**
         * The watermark’s horizontal distance from the origin as a percentage of the video width. Value range: 0-100. Default: 10.
         * @type {number || null}
         */
        this.XPos = null;

        /**
         * The watermark’s vertical distance from the origin as a percentage of the video height. Value range: 0-100. Default: 10.
         * @type {number || null}
         */
        this.YPos = null;

        /**
         * Font size. Value range: 25-50.
         * @type {number || null}
         */
        this.FontSize = null;

        /**
         * Font color, which is an RGB color value. Default value: 0x000000.
         * @type {string || null}
         */
        this.FontColor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;

    }
}

/**
 * DASH configuration information.
 * @class
 */
class DashRemuxSettingsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Segment duration in ms. Value range: [1000,30000]. Default value: 4000. The value can only be a multiple of 1,000.
         * @type {number || null}
         */
        this.SegmentDuration = null;

        /**
         * Number of segments. Value range: [1,30]. Default value: 5.
         * @type {number || null}
         */
        this.SegmentNumber = null;

        /**
         * Whether to enable multi-period. Valid values: CLOSE/OPEN. Default value: CLOSE.
         * @type {string || null}
         */
        this.PeriodTriggers = null;

        /**
         * The HLS package type when the H.265 codec is used. Valid values: `hvc1`, `hev1` (default).
         * @type {string || null}
         */
        this.H265PackageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SegmentDuration = 'SegmentDuration' in params ? params.SegmentDuration : null;
        this.SegmentNumber = 'SegmentNumber' in params ? params.SegmentNumber : null;
        this.PeriodTriggers = 'PeriodTriggers' in params ? params.PeriodTriggers : null;
        this.H265PackageType = 'H265PackageType' in params ? params.H265PackageType : null;

    }
}

/**
 * CreateStreamLiveWatermark request structure.
 * @class
 */
class CreateStreamLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Watermark type. Valid values: STATIC_IMAGE, TEXT.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Watermark image settings. This parameter is valid if `Type` is `STATIC_IMAGE`.
         * @type {CreateImageSettings || null}
         */
        this.ImageSettings = null;

        /**
         * Watermark text settings. This parameter is valid if `Type` is `TEXT`.
         * @type {CreateTextSettings || null}
         */
        this.TextSettings = null;

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

        if (params.ImageSettings) {
            let obj = new CreateImageSettings();
            obj.deserialize(params.ImageSettings)
            this.ImageSettings = obj;
        }

        if (params.TextSettings) {
            let obj = new CreateTextSettings();
            obj.deserialize(params.TextSettings)
            this.TextSettings = obj;
        }

    }
}

/**
 * Push information.
 * @class
 */
class StreamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Client IP.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * Video information of pushed streams.
         * @type {Array.<StreamVideoInfo> || null}
         */
        this.Video = null;

        /**
         * Audio information of pushed streams.
         * @type {Array.<StreamAudioInfo> || null}
         */
        this.Audio = null;

        /**
         * SCTE-35 information of pushed streams.
         * @type {Array.<StreamScte35Info> || null}
         */
        this.Scte35 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;

        if (params.Video) {
            this.Video = new Array();
            for (let z in params.Video) {
                let obj = new StreamVideoInfo();
                obj.deserialize(params.Video[z]);
                this.Video.push(obj);
            }
        }

        if (params.Audio) {
            this.Audio = new Array();
            for (let z in params.Audio) {
                let obj = new StreamAudioInfo();
                obj.deserialize(params.Audio[z]);
                this.Audio.push(obj);
            }
        }

        if (params.Scte35) {
            this.Scte35 = new Array();
            for (let z in params.Scte35) {
                let obj = new StreamScte35Info();
                obj.deserialize(params.Scte35[z]);
                this.Scte35.push(obj);
            }
        }

    }
}

/**
 * SDMC DRM configuration information. This parameter is valid only when `Scheme` is set to `SDMCDRM`.
 * @class
 */
class SDMCSettingsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID in the SDMC DRM system
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * Tracks of the SDMC DRM system. This parameter is valid for DASH output groups.
`1`: audio
`2`: SD
`4`: HD
`8`: UHD1
`16`: UHD2

Default value: `31` (audio + SD + HD + UHD1 + UHD2)
         * @type {number || null}
         */
        this.Tracks = null;

        /**
         * Key ID in the SDMC DRM system; required
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * Key in the SDMC DRM system; required
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Key request URL of the SDMC DRM system, which is `https://uat.multidrm.tv/cpix/2.2/getcontentkey` by default
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Token name in an SDMC key request URL, which is `token` by default
         * @type {string || null}
         */
        this.TokenName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Tracks = 'Tracks' in params ? params.Tracks : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.TokenName = 'TokenName' in params ? params.TokenName : null;

    }
}

/**
 * DeleteStreamLiveInputSecurityGroup request structure.
 * @class
 */
class DeleteStreamLiveInputSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input security group ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Channel-associated input
 * @class
 */
class AttachedInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Audio selector for the input. There can be 0 to 20 audio selectors.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {Array.<AudioSelectorInfo> || null}
         */
        this.AudioSelectors = null;

        /**
         * Pull mode. If the input type is `HLS_PULL` or `MP4_PULL`, you can set this parameter to `LOOP` or `ONCE`. `LOOP` is the default value.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.PullBehavior = null;

        /**
         * Input failover configuration
Note: this field may return `null`, indicating that no valid value was found.
         * @type {FailOverSettings || null}
         */
        this.FailOverSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

        if (params.AudioSelectors) {
            this.AudioSelectors = new Array();
            for (let z in params.AudioSelectors) {
                let obj = new AudioSelectorInfo();
                obj.deserialize(params.AudioSelectors[z]);
                this.AudioSelectors.push(obj);
            }
        }
        this.PullBehavior = 'PullBehavior' in params ? params.PullBehavior : null;

        if (params.FailOverSettings) {
            let obj = new FailOverSettings();
            obj.deserialize(params.FailOverSettings)
            this.FailOverSettings = obj;
        }

    }
}

/**
 * QueryInputStreamState response structure.
 * @class
 */
class QueryInputStreamStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information of the StreamLive input queried.
         * @type {QueryDispatchInputInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new QueryDispatchInputInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLiveWatermarks request structure.
 * @class
 */
class DescribeStreamLiveWatermarksRequest extends  AbstractModel {
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
 * Transparent transmission of meta information plan configuration.
 * @class
 */
class TimedMetadataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded id3 metadata information, with a maximum limit of 1024 characters.
         * @type {string || null}
         */
        this.ID3 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID3 = 'ID3' in params ? params.ID3 : null;

    }
}

/**
 * Transcoding details.
 * @class
 */
class DescribeTranscodeDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The channel ID.
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * The start time (UTC+8) of transcoding in the format of yyyy-MM-dd HH:mm:ss.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time (UTC+8) of transcoding in the format of yyyy-MM-dd HH:mm:ss.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The duration (s) of transcoding.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * The encoding method.
Examples:
`liveprocessor_H264`: Live transcoding-H264
`liveprocessor_H265`: Live transcoding-H265
`topspeed_H264`: Top speed codec-H264
`topspeed_H265`: Top speed codec-H265
         * @type {string || null}
         */
        this.ModuleCodec = null;

        /**
         * The target bitrate (Kbps).
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * The transcoding type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The push domain name.
         * @type {string || null}
         */
        this.PushDomain = null;

        /**
         * The target resolution.
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
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ModuleCodec = 'ModuleCodec' in params ? params.ModuleCodec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;

    }
}

/**
 * Time-shift configuration. This parameter is valid only for HLS_ARCHIVE and DASH_ARCHIVE output groups.
 * @class
 */
class TimeShiftSettingsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable time shifting. Valid values: `OPEN`; `CLOSE`
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Domain name bound for time shifting
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.PlayDomain = null;

        /**
         * Allowable time-shift period (s). Value range: [300, 2592000]. Default value: 300Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.StartoverWindow = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.State = 'State' in params ? params.State : null;
        this.PlayDomain = 'PlayDomain' in params ? params.PlayDomain : null;
        this.StartoverWindow = 'StartoverWindow' in params ? params.StartoverWindow : null;

    }
}

/**
 * Distribution configuration information.
 * @class
 */
class DeliveryRestrictionsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Corresponds to SCTE-35 web_delivery_allowed_flag parameter.
         * @type {string || null}
         */
        this.WebDeliveryAllowed = null;

        /**
         * Corresponds to SCTE-35 no_regional_blackout_flag parameter.
         * @type {string || null}
         */
        this.NoRegionalBlackout = null;

        /**
         * Corresponds to SCTE-35 archive_allowed_flag.
         * @type {string || null}
         */
        this.ArchiveAllowed = null;

        /**
         * Corresponds to SCTE-35 device_restrictions parameter.
         * @type {string || null}
         */
        this.DeviceRestrictions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WebDeliveryAllowed = 'WebDeliveryAllowed' in params ? params.WebDeliveryAllowed : null;
        this.NoRegionalBlackout = 'NoRegionalBlackout' in params ? params.NoRegionalBlackout : null;
        this.ArchiveAllowed = 'ArchiveAllowed' in params ? params.ArchiveAllowed : null;
        this.DeviceRestrictions = 'DeviceRestrictions' in params ? params.DeviceRestrictions : null;

    }
}

/**
 * Video transcoding template.
 * @class
 */
class VideoTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video transcoding template name, which can contain 1-20 letters and digits.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Video codec. Valid values: H264/H265. If this parameter is left empty, the original value will be used.
         * @type {string || null}
         */
        this.Vcodec = null;

        /**
         * Video bitrate. Value range: [50000,40000000]. The value can only be a multiple of 1,000. If this parameter is left empty, the original value will be used.
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * Video width. Value range: (0,3000]. The value can only be a multiple of 4. If this parameter is left empty, the original value will be used.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Video height. Value range: (0,3000]. The value can only be a multiple of 4. If this parameter is left empty, the original value will be used.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Video frame rate. Value range: [1,240]. If this parameter is left empty, the original value will be used.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Whether to enable top speed codec. Valid value: CLOSE/OPEN. Default value: CLOSE.
         * @type {string || null}
         */
        this.TopSpeed = null;

        /**
         * Top speed codec compression ratio. Value range: [0,50]. The lower the compression ratio, the higher the image quality.
         * @type {number || null}
         */
        this.BitrateCompressionRatio = null;

        /**
         * Bitrate control mode. Valid values: `CBR`, `ABR` (default)
         * @type {string || null}
         */
        this.RateControlMode = null;

        /**
         * Watermark ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Vcodec = 'Vcodec' in params ? params.Vcodec : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.TopSpeed = 'TopSpeed' in params ? params.TopSpeed : null;
        this.BitrateCompressionRatio = 'BitrateCompressionRatio' in params ? params.BitrateCompressionRatio : null;
        this.RateControlMode = 'RateControlMode' in params ? params.RateControlMode : null;
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;

    }
}

/**
 * Event trigger time settings
 * @class
 */
class TimingSettingsReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event trigger type. Valid values: `FIXED_TIME`, `IMMEDIATE`. This parameter is required if `EventType` is `INPUT_SWITCH`.
         * @type {string || null}
         */
        this.StartType = null;

        /**
         * This parameter is required if `EventType` is `INPUT_SWITCH` and `StartType` is `FIXED_TIME`.
It must be in UTC format, e.g., `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * This parameter is required if `EventType` is `TIMED_RECORD`.
It specifies the recording start time in UTC format (e.g., `2020-01-01T12:00:00Z`) and must be at least 1 minute later than the current time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * This parameter is required if `EventType` is `TIMED_RECORD`.
It specifies the recording end time in UTC format (e.g., `2020-01-01T12:00:00Z`) and must be at least 1 minute later than the recording start time.
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
        this.StartType = 'StartType' in params ? params.StartType : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyStreamLiveWatermark request structure.
 * @class
 */
class ModifyStreamLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Watermark name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Watermark image settings. This parameter is valid if `Type` is `STATIC_IMAGE`.
         * @type {CreateImageSettings || null}
         */
        this.ImageSettings = null;

        /**
         * Watermark text settings. This parameter is valid if `Type` is `TEXT`.
         * @type {CreateTextSettings || null}
         */
        this.TextSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.ImageSettings) {
            let obj = new CreateImageSettings();
            obj.deserialize(params.ImageSettings)
            this.ImageSettings = obj;
        }

        if (params.TextSettings) {
            let obj = new CreateTextSettings();
            obj.deserialize(params.TextSettings)
            this.TextSettings = obj;
        }

    }
}

/**
 * DescribeStreamLiveTranscodeDetail request structure.
 * @class
 */
class DescribeStreamLiveTranscodeDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The query start time (UTC+8) in the format of yyyy-MM-dd.
You can only query data in the last month (not including the current day).
         * @type {string || null}
         */
        this.StartDayTime = null;

        /**
         * The query end time (UTC+8) in the format of yyyy-MM-dd.
You can only query data in the last month (not including the current day).
         * @type {string || null}
         */
        this.EndDayTime = null;

        /**
         * The channel ID (optional).
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * The number of pages. Default value: 1.
The value cannot exceed 100.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * The number of records per page. Default value: 10.
Value range: 1-1000.
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
        this.StartDayTime = 'StartDayTime' in params ? params.StartDayTime : null;
        this.EndDayTime = 'EndDayTime' in params ? params.EndDayTime : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * SCTE-35 configuration information.
 * @class
 */
class SegmentationDescriptorRespInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * A 32-bit unique segmentation event identifier. Only one occurrence of a given segmentation_event_id value shall be active at any one time.
         * @type {number || null}
         */
        this.EventID = null;

        /**
         * Indicates that a previously sent segmentation event, identified by segmentation_event_id, has been cancelled.
         * @type {number || null}
         */
        this.EventCancelIndicator = null;

        /**
         * Distribution configuration.
         * @type {DeliveryRestrictionsInfo || null}
         */
        this.DeliveryRestrictions = null;

        /**
         * The duration of the segment in 90kHz ticks. indicat when the segment will be over and when the next segmentation message will occur.Shall be 0 for end messages.the time signal will continue until insert a cancellation message when not specify the duration.
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * Corresponds to SCTE-35 segmentation_upid_type parameter.
         * @type {number || null}
         */
        this.UPIDType = null;

        /**
         * Corresponds to SCTE-35 segmentation_upid. 
         * @type {string || null}
         */
        this.UPID = null;

        /**
         * Corresponds to SCTE-35 segmentation_type_id.
         * @type {number || null}
         */
        this.TypeID = null;

        /**
         * Corresponds to SCTE-35 segment_num。This field provides support for numbering segments within a given collection of segments.
         * @type {number || null}
         */
        this.Num = null;

        /**
         * Corresponds to SCTE-35 segment_expected.This field provides a count of the expected number of individual segments within a collection of segments.
         * @type {number || null}
         */
        this.Expected = null;

        /**
         * Corresponds to SCTE-35 sub_segment_num.This field provides identification for a specific sub-segment within a collection of sub-segments.
         * @type {number || null}
         */
        this.SubSegmentNum = null;

        /**
         * Corresponds to SCTE-35 sub_segments_expected.This field provides a count of the expected number of individual sub-segments within the collection of sub-segments.
         * @type {number || null}
         */
        this.SubSegmentsExpected = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventID = 'EventID' in params ? params.EventID : null;
        this.EventCancelIndicator = 'EventCancelIndicator' in params ? params.EventCancelIndicator : null;

        if (params.DeliveryRestrictions) {
            let obj = new DeliveryRestrictionsInfo();
            obj.deserialize(params.DeliveryRestrictions)
            this.DeliveryRestrictions = obj;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.UPIDType = 'UPIDType' in params ? params.UPIDType : null;
        this.UPID = 'UPID' in params ? params.UPID : null;
        this.TypeID = 'TypeID' in params ? params.TypeID : null;
        this.Num = 'Num' in params ? params.Num : null;
        this.Expected = 'Expected' in params ? params.Expected : null;
        this.SubSegmentNum = 'SubSegmentNum' in params ? params.SubSegmentNum : null;
        this.SubSegmentsExpected = 'SubSegmentsExpected' in params ? params.SubSegmentsExpected : null;

    }
}

/**
 * DescribeStreamLiveChannelLogs response structure.
 * @class
 */
class DescribeStreamLiveChannelLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pipeline push information
         * @type {PipelineLogInfo || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            let obj = new PipelineLogInfo();
            obj.deserialize(params.Infos)
            this.Infos = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLiveChannelInputStatistics request structure.
 * @class
 */
class DescribeStreamLiveChannelInputStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Start time for query, which is 1 hour ago by default. You can query statistics in the last 7 days.
UTC time, such as `2020-01-01T12:00:00Z`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time for query, which is 1 hour after `StartTime` by default
UTC time, such as `2020-01-01T12:00:00Z`
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Data collection interval. Valid values: `5s`, `1min` (default), `5min`, `15min`
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
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * Pipeline log information.
 * @class
 */
class PipelineLogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log information of pipeline 0.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LogInfo> || null}
         */
        this.Pipeline0 = null;

        /**
         * Log information of pipeline 1.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LogInfo> || null}
         */
        this.Pipeline1 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Pipeline0) {
            this.Pipeline0 = new Array();
            for (let z in params.Pipeline0) {
                let obj = new LogInfo();
                obj.deserialize(params.Pipeline0[z]);
                this.Pipeline0.push(obj);
            }
        }

        if (params.Pipeline1) {
            this.Pipeline1 = new Array();
            for (let z in params.Pipeline1) {
                let obj = new LogInfo();
                obj.deserialize(params.Pipeline1[z]);
                this.Pipeline1.push(obj);
            }
        }

    }
}

/**
 * DeleteStreamLivePlan request structure.
 * @class
 */
class DeleteStreamLivePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the channel whose event is to be deleted
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Name of the event to delete
         * @type {string || null}
         */
        this.EventName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.EventName = 'EventName' in params ? params.EventName : null;

    }
}

/**
 * DescribeStreamLiveChannels request structure.
 * @class
 */
class DescribeStreamLiveChannelsRequest extends  AbstractModel {
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
 * Input failover settings
 * @class
 */
class FailOverSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the backup input
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.SecondaryInputId = null;

        /**
         * The wait time (ms) for triggering failover after the primary input becomes unavailable. Value range: [1000, 86400000]. Default value: `3000`
         * @type {number || null}
         */
        this.LossThreshold = null;

        /**
         * Failover policy. Valid values: `CURRENT_PREFERRED` (default), `PRIMARY_PREFERRED`
         * @type {string || null}
         */
        this.RecoverBehavior = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecondaryInputId = 'SecondaryInputId' in params ? params.SecondaryInputId : null;
        this.LossThreshold = 'LossThreshold' in params ? params.LossThreshold : null;
        this.RecoverBehavior = 'RecoverBehavior' in params ? params.RecoverBehavior : null;

    }
}

/**
 * Channel output statistics.
 * @class
 */
class ChannelInputStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input ID.
         * @type {string || null}
         */
        this.InputId = null;

        /**
         * Input statistics.
         * @type {InputStatistics || null}
         */
        this.Statistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputId = 'InputId' in params ? params.InputId : null;

        if (params.Statistics) {
            let obj = new InputStatistics();
            obj.deserialize(params.Statistics)
            this.Statistics = obj;
        }

    }
}

/**
 * HLS protocol configuration.
 * @class
 */
class HlsRemuxSettingsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Segment duration in ms. Value range: [1000,30000]. Default value: 4000. The value can only be a multiple of 1,000.
         * @type {number || null}
         */
        this.SegmentDuration = null;

        /**
         * Number of segments. Value range: [1,30]. Default value: 5.
         * @type {number || null}
         */
        this.SegmentNumber = null;

        /**
         * Whether to enable PDT insertion. Valid values: CLOSE/OPEN. Default value: CLOSE.
         * @type {string || null}
         */
        this.PdtInsertion = null;

        /**
         * PDT duration in seconds. Value range: (0,3000]. Default value: 600.
         * @type {number || null}
         */
        this.PdtDuration = null;

        /**
         * Audio/Video packaging scheme. Valid values: `SEPARATE`, `MERGE`. Default value is: SEPARATE.
         * @type {string || null}
         */
        this.Scheme = null;

        /**
         * The segment type. Valid values: `ts` (default), `fmp4`.
Currently, fMP4 segments do not support DRM or time shifting.
         * @type {string || null}
         */
        this.SegmentType = null;

        /**
         * The HLS package type when the H.265 codec is used. Valid values: `hvc1`, `hev1` (default).
         * @type {string || null}
         */
        this.H265PackageType = null;

        /**
         * Whether to enable low latency 0:CLOSE, 1:OPEN, default value: 0.
         * @type {number || null}
         */
        this.LowLatency = null;

        /**
         * Low latency slice size, unit ms. Value range: integer [200-HlsRemuxSettings.SegmentDuration] Default value: 500ms.
         * @type {number || null}
         */
        this.PartialSegmentDuration = null;

        /**
         * Low latency slice playback position, unit ms. Value range: integer [3*HlsRemuxSettings.PartiSegmentDuration - 3*HlsRemuxSettings.SegmentDuration], Default value: 3*HlsRemuxSettings.PartiSegmentDuration.
         * @type {number || null}
         */
        this.PartialSegmentPlaySite = null;

        /**
         * Hls main m3u8 file sorting rules by bitrate, optional values: 1: video bitrate ascending order; 2: video bitrate descending order. Default value: 1.
         * @type {number || null}
         */
        this.StreamOrder = null;

        /**
         * Whether the Hls main m3u8 file contains resolution information, optional values: 1: INCLUDE includes video resolution; 2: EXCLUDE does not include video resolution. Default value: 1.
         * @type {number || null}
         */
        this.VideoResolution = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SegmentDuration = 'SegmentDuration' in params ? params.SegmentDuration : null;
        this.SegmentNumber = 'SegmentNumber' in params ? params.SegmentNumber : null;
        this.PdtInsertion = 'PdtInsertion' in params ? params.PdtInsertion : null;
        this.PdtDuration = 'PdtDuration' in params ? params.PdtDuration : null;
        this.Scheme = 'Scheme' in params ? params.Scheme : null;
        this.SegmentType = 'SegmentType' in params ? params.SegmentType : null;
        this.H265PackageType = 'H265PackageType' in params ? params.H265PackageType : null;
        this.LowLatency = 'LowLatency' in params ? params.LowLatency : null;
        this.PartialSegmentDuration = 'PartialSegmentDuration' in params ? params.PartialSegmentDuration : null;
        this.PartialSegmentPlaySite = 'PartialSegmentPlaySite' in params ? params.PartialSegmentPlaySite : null;
        this.StreamOrder = 'StreamOrder' in params ? params.StreamOrder : null;
        this.VideoResolution = 'VideoResolution' in params ? params.VideoResolution : null;

    }
}

/**
 * Configuration information of an event in the plan
 * @class
 */
class EventSettingsResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: INPUT_SWITCH, TIMED_RECORD, SCTE35_TIME_SIGNAL, SCTE35_SPLICE_INSERT, SCTE35_RETURN_TO_NETWORK.
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * ID of the input attached, which is not empty if `EventType` is `INPUT_SWITCH`
         * @type {string || null}
         */
        this.InputAttachment = null;

        /**
         * Name of the output group attached. This parameter is not empty if `EventType` is `TIMED_RECORD`.
         * @type {string || null}
         */
        this.OutputGroupName = null;

        /**
         * Name of the manifest file for timed recording, which ends with `.m3u8` for HLS and `.mpd` for DASH. This parameter is not empty if `EventType` is `TIMED_RECORD`.
         * @type {string || null}
         */
        this.ManifestName = null;

        /**
         * URL of the COS bucket where recording files are saved. This parameter is not empty if `EventType` is `TIMED_RECORD`. It may contain 1 or 2 URLs. The first URL corresponds to pipeline 0 and the second pipeline 1.
         * @type {Array.<EventSettingsDestinationResp> || null}
         */
        this.Destinations = null;

        /**
         * SCTE-35 configuration information.
         * @type {Array.<SegmentationDescriptorRespInfo> || null}
         */
        this.SCTE35SegmentationDescriptor = null;

        /**
         * A 32-bit unique segmentation event identifier.Only one occurrence of a given segmentation_event_id value shall be active at any one time.
         * @type {number || null}
         */
        this.SpliceEventID = null;

        /**
         * The duration of the segment in 90kHz ticks.It used to  give the splicer an indication of when the break will be over and when the network In Point will occur. If not specifyed,the splice_insert will continue when enter a return_to_network to end the splice_insert at the appropriate time.
         * @type {string || null}
         */
        this.SpliceDuration = null;

        /**
         * Meta information plan configuration.
         * @type {TimedMetadataInfo || null}
         */
        this.TimedMetadataSetting = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.InputAttachment = 'InputAttachment' in params ? params.InputAttachment : null;
        this.OutputGroupName = 'OutputGroupName' in params ? params.OutputGroupName : null;
        this.ManifestName = 'ManifestName' in params ? params.ManifestName : null;

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new EventSettingsDestinationResp();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }

        if (params.SCTE35SegmentationDescriptor) {
            this.SCTE35SegmentationDescriptor = new Array();
            for (let z in params.SCTE35SegmentationDescriptor) {
                let obj = new SegmentationDescriptorRespInfo();
                obj.deserialize(params.SCTE35SegmentationDescriptor[z]);
                this.SCTE35SegmentationDescriptor.push(obj);
            }
        }
        this.SpliceEventID = 'SpliceEventID' in params ? params.SpliceEventID : null;
        this.SpliceDuration = 'SpliceDuration' in params ? params.SpliceDuration : null;

        if (params.TimedMetadataSetting) {
            let obj = new TimedMetadataInfo();
            obj.deserialize(params.TimedMetadataSetting)
            this.TimedMetadataSetting = obj;
        }

    }
}

/**
 * Transparent transmission of ID3 information configuration.
 * @class
 */
class TimedMetadataSettingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to transparently transmit ID3 information, optional values: 0:NO_PASSTHROUGH, 1:PASSTHROUGH, default 0.
         * @type {number || null}
         */
        this.Behavior = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Behavior = 'Behavior' in params ? params.Behavior : null;

    }
}

/**
 * Audio transcoding template.
 * @class
 */
class AudioTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Only `AttachedInputs.AudioSelectors.Name` can be selected. This parameter is required for RTP_PUSH and UDP_PUSH.
         * @type {string || null}
         */
        this.AudioSelectorName = null;

        /**
         * Audio transcoding template name, which can contain 1-20 letters and digits.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Audio codec. Valid value: AAC. Default value: AAC.
         * @type {string || null}
         */
        this.Acodec = null;

        /**
         * Audio bitrate. If this parameter is left empty, the original value will be used.
Valid values: 6000, 7000, 8000, 10000, 12000, 14000, 16000, 20000, 24000, 28000, 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 288000, 320000, 384000, 448000, 512000, 576000, 640000, 768000, 896000, 1024000
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * Audio language code, whose length is always 3 characters.
         * @type {string || null}
         */
        this.LanguageCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AudioSelectorName = 'AudioSelectorName' in params ? params.AudioSelectorName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Acodec = 'Acodec' in params ? params.Acodec : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.LanguageCode = 'LanguageCode' in params ? params.LanguageCode : null;

    }
}

/**
 * StreamPackage settings when the output type is StreamPackage
 * @class
 */
class StreamPackageSettingsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID in StreamPackage
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeStreamLiveChannels response structure.
 * @class
 */
class DescribeStreamLiveChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of channel information
Note: this field may return `null`, indicating that no valid value was found.
         * @type {Array.<StreamLiveChannelInfo> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new StreamLiveChannelInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryInputStreamState request structure.
 * @class
 */
class QueryInputStreamStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The StreamLive input ID.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Event configuration information
 * @class
 */
class PlanReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event name
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * Event trigger time settings
         * @type {TimingSettingsReq || null}
         */
        this.TimingSettings = null;

        /**
         * Event configuration
         * @type {EventSettingsReq || null}
         */
        this.EventSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventName = 'EventName' in params ? params.EventName : null;

        if (params.TimingSettings) {
            let obj = new TimingSettingsReq();
            obj.deserialize(params.TimingSettings)
            this.TimingSettings = obj;
        }

        if (params.EventSettings) {
            let obj = new EventSettingsReq();
            obj.deserialize(params.EventSettings)
            this.EventSettings = obj;
        }

    }
}

/**
 * DeleteStreamLiveWatermark request structure.
 * @class
 */
class DeleteStreamLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeStreamLiveRegions response structure.
 * @class
 */
class DescribeStreamLiveRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * StreamLive region information
         * @type {StreamLiveRegionInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new StreamLiveRegionInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Timed recording settings
 * @class
 */
class TimedRecordSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to automatically delete finished recording events. Valid values: `CLOSE`, `OPEN`. If this parameter is left empty, `CLOSE` will be used.
If it is set to `OPEN`, a recording event will be deleted 7 days after it is finished.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AutoClear = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoClear = 'AutoClear' in params ? params.AutoClear : null;

    }
}

/**
 * StreamLive region information
 * @class
 */
class StreamLiveRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of StreamLive regions
         * @type {Array.<RegionInfo> || null}
         */
        this.Regions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Regions) {
            this.Regions = new Array();
            for (let z in params.Regions) {
                let obj = new RegionInfo();
                obj.deserialize(params.Regions[z]);
                this.Regions.push(obj);
            }
        }

    }
}

/**
 * DescribeStreamLiveChannel request structure.
 * @class
 */
class DescribeStreamLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeStreamLivePlans request structure.
 * @class
 */
class DescribeStreamLivePlansRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the channel whose events you want to query
         * @type {string || null}
         */
        this.ChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

    }
}

/**
 * CreateStreamLiveChannel request structure.
 * @class
 */
class CreateStreamLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel name, which can contain 1-32 case-sensitive letters, digits, and underscores and must be unique at the region level
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Inputs to attach. You can attach 1 to 5 inputs.
         * @type {Array.<AttachedInput> || null}
         */
        this.AttachedInputs = null;

        /**
         * Configuration information of the channel’s output groups. Quantity: [1, 10]
         * @type {Array.<StreamLiveOutputGroupsInfo> || null}
         */
        this.OutputGroups = null;

        /**
         * Audio transcoding templates. Quantity: [1, 20]
         * @type {Array.<AudioTemplateInfo> || null}
         */
        this.AudioTemplates = null;

        /**
         * Video transcoding templates. Quantity: [1, 10]
         * @type {Array.<VideoTemplateInfo> || null}
         */
        this.VideoTemplates = null;

        /**
         * Audio/Video transcoding templates. Quantity: [1, 10]
         * @type {Array.<AVTemplate> || null}
         */
        this.AVTemplates = null;

        /**
         * Event settings
         * @type {PlanSettings || null}
         */
        this.PlanSettings = null;

        /**
         * The callback settings.
         * @type {EventNotifySetting || null}
         */
        this.EventNotifySettings = null;

        /**
         * Complement the last video frame settings.
         * @type {InputLossBehaviorInfo || null}
         */
        this.InputLossBehavior = null;

        /**
         * Pipeline configuration.
         * @type {PipelineInputSettingsInfo || null}
         */
        this.PipelineInputSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AttachedInputs) {
            this.AttachedInputs = new Array();
            for (let z in params.AttachedInputs) {
                let obj = new AttachedInput();
                obj.deserialize(params.AttachedInputs[z]);
                this.AttachedInputs.push(obj);
            }
        }

        if (params.OutputGroups) {
            this.OutputGroups = new Array();
            for (let z in params.OutputGroups) {
                let obj = new StreamLiveOutputGroupsInfo();
                obj.deserialize(params.OutputGroups[z]);
                this.OutputGroups.push(obj);
            }
        }

        if (params.AudioTemplates) {
            this.AudioTemplates = new Array();
            for (let z in params.AudioTemplates) {
                let obj = new AudioTemplateInfo();
                obj.deserialize(params.AudioTemplates[z]);
                this.AudioTemplates.push(obj);
            }
        }

        if (params.VideoTemplates) {
            this.VideoTemplates = new Array();
            for (let z in params.VideoTemplates) {
                let obj = new VideoTemplateInfo();
                obj.deserialize(params.VideoTemplates[z]);
                this.VideoTemplates.push(obj);
            }
        }

        if (params.AVTemplates) {
            this.AVTemplates = new Array();
            for (let z in params.AVTemplates) {
                let obj = new AVTemplate();
                obj.deserialize(params.AVTemplates[z]);
                this.AVTemplates.push(obj);
            }
        }

        if (params.PlanSettings) {
            let obj = new PlanSettings();
            obj.deserialize(params.PlanSettings)
            this.PlanSettings = obj;
        }

        if (params.EventNotifySettings) {
            let obj = new EventNotifySetting();
            obj.deserialize(params.EventNotifySettings)
            this.EventNotifySettings = obj;
        }

        if (params.InputLossBehavior) {
            let obj = new InputLossBehaviorInfo();
            obj.deserialize(params.InputLossBehavior)
            this.InputLossBehavior = obj;
        }

        if (params.PipelineInputSettings) {
            let obj = new PipelineInputSettingsInfo();
            obj.deserialize(params.PipelineInputSettings)
            this.PipelineInputSettings = obj;
        }

    }
}

/**
 * DescribeStreamLiveTranscodeDetail response structure.
 * @class
 */
class DescribeStreamLiveTranscodeDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of the transcoding information.
         * @type {Array.<DescribeTranscodeDetailInfo> || null}
         */
        this.Infos = null;

        /**
         * The number of the current page.
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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new DescribeTranscodeDetailInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
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
 * CreateStreamLiveWatermark response structure.
 * @class
 */
class CreateStreamLiveWatermarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID
         * @type {string || null}
         */
        this.Id = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLiveInputs response structure.
 * @class
 */
class DescribeStreamLiveInputsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of input information
Note: this field may return `null`, indicating that no valid value was found.
         * @type {Array.<InputInfo> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new InputInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyStreamLiveInput response structure.
 * @class
 */
class ModifyStreamLiveInputResponse extends  AbstractModel {
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
 * DescribeStreamLiveChannelAlerts response structure.
 * @class
 */
class DescribeStreamLiveChannelAlertsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm information of the channel’s two pipelines
         * @type {ChannelAlertInfos || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            let obj = new ChannelAlertInfos();
            obj.deserialize(params.Infos)
            this.Infos = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Event configuration information
 * @class
 */
class PlanResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event name
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * Event trigger time settings
         * @type {TimingSettingsResp || null}
         */
        this.TimingSettings = null;

        /**
         * Event configuration
         * @type {EventSettingsResp || null}
         */
        this.EventSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventName = 'EventName' in params ? params.EventName : null;

        if (params.TimingSettings) {
            let obj = new TimingSettingsResp();
            obj.deserialize(params.TimingSettings)
            this.TimingSettings = obj;
        }

        if (params.EventSettings) {
            let obj = new EventSettingsResp();
            obj.deserialize(params.EventSettings)
            this.EventSettings = obj;
        }

    }
}

/**
 * DescribeStreamLivePlans response structure.
 * @class
 */
class DescribeStreamLivePlansResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of event information
Note: this field may return `null`, indicating that no valid value was found.
         * @type {Array.<PlanResp> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new PlanResp();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLiveChannelLogs request structure.
 * @class
 */
class DescribeStreamLiveChannelLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Start time for query, which is 1 hour ago by default. You can query logs in the last 7 days.
UTC time, such as `2020-01-01T12:00:00Z`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time for query, which is 1 hour after `StartTime` by default
UTC time, such as `2020-01-01T12:00:00Z`
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
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * CreateStreamLiveInputSecurityGroup request structure.
 * @class
 */
class CreateStreamLiveInputSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input security group name, which can contain case-sensitive letters, digits, and underscores and must be unique at the region level
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Allowlist entries. Quantity: [1, 10]
         * @type {Array.<string> || null}
         */
        this.Whitelist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Whitelist = 'Whitelist' in params ? params.Whitelist : null;

    }
}

/**
 * DescribeStreamLiveChannelOutputStatistics response structure.
 * @class
 */
class DescribeStreamLiveChannelOutputStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel output information
         * @type {Array.<ChannelOutputsStatistics> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new ChannelOutputsStatistics();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Watermark information
 * @class
 */
class DescribeWatermarkInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Watermark name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Watermark type. Valid values: STATIC_IMAGE, TEXT.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Watermark image settings. This parameter is valid if `Type` is `STATIC_IMAGE`.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {DescribeImageSettings || null}
         */
        this.ImageSettings = null;

        /**
         * Watermark text settings. This parameter is valid if `Type` is `TEXT`.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {DescribeTextSettings || null}
         */
        this.TextSettings = null;

        /**
         * Last modified time (UTC+0) of the watermark, in the format of `2020-01-01T12:00:00Z`
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * List of channel IDs the watermark is bound to
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.AttachedChannels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.ImageSettings) {
            let obj = new DescribeImageSettings();
            obj.deserialize(params.ImageSettings)
            this.ImageSettings = obj;
        }

        if (params.TextSettings) {
            let obj = new DescribeTextSettings();
            obj.deserialize(params.TextSettings)
            this.TextSettings = obj;
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.AttachedChannels = 'AttachedChannels' in params ? params.AttachedChannels : null;

    }
}

/**
 * Destination address information in event settings
 * @class
 */
class EventSettingsDestinationReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL of the COS bucket to save recording files
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * Configuration information of an event in the plan
 * @class
 */
class EventSettingsReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: `INPUT_SWITCH`, `TIMED_RECORD`, SCTE35_TIME_SIGNAL, SCTE35_SPLICE_INSERT, SCTE35_RETURN_TO_NETWORK. If it is not specified, `INPUT_SWITCH` will be used.
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * ID of the input to attach, which is required if `EventType` is `INPUT_SWITCH`
         * @type {string || null}
         */
        this.InputAttachment = null;

        /**
         * Name of the output group to attach. This parameter is required if `EventType` is `TIMED_RECORD`.
         * @type {string || null}
         */
        this.OutputGroupName = null;

        /**
         * Name of the manifest file for timed recording, which must end with `.m3u8` for HLS and `.mpd` for DASH. This parameter is required if `EventType` is `TIMED_RECORD`.
         * @type {string || null}
         */
        this.ManifestName = null;

        /**
         * URL of the COS bucket to save recording files. This parameter is required if `EventType` is `TIMED_RECORD`. It may contain 1 or 2 URLs. The first URL corresponds to pipeline 0 and the second pipeline 1.
         * @type {Array.<EventSettingsDestinationReq> || null}
         */
        this.Destinations = null;

        /**
         * SCTE-35 configuration information.
         * @type {Array.<SegmentationDescriptorInfo> || null}
         */
        this.SCTE35SegmentationDescriptor = null;

        /**
         * A 32-bit unique segmentation event identifier.Only one occurrence of a given segmentation_event_id value shall be active at any one time.
         * @type {number || null}
         */
        this.SpliceEventID = null;

        /**
         * The duration of the segment in 90kHz ticks.It used to  give the splicer an indication of when the break will be over and when the network In Point will occur. If not specifyed,the splice_insert will continue when enter a return_to_network to end the splice_insert at the appropriate time.
         * @type {number || null}
         */
        this.SpliceDuration = null;

        /**
         * Meta information plan configuration.
         * @type {TimedMetadataInfo || null}
         */
        this.TimedMetadataSetting = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.InputAttachment = 'InputAttachment' in params ? params.InputAttachment : null;
        this.OutputGroupName = 'OutputGroupName' in params ? params.OutputGroupName : null;
        this.ManifestName = 'ManifestName' in params ? params.ManifestName : null;

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new EventSettingsDestinationReq();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }

        if (params.SCTE35SegmentationDescriptor) {
            this.SCTE35SegmentationDescriptor = new Array();
            for (let z in params.SCTE35SegmentationDescriptor) {
                let obj = new SegmentationDescriptorInfo();
                obj.deserialize(params.SCTE35SegmentationDescriptor[z]);
                this.SCTE35SegmentationDescriptor.push(obj);
            }
        }
        this.SpliceEventID = 'SpliceEventID' in params ? params.SpliceEventID : null;
        this.SpliceDuration = 'SpliceDuration' in params ? params.SpliceDuration : null;

        if (params.TimedMetadataSetting) {
            let obj = new TimedMetadataInfo();
            obj.deserialize(params.TimedMetadataSetting)
            this.TimedMetadataSetting = obj;
        }

    }
}

/**
 * Custom DRM key.
 * @class
 */
class DrmKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * DRM key, which is a 32-bit hexadecimal string.
Note: uppercase letters in the string will be automatically converted to lowercase ones.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Required for Widevine encryption. Valid values: SD, HD, UHD1, UHD2, AUDIO, ALL.
ALL refers to all tracks. If this parameter is set to ALL, no other tracks can be added.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Track = null;

        /**
         * Required for Widevine encryption. It is a 32-bit hexadecimal string.
Note: uppercase letters in the string will be automatically converted to lowercase ones.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Required when FairPlay uses the AES encryption method. It is a 32-bit hexadecimal string.
For more information about this parameter, please see: 
https://tools.ietf.org/html/rfc3826
Note: uppercase letters in the string will be automatically converted to lowercase ones.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Iv = null;

        /**
         * The URI of the license server when AES-128 is used. This parameter may be empty.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyUri = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Track = 'Track' in params ? params.Track : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Iv = 'Iv' in params ? params.Iv : null;
        this.KeyUri = 'KeyUri' in params ? params.KeyUri : null;

    }
}

/**
 * Destination address information in event settings
 * @class
 */
class EventSettingsDestinationResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL of the COS bucket where recording files are saved
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * Output information.
 * @class
 */
class OutputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Audio transcoding template name array.
Quantity limit: [0,1] for RTMP; [0,20] for others.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AudioTemplateNames = null;

        /**
         * Video transcoding template name array. Quantity limit: [0,1].
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.VideoTemplateNames = null;

        /**
         * SCTE-35 information configuration.
         * @type {Scte35SettingsInfo || null}
         */
        this.Scte35Settings = null;

        /**
         * Audio/Video transcoding template name. If `HlsRemuxSettings.Scheme` is `MERGE`, there is 1 audio/video transcoding template. Otherwise, this parameter is empty.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.AVTemplateNames = null;

        /**
         * Meta information controls configuration.
         * @type {TimedMetadataSettingInfo || null}
         */
        this.TimedMetadataSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.AudioTemplateNames = 'AudioTemplateNames' in params ? params.AudioTemplateNames : null;
        this.VideoTemplateNames = 'VideoTemplateNames' in params ? params.VideoTemplateNames : null;

        if (params.Scte35Settings) {
            let obj = new Scte35SettingsInfo();
            obj.deserialize(params.Scte35Settings)
            this.Scte35Settings = obj;
        }
        this.AVTemplateNames = 'AVTemplateNames' in params ? params.AVTemplateNames : null;

        if (params.TimedMetadataSettings) {
            let obj = new TimedMetadataSettingInfo();
            obj.deserialize(params.TimedMetadataSettings)
            this.TimedMetadataSettings = obj;
        }

    }
}

/**
 * DescribeStreamLiveInputSecurityGroup request structure.
 * @class
 */
class DescribeStreamLiveInputSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input security group ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * CreateStreamLiveChannel response structure.
 * @class
 */
class CreateStreamLiveChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLiveChannelInputStatistics response structure.
 * @class
 */
class DescribeStreamLiveChannelInputStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel input statistics
         * @type {Array.<ChannelInputStatistics> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new ChannelInputStatistics();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopStreamLiveChannel response structure.
 * @class
 */
class StopStreamLiveChannelResponse extends  AbstractModel {
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
 * The callback configuration for push events.
 * @class
 */
class PushEventSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * The callback URL (required).
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * The callback key (optional).
         * @type {string || null}
         */
        this.NotifyKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.NotifyKey = 'NotifyKey' in params ? params.NotifyKey : null;

    }
}

/**
 * Watermark image settings
 * @class
 */
class CreateImageSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image file format. Valid values: png, jpg.
         * @type {string || null}
         */
        this.ImageType = null;

        /**
         * Base64 encoded image content
         * @type {string || null}
         */
        this.ImageContent = null;

        /**
         * Origin. Valid values: TOP_LEFT, BOTTOM_LEFT, TOP_RIGHT, BOTTOM_RIGHT.
         * @type {string || null}
         */
        this.Location = null;

        /**
         * The watermark’s horizontal distance from the origin as a percentage of the video width. Value range: 0-100. Default: 10.
         * @type {number || null}
         */
        this.XPos = null;

        /**
         * The watermark’s vertical distance from the origin as a percentage of the video height. Value range: 0-100. Default: 10.
         * @type {number || null}
         */
        this.YPos = null;

        /**
         * The watermark image’s width as a percentage of the video width. Value range: 0-100. Default: 10.
`0` means to scale the width proportionally to the height.
You cannot set both `Width` and `Height` to `0`.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * The watermark image’s height as a percentage of the video height. Value range: 0-100. Default: 10.
`0` means to scale the height proportionally to the width.
You cannot set both `Width` and `Height` to `0`.
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
        this.ImageType = 'ImageType' in params ? params.ImageType : null;
        this.ImageContent = 'ImageContent' in params ? params.ImageContent : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * StartStreamLiveChannel response structure.
 * @class
 */
class StartStreamLiveChannelResponse extends  AbstractModel {
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
 * Channel output group information
 * @class
 */
class StreamLiveOutputGroupsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output group name, which can contain 1-32 case-sensitive letters, digits, and underscores and must be unique at the channel level
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Output protocol
Valid values: `HLS`, `DASH`, `HLS_ARCHIVE`, `HLS_STREAM_PACKAGE`, `DASH_STREAM_PACKAGE`
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Output information
If the type is RTMP or RTP, only one output is allowed; if it is HLS or DASH, 1-10 outputs are allowed.
         * @type {Array.<OutputInfo> || null}
         */
        this.Outputs = null;

        /**
         * Relay destinations. Quantity: [1, 2]
         * @type {Array.<DestinationInfo> || null}
         */
        this.Destinations = null;

        /**
         * HLS protocol configuration information, which takes effect only for HLS/HLS_ARCHIVE/HLS_STREAM_PACKAGE outputs.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {HlsRemuxSettingsInfo || null}
         */
        this.HlsRemuxSettings = null;

        /**
         * DRM configuration information
Note: this field may return `null`, indicating that no valid value was found.
         * @type {DrmSettingsInfo || null}
         */
        this.DrmSettings = null;

        /**
         * DASH protocol configuration information, which takes effect only for DASH/DASH_ARCHIVE outputs
Note: this field may return `null`, indicating that no valid value was found.
         * @type {DashRemuxSettingsInfo || null}
         */
        this.DashRemuxSettings = null;

        /**
         * StreamPackage configuration information, which is required if the output type is StreamPackage
Note: this field may return `null`, indicating that no valid value was found.
         * @type {StreamPackageSettingsInfo || null}
         */
        this.StreamPackageSettings = null;

        /**
         * Time-shift configuration information
Note: This field may return `null`, indicating that no valid value was found.
         * @type {TimeShiftSettingsInfo || null}
         */
        this.TimeShiftSettings = null;

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

        if (params.Outputs) {
            this.Outputs = new Array();
            for (let z in params.Outputs) {
                let obj = new OutputInfo();
                obj.deserialize(params.Outputs[z]);
                this.Outputs.push(obj);
            }
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new DestinationInfo();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }

        if (params.HlsRemuxSettings) {
            let obj = new HlsRemuxSettingsInfo();
            obj.deserialize(params.HlsRemuxSettings)
            this.HlsRemuxSettings = obj;
        }

        if (params.DrmSettings) {
            let obj = new DrmSettingsInfo();
            obj.deserialize(params.DrmSettings)
            this.DrmSettings = obj;
        }

        if (params.DashRemuxSettings) {
            let obj = new DashRemuxSettingsInfo();
            obj.deserialize(params.DashRemuxSettings)
            this.DashRemuxSettings = obj;
        }

        if (params.StreamPackageSettings) {
            let obj = new StreamPackageSettingsInfo();
            obj.deserialize(params.StreamPackageSettings)
            this.StreamPackageSettings = obj;
        }

        if (params.TimeShiftSettings) {
            let obj = new TimeShiftSettingsInfo();
            obj.deserialize(params.TimeShiftSettings)
            this.TimeShiftSettings = obj;
        }

    }
}

/**
 * Channel output information.
 * @class
 */
class ChannelOutputsStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output group name.
         * @type {string || null}
         */
        this.OutputGroupName = null;

        /**
         * Output group statistics.
         * @type {OutputsStatistics || null}
         */
        this.Statistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputGroupName = 'OutputGroupName' in params ? params.OutputGroupName : null;

        if (params.Statistics) {
            let obj = new OutputsStatistics();
            obj.deserialize(params.Statistics)
            this.Statistics = obj;
        }

    }
}

/**
 * Event settings
 * @class
 */
class PlanSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Timed recording settings
Note: This field may return `null`, indicating that no valid value was found.
         * @type {TimedRecordSettings || null}
         */
        this.TimedRecordSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TimedRecordSettings) {
            let obj = new TimedRecordSettings();
            obj.deserialize(params.TimedRecordSettings)
            this.TimedRecordSettings = obj;
        }

    }
}

/**
 * DescribeStreamLiveInputSecurityGroups response structure.
 * @class
 */
class DescribeStreamLiveInputSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of input security group information
         * @type {Array.<InputSecurityGroupInfo> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new InputSecurityGroupInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The callback settings.
 * @class
 */
class EventNotifySetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * The callback configuration for push events.
         * @type {PushEventSetting || null}
         */
        this.PushEventSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PushEventSettings) {
            let obj = new PushEventSetting();
            obj.deserialize(params.PushEventSettings)
            this.PushEventSettings = obj;
        }

    }
}

/**
 * DeleteStreamLiveInput response structure.
 * @class
 */
class DeleteStreamLiveInputResponse extends  AbstractModel {
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
 * StartStreamLiveChannel request structure.
 * @class
 */
class StartStreamLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Event trigger time settings
 * @class
 */
class TimingSettingsResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event trigger type
         * @type {string || null}
         */
        this.StartType = null;

        /**
         * Not empty if `StartType` is `FIXED_TIME`
UTC time, such as `2020-01-01T12:00:00Z`
         * @type {string || null}
         */
        this.Time = null;

        /**
         * This parameter cannot be empty if `EventType` is `TIMED_RECORD`.
It indicates the start time for recording in UTC format (e.g., `2020-01-01T12:00:00Z`) and must be at least 1 minute later than the current time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * This parameter cannot be empty if `EventType` is `TIMED_RECORD`.
It indicates the end time for recording in UTC format (e.g., `2020-01-01T12:00:00Z`) and must be at least 1 minute later than the start time for recording.
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
        this.StartType = 'StartType' in params ? params.StartType : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeStreamLiveWatermark response structure.
 * @class
 */
class DescribeStreamLiveWatermarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark information
         * @type {DescribeWatermarkInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeWatermarkInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SCTE-35 information.
 * @class
 */
class StreamScte35Info extends  AbstractModel {
    constructor(){
        super();

        /**
         * SCTE-35 `Pid`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Pid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Pid = 'Pid' in params ? params.Pid : null;

    }
}

/**
 * Audio information.
 * @class
 */
class StreamAudioInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audio `Pid`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Audio codec.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Audio frame rate.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Audio bitrate.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * Audio sample rate.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SampleRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;

    }
}

/**
 * Channel output statistics.
 * @class
 */
class OutputsStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output information of pipeline 0.
         * @type {Array.<PipelineOutputStatistics> || null}
         */
        this.Pipeline0 = null;

        /**
         * Output information of pipeline 1.
         * @type {Array.<PipelineOutputStatistics> || null}
         */
        this.Pipeline1 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Pipeline0) {
            this.Pipeline0 = new Array();
            for (let z in params.Pipeline0) {
                let obj = new PipelineOutputStatistics();
                obj.deserialize(params.Pipeline0[z]);
                this.Pipeline0.push(obj);
            }
        }

        if (params.Pipeline1) {
            this.Pipeline1 = new Array();
            for (let z in params.Pipeline1) {
                let obj = new PipelineOutputStatistics();
                obj.deserialize(params.Pipeline1[z]);
                this.Pipeline1.push(obj);
            }
        }

    }
}

/**
 * Input security group information.
 * @class
 */
class InputSecurityGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input security group ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Input security group name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * List of allowlist entries.
         * @type {Array.<string> || null}
         */
        this.Whitelist = null;

        /**
         * List of bound input streams.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.OccupiedInputs = null;

        /**
         * Input security group address.
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Whitelist = 'Whitelist' in params ? params.Whitelist : null;
        this.OccupiedInputs = 'OccupiedInputs' in params ? params.OccupiedInputs : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * Region information
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * ModifyStreamLiveInputSecurityGroup request structure.
 * @class
 */
class ModifyStreamLiveInputSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input security group ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Input security group name, which can contain 1-32 case-sensitive letters, digits, and underscores and must be unique at the region level
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Allowlist entries (max: 10)
         * @type {Array.<string> || null}
         */
        this.Whitelist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Whitelist = 'Whitelist' in params ? params.Whitelist : null;

    }
}

/**
 * Channel alarm information.
 * @class
 */
class ChannelAlertInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm details of pipeline 0 under this channel.
         * @type {Array.<ChannelPipelineAlerts> || null}
         */
        this.Pipeline0 = null;

        /**
         * Alarm details of pipeline 1 under this channel.
         * @type {Array.<ChannelPipelineAlerts> || null}
         */
        this.Pipeline1 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Pipeline0) {
            this.Pipeline0 = new Array();
            for (let z in params.Pipeline0) {
                let obj = new ChannelPipelineAlerts();
                obj.deserialize(params.Pipeline0[z]);
                this.Pipeline0.push(obj);
            }
        }

        if (params.Pipeline1) {
            this.Pipeline1 = new Array();
            for (let z in params.Pipeline1) {
                let obj = new ChannelPipelineAlerts();
                obj.deserialize(params.Pipeline1[z]);
                this.Pipeline1.push(obj);
            }
        }

    }
}

/**
 * Pipeline input statistics.
 * @class
 */
class PipelineInputStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data timestamp in seconds.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Input bandwidth in bps.
         * @type {number || null}
         */
        this.NetworkIn = null;

        /**
         * Video information array.
For `rtp/udp` input, the quantity is the number of `Pid` of the input video.
For other inputs, the quantity is 1.
         * @type {Array.<VideoPipelineInputStatistics> || null}
         */
        this.Video = null;

        /**
         * Audio information array.
For `rtp/udp` input, the quantity is the number of `Pid` of the input audio.
For other inputs, the quantity is 1.
         * @type {Array.<AudioPipelineInputStatistics> || null}
         */
        this.Audio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.NetworkIn = 'NetworkIn' in params ? params.NetworkIn : null;

        if (params.Video) {
            this.Video = new Array();
            for (let z in params.Video) {
                let obj = new VideoPipelineInputStatistics();
                obj.deserialize(params.Video[z]);
                this.Video.push(obj);
            }
        }

        if (params.Audio) {
            this.Audio = new Array();
            for (let z in params.Audio) {
                let obj = new AudioPipelineInputStatistics();
                obj.deserialize(params.Audio[z]);
                this.Audio.push(obj);
            }
        }

    }
}

/**
 * ModifyStreamLiveChannel response structure.
 * @class
 */
class ModifyStreamLiveChannelResponse extends  AbstractModel {
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
 * DeleteStreamLiveInputSecurityGroup response structure.
 * @class
 */
class DeleteStreamLiveInputSecurityGroupResponse extends  AbstractModel {
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
 * StopStreamLiveChannel request structure.
 * @class
 */
class StopStreamLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeStreamLiveInput response structure.
 * @class
 */
class DescribeStreamLiveInputResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input information
         * @type {InputInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new InputInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Input statistics.
 * @class
 */
class InputStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input statistics of pipeline 0.
         * @type {Array.<PipelineInputStatistics> || null}
         */
        this.Pipeline0 = null;

        /**
         * Input statistics of pipeline 1.
         * @type {Array.<PipelineInputStatistics> || null}
         */
        this.Pipeline1 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Pipeline0) {
            this.Pipeline0 = new Array();
            for (let z in params.Pipeline0) {
                let obj = new PipelineInputStatistics();
                obj.deserialize(params.Pipeline0[z]);
                this.Pipeline0.push(obj);
            }
        }

        if (params.Pipeline1) {
            this.Pipeline1 = new Array();
            for (let z in params.Pipeline1) {
                let obj = new PipelineInputStatistics();
                obj.deserialize(params.Pipeline1[z]);
                this.Pipeline1.push(obj);
            }
        }

    }
}

/**
 * Log details.
 * @class
 */
class LogMessageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {StreamInfo || null}
         */
        this.StreamInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.StreamInfo) {
            let obj = new StreamInfo();
            obj.deserialize(params.StreamInfo)
            this.StreamInfo = obj;
        }

    }
}

/**
 * DescribeStreamLiveInputs request structure.
 * @class
 */
class DescribeStreamLiveInputsRequest extends  AbstractModel {
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
 * SCTE-35 configuration information.
 * @class
 */
class Scte35SettingsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to pass through SCTE-35 information. Valid values: NO_PASSTHROUGH/PASSTHROUGH. Default value: NO_PASSTHROUGH.
         * @type {string || null}
         */
        this.Behavior = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Behavior = 'Behavior' in params ? params.Behavior : null;

    }
}

/**
 * ModifyStreamLiveWatermark response structure.
 * @class
 */
class ModifyStreamLiveWatermarkResponse extends  AbstractModel {
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
 * ModifyStreamLiveChannel request structure.
 * @class
 */
class ModifyStreamLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel name, which can contain 1-32 case-sensitive letters, digits, and underscores and must be unique at the region level
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Inputs to attach. You can attach 1 to 5 inputs.
         * @type {Array.<AttachedInput> || null}
         */
        this.AttachedInputs = null;

        /**
         * Configuration information of the channel’s output groups. Quantity: [1, 10]
         * @type {Array.<StreamLiveOutputGroupsInfo> || null}
         */
        this.OutputGroups = null;

        /**
         * Audio transcoding templates. Quantity: [1, 20]
         * @type {Array.<AudioTemplateInfo> || null}
         */
        this.AudioTemplates = null;

        /**
         * Video transcoding templates. Quantity: [1, 10]
         * @type {Array.<VideoTemplateInfo> || null}
         */
        this.VideoTemplates = null;

        /**
         * Audio/Video transcoding templates. Quantity: [1, 10]
         * @type {Array.<AVTemplate> || null}
         */
        this.AVTemplates = null;

        /**
         * Event settings
         * @type {PlanSettings || null}
         */
        this.PlanSettings = null;

        /**
         * The callback settings.
         * @type {EventNotifySetting || null}
         */
        this.EventNotifySettings = null;

        /**
         * Complement the last video frame settings.
         * @type {InputLossBehaviorInfo || null}
         */
        this.InputLossBehavior = null;

        /**
         * Pipeline configuration.
         * @type {PipelineInputSettingsInfo || null}
         */
        this.PipelineInputSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AttachedInputs) {
            this.AttachedInputs = new Array();
            for (let z in params.AttachedInputs) {
                let obj = new AttachedInput();
                obj.deserialize(params.AttachedInputs[z]);
                this.AttachedInputs.push(obj);
            }
        }

        if (params.OutputGroups) {
            this.OutputGroups = new Array();
            for (let z in params.OutputGroups) {
                let obj = new StreamLiveOutputGroupsInfo();
                obj.deserialize(params.OutputGroups[z]);
                this.OutputGroups.push(obj);
            }
        }

        if (params.AudioTemplates) {
            this.AudioTemplates = new Array();
            for (let z in params.AudioTemplates) {
                let obj = new AudioTemplateInfo();
                obj.deserialize(params.AudioTemplates[z]);
                this.AudioTemplates.push(obj);
            }
        }

        if (params.VideoTemplates) {
            this.VideoTemplates = new Array();
            for (let z in params.VideoTemplates) {
                let obj = new VideoTemplateInfo();
                obj.deserialize(params.VideoTemplates[z]);
                this.VideoTemplates.push(obj);
            }
        }

        if (params.AVTemplates) {
            this.AVTemplates = new Array();
            for (let z in params.AVTemplates) {
                let obj = new AVTemplate();
                obj.deserialize(params.AVTemplates[z]);
                this.AVTemplates.push(obj);
            }
        }

        if (params.PlanSettings) {
            let obj = new PlanSettings();
            obj.deserialize(params.PlanSettings)
            this.PlanSettings = obj;
        }

        if (params.EventNotifySettings) {
            let obj = new EventNotifySetting();
            obj.deserialize(params.EventNotifySettings)
            this.EventNotifySettings = obj;
        }

        if (params.InputLossBehavior) {
            let obj = new InputLossBehaviorInfo();
            obj.deserialize(params.InputLossBehavior)
            this.InputLossBehavior = obj;
        }

        if (params.PipelineInputSettings) {
            let obj = new PipelineInputSettingsInfo();
            obj.deserialize(params.PipelineInputSettings)
            this.PipelineInputSettings = obj;
        }

    }
}

/**
 * Watermark text settings
 * @class
 */
class DescribeTextSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Text
         * @type {string || null}
         */
        this.Text = null;

        /**
         * Origin
         * @type {string || null}
         */
        this.Location = null;

        /**
         * The watermark image’s horizontal distance from the origin as a percentage of the video width
         * @type {number || null}
         */
        this.XPos = null;

        /**
         * The watermark image’s vertical distance from the origin as a percentage of the video height
         * @type {number || null}
         */
        this.YPos = null;

        /**
         * Font size
         * @type {number || null}
         */
        this.FontSize = null;

        /**
         * Font color
         * @type {string || null}
         */
        this.FontColor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;

    }
}

/**
 * Watermark image settings
 * @class
 */
class DescribeImageSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin
         * @type {string || null}
         */
        this.Location = null;

        /**
         * The watermark image’s horizontal distance from the origin as a percentage of the video width
         * @type {number || null}
         */
        this.XPos = null;

        /**
         * The watermark image’s vertical distance from the origin as a percentage of the video height
         * @type {number || null}
         */
        this.YPos = null;

        /**
         * The watermark image’s width as a percentage of the video width
         * @type {number || null}
         */
        this.Width = null;

        /**
         * The watermark image’s height as a percentage of the video height
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
        this.Location = 'Location' in params ? params.Location : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * DeleteStreamLiveWatermark response structure.
 * @class
 */
class DeleteStreamLiveWatermarkResponse extends  AbstractModel {
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
 * CreateStreamLiveInput response structure.
 * @class
 */
class CreateStreamLiveInputResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input ID
         * @type {string || null}
         */
        this.Id = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLiveInputSecurityGroup response structure.
 * @class
 */
class DescribeStreamLiveInputSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input security group information
         * @type {InputSecurityGroupInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new InputSecurityGroupInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Channel information
 * @class
 */
class StreamLiveChannelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel status
         * @type {string || null}
         */
        this.State = null;

        /**
         * Information of attached inputs
         * @type {Array.<AttachedInput> || null}
         */
        this.AttachedInputs = null;

        /**
         * Information of output groups
         * @type {Array.<StreamLiveOutputGroupsInfo> || null}
         */
        this.OutputGroups = null;

        /**
         * Channel name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Audio transcoding templates
Note: this field may return `null`, indicating that no valid value was found.
         * @type {Array.<AudioTemplateInfo> || null}
         */
        this.AudioTemplates = null;

        /**
         * Video transcoding templates
Note: this field may return `null`, indicating that no valid value was found.
         * @type {Array.<VideoTemplateInfo> || null}
         */
        this.VideoTemplates = null;

        /**
         * Audio/Video transcoding templates
Note: this field may return `null`, indicating that no valid value was found.
         * @type {Array.<AVTemplate> || null}
         */
        this.AVTemplates = null;

        /**
         * Event settings
Note: This field may return `null`, indicating that no valid value was found.
         * @type {PlanSettings || null}
         */
        this.PlanSettings = null;

        /**
         * The callback settings.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {EventNotifySetting || null}
         */
        this.EventNotifySettings = null;

        /**
         * Supplement the last video frame configuration settings.
         * @type {InputLossBehaviorInfo || null}
         */
        this.InputLossBehavior = null;

        /**
         * Pipeline configuration.
         * @type {PipelineInputSettingsInfo || null}
         */
        this.PipelineInputSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.State = 'State' in params ? params.State : null;

        if (params.AttachedInputs) {
            this.AttachedInputs = new Array();
            for (let z in params.AttachedInputs) {
                let obj = new AttachedInput();
                obj.deserialize(params.AttachedInputs[z]);
                this.AttachedInputs.push(obj);
            }
        }

        if (params.OutputGroups) {
            this.OutputGroups = new Array();
            for (let z in params.OutputGroups) {
                let obj = new StreamLiveOutputGroupsInfo();
                obj.deserialize(params.OutputGroups[z]);
                this.OutputGroups.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AudioTemplates) {
            this.AudioTemplates = new Array();
            for (let z in params.AudioTemplates) {
                let obj = new AudioTemplateInfo();
                obj.deserialize(params.AudioTemplates[z]);
                this.AudioTemplates.push(obj);
            }
        }

        if (params.VideoTemplates) {
            this.VideoTemplates = new Array();
            for (let z in params.VideoTemplates) {
                let obj = new VideoTemplateInfo();
                obj.deserialize(params.VideoTemplates[z]);
                this.VideoTemplates.push(obj);
            }
        }

        if (params.AVTemplates) {
            this.AVTemplates = new Array();
            for (let z in params.AVTemplates) {
                let obj = new AVTemplate();
                obj.deserialize(params.AVTemplates[z]);
                this.AVTemplates.push(obj);
            }
        }

        if (params.PlanSettings) {
            let obj = new PlanSettings();
            obj.deserialize(params.PlanSettings)
            this.PlanSettings = obj;
        }

        if (params.EventNotifySettings) {
            let obj = new EventNotifySetting();
            obj.deserialize(params.EventNotifySettings)
            this.EventNotifySettings = obj;
        }

        if (params.InputLossBehavior) {
            let obj = new InputLossBehaviorInfo();
            obj.deserialize(params.InputLossBehavior)
            this.InputLossBehavior = obj;
        }

        if (params.PipelineInputSettings) {
            let obj = new PipelineInputSettingsInfo();
            obj.deserialize(params.PipelineInputSettings)
            this.PipelineInputSettings = obj;
        }

    }
}

/**
 * SCTE-35 configuration information.
 * @class
 */
class SegmentationDescriptorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * A 32-bit unique segmentation event identifier. Only one occurrence of a given segmentation_event_id value shall be active at any one time.
         * @type {number || null}
         */
        this.EventID = null;

        /**
         * Indicates that a previously sent segmentation event, identified by segmentation_event_id, has been cancelled.
         * @type {number || null}
         */
        this.EventCancelIndicator = null;

        /**
         * Distribution configuration.
         * @type {DeliveryRestrictionsInfo || null}
         */
        this.DeliveryRestrictions = null;

        /**
         * The duration of the segment in 90kHz ticks. indicat when the segment will be over and when the next segmentation message will occur.Shall be 0 for end messages.the time signal will continue until insert a cancellation message when not specify the duration.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Corresponds to SCTE-35 segmentation_upid_type parameter.
         * @type {number || null}
         */
        this.UPIDType = null;

        /**
         * Corresponds to SCTE-35 segmentation_upid. 
         * @type {string || null}
         */
        this.UPID = null;

        /**
         * Corresponds to SCTE-35 segmentation_type_id.
         * @type {number || null}
         */
        this.TypeID = null;

        /**
         * Corresponds to SCTE-35 segment_num。This field provides support for numbering segments within a given collection of segments.
         * @type {number || null}
         */
        this.Num = null;

        /**
         * Corresponds to SCTE-35 segment_expected.This field provides a count of the expected number of individual segments within a collection of segments.
         * @type {number || null}
         */
        this.Expected = null;

        /**
         * Corresponds to SCTE-35 sub_segment_num.This field provides identification for a specific sub-segment within a collection of sub-segments.
         * @type {number || null}
         */
        this.SubSegmentNum = null;

        /**
         * Corresponds to SCTE-35 sub_segments_expected.This field provides a count of the expected number of individual sub-segments within the collection of sub-segments.
         * @type {number || null}
         */
        this.SubSegmentsExpected = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventID = 'EventID' in params ? params.EventID : null;
        this.EventCancelIndicator = 'EventCancelIndicator' in params ? params.EventCancelIndicator : null;

        if (params.DeliveryRestrictions) {
            let obj = new DeliveryRestrictionsInfo();
            obj.deserialize(params.DeliveryRestrictions)
            this.DeliveryRestrictions = obj;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.UPIDType = 'UPIDType' in params ? params.UPIDType : null;
        this.UPID = 'UPID' in params ? params.UPID : null;
        this.TypeID = 'TypeID' in params ? params.TypeID : null;
        this.Num = 'Num' in params ? params.Num : null;
        this.Expected = 'Expected' in params ? params.Expected : null;
        this.SubSegmentNum = 'SubSegmentNum' in params ? params.SubSegmentNum : null;
        this.SubSegmentsExpected = 'SubSegmentsExpected' in params ? params.SubSegmentsExpected : null;

    }
}

/**
 * The input settings.
The format of an RTMP_PUSH address is ${InputAddress}/${AppName}/${StreamName}.
The format of an SRT_PUSH address is ${InputAddress}?streamid=${StreamName},h=${InputDomain}.
 * @class
 */
class InputSettingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application name, which is valid if `Type` is `RTMP_PUSH` and can contain 1-32 letters and digits
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name, which is valid if `Type` is `RTMP_PUSH` and can contain 1-32 letters and digits
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Source URL, which is valid if `Type` is `RTMP_PULL`, `HLS_PULL`, or `MP4_PULL` and can contain 1-512 characters
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.SourceUrl = null;

        /**
         * RTP/UDP input address, which does not need to be entered for the input parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InputAddress = null;

        /**
         * Source type for stream pulling and relaying. To pull content from private-read COS buckets under the current account, set this parameter to `TencentCOS`; otherwise, leave it empty.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * Delayed time (ms) for playback, which is valid if `Type` is `RTMP_PUSH`
Value range: 0 (default) or 10000-600000
The value must be a multiple of 1,000.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DelayTime = null;

        /**
         * The domain of an SRT_PUSH address. If this is a request parameter, you don’t need to specify it.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InputDomain = null;

        /**
         * The username, which is used for authentication.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * The password, which is used for authentication.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.SourceUrl = 'SourceUrl' in params ? params.SourceUrl : null;
        this.InputAddress = 'InputAddress' in params ? params.InputAddress : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;
        this.InputDomain = 'InputDomain' in params ? params.InputDomain : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DescribeStreamLiveInputSecurityGroups request structure.
 * @class
 */
class DescribeStreamLiveInputSecurityGroupsRequest extends  AbstractModel {
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
 * DeleteStreamLiveChannel request structure.
 * @class
 */
class DeleteStreamLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

module.exports = {
    DeleteStreamLiveChannelResponse: DeleteStreamLiveChannelResponse,
    VideoPipelineInputStatistics: VideoPipelineInputStatistics,
    CreateStreamLiveInputSecurityGroupResponse: CreateStreamLiveInputSecurityGroupResponse,
    InputLossBehaviorInfo: InputLossBehaviorInfo,
    StreamVideoInfo: StreamVideoInfo,
    CreateStreamLivePlanRequest: CreateStreamLivePlanRequest,
    DescribeStreamLiveWatermarksResponse: DescribeStreamLiveWatermarksResponse,
    DescribeStreamLiveInputRequest: DescribeStreamLiveInputRequest,
    QueryDispatchInputInfo: QueryDispatchInputInfo,
    CreateStreamLiveInputRequest: CreateStreamLiveInputRequest,
    AudioPidSelectionInfo: AudioPidSelectionInfo,
    AudioPipelineInputStatistics: AudioPipelineInputStatistics,
    CreateStreamLivePlanResponse: CreateStreamLivePlanResponse,
    InputStreamInfo: InputStreamInfo,
    PipelineInputSettingsInfo: PipelineInputSettingsInfo,
    DescribeStreamLiveChannelOutputStatisticsRequest: DescribeStreamLiveChannelOutputStatisticsRequest,
    ChannelPipelineAlerts: ChannelPipelineAlerts,
    InputInfo: InputInfo,
    AVTemplate: AVTemplate,
    DestinationInfo: DestinationInfo,
    DeleteStreamLiveInputRequest: DeleteStreamLiveInputRequest,
    ModifyStreamLiveInputSecurityGroupResponse: ModifyStreamLiveInputSecurityGroupResponse,
    ModifyStreamLiveInputRequest: ModifyStreamLiveInputRequest,
    DescribeStreamLiveChannelResponse: DescribeStreamLiveChannelResponse,
    DescribeStreamLiveRegionsRequest: DescribeStreamLiveRegionsRequest,
    DescribeStreamLiveChannelAlertsRequest: DescribeStreamLiveChannelAlertsRequest,
    AudioSelectorInfo: AudioSelectorInfo,
    LogInfo: LogInfo,
    DescribeStreamLiveWatermarkRequest: DescribeStreamLiveWatermarkRequest,
    DrmSettingsInfo: DrmSettingsInfo,
    PipelineOutputStatistics: PipelineOutputStatistics,
    DeleteStreamLivePlanResponse: DeleteStreamLivePlanResponse,
    CreateTextSettings: CreateTextSettings,
    DashRemuxSettingsInfo: DashRemuxSettingsInfo,
    CreateStreamLiveWatermarkRequest: CreateStreamLiveWatermarkRequest,
    StreamInfo: StreamInfo,
    SDMCSettingsInfo: SDMCSettingsInfo,
    DeleteStreamLiveInputSecurityGroupRequest: DeleteStreamLiveInputSecurityGroupRequest,
    AttachedInput: AttachedInput,
    QueryInputStreamStateResponse: QueryInputStreamStateResponse,
    DescribeStreamLiveWatermarksRequest: DescribeStreamLiveWatermarksRequest,
    TimedMetadataInfo: TimedMetadataInfo,
    DescribeTranscodeDetailInfo: DescribeTranscodeDetailInfo,
    TimeShiftSettingsInfo: TimeShiftSettingsInfo,
    DeliveryRestrictionsInfo: DeliveryRestrictionsInfo,
    VideoTemplateInfo: VideoTemplateInfo,
    TimingSettingsReq: TimingSettingsReq,
    ModifyStreamLiveWatermarkRequest: ModifyStreamLiveWatermarkRequest,
    DescribeStreamLiveTranscodeDetailRequest: DescribeStreamLiveTranscodeDetailRequest,
    SegmentationDescriptorRespInfo: SegmentationDescriptorRespInfo,
    DescribeStreamLiveChannelLogsResponse: DescribeStreamLiveChannelLogsResponse,
    DescribeStreamLiveChannelInputStatisticsRequest: DescribeStreamLiveChannelInputStatisticsRequest,
    PipelineLogInfo: PipelineLogInfo,
    DeleteStreamLivePlanRequest: DeleteStreamLivePlanRequest,
    DescribeStreamLiveChannelsRequest: DescribeStreamLiveChannelsRequest,
    FailOverSettings: FailOverSettings,
    ChannelInputStatistics: ChannelInputStatistics,
    HlsRemuxSettingsInfo: HlsRemuxSettingsInfo,
    EventSettingsResp: EventSettingsResp,
    TimedMetadataSettingInfo: TimedMetadataSettingInfo,
    AudioTemplateInfo: AudioTemplateInfo,
    StreamPackageSettingsInfo: StreamPackageSettingsInfo,
    DescribeStreamLiveChannelsResponse: DescribeStreamLiveChannelsResponse,
    QueryInputStreamStateRequest: QueryInputStreamStateRequest,
    PlanReq: PlanReq,
    DeleteStreamLiveWatermarkRequest: DeleteStreamLiveWatermarkRequest,
    DescribeStreamLiveRegionsResponse: DescribeStreamLiveRegionsResponse,
    TimedRecordSettings: TimedRecordSettings,
    StreamLiveRegionInfo: StreamLiveRegionInfo,
    DescribeStreamLiveChannelRequest: DescribeStreamLiveChannelRequest,
    DescribeStreamLivePlansRequest: DescribeStreamLivePlansRequest,
    CreateStreamLiveChannelRequest: CreateStreamLiveChannelRequest,
    DescribeStreamLiveTranscodeDetailResponse: DescribeStreamLiveTranscodeDetailResponse,
    CreateStreamLiveWatermarkResponse: CreateStreamLiveWatermarkResponse,
    DescribeStreamLiveInputsResponse: DescribeStreamLiveInputsResponse,
    ModifyStreamLiveInputResponse: ModifyStreamLiveInputResponse,
    DescribeStreamLiveChannelAlertsResponse: DescribeStreamLiveChannelAlertsResponse,
    PlanResp: PlanResp,
    DescribeStreamLivePlansResponse: DescribeStreamLivePlansResponse,
    DescribeStreamLiveChannelLogsRequest: DescribeStreamLiveChannelLogsRequest,
    CreateStreamLiveInputSecurityGroupRequest: CreateStreamLiveInputSecurityGroupRequest,
    DescribeStreamLiveChannelOutputStatisticsResponse: DescribeStreamLiveChannelOutputStatisticsResponse,
    DescribeWatermarkInfo: DescribeWatermarkInfo,
    EventSettingsDestinationReq: EventSettingsDestinationReq,
    EventSettingsReq: EventSettingsReq,
    DrmKey: DrmKey,
    EventSettingsDestinationResp: EventSettingsDestinationResp,
    OutputInfo: OutputInfo,
    DescribeStreamLiveInputSecurityGroupRequest: DescribeStreamLiveInputSecurityGroupRequest,
    CreateStreamLiveChannelResponse: CreateStreamLiveChannelResponse,
    DescribeStreamLiveChannelInputStatisticsResponse: DescribeStreamLiveChannelInputStatisticsResponse,
    StopStreamLiveChannelResponse: StopStreamLiveChannelResponse,
    PushEventSetting: PushEventSetting,
    CreateImageSettings: CreateImageSettings,
    StartStreamLiveChannelResponse: StartStreamLiveChannelResponse,
    StreamLiveOutputGroupsInfo: StreamLiveOutputGroupsInfo,
    ChannelOutputsStatistics: ChannelOutputsStatistics,
    PlanSettings: PlanSettings,
    DescribeStreamLiveInputSecurityGroupsResponse: DescribeStreamLiveInputSecurityGroupsResponse,
    EventNotifySetting: EventNotifySetting,
    DeleteStreamLiveInputResponse: DeleteStreamLiveInputResponse,
    StartStreamLiveChannelRequest: StartStreamLiveChannelRequest,
    TimingSettingsResp: TimingSettingsResp,
    DescribeStreamLiveWatermarkResponse: DescribeStreamLiveWatermarkResponse,
    StreamScte35Info: StreamScte35Info,
    StreamAudioInfo: StreamAudioInfo,
    OutputsStatistics: OutputsStatistics,
    InputSecurityGroupInfo: InputSecurityGroupInfo,
    RegionInfo: RegionInfo,
    ModifyStreamLiveInputSecurityGroupRequest: ModifyStreamLiveInputSecurityGroupRequest,
    ChannelAlertInfos: ChannelAlertInfos,
    PipelineInputStatistics: PipelineInputStatistics,
    ModifyStreamLiveChannelResponse: ModifyStreamLiveChannelResponse,
    DeleteStreamLiveInputSecurityGroupResponse: DeleteStreamLiveInputSecurityGroupResponse,
    StopStreamLiveChannelRequest: StopStreamLiveChannelRequest,
    DescribeStreamLiveInputResponse: DescribeStreamLiveInputResponse,
    InputStatistics: InputStatistics,
    LogMessageInfo: LogMessageInfo,
    DescribeStreamLiveInputsRequest: DescribeStreamLiveInputsRequest,
    Scte35SettingsInfo: Scte35SettingsInfo,
    ModifyStreamLiveWatermarkResponse: ModifyStreamLiveWatermarkResponse,
    ModifyStreamLiveChannelRequest: ModifyStreamLiveChannelRequest,
    DescribeTextSettings: DescribeTextSettings,
    DescribeImageSettings: DescribeImageSettings,
    DeleteStreamLiveWatermarkResponse: DeleteStreamLiveWatermarkResponse,
    CreateStreamLiveInputResponse: CreateStreamLiveInputResponse,
    DescribeStreamLiveInputSecurityGroupResponse: DescribeStreamLiveInputSecurityGroupResponse,
    StreamLiveChannelInfo: StreamLiveChannelInfo,
    SegmentationDescriptorInfo: SegmentationDescriptorInfo,
    InputSettingInfo: InputSettingInfo,
    DescribeStreamLiveInputSecurityGroupsRequest: DescribeStreamLiveInputSecurityGroupsRequest,
    DeleteStreamLiveChannelRequest: DeleteStreamLiveChannelRequest,

}
