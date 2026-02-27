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
const AbstractModel = require("../../common/abstract_model");

/**
 * Email sending task data
 * @class
 */
class SendTaskData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Sender address
         * @type {string || null}
         */
        this.FromEmailAddress = null;

        /**
         * Recipient group ID
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * Task status. `1`: to start; `5`: sending; `6`: sending suspended today; `7`: sending error; `10`: sent
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * Task type. `1`: immediate; `2`: scheduled; `3`: recurring
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * Number of emails requested to be sent
         * @type {number || null}
         */
        this.RequestCount = null;

        /**
         * Number of emails sent
         * @type {number || null}
         */
        this.SendCount = null;

        /**
         * Number of emails cached
         * @type {number || null}
         */
        this.CacheCount = null;

        /**
         * Task creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Email subject
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * Template and template data.
         * @type {Template || null}
         */
        this.Template = null;

        /**
         * Parameters of a recurring task
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {CycleEmailParam || null}
         */
        this.CycleParam = null;

        /**
         * Parameters of a scheduled task
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {TimedEmailParam || null}
         */
        this.TimedParam = null;

        /**
         * Task exception information.
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * Recipient group name
         * @type {string || null}
         */
        this.ReceiversName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.FromEmailAddress = 'FromEmailAddress' in params ? params.FromEmailAddress : null;
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.RequestCount = 'RequestCount' in params ? params.RequestCount : null;
        this.SendCount = 'SendCount' in params ? params.SendCount : null;
        this.CacheCount = 'CacheCount' in params ? params.CacheCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Subject = 'Subject' in params ? params.Subject : null;

        if (params.Template) {
            let obj = new Template();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

        if (params.CycleParam) {
            let obj = new CycleEmailParam();
            obj.deserialize(params.CycleParam)
            this.CycleParam = obj;
        }

        if (params.TimedParam) {
            let obj = new TimedEmailParam();
            obj.deserialize(params.TimedParam)
            this.TimedParam = obj;
        }
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.ReceiversName = 'ReceiversName' in params ? params.ReceiversName : null;

    }
}

/**
 * Template information, including template ID, template variable parameters, etc.
 * @class
 */
class Template extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID. If you don’t have any template, please create one.
         * @type {number || null}
         */
        this.TemplateID = null;

        /**
         * Variable parameters in the template. Please use `json.dump` to format the JSON object into a string type. The object is a set of key-value pairs. Each key denotes a variable, which is represented by {{key}}. The key will be replaced with the corresponding value (represented by {{value}}) when sending the email.
Note: The parameter value cannot be data of a complex type such as HTML.
Example: {"name":"xxx","age":"xx"}
         * @type {string || null}
         */
        this.TemplateData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;
        this.TemplateData = 'TemplateData' in params ? params.TemplateData : null;

    }
}

/**
 * ListAddressUnsubscribeConfig request structure.
 * @class
 */
class ListAddressUnsubscribeConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * specifies the maximum number of entries to retrieve, with a cap of 100.
         * @type {string || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Describes sender information.
 * @class
 */
class EmailSender extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender address.
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * Sender alias.
         * @type {string || null}
         */
        this.EmailSenderName = null;

        /**
         * Creation time.


         * @type {number || null}
         */
        this.CreatedTimestamp = null;

        /**
         * smtp password type. 0=not set. 1=already set up.
         * @type {number || null}
         */
        this.SmtpPwdType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.EmailSenderName = 'EmailSenderName' in params ? params.EmailSenderName : null;
        this.CreatedTimestamp = 'CreatedTimestamp' in params ? params.CreatedTimestamp : null;
        this.SmtpPwdType = 'SmtpPwdType' in params ? params.SmtpPwdType : null;

    }
}

/**
 * BatchSendEmail response structure.
 * @class
 */
class BatchSendEmailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Send task ID.
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEmailIdentity request structure.
 * @class
 */
class DeleteEmailIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender domain.
         * @type {string || null}
         */
        this.EmailIdentity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailIdentity = 'EmailIdentity' in params ? params.EmailIdentity : null;

    }
}

/**
 * CreateCustomBlacklist response structure.
 * @class
 */
class CreateCustomBlacklistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of recipients.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Actual uploaded quantity.
         * @type {number || null}
         */
        this.ValidCount = null;

        /**
         * Data too long quantity.
         * @type {number || null}
         */
        this.TooLongCount = null;

        /**
         * Repetition count.
         * @type {number || null}
         */
        this.RepeatCount = null;

        /**
         * Incorrect format count.
         * @type {number || null}
         */
        this.InvalidCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ValidCount = 'ValidCount' in params ? params.ValidCount : null;
        this.TooLongCount = 'TooLongCount' in params ? params.TooLongCount : null;
        this.RepeatCount = 'RepeatCount' in params ? params.RepeatCount : null;
        this.InvalidCount = 'InvalidCount' in params ? params.InvalidCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateAddressUnsubscribeConfig response structure.
 * @class
 */
class UpdateAddressUnsubscribeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReceiver request structure.
 * @class
 */
class CreateReceiverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient group name
         * @type {string || null}
         */
        this.ReceiversName = null;

        /**
         * Recipient group description
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiversName = 'ReceiversName' in params ? params.ReceiversName : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * Template content, which must include at least one of TEXT and HTML. A combination of TEXT and HTML is recommended.
 * @class
 */
class TemplateContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTML code after base64 encoding.
         * @type {string || null}
         */
        this.Html = null;

        /**
         * Text content after base64 encoding.
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Html = 'Html' in params ? params.Html : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * Email blocklist structure describes the blocked email address, blocklist time, and reason.
 * @class
 */
class BlackEmailAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time when the email address is blocklisted.
         * @type {string || null}
         */
        this.BounceTime = null;

        /**
         * Blocklisted email address.
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * Reason for being blacklisted.
         * @type {string || null}
         */
        this.IspDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BounceTime = 'BounceTime' in params ? params.BounceTime : null;
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.IspDesc = 'IspDesc' in params ? params.IspDesc : null;

    }
}

/**
 * Email content, which can be plain text (TEXT), pure code (HTML), or a combination of TEXT and HTML (recommended).
 * @class
 */
class Simple extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTML code after base64 encoding. To ensure correct display, this parameter should include all code information and cannot contain external CSS.
         * @type {string || null}
         */
        this.Html = null;

        /**
         * Plain text content after base64 encoding. If HTML is not involved, the plain text will be displayed in the email. Otherwise, this parameter represents the plain text style of the email.
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Html = 'Html' in params ? params.Html : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * CreateEmailAddress request structure.
 * @class
 */
class CreateEmailAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Your sender address. (You can create up to 10 sender addresses for each domain.)
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * Sender name.
         * @type {string || null}
         */
        this.EmailSenderName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.EmailSenderName = 'EmailSenderName' in params ? params.EmailSenderName : null;

    }
}

/**
 * CreateReceiverDetail request structure.
 * @class
 */
class CreateReceiverDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient group ID
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * Email address
         * @type {Array.<string> || null}
         */
        this.Emails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.Emails = 'Emails' in params ? params.Emails : null;

    }
}

/**
 * UpdateEmailTemplate response structure.
 * @class
 */
class UpdateEmailTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReceiverDetailWithData request structure.
 * @class
 */
class CreateReceiverDetailWithDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient list ID.
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * Recipient mailbox and template parameters in array format. limit on the number of recipients not exceeding 20000.
         * @type {Array.<ReceiverInputData> || null}
         */
        this.Datas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;

        if (params.Datas) {
            this.Datas = new Array();
            for (let z in params.Datas) {
                let obj = new ReceiverInputData();
                obj.deserialize(params.Datas[z]);
                this.Datas.push(obj);
            }
        }

    }
}

/**
 * Time parameter required to create a scheduled sending task, such as the start time
 * @class
 */
class TimedEmailParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of a scheduled sending task
         * @type {string || null}
         */
        this.BeginTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;

    }
}

/**
 * Describes the domain name, record type, expected value, and currently configured value of DNS records.
 * @class
 */
class DNSAttributes extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record types: CNAME, A, TXT, and MX.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Domain name.
         * @type {string || null}
         */
        this.SendDomain = null;

        /**
         * Expected value.
         * @type {string || null}
         */
        this.ExpectedValue = null;

        /**
         * Currently configured value.
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Approved or not. The default value is `false`.
         * @type {boolean || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.SendDomain = 'SendDomain' in params ? params.SendDomain : null;
        this.ExpectedValue = 'ExpectedValue' in params ? params.ExpectedValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Describes the email sending status
 * @class
 */
class SendEmailStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `MessageId` field returned by the `SendEmail` API
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * Recipient email address
         * @type {string || null}
         */
        this.ToEmailAddress = null;

        /**
         * Sender email address
         * @type {string || null}
         */
        this.FromEmailAddress = null;

        /**
         * Tencent Cloud processing status
0: Successful.
1001: Internal system exception.
1002: Internal system exception.
1003: Internal system exception.
1003: Internal system exception.
1004: Email sending timed out.
1005: Internal system exception.
1006: You have sent too many emails to the same address in a short period.
1007: The email address is in the blocklist.
1008: The sender domain is rejected by the recipient.
1009: Internal system exception.
1010: The daily email sending limit is exceeded.
1011: You have no permission to send custom content. Use a template.
1013: The sender domain is unsubscribed from by the recipient.
2001: No results were found.
3007: The template ID is invalid or the template is unavailable.
3008: The sender domain is temporarily blocked by the recipient domain.
3009: You have no permission to use this template.
3010: The format of the `TemplateData` field is incorrect. 
3014: The email cannot be sent because the sender domain is not verified.
3020: The recipient email address is in the blocklist.
3024: Failed to precheck the email address format.
3030: Email sending is restricted temporarily due to a high bounce rate.
3033: The account has insufficient balance or overdue payment.
         * @type {number || null}
         */
        this.SendStatus = null;

        /**
         * Recipient processing status
0: Tencent Cloud has accepted the request and added it to the send queue.
1: The email is delivered successfully. `DeliverTime` indicates the time when the email is delivered successfully.
2: The email is discarded. `DeliverMessage` indicates the reason for discarding.
3: The recipient's ESP rejects the email, probably because the email address does not exist or due to other reasons.
8: The email is delayed by the ESP. `DeliverMessage` indicates the reason for delay.
         * @type {number || null}
         */
        this.DeliverStatus = null;

        /**
         * Description of the recipient processing status
         * @type {string || null}
         */
        this.DeliverMessage = null;

        /**
         * Timestamp when the request arrives at Tencent Cloud
         * @type {number || null}
         */
        this.RequestTime = null;

        /**
         * Timestamp when Tencent Cloud delivers the email
         * @type {number || null}
         */
        this.DeliverTime = null;

        /**
         * Whether the recipient has opened the email
         * @type {boolean || null}
         */
        this.UserOpened = null;

        /**
         * Whether the recipient has clicked the links in the email
         * @type {boolean || null}
         */
        this.UserClicked = null;

        /**
         * Whether the recipient has unsubscribed from the email sent by the sender
         * @type {boolean || null}
         */
        this.UserUnsubscribed = null;

        /**
         * Whether the recipient has reported the sender
         * @type {boolean || null}
         */
        this.UserComplainted = null;

        /**
         * Whether the user reports the sender.
         * @type {boolean || null}
         */
        this.UserComplained = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.ToEmailAddress = 'ToEmailAddress' in params ? params.ToEmailAddress : null;
        this.FromEmailAddress = 'FromEmailAddress' in params ? params.FromEmailAddress : null;
        this.SendStatus = 'SendStatus' in params ? params.SendStatus : null;
        this.DeliverStatus = 'DeliverStatus' in params ? params.DeliverStatus : null;
        this.DeliverMessage = 'DeliverMessage' in params ? params.DeliverMessage : null;
        this.RequestTime = 'RequestTime' in params ? params.RequestTime : null;
        this.DeliverTime = 'DeliverTime' in params ? params.DeliverTime : null;
        this.UserOpened = 'UserOpened' in params ? params.UserOpened : null;
        this.UserClicked = 'UserClicked' in params ? params.UserClicked : null;
        this.UserUnsubscribed = 'UserUnsubscribed' in params ? params.UserUnsubscribed : null;
        this.UserComplainted = 'UserComplainted' in params ? params.UserComplainted : null;
        this.UserComplained = 'UserComplained' in params ? params.UserComplained : null;

    }
}

/**
 * ListAddressUnsubscribeConfig response structure.
 * @class
 */
class ListAddressUnsubscribeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Address-Level unsubscribe configuration.
         * @type {Array.<AddressUnsubscribeConfigData> || null}
         */
        this.AddressUnsubscribeConfigList = null;

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.AddressUnsubscribeConfigList) {
            this.AddressUnsubscribeConfigList = new Array();
            for (let z in params.AddressUnsubscribeConfigList) {
                let obj = new AddressUnsubscribeConfigData();
                obj.deserialize(params.AddressUnsubscribeConfigList[z]);
                this.AddressUnsubscribeConfigList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendEmail request structure.
 * @class
 */
class SendEmailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender'S email address. when not using an alias, enter the sender's email address directly, for example: noreply@mail.qcloud.com. to enter a sender alias, follow this format (note that a space must separate the alias and email address): alias+space+<email address>. the alias cannot contain a colon (:).
         * @type {string || null}
         */
        this.FromEmailAddress = null;

        /**
         * Email subject.
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * Recipient email address, supports up to 50 recipients for mass sending. note: the email content will display all recipient addresses. for non-mass sending, call the API multiple times to send.
Specifies that at least one of the Destination, Cc, or Bcc parameters must exist.
         * @type {Array.<string> || null}
         */
        this.Destination = null;

        /**
         * The "reply" email address of the mail. can be filled with an email address where you can receive mail, which can be a personal mailbox. if left empty, the recipient's reply mail will fail to send.
         * @type {string || null}
         */
        this.ReplyToAddresses = null;

        /**
         * Cc recipient email address, supports up to 20 carbon copies.
         * @type {Array.<string> || null}
         */
        this.Cc = null;

        /**
         * Bcc email address, supports up to 20 carbon copies. Bcc and Destination must be unique.
         * @type {Array.<string> || null}
         */
        this.Bcc = null;

        /**
         * Use template for sending and fill in related parameters.
<dx-alert infotype="notice" title="note">this field must be specified if you have not applied for special configuration.</dx-alert>.
         * @type {Template || null}
         */
        this.Template = null;

        /**
         * This parameter has been deprecated.
<dx-alert infotype="notice" title="description"> only customers who have applied for special configuration in the past need to use this. if you have not applied for special configuration, this field does not exist.</dx-alert>.
         * @type {Simple || null}
         */
        this.Simple = null;

        /**
         * When sending an attachment, fill in the related parameters. the tencent cloud API request supports a maximum of 8M request packet. the attachment content transits Base64 and is expected to expand by 1.5 times. you should control the total size of all attachments within 4M. the API will return an error if the overall request exceeds 8M.
         * @type {Array.<Attachment> || null}
         */
        this.Attachments = null;

        /**
         * Unsubscription link options 0: do not add unsubscription link 1: english 2: simplified chinese 3: traditional chinese 4: spanish 5: french 6: german 7: japanese 8: korean 9: arabic 10: thai.
         * @type {string || null}
         */
        this.Unsubscribe = null;

        /**
         * Mail trigger type. 0: non-trigger class, default type, select this type for marketing emails and non-instant emails. 1: trigger class, instant delivery emails such as captcha-intl. if the mail exceeds a certain size, the system will automatically select the non-trigger class channel.
         * @type {number || null}
         */
        this.TriggerType = null;

        /**
         * Message-Id field in the smtp header.
         * @type {string || null}
         */
        this.SmtpMessageId = null;

        /**
         * Other fields that can be set in the smtp header.
         * @type {string || null}
         */
        this.SmtpHeaders = null;

        /**
         * from field in the smtp header. the domain name should be consistent with FromEmailAddress.
         * @type {string || null}
         */
        this.HeaderFrom = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromEmailAddress = 'FromEmailAddress' in params ? params.FromEmailAddress : null;
        this.Subject = 'Subject' in params ? params.Subject : null;
        this.Destination = 'Destination' in params ? params.Destination : null;
        this.ReplyToAddresses = 'ReplyToAddresses' in params ? params.ReplyToAddresses : null;
        this.Cc = 'Cc' in params ? params.Cc : null;
        this.Bcc = 'Bcc' in params ? params.Bcc : null;

        if (params.Template) {
            let obj = new Template();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

        if (params.Simple) {
            let obj = new Simple();
            obj.deserialize(params.Simple)
            this.Simple = obj;
        }

        if (params.Attachments) {
            this.Attachments = new Array();
            for (let z in params.Attachments) {
                let obj = new Attachment();
                obj.deserialize(params.Attachments[z]);
                this.Attachments.push(obj);
            }
        }
        this.Unsubscribe = 'Unsubscribe' in params ? params.Unsubscribe : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.SmtpMessageId = 'SmtpMessageId' in params ? params.SmtpMessageId : null;
        this.SmtpHeaders = 'SmtpHeaders' in params ? params.SmtpHeaders : null;
        this.HeaderFrom = 'HeaderFrom' in params ? params.HeaderFrom : null;

    }
}

/**
 * UpdateEmailIdentity request structure.
 * @class
 */
class UpdateEmailIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain to be verified.
         * @type {string || null}
         */
        this.EmailIdentity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailIdentity = 'EmailIdentity' in params ? params.EmailIdentity : null;

    }
}

/**
 * DeleteEmailIdentity response structure.
 * @class
 */
class DeleteEmailIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteBlackList request structure.
 * @class
 */
class DeleteBlackListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of email addresses to be unblocklisted. Enter at least one address.
         * @type {Array.<string> || null}
         */
        this.EmailAddressList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailAddressList = 'EmailAddressList' in params ? params.EmailAddressList : null;

    }
}

/**
 * DeleteEmailTemplate response structure.
 * @class
 */
class DeleteEmailTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListCustomBlacklist request structure.
 * @class
 */
class ListCustomBlacklistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset, int, starts from 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number limit, int, no more than 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter the state of the blocklist. valid values: 0 (expired), 1 (active), 2 (all).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Email address in blocklist.
         * @type {string || null}
         */
        this.Email = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Email = 'Email' in params ? params.Email : null;

    }
}

/**
 * DeleteEmailTemplate request structure.
 * @class
 */
class DeleteEmailTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID
         * @type {number || null}
         */
        this.TemplateID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;

    }
}

/**
 * Reported spam data.
 * @class
 */
class AbuseReport extends  AbstractModel {
    constructor(){
        super();

        /**
         * Send time.
         * @type {string || null}
         */
        this.DeliverTime = null;

        /**
         * Sender address.
         * @type {string || null}
         */
        this.OriginalMailFrom = null;

        /**
         * Receive email.
         * @type {string || null}
         */
        this.OriginalRcptTo = null;

        /**
         * Sender domain name.
         * @type {string || null}
         */
        this.FromDomain = null;

        /**
         * Complaint time.
         * @type {string || null}
         */
        this.ComplainTime = null;

        /**
         * Recipient domain name.
         * @type {string || null}
         */
        this.Mta = null;

        /**
         * Source IP
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * Data time.
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * Template ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * bulkId
         * @type {string || null}
         */
        this.BulkId = null;

        /**
         * Message-Id in mail.
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * Complaint time.
         * @type {string || null}
         */
        this.AbuseTime = null;

        /**
         * Email subject.
         * @type {string || null}
         */
        this.Subject = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeliverTime = 'DeliverTime' in params ? params.DeliverTime : null;
        this.OriginalMailFrom = 'OriginalMailFrom' in params ? params.OriginalMailFrom : null;
        this.OriginalRcptTo = 'OriginalRcptTo' in params ? params.OriginalRcptTo : null;
        this.FromDomain = 'FromDomain' in params ? params.FromDomain : null;
        this.ComplainTime = 'ComplainTime' in params ? params.ComplainTime : null;
        this.Mta = 'Mta' in params ? params.Mta : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.BulkId = 'BulkId' in params ? params.BulkId : null;
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.AbuseTime = 'AbuseTime' in params ? params.AbuseTime : null;
        this.Subject = 'Subject' in params ? params.Subject : null;

    }
}

/**
 * ListEmailTemplates request structure.
 * @class
 */
class ListEmailTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of templates to get. This parameter is used for pagination.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Template offset to get. This parameter is used for pagination.
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * GetAbuseReport response structure.
 * @class
 */
class GetAbuseReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log data.
         * @type {Array.<AbuseReport> || null}
         */
        this.Data = null;

        /**
         * Total quantity.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AbuseReport();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Recipient details input parameter, including recipient email and template parameter.
 * @class
 */
class ReceiverInputData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient email.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * For variable parameters in template, please use json.dump to format the json object into string type. the object is a set of Key-value pairs. each Key represents a variable in template. variable usage in template is represented by {{Key}}. the appropriate value will be replaced with {{value}} when sent.
Note: the parameter value cannot be data of complex type such as html. the entire JSON structure of TemplateData has a length limit of 800 bytes.
         * @type {string || null}
         */
        this.TemplateData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Email = 'Email' in params ? params.Email : null;
        this.TemplateData = 'TemplateData' in params ? params.TemplateData : null;

    }
}

/**
 * Recipient list details.
 * @class
 */
class ReceiverDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient's address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Creation time.


         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Template parameter.
         * @type {string || null}
         */
        this.TemplateData = null;

        /**
         * Invalid reason.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 1: valid; 2: invalid.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Recipient address id.
         * @type {number || null}
         */
        this.EmailId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Email = 'Email' in params ? params.Email : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TemplateData = 'TemplateData' in params ? params.TemplateData : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EmailId = 'EmailId' in params ? params.EmailId : null;

    }
}

/**
 * ListBlackEmailAddress response structure.
 * @class
 */
class ListBlackEmailAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of blocklisted addresses.
         * @type {Array.<BlackEmailAddress> || null}
         */
        this.BlackList = null;

        /**
         * Total number of blocklisted addresses.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.BlackList) {
            this.BlackList = new Array();
            for (let z in params.BlackList) {
                let obj = new BlackEmailAddress();
                obj.deserialize(params.BlackList[z]);
                this.BlackList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListEmailIdentities response structure.
 * @class
 */
class ListEmailIdentitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of sender domains.
         * @type {Array.<EmailIdentity> || null}
         */
        this.EmailIdentities = null;

        /**
         * Maximum reputation level
         * @type {number || null}
         */
        this.MaxReputationLevel = null;

        /**
         * Maximum number of emails sent per domain name
         * @type {number || null}
         */
        this.MaxDailyQuota = null;

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.EmailIdentities) {
            this.EmailIdentities = new Array();
            for (let z in params.EmailIdentities) {
                let obj = new EmailIdentity();
                obj.deserialize(params.EmailIdentities[z]);
                this.EmailIdentities.push(obj);
            }
        }
        this.MaxReputationLevel = 'MaxReputationLevel' in params ? params.MaxReputationLevel : null;
        this.MaxDailyQuota = 'MaxDailyQuota' in params ? params.MaxDailyQuota : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCustomBlackList request structure.
 * @class
 */
class UpdateCustomBlackListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Blocklist id that needs to change.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * After modification email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Expiration time. if left empty, it indicates permanent validity.
         * @type {string || null}
         */
        this.ExpireDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.ExpireDate = 'ExpireDate' in params ? params.ExpireDate : null;

    }
}

/**
 * UpdateEmailSmtpPassWord request structure.
 * @class
 */
class UpdateEmailSmtpPassWordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SMTP password. Length limit: 64.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Email address. Length limit: 128.
         * @type {string || null}
         */
        this.EmailAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;

    }
}

/**
 * DeleteCustomBlackList request structure.
 * @class
 */
class DeleteCustomBlackListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Email address that needs to be deleted.
         * @type {Array.<string> || null}
         */
        this.Emails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Emails = 'Emails' in params ? params.Emails : null;

    }
}

/**
 * UpdateAddressUnsubscribeConfig request structure.
 * @class
 */
class UpdateAddressUnsubscribeConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender address.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Unsubscribe link option. 0: Do not add unsubscribe link; 1: English 2: Simplified Chinese; 3: Traditional Chinese; 4: Spanish; 5: French; 6: German; 7: Japanese; 8: Korean; 9: Arabic; 10: Thai
         * @type {string || null}
         */
        this.UnsubscribeConfig = null;

        /**
         * 0: disable; 1: enable.
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.UnsubscribeConfig = 'UnsubscribeConfig' in params ? params.UnsubscribeConfig : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ListEmailIdentities request structure.
 * @class
 */
class ListEmailIdentitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * tag.
         * @type {Array.<TagList> || null}
         */
        this.TagList = null;

        /**
         * Pagination limit.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Paging offset.
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

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagList();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * GetEmailTemplate response structure.
 * @class
 */
class GetEmailTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template content.
         * @type {TemplateContent || null}
         */
        this.TemplateContent = null;

        /**
         * Template status. Valid values: `0` (approved); `1` (pending approval); `2` (rejected).
         * @type {number || null}
         */
        this.TemplateStatus = null;

        /**
         * Template name
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.TemplateContent) {
            let obj = new TemplateContent();
            obj.deserialize(params.TemplateContent)
            this.TemplateContent = obj;
        }
        this.TemplateStatus = 'TemplateStatus' in params ? params.TemplateStatus : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReceiver response structure.
 * @class
 */
class CreateReceiverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient group ID, by which recipient email addresses are uploaded
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateEmailSmtpPassWord response structure.
 * @class
 */
class UpdateEmailSmtpPassWordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListReceivers request structure.
 * @class
 */
class ListReceiversRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset, starting from 0. The value is an integer.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of records to query. The value is an integer not exceeding 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Group status (`1`: to be uploaded; `2` uploading; `3` uploaded). To query groups in all states, do not pass in this parameter.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Group name keyword for fuzzy query
         * @type {string || null}
         */
        this.KeyWord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.KeyWord = 'KeyWord' in params ? params.KeyWord : null;

    }
}

/**
 * GetEmailIdentity response structure.
 * @class
 */
class GetEmailIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Verification type. The value is fixed to `DOMAIN`.
         * @type {string || null}
         */
        this.IdentityType = null;

        /**
         * Verification passed or not.
         * @type {boolean || null}
         */
        this.VerifiedForSendingStatus = null;

        /**
         * DNS configuration details.
         * @type {Array.<DNSAttributes> || null}
         */
        this.Attributes = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;
        this.VerifiedForSendingStatus = 'VerifiedForSendingStatus' in params ? params.VerifiedForSendingStatus : null;

        if (params.Attributes) {
            this.Attributes = new Array();
            for (let z in params.Attributes) {
                let obj = new DNSAttributes();
                obj.deserialize(params.Attributes[z]);
                this.Attributes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Attachment structure, including attachment name and Base64-encoded attachment content
 * @class
 */
class Attachment extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attachment name, which cannot exceed 255 characters. Some attachment types are not supported. For details, see [Attachment Types](https://intl.cloud.tencent.com/document/product/1288/51951?from_cn_redirect=1).
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * The Base64-encoded attachment content supports a maximum of 4M. note: tencent cloud API supports up to 8M request packets. the attachment content is expected to expand by 1.5 times after Base64 encoding. you should control the total size of all attachments within 4M. the API will return an error if the overall request exceeds 8M.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Attachment URL. do not use the open function.
         * @type {string || null}
         */
        this.FileURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.FileURL = 'FileURL' in params ? params.FileURL : null;

    }
}

/**
 * ListSendTasks request structure.
 * @class
 */
class ListSendTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset, starting from 0. The value is an integer. `0` means to skip 0 entries.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of records to query. The value is an integer not exceeding 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Task status. `1`: to start; `5`: sending; `6`: sending suspended today; `7`: sending error; `10`: sent. To query tasks in all states, do not pass in this parameter.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Recipient group ID
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * Task type. `1`: immediate; `2`: scheduled; `3`: recurring. To query tasks of all types, do not pass in this parameter.
         * @type {number || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * ListReceiverDetails response structure.
 * @class
 */
class ListReceiverDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data record.
         * @type {Array.<ReceiverDetail> || null}
         */
        this.Data = null;

        /**
         * Number of valid email addresses.
         * @type {number || null}
         */
        this.ValidCount = null;

        /**
         * Number of invalid email addresses.
         * @type {number || null}
         */
        this.InvalidCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ReceiverDetail();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.ValidCount = 'ValidCount' in params ? params.ValidCount : null;
        this.InvalidCount = 'InvalidCount' in params ? params.InvalidCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListEmailTemplates response structure.
 * @class
 */
class ListEmailTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of email templates.
         * @type {Array.<TemplatesMetadata> || null}
         */
        this.TemplatesMetadata = null;

        /**
         * Total number of templates
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.TemplatesMetadata) {
            this.TemplatesMetadata = new Array();
            for (let z in params.TemplatesMetadata) {
                let obj = new TemplatesMetadata();
                obj.deserialize(params.TemplatesMetadata[z]);
                this.TemplatesMetadata.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetEmailIdentity request structure.
 * @class
 */
class GetEmailIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender domain.
         * @type {string || null}
         */
        this.EmailIdentity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailIdentity = 'EmailIdentity' in params ? params.EmailIdentity : null;

    }
}

/**
 * GetStatisticsReport request structure.
 * @class
 */
class GetStatisticsReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start date.
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * End date.
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * Sender domain.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Recipient address type, for example, gmail.com.
         * @type {string || null}
         */
        this.ReceivingMailboxType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ReceivingMailboxType = 'ReceivingMailboxType' in params ? params.ReceivingMailboxType : null;

    }
}

/**
 * GetSendEmailStatus response structure.
 * @class
 */
class GetSendEmailStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status of sent emails
         * @type {Array.<SendEmailStatus> || null}
         */
        this.EmailStatusList = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.EmailStatusList) {
            this.EmailStatusList = new Array();
            for (let z in params.EmailStatusList) {
                let obj = new SendEmailStatus();
                obj.deserialize(params.EmailStatusList[z]);
                this.EmailStatusList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Address-Level unsubscribe configuration.
 * @class
 */
class AddressUnsubscribeConfigData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender address.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Unsubscription link option 0: do not include unsubscription link 1: simplified chinese 2: english 3: traditional chinese 4: spanish 5: french 6: german 7: japanese 8: korean 9: arabic 10: thai.
         * @type {string || null}
         */
        this.UnsubscribeConfig = null;

        /**
         * 0: disabled; 1: enabled.
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.UnsubscribeConfig = 'UnsubscribeConfig' in params ? params.UnsubscribeConfig : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateEmailIdentity request structure.
 * @class
 */
class CreateEmailIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Your sender domain. You are advised to use a third-level domain, for example, mail.qcloud.com.
         * @type {string || null}
         */
        this.EmailIdentity = null;

        /**
         * Generated dkim key length. valid values: 0 (1024), 1 (2048).
         * @type {number || null}
         */
        this.DKIMOption = null;

        /**
         * tag.
         * @type {Array.<TagList> || null}
         */
        this.TagList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailIdentity = 'EmailIdentity' in params ? params.EmailIdentity : null;
        this.DKIMOption = 'DKIMOption' in params ? params.DKIMOption : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagList();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

    }
}

/**
 * UpdateEmailTemplate request structure.
 * @class
 */
class UpdateEmailTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template content.
         * @type {TemplateContent || null}
         */
        this.TemplateContent = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateID = null;

        /**
         * Template name
         * @type {string || null}
         */
        this.TemplateName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TemplateContent) {
            let obj = new TemplateContent();
            obj.deserialize(params.TemplateContent)
            this.TemplateContent = obj;
        }
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;

    }
}

/**
 * CreateEmailTemplate request structure.
 * @class
 */
class CreateEmailTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Template content.
         * @type {TemplateContent || null}
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
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;

        if (params.TemplateContent) {
            let obj = new TemplateContent();
            obj.deserialize(params.TemplateContent)
            this.TemplateContent = obj;
        }

    }
}

/**
 * DeleteBlackList response structure.
 * @class
 */
class DeleteBlackListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCustomBlackList response structure.
 * @class
 */
class DeleteCustomBlackListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAddressUnsubscribeConfig request structure.
 * @class
 */
class DeleteAddressUnsubscribeConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender address.
         * @type {string || null}
         */
        this.Address = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;

    }
}

/**
 * CreateReceiverDetail response structure.
 * @class
 */
class CreateReceiverDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of recipients.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Actual uploaded quantity.
         * @type {number || null}
         */
        this.ValidCount = null;

        /**
         * Data too long quantity.
         * @type {number || null}
         */
        this.TooLongCount = null;

        /**
         * Number of empty email addresses.
         * @type {number || null}
         */
        this.EmptyEmailCount = null;

        /**
         * Repetition count.
         * @type {number || null}
         */
        this.RepeatCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ValidCount = 'ValidCount' in params ? params.ValidCount : null;
        this.TooLongCount = 'TooLongCount' in params ? params.TooLongCount : null;
        this.EmptyEmailCount = 'EmptyEmailCount' in params ? params.EmptyEmailCount : null;
        this.RepeatCount = 'RepeatCount' in params ? params.RepeatCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteReceiver response structure.
 * @class
 */
class DeleteReceiverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendEmail response structure.
 * @class
 */
class SendEmailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Uniquely generated message identifier for receive message.
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Template list structure.
 * @class
 */
class TemplatesMetadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation time.
         * @type {number || null}
         */
        this.CreatedTimestamp = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Template status. 1: under review; 0: approved; 2: rejected; other values: unavailable.
         * @type {number || null}
         */
        this.TemplateStatus = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateID = null;

        /**
         * Review reply
         * @type {string || null}
         */
        this.ReviewReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreatedTimestamp = 'CreatedTimestamp' in params ? params.CreatedTimestamp : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.TemplateStatus = 'TemplateStatus' in params ? params.TemplateStatus : null;
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;
        this.ReviewReason = 'ReviewReason' in params ? params.ReviewReason : null;

    }
}

/**
 * Blocklist description.
 * @class
 */
class BlackAddressDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Blocklist address id.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Creation time.


         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Expiration time
         * @type {string || null}
         */
        this.ExpireDate = null;

        /**
         * Blocklist status. valid values: 0 (expired), 1 (active).
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireDate = 'ExpireDate' in params ? params.ExpireDate : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * GetStatisticsReport response structure.
 * @class
 */
class GetStatisticsReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Daily email sending statistics.
         * @type {Array.<Volume> || null}
         */
        this.DailyVolumes = null;

        /**
         * Overall email sending statistics.
         * @type {Volume || null}
         */
        this.OverallVolume = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.DailyVolumes) {
            this.DailyVolumes = new Array();
            for (let z in params.DailyVolumes) {
                let obj = new Volume();
                obj.deserialize(params.DailyVolumes[z]);
                this.DailyVolumes.push(obj);
            }
        }

        if (params.OverallVolume) {
            let obj = new Volume();
            obj.deserialize(params.OverallVolume)
            this.OverallVolume = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEmailAddress response structure.
 * @class
 */
class DeleteEmailAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListCustomBlacklist response structure.
 * @class
 */
class ListCustomBlacklistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total Quantity of Lists
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Blocklist description.
         * @type {Array.<BlackAddressDetail> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new BlackAddressDetail();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListReceiverDetails request structure.
 * @class
 */
class ListReceiverDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient list ID. specifies the value returned during API creation of a recipient list via the CreateReceiver api.
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * Offset, int, starts from 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number limit, int, no more than 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Recipient address. length: 0-50. example: xxx@te.com. fuzzy query is supported.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Find start time.
         * @type {string || null}
         */
        this.CreateTimeBegin = null;

        /**
         * Search end time.
         * @type {string || null}
         */
        this.CreateTimeEnd = null;

        /**
         * 1: valid; 2: invalid.
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.CreateTimeBegin = 'CreateTimeBegin' in params ? params.CreateTimeBegin : null;
        this.CreateTimeEnd = 'CreateTimeEnd' in params ? params.CreateTimeEnd : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateEmailIdentity response structure.
 * @class
 */
class CreateEmailIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Verification type. The value is fixed to `DOMAIN`.
         * @type {string || null}
         */
        this.IdentityType = null;

        /**
         * Verification passed or not.
         * @type {boolean || null}
         */
        this.VerifiedForSendingStatus = null;

        /**
         * DNS information that needs to be configured.
         * @type {Array.<DNSAttributes> || null}
         */
        this.Attributes = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;
        this.VerifiedForSendingStatus = 'VerifiedForSendingStatus' in params ? params.VerifiedForSendingStatus : null;

        if (params.Attributes) {
            this.Attributes = new Array();
            for (let z in params.Attributes) {
                let obj = new DNSAttributes();
                obj.deserialize(params.Attributes[z]);
                this.Attributes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEmailAddress response structure.
 * @class
 */
class CreateEmailAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetAbuseReport request structure.
 * @class
 */
class GetAbuseReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit quantity (default: 1000).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Sender domain name.
         * @type {string || null}
         */
        this.FromDomain = null;

        /**
         * Sender address.
         * @type {string || null}
         */
        this.FromAddress = null;

        /**
         * Recipient domain name.
         * @type {string || null}
         */
        this.Mta = null;

        /**
         * Receive email.
         * @type {string || null}
         */
        this.ToAddress = null;

        /**
         * Template ID
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FromDomain = 'FromDomain' in params ? params.FromDomain : null;
        this.FromAddress = 'FromAddress' in params ? params.FromAddress : null;
        this.Mta = 'Mta' in params ? params.Mta : null;
        this.ToAddress = 'ToAddress' in params ? params.ToAddress : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DeleteAddressUnsubscribeConfig response structure.
 * @class
 */
class DeleteAddressUnsubscribeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchSendEmail request structure.
 * @class
 */
class BatchSendEmailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender'S email address. please fill in the sender's email address, such as noreply@mail.qcloud.com. if you need to fill in the sender's description, please follow.
Sender &lt;email address&gt; via fill in, such as:.
Tencent cloud team &lt;noreply@mail.qcloud.com&gt;.
         * @type {string || null}
         */
        this.FromEmailAddress = null;

        /**
         * Recipient list ID.
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * Email subject.
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * Task type 1: send now 2: scheduled sending 3: cycle (frequency) sending.
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * The "reply" email address of the mail. can be filled with an email address you can receive mail from, can be a personal mailbox. if left empty, the recipient's reply mail will fail to send.
         * @type {string || null}
         */
        this.ReplyToAddresses = null;

        /**
         * When using a template to send, fill in the related parameters of the template.
<Dx-Alert infotype="notice" title="note">this field must be specified if you have not applied for special configuration.</dx-alert>.
         * @type {Template || null}
         */
        this.Template = null;

        /**
         * Abandoned<Dx-Alert infotype="notice" title="description">only customers who historically applied for special configuration require the use of it. if you have not applied for special configuration, this field does not exist.</dx-alert>.
         * @type {Simple || null}
         */
        this.Simple = null;

        /**
         * Send attachment when required. fill in related parameters (not supported).
         * @type {Array.<Attachment> || null}
         */
        this.Attachments = null;

        /**
         * Required parameter for sending tasks periodically.
         * @type {CycleEmailParam || null}
         */
        this.CycleParam = null;

        /**
         * Required parameter for scheduled task assignment.
         * @type {TimedEmailParam || null}
         */
        this.TimedParam = null;

        /**
         * Unsubscription link options 0: do not add 1: english 2: simplified chinese 3: traditional chinese 4: spanish 5: french 6: german 7: japanese 8: korean 9: arabic 10: thai.
         * @type {string || null}
         */
        this.Unsubscribe = null;

        /**
         * Whether to add an ad flag. valid values: 0 (do not add), 1 (add to the previous subject), 2 (add to the following subject).
         * @type {number || null}
         */
        this.ADLocation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromEmailAddress = 'FromEmailAddress' in params ? params.FromEmailAddress : null;
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.Subject = 'Subject' in params ? params.Subject : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ReplyToAddresses = 'ReplyToAddresses' in params ? params.ReplyToAddresses : null;

        if (params.Template) {
            let obj = new Template();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

        if (params.Simple) {
            let obj = new Simple();
            obj.deserialize(params.Simple)
            this.Simple = obj;
        }

        if (params.Attachments) {
            this.Attachments = new Array();
            for (let z in params.Attachments) {
                let obj = new Attachment();
                obj.deserialize(params.Attachments[z]);
                this.Attachments.push(obj);
            }
        }

        if (params.CycleParam) {
            let obj = new CycleEmailParam();
            obj.deserialize(params.CycleParam)
            this.CycleParam = obj;
        }

        if (params.TimedParam) {
            let obj = new TimedEmailParam();
            obj.deserialize(params.TimedParam)
            this.TimedParam = obj;
        }
        this.Unsubscribe = 'Unsubscribe' in params ? params.Unsubscribe : null;
        this.ADLocation = 'ADLocation' in params ? params.ADLocation : null;

    }
}

/**
 * CreateCustomBlacklist request structure.
 * @class
 */
class CreateCustomBlacklistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Add to blocklist email address.
         * @type {Array.<string> || null}
         */
        this.Emails = null;

        /**
         * Expiration date.
         * @type {string || null}
         */
        this.ExpireDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Emails = 'Emails' in params ? params.Emails : null;
        this.ExpireDate = 'ExpireDate' in params ? params.ExpireDate : null;

    }
}

/**
 * ListEmailAddress request structure.
 * @class
 */
class ListEmailAddressRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * UpdateCustomBlackList response structure.
 * @class
 */
class UpdateCustomBlackListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListBlackEmailAddress request structure.
 * @class
 */
class ListBlackEmailAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start date in the format of `YYYY-MM-DD`
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * End date in the format of `YYYY-MM-DD`
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * Common parameter. It must be used with `Offset`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Common parameter. It must be used with `Limit`. Maximum value of `Limit`: `100`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * You can specify an email address to query.
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * This parameter has been deprecated.
         * @type {string || null}
         */
        this.TaskID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.TaskID = 'TaskID' in params ? params.TaskID : null;

    }
}

/**
 * CreateReceiverDetailWithData response structure.
 * @class
 */
class CreateReceiverDetailWithDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient total number.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Uploaded quantity.
         * @type {number || null}
         */
        this.ValidCount = null;

        /**
         * Data too long quantity.
         * @type {number || null}
         */
        this.TooLongCount = null;

        /**
         * Number of empty email addresses.
         * @type {number || null}
         */
        this.EmptyEmailCount = null;

        /**
         * Repetition count.
         * @type {number || null}
         */
        this.RepeatCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ValidCount = 'ValidCount' in params ? params.ValidCount : null;
        this.TooLongCount = 'TooLongCount' in params ? params.TooLongCount : null;
        this.EmptyEmailCount = 'EmptyEmailCount' in params ? params.EmptyEmailCount : null;
        this.RepeatCount = 'RepeatCount' in params ? params.RepeatCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetEmailTemplate request structure.
 * @class
 */
class GetEmailTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;

    }
}

/**
 * ListSendTasks response structure.
 * @class
 */
class ListSendTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data record
         * @type {Array.<SendTaskData> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SendTaskData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Statistics structure.
 * @class
 */
class Volume extends  AbstractModel {
    constructor(){
        super();

        /**
         * Date
         * @type {string || null}
         */
        this.SendDate = null;

        /**
         * Number of email requests.
         * @type {number || null}
         */
        this.RequestCount = null;

        /**
         * Number of email requests accepted by Tencent Cloud.
         * @type {number || null}
         */
        this.AcceptedCount = null;

        /**
         * Number of delivered emails.
         * @type {number || null}
         */
        this.DeliveredCount = null;

        /**
         * Number of users (deduplicated) who opened emails.
         * @type {number || null}
         */
        this.OpenedCount = null;

        /**
         * Number of recipients who clicked on links in emails.
         * @type {number || null}
         */
        this.ClickedCount = null;

        /**
         * Number of bounced emails.
         * @type {number || null}
         */
        this.BounceCount = null;

        /**
         * Number of users for unsubscription.
         * @type {number || null}
         */
        this.UnsubscribeCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SendDate = 'SendDate' in params ? params.SendDate : null;
        this.RequestCount = 'RequestCount' in params ? params.RequestCount : null;
        this.AcceptedCount = 'AcceptedCount' in params ? params.AcceptedCount : null;
        this.DeliveredCount = 'DeliveredCount' in params ? params.DeliveredCount : null;
        this.OpenedCount = 'OpenedCount' in params ? params.OpenedCount : null;
        this.ClickedCount = 'ClickedCount' in params ? params.ClickedCount : null;
        this.BounceCount = 'BounceCount' in params ? params.BounceCount : null;
        this.UnsubscribeCount = 'UnsubscribeCount' in params ? params.UnsubscribeCount : null;

    }
}

/**
 * Recipient group data type
 * @class
 */
class ReceiverData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient group ID
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * Recipient group name
         * @type {string || null}
         */
        this.ReceiversName = null;

        /**
         * Total number of recipient email addresses
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Recipient list description.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * List status (1 to be uploaded 2 uploading 3 upload complete).
         * @type {number || null}
         */
        this.ReceiversStatus = null;

        /**
         * Creation time, such as 2021-09-28 16:40:35
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Invalid number of recipients.
         * @type {number || null}
         */
        this.InvalidCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.ReceiversName = 'ReceiversName' in params ? params.ReceiversName : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.ReceiversStatus = 'ReceiversStatus' in params ? params.ReceiversStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.InvalidCount = 'InvalidCount' in params ? params.InvalidCount : null;

    }
}

/**
 * CreateAddressUnsubscribeConfig request structure.
 * @class
 */
class CreateAddressUnsubscribeConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender address.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Unsubscribe link option. 0: Do not add unsubscribe link; 1: English 2: Simplified Chinese; 3: Traditional Chinese; 4: Spanish; 5: French; 6: German; 7: Japanese; 8: Korean; 9: Arabic; 10: Thai
         * @type {string || null}
         */
        this.UnsubscribeConfig = null;

        /**
         * 0: disabled; 1: enabled.
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.UnsubscribeConfig = 'UnsubscribeConfig' in params ? params.UnsubscribeConfig : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * UpdateEmailIdentity response structure.
 * @class
 */
class UpdateEmailIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Verification type. The value is fixed to `DOMAIN`.
         * @type {string || null}
         */
        this.IdentityType = null;

        /**
         * Verification passed or not.
         * @type {boolean || null}
         */
        this.VerifiedForSendingStatus = null;

        /**
         * DNS information that needs to be configured.
         * @type {Array.<DNSAttributes> || null}
         */
        this.Attributes = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;
        this.VerifiedForSendingStatus = 'VerifiedForSendingStatus' in params ? params.VerifiedForSendingStatus : null;

        if (params.Attributes) {
            this.Attributes = new Array();
            for (let z in params.Attributes) {
                let obj = new DNSAttributes();
                obj.deserialize(params.Attributes[z]);
                this.Attributes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEmailTemplate response structure.
 * @class
 */
class CreateEmailTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID
         * @type {number || null}
         */
        this.TemplateID = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSendEmailStatus request structure.
 * @class
 */
class GetSendEmailStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Date sent. This parameter is required. You can only query the sending status for a single date at a time.
         * @type {string || null}
         */
        this.RequestDate = null;

        /**
         * Offset. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of pulled entries. Maximum value: `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The `MessageId` field returned by the `SendMail` API.
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * Recipient email address.
         * @type {string || null}
         */
        this.ToEmailAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestDate = 'RequestDate' in params ? params.RequestDate : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.ToEmailAddress = 'ToEmailAddress' in params ? params.ToEmailAddress : null;

    }
}

/**
 * ListEmailAddress response structure.
 * @class
 */
class ListEmailAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of sender addresses description.
         * @type {Array.<EmailSender> || null}
         */
        this.EmailSenders = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.EmailSenders) {
            this.EmailSenders = new Array();
            for (let z in params.EmailSenders) {
                let obj = new EmailSender();
                obj.deserialize(params.EmailSenders[z]);
                this.EmailSenders.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEmailAddress request structure.
 * @class
 */
class DeleteEmailAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender address.
         * @type {string || null}
         */
        this.EmailAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;

    }
}

/**
 * Sender domain verification list structure
 * @class
 */
class EmailIdentity extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender domain.
         * @type {string || null}
         */
        this.IdentityName = null;

        /**
         * Verification type. The value is fixed to `DOMAIN`.
         * @type {string || null}
         */
        this.IdentityType = null;

        /**
         * Verification passed or not.
         * @type {boolean || null}
         */
        this.SendingEnabled = null;

        /**
         * Current reputation level
         * @type {number || null}
         */
        this.CurrentReputationLevel = null;

        /**
         * Maximum number of messages sent per day
         * @type {number || null}
         */
        this.DailyQuota = null;

        /**
         * Independent ip for domain configuration.
         * @type {Array.<string> || null}
         */
        this.SendIp = null;

        /**
         * tag.
         * @type {Array.<TagList> || null}
         */
        this.TagList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdentityName = 'IdentityName' in params ? params.IdentityName : null;
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;
        this.SendingEnabled = 'SendingEnabled' in params ? params.SendingEnabled : null;
        this.CurrentReputationLevel = 'CurrentReputationLevel' in params ? params.CurrentReputationLevel : null;
        this.DailyQuota = 'DailyQuota' in params ? params.DailyQuota : null;
        this.SendIp = 'SendIp' in params ? params.SendIp : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagList();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

    }
}

/**
 * DeleteReceiver request structure.
 * @class
 */
class DeleteReceiverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient group ID, which is returned when a recipient group is created.
         * @type {number || null}
         */
        this.ReceiverId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;

    }
}

/**
 * Parameter required to create a recurring sending task
 * @class
 */
class CycleEmailParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the task
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * Task recurrence in hours
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * Specifies whether to end the cycle. This parameter is used to update the task. Valid values: 0: No; 1: Yes.
         * @type {number || null}
         */
        this.TermCycle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.TermCycle = 'TermCycle' in params ? params.TermCycle : null;

    }
}

/**
 * CreateAddressUnsubscribeConfig response structure.
 * @class
 */
class CreateAddressUnsubscribeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListReceivers response structure.
 * @class
 */
class ListReceiversResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data record
         * @type {Array.<ReceiverData> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ReceiverData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Tag.
 * @class
 */
class TagList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * ses
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

module.exports = {
    SendTaskData: SendTaskData,
    Template: Template,
    ListAddressUnsubscribeConfigRequest: ListAddressUnsubscribeConfigRequest,
    EmailSender: EmailSender,
    BatchSendEmailResponse: BatchSendEmailResponse,
    DeleteEmailIdentityRequest: DeleteEmailIdentityRequest,
    CreateCustomBlacklistResponse: CreateCustomBlacklistResponse,
    UpdateAddressUnsubscribeConfigResponse: UpdateAddressUnsubscribeConfigResponse,
    CreateReceiverRequest: CreateReceiverRequest,
    TemplateContent: TemplateContent,
    BlackEmailAddress: BlackEmailAddress,
    Simple: Simple,
    CreateEmailAddressRequest: CreateEmailAddressRequest,
    CreateReceiverDetailRequest: CreateReceiverDetailRequest,
    UpdateEmailTemplateResponse: UpdateEmailTemplateResponse,
    CreateReceiverDetailWithDataRequest: CreateReceiverDetailWithDataRequest,
    TimedEmailParam: TimedEmailParam,
    DNSAttributes: DNSAttributes,
    SendEmailStatus: SendEmailStatus,
    ListAddressUnsubscribeConfigResponse: ListAddressUnsubscribeConfigResponse,
    SendEmailRequest: SendEmailRequest,
    UpdateEmailIdentityRequest: UpdateEmailIdentityRequest,
    DeleteEmailIdentityResponse: DeleteEmailIdentityResponse,
    DeleteBlackListRequest: DeleteBlackListRequest,
    DeleteEmailTemplateResponse: DeleteEmailTemplateResponse,
    ListCustomBlacklistRequest: ListCustomBlacklistRequest,
    DeleteEmailTemplateRequest: DeleteEmailTemplateRequest,
    AbuseReport: AbuseReport,
    ListEmailTemplatesRequest: ListEmailTemplatesRequest,
    GetAbuseReportResponse: GetAbuseReportResponse,
    ReceiverInputData: ReceiverInputData,
    ReceiverDetail: ReceiverDetail,
    ListBlackEmailAddressResponse: ListBlackEmailAddressResponse,
    ListEmailIdentitiesResponse: ListEmailIdentitiesResponse,
    UpdateCustomBlackListRequest: UpdateCustomBlackListRequest,
    UpdateEmailSmtpPassWordRequest: UpdateEmailSmtpPassWordRequest,
    DeleteCustomBlackListRequest: DeleteCustomBlackListRequest,
    UpdateAddressUnsubscribeConfigRequest: UpdateAddressUnsubscribeConfigRequest,
    ListEmailIdentitiesRequest: ListEmailIdentitiesRequest,
    GetEmailTemplateResponse: GetEmailTemplateResponse,
    CreateReceiverResponse: CreateReceiverResponse,
    UpdateEmailSmtpPassWordResponse: UpdateEmailSmtpPassWordResponse,
    ListReceiversRequest: ListReceiversRequest,
    GetEmailIdentityResponse: GetEmailIdentityResponse,
    Attachment: Attachment,
    ListSendTasksRequest: ListSendTasksRequest,
    ListReceiverDetailsResponse: ListReceiverDetailsResponse,
    ListEmailTemplatesResponse: ListEmailTemplatesResponse,
    GetEmailIdentityRequest: GetEmailIdentityRequest,
    GetStatisticsReportRequest: GetStatisticsReportRequest,
    GetSendEmailStatusResponse: GetSendEmailStatusResponse,
    AddressUnsubscribeConfigData: AddressUnsubscribeConfigData,
    CreateEmailIdentityRequest: CreateEmailIdentityRequest,
    UpdateEmailTemplateRequest: UpdateEmailTemplateRequest,
    CreateEmailTemplateRequest: CreateEmailTemplateRequest,
    DeleteBlackListResponse: DeleteBlackListResponse,
    DeleteCustomBlackListResponse: DeleteCustomBlackListResponse,
    DeleteAddressUnsubscribeConfigRequest: DeleteAddressUnsubscribeConfigRequest,
    CreateReceiverDetailResponse: CreateReceiverDetailResponse,
    DeleteReceiverResponse: DeleteReceiverResponse,
    SendEmailResponse: SendEmailResponse,
    TemplatesMetadata: TemplatesMetadata,
    BlackAddressDetail: BlackAddressDetail,
    GetStatisticsReportResponse: GetStatisticsReportResponse,
    DeleteEmailAddressResponse: DeleteEmailAddressResponse,
    ListCustomBlacklistResponse: ListCustomBlacklistResponse,
    ListReceiverDetailsRequest: ListReceiverDetailsRequest,
    CreateEmailIdentityResponse: CreateEmailIdentityResponse,
    CreateEmailAddressResponse: CreateEmailAddressResponse,
    GetAbuseReportRequest: GetAbuseReportRequest,
    DeleteAddressUnsubscribeConfigResponse: DeleteAddressUnsubscribeConfigResponse,
    BatchSendEmailRequest: BatchSendEmailRequest,
    CreateCustomBlacklistRequest: CreateCustomBlacklistRequest,
    ListEmailAddressRequest: ListEmailAddressRequest,
    UpdateCustomBlackListResponse: UpdateCustomBlackListResponse,
    ListBlackEmailAddressRequest: ListBlackEmailAddressRequest,
    CreateReceiverDetailWithDataResponse: CreateReceiverDetailWithDataResponse,
    GetEmailTemplateRequest: GetEmailTemplateRequest,
    ListSendTasksResponse: ListSendTasksResponse,
    Volume: Volume,
    ReceiverData: ReceiverData,
    CreateAddressUnsubscribeConfigRequest: CreateAddressUnsubscribeConfigRequest,
    UpdateEmailIdentityResponse: UpdateEmailIdentityResponse,
    CreateEmailTemplateResponse: CreateEmailTemplateResponse,
    GetSendEmailStatusRequest: GetSendEmailStatusRequest,
    ListEmailAddressResponse: ListEmailAddressResponse,
    DeleteEmailAddressRequest: DeleteEmailAddressRequest,
    EmailIdentity: EmailIdentity,
    DeleteReceiverRequest: DeleteReceiverRequest,
    CycleEmailParam: CycleEmailParam,
    CreateAddressUnsubscribeConfigResponse: CreateAddressUnsubscribeConfigResponse,
    ListReceiversResponse: ListReceiversResponse,
    TagList: TagList,

}
