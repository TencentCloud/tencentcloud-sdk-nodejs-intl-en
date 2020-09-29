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
const TopicDetail = models.TopicDetail;
const DeleteAclRequest = models.DeleteAclRequest;
const GroupInfoMember = models.GroupInfoMember;
const DeleteUserRequest = models.DeleteUserRequest;
const PartitionOffset = models.PartitionOffset;
const DescribeACLRequest = models.DescribeACLRequest;
const DescribeTopicAttributesRequest = models.DescribeTopicAttributesRequest;
const DescribeInstanceAttributesRequest = models.DescribeInstanceAttributesRequest;
const ConsumerGroup = models.ConsumerGroup;
const Assignment = models.Assignment;
const DescribeConsumerGroupResponse = models.DescribeConsumerGroupResponse;
const DeleteTopicRequest = models.DeleteTopicRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const GroupInfoTopics = models.GroupInfoTopics;
const TopicResult = models.TopicResult;
const DescribeInstancesDetailResponse = models.DescribeInstancesDetailResponse;
const DescribeACLResponse = models.DescribeACLResponse;
const JgwOperateResponse = models.JgwOperateResponse;
const Topic = models.Topic;
const Tag = models.Tag;
const GroupResponse = models.GroupResponse;
const DescribeTopicAttributesResponse = models.DescribeTopicAttributesResponse;
const RouteResponse = models.RouteResponse;
const DescribeGroupResponse = models.DescribeGroupResponse;
const ModifyInstanceAttributesConfig = models.ModifyInstanceAttributesConfig;
const OperateResponseData = models.OperateResponseData;
const CreateUserResponse = models.CreateUserResponse;
const ModifyInstanceAttributesResponse = models.ModifyInstanceAttributesResponse;
const CreatePartitionResponse = models.CreatePartitionResponse;
const DeleteUserResponse = models.DeleteUserResponse;
const CreateAclRequest = models.CreateAclRequest;
const DescribeAppInfoRequest = models.DescribeAppInfoRequest;
const DescribeTopicResponse = models.DescribeTopicResponse;
const ConsumerGroupResponse = models.ConsumerGroupResponse;
const CreateTopicIpWhiteListResponse = models.CreateTopicIpWhiteListResponse;
const GroupOffsetTopic = models.GroupOffsetTopic;
const ModifyGroupOffsetsResponse = models.ModifyGroupOffsetsResponse;
const Partition = models.Partition;
const CreateAclResponse = models.CreateAclResponse;
const CreateTopicRequest = models.CreateTopicRequest;
const DeleteAclResponse = models.DeleteAclResponse;
const DescribeRouteRequest = models.DescribeRouteRequest;
const InstanceConfigDO = models.InstanceConfigDO;
const UserResponse = models.UserResponse;
const DescribeGroupInfoRequest = models.DescribeGroupInfoRequest;
const DescribeGroupInfoResponse = models.DescribeGroupInfoResponse;
const DescribeUserResponse = models.DescribeUserResponse;
const AppIdResponse = models.AppIdResponse;
const DescribeTopicRequest = models.DescribeTopicRequest;
const CreatePartitionRequest = models.CreatePartitionRequest;
const Group = models.Group;
const DescribeAppInfoResponse = models.DescribeAppInfoResponse;
const AclResponse = models.AclResponse;
const Instance = models.Instance;
const DescribeInstanceAttributesResponse = models.DescribeInstanceAttributesResponse;
const TopicDetailResponse = models.TopicDetailResponse;
const Config = models.Config;
const ModifyPasswordRequest = models.ModifyPasswordRequest;
const ModifyInstanceAttributesRequest = models.ModifyInstanceAttributesRequest;
const ModifyTopicAttributesResponse = models.ModifyTopicAttributesResponse;
const DescribeConsumerGroupRequest = models.DescribeConsumerGroupRequest;
const VipEntity = models.VipEntity;
const ConsumerGroupTopic = models.ConsumerGroupTopic;
const User = models.User;
const GroupOffsetPartition = models.GroupOffsetPartition;
const DeleteTopicResponse = models.DeleteTopicResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const InstanceAttributesResponse = models.InstanceAttributesResponse;
const DescribeGroupRequest = models.DescribeGroupRequest;
const Filter = models.Filter;
const GroupOffsetResponse = models.GroupOffsetResponse;
const CreateUserRequest = models.CreateUserRequest;
const DeleteTopicIpWhiteListResponse = models.DeleteTopicIpWhiteListResponse;
const DescribeInstancesDetailRequest = models.DescribeInstancesDetailRequest;
const ModifyPasswordResponse = models.ModifyPasswordResponse;
const InstanceDetailResponse = models.InstanceDetailResponse;
const GroupInfoResponse = models.GroupInfoResponse;
const TopicAttributesResponse = models.TopicAttributesResponse;
const InstanceResponse = models.InstanceResponse;
const DescribeGroup = models.DescribeGroup;
const TopicPartitionDO = models.TopicPartitionDO;
const CreateTopicResp = models.CreateTopicResp;
const DescribeRouteResponse = models.DescribeRouteResponse;
const DescribeTopicDetailRequest = models.DescribeTopicDetailRequest;
const DescribeGroupOffsetsResponse = models.DescribeGroupOffsetsResponse;
const ModifyGroupOffsetsRequest = models.ModifyGroupOffsetsRequest;
const CreateTopicIpWhiteListRequest = models.CreateTopicIpWhiteListRequest;
const Route = models.Route;
const Acl = models.Acl;
const ModifyTopicAttributesRequest = models.ModifyTopicAttributesRequest;
const CreateTopicResponse = models.CreateTopicResponse;
const DeleteTopicIpWhiteListRequest = models.DeleteTopicIpWhiteListRequest;
const DescribeGroupOffsetsRequest = models.DescribeGroupOffsetsRequest;
const DescribeUserRequest = models.DescribeUserRequest;
const InstanceDetail = models.InstanceDetail;
const DescribeTopicDetailResponse = models.DescribeTopicDetailResponse;
const SubscribedInfo = models.SubscribedInfo;


/**
 * ckafka client
 * @class
 */
class CkafkaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ckafka.tencentcloudapi.com", "2019-08-19", credential, region, profile);
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
     * This API is used to modify topic attributes.
     * @param {ModifyTopicAttributesRequest} req
     * @param {function(string, ModifyTopicAttributesResponse):void} cb
     * @public
     */
    ModifyTopicAttributes(req, cb) {
        let resp = new ModifyTopicAttributesResponse();
        this.request("ModifyTopicAttributes", req, resp, cb);
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


}
module.exports = CkafkaClient;
