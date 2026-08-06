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
const ImageTranslateLLMRequest = models.ImageTranslateLLMRequest;
const ImageTranslateLLMResponse = models.ImageTranslateLLMResponse;
const Coord = models.Coord;
const TransDetail = models.TransDetail;
const BoundingBox = models.BoundingBox;
const RotateParagraphRect = models.RotateParagraphRect;


/**
 * tmt client
 * @class
 */
class TmtClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tmt.intl.tencentcloudapi.com", "2018-03-21", credential, region, profile);
    }
    
    /**
     * This API is used to provide translation service for images in 18 languages. It can automatically recognize text content in images and translate it into the target language. The recognized text is translated line by line, and a version that supports paragraph translation will be offered subsequently.

-Input image format: png, jpg, jpeg and other common image formats. gif animation is not supported.
-Output image format: jpg.

Notification: For general developers, we recommend prioritizing SDK integration to simplify development. For SDK usage introduction, directly view the 5. Developer Resources part.
     * @param {ImageTranslateLLMRequest} req
     * @param {function(string, ImageTranslateLLMResponse):void} cb
     * @public
     */
    ImageTranslateLLM(req, cb) {
        let resp = new ImageTranslateLLMResponse();
        this.request("ImageTranslateLLM", req, resp, cb);
    }


}
module.exports = TmtClient;
