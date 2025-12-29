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
const DescribeCkafkaVersionResponse = models.DescribeCkafkaVersionResponse;
const TopicDetail = models.TopicDetail;
const DeleteAclRequest = models.DeleteAclRequest;
const GroupInfoMember = models.GroupInfoMember;
const AclRuleInfo = models.AclRuleInfo;
const BatchCreateAclRequest = models.BatchCreateAclRequest;
const DeleteUserRequest = models.DeleteUserRequest;
const PartitionOffset = models.PartitionOffset;
const DescribeACLRequest = models.DescribeACLRequest;
const InstanceDeleteResponse = models.InstanceDeleteResponse;
const BatchModifyTopicResultDTO = models.BatchModifyTopicResultDTO;
const DescribeTopicAttributesRequest = models.DescribeTopicAttributesRequest;
const DescribeInstanceAttributesRequest = models.DescribeInstanceAttributesRequest;
const ConsumerGroup = models.ConsumerGroup;
const Assignment = models.Assignment;
const ModifyAclRuleRequest = models.ModifyAclRuleRequest;
const DescribeAclRuleResponse = models.DescribeAclRuleResponse;
const DescribeConsumerGroupResponse = models.DescribeConsumerGroupResponse;
const InquiryDetailPrice = models.InquiryDetailPrice;
const FetchMessageListByOffsetResponse = models.FetchMessageListByOffsetResponse;
const InquireCkafkaPriceResp = models.InquireCkafkaPriceResp;
const CreateRouteRequest = models.CreateRouteRequest;
const DeleteTopicRequest = models.DeleteTopicRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const FetchMessageByOffsetResponse = models.FetchMessageByOffsetResponse;
const BatchModifyTopicAttributesResponse = models.BatchModifyTopicAttributesResponse;
const CreateInstancePreResp = models.CreateInstancePreResp;
const GroupInfoTopics = models.GroupInfoTopics;
const InstanceScalingDownRequest = models.InstanceScalingDownRequest;
const FetchMessageListByOffsetRequest = models.FetchMessageListByOffsetRequest;
const DescribeSecurityGroupRoutesResponse = models.DescribeSecurityGroupRoutesResponse;
const UpgradeBrokerVersionRequest = models.UpgradeBrokerVersionRequest;
const ModifyInstancePreRequest = models.ModifyInstancePreRequest;
const CreateAclRuleRequest = models.CreateAclRuleRequest;
const RouteFilter = models.RouteFilter;
const DescribeInstancesDetailResponse = models.DescribeInstancesDetailResponse;
const CreateInstancePreData = models.CreateInstancePreData;
const AclRule = models.AclRule;
const DescribeAclRuleRequest = models.DescribeAclRuleRequest;
const InstanceRoute = models.InstanceRoute;
const DescribeACLResponse = models.DescribeACLResponse;
const DynamicDiskConfig = models.DynamicDiskConfig;
const JgwOperateResponse = models.JgwOperateResponse;
const InquireCkafkaPriceRequest = models.InquireCkafkaPriceRequest;
const ZoneInfo = models.ZoneInfo;
const DescribeTopicSubscribeGroupResponse = models.DescribeTopicSubscribeGroupResponse;
const DescribeCkafkaZoneRequest = models.DescribeCkafkaZoneRequest;
const SaleInfo = models.SaleInfo;
const Topic = models.Topic;
const DescribeTypeInstancesResponse = models.DescribeTypeInstancesResponse;
const Tag = models.Tag;
const ModifyAclRuleResponse = models.ModifyAclRuleResponse;
const BatchModifyGroupOffsetsResponse = models.BatchModifyGroupOffsetsResponse;
const SecurityGroupRoute = models.SecurityGroupRoute;
const GroupResponse = models.GroupResponse;
const FetchMessageListByTimestampRequest = models.FetchMessageListByTimestampRequest;
const CreateDatahubTopicRequest = models.CreateDatahubTopicRequest;
const InstanceChargeParam = models.InstanceChargeParam;
const CreateInstancePostResp = models.CreateInstancePostResp;
const DescribeDatahubTopicResponse = models.DescribeDatahubTopicResponse;
const DescribeConsumerGroupRequest = models.DescribeConsumerGroupRequest;
const DescribeCvmInfoRequest = models.DescribeCvmInfoRequest;
const CreateConsumerResponse = models.CreateConsumerResponse;
const CreatePostPaidInstanceRequest = models.CreatePostPaidInstanceRequest;
const RouteResponse = models.RouteResponse;
const DescribeGroupResponse = models.DescribeGroupResponse;
const DeleteAclRuleRequest = models.DeleteAclRuleRequest;
const ModifyInstanceAttributesConfig = models.ModifyInstanceAttributesConfig;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const DescribeModifyTypeRequest = models.DescribeModifyTypeRequest;
const OperateResponseData = models.OperateResponseData;
const CreateUserResponse = models.CreateUserResponse;
const DescribeRouteRequest = models.DescribeRouteRequest;
const CreatePartitionResponse = models.CreatePartitionResponse;
const TopicAttributesResponse = models.TopicAttributesResponse;
const TopicSubscribeGroup = models.TopicSubscribeGroup;
const ClusterInfo = models.ClusterInfo;
const DeleteGroupRequest = models.DeleteGroupRequest;
const DeleteInstancePostRequest = models.DeleteInstancePostRequest;
const DeleteUserResponse = models.DeleteUserResponse;
const DescribeTopicProduceConnectionRequest = models.DescribeTopicProduceConnectionRequest;
const CreateAclRequest = models.CreateAclRequest;
const DescribeTopicSyncReplicaResponse = models.DescribeTopicSyncReplicaResponse;
const TopicResult = models.TopicResult;
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
const DeleteRouteTriggerTimeRequest = models.DeleteRouteTriggerTimeRequest;
const DescribeTopicSubscribeGroupRequest = models.DescribeTopicSubscribeGroupRequest;
const DeleteInstancePreResponse = models.DeleteInstancePreResponse;
const DeleteGroupSubscribeTopicRequest = models.DeleteGroupSubscribeTopicRequest;
const DatahubTopicResp = models.DatahubTopicResp;
const FetchMessageByOffsetRequest = models.FetchMessageByOffsetRequest;
const InquiryPublicNetworkParam = models.InquiryPublicNetworkParam;
const TopicInSyncReplicaInfo = models.TopicInSyncReplicaInfo;
const DescribeRegionRequest = models.DescribeRegionRequest;
const InstanceConfigDO = models.InstanceConfigDO;
const DeleteAclRuleResponse = models.DeleteAclRuleResponse;
const UserResponse = models.UserResponse;
const DescribeCvmInfoResponse = models.DescribeCvmInfoResponse;
const DescribeGroupInfoResponse = models.DescribeGroupInfoResponse;
const ModifyTopicAttributesResponse = models.ModifyTopicAttributesResponse;
const BatchContent = models.BatchContent;
const DeleteRouteTriggerTimeResponse = models.DeleteRouteTriggerTimeResponse;
const DescribeUserResponse = models.DescribeUserResponse;
const DescribeTopicRequest = models.DescribeTopicRequest;
const DealInstanceDTO = models.DealInstanceDTO;
const CreatePartitionRequest = models.CreatePartitionRequest;
const Group = models.Group;
const GroupInfoResponse = models.GroupInfoResponse;
const GroupOffsetResponse = models.GroupOffsetResponse;
const AclResponse = models.AclResponse;
const DescribeModifyTypeResponse = models.DescribeModifyTypeResponse;
const ZoneResponse = models.ZoneResponse;
const ModifyRoutineMaintenanceTaskRequest = models.ModifyRoutineMaintenanceTaskRequest;
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
const CreateTopicResponse = models.CreateTopicResponse;
const VipEntity = models.VipEntity;
const DescribeTopicProduceConnectionResponse = models.DescribeTopicProduceConnectionResponse;
const ModifyInstanceAttributesResponse = models.ModifyInstanceAttributesResponse;
const ConsumerGroupTopic = models.ConsumerGroupTopic;
const User = models.User;
const CreateAclRuleResponse = models.CreateAclRuleResponse;
const DescribeTopicAttributesResponse = models.DescribeTopicAttributesResponse;
const UpgradeBrokerVersionResponse = models.UpgradeBrokerVersionResponse;
const CreateInstancePostData = models.CreateInstancePostData;
const DescribeGroupOffsetsRequest = models.DescribeGroupOffsetsRequest;
const DescModifyType = models.DescModifyType;
const GroupOffsetPartition = models.GroupOffsetPartition;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const InstanceAttributesResponse = models.InstanceAttributesResponse;
const DescribeDatahubTopicsResponse = models.DescribeDatahubTopicsResponse;
const DescribeGroupRequest = models.DescribeGroupRequest;
const Filter = models.Filter;
const BatchCreateAclResponse = models.BatchCreateAclResponse;
const DescribeSecurityGroupRoutesRequest = models.DescribeSecurityGroupRoutesRequest;
const ModifyInstancePreResponse = models.ModifyInstancePreResponse;
const CreateUserRequest = models.CreateUserRequest;
const InstanceDetailResponse = models.InstanceDetailResponse;
const DeleteRouteRequest = models.DeleteRouteRequest;
const DeleteTopicIpWhiteListResponse = models.DeleteTopicIpWhiteListResponse;
const CreateInstancePreResponse = models.CreateInstancePreResponse;
const CvmAndIpInfo = models.CvmAndIpInfo;
const DescribeInstancesDetailRequest = models.DescribeInstancesDetailRequest;
const Region = models.Region;
const InstanceScalingDownResponse = models.InstanceScalingDownResponse;
const CreateConsumerRequest = models.CreateConsumerRequest;
const DeleteGroupSubscribeTopicResponse = models.DeleteGroupSubscribeTopicResponse;
const InquireCkafkaPriceResponse = models.InquireCkafkaPriceResponse;
const CreateDatahubTopicResponse = models.CreateDatahubTopicResponse;
const CreatePostPaidInstanceResponse = models.CreatePostPaidInstanceResponse;
const RouteDTO = models.RouteDTO;
const InquiryDiskParam = models.InquiryDiskParam;
const TopicInSyncReplicaResult = models.TopicInSyncReplicaResult;
const ScalingDownResp = models.ScalingDownResp;
const SendMessageResponse = models.SendMessageResponse;
const InquiryBasePrice = models.InquiryBasePrice;
const DescribeCkafkaZoneResponse = models.DescribeCkafkaZoneResponse;
const BatchModifyGroupOffsetsRequest = models.BatchModifyGroupOffsetsRequest;
const Price = models.Price;
const ListCvmAndIpInfoRsp = models.ListCvmAndIpInfoRsp;
const CreateRouteResponse = models.CreateRouteResponse;
const InstanceResponse = models.InstanceResponse;
const DatahubTopicDTO = models.DatahubTopicDTO;
const DescribeGroupInfoRequest = models.DescribeGroupInfoRequest;
const DescribeGroup = models.DescribeGroup;
const TopicPartitionDO = models.TopicPartitionDO;
const CreateTopicResp = models.CreateTopicResp;
const TaskStatusResponse = models.TaskStatusResponse;
const BatchModifyTopicInfo = models.BatchModifyTopicInfo;
const DescribeRouteResponse = models.DescribeRouteResponse;
const ModifyDatahubTopicResponse = models.ModifyDatahubTopicResponse;
const DescribeDatahubTopicsRequest = models.DescribeDatahubTopicsRequest;
const DescribeTypeInstancesRequest = models.DescribeTypeInstancesRequest;
const InquiryPrice = models.InquiryPrice;
const ModifyRoutineMaintenanceTaskResponse = models.ModifyRoutineMaintenanceTaskResponse;
const DescribeTopicDetailRequest = models.DescribeTopicDetailRequest;
const DescribeGroupOffsetsResponse = models.DescribeGroupOffsetsResponse;
const SendMessageRequest = models.SendMessageRequest;
const ConsumerRecord = models.ConsumerRecord;
const ModifyGroupOffsetsRequest = models.ModifyGroupOffsetsRequest;
const BatchModifyTopicAttributesRequest = models.BatchModifyTopicAttributesRequest;
const DeleteGroupResponse = models.DeleteGroupResponse;
const CreateTopicIpWhiteListRequest = models.CreateTopicIpWhiteListRequest;
const Route = models.Route;
const FetchMessageListByTimestampResponse = models.FetchMessageListByTimestampResponse;
const DeleteInstancePostResponse = models.DeleteInstancePostResponse;
const Acl = models.Acl;
const TopicRetentionTimeConfigRsp = models.TopicRetentionTimeConfigRsp;
const ModifyDatahubTopicRequest = models.ModifyDatahubTopicRequest;
const ModifyTopicAttributesRequest = models.ModifyTopicAttributesRequest;
const CreateInstancePreRequest = models.CreateInstancePreRequest;
const DeleteTopicIpWhiteListRequest = models.DeleteTopicIpWhiteListRequest;
const DeleteTopicResponse = models.DeleteTopicResponse;
const DescribeDatahubTopicResp = models.DescribeDatahubTopicResp;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const DescribeUserRequest = models.DescribeUserRequest;
const DescribeDatahubTopicsResp = models.DescribeDatahubTopicsResp;
const DescribeTopicSyncReplicaRequest = models.DescribeTopicSyncReplicaRequest;
const InstanceDetail = models.InstanceDetail;
const InstanceQuotaConfigResp = models.InstanceQuotaConfigResp;
const DescribeTopicDetailResponse = models.DescribeTopicDetailResponse;
const SubscribedInfo = models.SubscribedInfo;
const AclRuleResp = models.AclRuleResp;
const InstanceVersion = models.InstanceVersion;
const SecurityGroupRouteResp = models.SecurityGroupRouteResp;
const LatestBrokerVersion = models.LatestBrokerVersion;
const DescribeCkafkaVersionRequest = models.DescribeCkafkaVersionRequest;


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
     * This API is used to search for a list of TDMQ CKafka instances of the specified type under a user account.
     * @param {DescribeTypeInstancesRequest} req
     * @param {function(string, DescribeTypeInstancesResponse):void} cb
     * @public
     */
    DescribeTypeInstances(req, cb) {
        let resp = new DescribeTypeInstancesResponse();
        this.request("DescribeTypeInstances", req, resp, cb);
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
     * This API is used to retrieve the security group route information list.
     * @param {DescribeSecurityGroupRoutesRequest} req
     * @param {function(string, DescribeSecurityGroupRoutesResponse):void} cb
     * @public
     */
    DescribeSecurityGroupRoutes(req, cb) {
        let resp = new DescribeSecurityGroupRoutesResponse();
        this.request("DescribeSecurityGroupRoutes", req, resp, cb);
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
     * This API is used to modify DIP topic attributes.
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
     * This API is used to query instance version information.
     * @param {DescribeCkafkaVersionRequest} req
     * @param {function(string, DescribeCkafkaVersionResponse):void} cb
     * @public
     */
    DescribeCkafkaVersion(req, cb) {
        let resp = new DescribeCkafkaVersionResponse();
        this.request("DescribeCkafkaVersion", req, resp, cb);
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
     * This API is used to upgrade the broker version.
     * @param {UpgradeBrokerVersionRequest} req
     * @param {function(string, UpgradeBrokerVersionResponse):void} cb
     * @public
     */
    UpgradeBrokerVersion(req, cb) {
        let resp = new UpgradeBrokerVersionResponse();
        this.request("UpgradeBrokerVersion", req, resp, cb);
    }

    /**
     * This API is used to search for a list of TDMQ CKafka instances under a user account.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to get instance information corresponding to backend CVM, including cvmId and ip. It is for Pro Edition, while Standard Edition returns empty data.
     * @param {DescribeCvmInfoRequest} req
     * @param {function(string, DescribeCvmInfoResponse):void} cb
     * @public
     */
    DescribeCvmInfo(req, cb) {
        let resp = new DescribeCvmInfoResponse();
        this.request("DescribeCvmInfo", req, resp, cb);
    }

    /**
     * This API is used to add instance routes.
     * @param {CreateRouteRequest} req
     * @param {function(string, CreateRouteResponse):void} cb
     * @public
     */
    CreateRoute(req, cb) {
        let resp = new CreateRouteResponse();
        this.request("CreateRoute", req, resp, cb);
    }

    /**
     * This API is used to delete topics subscribed by a consumption group. The consumption group status must be Empty.
     * @param {DeleteGroupSubscribeTopicRequest} req
     * @param {function(string, DeleteGroupSubscribeTopicResponse):void} cb
     * @public
     */
    DeleteGroupSubscribeTopic(req, cb) {
        let resp = new DeleteGroupSubscribeTopicResponse();
        this.request("DeleteGroupSubscribeTopic", req, resp, cb);
    }

    /**
     * Delete consumer groups.
     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        let resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
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
     * This API is used to create a DIP topic.
     * @param {CreateDatahubTopicRequest} req
     * @param {function(string, CreateDatahubTopicResponse):void} cb
     * @public
     */
    CreateDatahubTopic(req, cb) {
        let resp = new CreateDatahubTopicResponse();
        this.request("CreateDatahubTopic", req, resp, cb);
    }

    /**
     * This API is used to delete post-payment instances. It directly performs instance termination by calling API deletion without associating connectors and tasks in pre-check.
     * @param {DeleteInstancePostRequest} req
     * @param {function(string, DeleteInstancePostResponse):void} cb
     * @public
     */
    DeleteInstancePost(req, cb) {
        let resp = new DeleteInstancePostResponse();
        this.request("DeleteInstancePost", req, resp, cb);
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
     * This API is used to create prepaid annual and monthly instances. It only supports creating Pro Edition instances.
     * @param {CreateInstancePreRequest} req
     * @param {function(string, CreateInstancePreResponse):void} cb
     * @public
     */
    CreateInstancePre(req, cb) {
        let resp = new CreateInstancePreResponse();
        this.request("CreateInstancePre", req, resp, cb);
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
     * This API is used to set automated ops attributes.
     * @param {ModifyRoutineMaintenanceTaskRequest} req
     * @param {function(string, ModifyRoutineMaintenanceTaskResponse):void} cb
     * @public
     */
    ModifyRoutineMaintenanceTask(req, cb) {
        let resp = new ModifyRoutineMaintenanceTaskResponse();
        this.request("ModifyRoutineMaintenanceTask", req, resp, cb);
    }

    /**
     * This API is used to modify ACL policy, currently only support whether to apply preset rules to newly-added topics.
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
     * This API is used to query instance specification change types.
     * @param {DescribeModifyTypeRequest} req
     * @param {function(string, DescribeModifyTypeResponse):void} cb
     * @public
     */
    DescribeModifyType(req, cb) {
        let resp = new DescribeModifyTypeResponse();
        this.request("DescribeModifyType", req, resp, cb);
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
     * This API is used to perform downsizing on a pay-as-you-go instance.
     * @param {InstanceScalingDownRequest} req
     * @param {function(string, InstanceScalingDownResponse):void} cb
     * @public
     */
    InstanceScalingDown(req, cb) {
        let resp = new InstanceScalingDownResponse();
        this.request("InstanceScalingDown", req, resp, cb);
    }

    /**
     * This API is used to retrieve topic attributes.
     * @param {DescribeTopicAttributesRequest} req
     * @param {function(string, DescribeTopicAttributesResponse):void} cb
     * @public
     */
    DescribeTopicAttributes(req, cb) {
        let resp = new DescribeTopicAttributesResponse();
        this.request("DescribeTopicAttributes", req, resp, cb);
    }

    /**
     * This API is used to delete prepaid instances. It performs isolation and deletion actions on the instance. After successful execution, the instance will be directly deleted and terminated. By calling API deletion, it directly performs instance termination without associating connectors and tasks in pre-check.
     * @param {DeleteInstancePreRequest} req
     * @param {function(string, DeleteInstancePreResponse):void} cb
     * @public
     */
    DeleteInstancePre(req, cb) {
        let resp = new DeleteInstancePreResponse();
        this.request("DeleteInstancePre", req, resp, cb);
    }

    /**
     * This API is used to obtain instance attributes.
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
     * This API is used to delete an ACL rule.
     * @param {DeleteAclRuleRequest} req
     * @param {function(string, DeleteAclRuleResponse):void} cb
     * @public
     */
    DeleteAclRule(req, cb) {
        let resp = new DeleteAclRuleResponse();
        this.request("DeleteAclRule", req, resp, cb);
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
     * This API is used to query a message list by timestamp.
     * @param {FetchMessageListByTimestampRequest} req
     * @param {function(string, FetchMessageListByTimestampResponse):void} cb
     * @public
     */
    FetchMessageListByTimestamp(req, cb) {
        let resp = new FetchMessageListByTimestampResponse();
        this.request("FetchMessageListByTimestamp", req, resp, cb);
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
     * This API is used to retrieve DIP topic attributes.
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
     * This API is used to change the configuration of prepaid instances, adjust disks, modify bandwidth, and manage partitions.
     * @param {ModifyInstancePreRequest} req
     * @param {function(string, ModifyInstancePreResponse):void} cb
     * @public
     */
    ModifyInstancePre(req, cb) {
        let resp = new ModifyInstancePreResponse();
        this.request("ModifyInstancePre", req, resp, cb);
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
