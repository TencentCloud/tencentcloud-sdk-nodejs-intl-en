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
const DescribeBillSummaryByTagResponse = models.DescribeBillSummaryByTagResponse;
const DescribeBillSummaryByPayModeResponse = models.DescribeBillSummaryByPayModeResponse;
const BillResourceSummary = models.BillResourceSummary;
const DescribeBillSummaryByTagRequest = models.DescribeBillSummaryByTagRequest;
const DescribeBillSummaryByProductResponse = models.DescribeBillSummaryByProductResponse;
const BillTagInfo = models.BillTagInfo;
const DescribeBillSummaryByRegionResponse = models.DescribeBillSummaryByRegionResponse;
const DescribeBillDetailRequest = models.DescribeBillDetailRequest;
const RegionSummaryOverviewItem = models.RegionSummaryOverviewItem;
const BusinessSummaryOverviewItem = models.BusinessSummaryOverviewItem;
const BillDetailComponent = models.BillDetailComponent;
const DescribeBillSummaryByRegionRequest = models.DescribeBillSummaryByRegionRequest;
const DescribeBillSummaryByPayModeRequest = models.DescribeBillSummaryByPayModeRequest;
const DescribeBillResourceSummaryResponse = models.DescribeBillResourceSummaryResponse;
const ActionSummaryOverviewItem = models.ActionSummaryOverviewItem;
const DescribeBillSummaryByProjectRequest = models.DescribeBillSummaryByProjectRequest;
const DescribeBillResourceSummaryRequest = models.DescribeBillResourceSummaryRequest;
const DescribeBillSummaryByProductRequest = models.DescribeBillSummaryByProductRequest;
const BillDetail = models.BillDetail;
const TagSummaryOverviewItem = models.TagSummaryOverviewItem;
const ProjectSummaryOverviewItem = models.ProjectSummaryOverviewItem;
const DescribeBillDetailResponse = models.DescribeBillDetailResponse;
const DescribeBillSummaryByProjectResponse = models.DescribeBillSummaryByProjectResponse;
const SummaryTotal = models.SummaryTotal;
const PayModeSummaryOverviewItem = models.PayModeSummaryOverviewItem;
const BusinessSummaryTotal = models.BusinessSummaryTotal;


/**
 * billing client
 * @class
 */
class BillingClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("billing.tencentcloudapi.com", "2018-07-09", credential, region, profile);
    }
    
    /**
     * This API is used to query bill details.
     * @param {DescribeBillDetailRequest} req
     * @param {function(string, DescribeBillDetailResponse):void} cb
     * @public
     */
    DescribeBillDetail(req, cb) {
        let resp = new DescribeBillDetailResponse();
        this.request("DescribeBillDetail", req, resp, cb);
    }

    /**
     * Gets the bill summarized according to billing mode
     * @param {DescribeBillSummaryByPayModeRequest} req
     * @param {function(string, DescribeBillSummaryByPayModeResponse):void} cb
     * @public
     */
    DescribeBillSummaryByPayMode(req, cb) {
        let resp = new DescribeBillSummaryByPayModeResponse();
        this.request("DescribeBillSummaryByPayMode", req, resp, cb);
    }

    /**
     * This API is used to query bill resources summary. 
     * @param {DescribeBillResourceSummaryRequest} req
     * @param {function(string, DescribeBillResourceSummaryResponse):void} cb
     * @public
     */
    DescribeBillResourceSummary(req, cb) {
        let resp = new DescribeBillResourceSummaryResponse();
        this.request("DescribeBillResourceSummary", req, resp, cb);
    }

    /**
     * Gets the bill summarized according to region
     * @param {DescribeBillSummaryByRegionRequest} req
     * @param {function(string, DescribeBillSummaryByRegionResponse):void} cb
     * @public
     */
    DescribeBillSummaryByRegion(req, cb) {
        let resp = new DescribeBillSummaryByRegionResponse();
        this.request("DescribeBillSummaryByRegion", req, resp, cb);
    }

    /**
     * Gets the bill summarized according to project
     * @param {DescribeBillSummaryByProjectRequest} req
     * @param {function(string, DescribeBillSummaryByProjectResponse):void} cb
     * @public
     */
    DescribeBillSummaryByProject(req, cb) {
        let resp = new DescribeBillSummaryByProjectResponse();
        this.request("DescribeBillSummaryByProject", req, resp, cb);
    }

    /**
     * Gets the bill summarized according to product
     * @param {DescribeBillSummaryByProductRequest} req
     * @param {function(string, DescribeBillSummaryByProductResponse):void} cb
     * @public
     */
    DescribeBillSummaryByProduct(req, cb) {
        let resp = new DescribeBillSummaryByProductResponse();
        this.request("DescribeBillSummaryByProduct", req, resp, cb);
    }

    /**
     * This API is used to get the cost distribution over different tags.
     * @param {DescribeBillSummaryByTagRequest} req
     * @param {function(string, DescribeBillSummaryByTagResponse):void} cb
     * @public
     */
    DescribeBillSummaryByTag(req, cb) {
        let resp = new DescribeBillSummaryByTagResponse();
        this.request("DescribeBillSummaryByTag", req, resp, cb);
    }


}
module.exports = BillingClient;
