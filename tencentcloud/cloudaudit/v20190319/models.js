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
 * DescribeEvents response structure.
 * @class
 */
class DescribeEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the logset ends.
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
         * Search criterion. Valid values: RequestId, EventName, ActionType (write/read), PrincipalId (sub-account), ResourceType, ResourceName, AccessKeyId, SensitiveAction, ApiErrorCode, and CamErrorCode.
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

module.exports = {
    LookupAttribute: LookupAttribute,
    DescribeEventsResponse: DescribeEventsResponse,
    Resource: Resource,
    Event: Event,
    DescribeEventsRequest: DescribeEventsRequest,

}
