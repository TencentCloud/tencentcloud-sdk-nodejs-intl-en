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
const DescribeDataResponse = models.DescribeDataResponse;
const DescribeMatchCodesRequest = models.DescribeMatchCodesRequest;
const DeleteRuleResponse = models.DeleteRuleResponse;
const ModifyMatchRequest = models.ModifyMatchRequest;
const StartMatchingResponse = models.StartMatchingResponse;
const CreateMatchRequest = models.CreateMatchRequest;
const DescribeMatchingProgressRequest = models.DescribeMatchingProgressRequest;
const ModifyMatchResponse = models.ModifyMatchResponse;
const ReportTrendData = models.ReportTrendData;
const CreateMatchResponse = models.CreateMatchResponse;
const RuleBriefInfo = models.RuleBriefInfo;
const DescribeMatchesRequest = models.DescribeMatchesRequest;
const DeleteRuleRequest = models.DeleteRuleRequest;
const MatchInfo = models.MatchInfo;
const DescribeRulesRequest = models.DescribeRulesRequest;
const DescribeTokenResponse = models.DescribeTokenResponse;
const DescribeRuleResponse = models.DescribeRuleResponse;
const DescribeMatchRequest = models.DescribeMatchRequest;
const ModifyRuleRequest = models.ModifyRuleRequest;
const DescribeTokenRequest = models.DescribeTokenRequest;
const DescribeDataRequest = models.DescribeDataRequest;
const RegionLatency = models.RegionLatency;
const CreateRuleRequest = models.CreateRuleRequest;
const ReportOverviewData = models.ReportOverviewData;
const DescribeRuleRequest = models.DescribeRuleRequest;
const DescribeMatchResponse = models.DescribeMatchResponse;
const ModifyTokenResponse = models.ModifyTokenResponse;
const MatchCodeAttr = models.MatchCodeAttr;
const MatchAttribute = models.MatchAttribute;
const DeleteMatchResponse = models.DeleteMatchResponse;
const CancelMatchingRequest = models.CancelMatchingRequest;
const AttributeMap = models.AttributeMap;
const StringKV = models.StringKV;
const StartMatchingBackfillRequest = models.StartMatchingBackfillRequest;
const CancelMatchingResponse = models.CancelMatchingResponse;
const DescribeMatchCodesResponse = models.DescribeMatchCodesResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const DescribeRulesResponse = models.DescribeRulesResponse;
const MTicket = models.MTicket;
const RuleInfo = models.RuleInfo;
const ModifyTokenRequest = models.ModifyTokenRequest;
const StartMatchingBackfillResponse = models.StartMatchingBackfillResponse;
const DescribeMatchesResponse = models.DescribeMatchesResponse;
const Player = models.Player;
const StartMatchingRequest = models.StartMatchingRequest;
const Tag = models.Tag;
const DeleteMatchRequest = models.DeleteMatchRequest;
const MatchTicket = models.MatchTicket;
const DescribeMatchingProgressResponse = models.DescribeMatchingProgressResponse;
const ModifyRuleResponse = models.ModifyRuleResponse;


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
     * This API is used to create a match.
     * @param {CreateMatchRequest} req
     * @param {function(string, CreateMatchResponse):void} cb
     * @public
     */
    CreateMatch(req, cb) {
        let resp = new CreateMatchResponse();
        this.request("CreateMatch", req, resp, cb);
    }

    /**
     * This API is used to modify a match.
     * @param {ModifyMatchRequest} req
     * @param {function(string, ModifyMatchResponse):void} cb
     * @public
     */
    ModifyMatch(req, cb) {
        let resp = new ModifyMatchResponse();
        this.request("ModifyMatch", req, resp, cb);
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

    /**
     * This API is used to query the rule details.
     * @param {DescribeRuleRequest} req
     * @param {function(string, DescribeRuleResponse):void} cb
     * @public
     */
    DescribeRule(req, cb) {
        let resp = new DescribeRuleResponse();
        this.request("DescribeRule", req, resp, cb);
    }

    /**
     * This API is used to send a match backfill request, for which a MatchTicket will be searched to start a new match.
     * @param {StartMatchingBackfillRequest} req
     * @param {function(string, StartMatchingBackfillResponse):void} cb
     * @public
     */
    StartMatchingBackfill(req, cb) {
        let resp = new StartMatchingBackfillResponse();
        this.request("StartMatchingBackfill", req, resp, cb);
    }

    /**
     * This API is used to query the matchmaking details.
     * @param {DescribeMatchRequest} req
     * @param {function(string, DescribeMatchResponse):void} cb
     * @public
     */
    DescribeMatch(req, cb) {
        let resp = new DescribeMatchResponse();
        this.request("DescribeMatch", req, resp, cb);
    }

    /**
     * This API is used to delete a rule.
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        let resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }

    /**
     * This API is used to delete a match.
     * @param {DeleteMatchRequest} req
     * @param {function(string, DeleteMatchResponse):void} cb
     * @public
     */
    DeleteMatch(req, cb) {
        let resp = new DeleteMatchResponse();
        this.request("DeleteMatch", req, resp, cb);
    }

    /**
     * This API is used to query the rule set list and paginate the query result.
     * @param {DescribeRulesRequest} req
     * @param {function(string, DescribeRulesResponse):void} cb
     * @public
     */
    DescribeRules(req, cb) {
        let resp = new DescribeRulesResponse();
        this.request("DescribeRules", req, resp, cb);
    }

    /**
     * This API is used to modify a rule (including description and tag).
     * @param {ModifyRuleRequest} req
     * @param {function(string, ModifyRuleResponse):void} cb
     * @public
     */
    ModifyRule(req, cb) {
        let resp = new ModifyRuleResponse();
        this.request("ModifyRule", req, resp, cb);
    }

    /**
     * This API is used to create a rule.
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
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
     * This API is used to query the matchmaking list and paginate the query result.
     * @param {DescribeMatchesRequest} req
     * @param {function(string, DescribeMatchesResponse):void} cb
     * @public
     */
    DescribeMatches(req, cb) {
        let resp = new DescribeMatchesResponse();
        this.request("DescribeMatches", req, resp, cb);
    }

    /**
     * This API is used to query the created MatchCodes and paginate the query result.
     * @param {DescribeMatchCodesRequest} req
     * @param {function(string, DescribeMatchCodesResponse):void} cb
     * @public
     */
    DescribeMatchCodes(req, cb) {
        let resp = new DescribeMatchCodesResponse();
        this.request("DescribeMatchCodes", req, resp, cb);
    }

    /**
     * This API is used to view statistics.
     * @param {DescribeDataRequest} req
     * @param {function(string, DescribeDataResponse):void} cb
     * @public
     */
    DescribeData(req, cb) {
        let resp = new DescribeDataResponse();
        this.request("DescribeData", req, resp, cb);
    }


}
module.exports = GpmClient;
