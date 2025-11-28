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
const DetailedRolePerm = models.DetailedRolePerm;
const DescribeProductSKUsRequest = models.DescribeProductSKUsRequest;
const ResetConsumerGroupOffsetResponse = models.ResetConsumerGroupOffsetResponse;
const DescribeSmoothMigrationTaskListRequest = models.DescribeSmoothMigrationTaskListRequest;
const ProductSKU = models.ProductSKU;
const DescribeRoleListResponse = models.DescribeRoleListResponse;
const CreateInstanceResponse = models.CreateInstanceResponse;
const DescribeConsumerClientResponse = models.DescribeConsumerClientResponse;
const DescribeMessageListRequest = models.DescribeMessageListRequest;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const FusionInstanceItem = models.FusionInstanceItem;
const InstanceItemExtraInfo = models.InstanceItemExtraInfo;
const DescribeConsumerGroupResponse = models.DescribeConsumerGroupResponse;
const DeleteTopicRequest = models.DeleteTopicRequest;
const DescribeSmoothMigrationTaskListResponse = models.DescribeSmoothMigrationTaskListResponse;
const DescribeMigrationTaskListResponse = models.DescribeMigrationTaskListResponse;
const VpcInfo = models.VpcInfo;
const DescribeRoleListRequest = models.DescribeRoleListRequest;
const DescribeMigratingTopicStatsResponse = models.DescribeMigratingTopicStatsResponse;
const DescribeConsumerLagRequest = models.DescribeConsumerLagRequest;
const DescribeMigratingGroupStatsRequest = models.DescribeMigratingGroupStatsRequest;
const Tag = models.Tag;
const DescribeSourceClusterGroupListResponse = models.DescribeSourceClusterGroupListResponse;
const DescribeMessageListResponse = models.DescribeMessageListResponse;
const DeleteSmoothMigrationTaskRequest = models.DeleteSmoothMigrationTaskRequest;
const DescribeInstanceListResponse = models.DescribeInstanceListResponse;
const DescribeConsumerClientListResponse = models.DescribeConsumerClientListResponse;
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const CreateConsumerGroupRequest = models.CreateConsumerGroupRequest;
const ClientSubscriptionInfo = models.ClientSubscriptionInfo;
const ChangeMigratingTopicToNextStageResponse = models.ChangeMigratingTopicToNextStageResponse;
const DescribeSourceClusterGroupListRequest = models.DescribeSourceClusterGroupListRequest;
const DescribeInstanceListRequest = models.DescribeInstanceListRequest;
const DescribeMigrationTaskListRequest = models.DescribeMigrationTaskListRequest;
const ModifyRoleResponse = models.ModifyRoleResponse;
const TopicStageChangeResult = models.TopicStageChangeResult;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const DescribeTopicResponse = models.DescribeTopicResponse;
const SmoothMigrationTaskItem = models.SmoothMigrationTaskItem;
const ModifyRoleRequest = models.ModifyRoleRequest;
const DescribeFusionInstanceListResponse = models.DescribeFusionInstanceListResponse;
const ResendDeadLetterMessageResponse = models.ResendDeadLetterMessageResponse;
const DescribeMessageRequest = models.DescribeMessageRequest;
const DeleteRoleRequest = models.DeleteRoleRequest;
const TopicConsumeStats = models.TopicConsumeStats;
const DescribeMigratingTopicStatsRequest = models.DescribeMigratingTopicStatsRequest;
const DeleteConsumerGroupRequest = models.DeleteConsumerGroupRequest;
const CreateConsumerGroupResponse = models.CreateConsumerGroupResponse;
const RollbackMigratingTopicStageRequest = models.RollbackMigratingTopicStageRequest;
const DescribeTopicListByGroupResponse = models.DescribeTopicListByGroupResponse;
const DescribeMessageTraceResponse = models.DescribeMessageTraceResponse;
const DoHealthCheckOnMigratingTopicRequest = models.DoHealthCheckOnMigratingTopicRequest;
const DescribeProducerListRequest = models.DescribeProducerListRequest;
const DescribeMigratingTopicListResponse = models.DescribeMigratingTopicListResponse;
const InstanceItem = models.InstanceItem;
const DescribeTopicRequest = models.DescribeTopicRequest;
const DescribeMessageTraceRequest = models.DescribeMessageTraceRequest;
const DeleteSmoothMigrationTaskResponse = models.DeleteSmoothMigrationTaskResponse;
const DescribeMigratingGroupStatsResponse = models.DescribeMigratingGroupStatsResponse;
const RemoveMigratingTopicRequest = models.RemoveMigratingTopicRequest;
const DescribeMessageResponse = models.DescribeMessageResponse;
const ZoneScheduledItem = models.ZoneScheduledItem;
const DescribeTopicListRequest = models.DescribeTopicListRequest;
const ModifyConsumerGroupRequest = models.ModifyConsumerGroupRequest;
const DescribeConsumerGroupRequest = models.DescribeConsumerGroupRequest;
const MigrationTaskItem = models.MigrationTaskItem;
const TopicItem = models.TopicItem;
const SubscriptionData = models.SubscriptionData;
const CreateInstanceRequest = models.CreateInstanceRequest;
const ConsumerClient = models.ConsumerClient;
const MessageTraceItem = models.MessageTraceItem;
const DescribeConsumerClientRequest = models.DescribeConsumerClientRequest;
const ModifyTopicResponse = models.ModifyTopicResponse;
const DescribeConsumerLagResponse = models.DescribeConsumerLagResponse;
const ChangeMigratingTopicToNextStageRequest = models.ChangeMigratingTopicToNextStageRequest;
const DeleteRoleResponse = models.DeleteRoleResponse;
const DescribeTopicListByGroupRequest = models.DescribeTopicListByGroupRequest;
const DescribeMigratingTopicListRequest = models.DescribeMigratingTopicListRequest;
const Filter = models.Filter;
const ModifyTopicRequest = models.ModifyTopicRequest;
const DescribeInstanceResponse = models.DescribeInstanceResponse;
const ModifyConsumerGroupResponse = models.ModifyConsumerGroupResponse;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const MessageTrackItem = models.MessageTrackItem;
const DescribeProducerListResponse = models.DescribeProducerListResponse;
const ResendDeadLetterMessageRequest = models.ResendDeadLetterMessageRequest;
const RollbackMigratingTopicStageResponse = models.RollbackMigratingTopicStageResponse;
const DescribeFusionInstanceListRequest = models.DescribeFusionInstanceListRequest;
const DoHealthCheckOnMigratingTopicResponse = models.DoHealthCheckOnMigratingTopicResponse;
const CreateRoleResponse = models.CreateRoleResponse;
const ModifyInstanceEndpointRequest = models.ModifyInstanceEndpointRequest;
const SourceClusterGroupConfig = models.SourceClusterGroupConfig;
const DescribeTopicListResponse = models.DescribeTopicListResponse;
const DescribeConsumerClientListRequest = models.DescribeConsumerClientListRequest;
const MigratingTopic = models.MigratingTopic;
const CreateRoleRequest = models.CreateRoleRequest;
const DeleteConsumerGroupResponse = models.DeleteConsumerGroupResponse;
const Endpoint = models.Endpoint;
const MessageItem = models.MessageItem;
const RoleItem = models.RoleItem;
const TagFilter = models.TagFilter;
const PriceTag = models.PriceTag;
const ProducerInfo = models.ProducerInfo;
const DeleteTopicResponse = models.DeleteTopicResponse;
const ModifyInstanceEndpointResponse = models.ModifyInstanceEndpointResponse;
const DescribeInstanceRequest = models.DescribeInstanceRequest;
const DescribeProductSKUsResponse = models.DescribeProductSKUsResponse;
const RemoveMigratingTopicResponse = models.RemoveMigratingTopicResponse;
const IpRule = models.IpRule;
const ResetConsumerGroupOffsetRequest = models.ResetConsumerGroupOffsetRequest;


/**
 * trocket client
 * @class
 */
class TrocketClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("trocket.intl.tencentcloudapi.com", "2023-03-08", credential, region, profile);
    }
    
    /**
     * This API is used to obtain the group list of the source cluster during the smooth migration process.

The Filters field is a query filter that supports the following fields:.
This API is used to query consumer group names with fuzzy search support.
This API is used to check whether the data is Imported.
This api is used to check the import status. See SourceClusterGroupConfig (https://www.tencentcloud.comom/document/api/1493/96031?from_cn_redirect=1#SourceClusterGroupConfig) for details.
This API is used to manage namespaces, valid only for 4.x clusters.

This API is used to demonstrate Filters.
[{
    "Name": "GroupName",
    "Values": ["group-a"]
}]
     * @param {DescribeSourceClusterGroupListRequest} req
     * @param {function(string, DescribeSourceClusterGroupListResponse):void} cb
     * @public
     */
    DescribeSourceClusterGroupList(req, cb) {
        let resp = new DescribeSourceClusterGroupListResponse();
        this.request("DescribeSourceClusterGroupList", req, resp, cb);
    }

    /**
     * This API is used to query the Topic migration status list.

The Filters field is a query filter that supports the following conditions:.
This API is used to get topic names with fuzzy query support.
This api is used to query the migration status. See the data structure in MigratingTopic (https://www.tencentcloud.comom/document/api/1493/96031?from_cn_redirect=1#MigratingTopic).
This API is used to manage namespaces, valid only for 4.x clusters.

This API is used to demonstrate Filters.
[{
    "Name": "TopicName",
    "Values": ["topic-a"]
}]
     * @param {DescribeMigratingTopicListRequest} req
     * @param {function(string, DescribeMigratingTopicListResponse):void} cb
     * @public
     */
    DescribeMigratingTopicList(req, cb) {
        let resp = new DescribeMigratingTopicListResponse();
        this.request("DescribeMigratingTopicList", req, resp, cb);
    }

    /**
     * This API is used to query message trace by message ID.
     * @param {DescribeMessageTraceRequest} req
     * @param {function(string, DescribeMessageTraceResponse):void} cb
     * @public
     */
    DescribeMessageTrace(req, cb) {
        let resp = new DescribeMessageTraceResponse();
        this.request("DescribeMessageTrace", req, resp, cb);
    }

    /**
     * Modify topic attributes.
     * @param {ModifyTopicRequest} req
     * @param {function(string, ModifyTopicResponse):void} cb
     * @public
     */
    ModifyTopic(req, cb) {
        let resp = new ModifyTopicResponse();
        this.request("ModifyTopic", req, resp, cb);
    }

    /**
     * This API is used to get topic list by consumer group. Filter parameter usage instructions are as follows:.

-TopicName. It can be obtained from [TopicItem](https://www.tencentcloud.comom/document/api/1493/96031?from_cn_redirect=1#TopicItem) returned by the API [DescribeTopicList](https://www.tencentcloud.comom/document/api/1493/96030?from_cn_redirect=1) or from the console.

This API is used to demonstrate Filters. 
[{ "Name": "TopicName", "Values": ["test_topic"] }]
     * @param {DescribeTopicListByGroupRequest} req
     * @param {function(string, DescribeTopicListByGroupResponse):void} cb
     * @public
     */
    DescribeTopicListByGroup(req, cb) {
        let resp = new DescribeTopicListByGroupResponse();
        this.request("DescribeTopicListByGroup", req, resp, cb);
    }

    /**
     * This API is used to remove a topic from the migration list. It is valid only when the topic is in the initial state.
     * @param {RemoveMigratingTopicRequest} req
     * @param {function(string, RemoveMigratingTopicResponse):void} cb
     * @public
     */
    RemoveMigratingTopic(req, cb) {
        let resp = new RemoveMigratingTopicResponse();
        this.request("RemoveMigratingTopic", req, resp, cb);
    }

    /**
     * This API is used to add a role.
     * @param {CreateRoleRequest} req
     * @param {function(string, CreateRoleResponse):void} cb
     * @public
     */
    CreateRole(req, cb) {
        let resp = new CreateRoleResponse();
        this.request("CreateRole", req, resp, cb);
    }

    /**
     * This API is used to query the migration task list smoothly.

This API is used to query the supported fields of the query parameter Filters as follows:.
Task status, supports multiple selections. 
ConnectionType, network connection type, supports multiple selections. See the description of SmoothMigrationTaskItem (https://www.tencentcloud.comom/document/api/1493/96031?from_cn_redirect=1#SmoothMigrationTaskItem).
This API is used to search for an instance by instance ID with precise matching. 
This API is used to query task names with fuzzy search support.

This API is used to demonstrate Filters.
[{
    "Name": "InstanceId",
    "Values": ["rmq-1gzecldfg"]
}]
     * @param {DescribeSmoothMigrationTaskListRequest} req
     * @param {function(string, DescribeSmoothMigrationTaskListResponse):void} cb
     * @public
     */
    DescribeSmoothMigrationTaskList(req, cb) {
        let resp = new DescribeSmoothMigrationTaskListResponse();
        this.request("DescribeSmoothMigrationTaskList", req, resp, cb);
    }

    /**
     * This API is used to delete a TDMQ RocketMQ 5.x cluster. Topics, consumer groups, and roles in use should be deleted first.
     * @param {DeleteInstanceRequest} req
     * @param {function(string, DeleteInstanceResponse):void} cb
     * @public
     */
    DeleteInstance(req, cb) {
        let resp = new DeleteInstanceResponse();
        this.request("DeleteInstance", req, resp, cb);
    }

    /**
     * Create consumer groups.
     * @param {CreateConsumerGroupRequest} req
     * @param {function(string, CreateConsumerGroupResponse):void} cb
     * @public
     */
    CreateConsumerGroup(req, cb) {
        let resp = new CreateConsumerGroupResponse();
        this.request("CreateConsumerGroup", req, resp, cb);
    }

    /**
     * This API is used to query the list of roles. Filter parameter usage instructions are as follows:.

-Role name supports fuzzy search and can be obtained from the API return value or console.
-AccessKey, support fuzzy search, obtain from API return value or console.

This API is used to demonstrate Filters. 
[{ "Name": "RoleName", "Values": ["test_role"] }]
     * @param {DescribeRoleListRequest} req
     * @param {function(string, DescribeRoleListResponse):void} cb
     * @public
     */
    DescribeRoleList(req, cb) {
        let resp = new DescribeRoleListResponse();
        this.request("DescribeRoleList", req, resp, cb);
    }

    /**
     * This API is used to check whether the topics being migrated are in normal status. Only topics in normal status can enter the next migration stage.
     * @param {DoHealthCheckOnMigratingTopicRequest} req
     * @param {function(string, DoHealthCheckOnMigratingTopicResponse):void} cb
     * @public
     */
    DoHealthCheckOnMigratingTopic(req, cb) {
        let resp = new DoHealthCheckOnMigratingTopicResponse();
        this.request("DoHealthCheckOnMigratingTopic", req, resp, cb);
    }

    /**
     * Query message details.
     * @param {DescribeMessageRequest} req
     * @param {function(string, DescribeMessageResponse):void} cb
     * @public
     */
    DescribeMessage(req, cb) {
        let resp = new DescribeMessageResponse();
        this.request("DescribeMessage", req, resp, cb);
    }

    /**
     * Reset the consumption position.
     * @param {ResetConsumerGroupOffsetRequest} req
     * @param {function(string, ResetConsumerGroupOffsetResponse):void} cb
     * @public
     */
    ResetConsumerGroupOffset(req, cb) {
        let resp = new ResetConsumerGroupOffsetResponse();
        this.request("ResetConsumerGroupOffset", req, resp, cb);
    }

    /**
     * This API is used to delete a consumer group. After a consumer group is deleted, all configurations and related data of the consumer group are cleared and cannot be restored. After deletion, online consumer clients report errors. It is recommended to take clients offline in advance.
     * @param {DeleteConsumerGroupRequest} req
     * @param {function(string, DeleteConsumerGroupResponse):void} cb
     * @public
     */
    DeleteConsumerGroup(req, cb) {
        let resp = new DeleteConsumerGroupResponse();
        this.request("DeleteConsumerGroup", req, resp, cb);
    }

    /**
     * Modify consumer group attributes.
     * @param {ModifyConsumerGroupRequest} req
     * @param {function(string, ModifyConsumerGroupResponse):void} cb
     * @public
     */
    ModifyConsumerGroup(req, cb) {
        let resp = new ModifyConsumerGroupResponse();
        this.request("ModifyConsumerGroup", req, resp, cb);
    }

    /**
     * Query consumer client details.
     * @param {DescribeConsumerClientRequest} req
     * @param {function(string, DescribeConsumerClientResponse):void} cb
     * @public
     */
    DescribeConsumerClient(req, cb) {
        let resp = new DescribeConsumerClientResponse();
        this.request("DescribeConsumerClient", req, resp, cb);
    }

    /**
     * This API is used to view real-time information of migration consumption groups.
     * @param {DescribeMigratingGroupStatsRequest} req
     * @param {function(string, DescribeMigratingGroupStatsResponse):void} cb
     * @public
     */
    DescribeMigratingGroupStats(req, cb) {
        let resp = new DescribeMigratingGroupStatsResponse();
        this.request("DescribeMigratingGroupStats", req, resp, cb);
    }

    /**
     * This API is used to delete a role. Make sure that the related information on this role is not used in the current code. After the role is deleted, the keys (AccessKey and SecretKey) used to produce or consume messages with this role become invalid immediately.
     * @param {DeleteRoleRequest} req
     * @param {function(string, DeleteRoleResponse):void} cb
     * @public
     */
    DeleteRole(req, cb) {
        let resp = new DeleteRoleResponse();
        this.request("DeleteRole", req, resp, cb);
    }

    /**
     * This API is used to query product sales specifications against RocketMQ 5.x clusters.
     * @param {DescribeProductSKUsRequest} req
     * @param {function(string, DescribeProductSKUsResponse):void} cb
     * @public
     */
    DescribeProductSKUs(req, cb) {
        let resp = new DescribeProductSKUsResponse();
        this.request("DescribeProductSKUs", req, resp, cb);
    }

    /**
     * This API is used to modify the Topic status during migration and go to next step.
     * @param {ChangeMigratingTopicToNextStageRequest} req
     * @param {function(string, ChangeMigratingTopicToNextStageResponse):void} cb
     * @public
     */
    ChangeMigratingTopicToNextStage(req, cb) {
        let resp = new ChangeMigratingTopicToNextStageResponse();
        this.request("ChangeMigratingTopicToNextStage", req, resp, cb);
    }

    /**
     * This API is used to query the number of heaped messages in a specified consumer group.
     * @param {DescribeConsumerLagRequest} req
     * @param {function(string, DescribeConsumerLagResponse):void} cb
     * @public
     */
    DescribeConsumerLag(req, cb) {
        let resp = new DescribeConsumerLagResponse();
        this.request("DescribeConsumerLag", req, resp, cb);
    }

    /**
     * Query consumer group details.
     * @param {DescribeConsumerGroupRequest} req
     * @param {function(string, DescribeConsumerGroupResponse):void} cb
     * @public
     */
    DescribeConsumerGroup(req, cb) {
        let resp = new DescribeConsumerGroupResponse();
        this.request("DescribeConsumerGroup", req, resp, cb);
    }

    /**
     * This API is used to create a RocketMQ 5.x cluster.
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        let resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }

    /**
     * Query the message list. If querying dead letter messages, set the ConsumerGroup parameter.
     * @param {DescribeMessageListRequest} req
     * @param {function(string, DescribeMessageListResponse):void} cb
     * @public
     */
    DescribeMessageList(req, cb) {
        let resp = new DescribeMessageListResponse();
        this.request("DescribeMessageList", req, resp, cb);
    }

    /**
     * This API is used to query RocketMQ 5.x cluster information.
     * @param {DescribeInstanceRequest} req
     * @param {function(string, DescribeInstanceResponse):void} cb
     * @public
     */
    DescribeInstance(req, cb) {
        let resp = new DescribeInstanceResponse();
        this.request("DescribeInstance", req, resp, cb);
    }

    /**
     * This API is used to modify access points of a TDMQ RocketMQ 5.x cluster. Make sure that the access points exist before the operation.
     * @param {ModifyInstanceEndpointRequest} req
     * @param {function(string, ModifyInstanceEndpointResponse):void} cb
     * @public
     */
    ModifyInstanceEndpoint(req, cb) {
        let resp = new ModifyInstanceEndpointResponse();
        this.request("ModifyInstanceEndpoint", req, resp, cb);
    }

    /**
     * This API is used to search the topic list. Filter parameter usage instructions are as follows:.

-TopicName supports fuzzy search. Obtain it from the [TopicItem](https://www.tencentcloud.comom/document/api/1493/96031?from_cn_redirect=1#TopicItem) in the [DescribeTopicList](https://www.tencentcloud.comom/document/api/1493/96030?from_cn_redirect=1) API response or the console.
-Search by TopicType, support multiple selections. See the TopicType field in the [DescribeTopic](https://www.tencentcloud.comom/document/api/1493/97945?from_cn_redirect=1) API.

This API is used to demonstrate Filters.
 [{ "Name": "TopicName", "Values": ["test_topic"] }]
     * @param {DescribeTopicListRequest} req
     * @param {function(string, DescribeTopicListResponse):void} cb
     * @public
     */
    DescribeTopicList(req, cb) {
        let resp = new DescribeTopicListResponse();
        this.request("DescribeTopicList", req, resp, cb);
    }

    /**
     * This API is used to resend dead letter messages.
     * @param {ResendDeadLetterMessageRequest} req
     * @param {function(string, ResendDeadLetterMessageResponse):void} cb
     * @public
     */
    ResendDeadLetterMessage(req, cb) {
        let resp = new ResendDeadLetterMessageResponse();
        this.request("ResendDeadLetterMessage", req, resp, cb);
    }

    /**
     * This API is used to describe clusters. It only supports 5.x clusters. Description of the Filters parameter use is as follows:.

-InstanceName Cluster name, supports fuzzy search.
- InstanceId The Tencent Cloud RocketMQ instance ID, obtained from the [DescribeFusionInstanceList](https://www.tencentcloud.comom/document/api/1493/106745?from_cn_redirect=1) API or console.
- InstanceType cluster type, see [InstanceItem](https://www.tencentcloud.comom/document/api/1493/96031?from_cn_redirect=1#InstanceItem) data structure, supports multiple selections.
-InstanceStatus cluster status, see [InstanceItem](https://www.tencentcloud.comom/document/api/1493/96031?from_cn_redirect=1#InstanceItem) data structure, supports multiple selections.

This API is used to demonstrate Filters.
[{
    "Name": "InstanceId",
    "Values": ["rmq-72mo3a9o"]
}]
     * @param {DescribeInstanceListRequest} req
     * @param {function(string, DescribeInstanceListResponse):void} cb
     * @public
     */
    DescribeInstanceList(req, cb) {
        let resp = new DescribeInstanceListResponse();
        this.request("DescribeInstanceList", req, resp, cb);
    }

    /**
     * This API is used to describe clusters, supporting both 4.x and 5.x clusters. Among them, parameter usage of Filters is as follows:.

-InstanceName, the cluster name, supports fuzzy query and can be obtained from the API return value or console.
-InstanceId Cluster ID, exact query, obtain from the current API or console.
- InstanceType cluster type, see [InstanceItem](https://www.tencentcloud.comom/document/api/1493/96031?from_cn_redirect=1#InstanceItem) data structure, supports multiple selections.
- Version: cluster edition, enumeration values as follows:.
-4 RocketMQ 4.x clusters.
-Deploy a RocketMQ 5.x cluster.

This API is used to demonstrate Filters.
 [{ "Name": "InstanceId", "Values": ["rmq-72mo3a9o"] }]
     * @param {DescribeFusionInstanceListRequest} req
     * @param {function(string, DescribeFusionInstanceListResponse):void} cb
     * @public
     */
    DescribeFusionInstanceList(req, cb) {
        let resp = new DescribeFusionInstanceListResponse();
        this.request("DescribeFusionInstanceList", req, resp, cb);
    }

    /**
     * This API is used to query producer list information associated with a topic. Filters support the following criteria:.
-client IP.
-client ID.
     * @param {DescribeProducerListRequest} req
     * @param {function(string, DescribeProducerListResponse):void} cb
     * @public
     */
    DescribeProducerList(req, cb) {
        let resp = new DescribeProducerListResponse();
        this.request("DescribeProducerList", req, resp, cb);
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
     * This API is used to query topic details. The Offset and Limit parameters are pagination parameters for consumer groups subscribing to this topic. The Filter parameter usage instructions are as follows:.

-The ConsumerGroup name can be obtained from the [ConsumeGroupItem](https://www.tencentcloud.comom/document/api/1493/96031?from_cn_redirect=1#ConsumeGroupItem) in the API response of [DescribeConsumerGroupList](https://www.tencentcloud.comom/document/api/1493/101535?from_cn_redirect=1) or from the console.

This API is used to demonstrate Filters. 
[{ "Name": "ConsumerGroup", "Values": ["test_group"] }]
     * @param {DescribeTopicRequest} req
     * @param {function(string, DescribeTopicResponse):void} cb
     * @public
     */
    DescribeTopic(req, cb) {
        let resp = new DescribeTopicResponse();
        this.request("DescribeTopic", req, resp, cb);
    }

    /**
     * This API is used to search the data migration task list. Filter parameter usage instructions are as follows:.

This API is used to search precisely according to task ID.
InstanceId. This API is used to precisely search based on instance ID.
This API is used to search by task Type.
     * @param {DescribeMigrationTaskListRequest} req
     * @param {function(string, DescribeMigrationTaskListResponse):void} cb
     * @public
     */
    DescribeMigrationTaskList(req, cb) {
        let resp = new DescribeMigrationTaskListResponse();
        this.request("DescribeMigrationTaskList", req, resp, cb);
    }

    /**
     * This API is used to query the client connection list of a consumer group.
     * @param {DescribeConsumerClientListRequest} req
     * @param {function(string, DescribeConsumerClientListResponse):void} cb
     * @public
     */
    DescribeConsumerClientList(req, cb) {
        let resp = new DescribeConsumerClientListResponse();
        this.request("DescribeConsumerClientList", req, resp, cb);
    }

    /**
     * This API is used to query real-time data of migration topics.
     * @param {DescribeMigratingTopicStatsRequest} req
     * @param {function(string, DescribeMigratingTopicStatsResponse):void} cb
     * @public
     */
    DescribeMigratingTopicStats(req, cb) {
        let resp = new DescribeMigratingTopicStatsResponse();
        this.request("DescribeMigratingTopicStats", req, resp, cb);
    }

    /**
     * This API is used to delete a topic. After deletion, all configurations and related data of the topic will be cleared and cannot be restored.
     * @param {DeleteTopicRequest} req
     * @param {function(string, DeleteTopicResponse):void} cb
     * @public
     */
    DeleteTopic(req, cb) {
        let resp = new DeleteTopicResponse();
        this.request("DeleteTopic", req, resp, cb);
    }

    /**
     * This API is used to delete a smooth migration task. Only canceled tasks can be deleted.
     * @param {DeleteSmoothMigrationTaskRequest} req
     * @param {function(string, DeleteSmoothMigrationTaskResponse):void} cb
     * @public
     */
    DeleteSmoothMigrationTask(req, cb) {
        let resp = new DeleteSmoothMigrationTaskResponse();
        this.request("DeleteSmoothMigrationTask", req, resp, cb);
    }

    /**
     * This API is used to roll back the topic that is undergoing migration to the previous stage.
     * @param {RollbackMigratingTopicStageRequest} req
     * @param {function(string, RollbackMigratingTopicStageResponse):void} cb
     * @public
     */
    RollbackMigratingTopicStage(req, cb) {
        let resp = new RollbackMigratingTopicStageResponse();
        this.request("RollbackMigratingTopicStage", req, resp, cb);
    }

    /**
     * This API is used to modify attributes of a TDMQ RocketMQ 5.x cluster. Only running clusters support this operation.
     * @param {ModifyInstanceRequest} req
     * @param {function(string, ModifyInstanceResponse):void} cb
     * @public
     */
    ModifyInstance(req, cb) {
        let resp = new ModifyInstanceResponse();
        this.request("ModifyInstance", req, resp, cb);
    }


}
module.exports = TrocketClient;
