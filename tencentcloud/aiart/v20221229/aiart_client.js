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
const ChangeClothesResponse = models.ChangeClothesResponse;
const LogoRect = models.LogoRect;
const LogoParam = models.LogoParam;
const ChangeClothesRequest = models.ChangeClothesRequest;


/**
 * aiart client
 * @class
 */
class AiartClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("aiart.intl.tencentcloudapi.com", "2022-12-29", credential, region, profile);
    }
    
    /**
     * This API is used to generate the images of the model changing clothes based on the model photo and the clothes image.
It supports 1 concurrency by default, which means that up to 1 submitted task can be processed simultaneously. Subsequent tasks can be processed only after ongoing ones are completed.
     * @param {ChangeClothesRequest} req
     * @param {function(string, ChangeClothesResponse):void} cb
     * @public
     */
    ChangeClothes(req, cb) {
        let resp = new ChangeClothesResponse();
        this.request("ChangeClothes", req, resp, cb);
    }


}
module.exports = AiartClient;
