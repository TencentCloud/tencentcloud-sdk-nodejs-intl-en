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
         * SMS `SdkAppid` actually generated after an application is added in the [SMS Console](https://console.cloud.tencent.com/sms/smslist), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;

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
         * Template deletion response.
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
         * ID of signature to be modified.
         * @type {number || null}
         */
        this.SignId = null;

        /**
         * Signature name.
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * Signature type. Each of these types is followed by their `DocumentType` (identity document type) option:
0: company (0, 1, 2, 3).
1: app (0, 1, 2, 3, 4).
2: website (0, 1, 2, 3, 5).
3: WeChat Official Account or WeChat Mini Program (0, 1, 2, 3, 6).
4: trademark (7).
5: governmental/public institution or others (2, 3).
Note: the identity document type must be selected according to the correspondence; otherwise, the review will fail.
         * @type {number || null}
         */
        this.SignType = null;

        /**
         * Identity document type:
0: 3-in-1 license.
1: business license.
2: organization code certificate.
3: certificate of unified social credit code.
4: screenshot of application backend management (for personal app).
5: screenshot of website ICP filing backend (for personal website).
6: screenshot of WeChat Mini Program settings page (for personal WeChat Mini Program).
7: trademark registration certificate.
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
         * Signature use:
0: for self-use.
1: for others.
         * @type {number || null}
         */
        this.UsedMethod = null;

        /**
         * You should Base64-encode the image of the identity document corresponding to the signature first, remove the prefix `data:image/jpeg;base64,` from the resulted string, and then use it as the value of this parameter.
         * @type {string || null}
         */
        this.ProofImage = null;

        /**
         * Authorization letter, which should be submitted if `UsedMethod` is for others.
You should Base64-encode the image first, remove the prefix `data:image/jpeg;base64,` from the resulted string, and then use it as the value of this parameter.
Note: this field will take effect only when `UsedMethod` is 1 (for others).
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
        this.UsedMethod = 'UsedMethod' in params ? params.UsedMethod : null;
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
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * Signature type. Each of these types is followed by their `DocumentType` (identity document type) option:
0: company (0, 1, 2, 3).
1: app (0, 1, 2, 3, 4).
2: website (0, 1, 2, 3, 5).
3: WeChat Official Account or WeChat Mini Program (0, 1, 2, 3, 6).
4: trademark (7).
5: governmental/public institution or others (2, 3).
Note: the identity document type must be selected according to the correspondence; otherwise, the review will fail.
         * @type {number || null}
         */
        this.SignType = null;

        /**
         * Identity document type:
0: 3-in-1 license.
1: business license.
2: organization code certificate.
3: certificate of unified social credit code.
4: screenshot of application backend management (for personal app).
5: screenshot of website ICP filing backend (for personal website).
6: screenshot of WeChat Mini Program settings page (for personal WeChat Mini Program).
7: trademark registration certificate.
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
         * Signature use:
0: for self-use.
1: for others.
         * @type {number || null}
         */
        this.UsedMethod = null;

        /**
         * You should Base64-encode the image of the identity document corresponding to the signature first, remove the prefix `data:image/jpeg;base64,` from the resulted string, and then use it as the value of this parameter.
         * @type {string || null}
         */
        this.ProofImage = null;

        /**
         * Authorization letter, which should be submitted if `UsedMethod` is for others.
You should Base64-encode the image first, remove the prefix `data:image/jpeg;base64,` from the resulted string, and then use it as the value of this parameter.
Note: this field will take effect only when `UsedMethod` is 1 (for others).
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
        this.UsedMethod = 'UsedMethod' in params ? params.UsedMethod : null;
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
         * Template parameter
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
         * Response for getting SMS signature information
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
 * PullSmsSendStatusByPhoneNumber request structure.
 * @class
 */
class PullSmsSendStatusByPhoneNumberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pull start time in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.SendDateTime = null;

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
         * Target mobile number in the e.164 standard (+[country/region code][mobile number]), such as +8613711112222, which has a + sign followed by 86 (country/region code) and then by 13711112222 (mobile number).
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * SMS `SdkAppid` actually generated after an application is added in the [SMS Console](https://console.cloud.tencent.com/sms/smslist), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SendDateTime = 'SendDateTime' in params ? params.SendDateTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;

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
         * SMS type. 0: ordinary SMS, 1: marketing SMS.
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
         * ID of template to be modified.
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
         * SMS type. 0: ordinary SMS, 1: marketing SMS.
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
         * SMS code number extension, which is not activated by default. If you need to activate it, please contact [SMS Helper](https://cloud.tencent.com/document/product/382/3773).
         * @type {string || null}
         */
        this.ExtendCode = null;

        /**
         * Country (or region) code.
         * @type {string || null}
         */
        this.NationCode = null;

        /**
         * Mobile number in the e.164 standard (+[country/region code][mobile number]), such as +8613711112222, which has a + sign followed by 86 (country/region code) and then by 13711112222 (mobile number).
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * SMS signature.
         * @type {string || null}
         */
        this.Sign = null;

        /**
         * User reply.
         * @type {string || null}
         */
        this.ReplyContent = null;

        /**
         * Reply time (e.g., 2019-10-08 17:18:37).
         * @type {string || null}
         */
        this.ReplyTime = null;

        /**
         * Reply time in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.ReplyUnixTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExtendCode = 'ExtendCode' in params ? params.ExtendCode : null;
        this.NationCode = 'NationCode' in params ? params.NationCode : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Sign = 'Sign' in params ? params.Sign : null;
        this.ReplyContent = 'ReplyContent' in params ? params.ReplyContent : null;
        this.ReplyTime = 'ReplyTime' in params ? params.ReplyTime : null;
        this.ReplyUnixTime = 'ReplyUnixTime' in params ? params.ReplyUnixTime : null;

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
         * Receipt statistics response packet body.
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
         * SMS `SdkAppid` actually generated after an application is added in the [SMS Console](https://console.cloud.tencent.com/sms/smslist), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;

    }
}

/**
 * Package message statistics response packet
 * @class
 */
class SmsPackagesStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Package creation time in standard time format, such as 2019-10-08 17:18:37.
         * @type {string || null}
         */
        this.PackageCreateTime = null;

        /**
         * Package creation time in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.PackageCreateUnixTime = null;

        /**
         * Package effective time in standard time format, such as 2019-10-08 17:18:37.
         * @type {string || null}
         */
        this.PackageEffectiveTime = null;

        /**
         * Package effective time in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.PackageEffectiveUnixTime = null;

        /**
         * Package expiration time in standard time format, such as 2019-10-08 17:18:37.
         * @type {string || null}
         */
        this.PackageExpiredTime = null;

        /**
         * Package expiration time in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.PackageExpiredUnixTime = null;

        /**
         * Number of SMS messages in package.
         * @type {number || null}
         */
        this.AmountOfPackage = null;

        /**
         * 0: gifted package. 1: purchased package.
         * @type {number || null}
         */
        this.TypeOfPackage = null;

        /**
         * Package ID.
         * @type {number || null}
         */
        this.PackageId = null;

        /**
         * Current usage.
         * @type {number || null}
         */
        this.CurrentUsage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackageCreateTime = 'PackageCreateTime' in params ? params.PackageCreateTime : null;
        this.PackageCreateUnixTime = 'PackageCreateUnixTime' in params ? params.PackageCreateUnixTime : null;
        this.PackageEffectiveTime = 'PackageEffectiveTime' in params ? params.PackageEffectiveTime : null;
        this.PackageEffectiveUnixTime = 'PackageEffectiveUnixTime' in params ? params.PackageEffectiveUnixTime : null;
        this.PackageExpiredTime = 'PackageExpiredTime' in params ? params.PackageExpiredTime : null;
        this.PackageExpiredUnixTime = 'PackageExpiredUnixTime' in params ? params.PackageExpiredUnixTime : null;
        this.AmountOfPackage = 'AmountOfPackage' in params ? params.AmountOfPackage : null;
        this.TypeOfPackage = 'TypeOfPackage' in params ? params.TypeOfPackage : null;
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.CurrentUsage = 'CurrentUsage' in params ? params.CurrentUsage : null;

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
         * Signature ID
         * @type {number || null}
         */
        this.SignId = null;

        /**
         * Signature modification application ID
         * @type {string || null}
         */
        this.SignApplyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignId = 'SignId' in params ? params.SignId : null;
        this.SignApplyId = 'SignApplyId' in params ? params.SignApplyId : null;

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
         * Signature ID
         * @type {number || null}
         */
        this.SignId = null;

        /**
         * Whether it is Global SMS. Valid values:
0: Mainland China SMS.
1: Global SMS
         * @type {number || null}
         */
        this.International = null;

        /**
         * Signature application status. Valid values:
0: approved.
-1: rejected or failed.
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
         * Delivery statistics response packet.
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
         * Target mobile number in the e.164 standard in the format of +[country/region code][mobile number]. Up to 200 mobile numbers are supported in one request (which should be all Mainland China mobile numbers or all global mobile numbers).
Example: +8613711112222, which has a + sign followed by 86 (country/region code) and then by 13711112222 (mobile number).
         * @type {Array.<string> || null}
         */
        this.PhoneNumberSet = null;

        /**
         * Template ID. You must enter the ID of an approved template, which can be viewed in the [SMS Console](https://console.cloud.tencent.com/sms/smslist).
         * @type {string || null}
         */
        this.TemplateID = null;

        /**
         * SMS `SdkAppid` actually generated after an application is added in the [SMS Console](https://console.cloud.tencent.com/sms/smslist), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

        /**
         * The content of SMS signature should be encoded in UTF-8. You must enter an approved signature, which can be viewed in the [SMS Console](https://console.cloud.tencent.com/sms/smslist). Note: this parameter is required for Mainland China SMS.
         * @type {string || null}
         */
        this.Sign = null;

        /**
         * Template parameter. If there is no template parameter, leave this parameter blank.
         * @type {Array.<string> || null}
         */
        this.TemplateParamSet = null;

        /**
         * SMS code number extension, which is not activated by default. If you need to activate it, please contact [SMS Helper](https://cloud.tencent.com/document/product/382/3773).
         * @type {string || null}
         */
        this.ExtendCode = null;

        /**
         * User session content, which can carry context information such as user-side ID and will be returned as-is by the server.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * `senderid` for Global SMS, which is not activated by default. If you need to activate it, please contact [SMS Helper](https://cloud.tencent.com/document/product/382/3773) for assistance. This parameter should be empty for Mainland China SMS.
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
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;
        this.Sign = 'Sign' in params ? params.Sign : null;
        this.TemplateParamSet = 'TemplateParamSet' in params ? params.TemplateParamSet : null;
        this.ExtendCode = 'ExtendCode' in params ? params.ExtendCode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SenderId = 'SenderId' in params ? params.SenderId : null;

    }
}

/**
 * Delivery statistics response packet
 * @class
 */
class SendStatusStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billable SMS message quantity; for example, in 100 successfully submitted SMS messages, if 20 are long messages (over 80 characters) and split into two messages each, then the billable quantity will be 80 * 1 + 20 * 2 = 120.
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
         * Start time of pull in the format of `yyyymmddhh` accurate to the hour.
         * @type {number || null}
         */
        this.StartDateTime = null;

        /**
         * End time of pull in the format of `yyyymmddhh` accurate to the hour.
Note: `EndDataTime` must be later than `StartDateTime`.
         * @type {number || null}
         */
        this.EndDataTime = null;

        /**
         * SMS `SdkAppid` actually generated after an application is added in the [SMS Console](https://console.cloud.tencent.com/sms/smslist), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

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
        this.StartDateTime = 'StartDateTime' in params ? params.StartDateTime : null;
        this.EndDataTime = 'EndDataTime' in params ? params.EndDataTime : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;
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
         * Deletion time in seconds in the format of UNIX timestamp.
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
 * SmsPackagesStatistics request structure.
 * @class
 */
class SmsPackagesStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SMS `SdkAppid` actually generated after an application is added in the [SMS Console](https://console.cloud.tencent.com/sms/smslist), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

        /**
         * Upper limit (number of packages to be pulled).
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
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * Template ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Whether it is Global SMS. Valid values:
0: Mainland China SMS.
1: Global SMS
         * @type {number || null}
         */
        this.International = null;

        /**
         * Signature application status. Valid values:
0: approved.
-1: rejected or failed.
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
         * SMS template addition response packet body
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
         * Actual time of SMS receipt by user.
         * @type {string || null}
         */
        this.UserReceiveTime = null;

        /**
         * Actual time of SMS receipt by user in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.UserReceiveUnixTime = null;

        /**
         * Country (or region) code.
         * @type {string || null}
         */
        this.NationCode = null;

        /**
         * Mobile number in the e.164 standard (+[country/region code][mobile number]), such as +8613711112222, which has a + sign followed by 86 (country/region code) and then by 13711112222 (mobile number).
         * @type {string || null}
         */
        this.PurePhoneNumber = null;

        /**
         * Mobile number in a common format such as 13711112222.
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
        this.UserReceiveUnixTime = 'UserReceiveUnixTime' in params ? params.UserReceiveUnixTime : null;
        this.NationCode = 'NationCode' in params ? params.NationCode : null;
        this.PurePhoneNumber = 'PurePhoneNumber' in params ? params.PurePhoneNumber : null;
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
         * Template ID array.
         * @type {Array.<number> || null}
         */
        this.TemplateIdSet = null;

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
        this.TemplateIdSet = 'TemplateIdSet' in params ? params.TemplateIdSet : null;
        this.International = 'International' in params ? params.International : null;

    }
}

/**
 * Receipt statistics response packet
 * @class
 */
class CallbackStatusStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * SMS receipts.
         * @type {number || null}
         */
        this.CallbackCount = null;

        /**
         * Successfully submitted SMS messages.
         * @type {number || null}
         */
        this.RequestSuccessCount = null;

        /**
         * Failed SMS receipts.
         * @type {number || null}
         */
        this.CallbackFailCount = null;

        /**
         * Successful SMS receipts.
         * @type {number || null}
         */
        this.CallbackSuccessCount = null;

        /**
         * Internal carrier errors.
         * @type {number || null}
         */
        this.InternalErrorCount = null;

        /**
         * Invalid or empty mobile numbers.
         * @type {number || null}
         */
        this.InvalidNumberCount = null;

        /**
         * Errors such as out-of-service or power-off.
         * @type {number || null}
         */
        this.ShutdownErrorCount = null;

        /**
         * Blacklisted mobile numbers.
         * @type {number || null}
         */
        this.BlackListCount = null;

        /**
         * Carrier frequency limit hits.
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
 * SendStatusStatistics request structure.
 * @class
 */
class SendStatusStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of pull in the format of `yyyymmddhh` accurate to the hour.
         * @type {number || null}
         */
        this.StartDateTime = null;

        /**
         * End time of pull in the format of `yyyymmddhh` accurate to the hour
Note: `EndDataTime` must be later than `StartDateTime`.
         * @type {number || null}
         */
        this.EndDataTime = null;

        /**
         * SMS `SdkAppid` actually generated after an application is added in the [SMS Console](https://console.cloud.tencent.com/sms/smslist), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

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
        this.StartDateTime = 'StartDateTime' in params ? params.StartDateTime : null;
        this.EndDataTime = 'EndDataTime' in params ? params.EndDataTime : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;
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
         * ID of template to be deleted.
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
 * SMS sending status
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
         * Mobile number in the e.164 standard (+[country/region code][mobile number]), such as +8613711112222, which has a + sign followed by 86 (country/region code) and then by 13711112222 (mobile number).
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * Number of billable SMS messages. For billing rules, please see [Billing Policy](https://cloud.tencent.com/document/product/382/36135).
         * @type {number || null}
         */
        this.Fee = null;

        /**
         * User session content.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * SMS request error code. For specific meanings, please see Error Codes.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * SMS request error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Country code or region code, such as CN and US. If the country code or region code is not obtained, the returned value will be 'DEF' by default. For more information on the supported list, see price overview for non-Mainland China regions.
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
         * Signature deletion response.
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
         * ID of signature to be deleted.
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
         * @type {number || null}
         */
        this.SendDateTime = null;

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
         * Target mobile number in the e.164 standard (+[country/region code][mobile number]), such as +8613711112222, which has a + sign followed by 86 (country/region code) and then by 13711112222 (mobile number).
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * SMS `SdkAppid` actually generated after an application is added in the [SMS Console](https://console.cloud.tencent.com/sms/smslist), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SendDateTime = 'SendDateTime' in params ? params.SendDateTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;

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

        /**
         * Signature application ID.
         * @type {number || null}
         */
        this.SignApplyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignId = 'SignId' in params ? params.SignId : null;
        this.SignApplyId = 'SignApplyId' in params ? params.SignApplyId : null;

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
         * Template parameter
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
 * SmsPackagesStatistics response structure.
 * @class
 */
class SmsPackagesStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Delivery statistics response packet body.
         * @type {Array.<SmsPackagesStatistics> || null}
         */
        this.SmsPackagesStatisticsSet = null;

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

        if (params.SmsPackagesStatisticsSet) {
            this.SmsPackagesStatisticsSet = new Array();
            for (let z in params.SmsPackagesStatisticsSet) {
                let obj = new SmsPackagesStatistics();
                obj.deserialize(params.SmsPackagesStatisticsSet[z]);
                this.SmsPackagesStatisticsSet.push(obj);
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
         * Deletion time in seconds in the format of UNIX timestamp.
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
    PullSmsSendStatusByPhoneNumberRequest: PullSmsSendStatusByPhoneNumberRequest,
    AddSmsTemplateRequest: AddSmsTemplateRequest,
    ModifySmsTemplateRequest: ModifySmsTemplateRequest,
    PullSmsReplyStatus: PullSmsReplyStatus,
    CallbackStatusStatisticsResponse: CallbackStatusStatisticsResponse,
    PullSmsSendStatusRequest: PullSmsSendStatusRequest,
    SmsPackagesStatistics: SmsPackagesStatistics,
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
    SmsPackagesStatisticsRequest: SmsPackagesStatisticsRequest,
    DescribeTemplateListStatus: DescribeTemplateListStatus,
    AddSmsTemplateResponse: AddSmsTemplateResponse,
    PullSmsSendStatus: PullSmsSendStatus,
    DescribeSmsSignListResponse: DescribeSmsSignListResponse,
    DescribeSmsTemplateListRequest: DescribeSmsTemplateListRequest,
    CallbackStatusStatistics: CallbackStatusStatistics,
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
    SmsPackagesStatisticsResponse: SmsPackagesStatisticsResponse,
    DeleteSignStatus: DeleteSignStatus,
    PullSmsReplyStatusResponse: PullSmsReplyStatusResponse,

}
