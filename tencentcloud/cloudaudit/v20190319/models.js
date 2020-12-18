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
 * DeleteRecorder response structure.
 * @class
 */
class DeleteRecorderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the recorder was deleted successfully
         * @type {boolean || null}
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
 * DescribeDiscoveredResource response structure.
 * @class
 */
class DescribeDiscoveredResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Last update time
         * @type {string || null}
         */
        this.LastUpdateTime = null;

        /**
         * Resource type
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource creation time
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Tag details
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * Current resource configuration details
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceInfo = null;

        /**
         * Resource region
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource alias
         * @type {string || null}
         */
        this.ResourceAlias = null;

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
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.ResourceInfo = 'ResourceInfo' in params ? params.ResourceInfo : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourceAlias = 'ResourceAlias' in params ? params.ResourceAlias : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Resource configuration items
 * @class
 */
class ConfigurationItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time of getting a configuration item
         * @type {string || null}
         */
        this.ConfigurationItemCaptureTime = null;

        /**
         * Resource relationship list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Relationships = null;

        /**
         * This parameter takes effect only when `DiffMode` is set to `true`. When the input parameter `ChronologicalOrder` of the `GetConfigurationItems` API is set to `Forward`, details of the configuration item before the first one (if not a creation configuration item) will be returned. When this parameter is set to `Reverse`, details of the configuration item after the last one (if not a resource deletion configuration item) will be returned.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastItemInfo = null;

        /**
         * List of events associated with the configuration changes
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<RelatedEvent> || null}
         */
        this.RelatedEvents = null;

        /**
         * Resource type
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Configuration item ID
         * @type {string || null}
         */
        this.ConfigurationStateId = null;

        /**
         * Resource creation time
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceCreateTime = null;

        /**
         * CFA version
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Resource region
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * 
         * @type {string || null}
         */
        this.Configuration = null;

        /**
         * Resource name
         * @type {string || null}
         */
        this.ResourceAlias = null;

        /**
         * Configuration item status. Valid values: OK, ResourceDiscovered, ResourceNotRecorded, ResourceDeleted, ResourceDeletedNotRecorded.
         * @type {string || null}
         */
        this.ConfigurationItemStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigurationItemCaptureTime = 'ConfigurationItemCaptureTime' in params ? params.ConfigurationItemCaptureTime : null;
        this.Relationships = 'Relationships' in params ? params.Relationships : null;
        this.LastItemInfo = 'LastItemInfo' in params ? params.LastItemInfo : null;

        if (params.RelatedEvents) {
            this.RelatedEvents = new Array();
            for (let z in params.RelatedEvents) {
                let obj = new RelatedEvent();
                obj.deserialize(params.RelatedEvents[z]);
                this.RelatedEvents.push(obj);
            }
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ConfigurationStateId = 'ConfigurationStateId' in params ? params.ConfigurationStateId : null;
        this.ResourceCreateTime = 'ResourceCreateTime' in params ? params.ResourceCreateTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.Configuration = 'Configuration' in params ? params.Configuration : null;
        this.ResourceAlias = 'ResourceAlias' in params ? params.ResourceAlias : null;
        this.ConfigurationItemStatus = 'ConfigurationItemStatus' in params ? params.ConfigurationItemStatus : null;

    }
}

/**
 * CreateRecorder response structure.
 * @class
 */
class CreateRecorderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the recorder was created successfully
         * @type {boolean || null}
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
 * Supported resource types
 * @class
 */
class SupportResourceType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * CAM policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Service name
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Resource type name in Chinese
         * @type {string || null}
         */
        this.ResourceTypeName = null;

        /**
         * Service
         * @type {string || null}
         */
        this.Service = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ResourceTypeName = 'ResourceTypeName' in params ? params.ResourceTypeName : null;
        this.Service = 'Service' in params ? params.Service : null;

    }
}

/**
 * DescribeRecorder response structure.
 * @class
 */
class DescribeRecorderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the recorder. Valid values: true (enable), false (disable).
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Recorder name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Last error message of the recorder, which corresponds to `LastErrorCode`.
         * @type {string || null}
         */
        this.LastErrorMessage = null;

        /**
         * The status of the recorder when it recorded information last time. Valid values: PENDING, OK, FAILED.
         * @type {string || null}
         */
        this.LastStatus = null;

        /**
         * List of the resource types monitored by the recorder
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<RecordResourceType> || null}
         */
        this.ResourceTypes = null;

        /**
         * Time when the recorder was enabled last time
         * @type {string || null}
         */
        this.LastStartTime = null;

        /**
         * Last error code of the recorder
         * @type {string || null}
         */
        this.LastErrorCode = null;

        /**
         * Time when the recorder was disabled last time
         * @type {string || null}
         */
        this.LastStopTime = null;

        /**
         * Whether to monitor all currently supported resource types. Valid values: true (yes), false (no).
         * @type {boolean || null}
         */
        this.AllSupported = null;

        /**
         * Recorder creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Role name authorized to CFA
         * @type {string || null}
         */
        this.Role = null;

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
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.LastErrorMessage = 'LastErrorMessage' in params ? params.LastErrorMessage : null;
        this.LastStatus = 'LastStatus' in params ? params.LastStatus : null;

        if (params.ResourceTypes) {
            this.ResourceTypes = new Array();
            for (let z in params.ResourceTypes) {
                let obj = new RecordResourceType();
                obj.deserialize(params.ResourceTypes[z]);
                this.ResourceTypes.push(obj);
            }
        }
        this.LastStartTime = 'LastStartTime' in params ? params.LastStartTime : null;
        this.LastErrorCode = 'LastErrorCode' in params ? params.LastErrorCode : null;
        this.LastStopTime = 'LastStopTime' in params ? params.LastStopTime : null;
        this.AllSupported = 'AllSupported' in params ? params.AllSupported : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateRecorder request structure.
 * @class
 */
class UpdateRecorderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to select all currently supported resource types
         * @type {boolean || null}
         */
        this.AllSupported = null;

        /**
         * Whether to enable the recorder. Valid values: true (enable), false (disable).
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Recorder name after modification
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllSupported = 'AllSupported' in params ? params.AllSupported : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * UpdateRecorder response structure.
 * @class
 */
class UpdateRecorderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the modification is successful
         * @type {boolean || null}
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
 * DescribeDiscoveredResource request structure.
 * @class
 */
class DescribeDiscoveredResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Request ID
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * ListDiscoveredResources response structure.
 * @class
 */
class ListDiscoveredResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Resource list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Resources> || null}
         */
        this.Resources = null;

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

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new Resources();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListSupportResourceTypes request structure.
 * @class
 */
class ListSupportResourceTypesRequest extends  AbstractModel {
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
 * ListSupportResourceTypes response structure.
 * @class
 */
class ListSupportResourceTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of supported resource types
         * @type {Array.<SupportResourceType> || null}
         */
        this.ResourceTypes = null;

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

        if (params.ResourceTypes) {
            this.ResourceTypes = new Array();
            for (let z in params.ResourceTypes) {
                let obj = new SupportResourceType();
                obj.deserialize(params.ResourceTypes[z]);
                this.ResourceTypes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListDiscoveredResources request structure.
 * @class
 */
class ListDiscoveredResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Returned number. default: 20, maximum: 200.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Resource region
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Offset. Default: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Whether the resource is deleted
         * @type {boolean || null}
         */
        this.IsDeleted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.IsDeleted = 'IsDeleted' in params ? params.IsDeleted : null;

    }
}

/**
 * DescribeRecorder request structure.
 * @class
 */
class DescribeRecorderRequest extends  AbstractModel {
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
 * CreateRecorder request structure.
 * @class
 */
class CreateRecorderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role name authorized to CFA
         * @type {string || null}
         */
        this.Role = null;

        /**
         * Whether to select all supported resource types. Valid values: true (default), false.
         * @type {boolean || null}
         */
        this.AllSupported = null;

        /**
         * Whether to enable the resource recorder. Valid values: true (default), false.
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Resource recorder name. Default name: default.
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Role = 'Role' in params ? params.Role : null;
        this.AllSupported = 'AllSupported' in params ? params.AllSupported : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * GetConfigurationItems request structure.
 * @class
 */
class GetConfigurationItemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Chronological order. Valid values: Reverse, Forward (default).
         * @type {string || null}
         */
        this.ChronologicalOrder = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Whether to enable `DiffMode`. Valid values: true, false (default).
         * @type {boolean || null}
         */
        this.DiffMode = null;

        /**
         * Returned number. default: 10, maximum: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * End time
         * @type {string || null}
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
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ChronologicalOrder = 'ChronologicalOrder' in params ? params.ChronologicalOrder : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.DiffMode = 'DiffMode' in params ? params.DiffMode : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * GetConfigurationItems response structure.
 * @class
 */
class GetConfigurationItemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource configuration item list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ConfigurationItems> || null}
         */
        this.ConfigurationItems = null;

        /**
         * Total number
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

        if (params.ConfigurationItems) {
            this.ConfigurationItems = new Array();
            for (let z in params.ConfigurationItems) {
                let obj = new ConfigurationItems();
                obj.deserialize(params.ConfigurationItems[z]);
                this.ConfigurationItems.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRecorder request structure.
 * @class
 */
class DeleteRecorderRequest extends  AbstractModel {
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
 * Resource types monitored by CFA
 * @class
 */
class RecordResourceType extends  AbstractModel {
    constructor(){
        super();

        /**
         * CAM policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Modification time of resource types for monitoring
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Service
         * @type {string || null}
         */
        this.Service = null;

        /**
         * Resource type
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Service name
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Resource type name
         * @type {string || null}
         */
        this.ResourceTypeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Service = 'Service' in params ? params.Service : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ResourceTypeName = 'ResourceTypeName' in params ? params.ResourceTypeName : null;

    }
}

/**
 * Resource list
 * @class
 */
class Resources extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Resource region
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource alias
         * @type {string || null}
         */
        this.ResourceAlias = null;

        /**
         * Whether the resource is deleted
         * @type {boolean || null}
         */
        this.IsDeleted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourceAlias = 'ResourceAlias' in params ? params.ResourceAlias : null;
        this.IsDeleted = 'IsDeleted' in params ? params.IsDeleted : null;

    }
}

/**
 * List of associated events
 * @class
 */
class RelatedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event name
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * Operation time
         * @type {string || null}
         */
        this.EventTime = null;

        /**
         * ID of the operator account
         * @type {number || null}
         */
        this.OperateUin = null;

        /**
         * CloudAudit event ID
         * @type {string || null}
         */
        this.EventReqId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        this.EventReqId = 'EventReqId' in params ? params.EventReqId : null;

    }
}

module.exports = {
    DeleteRecorderResponse: DeleteRecorderResponse,
    DescribeDiscoveredResourceResponse: DescribeDiscoveredResourceResponse,
    ConfigurationItems: ConfigurationItems,
    CreateRecorderResponse: CreateRecorderResponse,
    SupportResourceType: SupportResourceType,
    DescribeRecorderResponse: DescribeRecorderResponse,
    UpdateRecorderRequest: UpdateRecorderRequest,
    UpdateRecorderResponse: UpdateRecorderResponse,
    DescribeDiscoveredResourceRequest: DescribeDiscoveredResourceRequest,
    ListDiscoveredResourcesResponse: ListDiscoveredResourcesResponse,
    ListSupportResourceTypesRequest: ListSupportResourceTypesRequest,
    ListSupportResourceTypesResponse: ListSupportResourceTypesResponse,
    ListDiscoveredResourcesRequest: ListDiscoveredResourcesRequest,
    DescribeRecorderRequest: DescribeRecorderRequest,
    CreateRecorderRequest: CreateRecorderRequest,
    GetConfigurationItemsRequest: GetConfigurationItemsRequest,
    GetConfigurationItemsResponse: GetConfigurationItemsResponse,
    DeleteRecorderRequest: DeleteRecorderRequest,
    RecordResourceType: RecordResourceType,
    Resources: Resources,
    RelatedEvent: RelatedEvent,

}
