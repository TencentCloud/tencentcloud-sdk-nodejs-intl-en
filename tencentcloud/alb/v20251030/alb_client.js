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
const NotifyUnbindTargetRequest = models.NotifyUnbindTargetRequest;
const DescribeQuotaRequest = models.DescribeQuotaRequest;
const InquirePriceCreateLoadBalancerRequest = models.InquirePriceCreateLoadBalancerRequest;
const DeleteRulesRequest = models.DeleteRulesRequest;
const SetLoadBalancerSecurityGroupsResponse = models.SetLoadBalancerSecurityGroupsResponse;
const ZoneMappingsItem = models.ZoneMappingsItem;
const LoadBalancerDetail = models.LoadBalancerDetail;
const CreateLoadBalancerRequest = models.CreateLoadBalancerRequest;
const ModifyLoadBalancerAttributesRequest = models.ModifyLoadBalancerAttributesRequest;
const DisassociateBandwidthPackageFromLoadBalancerRequest = models.DisassociateBandwidthPackageFromLoadBalancerRequest;
const CreateHealthCheckTemplateRequest = models.CreateHealthCheckTemplateRequest;
const DescribeListenerHealthStatusRequest = models.DescribeListenerHealthStatusRequest;
const HTTPHeaderInfo = models.HTTPHeaderInfo;
const DeleteHealthCheckTemplatesRequest = models.DeleteHealthCheckTemplatesRequest;
const ModifyLoadBalancerAttributesResponse = models.ModifyLoadBalancerAttributesResponse;
const LoadBalancerAddress = models.LoadBalancerAddress;
const NotifyUnbindTargetResponse = models.NotifyUnbindTargetResponse;
const TargetOutput = models.TargetOutput;
const CreateHealthCheckTemplateResponse = models.CreateHealthCheckTemplateResponse;
const ModifyHealthCheckTemplateRequest = models.ModifyHealthCheckTemplateRequest;
const AssociateListenerAdditionalCertificatesRequest = models.AssociateListenerAdditionalCertificatesRequest;
const IPAddressInfo = models.IPAddressInfo;
const DescribeListenerDetailResponse = models.DescribeListenerDetailResponse;
const RuleAction = models.RuleAction;
const DescribeRulesResponse = models.DescribeRulesResponse;
const DescribeTargetGroupsResponse = models.DescribeTargetGroupsResponse;
const RemoveTargetsFromTargetGroupRequest = models.RemoveTargetsFromTargetGroupRequest;
const DescribeListenerDetailRequest = models.DescribeListenerDetailRequest;
const AddTargetsToTargetGroupRequest = models.AddTargetsToTargetGroupRequest;
const ModifyListenerAttributesResponse = models.ModifyListenerAttributesResponse;
const AccessLogConfig = models.AccessLogConfig;
const ModifyRulesAttributesResponse = models.ModifyRulesAttributesResponse;
const HTTPRewriteInfo = models.HTTPRewriteInfo;
const AssociateBandwidthPackageWithLoadBalancerResponse = models.AssociateBandwidthPackageWithLoadBalancerResponse;
const DescribeListenersResponse = models.DescribeListenersResponse;
const AssociateBandwidthPackageWithLoadBalancerRequest = models.AssociateBandwidthPackageWithLoadBalancerRequest;
const XForwardedForConfig = models.XForwardedForConfig;
const DescribeTargetGroupsRequest = models.DescribeTargetGroupsRequest;
const QuotaInfo = models.QuotaInfo;
const DeleteLoadBalancersResponse = models.DeleteLoadBalancersResponse;
const DescribeRulesRequest = models.DescribeRulesRequest;
const HTTPCookieInfo = models.HTTPCookieInfo;
const ModifySecurityPolicyAttributesRequest = models.ModifySecurityPolicyAttributesRequest;
const DescribeSecurityPolicyRelationsResponse = models.DescribeSecurityPolicyRelationsResponse;
const DescribeSecurityPoliciesResponse = models.DescribeSecurityPoliciesResponse;
const HTTPRedirectInfo = models.HTTPRedirectInfo;
const DescribeZonesRequest = models.DescribeZonesRequest;
const Job = models.Job;
const RelatedListener = models.RelatedListener;
const DescribeListenerCertificatesRequest = models.DescribeListenerCertificatesRequest;
const ModifyLoadBalancerAddressTypeRequest = models.ModifyLoadBalancerAddressTypeRequest;
const CreateRulesResponse = models.CreateRulesResponse;
const CreateSecurityPolicyResponse = models.CreateSecurityPolicyResponse;
const DeleteListenerRequest = models.DeleteListenerRequest;
const ModifyTargetGroupAttributesResponse = models.ModifyTargetGroupAttributesResponse;
const RuleModify = models.RuleModify;
const StickySessionConfig = models.StickySessionConfig;
const AssociateListenerAdditionalCertificatesResponse = models.AssociateListenerAdditionalCertificatesResponse;
const ListenerOutput = models.ListenerOutput;
const PostPayPriceInfo = models.PostPayPriceInfo;
const CreateRulesRequest = models.CreateRulesRequest;
const DeleteSecurityPolicyResponse = models.DeleteSecurityPolicyResponse;
const TargetToAdd = models.TargetToAdd;
const DisassociateListenerAdditionalCertificatesResponse = models.DisassociateListenerAdditionalCertificatesResponse;
const DescribeSecurityPolicyCapabilitiesResponse = models.DescribeSecurityPolicyCapabilitiesResponse;
const RemoveHTTPHeaderInfo = models.RemoveHTTPHeaderInfo;
const DescribeTargetGroupTargetsRequest = models.DescribeTargetGroupTargetsRequest;
const DescribeListenerCertificatesResponse = models.DescribeListenerCertificatesResponse;
const SetLoadBalancerSecurityGroupsRequest = models.SetLoadBalancerSecurityGroupsRequest;
const RemoveTargetsFromTargetGroupResponse = models.RemoveTargetsFromTargetGroupResponse;
const AddTargetsToTargetGroupResponse = models.AddTargetsToTargetGroupResponse;
const DescribeAsyncJobsRequest = models.DescribeAsyncJobsRequest;
const CreateListenerResponse = models.CreateListenerResponse;
const CreateTargetGroupResponse = models.CreateTargetGroupResponse;
const TargetGroupConfig = models.TargetGroupConfig;
const DescribeTargetGroupsByTargetRequest = models.DescribeTargetGroupsByTargetRequest;
const TargetGroupStickySession = models.TargetGroupStickySession;
const DeleteLoadBalancersRequest = models.DeleteLoadBalancersRequest;
const RuleCondition = models.RuleCondition;
const Zone = models.Zone;
const RuleOutput = models.RuleOutput;
const SecurityPolicyCapability = models.SecurityPolicyCapability;
const ModificationProtectionInfo = models.ModificationProtectionInfo;
const ModifyTargetsInTargetGroupResponse = models.ModifyTargetsInTargetGroupResponse;
const ModifySecurityPolicyAttributesResponse = models.ModifySecurityPolicyAttributesResponse;
const DeleteSecurityPolicyRequest = models.DeleteSecurityPolicyRequest;
const RuleHealthStatusInfo = models.RuleHealthStatusInfo;
const ModifyLoadBalancerAddressTypeResponse = models.ModifyLoadBalancerAddressTypeResponse;
const CertificateInfo = models.CertificateInfo;
const DescribeHealthCheckTemplatesResponse = models.DescribeHealthCheckTemplatesResponse;
const DescribeTargetGroupsByTargetResponse = models.DescribeTargetGroupsByTargetResponse;
const CreateTargetGroupRequest = models.CreateTargetGroupRequest;
const TargetHealthStatusInfo = models.TargetHealthStatusInfo;
const CreateListenerRequest = models.CreateListenerRequest;
const ModifyLoadBalancerModificationProtectionResponse = models.ModifyLoadBalancerModificationProtectionResponse;
const RuleInput = models.RuleInput;
const DefaultAction = models.DefaultAction;
const TargetGroupHealthInfo = models.TargetGroupHealthInfo;
const SecurityPolicyRelations = models.SecurityPolicyRelations;
const DescribeSecurityPolicyRelationsRequest = models.DescribeSecurityPolicyRelationsRequest;
const LoadBalancerOperationLocksItem = models.LoadBalancerOperationLocksItem;
const DescribeLoadBalancersRequest = models.DescribeLoadBalancersRequest;
const ModifyTargetsInTargetGroupRequest = models.ModifyTargetsInTargetGroupRequest;
const DescribeSecurityPolicyCapabilitiesRequest = models.DescribeSecurityPolicyCapabilitiesRequest;
const HealthCheckConfig = models.HealthCheckConfig;
const ModifyTargetGroupAttributesRequest = models.ModifyTargetGroupAttributesRequest;
const HealthCheckTemplate = models.HealthCheckTemplate;
const DescribeZonesResponse = models.DescribeZonesResponse;
const CreateSecurityPolicyRequest = models.CreateSecurityPolicyRequest;
const TargetGroupOutput = models.TargetGroupOutput;
const InquirePriceCreateLoadBalancerResponse = models.InquirePriceCreateLoadBalancerResponse;
const DescribeListenerHealthStatusResponse = models.DescribeListenerHealthStatusResponse;
const SecurityPolicyInfo = models.SecurityPolicyInfo;
const ModifyRulesAttributesRequest = models.ModifyRulesAttributesRequest;
const DeletionProtectionConfig = models.DeletionProtectionConfig;
const DisassociateListenerAdditionalCertificatesRequest = models.DisassociateListenerAdditionalCertificatesRequest;
const DescribeLoadBalancerDetailRequest = models.DescribeLoadBalancerDetailRequest;
const InsertHTTPHeaderInfo = models.InsertHTTPHeaderInfo;
const DescribeHealthCheckTemplatesRequest = models.DescribeHealthCheckTemplatesRequest;
const DescribeSystemSecurityPoliciesResponse = models.DescribeSystemSecurityPoliciesResponse;
const HTTPQueryStringInfo = models.HTTPQueryStringInfo;
const ModifyHealthCheckTemplateResponse = models.ModifyHealthCheckTemplateResponse;
const DeleteRulesResponse = models.DeleteRulesResponse;
const DescribeQuotaResponse = models.DescribeQuotaResponse;
const DeleteTargetGroupsResponse = models.DeleteTargetGroupsResponse;
const Price = models.Price;
const ModifyListenerAttributesRequest = models.ModifyListenerAttributesRequest;
const TargetToRemove = models.TargetToRemove;
const LoadBalancerBillingConfig = models.LoadBalancerBillingConfig;
const TagInfo = models.TagInfo;
const TargetGroupTuple = models.TargetGroupTuple;
const CreateLoadBalancerResponse = models.CreateLoadBalancerResponse;
const TargetToModify = models.TargetToModify;
const DescribeListenersRequest = models.DescribeListenersRequest;
const ModifyLoadBalancerModificationProtectionRequest = models.ModifyLoadBalancerModificationProtectionRequest;
const DisassociateBandwidthPackageFromLoadBalancerResponse = models.DisassociateBandwidthPackageFromLoadBalancerResponse;
const DescribeLoadBalancerDetailResponse = models.DescribeLoadBalancerDetailResponse;
const FixedResponseInfo = models.FixedResponseInfo;
const DescribeLoadBalancersResponse = models.DescribeLoadBalancersResponse;
const Filter = models.Filter;
const ZoneMappingInfo = models.ZoneMappingInfo;
const DeleteListenerResponse = models.DeleteListenerResponse;
const DescribeSystemSecurityPoliciesRequest = models.DescribeSystemSecurityPoliciesRequest;
const DeleteTargetGroupsRequest = models.DeleteTargetGroupsRequest;
const DescribeAsyncJobsResponse = models.DescribeAsyncJobsResponse;
const DescribeTargetGroupTargetsResponse = models.DescribeTargetGroupTargetsResponse;
const DescribeSecurityPoliciesRequest = models.DescribeSecurityPoliciesRequest;
const DeleteHealthCheckTemplatesResponse = models.DeleteHealthCheckTemplatesResponse;
const LoadBalancer = models.LoadBalancer;


/**
 * alb client
 * @class
 */
class AlbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("alb.intl.tencentcloudapi.com", "2025-10-30", credential, region, profile);
    }
    
    /**
     * Add a backend service in the target group.
     * @param {AddTargetsToTargetGroupRequest} req
     * @param {function(string, AddTargetsToTargetGroupResponse):void} cb
     * @public
     */
    AddTargetsToTargetGroup(req, cb) {
        let resp = new AddTargetsToTargetGroupResponse();
        this.request("AddTargetsToTargetGroup", req, resp, cb);
    }

    /**
     * The SetLoadBalancerSecurityGroups API supports setting (binding and unbinding) security groups for a public network load balancing instance. To query the security groups currently bound to a load balancing instance, use the DescribeLoadBalancerDetail API (https://www.tencentcloud.com/document/api/1822/133711?from_cn_redirect=1). This API uses SET semantics.
For the binding operation, input parameters need to be passed in for all security groups that should be bound to the load balancing instance (bound + new binding).
During unbinding, input parameters need to pass in all security groups bound to a CLB instance after unbinding. To unbind all security groups, omit this parameter or specify an empty array.
     * @param {SetLoadBalancerSecurityGroupsRequest} req
     * @param {function(string, SetLoadBalancerSecurityGroupsResponse):void} cb
     * @public
     */
    SetLoadBalancerSecurityGroups(req, cb) {
        let resp = new SetLoadBalancerSecurityGroupsResponse();
        this.request("SetLoadBalancerSecurityGroups", req, resp, cb);
    }

    /**
     * Create a custom security policy for configuring the TLS protocol version and encryption suite of an HTTPS listener. With a security policy, you can flexibly control the security level of HTTPS communication between clients and load balancing.
     * @param {CreateSecurityPolicyRequest} req
     * @param {function(string, CreateSecurityPolicyResponse):void} cb
     * @public
     */
    CreateSecurityPolicy(req, cb) {
        let resp = new CreateSecurityPolicyResponse();
        this.request("CreateSecurityPolicy", req, resp, cb);
    }

    /**
     * Delete one or more custom security policies. Before deletion, please ensure the policy hasn't been referenced by any HTTPS listener, otherwise the deletion will fail.
     * @param {DeleteSecurityPolicyRequest} req
     * @param {function(string, DeleteSecurityPolicyResponse):void} cb
     * @public
     */
    DeleteSecurityPolicy(req, cb) {
        let resp = new DeleteSecurityPolicyResponse();
        this.request("DeleteSecurityPolicy", req, resp, cb);
    }

    /**
     * Notify load balancing to unbind real servers
     * @param {NotifyUnbindTargetRequest} req
     * @param {function(string, NotifyUnbindTargetResponse):void} cb
     * @public
     */
    NotifyUnbindTarget(req, cb) {
        let resp = new NotifyUnbindTargetResponse();
        this.request("NotifyUnbindTarget", req, resp, cb);
    }

    /**
     * Delete a listener
     * @param {DeleteListenerRequest} req
     * @param {function(string, DeleteListenerResponse):void} cb
     * @public
     */
    DeleteListener(req, cb) {
        let resp = new DeleteListenerResponse();
        this.request("DeleteListener", req, resp, cb);
    }

    /**
     * The **DeleteLoadBalancers** API is an async API. The system returns a request ID, but the application CLB instance is not yet deleted successfully. The deletion task is still in progress in the system backend. You can call [DescribeLoadBalancerDetail](https://www.tencentcloud.com/document/api/1822/133711) to query the deletion status of the application CLB instance.
- When an application CLB instance is in the **Deleting** status, it means the application CLB instance is being deleted.
-If the specified application CLB instance cannot be queried, the application CLB instance has been deleted successfully.
     * @param {DeleteLoadBalancersRequest} req
     * @param {function(string, DeleteLoadBalancersResponse):void} cb
     * @public
     */
    DeleteLoadBalancers(req, cb) {
        let resp = new DeleteLoadBalancersResponse();
        this.request("DeleteLoadBalancers", req, resp, cb);
    }

    /**
     * Modifies listener properties.
     * @param {ModifyListenerAttributesRequest} req
     * @param {function(string, ModifyListenerAttributesResponse):void} cb
     * @public
     */
    ModifyListenerAttributes(req, cb) {
        let resp = new ModifyListenerAttributesResponse();
        this.request("ModifyListenerAttributes", req, resp, cb);
    }

    /**
     * Queries system security policies.
     * @param {DescribeSystemSecurityPoliciesRequest} req
     * @param {function(string, DescribeSystemSecurityPoliciesResponse):void} cb
     * @public
     */
    DescribeSystemSecurityPolicies(req, cb) {
        let resp = new DescribeSystemSecurityPoliciesResponse();
        this.request("DescribeSystemSecurityPolicies", req, resp, cb);
    }

    /**
     * Modify the target group.
     * @param {ModifyTargetGroupAttributesRequest} req
     * @param {function(string, ModifyTargetGroupAttributesResponse):void} cb
     * @public
     */
    ModifyTargetGroupAttributes(req, cb) {
        let resp = new ModifyTargetGroupAttributesResponse();
        this.request("ModifyTargetGroupAttributes", req, resp, cb);
    }

    /**
     * The **ModifyLoadBalancerAttributes** API is an async API. It returns a request ID, but the application CLB instance attribute has not been modified yet. The modifying task is still in progress in the system backend. You can call [DescribeLoadBalancerDetail](https://www.tencentcloud.com/document/api/1822/133711) to query the modification status of the application CLB instance attribute.
-When the application CLB instance attribute is in the **Configuring** status, it means the application CLB instance attribute is being modified.
- When the application CLB instance attribute is in the **Active** status, it means the application CLB instance attribute was modified successfully.
     * @param {ModifyLoadBalancerAttributesRequest} req
     * @param {function(string, ModifyLoadBalancerAttributesResponse):void} cb
     * @public
     */
    ModifyLoadBalancerAttributes(req, cb) {
        let resp = new ModifyLoadBalancerAttributesResponse();
        this.request("ModifyLoadBalancerAttributes", req, resp, cb);
    }

    /**
     * This API is used to modify forwarding rule attributes. This is an async API. After the API return succeeds, you can call the DescribeAsyncJobs API with the returned RequestID as an input parameter to check whether this task is successful.
A rule supports up to 10 forward Conditions and 5 forward Actions.
     * @param {ModifyRulesAttributesRequest} req
     * @param {function(string, ModifyRulesAttributesResponse):void} cb
     * @public
     */
    ModifyRulesAttributes(req, cb) {
        let resp = new ModifyRulesAttributesResponse();
        this.request("ModifyRulesAttributes", req, resp, cb);
    }

    /**
     * Delete a target group.
     * @param {DeleteTargetGroupsRequest} req
     * @param {function(string, DeleteTargetGroupsResponse):void} cb
     * @public
     */
    DeleteTargetGroups(req, cb) {
        let resp = new DeleteTargetGroupsResponse();
        this.request("DeleteTargetGroups", req, resp, cb);
    }

    /**
     * This API is used to create forwarding rules. It is an async API. After returning successfully, call the DescribeAsyncJobs API with the returned RequestID as an input parameter to check whether this task is successful.
A rule supports up to 10 forward Conditions and 5 forward Actions.
     * @param {CreateRulesRequest} req
     * @param {function(string, CreateRulesResponse):void} cb
     * @public
     */
    CreateRules(req, cb) {
        let resp = new CreateRulesResponse();
        this.request("CreateRules", req, resp, cb);
    }

    /**
     * Query API for async tasks
     * @param {DescribeAsyncJobsRequest} req
     * @param {function(string, DescribeAsyncJobsResponse):void} cb
     * @public
     */
    DescribeAsyncJobs(req, cb) {
        let resp = new DescribeAsyncJobsResponse();
        this.request("DescribeAsyncJobs", req, resp, cb);
    }

    /**
     * This API is used to query the health check template list.
     * @param {DescribeHealthCheckTemplatesRequest} req
     * @param {function(string, DescribeHealthCheckTemplatesResponse):void} cb
     * @public
     */
    DescribeHealthCheckTemplates(req, cb) {
        let resp = new DescribeHealthCheckTemplatesResponse();
        this.request("DescribeHealthCheckTemplates", req, resp, cb);
    }

    /**
     * Unbind a Bandwidth Package from an application CLB instance.
     * @param {DisassociateBandwidthPackageFromLoadBalancerRequest} req
     * @param {function(string, DisassociateBandwidthPackageFromLoadBalancerResponse):void} cb
     * @public
     */
    DisassociateBandwidthPackageFromLoadBalancer(req, cb) {
        let resp = new DisassociateBandwidthPackageFromLoadBalancerResponse();
        this.request("DisassociateBandwidthPackageFromLoadBalancer", req, resp, cb);
    }

    /**
     * Removes a backend service from the target group
     * @param {RemoveTargetsFromTargetGroupRequest} req
     * @param {function(string, RemoveTargetsFromTargetGroupResponse):void} cb
     * @public
     */
    RemoveTargetsFromTargetGroup(req, cb) {
        let resp = new RemoveTargetsFromTargetGroupResponse();
        this.request("RemoveTargetsFromTargetGroup", req, resp, cb);
    }

    /**
     * Queries backend services in the target group.
     * @param {DescribeTargetGroupTargetsRequest} req
     * @param {function(string, DescribeTargetGroupTargetsResponse):void} cb
     * @public
     */
    DescribeTargetGroupTargets(req, cb) {
        let resp = new DescribeTargetGroupTargetsResponse();
        this.request("DescribeTargetGroupTargets", req, resp, cb);
    }

    /**
     * Query instance configuration.
     * @param {DescribeLoadBalancersRequest} req
     * @param {function(string, DescribeLoadBalancersResponse):void} cb
     * @public
     */
    DescribeLoadBalancers(req, cb) {
        let resp = new DescribeLoadBalancersResponse();
        this.request("DescribeLoadBalancers", req, resp, cb);
    }

    /**
     * Queries the listener list
     * @param {DescribeListenersRequest} req
     * @param {function(string, DescribeListenersResponse):void} cb
     * @public
     */
    DescribeListeners(req, cb) {
        let resp = new DescribeListenersResponse();
        this.request("DescribeListeners", req, resp, cb);
    }

    /**
     * Query the relationship between a security policy and the HTTPS listeners that refer to it. Before deleting or modifying a security policy, it is advisable to call this API to confirm the impact.
     * @param {DescribeSecurityPolicyRelationsRequest} req
     * @param {function(string, DescribeSecurityPolicyRelationsResponse):void} cb
     * @public
     */
    DescribeSecurityPolicyRelations(req, cb) {
        let resp = new DescribeSecurityPolicyRelationsResponse();
        this.request("DescribeSecurityPolicyRelations", req, resp, cb);
    }

    /**
     * This API is used to create a listener.
     * @param {CreateListenerRequest} req
     * @param {function(string, CreateListenerResponse):void} cb
     * @public
     */
    CreateListener(req, cb) {
        let resp = new CreateListenerResponse();
        this.request("CreateListener", req, resp, cb);
    }

    /**
     * Set load balancing instance modification protection.
     * @param {ModifyLoadBalancerModificationProtectionRequest} req
     * @param {function(string, ModifyLoadBalancerModificationProtectionResponse):void} cb
     * @public
     */
    ModifyLoadBalancerModificationProtection(req, cb) {
        let resp = new ModifyLoadBalancerModificationProtectionResponse();
        this.request("ModifyLoadBalancerModificationProtection", req, resp, cb);
    }

    /**
     * DeleteRules deletes forwarding rules. This is an async API. After returning successfully, call the DescribeAsyncJobs API with the returned RequestID as an input parameter to check whether this task is successful.
     * @param {DeleteRulesRequest} req
     * @param {function(string, DeleteRulesResponse):void} cb
     * @public
     */
    DeleteRules(req, cb) {
        let resp = new DeleteRulesResponse();
        this.request("DeleteRules", req, resp, cb);
    }

    /**
     * Queries the custom security policy list, supports filtering by security policy ID, name, or tag, and supports paging query.
     * @param {DescribeSecurityPoliciesRequest} req
     * @param {function(string, DescribeSecurityPoliciesResponse):void} cb
     * @public
     */
    DescribeSecurityPolicies(req, cb) {
        let resp = new DescribeSecurityPoliciesResponse();
        this.request("DescribeSecurityPolicies", req, resp, cb);
    }

    /**
     * Queries details of one listener.
     * @param {DescribeListenerDetailRequest} req
     * @param {function(string, DescribeListenerDetailResponse):void} cb
     * @public
     */
    DescribeListenerDetail(req, cb) {
        let resp = new DescribeListenerDetailResponse();
        this.request("DescribeListenerDetail", req, resp, cb);
    }

    /**
     * Queries detailed information of a specified load balancing instance.
     * @param {DescribeLoadBalancerDetailRequest} req
     * @param {function(string, DescribeLoadBalancerDetailResponse):void} cb
     * @public
     */
    DescribeLoadBalancerDetail(req, cb) {
        let resp = new DescribeLoadBalancerDetailResponse();
        this.request("DescribeLoadBalancerDetail", req, resp, cb);
    }

    /**
     * This API is used to query the price for creating a load balancer.
     * @param {InquirePriceCreateLoadBalancerRequest} req
     * @param {function(string, InquirePriceCreateLoadBalancerResponse):void} cb
     * @public
     */
    InquirePriceCreateLoadBalancer(req, cb) {
        let resp = new InquirePriceCreateLoadBalancerResponse();
        this.request("InquirePriceCreateLoadBalancer", req, resp, cb);
    }

    /**
     * Queries the health status of a listener.
     * @param {DescribeListenerHealthStatusRequest} req
     * @param {function(string, DescribeListenerHealthStatusResponse):void} cb
     * @public
     */
    DescribeListenerHealthStatus(req, cb) {
        let resp = new DescribeListenerHealthStatusResponse();
        this.request("DescribeListenerHealthStatus", req, resp, cb);
    }

    /**
     * Query the security policy configuration capacity supported in the current region, including optional TLS protocol versions and the encryption suite list for each version. Before creating or modifying a custom security policy, call this API to get available configuration options.
     * @param {DescribeSecurityPolicyCapabilitiesRequest} req
     * @param {function(string, DescribeSecurityPolicyCapabilitiesResponse):void} cb
     * @public
     */
    DescribeSecurityPolicyCapabilities(req, cb) {
        let resp = new DescribeSecurityPolicyCapabilitiesResponse();
        this.request("DescribeSecurityPolicyCapabilities", req, resp, cb);
    }

    /**
     * Target Group APIs
     * @param {CreateTargetGroupRequest} req
     * @param {function(string, CreateTargetGroupResponse):void} cb
     * @public
     */
    CreateTargetGroup(req, cb) {
        let resp = new CreateTargetGroupResponse();
        this.request("CreateTargetGroup", req, resp, cb);
    }

    /**
     * Modify a health check template
     * @param {ModifyHealthCheckTemplateRequest} req
     * @param {function(string, ModifyHealthCheckTemplateResponse):void} cb
     * @public
     */
    ModifyHealthCheckTemplate(req, cb) {
        let resp = new ModifyHealthCheckTemplateResponse();
        this.request("ModifyHealthCheckTemplate", req, resp, cb);
    }

    /**
     * Modifies backend service information in the target group.
     * @param {ModifyTargetsInTargetGroupRequest} req
     * @param {function(string, ModifyTargetsInTargetGroupResponse):void} cb
     * @public
     */
    ModifyTargetsInTargetGroup(req, cb) {
        let resp = new ModifyTargetsInTargetGroupResponse();
        this.request("ModifyTargetsInTargetGroup", req, resp, cb);
    }

    /**
     * Query the target group list.
     * @param {DescribeTargetGroupsRequest} req
     * @param {function(string, DescribeTargetGroupsResponse):void} cb
     * @public
     */
    DescribeTargetGroups(req, cb) {
        let resp = new DescribeTargetGroupsResponse();
        this.request("DescribeTargetGroups", req, resp, cb);
    }

    /**
     * Modify the properties of a custom security policy, including the policy name, TLS protocol version, and encryption suite. The modified configuration will be applied to all HTTPS listeners associated with this policy immediately.
     * @param {ModifySecurityPolicyAttributesRequest} req
     * @param {function(string, ModifySecurityPolicyAttributesResponse):void} cb
     * @public
     */
    ModifySecurityPolicyAttributes(req, cb) {
        let resp = new ModifySecurityPolicyAttributesResponse();
        this.request("ModifySecurityPolicyAttributes", req, resp, cb);
    }

    /**
     * Bind a Bandwidth Package to an application CLB instance.
     * @param {AssociateBandwidthPackageWithLoadBalancerRequest} req
     * @param {function(string, AssociateBandwidthPackageWithLoadBalancerResponse):void} cb
     * @public
     */
    AssociateBandwidthPackageWithLoadBalancer(req, cb) {
        let resp = new AssociateBandwidthPackageWithLoadBalancerResponse();
        this.request("AssociateBandwidthPackageWithLoadBalancer", req, resp, cb);
    }

    /**
     * Querying Availability Zones
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * Query bound target groups based on the slave machine.
     * @param {DescribeTargetGroupsByTargetRequest} req
     * @param {function(string, DescribeTargetGroupsByTargetResponse):void} cb
     * @public
     */
    DescribeTargetGroupsByTarget(req, cb) {
        let resp = new DescribeTargetGroupsByTargetResponse();
        this.request("DescribeTargetGroupsByTarget", req, resp, cb);
    }

    /**
     * This API is used to query forwarding rules.
     * @param {DescribeRulesRequest} req
     * @param {function(string, DescribeRulesResponse):void} cb
     * @public
     */
    DescribeRules(req, cb) {
        let resp = new DescribeRulesResponse();
        this.request("DescribeRules", req, resp, cb);
    }

    /**
     * Deletes a health check Template
     * @param {DeleteHealthCheckTemplatesRequest} req
     * @param {function(string, DeleteHealthCheckTemplatesResponse):void} cb
     * @public
     */
    DeleteHealthCheckTemplates(req, cb) {
        let resp = new DeleteHealthCheckTemplatesResponse();
        this.request("DeleteHealthCheckTemplates", req, resp, cb);
    }

    /**
     * This API is used to create a health check Template.
     * @param {CreateHealthCheckTemplateRequest} req
     * @param {function(string, CreateHealthCheckTemplateResponse):void} cb
     * @public
     */
    CreateHealthCheckTemplate(req, cb) {
        let resp = new CreateHealthCheckTemplateResponse();
        this.request("CreateHealthCheckTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the list of certificates bound to a specified listener by instance id and listener id.
If `CertificateType` is set to `SVR`, the information of the extended server certificate and the default server certificate is returned.
If CertificateType is set to CA, the default CA certificate info is returned.
     * @param {DescribeListenerCertificatesRequest} req
     * @param {function(string, DescribeListenerCertificatesResponse):void} cb
     * @public
     */
    DescribeListenerCertificates(req, cb) {
        let resp = new DescribeListenerCertificatesResponse();
        this.request("DescribeListenerCertificates", req, resp, cb);
    }

    /**
     * Queries the ALB quota configuration of the current account. It supports querying by quota type and allows you to pass a resource ID to query resource-level quotas. You can use DisplayFields to return the used amount and remaining available quantity as needed.
     * @param {DescribeQuotaRequest} req
     * @param {function(string, DescribeQuotaResponse):void} cb
     * @public
     */
    DescribeQuota(req, cb) {
        let resp = new DescribeQuotaResponse();
        this.request("DescribeQuota", req, resp, cb);
    }

    /**
     * DisassociateListenerAdditionalCertificates is an async API. The system returns a request ID, but the additional cert is not yet unbound. The unbinding task is still in progress in the system backend. You can call the DescribeListenerCertificates API to query the cert unbinding status. If the cert is in Disassociating status, it is being unbound.
     * @param {DisassociateListenerAdditionalCertificatesRequest} req
     * @param {function(string, DisassociateListenerAdditionalCertificatesResponse):void} cb
     * @public
     */
    DisassociateListenerAdditionalCertificates(req, cb) {
        let resp = new DisassociateListenerAdditionalCertificatesResponse();
        this.request("DisassociateListenerAdditionalCertificates", req, resp, cb);
    }

    /**
     * **CreateLoadBalancer** is an async API. The system returns an instance ID, but the application CLB instance is not created successfully yet, and the creation task is still in progress in the system backend. You can call [DescribeLoadBalancerDetail](https://www.tencentcloud.com/document/api/1822/133711) to query the creation status of the application CLB instance.
- When an application CLB instance is in the **Provisioning** status, it means the application CLB instance is being created.
-When an application CLB instance is in the **Active** status, the application CLB instance is successfully created.
     * @param {CreateLoadBalancerRequest} req
     * @param {function(string, CreateLoadBalancerResponse):void} cb
     * @public
     */
    CreateLoadBalancer(req, cb) {
        let resp = new CreateLoadBalancerResponse();
        this.request("CreateLoadBalancer", req, resp, cb);
    }

    /**
     * AssociateListenerAdditionalCertificates is an async API. The system returns a request ID, but the additional cert is not yet successfully added. The add task is still in progress in the system backend. You can call the DescribeListenerCertificates API to query the add status of the additional cert.
When HTTPS and QUIC listeners are in Associating status, it means certificate expansion is ongoing.
When HTTPS and QUIC listeners are in the Associated status, the extension cert is successfully added.
     * @param {AssociateListenerAdditionalCertificatesRequest} req
     * @param {function(string, AssociateListenerAdditionalCertificatesResponse):void} cb
     * @public
     */
    AssociateListenerAdditionalCertificates(req, cb) {
        let resp = new AssociateListenerAdditionalCertificatesResponse();
        this.request("AssociateListenerAdditionalCertificates", req, resp, cb);
    }

    /**
     * **Prerequisite:**
You have created an application CLB instance. For detailed operations, please see CreateLoadBalancer.
When you need to change the network type of an application CLB instance from private network to public network through this API, you need to create an Elastic IP first.
**Instructions:**
The ModifyLoadBalancerAddressType API is an async API. The system returns a request ID, but the network type of the application CLB instance has not been changed yet. The change task is still in progress in the system backend. You can call DescribeLoadBalancerDetail to query the change status of the network type of the application CLB instance.
When an application CLB instance is in the Configuring status, it means the network type of the instance is changing.
When an application CLB instance is in the Active status, the network type change of the instance is successful.
     * @param {ModifyLoadBalancerAddressTypeRequest} req
     * @param {function(string, ModifyLoadBalancerAddressTypeResponse):void} cb
     * @public
     */
    ModifyLoadBalancerAddressType(req, cb) {
        let resp = new ModifyLoadBalancerAddressTypeResponse();
        this.request("ModifyLoadBalancerAddressType", req, resp, cb);
    }


}
module.exports = AlbClient;
