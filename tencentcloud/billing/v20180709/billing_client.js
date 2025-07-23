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
const CreateAllocationUnitRequest = models.CreateAllocationUnitRequest;
const DeleteAllocationTagRequest = models.DeleteAllocationTagRequest;
const DescribeCostSummaryByProductRequest = models.DescribeCostSummaryByProductRequest;
const DescribeCostExplorerSummaryResponse = models.DescribeCostExplorerSummaryResponse;
const ConsumptionBusinessSummaryDataItem = models.ConsumptionBusinessSummaryDataItem;
const ModifyAllocationRuleRequest = models.ModifyAllocationRuleRequest;
const DeleteAllocationRuleRequest = models.DeleteAllocationRuleRequest;
const CreateAllocationRuleResponse = models.CreateAllocationRuleResponse;
const BillTagInfo = models.BillTagInfo;
const ConditionBusiness = models.ConditionBusiness;
const AnalyseActionTypeDetail = models.AnalyseActionTypeDetail;
const DescribeCostExplorerSummaryRequest = models.DescribeCostExplorerSummaryRequest;
const DescribeCostSummaryByProductResponse = models.DescribeCostSummaryByProductResponse;
const DescribeAllocationTreeResponse = models.DescribeAllocationTreeResponse;
const DeleteAllocationTagResponse = models.DeleteAllocationTagResponse;
const AllocationTree = models.AllocationTree;
const DescribeBillDetailForOrganizationResponse = models.DescribeBillDetailForOrganizationResponse;
const BillDetailComponentConfig = models.BillDetailComponentConfig;
const DescribeCostSummaryByResourceResponse = models.DescribeCostSummaryByResourceResponse;
const DescribeBillSummaryByRegionRequest = models.DescribeBillSummaryByRegionRequest;
const AdjustInfoDetail = models.AdjustInfoDetail;
const CreateAllocationRuleRequest = models.CreateAllocationRuleRequest;
const ConsumptionRegionSummaryDataItem = models.ConsumptionRegionSummaryDataItem;
const BusinessSummaryInfo = models.BusinessSummaryInfo;
const DescribeBillSummaryRequest = models.DescribeBillSummaryRequest;
const DescribeBillResourceSummaryResponse = models.DescribeBillResourceSummaryResponse;
const DescribeGatherRuleDetailRequest = models.DescribeGatherRuleDetailRequest;
const DistributionBillDetail = models.DistributionBillDetail;
const DescribeDosageCosDetailByDateRequest = models.DescribeDosageCosDetailByDateRequest;
const DescribeBillAdjustInfoResponse = models.DescribeBillAdjustInfoResponse;
const DescribeAllocationRuleDetailRequest = models.DescribeAllocationRuleDetailRequest;
const DescribeAllocationUnitDetailResponse = models.DescribeAllocationUnitDetailResponse;
const DescribeBillSummaryByProductRequest = models.DescribeBillSummaryByProductRequest;
const AllocationUnit = models.AllocationUnit;
const AllocationRationExpression = models.AllocationRationExpression;
const DescribeVoucherUsageDetailsResponse = models.DescribeVoucherUsageDetailsResponse;
const ConsumptionSummaryTotal = models.ConsumptionSummaryTotal;
const BillDistributionResourceSummary = models.BillDistributionResourceSummary;
const DescribeCostDetailResponse = models.DescribeCostDetailResponse;
const VoucherInfos = models.VoucherInfos;
const DescribeCostSummaryByProjectResponse = models.DescribeCostSummaryByProjectResponse;
const AnalyseProjectDetail = models.AnalyseProjectDetail;
const ProjectSummaryOverviewItem = models.ProjectSummaryOverviewItem;
const DescribeBillSummaryByTagResponse = models.DescribeBillSummaryByTagResponse;
const ModifyGatherRuleRequest = models.ModifyGatherRuleRequest;
const DescribeBillSummaryByPayModeResponse = models.DescribeBillSummaryByPayModeResponse;
const DescribeBillSummaryByTagRequest = models.DescribeBillSummaryByTagRequest;
const AnalyseDetail = models.AnalyseDetail;
const DeleteGatherRuleRequest = models.DeleteGatherRuleRequest;
const DescribeAllocationRuleSummaryResponse = models.DescribeAllocationRuleSummaryResponse;
const AnalyseAmountDetail = models.AnalyseAmountDetail;
const ModifyGatherRuleResponse = models.ModifyGatherRuleResponse;
const CreateGatherRuleRequest = models.CreateGatherRuleRequest;
const DescribeBillResourceSummaryForOrganizationRequest = models.DescribeBillResourceSummaryForOrganizationRequest;
const DescribeCostSummaryByRegionRequest = models.DescribeCostSummaryByRegionRequest;
const ConsumptionSummaryTrend = models.ConsumptionSummaryTrend;
const DescribeBillDownloadUrlRequest = models.DescribeBillDownloadUrlRequest;
const DescribeBillSummaryByPayModeRequest = models.DescribeBillSummaryByPayModeRequest;
const DeleteGatherRuleResponse = models.DeleteGatherRuleResponse;
const ApplicableProducts = models.ApplicableProducts;
const ConditionPayMode = models.ConditionPayMode;
const PayDealsResponse = models.PayDealsResponse;
const DescribeCostSummaryByProjectRequest = models.DescribeCostSummaryByProjectRequest;
const BillDetailAssociatedOrder = models.BillDetailAssociatedOrder;
const BillDetail = models.BillDetail;
const DescribeBillDetailResponse = models.DescribeBillDetailResponse;
const Deal = models.Deal;
const DescribeDealsByCondResponse = models.DescribeDealsByCondResponse;
const DescribeBillSummaryByProjectRequest = models.DescribeBillSummaryByProjectRequest;
const DescribeBillSummaryByProjectResponse = models.DescribeBillSummaryByProjectResponse;
const DescribeBillAdjustInfoRequest = models.DescribeBillAdjustInfoRequest;
const DeleteAllocationRuleResponse = models.DeleteAllocationRuleResponse;
const TagDataInfo = models.TagDataInfo;
const PayDealsRequest = models.PayDealsRequest;
const SummaryTotal = models.SummaryTotal;
const BusinessSummaryTotal = models.BusinessSummaryTotal;
const CostComponentSet = models.CostComponentSet;
const AnalyseHeaderDetail = models.AnalyseHeaderDetail;
const AnalysePayModeDetail = models.AnalysePayModeDetail;
const DescribeBillSummaryResponse = models.DescribeBillSummaryResponse;
const AnalyseOwnerUinDetail = models.AnalyseOwnerUinDetail;
const Conditions = models.Conditions;
const AnalyseTimeDetail = models.AnalyseTimeDetail;
const RegionSummaryOverviewItem = models.RegionSummaryOverviewItem;
const ConsumptionProjectSummaryDataItem = models.ConsumptionProjectSummaryDataItem;
const AnalyseRegionDetail = models.AnalyseRegionDetail;
const ProductInfo = models.ProductInfo;
const DescribeAllocationUnitDetailRequest = models.DescribeAllocationUnitDetailRequest;
const DescribeBillSummaryForOrganizationRequest = models.DescribeBillSummaryForOrganizationRequest;
const ActionSummaryOverviewItem = models.ActionSummaryOverviewItem;
const DescribeBillDetailForOrganizationRequest = models.DescribeBillDetailForOrganizationRequest;
const DescribeVoucherUsageDetailsRequest = models.DescribeVoucherUsageDetailsRequest;
const DescribeBillResourceSummaryRequest = models.DescribeBillResourceSummaryRequest;
const BillDetailComponent = models.BillDetailComponent;
const ConditionRegion = models.ConditionRegion;
const TagSummaryOverviewItem = models.TagSummaryOverviewItem;
const ConsumptionResourceSummaryConditionValue = models.ConsumptionResourceSummaryConditionValue;
const DescribeCostSummaryByRegionResponse = models.DescribeCostSummaryByRegionResponse;
const DescribeCostDetailRequest = models.DescribeCostDetailRequest;
const GatherRuleSummary = models.GatherRuleSummary;
const DescribeTagListRequest = models.DescribeTagListRequest;
const DescribeBillResourceSummaryForOrganizationResponse = models.DescribeBillResourceSummaryForOrganizationResponse;
const DescribeAllocationTreeRequest = models.DescribeAllocationTreeRequest;
const DescribeCostSummaryByResourceRequest = models.DescribeCostSummaryByResourceRequest;
const CreateAllocationTagRequest = models.CreateAllocationTagRequest;
const ExcludedProducts = models.ExcludedProducts;
const PayModeSummaryOverviewItem = models.PayModeSummaryOverviewItem;
const DescribeAllocationRuleDetailResponse = models.DescribeAllocationRuleDetailResponse;
const UsageDetails = models.UsageDetails;
const AnalyseBusinessDetail = models.AnalyseBusinessDetail;
const AnalyseConditions = models.AnalyseConditions;
const CostDetail = models.CostDetail;
const DescribeBillSummaryByProductResponse = models.DescribeBillSummaryByProductResponse;
const DescribeBillSummaryByRegionResponse = models.DescribeBillSummaryByRegionResponse;
const CreateAllocationTagResponse = models.CreateAllocationTagResponse;
const ModifyAllocationUnitRequest = models.ModifyAllocationUnitRequest;
const DescribeBillDownloadUrlResponse = models.DescribeBillDownloadUrlResponse;
const ConsumptionResourceSummaryDataItem = models.ConsumptionResourceSummaryDataItem;
const DescribeAccountBalanceRequest = models.DescribeAccountBalanceRequest;
const DescribeBillDetailRequest = models.DescribeBillDetailRequest;
const AnalyseZoneDetail = models.AnalyseZoneDetail;
const DescribeVoucherInfoResponse = models.DescribeVoucherInfoResponse;
const AllocationRulesSummary = models.AllocationRulesSummary;
const SummaryDetail = models.SummaryDetail;
const DescribeAccountBalanceResponse = models.DescribeAccountBalanceResponse;
const BusinessSummaryOverviewItem = models.BusinessSummaryOverviewItem;
const CreateGatherRuleResponse = models.CreateGatherRuleResponse;
const UsageRecords = models.UsageRecords;
const ModifyAllocationRuleResponse = models.ModifyAllocationRuleResponse;
const DescribeVoucherInfoRequest = models.DescribeVoucherInfoRequest;
const DescribeDealsByCondRequest = models.DescribeDealsByCondRequest;
const CreateAllocationUnitResponse = models.CreateAllocationUnitResponse;
const DescribeDosageCosDetailByDateResponse = models.DescribeDosageCosDetailByDateResponse;
const AnalyseHeaderTimeDetail = models.AnalyseHeaderTimeDetail;
const AllocationRuleExpression = models.AllocationRuleExpression;
const DescribeBillSummaryForOrganizationResponse = models.DescribeBillSummaryForOrganizationResponse;
const DeleteAllocationUnitResponse = models.DeleteAllocationUnitResponse;
const ConditionProject = models.ConditionProject;
const DescribeTagListResponse = models.DescribeTagListResponse;
const CosDetailSets = models.CosDetailSets;
const DescribeAllocationRuleSummaryRequest = models.DescribeAllocationRuleSummaryRequest;
const ModifyAllocationUnitResponse = models.ModifyAllocationUnitResponse;
const AnalyseConditionDetail = models.AnalyseConditionDetail;
const BillResourceSummary = models.BillResourceSummary;
const DeleteAllocationUnitRequest = models.DeleteAllocationUnitRequest;
const DescribeGatherRuleDetailResponse = models.DescribeGatherRuleDetailResponse;
const AllocationRuleOverview = models.AllocationRuleOverview;


/**
 * billing client
 * @class
 */
class BillingClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("billing.intl.tencentcloudapi.com", "2018-07-09", credential, region, profile);
    }
    
    /**
     * Delete a collection rule.
     * @param {DeleteGatherRuleRequest} req
     * @param {function(string, DeleteGatherRuleResponse):void} cb
     * @public
     */
    DeleteGatherRule(req, cb) {
        let resp = new DeleteGatherRuleResponse();
        this.request("DeleteGatherRule", req, resp, cb);
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
     * This API is used to query all sharing rule overviews.
     * @param {DescribeAllocationRuleSummaryRequest} req
     * @param {function(string, DescribeAllocationRuleSummaryResponse):void} cb
     * @public
     */
    DescribeAllocationRuleSummary(req, cb) {
        let resp = new DescribeAllocationRuleSummaryResponse();
        this.request("DescribeAllocationRuleSummary", req, resp, cb);
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
     * Delete a cost allocation unit.
     * @param {DeleteAllocationUnitRequest} req
     * @param {function(string, DeleteAllocationUnitResponse):void} cb
     * @public
     */
    DeleteAllocationUnit(req, cb) {
        let resp = new DeleteAllocationUnitResponse();
        this.request("DeleteAllocationUnit", req, resp, cb);
    }

    /**
     * This API is used to create allocation units.
     * @param {CreateAllocationUnitRequest} req
     * @param {function(string, CreateAllocationUnitResponse):void} cb
     * @public
     */
    CreateAllocationUnit(req, cb) {
        let resp = new CreateAllocationUnitResponse();
        this.request("CreateAllocationUnit", req, resp, cb);
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
     * Delete sharing rule interface.
     * @param {DeleteAllocationRuleRequest} req
     * @param {function(string, DeleteAllocationRuleResponse):void} cb
     * @public
     */
    DeleteAllocationRule(req, cb) {
        let resp = new DeleteAllocationRuleResponse();
        this.request("DeleteAllocationRule", req, resp, cb);
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
     * This API is used to query sharing rule details.
     * @param {DescribeAllocationRuleDetailRequest} req
     * @param {function(string, DescribeAllocationRuleDetailResponse):void} cb
     * @public
     */
    DescribeAllocationRuleDetail(req, cb) {
        let resp = new DescribeAllocationRuleDetailResponse();
        this.request("DescribeAllocationRuleDetail", req, resp, cb);
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
     * This API is used to pay for an order.
     * @param {PayDealsRequest} req
     * @param {function(string, PayDealsResponse):void} cb
     * @public
     */
    PayDeals(req, cb) {
        let resp = new PayDealsResponse();
        this.request("PayDeals", req, resp, cb);
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
     * Create a collection rule.
     * @param {CreateGatherRuleRequest} req
     * @param {function(string, CreateGatherRuleResponse):void} cb
     * @public
     */
    CreateGatherRule(req, cb) {
        let resp = new CreateGatherRuleResponse();
        this.request("CreateGatherRule", req, resp, cb);
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
     * This API is used to query the collection rule details.
     * @param {DescribeGatherRuleDetailRequest} req
     * @param {function(string, DescribeGatherRuleDetailResponse):void} cb
     * @public
     */
    DescribeGatherRuleDetail(req, cb) {
        let resp = new DescribeGatherRuleDetailResponse();
        this.request("DescribeGatherRuleDetail", req, resp, cb);
    }

    /**
     * This API is used to query the cost tree.
     * @param {DescribeAllocationTreeRequest} req
     * @param {function(string, DescribeAllocationTreeResponse):void} cb
     * @public
     */
    DescribeAllocationTree(req, cb) {
        let resp = new DescribeAllocationTreeResponse();
        this.request("DescribeAllocationTree", req, resp, cb);
    }

    /**
     * Query the details of a cost allocation unit.
     * @param {DescribeAllocationUnitDetailRequest} req
     * @param {function(string, DescribeAllocationUnitDetailResponse):void} cb
     * @public
     */
    DescribeAllocationUnitDetail(req, cb) {
        let resp = new DescribeAllocationUnitDetailResponse();
        this.request("DescribeAllocationUnitDetail", req, resp, cb);
    }

    /**
     * This API is used to check whether the current UIN has any adjustment, enabling customers to proactively obtain the adjustment status faster.
     * @param {DescribeBillAdjustInfoRequest} req
     * @param {function(string, DescribeBillAdjustInfoResponse):void} cb
     * @public
     */
    DescribeBillAdjustInfo(req, cb) {
        let resp = new DescribeBillAdjustInfoResponse();
        this.request("DescribeBillAdjustInfo", req, resp, cb);
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
     * Create a sharing rule.
     * @param {CreateAllocationRuleRequest} req
     * @param {function(string, CreateAllocationRuleResponse):void} cb
     * @public
     */
    CreateAllocationRule(req, cb) {
        let resp = new CreateAllocationRuleResponse();
        this.request("CreateAllocationRule", req, resp, cb);
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
     * This API is used to modify cost allocation unit information.
     * @param {ModifyAllocationUnitRequest} req
     * @param {function(string, ModifyAllocationUnitResponse):void} cb
     * @public
     */
    ModifyAllocationUnit(req, cb) {
        let resp = new ModifyAllocationUnitResponse();
        this.request("ModifyAllocationUnit", req, resp, cb);
    }

    /**
     * Edit a collection rule.
     * @param {ModifyGatherRuleRequest} req
     * @param {function(string, ModifyGatherRuleResponse):void} cb
     * @public
     */
    ModifyGatherRule(req, cb) {
        let resp = new ModifyGatherRuleResponse();
        this.request("ModifyGatherRule", req, resp, cb);
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
     * Querying orders
     * @param {DescribeDealsByCondRequest} req
     * @param {function(string, DescribeDealsByCondResponse):void} cb
     * @public
     */
    DescribeDealsByCond(req, cb) {
        let resp = new DescribeDealsByCondResponse();
        this.request("DescribeDealsByCond", req, resp, cb);
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
     * Edit sharing rules.
     * @param {ModifyAllocationRuleRequest} req
     * @param {function(string, ModifyAllocationRuleResponse):void} cb
     * @public
     */
    ModifyAllocationRule(req, cb) {
        let resp = new ModifyAllocationRuleResponse();
        this.request("ModifyAllocationRule", req, resp, cb);
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
