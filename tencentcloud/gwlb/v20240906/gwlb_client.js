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
const DescribeTargetGroupInstanceStatusRequest = models.DescribeTargetGroupInstanceStatusRequest;
const DescribeTargetGroupListResponse = models.DescribeTargetGroupListResponse;
const DisassociateTargetGroupsResponse = models.DisassociateTargetGroupsResponse;
const DescribeTargetGroupListRequest = models.DescribeTargetGroupListRequest;
const ModifyGatewayLoadBalancerAttributeRequest = models.ModifyGatewayLoadBalancerAttributeRequest;
const ModifyTargetGroupInstancesWeightResponse = models.ModifyTargetGroupInstancesWeightResponse;
const DescribeTargetGroupsRequest = models.DescribeTargetGroupsRequest;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const InquirePriceCreateGatewayLoadBalancerResponse = models.InquirePriceCreateGatewayLoadBalancerResponse;
const CreateTargetGroupResponse = models.CreateTargetGroupResponse;
const TargetGroupBackend = models.TargetGroupBackend;
const TargetGroupHealthCheck = models.TargetGroupHealthCheck;
const ModifyTargetGroupInstancesWeightRequest = models.ModifyTargetGroupInstancesWeightRequest;
const DeleteTargetGroupsResponse = models.DeleteTargetGroupsResponse;
const Price = models.Price;
const ModifyGatewayLoadBalancerAttributeResponse = models.ModifyGatewayLoadBalancerAttributeResponse;
const DeleteGatewayLoadBalancerRequest = models.DeleteGatewayLoadBalancerRequest;
const TagInfo = models.TagInfo;
const AssociateTargetGroupsRequest = models.AssociateTargetGroupsRequest;
const DeregisterTargetGroupInstancesRequest = models.DeregisterTargetGroupInstancesRequest;
const GatewayLoadBalancer = models.GatewayLoadBalancer;
const DescribeGatewayLoadBalancersRequest = models.DescribeGatewayLoadBalancersRequest;
const DeregisterTargetGroupInstancesResponse = models.DeregisterTargetGroupInstancesResponse;
const DescribeTargetGroupInstancesResponse = models.DescribeTargetGroupInstancesResponse;
const CreateTargetGroupRequest = models.CreateTargetGroupRequest;
const CreateGatewayLoadBalancerRequest = models.CreateGatewayLoadBalancerRequest;
const AssociateTargetGroupsResponse = models.AssociateTargetGroupsResponse;
const InquirePriceCreateGatewayLoadBalancerRequest = models.InquirePriceCreateGatewayLoadBalancerRequest;
const DisassociateTargetGroupsRequest = models.DisassociateTargetGroupsRequest;
const Filter = models.Filter;
const TargetGroupInstanceStatus = models.TargetGroupInstanceStatus;
const DescribeTargetGroupInstanceStatusResponse = models.DescribeTargetGroupInstanceStatusResponse;
const DescribeTargetGroupInstancesRequest = models.DescribeTargetGroupInstancesRequest;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const RegisterTargetGroupInstancesResponse = models.RegisterTargetGroupInstancesResponse;
const CreateGatewayLoadBalancerResponse = models.CreateGatewayLoadBalancerResponse;
const DescribeTargetGroupsResponse = models.DescribeTargetGroupsResponse;
const RegisterTargetGroupInstancesRequest = models.RegisterTargetGroupInstancesRequest;
const DeleteTargetGroupsRequest = models.DeleteTargetGroupsRequest;
const ItemPrice = models.ItemPrice;
const TargetGroupAssociation = models.TargetGroupAssociation;
const TargetGroupInstance = models.TargetGroupInstance;
const ModifyTargetGroupAttributeResponse = models.ModifyTargetGroupAttributeResponse;
const AssociationItem = models.AssociationItem;
const ModifyTargetGroupAttributeRequest = models.ModifyTargetGroupAttributeRequest;
const TargetGroupInfo = models.TargetGroupInfo;
const DescribeGatewayLoadBalancersResponse = models.DescribeGatewayLoadBalancersResponse;
const DeleteGatewayLoadBalancerResponse = models.DeleteGatewayLoadBalancerResponse;


/**
 * gwlb client
 * @class
 */
class GwlbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gwlb.intl.tencentcloudapi.com", "2024-09-06", credential, region, profile);
    }
    
    /**
     * This API is used to delete a target group.
     * @param {DeleteTargetGroupsRequest} req
     * @param {function(string, DeleteTargetGroupsResponse):void} cb
     * @public
     */
    DeleteTargetGroups(req, cb) {
        let resp = new DeleteTargetGroupsResponse();
        this.request("DeleteTargetGroups", req, resp, cb);
    }

    /**
     * This API is used to delete one or more specified GWLB instances. After successful deletion, the GWLB instances will be unbound from the backend service.This is an async API. After the API return succeeds, you can call the DescribeTaskStatus API with the returned RequestId as an input parameter to check whether this task is successful.
     * @param {DeleteGatewayLoadBalancerRequest} req
     * @param {function(string, DeleteGatewayLoadBalancerResponse):void} cb
     * @public
     */
    DeleteGatewayLoadBalancer(req, cb) {
        let resp = new DeleteGatewayLoadBalancerResponse();
        this.request("DeleteGatewayLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to register servers to a target group.This is an async API. After the API return succeeds, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {RegisterTargetGroupInstancesRequest} req
     * @param {function(string, RegisterTargetGroupInstancesResponse):void} cb
     * @public
     */
    RegisterTargetGroupInstances(req, cb) {
        let resp = new RegisterTargetGroupInstancesResponse();
        this.request("RegisterTargetGroupInstances", req, resp, cb);
    }

    /**
     * This API is used to query target group information.
     * @param {DescribeTargetGroupsRequest} req
     * @param {function(string, DescribeTargetGroupsResponse):void} cb
     * @public
     */
    DescribeTargetGroups(req, cb) {
        let resp = new DescribeTargetGroupsResponse();
        this.request("DescribeTargetGroups", req, resp, cb);
    }

    /**
     * This API is used to modify the name, health check, and other attributes of the target group.
     * @param {ModifyTargetGroupAttributeRequest} req
     * @param {function(string, ModifyTargetGroupAttributeResponse):void} cb
     * @public
     */
    ModifyTargetGroupAttribute(req, cb) {
        let resp = new ModifyTargetGroupAttributeResponse();
        this.request("ModifyTargetGroupAttribute", req, resp, cb);
    }

    /**
     * This API is used to query the execution status of an async task. After non-query APIs (for example, used to create/delete CLB instances) are called successfully, this API needs to be used to query whether the task is successful.
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        let resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }

    /**
     * This API is used to create a GWLB instance. To use the GWLB service, you must purchase one or more GWLB instances. After this API is called successfully, a unique ID for the GWLB instance will be returned.Note: The default purchase quota for each account in each region is 10.This is an async API. After the API is called successfully, you can use the DescribeGatewayLoadBalancers API to query the status of the GWLB instance (such as creating and normal) to determine whether the creation is successful.
     * @param {CreateGatewayLoadBalancerRequest} req
     * @param {function(string, CreateGatewayLoadBalancerResponse):void} cb
     * @public
     */
    CreateGatewayLoadBalancer(req, cb) {
        let resp = new CreateGatewayLoadBalancerResponse();
        this.request("CreateGatewayLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to disassociate a CLB from a target group.This is an async API. After the API return succeeds, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {DisassociateTargetGroupsRequest} req
     * @param {function(string, DisassociateTargetGroupsResponse):void} cb
     * @public
     */
    DisassociateTargetGroups(req, cb) {
        let resp = new DisassociateTargetGroupsResponse();
        this.request("DisassociateTargetGroups", req, resp, cb);
    }

    /**
     * This API is used to modify the server weight of a target group.This is an async API. After the API return succeeds, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {ModifyTargetGroupInstancesWeightRequest} req
     * @param {function(string, ModifyTargetGroupInstancesWeightResponse):void} cb
     * @public
     */
    ModifyTargetGroupInstancesWeight(req, cb) {
        let resp = new ModifyTargetGroupInstancesWeightResponse();
        this.request("ModifyTargetGroupInstancesWeight", req, resp, cb);
    }

    /**
     * This API is used to query the backend service status of a target group. Currently, only GWLB type target groups support querying backend service status.
     * @param {DescribeTargetGroupInstanceStatusRequest} req
     * @param {function(string, DescribeTargetGroupInstanceStatusResponse):void} cb
     * @public
     */
    DescribeTargetGroupInstanceStatus(req, cb) {
        let resp = new DescribeTargetGroupInstanceStatusResponse();
        this.request("DescribeTargetGroupInstanceStatus", req, resp, cb);
    }

    /**
     * This API is used to bind target groups to a CLB.This is an async API. After the API return succeeds, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {AssociateTargetGroupsRequest} req
     * @param {function(string, AssociateTargetGroupsResponse):void} cb
     * @public
     */
    AssociateTargetGroups(req, cb) {
        let resp = new AssociateTargetGroupsResponse();
        this.request("AssociateTargetGroups", req, resp, cb);
    }

    /**
     * This API is used to query the list of GWLB instances in a region.
     * @param {DescribeGatewayLoadBalancersRequest} req
     * @param {function(string, DescribeGatewayLoadBalancersResponse):void} cb
     * @public
     */
    DescribeGatewayLoadBalancers(req, cb) {
        let resp = new DescribeGatewayLoadBalancersResponse();
        this.request("DescribeGatewayLoadBalancers", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a CLB instance. It supports modifying the name and bandwidth cap of the CLB instance.
     * @param {ModifyGatewayLoadBalancerAttributeRequest} req
     * @param {function(string, ModifyGatewayLoadBalancerAttributeResponse):void} cb
     * @public
     */
    ModifyGatewayLoadBalancerAttribute(req, cb) {
        let resp = new ModifyGatewayLoadBalancerAttributeResponse();
        this.request("ModifyGatewayLoadBalancerAttribute", req, resp, cb);
    }

    /**
     * This API is used to obtain a target group list.
     * @param {DescribeTargetGroupListRequest} req
     * @param {function(string, DescribeTargetGroupListResponse):void} cb
     * @public
     */
    DescribeTargetGroupList(req, cb) {
        let resp = new DescribeTargetGroupListResponse();
        this.request("DescribeTargetGroupList", req, resp, cb);
    }

    /**
     * This API is used to query the price for creating a GWLB.
     * @param {InquirePriceCreateGatewayLoadBalancerRequest} req
     * @param {function(string, InquirePriceCreateGatewayLoadBalancerResponse):void} cb
     * @public
     */
    InquirePriceCreateGatewayLoadBalancer(req, cb) {
        let resp = new InquirePriceCreateGatewayLoadBalancerResponse();
        this.request("InquirePriceCreateGatewayLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to unbind a server from a target group.
This is an async API. After the API return succeeds, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {DeregisterTargetGroupInstancesRequest} req
     * @param {function(string, DeregisterTargetGroupInstancesResponse):void} cb
     * @public
     */
    DeregisterTargetGroupInstances(req, cb) {
        let resp = new DeregisterTargetGroupInstancesResponse();
        this.request("DeregisterTargetGroupInstances", req, resp, cb);
    }

    /**
     * This API is used to create a target group. This feature is in beta testing. If you need to use it, please [submit a ticket](https://console.cloud.tencent.com/workorder/category?level1_id=6&level2_id=163&source=0&data_title=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20LB&step=1).
     * @param {CreateTargetGroupRequest} req
     * @param {function(string, CreateTargetGroupResponse):void} cb
     * @public
     */
    CreateTargetGroup(req, cb) {
        let resp = new CreateTargetGroupResponse();
        this.request("CreateTargetGroup", req, resp, cb);
    }

    /**
     * This API is used to obtain information on servers bound to a target group.
     * @param {DescribeTargetGroupInstancesRequest} req
     * @param {function(string, DescribeTargetGroupInstancesResponse):void} cb
     * @public
     */
    DescribeTargetGroupInstances(req, cb) {
        let resp = new DescribeTargetGroupInstancesResponse();
        this.request("DescribeTargetGroupInstances", req, resp, cb);
    }


}
module.exports = GwlbClient;
