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
const Simple = models.Simple;
const ListEmailAddressRequest = models.ListEmailAddressRequest;
const GetEmailIdentityResponse = models.GetEmailIdentityResponse;
const ListBlackEmailAddressRequest = models.ListBlackEmailAddressRequest;
const Attachment = models.Attachment;
const Template = models.Template;
const GetSendEmailStatusResponse = models.GetSendEmailStatusResponse;
const SendEmailRequest = models.SendEmailRequest;
const EmailSender = models.EmailSender;
const DeleteEmailIdentityRequest = models.DeleteEmailIdentityRequest;
const UpdateEmailIdentityRequest = models.UpdateEmailIdentityRequest;
const GetEmailIdentityRequest = models.GetEmailIdentityRequest;
const DeleteEmailIdentityResponse = models.DeleteEmailIdentityResponse;
const GetStatisticsReportRequest = models.GetStatisticsReportRequest;
const DeleteEmailTemplateResponse = models.DeleteEmailTemplateResponse;
const Volume = models.Volume;
const CreateEmailTemplateRequest = models.CreateEmailTemplateRequest;
const UpdateEmailTemplateRequest = models.UpdateEmailTemplateRequest;
const UpdateEmailIdentityResponse = models.UpdateEmailIdentityResponse;
const DeleteEmailTemplateRequest = models.DeleteEmailTemplateRequest;
const DeleteBlackListResponse = models.DeleteBlackListResponse;
const SendEmailStatus = models.SendEmailStatus;
const ListEmailTemplatesRequest = models.ListEmailTemplatesRequest;
const DeleteBlackListRequest = models.DeleteBlackListRequest;
const ListEmailTemplatesResponse = models.ListEmailTemplatesResponse;
const SendEmailResponse = models.SendEmailResponse;
const ListBlackEmailAddressResponse = models.ListBlackEmailAddressResponse;
const GetSendEmailStatusRequest = models.GetSendEmailStatusRequest;
const TemplatesMetadata = models.TemplatesMetadata;
const ListEmailIdentitiesResponse = models.ListEmailIdentitiesResponse;
const ListEmailAddressResponse = models.ListEmailAddressResponse;
const TemplateContent = models.TemplateContent;
const GetStatisticsReportResponse = models.GetStatisticsReportResponse;
const DeleteEmailAddressRequest = models.DeleteEmailAddressRequest;
const EmailIdentity = models.EmailIdentity;
const BlackEmailAddress = models.BlackEmailAddress;
const GetEmailTemplateRequest = models.GetEmailTemplateRequest;
const DeleteEmailAddressResponse = models.DeleteEmailAddressResponse;
const CreateEmailIdentityResponse = models.CreateEmailIdentityResponse;
const CreateEmailIdentityRequest = models.CreateEmailIdentityRequest;
const CreateEmailAddressRequest = models.CreateEmailAddressRequest;
const CreateEmailTemplateResponse = models.CreateEmailTemplateResponse;
const CreateEmailAddressResponse = models.CreateEmailAddressResponse;
const UpdateEmailTemplateResponse = models.UpdateEmailTemplateResponse;
const DNSAttributes = models.DNSAttributes;
const GetEmailTemplateResponse = models.GetEmailTemplateResponse;
const ListEmailIdentitiesRequest = models.ListEmailIdentitiesRequest;


/**
 * ses client
 * @class
 */
class SesClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ses.tencentcloudapi.com", "2020-10-02", credential, region, profile);
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
     * This API is used to create a TEXT or HTML email template. To create an HTML template, ensure that it does not include external CSS files. You can use {{variable name}} to specify a variable in the template.
Note: only an approved template can be used to send emails.
     * @param {CreateEmailTemplateRequest} req
     * @param {function(string, CreateEmailTemplateResponse):void} cb
     * @public
     */
    CreateEmailTemplate(req, cb) {
        let resp = new CreateEmailTemplateResponse();
        this.request("CreateEmailTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the email sending statistics over a recent period, including data on sent emails, delivery success rate, open rate, bounce rate, and so on. The maximum time span is 14 days.
     * @param {GetStatisticsReportRequest} req
     * @param {function(string, GetStatisticsReportResponse):void} cb
     * @public
     */
    GetStatisticsReport(req, cb) {
        let resp = new GetStatisticsReportResponse();
        this.request("GetStatisticsReport", req, resp, cb);
    }

    /**
     * This API is used to send a TEXT or HTML email. By default, you can only send emails using a template. To send custom content, please contact your sales rep to enable this feature.
     * @param {SendEmailRequest} req
     * @param {function(string, SendEmailResponse):void} cb
     * @public
     */
    SendEmail(req, cb) {
        let resp = new SendEmailResponse();
        this.request("SendEmail", req, resp, cb);
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
     * This API is used to get email sending status. Only data within 90 days can be queried.
     * @param {GetSendEmailStatusRequest} req
     * @param {function(string, GetSendEmailStatusResponse):void} cb
     * @public
     */
    GetSendEmailStatus(req, cb) {
        let resp = new GetSendEmailStatusResponse();
        this.request("GetSendEmailStatus", req, resp, cb);
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
