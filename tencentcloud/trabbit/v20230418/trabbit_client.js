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
const DescribeRabbitMQServerlessConnectionResponse = models.DescribeRabbitMQServerlessConnectionResponse;
const DeleteRabbitMQServerlessPermissionResponse = models.DeleteRabbitMQServerlessPermissionResponse;
const RabbitMQBindingListInfo = models.RabbitMQBindingListInfo;
const ModifyRabbitMQServerlessUserResponse = models.ModifyRabbitMQServerlessUserResponse;
const CreateRabbitMQServerlessVirtualHostRequest = models.CreateRabbitMQServerlessVirtualHostRequest;
const DescribeRabbitMQServerlessUserResponse = models.DescribeRabbitMQServerlessUserResponse;
const ModifyRabbitMQServerlessExchangeResponse = models.ModifyRabbitMQServerlessExchangeResponse;
const DescribeRabbitMQServerlessConsumersResponse = models.DescribeRabbitMQServerlessConsumersResponse;
const DescribeRabbitMQServerlessQueueDetailResponse = models.DescribeRabbitMQServerlessQueueDetailResponse;
const DescribeRabbitMQServerlessVirtualHostRequest = models.DescribeRabbitMQServerlessVirtualHostRequest;
const ModifyRabbitMQServerlessVirtualHostRequest = models.ModifyRabbitMQServerlessVirtualHostRequest;
const CreateRabbitMQServerlessUserResponse = models.CreateRabbitMQServerlessUserResponse;
const DeleteRabbitMQServerlessQueueRequest = models.DeleteRabbitMQServerlessQueueRequest;
const ListRabbitMQServerlessInstancesResponse = models.ListRabbitMQServerlessInstancesResponse;
const CreateRabbitMQServerlessUserRequest = models.CreateRabbitMQServerlessUserRequest;
const ModifyRabbitMQServerlessUserRequest = models.ModifyRabbitMQServerlessUserRequest;
const DeleteRabbitMQServerlessPermissionRequest = models.DeleteRabbitMQServerlessPermissionRequest;
const CreateRabbitMQServerlessVirtualHostResponse = models.CreateRabbitMQServerlessVirtualHostResponse;
const ModifyRabbitMQServerlessInstanceRequest = models.ModifyRabbitMQServerlessInstanceRequest;
const RabbitMQServerlessInstance = models.RabbitMQServerlessInstance;
const DescribeRabbitMQServerlessExchangesResponse = models.DescribeRabbitMQServerlessExchangesResponse;
const DeleteRabbitMQServerlessVirtualHostResponse = models.DeleteRabbitMQServerlessVirtualHostResponse;
const RabbitMQUser = models.RabbitMQUser;
const RabbitMQServerlessAccessInfo = models.RabbitMQServerlessAccessInfo;
const RabbitMQPermission = models.RabbitMQPermission;
const QueueQuota = models.QueueQuota;
const DescribeRabbitMQServerlessVirtualHostResponse = models.DescribeRabbitMQServerlessVirtualHostResponse;
const DescribeRabbitMQServerlessQueuesResponse = models.DescribeRabbitMQServerlessQueuesResponse;
const ModifyRabbitMQServerlessInstanceResponse = models.ModifyRabbitMQServerlessInstanceResponse;
const ModifyRabbitMQServerlessVirtualHostResponse = models.ModifyRabbitMQServerlessVirtualHostResponse;
const CreateRabbitMQServerlessExchangeRequest = models.CreateRabbitMQServerlessExchangeRequest;
const DescribeRabbitMQServerlessConnectionRequest = models.DescribeRabbitMQServerlessConnectionRequest;
const DescribeRabbitMQServerlessUserRequest = models.DescribeRabbitMQServerlessUserRequest;
const DeleteRabbitMQServerlessUserResponse = models.DeleteRabbitMQServerlessUserResponse;
const RabbitMQClusterInfo = models.RabbitMQClusterInfo;
const DescribeRabbitMQServerlessBindingsResponse = models.DescribeRabbitMQServerlessBindingsResponse;
const CreateRabbitMQServerlessExchangeResponse = models.CreateRabbitMQServerlessExchangeResponse;
const DeleteRabbitMQServerlessExchangeResponse = models.DeleteRabbitMQServerlessExchangeResponse;
const DeleteRabbitMQServerlessUserRequest = models.DeleteRabbitMQServerlessUserRequest;
const DescribeRabbitMQServerlessConsumersRequest = models.DescribeRabbitMQServerlessConsumersRequest;
const RabbitMQConsumersListInfo = models.RabbitMQConsumersListInfo;
const CreateRabbitMQServerlessBindingResponse = models.CreateRabbitMQServerlessBindingResponse;
const UserQuota = models.UserQuota;
const ModifyRabbitMQServerlessPermissionRequest = models.ModifyRabbitMQServerlessPermissionRequest;
const CreateRabbitMQServerlessQueueRequest = models.CreateRabbitMQServerlessQueueRequest;
const DeleteRabbitMQServerlessBindingRequest = models.DeleteRabbitMQServerlessBindingRequest;
const RabbitMQVirtualHostStatistics = models.RabbitMQVirtualHostStatistics;
const DescribeRabbitMQServerlessQueueDetailRequest = models.DescribeRabbitMQServerlessQueueDetailRequest;
const RabbitMQQueueListInfo = models.RabbitMQQueueListInfo;
const Filter = models.Filter;
const ModifyRabbitMQServerlessPermissionResponse = models.ModifyRabbitMQServerlessPermissionResponse;
const DeleteRabbitMQServerlessExchangeRequest = models.DeleteRabbitMQServerlessExchangeRequest;
const DescribeRabbitMQServerlessExchangeDetailRequest = models.DescribeRabbitMQServerlessExchangeDetailRequest;
const RabbitMQClusterSpecInfo = models.RabbitMQClusterSpecInfo;
const ModifyRabbitMQServerlessQueueResponse = models.ModifyRabbitMQServerlessQueueResponse;
const CreateRabbitMQServerlessBindingRequest = models.CreateRabbitMQServerlessBindingRequest;
const RabbitMQServerlessEndpoint = models.RabbitMQServerlessEndpoint;
const RabbitMQVirtualHostInfo = models.RabbitMQVirtualHostInfo;
const ExchangeQuota = models.ExchangeQuota;
const DescribeRabbitMQServerlessInstanceResponse = models.DescribeRabbitMQServerlessInstanceResponse;
const ListRabbitMQServerlessInstancesRequest = models.ListRabbitMQServerlessInstancesRequest;
const RabbitMQConnection = models.RabbitMQConnection;
const RabbitMQQueueListConsumerDetailInfo = models.RabbitMQQueueListConsumerDetailInfo;
const DescribeRabbitMQServerlessInstanceRequest = models.DescribeRabbitMQServerlessInstanceRequest;
const DescribeRabbitMQServerlessPermissionRequest = models.DescribeRabbitMQServerlessPermissionRequest;
const DescribeRabbitMQServerlessExchangeDetailResponse = models.DescribeRabbitMQServerlessExchangeDetailResponse;
const VpcEndpointInfo = models.VpcEndpointInfo;
const DescribeRabbitMQServerlessExchangesRequest = models.DescribeRabbitMQServerlessExchangesRequest;
const RabbitMQServerlessWhiteListInfo = models.RabbitMQServerlessWhiteListInfo;
const DeleteRabbitMQServerlessQueueResponse = models.DeleteRabbitMQServerlessQueueResponse;
const CreateRabbitMQServerlessQueueResponse = models.CreateRabbitMQServerlessQueueResponse;
const DescribeRabbitMQServerlessQueuesRequest = models.DescribeRabbitMQServerlessQueuesRequest;
const DescribeRabbitMQServerlessBindingsRequest = models.DescribeRabbitMQServerlessBindingsRequest;
const DescribeRabbitMQServerlessPermissionResponse = models.DescribeRabbitMQServerlessPermissionResponse;
const DeleteRabbitMQServerlessBindingResponse = models.DeleteRabbitMQServerlessBindingResponse;
const VirtualHostQuota = models.VirtualHostQuota;
const DeleteRabbitMQServerlessVirtualHostRequest = models.DeleteRabbitMQServerlessVirtualHostRequest;
const ModifyRabbitMQServerlessExchangeRequest = models.ModifyRabbitMQServerlessExchangeRequest;
const RabbitMQExchangeListInfo = models.RabbitMQExchangeListInfo;
const ModifyRabbitMQServerlessQueueRequest = models.ModifyRabbitMQServerlessQueueRequest;


/**
 * trabbit client
 * @class
 */
class TrabbitClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("trabbit.intl.tencentcloudapi.com", "2023-04-18", credential, region, profile);
    }
    
    /**
     * This API is used to unbind RabbitMQ binding relationships.
     * @param {DeleteRabbitMQServerlessBindingRequest} req
     * @param {function(string, DeleteRabbitMQServerlessBindingResponse):void} cb
     * @public
     */
    DeleteRabbitMQServerlessBinding(req, cb) {
        let resp = new DeleteRabbitMQServerlessBindingResponse();
        this.request("DeleteRabbitMQServerlessBinding", req, resp, cb);
    }

    /**
     * This API is used to modify cluster information.
     * @param {ModifyRabbitMQServerlessInstanceRequest} req
     * @param {function(string, ModifyRabbitMQServerlessInstanceResponse):void} cb
     * @public
     */
    ModifyRabbitMQServerlessInstance(req, cb) {
        let resp = new ModifyRabbitMQServerlessInstanceResponse();
        this.request("ModifyRabbitMQServerlessInstance", req, resp, cb);
    }

    /**
     * This API is used to create a vhost for RabbitMQ.
     * @param {CreateRabbitMQServerlessVirtualHostRequest} req
     * @param {function(string, CreateRabbitMQServerlessVirtualHostResponse):void} cb
     * @public
     */
    CreateRabbitMQServerlessVirtualHost(req, cb) {
        let resp = new CreateRabbitMQServerlessVirtualHostResponse();
        this.request("CreateRabbitMQServerlessVirtualHost", req, resp, cb);
    }

    /**
     * This API is used to retrieve dedicated instance information for a single RabbitMQ.
     * @param {DescribeRabbitMQServerlessInstanceRequest} req
     * @param {function(string, DescribeRabbitMQServerlessInstanceResponse):void} cb
     * @public
     */
    DescribeRabbitMQServerlessInstance(req, cb) {
        let resp = new DescribeRabbitMQServerlessInstanceResponse();
        this.request("DescribeRabbitMQServerlessInstance", req, resp, cb);
    }

    /**
     * This API is used to query RabbitMQ queue consumer list.
     * @param {DescribeRabbitMQServerlessConsumersRequest} req
     * @param {function(string, DescribeRabbitMQServerlessConsumersResponse):void} cb
     * @public
     */
    DescribeRabbitMQServerlessConsumers(req, cb) {
        let resp = new DescribeRabbitMQServerlessConsumersResponse();
        this.request("DescribeRabbitMQServerlessConsumers", req, resp, cb);
    }

    /**
     * This API is used to delete an RabbitMQ queue.
     * @param {DeleteRabbitMQServerlessQueueRequest} req
     * @param {function(string, DeleteRabbitMQServerlessQueueResponse):void} cb
     * @public
     */
    DeleteRabbitMQServerlessQueue(req, cb) {
        let resp = new DeleteRabbitMQServerlessQueueResponse();
        this.request("DeleteRabbitMQServerlessQueue", req, resp, cb);
    }

    /**
     * This API is used to delete the user of RabbitMQ.
     * @param {DeleteRabbitMQServerlessUserRequest} req
     * @param {function(string, DeleteRabbitMQServerlessUserResponse):void} cb
     * @public
     */
    DeleteRabbitMQServerlessUser(req, cb) {
        let resp = new DeleteRabbitMQServerlessUserResponse();
        this.request("DeleteRabbitMQServerlessUser", req, resp, cb);
    }

    /**
     * This API is used to delete a vhost for RabbitMQ.
     * @param {DeleteRabbitMQServerlessVirtualHostRequest} req
     * @param {function(string, DeleteRabbitMQServerlessVirtualHostResponse):void} cb
     * @public
     */
    DeleteRabbitMQServerlessVirtualHost(req, cb) {
        let resp = new DeleteRabbitMQServerlessVirtualHostResponse();
        this.request("DeleteRabbitMQServerlessVirtualHost", req, resp, cb);
    }

    /**
     * This API is used to modify the user of RabbitMQ.
     * @param {ModifyRabbitMQServerlessUserRequest} req
     * @param {function(string, ModifyRabbitMQServerlessUserResponse):void} cb
     * @public
     */
    ModifyRabbitMQServerlessUser(req, cb) {
        let resp = new ModifyRabbitMQServerlessUserResponse();
        this.request("ModifyRabbitMQServerlessUser", req, resp, cb);
    }

    /**
     * This API is used to query RabbitMQ user list.
     * @param {DescribeRabbitMQServerlessUserRequest} req
     * @param {function(string, DescribeRabbitMQServerlessUserResponse):void} cb
     * @public
     */
    DescribeRabbitMQServerlessUser(req, cb) {
        let resp = new DescribeRabbitMQServerlessUserResponse();
        this.request("DescribeRabbitMQServerlessUser", req, resp, cb);
    }

    /**
     * This API is used to query RabbitMQ exchange details.
     * @param {DescribeRabbitMQServerlessExchangeDetailRequest} req
     * @param {function(string, DescribeRabbitMQServerlessExchangeDetailResponse):void} cb
     * @public
     */
    DescribeRabbitMQServerlessExchangeDetail(req, cb) {
        let resp = new DescribeRabbitMQServerlessExchangeDetailResponse();
        this.request("DescribeRabbitMQServerlessExchangeDetail", req, resp, cb);
    }

    /**
     * This API is used to query a RabbitMQ vhost list.
     * @param {DescribeRabbitMQServerlessVirtualHostRequest} req
     * @param {function(string, DescribeRabbitMQServerlessVirtualHostResponse):void} cb
     * @public
     */
    DescribeRabbitMQServerlessVirtualHost(req, cb) {
        let resp = new DescribeRabbitMQServerlessVirtualHostResponse();
        this.request("DescribeRabbitMQServerlessVirtualHost", req, resp, cb);
    }

    /**
     * This API is used to query the list of RabbitMQ exchanges.
     * @param {DescribeRabbitMQServerlessExchangesRequest} req
     * @param {function(string, DescribeRabbitMQServerlessExchangesResponse):void} cb
     * @public
     */
    DescribeRabbitMQServerlessExchanges(req, cb) {
        let resp = new DescribeRabbitMQServerlessExchangesResponse();
        this.request("DescribeRabbitMQServerlessExchanges", req, resp, cb);
    }

    /**
     * This API is used to retrieve the binding relationship list.
     * @param {DescribeRabbitMQServerlessBindingsRequest} req
     * @param {function(string, DescribeRabbitMQServerlessBindingsResponse):void} cb
     * @public
     */
    DescribeRabbitMQServerlessBindings(req, cb) {
        let resp = new DescribeRabbitMQServerlessBindingsResponse();
        this.request("DescribeRabbitMQServerlessBindings", req, resp, cb);
    }

    /**
     * This API is used to create a user for RabbitMQ.
     * @param {CreateRabbitMQServerlessUserRequest} req
     * @param {function(string, CreateRabbitMQServerlessUserResponse):void} cb
     * @public
     */
    CreateRabbitMQServerlessUser(req, cb) {
        let resp = new CreateRabbitMQServerlessUserResponse();
        this.request("CreateRabbitMQServerlessUser", req, resp, cb);
    }

    /**
     * This API is used to query a RabbitMQ queue list.
     * @param {DescribeRabbitMQServerlessQueuesRequest} req
     * @param {function(string, DescribeRabbitMQServerlessQueuesResponse):void} cb
     * @public
     */
    DescribeRabbitMQServerlessQueues(req, cb) {
        let resp = new DescribeRabbitMQServerlessQueuesResponse();
        this.request("DescribeRabbitMQServerlessQueues", req, resp, cb);
    }

    /**
     * This API is used to modify a vhost for RabbitMQ.
     * @param {ModifyRabbitMQServerlessVirtualHostRequest} req
     * @param {function(string, ModifyRabbitMQServerlessVirtualHostResponse):void} cb
     * @public
     */
    ModifyRabbitMQServerlessVirtualHost(req, cb) {
        let resp = new ModifyRabbitMQServerlessVirtualHostResponse();
        this.request("ModifyRabbitMQServerlessVirtualHost", req, resp, cb);
    }

    /**
     * This API is used to create an RabbitMQ queue.
     * @param {CreateRabbitMQServerlessQueueRequest} req
     * @param {function(string, CreateRabbitMQServerlessQueueResponse):void} cb
     * @public
     */
    CreateRabbitMQServerlessQueue(req, cb) {
        let resp = new CreateRabbitMQServerlessQueueResponse();
        this.request("CreateRabbitMQServerlessQueue", req, resp, cb);
    }

    /**
     * This API is used to delete the RabbitMQ exchange.
     * @param {DeleteRabbitMQServerlessExchangeRequest} req
     * @param {function(string, DeleteRabbitMQServerlessExchangeResponse):void} cb
     * @public
     */
    DeleteRabbitMQServerlessExchange(req, cb) {
        let resp = new DeleteRabbitMQServerlessExchangeResponse();
        this.request("DeleteRabbitMQServerlessExchange", req, resp, cb);
    }

    /**
     * This API is used to query RabbitMQ permission list.
     * @param {DescribeRabbitMQServerlessPermissionRequest} req
     * @param {function(string, DescribeRabbitMQServerlessPermissionResponse):void} cb
     * @public
     */
    DescribeRabbitMQServerlessPermission(req, cb) {
        let resp = new DescribeRabbitMQServerlessPermissionResponse();
        this.request("DescribeRabbitMQServerlessPermission", req, resp, cb);
    }

    /**
     * This API is used to query RabbitMQ queue details.
     * @param {DescribeRabbitMQServerlessQueueDetailRequest} req
     * @param {function(string, DescribeRabbitMQServerlessQueueDetailResponse):void} cb
     * @public
     */
    DescribeRabbitMQServerlessQueueDetail(req, cb) {
        let resp = new DescribeRabbitMQServerlessQueueDetailResponse();
        this.request("DescribeRabbitMQServerlessQueueDetail", req, resp, cb);
    }

    /**
     * This API is used to query RabbitMQ connection list.
     * @param {DescribeRabbitMQServerlessConnectionRequest} req
     * @param {function(string, DescribeRabbitMQServerlessConnectionResponse):void} cb
     * @public
     */
    DescribeRabbitMQServerlessConnection(req, cb) {
        let resp = new DescribeRabbitMQServerlessConnectionResponse();
        this.request("DescribeRabbitMQServerlessConnection", req, resp, cb);
    }

    /**
     * This API is used to modify an RabbitMQ queue.
     * @param {ModifyRabbitMQServerlessQueueRequest} req
     * @param {function(string, ModifyRabbitMQServerlessQueueResponse):void} cb
     * @public
     */
    ModifyRabbitMQServerlessQueue(req, cb) {
        let resp = new ModifyRabbitMQServerlessQueueResponse();
        this.request("ModifyRabbitMQServerlessQueue", req, resp, cb);
    }

    /**
     * This API is used to modify the RabbitMQ exchange.
     * @param {ModifyRabbitMQServerlessExchangeRequest} req
     * @param {function(string, ModifyRabbitMQServerlessExchangeResponse):void} cb
     * @public
     */
    ModifyRabbitMQServerlessExchange(req, cb) {
        let resp = new ModifyRabbitMQServerlessExchangeResponse();
        this.request("ModifyRabbitMQServerlessExchange", req, resp, cb);
    }

    /**
     * This API is used to create RabbitMQ binding relationships.
     * @param {CreateRabbitMQServerlessBindingRequest} req
     * @param {function(string, CreateRabbitMQServerlessBindingResponse):void} cb
     * @public
     */
    CreateRabbitMQServerlessBinding(req, cb) {
        let resp = new CreateRabbitMQServerlessBindingResponse();
        this.request("CreateRabbitMQServerlessBinding", req, resp, cb);
    }

    /**
     * This API is used to delete the permission of RabbitMQ.
     * @param {DeleteRabbitMQServerlessPermissionRequest} req
     * @param {function(string, DeleteRabbitMQServerlessPermissionResponse):void} cb
     * @public
     */
    DeleteRabbitMQServerlessPermission(req, cb) {
        let resp = new DeleteRabbitMQServerlessPermissionResponse();
        this.request("DeleteRabbitMQServerlessPermission", req, resp, cb);
    }

    /**
     * This API is used to obtain instance lists.
     * @param {ListRabbitMQServerlessInstancesRequest} req
     * @param {function(string, ListRabbitMQServerlessInstancesResponse):void} cb
     * @public
     */
    ListRabbitMQServerlessInstances(req, cb) {
        let resp = new ListRabbitMQServerlessInstancesResponse();
        this.request("ListRabbitMQServerlessInstances", req, resp, cb);
    }

    /**
     * This API is used to create a RabbitMQ exchange.
     * @param {CreateRabbitMQServerlessExchangeRequest} req
     * @param {function(string, CreateRabbitMQServerlessExchangeResponse):void} cb
     * @public
     */
    CreateRabbitMQServerlessExchange(req, cb) {
        let resp = new CreateRabbitMQServerlessExchangeResponse();
        this.request("CreateRabbitMQServerlessExchange", req, resp, cb);
    }

    /**
     * This API is used to modify the permission of RabbitMQ.
     * @param {ModifyRabbitMQServerlessPermissionRequest} req
     * @param {function(string, ModifyRabbitMQServerlessPermissionResponse):void} cb
     * @public
     */
    ModifyRabbitMQServerlessPermission(req, cb) {
        let resp = new ModifyRabbitMQServerlessPermissionResponse();
        this.request("ModifyRabbitMQServerlessPermission", req, resp, cb);
    }


}
module.exports = TrabbitClient;
