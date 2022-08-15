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
 * GenerateReflectSequence response structure.
 * @class
 */
class GenerateReflectSequenceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The resource URL of the light sequence, which needs to be downloaded and passed through to the SDK to start the identity verification process.
         * @type {string || null}
         */
        this.ReflectSequenceUrl = null;

        /**
         * The MD5 hash value of the light sequence, which is used to check whether the light sequence is altered.
         * @type {string || null}
         */
        this.ReflectSequenceMd5 = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReflectSequenceUrl = 'ReflectSequenceUrl' in params ? params.ReflectSequenceUrl : null;
        this.ReflectSequenceMd5 = 'ReflectSequenceMd5' in params ? params.ReflectSequenceMd5 : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUploadUrl response structure.
 * @class
 */
class CreateUploadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL for uploading contents with the `HTTP PUT` method.
         * @type {string || null}
         */
        this.UploadUrl = null;

        /**
         * The resource URL obtained after this upload is completed and to be passed in where it is required later.
         * @type {string || null}
         */
        this.ResourceUrl = null;

        /**
         * The point in time when the upload/download link expires, which is a 10-bit Unix timestamp.
         * @type {number || null}
         */
        this.ExpiredTimestamp = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UploadUrl = 'UploadUrl' in params ? params.UploadUrl : null;
        this.ResourceUrl = 'ResourceUrl' in params ? params.ResourceUrl : null;
        this.ExpiredTimestamp = 'ExpiredTimestamp' in params ? params.ExpiredTimestamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LivenessCompare response structure.
 * @class
 */
class LivenessCompareResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The best screenshot of the video after successful verification. The photo is Base64-encoded and in JPG format.
         * @type {string || null}
         */
        this.BestFrameBase64 = null;

        /**
         * Similarity. Value range: [0.00, 100.00]. As a recommendation, when the similarity is greater than or equal to 70, it can be determined that the two faces are of the same person. You can adjust the threshold according to your specific scenario (the FAR at the threshold of 70 is 0.1%, and FAR at the threshold of 80 is 0.01%).
         * @type {number || null}
         */
        this.Sim = null;

        /**
         * Service error code. `Success` will be returned for success. For error information, please see the `FailedOperation` section in the error code list below.
         * @type {string || null}
         */
        this.Result = null;

        /**
         * Service result description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 
         * @type {Array.<string> || null}
         */
        this.BestFrameList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.BestFrameList = 'BestFrameList' in params ? params.BestFrameList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GenerateReflectSequence request structure.
 * @class
 */
class GenerateReflectSequenceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The resource URL of the data package generated by the SDK.
         * @type {string || null}
         */
        this.DeviceDataUrl = null;

        /**
         * The MD5 hash value of the data package generated by the SDK.
         * @type {string || null}
         */
        this.DeviceDataMd5 = null;

        /**
         * 1 - silent
2 - blinking
3 - light
4 - blinking + light (default)
         * @type {string || null}
         */
        this.SecurityLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceDataUrl = 'DeviceDataUrl' in params ? params.DeviceDataUrl : null;
        this.DeviceDataMd5 = 'DeviceDataMd5' in params ? params.DeviceDataMd5 : null;
        this.SecurityLevel = 'SecurityLevel' in params ? params.SecurityLevel : null;

    }
}

/**
 * DetectReflectLivenessAndCompare response structure.
 * @class
 */
class DetectReflectLivenessAndCompareResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Temporary URL of the best screenshot (.jpg) of the video after successful verification. Both the screenshot and the URL are valid for two hours only, so you need to download the screenshot within this period.
         * @type {string || null}
         */
        this.BestFrameUrl = null;

        /**
         * MD5 hash value (32-bit) of the best screenshot of the video after successful verification, which is used to verify the `BestFrame` consistency.
         * @type {string || null}
         */
        this.BestFrameMd5 = null;

        /**
         * Service error code. `Success` will be returned for success. For error information, see the `FailedOperation` section in the error code list below.
         * @type {string || null}
         */
        this.Result = null;

        /**
         * Service result description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Similarity. Value range: [0.00, 100.00]. As a recommendation, when the similarity is greater than or equal to 70, it can be determined that the two faces are of the same person. You can adjust the threshold according to your specific scenario (the FAR at the threshold of 70 is 0.1%, and FAR at the threshold of 80 is 0.01%).
         * @type {number || null}
         */
        this.Sim = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BestFrameUrl = 'BestFrameUrl' in params ? params.BestFrameUrl : null;
        this.BestFrameMd5 = 'BestFrameMd5' in params ? params.BestFrameMd5 : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VideoLivenessCompare response structure.
 * @class
 */
class VideoLivenessCompareResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The similarity. Value range: [0.00, 100.00]. As a recommendation, when the similarity is greater than or equal to 70, it can be determined that the two persons are of the same person. You can adjust the threshold according to your specific scenario (the FARs at the thresholds of 70 and 80 are 0.1% and 0.01%, respectively).
         * @type {number || null}
         */
        this.Sim = null;

        /**
         * The service error code. `Success` will be returned for success. For error information, see the `FailedOperation` section in the error code list below.
         * @type {string || null}
         */
        this.Result = null;

        /**
         * The service result description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The best video screenshot after successful verification
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {FileInfo || null}
         */
        this.BestFrame = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.BestFrame) {
            let obj = new FileInfo();
            obj.deserialize(params.BestFrame)
            this.BestFrame = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetectReflectLivenessAndCompare request structure.
 * @class
 */
class DetectReflectLivenessAndCompareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL of the liveness detection data package generated by the SDK
         * @type {string || null}
         */
        this.LiveDataUrl = null;

        /**
         * MD5 hash value (32-bit) of the liveness detection data package generated by the SDK, which is used to verify the LiveData consistency.
         * @type {string || null}
         */
        this.LiveDataMd5 = null;

        /**
         * URL of the target image for comparison
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * MD5 hash value (32-bit) of the target image for comparison, which is used to verify the `Image` consistency.
         * @type {string || null}
         */
        this.ImageMd5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LiveDataUrl = 'LiveDataUrl' in params ? params.LiveDataUrl : null;
        this.LiveDataMd5 = 'LiveDataMd5' in params ? params.LiveDataMd5 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageMd5 = 'ImageMd5' in params ? params.ImageMd5 : null;

    }
}

/**
 * LivenessCompare request structure.
 * @class
 */
class LivenessCompareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Liveness detection type. Valid values: LIP/ACTION/SILENT.
LIP: numeric mode; ACTION: motion mode; SILENT: silent mode. You need to select a mode to input.
         * @type {string || null}
         */
        this.LivenessType = null;

        /**
         * Base64 string of the image for face comparison.
The size of the Base64-encoded image data can be up to 3 MB. JPG and PNG formats are supported.
Please use the standard Base64 encoding scheme (with the "=" padding). For the encoding conventions, please see RFC 4648.

Either the `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, only `ImageBase64` will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * URL of the image for face comparison. The size of the downloaded image after Base64 encoding can be up to 3 MB. JPG and PNG formats are supported.

Either the `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, only `ImageBase64` will be used.

We recommend you store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. The download speed and stability of non-Tencent Cloud URLs may be low.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Lip mode: set this parameter to a custom 4-digit verification code.
Action mode: set this parameter to a custom action sequence (e.g., `2,1` or `1,2`).
Silent mode: do not pass in this parameter.
         * @type {string || null}
         */
        this.ValidateData = null;

        /**
         * Optional configuration (a JSON string)
{
"BestFrameNum": 2  // Return multiple best screenshots. Value range: 2−10
}
         * @type {string || null}
         */
        this.Optional = null;

        /**
         * Base64 string of the video for liveness detection.
The size of the Base64-encoded video data can be up to 8 MB. MP4, AVI, and FLV formats are supported.
Please use the standard Base64 encoding scheme (with the "=" padding). For the encoding conventions, please see RFC 4648.

Either the `VideoUrl` or `VideoBase64` of the video must be provided. If both are provided, only `VideoBase64` will be used.
         * @type {string || null}
         */
        this.VideoBase64 = null;

        /**
         * URL of the video for liveness detection. The size of the downloaded video after Base64 encoding can be up to 8 MB. It takes no more than 4 seconds to download. MP4, AVI, and FLV formats are supported.

Either the `VideoUrl` or `VideoBase64` of the video must be provided. If both are provided, only `VideoBase64` will be used.

We recommend you store the video in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. The download speed and stability of non-Tencent Cloud URLs may be low.
         * @type {string || null}
         */
        this.VideoUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LivenessType = 'LivenessType' in params ? params.LivenessType : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ValidateData = 'ValidateData' in params ? params.ValidateData : null;
        this.Optional = 'Optional' in params ? params.Optional : null;
        this.VideoBase64 = 'VideoBase64' in params ? params.VideoBase64 : null;
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;

    }
}

/**
 * CreateUploadUrl request structure.
 * @class
 */
class CreateUploadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target API
         * @type {string || null}
         */
        this.TargetAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetAction = 'TargetAction' in params ? params.TargetAction : null;

    }
}

/**
 * The description of a file, including a download URL and the MD5 checksum and size of the file.
 * @class
 */
class FileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL for downloading the file
         * @type {string || null}
         */
        this.Url = null;

        /**
         * The 32-bit MD5 checksum of the file
         * @type {string || null}
         */
        this.MD5 = null;

        /**
         * The file size
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.MD5 = 'MD5' in params ? params.MD5 : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * VideoLivenessCompare request structure.
 * @class
 */
class VideoLivenessCompareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL of the photo for face comparison. The downloaded image after Base64 encoding can be up to 3 MB and must be in JPG or PNG.

The image must be stored in a COS bucket in the region where the FaceID service resides to ensure a higher download speed and better stability. You can generate an image URL by using `CreateUploadUrl` or purchase the COS service.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * The 32-bit MD5 checksum of the image for comparison
         * @type {string || null}
         */
        this.ImageMd5 = null;

        /**
         * The URL of the video for liveness detection. The downloaded video after Base64 encoding can be up to 8 MB and must be in MP4, AVI, or FLV. It takes no more than 4s to download the video.

The video must be stored in a COS bucket in the region where the FaceID service resides to ensure a higher download speed and better stability. You can generate a video URL by using `CreateUploadUrl` or purchase the COS service.
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * The 32-bit MD5 checksum of the video
         * @type {string || null}
         */
        this.VideoMd5 = null;

        /**
         * The liveness detection type. Valid values: `LIP`, `ACTION`, and `SILENT`.
`LIP`: Numeric mode; `ACTION`: Motion mode; `SILENT`: silent mode. Select one of them.
         * @type {string || null}
         */
        this.LivenessType = null;

        /**
         * LIP parameter: Pass in a custom 4-digit verification code.
ACTION parameter: Pass in a custom action sequence (`2,1` or `1,2`).
SILENT parameter: Null.
         * @type {string || null}
         */
        this.ValidateData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageMd5 = 'ImageMd5' in params ? params.ImageMd5 : null;
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.VideoMd5 = 'VideoMd5' in params ? params.VideoMd5 : null;
        this.LivenessType = 'LivenessType' in params ? params.LivenessType : null;
        this.ValidateData = 'ValidateData' in params ? params.ValidateData : null;

    }
}

module.exports = {
    GenerateReflectSequenceResponse: GenerateReflectSequenceResponse,
    CreateUploadUrlResponse: CreateUploadUrlResponse,
    LivenessCompareResponse: LivenessCompareResponse,
    GenerateReflectSequenceRequest: GenerateReflectSequenceRequest,
    DetectReflectLivenessAndCompareResponse: DetectReflectLivenessAndCompareResponse,
    VideoLivenessCompareResponse: VideoLivenessCompareResponse,
    DetectReflectLivenessAndCompareRequest: DetectReflectLivenessAndCompareRequest,
    LivenessCompareRequest: LivenessCompareRequest,
    CreateUploadUrlRequest: CreateUploadUrlRequest,
    FileInfo: FileInfo,
    VideoLivenessCompareRequest: VideoLivenessCompareRequest,

}
