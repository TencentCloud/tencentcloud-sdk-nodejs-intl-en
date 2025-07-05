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
 * InquireAuditCredit response structure.
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
        this.AuditAmount = 'AuditAmount' in params ? params.AuditAmount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopLogging request structure.
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
         * Region description
         * @type {string || null}
         */
        this.CmqRegionName = null;

        /**
         * CMQ region
         * @type {string || null}
         */
        this.CmqRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CmqRegionName = 'CmqRegionName' in params ? params.CmqRegionName : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;

    }
}

/**
 * GetAttributeKey request structure.
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
 * Tracking set storage information
 * @class
 */
class Storage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage type (Valid values: cos, cls)
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * Storage region
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * Storage name. For COS, the storage name is the custom bucket name, which can contain up to 50 lowercase letters, digits, and hyphens. It cannot contain "-APPID" and cannot start or end with a hyphen. For CLS, the storage name is the log topic ID, which can contain 1-50 characters.
         * @type {string || null}
         */
        this.StorageName = null;

        /**
         * Storage directory prefix. The COS log file prefix can only contain 3-40 letters and digits.
         * @type {string || null}
         */
        this.StoragePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.StorageName = 'StorageName' in params ? params.StorageName : null;
        this.StoragePrefix = 'StoragePrefix' in params ? params.StoragePrefix : null;

    }
}

/**
 * DescribeAuditTracks response structure.
 * @class
 */
class DescribeAuditTracksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set list
         * @type {Array.<Tracks> || null}
         */
        this.Tracks = null;

        /**
         * Total number of tracking sets
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

        if (params.Tracks) {
            this.Tracks = new Array();
            for (let z in params.Tracks) {
                let obj = new Tracks();
                obj.deserialize(params.Tracks[z]);
                this.Tracks.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartLogging request structure.
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
 * DeleteAudit response structure.
 * @class
 */
class DeleteAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether deletion succeeded
         * @type {number || null}
         */
        this.IsSuccess = null;

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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAuditTrack response structure.
 * @class
 */
class ModifyAuditTrackResponse extends  AbstractModel {
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
 * InquireAuditCredit request structure.
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
 * DescribeEvents response structure.
 * @class
 */
class DescribeEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the log list has come to an end. `true`: Yes. Pagination is not required.
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * Credential for viewing more logs.
         * @type {number || null}
         */
        this.NextToken = null;

        /**
         * Logset.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {Array.<Event> || null}
         */
        this.Events = null;

        /**
         * This parameter has been deprecated. Please use `ListOver` and `NextToken` for pagination, and read data of the next page when the value of `ListOver` is `false`.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new Event();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListCosEnableRegion response structure.
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
 * LookUpEvents request structure.
 * @class
 */
class LookUpEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Search criteria
         * @type {Array.<LookupAttribute> || null}
         */
        this.LookupAttributes = null;

        /**
         * Credential for viewing more logs
         * @type {string || null}
         */
        this.NextToken = null;

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

        if (params.LookupAttributes) {
            this.LookupAttributes = new Array();
            for (let z in params.LookupAttributes) {
                let obj = new LookupAttribute();
                obj.deserialize(params.LookupAttributes[z]);
                this.LookupAttributes.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * DescribeAuditTrack request structure.
 * @class
 */
class DescribeAuditTrackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set ID
         * @type {number || null}
         */
        this.TrackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrackId = 'TrackId' in params ? params.TrackId : null;

    }
}

/**
 * UpdateAudit request structure.
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
         * Whether to enable CMQ message notification. 1: Yes; 0: No. Only CMQ queue service is currently supported. If CMQ message notification is enabled, CloudAudit will deliver your log contents to the designated queue in the specified region in real time.
         * @type {number || null}
         */
        this.IsEnableCmqNotify = null;

        /**
         * Manages the read/write attribute of event. Valid values: 1 (read-only), 2 (write-only), 3 (read/write).
         * @type {number || null}
         */
        this.ReadWriteAttribute = null;

        /**
         * Globally unique ID of the CMK. This value is required if it is not a newly created KMS element. It can be obtained through `ListKeyAliasByRegion`. CloudAudit will not verify the validity of the `KeyId`. Enter it carefully to avoid data loss.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * COS region. Supported regions can be queried through the `ListCosEnableRegion` API.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Queue name, which must begin with a letter and can contain up to 64 letters, digits, and dashes (-). This field is required if the value of `IsEnableCmqNotify` is 1. If a queue is not newly created, CloudAudit will not verify whether it actually exists. Enter the name with caution to avoid log delivery failure and consequent data loss.
         * @type {string || null}
         */
        this.CmqQueueName = null;

        /**
         * Whether to create a COS bucket. 1: Yes; 0: No.
         * @type {number || null}
         */
        this.IsCreateNewBucket = null;

        /**
         * KMS region. Currently supported regions can be obtained through `ListKmsEnableRegion`. This must be the same as the COS region.
         * @type {string || null}
         */
        this.KmsRegion = null;

        /**
         * Whether to enable KMS encryption. 1: Yes, 0: No. If KMS encryption is enabled, the data will be encrypted when delivered to COS.
         * @type {number || null}
         */
        this.IsEnableKmsEncry = null;

        /**
         * User-defined COS bucket name, which can only contain 1–40 lowercase letters (a–z), digits (0–9), and dashes (-) and cannot begin or end with "-". If a bucket is not newly created, CloudAudit will not verify whether it actually exists. Enter the name with caution to avoid log delivery failure and consequent data loss.
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * Region where the queue is located. Supported CMQ regions can be queried through the `ListCmqEnableRegion` API. This field is required if the value of `IsEnableCmqNotify` is 1.
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * Log file prefix, which can only contain 3–40 ASCII letters (a–z; A–Z) and digits (0–9).
         * @type {string || null}
         */
        this.LogFilePrefix = null;

        /**
         * Whether to create a queue. 1: Yes; 0: No. This field is required if the value of `IsEnableCmqNotify` is 1.
         * @type {number || null}
         */
        this.IsCreateNewQueue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.IsEnableCmqNotify = 'IsEnableCmqNotify' in params ? params.IsEnableCmqNotify : null;
        this.ReadWriteAttribute = 'ReadWriteAttribute' in params ? params.ReadWriteAttribute : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.CmqQueueName = 'CmqQueueName' in params ? params.CmqQueueName : null;
        this.IsCreateNewBucket = 'IsCreateNewBucket' in params ? params.IsCreateNewBucket : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.IsEnableKmsEncry = 'IsEnableKmsEncry' in params ? params.IsEnableKmsEncry : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;
        this.IsCreateNewQueue = 'IsCreateNewQueue' in params ? params.IsCreateNewQueue : null;

    }
}

/**
 * DescribeAuditTracks request structure.
 * @class
 */
class DescribeAuditTracksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * The number of tracking sets per page
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * Tracking set list
 * @class
 */
class Tracks extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Tracking set event type (`Read`: Read; `Write`: Write; `*`: All)
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * The product to which the tracking set event belongs, such as `cos`, or `*` that indicates all products
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Tracking set status (0: Not enabled; 1: Enabled)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The list of API names of tracking set events (`*`: All)
         * @type {Array.<string> || null}
         */
        this.EventNames = null;

        /**
         * Storage type of shipped data. Valid values: `cos`, `cls`.
         * @type {Storage || null}
         */
        this.Storage = null;

        /**
         * Creation time of the tracking set
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Tracking set ID
         * @type {number || null}
         */
        this.TrackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EventNames = 'EventNames' in params ? params.EventNames : null;

        if (params.Storage) {
            let obj = new Storage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TrackId = 'TrackId' in params ? params.TrackId : null;

    }
}

/**
 * CreateAudit response structure.
 * @class
 */
class CreateAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether creation succeeded.
         * @type {number || null}
         */
        this.IsSuccess = null;

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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAuditTrack request structure.
 * @class
 */
class DeleteAuditTrackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set ID
         * @type {number || null}
         */
        this.TrackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrackId = 'TrackId' in params ? params.TrackId : null;

    }
}

/**
 * StartLogging response structure.
 * @class
 */
class StartLoggingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether enablement succeeded
         * @type {number || null}
         */
        this.IsSuccess = null;

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
         * Input box type
         * @type {string || null}
         */
        this.LabelType = null;

        /**
         * Initial display
         * @type {string || null}
         */
        this.Starter = null;

        /**
         * Display sort order
         * @type {number || null}
         */
        this.Order = null;

        /**
         * `AttributeKey` value
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Tag
         * @type {string || null}
         */
        this.Label = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelType = 'LabelType' in params ? params.LabelType : null;
        this.Starter = 'Starter' in params ? params.Starter : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * ListCosEnableRegion request structure.
 * @class
 */
class ListCosEnableRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Website type. zh: Chinese mainland (default); en: outside Chinese mainland.
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
 * CreateAuditTrack response structure.
 * @class
 */
class CreateAuditTrackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set ID
         * @type {number || null}
         */
        this.TrackId = null;

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
        this.TrackId = 'TrackId' in params ? params.TrackId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Resource type
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource name
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;

    }
}

/**
 * ListAudits request structure.
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
 * ModifyAuditTrack request structure.
 * @class
 */
class ModifyAuditTrackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set ID
         * @type {number || null}
         */
        this.TrackId = null;

        /**
         * Tracking set name, which can only contain 3-48 letters, digits, hyphens, and underscores.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Tracking set event type (`Read`: Read; `Write`: Write; `*`: All)
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * The product to which the tracking set event belongs. The value can be a single product such as `cos`, or `*` that indicates all products.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Tracking set status (0: Not enabled; 1: Enabled)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The list of API names of tracking set events. When `ResourceType` is `*`, the value of `EventNames` must be `*`. When `ResourceType` is a specified product, the value of `EventNames` can be `*`. When `ResourceType` is `cos` or `cls`, up to 10 APIs are supported.
         * @type {Array.<string> || null}
         */
        this.EventNames = null;

        /**
         * Storage type of shipped data. Valid values: `cos`, `cls`.
         * @type {Storage || null}
         */
        this.Storage = null;

        /**
         * Whether to enable the feature of shipping organization members’ operation logs to the organization admin account or the trusted service admin account (0: Not enabled; 1: Enabled. This feature can only be enabled by the organization admin account or the trusted service admin account)
         * @type {number || null}
         */
        this.TrackForAllMembers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrackId = 'TrackId' in params ? params.TrackId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EventNames = 'EventNames' in params ? params.EventNames : null;

        if (params.Storage) {
            let obj = new Storage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }
        this.TrackForAllMembers = 'TrackForAllMembers' in params ? params.TrackForAllMembers : null;

    }
}

/**
 * StopLogging response structure.
 * @class
 */
class StopLoggingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether disablement succeeded
         * @type {number || null}
         */
        this.IsSuccess = null;

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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAuditTrack request structure.
 * @class
 */
class CreateAuditTrackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set name, which can only contain 3-48 letters, digits, hyphens, and underscores.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Tracking set event type (`Read`: Read; `Write`: Write; `*`: All)
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * The product to which the tracking set event belongs. The value can be a single product such as `cos`, or `*` that indicates all products.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Tracking set status (0: Not enabled; 1: Enabled)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The list of API names of tracking set events. When `ResourceType` is `*`, the value of `EventNames` must be `*`. When `ResourceType` is a specified product, the value of `EventNames` can be `*`. When `ResourceType` is `cos` or `cls`, up to 10 APIs are supported.
         * @type {Array.<string> || null}
         */
        this.EventNames = null;

        /**
         * Storage type of shipped data. Valid values: `cos`, `cls`.
         * @type {Storage || null}
         */
        this.Storage = null;

        /**
         * Whether to enable the feature of shipping organization members’ operation logs to the organization admin account or the trusted service admin account (0: Not enabled; 1: Enabled. This feature can only be enabled by the organization admin account or the trusted service admin account)
         * @type {number || null}
         */
        this.TrackForAllMembers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EventNames = 'EventNames' in params ? params.EventNames : null;

        if (params.Storage) {
            let obj = new Storage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }
        this.TrackForAllMembers = 'TrackForAllMembers' in params ? params.TrackForAllMembers : null;

    }
}

/**
 * Search criterion
 * @class
 */
class LookupAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: RequestId, EventName, ReadOnly, Username, ResourceType, ResourceName, AccessKeyId, and EventId
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttributeKey = null;

        /**
         * Value of `AttributeValue`
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
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
 * ListAudits response structure.
 * @class
 */
class ListAuditsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Set of queried tracking set summaries
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AuditSummary> || null}
         */
        this.AuditSummarys = null;

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
 * DescribeEvents request structure.
 * @class
 */
class DescribeEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start timestamp in seconds (cannot be 90 days after the current time).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End timestamp in seconds (the time range for query is less than 30 days).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Credential for viewing more logs.
         * @type {number || null}
         */
        this.NextToken = null;

        /**
         * Max number of returned logs (up to 50).
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Search condition. Valid values: `RequestId`, `EventName`, `ActionType` (write/read), `PrincipalId` (sub-account), `ResourceType`, `ResourceName`, `AccessKeyId`, `SensitiveAction`, `ApiErrorCode`, `CamErrorCode`, and `Tags` (Format of AttributeValue: [{"key":"*","value":"*"}])
         * @type {Array.<LookupAttribute> || null}
         */
        this.LookupAttributes = null;

        /**
         * Whether to return the IP location. `1`: yes, `0`: no.
         * @type {number || null}
         */
        this.IsReturnLocation = null;

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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

        if (params.LookupAttributes) {
            this.LookupAttributes = new Array();
            for (let z in params.LookupAttributes) {
                let obj = new LookupAttribute();
                obj.deserialize(params.LookupAttributes[z]);
                this.LookupAttributes.push(obj);
            }
        }
        this.IsReturnLocation = 'IsReturnLocation' in params ? params.IsReturnLocation : null;

    }
}

/**
 * UpdateAudit response structure.
 * @class
 */
class UpdateAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether update succeeded
         * @type {number || null}
         */
        this.IsSuccess = null;

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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAudit request structure.
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
 * CreateAudit request structure.
 * @class
 */
class CreateAuditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable CMQ message notification. 1: Yes; 0: No. Only CMQ queue service is currently supported. If CMQ message notification is enabled, CloudAudit will deliver your log contents to the designated queue in the specified region in real time.
         * @type {number || null}
         */
        this.IsEnableCmqNotify = null;

        /**
         * Manages the read/write attribute of event. Valid values: 1 (read-only), 2 (write-only), 3 (read/write).
         * @type {number || null}
         */
        this.ReadWriteAttribute = null;

        /**
         * Tracking set name, which can contain 3–128 ASCII letters (a–z; A–Z), digits (0–9), and underscores (_).
         * @type {string || null}
         */
        this.AuditName = null;

        /**
         * COS region. Supported regions can be queried through the `ListCosEnableRegion` API.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Whether to create a COS bucket. 1: Yes; 0: No.
         * @type {number || null}
         */
        this.IsCreateNewBucket = null;

        /**
         * User-defined COS bucket name, which can only contain 1–40 lowercase letters (a–z), digits (0–9), and dashes (-) and cannot begin or end with "-". If a bucket is not newly created, CloudAudit will not verify whether it actually exists. Enter the name with caution to avoid log delivery failure and consequent data loss.
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * Globally unique ID of the CMK. This value is required if it is not a newly created KMS element. It can be obtained through `ListKeyAliasByRegion`. CloudAudit will not verify the validity of the `KeyId`. Enter it carefully to avoid data loss.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Queue name, which must begin with a letter and can contain up to 64 letters, digits, and dashes (-). This field is required if the value of `IsEnableCmqNotify` is 1. If a queue is not newly created, CloudAudit will not verify whether it actually exists. Enter the name with caution to avoid log delivery failure and consequent data loss.
         * @type {string || null}
         */
        this.CmqQueueName = null;

        /**
         * KMS region. Currently supported regions can be obtained through `ListKmsEnableRegion`. This must be the same as the COS region.
         * @type {string || null}
         */
        this.KmsRegion = null;

        /**
         * Whether to enable KMS encryption. 1: Yes, 0: No. If KMS encryption is enabled, the data will be encrypted when delivered to COS.
         * @type {number || null}
         */
        this.IsEnableKmsEncry = null;

        /**
         * Region where the queue is located. Supported CMQ regions can be queried through the `ListCmqEnableRegion` API. This field is required if the value of `IsEnableCmqNotify` is 1.
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * Log file prefix, which can only contain 3–40 ASCII letters (a–z; A–Z) and digits (0–9). It can be left empty and is the account ID by default.
         * @type {string || null}
         */
        this.LogFilePrefix = null;

        /**
         * Whether to create a queue. 1: Yes; 0: No. This field is required if the value of `IsEnableCmqNotify` is 1.
         * @type {number || null}
         */
        this.IsCreateNewQueue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsEnableCmqNotify = 'IsEnableCmqNotify' in params ? params.IsEnableCmqNotify : null;
        this.ReadWriteAttribute = 'ReadWriteAttribute' in params ? params.ReadWriteAttribute : null;
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.IsCreateNewBucket = 'IsCreateNewBucket' in params ? params.IsCreateNewBucket : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.CmqQueueName = 'CmqQueueName' in params ? params.CmqQueueName : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.IsEnableKmsEncry = 'IsEnableKmsEncry' in params ? params.IsEnableKmsEncry : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;
        this.IsCreateNewQueue = 'IsCreateNewQueue' in params ? params.IsCreateNewQueue : null;

    }
}

/**
 * DeleteAudit request structure.
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
 * ListCmqEnableRegion request structure.
 * @class
 */
class ListCmqEnableRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Website type. zh: Chinese mainland (default); en: outside Chinese mainland.
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
 * GetAttributeKey response structure.
 * @class
 */
class GetAttributeKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values of `AttributeKey`
         * @type {Array.<AttributeKeyDetail> || null}
         */
        this.AttributeKeyDetails = null;

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
 * ListCmqEnableRegion response structure.
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
 * LookUpEvents response structure.
 * @class
 */
class LookUpEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Credential for viewing more logs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Logset
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Event> || null}
         */
        this.Events = null;

        /**
         * Whether the logset ends
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ListOver = null;

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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new Event();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAuditTrack response structure.
 * @class
 */
class DeleteAuditTrackResponse extends  AbstractModel {
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
 * DescribeAuditTrack response structure.
 * @class
 */
class DescribeAuditTrackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tracking set name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Tracking set event type (`Read`: Read; `Write`: Write; `*`: All)
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * The product to which the tracking set event belongs, such as `cos`, or `*` that indicates all products
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Tracking set status (0: Not enabled; 1: Enabled)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The list of API names of tracking set events (`*`: All)
         * @type {Array.<string> || null}
         */
        this.EventNames = null;

        /**
         * Storage type of shipped data. Valid values: `cos`, `cls`.
         * @type {Storage || null}
         */
        this.Storage = null;

        /**
         * Creation time of the tracking set
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Whether to enable the feature of shipping organization members’ operation logs to the organization admin account or the trusted service admin account
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TrackForAllMembers = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EventNames = 'EventNames' in params ? params.EventNames : null;

        if (params.Storage) {
            let obj = new Storage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TrackForAllMembers = 'TrackForAllMembers' in params ? params.TrackForAllMembers : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAudit response structure.
 * @class
 */
class DescribeAuditResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable CMQ message notification. 1: Yes; 0: No.
         * @type {number || null}
         */
        this.IsEnableCmqNotify = null;

        /**
         * Manages the read/write attribute of event. Valid values: 1 (read-only), 2 (write-only), 3 (read/write)
         * @type {number || null}
         */
        this.ReadWriteAttribute = null;

        /**
         * Globally unique CMK ID.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Tracking set status. 1: enabled, 0: disabled.
         * @type {number || null}
         */
        this.AuditStatus = null;

        /**
         * Tracking set name.
         * @type {string || null}
         */
        this.AuditName = null;

        /**
         * COS bucket region.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Queue name.
         * @type {string || null}
         */
        this.CmqQueueName = null;

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
         * Whether to enable KMS encryption. 1: Yes, 0: No. If KMS encryption is enabled, the data will be encrypted when it is delivered to COS.
         * @type {number || null}
         */
        this.IsEnableKmsEncry = null;

        /**
         * COS bucket name.
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * Queue region.
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * Log prefix.
         * @type {string || null}
         */
        this.LogFilePrefix = null;

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
        this.IsEnableCmqNotify = 'IsEnableCmqNotify' in params ? params.IsEnableCmqNotify : null;
        this.ReadWriteAttribute = 'ReadWriteAttribute' in params ? params.ReadWriteAttribute : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.CmqQueueName = 'CmqQueueName' in params ? params.CmqQueueName : null;
        this.KmsAlias = 'KmsAlias' in params ? params.KmsAlias : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.IsEnableKmsEncry = 'IsEnableKmsEncry' in params ? params.IsEnableKmsEncry : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;
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
         * Log ID
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * Username
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Event Time
         * @type {string || null}
         */
        this.EventTime = null;

        /**
         * Log details
         * @type {string || null}
         */
        this.CloudAuditEvent = null;

        /**
         * Description of resource type in Chinese (please use this field as required; if you are using other languages, ignore this field)
         * @type {string || null}
         */
        this.ResourceTypeCn = null;

        /**
         * Authentication error code
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * Event name
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * Certificate ID
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * Request source
         * @type {string || null}
         */
        this.EventSource = null;

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
         * Root account ID
         * @type {number || null}
         */
        this.AccountID = null;

        /**
         * Source IP
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SourceIPAddress = null;

        /**
         * Description of event name in Chinese (please use this field as required; if you are using other languages, ignore this field)
         * @type {string || null}
         */
        this.EventNameCn = null;

        /**
         * Resource pair
         * @type {Resource || null}
         */
        this.Resources = null;

        /**
         * Event region
         * @type {string || null}
         */
        this.EventRegion = null;

        /**
         * IP location
         * @type {string || null}
         */
        this.Location = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;
        this.CloudAuditEvent = 'CloudAuditEvent' in params ? params.CloudAuditEvent : null;
        this.ResourceTypeCn = 'ResourceTypeCn' in params ? params.ResourceTypeCn : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.EventSource = 'EventSource' in params ? params.EventSource : null;
        this.RequestID = 'RequestID' in params ? params.RequestID : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.AccountID = 'AccountID' in params ? params.AccountID : null;
        this.SourceIPAddress = 'SourceIPAddress' in params ? params.SourceIPAddress : null;
        this.EventNameCn = 'EventNameCn' in params ? params.EventNameCn : null;

        if (params.Resources) {
            let obj = new Resource();
            obj.deserialize(params.Resources)
            this.Resources = obj;
        }
        this.EventRegion = 'EventRegion' in params ? params.EventRegion : null;
        this.Location = 'Location' in params ? params.Location : null;

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
         * Tracking set status. 1: enabled, 0: disabled
         * @type {number || null}
         */
        this.AuditStatus = null;

        /**
         * COS bucket name
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * Tracking set name
         * @type {string || null}
         */
        this.AuditName = null;

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
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;

    }
}

module.exports = {
    InquireAuditCreditResponse: InquireAuditCreditResponse,
    StopLoggingRequest: StopLoggingRequest,
    CmqRegionInfo: CmqRegionInfo,
    GetAttributeKeyRequest: GetAttributeKeyRequest,
    Storage: Storage,
    DescribeAuditTracksResponse: DescribeAuditTracksResponse,
    StartLoggingRequest: StartLoggingRequest,
    DeleteAuditResponse: DeleteAuditResponse,
    ModifyAuditTrackResponse: ModifyAuditTrackResponse,
    InquireAuditCreditRequest: InquireAuditCreditRequest,
    DescribeEventsResponse: DescribeEventsResponse,
    ListCosEnableRegionResponse: ListCosEnableRegionResponse,
    LookUpEventsRequest: LookUpEventsRequest,
    DescribeAuditTrackRequest: DescribeAuditTrackRequest,
    UpdateAuditRequest: UpdateAuditRequest,
    DescribeAuditTracksRequest: DescribeAuditTracksRequest,
    Tracks: Tracks,
    CreateAuditResponse: CreateAuditResponse,
    DeleteAuditTrackRequest: DeleteAuditTrackRequest,
    StartLoggingResponse: StartLoggingResponse,
    AttributeKeyDetail: AttributeKeyDetail,
    ListCosEnableRegionRequest: ListCosEnableRegionRequest,
    CreateAuditTrackResponse: CreateAuditTrackResponse,
    Resource: Resource,
    ListAuditsRequest: ListAuditsRequest,
    ModifyAuditTrackRequest: ModifyAuditTrackRequest,
    StopLoggingResponse: StopLoggingResponse,
    CreateAuditTrackRequest: CreateAuditTrackRequest,
    LookupAttribute: LookupAttribute,
    ListAuditsResponse: ListAuditsResponse,
    DescribeEventsRequest: DescribeEventsRequest,
    UpdateAuditResponse: UpdateAuditResponse,
    DescribeAuditRequest: DescribeAuditRequest,
    CreateAuditRequest: CreateAuditRequest,
    DeleteAuditRequest: DeleteAuditRequest,
    ListCmqEnableRegionRequest: ListCmqEnableRegionRequest,
    GetAttributeKeyResponse: GetAttributeKeyResponse,
    ListCmqEnableRegionResponse: ListCmqEnableRegionResponse,
    LookUpEventsResponse: LookUpEventsResponse,
    DeleteAuditTrackResponse: DeleteAuditTrackResponse,
    CosRegionInfo: CosRegionInfo,
    DescribeAuditTrackResponse: DescribeAuditTrackResponse,
    DescribeAuditResponse: DescribeAuditResponse,
    Event: Event,
    AuditSummary: AuditSummary,

}
