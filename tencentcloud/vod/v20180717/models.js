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
         * Canvas width, which is the width of the output video. Value range: 0-4096 px.
Default value: 0, which means that the value is the same as the video width of the first video segment in the first video track.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Canvas height, which is the height (or long side) of the output video. Value range: 0-4096 px.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Confidence of recognized segment. Value range: 0-100.
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
 * Control parameter of custom text audit task.
 * @class
 */
class UserDefineOcrTextReviewTemplateInfoForUpdate extends  AbstractModel {
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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0–100.
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
 * DescribeAllClass request structure.
 * @class
 */
class DescribeAllClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Source of media material for audio segment, which can be:
<li>ID of VOD media files</li>
<li>Download URL of other media files</li>
Note: when a download URL of other media files is used as the material source and access control (such as hotlink protection) is enabled, the URL needs to carry access control parameters (such as hotlink protection signature).
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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * Adaptive bitstream format. Valid value:
<li>HLS.</li>
         * @type {string || null}
         */
        this.Format = null;

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
         * Creation time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
        this.Format = 'Format' in params ? params.Format : null;
        this.DrmType = 'DrmType' in params ? params.DrmType : null;

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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * ManageTask response structure.
 * @class
 */
class ManageTaskResponse extends  AbstractModel {
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
 * Information of time point screenshot in VOD file
 * @class
 */
class MediaSnapshotByTimeOffsetItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specification of a time point screenshot. For more information, please see [Parameter Template for Time Point Screencapturing](https://intl.cloud.tencent.com/document/product/266/33480?from_cn_redirect=1#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF).
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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * Image sprite generating task. This structure is only used for tasks initiated by the [CreateImageSprite](https://intl.cloud.tencent.com/document/product/266/8101?from_cn_redirect=1) API in v2017.
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
         * Image sprite specification. For more information, please see [Image Sprite Generating Template](https://intl.cloud.tencent.com/document/product/266/33480?from_cn_redirect=1#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.A8.A1.E6.9D.BF).
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * ManageTask request structure.
 * @class
 */
class ManageTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video processing task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Operation type. Valid value:
<li>Abort: terminate a task. You can only terminate initiated tasks in `WAITING` status.</li>
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * VOD [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 97 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 95 will be used by default. Value range: 0-100.
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
         * Creation time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
 * DeleteContentReviewTemplate request structure.
 * @class
 */
class DeleteContentReviewTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an intelligent content recognition template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * Key hotlink protection information for generating the signature
 * @class
 */
class UrlSignatureAuthPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * [Key hotlink protection](https://intl.cloud.tencent.com/document/product/266/33986) status. Valid values:
<li>Enabled</li>
<li>Disabled</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The key for generating the signature of [key hotlink protection](https://intl.cloud.tencent.com/document/product/266/33986)
         * @type {string || null}
         */
        this.EncryptedKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.EncryptedKey = 'EncryptedKey' in params ? params.EncryptedKey : null;

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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Storage usage by billing region.
         * @type {Array.<StorageStatData> || null}
         */
        this.StorageStat = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.StorageStat) {
            this.StorageStat = new Array();
            for (let z in params.StorageStat) {
                let obj = new StorageStatData();
                obj.deserialize(params.StorageStat[z]);
                this.StorageStat.push(obj);
            }
        }
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
<li>1: mono-channel</li>
<li>2: dual-channel</li>
<li>6: stereo</li>
You cannot set the sound channel as stereo for media files in container formats for audios (FLAC, OGG, MP3, M4A).
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
 * DeletePersonSample request structure.
 * @class
 */
class DeletePersonSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a sample.
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * Sampled screenshot specification ID. For more information, please see [Sampled Screencapturing Parameter Template](https://intl.cloud.tencent.com/document/product/266/33480?from_cn_redirect=1#.E9.87.87.E6.A0.B7.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF).
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
<li>1: mono-channel</li>
<li>2: dual-channel</li>
<li>6: stereo</li>
You cannot set the sound channel as stereo for media files in container formats for audios (FLAC, OGG, MP3, M4A).
Default value: 2
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
         * List of input media tracks, i.e., information of multiple tracks composed of video, audio, image, and other materials. <li>Multiple input tracks are aligned with the output media file on the time axis. </li><li>The materials of each track at the same time point on the time axis will be superimposed. Specifically, videos or images will be superimposed for video image by track order, where a material with a higher track order will be more on top, while audio materials will be mixed. </li><li>Up to 10 tracks are supported for each type (video, audio, or image).</li>
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
         * Used to pass through user request information. `ComposeMediaComplete` callback will return the value of this parameter. It contains up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * Used to identify duplicate requests. After you send a request, if any request with the same `SessionId` has already been sent in the last three days (72 hours), an error message will be returned. `SessionId` contains up to 50 characters. If this parameter is not carried or is an empty string, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
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
         * Creation time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * CreateAdaptiveDynamicStreamingTemplate request structure.
 * @class
 */
class CreateAdaptiveDynamicStreamingTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Adaptive bitstream format. Valid values:
<li>HLS.</li>
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Parameter information of output substream for adaptive bitrate streaming. Up to 10 substreams can be output.
Note: the frame rate of all substreams must be the same; otherwise, the frame rate of the first substream will be used as the output frame rate.
         * @type {Array.<AdaptiveStreamTemplate> || null}
         */
        this.StreamInfos = null;

        /**
         * Template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * DRM scheme type. Valid values:
<li>SimpleAES.</li>
If this field is an empty string, DRM will not be performed on the video.
         * @type {string || null}
         */
        this.DrmType = null;

        /**
         * Whether to prohibit transcoding video from low bitrate to high bitrate. Valid values:
<li>0: no,</li>
<li>1: yes.</li>
Default value: no.
         * @type {number || null}
         */
        this.DisableHigherVideoBitrate = null;

        /**
         * Whether to prohibit transcoding from low resolution to high resolution. Valid values:
<li>0: no,</li>
<li>1: yes.</li>
Default value: no.
         * @type {number || null}
         */
        this.DisableHigherVideoResolution = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.Format = 'Format' in params ? params.Format : null;

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new AdaptiveStreamTemplate();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DrmType = 'DrmType' in params ? params.DrmType : null;
        this.DisableHigherVideoBitrate = 'DisableHigherVideoBitrate' in params ? params.DisableHigherVideoBitrate : null;
        this.DisableHigherVideoResolution = 'DisableHigherVideoResolution' in params ? params.DisableHigherVideoResolution : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * Control parameter of terrorism information detection in video image task.
 * @class
 */
class TerrorismImgReviewTemplateInfoForUpdate extends  AbstractModel {
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
         * Filter tags for terrorism information detection in images. If a moderation result contains a selected tag, it will be returned. If no filter tag is specified, all moderation results will be returned. Valid values:
<li>`guns`: weapons and guns</li>
<li>`crowd`: crowds</li>
<li>`bloody`: bloody images</li>
<li>`police`: police forces</li>
<li>`banners`: terrorism flags</li>
<li>`militant`: militants</li>
<li>`explosion`: explosions and fires</li>
<li>`terrorists`: terrorists</li>
<li>`scenario`: terrorism images</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0–100.
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
         * Template description. Length limit: 256 characters.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * DescribeDailyPlayStatFileList response structure.
 * @class
 */
class DescribeDailyPlayStatFileListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of playback statistics files.
         * @type {Array.<PlayStatFileInfo> || null}
         */
        this.PlayStatFileSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PlayStatFileSet) {
            this.PlayStatFileSet = new Array();
            for (let z in params.PlayStatFileSet) {
                let obj = new PlayStatFileInfo();
                obj.deserialize(params.PlayStatFileSet[z]);
                this.PlayStatFileSet.push(obj);
            }
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
 * DeleteSuperPlayerConfig request structure.
 * @class
 */
class DeleteSuperPlayerConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player configuration name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Start date in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End date in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F). The end date must be on or after the start date.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * This API is used to query video processing task types. Valid values:
<li>Transcoding: basic transcoding</li>
<li>Transcoding-TESHD: TESHD transcoding</li>
<li>Editing: video editing</li>
<li>AdaptiveBitrateStreaming: adaptive bitrate streaming</li>
<li>ContentAudit: content moderation</li>
<li>Transcode: transcoding types, including basic transcoding, TESHD transcoding and video editing. This value is not recommended.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * CreatePersonSample request structure.
 * @class
 */
class CreatePersonSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of a sample. Length limit: 20 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Usage of a sample. Valid values:
1. Recognition: used for content recognition; equivalent to `Recognition.Face`
2. Review: used for inappropriate information recognition; equivalent to `Review.Face`
3. All: equivalent to 1+2.
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * Description of a sample. Length limit: 1024 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * String generated after the sample image is encoded by [Base64](https://tools.ietf.org/html/rfc4648). Only JPEG and PNG images are supported. Array length limit: 5 images.
Note: the image must be a relatively clear full-face photo of a person and has a resolution of no less than 200 x 200.
         * @type {Array.<string> || null}
         */
        this.FaceContents = null;

        /**
         * Tags of a sample
<li>Array length limit: 20 tags</li>
<li>Length limit of a tag: 128 characters</li>
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.Usages = 'Usages' in params ? params.Usages : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.FaceContents = 'FaceContents' in params ? params.FaceContents : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
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
 * ModifySuperPlayerConfig response structure.
 * @class
 */
class ModifySuperPlayerConfigResponse extends  AbstractModel {
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
 * Video splicing task information. This structure is only used for tasks initiated by the [ConcatVideo](https://intl.cloud.tencent.com/document/product/266/7821?from_cn_redirect=1) API in v2017.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * DescribeCDNStatDetails response structure.
 * @class
 */
class DescribeCDNStatDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time granularity of every piece of data in minutes.
         * @type {number || null}
         */
        this.DataInterval = null;

        /**
         * CDN usage statistics.
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
 * AttachMediaSubtitles request structure.
 * @class
 */
class AttachMediaSubtitlesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the media file
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Operation. Valid values:
<li>`Attach`: associates subtitles.</li>
<li>`Detach`: disassociates subtitles.</li>
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * [Adaptive bitrate streaming template ID](https://intl.cloud.tencent.com/document/product/266/34071?from_cn_redirect=1#zsy)
         * @type {number || null}
         */
        this.AdaptiveDynamicStreamingDefinition = null;

        /**
         * Unique IDs of the subtitles
         * @type {Array.<string> || null}
         */
        this.SubtitleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.AdaptiveDynamicStreamingDefinition = 'AdaptiveDynamicStreamingDefinition' in params ? params.AdaptiveDynamicStreamingDefinition : null;
        this.SubtitleIds = 'SubtitleIds' in params ? params.SubtitleIds : null;

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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * Tag key value. For details, see [Tags](https://intl.cloud.tencent.com/document/product/651?from_cn_redirect=1).
 * @class
 */
class ResourceTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value.
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
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
 * DescribeWordSamples response structure.
 * @class
 */
class DescribeWordSamplesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Keyword information.
         * @type {Array.<AiSampleWord> || null}
         */
        this.WordSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.WordSet) {
            this.WordSet = new Array();
            for (let z in params.WordSet) {
                let obj = new AiSampleWord();
                obj.deserialize(params.WordSet[z]);
                this.WordSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AI-based sample management - face information.
 * @class
 */
class AiSampleFaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Face image ID.
         * @type {string || null}
         */
        this.FaceId = null;

        /**
         * Face image address.
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
        this.FaceId = 'FaceId' in params ? params.FaceId : null;
        this.Url = 'Url' in params ? params.Url : null;

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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * Control parameter of text keyword recognition.
 * @class
 */
class OcrWordsConfigureInfoForUpdate extends  AbstractModel {
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
         * Keyword filter tag, which specifies the keyword tag that needs to be returned. If this parameter is left empty or a blank value is entered, all results will be returned.
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
         * Creation time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * Control parameter of politically sensitive information detection in text task.
 * @class
 */
class PoliticalOcrReviewTemplateInfoForUpdate extends  AbstractModel {
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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0–100.
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
 * Output media file information of a video processing task.
 * @class
 */
class TaskOutputMediaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media file ID.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 
         * @type {MediaBasicInfo || null}
         */
        this.MediaBasicInfo = null;

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
         * This API is<font color='red'>disused</font>. You are advised to use an alternative API. For more information, see API overview.
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
         * Task flow priority. The higher the value, the higher the priority. Value range: -10-10. If this parameter is left empty, 0 will be used.
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
         * Used to identify duplicate requests. After you send a request, if any request with the same `SessionId` has already been sent in the last three days (72 hours), an error message will be returned. `SessionId` contains up to 50 characters. If this parameter is not carried or is an empty string, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * Information of a playback statistics file
 * @class
 */
class PlayStatFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Date of playback statistics in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?lang=en&pg=).
         * @type {string || null}
         */
        this.Date = null;

        /**
         * URL of a playback statistics file, including the following contents:
<li> date: playback date</li>
<li> file_id: video file ID</li>
<li> ip_count: number of client IPs after deduplication</li>
<li> flux: playback traffic in bytes</li>
<li> play_times: total playback times</li>
<li> pc_play_times: playback times on PC clients</li>
<li> mobile_play_times: playback times on mobile clients</li>
<li> iphone_play_times: playback times on iPhone</li>
<li> android_play_times: playback times on Android</li>
<li> host_name: domain name</li>
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
        this.Date = 'Date' in params ? params.Date : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * ModifyMediaInfo request structure.
 * @class
 */
class ModifyMediaInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique media file ID.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Media filename, which can contain up to 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Media file description, which can contain up to 128 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Media file category ID.
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Media file expiration time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I). The value `9999-12-31T23:59:59Z` indicates that the media file never expires. After the expiration, the media file and its related resources (such as transcoding results and image sprites) will be permanently deleted.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * String generated by [Base64-encoding](https://tools.ietf.org/html/rfc4648) the video cover image file (such as .jpeg or .png file). Only .gif, .jpeg, and .png image formats are supported.
         * @type {string || null}
         */
        this.CoverData = null;

        /**
         * Set of video timestamps to be added. If a timestamp already exists at an offset time point, it will be overwritten. Up to 100 timestamps can be added to one media file. In the same request, the time offset parameters of `AddKeyFrameDescs` must be different from those of `DeleteKeyFrameDescs`.
         * @type {Array.<MediaKeyFrameDescItem> || null}
         */
        this.AddKeyFrameDescs = null;

        /**
         * Time offset of the set of video timestamps to be deleted in seconds. In the same request, the time offset parameters of `AddKeyFrameDescs` must be different from those of `DeleteKeyFrameDescs`.
         * @type {Array.<number> || null}
         */
        this.DeleteKeyFrameDescs = null;

        /**
         * The value `1` indicates to delete all timestamps in the video. Other values are meaningless.
In the same request, `ClearKeyFrameDescs` and `AddKeyFrameDescs` cannot be present at the same time.
         * @type {number || null}
         */
        this.ClearKeyFrameDescs = null;

        /**
         * Set of tags to be added. Up to 16 tags can be added to one media file, and one tag can contain up to 16 characters. In the same request, the parameters of `AddTags` must be different from those of `DeleteTags`.
         * @type {Array.<string> || null}
         */
        this.AddTags = null;

        /**
         * Set of tags to be deleted. In the same request, the parameters of `AddTags` must be different from those of `DeleteTags`.
         * @type {Array.<string> || null}
         */
        this.DeleteTags = null;

        /**
         * The value `1` indicates to delete all tags of the media file. Other values are meaningless.
In the same request, `ClearTags` and `AddTags` cannot be present at the same time.
         * @type {number || null}
         */
        this.ClearTags = null;

        /**
         * Information of multiple subtitles to be added. A single media file can have up to 16 subtitles. In the same request, the subtitle IDs specified in `AddSubtitles` must be different from those in `DeleteSubtitleIds`.
         * @type {Array.<MediaSubtitleInput> || null}
         */
        this.AddSubtitles = null;

        /**
         * Unique IDs of the subtitles to be deleted. In the same request, the subtitle IDs specified in `AddSubtitles` must be different from those in `DeleteSubtitleIds`.
         * @type {Array.<string> || null}
         */
        this.DeleteSubtitleIds = null;

        /**
         * The value `1` indicates to delete all subtitle information of the media file. Other values are meaningless.
`ClearSubtitles` and `AddSubtitles` cannot co-exist in the same request.
         * @type {number || null}
         */
        this.ClearSubtitles = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.CoverData = 'CoverData' in params ? params.CoverData : null;

        if (params.AddKeyFrameDescs) {
            this.AddKeyFrameDescs = new Array();
            for (let z in params.AddKeyFrameDescs) {
                let obj = new MediaKeyFrameDescItem();
                obj.deserialize(params.AddKeyFrameDescs[z]);
                this.AddKeyFrameDescs.push(obj);
            }
        }
        this.DeleteKeyFrameDescs = 'DeleteKeyFrameDescs' in params ? params.DeleteKeyFrameDescs : null;
        this.ClearKeyFrameDescs = 'ClearKeyFrameDescs' in params ? params.ClearKeyFrameDescs : null;
        this.AddTags = 'AddTags' in params ? params.AddTags : null;
        this.DeleteTags = 'DeleteTags' in params ? params.DeleteTags : null;
        this.ClearTags = 'ClearTags' in params ? params.ClearTags : null;

        if (params.AddSubtitles) {
            this.AddSubtitles = new Array();
            for (let z in params.AddSubtitles) {
                let obj = new MediaSubtitleInput();
                obj.deserialize(params.AddSubtitles[z]);
                this.AddSubtitles.push(obj);
            }
        }
        this.DeleteSubtitleIds = 'DeleteSubtitleIds' in params ? params.DeleteSubtitleIds : null;
        this.ClearSubtitles = 'ClearSubtitles' in params ? params.ClearSubtitles : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DeleteTranscodeTemplate request structure.
 * @class
 */
class DeleteTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of transcoding template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * Control parameter of porn detection in speech task.
 * @class
 */
class PornAsrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of porn detection in speech task. Valid values:
<li>ON: enables porn detection in speech task;</li>
<li>OFF: disables porn detection in speech task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0–100.
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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * CDN log information
 * @class
 */
class CdnLogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log date in the format of `yyyy-MM-dd`, such as 2018-03-01.
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Log name in the format of date and time-domain name,
such as 2018120101-test.vod2.mqcloud.com.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Log download link, which is valid for 24 hours.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Log start time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?lang=en&pg=)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Log end time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?lang=en&pg=)
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
        this.Date = 'Date' in params ? params.Date : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Subtitle information
 * @class
 */
class MediaSubtitleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subtitle information list
         * @type {Array.<MediaSubtitleItem> || null}
         */
        this.SubtitleSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SubtitleSet) {
            this.SubtitleSet = new Array();
            for (let z in params.SubtitleSet) {
                let obj = new MediaSubtitleItem();
                obj.deserialize(params.SubtitleSet[z]);
                this.SubtitleSet.push(obj);
            }
        }

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
         * Task type.
<li>Transcoding: basic transcoding</li>
<li>Transcoding-TESHD: TESHD transcoding</li>
<li>Editing: video editing</li>
<li>AdaptiveBitrateStreaming: adaptive bitrate streaming</li>
<li>ContentAudit: content moderation</li>
<li>Transcode: transcoding types, including basic transcoding, TESHD transcoding and video editing. This value is not recommended.</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Task statistics overview (usage unit: second).
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
 * Control parameter of full text recognition task
 * @class
 */
class OcrFullTextConfigureInfoForUpdate extends  AbstractModel {
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
         * [Task flow template](https://intl.cloud.tencent.com/document/product/266/11700?from_cn_redirect=1#.E4.BB.BB.E5.8A.A1.E6.B5.81.E6.A8.A1.E6.9D.BF) name.
         * @type {string || null}
         */
        this.ProcedureName = null;

        /**
         * Task flow priority. The higher the value, the higher the priority. Value range: -10-10. If this parameter is left empty, 0 will be used.
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
         * Used to identify duplicate requests. After you send a request, if any request with the same `SessionId` has already been sent in the last three days (72 hours), an error message will be returned. `SessionId` contains up to 50 characters. If this parameter is not carried or is an empty string, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Reserved field for special purposes.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * CreateWordSamples response structure.
 * @class
 */
class CreateWordSamplesResponse extends  AbstractModel {
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
 * DeleteAdaptiveDynamicStreamingTemplate response structure.
 * @class
 */
class DeleteAdaptiveDynamicStreamingTemplateResponse extends  AbstractModel {
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
 * CreateWordSamples request structure.
 * @class
 */
class CreateWordSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <b>Keyword usage. Valid values:</b>
1. Recognition.Ocr: OCR-based content recognition
2. Recognition.Asr: ASR-based content recognition
3. Review.Ocr: OCR-based inappropriate information recognition
4. Review.Asr: ASR-based inappropriate information recognition
<b>Valid values can also be:</b>
5. Recognition: ASR- and OCR-based content recognition; equivalent to 1+2
6. Review: ASR- and OCR-based inappropriate information recognition; equivalent to 3+4
7. All: ASR- and OCR-based content recognition and inappropriate information recognition; equivalent to 1+2+3+4
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * Keyword. Array length limit: 100.
         * @type {Array.<AiSampleWordInfo> || null}
         */
        this.Words = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.Usages = 'Usages' in params ? params.Usages : null;

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new AiSampleWordInfo();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Control parameter of politically sensitive information detection in speech task.
 * @class
 */
class PoliticalAsrReviewTemplateInfoForUpdate extends  AbstractModel {
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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0–100.
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
 * AI-based sample management - face data operation.
 * @class
 */
class AiSampleFaceOperation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation type. Valid values: add, delete, reset. The `reset` operation will clear the existing face data of a figure and add `FaceContents` as the specified face data.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Face ID set, which is required if `Type` is `delete`.
         * @type {Array.<string> || null}
         */
        this.FaceIds = null;

        /**
         * String set generated by [Base64-encoding](https://tools.ietf.org/html/rfc4648) the face image.
<li>This field is required if `Type` is `add` or `reset`;</li>
<li>Array length limit: 5 images.</li>
Note: the image must be a relatively clear full-face photo of a figure in at least 200 * 200 px.
         * @type {Array.<string> || null}
         */
        this.FaceContents = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.FaceIds = 'FaceIds' in params ? params.FaceIds : null;
        this.FaceContents = 'FaceContents' in params ? params.FaceContents : null;

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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * Subtitle information
 * @class
 */
class MediaSubtitleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique subtitle ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Subtitle name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Subtitle language. Common values:
<li>`cn`: Chinese</li>
<li>`ja`: Japanese</li>
<li>`en-US`: English</li>
For other values, see [RFC 5646](https://tools.ietf.org/html/rfc5646).
         * @type {string || null}
         */
        this.Language = null;

        /**
         * Subtitle format. Valid value:
<li>vtt</li>
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Subtitle URL
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Language = 'Language' in params ? params.Language : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * Control parameter of prohibited information detection in speech task
 * @class
 */
class ProhibitedAsrReviewTemplateInfoForUpdate extends  AbstractModel {
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
         * [LVB code](https://intl.cloud.tencent.com/document/product/267/5959?from_cn_redirect=1) of a stream.
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Start time of stream clipping in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of stream clipping in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Whether to clip persistently. 0: no, 1: yes. Default: no.
         * @type {number || null}
         */
        this.IsPersistence = null;

        /**
         * Storage expiration time of video generated by persistent clipping in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I). `9999-12-31T23:59:59Z` means `never expire`. After the expiration, the media file and its related resources (such as transcoding results and image sprites) will be permanently deleted. This parameter will be valid only when `IsPersistence` is 1. By default, the video will never expire.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * VOD task flow processing for video generated by persistent clipping. For more information, please see [Specifying Task Flow After Upload](https://intl.cloud.tencent.com/document/product/266/9759?from_cn_redirect=1). This parameter will be valid only when `IsPersistence` is 1.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * DeleteAdaptiveDynamicStreamingTemplate request structure.
 * @class
 */
class DeleteAdaptiveDynamicStreamingTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of adaptive bitrate streaming template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Category ID, which is used to categorize the media for management. A category can be created and its ID can be obtained by using the [category creating](https://intl.cloud.tencent.com/document/product/266/7812?from_cn_redirect=1) API.
<li>Default value: 0, which means "Other".</li>
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Expiration time of output media file in ISO 8601 format, after which the file will be deleted. Files will never expire by default. For more information, please see [Notes on ISO Date Format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
 * Information of a video splitting task.
 * @class
 */
class SplitMediaTaskSegmentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input information of a video splitting task.
         * @type {SplitMediaTaskInput || null}
         */
        this.Input = null;

        /**
         * Output information of a video splitting task.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {TaskOutputMediaInfo || null}
         */
        this.Output = null;

        /**
         * If a video processing flow is specified when a video splitting task is initiated, this field will be the task flow ID.
         * @type {string || null}
         */
        this.ProcedureTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Input) {
            let obj = new SplitMediaTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new TaskOutputMediaInfo();
            obj.deserialize(params.Output)
            this.Output = obj;
        }
        this.ProcedureTaskId = 'ProcedureTaskId' in params ? params.ProcedureTaskId : null;

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
         * Unique ID of a video clip for persistent storage.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.FileId = 'FileId' in params ? params.FileId : null;
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * [Task flow template](https://intl.cloud.tencent.com/document/product/266/11700?from_cn_redirect=1#.E4.BB.BB.E5.8A.A1.E6.B5.81.E6.A8.A1.E6.9D.BF) name, which should be entered if you want to perform a task flow on the generated new video.
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
         * Task priority. The higher the value, the higher the priority. Value range: -10-10. If this parameter is left empty, 0 will be used.
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * Used to identify duplicate requests. After you send a request, if any request with the same `SessionId` has already been sent in the last three days (72 hours), an error message will be returned. `SessionId` contains up to 50 characters. If this parameter is not carried or is an empty string, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Reserved field for special purposes.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * @type {Array.<MediaInfo> || null}
         */
        this.MediaInfoSet = null;

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
 * General data type used to describe a time period.
 * @class
 */
class TimeRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * <li>After or at this time (start time).</li>
<li>In ISO 8601 format. For more information, please see [ISO Date Format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).</li>
         * @type {string || null}
         */
        this.After = null;

        /**
         * <li>Earlier than this time (end time).</li>
<li>In ISO 8601 format. For more information, please see [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).</li>
         * @type {string || null}
         */
        this.Before = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.After = 'After' in params ? params.After : null;
        this.Before = 'Before' in params ? params.Before : null;

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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
<li>If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width. For example, `10%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in px, the `Width` of the watermark will be in pixels. For example, `100px` means that `Width` is 100 pixels. Value range: [8, 4096].</li>
Default value: 10%.
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Watermark height. % and px formats are supported:
<li>If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px. Valid values: 0 or [8,4096].</li>
Default value: 0 px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
         * @type {string || null}
         */
        this.Height = null;

        /**
         * Repeat type of an animated watermark. Valid values:
<li>once: no longer appears after watermark playback ends.</li>
<li>repeat_last_frame: stays on the last frame after watermark playback ends.</li>
<li>repeat (default): repeats the playback until the video ends.</li>
         * @type {string || null}
         */
        this.RepeatType = null;

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
        this.RepeatType = 'RepeatType' in params ? params.RepeatType : null;

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
 * Control parameter of full speech recognition task.
 * @class
 */
class AsrFullTextConfigureInfoForUpdate extends  AbstractModel {
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
         * Format of generated subtitles file. If an empty string is entered, no subtitles files will be generated. Valid values:
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * Video transcoding task information. This structure is only used for tasks initiated by the [ConvertVodFile](https://intl.cloud.tencent.com/document/product/266/7822?from_cn_redirect=1) API in v2017.
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
 * CreatePersonSample response structure.
 * @class
 */
class CreatePersonSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of a sample.
         * @type {AiSamplePerson || null}
         */
        this.Person = null;

        /**
         * Information of samples that failed the verification by facial feature positioning.
         * @type {Array.<AiSampleFailFaceInfo> || null}
         */
        this.FailFaceInfoSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Person) {
            let obj = new AiSamplePerson();
            obj.deserialize(params.Person)
            this.Person = obj;
        }

        if (params.FailFaceInfoSet) {
            this.FailFaceInfoSet = new Array();
            for (let z in params.FailFaceInfoSet) {
                let obj = new AiSampleFailFaceInfo();
                obj.deserialize(params.FailFaceInfoSet[z]);
                this.FailFaceInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateContentReviewTemplate response structure.
 * @class
 */
class CreateContentReviewTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an intelligent recognition template.
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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * Control parameter of prohibited information detection task
 * @class
 */
class ProhibitedConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of prohibited information detection in speech.
         * @type {ProhibitedAsrReviewTemplateInfoForUpdate || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of prohibited information detection in text.
         * @type {ProhibitedOcrReviewTemplateInfoForUpdate || null}
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
            let obj = new ProhibitedAsrReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new ProhibitedOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

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
 * DeleteWordSamples request structure.
 * @class
 */
class DeleteWordSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword. Array length limit: 100 words.
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * Source of media material for sticker segment, which can be:
<li>ID of VOD media files</li>
<li>Download URL of other media files</li>
Note: when a download URL of other media files is used as the material source and access control (such as hotlink protection) is enabled, the URL needs to carry access control parameters (such as hotlink protection signature).
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
         * Video frame rate in Hz. Value range: [0,100].
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
         * Fill type, the way of processing a screenshot when the configured aspect ratio is different from that of the source video. Valid values:
<li>stretch: stretches the video image frame by frame to fill the screen. The video image may become "squashed" or "stretched" after transcoding.</li>
<li>black: fills the uncovered area with black color, without changing the image's aspect ratio.</li>
<li>white: fills the uncovered area with white color, without changing the image's aspect ratio.</li>
<li>gauss: applies Gaussian blur to the uncovered area, without changing the image's aspect ratio.</li>
Default value: black
         * @type {string || null}
         */
        this.FillType = null;

        /**
         * Video Constant Rate Factor (CRF). Value range: 1-51.
If this parameter is specified, CRF will be used to control video bitrate for transcoding and the original video bitrate will not be used.
We don’t recommend specifying this parameter unless you have special requirements.
         * @type {number || null}
         */
        this.Vcrf = null;

        /**
         * I-frame interval in frames. Valid values: 0 and 1-100000.
When this parameter is set to 0 or left empty, `Gop` will be automatically set.
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
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Vcrf = 'Vcrf' in params ? params.Vcrf : null;
        this.Gop = 'Gop' in params ? params.Gop : null;

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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
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
 * Control parameter of porn detection in text task.
 * @class
 */
class PornOcrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of porn detection in text task. Valid values:
<li>ON: enables porn detection in text task;</li>
<li>OFF: disables porn detection in text task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0–100.
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * ModifyContentReviewTemplate response structure.
 * @class
 */
class ModifyContentReviewTemplateResponse extends  AbstractModel {
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * Control parameter of video splitting recognition task
 * @class
 */
class SegmentConfigureInfoForUpdate extends  AbstractModel {
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
         * Confidence of split segment. Value range: 0-100.
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
 * CreateSuperPlayerConfig response structure.
 * @class
 */
class CreateSuperPlayerConfigResponse extends  AbstractModel {
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
 * ModifyAdaptiveDynamicStreamingTemplate request structure.
 * @class
 */
class ModifyAdaptiveDynamicStreamingTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of adaptive bitrate streaming template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Adaptive bitstream format. Valid values:
<li>HLS.</li>
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Whether to prohibit transcoding video from low bitrate to high bitrate. Valid values:
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
         * Parameter information of input stream for adaptive bitrate streaming. Up to 10 streams can be input.
Note: the frame rate of all streams must be the same; otherwise, the frame rate of the first stream will be used as the output frame rate.
         * @type {Array.<AdaptiveStreamTemplate> || null}
         */
        this.StreamInfos = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.Format = 'Format' in params ? params.Format : null;
        this.DisableHigherVideoBitrate = 'DisableHigherVideoBitrate' in params ? params.DisableHigherVideoBitrate : null;
        this.DisableHigherVideoResolution = 'DisableHigherVideoResolution' in params ? params.DisableHigherVideoResolution : null;

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new AdaptiveStreamTemplate();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * Animated image generating template ID. For more information, please see [Animated Image Generating Parameter Template](https://intl.cloud.tencent.com/document/product/266/33481?from_cn_redirect=1#.3Cspan-id-.3D-.22zdt.22.3E.3C.2Fspan.3E.E8.BD.AC.E5.8A.A8.E5.9B.BE.E6.A8.A1.E6.9D.BF).
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
 * ModifyWordSample request structure.
 * @class
 */
class ModifyWordSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword. Length limit: 128 characters.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * <b>Keyword usage. Valid values:</b>
1. Recognition.Ocr: OCR-based content recognition
2. Recognition.Asr: ASR-based content recognition
3. Review.Ocr: OCR-based inappropriate information recognition
4. Review.Asr: ASR-based inappropriate information recognition
<b>Valid values can also be:</b>
5. Recognition: ASR- and OCR-based content recognition; equivalent to 1+2
6. Review: ASR- and OCR-based inappropriate information recognition; equivalent to 3+4
7. All: equivalent to 1+2+3+4
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * Tag operation information.
         * @type {AiSampleTagOperation || null}
         */
        this.TagOperationInfo = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Usages = 'Usages' in params ? params.Usages : null;

        if (params.TagOperationInfo) {
            let obj = new AiSampleTagOperation();
            obj.deserialize(params.TagOperationInfo)
            this.TagOperationInfo = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * Confidence of recognized segment. Value range: 0-100.
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
 * DeleteMedia response structure.
 * @class
 */
class DeleteMediaResponse extends  AbstractModel {
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * Media file information list
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
 * Input parameters of subtile information
 * @class
 */
class MediaSubtitleInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subtitle name. Length limit: 64 characters
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Subtitle language. Common values:
<li>`cn`: Chinese</li>
<li>`ja`: Japanese</li>
<li>`en-US`: English</li>
For other valid values, see [RFC 5646](https://tools.ietf.org/html/rfc5646).
         * @type {string || null}
         */
        this.Language = null;

        /**
         * Subtitle format. Valid value:
<li>vtt</li>
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Subtitle content, which is [Base64-encoded](https://tools.ietf.org/html/rfc4648) strings
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Subtitle ID. Its length cannot exceed 16 characters. Uppercase and lowercase letters, numbers, underscores (_), and hyphens (-) are supported. It cannot be the same as the IDs of the existing subtitles in the media file.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Language = 'Language' in params ? params.Language : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Id = 'Id' in params ? params.Id : null;

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
         * Media file ID, i.e., the globally unique ID of a file in VOD assigned by the VOD backend after successful upload. This field can be obtained through the [video upload completion event notification](https://intl.cloud.tencent.com/document/product/266/7830?from_cn_redirect=1) or [VOD Console](https://console.cloud.tencent.com/vod/media).
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
         * Task flow priority. The higher the value, the higher the priority. Value range: -10-10. If this parameter is left empty, 0 will be used.
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
         * Used to identify duplicate requests. After you send a request, if any request with the same `SessionId` has already been sent in the last three days (72 hours), an error message will be returned. `SessionId` contains up to 50 characters. If this parameter is not carried or is an empty string, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Reserved field for special purposes.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * ModifyMediaInfo response structure.
 * @class
 */
class ModifyMediaInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL of new video cover.
* Note: this returned value is valid only if the request carries `CoverData`.*
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * Added subtitle information
         * @type {Array.<MediaSubtitleItem> || null}
         */
        this.AddedSubtitleSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;

        if (params.AddedSubtitleSet) {
            this.AddedSubtitleSet = new Array();
            for (let z in params.AddedSubtitleSet) {
                let obj = new MediaSubtitleItem();
                obj.deserialize(params.AddedSubtitleSet[z]);
                this.AddedSubtitleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * AI-based sample management - keyword output information.
 * @class
 */
class AiSampleWord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Keyword tag.
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * Keyword use case.
         * @type {Array.<string> || null}
         */
        this.UsageSet = null;

        /**
         * Creation time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.UsageSet = 'UsageSet' in params ? params.UsageSet : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
 * ModifyAdaptiveDynamicStreamingTemplate response structure.
 * @class
 */
class ModifyAdaptiveDynamicStreamingTemplateResponse extends  AbstractModel {
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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

        /**
         * Transcoding progress. Value range: 0-100.
         * @type {number || null}
         */
        this.Progress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
        this.Progress = 'Progress' in params ? params.Progress : null;

    }
}

/**
 * Domain name information
 * @class
 */
class DomainDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Acceleration region information
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<AccelerateAreaInfo> || null}
         */
        this.AccelerateAreaInfos = null;

        /**
         * Deployment status. Valid values:
<li>Online</li>
<li>Deploying</li>
<li>Locked: you cannot change the deployment status of locked domain names</li>
         * @type {string || null}
         */
        this.DeployStatus = null;

        /**
         * HTTPS configuration information
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {DomainHTTPSConfig || null}
         */
        this.HTTPSConfig = null;

        /**
         * [Key hotlink protection](https://intl.cloud.tencent.com/document/product/266/33986) configuration
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {UrlSignatureAuthPolicy || null}
         */
        this.UrlSignatureAuthPolicy = null;

        /**
         * [Referer hotlink protection](https://intl.cloud.tencent.com/document/product/266/33985) configuration
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {RefererAuthPolicy || null}
         */
        this.RefererAuthPolicy = null;

        /**
         * The time when the domain name was added in the VOD system
<li>The time is in [ISO 8601 date format](https://intl.cloud.tencent.com/document/product/266/11732).</li>
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.AccelerateAreaInfos) {
            this.AccelerateAreaInfos = new Array();
            for (let z in params.AccelerateAreaInfos) {
                let obj = new AccelerateAreaInfo();
                obj.deserialize(params.AccelerateAreaInfos[z]);
                this.AccelerateAreaInfos.push(obj);
            }
        }
        this.DeployStatus = 'DeployStatus' in params ? params.DeployStatus : null;

        if (params.HTTPSConfig) {
            let obj = new DomainHTTPSConfig();
            obj.deserialize(params.HTTPSConfig)
            this.HTTPSConfig = obj;
        }

        if (params.UrlSignatureAuthPolicy) {
            let obj = new UrlSignatureAuthPolicy();
            obj.deserialize(params.UrlSignatureAuthPolicy)
            this.UrlSignatureAuthPolicy = obj;
        }

        if (params.RefererAuthPolicy) {
            let obj = new RefererAuthPolicy();
            obj.deserialize(params.RefererAuthPolicy)
            this.RefererAuthPolicy = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

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
 * Control parameter of object recognition task
 * @class
 */
class ObjectConfigureInfoForUpdate extends  AbstractModel {
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
 * DeleteMedia request structure.
 * @class
 */
class DeleteMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique media file ID.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Content to be deleted. The default value is "[]", which indicates to delete the media file and all its corresponding files generated by video processing.
         * @type {Array.<MediaDeleteItem> || null}
         */
        this.DeleteParts = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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

        if (params.DeleteParts) {
            this.DeleteParts = new Array();
            for (let z in params.DeleteParts) {
                let obj = new MediaDeleteItem();
                obj.deserialize(params.DeleteParts[z]);
                this.DeleteParts.push(obj);
            }
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * CreateSuperPlayerConfig request structure.
 * @class
 */
class CreateSuperPlayerConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player configuration name, which can contain up to 64 letters, digits, underscores, and hyphens (such as test_ABC-123) and must be unique under a user.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Switch of DRM-protected adaptive bitstream playback:
<li>ON: enabled, indicating to play back only output adaptive bitstreams protected by DRM;</li>
<li>OFF: disabled, indicating to play back unencrypted output adaptive bitstreams.</li>
Default value: OFF.
         * @type {string || null}
         */
        this.DrmSwitch = null;

        /**
         * ID of the unencrypted adaptive bitrate streaming template that allows output, which is required if `DrmSwitch` is `OFF`.
         * @type {number || null}
         */
        this.AdaptiveDynamicStreamingDefinition = null;

        /**
         * Content of the DRM-protected adaptive bitrate streaming template that allows output, which is required if `DrmSwitch` is `ON`.
         * @type {DrmStreamingsInfo || null}
         */
        this.DrmStreamingsInfo = null;

        /**
         * ID of the image sprite generating template that allows output.
         * @type {number || null}
         */
        this.ImageSpriteDefinition = null;

        /**
         * Display name of player for substreams with different resolutions. If this parameter is left empty or an empty array, the default configuration will be used:
<li>MinEdgeLength: 240, Name: LD;</li>
<li>MinEdgeLength: 480, Name: SD;</li>
<li>MinEdgeLength: 720, Name: HD;</li>
<li>MinEdgeLength: 1080, Name: FHD;</li>
<li>MinEdgeLength: 1440, Name: 2K;</li>
<li>MinEdgeLength: 2160, Name: 4K;</li>
<li>MinEdgeLength: 4320, Name: 8K.</li>
         * @type {Array.<ResolutionNameInfo> || null}
         */
        this.ResolutionNames = null;

        /**
         * Domain name used for playback. If it is left empty or set to `Default`, the domain name configured in [Default Distribution Configuration](https://intl.cloud.tencent.com/document/product/266/33373?from_cn_redirect=1) will be used.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Scheme used for playback. If it is left empty or set to `Default`, the scheme configured in [Default Distribution Configuration](https://intl.cloud.tencent.com/document/product/266/33373?from_cn_redirect=1) will be used. Other valid values:
<li>HTTP;</li>
<li>HTTPS.</li>
         * @type {string || null}
         */
        this.Scheme = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.DrmSwitch = 'DrmSwitch' in params ? params.DrmSwitch : null;
        this.AdaptiveDynamicStreamingDefinition = 'AdaptiveDynamicStreamingDefinition' in params ? params.AdaptiveDynamicStreamingDefinition : null;

        if (params.DrmStreamingsInfo) {
            let obj = new DrmStreamingsInfo();
            obj.deserialize(params.DrmStreamingsInfo)
            this.DrmStreamingsInfo = obj;
        }
        this.ImageSpriteDefinition = 'ImageSpriteDefinition' in params ? params.ImageSpriteDefinition : null;

        if (params.ResolutionNames) {
            this.ResolutionNames = new Array();
            for (let z in params.ResolutionNames) {
                let obj = new ResolutionNameInfo();
                obj.deserialize(params.ResolutionNames[z]);
                this.ResolutionNames.push(obj);
            }
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Scheme = 'Scheme' in params ? params.Scheme : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
<li>If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px;</li>
`0px` means that `Height` will be proportionally scaled according to the video width.
         * @type {string || null}
         */
        this.Height = null;

        /**
         * Repeat type of an animated watermark. Valid values:
<li>once: no longer appears after watermark playback ends.</li>
<li>repeat_last_frame: stays on the last frame after watermark playback ends.</li>
<li>repeat (default): repeats the playback until the video ends.</li>
         * @type {string || null}
         */
        this.RepeatType = null;

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
        this.RepeatType = 'RepeatType' in params ? params.RepeatType : null;

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
         * Whether to store the video clip persistently. 0: no (default), 1: yes.
         * @type {number || null}
         */
        this.IsPersistence = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.IsPersistence = 'IsPersistence' in params ? params.IsPersistence : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Content to be deleted when a VOD video is deleted

 * @class
 */
class MediaDeleteItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of the content to be deleted. If this field is left empty, the parameter will be invalid. Valid values:
<li>TranscodeFiles: deletes transcoded files.</li>
<li>WechatPublishFiles: deletes files published on WeChat.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of the template for which to delete the videos of the type specified by the `Type` parameter. For the template definition, please see [Transcoding Template](https://intl.cloud.tencent.com/document/product/266/33478?from_cn_redirect=1#.3Cspan-id-.3D-.22zm.22-.3E.3C.2Fspan.3E.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF).
Default value: 0, which indicates to delete all videos of the type specified by the `Type` parameter.
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * AI-based sample management - figure information.
 * @class
 */
class AiSamplePerson extends  AbstractModel {
    constructor(){
        super();

        /**
         * Figure ID.
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * Figure name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Figure description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Face information.
         * @type {Array.<AiSampleFaceInfo> || null}
         */
        this.FaceInfoSet = null;

        /**
         * Figure tag.
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * Use case.
         * @type {Array.<string> || null}
         */
        this.UsageSet = null;

        /**
         * Creation time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.FaceInfoSet) {
            this.FaceInfoSet = new Array();
            for (let z in params.FaceInfoSet) {
                let obj = new AiSampleFaceInfo();
                obj.deserialize(params.FaceInfoSet[z]);
                this.FaceInfoSet.push(obj);
            }
        }
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.UsageSet = 'UsageSet' in params ? params.UsageSet : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
 * DescribeDailyPlayStatFileList request structure.
 * @class
 */
class DescribeDailyPlayStatFileListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start date in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?lang=en&pg=).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End date in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?lang=en&pg=).
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * VOD [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * DescribeSuperPlayerConfigs response structure.
 * @class
 */
class DescribeSuperPlayerConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Player configuration array.
         * @type {Array.<PlayerConfig> || null}
         */
        this.PlayerConfigSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.PlayerConfigSet) {
            this.PlayerConfigSet = new Array();
            for (let z in params.PlayerConfigSet) {
                let obj = new PlayerConfig();
                obj.deserialize(params.PlayerConfigSet[z]);
                this.PlayerConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Control parameter of speech keyword recognition.
 * @class
 */
class AsrWordsConfigureInfoForUpdate extends  AbstractModel {
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
         * Keyword filter tag, which specifies the keyword tag that needs to be returned. If this parameter is left empty or a blank value is entered, all results will be returned.
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
 * DescribeStorageData request structure.
 * @class
 */
class DescribeStorageDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * List of intelligent content recognition template details.
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
         * Creation time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
 * Control parameter of terrorism information detection in text task
 * @class
 */
class TerrorismOcrReviewTemplateInfoForUpdate extends  AbstractModel {
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
 * Control parameter of custom speech audit task
 * @class
 */
class UserDefineAsrTextReviewTemplateInfoForUpdate extends  AbstractModel {
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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0–100.
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
 * Output of video opening and ending credits recognition.
 * @class
 */
class AiRecognitionTaskHeadTailResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Confidence of recognized opening credits. Value range: 0-100.
         * @type {number || null}
         */
        this.HeadConfidence = null;

        /**
         * End time point of video opening credits in seconds.
         * @type {number || null}
         */
        this.HeadTimeOffset = null;

        /**
         * Confidence of recognized closing credits. Value range: 0-100.
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * Control parameter of terrorism information detection task.
 * @class
 */
class TerrorismConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of terrorism information detection in video image task.
         * @type {TerrorismImgReviewTemplateInfoForUpdate || null}
         */
        this.ImgReviewInfo = null;

        /**
         * Control parameter of terrorism information detection in text task.
         * @type {TerrorismOcrReviewTemplateInfoForUpdate || null}
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
            let obj = new TerrorismImgReviewTemplateInfoForUpdate();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new TerrorismOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

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

        /**
         * Metadata of a source video.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this parameter. It can contain up to 1000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is not carried or is left empty, no deduplication will be performed.
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
            let obj = new ComposeMediaTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new ComposeMediaTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * Control parameter of video opening and ending credits recognition task.
 * @class
 */
class HeadTailConfigureInfoForUpdate extends  AbstractModel {
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
         * Transcoding specification ID. For more information, please see [Transcoding Parameter Template](https://intl.cloud.tencent.com/document/product/266/33478?from_cn_redirect=1#.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF).
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
 * Video splitting task information. This field has a value only when `TaskType` is `SplitMedia`.
 * @class
 */
class SplitMediaTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task flow status. Valid values:
<li>PROCESSING: processing</li>
<li>FINISH: finished</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You're not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error information.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * List of video splitting task details.
         * @type {Array.<SplitMediaTaskSegmentInfo> || null}
         */
        this.FileInfoSet = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or set to an empty string, no deduplication will be performed.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.FileInfoSet) {
            this.FileInfoSet = new Array();
            for (let z in params.FileInfoSet) {
                let obj = new SplitMediaTaskSegmentInfo();
                obj.deserialize(params.FileInfoSet[z]);
                this.FileInfoSet.push(obj);
            }
        }
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

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
         * Start time offset of an animated image in the video, in seconds.
<li>If this parameter is left empty or set to 0, the animated image will start at the same time as the video.</li>
<li>If this parameter is set to a positive number (n for example), the animated image will start at the nth second of the video.</li>
<li>If this parameter is set to a negative number (-n for example), the animated image will start at the nth second before the end of the video.</li>
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of an animated image in the video, in seconds.
<li>If this parameter is left empty or set to 0, the animated image will end at the same time as the video.</li>
<li>If this parameter is set to a positive number (n for example), the animated image will end at the nth second of the video.</li>
<li>If this parameter is set to a negative number (-n for example), the animated image will end at the nth second before the end of the video.</li>
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
         * Creation time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Content string of timestamp containing 1-128 characters.
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
 * AI-based sample management - tag operation.
 * @class
 */
class AiSampleTagOperation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation type. Valid values: add, delete, reset.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Tag. Length limit: 128 characters.
         * @type {Array.<string> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * Player configuration details
 * @class
 */
class PlayerConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player configuration name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Player configuration type. Valid values:
<li>Preset: preset configuration;</li>
<li>Custom: custom configuration.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Switch of DRM-protected adaptive bitstream playback:
<li>ON: enabled, indicating to play back only output adaptive bitstreams protected by DRM;</li>
<li>OFF: disabled, indicating to play back unencrypted output adaptive bitstreams.</li>
         * @type {string || null}
         */
        this.DrmSwitch = null;

        /**
         * ID of the unencrypted adaptive bitrate streaming template that allows output.
         * @type {number || null}
         */
        this.AdaptiveDynamicStreamingDefinition = null;

        /**
         * Content of the DRM-protected adaptive bitrate streaming template that allows output.
         * @type {DrmStreamingsInfo || null}
         */
        this.DrmStreamingsInfo = null;

        /**
         * ID of the image sprite generating template that allows output.
         * @type {number || null}
         */
        this.ImageSpriteDefinition = null;

        /**
         * Display name of player for substreams with different resolutions.
         * @type {Array.<ResolutionNameInfo> || null}
         */
        this.ResolutionNameSet = null;

        /**
         * Creation time of player configuration in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of player configuration in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Domain name used for playback. If its value is `Default`, the domain name configured in [Default Distribution Configuration](https://intl.cloud.tencent.com/document/product/266/33373?from_cn_redirect=1) will be used.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Scheme used for playback. Valid values:
<li>Default: the scheme configured in [Default Distribution Configuration](https://intl.cloud.tencent.com/document/product/266/33373?from_cn_redirect=1) will be used;</li>
<li>HTTP;</li>
<li>HTTPS.</li>
         * @type {string || null}
         */
        this.Scheme = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Comment = null;

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
        this.DrmSwitch = 'DrmSwitch' in params ? params.DrmSwitch : null;
        this.AdaptiveDynamicStreamingDefinition = 'AdaptiveDynamicStreamingDefinition' in params ? params.AdaptiveDynamicStreamingDefinition : null;

        if (params.DrmStreamingsInfo) {
            let obj = new DrmStreamingsInfo();
            obj.deserialize(params.DrmStreamingsInfo)
            this.DrmStreamingsInfo = obj;
        }
        this.ImageSpriteDefinition = 'ImageSpriteDefinition' in params ? params.ImageSpriteDefinition : null;

        if (params.ResolutionNameSet) {
            this.ResolutionNameSet = new Array();
            for (let z in params.ResolutionNameSet) {
                let obj = new ResolutionNameInfo();
                obj.deserialize(params.ResolutionNameSet[z]);
                this.ResolutionNameSet.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Scheme = 'Scheme' in params ? params.Scheme : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

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
         * Event handler, i.e., the `EventSet. EventHandle` field in the output parameters of the [event notification pulling](https://intl.cloud.tencent.com/document/product/266/33433?from_cn_redirect=1) API.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * CreateAIRecognitionTemplate response structure.
 * @class
 */
class CreateAIRecognitionTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of video content recognition template.
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
<li>Destroyed: terminated</li>
You cannot enable a subapplication whose status is “Destroying”. You can enable it after it was terminated.
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
 * CreateSubAppId response structure.
 * @class
 */
class CreateSubAppIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of created subapplication.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Tag of the detected terrorism information in a video. Valid values:
<li>`guns`: weapons and guns</li>
<li>`crowd`: crowds</li>
<li>`police`: police forces</li>
<li>`bloody`: bloody images</li>
<li>`banners`: terrorism flags</li>
<li>`militant`: militants</li>
<li>`explosion`: explosions and fires</li>
<li>`terrorists`: terrorists</li>
<li>`scenario`: terrorism images</li>
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
 * DRM-protected adaptive bitstream playback information
 * @class
 */
class DrmStreamingsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the adaptive bitrate streaming template whose protection type is SimpleAES.
         * @type {number || null}
         */
        this.SimpleAesDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SimpleAesDefinition = 'SimpleAesDefinition' in params ? params.SimpleAesDefinition : null;

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
<li>If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width. For example, `10%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in px, the `Width` of the watermark will be in pixels. For example, `100px` means that `Width` is 100 pixels. Value range: [8, 4096].</li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Watermark height. % and px formats are supported:
<li>If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px. Valid values: 0 or [8,4096].</li>
         * @type {string || null}
         */
        this.Height = null;

        /**
         * Repeat type of an animated watermark. Valid values:
<li>once: no longer appears after watermark playback ends.</li>
<li>repeat_last_frame: stays on the last frame after watermark playback ends.</li>
<li>repeat (default): repeats the playback until the video ends.</li>
         * @type {string || null}
         */
        this.RepeatType = null;

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
        this.RepeatType = 'RepeatType' in params ? params.RepeatType : null;

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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * Player substream name information
 * @class
 */
class ResolutionNameInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Length of video short side in px.
         * @type {number || null}
         */
        this.MinEdgeLength = null;

        /**
         * Display name.
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
        this.MinEdgeLength = 'MinEdgeLength' in params ? params.MinEdgeLength : null;
        this.Name = 'Name' in params ? params.Name : null;

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
 * ParseStreamingManifest request structure.
 * @class
 */
class ParseStreamingManifestRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Index file content to be parsed.
         * @type {string || null}
         */
        this.MediaManifestContent = null;

        /**
         * Video index file format, which is `m3u8` by default.
<li>m3u8</li>
<li>mpd</li>
         * @type {string || null}
         */
        this.ManifestType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaManifestContent = 'MediaManifestContent' in params ? params.MediaManifestContent : null;
        this.ManifestType = 'ManifestType' in params ? params.ManifestType : null;

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
         * Storage statistics with one piece of data for every 5 minutes or 1 day.
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
 * DescribeCdnLogs request structure.
 * @class
 */
class DescribeCdnLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Start time for log acquisition in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F), which must be after the start time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Maximum return results of pulling paginated queries. Default value: 100; maximum value: 1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number offset from the beginning of paginated queries. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

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
         * Creation time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
        this.Comment = 'Comment' in params ? params.Comment : null;

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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * DescribeCdnLogs response structure.
 * @class
 */
class DescribeCdnLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of log download links
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Log download list for CDN nodes outside Mainland China. If global acceleration is not enabled for the domain name, ignore this parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CdnLogInfo> || null}
         */
        this.OverseaCdnLogs = null;

        /**
         * Log download list for CDN nodes in Mainland China.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CdnLogInfo> || null}
         */
        this.DomesticCdnLogs = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.OverseaCdnLogs) {
            this.OverseaCdnLogs = new Array();
            for (let z in params.OverseaCdnLogs) {
                let obj = new CdnLogInfo();
                obj.deserialize(params.OverseaCdnLogs[z]);
                this.OverseaCdnLogs.push(obj);
            }
        }

        if (params.DomesticCdnLogs) {
            this.DomesticCdnLogs = new Array();
            for (let z in params.DomesticCdnLogs) {
                let obj = new CdnLogInfo();
                obj.deserialize(params.DomesticCdnLogs[z]);
                this.DomesticCdnLogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Tags for the results of politically sensitive information detection of suspected video segments. The relationship between the `LabelSet` parameter in the content audit template [controlling tasks of video politically sensitive information detection](https://intl.cloud.tencent.com/document/api/266/31773?from_cn_redirect=1#PoliticalImgReviewTemplateInfo) and this parameter is as follows:
violation_photo:
<li>violation_photo: violating photo.</li>
politician:
<li>nation_politician: head of state/government;</li>
<li>province_politician: province/state leader;</li>
<li>bureau_politician: ministry leader;</li>
<li>county_politician: county/city leader;</li>
<li>rural_politician: town leader;</li>
<li>sensitive_politician: politically sensitive figure;</li>
<li>foreign_politician: head of a foreign country/government.</li>
entertainment:
<li>sensitive_entertainment: sensitive entertainment celebrity.</li>
sport:
<li>sensitive_sport: sensitive sports figure.</li>
entrepreneur:
<li>sensitive_entrepreneur: sensitive business figure.</li>
scholar:
<li>sensitive_scholar: sensitive educator.</li>
celebrity:
<li>sensitive_celebrity: sensitive well-known figure;</li>
<li>historical_celebrity: well-known historical figures.</li>
military:
<li>sensitive_military: militarily sensitive figure.</li>
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
         * Expiration time of suspected image URL in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
 * DeletePersonSample response structure.
 * @class
 */
class DeletePersonSampleResponse extends  AbstractModel {
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
 * ModifyContentReviewTemplate request structure.
 * @class
 */
class ModifyContentReviewTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an intelligent content recognition template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Name of an intelligent content recognition template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description of an intelligent content recognition template. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Control parameter for terrorism information.
         * @type {TerrorismConfigureInfoForUpdate || null}
         */
        this.TerrorismConfigure = null;

        /**
         * Control parameter for porn information.
         * @type {PornConfigureInfoForUpdate || null}
         */
        this.PornConfigure = null;

        /**
         * Control parameter for politically sensitive information.
         * @type {PoliticalConfigureInfoForUpdate || null}
         */
        this.PoliticalConfigure = null;

        /**
         * Control parameter of prohibited information detection. Prohibited information includes:
<li>Abusive;</li>
<li>Drug-related.</li>
         * @type {ProhibitedConfigureInfoForUpdate || null}
         */
        this.ProhibitedConfigure = null;

        /**
         * Control parameter for custom intelligent content recognition tasks.
         * @type {UserDefineConfigureInfoForUpdate || null}
         */
        this.UserDefineConfigure = null;

        /**
         * Frame capturing interval in seconds. Minimum value: 0.5 seconds.
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

        /**
         * Whether to allow the recognition result to enter the intelligent recognition platform (for human recognition).
<li>ON: yes</li>
<li>OFF: no</li>
         * @type {string || null}
         */
        this.ReviewWallSwitch = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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

        if (params.TerrorismConfigure) {
            let obj = new TerrorismConfigureInfoForUpdate();
            obj.deserialize(params.TerrorismConfigure)
            this.TerrorismConfigure = obj;
        }

        if (params.PornConfigure) {
            let obj = new PornConfigureInfoForUpdate();
            obj.deserialize(params.PornConfigure)
            this.PornConfigure = obj;
        }

        if (params.PoliticalConfigure) {
            let obj = new PoliticalConfigureInfoForUpdate();
            obj.deserialize(params.PoliticalConfigure)
            this.PoliticalConfigure = obj;
        }

        if (params.ProhibitedConfigure) {
            let obj = new ProhibitedConfigureInfoForUpdate();
            obj.deserialize(params.ProhibitedConfigure)
            this.ProhibitedConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfoForUpdate();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.ReviewWallSwitch = 'ReviewWallSwitch' in params ? params.ReviewWallSwitch : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * AttachMediaSubtitles response structure.
 * @class
 */
class AttachMediaSubtitlesResponse extends  AbstractModel {
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
 * CreateAdaptiveDynamicStreamingTemplate response structure.
 * @class
 */
class CreateAdaptiveDynamicStreamingTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of adaptive bitrate streaming template.
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
         * Creation time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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

        /**
         * Template description.
         * @type {string || null}
         */
        this.Comment = null;

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
        this.Comment = 'Comment' in params ? params.Comment : null;

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
         * Confidence of recognized segment. Value range: 0-100.
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
         * The list of screenshot time points. “s” and “%” formats are supported:
<li>When a time point string ends with “s”, its unit is second. For example, “3.5s” means the 3.5th second of the video.</li>
<li>When a time point string ends with “%”, it represents the percentage of the video’s duration. For example, “10%” means that the time point is at the 10% of the video’s entire duration.</li>
         * @type {Array.<string> || null}
         */
        this.ExtTimeOffsetSet = null;

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
        this.ExtTimeOffsetSet = 'ExtTimeOffsetSet' in params ? params.ExtTimeOffsetSet : null;
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
 * Referer hotlink protection configuration
 * @class
 */
class RefererAuthPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * [Referer hotlink protection](https://intl.cloud.tencent.com/document/product/266/33985) status. Valid values:
<li>Enabled</li>
<li>Disabled</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Referer authentication method. Valid values:
<li>`Black`: blocklist</li>
<li>`White`: allowlist</li>
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * List for referer authentication
         * @type {Array.<string> || null}
         */
        this.Referers = null;

        /**
         * Whether to allow requests with empty referer to access this domain name. Valid values:
<li>Yes</li>
<li>No</li>
         * @type {string || null}
         */
        this.BlankRefererAllowed = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.Referers = 'Referers' in params ? params.Referers : null;
        this.BlankRefererAllowed = 'BlankRefererAllowed' in params ? params.BlankRefererAllowed : null;

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
         * Start time of data time range in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F). For example, if the time granularity is 1-day, `2018-12-01T00:00:00+08:00` represents the time range between December 1, 2018 (inclusive) and December 2, 2018 (not inclusive).
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
 * ParseStreamingManifest response structure.
 * @class
 */
class ParseStreamingManifestResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Segment file list.
         * @type {Array.<string> || null}
         */
        this.MediaSegmentSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaSegmentSet = 'MediaSegmentSet' in params ? params.MediaSegmentSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Media type. For the detailed valid values, please see [Upload Overview](https://intl.cloud.tencent.com/document/product/266/9760?from_cn_redirect=1#.E6.96.87.E4.BB.B6.E7.B1.BB.E5.9E.8B).
         * @type {string || null}
         */
        this.MediaType = null;

        /**
         * Media name.
         * @type {string || null}
         */
        this.MediaName = null;

        /**
         * Cover type. For the detailed valid values, please see [Upload Overview](https://intl.cloud.tencent.com/document/product/266/9760?from_cn_redirect=1#.E6.96.87.E4.BB.B6.E7.B1.BB.E5.9E.8B).
         * @type {string || null}
         */
        this.CoverType = null;

        /**
         * Subsequent task operation on a media file, i.e., after a media file is uploaded, task flow operations will be initiated automatically. This parameter value is a task flow template name. VOD supports [creating task flow templates](https://intl.cloud.tencent.com/document/product/266/33819?from_cn_redirect=1) and naming the templates.
         * @type {string || null}
         */
        this.Procedure = null;

        /**
         * Expiration time of a media file in ISO 8601 format. For more information, please see [Notes on ISO Date Format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Specifies upload region. This is only applicable to users that have special requirements for the upload region.
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * Category ID, which is used to categorize the media for management. A category can be created and its ID can be obtained by using the [category creating](https://intl.cloud.tencent.com/document/product/266/7812?from_cn_redirect=1) API.
<li>Default value: 0, which means "Other".</li>
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Source context, which is used to pass through the user request information. The [upload callback](https://intl.cloud.tencent.com/document/product/266/7830?from_cn_redirect=1) API will return the value of this field. It can contain up to 250 characters.
         * @type {string || null}
         */
        this.SourceContext = null;

        /**
         * Session context, which is used to pass through the user request information. If the `Procedure` parameter is specified, the [task flow status change callback](https://intl.cloud.tencent.com/document/product/266/9636?from_cn_redirect=1) API will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * Reserved parameter for special purposes.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
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
 * DeleteContentReviewTemplate response structure.
 * @class
 */
class DeleteContentReviewTemplateResponse extends  AbstractModel {
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
         * Creation time of media file in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last update time of media file (by an operation that triggers updating of media file information such as modifying video attributes or initiating video processing) in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Expiration time of media file in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I). After the expiration, the media file and its related resources (such as transcoding results and image sprites) will be permanently deleted. `9999-12-31T23:59:59Z` means "never expire".
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
         * Regions where media files are stored, such as `ap-chongqing`. For more regions, see [Storage Region](https://intl.cloud.tencent.com/document/product/266/9760).
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
         * Unique ID of an LVB recording file.
         * @type {string || null}
         */
        this.Vid = null;

        /**
         * File type:
<li>Video: video file</li>
<li>Audio: audio file</li>
<li>Image: image file</li>
         * @type {string || null}
         */
        this.Category = null;

        /**
         * File status. Valid values: Normal, Forbidden.

*Note: this field is not supported yet.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 
         * @type {string || null}
         */
        this.StorageClass = null;

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
        this.Category = 'Category' in params ? params.Category : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StorageClass = 'StorageClass' in params ? params.StorageClass : null;

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
         * URL of the media to be pulled. Supported media format: HLS; unsupported media format: DASH.
For more information about supported extensions, please see [Media Types](https://intl.cloud.tencent.com/document/product/266/9760?from_cn_redirect=1#.E5.AA.92.E4.BD.93.E7.B1.BB.E5.9E.8B).
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
         * Subsequent task for media. For more information, please see [Specifying Task Flow After Upload](https://intl.cloud.tencent.com/document/product/266/9759?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Procedure = null;

        /**
         * Expiration time of media file in ISO 8601 format. For more information, please see [Notes on ISO Date Format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Specifies upload region. This is only applicable to users that have special requirements for the upload region:
<li>If it is left empty, the upload region is your [default region](https://intl.cloud.tencent.com/document/product/266/14059?from=11329?from_cn_redirect=1#.E5.AD.98.E5.82.A8.E5.9C.B0.E5.9F.9F.E6.AD.A5.E9.AA.A4);</li>
<li>If it is specified, please make sure that the upload region has been [enabled for storage](https://intl.cloud.tencent.com/document/product/266/14059?from=11329?from_cn_redirect=1#.E5.AD.98.E5.82.A8.E5.9C.B0.E5.9F.9F.E6.AD.A5.E9.AA.A4).</li>
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * Category ID, which is used to categorize the media for management. A category can be created and its ID can be obtained by using the [CreateClass](https://intl.cloud.tencent.com/document/product/266/7812?from_cn_redirect=1) API.
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * The source context which is used to pass through the user request information. After `Procedure` is specified, the task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * Used to identify duplicate requests. After you send a request, if any request with the same `SessionId` has already been sent in the last three days (72 hours), an error message will be returned. `SessionId` contains up to 50 characters. If this parameter is not carried or is an empty string, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Reserved field for special purposes.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * Source context, which is used to pass through the user request information. The [upload callback](https://intl.cloud.tencent.com/document/product/266/7830?from_cn_redirect=1) API will return the value of this field. It can contain up to 250 characters.
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
        this.SourceContext = 'SourceContext' in params ? params.SourceContext : null;

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
 * Video clipping task information. This structure is only used for tasks initiated by the [ClipVideo](https://intl.cloud.tencent.com/document/product/266/10156?from_cn_redirect=1) API in v2017.
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
         * Creation time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
         * Start date in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End date in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I). The end date must be after the start date.
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
<li>5: 5-minute granularity. The data at 5-minute granularity in the query period will be returned.</li>
<li>60: 1-hour granularity. The data at 1-hour granularity in the query period will be returned.</li>
<li>1440: 1-day granularity. The data at 1-day granularity in the query period will be returned.</li>
Default value: 1440. Data at 1-day granularity will be returned.
         * @type {number || null}
         */
        this.DataInterval = null;

        /**
         * List of domain names. The usage data of up to 20 domain names can be queried at a time. You can specify multiple domain names and query their combined usage data. The usage data of all domain names will be returned by default.
         * @type {Array.<string> || null}
         */
        this.DomainNames = null;

        /**
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * Confidence of recognized segment. Value range: 0-100.
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
         * Start date in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End date in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I). The end date must be after the start date.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * Control parameter of porn detection task.
 * @class
 */
class PornConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of porn detection in video image.
         * @type {PornImgReviewTemplateInfoForUpdate || null}
         */
        this.ImgReviewInfo = null;

        /**
         * Control parameter of porn detection in speech.
         * @type {PornAsrReviewTemplateInfoForUpdate || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of porn detection in text.
         * @type {PornOcrReviewTemplateInfoForUpdate || null}
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
            let obj = new PornImgReviewTemplateInfoForUpdate();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PornAsrReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PornOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

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
         * Expiration time of suspected image URL in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * DeleteSuperPlayerConfig response structure.
 * @class
 */
class DeleteSuperPlayerConfigResponse extends  AbstractModel {
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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * Control parameter of politically sensitive information detection in video image task.
 * @class
 */
class PoliticalImgReviewTemplateInfoForUpdate extends  AbstractModel {
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
         * Filter tags for politically sensitive information detection of video images. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. Valid values:
<li>violation_photo: violating photo;</li>
<li>politician: political figure;</li>
<li>entertainment: entertainment celebrity;</li>
<li>sport: sports figure;</li>
<li>entrepreneur: business figure;</li>
<li>scholar: educator;</li>
<li>celebrity: well-known figure;</li>
<li>military: military figure.</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0–100.
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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
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
 * DescribeVodDomains response structure.
 * @class
 */
class DescribeVodDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of domain names
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Domain name information list
         * @type {Array.<DomainDetailInfo> || null}
         */
        this.DomainSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.DomainSet) {
            this.DomainSet = new Array();
            for (let z in params.DomainSet) {
                let obj = new DomainDetailInfo();
                obj.deserialize(params.DomainSet[z]);
                this.DomainSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * Whether to remove a video stream. Valid values:
<li>0: no</li>
<li>1: yes</li>
         * @type {number || null}
         */
        this.RemoveVideo = null;

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
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;

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

        /**
         * Start time offset of a transcoded video, in seconds.
<li>If this parameter is left empty or set to 0, the transcoded video will start at the same time as the original video.</li>
<li>If this parameter is set to a positive number (n for example), the transcoded video will start at the nth second of the original video.</li>
<li>If this parameter is set to a negative number (-n for example), the transcoded video will start at the nth second before the end of the original video.</li>
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a transcoded video, in seconds.
<li>If this parameter is left empty or set to 0, the transcoded video will end at the same time as the original video.</li>
<li>If this parameter is set to a positive number (n for example), the transcoded video will end at the nth second of the original video.</li>
<li>If this parameter is set to a negative number (-n for example), the transcoded video will end at the nth second before the end of the original video.</li>
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
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * ModifyAIRecognitionTemplate request structure.
 * @class
 */
class ModifyAIRecognitionTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of video content recognition template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Video content recognition template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description of video content recognition template. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Control parameter of video opening and ending credits recognition.
         * @type {HeadTailConfigureInfoForUpdate || null}
         */
        this.HeadTailConfigure = null;

        /**
         * Control parameter of video splitting recognition.
         * @type {SegmentConfigureInfoForUpdate || null}
         */
        this.SegmentConfigure = null;

        /**
         * Control parameter of face recognition.
         * @type {FaceConfigureInfoForUpdate || null}
         */
        this.FaceConfigure = null;

        /**
         * Control parameter of full text recognition.
         * @type {OcrFullTextConfigureInfoForUpdate || null}
         */
        this.OcrFullTextConfigure = null;

        /**
         * Control parameter of text keyword recognition.
         * @type {OcrWordsConfigureInfoForUpdate || null}
         */
        this.OcrWordsConfigure = null;

        /**
         * Control parameter of full speech recognition.
         * @type {AsrFullTextConfigureInfoForUpdate || null}
         */
        this.AsrFullTextConfigure = null;

        /**
         * Control parameter of speech keyword recognition.
         * @type {AsrWordsConfigureInfoForUpdate || null}
         */
        this.AsrWordsConfigure = null;

        /**
         * Control parameter of object recognition.
         * @type {ObjectConfigureInfoForUpdate || null}
         */
        this.ObjectConfigure = null;

        /**
         * Frame capturing interval in seconds. Minimum value: 0.5 seconds.
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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

        if (params.HeadTailConfigure) {
            let obj = new HeadTailConfigureInfoForUpdate();
            obj.deserialize(params.HeadTailConfigure)
            this.HeadTailConfigure = obj;
        }

        if (params.SegmentConfigure) {
            let obj = new SegmentConfigureInfoForUpdate();
            obj.deserialize(params.SegmentConfigure)
            this.SegmentConfigure = obj;
        }

        if (params.FaceConfigure) {
            let obj = new FaceConfigureInfoForUpdate();
            obj.deserialize(params.FaceConfigure)
            this.FaceConfigure = obj;
        }

        if (params.OcrFullTextConfigure) {
            let obj = new OcrFullTextConfigureInfoForUpdate();
            obj.deserialize(params.OcrFullTextConfigure)
            this.OcrFullTextConfigure = obj;
        }

        if (params.OcrWordsConfigure) {
            let obj = new OcrWordsConfigureInfoForUpdate();
            obj.deserialize(params.OcrWordsConfigure)
            this.OcrWordsConfigure = obj;
        }

        if (params.AsrFullTextConfigure) {
            let obj = new AsrFullTextConfigureInfoForUpdate();
            obj.deserialize(params.AsrFullTextConfigure)
            this.AsrFullTextConfigure = obj;
        }

        if (params.AsrWordsConfigure) {
            let obj = new AsrWordsConfigureInfoForUpdate();
            obj.deserialize(params.AsrWordsConfigure)
            this.AsrWordsConfigure = obj;
        }

        if (params.ObjectConfigure) {
            let obj = new ObjectConfigureInfoForUpdate();
            obj.deserialize(params.ObjectConfigure)
            this.ObjectConfigure = obj;
        }
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * DescribeCDNStatDetails request structure.
 * @class
 */
class DescribeCDNStatDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metrics to query. Valid values:
<li>Traffic: traffic in bytes.</li>
<li>Bandwidth: bandwidth in bps.</li>
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Start time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?lang=en&pg=).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?lang=en&pg=).
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * List of domain names. The usage data of up to 20 domain names can be queried at a time. The usage data of all domain names is returned by default.
         * @type {Array.<string> || null}
         */
        this.DomainNames = null;

        /**
         * Service region. Valid values:
<li>Chinese Mainland</li>
<li>Asia Pacific Region 1: Hong Kong (China), Macao (China), Singapore, Vietnam, and Thailand</li>
<li>Asia Pacific Region 2: Taiwan (China), Japan, Malaysia, Indonesia, and South Korea</li>
<li>Asia Pacific Region 3: Philippines, India, Australia, and other Asia Pacific countries and regions</li>
<li>Middle East</li>
<li>Europe</li>
<li>North America</li>
<li>South America</li>
<li>Africa</li>
Default value: Chinese Mainland
         * @type {string || null}
         */
        this.Area = null;

        /**
         * District where users are located. When `Area` is `Chinese Mainland`, valid values for `Districts` are as follows. Otherwise, `Districts` can be ignored.
<li>Beijing</li>
<li>Inner Mongolia</li>
<li>Shanxi</li>
<li>Hebei</li>
<li>Tianjin</li>
<li>Ningxia</li>
<li>Shaanxi</li>
<li>Gansu</li>
<li>Qinghai</li>
<li>Xinjiang</li>
<li>Heilongjiang</li>
<li>Jilin</li>
<li>Liaoning</li>
<li>Fujian</li>
<li>Jiangsu</li>
<li>Anhui</li>
<li>Shandong</li>
<li>Shanghai</li>
<li>Zhejiang</li>
<li>Henan</li>
<li>Hubei</li>
<li>Jiangxi</li>
<li>Hunan</li>
<li>Guizhou</li>
<li>Yunnan</li>
<li>Chongqing</li>
<li>Sichuan</li>
<li>Tibet</li>
<li>Guangdong</li>
<li>Guangxi</li>
<li>Hainan</li>
<li>Hong Kong, Macao and Taiwan</li>
<li>Outside Chinese Mainland</li>
<li>Other</li>
         * @type {Array.<string> || null}
         */
        this.Districts = null;

        /**
         * ISP of users. When `Area` is `Chinese Mainland`, valid values for `Isps` are as follows. Otherwise, `Isps` can be ignored.
<li>China Telecom</li>
<li>China Unicom</li>
<li>CERNET</li>
<li>Great Wall Broadband Network</li>
<li>China Mobile</li>
<li>China Mobile Tietong</li>
<li>ISPs outside Chinese Mainland</li>
<li>Other ISPs</li>
         * @type {Array.<string> || null}
         */
        this.Isps = null;

        /**
         * Time granularity of every piece of data in minutes. Valid values:
<li>5: 5-minute granularity. The data at 5-minute granularity in the query period will be returned.</li>
<li>1440: 1-day granularity. The data at 1-day granularity in the query period will be returned. If the query period is larger than 24 hours, only data at 1-day granularity can be queried.</li>
If the difference between `StartTime` and `EndTime` is larger than 24 hours, the default value of `DataInterval` is 1440.
         * @type {number || null}
         */
        this.DataInterval = null;

        /**
         * VOD [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DomainNames = 'DomainNames' in params ? params.DomainNames : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Districts = 'Districts' in params ? params.Districts : null;
        this.Isps = 'Isps' in params ? params.Isps : null;
        this.DataInterval = 'DataInterval' in params ? params.DataInterval : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * Start time of data time range in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I). For example, if the time granularity is 1-day, `2018-12-01T00:00:00+08:00` represents the time range between December 1, 2018 (inclusive) and December 2, 2018 (not inclusive).
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
 * Acceleration region information of the domain name
 * @class
 */
class AccelerateAreaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Acceleration region. Valid values:
<li>Chinese Mainland</li>
<li>Outside Chinese Mainland</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Reason why acceleration is disabled by Tencent Cloud. Valid values:
<li>ForLegalReasons: legal reasons</li>
<li>ForOverdueBills: overdue payment</li>
         * @type {string || null}
         */
        this.TencentDisableReason = null;

        /**
         * CNAME of the acceleration domain name
         * @type {string || null}
         */
        this.TencentEdgeDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.TencentDisableReason = 'TencentDisableReason' in params ? params.TencentDisableReason : null;
        this.TencentEdgeDomain = 'TencentEdgeDomain' in params ? params.TencentEdgeDomain : null;

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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * <b>Supported event types:</b>
<li>NewFileUpload: finished video upload</li>
<li>ProcedureStateChanged: task flow status changed</li>
<li>FileDeleted: finished video deletion</li>
<li>PullComplete: finished pulling for upload</li>
<li>EditMediaComplete: finished video editing</li>
<li>SplitMediaComplete: finished video splitting</li>
<li>WechatPublishComplete: finished publishing on WeChat</li>
<li>ComposeMediaComplete: finished producing the media file</li>
<li>WechatMiniProgramPublishComplete: finished publishing on WeChat Mini Program</li>
<b>Support v2017 task types:</b>
<li>TranscodeComplete: finished video transcoding</li>
<li>ConcatComplete: finished video splicing</li>
<li>ClipComplete: finished video clipping</li>
<li>CreateImageSpriteComplete: finished image sprite generation</li>
<li>CreateSnapshotByTimeOffsetComplete: finished point-in-time screencapturing</li>
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
         * Video splitting completion event, which is valid if the event type is `EditMediaComplete`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {SplitMediaTask || null}
         */
        this.SplitMediaCompleteEvent = null;

        /**
         * Media file composing task completion event, which is valid when the event type is `ComposeMediaComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ComposeMediaTask || null}
         */
        this.ComposeMediaCompleteEvent = null;

        /**
         * Video clipping completion event, which is valid if the event type is `ClipComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ClipTask2017 || null}
         */
        this.ClipCompleteEvent = null;

        /**
         * Video transcoding completion event, which is valid if the event type is `TranscodeComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TranscodeTask2017 || null}
         */
        this.TranscodeCompleteEvent = null;

        /**
         * Image sprite generating completion event, which is valid if the event type is `CreateImageSpriteComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CreateImageSpriteTask2017 || null}
         */
        this.CreateImageSpriteCompleteEvent = null;

        /**
         * Video splicing completion event, which is valid if the event type is `ConcatComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ConcatTask2017 || null}
         */
        this.ConcatCompleteEvent = null;

        /**
         * Time point screencapturing completion event, which is valid when the event type is `CreateSnapshotByTimeOffsetComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {SnapshotByTimeOffsetTask2017 || null}
         */
        this.SnapshotByTimeOffsetCompleteEvent = null;

        /**
         * Release on WeChat completion event, which is valid if the event type is `WechatPublishComplete`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {WechatPublishTask || null}
         */
        this.WechatPublishCompleteEvent = null;

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

        if (params.SplitMediaCompleteEvent) {
            let obj = new SplitMediaTask();
            obj.deserialize(params.SplitMediaCompleteEvent)
            this.SplitMediaCompleteEvent = obj;
        }

        if (params.ComposeMediaCompleteEvent) {
            let obj = new ComposeMediaTask();
            obj.deserialize(params.ComposeMediaCompleteEvent)
            this.ComposeMediaCompleteEvent = obj;
        }

        if (params.ClipCompleteEvent) {
            let obj = new ClipTask2017();
            obj.deserialize(params.ClipCompleteEvent)
            this.ClipCompleteEvent = obj;
        }

        if (params.TranscodeCompleteEvent) {
            let obj = new TranscodeTask2017();
            obj.deserialize(params.TranscodeCompleteEvent)
            this.TranscodeCompleteEvent = obj;
        }

        if (params.CreateImageSpriteCompleteEvent) {
            let obj = new CreateImageSpriteTask2017();
            obj.deserialize(params.CreateImageSpriteCompleteEvent)
            this.CreateImageSpriteCompleteEvent = obj;
        }

        if (params.ConcatCompleteEvent) {
            let obj = new ConcatTask2017();
            obj.deserialize(params.ConcatCompleteEvent)
            this.ConcatCompleteEvent = obj;
        }

        if (params.SnapshotByTimeOffsetCompleteEvent) {
            let obj = new SnapshotByTimeOffsetTask2017();
            obj.deserialize(params.SnapshotByTimeOffsetCompleteEvent)
            this.SnapshotByTimeOffsetCompleteEvent = obj;
        }

        if (params.WechatPublishCompleteEvent) {
            let obj = new WechatPublishTask();
            obj.deserialize(params.WechatPublishCompleteEvent)
            this.WechatPublishCompleteEvent = obj;
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
 * Control parameter of custom audit task.
 * @class
 */
class UserDefineConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of custom figure audit.
         * @type {UserDefineFaceReviewTemplateInfoForUpdate || null}
         */
        this.FaceReviewInfo = null;

        /**
         * Control parameter of custom speech audit.
         * @type {UserDefineAsrTextReviewTemplateInfoForUpdate || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of custom text audit.
         * @type {UserDefineOcrTextReviewTemplateInfoForUpdate || null}
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
            let obj = new UserDefineFaceReviewTemplateInfoForUpdate();
            obj.deserialize(params.FaceReviewInfo)
            this.FaceReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new UserDefineAsrTextReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new UserDefineOcrTextReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

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
 * ModifyClass request structure.
 * @class
 */
class ModifyClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Category ID
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Category name, which can contain 1–64 characters.
         * @type {string || null}
         */
        this.ClassName = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * Category ID, which is used to categorize the media for management. A category can be created and its ID can be obtained by using the [category creating](https://intl.cloud.tencent.com/document/product/266/7812?from_cn_redirect=1) API.
<li>Default value: 0, which means "Other".</li>
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Expiration time of output media file in ISO 8601 format, after which the file will be deleted. Files will never expire by default. For more information, please see [Notes on ISO Date Format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * ModifyPersonSample request structure.
 * @class
 */
class ModifyPersonSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a sample.
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * Name. Length limit: 128 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description. Length limit: 1,024 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Sample usage. Valid values:
1. Recognition: used for content recognition; equivalent to `Recognition.Face`
2. Review: used for inappropriate information recognition; equivalent to `Review.Face`
3. All: used for content recognition and inappropriate information recognition; equivalent to 1+2
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * Information of operations on facial features.
         * @type {AiSampleFaceOperation || null}
         */
        this.FaceOperationInfo = null;

        /**
         * Tag operation information.
         * @type {AiSampleTagOperation || null}
         */
        this.TagOperationInfo = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Usages = 'Usages' in params ? params.Usages : null;

        if (params.FaceOperationInfo) {
            let obj = new AiSampleFaceOperation();
            obj.deserialize(params.FaceOperationInfo)
            this.FaceOperationInfo = obj;
        }

        if (params.TagOperationInfo) {
            let obj = new AiSampleTagOperation();
            obj.deserialize(params.TagOperationInfo)
            this.TagOperationInfo = obj;
        }
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
 * CreateAIRecognitionTemplate request structure.
 * @class
 */
class CreateAIRecognitionTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video content recognition template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description of video content recognition template. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Control parameter of video opening and ending credits recognition.
         * @type {HeadTailConfigureInfo || null}
         */
        this.HeadTailConfigure = null;

        /**
         * Control parameter of video splitting recognition.
         * @type {SegmentConfigureInfo || null}
         */
        this.SegmentConfigure = null;

        /**
         * Control parameter of face recognition.
         * @type {FaceConfigureInfo || null}
         */
        this.FaceConfigure = null;

        /**
         * Control parameter of full text recognition.
         * @type {OcrFullTextConfigureInfo || null}
         */
        this.OcrFullTextConfigure = null;

        /**
         * Control parameter of text keyword recognition.
         * @type {OcrWordsConfigureInfo || null}
         */
        this.OcrWordsConfigure = null;

        /**
         * Control parameter of full speech recognition.
         * @type {AsrFullTextConfigureInfo || null}
         */
        this.AsrFullTextConfigure = null;

        /**
         * Control parameter of speech keyword recognition.
         * @type {AsrWordsConfigureInfo || null}
         */
        this.AsrWordsConfigure = null;

        /**
         * Control parameter of object recognition.
         * @type {ObjectConfigureInfo || null}
         */
        this.ObjectConfigure = null;

        /**
         * Frame capturing interval in seconds. If this parameter is left empty, 1 second will be used by default. Minimum value: 0.5 seconds.
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * ModifyAIRecognitionTemplate response structure.
 * @class
 */
class ModifyAIRecognitionTemplateResponse extends  AbstractModel {
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
         * Filter tags for politically sensitive information detection of video images. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. Valid values:
<li>violation_photo: violating photo;</li>
<li>politician: political figure;</li>
<li>entertainment: entertainment celebrity;</li>
<li>sport: sports figure;</li>
<li>entrepreneur: business figure;</li>
<li>scholar: educator;</li>
<li>celebrity: well-known figure;</li>
<li>military: military figure.</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 97 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 95 will be used by default. Value range: 0-100.
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
         * Confidence of recognized segment. Value range: 0-100.
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
 * DeleteWordSamples response structure.
 * @class
 */
class DeleteWordSamplesResponse extends  AbstractModel {
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Text content, which contains up to 100 characters. Set this parameter only when the watermark type is text.
VOD does not support adding text watermarks on screenshots.
         * @type {string || null}
         */
        this.TextContent = null;

        /**
         * SVG content, which contains up to 2,000,000 characters. Set this parameter only when the watermark type is SVG.
VOD does not support adding SVG watermarks on screenshots.
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
 * AI-based sample management - keyword input information.
 * @class
 */
class AiSampleWordInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword. Length limit: 20 characters.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Keyword tag
<li>Array length limit: 20 tags;</li>
<li>Tag length limit: 128 characters.</li>
         * @type {Array.<string> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
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
 * DeleteClass response structure.
 * @class
 */
class DeleteClassResponse extends  AbstractModel {
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
         * Total number of subapplications.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * Subtitle information
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {MediaSubtitleInfo || null}
         */
        this.SubtitleInfo = null;

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

        if (params.SubtitleInfo) {
            let obj = new MediaSubtitleInfo();
            obj.deserialize(params.SubtitleInfo)
            this.SubtitleInfo = obj;
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
         * Video frame rate in Hz. Value range: [0,100].
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
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. Valid values:
<li>stretch: stretches video image frame by frame to fill the screen. The video image may become "squashed" or "stretched" after transcoding.</li>
<li>black: fills the uncovered area with black color, without changing the image's aspect ratio.</li>
<li>white: fills the uncovered area with white color, without changing the image's aspect ratio.</li>
<li>gauss: applies Gaussian blur to the uncovered area, without changing the image's aspect ratio.</li>
         * @type {string || null}
         */
        this.FillType = null;

        /**
         * Video Constant Rate Factor (CRF). Value range: 0-51. This parameter will be disabled if you enter 0.
We don’t recommend specifying this parameter unless you have special requirements.
         * @type {number || null}
         */
        this.Vcrf = null;

        /**
         * I-frame interval in frames. Valid values: 0 and 1-100000.
When this parameter is set to 0 or left empty, `Gop` will be automatically set.
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
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Vcrf = 'Vcrf' in params ? params.Vcrf : null;
        this.Gop = 'Gop' in params ? params.Gop : null;

    }
}

/**
 * CreateContentReviewTemplate request structure.
 * @class
 */
class CreateContentReviewTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to allow the recognition result to enter the intelligent recognition platform (for human recognition).
<li>ON: yes</li>
<li>OFF: no</li>
         * @type {string || null}
         */
        this.ReviewWallSwitch = null;

        /**
         * Name of an intelligent content recognition template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description of an intelligent content recognition template. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Control parameter for porn information.
         * @type {PornConfigureInfo || null}
         */
        this.PornConfigure = null;

        /**
         * Control parameter for terrorism information.
         * @type {TerrorismConfigureInfo || null}
         */
        this.TerrorismConfigure = null;

        /**
         * Control parameter for politically sensitive information.
         * @type {PoliticalConfigureInfo || null}
         */
        this.PoliticalConfigure = null;

        /**
         * Control parameter of prohibited information detection. Prohibited information includes:
<li>Abusive;</li>
<li>Drug-related.</li>
         * @type {ProhibitedConfigureInfo || null}
         */
        this.ProhibitedConfigure = null;

        /**
         * Control parameter for custom intelligent content recognition.
         * @type {UserDefineConfigureInfo || null}
         */
        this.UserDefineConfigure = null;

        /**
         * Frame capturing interval in seconds. If this parameter is left empty, 1 second will be used by default. Minimum value: 0.5 seconds.
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.ReviewWallSwitch = 'ReviewWallSwitch' in params ? params.ReviewWallSwitch : null;
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
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * Unique IDs for filters of an intelligent content recognition template. Array length limit: 100.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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

        /**
         * List of subtitle IDs (maximum: 10)
         * @type {Array.<string> || null}
         */
        this.SubtitleSet = null;

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
        this.SubtitleSet = 'SubtitleSet' in params ? params.SubtitleSet : null;

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
 * DescribeTaskDetail response structure.
 * @class
 */
class DescribeTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type. Valid values:
<li>Procedure: video processing task</li>
<li>EditMedia: video editing task</li>
<li>SplitMedia: video splitting task</li>
<li>ComposeMedia: media file producing task</li>
<li>WechatPublish: WeChat publishing task</li>
<li>WechatMiniProgramPublish: video publishing on WeChat Mini Program</li>
<li>PullUpload: pulling media files for upload</li>

Support v2017 task types:
<li>Transcode: transcoding task</li>
<li>SnapshotByTimeOffset: screencapturing task</li>
<li>Concat: video splicing task</li>
<li>Clip: video clipping task</li>
<li>ImageSprites: image sprite generating task</li>
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
         * Creation time of task in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Start time of task execution in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.BeginProcessTime = null;

        /**
         * End time of task execution in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
         * Video splitting task information. This field has a value only when `TaskType` is `EditMedia`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {SplitMediaTask || null}
         */
        this.SplitMediaTask = null;

        /**
         * Release on WeChat Mini Program task information. This field has a value only when `TaskType` is `WechatMiniProgramPublish`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {WechatMiniProgramPublishTask || null}
         */
        this.WechatMiniProgramPublishTask = null;

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
         * Time point screencapturing task information. This field has a value only when `TaskType` is `SnapshotByTimeOffset`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {SnapshotByTimeOffsetTask2017 || null}
         */
        this.SnapshotByTimeOffsetTask = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.SplitMediaTask) {
            let obj = new SplitMediaTask();
            obj.deserialize(params.SplitMediaTask)
            this.SplitMediaTask = obj;
        }

        if (params.WechatMiniProgramPublishTask) {
            let obj = new WechatMiniProgramPublishTask();
            obj.deserialize(params.WechatMiniProgramPublishTask)
            this.WechatMiniProgramPublishTask = obj;
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

        if (params.SnapshotByTimeOffsetTask) {
            let obj = new SnapshotByTimeOffsetTask2017();
            obj.deserialize(params.SnapshotByTimeOffsetTask)
            this.SnapshotByTimeOffsetTask = obj;
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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Category name. Length limit: 1-64 characters.
         * @type {string || null}
         */
        this.ClassName = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * AI-based sample management - face information failed to be processed.
 * @class
 */
class AiSampleFailFaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * It corresponds to incorrect image subscripts in the `FaceContents` input parameter, starting from 0.
         * @type {number || null}
         */
        this.Index = null;

        /**
         * Error code. Valid values:
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * Control parameter of custom figure audit task.
 * @class
 */
class UserDefineFaceReviewTemplateInfoForUpdate extends  AbstractModel {
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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0–100.
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
 * HTTPS configuration information of the domain name
 * @class
 */
class DomainHTTPSConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time when the certificate expires
<li>The time is in [ISO 8601 date format](https://intl.cloud.tencent.com/document/product/266/11732).</li>
         * @type {string || null}
         */
        this.CertExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertExpireTime = 'CertExpireTime' in params ? params.CertExpireTime : null;

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
 * DescribeSuperPlayerConfigs request structure.
 * @class
 */
class DescribeSuperPlayerConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player configuration name filter. Array length limit: 100.
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Player configuration type filter. Valid values:
<li>Preset: preset configuration;</li>
<li>Custom: custom configuration.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * Information of video splitting output files.
 * @class
 */
class SplitMediaOutputConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of an output file. This parameter can contain up to 64 characters, and will be generated by the system if it is left empty.
         * @type {string || null}
         */
        this.MediaName = null;

        /**
         * Output file format. Valid values: mp4 (default), hls.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Category ID, which is used to categorize the media file for management. You can use [CreateClass](https://intl.cloud.tencent.com/document/product/266/7812?from_cn_redirect=1) API to create a category and get the category ID.
<li>Default value: 0, which means other categories.</li>
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Expiration time of an output file. After passing the expiration time, the file will be deleted. There is no expiration time set for a file by default. The time is in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?lang=en&pg=).
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
 * DescribeTasks response structure.
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task overview list.
         * @type {Array.<TaskSimpleInfo> || null}
         */
        this.TaskSet = null;

        /**
         * Scrolling identifier. If a request does not return all the data entries, this field indicates the ID of the next entry. If this field is empty, there is no more data.
         * @type {string || null}
         */
        this.ScrollToken = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskSimpleInfo();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubAppIds request structure.
 * @class
 */
class DescribeSubAppIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subapplication name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Tag information. You can query the list of subapplications with specified tags.
         * @type {Array.<ResourceTag> || null}
         */
        this.Tags = null;

        /**
         * Page number offset from the beginning of paginated queries. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum return results of pulling paginated queries. Default: 200; maximum: 200.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ResourceTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * Tags for the results of video politically sensitive information detection. The relationship between the `LabelSet` parameter in the content audit template [controlling tasks of video politically sensitive information detection](https://intl.cloud.tencent.com/document/api/266/31773?from_cn_redirect=1#PoliticalImgReviewTemplateInfo) and this parameter is as follows:
violation_photo:
<li>violation_photo: violating photo.</li>
Other values (politician/entertainment/sport/entrepreneur/scholar/celebrity/military):
<li>politician: political figure.</li>
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * ModifySuperPlayerConfig request structure.
 * @class
 */
class ModifySuperPlayerConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player configuration name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Switch of DRM-protected adaptive bitstream playback:
<li>ON: enabled, indicating to play back only output adaptive bitstreams protected by DRM;</li>
<li>OFF: disabled, indicating to play back unencrypted output adaptive bitstreams.</li>
         * @type {string || null}
         */
        this.DrmSwitch = null;

        /**
         * ID of the unencrypted adaptive bitrate streaming template that allows output.
         * @type {number || null}
         */
        this.AdaptiveDynamicStreamingDefinition = null;

        /**
         * Content of the DRM-protected adaptive bitrate streaming template that allows output.
         * @type {DrmStreamingsInfoForUpdate || null}
         */
        this.DrmStreamingsInfo = null;

        /**
         * ID of the image sprite generating template that allows output.
         * @type {number || null}
         */
        this.ImageSpriteDefinition = null;

        /**
         * Display name of player for substreams with different resolutions.
         * @type {Array.<ResolutionNameInfo> || null}
         */
        this.ResolutionNames = null;

        /**
         * Domain name used for playback. If its value is `Default`, the domain name configured in [Default Distribution Configuration](https://intl.cloud.tencent.com/document/product/266/33373?from_cn_redirect=1) will be used.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Scheme used for playback. Valid values:
<li>Default: the scheme configured in [Default Distribution Configuration](https://intl.cloud.tencent.com/document/product/266/33373?from_cn_redirect=1) will be used;</li>
<li>HTTP;</li>
<li>HTTPS.</li>
         * @type {string || null}
         */
        this.Scheme = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.DrmSwitch = 'DrmSwitch' in params ? params.DrmSwitch : null;
        this.AdaptiveDynamicStreamingDefinition = 'AdaptiveDynamicStreamingDefinition' in params ? params.AdaptiveDynamicStreamingDefinition : null;

        if (params.DrmStreamingsInfo) {
            let obj = new DrmStreamingsInfoForUpdate();
            obj.deserialize(params.DrmStreamingsInfo)
            this.DrmStreamingsInfo = obj;
        }
        this.ImageSpriteDefinition = 'ImageSpriteDefinition' in params ? params.ImageSpriteDefinition : null;

        if (params.ResolutionNames) {
            this.ResolutionNames = new Array();
            for (let z in params.ResolutionNames) {
                let obj = new ResolutionNameInfo();
                obj.deserialize(params.ResolutionNames[z]);
                this.ResolutionNames.push(obj);
            }
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Scheme = 'Scheme' in params ? params.Scheme : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * Task overview information
 * @class
 */
class TaskSimpleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task type. Valid values:
<li>Procedure: video processing task;</li>
<li>EditMedia: video editing task</li>
<li>WechatDistribute: release on WeChat task.</li>
Task types compatible with v2017:
<li>Transcode: transcoding task;</li>
<li>SnapshotByTimeOffset: video screencapturing task</li>
<li>Concat: video splicing task;</li>
<li>Clip: video clipping task;</li>
<li>ImageSprites: image sprite generating task.</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Creation time of task in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Start time of task execution in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I). If the task has not been started yet, this field will be empty.
         * @type {string || null}
         */
        this.BeginProcessTime = null;

        /**
         * End time of task in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I). If the task has not been completed yet, this field will be empty.
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * ID used for deduplication if there was a request with the same ID in the last seven days.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Source context, which is used to pass through the user request information.
         * @type {string || null}
         */
        this.SessionContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BeginProcessTime = 'BeginProcessTime' in params ? params.BeginProcessTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

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
         * Creation time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
 * Control parameter of prohibited information detection in text task
 * @class
 */
class ProhibitedOcrReviewTemplateInfoForUpdate extends  AbstractModel {
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
 * DescribeVodDomains request structure.
 * @class
 */
class DescribeVodDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of domain names. If this parameter is left empty, all domain names will be listed.
<li>Maximum number of domain names listed: 20</li>
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Maximum results to return for pulling paginated queries. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number offset from the beginning of paginated queries. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * VOD [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID. If you need to access a resource in a subapplication, set this parameter to the subapplication ID; otherwise, leave it empty.
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
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DescribeTasks request structure.
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter: Task status. Valid values: WAITING (waiting), PROCESSING (processing), FINISH (completed).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Filter: file ID.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Number of entries to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Scrolling identifier which is used for pulling in batches. If a single request cannot pull all the data entries, the API will return `ScrollToken`, and if the next request carries it, the next pull will start from the next entry.
         * @type {string || null}
         */
        this.ScrollToken = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.Status = 'Status' in params ? params.Status : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * Times of initiating intelligent content recognition tasks.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Duration of intelligent recognition content.
         * @type {number || null}
         */
        this.TotalDuration = null;

        /**
         * Data of intelligent recognition content duration. One piece of data is collected every day.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Subapplication creation time of task in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Subapplication status. Valid values:
<li>On: enabled</li>
<li>Off: disabled</li>
<li>Destroying: terminating</li>
<li>Destroyed: terminated</li>
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
 * DescribeAllClass response structure.
 * @class
 */
class DescribeAllClassResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Category information set
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaClassInfo> || null}
         */
        this.ClassInfoSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClassInfoSet) {
            this.ClassInfoSet = new Array();
            for (let z in params.ClassInfoSet) {
                let obj = new MediaClassInfo();
                obj.deserialize(params.ClassInfoSet[z]);
                this.ClassInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Start time of stream clipping in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of stream clipping in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
 * DescribeWordSamples request structure.
 * @class
 */
class DescribeWordSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <b>Keyword usage. Valid values:</b>
1. Recognition.Ocr: OCR-based content recognition
2. Recognition.Asr: ASR-based content recognition
3. Review.Ocr: OCR-based inappropriate information recognition
4. Review.Asr: ASR-based inappropriate information recognition
<b>Valid values can also be:</b>
5. Recognition: ASR- and OCR-based content recognition; equivalent to 1+2
6. Review: ASR- and OCR-based inappropriate information recognition; equivalent to 3+4
You can select multiple elements, which are connected by OR logic. If a use case contains any element in this parameter, the keyword sample will be used.
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * Keyword filter. Array length limit: 100 words.
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * Tag filter. Array length limit: 20 words.
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries to be returned. Default value: 100. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.Usages = 'Usages' in params ? params.Usages : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * ModifyWordSample response structure.
 * @class
 */
class ModifyWordSampleResponse extends  AbstractModel {
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
         * Filter tags for terrorism information detection in images. If a moderation result contains a selected tag, it will be returned. If no filter tag is specified, all moderation results will be returned. Valid values:
<li>`guns`: weapons and guns</li>
<li>`crowd`: crowds</li>
<li>`bloody`: bloody images</li>
<li>`police`: police forces</li>
<li>`banners`: terrorism flags</li>
<li>`militant`: militants</li>
<li>`explosion`: explosions and fires</li>
<li>`terrorists`: terrorists</li>
<li>`scenario`: terrorism images</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 90 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 80 will be used by default. Value range: 0-100.
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
 * Modification object of DRM-protected adaptive bitstream playback information
 * @class
 */
class DrmStreamingsInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the adaptive bitrate streaming template whose protection type is SimpleAES.
         * @type {number || null}
         */
        this.SimpleAesDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SimpleAesDefinition = 'SimpleAesDefinition' in params ? params.SimpleAesDefinition : null;

    }
}

/**
 * DeleteClass request structure.
 * @class
 */
class DeleteClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Category ID
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * Control parameter of politically sensitive information detection task.
 * @class
 */
class PoliticalConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of politically sensitive information detection in video image.
         * @type {PoliticalImgReviewTemplateInfoForUpdate || null}
         */
        this.ImgReviewInfo = null;

        /**
         * Control parameter of politically sensitive information detection in speech.
         * @type {PoliticalAsrReviewTemplateInfoForUpdate || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of politically sensitive information detection in text.
         * @type {PoliticalOcrReviewTemplateInfoForUpdate || null}
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
            let obj = new PoliticalImgReviewTemplateInfoForUpdate();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PoliticalAsrReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PoliticalOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

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
         * Rotation angle of image with its center point as origin. Value range: 0-360. This parameter is valid if `Type` is `Rotate`.
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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * ModifyPersonSample response structure.
 * @class
 */
class ModifyPersonSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of a sample.
         * @type {AiSamplePerson || null}
         */
        this.Person = null;

        /**
         * Information of samples that failed the verification by facial feature positioning.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<AiSampleFailFaceInfo> || null}
         */
        this.FailFaceInfoSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Person) {
            let obj = new AiSamplePerson();
            obj.deserialize(params.Person)
            this.Person = obj;
        }

        if (params.FailFaceInfoSet) {
            this.FailFaceInfoSet = new Array();
            for (let z in params.FailFaceInfoSet) {
                let obj = new AiSampleFailFaceInfo();
                obj.deserialize(params.FailFaceInfoSet[z]);
                this.FailFaceInfoSet.push(obj);
            }
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
         * Source of media material for video segment, which can be:
<li>ID of VOD media files</li>
<li>Download URL of other media files.</li>
Note: when a download URL of other media files is used as the material source and access control (such as hotlink protection) is enabled, the URL needs to carry access control parameters (such as hotlink protection signature).
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
 * DeleteTranscodeTemplate response structure.
 * @class
 */
class DeleteTranscodeTemplateResponse extends  AbstractModel {
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
         * Transcoding specification ID. For more information, please see [Transcoding Parameter Template](https://intl.cloud.tencent.com/document/product/266/33478?from_cn_redirect=1#.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF).
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
 * DescribePersonSamples response structure.
 * @class
 */
class DescribePersonSamplesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Figure information.
         * @type {Array.<AiSamplePerson> || null}
         */
        this.PersonSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.PersonSet) {
            this.PersonSet = new Array();
            for (let z in params.PersonSet) {
                let obj = new AiSamplePerson();
                obj.deserialize(params.PersonSet[z]);
                this.PersonSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Input information of a video splitting task.
 * @class
 */
class SplitMediaTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video ID.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Offset of the video splitting start time in seconds.
<li>If this parameter is left empty or set to 0, the transcoded video will start at the same time as the original video.</li>
<li>If this parameter is set to a positive number (n for example), the transcoded video will start at the nth second of the original video.</li>
<li>If this parameter is set to a negative number (-n for example), the transcoded video will start at the nth second before the end of the original video.</li>
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * Offset of the video splitting end time in seconds.
<li>If this parameter is left empty or set to 0, the transcoded video will end at the same time as the original video.</li>
<li>If this parameter is set to a positive number (n for example), the transcoded video will end at the nth second of the original video.</li>
<li>If this parameter is set to a negative number (-n for example), the transcoded video will end at the nth second before the end of the original video.</li>
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * [Task flow template](https://intl.cloud.tencent.com/document/product/266/33931?lang=en&pg=) name, which should be entered if you want to perform a task flow on the generated new video.
         * @type {string || null}
         */
        this.ProcedureName = null;

        /**
         * Output information of a video splitting task.
         * @type {SplitMediaOutputConfig || null}
         */
        this.OutputConfig = null;

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
        this.ProcedureName = 'ProcedureName' in params ? params.ProcedureName : null;

        if (params.OutputConfig) {
            let obj = new SplitMediaOutputConfig();
            obj.deserialize(params.OutputConfig)
            this.OutputConfig = obj;
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
         * Confidence of recognized segment. Value range: 0-100.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * Control parameter of face recognition task
 * @class
 */
class FaceConfigureInfoForUpdate extends  AbstractModel {
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
         * Face recognition filter score. If this score is reached or exceeded, a recognition result will be returned. Value range: 0–100.
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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * CreateSubAppId request structure.
 * @class
 */
class CreateSubAppIdRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

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
    constructor(){
        super();

        /**
         * File ID set. Any element in the set can be matched.
<li>Array length limit: 10.</li>
<li>ID length limit: 40 characters.</li>
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * Filename set. Filenames of media files are fuzzily matched. The higher the match rate, the higher-ranked the result.
<li>Filename length limit: 40 characters.</li>
<li>Array length limit: 10.</li>
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * Filename prefix, which matches the filenames of media files.
<li>Filename prefix length limit: 20 characters.</li>
<li>Array length limit: 10.</li>
         * @type {Array.<string> || null}
         */
        this.NamePrefixes = null;

        /**
         * File description set. Media file descriptions are fuzzily matched. The higher the match rate, the higher-ranked the result.
<li>Length limit for a single description: 100 characters</li>
<li>Array length limit: 10</li>
         * @type {Array.<string> || null}
         */
        this.Descriptions = null;

        /**
         * Category ID set. The categories of the specified IDs and all subcategories in the set are matched.
<li>Array length limit: 10.</li>
         * @type {Array.<number> || null}
         */
        this.ClassIds = null;

        /**
         * Tag set, which matches any element in the set.
<li>Tag length limit: 8 characters.</li>
<li>Array length limit: 10.</li>
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * File type. Any element in the set can be matched.
<li>Video: video file</li>
<li>Audio: audio file</li>
<li>Image: image file</li>
         * @type {Array.<string> || null}
         */
        this.Categories = null;

        /**
         * Media file source set. For valid values, please see [SourceType](https://intl.cloud.tencent.com/document/product/266/31773?from_cn_redirect=1#MediaSourceData).
<li>Array length limit: 10.</li>
         * @type {Array.<string> || null}
         */
        this.SourceTypes = null;

        /**
         * [Stream ID](https://intl.cloud.tencent.com/document/product/267/5959?from_cn_redirect=1) set. Any element in the set can be matched.
<li>Array length limit: 10.</li>
         * @type {Array.<string> || null}
         */
        this.StreamIds = null;

        /**
         * Unique ID of LVB recording file. Any element in the set can be matched.
<li>Array length limit: 10.</li>
         * @type {Array.<string> || null}
         */
        this.Vids = null;

        /**
         * Matches files created within the time period.
<li>Includes specified start and end points in time.</li>
         * @type {TimeRange || null}
         */
        this.CreateTime = null;

        /**
         * Sorting order.
<li>Valid value of `Sort.Field`: CreateTime.</li>
<li>If `Text`, `Names`, or `Descriptions` is not empty, the `Sort.Field` field will not take effect, and the search results will be sorted by match rate.</li>
         * @type {SortBy || null}
         */
        this.Sort = null;

        /**
         * <div id="p_offset">Start offset of a paged return. Default value: 0. Entries from No. "Offset" to No. "Offset + Limit - 1" will be returned.
<li>Value range: "Offset + Limit" cannot be more than 5,000. (For more information, please see <a href="#maxResultsDesc">Limit on the Number of Results Returned by API</a>)</li></div>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <div id="p_limit">Number of entries returned by a paged query. Default value: 10. Entries from No. "Offset" to No. "Offset + Limit - 1" will be returned.
<li>Value range: "Offset + Limit" cannot be more than 5,000. (For more information, please see <a href="#maxResultsDesc">Limit on the Number of Results Returned by API</a>)</li></div>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Specifies information entry that needs to be returned for all media files. Multiple entries can be specified simultaneously. N starts from 0. If this field is left empty, all information entries will be returned by default. Valid values:
<li>basicInfo (basic video information).</li>
<li>metaData (video metadata).</li>
<li>transcodeInfo (result information of video transcoding).</li>
<li>animatedGraphicsInfo (result information of animated image generating task).</li>
<li>imageSpriteInfo (image sprite information).</li>
<li>snapshotByTimeOffsetInfo (point-in-time screenshot information).</li>
<li>sampleSnapshotInfo (sampled screenshot information).</li>
<li>keyFrameDescInfo (timestamp information).</li>
<li>adaptiveDynamicStreamingInfo (information of adaptive bitrate streaming).</li>
<li>miniProgramReviewInfo (WeChat Mini Program audit information).</li>
         * @type {Array.<string> || null}
         */
        this.Filters = null;

        /**
         * Regions where media files are stored, such as `ap-chongqing`. For more regions, see [Storage Regions](https://intl.cloud.tencent.com/document/product/266/9760?from_cn_redirect=1#.E5.B7.B2.E6.94.AF.E6.8C.81.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8).
<li>Length limit for a single region: 20 characters</li>
<li>Array length limit: 20</li>
         * @type {Array.<string> || null}
         */
        this.StorageRegions = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * (This is not recommended. `Names`, `NamePrefixes`, or `Descriptions` should be used instead)
Search text, which fuzzily matches the media file name or description. The more matching items and the higher the match rate, the higher-ranked the result. It can contain up to 64 characters.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * (This is not recommended. `SourceTypes` should be used instead)
Media file source. For valid values, please see [SourceType](https://intl.cloud.tencent.com/document/product/266/31773?from_cn_redirect=1#MediaSourceData).
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * (This is not recommended. `StreamIds` should be used instead)
[Stream ID](https://intl.cloud.tencent.com/document/product/267/5959?from_cn_redirect=1).
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * (This is not recommended. `Vids` should be used instead)
Unique ID of LVB recording file.
         * @type {string || null}
         */
        this.Vid = null;

        /**
         * (This is not recommended. `CreateTime` should be used instead)
Start time in the creation time range.
<li>After or at the start time.</li>
<li>If `CreateTime.After` also exists, it will be used first.</li>
<li>In ISO 8601 format. For more information, please see [ISO Date Format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).</li>
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * (This is not recommended. `CreateTime` should be used instead)
End time in the creation time range.
<li>Before the end time.</li>
<li>If `CreateTime.Before` also exists, it will be used first.</li>
<li>In ISO 8601 format. For more information, please see [ISO Date Format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).</li>
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
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.Names = 'Names' in params ? params.Names : null;
        this.NamePrefixes = 'NamePrefixes' in params ? params.NamePrefixes : null;
        this.Descriptions = 'Descriptions' in params ? params.Descriptions : null;
        this.ClassIds = 'ClassIds' in params ? params.ClassIds : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Categories = 'Categories' in params ? params.Categories : null;
        this.SourceTypes = 'SourceTypes' in params ? params.SourceTypes : null;
        this.StreamIds = 'StreamIds' in params ? params.StreamIds : null;
        this.Vids = 'Vids' in params ? params.Vids : null;

        if (params.CreateTime) {
            let obj = new TimeRange();
            obj.deserialize(params.CreateTime)
            this.CreateTime = obj;
        }

        if (params.Sort) {
            let obj = new SortBy();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Filters = 'Filters' in params ? params.Filters : null;
        this.StorageRegions = 'StorageRegions' in params ? params.StorageRegions : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Vid = 'Vid' in params ? params.Vid : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Expiration time of suspected image URL in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
         * Audio gain. Value range: 0-10.
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
         * Error code. An empty string indicates the task is successful; other values indicate failure. For details, see [Video Processing Error Codes](https://intl.cloud.tencent.com/zh/document/product/266/39145).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; other values indicate failure. You’re not recommended to use this parameter, but to use the new parameter `ErrCodeExt`.
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * ModifyClass response structure.
 * @class
 */
class ModifyClassResponse extends  AbstractModel {
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
 * Control parameter of porn detection in video image task.
 * @class
 */
class PornImgReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of porn detection in video image task. Valid values:
<li>ON: enables porn detection in video image task;</li>
<li>OFF: disables porn detection in video image task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Filter tag for porn detection in video image. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. Valid values:
<li>porn: porn;</li>
<li>vulgar: vulgarity;</li>
<li>intimacy: intimacy;</li>
<li>sexy: sexiness.</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0–100.
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

        /**
         * Metadata of a source video
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

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }

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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 90 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 0 will be used by default. Value range: 0-100.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
 * Time point screencapturing task information. This structure is only used for tasks initiated by the [CreateSnapshotByTimeOffset](https://intl.cloud.tencent.com/document/product/266/8102?from_cn_redirect=1) API in v2017.
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
         * screenshot specification. For more information, please see [Parameter Template for Time Point Screencapturing](https://intl.cloud.tencent.com/document/product/266/33480?from_cn_redirect=1#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF).
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
 * Category information description
 * @class
 */
class MediaClassInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Category ID
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Parent category ID, which is -1 for a first-level category.
         * @type {number || null}
         */
        this.ParentId = null;

        /**
         * Category name
         * @type {string || null}
         */
        this.ClassName = null;

        /**
         * Category level. 0 for first-level category, up to 3, i.e., up to 4 levels of categories are allowed.
         * @type {number || null}
         */
        this.Level = null;

        /**
         * Set of IDs of the immediate subcategories in current category
         * @type {Array.<number> || null}
         */
        this.SubClassIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.SubClassIdSet = 'SubClassIdSet' in params ? params.SubClassIdSet : null;

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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * ID of a [subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
         * Category list of frame-specific tag names. `CategorySet.N` indicates the N+1-level category.
For example, if the `Tag` is "tower", and `CategorySet` contains two elements (`CategorySet.0` is "scene", and `CategorySet.1` is "architecture"), then the frame-specific tag is "tower", the first-level category is "scene", and the second-level category is "architecture".
         * @type {Array.<string> || null}
         */
        this.CategorySet = null;

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
        this.CategorySet = 'CategorySet' in params ? params.CategorySet : null;
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
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
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
         * Creation time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
 * Image sprite information
 * @class
 */
class MediaImageSpriteItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image sprite specification. For more information, please see [Image Sprite Parameter Template](https://intl.cloud.tencent.com/document/product/266/33480?from_cn_redirect=1#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.A8.A1.E6.9D.BF).
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
 * DescribePersonSamples request structure.
 * @class
 */
class DescribePersonSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of samples to pull. Valid values:
<li>UserDefine: custom sample library</li>
<li>Default: default sample library</li>

Default value: UserDefine. Samples in the custom sample library will be pulled.
Note: samples from the default library can only be pulled by providing the name or both the ID and name of a sample. Only one face image will be returned.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * IDs of samples. Array length limit: 100.
         * @type {Array.<string> || null}
         */
        this.PersonIds = null;

        /**
         * Names of samples. Array length limit: 20.
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * Tags of a sample. Array length limit: 20.
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries to be returned. Default value: 100. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
        this.PersonIds = 'PersonIds' in params ? params.PersonIds : null;
        this.Names = 'Names' in params ? params.Names : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * Start time in ISO 8601 format. For more information, please see [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?lang=en&pg=).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time in ISO 8601 format, which should be larger than the start time. For more information, please see [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?lang=en&pg=).
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Time granularity. Valid values:
<li>Minute: 5-minute granularity</li>
<li>Day: 1-day granularity</li>
The value is set according to query period length by default. 5-minute granularity is set for periods no longer than 1 day, and 1-day granularity is set for periods longer than 1 day.
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
When the value of this field is 1, the total usage of all subapplications (including primary application) are queried by an admin.
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * Storage region to query. Valid values:
<li>Chinese Mainland</li>
<li>Outside Chinese Mainland</li>
Default value: Chinese Mainland
         * @type {string || null}
         */
        this.Area = null;

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
        this.Area = 'Area' in params ? params.Area : null;

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
 * VOD storage usage by region.
 * @class
 */
class StorageStatData extends  AbstractModel {
    constructor(){
        super();

        /**
         * VOD storage billing region. Valid values:
<li>Chinese Mainland</li>
<li>Outside Chinese Mainland</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Current total storage capacity in bytes.
         * @type {number || null}
         */
        this.TotalStorage = null;

        /**
         * Current STANDARD_IA storage capacity in bytes.
         * @type {number || null}
         */
        this.InfrequentStorage = null;

        /**
         * Current STANDARD storage capacity in bytes.
         * @type {number || null}
         */
        this.StandardStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.TotalStorage = 'TotalStorage' in params ? params.TotalStorage : null;
        this.InfrequentStorage = 'InfrequentStorage' in params ? params.InfrequentStorage : null;
        this.StandardStorage = 'StandardStorage' in params ? params.StandardStorage : null;

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
         * Category ID, which is used to categorize the media for management. A category can be created and its ID can be obtained by using the [category creating](https://intl.cloud.tencent.com/document/product/266/7812?from_cn_redirect=1) API.
<li>Default value: 0, which means "Other".</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Expiration time of output media file in ISO 8601 format, after which the file will be deleted. Files will never expire by default. For more information, please see [Notes on ISO Date Format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
         * Category ID, which is used to categorize the media for management. A category can be created and its ID can be obtained by using the [category creating](https://intl.cloud.tencent.com/document/product/266/7812?from_cn_redirect=1) API.
<li>Default value: 0, which means "Other".</li>
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * Expiration time of output media file in ISO 8601 format, after which the file will be deleted. Files will never expire by default. For more information, please see [Notes on ISO Date Format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
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
         * Metadata of a source video
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

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

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
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
         * [Subapplication](https://intl.cloud.tencent.com/document/product/266/14574?from_cn_redirect=1) ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
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
    UserDefineOcrTextReviewTemplateInfoForUpdate: UserDefineOcrTextReviewTemplateInfoForUpdate,
    DescribeAllClassRequest: DescribeAllClassRequest,
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
    ManageTaskResponse: ManageTaskResponse,
    AiAnalysisTaskCoverOutput: AiAnalysisTaskCoverOutput,
    MediaSnapshotByTimeOffsetItem: MediaSnapshotByTimeOffsetItem,
    ModifySampleSnapshotTemplateRequest: ModifySampleSnapshotTemplateRequest,
    AiReviewPoliticalOcrTaskInput: AiReviewPoliticalOcrTaskInput,
    MediaInputInfo: MediaInputInfo,
    CreateImageSpriteTask2017: CreateImageSpriteTask2017,
    TempCertificate: TempCertificate,
    AiReviewTaskPoliticalOcrResult: AiReviewTaskPoliticalOcrResult,
    ManageTaskRequest: ManageTaskRequest,
    CreateImageSpriteTemplateRequest: CreateImageSpriteTemplateRequest,
    MediaSnapshotByTimePicInfoItem: MediaSnapshotByTimePicInfoItem,
    UserDefineFaceReviewTemplateInfo: UserDefineFaceReviewTemplateInfo,
    ContentReviewTemplateItem: ContentReviewTemplateItem,
    DeleteAIRecognitionTemplateResponse: DeleteAIRecognitionTemplateResponse,
    DeleteContentReviewTemplateRequest: DeleteContentReviewTemplateRequest,
    AiReviewPoliticalTaskInput: AiReviewPoliticalTaskInput,
    AudioTransform: AudioTransform,
    ResetProcedureTemplateRequest: ResetProcedureTemplateRequest,
    ComposeMediaResponse: ComposeMediaResponse,
    UrlSignatureAuthPolicy: UrlSignatureAuthPolicy,
    DeleteSampleSnapshotTemplateRequest: DeleteSampleSnapshotTemplateRequest,
    DescribeStorageDataResponse: DescribeStorageDataResponse,
    AudioTemplateInfoForUpdate: AudioTemplateInfoForUpdate,
    ModifySubAppIdInfoRequest: ModifySubAppIdInfoRequest,
    DeletePersonSampleRequest: DeletePersonSampleRequest,
    MediaSampleSnapshotItem: MediaSampleSnapshotItem,
    AiRecognitionTaskInput: AiRecognitionTaskInput,
    AudioTemplateInfo: AudioTemplateInfo,
    ExecuteFunctionResponse: ExecuteFunctionResponse,
    CoverConfigureInfo: CoverConfigureInfo,
    ComposeMediaRequest: ComposeMediaRequest,
    AIRecognitionTemplateItem: AIRecognitionTemplateItem,
    AiReviewPornAsrTaskInput: AiReviewPornAsrTaskInput,
    AiRecognitionTaskFaceResult: AiRecognitionTaskFaceResult,
    AiRecognitionTaskHeadTailResultInput: AiRecognitionTaskHeadTailResultInput,
    CreateAdaptiveDynamicStreamingTemplateRequest: CreateAdaptiveDynamicStreamingTemplateRequest,
    PushUrlCacheResponse: PushUrlCacheResponse,
    MediaProcessTaskSampleSnapshotResult: MediaProcessTaskSampleSnapshotResult,
    TerrorismImgReviewTemplateInfoForUpdate: TerrorismImgReviewTemplateInfoForUpdate,
    ModifyTranscodeTemplateRequest: ModifyTranscodeTemplateRequest,
    AiAnalysisTaskHighlightResult: AiAnalysisTaskHighlightResult,
    DeleteAIAnalysisTemplateResponse: DeleteAIAnalysisTemplateResponse,
    ApplyUploadResponse: ApplyUploadResponse,
    DescribeDailyPlayStatFileListResponse: DescribeDailyPlayStatFileListResponse,
    TextWatermarkTemplateInputForUpdate: TextWatermarkTemplateInputForUpdate,
    DeleteSuperPlayerConfigRequest: DeleteSuperPlayerConfigRequest,
    AiReviewTerrorismOcrTaskInput: AiReviewTerrorismOcrTaskInput,
    AiRecognitionTaskOcrWordsResultInput: AiRecognitionTaskOcrWordsResultInput,
    AiReviewPornTaskInput: AiReviewPornTaskInput,
    CreateProcedureTemplateRequest: CreateProcedureTemplateRequest,
    DescribeMediaProcessUsageDataRequest: DescribeMediaProcessUsageDataRequest,
    CreatePersonSampleRequest: CreatePersonSampleRequest,
    MediaTransitionItem: MediaTransitionItem,
    MediaAiAnalysisCoverItem: MediaAiAnalysisCoverItem,
    TagConfigureInfo: TagConfigureInfo,
    ModifySuperPlayerConfigResponse: ModifySuperPlayerConfigResponse,
    AiRecognitionTaskOcrWordsResultOutput: AiRecognitionTaskOcrWordsResultOutput,
    ConcatTask2017: ConcatTask2017,
    DeleteAIRecognitionTemplateRequest: DeleteAIRecognitionTemplateRequest,
    FileUploadTask: FileUploadTask,
    DescribeCDNStatDetailsResponse: DescribeCDNStatDetailsResponse,
    AttachMediaSubtitlesRequest: AttachMediaSubtitlesRequest,
    AiAnalysisTaskCoverResult: AiAnalysisTaskCoverResult,
    AiAnalysisTaskClassificationOutput: AiAnalysisTaskClassificationOutput,
    FileDeleteTask: FileDeleteTask,
    ResourceTag: ResourceTag,
    AiRecognitionTaskOcrFullTextResultOutput: AiRecognitionTaskOcrFullTextResultOutput,
    EditMediaTaskInput: EditMediaTaskInput,
    UserDefineAsrTextReviewTemplateInfo: UserDefineAsrTextReviewTemplateInfo,
    DescribeWordSamplesResponse: DescribeWordSamplesResponse,
    AiSampleFaceInfo: AiSampleFaceInfo,
    MediaProcessTaskAdaptiveDynamicStreamingResult: MediaProcessTaskAdaptiveDynamicStreamingResult,
    OcrWordsConfigureInfoForUpdate: OcrWordsConfigureInfoForUpdate,
    WatermarkTemplate: WatermarkTemplate,
    CoverBySnapshotTaskOutput: CoverBySnapshotTaskOutput,
    TextWatermarkTemplateInput: TextWatermarkTemplateInput,
    ForbidMediaDistributionRequest: ForbidMediaDistributionRequest,
    DescribeAIRecognitionTemplatesResponse: DescribeAIRecognitionTemplatesResponse,
    EditMediaResponse: EditMediaResponse,
    PoliticalOcrReviewTemplateInfoForUpdate: PoliticalOcrReviewTemplateInfoForUpdate,
    TaskOutputMediaInfo: TaskOutputMediaInfo,
    ProcessMediaByUrlRequest: ProcessMediaByUrlRequest,
    PlayStatFileInfo: PlayStatFileInfo,
    ModifyMediaInfoRequest: ModifyMediaInfoRequest,
    DeleteTranscodeTemplateRequest: DeleteTranscodeTemplateRequest,
    PornAsrReviewTemplateInfoForUpdate: PornAsrReviewTemplateInfoForUpdate,
    MediaAnimatedGraphicsInfo: MediaAnimatedGraphicsInfo,
    DescribeSnapshotByTimeOffsetTemplatesRequest: DescribeSnapshotByTimeOffsetTemplatesRequest,
    CdnLogInfo: CdnLogInfo,
    MediaSubtitleInfo: MediaSubtitleInfo,
    AiRecognitionTaskAsrFullTextResultInput: AiRecognitionTaskAsrFullTextResultInput,
    MediaMiniProgramReviewInfoItem: MediaMiniProgramReviewInfoItem,
    TaskStatData: TaskStatData,
    OcrFullTextConfigureInfoForUpdate: OcrFullTextConfigureInfoForUpdate,
    ProcessMediaByProcedureRequest: ProcessMediaByProcedureRequest,
    MediaProcessTaskInput: MediaProcessTaskInput,
    MediaProcessTaskAnimatedGraphicResult: MediaProcessTaskAnimatedGraphicResult,
    ProcessMediaResponse: ProcessMediaResponse,
    CreateWordSamplesResponse: CreateWordSamplesResponse,
    ClassificationConfigureInfoForUpdate: ClassificationConfigureInfoForUpdate,
    DeleteAdaptiveDynamicStreamingTemplateResponse: DeleteAdaptiveDynamicStreamingTemplateResponse,
    CreateWordSamplesRequest: CreateWordSamplesRequest,
    PoliticalAsrReviewTemplateInfoForUpdate: PoliticalAsrReviewTemplateInfoForUpdate,
    WechatMiniProgramPublishTaskInput: WechatMiniProgramPublishTaskInput,
    AiSampleFaceOperation: AiSampleFaceOperation,
    SvgWatermarkInputForUpdate: SvgWatermarkInputForUpdate,
    AiReviewTaskTerrorismOcrResult: AiReviewTaskTerrorismOcrResult,
    AiRecognitionTaskOcrWordsResult: AiRecognitionTaskOcrWordsResult,
    PornAsrReviewTemplateInfo: PornAsrReviewTemplateInfo,
    AiRecognitionTaskSegmentResult: AiRecognitionTaskSegmentResult,
    MediaSubtitleItem: MediaSubtitleItem,
    ProhibitedAsrReviewTemplateInfoForUpdate: ProhibitedAsrReviewTemplateInfoForUpdate,
    ModifyAnimatedGraphicsTemplateResponse: ModifyAnimatedGraphicsTemplateResponse,
    ModifyAIAnalysisTemplateResponse: ModifyAIAnalysisTemplateResponse,
    LiveRealTimeClipRequest: LiveRealTimeClipRequest,
    DeleteAdaptiveDynamicStreamingTemplateRequest: DeleteAdaptiveDynamicStreamingTemplateRequest,
    AiRecognitionTaskOcrFullTextSegmentItem: AiRecognitionTaskOcrFullTextSegmentItem,
    EditMediaOutputConfig: EditMediaOutputConfig,
    SplitMediaTaskSegmentInfo: SplitMediaTaskSegmentInfo,
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
    TimeRange: TimeRange,
    DescribeAdaptiveDynamicStreamingTemplatesRequest: DescribeAdaptiveDynamicStreamingTemplatesRequest,
    ImageWatermarkInput: ImageWatermarkInput,
    ObjectConfigureInfo: ObjectConfigureInfo,
    AsrFullTextConfigureInfoForUpdate: AsrFullTextConfigureInfoForUpdate,
    AiRecognitionTaskHeadTailResult: AiRecognitionTaskHeadTailResult,
    TranscodeTask2017: TranscodeTask2017,
    CreatePersonSampleResponse: CreatePersonSampleResponse,
    CreateContentReviewTemplateResponse: CreateContentReviewTemplateResponse,
    ModifyAnimatedGraphicsTemplateRequest: ModifyAnimatedGraphicsTemplateRequest,
    DescribeProcedureTemplatesRequest: DescribeProcedureTemplatesRequest,
    ProhibitedConfigureInfoForUpdate: ProhibitedConfigureInfoForUpdate,
    TagConfigureInfoForUpdate: TagConfigureInfoForUpdate,
    DeleteWordSamplesRequest: DeleteWordSamplesRequest,
    EmptyTrackItem: EmptyTrackItem,
    StickerTrackItem: StickerTrackItem,
    VideoTemplateInfo: VideoTemplateInfo,
    PoliticalOcrReviewTemplateInfo: PoliticalOcrReviewTemplateInfo,
    PornOcrReviewTemplateInfoForUpdate: PornOcrReviewTemplateInfoForUpdate,
    AiReviewTaskPornOcrResult: AiReviewTaskPornOcrResult,
    ModifyContentReviewTemplateResponse: ModifyContentReviewTemplateResponse,
    DescribeWatermarkTemplatesRequest: DescribeWatermarkTemplatesRequest,
    CoverBySnapshotTaskInput: CoverBySnapshotTaskInput,
    SegmentConfigureInfoForUpdate: SegmentConfigureInfoForUpdate,
    UserDefineConfigureInfo: UserDefineConfigureInfo,
    AiRecognitionTaskSegmentSegmentItem: AiRecognitionTaskSegmentSegmentItem,
    AiReviewPornOcrTaskInput: AiReviewPornOcrTaskInput,
    OcrWordsConfigureInfo: OcrWordsConfigureInfo,
    CreateSuperPlayerConfigResponse: CreateSuperPlayerConfigResponse,
    AiAnalysisTaskFrameTagOutput: AiAnalysisTaskFrameTagOutput,
    ModifyAdaptiveDynamicStreamingTemplateRequest: ModifyAdaptiveDynamicStreamingTemplateRequest,
    MediaAnimatedGraphicsItem: MediaAnimatedGraphicsItem,
    DescribeCDNUsageDataResponse: DescribeCDNUsageDataResponse,
    ModifyWordSampleRequest: ModifyWordSampleRequest,
    AiRecognitionTaskFaceSegmentItem: AiRecognitionTaskFaceSegmentItem,
    DeleteMediaResponse: DeleteMediaResponse,
    ModifySnapshotByTimeOffsetTemplateResponse: ModifySnapshotByTimeOffsetTemplateResponse,
    AiRecognitionTaskObjectResult: AiRecognitionTaskObjectResult,
    AiAnalysisTaskTagResult: AiAnalysisTaskTagResult,
    SearchMediaResponse: SearchMediaResponse,
    AiAnalysisTaskTagOutput: AiAnalysisTaskTagOutput,
    AiAnalysisTaskHighlightOutput: AiAnalysisTaskHighlightOutput,
    MediaSubtitleInput: MediaSubtitleInput,
    ProcessMediaRequest: ProcessMediaRequest,
    ModifyMediaInfoResponse: ModifyMediaInfoResponse,
    AiRecognitionTaskOcrFullTextResult: AiRecognitionTaskOcrFullTextResult,
    MediaProcessTaskSnapshotByTimeOffsetResult: MediaProcessTaskSnapshotByTimeOffsetResult,
    AiSampleWord: AiSampleWord,
    AiRecognitionTaskAsrWordsResultOutput: AiRecognitionTaskAsrWordsResultOutput,
    ModifyAdaptiveDynamicStreamingTemplateResponse: ModifyAdaptiveDynamicStreamingTemplateResponse,
    MediaProcessTaskTranscodeResult: MediaProcessTaskTranscodeResult,
    DomainDetailInfo: DomainDetailInfo,
    AiRecognitionTaskSegmentResultOutput: AiRecognitionTaskSegmentResultOutput,
    ImageSpriteTaskInput: ImageSpriteTaskInput,
    ObjectConfigureInfoForUpdate: ObjectConfigureInfoForUpdate,
    DeleteMediaRequest: DeleteMediaRequest,
    CreateSuperPlayerConfigRequest: CreateSuperPlayerConfigRequest,
    ImageWatermarkTemplate: ImageWatermarkTemplate,
    ModifySubAppIdInfoResponse: ModifySubAppIdInfoResponse,
    AsrWordsConfigureInfo: AsrWordsConfigureInfo,
    ModifySubAppIdStatusResponse: ModifySubAppIdStatusResponse,
    SimpleHlsClipRequest: SimpleHlsClipRequest,
    MediaDeleteItem: MediaDeleteItem,
    AiSamplePerson: AiSamplePerson,
    MediaAdaptiveDynamicStreamingInfo: MediaAdaptiveDynamicStreamingInfo,
    DescribeDailyPlayStatFileListRequest: DescribeDailyPlayStatFileListRequest,
    DescribeSuperPlayerConfigsResponse: DescribeSuperPlayerConfigsResponse,
    AsrWordsConfigureInfoForUpdate: AsrWordsConfigureInfoForUpdate,
    DescribeStorageDataRequest: DescribeStorageDataRequest,
    DeleteImageSpriteTemplateResponse: DeleteImageSpriteTemplateResponse,
    DescribeContentReviewTemplatesResponse: DescribeContentReviewTemplatesResponse,
    TEHDConfig: TEHDConfig,
    AnimatedGraphicsTemplate: AnimatedGraphicsTemplate,
    TerrorismOcrReviewTemplateInfoForUpdate: TerrorismOcrReviewTemplateInfoForUpdate,
    UserDefineAsrTextReviewTemplateInfoForUpdate: UserDefineAsrTextReviewTemplateInfoForUpdate,
    AiRecognitionTaskHeadTailResultOutput: AiRecognitionTaskHeadTailResultOutput,
    ModifyImageSpriteTemplateResponse: ModifyImageSpriteTemplateResponse,
    MediaProcessTaskCoverBySnapshotResult: MediaProcessTaskCoverBySnapshotResult,
    CreateWatermarkTemplateRequest: CreateWatermarkTemplateRequest,
    TerrorismConfigureInfoForUpdate: TerrorismConfigureInfoForUpdate,
    WechatMiniProgramPublishTask: WechatMiniProgramPublishTask,
    ComposeMediaTask: ComposeMediaTask,
    HeadTailConfigureInfoForUpdate: HeadTailConfigureInfoForUpdate,
    TranscodePlayInfo2017: TranscodePlayInfo2017,
    SplitMediaTask: SplitMediaTask,
    ComposeMediaTaskInput: ComposeMediaTaskInput,
    AnimatedGraphicTaskInput: AnimatedGraphicTaskInput,
    MosaicInput: MosaicInput,
    AIAnalysisTemplateItem: AIAnalysisTemplateItem,
    AiRecognitionTaskObjectResultItem: AiRecognitionTaskObjectResultItem,
    MediaSnapshotByTimeOffsetInfo: MediaSnapshotByTimeOffsetInfo,
    DescribeImageSpriteTemplatesRequest: DescribeImageSpriteTemplatesRequest,
    MediaKeyFrameDescItem: MediaKeyFrameDescItem,
    AiSampleTagOperation: AiSampleTagOperation,
    PlayerConfig: PlayerConfig,
    ConfirmEventsRequest: ConfirmEventsRequest,
    CreateAIRecognitionTemplateResponse: CreateAIRecognitionTemplateResponse,
    ModifySubAppIdStatusRequest: ModifySubAppIdStatusRequest,
    CreateSubAppIdResponse: CreateSubAppIdResponse,
    CreateWatermarkTemplateResponse: CreateWatermarkTemplateResponse,
    AiReviewTerrorismTaskOutput: AiReviewTerrorismTaskOutput,
    ResetProcedureTemplateResponse: ResetProcedureTemplateResponse,
    ProhibitedConfigureInfo: ProhibitedConfigureInfo,
    DrmStreamingsInfo: DrmStreamingsInfo,
    AiReviewTerrorismOcrTaskOutput: AiReviewTerrorismOcrTaskOutput,
    AiAnalysisResult: AiAnalysisResult,
    ImageWatermarkInputForUpdate: ImageWatermarkInputForUpdate,
    DescribeAIAnalysisTemplatesRequest: DescribeAIAnalysisTemplatesRequest,
    MediaTranscodeInfo: MediaTranscodeInfo,
    ResolutionNameInfo: ResolutionNameInfo,
    AiRecognitionTaskOcrWordsResultItem: AiRecognitionTaskOcrWordsResultItem,
    ParseStreamingManifestRequest: ParseStreamingManifestRequest,
    DeleteSampleSnapshotTemplateResponse: DeleteSampleSnapshotTemplateResponse,
    AiAnalysisTaskTagInput: AiAnalysisTaskTagInput,
    MediaTrackItem: MediaTrackItem,
    DescribeStorageDetailsResponse: DescribeStorageDetailsResponse,
    PullEventsResponse: PullEventsResponse,
    AiRecognitionTaskObjectResultInput: AiRecognitionTaskObjectResultInput,
    DescribeCdnLogsRequest: DescribeCdnLogsRequest,
    OutputVideoStream: OutputVideoStream,
    ProcedureTemplate: ProcedureTemplate,
    AiReviewTaskTerrorismResult: AiReviewTaskTerrorismResult,
    ProcessMediaByUrlResponse: ProcessMediaByUrlResponse,
    MediaContentReviewAsrTextSegmentItem: MediaContentReviewAsrTextSegmentItem,
    DescribeCdnLogsResponse: DescribeCdnLogsResponse,
    MediaContentReviewPoliticalSegmentItem: MediaContentReviewPoliticalSegmentItem,
    DeletePersonSampleResponse: DeletePersonSampleResponse,
    CreateSnapshotByTimeOffsetTemplateResponse: CreateSnapshotByTimeOffsetTemplateResponse,
    ModifyContentReviewTemplateRequest: ModifyContentReviewTemplateRequest,
    AttachMediaSubtitlesResponse: AttachMediaSubtitlesResponse,
    AiContentReviewTaskInput: AiContentReviewTaskInput,
    CreateAdaptiveDynamicStreamingTemplateResponse: CreateAdaptiveDynamicStreamingTemplateResponse,
    ClassificationConfigureInfo: ClassificationConfigureInfo,
    AiAnalysisTaskInput: AiAnalysisTaskInput,
    ImageSpriteTemplate: ImageSpriteTemplate,
    AiRecognitionTaskOcrFullTextSegmentTextItem: AiRecognitionTaskOcrFullTextSegmentTextItem,
    SnapshotByTimeOffsetTaskInput: SnapshotByTimeOffsetTaskInput,
    SegmentConfigureInfo: SegmentConfigureInfo,
    RefererAuthPolicy: RefererAuthPolicy,
    TaskStatDataItem: TaskStatDataItem,
    ParseStreamingManifestResponse: ParseStreamingManifestResponse,
    AiReviewPornOcrTaskOutput: AiReviewPornOcrTaskOutput,
    ApplyUploadRequest: ApplyUploadRequest,
    CreateSampleSnapshotTemplateResponse: CreateSampleSnapshotTemplateResponse,
    AiAnalysisTaskHighlightInput: AiAnalysisTaskHighlightInput,
    DeleteContentReviewTemplateResponse: DeleteContentReviewTemplateResponse,
    MediaBasicInfo: MediaBasicInfo,
    AiReviewPoliticalAsrTaskInput: AiReviewPoliticalAsrTaskInput,
    PullUploadRequest: PullUploadRequest,
    SortBy: SortBy,
    ClipTask2017: ClipTask2017,
    TranscodeTemplate: TranscodeTemplate,
    DescribeCDNUsageDataRequest: DescribeCDNUsageDataRequest,
    PornOcrReviewTemplateInfo: PornOcrReviewTemplateInfo,
    AiReviewTaskPoliticalAsrResult: AiReviewTaskPoliticalAsrResult,
    AiRecognitionTaskAsrWordsSegmentItem: AiRecognitionTaskAsrWordsSegmentItem,
    DescribeReviewDetailsRequest: DescribeReviewDetailsRequest,
    PornConfigureInfoForUpdate: PornConfigureInfoForUpdate,
    AiReviewProhibitedAsrTaskInput: AiReviewProhibitedAsrTaskInput,
    MediaContentReviewSegmentItem: MediaContentReviewSegmentItem,
    TerrorismOcrReviewTemplateInfo: TerrorismOcrReviewTemplateInfo,
    AiReviewTaskPornResult: AiReviewTaskPornResult,
    AiRecognitionTaskObjectResultOutput: AiRecognitionTaskObjectResultOutput,
    AiReviewProhibitedAsrTaskOutput: AiReviewProhibitedAsrTaskOutput,
    CreateClassResponse: CreateClassResponse,
    DeleteSuperPlayerConfigResponse: DeleteSuperPlayerConfigResponse,
    DescribeSampleSnapshotTemplatesRequest: DescribeSampleSnapshotTemplatesRequest,
    CoverConfigureInfoForUpdate: CoverConfigureInfoForUpdate,
    AiAnalysisTaskClassificationResult: AiAnalysisTaskClassificationResult,
    PoliticalImgReviewTemplateInfoForUpdate: PoliticalImgReviewTemplateInfoForUpdate,
    UserDefineOcrTextReviewTemplateInfo: UserDefineOcrTextReviewTemplateInfo,
    DescribeVodDomainsResponse: DescribeVodDomainsResponse,
    AdaptiveStreamTemplate: AdaptiveStreamTemplate,
    TranscodeTaskInput: TranscodeTaskInput,
    ModifyAIRecognitionTemplateRequest: ModifyAIRecognitionTemplateRequest,
    WechatPublishTask: WechatPublishTask,
    DescribeCDNStatDetailsRequest: DescribeCDNStatDetailsRequest,
    ClipFileInfo2017: ClipFileInfo2017,
    StatDataItem: StatDataItem,
    AccelerateAreaInfo: AccelerateAreaInfo,
    MediaSourceData: MediaSourceData,
    ProhibitedAsrReviewTemplateInfo: ProhibitedAsrReviewTemplateInfo,
    PushUrlCacheRequest: PushUrlCacheRequest,
    CreateAIAnalysisTemplateResponse: CreateAIAnalysisTemplateResponse,
    HeadTailConfigureInfo: HeadTailConfigureInfo,
    EventContent: EventContent,
    HighlightsConfigureInfoForUpdate: HighlightsConfigureInfoForUpdate,
    UserDefineConfigureInfoForUpdate: UserDefineConfigureInfoForUpdate,
    AiReviewPoliticalAsrTaskOutput: AiReviewPoliticalAsrTaskOutput,
    OutputAudioStream: OutputAudioStream,
    ModifyClassRequest: ModifyClassRequest,
    SpecificationDataItem: SpecificationDataItem,
    TEHDConfigForUpdate: TEHDConfigForUpdate,
    ComposeMediaTaskOutput: ComposeMediaTaskOutput,
    DescribeMediaInfosRequest: DescribeMediaInfosRequest,
    ModifyPersonSampleRequest: ModifyPersonSampleRequest,
    AsrFullTextConfigureInfo: AsrFullTextConfigureInfo,
    CreateAIRecognitionTemplateRequest: CreateAIRecognitionTemplateRequest,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    MediaAiAnalysisClassificationItem: MediaAiAnalysisClassificationItem,
    AiAnalysisTaskFrameTagResult: AiAnalysisTaskFrameTagResult,
    AiReviewPornTaskOutput: AiReviewPornTaskOutput,
    AiRecognitionTaskAsrFullTextResult: AiRecognitionTaskAsrFullTextResult,
    ModifyAIRecognitionTemplateResponse: ModifyAIRecognitionTemplateResponse,
    PoliticalImgReviewTemplateInfo: PoliticalImgReviewTemplateInfo,
    PoliticalConfigureInfo: PoliticalConfigureInfo,
    HighlightsConfigureInfo: HighlightsConfigureInfo,
    AiRecognitionTaskOcrWordsSegmentItem: AiRecognitionTaskOcrWordsSegmentItem,
    MediaProcessTaskResult: MediaProcessTaskResult,
    DeleteWordSamplesResponse: DeleteWordSamplesResponse,
    DeleteProcedureTemplateRequest: DeleteProcedureTemplateRequest,
    WatermarkInput: WatermarkInput,
    AiSampleWordInfo: AiSampleWordInfo,
    AdaptiveDynamicStreamingInfoItem: AdaptiveDynamicStreamingInfoItem,
    ProhibitedOcrReviewTemplateInfo: ProhibitedOcrReviewTemplateInfo,
    DeleteClassResponse: DeleteClassResponse,
    ModifyTranscodeTemplateResponse: ModifyTranscodeTemplateResponse,
    MediaMetaData: MediaMetaData,
    MediaSampleSnapshotInfo: MediaSampleSnapshotInfo,
    DescribeSubAppIdsResponse: DescribeSubAppIdsResponse,
    MediaInfo: MediaInfo,
    VideoTemplateInfoForUpdate: VideoTemplateInfoForUpdate,
    CreateContentReviewTemplateRequest: CreateContentReviewTemplateRequest,
    DescribeContentReviewTemplatesRequest: DescribeContentReviewTemplatesRequest,
    AdaptiveDynamicStreamingTaskInput: AdaptiveDynamicStreamingTaskInput,
    DescribeImageSpriteTemplatesResponse: DescribeImageSpriteTemplatesResponse,
    AiAnalysisTaskFrameTagInput: AiAnalysisTaskFrameTagInput,
    MediaAiAnalysisFrameTagSegmentItem: MediaAiAnalysisFrameTagSegmentItem,
    AiRecognitionTaskAsrWordsResultItem: AiRecognitionTaskAsrWordsResultItem,
    MediaAiAnalysisTagItem: MediaAiAnalysisTagItem,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    MediaKeyFrameDescInfo: MediaKeyFrameDescInfo,
    DeleteImageSpriteTemplateRequest: DeleteImageSpriteTemplateRequest,
    CreateClassRequest: CreateClassRequest,
    AiSampleFailFaceInfo: AiSampleFailFaceInfo,
    UserDefineFaceReviewTemplateInfoForUpdate: UserDefineFaceReviewTemplateInfoForUpdate,
    CreateProcedureTemplateResponse: CreateProcedureTemplateResponse,
    DomainHTTPSConfig: DomainHTTPSConfig,
    DescribeMediaProcessUsageDataResponse: DescribeMediaProcessUsageDataResponse,
    DescribeSuperPlayerConfigsRequest: DescribeSuperPlayerConfigsRequest,
    AiRecognitionTaskOcrFullTextResultInput: AiRecognitionTaskOcrFullTextResultInput,
    SplitMediaOutputConfig: SplitMediaOutputConfig,
    AiRecognitionTaskSegmentResultInput: AiRecognitionTaskSegmentResultInput,
    DescribeTasksResponse: DescribeTasksResponse,
    DescribeSubAppIdsRequest: DescribeSubAppIdsRequest,
    AiRecognitionTaskFaceResultInput: AiRecognitionTaskFaceResultInput,
    AiReviewPoliticalTaskOutput: AiReviewPoliticalTaskOutput,
    AiReviewTaskPoliticalResult: AiReviewTaskPoliticalResult,
    ModifySnapshotByTimeOffsetTemplateRequest: ModifySnapshotByTimeOffsetTemplateRequest,
    ProcedureTask: ProcedureTask,
    ModifySuperPlayerConfigRequest: ModifySuperPlayerConfigRequest,
    TaskSimpleInfo: TaskSimpleInfo,
    DescribeSnapshotByTimeOffsetTemplatesResponse: DescribeSnapshotByTimeOffsetTemplatesResponse,
    MediaVideoStreamItem: MediaVideoStreamItem,
    SnapshotByTimeOffsetTemplate: SnapshotByTimeOffsetTemplate,
    DeleteSnapshotByTimeOffsetTemplateResponse: DeleteSnapshotByTimeOffsetTemplateResponse,
    ProhibitedOcrReviewTemplateInfoForUpdate: ProhibitedOcrReviewTemplateInfoForUpdate,
    DescribeVodDomainsRequest: DescribeVodDomainsRequest,
    DescribeTasksRequest: DescribeTasksRequest,
    DescribeReviewDetailsResponse: DescribeReviewDetailsResponse,
    CreateTranscodeTemplateResponse: CreateTranscodeTemplateResponse,
    AiRecognitionTaskAsrWordsResultInput: AiRecognitionTaskAsrWordsResultInput,
    SnapshotByTimeOffset2017: SnapshotByTimeOffset2017,
    CreateAIAnalysisTemplateRequest: CreateAIAnalysisTemplateRequest,
    AiReviewTerrorismTaskInput: AiReviewTerrorismTaskInput,
    MediaAudioStreamItem: MediaAudioStreamItem,
    MediaImageSpriteInfo: MediaImageSpriteInfo,
    SubAppIdInfo: SubAppIdInfo,
    DescribeAllClassResponse: DescribeAllClassResponse,
    ModifyImageSpriteTemplateRequest: ModifyImageSpriteTemplateRequest,
    AiReviewProhibitedOcrTaskInput: AiReviewProhibitedOcrTaskInput,
    DeleteWatermarkTemplateRequest: DeleteWatermarkTemplateRequest,
    EditMediaStreamInfo: EditMediaStreamInfo,
    DescribeWordSamplesRequest: DescribeWordSamplesRequest,
    LiveRealTimeClipResponse: LiveRealTimeClipResponse,
    ModifyAIAnalysisTemplateRequest: ModifyAIAnalysisTemplateRequest,
    CommitUploadResponse: CommitUploadResponse,
    DescribeSampleSnapshotTemplatesResponse: DescribeSampleSnapshotTemplatesResponse,
    ModifyWordSampleResponse: ModifyWordSampleResponse,
    AiContentReviewResult: AiContentReviewResult,
    TerrorismImgReviewTemplateInfo: TerrorismImgReviewTemplateInfo,
    DrmStreamingsInfoForUpdate: DrmStreamingsInfoForUpdate,
    DeleteClassRequest: DeleteClassRequest,
    DescribeTranscodeTemplatesRequest: DescribeTranscodeTemplatesRequest,
    PoliticalConfigureInfoForUpdate: PoliticalConfigureInfoForUpdate,
    DescribeWatermarkTemplatesResponse: DescribeWatermarkTemplatesResponse,
    WeChatMiniProgramPublishResponse: WeChatMiniProgramPublishResponse,
    ImageTransform: ImageTransform,
    CreateAnimatedGraphicsTemplateRequest: CreateAnimatedGraphicsTemplateRequest,
    FrameTagConfigureInfo: FrameTagConfigureInfo,
    ExecuteFunctionRequest: ExecuteFunctionRequest,
    ConfirmEventsResponse: ConfirmEventsResponse,
    ModifyPersonSampleResponse: ModifyPersonSampleResponse,
    VideoTrackItem: VideoTrackItem,
    DeleteTranscodeTemplateResponse: DeleteTranscodeTemplateResponse,
    MediaTranscodeItem: MediaTranscodeItem,
    DescribePersonSamplesResponse: DescribePersonSamplesResponse,
    SplitMediaTaskInput: SplitMediaTaskInput,
    PornConfigureInfo: PornConfigureInfo,
    AiRecognitionTaskObjectSeqmentItem: AiRecognitionTaskObjectSeqmentItem,
    PullEventsRequest: PullEventsRequest,
    FaceConfigureInfoForUpdate: FaceConfigureInfoForUpdate,
    DescribeAIAnalysisTemplatesResponse: DescribeAIAnalysisTemplatesResponse,
    CreateSnapshotByTimeOffsetTemplateRequest: CreateSnapshotByTimeOffsetTemplateRequest,
    AiRecognitionTaskAsrWordsResult: AiRecognitionTaskAsrWordsResult,
    CreateSubAppIdRequest: CreateSubAppIdRequest,
    DescribeProcedureTemplatesResponse: DescribeProcedureTemplatesResponse,
    SearchMediaRequest: SearchMediaRequest,
    CreateSampleSnapshotTemplateRequest: CreateSampleSnapshotTemplateRequest,
    MediaContentReviewOcrTextSegmentItem: MediaContentReviewOcrTextSegmentItem,
    AudioVolumeParam: AudioVolumeParam,
    AiReviewTaskPornAsrResult: AiReviewTaskPornAsrResult,
    ModifyClassResponse: ModifyClassResponse,
    EditMediaFileInfo: EditMediaFileInfo,
    ProcessMediaByProcedureResponse: ProcessMediaByProcedureResponse,
    PullUploadResponse: PullUploadResponse,
    FaceConfigureInfo: FaceConfigureInfo,
    AiRecognitionTaskFaceResultOutput: AiRecognitionTaskFaceResultOutput,
    PornImgReviewTemplateInfoForUpdate: PornImgReviewTemplateInfoForUpdate,
    EditMediaTask: EditMediaTask,
    PornImgReviewTemplateInfo: PornImgReviewTemplateInfo,
    AiReviewPoliticalOcrTaskOutput: AiReviewPoliticalOcrTaskOutput,
    OcrFullTextConfigureInfo: OcrFullTextConfigureInfo,
    CommitUploadRequest: CommitUploadRequest,
    WatermarkCycleConfigForUpdate: WatermarkCycleConfigForUpdate,
    SnapshotByTimeOffsetTask2017: SnapshotByTimeOffsetTask2017,
    MediaClassInfo: MediaClassInfo,
    DescribeTranscodeTemplatesResponse: DescribeTranscodeTemplatesResponse,
    DeleteAnimatedGraphicsTemplateRequest: DeleteAnimatedGraphicsTemplateRequest,
    DeleteSnapshotByTimeOffsetTemplateRequest: DeleteSnapshotByTimeOffsetTemplateRequest,
    DescribeAnimatedGraphicsTemplatesResponse: DescribeAnimatedGraphicsTemplatesResponse,
    MediaAiAnalysisFrameTagItem: MediaAiAnalysisFrameTagItem,
    SampleSnapshotTaskInput: SampleSnapshotTaskInput,
    TerrorismConfigureInfo: TerrorismConfigureInfo,
    PoliticalAsrReviewTemplateInfo: PoliticalAsrReviewTemplateInfo,
    CreateAnimatedGraphicsTemplateResponse: CreateAnimatedGraphicsTemplateResponse,
    SampleSnapshotTemplate: SampleSnapshotTemplate,
    MediaImageSpriteItem: MediaImageSpriteItem,
    DescribePersonSamplesRequest: DescribePersonSamplesRequest,
    AiRecognitionTaskFaceResultItem: AiRecognitionTaskFaceResultItem,
    AiAnalysisTaskCoverInput: AiAnalysisTaskCoverInput,
    DescribeStorageDetailsRequest: DescribeStorageDetailsRequest,
    MediaTrack: MediaTrack,
    StorageStatData: StorageStatData,
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
