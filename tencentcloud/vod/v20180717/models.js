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
 * Canvas information. When a video is composed, if the source material (video or image) cannot fill the output video window, the background will be drawn with the set canvas.
 * @class
 */
class Canvas extends  AbstractModel {
    constructor(){
        super();

        /**
         * Background color. Valid values:
<li>Black: black background</li>
<li>White: white background</li>
Default value: Black.
         * @type {string || null}
         */
        this.Color = null;

        /**
         * Canvas width, which is the width of the output video. Value range: 0–4096 px.
Default value: 0, which means that the value is the same as the video width of the first video segment in the first video track.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Canvas height, which is the height (or long side) of the output video. Value range: 0–4096 px.
Default value: 0, which means that the value is the same as the video height of the first video segment in the first video track.
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
        this.Color = 'Color' in params ? params.Color : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * ModifySampleSnapshotTemplate response structure.
 * @class
 */
class ModifySampleSnapshotTemplateResponse extends  AbstractModel {
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
 * ModifyWatermarkTemplate request structure.
 * @class
 */
class ModifyWatermarkTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of watermarking template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Watermarking template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Origin position. Valid values:
<li>TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text;</li>
<li>TopRight: the origin of coordinates is in the top-right corner of the video, and the origin of the watermark is in the top-right corner of the image or text;</li>
<li>BottomLeft: the origin of coordinates is in the bottom-left corner of the video, and the origin of the watermark is in the bottom-left corner of the image or text;</li>
<li>BottomRight: the origin of coordinates is in the bottom-right corner of the video, and the origin of the watermark is in the bottom-right corner of the image or text.</li>
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:
<li>If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width;</li>
<li>If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.</li>
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:
<li>If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height;</li>
<li>If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.</li>
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * Image watermarking template. This field is valid only for image watermarking templates.
         * @type {ImageWatermarkInputForUpdate || null}
         */
        this.ImageTemplate = null;

        /**
         * Text watermarking template. This field is valid only for text watermarking templates.
         * @type {TextWatermarkTemplateInputForUpdate || null}
         */
        this.TextTemplate = null;

        /**
         * SVG watermarking template. This field is only valid for SVG watermarking templates.
         * @type {SvgWatermarkInputForUpdate || null}
         */
        this.SvgTemplate = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new ImageWatermarkInputForUpdate();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

        if (params.TextTemplate) {
            let obj = new TextWatermarkTemplateInputForUpdate();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }

        if (params.SvgTemplate) {
            let obj = new SvgWatermarkInputForUpdate();
            obj.deserialize(params.SvgTemplate)
            this.SvgTemplate = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Full speech recognition segment.
 * @class
 */
class AiRecognitionTaskAsrFullTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Confidence of recognized segment. Value range: 0–100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Start time offset of recognized segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of recognition segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Recognized text.
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * WeChatMiniProgramPublish request structure.
 * @class
 */
class WeChatMiniProgramPublishRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media file ID.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * ID of the transcoding template corresponding to the published video. 0 represents the source video.
         * @type {number || null}
         */
        this.SourceDefinition = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.SourceDefinition = 'SourceDefinition' in params ? params.SourceDefinition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Input type of intelligent categorization task
 * @class
 */
class AiAnalysisTaskClassificationInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intelligent video categorization template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Input parameter of SVG watermarking template
 * @class
 */
class SvgWatermarkInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark width, which supports six formats of px, %, W%, H%, S%, and L%:
<li>If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px; if `0px` is entered
 and `Height` is not `0px`, the watermark width will be proportionally scaled based on the source SVG image; if `0px` is entered for both `Width` and `Height`, the watermark width will be the width of the source SVG image;</li>
<li>If the string ends in `W%`, the `Width` of the watermark will be the specified percentage of the video width; for example, `10W%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in `H%`, the `Width` of the watermark will be the specified percentage of the video height; for example, `10H%` means that `Width` is 10% of the video height;</li>
<li>If the string ends in `S%`, the `Width` of the watermark will be the specified percentage of the short side of the video; for example, `10S%` means that `Width` is 10% of the short side of the video;</li>
<li>If the string ends in `L%`, the `Width` of the watermark will be the specified percentage of the long side of the video; for example, `10L%` means that `Width` is 10% of the long side of the video;</li>
<li>If the string ends in %, the meaning is the same as `W%`.</li>
Default value: 10W%.
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Watermark height, which supports six formats of px, %, W%, H%, S%, and L%:
<li>If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px; if `0px` is entered
 and `Width` is not `0px`, the watermark height will be proportionally scaled based on the source SVG image; if `0px` is entered for both `Width` and `Height`, the watermark height will be the height of the source SVG image;</li>
<li>If the string ends in `W%`, the `Height` of the watermark will be the specified percentage of the video width; for example, `10W%` means that `Height` is 10% of the video width;</li>
<li>If the string ends in `H%`, the `Height` of the watermark will be the specified percentage of the video height; for example, `10H%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in `S%`, the `Height` of the watermark will be the specified percentage of the short side of the video; for example, `10S%` means that `Height` is 10% of the short side of the video;</li>
<li>If the string ends in `L%`, the `Height` of the watermark will be the specified percentage of the long side of the video; for example, `10L%` means that `Height` is 10% of the long side of the video;</li>
<li>If the string ends in %, the meaning is the same as `H%`.</li>
Default value: 0 px.
         * @type {string || null}
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
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * CreateTranscodeTemplate request structure.
 * @class
 */
class CreateTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Container. Valid values: mp4; flv; hls; mp3; flac; ogg; m4a. Among them, mp3, flac, ogg, and m4a are for audio files.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Transcoding template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Whether to remove video data. Valid values:
<li>0: retain</li>
<li>1: remove</li>
Default value: 0.
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * Whether to remove audio data. Valid values:
<li>0: retain</li>
<li>1: remove</li>
Default value: 0.
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * Video stream configuration parameter. This field is required when `RemoveVideo` is 0.
         * @type {VideoTemplateInfo || null}
         */
        this.VideoTemplate = null;

        /**
         * Audio stream configuration parameter. This field is required when `RemoveAudio` is 0.
         * @type {AudioTemplateInfo || null}
         */
        this.AudioTemplate = null;

        /**
         * TESHD transcoding parameter.
         * @type {TEHDConfig || null}
         */
        this.TEHDConfig = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Container = 'Container' in params ? params.Container : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfig();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Transition operation
 * @class
 */
class TransitionOpertion extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transition type. Valid values:
<ul>
<li>Video image transition operation, which is used for transition with video image between two video segments:
<ul>
<li>ImageFadeInFadeOut: video image fade-in/fade-out.</li>
<li>BowTieHorizontal: horizontal bow.</li>
<li>BowTieVertical: vertical bow.</li>
<li>ButterflyWaveScrawler: waggling.</li>
<li>Cannabisleaf: maple leaf.</li>
<li> Circle: curved circling.</li>
<li>CircleCrop: circle gathering.</li>
<li>Circleopen: elliptic gathering.</li>
<li>Crosswarp: horizontal warping.</li>
<li>Cube: cube.</li>
<li>DoomScreenTransition: curtain.</li>
<li>Doorway: doorway.</li>
<li>Dreamy: wave.</li>
<li>DreamyZoom: horizontal gathering.</li>
<li>FilmBurn: evening glow.</li>
<li>GlitchMemories: joggling.</li>
<li>Heart: heart.</li>
<li>InvertedPageCurl: page turning.</li>
<li>Luma: corroding.</li>
<li>Mosaic: grid.</li>
<li>Pinwheel: pinwheel.</li>
<li>PolarFunction: elliptic diffusing.</li>
<li>PolkaDotsCurtain: curved diffusing.</li>
<li>Radial: radar scan.</li>
<li>RotateScaleFade: vertical rotating.</li>
<li>Squeeze: vertical gathering.</li>
<li>Swap: zooming in.</li>
<li>Swirl: swirling.</li>
<li>UndulatingBurnOutSwirl: water spreading.</li>
<li>Windowblinds: blinds.</li>
<li>WipeDown: collapsing down.</li>
<li>WipeLeft: collapsing to the left.</li>
<li>WipeRight: collapsing to the right.</li>
<li>WipeUp: collapsing up.</li>
<li>ZoomInCircles: ripples.</li>
</ul>
</li>
<li>Audio transition operation, which is used for transition between two audio segments:
<ul>
<li>AudioFadeInFadeOut: audio fade-in/fade-out.</li>
</ul>
</li>
</ul>
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Audio segment information of audio track.
 * @class
 */
class AudioTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source of media file for audio material, which can be an ID of a VOD file or URL of another file.
         * @type {string || null}
         */
        this.SourceMedia = null;

        /**
         * Start time of audio segment in material file in seconds. Default value: 0, which means to start capturing from the beginning position of the material.
         * @type {number || null}
         */
        this.SourceMediaStartTime = null;

        /**
         * Audio segment duration in seconds. By default, the length of the material will be used, which means that the entire material will be captured.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Operation on audio segment, such as volume adjustment.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AudioTransform> || null}
         */
        this.AudioOperations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceMedia = 'SourceMedia' in params ? params.SourceMedia : null;
        this.SourceMediaStartTime = 'SourceMediaStartTime' in params ? params.SourceMediaStartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.AudioOperations) {
            this.AudioOperations = new Array();
            for (let z in params.AudioOperations) {
                let obj = new AudioTransform();
                obj.deserialize(params.AudioOperations[z]);
                this.AudioOperations.push(obj);
            }
        }

    }
}

/**
 * Information of an intelligently generated highlight
 * @class
 */
class MediaAiAnalysisHighlightItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Address of an intelligently generated highlight.
         * @type {string || null}
         */
        this.HighlightUrl = null;

        /**
         * Address of an intelligently generated highlight cover.
         * @type {string || null}
         */
        this.CovImgUrl = null;

        /**
         * Confidence of an intelligently generated highlight between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Duration of an intelligently generated highlight.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * List of intelligently generated highlight subsegments, which together form a highlight.
         * @type {Array.<HighlightSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HighlightUrl = 'HighlightUrl' in params ? params.HighlightUrl : null;
        this.CovImgUrl = 'CovImgUrl' in params ? params.CovImgUrl : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new HighlightSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * DescribeAnimatedGraphicsTemplates request structure.
 * @class
 */
class DescribeAnimatedGraphicsTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of animated image generating templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Paged offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Template type filter. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Result type of ASR-based prohibited information detection in speech task in content audit
 * @class
 */
class AiReviewTaskProhibitedAsrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of ASR-based prohibited information detection in speech task in content audit
         * @type {AiReviewProhibitedAsrTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of ASR-based prohibited information detection in speech task in content audit
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewProhibitedAsrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewProhibitedAsrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewProhibitedAsrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Details of a transcoding to adaptive bitrate streaming template
 * @class
 */
class AdaptiveDynamicStreamingTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a transcoding to adaptive bitrate streaming template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Template type. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Name of a transcoding to adaptive bitrate streaming template.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description of a transcoding to adaptive bitrate streaming template.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Container type. Valid values:
<li>hls; </li>
<li>dash.</li>
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * DRM type. Valid values:
<li>FairPlay;</li>
<li>SimpleAES;</li>
<li>Widevine.</li>
If this field is a blank string, DRM will not be performed on the video.
         * @type {string || null}
         */
        this.DrmType = null;

        /**
         * List of video track templates.
         * @type {Array.<VideoTrackTemplateInfo> || null}
         */
        this.VideoTrackTemplateSet = null;

        /**
         * List of audio track templates.
         * @type {Array.<AudioTrackTemplateInfo> || null}
         */
        this.AudioTrackTemplateSet = null;

        /**
         * Adaptive bitstream format. Valid value:
<li>HLS.</li>
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Parameter information of input stream for adaptive bitrate streaming. Up to 10 streams can be input.
         * @type {Array.<AdaptiveStreamTemplate> || null}
         */
        this.StreamInfos = null;

        /**
         * Whether to prohibit transcoding from low bitrate to high bitrate. Valid values:
<li>0: no,</li>
<li>1: yes.</li>
         * @type {number || null}
         */
        this.DisableHigherVideoBitrate = null;

        /**
         * Whether to prohibit transcoding from low resolution to high resolution. Valid values:
<li>0: no,</li>
<li>1: yes.</li>
         * @type {number || null}
         */
        this.DisableHigherVideoResolution = null;

        /**
         * Creation time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.DrmType = 'DrmType' in params ? params.DrmType : null;

        if (params.VideoTrackTemplateSet) {
            this.VideoTrackTemplateSet = new Array();
            for (let z in params.VideoTrackTemplateSet) {
                let obj = new VideoTrackTemplateInfo();
                obj.deserialize(params.VideoTrackTemplateSet[z]);
                this.VideoTrackTemplateSet.push(obj);
            }
        }

        if (params.AudioTrackTemplateSet) {
            this.AudioTrackTemplateSet = new Array();
            for (let z in params.AudioTrackTemplateSet) {
                let obj = new AudioTrackTemplateInfo();
                obj.deserialize(params.AudioTrackTemplateSet[z]);
                this.AudioTrackTemplateSet.push(obj);
            }
        }
        this.Format = 'Format' in params ? params.Format : null;

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new AdaptiveStreamTemplate();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.DisableHigherVideoBitrate = 'DisableHigherVideoBitrate' in params ? params.DisableHigherVideoBitrate : null;
        this.DisableHigherVideoResolution = 'DisableHigherVideoResolution' in params ? params.DisableHigherVideoResolution : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DeleteAnimatedGraphicsTemplate response structure.
 * @class
 */
class DeleteAnimatedGraphicsTemplateResponse extends  AbstractModel {
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
 * Result type of OCR-based prohibited information detection in text task in content audit
 * @class
 */
class AiReviewTaskProhibitedOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of OCR-based prohibited information detection in text task in content audit
         * @type {AiReviewProhibitedOcrTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of OCR-based prohibited information detection in text task in content audit
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewProhibitedOcrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewProhibitedOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewProhibitedOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Full speech recognition result.
 * @class
 */
class AiRecognitionTaskAsrFullTextResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of full speech recognition segments.
         * @type {Array.<AiRecognitionTaskAsrFullTextSegmentItem> || null}
         */
        this.SegmentSet = null;

        /**
         * Subtitles file URL.
         * @type {string || null}
         */
        this.SubtitleUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskAsrFullTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }
        this.SubtitleUrl = 'SubtitleUrl' in params ? params.SubtitleUrl : null;

    }
}

/**
 * OCR-detected prohibited information in text
 * @class
 */
class AiReviewProhibitedOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of OCR-detected prohibited information in text between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for OCR-detected prohibited information in text. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of video segments that contain the OCR-detected prohibited information in text.
         * @type {Array.<MediaContentReviewOcrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Summary metadata of WeChat Mini Program audit.
 * @class
 */
class MediaMiniProgramReviewElem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audit type.
<li>Porn: porn image,</li>
<li>Porn.Ocr: porn text,</li>
<li>Porn.Asr: porn speech,</li>
<li>Terrorism: terrorism image,</li>
<li>Political: politically sensitive image,</li>
<li>Political.Ocr: politically sensitive text</li>
<li>Political.Asr: politically sensitive speech</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Audit suggestion.
<li>pass: normal,</li>
<li>block: violating,</li>
<li>review: suspected of violation.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Confidence of audit result between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * Result information of intelligent cover generating
 * @class
 */
class AiAnalysisTaskCoverOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of intelligently generated covers.
         * @type {Array.<MediaAiAnalysisCoverItem> || null}
         */
        this.CoverSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CoverSet) {
            this.CoverSet = new Array();
            for (let z in params.CoverSet) {
                let obj = new MediaAiAnalysisCoverItem();
                obj.deserialize(params.CoverSet[z]);
                this.CoverSet.push(obj);
            }
        }

    }
}

/**
 * ModifySampleSnapshotTemplate request structure.
 * @class
 */
class ModifySampleSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a sampled screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Name of a sampled screencapturing template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Maximum value of the width (or long side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Sampled screencapturing type. Valid values:
<li>Percent: by percent.</li>
<li>Time: by time interval.</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval.
<li>If `SampleType` is `Percent`, sampling will be performed at an interval of the specified percentage.</li>
<li>If `SampleType` is `Time`, sampling will be performed at the specified time interval in seconds.</li>
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * Image format. Valid values: jpg, png.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
<li>white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.</li>
<li>gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * Input parameter type of OCR-based politically sensitive information detection in text task in content audit
 * @class
 */
class AiReviewPoliticalOcrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Politically sensitive information detection template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Information, name, and customer ID of the source video to be processed
 * @class
 */
class MediaInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video URL.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Video name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Custom video ID.
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
        this.Url = 'Url' in params ? params.Url : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Image sprite generating task. This structure is only used for tasks initiated by the [CreateImageSprite](https://cloud.tencent.com/document/product/266/8101) API in v2017.
 * @class
 */
class CreateImageSpriteTask2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image sprite generating task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Error code
<li>0: success;</li>
<li>Other values: failure.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * ID of generated image sprite file.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Image sprite specification. For more information, please see [Image Sprite Generating Template](https://cloud.tencent.com/document/product/266/33480#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.A8.A1.E6.9D.BF).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Total number of subimages in image sprite.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Address of output image sprite.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ImageSpriteUrlSet = null;

        /**
         * Address of WebVtt file for the position-time relationship among subimages in an image sprite.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WebVttUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ImageSpriteUrlSet = 'ImageSpriteUrlSet' in params ? params.ImageSpriteUrlSet : null;
        this.WebVttUrl = 'WebVttUrl' in params ? params.WebVttUrl : null;

    }
}

/**
 * Temporary credential
 * @class
 */
class TempCertificate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Temporary security certificate ID.
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * Temporary security certificate `Key`.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Token value.
         * @type {string || null}
         */
        this.Token = null;

        /**
         * Certificate expiration time. A Unix timestamp will be returned which is accurate down to the second.
         * @type {number || null}
         */
        this.ExpiredTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;

    }
}

/**
 * Result type of OCR-based politically sensitive information detection in text task in content audit
 * @class
 */
class AiReviewTaskPoliticalOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of OCR-based politically sensitive information detection in text task in content audit.
         * @type {AiReviewPoliticalOcrTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of OCR-based politically sensitive information detection in text task in content audit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewPoliticalOcrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPoliticalOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPoliticalOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * CreateImageSpriteTemplate request structure.
 * @class
 */
class CreateImageSpriteTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sampling type. Valid values:
<li>Percent: by percent.</li>
<li>Time: by time interval.</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval.
<li>If `SampleType` is `Percent`, sampling will be performed at an interval of the specified percentage.</li>
<li>If `SampleType` is `Time`, sampling will be performed at the specified time interval in seconds.</li>
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * Subimage row count of an image sprite.
         * @type {number || null}
         */
        this.RowCount = null;

        /**
         * Subimage column count of an image sprite.
         * @type {number || null}
         */
        this.ColumnCount = null;

        /**
         * Name of an image sprite generating template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Maximum value of the width (or long side) of a subimage in an image sprite in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a subimage in an image sprite in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * Time point screenshot information
 * @class
 */
class MediaSnapshotByTimePicInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time offset corresponding to the screenshot in the video in <font color=red>milliseconds</font>.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimeOffset = null;

        /**
         * Screenshot URL.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * List of watermarking template IDs if the screenshots are watermarked.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.WaterMarkDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeOffset = 'TimeOffset' in params ? params.TimeOffset : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.WaterMarkDefinition = 'WaterMarkDefinition' in params ? params.WaterMarkDefinition : null;

    }
}

/**
 * Information of a transcoding to adaptive bitrate streaming video track template.
 * @class
 */
class VideoTrackTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a video track template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Encoder. Valid values:
<li>libx264: H.264</li>
<li>libx265: H.265</li>
Currently, a resolution within 640*480p must be specified for H.265.
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Video frame rate in Hz. Value range: [0, 60].
If the value is 0, the frame rate will be the same as that of the source video.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Bitrate of a video stream in Kbps. Value range: 0 and [128, 35,000].
If the value is 0, the bitrate of the video will be the same as that of the source video.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Template type. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Maximum value of the width (or long side) of a video stream in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a video stream in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

        /**
         * Creation time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Content audit template details
 * @class
 */
class ContentReviewTemplateItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of content audit template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Content audit template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Content audit template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Porn information detection control parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PornConfigureInfo || null}
         */
        this.PornConfigure = null;

        /**
         * Terrorism information detection control parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TerrorismConfigureInfo || null}
         */
        this.TerrorismConfigure = null;

        /**
         * Politically sensitive information detection control parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PoliticalConfigureInfo || null}
         */
        this.PoliticalConfigure = null;

        /**
         * Control parameter of prohibited information detection. Prohibited information includes:
<li>Abusive;</li>
<li>Drug-related.</li>
Note: this parameter is not supported yet.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ProhibitedConfigureInfo || null}
         */
        this.ProhibitedConfigure = null;

        /**
         * Custom content audit control parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {UserDefineConfigureInfo || null}
         */
        this.UserDefineConfigure = null;

        /**
         * Switch controlling whether to add audit result to review list (for human review).
<li>ON: yes;</li>
<li>OFF: no.</li>
         * @type {string || null}
         */
        this.ReviewWallSwitch = null;

        /**
         * Frame capturing interval in seconds. If this parameter is left empty, 1 second will be used by default. Minimum value: 0.5 seconds.
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

        /**
         * Creation time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.PornConfigure) {
            let obj = new PornConfigureInfo();
            obj.deserialize(params.PornConfigure)
            this.PornConfigure = obj;
        }

        if (params.TerrorismConfigure) {
            let obj = new TerrorismConfigureInfo();
            obj.deserialize(params.TerrorismConfigure)
            this.TerrorismConfigure = obj;
        }

        if (params.PoliticalConfigure) {
            let obj = new PoliticalConfigureInfo();
            obj.deserialize(params.PoliticalConfigure)
            this.PoliticalConfigure = obj;
        }

        if (params.ProhibitedConfigure) {
            let obj = new ProhibitedConfigureInfo();
            obj.deserialize(params.ProhibitedConfigure)
            this.ProhibitedConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfo();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }
        this.ReviewWallSwitch = 'ReviewWallSwitch' in params ? params.ReviewWallSwitch : null;
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DeleteAIRecognitionTemplate response structure.
 * @class
 */
class DeleteAIRecognitionTemplateResponse extends  AbstractModel {
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
 * Blur parameter type of video processing task
 * @class
 */
class MosaicInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin position, which currently can only be:
<li>TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the blur is in the top-left corner of the image or text.</li>
Default value: TopLeft.
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * The horizontal position of the origin of the blur relative to the origin of coordinates of the video. % and px formats are supported:
<li>If the string ends in %, the `XPos` of the blur will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width;</li>
<li>If the string ends in px, the `XPos` of the blur will be the specified px; for example, `100px` means that `XPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * Vertical position of the origin of blur relative to the origin of coordinates of video. % and px formats are supported:
<li>If the string ends in %, the `YPos` of the blur will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height;</li>
<li>If the string ends in px, the `YPos` of the blur will be the specified px; for example, `100px` means that `YPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * Blur width. % and px formats are supported:
<li>If the string ends in %, the `Width` of the blur will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in px, the `Width` of the blur will be in px; for example, `100px` means that `Width` is 100 px.</li>
Default value: 10%.
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Blur height. % and px formats are supported:
<li>If the string ends in %, the `Height` of the blur will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in px, the `Height` of the blur will be in px; for example, `100px` means that `Height` is 100 px.</li>
Default value: 10%.
         * @type {string || null}
         */
        this.Height = null;

        /**
         * Start time offset of blur in seconds. If this parameter is left empty or 0 is entered, the blur will appear upon the first video frame.
<li>If this parameter is left empty or 0 is entered, the blur will appear upon the first video frame;</li>
<li>If this value is greater than 0 (e.g., n), the blur will appear at second n after the first video frame;</li>
<li>If this value is smaller than 0 (e.g., -n), the blur will appear at second n before the last video frame.</li>
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of blur in seconds.
<li>If this parameter is left empty or 0 is entered, the blur will exist till the last video frame;</li>
<li>If this value is greater than 0 (e.g., n), the blur will exist till second n;</li>
<li>If this value is smaller than 0 (e.g., -n), the blur will exist till second n before the last video frame.</li>
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * Input parameter type of politically sensitive information detection task in content audit
 * @class
 */
class AiReviewPoliticalTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Politically sensitive information detection template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Audio operation
 * @class
 */
class AudioTransform extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audio operation type. Valid values:
<li>Volume: volume adjustment.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Volume adjustment parameter, which is valid if `Type` is `Volume`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AudioVolumeParam || null}
         */
        this.VolumeParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.VolumeParam) {
            let obj = new AudioVolumeParam();
            obj.deserialize(params.VolumeParam)
            this.VolumeParam = obj;
        }

    }
}

/**
 * ComposeMedia response structure.
 * @class
 */
class ComposeMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media file composing task ID, which can be used to query the status of composing task (with task type being `MakeMedia`).
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
 * DeleteSampleSnapshotTemplate request structure.
 * @class
 */
class DeleteSampleSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a sampled screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DescribeStorageData response structure.
 * @class
 */
class DescribeStorageDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of current media files.
         * @type {number || null}
         */
        this.MediaCount = null;

        /**
         * Total current storage capacity in bytes.
         * @type {number || null}
         */
        this.TotalStorage = null;

        /**
         * Current Standard_IA storage capacity in bytes.
         * @type {number || null}
         */
        this.InfrequentStorage = null;

        /**
         * Current Standard storage capacity in bytes.
         * @type {number || null}
         */
        this.StandardStorage = null;

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
        this.MediaCount = 'MediaCount' in params ? params.MediaCount : null;
        this.TotalStorage = 'TotalStorage' in params ? params.TotalStorage : null;
        this.InfrequentStorage = 'InfrequentStorage' in params ? params.InfrequentStorage : null;
        this.StandardStorage = 'StandardStorage' in params ? params.StandardStorage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Audio stream configuration parameter
 * @class
 */
class AudioTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audio stream encoder.
When the outer `Container` parameter is `mp3`, the valid value is:
<li>libmp3lame.</li>
When the outer `Container` parameter is `ogg` or `flac`, the valid value is:
<li>flac.</li>
When the outer `Container` parameter is `m4a`, the valid values include:
<li>libfdk_aac;</li>
<li>libmp3lame;</li>
<li>ac3.</li>
When the outer `Container` parameter is `mp4` or `flv`, the valid values include:
<li>libfdk_aac: more suitable for mp4;</li>
<li>libmp3lame: More suitable for flv;</li>
<li>mp2.</li>
When the outer `Container` parameter is `hls`, the valid values include:
<li>libfdk_aac;</li>
<li>libmp3lame.</li>
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Audio stream bitrate in Kbps. Value range: 0 and [26, 256]. If the value is 0, the bitrate of the audio stream will be the same as that of the original audio.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Audio stream sample rate. Valid values:
<li>32,000</li>
<li>44,100</li>
<li>48,000</li>
In Hz.
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * Audio channel system. Valid values:
<li>1: mono</li>
<li>2: dual</li>
<li>6: stereo</li>
         * @type {number || null}
         */
        this.AudioChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.AudioChannel = 'AudioChannel' in params ? params.AudioChannel : null;

    }
}

/**
 * ModifySubAppIdInfo request structure.
 * @class
 */
class ModifySubAppIdInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subapplication ID.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * Subapplication name. Length limit: 40 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Subapplication overview. Length limit: 300 characters.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Sampled screenshot information
 * @class
 */
class MediaSampleSnapshotItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sampled screenshot specification ID. For more information, please see [Sampled Screencapturing Parameter Template](https://cloud.tencent.com/document/product/266/33480#.E9.87.87.E6.A0.B7.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Sample type. Valid values:
<li>Percent: samples at a specified percentage interval.</li>
<li>Time: samples at a specified time interval.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval
<li>If `SampleType` is `Percent`, this value means taking a screenshot at an interval of the specified percentage.</li>
<li>If `SampleType` is `Time`, this value means taking a screenshot at an interval of the specified time (in seconds). The first screenshot is always the first video frame.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * List of URLs of generated screenshots.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ImageUrlSet = null;

        /**
         * List of watermarking template IDs if the screenshots are watermarked.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.WaterMarkDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ImageUrlSet = 'ImageUrlSet' in params ? params.ImageUrlSet : null;
        this.WaterMarkDefinition = 'WaterMarkDefinition' in params ? params.WaterMarkDefinition : null;

    }
}

/**
 * DescribeVideoTrackTemplates request structure.
 * @class
 */
class DescribeVideoTrackTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Paged offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Template type filter. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Input parameter type of video content recognition
 * @class
 */
class AiRecognitionTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intelligent video recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Audio stream configuration parameter
 * @class
 */
class AudioTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audio stream encoder.
When the outer `Container` parameter is `mp3`, the valid value is:
<li>libmp3lame.</li>
When the outer `Container` parameter is `ogg` or `flac`, the valid value is:
<li>flac.</li>
When the outer `Container` parameter is `m4a`, the valid values include:
<li>libfdk_aac;</li>
<li>libmp3lame;</li>
<li>ac3.</li>
When the outer `Container` parameter is `mp4` or `flv`, the valid values include:
<li>libfdk_aac: more suitable for mp4;</li>
<li>libmp3lame: More suitable for flv;</li>
<li>mp2.</li>
When the outer `Container` parameter is `hls`, the valid values include:
<li>libfdk_aac;</li>
<li>libmp3lame.</li>
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Audio stream bitrate in Kbps. Value range: 0 and [26, 256].
If the value is 0, the bitrate of the audio stream will be the same as that of the original audio.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Audio stream sample rate. Valid values:
<li>32,000</li>
<li>44,100</li>
<li>48,000</li>
In Hz.
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * Audio channel system. Valid values:
<li>1: mono</li>
<li>2: dual</li>
<li>6: stereo</li>
Default value: 2.
         * @type {number || null}
         */
        this.AudioChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.AudioChannel = 'AudioChannel' in params ? params.AudioChannel : null;

    }
}

/**
 * ExecuteFunction response structure.
 * @class
 */
class ExecuteFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String generated by packaging processing result. For specifications, negotiate with the backend.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Control parameter of intelligent cover generating task
 * @class
 */
class CoverConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent cover generating task. Valid values:
<li>ON: enables intelligent cover generating task;</li>
<li>OFF: disables intelligent cover generating task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * ComposeMedia request structure.
 * @class
 */
class ComposeMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of input media tracks, i.e., information of multiple tracks composed of video, audio, image, and other materials. Multiple input tracks are aligned with the output media file on the time axis. The materials of each track at the same time point on the time axis will be superimposed. Specifically, videos or images will be superimposed for video image by track order, where a material with a higher track order will be more on top, while audio materials will be mixed.
         * @type {Array.<MediaTrack> || null}
         */
        this.Tracks = null;

        /**
         * Information of output media file.
         * @type {ComposeMediaOutput || null}
         */
        this.Output = null;

        /**
         * Canvas used for composing video file.
         * @type {Canvas || null}
         */
        this.Canvas = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tracks) {
            this.Tracks = new Array();
            for (let z in params.Tracks) {
                let obj = new MediaTrack();
                obj.deserialize(params.Tracks[z]);
                this.Tracks.push(obj);
            }
        }

        if (params.Output) {
            let obj = new ComposeMediaOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

        if (params.Canvas) {
            let obj = new Canvas();
            obj.deserialize(params.Canvas)
            this.Canvas = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Video content recognition template details
 * @class
 */
class AIRecognitionTemplateItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of video content recognition template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Video content recognition template name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Video content recognition template description.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Control parameter of opening and closing credits recognition.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {HeadTailConfigureInfo || null}
         */
        this.HeadTailConfigure = null;

        /**
         * Control parameter of splitting recognition.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {SegmentConfigureInfo || null}
         */
        this.SegmentConfigure = null;

        /**
         * Face recognition control parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {FaceConfigureInfo || null}
         */
        this.FaceConfigure = null;

        /**
         * Full text recognition control parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OcrFullTextConfigureInfo || null}
         */
        this.OcrFullTextConfigure = null;

        /**
         * Text keyword recognition control parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OcrWordsConfigureInfo || null}
         */
        this.OcrWordsConfigure = null;

        /**
         * Full speech recognition control parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AsrFullTextConfigureInfo || null}
         */
        this.AsrFullTextConfigure = null;

        /**
         * Speech keyword recognition control parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AsrWordsConfigureInfo || null}
         */
        this.AsrWordsConfigure = null;

        /**
         * Control parameter of object recognition.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ObjectConfigureInfo || null}
         */
        this.ObjectConfigure = null;

        /**
         * Screencapturing interval in seconds.
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

        /**
         * Creation time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.HeadTailConfigure) {
            let obj = new HeadTailConfigureInfo();
            obj.deserialize(params.HeadTailConfigure)
            this.HeadTailConfigure = obj;
        }

        if (params.SegmentConfigure) {
            let obj = new SegmentConfigureInfo();
            obj.deserialize(params.SegmentConfigure)
            this.SegmentConfigure = obj;
        }

        if (params.FaceConfigure) {
            let obj = new FaceConfigureInfo();
            obj.deserialize(params.FaceConfigure)
            this.FaceConfigure = obj;
        }

        if (params.OcrFullTextConfigure) {
            let obj = new OcrFullTextConfigureInfo();
            obj.deserialize(params.OcrFullTextConfigure)
            this.OcrFullTextConfigure = obj;
        }

        if (params.OcrWordsConfigure) {
            let obj = new OcrWordsConfigureInfo();
            obj.deserialize(params.OcrWordsConfigure)
            this.OcrWordsConfigure = obj;
        }

        if (params.AsrFullTextConfigure) {
            let obj = new AsrFullTextConfigureInfo();
            obj.deserialize(params.AsrFullTextConfigure)
            this.AsrFullTextConfigure = obj;
        }

        if (params.AsrWordsConfigure) {
            let obj = new AsrWordsConfigureInfo();
            obj.deserialize(params.AsrWordsConfigure)
            this.AsrWordsConfigure = obj;
        }

        if (params.ObjectConfigure) {
            let obj = new ObjectConfigureInfo();
            obj.deserialize(params.ObjectConfigure)
            this.ObjectConfigure = obj;
        }
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Input parameter type of ASR-based porn information detection in speech task in content audit
 * @class
 */
class AiReviewPornAsrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Porn information detection template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Face recognition result.
 * @class
 */
class AiRecognitionTaskFaceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input information of face recognition task.
         * @type {AiRecognitionTaskFaceResultInput || null}
         */
        this.Input = null;

        /**
         * Output information of face recognition task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskFaceResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskFaceResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskFaceResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Input of video opening and ending credits recognition.
 * @class
 */
class AiRecognitionTaskHeadTailResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video opening and ending credits recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * PushUrlCache response structure.
 * @class
 */
class PushUrlCacheResponse extends  AbstractModel {
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
 * Result type of sampled screencapturing task
 * @class
 */
class MediaProcessTaskSampleSnapshotResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of sampled screencapturing task.
         * @type {SampleSnapshotTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of sampled screencapturing task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaSampleSnapshotItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new SampleSnapshotTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaSampleSnapshotItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Output of full text recognition.
 * @class
 */
class AiRecognitionTaskOcrFullTextResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full text recognition result set.
         * @type {Array.<AiRecognitionTaskOcrFullTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskOcrFullTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Result type of an intelligent highlight generating task
 * @class
 */
class AiAnalysisTaskHighlightResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input for an intelligent highlight generating task.
         * @type {AiAnalysisTaskHighlightInput || null}
         */
        this.Input = null;

        /**
         * Output of an intelligent highlight generating task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiAnalysisTaskHighlightOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskHighlightInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskHighlightOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * DeleteAIAnalysisTemplate response structure.
 * @class
 */
class DeleteAIAnalysisTemplateResponse extends  AbstractModel {
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
 * Text watermarking template
 * @class
 */
class TextWatermarkTemplateInputForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Font type. Currently, two types are supported:
<li>simkai.ttf: both Chinese and English are supported;</li>
<li>arial.ttf: only English is supported.</li>
         * @type {string || null}
         */
        this.FontType = null;

        /**
         * Font size in Npx format where N is a numeric value.
         * @type {string || null}
         */
        this.FontSize = null;

        /**
         * Font color in 0xRRGGBB format. Default value: 0xFFFFFF (white).
         * @type {string || null}
         */
        this.FontColor = null;

        /**
         * Text transparency. Value range: (0, 1]
<li>0: completely transparent</li>
<li>1: completely opaque</li>
         * @type {number || null}
         */
        this.FontAlpha = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FontType = 'FontType' in params ? params.FontType : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;
        this.FontAlpha = 'FontAlpha' in params ? params.FontAlpha : null;

    }
}

/**
 * Input parameter type of OCR-based terrorism information detection in text task in content audit
 * @class
 */
class AiReviewTerrorismOcrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Terrorism information detection template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Input of text keyword recognition.
 * @class
 */
class AiRecognitionTaskOcrWordsResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Text keyword recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Input parameter type of porn information detection task in content audit
 * @class
 */
class AiReviewPornTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Porn information detection template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * CreateProcedureTemplate request structure.
 * @class
 */
class CreateProcedureTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow name (up to 20 characters).
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter of video processing task.
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * Parameter of AI-based content audit task.
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * Parameter of AI-based content analysis task.
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * Type parameter of AI-based content recognition task.
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DescribeMediaProcessUsageData request structure.
 * @class
 */
class DescribeMediaProcessUsageDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start date in [ISO date format](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End date in [ISO date format](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F). The end date must be on or after the start date.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Type of video processing task to be queried. Valid value: Transcode. Default value: Transcode.
<li>Transcode: transcoding</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Transition information
 * @class
 */
class MediaTransitionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transition duration in seconds. For two media segments that use a transition, the start time of the second segment on the track will be automatically set to the end time of the first segment minus the transition duration.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * List of transition operations. Up to one video image or audio transition operation is supported.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TransitionOpertion> || null}
         */
        this.Transitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.Transitions) {
            this.Transitions = new Array();
            for (let z in params.Transitions) {
                let obj = new TransitionOpertion();
                obj.deserialize(params.Transitions[z]);
                this.Transitions.push(obj);
            }
        }

    }
}

/**
 * Information of intelligently generated cover
 * @class
 */
class MediaAiAnalysisCoverItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Address of intelligently generated cover.
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * Confidence of intelligently generated cover between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * Control parameter of intelligent tagging task
 * @class
 */
class TagConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent tagging task. Valid values:
<li>ON: enables intelligent tagging task;</li>
<li>OFF: disables intelligent tagging task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Video splicing task information. This structure is only used for tasks initiated by the [ConcatVideo](https://cloud.tencent.com/document/product/266/7821) API in v2017.
 * @class
 */
class ConcatTask2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video splicing task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Information of source file for video splicing.
         * @type {Array.<ConcatFileInfo2017> || null}
         */
        this.FileInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.FileInfoSet) {
            this.FileInfoSet = new Array();
            for (let z in params.FileInfoSet) {
                let obj = new ConcatFileInfo2017();
                obj.deserialize(params.FileInfoSet[z]);
                this.FileInfoSet.push(obj);
            }
        }

    }
}

/**
 * DeleteAIRecognitionTemplate request structure.
 * @class
 */
class DeleteAIRecognitionTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of video content recognition template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * File upload task information
 * @class
 */
class FileUploadTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique file ID.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Basic information of media file generated after upload is completed.
         * @type {MediaBasicInfo || null}
         */
        this.MediaBasicInfo = null;

        /**
         * If a video processing flow is specified when a video is uploaded, this field will be the ID of the task flow.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProcedureTaskId = null;

        /**
         * Metadata, such as size, duration, video stream information, audio stream information, etc.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;

        if (params.MediaBasicInfo) {
            let obj = new MediaBasicInfo();
            obj.deserialize(params.MediaBasicInfo)
            this.MediaBasicInfo = obj;
        }
        this.ProcedureTaskId = 'ProcedureTaskId' in params ? params.ProcedureTaskId : null;

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }

    }
}

/**
 * Result type of intelligent cover generating task
 * @class
 */
class AiAnalysisTaskCoverResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of intelligent cover generating task.
         * @type {AiAnalysisTaskCoverInput || null}
         */
        this.Input = null;

        /**
         * Output of intelligent cover generating task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiAnalysisTaskCoverOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskCoverInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskCoverOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Result information of intelligent categorization
 * @class
 */
class AiAnalysisTaskClassificationOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of intelligently generated video categories.
         * @type {Array.<MediaAiAnalysisClassificationItem> || null}
         */
        this.ClassificationSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClassificationSet) {
            this.ClassificationSet = new Array();
            for (let z in params.ClassificationSet) {
                let obj = new MediaAiAnalysisClassificationItem();
                obj.deserialize(params.ClassificationSet[z]);
                this.ClassificationSet.push(obj);
            }
        }

    }
}

/**
 * File deleting task
 * @class
 */
class FileDeleteTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of deleted files.
         * @type {Array.<string> || null}
         */
        this.FileIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileIdSet = 'FileIdSet' in params ? params.FileIdSet : null;

    }
}

/**
 * ModifyTranscodeTemplate request structure.
 * @class
 */
class ModifyTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of transcoding template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Container. Valid values: mp4; flv; hls; mp3; flac; ogg; m4a. Among them, mp3, flac, ogg, and m4a are for audio files.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Transcoding template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description. Length limit: 256 bytes.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Whether to remove video data. Valid values:
<li>0: retain</li>
<li>1: remove</li>
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * Whether to remove audio data. Valid values:
<li>0: retain</li>
<li>1: remove</li>
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * Video stream configuration parameter.
         * @type {VideoTemplateInfoForUpdate || null}
         */
        this.VideoTemplate = null;

        /**
         * Audio stream configuration parameter.
         * @type {AudioTemplateInfoForUpdate || null}
         */
        this.AudioTemplate = null;

        /**
         * TESHD transcoding parameter.
         * @type {TEHDConfigForUpdate || null}
         */
        this.TEHDConfig = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfoForUpdate();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfoForUpdate();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfigForUpdate();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Input of video editing task.
 * @class
 */
class EditMediaTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input video source type. Valid values: File, Stream.
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * Information of input video file. This field has a value only when `InputType` is `File`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<EditMediaFileInfo> || null}
         */
        this.FileInfoSet = null;

        /**
         * Input stream information. This field has a value only when `InputType` is `Stream`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<EditMediaStreamInfo> || null}
         */
        this.StreamInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputType = 'InputType' in params ? params.InputType : null;

        if (params.FileInfoSet) {
            this.FileInfoSet = new Array();
            for (let z in params.FileInfoSet) {
                let obj = new EditMediaFileInfo();
                obj.deserialize(params.FileInfoSet[z]);
                this.FileInfoSet.push(obj);
            }
        }

        if (params.StreamInfoSet) {
            this.StreamInfoSet = new Array();
            for (let z in params.StreamInfoSet) {
                let obj = new EditMediaStreamInfo();
                obj.deserialize(params.StreamInfoSet[z]);
                this.StreamInfoSet.push(obj);
            }
        }

    }
}

/**
 * Control parameter of custom speech audit task
 * @class
 */
class UserDefineAsrTextReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of custom speech audit task. Valid values:
<li>ON: enables custom speech audit task;</li>
<li>OFF: disables custom speech audit task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Custom speech filter tag. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. To use the tag filtering feature, you need to add the corresponding tag when adding materials for custom speech keywords.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Output of text keyword recognition.
 * @class
 */
class AiRecognitionTaskOcrWordsResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Text keyword recognition result set.
         * @type {Array.<AiRecognitionTaskOcrWordsResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskOcrWordsResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * Result information of intelligent frame-specific tagging
 * @class
 */
class AiAnalysisTaskFrameTagOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of frame-specific video tags.
         * @type {Array.<MediaAiAnalysisFrameTagSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaAiAnalysisFrameTagSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Result type of adaptive bitrate streaming task
 * @class
 */
class MediaProcessTaskAdaptiveDynamicStreamingResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of adaptive bitrate streaming task.
         * @type {AdaptiveDynamicStreamingTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of adaptive bitrate streaming task.
         * @type {AdaptiveDynamicStreamingInfoItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AdaptiveDynamicStreamingTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AdaptiveDynamicStreamingInfoItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Watermarking template details
 * @class
 */
class WatermarkTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of watermarking template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Watermark type. Valid values:
<li>image: image watermark;</li>
<li>text: text watermark.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Watermarking template name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Horizontal position of the origin of the watermark image relative to the origin of the video.
<li>If the string ends in %, the `Left` edge of the watermark will be at the position of the specified percentage of the video width; for example, `10%` means that the `Left` edge is at 10% of the video width;</li>
<li>If the string ends in px, the `Left` edge of the watermark will be at the position of the specified px of the video width; for example, `100px` means that the `Left` edge is at the position of 100 px.</li>
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * Vertical position of the origin of the watermark image relative to the origin of the video.
<li>If the string ends in %, the `Top` edge of the watermark will beat the position of the specified percentage of the video height; for example, `10%` means that the `Top` edge is at 10% of the video height;</li>
<li>If the string ends in px, the `Top` edge of the watermark will be at the position of the specified px of the video height; for example, `100px` means that the `Top` edge is at the position of 100 px.</li>
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * Image watermarking template. This field is valid only when `Type` is `image`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ImageWatermarkTemplate || null}
         */
        this.ImageTemplate = null;

        /**
         * Text watermarking template. This field is valid only when `Type` is `text`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TextWatermarkTemplateInput || null}
         */
        this.TextTemplate = null;

        /**
         * SVG watermarking template. This field is valid when `Type` is `svg`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {SvgWatermarkInput || null}
         */
        this.SvgTemplate = null;

        /**
         * Creation time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Origin position. Valid values:
<li>topLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text;</li>
<li>topRight: the origin of coordinates is in the top-right corner of the video, and the origin of the watermark is in the top-right corner of the image or text;</li>
<li>bottomLeft: the origin of coordinates is in the bottom-left corner of the video, and the origin of the watermark is in the bottom-left corner of the image or text;</li>
<li>bottomRight: the origin of coordinates is in the bottom-right corner of the video, and the origin of the watermark is in the bottom-right corner of the image or text.</li>
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new ImageWatermarkTemplate();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

        if (params.TextTemplate) {
            let obj = new TextWatermarkTemplateInput();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }

        if (params.SvgTemplate) {
            let obj = new SvgWatermarkInput();
            obj.deserialize(params.SvgTemplate)
            this.SvgTemplate = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;

    }
}

/**
 * Output type of cover generating task
 * @class
 */
class CoverBySnapshotTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cover URL.
         * @type {string || null}
         */
        this.CoverUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;

    }
}

/**
 * CommitUpload request structure.
 * @class
 */
class CommitUploadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VOD session, which takes the returned value (VodSessionKey) of the `ApplyUpload` API.
         * @type {string || null}
         */
        this.VodSessionKey = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VodSessionKey = 'VodSessionKey' in params ? params.VodSessionKey : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * ForbidMediaDistribution request structure.
 * @class
 */
class ForbidMediaDistributionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of media files. Up to 20 ones can be submitted at a time.
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * forbid: forbids, recover: unblocks.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DescribeAIRecognitionTemplates response structure.
 * @class
 */
class DescribeAIRecognitionTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of video content recognition template details.
         * @type {Array.<AIRecognitionTemplateItem> || null}
         */
        this.AIRecognitionTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AIRecognitionTemplateSet) {
            this.AIRecognitionTemplateSet = new Array();
            for (let z in params.AIRecognitionTemplateSet) {
                let obj = new AIRecognitionTemplateItem();
                obj.deserialize(params.AIRecognitionTemplateSet[z]);
                this.AIRecognitionTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EditMedia response structure.
 * @class
 */
class EditMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video editing task ID, which can be used to query the status of editing task (with task type being `EditMedia`).
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
 * Information of a transcoding to adaptive bitrate streaming audio track template.
 * @class
 */
class AudioTrackTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Audio track encoder.
When `Container` is `mp3`, the valid value is:
<li>libmp3lame.</li>
When `Container` is `ogg` or `flac`, the valid value is:
<li>flac.</li>
When `Container` is `m4a`, the valid values include:
<li>libfdk_aac;</li>
<li>libmp3lame;</li>
<li>ac3.</li>
When the video track's `Container` is `mp4` or `flv`, the valid values include:
<li>libfdk_aac: more suitable for mp4;</li>
<li>libmp3lame: more suitable for flv;</li>
<li>mp2.</li>
When the video track's `Container` is `hls`, the valid values include:
<li>libfdk_aac;</li>
<li>libmp3lame.</li>
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Audio stream bitrate in Kbps. Value range: 0 and [26, 256].
If the value is 0, the bitrate of the audio stream will be the same as that of the original audio.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Audio stream sample rate. Valid values:
<li>32,000</li>
<li>44,100</li>
<li>48,000</li>
In Hz.
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * Template type. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Audio channel system. Valid values:
<li>1: Mono</li>
<li>2: Dual</li>
<li>6: Stereo</li>
Default value: 2.
         * @type {number || null}
         */
        this.AudioChannel = null;

        /**
         * Creation time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.AudioChannel = 'AudioChannel' in params ? params.AudioChannel : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ProcessMediaByUrl request structure.
 * @class
 */
class ProcessMediaByUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of input video, including video's URL, name, and custom ID.
         * @type {MediaInputInfo || null}
         */
        this.InputInfo = null;

        /**
         * Information of COS path to output file.
         * @type {MediaOutputInfo || null}
         */
        this.OutputInfo = null;

        /**
         * Type parameter of video content audit task.
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * Video content analysis task parameter.
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * Type parameter of video content recognition task.
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * Task flow priority. The higher the value, the higher the priority. Value range: -10–10. If this parameter is left empty, 0 will be used.
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * Notification mode for task flow status change. Valid values: Finish, Change, None. If this parameter is left empty, `Finish` will be used.
         * @type {string || null}
         */
        this.TasksNotifyMode = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * The ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or a blank string is entered, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }

        if (params.OutputInfo) {
            let obj = new MediaOutputInfo();
            obj.deserialize(params.OutputInfo)
            this.OutputInfo = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Result information of animated image generating in VOD file
 * @class
 */
class MediaAnimatedGraphicsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result information of animated image generating task
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaAnimatedGraphicsItem> || null}
         */
        this.AnimatedGraphicsSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AnimatedGraphicsSet) {
            this.AnimatedGraphicsSet = new Array();
            for (let z in params.AnimatedGraphicsSet) {
                let obj = new MediaAnimatedGraphicsItem();
                obj.deserialize(params.AnimatedGraphicsSet[z]);
                this.AnimatedGraphicsSet.push(obj);
            }
        }

    }
}

/**
 * DescribeSnapshotByTimeOffsetTemplates request structure.
 * @class
 */
class DescribeSnapshotByTimeOffsetTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of time point screencapturing templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Paged offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Template type filter. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Input of full speech recognition.
 * @class
 */
class AiRecognitionTaskAsrFullTextResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full speech recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * WeChat Mini Program audit information unit
 * @class
 */
class MediaMiniProgramReviewInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID, which is the ID of the transcoding template corresponding to the video published on WeChat Mini Program. 0 represents the source video.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Video metadata.
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * Video playback address for WeChat Mini Program audit
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Status of video release on WeChat Mini Program
<li>Pass: succeeded.</li>
<li>Rejected: rejected.</li>
         * @type {string || null}
         */
        this.ReviewResult = null;

        /**
         * WeChat Mini Program audit element.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaMiniProgramReviewElem> || null}
         */
        this.ReviewSummary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.ReviewResult = 'ReviewResult' in params ? params.ReviewResult : null;

        if (params.ReviewSummary) {
            this.ReviewSummary = new Array();
            for (let z in params.ReviewSummary) {
                let obj = new MediaMiniProgramReviewElem();
                obj.deserialize(params.ReviewSummary[z]);
                this.ReviewSummary.push(obj);
            }
        }

    }
}

/**
 * Video processing task statistics.
 * @class
 */
class TaskStatData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type
<li>Transcode: transcoding</li>
<li>Snapshot: screencapturing</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Task statistics overview.
<li>Transcode: usage in seconds</li>
         * @type {Array.<TaskStatDataItem> || null}
         */
        this.Summary = null;

        /**
         * Detailed statistics of tasks with different specifications.
Transcoding specification:
<li>Remuxing: remuxing</li>
<li>Audio: audio transcoding</li>
<li>Standard.H264.SD: H.264 SD transcoding</li>
<li>Standard.H264.HD: H.264 HD transcoding</li>
<li>Standard.H264.FHD: H.264 FHD transcoding</li>
<li>Standard.H264.2K: H.264 2K transcoding</li>
<li>Standard.H264.4K: H.264 4K transcoding</li>
<li>Standard.H265.SD: H.265 SD transcoding</li>
<li>Standard.H265.HD: H.265 HD transcoding</li>
<li>Standard.H265.FHD: H.265 FHD transcoding</li>
<li>Standard.H265.2K: H.265 2K transcoding</li>
<li>Standard.H265.4K: H.265 4K transcoding</li>
<li>TESHD-10.H264.SD: H.264 SD TESHD transcoding</li>
<li>TESHD-10.H264.HD: H.264 HD TESHD transcoding</li>
<li>TESHD-10.H264.FHD: H.264 FHD TESHD transcoding</li>
<li>TESHD-10.H264.2K: H.264 2K TESHD transcoding</li>
<li>TESHD-10.H264.4K: H.264 4K TESHD transcoding</li>
<li>TESHD-10.H265.SD: H.265 SD TESHD transcoding</li>
<li>TESHD-10.H265.HD: H.265 HD TESHD transcoding</li>
<li>TESHD-10.H265.FHD: H.265 FHD TESHD transcoding</li>
<li>TESHD-10.H265.2K: H.265 2K TESHD transcoding</li>
<li>TESHD-10.H265.4K: H.265 4K TESHD transcoding</li>
<li>Edit.Audio: audio editing</li>
<li>Edit.H264.SD: H.264 SD video editing</li>
<li>Edit.H264.HD: H.264 HD video editing</li>
<li>Edit.H264.FHD: H.264 FHD video editing</li>
<li>Edit.H264.2K: H.264 2K video editing</li>
<li>Edit.H264.4K: H.264 4K video editing</li>
<li>Edit.H265.SD: H.265 SD video editing</li>
<li>Edit.H265.HD: H.265 HD video editing</li>
<li>Edit.H265.FHD: H.265 FHD video editing</li>
<li>Edit.H265.2K: H.265 2K video editing</li>
<li>Edit.H265.4K: H.265 4K video editing</li>
         * @type {Array.<SpecificationDataItem> || null}
         */
        this.Details = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

        if (params.Summary) {
            this.Summary = new Array();
            for (let z in params.Summary) {
                let obj = new TaskStatDataItem();
                obj.deserialize(params.Summary[z]);
                this.Summary.push(obj);
            }
        }

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new SpecificationDataItem();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * Video processing task type
 * @class
 */
class MediaProcessTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of transcoding tasks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TranscodeTaskInput> || null}
         */
        this.TranscodeTaskSet = null;

        /**
         * List of animated image generating tasks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnimatedGraphicTaskInput> || null}
         */
        this.AnimatedGraphicTaskSet = null;

        /**
         * List of time point screencapturing tasks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SnapshotByTimeOffsetTaskInput> || null}
         */
        this.SnapshotByTimeOffsetTaskSet = null;

        /**
         * List of sampled screencapturing tasks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SampleSnapshotTaskInput> || null}
         */
        this.SampleSnapshotTaskSet = null;

        /**
         * List of image sprite generating tasks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ImageSpriteTaskInput> || null}
         */
        this.ImageSpriteTaskSet = null;

        /**
         * List of cover generating tasks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CoverBySnapshotTaskInput> || null}
         */
        this.CoverBySnapshotTaskSet = null;

        /**
         * List of adaptive bitrate streaming tasks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AdaptiveDynamicStreamingTaskInput> || null}
         */
        this.AdaptiveDynamicStreamingTaskSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TranscodeTaskSet) {
            this.TranscodeTaskSet = new Array();
            for (let z in params.TranscodeTaskSet) {
                let obj = new TranscodeTaskInput();
                obj.deserialize(params.TranscodeTaskSet[z]);
                this.TranscodeTaskSet.push(obj);
            }
        }

        if (params.AnimatedGraphicTaskSet) {
            this.AnimatedGraphicTaskSet = new Array();
            for (let z in params.AnimatedGraphicTaskSet) {
                let obj = new AnimatedGraphicTaskInput();
                obj.deserialize(params.AnimatedGraphicTaskSet[z]);
                this.AnimatedGraphicTaskSet.push(obj);
            }
        }

        if (params.SnapshotByTimeOffsetTaskSet) {
            this.SnapshotByTimeOffsetTaskSet = new Array();
            for (let z in params.SnapshotByTimeOffsetTaskSet) {
                let obj = new SnapshotByTimeOffsetTaskInput();
                obj.deserialize(params.SnapshotByTimeOffsetTaskSet[z]);
                this.SnapshotByTimeOffsetTaskSet.push(obj);
            }
        }

        if (params.SampleSnapshotTaskSet) {
            this.SampleSnapshotTaskSet = new Array();
            for (let z in params.SampleSnapshotTaskSet) {
                let obj = new SampleSnapshotTaskInput();
                obj.deserialize(params.SampleSnapshotTaskSet[z]);
                this.SampleSnapshotTaskSet.push(obj);
            }
        }

        if (params.ImageSpriteTaskSet) {
            this.ImageSpriteTaskSet = new Array();
            for (let z in params.ImageSpriteTaskSet) {
                let obj = new ImageSpriteTaskInput();
                obj.deserialize(params.ImageSpriteTaskSet[z]);
                this.ImageSpriteTaskSet.push(obj);
            }
        }

        if (params.CoverBySnapshotTaskSet) {
            this.CoverBySnapshotTaskSet = new Array();
            for (let z in params.CoverBySnapshotTaskSet) {
                let obj = new CoverBySnapshotTaskInput();
                obj.deserialize(params.CoverBySnapshotTaskSet[z]);
                this.CoverBySnapshotTaskSet.push(obj);
            }
        }

        if (params.AdaptiveDynamicStreamingTaskSet) {
            this.AdaptiveDynamicStreamingTaskSet = new Array();
            for (let z in params.AdaptiveDynamicStreamingTaskSet) {
                let obj = new AdaptiveDynamicStreamingTaskInput();
                obj.deserialize(params.AdaptiveDynamicStreamingTaskSet[z]);
                this.AdaptiveDynamicStreamingTaskSet.push(obj);
            }
        }

    }
}

/**
 * Face recognition result segment
 * @class
 */
class AiRecognitionTaskFaceSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of recognized segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of recognition segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Confidence of recognized segment. Value range: 0–100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Zone coordinates of recognition result. The array contains four elements: [x1,y1,x2,y2], i.e., the horizontal and vertical coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * ProcessMedia response structure.
 * @class
 */
class ProcessMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * Control parameter of intelligent categorization task
 * @class
 */
class ClassificationConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent categorization task. Valid values:
<li>ON: enables intelligent categorization task;</li>
<li>OFF: disables intelligent categorization task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Type of a release on WeChat Mini Program task
 * @class
 */
class WechatMiniProgramPublishTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the transcoding template corresponding to the published video. 0 represents the source video.
         * @type {number || null}
         */
        this.SourceDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceDefinition = 'SourceDefinition' in params ? params.SourceDefinition : null;

    }
}

/**
 * Input parameter of SVG watermarking template
 * @class
 */
class SvgWatermarkInputForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark width, which supports six formats of px, %, W%, H%, S%, and L%:
<li>If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px; if `0px` is entered
 and `Height` is not `0px`, the watermark width will be proportionally scaled based on the source SVG image; if `0px` is entered for both `Width` and `Height`, the watermark width will be the width of the source SVG image;</li>
<li>If the string ends in `W%`, the `Width` of the watermark will be the specified percentage of the video width; for example, `10W%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in `H%`, the `Width` of the watermark will be the specified percentage of the video height; for example, `10H%` means that `Width` is 10% of the video height;</li>
<li>If the string ends in `S%`, the `Width` of the watermark will be the specified percentage of the short side of the video; for example, `10S%` means that `Width` is 10% of the short side of the video;</li>
<li>If the string ends in `L%`, the `Width` of the watermark will be the specified percentage of the long side of the video; for example, `10L%` means that `Width` is 10% of the long side of the video;</li>
<li>If the string ends in %, the meaning is the same as `W%`.</li>
Default value: 10W%.
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Watermark height, which supports six formats of px, %, W%, H%, S%, and L%:
<li>If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px; if `0px` is entered
 and `Width` is not `0px`, the watermark height will be proportionally scaled based on the source SVG image; if `0px` is entered for both `Width` and `Height`, the watermark height will be the height of the source SVG image;</li>
<li>If the string ends in `W%`, the `Height` of the watermark will be the specified percentage of the video width; for example, `10W%` means that `Height` is 10% of the video width;</li>
<li>If the string ends in `H%`, the `Height` of the watermark will be the specified percentage of the video height; for example, `10H%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in `S%`, the `Height` of the watermark will be the specified percentage of the short side of the video; for example, `10S%` means that `Height` is 10% of the short side of the video;</li>
<li>If the string ends in `L%`, the `Height` of the watermark will be the specified percentage of the long side of the video; for example, `10L%` means that `Height` is 10% of the long side of the video;</li>
<li>If the string ends in %, the meaning is the same as `H%`.
Default value: 0 px.
         * @type {string || null}
         */
        this.Height = null;

        /**
         * Watermark cycle configuration, which is used to configure watermarks so that they will be displayed and hidden periodically.
Primary use case: watermarks can be added at various positions in a video, which are displayed and hidden periodically to prevent them from being covered.
For example, watermarks A, B, C, and D are set in the top-left corner, top-right corner, bottom-right corner, and bottom-left corner of a video, respectively. After the first video frame, { A will be displayed for 5s -> B for 5s -> C for 5s -> D for 5s } -> A for 5s -> B for 5s -> ... Only one watermark will be visible at any time.
Within the braces ({}) is a major cycle composed of four watermarks, namely, A, B, C, and D, which lasts for 20 seconds in a cycle.
Watermarks A, B, C, and D are displayed periodically for 5 seconds and hidden for 15 seconds each in a fixed order.
This configuration item is used to describe the cycle configuration of a single watermark.
         * @type {WatermarkCycleConfigForUpdate || null}
         */
        this.CycleConfig = null;

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

        if (params.CycleConfig) {
            let obj = new WatermarkCycleConfigForUpdate();
            obj.deserialize(params.CycleConfig)
            this.CycleConfig = obj;
        }

    }
}

/**
 * Result type of OCR-based terrorism information detection in text task in content audit
 * @class
 */
class AiReviewTaskTerrorismOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of OCR-based terrorism information detection in text task in content audit.
         * @type {AiReviewTerrorismOcrTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of OCR-based terrorism information detection in text task in content audit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTerrorismOcrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewTerrorismOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewTerrorismOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Text keyword recognition result.
 * @class
 */
class AiRecognitionTaskOcrWordsResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input information of text keyword recognition task.
         * @type {AiRecognitionTaskOcrWordsResultInput || null}
         */
        this.Input = null;

        /**
         * Output information of text keyword recognition task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskOcrWordsResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskOcrWordsResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskOcrWordsResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Control parameter of porn information detection in speech task
 * @class
 */
class PornAsrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of porn information detection in speech task. Valid values:
<li>ON: enables porn information detection in speech task;</li>
<li>OFF: disables porn information detection in speech task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * ModifyAnimatedGraphicsTemplate response structure.
 * @class
 */
class ModifyAnimatedGraphicsTemplateResponse extends  AbstractModel {
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
 * ModifyAIAnalysisTemplate response structure.
 * @class
 */
class ModifyAIAnalysisTemplateResponse extends  AbstractModel {
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
 * LiveRealTimeClip request structure.
 * @class
 */
class LiveRealTimeClipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * [LVB code](https://cloud.tencent.com/document/product/267/5959) of a stream.
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Start time of stream clipping in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of stream clipping in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Whether to clip persistently. 0: no, 1: yes. Default: no.
         * @type {number || null}
         */
        this.IsPersistence = null;

        /**
         * Storage expiration time of video generated by persistent clipping in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I). `9999-12-31T23:59:59Z` means `never expire`. After the expiration, the media file and its related resources (such as transcoding results and image sprites) will be permanently deleted. This parameter will be valid only when `IsPersistence` is 1. By default, the video will never expire.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * VOD task flow processing for video generated by persistent clipping. For more information, please see [Specifying Task Flow After Upload](https://cloud.tencent.com/document/product/266/9759). This parameter will be valid only when `IsPersistence` is 1.
         * @type {string || null}
         */
        this.Procedure = null;

        /**
         * Whether the metadata of clipped video needs to be returned. 0: no, 1: yes. Default value: no.
         * @type {number || null}
         */
        this.MetaDataRequired = null;

        /**
         * Domain name used for live clipping. Time shifting must be enabled in LVB.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Reserved field. Do not enter a value for it.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IsPersistence = 'IsPersistence' in params ? params.IsPersistence : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.MetaDataRequired = 'MetaDataRequired' in params ? params.MetaDataRequired : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Full text recognition segment.
 * @class
 */
class AiRecognitionTaskOcrFullTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of recognized segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of recognition segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Recognition segment result set.
         * @type {Array.<AiRecognitionTaskOcrFullTextSegmentTextItem> || null}
         */
        this.TextSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

        if (params.TextSet) {
            this.TextSet = new Array();
            for (let z in params.TextSet) {
                let obj = new AiRecognitionTaskOcrFullTextSegmentTextItem();
                obj.deserialize(params.TextSet[z]);
                this.TextSet.push(obj);
            }
        }

    }
}

/**
 * Result file output of video editing.
 * @class
 */
class EditMediaOutputConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output filename of up to 64 characters, which is generated by the system by default.
         * @type {string || null}
         */
        this.MediaName = null;

        /**
         * Output file format. Valid values: mp4, hls. Default value: mp4.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Category ID, which is used to categorize the media for management. A category can be created and its ID can be obtained by using the [category creating](/document/product/266/7812) API.
<li>Default value: 0, which means "Other".</li>
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Expiration time of output media file in ISO 8601 format, after which the file will be deleted. Files will never expire by default. For more information, please see [Notes on ISO Date Format](https://cloud.tencent.com/document/product/266/11732#I).
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
        this.MediaName = 'MediaName' in params ? params.MediaName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * ASR-detected porn information in speech
 * @class
 */
class AiReviewPornAsrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of ASR-detected porn information in speech between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for ASR-detected porn information in speech. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of video segments that contain the ASR-detected porn information in speech.
         * @type {Array.<MediaContentReviewAsrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewAsrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * SimpleHlsClip response structure.
 * @class
 */
class SimpleHlsClipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Address of clipped video.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Metadata of clipped video. Currently, `Size`, `Rotate`, `VideoDuration`, and `AudioDuration` fields use default value with no actual data.
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

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
        this.Url = 'Url' in params ? params.Url : null;

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAIAnalysisTemplate request structure.
 * @class
 */
class DeleteAIAnalysisTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of video content analysis template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * EditMedia request structure.
 * @class
 */
class EditMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input video type. Valid values: File, Stream.
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * Information of input video file, which is required if `InputType` is `File`.
         * @type {Array.<EditMediaFileInfo> || null}
         */
        this.FileInfos = null;

        /**
         * Input stream information, which is required if `InputType` is `Stream`.
         * @type {Array.<EditMediaStreamInfo> || null}
         */
        this.StreamInfos = null;

        /**
         * Editing template ID. Valid values: 10, 20. If this parameter is left empty, template 10 will be used.
<li>10: the input with the highest resolution will be used as the benchmark;</li>
<li>20: the input with the highest bitrate will be used as the benchmark;</li>
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * [Task flow template](/document/product/266/11700#.E4.BB.BB.E5.8A.A1.E6.B5.81.E6.A8.A1.E6.9D.BF) name, which should be entered if you want to perform a task flow on the generated new video.
         * @type {string || null}
         */
        this.ProcedureName = null;

        /**
         * Configuration of file generated after editing.
         * @type {EditMediaOutputConfig || null}
         */
        this.OutputConfig = null;

        /**
         * Identifies the source context which is used to pass through the user request information. The `EditMediaComplete` callback and task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * Task priority. The higher the value, the higher the priority. Value range: -10–10. If this parameter is left empty, 0 will be used.
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * ID used for task deduplication. If there was a request with the same ID in the last day, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or a blank string is entered, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputType = 'InputType' in params ? params.InputType : null;

        if (params.FileInfos) {
            this.FileInfos = new Array();
            for (let z in params.FileInfos) {
                let obj = new EditMediaFileInfo();
                obj.deserialize(params.FileInfos[z]);
                this.FileInfos.push(obj);
            }
        }

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new EditMediaStreamInfo();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ProcedureName = 'ProcedureName' in params ? params.ProcedureName : null;

        if (params.OutputConfig) {
            let obj = new EditMediaOutputConfig();
            obj.deserialize(params.OutputConfig)
            this.OutputConfig = obj;
        }
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Information of source file for video splicing (v2017)
 * @class
 */
class ConcatFileInfo2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code
<li>0: success;</li>
<li>Other values: failure.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * ID of source file for video splicing.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Address of source file for video splicing.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * Format of source file for video splicing.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

    }
}

/**
 * Result type of image sprite generating task
 * @class
 */
class MediaProcessTaskImageSpriteResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of image sprite generating task.
         * @type {ImageSpriteTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of image sprite generating task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaImageSpriteItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new ImageSpriteTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaImageSpriteItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * DescribeMediaInfos response structure.
 * @class
 */
class DescribeMediaInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media file information list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaInfo> || null}
         */
        this.MediaInfoSet = null;

        /**
         * List of IDs of files that do not exist.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.NotExistFileIdSet = null;

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

        if (params.MediaInfoSet) {
            this.MediaInfoSet = new Array();
            for (let z in params.MediaInfoSet) {
                let obj = new MediaInfo();
                obj.deserialize(params.MediaInfoSet[z]);
                this.MediaInfoSet.push(obj);
            }
        }
        this.NotExistFileIdSet = 'NotExistFileIdSet' in params ? params.NotExistFileIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProcedureTemplate response structure.
 * @class
 */
class DeleteProcedureTemplateResponse extends  AbstractModel {
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
 * DescribeAdaptiveDynamicStreamingTemplates response structure.
 * @class
 */
class DescribeAdaptiveDynamicStreamingTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of transcoding to adaptive bitrate streaming template details.
         * @type {Array.<AdaptiveDynamicStreamingTemplate> || null}
         */
        this.AdaptiveDynamicStreamingTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AdaptiveDynamicStreamingTemplateSet) {
            this.AdaptiveDynamicStreamingTemplateSet = new Array();
            for (let z in params.AdaptiveDynamicStreamingTemplateSet) {
                let obj = new AdaptiveDynamicStreamingTemplate();
                obj.deserialize(params.AdaptiveDynamicStreamingTemplateSet[z]);
                this.AdaptiveDynamicStreamingTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * WeChat Mini Program audit information
 * @class
 */
class MediaMiniProgramReviewInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audit information list.
         * @type {Array.<MediaMiniProgramReviewInfoItem> || null}
         */
        this.MiniProgramReviewList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MiniProgramReviewList) {
            this.MiniProgramReviewList = new Array();
            for (let z in params.MiniProgramReviewList) {
                let obj = new MediaMiniProgramReviewInfoItem();
                obj.deserialize(params.MiniProgramReviewList[z]);
                this.MiniProgramReviewList.push(obj);
            }
        }

    }
}

/**
 * ForbidMediaDistribution response structure.
 * @class
 */
class ForbidMediaDistributionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of files that do not exist.
         * @type {Array.<string> || null}
         */
        this.NotExistFileIdSet = null;

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
        this.NotExistFileIdSet = 'NotExistFileIdSet' in params ? params.NotExistFileIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAdaptiveDynamicStreamingTemplates request structure.
 * @class
 */
class DescribeAdaptiveDynamicStreamingTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of transcoding to adaptive bitrate streaming templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Paged offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Template type filter. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Input parameter of image watermarking template
 * @class
 */
class ImageWatermarkInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * String generated by [Base64-encoding](https://tools.ietf.org/html/rfc4648) a watermark image. JPEG and PNG images are supported.
         * @type {string || null}
         */
        this.ImageContent = null;

        /**
         * Watermark width. % and px formats are supported:
<li>If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.</li>
Default value: 10%.
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Watermark height. % and px formats are supported:
<li>If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.</li>
Default value: 0 px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
         * @type {string || null}
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
        this.ImageContent = 'ImageContent' in params ? params.ImageContent : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * Control parameter of object recognition task
 * @class
 */
class ObjectConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of object recognition task. Valid values:
<li>ON: enables intelligent object recognition task;</li>
<li>OFF: disables intelligent object recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Object library. Valid values:
<li>Default: default object library;</li>
<li>UserDefine: custom object library.</li>
<li>All: both default and custom object libraries will be used.</li>
Default value: All, i.e., both default and custom object libraries will be used.
         * @type {string || null}
         */
        this.ObjectLibrary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.ObjectLibrary = 'ObjectLibrary' in params ? params.ObjectLibrary : null;

    }
}

/**
 * Video opening and ending credits recognition result.
 * @class
 */
class AiRecognitionTaskHeadTailResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input information of video opening and ending credits recognition task.
         * @type {AiRecognitionTaskHeadTailResultInput || null}
         */
        this.Input = null;

        /**
         * Output information of video opening and ending credits recognition task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskHeadTailResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskHeadTailResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskHeadTailResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Video transcoding task information. This structure is only used for tasks initiated by the [ConvertVodFile](https://cloud.tencent.com/document/product/266/7822) API in v2017.
 * @class
 */
class TranscodeTask2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transcoding task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Error code
<li>0: success;</li>
<li>Other values: failure.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * ID of transcoded file.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Name of transcoded file.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Video duration in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Cover address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * Playback information generated after video transcoding.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TranscodePlayInfo2017> || null}
         */
        this.PlayInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;

        if (params.PlayInfoSet) {
            this.PlayInfoSet = new Array();
            for (let z in params.PlayInfoSet) {
                let obj = new TranscodePlayInfo2017();
                obj.deserialize(params.PlayInfoSet[z]);
                this.PlayInfoSet.push(obj);
            }
        }

    }
}

/**
 * Control parameter of an intelligent highlight generating task
 * @class
 */
class HighlightsConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of an intelligent highlight generating task. Valid values:
<li>ON: enable an intelligent highlight generating task;</li>
<li>OFF: disable an intelligent highlight generating task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeProcedureTemplates request structure.
 * @class
 */
class DescribeProcedureTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name filter of task flow template. Array length limit: 100.
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * Filter of task flow template types. Valid values:
<li>Preset: preset task flow template;</li>
<li>Custom: custom task flow template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Names = 'Names' in params ? params.Names : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Control parameter of intelligent tagging task
 * @class
 */
class TagConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent tagging task. Valid values:
<li>ON: enables intelligent tagging task;</li>
<li>OFF: disables intelligent tagging task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Empty track segment used as placeholder on time axis. If you want a period of silence between two audio segments, you can use `EmptyTrackItem` to hold the place.
 * @class
 */
class EmptyTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Duration in seconds.
         * @type {number || null}
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * Information of sticker on sticker track.
 * @class
 */
class StickerTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source of media file for sticker material, which can be an ID of a VOD file or URL of another file.
         * @type {string || null}
         */
        this.SourceMedia = null;

        /**
         * Sticker duration in seconds.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Start time of sticker on track in seconds.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Origin position. Valid values:
<li> Center: the origin of coordinates is the center position, such as the center of canvas.</li>
Default value: Center.
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * The horizontal position of the origin of the sticker relative to the origin of the canvas. % and px formats are supported:
<li>If the string ends in %, the `XPos` of the sticker will be at the position of the specified percentage of the canvas width; for example, `10%` means that `XPos` is 10% of the canvas width.</li><li>If the string ends in px, the `XPos` of the sticker will be in px; for example, `100px` means that `XPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * The vertical position of the origin of the sticker relative to the origin of the canvas. % and px formats are supported:
<li>If the string ends in %, the `YPos` of the sticker will be at the position of the specified percentage of the canvas height; for example, `10%` means that `YPos` is 10% of the canvas height.</li>
<li>If the string ends in px, the `YPos` of the sticker will be in px; for example, `100px` means that `YPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * Sticker width. % and px formats are supported:
<li>If the string ends in %, the `Width` of the sticker will be the specified percentage of the canvas width; for example, `10%` means that `Width` is 10% of the canvas width.</li>
<li>If the string ends in px, the `Width` of the sticker will be in px; for example, `100px` means that `Width` is 100 px.</li>
<li>If both `Width` and `Height` are empty, then they will be the `Width` and `Height` of the sticker material, respectively.</li>
<li>If `Width` is empty (0), but `Height` is not empty, `Width` will be proportionally scaled.</li>
<li>If `Width` is not empty, but `Height` is empty, `Height` will be proportionally scaled.</li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Sticker height. % and px formats are supported:
<li>If the string ends in %, the `Height` of the sticker will be the specified percentage of the canvas height; for example, `10%` means that `Height` is 10% of the canvas height.</li>
<li>If the string ends in px, the `Height` of the sticker will be in px; for example, `100px` means that `Height` is 100 px.</li>
<li>If both `Width` and `Height` are empty, then they will be the `Width` and `Height` of the sticker material, respectively.</li>
<li>If `Width` is empty, but `Height` is not empty, `Width` will be proportionally scaled.</li>
<li>If `Width` is not empty, but `Height` is empty, `Height` will be proportionally scaled.</li>
         * @type {string || null}
         */
        this.Height = null;

        /**
         * Operation on sticker such as image rotation.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ImageTransform> || null}
         */
        this.ImageOperations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceMedia = 'SourceMedia' in params ? params.SourceMedia : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

        if (params.ImageOperations) {
            this.ImageOperations = new Array();
            for (let z in params.ImageOperations) {
                let obj = new ImageTransform();
                obj.deserialize(params.ImageOperations[z]);
                this.ImageOperations.push(obj);
            }
        }

    }
}

/**
 * Video stream configuration parameter
 * @class
 */
class VideoTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video stream encoder. Valid values:
<li>libx264: H.264</li>
<li>libx265: H.265</li>
<li>av1: AOMedia Video 1</li>
Currently, a resolution within 640x480 must be specified for H.265. and the `av1` container only supports mp4.
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Video frame rate in Hz. Value range: [0, 60].
If the value is 0, the frame rate will be the same as that of the source video.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Bitrate of video stream in Kbps. Value range: 0 and [128, 35,000].
If the value is 0, the bitrate of the video will be the same as that of the source video.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Maximum value of the width (or long side) of a video stream in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a video stream in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
Default value: black.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * Control parameter of politically sensitive information detection in text task
 * @class
 */
class PoliticalOcrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of politically sensitive information detection in text task. Valid values:
<li>ON: enables politically sensitive information detection in text task;</li>
<li>OFF: disables politically sensitive information detection in text task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Control parameter of custom figure audit task
 * @class
 */
class UserDefineFaceReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of custom figure audit task. Valid values:
<li>ON: enables custom figure audit task;</li>
<li>OFF: disables custom figure audit task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Custom figure filter tag. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. To use the tag filtering feature, you need to add the corresponding tag when adding materials for the custom figure library.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 97 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 95 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Result type of OCR-based porn information detection in text task in content audit
 * @class
 */
class AiReviewTaskPornOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of OCR-based porn information detection in text task in content audit.
         * @type {AiReviewPornOcrTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of OCR-based porn information detection in text task in content audit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewPornOcrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPornOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPornOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * DescribeWatermarkTemplates request structure.
 * @class
 */
class DescribeWatermarkTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of watermarking templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Watermark type filter. Valid values:
<li>image: image watermark;</li>
<li>text: text watermark.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries
<li>Default value: 10;</li>
<li>Maximum value: 100.</li>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Input parameter type of cover generating task
 * @class
 */
class CoverBySnapshotTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time point screencapturing template ID.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Screencapturing mode. Valid values:
<li>Time: screencaptures by time point</li>
<li>Percent: screencaptures by percentage</li>
         * @type {string || null}
         */
        this.PositionType = null;

        /**
         * Screenshot position:
<li>For time point screencapturing, this means to take a screenshot at a specified time point (in seconds) and use it as the cover</li>
<li>For percentage screencapturing, this value means to take a screenshot at a specified percentage of the video duration and use it as the cover</li>
         * @type {number || null}
         */
        this.PositionValue = null;

        /**
         * List of up to 10 image or text watermarks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.PositionType = 'PositionType' in params ? params.PositionType : null;
        this.PositionValue = 'PositionValue' in params ? params.PositionValue : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

    }
}

/**
 * Control parameter of custom audit task
 * @class
 */
class UserDefineConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of custom figure audit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {UserDefineFaceReviewTemplateInfo || null}
         */
        this.FaceReviewInfo = null;

        /**
         * Control parameter of custom speech audit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {UserDefineAsrTextReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of custom text audit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {UserDefineOcrTextReviewTemplateInfo || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceReviewInfo) {
            let obj = new UserDefineFaceReviewTemplateInfo();
            obj.deserialize(params.FaceReviewInfo)
            this.FaceReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new UserDefineAsrTextReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new UserDefineOcrTextReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * Split video segment.
 * @class
 */
class AiRecognitionTaskSegmentSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * File ID, which is valid only when a VOD file is processed and the subsegments generated through segmentation are also VOD files.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Split video segment URL.
         * @type {string || null}
         */
        this.SegmentUrl = null;

        /**
         * Confidence of split segment. Value range: 0–100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Start time offset of split segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of split segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Split cover image URL.
         * @type {string || null}
         */
        this.CovImgUrl = null;

        /**
         * Special field, which should be ignored.
         * @type {string || null}
         */
        this.SpecialInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.SegmentUrl = 'SegmentUrl' in params ? params.SegmentUrl : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.CovImgUrl = 'CovImgUrl' in params ? params.CovImgUrl : null;
        this.SpecialInfo = 'SpecialInfo' in params ? params.SpecialInfo : null;

    }
}

/**
 * Input parameter type of OCR-based porn information detection in text task in content audit
 * @class
 */
class AiReviewPornOcrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Porn information detection template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Text keyword recognition control parameter.
 * @class
 */
class OcrWordsConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of text keyword recognition task. Valid values:
<li>ON: enables text keyword recognition task;</li>
<li>OFF: disables text keyword recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Keyword filter tag, which specifies the keyword tag that needs to be returned. If this parameter is left empty, all results will be returned.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * Information of time point screenshot in VOD file
 * @class
 */
class MediaSnapshotByTimeOffsetItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specification of a time point screenshot. For more information, please see [Parameter Template for Time Point Screencapturing](https://cloud.tencent.com/document/product/266/33480#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Information set of screenshots of the same specification. Each element represents a screenshot.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaSnapshotByTimePicInfoItem> || null}
         */
        this.PicInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.PicInfoSet) {
            this.PicInfoSet = new Array();
            for (let z in params.PicInfoSet) {
                let obj = new MediaSnapshotByTimePicInfoItem();
                obj.deserialize(params.PicInfoSet[z]);
                this.PicInfoSet.push(obj);
            }
        }

    }
}

/**
 * Text watermarking template
 * @class
 */
class TextWatermarkTemplateInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Font type. Currently, two types are supported:
<li>simkai.ttf: both Chinese and English are supported;</li>
<li>arial.ttf: only English is supported.</li>
         * @type {string || null}
         */
        this.FontType = null;

        /**
         * Font size in Npx format where N is a numeric value.
         * @type {string || null}
         */
        this.FontSize = null;

        /**
         * Font color in 0xRRGGBB format. Default value: 0xFFFFFF (white).
         * @type {string || null}
         */
        this.FontColor = null;

        /**
         * Text transparency. Value range: (0, 1]
<li>0: completely transparent</li>
<li>1: completely opaque</li>
Default value: 1.
         * @type {number || null}
         */
        this.FontAlpha = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FontType = 'FontType' in params ? params.FontType : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;
        this.FontAlpha = 'FontAlpha' in params ? params.FontAlpha : null;

    }
}

/**
 * Result information of animated image generating task
 * @class
 */
class MediaAnimatedGraphicsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Address of generated animated image.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Animated image generating template ID. For more information, please see [Animated Image Generating Parameter Template](https://cloud.tencent.com/document/product/266/33481#.3Cspan-id-.3D-.22zdt.22.3E.3C.2Fspan.3E.E8.BD.AC.E5.8A.A8.E5.9B.BE.E6.A8.A1.E6.9D.BF).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Animated image format, such as gif.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Height of animated image in px.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Width of animated image in px.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Bitrate of animated image in bps.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Size of animated image in bytes.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Size = null;

        /**
         * MD5 value of an animated image.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * Start time offset of animated image in video in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of animated image in video in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * DescribeCDNUsageData response structure.
 * @class
 */
class DescribeCDNUsageDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time granularity in minutes.
         * @type {number || null}
         */
        this.DataInterval = null;

        /**
         * CDN statistics.
         * @type {Array.<StatDataItem> || null}
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
        this.DataInterval = 'DataInterval' in params ? params.DataInterval : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new StatDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Result type of animated image generating task
 * @class
 */
class MediaProcessTaskAnimatedGraphicResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of animated image generating task.
         * @type {AnimatedGraphicTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of animated image generating task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaAnimatedGraphicsItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AnimatedGraphicTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaAnimatedGraphicsItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * ModifySnapshotByTimeOffsetTemplate response structure.
 * @class
 */
class ModifySnapshotByTimeOffsetTemplateResponse extends  AbstractModel {
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
 * Result type of intelligent tagging task
 * @class
 */
class AiAnalysisTaskTagResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of intelligent tagging task.
         * @type {AiAnalysisTaskTagInput || null}
         */
        this.Input = null;

        /**
         * Output of intelligent tagging task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiAnalysisTaskTagOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskTagInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskTagOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * SearchMedia response structure.
 * @class
 */
class SearchMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
<li>Maximum value: 5000. If the number of eligible entries is greater than 5,000, this field will return 5,000 instead of the actual number.</li>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of media file information, only including the basic information (BasicInfo).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaInfo> || null}
         */
        this.MediaInfoSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.MediaInfoSet) {
            this.MediaInfoSet = new Array();
            for (let z in params.MediaInfoSet) {
                let obj = new MediaInfo();
                obj.deserialize(params.MediaInfoSet[z]);
                this.MediaInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Result information of intelligent tagging
 * @class
 */
class AiAnalysisTaskTagOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of intelligently generated video tags.
         * @type {Array.<MediaAiAnalysisTagItem> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new MediaAiAnalysisTagItem();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * Information of the intelligent highlight generating result
 * @class
 */
class AiAnalysisTaskHighlightOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of intelligently generated highlights.
         * @type {Array.<MediaAiAnalysisHighlightItem> || null}
         */
        this.HighlightSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HighlightSet) {
            this.HighlightSet = new Array();
            for (let z in params.HighlightSet) {
                let obj = new MediaAiAnalysisHighlightItem();
                obj.deserialize(params.HighlightSet[z]);
                this.HighlightSet.push(obj);
            }
        }

    }
}

/**
 * ProcessMedia request structure.
 * @class
 */
class ProcessMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media file ID, i.e., the globally unique ID of a file in VOD assigned by the VOD backend after successful upload. This field can be obtained through the [video upload completion event notification](/document/product/266/7830) or [VOD Console](https://console.cloud.tencent.com/vod/media).
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Parameter of video processing task.
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * Type parameter of video content audit task.
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * Video content analysis task parameter.
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * Type parameter of video content recognition task.
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * Task flow priority. The higher the value, the higher the priority. Value range: -10–10. If this parameter is left empty, 0 will be used.
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * Notification mode for task flow status change. Valid values: Finish, Change, None. If this parameter is left empty, `Finish` will be used.
         * @type {string || null}
         */
        this.TasksNotifyMode = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * The ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or a blank string is entered, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Reserved field for special purposes.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Full text recognition result.
 * @class
 */
class AiRecognitionTaskOcrFullTextResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input information of full text recognition task.
         * @type {AiRecognitionTaskOcrFullTextResultInput || null}
         */
        this.Input = null;

        /**
         * Output information of full text recognition task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskOcrFullTextResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskOcrFullTextResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskOcrFullTextResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Result type of time point screencapturing task
 * @class
 */
class MediaProcessTaskSnapshotByTimeOffsetResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of time point screencapturing task.
         * @type {SnapshotByTimeOffsetTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of time point screencapturing task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaSnapshotByTimeOffsetItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new SnapshotByTimeOffsetTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaSnapshotByTimeOffsetItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Output of speech keyword recognition.
 * @class
 */
class AiRecognitionTaskAsrWordsResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Speech keyword recognition result set.
         * @type {Array.<AiRecognitionTaskAsrWordsResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskAsrWordsResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * Result type of transcoding task
 * @class
 */
class MediaProcessTaskTranscodeResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of transcoding task.
         * @type {TranscodeTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of transcoding task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaTranscodeItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new TranscodeTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaTranscodeItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Output of video splitting.
 * @class
 */
class AiRecognitionTaskSegmentResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of split video segments.
         * @type {Array.<AiRecognitionTaskSegmentSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskSegmentSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Input parameter type of image sprite generating task
 * @class
 */
class ImageSpriteTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image sprite generating template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Image watermarking template
 * @class
 */
class ImageWatermarkTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark image address.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Watermark width. % and px formats are supported:
<li>If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.</li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Watermark height. % and px formats are supported:
<li>If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px;</li>
`0px` means that `Height` will be proportionally scaled according to the video width.
         * @type {string || null}
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
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * ModifySubAppIdInfo response structure.
 * @class
 */
class ModifySubAppIdInfoResponse extends  AbstractModel {
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
 * Speech keyword recognition control parameter.
 * @class
 */
class AsrWordsConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of speech keyword recognition task. Valid values:
<li>ON: enables speech keyword recognition task;</li>
<li>OFF: disables speech keyword recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Keyword filter tag, which specifies the keyword tag that needs to be returned. If this parameter is left empty, all results will be returned.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * ModifySubAppIdStatus response structure.
 * @class
 */
class ModifySubAppIdStatusResponse extends  AbstractModel {
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
 * SimpleHlsClip request structure.
 * @class
 */
class SimpleHlsClipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL of the HLS video in VOD that needs to be clipped.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Start offset time of clipping in seconds. Default value: 0, which means to clip from the beginning of the video. A negative number indicates how many seconds from the end of the video clipping will start at. For example, -10 means that clipping will start at the 10th second from the end.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End offset time of clipping in seconds. Default value: 0, which means to clip till the end of the video. A negative number indicates how many seconds from the end of the video clipping will end. For example, -10 means that clipping will end at the 10th second from the end.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Adaptive bitrate streaming information
 * @class
 */
class MediaAdaptiveDynamicStreamingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information array of adaptive bitrate streaming.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AdaptiveDynamicStreamingInfoItem> || null}
         */
        this.AdaptiveDynamicStreamingSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AdaptiveDynamicStreamingSet) {
            this.AdaptiveDynamicStreamingSet = new Array();
            for (let z in params.AdaptiveDynamicStreamingSet) {
                let obj = new AdaptiveDynamicStreamingInfoItem();
                obj.deserialize(params.AdaptiveDynamicStreamingSet[z]);
                this.AdaptiveDynamicStreamingSet.push(obj);
            }
        }

    }
}

/**
 * DescribeStorageData request structure.
 * @class
 */
class DescribeStorageDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DeleteImageSpriteTemplate response structure.
 * @class
 */
class DeleteImageSpriteTemplateResponse extends  AbstractModel {
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
 * DescribeContentReviewTemplates response structure.
 * @class
 */
class DescribeContentReviewTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of content audit template details.
         * @type {Array.<ContentReviewTemplateItem> || null}
         */
        this.ContentReviewTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ContentReviewTemplateSet) {
            this.ContentReviewTemplateSet = new Array();
            for (let z in params.ContentReviewTemplateSet) {
                let obj = new ContentReviewTemplateItem();
                obj.deserialize(params.ContentReviewTemplateSet[z]);
                this.ContentReviewTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TESHD parameter configuration.
 * @class
 */
class TEHDConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * TESHD type. Valid values:
<li>TEHD-100: TESHD-100.</li>
If this parameter is left blank, TESHD will not be enabled.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Maximum bitrate, which is valid when `Type` is `TESHD`.
If this parameter is left blank or 0 is entered, there will be no upper limit for bitrate.
         * @type {number || null}
         */
        this.MaxVideoBitrate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MaxVideoBitrate = 'MaxVideoBitrate' in params ? params.MaxVideoBitrate : null;

    }
}

/**
 * Video clipping task information. This structure is only used for tasks initiated by the [ClipVideo](https://cloud.tencent.com/document/product/266/10156) API in v2017.
 * @class
 */
class ClipTask2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video clipping task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * ID of source file for video clipping task.
         * @type {string || null}
         */
        this.SrcFileId = null;

        /**
         * Information of file output by video clipping.
         * @type {ClipFileInfo2017 || null}
         */
        this.FileInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SrcFileId = 'SrcFileId' in params ? params.SrcFileId : null;

        if (params.FileInfo) {
            let obj = new ClipFileInfo2017();
            obj.deserialize(params.FileInfo)
            this.FileInfo = obj;
        }

    }
}

/**
 * Details of an animated image generating template.
 * @class
 */
class AnimatedGraphicsTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an animated image generating template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Template type. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Name of an animated image generating template.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description of an animated image generating template.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Maximum value of the width (or long side) of an animated image in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of an animated image in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Animated image format.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Frame rate.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Image quality.
         * @type {number || null}
         */
        this.Quality = null;

        /**
         * Creation time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Output of video opening and ending credits recognition.
 * @class
 */
class AiRecognitionTaskHeadTailResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Confidence of recognized opening credits. Value range: 0–100.
         * @type {number || null}
         */
        this.HeadConfidence = null;

        /**
         * End time point of video opening credits in seconds.
         * @type {number || null}
         */
        this.HeadTimeOffset = null;

        /**
         * Confidence of recognized closing credits. Value range: 0–100.
         * @type {number || null}
         */
        this.TailConfidence = null;

        /**
         * Start time point of video closing credits in seconds.
         * @type {number || null}
         */
        this.TailTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HeadConfidence = 'HeadConfidence' in params ? params.HeadConfidence : null;
        this.HeadTimeOffset = 'HeadTimeOffset' in params ? params.HeadTimeOffset : null;
        this.TailConfidence = 'TailConfidence' in params ? params.TailConfidence : null;
        this.TailTimeOffset = 'TailTimeOffset' in params ? params.TailTimeOffset : null;

    }
}

/**
 * ModifyImageSpriteTemplate response structure.
 * @class
 */
class ModifyImageSpriteTemplateResponse extends  AbstractModel {
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
 * PullEvents request structure.
 * @class
 */
class PullEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Reserved field for special purposes.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * CreateWatermarkTemplate request structure.
 * @class
 */
class CreateWatermarkTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermarking type. Valid values:
<li>image: image watermark;</li>
<li>text: text watermark;</li>
<li>svg: SVG watermark.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Watermarking template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Origin position. Valid values:
<li>TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text;</li>
<li>TopRight: the origin of coordinates is in the top-right corner of the video, and the origin of the watermark is in the top-right corner of the image or text;</li>
<li>BottomLeft: the origin of coordinates is in the bottom-left corner of the video, and the origin of the watermark is in the bottom-left corner of the image or text;</li>
<li>BottomRight: the origin of coordinates is in the bottom-right corner of the video, and the origin of the watermark is in the bottom-right corner of the image or text.</li>
Default value: TopLeft.
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:
<li>If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width;</li>
<li>If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:
<li>If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height;</li>
<li>If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * Image watermarking template. This field is required when `Type` is `image` and is invalid when `Type` is `text`.
         * @type {ImageWatermarkInput || null}
         */
        this.ImageTemplate = null;

        /**
         * Text watermarking template. This field is required when `Type` is `text` and is invalid when `Type` is `image`.
         * @type {TextWatermarkTemplateInput || null}
         */
        this.TextTemplate = null;

        /**
         * SVG watermarking template. This field is required when `Type` is `svg` and is invalid when `Type` is `image` or `text`.
         * @type {SvgWatermarkInput || null}
         */
        this.SvgTemplate = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new ImageWatermarkInput();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

        if (params.TextTemplate) {
            let obj = new TextWatermarkTemplateInput();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }

        if (params.SvgTemplate) {
            let obj = new SvgWatermarkInput();
            obj.deserialize(params.SvgTemplate)
            this.SvgTemplate = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Release on WeChat Mini Program task information
 * @class
 */
class WechatMiniProgramPublishTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task status. Valid values:
WAITING: waiting;
PROCESSING: processing;
FINISH: completed.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code
<li>0: success;</li>
<li>Other values: failure.</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * ID of published video file.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * ID of the transcoding template corresponding to the published video. 0 represents the source video.
         * @type {number || null}
         */
        this.SourceDefinition = null;

        /**
         * Status of video release on WeChat Mini Program. Valid values:
<li>Pass: successfully published;</li>
<li>Failed: failed to publish;</li>
<li>Rejected: rejected.</li>
         * @type {string || null}
         */
        this.PublishResult = null;

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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.SourceDefinition = 'SourceDefinition' in params ? params.SourceDefinition : null;
        this.PublishResult = 'PublishResult' in params ? params.PublishResult : null;

    }
}

/**
 * Media file composing task information
 * @class
 */
class ComposeMediaTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task flow status. Valid values:
<li>PROCESSING: processing;</li>
<li>FINISH: completed.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code
<li>0: success;</li>
<li>Other values: failure.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of media file composing task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ComposeMediaTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of media file composing task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ComposeMediaTaskOutput || null}
         */
        this.Output = null;

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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new ComposeMediaTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new ComposeMediaTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Video transcoding playback information (v2017)
 * @class
 */
class TranscodePlayInfo2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback address.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Transcoding specification ID. For more information, please see [Transcoding Parameter Template](https://cloud.tencent.com/document/product/266/33478#.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF).
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Sum of the average bitrate of a video stream and that of an audio stream in bps.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Maximum value of the height of a video stream in px.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Maximum value of the width of a video stream in px.
         * @type {number || null}
         */
        this.Width = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;

    }
}

/**
 * Input of media file composing task.
 * @class
 */
class ComposeMediaTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of input media tracks, i.e., information of multiple tracks composed of video, audio, image, and other materials.
         * @type {Array.<MediaTrack> || null}
         */
        this.Tracks = null;

        /**
         * Canvas used for composing video file.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Canvas || null}
         */
        this.Canvas = null;

        /**
         * Information of output media file.
         * @type {ComposeMediaOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tracks) {
            this.Tracks = new Array();
            for (let z in params.Tracks) {
                let obj = new MediaTrack();
                obj.deserialize(params.Tracks[z]);
                this.Tracks.push(obj);
            }
        }

        if (params.Canvas) {
            let obj = new Canvas();
            obj.deserialize(params.Canvas)
            this.Canvas = obj;
        }

        if (params.Output) {
            let obj = new ComposeMediaOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Animated image generating task type
 * @class
 */
class AnimatedGraphicTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Animated image generating template ID
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Start time of animated image in video in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time of animated image in video in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * AI-based intelligent analysis template details
 * @class
 */
class AIAnalysisTemplateItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of intelligent analysis template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Intelligent analysis template name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Intelligent analysis template description.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Control parameter of intelligent categorization task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ClassificationConfigureInfo || null}
         */
        this.ClassificationConfigure = null;

        /**
         * Control parameter of intelligent tagging task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TagConfigureInfo || null}
         */
        this.TagConfigure = null;

        /**
         * Control parameter of intelligent cover generating task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CoverConfigureInfo || null}
         */
        this.CoverConfigure = null;

        /**
         * Control parameter of intelligent frame-specific tagging task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {FrameTagConfigureInfo || null}
         */
        this.FrameTagConfigure = null;

        /**
         * Control parameter of an intelligent highlight generating task.
         * @type {HighlightsConfigureInfo || null}
         */
        this.HighlightConfigure = null;

        /**
         * Creation time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.ClassificationConfigure) {
            let obj = new ClassificationConfigureInfo();
            obj.deserialize(params.ClassificationConfigure)
            this.ClassificationConfigure = obj;
        }

        if (params.TagConfigure) {
            let obj = new TagConfigureInfo();
            obj.deserialize(params.TagConfigure)
            this.TagConfigure = obj;
        }

        if (params.CoverConfigure) {
            let obj = new CoverConfigureInfo();
            obj.deserialize(params.CoverConfigure)
            this.CoverConfigure = obj;
        }

        if (params.FrameTagConfigure) {
            let obj = new FrameTagConfigureInfo();
            obj.deserialize(params.FrameTagConfigure)
            this.FrameTagConfigure = obj;
        }

        if (params.HighlightConfigure) {
            let obj = new HighlightsConfigureInfo();
            obj.deserialize(params.HighlightConfigure)
            this.HighlightConfigure = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Single-object recognition result.
 * @class
 */
class AiRecognitionTaskObjectResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of recognized object.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * List of segments that contain an object.
         * @type {Array.<AiRecognitionTaskObjectSeqmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskObjectSeqmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Information of time point screenshot in VOD file
 * @class
 */
class MediaSnapshotByTimeOffsetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information set of time point screenshots with a specified specification. Currently, there can be only one set of screenshots for each specification.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaSnapshotByTimeOffsetItem> || null}
         */
        this.SnapshotByTimeOffsetSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SnapshotByTimeOffsetSet) {
            this.SnapshotByTimeOffsetSet = new Array();
            for (let z in params.SnapshotByTimeOffsetSet) {
                let obj = new MediaSnapshotByTimeOffsetItem();
                obj.deserialize(params.SnapshotByTimeOffsetSet[z]);
                this.SnapshotByTimeOffsetSet.push(obj);
            }
        }

    }
}

/**
 * DescribeImageSpriteTemplates request structure.
 * @class
 */
class DescribeImageSpriteTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of image sprite generating templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Paged offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Template type filter. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Video timestamp information
 * @class
 */
class MediaKeyFrameDescItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset time of video timestamp in seconds.
         * @type {number || null}
         */
        this.TimeOffset = null;

        /**
         * Content string of timestamp containing 1–128 characters.
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeOffset = 'TimeOffset' in params ? params.TimeOffset : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * ConfirmEvents request structure.
 * @class
 */
class ConfirmEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event handler, i.e., the `EventSet. EventHandle` field in the output parameters of the [event notification pulling](/document/product/266/33433) API.
Array length limit: 16.
         * @type {Array.<string> || null}
         */
        this.EventHandles = null;

        /**
         * Reserved field for special purposes.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventHandles = 'EventHandles' in params ? params.EventHandles : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * ModifySubAppIdStatus request structure.
 * @class
 */
class ModifySubAppIdStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subapplication ID.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * Subapplication status. Valid values:
<li>On: enabled</li>
<li>Off: disabled</li>
         * @type {string || null}
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateWatermarkTemplate response structure.
 * @class
 */
class CreateWatermarkTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of watermarking template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Watermark image address. This field is valid only when `Type` is `image`.
         * @type {string || null}
         */
        this.ImageUrl = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Terrorism information
 * @class
 */
class AiReviewTerrorismTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of detected terrorism information in a video between 0 and 100.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for detected terrorism information. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Tag of detected terrorism information in a video. Valid values:
<li>guns: weapons and guns.</li>
<li>crowd: crowd.</li>
<li>police: police force.</li>
<li>bloody: bloody scenes.</li>
<li>banners: terrorism flags.</li>
<li>militant: militants.</li>
<li>explosion: explosions and fires.</li>
<li>terrorists: terrorists.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * List of video segments that contain the detected terrorism information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaContentReviewSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * ResetProcedureTemplate response structure.
 * @class
 */
class ResetProcedureTemplateResponse extends  AbstractModel {
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
 * Control parameter of prohibited information detection task
 * @class
 */
class ProhibitedConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of prohibited information detection in speech.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ProhibitedAsrReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of prohibited information detection in text.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ProhibitedOcrReviewTemplateInfo || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AsrReviewInfo) {
            let obj = new ProhibitedAsrReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new ProhibitedOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * OCR-detected terrorism information in text
 * @class
 */
class AiReviewTerrorismOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of OCR-detected terrorism information in text between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for OCR-detected terrorism information in text. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of video segments that contain OCR-detected terrorism information in text.
         * @type {Array.<MediaContentReviewOcrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Intelligent analysis result
 * @class
 */
class AiAnalysisResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type. Valid values:
<li>Classification: intelligent categorization</li>
<li>Cover: intelligent cover generating</li>
<li>Tag: intelligent tagging</li>
<li>FrameTag: intelligent frame tagging</li>
<li>Highlight: intelligent highlight generating</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Query result of intelligent categorization task in video content analysis, which is valid if task type is `Classification`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiAnalysisTaskClassificationResult || null}
         */
        this.ClassificationTask = null;

        /**
         * Query result of intelligent cover generating task in video content analysis, which is valid if task type is `Cover`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiAnalysisTaskCoverResult || null}
         */
        this.CoverTask = null;

        /**
         * Query result of intelligent tagging task in video content analysis, which is valid if task type is `Tag`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiAnalysisTaskTagResult || null}
         */
        this.TagTask = null;

        /**
         * Query result of intelligent frame-specific tagging task in video content analysis, which is valid if task type is `FrameTag`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiAnalysisTaskFrameTagResult || null}
         */
        this.FrameTagTask = null;

        /**
         * Query result of an intelligent highlight generating task in video content analysis, which is valid when task type is `Highlight`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiAnalysisTaskHighlightResult || null}
         */
        this.HighlightTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.ClassificationTask) {
            let obj = new AiAnalysisTaskClassificationResult();
            obj.deserialize(params.ClassificationTask)
            this.ClassificationTask = obj;
        }

        if (params.CoverTask) {
            let obj = new AiAnalysisTaskCoverResult();
            obj.deserialize(params.CoverTask)
            this.CoverTask = obj;
        }

        if (params.TagTask) {
            let obj = new AiAnalysisTaskTagResult();
            obj.deserialize(params.TagTask)
            this.TagTask = obj;
        }

        if (params.FrameTagTask) {
            let obj = new AiAnalysisTaskFrameTagResult();
            obj.deserialize(params.FrameTagTask)
            this.FrameTagTask = obj;
        }

        if (params.HighlightTask) {
            let obj = new AiAnalysisTaskHighlightResult();
            obj.deserialize(params.HighlightTask)
            this.HighlightTask = obj;
        }

    }
}

/**
 * DescribeAIAnalysisTemplates request structure.
 * @class
 */
class DescribeAIAnalysisTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of video content analysis templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Transcoding information of VOD file
 * @class
 */
class MediaTranscodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information set of transcoding with each specification. Each element represents a result of transcoding with a specification.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaTranscodeItem> || null}
         */
        this.TranscodeSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TranscodeSet) {
            this.TranscodeSet = new Array();
            for (let z in params.TranscodeSet) {
                let obj = new MediaTranscodeItem();
                obj.deserialize(params.TranscodeSet[z]);
                this.TranscodeSet.push(obj);
            }
        }

    }
}

/**
 * Text keyword recognition result.
 * @class
 */
class AiRecognitionTaskOcrWordsResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Text keyword.
         * @type {string || null}
         */
        this.Word = null;

        /**
         * List of segments that contain a text keyword.
         * @type {Array.<AiRecognitionTaskOcrWordsSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskOcrWordsSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * DeleteSampleSnapshotTemplate response structure.
 * @class
 */
class DeleteSampleSnapshotTemplateResponse extends  AbstractModel {
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
 * Input type of intelligent tagging task
 * @class
 */
class AiAnalysisTaskTagInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intelligent video tagging template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Segment information of media track
 * @class
 */
class MediaTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Segment type. Valid values:
<li>Video: video segment.</li>
<li>Audio: audio segment.</li>
<li>Sticker: sticker segment.</li>
<li>Transition: transition.</li>
<li>Empty: empty segment.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Video segment, which is valid if `Type` is `Video`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {VideoTrackItem || null}
         */
        this.VideoItem = null;

        /**
         * Audio segment, which is valid if `Type` is `Audio`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AudioTrackItem || null}
         */
        this.AudioItem = null;

        /**
         * Sticker segment, which is valid if `Type` is `Sticker`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {StickerTrackItem || null}
         */
        this.StickerItem = null;

        /**
         * Transition, which is valid if `Type` is `Transition`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaTransitionItem || null}
         */
        this.TransitionItem = null;

        /**
         * Empty segment, which is valid if `Type` is `Empty`. It is used as placeholder on time axis. <li>If you want a period of silence between two audio segments, you can use `EmptyTrackItem` to hold the place.</li>
<li>Use `EmptyTrackItem` as a placeholder to locate an item.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {EmptyTrackItem || null}
         */
        this.EmptyItem = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.VideoItem) {
            let obj = new VideoTrackItem();
            obj.deserialize(params.VideoItem)
            this.VideoItem = obj;
        }

        if (params.AudioItem) {
            let obj = new AudioTrackItem();
            obj.deserialize(params.AudioItem)
            this.AudioItem = obj;
        }

        if (params.StickerItem) {
            let obj = new StickerTrackItem();
            obj.deserialize(params.StickerItem)
            this.StickerItem = obj;
        }

        if (params.TransitionItem) {
            let obj = new MediaTransitionItem();
            obj.deserialize(params.TransitionItem)
            this.TransitionItem = obj;
        }

        if (params.EmptyItem) {
            let obj = new EmptyTrackItem();
            obj.deserialize(params.EmptyItem)
            this.EmptyItem = obj;
        }

    }
}

/**
 * DescribeStorageDetails response structure.
 * @class
 */
class DescribeStorageDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage statistics. One data entry per minute/hour/day.
         * @type {Array.<StatDataItem> || null}
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
                let obj = new StatDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PullEvents response structure.
 * @class
 */
class PullEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of events.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<EventContent> || null}
         */
        this.EventSet = null;

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

        if (params.EventSet) {
            this.EventSet = new Array();
            for (let z in params.EventSet) {
                let obj = new EventContent();
                obj.deserialize(params.EventSet[z]);
                this.EventSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Input type of object recognition task.
 * @class
 */
class AiRecognitionTaskObjectResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Object recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Information of output video stream
 * @class
 */
class OutputVideoStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video stream encoder. Valid values:
<li>libx264: H.264</li>
Default value: libx264.
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Video frame rate in Hz. Value range: [0, 60].
Default value: 0, which means that the value is the same as the video frame rate of the first video segment in the first video track.
         * @type {number || null}
         */
        this.Fps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;

    }
}

/**
 * Task flow template details
 * @class
 */
class ProcedureTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Type of a task flow template. Valid values:
<li>Preset: preset task flow template;</li>
<li>Custom: custom task flow template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Parameter of video processing task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * Parameter of AI-based content audit task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * Parameter of AI-based content analysis task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * Type parameter of AI-based content recognition task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * Parameter of a release on WeChat Mini Program task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {WechatMiniProgramPublishTaskInput || null}
         */
        this.MiniProgramPublishTask = null;

        /**
         * Creation time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }

        if (params.MiniProgramPublishTask) {
            let obj = new WechatMiniProgramPublishTaskInput();
            obj.deserialize(params.MiniProgramPublishTask)
            this.MiniProgramPublishTask = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Result type of terrorism information detection task in content audit
 * @class
 */
class AiReviewTaskTerrorismResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of terrorism information detection task in content audit.
         * @type {AiReviewTerrorismTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of terrorism information detection task in content audit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTerrorismTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewTerrorismTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewTerrorismTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Suspected segment identified during ASR-based speech audit in content audit
 * @class
 */
class MediaContentReviewAsrTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of suspected segment in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of suspected segment in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Confidence of suspected segment.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for suspected segment audit. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of suspected keywords.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.KeywordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.KeywordSet = 'KeywordSet' in params ? params.KeywordSet : null;

    }
}

/**
 * Suspected politically sensitive segment identified in content audit
 * @class
 */
class MediaContentReviewPoliticalSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of a suspected segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a suspected segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Score of a suspected politically sensitive segment.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for politically sensitive information detection of a suspected segment. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Name of a politically sensitive figure or violating photo.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Tag of politically sensitive information detection result of a suspected segment.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * URL of a suspected image (which will not be permanently stored
 and will be deleted after `PicUrlExpireTime`).
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Zone coordinates (at the pixel level) of a politically sensitive figure or violating photo: [x1, y1, x2, y2], i.e., the coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

        /**
         * This field has been disused. Please use `PicUrlExpireTime`.
         * @type {number || null}
         */
        this.PicUrlExpireTimeStamp = null;

        /**
         * Expiration time of suspected image URL in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.PicUrlExpireTimeStamp = 'PicUrlExpireTimeStamp' in params ? params.PicUrlExpireTimeStamp : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * CreateSnapshotByTimeOffsetTemplate response structure.
 * @class
 */
class CreateSnapshotByTimeOffsetTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a time point screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Input parameter of image watermarking template
 * @class
 */
class ImageWatermarkInputForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * String generated by [Base64-encoding](https://tools.ietf.org/html/rfc4648) a watermark image. JPEG and PNG images are supported.
         * @type {string || null}
         */
        this.ImageContent = null;

        /**
         * Watermark width. % and px formats are supported:
<li>If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.</li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Watermark height. % and px formats are supported:
<li>If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.</li>
`0px` means that `Height` will be proportionally scaled according to the video width.
         * @type {string || null}
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
        this.ImageContent = 'ImageContent' in params ? params.ImageContent : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * Task type of intelligent content audit
 * @class
 */
class AiContentReviewTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video content audit template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Control parameter of intelligent categorization task
 * @class
 */
class ClassificationConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent categorization task. Valid values:
<li>ON: enables intelligent categorization task;</li>
<li>OFF: disables intelligent categorization task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * ProcessMediaByUrl response structure.
 * @class
 */
class ProcessMediaByUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * Details of an image sprite generating template
 * @class
 */
class ImageSpriteTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an image sprite generating template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Template type. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Name of an image sprite generating template.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Maximum value of the width (or long side) of a subimage in an image sprite in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a subimage in an image sprite in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Sampling type.
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval.
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * Subimage row count of an image sprite.
         * @type {number || null}
         */
        this.RowCount = null;

        /**
         * Subimage column count of an image sprite.
         * @type {number || null}
         */
        this.ColumnCount = null;

        /**
         * Creation time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * Full text recognition segment.
 * @class
 */
class AiRecognitionTaskOcrFullTextSegmentTextItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Confidence of recognized segment. Value range: 0–100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Zone coordinates of recognition result. The array contains four elements: [x1,y1,x2,y2], i.e., the horizontal and vertical coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

        /**
         * Recognized text.
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * Input parameter type of time point screencapturing task
 * @class
 */
class SnapshotByTimeOffsetTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time point screencapturing template ID.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * List of time points for screencapturing in <font color=red>milliseconds</font>.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.TimeOffsetSet = null;

        /**
         * List of up to 10 image or text watermarks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.TimeOffsetSet = 'TimeOffsetSet' in params ? params.TimeOffsetSet : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

    }
}

/**
 * Control parameter of video splitting recognition task
 * @class
 */
class SegmentConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of video splitting recognition task. Valid values:
<li>ON: enables intelligent video splitting recognition task;</li>
<li>OFF: disables intelligent video splitting recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Task statistics, including number of tasks and usage.
 * @class
 */
class TaskStatDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of data time range in [ISO date format](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F). For example, if the time granularity is 1-day, `2018-12-01T00:00:00+08:00` represents the time range between December 1, 2018 (inclusive) and December 2, 2018 (not inclusive).
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Number of tasks.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Task usage.
         * @type {number || null}
         */
        this.Usage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Usage = 'Usage' in params ? params.Usage : null;

    }
}

/**
 * OCR-detected porn information in text
 * @class
 */
class AiReviewPornOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of OCR-detected porn information in text between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for OCR-detected porn information in text. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of video segments that contain the OCR-detected porn information in text.
         * @type {Array.<MediaContentReviewOcrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * ApplyUpload request structure.
 * @class
 */
class ApplyUploadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media type. For the detailed valid values, please see [Upload Overview](/document/product/266/9760#.E6.96.87.E4.BB.B6.E7.B1.BB.E5.9E.8B).
         * @type {string || null}
         */
        this.MediaType = null;

        /**
         * Media name.
         * @type {string || null}
         */
        this.MediaName = null;

        /**
         * Cover type. For the detailed valid values, please see [Upload Overview](/document/product/266/9760#.E6.96.87.E4.BB.B6.E7.B1.BB.E5.9E.8B).
         * @type {string || null}
         */
        this.CoverType = null;

        /**
         * Subsequent task operation on a media file, i.e., after a media file is uploaded, task flow operations will be initiated automatically. This parameter value is a task flow template name. VOD supports [creating task flow templates](/document/product/266/33819) and naming the templates.
         * @type {string || null}
         */
        this.Procedure = null;

        /**
         * Expiration time of a media file in ISO 8601 format. For more information, please see [Notes on ISO Date Format](/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Specifies upload region. This is only applicable to users that have special requirements for the upload region.
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * Category ID, which is used to categorize the media for management. A category can be created and its ID can be obtained by using the [category creating](/document/product/266/7812) API.
<li>Default value: 0, which means "Other".</li>
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Source context, which is used to pass through the user request information. The [upload callback](/document/product/266/7830) API will return the value of this field. It can contain up to 250 characters.
         * @type {string || null}
         */
        this.SourceContext = null;

        /**
         * Session context, which is used to pass through the user request information. If the `Procedure` parameter is specified, the [task flow status change callback](/document/product/266/9636) API will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaType = 'MediaType' in params ? params.MediaType : null;
        this.MediaName = 'MediaName' in params ? params.MediaName : null;
        this.CoverType = 'CoverType' in params ? params.CoverType : null;
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.SourceContext = 'SourceContext' in params ? params.SourceContext : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * CreateSampleSnapshotTemplate response structure.
 * @class
 */
class CreateSampleSnapshotTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a sampled screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Input type of an intelligent highlight generating task
 * @class
 */
class AiAnalysisTaskHighlightInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of an intelligent highlight generating template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Control parameter of prohibited information detection in speech task
 * @class
 */
class ProhibitedAsrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of prohibited information detection in speech task. Valid values:
<li>ON: enables prohibited information detection in speech task;</li>
<li>OFF: disables prohibited information detection in speech task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Basic information of VOD media file
 * @class
 */
class MediaBasicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media filename.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Media file description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time of media file in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last update time of media file (by an operation that triggers updating of media file information such as modifying video attributes or initiating video processing) in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Expiration time of media file in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I). After the expiration, the media file and its related resources (such as transcoding results and image sprites) will be permanently deleted. `9999-12-31T23:59:59Z` means "never expire".
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Category ID of media file.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Category name of media file.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClassName = null;

        /**
         * Category path to media file separated by "-", such as "new first-level category - new second-level category".
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * Cover image address of media file.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * Media file container, such as mp4 and flv.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * URL of source media file.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MediaUrl = null;

        /**
         * Source information of media file.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaSourceData || null}
         */
        this.SourceInfo = null;

        /**
         * Storage region of media file, such as ap-guangzhou. For more information, please see [Region List](https://cloud.tencent.com/document/api/213/15692#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * Tag information of media file.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * Unique ID of LVB recording file
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.MediaUrl = 'MediaUrl' in params ? params.MediaUrl : null;

        if (params.SourceInfo) {
            let obj = new MediaSourceData();
            obj.deserialize(params.SourceInfo)
            this.SourceInfo = obj;
        }
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.Vid = 'Vid' in params ? params.Vid : null;

    }
}

/**
 * Input parameter type of ASR-based politically sensitive information detection in speech task in content audit
 * @class
 */
class AiReviewPoliticalAsrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Politically sensitive information detection template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * PullUpload request structure.
 * @class
 */
class PullUploadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL of the media to be pulled. Media files in HLS and Dash formats cannot be pulled currently.
For the supported extensions, please see [Media Types](https://cloud.tencent.com/document/product/266/9760#.E5.AA.92.E4.BD.93.E7.B1.BB.E5.9E.8B).
         * @type {string || null}
         */
        this.MediaUrl = null;

        /**
         * Media name.
         * @type {string || null}
         */
        this.MediaName = null;

        /**
         * URL of video cover to be pulled. Only gif, jpeg, and png formats are supported.
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * Subsequent task for media. For more information, please see [Specifying Task Flow After Upload](https://cloud.tencent.com/document/product/266/9759).
         * @type {string || null}
         */
        this.Procedure = null;

        /**
         * Expiration time of media file in ISO 8601 format. For more information, please see [Notes on ISO Date Format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Specifies upload region. This is only applicable to users that have special requirements for the upload region (currently, only Beijing, Shanghai, and Chongqing regions are supported).
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * Category ID, which is used to categorize the media for management. A category can be created and its ID can be obtained by using the [CreateClass](https://cloud.tencent.com/document/product/266/7812) API.
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * The source context which is used to pass through the user request information. After `Procedure` is specified, the task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * The ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or a blank string is entered, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Reserved field for special purposes.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaUrl = 'MediaUrl' in params ? params.MediaUrl : null;
        this.MediaName = 'MediaName' in params ? params.MediaName : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Sort by criterion
 * @class
 */
class SortBy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sort by field
         * @type {string || null}
         */
        this.Field = null;

        /**
         * Sorting order. Valid values: Asc (ascending), Desc (descending)
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * Result information of intelligent tagging
 * @class
 */
class MediaAiAnalysisTagItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag name.
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * Confidence of tag between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * Transcoding template details
 * @class
 */
class TranscodeTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of transcoding template.
         * @type {string || null}
         */
        this.Definition = null;

        /**
         * Container. Valid values: mp4, flv, hls, mp3, flac, ogg.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Transcoding template name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Template type. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Whether to remove video data. Valid values:
<li>0: retain;</li>
<li>1: remove.</li>
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * Whether to remove audio data. Valid values:
<li>0: retain;</li>
<li>1: remove.</li>
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * Video stream configuration parameter. This field is valid only when `RemoveVideo` is 0.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {VideoTemplateInfo || null}
         */
        this.VideoTemplate = null;

        /**
         * Audio stream configuration parameter. This field is valid only when `RemoveAudio` is 0.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AudioTemplateInfo || null}
         */
        this.AudioTemplate = null;

        /**
         * TESHD transcoding parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TEHDConfig || null}
         */
        this.TEHDConfig = null;

        /**
         * Container filter. Valid values:
<li>Video: video container that can contain both video stream and audio stream;</li>
<li>PureAudio: audio container that can contain only audio stream.</li>
         * @type {string || null}
         */
        this.ContainerType = null;

        /**
         * Creation time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfig();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }
        this.ContainerType = 'ContainerType' in params ? params.ContainerType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeCDNUsageData request structure.
 * @class
 */
class DescribeCDNUsageDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start date in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End date in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I). The end date must be after the start date.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * CDN statistics type. Valid values:
<li>Flux: traffic in bytes.</li>
<li>Bandwidth: bandwidth in bps.</li>
         * @type {string || null}
         */
        this.DataType = null;

        /**
         * Time granularity of usage data in minutes. Valid values:
<li>5: 5-minute granularity, which returns the details at the 5-minute granularity within the specified time range.</li>
<li>60: 1-hour granularity, which returns the details at the 1-hour granularity within the specified time range.</li>
<li>1440: 1-day granularity, which returns the details at the 1-day granularity within the specified time range.</li>
Default value: 1440. Data at the 1-day granularity will be returned.
When the value of this field is 1, the total usage of all subapplications (including primary application) are queried by an admin.
         * @type {number || null}
         */
        this.DataInterval = null;

        /**
         * List of domain names. The usage data of up to 20 domain names can be queried at a time. You can specify multiple domain names and query their combined usage data. The usage data of all domain names will be returned by default.
         * @type {Array.<string> || null}
         */
        this.DomainNames = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
When the value of this field is 1, the total usage of all subapplications (including primary application) are queried by an admin. In this case, only 1-day granularity is supported.
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.DataType = 'DataType' in params ? params.DataType : null;
        this.DataInterval = 'DataInterval' in params ? params.DataInterval : null;
        this.DomainNames = 'DomainNames' in params ? params.DomainNames : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DescribeAudioTrackTemplates response structure.
 * @class
 */
class DescribeAudioTrackTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of audio track template details.
         * @type {Array.<AudioTrackTemplateInfo> || null}
         */
        this.AudioTrackTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AudioTrackTemplateSet) {
            this.AudioTrackTemplateSet = new Array();
            for (let z in params.AudioTrackTemplateSet) {
                let obj = new AudioTrackTemplateInfo();
                obj.deserialize(params.AudioTrackTemplateSet[z]);
                this.AudioTrackTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Control parameter of porn information detection in text task
 * @class
 */
class PornOcrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of porn information detection in text task. Valid values:
<li>ON: enables porn information detection in text task;</li>
<li>OFF: disables porn information detection in text task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Result type of ASR-based politically sensitive information detection in speech task in content audit
 * @class
 */
class AiReviewTaskPoliticalAsrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of ASR-based politically sensitive information detection in speech task in content audit.
         * @type {AiReviewPoliticalAsrTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of ASR-based politically sensitive information detection in speech task in content audit.
         * @type {AiReviewPoliticalAsrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPoliticalAsrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPoliticalAsrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Speech recognition segment.
 * @class
 */
class AiRecognitionTaskAsrWordsSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of recognized segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of recognition segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Confidence of recognized segment. Value range: 0–100.
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * DescribeReviewDetails request structure.
 * @class
 */
class DescribeReviewDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start date in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End date in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I). The end date must be after the start date.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Input parameter type of ASR-based prohibited information detection in speech task in content audit
 * @class
 */
class AiReviewProhibitedAsrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prohibited information detection template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Suspected porn/terrorism segment identified in content audit
 * @class
 */
class MediaContentReviewSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of a suspected segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a suspected segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Score of a suspected porn segment.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Tag of porn information detection result of a suspected segment.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Suggestion for porn information detection of a suspected segment. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * URL of a suspected image (which will not be permanently stored
 and will be deleted after `PicUrlExpireTime`).
         * @type {string || null}
         */
        this.Url = null;

        /**
         * This field has been disused. Please use `PicUrlExpireTime`.
         * @type {number || null}
         */
        this.PicUrlExpireTimeStamp = null;

        /**
         * Expiration time of suspected image URL in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTimeStamp = 'PicUrlExpireTimeStamp' in params ? params.PicUrlExpireTimeStamp : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * Control parameter of terrorism information detection in text task
 * @class
 */
class TerrorismOcrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of terrorism information detection in text task. Valid values:
<li>ON: enables terrorism information detection in text task;</li>
<li>OFF: disables terrorism information detection in text task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Result type of porn information detection task in content audit
 * @class
 */
class AiReviewTaskPornResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of porn information detection task in content audit.
         * @type {AiReviewPornTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of porn information detection task in content audit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewPornTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPornTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPornTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Output of intelligent object recognition.
 * @class
 */
class AiRecognitionTaskObjectResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result set of intelligent object recognition.
         * @type {Array.<AiRecognitionTaskObjectResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskObjectResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * ASR-detected prohibited information in speech
 * @class
 */
class AiReviewProhibitedAsrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of ASR-detected prohibited information in speech between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for ASR-detected prohibited information in speech. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of video segments that contain the ASR-detected prohibited information in speech.
         * @type {Array.<MediaContentReviewAsrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewAsrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * CreateClass response structure.
 * @class
 */
class CreateClassResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Category ID
         * @type {number || null}
         */
        this.ClassId = null;

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
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSampleSnapshotTemplates request structure.
 * @class
 */
class DescribeSampleSnapshotTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of sampled screencapturing templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Paged offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Template type filter. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Control parameter of intelligent cover generating task
 * @class
 */
class CoverConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent cover generating task. Valid values:
<li>ON: enables intelligent cover generating task;</li>
<li>OFF: disables intelligent cover generating task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Details of a sampled screencapturing template
 * @class
 */
class SampleSnapshotTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a sampled screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Template type. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Name of a sampled screencapturing template.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Maximum value of the width (or long side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Image format.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Sampled screencapturing type.
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval.
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * Creation time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
<li>white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.</li>
<li>gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * Control parameter of custom text audit task
 * @class
 */
class UserDefineOcrTextReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of custom text audit task. Valid values:
<li>ON: enables custom text audit task;</li>
<li>OFF: disables custom text audit task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Custom text filter tag. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. To use the tag filtering feature, you need to add the corresponding tag when adding materials for custom text keywords.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Adaptive bitrate streaming parameter template
 * @class
 */
class AdaptiveStreamTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video parameter information.
         * @type {VideoTemplateInfo || null}
         */
        this.Video = null;

        /**
         * Audio parameter information.
         * @type {AudioTemplateInfo || null}
         */
        this.Audio = null;

        /**
         * Whether to remove audio stream. Valid values:
<li>0: no,</li>
<li>1: yes.</li>
         * @type {number || null}
         */
        this.RemoveAudio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Video) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.Video)
            this.Video = obj;
        }

        if (params.Audio) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.Audio)
            this.Audio = obj;
        }
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

    }
}

/**
 * Input parameter type of transcoding task
 * @class
 */
class TranscodeTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video transcoding template ID.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * List of up to 10 image or text watermarks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

        /**
         * List of blurs. Up to 10 ones can be supported.
         * @type {Array.<MosaicInput> || null}
         */
        this.MosaicSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

        if (params.MosaicSet) {
            this.MosaicSet = new Array();
            for (let z in params.MosaicSet) {
                let obj = new MosaicInput();
                obj.deserialize(params.MosaicSet[z]);
                this.MosaicSet.push(obj);
            }
        }

    }
}

/**
 * Release on WeChat task information
 * @class
 */
class WechatPublishTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task status. Valid values:
WAITING: waiting;
PROCESSING: processing;
FINISH: completed.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code
<li>0: success;</li>
<li>Other values: failure.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * ID of published video file.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Release on WeChat template ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * ID of the transcoding template corresponding to the published video. 0 represents the source video.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SourceDefinition = null;

        /**
         * Release on WeChat status. Valid values:
<li>FAIL: failure;</li>
<li>SUCCESS: success;</li>
<li>AUDITNOTPASS: rejected</li>
<li>NOTTRIGGERED: release on WeChat not initiated yet.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WechatStatus = null;

        /**
         * WeChat `Vid`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WechatVid = null;

        /**
         * WeChat address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WechatUrl = null;

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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SourceDefinition = 'SourceDefinition' in params ? params.SourceDefinition : null;
        this.WechatStatus = 'WechatStatus' in params ? params.WechatStatus : null;
        this.WechatVid = 'WechatVid' in params ? params.WechatVid : null;
        this.WechatUrl = 'WechatUrl' in params ? params.WechatUrl : null;

    }
}

/**
 * Information of file generated by video clipping (v2017)
 * @class
 */
class ClipFileInfo2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code
<li>0: success;</li>
<li>Other values: failure.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Output target file ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Output target file address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * Output target file type.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

    }
}

/**
 * Statistics
 * @class
 */
class StatDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of data time range in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I). For example, if the time granularity is 1-day, `2018-12-01T00:00:00+08:00` represents the time range between December 1, 2018 (inclusive) and December 2, 2018 (not inclusive).
<li>For data at hourly level, `2019-08-22T00:00:00+08:00` indicates the statistics between 00:00 and 01:00 AM on August 22, 2019.</li>
<li>For data at daily level, `2019-08-22T00:00:00+08:00` indicates statistics on August 22, 2019.</li>
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Data size.
<li>Storage capacity in bytes.</li>
<li>Transcoding duration in seconds.</li>
<li>Traffic in bytes.</li>
<li>Bandwidth in bps.</li>
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
 * Source file information
 * @class
 */
class MediaSourceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source category of media file:
<li>Record: recording, such as LVB recording and LVB time shifting recording.</li>
<li>Upload: upload, such as pull for upload, upload from server, and UCG upload from client.</li>
<li>VideoProcessing: video processing, such as video splicing and video clipping.</li>
<li>Unknown: unknown source.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * Field passed through when a file is created.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.SourceContext = 'SourceContext' in params ? params.SourceContext : null;

    }
}

/**
 * PushUrlCache request structure.
 * @class
 */
class PushUrlCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of prefetched URLs. Up to 20 ones can be specified at a time.
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * CreateAIAnalysisTemplate response structure.
 * @class
 */
class CreateAIAnalysisTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of video content analysis template.
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Control parameter of video opening and ending credits recognition task.
 * @class
 */
class HeadTailConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of video opening and ending credits recognition task. Valid values:
<li>ON: enables video opening and ending credits recognition task;</li>
<li>OFF: disables video opening and ending credits recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Event notification content, where TranscodeCompleteEvent, ConcatCompleteEvent, ClipCompleteEvent, CreateImageSpriteCompleteEvent, and SnapshotByTimeOffsetCompleteEvent are event notifications for tasks that are initiated by v2017-compatible APIs.
 * @class
 */
class EventContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event handler. The caller must call `ConfirmEvents` to confirm that the message has been received, and the confirmation is valid for 30 seconds. After the confirmation expires, the event can be obtained again.
         * @type {string || null}
         */
        this.EventHandle = null;

        /**
         * <b>Supported event type:</b>
<li>NewFileUpload: video upload completion;</li>
<li>ProcedureStateChanged: task flow status change;</li>
<li>FileDeleted: video deletion completion;</li>
<li>PullComplete: video pull for upload completion;</li>
<li>EditMediaComplete: video editing completion;</li>
<li>WechatPublishComplete: release on WeChat completion;</li>
<li>ComposeMediaComplete: media file composing completion;</li>
<li>WechatMiniProgramPublishComplete: release on WeChat Mini Program completion.</li>
<b>Event types compatible with v2017:</b>
<li>TranscodeComplete: video transcoding completion;</li>
<li>ConcatComplete: video splicing completion;</li>
<li>ClipComplete: video clipping completion;</li>
<li>CreateImageSpriteComplete: image sprite generating completion;</li>
<li>CreateSnapshotByTimeOffsetComplete: time point screencapturing completion.</li>
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * Video upload completion event, which is valid if the event type is `NewFileUpload`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {FileUploadTask || null}
         */
        this.FileUploadEvent = null;

        /**
         * Task flow status change event, which is valid if the event type is `ProcedureStateChanged`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ProcedureTask || null}
         */
        this.ProcedureStateChangeEvent = null;

        /**
         * File deletion event, which is valid if the event type is `FileDeleted`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {FileDeleteTask || null}
         */
        this.FileDeleteEvent = null;

        /**
         * Video pull for upload completion event, which is valid if the event type is `PullComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PullUploadTask || null}
         */
        this.PullCompleteEvent = null;

        /**
         * Video editing completion event, which is valid if the event type is `EditMediaComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {EditMediaTask || null}
         */
        this.EditMediaCompleteEvent = null;

        /**
         * Release on WeChat completion event, which is valid if the event type is `WechatPublishComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {WechatPublishTask || null}
         */
        this.WechatPublishCompleteEvent = null;

        /**
         * Video transcoding completion event, which is valid if the event type is `TranscodeComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TranscodeTask2017 || null}
         */
        this.TranscodeCompleteEvent = null;

        /**
         * Video splicing completion event, which is valid if the event type is `ConcatComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ConcatTask2017 || null}
         */
        this.ConcatCompleteEvent = null;

        /**
         * Video clipping completion event, which is valid if the event type is `ClipComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ClipTask2017 || null}
         */
        this.ClipCompleteEvent = null;

        /**
         * Image sprite generating completion event, which is valid if the event type is `CreateImageSpriteComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CreateImageSpriteTask2017 || null}
         */
        this.CreateImageSpriteCompleteEvent = null;

        /**
         * Time point screencapturing completion event, which is valid when the event type is `CreateSnapshotByTimeOffsetComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {SnapshotByTimeOffsetTask2017 || null}
         */
        this.SnapshotByTimeOffsetCompleteEvent = null;

        /**
         * Media file composing task completion event, which is valid when the event type is `ComposeMediaComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ComposeMediaTask || null}
         */
        this.ComposeMediaCompleteEvent = null;

        /**
         * Release on WeChat Mini Program task completion event, which is valid if the event type is `WechatMiniProgramPublishComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {WechatMiniProgramPublishTask || null}
         */
        this.WechatMiniProgramPublishCompleteEvent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventHandle = 'EventHandle' in params ? params.EventHandle : null;
        this.EventType = 'EventType' in params ? params.EventType : null;

        if (params.FileUploadEvent) {
            let obj = new FileUploadTask();
            obj.deserialize(params.FileUploadEvent)
            this.FileUploadEvent = obj;
        }

        if (params.ProcedureStateChangeEvent) {
            let obj = new ProcedureTask();
            obj.deserialize(params.ProcedureStateChangeEvent)
            this.ProcedureStateChangeEvent = obj;
        }

        if (params.FileDeleteEvent) {
            let obj = new FileDeleteTask();
            obj.deserialize(params.FileDeleteEvent)
            this.FileDeleteEvent = obj;
        }

        if (params.PullCompleteEvent) {
            let obj = new PullUploadTask();
            obj.deserialize(params.PullCompleteEvent)
            this.PullCompleteEvent = obj;
        }

        if (params.EditMediaCompleteEvent) {
            let obj = new EditMediaTask();
            obj.deserialize(params.EditMediaCompleteEvent)
            this.EditMediaCompleteEvent = obj;
        }

        if (params.WechatPublishCompleteEvent) {
            let obj = new WechatPublishTask();
            obj.deserialize(params.WechatPublishCompleteEvent)
            this.WechatPublishCompleteEvent = obj;
        }

        if (params.TranscodeCompleteEvent) {
            let obj = new TranscodeTask2017();
            obj.deserialize(params.TranscodeCompleteEvent)
            this.TranscodeCompleteEvent = obj;
        }

        if (params.ConcatCompleteEvent) {
            let obj = new ConcatTask2017();
            obj.deserialize(params.ConcatCompleteEvent)
            this.ConcatCompleteEvent = obj;
        }

        if (params.ClipCompleteEvent) {
            let obj = new ClipTask2017();
            obj.deserialize(params.ClipCompleteEvent)
            this.ClipCompleteEvent = obj;
        }

        if (params.CreateImageSpriteCompleteEvent) {
            let obj = new CreateImageSpriteTask2017();
            obj.deserialize(params.CreateImageSpriteCompleteEvent)
            this.CreateImageSpriteCompleteEvent = obj;
        }

        if (params.SnapshotByTimeOffsetCompleteEvent) {
            let obj = new SnapshotByTimeOffsetTask2017();
            obj.deserialize(params.SnapshotByTimeOffsetCompleteEvent)
            this.SnapshotByTimeOffsetCompleteEvent = obj;
        }

        if (params.ComposeMediaCompleteEvent) {
            let obj = new ComposeMediaTask();
            obj.deserialize(params.ComposeMediaCompleteEvent)
            this.ComposeMediaCompleteEvent = obj;
        }

        if (params.WechatMiniProgramPublishCompleteEvent) {
            let obj = new WechatMiniProgramPublishTask();
            obj.deserialize(params.WechatMiniProgramPublishCompleteEvent)
            this.WechatMiniProgramPublishCompleteEvent = obj;
        }

    }
}

/**
 * Control parameter of an intelligent highlight generating task
 * @class
 */
class HighlightsConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of an intelligent highlight generating task. Valid values:
<li>ON: enable an intelligent highlight generating task;</li>
<li>OFF: disable an intelligent highlight generating task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * ASR-detected politically sensitive information in speech
 * @class
 */
class AiReviewPoliticalAsrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of ASR-detected politically sensitive information in speech between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for ASR-detected politically sensitive information in speech. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of video segments that contain ASR-detected politically sensitive information in speech.
         * @type {Array.<MediaContentReviewAsrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewAsrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Information of output audio stream
 * @class
 */
class OutputAudioStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audio stream encoder. Valid values:
<li>libfdk_aac: suitable for mp4 files.</li>
Default value: libfdk_aac.
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Audio stream sample rate. Valid values:
<li>16,000</li>
<li>32,000</li>
<li>44,100</li>
<li>48,000</li>
In Hz.
Default value: 16,000.
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * Number of sound channels. Valid values:
<li>1: mono.</li>
<li>2: dual</li>
Default value: 2.
         * @type {number || null}
         */
        this.AudioChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.AudioChannel = 'AudioChannel' in params ? params.AudioChannel : null;

    }
}

/**
 * Statistics of task with specified specification.
 * @class
 */
class SpecificationDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task specification.
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * Statistics.
         * @type {Array.<TaskStatDataItem> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Specification = 'Specification' in params ? params.Specification : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TaskStatDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * TESHD parameter configuration.
 * @class
 */
class TEHDConfigForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * TESHD type. Valid values:
<li>TEHD-100: TESHD-100.</li>
If this parameter is left blank, no modification will be made.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Maximum bitrate. If this parameter is left blank, no modification will be made.
         * @type {number || null}
         */
        this.MaxVideoBitrate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MaxVideoBitrate = 'MaxVideoBitrate' in params ? params.MaxVideoBitrate : null;

    }
}

/**
 * Output of media file composing task.
 * @class
 */
class ComposeMediaTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * File type, such as mp4 and mp3.
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * Media file ID.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Media file playback address.
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * Filename of up to 64 characters.
         * @type {string || null}
         */
        this.MediaName = null;

        /**
         * Category ID, which is used to categorize the media for management. A category can be created and its ID can be obtained by using the [category creating](/document/product/266/7812) API.
<li>Default value: 0, which means "Other".</li>
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Expiration time of output media file in ISO 8601 format, after which the file will be deleted. Files will never expire by default. For more information, please see [Notes on ISO Date Format](https://cloud.tencent.com/document/product/266/11732#I).
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
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.MediaName = 'MediaName' in params ? params.MediaName : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * DescribeMediaInfos request structure.
 * @class
 */
class DescribeMediaInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of media file IDs. N starts from 0 and can be up to 19.
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * Specifies information entry that needs to be returned by all media files. Multiple entries can be specified simultaneously. N starts from 0. If this field is left empty, all information entries will be returned by default. Valid values:
<li>basicInfo (basic video information).</li>
<li>metaData (video metadata).</li>
<li>transcodeInfo (result information of video transcoding).</li>
<li>animatedGraphicsInfo (result information of animated image generating task).</li>
<li>imageSpriteInfo (image sprite information).</li>
<li>snapshotByTimeOffsetInfo (time point screenshot information).</li>
<li>sampleSnapshotInfo (sampled screenshot information).</li>
<li>keyFrameDescInfo (timestamp information).</li>
<li>adaptiveDynamicStreamingInfo (information of adaptive bitrate streaming).</li>
<li>miniProgramReviewInfo (WeChat Mini Program audit information).</li>
         * @type {Array.<string> || null}
         */
        this.Filters = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.Filters = 'Filters' in params ? params.Filters : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Control parameter of full speech recognition task.
 * @class
 */
class AsrFullTextConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of full speech recognition task. Valid values:
<li>ON: enables intelligent full speech recognition task;</li>
<li>OFF: disables intelligent full speech recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Format of generated subtitles file. If this parameter is left empty or a blank string is entered, no subtitles files will be generated. Valid value:
<li>vtt: generates a WebVTT subtitles file.</li>
         * @type {string || null}
         */
        this.SubtitleFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.SubtitleFormat = 'SubtitleFormat' in params ? params.SubtitleFormat : null;

    }
}

/**
 * Video splitting results.
 * @class
 */
class AiRecognitionTaskSegmentResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input information of video splitting task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskSegmentResultInput || null}
         */
        this.Input = null;

        /**
         * Output information of video splitting task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskSegmentResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskSegmentResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskSegmentResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * DescribeTaskDetail request structure.
 * @class
 */
class DescribeTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video processing task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Intelligent categorization result
 * @class
 */
class MediaAiAnalysisClassificationItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of intelligently generated category.
         * @type {string || null}
         */
        this.Classification = null;

        /**
         * Confidence of intelligently generated category between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Classification = 'Classification' in params ? params.Classification : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * Result type of intelligent frame-specific tagging
 * @class
 */
class AiAnalysisTaskFrameTagResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of intelligent frame-specific tagging task.
         * @type {AiAnalysisTaskFrameTagInput || null}
         */
        this.Input = null;

        /**
         * Output of intelligent frame-specific tagging task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiAnalysisTaskFrameTagOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskFrameTagInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskFrameTagOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Result information of porn information detection
 * @class
 */
class AiReviewPornTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of detected porn information in video between 0 and 100.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for detected porn information. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Tag of detected porn information in video. Valid values:
<li>porn: porn.</li>
<li>sexy: sexiness.</li>
<li>vulgar: vulgarity.</li>
<li>intimacy: intimacy.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * List of video segments that contain the detected porn information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaContentReviewSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Full speech recognition result.
 * @class
 */
class AiRecognitionTaskAsrFullTextResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input information of full speech recognition task.
         * @type {AiRecognitionTaskAsrFullTextResultInput || null}
         */
        this.Input = null;

        /**
         * Output information of full speech recognition task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskAsrFullTextResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskAsrFullTextResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskAsrFullTextResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Control parameter of politically sensitive information detection in video image task
 * @class
 */
class PoliticalImgReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of politically sensitive information detection in video image task. Valid values:
<li>ON: enables politically sensitive information detection in video image task;</li>
<li>OFF: disables politically sensitive information detection in video image task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Filter tag for politically sensitive information detection in video image. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. Valid values:
<li>violation_photo: violating photo;</li>
<li>politician: politically sensitive figure;</li>
<li>entertainment: entertainment celebrity;</li>
<li>sport: sports celebrity.</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 97 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 95 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Control parameter of politically sensitive information detection task
 * @class
 */
class PoliticalConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of politically sensitive information detection in video image.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PoliticalImgReviewTemplateInfo || null}
         */
        this.ImgReviewInfo = null;

        /**
         * Control parameter of politically sensitive information detection in speech.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PoliticalAsrReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of politically sensitive information detection in text.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PoliticalOcrReviewTemplateInfo || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PoliticalImgReviewTemplateInfo();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PoliticalAsrReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PoliticalOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * ModifyAnimatedGraphicsTemplate request structure.
 * @class
 */
class ModifyAnimatedGraphicsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an animated image generating template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Name of an animated image generating template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Maximum value of the width (or long side) of an animated image in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of an animated image in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Animated image format. Valid values: gif, webp.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Video frame rate in Hz. Value range: [1, 30].
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Image quality. Value range: [1, 100]. Default value: 75.
         * @type {number || null}
         */
        this.Quality = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Text recognition segment.
 * @class
 */
class AiRecognitionTaskOcrWordsSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of recognized segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of recognition segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Confidence of recognized segment. Value range: 0–100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Zone coordinates of recognition result. The array contains four elements: [x1,y1,x2,y2], i.e., the horizontal and vertical coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * Query result type of task
 * @class
 */
class MediaProcessTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type. Valid values:
<li>Transcode: transcoding</li>
<li>AnimatedGraphics: animated image generating</li>
<li>SnapshotByTimeOffset: time point screencapturing</li>
<li>SampleSnapshot: sampled screencapturing</li>
<li>ImageSprites: image sprite generating</li>
<li>CoverBySnapshot: Screencapturing for cover image</li>
<li>AdaptiveDynamicStreaming: adaptive bitrate streaming</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Query result of transcoding task, which is valid when task type is `Transcode`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskTranscodeResult || null}
         */
        this.TranscodeTask = null;

        /**
         * Query result of animated image generating task, which is valid when task type is `AnimatedGraphics`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskAnimatedGraphicResult || null}
         */
        this.AnimatedGraphicTask = null;

        /**
         * Query result of time point screencapturing task, which is valid when task type is `SnapshotByTimeOffset`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskSnapshotByTimeOffsetResult || null}
         */
        this.SnapshotByTimeOffsetTask = null;

        /**
         * Query result of sampled screencapturing task, which is valid when task type is `SampleSnapshot`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskSampleSnapshotResult || null}
         */
        this.SampleSnapshotTask = null;

        /**
         * Query result of image sprite generating task, which is valid when task type is `ImageSprite`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskImageSpriteResult || null}
         */
        this.ImageSpriteTask = null;

        /**
         * Query result of cover generating task, which is valid if task type is `CoverBySnapshot`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskCoverBySnapshotResult || null}
         */
        this.CoverBySnapshotTask = null;

        /**
         * Query result of adaptive bitrate streaming, which is valid if task type is `AdaptiveDynamicStreaming`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskAdaptiveDynamicStreamingResult || null}
         */
        this.AdaptiveDynamicStreamingTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TranscodeTask) {
            let obj = new MediaProcessTaskTranscodeResult();
            obj.deserialize(params.TranscodeTask)
            this.TranscodeTask = obj;
        }

        if (params.AnimatedGraphicTask) {
            let obj = new MediaProcessTaskAnimatedGraphicResult();
            obj.deserialize(params.AnimatedGraphicTask)
            this.AnimatedGraphicTask = obj;
        }

        if (params.SnapshotByTimeOffsetTask) {
            let obj = new MediaProcessTaskSnapshotByTimeOffsetResult();
            obj.deserialize(params.SnapshotByTimeOffsetTask)
            this.SnapshotByTimeOffsetTask = obj;
        }

        if (params.SampleSnapshotTask) {
            let obj = new MediaProcessTaskSampleSnapshotResult();
            obj.deserialize(params.SampleSnapshotTask)
            this.SampleSnapshotTask = obj;
        }

        if (params.ImageSpriteTask) {
            let obj = new MediaProcessTaskImageSpriteResult();
            obj.deserialize(params.ImageSpriteTask)
            this.ImageSpriteTask = obj;
        }

        if (params.CoverBySnapshotTask) {
            let obj = new MediaProcessTaskCoverBySnapshotResult();
            obj.deserialize(params.CoverBySnapshotTask)
            this.CoverBySnapshotTask = obj;
        }

        if (params.AdaptiveDynamicStreamingTask) {
            let obj = new MediaProcessTaskAdaptiveDynamicStreamingResult();
            obj.deserialize(params.AdaptiveDynamicStreamingTask)
            this.AdaptiveDynamicStreamingTask = obj;
        }

    }
}

/**
 * DeleteProcedureTemplate request structure.
 * @class
 */
class DeleteProcedureTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Watermark parameter type of video processing task
 * @class
 */
class WatermarkInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermarking template ID.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Text content of up to 100 characters. This needs to be entered only when the watermark type is text.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TextContent = null;

        /**
         * SVG content of up to 2,000,000 characters. This needs to be entered only when the watermark type is `SVG`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SvgContent = null;

        /**
         * Start time offset of a watermark in seconds. If this parameter is left blank or 0 is entered, the watermark will appear upon the first video frame.
<li>If this parameter is left blank or 0 is entered, the watermark will appear upon the first video frame;</li>
<li>If this value is greater than 0 (e.g., n), the watermark will appear at second n after the first video frame;</li>
<li>If this value is smaller than 0 (e.g., -n), the watermark will appear at second n before the last video frame.</li>
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a watermark in seconds.
<li>If this parameter is left blank or 0 is entered, the watermark will exist till the last video frame;</li>
<li>If this value is greater than 0 (e.g., n), the watermark will exist till second n;</li>
<li>If this value is smaller than 0 (e.g., -n), the watermark will exist till second n before the last video frame.</li>
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.TextContent = 'TextContent' in params ? params.TextContent : null;
        this.SvgContent = 'SvgContent' in params ? params.SvgContent : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * Adaptive bitrate streaming information
 * @class
 */
class AdaptiveDynamicStreamingInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Adaptive bitrate streaming specification.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Container format. Valid values: hls, dash.
         * @type {string || null}
         */
        this.Package = null;

        /**
         * Encryption type.
         * @type {string || null}
         */
        this.DrmType = null;

        /**
         * Playback address.
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Package = 'Package' in params ? params.Package : null;
        this.DrmType = 'DrmType' in params ? params.DrmType : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * Control parameter of prohibited information detection in text task
 * @class
 */
class ProhibitedOcrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of prohibited information detection in text task. Valid values:
<li>ON: enables prohibited information detection in text task;</li>
<li>OFF: disables prohibited information detection in text task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * ModifyTranscodeTemplate response structure.
 * @class
 */
class ModifyTranscodeTemplateResponse extends  AbstractModel {
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
 * VOD media file metadata
 * @class
 */
class MediaMetaData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Size of uploaded media file in bytes (which is the sum of size of m3u8 and ts files if the video is in HLS format).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Container, such as m4a and mp4.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Sum of the average bitrate of a video stream and that of an audio stream in bps.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Maximum value of the height of a video stream in px.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Maximum value of the width of a video stream in px.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Video duration in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Selected angle during video recording in degrees.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * Video stream information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaVideoStreamItem> || null}
         */
        this.VideoStreamSet = null;

        /**
         * Audio stream information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaAudioStreamItem> || null}
         */
        this.AudioStreamSet = null;

        /**
         * Video duration in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VideoDuration = null;

        /**
         * Audio duration in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AudioDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Size = 'Size' in params ? params.Size : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;

        if (params.VideoStreamSet) {
            this.VideoStreamSet = new Array();
            for (let z in params.VideoStreamSet) {
                let obj = new MediaVideoStreamItem();
                obj.deserialize(params.VideoStreamSet[z]);
                this.VideoStreamSet.push(obj);
            }
        }

        if (params.AudioStreamSet) {
            this.AudioStreamSet = new Array();
            for (let z in params.AudioStreamSet) {
                let obj = new MediaAudioStreamItem();
                obj.deserialize(params.AudioStreamSet[z]);
                this.AudioStreamSet.push(obj);
            }
        }
        this.VideoDuration = 'VideoDuration' in params ? params.VideoDuration : null;
        this.AudioDuration = 'AudioDuration' in params ? params.AudioDuration : null;

    }
}

/**
 * Information of sampled screenshot of VOD file
 * @class
 */
class MediaSampleSnapshotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information set of sampled screenshots with the specified specifications. Each element represents a set of sampled screenshots with the same specification.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaSampleSnapshotItem> || null}
         */
        this.SampleSnapshotSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SampleSnapshotSet) {
            this.SampleSnapshotSet = new Array();
            for (let z in params.SampleSnapshotSet) {
                let obj = new MediaSampleSnapshotItem();
                obj.deserialize(params.SampleSnapshotSet[z]);
                this.SampleSnapshotSet.push(obj);
            }
        }

    }
}

/**
 * DescribeSubAppIds response structure.
 * @class
 */
class DescribeSubAppIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subapplication information set.
         * @type {Array.<SubAppIdInfo> || null}
         */
        this.SubAppIdInfoSet = null;

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

        if (params.SubAppIdInfoSet) {
            this.SubAppIdInfoSet = new Array();
            for (let z in params.SubAppIdInfoSet) {
                let obj = new SubAppIdInfo();
                obj.deserialize(params.SubAppIdInfoSet[z]);
                this.SubAppIdInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VOD file information
 * @class
 */
class MediaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Basic information, such as video name, category, playback address, and cover image.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaBasicInfo || null}
         */
        this.BasicInfo = null;

        /**
         * Metadata, such as size, duration, video stream information, and audio stream information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * Result information of transcoding, such as address, specification, bitrate, and resolution of the videos in various bitrates generated by transcoding a video.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaTranscodeInfo || null}
         */
        this.TranscodeInfo = null;

        /**
         * Result information of animated image generating, i.e., relevant information of an animated image (such as .gif) generated from a video.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaAnimatedGraphicsInfo || null}
         */
        this.AnimatedGraphicsInfo = null;

        /**
         * Sampled screenshot information, i.e., relevant information of a sampled screenshot generated from a video.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaSampleSnapshotInfo || null}
         */
        this.SampleSnapshotInfo = null;

        /**
         * Image sprite information, i.e., relevant information of image sprite generated from video.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaImageSpriteInfo || null}
         */
        this.ImageSpriteInfo = null;

        /**
         * Time point screenshot information, i.e., information of each time point screenshot generated from a video.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaSnapshotByTimeOffsetInfo || null}
         */
        this.SnapshotByTimeOffsetInfo = null;

        /**
         * Timestamp information, i.e., information of each timestamp set for a video.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaKeyFrameDescInfo || null}
         */
        this.KeyFrameDescInfo = null;

        /**
         * Adaptive bitrate streaming information, such as specification, encryption type, and container format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaAdaptiveDynamicStreamingInfo || null}
         */
        this.AdaptiveDynamicStreamingInfo = null;

        /**
         * WeChat Mini Program audit information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaMiniProgramReviewInfo || null}
         */
        this.MiniProgramReviewInfo = null;

        /**
         * Unique ID of media file.
         * @type {string || null}
         */
        this.FileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BasicInfo) {
            let obj = new MediaBasicInfo();
            obj.deserialize(params.BasicInfo)
            this.BasicInfo = obj;
        }

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }

        if (params.TranscodeInfo) {
            let obj = new MediaTranscodeInfo();
            obj.deserialize(params.TranscodeInfo)
            this.TranscodeInfo = obj;
        }

        if (params.AnimatedGraphicsInfo) {
            let obj = new MediaAnimatedGraphicsInfo();
            obj.deserialize(params.AnimatedGraphicsInfo)
            this.AnimatedGraphicsInfo = obj;
        }

        if (params.SampleSnapshotInfo) {
            let obj = new MediaSampleSnapshotInfo();
            obj.deserialize(params.SampleSnapshotInfo)
            this.SampleSnapshotInfo = obj;
        }

        if (params.ImageSpriteInfo) {
            let obj = new MediaImageSpriteInfo();
            obj.deserialize(params.ImageSpriteInfo)
            this.ImageSpriteInfo = obj;
        }

        if (params.SnapshotByTimeOffsetInfo) {
            let obj = new MediaSnapshotByTimeOffsetInfo();
            obj.deserialize(params.SnapshotByTimeOffsetInfo)
            this.SnapshotByTimeOffsetInfo = obj;
        }

        if (params.KeyFrameDescInfo) {
            let obj = new MediaKeyFrameDescInfo();
            obj.deserialize(params.KeyFrameDescInfo)
            this.KeyFrameDescInfo = obj;
        }

        if (params.AdaptiveDynamicStreamingInfo) {
            let obj = new MediaAdaptiveDynamicStreamingInfo();
            obj.deserialize(params.AdaptiveDynamicStreamingInfo)
            this.AdaptiveDynamicStreamingInfo = obj;
        }

        if (params.MiniProgramReviewInfo) {
            let obj = new MediaMiniProgramReviewInfo();
            obj.deserialize(params.MiniProgramReviewInfo)
            this.MiniProgramReviewInfo = obj;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;

    }
}

/**
 * Video stream configuration parameter
 * @class
 */
class VideoTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video stream encoder. Valid values:
<li>libx264: H.264</li>
<li>libx265: H.265</li>
<li>av1: AOMedia Video 1</li>
Currently, a resolution within 640x480 must be specified for H.265. and the `av1` container only supports mp4.
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Video frame rate in Hz. Value range: [0, 60].
If the value is 0, the frame rate will be the same as that of the source video.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Bitrate of video stream in Kbps. Value range: 0 and [128, 35,000].
If the value is 0, the bitrate of the video will be the same as that of the source video.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Maximum value of the width (or long side) of a video stream in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a video stream in px. Value range: 0 and [128, 4,096].
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * DescribeContentReviewTemplates request structure.
 * @class
 */
class DescribeContentReviewTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of content audit templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Input parameter type of adaptive bitrate streaming
 * @class
 */
class AdaptiveDynamicStreamingTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Adaptive bitrate streaming template ID.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * List of up to 10 image or text watermarks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

    }
}

/**
 * DescribeImageSpriteTemplates response structure.
 * @class
 */
class DescribeImageSpriteTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of image sprite generating template details.
         * @type {Array.<ImageSpriteTemplate> || null}
         */
        this.ImageSpriteTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ImageSpriteTemplateSet) {
            this.ImageSpriteTemplateSet = new Array();
            for (let z in params.ImageSpriteTemplateSet) {
                let obj = new ImageSpriteTemplate();
                obj.deserialize(params.ImageSpriteTemplateSet[z]);
                this.ImageSpriteTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Input type of intelligent frame-specific tagging task
 * @class
 */
class AiAnalysisTaskFrameTagInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intelligent frame-specific video tagging template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * List of frame-specific tag segments
 * @class
 */
class MediaAiAnalysisFrameTagSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of frame-specific tag.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of frame-specific tag.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * List of tags in time period.
         * @type {Array.<MediaAiAnalysisFrameTagItem> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new MediaAiAnalysisFrameTagItem();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * Speech keyword recognition result.
 * @class
 */
class AiRecognitionTaskAsrWordsResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Speech keyword.
         * @type {string || null}
         */
        this.Word = null;

        /**
         * List of time segments that contain the speech keyword.
         * @type {Array.<AiRecognitionTaskAsrWordsSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskAsrWordsSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Input parameter type of AI-based intelligent video analysis
 * @class
 */
class AiAnalysisTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video content analysis template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeTaskDetail response structure.
 * @class
 */
class DescribeTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type. Valid values:
<li>Procedure: video processing task;</li>
<li>EditMedia: video editing task;</li>
<li>WechatPublish: release on WeChat task;</li>
<li>WechatMiniProgramPublish: release on WeChat Mini Program task;</li>
<li>ComposeMedia: media file composing task;</li>
<li>PullUpload: media file pulling for upload task.</li>

Task types compatible with v2017:
<li>Transcode: transcoding task;</li>
<li>SnapshotByTimeOffset: screencapturing task</li>
<li>Concat: video splicing task;</li>
<li>Clip: video clipping task;</li>
<li>ImageSprites: image sprite generating task.</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Task status. Valid values:
<li>WAITING: waiting;</li>
<li>PROCESSING: processing;</li>
<li>FINISH: completed.</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Creation time of task in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Start time of task execution in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.BeginProcessTime = null;

        /**
         * End time of task execution in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * Video processing task information. This field has a value only when `TaskType` is `Procedure`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ProcedureTask || null}
         */
        this.ProcedureTask = null;

        /**
         * Video editing task information. This field has a value only when `TaskType` is `EditMedia`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {EditMediaTask || null}
         */
        this.EditMediaTask = null;

        /**
         * Release on WeChat task information. This field has a value only when `TaskType` is `WechatPublish`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {WechatPublishTask || null}
         */
        this.WechatPublishTask = null;

        /**
         * Media file composing task information. This field has a value only when `TaskType` is `ComposeMedia`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ComposeMediaTask || null}
         */
        this.ComposeMediaTask = null;

        /**
         * Media file pulling for upload task information. This field has a value only when `TaskType` is `PullUpload`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PullUploadTask || null}
         */
        this.PullUploadTask = null;

        /**
         * Video transcoding task information. This field has a value only when `TaskType` is `Transcode`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TranscodeTask2017 || null}
         */
        this.TranscodeTask = null;

        /**
         * Time point screencapturing task information. This field has a value only when `TaskType` is `SnapshotByTimeOffset`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {SnapshotByTimeOffsetTask2017 || null}
         */
        this.SnapshotByTimeOffsetTask = null;

        /**
         * Video splicing task information. This field has a value only when `TaskType` is `Concat`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ConcatTask2017 || null}
         */
        this.ConcatTask = null;

        /**
         * Video clipping task information. This field has a value only when `TaskType` is `Clip`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ClipTask2017 || null}
         */
        this.ClipTask = null;

        /**
         * Image sprite creating task information. This field has a value only when `TaskType` is `ImageSprite`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CreateImageSpriteTask2017 || null}
         */
        this.CreateImageSpriteTask = null;

        /**
         * Release on WeChat Mini Program task information. This field has a value only when `TaskType` is `WechatMiniProgramPublish`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {WechatMiniProgramPublishTask || null}
         */
        this.WechatMiniProgramPublishTask = null;

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
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BeginProcessTime = 'BeginProcessTime' in params ? params.BeginProcessTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

        if (params.ProcedureTask) {
            let obj = new ProcedureTask();
            obj.deserialize(params.ProcedureTask)
            this.ProcedureTask = obj;
        }

        if (params.EditMediaTask) {
            let obj = new EditMediaTask();
            obj.deserialize(params.EditMediaTask)
            this.EditMediaTask = obj;
        }

        if (params.WechatPublishTask) {
            let obj = new WechatPublishTask();
            obj.deserialize(params.WechatPublishTask)
            this.WechatPublishTask = obj;
        }

        if (params.ComposeMediaTask) {
            let obj = new ComposeMediaTask();
            obj.deserialize(params.ComposeMediaTask)
            this.ComposeMediaTask = obj;
        }

        if (params.PullUploadTask) {
            let obj = new PullUploadTask();
            obj.deserialize(params.PullUploadTask)
            this.PullUploadTask = obj;
        }

        if (params.TranscodeTask) {
            let obj = new TranscodeTask2017();
            obj.deserialize(params.TranscodeTask)
            this.TranscodeTask = obj;
        }

        if (params.SnapshotByTimeOffsetTask) {
            let obj = new SnapshotByTimeOffsetTask2017();
            obj.deserialize(params.SnapshotByTimeOffsetTask)
            this.SnapshotByTimeOffsetTask = obj;
        }

        if (params.ConcatTask) {
            let obj = new ConcatTask2017();
            obj.deserialize(params.ConcatTask)
            this.ConcatTask = obj;
        }

        if (params.ClipTask) {
            let obj = new ClipTask2017();
            obj.deserialize(params.ClipTask)
            this.ClipTask = obj;
        }

        if (params.CreateImageSpriteTask) {
            let obj = new CreateImageSpriteTask2017();
            obj.deserialize(params.CreateImageSpriteTask)
            this.CreateImageSpriteTask = obj;
        }

        if (params.WechatMiniProgramPublishTask) {
            let obj = new WechatMiniProgramPublishTask();
            obj.deserialize(params.WechatMiniProgramPublishTask)
            this.WechatMiniProgramPublishTask = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Video timestamp information
 * @class
 */
class MediaKeyFrameDescInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information array of video timestamps.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaKeyFrameDescItem> || null}
         */
        this.KeyFrameDescSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KeyFrameDescSet) {
            this.KeyFrameDescSet = new Array();
            for (let z in params.KeyFrameDescSet) {
                let obj = new MediaKeyFrameDescItem();
                obj.deserialize(params.KeyFrameDescSet[z]);
                this.KeyFrameDescSet.push(obj);
            }
        }

    }
}

/**
 * DeleteImageSpriteTemplate request structure.
 * @class
 */
class DeleteImageSpriteTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an image sprite generating template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * CreateClass request structure.
 * @class
 */
class CreateClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parent category ID. For a first-level category, enter `-1`.
         * @type {number || null}
         */
        this.ParentId = null;

        /**
         * Category name. Length limit: 1–64 characters.
         * @type {string || null}
         */
        this.ClassName = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * CreateProcedureTemplate response structure.
 * @class
 */
class CreateProcedureTemplateResponse extends  AbstractModel {
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
 * DescribeMediaProcessUsageData response structure.
 * @class
 */
class DescribeMediaProcessUsageDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Overview of video processing statistics, which displays the overview and details of queried tasks.
         * @type {Array.<TaskStatData> || null}
         */
        this.MediaProcessDataSet = null;

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

        if (params.MediaProcessDataSet) {
            this.MediaProcessDataSet = new Array();
            for (let z in params.MediaProcessDataSet) {
                let obj = new TaskStatData();
                obj.deserialize(params.MediaProcessDataSet[z]);
                this.MediaProcessDataSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Input of full text recognition.
 * @class
 */
class AiRecognitionTaskOcrFullTextResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full text recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Input of video splitting.
 * @class
 */
class AiRecognitionTaskSegmentResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video splitting template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeAudioTrackTemplates request structure.
 * @class
 */
class DescribeAudioTrackTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Paged offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Template type filter. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DescribeSubAppIds request structure.
 * @class
 */
class DescribeSubAppIdsRequest extends  AbstractModel {
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
 * Face recognition input.
 * @class
 */
class AiRecognitionTaskFaceResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Face recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Politically sensitive information
 * @class
 */
class AiReviewPoliticalTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of detected politically sensitive information in video between 0 and 100.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for detected politically sensitive information. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Tag of detected politically sensitive information in video. Valid values:
<li>politician: politically sensitive figure.</li>
<li>violation_photo: violating photo.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * List of video segments that contain the detected politically sensitive information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaContentReviewPoliticalSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewPoliticalSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Result type of politically sensitive information detection task in content audit
 * @class
 */
class AiReviewTaskPoliticalResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of politically sensitive information detection task in content audit.
         * @type {AiReviewPoliticalTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of politically sensitive information detection task in content audit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewPoliticalTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPoliticalTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPoliticalTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * ModifySnapshotByTimeOffsetTemplate request structure.
 * @class
 */
class ModifySnapshotByTimeOffsetTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a specified time point screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Name of a time point screencapturing template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Maximum value of the width (or long side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Image format. Valid values: jpg, png.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
<li>white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.</li>
<li>gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * Video processing task information
 * @class
 */
class ProcedureTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video processing task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task flow status. Valid values:
<li>PROCESSING: processing;</li>
<li>FINISH: completed.</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Disused. Please use `ErrCode` of each specific task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Disused. Please use `Message` of each specific task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Media file ID.
<li>If the task flow is initiated by [ProcessMedia](https://cloud.tencent.com/document/product/266/33427), this field means the `FileId` in [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo);</li>
<li>If the task flow is initiated by [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426), this field means the `Id` in [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo).</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Media filename
<li>If the task flow is initiated by [ProcessMedia](https://cloud.tencent.com/document/product/266/33427), this field means the `BasicInfo.Name` in [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo);</li>
<li>If the task flow is initiated by [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426), this field means the `Name` in [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo).</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Media file address
<li>If the task flow is initiated by [ProcessMedia](https://cloud.tencent.com/document/product/266/33427), this field means the `BasicInfo.MediaUrl` in [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo);</li>
<li>If the task flow is initiated by [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426), this field means the `Url` in [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo).</li>
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * Source video metadata.
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * Execution status and result of video processing task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaProcessTaskResult> || null}
         */
        this.MediaProcessResultSet = null;

        /**
         * Execution status and result of video content audit task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AiContentReviewResult> || null}
         */
        this.AiContentReviewResultSet = null;

        /**
         * Execution status and result of video content analysis task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AiAnalysisResult> || null}
         */
        this.AiAnalysisResultSet = null;

        /**
         * Execution status and result of video content recognition task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AiRecognitionResult> || null}
         */
        this.AiRecognitionResultSet = null;

        /**
         * Task flow priority. Value range: [-10, 10].
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * Notification mode for change in task flow status.
<li>Finish: an event notification will be initiated only after the task flow is completely executed;</li>
<li>Change: an event notification will be initiated as soon as the status of a subtask in the task flow changes; </li>
<li>None: no callback for the task flow will be accepted.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TasksNotifyMode = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * The ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or a blank string is entered, no deduplication will be performed.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SessionId = null;

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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }

        if (params.MediaProcessResultSet) {
            this.MediaProcessResultSet = new Array();
            for (let z in params.MediaProcessResultSet) {
                let obj = new MediaProcessTaskResult();
                obj.deserialize(params.MediaProcessResultSet[z]);
                this.MediaProcessResultSet.push(obj);
            }
        }

        if (params.AiContentReviewResultSet) {
            this.AiContentReviewResultSet = new Array();
            for (let z in params.AiContentReviewResultSet) {
                let obj = new AiContentReviewResult();
                obj.deserialize(params.AiContentReviewResultSet[z]);
                this.AiContentReviewResultSet.push(obj);
            }
        }

        if (params.AiAnalysisResultSet) {
            this.AiAnalysisResultSet = new Array();
            for (let z in params.AiAnalysisResultSet) {
                let obj = new AiAnalysisResult();
                obj.deserialize(params.AiAnalysisResultSet[z]);
                this.AiAnalysisResultSet.push(obj);
            }
        }

        if (params.AiRecognitionResultSet) {
            this.AiRecognitionResultSet = new Array();
            for (let z in params.AiRecognitionResultSet) {
                let obj = new AiRecognitionResult();
                obj.deserialize(params.AiRecognitionResultSet[z]);
                this.AiRecognitionResultSet.push(obj);
            }
        }
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * DescribeSnapshotByTimeOffsetTemplates response structure.
 * @class
 */
class DescribeSnapshotByTimeOffsetTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of time point screencapturing template details.
         * @type {Array.<SnapshotByTimeOffsetTemplate> || null}
         */
        this.SnapshotByTimeOffsetTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SnapshotByTimeOffsetTemplateSet) {
            this.SnapshotByTimeOffsetTemplateSet = new Array();
            for (let z in params.SnapshotByTimeOffsetTemplateSet) {
                let obj = new SnapshotByTimeOffsetTemplate();
                obj.deserialize(params.SnapshotByTimeOffsetTemplateSet[z]);
                this.SnapshotByTimeOffsetTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of video stream in VOD file
 * @class
 */
class MediaVideoStreamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bitrate of video stream in bps.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Height of video stream in px.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Width of video stream in px.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Video stream encoder, such as h264.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Frame rate in Hz.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Fps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;

    }
}

/**
 * Details of a specified time point screencapturing template
 * @class
 */
class SnapshotByTimeOffsetTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a specified time point screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Template type. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Name of a specified time point screencapturing template.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Maximum value of the width (or long side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Image format.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Creation time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
<li>white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.</li>
<li>gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * DeleteSnapshotByTimeOffsetTemplate response structure.
 * @class
 */
class DeleteSnapshotByTimeOffsetTemplateResponse extends  AbstractModel {
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
 * DescribeReviewDetails response structure.
 * @class
 */
class DescribeReviewDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of initiated content audits.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Total content audit duration.
         * @type {number || null}
         */
        this.TotalDuration = null;

        /**
         * Data of content audit duration, which is collected once per day.
         * @type {Array.<StatDataItem> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalDuration = 'TotalDuration' in params ? params.TotalDuration : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new StatDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTranscodeTemplate response structure.
 * @class
 */
class CreateTranscodeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of transcoding template.
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Input of speech keyword recognition.
 * @class
 */
class AiRecognitionTaskAsrWordsResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Speech keyword recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Screencapturing output information (v2017)
 * @class
 */
class SnapshotByTimeOffset2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code
<li>0: success;</li>
<li>Other values: failure.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Specific time point of screenshot in milliseconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimeOffset = null;

        /**
         * Address of output screenshot file.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.TimeOffset = 'TimeOffset' in params ? params.TimeOffset : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * CreateAIAnalysisTemplate request structure.
 * @class
 */
class CreateAIAnalysisTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video content analysis template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Video content analysis template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Control parameter of intelligent categorization task.
         * @type {ClassificationConfigureInfo || null}
         */
        this.ClassificationConfigure = null;

        /**
         * Control parameter of intelligent tagging task.
         * @type {TagConfigureInfo || null}
         */
        this.TagConfigure = null;

        /**
         * Control parameter of intelligent cover generating task.
         * @type {CoverConfigureInfo || null}
         */
        this.CoverConfigure = null;

        /**
         * Control parameter of intelligent frame-specific tagging task.
         * @type {FrameTagConfigureInfo || null}
         */
        this.FrameTagConfigure = null;

        /**
         * Control parameter of an intelligent highlight generating task.
         * @type {HighlightsConfigureInfo || null}
         */
        this.HighlightConfigure = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.ClassificationConfigure) {
            let obj = new ClassificationConfigureInfo();
            obj.deserialize(params.ClassificationConfigure)
            this.ClassificationConfigure = obj;
        }

        if (params.TagConfigure) {
            let obj = new TagConfigureInfo();
            obj.deserialize(params.TagConfigure)
            this.TagConfigure = obj;
        }

        if (params.CoverConfigure) {
            let obj = new CoverConfigureInfo();
            obj.deserialize(params.CoverConfigure)
            this.CoverConfigure = obj;
        }

        if (params.FrameTagConfigure) {
            let obj = new FrameTagConfigureInfo();
            obj.deserialize(params.FrameTagConfigure)
            this.FrameTagConfigure = obj;
        }

        if (params.HighlightConfigure) {
            let obj = new HighlightsConfigureInfo();
            obj.deserialize(params.HighlightConfigure)
            this.HighlightConfigure = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Input parameter type of terrorism information detection task in content audit
 * @class
 */
class AiReviewTerrorismTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Terrorism information detection template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Information of audio stream in VOD file
 * @class
 */
class MediaAudioStreamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bitrate of audio stream in bps.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Sample rate of audio stream in Hz.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SamplingRate = null;

        /**
         * Audio stream encoder, such as aac.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
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
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SamplingRate = 'SamplingRate' in params ? params.SamplingRate : null;
        this.Codec = 'Codec' in params ? params.Codec : null;

    }
}

/**
 * Image sprite information of VOD file
 * @class
 */
class MediaImageSpriteInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information set of image sprites with specified specifications. Each element represents a set of image sprites with the same specification.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaImageSpriteItem> || null}
         */
        this.ImageSpriteSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageSpriteSet) {
            this.ImageSpriteSet = new Array();
            for (let z in params.ImageSpriteSet) {
                let obj = new MediaImageSpriteItem();
                obj.deserialize(params.ImageSpriteSet[z]);
                this.ImageSpriteSet.push(obj);
            }
        }

    }
}

/**
 * Subapplication information.
 * @class
 */
class SubAppIdInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subapplication ID.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * Subapplication name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Subapplication overview.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Subapplication creation time of task in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Subapplication status. Valid values:
<li>On: enabled;</li>
<li>Off: disabled.</li>
         * @type {string || null}
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyImageSpriteTemplate request structure.
 * @class
 */
class ModifyImageSpriteTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an image sprite generating template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Name of an image sprite generating template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Subimage width of an image sprite in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Subimage height of an image sprite in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Sampling type. Valid values:
<li>Percent: by percent.</li>
<li>Time: by time interval.</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval.
<li>If `SampleType` is `Percent`, sampling will be performed at an interval of the specified percentage.</li>
<li>If `SampleType` is `Time`, sampling will be performed at the specified time interval in seconds.</li>
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * Subimage row count of an image sprite.
         * @type {number || null}
         */
        this.RowCount = null;

        /**
         * Subimage column count of an image sprite.
         * @type {number || null}
         */
        this.ColumnCount = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * Input parameter type of OCR-based prohibited information detection in text task in content audit
 * @class
 */
class AiReviewProhibitedOcrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prohibited information detection template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DeleteWatermarkTemplate request structure.
 * @class
 */
class DeleteWatermarkTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of watermarking template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Video stream editing information
 * @class
 */
class EditMediaStreamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of recorded stream
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Start time of stream clipping in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of stream clipping in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * LiveRealTimeClip response structure.
 * @class
 */
class LiveRealTimeClipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback URL of clipped video.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Unique media file ID of video generated by persistent clipping.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Task flow ID of video generated by persistent clipping.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VodTaskId = null;

        /**
         * Metadata of clipped video.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

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
        this.Url = 'Url' in params ? params.Url : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.VodTaskId = 'VodTaskId' in params ? params.VodTaskId : null;

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAIAnalysisTemplate request structure.
 * @class
 */
class ModifyAIAnalysisTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of video content analysis template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Video content analysis template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Video content analysis template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Control parameter of intelligent categorization task.
         * @type {ClassificationConfigureInfoForUpdate || null}
         */
        this.ClassificationConfigure = null;

        /**
         * Control parameter of intelligent tagging task.
         * @type {TagConfigureInfoForUpdate || null}
         */
        this.TagConfigure = null;

        /**
         * Control parameter of intelligent cover generating task.
         * @type {CoverConfigureInfoForUpdate || null}
         */
        this.CoverConfigure = null;

        /**
         * Control parameter of intelligent frame-specific tagging task.
         * @type {FrameTagConfigureInfoForUpdate || null}
         */
        this.FrameTagConfigure = null;

        /**
         * Control parameter of an intelligent highlight generating task.
         * @type {HighlightsConfigureInfoForUpdate || null}
         */
        this.HighlightConfigure = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.ClassificationConfigure) {
            let obj = new ClassificationConfigureInfoForUpdate();
            obj.deserialize(params.ClassificationConfigure)
            this.ClassificationConfigure = obj;
        }

        if (params.TagConfigure) {
            let obj = new TagConfigureInfoForUpdate();
            obj.deserialize(params.TagConfigure)
            this.TagConfigure = obj;
        }

        if (params.CoverConfigure) {
            let obj = new CoverConfigureInfoForUpdate();
            obj.deserialize(params.CoverConfigure)
            this.CoverConfigure = obj;
        }

        if (params.FrameTagConfigure) {
            let obj = new FrameTagConfigureInfoForUpdate();
            obj.deserialize(params.FrameTagConfigure)
            this.FrameTagConfigure = obj;
        }

        if (params.HighlightConfigure) {
            let obj = new HighlightsConfigureInfoForUpdate();
            obj.deserialize(params.HighlightConfigure)
            this.HighlightConfigure = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * CommitUpload response structure.
 * @class
 */
class CommitUploadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of media file.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Media playback address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MediaUrl = null;

        /**
         * Media cover address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CoverUrl = null;

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
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.MediaUrl = 'MediaUrl' in params ? params.MediaUrl : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSampleSnapshotTemplates response structure.
 * @class
 */
class DescribeSampleSnapshotTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of sampled screencapturing template details.
         * @type {Array.<SampleSnapshotTemplate> || null}
         */
        this.SampleSnapshotTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SampleSnapshotTemplateSet) {
            this.SampleSnapshotTemplateSet = new Array();
            for (let z in params.SampleSnapshotTemplateSet) {
                let obj = new SampleSnapshotTemplate();
                obj.deserialize(params.SampleSnapshotTemplateSet[z]);
                this.SampleSnapshotTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Content audit result
 * @class
 */
class AiContentReviewResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type. Valid values:
<li>Porn: porn information detection in image</li>
<li>Terrorism: terrorism information detection in image</li>
<li>Political: politically sensitive information detection in image</li>
<li>Porn.Asr: ASR-based porn information detection in speech</li>
<li>Porn.Ocr: OCR-based porn information detection in text</li>
<li>Political.Asr: ASR-based politically sensitive information detection in speech</li>
<li>Political.Ocr: OCR-based politically sensitive information detection in text</li>
<li>Terrorism.Ocr: OCR-based terrorism information in text</li>
<li>Prohibited.Asr: ASR-based prohibited information detection in speech</li>
<li>Prohibited.Ocr: OCR-based prohibited information detection in text</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Query result of intelligent porn information detection in video image task in video content audit, which is valid when task type is `Porn`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTaskPornResult || null}
         */
        this.PornTask = null;

        /**
         * Query result of intelligent terrorism information detection in video image task in video content audit, which is valid when task type is `Terrorism`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTaskTerrorismResult || null}
         */
        this.TerrorismTask = null;

        /**
         * Query result of intelligent politically sensitive information detection in video image task in video content audit, which is valid when task type is `Political`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTaskPoliticalResult || null}
         */
        this.PoliticalTask = null;

        /**
         * Query result of ASR-based porn information detection in speech task in video content audit, which is valid when task type is `Porn.Asr`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTaskPornAsrResult || null}
         */
        this.PornAsrTask = null;

        /**
         * Query result of OCR-based porn information detection in text task in video content audit, which is valid when task type is `Porn.Ocr`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTaskPornOcrResult || null}
         */
        this.PornOcrTask = null;

        /**
         * Query result of ASR-based politically sensitive information detection in speech task in video content audit, which is valid when task type is `Political.Asr`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTaskPoliticalAsrResult || null}
         */
        this.PoliticalAsrTask = null;

        /**
         * Query result of OCR-based politically sensitive information detection in text task in video content audit, which is valid when task type is `Political.Ocr`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTaskPoliticalOcrResult || null}
         */
        this.PoliticalOcrTask = null;

        /**
         * Query result of OCR-based terrorism information detection in text task in video content audit, which is valid when task type is `Terrorism.Ocr`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTaskTerrorismOcrResult || null}
         */
        this.TerrorismOcrTask = null;

        /**
         * Query result of ASR-based prohibited information detection in speech task in video content audit, which is valid when task type is `Prohibited.Asr`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTaskProhibitedAsrResult || null}
         */
        this.ProhibitedAsrTask = null;

        /**
         * Query result of OCR-based prohibited information detection in text task in video content audit, which is valid when task type is `Prohibited.Ocr`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTaskProhibitedOcrResult || null}
         */
        this.ProhibitedOcrTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.PornTask) {
            let obj = new AiReviewTaskPornResult();
            obj.deserialize(params.PornTask)
            this.PornTask = obj;
        }

        if (params.TerrorismTask) {
            let obj = new AiReviewTaskTerrorismResult();
            obj.deserialize(params.TerrorismTask)
            this.TerrorismTask = obj;
        }

        if (params.PoliticalTask) {
            let obj = new AiReviewTaskPoliticalResult();
            obj.deserialize(params.PoliticalTask)
            this.PoliticalTask = obj;
        }

        if (params.PornAsrTask) {
            let obj = new AiReviewTaskPornAsrResult();
            obj.deserialize(params.PornAsrTask)
            this.PornAsrTask = obj;
        }

        if (params.PornOcrTask) {
            let obj = new AiReviewTaskPornOcrResult();
            obj.deserialize(params.PornOcrTask)
            this.PornOcrTask = obj;
        }

        if (params.PoliticalAsrTask) {
            let obj = new AiReviewTaskPoliticalAsrResult();
            obj.deserialize(params.PoliticalAsrTask)
            this.PoliticalAsrTask = obj;
        }

        if (params.PoliticalOcrTask) {
            let obj = new AiReviewTaskPoliticalOcrResult();
            obj.deserialize(params.PoliticalOcrTask)
            this.PoliticalOcrTask = obj;
        }

        if (params.TerrorismOcrTask) {
            let obj = new AiReviewTaskTerrorismOcrResult();
            obj.deserialize(params.TerrorismOcrTask)
            this.TerrorismOcrTask = obj;
        }

        if (params.ProhibitedAsrTask) {
            let obj = new AiReviewTaskProhibitedAsrResult();
            obj.deserialize(params.ProhibitedAsrTask)
            this.ProhibitedAsrTask = obj;
        }

        if (params.ProhibitedOcrTask) {
            let obj = new AiReviewTaskProhibitedOcrResult();
            obj.deserialize(params.ProhibitedOcrTask)
            this.ProhibitedOcrTask = obj;
        }

    }
}

/**
 * Control parameter of terrorism information detection in video image task
 * @class
 */
class TerrorismImgReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of terrorism information detection in video image task. Valid values:
<li>ON: enables terrorism information detection in video image task;</li>
<li>OFF: disables terrorism information detection in video image task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Filter tag for terrorism information detection in video image. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. Valid values:
<li>guns: weapons and guns;</li>
<li>crowd: crowd;</li>
<li>bloody: bloody scenes;</li>
<li>police: police force;</li>
<li>banners: terrorism flags;</li>
<li>militant: militants;</li>
<li>explosion: explosions and fires;</li>
<li>terrorists: terrorists.</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 90 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 80 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * ApplyUpload response structure.
 * @class
 */
class ApplyUploadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage bucket, which is used as the `bucket_name` in the URL of the upload API.
         * @type {string || null}
         */
        this.StorageBucket = null;

        /**
         * Storage region, which is used as the `Region` in the `Host` of the upload API.
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * VOD session, which is used to confirm the `VodSessionKey` parameter of the upload API.
         * @type {string || null}
         */
        this.VodSessionKey = null;

        /**
         * Media storage path, which is used as the `Key` of the stored media of the upload API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MediaStoragePath = null;

        /**
         * Cover storage path, which is used as the `Key` of the stored cover of the upload API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CoverStoragePath = null;

        /**
         * Temporary credential, which is used for authentication of the upload API.
         * @type {TempCertificate || null}
         */
        this.TempCertificate = null;

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
        this.StorageBucket = 'StorageBucket' in params ? params.StorageBucket : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.VodSessionKey = 'VodSessionKey' in params ? params.VodSessionKey : null;
        this.MediaStoragePath = 'MediaStoragePath' in params ? params.MediaStoragePath : null;
        this.CoverStoragePath = 'CoverStoragePath' in params ? params.CoverStoragePath : null;

        if (params.TempCertificate) {
            let obj = new TempCertificate();
            obj.deserialize(params.TempCertificate)
            this.TempCertificate = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTranscodeTemplates request structure.
 * @class
 */
class DescribeTranscodeTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of transcoding templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Template type filter. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Container filter. Valid values:
<li>Video: video container that can contain both video stream and audio stream;</li>
<li>PureAudio: audio container that can contain only audio stream.</li>
         * @type {string || null}
         */
        this.ContainerType = null;

        /**
         * TESHD filter, which is used to filter common transcoding or ultra-fast HD transcoding templates. Valid values:
<li>Common: Common transcoding template;</li>
<li>TEHD: TESHD template.</li>
         * @type {string || null}
         */
        this.TEHDType = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ContainerType = 'ContainerType' in params ? params.ContainerType : null;
        this.TEHDType = 'TEHDType' in params ? params.TEHDType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DescribeWatermarkTemplates response structure.
 * @class
 */
class DescribeWatermarkTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of watermarking template details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WatermarkTemplate> || null}
         */
        this.WatermarkTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.WatermarkTemplateSet) {
            this.WatermarkTemplateSet = new Array();
            for (let z in params.WatermarkTemplateSet) {
                let obj = new WatermarkTemplate();
                obj.deserialize(params.WatermarkTemplateSet[z]);
                this.WatermarkTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * WeChatMiniProgramPublish response structure.
 * @class
 */
class WeChatMiniProgramPublishResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
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
 * Operation such as image rotation and flipping
 * @class
 */
class ImageTransform extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type. Valid values:
<li> Rotate: image rotation.</li>
<li> Flip: image flipping.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Rotation angle of image with its center point as origin. Value range: 0–360. This parameter is valid if `Type` is `Rotate`.
         * @type {number || null}
         */
        this.RotateAngle = null;

        /**
         * Image flipping action. Valid values:
<li>Horizental: horizontal flipping, i.e., horizontally mirrored.</li>
<li>Vertical: vertical flipping, i.e., vertically mirrored.</li>
This is valid if `Type` is `Flip`.
         * @type {string || null}
         */
        this.Flip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.RotateAngle = 'RotateAngle' in params ? params.RotateAngle : null;
        this.Flip = 'Flip' in params ? params.Flip : null;

    }
}

/**
 * CreateAnimatedGraphicsTemplate request structure.
 * @class
 */
class CreateAnimatedGraphicsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video frame rate in Hz. Value range: [1, 30].
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Maximum value of the width (or long side) of an animated image in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of an animated image in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Animated image format. Valid values: gif; webp. Default value: gif.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Image quality. Value range: [1, 100]. Default value: 75.
         * @type {number || null}
         */
        this.Quality = null;

        /**
         * Name of an animated image generating template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Control parameter of intelligent frame-specific tagging task
 * @class
 */
class FrameTagConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent frame-specific tagging task. Valid values:
<li>ON: enables intelligent frame-specific tagging task;</li>
<li>OFF: disables intelligent frame-specific tagging task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Frame capturing interval in seconds. If this parameter is left empty, 1 second will be used by default. Minimum value: 0.5 seconds.
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;

    }
}

/**
 * ExecuteFunction request structure.
 * @class
 */
class ExecuteFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of called backend API.
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * API parameter. For specific parameter format, negotiate with the backend before calling.
         * @type {string || null}
         */
        this.FunctionArg = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * The ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or a blank string is entered, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Reserved field for special purposes.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.FunctionArg = 'FunctionArg' in params ? params.FunctionArg : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * ConfirmEvents response structure.
 * @class
 */
class ConfirmEventsResponse extends  AbstractModel {
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
 * Video segment information of video track.
 * @class
 */
class VideoTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source of media material for video segment, which can be an ID of a VOD file or URL of another file.
         * @type {string || null}
         */
        this.SourceMedia = null;

        /**
         * Start time of video segment in material file in seconds. Default value: 0.
         * @type {number || null}
         */
        this.SourceMediaStartTime = null;

        /**
         * Video segment duration in seconds. By default, the length of the video material will be used, which means that the entire material will be captured. If the source file is an image, `Duration` needs to be greater than 0.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Video origin position. Valid values:
<li> Center: the origin of coordinates is the center position, such as the center of canvas.</li>
Default value: Center.
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * The horizontal position of the origin of the video segment relative to the origin of the canvas. % and px formats are supported:
<li>If the string ends in %, the `XPos` of the video segment will be at the position of the specified percentage of the canvas width; for example, `10%` means that `XPos` is 10% of the canvas width.</li>
<li>If the string ends in px, the `XPos` of the video segment will be in px; for example, `100px` means that `XPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * The vertical position of the origin of the video segment relative to the origin of the canvas. % and px formats are supported:
<li>If the string ends in %, the `YPos` of the video segment will be at the position of the specified percentage of the canvas height; for example, `10%` means that `YPos` is 10% of the canvas height.</li>
<li>If the string ends in px, the `YPos` of the video segment will be in px; for example, `100px` means that `YPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * Video segment width. % and px formats are supported:
<li>If the string ends in %, the `Width` of the video segment will be the specified percentage of the canvas width; for example, `10%` means that `Width` is 10% of the canvas width.</li>
<li>If the string ends in px, the `Width` of the video segment will be in px; for example, `100px` means that `Width` is 100 px.</li>
<li>If both `Width` and `Height` are empty, then they will be the `Width` and `Height` of the video material, respectively.</li>
<li>If `Width` is empty, but `Height` is not empty, `Width` will be proportionally scaled.</li>
<li>If `Width` is not empty, but `Height` is empty, `Height` will be proportionally scaled.</li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Video segment height. % and px formats are supported:
<li>If the string ends in %, the `Height` of the video segment will be the specified percentage of the canvas height; for example, `10%` means that `Height` is 10% of the canvas height;
</li><li>If the string ends in px, the `Height` of the video segment will be in px; for example, `100px` means that `Height` is 100 px.</li>
<li>If both `Width` and `Height` are empty, then they will be the `Width` and `Height` of the video material, respectively.</li>
<li>If `Width` is empty, but `Height` is not empty, `Width` will be proportionally scaled.</li>
<li>If `Width` is not empty, but `Height` is empty, `Height` will be proportionally scaled.</li>
         * @type {string || null}
         */
        this.Height = null;

        /**
         * Operation on video image such as image rotation.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ImageTransform> || null}
         */
        this.ImageOperations = null;

        /**
         * Operation on audio such as muting.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AudioTransform> || null}
         */
        this.AudioOperations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceMedia = 'SourceMedia' in params ? params.SourceMedia : null;
        this.SourceMediaStartTime = 'SourceMediaStartTime' in params ? params.SourceMediaStartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

        if (params.ImageOperations) {
            this.ImageOperations = new Array();
            for (let z in params.ImageOperations) {
                let obj = new ImageTransform();
                obj.deserialize(params.ImageOperations[z]);
                this.ImageOperations.push(obj);
            }
        }

        if (params.AudioOperations) {
            this.AudioOperations = new Array();
            for (let z in params.AudioOperations) {
                let obj = new AudioTransform();
                obj.deserialize(params.AudioOperations[z]);
                this.AudioOperations.push(obj);
            }
        }

    }
}

/**
 * ProcessMediaByProcedure request structure.
 * @class
 */
class ProcessMediaByProcedureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media file ID.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * [Task flow template](/document/product/266/11700#.E4.BB.BB.E5.8A.A1.E6.B5.81.E6.A8.A1.E6.9D.BF) name.
         * @type {string || null}
         */
        this.ProcedureName = null;

        /**
         * Task flow priority. The higher the value, the higher the priority. Value range: -10–10. If this parameter is left empty, 0 will be used.
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * Notification mode for task flow status change. Valid values: Finish, Change, None. If this parameter is left empty, `Finish` will be used.
         * @type {string || null}
         */
        this.TasksNotifyMode = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * ID used for deduplication. If there was a request with the same ID on the last day, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or a blank string is entered, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Reserved field for special purposes.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.ProcedureName = 'ProcedureName' in params ? params.ProcedureName : null;
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Transcoding information
 * @class
 */
class MediaTranscodeItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Address of output video file.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Transcoding specification ID. For more information, please see [Transcoding Parameter Template](https://cloud.tencent.com/document/product/266/33478#.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Sum of the average bitrate of a video stream and that of an audio stream in bps.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Maximum value of the height of a video stream in px.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Maximum value of the width of a video stream in px.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Total size of a media file in bytes (which is the sum of size of m3u8 and ts files if the video is in HLS format).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Video duration in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Container, such as m4a and mp4.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * MD5 value of video.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * Audio stream information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaAudioStreamItem> || null}
         */
        this.AudioStreamSet = null;

        /**
         * Video stream information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaVideoStreamItem> || null}
         */
        this.VideoStreamSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

        if (params.AudioStreamSet) {
            this.AudioStreamSet = new Array();
            for (let z in params.AudioStreamSet) {
                let obj = new MediaAudioStreamItem();
                obj.deserialize(params.AudioStreamSet[z]);
                this.AudioStreamSet.push(obj);
            }
        }

        if (params.VideoStreamSet) {
            this.VideoStreamSet = new Array();
            for (let z in params.VideoStreamSet) {
                let obj = new MediaVideoStreamItem();
                obj.deserialize(params.VideoStreamSet[z]);
                this.VideoStreamSet.push(obj);
            }
        }

    }
}

/**
 * Control parameter of porn information detection task
 * @class
 */
class PornConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of porn information detection in video image.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PornImgReviewTemplateInfo || null}
         */
        this.ImgReviewInfo = null;

        /**
         * Control parameter of porn information detection in speech.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PornAsrReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of porn information detection in text.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PornOcrReviewTemplateInfo || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PornImgReviewTemplateInfo();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PornAsrReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PornOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * Object recognition result segment.
 * @class
 */
class AiRecognitionTaskObjectSeqmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of recognized segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of recognition segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Confidence of recognized segment. Value range: 0–100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Zone coordinates of recognition result. The array contains four elements: [x1,y1,x2,y2], i.e., the horizontal and vertical coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * Result type of cover generating task
 * @class
 */
class MediaProcessTaskCoverBySnapshotResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of cover generating task.
         * @type {CoverBySnapshotTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of cover generating task.
         * @type {CoverBySnapshotTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new CoverBySnapshotTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new CoverBySnapshotTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Object recognition result.
 * @class
 */
class AiRecognitionTaskObjectResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input information of object recognition task.
         * @type {AiRecognitionTaskObjectResultInput || null}
         */
        this.Input = null;

        /**
         * Output information of object recognition task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskObjectResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskObjectResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskObjectResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * DescribeVideoTrackTemplates response structure.
 * @class
 */
class DescribeVideoTrackTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of video track template details.
         * @type {Array.<VideoTrackTemplateInfo> || null}
         */
        this.VideoTrackTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.VideoTrackTemplateSet) {
            this.VideoTrackTemplateSet = new Array();
            for (let z in params.VideoTrackTemplateSet) {
                let obj = new VideoTrackTemplateInfo();
                obj.deserialize(params.VideoTrackTemplateSet[z]);
                this.VideoTrackTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAIAnalysisTemplates response structure.
 * @class
 */
class DescribeAIAnalysisTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of video content analysis template details.
         * @type {Array.<AIAnalysisTemplateItem> || null}
         */
        this.AIAnalysisTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AIAnalysisTemplateSet) {
            this.AIAnalysisTemplateSet = new Array();
            for (let z in params.AIAnalysisTemplateSet) {
                let obj = new AIAnalysisTemplateItem();
                obj.deserialize(params.AIAnalysisTemplateSet[z]);
                this.AIAnalysisTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSnapshotByTimeOffsetTemplate request structure.
 * @class
 */
class CreateSnapshotByTimeOffsetTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of a time point screencapturing template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Maximum value of the width (or long side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Image format. Valid values: jpg, png. Default value: jpg.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
<li>white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.</li>
<li>gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * Speech keyword recognition result.
 * @class
 */
class AiRecognitionTaskAsrWordsResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input information of speech keyword recognition task.
         * @type {AiRecognitionTaskAsrWordsResultInput || null}
         */
        this.Input = null;

        /**
         * Output information of speech keyword recognition task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskAsrWordsResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskAsrWordsResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskAsrWordsResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * DescribeProcedureTemplates response structure.
 * @class
 */
class DescribeProcedureTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of task flow template details.
         * @type {Array.<ProcedureTemplate> || null}
         */
        this.ProcedureTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ProcedureTemplateSet) {
            this.ProcedureTemplateSet = new Array();
            for (let z in params.ProcedureTemplateSet) {
                let obj = new ProcedureTemplate();
                obj.deserialize(params.ProcedureTemplateSet[z]);
                this.ProcedureTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchMedia request structure.
 * @class
 */
class SearchMediaRequest extends  AbstractModel {
    constructor(params){
        super();

        /**
         * Search text, which fuzzily matches the media file name or description. The more matching items and the higher the match rate, the higher-ranked the result. It can contain up to 64 characters.
         * @type {string || null}
         */
        this.Text = (typeof params.Text !== 'undefined' && typeof params.Text === 'string') ? params.Text: null;

        /**
         * Tag set, which matches any element in the set.
<li>Tag length limit: 8 characters.</li>
<li>Array length limit: 10.</li>
         * @type {Array.<string> || null}
         */
        this.Tags = (typeof params.Tags !== 'undefined' && this.checkArrayAndType(params.Tags, 'string', 10)) ? params.Tags: null;

        /**
         * Category ID set, which matches the categories of the specified IDs and all subcategories. Array length limit: 10.
         * @type {Array.<number> || null}
         */
        this.ClassIds = (typeof params.ClassIds !== 'undefined' && this.checkArrayAndType(params.ClassIds, 'number', 10)) ? params.ClassIds: null;

        /**
         * Start time in the creation time range.
<li>After or at the start time.</li>
<li>In ISO 8601 format. For more information, please see [Notes on ISO Date Format](https://cloud.tencent.com/document/product/266/11732#I).</li>
         * @type {string || null}
         */
        this.StartTime = (typeof params.StartTime !== 'undefined' && typeof params.StartTime === 'string') ? params.StartTime: null;

        /**
         * End time in the creation time range.
<li>Before the end time.</li>
<li>In ISO 8601 format. For more information, please see [Notes on ISO Date Format](https://cloud.tencent.com/document/product/266/11732#I).</li>
         * @type {string || null}
         */
        this.EndTime = (typeof params.EndTime !== 'undefined' && typeof params.EndTime === 'string') ? params.EndTime: null;

        /**
         * Media file source. For valid values, please see [SourceType](https://cloud.tencent.com/document/product/266/31773#MediaSourceData).
         * @type {string || null}
         */
        this.SourceType = (typeof params.SourceType !== 'undefined' && typeof params.SourceType === 'string') ? params.SourceType: null;

        /**
         * [LVB code](https://cloud.tencent.com/document/product/267/5959) of a stream.
         * @type {string || null}
         */
        this.StreamId = (typeof params.StreamId !== 'undefined' && typeof params.StreamId === 'string') ? params.StreamId: null;

        /**
         * Unique ID of LVB recording file.
         * @type {string || null}
         */
        this.Vid = (typeof params.Vid !== 'undefined' && typeof params.Vid === 'string') ? params.Vid: null;

        /**
         * Sorting order.
<li>Valid value of `Sort.Field`: CreateTime</li>
<li>If `Text` is specified for the search, the results will be sorted by the match rate, and this field will not take effect</li>
         * @type {SortBy || null}
         */
        this.Sort = null;

        /**
         * <div id="p_offset">Start offset of a paged return. Default value: 0. Entries from No. "Offset" to No. "Offset + Limit - 1" will be returned.
<li>Value range: "Offset + Limit" cannot be more than 5,000. (For more information, please see <a href="#maxResultsDesc">Limit on the Number of Results Returned by API</a>)</li></div>
         * @type {number || null}
         */
        this.Offset = (typeof params.Offset !== 'undefined' && typeof params.Offset === 'number') ? params.Offset: null;

        /**
         * <div id="p_limit">Number of entries returned by a paged query. Default value: 10. Entries from No. "Offset" to No. "Offset + Limit - 1" will be returned.
<li>Value range: "Offset + Limit" cannot be more than 5,000. (For more information, please see <a href="#maxResultsDesc">Limit on the Number of Results Returned by API</a>)</li></div>
         * @type {number || null}
         */
        this.Limit = (typeof params.Limit !== 'undefined' && typeof params.Limit === 'number') ? params.Limit: null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = (typeof params.SubAppId !== 'undefined' && typeof params.SubAppId === 'number') ? params.SubAppId: null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.ClassIds = 'ClassIds' in params ? params.ClassIds : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Vid = 'Vid' in params ? params.Vid : null;

        if (params.Sort) {
            let obj = new SortBy();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }

    checkArrayAndType(input, type, size) {
      try {
        if(Array.isArray(input) && input.length <= size){
          return input.every(x => typeof x === type);
        }
        return false;
      } catch(e) {
        console.log(e)
        return false;
      }
    }
}

/**
 * CreateSampleSnapshotTemplate request structure.
 * @class
 */
class CreateSampleSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sampled screencapturing type. Valid values:
<li>Percent: by percent.</li>
<li>Time: by time interval.</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval.
<li>If `SampleType` is `Percent`, sampling will be performed at an interval of the specified percentage.</li>
<li>If `SampleType` is `Time`, sampling will be performed at the specified time interval in seconds.</li>
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * Name of a sampled screencapturing template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Maximum value of the width (or long side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Image format. Valid values: jpg, png. Default value: jpg.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
<li>white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.</li>
<li>gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * Suspected segment identified during OCR-based text audit in content audit
 * @class
 */
class MediaContentReviewOcrTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of suspected segment in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of suspected segment in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Confidence of suspected segment.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for suspected segment audit. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of suspected keywords.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.KeywordSet = null;

        /**
         * Zone coordinates (at the pixel level) of suspected text: [x1, y1, x2, y2], i.e., the coordinates of the top-left and bottom-right corners.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

        /**
         * URL of a suspected image (which will not be permanently stored
and will be deleted after `PicUrlExpireTime`).
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Expiration time of suspected image URL in [ISO date format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.KeywordSet = 'KeywordSet' in params ? params.KeywordSet : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * Audio gain adjustment parameter
 * @class
 */
class AudioVolumeParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to mute. Valid values: 0, 1.
<li>0: not muted.</li>
<li>1: muted.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Mute = null;

        /**
         * Audio gain. Value range: 0–10.
<li>If the value is greater than 1, the volume will be increased.</li>
<li>If the value is smaller than 1, the volume will be decreased.</li>
<li>0 and 1: no change.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Gain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mute = 'Mute' in params ? params.Mute : null;
        this.Gain = 'Gain' in params ? params.Gain : null;

    }
}

/**
 * Result type of ASR-based porn information detection in speech task in content audit
 * @class
 */
class AiReviewTaskPornAsrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of ASR-based porn information detection in speech task in content audit.
         * @type {AiReviewPornAsrTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of ASR-based porn information detection in speech task in content audit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewPornAsrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPornAsrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPornAsrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * VOD video file editing information
 * @class
 */
class EditMediaFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video ID.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Start time offset of video clipping in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of video clipping in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * ProcessMediaByProcedure response structure.
 * @class
 */
class ProcessMediaByProcedureResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
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
 * PullUpload response structure.
 * @class
 */
class PullUploadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video pull for upload task ID, which can be used to query the status of pull for upload task.
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
 * Control parameter of face recognition task
 * @class
 */
class FaceConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of face recognition task. Valid values:
<li>ON: enables intelligent face recognition task;</li>
<li>OFF: disables intelligent face recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Face recognition filter score. If this score is reached or exceeded, a recognition result will be returned. Value range: 0–100. Default value: 95.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * Default figure filter tag, which specifies the default figure tag that needs to be returned. If this parameter is left empty or a blank value is entered, all results of the default figures will be returned. Valid values:
<li>entertainment: entertainment celebrity;</li>
<li>sport: sports celebrity;</li>
<li>politician: politically sensitive figure.</li>
         * @type {Array.<string> || null}
         */
        this.DefaultLibraryLabelSet = null;

        /**
         * Custom figure filter tag, which specifies the custom figure tag that needs to be returned. If this parameter is left empty or a blank value is entered, all results of the custom figures will be returned. Valid values:
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.UserDefineLibraryLabelSet = null;

        /**
         * Figure library. Valid values:
<li>Default: default figure library;</li>
<li>UserDefine: custom figure library.</li>
<li>All: both default and custom figure libraries will be used.</li>
Default value: All (both default and custom figure libraries will be used.)
         * @type {string || null}
         */
        this.FaceLibrary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.DefaultLibraryLabelSet = 'DefaultLibraryLabelSet' in params ? params.DefaultLibraryLabelSet : null;
        this.UserDefineLibraryLabelSet = 'UserDefineLibraryLabelSet' in params ? params.UserDefineLibraryLabelSet : null;
        this.FaceLibrary = 'FaceLibrary' in params ? params.FaceLibrary : null;

    }
}

/**
 * Output of intelligent face recognition.
 * @class
 */
class AiRecognitionTaskFaceResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intelligent face recognition result set.
         * @type {Array.<AiRecognitionTaskFaceResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskFaceResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * Video editing task information
 * @class
 */
class EditMediaTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task flow status. Valid values:
<li>PROCESSING: processing;</li>
<li>FINISH: completed.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of video editing task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {EditMediaTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of video editing task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {EditMediaTaskOutput || null}
         */
        this.Output = null;

        /**
         * If a video processing flow is specified when a video editing task is initiated, this field will be the ID of the task flow.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProcedureTaskId = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * The ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or a blank string is entered, no deduplication will be performed.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SessionId = null;

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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new EditMediaTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new EditMediaTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }
        this.ProcedureTaskId = 'ProcedureTaskId' in params ? params.ProcedureTaskId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * Control parameter of porn information detection in video image task
 * @class
 */
class PornImgReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of porn information detection in video image task. Valid values:
<li>ON: enables porn information detection in video image task;</li>
<li>OFF: disables porn information detection in video image task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Filter tag for porn information detection in video image. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. Valid values:
<li>porn: porn;</li>
<li>vulgar: vulgarity;</li>
<li>intimacy: intimacy;</li>
<li>sexy: sexiness.</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 90 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 0 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * OCR-detected politically sensitive information in text
 * @class
 */
class AiReviewPoliticalOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of OCR-detected politically sensitive information in text between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for OCR-detected politically sensitive information in text. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of video segments that contain OCR-detected politically sensitive information in text.
         * @type {Array.<MediaContentReviewOcrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Control parameter of full text recognition task
 * @class
 */
class OcrFullTextConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of full text recognition task. Valid values:
<li>ON: enables intelligent full text recognition task;</li>
<li>OFF: disables intelligent full text recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * ResetProcedureTemplate request structure.
 * @class
 */
class ResetProcedureTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task flow name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter of video processing task.
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * Parameter of AI-based content audit task.
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * Parameter of AI-based content analysis task.
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * Type parameter of AI-based content recognition task.
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Watermark cycle configuration.
 * @class
 */
class WatermarkCycleConfigForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback time point in seconds when a watermark appears in a video for the first time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Display duration of a watermark in a watermark cycle in seconds.
         * @type {number || null}
         */
        this.DisplayDuration = null;

        /**
         * Duration of a watermark cycle in seconds.
If 0 is entered, a watermark will last for only one cycle (i.e., visible for `DisplayDuration` seconds throughout the video).
         * @type {number || null}
         */
        this.CycleDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.DisplayDuration = 'DisplayDuration' in params ? params.DisplayDuration : null;
        this.CycleDuration = 'CycleDuration' in params ? params.CycleDuration : null;

    }
}

/**
 * Time point screencapturing task information. This structure is only used for tasks initiated by the [CreateSnapshotByTimeOffset](https://cloud.tencent.com/document/product/266/8102) API in v2017.
 * @class
 */
class SnapshotByTimeOffsetTask2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Screencapturing task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Screenshot file ID.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * screenshot specification. For more information, please see [Parameter Template for Time Point Screencapturing](https://cloud.tencent.com/document/product/266/33480#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF).
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Result information of screencapturing.
         * @type {Array.<SnapshotByTimeOffset2017> || null}
         */
        this.SnapshotInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.SnapshotInfoSet) {
            this.SnapshotInfoSet = new Array();
            for (let z in params.SnapshotInfoSet) {
                let obj = new SnapshotByTimeOffset2017();
                obj.deserialize(params.SnapshotInfoSet[z]);
                this.SnapshotInfoSet.push(obj);
            }
        }

    }
}

/**
 * DescribeTranscodeTemplates response structure.
 * @class
 */
class DescribeTranscodeTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of transcoding template details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TranscodeTemplate> || null}
         */
        this.TranscodeTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TranscodeTemplateSet) {
            this.TranscodeTemplateSet = new Array();
            for (let z in params.TranscodeTemplateSet) {
                let obj = new TranscodeTemplate();
                obj.deserialize(params.TranscodeTemplateSet[z]);
                this.TranscodeTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAnimatedGraphicsTemplate request structure.
 * @class
 */
class DeleteAnimatedGraphicsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an animated image generating template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DeleteSnapshotByTimeOffsetTemplate request structure.
 * @class
 */
class DeleteSnapshotByTimeOffsetTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a specified time point screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * ID of a [subapplication](/document/product/266/14574) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DescribeAnimatedGraphicsTemplates response structure.
 * @class
 */
class DescribeAnimatedGraphicsTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of animated image generating template details.
         * @type {Array.<AnimatedGraphicsTemplate> || null}
         */
        this.AnimatedGraphicsTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AnimatedGraphicsTemplateSet) {
            this.AnimatedGraphicsTemplateSet = new Array();
            for (let z in params.AnimatedGraphicsTemplateSet) {
                let obj = new AnimatedGraphicsTemplate();
                obj.deserialize(params.AnimatedGraphicsTemplateSet[z]);
                this.AnimatedGraphicsTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Result information of intelligent frame-specific tagging
 * @class
 */
class MediaAiAnalysisFrameTagItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Frame-specific tag name.
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * Confidence of intelligently generated frame-specific tag between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * Input parameter type of sampling screencapturing task
 * @class
 */
class SampleSnapshotTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sampled screencapturing template ID.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * List of up to 10 image or text watermarks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

    }
}

/**
 * Control parameter of terrorism information detection task
 * @class
 */
class TerrorismConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of terrorism information detection in video image task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TerrorismImgReviewTemplateInfo || null}
         */
        this.ImgReviewInfo = null;

        /**
         * Control parameter of terrorism information detection in text task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TerrorismOcrReviewTemplateInfo || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new TerrorismImgReviewTemplateInfo();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new TerrorismOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * Control parameter of politically sensitive information detection in speech task
 * @class
 */
class PoliticalAsrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of politically sensitive information detection in speech task. Valid values:
<li>ON: enables politically sensitive information detection in speech task;</li>
<li>OFF: disables politically sensitive information detection in speech task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * CreateAnimatedGraphicsTemplate response structure.
 * @class
 */
class CreateAnimatedGraphicsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an animated image generating template.
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Result type of intelligent categorization task
 * @class
 */
class AiAnalysisTaskClassificationResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of intelligent categorization task.
         * @type {AiAnalysisTaskClassificationInput || null}
         */
        this.Input = null;

        /**
         * Output of intelligent categorization task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiAnalysisTaskClassificationOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskClassificationInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskClassificationOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Image sprite information
 * @class
 */
class MediaImageSpriteItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image sprite specification. For more information, please see [Image Sprite Parameter Template](https://cloud.tencent.com/document/product/266/33480#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.A8.A1.E6.9D.BF).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Subimage height of image sprite.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Subimage width of image sprite.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Total number of subimages in each image sprite.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Address of each image sprite.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ImageUrlSet = null;

        /**
         * Address of WebVtt file for the position-time relationship among subimages in an image sprite. The WebVtt file indicates the corresponding time points of each subimage and their coordinates in the image sprite, which is typically used by the player for implementing preview.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WebVttUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ImageUrlSet = 'ImageUrlSet' in params ? params.ImageUrlSet : null;
        this.WebVttUrl = 'WebVttUrl' in params ? params.WebVttUrl : null;

    }
}

/**
 * Face recognition result
 * @class
 */
class AiRecognitionTaskFaceResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of figure.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Figure library type, indicating to which figure library the recognized figure belongs:
<li>Default: default figure library;</li>
<li>UserDefine: custom figure library.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Figure name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Result set of segments that contain a figure.
         * @type {Array.<AiRecognitionTaskFaceSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskFaceSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Input type of intelligent categorization task
 * @class
 */
class AiAnalysisTaskCoverInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intelligent video cover generating template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeStorageDetails request structure.
 * @class
 */
class DescribeStorageDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time in ISO 8601 format. For more information, please see [Notes on ISO Date Format](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time in ISO 8601 format, which must be after the start time. For more information, please see [Notes on ISO Date Format](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Query time interval. Valid values:
<li>Minute: once per minute.</li>
<li>Hour: once per hour.</li>
<li>Day: once per day.</li>
The default value is determined by the time span. `Minute` will be used if the time span is less than 1 hour, `Hour` if less than or equal to 7 days, and `Day` if more than 7 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Storage class to be queried. Valid values:
<li>TotalStorage: total storage capacity.</li>
<li>StandardStorage: Standard storage.</li>
<li>InfrequentStorage: Standard_IA storage.</li>
Default value: TotalStorage.
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
When the value of this field is 1, the total usage of all subapplications (including primary application) are queried by an admin.
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Track information
 * @class
 */
class MediaTrack extends  AbstractModel {
    constructor(){
        super();

        /**
         * Track type. Valid values:
<ul>
<li>Video: video track, which is composed of the following items: <ul><li>VideoTrackItem</li><li>MediaTransitionItem</li> <li>EmptyTrackItem</li></ul> </li>
<li>Audio: audio track, which is composed of the following items: <ul><li>AudioTrackItem</li><li>MediaTransitionItem</li><li>EmptyTrackItem</li></ul></li>
<li>Sticker: sticker track, which is composed of the following items: <ul><li> StickerTrackItem</li><li>EmptyTrackItem</li></ul></li>
</ul>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * List of media segments on track.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaTrackItem> || null}
         */
        this.TrackItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TrackItems) {
            this.TrackItems = new Array();
            for (let z in params.TrackItems) {
                let obj = new MediaTrackItem();
                obj.deserialize(params.TrackItems[z]);
                this.TrackItems.push(obj);
            }
        }

    }
}

/**
 * Information parameter of file output by video processing
 * @class
 */
class MediaOutputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region of the bucket where an output file is stored, such as ap-guangzhou.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Bucket of output file.
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * Path to output file, which must end in "/".
         * @type {string || null}
         */
        this.Dir = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Dir = 'Dir' in params ? params.Dir : null;

    }
}

/**
 * Output of video editing task
 * @class
 */
class EditMediaTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * File type, such as mp4 and flv.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * Media file playback address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * Media file ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Output filename of up to 64 characters, which is generated by the system by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MediaName = null;

        /**
         * Category ID, which is used to categorize the media for management. A category can be created and its ID can be obtained by using the [category creating](/document/product/266/7812) API.
<li>Default value: 0, which means "Other".</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Expiration time of output media file in ISO 8601 format, after which the file will be deleted. Files will never expire by default. For more information, please see [Notes on ISO Date Format](https://cloud.tencent.com/document/product/266/11732#I).
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.MediaName = 'MediaName' in params ? params.MediaName : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * List of intelligently generated highlights.
 * @class
 */
class HighlightSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Confidence.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Start time offset of a segment.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a segment.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * DeleteWatermarkTemplate response structure.
 * @class
 */
class DeleteWatermarkTemplateResponse extends  AbstractModel {
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
 * Information of output media file.
 * @class
 */
class ComposeMediaOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filename of up to 64 characters.
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Description, which can contain up to 128 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Category ID, which is used to categorize the media for management. A category can be created and its ID can be obtained by using the [category creating](/document/product/266/7812) API.
<li>Default value: 0, which means "Other".</li>
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Expiration time of output media file in ISO 8601 format, after which the file will be deleted. Files will never expire by default. For more information, please see [Notes on ISO Date Format](https://cloud.tencent.com/document/product/266/11732#I).
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Container. Valid values: mp4, mp3. mp3 is for audio files.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Information of output video.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OutputVideoStream || null}
         */
        this.VideoStream = null;

        /**
         * Information of output audio.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OutputAudioStream || null}
         */
        this.AudioStream = null;

        /**
         * Whether to remove video data. Valid values:
<li>0: retain</li>
<li>1: remove</li>
Default value: 0.
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * Whether to remove audio data. Valid values:
<li>0: retain</li>
<li>1: remove</li>
Default value: 0.
         * @type {number || null}
         */
        this.RemoveAudio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Container = 'Container' in params ? params.Container : null;

        if (params.VideoStream) {
            let obj = new OutputVideoStream();
            obj.deserialize(params.VideoStream)
            this.VideoStream = obj;
        }

        if (params.AudioStream) {
            let obj = new OutputAudioStream();
            obj.deserialize(params.AudioStream)
            this.AudioStream = obj;
        }
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

    }
}

/**
 * Video pull for upload task information
 * @class
 */
class PullUploadTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pull for upload task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task flow status. Valid values:
<li>PROCESSING: processing;</li>
<li>FINISH: completed.</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * ID of video generated after pull for upload is completed.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Basic information of media file generated after pull for upload is completed.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaBasicInfo || null}
         */
        this.MediaBasicInfo = null;

        /**
         * Playback address generated after pull for upload is completed.
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * If a video processing flow is specified when a video is pulled for upload, this parameter will be the ID of the task flow.
         * @type {string || null}
         */
        this.ProcedureTaskId = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * The ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or a blank string is entered, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

        if (params.MediaBasicInfo) {
            let obj = new MediaBasicInfo();
            obj.deserialize(params.MediaBasicInfo)
            this.MediaBasicInfo = obj;
        }
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.ProcedureTaskId = 'ProcedureTaskId' in params ? params.ProcedureTaskId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * Control parameter of intelligent frame-specific tagging task
 * @class
 */
class FrameTagConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent frame-specific tagging task. Valid values:
<li>ON: enables intelligent frame-specific tagging task;</li>
<li>OFF: disables intelligent frame-specific tagging task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Frame capturing interval in seconds. Minimum value: 0.5 seconds.
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;

    }
}

/**
 * CreateImageSpriteTemplate response structure.
 * @class
 */
class CreateImageSpriteTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an image sprite generating template.
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAIRecognitionTemplates request structure.
 * @class
 */
class DescribeAIRecognitionTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of video content recognition templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * [Subapplication](/document/product/266/14574) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * ModifyWatermarkTemplate response structure.
 * @class
 */
class ModifyWatermarkTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image watermark address. This field has a value only when `ImageTemplate.ImageContent` is not empty.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ImageUrl = null;

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
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Intelligent recognition result.
 * @class
 */
class AiRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type. Valid values:
<li>FaceRecognition: face recognition,</li>
<li>AsrWordsRecognition: speech keyword recognition,</li>
<li>OcrWordsRecognition: text keyword recognition,</li>
<li>AsrFullTextRecognition: full speech recognition,</li>
<li>OcrFullTextRecognition: full text recognition,</li>
<li>HeadTailRecognition: video opening and ending credits recognition,</li>
<li>ObjectRecognition: object recognition.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Video opening and ending credits recognition result, which is valid when `Type` is
 `HeadTailRecognition`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskHeadTailResult || null}
         */
        this.HeadTailTask = null;

        /**
         * Video splitting recognition result, which is valid when `Type` is
 `SegmentRecognition`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskSegmentResult || null}
         */
        this.SegmentTask = null;

        /**
         * Face recognition result, which is valid when `Type` is
 `FaceRecognition`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskFaceResult || null}
         */
        this.FaceTask = null;

        /**
         * Speech keyword recognition result, which is valid when `Type` is
 `AsrWordsRecognition`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskAsrWordsResult || null}
         */
        this.AsrWordsTask = null;

        /**
         * Full speech recognition result, which is valid when `Type` is
 `AsrFullTextRecognition`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskAsrFullTextResult || null}
         */
        this.AsrFullTextTask = null;

        /**
         * Text keyword recognition result, which is valid when `Type` is
 `OcrWordsRecognition`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskOcrWordsResult || null}
         */
        this.OcrWordsTask = null;

        /**
         * Full text recognition result, which is valid when `Type` is
 `OcrFullTextRecognition`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskOcrFullTextResult || null}
         */
        this.OcrFullTextTask = null;

        /**
         * Object recognition result, which is valid when `Type` is
 `ObjectRecognition`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskObjectResult || null}
         */
        this.ObjectTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.HeadTailTask) {
            let obj = new AiRecognitionTaskHeadTailResult();
            obj.deserialize(params.HeadTailTask)
            this.HeadTailTask = obj;
        }

        if (params.SegmentTask) {
            let obj = new AiRecognitionTaskSegmentResult();
            obj.deserialize(params.SegmentTask)
            this.SegmentTask = obj;
        }

        if (params.FaceTask) {
            let obj = new AiRecognitionTaskFaceResult();
            obj.deserialize(params.FaceTask)
            this.FaceTask = obj;
        }

        if (params.AsrWordsTask) {
            let obj = new AiRecognitionTaskAsrWordsResult();
            obj.deserialize(params.AsrWordsTask)
            this.AsrWordsTask = obj;
        }

        if (params.AsrFullTextTask) {
            let obj = new AiRecognitionTaskAsrFullTextResult();
            obj.deserialize(params.AsrFullTextTask)
            this.AsrFullTextTask = obj;
        }

        if (params.OcrWordsTask) {
            let obj = new AiRecognitionTaskOcrWordsResult();
            obj.deserialize(params.OcrWordsTask)
            this.OcrWordsTask = obj;
        }

        if (params.OcrFullTextTask) {
            let obj = new AiRecognitionTaskOcrFullTextResult();
            obj.deserialize(params.OcrFullTextTask)
            this.OcrFullTextTask = obj;
        }

        if (params.ObjectTask) {
            let obj = new AiRecognitionTaskObjectResult();
            obj.deserialize(params.ObjectTask)
            this.ObjectTask = obj;
        }

    }
}

module.exports = {
    Canvas: Canvas,
    ModifySampleSnapshotTemplateResponse: ModifySampleSnapshotTemplateResponse,
    ModifyWatermarkTemplateRequest: ModifyWatermarkTemplateRequest,
    AiRecognitionTaskAsrFullTextSegmentItem: AiRecognitionTaskAsrFullTextSegmentItem,
    WeChatMiniProgramPublishRequest: WeChatMiniProgramPublishRequest,
    AiAnalysisTaskClassificationInput: AiAnalysisTaskClassificationInput,
    SvgWatermarkInput: SvgWatermarkInput,
    CreateTranscodeTemplateRequest: CreateTranscodeTemplateRequest,
    TransitionOpertion: TransitionOpertion,
    AudioTrackItem: AudioTrackItem,
    MediaAiAnalysisHighlightItem: MediaAiAnalysisHighlightItem,
    DescribeAnimatedGraphicsTemplatesRequest: DescribeAnimatedGraphicsTemplatesRequest,
    AiReviewTaskProhibitedAsrResult: AiReviewTaskProhibitedAsrResult,
    AdaptiveDynamicStreamingTemplate: AdaptiveDynamicStreamingTemplate,
    DeleteAnimatedGraphicsTemplateResponse: DeleteAnimatedGraphicsTemplateResponse,
    AiReviewTaskProhibitedOcrResult: AiReviewTaskProhibitedOcrResult,
    AiRecognitionTaskAsrFullTextResultOutput: AiRecognitionTaskAsrFullTextResultOutput,
    AiReviewProhibitedOcrTaskOutput: AiReviewProhibitedOcrTaskOutput,
    MediaMiniProgramReviewElem: MediaMiniProgramReviewElem,
    AiAnalysisTaskCoverOutput: AiAnalysisTaskCoverOutput,
    ModifySampleSnapshotTemplateRequest: ModifySampleSnapshotTemplateRequest,
    AiReviewPoliticalOcrTaskInput: AiReviewPoliticalOcrTaskInput,
    MediaInputInfo: MediaInputInfo,
    CreateImageSpriteTask2017: CreateImageSpriteTask2017,
    TempCertificate: TempCertificate,
    AiReviewTaskPoliticalOcrResult: AiReviewTaskPoliticalOcrResult,
    CreateImageSpriteTemplateRequest: CreateImageSpriteTemplateRequest,
    MediaSnapshotByTimePicInfoItem: MediaSnapshotByTimePicInfoItem,
    VideoTrackTemplateInfo: VideoTrackTemplateInfo,
    ContentReviewTemplateItem: ContentReviewTemplateItem,
    DeleteAIRecognitionTemplateResponse: DeleteAIRecognitionTemplateResponse,
    MosaicInput: MosaicInput,
    AiReviewPoliticalTaskInput: AiReviewPoliticalTaskInput,
    AudioTransform: AudioTransform,
    ComposeMediaResponse: ComposeMediaResponse,
    DeleteSampleSnapshotTemplateRequest: DeleteSampleSnapshotTemplateRequest,
    DescribeStorageDataResponse: DescribeStorageDataResponse,
    AudioTemplateInfoForUpdate: AudioTemplateInfoForUpdate,
    ModifySubAppIdInfoRequest: ModifySubAppIdInfoRequest,
    MediaSampleSnapshotItem: MediaSampleSnapshotItem,
    DescribeVideoTrackTemplatesRequest: DescribeVideoTrackTemplatesRequest,
    AiRecognitionTaskInput: AiRecognitionTaskInput,
    AudioTemplateInfo: AudioTemplateInfo,
    ExecuteFunctionResponse: ExecuteFunctionResponse,
    CoverConfigureInfo: CoverConfigureInfo,
    ComposeMediaRequest: ComposeMediaRequest,
    AIRecognitionTemplateItem: AIRecognitionTemplateItem,
    AiReviewPornAsrTaskInput: AiReviewPornAsrTaskInput,
    AiRecognitionTaskFaceResult: AiRecognitionTaskFaceResult,
    AiRecognitionTaskHeadTailResultInput: AiRecognitionTaskHeadTailResultInput,
    PushUrlCacheResponse: PushUrlCacheResponse,
    MediaProcessTaskSampleSnapshotResult: MediaProcessTaskSampleSnapshotResult,
    AiRecognitionTaskOcrFullTextResultOutput: AiRecognitionTaskOcrFullTextResultOutput,
    AiAnalysisTaskHighlightResult: AiAnalysisTaskHighlightResult,
    DeleteAIAnalysisTemplateResponse: DeleteAIAnalysisTemplateResponse,
    TextWatermarkTemplateInputForUpdate: TextWatermarkTemplateInputForUpdate,
    AiReviewTerrorismOcrTaskInput: AiReviewTerrorismOcrTaskInput,
    AiRecognitionTaskOcrWordsResultInput: AiRecognitionTaskOcrWordsResultInput,
    AiReviewPornTaskInput: AiReviewPornTaskInput,
    CreateProcedureTemplateRequest: CreateProcedureTemplateRequest,
    DescribeMediaProcessUsageDataRequest: DescribeMediaProcessUsageDataRequest,
    MediaTransitionItem: MediaTransitionItem,
    MediaAiAnalysisCoverItem: MediaAiAnalysisCoverItem,
    TagConfigureInfo: TagConfigureInfo,
    ConcatTask2017: ConcatTask2017,
    DeleteAIRecognitionTemplateRequest: DeleteAIRecognitionTemplateRequest,
    FileUploadTask: FileUploadTask,
    AiAnalysisTaskCoverResult: AiAnalysisTaskCoverResult,
    AiAnalysisTaskClassificationOutput: AiAnalysisTaskClassificationOutput,
    FileDeleteTask: FileDeleteTask,
    ModifyTranscodeTemplateRequest: ModifyTranscodeTemplateRequest,
    EditMediaTaskInput: EditMediaTaskInput,
    UserDefineAsrTextReviewTemplateInfo: UserDefineAsrTextReviewTemplateInfo,
    AiRecognitionTaskOcrWordsResultOutput: AiRecognitionTaskOcrWordsResultOutput,
    AiAnalysisTaskFrameTagOutput: AiAnalysisTaskFrameTagOutput,
    MediaProcessTaskAdaptiveDynamicStreamingResult: MediaProcessTaskAdaptiveDynamicStreamingResult,
    WatermarkTemplate: WatermarkTemplate,
    CoverBySnapshotTaskOutput: CoverBySnapshotTaskOutput,
    CommitUploadRequest: CommitUploadRequest,
    ForbidMediaDistributionRequest: ForbidMediaDistributionRequest,
    DescribeAIRecognitionTemplatesResponse: DescribeAIRecognitionTemplatesResponse,
    EditMediaResponse: EditMediaResponse,
    AudioTrackTemplateInfo: AudioTrackTemplateInfo,
    ProcessMediaByUrlRequest: ProcessMediaByUrlRequest,
    MediaAnimatedGraphicsInfo: MediaAnimatedGraphicsInfo,
    DescribeSnapshotByTimeOffsetTemplatesRequest: DescribeSnapshotByTimeOffsetTemplatesRequest,
    AiRecognitionTaskAsrFullTextResultInput: AiRecognitionTaskAsrFullTextResultInput,
    MediaMiniProgramReviewInfoItem: MediaMiniProgramReviewInfoItem,
    TaskStatData: TaskStatData,
    MediaProcessTaskInput: MediaProcessTaskInput,
    AiRecognitionTaskFaceSegmentItem: AiRecognitionTaskFaceSegmentItem,
    ProcessMediaResponse: ProcessMediaResponse,
    ClassificationConfigureInfoForUpdate: ClassificationConfigureInfoForUpdate,
    WechatMiniProgramPublishTaskInput: WechatMiniProgramPublishTaskInput,
    SvgWatermarkInputForUpdate: SvgWatermarkInputForUpdate,
    AiReviewTaskTerrorismOcrResult: AiReviewTaskTerrorismOcrResult,
    AiRecognitionTaskOcrWordsResult: AiRecognitionTaskOcrWordsResult,
    PornAsrReviewTemplateInfo: PornAsrReviewTemplateInfo,
    ModifyAnimatedGraphicsTemplateResponse: ModifyAnimatedGraphicsTemplateResponse,
    ModifyAIAnalysisTemplateResponse: ModifyAIAnalysisTemplateResponse,
    LiveRealTimeClipRequest: LiveRealTimeClipRequest,
    AiRecognitionTaskOcrFullTextSegmentItem: AiRecognitionTaskOcrFullTextSegmentItem,
    EditMediaOutputConfig: EditMediaOutputConfig,
    AiReviewPornAsrTaskOutput: AiReviewPornAsrTaskOutput,
    SimpleHlsClipResponse: SimpleHlsClipResponse,
    DeleteAIAnalysisTemplateRequest: DeleteAIAnalysisTemplateRequest,
    EditMediaRequest: EditMediaRequest,
    ConcatFileInfo2017: ConcatFileInfo2017,
    MediaProcessTaskImageSpriteResult: MediaProcessTaskImageSpriteResult,
    DescribeMediaInfosResponse: DescribeMediaInfosResponse,
    DeleteProcedureTemplateResponse: DeleteProcedureTemplateResponse,
    DescribeAdaptiveDynamicStreamingTemplatesResponse: DescribeAdaptiveDynamicStreamingTemplatesResponse,
    MediaMiniProgramReviewInfo: MediaMiniProgramReviewInfo,
    ForbidMediaDistributionResponse: ForbidMediaDistributionResponse,
    DescribeAdaptiveDynamicStreamingTemplatesRequest: DescribeAdaptiveDynamicStreamingTemplatesRequest,
    ImageWatermarkInput: ImageWatermarkInput,
    ObjectConfigureInfo: ObjectConfigureInfo,
    AiRecognitionTaskHeadTailResult: AiRecognitionTaskHeadTailResult,
    TranscodeTask2017: TranscodeTask2017,
    HighlightsConfigureInfo: HighlightsConfigureInfo,
    DescribeProcedureTemplatesRequest: DescribeProcedureTemplatesRequest,
    TagConfigureInfoForUpdate: TagConfigureInfoForUpdate,
    EmptyTrackItem: EmptyTrackItem,
    StickerTrackItem: StickerTrackItem,
    VideoTemplateInfo: VideoTemplateInfo,
    PoliticalOcrReviewTemplateInfo: PoliticalOcrReviewTemplateInfo,
    UserDefineFaceReviewTemplateInfo: UserDefineFaceReviewTemplateInfo,
    AiReviewTaskPornOcrResult: AiReviewTaskPornOcrResult,
    DescribeWatermarkTemplatesRequest: DescribeWatermarkTemplatesRequest,
    CoverBySnapshotTaskInput: CoverBySnapshotTaskInput,
    UserDefineConfigureInfo: UserDefineConfigureInfo,
    AiRecognitionTaskSegmentSegmentItem: AiRecognitionTaskSegmentSegmentItem,
    AiReviewPornOcrTaskInput: AiReviewPornOcrTaskInput,
    OcrWordsConfigureInfo: OcrWordsConfigureInfo,
    MediaSnapshotByTimeOffsetItem: MediaSnapshotByTimeOffsetItem,
    TextWatermarkTemplateInput: TextWatermarkTemplateInput,
    MediaAnimatedGraphicsItem: MediaAnimatedGraphicsItem,
    DescribeCDNUsageDataResponse: DescribeCDNUsageDataResponse,
    MediaProcessTaskAnimatedGraphicResult: MediaProcessTaskAnimatedGraphicResult,
    ModifySnapshotByTimeOffsetTemplateResponse: ModifySnapshotByTimeOffsetTemplateResponse,
    AiAnalysisTaskTagResult: AiAnalysisTaskTagResult,
    SearchMediaResponse: SearchMediaResponse,
    AiAnalysisTaskTagOutput: AiAnalysisTaskTagOutput,
    AiAnalysisTaskHighlightOutput: AiAnalysisTaskHighlightOutput,
    ProcessMediaRequest: ProcessMediaRequest,
    AiRecognitionTaskOcrFullTextResult: AiRecognitionTaskOcrFullTextResult,
    MediaProcessTaskSnapshotByTimeOffsetResult: MediaProcessTaskSnapshotByTimeOffsetResult,
    AiRecognitionTaskAsrWordsResultOutput: AiRecognitionTaskAsrWordsResultOutput,
    MediaProcessTaskTranscodeResult: MediaProcessTaskTranscodeResult,
    AiRecognitionTaskSegmentResultOutput: AiRecognitionTaskSegmentResultOutput,
    ImageSpriteTaskInput: ImageSpriteTaskInput,
    ImageWatermarkTemplate: ImageWatermarkTemplate,
    ModifySubAppIdInfoResponse: ModifySubAppIdInfoResponse,
    AsrWordsConfigureInfo: AsrWordsConfigureInfo,
    ModifySubAppIdStatusResponse: ModifySubAppIdStatusResponse,
    SimpleHlsClipRequest: SimpleHlsClipRequest,
    MediaAdaptiveDynamicStreamingInfo: MediaAdaptiveDynamicStreamingInfo,
    DescribeStorageDataRequest: DescribeStorageDataRequest,
    DeleteImageSpriteTemplateResponse: DeleteImageSpriteTemplateResponse,
    DescribeContentReviewTemplatesResponse: DescribeContentReviewTemplatesResponse,
    TEHDConfig: TEHDConfig,
    ClipTask2017: ClipTask2017,
    AnimatedGraphicsTemplate: AnimatedGraphicsTemplate,
    AiRecognitionTaskHeadTailResultOutput: AiRecognitionTaskHeadTailResultOutput,
    ModifyImageSpriteTemplateResponse: ModifyImageSpriteTemplateResponse,
    PullEventsRequest: PullEventsRequest,
    CreateWatermarkTemplateRequest: CreateWatermarkTemplateRequest,
    WechatMiniProgramPublishTask: WechatMiniProgramPublishTask,
    ComposeMediaTask: ComposeMediaTask,
    TranscodePlayInfo2017: TranscodePlayInfo2017,
    ComposeMediaTaskInput: ComposeMediaTaskInput,
    AnimatedGraphicTaskInput: AnimatedGraphicTaskInput,
    AIAnalysisTemplateItem: AIAnalysisTemplateItem,
    AiRecognitionTaskObjectResultItem: AiRecognitionTaskObjectResultItem,
    MediaSnapshotByTimeOffsetInfo: MediaSnapshotByTimeOffsetInfo,
    DescribeImageSpriteTemplatesRequest: DescribeImageSpriteTemplatesRequest,
    MediaKeyFrameDescItem: MediaKeyFrameDescItem,
    ConfirmEventsRequest: ConfirmEventsRequest,
    ModifySubAppIdStatusRequest: ModifySubAppIdStatusRequest,
    CreateWatermarkTemplateResponse: CreateWatermarkTemplateResponse,
    AiReviewTerrorismTaskOutput: AiReviewTerrorismTaskOutput,
    ResetProcedureTemplateResponse: ResetProcedureTemplateResponse,
    ProhibitedConfigureInfo: ProhibitedConfigureInfo,
    AiReviewTerrorismOcrTaskOutput: AiReviewTerrorismOcrTaskOutput,
    AiAnalysisResult: AiAnalysisResult,
    DescribeAIAnalysisTemplatesRequest: DescribeAIAnalysisTemplatesRequest,
    MediaTranscodeInfo: MediaTranscodeInfo,
    AiRecognitionTaskOcrWordsResultItem: AiRecognitionTaskOcrWordsResultItem,
    DeleteSampleSnapshotTemplateResponse: DeleteSampleSnapshotTemplateResponse,
    AiAnalysisTaskTagInput: AiAnalysisTaskTagInput,
    MediaTrackItem: MediaTrackItem,
    DescribeStorageDetailsResponse: DescribeStorageDetailsResponse,
    PullEventsResponse: PullEventsResponse,
    AiRecognitionTaskObjectResultInput: AiRecognitionTaskObjectResultInput,
    OutputVideoStream: OutputVideoStream,
    ProcedureTemplate: ProcedureTemplate,
    AiReviewTaskTerrorismResult: AiReviewTaskTerrorismResult,
    MediaContentReviewAsrTextSegmentItem: MediaContentReviewAsrTextSegmentItem,
    MediaContentReviewPoliticalSegmentItem: MediaContentReviewPoliticalSegmentItem,
    CreateSnapshotByTimeOffsetTemplateResponse: CreateSnapshotByTimeOffsetTemplateResponse,
    ImageWatermarkInputForUpdate: ImageWatermarkInputForUpdate,
    AiContentReviewTaskInput: AiContentReviewTaskInput,
    ClassificationConfigureInfo: ClassificationConfigureInfo,
    ProcessMediaByUrlResponse: ProcessMediaByUrlResponse,
    ImageSpriteTemplate: ImageSpriteTemplate,
    AiRecognitionTaskOcrFullTextSegmentTextItem: AiRecognitionTaskOcrFullTextSegmentTextItem,
    SnapshotByTimeOffsetTaskInput: SnapshotByTimeOffsetTaskInput,
    SegmentConfigureInfo: SegmentConfigureInfo,
    TaskStatDataItem: TaskStatDataItem,
    AiReviewPornOcrTaskOutput: AiReviewPornOcrTaskOutput,
    ApplyUploadRequest: ApplyUploadRequest,
    CreateSampleSnapshotTemplateResponse: CreateSampleSnapshotTemplateResponse,
    AiAnalysisTaskHighlightInput: AiAnalysisTaskHighlightInput,
    ProhibitedAsrReviewTemplateInfo: ProhibitedAsrReviewTemplateInfo,
    MediaBasicInfo: MediaBasicInfo,
    AiReviewPoliticalAsrTaskInput: AiReviewPoliticalAsrTaskInput,
    PullUploadRequest: PullUploadRequest,
    SortBy: SortBy,
    MediaAiAnalysisTagItem: MediaAiAnalysisTagItem,
    TranscodeTemplate: TranscodeTemplate,
    DescribeCDNUsageDataRequest: DescribeCDNUsageDataRequest,
    DescribeAudioTrackTemplatesResponse: DescribeAudioTrackTemplatesResponse,
    PornOcrReviewTemplateInfo: PornOcrReviewTemplateInfo,
    AiReviewTaskPoliticalAsrResult: AiReviewTaskPoliticalAsrResult,
    AiRecognitionTaskAsrWordsSegmentItem: AiRecognitionTaskAsrWordsSegmentItem,
    DescribeReviewDetailsRequest: DescribeReviewDetailsRequest,
    AiReviewProhibitedAsrTaskInput: AiReviewProhibitedAsrTaskInput,
    MediaContentReviewSegmentItem: MediaContentReviewSegmentItem,
    TerrorismOcrReviewTemplateInfo: TerrorismOcrReviewTemplateInfo,
    AiReviewTaskPornResult: AiReviewTaskPornResult,
    AiRecognitionTaskObjectResultOutput: AiRecognitionTaskObjectResultOutput,
    AiReviewProhibitedAsrTaskOutput: AiReviewProhibitedAsrTaskOutput,
    CreateClassResponse: CreateClassResponse,
    DescribeSampleSnapshotTemplatesRequest: DescribeSampleSnapshotTemplatesRequest,
    CoverConfigureInfoForUpdate: CoverConfigureInfoForUpdate,
    SampleSnapshotTemplate: SampleSnapshotTemplate,
    UserDefineOcrTextReviewTemplateInfo: UserDefineOcrTextReviewTemplateInfo,
    AdaptiveStreamTemplate: AdaptiveStreamTemplate,
    TranscodeTaskInput: TranscodeTaskInput,
    WechatPublishTask: WechatPublishTask,
    ClipFileInfo2017: ClipFileInfo2017,
    StatDataItem: StatDataItem,
    MediaSourceData: MediaSourceData,
    PushUrlCacheRequest: PushUrlCacheRequest,
    CreateAIAnalysisTemplateResponse: CreateAIAnalysisTemplateResponse,
    HeadTailConfigureInfo: HeadTailConfigureInfo,
    EventContent: EventContent,
    HighlightsConfigureInfoForUpdate: HighlightsConfigureInfoForUpdate,
    AiReviewPoliticalAsrTaskOutput: AiReviewPoliticalAsrTaskOutput,
    OutputAudioStream: OutputAudioStream,
    SpecificationDataItem: SpecificationDataItem,
    TEHDConfigForUpdate: TEHDConfigForUpdate,
    ComposeMediaTaskOutput: ComposeMediaTaskOutput,
    DescribeMediaInfosRequest: DescribeMediaInfosRequest,
    AsrFullTextConfigureInfo: AsrFullTextConfigureInfo,
    AiRecognitionTaskSegmentResult: AiRecognitionTaskSegmentResult,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    MediaAiAnalysisClassificationItem: MediaAiAnalysisClassificationItem,
    AiAnalysisTaskFrameTagResult: AiAnalysisTaskFrameTagResult,
    AiReviewPornTaskOutput: AiReviewPornTaskOutput,
    AiRecognitionTaskAsrFullTextResult: AiRecognitionTaskAsrFullTextResult,
    PoliticalImgReviewTemplateInfo: PoliticalImgReviewTemplateInfo,
    PoliticalConfigureInfo: PoliticalConfigureInfo,
    ModifyAnimatedGraphicsTemplateRequest: ModifyAnimatedGraphicsTemplateRequest,
    AiRecognitionTaskOcrWordsSegmentItem: AiRecognitionTaskOcrWordsSegmentItem,
    MediaProcessTaskResult: MediaProcessTaskResult,
    DeleteProcedureTemplateRequest: DeleteProcedureTemplateRequest,
    WatermarkInput: WatermarkInput,
    AdaptiveDynamicStreamingInfoItem: AdaptiveDynamicStreamingInfoItem,
    ProhibitedOcrReviewTemplateInfo: ProhibitedOcrReviewTemplateInfo,
    ModifyTranscodeTemplateResponse: ModifyTranscodeTemplateResponse,
    MediaMetaData: MediaMetaData,
    MediaSampleSnapshotInfo: MediaSampleSnapshotInfo,
    DescribeSubAppIdsResponse: DescribeSubAppIdsResponse,
    MediaInfo: MediaInfo,
    VideoTemplateInfoForUpdate: VideoTemplateInfoForUpdate,
    DescribeContentReviewTemplatesRequest: DescribeContentReviewTemplatesRequest,
    AdaptiveDynamicStreamingTaskInput: AdaptiveDynamicStreamingTaskInput,
    DescribeImageSpriteTemplatesResponse: DescribeImageSpriteTemplatesResponse,
    AiAnalysisTaskFrameTagInput: AiAnalysisTaskFrameTagInput,
    MediaAiAnalysisFrameTagSegmentItem: MediaAiAnalysisFrameTagSegmentItem,
    AiRecognitionTaskAsrWordsResultItem: AiRecognitionTaskAsrWordsResultItem,
    AiAnalysisTaskInput: AiAnalysisTaskInput,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    MediaKeyFrameDescInfo: MediaKeyFrameDescInfo,
    DeleteImageSpriteTemplateRequest: DeleteImageSpriteTemplateRequest,
    CreateClassRequest: CreateClassRequest,
    CreateProcedureTemplateResponse: CreateProcedureTemplateResponse,
    DescribeMediaProcessUsageDataResponse: DescribeMediaProcessUsageDataResponse,
    AiRecognitionTaskOcrFullTextResultInput: AiRecognitionTaskOcrFullTextResultInput,
    AiRecognitionTaskSegmentResultInput: AiRecognitionTaskSegmentResultInput,
    DescribeAudioTrackTemplatesRequest: DescribeAudioTrackTemplatesRequest,
    DescribeSubAppIdsRequest: DescribeSubAppIdsRequest,
    AiRecognitionTaskFaceResultInput: AiRecognitionTaskFaceResultInput,
    AiReviewPoliticalTaskOutput: AiReviewPoliticalTaskOutput,
    AiReviewTaskPoliticalResult: AiReviewTaskPoliticalResult,
    ModifySnapshotByTimeOffsetTemplateRequest: ModifySnapshotByTimeOffsetTemplateRequest,
    ProcedureTask: ProcedureTask,
    DescribeSnapshotByTimeOffsetTemplatesResponse: DescribeSnapshotByTimeOffsetTemplatesResponse,
    MediaVideoStreamItem: MediaVideoStreamItem,
    SnapshotByTimeOffsetTemplate: SnapshotByTimeOffsetTemplate,
    DeleteSnapshotByTimeOffsetTemplateResponse: DeleteSnapshotByTimeOffsetTemplateResponse,
    DescribeReviewDetailsResponse: DescribeReviewDetailsResponse,
    CreateTranscodeTemplateResponse: CreateTranscodeTemplateResponse,
    AiRecognitionTaskAsrWordsResultInput: AiRecognitionTaskAsrWordsResultInput,
    SnapshotByTimeOffset2017: SnapshotByTimeOffset2017,
    CreateAIAnalysisTemplateRequest: CreateAIAnalysisTemplateRequest,
    AiReviewTerrorismTaskInput: AiReviewTerrorismTaskInput,
    MediaAudioStreamItem: MediaAudioStreamItem,
    MediaImageSpriteInfo: MediaImageSpriteInfo,
    SubAppIdInfo: SubAppIdInfo,
    ModifyImageSpriteTemplateRequest: ModifyImageSpriteTemplateRequest,
    AiReviewProhibitedOcrTaskInput: AiReviewProhibitedOcrTaskInput,
    DeleteWatermarkTemplateRequest: DeleteWatermarkTemplateRequest,
    EditMediaStreamInfo: EditMediaStreamInfo,
    LiveRealTimeClipResponse: LiveRealTimeClipResponse,
    ModifyAIAnalysisTemplateRequest: ModifyAIAnalysisTemplateRequest,
    CommitUploadResponse: CommitUploadResponse,
    DescribeSampleSnapshotTemplatesResponse: DescribeSampleSnapshotTemplatesResponse,
    AiContentReviewResult: AiContentReviewResult,
    TerrorismImgReviewTemplateInfo: TerrorismImgReviewTemplateInfo,
    ApplyUploadResponse: ApplyUploadResponse,
    DescribeTranscodeTemplatesRequest: DescribeTranscodeTemplatesRequest,
    DescribeWatermarkTemplatesResponse: DescribeWatermarkTemplatesResponse,
    WeChatMiniProgramPublishResponse: WeChatMiniProgramPublishResponse,
    ImageTransform: ImageTransform,
    CreateAnimatedGraphicsTemplateRequest: CreateAnimatedGraphicsTemplateRequest,
    FrameTagConfigureInfo: FrameTagConfigureInfo,
    ExecuteFunctionRequest: ExecuteFunctionRequest,
    ConfirmEventsResponse: ConfirmEventsResponse,
    VideoTrackItem: VideoTrackItem,
    ProcessMediaByProcedureRequest: ProcessMediaByProcedureRequest,
    MediaTranscodeItem: MediaTranscodeItem,
    PornConfigureInfo: PornConfigureInfo,
    AiRecognitionTaskObjectSeqmentItem: AiRecognitionTaskObjectSeqmentItem,
    MediaProcessTaskCoverBySnapshotResult: MediaProcessTaskCoverBySnapshotResult,
    AiRecognitionTaskObjectResult: AiRecognitionTaskObjectResult,
    DescribeVideoTrackTemplatesResponse: DescribeVideoTrackTemplatesResponse,
    DescribeAIAnalysisTemplatesResponse: DescribeAIAnalysisTemplatesResponse,
    CreateSnapshotByTimeOffsetTemplateRequest: CreateSnapshotByTimeOffsetTemplateRequest,
    AiRecognitionTaskAsrWordsResult: AiRecognitionTaskAsrWordsResult,
    DescribeProcedureTemplatesResponse: DescribeProcedureTemplatesResponse,
    SearchMediaRequest: SearchMediaRequest,
    CreateSampleSnapshotTemplateRequest: CreateSampleSnapshotTemplateRequest,
    MediaContentReviewOcrTextSegmentItem: MediaContentReviewOcrTextSegmentItem,
    AudioVolumeParam: AudioVolumeParam,
    AiReviewTaskPornAsrResult: AiReviewTaskPornAsrResult,
    EditMediaFileInfo: EditMediaFileInfo,
    ProcessMediaByProcedureResponse: ProcessMediaByProcedureResponse,
    PullUploadResponse: PullUploadResponse,
    FaceConfigureInfo: FaceConfigureInfo,
    AiRecognitionTaskFaceResultOutput: AiRecognitionTaskFaceResultOutput,
    EditMediaTask: EditMediaTask,
    PornImgReviewTemplateInfo: PornImgReviewTemplateInfo,
    AiReviewPoliticalOcrTaskOutput: AiReviewPoliticalOcrTaskOutput,
    OcrFullTextConfigureInfo: OcrFullTextConfigureInfo,
    ResetProcedureTemplateRequest: ResetProcedureTemplateRequest,
    WatermarkCycleConfigForUpdate: WatermarkCycleConfigForUpdate,
    SnapshotByTimeOffsetTask2017: SnapshotByTimeOffsetTask2017,
    DescribeTranscodeTemplatesResponse: DescribeTranscodeTemplatesResponse,
    DeleteAnimatedGraphicsTemplateRequest: DeleteAnimatedGraphicsTemplateRequest,
    DeleteSnapshotByTimeOffsetTemplateRequest: DeleteSnapshotByTimeOffsetTemplateRequest,
    DescribeAnimatedGraphicsTemplatesResponse: DescribeAnimatedGraphicsTemplatesResponse,
    MediaAiAnalysisFrameTagItem: MediaAiAnalysisFrameTagItem,
    SampleSnapshotTaskInput: SampleSnapshotTaskInput,
    TerrorismConfigureInfo: TerrorismConfigureInfo,
    PoliticalAsrReviewTemplateInfo: PoliticalAsrReviewTemplateInfo,
    CreateAnimatedGraphicsTemplateResponse: CreateAnimatedGraphicsTemplateResponse,
    AiAnalysisTaskClassificationResult: AiAnalysisTaskClassificationResult,
    MediaImageSpriteItem: MediaImageSpriteItem,
    AiRecognitionTaskFaceResultItem: AiRecognitionTaskFaceResultItem,
    AiAnalysisTaskCoverInput: AiAnalysisTaskCoverInput,
    DescribeStorageDetailsRequest: DescribeStorageDetailsRequest,
    MediaTrack: MediaTrack,
    MediaOutputInfo: MediaOutputInfo,
    EditMediaTaskOutput: EditMediaTaskOutput,
    HighlightSegmentItem: HighlightSegmentItem,
    DeleteWatermarkTemplateResponse: DeleteWatermarkTemplateResponse,
    ComposeMediaOutput: ComposeMediaOutput,
    PullUploadTask: PullUploadTask,
    FrameTagConfigureInfoForUpdate: FrameTagConfigureInfoForUpdate,
    CreateImageSpriteTemplateResponse: CreateImageSpriteTemplateResponse,
    DescribeAIRecognitionTemplatesRequest: DescribeAIRecognitionTemplatesRequest,
    ModifyWatermarkTemplateResponse: ModifyWatermarkTemplateResponse,
    AiRecognitionResult: AiRecognitionResult,

}
