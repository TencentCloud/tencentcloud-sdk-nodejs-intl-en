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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const RocketMQNamespace = models.RocketMQNamespace;
const CreateRabbitMQBindingResponse = models.CreateRabbitMQBindingResponse;
const ModifyRocketMQInstanceSpecRequest = models.ModifyRocketMQInstanceSpecRequest;
const DeleteClusterResponse = models.DeleteClusterResponse;
const CreateCmqTopicRequest = models.CreateCmqTopicRequest;
const RocketMQVipInstance = models.RocketMQVipInstance;
const DescribeCmqQueuesResponse = models.DescribeCmqQueuesResponse;
const DescribeRabbitMQNodeListRequest = models.DescribeRabbitMQNodeListRequest;
const DeleteCmqQueueResponse = models.DeleteCmqQueueResponse;
const DescribeRocketMQEnvironmentRolesRequest = models.DescribeRocketMQEnvironmentRolesRequest;
const DeleteRocketMQGroupRequest = models.DeleteRocketMQGroupRequest;
const RocketMQGroup = models.RocketMQGroup;
const ModifyRabbitMQUserRequest = models.ModifyRabbitMQUserRequest;
const CreateSubscriptionRequest = models.CreateSubscriptionRequest;
const RabbitMQVipInstance = models.RabbitMQVipInstance;
const RabbitMQClusterInfo = models.RabbitMQClusterInfo;
const RabbitMQVirtualHostStatistics = models.RabbitMQVirtualHostStatistics;
const DescribeRabbitMQQueuesResponse = models.DescribeRabbitMQQueuesResponse;
const Tag = models.Tag;
const DescribeRocketMQNamespacesRequest = models.DescribeRocketMQNamespacesRequest;
const ModifyRocketMQClusterResponse = models.ModifyRocketMQClusterResponse;
const DescribeRocketMQTopicStatsResponse = models.DescribeRocketMQTopicStatsResponse;
const CreateEnvironmentRequest = models.CreateEnvironmentRequest;
const CreateCmqSubscribeResponse = models.CreateCmqSubscribeResponse;
const DescribeClustersRequest = models.DescribeClustersRequest;
const ModifyEnvironmentAttributesRequest = models.ModifyEnvironmentAttributesRequest;
const RocketMQDataPoint = models.RocketMQDataPoint;
const DescribeSubscriptionsResponse = models.DescribeSubscriptionsResponse;
const ModifyRocketMQClusterRequest = models.ModifyRocketMQClusterRequest;
const SendBatchMessagesResponse = models.SendBatchMessagesResponse;
const DescribeRocketMQVipInstanceDetailResponse = models.DescribeRocketMQVipInstanceDetailResponse;
const DescribeRabbitMQVirtualHostResponse = models.DescribeRabbitMQVirtualHostResponse;
const RabbitMQPermission = models.RabbitMQPermission;
const CreateRocketMQClusterRequest = models.CreateRocketMQClusterRequest;
const DescribeClusterDetailRequest = models.DescribeClusterDetailRequest;
const DeleteRocketMQRolesResponse = models.DeleteRocketMQRolesResponse;
const DeleteRocketMQTopicResponse = models.DeleteRocketMQTopicResponse;
const Publisher = models.Publisher;
const ModifyRoleRequest = models.ModifyRoleRequest;
const DescribeRocketMQMsgRequest = models.DescribeRocketMQMsgRequest;
const SendMessagesResponse = models.SendMessagesResponse;
const CreateTopicRequest = models.CreateTopicRequest;
const DescribeCmqTopicsResponse = models.DescribeCmqTopicsResponse;
const DescribeRocketMQMsgTraceRequest = models.DescribeRocketMQMsgTraceRequest;
const ModifyRocketMQGroupRequest = models.ModifyRocketMQGroupRequest;
const DescribeCmqTopicDetailRequest = models.DescribeCmqTopicDetailRequest;
const UnbindCmqDeadLetterResponse = models.UnbindCmqDeadLetterResponse;
const ModifyRocketMQEnvironmentRoleRequest = models.ModifyRocketMQEnvironmentRoleRequest;
const ModifyRocketMQNamespaceResponse = models.ModifyRocketMQNamespaceResponse;
const DimensionInstance = models.DimensionInstance;
const DeleteEnvironmentsRequest = models.DeleteEnvironmentsRequest;
const DescribeRocketMQClustersRequest = models.DescribeRocketMQClustersRequest;
const SendRocketMQMessageRequest = models.SendRocketMQMessageRequest;
const CreateClusterResponse = models.CreateClusterResponse;
const DeleteRocketMQNamespaceRequest = models.DeleteRocketMQNamespaceRequest;
const DeleteRabbitMQPermissionRequest = models.DeleteRabbitMQPermissionRequest;
const CreateTopicResponse = models.CreateTopicResponse;
const ReceiveMessageResponse = models.ReceiveMessageResponse;
const CreateRocketMQVipInstanceRequest = models.CreateRocketMQVipInstanceRequest;
const PulsarNetworkAccessPointInfo = models.PulsarNetworkAccessPointInfo;
const DescribeRabbitMQVipInstanceRequest = models.DescribeRabbitMQVipInstanceRequest;
const DescribeRabbitMQExchangesRequest = models.DescribeRabbitMQExchangesRequest;
const DeleteTopicsRequest = models.DeleteTopicsRequest;
const DeleteRocketMQEnvironmentRolesResponse = models.DeleteRocketMQEnvironmentRolesResponse;
const DeleteCmqSubscribeRequest = models.DeleteCmqSubscribeRequest;
const RocketMQClusterConfig = models.RocketMQClusterConfig;
const SendMsgResponse = models.SendMsgResponse;
const DescribeMsgRequest = models.DescribeMsgRequest;
const DeleteRabbitMQPermissionResponse = models.DeleteRabbitMQPermissionResponse;
const DeleteRabbitMQBindingResponse = models.DeleteRabbitMQBindingResponse;
const DescribePulsarProInstancesRequest = models.DescribePulsarProInstancesRequest;
const VpcEndpointInfo = models.VpcEndpointInfo;
const ClearCmqQueueResponse = models.ClearCmqQueueResponse;
const DescribeTopicMsgsRequest = models.DescribeTopicMsgsRequest;
const DeleteCmqQueueRequest = models.DeleteCmqQueueRequest;
const DeleteRabbitMQUserResponse = models.DeleteRabbitMQUserResponse;
const SetRocketMQPublicAccessPointResponse = models.SetRocketMQPublicAccessPointResponse;
const DescribeRocketMQTopicMsgsRequest = models.DescribeRocketMQTopicMsgsRequest;
const ModifyEnvironmentRoleRequest = models.ModifyEnvironmentRoleRequest;
const DescribeRocketMQRolesResponse = models.DescribeRocketMQRolesResponse;
const SubscriptionTopic = models.SubscriptionTopic;
const ModifyRocketMQRoleRequest = models.ModifyRocketMQRoleRequest;
const DescribeMqMsgTraceRequest = models.DescribeMqMsgTraceRequest;
const SendBatchMessagesRequest = models.SendBatchMessagesRequest;
const DescribeRabbitMQNodeListResponse = models.DescribeRabbitMQNodeListResponse;
const ProducerInfo = models.ProducerInfo;
const ProducerLog = models.ProducerLog;
const DescribePublisherSummaryRequest = models.DescribePublisherSummaryRequest;
const PulsarProClusterInfo = models.PulsarProClusterInfo;
const ModifyRocketMQGroupResponse = models.ModifyRocketMQGroupResponse;
const EnvironmentRole = models.EnvironmentRole;
const DeleteRabbitMQVipInstanceResponse = models.DeleteRabbitMQVipInstanceResponse;
const DetailedRolePerm = models.DetailedRolePerm;
const RabbitMQClusterAccessInfo = models.RabbitMQClusterAccessInfo;
const DescribeBindClustersResponse = models.DescribeBindClustersResponse;
const ExportRocketMQMessageDetailResponse = models.ExportRocketMQMessageDetailResponse;
const ModifyRabbitMQVirtualHostRequest = models.ModifyRabbitMQVirtualHostRequest;
const DescribeRocketMQNamespacesResponse = models.DescribeRocketMQNamespacesResponse;
const CreateRabbitMQVipInstanceRequest = models.CreateRabbitMQVipInstanceRequest;
const DescribeRabbitMQPermissionResponse = models.DescribeRabbitMQPermissionResponse;
const DeleteClusterRequest = models.DeleteClusterRequest;
const CmqSubscription = models.CmqSubscription;
const VpcInfo = models.VpcInfo;
const DeleteCmqTopicResponse = models.DeleteCmqTopicResponse;
const CreateRocketMQNamespaceRequest = models.CreateRocketMQNamespaceRequest;
const RocketMQSubscription = models.RocketMQSubscription;
const ExchangeQuota = models.ExchangeQuota;
const ModifyRabbitMQVirtualHostResponse = models.ModifyRabbitMQVirtualHostResponse;
const RabbitMQQueueListConsumerDetailInfo = models.RabbitMQQueueListConsumerDetailInfo;
const CreateRocketMQRoleResponse = models.CreateRocketMQRoleResponse;
const CreateSubscriptionResponse = models.CreateSubscriptionResponse;
const DescribeCmqSubscriptionDetailRequest = models.DescribeCmqSubscriptionDetailRequest;
const DescribeRocketMQClusterResponse = models.DescribeRocketMQClusterResponse;
const ServerLog = models.ServerLog;
const DescribeMsgTraceResponse = models.DescribeMsgTraceResponse;
const ModifyClusterRequest = models.ModifyClusterRequest;
const CreateRocketMQVipInstanceResponse = models.CreateRocketMQVipInstanceResponse;
const AcknowledgeMessageRequest = models.AcknowledgeMessageRequest;
const RabbitMQQueueListInfo = models.RabbitMQQueueListInfo;
const DescribeMsgResponse = models.DescribeMsgResponse;
const CreateProClusterResponse = models.CreateProClusterResponse;
const ModifyRocketMQInstanceRequest = models.ModifyRocketMQInstanceRequest;
const DescribeEnvironmentsRequest = models.DescribeEnvironmentsRequest;
const CreateProClusterRequest = models.CreateProClusterRequest;
const DescribeRabbitMQVipInstancesResponse = models.DescribeRabbitMQVipInstancesResponse;
const DeleteRolesRequest = models.DeleteRolesRequest;
const ClearCmqQueueRequest = models.ClearCmqQueueRequest;
const CreateRocketMQEnvironmentRoleRequest = models.CreateRocketMQEnvironmentRoleRequest;
const SetRocketMQPublicAccessPointRequest = models.SetRocketMQPublicAccessPointRequest;
const DeleteEnvironmentsResponse = models.DeleteEnvironmentsResponse;
const DescribeRabbitMQBindingsResponse = models.DescribeRabbitMQBindingsResponse;
const FilterSubscription = models.FilterSubscription;
const DescribeRocketMQTopicResponse = models.DescribeRocketMQTopicResponse;
const TopicStats = models.TopicStats;
const DescribeClustersResponse = models.DescribeClustersResponse;
const ClearCmqSubscriptionFilterTagsRequest = models.ClearCmqSubscriptionFilterTagsRequest;
const CreateRocketMQGroupResponse = models.CreateRocketMQGroupResponse;
const ModifyRocketMQNamespaceRequest = models.ModifyRocketMQNamespaceRequest;
const ModifyRocketMQTopicResponse = models.ModifyRocketMQTopicResponse;
const DescribeRocketMQProducersRequest = models.DescribeRocketMQProducersRequest;
const DeleteRocketMQGroupResponse = models.DeleteRocketMQGroupResponse;
const PulsarProInstance = models.PulsarProInstance;
const DescribeRocketMQClusterRequest = models.DescribeRocketMQClusterRequest;
const EnvironmentRoleSet = models.EnvironmentRoleSet;
const DescribeEnvironmentsResponse = models.DescribeEnvironmentsResponse;
const ModifyRocketMQInstanceSpecResponse = models.ModifyRocketMQInstanceSpecResponse;
const RocketMQInstanceConfig = models.RocketMQInstanceConfig;
const DescribeCmqTopicsRequest = models.DescribeCmqTopicsRequest;
const ConsumerLog = models.ConsumerLog;
const DescribeRocketMQTopUsagesResponse = models.DescribeRocketMQTopUsagesResponse;
const CreateEnvironmentRoleResponse = models.CreateEnvironmentRoleResponse;
const PrometheusEndpointInfo = models.PrometheusEndpointInfo;
const Cluster = models.Cluster;
const RocketMQMsgLog = models.RocketMQMsgLog;
const CreateRocketMQClusterResponse = models.CreateRocketMQClusterResponse;
const DeleteRocketMQNamespaceResponse = models.DeleteRocketMQNamespaceResponse;
const CreateRocketMQTopicRequest = models.CreateRocketMQTopicRequest;
const DescribeRocketMQVipInstancesResponse = models.DescribeRocketMQVipInstancesResponse;
const DeleteRocketMQClusterRequest = models.DeleteRocketMQClusterRequest;
const DescribePulsarProInstancesResponse = models.DescribePulsarProInstancesResponse;
const DescribeMsgTraceRequest = models.DescribeMsgTraceRequest;
const DeleteRabbitMQBindingRequest = models.DeleteRabbitMQBindingRequest;
const DescribeBindClustersRequest = models.DescribeBindClustersRequest;
const CreateRabbitMQVirtualHostRequest = models.CreateRabbitMQVirtualHostRequest;
const DescribeRabbitMQQueueDetailRequest = models.DescribeRabbitMQQueueDetailRequest;
const RocketMQTopicDistribution = models.RocketMQTopicDistribution;
const CreateRoleRequest = models.CreateRoleRequest;
const DescribeEnvironmentAttributesResponse = models.DescribeEnvironmentAttributesResponse;
const DescribeRocketMQRolesRequest = models.DescribeRocketMQRolesRequest;
const CreateRocketMQNamespaceResponse = models.CreateRocketMQNamespaceResponse;
const ModifyRocketMQEnvironmentRoleResponse = models.ModifyRocketMQEnvironmentRoleResponse;
const CreateCmqQueueResponse = models.CreateCmqQueueResponse;
const DeleteRabbitMQVipInstanceRequest = models.DeleteRabbitMQVipInstanceRequest;
const Filter = models.Filter;
const DescribeRocketMQPublicAccessMonitorDataRequest = models.DescribeRocketMQPublicAccessMonitorDataRequest;
const DescribeRolesResponse = models.DescribeRolesResponse;
const DescribeRabbitMQPermissionRequest = models.DescribeRabbitMQPermissionRequest;
const DeleteRabbitMQUserRequest = models.DeleteRabbitMQUserRequest;
const DescribeSubscriptionsRequest = models.DescribeSubscriptionsRequest;
const InstanceNodeDistribution = models.InstanceNodeDistribution;
const CreateRocketMQGroupRequest = models.CreateRocketMQGroupRequest;
const Role = models.Role;
const DescribeTopicMsgsResponse = models.DescribeTopicMsgsResponse;
const ModifyCmqSubscriptionAttributeResponse = models.ModifyCmqSubscriptionAttributeResponse;
const SendCmqMsgRequest = models.SendCmqMsgRequest;
const RabbitMQUserQuota = models.RabbitMQUserQuota;
const CreateRabbitMQVirtualHostResponse = models.CreateRabbitMQVirtualHostResponse;
const RewindCmqQueueResponse = models.RewindCmqQueueResponse;
const PublicAccessRule = models.PublicAccessRule;
const RabbitMQClusterWhiteListInfo = models.RabbitMQClusterWhiteListInfo;
const DeleteProClusterRequest = models.DeleteProClusterRequest;
const DescribeCmqTopicDetailResponse = models.DescribeCmqTopicDetailResponse;
const DescribeRocketMQTopicsRequest = models.DescribeRocketMQTopicsRequest;
const ClientSubscriptionInfo = models.ClientSubscriptionInfo;
const DescribeCmqSubscriptionDetailResponse = models.DescribeCmqSubscriptionDetailResponse;
const VpcBindRecord = models.VpcBindRecord;
const DescribeRocketMQMsgResponse = models.DescribeRocketMQMsgResponse;
const DescribeEnvironmentAttributesRequest = models.DescribeEnvironmentAttributesRequest;
const ModifyPublicNetworkSecurityPolicyResponse = models.ModifyPublicNetworkSecurityPolicyResponse;
const DeleteRabbitMQVirtualHostResponse = models.DeleteRabbitMQVirtualHostResponse;
const DescribePublishersRequest = models.DescribePublishersRequest;
const RabbitMQBindingListInfo = models.RabbitMQBindingListInfo;
const ModifyPublicNetworkSecurityPolicyRequest = models.ModifyPublicNetworkSecurityPolicyRequest;
const ModifyRoleResponse = models.ModifyRoleResponse;
const DescribeRocketMQTopicStatsRequest = models.DescribeRocketMQTopicStatsRequest;
const SendRocketMQMessageResponse = models.SendRocketMQMessageResponse;
const PulsarProClusterSpecInfo = models.PulsarProClusterSpecInfo;
const Subscription = models.Subscription;
const DimensionOpt = models.DimensionOpt;
const RocketMQMessageTrack = models.RocketMQMessageTrack;
const ReceiveMessageRequest = models.ReceiveMessageRequest;
const DescribeTopicsRequest = models.DescribeTopicsRequest;
const DescribeEnvironmentRolesResponse = models.DescribeEnvironmentRolesResponse;
const DescribeRocketMQPublicAccessPointResponse = models.DescribeRocketMQPublicAccessPointResponse;
const DescribeRabbitMQExchangesResponse = models.DescribeRabbitMQExchangesResponse;
const DescribeRabbitMQQueueDetailResponse = models.DescribeRabbitMQQueueDetailResponse;
const DescribeRocketMQTopicMsgsResponse = models.DescribeRocketMQTopicMsgsResponse;
const SecurityPolicy = models.SecurityPolicy;
const DescribeRocketMQTopUsagesRequest = models.DescribeRocketMQTopUsagesRequest;
const DeleteRolesResponse = models.DeleteRolesResponse;
const RetryRocketMQDlqMessageResponse = models.RetryRocketMQDlqMessageResponse;
const DescribeRabbitMQBindingsRequest = models.DescribeRabbitMQBindingsRequest;
const ModifyRocketMQTopicRequest = models.ModifyRocketMQTopicRequest;
const RocketMQClusterInfo = models.RocketMQClusterInfo;
const ModifyRocketMQInstanceResponse = models.ModifyRocketMQInstanceResponse;
const PartitionsTopic = models.PartitionsTopic;
const ResetMsgSubOffsetByTimestampResponse = models.ResetMsgSubOffsetByTimestampResponse;
const SendMessagesRequest = models.SendMessagesRequest;
const CreateRocketMQRoleRequest = models.CreateRocketMQRoleRequest;
const DescribeRocketMQProducersResponse = models.DescribeRocketMQProducersResponse;
const DescribeRabbitMQVipInstanceResponse = models.DescribeRabbitMQVipInstanceResponse;
const ModifyCmqSubscriptionAttributeRequest = models.ModifyCmqSubscriptionAttributeRequest;
const ModifyTopicResponse = models.ModifyTopicResponse;
const VirtualHostQuota = models.VirtualHostQuota;
const CertificateInfo = models.CertificateInfo;
const DescribeRocketMQVipInstanceDetailRequest = models.DescribeRocketMQVipInstanceDetailRequest;
const DeleteRocketMQClusterResponse = models.DeleteRocketMQClusterResponse;
const CreateCmqTopicResponse = models.CreateCmqTopicResponse;
const CmqDeadLetterSource = models.CmqDeadLetterSource;
const DescribeRocketMQTopicRequest = models.DescribeRocketMQTopicRequest;
const ResetMsgSubOffsetByTimestampRequest = models.ResetMsgSubOffsetByTimestampRequest;
const DescribeBindVpcsResponse = models.DescribeBindVpcsResponse;
const ModifyRabbitMQPermissionRequest = models.ModifyRabbitMQPermissionRequest;
const ConsumersSchedule = models.ConsumersSchedule;
const DescribeRocketMQClustersResponse = models.DescribeRocketMQClustersResponse;
const TraceResult = models.TraceResult;
const DescribeRabbitMQQueuesRequest = models.DescribeRabbitMQQueuesRequest;
const SendMsgRequest = models.SendMsgRequest;
const DescribeRocketMQEnvironmentRolesResponse = models.DescribeRocketMQEnvironmentRolesResponse;
const CreateRoleResponse = models.CreateRoleResponse;
const ModifyRabbitMQUserResponse = models.ModifyRabbitMQUserResponse;
const Sort = models.Sort;
const ConsumerLogs = models.ConsumerLogs;
const DescribeMqMsgTraceResponse = models.DescribeMqMsgTraceResponse;
const CreateRabbitMQUserRequest = models.CreateRabbitMQUserRequest;
const SendCmqMsgResponse = models.SendCmqMsgResponse;
const TagFilter = models.TagFilter;
const ModifyCmqQueueAttributeRequest = models.ModifyCmqQueueAttributeRequest;
const RabbitMQClusterSpecInfo = models.RabbitMQClusterSpecInfo;
const DeleteCmqSubscribeResponse = models.DeleteCmqSubscribeResponse;
const DeleteRocketMQEnvironmentRolesRequest = models.DeleteRocketMQEnvironmentRolesRequest;
const VpcConfig = models.VpcConfig;
const DescribeRabbitMQVipInstancesRequest = models.DescribeRabbitMQVipInstancesRequest;
const DescribeClusterDetailResponse = models.DescribeClusterDetailResponse;
const DescribeRabbitMQVirtualHostRequest = models.DescribeRabbitMQVirtualHostRequest;
const DeleteRocketMQRolesRequest = models.DeleteRocketMQRolesRequest;
const CmqDeadLetterPolicy = models.CmqDeadLetterPolicy;
const QueueQuota = models.QueueQuota;
const ExportRocketMQMessageDetailRequest = models.ExportRocketMQMessageDetailRequest;
const CreateRabbitMQUserResponse = models.CreateRabbitMQUserResponse;
const ModifyRocketMQRoleResponse = models.ModifyRocketMQRoleResponse;
const CreateRabbitMQBindingRequest = models.CreateRabbitMQBindingRequest;
const DescribePulsarProInstanceDetailRequest = models.DescribePulsarProInstanceDetailRequest;
const BindCluster = models.BindCluster;
const ModifyClusterResponse = models.ModifyClusterResponse;
const RocketMQClusterRecentStats = models.RocketMQClusterRecentStats;
const DescribeRocketMQPublicAccessPointRequest = models.DescribeRocketMQPublicAccessPointRequest;
const RabbitMQPrivateNode = models.RabbitMQPrivateNode;
const RetryRocketMQDlqMessageRequest = models.RetryRocketMQDlqMessageRequest;
const DescribeRocketMQTopicsByGroupRequest = models.DescribeRocketMQTopicsByGroupRequest;
const DescribeRocketMQPublicAccessMonitorDataResponse = models.DescribeRocketMQPublicAccessMonitorDataResponse;
const RabbitMQVirtualHostInfo = models.RabbitMQVirtualHostInfo;
const CmqQueue = models.CmqQueue;
const CreateEnvironmentResponse = models.CreateEnvironmentResponse;
const Topic = models.Topic;
const ModifyRabbitMQPermissionResponse = models.ModifyRabbitMQPermissionResponse;
const DescribeCmqQueueDetailResponse = models.DescribeCmqQueueDetailResponse;
const ModifyCmqTopicAttributeResponse = models.ModifyCmqTopicAttributeResponse;
const RocketMQTopic = models.RocketMQTopic;
const DeleteRocketMQVipInstanceResponse = models.DeleteRocketMQVipInstanceResponse;
const DescribeRabbitMQUserResponse = models.DescribeRabbitMQUserResponse;
const DescribeTopicsResponse = models.DescribeTopicsResponse;
const PublishCmqMsgResponse = models.PublishCmqMsgResponse;
const AcknowledgeMessageResponse = models.AcknowledgeMessageResponse;
const DeleteEnvironmentRolesResponse = models.DeleteEnvironmentRolesResponse;
const PublishCmqMsgRequest = models.PublishCmqMsgRequest;
const ModifyCmqTopicAttributeRequest = models.ModifyCmqTopicAttributeRequest;
const DeleteTopicsResponse = models.DeleteTopicsResponse;
const RewindCmqQueueRequest = models.RewindCmqQueueRequest;
const DeleteRocketMQVipInstanceRequest = models.DeleteRocketMQVipInstanceRequest;
const MsgLog = models.MsgLog;
const CmqTopic = models.CmqTopic;
const RabbitMQExchangeListInfo = models.RabbitMQExchangeListInfo;
const DescribeBindVpcsRequest = models.DescribeBindVpcsRequest;
const TopicRecord = models.TopicRecord;
const DescribeEnvironmentRolesRequest = models.DescribeEnvironmentRolesRequest;
const DescribeRabbitMQUserRequest = models.DescribeRabbitMQUserRequest;
const DescribeRocketMQTopicsResponse = models.DescribeRocketMQTopicsResponse;
const Environment = models.Environment;
const RocketMQClusterDetail = models.RocketMQClusterDetail;
const DescribeRocketMQGroupsResponse = models.DescribeRocketMQGroupsResponse;
const CreateClusterRequest = models.CreateClusterRequest;
const DeleteProClusterResponse = models.DeleteProClusterResponse;
const ModifyCmqQueueAttributeResponse = models.ModifyCmqQueueAttributeResponse;
const DescribeCmqQueuesRequest = models.DescribeCmqQueuesRequest;
const ResetRocketMQConsumerOffSetResponse = models.ResetRocketMQConsumerOffSetResponse;
const RabbitMQUser = models.RabbitMQUser;
const DescribeRocketMQVipInstancesRequest = models.DescribeRocketMQVipInstancesRequest;
const DeleteRabbitMQVirtualHostRequest = models.DeleteRabbitMQVirtualHostRequest;
const CreateRabbitMQVipInstanceResponse = models.CreateRabbitMQVipInstanceResponse;
const ModifyEnvironmentAttributesResponse = models.ModifyEnvironmentAttributesResponse;
const CmqTransactionPolicy = models.CmqTransactionPolicy;
const ModifyTopicRequest = models.ModifyTopicRequest;
const Consumer = models.Consumer;
const CreateCmqSubscribeRequest = models.CreateCmqSubscribeRequest;
const DeleteSubscriptionsResponse = models.DeleteSubscriptionsResponse;
const DeleteRocketMQTopicRequest = models.DeleteRocketMQTopicRequest;
const RetentionPolicy = models.RetentionPolicy;
const DescribePublishersResponse = models.DescribePublishersResponse;
const DescribeCmqQueueDetailRequest = models.DescribeCmqQueueDetailRequest;
const CreateRocketMQEnvironmentRoleResponse = models.CreateRocketMQEnvironmentRoleResponse;
const DescribeRocketMQTopicsByGroupResponse = models.DescribeRocketMQTopicsByGroupResponse;
const DeleteEnvironmentRolesRequest = models.DeleteEnvironmentRolesRequest;
const CreateRocketMQTopicResponse = models.CreateRocketMQTopicResponse;
const CreateCmqQueueRequest = models.CreateCmqQueueRequest;
const ModifyEnvironmentRoleResponse = models.ModifyEnvironmentRoleResponse;
const DescribeRocketMQGroupsRequest = models.DescribeRocketMQGroupsRequest;
const DescribeRocketMQMsgTraceResponse = models.DescribeRocketMQMsgTraceResponse;
const ClearCmqSubscriptionFilterTagsResponse = models.ClearCmqSubscriptionFilterTagsResponse;
const DescribePublisherSummaryResponse = models.DescribePublisherSummaryResponse;
const DeleteCmqTopicRequest = models.DeleteCmqTopicRequest;
const DescribePulsarProInstanceDetailResponse = models.DescribePulsarProInstanceDetailResponse;
const UnbindCmqDeadLetterRequest = models.UnbindCmqDeadLetterRequest;
const DescribeRolesRequest = models.DescribeRolesRequest;
const DeleteSubscriptionsRequest = models.DeleteSubscriptionsRequest;
const ResetRocketMQConsumerOffSetRequest = models.ResetRocketMQConsumerOffSetRequest;
const CreateEnvironmentRoleRequest = models.CreateEnvironmentRoleRequest;


/**
 * tdmq client
 * @class
 */
class TdmqClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tdmq.intl.tencentcloudapi.com", "2020-02-17", credential, region, profile);
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
     * This API is used to get the list of RocketMQ namespaces.
     * @param {DescribeRocketMQNamespacesRequest} req
     * @param {function(string, DescribeRocketMQNamespacesResponse):void} cb
     * @public
     */
    DescribeRocketMQNamespaces(req, cb) {
        let resp = new DescribeRocketMQNamespacesResponse();
        this.request("DescribeRocketMQNamespaces", req, resp, cb);
    }

    /**
     * This API is used to query the list of TDMQ for RabbitMQ exchanges.
     * @param {DescribeRabbitMQExchangesRequest} req
     * @param {function(string, DescribeRabbitMQExchangesResponse):void} cb
     * @public
     */
    DescribeRabbitMQExchanges(req, cb) {
        let resp = new DescribeRabbitMQExchangesResponse();
        this.request("DescribeRabbitMQExchanges", req, resp, cb);
    }

    /**
     * Queries message trajectory
     * @param {DescribeRocketMQMsgTraceRequest} req
     * @param {function(string, DescribeRocketMQMsgTraceResponse):void} cb
     * @public
     */
    DescribeRocketMQMsgTrace(req, cb) {
        let resp = new DescribeRocketMQMsgTraceResponse();
        this.request("DescribeRocketMQMsgTrace", req, resp, cb);
    }

    /**
     * This API is used to create a role.
     * @param {CreateRocketMQRoleRequest} req
     * @param {function(string, CreateRocketMQRoleResponse):void} cb
     * @public
     */
    CreateRocketMQRole(req, cb) {
        let resp = new CreateRocketMQRoleResponse();
        this.request("CreateRocketMQRole", req, resp, cb);
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
     * This API is used to modify a TDMQ for RabbitMQ vhost.
     * @param {ModifyRabbitMQVirtualHostRequest} req
     * @param {function(string, ModifyRabbitMQVirtualHostResponse):void} cb
     * @public
     */
    ModifyRabbitMQVirtualHost(req, cb) {
        let resp = new ModifyRabbitMQVirtualHostResponse();
        this.request("ModifyRabbitMQVirtualHost", req, resp, cb);
    }

    /**
     * This API is used to enumerate all CMQ topics.
     * @param {DescribeCmqTopicsRequest} req
     * @param {function(string, DescribeCmqTopicsResponse):void} cb
     * @public
     */
    DescribeCmqTopics(req, cb) {
        let resp = new DescribeCmqTopicsResponse();
        this.request("DescribeCmqTopics", req, resp, cb);
    }

    /**
     * This API is used to batch delete topics.
     * @param {DeleteTopicsRequest} req
     * @param {function(string, DeleteTopicsResponse):void} cb
     * @public
     */
    DeleteTopics(req, cb) {
        let resp = new DeleteTopicsResponse();
        this.request("DeleteTopics", req, resp, cb);
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
     * This API is used to delete a professional cluster with prepayment via API calls.
     * @param {DeleteProClusterRequest} req
     * @param {function(string, DeleteProClusterResponse):void} cb
     * @public
     */
    DeleteProCluster(req, cb) {
        let resp = new DeleteProClusterResponse();
        this.request("DeleteProCluster", req, resp, cb);
    }

    /**
     * Deletes roles. Batch deletion is supported.
     * @param {DeleteRocketMQRolesRequest} req
     * @param {function(string, DeleteRocketMQRolesResponse):void} cb
     * @public
     */
    DeleteRocketMQRoles(req, cb) {
        let resp = new DeleteRocketMQRolesResponse();
        this.request("DeleteRocketMQRoles", req, resp, cb);
    }

    /**
     * This API is used to get the list of topics under an environment.
     * @param {DescribeTopicsRequest} req
     * @param {function(string, DescribeTopicsResponse):void} cb
     * @public
     */
    DescribeTopics(req, cb) {
        let resp = new DescribeTopicsResponse();
        this.request("DescribeTopics", req, resp, cb);
    }

    /**
     * This API is used to create a TDMQ for RabbitMQ user.
     * @param {CreateRabbitMQUserRequest} req
     * @param {function(string, CreateRabbitMQUserResponse):void} cb
     * @public
     */
    CreateRabbitMQUser(req, cb) {
        let resp = new CreateRabbitMQUserResponse();
        this.request("CreateRabbitMQUser", req, resp, cb);
    }

    /**
     * This API is used to query the RabbitMQ managed instance list of user purchases.
     * @param {DescribeRabbitMQVipInstancesRequest} req
     * @param {function(string, DescribeRabbitMQVipInstancesResponse):void} cb
     * @public
     */
    DescribeRabbitMQVipInstances(req, cb) {
        let resp = new DescribeRabbitMQVipInstancesResponse();
        this.request("DescribeRabbitMQVipInstances", req, resp, cb);
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
     * This API is used to obtain the topic production details list.
     * @param {DescribeRocketMQTopicStatsRequest} req
     * @param {function(string, DescribeRocketMQTopicStatsResponse):void} cb
     * @public
     */
    DescribeRocketMQTopicStats(req, cb) {
        let resp = new DescribeRocketMQTopicStatsResponse();
        this.request("DescribeRocketMQTopicStats", req, resp, cb);
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
     * This API is used to query all CMQ queues.
     * @param {DescribeCmqQueuesRequest} req
     * @param {function(string, DescribeCmqQueuesResponse):void} cb
     * @public
     */
    DescribeCmqQueues(req, cb) {
        let resp = new DescribeCmqQueuesResponse();
        this.request("DescribeCmqQueues", req, resp, cb);
    }

    /**
     * This API is used to get the list of namespaces under a tenant.
     * @param {DescribeEnvironmentsRequest} req
     * @param {function(string, DescribeEnvironmentsResponse):void} cb
     * @public
     */
    DescribeEnvironments(req, cb) {
        let resp = new DescribeEnvironmentsResponse();
        this.request("DescribeEnvironments", req, resp, cb);
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
     * This API is used to query the list of TDMQ for RabbitMQ permissions.
     * @param {DescribeRabbitMQPermissionRequest} req
     * @param {function(string, DescribeRabbitMQPermissionResponse):void} cb
     * @public
     */
    DescribeRabbitMQPermission(req, cb) {
        let resp = new DescribeRabbitMQPermissionResponse();
        this.request("DescribeRabbitMQPermission", req, resp, cb);
    }

    /**
     * This API is used to modify the public network security policy for pulsar Pro Edition.
     * @param {ModifyPublicNetworkSecurityPolicyRequest} req
     * @param {function(string, ModifyPublicNetworkSecurityPolicyResponse):void} cb
     * @public
     */
    ModifyPublicNetworkSecurityPolicy(req, cb) {
        let resp = new ModifyPublicNetworkSecurityPolicyResponse();
        this.request("ModifyPublicNetworkSecurityPolicy", req, resp, cb);
    }

    /**
     * Modifies environment role authorization
     * @param {ModifyRocketMQEnvironmentRoleRequest} req
     * @param {function(string, ModifyRocketMQEnvironmentRoleResponse):void} cb
     * @public
     */
    ModifyRocketMQEnvironmentRole(req, cb) {
        let resp = new ModifyRocketMQEnvironmentRoleResponse();
        this.request("ModifyRocketMQEnvironmentRole", req, resp, cb);
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
     * Query RocketMQ messages.
     * @param {DescribeRocketMQTopicMsgsRequest} req
     * @param {function(string, DescribeRocketMQTopicMsgsResponse):void} cb
     * @public
     */
    DescribeRocketMQTopicMsgs(req, cb) {
        let resp = new DescribeRocketMQTopicMsgsResponse();
        this.request("DescribeRocketMQTopicMsgs", req, resp, cb);
    }

    /**
     * This API is used to query the producer client list under a specified topic in RocketMQ.
     * @param {DescribeRocketMQProducersRequest} req
     * @param {function(string, DescribeRocketMQProducersResponse):void} cb
     * @public
     */
    DescribeRocketMQProducers(req, cb) {
        let resp = new DescribeRocketMQProducersResponse();
        this.request("DescribeRocketMQProducers", req, resp, cb);
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
     * This API is used to create a TDMQ for RabbitMQ vhost.
     * @param {CreateRabbitMQVirtualHostRequest} req
     * @param {function(string, CreateRabbitMQVirtualHostResponse):void} cb
     * @public
     */
    CreateRabbitMQVirtualHost(req, cb) {
        let resp = new CreateRabbitMQVirtualHostResponse();
        this.request("CreateRabbitMQVirtualHost", req, resp, cb);
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
     * Modify the RocketMQ dedicated instance.
     * @param {ModifyRocketMQInstanceRequest} req
     * @param {function(string, ModifyRocketMQInstanceResponse):void} cb
     * @public
     */
    ModifyRocketMQInstance(req, cb) {
        let resp = new ModifyRocketMQInstanceResponse();
        this.request("ModifyRocketMQInstance", req, resp, cb);
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
     * This API is used to obtain RocketMQ topic details.
     * @param {DescribeRocketMQTopicRequest} req
     * @param {function(string, DescribeRocketMQTopicResponse):void} cb
     * @public
     */
    DescribeRocketMQTopic(req, cb) {
        let resp = new DescribeRocketMQTopicResponse();
        this.request("DescribeRocketMQTopic", req, resp, cb);
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
     * This API is used to query the list of TDMQ for RabbitMQ vhosts.
     * @param {DescribeRabbitMQVirtualHostRequest} req
     * @param {function(string, DescribeRabbitMQVirtualHostResponse):void} cb
     * @public
     */
    DescribeRabbitMQVirtualHost(req, cb) {
        let resp = new DescribeRabbitMQVirtualHostResponse();
        this.request("DescribeRabbitMQVirtualHost", req, resp, cb);
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

    /**
     * This API is used to get the list of clusters.
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }

    /**
     * This API is used to delete RabbitMQ permissions.
     * @param {DeleteRabbitMQPermissionRequest} req
     * @param {function(string, DeleteRabbitMQPermissionResponse):void} cb
     * @public
     */
    DeleteRabbitMQPermission(req, cb) {
        let resp = new DeleteRabbitMQPermissionResponse();
        this.request("DeleteRabbitMQPermission", req, resp, cb);
    }

    /**
     * Creates environment role authorization
     * @param {CreateRocketMQEnvironmentRoleRequest} req
     * @param {function(string, CreateRocketMQEnvironmentRoleResponse):void} cb
     * @public
     */
    CreateRocketMQEnvironmentRole(req, cb) {
        let resp = new CreateRocketMQEnvironmentRoleResponse();
        this.request("CreateRocketMQEnvironmentRole", req, resp, cb);
    }

    /**
     * This API is used to obtain information about one RabbitMQ managed instance.
     * @param {DescribeRabbitMQVipInstanceRequest} req
     * @param {function(string, DescribeRabbitMQVipInstanceResponse):void} cb
     * @public
     */
    DescribeRabbitMQVipInstance(req, cb) {
        let resp = new DescribeRabbitMQVipInstanceResponse();
        this.request("DescribeRabbitMQVipInstance", req, resp, cb);
    }

    /**
     * Obtains the list of topics subscribed under a specified consumer group
     * @param {DescribeRocketMQTopicsByGroupRequest} req
     * @param {function(string, DescribeRocketMQTopicsByGroupResponse):void} cb
     * @public
     */
    DescribeRocketMQTopicsByGroup(req, cb) {
        let resp = new DescribeRocketMQTopicsByGroupResponse();
        this.request("DescribeRocketMQTopicsByGroup", req, resp, cb);
    }

    /**
     * This API is used to pull public network metric monitoring data from TCOP. Currently, only inbound bandwidth and outbound bandwidth metrics from client to LB are supported.
     * @param {DescribeRocketMQPublicAccessMonitorDataRequest} req
     * @param {function(string, DescribeRocketMQPublicAccessMonitorDataResponse):void} cb
     * @public
     */
    DescribeRocketMQPublicAccessMonitorData(req, cb) {
        let resp = new DescribeRocketMQPublicAccessMonitorDataResponse();
        this.request("DescribeRocketMQPublicAccessMonitorData", req, resp, cb);
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
     * This API is used to enable/disable public network access, and set the security access policy.
     * @param {SetRocketMQPublicAccessPointRequest} req
     * @param {function(string, SetRocketMQPublicAccessPointResponse):void} cb
     * @public
     */
    SetRocketMQPublicAccessPoint(req, cb) {
        let resp = new SetRocketMQPublicAccessPointResponse();
        this.request("SetRocketMQPublicAccessPoint", req, resp, cb);
    }

    /**
     * This API is used to query the list of subscribers under the specified environment and topic.
     * @param {DescribeSubscriptionsRequest} req
     * @param {function(string, DescribeSubscriptionsResponse):void} cb
     * @public
     */
    DescribeSubscriptions(req, cb) {
        let resp = new DescribeSubscriptionsResponse();
        this.request("DescribeSubscriptions", req, resp, cb);
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
     * This API is used to get the information of a specific TDMQ for RocketMQ exclusive cluster.
     * @param {DescribeRocketMQVipInstanceDetailRequest} req
     * @param {function(string, DescribeRocketMQVipInstanceDetailResponse):void} cb
     * @public
     */
    DescribeRocketMQVipInstanceDetail(req, cb) {
        let resp = new DescribeRocketMQVipInstanceDetailResponse();
        this.request("DescribeRocketMQVipInstanceDetail", req, resp, cb);
    }

    /**
     * Obtains the list of roles
     * @param {DescribeRocketMQRolesRequest} req
     * @param {function(string, DescribeRocketMQRolesResponse):void} cb
     * @public
     */
    DescribeRocketMQRoles(req, cb) {
        let resp = new DescribeRocketMQRolesResponse();
        this.request("DescribeRocketMQRoles", req, resp, cb);
    }

    /**
     * This API is used to query the list of TDMQ for RabbitMQ users.
     * @param {DescribeRabbitMQUserRequest} req
     * @param {function(string, DescribeRabbitMQUserResponse):void} cb
     * @public
     */
    DescribeRabbitMQUser(req, cb) {
        let resp = new DescribeRabbitMQUserResponse();
        this.request("DescribeRabbitMQUser", req, resp, cb);
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
     * This API is used to obtain the information of a TDMQ for Pulsar pro cluster instance.
     * @param {DescribePulsarProInstanceDetailRequest} req
     * @param {function(string, DescribePulsarProInstanceDetailResponse):void} cb
     * @public
     */
    DescribePulsarProInstanceDetail(req, cb) {
        let resp = new DescribePulsarProInstanceDetailResponse();
        this.request("DescribePulsarProInstanceDetail", req, resp, cb);
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
     * This API is used to create a TDMQ for RabbitMQ routing relationship.
     * @param {CreateRabbitMQBindingRequest} req
     * @param {function(string, CreateRabbitMQBindingResponse):void} cb
     * @public
     */
    CreateRabbitMQBinding(req, cb) {
        let resp = new CreateRabbitMQBindingResponse();
        this.request("CreateRabbitMQBinding", req, resp, cb);
    }

    /**
     * Queries message trajectory
     * @param {DescribeMsgTraceRequest} req
     * @param {function(string, DescribeMsgTraceResponse):void} cb
     * @public
     */
    DescribeMsgTrace(req, cb) {
        let resp = new DescribeMsgTraceResponse();
        this.request("DescribeMsgTrace", req, resp, cb);
    }

    /**
     * Modifies roles
     * @param {ModifyRocketMQRoleRequest} req
     * @param {function(string, ModifyRocketMQRoleResponse):void} cb
     * @public
     */
    ModifyRocketMQRole(req, cb) {
        let resp = new ModifyRocketMQRoleResponse();
        this.request("ModifyRocketMQRole", req, resp, cb);
    }

    /**
     * This API is used to query the RabbitMQ managed node list.
     * @param {DescribeRabbitMQNodeListRequest} req
     * @param {function(string, DescribeRabbitMQNodeListResponse):void} cb
     * @public
     */
    DescribeRabbitMQNodeList(req, cb) {
        let resp = new DescribeRabbitMQNodeListResponse();
        this.request("DescribeRabbitMQNodeList", req, resp, cb);
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
     * Resend the RocketMQ dead letter messages.
     * @param {RetryRocketMQDlqMessageRequest} req
     * @param {function(string, RetryRocketMQDlqMessageResponse):void} cb
     * @public
     */
    RetryRocketMQDlqMessage(req, cb) {
        let resp = new RetryRocketMQDlqMessageResponse();
        this.request("RetryRocketMQDlqMessage", req, resp, cb);
    }

    /**
     * Export the RocketMQ message details.
     * @param {ExportRocketMQMessageDetailRequest} req
     * @param {function(string, ExportRocketMQMessageDetailResponse):void} cb
     * @public
     */
    ExportRocketMQMessageDetail(req, cb) {
        let resp = new ExportRocketMQMessageDetailResponse();
        this.request("ExportRocketMQMessageDetail", req, resp, cb);
    }

    /**
     * This API is used to query the list of TDMQ for RabbitMQ queues.
     * @param {DescribeRabbitMQQueuesRequest} req
     * @param {function(string, DescribeRabbitMQQueuesResponse):void} cb
     * @public
     */
    DescribeRabbitMQQueues(req, cb) {
        let resp = new DescribeRabbitMQQueuesResponse();
        this.request("DescribeRabbitMQQueues", req, resp, cb);
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
     * This API is used to modify the configurations of a TDMQ for RocketMQ exclusive instance, including the upgrade of the instance specification, node count, and storage, and the downgrade of the instance specification. After you call this API to place the order and make payments, the configuration modification will be in progress. You can query whether the modification has been completed through the `DescribeRocketMQVipInstances` API`.
     * @param {ModifyRocketMQInstanceSpecRequest} req
     * @param {function(string, ModifyRocketMQInstanceSpecResponse):void} cb
     * @public
     */
    ModifyRocketMQInstanceSpec(req, cb) {
        let resp = new ModifyRocketMQInstanceSpecResponse();
        this.request("ModifyRocketMQInstanceSpec", req, resp, cb);
    }

    /**
     * This API is used to query the list of the purchased TDMQ for RocketMQ exclusive instances.
     * @param {DescribeRocketMQVipInstancesRequest} req
     * @param {function(string, DescribeRocketMQVipInstancesResponse):void} cb
     * @public
     */
    DescribeRocketMQVipInstances(req, cb) {
        let resp = new DescribeRocketMQVipInstancesResponse();
        this.request("DescribeRocketMQVipInstances", req, resp, cb);
    }

    /**
     * Used to obtain the RocketMQ metric sorting list, such as sorting topics under a cluster instance by the most occupied storage space.
     * @param {DescribeRocketMQTopUsagesRequest} req
     * @param {function(string, DescribeRocketMQTopUsagesResponse):void} cb
     * @public
     */
    DescribeRocketMQTopUsages(req, cb) {
        let resp = new DescribeRocketMQTopUsagesResponse();
        this.request("DescribeRocketMQTopUsages", req, resp, cb);
    }

    /**
     * This API is used to modify RabbitMQ permissions.
     * @param {ModifyRabbitMQPermissionRequest} req
     * @param {function(string, ModifyRabbitMQPermissionResponse):void} cb
     * @public
     */
    ModifyRabbitMQPermission(req, cb) {
        let resp = new ModifyRabbitMQPermissionResponse();
        this.request("ModifyRabbitMQPermission", req, resp, cb);
    }

    /**
     * This API is used to create a RabbitMQ managed instance.
     * @param {CreateRabbitMQVipInstanceRequest} req
     * @param {function(string, CreateRabbitMQVipInstanceResponse):void} cb
     * @public
     */
    CreateRabbitMQVipInstance(req, cb) {
        let resp = new CreateRabbitMQVipInstanceResponse();
        this.request("CreateRabbitMQVipInstance", req, resp, cb);
    }

    /**
     * Queries message trajectory
     * @param {DescribeMqMsgTraceRequest} req
     * @param {function(string, DescribeMqMsgTraceResponse):void} cb
     * @public
     */
    DescribeMqMsgTrace(req, cb) {
        let resp = new DescribeMqMsgTraceResponse();
        this.request("DescribeMqMsgTrace", req, resp, cb);
    }

    /**
     * This API is used to get the list of RocketMQ consumer groups.
     * @param {DescribeRocketMQGroupsRequest} req
     * @param {function(string, DescribeRocketMQGroupsResponse):void} cb
     * @public
     */
    DescribeRocketMQGroups(req, cb) {
        let resp = new DescribeRocketMQGroupsResponse();
        this.request("DescribeRocketMQGroups", req, resp, cb);
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
     * Obtains the namespace role list
     * @param {DescribeRocketMQEnvironmentRolesRequest} req
     * @param {function(string, DescribeRocketMQEnvironmentRolesResponse):void} cb
     * @public
     */
    DescribeRocketMQEnvironmentRoles(req, cb) {
        let resp = new DescribeRocketMQEnvironmentRolesResponse();
        this.request("DescribeRocketMQEnvironmentRoles", req, resp, cb);
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
     * This API is used to delete a TDMQ for RabbitMQ user.
     * @param {DeleteRabbitMQUserRequest} req
     * @param {function(string, DeleteRabbitMQUserResponse):void} cb
     * @public
     */
    DeleteRabbitMQUser(req, cb) {
        let resp = new DeleteRabbitMQUserResponse();
        this.request("DeleteRabbitMQUser", req, resp, cb);
    }

    /**
     * This api is used to create a professional cluster with prepayment via api calls.
     * @param {CreateProClusterRequest} req
     * @param {function(string, CreateProClusterResponse):void} cb
     * @public
     */
    CreateProCluster(req, cb) {
        let resp = new CreateProClusterResponse();
        this.request("CreateProCluster", req, resp, cb);
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
     * This API is used to receive messages sent to a specified Partitioned Topic. It supports only Partitioned Topic type. When there are no messages in the Partitioned Topic but the API is still called, it throws a ReceiveTimeout exception.

This API is used to batch receive policies.

This API is used to provide the following three parameters:.

MaxNumMessages: The maximum number of messages returned by the Receive API each time when using BatchReceive.
MaxNumBytes: the maximum size of messages returned by the Receive API in a single BatchReceive operation, in bytes.
Timeout: The maximum timeout period for each Receive API call when using BatchReceive is how long, in MS.

This API is used to disable the BatchReceive feature if none of the three parameters are specified. If any one of the three parameters has a value greater than 0, BatchReceive is enabled. BatchReceive completes when reaching the threshold specified in any one of the three parameters.

Note: MaxNumMessages and MaxNumBytes are subject to the size of ReceiveQueueSize for each receipt of messages. If ReceiveQueueSize is set to 5 and MaxNumMessages is set to 10, then BatchReceive will receive at most 5 messages at once rather than 10.



This API is used to return multiple messages at one time.

This API is used to Split multiple messages with the special character '###', allowing the business side to use Split tools in different languages to separate messages after receiving them.
Multiple MessageIDs use the special character '###' to separate with each other. After receiving the message, the business side can leverage the Split tool provided by different languages to separate different messages. (Used for filling in the necessary MessageID field information when calling the AcknowledgeMessage API.).
     * @param {ReceiveMessageRequest} req
     * @param {function(string, ReceiveMessageResponse):void} cb
     * @public
     */
    ReceiveMessage(req, cb) {
        let resp = new ReceiveMessageResponse();
        this.request("ReceiveMessage", req, resp, cb);
    }

    /**
     * This API is used to delete a TDMQ for RabbitMQ vhost.
     * @param {DeleteRabbitMQVirtualHostRequest} req
     * @param {function(string, DeleteRabbitMQVirtualHostResponse):void} cb
     * @public
     */
    DeleteRabbitMQVirtualHost(req, cb) {
        let resp = new DeleteRabbitMQVirtualHostResponse();
        this.request("DeleteRabbitMQVirtualHost", req, resp, cb);
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
     * This API is used to modify a TDMQ for RabbitMQ user.
     * @param {ModifyRabbitMQUserRequest} req
     * @param {function(string, ModifyRabbitMQUserResponse):void} cb
     * @public
     */
    ModifyRabbitMQUser(req, cb) {
        let resp = new ModifyRabbitMQUserResponse();
        this.request("ModifyRabbitMQUser", req, resp, cb);
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
     * This API is used to get message details.
     * @param {DescribeMsgRequest} req
     * @param {function(string, DescribeMsgResponse):void} cb
     * @public
     */
    DescribeMsg(req, cb) {
        let resp = new DescribeMsgResponse();
        this.request("DescribeMsg", req, resp, cb);
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
     * This API is used to get the list of RocketMQ topics.
     * @param {DescribeRocketMQTopicsRequest} req
     * @param {function(string, DescribeRocketMQTopicsResponse):void} cb
     * @public
     */
    DescribeRocketMQTopics(req, cb) {
        let resp = new DescribeRocketMQTopicsResponse();
        this.request("DescribeRocketMQTopics", req, resp, cb);
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
     * This API is used to get the list of RocketMQ clusters.
     * @param {DescribeRocketMQClustersRequest} req
     * @param {function(string, DescribeRocketMQClustersResponse):void} cb
     * @public
     */
    DescribeRocketMQClusters(req, cb) {
        let resp = new DescribeRocketMQClustersResponse();
        this.request("DescribeRocketMQClusters", req, resp, cb);
    }

    /**
     * This API is used to send a single message.
The message cannot be sent to a persistent topic.
     * @param {SendMessagesRequest} req
     * @param {function(string, SendMessagesResponse):void} cb
     * @public
     */
    SendMessages(req, cb) {
        let resp = new SendMessagesResponse();
        this.request("SendMessages", req, resp, cb);
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
     * This API is used to query the list of RabbitMQ route relations.
     * @param {DescribeRabbitMQBindingsRequest} req
     * @param {function(string, DescribeRabbitMQBindingsResponse):void} cb
     * @public
     */
    DescribeRabbitMQBindings(req, cb) {
        let resp = new DescribeRabbitMQBindingsResponse();
        this.request("DescribeRabbitMQBindings", req, resp, cb);
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
     * This API is used to query messages.
     * @param {DescribeTopicMsgsRequest} req
     * @param {function(string, DescribeTopicMsgsResponse):void} cb
     * @public
     */
    DescribeTopicMsgs(req, cb) {
        let resp = new DescribeTopicMsgsResponse();
        this.request("DescribeTopicMsgs", req, resp, cb);
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
     * This API is used to query the list of the purchased TDMQ for Pulsar pro instances.
     * @param {DescribePulsarProInstancesRequest} req
     * @param {function(string, DescribePulsarProInstancesResponse):void} cb
     * @public
     */
    DescribePulsarProInstances(req, cb) {
        let resp = new DescribePulsarProInstancesResponse();
        this.request("DescribePulsarProInstances", req, resp, cb);
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
     * This API is used to query the details of RabbitMQ queues.
     * @param {DescribeRabbitMQQueueDetailRequest} req
     * @param {function(string, DescribeRabbitMQQueueDetailResponse):void} cb
     * @public
     */
    DescribeRabbitMQQueueDetail(req, cb) {
        let resp = new DescribeRabbitMQQueueDetailResponse();
        this.request("DescribeRabbitMQQueueDetail", req, resp, cb);
    }

    /**
     * This API is used to query the TDMQ for RocketMQ message details.
     * @param {DescribeRocketMQMsgRequest} req
     * @param {function(string, DescribeRocketMQMsgResponse):void} cb
     * @public
     */
    DescribeRocketMQMsg(req, cb) {
        let resp = new DescribeRocketMQMsgResponse();
        this.request("DescribeRocketMQMsg", req, resp, cb);
    }

    /**
     * This API is used to get the list of namespace roles.
     * @param {DescribeEnvironmentRolesRequest} req
     * @param {function(string, DescribeEnvironmentRolesResponse):void} cb
     * @public
     */
    DescribeEnvironmentRoles(req, cb) {
        let resp = new DescribeEnvironmentRolesResponse();
        this.request("DescribeEnvironmentRoles", req, resp, cb);
    }

    /**
     * This API is used to delete a RabbitMQ managed instance.
     * @param {DeleteRabbitMQVipInstanceRequest} req
     * @param {function(string, DeleteRabbitMQVipInstanceResponse):void} cb
     * @public
     */
    DeleteRabbitMQVipInstance(req, cb) {
        let resp = new DeleteRabbitMQVipInstanceResponse();
        this.request("DeleteRabbitMQVipInstance", req, resp, cb);
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
     * This API is used to get the list of dedicated clusters bound to a user.
     * @param {DescribeBindClustersRequest} req
     * @param {function(string, DescribeBindClustersResponse):void} cb
     * @public
     */
    DescribeBindClusters(req, cb) {
        let resp = new DescribeBindClustersResponse();
        this.request("DescribeBindClusters", req, resp, cb);
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
     * This API is used to delete a RocketMQ Exclusive Edition instance.
     * @param {DeleteRocketMQVipInstanceRequest} req
     * @param {function(string, DeleteRocketMQVipInstanceResponse):void} cb
     * @public
     */
    DeleteRocketMQVipInstance(req, cb) {
        let resp = new DeleteRocketMQVipInstanceResponse();
        this.request("DeleteRocketMQVipInstance", req, resp, cb);
    }

    /**
     * This API is used to send messages through RocketMQ. It is only used for sending a small number of test messages from the console and does not provide SLA. Cloud API is subject to traffic throttling. In real business scenarios, use the RocketMQ SDK to send messages.
     * @param {SendRocketMQMessageRequest} req
     * @param {function(string, SendRocketMQMessageResponse):void} cb
     * @public
     */
    SendRocketMQMessage(req, cb) {
        let resp = new SendRocketMQMessageResponse();
        this.request("SendRocketMQMessage", req, resp, cb);
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
     * This API is used to query the public network access information of RocketMQ instances.
     * @param {DescribeRocketMQPublicAccessPointRequest} req
     * @param {function(string, DescribeRocketMQPublicAccessPointResponse):void} cb
     * @public
     */
    DescribeRocketMQPublicAccessPoint(req, cb) {
        let resp = new DescribeRocketMQPublicAccessPointResponse();
        this.request("DescribeRocketMQPublicAccessPoint", req, resp, cb);
    }

    /**
     * This API is used to unbind RabbitMQ routing relationships.
     * @param {DeleteRabbitMQBindingRequest} req
     * @param {function(string, DeleteRabbitMQBindingResponse):void} cb
     * @public
     */
    DeleteRabbitMQBinding(req, cb) {
        let resp = new DeleteRabbitMQBindingResponse();
        this.request("DeleteRabbitMQBinding", req, resp, cb);
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
     * This API is used to create a RocketMQ Exclusive Edition instance.
     * @param {CreateRocketMQVipInstanceRequest} req
     * @param {function(string, CreateRocketMQVipInstanceResponse):void} cb
     * @public
     */
    CreateRocketMQVipInstance(req, cb) {
        let resp = new CreateRocketMQVipInstanceResponse();
        this.request("CreateRocketMQVipInstance", req, resp, cb);
    }

    /**
     * Deletes environment role authorization
     * @param {DeleteRocketMQEnvironmentRolesRequest} req
     * @param {function(string, DeleteRocketMQEnvironmentRolesResponse):void} cb
     * @public
     */
    DeleteRocketMQEnvironmentRoles(req, cb) {
        let resp = new DeleteRocketMQEnvironmentRolesResponse();
        this.request("DeleteRocketMQEnvironmentRoles", req, resp, cb);
    }

    /**
     * This API is used to delete a subscription.
     * @param {DeleteSubscriptionsRequest} req
     * @param {function(string, DeleteSubscriptionsResponse):void} cb
     * @public
     */
    DeleteSubscriptions(req, cb) {
        let resp = new DeleteSubscriptionsResponse();
        this.request("DeleteSubscriptions", req, resp, cb);
    }


}
module.exports = TdmqClient;
