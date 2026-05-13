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
const MQTTClientSubscription = models.MQTTClientSubscription;
const ModifyDeviceIdentityResponse = models.ModifyDeviceIdentityResponse;
const DeleteUserRequest = models.DeleteUserRequest;
const MessageEnrichmentRulePriority = models.MessageEnrichmentRulePriority;
const ModifyAuthorizationPolicyResponse = models.ModifyAuthorizationPolicyResponse;
const SharedSubscriptionClient = models.SharedSubscriptionClient;
const CreateInstanceResponse = models.CreateInstanceResponse;
const DescribeInstanceResponse = models.DescribeInstanceResponse;
const MessageEnrichmentRuleItem = models.MessageEnrichmentRuleItem;
const DeleteDeviceIdentityRequest = models.DeleteDeviceIdentityRequest;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const DeleteTopicRequest = models.DeleteTopicRequest;
const ModifyUserResponse = models.ModifyUserResponse;
const DescribeDeviceCertificatesRequest = models.DescribeDeviceCertificatesRequest;
const DescribeSharedSubscriptionGroupsRequest = models.DescribeSharedSubscriptionGroupsRequest;
const DeleteMessageEnrichmentRuleRequest = models.DeleteMessageEnrichmentRuleRequest;
const VpcInfo = models.VpcInfo;
const DeleteAuthorizationPolicyResponse = models.DeleteAuthorizationPolicyResponse;
const ProductSkuItem = models.ProductSkuItem;
const DescribeDeviceIdentitiesRequest = models.DescribeDeviceIdentitiesRequest;
const UserProperty = models.UserProperty;
const KickOutClientResponse = models.KickOutClientResponse;
const DescribeMessageDetailsRequest = models.DescribeMessageDetailsRequest;
const CreateDeviceIdentityRequest = models.CreateDeviceIdentityRequest;
const DescribeClientListResponse = models.DescribeClientListResponse;
const Tag = models.Tag;
const MQTTInstanceItem = models.MQTTInstanceItem;
const DescribeInstanceListResponse = models.DescribeInstanceListResponse;
const ModifyMessageEnrichmentRuleRequest = models.ModifyMessageEnrichmentRuleRequest;
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const AddClientSubscriptionRequest = models.AddClientSubscriptionRequest;
const MQTTMessage = models.MQTTMessage;
const DescribeSharedSubscriptionClientRequest = models.DescribeSharedSubscriptionClientRequest;
const UpdateMessageEnrichmentRulePriorityResponse = models.UpdateMessageEnrichmentRulePriorityResponse;
const DeleteDeviceIdentityResponse = models.DeleteDeviceIdentityResponse;
const CreateUserResponse = models.CreateUserResponse;
const CreateAuthorizationPolicyRequest = models.CreateAuthorizationPolicyRequest;
const DescribeMessageEnrichmentRulesResponse = models.DescribeMessageEnrichmentRulesResponse;
const DescribeMessageByTopicRequest = models.DescribeMessageByTopicRequest;
const DeleteUserResponse = models.DeleteUserResponse;
const DescribeMessageByTopicResponse = models.DescribeMessageByTopicResponse;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const DescribeProductSKUListResponse = models.DescribeProductSKUListResponse;
const DescribeTopicResponse = models.DescribeTopicResponse;
const DescribeAuthorizationPoliciesResponse = models.DescribeAuthorizationPoliciesResponse;
const DescribeSharedSubscriptionClientResponse = models.DescribeSharedSubscriptionClientResponse;
const DeleteClientSubscriptionRequest = models.DeleteClientSubscriptionRequest;
const DescribeMessageDetailsResponse = models.DescribeMessageDetailsResponse;
const DescribeUserListResponse = models.DescribeUserListResponse;
const DeleteMessageEnrichmentRuleResponse = models.DeleteMessageEnrichmentRuleResponse;
const MQTTUserItem = models.MQTTUserItem;
const DescribeTopicRequest = models.DescribeTopicRequest;
const UpdateAuthorizationPolicyPriorityResponse = models.UpdateAuthorizationPolicyPriorityResponse;
const DescribeClientListRequest = models.DescribeClientListRequest;
const SharedGroup = models.SharedGroup;
const DeviceIdentityItem = models.DeviceIdentityItem;
const AddClientSubscriptionResponse = models.AddClientSubscriptionResponse;
const AuthorizationPolicyItem = models.AuthorizationPolicyItem;
const CreateInstanceRequest = models.CreateInstanceRequest;
const CreateAuthorizationPolicyResponse = models.CreateAuthorizationPolicyResponse;
const DescribeSharedSubscriptionsResponse = models.DescribeSharedSubscriptionsResponse;
const Filter = models.Filter;
const DescribeDeviceCertificatesResponse = models.DescribeDeviceCertificatesResponse;
const CreateUserRequest = models.CreateUserRequest;
const DescribeSharedSubscriptionsRequest = models.DescribeSharedSubscriptionsRequest;
const UpdateMessageEnrichmentRulePriorityRequest = models.UpdateMessageEnrichmentRulePriorityRequest;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const DescribeUserListRequest = models.DescribeUserListRequest;
const CreateDeviceIdentityResponse = models.CreateDeviceIdentityResponse;
const KickOutClientRequest = models.KickOutClientRequest;
const DescribeDeviceIdentityResponse = models.DescribeDeviceIdentityResponse;
const DeleteClientSubscriptionResponse = models.DeleteClientSubscriptionResponse;
const DescribeMessageEnrichmentRulesRequest = models.DescribeMessageEnrichmentRulesRequest;
const UpdateAuthorizationPolicyPriorityRequest = models.UpdateAuthorizationPolicyPriorityRequest;
const CreateMessageEnrichmentRuleRequest = models.CreateMessageEnrichmentRuleRequest;
const DescribeSharedSubscriptionGroupsResponse = models.DescribeSharedSubscriptionGroupsResponse;
const DeleteAuthorizationPolicyRequest = models.DeleteAuthorizationPolicyRequest;
const DescribeDeviceIdentityRequest = models.DescribeDeviceIdentityRequest;
const DescribeInstanceRequest = models.DescribeInstanceRequest;
const DescribeAuthorizationPoliciesRequest = models.DescribeAuthorizationPoliciesRequest;
const DescribeProductSKUListRequest = models.DescribeProductSKUListRequest;
const AuthorizationPolicyPriority = models.AuthorizationPolicyPriority;
const DescribeInstanceListRequest = models.DescribeInstanceListRequest;
const CreateMessageEnrichmentRuleResponse = models.CreateMessageEnrichmentRuleResponse;
const DeviceCertificateItem = models.DeviceCertificateItem;
const SubscriptionUserProperty = models.SubscriptionUserProperty;
const ModifyMessageEnrichmentRuleResponse = models.ModifyMessageEnrichmentRuleResponse;
const MQTTClientInfo = models.MQTTClientInfo;
const TagFilter = models.TagFilter;
const PriceTag = models.PriceTag;
const ModifyAuthorizationPolicyRequest = models.ModifyAuthorizationPolicyRequest;
const DeleteTopicResponse = models.DeleteTopicResponse;
const ModifyDeviceIdentityRequest = models.ModifyDeviceIdentityRequest;
const PropagatingProperty = models.PropagatingProperty;
const ModifyUserRequest = models.ModifyUserRequest;
const DescribeDeviceIdentitiesResponse = models.DescribeDeviceIdentitiesResponse;
const IpRule = models.IpRule;


/**
 * mqtt client
 * @class
 */
class MqttClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mqtt.intl.tencentcloudapi.com", "2024-05-16", credential, region, profile);
    }
    
    /**
     * Create a device signature for per-device secret
     * @param {CreateDeviceIdentityRequest} req
     * @param {function(string, CreateDeviceIdentityResponse):void} cb
     * @public
     */
    CreateDeviceIdentity(req, cb) {
        let resp = new CreateDeviceIdentityResponse();
        this.request("CreateDeviceIdentity", req, resp, cb);
    }

    /**
     * This API is used to query the user list. Filter parameter usage instructions are as follows:.

This API is used to perform Username fuzzy search.
     * @param {DescribeUserListRequest} req
     * @param {function(string, DescribeUserListResponse):void} cb
     * @public
     */
    DescribeUserList(req, cb) {
        let resp = new DescribeUserListResponse();
        this.request("DescribeUserList", req, resp, cb);
    }

    /**
     * This API is used to query message enrichment rules.
     * @param {DescribeMessageEnrichmentRulesRequest} req
     * @param {function(string, DescribeMessageEnrichmentRulesResponse):void} cb
     * @public
     */
    DescribeMessageEnrichmentRules(req, cb) {
        let resp = new DescribeMessageEnrichmentRulesResponse();
        this.request("DescribeMessageEnrichmentRules", req, resp, cb);
    }

    /**
     * This API is used to delete an MQTT instance.
     * @param {DeleteInstanceRequest} req
     * @param {function(string, DeleteInstanceResponse):void} cb
     * @public
     */
    DeleteInstance(req, cb) {
        let resp = new DeleteInstanceResponse();
        this.request("DeleteInstance", req, resp, cb);
    }

    /**
     * Query device certificates with paging
     * @param {DescribeDeviceCertificatesRequest} req
     * @param {function(string, DescribeDeviceCertificatesResponse):void} cb
     * @public
     */
    DescribeDeviceCertificates(req, cb) {
        let resp = new DescribeDeviceCertificatesResponse();
        this.request("DescribeDeviceCertificates", req, resp, cb);
    }

    /**
     * This API is used to query the MQTT client details.
     * @param {DescribeClientListRequest} req
     * @param {function(string, DescribeClientListResponse):void} cb
     * @public
     */
    DescribeClientList(req, cb) {
        let resp = new DescribeClientListResponse();
        this.request("DescribeClientList", req, resp, cb);
    }

    /**
     * This API is used to obtain product sales specifications.
     * @param {DescribeProductSKUListRequest} req
     * @param {function(string, DescribeProductSKUListResponse):void} cb
     * @public
     */
    DescribeProductSKUList(req, cb) {
        let resp = new DescribeProductSKUListResponse();
        this.request("DescribeProductSKUList", req, resp, cb);
    }

    /**
     * This API is used to create a message enrichment rule.
     * @param {CreateMessageEnrichmentRuleRequest} req
     * @param {function(string, CreateMessageEnrichmentRuleResponse):void} cb
     * @public
     */
    CreateMessageEnrichmentRule(req, cb) {
        let resp = new CreateMessageEnrichmentRuleResponse();
        this.request("CreateMessageEnrichmentRule", req, resp, cb);
    }

    /**
     * Delete a device signature
     * @param {DeleteDeviceIdentityRequest} req
     * @param {function(string, DeleteDeviceIdentityResponse):void} cb
     * @public
     */
    DeleteDeviceIdentity(req, cb) {
        let resp = new DeleteDeviceIdentityResponse();
        this.request("DeleteDeviceIdentity", req, resp, cb);
    }

    /**
     * This API is used to query messages based on subscription.
     * @param {DescribeMessageByTopicRequest} req
     * @param {function(string, DescribeMessageByTopicResponse):void} cb
     * @public
     */
    DescribeMessageByTopic(req, cb) {
        let resp = new DescribeMessageByTopicResponse();
        this.request("DescribeMessageByTopic", req, resp, cb);
    }

    /**
     * This API is used to query the subscription group list shared within the cluster.
     * @param {DescribeSharedSubscriptionGroupsRequest} req
     * @param {function(string, DescribeSharedSubscriptionGroupsResponse):void} cb
     * @public
     */
    DescribeSharedSubscriptionGroups(req, cb) {
        let resp = new DescribeSharedSubscriptionGroupsResponse();
        this.request("DescribeSharedSubscriptionGroups", req, resp, cb);
    }

    /**
     * This API is used to query authorization rules.
     * @param {DescribeAuthorizationPoliciesRequest} req
     * @param {function(string, DescribeAuthorizationPoliciesResponse):void} cb
     * @public
     */
    DescribeAuthorizationPolicies(req, cb) {
        let resp = new DescribeAuthorizationPoliciesResponse();
        this.request("DescribeAuthorizationPolicies", req, resp, cb);
    }

    /**
     * This API is used to purchase a new MQTT instance.
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        let resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }

    /**
     * Get instance list. Description of the Filters parameter use is as follows:
1. InstanceName, fuzzy search by name
2. InstanceId, query by instance ID
3. InstanceStatus, instance status query, supports multiple selections

When using the TagFilters parameter for search, the filters parameter is invalid.
     * @param {DescribeInstanceListRequest} req
     * @param {function(string, DescribeInstanceListResponse):void} cb
     * @public
     */
    DescribeInstanceList(req, cb) {
        let resp = new DescribeInstanceListResponse();
        this.request("DescribeInstanceList", req, resp, cb);
    }

    /**
     * This API is used to query instance information.
     * @param {DescribeInstanceRequest} req
     * @param {function(string, DescribeInstanceResponse):void} cb
     * @public
     */
    DescribeInstance(req, cb) {
        let resp = new DescribeInstanceResponse();
        this.request("DescribeInstance", req, resp, cb);
    }

    /**
     * This API is used to query the MQTT message details.
     * @param {DescribeMessageDetailsRequest} req
     * @param {function(string, DescribeMessageDetailsResponse):void} cb
     * @public
     */
    DescribeMessageDetails(req, cb) {
        let resp = new DescribeMessageDetailsResponse();
        this.request("DescribeMessageDetails", req, resp, cb);
    }

    /**
     * Query device identification
     * @param {DescribeDeviceIdentityRequest} req
     * @param {function(string, DescribeDeviceIdentityResponse):void} cb
     * @public
     */
    DescribeDeviceIdentity(req, cb) {
        let resp = new DescribeDeviceIdentityResponse();
        this.request("DescribeDeviceIdentity", req, resp, cb);
    }

    /**
     * Query the subscription list of a shared subscription group
     * @param {DescribeSharedSubscriptionsRequest} req
     * @param {function(string, DescribeSharedSubscriptionsResponse):void} cb
     * @public
     */
    DescribeSharedSubscriptions(req, cb) {
        let resp = new DescribeSharedSubscriptionsResponse();
        this.request("DescribeSharedSubscriptions", req, resp, cb);
    }

    /**
     * This API is used to add a subscription for an MQTT client.
     * @param {AddClientSubscriptionRequest} req
     * @param {function(string, AddClientSubscriptionResponse):void} cb
     * @public
     */
    AddClientSubscription(req, cb) {
        let resp = new AddClientSubscriptionResponse();
        this.request("AddClientSubscription", req, resp, cb);
    }

    /**
     * This API is used to modify an MQTT role.
     * @param {ModifyUserRequest} req
     * @param {function(string, ModifyUserResponse):void} cb
     * @public
     */
    ModifyUser(req, cb) {
        let resp = new ModifyUserResponse();
        this.request("ModifyUser", req, resp, cb);
    }

    /**
     * This API is used to delete an MQTT user.
     * @param {DeleteUserRequest} req
     * @param {function(string, DeleteUserResponse):void} cb
     * @public
     */
    DeleteUser(req, cb) {
        let resp = new DeleteUserResponse();
        this.request("DeleteUser", req, resp, cb);
    }

    /**
     * This API is used to modify message enrichment rules.
Note: All attributes of the current rule must be submitted, even if specific fields are not modified.
     * @param {ModifyMessageEnrichmentRuleRequest} req
     * @param {function(string, ModifyMessageEnrichmentRuleResponse):void} cb
     * @public
     */
    ModifyMessageEnrichmentRule(req, cb) {
        let resp = new ModifyMessageEnrichmentRuleResponse();
        this.request("ModifyMessageEnrichmentRule", req, resp, cb);
    }

    /**
     * This API is used to kick out a client.
     * @param {KickOutClientRequest} req
     * @param {function(string, KickOutClientResponse):void} cb
     * @public
     */
    KickOutClient(req, cb) {
        let resp = new KickOutClientResponse();
        this.request("KickOutClient", req, resp, cb);
    }

    /**
     * This API is used to modify the priority for message enrichment rule.
     * @param {UpdateMessageEnrichmentRulePriorityRequest} req
     * @param {function(string, UpdateMessageEnrichmentRulePriorityResponse):void} cb
     * @public
     */
    UpdateMessageEnrichmentRulePriority(req, cb) {
        let resp = new UpdateMessageEnrichmentRulePriorityResponse();
        this.request("UpdateMessageEnrichmentRulePriority", req, resp, cb);
    }

    /**
     * This API is used to modify policy rules. See the data plane authorization policy description (https://www.tencentcloud.com/document/product/1778/109715?from_cn_redirect=1).
     * @param {ModifyAuthorizationPolicyRequest} req
     * @param {function(string, ModifyAuthorizationPolicyResponse):void} cb
     * @public
     */
    ModifyAuthorizationPolicy(req, cb) {
        let resp = new ModifyAuthorizationPolicyResponse();
        this.request("ModifyAuthorizationPolicy", req, resp, cb);
    }

    /**
     * This API is used to delete policy rules.
     * @param {DeleteAuthorizationPolicyRequest} req
     * @param {function(string, DeleteAuthorizationPolicyResponse):void} cb
     * @public
     */
    DeleteAuthorizationPolicy(req, cb) {
        let resp = new DeleteAuthorizationPolicyResponse();
        this.request("DeleteAuthorizationPolicy", req, resp, cb);
    }

    /**
     * This API is used to query the MQTT topic details.
     * @param {DescribeTopicRequest} req
     * @param {function(string, DescribeTopicResponse):void} cb
     * @public
     */
    DescribeTopic(req, cb) {
        let resp = new DescribeTopicResponse();
        this.request("DescribeTopic", req, resp, cb);
    }

    /**
     * Query shared subscription group detailed information
     * @param {DescribeSharedSubscriptionClientRequest} req
     * @param {function(string, DescribeSharedSubscriptionClientResponse):void} cb
     * @public
     */
    DescribeSharedSubscriptionClient(req, cb) {
        let resp = new DescribeSharedSubscriptionClientResponse();
        this.request("DescribeSharedSubscriptionClient", req, resp, cb);
    }

    /**
     * Modify the device signature
     * @param {ModifyDeviceIdentityRequest} req
     * @param {function(string, ModifyDeviceIdentityResponse):void} cb
     * @public
     */
    ModifyDeviceIdentity(req, cb) {
        let resp = new ModifyDeviceIdentityResponse();
        this.request("ModifyDeviceIdentity", req, resp, cb);
    }

    /**
     * This API is used to modify policy rule priority.
     * @param {UpdateAuthorizationPolicyPriorityRequest} req
     * @param {function(string, UpdateAuthorizationPolicyPriorityResponse):void} cb
     * @public
     */
    UpdateAuthorizationPolicyPriority(req, cb) {
        let resp = new UpdateAuthorizationPolicyPriorityResponse();
        this.request("UpdateAuthorizationPolicyPriority", req, resp, cb);
    }

    /**
     * This API is used to add an MQTT role.
     * @param {CreateUserRequest} req
     * @param {function(string, CreateUserResponse):void} cb
     * @public
     */
    CreateUser(req, cb) {
        let resp = new CreateUserResponse();
        this.request("CreateUser", req, resp, cb);
    }

    /**
     * This API is used to delete the message enrichment rule.
     * @param {DeleteMessageEnrichmentRuleRequest} req
     * @param {function(string, DeleteMessageEnrichmentRuleResponse):void} cb
     * @public
     */
    DeleteMessageEnrichmentRule(req, cb) {
        let resp = new DeleteMessageEnrichmentRuleResponse();
        this.request("DeleteMessageEnrichmentRule", req, resp, cb);
    }

    /**
     * This API is used to delete an MQTT topic.
     * @param {DeleteTopicRequest} req
     * @param {function(string, DeleteTopicResponse):void} cb
     * @public
     */
    DeleteTopic(req, cb) {
        let resp = new DeleteTopicResponse();
        this.request("DeleteTopic", req, resp, cb);
    }

    /**
     * This API is used to delete a subscription of an MQTT client.
     * @param {DeleteClientSubscriptionRequest} req
     * @param {function(string, DeleteClientSubscriptionResponse):void} cb
     * @public
     */
    DeleteClientSubscription(req, cb) {
        let resp = new DeleteClientSubscriptionResponse();
        this.request("DeleteClientSubscription", req, resp, cb);
    }

    /**
     * This API is used to create a performance test task for an MQTT instance.
     * @param {CreateAuthorizationPolicyRequest} req
     * @param {function(string, CreateAuthorizationPolicyResponse):void} cb
     * @public
     */
    CreateAuthorizationPolicy(req, cb) {
        let resp = new CreateAuthorizationPolicyResponse();
        this.request("CreateAuthorizationPolicy", req, resp, cb);
    }

    /**
     * This API is used to modify instance attributes. Only running clusters can call this API to perform configuration change.
     * @param {ModifyInstanceRequest} req
     * @param {function(string, ModifyInstanceResponse):void} cb
     * @public
     */
    ModifyInstance(req, cb) {
        let resp = new ModifyInstanceResponse();
        this.request("ModifyInstance", req, resp, cb);
    }

    /**
     * Query the list of device identifiers in a cluster
     * @param {DescribeDeviceIdentitiesRequest} req
     * @param {function(string, DescribeDeviceIdentitiesResponse):void} cb
     * @public
     */
    DescribeDeviceIdentities(req, cb) {
        let resp = new DescribeDeviceIdentitiesResponse();
        this.request("DescribeDeviceIdentities", req, resp, cb);
    }


}
module.exports = MqttClient;
