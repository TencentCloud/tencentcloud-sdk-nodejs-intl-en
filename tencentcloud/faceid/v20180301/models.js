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
 * GetSdkVerificationResult response structure.
 * @class
 */
class GetSdkVerificationResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The result of the entire verification process.
         * @type {string || null}
         */
        this.Result = null;

        /**
         * The result description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The charge count.
         * @type {number || null}
         */
        this.ChargeCount = null;

        /**
         * The results of multiple OCR processes (in order). The result of the final process is taken as the valid result.
         * @type {Array.<CardVerifyResult> || null}
         */
        this.CardVerifyResults = null;

        /**
         * The results of multiple liveness detection processes (in order). The result of the final process is taken as the valid result.
         * @type {Array.<CompareResult> || null}
         */
        this.CompareResults = null;

        /**
         * Info passed in the process of getting the token.
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
 * The details of the verification process.
 * @class
 */
class VerificationDetail extends  AbstractModel {
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
         * The result of this liveness detection process. `0` indicates success.
Note: This field may return null, indicating that no valid values can be obtained.
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
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CompareErrorCode = null;

        /**
         * The result description of this comparison process.
Note: This field may return null, indicating that no valid values can be obtained.
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
         * The similarity of the best face screenshot collected from the video stream and the uploaded image for comparison in this verification process. Valid range: [0.00, 100.00]. By default, the person in the screenshot is judged as the same person in the image if the similarity is greater than or equal to 70.
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Card type. Valid values: `HK` (Hong Kong ID cards) (default), `ML` (Malaysian ID cards), `PhilippinesVoteID` (Philippine voters ID cards), and `PhilippinesDrivingLicense` (Philippine driving licenses).
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * Disable the modification of the OCR result by the user. Default value: `false` (modification allowed).
         * @type {boolean || null}
         */
        this.DisableChangeOcrResult = null;

        /**
         * Disable the OCR warnings. Default value: `false` (not disable), where OCR warnings are enabled and the OCR result will not be returned based on the warnings. If the value of `NeedVerifyIdCard` is `true`, the value of this field will also be `true`.
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
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
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
 * The result of a single authentication or OCR process during the identity verification.
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
         * The video for ID card authentication. This field is returned only if the video-based ID card authentication is enabled. The URL is valid for 10 minutes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {FileInfo || null}
         */
        this.CardVideo = null;

        /**
         * The identity document image. The URL is valid for 10 minutes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {FileInfo || null}
         */
        this.CardImage = null;

        /**
         * The OCR result (in JSON) of the identity document image. If authentication or OCR fails, this parameter is left empty. The URL is valid for 10 minutes.
When the value of `IdCardType` is `HK`:
- CnName string: Chinese name
- EnName string: English name
- TelexCode string: The code corresponding to the Chinese name
- Sex string: Gender. Valid values: `M` (male) and `F` (female).
- Birthday string: Date of birth.
- Permanent int: Whether it is a permanent residence identity card. Valid values: `0` (non-permanent), `1` (permanent), and `-1` (unknown).
- IdNum string: ID number.
- Symbol string: The ID symbol below the date of birth, such as "***AZ".
- FirstIssueDate string: The date of first issuance.
- CurrentIssueDate string: The date of latest issuance.

When the value of `IdCardType` is `ML`:
- Sex string: `LELAKI` (male) and `PEREMPUAN` (female).
- Birthday string: Date of birth.
- ID string: ID number.
- Name string: Name.
- Address string: Address.
- Type string: Identity document type.

When the value of `IdCardType` is `PhilippinesVoteID`:
- Birthday string: Date of birth.
- Address string: Address.
- LastName string: Family name.
- FirstName string: First name.
- VIN string: VIN number.
- CivilStatus string: Marital status.
- Citizenship string: Citizenship.
- PrecinctNo string: Region.

When the value of `IdCardType` is `PhilippinesDrivingLicense`:
- Sex string: Gender.
- Birthday string: Date of birth.
- Name string: Name.
- Address string: Address.
- LastName string: Family name.
- FirstName string: First name.
- MiddleName string: Middle name.
- Nationality string: Nationality.
- LicenseNo string: License number.
- ExpiresDate string: Validity period.
- AgencyCode string: Agency code.
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
         * 
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * 
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
 * The description of a single comparison result.
 * @class
 */
class CompareResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The final comparison result.
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * The description of the final comparison result.
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * 
         * @type {FileInfo || null}
         */
        this.LiveData = null;

        /**
         * The video for this liveness detection process. The URL is valid for 10 minutes.
         * @type {FileInfo || null}
         */
        this.LiveVideo = null;

        /**
         * The code of the liveness detection result.
         * @type {string || null}
         */
        this.LiveErrorCode = null;

        /**
         * The description of the liveness detection result.
         * @type {string || null}
         */
        this.LiveErrorMsg = null;

        /**
         * The best face screenshot in this liveness detection. The URL is valid for 10 minutes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {FileInfo || null}
         */
        this.BestFrame = null;

        /**
         * The profile photo screenshot from the identity document. The URL is valid for 10 minutes.
         * @type {FileInfo || null}
         */
        this.ProfileImage = null;

        /**
         * The code of the face comparison result.
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Similarity
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Sim = null;

        /**
         * This field is disused.
         * @type {boolean || null}
         */
        this.IsNeedCharge = null;

        /**
         * The identity document photo info edited by the user in JSON. If the value of `DisableChangeOcrResult` is `true`, the editing feature is disabled and this field does not exist. The URL is valid for 10 minutes.
When the value of `IdCardType` is `HK`:
- CnName string: Chinese name
- EnName string: English name
- TelexCode string: The code corresponding to the Chinese name
- Sex string: Gender. Valid values: `M` (male) and `F` (female).
- Birthday string: Date of birth.
- Permanent int: Whether it is a permanent residence identity card. Valid values: `0` (non-permanent), `1` (permanent), and `-1` (unknown).
- IdNum string: ID number.
- Symbol string: The ID symbol below the date of birth, such as "***AZ".
- FirstIssueDate string: The date of first issuance.
- CurrentIssueDate string: The date of latest issuance.

When the value of `IdCardType` is `ML`:
- Sex string: `LELAKI` (male) and `PEREMPUAN` (female).
- Birthday string
- ID string
- Name string
- Address string
- Type string: Identity document type.
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
    GetSdkVerificationResultResponse: GetSdkVerificationResultResponse,
    VerificationDetail: VerificationDetail,
    LivenessCompareResponse: LivenessCompareResponse,
    CreateUploadUrlResponse: CreateUploadUrlResponse,
    DetectReflectLivenessAndCompareRequest: DetectReflectLivenessAndCompareRequest,
    VideoLivenessCompareRequest: VideoLivenessCompareRequest,
    ApplyWebVerificationTokenResponse: ApplyWebVerificationTokenResponse,
    GetWebVerificationResultRequest: GetWebVerificationResultRequest,
    FileInfo: FileInfo,
    ApplySdkVerificationTokenRequest: ApplySdkVerificationTokenRequest,
    GenerateReflectSequenceRequest: GenerateReflectSequenceRequest,
    DetectReflectLivenessAndCompareResponse: DetectReflectLivenessAndCompareResponse,
    VideoLivenessCompareResponse: VideoLivenessCompareResponse,
    CardVerifyResult: CardVerifyResult,
    ApplyWebVerificationTokenRequest: ApplyWebVerificationTokenRequest,
    ApplyLivenessTokenResponse: ApplyLivenessTokenResponse,
    GetLivenessResultRequest: GetLivenessResultRequest,
    ApplySdkVerificationTokenResponse: ApplySdkVerificationTokenResponse,
    CreateUploadUrlRequest: CreateUploadUrlRequest,
    GetWebVerificationResultResponse: GetWebVerificationResultResponse,
    GetSdkVerificationResultRequest: GetSdkVerificationResultRequest,
    ApplyLivenessTokenRequest: ApplyLivenessTokenRequest,
    GenerateReflectSequenceResponse: GenerateReflectSequenceResponse,
    LivenessCompareRequest: LivenessCompareRequest,
    CompareResult: CompareResult,

}
