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
const CreateSessionResponse = models.CreateSessionResponse;
const StopPublishStreamRequest = models.StopPublishStreamRequest;
const StartPublishStreamWithURLResponse = models.StartPublishStreamWithURLResponse;
const StopPublishStreamResponse = models.StopPublishStreamResponse;
const DestroySessionResponse = models.DestroySessionResponse;
const StartPublishStreamWithURLRequest = models.StartPublishStreamWithURLRequest;
const ApplyConcurrentResponse = models.ApplyConcurrentResponse;
const StartPublishStreamResponse = models.StartPublishStreamResponse;
const CreateSessionRequest = models.CreateSessionRequest;
const ApplyConcurrentRequest = models.ApplyConcurrentRequest;
const DescribeConcurrentCountResponse = models.DescribeConcurrentCountResponse;
const DestroySessionRequest = models.DestroySessionRequest;
const DescribeConcurrentCountRequest = models.DescribeConcurrentCountRequest;
const StartPublishStreamRequest = models.StartPublishStreamRequest;


/**
 * car client
 * @class
 */
class CarClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("car.tencentcloudapi.com", "2022-01-10", credential, region, profile);
    }
    
    /**
     * This API is used to request a concurrency. The timeout period of the API is 20 seconds.
     * @param {ApplyConcurrentRequest} req
     * @param {function(string, ApplyConcurrentResponse):void} cb
     * @public
     */
    ApplyConcurrent(req, cb) {
        let resp = new ApplyConcurrentResponse();
        this.request("ApplyConcurrent", req, resp, cb);
    }

    /**
     * Obtain the concurrency count.
     * @param {DescribeConcurrentCountRequest} req
     * @param {function(string, DescribeConcurrentCountResponse):void} cb
     * @public
     */
    DescribeConcurrentCount(req, cb) {
        let resp = new DescribeConcurrentCountResponse();
        this.request("DescribeConcurrentCount", req, resp, cb);
    }

    /**
     * Terminate the session. If stream push has been initiated in this session, then the stream push will end upon session termination.
     * @param {DestroySessionRequest} req
     * @param {function(string, DestroySessionResponse):void} cb
     * @public
     */
    DestroySession(req, cb) {
        let resp = new DestroySessionResponse();
        this.request("DestroySession", req, resp, cb);
    }

    /**
     * Initiate stream push. The codec for the stream push is automatically adjusted based on the client's (SDK) capabilities, with a default order of H265, H264, VP8, and VP9.
     * @param {StartPublishStreamRequest} req
     * @param {function(string, StartPublishStreamResponse):void} cb
     * @public
     */
    StartPublishStream(req, cb) {
        let resp = new StartPublishStreamResponse();
        this.request("StartPublishStream", req, resp, cb);
    }

    /**
     * This API is used to stop stream push.
     * @param {StopPublishStreamRequest} req
     * @param {function(string, StopPublishStreamResponse):void} cb
     * @public
     */
    StopPublishStream(req, cb) {
        let resp = new StopPublishStreamResponse();
        this.request("StopPublishStream", req, resp, cb);
    }

    /**
     * Initiate stream push to the specified URL. The codec for the stream push is automatically adjusted based on the client's (SDK) capabilities, with a default order of H265, H264, VP8, and VP9. This stream push method will be charged separately. For details about the charging method, see [Charging for Stream Push to Specified URL](https://intl.cloud.tencent.com/document/product/1547/72168?from_cn_redirect=1#98ac188a-d122-4caf-88be-05268ecefdf6).
     * @param {StartPublishStreamWithURLRequest} req
     * @param {function(string, StartPublishStreamWithURLResponse):void} cb
     * @public
     */
    StartPublishStreamWithURL(req, cb) {
        let resp = new StartPublishStreamWithURLResponse();
        this.request("StartPublishStreamWithURL", req, resp, cb);
    }

    /**
     * This API is used to create a session. The timeout period of the API is 5 seconds.
     * @param {CreateSessionRequest} req
     * @param {function(string, CreateSessionResponse):void} cb
     * @public
     */
    CreateSession(req, cb) {
        let resp = new CreateSessionResponse();
        this.request("CreateSession", req, resp, cb);
    }


}
module.exports = CarClient;
