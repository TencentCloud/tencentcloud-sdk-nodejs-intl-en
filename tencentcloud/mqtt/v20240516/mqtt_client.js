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
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const UpdateAuthorizationPolicyPriorityResponse = models.UpdateAuthorizationPolicyPriorityResponse;
const AddClientSubscriptionRequest = models.AddClientSubscriptionRequest;
const CreateMessageEnrichmentRuleRequest = models.CreateMessageEnrichmentRuleRequest;
const DescribeClientListRequest = models.DescribeClientListRequest;
const DeleteAuthorizationPolicyRequest = models.DeleteAuthorizationPolicyRequest;
const DescribeAuthorizationPoliciesRequest = models.DescribeAuthorizationPoliciesRequest;
const DeleteUserRequest = models.DeleteUserRequest;
const MQTTUserItem = models.MQTTUserItem;
const CreateUserRequest = models.CreateUserRequest;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const MessageEnrichmentRulePriority = models.MessageEnrichmentRulePriority;
const CreateUserResponse = models.CreateUserResponse;
const AddClientSubscriptionResponse = models.AddClientSubscriptionResponse;
const CreateAuthorizationPolicyRequest = models.CreateAuthorizationPolicyRequest;
const CreateInstanceResponse = models.CreateInstanceResponse;
const DescribeMessageEnrichmentRulesResponse = models.DescribeMessageEnrichmentRulesResponse;
const MessageEnrichmentRuleItem = models.MessageEnrichmentRuleItem;
const UserProperty = models.UserProperty;
const ModifyMessageEnrichmentRuleRequest = models.ModifyMessageEnrichmentRuleRequest;
const DescribeMessageByTopicRequest = models.DescribeMessageByTopicRequest;
const AuthorizationPolicyItem = models.AuthorizationPolicyItem;
const DeleteUserResponse = models.DeleteUserResponse;
const DescribeAuthorizationPoliciesResponse = models.DescribeAuthorizationPoliciesResponse;
const AuthorizationPolicyPriority = models.AuthorizationPolicyPriority;
const Tag = models.Tag;
const CreateInstanceRequest = models.CreateInstanceRequest;
const DescribeMessageByTopicResponse = models.DescribeMessageByTopicResponse;
const CreateMessageEnrichmentRuleResponse = models.CreateMessageEnrichmentRuleResponse;
const DeleteTopicRequest = models.DeleteTopicRequest;
const ModifyUserResponse = models.ModifyUserResponse;
const CreateAuthorizationPolicyResponse = models.CreateAuthorizationPolicyResponse;
const DescribeTopicResponse = models.DescribeTopicResponse;
const UpdateMessageEnrichmentRulePriorityResponse = models.UpdateMessageEnrichmentRulePriorityResponse;
const DeleteMessageEnrichmentRuleRequest = models.DeleteMessageEnrichmentRuleRequest;
const SubscriptionUserProperty = models.SubscriptionUserProperty;
const ModifyMessageEnrichmentRuleResponse = models.ModifyMessageEnrichmentRuleResponse;
const MQTTClientInfo = models.MQTTClientInfo;
const VpcInfo = models.VpcInfo;
const Filter = models.Filter;
const DeleteAuthorizationPolicyResponse = models.DeleteAuthorizationPolicyResponse;
const KickOutClientResponse = models.KickOutClientResponse;
const MQTTClientSubscription = models.MQTTClientSubscription;
const DeleteClientSubscriptionRequest = models.DeleteClientSubscriptionRequest;
const MQTTMessage = models.MQTTMessage;
const DescribeInstanceResponse = models.DescribeInstanceResponse;
const DescribeMessageDetailsResponse = models.DescribeMessageDetailsResponse;
const UpdateMessageEnrichmentRulePriorityRequest = models.UpdateMessageEnrichmentRulePriorityRequest;
const DescribeUserListResponse = models.DescribeUserListResponse;
const DeleteTopicResponse = models.DeleteTopicResponse;
const ModifyAuthorizationPolicyResponse = models.ModifyAuthorizationPolicyResponse;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const DescribeMessageDetailsRequest = models.DescribeMessageDetailsRequest;
const DeleteMessageEnrichmentRuleResponse = models.DeleteMessageEnrichmentRuleResponse;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const ModifyAuthorizationPolicyRequest = models.ModifyAuthorizationPolicyRequest;
const DescribeInstanceRequest = models.DescribeInstanceRequest;
const DescribeClientListResponse = models.DescribeClientListResponse;
const DescribeUserListRequest = models.DescribeUserListRequest;
const ModifyUserRequest = models.ModifyUserRequest;
const KickOutClientRequest = models.KickOutClientRequest;
const DeleteClientSubscriptionResponse = models.DeleteClientSubscriptionResponse;
const IpRule = models.IpRule;
const UpdateAuthorizationPolicyPriorityRequest = models.UpdateAuthorizationPolicyPriorityRequest;
const DescribeMessageEnrichmentRulesRequest = models.DescribeMessageEnrichmentRulesRequest;
const DescribeTopicRequest = models.DescribeTopicRequest;


/**
 * mqtt client
 * @class
 */
class MqttClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mqtt.intl.tencentcloudapi.com", "2024-05-16", credential, region, profile);
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
     * This API is used to modify policy rules. See the data plane authorization policy description (https://www.tencentcloud.comom/document/product/1778/109715?from_cn_redirect=1).
     * @param {ModifyAuthorizationPolicyRequest} req
     * @param {function(string, ModifyAuthorizationPolicyResponse):void} cb
     * @public
     */
    ModifyAuthorizationPolicy(req, cb) {
        let resp = new ModifyAuthorizationPolicyResponse();
        this.request("ModifyAuthorizationPolicy", req, resp, cb);
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
     * This API is used to delete a subscription of an MQTT client.
     * @param {DeleteClientSubscriptionRequest} req
     * @param {function(string, DeleteClientSubscriptionResponse):void} cb
     * @public
     */
    DeleteClientSubscription(req, cb) {
        let resp = new DeleteClientSubscriptionResponse();
        this.request("DeleteClientSubscription", req, resp, cb);
    }


}
module.exports = MqttClient;
