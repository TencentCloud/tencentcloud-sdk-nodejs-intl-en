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
 * `InquireAuditCredit` response parameters structure
 * @class
 */
class InquireAuditCreditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of tracking sets that can be created
         * @type {number || null}
         */
        this.AuditAmount = null;

        /**
         * Unique ID of request. Each request returns a unique ID. The `RequestId` is required for troubleshooting.
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
        this.AuditAmount = 'AuditAmount' in params ? params.AuditAmount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `StopLogging` request parameters structure
 * @class
 */
class StopLoggingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set name
         * @type {string || null}
         */
        this.AuditName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;

    }
}

/**
 * CMQ region information
 * @class
 */
class CmqRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMQ region
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * Region description
         * @type {string || null}
         */
        this.CmqRegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.CmqRegionName = 'CmqRegionName' in params ? params.CmqRegionName : null;

    }
}

/**
 * `GetAttributeKey` request parameters structure
 * @class
 */
class GetAttributeKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Website type. Valid values: zh, en. If this parameter is left empty, `zh` will be used by default
         * @type {string || null}
         */
        this.WebsiteType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WebsiteType = 'WebsiteType' in params ? params.WebsiteType : null;

    }
}

/**
 * `DeleteAudit` response parameters structure
 * @class
 */
class DeleteAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates if the deletion was successful
         * @type {number || null}
         */
        this.IsSuccess = null;

        /**
         * Unique ID of request. Each request returns a unique ID. The `RequestId` is required for troubleshooting.
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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `UpdateAudit` request parameters structure
 * @class
 */
class UpdateAuditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set name
         * @type {string || null}
         */
        this.AuditName = null;

        /**
         * Queue name, which must begin with a letter and can contain up to 64 letters, digits, and dashes (-). This field is required if the value of `IsEnableCmqNotify` is 1. If a queue is not newly created, CloudAudit will not verify whether it actually exists. Please enter the name with caution so as to avoid log delivery failure and consequent data loss.
         * @type {string || null}
         */
        this.CmqQueueName = null;

        /**
         * Region where the queue is located. Supported CMQ regions can be queried through the `ListCmqEnableRegion` API. This field is required if the value of `IsEnableCmqNotify` is 1.
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * User-defined COS bucket name, which can only contain 1–40 lowercase letters (a–z), digits (0–9), and dashes (-) and cannot begin or end with "-". If a bucket is not newly created, CloudAudit will not verify whether it actually exists. Please enter the name with caution so as to avoid log delivery failure and consequent data loss.
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * COS region. Supported regions can be queried through the `ListCosEnableRegion` API.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Whether to create a COS bucket. Valid values: 1: yes; 0: no.
         * @type {number || null}
         */
        this.IsCreateNewBucket = null;

        /**
         * Whether to create a queue. Valid values: 1: yes; 0: no. This field is required if the value of `IsEnableCmqNotify` is 1.
         * @type {number || null}
         */
        this.IsCreateNewQueue = null;

        /**
         * Whether to enable CMQ message notification. Valid values: 1: yes; 0: no. Currently, only CMQ is supported for message queue services. If CMQ message notification is enabled, CloudAudit will deliver your log contents to the designated queue in the specified region in real time.
         * @type {number || null}
         */
        this.IsEnableCmqNotify = null;

        /**
         * Whether to enable KMS encryption. Valid values: 1: yes, 0: no. If KMS encryption is enabled, the data will be encrypted when delivered to COS.
         * @type {number || null}
         */
        this.IsEnableKmsEncry = null;

        /**
         * Globally unique ID of the CMK. This value is required if it is not a newly created KMS element. It can be obtained via the `ListKeyAliasByRegion` API. CloudAudit will not verify the validity of the `KeyId`. Please enter it with caution to avoid consequent data loss.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * KMS region. Currently supported regions can be obtained via the `ListKmsEnableRegion` API. This must be the same as the COS region.
         * @type {string || null}
         */
        this.KmsRegion = null;

        /**
         * Log file prefix, which can only contain 3–40 ASCII letters (a–z; A–Z) and digits (0–9).
         * @type {string || null}
         */
        this.LogFilePrefix = null;

        /**
         * Manages the read/write attribute of event. Valid values: 1 (read-only), 2 (write-only), 3 (read/write).
         * @type {number || null}
         */
        this.ReadWriteAttribute = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.CmqQueueName = 'CmqQueueName' in params ? params.CmqQueueName : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.IsCreateNewBucket = 'IsCreateNewBucket' in params ? params.IsCreateNewBucket : null;
        this.IsCreateNewQueue = 'IsCreateNewQueue' in params ? params.IsCreateNewQueue : null;
        this.IsEnableCmqNotify = 'IsEnableCmqNotify' in params ? params.IsEnableCmqNotify : null;
        this.IsEnableKmsEncry = 'IsEnableKmsEncry' in params ? params.IsEnableKmsEncry : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;
        this.ReadWriteAttribute = 'ReadWriteAttribute' in params ? params.ReadWriteAttribute : null;

    }
}

/**
 * `InquireAuditCredit` request parameters structure
 * @class
 */
class InquireAuditCreditRequest extends  AbstractModel {
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
 * `ListAudits` request parameters structure
 * @class
 */
class ListAuditsRequest extends  AbstractModel {
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
 * `LookUpEvents` request parameters structure
 * @class
 */
class LookUpEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Search criteria
         * @type {Array.<LookupAttribute> || null}
         */
        this.LookupAttributes = null;

        /**
         * Maximum number of logs to be returned
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * CloudAudit mode. Valid values: standard, quick. Default value: standard
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Credential for viewing more logs
         * @type {string || null}
         */
        this.NextToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

        if (params.LookupAttributes) {
            this.LookupAttributes = new Array();
            for (let z in params.LookupAttributes) {
                let obj = new LookupAttribute();
                obj.deserialize(params.LookupAttributes[z]);
                this.LookupAttributes.push(obj);
            }
        }
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

    }
}

/**
 * `StartLogging` request parameters structure
 * @class
 */
class StartLoggingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set name
         * @type {string || null}
         */
        this.AuditName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;

    }
}

/**
 * `CreateAudit` response parameters structure
 * @class
 */
class CreateAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates if the creation was successful
         * @type {number || null}
         */
        this.IsSuccess = null;

        /**
         * Unique ID of request. Each request returns a unique ID. The `RequestId` is required for troubleshooting.
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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `StartLogging` response parameters structure
 * @class
 */
class StartLoggingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates if the tracking set was enabled successfully
         * @type {number || null}
         */
        this.IsSuccess = null;

        /**
         * Unique ID of request. Each request returns a unique ID. The `RequestId` is required for troubleshooting.
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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `AttributeKey` value details
 * @class
 */
class AttributeKeyDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Input box type
         * @type {string || null}
         */
        this.LabelType = null;

        /**
         * Display sort order
         * @type {number || null}
         */
        this.Order = null;

        /**
         * Initial display
         * @type {string || null}
         */
        this.Starter = null;

        /**
         * `AttributeKey` value
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.LabelType = 'LabelType' in params ? params.LabelType : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Starter = 'Starter' in params ? params.Starter : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * `ListCosEnableRegion` request parameters structure
 * @class
 */
class ListCosEnableRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Website type. Valid values: zh (Chinese mainland); en (outside Chinese mainland). Default value: zh
         * @type {string || null}
         */
        this.WebsiteType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WebsiteType = 'WebsiteType' in params ? params.WebsiteType : null;

    }
}

/**
 * Resource type
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Resource type
         * @type {string || null}
         */
        this.ResourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

    }
}

/**
 * `ListCosEnableRegion` response parameters structure
 * @class
 */
class ListCosEnableRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CloudAudit-enabled COS AZs
         * @type {Array.<CosRegionInfo> || null}
         */
        this.EnableRegions = null;

        /**
         * Unique ID of request. Each request returns a unique ID. The `RequestId` is required for troubleshooting.
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

        if (params.EnableRegions) {
            this.EnableRegions = new Array();
            for (let z in params.EnableRegions) {
                let obj = new CosRegionInfo();
                obj.deserialize(params.EnableRegions[z]);
                this.EnableRegions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `StopLogging` response parameters structure
 * @class
 */
class StopLoggingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates if the tracking set was disabled successfully
         * @type {number || null}
         */
        this.IsSuccess = null;

        /**
         * Unique ID of request. Each request returns a unique ID. The `RequestId` is required for troubleshooting.
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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Search criteria
 * @class
 */
class LookupAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values of `AttributeKey`: RequestId, EventName, ReadOnly, Username, ResourceType, ResourceName, AccessKeyId, EventId
         * @type {string || null}
         */
        this.AttributeKey = null;

        /**
         * AttributeValue
         * @type {string || null}
         */
        this.AttributeValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttributeKey = 'AttributeKey' in params ? params.AttributeKey : null;
        this.AttributeValue = 'AttributeValue' in params ? params.AttributeValue : null;

    }
}

/**
 * `ListAudits` response parameters structure
 * @class
 */
class ListAuditsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Set of queried tracking set summaries
         * @type {Array.<AuditSummary> || null}
         */
        this.AuditSummarys = null;

        /**
         * Unique ID of request. Each request returns a unique ID. The `RequestId` is required for troubleshooting.
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

        if (params.AuditSummarys) {
            this.AuditSummarys = new Array();
            for (let z in params.AuditSummarys) {
                let obj = new AuditSummary();
                obj.deserialize(params.AuditSummarys[z]);
                this.AuditSummarys.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `UpdateAudit` response parameters structure
 * @class
 */
class UpdateAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates if the update was completed successfully
         * @type {number || null}
         */
        this.IsSuccess = null;

        /**
         * Unique ID of request. Each request returns a unique ID. The `RequestId` is required for troubleshooting.
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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `DescribeAudit` request parameters structure
 * @class
 */
class DescribeAuditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set name
         * @type {string || null}
         */
        this.AuditName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;

    }
}

/**
 * `CreateAudit` request parameters structure
 * @class
 */
class CreateAuditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set name, which can contain 3–128 ASCII letters (a–z; A–Z), digits (0–9), and underscores (_).
         * @type {string || null}
         */
        this.AuditName = null;

        /**
         * User-defined COS bucket name, which can only contain 1–40 lowercase letters (a–z), digits (0–9), and dashes (-) and cannot begin or end with "-". If a bucket is not newly created, CloudAudit will not verify whether it actually exists. Please enter the name with caution so as to avoid log delivery failure and consequent data loss.
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * COS region. Supported regions can be queried through the `ListCosEnableRegion` API.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Whether to create a COS bucket. Valid values: 1: yes; 0: no.
         * @type {number || null}
         */
        this.IsCreateNewBucket = null;

        /**
         * Whether to enable CMQ message notification. Valid values: 1: yes; 0: no. Currently, only CMQ is supported for message queue services. If CMQ message notification is enabled, CloudAudit will deliver your log contents to the designated queue in the specified region in real time.
         * @type {number || null}
         */
        this.IsEnableCmqNotify = null;

        /**
         * Manages the read/write attribute of event. Valid values: 1 (read-only), 2 (write-only), 3 (read/write).
         * @type {number || null}
         */
        this.ReadWriteAttribute = null;

        /**
         * Queue name, which must begin with a letter and can contain up to 64 letters, digits, and dashes (-). This field is required if the value of `IsEnableCmqNotify` is 1. If a queue is not newly created, CloudAudit will not verify whether it actually exists. Please enter the name with caution so as to avoid log delivery failure and consequent data loss.
         * @type {string || null}
         */
        this.CmqQueueName = null;

        /**
         * Region where the queue is located. Supported CMQ regions can be queried through the `ListCmqEnableRegion` API. This field is required if the value of `IsEnableCmqNotify` is 1.
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * Whether to create a queue. Valid values: 1: yes; 0: no. This field is required if the value of `IsEnableCmqNotify` is 1.
         * @type {number || null}
         */
        this.IsCreateNewQueue = null;

        /**
         * Whether to enable KMS encryption. Valid values: 1: yes, 0: no. If KMS encryption is enabled, the data will be encrypted when delivered to COS.
         * @type {number || null}
         */
        this.IsEnableKmsEncry = null;

        /**
         * Globally unique ID of the CMK. This value is required if it is not a newly created KMS element. It can be obtained via the `ListKeyAliasByRegion` API. CloudAudit will not verify the validity of the `KeyId`. Please enter it with caution to avoid consequent data loss.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * KMS region. Currently supported regions can be obtained via the `ListKmsEnableRegion` API. This must be the same as the COS region.
         * @type {string || null}
         */
        this.KmsRegion = null;

        /**
         * Log file prefix, which can only contain 3–40 ASCII letters (a–z; A–Z) and digits (0–9). It can be left empty and is set to the account ID by default.
         * @type {string || null}
         */
        this.LogFilePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.IsCreateNewBucket = 'IsCreateNewBucket' in params ? params.IsCreateNewBucket : null;
        this.IsEnableCmqNotify = 'IsEnableCmqNotify' in params ? params.IsEnableCmqNotify : null;
        this.ReadWriteAttribute = 'ReadWriteAttribute' in params ? params.ReadWriteAttribute : null;
        this.CmqQueueName = 'CmqQueueName' in params ? params.CmqQueueName : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.IsCreateNewQueue = 'IsCreateNewQueue' in params ? params.IsCreateNewQueue : null;
        this.IsEnableKmsEncry = 'IsEnableKmsEncry' in params ? params.IsEnableKmsEncry : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;

    }
}

/**
 * `DeleteAudit` request parameters structure
 * @class
 */
class DeleteAuditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set name
         * @type {string || null}
         */
        this.AuditName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;

    }
}

/**
 * `ListCmqEnableRegion` request parameters structure
 * @class
 */
class ListCmqEnableRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Website type. Valid values: zh (Chinese mainland); en (outside Chinese mainland). Default value: zh
         * @type {string || null}
         */
        this.WebsiteType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WebsiteType = 'WebsiteType' in params ? params.WebsiteType : null;

    }
}

/**
 * `GetAttributeKey` response parameters structure
 * @class
 */
class GetAttributeKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values range of `AttributeKey`
         * @type {Array.<AttributeKeyDetail> || null}
         */
        this.AttributeKeyDetails = null;

        /**
         * Unique ID of request. Each request returns a unique ID. The `RequestId` is required for troubleshooting.
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

        if (params.AttributeKeyDetails) {
            this.AttributeKeyDetails = new Array();
            for (let z in params.AttributeKeyDetails) {
                let obj = new AttributeKeyDetail();
                obj.deserialize(params.AttributeKeyDetails[z]);
                this.AttributeKeyDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `ListCmqEnableRegion` response parameters structure
 * @class
 */
class ListCmqEnableRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CloudAudit-enabled CMQ AZs
         * @type {Array.<CmqRegionInfo> || null}
         */
        this.EnableRegions = null;

        /**
         * Unique ID of request. Each request returns a unique ID. The `RequestId` is required for troubleshooting.
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

        if (params.EnableRegions) {
            this.EnableRegions = new Array();
            for (let z in params.EnableRegions) {
                let obj = new CmqRegionInfo();
                obj.deserialize(params.EnableRegions[z]);
                this.EnableRegions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `LookUpEvents` response parameters structure
 * @class
 */
class LookUpEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset
         * @type {Array.<Event> || null}
         */
        this.Events = null;

        /**
         * Whether the logset ends
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * Credential for viewing more logs
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Unique ID of request. Each request returns a unique ID. The `RequestId` is required for troubleshooting.
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

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new Event();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * COS region information
 * @class
 */
class CosRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS region
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Region description
         * @type {string || null}
         */
        this.CosRegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.CosRegionName = 'CosRegionName' in params ? params.CosRegionName : null;

    }
}

/**
 * `DescribeAudit` response parameters structure
 * @class
 */
class DescribeAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set name.
         * @type {string || null}
         */
        this.AuditName = null;

        /**
         * Tracking set status. Valid values: 1: enabled, 0: disabled.
         * @type {number || null}
         */
        this.AuditStatus = null;

        /**
         * Queue name.
         * @type {string || null}
         */
        this.CmqQueueName = null;

        /**
         * Queue region.
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * COS bucket name.
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * COS bucket region.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Whether to enable CMQ message notification. Valid values: 1: yes; 0: no.
         * @type {number || null}
         */
        this.IsEnableCmqNotify = null;

        /**
         * Whether to enable KMS encryption. Valid values: 1: yes, 0: no. If KMS encryption is enabled, the data will be encrypted when delivered to COS.
         * @type {number || null}
         */
        this.IsEnableKmsEncry = null;

        /**
         * Globally unique CMK ID.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * CMK alias.
         * @type {string || null}
         */
        this.KmsAlias = null;

        /**
         * KMS region.
         * @type {string || null}
         */
        this.KmsRegion = null;

        /**
         * Log prefix.
         * @type {string || null}
         */
        this.LogFilePrefix = null;

        /**
         * Manages the read/write attribute of event. Valid values: 1 (read-only), 2 (write-only), 3 (read/write)
         * @type {number || null}
         */
        this.ReadWriteAttribute = null;

        /**
         * Unique ID of request. Each request returns a unique ID. The `RequestId` is required for troubleshooting.
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
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.CmqQueueName = 'CmqQueueName' in params ? params.CmqQueueName : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.IsEnableCmqNotify = 'IsEnableCmqNotify' in params ? params.IsEnableCmqNotify : null;
        this.IsEnableKmsEncry = 'IsEnableKmsEncry' in params ? params.IsEnableKmsEncry : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KmsAlias = 'KmsAlias' in params ? params.KmsAlias : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;
        this.ReadWriteAttribute = 'ReadWriteAttribute' in params ? params.ReadWriteAttribute : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Log details
 * @class
 */
class Event extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource pair
         * @type {Resource || null}
         */
        this.Resources = null;

        /**
         * Root account ID
         * @type {number || null}
         */
        this.AccountID = null;

        /**
         * Log details
         * @type {string || null}
         */
        this.CloudAuditEvent = null;

        /**
         * Authentication error code
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * Log ID
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * Event name
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * Chinese description of event name (please use this field as required; if you are using other languages, ignore this field)
         * @type {string || null}
         */
        this.EventNameCn = null;

        /**
         * Event region
         * @type {string || null}
         */
        this.EventRegion = null;

        /**
         * Request source
         * @type {string || null}
         */
        this.EventSource = null;

        /**
         * Event time
         * @type {string || null}
         */
        this.EventTime = null;

        /**
         * Request ID
         * @type {string || null}
         */
        this.RequestID = null;

        /**
         * Resource region
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Chinese description of resource type (please use this field as required; if you are using other languages, ignore this field)
         * @type {string || null}
         */
        this.ResourceTypeCn = null;

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * Source IP
         * @type {string || null}
         */
        this.SourceIPAddress = null;

        /**
         * Username
         * @type {string || null}
         */
        this.Username = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Resources) {
            let obj = new Resource();
            obj.deserialize(params.Resources)
            this.Resources = obj;
        }
        this.AccountID = 'AccountID' in params ? params.AccountID : null;
        this.CloudAuditEvent = 'CloudAuditEvent' in params ? params.CloudAuditEvent : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.EventNameCn = 'EventNameCn' in params ? params.EventNameCn : null;
        this.EventRegion = 'EventRegion' in params ? params.EventRegion : null;
        this.EventSource = 'EventSource' in params ? params.EventSource : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;
        this.RequestID = 'RequestID' in params ? params.RequestID : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourceTypeCn = 'ResourceTypeCn' in params ? params.ResourceTypeCn : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SourceIPAddress = 'SourceIPAddress' in params ? params.SourceIPAddress : null;
        this.Username = 'Username' in params ? params.Username : null;

    }
}

/**
 * Tracking set overview
 * @class
 */
class AuditSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set name
         * @type {string || null}
         */
        this.AuditName = null;

        /**
         * Tracking set status. Valid values: 1: enabled, 0: disabled
         * @type {number || null}
         */
        this.AuditStatus = null;

        /**
         * COS bucket name
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * Log prefix
         * @type {string || null}
         */
        this.LogFilePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;

    }
}

module.exports = {
    InquireAuditCreditResponse: InquireAuditCreditResponse,
    StopLoggingRequest: StopLoggingRequest,
    CmqRegionInfo: CmqRegionInfo,
    GetAttributeKeyRequest: GetAttributeKeyRequest,
    DeleteAuditResponse: DeleteAuditResponse,
    UpdateAuditRequest: UpdateAuditRequest,
    InquireAuditCreditRequest: InquireAuditCreditRequest,
    ListAuditsRequest: ListAuditsRequest,
    LookUpEventsRequest: LookUpEventsRequest,
    StartLoggingRequest: StartLoggingRequest,
    CreateAuditResponse: CreateAuditResponse,
    StartLoggingResponse: StartLoggingResponse,
    AttributeKeyDetail: AttributeKeyDetail,
    ListCosEnableRegionRequest: ListCosEnableRegionRequest,
    Resource: Resource,
    ListCosEnableRegionResponse: ListCosEnableRegionResponse,
    StopLoggingResponse: StopLoggingResponse,
    LookupAttribute: LookupAttribute,
    ListAuditsResponse: ListAuditsResponse,
    UpdateAuditResponse: UpdateAuditResponse,
    DescribeAuditRequest: DescribeAuditRequest,
    CreateAuditRequest: CreateAuditRequest,
    DeleteAuditRequest: DeleteAuditRequest,
    ListCmqEnableRegionRequest: ListCmqEnableRegionRequest,
    GetAttributeKeyResponse: GetAttributeKeyResponse,
    ListCmqEnableRegionResponse: ListCmqEnableRegionResponse,
    LookUpEventsResponse: LookUpEventsResponse,
    CosRegionInfo: CosRegionInfo,
    DescribeAuditResponse: DescribeAuditResponse,
    Event: Event,
    AuditSummary: AuditSummary,

}
