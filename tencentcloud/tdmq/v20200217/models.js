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
 * DescribeRoles response structure.
 * @class
 */
class DescribeRolesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of roles.
         * @type {Array.<Role> || null}
         */
        this.RoleSets = null;

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

        if (params.RoleSets) {
            this.RoleSets = new Array();
            for (let z in params.RoleSets) {
                let obj = new Role();
                obj.deserialize(params.RoleSets[z]);
                this.RoleSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBindClusters response structure.
 * @class
 */
class DescribeBindClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of dedicated clusters
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of dedicated clusters
         * @type {Array.<BindCluster> || null}
         */
        this.ClusterSet = null;

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

        if (params.ClusterSet) {
            this.ClusterSet = new Array();
            for (let z in params.ClusterSet) {
                let obj = new BindCluster();
                obj.deserialize(params.ClusterSet[z]);
                this.ClusterSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * cmq DeadLetterPolicy
 * @class
 */
class CmqDeadLetterPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dead letter queue.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeadLetterQueue = null;

        /**
         * Dead letter queue policy.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * Maximum period in seconds before an unconsumed message expires, which is required if `Policy` is 1. Value range: 300–43200. This value should be smaller than `MsgRetentionSeconds` (maximum message retention period)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * Maximum number of receipts.
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
        this.DeadLetterQueue = 'DeadLetterQueue' in params ? params.DeadLetterQueue : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.MaxTimeToLive = 'MaxTimeToLive' in params ? params.MaxTimeToLive : null;
        this.MaxReceiveCount = 'MaxReceiveCount' in params ? params.MaxReceiveCount : null;

    }
}

/**
 * RocketMQ namespace information
 * @class
 */
class RocketMQNamespace extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace name, which can contain 3–64 letters, digits, hyphens, and underscores
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Retention period for unconsumed messages in milliseconds. Valid range: 60 seconds–15 days.
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * Retention period for persisted messages in milliseconds
         * @type {number || null}
         */
        this.RetentionTime = null;

        /**
         * Remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.RetentionTime = 'RetentionTime' in params ? params.RetentionTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeSubscriptions request structure.
 * @class
 */
class DescribeSubscriptionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Topic name.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Offset. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Fuzzy match by subscriber name.
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * Data filter.
         * @type {Array.<FilterSubscription> || null}
         */
        this.Filters = null;

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new FilterSubscription();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * CreateRocketMQGroup request structure.
 * @class
 */
class CreateRocketMQGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group name (8–64 characters)
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Namespace. Currently, only one namespace is supported
         * @type {Array.<string> || null}
         */
        this.Namespaces = null;

        /**
         * Whether to enable consumption
         * @type {boolean || null}
         */
        this.ReadEnable = null;

        /**
         * Whether to enable broadcast consumption
         * @type {boolean || null}
         */
        this.BroadcastEnable = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Remarks (up to 128 characters)
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Namespaces = 'Namespaces' in params ? params.Namespaces : null;
        this.ReadEnable = 'ReadEnable' in params ? params.ReadEnable : null;
        this.BroadcastEnable = 'BroadcastEnable' in params ? params.BroadcastEnable : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * ModifyEnvironmentAttributes request structure.
 * @class
 */
class ModifyEnvironmentAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * TTL for unconsumed messages in seconds. Maximum value: 1296000 seconds.
         * @type {number || null}
         */
        this.MsgTTL = null;

        /**
         * Remarks (up to 128 characters).
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Message retention policy
         * @type {RetentionPolicy || null}
         */
        this.RetentionPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.RetentionPolicy) {
            let obj = new RetentionPolicy();
            obj.deserialize(params.RetentionPolicy)
            this.RetentionPolicy = obj;
        }

    }
}

/**
 * DeleteCluster response structure.
 * @class
 */
class DeleteClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendBatchMessages response structure.
 * @class
 */
class SendBatchMessagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique message ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * Error message. If an empty string is returned, no error occurred.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorMsg = null;

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
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCmqSubscriptionAttribute response structure.
 * @class
 */
class ModifyCmqSubscriptionAttributeResponse extends  AbstractModel {
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
 * CreateCmqTopic request structure.
 * @class
 */
class CreateCmqTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which must be unique in the same topic under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Maximum message length. Value range: 1024–65536 bytes (i.e., 1–64 KB). Default value: 65536.
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * Used to specify the message match policy for the topic. 1: tag match policy (default value); 2: routing match policy.
         * @type {number || null}
         */
        this.FilterType = null;

        /**
         * Message retention period. Value range: 60–86400 seconds (i.e., 1 minute–1 day). Default value: 86400.
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * Whether to enable message trace. true: yes; false: no. If this field is left empty, the feature will not be enabled.
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
 * DescribeRocketMQNamespaces response structure.
 * @class
 */
class DescribeRocketMQNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of namespaces
         * @type {Array.<RocketMQNamespace> || null}
         */
        this.Namespaces = null;

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

        if (params.Namespaces) {
            this.Namespaces = new Array();
            for (let z in params.Namespaces) {
                let obj = new RocketMQNamespace();
                obj.deserialize(params.Namespaces[z]);
                this.Namespaces.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Dedicated cluster information
 * @class
 */
class BindCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * Physical cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

    }
}

/**
 * ModifyCluster response structure.
 * @class
 */
class ModifyClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Recent RocketMQ usage
 * @class
 */
class RocketMQClusterRecentStats extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of topics
         * @type {number || null}
         */
        this.TopicNum = null;

        /**
         * Number of produced messages
         * @type {number || null}
         */
        this.ProducedMsgNum = null;

        /**
         * Number of consumed messages
         * @type {number || null}
         */
        this.ConsumedMsgNum = null;

        /**
         * Number of retained messages
         * @type {number || null}
         */
        this.AccumulativeMsgNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicNum = 'TopicNum' in params ? params.TopicNum : null;
        this.ProducedMsgNum = 'ProducedMsgNum' in params ? params.ProducedMsgNum : null;
        this.ConsumedMsgNum = 'ConsumedMsgNum' in params ? params.ConsumedMsgNum : null;
        this.AccumulativeMsgNum = 'AccumulativeMsgNum' in params ? params.AccumulativeMsgNum : null;

    }
}

/**
 * DescribeCmqQueues response structure.
 * @class
 */
class DescribeCmqQueuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quantity
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of queues
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CmqQueue> || null}
         */
        this.QueueList = null;

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

        if (params.QueueList) {
            this.QueueList = new Array();
            for (let z in params.QueueList) {
                let obj = new CmqQueue();
                obj.deserialize(params.QueueList[z]);
                this.QueueList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PublishCmqMsg request structure.
 * @class
 */
class PublishCmqMsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Message content
         * @type {string || null}
         */
        this.MsgContent = null;

        /**
         * Message tag
         * @type {Array.<string> || null}
         */
        this.MsgTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MsgContent = 'MsgContent' in params ? params.MsgContent : null;
        this.MsgTag = 'MsgTag' in params ? params.MsgTag : null;

    }
}

/**
 * CreateCmqSubscribe request structure.
 * @class
 */
class CreateCmqSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which must be unique in the same topic under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Subscription name, which must be unique in the same topic under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * Subscription protocol. Currently, two protocols are supported: HTTP and queue. To use the HTTP protocol, you need to build your own web server to receive messages. With the queue protocol, messages are automatically pushed to a CMQ queue and you can pull them concurrently.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * `Endpoint` for notification receipt, which is distinguished by `Protocol`. For `http`, `Endpoint` must begin with `http://` and `host` can be a domain name or IP. For `Queue`, enter `QueueName`. Note that currently the push service cannot push messages to a VPC; therefore, if a VPC domain name or address is entered for `Endpoint`, pushed messages will not be received. Currently, messages can be pushed only to the public network and classic network.
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * CMQ push server retry policy in case an error occurs while pushing a message to `Endpoint`. Valid values: 1. BACKOFF_RETRY: backoff retry, which is to retry at a fixed interval, discard the message after a certain number of retries, and continue to push the next message; 2. EXPONENTIAL_DECAY_RETRY: exponential decay retry, which is to retry at an exponentially increasing interval, such as 1s, 2s, 4s, 8s, and so on. As a message can be retained in a topic for one day, failed messages will be discarded at most after one day of retry. Default value: EXPONENTIAL_DECAY_RETRY.
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * Message body tag (used for message filtering). The number of tags cannot exceed 5, and each tag can contain up to 16 characters. It is used in conjunction with the `MsgTag` parameter of `(Batch)PublishMessage`. Rules: 1. If `FilterTag` is not configured, no matter whether `MsgTag` is configured, the subscription will receive all messages published to the topic; 2. If the array of `FilterTag` values has a value, only when at least one of the values in the array also exists in the array of `MsgTag` values (i.e., `FilterTag` and `MsgTag` have an intersection) can the subscription receive messages published to the topic; 3. If the array of `FilterTag` values has a value, but `MsgTag` is not configured, then no message published to the topic will be received, which can be considered as a special case of rule 2 as `FilterTag` and `MsgTag` do not intersect in this case. The overall design idea of rules is based on the intention of the subscriber.
         * @type {Array.<string> || null}
         */
        this.FilterTag = null;

        /**
         * The number of `BindingKey` cannot exceed 5, and the length of each `BindingKey` cannot exceed 64 bytes. This field indicates the filtering policy for subscribing to and receiving messages. Each `BindingKey` includes up to 15 dots (namely up to 16 segments).
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

        /**
         * Push content format. Valid values: 1. JSON; 2. SIMPLIFIED, i.e., the raw format. If `Protocol` is `queue`, this value must be `SIMPLIFIED`. If `Protocol` is `http`, both options are acceptable, and the default value is `JSON`.
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
 * RewindCmqQueue response structure.
 * @class
 */
class RewindCmqQueueResponse extends  AbstractModel {
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
 * DeleteCluster request structure.
 * @class
 */
class DeleteClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster to be deleted.
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * Subscription response parameter in CMQ
 * @class
 */
class CmqSubscription extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subscription name, which must be unique in the same topic under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * Subscription ID, which will be used during monitoring data pull.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubscriptionId = null;

        /**
         * Subscription owner `APPID`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TopicOwner = null;

        /**
         * Number of messages to be delivered in the subscription.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MsgCount = null;

        /**
         * Time when the subscription attribute is last modified. A Unix timestamp accurate down to the millisecond will be returned.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * Subscription creation time. A Unix timestamp accurate down to the millisecond will be returned.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Filtering policy for subscribing to and receiving messages.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

        /**
         * Endpoint that receives notifications, which varies by `protocol`: for HTTP, the endpoint must start with `http://`, and the `host` can be a domain or IP; for `queue`, `queueName` should be entered.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * Filtering policy selected when a subscription is created:
If `filterType` is 1, `filterTag` will be used for filtering.
If `filterType` is 2, `bindingKey` will be used for filtering.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FilterTags = null;

        /**
         * Subscription protocol. Currently, two protocols are supported: HTTP and queue. To use the HTTP protocol, you need to build your own web server to receive messages. With the queue protocol, messages are automatically pushed to a CMQ queue and you can pull them concurrently.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * CMQ push server retry policy in case an error occurs while pushing a message to the endpoint. Valid values:
(1) BACKOFF_RETRY: backoff retry, which is to retry at a fixed interval, discard the message after a certain number of retries, and continue to push the next message.
(2) EXPONENTIAL_DECAY_RETRY: exponential decay retry, which is to retry at an exponentially increasing interval, such as 1s, 2s, 4s, 8s, and so on. As a message can be retained in a topic for one day, failed messages will be discarded at most after one day of retry. Default value: EXPONENTIAL_DECAY_RETRY.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * Push content format. Valid values: 1. JSON; 2. SIMPLIFIED, i.e., the raw format. If `protocol` is `queue`, this value must be `SIMPLIFIED`. If `protocol` is `HTTP`, both values are acceptable, and the default value is `JSON`.
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
 * DeleteRocketMQGroup request structure.
 * @class
 */
class DeleteRocketMQGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Consumer group name
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * RocketMQ consumer group information
 * @class
 */
class RocketMQGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Consumer group name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Number of online consumers
         * @type {number || null}
         */
        this.ConsumerNum = null;

        /**
         * Consumption TPS
         * @type {number || null}
         */
        this.TPS = null;

        /**
         * Total number of retained messages
         * @type {number || null}
         */
        this.TotalAccumulative = null;

        /**
         * 0: cluster consumption mode; 1: broadcast consumption mode; -1: unknown
         * @type {number || null}
         */
        this.ConsumptionMode = null;

        /**
         * Whether to allow consumption
         * @type {boolean || null}
         */
        this.ReadEnabled = null;

        /**
         * Number of partitions in the retry letter topic
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RetryPartitionNum = null;

        /**
         * Creation time in milliseconds
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Modification time in milliseconds
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * Client protocol
         * @type {string || null}
         */
        this.ClientProtocol = null;

        /**
         * Remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Consumer type. Enumerated values: ACTIVELY, PASSIVELY
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConsumerType = null;

        /**
         * Whether to enable broadcast consumption
         * @type {boolean || null}
         */
        this.BroadcastEnabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ConsumerNum = 'ConsumerNum' in params ? params.ConsumerNum : null;
        this.TPS = 'TPS' in params ? params.TPS : null;
        this.TotalAccumulative = 'TotalAccumulative' in params ? params.TotalAccumulative : null;
        this.ConsumptionMode = 'ConsumptionMode' in params ? params.ConsumptionMode : null;
        this.ReadEnabled = 'ReadEnabled' in params ? params.ReadEnabled : null;
        this.RetryPartitionNum = 'RetryPartitionNum' in params ? params.RetryPartitionNum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ClientProtocol = 'ClientProtocol' in params ? params.ClientProtocol : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsumerType = 'ConsumerType' in params ? params.ConsumerType : null;
        this.BroadcastEnabled = 'BroadcastEnabled' in params ? params.BroadcastEnabled : null;

    }
}

/**
 * DeleteCmqTopic response structure.
 * @class
 */
class DeleteCmqTopicResponse extends  AbstractModel {
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
 * CreateSubscription request structure.
 * @class
 */
class CreateSubscriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Topic name.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Subscriber name, which can contain up to 150 letters, digits, hyphens, and underscores.
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * Whether the creation is idempotent; if not, you cannot create subscriptions with the same name.
         * @type {boolean || null}
         */
        this.IsIdempotent = null;

        /**
         * Remarks (up to 128 characters).
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Whether to automatically create a dead letter topic and a retry letter topic. true: yes (default value); false: no.
         * @type {boolean || null}
         */
        this.AutoCreatePolicyTopic = null;

        /**
         * Naming convention for dead letter and retry letter topics. `LEGACY` indicates to use the legacy naming convention, and `COMMUNITY` indicates to use the naming convention in the Pulsar community.
         * @type {string || null}
         */
        this.PostFixPattern = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.IsIdempotent = 'IsIdempotent' in params ? params.IsIdempotent : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AutoCreatePolicyTopic = 'AutoCreatePolicyTopic' in params ? params.AutoCreatePolicyTopic : null;
        this.PostFixPattern = 'PostFixPattern' in params ? params.PostFixPattern : null;

    }
}

/**
 * CreateRocketMQNamespace request structure.
 * @class
 */
class CreateRocketMQNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Namespace name, which can contain 3–64 letters, digits, hyphens, and underscores
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Retention time of unconsumed messages in milliseconds. Value range: 60 seconds–15 days
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * Retention time of persisted messages in milliseconds
         * @type {number || null}
         */
        this.RetentionTime = null;

        /**
         * Remarks (up to 128 characters)
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.RetentionTime = 'RetentionTime' in params ? params.RetentionTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeCmqTopicDetail response structure.
 * @class
 */
class DescribeCmqTopicDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic details
         * @type {CmqTopic || null}
         */
        this.TopicDescribe = null;

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

        if (params.TopicDescribe) {
            let obj = new CmqTopic();
            obj.deserialize(params.TopicDescribe)
            this.TopicDescribe = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Batch queue attribute information of CMQ
 * @class
 */
class CmqQueue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Message queue ID.
         * @type {string || null}
         */
        this.QueueId = null;

        /**
         * Message queue name.
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * Limit of the number of messages produced per second. The value for consumed messages is 1.1 times this value.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * Bandwidth limit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Bps = null;

        /**
         * Maximum retention period for inflight messages.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxDelaySeconds = null;

        /**
         * Maximum number of heaped messages. The value range is 1,000,000–10,000,000 during the beta test and can be 1,000,000–1,000,000,000 after the product is officially released. The default value is 10,000,000 during the beta test and will be 100,000,000 after the product is officially released.
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * Long polling wait time for message reception. Value range: 0–30 seconds. Default value: 0.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * Message retention period. Value range: 60–1296000 seconds (i.e., 1 minute–15 days). Default value: 345600 (i.e., 4 days).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * Message visibility timeout period. Value range: 1–43200 seconds (i.e., 12 hours). Default value: 30.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * Maximum message length. Value range: 1024–1048576 bytes (i.e., 1–1024 KB). Default value: 65536.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * Maximum time range during which a message can be rewound in the queue, which ranges from 0 to 43,200 seconds. 0 indicates that message rewind is disabled.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * Queue creation time. A Unix timestamp accurate down to the millisecond will be returned.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Time when the queue attribute is last modified. A Unix timestamp accurate down to the millisecond will be returned.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * Total number of messages in `Active` status (i.e., unconsumed) in the queue, which is an approximate value.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ActiveMsgNum = null;

        /**
         * Total number of messages in `Inactive` status (i.e., being consumed) in the queue, which is an approximate value.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InactiveMsgNum = null;

        /**
         * Number of delayed messages.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DelayMsgNum = null;

        /**
         * Number of retained messages which have been deleted by the `DelMsg` API but are still within their rewind time range.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RewindMsgNum = null;

        /**
         * Minimum unconsumed time of message in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinMsgTime = null;

        /**
         * Transaction message queue. true: transaction message type; false: other message types.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Transaction = null;

        /**
         * Dead letter queue.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CmqDeadLetterSource> || null}
         */
        this.DeadLetterSource = null;

        /**
         * Dead letter queue policy.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CmqDeadLetterPolicy || null}
         */
        this.DeadLetterPolicy = null;

        /**
         * Transaction message policy.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CmqTransactionPolicy || null}
         */
        this.TransactionPolicy = null;

        /**
         * Creator `Uin`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Associated tag.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Message trace. true: enabled; false: not enabled
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Trace = null;

        /**
         * Tenant ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TenantId = null;

        /**
         * Namespace name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NamespaceName = null;

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
                let obj = new CmqDeadLetterSource();
                obj.deserialize(params.DeadLetterSource[z]);
                this.DeadLetterSource.push(obj);
            }
        }

        if (params.DeadLetterPolicy) {
            let obj = new CmqDeadLetterPolicy();
            obj.deserialize(params.DeadLetterPolicy)
            this.DeadLetterPolicy = obj;
        }

        if (params.TransactionPolicy) {
            let obj = new CmqTransactionPolicy();
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
        this.TenantId = 'TenantId' in params ? params.TenantId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

    }
}

/**
 * CreateEnvironment response structure.
 * @class
 */
class CreateEnvironmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * TTL for unconsumed messages in seconds.
         * @type {number || null}
         */
        this.MsgTTL = null;

        /**
         * Remarks (up to 128 characters).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Namespace ID
         * @type {string || null}
         */
        this.NamespaceId = null;

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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Producer
 * @class
 */
class Producer extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Topic name.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Number of connections.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CountConnect = null;

        /**
         * Set of connections.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Connection> || null}
         */
        this.ConnectionSets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.CountConnect = 'CountConnect' in params ? params.CountConnect : null;

        if (params.ConnectionSets) {
            this.ConnectionSets = new Array();
            for (let z in params.ConnectionSets) {
                let obj = new Connection();
                obj.deserialize(params.ConnectionSets[z]);
                this.ConnectionSets.push(obj);
            }
        }

    }
}

/**
 * CreateSubscription response structure.
 * @class
 */
class CreateSubscriptionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation result.
         * @type {boolean || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendMsg response structure.
 * @class
 */
class SendMsgResponse extends  AbstractModel {
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
 * ModifyCmqTopicAttribute response structure.
 * @class
 */
class ModifyCmqTopicAttributeResponse extends  AbstractModel {
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
 * DescribeCmqSubscriptionDetail request structure.
 * @class
 */
class DescribeCmqSubscriptionDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which must be unique in the same topic under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Starting position of the list of topics to be returned on the current page in case of paginated return. If a value is entered, `limit` is required. If this parameter is left empty, 0 will be used by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of topics to be returned per page in case of paginated return. If this parameter is not passed in, 20 will be used by default. Maximum value: 50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Fuzzy search by `SubscriptionName`
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

    }
}

/**
 * Topic instance
 * @class
 */
class Topic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Average size of the messages published in the last interval in bytes.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AverageMsgSize = null;

        /**
         * Number of consumers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConsumerCount = null;

        /**
         * Total number of recorded messages.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastConfirmedEntry = null;

        /**
         * Time when the last ledger was created.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastLedgerCreatedTimestamp = null;

        /**
         * Number of messages published by local and replicated publishers per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgRateIn = null;

        /**
         * Sum of the numbers of messages delivered by local and replicated consumers per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgRateOut = null;

        /**
         * Number of bytes of messages published by local and replicated publishers per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgThroughputIn = null;

        /**
         * Number of bytes of messages delivered by local and replicated consumers per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgThroughputOut = null;

        /**
         * Total number of recorded messages.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NumberOfEntries = null;

        /**
         * Number of partitions ≤ 0: there are no subpartitions in the topic.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * Number of producers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProducerCount = null;

        /**
         * Total amount of all stored messages in bytes.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TotalSize = null;

        /**
         * Subpartitions in a partitioned topic.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PartitionsTopic> || null}
         */
        this.SubTopicSets = null;

        /**
         * Topic type description:
0: general message;
1: globally sequential message;
2: partitionally sequential message;
3: retry letter queue;
4: dead letter queue;
5: transaction message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TopicType = null;

        /**
         * Environment (namespace) name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Topic name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Remarks (up to 128 characters).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Creation time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Modification time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Maximum number of producers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProducerLimit = null;

        /**
         * Maximum number of consumers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConsumerLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AverageMsgSize = 'AverageMsgSize' in params ? params.AverageMsgSize : null;
        this.ConsumerCount = 'ConsumerCount' in params ? params.ConsumerCount : null;
        this.LastConfirmedEntry = 'LastConfirmedEntry' in params ? params.LastConfirmedEntry : null;
        this.LastLedgerCreatedTimestamp = 'LastLedgerCreatedTimestamp' in params ? params.LastLedgerCreatedTimestamp : null;
        this.MsgRateIn = 'MsgRateIn' in params ? params.MsgRateIn : null;
        this.MsgRateOut = 'MsgRateOut' in params ? params.MsgRateOut : null;
        this.MsgThroughputIn = 'MsgThroughputIn' in params ? params.MsgThroughputIn : null;
        this.MsgThroughputOut = 'MsgThroughputOut' in params ? params.MsgThroughputOut : null;
        this.NumberOfEntries = 'NumberOfEntries' in params ? params.NumberOfEntries : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.ProducerCount = 'ProducerCount' in params ? params.ProducerCount : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

        if (params.SubTopicSets) {
            this.SubTopicSets = new Array();
            for (let z in params.SubTopicSets) {
                let obj = new PartitionsTopic();
                obj.deserialize(params.SubTopicSets[z]);
                this.SubTopicSets.push(obj);
            }
        }
        this.TopicType = 'TopicType' in params ? params.TopicType : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ProducerLimit = 'ProducerLimit' in params ? params.ProducerLimit : null;
        this.ConsumerLimit = 'ConsumerLimit' in params ? params.ConsumerLimit : null;

    }
}

/**
 * DescribeEnvironments request structure.
 * @class
 */
class DescribeEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fuzzy search by namespace name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Offset. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * * EnvironmentId
Filter by namespace for exact query.
Type: String
Required: no
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
 * DescribeRocketMQNamespaces request structure.
 * @class
 */
class DescribeRocketMQNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Search by name
         * @type {string || null}
         */
        this.NameKeyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NameKeyword = 'NameKeyword' in params ? params.NameKeyword : null;

    }
}

/**
 * DescribeRocketMQTopics request structure.
 * @class
 */
class DescribeRocketMQTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Query limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Filter by topic type. Valid values: Normal, GlobalOrder, PartitionedOrder, Transaction.
         * @type {Array.<string> || null}
         */
        this.FilterType = null;

        /**
         * Search by topic name. Fuzzy query is supported.
         * @type {string || null}
         */
        this.FilterName = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.FilterName = 'FilterName' in params ? params.FilterName : null;

    }
}

/**
 * ModifyRocketMQCluster response structure.
 * @class
 */
class ModifyRocketMQClusterResponse extends  AbstractModel {
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
 * DescribeCmqQueueDetail response structure.
 * @class
 */
class DescribeCmqQueueDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of queue details.
         * @type {CmqQueue || null}
         */
        this.QueueDescribe = null;

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

        if (params.QueueDescribe) {
            let obj = new CmqQueue();
            obj.deserialize(params.QueueDescribe)
            this.QueueDescribe = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEnvironment request structure.
 * @class
 */
class CreateEnvironmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name, which can contain up to 16 letters, digits, hyphens, and underscores.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Unconsumed message expiration time in seconds. Minimum value: 60; maximum value: 1296000 (15 days).
         * @type {number || null}
         */
        this.MsgTTL = null;

        /**
         * Remarks (up to 128 characters).
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Message retention policy
         * @type {RetentionPolicy || null}
         */
        this.RetentionPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.RetentionPolicy) {
            let obj = new RetentionPolicy();
            obj.deserialize(params.RetentionPolicy)
            this.RetentionPolicy = obj;
        }

    }
}

/**
 * DeleteTopics response structure.
 * @class
 */
class DeleteTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of deleted topics.
         * @type {Array.<TopicRecord> || null}
         */
        this.TopicSets = null;

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

        if (params.TopicSets) {
            this.TopicSets = new Array();
            for (let z in params.TopicSets) {
                let obj = new TopicRecord();
                obj.deserialize(params.TopicSets[z]);
                this.TopicSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusters request structure.
 * @class
 */
class DescribeClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter by list of cluster IDs
         * @type {Array.<string> || null}
         */
        this.ClusterIdList = null;

        /**
         * Whether to filter by tag
         * @type {boolean || null}
         */
        this.IsTagFilter = null;

        /**
         * Filter. Currently, you can filter only by tag.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ClusterIdList = 'ClusterIdList' in params ? params.ClusterIdList : null;
        this.IsTagFilter = 'IsTagFilter' in params ? params.IsTagFilter : null;

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
 * RocketMQ topic information
 * @class
 */
class RocketMQTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Number of read/write partitions
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * Creation time in milliseconds
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Creation time in milliseconds
         * @type {number || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeRocketMQCluster response structure.
 * @class
 */
class DescribeRocketMQClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster information
         * @type {RocketMQClusterInfo || null}
         */
        this.ClusterInfo = null;

        /**
         * Cluster configuration
         * @type {RocketMQClusterConfig || null}
         */
        this.ClusterConfig = null;

        /**
         * Recent cluster usage
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {RocketMQClusterRecentStats || null}
         */
        this.ClusterStats = null;

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

        if (params.ClusterInfo) {
            let obj = new RocketMQClusterInfo();
            obj.deserialize(params.ClusterInfo)
            this.ClusterInfo = obj;
        }

        if (params.ClusterConfig) {
            let obj = new RocketMQClusterConfig();
            obj.deserialize(params.ClusterConfig)
            this.ClusterConfig = obj;
        }

        if (params.ClusterStats) {
            let obj = new RocketMQClusterRecentStats();
            obj.deserialize(params.ClusterStats)
            this.ClusterStats = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCmqSubscriptionDetail response structure.
 * @class
 */
class DescribeCmqSubscriptionDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Set of subscription attributes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CmqSubscription> || null}
         */
        this.SubscriptionSet = null;

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

        if (params.SubscriptionSet) {
            this.SubscriptionSet = new Array();
            for (let z in params.SubscriptionSet) {
                let obj = new CmqSubscription();
                obj.deserialize(params.SubscriptionSet[z]);
                this.SubscriptionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VPC binding record
 * @class
 */
class VpcBindRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tenant VPC ID
         * @type {string || null}
         */
        this.UniqueVpcId = null;

        /**
         * Tenant VPC subnet ID
         * @type {string || null}
         */
        this.UniqueSubnetId = null;

        /**
         * Route ID
         * @type {string || null}
         */
        this.RouterId = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * VPC port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Remarks (up to 128 characters)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UniqueVpcId = 'UniqueVpcId' in params ? params.UniqueVpcId : null;
        this.UniqueSubnetId = 'UniqueSubnetId' in params ? params.UniqueSubnetId : null;
        this.RouterId = 'RouterId' in params ? params.RouterId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * RewindCmqQueue request structure.
 * @class
 */
class RewindCmqQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue name, which must be unique under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * After this time is configured, the `(Batch)receiveMessage` API will consume the messages received after this timestamp in the order in which they are produced.
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
 * ModifyCluster request structure.
 * @class
 */
class ModifyClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the Pulsar cluster to be updated.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Updated cluster name.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Enables public network access, which can only be `true`.
         * @type {boolean || null}
         */
        this.PublicAccessEnabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PublicAccessEnabled = 'PublicAccessEnabled' in params ? params.PublicAccessEnabled : null;

    }
}

/**
 * DescribeEnvironmentAttributes request structure.
 * @class
 */
class DescribeEnvironmentAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyRocketMQCluster request structure.
 * @class
 */
class ModifyRocketMQClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RocketMQ cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 3–64 letters, digits, hyphens, and underscores
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Remarks (up to 128 characters)
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * AcknowledgeMessage request structure.
 * @class
 */
class AcknowledgeMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID used to identify the message, which can be obtained from the returned value of `receiveMessage`.
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * Topic name, which can be obtained from the returned value of `receiveMessage` and is better to be the full path of the topic, such as `tenant/namespace/topic`. If it is not specified, `public/default` will be used by default.
         * @type {string || null}
         */
        this.AckTopic = null;

        /**
         * Subscriber name, which can be obtained from the returned value of `receiveMessage`. Make sure that it is the same as the subscriber name identified in `receiveMessage`; otherwise, the received message cannot be correctly acknowledged.
         * @type {string || null}
         */
        this.SubName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.AckTopic = 'AckTopic' in params ? params.AckTopic : null;
        this.SubName = 'SubName' in params ? params.SubName : null;

    }
}

/**
 * DescribeTopics response structure.
 * @class
 */
class DescribeTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array set of topics.
         * @type {Array.<Topic> || null}
         */
        this.TopicSets = null;

        /**
         * Number of topics.
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

        if (params.TopicSets) {
            this.TopicSets = new Array();
            for (let z in params.TopicSets) {
                let obj = new Topic();
                obj.deserialize(params.TopicSets[z]);
                this.TopicSets.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PublishCmqMsg response structure.
 * @class
 */
class PublishCmqMsgResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `true` indicates that the sending is successful
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * Message ID
         * @type {string || null}
         */
        this.MsgId = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.MsgId = 'MsgId' in params ? params.MsgId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRocketMQCluster request structure.
 * @class
 */
class CreateRocketMQClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster name, which can contain 3–64 letters, digits, hyphens, and underscores
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Cluster description (up to 128 characters)
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * SendCmqMsg request structure.
 * @class
 */
class SendCmqMsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue name
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * Message content
         * @type {string || null}
         */
        this.MsgContent = null;

        /**
         * Delay time
         * @type {number || null}
         */
        this.DelaySeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.MsgContent = 'MsgContent' in params ? params.MsgContent : null;
        this.DelaySeconds = 'DelaySeconds' in params ? params.DelaySeconds : null;

    }
}

/**
 * AcknowledgeMessage response structure.
 * @class
 */
class AcknowledgeMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * If it is an empty string, no error occurred.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorMsg = null;

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
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEnvironmentRoles response structure.
 * @class
 */
class DeleteEnvironmentRolesResponse extends  AbstractModel {
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
 * DescribeClusterDetail request structure.
 * @class
 */
class DescribeClusterDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyRole response structure.
 * @class
 */
class ModifyRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role name
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

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
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Type of the tag key/value
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value of the tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Value of the tag value
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
 * DeleteCmqQueue response structure.
 * @class
 */
class DeleteCmqQueueResponse extends  AbstractModel {
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
 * DescribeRocketMQCluster request structure.
 * @class
 */
class DescribeRocketMQClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DeleteRocketMQTopic response structure.
 * @class
 */
class DeleteRocketMQTopicResponse extends  AbstractModel {
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
 * ModifyCmqTopicAttribute request structure.
 * @class
 */
class ModifyCmqTopicAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which must be unique under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Maximum message length. Value range: 1024–65536 bytes (i.e., 1–64 KB). Default value: 65536.
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * Message retention period. Value range: 60–86400 seconds (i.e., 1 minute–1 day). Default value: 86400.
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * Whether to enable message trace. true: yes; false: no. If this field is left empty, the feature will not be enabled.
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
 * DeleteRoles request structure.
 * @class
 */
class DeleteRolesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of role names.
         * @type {Array.<string> || null}
         */
        this.RoleNames = null;

        /**
         * Cluster ID (required)
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleNames = 'RoleNames' in params ? params.RoleNames : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * Subscriber
 * @class
 */
class Subscription extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * The time when the consumer started connecting.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConnectedSince = null;

        /**
         * Consumer address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConsumerAddr = null;

        /**
         * Number of consumers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConsumerCount = null;

        /**
         * Consumer name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConsumerName = null;

        /**
         * Number of retained messages.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgBacklog = null;

        /**
         * Proportion of messages under this subscription that were discarded but not sent after TTL.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgRateExpired = null;

        /**
         * Sum of the numbers of messages delivered by the consumer per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgRateOut = null;

        /**
         * Number of bytes of messages consumed by the consumer per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgThroughputOut = null;

        /**
         * Subscription name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * Set of consumers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Consumer> || null}
         */
        this.ConsumerSets = null;

        /**
         * Whether it is online.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsOnline = null;

        /**
         * Set of consumption progress information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ConsumersSchedule> || null}
         */
        this.ConsumersScheduleSets = null;

        /**
         * Remarks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Creation time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Modification time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ConnectedSince = 'ConnectedSince' in params ? params.ConnectedSince : null;
        this.ConsumerAddr = 'ConsumerAddr' in params ? params.ConsumerAddr : null;
        this.ConsumerCount = 'ConsumerCount' in params ? params.ConsumerCount : null;
        this.ConsumerName = 'ConsumerName' in params ? params.ConsumerName : null;
        this.MsgBacklog = 'MsgBacklog' in params ? params.MsgBacklog : null;
        this.MsgRateExpired = 'MsgRateExpired' in params ? params.MsgRateExpired : null;
        this.MsgRateOut = 'MsgRateOut' in params ? params.MsgRateOut : null;
        this.MsgThroughputOut = 'MsgThroughputOut' in params ? params.MsgThroughputOut : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

        if (params.ConsumerSets) {
            this.ConsumerSets = new Array();
            for (let z in params.ConsumerSets) {
                let obj = new Consumer();
                obj.deserialize(params.ConsumerSets[z]);
                this.ConsumerSets.push(obj);
            }
        }
        this.IsOnline = 'IsOnline' in params ? params.IsOnline : null;

        if (params.ConsumersScheduleSets) {
            this.ConsumersScheduleSets = new Array();
            for (let z in params.ConsumersScheduleSets) {
                let obj = new ConsumersSchedule();
                obj.deserialize(params.ConsumersScheduleSets[z]);
                this.ConsumersScheduleSets.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateCmqSubscribe response structure.
 * @class
 */
class CreateCmqSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subscription ID
         * @type {string || null}
         */
        this.SubscriptionId = null;

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
        this.SubscriptionId = 'SubscriptionId' in params ? params.SubscriptionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubscriptions response structure.
 * @class
 */
class DescribeSubscriptionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array set of subscribers.
         * @type {Array.<Subscription> || null}
         */
        this.SubscriptionSets = null;

        /**
         * Quantity.
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

        if (params.SubscriptionSets) {
            this.SubscriptionSets = new Array();
            for (let z in params.SubscriptionSets) {
                let obj = new Subscription();
                obj.deserialize(params.SubscriptionSets[z]);
                this.SubscriptionSets.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRole request structure.
 * @class
 */
class ModifyRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role name, which can contain up to 32 letters, digits, hyphens, and underscores.
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Remarks (up to 128 characters).
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Cluster ID (required)
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * SendMessages response structure.
 * @class
 */
class SendMessagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * messageID, which must be globally unique and is the metadata information used to identify the message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * Returned error message. If an empty string is returned, no error occurred.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorMsg = null;

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
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReceiveMessage request structure.
 * @class
 */
class ReceiveMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the topic which receives the message. It is better to be the full path of the topic, such as `tenant/namespace/topic`. If it is not specified, `public/default` will be used by default.
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Subscriber name
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * Default value: 1000. Messages received by the consumer will first be stored in the `receiverQueueSize` queue to tune the message receiving rate.
         * @type {number || null}
         */
        this.ReceiverQueueSize = null;

        /**
         * Default value: Latest. It is used to determine the position where the consumer initially receives messages. Valid values: Earliest, Latest.
         * @type {string || null}
         */
        this.SubInitialPosition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.ReceiverQueueSize = 'ReceiverQueueSize' in params ? params.ReceiverQueueSize : null;
        this.SubInitialPosition = 'SubInitialPosition' in params ? params.SubInitialPosition : null;

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
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Topic name, which can contain up to 64 letters, digits, hyphens, and underscores.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 0: non-partitioned topic; other values: number of partitions in the partitioned topic (up to 128).
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * 0: general message;
1: globally sequential message;
2: partitionally sequential message;
3: retry letter queue;
4: dead letter queue.
         * @type {number || null}
         */
        this.TopicType = null;

        /**
         * Remarks (up to 128 characters).
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.TopicType = 'TopicType' in params ? params.TopicType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeTopics request structure.
 * @class
 */
class DescribeTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Fuzzy match by topic name.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Offset. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Topic type description:
0: general message;
1: globally sequential message;
2: partitionally sequential message;
3: retry letter queue;
4: dead letter queue;
5: transaction message.
         * @type {number || null}
         */
        this.TopicType = null;

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * * TopicName
Query by topic name for exact search.
Type: String
Required: no
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TopicType = 'TopicType' in params ? params.TopicType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
 * DeleteEnvironments response structure.
 * @class
 */
class DeleteEnvironmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of environments (namespaces) successfully deleted.
         * @type {Array.<string> || null}
         */
        this.EnvironmentIds = null;

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
        this.EnvironmentIds = 'EnvironmentIds' in params ? params.EnvironmentIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEnvironmentRoles response structure.
 * @class
 */
class DescribeEnvironmentRolesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Set of namespace roles.
         * @type {Array.<EnvironmentRole> || null}
         */
        this.EnvironmentRoleSets = null;

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

        if (params.EnvironmentRoleSets) {
            this.EnvironmentRoleSets = new Array();
            for (let z in params.EnvironmentRoleSets) {
                let obj = new EnvironmentRole();
                obj.deserialize(params.EnvironmentRoleSets[z]);
                this.EnvironmentRoleSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearCmqQueue request structure.
 * @class
 */
class ClearCmqQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue name, which must be unique under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
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
 * ModifyRocketMQGroup request structure.
 * @class
 */
class ModifyRocketMQGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Consumer group name
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Remarks (up to 128 characters)
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Whether to enable consumption
         * @type {boolean || null}
         */
        this.ReadEnable = null;

        /**
         * Whether to enable broadcast consumption
         * @type {boolean || null}
         */
        this.BroadcastEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ReadEnable = 'ReadEnable' in params ? params.ReadEnable : null;
        this.BroadcastEnable = 'BroadcastEnable' in params ? params.BroadcastEnable : null;

    }
}

/**
 * Filters subscriptions
 * @class
 */
class FilterSubscription extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to display only subscriptions that include real consumers.
         * @type {boolean || null}
         */
        this.ConsumerHasCount = null;

        /**
         * Whether to display only subscriptions with retained messages.
         * @type {boolean || null}
         */
        this.ConsumerHasBacklog = null;

        /**
         * Whether to display only subscriptions with messages discarded after expiration.
         * @type {boolean || null}
         */
        this.ConsumerHasExpired = null;

        /**
         * Filter by subscription name for exact search.
         * @type {Array.<string> || null}
         */
        this.SubscriptionNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerHasCount = 'ConsumerHasCount' in params ? params.ConsumerHasCount : null;
        this.ConsumerHasBacklog = 'ConsumerHasBacklog' in params ? params.ConsumerHasBacklog : null;
        this.ConsumerHasExpired = 'ConsumerHasExpired' in params ? params.ConsumerHasExpired : null;
        this.SubscriptionNames = 'SubscriptionNames' in params ? params.SubscriptionNames : null;

    }
}

/**
 * DescribeCmqTopics response structure.
 * @class
 */
class DescribeCmqTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of topics
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CmqTopic> || null}
         */
        this.TopicList = null;

        /**
         * Total number of topics
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

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new CmqTopic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCmqTopicDetail request structure.
 * @class
 */
class DescribeCmqTopicDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Exact match by `TopicName`.
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
 * Display field of the returned CMQ topic information
 * @class
 */
class CmqTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Topic name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Maximum lifecycle of message in topic. After the period specified by this parameter has elapsed since a message is sent to the topic, the message will be deleted no matter whether it has been successfully pushed to the user. This parameter is measured in seconds and defaulted to one day (86,400 seconds), which cannot be modified.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * Maximum message size, which ranges from 1,024 to 1,048,576 bytes (i.e., 1–1,024 KB). The default value is 65,536.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * Number of messages published per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * Filtering policy selected when a subscription is created:
If `filterType` is 1, `FilterTag` will be used for filtering.
If `filterType` is 2, `BindingKey` will be used for filtering.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FilterType = null;

        /**
         * Topic creation time. A Unix timestamp accurate down to the millisecond will be returned.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Time when the topic attribute is last modified. A Unix timestamp accurate down to the millisecond will be returned.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * Number of current messages in the topic (number of retained messages).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MsgCount = null;

        /**
         * Creator `Uin`. The `resource` field for CAM authentication is composed of this field.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Associated tag.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Message trace. true: enabled; false: not enabled
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Trace = null;

        /**
         * Tenant ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TenantId = null;

        /**
         * Namespace name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NamespaceName = null;

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
        this.TenantId = 'TenantId' in params ? params.TenantId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

    }
}

/**
 * UnbindCmqDeadLetter response structure.
 * @class
 */
class UnbindCmqDeadLetterResponse extends  AbstractModel {
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
 * ModifyRocketMQNamespace response structure.
 * @class
 */
class ModifyRocketMQNamespaceResponse extends  AbstractModel {
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
 * DeleteEnvironments request structure.
 * @class
 */
class DeleteEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of environments (namespaces). Up to 20 environments can be deleted at a time.
         * @type {Array.<string> || null}
         */
        this.EnvironmentIds = null;

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentIds = 'EnvironmentIds' in params ? params.EnvironmentIds : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeRocketMQClusters request structure.
 * @class
 */
class DescribeRocketMQClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Search by cluster ID
         * @type {string || null}
         */
        this.IdKeyword = null;

        /**
         * Search by cluster name
         * @type {string || null}
         */
        this.NameKeyword = null;

        /**
         * Filter by list of cluster IDs
         * @type {Array.<string> || null}
         */
        this.ClusterIdList = null;

        /**
         * For filtering by tag, this must be configured to `true`
         * @type {boolean || null}
         */
        this.IsTagFilter = null;

        /**
         * Filter. Currently, you can filter only by tag.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.IdKeyword = 'IdKeyword' in params ? params.IdKeyword : null;
        this.NameKeyword = 'NameKeyword' in params ? params.NameKeyword : null;
        this.ClusterIdList = 'ClusterIdList' in params ? params.ClusterIdList : null;
        this.IsTagFilter = 'IsTagFilter' in params ? params.IsTagFilter : null;

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
 * DescribeBindVpcs request structure.
 * @class
 */
class DescribeBindVpcsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeClusters response structure.
 * @class
 */
class DescribeClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of clusters
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of cluster information
         * @type {Array.<Cluster> || null}
         */
        this.ClusterSet = null;

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

        if (params.ClusterSet) {
            this.ClusterSet = new Array();
            for (let z in params.ClusterSet) {
                let obj = new Cluster();
                obj.deserialize(params.ClusterSet[z]);
                this.ClusterSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearCmqSubscriptionFilterTags request structure.
 * @class
 */
class ClearCmqSubscriptionFilterTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which must be unique in the same topic under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Subscription name, which must be unique in the same topic under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
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
 * Topic's key information
 * @class
 */
class TopicRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Topic name.
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * CreateRocketMQGroup response structure.
 * @class
 */
class CreateRocketMQGroupResponse extends  AbstractModel {
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
 * ModifyRocketMQNamespace request structure.
 * @class
 */
class ModifyRocketMQNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Namespace name, which can contain 3–64 letters, digits, hyphens, and underscores
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Retention time of unconsumed messages in milliseconds. Value range: 60 seconds–15 days
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * Retention time for persisted messages in milliseconds
         * @type {number || null}
         */
        this.RetentionTime = null;

        /**
         * Remarks (up to 128 characters)
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.RetentionTime = 'RetentionTime' in params ? params.RetentionTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeEnvironmentRoles request structure.
 * @class
 */
class DescribeEnvironmentRolesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name (required).
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Offset. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pulsar cluster ID (required)
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Role name
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * * RoleName
Filter by role name for exact query.
Type: String
Required: no
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

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
 * DeleteRoles response structure.
 * @class
 */
class DeleteRolesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name array of roles successfully deleted.
         * @type {Array.<string> || null}
         */
        this.RoleNames = null;

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
        this.RoleNames = 'RoleNames' in params ? params.RoleNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRocketMQTopic request structure.
 * @class
 */
class ModifyRocketMQTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Remarks (up to 128 characters)
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Number of partitions, which is invalid for globally sequential messages and cannot be less than the current number of partitions.
         * @type {number || null}
         */
        this.PartitionNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;

    }
}

/**
 * RocketMQ cluster's basic information
 * @class
 */
class RocketMQClusterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Region information
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Creation time in milliseconds
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Cluster remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Public network access address
         * @type {string || null}
         */
        this.PublicEndPoint = null;

        /**
         * VPC access address
         * @type {string || null}
         */
        this.VpcEndPoint = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PublicEndPoint = 'PublicEndPoint' in params ? params.PublicEndPoint : null;
        this.VpcEndPoint = 'VpcEndPoint' in params ? params.VpcEndPoint : null;

    }
}

/**
 * DescribeRocketMQTopics response structure.
 * @class
 */
class DescribeRocketMQTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of topic information
         * @type {Array.<RocketMQTopic> || null}
         */
        this.Topics = null;

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

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new RocketMQTopic();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Namespace information
 * @class
 */
class Environment extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace name
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * TTL for unconsumed messages in seconds. Maximum value: 1296000 seconds (i.e., 15 days)
         * @type {number || null}
         */
        this.MsgTTL = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Namespace ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Number of topics
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TopicNum = null;

        /**
         * Message retention policy
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {RetentionPolicy || null}
         */
        this.RetentionPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.TopicNum = 'TopicNum' in params ? params.TopicNum : null;

        if (params.RetentionPolicy) {
            let obj = new RetentionPolicy();
            obj.deserialize(params.RetentionPolicy)
            this.RetentionPolicy = obj;
        }

    }
}

/**
 * Tenant RocketMQ cluster details
 * @class
 */
class RocketMQClusterDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster's basic information
         * @type {RocketMQClusterInfo || null}
         */
        this.Info = null;

        /**
         * Cluster configuration information
         * @type {RocketMQClusterConfig || null}
         */
        this.Config = null;

        /**
         * Cluster status. 0: creating; 1: normal; 2: terminating; 3: deleted; 4. isolated; 5. creation failed; 6: deletion failed
Note: this field may return null, indicating that no valid values can be obtained.
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

        if (params.Info) {
            let obj = new RocketMQClusterInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }

        if (params.Config) {
            let obj = new RocketMQClusterConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteRocketMQGroup response structure.
 * @class
 */
class DeleteRocketMQGroupResponse extends  AbstractModel {
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
 * CreateCmqQueue response structure.
 * @class
 */
class CreateCmqQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `queueId` of a successfully created queue
         * @type {string || null}
         */
        this.QueueId = null;

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
        this.QueueId = 'QueueId' in params ? params.QueueId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Partitioned topic
 * @class
 */
class PartitionsTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Average size of the messages published in the last interval in bytes.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AverageMsgSize = null;

        /**
         * Number of consumers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConsumerCount = null;

        /**
         * Total number of recorded messages.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastConfirmedEntry = null;

        /**
         * Time when the last ledger was created.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastLedgerCreatedTimestamp = null;

        /**
         * Number of messages published by local and replicated publishers per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgRateIn = null;

        /**
         * Sum of the numbers of messages delivered by local and replicated consumers per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgRateOut = null;

        /**
         * Number of bytes of messages published by local and replicated publishers per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgThroughputIn = null;

        /**
         * Number of bytes of messages delivered by local and replicated consumers per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgThroughputOut = null;

        /**
         * Total number of recorded messages.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NumberOfEntries = null;

        /**
         * Subpartition ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * Number of producers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProducerCount = null;

        /**
         * Total amount of all stored messages in bytes.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TotalSize = null;

        /**
         * Topic type description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TopicType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AverageMsgSize = 'AverageMsgSize' in params ? params.AverageMsgSize : null;
        this.ConsumerCount = 'ConsumerCount' in params ? params.ConsumerCount : null;
        this.LastConfirmedEntry = 'LastConfirmedEntry' in params ? params.LastConfirmedEntry : null;
        this.LastLedgerCreatedTimestamp = 'LastLedgerCreatedTimestamp' in params ? params.LastLedgerCreatedTimestamp : null;
        this.MsgRateIn = 'MsgRateIn' in params ? params.MsgRateIn : null;
        this.MsgRateOut = 'MsgRateOut' in params ? params.MsgRateOut : null;
        this.MsgThroughputIn = 'MsgThroughputIn' in params ? params.MsgThroughputIn : null;
        this.MsgThroughputOut = 'MsgThroughputOut' in params ? params.MsgThroughputOut : null;
        this.NumberOfEntries = 'NumberOfEntries' in params ? params.NumberOfEntries : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.ProducerCount = 'ProducerCount' in params ? params.ProducerCount : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.TopicType = 'TopicType' in params ? params.TopicType : null;

    }
}

/**
 * DescribeRocketMQGroups response structure.
 * @class
 */
class DescribeRocketMQGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of subscription groups
         * @type {Array.<RocketMQGroup> || null}
         */
        this.Groups = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new RocketMQGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetMsgSubOffsetByTimestamp response structure.
 * @class
 */
class ResetMsgSubOffsetByTimestampResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCluster response structure.
 * @class
 */
class CreateClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCmqDeadLetterSourceQueues request structure.
 * @class
 */
class DescribeCmqDeadLetterSourceQueuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dead letter queue name
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * Starting position of the list of topics to be returned on the current page in case of paginated return. If a value is entered, `limit` is required. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Number of topics to be returned per page in case of paginated return. If this parameter is not passed in, 20 will be used by default. Maximum value: 50.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter by `SourceQueueName`
         * @type {string || null}
         */
        this.SourceQueueName = null;

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
        this.SourceQueueName = 'SourceQueueName' in params ? params.SourceQueueName : null;

    }
}

/**
 * DeleteRocketMQNamespace request structure.
 * @class
 */
class DeleteRocketMQNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;

    }
}

/**
 * CreateCluster request structure.
 * @class
 */
class CreateClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster name, which can contain up to 16 letters, digits, hyphens, and underscores.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * ID of your dedicated physical cluster. If it is not passed in, cluster resources will be created in a public cluster by default.
         * @type {number || null}
         */
        this.BindClusterId = null;

        /**
         * Remarks (up to 128 characters).
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * List of cluster tags
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether to enable public network access. If this parameter is left empty, the feature will be enabled by default
         * @type {boolean || null}
         */
        this.PublicAccessEnabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.BindClusterId = 'BindClusterId' in params ? params.BindClusterId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.PublicAccessEnabled = 'PublicAccessEnabled' in params ? params.PublicAccessEnabled : null;

    }
}

/**
 * ModifyCmqQueueAttribute response structure.
 * @class
 */
class ModifyCmqQueueAttributeResponse extends  AbstractModel {
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
 * CreateTopic response structure.
 * @class
 */
class CreateTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Topic name.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 0: non-partitioned topic; other values: number of partitions in the partitioned topic.
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * Remarks (up to 128 characters).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 0: general message;
1: globally sequential message;
2: partitionally sequential message;
3: retry letter queue;
4: dead letter queue;
5: transaction message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TopicType = null;

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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.TopicType = 'TopicType' in params ? params.TopicType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCmqQueues request structure.
 * @class
 */
class DescribeCmqQueuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting position of the list of queues to be returned on the current page in case of paginated return. If a value is entered, `limit` is required. If this parameter is left empty, 0 will be used by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of queues to be returned per page in case of paginated return. If this parameter is not passed in, 20 will be used by default. Maximum value: 50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter by `QueueName`
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * List of CMQ queue names
         * @type {Array.<string> || null}
         */
        this.QueueNameList = null;

        /**
         * For filtering by tag, this must be configured to `true`.
         * @type {boolean || null}
         */
        this.IsTagFilter = null;

        /**
         * Filter. Currently, you can filter only by tag.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.QueueNameList = 'QueueNameList' in params ? params.QueueNameList : null;
        this.IsTagFilter = 'IsTagFilter' in params ? params.IsTagFilter : null;

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
 * DescribeEnvironments response structure.
 * @class
 */
class DescribeEnvironmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of namespaces.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array set of namespaces.
         * @type {Array.<Environment> || null}
         */
        this.EnvironmentSet = null;

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

        if (params.EnvironmentSet) {
            this.EnvironmentSet = new Array();
            for (let z in params.EnvironmentSet) {
                let obj = new Environment();
                obj.deserialize(params.EnvironmentSet[z]);
                this.EnvironmentSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCmqSubscriptionAttribute request structure.
 * @class
 */
class ModifyCmqSubscriptionAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which must be unique in the same topic under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Subscription name, which must be unique in the same topic under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * CMQ push server retry policy in case an error occurs while pushing a message to the endpoint. Valid values:
(1) BACKOFF_RETRY: backoff retry, which is to retry at a fixed interval, discard the message after a certain number of retries, and continue to push the next message.
(2) EXPONENTIAL_DECAY_RETRY: exponential decay retry, which is to retry at an exponentially increasing interval, such as 1s, 2s, 4s, 8s, and so on. As a message can be retained in a topic for one day, failed messages will be discarded at most after one day of retry. Default value: EXPONENTIAL_DECAY_RETRY.
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * Push content format. Valid values: 1. JSON; 2. SIMPLIFIED, i.e., the raw format. If `Protocol` is `queue`, this value must be `SIMPLIFIED`. If `Protocol` is `HTTP`, both values are acceptable, and the default value is `JSON`.
         * @type {string || null}
         */
        this.NotifyContentFormat = null;

        /**
         * Message body tag (used for message filtering). The number of tags cannot exceed 5, and each tag can contain up to 16 characters. It is used in conjunction with the `MsgTag` parameter of `(Batch)PublishMessage`. Rules: 1. If `FilterTag` is not configured, no matter whether `MsgTag` is configured, the subscription will receive all messages published to the topic; 2. If the array of `FilterTag` values has a value, only when at least one of the values in the array also exists in the array of `MsgTag` values (i.e., `FilterTag` and `MsgTag` have an intersection) can the subscription receive messages published to the topic; 3. If the array of `FilterTag` values has a value, but `MsgTag` is not configured, then no message published to the topic will be received, which can be considered as a special case of rule 2 as `FilterTag` and `MsgTag` do not intersect in this case. The overall design idea of rules is based on the intention of the subscriber.
         * @type {Array.<string> || null}
         */
        this.FilterTags = null;

        /**
         * The number of `BindingKey` cannot exceed 5, and the length of each `BindingKey` cannot exceed 64 bytes. This field indicates the filtering policy for subscribing to and receiving messages. Each `BindingKey` includes up to 15 dots (namely up to 16 segments).
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
 * ModifyTopic response structure.
 * @class
 */
class ModifyTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of partitions
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * Remarks (up to 128 characters).
         * @type {string || null}
         */
        this.Remark = null;

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
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReceiveMessage response structure.
 * @class
 */
class ReceiveMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique primary key used to identify the message
         * @type {string || null}
         */
        this.MessageID = null;

        /**
         * Content of the received message
         * @type {string || null}
         */
        this.MessagePayload = null;

        /**
         * Provided to the `Ack` API and used to acknowledge messages in the topic
         * @type {string || null}
         */
        this.AckTopic = null;

        /**
         * Returned error message. If it is an empty string, no error occurred.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * Returned subscriber name, which will be used when an acknowledgment consumer is created.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubName = null;

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
        this.MessageID = 'MessageID' in params ? params.MessageID : null;
        this.MessagePayload = 'MessagePayload' in params ? params.MessagePayload : null;
        this.AckTopic = 'AckTopic' in params ? params.AckTopic : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.SubName = 'SubName' in params ? params.SubName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRocketMQCluster response structure.
 * @class
 */
class DeleteRocketMQClusterResponse extends  AbstractModel {
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
 * CreateCmqTopic response structure.
 * @class
 */
class CreateCmqTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cmq DeadLetterSource
 * @class
 */
class CmqDeadLetterSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Message queue ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.QueueId = null;

        /**
         * Message queue name.
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
 * ClearCmqSubscriptionFilterTags response structure.
 * @class
 */
class ClearCmqSubscriptionFilterTagsResponse extends  AbstractModel {
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
 * DescribeCmqTopics request structure.
 * @class
 */
class DescribeCmqTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting position of the list of queues to be returned on the current page in case of paginated return. If a value is entered, `limit` is required. If this parameter is left empty, 0 will be used by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of queues to be returned per page in case of paginated return. If this parameter is not passed in, 20 will be used by default. Maximum value: 50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Fuzzy search by `TopicName`
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Filter by list of CMQ topic names
         * @type {Array.<string> || null}
         */
        this.TopicNameList = null;

        /**
         * For filtering by tag, this must be configured to `true`.
         * @type {boolean || null}
         */
        this.IsTagFilter = null;

        /**
         * Filter. Currently, you can filter only by tag.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicNameList = 'TopicNameList' in params ? params.TopicNameList : null;
        this.IsTagFilter = 'IsTagFilter' in params ? params.IsTagFilter : null;

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
 * Producer connection instance
 * @class
 */
class Connection extends  AbstractModel {
    constructor(){
        super();

        /**
         * Producer address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Topic partition.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * Producer version.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientVersion = null;

        /**
         * Producer name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProducerName = null;

        /**
         * Producer ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProducerId = null;

        /**
         * Average message size in bytes.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AverageMsgSize = null;

        /**
         * Production rate in bytes/sec.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgThroughputIn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.ClientVersion = 'ClientVersion' in params ? params.ClientVersion : null;
        this.ProducerName = 'ProducerName' in params ? params.ProducerName : null;
        this.ProducerId = 'ProducerId' in params ? params.ProducerId : null;
        this.AverageMsgSize = 'AverageMsgSize' in params ? params.AverageMsgSize : null;
        this.MsgThroughputIn = 'MsgThroughputIn' in params ? params.MsgThroughputIn : null;

    }
}

/**
 * DeleteTopics request structure.
 * @class
 */
class DeleteTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Set of topics. Up to 20 topics can be deleted at a time.
         * @type {Array.<TopicRecord> || null}
         */
        this.TopicSets = null;

        /**
         * Pulsar cluster ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Whether to force deletion. Default value: false
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopicSets) {
            this.TopicSets = new Array();
            for (let z in params.TopicSets) {
                let obj = new TopicRecord();
                obj.deserialize(params.TopicSets[z]);
                this.TopicSets.push(obj);
            }
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * cmq TransactionPolicy
 * @class
 */
class CmqTransactionPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * First lookback time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FirstQueryInterval = null;

        /**
         * Maximum number of queries.
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
 * ModifyTopic request structure.
 * @class
 */
class ModifyTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Topic name.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Number of partitions, which must be equal to or greater than the original number of partitions. To maintain the original number of partitions, enter the original number. Modifying the number of partitions will take effect only for non-globally sequential messages. There can be up to 128 partitions.
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * Remarks (up to 128 characters).
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ResetMsgSubOffsetByTimestamp request structure.
 * @class
 */
class ResetMsgSubOffsetByTimestampRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Topic name.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Subscriber name.
         * @type {string || null}
         */
        this.Subscription = null;

        /**
         * Timestamp, accurate down to the millisecond.
         * @type {number || null}
         */
        this.ToTimestamp = null;

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Subscription = 'Subscription' in params ? params.Subscription : null;
        this.ToTimestamp = 'ToTimestamp' in params ? params.ToTimestamp : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * CreateEnvironmentRole response structure.
 * @class
 */
class CreateEnvironmentRoleResponse extends  AbstractModel {
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
 *  Consumer
 * @class
 */
class Consumer extends  AbstractModel {
    constructor(){
        super();

        /**
         * The time when the consumer started connecting.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConnectedSince = null;

        /**
         * Consumer address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConsumerAddr = null;

        /**
         * Consumer name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConsumerName = null;

        /**
         * Consumer version.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectedSince = 'ConnectedSince' in params ? params.ConnectedSince : null;
        this.ConsumerAddr = 'ConsumerAddr' in params ? params.ConsumerAddr : null;
        this.ConsumerName = 'ConsumerName' in params ? params.ConsumerName : null;
        this.ClientVersion = 'ClientVersion' in params ? params.ClientVersion : null;

    }
}

/**
 * DescribeBindVpcs response structure.
 * @class
 */
class DescribeBindVpcsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Set of VPCs.
         * @type {Array.<VpcBindRecord> || null}
         */
        this.VpcSets = null;

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

        if (params.VpcSets) {
            this.VpcSets = new Array();
            for (let z in params.VpcSets) {
                let obj = new VpcBindRecord();
                obj.deserialize(params.VpcSets[z]);
                this.VpcSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCmqSubscribe request structure.
 * @class
 */
class DeleteCmqSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which must be unique under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Subscription name, which must be unique in the same topic under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
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
 * RocketMQ cluster configuration
 * @class
 */
class RocketMQClusterConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maximum TPS per namespace
         * @type {number || null}
         */
        this.MaxTpsPerNamespace = null;

        /**
         * Maximum number of namespaces
         * @type {number || null}
         */
        this.MaxNamespaceNum = null;

        /**
         * Number of used namespaces
         * @type {number || null}
         */
        this.UsedNamespaceNum = null;

        /**
         * Maximum number of topics
         * @type {number || null}
         */
        this.MaxTopicNum = null;

        /**
         * Number of used topics
         * @type {number || null}
         */
        this.UsedTopicNum = null;

        /**
         * Maximum number of groups
         * @type {number || null}
         */
        this.MaxGroupNum = null;

        /**
         * Number of used groups
         * @type {number || null}
         */
        this.UsedGroupNum = null;

        /**
         * Maximum message retention period in milliseconds
         * @type {number || null}
         */
        this.MaxRetentionTime = null;

        /**
         * Maximum message delay in milliseconds
         * @type {number || null}
         */
        this.MaxLatencyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxTpsPerNamespace = 'MaxTpsPerNamespace' in params ? params.MaxTpsPerNamespace : null;
        this.MaxNamespaceNum = 'MaxNamespaceNum' in params ? params.MaxNamespaceNum : null;
        this.UsedNamespaceNum = 'UsedNamespaceNum' in params ? params.UsedNamespaceNum : null;
        this.MaxTopicNum = 'MaxTopicNum' in params ? params.MaxTopicNum : null;
        this.UsedTopicNum = 'UsedTopicNum' in params ? params.UsedTopicNum : null;
        this.MaxGroupNum = 'MaxGroupNum' in params ? params.MaxGroupNum : null;
        this.UsedGroupNum = 'UsedGroupNum' in params ? params.UsedGroupNum : null;
        this.MaxRetentionTime = 'MaxRetentionTime' in params ? params.MaxRetentionTime : null;
        this.MaxLatencyTime = 'MaxLatencyTime' in params ? params.MaxLatencyTime : null;

    }
}

/**
 * DescribeCmqDeadLetterSourceQueues response structure.
 * @class
 */
class DescribeCmqDeadLetterSourceQueuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible queues
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Source queues of dead letter queue
         * @type {Array.<CmqDeadLetterSource> || null}
         */
        this.QueueSet = null;

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

        if (params.QueueSet) {
            this.QueueSet = new Array();
            for (let z in params.QueueSet) {
                let obj = new CmqDeadLetterSource();
                obj.deserialize(params.QueueSet[z]);
                this.QueueSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSubscriptions response structure.
 * @class
 */
class DeleteSubscriptionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of successfully deleted subscriptions.
         * @type {Array.<SubscriptionTopic> || null}
         */
        this.SubscriptionTopicSets = null;

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

        if (params.SubscriptionTopicSets) {
            this.SubscriptionTopicSets = new Array();
            for (let z in params.SubscriptionTopicSets) {
                let obj = new SubscriptionTopic();
                obj.deserialize(params.SubscriptionTopicSets[z]);
                this.SubscriptionTopicSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRocketMQTopic request structure.
 * @class
 */
class DeleteRocketMQTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.Topic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Topic = 'Topic' in params ? params.Topic : null;

    }
}

/**
 * Consumption progress details
 * @class
 */
class ConsumersSchedule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current partition ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * Number of messages.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NumberOfEntries = null;

        /**
         * Number of retained messages.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MsgBacklog = null;

        /**
         * Sum of the numbers of messages delivered by the consumer per second.
         * @type {string || null}
         */
        this.MsgRateOut = null;

        /**
         * Number of bytes of messages consumed by the consumer per second.
         * @type {string || null}
         */
        this.MsgThroughputOut = null;

        /**
         * Percentage of messages discarded due to timeout.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MsgRateExpired = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.NumberOfEntries = 'NumberOfEntries' in params ? params.NumberOfEntries : null;
        this.MsgBacklog = 'MsgBacklog' in params ? params.MsgBacklog : null;
        this.MsgRateOut = 'MsgRateOut' in params ? params.MsgRateOut : null;
        this.MsgThroughputOut = 'MsgThroughputOut' in params ? params.MsgThroughputOut : null;
        this.MsgRateExpired = 'MsgRateExpired' in params ? params.MsgRateExpired : null;

    }
}

/**
 * Set of cluster information
 * @class
 */
class Cluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Number of access points
         * @type {number || null}
         */
        this.EndPointNum = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Whether the cluster is healthy. 1: healthy; 0: exceptional
         * @type {number || null}
         */
        this.Healthy = null;

        /**
         * Cluster health information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HealthyInfo = null;

        /**
         * Cluster status. 0: creating; 1: normal; 2: deleting; 3: deleted; 5. creation failed; 6: deletion failed
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Maximum number of namespaces
         * @type {number || null}
         */
        this.MaxNamespaceNum = null;

        /**
         * Maximum number of topics
         * @type {number || null}
         */
        this.MaxTopicNum = null;

        /**
         * Maximum QPS
         * @type {number || null}
         */
        this.MaxQps = null;

        /**
         * Maximum message retention period in seconds
         * @type {number || null}
         */
        this.MessageRetentionTime = null;

        /**
         * Maximum storage capacity
         * @type {number || null}
         */
        this.MaxStorageCapacity = null;

        /**
         * Cluster version
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Public network access point
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicEndPoint = null;

        /**
         * VPC access point
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcEndPoint = null;

        /**
         * Number of namespaces
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NamespaceNum = null;

        /**
         * Limit of used storage in MB
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UsedStorageBudget = null;

        /**
         * Maximum message production rate in messages
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxPublishRateInMessages = null;

        /**
         * Maximum message push rate in messages
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxDispatchRateInMessages = null;

        /**
         * Maximum message production rate in bytes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxPublishRateInBytes = null;

        /**
         * Maximum message push rate in bytes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxDispatchRateInBytes = null;

        /**
         * Number of created topics
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TopicNum = null;

        /**
         * Maximum message delay in seconds
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxMessageDelayInSeconds = null;

        /**
         * Whether to enable public network access. If this parameter is left empty, the feature will be enabled by default
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.PublicAccessEnabled = null;

        /**
         * Tag
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.EndPointNum = 'EndPointNum' in params ? params.EndPointNum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Healthy = 'Healthy' in params ? params.Healthy : null;
        this.HealthyInfo = 'HealthyInfo' in params ? params.HealthyInfo : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MaxNamespaceNum = 'MaxNamespaceNum' in params ? params.MaxNamespaceNum : null;
        this.MaxTopicNum = 'MaxTopicNum' in params ? params.MaxTopicNum : null;
        this.MaxQps = 'MaxQps' in params ? params.MaxQps : null;
        this.MessageRetentionTime = 'MessageRetentionTime' in params ? params.MessageRetentionTime : null;
        this.MaxStorageCapacity = 'MaxStorageCapacity' in params ? params.MaxStorageCapacity : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.PublicEndPoint = 'PublicEndPoint' in params ? params.PublicEndPoint : null;
        this.VpcEndPoint = 'VpcEndPoint' in params ? params.VpcEndPoint : null;
        this.NamespaceNum = 'NamespaceNum' in params ? params.NamespaceNum : null;
        this.UsedStorageBudget = 'UsedStorageBudget' in params ? params.UsedStorageBudget : null;
        this.MaxPublishRateInMessages = 'MaxPublishRateInMessages' in params ? params.MaxPublishRateInMessages : null;
        this.MaxDispatchRateInMessages = 'MaxDispatchRateInMessages' in params ? params.MaxDispatchRateInMessages : null;
        this.MaxPublishRateInBytes = 'MaxPublishRateInBytes' in params ? params.MaxPublishRateInBytes : null;
        this.MaxDispatchRateInBytes = 'MaxDispatchRateInBytes' in params ? params.MaxDispatchRateInBytes : null;
        this.TopicNum = 'TopicNum' in params ? params.TopicNum : null;
        this.MaxMessageDelayInSeconds = 'MaxMessageDelayInSeconds' in params ? params.MaxMessageDelayInSeconds : null;
        this.PublicAccessEnabled = 'PublicAccessEnabled' in params ? params.PublicAccessEnabled : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Message retention policy
 * @class
 */
class RetentionPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Message retention period
         * @type {number || null}
         */
        this.TimeInMinutes = null;

        /**
         * Message retention size
         * @type {number || null}
         */
        this.SizeInMB = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeInMinutes = 'TimeInMinutes' in params ? params.TimeInMinutes : null;
        this.SizeInMB = 'SizeInMB' in params ? params.SizeInMB : null;

    }
}

/**
 * CreateRocketMQCluster response structure.
 * @class
 */
class CreateRocketMQClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRocketMQNamespace response structure.
 * @class
 */
class DeleteRocketMQNamespaceResponse extends  AbstractModel {
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
 * SendMsg request structure.
 * @class
 */
class SendMsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Topic name. If the topic is a partitioned topic, you need to specify the partition; otherwise, messages will be sent to partition 0 by default, such as `my_topic-partition-0`.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Message content, which cannot be empty and can contain up to 5,242,880 bytes.
         * @type {string || null}
         */
        this.MsgContent = null;

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MsgContent = 'MsgContent' in params ? params.MsgContent : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeCmqQueueDetail request structure.
 * @class
 */
class DescribeCmqQueueDetailRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * CreateRocketMQTopic request structure.
 * @class
 */
class CreateRocketMQTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which can contain 3–64 letters, digits, hyphens, and underscores
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Topic namespace. Currently, you can create topics only in one single namespace.
         * @type {Array.<string> || null}
         */
        this.Namespaces = null;

        /**
         * Topic type. Valid values: Normal, GlobalOrder, PartitionedOrder.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Topic remarks (up to 128 characters)
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Number of partitions, which doesn't take effect for globally sequential messages
         * @type {number || null}
         */
        this.PartitionNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Namespaces = 'Namespaces' in params ? params.Namespaces : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;

    }
}

/**
 * CreateRole response structure.
 * @class
 */
class CreateRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role name
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Role token
         * @type {string || null}
         */
        this.Token = null;

        /**
         * Remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

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
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRocketMQCluster request structure.
 * @class
 */
class DeleteRocketMQClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster to be deleted.
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DeleteEnvironmentRoles request structure.
 * @class
 */
class DeleteEnvironmentRolesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Array of role names.
         * @type {Array.<string> || null}
         */
        this.RoleNames = null;

        /**
         * Cluster ID (required)
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.RoleNames = 'RoleNames' in params ? params.RoleNames : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ClearCmqQueue response structure.
 * @class
 */
class ClearCmqQueueResponse extends  AbstractModel {
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
 * DescribeBindClusters request structure.
 * @class
 */
class DescribeBindClustersRequest extends  AbstractModel {
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
 * CreateRocketMQTopic response structure.
 * @class
 */
class CreateRocketMQTopicResponse extends  AbstractModel {
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
 * ModifyEnvironmentAttributes response structure.
 * @class
 */
class ModifyEnvironmentAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * TTL for unconsumed messages in seconds.
         * @type {number || null}
         */
        this.MsgTTL = null;

        /**
         * Remarks (up to 128 characters).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Namespace ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NamespaceId = null;

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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Set of environment roles
 * @class
 */
class EnvironmentRole extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace).
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Role name.
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Permissions, which is a non-empty string array of `produce` and `consume` at the most.
         * @type {Array.<string> || null}
         */
        this.Permissions = null;

        /**
         * Role description.
         * @type {string || null}
         */
        this.RoleDescribe = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Permissions = 'Permissions' in params ? params.Permissions : null;
        this.RoleDescribe = 'RoleDescribe' in params ? params.RoleDescribe : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateCmqQueue request structure.
 * @class
 */
class CreateCmqQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue name, which must be unique under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * Maximum number of heaped messages. The value range is 1,000,000–10,000,000 during the beta test and can be 1,000,000–1,000,000,000 after the product is officially released. The default value is 10,000,000 during the beta test and will be 100,000,000 after the product is officially released.
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * Long polling wait time for message reception. Value range: 0–30 seconds. Default value: 0.
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * Message visibility timeout period. Value range: 1–43200 seconds (i.e., 12 hours). Default value: 30.
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * Maximum message length. Value range: 1024–65536 bytes (i.e., 1–64 KB). Default value: 65536.
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * Message retention period. Value range: 60–1296000 seconds (i.e., 1 minute–15 days). Default value: 345600 (i.e., 4 days).
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * Whether to enable the message rewinding feature for a queue. Value range: 0–msgRetentionSeconds, where 0 means not to enable this feature, while `msgRetentionSeconds` indicates that the maximum rewindable period is the message retention period of the queue.
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * 1: transaction queue; 0: general queue
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
         * Dead letter policy. 0: message has been consumed multiple times but not deleted; 1: `Time-To-Live` has elapsed
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * Maximum receipt times. Value range: 1–1000
         * @type {number || null}
         */
        this.MaxReceiveCount = null;

        /**
         * Maximum period in seconds before an unconsumed message expires, which is required if `policy` is 1. Value range: 300–43200. This value should be smaller than `msgRetentionSeconds` (maximum message retention period)
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * Whether to enable message trace. true: yes; false: no. If this field is not configured, the feature will not be enabled
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
 * ModifyEnvironmentRole response structure.
 * @class
 */
class ModifyEnvironmentRoleResponse extends  AbstractModel {
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
 * DeleteCmqQueue request structure.
 * @class
 */
class DeleteCmqQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue name, which must be unique under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
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
 * DescribeRocketMQGroups request structure.
 * @class
 */
class DescribeRocketMQGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Topic name, which can be used to query all subscription groups under the topic
         * @type {string || null}
         */
        this.FilterTopic = null;

        /**
         * Consumer group query by consumer group name. Fuzzy query is supported
         * @type {string || null}
         */
        this.FilterGroup = null;

        /**
         * Sort by specified field. Valid values: tps, accumulative.
         * @type {string || null}
         */
        this.SortedBy = null;

        /**
         * Sort in ascending or descending order. Valid values: asc, desc.
         * @type {string || null}
         */
        this.SortOrder = null;

        /**
         * Subscription group name. After it is specified, only the information of the corresponding subscription group will be returned.
         * @type {string || null}
         */
        this.FilterOneGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterTopic = 'FilterTopic' in params ? params.FilterTopic : null;
        this.FilterGroup = 'FilterGroup' in params ? params.FilterGroup : null;
        this.SortedBy = 'SortedBy' in params ? params.SortedBy : null;
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;
        this.FilterOneGroup = 'FilterOneGroup' in params ? params.FilterOneGroup : null;

    }
}

/**
 * DescribeRocketMQClusters response structure.
 * @class
 */
class DescribeRocketMQClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RocketMQClusterDetail> || null}
         */
        this.ClusterList = null;

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

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new RocketMQClusterDetail();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRole request structure.
 * @class
 */
class CreateRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role name, which can contain up to 32 letters, digits, hyphens, and underscores.
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Remarks (up to 128 characters).
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Cluster ID (required)
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeProducers request structure.
 * @class
 */
class DescribeProducersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Topic name.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Offset. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Fuzzy match by producer name.
         * @type {string || null}
         */
        this.ProducerName = null;

        /**
         * Pulsar cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProducerName = 'ProducerName' in params ? params.ProducerName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyEnvironmentRole request structure.
 * @class
 */
class ModifyEnvironmentRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Role name.
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Permissions, which is a non-empty string array of `produce` and `consume` at the most.
         * @type {Array.<string> || null}
         */
        this.Permissions = null;

        /**
         * Cluster ID (required)
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Permissions = 'Permissions' in params ? params.Permissions : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeEnvironmentAttributes response structure.
 * @class
 */
class DescribeEnvironmentAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TTL for unconsumed messages in seconds. Maximum value: 1296000 seconds (i.e., 15 days).
         * @type {number || null}
         */
        this.MsgTTL = null;

        /**
         * Consumption rate limit in bytes/second. 0: unlimited.
         * @type {number || null}
         */
        this.RateInByte = null;

        /**
         * Consumption rate limit in messages/second. 0: unlimited.
         * @type {number || null}
         */
        this.RateInSize = null;

        /**
         * Retention policy for consumed messages in hours. 0: deleted immediately after consumption.
         * @type {number || null}
         */
        this.RetentionHours = null;

        /**
         * Retention policy for consumed messages in GB. 0: deleted immediately after consumption.
         * @type {number || null}
         */
        this.RetentionSize = null;

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Number of replicas.
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

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
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;
        this.RateInByte = 'RateInByte' in params ? params.RateInByte : null;
        this.RateInSize = 'RateInSize' in params ? params.RateInSize : null;
        this.RetentionHours = 'RetentionHours' in params ? params.RetentionHours : null;
        this.RetentionSize = 'RetentionSize' in params ? params.RetentionSize : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Role instance
 * @class
 */
class Role extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role name.
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Value of the role token.
         * @type {string || null}
         */
        this.Token = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Subscription
 * @class
 */
class SubscriptionTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Topic name.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Subscription name.
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

    }
}

/**
 * DescribeProducers response structure.
 * @class
 */
class DescribeProducersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array set of producers.
         * @type {Array.<Producer> || null}
         */
        this.ProducerSets = null;

        /**
         * Total number of records.
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

        if (params.ProducerSets) {
            this.ProducerSets = new Array();
            for (let z in params.ProducerSets) {
                let obj = new Producer();
                obj.deserialize(params.ProducerSets[z]);
                this.ProducerSets.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRocketMQNamespace response structure.
 * @class
 */
class CreateRocketMQNamespaceResponse extends  AbstractModel {
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
 * SendBatchMessages request structure.
 * @class
 */
class SendBatchMessagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the topic to which to send the message. It is better to be the full path of the topic, such as `tenant/namespace/topic`. If it is not specified, `public/default` will be used by default.
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Content of the message to be sent
         * @type {string || null}
         */
        this.Payload = null;

        /**
         * String-Type token, which is optional and will be automatically obtained by the system.
         * @type {string || null}
         */
        this.StringToken = null;

        /**
         * Producer name, which must be globally unique. If it is not configured, the system will automatically generate one.
         * @type {string || null}
         */
        this.ProducerName = null;

        /**
         * Message sending timeout period in seconds. Default value: 30s
         * @type {number || null}
         */
        this.SendTimeout = null;

        /**
         * Maximum number of produced messages which can be cached in the memory. Default value: 1000
         * @type {number || null}
         */
        this.MaxPendingMessages = null;

        /**
         * Maximum number of messages in each batch. Default value: 1000 messages/batch
         * @type {number || null}
         */
        this.BatchingMaxMessages = null;

        /**
         * Maximum wait time for each batch, after which the batch will be sent no matter whether the specified number or size of messages in the batch is reached. Default value: 10 ms
         * @type {number || null}
         */
        this.BatchingMaxPublishDelay = null;

        /**
         * Maximum allowed size of messages in each batch. Default value: 128 KB
         * @type {number || null}
         */
        this.BatchingMaxBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Payload = 'Payload' in params ? params.Payload : null;
        this.StringToken = 'StringToken' in params ? params.StringToken : null;
        this.ProducerName = 'ProducerName' in params ? params.ProducerName : null;
        this.SendTimeout = 'SendTimeout' in params ? params.SendTimeout : null;
        this.MaxPendingMessages = 'MaxPendingMessages' in params ? params.MaxPendingMessages : null;
        this.BatchingMaxMessages = 'BatchingMaxMessages' in params ? params.BatchingMaxMessages : null;
        this.BatchingMaxPublishDelay = 'BatchingMaxPublishDelay' in params ? params.BatchingMaxPublishDelay : null;
        this.BatchingMaxBytes = 'BatchingMaxBytes' in params ? params.BatchingMaxBytes : null;

    }
}

/**
 * DeleteCmqTopic request structure.
 * @class
 */
class DeleteCmqTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name, which must be unique under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
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
 * SendCmqMsg response structure.
 * @class
 */
class SendCmqMsgResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `true` indicates that the sending is successful
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * Message ID
         * @type {string || null}
         */
        this.MsgId = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.MsgId = 'MsgId' in params ? params.MsgId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindCmqDeadLetter request structure.
 * @class
 */
class UnbindCmqDeadLetterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source queue name of dead letter policy. Calling this API will clear the dead letter queue policy of this queue.
         * @type {string || null}
         */
        this.SourceQueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceQueueName = 'SourceQueueName' in params ? params.SourceQueueName : null;

    }
}

/**
 * ModifyCmqQueueAttribute request structure.
 * @class
 */
class ModifyCmqQueueAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue name, which must be unique under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * Maximum number of heaped messages. The value range is 1,000,000–10,000,000 during the beta test and can be 1,000,000–1,000,000,000 after the product is officially released. The default value is 10,000,000 during the beta test and will be 100,000,000 after the product is officially released.
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * Long polling wait time for message reception. Value range: 0–30 seconds. Default value: 0.
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * Message visibility timeout period. Value range: 1–43200 seconds (i.e., 12 hours). Default value: 30.
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * Maximum message length. Value range: 1024–65536 bytes (i.e., 1–64 KB). Default value: 65536.
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * Message retention period. Value range: 60–1296000 seconds (i.e., 1 minute–15 days). Default value: 345600 (i.e., 4 days).
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * Maximum message rewindable period. Value range: 0–msgRetentionSeconds (maximum message retention period of the queue). 0 indicates not to enable message rewinding.
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
         * Maximum period in seconds before an unconsumed message expires, which is required if `MaxTimeToLivepolicy` is 1. Value range: 300–43200. This value should be smaller than `MsgRetentionSeconds` (maximum message retention period)
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
         * Whether to enable message trace. true: yes; false: no. If this field is left empty, the feature will not be enabled.
         * @type {boolean || null}
         */
        this.Trace = null;

        /**
         * Whether to enable transaction. 1: yes; 0: no
         * @type {number || null}
         */
        this.Transaction = null;

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
        this.Transaction = 'Transaction' in params ? params.Transaction : null;

    }
}

/**
 * DeleteCmqSubscribe response structure.
 * @class
 */
class DeleteCmqSubscribeResponse extends  AbstractModel {
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
 * DescribeRoles request structure.
 * @class
 */
class DescribeRolesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fuzzy query by role name
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Offset. If this parameter is left empty, 0 will be used by default.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Cluster ID (required)
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * * RoleName
Filter by role name for exact query.
Type: String
Required: no
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
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
 * DeleteSubscriptions request structure.
 * @class
 */
class DeleteSubscriptionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Set of subscriptions. Up to 20 subscriptions can be deleted at a time.
         * @type {Array.<SubscriptionTopic> || null}
         */
        this.SubscriptionTopicSets = null;

        /**
         * Pulsar cluster ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Whether to force deletion. Default value: false
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SubscriptionTopicSets) {
            this.SubscriptionTopicSets = new Array();
            for (let z in params.SubscriptionTopicSets) {
                let obj = new SubscriptionTopic();
                obj.deserialize(params.SubscriptionTopicSets[z]);
                this.SubscriptionTopicSets.push(obj);
            }
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * ModifyRocketMQGroup response structure.
 * @class
 */
class ModifyRocketMQGroupResponse extends  AbstractModel {
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
 * DescribeClusterDetail response structure.
 * @class
 */
class DescribeClusterDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster details
         * @type {Cluster || null}
         */
        this.ClusterSet = null;

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

        if (params.ClusterSet) {
            let obj = new Cluster();
            obj.deserialize(params.ClusterSet)
            this.ClusterSet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendMessages request structure.
 * @class
 */
class SendMessagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the topic to which to send the message. It is better to be the full path of the topic, such as `tenant/namespace/topic`. If it is not specified, `public/default` will be used by default.
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Content of the message to be sent
         * @type {string || null}
         */
        this.Payload = null;

        /**
         * Token used for authentication, which is optional and will be automatically obtained by the system.
         * @type {string || null}
         */
        this.StringToken = null;

        /**
         * Producer name, which must be globally unique. If it is not configured, the system will randomly generate one.
         * @type {string || null}
         */
        this.ProducerName = null;

        /**
         * Message sending timeout period, which is 30s by default.
         * @type {number || null}
         */
        this.SendTimeout = null;

        /**
         * Maximum number of produced messages which can be cached in the memory. Default value: 1000
         * @type {number || null}
         */
        this.MaxPendingMessages = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Payload = 'Payload' in params ? params.Payload : null;
        this.StringToken = 'StringToken' in params ? params.StringToken : null;
        this.ProducerName = 'ProducerName' in params ? params.ProducerName : null;
        this.SendTimeout = 'SendTimeout' in params ? params.SendTimeout : null;
        this.MaxPendingMessages = 'MaxPendingMessages' in params ? params.MaxPendingMessages : null;

    }
}

/**
 * CreateEnvironmentRole request structure.
 * @class
 */
class CreateEnvironmentRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment (namespace) name.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Role name.
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Permissions, which is a non-empty string array of `produce` and `consume` at the most.
         * @type {Array.<string> || null}
         */
        this.Permissions = null;

        /**
         * Cluster ID (required)
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Permissions = 'Permissions' in params ? params.Permissions : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyRocketMQTopic response structure.
 * @class
 */
class ModifyRocketMQTopicResponse extends  AbstractModel {
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

module.exports = {
    DescribeRolesResponse: DescribeRolesResponse,
    DescribeBindClustersResponse: DescribeBindClustersResponse,
    CmqDeadLetterPolicy: CmqDeadLetterPolicy,
    RocketMQNamespace: RocketMQNamespace,
    DescribeSubscriptionsRequest: DescribeSubscriptionsRequest,
    CreateRocketMQGroupRequest: CreateRocketMQGroupRequest,
    ModifyEnvironmentAttributesRequest: ModifyEnvironmentAttributesRequest,
    DeleteClusterResponse: DeleteClusterResponse,
    SendBatchMessagesResponse: SendBatchMessagesResponse,
    ModifyCmqSubscriptionAttributeResponse: ModifyCmqSubscriptionAttributeResponse,
    CreateCmqTopicRequest: CreateCmqTopicRequest,
    DescribeRocketMQNamespacesResponse: DescribeRocketMQNamespacesResponse,
    BindCluster: BindCluster,
    ModifyClusterResponse: ModifyClusterResponse,
    RocketMQClusterRecentStats: RocketMQClusterRecentStats,
    DescribeCmqQueuesResponse: DescribeCmqQueuesResponse,
    PublishCmqMsgRequest: PublishCmqMsgRequest,
    CreateCmqSubscribeRequest: CreateCmqSubscribeRequest,
    RewindCmqQueueResponse: RewindCmqQueueResponse,
    DeleteClusterRequest: DeleteClusterRequest,
    CmqSubscription: CmqSubscription,
    DeleteRocketMQGroupRequest: DeleteRocketMQGroupRequest,
    RocketMQGroup: RocketMQGroup,
    DeleteCmqTopicResponse: DeleteCmqTopicResponse,
    CreateSubscriptionRequest: CreateSubscriptionRequest,
    CreateRocketMQNamespaceRequest: CreateRocketMQNamespaceRequest,
    DescribeCmqTopicDetailResponse: DescribeCmqTopicDetailResponse,
    CmqQueue: CmqQueue,
    CreateEnvironmentResponse: CreateEnvironmentResponse,
    Producer: Producer,
    CreateSubscriptionResponse: CreateSubscriptionResponse,
    SendMsgResponse: SendMsgResponse,
    ModifyCmqTopicAttributeResponse: ModifyCmqTopicAttributeResponse,
    DescribeCmqSubscriptionDetailRequest: DescribeCmqSubscriptionDetailRequest,
    Topic: Topic,
    DescribeEnvironmentsRequest: DescribeEnvironmentsRequest,
    DescribeRocketMQNamespacesRequest: DescribeRocketMQNamespacesRequest,
    DescribeRocketMQTopicsRequest: DescribeRocketMQTopicsRequest,
    ModifyRocketMQClusterResponse: ModifyRocketMQClusterResponse,
    DescribeCmqQueueDetailResponse: DescribeCmqQueueDetailResponse,
    CreateEnvironmentRequest: CreateEnvironmentRequest,
    DeleteTopicsResponse: DeleteTopicsResponse,
    DescribeClustersRequest: DescribeClustersRequest,
    RocketMQTopic: RocketMQTopic,
    DescribeRocketMQClusterResponse: DescribeRocketMQClusterResponse,
    DescribeCmqSubscriptionDetailResponse: DescribeCmqSubscriptionDetailResponse,
    VpcBindRecord: VpcBindRecord,
    RewindCmqQueueRequest: RewindCmqQueueRequest,
    ModifyClusterRequest: ModifyClusterRequest,
    DescribeEnvironmentAttributesRequest: DescribeEnvironmentAttributesRequest,
    ModifyRocketMQClusterRequest: ModifyRocketMQClusterRequest,
    AcknowledgeMessageRequest: AcknowledgeMessageRequest,
    DescribeTopicsResponse: DescribeTopicsResponse,
    PublishCmqMsgResponse: PublishCmqMsgResponse,
    CreateRocketMQClusterRequest: CreateRocketMQClusterRequest,
    SendCmqMsgRequest: SendCmqMsgRequest,
    AcknowledgeMessageResponse: AcknowledgeMessageResponse,
    DeleteEnvironmentRolesResponse: DeleteEnvironmentRolesResponse,
    DescribeClusterDetailRequest: DescribeClusterDetailRequest,
    ModifyRoleResponse: ModifyRoleResponse,
    Tag: Tag,
    DeleteCmqQueueResponse: DeleteCmqQueueResponse,
    DescribeRocketMQClusterRequest: DescribeRocketMQClusterRequest,
    DeleteRocketMQTopicResponse: DeleteRocketMQTopicResponse,
    ModifyCmqTopicAttributeRequest: ModifyCmqTopicAttributeRequest,
    DeleteRolesRequest: DeleteRolesRequest,
    Subscription: Subscription,
    CreateCmqSubscribeResponse: CreateCmqSubscribeResponse,
    DescribeSubscriptionsResponse: DescribeSubscriptionsResponse,
    ModifyRoleRequest: ModifyRoleRequest,
    SendMessagesResponse: SendMessagesResponse,
    ReceiveMessageRequest: ReceiveMessageRequest,
    CreateTopicRequest: CreateTopicRequest,
    DescribeTopicsRequest: DescribeTopicsRequest,
    DeleteEnvironmentsResponse: DeleteEnvironmentsResponse,
    DescribeEnvironmentRolesResponse: DescribeEnvironmentRolesResponse,
    ClearCmqQueueRequest: ClearCmqQueueRequest,
    ModifyRocketMQGroupRequest: ModifyRocketMQGroupRequest,
    FilterSubscription: FilterSubscription,
    DescribeCmqTopicsResponse: DescribeCmqTopicsResponse,
    DescribeCmqTopicDetailRequest: DescribeCmqTopicDetailRequest,
    CmqTopic: CmqTopic,
    UnbindCmqDeadLetterResponse: UnbindCmqDeadLetterResponse,
    ModifyRocketMQNamespaceResponse: ModifyRocketMQNamespaceResponse,
    DeleteEnvironmentsRequest: DeleteEnvironmentsRequest,
    DescribeRocketMQClustersRequest: DescribeRocketMQClustersRequest,
    DescribeBindVpcsRequest: DescribeBindVpcsRequest,
    DescribeClustersResponse: DescribeClustersResponse,
    ClearCmqSubscriptionFilterTagsRequest: ClearCmqSubscriptionFilterTagsRequest,
    TopicRecord: TopicRecord,
    CreateRocketMQGroupResponse: CreateRocketMQGroupResponse,
    ModifyRocketMQNamespaceRequest: ModifyRocketMQNamespaceRequest,
    DescribeEnvironmentRolesRequest: DescribeEnvironmentRolesRequest,
    DeleteRolesResponse: DeleteRolesResponse,
    ModifyRocketMQTopicRequest: ModifyRocketMQTopicRequest,
    RocketMQClusterInfo: RocketMQClusterInfo,
    DescribeRocketMQTopicsResponse: DescribeRocketMQTopicsResponse,
    Environment: Environment,
    RocketMQClusterDetail: RocketMQClusterDetail,
    DeleteRocketMQGroupResponse: DeleteRocketMQGroupResponse,
    CreateCmqQueueResponse: CreateCmqQueueResponse,
    PartitionsTopic: PartitionsTopic,
    DescribeRocketMQGroupsResponse: DescribeRocketMQGroupsResponse,
    ResetMsgSubOffsetByTimestampResponse: ResetMsgSubOffsetByTimestampResponse,
    CreateClusterResponse: CreateClusterResponse,
    DescribeCmqDeadLetterSourceQueuesRequest: DescribeCmqDeadLetterSourceQueuesRequest,
    DeleteRocketMQNamespaceRequest: DeleteRocketMQNamespaceRequest,
    CreateClusterRequest: CreateClusterRequest,
    ModifyCmqQueueAttributeResponse: ModifyCmqQueueAttributeResponse,
    CreateTopicResponse: CreateTopicResponse,
    DescribeCmqQueuesRequest: DescribeCmqQueuesRequest,
    DescribeEnvironmentsResponse: DescribeEnvironmentsResponse,
    ModifyCmqSubscriptionAttributeRequest: ModifyCmqSubscriptionAttributeRequest,
    ModifyTopicResponse: ModifyTopicResponse,
    ReceiveMessageResponse: ReceiveMessageResponse,
    DeleteRocketMQClusterResponse: DeleteRocketMQClusterResponse,
    CreateCmqTopicResponse: CreateCmqTopicResponse,
    CmqDeadLetterSource: CmqDeadLetterSource,
    ClearCmqSubscriptionFilterTagsResponse: ClearCmqSubscriptionFilterTagsResponse,
    DescribeCmqTopicsRequest: DescribeCmqTopicsRequest,
    Filter: Filter,
    Connection: Connection,
    DeleteTopicsRequest: DeleteTopicsRequest,
    CmqTransactionPolicy: CmqTransactionPolicy,
    ModifyTopicRequest: ModifyTopicRequest,
    ResetMsgSubOffsetByTimestampRequest: ResetMsgSubOffsetByTimestampRequest,
    CreateEnvironmentRoleResponse: CreateEnvironmentRoleResponse,
    Consumer: Consumer,
    DescribeBindVpcsResponse: DescribeBindVpcsResponse,
    DeleteCmqSubscribeRequest: DeleteCmqSubscribeRequest,
    RocketMQClusterConfig: RocketMQClusterConfig,
    DescribeCmqDeadLetterSourceQueuesResponse: DescribeCmqDeadLetterSourceQueuesResponse,
    DeleteSubscriptionsResponse: DeleteSubscriptionsResponse,
    DeleteRocketMQTopicRequest: DeleteRocketMQTopicRequest,
    ConsumersSchedule: ConsumersSchedule,
    Cluster: Cluster,
    RetentionPolicy: RetentionPolicy,
    CreateRocketMQClusterResponse: CreateRocketMQClusterResponse,
    DeleteRocketMQNamespaceResponse: DeleteRocketMQNamespaceResponse,
    SendMsgRequest: SendMsgRequest,
    DescribeCmqQueueDetailRequest: DescribeCmqQueueDetailRequest,
    CreateRocketMQTopicRequest: CreateRocketMQTopicRequest,
    CreateRoleResponse: CreateRoleResponse,
    DeleteRocketMQClusterRequest: DeleteRocketMQClusterRequest,
    DeleteEnvironmentRolesRequest: DeleteEnvironmentRolesRequest,
    ClearCmqQueueResponse: ClearCmqQueueResponse,
    DescribeBindClustersRequest: DescribeBindClustersRequest,
    CreateRocketMQTopicResponse: CreateRocketMQTopicResponse,
    ModifyEnvironmentAttributesResponse: ModifyEnvironmentAttributesResponse,
    EnvironmentRole: EnvironmentRole,
    CreateCmqQueueRequest: CreateCmqQueueRequest,
    ModifyEnvironmentRoleResponse: ModifyEnvironmentRoleResponse,
    DeleteCmqQueueRequest: DeleteCmqQueueRequest,
    DescribeRocketMQGroupsRequest: DescribeRocketMQGroupsRequest,
    DescribeRocketMQClustersResponse: DescribeRocketMQClustersResponse,
    CreateRoleRequest: CreateRoleRequest,
    DescribeProducersRequest: DescribeProducersRequest,
    ModifyEnvironmentRoleRequest: ModifyEnvironmentRoleRequest,
    DescribeEnvironmentAttributesResponse: DescribeEnvironmentAttributesResponse,
    Role: Role,
    SubscriptionTopic: SubscriptionTopic,
    DescribeProducersResponse: DescribeProducersResponse,
    CreateRocketMQNamespaceResponse: CreateRocketMQNamespaceResponse,
    SendBatchMessagesRequest: SendBatchMessagesRequest,
    DeleteCmqTopicRequest: DeleteCmqTopicRequest,
    SendCmqMsgResponse: SendCmqMsgResponse,
    UnbindCmqDeadLetterRequest: UnbindCmqDeadLetterRequest,
    ModifyCmqQueueAttributeRequest: ModifyCmqQueueAttributeRequest,
    DeleteCmqSubscribeResponse: DeleteCmqSubscribeResponse,
    DescribeRolesRequest: DescribeRolesRequest,
    DeleteSubscriptionsRequest: DeleteSubscriptionsRequest,
    ModifyRocketMQGroupResponse: ModifyRocketMQGroupResponse,
    DescribeClusterDetailResponse: DescribeClusterDetailResponse,
    SendMessagesRequest: SendMessagesRequest,
    CreateEnvironmentRoleRequest: CreateEnvironmentRoleRequest,
    ModifyRocketMQTopicResponse: ModifyRocketMQTopicResponse,

}
