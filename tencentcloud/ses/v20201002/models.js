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
 * BatchSendEmail request structure.
 * @class
 */
class BatchSendEmailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sender address. Enter a sender address such as `noreply@mail.qcloud.com`. To display the sender name, enter the address in the following format:
sender &lt;email address&gt;. For example:
Tencent Cloud team &lt;noreply@mail.qcloud.com&gt;
         * @type {string || null}
         */
        this.FromEmailAddress = null;

        /**
         * Recipient group ID
         * @type {number || null}
         */
        this.ReceiverId = null;

        /**
         * Email subject
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * Task type. `1`: immediate; `2`: scheduled; `3`: recurring
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * Reply-to address. You can enter a valid personal email address that can receive emails. If this parameter is left empty, reply emails will fail to be sent.
         * @type {string || null}
         */
        this.ReplyToAddresses = null;

        /**
         * Template when emails are sent using a template
         * @type {Template || null}
         */
        this.Template = null;

        /**
         * Disused
         * @type {Simple || null}
         */
        this.Simple = null;

        /**
         * Attachment parameters to set when you need to send attachments. This parameter is currently unavailable.
         * @type {Array.<Attachment> || null}
         */
        this.Attachments = null;

        /**
         * Parameter required for a recurring sending task
         * @type {CycleEmailParam || null}
         */
        this.CycleParam = null;

        /**
         * Parameter required for a scheduled sending task
         * @type {TimedEmailParam || null}
         */
        this.TimedParam = null;

        /**
         * Unsubscribe option. `1`: provides an unsubscribe link; `0`: does not provide an unsubscribe link
         * @type {string || null}
         */
        this.Unsubscribe = null;

        /**
         * Whether to add an ad tag. `0`: Add no tag; `1`: Add before the subject; `2`: Add after the subject.
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
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Base64-encoded attachment content. You can send attachments of up to 4 MB in the total size. Note: The TencentCloud API supports a request packet of up to 8 MB in size, and the size of the attachment content will increase by 1.5 times after Base64 encoding. Therefore, you need to keep the total size of all attachments below 4 MB. If the entire request exceeds 8 MB, the API will return an error.
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
         * Sender address. Enter a sender address, for example, noreply@mail.qcloud.com.
To display the sender name, enter the address in the following format: 
Sender <email address>
         * @type {string || null}
         */
        this.FromEmailAddress = null;

        /**
         * Recipient email addresses. You can send an email to up to 50 recipients at a time. Note: the email content will display all recipient addresses. To send one-to-one emails to several recipients, please call the API multiple times to send the emails.
         * @type {Array.<string> || null}
         */
        this.Destination = null;

        /**
         * Email subject.
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * Reply-to address. You can enter a valid personal email address that can receive emails. If this parameter is left empty, reply emails will fail to be sent.
         * @type {string || null}
         */
        this.ReplyToAddresses = null;

        /**
         * Template parameters for template-based sending. As `Simple` has been disused, `Template` is required.
         * @type {Template || null}
         */
        this.Template = null;

        /**
         * Disused
         * @type {Simple || null}
         */
        this.Simple = null;

        /**
         * Parameters for the attachments to be sent. The TencentCloud API supports a request packet of up to 8 MB in size, and the size of the attachment content will increase by 1.5 times after Base64 encoding. Therefore, you need to keep the total size of all attachments below 4 MB. If the entire request exceeds 8 MB, the API will return an error.
         * @type {Array.<Attachment> || null}
         */
        this.Attachments = null;

        /**
         * Unsubscribe option. `1`: provides an unsubscribe link; `0`: does not provide an unsubscribe link
         * @type {string || null}
         */
        this.Unsubscribe = null;

        /**
         * Email triggering type. `0` (default): non-trigger-based, suitable for marketing emails and non-immediate emails; `1`: trigger-based, suitable for immediate emails such as emails containing verification codes. If the size of an email exceeds a specified value, the system will automatically choose the non-trigger-based type.
         * @type {number || null}
         */
        this.TriggerType = null;

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
        this.Unsubscribe = 'Unsubscribe' in params ? params.Unsubscribe : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;

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
 * BatchSendEmail response structure.
 * @class
 */
class BatchSendEmailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sending task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
         * Template and template data
Note: This field may return `null`, indicating that no valid value can be found.
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
         * Task exception information
Note: This field may return `null`, indicating that no valid value can be found.
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
         * Recipient group description
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Group status (`1`: to be uploaded; `2` uploading; `3` uploaded)
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.ReceiversStatus = null;

        /**
         * Creation time, such as 2021-09-28 16:40:35
         * @type {string || null}
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
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.ReceiversName = 'ReceiversName' in params ? params.ReceiversName : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.ReceiversStatus = 'ReceiversStatus' in params ? params.ReceiversStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

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
 * CreateReceiverDetail response structure.
 * @class
 */
class CreateReceiverDetailResponse extends  AbstractModel {
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
         * Unique ID generated when receiving the message
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
        this.MaxReputationLevel = 'MaxReputationLevel' in params ? params.MaxReputationLevel : null;
        this.MaxDailyQuota = 'MaxDailyQuota' in params ? params.MaxDailyQuota : null;
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
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;
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
        this.TemplateStatus = 'TemplateStatus' in params ? params.TemplateStatus : null;
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
    BatchSendEmailRequest: BatchSendEmailRequest,
    GetEmailTemplateRequest: GetEmailTemplateRequest,
    ListSendTasksResponse: ListSendTasksResponse,
    CreateReceiverResponse: CreateReceiverResponse,
    CreateEmailTemplateRequest: CreateEmailTemplateRequest,
    ListEmailAddressResponse: ListEmailAddressResponse,
    ListEmailAddressRequest: ListEmailAddressRequest,
    ListReceiversRequest: ListReceiversRequest,
    GetEmailIdentityResponse: GetEmailIdentityResponse,
    ListBlackEmailAddressRequest: ListBlackEmailAddressRequest,
    Attachment: Attachment,
    Template: Template,
    ListSendTasksRequest: ListSendTasksRequest,
    GetSendEmailStatusResponse: GetSendEmailStatusResponse,
    SendEmailRequest: SendEmailRequest,
    EmailSender: EmailSender,
    BatchSendEmailResponse: BatchSendEmailResponse,
    DeleteEmailIdentityRequest: DeleteEmailIdentityRequest,
    UpdateEmailIdentityRequest: UpdateEmailIdentityRequest,
    GetEmailIdentityRequest: GetEmailIdentityRequest,
    DeleteEmailIdentityResponse: DeleteEmailIdentityResponse,
    GetStatisticsReportRequest: GetStatisticsReportRequest,
    DeleteBlackListRequest: DeleteBlackListRequest,
    SendTaskData: SendTaskData,
    TemplatesMetadata: TemplatesMetadata,
    DeleteEmailTemplateResponse: DeleteEmailTemplateResponse,
    Volume: Volume,
    CreateEmailIdentityRequest: CreateEmailIdentityRequest,
    ReceiverData: ReceiverData,
    UpdateEmailIdentityResponse: UpdateEmailIdentityResponse,
    DeleteEmailTemplateRequest: DeleteEmailTemplateRequest,
    DeleteBlackListResponse: DeleteBlackListResponse,
    UpdateEmailTemplateRequest: UpdateEmailTemplateRequest,
    SendEmailStatus: SendEmailStatus,
    ListEmailTemplatesRequest: ListEmailTemplatesRequest,
    CreateReceiverRequest: CreateReceiverRequest,
    CreateReceiverDetailResponse: CreateReceiverDetailResponse,
    ListEmailTemplatesResponse: ListEmailTemplatesResponse,
    SendEmailResponse: SendEmailResponse,
    ListBlackEmailAddressResponse: ListBlackEmailAddressResponse,
    GetSendEmailStatusRequest: GetSendEmailStatusRequest,
    Simple: Simple,
    DeleteReceiverRequest: DeleteReceiverRequest,
    ListEmailIdentitiesResponse: ListEmailIdentitiesResponse,
    DeleteReceiverResponse: DeleteReceiverResponse,
    TemplateContent: TemplateContent,
    GetStatisticsReportResponse: GetStatisticsReportResponse,
    DeleteEmailAddressRequest: DeleteEmailAddressRequest,
    EmailIdentity: EmailIdentity,
    BlackEmailAddress: BlackEmailAddress,
    CycleEmailParam: CycleEmailParam,
    DeleteEmailAddressResponse: DeleteEmailAddressResponse,
    CreateEmailIdentityResponse: CreateEmailIdentityResponse,
    CreateEmailAddressRequest: CreateEmailAddressRequest,
    CreateReceiverDetailRequest: CreateReceiverDetailRequest,
    CreateEmailTemplateResponse: CreateEmailTemplateResponse,
    ListReceiversResponse: ListReceiversResponse,
    CreateEmailAddressResponse: CreateEmailAddressResponse,
    UpdateEmailTemplateResponse: UpdateEmailTemplateResponse,
    TimedEmailParam: TimedEmailParam,
    DNSAttributes: DNSAttributes,
    GetEmailTemplateResponse: GetEmailTemplateResponse,
    ListEmailIdentitiesRequest: ListEmailIdentitiesRequest,

}
