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
 * Return parameter structure of InquireAuditCredit
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
         * Unique ID of the request. Each request returns a unique ID. The RequestId is required to troubleshoot issues.
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
 * Request parameter structure of StopLogging
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
 * Request parameter structure of GetAttributeKey
 * @class
 */
class GetAttributeKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Website type. Value range: zh, en. Default value: zh
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
 * Return parameter structure of DeleteAudit
 * @class
 */
class DeleteAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether deletion is successful
         * @type {number || null}
         */
        this.IsSuccess = null;

        /**
         * Unique ID of the request. Each request returns a unique ID. The RequestId is required to troubleshoot issues.
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
 * Request parameter structure of UpdateAudit
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
         * Queue name, which must begin with a letter and can contain up to 64 letters, digits, and dashes (-). This field is required if the value of IsEnableCmqNotify is 1. If a queue is not newly created, CloudAudit will not verify whether it actually exists. Please enter the name with caution so as to avoid log delivery failure and consequent data loss.
         * @type {string || null}
         */
        this.CmqQueueName = null;

        /**
         * Region where the queue is located. Supported CMQ regions can be queried using the ListCmqEnableRegion API. This field is required if the value of IsEnableCmqNotify is 1.
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * User-defined COS bucket name, which can only contain 1-40 lowercase letters (a-z), digits (0-9), and dashes (-) and cannot begin or end with "-". If a bucket is not newly created, CloudAudit will not verify whether it actually exists. Please enter the name with caution so as to avoid log delivery failure and consequent data loss.
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * COS region. Supported regions can be queried using the ListCosEnableRegion API.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Whether to create a COS bucket. 1: yes; 0: no.
         * @type {number || null}
         */
        this.IsCreateNewBucket = null;

        /**
         * Whether to create a queue. 1: yes; 0: no. This field is required if the value of IsEnableCmqNotify is 1.
         * @type {number || null}
         */
        this.IsCreateNewQueue = null;

        /**
         * Whether to enable CMQ message notification. 1: yes; 0: no. Only CMQ queue service is currently supported. If CMQ message notification is enabled, CloudAudit will deliver your log contents to the designated queue in the specified region in real time.
         * @type {number || null}
         */
        this.IsEnableCmqNotify = null;

        /**
         * Prefix of a log file, which can only contain 3-40 ASCII letters (a-z; A-Z) and digits (0-9).
         * @type {string || null}
         */
        this.LogFilePrefix = null;

        /**
         * Manages the read/write attribute of an event. Value range: 1 (read-only), 2 (write-only), 3 (read/write).
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
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;
        this.ReadWriteAttribute = 'ReadWriteAttribute' in params ? params.ReadWriteAttribute : null;

    }
}

/**
 * Request parameter structure of InquireAuditCredit
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
 * Request parameter structure of ListAudits
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
 * Request parameter structure of LookUpEvents
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
         * Maximum number of logs that can be returned
         * @type {number || null}
         */
        this.MaxResults = null;

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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

    }
}

/**
 * Request parameter structure of StartLogging
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
 * Return parameter structure of CreateAudit
 * @class
 */
class CreateAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether creation is successful.
         * @type {number || null}
         */
        this.IsSuccess = null;

        /**
         * Unique ID of the request. Each request returns a unique ID. The RequestId is required to troubleshoot issues.
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
 * Return parameter structure of StartLogging
 * @class
 */
class StartLoggingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is successfully enabled
         * @type {number || null}
         */
        this.IsSuccess = null;

        /**
         * Unique ID of the request. Each request returns a unique ID. The RequestId is required to troubleshoot issues.
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
 * Details of AttributeKey value
 * @class
 */
class AttributeKeyDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Chinese label
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
         * AttributeKey value
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
 * Request parameter structure of ListCosEnableRegion
 * @class
 */
class ListCosEnableRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Website type. zh: Mainland China (default); en: outside Mainland China.
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
 * Return parameter structure of ListCosEnableRegion
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
         * Unique ID of the request. Each request returns a unique ID. The RequestId is required to troubleshoot issues.
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
 * Return parameter structure of StopLogging
 * @class
 */
class StopLoggingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is successfully disabled
         * @type {number || null}
         */
        this.IsSuccess = null;

        /**
         * Unique ID of the request. Each request returns a unique ID. The RequestId is required to troubleshoot issues.
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
         * AttributeKey value range: RequestId, EventName, ReadOnly, Username, ResourceType, ResourceName, AccessKeyId, EventId
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
 * Return parameter structure of ListAudits
 * @class
 */
class ListAuditsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries the summary set of tracking sets
         * @type {Array.<AuditSummary> || null}
         */
        this.AuditSummarys = null;

        /**
         * Unique ID of the request. Each request returns a unique ID. The RequestId is required to troubleshoot issues.
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
 * Return parameter structure of UpdateAudit
 * @class
 */
class UpdateAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether update is successful
         * @type {number || null}
         */
        this.IsSuccess = null;

        /**
         * Unique ID of the request. Each request returns a unique ID. The RequestId is required to troubleshoot issues.
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
 * Request parameter structure of DescribeAudit
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
 * Request parameter structure of CreateAudit
 * @class
 */
class CreateAuditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set name, which can contain 3-128 ASCII letters (a-z; A-Z), digits (0-9), and underscores (_).
         * @type {string || null}
         */
        this.AuditName = null;

        /**
         * User-defined COS bucket name, which can only contain 1-40 lowercase letters (a-z), digits (0-9), and dashes (-) and cannot begin or end with "-". If a bucket is not newly created, CloudAudit will not verify whether it actually exists. Please enter the name with caution so as to avoid log delivery failure and consequent data loss.
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * COS region. Supported regions can be queried using the ListCosEnableRegion API.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Whether to create a COS bucket. 1: yes; 0: no.
         * @type {number || null}
         */
        this.IsCreateNewBucket = null;

        /**
         * Whether to enable CMQ message notification. 1: yes; 0: no. Only CMQ queue service is currently supported. If CMQ message notification is enabled, CloudAudit will deliver your log contents to the designated queue in the specified region in real time.
         * @type {number || null}
         */
        this.IsEnableCmqNotify = null;

        /**
         * Manages the read/write attribute of an event. Value range: 1 (read-only), 2 (write-only), 3 (read/write).
         * @type {number || null}
         */
        this.ReadWriteAttribute = null;

        /**
         * Queue name, which must begin with a letter and can contain up to 64 letters, digits, and dashes (-). This field is required if the value of IsEnableCmqNotify is 1. If a queue is not newly created, CloudAudit will not verify whether it actually exists. Please enter the name with caution so as to avoid log delivery failure and consequent data loss.
         * @type {string || null}
         */
        this.CmqQueueName = null;

        /**
         * Region where the queue is located. Supported CMQ regions can be queried using the ListCmqEnableRegion API. This field is required if the value of IsEnableCmqNotify is 1.
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * Whether to create a queue. 1: yes; 0: no. This field is required if the value of IsEnableCmqNotify is 1.
         * @type {number || null}
         */
        this.IsCreateNewQueue = null;

        /**
         * Prefix of a log file, which can only contain 3-40 ASCII letters (a-z; A-Z) and digits (0-9). It can be left empty and is the account ID by default.
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
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;

    }
}

/**
 * Request parameter structure of DeleteAudit
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
 * Request parameter structure of ListCmqEnableRegion
 * @class
 */
class ListCmqEnableRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Website type. zh: Mainland China (default); en: outside Mainland China.
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
 * Return parameter structure of GetAttributeKey
 * @class
 */
class GetAttributeKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * AttributeKey value range
         * @type {Array.<AttributeKeyDetail> || null}
         */
        this.AttributeKeyDetails = null;

        /**
         * Unique ID of the request. Each request returns a unique ID. The RequestId is required to troubleshoot issues.
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
 * Return parameter structure of ListCmqEnableRegion
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
         * Unique ID of the request. Each request returns a unique ID. The RequestId is required to troubleshoot issues.
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
 * Return parameter structure of LookUpEvents
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
         * Unique ID of the request. Each request returns a unique ID. The RequestId is required to troubleshoot issues.
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
 * CMQ region information
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
 * Return parameter structure of DescribeAudit
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
         * Tracking set status. Value range: 1 (enabled), 0 (disabled).
         * @type {number || null}
         */
        this.AuditStatus = null;

        /**
         * Queue name.
         * @type {string || null}
         */
        this.CmqQueueName = null;

        /**
         * Region where the queue is located.
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * COS bucket name.
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * Region where the COS bucket is located.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Whether to enable CMQ message notification. 1: yes; 0: no.
         * @type {number || null}
         */
        this.IsEnableCmqNotify = null;

        /**
         * Log prefix.
         * @type {string || null}
         */
        this.LogFilePrefix = null;

        /**
         * Manages the read/write attribute of an event. Value range: 1 (read-only), 2 (write-only), 3 (read/write)
         * @type {number || null}
         */
        this.ReadWriteAttribute = null;

        /**
         * Unique ID of the request. Each request returns a unique ID. The RequestId is required to troubleshoot issues.
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
         * Description of event name
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
         * Description of resource type
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
         * Tracking set status. Value range: 1 (enabled), 0 (disabled)
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
