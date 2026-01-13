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
const DeleteRewriteRequest = models.DeleteRewriteRequest;
const DescribeTargetGroupListResponse = models.DescribeTargetGroupListResponse;
const DescribeQuotaRequest = models.DescribeQuotaRequest;
const DescribeTargetGroupListRequest = models.DescribeTargetGroupListRequest;
const BatchDeregisterTargetsResponse = models.BatchDeregisterTargetsResponse;
const SetLoadBalancerSecurityGroupsResponse = models.SetLoadBalancerSecurityGroupsResponse;
const RulesItems = models.RulesItems;
const ExtraInfo = models.ExtraInfo;
const ClassicalListener = models.ClassicalListener;
const BatchModifyTargetWeightResponse = models.BatchModifyTargetWeightResponse;
const SetSecurityGroupForLoadbalancersRequest = models.SetSecurityGroupForLoadbalancersRequest;
const CreateLoadBalancerRequest = models.CreateLoadBalancerRequest;
const DescribeLoadBalancerOverviewResponse = models.DescribeLoadBalancerOverviewResponse;
const DeleteRuleRequest = models.DeleteRuleRequest;
const CloneLoadBalancerRequest = models.CloneLoadBalancerRequest;
const DisassociateTargetGroupsResponse = models.DisassociateTargetGroupsResponse;
const ListenerBackend = models.ListenerBackend;
const SetLoadBalancerClsLogResponse = models.SetLoadBalancerClsLogResponse;
const DescribeLoadBalancerTrafficResponse = models.DescribeLoadBalancerTrafficResponse;
const MultiCertInfo = models.MultiCertInfo;
const RsTagRule = models.RsTagRule;
const ModifyRuleRequest = models.ModifyRuleRequest;
const DescribeCustomizedConfigListResponse = models.DescribeCustomizedConfigListResponse;
const DescribeBlockIPListResponse = models.DescribeBlockIPListResponse;
const DescribeRewriteRequest = models.DescribeRewriteRequest;
const ModifyLoadBalancerAttributesResponse = models.ModifyLoadBalancerAttributesResponse;
const DescribeTargetGroupInstancesRequest = models.DescribeTargetGroupInstancesRequest;
const DescribeLBOperateProtectRequest = models.DescribeLBOperateProtectRequest;
const DescribeIdleLoadBalancersResponse = models.DescribeIdleLoadBalancersResponse;
const BindItem = models.BindItem;
const AddCustomizedConfigRequest = models.AddCustomizedConfigRequest;
const ClassicalTarget = models.ClassicalTarget;
const ListenerItem = models.ListenerItem;
const RsWeightRule = models.RsWeightRule;
const RegisterFunctionTargetsRequest = models.RegisterFunctionTargetsRequest;
const DeregisterTargetsFromClassicalLBRequest = models.DeregisterTargetsFromClassicalLBRequest;
const InquiryPriceModifyLoadBalancerRequest = models.InquiryPriceModifyLoadBalancerRequest;
const ModifyCustomizedConfigRequest = models.ModifyCustomizedConfigRequest;
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
const DisassociateCustomizedConfigResponse = models.DisassociateCustomizedConfigResponse;
const BatchModifyTargetTagRequest = models.BatchModifyTargetTagRequest;
const RegisterTargetGroupInstancesResponse = models.RegisterTargetGroupInstancesResponse;
const ClassicalTargetInfo = models.ClassicalTargetInfo;
const DescribeTargetsRequest = models.DescribeTargetsRequest;
const ZoneInfo = models.ZoneInfo;
const RegisterTargetsWithClassicalLBResponse = models.RegisterTargetsWithClassicalLBResponse;
const DescribeTargetGroupsResponse = models.DescribeTargetGroupsResponse;
const LoadBalancerHealth = models.LoadBalancerHealth;
const InquiryPriceCreateLoadBalancerRequest = models.InquiryPriceCreateLoadBalancerRequest;
const ModifyFunctionTargetsResponse = models.ModifyFunctionTargetsResponse;
const DeleteLoadBalancerListenersRequest = models.DeleteLoadBalancerListenersRequest;
const BlockedIP = models.BlockedIP;
const ModifyRuleResponse = models.ModifyRuleResponse;
const DescribeClassicalLBTargetsRequest = models.DescribeClassicalLBTargetsRequest;
const InquiryPriceRenewLoadBalancerResponse = models.InquiryPriceRenewLoadBalancerResponse;
const DeregisterFunctionTargetsResponse = models.DeregisterFunctionTargetsResponse;
const DescribeCustomizedConfigListRequest = models.DescribeCustomizedConfigListRequest;
const AutoRewriteRequest = models.AutoRewriteRequest;
const IdleLoadBalancer = models.IdleLoadBalancer;
const DescribeCrossTargetsResponse = models.DescribeCrossTargetsResponse;
const FunctionInfo = models.FunctionInfo;
const ModifyCustomizedConfigResponse = models.ModifyCustomizedConfigResponse;
const DescribeLoadBalancerListByCertIdResponse = models.DescribeLoadBalancerListByCertIdResponse;
const ModifyTargetGroupInstancesWeightResponse = models.ModifyTargetGroupInstancesWeightResponse;
const DescribeTargetGroupsRequest = models.DescribeTargetGroupsRequest;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const BatchRegisterTargetsResponse = models.BatchRegisterTargetsResponse;
const ModifyLoadBalancerAttributesRequest = models.ModifyLoadBalancerAttributesRequest;
const InquiryPriceModifyLoadBalancerResponse = models.InquiryPriceModifyLoadBalancerResponse;
const DescribeLBListenersRequest = models.DescribeLBListenersRequest;
const SlaUpdateParam = models.SlaUpdateParam;
const Target = models.Target;
const DescribeLoadBalancerTrafficRequest = models.DescribeLoadBalancerTrafficRequest;
const DescribeBlockIPListRequest = models.DescribeBlockIPListRequest;
const MigrateClassicalLoadBalancersResponse = models.MigrateClassicalLoadBalancersResponse;
const CertIdRelatedWithLoadBalancers = models.CertIdRelatedWithLoadBalancers;
const DescribeClassicalLBHealthStatusResponse = models.DescribeClassicalLBHealthStatusResponse;
const ModifyLoadBalancerSlaResponse = models.ModifyLoadBalancerSlaResponse;
const DescribeClsLogSetRequest = models.DescribeClsLogSetRequest;
const Listener = models.Listener;
const LoadBalancerTraffic = models.LoadBalancerTraffic;
const SpecAvailability = models.SpecAvailability;
const ConfigListItem = models.ConfigListItem;
const RegisterTargetsWithClassicalLBRequest = models.RegisterTargetsWithClassicalLBRequest;
const HealthCheck = models.HealthCheck;
const ModifyDomainAttributesResponse = models.ModifyDomainAttributesResponse;
const ReplaceCertForLoadBalancersResponse = models.ReplaceCertForLoadBalancersResponse;
const DescribeTargetsResponse = models.DescribeTargetsResponse;
const ModifyListenerRequest = models.ModifyListenerRequest;
const SetSecurityGroupForLoadbalancersResponse = models.SetSecurityGroupForLoadbalancersResponse;
const DeregisterTargetGroupInstancesResponse = models.DeregisterTargetGroupInstancesResponse;
const RegisterTargetsRequest = models.RegisterTargetsRequest;
const DisassociateCustomizedConfigRequest = models.DisassociateCustomizedConfigRequest;
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
const InquiryPriceRefundLoadBalancerResponse = models.InquiryPriceRefundLoadBalancerResponse;
const DescribeResourcesResponse = models.DescribeResourcesResponse;
const ModifyTargetGroupInstancesWeightRequest = models.ModifyTargetGroupInstancesWeightRequest;
const ManualRewriteResponse = models.ManualRewriteResponse;
const ModifyBlockIPListRequest = models.ModifyBlockIPListRequest;
const RuleOutput = models.RuleOutput;
const ModifyBlockIPListResponse = models.ModifyBlockIPListResponse;
const ExclusiveCluster = models.ExclusiveCluster;
const DescribeClassicalLBHealthStatusRequest = models.DescribeClassicalLBHealthStatusRequest;
const DescribeListenersRequest = models.DescribeListenersRequest;
const CreateClsLogSetResponse = models.CreateClsLogSetResponse;
const Backend = models.Backend;
const LBChargePrepaid = models.LBChargePrepaid;
const AddCustomizedConfigResponse = models.AddCustomizedConfigResponse;
const DeleteLoadBalancerRequest = models.DeleteLoadBalancerRequest;
const ModifyLoadBalancersProjectRequest = models.ModifyLoadBalancersProjectRequest;
const AssociateCustomizedConfigRequest = models.AssociateCustomizedConfigRequest;
const CertificateInput = models.CertificateInput;
const ResourceAvailability = models.ResourceAvailability;
const SetLoadBalancerSecurityGroupsRequest = models.SetLoadBalancerSecurityGroupsRequest;
const DescribeCustomizedConfigAssociateListResponse = models.DescribeCustomizedConfigAssociateListResponse;
const SetCustomizedConfigForLoadBalancerRequest = models.SetCustomizedConfigForLoadBalancerRequest;
const CreateListenerResponse = models.CreateListenerResponse;
const CreateTargetGroupResponse = models.CreateTargetGroupResponse;
const AssociateCustomizedConfigResponse = models.AssociateCustomizedConfigResponse;
const CreateLoadBalancerSnatIpsResponse = models.CreateLoadBalancerSnatIpsResponse;
const ClassicalLoadBalancerInfo = models.ClassicalLoadBalancerInfo;
const DescribeListenersResponse = models.DescribeListenersResponse;
const LBOperateProtectInfo = models.LBOperateProtectInfo;
const RegisterFunctionTargetsResponse = models.RegisterFunctionTargetsResponse;
const CreateTopicResponse = models.CreateTopicResponse;
const CreateRuleRequest = models.CreateRuleRequest;
const ModifyTargetGroupInstancesPortResponse = models.ModifyTargetGroupInstancesPortResponse;
const LbRsItem = models.LbRsItem;
const RuleTargets = models.RuleTargets;
const BatchDeregisterTargetsRequest = models.BatchDeregisterTargetsRequest;
const DeregisterTargetGroupInstancesRequest = models.DeregisterTargetGroupInstancesRequest;
const ManualRewriteRequest = models.ManualRewriteRequest;
const InquiryPriceRefundLoadBalancerRequest = models.InquiryPriceRefundLoadBalancerRequest;
const ModifyListenerResponse = models.ModifyListenerResponse;
const DescribeTargetHealthResponse = models.DescribeTargetHealthResponse;
const CertInfo = models.CertInfo;
const CreateTargetGroupRequest = models.CreateTargetGroupRequest;
const ClusterItem = models.ClusterItem;
const BindDetailItem = models.BindDetailItem;
const CreateListenerRequest = models.CreateListenerRequest;
const CreateClsLogSetRequest = models.CreateClsLogSetRequest;
const TypeInfo = models.TypeInfo;
const DisassociateTargetGroupsRequest = models.DisassociateTargetGroupsRequest;
const Filter = models.Filter;
const AssociateTargetGroupsRequest = models.AssociateTargetGroupsRequest;
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
const ItemPrice = models.ItemPrice;
const ModifyTargetWeightRequest = models.ModifyTargetWeightRequest;
const DescribeLoadBalancersDetailResponse = models.DescribeLoadBalancersDetailResponse;
const TargetHealth = models.TargetHealth;
const LoadBalancerDetail = models.LoadBalancerDetail;
const LbRsTargets = models.LbRsTargets;
const BatchModifyTargetWeightRequest = models.BatchModifyTargetWeightRequest;
const BatchModifyTargetTagResponse = models.BatchModifyTargetTagResponse;
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
const InquiryPriceCreateLoadBalancerResponse = models.InquiryPriceCreateLoadBalancerResponse;
const CreateLoadBalancerSnatIpsRequest = models.CreateLoadBalancerSnatIpsRequest;
const TargetGroupHealthCheck = models.TargetGroupHealthCheck;
const DescribeTargetGroupInstancesResponse = models.DescribeTargetGroupInstancesResponse;
const DescribeQuotaResponse = models.DescribeQuotaResponse;
const DeleteTargetGroupsResponse = models.DeleteTargetGroupsResponse;
const Price = models.Price;
const ModifyTargetGroupInstancesPortRequest = models.ModifyTargetGroupInstancesPortRequest;
const BatchRegisterTargetsRequest = models.BatchRegisterTargetsRequest;
const DeleteCustomizedConfigResponse = models.DeleteCustomizedConfigResponse;
const DescribeLBOperateProtectResponse = models.DescribeLBOperateProtectResponse;
const RuleInput = models.RuleInput;
const TagInfo = models.TagInfo;
const SnatIp = models.SnatIp;
const DescribeBlockIPTaskResponse = models.DescribeBlockIPTaskResponse;
const DescribeResourcesRequest = models.DescribeResourcesRequest;
const DescribeClassicalLBListenersResponse = models.DescribeClassicalLBListenersResponse;
const ModifyTargetGroupAttributeResponse = models.ModifyTargetGroupAttributeResponse;
const ModifyLoadBalancerSlaRequest = models.ModifyLoadBalancerSlaRequest;
const SetLoadBalancerStartStatusResponse = models.SetLoadBalancerStartStatusResponse;
const DescribeBlockIPTaskRequest = models.DescribeBlockIPTaskRequest;
const Resource = models.Resource;
const CreateLoadBalancerResponse = models.CreateLoadBalancerResponse;
const ModifyFunctionTargetsRequest = models.ModifyFunctionTargetsRequest;
const DescribeRewriteResponse = models.DescribeRewriteResponse;
const Quota = models.Quota;
const SetLoadBalancerClsLogRequest = models.SetLoadBalancerClsLogRequest;
const LBItem = models.LBItem;
const DeleteCustomizedConfigRequest = models.DeleteCustomizedConfigRequest;
const DeleteLoadBalancerListenersResponse = models.DeleteLoadBalancerListenersResponse;
const DescribeIdleLoadBalancersRequest = models.DescribeIdleLoadBalancersRequest;
const DeleteLoadBalancerSnatIpsRequest = models.DeleteLoadBalancerSnatIpsRequest;
const InternetAccessible = models.InternetAccessible;
const OAuth = models.OAuth;
const DescribeClassicalLBTargetsResponse = models.DescribeClassicalLBTargetsResponse;
const RewriteLocationMap = models.RewriteLocationMap;
const ModifyTargetPortRequest = models.ModifyTargetPortRequest;
const ModifyLoadBalancersProjectResponse = models.ModifyLoadBalancersProjectResponse;
const DescribeLoadBalancersResponse = models.DescribeLoadBalancersResponse;
const DescribeLBListenersResponse = models.DescribeLBListenersResponse;
const TargetGroupInfo = models.TargetGroupInfo;
const DeleteListenerResponse = models.DeleteListenerResponse;
const DeleteLoadBalancerSnatIpsResponse = models.DeleteLoadBalancerSnatIpsResponse;
const InquiryPriceRenewLoadBalancerRequest = models.InquiryPriceRenewLoadBalancerRequest;
const CertificateOutput = models.CertificateOutput;
const DeleteTargetGroupsRequest = models.DeleteTargetGroupsRequest;
const DescribeClassicalLBListenersRequest = models.DescribeClassicalLBListenersRequest;
const SetLoadBalancerStartStatusRequest = models.SetLoadBalancerStartStatusRequest;
const TargetGroupAssociation = models.TargetGroupAssociation;
const ListenerHealth = models.ListenerHealth;
const AssociationItem = models.AssociationItem;
const DescribeCrossTargetsRequest = models.DescribeCrossTargetsRequest;
const RegisterTargetGroupInstancesRequest = models.RegisterTargetGroupInstancesRequest;
const LoadBalancer = models.LoadBalancer;


/**
 * clb client
 * @class
 */
class ClbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("clb.intl.tencentcloudapi.com", "2018-03-17", credential, region, profile);
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
     * This API is used to query the price of adjusting the specification of a CLB instance.
     * @param {InquiryPriceModifyLoadBalancerRequest} req
     * @param {function(string, InquiryPriceModifyLoadBalancerResponse):void} cb
     * @public
     */
    InquiryPriceModifyLoadBalancer(req, cb) {
        let resp = new InquiryPriceModifyLoadBalancerResponse();
        this.request("InquiryPriceModifyLoadBalancer", req, resp, cb);
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
     * This API is used to associate configurations with a server or location based on the configuration type. It is preparing for decommissioning, please use SetCustomizedConfigForLoadBalancer.
     * @param {AssociateCustomizedConfigRequest} req
     * @param {function(string, AssociateCustomizedConfigResponse):void} cb
     * @public
     */
    AssociateCustomizedConfig(req, cb) {
        let resp = new AssociateCustomizedConfigResponse();
        this.request("AssociateCustomizedConfig", req, resp, cb);
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
     * This API is used to bind target groups to Cloud Load Balancer listeners (Layer-4 protocol) or forwarding rules (L7 protocol).
This API is asynchronous. After it returns a successful result, you need to call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestID as input parameter to check whether this task is successful.
This API is used to describe restrictions.
-Binding a legacy version target group to a Layer-4 listener requires the listener to have backend target groups enabled.
-Layer-7 bind target group. LocationId is a required item in the data structure TargetGroupAssociation.
-The VPC of the Cloud Load Balancer must match the VPC of the target group.
     * @param {AssociateTargetGroupsRequest} req
     * @param {function(string, AssociateTargetGroupsResponse):void} cb
     * @public
     */
    AssociateTargetGroups(req, cb) {
        let resp = new AssociateTargetGroupsResponse();
        this.request("AssociateTargetGroups", req, resp, cb);
    }

    /**
     * This API is used to unbind a server from a target group.
This API is used to perform asynchronous operations. After it returns a successful result, call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {DeregisterTargetGroupInstancesRequest} req
     * @param {function(string, DeregisterTargetGroupInstancesResponse):void} cb
     * @public
     */
    DeregisterTargetGroupInstances(req, cb) {
        let resp = new DeregisterTargetGroupInstancesResponse();
        this.request("DeregisterTargetGroupInstances", req, resp, cb);
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
     * This API is used to modify the projects of CLB instances. 
     * @param {ModifyLoadBalancersProjectRequest} req
     * @param {function(string, ModifyLoadBalancersProjectResponse):void} cb
     * @public
     */
    ModifyLoadBalancersProject(req, cb) {
        let resp = new ModifyLoadBalancersProjectResponse();
        this.request("ModifyLoadBalancersProject", req, resp, cb);
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
     * This API is used to modify the attributes of a CLB instance, such as name and cross-region attributes.
Non-bandwidth-upshift users must add their CLB instance to a bandwidth package to configure cross-domain attributes. To modify the network billing mode, go to the console.
This API is used to perform asynchronous operations. After returning a successful result, call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {ModifyLoadBalancerAttributesRequest} req
     * @param {function(string, ModifyLoadBalancerAttributesResponse):void} cb
     * @public
     */
    ModifyLoadBalancerAttributes(req, cb) {
        let resp = new ModifyLoadBalancerAttributesResponse();
        this.request("ModifyLoadBalancerAttributes", req, resp, cb);
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
     * The BatchModifyTargetWeight API is used to batch modify the forwarding weight of backend machines bound to a CLB listener. The maximum resource quantity for batch modification is 500. This is an asynchronous API. After it returns a successful result, you need to call the DescribeTaskStatus API with the returned RequestID as input parameter to check whether this task is successful. This API supports both layer-4 and layer-7 CLB listeners but is unsupported for classic CLB.
     * @param {BatchModifyTargetWeightRequest} req
     * @param {function(string, BatchModifyTargetWeightResponse):void} cb
     * @public
     */
    BatchModifyTargetWeight(req, cb) {
        let resp = new BatchModifyTargetWeightResponse();
        this.request("BatchModifyTargetWeight", req, resp, cb);
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
     * This API is used to disassociate personalized configurations and prepare for decommissioning. Please use SetCustomizedConfigForLoadBalancer.
     * @param {DisassociateCustomizedConfigRequest} req
     * @param {function(string, DisassociateCustomizedConfigResponse):void} cb
     * @public
     */
    DisassociateCustomizedConfig(req, cb) {
        let resp = new DisassociateCustomizedConfigResponse();
        this.request("DisassociateCustomizedConfig", req, resp, cb);
    }

    /**
     * This API is used to bind or unbind security groups for a public network load balancing instance. To query currently bound security groups of a load balancing instance, use the DescribeLoadBalancers API (https://www.tencentcloud.com/document/product/1108/48459?from_cn_redirect=1). This API follows set semantics.
This API is used to pass in all security groups that should be bound to the Cloud Load Balancer instance during the binding operation (bound + new binding).
For unbinding operations, the input parameters should specify all security groups bound to a CLB instance after unbinding. If you want to unbind all security groups, you can omit this parameter or input an empty array. Note: After a private network CLB is bound to an EIP, the security groups on the CLB do not take effect for the traffic from the EIP, but take effect for the traffic from the private network CLB.
     * @param {SetLoadBalancerSecurityGroupsRequest} req
     * @param {function(string, SetLoadBalancerSecurityGroupsResponse):void} cb
     * @public
     */
    SetLoadBalancerSecurityGroups(req, cb) {
        let resp = new SetLoadBalancerSecurityGroupsResponse();
        this.request("SetLoadBalancerSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to query the refund price of Cloud Load Balancer and only supports prepaid load balancing instances.
     * @param {InquiryPriceRefundLoadBalancerRequest} req
     * @param {function(string, InquiryPriceRefundLoadBalancerResponse):void} cb
     * @public
     */
    InquiryPriceRefundLoadBalancer(req, cb) {
        let resp = new InquiryPriceRefundLoadBalancerResponse();
        this.request("InquiryPriceRefundLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to delete listeners (layer-4 and layer-7) under a Cloud Load Balancer instance.
This API is used to perform asynchronous operations. After returning a successful result, call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {DeleteListenerRequest} req
     * @param {function(string, DeleteListenerResponse):void} cb
     * @public
     */
    DeleteListener(req, cb) {
        let resp = new DeleteListenerResponse();
        this.request("DeleteListener", req, resp, cb);
    }

    /**
     * This API is used to bind or unbind a security group to or from multiple public network CLB instances.
     * @param {SetSecurityGroupForLoadbalancersRequest} req
     * @param {function(string, SetSecurityGroupForLoadbalancersResponse):void} cb
     * @public
     */
    SetSecurityGroupForLoadbalancers(req, cb) {
        let resp = new SetSecurityGroupForLoadbalancersResponse();
        this.request("SetSecurityGroupForLoadbalancers", req, resp, cb);
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
     * This API is used to start or stop a load balancing instance or listener.
This API is used to perform asynchronous operations. After returning a successful result, call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestID as an input parameter to check whether this task is successful.
This feature is currently in beta test. To use it, submit a [ticket](https://console.cloud.tencent.com/workorder/category?level1_id=6&level2_id=163&source=0&data_title=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20LB&step=1) for application.
     * @param {SetLoadBalancerStartStatusRequest} req
     * @param {function(string, SetLoadBalancerStartStatusResponse):void} cb
     * @public
     */
    SetLoadBalancerStartStatus(req, cb) {
        let resp = new SetLoadBalancerStartStatusResponse();
        this.request("SetLoadBalancerStartStatus", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a CLB instance listener, including the listener name, health check parameters, certificate information, and forwarding policy. This API does not support classic CLB instances.
This is an asynchronous API. After it returns the result successfully, you can call the [DescribeTaskStatus](https://intl.cloud.tencent.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestId as an input parameter to query whether the task is successful.
     * @param {ModifyListenerRequest} req
     * @param {function(string, ModifyListenerResponse):void} cb
     * @public
     */
    ModifyListener(req, cb) {
        let resp = new ModifyListenerResponse();
        this.request("ModifyListener", req, resp, cb);
    }

    /**
     * This API is used to delete personalized configurations and prepare for decommissioning. Please use SetCustomizedConfigForLoadBalancer.
     * @param {DeleteCustomizedConfigRequest} req
     * @param {function(string, DeleteCustomizedConfigResponse):void} cb
     * @public
     */
    DeleteCustomizedConfig(req, cb) {
        let resp = new DeleteCustomizedConfigResponse();
        this.request("DeleteCustomizedConfig", req, resp, cb);
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
     * This API is used to bind a cloud function to the forwarding rule of a Cloud Load Balancer. Before that, you need to create a related HTTP or HTTPS listener and forwarding rule.
This API is used to perform asynchronous operations. After returning a successful result, call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
This API is used to describe restrictions.
-SCF binding is supported only in Guangzhou, Shenzhen Finance, Shanghai, Shanghai Finance, Beijing, Chengdu, Hong Kong (China), Singapore, Tokyo, and Silicon Valley.
-Only the standard account type supports binding SCF. The classic account type is unsupported. We recommend upgrading to the standard account type. For more information, see [account type upgrade instructions](https://www.tencentcloud.com/document/product/1199/49090?from_cn_redirect=1). 
-Classic CLB does not support binding SCF.
-Basic Network Type does not support binding SCF.
-CLB supports binding ALL SCFs in the same region by default, supports cross-VPC binding, but cross-region selection is not supported.
-Currently, only IPv4 and IPv6 NAT64 versions of Cloud Load Balancer support binding SCF. IPv6 version is not currently supported.
-Only layer-7 (HTTP, HTTPS) listeners support binding SCF. Layer-4 (TCP, UDP, TCP SSL) listeners and layer-7 QUIC listeners are unsupported.
- CLB binding SCF only supports binding SCF of the "Event function" type.
-A forwarding rule supports binding only one SCF.
     * @param {RegisterFunctionTargetsRequest} req
     * @param {function(string, RegisterFunctionTargetsResponse):void} cb
     * @public
     */
    RegisterFunctionTargets(req, cb) {
        let resp = new RegisterFunctionTargetsResponse();
        this.request("RegisterFunctionTargets", req, resp, cb);
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
     * This API is used to modify the properties of forwarding rules under a layer-7 (HTTP/HTTPS) listener in Cloud Load Balancer, including forwarding path, health check attributes and forwarding policy.
This is an asynchronous API. After it returns the result successfully, you can call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestId as an input parameter to query whether the task is successful.
     * @param {ModifyRuleRequest} req
     * @param {function(string, ModifyRuleResponse):void} cb
     * @public
     */
    ModifyRule(req, cb) {
        let resp = new ModifyRuleResponse();
        this.request("ModifyRule", req, resp, cb);
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
     * This API is used to unbind a cloud function from the forwarding rule of a Cloud Load Balancer. For a layer-7 (HTTP/HTTPS) listener, the forwarding rule must be specified by LocationId or Domain+Url.
This API is used to perform asynchronous operations. After it returns a successful result, call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestID as an input parameter to check whether this task is successful.
This API is used to describe restrictions.

-SCF binding is supported only in Guangzhou, Shenzhen Finance, Shanghai, Shanghai Finance, Beijing, Chengdu, Hong Kong (China), Singapore, Tokyo, and Silicon Valley.
-Only the standard account type supports binding SCF. The classic account type is unsupported. We recommend upgrading to the standard account type. For more information, see [account type upgrade instructions](https://www.tencentcloud.com/document/product/1199/49090?from_cn_redirect=1).
-Classic CLB does not support binding SCF.
-Basic Network Type does not support binding SCF.
-CLB supports binding ALL SCFs in the same region by default, supports cross-VPC binding, but cross-region selection is not supported.
-Currently, only IPv4 and IPv6 NAT64 versions of Cloud Load Balancer support binding SCF. IPv6 version is not currently supported.
-Only layer-7 (HTTP, HTTPS) listeners support binding SCF. Layer-4 (TCP, UDP, TCP SSL) listeners and layer-7 QUIC listeners are unsupported.
-CLB binding SCF only supports binding cloud functions of the "Event function" type.
     * @param {DeregisterFunctionTargetsRequest} req
     * @param {function(string, DeregisterFunctionTargetsResponse):void} cb
     * @public
     */
    DeregisterFunctionTargets(req, cb) {
        let resp = new DeregisterFunctionTargetsResponse();
        this.request("DeregisterFunctionTargets", req, resp, cb);
    }

    /**
     * This API is used to adjust the performance capacity specification of usage-based billing mode instances, for example upgrading from shared type to performance capacity type or modifying the specification of LCU-supported instances.
This API is used to set use limits.
-This API only supports adjustments for pay-as-you-go CLB instances. For CLB instance upgrades with annual/monthly subscription, make adjustments through the console.
-After upgrading from a shared instance to a performance and capacity instance, reverting to a shared instance is not supported.
-A classic CLB instance does not support upgrading to a performance and capacity instance.
     * @param {ModifyLoadBalancerSlaRequest} req
     * @param {function(string, ModifyLoadBalancerSlaResponse):void} cb
     * @public
     */
    ModifyLoadBalancerSla(req, cb) {
        let resp = new ModifyLoadBalancerSlaResponse();
        this.request("ModifyLoadBalancerSla", req, resp, cb);
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
     * This API is used to modify the SCF bound to a Cloud Load Balancer forwarding rule.
This API is used to describe restrictions.
-Only supports binding SCF of the "Event function" type.
     * @param {ModifyFunctionTargetsRequest} req
     * @param {function(string, ModifyFunctionTargetsResponse):void} cb
     * @public
     */
    ModifyFunctionTargets(req, cb) {
        let resp = new ModifyFunctionTargetsResponse();
        this.request("ModifyFunctionTargets", req, resp, cb);
    }

    /**
     * This API is used to delete the SnatIp of the SnatPro load balancing.
This API is used to perform asynchronous operations. After returning a successful result, call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {DeleteLoadBalancerSnatIpsRequest} req
     * @param {function(string, DeleteLoadBalancerSnatIpsResponse):void} cb
     * @public
     */
    DeleteLoadBalancerSnatIps(req, cb) {
        let resp = new DeleteLoadBalancerSnatIpsResponse();
        this.request("DeleteLoadBalancerSnatIps", req, resp, cb);
    }

    /**
     * This API is used to create forwarding rules under an existing layer-7 CLB listener. In layer-7 CLB listeners, backend services must be bound to rules instead of the listener.
This is an asynchronous API. After it returns the result successfully, you can call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestId as an input parameter to query whether the task is successful.
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }

    /**
     * This API is used to add new personalized configurations and prepare for decommissioning. Please use SetCustomizedConfigForLoadBalancer.
     * @param {AddCustomizedConfigRequest} req
     * @param {function(string, AddCustomizedConfigResponse):void} cb
     * @public
     */
    AddCustomizedConfig(req, cb) {
        let resp = new AddCustomizedConfigResponse();
        this.request("AddCustomizedConfig", req, resp, cb);
    }

    /**
     * This API is used to modify the domain name under a layer-7 (HTTP/HTTPS) listener of Cloud Load Balancer.
This is an asynchronous API. After it returns the result successfully, you can call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestId as an input parameter to query whether the task is successful.
     * @param {ModifyDomainRequest} req
     * @param {function(string, ModifyDomainResponse):void} cb
     * @public
     */
    ModifyDomain(req, cb) {
        let resp = new ModifyDomainResponse();
        this.request("ModifyDomain", req, resp, cb);
    }

    /**
     * This API is used to query the price of renewing a CLB instance. It's only available to prepaid CLB instances.
     * @param {InquiryPriceRenewLoadBalancerRequest} req
     * @param {function(string, InquiryPriceRenewLoadBalancerResponse):void} cb
     * @public
     */
    InquiryPriceRenewLoadBalancer(req, cb) {
        let resp = new InquiryPriceRenewLoadBalancerResponse();
        this.request("InquiryPriceRenewLoadBalancer", req, resp, cb);
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
     * This API is used to delete one or more specified CLB instances. After successful deletion, the listeners and forwarding rules under the CLB instance will be deleted together, and the backend service will be unbound.
This API is asynchronous. After it returns the result successfully, you can call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestId as an input parameter to query whether the task is successful.
     * @param {DeleteLoadBalancerRequest} req
     * @param {function(string, DeleteLoadBalancerResponse):void} cb
     * @public
     */
    DeleteLoadBalancer(req, cb) {
        let resp = new DeleteLoadBalancerResponse();
        this.request("DeleteLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to query the price of creating a CLB instance.
     * @param {InquiryPriceCreateLoadBalancerRequest} req
     * @param {function(string, InquiryPriceCreateLoadBalancerResponse):void} cb
     * @public
     */
    InquiryPriceCreateLoadBalancer(req, cb) {
        let resp = new InquiryPriceCreateLoadBalancerResponse();
        this.request("InquiryPriceCreateLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to delete forwarding rules under a layer-7 listener of a load balancing instance.
This API is used to perform asynchronous operations. After it returns a successful result, call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        let resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }

    /**
     * This API is used to modify personalized configuration. If the configuration is already bound to clb, server or location, update simultaneously. Prepare for decommissioning. Please use SetCustomizedConfigForLoadBalancer.
     * @param {ModifyCustomizedConfigRequest} req
     * @param {function(string, ModifyCustomizedConfigResponse):void} cb
     * @public
     */
    ModifyCustomizedConfig(req, cb) {
        let resp = new ModifyCustomizedConfigResponse();
        this.request("ModifyCustomizedConfig", req, resp, cb);
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

    /**
     * This API is used to bind one or more backend services to a Cloud Load Balancer listener or layer-7 forwarding rule. Before that, you need to create a related CLB layer-4 listener or layer-7 forwarding rule. For Layer-4 listeners (TCP/UDP), only specify the listener ID. For layer-7 (HTTP/HTTPS) listeners, forwarding rules must be specified through LocationId or Domain+Url.
This API is used to perform asynchronous operations. After it returns a successful result, call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {RegisterTargetsRequest} req
     * @param {function(string, RegisterTargetsResponse):void} cb
     * @public
     */
    RegisterTargets(req, cb) {
        let resp = new RegisterTargetsResponse();
        this.request("RegisterTargets", req, resp, cb);
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
     * This API is used to delete multiple listeners of Cloud Load Balancer.
This API is used to perform asynchronous operations. After it returns a successful result, call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {DeleteLoadBalancerListenersRequest} req
     * @param {function(string, DeleteLoadBalancerListenersResponse):void} cb
     * @public
     */
    DeleteLoadBalancerListeners(req, cb) {
        let resp = new DeleteLoadBalancerListenersResponse();
        this.request("DeleteLoadBalancerListeners", req, resp, cb);
    }

    /**
     * This API is used to delete target groups in batches, with a maximum of 20 target groups at a time.
     * @param {DeleteTargetGroupsRequest} req
     * @param {function(string, DeleteTargetGroupsResponse):void} cb
     * @public
     */
    DeleteTargetGroups(req, cb) {
        let resp = new DeleteTargetGroupsResponse();
        this.request("DeleteTargetGroups", req, resp, cb);
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
     * This API is used to modify domain-level attributes of Cloud Load Balancer layer-7 listener forwarding rules, such as modifying domain name, changing DefaultServer, enabling/disabling Http/2, and modifying certificates.
This is an async API. After it returns a successful result, call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestId as an input parameter to check whether this task is successful.
     * @param {ModifyDomainAttributesRequest} req
     * @param {function(string, ModifyDomainAttributesResponse):void} cb
     * @public
     */
    ModifyDomainAttributes(req, cb) {
        let resp = new ModifyDomainAttributesResponse();
        this.request("ModifyDomainAttributes", req, resp, cb);
    }

    /**
     * This API is used to disassociate a target group from a rule.
This is an async API. After the API return succeeds, you can call the DescribeTaskStatus API with the returned RequestID as an input parameter to check whether this task is successful.
When unbinding a Layer 7 forwarding rule, LocationId is a required item.
     * @param {DisassociateTargetGroupsRequest} req
     * @param {function(string, DisassociateTargetGroupsResponse):void} cb
     * @public
     */
    DisassociateTargetGroups(req, cb) {
        let resp = new DisassociateTargetGroupsResponse();
        this.request("DisassociateTargetGroups", req, resp, cb);
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
This is an asynchronous API. After it returns the result successfully, you can call the [DescribeTaskStatus](https://intl.cloud.tencent.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestId as an input parameter to query whether the task is successful.
     * @param {CreateListenerRequest} req
     * @param {function(string, CreateListenerResponse):void} cb
     * @public
     */
    CreateListener(req, cb) {
        let resp = new CreateListenerResponse();
        this.request("CreateListener", req, resp, cb);
    }

    /**
     * This API is used to query the operation protection info of Cloud Load Balancer.
     * @param {DescribeLBOperateProtectRequest} req
     * @param {function(string, DescribeLBOperateProtectResponse):void} cb
     * @public
     */
    DescribeLBOperateProtect(req, cb) {
        let resp = new DescribeLBOperateProtectResponse();
        this.request("DescribeLBOperateProtect", req, resp, cb);
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
     * This API is used to modify the forwarding weight of backend service bound to Cloud Load Balancer.
This is an asynchronous API. After it returns the result successfully, you can call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestId as an input parameter to query whether the task is successful.
     * @param {ModifyTargetWeightRequest} req
     * @param {function(string, ModifyTargetWeightResponse):void} cb
     * @public
     */
    ModifyTargetWeight(req, cb) {
        let resp = new ModifyTargetWeightResponse();
        this.request("ModifyTargetWeight", req, resp, cb);
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
     * This API is used to add SnatIp for SnatPro Cloud Load Balancer. If SnatPro is not enabled, it will be auto on after adding SnatIp.
This API is used to perform asynchronous operations. After returning a successful result, call the [DescribeTaskStatus](https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1) API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {CreateLoadBalancerSnatIpsRequest} req
     * @param {function(string, CreateLoadBalancerSnatIpsResponse):void} cb
     * @public
     */
    CreateLoadBalancerSnatIps(req, cb) {
        let resp = new CreateLoadBalancerSnatIpsResponse();
        this.request("CreateLoadBalancerSnatIps", req, resp, cb);
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
     * This API is used to clone a load balancing instance with identical rules and binding relationships based on the designated Cloud Load Balancer. The cloning process is an asynchronous operation. The cloned data is based on the status when calling CloneLoadBalancer. If the source CLB changes after calling CloneLoadBalancer, the change rules will not be cloned.

Note: The instance creation status can be queried based on the returned requestId by accessing the DescribeTaskStatus API (https://www.tencentcloud.com/document/product/214/30683?from_cn_redirect=1).

This API is used to describe restriction descriptions.
This API is used to set instance attribute restrictions.
-The cloning feature supports both pay-as-you-go and monthly subscription instances. For cloned monthly subscription instances, the new instance's network billing mode switches to billing by hourly bandwidth, with its bandwidth and specifications remaining consistent with the settings of the original instance.
-CLB instances not associated with billable items cannot be cloned (historic free activity creation).
-Classic CLB instances and Anti-DDoS CLBs cannot be cloned.
-Cloning of classic network-based instances is not supported.
-Anycast instances cannot be cloned.
-IPv6 NAT64 edition instances cannot be cloned.
-Blocked or frozen instances cannot be cloned.
-Before performing the cloning operation, make sure that all certificates used on the instance have not expired, otherwise cloning will fail.
This API is used to set quota dimension restrictions.
-Cloning is not supported when the number of instance listeners exceeds 50.
-Cloning is not supported when the public network bandwidth cap of a shared instance exceeds 2G.

This API is used to call APIs.
This API is used to specify the BGP bandwidth package ID.
This API is used to perform exclusive cluster cloning with corresponding parameters, otherwise shared instance creation will be used.
     * @param {CloneLoadBalancerRequest} req
     * @param {function(string, CloneLoadBalancerResponse):void} cb
     * @public
     */
    CloneLoadBalancer(req, cb) {
        let resp = new CloneLoadBalancerResponse();
        this.request("CloneLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to modify the tags of real servers bound to CLB listeners in batches. The maximum number of resources that can be modified in a batch is 500. This is a synchronous API. <br/> It is supported for Layer-4 and Layer-7 listeners of CLB instances, but not for classic CLB instances.
     * @param {BatchModifyTargetTagRequest} req
     * @param {function(string, BatchModifyTargetTagResponse):void} cb
     * @public
     */
    BatchModifyTargetTag(req, cb) {
        let resp = new BatchModifyTargetTagResponse();
        this.request("BatchModifyTargetTag", req, resp, cb);
    }


}
module.exports = ClbClient;
