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
 * GetLivenessResult response structure.
 * @class
 */
class GetLivenessResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The final verification result.
         * @type {string || null}
         */
        this.Result = null;

        /**
         * The description of the final verification result.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The face screenshot.
         * @type {FileInfo || null}
         */
        this.BestFrame = null;

        /**
         * The video for the detection.
         * @type {FileInfo || null}
         */
        this.Video = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Description = 'Description' in params ? params.Description : null;

        if (params.BestFrame) {
            let obj = new FileInfo();
            obj.deserialize(params.BestFrame)
            this.BestFrame = obj;
        }

        if (params.Video) {
            let obj = new FileInfo();
            obj.deserialize(params.Video)
            this.Video = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetFaceIdTokenIntl response structure.
 * @class
 */
class GetFaceIdTokenIntlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDK token, which is used throughout the verification process and to get the verification result.
         * @type {string || null}
         */
        this.SdkToken = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkToken = 'SdkToken' in params ? params.SdkToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ID cards of Hong Kong, Macao and Taiwan (China), and international passport.
 * @class
 */
class InternationalIDPassport extends  AbstractModel {
    constructor(){
        super();

        /**
         * Passport ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Full name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FullName = null;

        /**
         * Last name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Surname = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GivenName = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Gender (F-Female, M-Male)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Expiration date
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DateOfExpiration = null;

        /**
         * Issuing country
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuingCountry = null;

        /**
         * Nationality code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NationalityCode = null;

        /**
         * The first line at the bottom, the MRZ Code sequence
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PassportCodeFirst = null;

        /**
         * The second line at the bottom, the MRZ Code sequence
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PassportCodeSecond = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.FullName = 'FullName' in params ? params.FullName : null;
        this.Surname = 'Surname' in params ? params.Surname : null;
        this.GivenName = 'GivenName' in params ? params.GivenName : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.DateOfExpiration = 'DateOfExpiration' in params ? params.DateOfExpiration : null;
        this.IssuingCountry = 'IssuingCountry' in params ? params.IssuingCountry : null;
        this.NationalityCode = 'NationalityCode' in params ? params.NationalityCode : null;
        this.PassportCodeFirst = 'PassportCodeFirst' in params ? params.PassportCodeFirst : null;
        this.PassportCodeSecond = 'PassportCodeSecond' in params ? params.PassportCodeSecond : null;

    }
}

/**
 * GetSdkVerificationResult response structure.
 * @class
 */
class GetSdkVerificationResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The result code of the verification result.
         * @type {string || null}
         */
        this.Result = null;

        /**
         * The verification result description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The charge count.
         * @type {number || null}
         */
        this.ChargeCount = null;

        /**
         * The results of multiple OCR processes (in order). The result of the final process is used as the valid result.
         * @type {Array.<CardVerifyResult> || null}
         */
        this.CardVerifyResults = null;

        /**
         * The results of multiple liveness detection processes (in order). The result of the final process is used as the valid result.
         * @type {Array.<CompareResult> || null}
         */
        this.CompareResults = null;

        /**
         * Data passed through in the process of getting the token.
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Description = 'Description' in params ? params.Description : null;
        this.ChargeCount = 'ChargeCount' in params ? params.ChargeCount : null;

        if (params.CardVerifyResults) {
            this.CardVerifyResults = new Array();
            for (let z in params.CardVerifyResults) {
                let obj = new CardVerifyResult();
                obj.deserialize(params.CardVerifyResults[z]);
                this.CardVerifyResults.push(obj);
            }
        }

        if (params.CompareResults) {
            this.CompareResults = new Array();
            for (let z in params.CompareResults) {
                let obj = new CompareResult();
                obj.deserialize(params.CompareResults[z]);
                this.CompareResults.push(obj);
            }
        }
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSdkVerificationResult request structure.
 * @class
 */
class GetSdkVerificationResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The token used to identify an SDK-based verification process.
         * @type {string || null}
         */
        this.SdkToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkToken = 'SdkToken' in params ? params.SdkToken : null;

    }
}

/**
 * ApplyWebVerificationBizTokenIntl response structure.
 * @class
 */
class ApplyWebVerificationBizTokenIntlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The token identifying this web-based verification process, valid for 7,200s after issuance. It is required for getting the result after the verification process is completed.
         * @type {string || null}
         */
        this.VerificationUrl = null;

        /**
         * The token for the web-based verification, which is generated using the ApplyWebVerificationBizTokenIntl API.
         * @type {string || null}
         */
        this.BizToken = null;

        /**
         * The verification URL to be opened with a browser to start the verification process.
         * @type {string || null}
         */
        this.VerificationURL = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VerificationUrl = 'VerificationUrl' in params ? params.VerificationUrl : null;
        this.BizToken = 'BizToken' in params ? params.BizToken : null;
        this.VerificationURL = 'VerificationURL' in params ? params.VerificationURL : null;
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
 * GetFaceIdTokenIntl request structure.
 * @class
 */
class GetFaceIdTokenIntlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The detection mode. Valid values:
`liveness`: Liveness detection only.
`compare`: Liveness detection and face comparison.
Default value: `liveness`.
         * @type {string || null}
         */
        this.CheckMode = null;

        /**
         * The verification security level. Valid values:
`1`: Video-based liveness detection.
`2`: Motion-based liveness detection.
`3`: Reflection-based liveness detection.
`4`: Motion- and reflection-based liveness detection.
Default value: `4`.
         * @type {string || null}
         */
        this.SecureLevel = null;

        /**
         * The photo (in Base64) to compare. This parameter is required when the value of `CheckMode` is `compare`.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * The pass-through parameter, which can be omitted if there are no special requirements.
         * @type {string || null}
         */
        this.Extra = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckMode = 'CheckMode' in params ? params.CheckMode : null;
        this.SecureLevel = 'SecureLevel' in params ? params.SecureLevel : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

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

/**
 * ApplyWebVerificationToken response structure.
 * @class
 */
class ApplyWebVerificationTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The verification URL to be opened with a browser to start the verification process.
         * @type {string || null}
         */
        this.VerificationUrl = null;

        /**
         * The token used to identify a web-based verification process. It is valid for 7,200s and can be used to get the verification result after the process is completed.
         * @type {string || null}
         */
        this.BizToken = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VerificationUrl = 'VerificationUrl' in params ? params.VerificationUrl : null;
        this.BizToken = 'BizToken' in params ? params.BizToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetWebVerificationResult request structure.
 * @class
 */
class GetWebVerificationResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The token for the web-based verification, which is generated with the `ApplyWebVerificationToken` API.
         * @type {string || null}
         */
        this.BizToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizToken = 'BizToken' in params ? params.BizToken : null;

    }
}

/**
 * Thailand ID Card
 * @class
 */
class ThailandIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Last name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DateOfBirth = null;

        /**
         * Date of expiry
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DateOfExpiry = null;

        /**
         * Date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DateOfIssue = null;

        /**
         * Issuing country
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedCountry = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.DateOfBirth = 'DateOfBirth' in params ? params.DateOfBirth : null;
        this.DateOfExpiry = 'DateOfExpiry' in params ? params.DateOfExpiry : null;
        this.DateOfIssue = 'DateOfIssue' in params ? params.DateOfIssue : null;
        this.IssuedCountry = 'IssuedCountry' in params ? params.IssuedCountry : null;

    }
}

/**
 * The details of the verification process.
 * @class
 */
class VerificationDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The final result of this verification. `0` indicates that the person is the same as that in the photo.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * The description of the final verification result.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * The result of this liveness detection process. `0` indicates success.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LivenessErrorCode = null;

        /**
         * The result description of this liveness detection process.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LivenessErrorMsg = null;

        /**
         * The result of this comparison process. `0` indicates that the person in the best face screenshot collected from the video stream is the same as that in the uploaded image for comparison.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CompareErrorCode = null;

        /**
         * The result description of this comparison process.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CompareErrorMsg = null;

        /**
         * The timestamp (ms) of this verification process.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReqTimestamp = null;

        /**
         * The similarity of the best face screenshot collected from the video stream and the uploaded image for comparison in this verification process. Value range: [0.00, 100.00]. By default, the person in the screenshot is determined to be the same person in the image if the similarity is greater than or equal to 70.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Similarity = null;

        /**
         * Unique ID of this verification process.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Seq = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.LivenessErrorCode = 'LivenessErrorCode' in params ? params.LivenessErrorCode : null;
        this.LivenessErrorMsg = 'LivenessErrorMsg' in params ? params.LivenessErrorMsg : null;
        this.CompareErrorCode = 'CompareErrorCode' in params ? params.CompareErrorCode : null;
        this.CompareErrorMsg = 'CompareErrorMsg' in params ? params.CompareErrorMsg : null;
        this.ReqTimestamp = 'ReqTimestamp' in params ? params.ReqTimestamp : null;
        this.Similarity = 'Similarity' in params ? params.Similarity : null;
        this.Seq = 'Seq' in params ? params.Seq : null;

    }
}

/**
 * GetWebVerificationResultIntl response structure.
 * @class
 */
class GetWebVerificationResultIntlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The final result of this verification. `0` indicates that the person is the same as that in the photo.
For other error codes, see <a href="https://www.tencentcloud.com/document/product/1061/55390?lang=en&pg=#8a960e1e-39c0-42cb-b181-b3164d77f81e">Liveness Detection and Face Comparison (Mobile HTML5) Error Codes</a>
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * The description of the final verification result.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * The detailed verification result list of this process. Retries are allowed, so a verification process may have several entries of results.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {Array.<VerificationDetail> || null}
         */
        this.VerificationDetailList = null;

        /**
         * The Base64-encoded string of the video collected from the video stream. Retries are allowed, and this field returns only the data collected in the last verification. If no video is collected, null is returned.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VideoBase64 = null;

        /**
         * The Base64-encoded string of the best face screenshot u200dcollected from the video stream. Retries are allowed, and this field returns only the data collected in the last verification. If no best face screenshot is collected, null is returned.
Note: u200dThis field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BestFrameBase64 = null;

        /**
         * Card recognize result.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OCRResult> || null}
         */
        this.OCRResult = null;

        /**
         * The passthrough parameter of the business, max 1,000 characters, which will be returned in GetWebVerificationResultIntl.
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;

        if (params.VerificationDetailList) {
            this.VerificationDetailList = new Array();
            for (let z in params.VerificationDetailList) {
                let obj = new VerificationDetail();
                obj.deserialize(params.VerificationDetailList[z]);
                this.VerificationDetailList.push(obj);
            }
        }
        this.VideoBase64 = 'VideoBase64' in params ? params.VideoBase64 : null;
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;

        if (params.OCRResult) {
            this.OCRResult = new Array();
            for (let z in params.OCRResult) {
                let obj = new OCRResult();
                obj.deserialize(params.OCRResult[z]);
                this.OCRResult.push(obj);
            }
        }
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CompareFaceLiveness request structure.
 * @class
 */
class CompareFaceLivenessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64 value of photos used for face comparison. 
The size of image data encoded by Base64 shall not exceed 3M, only jpg and png are supported. 
Please use standard Base64 encoding (use = for padding). Refer to RFC4648 for encoding specifications. 
Example values: "/9j/4AAQSk... (total length:61944)KiiK//2Q=="
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * Base64 value of photos used for face comparison. 
The size of image data encoded by Base64 shall not exceed 3M, only jpg and png are supported. 
Please use standard Base64 encoding (use = for padding). Refer to RFC4648 for encoding specifications. 
Example values: "/9j/4AAQSk... (total length:61944)KiiK//2Q=="
         * @type {string || null}
         */
        this.VideoBase64 = null;

        /**
         * The liveness detection type. Valid values: `LIP`, `ACTION`, and `SILENT`.
`LIP`: Numeric mode; `ACTION`: Motion mode; `SILENT`: silent mode. Select one of them.
Example value: "SILENT"
         * @type {string || null}
         */
        this.LivenessType = null;

        /**
         * When the “LivenessType” parameter is “ACTION”, it must be specified.
It is used to control the action sequence. Action types: 
1 (open mouth)
2 (blink)
3 (nod)
4 (shake head). 
Select one or two from the four actions.
Example of passing single action parameter: "1".
Example of passing multiple action parameters: "4,2".
When the “LivenessType” parameter value is “SILENT”, it shall be unspecified.
Example value: ""
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.VideoBase64 = 'VideoBase64' in params ? params.VideoBase64 : null;
        this.LivenessType = 'LivenessType' in params ? params.LivenessType : null;
        this.ValidateData = 'ValidateData' in params ? params.ValidateData : null;

    }
}

/**
 * Hong Kong ID card.
 * @class
 */
class HKIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.CnName = null;

        /**
         * English name
Note: This field may return null, indicating that no valid values can be obtained.
Example: SAN, Nan
         * @type {string || null}
         */
        this.EnName = null;

        /**
         * Telex code correspondint to the Chinese name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TelexCode = null;

        /**
         * Gender: "Male-M" or "Female-F"
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
Example: 01-01-2001
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Permanent resident ID card: 0-non-permanent; 1-permanent; -1-unknown
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Permanent = null;

        /**
         * ID card number
Note: This field may return null, indicating that no valid values can be obtained.
Example: C000000(E)
         * @type {string || null}
         */
        this.IdNum = null;

        /**
         * Lisence symbol, which is the symbol below Birthday. Example: "***AZ"
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Symbol = null;

        /**
         * The first date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FirstIssueDate = null;

        /**
         * The current date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CurrentIssueDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CnName = 'CnName' in params ? params.CnName : null;
        this.EnName = 'EnName' in params ? params.EnName : null;
        this.TelexCode = 'TelexCode' in params ? params.TelexCode : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Permanent = 'Permanent' in params ? params.Permanent : null;
        this.IdNum = 'IdNum' in params ? params.IdNum : null;
        this.Symbol = 'Symbol' in params ? params.Symbol : null;
        this.FirstIssueDate = 'FirstIssueDate' in params ? params.FirstIssueDate : null;
        this.CurrentIssueDate = 'CurrentIssueDate' in params ? params.CurrentIssueDate : null;

    }
}

/**
 * Singapore ID Card
 * @class
 */
class SingaporeIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Chinese name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChName = null;

        /**
         * English name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnName = null;

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Gender
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Country of birth
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CountryOfBirth = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Address (on the back)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Nationality (on the back)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Race = null;

        /**
         *  NRIC number (on the back)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NRICCode = null;

        /**
         * Post number (on the front)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PostCode = null;

        /**
         * Date of expiry (on the back)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DateOfExpiration = null;

        /**
         * Date of issue (on the back)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DateOfIssue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChName = 'ChName' in params ? params.ChName : null;
        this.EnName = 'EnName' in params ? params.EnName : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.CountryOfBirth = 'CountryOfBirth' in params ? params.CountryOfBirth : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Race = 'Race' in params ? params.Race : null;
        this.NRICCode = 'NRICCode' in params ? params.NRICCode : null;
        this.PostCode = 'PostCode' in params ? params.PostCode : null;
        this.DateOfExpiration = 'DateOfExpiration' in params ? params.DateOfExpiration : null;
        this.DateOfIssue = 'DateOfIssue' in params ? params.DateOfIssue : null;

    }
}

/**
 * Indonesia driving license.
 * @class
 */
class IndonesiaDrivingLicense extends  AbstractModel {
    constructor(){
        super();

        /**
         * Last name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Expiration date
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * Date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedDate = null;

        /**
         * Issuing country
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedCountry = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.IssuedDate = 'IssuedDate' in params ? params.IssuedDate : null;
        this.IssuedCountry = 'IssuedCountry' in params ? params.IssuedCountry : null;

    }
}

/**
 * GetFaceIdResultIntl request structure.
 * @class
 */
class GetFaceIdResultIntlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the SDK-based liveness detection and face comparison process, which is generated when the `GetFaceIdTokenIntl` API is called.	
         * @type {string || null}
         */
        this.SdkToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkToken = 'SdkToken' in params ? params.SdkToken : null;

    }
}

/**
 * ApplySdkVerificationToken request structure.
 * @class
 */
class ApplySdkVerificationTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether ID card authentication is required. If not, only document OCR will be performed. Currently, authentication is available only when the value of `IdCardType` is `HK`.
         * @type {boolean || null}
         */
        this.NeedVerifyIdCard = null;

        /**
         * The verification mode. Valid values:
1: OCR + liveness detection + face comparison
2: Liveness detection + face comparison
3: Liveness detection
Default value: 1
         * @type {number || null}
         */
        this.CheckMode = null;

        /**
         * The security level of the verification. Valid values:
1: Video-based liveness detection
2: Motion-based liveness detection
3: Reflection-based liveness detection
4: Motion- and reflection-based liveness detection
Default value: 4
         * @type {number || null}
         */
        this.SecurityLevel = null;

        /**
         * The identity document type. Valid values: 
1. `HK` (default): Identity card of Hong Kong (China)
2. `ML`: Malaysian identity card
3. `IndonesiaIDCard`: Indonesian identity card
4. `PhilippinesVoteID`: Philippine voters ID card
5. `PhilippinesDrivingLicense`: Philippine driver's license
6. `PhilippinesTinID`: Philippine TIN ID card
7. `PhilippinesSSSID`: Philippine SSS ID card
8. `PhilippinesUMID`: Philippine UMID card
9. `MLIDPassport`: Passport issued in Hong Kong/Macao/Taiwan (China) or other countries/regions
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * The Base64-encoded value of the photo to compare, which is required only when `CheckMode` is set to `2`.
         * @type {string || null}
         */
        this.CompareImage = null;

        /**
         * Whether to forbid the modification of the OCR result by users. Default value: `false` (modification allowed). (Currently, this parameter is not applied.)
         * @type {boolean || null}
         */
        this.DisableChangeOcrResult = null;

        /**
         * Whether to disable the OCR warnings. Default value: `false` (not disable), where OCR warnings are enabled and the OCR result will not be returned if there is a warning.
This feature applies only to Hong Kong (China) identity cards, Malaysian identity cards, and passports.
         * @type {boolean || null}
         */
        this.DisableCheckOcrWarnings = null;

        /**
         * A passthrough field, which is returned together with the verification result and can contain up to 1,024 bits.
         * @type {string || null}
         */
        this.Extra = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NeedVerifyIdCard = 'NeedVerifyIdCard' in params ? params.NeedVerifyIdCard : null;
        this.CheckMode = 'CheckMode' in params ? params.CheckMode : null;
        this.SecurityLevel = 'SecurityLevel' in params ? params.SecurityLevel : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.CompareImage = 'CompareImage' in params ? params.CompareImage : null;
        this.DisableChangeOcrResult = 'DisableChangeOcrResult' in params ? params.DisableChangeOcrResult : null;
        this.DisableCheckOcrWarnings = 'DisableCheckOcrWarnings' in params ? params.DisableCheckOcrWarnings : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

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
 * The OCR result of a user's identity document during the eKYC verification process.
 * @class
 */
class CardVerifyResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the authentication or OCR process is successful.
         * @type {boolean || null}
         */
        this.IsPass = null;

        /**
         * The download URL of the video used for identity document verification, which is valid for 10 minutes. This parameter is returned only if video-based identity document verification is enabled.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {FileInfo || null}
         */
        this.CardVideo = null;

        /**
         * The download URL of the identity document image, which is valid for 10 minutes.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {FileInfo || null}
         */
        this.CardImage = null;

        /**
         * The OCR result (in JSON) of the identity document image. If verification or OCR fails, this parameter is left empty. The URL is valid for 10 minutes.
(1) Hong Kong (China) identity card
When the value of `IdCardType` is `HK`:
- CnName (string): Name in Chinese.
- EnName (string): Name in English.
- TelexCode (string): The code corresponding to the name in Chinese.
- Sex (string): Gender. Valid values: `M` (male) and `F` (female).
- Birthday (string): Date of birth.
- Permanent (int): Whether it is a permanent residence identity card. Valid values: `0` (non-permanent), `1` (permanent), and `-1` (unknown).
- IdNum (string): Identity card number.
- Symbol (string): The ID symbol below the date of birth, such as "***AZ".
- FirstIssueDate (string): Month and year of first registration.
- CurrentIssueDate (string): The date of latest issuance.

(2) Malaysian identity card
When the value of `IdCardType` is `ML`:
- Sex (string): Gender. Valid values: `LELAKI` (male) and `PEREMPUAN` (female).
- Birthday (string): Date of birth.
- ID (string): Identity card number.
- Name (string): Name.
- Address (string): Address.
- Type (string): Identity document type.

(3) Philippine identity document
When the value of `IdCardType` is `PhilippinesVoteID`:
- Birthday (string): Date of birth.
- Address (string): Address.
- LastName (string): Last name.
- FirstName (string): First name.
- VIN (string): Voter's identification number (VIN).
- CivilStatus (string): Civil status.
- Citizenship (string): Citizenship.
- PrecinctNo (string): Precinct.

When the value of `IdCardType` is `PhilippinesDrivingLicense`:
- Sex (string): Gender.
- Birthday (string): Date of birth.
- Name (string): Name.
- Address (string): Address.
- LastName (string): Last name.
- FirstName (string): First name.
- MiddleName (string): Middle name.
- Nationality (string): Nationality.
- LicenseNo (string): License number.
- ExpiresDate (string): Expiration date.
- AgencyCode (string): Agency code.

When the value of `IdCardType` is `PhilippinesTinID`:
- LicenseNumber (string): Tax identification number (TIN).
- FullName (string): Full name.
- Address (string): Address.
- Birthday (string): Date of birth.
- IssueDate (string): Issue date.

When the value of `IdCardType` is `PhilippinesSSSID`:
- LicenseNumber (string): Common reference number (CRN).
- FullName (string): Full name.
- Birthday (string): Date of birth.

When the value of `IdCardType` is `PhilippinesUMID`:
- Surname (string): Surname.
- MiddleName (string):Middle name.
- GivenName (string): Given name.
- Sex (string): Gender.
- Birthday (string): Date of birth.
- Address (string): Address.
- CRN (string): Common reference number (CRN).

(4) Indonesian identity card
When the value of `IdCardType` is `IndonesiaIDCard`:
- NIK (string): Single Identity Number.
- Nama (string): Full name.
- TempatTglLahir (string): Place and date of birth.
- JenisKelamin (string): Gender.
- GolDarah (string): Blood type.
- Alamat (string): Address.
- RTRW (string): Street.
- KelDesa (string): Village.
- Kecamatan (string): Region.
- Agama (string): Religion.
- StatusPerkawinan (string): Marital status.
- Perkerjaan (string): Occupation.
- KewargaNegaraan (string): Nationality.
- BerlakuHingga (string): Expiry date.
- IssuedDate (string): Issue date.

(5) A passport issued in Hong Kong/Macao/Taiwan (China) or other countries/regions
When the value of `IdCardType` is `MLIDPassport`:
- FullName (string): Full name.
- Surname (string): Surname.
- GivenName (string): Given name.
- Birthday (string): Date of birth.
- Sex (string): Gender. Valid values: `F` (female) and `M` (male).
- DateOfExpiration (string): Expiration date.
- IssuingCountry (string): Issuing country.
- NationalityCode (string): Country/region code.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {FileInfo || null}
         */
        this.CardInfoOcrJson = null;

        /**
         * The request ID of a single process.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsPass = 'IsPass' in params ? params.IsPass : null;

        if (params.CardVideo) {
            let obj = new FileInfo();
            obj.deserialize(params.CardVideo)
            this.CardVideo = obj;
        }

        if (params.CardImage) {
            let obj = new FileInfo();
            obj.deserialize(params.CardImage)
            this.CardImage = obj;
        }

        if (params.CardInfoOcrJson) {
            let obj = new FileInfo();
            obj.deserialize(params.CardInfoOcrJson)
            this.CardInfoOcrJson = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApplyWebVerificationToken request structure.
 * @class
 */
class ApplyWebVerificationTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The web redirect URL after the verification is completed.
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * The COS URL of the image for face comparison, which can be obtained with one of the following methods:
1. Call the `CreateUploadUrl` API to generate a URL and call it again after the image is successfully uploaded.
2. Use an existing COS URL. For a private bucket, grant the download permission with a pre-signed URL. The corresponding COS bucket must be in the same region as the input parameter `Region`.
         * @type {string || null}
         */
        this.CompareImageUrl = null;

        /**
         * The MD5 hash values of the image for face comparison (CompareImageUrl).
         * @type {string || null}
         */
        this.CompareImageMd5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;
        this.CompareImageUrl = 'CompareImageUrl' in params ? params.CompareImageUrl : null;
        this.CompareImageMd5 = 'CompareImageMd5' in params ? params.CompareImageMd5 : null;

    }
}

/**
 * ApplyLivenessToken response structure.
 * @class
 */
class ApplyLivenessTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The token used to identify an SDK-based verification process. It is valid for 10 minutes and can be used to get the verification result after the process is completed.
         * @type {string || null}
         */
        this.SdkToken = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkToken = 'SdkToken' in params ? params.SdkToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetLivenessResult request structure.
 * @class
 */
class GetLivenessResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The token used to identify an SDK-based verification process.
         * @type {string || null}
         */
        this.SdkToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkToken = 'SdkToken' in params ? params.SdkToken : null;

    }
}

/**
 * License OCR result
 * @class
 */
class CardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hong Kong ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {HKIDCard || null}
         */
        this.HKIDCard = null;

        /**
         * Malaysia ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MLIDCard || null}
         */
        this.MLIDCard = null;

        /**
         * Philippines VoteID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesVoteID || null}
         */
        this.PhilippinesVoteID = null;

        /**
         * Indonesia ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {IndonesiaIDCard || null}
         */
        this.IndonesiaIDCard = null;

        /**
         * Philippines Driving License
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesDrivingLicense || null}
         */
        this.PhilippinesDrivingLicense = null;

        /**
         * Philippines TinID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesTinID || null}
         */
        this.PhilippinesTinID = null;

        /**
         * Philippines SSSID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesSSSID || null}
         */
        this.PhilippinesSSSID = null;

        /**
         * Philippines UMID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesUMID || null}
         */
        this.PhilippinesUMID = null;

        /**
         * ID Cards of Hong Kong, Macao and Taiwan (China), and International Passport
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InternationalIDPassport || null}
         */
        this.InternationalIDPassport = null;

        /**
         * General license information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {GeneralCard || null}
         */
        this.GeneralCard = null;

        /**
         * Indonesia Driving License
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {IndonesiaDrivingLicense || null}
         */
        this.IndonesiaDrivingLicense = null;

        /**
         * Thailand ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ThailandIDCard || null}
         */
        this.ThailandIDCard = null;

        /**
         * Singapore ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SingaporeIDCard || null}
         */
        this.SingaporeIDCard = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HKIDCard) {
            let obj = new HKIDCard();
            obj.deserialize(params.HKIDCard)
            this.HKIDCard = obj;
        }

        if (params.MLIDCard) {
            let obj = new MLIDCard();
            obj.deserialize(params.MLIDCard)
            this.MLIDCard = obj;
        }

        if (params.PhilippinesVoteID) {
            let obj = new PhilippinesVoteID();
            obj.deserialize(params.PhilippinesVoteID)
            this.PhilippinesVoteID = obj;
        }

        if (params.IndonesiaIDCard) {
            let obj = new IndonesiaIDCard();
            obj.deserialize(params.IndonesiaIDCard)
            this.IndonesiaIDCard = obj;
        }

        if (params.PhilippinesDrivingLicense) {
            let obj = new PhilippinesDrivingLicense();
            obj.deserialize(params.PhilippinesDrivingLicense)
            this.PhilippinesDrivingLicense = obj;
        }

        if (params.PhilippinesTinID) {
            let obj = new PhilippinesTinID();
            obj.deserialize(params.PhilippinesTinID)
            this.PhilippinesTinID = obj;
        }

        if (params.PhilippinesSSSID) {
            let obj = new PhilippinesSSSID();
            obj.deserialize(params.PhilippinesSSSID)
            this.PhilippinesSSSID = obj;
        }

        if (params.PhilippinesUMID) {
            let obj = new PhilippinesUMID();
            obj.deserialize(params.PhilippinesUMID)
            this.PhilippinesUMID = obj;
        }

        if (params.InternationalIDPassport) {
            let obj = new InternationalIDPassport();
            obj.deserialize(params.InternationalIDPassport)
            this.InternationalIDPassport = obj;
        }

        if (params.GeneralCard) {
            let obj = new GeneralCard();
            obj.deserialize(params.GeneralCard)
            this.GeneralCard = obj;
        }

        if (params.IndonesiaDrivingLicense) {
            let obj = new IndonesiaDrivingLicense();
            obj.deserialize(params.IndonesiaDrivingLicense)
            this.IndonesiaDrivingLicense = obj;
        }

        if (params.ThailandIDCard) {
            let obj = new ThailandIDCard();
            obj.deserialize(params.ThailandIDCard)
            this.ThailandIDCard = obj;
        }

        if (params.SingaporeIDCard) {
            let obj = new SingaporeIDCard();
            obj.deserialize(params.SingaporeIDCard)
            this.SingaporeIDCard = obj;
        }

    }
}

/**
 * Philippines VoteID Card
 * @class
 */
class PhilippinesVoteID extends  AbstractModel {
    constructor(){
        super();

        /**
         * VIN of Philippines VoteID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VIN = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * Last name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Civil status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CivilStatus = null;

        /**
         * Nationality
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Citizenship = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrecinctNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VIN = 'VIN' in params ? params.VIN : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.CivilStatus = 'CivilStatus' in params ? params.CivilStatus : null;
        this.Citizenship = 'Citizenship' in params ? params.Citizenship : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.PrecinctNo = 'PrecinctNo' in params ? params.PrecinctNo : null;

    }
}

/**
 * eKYC Web related configuration
 * @class
 */
class WebVerificationConfigIntl extends  AbstractModel {
    constructor(){
        super();

        /**
         * When the verification passed, whether to skip the result page and automatically jump to RedirectURL. The default value is false.
Example value: false
         * @type {boolean || null}
         */
        this.AutoSkip = null;

        /**
         * Detection mode, parameter values are as follows:
1: OCR+living detection & face comparison;
2: Living detection & face comparison;
3: Living detection;
The default value is 2.
Example value: 3
         * @type {number || null}
         */
        this.CheckMode = null;

        /**
         * The type of lisence used for verification. The following types are supported.
1.HKIDCard: Hong Kong (China) ID card
2.MLIDCard: Malaysia ID card
3.IndonesiaIDCard: Indonesia ID card
4.PhilippinesVoteID: Philippines VoteID card
5.PhilippinesDrivingLicense: Philippines driving license
6.PhilippinesTinID: Philippines TinID card
7.PhilippinesSSSID: Philippines SSSID card
8.PhilippinesUMID: Philippines UMID card
9.InternationalIDPassport: ID cards of Hong Kong, Macao and Taiwan (China), and international passport.
Example: HKIDCard
         * @type {string || null}
         */
        this.IDCardType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSkip = 'AutoSkip' in params ? params.AutoSkip : null;
        this.CheckMode = 'CheckMode' in params ? params.CheckMode : null;
        this.IDCardType = 'IDCardType' in params ? params.IDCardType : null;

    }
}

/**
 * Philippines SSSID Card
 * @class
 */
class PhilippinesSSSID extends  AbstractModel {
    constructor(){
        super();

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Full name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FullName = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.FullName = 'FullName' in params ? params.FullName : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;

    }
}

/**
 * CompareFaceLiveness response structure.
 * @class
 */
class CompareFaceLivenessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service error code. When the return value is "Success", it indicates that the liveness detection and face comparison succeeded. It is determined that they are the same person. When the return value is "FailedOperation.CompareLowSimilarity", it indicates that the liveness detection succeeded, and the face comparison similarity is lower than 70 points. It is determined that they are not the same person. For other error cases, please refer to Liveness Face Comparison (Pure API) Error Code (https://www.tencentcloud.com/document/product/1061/55390). 
Example Value: "Success".
         * @type {string || null}
         */
        this.Result = null;

        /**
         * Description of business results. 
Example value: "Success"
         * @type {string || null}
         */
        this.Description = null;

        /**
         * This value is valid when the “Result” parameter is "Success" or "FailedOperation.CompareLowSimilarity." 
This value indicates the similarity of face comparison. Value range: [0.00, 100.00]. The false pass rate for threshold 70 is 1 in 1,000, and the false pass rate for threshold 80 is 1 in 1,000. 
Example value: 80.00
         * @type {number || null}
         */
        this.Sim = null;

        /**
         * The optimal screenshot of the video after verification is the value encoded by BASE64, jpg format. 
Note: This field may return “null”, indicating that no valid value can be obtained. 
Example values: "/9j/4AAQSk... (total length:142036)s97n//2Q=="
         * @type {string || null}
         */
        this.BestFrameBase64 = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Description = 'Description' in params ? params.Description : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Indonesia ID card.
 * @class
 */
class IndonesiaIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NIK = null;

        /**
         * Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nama = null;

        /**
         * Birth place/Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TempatTglLahir = null;

        /**
         * Gender
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JenisKelamin = null;

        /**
         * Blood type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GolDarah = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Alamat = null;

        /**
         * Street
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RTRW = null;

        /**
         * Village
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KelDesa = null;

        /**
         * Region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Kecamatan = null;

        /**
         * Religious beliefs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Agama = null;

        /**
         * Marital status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusPerkawinan = null;

        /**
         * Job
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Perkerjaan = null;

        /**
         * Nationality
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KewargaNegaraan = null;

        /**
         * ID card validity period
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BerlakuHingga = null;

        /**
         * Date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedDate = null;

        /**
         * Province
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Provinsi = null;

        /**
         * City
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Kota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NIK = 'NIK' in params ? params.NIK : null;
        this.Nama = 'Nama' in params ? params.Nama : null;
        this.TempatTglLahir = 'TempatTglLahir' in params ? params.TempatTglLahir : null;
        this.JenisKelamin = 'JenisKelamin' in params ? params.JenisKelamin : null;
        this.GolDarah = 'GolDarah' in params ? params.GolDarah : null;
        this.Alamat = 'Alamat' in params ? params.Alamat : null;
        this.RTRW = 'RTRW' in params ? params.RTRW : null;
        this.KelDesa = 'KelDesa' in params ? params.KelDesa : null;
        this.Kecamatan = 'Kecamatan' in params ? params.Kecamatan : null;
        this.Agama = 'Agama' in params ? params.Agama : null;
        this.StatusPerkawinan = 'StatusPerkawinan' in params ? params.StatusPerkawinan : null;
        this.Perkerjaan = 'Perkerjaan' in params ? params.Perkerjaan : null;
        this.KewargaNegaraan = 'KewargaNegaraan' in params ? params.KewargaNegaraan : null;
        this.BerlakuHingga = 'BerlakuHingga' in params ? params.BerlakuHingga : null;
        this.IssuedDate = 'IssuedDate' in params ? params.IssuedDate : null;
        this.Provinsi = 'Provinsi' in params ? params.Provinsi : null;
        this.Kota = 'Kota' in params ? params.Kota : null;

    }
}

/**
 * ApplySdkVerificationToken response structure.
 * @class
 */
class ApplySdkVerificationTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The token used to identify an SDK-based verification process. It is valid for 7,200s and can be used to get the verification result after the process is completed.
         * @type {string || null}
         */
        this.SdkToken = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkToken = 'SdkToken' in params ? params.SdkToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ApplyWebVerificationBizTokenIntl request structure.
 * @class
 */
class ApplyWebVerificationBizTokenIntlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded string (max 8 MB in size) of the photo to be compared.
         * @type {string || null}
         */
        this.CompareImageBase64 = null;

        /**
         * The web callback URL to redirect to after the verification is completed, including the protocol, hostname, and path. 
Example: https://www.tencentcloud.com/products/faceid.
After the verification process is completed, the BizToken of this process will be spliced to the callback URL in the format of https://www.tencentcloud.com/products/faceid?token={BizToken} before redirect.
         * @type {string || null}
         */
        this.RedirectURL = null;

        /**
         * The passthrough parameter of the business, max 1,000 characters, which will be returned in GetWebVerificationResultIntl.
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * The parameter control the page configuration.
         * @type {WebVerificationConfigIntl || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompareImageBase64 = 'CompareImageBase64' in params ? params.CompareImageBase64 : null;
        this.RedirectURL = 'RedirectURL' in params ? params.RedirectURL : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

        if (params.Config) {
            let obj = new WebVerificationConfigIntl();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

    }
}

/**
 * GetWebVerificationResult response structure.
 * @class
 */
class GetWebVerificationResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The final result of this verification. `0` indicates that the person is the same as that in the photo.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * The description of the final verification result.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * The temporary URL of the best face screenshot collected from the video stream. It is valid for 10 minutes. Download the image if needed.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VideoBestFrameUrl = null;

        /**
         * The MD5 hash value of the best face screenshot collected from the video stream. It can be used to check whether the image content is consistent with the file content.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VideoBestFrameMd5 = null;

        /**
         * The details list of this verification process.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<VerificationDetail> || null}
         */
        this.VerificationDetailList = null;

        /**
         * The temporary URL of the video collected from the video stream. It is valid for 10 minutes. Download the video if needed.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * The MD5 hash value of the video collected from the video stream. It can be used to check whether the video content is consistent with the file content.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VideoMd5 = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.VideoBestFrameUrl = 'VideoBestFrameUrl' in params ? params.VideoBestFrameUrl : null;
        this.VideoBestFrameMd5 = 'VideoBestFrameMd5' in params ? params.VideoBestFrameMd5 : null;

        if (params.VerificationDetailList) {
            this.VerificationDetailList = new Array();
            for (let z in params.VerificationDetailList) {
                let obj = new VerificationDetail();
                obj.deserialize(params.VerificationDetailList[z]);
                this.VerificationDetailList.push(obj);
            }
        }
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.VideoMd5 = 'VideoMd5' in params ? params.VideoMd5 : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ApplyLivenessToken request structure.
 * @class
 */
class ApplyLivenessTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enumerated value. Valid values: `1`, `2`, `3`, and `4`.
Their meanings are as follows:
1 - silent
2 - blinking
3 - light
4 - blinking + light (default)
         * @type {string || null}
         */
        this.SecureLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecureLevel = 'SecureLevel' in params ? params.SecureLevel : null;

    }
}

/**
 * Philippines driving license
 * @class
 */
class PhilippinesDrivingLicense extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Last name

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * Middle name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MiddleName = null;

        /**
         * Nationality
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * Gender
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNo = null;

        /**
         * Date of expiry
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpiresDate = null;

        /**
         * Agency code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AgencyCode = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.MiddleName = 'MiddleName' in params ? params.MiddleName : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.LicenseNo = 'LicenseNo' in params ? params.LicenseNo : null;
        this.ExpiresDate = 'ExpiresDate' in params ? params.ExpiresDate : null;
        this.AgencyCode = 'AgencyCode' in params ? params.AgencyCode : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;

    }
}

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
 * Philippines UMID Card
 * @class
 */
class PhilippinesUMID extends  AbstractModel {
    constructor(){
        super();

        /**
         * Surname
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Surname = null;

        /**
         * Middle Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MiddleName = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GivenName = null;

        /**
         * Gender
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * CRN code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CRN = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Surname = 'Surname' in params ? params.Surname : null;
        this.MiddleName = 'MiddleName' in params ? params.MiddleName : null;
        this.GivenName = 'GivenName' in params ? params.GivenName : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.CRN = 'CRN' in params ? params.CRN : null;

    }
}

/**
 * General liscense information.
 * @class
 */
class GeneralCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Personal number, which is returned when it is a passport
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PersonalNumber = null;

        /**
         * The first line of passport machine reading code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PassportCodeFirst = null;

        /**
         * The first line of passport machine reading code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PassportCodeSecond = null;

        /**
         * Date of expiry in the format of YYYY-MM-DD
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * Valid date in the format of YYYY-MM-DD
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DueDate = null;

        /**
         * Date of issue in the format of YYYY-MM-DD
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedDate = null;

        /**
         * Issuing authority
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedAuthority = null;

        /**
         * Issuing country, which is returned following the ISO 3166 country coding specification
Note: This field may return null, indicating that no valid values can be obtained.
Example: MYS
         * @type {string || null}
         */
        this.IssuedCountry = null;

        /**
         * Full Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FullName = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * Last name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * Gender on the license
- M：male
- F：female
- X：other gender
Note: This field may return null, indicating that no valid values can be obtained.
Example: M
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Age. 0 indicates that no valid information is obtained.
Example: 0
         * @type {string || null}
         */
        this.Age = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Birth place
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BirthPlace = null;

        /**
         * Nationality, which is returned following the ISO 3166 country coding specification
Note: This field may return null, indicating that no valid values can be obtained.
Example: IND
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * Registration number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegistrationNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.PersonalNumber = 'PersonalNumber' in params ? params.PersonalNumber : null;
        this.PassportCodeFirst = 'PassportCodeFirst' in params ? params.PassportCodeFirst : null;
        this.PassportCodeSecond = 'PassportCodeSecond' in params ? params.PassportCodeSecond : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.DueDate = 'DueDate' in params ? params.DueDate : null;
        this.IssuedDate = 'IssuedDate' in params ? params.IssuedDate : null;
        this.IssuedAuthority = 'IssuedAuthority' in params ? params.IssuedAuthority : null;
        this.IssuedCountry = 'IssuedCountry' in params ? params.IssuedCountry : null;
        this.FullName = 'FullName' in params ? params.FullName : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.BirthPlace = 'BirthPlace' in params ? params.BirthPlace : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.RegistrationNumber = 'RegistrationNumber' in params ? params.RegistrationNumber : null;

    }
}

/**
 * Philippines TinID Card
 * @class
 */
class PhilippinesTinID extends  AbstractModel {
    constructor(){
        super();

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Full name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FullName = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssueDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.FullName = 'FullName' in params ? params.FullName : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;

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
 * Malaysia ID card.
 * @class
 */
class MLIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Gender
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Lisence type
MyKad ID card
MyPR Permanent resident ID card
MyTentera Military ID card
MyKAS Temporary ID card
POLIS Police ID card
IKAD Labor ID card
MyKid Juvenile ID card
Example: MyKad
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Birthday (Currently, this filed only supports IKAD labor ID card and MyKad ID card)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;

    }
}

/**
 * The content of a single license in the license information.
 * @class
 */
class OCRResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Is the indentity verification or OCR process passed
         * @type {boolean || null}
         */
        this.IsPass = null;

        /**
         * The Base64 of ID card image
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CardImageBase64 = null;

        /**
         * OCR result of the ID card.
         * @type {CardInfo || null}
         */
        this.CardInfo = null;

        /**
         * The request id
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsPass = 'IsPass' in params ? params.IsPass : null;
        this.CardImageBase64 = 'CardImageBase64' in params ? params.CardImageBase64 : null;

        if (params.CardInfo) {
            let obj = new CardInfo();
            obj.deserialize(params.CardInfo)
            this.CardInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetFaceIdResultIntl response structure.
 * @class
 */
class GetFaceIdResultIntlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The return code of the verification result.
0: Succeeded.
1001: System error.
1004: Liveness detection and face comparison failed.
2004: The image passed in is too large or too small.
2012: Several faces were detected.
2013: No face was detected, or the face detected was incomplete.
2014: The image resolution is too low or the quality does not meet the requirements.
2015: Face comparison failed.
2016: The similarity did not reach the standard passing threshold.
-999: The verification process wasn't finished.
         * @type {string || null}
         */
        this.Result = null;

        /**
         * The description of the verification result.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The best frame screenshot (in Base64) obtained during the verification.
         * @type {string || null}
         */
        this.BestFrame = null;

        /**
         * The video file (Base64) for verification.
         * @type {string || null}
         */
        this.Video = null;

        /**
         * The similarity, with a value range of 0-100. A greater value indicates higher similarity. This parameter is returned only in the `compare` (liveness detection and face comparison) mode.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Similarity = null;

        /**
         * The pass-through parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Description = 'Description' in params ? params.Description : null;
        this.BestFrame = 'BestFrame' in params ? params.BestFrame : null;
        this.Video = 'Video' in params ? params.Video : null;
        this.Similarity = 'Similarity' in params ? params.Similarity : null;
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetWebVerificationResultIntl request structure.
 * @class
 */
class GetWebVerificationResultIntlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The token for the web-based verification, which is generated using the `ApplyWebVerificationBizTokenIntl` API.
         * @type {string || null}
         */
        this.BizToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizToken = 'BizToken' in params ? params.BizToken : null;

    }
}

/**
 * The description of a single comparison result.
 * @class
 */
class CompareResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The final verification result code.
0: Success.
1001: Failed to call the liveness detection engine.
1004: Face detection failed.
2004: The uploaded face image is too large or too small.
2012: The face is not fully exposed.
2013: No face is detected.
2014: The resolution of the uploaded image is too low . Please upload a new one.
2015: Face comparison failed.
2016: The similarity did not reach the passing standard.
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * The description of the final verification result.
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * The liveness algorithm package generated during this SDK-based liveness detection.
         * @type {FileInfo || null}
         */
        this.LiveData = null;

        /**
         * The download URL of the video used for verification, which is valid for 10 minutes.
         * @type {FileInfo || null}
         */
        this.LiveVideo = null;

        /**
         * The liveness detection result code.
0: Success.
1001: Failed to call the liveness detection engine.
1004: Face detection failed.
         * @type {string || null}
         */
        this.LiveErrorCode = null;

        /**
         * The description of the liveness detection result.
         * @type {string || null}
         */
        this.LiveErrorMsg = null;

        /**
         * The download URL of the face screenshot during verification, which is valid for 10 minutes.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {FileInfo || null}
         */
        this.BestFrame = null;

        /**
         * The download URL of the profile photo screenshot from the identity document, which is valid for 10 minutes.
         * @type {FileInfo || null}
         */
        this.ProfileImage = null;

        /**
         * The face comparison result code.
0: Success.
2004: The uploaded face image is too large or too small.
2012: The face is not fully exposed.
2013: No face is detected.
2014: The resolution of the uploaded image is too low . Please upload a new one.
2015: Face comparison failed.
2016: The similarity did not reach the passing standard.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CompareErrorCode = null;

        /**
         * The description of the face comparison result.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CompareErrorMsg = null;

        /**
         * The similarity score of face comparison.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Sim = null;

        /**
         * This parameter is disused.
         * @type {boolean || null}
         */
        this.IsNeedCharge = null;

        /**
         * The identity document photo info edited by the user. Currently, this parameter is not applied.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {FileInfo || null}
         */
        this.CardInfoInputJson = null;

        /**
         * The request ID of this verification process.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;

        if (params.LiveData) {
            let obj = new FileInfo();
            obj.deserialize(params.LiveData)
            this.LiveData = obj;
        }

        if (params.LiveVideo) {
            let obj = new FileInfo();
            obj.deserialize(params.LiveVideo)
            this.LiveVideo = obj;
        }
        this.LiveErrorCode = 'LiveErrorCode' in params ? params.LiveErrorCode : null;
        this.LiveErrorMsg = 'LiveErrorMsg' in params ? params.LiveErrorMsg : null;

        if (params.BestFrame) {
            let obj = new FileInfo();
            obj.deserialize(params.BestFrame)
            this.BestFrame = obj;
        }

        if (params.ProfileImage) {
            let obj = new FileInfo();
            obj.deserialize(params.ProfileImage)
            this.ProfileImage = obj;
        }
        this.CompareErrorCode = 'CompareErrorCode' in params ? params.CompareErrorCode : null;
        this.CompareErrorMsg = 'CompareErrorMsg' in params ? params.CompareErrorMsg : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.IsNeedCharge = 'IsNeedCharge' in params ? params.IsNeedCharge : null;

        if (params.CardInfoInputJson) {
            let obj = new FileInfo();
            obj.deserialize(params.CardInfoInputJson)
            this.CardInfoInputJson = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    GetLivenessResultResponse: GetLivenessResultResponse,
    GetFaceIdTokenIntlResponse: GetFaceIdTokenIntlResponse,
    InternationalIDPassport: InternationalIDPassport,
    GetSdkVerificationResultResponse: GetSdkVerificationResultResponse,
    GetSdkVerificationResultRequest: GetSdkVerificationResultRequest,
    ApplyWebVerificationBizTokenIntlResponse: ApplyWebVerificationBizTokenIntlResponse,
    LivenessCompareResponse: LivenessCompareResponse,
    CreateUploadUrlResponse: CreateUploadUrlResponse,
    DetectReflectLivenessAndCompareRequest: DetectReflectLivenessAndCompareRequest,
    GetFaceIdTokenIntlRequest: GetFaceIdTokenIntlRequest,
    VideoLivenessCompareRequest: VideoLivenessCompareRequest,
    ApplyWebVerificationTokenResponse: ApplyWebVerificationTokenResponse,
    GetWebVerificationResultRequest: GetWebVerificationResultRequest,
    ThailandIDCard: ThailandIDCard,
    VerificationDetail: VerificationDetail,
    GetWebVerificationResultIntlResponse: GetWebVerificationResultIntlResponse,
    CompareFaceLivenessRequest: CompareFaceLivenessRequest,
    HKIDCard: HKIDCard,
    SingaporeIDCard: SingaporeIDCard,
    IndonesiaDrivingLicense: IndonesiaDrivingLicense,
    GetFaceIdResultIntlRequest: GetFaceIdResultIntlRequest,
    ApplySdkVerificationTokenRequest: ApplySdkVerificationTokenRequest,
    GenerateReflectSequenceRequest: GenerateReflectSequenceRequest,
    DetectReflectLivenessAndCompareResponse: DetectReflectLivenessAndCompareResponse,
    VideoLivenessCompareResponse: VideoLivenessCompareResponse,
    CardVerifyResult: CardVerifyResult,
    ApplyWebVerificationTokenRequest: ApplyWebVerificationTokenRequest,
    ApplyLivenessTokenResponse: ApplyLivenessTokenResponse,
    GetLivenessResultRequest: GetLivenessResultRequest,
    CardInfo: CardInfo,
    PhilippinesVoteID: PhilippinesVoteID,
    WebVerificationConfigIntl: WebVerificationConfigIntl,
    PhilippinesSSSID: PhilippinesSSSID,
    CompareFaceLivenessResponse: CompareFaceLivenessResponse,
    IndonesiaIDCard: IndonesiaIDCard,
    ApplySdkVerificationTokenResponse: ApplySdkVerificationTokenResponse,
    CreateUploadUrlRequest: CreateUploadUrlRequest,
    ApplyWebVerificationBizTokenIntlRequest: ApplyWebVerificationBizTokenIntlRequest,
    GetWebVerificationResultResponse: GetWebVerificationResultResponse,
    FileInfo: FileInfo,
    ApplyLivenessTokenRequest: ApplyLivenessTokenRequest,
    PhilippinesDrivingLicense: PhilippinesDrivingLicense,
    GenerateReflectSequenceResponse: GenerateReflectSequenceResponse,
    PhilippinesUMID: PhilippinesUMID,
    GeneralCard: GeneralCard,
    PhilippinesTinID: PhilippinesTinID,
    LivenessCompareRequest: LivenessCompareRequest,
    MLIDCard: MLIDCard,
    OCRResult: OCRResult,
    GetFaceIdResultIntlResponse: GetFaceIdResultIntlResponse,
    GetWebVerificationResultIntlRequest: GetWebVerificationResultIntlRequest,
    CompareResult: CompareResult,

}
