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
 * Topic details
 * @class
 */
class TopicDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Number of partitions
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * Number of replicas
         * @type {number || null}
         */
        this.ReplicaNum = null;

        /**
         * Remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Note = null;

        /**
         * Creation time
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Whether to enable IP authentication allowlist. true: yes, false: no
         * @type {boolean || null}
         */
        this.EnableWhiteList = null;

        /**
         * Number of IPs in IP allowlist
         * @type {number || null}
         */
        this.IpWhiteListCount = null;

        /**
         * COS bucket for data backup: address of the destination COS bucket
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ForwardCosBucket = null;

        /**
         * Status of data backup to COS. 1: not enabled, 0: enabled
         * @type {number || null}
         */
        this.ForwardStatus = null;

        /**
         * Frequency of data backup to COS
         * @type {number || null}
         */
        this.ForwardInterval = null;

        /**
         * Advanced configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Config || null}
         */
        this.Config = null;

        /**
         * Message retention time configuration (for recording the latest retention time)
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {TopicRetentionTimeConfigRsp || null}
         */
        this.RetentionTimeConfig = null;

        /**
         * `0`: normal, `1`: deleted, `2`: deleting
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Tag list
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.IpWhiteListCount = 'IpWhiteListCount' in params ? params.IpWhiteListCount : null;
        this.ForwardCosBucket = 'ForwardCosBucket' in params ? params.ForwardCosBucket : null;
        this.ForwardStatus = 'ForwardStatus' in params ? params.ForwardStatus : null;
        this.ForwardInterval = 'ForwardInterval' in params ? params.ForwardInterval : null;

        if (params.Config) {
            let obj = new Config();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.RetentionTimeConfig) {
            let obj = new TopicRetentionTimeConfigRsp();
            obj.deserialize(params.RetentionTimeConfig)
            this.RetentionTimeConfig = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;

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
 * DeleteAcl request structure.
 * @class
 */
class DeleteAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID information
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ACL resource type (`2`: TOPIC, `3`: GROUP, `4`: CLUSTER).
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * Resource name, which is related to `resourceType`. For example, if `resourceType` is `TOPIC`, this field indicates the topic name; if `resourceType` is `GROUP`, this field indicates the group name; if `resourceType` is `CLUSTER`, this field can be left empty.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * ACL operation type (`2`: ALL, `3`: READ, `4`: WRITE, `5`: CREATE, `6`: DELETE, `7`: ALTER, `8`: DESCRIBE, `9`: CLUSTER_ACTION, `10`: DESCRIBE_CONFIGS, `11`: ALTER_CONFIGS, `12`: IDEMPOTENT_WRITE).
         * @type {number || null}
         */
        this.Operation = null;

        /**
         * Permission type (`2`: DENY, `3`: ALLOW). CKafka currently supports `ALLOW`, which is equivalent to allowlist. `DENY` will be supported for ACLs compatible with open-source Kafka.
         * @type {number || null}
         */
        this.PermissionType = null;

        /**
         * The default value is `*`, which means that any host can access. Currently, CKafka does not support the host as `*`, but the future product based on the open-source Kafka will directly support this
         * @type {string || null}
         */
        this.Host = null;

        /**
         * User list. The default value is `*`, which means that any user can access. The current user can only be one included in the user list
         * @type {string || null}
         */
        this.Principal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Principal = 'Principal' in params ? params.Principal : null;

    }
}

/**
 * CreateInstancePost response structure.
 * @class
 */
class CreateInstancePostResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Consumer information
 * @class
 */
class GroupInfoMember extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID generated for consumer in consumer group by coordinator
         * @type {string || null}
         */
        this.MemberId = null;

        /**
         * `client.id` information by the client consumer SDK
         * @type {string || null}
         */
        this.ClientId = null;

        /**
         * Generally stores client IP address
         * @type {string || null}
         */
        this.ClientHost = null;

        /**
         * Stores the information of partition assigned to this consumer
         * @type {Assignment || null}
         */
        this.Assignment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.ClientHost = 'ClientHost' in params ? params.ClientHost : null;

        if (params.Assignment) {
            let obj = new Assignment();
            obj.deserialize(params.Assignment)
            this.Assignment = obj;
        }

    }
}

/**
 * BatchCreateAcl request structure.
 * @class
 */
class BatchCreateAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ACL resource type. Default value: `2` (topic).
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * Resource list array.
         * @type {Array.<string> || null}
         */
        this.ResourceNames = null;

        /**
         * ACL rule list.
         * @type {Array.<AclRuleInfo> || null}
         */
        this.RuleList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceNames = 'ResourceNames' in params ? params.ResourceNames : null;

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new AclRuleInfo();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }

    }
}

/**
 * DeleteUser request structure.
 * @class
 */
class DeleteUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Username
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * Partition and offset
 * @class
 */
class PartitionOffset extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition, such as "0" or "1"
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * Offset, such as 100
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeACL request structure.
 * @class
 */
class DescribeACLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ACL resource type (`2`: TOPIC, `3`: GROUP, `4`: CLUSTER).
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * Resource name, which is related to `resourceType`. For example, if `resourceType` is `TOPIC`, this field indicates the topic name; if `resourceType` is `GROUP`, this field indicates the group name; if `resourceType` is `CLUSTER`, this field can be left empty.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Offset position
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Keyword match
         * @type {string || null}
         */
        this.SearchWord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * Results of the batch modified topic attributes
 * @class
 */
class BatchModifyTopicResultDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Status code.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReturnCode = null;

        /**
         * Message status.
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DescribeTopicAttributes request structure.
 * @class
 */
class DescribeTopicAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribeInstanceAttributes request structure.
 * @class
 */
class DescribeInstanceAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * User group entity
 * @class
 */
class ConsumerGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group name
         * @type {string || null}
         */
        this.ConsumerGroupName = null;

        /**
         * Subscribed message entity
         * @type {Array.<SubscribedInfo> || null}
         */
        this.SubscribedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerGroupName = 'ConsumerGroupName' in params ? params.ConsumerGroupName : null;

        if (params.SubscribedInfo) {
            this.SubscribedInfo = new Array();
            for (let z in params.SubscribedInfo) {
                let obj = new SubscribedInfo();
                obj.deserialize(params.SubscribedInfo[z]);
                this.SubscribedInfo.push(obj);
            }
        }

    }
}

/**
 * Stores the information of partition assigned to this consumer
 * @class
 */
class Assignment extends  AbstractModel {
    constructor(){
        super();

        /**
         * Assignment version information
         * @type {number || null}
         */
        this.Version = null;

        /**
         * Topic information list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GroupInfoTopics> || null}
         */
        this.Topics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new GroupInfoTopics();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }

    }
}

/**
 * DescribeConsumerGroup response structure.
 * @class
 */
class DescribeConsumerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned consumer group information
         * @type {ConsumerGroupResponse || null}
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

        if (params.Result) {
            let obj = new ConsumerGroupResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Prices of different purchased items
 * @class
 */
class InquiryDetailPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price of additional private network bandwidth
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InquiryBasePrice || null}
         */
        this.BandwidthPrice = null;

        /**
         * Disk price
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InquiryBasePrice || null}
         */
        this.DiskPrice = null;

        /**
         * Price of additional partitions
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InquiryBasePrice || null}
         */
        this.PartitionPrice = null;

        /**
         * Price of additional topics
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InquiryBasePrice || null}
         */
        this.TopicPrice = null;

        /**
         * Instance package price
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InquiryBasePrice || null}
         */
        this.InstanceTypePrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BandwidthPrice) {
            let obj = new InquiryBasePrice();
            obj.deserialize(params.BandwidthPrice)
            this.BandwidthPrice = obj;
        }

        if (params.DiskPrice) {
            let obj = new InquiryBasePrice();
            obj.deserialize(params.DiskPrice)
            this.DiskPrice = obj;
        }

        if (params.PartitionPrice) {
            let obj = new InquiryBasePrice();
            obj.deserialize(params.PartitionPrice)
            this.PartitionPrice = obj;
        }

        if (params.TopicPrice) {
            let obj = new InquiryBasePrice();
            obj.deserialize(params.TopicPrice)
            this.TopicPrice = obj;
        }

        if (params.InstanceTypePrice) {
            let obj = new InquiryBasePrice();
            obj.deserialize(params.InstanceTypePrice)
            this.InstanceTypePrice = obj;
        }

    }
}

/**
 * Values returned by the `InquireCkafkaPrice` API
 * @class
 */
class InquireCkafkaPriceResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance price
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InquiryPrice || null}
         */
        this.InstancePrice = null;

        /**
         * Public network bandwidth price
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InquiryPrice || null}
         */
        this.PublicNetworkBandwidthPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstancePrice) {
            let obj = new InquiryPrice();
            obj.deserialize(params.InstancePrice)
            this.InstancePrice = obj;
        }

        if (params.PublicNetworkBandwidthPrice) {
            let obj = new InquiryPrice();
            obj.deserialize(params.PublicNetworkBandwidthPrice)
            this.PublicNetworkBandwidthPrice = obj;
        }

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
         * CKafka instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * CKafka topic name
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribeInstances response structure.
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {InstanceResponse || null}
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

        if (params.Result) {
            let obj = new InstanceResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FetchMessageByOffset response structure.
 * @class
 */
class FetchMessageByOffsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned results
         * @type {ConsumerRecord || null}
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

        if (params.Result) {
            let obj = new ConsumerRecord();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchModifyTopicAttributes response structure.
 * @class
 */
class BatchModifyTopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result.
         * @type {Array.<BatchModifyTopicResultDTO> || null}
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new BatchModifyTopicResultDTO();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Response structure of creating a prepaid instance
 * @class
 */
class CreateInstancePreResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned code. 0: Normal; other values: Error.
         * @type {string || null}
         */
        this.ReturnCode = null;

        /**
         * The message indicating whether the operation is successful.
         * @type {string || null}
         */
        this.ReturnMessage = null;

        /**
         * Data returned by the operation.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {CreateInstancePreData || null}
         */
        this.Data = null;

        /**
         * Deletion time.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeleteRouteTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMessage = 'ReturnMessage' in params ? params.ReturnMessage : null;

        if (params.Data) {
            let obj = new CreateInstancePreData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.DeleteRouteTimestamp = 'DeleteRouteTimestamp' in params ? params.DeleteRouteTimestamp : null;

    }
}

/**
 * Internal topic object of `GroupInfo`
 * @class
 */
class GroupInfoTopics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of assigned topics
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Information of assigned partition
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;

    }
}

/**
 * FetchMessageListByOffset request structure.
 * @class
 */
class FetchMessageListByOffsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Partition ID
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * Offset information
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The maximum number of messages that can be queried. Default value: 20. Maximum value: 20.
         * @type {number || null}
         */
        this.SinglePartitionRecordNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SinglePartitionRecordNumber = 'SinglePartitionRecordNumber' in params ? params.SinglePartitionRecordNumber : null;

    }
}

/**
 * Region entity object
 * @class
 */
class Region extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Area name
         * @type {string || null}
         */
        this.AreaName = null;

        /**
         * Region code
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionCode = null;

        /**
         * Region code (v3)
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionCodeV3 = null;

        /**
         * NONE: no special models are supported by default.\nCVM: the CVM type is supported.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Support = null;

        /**
         * Whether IPv6 is supported. `0` indicates no, and `1` indicates yes.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Ipv6 = null;

        /**
         * Whether cross-AZ clusters are supported.`0` indicates no, and `1` indicates yes.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MultiZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.AreaName = 'AreaName' in params ? params.AreaName : null;
        this.RegionCode = 'RegionCode' in params ? params.RegionCode : null;
        this.RegionCodeV3 = 'RegionCodeV3' in params ? params.RegionCodeV3 : null;
        this.Support = 'Support' in params ? params.Support : null;
        this.Ipv6 = 'Ipv6' in params ? params.Ipv6 : null;
        this.MultiZone = 'MultiZone' in params ? params.MultiZone : null;

    }
}

/**
 * ModifyInstancePre request structure.
 * @class
 */
class ModifyInstancePreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Estimated disk capacity, which can be increased by increment.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Estimated bandwidth, which can be increased by increment.
         * @type {number || null}
         */
        this.BandWidth = null;

        /**
         * Estimated partition count, which can be increased by increment.
         * @type {number || null}
         */
        this.Partition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.BandWidth = 'BandWidth' in params ? params.BandWidth : null;
        this.Partition = 'Partition' in params ? params.Partition : null;

    }
}

/**
 * DescribeInstancesDetail response structure.
 * @class
 */
class DescribeInstancesDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result object of instance details
         * @type {InstanceDetailResponse || null}
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

        if (params.Result) {
            let obj = new InstanceDetailResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Data returned by the `CreateInstancePre` API.
 * @class
 */
class CreateInstancePreData extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value returned by `CreateInstancePre` is 0, which is fixed and cannot be used as the query condition of `CheckTaskStatus`. It is only used to ensure the consistency with the backend data structure.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Order number list.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * Instance ID.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Output parameters of ACL rule list APIs
 * @class
 */
class AclRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * ACL rule name.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Instance ID.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Matching type. Currently, only prefix match is supported. Enumerated value list: PREFIXED
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PatternType = null;

        /**
         * Prefix value for prefix match.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Pattern = null;

        /**
         * ACL resource type. Only “Topic” is supported. Enumerated value list: Topic.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * ACL information contained in the rule.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AclList = null;

        /**
         * Creation time of the rule.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTimeStamp = null;

        /**
         * A parameter used to specify whether the preset ACL rule is applied to new topics.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsApplied = null;

        /**
         * Rule update time.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTimeStamp = null;

        /**
         * Remarks of the rule.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * One of the corresponding topic names that is displayed.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * The number of topics that apply this ACL rule.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TopicCount = null;

        /**
         * Name of rule type.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PatternTypeTitle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PatternType = 'PatternType' in params ? params.PatternType : null;
        this.Pattern = 'Pattern' in params ? params.Pattern : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.AclList = 'AclList' in params ? params.AclList : null;
        this.CreateTimeStamp = 'CreateTimeStamp' in params ? params.CreateTimeStamp : null;
        this.IsApplied = 'IsApplied' in params ? params.IsApplied : null;
        this.UpdateTimeStamp = 'UpdateTimeStamp' in params ? params.UpdateTimeStamp : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicCount = 'TopicCount' in params ? params.TopicCount : null;
        this.PatternTypeTitle = 'PatternTypeTitle' in params ? params.PatternTypeTitle : null;

    }
}

/**
 * DescribeACL response structure.
 * @class
 */
class DescribeACLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned ACL result set object
         * @type {AclResponse || null}
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

        if (params.Result) {
            let obj = new AclResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Dynamic disk expansion configuration
 * @class
 */
class DynamicDiskConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable dynamic disk expansion configuration. `0`: disable, `1`: enable.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Percentage of dynamic disk expansion each time.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepForwardPercentage = null;

        /**
         * Disk quota threshold (in percentage) for triggering the automatic disk expansion event.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskQuotaPercentage = null;

        /**
         * Max disk space in GB.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxDiskSpace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.StepForwardPercentage = 'StepForwardPercentage' in params ? params.StepForwardPercentage : null;
        this.DiskQuotaPercentage = 'DiskQuotaPercentage' in params ? params.DiskQuotaPercentage : null;
        this.MaxDiskSpace = 'MaxDiskSpace' in params ? params.MaxDiskSpace : null;

    }
}

/**
 * InquireCkafkaPrice request structure.
 * @class
 */
class InquireCkafkaPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `standard`: Standard Edition; `profession`: Pro Edition
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Billing mode for instance purchase/renewal. If this parameter is left empty when you purchase an instance, the fees for one month under the monthly subscription mode will be displayed by default.
         * @type {InstanceChargeParam || null}
         */
        this.InstanceChargeParam = null;

        /**
         * The number of instances to be purchased or renewed. If this parameter is left empty, the default value is `1`.
         * @type {number || null}
         */
        this.InstanceNum = null;

        /**
         * Private network bandwidth in MB/sec, which is required when you purchase an instance.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Disk type and size, which is required when you purchase an instance.
         * @type {InquiryDiskParam || null}
         */
        this.InquiryDiskParam = null;

        /**
         * Message retention period in hours, which is required when you purchase an instance.
         * @type {number || null}
         */
        this.MessageRetention = null;

        /**
         * The number of instance topics to be purchased, which is required when you purchase an instance.
         * @type {number || null}
         */
        this.Topic = null;

        /**
         * The number of instance partitions to be purchased, which is required when you purchase an instance.
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * The region for instance purchase, which can be obtained via the `DescribeCkafkaZone` API.
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

        /**
         * Operation type flag. `purchase`: Making new purchases; `renew`: Renewing an instance. The default value is `purchase` if this parameter is left empty.
         * @type {string || null}
         */
        this.CategoryAction = null;

        /**
         * This field is not required.
         * @type {string || null}
         */
        this.BillType = null;

        /**
         * Billing mode for public network bandwidth, which is required when you purchase public network bandwidth. Currently, public network bandwidth is only supported for Pro Edition.
         * @type {InquiryPublicNetworkParam || null}
         */
        this.PublicNetworkParam = null;

        /**
         * ID of the instance to be renewed, which is required when you renew an instance.
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.InstanceChargeParam) {
            let obj = new InstanceChargeParam();
            obj.deserialize(params.InstanceChargeParam)
            this.InstanceChargeParam = obj;
        }
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

        if (params.InquiryDiskParam) {
            let obj = new InquiryDiskParam();
            obj.deserialize(params.InquiryDiskParam)
            this.InquiryDiskParam = obj;
        }
        this.MessageRetention = 'MessageRetention' in params ? params.MessageRetention : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.CategoryAction = 'CategoryAction' in params ? params.CategoryAction : null;
        this.BillType = 'BillType' in params ? params.BillType : null;

        if (params.PublicNetworkParam) {
            let obj = new InquiryPublicNetworkParam();
            obj.deserialize(params.PublicNetworkParam)
            this.PublicNetworkParam = obj;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Zone information entity
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Whether it is an internal application.
         * @type {number || null}
         */
        this.IsInternalApp = null;

        /**
         * Application ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Flag
         * @type {boolean || null}
         */
        this.Flag = null;

        /**
         * Zone name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Zone status
         * @type {number || null}
         */
        this.ZoneStatus = null;

        /**
         * Extra flag
         * @type {string || null}
         */
        this.Exflag = null;

        /**
         * JSON object. The key is the model. The value `true` means “sold out”, and `false` means “not sold out”.
         * @type {string || null}
         */
        this.SoldOut = null;

        /**
         * Information on whether Standard Edition has been sold out.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<SaleInfo> || null}
         */
        this.SalesInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.IsInternalApp = 'IsInternalApp' in params ? params.IsInternalApp : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneStatus = 'ZoneStatus' in params ? params.ZoneStatus : null;
        this.Exflag = 'Exflag' in params ? params.Exflag : null;
        this.SoldOut = 'SoldOut' in params ? params.SoldOut : null;

        if (params.SalesInfo) {
            this.SalesInfo = new Array();
            for (let z in params.SalesInfo) {
                let obj = new SaleInfo();
                obj.deserialize(params.SalesInfo[z]);
                this.SalesInfo.push(obj);
            }
        }

    }
}

/**
 * DescribeTopicSubscribeGroup response structure.
 * @class
 */
class DescribeTopicSubscribeGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned results
         * @type {TopicSubscribeGroup || null}
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

        if (params.Result) {
            let obj = new TopicSubscribeGroup();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCkafkaZone request structure.
 * @class
 */
class DescribeCkafkaZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud Dedicated Cluster (CDC) business parameter.
         * @type {string || null}
         */
        this.CdcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CdcId = 'CdcId' in params ? params.CdcId : null;

    }
}

/**
 * Sales information of Standard Edition
 * @class
 */
class SaleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Manually set flag.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Flag = null;

        /**
         * CKafka version (v1.1.1/2.4.2/0.10.2）
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Whether it is Pro Edition or Standard Edition.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Whether it has been sold out. `true`: sold out.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.SoldOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.SoldOut = 'SoldOut' in params ? params.SoldOut : null;

    }
}

/**
 * Returned topic object
 * @class
 */
class Topic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Note = null;

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
        this.Note = 'Note' in params ? params.Note : null;

    }
}

/**
 * Tag object in instance details
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
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
 * BatchModifyGroupOffsets response structure.
 * @class
 */
class BatchModifyGroupOffsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result.
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `DescribeGroup` response
 * @class
 */
class GroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Count
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * GroupList
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DescribeGroup> || null}
         */
        this.GroupList = null;

        /**
         * Consumer group quota
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.GroupCountQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new DescribeGroup();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.GroupCountQuota = 'GroupCountQuota' in params ? params.GroupCountQuota : null;

    }
}

/**
 * Instance billing parameters
 * @class
 */
class InstanceChargeParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance billing mode (`PREPAID`: Monthly subscription; `POSTPAID_BY_HOUR`: Pay-as-you-go)
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Validity period, which is only required for the monthly subscription billing mode
         * @type {number || null}
         */
        this.InstanceChargePeriod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.InstanceChargePeriod = 'InstanceChargePeriod' in params ? params.InstanceChargePeriod : null;

    }
}

/**
 * DescribeDatahubTopic response structure.
 * @class
 */
class DescribeDatahubTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result object
         * @type {DescribeDatahubTopicResp || null}
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

        if (params.Result) {
            let obj = new DescribeDatahubTopicResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTopicAttributes response structure.
 * @class
 */
class DescribeTopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result object
         * @type {TopicAttributesResponse || null}
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

        if (params.Result) {
            let obj = new TopicAttributesResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FetchMessageListByOffset response structure.
 * @class
 */
class FetchMessageListByOffsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result. Note: The returned list does not display the message content (key and value). To query the message content, call the `FetchMessageByOffset` API.
         * @type {Array.<ConsumerRecord> || null}
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new ConsumerRecord();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateConsumer response structure.
 * @class
 */
class CreateConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Description of the created consumer group.
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Returned object for route information
 * @class
 */
class RouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route information list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Route> || null}
         */
        this.Routers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Routers) {
            this.Routers = new Array();
            for (let z in params.Routers) {
                let obj = new Route();
                obj.deserialize(params.Routers[z]);
                this.Routers.push(obj);
            }
        }

    }
}

/**
 * DescribeGroup response structure.
 * @class
 */
class DescribeGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of returned results
         * @type {GroupResponse || null}
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

        if (params.Result) {
            let obj = new GroupResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Configuration object for modifying instance attributes
 * @class
 */
class ModifyInstanceAttributesConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Automatic creation. true: enabled, false: not enabled
         * @type {boolean || null}
         */
        this.AutoCreateTopicEnable = null;

        /**
         * Optional. If `auto.create.topic.enable` is set to `true` and this value is not set, 3 will be used by default
         * @type {number || null}
         */
        this.DefaultNumPartitions = null;

        /**
         * If `auto.create.topic.enable` is set to `true` but this value is not set, 2 will be used by default
         * @type {number || null}
         */
        this.DefaultReplicationFactor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoCreateTopicEnable = 'AutoCreateTopicEnable' in params ? params.AutoCreateTopicEnable : null;
        this.DefaultNumPartitions = 'DefaultNumPartitions' in params ? params.DefaultNumPartitions : null;
        this.DefaultReplicationFactor = 'DefaultReplicationFactor' in params ? params.DefaultReplicationFactor : null;

    }
}

/**
 * Data structure returned by operation
 * @class
 */
class OperateResponseData extends  AbstractModel {
    constructor(){
        super();

        /**
         * FlowId11
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * CreateUser response structure.
 * @class
 */
class CreateUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceAttributes response structure.
 * @class
 */
class ModifyInstanceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePartition response structure.
 * @class
 */
class CreatePartitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result set
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `DescribeTopicSubscribeGroup` output parameters
 * @class
 */
class TopicSubscribeGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Number of consumer group status
         * @type {string || null}
         */
        this.StatusCountInfo = null;

        /**
         * Consumer group information
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<GroupInfoResponse> || null}
         */
        this.GroupsInfo = null;

        /**
         * Whether a request is asynchronous. If there are fewer consumer groups in the instances, the result will be returned directly, and status code is 1. When there are many consumer groups in the instances, cache will be updated asynchronously. When status code is 0, grouping information will not be returned until cache update is completed and status code becomes 1.
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.StatusCountInfo = 'StatusCountInfo' in params ? params.StatusCountInfo : null;

        if (params.GroupsInfo) {
            this.GroupsInfo = new Array();
            for (let z in params.GroupsInfo) {
                let obj = new GroupInfoResponse();
                obj.deserialize(params.GroupsInfo[z]);
                this.GroupsInfo.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Cluster information entity
 * @class
 */
class ClusterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {number || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * The cluster’s maximum disk capacity in GB
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxDiskSize = null;

        /**
         * The cluster’s maximum bandwidth in MB/s
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxBandWidth = null;

        /**
         * The cluster’s available disk capacity in GB
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AvailableDiskSize = null;

        /**
         * The cluster’s available bandwidth in MB/s
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AvailableBandWidth = null;

        /**
         * The AZ where the cluster resides
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * The AZ where the cluster nodes reside. If the cluster is a multi-AZ cluster, this field means multiple AZs where the cluster nodes reside.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

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
        this.MaxDiskSize = 'MaxDiskSize' in params ? params.MaxDiskSize : null;
        this.MaxBandWidth = 'MaxBandWidth' in params ? params.MaxBandWidth : null;
        this.AvailableDiskSize = 'AvailableDiskSize' in params ? params.AvailableDiskSize : null;
        this.AvailableBandWidth = 'AvailableBandWidth' in params ? params.AvailableBandWidth : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

    }
}

/**
 * DeleteUser response structure.
 * @class
 */
class DeleteUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTopicProduceConnection request structure.
 * @class
 */
class DescribeTopicProduceConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * CreateAcl request structure.
 * @class
 */
class CreateAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID information
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ACL resource type (`2`: TOPIC, `3`: GROUP, `4`: CLUSTER).
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * ACL operation type (`2`: ALL, `3`: READ, `4`: WRITE, `5`: CREATE, `6`: DELETE, `7`: ALTER, `8`: DESCRIBE, `9`: CLUSTER_ACTION, `10`: DESCRIBE_CONFIGS, `11`: ALTER_CONFIGS, `12`: IDEMPOTENT_WRITE).
         * @type {number || null}
         */
        this.Operation = null;

        /**
         * Permission type (`2`: DENY, `3`: ALLOW). CKafka currently supports `ALLOW`, which is equivalent to allowlist. `DENY` will be supported for ACLs compatible with open-source Kafka.
         * @type {number || null}
         */
        this.PermissionType = null;

        /**
         * Resource name, which is related to `resourceType`. For example, if `resourceType` is `TOPIC`, this field indicates the topic name; if `resourceType` is `GROUP`, this field indicates the group name; if `resourceType` is `CLUSTER`, this field can be left empty.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * The default value is `*`, which means that any host can access. Currently, CKafka does not support the host as `*`, but the future product based on the open-source Kafka will directly support this
         * @type {string || null}
         */
        this.Host = null;

        /**
         * The list of users allowed to access the topic. Default: User:*, meaning all users. The current user must be in the user list. Add `User:` before the user name (`User:A` for example).
         * @type {string || null}
         */
        this.Principal = null;

        /**
         * The resource name list, which is in JSON string format. Either `ResourceName` or `resourceNameList` can be specified.
         * @type {string || null}
         */
        this.ResourceNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Principal = 'Principal' in params ? params.Principal : null;
        this.ResourceNameList = 'ResourceNameList' in params ? params.ResourceNameList : null;

    }
}

/**
 * DescribeTopicSyncReplica response structure.
 * @class
 */
class DescribeTopicSyncReplicaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returns topic replica details
         * @type {TopicInSyncReplicaResult || null}
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

        if (params.Result) {
            let obj = new TopicInSyncReplicaResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAppInfo request structure.
 * @class
 */
class DescribeAppInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset position
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of users to be queried in this request. Maximum value: 50. Default value: 50
         * @type {number || null}
         */
        this.Limit = null;

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

    }
}

/**
 * DeleteRoute response structure.
 * @class
 */
class DeleteRouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result.
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Partition information
 * @class
 */
class Partitions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition.
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * Partition consumption offset.
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
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeTopic response structure.
 * @class
 */
class DescribeTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TopicResult || null}
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

        if (params.Result) {
            let obj = new TopicResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Returned consumer group result entity
 * @class
 */
class ConsumerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible consumer groups
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Topic list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ConsumerGroupTopic> || null}
         */
        this.TopicList = null;

        /**
         * Consumer group list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ConsumerGroup> || null}
         */
        this.GroupList = null;

        /**
         * Total number of partitions
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalPartition = null;

        /**
         * List of monitored partitions
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Partition> || null}
         */
        this.PartitionListForMonitor = null;

        /**
         * Total number of topics
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalTopic = null;

        /**
         * List of monitored topics
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ConsumerGroupTopic> || null}
         */
        this.TopicListForMonitor = null;

        /**
         * List of monitored groups
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Group> || null}
         */
        this.GroupListForMonitor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new ConsumerGroupTopic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new ConsumerGroup();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.TotalPartition = 'TotalPartition' in params ? params.TotalPartition : null;

        if (params.PartitionListForMonitor) {
            this.PartitionListForMonitor = new Array();
            for (let z in params.PartitionListForMonitor) {
                let obj = new Partition();
                obj.deserialize(params.PartitionListForMonitor[z]);
                this.PartitionListForMonitor.push(obj);
            }
        }
        this.TotalTopic = 'TotalTopic' in params ? params.TotalTopic : null;

        if (params.TopicListForMonitor) {
            this.TopicListForMonitor = new Array();
            for (let z in params.TopicListForMonitor) {
                let obj = new ConsumerGroupTopic();
                obj.deserialize(params.TopicListForMonitor[z]);
                this.TopicListForMonitor.push(obj);
            }
        }

        if (params.GroupListForMonitor) {
            this.GroupListForMonitor = new Array();
            for (let z in params.GroupListForMonitor) {
                let obj = new Group();
                obj.deserialize(params.GroupListForMonitor[z]);
                this.GroupListForMonitor.push(obj);
            }
        }

    }
}

/**
 * CreateTopicIpWhiteList response structure.
 * @class
 */
class CreateTopicIpWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result of deleting topic IP allowlist
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Consumer group topic object
 * @class
 */
class GroupOffsetTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Array of partitions in the topic, where each element is a JSON object
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GroupOffsetPartition> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new GroupOffsetPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }

    }
}

/**
 * ModifyGroupOffsets response structure.
 * @class
 */
class ModifyGroupOffsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Topic connection information
 * @class
 */
class DescribeConnectInfoResultDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IpAddr = null;

        /**
         * Connection time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Whether it is a supported version
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsUnSupportVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IpAddr = 'IpAddr' in params ? params.IpAddr : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.IsUnSupportVersion = 'IsUnSupportVersion' in params ? params.IsUnSupportVersion : null;

    }
}

/**
 * Partition entity
 * @class
 */
class Partition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition ID
         * @type {number || null}
         */
        this.PartitionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;

    }
}

/**
 * CreateAcl response structure.
 * @class
 */
class CreateAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name, which is a string of up to 128 characters. It can contain letters, digits, and hyphens (-) and must start with a letter.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Number of partitions, which should be greater than 0
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * Number of replicas, which cannot be higher than the number of brokers. Maximum value: 3
         * @type {number || null}
         */
        this.ReplicaNum = null;

        /**
         * IP allowlist switch. 1: enabled, 0: disabled. Default value: 0
         * @type {number || null}
         */
        this.EnableWhiteList = null;

        /**
         * IP allowlist list for quota limit, which is required if `enableWhileList` is 1
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

        /**
         * Log cleanup policy, which is `delete` by default. `delete`: logs will be deleted by save time; `compact`: logs will be compressed by key; `compact, delete`: logs will be compressed by key and deleted by save time.
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

        /**
         * Topic remarks string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`)
         * @type {string || null}
         */
        this.Note = null;

        /**
         * Default value: 1
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * Whether to allow an unsynced replica to be elected as leader. false: no, true: yes. Default value: false
         * @type {number || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * Message retention period in milliseconds, which is optional. Min value: 60,000 ms.
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * Segment rolling duration in ms. The current minimum value is 3,600,000 ms
         * @type {number || null}
         */
        this.SegmentMs = null;

        /**
         * Max message size in bytes. Value range: 1,024 bytes (1 KB) to 8,388,608 bytes (8 MB).
         * @type {number || null}
         */
        this.MaxMessageBytes = null;

        /**
         * Preset ACL rule. `1`: enable, `0`: disable. Default value: `0`.
         * @type {number || null}
         */
        this.EnableAclRule = null;

        /**
         * Name of the preset ACL rule.
         * @type {string || null}
         */
        this.AclRuleName = null;

        /**
         * Message retention file size in bytes, which is an optional parameter. Default value: -1. Currently, the min value that can be entered is 1,048,576 B.
         * @type {number || null}
         */
        this.RetentionBytes = null;

        /**
         * Tag list.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;
        this.MaxMessageBytes = 'MaxMessageBytes' in params ? params.MaxMessageBytes : null;
        this.EnableAclRule = 'EnableAclRule' in params ? params.EnableAclRule : null;
        this.AclRuleName = 'AclRuleName' in params ? params.AclRuleName : null;
        this.RetentionBytes = 'RetentionBytes' in params ? params.RetentionBytes : null;

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
 * DeleteAcl response structure.
 * @class
 */
class DeleteAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Dynamic message retention time configuration
 * @class
 */
class DynamicRetentionTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the dynamic message retention time configuration is enabled. 0: disabled; 1: enabled
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Disk quota threshold (in percentage) for triggering the message retention time change event
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskQuotaPercentage = null;

        /**
         * Percentage by which the message retention time is shortened each time
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StepForwardPercentage = null;

        /**
         * Minimum retention time, in minutes
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BottomRetention = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.DiskQuotaPercentage = 'DiskQuotaPercentage' in params ? params.DiskQuotaPercentage : null;
        this.StepForwardPercentage = 'StepForwardPercentage' in params ? params.StepForwardPercentage : null;
        this.BottomRetention = 'BottomRetention' in params ? params.BottomRetention : null;

    }
}

/**
 * DescribeTopicSubscribeGroup request structure.
 * @class
 */
class DescribeTopicSubscribeGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Starting position of paging
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results per page
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteInstancePre response structure.
 * @class
 */
class DeleteInstancePreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {CreateInstancePreResp || null}
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

        if (params.Result) {
            let obj = new CreateInstancePreResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FetchMessageByOffset request structure.
 * @class
 */
class FetchMessageByOffsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Partition ID
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * Offset information, which is required.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Public network bandwidth parameters
 * @class
 */
class InquiryPublicNetworkParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Public network bandwidth billing mode (`BANDWIDTH_PREPAID`: Monthly subscription; `BANDWIDTH_POSTPAID_BY_HOUR`: Bill-by-hour)
         * @type {string || null}
         */
        this.PublicNetworkChargeType = null;

        /**
         * Public network bandwidth in MB
         * @type {number || null}
         */
        this.PublicNetworkMonthly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublicNetworkChargeType = 'PublicNetworkChargeType' in params ? params.PublicNetworkChargeType : null;
        this.PublicNetworkMonthly = 'PublicNetworkMonthly' in params ? params.PublicNetworkMonthly : null;

    }
}

/**
 * Topic replica and details
 * @class
 */
class TopicInSyncReplicaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition name
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * Leader ID
         * @type {number || null}
         */
        this.Leader = null;

        /**
         * Replica set
         * @type {string || null}
         */
        this.Replica = null;

        /**
         * ISR
         * @type {string || null}
         */
        this.InSyncReplica = null;

        /**
         * Starting offset
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BeginOffset = null;

        /**
         * Ending offset
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndOffset = null;

        /**
         * Number of messages
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MessageCount = null;

        /**
         * Unsynced replica set
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OutOfSyncReplica = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Leader = 'Leader' in params ? params.Leader : null;
        this.Replica = 'Replica' in params ? params.Replica : null;
        this.InSyncReplica = 'InSyncReplica' in params ? params.InSyncReplica : null;
        this.BeginOffset = 'BeginOffset' in params ? params.BeginOffset : null;
        this.EndOffset = 'EndOffset' in params ? params.EndOffset : null;
        this.MessageCount = 'MessageCount' in params ? params.MessageCount : null;
        this.OutOfSyncReplica = 'OutOfSyncReplica' in params ? params.OutOfSyncReplica : null;

    }
}

/**
 * DescribeRegion request structure.
 * @class
 */
class DescribeRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The offset value
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The maximum number of results returned
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Business field, which can be ignored.
         * @type {string || null}
         */
        this.Business = null;

        /**
         * CDC business field, which can be ignored.
         * @type {string || null}
         */
        this.CdcId = null;

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
        this.Business = 'Business' in params ? params.Business : null;
        this.CdcId = 'CdcId' in params ? params.CdcId : null;

    }
}

/**
 * Instance configuration entity
 * @class
 */
class InstanceConfigDO extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to create topics automatically
         * @type {boolean || null}
         */
        this.AutoCreateTopicsEnable = null;

        /**
         * Number of partitions
         * @type {number || null}
         */
        this.DefaultNumPartitions = null;

        /**
         * Default replication factor
         * @type {number || null}
         */
        this.DefaultReplicationFactor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoCreateTopicsEnable = 'AutoCreateTopicsEnable' in params ? params.AutoCreateTopicsEnable : null;
        this.DefaultNumPartitions = 'DefaultNumPartitions' in params ? params.DefaultNumPartitions : null;
        this.DefaultReplicationFactor = 'DefaultReplicationFactor' in params ? params.DefaultReplicationFactor : null;

    }
}

/**
 * Returned user entity
 * @class
 */
class UserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of eligible users
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<User> || null}
         */
        this.Users = null;

        /**
         * Total number of eligible users
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new User();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeGroupInfo request structure.
 * @class
 */
class DescribeGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * (Filter) filter by instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kafka consumer group (`Consumer-group`), which is an array in the format of `GroupList.0=xxx&GroupList.1=yyy`.
         * @type {Array.<string> || null}
         */
        this.GroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupList = 'GroupList' in params ? params.GroupList : null;

    }
}

/**
 * DescribeGroupInfo response structure.
 * @class
 */
class DescribeGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GroupInfoResponse> || null}
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new GroupInfoResponse();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTopicAttributes response structure.
 * @class
 */
class ModifyTopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result set
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatahubTopics request structure.
 * @class
 */
class DescribeDatahubTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword for query
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * Query offset, which defaults to `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of results to be returned in this request. Default value: `50`. Maximum value: `50`.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteRouteTriggerTime response structure.
 * @class
 */
class DeleteRouteTriggerTimeResponse extends  AbstractModel {
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
 * DescribeUser response structure.
 * @class
 */
class DescribeUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result list
         * @type {UserResponse || null}
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

        if (params.Result) {
            let obj = new UserResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `AppId` query result
 * @class
 */
class AppIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible `AppId`
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of eligible `AppId`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.AppIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.AppIdList = 'AppIdList' in params ? params.AppIdList : null;

    }
}

/**
 * DescribeTopic request structure.
 * @class
 */
class DescribeTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Filter by `topicName`. Fuzzy search is supported
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * Offset. If this parameter is left empty, 0 will be used by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of results to be returned, which defaults to 20 if left empty. The maximum value is 50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Name of the preset ACL rule.
         * @type {string || null}
         */
        this.AclRuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.AclRuleName = 'AclRuleName' in params ? params.AclRuleName : null;

    }
}

/**
 * CreatePartition request structure.
 * @class
 */
class CreatePartitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Number of topic partitions
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;

    }
}

/**
 * Group entity
 * @class
 */
class Group extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group name
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * `GroupInfo` response data entity
 * @class
 */
class GroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code. 0: success
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * Group status description (common valid values: Empty, Stable, Dead):
Dead: the consumer group does not exist
Empty: there are currently no consumer subscriptions in the consumer group
PreparingRebalance: the consumer group is currently in `rebalance` state
CompletingRebalance: the consumer group is currently in `rebalance` state
Stable: each consumer in the consumer group has joined and is in stable state
         * @type {string || null}
         */
        this.State = null;

        /**
         * The type of protocol selected by the consumer group, which is `consumer` for common consumers. However, some systems use their own protocols; for example, the protocol used by kafka-connect is `connect`. Only with the standard `consumer` protocol can this API get to know the specific assigning method and parse the specific partition assignment
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * Consumer partition assignment algorithm, such as `range` (which is the default value for the Kafka consumer SDK), `roundrobin`, and `sticky`
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * This array contains information only if `state` is `Stable` and `protocol_type` is `consumer`
         * @type {Array.<GroupInfoMember> || null}
         */
        this.Members = null;

        /**
         * Kafka consumer group
         * @type {string || null}
         */
        this.Group = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.State = 'State' in params ? params.State : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.Members) {
            this.Members = new Array();
            for (let z in params.Members) {
                let obj = new GroupInfoMember();
                obj.deserialize(params.Members[z]);
                this.Members.push(obj);
            }
        }
        this.Group = 'Group' in params ? params.Group : null;

    }
}

/**
 * DescribeAppInfo response structure.
 * @class
 */
class DescribeAppInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned list of eligible `AppId`
         * @type {AppIdResponse || null}
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

        if (params.Result) {
            let obj = new AppIdResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Set of returned ACL results
 * @class
 */
class AclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible data entries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * ACL list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Acl> || null}
         */
        this.AclList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AclList) {
            this.AclList = new Array();
            for (let z in params.AclList) {
                let obj = new Acl();
                obj.deserialize(params.AclList[z]);
                this.AclList.push(obj);
            }
        }

    }
}

/**
 * The entity returned for the query of Kafka’s zone information
 * @class
 */
class ZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone list
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneList = null;

        /**
         * Maximum number of instances to be purchased
         * @type {number || null}
         */
        this.MaxBuyInstanceNum = null;

        /**
         * Maximum bandwidth in MB/S
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * Pay-as-you-go unit price
         * @type {Price || null}
         */
        this.UnitPrice = null;

        /**
         * Pay-as-you-go unit message price
         * @type {Price || null}
         */
        this.MessagePrice = null;

        /**
         * Cluster information dedicated to a user
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {Array.<ClusterInfo> || null}
         */
        this.ClusterInfo = null;

        /**
         * Purchase of Standard Edition configurations
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Standard = null;

        /**
         * Purchase of Standard S2 Edition configurations
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StandardS2 = null;

        /**
         * Purchase of Pro Edition configurations
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Profession = null;

        /**
         * Purchase of Physical Dedicated Edition configurations
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Physical = null;

        /**
         * Public network bandwidth.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicNetwork = null;

        /**
         * Public network bandwidth configuration.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicNetworkLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneList) {
            this.ZoneList = new Array();
            for (let z in params.ZoneList) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneList[z]);
                this.ZoneList.push(obj);
            }
        }
        this.MaxBuyInstanceNum = 'MaxBuyInstanceNum' in params ? params.MaxBuyInstanceNum : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;

        if (params.UnitPrice) {
            let obj = new Price();
            obj.deserialize(params.UnitPrice)
            this.UnitPrice = obj;
        }

        if (params.MessagePrice) {
            let obj = new Price();
            obj.deserialize(params.MessagePrice)
            this.MessagePrice = obj;
        }

        if (params.ClusterInfo) {
            this.ClusterInfo = new Array();
            for (let z in params.ClusterInfo) {
                let obj = new ClusterInfo();
                obj.deserialize(params.ClusterInfo[z]);
                this.ClusterInfo.push(obj);
            }
        }
        this.Standard = 'Standard' in params ? params.Standard : null;
        this.StandardS2 = 'StandardS2' in params ? params.StandardS2 : null;
        this.Profession = 'Profession' in params ? params.Profession : null;
        this.Physical = 'Physical' in params ? params.Physical : null;
        this.PublicNetwork = 'PublicNetwork' in params ? params.PublicNetwork : null;
        this.PublicNetworkLimit = 'PublicNetworkLimit' in params ? params.PublicNetworkLimit : null;

    }
}

/**
 * Instance object
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance status. 0: creating, 1: running, 2: deleting, 5: isolated, -1: creation failed
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Whether it is an open-source instance. true: yes, false: no
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IfCommunity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IfCommunity = 'IfCommunity' in params ? params.IfCommunity : null;

    }
}

/**
 * DescribeInstanceAttributes response structure.
 * @class
 */
class DescribeInstanceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result object of instance attributes
         * @type {InstanceAttributesResponse || null}
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

        if (params.Result) {
            let obj = new InstanceAttributesResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPassword response structure.
 * @class
 */
class ModifyPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Returned topic details entity
 * @class
 */
class TopicDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of returned topic details
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TopicDetail> || null}
         */
        this.TopicList = null;

        /**
         * Number of all eligible topic details
         * @type {number || null}
         */
        this.TotalCount = null;

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
                let obj = new TopicDetail();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DeleteInstancePre request structure.
 * @class
 */
class DeleteInstancePreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeDatahubTopic request structure.
 * @class
 */
class DescribeDatahubTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name
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
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * Advanced configuration object
 * @class
 */
class Config extends  AbstractModel {
    constructor(){
        super();

        /**
         * Message retention period
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Retention = null;

        /**
         * Minimum number of sync replications
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * Log cleanup mode. Default value: delete.
delete: logs will be deleted by save time; compact: logs will be compressed by key; compact, delete: logs will be compressed by key and deleted by save time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

        /**
         * Segment rolling duration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SegmentMs = null;

        /**
         * 0: false, 1: true.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * Number of bytes for segment rolling
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SegmentBytes = null;

        /**
         * Maximum number of message bytes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxMessageBytes = null;

        /**
         * Message retention file size.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RetentionBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Retention = 'Retention' in params ? params.Retention : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.SegmentBytes = 'SegmentBytes' in params ? params.SegmentBytes : null;
        this.MaxMessageBytes = 'MaxMessageBytes' in params ? params.MaxMessageBytes : null;
        this.RetentionBytes = 'RetentionBytes' in params ? params.RetentionBytes : null;

    }
}

/**
 * ModifyPassword request structure.
 * @class
 */
class ModifyPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Username
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Current user password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * New user password
         * @type {string || null}
         */
        this.PasswordNew = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.PasswordNew = 'PasswordNew' in params ? params.PasswordNew : null;

    }
}

/**
 * ModifyInstanceAttributes request structure.
 * @class
 */
class ModifyInstanceAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Maximum retention period in minutes for instance log, which can be up to 30 days. 0 indicates not to enable the log retention period policy
         * @type {number || null}
         */
        this.MsgRetentionTime = null;

        /**
         * Instance name string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance configuration
         * @type {ModifyInstanceAttributesConfig || null}
         */
        this.Config = null;

        /**
         * Dynamic message retention policy configuration
         * @type {DynamicRetentionTime || null}
         */
        this.DynamicRetentionConfig = null;

        /**
         * Modification of the rebalancing time after upgrade
         * @type {number || null}
         */
        this.RebalanceTime = null;

        /**
         * Public network bandwidth
         * @type {number || null}
         */
        this.PublicNetwork = null;

        /**
         * Dynamic disk expansion policy configuration.
         * @type {DynamicDiskConfig || null}
         */
        this.DynamicDiskConfig = null;

        /**
         * The size of a single message in bytes at the instance level.
         * @type {number || null}
         */
        this.MaxMessageByte = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MsgRetentionTime = 'MsgRetentionTime' in params ? params.MsgRetentionTime : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.Config) {
            let obj = new ModifyInstanceAttributesConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.DynamicRetentionConfig) {
            let obj = new DynamicRetentionTime();
            obj.deserialize(params.DynamicRetentionConfig)
            this.DynamicRetentionConfig = obj;
        }
        this.RebalanceTime = 'RebalanceTime' in params ? params.RebalanceTime : null;
        this.PublicNetwork = 'PublicNetwork' in params ? params.PublicNetwork : null;

        if (params.DynamicDiskConfig) {
            let obj = new DynamicDiskConfig();
            obj.deserialize(params.DynamicDiskConfig)
            this.DynamicDiskConfig = obj;
        }
        this.MaxMessageByte = 'MaxMessageByte' in params ? params.MaxMessageByte : null;

    }
}

/**
 * DescribeRegion response structure.
 * @class
 */
class DescribeRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the returned results of enumerated regions
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {Array.<Region> || null}
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new Region();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConsumerGroup request structure.
 * @class
 */
class DescribeConsumerGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CKafka instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Name of the group to be queried, which is optional.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Name of the corresponding topic in the group to be queried, which is optional. If this parameter is specified but `group` is not specified, this parameter will be ignored.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Number of results to be returned in this request
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset position
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Virtual IP entity
 * @class
 */
class VipEntity extends  AbstractModel {
    constructor(){
        super();

        /**
         * Virtual IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Virtual port
         * @type {string || null}
         */
        this.Vport = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * DescribeTopicProduceConnection response structure.
 * @class
 */
class DescribeTopicProduceConnectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result set of returned connection information
         * @type {Array.<DescribeConnectInfoResultDTO> || null}
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new DescribeConnectInfoResultDTO();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Consumer group topic object
 * @class
 */
class ConsumerGroupTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Topic name
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * User entity
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID
         * @type {number || null}
         */
        this.UserId = null;

        /**
         * Username
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last updated time
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Group offset partition object
 * @class
 */
class GroupOffsetPartition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic `partitionId`
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * Offset position submitted by consumer
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Metadata can be passed in for other purposes when the consumer submits messages. Currently, this parameter is usually an empty string
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * Error code
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * Latest offset of current partition
         * @type {number || null}
         */
        this.LogEndOffset = null;

        /**
         * Number of unconsumed messages
         * @type {number || null}
         */
        this.Lag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.LogEndOffset = 'LogEndOffset' in params ? params.LogEndOffset : null;
        this.Lag = 'Lag' in params ? params.Lag : null;

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
         * Returned result set
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRouteTriggerTime request structure.
 * @class
 */
class DeleteRouteTriggerTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Modification time.
         * @type {string || null}
         */
        this.DelayTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;

    }
}

/**
 * DescribeInstances request structure.
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * (Filter) filter by instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * (Filter) filter by instance name. Fuzzy search is supported
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * (Filter) instance status. 0: creating, 1: running, 2: deleting. If this parameter is left empty, all instances will be returned by default
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * Offset. If this parameter is left empty, 0 will be used by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Tag key value (this field has been deprecated).
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * VPC ID.
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * Returned result object of instance attributes
 * @class
 */
class InstanceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * VIP list information of access point
         * @type {Array.<VipEntity> || null}
         */
        this.VipList = null;

        /**
         * Virtual IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Virtual port
         * @type {string || null}
         */
        this.Vport = null;

        /**
         * Instance status. 0: creating, 1: running, 2: deleting
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance bandwidth in Mbps
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Instance storage capacity in GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * AZ
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * VPC ID. If this parameter is empty, it means the basic network
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID. If this parameter is empty, it means the basic network
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance health status. 1: healthy, 2: alarmed, 3: exceptional
         * @type {number || null}
         */
        this.Healthy = null;

        /**
         * Instance health information. Currently, the disk utilization is displayed with a maximum length of 256
         * @type {string || null}
         */
        this.HealthyMessage = null;

        /**
         * Creation time
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Message retention period in minutes
         * @type {number || null}
         */
        this.MsgRetentionTime = null;

        /**
         * Configuration for automatic topic creation. If this field is empty, it means that automatic creation is not enabled
         * @type {InstanceConfigDO || null}
         */
        this.Config = null;

        /**
         * Number of remaining creatable partitions
         * @type {number || null}
         */
        this.RemainderPartitions = null;

        /**
         * Number of remaining creatable topics
         * @type {number || null}
         */
        this.RemainderTopics = null;

        /**
         * Number of partitions already created
         * @type {number || null}
         */
        this.CreatedPartitions = null;

        /**
         * Number of topics already created
         * @type {number || null}
         */
        this.CreatedTopics = null;

        /**
         * Tag array
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Expiration time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * Cross-AZ
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

        /**
         * Kafka version information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Maximum number of groups
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxGroupNum = null;

        /**
         * Offering type. `0`: Standard Edition; `1`: Professional Edition
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Cvm = null;

        /**
         * Type.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Features supported by the instance. `FEATURE_SUBNET_ACL` indicates that the ACL policy supports setting subnets. 
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Features = null;

        /**
         * Dynamic message retention policy
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {DynamicRetentionTime || null}
         */
        this.RetentionTimeConfig = null;

        /**
         * Maximum number of connections
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxConnection = null;

        /**
         * Public network bandwidth
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PublicNetwork = null;

        /**
         * Time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeleteRouteTimestamp = null;

        /**
         * Number of remaining creatable partitions
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RemainingPartitions = null;

        /**
         * Number of remaining creatable topics
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RemainingTopics = null;

        /**
         * Dynamic disk expansion policy.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {DynamicDiskConfig || null}
         */
        this.DynamicDiskConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.VipList) {
            this.VipList = new Array();
            for (let z in params.VipList) {
                let obj = new VipEntity();
                obj.deserialize(params.VipList[z]);
                this.VipList.push(obj);
            }
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Healthy = 'Healthy' in params ? params.Healthy : null;
        this.HealthyMessage = 'HealthyMessage' in params ? params.HealthyMessage : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.MsgRetentionTime = 'MsgRetentionTime' in params ? params.MsgRetentionTime : null;

        if (params.Config) {
            let obj = new InstanceConfigDO();
            obj.deserialize(params.Config)
            this.Config = obj;
        }
        this.RemainderPartitions = 'RemainderPartitions' in params ? params.RemainderPartitions : null;
        this.RemainderTopics = 'RemainderTopics' in params ? params.RemainderTopics : null;
        this.CreatedPartitions = 'CreatedPartitions' in params ? params.CreatedPartitions : null;
        this.CreatedTopics = 'CreatedTopics' in params ? params.CreatedTopics : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.MaxGroupNum = 'MaxGroupNum' in params ? params.MaxGroupNum : null;
        this.Cvm = 'Cvm' in params ? params.Cvm : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Features = 'Features' in params ? params.Features : null;

        if (params.RetentionTimeConfig) {
            let obj = new DynamicRetentionTime();
            obj.deserialize(params.RetentionTimeConfig)
            this.RetentionTimeConfig = obj;
        }
        this.MaxConnection = 'MaxConnection' in params ? params.MaxConnection : null;
        this.PublicNetwork = 'PublicNetwork' in params ? params.PublicNetwork : null;
        this.DeleteRouteTimestamp = 'DeleteRouteTimestamp' in params ? params.DeleteRouteTimestamp : null;
        this.RemainingPartitions = 'RemainingPartitions' in params ? params.RemainingPartitions : null;
        this.RemainingTopics = 'RemainingTopics' in params ? params.RemainingTopics : null;

        if (params.DynamicDiskConfig) {
            let obj = new DynamicDiskConfig();
            obj.deserialize(params.DynamicDiskConfig)
            this.DynamicDiskConfig = obj;
        }

    }
}

/**
 * CreateInstancePost request structure.
 * @class
 */
class CreateInstancePostRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name, which is a string of up to 64 characters. It can contain letters, digits, and hyphens (-) and must start with a letter.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance bandwidth
         * @type {number || null}
         */
        this.BandWidth = null;

        /**
         * VPC ID. If this parameter is left empty, the classic network will be used by default.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID, which is required for a VPC but not for the classic network.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * The maximum retention period for instance logs in minutes. Default value: 1,440 minutes (1 day). Max value: 12960 minutes (90 days). This parameter is optional.
         * @type {number || null}
         */
        this.MsgRetentionTime = null;

        /**
         * AZ
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Cluster ID, which can be selected when you create an instance.
         * @type {number || null}
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
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.BandWidth = 'BandWidth' in params ? params.BandWidth : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.MsgRetentionTime = 'MsgRetentionTime' in params ? params.MsgRetentionTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeDatahubTopics response structure.
 * @class
 */
class DescribeDatahubTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DescribeDatahubTopicsResp || null}
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

        if (params.Result) {
            let obj = new DescribeDatahubTopicsResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGroup request structure.
 * @class
 */
class DescribeGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Search keyword
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of results to be returned
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Query filter
>Key-value pair filters for conditional filtering queries, such as filter ID, name, and status
> * If there are multiple `Filter`, the relationship among them is logical `AND`.
> * If there are multiple `Values` in the same `Filter`, the relationship among them is logical `OR`.
>

 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field to be filtered.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter value of field.
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
 * Returned result of consumer group offset
 * @class
 */
class GroupOffsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of eligible results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of partitions in the topic, where each element is a JSON object
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GroupOffsetTopic> || null}
         */
        this.TopicList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new GroupOffsetTopic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }

    }
}

/**
 * BatchCreateAcl response structure.
 * @class
 */
class BatchCreateAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status code.
         * @type {number || null}
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
 * ModifyInstancePre response structure.
 * @class
 */
class ModifyInstancePreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response structure of modifying the configurations of a prepaid instance.
         * @type {CreateInstancePreResp || null}
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

        if (params.Result) {
            let obj = new CreateInstancePreResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUser request structure.
 * @class
 */
class CreateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Username
         * @type {string || null}
         */
        this.Name = null;

        /**
         * User password
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * Returned result of instance details
 * @class
 */
class InstanceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of eligible instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of eligible instance details
         * @type {Array.<InstanceDetail> || null}
         */
        this.InstanceList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new InstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }

    }
}

/**
 * DeleteRoute request structure.
 * @class
 */
class DeleteRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Route ID.
         * @type {number || null}
         */
        this.RouteId = null;

        /**
         * AppId of the caller.
         * @type {number || null}
         */
        this.CallerAppid = null;

        /**
         * The time when a route was deleted.
         * @type {string || null}
         */
        this.DeleteRouteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.CallerAppid = 'CallerAppid' in params ? params.CallerAppid : null;
        this.DeleteRouteTime = 'DeleteRouteTime' in params ? params.DeleteRouteTime : null;

    }
}

/**
 * DeleteTopicIpWhiteList response structure.
 * @class
 */
class DeleteTopicIpWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result of deleting topic IP allowlist
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesDetail request structure.
 * @class
 */
class DescribeInstancesDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * (Filter) filter by instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Filter by instance name, instance ID, AZ, VPC ID, or subnet ID. Fuzzy query is supported.
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * (Filter) instance status. 0: creating, 1: running, 2: deleting. If this parameter is left empty, all instances will be returned by default
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * Offset. If this parameter is left empty, `0` will be used by default.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. If this parameter is left empty, `10` will be used by default. The maximum value is `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Tag key match.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Filter. Valid values of `filter.Name` include `Ip`, `VpcId`, `SubNetId`, `InstanceType`, and `InstanceId`. Up to 10 values can be passed for `filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * This parameter has been deprecated and replaced with `InstanceIdList`.
         * @type {string || null}
         */
        this.InstanceIds = null;

        /**
         * Filter by instance ID.
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

        /**
         * Filter instances by a set of tags
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

    }
}

/**
 * CreateConsumer request structure.
 * @class
 */
class CreateConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Topic name. You must specify the name of an existing topic for either `TopicName` or `TopicNameList`.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Topic name array.
         * @type {Array.<string> || null}
         */
        this.TopicNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicNameList = 'TopicNameList' in params ? params.TopicNameList : null;

    }
}

/**
 * InquireCkafkaPrice response structure.
 * @class
 */
class InquireCkafkaPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output parameters
         * @type {InquireCkafkaPriceResp || null}
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

        if (params.Result) {
            let obj = new InquireCkafkaPriceResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoute request structure.
 * @class
 */
class DescribeRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Disk purchase parameters
 * @class
 */
class InquiryDiskParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disk type. Valid values: `SSD` (SSD), `CLOUD_SSD` (SSD cloud disk), `CLOUD_PREMIUM` (Premium cloud disk), `CLOUD_BASIC` (Cloud disk).
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Size of the purchased disk in GB
         * @type {number || null}
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * Set of topic replicas and details
 * @class
 */
class TopicInSyncReplicaResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Set of topic details and replicas
         * @type {Array.<TopicInSyncReplicaInfo> || null}
         */
        this.TopicInSyncReplicaList = null;

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopicInSyncReplicaList) {
            this.TopicInSyncReplicaList = new Array();
            for (let z in params.TopicInSyncReplicaList) {
                let obj = new TopicInSyncReplicaInfo();
                obj.deserialize(params.TopicInSyncReplicaList[z]);
                this.TopicInSyncReplicaList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * SendMessage response structure.
 * @class
 */
class SendMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Message ID list.
         * @type {Array.<string> || null}
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
 * Response parameters for instance price query
 * @class
 */
class InquiryBasePrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original unit price
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * Discounted unit price
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscount = null;

        /**
         * Original price in total
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discounted price in total
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * Discount (%)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * Number of purchased items
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Currency for payment
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Dedicated disk response parameter
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Validity period
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Unit of the validity period (`m`: Month; `h`: Hour)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Purchase quantity
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
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
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.UnitPriceDiscount = 'UnitPriceDiscount' in params ? params.UnitPriceDiscount : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeCkafkaZone response structure.
 * @class
 */
class DescribeCkafkaZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned results for the query
         * @type {ZoneResponse || null}
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

        if (params.Result) {
            let obj = new ZoneResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchModifyGroupOffsets request structure.
 * @class
 */
class BatchModifyGroupOffsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Consumer group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Partition information.
         * @type {Array.<Partitions> || null}
         */
        this.Partitions = null;

        /**
         * Name of the specified topic. Default value: names of all topics.
         * @type {Array.<string> || null}
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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new Partitions();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * Returned topic attributes result entity
 * @class
 */
class TopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Creation time
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Topic remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Note = null;

        /**
         * Number of partitions
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * IP allowlist switch. 1: enabled, 0: disabled
         * @type {number || null}
         */
        this.EnableWhiteList = null;

        /**
         * IP allowlist list
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

        /**
         * Topic configuration array
         * @type {Config || null}
         */
        this.Config = null;

        /**
         * Partition details
         * @type {Array.<TopicPartitionDO> || null}
         */
        this.Partitions = null;

        /**
         * Switch of the preset ACL rule. `1`: enable, `0`: disable.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EnableAclRule = null;

        /**
         * Preset ACL rule list.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {Array.<AclRule> || null}
         */
        this.AclRuleList = null;

        /**
         * Traffic throttling policy in topic dimension.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {InstanceQuotaConfigResp || null}
         */
        this.QuotaConfig = null;

        /**
         * Number of replicas
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReplicaNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;

        if (params.Config) {
            let obj = new Config();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new TopicPartitionDO();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.EnableAclRule = 'EnableAclRule' in params ? params.EnableAclRule : null;

        if (params.AclRuleList) {
            this.AclRuleList = new Array();
            for (let z in params.AclRuleList) {
                let obj = new AclRule();
                obj.deserialize(params.AclRuleList[z]);
                this.AclRuleList.push(obj);
            }
        }

        if (params.QuotaConfig) {
            let obj = new InstanceQuotaConfigResp();
            obj.deserialize(params.QuotaConfig)
            this.QuotaConfig = obj;
        }
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;

    }
}

/**
 * Aggregated returned result of instance status
 * @class
 */
class InstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of eligible instances
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Instance> || null}
         */
        this.InstanceList = null;

        /**
         * Total number of eligible results
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new Instance();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DataHub topic
 * @class
 */
class DatahubTopicDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * The number of partitions
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * Expiration time
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Note = null;

        /**
         * Status (`1`: In use; `2`: Deleting)
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
        this.Name = 'Name' in params ? params.Name : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Returned result value of operation
 * @class
 */
class JgwOperateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned code. 0: normal, other values: error
         * @type {string || null}
         */
        this.ReturnCode = null;

        /**
         * Success message
         * @type {string || null}
         */
        this.ReturnMessage = null;

        /**
         * Data returned by an operation, which may contain `flowId`, etc.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OperateResponseData || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMessage = 'ReturnMessage' in params ? params.ReturnMessage : null;

        if (params.Data) {
            let obj = new OperateResponseData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

    }
}

/**
 * `DescribeGroup` response entity
 * @class
 */
class DescribeGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * groupId
         * @type {string || null}
         */
        this.Group = null;

        /**
         * Protocol used by the group.
         * @type {string || null}
         */
        this.Protocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Group = 'Group' in params ? params.Group : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * Partition details
 * @class
 */
class TopicPartitionDO extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition ID
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * Leader running status
         * @type {number || null}
         */
        this.LeaderStatus = null;

        /**
         * ISR quantity
         * @type {number || null}
         */
        this.IsrNum = null;

        /**
         * Number of replicas
         * @type {number || null}
         */
        this.ReplicaNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.LeaderStatus = 'LeaderStatus' in params ? params.LeaderStatus : null;
        this.IsrNum = 'IsrNum' in params ? params.IsrNum : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;

    }
}

/**
 * Return for topic creation
 * @class
 */
class CreateTopicResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * Topic parameters that can be modified in batches
 * @class
 */
class BatchModifyTopicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * The number of partitions.
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Note = null;

        /**
         * Number of replicas.
         * @type {number || null}
         */
        this.ReplicaNum = null;

        /**
         * Message deletion policy. Valid values: `delete`, `compact`.
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

        /**
         * The minimum number of replicas specified by `min.insync.replicas` when the producer sets `request.required.acks` to `-1`.
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * Whether to allow a non-ISR replica to be the leader.
         * @type {boolean || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * Message retention period in topic dimension in milliseconds. Value range: 1 minute to 90 days.
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * Message retention size in topic dimension. Value range: 1 MB - 1024 GB.
         * @type {number || null}
         */
        this.RetentionBytes = null;

        /**
         * Segment rolling duration in milliseconds. Value range: 1-90 days.
         * @type {number || null}
         */
        this.SegmentMs = null;

        /**
         * Message size per batch. Value range: 1 KB - 12 MB.
         * @type {number || null}
         */
        this.MaxMessageBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.RetentionBytes = 'RetentionBytes' in params ? params.RetentionBytes : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;
        this.MaxMessageBytes = 'MaxMessageBytes' in params ? params.MaxMessageBytes : null;

    }
}

/**
 * DescribeRoute response structure.
 * @class
 */
class DescribeRouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result set of route information
         * @type {RouteResponse || null}
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

        if (params.Result) {
            let obj = new RouteResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Message content that can be sent in batches
 * @class
 */
class BatchContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Message body that is sent.
         * @type {string || null}
         */
        this.Body = null;

        /**
         * Message sending key name.
         * @type {string || null}
         */
        this.Key = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Body = 'Body' in params ? params.Body : null;
        this.Key = 'Key' in params ? params.Key : null;

    }
}

/**
 * Response parameters for instance price query
 * @class
 */
class InquiryPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original unit price
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * Discounted unit price
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscount = null;

        /**
         * Original price in total
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discounted price in total
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * Discount (%)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * Number of purchased items
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Currency for payment
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Dedicated disk response parameter
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Validity period
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Unit of the validity period (`m`: Month; `h`: Hour)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Purchase quantity
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Value = null;

        /**
         * Prices of different purchased items
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InquiryDetailPrice || null}
         */
        this.DetailPrices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.UnitPriceDiscount = 'UnitPriceDiscount' in params ? params.UnitPriceDiscount : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.DetailPrices) {
            let obj = new InquiryDetailPrice();
            obj.deserialize(params.DetailPrices)
            this.DetailPrices = obj;
        }

    }
}

/**
 * `TopicResponse` returned uniformly
 * @class
 */
class TopicResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of returned topic information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Topic> || null}
         */
        this.TopicList = null;

        /**
         * Number of eligible topics
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

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
                let obj = new Topic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

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
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * (Filter) filter by `topicName`. Fuzzy search is supported
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * Offset. If this parameter is left empty, 0 will be used by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 20. This value must be greater than 0
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Name of the preset ACL rule.
         * @type {string || null}
         */
        this.AclRuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.AclRuleName = 'AclRuleName' in params ? params.AclRuleName : null;

    }
}

/**
 * DescribeGroupOffsets response structure.
 * @class
 */
class DescribeGroupOffsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result object
         * @type {GroupOffsetResponse || null}
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

        if (params.Result) {
            let obj = new GroupOffsetResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendMessage request structure.
 * @class
 */
class SendMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Datahub access ID.
         * @type {string || null}
         */
        this.DataHubId = null;

        /**
         * Content of the message that has been sent. Up to 500 messages can be sent in a single request.
         * @type {Array.<BatchContent> || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataHubId = 'DataHubId' in params ? params.DataHubId : null;

        if (params.Message) {
            this.Message = new Array();
            for (let z in params.Message) {
                let obj = new BatchContent();
                obj.deserialize(params.Message[z]);
                this.Message.push(obj);
            }
        }

    }
}

/**
 * Message record
 * @class
 */
class ConsumerRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Partition ID
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Message key
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Message value
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Message timestamp
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Message headers
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Headers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Headers = 'Headers' in params ? params.Headers : null;

    }
}

/**
 * ModifyGroupOffsets request structure.
 * @class
 */
class ModifyGroupOffsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Kafka instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kafka consumer group
         * @type {string || null}
         */
        this.Group = null;

        /**
         * Offset resetting policy. Meanings of the input parameters: 0: equivalent to the `shift-by` parameter, which indicates to shift the offset forward or backward by the value of the `shift`. 1: equivalent to `by-duration`, `to-datetime`, `to-earliest`, or `to-latest`, which indicates to move the offset to the specified timestamp. 2: equivalent to `to-offset`, which indicates to move the offset to the specified offset position
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * Indicates the topics to be reset. If this parameter is left empty, all topics will be reset
         * @type {Array.<string> || null}
         */
        this.Topics = null;

        /**
         * When `strategy` is 0, this field is required. If it is above zero, the offset will be shifted backward by the value of the `shift`. If it is below zero, the offset will be shifted forward by the value of the `shift`. After a correct reset, the new offset should be (old_offset + shift). Note that if the new offset is smaller than the `earliest` parameter of the partition, it will be set to `earliest`, and if it is greater than the `latest` parameter of the partition, it will be set to `latest`
         * @type {number || null}
         */
        this.Shift = null;

        /**
         * Unit: ms. When `strategy` is 1, this field is required, where -2 indicates to reset the offset to the initial position, -1 indicates to reset to the latest position (equivalent to emptying), and other values represent the specified time, i.e., the offset of the topic at the specified time will be obtained and then reset. Note that if there is no message at the specified time, the last offset will be obtained
         * @type {number || null}
         */
        this.ShiftTimestamp = null;

        /**
         * Position of the offset that needs to be reset. When `strategy` is 2, this field is required
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * List of partitions that need to be reset. If the topics parameter is not specified, reset partitions in the corresponding partition list of all topics. If the topics parameter is specified, reset partitions of the corresponding partition list of the specified topic list.
         * @type {Array.<number> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Topics = 'Topics' in params ? params.Topics : null;
        this.Shift = 'Shift' in params ? params.Shift : null;
        this.ShiftTimestamp = 'ShiftTimestamp' in params ? params.ShiftTimestamp : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;

    }
}

/**
 * BatchModifyTopicAttributes request structure.
 * @class
 */
class BatchModifyTopicAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic attribute list
         * @type {Array.<BatchModifyTopicInfo> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Topic) {
            this.Topic = new Array();
            for (let z in params.Topic) {
                let obj = new BatchModifyTopicInfo();
                obj.deserialize(params.Topic[z]);
                this.Topic.push(obj);
            }
        }

    }
}

/**
 * CreateTopicIpWhiteList request structure.
 * @class
 */
class CreateTopicIpWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * IP allowlist list
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;

    }
}

/**
 * Route entity object
 * @class
 */
class Route extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance connection method
0: PLAINTEXT (plaintext method, which does not carry user information and is supported for legacy versions and Community Edition)
1: SASL_PLAINTEXT (plaintext method, which authenticates the login through SASL before data start and is supported only for Community Edition)
2: SSL (SSL-encrypted communication, which does not carry user information and is supported for legacy versions and Community Edition)
3: SASL_SSL (SSL-encrypted communication, which authenticates the login through SASL before data start and is supported only for Community Edition)
         * @type {number || null}
         */
        this.AccessType = null;

        /**
         * Route ID
         * @type {number || null}
         */
        this.RouteId = null;

        /**
         * VIP network type (1: Public network TGW; 2: Classic network; 3: VPC; 4: Supporting network (IDC environment); 5: SSL public network access; 6: BM VPC; 7: Supporting network (CVM environment)).
         * @type {number || null}
         */
        this.VipType = null;

        /**
         * Virtual IP list
         * @type {Array.<VipEntity> || null}
         */
        this.VipList = null;

        /**
         * Domain name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Domain name port
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DomainPort = null;

        /**
         * Timestamp
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeleteTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessType = 'AccessType' in params ? params.AccessType : null;
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.VipType = 'VipType' in params ? params.VipType : null;

        if (params.VipList) {
            this.VipList = new Array();
            for (let z in params.VipList) {
                let obj = new VipEntity();
                obj.deserialize(params.VipList[z]);
                this.VipList.push(obj);
            }
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainPort = 'DomainPort' in params ? params.DomainPort : null;
        this.DeleteTimestamp = 'DeleteTimestamp' in params ? params.DeleteTimestamp : null;

    }
}

/**
 * Four pieces of information of ACL rules: source IP address, destination IP address, source port, and destination port
 * @class
 */
class AclRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ACL operation types. Enumerated values: `All` (all operations), `Read` (read), `Write` (write).
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Permission types: `Deny`, `Allow`.
         * @type {string || null}
         */
        this.PermissionType = null;

        /**
         * The default value is `*`, which means that any host can access the topic. CKafka currently does not support specifying a host value of * or an IP range.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * The list of users allowed to access the topic. Default value: `User:*`, which means all users. The current user must be in the user list. Add the prefix `User:` before the user name (`User:A`, for example).
         * @type {string || null}
         */
        this.Principal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Principal = 'Principal' in params ? params.Principal : null;

    }
}

/**
 * ACL object entity
 * @class
 */
class Acl extends  AbstractModel {
    constructor(){
        super();

        /**
         * ACL resource type. 0: UNKNOWN, 1: ANY, 2: TOPIC, 3: GROUP, 4: CLUSTER, 5: TRANSACTIONAL_ID. Currently, only `TOPIC` is available,
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * Resource name, which is related to `resourceType`. For example, if `resourceType` is `TOPIC`, this field indicates the topic name; if `resourceType` is `GROUP`, this field indicates the group name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * User list. The default value is `User:*`, which means that any user can access. The current user can only be one included in the user list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Principal = null;

        /**
         * The default value is `*`, which means that any host can access. Currently, CKafka does not support the host as `*`, but the future product based on the open-source Kafka will directly support this
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * ACL operation mode. 0: UNKNOWN, 1: ANY, 2: ALL, 3: READ, 4: WRITE, 5: CREATE, 6: DELETE, 7: ALTER, 8: DESCRIBE, 9: CLUSTER_ACTION, 10: DESCRIBE_CONFIGS, 11: ALTER_CONFIGS, 12: IDEMPOTEN_WRITE
         * @type {number || null}
         */
        this.Operation = null;

        /**
         * Permission type. 0: UNKNOWN, 1: ANY, 2: DENY, 3: ALLOW
         * @type {number || null}
         */
        this.PermissionType = null;

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
        this.Principal = 'Principal' in params ? params.Principal : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;

    }
}

/**
 * Information returned for topic message retention time configuration
 * @class
 */
class TopicRetentionTimeConfigRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Expected value, i.e., the topic message retention time (min) configured
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Expect = null;

        /**
         * Current value (min), i.e., the retention time currently in effect, which may be dynamically adjusted
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Current = null;

        /**
         * Last modified time
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ModTimeStamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Expect = 'Expect' in params ? params.Expect : null;
        this.Current = 'Current' in params ? params.Current : null;
        this.ModTimeStamp = 'ModTimeStamp' in params ? params.ModTimeStamp : null;

    }
}

/**
 * ModifyTopicAttributes request structure.
 * @class
 */
class ModifyTopicAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Topic remarks string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.Note = null;

        /**
         * IP allowlist switch. 1: enabled, 0: disabled.
         * @type {number || null}
         */
        this.EnableWhiteList = null;

        /**
         * Default value: 1.
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * 0: false, 1: true. Default value: 0.
         * @type {number || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * Message retention period in ms. The current minimum value is 60,000 ms.
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * Segment rolling duration in ms. The current minimum value is 86,400,000 ms.
         * @type {number || null}
         */
        this.SegmentMs = null;

        /**
         * Max message size in bytes. Max value: 8,388,608 bytes (8 MB).
         * @type {number || null}
         */
        this.MaxMessageBytes = null;

        /**
         * Message deletion policy. Valid values: delete, compact
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

        /**
         * IP allowlist, which is required if the value of `enableWhileList` is 1.
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

        /**
         * Preset ACL rule. `1`: enable, `0`: disable. Default value: `0`.
         * @type {number || null}
         */
        this.EnableAclRule = null;

        /**
         * Name of the preset ACL rule.
         * @type {string || null}
         */
        this.AclRuleName = null;

        /**
         * Message retention file size in bytes, which is an optional parameter. Default value: -1. Currently, the min value that can be entered is 1,048,576 B.
         * @type {number || null}
         */
        this.RetentionBytes = null;

        /**
         * Tag list.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Production throttling in MB/sec.
         * @type {number || null}
         */
        this.QuotaProducerByteRate = null;

        /**
         * Consumption throttling in MB/sec.
         * @type {number || null}
         */
        this.QuotaConsumerByteRate = null;

        /**
         * The number of topic replicas.
         * @type {number || null}
         */
        this.ReplicaNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;
        this.MaxMessageBytes = 'MaxMessageBytes' in params ? params.MaxMessageBytes : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;
        this.EnableAclRule = 'EnableAclRule' in params ? params.EnableAclRule : null;
        this.AclRuleName = 'AclRuleName' in params ? params.AclRuleName : null;
        this.RetentionBytes = 'RetentionBytes' in params ? params.RetentionBytes : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.QuotaProducerByteRate = 'QuotaProducerByteRate' in params ? params.QuotaProducerByteRate : null;
        this.QuotaConsumerByteRate = 'QuotaConsumerByteRate' in params ? params.QuotaConsumerByteRate : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;

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
         * Returned creation result
         * @type {CreateTopicResp || null}
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

        if (params.Result) {
            let obj = new CreateTopicResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTopicIpWhiteList request structure.
 * @class
 */
class DeleteTopicIpWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * IP allowlist list
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;

    }
}

/**
 * DescribeGroupOffsets request structure.
 * @class
 */
class DescribeGroupOffsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * (Filter) filter by instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kafka consumer group
         * @type {string || null}
         */
        this.Group = null;

        /**
         * Array of the names of topics subscribed to by a group. If there is no such array, this parameter means the information of all topics in the specified group
         * @type {Array.<string> || null}
         */
        this.Topics = null;

        /**
         * Fuzzy match by `topicName`
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * Offset position of this query. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of results to be returned in this request. Default value: 50. Maximum value: 50
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.Topics = 'Topics' in params ? params.Topics : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DataHub topic details
 * @class
 */
class DescribeDatahubTopicResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * The number of partitions
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * Expiration time
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * Remarks
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Note = null;

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Status (`1`: In use; `2`: Deleting)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Service routing address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Address = 'Address' in params ? params.Address : null;

    }
}

/**
 * DescribeUser request structure.
 * @class
 */
class DescribeUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Filter by name
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned in this request
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DataHub topic list
 * @class
 */
class DescribeDatahubTopicsResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total count
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Topic list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DatahubTopicDTO> || null}
         */
        this.TopicList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new DatahubTopicDTO();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }

    }
}

/**
 * DescribeTopicSyncReplica request structure.
 * @class
 */
class DescribeTopicSyncReplicaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name
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
         * Filters unsynced replicas only
         * @type {boolean || null}
         */
        this.OutOfSyncReplicaOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OutOfSyncReplicaOnly = 'OutOfSyncReplicaOnly' in params ? params.OutOfSyncReplicaOnly : null;

    }
}

/**
 * Instance details
 * @class
 */
class InstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance VIP information
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Instance port information
         * @type {string || null}
         */
        this.Vport = null;

        /**
         * Virtual IP list
         * @type {Array.<VipEntity> || null}
         */
        this.VipList = null;

        /**
         * Instance status. 0: creating, 1: running, 2: deleting, 5: isolated, -1: creation failed
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance bandwidth in Mbps
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Instance storage capacity in GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * AZ ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * vpcId. If this parameter is empty, it means the basic network
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Whether to renew the instance automatically, which is an int-type enumerated value. 1: yes, 2: no
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * Instance status. An int-type value will be returned. `0`: Healthy, `1`: Alarmed, `2`: Exceptional
         * @type {number || null}
         */
        this.Healthy = null;

        /**
         * Instance status information
         * @type {string || null}
         */
        this.HealthyMessage = null;

        /**
         * Instance creation time
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Instance expiration time
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * Whether it is an internal customer. 1: yes
         * @type {number || null}
         */
        this.IsInternal = null;

        /**
         * Number of topics
         * @type {number || null}
         */
        this.TopicNum = null;

        /**
         * Tag
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Kafka version information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Cross-AZ
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

        /**
         * CKafka sale type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Cvm = null;

        /**
         * CKafka instance type
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Disk type
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Maximum number of topics for the current instance
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxTopicNumber = null;

        /**
         * Maximum number of partitions for the current instance
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxPartitionNumber = null;

        /**
         * Time of scheduled upgrade
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RebalanceTime = null;

        /**
         * Number of partitions in the current instance.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PartitionNumber = null;

        /**
         * Public network bandwidth type.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicNetworkChargeType = null;

        /**
         * Public network bandwidth.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PublicNetwork = null;

        /**
         * Instance type.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Instance feature list.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Features = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

        if (params.VipList) {
            this.VipList = new Array();
            for (let z in params.VipList) {
                let obj = new VipEntity();
                obj.deserialize(params.VipList[z]);
                this.VipList.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Healthy = 'Healthy' in params ? params.Healthy : null;
        this.HealthyMessage = 'HealthyMessage' in params ? params.HealthyMessage : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsInternal = 'IsInternal' in params ? params.IsInternal : null;
        this.TopicNum = 'TopicNum' in params ? params.TopicNum : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Cvm = 'Cvm' in params ? params.Cvm : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.MaxTopicNumber = 'MaxTopicNumber' in params ? params.MaxTopicNumber : null;
        this.MaxPartitionNumber = 'MaxPartitionNumber' in params ? params.MaxPartitionNumber : null;
        this.RebalanceTime = 'RebalanceTime' in params ? params.RebalanceTime : null;
        this.PartitionNumber = 'PartitionNumber' in params ? params.PartitionNumber : null;
        this.PublicNetworkChargeType = 'PublicNetworkChargeType' in params ? params.PublicNetworkChargeType : null;
        this.PublicNetwork = 'PublicNetwork' in params ? params.PublicNetwork : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.Features = 'Features' in params ? params.Features : null;

    }
}

/**
 * Traffic throttling policy in instance/topic dimension
 * @class
 */
class InstanceQuotaConfigResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Production throttling in MB/sec.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.QuotaProducerByteRate = null;

        /**
         * Consumption throttling in MB/sec.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.QuotaConsumerByteRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QuotaProducerByteRate = 'QuotaProducerByteRate' in params ? params.QuotaProducerByteRate : null;
        this.QuotaConsumerByteRate = 'QuotaConsumerByteRate' in params ? params.QuotaConsumerByteRate : null;

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
         * Returned entity of topic details
         * @type {TopicDetailResponse || null}
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

        if (params.Result) {
            let obj = new TopicDetailResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Subscribed message entity
 * @class
 */
class SubscribedInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subscribed topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Subscribed partition
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.Partition = null;

        /**
         * Partition offset information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PartitionOffset> || null}
         */
        this.PartitionOffset = null;

        /**
         * ID of the subscribed topic. 
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.PartitionOffset) {
            this.PartitionOffset = new Array();
            for (let z in params.PartitionOffset) {
                let obj = new PartitionOffset();
                obj.deserialize(params.PartitionOffset[z]);
                this.PartitionOffset.push(obj);
            }
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * Message price entity
 * @class
 */
class Price extends  AbstractModel {
    constructor(){
        super();

        /**
         * Discounted price
         * @type {number || null}
         */
        this.RealTotalCost = null;

        /**
         * Original price
         * @type {number || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

module.exports = {
    TopicDetail: TopicDetail,
    DeleteAclRequest: DeleteAclRequest,
    CreateInstancePostResponse: CreateInstancePostResponse,
    GroupInfoMember: GroupInfoMember,
    BatchCreateAclRequest: BatchCreateAclRequest,
    DeleteUserRequest: DeleteUserRequest,
    PartitionOffset: PartitionOffset,
    DescribeACLRequest: DescribeACLRequest,
    BatchModifyTopicResultDTO: BatchModifyTopicResultDTO,
    DescribeTopicAttributesRequest: DescribeTopicAttributesRequest,
    DescribeInstanceAttributesRequest: DescribeInstanceAttributesRequest,
    ConsumerGroup: ConsumerGroup,
    Assignment: Assignment,
    DescribeConsumerGroupResponse: DescribeConsumerGroupResponse,
    InquiryDetailPrice: InquiryDetailPrice,
    InquireCkafkaPriceResp: InquireCkafkaPriceResp,
    DeleteTopicRequest: DeleteTopicRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    FetchMessageByOffsetResponse: FetchMessageByOffsetResponse,
    BatchModifyTopicAttributesResponse: BatchModifyTopicAttributesResponse,
    CreateInstancePreResp: CreateInstancePreResp,
    GroupInfoTopics: GroupInfoTopics,
    FetchMessageListByOffsetRequest: FetchMessageListByOffsetRequest,
    Region: Region,
    ModifyInstancePreRequest: ModifyInstancePreRequest,
    DescribeInstancesDetailResponse: DescribeInstancesDetailResponse,
    CreateInstancePreData: CreateInstancePreData,
    AclRule: AclRule,
    DescribeACLResponse: DescribeACLResponse,
    DynamicDiskConfig: DynamicDiskConfig,
    InquireCkafkaPriceRequest: InquireCkafkaPriceRequest,
    ZoneInfo: ZoneInfo,
    DescribeTopicSubscribeGroupResponse: DescribeTopicSubscribeGroupResponse,
    DescribeCkafkaZoneRequest: DescribeCkafkaZoneRequest,
    SaleInfo: SaleInfo,
    Topic: Topic,
    Tag: Tag,
    BatchModifyGroupOffsetsResponse: BatchModifyGroupOffsetsResponse,
    GroupResponse: GroupResponse,
    InstanceChargeParam: InstanceChargeParam,
    DescribeDatahubTopicResponse: DescribeDatahubTopicResponse,
    DescribeTopicAttributesResponse: DescribeTopicAttributesResponse,
    FetchMessageListByOffsetResponse: FetchMessageListByOffsetResponse,
    CreateConsumerResponse: CreateConsumerResponse,
    RouteResponse: RouteResponse,
    DescribeGroupResponse: DescribeGroupResponse,
    ModifyInstanceAttributesConfig: ModifyInstanceAttributesConfig,
    OperateResponseData: OperateResponseData,
    CreateUserResponse: CreateUserResponse,
    ModifyInstanceAttributesResponse: ModifyInstanceAttributesResponse,
    CreatePartitionResponse: CreatePartitionResponse,
    TopicSubscribeGroup: TopicSubscribeGroup,
    ClusterInfo: ClusterInfo,
    DeleteUserResponse: DeleteUserResponse,
    DescribeTopicProduceConnectionRequest: DescribeTopicProduceConnectionRequest,
    CreateAclRequest: CreateAclRequest,
    DescribeTopicSyncReplicaResponse: DescribeTopicSyncReplicaResponse,
    DescribeAppInfoRequest: DescribeAppInfoRequest,
    DeleteRouteResponse: DeleteRouteResponse,
    Partitions: Partitions,
    DescribeTopicResponse: DescribeTopicResponse,
    ConsumerGroupResponse: ConsumerGroupResponse,
    CreateTopicIpWhiteListResponse: CreateTopicIpWhiteListResponse,
    GroupOffsetTopic: GroupOffsetTopic,
    ModifyGroupOffsetsResponse: ModifyGroupOffsetsResponse,
    DescribeConnectInfoResultDTO: DescribeConnectInfoResultDTO,
    Partition: Partition,
    CreateAclResponse: CreateAclResponse,
    CreateTopicRequest: CreateTopicRequest,
    DeleteAclResponse: DeleteAclResponse,
    DynamicRetentionTime: DynamicRetentionTime,
    DescribeTopicSubscribeGroupRequest: DescribeTopicSubscribeGroupRequest,
    DeleteInstancePreResponse: DeleteInstancePreResponse,
    FetchMessageByOffsetRequest: FetchMessageByOffsetRequest,
    InquiryPublicNetworkParam: InquiryPublicNetworkParam,
    TopicInSyncReplicaInfo: TopicInSyncReplicaInfo,
    DescribeRegionRequest: DescribeRegionRequest,
    InstanceConfigDO: InstanceConfigDO,
    UserResponse: UserResponse,
    DescribeGroupInfoRequest: DescribeGroupInfoRequest,
    DescribeGroupInfoResponse: DescribeGroupInfoResponse,
    ModifyTopicAttributesResponse: ModifyTopicAttributesResponse,
    DescribeDatahubTopicsRequest: DescribeDatahubTopicsRequest,
    DeleteRouteTriggerTimeResponse: DeleteRouteTriggerTimeResponse,
    DescribeUserResponse: DescribeUserResponse,
    AppIdResponse: AppIdResponse,
    DescribeTopicRequest: DescribeTopicRequest,
    CreatePartitionRequest: CreatePartitionRequest,
    Group: Group,
    GroupInfoResponse: GroupInfoResponse,
    DescribeAppInfoResponse: DescribeAppInfoResponse,
    AclResponse: AclResponse,
    ZoneResponse: ZoneResponse,
    Instance: Instance,
    DescribeInstanceAttributesResponse: DescribeInstanceAttributesResponse,
    ModifyPasswordResponse: ModifyPasswordResponse,
    TopicDetailResponse: TopicDetailResponse,
    DeleteInstancePreRequest: DeleteInstancePreRequest,
    DescribeDatahubTopicRequest: DescribeDatahubTopicRequest,
    Config: Config,
    ModifyPasswordRequest: ModifyPasswordRequest,
    ModifyInstanceAttributesRequest: ModifyInstanceAttributesRequest,
    DescribeRegionResponse: DescribeRegionResponse,
    DescribeConsumerGroupRequest: DescribeConsumerGroupRequest,
    VipEntity: VipEntity,
    DescribeTopicProduceConnectionResponse: DescribeTopicProduceConnectionResponse,
    ConsumerGroupTopic: ConsumerGroupTopic,
    User: User,
    GroupOffsetPartition: GroupOffsetPartition,
    DeleteTopicResponse: DeleteTopicResponse,
    DeleteRouteTriggerTimeRequest: DeleteRouteTriggerTimeRequest,
    DescribeInstancesRequest: DescribeInstancesRequest,
    InstanceAttributesResponse: InstanceAttributesResponse,
    CreateInstancePostRequest: CreateInstancePostRequest,
    DescribeDatahubTopicsResponse: DescribeDatahubTopicsResponse,
    DescribeGroupRequest: DescribeGroupRequest,
    Filter: Filter,
    GroupOffsetResponse: GroupOffsetResponse,
    BatchCreateAclResponse: BatchCreateAclResponse,
    ModifyInstancePreResponse: ModifyInstancePreResponse,
    CreateUserRequest: CreateUserRequest,
    InstanceDetailResponse: InstanceDetailResponse,
    DeleteRouteRequest: DeleteRouteRequest,
    DeleteTopicIpWhiteListResponse: DeleteTopicIpWhiteListResponse,
    DescribeInstancesDetailRequest: DescribeInstancesDetailRequest,
    CreateConsumerRequest: CreateConsumerRequest,
    InquireCkafkaPriceResponse: InquireCkafkaPriceResponse,
    DescribeRouteRequest: DescribeRouteRequest,
    InquiryDiskParam: InquiryDiskParam,
    TopicInSyncReplicaResult: TopicInSyncReplicaResult,
    SendMessageResponse: SendMessageResponse,
    InquiryBasePrice: InquiryBasePrice,
    DescribeCkafkaZoneResponse: DescribeCkafkaZoneResponse,
    BatchModifyGroupOffsetsRequest: BatchModifyGroupOffsetsRequest,
    TopicAttributesResponse: TopicAttributesResponse,
    InstanceResponse: InstanceResponse,
    DatahubTopicDTO: DatahubTopicDTO,
    JgwOperateResponse: JgwOperateResponse,
    DescribeGroup: DescribeGroup,
    TopicPartitionDO: TopicPartitionDO,
    CreateTopicResp: CreateTopicResp,
    BatchModifyTopicInfo: BatchModifyTopicInfo,
    DescribeRouteResponse: DescribeRouteResponse,
    BatchContent: BatchContent,
    InquiryPrice: InquiryPrice,
    TopicResult: TopicResult,
    DescribeTopicDetailRequest: DescribeTopicDetailRequest,
    DescribeGroupOffsetsResponse: DescribeGroupOffsetsResponse,
    SendMessageRequest: SendMessageRequest,
    ConsumerRecord: ConsumerRecord,
    ModifyGroupOffsetsRequest: ModifyGroupOffsetsRequest,
    BatchModifyTopicAttributesRequest: BatchModifyTopicAttributesRequest,
    CreateTopicIpWhiteListRequest: CreateTopicIpWhiteListRequest,
    Route: Route,
    AclRuleInfo: AclRuleInfo,
    Acl: Acl,
    TopicRetentionTimeConfigRsp: TopicRetentionTimeConfigRsp,
    ModifyTopicAttributesRequest: ModifyTopicAttributesRequest,
    CreateTopicResponse: CreateTopicResponse,
    DeleteTopicIpWhiteListRequest: DeleteTopicIpWhiteListRequest,
    DescribeGroupOffsetsRequest: DescribeGroupOffsetsRequest,
    DescribeDatahubTopicResp: DescribeDatahubTopicResp,
    DescribeUserRequest: DescribeUserRequest,
    DescribeDatahubTopicsResp: DescribeDatahubTopicsResp,
    DescribeTopicSyncReplicaRequest: DescribeTopicSyncReplicaRequest,
    InstanceDetail: InstanceDetail,
    InstanceQuotaConfigResp: InstanceQuotaConfigResp,
    DescribeTopicDetailResponse: DescribeTopicDetailResponse,
    SubscribedInfo: SubscribedInfo,
    Price: Price,

}
