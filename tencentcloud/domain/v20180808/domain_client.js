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
const UpdateProhibitionIntlBatchResponse = models.UpdateProhibitionIntlBatchResponse;
const DescribeIntlBatchOperationLogsResponse = models.DescribeIntlBatchOperationLogsResponse;
const SetIntlDomainAutoRenewResponse = models.SetIntlDomainAutoRenewResponse;
const DescribeIntlDomainPriceNewListRequest = models.DescribeIntlDomainPriceNewListRequest;
const CreateIntlDomainBatchRequest = models.CreateIntlDomainBatchRequest;
const SendIntlPhoneEmailCodeRequest = models.SendIntlPhoneEmailCodeRequest;
const CreateIntlPhoneEmailResponse = models.CreateIntlPhoneEmailResponse;
const DescribeIntlPhoneEmailListRequest = models.DescribeIntlPhoneEmailListRequest;
const RenewIntlDomainBatchRequest = models.RenewIntlDomainBatchRequest;
const BatchModifyIntlDomainInfoRequest = models.BatchModifyIntlDomainInfoRequest;
const SetIntlDomainAutoRenewRequest = models.SetIntlDomainAutoRenewRequest;
const DescribeIntlDomainPriceNewListResponse = models.DescribeIntlDomainPriceNewListResponse;
const BatchDomainBuyLog = models.BatchDomainBuyLog;
const CreateIntlTemplateResponse = models.CreateIntlTemplateResponse;
const TechnicalContact = models.TechnicalContact;
const DescribeIntlDomainListResponse = models.DescribeIntlDomainListResponse;
const IntlBatchDetails = models.IntlBatchDetails;
const IntlContactInfo = models.IntlContactInfo;
const CreateIntlPhoneEmailRequest = models.CreateIntlPhoneEmailRequest;
const IntlDomainInfo = models.IntlDomainInfo;
const SendIntlPhoneEmailCodeResponse = models.SendIntlPhoneEmailCodeResponse;
const DeleteIntlPhoneEmailResponse = models.DeleteIntlPhoneEmailResponse;
const DeleteIntlTemplateRequest = models.DeleteIntlTemplateRequest;
const CheckIntlDomainNewRequest = models.CheckIntlDomainNewRequest;
const BatchModifyIntlDomainInfoResponse = models.BatchModifyIntlDomainInfoResponse;
const RenewIntlDomainBatchResponse = models.RenewIntlDomainBatchResponse;
const AdminContact = models.AdminContact;
const DescribeIntlDomainListRequest = models.DescribeIntlDomainListRequest;
const BillingContact = models.BillingContact;
const UpdateProhibitionIntlBatchRequest = models.UpdateProhibitionIntlBatchRequest;
const DescribeIntlDomainBatchDetailsRequest = models.DescribeIntlDomainBatchDetailsRequest;
const ModifyOwnerIntlBatchResponse = models.ModifyOwnerIntlBatchResponse;
const DescribeIntlDomainRequest = models.DescribeIntlDomainRequest;
const ModifyOwnerIntlBatchRequest = models.ModifyOwnerIntlBatchRequest;
const TransferProhibitionIntlBatchRequest = models.TransferProhibitionIntlBatchRequest;
const IntlTemplate = models.IntlTemplate;
const DeleteIntlTemplateResponse = models.DeleteIntlTemplateResponse;
const DescribeIntlBatchDetailStatusRequest = models.DescribeIntlBatchDetailStatusRequest;
const DescribeIntlTemplateResponse = models.DescribeIntlTemplateResponse;
const TransferProhibitionIntlBatchResponse = models.TransferProhibitionIntlBatchResponse;
const DescribeIntlTemplateListRequest = models.DescribeIntlTemplateListRequest;
const DescribeIntlDomainBatchDetailsResponse = models.DescribeIntlDomainBatchDetailsResponse;
const TransferInIntlDomainBatchRequest = models.TransferInIntlDomainBatchRequest;
const DescribeIntlDomainResponse = models.DescribeIntlDomainResponse;
const CreateIntlTemplateRequest = models.CreateIntlTemplateRequest;
const DeleteIntlPhoneEmailRequest = models.DeleteIntlPhoneEmailRequest;
const DescribeIntlBatchOperationLogsRequest = models.DescribeIntlBatchOperationLogsRequest;
const RegistrantContact = models.RegistrantContact;
const DescribeIntlBatchDetailStatusResponse = models.DescribeIntlBatchDetailStatusResponse;
const IntlTemplateInfo = models.IntlTemplateInfo;
const DescribeIntlTemplateListResponse = models.DescribeIntlTemplateListResponse;
const CreateIntlDomainBatchResponse = models.CreateIntlDomainBatchResponse;
const BatchModifyIntlDomainDNSRequest = models.BatchModifyIntlDomainDNSRequest;
const BatchModifyIntlDomainDNSResponse = models.BatchModifyIntlDomainDNSResponse;
const BatchDomainBuyDetails = models.BatchDomainBuyDetails;
const DescribeIntlTemplateRequest = models.DescribeIntlTemplateRequest;
const TransferInIntlDomainBatchResponse = models.TransferInIntlDomainBatchResponse;
const CheckIntlDomainNewResponse = models.CheckIntlDomainNewResponse;
const PriceInfoNew = models.PriceInfoNew;
const DescribeIntlPhoneEmailListResponse = models.DescribeIntlPhoneEmailListResponse;
const IntlPhoneEmailLists = models.IntlPhoneEmailLists;


/**
 * domain client
 * @class
 */
class DomainClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("domain.intl.tencentcloudapi.com", "2018-08-08", credential, region, profile);
    }
    
    /**
     * This API is used to bulk modify DNS servers for domains.
     * @param {BatchModifyIntlDomainDNSRequest} req
     * @param {function(string, BatchModifyIntlDomainDNSResponse):void} cb
     * @public
     */
    BatchModifyIntlDomainDNS(req, cb) {
        let resp = new BatchModifyIntlDomainDNSResponse();
        this.request("BatchModifyIntlDomainDNS", req, resp, cb);
    }

    /**
     * This API is used to bulk modify registrant information.
     * @param {BatchModifyIntlDomainInfoRequest} req
     * @param {function(string, BatchModifyIntlDomainInfoResponse):void} cb
     * @public
     */
    BatchModifyIntlDomainInfo(req, cb) {
        let resp = new BatchModifyIntlDomainInfoResponse();
        this.request("BatchModifyIntlDomainInfo", req, resp, cb);
    }

    /**
     * This API is used to get the details of a registrant profile.
     * @param {DescribeIntlTemplateRequest} req
     * @param {function(string, DescribeIntlTemplateResponse):void} cb
     * @public
     */
    DescribeIntlTemplate(req, cb) {
        let resp = new DescribeIntlTemplateResponse();
        this.request("DescribeIntlTemplate", req, resp, cb);
    }

    /**
     * This API is used to bulk set transfer prohibition for domains.
     * @param {TransferProhibitionIntlBatchRequest} req
     * @param {function(string, TransferProhibitionIntlBatchResponse):void} cb
     * @public
     */
    TransferProhibitionIntlBatch(req, cb) {
        let resp = new TransferProhibitionIntlBatchResponse();
        this.request("TransferProhibitionIntlBatch", req, resp, cb);
    }

    /**
     * This API is used to add a registrant profile.
     * @param {CreateIntlTemplateRequest} req
     * @param {function(string, CreateIntlTemplateResponse):void} cb
     * @public
     */
    CreateIntlTemplate(req, cb) {
        let resp = new CreateIntlTemplateResponse();
        this.request("CreateIntlTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the list of registrant profiles.
     * @param {DescribeIntlTemplateListRequest} req
     * @param {function(string, DescribeIntlTemplateListResponse):void} cb
     * @public
     */
    DescribeIntlTemplateList(req, cb) {
        let resp = new DescribeIntlTemplateListResponse();
        this.request("DescribeIntlTemplateList", req, resp, cb);
    }

    /**
     * This API is used to delete a mobile number or an email address.
     * @param {DeleteIntlPhoneEmailRequest} req
     * @param {function(string, DeleteIntlPhoneEmailResponse):void} cb
     * @public
     */
    DeleteIntlPhoneEmail(req, cb) {
        let resp = new DeleteIntlPhoneEmailResponse();
        this.request("DeleteIntlPhoneEmail", req, resp, cb);
    }

    /**
     * This API is used to check whether a domain is available for registration.
     * @param {CheckIntlDomainNewRequest} req
     * @param {function(string, CheckIntlDomainNewResponse):void} cb
     * @public
     */
    CheckIntlDomainNew(req, cb) {
        let resp = new CheckIntlDomainNewResponse();
        this.request("CheckIntlDomainNew", req, resp, cb);
    }

    /**
     * This API is used to bulk register domains.
     * @param {CreateIntlDomainBatchRequest} req
     * @param {function(string, CreateIntlDomainBatchResponse):void} cb
     * @public
     */
    CreateIntlDomainBatch(req, cb) {
        let resp = new CreateIntlDomainBatchResponse();
        this.request("CreateIntlDomainBatch", req, resp, cb);
    }

    /**
     * This API is used to set auto-renewal.
     * @param {SetIntlDomainAutoRenewRequest} req
     * @param {function(string, SetIntlDomainAutoRenewResponse):void} cb
     * @public
     */
    SetIntlDomainAutoRenew(req, cb) {
        let resp = new SetIntlDomainAutoRenewResponse();
        this.request("SetIntlDomainAutoRenew", req, resp, cb);
    }

    /**
     * This API is used to delete a registrant profile.
     * @param {DeleteIntlTemplateRequest} req
     * @param {function(string, DeleteIntlTemplateResponse):void} cb
     * @public
     */
    DeleteIntlTemplate(req, cb) {
        let resp = new DeleteIntlTemplateResponse();
        this.request("DeleteIntlTemplate", req, resp, cb);
    }

    /**
     * This API is used to bulk set update prohibition for domains.
     * @param {UpdateProhibitionIntlBatchRequest} req
     * @param {function(string, UpdateProhibitionIntlBatchResponse):void} cb
     * @public
     */
    UpdateProhibitionIntlBatch(req, cb) {
        let resp = new UpdateProhibitionIntlBatchResponse();
        this.request("UpdateProhibitionIntlBatch", req, resp, cb);
    }

    /**
     * This API is used to send a verification code to a mobile number or an email address.
     * @param {SendIntlPhoneEmailCodeRequest} req
     * @param {function(string, SendIntlPhoneEmailCodeResponse):void} cb
     * @public
     */
    SendIntlPhoneEmailCode(req, cb) {
        let resp = new SendIntlPhoneEmailCodeResponse();
        this.request("SendIntlPhoneEmailCode", req, resp, cb);
    }

    /**
     * This API is used to query the "My domains" list.
     * @param {DescribeIntlDomainListRequest} req
     * @param {function(string, DescribeIntlDomainListResponse):void} cb
     * @public
     */
    DescribeIntlDomainList(req, cb) {
        let resp = new DescribeIntlDomainListResponse();
        this.request("DescribeIntlDomainList", req, resp, cb);
    }

    /**
     * This API is used to bulk transfer domains to another account.
     * @param {ModifyOwnerIntlBatchRequest} req
     * @param {function(string, ModifyOwnerIntlBatchResponse):void} cb
     * @public
     */
    ModifyOwnerIntlBatch(req, cb) {
        let resp = new ModifyOwnerIntlBatchResponse();
        this.request("ModifyOwnerIntlBatch", req, resp, cb);
    }

    /**
     * This API is used to bulk transfer domains in.
     * @param {TransferInIntlDomainBatchRequest} req
     * @param {function(string, TransferInIntlDomainBatchResponse):void} cb
     * @public
     */
    TransferInIntlDomainBatch(req, cb) {
        let resp = new TransferInIntlDomainBatchResponse();
        this.request("TransferInIntlDomainBatch", req, resp, cb);
    }

    /**
     * This API is used to get the log details of bulk domain purchase.
     * @param {DescribeIntlDomainBatchDetailsRequest} req
     * @param {function(string, DescribeIntlDomainBatchDetailsResponse):void} cb
     * @public
     */
    DescribeIntlDomainBatchDetails(req, cb) {
        let resp = new DescribeIntlDomainBatchDetailsResponse();
        this.request("DescribeIntlDomainBatchDetails", req, resp, cb);
    }

    /**
     * This API is used to verify a mobile number or an email address via a verification code.
     * @param {CreateIntlPhoneEmailRequest} req
     * @param {function(string, CreateIntlPhoneEmailResponse):void} cb
     * @public
     */
    CreateIntlPhoneEmail(req, cb) {
        let resp = new CreateIntlPhoneEmailResponse();
        this.request("CreateIntlPhoneEmail", req, resp, cb);
    }

    /**
     * This API is used to get the price list by domain suffix.
     * @param {DescribeIntlDomainPriceNewListRequest} req
     * @param {function(string, DescribeIntlDomainPriceNewListResponse):void} cb
     * @public
     */
    DescribeIntlDomainPriceNewList(req, cb) {
        let resp = new DescribeIntlDomainPriceNewListResponse();
        this.request("DescribeIntlDomainPriceNewList", req, resp, cb);
    }

    /**
     * This API is used to query the logs of bulk domain purchase.
     * @param {DescribeIntlBatchOperationLogsRequest} req
     * @param {function(string, DescribeIntlBatchOperationLogsResponse):void} cb
     * @public
     */
    DescribeIntlBatchOperationLogs(req, cb) {
        let resp = new DescribeIntlBatchOperationLogsResponse();
        this.request("DescribeIntlBatchOperationLogs", req, resp, cb);
    }

    /**
     * This API is used to query domain information.
     * @param {DescribeIntlDomainRequest} req
     * @param {function(string, DescribeIntlDomainResponse):void} cb
     * @public
     */
    DescribeIntlDomain(req, cb) {
        let resp = new DescribeIntlDomainResponse();
        this.request("DescribeIntlDomain", req, resp, cb);
    }

    /**
     * This API is used to get the list of verified mobile numbers and email addresses.
     * @param {DescribeIntlPhoneEmailListRequest} req
     * @param {function(string, DescribeIntlPhoneEmailListResponse):void} cb
     * @public
     */
    DescribeIntlPhoneEmailList(req, cb) {
        let resp = new DescribeIntlPhoneEmailListResponse();
        this.request("DescribeIntlPhoneEmailList", req, resp, cb);
    }

    /**
     * This API is used to bulk renew domains.
     * @param {RenewIntlDomainBatchRequest} req
     * @param {function(string, RenewIntlDomainBatchResponse):void} cb
     * @public
     */
    RenewIntlDomainBatch(req, cb) {
        let resp = new RenewIntlDomainBatchResponse();
        this.request("RenewIntlDomainBatch", req, resp, cb);
    }

    /**
     * This API is used to query the status of a bulk task.
     * @param {DescribeIntlBatchDetailStatusRequest} req
     * @param {function(string, DescribeIntlBatchDetailStatusResponse):void} cb
     * @public
     */
    DescribeIntlBatchDetailStatus(req, cb) {
        let resp = new DescribeIntlBatchDetailStatusResponse();
        this.request("DescribeIntlBatchDetailStatus", req, resp, cb);
    }


}
module.exports = DomainClient;
