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
         * Allowable time-shift period (s). Value range: [600, 1209600]. Default value: 300
Note: This field may return `null`, indicating that no valid value was found.
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
         * Audio/Video packaging scheme. Valid values: `SEPARATE`, `MERGE`
         * @type {string || null}
         */
        this.Scheme = null;

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
         * Only `INPUT_SWITCH` is supported currently.
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
         * Valid values: `INPUT_SWITCH`, `TIMED_RECORD`. If it is not specified, `INPUT_SWITCH` will be used.
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
         * HLS protocol configuration information, which takes effect only for HLS/HLS_ARCHIVE outputs
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

    }
}

/**
 * Input settings information.
 * @class
 */
class InputSettingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application name, which is used for RTMP_PUSH and can contain 1-32 letters and digits.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name, which is used for RTMP_PUSH and can contain 1-32 letters and digits.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Origin-pull URL, which is used for RTMP_PULL/HLS_PULL/MP4_PULL. Length limit: [1,512].
Note: this field may return null, indicating that no valid values can be obtained.
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
    StreamVideoInfo: StreamVideoInfo,
    CreateStreamLivePlanRequest: CreateStreamLivePlanRequest,
    DescribeStreamLiveInputRequest: DescribeStreamLiveInputRequest,
    CreateStreamLiveInputRequest: CreateStreamLiveInputRequest,
    AudioPidSelectionInfo: AudioPidSelectionInfo,
    AudioPipelineInputStatistics: AudioPipelineInputStatistics,
    CreateStreamLivePlanResponse: CreateStreamLivePlanResponse,
    DescribeStreamLiveChannelOutputStatisticsRequest: DescribeStreamLiveChannelOutputStatisticsRequest,
    ChannelPipelineAlerts: ChannelPipelineAlerts,
    InputInfo: InputInfo,
    AVTemplate: AVTemplate,
    ModifyStreamLiveChannelResponse: ModifyStreamLiveChannelResponse,
    DeleteStreamLiveInputRequest: DeleteStreamLiveInputRequest,
    ModifyStreamLiveInputSecurityGroupResponse: ModifyStreamLiveInputSecurityGroupResponse,
    ModifyStreamLiveInputRequest: ModifyStreamLiveInputRequest,
    DescribeStreamLiveChannelResponse: DescribeStreamLiveChannelResponse,
    DescribeStreamLiveRegionsRequest: DescribeStreamLiveRegionsRequest,
    DescribeStreamLiveChannelAlertsRequest: DescribeStreamLiveChannelAlertsRequest,
    AudioSelectorInfo: AudioSelectorInfo,
    LogInfo: LogInfo,
    DrmSettingsInfo: DrmSettingsInfo,
    PipelineOutputStatistics: PipelineOutputStatistics,
    DeleteStreamLivePlanResponse: DeleteStreamLivePlanResponse,
    DashRemuxSettingsInfo: DashRemuxSettingsInfo,
    StreamInfo: StreamInfo,
    SDMCSettingsInfo: SDMCSettingsInfo,
    DeleteStreamLiveInputSecurityGroupRequest: DeleteStreamLiveInputSecurityGroupRequest,
    AttachedInput: AttachedInput,
    PipelineInputStatistics: PipelineInputStatistics,
    TimeShiftSettingsInfo: TimeShiftSettingsInfo,
    VideoTemplateInfo: VideoTemplateInfo,
    TimingSettingsReq: TimingSettingsReq,
    DescribeStreamLiveChannelLogsResponse: DescribeStreamLiveChannelLogsResponse,
    DescribeStreamLiveChannelInputStatisticsRequest: DescribeStreamLiveChannelInputStatisticsRequest,
    PipelineLogInfo: PipelineLogInfo,
    DeleteStreamLivePlanRequest: DeleteStreamLivePlanRequest,
    DescribeStreamLiveChannelsRequest: DescribeStreamLiveChannelsRequest,
    FailOverSettings: FailOverSettings,
    ChannelInputStatistics: ChannelInputStatistics,
    HlsRemuxSettingsInfo: HlsRemuxSettingsInfo,
    EventSettingsResp: EventSettingsResp,
    AudioTemplateInfo: AudioTemplateInfo,
    StreamPackageSettingsInfo: StreamPackageSettingsInfo,
    DescribeStreamLiveChannelsResponse: DescribeStreamLiveChannelsResponse,
    PlanReq: PlanReq,
    DescribeStreamLiveRegionsResponse: DescribeStreamLiveRegionsResponse,
    TimedRecordSettings: TimedRecordSettings,
    StreamLiveRegionInfo: StreamLiveRegionInfo,
    DescribeStreamLiveChannelRequest: DescribeStreamLiveChannelRequest,
    DescribeStreamLivePlansRequest: DescribeStreamLivePlansRequest,
    CreateStreamLiveChannelRequest: CreateStreamLiveChannelRequest,
    DescribeStreamLiveInputsResponse: DescribeStreamLiveInputsResponse,
    ModifyStreamLiveInputResponse: ModifyStreamLiveInputResponse,
    DescribeStreamLiveChannelAlertsResponse: DescribeStreamLiveChannelAlertsResponse,
    PlanResp: PlanResp,
    DescribeStreamLivePlansResponse: DescribeStreamLivePlansResponse,
    DescribeStreamLiveChannelLogsRequest: DescribeStreamLiveChannelLogsRequest,
    CreateStreamLiveInputSecurityGroupRequest: CreateStreamLiveInputSecurityGroupRequest,
    DescribeStreamLiveChannelOutputStatisticsResponse: DescribeStreamLiveChannelOutputStatisticsResponse,
    EventSettingsDestinationReq: EventSettingsDestinationReq,
    EventSettingsReq: EventSettingsReq,
    DrmKey: DrmKey,
    EventSettingsDestinationResp: EventSettingsDestinationResp,
    OutputInfo: OutputInfo,
    DescribeStreamLiveInputSecurityGroupRequest: DescribeStreamLiveInputSecurityGroupRequest,
    CreateStreamLiveChannelResponse: CreateStreamLiveChannelResponse,
    DescribeStreamLiveChannelInputStatisticsResponse: DescribeStreamLiveChannelInputStatisticsResponse,
    StopStreamLiveChannelResponse: StopStreamLiveChannelResponse,
    StartStreamLiveChannelResponse: StartStreamLiveChannelResponse,
    StreamLiveOutputGroupsInfo: StreamLiveOutputGroupsInfo,
    ChannelOutputsStatistics: ChannelOutputsStatistics,
    PlanSettings: PlanSettings,
    DescribeStreamLiveInputSecurityGroupsResponse: DescribeStreamLiveInputSecurityGroupsResponse,
    DeleteStreamLiveInputResponse: DeleteStreamLiveInputResponse,
    StartStreamLiveChannelRequest: StartStreamLiveChannelRequest,
    StreamScte35Info: StreamScte35Info,
    StreamAudioInfo: StreamAudioInfo,
    OutputsStatistics: OutputsStatistics,
    InputSecurityGroupInfo: InputSecurityGroupInfo,
    RegionInfo: RegionInfo,
    ModifyStreamLiveInputSecurityGroupRequest: ModifyStreamLiveInputSecurityGroupRequest,
    ChannelAlertInfos: ChannelAlertInfos,
    CreateStreamLiveInputResponse: CreateStreamLiveInputResponse,
    DestinationInfo: DestinationInfo,
    DeleteStreamLiveInputSecurityGroupResponse: DeleteStreamLiveInputSecurityGroupResponse,
    DescribeStreamLiveInputResponse: DescribeStreamLiveInputResponse,
    InputStatistics: InputStatistics,
    LogMessageInfo: LogMessageInfo,
    DescribeStreamLiveInputsRequest: DescribeStreamLiveInputsRequest,
    Scte35SettingsInfo: Scte35SettingsInfo,
    TimingSettingsResp: TimingSettingsResp,
    ModifyStreamLiveChannelRequest: ModifyStreamLiveChannelRequest,
    StopStreamLiveChannelRequest: StopStreamLiveChannelRequest,
    DescribeStreamLiveInputSecurityGroupResponse: DescribeStreamLiveInputSecurityGroupResponse,
    StreamLiveChannelInfo: StreamLiveChannelInfo,
    InputSettingInfo: InputSettingInfo,
    DescribeStreamLiveInputSecurityGroupsRequest: DescribeStreamLiveInputSecurityGroupsRequest,
    DeleteStreamLiveChannelRequest: DeleteStreamLiveChannelRequest,

}
