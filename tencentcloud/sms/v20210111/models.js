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
const AbstractModel = require("../../common/abstract_model");

/**
 * PullSmsReplyStatus request structure.
 * @class
 */
class PullSmsReplyStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maximum number of pulled entries. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The SMS `SdkAppId` generated after an application is added in the [SMS console](https://console.cloud.tencent.com/smsv2/app-manage), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;

    }
}

/**
 * DeleteSmsTemplate response structure.
 * @class
 */
class DeleteSmsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template deletion response
         * @type {DeleteTemplateStatus || null}
         */
        this.DeleteTemplateStatus = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeleteTemplateStatus) {
            let obj = new DeleteTemplateStatus();
            obj.deserialize(params.DeleteTemplateStatus)
            this.DeleteTemplateStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySmsTemplate response structure.
 * @class
 */
class ModifySmsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template parameter modification response
         * @type {ModifyTemplateStatus || null}
         */
        this.ModifyTemplateStatus = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ModifyTemplateStatus) {
            let obj = new ModifyTemplateStatus();
            obj.deserialize(params.ModifyTemplateStatus)
            this.ModifyTemplateStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySmsSign request structure.
 * @class
 */
class ModifySmsSignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the signature to be modified.
         * @type {number || null}
         */
        this.SignId = null;

        /**
         * Signature name.
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * Signature type. Each of these types is followed by their `DocumentType` (identity certificate type) option:
0: company. Valid values of `DocumentType` include 0 and 1.
1: app. Valid values of `DocumentType` include 0, 1, 2, 3, and 4.
2: website. Valid values of `DocumentType` include 0, 1, 2, 3, and 5.
3: WeChat Official Account. Valid values of `DocumentType` include 0, 1, 2, 3, and 8.
4: trademark. Valid values of `DocumentType` include 7.
5: government/public institution/other. Valid values of `DocumentType` include 2 and 3.
6: WeChat Mini Program. Valid values of `DocumentType` include 0, 1, 2, 3, and 6.
Note: the identity certificate type must be selected according to the correspondence; otherwise, the review will fail.
         * @type {number || null}
         */
        this.SignType = null;

        /**
         * Identity certificate type:
0: three-in-one.
1: business license.
2: organization code certificate.
3: social credit code certificate.
4: screenshot of application backend management (for personal app).
5: screenshot of website ICP filing backend (for personal website).
6: screenshot of WeChat Mini Program settings page (for personal WeChat Mini Program).
7: trademark registration certificate.
8: screenshot of WeChat Official Account settings page (for personal WeChat Official Account).
         * @type {number || null}
         */
        this.DocumentType = null;

        /**
         * A parameter used to specify whether it is Global SMS:
`0`: Chinese mainland SMS.
`1`: Global SMS.
Note: the value of this parameter must be consistent with the `International` value of the signature to be modified. This parameter cannot be used to directly change a Chinese mainland signature to an international signature.
         * @type {number || null}
         */
        this.International = null;

        /**
         * Signature purpose:
0: for personal use.
1: for others.
         * @type {number || null}
         */
        this.SignPurpose = null;

        /**
         * You should Base64-encode the image of the identity certificate corresponding to the signature first, remove the prefix `data:image/jpeg;base64,` from the resulted string, and then use it as the value of this parameter.
         * @type {string || null}
         */
        this.ProofImage = null;

        /**
         * Power of attorney, which should be submitted if `SignPurpose` is for use by others.
You should Base64-encode the image first, remove the prefix `data:image/jpeg;base64,` from the resulted string, and then use it as the value of this parameter.
Note: this field will take effect only when `SignPurpose` is 1 (for user by others).
         * @type {string || null}
         */
        this.CommissionImage = null;

        /**
         * Signature application remarks.
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignId = 'SignId' in params ? params.SignId : null;
        this.SignName = 'SignName' in params ? params.SignName : null;
        this.SignType = 'SignType' in params ? params.SignType : null;
        this.DocumentType = 'DocumentType' in params ? params.DocumentType : null;
        this.International = 'International' in params ? params.International : null;
        this.SignPurpose = 'SignPurpose' in params ? params.SignPurpose : null;
        this.ProofImage = 'ProofImage' in params ? params.ProofImage : null;
        this.CommissionImage = 'CommissionImage' in params ? params.CommissionImage : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * AddSmsSign request structure.
 * @class
 */
class AddSmsSignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Signature name.
Note: you cannot apply for an approved or pending signature again.
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * Signature type. Each of these types is followed by their `DocumentType` (identity certificate type) option:
0: company. Valid values of `DocumentType` include 0 and 1.
1: app. Valid values of `DocumentType` include 0, 1, 2, 3, and 4.
2: website. Valid values of `DocumentType` include 0, 1, 2, 3, and 5.
3: WeChat Official Account. Valid values of `DocumentType` include 0, 1, 2, 3, and 8.
4: trademark. Valid values of `DocumentType` include 7.
5: government/public institution/other. Valid values of `DocumentType` include 2 and 3.
6: WeChat Mini Program. Valid values of `DocumentType` include 0, 1, 2, 3, and 6.
Note: the identity certificate type must be selected according to the correspondence; otherwise, the review will fail.
         * @type {number || null}
         */
        this.SignType = null;

        /**
         * Identity certificate type:
0: three-in-one.
1: business license.
2: organization code certificate.
3: social credit code certificate.
4: screenshot of application backend management (for personal app).
5: screenshot of website ICP filing backend (for personal website).
6: screenshot of WeChat Mini Program settings page (for personal WeChat Mini Program).
7: trademark registration certificate.
8: screenshot of WeChat Official Account settings page (for personal WeChat Official Account).
         * @type {number || null}
         */
        this.DocumentType = null;

        /**
         * Whether it is Global SMS:
0: Mainland China SMS.
1: Global SMS.
         * @type {number || null}
         */
        this.International = null;

        /**
         * Signature purpose:
0: for personal use.
1: for others.
         * @type {number || null}
         */
        this.SignPurpose = null;

        /**
         * You should Base64-encode the image of the identity certificate corresponding to the signature first, remove the prefix `data:image/jpeg;base64,` from the resulted string, and then use it as the value of this parameter.
         * @type {string || null}
         */
        this.ProofImage = null;

        /**
         * Power of attorney, which should be submitted if `SignPurpose` is for use by others.
You should Base64-encode the image first, remove the prefix `data:image/jpeg;base64,` from the resulted string, and then use it as the value of this parameter.
Note: this field will take effect only when `SignPurpose` is 1 (for user by others).
         * @type {string || null}
         */
        this.CommissionImage = null;

        /**
         * Signature application remarks.
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignName = 'SignName' in params ? params.SignName : null;
        this.SignType = 'SignType' in params ? params.SignType : null;
        this.DocumentType = 'DocumentType' in params ? params.DocumentType : null;
        this.International = 'International' in params ? params.International : null;
        this.SignPurpose = 'SignPurpose' in params ? params.SignPurpose : null;
        this.ProofImage = 'ProofImage' in params ? params.ProofImage : null;
        this.CommissionImage = 'CommissionImage' in params ? params.CommissionImage : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * Template parameter addition response 
 * @class
 */
class AddTemplateStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeSmsTemplateList response structure.
 * @class
 */
class DescribeSmsTemplateListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response for getting SMS template information
         * @type {Array.<DescribeTemplateListStatus> || null}
         */
        this.DescribeTemplateStatusSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DescribeTemplateStatusSet) {
            this.DescribeTemplateStatusSet = new Array();
            for (let z in params.DescribeTemplateStatusSet) {
                let obj = new DescribeTemplateListStatus();
                obj.deserialize(params.DescribeTemplateStatusSet[z]);
                this.DescribeTemplateStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePhoneNumberInfo request structure.
 * @class
 */
class DescribePhoneNumberInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * A parameter used to query mobile numbers in E.164 format (+[country/region code][subscriber number]). Up to 200 mobile numbers can be queried at a time.
Take the number +8613711112222 as an example. “86” is the country code (with a “+” sign in its front) and “13711112222” is the subscriber number.
         * @type {Array.<string> || null}
         */
        this.PhoneNumberSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNumberSet = 'PhoneNumberSet' in params ? params.PhoneNumberSet : null;

    }
}

/**
 * PullSmsSendStatusByPhoneNumber request structure.
 * @class
 */
class PullSmsSendStatusByPhoneNumberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pull start time in seconds in the format of UNIX timestamp.
Note: the data for the last 7 days can be pulled at most.
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * Offset.
Note: this parameter is currently fixed at 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of pulled entries. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Target mobile number in the E.164 standard (+[country/region code][mobile number]), such as +8613711112222, which has a + sign followed by 86 (country/region code) and then by 13711112222 (mobile number).
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * The SMS `SdkAppId` generated after an application is added in the [SMS console](https://console.cloud.tencent.com/smsv2/app-manage), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

        /**
         * Pull end time in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * AddSmsTemplate request structure.
 * @class
 */
class AddSmsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Template content.
         * @type {string || null}
         */
        this.TemplateContent = null;

        /**
         * SMS type. 0: regular SMS, 1: marketing SMS.
         * @type {number || null}
         */
        this.SmsType = null;

        /**
         * Whether it is Global SMS:
0: Mainland China SMS.
1: Global SMS.
         * @type {number || null}
         */
        this.International = null;

        /**
         * Template remarks, such as reason for application and use case.
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.TemplateContent = 'TemplateContent' in params ? params.TemplateContent : null;
        this.SmsType = 'SmsType' in params ? params.SmsType : null;
        this.International = 'International' in params ? params.International : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * ModifySmsTemplate request structure.
 * @class
 */
class ModifySmsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the template to be modified.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * New template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * New template content.
         * @type {string || null}
         */
        this.TemplateContent = null;

        /**
         * SMS type. 0: regular SMS, 1: marketing SMS.
         * @type {number || null}
         */
        this.SmsType = null;

        /**
         * Whether it is Global SMS:
0: Mainland China SMS.
1: Global SMS.
         * @type {number || null}
         */
        this.International = null;

        /**
         * Template remarks, such as reason for application and use case.
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.TemplateContent = 'TemplateContent' in params ? params.TemplateContent : null;
        this.SmsType = 'SmsType' in params ? params.SmsType : null;
        this.International = 'International' in params ? params.International : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * SMS reply status
 * @class
 */
class PullSmsReplyStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * SMS code number extension, which is not activated by default. If you need to activate it, please contact [SMS Helper](https://intl.cloud.tencent.com/document/product/382/3773?from_cn_redirect=1#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81).
         * @type {string || null}
         */
        this.ExtendCode = null;

        /**
         * Country (or region) code.
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * Mobile number in the E.164 standard (+[country/region code][mobile number]), such as +8613711112222, which has a + sign followed by 86 (country/region code) and then by 13711112222 (mobile number).
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * SMS signature name.
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * User reply.
         * @type {string || null}
         */
        this.ReplyContent = null;

        /**
         * Reply time in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.ReplyTime = null;

        /**
         * User's mobile number in a common format such as 13711112222.
         * @type {string || null}
         */
        this.SubscriberNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExtendCode = 'ExtendCode' in params ? params.ExtendCode : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SignName = 'SignName' in params ? params.SignName : null;
        this.ReplyContent = 'ReplyContent' in params ? params.ReplyContent : null;
        this.ReplyTime = 'ReplyTime' in params ? params.ReplyTime : null;
        this.SubscriberNumber = 'SubscriberNumber' in params ? params.SubscriberNumber : null;

    }
}

/**
 * CallbackStatusStatistics response structure.
 * @class
 */
class CallbackStatusStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Receipt statistics response body.
         * @type {CallbackStatusStatistics || null}
         */
        this.CallbackStatusStatistics = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CallbackStatusStatistics) {
            let obj = new CallbackStatusStatistics();
            obj.deserialize(params.CallbackStatusStatistics)
            this.CallbackStatusStatistics = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PullSmsSendStatus request structure.
 * @class
 */
class PullSmsSendStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maximum number of pulled entries. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The SMS `SdkAppId` generated after an application is added in the [SMS console](https://console.cloud.tencent.com/smsv2/app-manage), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;

    }
}

/**
 * PullSmsSendStatusByPhoneNumber response structure.
 * @class
 */
class PullSmsSendStatusByPhoneNumberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Delivery status response set.
         * @type {Array.<PullSmsSendStatus> || null}
         */
        this.PullSmsSendStatusSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PullSmsSendStatusSet) {
            this.PullSmsSendStatusSet = new Array();
            for (let z in params.PullSmsSendStatusSet) {
                let obj = new PullSmsSendStatus();
                obj.deserialize(params.PullSmsSendStatusSet[z]);
                this.PullSmsSendStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Signature modification response 
 * @class
 */
class ModifySignStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Signature ID.
         * @type {number || null}
         */
        this.SignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignId = 'SignId' in params ? params.SignId : null;

    }
}

/**
 * Response for getting SMS signature information
 * @class
 */
class DescribeSignListStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Signature ID.
         * @type {number || null}
         */
        this.SignId = null;

        /**
         * Whether it is Global SMS. 0: Mainland China SMS; 1: Global SMS.
         * @type {number || null}
         */
        this.International = null;

        /**
         * Signature application status. Valid values: 0: approved; 1: under review.
-1: application rejected or failed.
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * Review reply, i.e., response given by the reviewer, which is usually the reason for rejection.
         * @type {string || null}
         */
        this.ReviewReply = null;

        /**
         * Signature name.
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * Application submission time in the format of UNIX timestamp in seconds.
         * @type {number || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignId = 'SignId' in params ? params.SignId : null;
        this.International = 'International' in params ? params.International : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.ReviewReply = 'ReviewReply' in params ? params.ReviewReply : null;
        this.SignName = 'SignName' in params ? params.SignName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * SendSms response structure.
 * @class
 */
class SendSmsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SMS delivery status.
         * @type {Array.<SendStatus> || null}
         */
        this.SendStatusSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SendStatusSet) {
            this.SendStatusSet = new Array();
            for (let z in params.SendStatusSet) {
                let obj = new SendStatus();
                obj.deserialize(params.SendStatusSet[z]);
                this.SendStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendStatusStatistics response structure.
 * @class
 */
class SendStatusStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Delivery statistics response body.
         * @type {SendStatusStatistics || null}
         */
        this.SendStatusStatistics = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SendStatusStatistics) {
            let obj = new SendStatusStatistics();
            obj.deserialize(params.SendStatusStatistics)
            this.SendStatusStatistics = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendSms request structure.
 * @class
 */
class SendSmsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target mobile number in E.164 format (+[country/region code][subscriber number]). Up to 200 numbers, all of which should be either Chinese mainland numbers or international numbers, are supported in a single request.
Take the number +8613711112222 as an example. “86” is the country code (with a “+” sign in its front) and “13711112222” is the subscriber number.
Note: 11-digit Chinese mainland numbers prefixed by 0086 or 86 or those without any country/region code are also supported. The default prefix is +86.
         * @type {Array.<string> || null}
         */
        this.PhoneNumberSet = null;

        /**
         * The SMS `SdkAppId` generated after an application is added in the [SMS console](https://console.cloud.tencent.com/smsv2/app-manage), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

        /**
         * Template ID. You must enter the ID of an approved template, which can be viewed on the [Mainland China SMS](https://console.cloud.tencent.com/smsv2/csms-template) or [Global SMS](https://console.cloud.tencent.com/smsv2/isms-template) body template management page. If you need to send SMS messages to global mobile numbers, you can only use a Global SMS template.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Content of the SMS signature, which should be encoded in UTF-8. You must enter an approved signature, such as Tencent Cloud. The signature information can be viewed on the [Mainland China SMS](https://console.cloud.tencent.com/smsv2/csms-sign) or [Global SMS](https://console.cloud.tencent.com/smsv2/isms-sign) signature management page.
<dx-alert infotype="notice" title="Note">This parameter is required for Mainland China SMS.</dx-alert>
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * Template parameter. If there is no template parameter, leave this field empty.
<dx-alert infotype="notice" title="Note">The number of template parameters should be consistent with that of the template variables of `TemplateId`.</dx-alert>
         * @type {Array.<string> || null}
         */
        this.TemplateParamSet = null;

        /**
         * SMS code number extension, which is not activated by default. If you need to activate it, you can contact [SMS Helper](https://intl.cloud.tencent.com/document/product/382/3773?from_cn_redirect=1#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81).
         * @type {string || null}
         */
        this.ExtendCode = null;

        /**
         * User session content, which can carry context information such as user-side ID and will be returned as-is by the server.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * This parameter is not required for Mainland China SMS. For Global SMS, if you have applied for a separate `SenderId`, this parameter is required. By default, the public `SenderId` is used, in which case you don't need to enter this parameter.
Note: if your monthly usage reaches the specified threshold, you can apply for an independent `SenderId`. For more information, contact [SMS Helper](https://intl.cloud.tencent.com/document/product/382/3773?from_cn_redirect=1#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81).
         * @type {string || null}
         */
        this.SenderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNumberSet = 'PhoneNumberSet' in params ? params.PhoneNumberSet : null;
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.SignName = 'SignName' in params ? params.SignName : null;
        this.TemplateParamSet = 'TemplateParamSet' in params ? params.TemplateParamSet : null;
        this.ExtendCode = 'ExtendCode' in params ? params.ExtendCode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SenderId = 'SenderId' in params ? params.SenderId : null;

    }
}

/**
 * Delivery statistics response body
 * @class
 */
class SendStatusStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billable SMS message quantity; for example, in 100 successfully submitted SMS messages, if 20 ones are long messages (over 80 characters) and split into two messages each, then the billable quantity will be 80 * 1 + 20 * 2 = 120.
         * @type {number || null}
         */
        this.FeeCount = null;

        /**
         * Submitted SMS messages.
         * @type {number || null}
         */
        this.RequestCount = null;

        /**
         * Successfully submitted SMS messages.
         * @type {number || null}
         */
        this.RequestSuccessCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FeeCount = 'FeeCount' in params ? params.FeeCount : null;
        this.RequestCount = 'RequestCount' in params ? params.RequestCount : null;
        this.RequestSuccessCount = 'RequestSuccessCount' in params ? params.RequestSuccessCount : null;

    }
}

/**
 * CallbackStatusStatistics request structure.
 * @class
 */
class CallbackStatusStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time in the format of `yyyymmddhh` accurate to the hour, such as 2021050113 (13:00 on May 1, 2021).
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time in the format of `yyyymmddhh` accurate to the hour, such as 2021050118 (18:00 on May 1, 2021).
Note: `EndTime` must be after `BeginTime`, and the difference should not exceed 32 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The SMS `SdkAppId` generated after an application is added in the [SMS console](https://console.cloud.tencent.com/smsv2/app-manage), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

        /**
         * Upper limit.
Note: this parameter is currently fixed at 0.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset.
Note: this parameter is currently fixed at 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Template deletion response
 * @class
 */
class DeleteTemplateStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Deletion status information.
         * @type {string || null}
         */
        this.DeleteStatus = null;

        /**
         * Deleted time in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.DeleteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeleteStatus = 'DeleteStatus' in params ? params.DeleteStatus : null;
        this.DeleteTime = 'DeleteTime' in params ? params.DeleteTime : null;

    }
}

/**
 * DescribeSmsSignList request structure.
 * @class
 */
class DescribeSmsSignListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Signature ID array.
Note: the maximum length of the array is 100 by default.
         * @type {Array.<number> || null}
         */
        this.SignIdSet = null;

        /**
         * Whether it is Global SMS:
0: Mainland China SMS.
1: Global SMS.
         * @type {number || null}
         */
        this.International = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignIdSet = 'SignIdSet' in params ? params.SignIdSet : null;
        this.International = 'International' in params ? params.International : null;

    }
}

/**
 * DescribePhoneNumberInfo response structure.
 * @class
 */
class DescribePhoneNumberInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A parameter used to obtain mobile number information.
         * @type {Array.<PhoneNumberInfo> || null}
         */
        this.PhoneNumberInfoSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PhoneNumberInfoSet) {
            this.PhoneNumberInfoSet = new Array();
            for (let z in params.PhoneNumberInfoSet) {
                let obj = new PhoneNumberInfo();
                obj.deserialize(params.PhoneNumberInfoSet[z]);
                this.PhoneNumberInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Response for getting SMS template information
 * @class
 */
class DescribeTemplateListStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Whether it is Global SMS. 0: Mainland China SMS; 1: Global SMS.
         * @type {number || null}
         */
        this.International = null;

        /**
         * Template application status. Valid values: 0: approved; 1: under review; -1: application rejected or failed.
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * Review reply, i.e., response given by the reviewer, which is usually the reason for rejection.
         * @type {string || null}
         */
        this.ReviewReply = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Application submission time in the format of UNIX timestamp in seconds.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Template content.
         * @type {string || null}
         */
        this.TemplateContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.International = 'International' in params ? params.International : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.ReviewReply = 'ReviewReply' in params ? params.ReviewReply : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TemplateContent = 'TemplateContent' in params ? params.TemplateContent : null;

    }
}

/**
 * AddSmsTemplate response structure.
 * @class
 */
class AddSmsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SMS template addition response body
         * @type {AddTemplateStatus || null}
         */
        this.AddTemplateStatus = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AddTemplateStatus) {
            let obj = new AddTemplateStatus();
            obj.deserialize(params.AddTemplateStatus)
            this.AddTemplateStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SMS delivery status details
 * @class
 */
class PullSmsSendStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Actual time of SMS receipt by user in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.UserReceiveTime = null;

        /**
         * Country (or region) code.
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * User's mobile number in a common format such as 13711112222.
         * @type {string || null}
         */
        this.SubscriberNumber = null;

        /**
         * Mobile number in the E.164 standard (+[country/region code][mobile number]), such as +8613711112222, which has a + sign followed by 86 (country/region code) and then by 13711112222 (mobile number).
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * ID of the current delivery.
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * Whether the SMS message is actually received. Valid values: SUCCESS (success), FAIL (failure).
         * @type {string || null}
         */
        this.ReportStatus = null;

        /**
         * Description of SMS receipt by user.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserReceiveTime = 'UserReceiveTime' in params ? params.UserReceiveTime : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.SubscriberNumber = 'SubscriberNumber' in params ? params.SubscriberNumber : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.ReportStatus = 'ReportStatus' in params ? params.ReportStatus : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeSmsSignList response structure.
 * @class
 */
class DescribeSmsSignListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response for getting signature information
         * @type {Array.<DescribeSignListStatus> || null}
         */
        this.DescribeSignListStatusSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DescribeSignListStatusSet) {
            this.DescribeSignListStatusSet = new Array();
            for (let z in params.DescribeSignListStatusSet) {
                let obj = new DescribeSignListStatus();
                obj.deserialize(params.DescribeSignListStatusSet[z]);
                this.DescribeSignListStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSmsTemplateList request structure.
 * @class
 */
class DescribeSmsTemplateListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is Global SMS:
0: Mainland China SMS.
1: Global SMS.
         * @type {number || null}
         */
        this.International = null;

        /**
         * Array of template IDs. If the array is empty, the template list information will be queried by default (only allowed for root accounts). You need to use the `Limit` and `Offset` fields to set the query range.
<dx-alert infotype="notice" title="Note">The default array length can be up to 100</dx-alert>
         * @type {Array.<number> || null}
         */
        this.TemplateIdSet = null;

        /**
         * Upper limit. Maximum value: 100.
Note: it is 0 by default and is enabled when `TemplateIdSet` is empty.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset.
Note: it is 0 by default and is enabled when `TemplateIdSet` is empty.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.International = 'International' in params ? params.International : null;
        this.TemplateIdSet = 'TemplateIdSet' in params ? params.TemplateIdSet : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Receipt statistics response body
 * @class
 */
class CallbackStatusStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Messages with receipt.
         * @type {number || null}
         */
        this.CallbackCount = null;

        /**
         * Successfully submitted SMS messages.
         * @type {number || null}
         */
        this.RequestSuccessCount = null;

        /**
         * Failed receipts.
         * @type {number || null}
         */
        this.CallbackFailCount = null;

        /**
         * Successful receipts.
         * @type {number || null}
         */
        this.CallbackSuccessCount = null;

        /**
         * Carrier's internal error.
         * @type {number || null}
         */
        this.InternalErrorCount = null;

        /**
         * Invalid numbers.
         * @type {number || null}
         */
        this.InvalidNumberCount = null;

        /**
         * Errors such as out-of-service or power-off.
         * @type {number || null}
         */
        this.ShutdownErrorCount = null;

        /**
         * Blocked mobile numbers.
         * @type {number || null}
         */
        this.BlackListCount = null;

        /**
         * Carrier rate limit hits.
         * @type {number || null}
         */
        this.FrequencyLimitCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CallbackCount = 'CallbackCount' in params ? params.CallbackCount : null;
        this.RequestSuccessCount = 'RequestSuccessCount' in params ? params.RequestSuccessCount : null;
        this.CallbackFailCount = 'CallbackFailCount' in params ? params.CallbackFailCount : null;
        this.CallbackSuccessCount = 'CallbackSuccessCount' in params ? params.CallbackSuccessCount : null;
        this.InternalErrorCount = 'InternalErrorCount' in params ? params.InternalErrorCount : null;
        this.InvalidNumberCount = 'InvalidNumberCount' in params ? params.InvalidNumberCount : null;
        this.ShutdownErrorCount = 'ShutdownErrorCount' in params ? params.ShutdownErrorCount : null;
        this.BlackListCount = 'BlackListCount' in params ? params.BlackListCount : null;
        this.FrequencyLimitCount = 'FrequencyLimitCount' in params ? params.FrequencyLimitCount : null;

    }
}

/**
 * Mobile number information.
 * @class
 */
class PhoneNumberInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code for mobile number information query. `Ok` will be returned if the query is successful.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Description of the error code for mobile number information query.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Country (or region) code.
         * @type {string || null}
         */
        this.NationCode = null;

        /**
         * Subscriber number in normal format such as 13711112222, without any prefix (country or region code).
         * @type {string || null}
         */
        this.SubscriberNumber = null;

        /**
         * The standardized mobile number in E.164 format after parsing, which is consistent with the parsed number for SMS message delivery. If the parsing fails, the original number will be returned.
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * Country or region code such as CN and US. If the country or region code cannot be identified, `DEF` will be returned by default.
         * @type {string || null}
         */
        this.IsoCode = null;

        /**
         * Country code or region name such as China. For more information, see [Global SMS Price Overview](https://intl.cloud.tencent.com/document/product/382/18051?from_cn_redirect=1#.E6.97.A5.E7.BB.93.E5.90.8E.E4.BB.98.E8.B4.B9.3Ca-id.3D.22post-payment.22.3E.3C.2Fa.3E)
         * @type {string || null}
         */
        this.IsoName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.NationCode = 'NationCode' in params ? params.NationCode : null;
        this.SubscriberNumber = 'SubscriberNumber' in params ? params.SubscriberNumber : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.IsoCode = 'IsoCode' in params ? params.IsoCode : null;
        this.IsoName = 'IsoName' in params ? params.IsoName : null;

    }
}

/**
 * SendStatusStatistics request structure.
 * @class
 */
class SendStatusStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time in the format of `yyyymmddhh` accurate to the hour, such as 2021050113 (13:00 on May 1, 2021).
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time in the format of `yyyymmddhh` accurate to the hour, such as 2021050118 (18:00 on May 1, 2021).
Note: `EndTime` must be after `BeginTime`.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The SMS `SdkAppId` generated after an application is added in the [SMS console](https://console.cloud.tencent.com/smsv2/app-manage), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

        /**
         * Upper limit.
Note: this parameter is currently fixed at 0.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset.
Note: this parameter is currently fixed at 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DeleteSmsTemplate request structure.
 * @class
 */
class DeleteSmsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the template to be deleted.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * PullSmsReplyStatusByPhoneNumber response structure.
 * @class
 */
class PullSmsReplyStatusByPhoneNumberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Reply status response set.
         * @type {Array.<PullSmsReplyStatus> || null}
         */
        this.PullSmsReplyStatusSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PullSmsReplyStatusSet) {
            this.PullSmsReplyStatusSet = new Array();
            for (let z in params.PullSmsReplyStatusSet) {
                let obj = new PullSmsReplyStatus();
                obj.deserialize(params.PullSmsReplyStatusSet[z]);
                this.PullSmsReplyStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SMS delivery status
 * @class
 */
class SendStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Delivery serial number.
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * Mobile number in the E.164 standard (+[country/region code][mobile number]), such as +8613711112222, which has a + sign followed by 86 (country/region code) and then by 13711112222 (mobile number).
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * Number of billable SMS messages. For billing rules, see Billing Policy.
         * @type {number || null}
         */
        this.Fee = null;

        /**
         * User session content.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * SMS request error code. For specific meanings, see [Error Codes](https://intl.cloud.tencent.com/zh/document/product/382/40536#6.-error-code). `Ok` will be returned for successful delivery.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * SMS request error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Country/Region code, such as CN and US. For unrecognized country/region codes, `DEF` is returned by default. For the specific list of supported values, please see [Global SMS Price Overview](https://intl.cloud.tencent.com/document/product/382/18051?from_cn_redirect=1).
         * @type {string || null}
         */
        this.IsoCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Fee = 'Fee' in params ? params.Fee : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.IsoCode = 'IsoCode' in params ? params.IsoCode : null;

    }
}

/**
 * DeleteSmsSign response structure.
 * @class
 */
class DeleteSmsSignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Signature deletion response
         * @type {DeleteSignStatus || null}
         */
        this.DeleteSignStatus = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeleteSignStatus) {
            let obj = new DeleteSignStatus();
            obj.deserialize(params.DeleteSignStatus)
            this.DeleteSignStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddSmsSign response structure.
 * @class
 */
class AddSmsSignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Signature addition response
         * @type {AddSignStatus || null}
         */
        this.AddSignStatus = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AddSignStatus) {
            let obj = new AddSignStatus();
            obj.deserialize(params.AddSignStatus)
            this.AddSignStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSmsSign request structure.
 * @class
 */
class DeleteSmsSignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the signature to be deleted.
         * @type {number || null}
         */
        this.SignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignId = 'SignId' in params ? params.SignId : null;

    }
}

/**
 * PullSmsReplyStatusByPhoneNumber request structure.
 * @class
 */
class PullSmsReplyStatusByPhoneNumberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pull start time in seconds in the format of UNIX timestamp.
Note: the data for the last 7 days can be pulled at most.
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * Offset.
Note: this parameter is currently fixed at 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of pulled entries. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Target mobile number in the E.164 standard (+[country/region code][mobile number]), such as +8613711112222, which has a + sign followed by 86 (country/region code) and then by 13711112222 (mobile number).
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * The SMS `SdkAppId` generated after an application is added in the [SMS console](https://console.cloud.tencent.com/smsv2/app-manage), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

        /**
         * Pull end time in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifySmsSign response structure.
 * @class
 */
class ModifySmsSignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Signature modification response
         * @type {ModifySignStatus || null}
         */
        this.ModifySignStatus = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ModifySignStatus) {
            let obj = new ModifySignStatus();
            obj.deserialize(params.ModifySignStatus)
            this.ModifySignStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Signature addition response 
 * @class
 */
class AddSignStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Signature ID.
         * @type {number || null}
         */
        this.SignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignId = 'SignId' in params ? params.SignId : null;

    }
}

/**
 * Template parameter modification response 
 * @class
 */
class ModifyTemplateStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * PullSmsSendStatus response structure.
 * @class
 */
class PullSmsSendStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Delivery status response set.
         * @type {Array.<PullSmsSendStatus> || null}
         */
        this.PullSmsSendStatusSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PullSmsSendStatusSet) {
            this.PullSmsSendStatusSet = new Array();
            for (let z in params.PullSmsSendStatusSet) {
                let obj = new PullSmsSendStatus();
                obj.deserialize(params.PullSmsSendStatusSet[z]);
                this.PullSmsSendStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Signature deletion response
 * @class
 */
class DeleteSignStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Deletion status information.
         * @type {string || null}
         */
        this.DeleteStatus = null;

        /**
         * Deleted time in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.DeleteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeleteStatus = 'DeleteStatus' in params ? params.DeleteStatus : null;
        this.DeleteTime = 'DeleteTime' in params ? params.DeleteTime : null;

    }
}

/**
 * PullSmsReplyStatus response structure.
 * @class
 */
class PullSmsReplyStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Reply status response set.
         * @type {Array.<PullSmsReplyStatus> || null}
         */
        this.PullSmsReplyStatusSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PullSmsReplyStatusSet) {
            this.PullSmsReplyStatusSet = new Array();
            for (let z in params.PullSmsReplyStatusSet) {
                let obj = new PullSmsReplyStatus();
                obj.deserialize(params.PullSmsReplyStatusSet[z]);
                this.PullSmsReplyStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    PullSmsReplyStatusRequest: PullSmsReplyStatusRequest,
    DeleteSmsTemplateResponse: DeleteSmsTemplateResponse,
    ModifySmsTemplateResponse: ModifySmsTemplateResponse,
    ModifySmsSignRequest: ModifySmsSignRequest,
    AddSmsSignRequest: AddSmsSignRequest,
    AddTemplateStatus: AddTemplateStatus,
    DescribeSmsTemplateListResponse: DescribeSmsTemplateListResponse,
    DescribePhoneNumberInfoRequest: DescribePhoneNumberInfoRequest,
    PullSmsSendStatusByPhoneNumberRequest: PullSmsSendStatusByPhoneNumberRequest,
    AddSmsTemplateRequest: AddSmsTemplateRequest,
    ModifySmsTemplateRequest: ModifySmsTemplateRequest,
    PullSmsReplyStatus: PullSmsReplyStatus,
    CallbackStatusStatisticsResponse: CallbackStatusStatisticsResponse,
    PullSmsSendStatusRequest: PullSmsSendStatusRequest,
    PullSmsSendStatusByPhoneNumberResponse: PullSmsSendStatusByPhoneNumberResponse,
    ModifySignStatus: ModifySignStatus,
    DescribeSignListStatus: DescribeSignListStatus,
    SendSmsResponse: SendSmsResponse,
    SendStatusStatisticsResponse: SendStatusStatisticsResponse,
    SendSmsRequest: SendSmsRequest,
    SendStatusStatistics: SendStatusStatistics,
    CallbackStatusStatisticsRequest: CallbackStatusStatisticsRequest,
    DeleteTemplateStatus: DeleteTemplateStatus,
    DescribeSmsSignListRequest: DescribeSmsSignListRequest,
    DescribePhoneNumberInfoResponse: DescribePhoneNumberInfoResponse,
    DescribeTemplateListStatus: DescribeTemplateListStatus,
    AddSmsTemplateResponse: AddSmsTemplateResponse,
    PullSmsSendStatus: PullSmsSendStatus,
    DescribeSmsSignListResponse: DescribeSmsSignListResponse,
    DescribeSmsTemplateListRequest: DescribeSmsTemplateListRequest,
    CallbackStatusStatistics: CallbackStatusStatistics,
    PhoneNumberInfo: PhoneNumberInfo,
    SendStatusStatisticsRequest: SendStatusStatisticsRequest,
    DeleteSmsTemplateRequest: DeleteSmsTemplateRequest,
    PullSmsReplyStatusByPhoneNumberResponse: PullSmsReplyStatusByPhoneNumberResponse,
    SendStatus: SendStatus,
    DeleteSmsSignResponse: DeleteSmsSignResponse,
    AddSmsSignResponse: AddSmsSignResponse,
    DeleteSmsSignRequest: DeleteSmsSignRequest,
    PullSmsReplyStatusByPhoneNumberRequest: PullSmsReplyStatusByPhoneNumberRequest,
    ModifySmsSignResponse: ModifySmsSignResponse,
    AddSignStatus: AddSignStatus,
    ModifyTemplateStatus: ModifyTemplateStatus,
    PullSmsSendStatusResponse: PullSmsSendStatusResponse,
    DeleteSignStatus: DeleteSignStatus,
    PullSmsReplyStatusResponse: PullSmsReplyStatusResponse,

}
