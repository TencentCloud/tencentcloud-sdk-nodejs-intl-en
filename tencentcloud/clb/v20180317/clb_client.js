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
const DeleteRewriteRequest = models.DeleteRewriteRequest;
const DescribeTargetGroupListResponse = models.DescribeTargetGroupListResponse;
const DescribeQuotaRequest = models.DescribeQuotaRequest;
const DescribeTargetGroupListRequest = models.DescribeTargetGroupListRequest;
const BatchDeregisterTargetsResponse = models.BatchDeregisterTargetsResponse;
const SetLoadBalancerSecurityGroupsResponse = models.SetLoadBalancerSecurityGroupsResponse;
const RulesItems = models.RulesItems;
const ExtraInfo = models.ExtraInfo;
const BatchModifyTargetWeightResponse = models.BatchModifyTargetWeightResponse;
const SetSecurityGroupForLoadbalancersRequest = models.SetSecurityGroupForLoadbalancersRequest;
const CreateLoadBalancerRequest = models.CreateLoadBalancerRequest;
const DescribeLoadBalancerOverviewResponse = models.DescribeLoadBalancerOverviewResponse;
const DeleteRuleRequest = models.DeleteRuleRequest;
const CloneLoadBalancerRequest = models.CloneLoadBalancerRequest;
const DisassociateTargetGroupsResponse = models.DisassociateTargetGroupsResponse;
const SetLoadBalancerClsLogResponse = models.SetLoadBalancerClsLogResponse;
const DescribeLoadBalancerTrafficResponse = models.DescribeLoadBalancerTrafficResponse;
const MultiCertInfo = models.MultiCertInfo;
const ModifyRuleRequest = models.ModifyRuleRequest;
const DescribeCustomizedConfigListResponse = models.DescribeCustomizedConfigListResponse;
const DescribeBlockIPListResponse = models.DescribeBlockIPListResponse;
const DescribeRewriteRequest = models.DescribeRewriteRequest;
const ModifyLoadBalancerAttributesResponse = models.ModifyLoadBalancerAttributesResponse;
const DescribeTargetGroupInstancesRequest = models.DescribeTargetGroupInstancesRequest;
const DescribeIdleLoadBalancersResponse = models.DescribeIdleLoadBalancersResponse;
const AssociateTargetGroupsRequest = models.AssociateTargetGroupsRequest;
const ClassicalTarget = models.ClassicalTarget;
const ListenerItem = models.ListenerItem;
const RsWeightRule = models.RsWeightRule;
const RegisterFunctionTargetsRequest = models.RegisterFunctionTargetsRequest;
const DeregisterTargetsFromClassicalLBRequest = models.DeregisterTargetsFromClassicalLBRequest;
const SetSecurityGroupForLoadbalancersResponse = models.SetSecurityGroupForLoadbalancersResponse;
const BasicTargetGroupInfo = models.BasicTargetGroupInfo;
const ModifyTargetWeightResponse = models.ModifyTargetWeightResponse;
const ZoneResource = models.ZoneResource;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const TargetGroupInstance = models.TargetGroupInstance;
const DescribeClassicalLBByInstanceIdResponse = models.DescribeClassicalLBByInstanceIdResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const CrossTargets = models.CrossTargets;
const RuleHealth = models.RuleHealth;
const ModifyDomainRequest = models.ModifyDomainRequest;
const IdleLoadBalancer = models.IdleLoadBalancer;
const RegisterTargetGroupInstancesResponse = models.RegisterTargetGroupInstancesResponse;
const ClassicalTargetInfo = models.ClassicalTargetInfo;
const DescribeTargetsRequest = models.DescribeTargetsRequest;
const ZoneInfo = models.ZoneInfo;
const RegisterTargetsWithClassicalLBResponse = models.RegisterTargetsWithClassicalLBResponse;
const DescribeTargetGroupsResponse = models.DescribeTargetGroupsResponse;
const LoadBalancerHealth = models.LoadBalancerHealth;
const ModifyLoadBalancerSlaResponse = models.ModifyLoadBalancerSlaResponse;
const DeleteLoadBalancerListenersRequest = models.DeleteLoadBalancerListenersRequest;
const BlockedIP = models.BlockedIP;
const ModifyRuleResponse = models.ModifyRuleResponse;
const DescribeClassicalLBTargetsRequest = models.DescribeClassicalLBTargetsRequest;
const DeregisterFunctionTargetsResponse = models.DeregisterFunctionTargetsResponse;
const DescribeCustomizedConfigListRequest = models.DescribeCustomizedConfigListRequest;
const AutoRewriteRequest = models.AutoRewriteRequest;
const DescribeCrossTargetsResponse = models.DescribeCrossTargetsResponse;
const FunctionInfo = models.FunctionInfo;
const ModifyFunctionTargetsResponse = models.ModifyFunctionTargetsResponse;
const DescribeLoadBalancerListByCertIdResponse = models.DescribeLoadBalancerListByCertIdResponse;
const ModifyTargetGroupInstancesWeightResponse = models.ModifyTargetGroupInstancesWeightResponse;
const DescribeTargetGroupsRequest = models.DescribeTargetGroupsRequest;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const BatchRegisterTargetsResponse = models.BatchRegisterTargetsResponse;
const ModifyLoadBalancerAttributesRequest = models.ModifyLoadBalancerAttributesRequest;
const TypeInfo = models.TypeInfo;
const DescribeLBListenersRequest = models.DescribeLBListenersRequest;
const SlaUpdateParam = models.SlaUpdateParam;
const Target = models.Target;
const DescribeLoadBalancerTrafficRequest = models.DescribeLoadBalancerTrafficRequest;
const DescribeBlockIPListRequest = models.DescribeBlockIPListRequest;
const CertIdRelatedWithLoadBalancers = models.CertIdRelatedWithLoadBalancers;
const DescribeClassicalLBHealthStatusResponse = models.DescribeClassicalLBHealthStatusResponse;
const DescribeClsLogSetRequest = models.DescribeClsLogSetRequest;
const Listener = models.Listener;
const LoadBalancerTraffic = models.LoadBalancerTraffic;
const SpecAvailability = models.SpecAvailability;
const ConfigListItem = models.ConfigListItem;
const RegisterTargetsWithClassicalLBRequest = models.RegisterTargetsWithClassicalLBRequest;
const ModifyDomainAttributesResponse = models.ModifyDomainAttributesResponse;
const ReplaceCertForLoadBalancersResponse = models.ReplaceCertForLoadBalancersResponse;
const DescribeTargetsResponse = models.DescribeTargetsResponse;
const ModifyListenerRequest = models.ModifyListenerRequest;
const DeregisterTargetGroupInstancesResponse = models.DeregisterTargetGroupInstancesResponse;
const RegisterTargetsRequest = models.RegisterTargetsRequest;
const HealthCheck = models.HealthCheck;
const AssociateTargetGroupsResponse = models.AssociateTargetGroupsResponse;
const CreateTopicRequest = models.CreateTopicRequest;
const DeleteListenerRequest = models.DeleteListenerRequest;
const ClassicalHealth = models.ClassicalHealth;
const DescribeCustomizedConfigAssociateListRequest = models.DescribeCustomizedConfigAssociateListRequest;
const ModifyTargetPortResponse = models.ModifyTargetPortResponse;
const MigrateClassicalLoadBalancersRequest = models.MigrateClassicalLoadBalancersRequest;
const DescribeLoadBalancersDetailRequest = models.DescribeLoadBalancersDetailRequest;
const TargetGroupBackend = models.TargetGroupBackend;
const DeregisterFunctionTargetsRequest = models.DeregisterFunctionTargetsRequest;
const DescribeClassicalLBByInstanceIdRequest = models.DescribeClassicalLBByInstanceIdRequest;
const FunctionTarget = models.FunctionTarget;
const DescribeResourcesResponse = models.DescribeResourcesResponse;
const ModifyTargetGroupInstancesWeightRequest = models.ModifyTargetGroupInstancesWeightRequest;
const ManualRewriteResponse = models.ManualRewriteResponse;
const ModifyBlockIPListRequest = models.ModifyBlockIPListRequest;
const ModifyBlockIPListResponse = models.ModifyBlockIPListResponse;
const ExclusiveCluster = models.ExclusiveCluster;
const DescribeClassicalLBHealthStatusRequest = models.DescribeClassicalLBHealthStatusRequest;
const DescribeListenersRequest = models.DescribeListenersRequest;
const CreateClsLogSetResponse = models.CreateClsLogSetResponse;
const DescribeCrossTargetsRequest = models.DescribeCrossTargetsRequest;
const LBChargePrepaid = models.LBChargePrepaid;
const ClassicalListener = models.ClassicalListener;
const DeleteLoadBalancerRequest = models.DeleteLoadBalancerRequest;
const CertificateInput = models.CertificateInput;
const ResourceAvailability = models.ResourceAvailability;
const DescribeCustomizedConfigAssociateListResponse = models.DescribeCustomizedConfigAssociateListResponse;
const SetCustomizedConfigForLoadBalancerRequest = models.SetCustomizedConfigForLoadBalancerRequest;
const CreateListenerResponse = models.CreateListenerResponse;
const CreateTargetGroupResponse = models.CreateTargetGroupResponse;
const MigrateClassicalLoadBalancersResponse = models.MigrateClassicalLoadBalancersResponse;
const CreateLoadBalancerSnatIpsResponse = models.CreateLoadBalancerSnatIpsResponse;
const ClassicalLoadBalancerInfo = models.ClassicalLoadBalancerInfo;
const DescribeListenersResponse = models.DescribeListenersResponse;
const RuleOutput = models.RuleOutput;
const RegisterFunctionTargetsResponse = models.RegisterFunctionTargetsResponse;
const CreateTopicResponse = models.CreateTopicResponse;
const CreateRuleRequest = models.CreateRuleRequest;
const ModifyTargetGroupInstancesPortResponse = models.ModifyTargetGroupInstancesPortResponse;
const LbRsItem = models.LbRsItem;
const RuleTargets = models.RuleTargets;
const BatchDeregisterTargetsRequest = models.BatchDeregisterTargetsRequest;
const DeregisterTargetGroupInstancesRequest = models.DeregisterTargetGroupInstancesRequest;
const ManualRewriteRequest = models.ManualRewriteRequest;
const ModifyListenerResponse = models.ModifyListenerResponse;
const DescribeTargetHealthResponse = models.DescribeTargetHealthResponse;
const CertInfo = models.CertInfo;
const CreateTargetGroupRequest = models.CreateTargetGroupRequest;
const ClusterItem = models.ClusterItem;
const BindDetailItem = models.BindDetailItem;
const CreateListenerRequest = models.CreateListenerRequest;
const CreateClsLogSetRequest = models.CreateClsLogSetRequest;
const DisassociateTargetGroupsRequest = models.DisassociateTargetGroupsRequest;
const Filter = models.Filter;
const ModifyDomainResponse = models.ModifyDomainResponse;
const RegisterTargetsResponse = models.RegisterTargetsResponse;
const DeregisterTargetsFromClassicalLBResponse = models.DeregisterTargetsFromClassicalLBResponse;
const DescribeLoadBalancersRequest = models.DescribeLoadBalancersRequest;
const SetCustomizedConfigForLoadBalancerResponse = models.SetCustomizedConfigForLoadBalancerResponse;
const DeleteLoadBalancerResponse = models.DeleteLoadBalancerResponse;
const AutoRewriteResponse = models.AutoRewriteResponse;
const DeregisterTargetsResponse = models.DeregisterTargetsResponse;
const DescribeLoadBalancerOverviewRequest = models.DescribeLoadBalancerOverviewRequest;
const RewriteTarget = models.RewriteTarget;
const ModifyTargetWeightRequest = models.ModifyTargetWeightRequest;
const DescribeLoadBalancersDetailResponse = models.DescribeLoadBalancersDetailResponse;
const LoadBalancerDetail = models.LoadBalancerDetail;
const LbRsTargets = models.LbRsTargets;
const BatchModifyTargetWeightRequest = models.BatchModifyTargetWeightRequest;
const DeleteRewriteResponse = models.DeleteRewriteResponse;
const BatchTarget = models.BatchTarget;
const DescribeLoadBalancerListByCertIdRequest = models.DescribeLoadBalancerListByCertIdRequest;
const TargetRegionInfo = models.TargetRegionInfo;
const DescribeTargetHealthRequest = models.DescribeTargetHealthRequest;
const ReplaceCertForLoadBalancersRequest = models.ReplaceCertForLoadBalancersRequest;
const DeleteRuleResponse = models.DeleteRuleResponse;
const CloneLoadBalancerResponse = models.CloneLoadBalancerResponse;
const DescribeClsLogSetResponse = models.DescribeClsLogSetResponse;
const ModifyTargetGroupAttributeRequest = models.ModifyTargetGroupAttributeRequest;
const ModifyDomainAttributesRequest = models.ModifyDomainAttributesRequest;
const DeregisterTargetsRequest = models.DeregisterTargetsRequest;
const InternetAccessible = models.InternetAccessible;
const CreateLoadBalancerSnatIpsRequest = models.CreateLoadBalancerSnatIpsRequest;
const DescribeTargetGroupInstancesResponse = models.DescribeTargetGroupInstancesResponse;
const DescribeQuotaResponse = models.DescribeQuotaResponse;
const DeleteTargetGroupsResponse = models.DeleteTargetGroupsResponse;
const ModifyTargetGroupInstancesPortRequest = models.ModifyTargetGroupInstancesPortRequest;
const BatchRegisterTargetsRequest = models.BatchRegisterTargetsRequest;
const ListenerBackend = models.ListenerBackend;
const RuleInput = models.RuleInput;
const TagInfo = models.TagInfo;
const SnatIp = models.SnatIp;
const DescribeBlockIPTaskResponse = models.DescribeBlockIPTaskResponse;
const DescribeResourcesRequest = models.DescribeResourcesRequest;
const DescribeClassicalLBListenersResponse = models.DescribeClassicalLBListenersResponse;
const ModifyTargetGroupAttributeResponse = models.ModifyTargetGroupAttributeResponse;
const ModifyLoadBalancerSlaRequest = models.ModifyLoadBalancerSlaRequest;
const DescribeBlockIPTaskRequest = models.DescribeBlockIPTaskRequest;
const Resource = models.Resource;
const CreateLoadBalancerResponse = models.CreateLoadBalancerResponse;
const ModifyFunctionTargetsRequest = models.ModifyFunctionTargetsRequest;
const DescribeRewriteResponse = models.DescribeRewriteResponse;
const Quota = models.Quota;
const SetLoadBalancerClsLogRequest = models.SetLoadBalancerClsLogRequest;
const LBItem = models.LBItem;
const DeleteLoadBalancerListenersResponse = models.DeleteLoadBalancerListenersResponse;
const DescribeIdleLoadBalancersRequest = models.DescribeIdleLoadBalancersRequest;
const DeleteLoadBalancerSnatIpsRequest = models.DeleteLoadBalancerSnatIpsRequest;
const SetLoadBalancerSecurityGroupsRequest = models.SetLoadBalancerSecurityGroupsRequest;
const DescribeClassicalLBTargetsResponse = models.DescribeClassicalLBTargetsResponse;
const RewriteLocationMap = models.RewriteLocationMap;
const ModifyTargetPortRequest = models.ModifyTargetPortRequest;
const DescribeLoadBalancersResponse = models.DescribeLoadBalancersResponse;
const DescribeLBListenersResponse = models.DescribeLBListenersResponse;
const TargetGroupInfo = models.TargetGroupInfo;
const DeleteListenerResponse = models.DeleteListenerResponse;
const DeleteLoadBalancerSnatIpsResponse = models.DeleteLoadBalancerSnatIpsResponse;
const CertificateOutput = models.CertificateOutput;
const DeleteTargetGroupsRequest = models.DeleteTargetGroupsRequest;
const DescribeClassicalLBListenersRequest = models.DescribeClassicalLBListenersRequest;
const TargetHealth = models.TargetHealth;
const TargetGroupAssociation = models.TargetGroupAssociation;
const ListenerHealth = models.ListenerHealth;
const AssociationItem = models.AssociationItem;
const Backend = models.Backend;
const RegisterTargetGroupInstancesRequest = models.RegisterTargetGroupInstancesRequest;
const LoadBalancer = models.LoadBalancer;


/**
 * clb client
 * @class
 */
class ClbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("clb.tencentcloudapi.com", "2018-03-17", credential, region, profile);
    }
    
    /**
     * This API (RegisterTargets) is used to bind one or more real servers to a CLB listener or layer-7 forwarding rule. Before using this API, you need to create relevant layer-4 listeners or layer-7 forwarding rules. For the former (TCP/UDP), only the listener ID needs to be specified, while for the latter (HTTP/HTTPS), the forwarding rule also needs to be specified through LocationId or Domain+Url.
This is an async API. After it is returned successfully, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {RegisterTargetsRequest} req
     * @param {function(string, RegisterTargetsResponse):void} cb
     * @public
     */
    RegisterTargets(req, cb) {
        let resp = new RegisterTargetsResponse();
        this.request("RegisterTargets", req, resp, cb);
    }

    /**
     * This API is used to modify the domain name-level attributes of a layer-7 listener's forwarding rule, such as modifying the domain name, changing the DefaultServer, enabling/disabling HTTP/2, and modifying certificates.
This is an async API. After it is returned successfully, you can call the DescribeTaskStatus API with the returned RequestId as an input parameter to check whether this task is successful.
     * @param {ModifyDomainAttributesRequest} req
     * @param {function(string, ModifyDomainAttributesResponse):void} cb
     * @public
     */
    ModifyDomainAttributes(req, cb) {
        let resp = new ModifyDomainAttributesResponse();
        this.request("ModifyDomainAttributes", req, resp, cb);
    }

    /**
     * This API is used to query the list of CLB instances associated with a certificate in a region by certificate ID.
     * @param {DescribeLoadBalancerListByCertIdRequest} req
     * @param {function(string, DescribeLoadBalancerListByCertIdResponse):void} cb
     * @public
     */
    DescribeLoadBalancerListByCertId(req, cb) {
        let resp = new DescribeLoadBalancerListByCertIdResponse();
        this.request("DescribeLoadBalancerListByCertId", req, resp, cb);
    }

    /**
     * This API (DescribeClassicalLBListeners) is used to get the listener information of a classic CLB.
     * @param {DescribeClassicalLBListenersRequest} req
     * @param {function(string, DescribeClassicalLBListenersResponse):void} cb
     * @public
     */
    DescribeClassicalLBListeners(req, cb) {
        let resp = new DescribeClassicalLBListenersResponse();
        this.request("DescribeClassicalLBListeners", req, resp, cb);
    }

    /**
     * This API is used to bind a real server with a classic CLB instance. This is an async API. After it is returned successfully, you can call the API `DescribeTaskStatus` with the returned RequestId as an input parameter to check whether this task is successful.
     * @param {RegisterTargetsWithClassicalLBRequest} req
     * @param {function(string, RegisterTargetsWithClassicalLBResponse):void} cb
     * @public
     */
    RegisterTargetsWithClassicalLB(req, cb) {
        let resp = new RegisterTargetsWithClassicalLBResponse();
        this.request("RegisterTargetsWithClassicalLB", req, resp, cb);
    }

    /**
     * This API is used to query the configured location, bound server or bound CLB instance. If there are domain names, the result will be filtered by domain name.
     * @param {DescribeCustomizedConfigAssociateListRequest} req
     * @param {function(string, DescribeCustomizedConfigAssociateListResponse):void} cb
     * @public
     */
    DescribeCustomizedConfigAssociateList(req, cb) {
        let resp = new DescribeCustomizedConfigAssociateListResponse();
        this.request("DescribeCustomizedConfigAssociateList", req, resp, cb);
    }

    /**
     * This API (ModifyTargetWeight) is used to modify the forwarding weight of a real server bound to a CLB instance.
This is an async API. After it is returned successfully, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {ModifyTargetWeightRequest} req
     * @param {function(string, ModifyTargetWeightResponse):void} cb
     * @public
     */
    ModifyTargetWeight(req, cb) {
        let resp = new ModifyTargetWeightResponse();
        this.request("ModifyTargetWeight", req, resp, cb);
    }

    /**
     * This API is used to create a topic with the full-text index and key-value index enabled by default. The creation will fail if there is no CLB exclusive logset.
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        let resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
    }

    /**
     * This API is used to delete the SNAT IP for an SnatPro CLB instance.
This is an async API. After it is returned successfully, you can check the task result by calling `DescribeTaskStatus` with the returned `RequestID`.
     * @param {DeleteLoadBalancerSnatIpsRequest} req
     * @param {function(string, DeleteLoadBalancerSnatIpsResponse):void} cb
     * @public
     */
    DeleteLoadBalancerSnatIps(req, cb) {
        let resp = new DeleteLoadBalancerSnatIpsResponse();
        this.request("DeleteLoadBalancerSnatIps", req, resp, cb);
    }

    /**
     * This API is used to delete a listener from a CLB instance (layer-4 or layer-7).
This is an async API. After it is returned successfully, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {DeleteListenerRequest} req
     * @param {function(string, DeleteListenerResponse):void} cb
     * @public
     */
    DeleteListener(req, cb) {
        let resp = new DeleteListenerResponse();
        this.request("DeleteListener", req, resp, cb);
    }

    /**
     * This API is used to bind or unbind a security group for multiple public network CLB instances. Note: Private network CLB do not support binding security groups.
     * @param {SetSecurityGroupForLoadbalancersRequest} req
     * @param {function(string, SetSecurityGroupForLoadbalancersResponse):void} cb
     * @public
     */
    SetSecurityGroupForLoadbalancers(req, cb) {
        let resp = new SetSecurityGroupForLoadbalancersResponse();
        this.request("SetSecurityGroupForLoadbalancers", req, resp, cb);
    }

    /**
     * This API is used to batch unbind real servers of the layer-4 and layer-7 VPC-based CLBs. Up to 500 real servers can be unbound in a batch.
     * @param {BatchDeregisterTargetsRequest} req
     * @param {function(string, BatchDeregisterTargetsResponse):void} cb
     * @public
     */
    BatchDeregisterTargets(req, cb) {
        let resp = new BatchDeregisterTargetsResponse();
        this.request("BatchDeregisterTargets", req, resp, cb);
    }

    /**
     * This API is used to register servers to a target group.
This is an async API. After it is returned successfully, you can call the `DescribeTaskStatus` API with the returned `RequestID` as an input parameter to check whether this task is successful.
     * @param {RegisterTargetGroupInstancesRequest} req
     * @param {function(string, RegisterTargetGroupInstancesResponse):void} cb
     * @public
     */
    RegisterTargetGroupInstances(req, cb) {
        let resp = new RegisterTargetGroupInstancesResponse();
        this.request("RegisterTargetGroupInstances", req, resp, cb);
    }

    /**
     * This API (CreateRule) is used to create a forwarding rule under an existing layer-7 CLB listener, where real servers must be bound to the rule instead of the listener.
This is an async API. After it is returned successfully, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }

    /**
     * This API is used to add, delete, and update the CLS topic of a CLB instance.
     * @param {SetLoadBalancerClsLogRequest} req
     * @param {function(string, SetLoadBalancerClsLogResponse):void} cb
     * @public
     */
    SetLoadBalancerClsLog(req, cb) {
        let resp = new SetLoadBalancerClsLogResponse();
        this.request("SetLoadBalancerClsLog", req, resp, cb);
    }

    /**
     * An HTTPS:443 listener needs to be created first, along with a forwarding rule. When this API is called, an HTTP:80 listener will be created automatically if it did not exist and a forwarding rule corresponding to `Domains` (specified in the input parameter) under the HTTPS:443 listener will also be created. After successful creation, access requests to an HTTP:80 address will be redirected to an HTTPS:443 address automatically.
     * @param {AutoRewriteRequest} req
     * @param {function(string, AutoRewriteResponse):void} cb
     * @public
     */
    AutoRewrite(req, cb) {
        let resp = new AutoRewriteResponse();
        this.request("AutoRewrite", req, resp, cb);
    }

    /**
     * This API is used to unbind target groups from a rule.
This is an async API. After it is returned successfully, you can call the `DescribeTaskStatus` API with the returned `RequestID` as an input parameter to check whether this task is successful.
     * @param {DisassociateTargetGroupsRequest} req
     * @param {function(string, DisassociateTargetGroupsResponse):void} cb
     * @public
     */
    DisassociateTargetGroups(req, cb) {
        let resp = new DisassociateTargetGroupsResponse();
        this.request("DisassociateTargetGroups", req, resp, cb);
    }

    /**
     * This API (ModifyListener) is used to modify the attributes of a CLB listener, such as listener name, health check parameter, certificate information, and forwarding policy.
This is an async API. After it is returned successfully, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {ModifyListenerRequest} req
     * @param {function(string, ModifyListenerResponse):void} cb
     * @public
     */
    ModifyListener(req, cb) {
        let resp = new ModifyListenerResponse();
        this.request("ModifyListener", req, resp, cb);
    }

    /**
     * This API is used to delete multiple listeners of a CLB instance.
This is an async API. After it is returned successfully, you can call the `DescribeTaskStatus` API with the returned `RequestID` as an input parameter to check whether this task is successful.
     * @param {DeleteLoadBalancerListenersRequest} req
     * @param {function(string, DeleteLoadBalancerListenersResponse):void} cb
     * @public
     */
    DeleteLoadBalancerListeners(req, cb) {
        let resp = new DeleteLoadBalancerListenersResponse();
        this.request("DeleteLoadBalancerListeners", req, resp, cb);
    }

    /**
     * This API is used to modify the cloud functions associated with a load balancing forwarding rule.
     * @param {ModifyFunctionTargetsRequest} req
     * @param {function(string, ModifyFunctionTargetsResponse):void} cb
     * @public
     */
    ModifyFunctionTargets(req, cb) {
        let resp = new ModifyFunctionTargetsResponse();
        this.request("ModifyFunctionTargets", req, resp, cb);
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
     * This API is used to upgrade a pay-as-you-go shared CLB instance to an LCU-supported CLB instance. <br/>
Limits
- This API can only be used to upgrade pay-as-you-go shared instances. To upgrade monthly-subscribed shared instances, please go to the CLB console.
- An LCU-supported instance cannot be changed back to a shared instance.
- Classic CLB instances cannot be upgraded to LCU-supported instances.
     * @param {ModifyLoadBalancerSlaRequest} req
     * @param {function(string, ModifyLoadBalancerSlaResponse):void} cb
     * @public
     */
    ModifyLoadBalancerSla(req, cb) {
        let resp = new ModifyLoadBalancerSlaResponse();
        this.request("ModifyLoadBalancerSla", req, resp, cb);
    }

    /**
     * This API is used to modify the client IP blocklist of a CLB instance. One forwarding rule supports blocking up to 2,000,000 IPs. One blocklist can contain up to 2,000,000 entries.
(This API is in beta test. To use it, please submit a ticket.)
     * @param {ModifyBlockIPListRequest} req
     * @param {function(string, ModifyBlockIPListResponse):void} cb
     * @public
     */
    ModifyBlockIPList(req, cb) {
        let resp = new ModifyBlockIPListResponse();
        this.request("ModifyBlockIPList", req, resp, cb);
    }

    /**
     * This API is used to unbind a CLB real server. This is an async API. After it is returned successfully, you can call the API `DescribeTaskStatus` with the returned RequestId as an input parameter to check whether this task is successful.
     * @param {DeregisterTargetsFromClassicalLBRequest} req
     * @param {function(string, DeregisterTargetsFromClassicalLBResponse):void} cb
     * @public
     */
    DeregisterTargetsFromClassicalLB(req, cb) {
        let resp = new DeregisterTargetsFromClassicalLBResponse();
        this.request("DeregisterTargetsFromClassicalLB", req, resp, cb);
    }

    /**
     * This API is used to create a CLB exclusive logset for storing CLB logs.
     * @param {CreateClsLogSetRequest} req
     * @param {function(string, CreateClsLogSetResponse):void} cb
     * @public
     */
    CreateClsLogSet(req, cb) {
        let resp = new CreateClsLogSetResponse();
        this.request("CreateClsLogSet", req, resp, cb);
    }

    /**
     * This API is used to query CLB instance details, including listener, rules, and target real servers.
     * @param {DescribeLoadBalancersDetailRequest} req
     * @param {function(string, DescribeLoadBalancersDetailResponse):void} cb
     * @public
     */
    DescribeLoadBalancersDetail(req, cb) {
        let resp = new DescribeLoadBalancersDetailResponse();
        this.request("DescribeLoadBalancersDetail", req, resp, cb);
    }

    /**
     * This API (DeleteLoadBalancer) is used to delete one or more specified CLB instances.
This is an async API. After it is returned successfully, you can call the DescribeTaskStatus API with the returned RequestId as an input parameter to check whether this task is successful.
     * @param {DeleteLoadBalancerRequest} req
     * @param {function(string, DeleteLoadBalancerResponse):void} cb
     * @public
     */
    DeleteLoadBalancer(req, cb) {
        let resp = new DeleteLoadBalancerResponse();
        this.request("DeleteLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to query the list of AZs and resources supported for the user in the current region.
     * @param {DescribeResourcesRequest} req
     * @param {function(string, DescribeResourcesResponse):void} cb
     * @public
     */
    DescribeResources(req, cb) {
        let resp = new DescribeResourcesResponse();
        this.request("DescribeResources", req, resp, cb);
    }

    /**
     * This API (ModifyTargetPort) is used to modify the port of a real server bound to a listener.
This is an async API. After it is returned successfully, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {ModifyTargetPortRequest} req
     * @param {function(string, ModifyTargetPortResponse):void} cb
     * @public
     */
    ModifyTargetPort(req, cb) {
        let resp = new ModifyTargetPortResponse();
        this.request("ModifyTargetPort", req, resp, cb);
    }

    /**
     * This API (DeleteRule) is used to delete a forwarding rule under a layer-7 CLB instance listener
This is an async API. After it is returned successfully, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        let resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }

    /**
     * This API (ReplaceCertForLoadBalancers) is used to replace the certificate associated with a CLB instance. A new certificates can be associated with a CLB only after the original certificate is disassociated from it.
This API supports replacing server certificates and client certificates.
The new certificate to be used can be specified by passing in the certificate ID. If no certificate ID is specified, relevant information such as certificate content must be passed in to create a new certificate and bind it to the CLB.
Note: This API can only be called in the Guangzhou region; for other regions, an error will occur due to domain name resolution problems.
     * @param {ReplaceCertForLoadBalancersRequest} req
     * @param {function(string, ReplaceCertForLoadBalancersResponse):void} cb
     * @public
     */
    ReplaceCertForLoadBalancers(req, cb) {
        let resp = new ReplaceCertForLoadBalancersResponse();
        this.request("ReplaceCertForLoadBalancers", req, resp, cb);
    }

    /**
     * This API is used to get the information of servers bound to a target group.
     * @param {DescribeTargetGroupInstancesRequest} req
     * @param {function(string, DescribeTargetGroupInstancesResponse):void} cb
     * @public
     */
    DescribeTargetGroupInstances(req, cb) {
        let resp = new DescribeTargetGroupInstancesResponse();
        this.request("DescribeTargetGroupInstances", req, resp, cb);
    }

    /**
     * This API is used to bind target groups to CLB listeners (layer-4 protocol) or forwarding rules (layer-7 protocol).
This is an async API. After it is returned successfully, you can call the `DescribeTaskStatus` API with the returned `RequestID` as an input parameter to check whether this task is successful.
     * @param {AssociateTargetGroupsRequest} req
     * @param {function(string, AssociateTargetGroupsResponse):void} cb
     * @public
     */
    AssociateTargetGroups(req, cb) {
        let resp = new AssociateTargetGroupsResponse();
        this.request("AssociateTargetGroups", req, resp, cb);
    }

    /**
     * This API is used to query CLB instances bound to the CVM or ENI.
     * @param {DescribeLBListenersRequest} req
     * @param {function(string, DescribeLBListenersResponse):void} cb
     * @public
     */
    DescribeLBListeners(req, cb) {
        let resp = new DescribeLBListenersResponse();
        this.request("DescribeLBListeners", req, resp, cb);
    }

    /**
     * This API is used to modify server ports of a target group in batches.
This is an async API. After it is returned successfully, you can call the `DescribeTaskStatus` API with the returned `RequestID` as an input parameter to check whether this task is successful.
     * @param {ModifyTargetGroupInstancesPortRequest} req
     * @param {function(string, ModifyTargetGroupInstancesPortResponse):void} cb
     * @public
     */
    ModifyTargetGroupInstancesPort(req, cb) {
        let resp = new ModifyTargetGroupInstancesPortResponse();
        this.request("ModifyTargetGroupInstancesPort", req, resp, cb);
    }

    /**
     * This API is used to unbind a server from a target group.
This is an async API. After it is returned successfully, you can call the API `DescribeTaskStatus` with the returned RequestId as an input parameter to check whether this task is successful.
     * @param {DeregisterTargetGroupInstancesRequest} req
     * @param {function(string, DeregisterTargetGroupInstancesResponse):void} cb
     * @public
     */
    DeregisterTargetGroupInstances(req, cb) {
        let resp = new DeregisterTargetGroupInstancesResponse();
        this.request("DeregisterTargetGroupInstances", req, resp, cb);
    }

    /**
     * This API is used to query the list of CLB instances in a region.

     * @param {DescribeLoadBalancersRequest} req
     * @param {function(string, DescribeLoadBalancersResponse):void} cb
     * @public
     */
    DescribeLoadBalancers(req, cb) {
        let resp = new DescribeLoadBalancersResponse();
        this.request("DescribeLoadBalancers", req, resp, cb);
    }

    /**
     * This API is used to query the list of blocked IPs (blocklist) of a CLB instance. (This API is in beta test. To use it, please submit a ticket.)
     * @param {DescribeBlockIPListRequest} req
     * @param {function(string, DescribeBlockIPListResponse):void} cb
     * @public
     */
    DescribeBlockIPList(req, cb) {
        let resp = new DescribeBlockIPListResponse();
        this.request("DescribeBlockIPList", req, resp, cb);
    }

    /**
     * This API is used to get the list of listeners by CLB ID, listener protocol, or listener port. If no filter is specified, all listeners for the CLB instance will be returned.
     * @param {DescribeListenersRequest} req
     * @param {function(string, DescribeListenersResponse):void} cb
     * @public
     */
    DescribeListeners(req, cb) {
        let resp = new DescribeListenersResponse();
        this.request("DescribeListeners", req, resp, cb);
    }

    /**
     * This API is used to get the real servers bound to a classic CLB instance.
     * @param {DescribeClassicalLBTargetsRequest} req
     * @param {function(string, DescribeClassicalLBTargetsResponse):void} cb
     * @public
     */
    DescribeClassicalLBTargets(req, cb) {
        let resp = new DescribeClassicalLBTargetsResponse();
        this.request("DescribeClassicalLBTargets", req, resp, cb);
    }

    /**
     * This API is used to create a listener for a CLB instance.
This is an async API. After it is returned successfully, you can call the DescribeTaskStatus API with the returned RequestId as an input parameter to check whether this task is successful.
     * @param {CreateListenerRequest} req
     * @param {function(string, CreateListenerResponse):void} cb
     * @public
     */
    CreateListener(req, cb) {
        let resp = new CreateListenerResponse();
        this.request("CreateListener", req, resp, cb);
    }

    /**
     * This API is used to batch bind CVM instances or ENIs. Up to 500 servers can be bound in a batch. It supports cross-region binding, layer-4 and layer-7 (TCP/UDP/HTTP/HTTPS) protocols, and VPC-based CLBs only.
     * @param {BatchRegisterTargetsRequest} req
     * @param {function(string, BatchRegisterTargetsResponse):void} cb
     * @public
     */
    BatchRegisterTargets(req, cb) {
        let resp = new BatchRegisterTargetsResponse();
        this.request("BatchRegisterTargets", req, resp, cb);
    }

    /**
     * This API is used to bind an SCF function with the L7 forwarding rule of a CLB instance. Note that you need to create an L7 listener (HTTP, HTTPS) and forwarding rule first.
This is an async API. After it is returned successfully, you can call the `DescribeTaskStatus` API with the returned `RequestID` as an input parameter to check whether this task is successful.<br/>
**Limits:**
- Binding with SCF is only available in Guangzhou, Shenzhen Finance, Shanghai, Shanghai Finance, Beijing, Chengdu, Hong Kong (China), Singapore, Mumbai, Tokyo, and Silicon Valley.
- SCF functions can only be bound with CLB instances of bill-by-IP accounts but not with bill-by-CVM accounts. If you are using a bill-by-CVM account, we recommend upgrading it to a bill-by-IP account. For more information, please see [Checking Account Type](https://intl.cloud.tencent.com/document/product/1199/49090?from_cn_redirect=1). 
- SCF functions cannot be bound with classic CLB instances.
- SCF functions cannot be bound with classic network-based CLB instances.
- SCF functions in the same region can be bound with CLB instances. SCF functions can only be bound across VPCs but not regions.
- SCF functions can only be bound with IPv4 and IPv6 NAT64 CLB instances, but currently not with IPv6 CLB instances.
- SCF functions can only be bound with layer-7 HTTP and HTTPS listeners, but not with layer-7 QUIC listeners or layer-4 (TCP, UDP, and TCP SSL) listeners.
- Only SCF event-triggered functions can be bound with CLB instances.
     * @param {RegisterFunctionTargetsRequest} req
     * @param {function(string, RegisterFunctionTargetsResponse):void} cb
     * @public
     */
    RegisterFunctionTargets(req, cb) {
        let resp = new RegisterFunctionTargetsResponse();
        this.request("RegisterFunctionTargets", req, resp, cb);
    }

    /**
     * This API is used to get the CLB exclusive logset.
     * @param {DescribeClsLogSetRequest} req
     * @param {function(string, DescribeClsLogSetResponse):void} cb
     * @public
     */
    DescribeClsLogSet(req, cb) {
        let resp = new DescribeClsLogSetResponse();
        this.request("DescribeClsLogSet", req, resp, cb);
    }

    /**
     * This API (SetLoadBalancerSecurityGroups) is used to bind/unbind security groups for a public network CLB instance. You can use the DescribeLoadBalancers API to query the security groups bound to a CLB instance. This API uses `set` semantics.
During a binding operation, the input parameters need to be all security groups to be bound to the CLB instance (including those already bound ones and new ones).
During an unbinding operation, the input parameters need to be all the security groups still bound to the CLB instance after the unbinding operation. To unbind all security groups, you can leave this parameter empty or pass in an empty array. Note: Private network CLB do not support binding security groups.
     * @param {SetLoadBalancerSecurityGroupsRequest} req
     * @param {function(string, SetLoadBalancerSecurityGroupsResponse):void} cb
     * @public
     */
    SetLoadBalancerSecurityGroups(req, cb) {
        let resp = new SetLoadBalancerSecurityGroupsResponse();
        this.request("SetLoadBalancerSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to pull custom configuration lists to return the user configuration of `AppId`.
     * @param {DescribeCustomizedConfigListRequest} req
     * @param {function(string, DescribeCustomizedConfigListResponse):void} cb
     * @public
     */
    DescribeCustomizedConfigList(req, cb) {
        let resp = new DescribeCustomizedConfigListResponse();
        this.request("DescribeCustomizedConfigList", req, resp, cb);
    }

    /**
     * This API is used to rename a target group or modify its default port attribute.
     * @param {ModifyTargetGroupAttributeRequest} req
     * @param {function(string, ModifyTargetGroupAttributeResponse):void} cb
     * @public
     */
    ModifyTargetGroupAttribute(req, cb) {
        let resp = new ModifyTargetGroupAttributeResponse();
        this.request("ModifyTargetGroupAttribute", req, resp, cb);
    }

    /**
     * This API is used to query the execution status of an async task. After non-query APIs (used to create/delete CLB instances, listeners, or rules or to bind/unbind real servers) are called successfully, this API needs to be used to query whether the task is successful.
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        let resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }

    /**
     * This API is used to create or manage a user-defined CLB configuration template.
     * @param {SetCustomizedConfigForLoadBalancerRequest} req
     * @param {function(string, SetCustomizedConfigForLoadBalancerResponse):void} cb
     * @public
     */
    SetCustomizedConfigForLoadBalancer(req, cb) {
        let resp = new SetCustomizedConfigForLoadBalancerResponse();
        this.request("SetCustomizedConfigForLoadBalancer", req, resp, cb);
    }

    /**
     * This API (ModifyRule) is used to modify the attributes of a forwarding rule under a layer-7 CLB listener, such as forwarding path, health check attribute, and forwarding policy.
This is an async API. After it is returned successfully, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {ModifyRuleRequest} req
     * @param {function(string, ModifyRuleResponse):void} cb
     * @public
     */
    ModifyRule(req, cb) {
        let resp = new ModifyRuleResponse();
        this.request("ModifyRule", req, resp, cb);
    }

    /**
     * This API (DescribeTargetHealth) is used to query the health check result of a real server of a CLB instance.
     * @param {DescribeTargetHealthRequest} req
     * @param {function(string, DescribeTargetHealthResponse):void} cb
     * @public
     */
    DescribeTargetHealth(req, cb) {
        let resp = new DescribeTargetHealthResponse();
        this.request("DescribeTargetHealth", req, resp, cb);
    }

    /**
     * This API is used to get the target group list.
     * @param {DescribeTargetGroupListRequest} req
     * @param {function(string, DescribeTargetGroupListResponse):void} cb
     * @public
     */
    DescribeTargetGroupList(req, cb) {
        let resp = new DescribeTargetGroupListResponse();
        this.request("DescribeTargetGroupList", req, resp, cb);
    }

    /**
     * This API is used to query the execution status of an async IP blocking (blocklisting) task by the async task ID returned by the `ModifyBlockIPList` API. (This API is in beta test. To use it, please submit a ticket.)
     * @param {DescribeBlockIPTaskRequest} req
     * @param {function(string, DescribeBlockIPTaskResponse):void} cb
     * @public
     */
    DescribeBlockIPTask(req, cb) {
        let resp = new DescribeBlockIPTaskResponse();
        this.request("DescribeBlockIPTask", req, resp, cb);
    }

    /**
     * This API is used to create a target group. This feature is in beta test, if you want to try it out, please [submit a ticket](https://console.cloud.tencent.com/workorder/category?level1_id=6&level2_id=163&source=0&data_title=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20LB&step=1).
     * @param {CreateTargetGroupRequest} req
     * @param {function(string, CreateTargetGroupResponse):void} cb
     * @public
     */
    CreateTargetGroup(req, cb) {
        let resp = new CreateTargetGroupResponse();
        this.request("CreateTargetGroup", req, resp, cb);
    }

    /**
     * Queries the total number of CLB instances and the number of CLB instances in different status (running, isolated and about to expire).
     * @param {DescribeLoadBalancerOverviewRequest} req
     * @param {function(string, DescribeLoadBalancerOverviewResponse):void} cb
     * @public
     */
    DescribeLoadBalancerOverview(req, cb) {
        let resp = new DescribeLoadBalancerOverviewResponse();
        this.request("DescribeLoadBalancerOverview", req, resp, cb);
    }

    /**
     * This API (DescribeTargets) is used to query the list of real servers bound to some listeners of a CLB instance.
     * @param {DescribeTargetsRequest} req
     * @param {function(string, DescribeTargetsResponse):void} cb
     * @public
     */
    DescribeTargets(req, cb) {
        let resp = new DescribeTargetsResponse();
        this.request("DescribeTargets", req, resp, cb);
    }

    /**
     * This API (ModifyDomain) is used to modify a domain name under a layer-7 CLB listener.
This is an async API. After it is returned successfully, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {ModifyDomainRequest} req
     * @param {function(string, ModifyDomainResponse):void} cb
     * @public
     */
    ModifyDomain(req, cb) {
        let resp = new ModifyDomainResponse();
        this.request("ModifyDomain", req, resp, cb);
    }

    /**
     * This API is used to upgrade classic CLB instances to application CLB instances.
This is an async API. After it is returned successfully, you can check the action result by calling `DescribeLoadBalancers`. 
     * @param {MigrateClassicalLoadBalancersRequest} req
     * @param {function(string, MigrateClassicalLoadBalancersResponse):void} cb
     * @public
     */
    MigrateClassicalLoadBalancers(req, cb) {
        let resp = new MigrateClassicalLoadBalancersResponse();
        this.request("MigrateClassicalLoadBalancers", req, resp, cb);
    }

    /**
     * This API (DescribeRewrite) is used to query the redirection relationship between the forwarding rules of a CLB instance by instance ID. If no listener ID or forwarding rule ID is specified, all redirection relationships in the instance will be returned.
     * @param {DescribeRewriteRequest} req
     * @param {function(string, DescribeRewriteResponse):void} cb
     * @public
     */
    DescribeRewrite(req, cb) {
        let resp = new DescribeRewriteResponse();
        this.request("DescribeRewrite", req, resp, cb);
    }

    /**
     * This API is used to query the target group information.
     * @param {DescribeTargetGroupsRequest} req
     * @param {function(string, DescribeTargetGroupsResponse):void} cb
     * @public
     */
    DescribeTargetGroups(req, cb) {
        let resp = new DescribeTargetGroupsResponse();
        this.request("DescribeTargetGroups", req, resp, cb);
    }

    /**
     * This API is used to unbind a SCF function with a CLB forwarding rule. For L7 listeners, you need to specify the forwarding rule by using `LocationId` or `Domain+Url`. 
This is an async API. After it is returned successfully, you can call the [DescribeTaskStatus](https://intl.cloud.tencent.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestID to check whether this task is successful.
<br/>Limits: 

- Binding with SCF is only available in Guangzhou, Shenzhen Finance, Shanghai, Shanghai Finance, Beijing, Chengdu, Hong Kong (China), Singapore, Mumbai, Tokyo, and Silicon Valley.
- SCF functions can only be bound with CLB instances of bill-by-IP accounts but not with bill-by-CVM accounts. If you are using a bill-by-CVM account, we recommend upgrading it to a bill-by-IP account. For more information, please see [Checking Account Type](https://intl.cloud.tencent.com/document/product/1199/49090?from_cn_redirect=1).
- SCF functions cannot be bound with classic CLB instances.
- SCF functions cannot be bound with classic network-based CLB instances.
- SCF functions in the same region can be bound with CLB instances. SCF functions can only be bound across VPCs but not regions.
- SCF functions can only be bound with IPv4 and IPv6 NAT64 CLB instances, but currently not with IPv6 CLB instances.
- SCF functions can only be bound with layer-7 HTTP and HTTPS listeners, but not with layer-7 QUIC listeners or layer-4 (TCP, UDP, and TCP SSL) listeners.
- Only SCF event-triggered functions can be bound with CLB instances.
     * @param {DeregisterFunctionTargetsRequest} req
     * @param {function(string, DeregisterFunctionTargetsResponse):void} cb
     * @public
     */
    DeregisterFunctionTargets(req, cb) {
        let resp = new DeregisterFunctionTargetsResponse();
        this.request("DeregisterFunctionTargets", req, resp, cb);
    }

    /**
     * This API (DescribeClassicalLBHealthStatus) is used to get the real server health status of a classic CLB
     * @param {DescribeClassicalLBHealthStatusRequest} req
     * @param {function(string, DescribeClassicalLBHealthStatusResponse):void} cb
     * @public
     */
    DescribeClassicalLBHealthStatus(req, cb) {
        let resp = new DescribeClassicalLBHealthStatusResponse();
        this.request("DescribeClassicalLBHealthStatus", req, resp, cb);
    }

    /**
     * This API (DeregisterTargets) is used to unbind one or more real servers from a CLB listener or forwarding rule. For layer-4 listeners, only the listener ID needs to be specified. For layer-7 listeners, the forwarding rule also needs to be specified through LocationId or Domain+Url.
This is an async API. After it is returned successfully, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {DeregisterTargetsRequest} req
     * @param {function(string, DeregisterTargetsResponse):void} cb
     * @public
     */
    DeregisterTargets(req, cb) {
        let resp = new DeregisterTargetsResponse();
        this.request("DeregisterTargets", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a CLB instance such as name and cross-region attributes.
This is an async API. After it is returned successfully, you can check the task result by calling `DescribeTaskStatus` with the returned `RequestID`.
     * @param {ModifyLoadBalancerAttributesRequest} req
     * @param {function(string, ModifyLoadBalancerAttributesResponse):void} cb
     * @public
     */
    ModifyLoadBalancerAttributes(req, cb) {
        let resp = new ModifyLoadBalancerAttributesResponse();
        this.request("ModifyLoadBalancerAttributes", req, resp, cb);
    }

    /**
     * This API is used to modify server weights of a target group in batches.
This is an async API. After it is returned successfully, you can call the `DescribeTaskStatus` API with the returned `RequestID` as an input parameter to check whether this task is successful.
     * @param {ModifyTargetGroupInstancesWeightRequest} req
     * @param {function(string, ModifyTargetGroupInstancesWeightResponse):void} cb
     * @public
     */
    ModifyTargetGroupInstancesWeight(req, cb) {
        let resp = new ModifyTargetGroupInstancesWeightResponse();
        this.request("ModifyTargetGroupInstancesWeight", req, resp, cb);
    }

    /**
     * This API is used to add an SNAT IP for an SnatPro CLB instance. If SnatPro is not enabled for CLB, it will be automatically enabled after the SNAT IP is added.
This is an async API. After it is returned successfully, you can check the task result by calling `DescribeTaskStatus` with the returned `RequestID`.
     * @param {CreateLoadBalancerSnatIpsRequest} req
     * @param {function(string, CreateLoadBalancerSnatIpsResponse):void} cb
     * @public
     */
    CreateLoadBalancerSnatIps(req, cb) {
        let resp = new CreateLoadBalancerSnatIpsResponse();
        this.request("CreateLoadBalancerSnatIps", req, resp, cb);
    }

    /**
     * This API is used to get the list of classic CLB instance IDs through a real server ID.
     * @param {DescribeClassicalLBByInstanceIdRequest} req
     * @param {function(string, DescribeClassicalLBByInstanceIdResponse):void} cb
     * @public
     */
    DescribeClassicalLBByInstanceId(req, cb) {
        let resp = new DescribeClassicalLBByInstanceIdResponse();
        this.request("DescribeClassicalLBByInstanceId", req, resp, cb);
    }

    /**
     * This API is used to query CLB instances with high traffic under the current account, and return the top 10 results. For queries using a sub-account, only the CLB instances authorized to the sub-account will be returned.
     * @param {DescribeLoadBalancerTrafficRequest} req
     * @param {function(string, DescribeLoadBalancerTrafficResponse):void} cb
     * @public
     */
    DescribeLoadBalancerTraffic(req, cb) {
        let resp = new DescribeLoadBalancerTrafficResponse();
        this.request("DescribeLoadBalancerTraffic", req, resp, cb);
    }

    /**
     * This API is used to create a clone of the source CLB instance with the same forwarding rules and binding relations. Note that this API is asynchronous, which means that changes to the source CLB after invocation of the API are not included in the clone.

Use limits:
Unsupported instance types: Classic network CLB, Classic CLB, IPv6 CLB, and NAT64 CLB.
Monthly subscribed CLB instances are not supported.
QUIC and port listeners are not supported.
The CLB backend service cannot be a target group or an SCF function.
The following settings will not be cloned automatically and require manual configuration: "Custom Configuration", "Redirection Configuration" and "Allow Traffic by Default in Security Group".

Notes:
If you are using a BGP bandwidth package, you need to pass the package ID.
To create a dedicated cluster-based CLB by cloning the source CLB, you need to pass the cluster ID. Otherwise, a normal CLB is created.
This API is only available for beta users. If you want to try it out, please [submit a ticket](https://console.cloud.tencent.com/workorder/category?level1_id=6&level2_id=163&source=0&data_title=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20CLB&step=1).
     * @param {CloneLoadBalancerRequest} req
     * @param {function(string, CloneLoadBalancerResponse):void} cb
     * @public
     */
    CloneLoadBalancer(req, cb) {
        let resp = new CloneLoadBalancerResponse();
        this.request("CloneLoadBalancer", req, resp, cb);
    }

    /**
     * Queries information of CVMs and ENIs that use cross-region binding 2.0
     * @param {DescribeCrossTargetsRequest} req
     * @param {function(string, DescribeCrossTargetsResponse):void} cb
     * @public
     */
    DescribeCrossTargets(req, cb) {
        let resp = new DescribeCrossTargetsResponse();
        this.request("DescribeCrossTargets", req, resp, cb);
    }

    /**
     * This API is used to modify forwarding weights of real servers bound to CLB listeners in batches. Up to 500 servers can be unbound in a batch. As this API is async, you should check whether the task is successful by passing the RequestId returned to the API call `DescribeTaskStatus`.<br/> This API is supported by CLB layer-4 and layer-7 listeners, but not Classis CLB counterparts.

     * @param {BatchModifyTargetWeightRequest} req
     * @param {function(string, BatchModifyTargetWeightResponse):void} cb
     * @public
     */
    BatchModifyTargetWeight(req, cb) {
        let resp = new BatchModifyTargetWeightResponse();
        this.request("BatchModifyTargetWeight", req, resp, cb);
    }

    /**
     * This API is used to query various quotas in the current region.
     * @param {DescribeQuotaRequest} req
     * @param {function(string, DescribeQuotaResponse):void} cb
     * @public
     */
    DescribeQuota(req, cb) {
        let resp = new DescribeQuotaResponse();
        this.request("DescribeQuota", req, resp, cb);
    }

    /**
     * This API (DeleteRewrite) is used to delete the redirection relationship between the specified forwarding rules.
     * @param {DeleteRewriteRequest} req
     * @param {function(string, DeleteRewriteResponse):void} cb
     * @public
     */
    DeleteRewrite(req, cb) {
        let resp = new DeleteRewriteResponse();
        this.request("DeleteRewrite", req, resp, cb);
    }

    /**
     * After the original access address and the address to be redirected are configured manually, the system will automatically redirect requests made to the original access address to the target address of the corresponding path. Multiple paths can be configured as a redirection policy under one domain name to achieve automatic redirection between HTTP and HTTPS. A redirection policy should meet the following rules: if A has already been redirected to B, then it cannot be redirected to C (unless the original redirection relationship is deleted and a new one is created), and B cannot be redirected to any other addresses.
     * @param {ManualRewriteRequest} req
     * @param {function(string, ManualRewriteResponse):void} cb
     * @public
     */
    ManualRewrite(req, cb) {
        let resp = new ManualRewriteResponse();
        this.request("ManualRewrite", req, resp, cb);
    }

    /**
     * This API (CreateLoadBalancer) is used to create a CLB instance. To use the CLB service, you first need to purchase one or more instances. After this API is called successfully, a unique instance ID will be returned. There are two types of instances: public network and private network. For more information, see the product types in the product documentation.
Note: (1) To apply for a CLB instance in the specified AZ and cross-AZ disaster recovery, please [submit a ticket](https://console.cloud.tencent.com/workorder/category); (2) Currently, IPv6 is supported only in Beijing, Shanghai, and Guangzhou regions.
This is an async API. After it is returned successfully, you can call the DescribeLoadBalancers API to query the status of the instance (such as creating and normal) to check whether it is successfully created.
     * @param {CreateLoadBalancerRequest} req
     * @param {function(string, CreateLoadBalancerResponse):void} cb
     * @public
     */
    CreateLoadBalancer(req, cb) {
        let resp = new CreateLoadBalancerResponse();
        this.request("CreateLoadBalancer", req, resp, cb);
    }

    /**
     * Idle CLB instances are pay-as-you-go load balancers that, within seven days after the creation, do not have rules configured or the configured rules are not associated with any servers. 
     * @param {DescribeIdleLoadBalancersRequest} req
     * @param {function(string, DescribeIdleLoadBalancersResponse):void} cb
     * @public
     */
    DescribeIdleLoadBalancers(req, cb) {
        let resp = new DescribeIdleLoadBalancersResponse();
        this.request("DescribeIdleLoadBalancers", req, resp, cb);
    }


}
module.exports = ClbClient;
