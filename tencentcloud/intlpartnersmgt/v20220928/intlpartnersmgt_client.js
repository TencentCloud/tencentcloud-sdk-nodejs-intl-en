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
const SummaryDetails = models.SummaryDetails;
const QueryDirectCustomersCreditData = models.QueryDirectCustomersCreditData;
const DescribeCustomerBillSummaryResponse = models.DescribeCustomerBillSummaryResponse;
const CreateAndSendClientInvitationMailResponse = models.CreateAndSendClientInvitationMailResponse;
const CustomerBillDetailData = models.CustomerBillDetailData;
const RegionSummaryOverviewItem = models.RegionSummaryOverviewItem;
const DescribeCustomerBillDownloadUrlRequest = models.DescribeCustomerBillDownloadUrlRequest;
const DescribeCustomerUinData = models.DescribeCustomerUinData;
const CountryCodeItem = models.CountryCodeItem;
const DescribeBillSummaryByRegionRequest = models.DescribeBillSummaryByRegionRequest;
const QueryCreditByUinListResponse = models.QueryCreditByUinListResponse;
const QueryCreditQuotaResponse = models.QueryCreditQuotaResponse;
const QueryCreditAllocationHistoryResponse = models.QueryCreditAllocationHistoryResponse;
const CreateAccountRequest = models.CreateAccountRequest;
const DescribeBillSummaryRequest = models.DescribeBillSummaryRequest;
const QueryDirectCustomersCreditRequest = models.QueryDirectCustomersCreditRequest;
const QueryCreditQuotaRequest = models.QueryCreditQuotaRequest;
const QueryCustomerBillingQuotaData = models.QueryCustomerBillingQuotaData;
const QueryPartnerCreditRequest = models.QueryPartnerCreditRequest;
const DescribeBillSummaryByProductRequest = models.DescribeBillSummaryByProductRequest;
const ModifyClientRemarkResponse = models.ModifyClientRemarkResponse;
const QueryPartnerCreditResponse = models.QueryPartnerCreditResponse;
const QueryVoucherListByUinResponse = models.QueryVoucherListByUinResponse;
const QueryVoucherPoolRequest = models.QueryVoucherPoolRequest;
const QueryVoucherListByUinItem = models.QueryVoucherListByUinItem;
const PolicyProductList = models.PolicyProductList;
const QueryCustomerBillingQuotaResponse = models.QueryCustomerBillingQuotaResponse;
const DescribeCustomerBillSummaryRequest = models.DescribeCustomerBillSummaryRequest;
const DescribeBillSummaryByPayModeResponse = models.DescribeBillSummaryByPayModeResponse;
const QueryAccountVerificationStatusResponse = models.QueryAccountVerificationStatusResponse;
const AllocateCustomerCreditRequest = models.AllocateCustomerCreditRequest;
const DescribeBillDownloadUrlRequest = models.DescribeBillDownloadUrlRequest;
const DescribeBillSummaryByPayModeRequest = models.DescribeBillSummaryByPayModeRequest;
const GetCountryCodesResponse = models.GetCountryCodesResponse;
const AllocateCreditPoolRequest = models.AllocateCreditPoolRequest;
const AllocateCustomerCreditResponse = models.AllocateCustomerCreditResponse;
const QueryCustomersCreditRequest = models.QueryCustomersCreditRequest;
const GetCountryCodesRequest = models.GetCountryCodesRequest;
const ForceQNResponse = models.ForceQNResponse;
const PayModeSummaryOverviewItem = models.PayModeSummaryOverviewItem;
const QueryPendingCustomersItem = models.QueryPendingCustomersItem;
const QueryDirectCustomersCreditResponse = models.QueryDirectCustomersCreditResponse;
const DescribeBillDownloadUrlResponse = models.DescribeBillDownloadUrlResponse;
const DescribeCustomerUinRequest = models.DescribeCustomerUinRequest;
const DescribeBillSummaryResponse = models.DescribeBillSummaryResponse;
const QueryVoucherAmountByUinRequest = models.QueryVoucherAmountByUinRequest;
const DescribeCustomerInfoResponse = models.DescribeCustomerInfoResponse;
const QueryVoucherPoolResponse = models.QueryVoucherPoolResponse;
const QueryAccountVerificationStatusRequest = models.QueryAccountVerificationStatusRequest;
const ActionSummaryOverviewItem = models.ActionSummaryOverviewItem;
const QueryPendingClientsV2Response = models.QueryPendingClientsV2Response;
const AllocateCreditPoolResponse = models.AllocateCreditPoolResponse;
const DescribeBillDetailResponse = models.DescribeBillDetailResponse;
const QueryCreditAllocationHistoryRequest = models.QueryCreditAllocationHistoryRequest;
const DescribeCustomerUinResponse = models.DescribeCustomerUinResponse;
const ApproveClientApplyRequest = models.ApproveClientApplyRequest;
const DescribeCustomerBillDetailRequest = models.DescribeCustomerBillDetailRequest;
const QueryCustomersCreditData = models.QueryCustomersCreditData;
const QueryCustomersCreditResponse = models.QueryCustomersCreditResponse;
const SendVerifyCodeRequest = models.SendVerifyCodeRequest;
const QueryVoucherListByUinRequest = models.QueryVoucherListByUinRequest;
const QueryVoucherAmountByUinResponse = models.QueryVoucherAmountByUinResponse;
const QueryVoucherAmountByUinItem = models.QueryVoucherAmountByUinItem;
const QueryCreditAllocationHistoryData = models.QueryCreditAllocationHistoryData;
const BusinessInfo = models.BusinessInfo;
const DescribeBillSummaryByProductResponse = models.DescribeBillSummaryByProductResponse;
const DescribeCustomerBillDetailResponse = models.DescribeCustomerBillDetailResponse;
const DescribeBillSummaryByRegionResponse = models.DescribeBillSummaryByRegionResponse;
const DescribeCustomerBillDownloadUrlResponse = models.DescribeCustomerBillDownloadUrlResponse;
const DescribeBillDetailRequest = models.DescribeBillDetailRequest;
const QueryCreditByUinListRequest = models.QueryCreditByUinListRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const ApproveClientApplyResponse = models.ApproveClientApplyResponse;
const QueryPendingClientsV2Request = models.QueryPendingClientsV2Request;
const TagInfo = models.TagInfo;
const QueryPolicyProductListByCodeRequest = models.QueryPolicyProductListByCodeRequest;
const BusinessSummaryOverviewItem = models.BusinessSummaryOverviewItem;
const ForceQNRequest = models.ForceQNRequest;
const DescribeCustomerInfoRequest = models.DescribeCustomerInfoRequest;
const QueryPolicyProductListByCodeResponse = models.QueryPolicyProductListByCodeResponse;
const QueryVoucherListByUinVoucherItem = models.QueryVoucherListByUinVoucherItem;
const ModifyClientRemarkRequest = models.ModifyClientRemarkRequest;
const BillDetailData = models.BillDetailData;
const QueryCustomerBillingQuotaRequest = models.QueryCustomerBillingQuotaRequest;
const DescribeCustomerInfoData = models.DescribeCustomerInfoData;
const CreateAndSendClientInvitationMailRequest = models.CreateAndSendClientInvitationMailRequest;
const SendVerifyCodeResponse = models.SendVerifyCodeResponse;


/**
 * intlpartnersmgt client
 * @class
 */
class IntlpartnersmgtClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("intlpartnersmgt.tencentcloudapi.com", "2022-09-28", credential, region, profile);
    }
    
    /**
     * This API is used to query the list of customer UINs.
     * @param {DescribeCustomerUinRequest} req
     * @param {function(string, DescribeCustomerUinResponse):void} cb
     * @public
     */
    DescribeCustomerUin(req, cb) {
        let resp = new DescribeCustomerUinResponse();
        this.request("DescribeCustomerUin", req, resp, cb);
    }

    /**
     * This API is used for a partner to set credit for a customer, such as increasing or lowering the credit and setting it to 0.
1. The credit is valid permanently and will not be zeroed regularly.
2. The customer's service will be suspended when its available credit is set to 0, so caution should be exercised with this operation.
3. To prevent the customer from making new purchases without affecting their use of previously purchased products, the partner can set their available credit to 0 after obtaining the non-stop feature privilege from the channel manager.
4. The set credit is an increment of the current available credit and cannot exceed the remaining allocable credit. Setting the credit to a negative value indicates that it will be repossessed. The available credit can be set to 0 at the minimum.
     * @param {AllocateCustomerCreditRequest} req
     * @param {function(string, AllocateCustomerCreditResponse):void} cb
     * @public
     */
    AllocateCustomerCredit(req, cb) {
        let resp = new AllocateCustomerCreditResponse();
        this.request("AllocateCustomerCredit", req, resp, cb);
    }

    /**
     * Description: This API is used by resellers to query the list of sub-customers pending review. Note: This API is used to apply for the allowlist. If needed, please contact your business representative.

Callable roles: Reseller, Distributer, Second-level reseller
     * @param {QueryPendingClientsV2Request} req
     * @param {function(string, QueryPendingClientsV2Response):void} cb
     * @public
     */
    QueryPendingClientsV2(req, cb) {
        let resp = new QueryPendingClientsV2Response();
        this.request("QueryPendingClientsV2", req, resp, cb);
    }

    /**
     * This API is used to obtain country/region codes.
     * @param {GetCountryCodesRequest} req
     * @param {function(string, GetCountryCodesResponse):void} cb
     * @public
     */
    GetCountryCodes(req, cb) {
        let resp = new GetCountryCodesResponse();
        this.request("GetCountryCodes", req, resp, cb);
    }

    /**
     * This API is used to modify customer remarks.
     * @param {ModifyClientRemarkRequest} req
     * @param {function(string, ModifyClientRemarkResponse):void} cb
     * @public
     */
    ModifyClientRemark(req, cb) {
        let resp = new ModifyClientRemarkResponse();
        this.request("ModifyClientRemark", req, resp, cb);
    }

    /**
     * This API is used for a partner to query its own total credit, available credit, and used credit in USD.
     * @param {QueryPartnerCreditRequest} req
     * @param {function(string, QueryPartnerCreditResponse):void} cb
     * @public
     */
    QueryPartnerCredit(req, cb) {
        let resp = new QueryPartnerCreditResponse();
        this.request("QueryPartnerCredit", req, resp, cb);
    }

    /**
     * Description: This API is used by resellers to review applications to become sub-customers. Note: This API is used to apply for the allowlist. If needed, please contact your business representative.

Callable roles: Reseller, Distributer, Second-level reseller
     * @param {ApproveClientApplyRequest} req
     * @param {function(string, ApproveClientApplyResponse):void} cb
     * @public
     */
    ApproveClientApply(req, cb) {
        let resp = new ApproveClientApplyResponse();
        this.request("ApproveClientApply", req, resp, cb);
    }

    /**
     * This API is used to query customer credits.
     * @param {QueryCreditQuotaRequest} req
     * @param {function(string, QueryCreditQuotaResponse):void} cb
     * @public
     */
    QueryCreditQuota(req, cb) {
        let resp = new QueryCreditQuotaResponse();
        this.request("QueryCreditQuota", req, resp, cb);
    }

    /**
     * This API is used to query the customer information.
     * @param {DescribeCustomerInfoRequest} req
     * @param {function(string, DescribeCustomerInfoResponse):void} cb
     * @public
     */
    DescribeCustomerInfo(req, cb) {
        let resp = new DescribeCustomerInfoResponse();
        this.request("DescribeCustomerInfo", req, resp, cb);
    }

    /**
     * This API is used to send a verification code for account registration.
     * @param {SendVerifyCodeRequest} req
     * @param {function(string, SendVerifyCodeResponse):void} cb
     * @public
     */
    SendVerifyCode(req, cb) {
        let resp = new SendVerifyCodeResponse();
        this.request("SendVerifyCode", req, resp, cb);
    }

    /**
     * This API is used to query the voucher list based on the customer UIN.
     * @param {QueryVoucherListByUinRequest} req
     * @param {function(string, QueryVoucherListByUinResponse):void} cb
     * @public
     */
    QueryVoucherListByUin(req, cb) {
        let resp = new QueryVoucherListByUinResponse();
        this.request("QueryVoucherListByUin", req, resp, cb);
    }

    /**
     * This API is used to allocate credit pools to second-level resellers by distributors.
     * @param {AllocateCreditPoolRequest} req
     * @param {function(string, AllocateCreditPoolResponse):void} cb
     * @public
     */
    AllocateCreditPool(req, cb) {
        let resp = new AllocateCreditPoolResponse();
        this.request("AllocateCreditPool", req, resp, cb);
    }

    /**
     * This API is used to query bill details by customers.
     * @param {DescribeBillDetailRequest} req
     * @param {function(string, DescribeBillDetailResponse):void} cb
     * @public
     */
    DescribeBillDetail(req, cb) {
        let resp = new DescribeBillDetailResponse();
        this.request("DescribeBillDetail", req, resp, cb);
    }

    /**
     * External API for the L1 billing of the customer billing center
     * @param {DescribeBillSummaryRequest} req
     * @param {function(string, DescribeBillSummaryResponse):void} cb
     * @public
     */
    DescribeBillSummary(req, cb) {
        let resp = new DescribeBillSummaryResponse();
        this.request("DescribeBillSummary", req, resp, cb);
    }

    /**
     * This API is used to obtain the total amount of customer bills by payment mode.
     * @param {DescribeBillSummaryByPayModeRequest} req
     * @param {function(string, DescribeBillSummaryByPayModeResponse):void} cb
     * @public
     */
    DescribeBillSummaryByPayMode(req, cb) {
        let resp = new DescribeBillSummaryByPayModeResponse();
        this.request("DescribeBillSummaryByPayMode", req, resp, cb);
    }

    /**
     * This API is used to apply for the allowlist. If needed, please contact your business representative.Directions:
1.This API is used to create an invitation link, which you can send to a specified email address.
2.Customer need to click the invitation link in the email, fill in and submit the required information.
3.You can review the customer's application in customer management  after submission.

Note:This API is used to manually send the invitation link to the customer if the specified email does not receive it.
     * @param {CreateAndSendClientInvitationMailRequest} req
     * @param {function(string, CreateAndSendClientInvitationMailResponse):void} cb
     * @public
     */
    CreateAndSendClientInvitationMail(req, cb) {
        let resp = new CreateAndSendClientInvitationMailResponse();
        this.request("CreateAndSendClientInvitationMail", req, resp, cb);
    }

    /**
     * This API is used to download billing files and return billing file URLs by customers.
     * @param {DescribeBillDownloadUrlRequest} req
     * @param {function(string, DescribeBillDownloadUrlResponse):void} cb
     * @public
     */
    DescribeBillDownloadUrl(req, cb) {
        let resp = new DescribeBillDownloadUrlResponse();
        this.request("DescribeBillDownloadUrl", req, resp, cb);
    }

    /**
     * This API is used to query the credit of users in the list.
     * @param {QueryCreditByUinListRequest} req
     * @param {function(string, QueryCreditByUinListResponse):void} cb
     * @public
     */
    QueryCreditByUinList(req, cb) {
        let resp = new QueryCreditByUinListResponse();
        this.request("QueryCreditByUinList", req, resp, cb);
    }

    /**
     * This API is used to query the credits of direct customers.
     * @param {QueryDirectCustomersCreditRequest} req
     * @param {function(string, QueryDirectCustomersCreditResponse):void} cb
     * @public
     */
    QueryDirectCustomersCredit(req, cb) {
        let resp = new QueryDirectCustomersCreditResponse();
        this.request("QueryDirectCustomersCredit", req, resp, cb);
    }

    /**
     * This API is used to create Tencent Cloud customer accounts for distributor/second-level resellers.After the account is created, it will be automatically bound to the partner account.Note:
1. Create a Tencent Cloud account. The entered email address and mobile phone number need to be verified by the partner for validity.
2.  Customers need to add personal information when logging in for the first time.
3.  This interface needs to be applied for allowlist usage. Please contact the channel manager to initiate the application process.
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        let resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
    }

    /**
     * This API is used to get the URL for downloading the customer bill file by reseller. The download conditions are as follows:
1. Detailed bills (billDetail and billDetailPack) can be downloaded starting from June 2022; resource bills (billResource and billResourcePack) can be downloaded starting from November 2023.
2. Bill packages (billDetailPack and billResourcePack) can only be downloaded after billing.
     * @param {DescribeCustomerBillDownloadUrlRequest} req
     * @param {function(string, DescribeCustomerBillDownloadUrlResponse):void} cb
     * @public
     */
    DescribeCustomerBillDownloadUrl(req, cb) {
        let resp = new DescribeCustomerBillDownloadUrlResponse();
        this.request("DescribeCustomerBillDownloadUrl", req, resp, cb);
    }

    /**
     * This API is used for a partner to the credits and basic information of cutomers.
     * @param {QueryCustomersCreditRequest} req
     * @param {function(string, QueryCustomersCreditResponse):void} cb
     * @public
     */
    QueryCustomersCredit(req, cb) {
        let resp = new QueryCustomersCreditResponse();
        this.request("QueryCustomersCredit", req, resp, cb);
    }

    /**
     * This API is used to obtain the total amount of customer bills by region.
     * @param {DescribeBillSummaryByRegionRequest} req
     * @param {function(string, DescribeBillSummaryByRegionResponse):void} cb
     * @public
     */
    DescribeBillSummaryByRegion(req, cb) {
        let resp = new DescribeBillSummaryByRegionResponse();
        this.request("DescribeBillSummaryByRegion", req, resp, cb);
    }

    /**
     * This API is used to query the customer bill details by resellers.
     * @param {DescribeCustomerBillDetailRequest} req
     * @param {function(string, DescribeCustomerBillDetailResponse):void} cb
     * @public
     */
    DescribeCustomerBillDetail(req, cb) {
        let resp = new DescribeCustomerBillDetailResponse();
        this.request("DescribeCustomerBillDetail", req, resp, cb);
    }

    /**
     * This API is used to query the total amount of customer bills.
     * @param {DescribeCustomerBillSummaryRequest} req
     * @param {function(string, DescribeCustomerBillSummaryResponse):void} cb
     * @public
     */
    DescribeCustomerBillSummary(req, cb) {
        let resp = new DescribeCustomerBillSummaryResponse();
        this.request("DescribeCustomerBillSummary", req, resp, cb);
    }

    /**
     * This API is used to query the voucher quota based on the customer UIN.
     * @param {QueryVoucherAmountByUinRequest} req
     * @param {function(string, QueryVoucherAmountByUinResponse):void} cb
     * @public
     */
    QueryVoucherAmountByUin(req, cb) {
        let resp = new QueryVoucherAmountByUinResponse();
        this.request("QueryVoucherAmountByUin", req, resp, cb);
    }

    /**
     * This API is used to set and cancel forced service suspension.
Note:Reseller need to be allowlisted to use the API, please contact your business representative to apply for allowlist.
     * @param {ForceQNRequest} req
     * @param {function(string, ForceQNResponse):void} cb
     * @public
     */
    ForceQN(req, cb) {
        let resp = new ForceQNResponse();
        this.request("ForceQN", req, resp, cb);
    }

    /**
     * This API is used to query the voucher quota pool.
     * @param {QueryVoucherPoolRequest} req
     * @param {function(string, QueryVoucherPoolResponse):void} cb
     * @public
     */
    QueryVoucherPool(req, cb) {
        let resp = new QueryVoucherPoolResponse();
        this.request("QueryVoucherPool", req, resp, cb);
    }

    /**
     * This API is used to query the account verification status.
     * @param {QueryAccountVerificationStatusRequest} req
     * @param {function(string, QueryAccountVerificationStatusResponse):void} cb
     * @public
     */
    QueryAccountVerificationStatus(req, cb) {
        let resp = new QueryAccountVerificationStatusResponse();
        this.request("QueryAccountVerificationStatus", req, resp, cb);
    }

    /**
     * This API is used to query the product list information within the specified policy range. To call this API, contact your account manager to add it to the allowlist.
     * @param {QueryPolicyProductListByCodeRequest} req
     * @param {function(string, QueryPolicyProductListByCodeResponse):void} cb
     * @public
     */
    QueryPolicyProductListByCode(req, cb) {
        let resp = new QueryPolicyProductListByCodeResponse();
        this.request("QueryPolicyProductListByCode", req, resp, cb);
    }

    /**
     * This API is used to query all the credit allocation records of a single customer.
     * @param {QueryCreditAllocationHistoryRequest} req
     * @param {function(string, QueryCreditAllocationHistoryResponse):void} cb
     * @public
     */
    QueryCreditAllocationHistory(req, cb) {
        let resp = new QueryCreditAllocationHistoryResponse();
        this.request("QueryCreditAllocationHistory", req, resp, cb);
    }

    /**
     * This API is used to obtain the total amount of customer bills by product.
     * @param {DescribeBillSummaryByProductRequest} req
     * @param {function(string, DescribeBillSummaryByProductResponse):void} cb
     * @public
     */
    DescribeBillSummaryByProduct(req, cb) {
        let resp = new DescribeBillSummaryByProductResponse();
        this.request("DescribeBillSummaryByProduct", req, resp, cb);
    }

    /**
     * Description: This API is used for a sub-customer to real-time query its own total credit and remaining credit in USD.

Callable roles: Sub-customer
     * @param {QueryCustomerBillingQuotaRequest} req
     * @param {function(string, QueryCustomerBillingQuotaResponse):void} cb
     * @public
     */
    QueryCustomerBillingQuota(req, cb) {
        let resp = new QueryCustomerBillingQuotaResponse();
        this.request("QueryCustomerBillingQuota", req, resp, cb);
    }


}
module.exports = IntlpartnersmgtClient;
