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
const GenerateReflectSequenceResponse = models.GenerateReflectSequenceResponse;
const CreateUploadUrlResponse = models.CreateUploadUrlResponse;
const LivenessCompareResponse = models.LivenessCompareResponse;
const GenerateReflectSequenceRequest = models.GenerateReflectSequenceRequest;
const DetectReflectLivenessAndCompareResponse = models.DetectReflectLivenessAndCompareResponse;
const VideoLivenessCompareResponse = models.VideoLivenessCompareResponse;
const DetectReflectLivenessAndCompareRequest = models.DetectReflectLivenessAndCompareRequest;
const LivenessCompareRequest = models.LivenessCompareRequest;
const CreateUploadUrlRequest = models.CreateUploadUrlRequest;
const FileInfo = models.FileInfo;
const VideoLivenessCompareRequest = models.VideoLivenessCompareRequest;


/**
 * faceid client
 * @class
 */
class FaceidClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("faceid.tencentcloudapi.com", "2018-03-01", credential, region, profile);
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
     * This API is used to pass in a video and a photo, determine whether the person in the video is real, and if yes, then determine whether the person in the video is the same as that in the photo.
     * @param {LivenessCompareRequest} req
     * @param {function(string, LivenessCompareResponse):void} cb
     * @public
     */
    LivenessCompare(req, cb) {
        let resp = new LivenessCompareResponse();
        this.request("LivenessCompare", req, resp, cb);
    }


}
module.exports = FaceidClient;
