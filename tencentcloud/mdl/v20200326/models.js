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
 * ModifyMediaLiveInput request structure.
 * @class
 */
class ModifyMediaLiveInputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media input ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Media input name, which can contain 1-32 letters, digits, and underscores and must be unique at the region level.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * List of IDs of bound security groups.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Input settings information.
One or two sets of settings need to be configured for RTMP_PUSH/RTMP_PULL/HLS_PULL/MP4_PULL.
This parameter can be left empty for RTP_PUSH and UDP_PUSH.
Note: if it is left empty or the array is empty, the original `InputSettings` value will be used.
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
 * DRM configuration information, which takes effect only for HLS and DASH.
 * @class
 */
class DrmSettingsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.State = null;

        /**
         * When `Scheme` is set to TencentDRM, this parameter should be set to the `ContentId` of DRM encryption, and if this parameter is left empty, a `ContentId` will be automatically created. For more information, please see [here](https://cloud.tencent.com/document/product/1000/40960).
When `Scheme` is set to CustomDRMKeys, this parameter is required and should be specified by the user.
         * @type {string || null}
         */
        this.ContentId = null;

        /**
         * Valid values: TencentDRM, CustomDRMKeys. If this parameter is left empty, TencentDRM will be used by default.
TencentDRM refers to Tencent digital rights management (DRM) encryption. For more information, please see [here](https://cloud.tencent.com/solution/drm).
CustomDRMKeys refers to an encryption key customized by the user.
         * @type {string || null}
         */
        this.Scheme = null;

        /**
         * The key customized by the content user, which is required when `Scheme` is set to CustomDRMKeys.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DrmKey> || null}
         */
        this.Keys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.State = 'State' in params ? params.State : null;
        this.ContentId = 'ContentId' in params ? params.ContentId : null;
        this.Scheme = 'Scheme' in params ? params.Scheme : null;

        if (params.Keys) {
            this.Keys = new Array();
            for (let z in params.Keys) {
                let obj = new DrmKey();
                obj.deserialize(params.Keys[z]);
                this.Keys.push(obj);
            }
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
 * Media input associated with media channel.
 * @class
 */
class AttachedInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media input ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Audio selector for media input. Quantity limit: [0,20]
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AudioSelectorInfo> || null}
         */
        this.AudioSelectors = null;

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

    }
}

/**
 * Channel output group information.
 * @class
 */
class OutputGroupsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Output protocol type.
Valid values: HLS, DASH, HLS_ARCHIVE, HLS_MEDIA_PACKAGE, DASH_MEDIA_PACKAGE.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 
         * @type {Array.<OutputInfo> || null}
         */
        this.Outputs = null;

        /**
         * 
         * @type {Array.<DestinationInfo> || null}
         */
        this.Destinations = null;

        /**
         * 
         * @type {HlsRemuxSettingsInfo || null}
         */
        this.HlsRemuxSettings = null;

        /**
         * 
         * @type {DashRemuxSettingsInfo || null}
         */
        this.DashRemuxSettings = null;

        /**
         * 
         * @type {DrmSettingsInfo || null}
         */
        this.DrmSettings = null;

        /**
         * Configuration information of media packaging, which is required when `Type` is set to MediaPackage.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaPackageSettingsInfo || null}
         */
        this.MediaPackageSettings = null;

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

        if (params.DashRemuxSettings) {
            let obj = new DashRemuxSettingsInfo();
            obj.deserialize(params.DashRemuxSettings)
            this.DashRemuxSettings = obj;
        }

        if (params.DrmSettings) {
            let obj = new DrmSettingsInfo();
            obj.deserialize(params.DrmSettings)
            this.DrmSettings = obj;
        }

        if (params.MediaPackageSettings) {
            let obj = new MediaPackageSettingsInfo();
            obj.deserialize(params.MediaPackageSettings)
            this.MediaPackageSettings = obj;
        }

    }
}

/**
 * StopMediaLiveChannel request structure.
 * @class
 */
class StopMediaLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
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
 * Configuration information related to associating with the media packaging service.
 * @class
 */
class MediaPackageSettingsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media packaging ID.
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
 * StartMediaLiveChannel request structure.
 * @class
 */
class StartMediaLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
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

    }
}

/**
 * DeleteMediaLiveInputSecurityGroup response structure.
 * @class
 */
class DeleteMediaLiveInputSecurityGroupResponse extends  AbstractModel {
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
 * DeleteMediaLiveInput request structure.
 * @class
 */
class DeleteMediaLiveInputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media input ID.
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
 * ModifyMediaLiveInputSecurityGroup request structure.
 * @class
 */
class ModifyMediaLiveInputSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input security group ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Input security group name, which can contain 1-32 letters, digits, and underscores and must be unique at the region level.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * List of allowlist entries. Up to 10 entries are allowed.
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
 * DeleteMediaLiveInput response structure.
 * @class
 */
class DeleteMediaLiveInputResponse extends  AbstractModel {
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
 * ModifyMediaLiveInput response structure.
 * @class
 */
class ModifyMediaLiveInputResponse extends  AbstractModel {
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
 * CreateMediaLiveInput request structure.
 * @class
 */
class CreateMediaLiveInputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media input name, which can contain 1-32 letters, digits, and underscores and must be unique at the region level.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Media input type.
Valid values: RTMP_PUSH/RTP_PUSH/UDP_PUSH/RTMP_PULL/HLS_PULL/MP4_PULL.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of the input security group to be bound.
Only one security group can be associated.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Input settings information, one or two sets of which need to be configured for RTMP_PUSH/RTMP_PULL/HLS_PULL/MP4_PULL.
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
 * DescribeMediaLiveInputs request structure.
 * @class
 */
class DescribeMediaLiveInputsRequest extends  AbstractModel {
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
 * DescribeMediaLiveInput request structure.
 * @class
 */
class DescribeMediaLiveInputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media input ID.
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
 * DescribeMediaLiveChannel request structure.
 * @class
 */
class DescribeMediaLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
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
 * DescribeMediaLiveChannelLogs response structure.
 * @class
 */
class DescribeMediaLiveChannelLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pipeline push information.
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
 * StartMediaLiveChannel response structure.
 * @class
 */
class StartMediaLiveChannelResponse extends  AbstractModel {
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
 * DescribeMediaLiveInputSecurityGroups response structure.
 * @class
 */
class DescribeMediaLiveInputSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input security group information list.
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
 * StopMediaLiveChannel response structure.
 * @class
 */
class StopMediaLiveChannelResponse extends  AbstractModel {
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
 * CreateMediaLiveChannel request structure.
 * @class
 */
class CreateMediaLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel name, which can contain 1-32 letters, digits, and underscores and must be unique at the region level.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Associated media input. Quantity limit: [1,1].
         * @type {Array.<AttachedInputInfo> || null}
         */
        this.AttachedInputs = null;

        /**
         * Configuration information of channel output groups. Quantity limit: [1,10].
         * @type {Array.<OutputGroupsInfo> || null}
         */
        this.OutputGroups = null;

        /**
         * Audio transcoding template array. Quantity limit: [1,20].
         * @type {Array.<AudioTemplateInfo> || null}
         */
        this.AudioTemplates = null;

        /**
         * Video transcoding template array. Quantity limit: [1,10].
         * @type {Array.<VideoTemplateInfo> || null}
         */
        this.VideoTemplates = null;

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
                let obj = new AttachedInputInfo();
                obj.deserialize(params.AttachedInputs[z]);
                this.AttachedInputs.push(obj);
            }
        }

        if (params.OutputGroups) {
            this.OutputGroups = new Array();
            for (let z in params.OutputGroups) {
                let obj = new OutputGroupsInfo();
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

    }
}

/**
 * DescribeMediaLiveInputSecurityGroups request structure.
 * @class
 */
class DescribeMediaLiveInputSecurityGroupsRequest extends  AbstractModel {
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
 * DescribeMediaLiveChannel response structure.
 * @class
 */
class DescribeMediaLiveChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel information.
         * @type {ChannelInfo || null}
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
            let obj = new ChannelInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteMediaLiveChannel response structure.
 * @class
 */
class DeleteMediaLiveChannelResponse extends  AbstractModel {
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
 * Channel information.
 * @class
 */
class ChannelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel status.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Information of associated input.
         * @type {Array.<AttachedInputInfo> || null}
         */
        this.AttachedInputs = null;

        /**
         * Information of output group.
         * @type {Array.<OutputGroupsInfo> || null}
         */
        this.OutputGroups = null;

        /**
         * Channel name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Audio transcoding template array.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AudioTemplateInfo> || null}
         */
        this.AudioTemplates = null;

        /**
         * Video transcoding template array.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<VideoTemplateInfo> || null}
         */
        this.VideoTemplates = null;

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
                let obj = new AttachedInputInfo();
                obj.deserialize(params.AttachedInputs[z]);
                this.AttachedInputs.push(obj);
            }
        }

        if (params.OutputGroups) {
            this.OutputGroups = new Array();
            for (let z in params.OutputGroups) {
                let obj = new OutputGroupsInfo();
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
 * DescribeMediaLiveInputSecurityGroup response structure.
 * @class
 */
class DescribeMediaLiveInputSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input security group information.
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
 * DeleteMediaLiveChannel request structure.
 * @class
 */
class DeleteMediaLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
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
 * CreateMediaLiveInput response structure.
 * @class
 */
class CreateMediaLiveInputResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media input ID.
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
 * CreateMediaLiveChannel response structure.
 * @class
 */
class CreateMediaLiveChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
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
 * DescribeMediaLiveInput response structure.
 * @class
 */
class DescribeMediaLiveInputResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * MediaLive input information.
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
 * DescribeMediaLiveChannelInputStatistics request structure.
 * @class
 */
class DescribeMediaLiveChannelInputStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Statistics start time, which is one hour ago by default. Maximum value: the last 7 days.
UTC time, such as `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time, which is one hour after `StartTime` by default.
UTC time, such as `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Data interval. Valid values: 5s, 1min, 5min, 15min. Default value: 1min.
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
 * DescribeMediaLiveChannelAlerts request structure.
 * @class
 */
class DescribeMediaLiveChannelAlertsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
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
 * CreateMediaLiveInputSecurityGroup response structure.
 * @class
 */
class CreateMediaLiveInputSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group ID.
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
 * DescribeMediaLiveInputs response structure.
 * @class
 */
class DescribeMediaLiveInputsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * MediaLive input information list.
Note: this field may return null, indicating that no valid values can be obtained.
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
 * DescribeMediaLiveChannelOutputStatistics response structure.
 * @class
 */
class DescribeMediaLiveChannelOutputStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel output information.
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
 * DescribeMediaLiveInputSecurityGroup request structure.
 * @class
 */
class DescribeMediaLiveInputSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input security group ID.
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
 * DescribeMediaLiveChannelAlerts response structure.
 * @class
 */
class DescribeMediaLiveChannelAlertsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm information of two pipelines under this channel.
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
 * DescribeMediaLiveChannels response structure.
 * @class
 */
class DescribeMediaLiveChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel list information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ChannelInfo> || null}
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
                let obj = new ChannelInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifyMediaLiveChannel response structure.
 * @class
 */
class ModifyMediaLiveChannelResponse extends  AbstractModel {
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
 * DescribeMediaLiveChannelLogs request structure.
 * @class
 */
class DescribeMediaLiveChannelLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Log start time, which is one hour ago by default. Maximum value: the last 7 days.
UTC time, such as `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Log end time, which is one hour after `StartTime` by default.
UTC time, such as `2020-01-01T12:00:00Z`.
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
 * CreateMediaLiveInputSecurityGroup request structure.
 * @class
 */
class CreateMediaLiveInputSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input security group name, which can contain letters, digits, and underscores and must be unique at the region level.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * List of allowlist entries. Quantity limit: [1,10].
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
 * DeleteMediaLiveInputSecurityGroup request structure.
 * @class
 */
class DeleteMediaLiveInputSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input security group ID.
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
 * DescribeMediaLiveChannelOutputStatistics request structure.
 * @class
 */
class DescribeMediaLiveChannelOutputStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Statistics start time, which is one hour ago by default. Maximum value: the last 7 days.
UTC time, such as `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time, which is one hour after `StartTime` by default.
UTC time, such as `2020-01-01T12:00:00Z`.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Data interval. Valid values: 5s, 1min, 5min, 15min. Default value: 1min.
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
 * DescribeMediaLiveChannelInputStatistics response structure.
 * @class
 */
class DescribeMediaLiveChannelInputStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel input statistics array.
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
 * ModifyMediaLiveInputSecurityGroup response structure.
 * @class
 */
class ModifyMediaLiveInputSecurityGroupResponse extends  AbstractModel {
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
 * ModifyMediaLiveChannel request structure.
 * @class
 */
class ModifyMediaLiveChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel name, which can contain 1-32 letters, digits, and underscores and must be unique at the region level.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Associated media input. Quantity limit: [1,1].
         * @type {Array.<AttachedInputInfo> || null}
         */
        this.AttachedInputs = null;

        /**
         * Configuration information of channel output groups. Quantity limit: [1,10].
         * @type {Array.<OutputGroupsInfo> || null}
         */
        this.OutputGroups = null;

        /**
         * Audio transcoding template array. Quantity limit: [1,20].
         * @type {Array.<AudioTemplateInfo> || null}
         */
        this.AudioTemplates = null;

        /**
         * Video transcoding template array. Quantity limit: [1,10].
         * @type {Array.<VideoTemplateInfo> || null}
         */
        this.VideoTemplates = null;

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
                let obj = new AttachedInputInfo();
                obj.deserialize(params.AttachedInputs[z]);
                this.AttachedInputs.push(obj);
            }
        }

        if (params.OutputGroups) {
            this.OutputGroups = new Array();
            for (let z in params.OutputGroups) {
                let obj = new OutputGroupsInfo();
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

    }
}

/**
 * DescribeMediaLiveChannels request structure.
 * @class
 */
class DescribeMediaLiveChannelsRequest extends  AbstractModel {
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

    }
}

module.exports = {
    InputStatistics: InputStatistics,
    ModifyMediaLiveInputRequest: ModifyMediaLiveInputRequest,
    DrmSettingsInfo: DrmSettingsInfo,
    PipelineOutputStatistics: PipelineOutputStatistics,
    AttachedInputInfo: AttachedInputInfo,
    OutputGroupsInfo: OutputGroupsInfo,
    StopMediaLiveChannelRequest: StopMediaLiveChannelRequest,
    DashRemuxSettingsInfo: DashRemuxSettingsInfo,
    MediaPackageSettingsInfo: MediaPackageSettingsInfo,
    StartMediaLiveChannelRequest: StartMediaLiveChannelRequest,
    VideoTemplateInfo: VideoTemplateInfo,
    DeleteMediaLiveInputSecurityGroupResponse: DeleteMediaLiveInputSecurityGroupResponse,
    DeleteMediaLiveInputRequest: DeleteMediaLiveInputRequest,
    ModifyMediaLiveInputSecurityGroupRequest: ModifyMediaLiveInputSecurityGroupRequest,
    StreamVideoInfo: StreamVideoInfo,
    OutputsStatistics: OutputsStatistics,
    DeleteMediaLiveInputResponse: DeleteMediaLiveInputResponse,
    ModifyMediaLiveInputResponse: ModifyMediaLiveInputResponse,
    VideoPipelineInputStatistics: VideoPipelineInputStatistics,
    CreateMediaLiveInputRequest: CreateMediaLiveInputRequest,
    StreamScte35Info: StreamScte35Info,
    Scte35SettingsInfo: Scte35SettingsInfo,
    DescribeMediaLiveInputsRequest: DescribeMediaLiveInputsRequest,
    PipelineInputStatistics: PipelineInputStatistics,
    DescribeMediaLiveInputRequest: DescribeMediaLiveInputRequest,
    DescribeMediaLiveChannelRequest: DescribeMediaLiveChannelRequest,
    AudioPidSelectionInfo: AudioPidSelectionInfo,
    DescribeMediaLiveChannelLogsResponse: DescribeMediaLiveChannelLogsResponse,
    StreamAudioInfo: StreamAudioInfo,
    StartMediaLiveChannelResponse: StartMediaLiveChannelResponse,
    DrmKey: DrmKey,
    AudioPipelineInputStatistics: AudioPipelineInputStatistics,
    DescribeMediaLiveInputSecurityGroupsResponse: DescribeMediaLiveInputSecurityGroupsResponse,
    InputSecurityGroupInfo: InputSecurityGroupInfo,
    StopMediaLiveChannelResponse: StopMediaLiveChannelResponse,
    CreateMediaLiveChannelRequest: CreateMediaLiveChannelRequest,
    DescribeMediaLiveInputSecurityGroupsRequest: DescribeMediaLiveInputSecurityGroupsRequest,
    DescribeMediaLiveChannelResponse: DescribeMediaLiveChannelResponse,
    ChannelAlertInfos: ChannelAlertInfos,
    DeleteMediaLiveChannelResponse: DeleteMediaLiveChannelResponse,
    ChannelInfo: ChannelInfo,
    ChannelPipelineAlerts: ChannelPipelineAlerts,
    InputInfo: InputInfo,
    DescribeMediaLiveInputSecurityGroupResponse: DescribeMediaLiveInputSecurityGroupResponse,
    DeleteMediaLiveChannelRequest: DeleteMediaLiveChannelRequest,
    CreateMediaLiveInputResponse: CreateMediaLiveInputResponse,
    DestinationInfo: DestinationInfo,
    CreateMediaLiveChannelResponse: CreateMediaLiveChannelResponse,
    DescribeMediaLiveInputResponse: DescribeMediaLiveInputResponse,
    DescribeMediaLiveChannelInputStatisticsRequest: DescribeMediaLiveChannelInputStatisticsRequest,
    InputSettingInfo: InputSettingInfo,
    LogMessageInfo: LogMessageInfo,
    DescribeMediaLiveChannelAlertsRequest: DescribeMediaLiveChannelAlertsRequest,
    CreateMediaLiveInputSecurityGroupResponse: CreateMediaLiveInputSecurityGroupResponse,
    DescribeMediaLiveInputsResponse: DescribeMediaLiveInputsResponse,
    DescribeMediaLiveChannelOutputStatisticsResponse: DescribeMediaLiveChannelOutputStatisticsResponse,
    DescribeMediaLiveInputSecurityGroupRequest: DescribeMediaLiveInputSecurityGroupRequest,
    DescribeMediaLiveChannelAlertsResponse: DescribeMediaLiveChannelAlertsResponse,
    DescribeMediaLiveChannelsResponse: DescribeMediaLiveChannelsResponse,
    ChannelInputStatistics: ChannelInputStatistics,
    HlsRemuxSettingsInfo: HlsRemuxSettingsInfo,
    PipelineLogInfo: PipelineLogInfo,
    ModifyMediaLiveChannelResponse: ModifyMediaLiveChannelResponse,
    DescribeMediaLiveChannelLogsRequest: DescribeMediaLiveChannelLogsRequest,
    CreateMediaLiveInputSecurityGroupRequest: CreateMediaLiveInputSecurityGroupRequest,
    DeleteMediaLiveInputSecurityGroupRequest: DeleteMediaLiveInputSecurityGroupRequest,
    StreamInfo: StreamInfo,
    AudioTemplateInfo: AudioTemplateInfo,
    DescribeMediaLiveChannelOutputStatisticsRequest: DescribeMediaLiveChannelOutputStatisticsRequest,
    DescribeMediaLiveChannelInputStatisticsResponse: DescribeMediaLiveChannelInputStatisticsResponse,
    AudioSelectorInfo: AudioSelectorInfo,
    LogInfo: LogInfo,
    ModifyMediaLiveInputSecurityGroupResponse: ModifyMediaLiveInputSecurityGroupResponse,
    ChannelOutputsStatistics: ChannelOutputsStatistics,
    ModifyMediaLiveChannelRequest: ModifyMediaLiveChannelRequest,
    DescribeMediaLiveChannelsRequest: DescribeMediaLiveChannelsRequest,
    OutputInfo: OutputInfo,

}
