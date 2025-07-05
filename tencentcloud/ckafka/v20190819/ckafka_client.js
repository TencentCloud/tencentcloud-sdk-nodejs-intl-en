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
const TopicDetail = models.TopicDetail;
const DeleteAclRequest = models.DeleteAclRequest;
const CreateInstancePostResponse = models.CreateInstancePostResponse;
const GroupInfoMember = models.GroupInfoMember;
const RouteDTO = models.RouteDTO;
const BatchCreateAclRequest = models.BatchCreateAclRequest;
const DeleteUserRequest = models.DeleteUserRequest;
const PartitionOffset = models.PartitionOffset;
const DescribeACLRequest = models.DescribeACLRequest;
const BatchModifyTopicResultDTO = models.BatchModifyTopicResultDTO;
const DescribeTopicAttributesRequest = models.DescribeTopicAttributesRequest;
const DescribeInstanceAttributesRequest = models.DescribeInstanceAttributesRequest;
const ConsumerGroup = models.ConsumerGroup;
const Assignment = models.Assignment;
const ModifyAclRuleRequest = models.ModifyAclRuleRequest;
const DescribeAclRuleResponse = models.DescribeAclRuleResponse;
const DescribeConsumerGroupResponse = models.DescribeConsumerGroupResponse;
const InquiryDetailPrice = models.InquiryDetailPrice;
const InquireCkafkaPriceResp = models.InquireCkafkaPriceResp;
const DeleteTopicRequest = models.DeleteTopicRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const FetchMessageByOffsetResponse = models.FetchMessageByOffsetResponse;
const BatchModifyTopicAttributesResponse = models.BatchModifyTopicAttributesResponse;
const CreateInstancePreResp = models.CreateInstancePreResp;
const GroupInfoTopics = models.GroupInfoTopics;
const FetchMessageListByOffsetRequest = models.FetchMessageListByOffsetRequest;
const Region = models.Region;
const ModifyInstancePreRequest = models.ModifyInstancePreRequest;
const CreateAclRuleRequest = models.CreateAclRuleRequest;
const DescribeInstancesDetailResponse = models.DescribeInstancesDetailResponse;
const CreateInstancePreData = models.CreateInstancePreData;
const AclRule = models.AclRule;
const DescribeAclRuleRequest = models.DescribeAclRuleRequest;
const DescribeACLResponse = models.DescribeACLResponse;
const DynamicDiskConfig = models.DynamicDiskConfig;
const InquireCkafkaPriceRequest = models.InquireCkafkaPriceRequest;
const ZoneInfo = models.ZoneInfo;
const DescribeTopicSubscribeGroupResponse = models.DescribeTopicSubscribeGroupResponse;
const DescribeCkafkaZoneRequest = models.DescribeCkafkaZoneRequest;
const SaleInfo = models.SaleInfo;
const Topic = models.Topic;
const Tag = models.Tag;
const ModifyAclRuleResponse = models.ModifyAclRuleResponse;
const BatchModifyGroupOffsetsResponse = models.BatchModifyGroupOffsetsResponse;
const GroupResponse = models.GroupResponse;
const CreateDatahubTopicRequest = models.CreateDatahubTopicRequest;
const InstanceChargeParam = models.InstanceChargeParam;
const CreateInstancePostResp = models.CreateInstancePostResp;
const DescribeDatahubTopicResponse = models.DescribeDatahubTopicResponse;
const DescribeTopicAttributesResponse = models.DescribeTopicAttributesResponse;
const FetchMessageListByOffsetResponse = models.FetchMessageListByOffsetResponse;
const CreateConsumerResponse = models.CreateConsumerResponse;
const CreatePostPaidInstanceRequest = models.CreatePostPaidInstanceRequest;
const RouteResponse = models.RouteResponse;
const DescribeGroupResponse = models.DescribeGroupResponse;
const ModifyInstanceAttributesConfig = models.ModifyInstanceAttributesConfig;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const OperateResponseData = models.OperateResponseData;
const CreateUserResponse = models.CreateUserResponse;
const DescribeRouteRequest = models.DescribeRouteRequest;
const CreatePartitionResponse = models.CreatePartitionResponse;
const TopicSubscribeGroup = models.TopicSubscribeGroup;
const ClusterInfo = models.ClusterInfo;
const DeleteUserResponse = models.DeleteUserResponse;
const DescribeTopicProduceConnectionRequest = models.DescribeTopicProduceConnectionRequest;
const CreateAclRequest = models.CreateAclRequest;
const DescribeTopicSyncReplicaResponse = models.DescribeTopicSyncReplicaResponse;
const DescribeAppInfoRequest = models.DescribeAppInfoRequest;
const DeleteRouteResponse = models.DeleteRouteResponse;
const Partitions = models.Partitions;
const DescribeTopicResponse = models.DescribeTopicResponse;
const ConsumerGroupResponse = models.ConsumerGroupResponse;
const CreateTopicIpWhiteListResponse = models.CreateTopicIpWhiteListResponse;
const GroupOffsetTopic = models.GroupOffsetTopic;
const ModifyGroupOffsetsResponse = models.ModifyGroupOffsetsResponse;
const DescribeConnectInfoResultDTO = models.DescribeConnectInfoResultDTO;
const Partition = models.Partition;
const CreateAclResponse = models.CreateAclResponse;
const CreateTopicRequest = models.CreateTopicRequest;
const DeleteAclResponse = models.DeleteAclResponse;
const DynamicRetentionTime = models.DynamicRetentionTime;
const DescribeTopicSubscribeGroupRequest = models.DescribeTopicSubscribeGroupRequest;
const DeleteInstancePreResponse = models.DeleteInstancePreResponse;
const DatahubTopicResp = models.DatahubTopicResp;
const FetchMessageByOffsetRequest = models.FetchMessageByOffsetRequest;
const InquiryPublicNetworkParam = models.InquiryPublicNetworkParam;
const TopicInSyncReplicaInfo = models.TopicInSyncReplicaInfo;
const DescribeRegionRequest = models.DescribeRegionRequest;
const InstanceConfigDO = models.InstanceConfigDO;
const UserResponse = models.UserResponse;
const DescribeGroupInfoRequest = models.DescribeGroupInfoRequest;
const DescribeGroupInfoResponse = models.DescribeGroupInfoResponse;
const ModifyTopicAttributesResponse = models.ModifyTopicAttributesResponse;
const DescribeDatahubTopicsRequest = models.DescribeDatahubTopicsRequest;
const DeleteRouteTriggerTimeResponse = models.DeleteRouteTriggerTimeResponse;
const DescribeUserResponse = models.DescribeUserResponse;
const AppIdResponse = models.AppIdResponse;
const DescribeTopicRequest = models.DescribeTopicRequest;
const DealInstanceDTO = models.DealInstanceDTO;
const CreatePartitionRequest = models.CreatePartitionRequest;
const Group = models.Group;
const GroupInfoResponse = models.GroupInfoResponse;
const DescribeAppInfoResponse = models.DescribeAppInfoResponse;
const AclResponse = models.AclResponse;
const ZoneResponse = models.ZoneResponse;
const Instance = models.Instance;
const DescribeInstanceAttributesResponse = models.DescribeInstanceAttributesResponse;
const ModifyPasswordResponse = models.ModifyPasswordResponse;
const TopicDetailResponse = models.TopicDetailResponse;
const DeleteInstancePreRequest = models.DeleteInstancePreRequest;
const DescribeDatahubTopicRequest = models.DescribeDatahubTopicRequest;
const Config = models.Config;
const ModifyPasswordRequest = models.ModifyPasswordRequest;
const ModifyInstanceAttributesRequest = models.ModifyInstanceAttributesRequest;
const DescribeRegionResponse = models.DescribeRegionResponse;
const DescribeConsumerGroupRequest = models.DescribeConsumerGroupRequest;
const VipEntity = models.VipEntity;
const DescribeTopicProduceConnectionResponse = models.DescribeTopicProduceConnectionResponse;
const ModifyInstanceAttributesResponse = models.ModifyInstanceAttributesResponse;
const ConsumerGroupTopic = models.ConsumerGroupTopic;
const User = models.User;
const CreateAclRuleResponse = models.CreateAclRuleResponse;
const CreateInstancePostData = models.CreateInstancePostData;
const DeleteTopicResponse = models.DeleteTopicResponse;
const DeleteRouteTriggerTimeRequest = models.DeleteRouteTriggerTimeRequest;
const GroupOffsetPartition = models.GroupOffsetPartition;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const InstanceAttributesResponse = models.InstanceAttributesResponse;
const CreateInstancePostRequest = models.CreateInstancePostRequest;
const DescribeDatahubTopicsResponse = models.DescribeDatahubTopicsResponse;
const DescribeGroupRequest = models.DescribeGroupRequest;
const Filter = models.Filter;
const GroupOffsetResponse = models.GroupOffsetResponse;
const BatchCreateAclResponse = models.BatchCreateAclResponse;
const ModifyInstancePreResponse = models.ModifyInstancePreResponse;
const CreateUserRequest = models.CreateUserRequest;
const InstanceDetailResponse = models.InstanceDetailResponse;
const DeleteRouteRequest = models.DeleteRouteRequest;
const DeleteTopicIpWhiteListResponse = models.DeleteTopicIpWhiteListResponse;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const DescribeInstancesDetailRequest = models.DescribeInstancesDetailRequest;
const CreateConsumerRequest = models.CreateConsumerRequest;
const InquireCkafkaPriceResponse = models.InquireCkafkaPriceResponse;
const CreateDatahubTopicResponse = models.CreateDatahubTopicResponse;
const CreatePostPaidInstanceResponse = models.CreatePostPaidInstanceResponse;
const InquiryDiskParam = models.InquiryDiskParam;
const TopicInSyncReplicaResult = models.TopicInSyncReplicaResult;
const SendMessageResponse = models.SendMessageResponse;
const InquiryBasePrice = models.InquiryBasePrice;
const DescribeCkafkaZoneResponse = models.DescribeCkafkaZoneResponse;
const BatchModifyGroupOffsetsRequest = models.BatchModifyGroupOffsetsRequest;
const TopicAttributesResponse = models.TopicAttributesResponse;
const InstanceResponse = models.InstanceResponse;
const DatahubTopicDTO = models.DatahubTopicDTO;
const JgwOperateResponse = models.JgwOperateResponse;
const DescribeGroup = models.DescribeGroup;
const TopicPartitionDO = models.TopicPartitionDO;
const CreateTopicResp = models.CreateTopicResp;
const TaskStatusResponse = models.TaskStatusResponse;
const BatchModifyTopicInfo = models.BatchModifyTopicInfo;
const DescribeRouteResponse = models.DescribeRouteResponse;
const ModifyDatahubTopicResponse = models.ModifyDatahubTopicResponse;
const BatchContent = models.BatchContent;
const InquiryPrice = models.InquiryPrice;
const TopicResult = models.TopicResult;
const DescribeTopicDetailRequest = models.DescribeTopicDetailRequest;
const DescribeGroupOffsetsResponse = models.DescribeGroupOffsetsResponse;
const SendMessageRequest = models.SendMessageRequest;
const ConsumerRecord = models.ConsumerRecord;
const ModifyGroupOffsetsRequest = models.ModifyGroupOffsetsRequest;
const BatchModifyTopicAttributesRequest = models.BatchModifyTopicAttributesRequest;
const CreateTopicIpWhiteListRequest = models.CreateTopicIpWhiteListRequest;
const Route = models.Route;
const AclRuleInfo = models.AclRuleInfo;
const Acl = models.Acl;
const TopicRetentionTimeConfigRsp = models.TopicRetentionTimeConfigRsp;
const ModifyDatahubTopicRequest = models.ModifyDatahubTopicRequest;
const ModifyTopicAttributesRequest = models.ModifyTopicAttributesRequest;
const CreateTopicResponse = models.CreateTopicResponse;
const DeleteTopicIpWhiteListRequest = models.DeleteTopicIpWhiteListRequest;
const DescribeGroupOffsetsRequest = models.DescribeGroupOffsetsRequest;
const DescribeDatahubTopicResp = models.DescribeDatahubTopicResp;
const DescribeUserRequest = models.DescribeUserRequest;
const DescribeDatahubTopicsResp = models.DescribeDatahubTopicsResp;
const DescribeTopicSyncReplicaRequest = models.DescribeTopicSyncReplicaRequest;
const InstanceDetail = models.InstanceDetail;
const InstanceQuotaConfigResp = models.InstanceQuotaConfigResp;
const DescribeTopicDetailResponse = models.DescribeTopicDetailResponse;
const SubscribedInfo = models.SubscribedInfo;
const AclRuleResp = models.AclRuleResp;
const Price = models.Price;


/**
 * ckafka client
 * @class
 */
class CkafkaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ckafka.intl.tencentcloudapi.com", "2019-08-19", credential, region, profile);
    }
    
    /**
     * This API is used to view route information.
     * @param {DescribeRouteRequest} req
     * @param {function(string, DescribeRouteResponse):void} cb
     * @public
     */
    DescribeRoute(req, cb) {
        let resp = new DescribeRouteResponse();
        this.request("DescribeRoute", req, resp, cb);
    }

    /**
     * This API is used to get consumer group information.
     * @param {DescribeGroupInfoRequest} req
     * @param {function(string, DescribeGroupInfoResponse):void} cb
     * @public
     */
    DescribeGroupInfo(req, cb) {
        let resp = new DescribeGroupInfoResponse();
        this.request("DescribeGroupInfo", req, resp, cb);
    }

    /**
     * This API is used to create a consumer group.
     * @param {CreateConsumerRequest} req
     * @param {function(string, CreateConsumerResponse):void} cb
     * @public
     */
    CreateConsumer(req, cb) {
        let resp = new CreateConsumerResponse();
        this.request("CreateConsumer", req, resp, cb);
    }

    /**
     * This API is used to query consumer group information.
     * @param {DescribeConsumerGroupRequest} req
     * @param {function(string, DescribeConsumerGroupResponse):void} cb
     * @public
     */
    DescribeConsumerGroup(req, cb) {
        let resp = new DescribeConsumerGroupResponse();
        this.request("DescribeConsumerGroup", req, resp, cb);
    }

    /**
     * This API is used to create a pay-as-you-go instance.  It will be deprecated in future versions. We recommend that you use the `CreatePostPaidInstance` API instead.  You can call this API via SDK or the TencentCloud API console to create a pay-as-you-go CKafka instance,  which is an alternate option for making a purchase in the console.
     * @param {CreateInstancePostRequest} req
     * @param {function(string, CreateInstancePostResponse):void} cb
     * @public
     */
    CreateInstancePost(req, cb) {
        let resp = new CreateInstancePostResponse();
        this.request("CreateInstancePost", req, resp, cb);
    }

    /**
     * This API is used to query the ACL rule list.
     * @param {DescribeAclRuleRequest} req
     * @param {function(string, DescribeAclRuleResponse):void} cb
     * @public
     */
    DescribeAclRule(req, cb) {
        let resp = new DescribeAclRuleResponse();
        this.request("DescribeAclRule", req, resp, cb);
    }

    /**
     * This API is used to search and subscribe the message group information of a topic.
     * @param {DescribeTopicSubscribeGroupRequest} req
     * @param {function(string, DescribeTopicSubscribeGroupResponse):void} cb
     * @public
     */
    DescribeTopicSubscribeGroup(req, cb) {
        let resp = new DescribeTopicSubscribeGroupResponse();
        this.request("DescribeTopicSubscribeGroup", req, resp, cb);
    }

    /**
     * This API is used to change the configurations of a prepaid instance, such as disk capacity and bandwidth.
     * @param {ModifyInstancePreRequest} req
     * @param {function(string, ModifyInstancePreResponse):void} cb
     * @public
     */
    ModifyInstancePre(req, cb) {
        let resp = new ModifyInstancePreResponse();
        this.request("ModifyInstancePre", req, resp, cb);
    }

    /**
     * This API is used to batch set topic attributes.
     * @param {BatchModifyTopicAttributesRequest} req
     * @param {function(string, BatchModifyTopicAttributesResponse):void} cb
     * @public
     */
    BatchModifyTopicAttributes(req, cb) {
        let resp = new BatchModifyTopicAttributesResponse();
        this.request("BatchModifyTopicAttributes", req, resp, cb);
    }

    /**
     * This API is used to delete a route.
     * @param {DeleteRouteRequest} req
     * @param {function(string, DeleteRouteResponse):void} cb
     * @public
     */
    DeleteRoute(req, cb) {
        let resp = new DeleteRouteResponse();
        this.request("DeleteRoute", req, resp, cb);
    }

    /**
     * This API is used to send messages through the HTTP access layer.
     * @param {SendMessageRequest} req
     * @param {function(string, SendMessageResponse):void} cb
     * @public
     */
    SendMessage(req, cb) {
        let resp = new SendMessageResponse();
        this.request("SendMessage", req, resp, cb);
    }

    /**
     * This API is used to modify the DataHub topic attributes.
     * @param {ModifyDatahubTopicRequest} req
     * @param {function(string, ModifyDatahubTopicResponse):void} cb
     * @public
     */
    ModifyDatahubTopic(req, cb) {
        let resp = new ModifyDatahubTopicResponse();
        this.request("ModifyDatahubTopic", req, resp, cb);
    }

    /**
     * This API is used to create a topic IP allowlist.
     * @param {CreateTopicIpWhiteListRequest} req
     * @param {function(string, CreateTopicIpWhiteListResponse):void} cb
     * @public
     */
    CreateTopicIpWhiteList(req, cb) {
        let resp = new CreateTopicIpWhiteListResponse();
        this.request("CreateTopicIpWhiteList", req, resp, cb);
    }

    /**
     * This API is used to enumerate consumer groups (simplified).
     * @param {DescribeGroupRequest} req
     * @param {function(string, DescribeGroupResponse):void} cb
     * @public
     */
    DescribeGroup(req, cb) {
        let resp = new DescribeGroupResponse();
        this.request("DescribeGroup", req, resp, cb);
    }

    /**
     * This API is used to set the consumer group (Groups) offset.
     * @param {ModifyGroupOffsetsRequest} req
     * @param {function(string, ModifyGroupOffsetsResponse):void} cb
     * @public
     */
    ModifyGroupOffsets(req, cb) {
        let resp = new ModifyGroupOffsetsResponse();
        this.request("ModifyGroupOffsets", req, resp, cb);
    }

    /**
     * This API is used to get the list of CKafka instances under a user account.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to get the details of a synced topic replica.
     * @param {DescribeTopicSyncReplicaRequest} req
     * @param {function(string, DescribeTopicSyncReplicaResponse):void} cb
     * @public
     */
    DescribeTopicSyncReplica(req, cb) {
        let resp = new DescribeTopicSyncReplicaResponse();
        this.request("DescribeTopicSyncReplica", req, resp, cb);
    }

    /**
     * This API is used to set instance attributes.
     * @param {ModifyInstanceAttributesRequest} req
     * @param {function(string, ModifyInstanceAttributesResponse):void} cb
     * @public
     */
    ModifyInstanceAttributes(req, cb) {
        let resp = new ModifyInstanceAttributesResponse();
        this.request("ModifyInstanceAttributes", req, resp, cb);
    }

    /**
     * This API is used to query user information.
     * @param {DescribeUserRequest} req
     * @param {function(string, DescribeUserResponse):void} cb
     * @public
     */
    DescribeUser(req, cb) {
        let resp = new DescribeUserResponse();
        this.request("DescribeUser", req, resp, cb);
    }

    /**
     * This API is used to query the message list based on an offset.
     * @param {FetchMessageListByOffsetRequest} req
     * @param {function(string, FetchMessageListByOffsetResponse):void} cb
     * @public
     */
    FetchMessageListByOffset(req, cb) {
        let resp = new FetchMessageListByOffsetResponse();
        this.request("FetchMessageListByOffset", req, resp, cb);
    }

    /**
     * This API is used to create a DataHub topic.
     * @param {CreateDatahubTopicRequest} req
     * @param {function(string, CreateDatahubTopicResponse):void} cb
     * @public
     */
    CreateDatahubTopic(req, cb) {
        let resp = new CreateDatahubTopicResponse();
        this.request("CreateDatahubTopic", req, resp, cb);
    }

    /**
     * This API is used to enumerate ACLs.
     * @param {DescribeACLRequest} req
     * @param {function(string, DescribeACLResponse):void} cb
     * @public
     */
    DescribeACL(req, cb) {
        let resp = new DescribeACLResponse();
        this.request("DescribeACL", req, resp, cb);
    }

    /**
     * This API is used to query the DataHub topic list.
     * @param {DescribeDatahubTopicsRequest} req
     * @param {function(string, DescribeDatahubTopicsResponse):void} cb
     * @public
     */
    DescribeDatahubTopics(req, cb) {
        let resp = new DescribeDatahubTopicsResponse();
        this.request("DescribeDatahubTopics", req, resp, cb);
    }

    /**
     * This API is used to get topic list details (only for call in the console).
     * @param {DescribeTopicDetailRequest} req
     * @param {function(string, DescribeTopicDetailResponse):void} cb
     * @public
     */
    DescribeTopicDetail(req, cb) {
        let resp = new DescribeTopicDetailResponse();
        this.request("DescribeTopicDetail", req, resp, cb);
    }

    /**
     * This API is used to query messages based on a specified offset position.
     * @param {FetchMessageByOffsetRequest} req
     * @param {function(string, FetchMessageByOffsetResponse):void} cb
     * @public
     */
    FetchMessageByOffset(req, cb) {
        let resp = new FetchMessageByOffsetResponse();
        this.request("FetchMessageByOffset", req, resp, cb);
    }

    /**
     * This API is used to delete a topic IP allowlist.
     * @param {DeleteTopicIpWhiteListRequest} req
     * @param {function(string, DeleteTopicIpWhiteListResponse):void} cb
     * @public
     */
    DeleteTopicIpWhiteList(req, cb) {
        let resp = new DeleteTopicIpWhiteListResponse();
        this.request("DeleteTopicIpWhiteList", req, resp, cb);
    }

    /**
     * This API is used to change the password.
     * @param {ModifyPasswordRequest} req
     * @param {function(string, ModifyPasswordResponse):void} cb
     * @public
     */
    ModifyPassword(req, cb) {
        let resp = new ModifyPasswordResponse();
        this.request("ModifyPassword", req, resp, cb);
    }

    /**
     * This API is used to add an ACL policy.
     * @param {CreateAclRequest} req
     * @param {function(string, CreateAclResponse):void} cb
     * @public
     */
    CreateAcl(req, cb) {
        let resp = new CreateAclResponse();
        this.request("CreateAcl", req, resp, cb);
    }

    /**
     * This API is used to create a CKafka topic.
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        let resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
    }

    /**
     * This API is used to modify an ACL policy, and currently only supports specifying whether to apply the preset rule to new topics.
     * @param {ModifyAclRuleRequest} req
     * @param {function(string, ModifyAclRuleResponse):void} cb
     * @public
     */
    ModifyAclRule(req, cb) {
        let resp = new ModifyAclRuleResponse();
        this.request("ModifyAclRule", req, resp, cb);
    }

    /**
     * This API is used to add a partition in a topic.
     * @param {CreatePartitionRequest} req
     * @param {function(string, CreatePartitionResponse):void} cb
     * @public
     */
    CreatePartition(req, cb) {
        let resp = new CreatePartitionResponse();
        this.request("CreatePartition", req, resp, cb);
    }

    /**
     * This API is used to query the task status.
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        let resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }

    /**
     * This API is used to delete a user.
     * @param {DeleteUserRequest} req
     * @param {function(string, DeleteUserResponse):void} cb
     * @public
     */
    DeleteUser(req, cb) {
        let resp = new DeleteUserResponse();
        this.request("DeleteUser", req, resp, cb);
    }

    /**
     * This API is used to delete an ACL.
     * @param {DeleteAclRequest} req
     * @param {function(string, DeleteAclResponse):void} cb
     * @public
     */
    DeleteAcl(req, cb) {
        let resp = new DeleteAclResponse();
        this.request("DeleteAcl", req, resp, cb);
    }

    /**
     * This API is used to query the user list.
     * @param {DescribeAppInfoRequest} req
     * @param {function(string, DescribeAppInfoResponse):void} cb
     * @public
     */
    DescribeAppInfo(req, cb) {
        let resp = new DescribeAppInfoResponse();
        this.request("DescribeAppInfo", req, resp, cb);
    }

    /**
     * This API is used to get topic attributes.

     * @param {DescribeTopicAttributesRequest} req
     * @param {function(string, DescribeTopicAttributesResponse):void} cb
     * @public
     */
    DescribeTopicAttributes(req, cb) {
        let resp = new DescribeTopicAttributesResponse();
        this.request("DescribeTopicAttributes", req, resp, cb);
    }

    /**
     * This API is used to delete a monthly subscribed (prepaid) instance.
     * @param {DeleteInstancePreRequest} req
     * @param {function(string, DeleteInstancePreResponse):void} cb
     * @public
     */
    DeleteInstancePre(req, cb) {
        let resp = new DeleteInstancePreResponse();
        this.request("DeleteInstancePre", req, resp, cb);
    }

    /**
     * This API is used to get instance attributes. 
     * @param {DescribeInstanceAttributesRequest} req
     * @param {function(string, DescribeInstanceAttributesResponse):void} cb
     * @public
     */
    DescribeInstanceAttributes(req, cb) {
        let resp = new DescribeInstanceAttributesResponse();
        this.request("DescribeInstanceAttributes", req, resp, cb);
    }

    /**
     * This API is used to get instance list details under a user account.
     * @param {DescribeInstancesDetailRequest} req
     * @param {function(string, DescribeInstancesDetailResponse):void} cb
     * @public
     */
    DescribeInstancesDetail(req, cb) {
        let resp = new DescribeInstancesDetailResponse();
        this.request("DescribeInstancesDetail", req, resp, cb);
    }

    /**
     * This API is used to create ACL policies in batches.
     * @param {BatchCreateAclRequest} req
     * @param {function(string, BatchCreateAclResponse):void} cb
     * @public
     */
    BatchCreateAcl(req, cb) {
        let resp = new BatchCreateAclResponse();
        this.request("BatchCreateAcl", req, resp, cb);
    }

    /**
     * This API is used to modify the delayed trigger time of route deletion.
     * @param {DeleteRouteTriggerTimeRequest} req
     * @param {function(string, DeleteRouteTriggerTimeResponse):void} cb
     * @public
     */
    DeleteRouteTriggerTime(req, cb) {
        let resp = new DeleteRouteTriggerTimeResponse();
        this.request("DeleteRouteTriggerTime", req, resp, cb);
    }

    /**
     * This API is used to batch modify consumer group offsets.
     * @param {BatchModifyGroupOffsetsRequest} req
     * @param {function(string, BatchModifyGroupOffsetsResponse):void} cb
     * @public
     */
    BatchModifyGroupOffsets(req, cb) {
        let resp = new BatchModifyGroupOffsetsResponse();
        this.request("BatchModifyGroupOffsets", req, resp, cb);
    }

    /**
     * This API is used to replace `CreateInstancePost`  to create a pay-as-you-go instance.  You can call this API via SDK or the TencentCloud API console to create a pay-as-you-go CKafka instance,  which is an alternate option for making a purchase in the console.
     * @param {CreatePostPaidInstanceRequest} req
     * @param {function(string, CreatePostPaidInstanceResponse):void} cb
     * @public
     */
    CreatePostPaidInstance(req, cb) {
        let resp = new CreatePostPaidInstanceResponse();
        this.request("CreatePostPaidInstance", req, resp, cb);
    }

    /**
     * This API is used to get the consumer group offset.
     * @param {DescribeGroupOffsetsRequest} req
     * @param {function(string, DescribeGroupOffsetsResponse):void} cb
     * @public
     */
    DescribeGroupOffsets(req, cb) {
        let resp = new DescribeGroupOffsetsResponse();
        this.request("DescribeGroupOffsets", req, resp, cb);
    }

    /**
     * This API is used to query the connection information of the topic producer.
     * @param {DescribeTopicProduceConnectionRequest} req
     * @param {function(string, DescribeTopicProduceConnectionResponse):void} cb
     * @public
     */
    DescribeTopicProduceConnection(req, cb) {
        let resp = new DescribeTopicProduceConnectionResponse();
        this.request("DescribeTopicProduceConnection", req, resp, cb);
    }

    /**
     * API domain name: https://ckafka.tencentcloudapi.com
This API is used to get the list of topics in a CKafka instance of a user.
     * @param {DescribeTopicRequest} req
     * @param {function(string, DescribeTopicResponse):void} cb
     * @public
     */
    DescribeTopic(req, cb) {
        let resp = new DescribeTopicResponse();
        this.request("DescribeTopic", req, resp, cb);
    }

    /**
     * This API shows you how to create an ACL rule.
     * @param {CreateAclRuleRequest} req
     * @param {function(string, CreateAclRuleResponse):void} cb
     * @public
     */
    CreateAclRule(req, cb) {
        let resp = new CreateAclRuleResponse();
        this.request("CreateAclRule", req, resp, cb);
    }

    /**
     * This API is used to get the DataHub topic attributes.
     * @param {DescribeDatahubTopicRequest} req
     * @param {function(string, DescribeDatahubTopicResponse):void} cb
     * @public
     */
    DescribeDatahubTopic(req, cb) {
        let resp = new DescribeDatahubTopicResponse();
        this.request("DescribeDatahubTopic", req, resp, cb);
    }

    /**
     * This API is used to view the AZ list of Ckafka.
     * @param {DescribeCkafkaZoneRequest} req
     * @param {function(string, DescribeCkafkaZoneResponse):void} cb
     * @public
     */
    DescribeCkafkaZone(req, cb) {
        let resp = new DescribeCkafkaZoneResponse();
        this.request("DescribeCkafkaZone", req, resp, cb);
    }

    /**
     * This API is used to enumerate regions, and can be called only in Guangzhou.
     * @param {DescribeRegionRequest} req
     * @param {function(string, DescribeRegionResponse):void} cb
     * @public
     */
    DescribeRegion(req, cb) {
        let resp = new DescribeRegionResponse();
        this.request("DescribeRegion", req, resp, cb);
    }

    /**
     * This API is used to add a user.
     * @param {CreateUserRequest} req
     * @param {function(string, CreateUserResponse):void} cb
     * @public
     */
    CreateUser(req, cb) {
        let resp = new CreateUserResponse();
        this.request("CreateUser", req, resp, cb);
    }

    /**
     * This API is used to delete a CKafka topic.
     * @param {DeleteTopicRequest} req
     * @param {function(string, DeleteTopicResponse):void} cb
     * @public
     */
    DeleteTopic(req, cb) {
        let resp = new DeleteTopicResponse();
        this.request("DeleteTopic", req, resp, cb);
    }

    /**
     * This API is used to purchase a CKafka instance or query the instance renewal price.
     * @param {InquireCkafkaPriceRequest} req
     * @param {function(string, InquireCkafkaPriceResponse):void} cb
     * @public
     */
    InquireCkafkaPrice(req, cb) {
        let resp = new InquireCkafkaPriceResponse();
        this.request("InquireCkafkaPrice", req, resp, cb);
    }

    /**
     * This API is used to modify topic attributes.
     * @param {ModifyTopicAttributesRequest} req
     * @param {function(string, ModifyTopicAttributesResponse):void} cb
     * @public
     */
    ModifyTopicAttributes(req, cb) {
        let resp = new ModifyTopicAttributesResponse();
        this.request("ModifyTopicAttributes", req, resp, cb);
    }


}
module.exports = CkafkaClient;
