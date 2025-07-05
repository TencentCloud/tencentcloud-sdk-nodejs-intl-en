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
const ImageToImageRequest = models.ImageToImageRequest;
const ImageToImageResponse = models.ImageToImageResponse;
const LogoRect = models.LogoRect;
const LogoParam = models.LogoParam;
const ResultConfig = models.ResultConfig;


/**
 * aiart client
 * @class
 */
class AiartClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("aiart.intl.tencentcloudapi.com", "2022-12-29", credential, region, profile);
    }
    
    /**
     * This API is used to transfer the image style based on the image to image technology. Images with small figures, complex gestures or too many figures are not recommended.
It supports 3 concurrency by default, which means that up to 3 submitted tasks can be processed simultaneously. Subsequent tasks can be processed only after ongoing ones are completed.
     * @param {ImageToImageRequest} req
     * @param {function(string, ImageToImageResponse):void} cb
     * @public
     */
    ImageToImage(req, cb) {
        let resp = new ImageToImageResponse();
        this.request("ImageToImage", req, resp, cb);
    }


}
module.exports = AiartClient;
