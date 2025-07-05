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
const PullSmsReplyStatusRequest = models.PullSmsReplyStatusRequest;
const DeleteSmsTemplateResponse = models.DeleteSmsTemplateResponse;
const ModifySmsTemplateResponse = models.ModifySmsTemplateResponse;
const ModifySmsSignRequest = models.ModifySmsSignRequest;
const AddSmsSignRequest = models.AddSmsSignRequest;
const AddTemplateStatus = models.AddTemplateStatus;
const DescribeSmsTemplateListResponse = models.DescribeSmsTemplateListResponse;
const PullSmsSendStatusByPhoneNumberRequest = models.PullSmsSendStatusByPhoneNumberRequest;
const AddSmsTemplateRequest = models.AddSmsTemplateRequest;
const ModifySmsTemplateRequest = models.ModifySmsTemplateRequest;
const PullSmsReplyStatus = models.PullSmsReplyStatus;
const CallbackStatusStatisticsResponse = models.CallbackStatusStatisticsResponse;
const PullSmsSendStatusRequest = models.PullSmsSendStatusRequest;
const SmsPackagesStatistics = models.SmsPackagesStatistics;
const PullSmsSendStatusByPhoneNumberResponse = models.PullSmsSendStatusByPhoneNumberResponse;
const ModifySignStatus = models.ModifySignStatus;
const DescribeSignListStatus = models.DescribeSignListStatus;
const SendSmsResponse = models.SendSmsResponse;
const SendStatusStatisticsResponse = models.SendStatusStatisticsResponse;
const SendSmsRequest = models.SendSmsRequest;
const SendStatusStatistics = models.SendStatusStatistics;
const CallbackStatusStatisticsRequest = models.CallbackStatusStatisticsRequest;
const DeleteTemplateStatus = models.DeleteTemplateStatus;
const DescribeSmsSignListRequest = models.DescribeSmsSignListRequest;
const SmsPackagesStatisticsRequest = models.SmsPackagesStatisticsRequest;
const DescribeTemplateListStatus = models.DescribeTemplateListStatus;
const AddSmsTemplateResponse = models.AddSmsTemplateResponse;
const PullSmsSendStatus = models.PullSmsSendStatus;
const DescribeSmsSignListResponse = models.DescribeSmsSignListResponse;
const DescribeSmsTemplateListRequest = models.DescribeSmsTemplateListRequest;
const CallbackStatusStatistics = models.CallbackStatusStatistics;
const SendStatusStatisticsRequest = models.SendStatusStatisticsRequest;
const DeleteSmsTemplateRequest = models.DeleteSmsTemplateRequest;
const PullSmsReplyStatusByPhoneNumberResponse = models.PullSmsReplyStatusByPhoneNumberResponse;
const SendStatus = models.SendStatus;
const DeleteSmsSignResponse = models.DeleteSmsSignResponse;
const AddSmsSignResponse = models.AddSmsSignResponse;
const DeleteSmsSignRequest = models.DeleteSmsSignRequest;
const PullSmsReplyStatusByPhoneNumberRequest = models.PullSmsReplyStatusByPhoneNumberRequest;
const ModifySmsSignResponse = models.ModifySmsSignResponse;
const AddSignStatus = models.AddSignStatus;
const ModifyTemplateStatus = models.ModifyTemplateStatus;
const PullSmsSendStatusResponse = models.PullSmsSendStatusResponse;
const SmsPackagesStatisticsResponse = models.SmsPackagesStatisticsResponse;
const DeleteSignStatus = models.DeleteSignStatus;
const PullSmsReplyStatusResponse = models.PullSmsReplyStatusResponse;


/**
 * sms client
 * @class
 */
class SmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sms.intl.tencentcloudapi.com", "2019-07-11", credential, region, profile);
    }
    
    /**
     * This API is used to modify an SMS signature. Please read the [Tencent Cloud SMS Signature Review Standards](https://intl.cloud.tencent.com/document/product/382/39022?from_cn_redirect=1) before making a modification.
>-  Note: individual users cannot use this API to modify SMS signatures. For more information, please see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1). If your account identity is individual, you can log in to the console to modify SMS signatures.
>- Modifications can be made only if the signature status is **pending review** or **rejected**. **Approved** signatures cannot be modified.
     * @param {ModifySmsSignRequest} req
     * @param {function(string, ModifySmsSignResponse):void} cb
     * @public
     */
    ModifySmsSign(req, cb) {
        let resp = new ModifySmsSignResponse();
        this.request("ModifySmsSign", req, resp, cb);
    }

    /**
     * This API is used to add an SMS signature. Please read the [Tencent Cloud SMS Signature Review Standards](https://intl.cloud.tencent.com/document/product/382/39022?from_cn_redirect=1) before starting an application.
> Note: individual users cannot use this API to apply for SMS signatures. For more information, please see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1). If your account identity is individual, please log in to the console to apply for SMS signatures. For detailed directions, please see [Creating SMS Signatures](https://intl.cloud.tencent.com/document/product/382/36136?from_cn_redirect=1#Sign).
     * @param {AddSmsSignRequest} req
     * @param {function(string, AddSmsSignResponse):void} cb
     * @public
     */
    AddSmsSign(req, cb) {
        let resp = new AddSmsSignResponse();
        this.request("AddSmsSign", req, resp, cb);
    }

    /**
     * This API is used to pull SMS delivery status.
     * @param {PullSmsSendStatusRequest} req
     * @param {function(string, PullSmsSendStatusResponse):void} cb
     * @public
     */
    PullSmsSendStatus(req, cb) {
        let resp = new PullSmsSendStatusResponse();
        this.request("PullSmsSendStatus", req, resp, cb);
    }

    /**
     * This API is used to send SMS verification codes, notification, or marketing messages to users.


     * @param {SendSmsRequest} req
     * @param {function(string, SendSmsResponse):void} cb
     * @public
     */
    SendSms(req, cb) {
        let resp = new SendSmsResponse();
        this.request("SendSms", req, resp, cb);
    }

    /**
     * > Note: individual users cannot use this API to delete SMS body templates. For more information, please see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1). You can log in to the console to delete SMS body templates. For detailed directions, please see the notes on deleting SMS body templates in [SMS Body Template Operations](https://intl.cloud.tencent.com/document/product/382/36136?from_cn_redirect=1#Template).
     * @param {DeleteSmsTemplateRequest} req
     * @param {function(string, DeleteSmsTemplateResponse):void} cb
     * @public
     */
    DeleteSmsTemplate(req, cb) {
        let resp = new DeleteSmsTemplateResponse();
        this.request("DeleteSmsTemplate", req, resp, cb);
    }

    /**
     * This API is used to collect statistics on user's packages.
     * @param {SmsPackagesStatisticsRequest} req
     * @param {function(string, SmsPackagesStatisticsResponse):void} cb
     * @public
     */
    SmsPackagesStatistics(req, cb) {
        let resp = new SmsPackagesStatisticsResponse();
        this.request("SmsPackagesStatistics", req, resp, cb);
    }

    /**
     * This API is used to collect statistics on SMS sent by users.
     * @param {SendStatusStatisticsRequest} req
     * @param {function(string, SendStatusStatisticsResponse):void} cb
     * @public
     */
    SendStatusStatistics(req, cb) {
        let resp = new SendStatusStatisticsResponse();
        this.request("SendStatusStatistics", req, resp, cb);
    }

    /**
     * This API is used to collect statistics on user receipts.
     * @param {CallbackStatusStatisticsRequest} req
     * @param {function(string, CallbackStatusStatisticsResponse):void} cb
     * @public
     */
    CallbackStatusStatistics(req, cb) {
        let resp = new CallbackStatusStatisticsResponse();
        this.request("CallbackStatusStatistics", req, resp, cb);
    }

    /**
     * > Note: individual users cannot use this API to query SMS body templates. For more information, please see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1).
     * @param {DescribeSmsTemplateListRequest} req
     * @param {function(string, DescribeSmsTemplateListResponse):void} cb
     * @public
     */
    DescribeSmsTemplateList(req, cb) {
        let resp = new DescribeSmsTemplateListResponse();
        this.request("DescribeSmsTemplateList", req, resp, cb);
    }

    /**
     * This API is used to pull SMS reply status.
     * @param {PullSmsReplyStatusRequest} req
     * @param {function(string, PullSmsReplyStatusResponse):void} cb
     * @public
     */
    PullSmsReplyStatus(req, cb) {
        let resp = new PullSmsReplyStatusResponse();
        this.request("PullSmsReplyStatus", req, resp, cb);
    }

    /**
     * > Note: individual users cannot use this API to query SMS signatures. For more information, please see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1).
     * @param {DescribeSmsSignListRequest} req
     * @param {function(string, DescribeSmsSignListResponse):void} cb
     * @public
     */
    DescribeSmsSignList(req, cb) {
        let resp = new DescribeSmsSignListResponse();
        this.request("DescribeSmsSignList", req, resp, cb);
    }

    /**
     * This API is used to pull SMS delivery status for one single number.
     * @param {PullSmsSendStatusByPhoneNumberRequest} req
     * @param {function(string, PullSmsSendStatusByPhoneNumberResponse):void} cb
     * @public
     */
    PullSmsSendStatusByPhoneNumber(req, cb) {
        let resp = new PullSmsSendStatusByPhoneNumberResponse();
        this.request("PullSmsSendStatusByPhoneNumber", req, resp, cb);
    }

    /**
     * This API is used to modify an SMS body template. Please read the [Tencent Cloud SMS Body Template Review Standards](https://intl.cloud.tencent.com/document/product/382/39023?from_cn_redirect=1) before making a modification.
>-  Note: individual users cannot use this API to modify SMS body templates. For more information, please see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1). If your account identity is individual, you can log in to the console to modify SMS body templates.
>- Modifications can be made only if the body template status is **pending review** or **rejected**. **Approved** body templates cannot be modified.
     * @param {ModifySmsTemplateRequest} req
     * @param {function(string, ModifySmsTemplateResponse):void} cb
     * @public
     */
    ModifySmsTemplate(req, cb) {
        let resp = new ModifySmsTemplateResponse();
        this.request("ModifySmsTemplate", req, resp, cb);
    }

    /**
     * This API is used to pull SMS reply status for one single number.
     * @param {PullSmsReplyStatusByPhoneNumberRequest} req
     * @param {function(string, PullSmsReplyStatusByPhoneNumberResponse):void} cb
     * @public
     */
    PullSmsReplyStatusByPhoneNumber(req, cb) {
        let resp = new PullSmsReplyStatusByPhoneNumberResponse();
        this.request("PullSmsReplyStatusByPhoneNumber", req, resp, cb);
    }

    /**
     * > Note: individual users cannot use this API to delete SMS signatures. For more information, please see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1). You can log in to the console to delete SMS signatures. For detailed directions, please see the notes on deleting SMS signatures in [SMS Signature Operations](https://intl.cloud.tencent.com/document/product/382/36136?from_cn_redirect=1#Sign).
     * @param {DeleteSmsSignRequest} req
     * @param {function(string, DeleteSmsSignResponse):void} cb
     * @public
     */
    DeleteSmsSign(req, cb) {
        let resp = new DeleteSmsSignResponse();
        this.request("DeleteSmsSign", req, resp, cb);
    }

    /**
     * This API is used to add an SMS template. Please read the [Tencent Cloud SMS Body Template Review Standards](https://intl.cloud.tencent.com/document/product/382/39023?from_cn_redirect=1) before starting an application.
> Note: individual users cannot use this API to apply for SMS body templates. For more information, please see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1). If your account identity is individual, please log in to the console to apply for SMS body templates. For detailed directions, please see [Creating SMS Body Templates](https://intl.cloud.tencent.com/document/product/382/36136?from_cn_redirect=1#Template).
     * @param {AddSmsTemplateRequest} req
     * @param {function(string, AddSmsTemplateResponse):void} cb
     * @public
     */
    AddSmsTemplate(req, cb) {
        let resp = new AddSmsTemplateResponse();
        this.request("AddSmsTemplate", req, resp, cb);
    }


}
module.exports = SmsClient;
