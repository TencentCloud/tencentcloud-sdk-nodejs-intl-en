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
const LivenessCompareResponse = models.LivenessCompareResponse;
const LivenessCompareRequest = models.LivenessCompareRequest;


/**
 * faceid client
 * @class
 */
class FaceidClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("faceid.tencentcloudapi.com", "2018-03-01", credential, region, profile);
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
