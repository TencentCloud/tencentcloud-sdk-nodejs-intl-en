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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeRolesResponse = models.DescribeRolesResponse;
const CmqDeadLetterPolicy = models.CmqDeadLetterPolicy;
const CreateRocketMQGroupRequest = models.CreateRocketMQGroupRequest;
const ModifyEnvironmentAttributesRequest = models.ModifyEnvironmentAttributesRequest;
const DeleteClusterResponse = models.DeleteClusterResponse;
const SendBatchMessagesResponse = models.SendBatchMessagesResponse;
const ModifyCmqSubscriptionAttributeResponse = models.ModifyCmqSubscriptionAttributeResponse;
const CreateCmqTopicRequest = models.CreateCmqTopicRequest;
const ReceiveMessageRequest = models.ReceiveMessageRequest;
const ModifyClusterResponse = models.ModifyClusterResponse;
const RocketMQClusterRecentStats = models.RocketMQClusterRecentStats;
const PublishCmqMsgRequest = models.PublishCmqMsgRequest;
const CreateCmqSubscribeRequest = models.CreateCmqSubscribeRequest;
const RewindCmqQueueResponse = models.RewindCmqQueueResponse;
const DeleteClusterRequest = models.DeleteClusterRequest;
const CmqSubscription = models.CmqSubscription;
const DeleteRocketMQGroupRequest = models.DeleteRocketMQGroupRequest;
const DeleteCmqTopicResponse = models.DeleteCmqTopicResponse;
const CreateSubscriptionRequest = models.CreateSubscriptionRequest;
const CreateRocketMQNamespaceRequest = models.CreateRocketMQNamespaceRequest;
const DescribeCmqTopicDetailResponse = models.DescribeCmqTopicDetailResponse;
const CmqQueue = models.CmqQueue;
const CreateEnvironmentResponse = models.CreateEnvironmentResponse;
const CreateSubscriptionResponse = models.CreateSubscriptionResponse;
const DescribeCmqSubscriptionDetailRequest = models.DescribeCmqSubscriptionDetailRequest;
const Tag = models.Tag;
const Role = models.Role;
const ModifyRocketMQClusterResponse = models.ModifyRocketMQClusterResponse;
const DescribeCmqQueueDetailResponse = models.DescribeCmqQueueDetailResponse;
const CreateEnvironmentRequest = models.CreateEnvironmentRequest;
const ClearCmqQueueRequest = models.ClearCmqQueueRequest;
const CmqDeadLetterSource = models.CmqDeadLetterSource;
const ModifyCmqTopicAttributeResponse = models.ModifyCmqTopicAttributeResponse;
const DescribeRocketMQClusterResponse = models.DescribeRocketMQClusterResponse;
const DescribeCmqSubscriptionDetailResponse = models.DescribeCmqSubscriptionDetailResponse;
const VpcBindRecord = models.VpcBindRecord;
const ModifyClusterRequest = models.ModifyClusterRequest;
const DescribeEnvironmentAttributesRequest = models.DescribeEnvironmentAttributesRequest;
const ModifyRocketMQClusterRequest = models.ModifyRocketMQClusterRequest;
const AcknowledgeMessageRequest = models.AcknowledgeMessageRequest;
const PublishCmqMsgResponse = models.PublishCmqMsgResponse;
const DescribePublishersRequest = models.DescribePublishersRequest;
const CreateRocketMQClusterRequest = models.CreateRocketMQClusterRequest;
const SendCmqMsgRequest = models.SendCmqMsgRequest;
const AcknowledgeMessageResponse = models.AcknowledgeMessageResponse;
const DeleteEnvironmentRolesResponse = models.DeleteEnvironmentRolesResponse;
const DescribeClusterDetailRequest = models.DescribeClusterDetailRequest;
const ModifyRoleResponse = models.ModifyRoleResponse;
const DeleteCmqQueueResponse = models.DeleteCmqQueueResponse;
const DescribeRocketMQClusterRequest = models.DescribeRocketMQClusterRequest;
const DeleteRocketMQTopicResponse = models.DeleteRocketMQTopicResponse;
const ModifyCmqTopicAttributeRequest = models.ModifyCmqTopicAttributeRequest;
const DeleteRolesRequest = models.DeleteRolesRequest;
const CreateCmqSubscribeResponse = models.CreateCmqSubscribeResponse;
const Publisher = models.Publisher;
const RewindCmqQueueRequest = models.RewindCmqQueueRequest;
const ModifyRoleRequest = models.ModifyRoleRequest;
const SendMessagesResponse = models.SendMessagesResponse;
const CreateTopicRequest = models.CreateTopicRequest;
const DeleteEnvironmentsResponse = models.DeleteEnvironmentsResponse;
const ModifyRocketMQGroupRequest = models.ModifyRocketMQGroupRequest;
const DescribeCmqTopicDetailRequest = models.DescribeCmqTopicDetailRequest;
const CmqTopic = models.CmqTopic;
const UnbindCmqDeadLetterResponse = models.UnbindCmqDeadLetterResponse;
const ModifyRocketMQNamespaceResponse = models.ModifyRocketMQNamespaceResponse;
const DeleteEnvironmentsRequest = models.DeleteEnvironmentsRequest;
const DescribeBindVpcsRequest = models.DescribeBindVpcsRequest;
const ClearCmqSubscriptionFilterTagsRequest = models.ClearCmqSubscriptionFilterTagsRequest;
const CreateRocketMQGroupResponse = models.CreateRocketMQGroupResponse;
const ModifyRocketMQNamespaceRequest = models.ModifyRocketMQNamespaceRequest;
const ModifyRocketMQTopicResponse = models.ModifyRocketMQTopicResponse;
const DeleteRolesResponse = models.DeleteRolesResponse;
const ModifyRocketMQTopicRequest = models.ModifyRocketMQTopicRequest;
const RocketMQClusterInfo = models.RocketMQClusterInfo;
const DeleteRocketMQGroupResponse = models.DeleteRocketMQGroupResponse;
const CreateCmqQueueResponse = models.CreateCmqQueueResponse;
const ResetMsgSubOffsetByTimestampResponse = models.ResetMsgSubOffsetByTimestampResponse;
const CreateClusterResponse = models.CreateClusterResponse;
const DescribeCmqDeadLetterSourceQueuesRequest = models.DescribeCmqDeadLetterSourceQueuesRequest;
const DeleteRocketMQNamespaceRequest = models.DeleteRocketMQNamespaceRequest;
const CreateClusterRequest = models.CreateClusterRequest;
const ModifyCmqQueueAttributeResponse = models.ModifyCmqQueueAttributeResponse;
const CreateTopicResponse = models.CreateTopicResponse;
const ResetRocketMQConsumerOffSetResponse = models.ResetRocketMQConsumerOffSetResponse;
const ModifyCmqSubscriptionAttributeRequest = models.ModifyCmqSubscriptionAttributeRequest;
const ModifyTopicResponse = models.ModifyTopicResponse;
const ReceiveMessageResponse = models.ReceiveMessageResponse;
const DeleteRocketMQClusterResponse = models.DeleteRocketMQClusterResponse;
const CreateCmqTopicResponse = models.CreateCmqTopicResponse;
const DescribePublisherSummaryRequest = models.DescribePublisherSummaryRequest;
const ClearCmqSubscriptionFilterTagsResponse = models.ClearCmqSubscriptionFilterTagsResponse;
const Filter = models.Filter;
const CmqTransactionPolicy = models.CmqTransactionPolicy;
const ModifyTopicRequest = models.ModifyTopicRequest;
const ResetMsgSubOffsetByTimestampRequest = models.ResetMsgSubOffsetByTimestampRequest;
const CreateEnvironmentRoleResponse = models.CreateEnvironmentRoleResponse;
const DescribeBindVpcsResponse = models.DescribeBindVpcsResponse;
const DeleteCmqSubscribeRequest = models.DeleteCmqSubscribeRequest;
const RocketMQClusterConfig = models.RocketMQClusterConfig;
const DescribeCmqDeadLetterSourceQueuesResponse = models.DescribeCmqDeadLetterSourceQueuesResponse;
const SendMsgResponse = models.SendMsgResponse;
const DeleteRocketMQTopicRequest = models.DeleteRocketMQTopicRequest;
const Cluster = models.Cluster;
const RetentionPolicy = models.RetentionPolicy;
const CreateRocketMQClusterResponse = models.CreateRocketMQClusterResponse;
const DeleteRocketMQNamespaceResponse = models.DeleteRocketMQNamespaceResponse;
const DescribePublishersResponse = models.DescribePublishersResponse;
const SendMsgRequest = models.SendMsgRequest;
const ResetRocketMQConsumerOffSetRequest = models.ResetRocketMQConsumerOffSetRequest;
const DescribeCmqQueueDetailRequest = models.DescribeCmqQueueDetailRequest;
const CreateRocketMQTopicRequest = models.CreateRocketMQTopicRequest;
const CreateRoleResponse = models.CreateRoleResponse;
const DeleteRocketMQClusterRequest = models.DeleteRocketMQClusterRequest;
const DeleteEnvironmentRolesRequest = models.DeleteEnvironmentRolesRequest;
const ClearCmqQueueResponse = models.ClearCmqQueueResponse;
const CreateRocketMQTopicResponse = models.CreateRocketMQTopicResponse;
const ModifyEnvironmentAttributesResponse = models.ModifyEnvironmentAttributesResponse;
const SendBatchMessagesRequest = models.SendBatchMessagesRequest;
const CreateCmqQueueRequest = models.CreateCmqQueueRequest;
const ModifyEnvironmentRoleResponse = models.ModifyEnvironmentRoleResponse;
const DeleteCmqQueueRequest = models.DeleteCmqQueueRequest;
const CreateRoleRequest = models.CreateRoleRequest;
const ModifyEnvironmentRoleRequest = models.ModifyEnvironmentRoleRequest;
const DescribeEnvironmentAttributesResponse = models.DescribeEnvironmentAttributesResponse;
const Sort = models.Sort;
const DescribePublisherSummaryResponse = models.DescribePublisherSummaryResponse;
const CreateRocketMQNamespaceResponse = models.CreateRocketMQNamespaceResponse;
const DeleteCmqTopicRequest = models.DeleteCmqTopicRequest;
const SendCmqMsgResponse = models.SendCmqMsgResponse;
const UnbindCmqDeadLetterRequest = models.UnbindCmqDeadLetterRequest;
const ModifyCmqQueueAttributeRequest = models.ModifyCmqQueueAttributeRequest;
const DeleteCmqSubscribeResponse = models.DeleteCmqSubscribeResponse;
const DescribeRolesRequest = models.DescribeRolesRequest;
const ModifyRocketMQGroupResponse = models.ModifyRocketMQGroupResponse;
const DescribeClusterDetailResponse = models.DescribeClusterDetailResponse;
const SendMessagesRequest = models.SendMessagesRequest;
const CreateEnvironmentRoleRequest = models.CreateEnvironmentRoleRequest;


/**
 * tdmq client
 * @class
 */
class TdmqClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tdmq.tencentcloudapi.com", "2020-02-17", credential, region, profile);
    }
    
    /**
     * This API is used to delete a CMQ topic.
     * @param {DeleteCmqTopicRequest} req
     * @param {function(string, DeleteCmqTopicResponse):void} cb
     * @public
     */
    DeleteCmqTopic(req, cb) {
        let resp = new DeleteCmqTopicResponse();
        this.request("DeleteCmqTopic", req, resp, cb);
    }

    /**
     * This API is used to batch delete namespaces under a tenant.
     * @param {DeleteEnvironmentsRequest} req
     * @param {function(string, DeleteEnvironmentsResponse):void} cb
     * @public
     */
    DeleteEnvironments(req, cb) {
        let resp = new DeleteEnvironmentsResponse();
        this.request("DeleteEnvironments", req, resp, cb);
    }

    /**
     * This API is used to get the tenant-VPC binding relationship.
     * @param {DescribeBindVpcsRequest} req
     * @param {function(string, DescribeBindVpcsResponse):void} cb
     * @public
     */
    DescribeBindVpcs(req, cb) {
        let resp = new DescribeBindVpcsResponse();
        this.request("DescribeBindVpcs", req, resp, cb);
    }

    /**
     * This API is used to create a cluster.
     * @param {CreateClusterRequest} req
     * @param {function(string, CreateClusterResponse):void} cb
     * @public
     */
    CreateCluster(req, cb) {
        let resp = new CreateClusterResponse();
        this.request("CreateCluster", req, resp, cb);
    }

    /**
     * This API is used to modify the topic remarks and number of partitions.
     * @param {ModifyTopicRequest} req
     * @param {function(string, ModifyTopicResponse):void} cb
     * @public
     */
    ModifyTopic(req, cb) {
        let resp = new ModifyTopicResponse();
        this.request("ModifyTopic", req, resp, cb);
    }

    /**
     * This API is used to clear the messages in the CMQ message queue.
     * @param {ClearCmqQueueRequest} req
     * @param {function(string, ClearCmqQueueResponse):void} cb
     * @public
     */
    ClearCmqQueue(req, cb) {
        let resp = new ClearCmqQueueResponse();
        this.request("ClearCmqQueue", req, resp, cb);
    }

    /**
     * This API is used to delete a RocketMQ topic.
     * @param {DeleteRocketMQTopicRequest} req
     * @param {function(string, DeleteRocketMQTopicResponse):void} cb
     * @public
     */
    DeleteRocketMQTopic(req, cb) {
        let resp = new DeleteRocketMQTopicResponse();
        this.request("DeleteRocketMQTopic", req, resp, cb);
    }

    /**
     * This API is used to create a role.
     * @param {CreateRoleRequest} req
     * @param {function(string, CreateRoleResponse):void} cb
     * @public
     */
    CreateRole(req, cb) {
        let resp = new CreateRoleResponse();
        this.request("CreateRole", req, resp, cb);
    }

    /**
     * This API is used to create a CMQ queue.
     * @param {CreateCmqQueueRequest} req
     * @param {function(string, CreateCmqQueueResponse):void} cb
     * @public
     */
    CreateCmqQueue(req, cb) {
        let resp = new CreateCmqQueueResponse();
        this.request("CreateCmqQueue", req, resp, cb);
    }

    /**
     * This API is used to update a RocketMQ consumer group.
     * @param {ModifyRocketMQGroupRequest} req
     * @param {function(string, ModifyRocketMQGroupResponse):void} cb
     * @public
     */
    ModifyRocketMQGroup(req, cb) {
        let resp = new ModifyRocketMQGroupResponse();
        this.request("ModifyRocketMQGroup", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a CMQ topic.
     * @param {ModifyCmqTopicAttributeRequest} req
     * @param {function(string, ModifyCmqTopicAttributeResponse):void} cb
     * @public
     */
    ModifyCmqTopicAttribute(req, cb) {
        let resp = new ModifyCmqTopicAttributeResponse();
        this.request("ModifyCmqTopicAttribute", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a CMQ queue.
     * @param {ModifyCmqQueueAttributeRequest} req
     * @param {function(string, ModifyCmqQueueAttributeResponse):void} cb
     * @public
     */
    ModifyCmqQueueAttribute(req, cb) {
        let resp = new ModifyCmqQueueAttributeResponse();
        this.request("ModifyCmqQueueAttribute", req, resp, cb);
    }

    /**
     * This API is used to create a CMQ topic.
     * @param {CreateCmqTopicRequest} req
     * @param {function(string, CreateCmqTopicResponse):void} cb
     * @public
     */
    CreateCmqTopic(req, cb) {
        let resp = new CreateCmqTopicResponse();
        this.request("CreateCmqTopic", req, resp, cb);
    }

    /**
     * This API is used to query the CMQ subscription details.
     * @param {DescribeCmqSubscriptionDetailRequest} req
     * @param {function(string, DescribeCmqSubscriptionDetailResponse):void} cb
     * @public
     */
    DescribeCmqSubscriptionDetail(req, cb) {
        let resp = new DescribeCmqSubscriptionDetailResponse();
        this.request("DescribeCmqSubscriptionDetail", req, resp, cb);
    }

    /**
     * This API is used to enumerate the source queues of a CMQ dead letter queue.
     * @param {DescribeCmqDeadLetterSourceQueuesRequest} req
     * @param {function(string, DescribeCmqDeadLetterSourceQueuesResponse):void} cb
     * @public
     */
    DescribeCmqDeadLetterSourceQueues(req, cb) {
        let resp = new DescribeCmqDeadLetterSourceQueuesResponse();
        this.request("DescribeCmqDeadLetterSourceQueues", req, resp, cb);
    }

    /**
     * This API is used to delete a CMQ queue.
     * @param {DeleteCmqQueueRequest} req
     * @param {function(string, DeleteCmqQueueResponse):void} cb
     * @public
     */
    DeleteCmqQueue(req, cb) {
        let resp = new DeleteCmqQueueResponse();
        this.request("DeleteCmqQueue", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of producer information.
     * @param {DescribePublishersRequest} req
     * @param {function(string, DescribePublishersResponse):void} cb
     * @public
     */
    DescribePublishers(req, cb) {
        let resp = new DescribePublishersResponse();
        this.request("DescribePublishers", req, resp, cb);
    }

    /**
     * This API is used to create a RocketMQ cluster.
     * @param {CreateRocketMQClusterRequest} req
     * @param {function(string, CreateRocketMQClusterResponse):void} cb
     * @public
     */
    CreateRocketMQCluster(req, cb) {
        let resp = new CreateRocketMQClusterResponse();
        this.request("CreateRocketMQCluster", req, resp, cb);
    }

    /**
     * This API is used to delete an environment role.
     * @param {DeleteEnvironmentRolesRequest} req
     * @param {function(string, DeleteEnvironmentRolesResponse):void} cb
     * @public
     */
    DeleteEnvironmentRoles(req, cb) {
        let resp = new DeleteEnvironmentRolesResponse();
        this.request("DeleteEnvironmentRoles", req, resp, cb);
    }

    /**
     * This API is used to delete a RocketMQ consumer group.
     * @param {DeleteRocketMQGroupRequest} req
     * @param {function(string, DeleteRocketMQGroupResponse):void} cb
     * @public
     */
    DeleteRocketMQGroup(req, cb) {
        let resp = new DeleteRocketMQGroupResponse();
        this.request("DeleteRocketMQGroup", req, resp, cb);
    }

    /**
     * This API is used to send a CMQ topic message.
     * @param {PublishCmqMsgRequest} req
     * @param {function(string, PublishCmqMsgResponse):void} cb
     * @public
     */
    PublishCmqMsg(req, cb) {
        let resp = new PublishCmqMsgResponse();
        this.request("PublishCmqMsg", req, resp, cb);
    }

    /**
     * This API is used to update a RocketMQ namespace.
     * @param {ModifyRocketMQNamespaceRequest} req
     * @param {function(string, ModifyRocketMQNamespaceResponse):void} cb
     * @public
     */
    ModifyRocketMQNamespace(req, cb) {
        let resp = new ModifyRocketMQNamespaceResponse();
        this.request("ModifyRocketMQNamespace", req, resp, cb);
    }

    /**
     * This API is used to query the details of a CMQ queue.
     * @param {DescribeCmqQueueDetailRequest} req
     * @param {function(string, DescribeCmqQueueDetailResponse):void} cb
     * @public
     */
    DescribeCmqQueueDetail(req, cb) {
        let resp = new DescribeCmqQueueDetailResponse();
        this.request("DescribeCmqQueueDetail", req, resp, cb);
    }

    /**
     * This API is used to rewind a CMQ queue.
     * @param {RewindCmqQueueRequest} req
     * @param {function(string, RewindCmqQueueResponse):void} cb
     * @public
     */
    RewindCmqQueue(req, cb) {
        let resp = new RewindCmqQueueResponse();
        this.request("RewindCmqQueue", req, resp, cb);
    }

    /**
     * This API is used to test message sending. It cannot be used in the production environment.
     * @param {SendMsgRequest} req
     * @param {function(string, SendMsgResponse):void} cb
     * @public
     */
    SendMsg(req, cb) {
        let resp = new SendMsgResponse();
        this.request("SendMsg", req, resp, cb);
    }

    /**
     * This API is used to add a message topic in the specified partition and type.
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        let resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
    }

    /**
     * This API is used to create a RocketMQ topic.
     * @param {CreateRocketMQTopicRequest} req
     * @param {function(string, CreateRocketMQTopicResponse):void} cb
     * @public
     */
    CreateRocketMQTopic(req, cb) {
        let resp = new CreateRocketMQTopicResponse();
        this.request("CreateRocketMQTopic", req, resp, cb);
    }

    /**
     * This API is used to reset the consumption offset of a specified consumer group to a specified timestamp.
     * @param {ResetRocketMQConsumerOffSetRequest} req
     * @param {function(string, ResetRocketMQConsumerOffSetResponse):void} cb
     * @public
     */
    ResetRocketMQConsumerOffSet(req, cb) {
        let resp = new ResetRocketMQConsumerOffSetResponse();
        this.request("ResetRocketMQConsumerOffSet", req, resp, cb);
    }

    /**
     * This API is used to get the details of a cluster.
     * @param {DescribeClusterDetailRequest} req
     * @param {function(string, DescribeClusterDetailResponse):void} cb
     * @public
     */
    DescribeClusterDetail(req, cb) {
        let resp = new DescribeClusterDetailResponse();
        this.request("DescribeClusterDetail", req, resp, cb);
    }

    /**
     * This API is used to delete a RocketMQ cluster.
     * @param {DeleteRocketMQClusterRequest} req
     * @param {function(string, DeleteRocketMQClusterResponse):void} cb
     * @public
     */
    DeleteRocketMQCluster(req, cb) {
        let resp = new DeleteRocketMQClusterResponse();
        this.request("DeleteRocketMQCluster", req, resp, cb);
    }

    /**
     * This API is used to create a RocketMQ consumer group.
     * @param {CreateRocketMQGroupRequest} req
     * @param {function(string, CreateRocketMQGroupResponse):void} cb
     * @public
     */
    CreateRocketMQGroup(req, cb) {
        let resp = new CreateRocketMQGroupResponse();
        this.request("CreateRocketMQGroup", req, resp, cb);
    }

    /**
     * This API is used to rewind a message by timestamp, accurate down to the millisecond.
     * @param {ResetMsgSubOffsetByTimestampRequest} req
     * @param {function(string, ResetMsgSubOffsetByTimestampResponse):void} cb
     * @public
     */
    ResetMsgSubOffsetByTimestamp(req, cb) {
        let resp = new ResetMsgSubOffsetByTimestampResponse();
        this.request("ResetMsgSubOffsetByTimestamp", req, resp, cb);
    }

    /**
     * This API is used to acknowledge the message in the specified topic by the provided `MessageID`.
     * @param {AcknowledgeMessageRequest} req
     * @param {function(string, AcknowledgeMessageResponse):void} cb
     * @public
     */
    AcknowledgeMessage(req, cb) {
        let resp = new AcknowledgeMessageResponse();
        this.request("AcknowledgeMessage", req, resp, cb);
    }

    /**
     * This API is used to query the details of a CMQ topic.
     * @param {DescribeCmqTopicDetailRequest} req
     * @param {function(string, DescribeCmqTopicDetailResponse):void} cb
     * @public
     */
    DescribeCmqTopicDetail(req, cb) {
        let resp = new DescribeCmqTopicDetailResponse();
        this.request("DescribeCmqTopicDetail", req, resp, cb);
    }

    /**
     * This API is used to create a TDMQ namespace.
     * @param {CreateEnvironmentRequest} req
     * @param {function(string, CreateEnvironmentResponse):void} cb
     * @public
     */
    CreateEnvironment(req, cb) {
        let resp = new CreateEnvironmentResponse();
        this.request("CreateEnvironment", req, resp, cb);
    }

    /**
     * This API is used to delete one or multiple roles.
     * @param {DeleteRolesRequest} req
     * @param {function(string, DeleteRolesResponse):void} cb
     * @public
     */
    DeleteRoles(req, cb) {
        let resp = new DeleteRolesResponse();
        this.request("DeleteRoles", req, resp, cb);
    }

    /**
     * This API is used to receive messages sent to the specified topic.
     * @param {ReceiveMessageRequest} req
     * @param {function(string, ReceiveMessageResponse):void} cb
     * @public
     */
    ReceiveMessage(req, cb) {
        let resp = new ReceiveMessageResponse();
        this.request("ReceiveMessage", req, resp, cb);
    }

    /**
     * This API is used to clear the message tags of a subscriber.
     * @param {ClearCmqSubscriptionFilterTagsRequest} req
     * @param {function(string, ClearCmqSubscriptionFilterTagsResponse):void} cb
     * @public
     */
    ClearCmqSubscriptionFilterTags(req, cb) {
        let resp = new ClearCmqSubscriptionFilterTagsResponse();
        this.request("ClearCmqSubscriptionFilterTags", req, resp, cb);
    }

    /**
     * This API is used to delete a CMQ subscription.
     * @param {DeleteCmqSubscribeRequest} req
     * @param {function(string, DeleteCmqSubscribeResponse):void} cb
     * @public
     */
    DeleteCmqSubscribe(req, cb) {
        let resp = new DeleteCmqSubscribeResponse();
        this.request("DeleteCmqSubscribe", req, resp, cb);
    }

    /**
     * This API is used to send one message.
     * @param {SendMessagesRequest} req
     * @param {function(string, SendMessagesResponse):void} cb
     * @public
     */
    SendMessages(req, cb) {
        let resp = new SendMessagesResponse();
        this.request("SendMessages", req, resp, cb);
    }

    /**
     * This API is used to update a RocketMQ cluster.
     * @param {ModifyRocketMQClusterRequest} req
     * @param {function(string, ModifyRocketMQClusterResponse):void} cb
     * @public
     */
    ModifyRocketMQCluster(req, cb) {
        let resp = new ModifyRocketMQClusterResponse();
        this.request("ModifyRocketMQCluster", req, resp, cb);
    }

    /**
     * This API is used to send a CMQ message.
     * @param {SendCmqMsgRequest} req
     * @param {function(string, SendCmqMsgResponse):void} cb
     * @public
     */
    SendCmqMsg(req, cb) {
        let resp = new SendCmqMsgResponse();
        this.request("SendCmqMsg", req, resp, cb);
    }

    /**
     * This API is used to update a cluster.
     * @param {ModifyClusterRequest} req
     * @param {function(string, ModifyClusterResponse):void} cb
     * @public
     */
    ModifyCluster(req, cb) {
        let resp = new ModifyClusterResponse();
        this.request("ModifyCluster", req, resp, cb);
    }

    /**
     * This API is used to update a RocketMQ topic.
     * @param {ModifyRocketMQTopicRequest} req
     * @param {function(string, ModifyRocketMQTopicResponse):void} cb
     * @public
     */
    ModifyRocketMQTopic(req, cb) {
        let resp = new ModifyRocketMQTopicResponse();
        this.request("ModifyRocketMQTopic", req, resp, cb);
    }

    /**
     * This API is used to modify a role.
     * @param {ModifyRoleRequest} req
     * @param {function(string, ModifyRoleResponse):void} cb
     * @public
     */
    ModifyRole(req, cb) {
        let resp = new ModifyRoleResponse();
        this.request("ModifyRole", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of the specified namespace.
     * @param {ModifyEnvironmentAttributesRequest} req
     * @param {function(string, ModifyEnvironmentAttributesResponse):void} cb
     * @public
     */
    ModifyEnvironmentAttributes(req, cb) {
        let resp = new ModifyEnvironmentAttributesResponse();
        this.request("ModifyEnvironmentAttributes", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a CMQ subscription.
     * @param {ModifyCmqSubscriptionAttributeRequest} req
     * @param {function(string, ModifyCmqSubscriptionAttributeResponse):void} cb
     * @public
     */
    ModifyCmqSubscriptionAttribute(req, cb) {
        let resp = new ModifyCmqSubscriptionAttributeResponse();
        this.request("ModifyCmqSubscriptionAttribute", req, resp, cb);
    }

    /**
     * This API is used to get the list of roles.
     * @param {DescribeRolesRequest} req
     * @param {function(string, DescribeRolesResponse):void} cb
     * @public
     */
    DescribeRoles(req, cb) {
        let resp = new DescribeRolesResponse();
        this.request("DescribeRoles", req, resp, cb);
    }

    /**
     * This API is used to unbind a CMQ dead letter queue.
     * @param {UnbindCmqDeadLetterRequest} req
     * @param {function(string, UnbindCmqDeadLetterResponse):void} cb
     * @public
     */
    UnbindCmqDeadLetter(req, cb) {
        let resp = new UnbindCmqDeadLetterResponse();
        this.request("UnbindCmqDeadLetter", req, resp, cb);
    }

    /**
     * This API is used to create a subscription to a topic.
     * @param {CreateSubscriptionRequest} req
     * @param {function(string, CreateSubscriptionResponse):void} cb
     * @public
     */
    CreateSubscription(req, cb) {
        let resp = new CreateSubscriptionResponse();
        this.request("CreateSubscription", req, resp, cb);
    }

    /**
     * This API is used to create a RocketMQ namespace.
     * @param {CreateRocketMQNamespaceRequest} req
     * @param {function(string, CreateRocketMQNamespaceResponse):void} cb
     * @public
     */
    CreateRocketMQNamespace(req, cb) {
        let resp = new CreateRocketMQNamespaceResponse();
        this.request("CreateRocketMQNamespace", req, resp, cb);
    }

    /**
     * This API is used to get the information of a specific RocketMQ cluster.
     * @param {DescribeRocketMQClusterRequest} req
     * @param {function(string, DescribeRocketMQClusterResponse):void} cb
     * @public
     */
    DescribeRocketMQCluster(req, cb) {
        let resp = new DescribeRocketMQClusterResponse();
        this.request("DescribeRocketMQCluster", req, resp, cb);
    }

    /**
     * This API is used to batch send messages.

Note: the batch message sending API in TDMQ is to package messages into a batch on the service side of TDMQ-HTTP and then send the batch as a TCP request inside the service. Therefore, when using this API, you should still follow the logic of sending a single message: each message is an independent HTTP request, and multiple HTTP requests are aggregated into one batch inside the TDMQ-HTTP service and then sent to the server; that is, batch sending messages is the same as sending a single message in terms of usage, and batch aggregation is completed inside the TDMQ-HTTP service.
     * @param {SendBatchMessagesRequest} req
     * @param {function(string, SendBatchMessagesResponse):void} cb
     * @public
     */
    SendBatchMessages(req, cb) {
        let resp = new SendBatchMessagesResponse();
        this.request("SendBatchMessages", req, resp, cb);
    }

    /**
     * This API is used to get the attributes of the specified namespace.
     * @param {DescribeEnvironmentAttributesRequest} req
     * @param {function(string, DescribeEnvironmentAttributesResponse):void} cb
     * @public
     */
    DescribeEnvironmentAttributes(req, cb) {
        let resp = new DescribeEnvironmentAttributesResponse();
        this.request("DescribeEnvironmentAttributes", req, resp, cb);
    }

    /**
     * This API is used to create a CMQ subscription.
     * @param {CreateCmqSubscribeRequest} req
     * @param {function(string, CreateCmqSubscribeResponse):void} cb
     * @public
     */
    CreateCmqSubscribe(req, cb) {
        let resp = new CreateCmqSubscribeResponse();
        this.request("CreateCmqSubscribe", req, resp, cb);
    }

    /**
     * This API is used to create an environment role.
     * @param {CreateEnvironmentRoleRequest} req
     * @param {function(string, CreateEnvironmentRoleResponse):void} cb
     * @public
     */
    CreateEnvironmentRole(req, cb) {
        let resp = new CreateEnvironmentRoleResponse();
        this.request("CreateEnvironmentRole", req, resp, cb);
    }

    /**
     * This API is used to obtain message production overview information.
     * @param {DescribePublisherSummaryRequest} req
     * @param {function(string, DescribePublisherSummaryResponse):void} cb
     * @public
     */
    DescribePublisherSummary(req, cb) {
        let resp = new DescribePublisherSummaryResponse();
        this.request("DescribePublisherSummary", req, resp, cb);
    }

    /**
     * This API is used to modify an environment role.
     * @param {ModifyEnvironmentRoleRequest} req
     * @param {function(string, ModifyEnvironmentRoleResponse):void} cb
     * @public
     */
    ModifyEnvironmentRole(req, cb) {
        let resp = new ModifyEnvironmentRoleResponse();
        this.request("ModifyEnvironmentRole", req, resp, cb);
    }

    /**
     * This API is used to delete a RocketMQ namespace.
     * @param {DeleteRocketMQNamespaceRequest} req
     * @param {function(string, DeleteRocketMQNamespaceResponse):void} cb
     * @public
     */
    DeleteRocketMQNamespace(req, cb) {
        let resp = new DeleteRocketMQNamespaceResponse();
        this.request("DeleteRocketMQNamespace", req, resp, cb);
    }

    /**
     * This API is used to delete a cluster.
     * @param {DeleteClusterRequest} req
     * @param {function(string, DeleteClusterResponse):void} cb
     * @public
     */
    DeleteCluster(req, cb) {
        let resp = new DeleteClusterResponse();
        this.request("DeleteCluster", req, resp, cb);
    }


}
module.exports = TdmqClient;
