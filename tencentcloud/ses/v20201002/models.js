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
 * ListBlackEmailAddress request structure.
 * @class
 */
class ListBlackEmailAddressRequest extends  AbstractModel {
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
         * Common parameter. It must be used with `Offset`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Common parameter. It must be used with `Limit`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * You can specify an email address to query.
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * You can specify a task ID to query.
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
 * 
 * @class
 */
class Attachment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 
         * @type {string || null}
         */
        this.Content = null;

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
 * GetSendEmailStatus response structure.
 * @class
 */
class GetSendEmailStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Email sending status list
         * @type {Array.<SendEmailStatus> || null}
         */
        this.EmailStatusList = null;

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
 * SendEmail request structure.
 * @class
 */
class SendEmailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender address. Enter a sender address, for example, noreply@mail.qcloud.com. To display the sender name, enter the address in the following format:  
sender &lt;email address&gt;. For example: 
Tencent Cloud team &lt;noreply@mail.qcloud.com&gt;
         * @type {string || null}
         */
        this.FromEmailAddress = null;

        /**
         * Recipient email addresses. You can send an email to up to 50 recipients at a time.
         * @type {Array.<string> || null}
         */
        this.Destination = null;

        /**
         * Email subject.
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * Reply-to address. You can enter a valid personal email address that can receive emails. If this field is left empty, reply emails will be sent to Tencent Cloud. Note: the email content will display all recipient addresses. To send one-to-one emails to several recipients, please call the API multiple times to send the emails.
         * @type {string || null}
         */
        this.ReplyToAddresses = null;

        /**
         * Template when sending emails using a template.
         * @type {Template || null}
         */
        this.Template = null;

        /**
         * Email content when sending emails by calling the API.
         * @type {Simple || null}
         */
        this.Simple = null;

        /**
         * 
         * @type {Array.<Attachment> || null}
         */
        this.Attachments = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromEmailAddress = 'FromEmailAddress' in params ? params.FromEmailAddress : null;
        this.Destination = 'Destination' in params ? params.Destination : null;
        this.Subject = 'Subject' in params ? params.Subject : null;
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
         * Sender name.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EmailSenderName = null;

        /**
         * Creation time.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreatedTimestamp = null;

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
 * DeleteEmailIdentity response structure.
 * @class
 */
class DeleteEmailIdentityResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteEmailTemplate response structure.
 * @class
 */
class DeleteEmailTemplateResponse extends  AbstractModel {
    constructor(){
        super();

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
Note: this field may return `null`, indicating that no valid values can be obtained.
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
         * Number of users who canceled subscriptions.
Note: this field may return `null`, indicating that no valid values can be obtained.
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
         * Template name.
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
 * DeleteEmailTemplate request structure.
 * @class
 */
class DeleteEmailTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Email template to be deleted.
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
 * DeleteBlackList response structure.
 * @class
 */
class DeleteBlackListResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes the email sending status.
 * @class
 */
class SendEmailStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * `MessageId` field returned by the `SendEmail` API
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
         * Tencent Cloud processing status:
0: successful.
1001: internal system exception.
1002: internal system exception.
1003: internal system exception.
1003: internal system exception.
1004: email sending timeout.
1005: internal system exception.
1006: you have sent too many emails to the same address in a short period.
1007: the email address is in the blocklist.
1009: internal system exception.
1010: daily email sending limit exceeded.
1011: no permission to send custom content. Use a template.
2001: no results found.
3007: invalid template ID or unavailable template.
3008: template status exception.
3009: no permission to use this template.
3010: the format of the `TemplateData` field is incorrect. 
3014: unable to send the email because the sender domain is not verified.
3020: the recipient email address is in the blocklist.
3024: failed to pre-check the email address format.
3030: email sending is restricted temporarily due to high bounce rate.
3033: the account has insufficient balance or overdue payment.
         * @type {number || null}
         */
        this.SendStatus = null;

        /**
         * Recipient processing status:
0: Tencent Cloud has accepted the request and added it to the send queue.
1: the email is delivered successfully, `DeliverTime` indicates the time when the email is delivered successfully.
2: the email is discarded. `DeliverMessage` indicates the reason for discarding.
3: the recipient's ESP rejects the email, probably because the email address does not exist or due to other reasons.
8: the email is delayed by the ESP. `DeliverMessage` indicates the reason for delay.
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
         * Whether the recipient has unsubscribed from emails sent by the sender
         * @type {boolean || null}
         */
        this.UserUnsubscribed = null;

        /**
         * Whether the recipient has reported the sender
         * @type {boolean || null}
         */
        this.UserComplainted = null;

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
         * Total number of templates.
         * @type {number || null}
         */
        this.TotalCount = null;

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
 * SendEmail response structure.
 * @class
 */
class SendEmailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID generated when receiving the message.
         * @type {string || null}
         */
        this.MessageId = null;

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
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * GetSendEmailStatus request structure.
 * @class
 */
class GetSendEmailStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sent date. This parameter is required. You can only query the sending status for a single date at a time.
         * @type {string || null}
         */
        this.RequestDate = null;

        /**
         * Offset. Default value: `0`
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of pulled entries. The maximum value is `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * `MessageId` field returned by the `SendMail` API
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * Recipient email address
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

        if (params.EmailIdentities) {
            this.EmailIdentities = new Array();
            for (let z in params.EmailIdentities) {
                let obj = new EmailIdentity();
                obj.deserialize(params.EmailIdentities[z]);
                this.EmailIdentities.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Details of sender addresses.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<EmailSender> || null}
         */
        this.EmailSenders = null;

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

    }
}

/**
 * Email address blocklist structure, including the blocklisted address and the time when it is blocklisted.
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
 * DeleteEmailAddress response structure.
 * @class
 */
class DeleteEmailAddressResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateEmailAddress request structure.
 * @class
 */
class CreateEmailAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Your sender address. You can create up to 10 sender addresses for each domain.
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
 * CreateEmailTemplate response structure.
 * @class
 */
class CreateEmailTemplateResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        if (params.TemplateContent) {
            let obj = new TemplateContent();
            obj.deserialize(params.TemplateContent)
            this.TemplateContent = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListEmailIdentities request structure.
 * @class
 */
class ListEmailIdentitiesRequest extends  AbstractModel {
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

module.exports = {
    Simple: Simple,
    ListEmailAddressRequest: ListEmailAddressRequest,
    GetEmailIdentityResponse: GetEmailIdentityResponse,
    ListBlackEmailAddressRequest: ListBlackEmailAddressRequest,
    Attachment: Attachment,
    Template: Template,
    GetSendEmailStatusResponse: GetSendEmailStatusResponse,
    SendEmailRequest: SendEmailRequest,
    EmailSender: EmailSender,
    DeleteEmailIdentityRequest: DeleteEmailIdentityRequest,
    UpdateEmailIdentityRequest: UpdateEmailIdentityRequest,
    GetEmailIdentityRequest: GetEmailIdentityRequest,
    DeleteEmailIdentityResponse: DeleteEmailIdentityResponse,
    GetStatisticsReportRequest: GetStatisticsReportRequest,
    DeleteEmailTemplateResponse: DeleteEmailTemplateResponse,
    Volume: Volume,
    CreateEmailTemplateRequest: CreateEmailTemplateRequest,
    UpdateEmailTemplateRequest: UpdateEmailTemplateRequest,
    UpdateEmailIdentityResponse: UpdateEmailIdentityResponse,
    DeleteEmailTemplateRequest: DeleteEmailTemplateRequest,
    DeleteBlackListResponse: DeleteBlackListResponse,
    SendEmailStatus: SendEmailStatus,
    ListEmailTemplatesRequest: ListEmailTemplatesRequest,
    DeleteBlackListRequest: DeleteBlackListRequest,
    ListEmailTemplatesResponse: ListEmailTemplatesResponse,
    SendEmailResponse: SendEmailResponse,
    ListBlackEmailAddressResponse: ListBlackEmailAddressResponse,
    GetSendEmailStatusRequest: GetSendEmailStatusRequest,
    TemplatesMetadata: TemplatesMetadata,
    ListEmailIdentitiesResponse: ListEmailIdentitiesResponse,
    ListEmailAddressResponse: ListEmailAddressResponse,
    TemplateContent: TemplateContent,
    GetStatisticsReportResponse: GetStatisticsReportResponse,
    DeleteEmailAddressRequest: DeleteEmailAddressRequest,
    EmailIdentity: EmailIdentity,
    BlackEmailAddress: BlackEmailAddress,
    GetEmailTemplateRequest: GetEmailTemplateRequest,
    DeleteEmailAddressResponse: DeleteEmailAddressResponse,
    CreateEmailIdentityResponse: CreateEmailIdentityResponse,
    CreateEmailIdentityRequest: CreateEmailIdentityRequest,
    CreateEmailAddressRequest: CreateEmailAddressRequest,
    CreateEmailTemplateResponse: CreateEmailTemplateResponse,
    CreateEmailAddressResponse: CreateEmailAddressResponse,
    UpdateEmailTemplateResponse: UpdateEmailTemplateResponse,
    DNSAttributes: DNSAttributes,
    GetEmailTemplateResponse: GetEmailTemplateResponse,
    ListEmailIdentitiesRequest: ListEmailIdentitiesRequest,

}
