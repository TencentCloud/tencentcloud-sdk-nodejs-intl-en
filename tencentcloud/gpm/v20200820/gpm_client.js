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
const RegionLatency = models.RegionLatency;
const ModifyTokenResponse = models.ModifyTokenResponse;
const DescribeTokenRequest = models.DescribeTokenRequest;
const MatchAttribute = models.MatchAttribute;
const StartMatchingRequest = models.StartMatchingRequest;
const MTicket = models.MTicket;
const CancelMatchingRequest = models.CancelMatchingRequest;
const DescribeMatchingProgressRequest = models.DescribeMatchingProgressRequest;
const AttributeMap = models.AttributeMap;
const StartMatchingResponse = models.StartMatchingResponse;
const Player = models.Player;
const CancelMatchingResponse = models.CancelMatchingResponse;
const DescribeTokenResponse = models.DescribeTokenResponse;
const MatchTicket = models.MatchTicket;
const ModifyTokenRequest = models.ModifyTokenRequest;
const DescribeMatchingProgressResponse = models.DescribeMatchingProgressResponse;


/**
 * gpm client
 * @class
 */
class GpmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gpm.tencentcloudapi.com", "2020-08-20", credential, region, profile);
    }
    
    /**
     * This API is used to cancel matching.
     * @param {CancelMatchingRequest} req
     * @param {function(string, CancelMatchingResponse):void} cb
     * @public
     */
    CancelMatching(req, cb) {
        let resp = new CancelMatchingResponse();
        this.request("CancelMatching", req, resp, cb);
    }

    /**
     * This API is used to modify the token of a Matchcode.
     * @param {ModifyTokenRequest} req
     * @param {function(string, ModifyTokenResponse):void} cb
     * @public
     */
    ModifyToken(req, cb) {
        let resp = new ModifyTokenResponse();
        this.request("ModifyToken", req, resp, cb);
    }

    /**
     * This API is used to query the matching progress.
     * @param {DescribeMatchingProgressRequest} req
     * @param {function(string, DescribeMatchingProgressResponse):void} cb
     * @public
     */
    DescribeMatchingProgress(req, cb) {
        let resp = new DescribeMatchingProgressResponse();
        this.request("DescribeMatchingProgress", req, resp, cb);
    }

    /**
     * This API is used to pass in one player or multiple players to initiate match. Players within the same request will be assigned to the same game session.
     * @param {StartMatchingRequest} req
     * @param {function(string, StartMatchingResponse):void} cb
     * @public
     */
    StartMatching(req, cb) {
        let resp = new StartMatchingResponse();
        this.request("StartMatching", req, resp, cb);
    }

    /**
     * This API is used to query the token of a Matchcode, which is used for verified the pushed message.
     * @param {DescribeTokenRequest} req
     * @param {function(string, DescribeTokenResponse):void} cb
     * @public
     */
    DescribeToken(req, cb) {
        let resp = new DescribeTokenResponse();
        this.request("DescribeToken", req, resp, cb);
    }


}
module.exports = GpmClient;
