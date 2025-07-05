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
 * Field for displaying returned topic information
 * @class
 */
class TopicSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicId
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * TopicName
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * MsgRetentionSeconds
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * MaxMsgSize
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * Qps
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * FilterType
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FilterType = null;

        /**
         * CreateTime
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * LastModifyTime
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * MsgCount
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MsgCount = null;

        /**
         * CreateUin
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Tags
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether to enable message trace for a topic. true: yes, false: no
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;
        this.MsgCount = 'MsgCount' in params ? params.MsgCount : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * RewindQueue request structure.
 * @class
 */
class RewindQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue name, which is unique under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * After this time is set, the `(Batch)receiveMessage` API will consume the messages received after this timestamp in the order in which they are produced.
         * @type {number || null}
         */
        this.StartConsumeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.StartConsumeTime = 'StartConsumeTime' in params ? params.StartConsumeTime : null;

    }
}

/**
 * DescribeSubscriptionDetail request structure.
 * @class
 */
class DescribeSubscriptionDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which is unique under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Starting position of topic list to be returned on the current page in case of paginated return. If a value is entered, `limit` is required. If this parameter is left empty, 0 will be used by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of topics to be returned per page in case of paginated return. If this parameter is not passed in, 20 will be used by default. Maximum value: 50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter parameter. Currently, only filtering by `SubscriptionName` is supported, and only one keyword is allowed.
         * @type {Array.<Filter> || null}
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
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * ModifyQueueAttribute response structure.
 * @class
 */
class ModifyQueueAttributeResponse extends  AbstractModel {
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
 * CreateQueue request structure.
 * @class
 */
class CreateQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue name, which is unique under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * Maximum number of heaped messages. The value range is 1,000,000-10,000,000 during the beta test and can be 1,000,000-1,000,000,000 after the product is officially released. The default value is 10,000,000 during the beta test and will be 100,000,000 after the product is officially released.
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * Long polling wait time for message reception. Value range: 0-30 seconds. Default value: 0.
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * Message visibility timeout period. Value range: 1-43200 seconds (i.e., 12 hours). Default value: 30.
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * Maximum message length. Value range: 1024-65536 bytes (i.e., 1-64 KB). Default value: 65536.
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * Message retention period. Value range: 60-1296000 seconds (i.e., 1 minute-15 days). Default value: 345600 (i.e., 4 days).
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * Whether to enable the message rewinding feature for a queue. Value range: 0-msgRetentionSeconds, where 0 means not to enable this feature, while `msgRetentionSeconds` indicates that the maximum rewindable period is the message retention period of the queue.
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * 1: transaction queue, 0: general queue
         * @type {number || null}
         */
        this.Transaction = null;

        /**
         * First lookback interval
         * @type {number || null}
         */
        this.FirstQueryInterval = null;

        /**
         * Maximum number of lookbacks
         * @type {number || null}
         */
        this.MaxQueryCount = null;

        /**
         * Dead letter queue name
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * Dead letter policy. 0: message has been consumed multiple times but not deleted, 1: `Time-To-Live` has elapsed
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * Maximum receipt times. Value range: 1-1000
         * @type {number || null}
         */
        this.MaxReceiveCount = null;

        /**
         * Maximum period in seconds before an unconsumed message expires, which is required if `policy` is 1. Value range: 300-43200. This value should be smaller than `msgRetentionSeconds` (maximum message retention period)
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * Whether to enable message trace. true: yes, false: no. If this field is not set, the feature will not be enabled
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.MaxMsgHeapNum = 'MaxMsgHeapNum' in params ? params.MaxMsgHeapNum : null;
        this.PollingWaitSeconds = 'PollingWaitSeconds' in params ? params.PollingWaitSeconds : null;
        this.VisibilityTimeout = 'VisibilityTimeout' in params ? params.VisibilityTimeout : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.RewindSeconds = 'RewindSeconds' in params ? params.RewindSeconds : null;
        this.Transaction = 'Transaction' in params ? params.Transaction : null;
        this.FirstQueryInterval = 'FirstQueryInterval' in params ? params.FirstQueryInterval : null;
        this.MaxQueryCount = 'MaxQueryCount' in params ? params.MaxQueryCount : null;
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.MaxReceiveCount = 'MaxReceiveCount' in params ? params.MaxReceiveCount : null;
        this.MaxTimeToLive = 'MaxTimeToLive' in params ? params.MaxTimeToLive : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * ModifySubscriptionAttribute response structure.
 * @class
 */
class ModifySubscriptionAttributeResponse extends  AbstractModel {
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
 * DeadLetterPolicy
 * @class
 */
class DeadLetterPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * DeadLetterQueueName
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * DeadLetterQueue
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeadLetterQueue = null;

        /**
         * Policy
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * MaxTimeToLive
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * MaxReceiveCount
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxReceiveCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.DeadLetterQueue = 'DeadLetterQueue' in params ? params.DeadLetterQueue : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.MaxTimeToLive = 'MaxTimeToLive' in params ? params.MaxTimeToLive : null;
        this.MaxReceiveCount = 'MaxReceiveCount' in params ? params.MaxReceiveCount : null;

    }
}

/**
 * ModifyTopicAttribute response structure.
 * @class
 */
class ModifyTopicAttributeResponse extends  AbstractModel {
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
 * DeleteSubscribe request structure.
 * @class
 */
class DeleteSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which is unique under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Subscription name, which is unique in the same topic under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.SubscriptionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

    }
}

/**
 * DescribeSubscriptionDetail response structure.
 * @class
 */
class DescribeSubscriptionDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Subscription attribute set
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Subscription> || null}
         */
        this.SubscriptionSet = null;

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

        if (params.SubscriptionSet) {
            this.SubscriptionSet = new Array();
            for (let z in params.SubscriptionSet) {
                let obj = new Subscription();
                obj.deserialize(params.SubscriptionSet[z]);
                this.SubscriptionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSubscribe request structure.
 * @class
 */
class CreateSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which is unique under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Subscription name, which is unique in the same topic under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * Subscription protocol. Currently, two protocols are supported: http and queue. To use the `http` protocol, you need to build your own web server to receive messages. With the `queue` protocol, messages are automatically pushed to a CMQ queue and you can pull them concurrently.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * `Endpoint` for notification receipt, which is distinguished by `Protocol`. For `http`, `Endpoint` must begin with `http://` and `host` can be a domain name or IP. For `Queue`, enter `QueueName`. Please note that currently the push service cannot push messages to a VPC; therefore, if a VPC domain name or address is entered for `Endpoint`, pushed messages will not be received. Currently, messages can be pushed only to the public network and basic network.
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * CMQ push server retry policy in case an error occurs while pushing a message to `Endpoint`. Valid values: 1. BACKOFF_RETRY: backoff retry, which is to retry at a fixed interval, discard the message after a certain number of retries, and continue to push the next message; 2. EXPONENTIAL_DECAY_RETRY: exponential decay retry, which is to retry at an exponentially increasing interval, such as 1s, 2s, 4s, 8s, and so on. As a message can be retained in a topic for one day, failed messages will be discarded at most after one day of retry. Default value: EXPONENTIAL_DECAY_RETRY.
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * Message body tag (used for message filtering). The number of tags cannot exceed 5, and each tag can contain up to 16 characters. It is used in conjunction with the `MsgTag` parameter of `(Batch)PublishMessage`. Rules: 1. If `FilterTag` is not set, no matter whether `MsgTag` is set, the subscription will receive all messages published to the topic; 2. If the `FilterTag` array has a value, only when at least one of the values in the array also exists in the `MsgTag` array (i.e., `FilterTag` and `MsgTag` have an intersection) can the subscription receive messages published to the topic; 3. If the `FilterTag` array has a value, but `MsgTag` is not set, then no message published to the topic will be received, which can be considered as a special case of rule 2 as `FilterTag` and `MsgTag` do not intersect in this case. The overall design idea of rules is based on the intention of the subscriber.
         * @type {Array.<string> || null}
         */
        this.FilterTag = null;

        /**
         * The number of `BindingKey` cannot exceed 5, and the length of each `BindingKey` cannot exceed 64 bytes. This field indicates the filtering policy for subscribing to and receiving messages. Each `BindingKey` can contain up to 15 `.`, i.e., up to 16 phrases.
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

        /**
         * Push content format. Valid values: 1. JSON, 2. SIMPLIFIED, i.e., the raw format. If `Protocol` is `queue`, this value must be `SIMPLIFIED`. If `Protocol` is `http`, both options are acceptable, and the default value is `JSON`.
         * @type {string || null}
         */
        this.NotifyContentFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.NotifyStrategy = 'NotifyStrategy' in params ? params.NotifyStrategy : null;
        this.FilterTag = 'FilterTag' in params ? params.FilterTag : null;
        this.BindingKey = 'BindingKey' in params ? params.BindingKey : null;
        this.NotifyContentFormat = 'NotifyContentFormat' in params ? params.NotifyContentFormat : null;

    }
}

/**
 * ClearQueue request structure.
 * @class
 */
class ClearQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue name, which is unique under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * CreateTopic response structure.
 * @class
 */
class CreateTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicName
         * @type {string || null}
         */
        this.TopicId = null;

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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearSubscriptionFilterTags response structure.
 * @class
 */
class ClearSubscriptionFilterTagsResponse extends  AbstractModel {
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
 * UnbindDeadLetter response structure.
 * @class
 */
class UnbindDeadLetterResponse extends  AbstractModel {
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
 * TransactionPolicy
 * @class
 */
class TransactionPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * FirstQueryInterval
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FirstQueryInterval = null;

        /**
         * MaxQueryCount
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxQueryCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstQueryInterval = 'FirstQueryInterval' in params ? params.FirstQueryInterval : null;
        this.MaxQueryCount = 'MaxQueryCount' in params ? params.MaxQueryCount : null;

    }
}

/**
 * DescribeTopicDetail request structure.
 * @class
 */
class DescribeTopicDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting position of queue list to be returned on the current page in case of paginated return. If a value is entered, `limit` is required. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of queues to be returned per page in case of paginated return. If this parameter is not passed in, 20 will be used by default. Maximum value: 50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Currently, only filtering by `TopicName` is supported, and only one filter value can be entered
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Tag match
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Exact match by `TopicName`
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
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DeleteTopic request structure.
 * @class
 */
class DeleteTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which is unique under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
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
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribeTopicDetail response structure.
 * @class
 */
class DescribeTopicDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TotalCount
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * TopicSet
         * @type {Array.<TopicSet> || null}
         */
        this.TopicSet = null;

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

        if (params.TopicSet) {
            this.TopicSet = new Array();
            for (let z in params.TopicSet) {
                let obj = new TopicSet();
                obj.deserialize(params.TopicSet[z]);
                this.TopicSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeQueueDetail response structure.
 * @class
 */
class DescribeQueueDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of queues
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Queue list
         * @type {Array.<QueueSet> || null}
         */
        this.QueueSet = null;

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

        if (params.QueueSet) {
            this.QueueSet = new Array();
            for (let z in params.QueueSet) {
                let obj = new QueueSet();
                obj.deserialize(params.QueueSet[z]);
                this.QueueSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindDeadLetter request structure.
 * @class
 */
class UnbindDeadLetterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source queue name of dead letter policy. Calling this API will clear the dead letter queue policy of this queue.
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * CreateTopic request structure.
 * @class
 */
class CreateTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which is unique under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Maximum message length. Value range: 1024-65536 bytes (i.e., 1-64 KB). Default value: 65536.
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * Message match policy for a specified topic.
         * @type {number || null}
         */
        this.FilterType = null;

        /**
         * Message retention period. Value range: 60-86400 seconds (i.e., 1 minute-1 day). Default value: 86400.
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * Whether to enable message trace. true: yes, false: no. If this field is left empty, the feature will not be enabled.
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * DeleteQueue request structure.
 * @class
 */
class DeleteQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue name, which is unique under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * Filter parameter
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter parameter name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Value
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeDeadLetterSourceQueues response structure.
 * @class
 */
class DescribeDeadLetterSourceQueuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible queues
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Source queues of dead letter queue
         * @type {Array.<DeadLetterSource> || null}
         */
        this.QueueSet = null;

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

        if (params.QueueSet) {
            this.QueueSet = new Array();
            for (let z in params.QueueSet) {
                let obj = new DeadLetterSource();
                obj.deserialize(params.QueueSet[z]);
                this.QueueSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RewindQueue response structure.
 * @class
 */
class RewindQueueResponse extends  AbstractModel {
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
 * ModifyTopicAttribute request structure.
 * @class
 */
class ModifyTopicAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which is unique under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Maximum message length. Value range: 1024-65536 bytes (i.e., 1-64 KB). Default value: 65536.
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * Message retention period. Value range: 60-86400 seconds (i.e., 1 minute-1 day). Default value: 86400.
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * Whether to enable message trace. true: yes, false: no. If this field is left empty, the feature will not be enabled.
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * DescribeQueueDetail request structure.
 * @class
 */
class DescribeQueueDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting position of queue list to be returned on the current page in case of paginated return. If a value is entered, `limit` is required. If this parameter is left empty, 0 will be used by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of queues to be returned per page in case of paginated return. If this parameter is not passed in, 20 will be used by default. Maximum value: 50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter parameter. Currently, filtering by `QueueName` is supported, and only one keyword is allowed
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Tag search
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Exact match by `QueueName`
         * @type {string || null}
         */
        this.QueueName = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * Batch queue attribute information
 * @class
 */
class QueueSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * QueueId
         * @type {string || null}
         */
        this.QueueId = null;

        /**
         * QueueName
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * Qps
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * Bps
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Bps = null;

        /**
         * MaxDelaySeconds
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxDelaySeconds = null;

        /**
         * MaxMsgHeapNum
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * PollingWaitSeconds
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * MsgRetentionSeconds
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * VisibilityTimeout
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * MaxMsgSize
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * RewindSeconds
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * CreateTime
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * LastModifyTime
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * ActiveMsgNum
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ActiveMsgNum = null;

        /**
         * InactiveMsgNum
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InactiveMsgNum = null;

        /**
         * DelayMsgNum
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DelayMsgNum = null;

        /**
         * RewindMsgNum
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RewindMsgNum = null;

        /**
         * MinMsgTime
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinMsgTime = null;

        /**
         * Transaction
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Transaction = null;

        /**
         * DeadLetterSource
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DeadLetterSource> || null}
         */
        this.DeadLetterSource = null;

        /**
         * DeadLetterPolicy
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DeadLetterPolicy || null}
         */
        this.DeadLetterPolicy = null;

        /**
         * TransactionPolicy
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TransactionPolicy || null}
         */
        this.TransactionPolicy = null;

        /**
         * Creator `uin`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Tag
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Message trace flag. true: enabled, false: not enabled
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueId = 'QueueId' in params ? params.QueueId : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Bps = 'Bps' in params ? params.Bps : null;
        this.MaxDelaySeconds = 'MaxDelaySeconds' in params ? params.MaxDelaySeconds : null;
        this.MaxMsgHeapNum = 'MaxMsgHeapNum' in params ? params.MaxMsgHeapNum : null;
        this.PollingWaitSeconds = 'PollingWaitSeconds' in params ? params.PollingWaitSeconds : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.VisibilityTimeout = 'VisibilityTimeout' in params ? params.VisibilityTimeout : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.RewindSeconds = 'RewindSeconds' in params ? params.RewindSeconds : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;
        this.ActiveMsgNum = 'ActiveMsgNum' in params ? params.ActiveMsgNum : null;
        this.InactiveMsgNum = 'InactiveMsgNum' in params ? params.InactiveMsgNum : null;
        this.DelayMsgNum = 'DelayMsgNum' in params ? params.DelayMsgNum : null;
        this.RewindMsgNum = 'RewindMsgNum' in params ? params.RewindMsgNum : null;
        this.MinMsgTime = 'MinMsgTime' in params ? params.MinMsgTime : null;
        this.Transaction = 'Transaction' in params ? params.Transaction : null;

        if (params.DeadLetterSource) {
            this.DeadLetterSource = new Array();
            for (let z in params.DeadLetterSource) {
                let obj = new DeadLetterSource();
                obj.deserialize(params.DeadLetterSource[z]);
                this.DeadLetterSource.push(obj);
            }
        }

        if (params.DeadLetterPolicy) {
            let obj = new DeadLetterPolicy();
            obj.deserialize(params.DeadLetterPolicy)
            this.DeadLetterPolicy = obj;
        }

        if (params.TransactionPolicy) {
            let obj = new TransactionPolicy();
            obj.deserialize(params.TransactionPolicy)
            this.TransactionPolicy = obj;
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * DeleteTopic response structure.
 * @class
 */
class DeleteTopicResponse extends  AbstractModel {
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
 * ClearSubscriptionFilterTags request structure.
 * @class
 */
class ClearSubscriptionFilterTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which is unique under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Subscription name, which is unique in the same topic under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.SubscriptionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

    }
}

/**
 * CreateQueue response structure.
 * @class
 */
class CreateQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * "queueId" of a successfully created queue
         * @type {string || null}
         */
        this.QueueId = null;

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
        this.QueueId = 'QueueId' in params ? params.QueueId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSubscribe response structure.
 * @class
 */
class DeleteSubscribeResponse extends  AbstractModel {
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
 * DescribeDeadLetterSourceQueues request structure.
 * @class
 */
class DescribeDeadLetterSourceQueuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dead letter queue name
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * Starting position of topic list to be returned on the current page in case of paginated return. If a value is entered, `limit` is required. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Number of topics to be returned per page in case of paginated return. If this parameter is not passed in, 20 will be used by default. Maximum value: 50.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filters source queue name of dead letter queue. Currently, only filtering by `SourceQueueName` is supported
         * @type {Array.<Filter> || null}
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
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * Tag
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
Note: this field may return null, indicating that no valid values can be obtained.
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

/**
 * DeadLetterSource
 * @class
 */
class DeadLetterSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * QueueId
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.QueueId = null;

        /**
         * QueueName
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueId = 'QueueId' in params ? params.QueueId : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * CreateSubscribe response structure.
 * @class
 */
class CreateSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SubscriptionId
         * @type {string || null}
         */
        this.SubscriptionId = null;

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
        this.SubscriptionId = 'SubscriptionId' in params ? params.SubscriptionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearQueue response structure.
 * @class
 */
class ClearQueueResponse extends  AbstractModel {
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
 * ModifySubscriptionAttribute request structure.
 * @class
 */
class ModifySubscriptionAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which is unique under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Subscription name, which is unique in the same topic under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * CMQ push server retry policy in case an error occurs while pushing a message to `Endpoint`. Valid values:
1. BACKOFF_RETRY: backoff retry, which is to retry at a fixed interval, discard the message after a certain number of retries, and continue to push the next message.
2. EXPONENTIAL_DECAY_RETRY: exponential decay retry, which is to retry at an exponentially increasing interval, such as 1s, 2s, 4s, 8s, and so on. As a message can be retained in a topic for one day, failed messages will be discarded at most after one day of retry. Default value: EXPONENTIAL_DECAY_RETRY.
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * Push content format. Valid values: 1. JSON, 2. SIMPLIFIED, i.e., the raw format. If `Protocol` is `queue`, this value must be `SIMPLIFIED`. If `Protocol` is `HTTP`, both options are acceptable, and the default value is `JSON`.
         * @type {string || null}
         */
        this.NotifyContentFormat = null;

        /**
         * Message body tag (used for message filtering). The number of tags cannot exceed 5, and each tag can contain up to 16 characters. It is used in conjunction with the `MsgTag` parameter of `(Batch)PublishMessage`. Rules: 1. If `FilterTag` is not set, no matter whether `MsgTag` is set, the subscription will receive all messages published to the topic; 2. If the `FilterTag` array has a value, only when at least one of the values in the array also exists in the `MsgTag` array (i.e., `FilterTag` and `MsgTag` have an intersection) can the subscription receive messages published to the topic; 3. If the `FilterTag` array has a value, but `MsgTag` is not set, then no message published to the topic will be received, which can be considered as a special case of rule 2 as `FilterTag` and `MsgTag` do not intersect in this case. The overall design idea of rules is based on the intention of the subscriber.
         * @type {Array.<string> || null}
         */
        this.FilterTags = null;

        /**
         * The number of `BindingKey` cannot exceed 5, and the length of each `BindingKey` cannot exceed 64 bytes. This field indicates the filtering policy for subscribing to and receiving messages. Each `BindingKey` can contain up to 15 `.`, i.e., up to 16 phrases.
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.NotifyStrategy = 'NotifyStrategy' in params ? params.NotifyStrategy : null;
        this.NotifyContentFormat = 'NotifyContentFormat' in params ? params.NotifyContentFormat : null;
        this.FilterTags = 'FilterTags' in params ? params.FilterTags : null;
        this.BindingKey = 'BindingKey' in params ? params.BindingKey : null;

    }
}

/**
 * Subscription response parameter
 * @class
 */
class Subscription extends  AbstractModel {
    constructor(){
        super();

        /**
         * SubscriptionName
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * SubscriptionId
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubscriptionId = null;

        /**
         * TopicOwner
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TopicOwner = null;

        /**
         * MsgCount
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MsgCount = null;

        /**
         * LastModifyTime
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * CreateTime
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * BindingKey
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

        /**
         * Endpoint
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * FilterTags
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FilterTags = null;

        /**
         * Protocol
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * NotifyStrategy
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * NotifyContentFormat
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NotifyContentFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.SubscriptionId = 'SubscriptionId' in params ? params.SubscriptionId : null;
        this.TopicOwner = 'TopicOwner' in params ? params.TopicOwner : null;
        this.MsgCount = 'MsgCount' in params ? params.MsgCount : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BindingKey = 'BindingKey' in params ? params.BindingKey : null;
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.FilterTags = 'FilterTags' in params ? params.FilterTags : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.NotifyStrategy = 'NotifyStrategy' in params ? params.NotifyStrategy : null;
        this.NotifyContentFormat = 'NotifyContentFormat' in params ? params.NotifyContentFormat : null;

    }
}

/**
 * DeleteQueue response structure.
 * @class
 */
class DeleteQueueResponse extends  AbstractModel {
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
 * ModifyQueueAttribute request structure.
 * @class
 */
class ModifyQueueAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue name, which is unique under the same account in an individual region. It is a string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * Maximum number of heaped messages. The value range is 1,000,000-10,000,000 during the beta test and can be 1,000,000-1,000,000,000 after the product is officially released. The default value is 10,000,000 during the beta test and will be 100,000,000 after the product is officially released.
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * Long polling wait time for message reception. Value range: 0-30 seconds. Default value: 0.
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * Message visibility timeout period. Value range: 1-43200 seconds (i.e., 12 hours). Default value: 30.
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * Maximum message length. Value range: 1024-65536 bytes (i.e., 1-64 KB). Default value: 65536.
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * Message retention period. Value range: 60-1296000 seconds (i.e., 1 minute-15 days). Default value: 345600 (i.e., 4 days).
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * Maximum message rewindable period. Value range: 0-msgRetentionSeconds (maximum message retention period of a queue). 0 means not to enable message rewinding.
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * First query time
         * @type {number || null}
         */
        this.FirstQueryInterval = null;

        /**
         * Maximum number of queries
         * @type {number || null}
         */
        this.MaxQueryCount = null;

        /**
         * Dead letter queue name
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * Maximum period in seconds before an unconsumed message expires, which is required if `MaxTimeToLivepolicy` is 1. Value range: 300-43200. This value should be smaller than `MsgRetentionSeconds` (maximum message retention period)
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * Maximum number of receipts
         * @type {number || null}
         */
        this.MaxReceiveCount = null;

        /**
         * Dead letter queue policy
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * Whether to enable message trace. true: yes, false: no. If this field is left empty, the feature will not be enabled.
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.MaxMsgHeapNum = 'MaxMsgHeapNum' in params ? params.MaxMsgHeapNum : null;
        this.PollingWaitSeconds = 'PollingWaitSeconds' in params ? params.PollingWaitSeconds : null;
        this.VisibilityTimeout = 'VisibilityTimeout' in params ? params.VisibilityTimeout : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.RewindSeconds = 'RewindSeconds' in params ? params.RewindSeconds : null;
        this.FirstQueryInterval = 'FirstQueryInterval' in params ? params.FirstQueryInterval : null;
        this.MaxQueryCount = 'MaxQueryCount' in params ? params.MaxQueryCount : null;
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.MaxTimeToLive = 'MaxTimeToLive' in params ? params.MaxTimeToLive : null;
        this.MaxReceiveCount = 'MaxReceiveCount' in params ? params.MaxReceiveCount : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

module.exports = {
    TopicSet: TopicSet,
    RewindQueueRequest: RewindQueueRequest,
    DescribeSubscriptionDetailRequest: DescribeSubscriptionDetailRequest,
    ModifyQueueAttributeResponse: ModifyQueueAttributeResponse,
    CreateQueueRequest: CreateQueueRequest,
    ModifySubscriptionAttributeResponse: ModifySubscriptionAttributeResponse,
    DeadLetterPolicy: DeadLetterPolicy,
    ModifyTopicAttributeResponse: ModifyTopicAttributeResponse,
    DeleteSubscribeRequest: DeleteSubscribeRequest,
    DescribeSubscriptionDetailResponse: DescribeSubscriptionDetailResponse,
    CreateSubscribeRequest: CreateSubscribeRequest,
    ClearQueueRequest: ClearQueueRequest,
    CreateTopicResponse: CreateTopicResponse,
    ClearSubscriptionFilterTagsResponse: ClearSubscriptionFilterTagsResponse,
    UnbindDeadLetterResponse: UnbindDeadLetterResponse,
    TransactionPolicy: TransactionPolicy,
    DescribeTopicDetailRequest: DescribeTopicDetailRequest,
    DeleteTopicRequest: DeleteTopicRequest,
    DescribeTopicDetailResponse: DescribeTopicDetailResponse,
    DescribeQueueDetailResponse: DescribeQueueDetailResponse,
    UnbindDeadLetterRequest: UnbindDeadLetterRequest,
    CreateTopicRequest: CreateTopicRequest,
    DeleteQueueRequest: DeleteQueueRequest,
    Filter: Filter,
    DescribeDeadLetterSourceQueuesResponse: DescribeDeadLetterSourceQueuesResponse,
    RewindQueueResponse: RewindQueueResponse,
    ModifyTopicAttributeRequest: ModifyTopicAttributeRequest,
    DescribeQueueDetailRequest: DescribeQueueDetailRequest,
    QueueSet: QueueSet,
    DeleteTopicResponse: DeleteTopicResponse,
    ClearSubscriptionFilterTagsRequest: ClearSubscriptionFilterTagsRequest,
    CreateQueueResponse: CreateQueueResponse,
    DeleteSubscribeResponse: DeleteSubscribeResponse,
    DescribeDeadLetterSourceQueuesRequest: DescribeDeadLetterSourceQueuesRequest,
    Tag: Tag,
    DeadLetterSource: DeadLetterSource,
    CreateSubscribeResponse: CreateSubscribeResponse,
    ClearQueueResponse: ClearQueueResponse,
    ModifySubscriptionAttributeRequest: ModifySubscriptionAttributeRequest,
    Subscription: Subscription,
    DeleteQueueResponse: DeleteQueueResponse,
    ModifyQueueAttributeRequest: ModifyQueueAttributeRequest,

}
