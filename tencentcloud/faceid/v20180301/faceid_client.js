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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const GetLivenessResultResponse = models.GetLivenessResultResponse;
const AttackRiskDetail = models.AttackRiskDetail;
const ExtraInfo = models.ExtraInfo;
const CheckIdNameDateResponse = models.CheckIdNameDateResponse;
const IdCardVerificationRequest = models.IdCardVerificationRequest;
const ImageRecognitionV2Response = models.ImageRecognitionV2Response;
const GetWebVerificationResultIntlResponse = models.GetWebVerificationResultIntlResponse;
const MobileStatusRequest = models.MobileStatusRequest;
const OCRResult = models.OCRResult;
const BangladeshIDCard = models.BangladeshIDCard;
const LivenessCompareResponse = models.LivenessCompareResponse;
const GenerateReflectSequenceResponse = models.GenerateReflectSequenceResponse;
const DetectAIFakeFacesRequest = models.DetectAIFakeFacesRequest;
const IndonesiaIDCard = models.IndonesiaIDCard;
const SingaporeIDCard = models.SingaporeIDCard;
const MacaoIDCard = models.MacaoIDCard;
const GeneralCard = models.GeneralCard;
const PhilippinesUMID = models.PhilippinesUMID;
const BankCard2EVerificationResponse = models.BankCard2EVerificationResponse;
const MobileStatusResponse = models.MobileStatusResponse;
const NormalThailandIDCard = models.NormalThailandIDCard;
const GetFaceIdTokenIntlResponse = models.GetFaceIdTokenIntlResponse;
const GetSdkVerificationResultResponse = models.GetSdkVerificationResultResponse;
const ApplyWebVerificationBizTokenIntlResponse = models.ApplyWebVerificationBizTokenIntlResponse;
const DetectReflectLivenessAndCompareRequest = models.DetectReflectLivenessAndCompareRequest;
const VideoLivenessCompareRequest = models.VideoLivenessCompareRequest;
const CheckBankCardInformationResponse = models.CheckBankCardInformationResponse;
const GetFaceIdResultIntlRequest = models.GetFaceIdResultIntlRequest;
const NormalCardInfo = models.NormalCardInfo;
const ApplySdkVerificationTokenRequest = models.ApplySdkVerificationTokenRequest;
const CardVerifyResult = models.CardVerifyResult;
const CheckIdNameDateRequest = models.CheckIdNameDateRequest;
const ApplyLivenessTokenResponse = models.ApplyLivenessTokenResponse;
const CardInfo = models.CardInfo;
const PhilippinesVoteID = models.PhilippinesVoteID;
const ApplySdkVerificationTokenResponse = models.ApplySdkVerificationTokenResponse;
const GetFaceIdTokenIntlRequest = models.GetFaceIdTokenIntlRequest;
const PakistanDrivingLicense = models.PakistanDrivingLicense;
const CompareFaceLivenessRequest = models.CompareFaceLivenessRequest;
const NormalIndonesiaIDCard = models.NormalIndonesiaIDCard;
const HMTPermit = models.HMTPermit;
const PhilippinesTinID = models.PhilippinesTinID;
const DetectAIFakeFacesResponse = models.DetectAIFakeFacesResponse;
const LivenessCompareRequest = models.LivenessCompareRequest;
const MLIDCard = models.MLIDCard;
const GetFaceIdResultIntlResponse = models.GetFaceIdResultIntlResponse;
const CheckBankCardInformationRequest = models.CheckBankCardInformationRequest;
const BankCardVerificationRequest = models.BankCardVerificationRequest;
const ThailandIDCard = models.ThailandIDCard;
const CheckIdCardInformationResponse = models.CheckIdCardInformationResponse;
const PhoneVerificationResponse = models.PhoneVerificationResponse;
const IdCardOCRVerificationRequest = models.IdCardOCRVerificationRequest;
const BankCard4EVerificationResponse = models.BankCard4EVerificationResponse;
const GenerateReflectSequenceRequest = models.GenerateReflectSequenceRequest;
const EditDetail = models.EditDetail;
const PakistanIDCard = models.PakistanIDCard;
const Encryption = models.Encryption;
const MobileNetworkTimeVerificationRequest = models.MobileNetworkTimeVerificationRequest;
const GetLivenessResultRequest = models.GetLivenessResultRequest;
const CheckIdCardInformationRequest = models.CheckIdCardInformationRequest;
const IdCardOCRVerificationResponse = models.IdCardOCRVerificationResponse;
const NigeriaIDCard = models.NigeriaIDCard;
const CompareFaceLivenessResponse = models.CompareFaceLivenessResponse;
const BankCardVerificationResponse = models.BankCardVerificationResponse;
const ApplyWebVerificationBizTokenIntlRequest = models.ApplyWebVerificationBizTokenIntlRequest;
const FileInfo = models.FileInfo;
const PhilippinesDrivingLicense = models.PhilippinesDrivingLicense;
const PhilippinesSSSID = models.PhilippinesSSSID;
const ImageRecognitionResponse = models.ImageRecognitionResponse;
const IdCardVerificationResponse = models.IdCardVerificationResponse;
const WebVerificationConfigIntl = models.WebVerificationConfigIntl;
const CompareResult = models.CompareResult;
const InternationalIDPassport = models.InternationalIDPassport;
const MobileNetworkTimeVerificationResponse = models.MobileNetworkTimeVerificationResponse;
const CreateUploadUrlResponse = models.CreateUploadUrlResponse;
const JapanIDCard = models.JapanIDCard;
const NigeriaDrivingLicense = models.NigeriaDrivingLicense;
const HKIDCard = models.HKIDCard;
const PhoneVerificationRequest = models.PhoneVerificationRequest;
const IndonesiaDrivingLicense = models.IndonesiaDrivingLicense;
const VerificationDetail = models.VerificationDetail;
const DetectReflectLivenessAndCompareResponse = models.DetectReflectLivenessAndCompareResponse;
const VideoLivenessCompareResponse = models.VideoLivenessCompareResponse;
const BankCard2EVerificationRequest = models.BankCard2EVerificationRequest;
const Address = models.Address;
const RetrievalLivenessExtraInfo = models.RetrievalLivenessExtraInfo;
const ImageRecognitionV2Request = models.ImageRecognitionV2Request;
const MainlandIDCard = models.MainlandIDCard;
const NormalMLIDCard = models.NormalMLIDCard;
const ImageRecognitionRequest = models.ImageRecognitionRequest;
const BankCard4EVerificationRequest = models.BankCard4EVerificationRequest;
const CreateUploadUrlRequest = models.CreateUploadUrlRequest;
const NormalHKIDCard = models.NormalHKIDCard;
const GetSdkVerificationResultRequest = models.GetSdkVerificationResultRequest;
const ApplyLivenessTokenRequest = models.ApplyLivenessTokenRequest;
const TaiWanIDCard = models.TaiWanIDCard;
const GetWebVerificationResultIntlRequest = models.GetWebVerificationResultIntlRequest;


/**
 * faceid client
 * @class
 */
class FaceidClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("faceid.intl.tencentcloudapi.com", "2018-03-01", credential, region, profile);
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
     * This API is used to import the ID card portrait side photo, recognize the information on the ID card photo, and compare the name, identity card number, and ID card portrait photo with the ID photo in the authoritative database to verify if they belong to the same person, thereby verifying the authenticity of the identity card information.
     * @param {CheckIdCardInformationRequest} req
     * @param {function(string, CheckIdCardInformationResponse):void} cb
     * @public
     */
    CheckIdCardInformation(req, cb) {
        let resp = new CheckIdCardInformationResponse();
        this.request("CheckIdCardInformation", req, resp, cb);
    }

    /**
     * This API is used to apply for an SDK token before calling the selfie verification SDK each time. The SDK token is used throughout the eKYC process and to get the verification result after the verification is completed. A token is valid for one eKYC process only.
     * @param {GetFaceIdTokenIntlRequest} req
     * @param {function(string, GetFaceIdTokenIntlResponse):void} cb
     * @public
     */
    GetFaceIdTokenIntl(req, cb) {
        let resp = new GetFaceIdTokenIntlResponse();
        this.request("GetFaceIdTokenIntl", req, resp, cb);
    }

    /**
     * This API is used to obtain a BizToken before each call to the Web verification service. Save the BizToken to initiate the verification process and retrieve the result upon completion. The BizToken is valid for 10 minutes.
     * @param {ApplyWebVerificationBizTokenIntlRequest} req
     * @param {function(string, ApplyWebVerificationBizTokenIntlResponse):void} cb
     * @public
     */
    ApplyWebVerificationBizTokenIntl(req, cb) {
        let resp = new ApplyWebVerificationBizTokenIntlResponse();
        this.request("ApplyWebVerificationBizTokenIntl", req, resp, cb);
    }

    /**
     * This API is used to get the verification result with the corresponding SDK token after the identity verification process is completed. The SDK token is valid for 72 hours (72*3600s) after generation and can be called multiple times.
     * @param {GetFaceIdResultIntlRequest} req
     * @param {function(string, GetFaceIdResultIntlResponse):void} cb
     * @public
     */
    GetFaceIdResultIntl(req, cb) {
        let resp = new GetFaceIdResultIntlResponse();
        this.request("GetFaceIdResultIntl", req, resp, cb);
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
     * This API is used to verify the authenticity and consistency of the bank card number, name, ID number, and mobile number for account opening.
     * @param {BankCard4EVerificationRequest} req
     * @param {function(string, BankCard4EVerificationResponse):void} cb
     * @public
     */
    BankCard4EVerification(req, cb) {
        let resp = new BankCard4EVerificationResponse();
        this.request("BankCard4EVerification", req, resp, cb);
    }

    /**
     * This API is used to apply for a token before calling the eKYC SDK service each time. This token is required for initiating the verification process and getting the result after the verification is completed.
     * @param {ApplySdkVerificationTokenRequest} req
     * @param {function(string, ApplySdkVerificationTokenResponse):void} cb
     * @public
     */
    ApplySdkVerificationToken(req, cb) {
        let resp = new ApplySdkVerificationTokenResponse();
        this.request("ApplySdkVerificationToken", req, resp, cb);
    }

    /**
     * This API is used to query the duration of a mobile number. Enter mobile number to query.
     * @param {MobileNetworkTimeVerificationRequest} req
     * @param {function(string, MobileNetworkTimeVerificationResponse):void} cb
     * @public
     */
    MobileNetworkTimeVerification(req, cb) {
        let resp = new MobileNetworkTimeVerificationResponse();
        this.request("MobileNetworkTimeVerification", req, resp, cb);
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
     * This API is used to verify the authenticity and consistency of the bank card number, name, and ID number of information.
     * @param {BankCardVerificationRequest} req
     * @param {function(string, BankCardVerificationResponse):void} cb
     * @public
     */
    BankCardVerification(req, cb) {
        let resp = new BankCardVerificationResponse();
        this.request("BankCardVerification", req, resp, cb);
    }

    /**
     * This API is used to judge whether the image passed in and the ID photo in the authoritative database belong to the same person based on the identity information.
     * @param {ImageRecognitionV2Request} req
     * @param {function(string, ImageRecognitionV2Response):void} cb
     * @public
     */
    ImageRecognitionV2(req, cb) {
        let resp = new ImageRecognitionV2Response();
        this.request("ImageRecognitionV2", req, resp, cb);
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
     * This API is used to generate an appropriate light sequence based on the information collected by the liveness comparison (reflection-based) SDK and pass the light sequence into the SDK to start the eKYC process.
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
     * This API is used to validate the authenticity and consistency of the name and identity card number. You can provide the required verification information by manually inputting the name and identity card number or importing the ID card portrait side image.
     * @param {IdCardOCRVerificationRequest} req
     * @param {function(string, IdCardOCRVerificationResponse):void} cb
     * @public
     */
    IdCardOCRVerification(req, cb) {
        let resp = new IdCardOCRVerificationResponse();
        this.request("IdCardOCRVerification", req, resp, cb);
    }

    /**
     * This interface supports judgment of real person and photo comparison to verify the user's identity online. By passing the video and photo into the interface, it will first judge whether the person in the video is real. If yes, it judges whether the person in the video is the same one as the uploaded photo and returns authentication result.
     * @param {CompareFaceLivenessRequest} req
     * @param {function(string, CompareFaceLivenessResponse):void} cb
     * @public
     */
    CompareFaceLiveness(req, cb) {
        let resp = new CompareFaceLivenessResponse();
        this.request("CompareFaceLiveness", req, resp, cb);
    }

    /**
     * This API is used to judge whether the image passed in and the ID photo in the authoritative database belong to the same person based on the identity information (this interface has stopped integration, new customers please use the <a href="https://www.tencentcloud.com/document/product/1007/102203?from_cn_redirect=1">photo face verification (V2.0)</a> API).
     * @param {ImageRecognitionRequest} req
     * @param {function(string, ImageRecognitionResponse):void} cb
     * @public
     */
    ImageRecognition(req, cb) {
        let resp = new ImageRecognitionResponse();
        this.request("ImageRecognition", req, resp, cb);
    }

    /**
     * Based on the multimodal AI large model algorithm, it provides anti-attack detection capabilities for facial images and videos. It can effectively identify highly simulated AIGC face-changing, high-definition remakes, batch black market attacks, watermarks and other attack traces, and enhance the anti-counterfeiting security capabilities of images and videos.
     * @param {DetectAIFakeFacesRequest} req
     * @param {function(string, DetectAIFakeFacesResponse):void} cb
     * @public
     */
    DetectAIFakeFaces(req, cb) {
        let resp = new DetectAIFakeFacesResponse();
        this.request("DetectAIFakeFaces", req, resp, cb);
    }

    /**
     * This API is used to validate the authenticity and consistency of the mobile number, name, and identity card number. For details on supported mobile number segments, see the <a href="https://www.tencentcloud.com/document/product/1007/46063?from_cn_redirect=1">carrier</a> document.
     * @param {PhoneVerificationRequest} req
     * @param {function(string, PhoneVerificationResponse):void} cb
     * @public
     */
    PhoneVerification(req, cb) {
        let resp = new PhoneVerificationResponse();
        this.request("PhoneVerification", req, resp, cb);
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
     * This API is used to validate the authenticity and consistency of the name and identity card number.
     * @param {IdCardVerificationRequest} req
     * @param {function(string, IdCardVerificationResponse):void} cb
     * @public
     */
    IdCardVerification(req, cb) {
        let resp = new IdCardVerificationResponse();
        this.request("IdCardVerification", req, resp, cb);
    }

    /**
     * This API is used to get the verification result with the corresponding BizToken after the web-based verification is completed. The token is valid for three days (259,200s) after issuance and can be called multiple times.
     * @param {GetWebVerificationResultIntlRequest} req
     * @param {function(string, GetWebVerificationResultIntlResponse):void} cb
     * @public
     */
    GetWebVerificationResultIntl(req, cb) {
        let resp = new GetWebVerificationResultIntlResponse();
        this.request("GetWebVerificationResultIntl", req, resp, cb);
    }

    /**
     * This API is used to validate the authenticity and consistency of the name, identity card number, and valid period.
     * @param {CheckIdNameDateRequest} req
     * @param {function(string, CheckIdNameDateResponse):void} cb
     * @public
     */
    CheckIdNameDate(req, cb) {
        let resp = new CheckIdNameDateResponse();
        this.request("CheckIdNameDate", req, resp, cb);
    }

    /**
     * Bank card basic information query
     * @param {CheckBankCardInformationRequest} req
     * @param {function(string, CheckBankCardInformationResponse):void} cb
     * @public
     */
    CheckBankCardInformation(req, cb) {
        let resp = new CheckBankCardInformationResponse();
        this.request("CheckBankCardInformation", req, resp, cb);
    }

    /**
     * This API is used to verify phone number status. You can enter mobile number to query.
     * @param {MobileStatusRequest} req
     * @param {function(string, MobileStatusResponse):void} cb
     * @public
     */
    MobileStatus(req, cb) {
        let resp = new MobileStatusResponse();
        this.request("MobileStatus", req, resp, cb);
    }

    /**
     * This API is used to validate the authenticity and consistency of the name and bank card number.
     * @param {BankCard2EVerificationRequest} req
     * @param {function(string, BankCard2EVerificationResponse):void} cb
     * @public
     */
    BankCard2EVerification(req, cb) {
        let resp = new BankCard2EVerificationResponse();
        this.request("BankCard2EVerification", req, resp, cb);
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


}
module.exports = FaceidClient;
