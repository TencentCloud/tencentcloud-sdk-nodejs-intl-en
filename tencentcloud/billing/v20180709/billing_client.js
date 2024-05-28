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
const DescribeCostSummaryByProductRequest = models.DescribeCostSummaryByProductRequest;
const DescribeCostExplorerSummaryResponse = models.DescribeCostExplorerSummaryResponse;
const ConsumptionBusinessSummaryDataItem = models.ConsumptionBusinessSummaryDataItem;
const BillTagInfo = models.BillTagInfo;
const ConditionBusiness = models.ConditionBusiness;
const AnalyseActionTypeDetail = models.AnalyseActionTypeDetail;
const DescribeCostExplorerSummaryRequest = models.DescribeCostExplorerSummaryRequest;
const DescribeCostSummaryByProductResponse = models.DescribeCostSummaryByProductResponse;
const DeleteAllocationTagResponse = models.DeleteAllocationTagResponse;
const DescribeBillDetailForOrganizationResponse = models.DescribeBillDetailForOrganizationResponse;
const BillDetailComponentConfig = models.BillDetailComponentConfig;
const DescribeCostSummaryByResourceResponse = models.DescribeCostSummaryByResourceResponse;
const DescribeBillSummaryByRegionRequest = models.DescribeBillSummaryByRegionRequest;
const DescribeCostSummaryByProjectRequest = models.DescribeCostSummaryByProjectRequest;
const ConsumptionRegionSummaryDataItem = models.ConsumptionRegionSummaryDataItem;
const DescribeBillSummaryRequest = models.DescribeBillSummaryRequest;
const DescribeBillResourceSummaryResponse = models.DescribeBillResourceSummaryResponse;
const DistributionBillDetail = models.DistributionBillDetail;
const DescribeDosageCosDetailByDateRequest = models.DescribeDosageCosDetailByDateRequest;
const DeleteAllocationTagRequest = models.DeleteAllocationTagRequest;
const BillDistributionResourceSummary = models.BillDistributionResourceSummary;
const BusinessSummaryInfo = models.BusinessSummaryInfo;
const DescribeBillSummaryByProductRequest = models.DescribeBillSummaryByProductRequest;
const DescribeVoucherUsageDetailsResponse = models.DescribeVoucherUsageDetailsResponse;
const ConsumptionSummaryTotal = models.ConsumptionSummaryTotal;
const DescribeCostDetailResponse = models.DescribeCostDetailResponse;
const VoucherInfos = models.VoucherInfos;
const DescribeCostSummaryByProjectResponse = models.DescribeCostSummaryByProjectResponse;
const AnalyseProjectDetail = models.AnalyseProjectDetail;
const DescribeBillSummaryByTagResponse = models.DescribeBillSummaryByTagResponse;
const DescribeBillSummaryByPayModeResponse = models.DescribeBillSummaryByPayModeResponse;
const DescribeBillSummaryByTagRequest = models.DescribeBillSummaryByTagRequest;
const AnalyseOwnerUinDetail = models.AnalyseOwnerUinDetail;
const SummaryDetail = models.SummaryDetail;
const AnalyseAmountDetail = models.AnalyseAmountDetail;
const DescribeBillResourceSummaryForOrganizationRequest = models.DescribeBillResourceSummaryForOrganizationRequest;
const AnalyseDetail = models.AnalyseDetail;
const DescribeCostSummaryByRegionRequest = models.DescribeCostSummaryByRegionRequest;
const ConsumptionSummaryTrend = models.ConsumptionSummaryTrend;
const DescribeBillDownloadUrlRequest = models.DescribeBillDownloadUrlRequest;
const DescribeBillSummaryByPayModeRequest = models.DescribeBillSummaryByPayModeRequest;
const ApplicableProducts = models.ApplicableProducts;
const DescribeBillSummaryByProjectRequest = models.DescribeBillSummaryByProjectRequest;
const BillDetail = models.BillDetail;
const DescribeBillDetailResponse = models.DescribeBillDetailResponse;
const ConditionPayMode = models.ConditionPayMode;
const DescribeBillSummaryByProjectResponse = models.DescribeBillSummaryByProjectResponse;
const DescribeBillDownloadUrlResponse = models.DescribeBillDownloadUrlResponse;
const TagDataInfo = models.TagDataInfo;
const SummaryTotal = models.SummaryTotal;
const BusinessSummaryTotal = models.BusinessSummaryTotal;
const CostComponentSet = models.CostComponentSet;
const AnalyseHeaderDetail = models.AnalyseHeaderDetail;
const AnalysePayModeDetail = models.AnalysePayModeDetail;
const DescribeBillSummaryResponse = models.DescribeBillSummaryResponse;
const BillResourceSummary = models.BillResourceSummary;
const Conditions = models.Conditions;
const AnalyseTimeDetail = models.AnalyseTimeDetail;
const RegionSummaryOverviewItem = models.RegionSummaryOverviewItem;
const ConsumptionProjectSummaryDataItem = models.ConsumptionProjectSummaryDataItem;
const AnalyseRegionDetail = models.AnalyseRegionDetail;
const DescribeBillSummaryForOrganizationRequest = models.DescribeBillSummaryForOrganizationRequest;
const ActionSummaryOverviewItem = models.ActionSummaryOverviewItem;
const DescribeBillDetailForOrganizationRequest = models.DescribeBillDetailForOrganizationRequest;
const DescribeVoucherUsageDetailsRequest = models.DescribeVoucherUsageDetailsRequest;
const DescribeBillResourceSummaryRequest = models.DescribeBillResourceSummaryRequest;
const BillDetailComponent = models.BillDetailComponent;
const ConditionRegion = models.ConditionRegion;
const TagSummaryOverviewItem = models.TagSummaryOverviewItem;
const ConsumptionResourceSummaryConditionValue = models.ConsumptionResourceSummaryConditionValue;
const DescribeCostDetailRequest = models.DescribeCostDetailRequest;
const DescribeTagListRequest = models.DescribeTagListRequest;
const DescribeBillResourceSummaryForOrganizationResponse = models.DescribeBillResourceSummaryForOrganizationResponse;
const DescribeCostSummaryByResourceRequest = models.DescribeCostSummaryByResourceRequest;
const CreateAllocationTagRequest = models.CreateAllocationTagRequest;
const ExcludedProducts = models.ExcludedProducts;
const PayModeSummaryOverviewItem = models.PayModeSummaryOverviewItem;
const UsageDetails = models.UsageDetails;
const AnalyseBusinessDetail = models.AnalyseBusinessDetail;
const AnalyseConditions = models.AnalyseConditions;
const CostDetail = models.CostDetail;
const DescribeBillSummaryByProductResponse = models.DescribeBillSummaryByProductResponse;
const DescribeBillSummaryByRegionResponse = models.DescribeBillSummaryByRegionResponse;
const CreateAllocationTagResponse = models.CreateAllocationTagResponse;
const ConsumptionResourceSummaryDataItem = models.ConsumptionResourceSummaryDataItem;
const DescribeAccountBalanceRequest = models.DescribeAccountBalanceRequest;
const DescribeBillDetailRequest = models.DescribeBillDetailRequest;
const AnalyseZoneDetail = models.AnalyseZoneDetail;
const DescribeVoucherInfoResponse = models.DescribeVoucherInfoResponse;
const BillDetailAssociatedOrder = models.BillDetailAssociatedOrder;
const DescribeAccountBalanceResponse = models.DescribeAccountBalanceResponse;
const BusinessSummaryOverviewItem = models.BusinessSummaryOverviewItem;
const UsageRecords = models.UsageRecords;
const DescribeVoucherInfoRequest = models.DescribeVoucherInfoRequest;
const DescribeDosageCosDetailByDateResponse = models.DescribeDosageCosDetailByDateResponse;
const ProjectSummaryOverviewItem = models.ProjectSummaryOverviewItem;
const DescribeBillSummaryForOrganizationResponse = models.DescribeBillSummaryForOrganizationResponse;
const ConditionProject = models.ConditionProject;
const DescribeTagListResponse = models.DescribeTagListResponse;
const CosDetailSets = models.CosDetailSets;
const AnalyseConditionDetail = models.AnalyseConditionDetail;
const AnalyseHeaderTimeDetail = models.AnalyseHeaderTimeDetail;
const DescribeCostSummaryByRegionResponse = models.DescribeCostSummaryByRegionResponse;


/**
 * billing client
 * @class
 */
class BillingClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("billing.tencentcloudapi.com", "2018-07-09", credential, region, profile);
    }
    
    /**
     * This API is used to obtain consumption details summarized by resource.
     * @param {DescribeCostSummaryByResourceRequest} req
     * @param {function(string, DescribeCostSummaryByResourceResponse):void} cb
     * @public
     */
    DescribeCostSummaryByResource(req, cb) {
        let resp = new DescribeCostSummaryByResourceResponse();
        this.request("DescribeCostSummaryByResource", req, resp, cb);
    }

    /**
     * This API is used to obtain consumption details summarized by region.
     * @param {DescribeCostSummaryByRegionRequest} req
     * @param {function(string, DescribeCostSummaryByRegionResponse):void} cb
     * @public
     */
    DescribeCostSummaryByRegion(req, cb) {
        let resp = new DescribeCostSummaryByRegionResponse();
        this.request("DescribeCostSummaryByRegion", req, resp, cb);
    }

    /**
     * This API is used to get the bill summarized by instance.
     * @param {DescribeBillResourceSummaryRequest} req
     * @param {function(string, DescribeBillResourceSummaryResponse):void} cb
     * @public
     */
    DescribeBillResourceSummary(req, cb) {
        let resp = new DescribeBillResourceSummaryResponse();
        this.request("DescribeBillResourceSummary", req, resp, cb);
    }

    /**
     * This API is used to batch set cost allocation tags.
     * @param {CreateAllocationTagRequest} req
     * @param {function(string, CreateAllocationTagResponse):void} cb
     * @public
     */
    CreateAllocationTag(req, cb) {
        let resp = new CreateAllocationTagResponse();
        this.request("CreateAllocationTag", req, resp, cb);
    }

    /**
     * This API is used to query vouchers.
     * @param {DescribeVoucherInfoRequest} req
     * @param {function(string, DescribeVoucherInfoResponse):void} cb
     * @public
     */
    DescribeVoucherInfo(req, cb) {
        let resp = new DescribeVoucherInfoResponse();
        this.request("DescribeVoucherInfo", req, resp, cb);
    }

    /**
     * This API is used to obtain consumption details summarized by project.
     * @param {DescribeCostSummaryByProjectRequest} req
     * @param {function(string, DescribeCostSummaryByProjectResponse):void} cb
     * @public
     */
    DescribeCostSummaryByProject(req, cb) {
        let resp = new DescribeCostSummaryByProjectResponse();
        this.request("DescribeCostSummaryByProject", req, resp, cb);
    }

    /**
     * This API is used to view cost analysis details.
     * @param {DescribeCostExplorerSummaryRequest} req
     * @param {function(string, DescribeCostExplorerSummaryResponse):void} cb
     * @public
     */
    DescribeCostExplorerSummary(req, cb) {
        let resp = new DescribeCostExplorerSummaryResponse();
        this.request("DescribeCostExplorerSummary", req, resp, cb);
    }

    /**
     * This API is used to get pay-on-behalf bills of the admin account (bills by instance).
     * @param {DescribeBillResourceSummaryForOrganizationRequest} req
     * @param {function(string, DescribeBillResourceSummaryForOrganizationResponse):void} cb
     * @public
     */
    DescribeBillResourceSummaryForOrganization(req, cb) {
        let resp = new DescribeBillResourceSummaryForOrganizationResponse();
        this.request("DescribeBillResourceSummaryForOrganization", req, resp, cb);
    }

    /**
     * u200cThis API is used to get bill details.
Note:
1. The API request may fail due to network instability or other exceptions. In this case, we recommend you manually retry the request when the API request fails.
2.If the volume of your bill data is high (for example, if over 200 thousand bill entries are generated for a month), bill data query via APIs may be slow. We recommend you enable bill storage so that you can obtain bill files from COS buckets for analysis. For details, see [Saving Bills to COS](https://intl.cloud.tencent.com/document/product/555/61275?from_cn_redirect=1).
     * @param {DescribeBillDetailRequest} req
     * @param {function(string, DescribeBillDetailResponse):void} cb
     * @public
     */
    DescribeBillDetail(req, cb) {
        let resp = new DescribeBillDetailResponse();
        this.request("DescribeBillDetail", req, resp, cb);
    }

    /**
     * This API is used to get bill details by product, project, region, billing mode, and tag by passing in parameters.
     * @param {DescribeBillSummaryRequest} req
     * @param {function(string, DescribeBillSummaryResponse):void} cb
     * @public
     */
    DescribeBillSummary(req, cb) {
        let resp = new DescribeBillSummaryResponse();
        this.request("DescribeBillSummary", req, resp, cb);
    }

    /**
     * This API is used to get the bill summarized by billing mode.
     * @param {DescribeBillSummaryByPayModeRequest} req
     * @param {function(string, DescribeBillSummaryByPayModeResponse):void} cb
     * @public
     */
    DescribeBillSummaryByPayMode(req, cb) {
        let resp = new DescribeBillSummaryByPayModeResponse();
        this.request("DescribeBillSummaryByPayMode", req, resp, cb);
    }

    /**
     * This API is used to query COS usage details.
     * @param {DescribeDosageCosDetailByDateRequest} req
     * @param {function(string, DescribeDosageCosDetailByDateResponse):void} cb
     * @public
     */
    DescribeDosageCosDetailByDate(req, cb) {
        let resp = new DescribeDosageCosDetailByDateResponse();
        this.request("DescribeDosageCosDetailByDate", req, resp, cb);
    }

    /**
     * This API is used to obtain consumption details summarized by product.
     * @param {DescribeCostSummaryByProductRequest} req
     * @param {function(string, DescribeCostSummaryByProductResponse):void} cb
     * @public
     */
    DescribeCostSummaryByProduct(req, cb) {
        let resp = new DescribeCostSummaryByProductResponse();
        this.request("DescribeCostSummaryByProduct", req, resp, cb);
    }

    /**
     * This API is used to get pay-on-behalf bills of the admin account (bill details).
Note: The API request may fail due to network instability or other exceptions. In this case, we recommend you manually retry the request when the API request fails.
     * @param {DescribeBillDetailForOrganizationRequest} req
     * @param {function(string, DescribeBillDetailForOrganizationResponse):void} cb
     * @public
     */
    DescribeBillDetailForOrganization(req, cb) {
        let resp = new DescribeBillDetailForOrganizationResponse();
        this.request("DescribeBillDetailForOrganization", req, resp, cb);
    }

    /**
     * This API is used to check the Tencent Cloud account balance.
     * @param {DescribeAccountBalanceRequest} req
     * @param {function(string, DescribeAccountBalanceResponse):void} cb
     * @public
     */
    DescribeAccountBalance(req, cb) {
        let resp = new DescribeAccountBalanceResponse();
        this.request("DescribeAccountBalance", req, resp, cb);
    }

    /**
     * This API is used to query voucher usage details.
     * @param {DescribeVoucherUsageDetailsRequest} req
     * @param {function(string, DescribeVoucherUsageDetailsResponse):void} cb
     * @public
     */
    DescribeVoucherUsageDetails(req, cb) {
        let resp = new DescribeVoucherUsageDetailsResponse();
        this.request("DescribeVoucherUsageDetails", req, resp, cb);
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
     * This API is used to get the cost distribution over different tags.
     * @param {DescribeBillSummaryByTagRequest} req
     * @param {function(string, DescribeBillSummaryByTagResponse):void} cb
     * @public
     */
    DescribeBillSummaryByTag(req, cb) {
        let resp = new DescribeBillSummaryByTagResponse();
        this.request("DescribeBillSummaryByTag", req, resp, cb);
    }

    /**
     * This API is used to get bills summarized by product, project, region, billing mode, and tag by passing in parameters.
     * @param {DescribeBillSummaryForOrganizationRequest} req
     * @param {function(string, DescribeBillSummaryForOrganizationResponse):void} cb
     * @public
     */
    DescribeBillSummaryForOrganization(req, cb) {
        let resp = new DescribeBillSummaryForOrganizationResponse();
        this.request("DescribeBillSummaryForOrganization", req, resp, cb);
    }

    /**
     * This API is used to get cost allocation tags.
     * @param {DescribeTagListRequest} req
     * @param {function(string, DescribeTagListResponse):void} cb
     * @public
     */
    DescribeTagList(req, cb) {
        let resp = new DescribeTagListResponse();
        this.request("DescribeTagList", req, resp, cb);
    }

    /**
     * This API is used to get bill download URLs for L0, L1, L2, and L3 bills and bill packs.
     * @param {DescribeBillDownloadUrlRequest} req
     * @param {function(string, DescribeBillDownloadUrlResponse):void} cb
     * @public
     */
    DescribeBillDownloadUrl(req, cb) {
        let resp = new DescribeBillDownloadUrlResponse();
        this.request("DescribeBillDownloadUrl", req, resp, cb);
    }

    /**
     * u200cThis API is used to batch cancel cost allocation tags.
     * @param {DeleteAllocationTagRequest} req
     * @param {function(string, DeleteAllocationTagResponse):void} cb
     * @public
     */
    DeleteAllocationTag(req, cb) {
        let resp = new DeleteAllocationTagResponse();
        this.request("DeleteAllocationTag", req, resp, cb);
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
     * This API is used to query consumption details.
     * @param {DescribeCostDetailRequest} req
     * @param {function(string, DescribeCostDetailResponse):void} cb
     * @public
     */
    DescribeCostDetail(req, cb) {
        let resp = new DescribeCostDetailResponse();
        this.request("DescribeCostDetail", req, resp, cb);
    }


}
module.exports = BillingClient;
