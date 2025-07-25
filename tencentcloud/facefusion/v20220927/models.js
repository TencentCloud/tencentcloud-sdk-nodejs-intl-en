/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * Metadata structure, in key/value format
 * @class
 */
class MetaData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metadata key
         * @type {string || null}
         */
        this.MetaKey = null;

        /**
         * Metadata value
         * @type {string || null}
         */
        this.MetaValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetaKey = 'MetaKey' in params ? params.MetaKey : null;
        this.MetaValue = 'MetaValue' in params ? params.MetaValue : null;

    }
}

/**
 * Logo parameter
 * @class
 */
class LogoParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Coordinates of the logo image in the fusion result image. The logo image will be stretched according to the coordinates.
         * @type {FaceRect || null}
         */
        this.LogoRect = null;

        /**
         * Logo image URL
●Either the Base64 code or URL must be provided. If both are provided, URL prevails.
●Supported image format: JPG or PNG
         * @type {string || null}
         */
        this.LogoUrl = null;

        /**
         * Logo image Base64 code
●Either the Base64 code or URL must be provided. If both are provided, URL prevails.
●Supported image format: JPG or PNG
         * @type {string || null}
         */
        this.LogoImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LogoRect) {
            let obj = new FaceRect();
            obj.deserialize(params.LogoRect)
            this.LogoRect = obj;
        }
        this.LogoUrl = 'LogoUrl' in params ? params.LogoUrl : null;
        this.LogoImage = 'LogoImage' in params ? params.LogoImage : null;

    }
}

/**
 * QueryVideoFaceFusionJob response structure.
 * @class
 */
class QueryVideoFaceFusionJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current task status: queuing, processing, processing failed, or processing completed
         * @type {string || null}
         */
        this.JobStatus = null;

        /**
         * Video face fusion result
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VideoFaceFusionOutput || null}
         */
        this.VideoFaceFusionOutput = null;

        /**
         * Task status code. 1: queuing; 3: processing; 5: processing failed; 7: processing completed.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.JobStatusCode = null;

        /**
         * Task failure error code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobErrorCode = null;

        /**
         * Task failure error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobErrorMsg = null;

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
        this.JobStatus = 'JobStatus' in params ? params.JobStatus : null;

        if (params.VideoFaceFusionOutput) {
            let obj = new VideoFaceFusionOutput();
            obj.deserialize(params.VideoFaceFusionOutput)
            this.VideoFaceFusionOutput = obj;
        }
        this.JobStatusCode = 'JobStatusCode' in params ? params.JobStatusCode : null;
        this.JobErrorCode = 'JobErrorCode' in params ? params.JobErrorCode : null;
        this.JobErrorMsg = 'JobErrorMsg' in params ? params.JobErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryVideoFaceFusionJob request structure.
 * @class
 */
class QueryVideoFaceFusionJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID of the video face fusion task
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * SubmitVideoFaceFusionJob response structure.
 * @class
 */
class SubmitVideoFaceFusionJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID of the video face fusion task
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Estimated processing time of the video face fusion task, in seconds
         * @type {number || null}
         */
        this.EstimatedProcessTime = null;

        /**
         * Estimated processing time of the video face fusion task, in seconds
         * @type {number || null}
         */
        this.JobQueueLength = null;

        /**
         * Inappropriate content recognition result. The element order of this array is the same as that of mergeinfo in the request, with a one-to-one relationship.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<FuseFaceReviewResult> || null}
         */
        this.ReviewResultSet = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.EstimatedProcessTime = 'EstimatedProcessTime' in params ? params.EstimatedProcessTime : null;
        this.JobQueueLength = 'JobQueueLength' in params ? params.JobQueueLength : null;

        if (params.ReviewResultSet) {
            this.ReviewResultSet = new Array();
            for (let z in params.ReviewResultSet) {
                let obj = new FuseFaceReviewResult();
                obj.deserialize(params.ReviewResultSet[z]);
                this.ReviewResultSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 
 * @class
 */
class FuseFaceReviewDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 
         * @type {string || null}
         */
        this.Suggestion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

    }
}

/**
 * Returned video face fusion result
 * @class
 */
class VideoFaceFusionOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL of the video output after video face fusion
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * MD5 value of the video output after video face fusion, which is used for verification
         * @type {string || null}
         */
        this.VideoMD5 = null;

        /**
         * Video width
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Video height
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Frames per second
         * @type {number || null}
         */
        this.FPS = null;

        /**
         * Video duration, in seconds
         * @type {number || null}
         */
        this.DurationInSec = null;

        /**
         * Number of frames
         * @type {number || null}
         */
        this.Frame = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.VideoMD5 = 'VideoMD5' in params ? params.VideoMD5 : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.FPS = 'FPS' in params ? params.FPS : null;
        this.DurationInSec = 'DurationInSec' in params ? params.DurationInSec : null;
        this.Frame = 'Frame' in params ? params.Frame : null;

    }
}

/**
 * Image encoding parameter
 * @class
 */
class ImageCodecParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metadata. The number of metadata entries cannot exceed 1.
         * @type {Array.<MetaData> || null}
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

        if (params.MetaData) {
            this.MetaData = new Array();
            for (let z in params.MetaData) {
                let obj = new MetaData();
                obj.deserialize(params.MetaData[z]);
                this.MetaData.push(obj);
            }
        }

    }
}

/**
 * Face position information on the face image and material template image for fusion
 * @class
 */
class MergeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enter the image Base64 code.
●Either the Base64 code or URL must be provided. If both are provided, URL prevails.
●Material image limitation: face size in the image greater than 34×34 pixels; image size greater than 64×64 pixels. (After encoding, the image size may increase by about 30%. It is recommended to control the image size reasonably.)
●Supported image format: JPG or PNG
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Enter the image URL.
●Either the Base64 code or URL must be provided. If both are provided, URL prevails.
●Material image limitation: face size in the image greater than 34×34 pixels; image size greater than 64×64 pixels. (After encoding, the image size may increase by about 30%. It is recommended to control the image size reasonably.)
●Supported image format: JPG or PNG
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Face position information (face box) on the uploaded image
Width and height are no less than 30.
         * @type {FaceRect || null}
         */
        this.InputImageFaceRect = null;

        /**
         * Material face ID. If this parameter is left blank, the largest face is used by default.
         * @type {string || null}
         */
        this.TemplateFaceID = null;

        /**
         * Face position information (face box) on the template. If this parameter is left blank, the largest face is used by default. This parameter applies to scenes where custom material templates are used for fusion.
Width and height are no less than 30.
         * @type {FaceRect || null}
         */
        this.TemplateFaceRect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.InputImageFaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.InputImageFaceRect)
            this.InputImageFaceRect = obj;
        }
        this.TemplateFaceID = 'TemplateFaceID' in params ? params.TemplateFaceID : null;

        if (params.TemplateFaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.TemplateFaceRect)
            this.TemplateFaceRect = obj;
        }

    }
}

/**
 * 
 * @class
 */
class FuseFaceReviewResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 
         * @type {string || null}
         */
        this.CodeDescription = null;

        /**
         * 
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 
         * @type {Array.<FuseFaceReviewDetail> || null}
         */
        this.DetailSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Category = 'Category' in params ? params.Category : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.CodeDescription = 'CodeDescription' in params ? params.CodeDescription : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new FuseFaceReviewDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }

    }
}

/**
 * FuseFace request structure.
 * @class
 */
class FuseFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Activity ID. Check the ID in the <a href="https://console.cloud.tencent.com/facefusion" target="_blank"> Face Fusion console</a>.
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Material ID. Check the ID in the <a href="https://console.cloud.tencent.com/facefusion" target="_blank"> Face Fusion console</a>.
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * Image return method (url or base64). You cannot use both methods at the same time. The URL is valid for 7 days.
         * @type {string || null}
         */
        this.RspImgType = null;

        /**
         * Face position information on the user face image and material template image. No more than 6 entries.
         * @type {Array.<MergeInfo> || null}
         */
        this.MergeInfos = null;

        /**
         * Switch indicating whether to add a synthesis logo to the fusion result image. Default value: 1.
1: add logo
0: do not add logo
Other values: add logo
It is recommended to use an obvious logo to indicate that the result image uses face fusion technology and is synthesized by AI.
         * @type {number || null}
         */
        this.LogoAdd = null;

        /**
         * Logo content settings
By default, the text "Synthesized by AI" is added to the bottom right corner of the fusion result image. You can also use other texts.
         * @type {LogoParam || null}
         */
        this.LogoParam = null;

        /**
         * Fusion parameter.
         * @type {FuseParam || null}
         */
        this.FuseParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;

        if (params.MergeInfos) {
            this.MergeInfos = new Array();
            for (let z in params.MergeInfos) {
                let obj = new MergeInfo();
                obj.deserialize(params.MergeInfos[z]);
                this.MergeInfos.push(obj);
            }
        }
        this.LogoAdd = 'LogoAdd' in params ? params.LogoAdd : null;

        if (params.LogoParam) {
            let obj = new LogoParam();
            obj.deserialize(params.LogoParam)
            this.LogoParam = obj;
        }

        if (params.FuseParam) {
            let obj = new FuseParam();
            obj.deserialize(params.FuseParam)
            this.FuseParam = obj;
        }

    }
}

/**
 * Face box information
 * @class
 */
class FaceRect extends  AbstractModel {
    constructor(){
        super();

        /**
         * Top-left X-axis coordinate of the face box
         * @type {number || null}
         */
        this.X = null;

        /**
         * Top-left Y-axis coordinate of the face box
         * @type {number || null}
         */
        this.Y = null;

        /**
         * Face box width
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Face box height
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
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * Fusion parameter
 * @class
 */
class FuseParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image encoding parameter
         * @type {ImageCodecParam || null}
         */
        this.ImageCodecParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageCodecParam) {
            let obj = new ImageCodecParam();
            obj.deserialize(params.ImageCodecParam)
            this.ImageCodecParam = obj;
        }

    }
}

/**
 * SubmitVideoFaceFusionJob request structure.
 * @class
 */
class SubmitVideoFaceFusionJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Activity ID. Check it in the video face fusion console.
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Material ID. Check it in the video face fusion console.
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * Face position information on the user face image and material template image. Only one entry is allowed.
         * @type {Array.<MergeInfo> || null}
         */
        this.MergeInfos = null;

        /**
         * 0: inappropriate content recognition not required; 1: inappropriate content recognition required. Default value: 0.
Note: Once the inappropriate content recognition service is enabled, you need to decide whether to adjust your business logic based on the returned results. For example, you need to replace the image if the system informs you that the image does not meet the requirements.
**<font color=#1E90FF>Note: This field will be deprecated later due to business adjustments. It is not recommended for use.</font>**
         * @type {number || null}
         */
        this.CelebrityIdentify = null;

        /**
         * Video watermark logo parameter
         * @type {LogoParam || null}
         */
        this.LogoParam = null;

        /**
         * COS pre-signed URL (PUT method). If this parameter is specified, the video after fusion will be uploaded to this URL.
**<font color=#1E90FF>Note: If upload to this URL fails, the video will be uploaded to the default address of Tencent Cloud.</font>**
         * @type {string || null}
         */
        this.UserDesignatedUrl = null;

        /**
         * User IP address
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * Video metadata field
         * @type {Array.<MetaData> || null}
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;

        if (params.MergeInfos) {
            this.MergeInfos = new Array();
            for (let z in params.MergeInfos) {
                let obj = new MergeInfo();
                obj.deserialize(params.MergeInfos[z]);
                this.MergeInfos.push(obj);
            }
        }
        this.CelebrityIdentify = 'CelebrityIdentify' in params ? params.CelebrityIdentify : null;

        if (params.LogoParam) {
            let obj = new LogoParam();
            obj.deserialize(params.LogoParam)
            this.LogoParam = obj;
        }
        this.UserDesignatedUrl = 'UserDesignatedUrl' in params ? params.UserDesignatedUrl : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;

        if (params.MetaData) {
            this.MetaData = new Array();
            for (let z in params.MetaData) {
                let obj = new MetaData();
                obj.deserialize(params.MetaData[z]);
                this.MetaData.push(obj);
            }
        }

    }
}

/**
 * FuseFace response structure.
 * @class
 */
class FuseFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * When RspImgType is set to url, return the URL (valid for 7 days). When RspImgType is set to base64, return the Base64 code.
         * @type {string || null}
         */
        this.FusedImage = null;

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
        this.FusedImage = 'FusedImage' in params ? params.FusedImage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    MetaData: MetaData,
    LogoParam: LogoParam,
    QueryVideoFaceFusionJobResponse: QueryVideoFaceFusionJobResponse,
    QueryVideoFaceFusionJobRequest: QueryVideoFaceFusionJobRequest,
    SubmitVideoFaceFusionJobResponse: SubmitVideoFaceFusionJobResponse,
    FuseFaceReviewDetail: FuseFaceReviewDetail,
    VideoFaceFusionOutput: VideoFaceFusionOutput,
    ImageCodecParam: ImageCodecParam,
    MergeInfo: MergeInfo,
    FuseFaceReviewResult: FuseFaceReviewResult,
    FuseFaceRequest: FuseFaceRequest,
    FaceRect: FaceRect,
    FuseParam: FuseParam,
    SubmitVideoFaceFusionJobRequest: SubmitVideoFaceFusionJobRequest,
    FuseFaceResponse: FuseFaceResponse,

}
