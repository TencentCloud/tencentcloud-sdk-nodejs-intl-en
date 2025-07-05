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
 * Describes how to transform data

 * @class
 */
class Transform extends  AbstractModel {
    constructor(){
        super();

        /**
         * Describes how to transform data
         * @type {Array.<OutputStructParam> || null}
         */
        this.OutputStructs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OutputStructs) {
            this.OutputStructs = new Array();
            for (let z in params.OutputStructs) {
                let obj = new OutputStructParam();
                obj.deserialize(params.OutputStructs[z]);
                this.OutputStructs.push(obj);
            }
        }

    }
}

/**
 * ListConnections response structure.
 * @class
 */
class ListConnectionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connector information
         * @type {Array.<Connection> || null}
         */
        this.Connections = null;

        /**
         * Total number of connectors
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

        if (params.Connections) {
            this.Connections = new Array();
            for (let z in params.Connections) {
                let obj = new Connection();
                obj.deserialize(params.Connections[z]);
                this.Connections.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ES rule targets
 * @class
 */
class ESTargetParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network connection type
         * @type {string || null}
         */
        this.NetMode = null;

        /**
         * Index prefix
         * @type {string || null}
         */
        this.IndexPrefix = null;

        /**
         * ES log rotation interval
         * @type {string || null}
         */
        this.RotationInterval = null;

        /**
         * DTS event configuration
         * @type {string || null}
         */
        this.OutputMode = null;

        /**
         * DTS indexing configuration
         * @type {string || null}
         */
        this.IndexSuffixMode = null;

        /**
         * ES template type
         * @type {string || null}
         */
        this.IndexTemplateType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetMode = 'NetMode' in params ? params.NetMode : null;
        this.IndexPrefix = 'IndexPrefix' in params ? params.IndexPrefix : null;
        this.RotationInterval = 'RotationInterval' in params ? params.RotationInterval : null;
        this.OutputMode = 'OutputMode' in params ? params.OutputMode : null;
        this.IndexSuffixMode = 'IndexSuffixMode' in params ? params.IndexSuffixMode : null;
        this.IndexTemplateType = 'IndexTemplateType' in params ? params.IndexTemplateType : null;

    }
}

/**
 * GetEventBus response structure.
 * @class
 */
class GetEventBusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Update time
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * Event bus description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Logset ID
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * Event bus name
         * @type {string || null}
         */
        this.EventBusName = null;

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * (Disused) Event bus type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Billing mode
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * EventBridge log storage period
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SaveDays = null;

        /**
         * EventBridge log topic ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogTopicId = null;

        /**
         * Whether to enable log storage
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.EnableStore = null;

        /**
         * Whether to sort the message
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LinkMode = null;

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
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.EventBusName = 'EventBusName' in params ? params.EventBusName : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.SaveDays = 'SaveDays' in params ? params.SaveDays : null;
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;
        this.EnableStore = 'EnableStore' in params ? params.EnableStore : null;
        this.LinkMode = 'LinkMode' in params ? params.LinkMode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Description of CKafka delivery target retry policy
 * @class
 */
class RetryPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Retry interval in seconds
         * @type {number || null}
         */
        this.RetryInterval = null;

        /**
         * Maximum number of retries
         * @type {number || null}
         */
        this.MaxRetryAttempts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RetryInterval = 'RetryInterval' in params ? params.RetryInterval : null;
        this.MaxRetryAttempts = 'MaxRetryAttempts' in params ? params.MaxRetryAttempts : null;

    }
}

/**
 * CKafka delivery target description
 * @class
 */
class CkafkaTargetParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * CKafka topic to be delivered to
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Retry policy
         * @type {RetryPolicy || null}
         */
        this.RetryPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

        if (params.RetryPolicy) {
            let obj = new RetryPolicy();
            obj.deserialize(params.RetryPolicy)
            this.RetryPolicy = obj;
        }

    }
}

/**
 * ListConnections request structure.
 * @class
 */
class ListConnectionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Indicates by which field to sort the returned results. Valid values: AddTime, ModTime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Indicates whether the returned results are sorted in ascending or descending order. Valid values: ASC, DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Offset. Default value: 0.
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
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DeleteRule request structure.
 * @class
 */
class DeleteRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Event rule ID
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * UpdateRule response structure.
 * @class
 */
class UpdateRuleResponse extends  AbstractModel {
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
 * CreateTarget request structure.
 * @class
 */
class CreateTargetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Target type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Target description
         * @type {TargetDescription || null}
         */
        this.TargetDescription = null;

        /**
         * Event rule ID
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TargetDescription) {
            let obj = new TargetDescription();
            obj.deserialize(params.TargetDescription)
            this.TargetDescription = obj;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DeleteTarget response structure.
 * @class
 */
class DeleteTargetResponse extends  AbstractModel {
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
 * DescribeLogTagValue request structure.
 * @class
 */
class DescribeLogTagValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The query start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The query end time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Aggregation field
         * @type {string || null}
         */
        this.GroupField = null;

        /**
         * Number of pages.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Logs returned per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter conditions
         * @type {Array.<LogFilter> || null}
         */
        this.Filter = null;

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
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.GroupField = 'GroupField' in params ? params.GroupField : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new LogFilter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }

    }
}

/**
 * Target overview
 * @class
 */
class TargetBrief extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target ID
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * Target type
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Data Transfer Service (DTS) connector information
 * @class
 */
class DTSParams extends  AbstractModel {
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
 * ListRules response structure.
 * @class
 */
class ListRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event rule information
         * @type {Array.<Rule> || null}
         */
        this.Rules = null;

        /**
         * Total number of event rules
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new Rule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTarget response structure.
 * @class
 */
class CreateTargetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target ID
         * @type {string || null}
         */
        this.TargetId = null;

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
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckRule request structure.
 * @class
 */
class CheckRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Event = null;

        /**
         * 
         * @type {string || null}
         */
        this.EventPattern = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Event = 'Event' in params ? params.Event : null;
        this.EventPattern = 'EventPattern' in params ? params.EventPattern : null;

    }
}

/**
 * GetRule response structure.
 * @class
 */
class GetRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Event rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Event rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Event rule status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Switch
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Event rule description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Event pattern
         * @type {string || null}
         */
        this.EventPattern = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.ModTime = null;

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
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.EventPattern = 'EventPattern' in params ? params.EventPattern : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateConnection response structure.
 * @class
 */
class CreateConnectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connector ID
         * @type {string || null}
         */
        this.ConnectionId = null;

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
        this.ConnectionId = 'ConnectionId' in params ? params.ConnectionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Event bus information
 * @class
 */
class EventBus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Update time
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * Event bus description, which can contain up to 200 characters of any type
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Event bus name, which can contain 2–60 letters, digits, underscores, and hyphens and must start with a letter and end with a digit or letter
         * @type {string || null}
         */
        this.EventBusName = null;

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Event bus type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Billing Mode
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Connector basic information
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ConnectionBrief> || null}
         */
        this.ConnectionBriefs = null;

        /**
         * Target information
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<TargetBrief> || null}
         */
        this.TargetBriefs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.EventBusName = 'EventBusName' in params ? params.EventBusName : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

        if (params.ConnectionBriefs) {
            this.ConnectionBriefs = new Array();
            for (let z in params.ConnectionBriefs) {
                let obj = new ConnectionBrief();
                obj.deserialize(params.ConnectionBriefs[z]);
                this.ConnectionBriefs.push(obj);
            }
        }

        if (params.TargetBriefs) {
            this.TargetBriefs = new Array();
            for (let z in params.TargetBriefs) {
                let obj = new TargetBrief();
                obj.deserialize(params.TargetBriefs[z]);
                this.TargetBriefs.push(obj);
            }
        }

    }
}

/**
 * ListTargets request structure.
 * @class
 */
class ListTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Indicates by which field to sort the returned results. Valid values: AddTime (creation time), ModTime (modification time)
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Indicates whether the returned results are sorted in ascending or descending order. Valid values: ASC (ascending order), DESC (descending order)
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * Transformer
 * @class
 */
class Transformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Describes how to extract data
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Extraction || null}
         */
        this.Extraction = null;

        /**
         * Describes how to filter data
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {EtlFilter || null}
         */
        this.EtlFilter = null;

        /**
         * Describes how to transform data
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Transform || null}
         */
        this.Transform = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Extraction) {
            let obj = new Extraction();
            obj.deserialize(params.Extraction)
            this.Extraction = obj;
        }

        if (params.EtlFilter) {
            let obj = new EtlFilter();
            obj.deserialize(params.EtlFilter)
            this.EtlFilter = obj;
        }

        if (params.Transform) {
            let obj = new Transform();
            obj.deserialize(params.Transform)
            this.Transform = obj;
        }

    }
}

/**
 * Target information
 * @class
 */
class Target extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Target ID
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * Target description
         * @type {TargetDescription || null}
         */
        this.TargetDescription = null;

        /**
         * Event rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Enables batch delivery
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.EnableBatchDelivery = null;

        /**
         * Maximum waiting time for batch delivery
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BatchTimeout = null;

        /**
         * Maximum number of events in batch delivery
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BatchEventCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;

        if (params.TargetDescription) {
            let obj = new TargetDescription();
            obj.deserialize(params.TargetDescription)
            this.TargetDescription = obj;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.EnableBatchDelivery = 'EnableBatchDelivery' in params ? params.EnableBatchDelivery : null;
        this.BatchTimeout = 'BatchTimeout' in params ? params.BatchTimeout : null;
        this.BatchEventCount = 'BatchEventCount' in params ? params.BatchEventCount : null;

    }
}

/**
 * ListRules request structure.
 * @class
 */
class ListRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Indicates by which field to sort the returned results. Valid values: AddTime (creation time), ModTime (modification time)
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Indicates whether the returned results are sorted in ascending or descending order. Valid values: ASC (ascending order), DESC (descending order)
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * SCF parameter
 * @class
 */
class SCFParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maximum waiting time for batch delivery
         * @type {number || null}
         */
        this.BatchTimeout = null;

        /**
         * Maximum number of events in batch delivery
         * @type {number || null}
         */
        this.BatchEventCount = null;

        /**
         * Enables batch delivery
         * @type {boolean || null}
         */
        this.EnableBatchDelivery = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchTimeout = 'BatchTimeout' in params ? params.BatchTimeout : null;
        this.BatchEventCount = 'BatchEventCount' in params ? params.BatchEventCount : null;
        this.EnableBatchDelivery = 'EnableBatchDelivery' in params ? params.EnableBatchDelivery : null;

    }
}

/**
 * DLQ configuration of rule
 * @class
 */
class DeadLetterConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Three modes are supported: DLQ, drop, and ignore error, which correspond to `DLQ`, `DROP`, and `IGNORE_ERROR` respectively
         * @type {string || null}
         */
        this.DisposeMethod = null;

        /**
         * If the DLQ mode is set, this option is required. Error messages will be delivered to the corresponding Kafka topic
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CkafkaDeliveryParams || null}
         */
        this.CkafkaDeliveryParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisposeMethod = 'DisposeMethod' in params ? params.DisposeMethod : null;

        if (params.CkafkaDeliveryParams) {
            let obj = new CkafkaDeliveryParams();
            obj.deserialize(params.CkafkaDeliveryParams)
            this.CkafkaDeliveryParams = obj;
        }

    }
}

/**
 * Log filters
 * @class
 */
class LogFilters extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field name
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Operator. Values: `eq` (Equal to), `neq` (Not equal to), `like`, `not like`, `lt` (Smaller than), `lte` (Smaller than and equal to), `gt` (Greater than), `gte` (Greater than and equal to), `range` (Within the range) and `norange` (Not in the range).
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Filter value. Two values should be entered for range operation, separated by a comma (,)

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
        this.Key = 'Key' in params ? params.Key : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * UpdateEventBus request structure.
 * @class
 */
class UpdateEventBusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Event bus description, which can contain up to 200 characters of any type.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Event bus name: it can contain 2-60 letters, digits, underscores, and hyphens and must start with a letter and end with a digit or letter.
         * @type {string || null}
         */
        this.EventBusName = null;

        /**
         * Log retention period
         * @type {number || null}
         */
        this.SaveDays = null;

        /**
         * EventBridge log topic ID
         * @type {string || null}
         */
        this.LogTopicId = null;

        /**
         * Whether to enable log retention
         * @type {boolean || null}
         */
        this.EnableStore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.EventBusName = 'EventBusName' in params ? params.EventBusName : null;
        this.SaveDays = 'SaveDays' in params ? params.SaveDays : null;
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;
        this.EnableStore = 'EnableStore' in params ? params.EnableStore : null;

    }
}

/**
 * CreateEventBus request structure.
 * @class
 */
class CreateEventBusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus name: it can contain 2-60 letters, digits, underscores, and hyphens and must start with a letter and end with a digit or letter.
         * @type {string || null}
         */
        this.EventBusName = null;

        /**
         * Event bus description, which can contain up to 200 characters of any type.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Log retention period
         * @type {number || null}
         */
        this.SaveDays = null;

        /**
         * Whether to enable log storage
         * @type {boolean || null}
         */
        this.EnableStore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusName = 'EventBusName' in params ? params.EventBusName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SaveDays = 'SaveDays' in params ? params.SaveDays : null;
        this.EnableStore = 'EnableStore' in params ? params.EnableStore : null;

    }
}

/**
 * UpdateRule request structure.
 * @class
 */
class UpdateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Switch.
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Rule description, which can contain up to 200 characters of any type.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * See [CKafka Target](https://intl.cloud.tencent.com/document/product/1359/56084?from_cn_redirect=1)
         * @type {string || null}
         */
        this.EventPattern = null;

        /**
         * Event rule name, which can contain 2–60 letters, digits, underscores, and hyphens and must start with a letter and end with a digit or letter
         * @type {string || null}
         */
        this.RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.EventPattern = 'EventPattern' in params ? params.EventPattern : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * CreateRule request structure.
 * @class
 */
class CreateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * See [Event Pattern](https://intl.cloud.tencent.com/document/product/1359/56084?from_cn_redirect=1)
         * @type {string || null}
         */
        this.EventPattern = null;

        /**
         * Event bus ID.
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Event bus name, which can contain 2–60 letters, digits, underscores, and hyphens and must start with a letter and end with a digit or letter
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Switch.
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Event bus description, which can contain up to 200 characters of any type
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
        this.EventPattern = 'EventPattern' in params ? params.EventPattern : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Describes how to slice data
 * @class
 */
class TextParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Comma, | , tab, space, line break, %, or #, which can contain only 1 character.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Separator = null;

        /**
         * Entered regex (128 characters)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Regex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Separator = 'Separator' in params ? params.Separator : null;
        this.Regex = 'Regex' in params ? params.Regex : null;

    }
}

/**
 * DeleteConnection response structure.
 * @class
 */
class DeleteConnectionResponse extends  AbstractModel {
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
 * DeleteRule response structure.
 * @class
 */
class DeleteRuleResponse extends  AbstractModel {
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
 * GetTransformation response structure.
 * @class
 */
class GetTransformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transformation rule list
         * @type {Array.<Transformation> || null}
         */
        this.Transformations = null;

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

        if (params.Transformations) {
            this.Transformations = new Array();
            for (let z in params.Transformations) {
                let obj = new Transformation();
                obj.deserialize(params.Transformations[z]);
                this.Transformations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Rule information
 * @class
 */
class Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * Switch
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Target overview
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TargetBrief> || null}
         */
        this.Targets = null;

        /**
         * DLQ rule set by the rule, which may be null
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DeadLetterConfig || null}
         */
        this.DeadLetterConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new TargetBrief();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

        if (params.DeadLetterConfig) {
            let obj = new DeadLetterConfig();
            obj.deserialize(params.DeadLetterConfig)
            this.DeadLetterConfig = obj;
        }

    }
}

/**
 * CreateTransformation request structure.
 * @class
 */
class CreateTransformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Transformation rule list (currently, only one is supported)
         * @type {Array.<Transformation> || null}
         */
        this.Transformations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.Transformations) {
            this.Transformations = new Array();
            for (let z in params.Transformations) {
                let obj = new Transformation();
                obj.deserialize(params.Transformations[z]);
                this.Transformations.push(obj);
            }
        }

    }
}

/**
 * Describes how to filter data
 * @class
 */
class EtlFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * The syntax is the same as that of `Rule`
         * @type {string || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Filter = 'Filter' in params ? params.Filter : null;

    }
}

/**
 * SearchLog response structure.
 * @class
 */
class SearchLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of logs
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Number of entries per page.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Log searching results
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<SearchLogResult> || null}
         */
        this.Results = null;

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
        this.Total = 'Total' in params ? params.Total : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Page = 'Page' in params ? params.Page : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new SearchLogResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckTransformation response structure.
 * @class
 */
class CheckTransformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data processed by `Transformations`
         * @type {string || null}
         */
        this.Output = null;

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
        this.Output = 'Output' in params ? params.Output : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListTargets response structure.
 * @class
 */
class ListTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of targets
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Target information
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

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

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Target();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListEventBuses response structure.
 * @class
 */
class ListEventBusesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus information
         * @type {Array.<EventBus> || null}
         */
        this.EventBuses = null;

        /**
         * Total number of event buses
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

        if (params.EventBuses) {
            this.EventBuses = new Array();
            for (let z in params.EventBuses) {
                let obj = new EventBus();
                obj.deserialize(params.EventBuses[z]);
                this.EventBuses.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckRule response structure.
 * @class
 */
class CheckRuleResponse extends  AbstractModel {
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
 * Connection description
 * @class
 */
class ConnectionDescription extends  AbstractModel {
    constructor(){
        super();

        /**
         * Six-Segment QCS resource description. For more information, see [Resource Description Method](https://intl.cloud.tencent.com/document/product/598/10606?from_cn_redirect=1)
         * @type {string || null}
         */
        this.ResourceDescription = null;

        /**
         * API Gateway parameters
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {APIGWParams || null}
         */
        this.APIGWParams = null;

        /**
         * CKafka parameters
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CkafkaParams || null}
         */
        this.CkafkaParams = null;

        /**
         * Data Transfer Service (DTS) connector information
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {DTSParams || null}
         */
        this.DTSParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceDescription = 'ResourceDescription' in params ? params.ResourceDescription : null;

        if (params.APIGWParams) {
            let obj = new APIGWParams();
            obj.deserialize(params.APIGWParams)
            this.APIGWParams = obj;
        }

        if (params.CkafkaParams) {
            let obj = new CkafkaParams();
            obj.deserialize(params.CkafkaParams)
            this.CkafkaParams = obj;
        }

        if (params.DTSParams) {
            let obj = new DTSParams();
            obj.deserialize(params.DTSParams)
            this.DTSParams = obj;
        }

    }
}

/**
 * Retails of returned logs
 * @class
 */
class SearchLogResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log reported time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * Log details
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Event source
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Source = null;

        /**
         * The event type.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Event matching rule
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleIds = null;

        /**
         * The instance ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * The region.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Event status
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
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
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;
        this.Subject = 'Subject' in params ? params.Subject : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Parameter of the Kafka topic to be delivered to
 * @class
 */
class CkafkaDeliveryParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * ckafka topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Six-Segment QCS description of CKafka resource
         * @type {string || null}
         */
        this.ResourceDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.ResourceDescription = 'ResourceDescription' in params ? params.ResourceDescription : null;

    }
}

/**
 * UpdateTarget response structure.
 * @class
 */
class UpdateTargetResponse extends  AbstractModel {
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
 * CreateConnection request structure.
 * @class
 */
class CreateConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connector description
         * @type {ConnectionDescription || null}
         */
        this.ConnectionDescription = null;

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Connector name
         * @type {string || null}
         */
        this.ConnectionName = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether to enable
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Type of the connector
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ConnectionDescription) {
            let obj = new ConnectionDescription();
            obj.deserialize(params.ConnectionDescription)
            this.ConnectionDescription = obj;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.ConnectionName = 'ConnectionName' in params ? params.ConnectionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DeleteEventBus request structure.
 * @class
 */
class DeleteEventBusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;

    }
}

/**
 * ListEventBuses request structure.
 * @class
 */
class ListEventBusesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates by which field to sort the returned results. Valid values: AddTime (creation time), ModTime (modification time)
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Indicates whether the returned results are sorted in ascending or descending order. Valid values: ASC (ascending order), DESC (descending order)
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Filter. For more information, see the Instance Filter Table below. Each request can contain up to 10 `Filters` and 5 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Pagination offset. Default value: 0.
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
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateTransformation response structure.
 * @class
 */
class CreateTransformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Generated transformer ID
         * @type {string || null}
         */
        this.TransformationId = null;

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
        this.TransformationId = 'TransformationId' in params ? params.TransformationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Connector basic information
 * @class
 */
class ConnectionBrief extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connector type
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Connector status
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
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
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Key-Value pair filter for conditional filtering queries, such as filtering ID, name, and status
* If more than one filter exists, the logical relationship between these filters is `AND`.
* If multiple values exist in one filter, the logical relationship between these values is `OR`.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * One or more filter values.
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Filter name.
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
        this.Values = 'Values' in params ? params.Values : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * Connection information
 * @class
 */
class Connection extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * Switch
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Connector ID
         * @type {string || null}
         */
        this.ConnectionId = null;

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Connector description
         * @type {ConnectionDescription || null}
         */
        this.ConnectionDescription = null;

        /**
         * Connector name
         * @type {string || null}
         */
        this.ConnectionName = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ConnectionId = 'ConnectionId' in params ? params.ConnectionId : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;

        if (params.ConnectionDescription) {
            let obj = new ConnectionDescription();
            obj.deserialize(params.ConnectionDescription)
            this.ConnectionDescription = obj;
        }
        this.ConnectionName = 'ConnectionName' in params ? params.ConnectionName : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DeleteEventBus response structure.
 * @class
 */
class DeleteEventBusResponse extends  AbstractModel {
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
 * GetTransformation request structure.
 * @class
 */
class GetTransformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Transformer ID
         * @type {string || null}
         */
        this.TransformationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.TransformationId = 'TransformationId' in params ? params.TransformationId : null;

    }
}

/**
 * CreateEventBus response structure.
 * @class
 */
class CreateEventBusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

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
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteConnection request structure.
 * @class
 */
class DeleteConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connector ID
         * @type {string || null}
         */
        this.ConnectionId = null;

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectionId = 'ConnectionId' in params ? params.ConnectionId : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;

    }
}

/**
 * UpdateTransformation request structure.
 * @class
 */
class UpdateTransformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Transformer ID
         * @type {string || null}
         */
        this.TransformationId = null;

        /**
         * Transformation rule list (currently, only one is supported)
         * @type {Array.<Transformation> || null}
         */
        this.Transformations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.TransformationId = 'TransformationId' in params ? params.TransformationId : null;

        if (params.Transformations) {
            this.Transformations = new Array();
            for (let z in params.Transformations) {
                let obj = new Transformation();
                obj.deserialize(params.Transformations[z]);
                this.Transformations.push(obj);
            }
        }

    }
}

/**
 * CreateRule response structure.
 * @class
 */
class CreateRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event rule ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Target description
 * @class
 */
class TargetDescription extends  AbstractModel {
    constructor(){
        super();

        /**
         * Six-Segment QCS resource description. For more information, see [Resource Description Method](https://intl.cloud.tencent.com/document/product/598/10606?from_cn_redirect=1)
         * @type {string || null}
         */
        this.ResourceDescription = null;

        /**
         * SCF parameter
         * @type {SCFParams || null}
         */
        this.SCFParams = null;

        /**
         * CKafka parameters
         * @type {CkafkaTargetParams || null}
         */
        this.CkafkaTargetParams = null;

        /**
         * ElasticSearch parameters
         * @type {ESTargetParams || null}
         */
        this.ESTargetParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceDescription = 'ResourceDescription' in params ? params.ResourceDescription : null;

        if (params.SCFParams) {
            let obj = new SCFParams();
            obj.deserialize(params.SCFParams)
            this.SCFParams = obj;
        }

        if (params.CkafkaTargetParams) {
            let obj = new CkafkaTargetParams();
            obj.deserialize(params.CkafkaTargetParams)
            this.CkafkaTargetParams = obj;
        }

        if (params.ESTargetParams) {
            let obj = new ESTargetParams();
            obj.deserialize(params.ESTargetParams)
            this.ESTargetParams = obj;
        }

    }
}

/**
 * DeleteTransformation response structure.
 * @class
 */
class DeleteTransformationResponse extends  AbstractModel {
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
 * DeleteTransformation request structure.
 * @class
 */
class DeleteTransformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Transformer ID
         * @type {string || null}
         */
        this.TransformationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.TransformationId = 'TransformationId' in params ? params.TransformationId : null;

    }
}

/**
 * Describes how to extract data
 * @class
 */
class Extraction extends  AbstractModel {
    constructor(){
        super();

        /**
         * JsonPath, which will be `$.` by default if not specified
         * @type {string || null}
         */
        this.ExtractionInputPath = null;

        /**
         * Valid values: TEXT/JSON
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Only required for `Text`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TextParams || null}
         */
        this.TextParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExtractionInputPath = 'ExtractionInputPath' in params ? params.ExtractionInputPath : null;
        this.Format = 'Format' in params ? params.Format : null;

        if (params.TextParams) {
            let obj = new TextParams();
            obj.deserialize(params.TextParams)
            this.TextParams = obj;
        }

    }
}

/**
 * UpdateConnection request structure.
 * @class
 */
class UpdateConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connector ID
         * @type {string || null}
         */
        this.ConnectionId = null;

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Switch
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Connector name
         * @type {string || null}
         */
        this.ConnectionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectionId = 'ConnectionId' in params ? params.ConnectionId : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ConnectionName = 'ConnectionName' in params ? params.ConnectionName : null;

    }
}

/**
 * GetEventBus request structure.
 * @class
 */
class GetEventBusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;

    }
}

/**
 * DeleteTarget request structure.
 * @class
 */
class DeleteTargetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Delivery target ID
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * Event rule ID
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * CKafka connector parameter
 * @class
 */
class CkafkaParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * kafka offset
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * ckafka  topic
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribeLogTagValue response structure.
 * @class
 */
class DescribeLogTagValueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query searching metric value. 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Results = null;

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
        this.Results = 'Results' in params ? params.Results : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateTransformation response structure.
 * @class
 */
class UpdateTransformationResponse extends  AbstractModel {
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
 * `Transform` output parameter
 * @class
 */
class OutputStructParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key in the corresponding JSON output
         * @type {string || null}
         */
        this.Key = null;

        /**
         * You can enter a JsonPath, constant, or built-in date type
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Data type of `Value`. Valid values: STRING, NUMBER, BOOLEAN, NULL, SYS_VARIABLE, JSONPATH
         * @type {string || null}
         */
        this.ValueType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;

    }
}

/**
 * SearchLog request structure.
 * @class
 */
class SearchLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query start time (UNIX in ms)
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time (UNIX in ms)
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Page number
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Logs returned per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter conditions
         * @type {Array.<LogFilter> || null}
         */
        this.Filter = null;

        /**
         * Sorting array
         * @type {Array.<string> || null}
         */
        this.OrderFields = null;

        /**
         * Sorting order. Values: `asc` (earliest first); `desc` (latest first)
         * @type {string || null}
         */
        this.OrderBy = null;

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
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new LogFilter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }
        this.OrderFields = 'OrderFields' in params ? params.OrderFields : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

    }
}

/**
 * CheckTransformation request structure.
 * @class
 */
class CheckTransformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * JSON string to be processed
         * @type {string || null}
         */
        this.Input = null;

        /**
         * Transformation rule list
         * @type {Array.<Transformation> || null}
         */
        this.Transformations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Input = 'Input' in params ? params.Input : null;

        if (params.Transformations) {
            this.Transformations = new Array();
            for (let z in params.Transformations) {
                let obj = new Transformation();
                obj.deserialize(params.Transformations[z]);
                this.Transformations.push(obj);
            }
        }

    }
}

/**
 * UpdateConnection response structure.
 * @class
 */
class UpdateConnectionResponse extends  AbstractModel {
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
 * GetRule request structure.
 * @class
 */
class GetRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Event rule ID
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * UpdateTarget request structure.
 * @class
 */
class UpdateTargetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event bus ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * Event rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Delivery target ID
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * Enables batch delivery
         * @type {boolean || null}
         */
        this.EnableBatchDelivery = null;

        /**
         * Maximum waiting time for batch delivery
         * @type {number || null}
         */
        this.BatchTimeout = null;

        /**
         * Maximum number of events in batch delivery
         * @type {number || null}
         */
        this.BatchEventCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.EnableBatchDelivery = 'EnableBatchDelivery' in params ? params.EnableBatchDelivery : null;
        this.BatchTimeout = 'BatchTimeout' in params ? params.BatchTimeout : null;
        this.BatchEventCount = 'BatchEventCount' in params ? params.BatchEventCount : null;

    }
}

/**
 * Definition of filter parameters of log query-related API
 * @class
 */
class LogFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field name
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Operator. Values: `eq` (Equal to), `neq` (Not equal to), `like`, `not like`, `lt` (Smaller than), `lte` (Smaller than and equal to), `gt` (Greater than), `gte` (Greater than and equal to), `range` (Within the range) and `norange` (Not in the range).
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Filter value. Two values should be entered for range operation, separated by a comma (,).

         * @type {string || null}
         */
        this.Value = null;

        /**
         * The logical relationship between conditions. Values: `AND` and `OR`.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * LogFilters array
         * @type {Array.<LogFilters> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new LogFilters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * UpdateEventBus response structure.
 * @class
 */
class UpdateEventBusResponse extends  AbstractModel {
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
 * `APIGWParams` description
 * @class
 */
class APIGWParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTPS
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * POST
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

module.exports = {
    Transform: Transform,
    ListConnectionsResponse: ListConnectionsResponse,
    ESTargetParams: ESTargetParams,
    GetEventBusResponse: GetEventBusResponse,
    RetryPolicy: RetryPolicy,
    CkafkaTargetParams: CkafkaTargetParams,
    ListConnectionsRequest: ListConnectionsRequest,
    DeleteRuleRequest: DeleteRuleRequest,
    UpdateRuleResponse: UpdateRuleResponse,
    CreateTargetRequest: CreateTargetRequest,
    DeleteTargetResponse: DeleteTargetResponse,
    DescribeLogTagValueRequest: DescribeLogTagValueRequest,
    TargetBrief: TargetBrief,
    DTSParams: DTSParams,
    ListRulesResponse: ListRulesResponse,
    CreateTargetResponse: CreateTargetResponse,
    CheckRuleRequest: CheckRuleRequest,
    GetRuleResponse: GetRuleResponse,
    CreateConnectionResponse: CreateConnectionResponse,
    EventBus: EventBus,
    ListTargetsRequest: ListTargetsRequest,
    Transformation: Transformation,
    Target: Target,
    ListRulesRequest: ListRulesRequest,
    SCFParams: SCFParams,
    DeadLetterConfig: DeadLetterConfig,
    LogFilters: LogFilters,
    UpdateEventBusRequest: UpdateEventBusRequest,
    CreateEventBusRequest: CreateEventBusRequest,
    UpdateRuleRequest: UpdateRuleRequest,
    CreateRuleRequest: CreateRuleRequest,
    TextParams: TextParams,
    DeleteConnectionResponse: DeleteConnectionResponse,
    DeleteRuleResponse: DeleteRuleResponse,
    GetTransformationResponse: GetTransformationResponse,
    Rule: Rule,
    CreateTransformationRequest: CreateTransformationRequest,
    EtlFilter: EtlFilter,
    SearchLogResponse: SearchLogResponse,
    CheckTransformationResponse: CheckTransformationResponse,
    ListTargetsResponse: ListTargetsResponse,
    ListEventBusesResponse: ListEventBusesResponse,
    CheckRuleResponse: CheckRuleResponse,
    ConnectionDescription: ConnectionDescription,
    SearchLogResult: SearchLogResult,
    CkafkaDeliveryParams: CkafkaDeliveryParams,
    UpdateTargetResponse: UpdateTargetResponse,
    CreateConnectionRequest: CreateConnectionRequest,
    DeleteEventBusRequest: DeleteEventBusRequest,
    ListEventBusesRequest: ListEventBusesRequest,
    CreateTransformationResponse: CreateTransformationResponse,
    ConnectionBrief: ConnectionBrief,
    Filter: Filter,
    Connection: Connection,
    DeleteEventBusResponse: DeleteEventBusResponse,
    GetTransformationRequest: GetTransformationRequest,
    CreateEventBusResponse: CreateEventBusResponse,
    DeleteConnectionRequest: DeleteConnectionRequest,
    UpdateTransformationRequest: UpdateTransformationRequest,
    CreateRuleResponse: CreateRuleResponse,
    TargetDescription: TargetDescription,
    DeleteTransformationResponse: DeleteTransformationResponse,
    DeleteTransformationRequest: DeleteTransformationRequest,
    Extraction: Extraction,
    UpdateConnectionRequest: UpdateConnectionRequest,
    GetEventBusRequest: GetEventBusRequest,
    DeleteTargetRequest: DeleteTargetRequest,
    CkafkaParams: CkafkaParams,
    DescribeLogTagValueResponse: DescribeLogTagValueResponse,
    UpdateTransformationResponse: UpdateTransformationResponse,
    OutputStructParam: OutputStructParam,
    SearchLogRequest: SearchLogRequest,
    CheckTransformationRequest: CheckTransformationRequest,
    UpdateConnectionResponse: UpdateConnectionResponse,
    GetRuleRequest: GetRuleRequest,
    UpdateTargetRequest: UpdateTargetRequest,
    LogFilter: LogFilter,
    UpdateEventBusResponse: UpdateEventBusResponse,
    APIGWParams: APIGWParams,

}
