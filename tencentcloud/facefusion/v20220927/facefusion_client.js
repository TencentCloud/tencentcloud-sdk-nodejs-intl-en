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
const LogoParam = models.LogoParam;
const FuseParam = models.FuseParam;
const ImageCodecParam = models.ImageCodecParam;
const MergeInfo = models.MergeInfo;
const FuseFaceResponse = models.FuseFaceResponse;
const FuseFaceRequest = models.FuseFaceRequest;
const FaceRect = models.FaceRect;
const MetaData = models.MetaData;


/**
 * facefusion client
 * @class
 */
class FacefusionClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("facefusion.tencentcloudapi.com", "2022-09-27", credential, region, profile);
    }
    
    /**
     * This API is used to perform the fusion of a single face, multiple faces, and specified faces with the material template by uploading face images. Users can add logos to generated images. See <a href="https://intl.cloud.tencent.com/document/product/670/38247?from_cn_redirect=1" target="_blank">Fusion Access Guide</a>.



- The signature method in the public parameters must be specified as the V3 version. In other words, set the SignatureMethod parameter to TC3-HMAC-SHA256.
     * @param {FuseFaceRequest} req
     * @param {function(string, FuseFaceResponse):void} cb
     * @public
     */
    FuseFace(req, cb) {
        let resp = new FuseFaceResponse();
        this.request("FuseFace", req, resp, cb);
    }


}
module.exports = FacefusionClient;
