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
const SendTaskData = models.SendTaskData;
const Template = models.Template;
const ListAddressUnsubscribeConfigRequest = models.ListAddressUnsubscribeConfigRequest;
const EmailSender = models.EmailSender;
const BatchSendEmailResponse = models.BatchSendEmailResponse;
const DeleteEmailIdentityRequest = models.DeleteEmailIdentityRequest;
const CreateCustomBlacklistResponse = models.CreateCustomBlacklistResponse;
const UpdateAddressUnsubscribeConfigResponse = models.UpdateAddressUnsubscribeConfigResponse;
const CreateReceiverRequest = models.CreateReceiverRequest;
const TemplateContent = models.TemplateContent;
const BlackEmailAddress = models.BlackEmailAddress;
const Simple = models.Simple;
const CreateEmailAddressRequest = models.CreateEmailAddressRequest;
const CreateReceiverDetailRequest = models.CreateReceiverDetailRequest;
const UpdateEmailTemplateResponse = models.UpdateEmailTemplateResponse;
const CreateReceiverDetailWithDataRequest = models.CreateReceiverDetailWithDataRequest;
const TimedEmailParam = models.TimedEmailParam;
const DNSAttributes = models.DNSAttributes;
const GetEmailTemplateResponse = models.GetEmailTemplateResponse;
const ListAddressUnsubscribeConfigResponse = models.ListAddressUnsubscribeConfigResponse;
const SendEmailRequest = models.SendEmailRequest;
const UpdateEmailIdentityRequest = models.UpdateEmailIdentityRequest;
const DeleteEmailIdentityResponse = models.DeleteEmailIdentityResponse;
const DeleteEmailTemplateResponse = models.DeleteEmailTemplateResponse;
const ListCustomBlacklistRequest = models.ListCustomBlacklistRequest;
const DeleteEmailTemplateRequest = models.DeleteEmailTemplateRequest;
const SendEmailStatus = models.SendEmailStatus;
const ListEmailTemplatesRequest = models.ListEmailTemplatesRequest;
const DeleteBlackListRequest = models.DeleteBlackListRequest;
const ReceiverInputData = models.ReceiverInputData;
const ReceiverDetail = models.ReceiverDetail;
const ListBlackEmailAddressResponse = models.ListBlackEmailAddressResponse;
const ListEmailIdentitiesResponse = models.ListEmailIdentitiesResponse;
const UpdateCustomBlackListRequest = models.UpdateCustomBlackListRequest;
const UpdateEmailSmtpPassWordRequest = models.UpdateEmailSmtpPassWordRequest;
const DeleteCustomBlackListRequest = models.DeleteCustomBlackListRequest;
const UpdateAddressUnsubscribeConfigRequest = models.UpdateAddressUnsubscribeConfigRequest;
const ListEmailIdentitiesRequest = models.ListEmailIdentitiesRequest;
const CreateReceiverResponse = models.CreateReceiverResponse;
const UpdateEmailSmtpPassWordResponse = models.UpdateEmailSmtpPassWordResponse;
const ListReceiversRequest = models.ListReceiversRequest;
const GetEmailIdentityResponse = models.GetEmailIdentityResponse;
const Attachment = models.Attachment;
const ListSendTasksRequest = models.ListSendTasksRequest;
const ListReceiverDetailsResponse = models.ListReceiverDetailsResponse;
const ListEmailTemplatesResponse = models.ListEmailTemplatesResponse;
const GetEmailIdentityRequest = models.GetEmailIdentityRequest;
const GetStatisticsReportRequest = models.GetStatisticsReportRequest;
const GetSendEmailStatusResponse = models.GetSendEmailStatusResponse;
const AddressUnsubscribeConfigData = models.AddressUnsubscribeConfigData;
const CreateEmailIdentityRequest = models.CreateEmailIdentityRequest;
const UpdateEmailTemplateRequest = models.UpdateEmailTemplateRequest;
const CreateEmailTemplateRequest = models.CreateEmailTemplateRequest;
const DeleteBlackListResponse = models.DeleteBlackListResponse;
const DeleteCustomBlackListResponse = models.DeleteCustomBlackListResponse;
const DeleteAddressUnsubscribeConfigRequest = models.DeleteAddressUnsubscribeConfigRequest;
const CreateReceiverDetailResponse = models.CreateReceiverDetailResponse;
const DeleteReceiverResponse = models.DeleteReceiverResponse;
const SendEmailResponse = models.SendEmailResponse;
const TemplatesMetadata = models.TemplatesMetadata;
const BlackAddressDetail = models.BlackAddressDetail;
const GetStatisticsReportResponse = models.GetStatisticsReportResponse;
const DeleteEmailAddressResponse = models.DeleteEmailAddressResponse;
const ListCustomBlacklistResponse = models.ListCustomBlacklistResponse;
const ListReceiverDetailsRequest = models.ListReceiverDetailsRequest;
const CreateEmailIdentityResponse = models.CreateEmailIdentityResponse;
const CreateEmailAddressResponse = models.CreateEmailAddressResponse;
const DeleteAddressUnsubscribeConfigResponse = models.DeleteAddressUnsubscribeConfigResponse;
const BatchSendEmailRequest = models.BatchSendEmailRequest;
const CreateCustomBlacklistRequest = models.CreateCustomBlacklistRequest;
const ListEmailAddressRequest = models.ListEmailAddressRequest;
const UpdateCustomBlackListResponse = models.UpdateCustomBlackListResponse;
const ListBlackEmailAddressRequest = models.ListBlackEmailAddressRequest;
const CreateReceiverDetailWithDataResponse = models.CreateReceiverDetailWithDataResponse;
const GetEmailTemplateRequest = models.GetEmailTemplateRequest;
const ListSendTasksResponse = models.ListSendTasksResponse;
const Volume = models.Volume;
const ReceiverData = models.ReceiverData;
const CreateAddressUnsubscribeConfigRequest = models.CreateAddressUnsubscribeConfigRequest;
const UpdateEmailIdentityResponse = models.UpdateEmailIdentityResponse;
const CreateEmailTemplateResponse = models.CreateEmailTemplateResponse;
const GetSendEmailStatusRequest = models.GetSendEmailStatusRequest;
const ListEmailAddressResponse = models.ListEmailAddressResponse;
const DeleteEmailAddressRequest = models.DeleteEmailAddressRequest;
const EmailIdentity = models.EmailIdentity;
const DeleteReceiverRequest = models.DeleteReceiverRequest;
const CycleEmailParam = models.CycleEmailParam;
const CreateAddressUnsubscribeConfigResponse = models.CreateAddressUnsubscribeConfigResponse;
const ListReceiversResponse = models.ListReceiversResponse;
const TagList = models.TagList;


/**
 * ses client
 * @class
 */
class SesClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ses.intl.tencentcloudapi.com", "2020-10-02", credential, region, profile);
    }
    
    /**
     * This API is used to get the list of sender domains, including verified and unverified domains.
     * @param {ListEmailIdentitiesRequest} req
     * @param {function(string, ListEmailIdentitiesResponse):void} cb
     * @public
     */
    ListEmailIdentities(req, cb) {
        let resp = new ListEmailIdentitiesResponse();
        this.request("ListEmailIdentities", req, resp, cb);
    }

    /**
     * After the sender domain is verified, you need a sender address to send emails. For example, if your sender domain is mail.qcloud.com, your sender address can be service@mail.qcloud.com. If you want to display your name (such as "Tencent Cloud") in the inbox list of the recipients, the sender address should be in the format of `Tencent Cloud <email address>`. Please note that there must be a space between your name and the first angle bracket.
     * @param {CreateEmailAddressRequest} req
     * @param {function(string, CreateEmailAddressResponse):void} cb
     * @public
     */
    CreateEmailAddress(req, cb) {
        let resp = new CreateEmailAddressResponse();
        this.request("CreateEmailAddress", req, resp, cb);
    }

    /**
     * Add recipient addresses with Template parameters. Use this API to import Template parameters while adding recipient addresses, ensuring each recipient address uses Template variables with different values when sending emails. Users first call the CreateReceiver API to create a recipient list, then call this API to import recipient addresses and Template parameters for email sending, and finally use the BatchSendEmail API to complete batch email sending. Notably, after using this API, the Template parameter in the BatchSendEmail API does not need to be passed again. Users can also import recipient addresses, Template variables, and parameter values via the import file option in the console under Email Sending - Recipient List menu. This API limits the number of recipient addresses in a single request to 20,000 entries. It can also append recipient addresses to an already uploaded recipient list, but the total number of recipient addresses in the list must not exceed a certain limit, currently set at 50,000 entries. This API does not support removing duplicate recipient addresses. Users need to ensure uploaded and appended addresses are non-repeating and do not duplicate previously uploaded addresses.
     * @param {CreateReceiverDetailWithDataRequest} req
     * @param {function(string, CreateReceiverDetailWithDataResponse):void} cb
     * @public
     */
    CreateReceiverDetailWithData(req, cb) {
        let resp = new CreateReceiverDetailWithDataResponse();
        this.request("CreateReceiverDetailWithData", req, resp, cb);
    }

    /**
     * Search the email sending status. Only support querying data within 30 days.
     * @param {GetSendEmailStatusRequest} req
     * @param {function(string, GetSendEmailStatusResponse):void} cb
     * @public
     */
    GetSendEmailStatus(req, cb) {
        let resp = new GetSendEmailStatusResponse();
        this.request("GetSendEmailStatus", req, resp, cb);
    }

    /**
     * Query ALL recipient email addresses in the recipient list based on the recipient list id with paging query. Filter queries can be based on the recipient email address.
     * @param {ListReceiverDetailsRequest} req
     * @param {function(string, ListReceiverDetailsResponse):void} cb
     * @public
     */
    ListReceiverDetails(req, cb) {
        let resp = new ListReceiverDetailsResponse();
        this.request("ListReceiverDetails", req, resp, cb);
    }

    /**
     * This API is used to create a recipient group, which is the list of target email addresses for batch sending emails. After creating a group, you need to upload recipient email addresses. Then, you can create a sending task and select the group to batch send emails.
     * @param {CreateReceiverRequest} req
     * @param {function(string, CreateReceiverResponse):void} cb
     * @public
     */
    CreateReceiver(req, cb) {
        let resp = new CreateReceiverResponse();
        this.request("CreateReceiver", req, resp, cb);
    }

    /**
     * This API is used to get the details of a template.
     * @param {GetEmailTemplateRequest} req
     * @param {function(string, GetEmailTemplateResponse):void} cb
     * @public
     */
    GetEmailTemplate(req, cb) {
        let resp = new GetEmailTemplateResponse();
        this.request("GetEmailTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the configuration details of a sender domain.
     * @param {GetEmailIdentityRequest} req
     * @param {function(string, GetEmailIdentityResponse):void} cb
     * @public
     */
    GetEmailIdentity(req, cb) {
        let resp = new GetEmailIdentityResponse();
        this.request("GetEmailIdentity", req, resp, cb);
    }

    /**
     * Refresh custom blocklist.
     * @param {UpdateCustomBlackListRequest} req
     * @param {function(string, UpdateCustomBlackListResponse):void} cb
     * @public
     */
    UpdateCustomBlackList(req, cb) {
        let resp = new UpdateCustomBlackListResponse();
        this.request("UpdateCustomBlackList", req, resp, cb);
    }

    /**
     * The API is used to get blocklisted addresses. In the case of a hard bounce, Tencent Cloud will blocklist the recipient address and do not allow any user to send emails to this address. If you confirm that this is a misjudgment, you can remove it from the blocklist.
     * @param {ListBlackEmailAddressRequest} req
     * @param {function(string, ListBlackEmailAddressResponse):void} cb
     * @public
     */
    ListBlackEmailAddress(req, cb) {
        let resp = new ListBlackEmailAddressResponse();
        this.request("ListBlackEmailAddress", req, resp, cb);
    }

    /**
     * This API is used to create an address-level unsubscribe configuration.
     * @param {CreateAddressUnsubscribeConfigRequest} req
     * @param {function(string, CreateAddressUnsubscribeConfigResponse):void} cb
     * @public
     */
    CreateAddressUnsubscribeConfig(req, cb) {
        let resp = new CreateAddressUnsubscribeConfigResponse();
        this.request("CreateAddressUnsubscribeConfig", req, resp, cb);
    }

    /**
     * This API is used to get the address and unsubscribe configuration list.
     * @param {ListAddressUnsubscribeConfigRequest} req
     * @param {function(string, ListAddressUnsubscribeConfigResponse):void} cb
     * @public
     */
    ListAddressUnsubscribeConfig(req, cb) {
        let resp = new ListAddressUnsubscribeConfigResponse();
        this.request("ListAddressUnsubscribeConfig", req, resp, cb);
    }

    /**
     * This API is used to update an email template. An updated template must be approved again before it can be used.
     * @param {UpdateEmailTemplateRequest} req
     * @param {function(string, UpdateEmailTemplateResponse):void} cb
     * @public
     */
    UpdateEmailTemplate(req, cb) {
        let resp = new UpdateEmailTemplateResponse();
        this.request("UpdateEmailTemplate", req, resp, cb);
    }

    /**
     * This API is used to verify whether your DNS configuration is correct.
     * @param {UpdateEmailIdentityRequest} req
     * @param {function(string, UpdateEmailIdentityResponse):void} cb
     * @public
     */
    UpdateEmailIdentity(req, cb) {
        let resp = new UpdateEmailIdentityResponse();
        this.request("UpdateEmailIdentity", req, resp, cb);
    }

    /**
     * This API is used to delete a sender domain. After deleted, the sender domain can no longer be used to send emails.
     * @param {DeleteEmailIdentityRequest} req
     * @param {function(string, DeleteEmailIdentityResponse):void} cb
     * @public
     */
    DeleteEmailIdentity(req, cb) {
        let resp = new DeleteEmailIdentityResponse();
        this.request("DeleteEmailIdentity", req, resp, cb);
    }

    /**
     * This API is used to get the list of sender addresses.
     * @param {ListEmailAddressRequest} req
     * @param {function(string, ListEmailAddressResponse):void} cb
     * @public
     */
    ListEmailAddress(req, cb) {
        let resp = new ListEmailAddressResponse();
        this.request("ListEmailAddress", req, resp, cb);
    }

    /**
     * This API is used to delete a recipient group and all recipient email addresses in the group based on the recipient group ID.
     * @param {DeleteReceiverRequest} req
     * @param {function(string, DeleteReceiverResponse):void} cb
     * @public
     */
    DeleteReceiver(req, cb) {
        let resp = new DeleteReceiverResponse();
        this.request("DeleteReceiver", req, resp, cb);
    }

    /**
     * This API is used to create a TEXT or HTML email template. To create an HTML template, ensure that it does not include external CSS files. You can use {{variable name}} to specify a variable in the template.
Note: Only an approved template can be used to send emails.
     * @param {CreateEmailTemplateRequest} req
     * @param {function(string, CreateEmailTemplateResponse):void} cb
     * @public
     */
    CreateEmailTemplate(req, cb) {
        let resp = new CreateEmailTemplateResponse();
        this.request("CreateEmailTemplate", req, resp, cb);
    }

    /**
     * This API is used to send a TEXT or HTML email to multiple recipients at a time for marketing or notification purposes. By default, you can send emails using a template only. You need to create a recipient group with email addresses first and then send emails by group ID. SES supports scheduled and recurring email sending tasks. You need to pass in `TimedParam` for a scheduled task and `CycleParam` for a recurring one.
     * @param {BatchSendEmailRequest} req
     * @param {function(string, BatchSendEmailResponse):void} cb
     * @public
     */
    BatchSendEmail(req, cb) {
        let resp = new BatchSendEmailResponse();
        this.request("BatchSendEmail", req, resp, cb);
    }

    /**
     * This API is used to set the SMTP password. Initially, no SMTP password is set for your email address, so emails cannot be sent over SMTP. To send emails over SMTP, you must set the SMTP password. The set password can be changed subsequently.
     * @param {UpdateEmailSmtpPassWordRequest} req
     * @param {function(string, UpdateEmailSmtpPassWordResponse):void} cb
     * @public
     */
    UpdateEmailSmtpPassWord(req, cb) {
        let resp = new UpdateEmailSmtpPassWordResponse();
        this.request("UpdateEmailSmtpPassWord", req, resp, cb);
    }

    /**
     * This API is used to update address-level unsubscribe configurations.
     * @param {UpdateAddressUnsubscribeConfigRequest} req
     * @param {function(string, UpdateAddressUnsubscribeConfigResponse):void} cb
     * @public
     */
    UpdateAddressUnsubscribeConfig(req, cb) {
        let resp = new UpdateAddressUnsubscribeConfigResponse();
        this.request("UpdateAddressUnsubscribeConfig", req, resp, cb);
    }

    /**
     * Add a custom blocklist.
     * @param {CreateCustomBlacklistRequest} req
     * @param {function(string, CreateCustomBlacklistResponse):void} cb
     * @public
     */
    CreateCustomBlacklist(req, cb) {
        let resp = new CreateCustomBlacklistResponse();
        this.request("CreateCustomBlacklist", req, resp, cb);
    }

    /**
     * This API is used to delete an email template.
     * @param {DeleteEmailTemplateRequest} req
     * @param {function(string, DeleteEmailTemplateResponse):void} cb
     * @public
     */
    DeleteEmailTemplate(req, cb) {
        let resp = new DeleteEmailTemplateResponse();
        this.request("DeleteEmailTemplate", req, resp, cb);
    }

    /**
     * Remove address-level unsubscribe configuration.
     * @param {DeleteAddressUnsubscribeConfigRequest} req
     * @param {function(string, DeleteAddressUnsubscribeConfigResponse):void} cb
     * @public
     */
    DeleteAddressUnsubscribeConfig(req, cb) {
        let resp = new DeleteAddressUnsubscribeConfigResponse();
        this.request("DeleteAddressUnsubscribeConfig", req, resp, cb);
    }

    /**
     * This API is used to get the list of email templates.
     * @param {ListEmailTemplatesRequest} req
     * @param {function(string, ListEmailTemplatesResponse):void} cb
     * @public
     */
    ListEmailTemplates(req, cb) {
        let resp = new ListEmailTemplatesResponse();
        this.request("ListEmailTemplates", req, resp, cb);
    }

    /**
     * This API is used to query batch email sending tasks (including immediate, scheduled, and recurring tasks) by page. You can query task data including the number of emails requested to be sent, the number of sent emails, the number of cached emails, and task status.
     * @param {ListSendTasksRequest} req
     * @param {function(string, ListSendTasksResponse):void} cb
     * @public
     */
    ListSendTasks(req, cb) {
        let resp = new ListSendTasksResponse();
        this.request("ListSendTasks", req, resp, cb);
    }

    /**
     * This API is used to create a sender domain. Before you can send an email using Tencent Cloud SES, you must create a sender domain as your identity. It can be the domain of your website or mobile app. You must verify the domain to prove that you own it and authorize Tencent Cloud SES to use it to send emails.
     * @param {CreateEmailIdentityRequest} req
     * @param {function(string, CreateEmailIdentityResponse):void} cb
     * @public
     */
    CreateEmailIdentity(req, cb) {
        let resp = new CreateEmailIdentityResponse();
        this.request("CreateEmailIdentity", req, resp, cb);
    }

    /**
     * Delete a custom blocklist email address.
     * @param {DeleteCustomBlackListRequest} req
     * @param {function(string, DeleteCustomBlackListResponse):void} cb
     * @public
     */
    DeleteCustomBlackList(req, cb) {
        let resp = new DeleteCustomBlackListResponse();
        this.request("DeleteCustomBlackList", req, resp, cb);
    }

    /**
     * This API is used to unblocklist email addresses. If you confirm that a blocklisted recipient address is valid and active, you can remove it from Tencent Cloud’s address blocklist database.
     * @param {DeleteBlackListRequest} req
     * @param {function(string, DeleteBlackListResponse):void} cb
     * @public
     */
    DeleteBlackList(req, cb) {
        let resp = new DeleteBlackListResponse();
        this.request("DeleteBlackList", req, resp, cb);
    }

    /**
     * This API is used to send an HTML or TEXT email triggered for authentication or transaction. By default, you can send emails using a template only.
     * @param {SendEmailRequest} req
     * @param {function(string, SendEmailResponse):void} cb
     * @public
     */
    SendEmail(req, cb) {
        let resp = new SendEmailResponse();
        this.request("SendEmail", req, resp, cb);
    }

    /**
     * Retrieve the custom blocklist.
     * @param {ListCustomBlacklistRequest} req
     * @param {function(string, ListCustomBlacklistResponse):void} cb
     * @public
     */
    ListCustomBlacklist(req, cb) {
        let resp = new ListCustomBlacklistResponse();
        this.request("ListCustomBlacklist", req, resp, cb);
    }

    /**
     * This API is used to get the email sending statistics over a recent period, including data on sent emails, delivery success rate, open rate, bounce rate, and so on.
     * @param {GetStatisticsReportRequest} req
     * @param {function(string, GetStatisticsReportResponse):void} cb
     * @public
     */
    GetStatisticsReport(req, cb) {
        let resp = new GetStatisticsReportResponse();
        this.request("GetStatisticsReport", req, resp, cb);
    }

    /**
     * This API is used to add recipient email addresses (up to 20,000 at a time) to a recipient group. This will be processed asynchronously. If the data volume is large, it may take some time to upload. You can check the recipient group for the upload status and upload quantity. This API has basically the same feature as that of `CreateReceiverDetailWithData` except that it doesn't support uploading template parameters for email sending. You need to first call the `CreateReceiver` API to create a recipient group, then call this API to pass in recipient addresses, and finally call the `BatchSendEmail` API to batch send emails. This API supports adding more recipient addresses during upload but not address deduplication, so you need to make sure that the recipient addresses are not duplicate by yourself. This API can request up to 20,000 recipient addresses at a time, but the recipient group can contain up to 50,000 addresses currently.
     * @param {CreateReceiverDetailRequest} req
     * @param {function(string, CreateReceiverDetailResponse):void} cb
     * @public
     */
    CreateReceiverDetail(req, cb) {
        let resp = new CreateReceiverDetailResponse();
        this.request("CreateReceiverDetail", req, resp, cb);
    }

    /**
     * This API is used to query recipient groups. It supports pagination, fuzzy query, and query by status.
     * @param {ListReceiversRequest} req
     * @param {function(string, ListReceiversResponse):void} cb
     * @public
     */
    ListReceivers(req, cb) {
        let resp = new ListReceiversResponse();
        this.request("ListReceivers", req, resp, cb);
    }

    /**
     * This API is used to delete a sender address.
     * @param {DeleteEmailAddressRequest} req
     * @param {function(string, DeleteEmailAddressResponse):void} cb
     * @public
     */
    DeleteEmailAddress(req, cb) {
        let resp = new DeleteEmailAddressResponse();
        this.request("DeleteEmailAddress", req, resp, cb);
    }


}
module.exports = SesClient;
