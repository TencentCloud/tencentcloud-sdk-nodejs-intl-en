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
const PullSmsReplyStatusRequest = models.PullSmsReplyStatusRequest;
const DeleteSmsTemplateResponse = models.DeleteSmsTemplateResponse;
const ModifySmsTemplateResponse = models.ModifySmsTemplateResponse;
const ModifySmsSignRequest = models.ModifySmsSignRequest;
const AddSmsSignRequest = models.AddSmsSignRequest;
const AddTemplateStatus = models.AddTemplateStatus;
const DescribeSmsTemplateListResponse = models.DescribeSmsTemplateListResponse;
const DescribePhoneNumberInfoRequest = models.DescribePhoneNumberInfoRequest;
const PullSmsSendStatusByPhoneNumberRequest = models.PullSmsSendStatusByPhoneNumberRequest;
const AddSmsTemplateRequest = models.AddSmsTemplateRequest;
const ModifySmsTemplateRequest = models.ModifySmsTemplateRequest;
const PullSmsReplyStatus = models.PullSmsReplyStatus;
const CallbackStatusStatisticsResponse = models.CallbackStatusStatisticsResponse;
const PullSmsSendStatusRequest = models.PullSmsSendStatusRequest;
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
const DescribePhoneNumberInfoResponse = models.DescribePhoneNumberInfoResponse;
const DescribeTemplateListStatus = models.DescribeTemplateListStatus;
const AddSmsTemplateResponse = models.AddSmsTemplateResponse;
const PullSmsSendStatus = models.PullSmsSendStatus;
const DescribeSmsSignListResponse = models.DescribeSmsSignListResponse;
const DescribeSmsTemplateListRequest = models.DescribeSmsTemplateListRequest;
const CallbackStatusStatistics = models.CallbackStatusStatistics;
const PhoneNumberInfo = models.PhoneNumberInfo;
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
const DeleteSignStatus = models.DeleteSignStatus;
const PullSmsReplyStatusResponse = models.PullSmsReplyStatusResponse;


/**
 * sms client
 * @class
 */
class SmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sms.tencentcloudapi.com", "2021-01-11", credential, region, profile);
    }
    
    /**
     * 1. This API is used to modify an SMS signature. Read the [Tencent Cloud SMS signature review standards](https://intl.cloud.tencent.com/document/product/382/40658) before making a modification.
2. ⚠️ Note: Individual users cannot use this API to modify SMS signatures. For more information, see [Identity Verification Guide](https://intl.cloud.tencent.com/document/product/378/3629). If your account identity is individual, you can log in to the [console](https://console.cloud.tencent.com/smsv2) to modify SMS signatures.
3. Modifications can be made only if the signature status is **Pending Review** or **Rejected**. **Approved** signatures cannot be modified.
>- Note: Because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.
     * @param {ModifySmsSignRequest} req
     * @param {function(string, ModifySmsSignResponse):void} cb
     * @public
     */
    ModifySmsSign(req, cb) {
        let resp = new ModifySmsSignResponse();
        this.request("ModifySmsSign", req, resp, cb);
    }

    /**
     * 1. This API is used to add an SMS signature. You need to read the [Tencent Cloud SMS Signature Review Standards](https://intl.cloud.tencent.com/zh/document/product/382/40658) before starting an application.
2. ⚠️ Note: individual users cannot use this API to apply for SMS signatures. For more information, see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1). If your account identity is individual, you can log in to the console to apply for SMS signatures.
>- Note: because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.
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
Currently, you can also [configure the callback](https://intl.cloud.tencent.com/document/product/382/37809?from_cn_redirect=1#.E8.AE.BE.E7.BD.AE.E4.BA.8B.E4.BB.B6.E5.9B.9E.E8.B0.83.E9.85.8D.E7.BD.AE) to get the delivery status.
>- Note: you need to contact [SMS Helper](https://intl.cloud.tencent.com/document/product/382/3773?from_cn_redirect=1#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81) to activate this API.
>- Note: because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.

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
>- Note: Because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the [SDK](https://intl.cloud.tencent.com/document/product/382/43193?from_cn_redirect=1).
>- Note: You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.
>- Note: This API is currently on the 2021-01-11 version. If you are still using the [2019-07-11 version](https://intl.cloud.tencent.com/document/product/382/38778?from_cn_redirect=1), we recommend you use this latest version. For version differences, see [Version description](https://intl.cloud.tencent.com/document/product/382/63195?from_cn_redirect=1#.E7.89.88.E6.9C.AC.E6.8F.8F.E8.BF.B0).
     * @param {SendSmsRequest} req
     * @param {function(string, SendSmsResponse):void} cb
     * @public
     */
    SendSms(req, cb) {
        let resp = new SendSmsResponse();
        this.request("SendSms", req, resp, cb);
    }

    /**
     * ⚠️ Note: individual users cannot use this API to delete SMS body templates. Please log in to the [console](https://console.cloud.tencent.com/smsv2) to do so. For more information, please see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1).
>- Note: because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.
     * @param {DeleteSmsTemplateRequest} req
     * @param {function(string, DeleteSmsTemplateResponse):void} cb
     * @public
     */
    DeleteSmsTemplate(req, cb) {
        let resp = new DeleteSmsTemplateResponse();
        this.request("DeleteSmsTemplate", req, resp, cb);
    }

    /**
     * This API is used to collect statistics on SMS messages sent by users.
>- Note: because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.

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
>- Note: because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.
     * @param {CallbackStatusStatisticsRequest} req
     * @param {function(string, CallbackStatusStatisticsResponse):void} cb
     * @public
     */
    CallbackStatusStatistics(req, cb) {
        let resp = new CallbackStatusStatisticsResponse();
        this.request("CallbackStatusStatistics", req, resp, cb);
    }

    /**
     * ⚠️ Note: individual users cannot use this API to query SMS body templates. For more information, please see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1).
>- Note: because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.

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
Currently, you can also [configure the reply callback](https://intl.cloud.tencent.com/document/product/382/42907?from_cn_redirect=1) to get replies.
>- Note: You need to contact [SMS Helper](https://intl.cloud.tencent.com/document/product/382/3773?from_cn_redirect=1#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81) to activate this API.
>- Note: Because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.

     * @param {PullSmsReplyStatusRequest} req
     * @param {function(string, PullSmsReplyStatusResponse):void} cb
     * @public
     */
    PullSmsReplyStatus(req, cb) {
        let resp = new PullSmsReplyStatusResponse();
        this.request("PullSmsReplyStatus", req, resp, cb);
    }

    /**
     * ⚠️ Note: individual users cannot use this API to query SMS signatures. For more information, please see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1). If your account identity is individual, you can log in to the [console](https://console.cloud.tencent.com/smsv2) to query SMS signatures.
>- Note: because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.

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
Currently, you can also [configure the callback](https://intl.cloud.tencent.com/document/product/382/37809?from_cn_redirect=1#.E8.AE.BE.E7.BD.AE.E4.BA.8B.E4.BB.B6.E5.9B.9E.E8.B0.83.E9.85.8D.E7.BD.AE) to get the delivery status.
>- Note: because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) to eliminate the need to calculate signatures. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.

     * @param {PullSmsSendStatusByPhoneNumberRequest} req
     * @param {function(string, PullSmsSendStatusByPhoneNumberResponse):void} cb
     * @public
     */
    PullSmsSendStatusByPhoneNumber(req, cb) {
        let resp = new PullSmsSendStatusByPhoneNumberResponse();
        this.request("PullSmsSendStatusByPhoneNumber", req, resp, cb);
    }

    /**
     * 1. This API is used to modify an SMS body template. Please read the [Tencent Cloud SMS Body Template Review Standards](https://intl.cloud.tencent.com/document/product/382/39023?from_cn_redirect=1) before making a modification.
2. ⚠️ Note: individual users cannot use this API to modify SMS body templates. For more information, please see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1). If your account identity is individual, you can log in to the [console](https://console.cloud.tencent.com/smsv2) to modify SMS body templates.
3. Modifications can be made only if the body template status is **Pending Review** or **Rejected**. **Approved** body templates cannot be modified.
>- Note: because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2019-07-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.

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
Currently, you can also [configure the reply callback](https://intl.cloud.tencent.com/document/product/382/42907?from_cn_redirect=1) to get replies.
>- Note: because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.

     * @param {PullSmsReplyStatusByPhoneNumberRequest} req
     * @param {function(string, PullSmsReplyStatusByPhoneNumberResponse):void} cb
     * @public
     */
    PullSmsReplyStatusByPhoneNumber(req, cb) {
        let resp = new PullSmsReplyStatusByPhoneNumberResponse();
        this.request("PullSmsReplyStatusByPhoneNumber", req, resp, cb);
    }

    /**
     * This API is used to query the information of a phone number, including country/region code and standardized E.164 format number.
>- For example, if you query the number +86018845720123, you can get the country/region code 86 and the standardized E.164 number +8618845720123.
     * @param {DescribePhoneNumberInfoRequest} req
     * @param {function(string, DescribePhoneNumberInfoResponse):void} cb
     * @public
     */
    DescribePhoneNumberInfo(req, cb) {
        let resp = new DescribePhoneNumberInfoResponse();
        this.request("DescribePhoneNumberInfo", req, resp, cb);
    }

    /**
     * ⚠️ Note: individual users cannot use this API to delete SMS signatures. For more information, please see [Identity Verification Overview](https://intl.cloud.tencent.com/document/product/378/3629?from_cn_redirect=1). Please log in to the [console](https://console.cloud.tencent.com/smsv2) to delete SMS signatures.
>- Note: because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.
     * @param {DeleteSmsSignRequest} req
     * @param {function(string, DeleteSmsSignResponse):void} cb
     * @public
     */
    DeleteSmsSign(req, cb) {
        let resp = new DeleteSmsSignResponse();
        this.request("DeleteSmsSign", req, resp, cb);
    }

    /**
     * 1. This API is used to add an SMS template. You need to read the [Tencent Cloud SMS Body Template Review Standards](https://intl.cloud.tencent.com/zh/document/product/382/40659) before starting an application.
2. ⚠️ Note: individual users cannot use this API to apply for SMS body templates. For more information, see [Identity Verification Overview](https://intl.cloud.tencent.com/zh/document/product/378/3629). If your account identity is individual, you can log in to the [console](https://console.cloud.tencent.com/smsv2) to apply for SMS body templates.
>- Note: because of the improved security of **TencentCloud API 3.0**, **API authentication** is more complicated. We recommend you use the Tencent Cloud SMS service with the SDK.
>- You can run this API directly in [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms), which eliminates the signature calculation steps. After it is executed successfully, API Explorer can **automatically generate** SDK code samples.
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
