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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const GetLivenessResultResponse = models.GetLivenessResultResponse;
const GetFaceIdTokenIntlResponse = models.GetFaceIdTokenIntlResponse;
const GetSdkVerificationResultResponse = models.GetSdkVerificationResultResponse;
const ApplyWebVerificationBizTokenIntlResponse = models.ApplyWebVerificationBizTokenIntlResponse;
const LivenessCompareResponse = models.LivenessCompareResponse;
const CreateUploadUrlResponse = models.CreateUploadUrlResponse;
const DetectReflectLivenessAndCompareRequest = models.DetectReflectLivenessAndCompareRequest;
const ApplyWebVerificationBizTokenIntlRequest = models.ApplyWebVerificationBizTokenIntlRequest;
const VideoLivenessCompareRequest = models.VideoLivenessCompareRequest;
const ApplyWebVerificationTokenResponse = models.ApplyWebVerificationTokenResponse;
const GetWebVerificationResultRequest = models.GetWebVerificationResultRequest;
const VerificationDetail = models.VerificationDetail;
const GetWebVerificationResultIntlResponse = models.GetWebVerificationResultIntlResponse;
const GetSdkVerificationResultRequest = models.GetSdkVerificationResultRequest;
const GetFaceIdResultIntlRequest = models.GetFaceIdResultIntlRequest;
const ApplySdkVerificationTokenRequest = models.ApplySdkVerificationTokenRequest;
const GenerateReflectSequenceRequest = models.GenerateReflectSequenceRequest;
const DetectReflectLivenessAndCompareResponse = models.DetectReflectLivenessAndCompareResponse;
const VideoLivenessCompareResponse = models.VideoLivenessCompareResponse;
const CardVerifyResult = models.CardVerifyResult;
const ApplyWebVerificationTokenRequest = models.ApplyWebVerificationTokenRequest;
const ApplyLivenessTokenResponse = models.ApplyLivenessTokenResponse;
const GetLivenessResultRequest = models.GetLivenessResultRequest;
const ApplySdkVerificationTokenResponse = models.ApplySdkVerificationTokenResponse;
const CreateUploadUrlRequest = models.CreateUploadUrlRequest;
const GetFaceIdTokenIntlRequest = models.GetFaceIdTokenIntlRequest;
const GetWebVerificationResultResponse = models.GetWebVerificationResultResponse;
const FileInfo = models.FileInfo;
const ApplyLivenessTokenRequest = models.ApplyLivenessTokenRequest;
const GenerateReflectSequenceResponse = models.GenerateReflectSequenceResponse;
const WebVerificationConfigIntl = models.WebVerificationConfigIntl;
const LivenessCompareRequest = models.LivenessCompareRequest;
const GetFaceIdResultIntlResponse = models.GetFaceIdResultIntlResponse;
const GetWebVerificationResultIntlRequest = models.GetWebVerificationResultIntlRequest;
const CompareResult = models.CompareResult;


/**
 * faceid client
 * @class
 */
class FaceidClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("faceid.tencentcloudapi.com", "2018-03-01", credential, region, profile);
    }
    
    /**
     * This API is used to apply for a token before calling the liveness detection service each time. This token is required for initiating the verification process and getting the result after the verification is completed.
     * @param {ApplyLivenessTokenRequest} req
     * @param {function(string, ApplyLivenessTokenResponse):void} cb
     * @public
     */
    ApplyLivenessToken(req, cb) {
        let resp = new ApplyLivenessTokenResponse();
        this.request("ApplyLivenessToken", req, resp, cb);
    }

    /**
     * This API is used to get the verification result with the corresponding BizToken after the u200dweb-based verification is completed. The token is valid for three days (259,200s) after issuance and can be called multiple times.
     * @param {GetWebVerificationResultIntlRequest} req
     * @param {function(string, GetWebVerificationResultIntlResponse):void} cb
     * @public
     */
    GetWebVerificationResultIntl(req, cb) {
        let resp = new GetWebVerificationResultIntlResponse();
        this.request("GetWebVerificationResultIntl", req, resp, cb);
    }

    /**
     * This API is used to pass in a video and a photo, determine whether the person in the video is real, and if yes, then determine whether the person in the video is the same as that in the photo.
This API on the legacy version will continue to serve existing users but will be unavailable to new users. We recommend you use `VideoLivenessCompare` for better service quality.
     * @param {LivenessCompareRequest} req
     * @param {function(string, LivenessCompareResponse):void} cb
     * @public
     */
    LivenessCompare(req, cb) {
        let resp = new LivenessCompareResponse();
        this.request("LivenessCompare", req, resp, cb);
    }

    /**
     * This API is used to detect liveness with the package generated by the liveness comparison (reflection-based) SDK, and to compare the person detected with that in the image passed in.
The image and the data generated with the SDK must be stored in COS, and the region of the COS bucket must be same as that of requests made with this API. We recommend that you pass resources with upload link APIs.
     * @param {DetectReflectLivenessAndCompareRequest} req
     * @param {function(string, DetectReflectLivenessAndCompareResponse):void} cb
     * @public
     */
    DetectReflectLivenessAndCompare(req, cb) {
        let resp = new DetectReflectLivenessAndCompareResponse();
        this.request("DetectReflectLivenessAndCompare", req, resp, cb);
    }

    /**
     * This API is used to generate an appropriate light sequence based on the information collected by the liveness comparison (reflection-based) SDK and pass the light sequence into the SDK to start the identity verification process.
The data generated with the SDK must be stored in COS, and the region of the COS bucket must be same as that of requests made with this API. We recommend that you pass resources with upload link APIs.
     * @param {GenerateReflectSequenceRequest} req
     * @param {function(string, GenerateReflectSequenceResponse):void} cb
     * @public
     */
    GenerateReflectSequence(req, cb) {
        let resp = new GenerateReflectSequenceResponse();
        this.request("GenerateReflectSequence", req, resp, cb);
    }

    /**
     * This API is used to pass in URLs of a video and a photo, determine whether the person in the video is real, and if yes, then determine whether the person in the video is the same as that in the photo.
     * @param {VideoLivenessCompareRequest} req
     * @param {function(string, VideoLivenessCompareResponse):void} cb
     * @public
     */
    VideoLivenessCompare(req, cb) {
        let resp = new VideoLivenessCompareResponse();
        this.request("VideoLivenessCompare", req, resp, cb);
    }

    /**
     * This API is used to apply for a BizToken before calling the web-based verification service each time. This token is required for initiating a verification process and getting the result after the verification is completed.
     * @param {ApplyWebVerificationBizTokenIntlRequest} req
     * @param {function(string, ApplyWebVerificationBizTokenIntlResponse):void} cb
     * @public
     */
    ApplyWebVerificationBizTokenIntl(req, cb) {
        let resp = new ApplyWebVerificationBizTokenIntlResponse();
        this.request("ApplyWebVerificationBizTokenIntl", req, resp, cb);
    }

    /**
     * This API is used to get the verification result with the corresponding SDK token after the identity verification process is completed. The SDK token is valid for two hours (2*3,600s) after generation and can be called multiple times.
     * @param {GetFaceIdResultIntlRequest} req
     * @param {function(string, GetFaceIdResultIntlResponse):void} cb
     * @public
     */
    GetFaceIdResultIntl(req, cb) {
        let resp = new GetFaceIdResultIntlResponse();
        this.request("GetFaceIdResultIntl", req, resp, cb);
    }

    /**
     * This API is used to get the verification result with the corresponding token after the SDK-based verification is completed. The token is valid for three days after issuance and can be called multiple times.
     * @param {GetSdkVerificationResultRequest} req
     * @param {function(string, GetSdkVerificationResultResponse):void} cb
     * @public
     */
    GetSdkVerificationResult(req, cb) {
        let resp = new GetSdkVerificationResultResponse();
        this.request("GetSdkVerificationResult", req, resp, cb);
    }

    /**
     * This API is used to apply for an SDK token before calling the liveness detection and face comparison SDK each time. The SDK token is used throughout the identity verification process and to get the verification result after the verification is completed. A token is valid for one identity verification process only.
     * @param {GetFaceIdTokenIntlRequest} req
     * @param {function(string, GetFaceIdTokenIntlResponse):void} cb
     * @public
     */
    GetFaceIdTokenIntl(req, cb) {
        let resp = new GetFaceIdTokenIntlResponse();
        this.request("GetFaceIdTokenIntl", req, resp, cb);
    }

    /**
     * This API is used to get the verification result with the corresponding token (BizToken) after the web-based verification is completed. The BizToken is valid for three days (3*24*3,600s) after issuance and can be called multiple times.
     * @param {GetWebVerificationResultRequest} req
     * @param {function(string, GetWebVerificationResultResponse):void} cb
     * @public
     */
    GetWebVerificationResult(req, cb) {
        let resp = new GetWebVerificationResultResponse();
        this.request("GetWebVerificationResult", req, resp, cb);
    }

    /**
     * This API is used to generate a temporary `UploadUrl` for uploading resource files (with the `HTTP PUT` method). After resource upload, `ResourceUrl` will be passed to the `TargetAction` API to complete the resource passing (specific fields vary by case). 
The data will be stored in a COS bucket in the region specified by the parameter `Region` for two hours.
     * @param {CreateUploadUrlRequest} req
     * @param {function(string, CreateUploadUrlResponse):void} cb
     * @public
     */
    CreateUploadUrl(req, cb) {
        let resp = new CreateUploadUrlResponse();
        this.request("CreateUploadUrl", req, resp, cb);
    }

    /**
     * This API is used to apply for a token before calling the Identity Verification SDK service each time. This token is required for initiating the verification process and getting the result after the verification is completed.
     * @param {ApplySdkVerificationTokenRequest} req
     * @param {function(string, ApplySdkVerificationTokenResponse):void} cb
     * @public
     */
    ApplySdkVerificationToken(req, cb) {
        let resp = new ApplySdkVerificationTokenResponse();
        this.request("ApplySdkVerificationToken", req, resp, cb);
    }

    /**
     * This API is used to get the verification result with the corresponding token (SdkToken) after the liveness detection is completed. The token is valid for two hours after issuance and can be called multiple times.
     * @param {GetLivenessResultRequest} req
     * @param {function(string, GetLivenessResultResponse):void} cb
     * @public
     */
    GetLivenessResult(req, cb) {
        let resp = new GetLivenessResultResponse();
        this.request("GetLivenessResult", req, resp, cb);
    }

    /**
     * This API is used to apply for a token before calling the web-based verification service each time. This token is required for initiating the verification process and getting the result after the verification is completed.
     * @param {ApplyWebVerificationTokenRequest} req
     * @param {function(string, ApplyWebVerificationTokenResponse):void} cb
     * @public
     */
    ApplyWebVerificationToken(req, cb) {
        let resp = new ApplyWebVerificationTokenResponse();
        this.request("ApplyWebVerificationToken", req, resp, cb);
    }


}
module.exports = FaceidClient;
