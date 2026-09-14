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
const DescribeTaskResultResponse = models.DescribeTaskResultResponse;
const DeleteGlobalAcceleratorAccessLogRequest = models.DeleteGlobalAcceleratorAccessLogRequest;
const DescribeEndpointGroupsResponse = models.DescribeEndpointGroupsResponse;
const ReplaceListenerAdditionalCertResponse = models.ReplaceListenerAdditionalCertResponse;
const CreateForwardingRuleRequest = models.CreateForwardingRuleRequest;
const DescribeGlobalAcceleratorAccessLogResponse = models.DescribeGlobalAcceleratorAccessLogResponse;
const DescribeForwardingPolicyResponse = models.DescribeForwardingPolicyResponse;
const CreateGlobalAcceleratorRequest = models.CreateGlobalAcceleratorRequest;
const DescribeCrossBorderSettlementRequest = models.DescribeCrossBorderSettlementRequest;
const CreateListenerAdditionalCertResponse = models.CreateListenerAdditionalCertResponse;
const DeleteGlobalAcceleratorAclPolicyResponse = models.DeleteGlobalAcceleratorAclPolicyResponse;
const CreateAccelerateAreasResponse = models.CreateAccelerateAreasResponse;
const DescribeEndpointGroupsRequest = models.DescribeEndpointGroupsRequest;
const ResponseHeaders = models.ResponseHeaders;
const DescribeGlobalAcceleratorAclRulesRequest = models.DescribeGlobalAcceleratorAclRulesRequest;
const DeleteGlobalAcceleratorAclRuleResponse = models.DeleteGlobalAcceleratorAclRuleResponse;
const DescribeAccessLogParamResponse = models.DescribeAccessLogParamResponse;
const ModifyGlobalAcceleratorResponse = models.ModifyGlobalAcceleratorResponse;
const RuleAction = models.RuleAction;
const DeleteEndpointGroupsRequest = models.DeleteEndpointGroupsRequest;
const ModifyEndpointGroupRequest = models.ModifyEndpointGroupRequest;
const ReplaceListenerAdditionalCertRequest = models.ReplaceListenerAdditionalCertRequest;
const ModifyGlobalAcceleratorAclPolicyRequest = models.ModifyGlobalAcceleratorAclPolicyRequest;
const EndpointGroupConfigurationSet = models.EndpointGroupConfigurationSet;
const DescribeGlobalAcceleratorsResponse = models.DescribeGlobalAcceleratorsResponse;
const ModifyGlobalAcceleratorAccessLogRequest = models.ModifyGlobalAcceleratorAccessLogRequest;
const DescribeListenersResponse = models.DescribeListenersResponse;
const CreateForwardingPolicyRequest = models.CreateForwardingPolicyRequest;
const DeleteListenerAdditionalCertResponse = models.DeleteListenerAdditionalCertResponse;
const AclEntries = models.AclEntries;
const ModifyForwardingPolicyRequest = models.ModifyForwardingPolicyRequest;
const DescribeGlobalAcceleratorAccessLogRequest = models.DescribeGlobalAcceleratorAccessLogRequest;
const CreateListenerAdditionalCertRequest = models.CreateListenerAdditionalCertRequest;
const DeleteListenerAdditionalCertRequest = models.DeleteListenerAdditionalCertRequest;
const DescribeGlobalAcceleratorsRequest = models.DescribeGlobalAcceleratorsRequest;
const DeleteGlobalAcceleratorAclRuleRequest = models.DeleteGlobalAcceleratorAclRuleRequest;
const Tag = models.Tag;
const ModifyAccelerateAreasResponse = models.ModifyAccelerateAreasResponse;
const EndpointConfigurations = models.EndpointConfigurations;
const PortRanges = models.PortRanges;
const ModifyGlobalAcceleratorAclPolicyResponse = models.ModifyGlobalAcceleratorAclPolicyResponse;
const ModifyAccessLogStatusRequest = models.ModifyAccessLogStatusRequest;
const DeleteListenerRequest = models.DeleteListenerRequest;
const CreateGlobalAcceleratorAclPolicyRequest = models.CreateGlobalAcceleratorAclPolicyRequest;
const DescribeForwardingRuleRequest = models.DescribeForwardingRuleRequest;
const CreateGlobalAcceleratorAccessLogResponse = models.CreateGlobalAcceleratorAccessLogResponse;
const DeleteEndpointGroupsResponse = models.DeleteEndpointGroupsResponse;
const DescribeAccelerateAreasResponse = models.DescribeAccelerateAreasResponse;
const EndpointGroupConfiguration = models.EndpointGroupConfiguration;
const GlobalAcceleratorSet = models.GlobalAcceleratorSet;
const AcceleratorAreas = models.AcceleratorAreas;
const CreateEndpointGroupRequest = models.CreateEndpointGroupRequest;
const CreateEndpointGroupResponse = models.CreateEndpointGroupResponse;
const DeleteGlobalAcceleratorResponse = models.DeleteGlobalAcceleratorResponse;
const CreateGlobalAcceleratorAclRuleResponse = models.CreateGlobalAcceleratorAclRuleResponse;
const DescribeAccelerateRegionsResponse = models.DescribeAccelerateRegionsResponse;
const ForwardingRuleSet = models.ForwardingRuleSet;
const CreateForwardingRuleResponse = models.CreateForwardingRuleResponse;
const CreateGlobalAcceleratorAclPolicyResponse = models.CreateGlobalAcceleratorAclPolicyResponse;
const CreateGlobalAcceleratorAccessLogRequest = models.CreateGlobalAcceleratorAccessLogRequest;
const ModifyGlobalAcceleratorAclRuleRequest = models.ModifyGlobalAcceleratorAclRuleRequest;
const AcceleratorRegionSet = models.AcceleratorRegionSet;
const CreateListenerResponse = models.CreateListenerResponse;
const ModifyForwardingPolicyResponse = models.ModifyForwardingPolicyResponse;
const CreateGlobalAcceleratorAclRuleRequest = models.CreateGlobalAcceleratorAclRuleRequest;
const ModifyListenerRequest = models.ModifyListenerRequest;
const RuleCondition = models.RuleCondition;
const HideResponseHeaders = models.HideResponseHeaders;
const DescribeForwardingRuleResponse = models.DescribeForwardingRuleResponse;
const GlobalAcceleratorAclPolicies = models.GlobalAcceleratorAclPolicies;
const GlobalAcceleratorAclRuleSet = models.GlobalAcceleratorAclRuleSet;
const DeleteGlobalAcceleratorRequest = models.DeleteGlobalAcceleratorRequest;
const ModifyForwardingRuleRequest = models.ModifyForwardingRuleRequest;
const ModifyListenerResponse = models.ModifyListenerResponse;
const DeleteGlobalAcceleratorAccessLogResponse = models.DeleteGlobalAcceleratorAccessLogResponse;
const DeleteForwardingPolicyRequest = models.DeleteForwardingPolicyRequest;
const CreateListenerRequest = models.CreateListenerRequest;
const DescribeTaskResultRequest = models.DescribeTaskResultRequest;
const ModifyGlobalAcceleratorRequest = models.ModifyGlobalAcceleratorRequest;
const Filter = models.Filter;
const DescribeAccelerateRegionsRequest = models.DescribeAccelerateRegionsRequest;
const DeleteForwardingRuleResponse = models.DeleteForwardingRuleResponse;
const CreateForwardingPolicyResponse = models.CreateForwardingPolicyResponse;
const ForwardingPolicySet = models.ForwardingPolicySet;
const ModifyGlobalAcceleratorAclRuleResponse = models.ModifyGlobalAcceleratorAclRuleResponse;
const IpAddressInfoSet = models.IpAddressInfoSet;
const DeleteForwardingPolicyResponse = models.DeleteForwardingPolicyResponse;
const ModifyEndpointGroupResponse = models.ModifyEndpointGroupResponse;
const ListenerSet = models.ListenerSet;
const DescribeGlobalAcceleratorAclRulesResponse = models.DescribeGlobalAcceleratorAclRulesResponse;
const GlobalAcceleratorAccessLog = models.GlobalAcceleratorAccessLog;
const ModifyAccessLogStatusResponse = models.ModifyAccessLogStatusResponse;
const DescribeAccelerateAreasRequest = models.DescribeAccelerateAreasRequest;
const CreateAccelerateAreasRequest = models.CreateAccelerateAreasRequest;
const DescribeCrossBorderSettlementResponse = models.DescribeCrossBorderSettlementResponse;
const DeleteAccelerateAreasRequest = models.DeleteAccelerateAreasRequest;
const ModifyGlobalAcceleratorAccessLogResponse = models.ModifyGlobalAcceleratorAccessLogResponse;
const DeleteAccelerateAreasResponse = models.DeleteAccelerateAreasResponse;
const DescribeGlobalAcceleratorAclPoliciesRequest = models.DescribeGlobalAcceleratorAclPoliciesRequest;
const DescribeGlobalAcceleratorAclPoliciesResponse = models.DescribeGlobalAcceleratorAclPoliciesResponse;
const ModifyForwardingRuleResponse = models.ModifyForwardingRuleResponse;
const ModifyAccelerateAreasRequest = models.ModifyAccelerateAreasRequest;
const CreateGlobalAcceleratorResponse = models.CreateGlobalAcceleratorResponse;
const DescribeListenersRequest = models.DescribeListenersRequest;
const DescribeForwardingPolicyRequest = models.DescribeForwardingPolicyRequest;
const DeleteForwardingRuleRequest = models.DeleteForwardingRuleRequest;
const OriginHeader = models.OriginHeader;
const DeleteListenerResponse = models.DeleteListenerResponse;
const DeleteGlobalAcceleratorAclPolicyRequest = models.DeleteGlobalAcceleratorAclPolicyRequest;
const DescribeAccessLogParamRequest = models.DescribeAccessLogParamRequest;
const PortOverride = models.PortOverride;


/**
 * ga2 client
 * @class
 */
class Ga2Client extends AbstractClient {

    constructor(credential, region, profile) {
        super("ga2.intl.tencentcloudapi.com", "2025-01-15", credential, region, profile);
    }
    
    /**
     * Modify a layer-7 forwarding policy
     * @param {ModifyForwardingPolicyRequest} req
     * @param {function(string, ModifyForwardingPolicyResponse):void} cb
     * @public
     */
    ModifyForwardingPolicy(req, cb) {
        let resp = new ModifyForwardingPolicyResponse();
        this.request("ModifyForwardingPolicy", req, resp, cb);
    }

    /**
     * Create a layer-7 forwarding policy.
     * @param {CreateForwardingPolicyRequest} req
     * @param {function(string, CreateForwardingPolicyResponse):void} cb
     * @public
     */
    CreateForwardingPolicy(req, cb) {
        let resp = new CreateForwardingPolicyResponse();
        this.request("CreateForwardingPolicy", req, resp, cb);
    }

    /**
     * This API is used to create a terminal node group.
     * @param {CreateEndpointGroupRequest} req
     * @param {function(string, CreateEndpointGroupResponse):void} cb
     * @public
     */
    CreateEndpointGroup(req, cb) {
        let resp = new CreateEndpointGroupResponse();
        this.request("CreateEndpointGroup", req, resp, cb);
    }

    /**
     * Queries acceleration regions
     * @param {DescribeAccelerateAreasRequest} req
     * @param {function(string, DescribeAccelerateAreasResponse):void} cb
     * @public
     */
    DescribeAccelerateAreas(req, cb) {
        let resp = new DescribeAccelerateAreasResponse();
        this.request("DescribeAccelerateAreas", req, resp, cb);
    }

    /**
     * Deletes a global acceleration instance
     * @param {DeleteGlobalAcceleratorRequest} req
     * @param {function(string, DeleteGlobalAcceleratorResponse):void} cb
     * @public
     */
    DeleteGlobalAccelerator(req, cb) {
        let resp = new DeleteGlobalAcceleratorResponse();
        this.request("DeleteGlobalAccelerator", req, resp, cb);
    }

    /**
     * This API is used to delete a GA log task.
     * @param {DeleteGlobalAcceleratorAccessLogRequest} req
     * @param {function(string, DeleteGlobalAcceleratorAccessLogResponse):void} cb
     * @public
     */
    DeleteGlobalAcceleratorAccessLog(req, cb) {
        let resp = new DeleteGlobalAcceleratorAccessLogResponse();
        this.request("DeleteGlobalAcceleratorAccessLog", req, resp, cb);
    }

    /**
     * This API is used to delete a listener.
     * @param {DeleteListenerRequest} req
     * @param {function(string, DeleteListenerResponse):void} cb
     * @public
     */
    DeleteListener(req, cb) {
        let resp = new DeleteListenerResponse();
        this.request("DeleteListener", req, resp, cb);
    }

    /**
     * Delete a layer-7 forwarding policy.
     * @param {DeleteForwardingPolicyRequest} req
     * @param {function(string, DeleteForwardingPolicyResponse):void} cb
     * @public
     */
    DeleteForwardingPolicy(req, cb) {
        let resp = new DeleteForwardingPolicyResponse();
        this.request("DeleteForwardingPolicy", req, resp, cb);
    }

    /**
     * Querying Cross-Border Bills
     * @param {DescribeCrossBorderSettlementRequest} req
     * @param {function(string, DescribeCrossBorderSettlementResponse):void} cb
     * @public
     */
    DescribeCrossBorderSettlement(req, cb) {
        let resp = new DescribeCrossBorderSettlementResponse();
        this.request("DescribeCrossBorderSettlement", req, resp, cb);
    }

    /**
     * View ACL rules
     * @param {DescribeGlobalAcceleratorAclRulesRequest} req
     * @param {function(string, DescribeGlobalAcceleratorAclRulesResponse):void} cb
     * @public
     */
    DescribeGlobalAcceleratorAclRules(req, cb) {
        let resp = new DescribeGlobalAcceleratorAclRulesResponse();
        this.request("DescribeGlobalAcceleratorAclRules", req, resp, cb);
    }

    /**
     * Delete ACL rule
     * @param {DeleteGlobalAcceleratorAclRuleRequest} req
     * @param {function(string, DeleteGlobalAcceleratorAclRuleResponse):void} cb
     * @public
     */
    DeleteGlobalAcceleratorAclRule(req, cb) {
        let resp = new DeleteGlobalAcceleratorAclRuleResponse();
        this.request("DeleteGlobalAcceleratorAclRule", req, resp, cb);
    }

    /**
     * Modify a listener
     * @param {ModifyListenerRequest} req
     * @param {function(string, ModifyListenerResponse):void} cb
     * @public
     */
    ModifyListener(req, cb) {
        let resp = new ModifyListenerResponse();
        this.request("ModifyListener", req, resp, cb);
    }

    /**
     * Queries selectable acceleration regions.
     * @param {DescribeAccelerateRegionsRequest} req
     * @param {function(string, DescribeAccelerateRegionsResponse):void} cb
     * @public
     */
    DescribeAccelerateRegions(req, cb) {
        let resp = new DescribeAccelerateRegionsResponse();
        this.request("DescribeAccelerateRegions", req, resp, cb);
    }

    /**
     * Modify the status of an access control policy
     * @param {ModifyGlobalAcceleratorAclPolicyRequest} req
     * @param {function(string, ModifyGlobalAcceleratorAclPolicyResponse):void} cb
     * @public
     */
    ModifyGlobalAcceleratorAclPolicy(req, cb) {
        let resp = new ModifyGlobalAcceleratorAclPolicyResponse();
        this.request("ModifyGlobalAcceleratorAclPolicy", req, resp, cb);
    }

    /**
     * Create an ACL rule
     * @param {CreateGlobalAcceleratorAclRuleRequest} req
     * @param {function(string, CreateGlobalAcceleratorAclRuleResponse):void} cb
     * @public
     */
    CreateGlobalAcceleratorAclRule(req, cb) {
        let resp = new CreateGlobalAcceleratorAclRuleResponse();
        this.request("CreateGlobalAcceleratorAclRule", req, resp, cb);
    }

    /**
     * Modify GA access logs
     * @param {ModifyGlobalAcceleratorAccessLogRequest} req
     * @param {function(string, ModifyGlobalAcceleratorAccessLogResponse):void} cb
     * @public
     */
    ModifyGlobalAcceleratorAccessLog(req, cb) {
        let resp = new ModifyGlobalAcceleratorAccessLogResponse();
        this.request("ModifyGlobalAcceleratorAccessLog", req, resp, cb);
    }

    /**
     * This API is used to modify a Layer 7 forwarding rule.
     * @param {ModifyForwardingRuleRequest} req
     * @param {function(string, ModifyForwardingRuleResponse):void} cb
     * @public
     */
    ModifyForwardingRule(req, cb) {
        let resp = new ModifyForwardingRuleResponse();
        this.request("ModifyForwardingRule", req, resp, cb);
    }

    /**
     * Query a terminal node group.
     * @param {DescribeEndpointGroupsRequest} req
     * @param {function(string, DescribeEndpointGroupsResponse):void} cb
     * @public
     */
    DescribeEndpointGroups(req, cb) {
        let resp = new DescribeEndpointGroupsResponse();
        this.request("DescribeEndpointGroups", req, resp, cb);
    }

    /**
     * Query asynchronous task result
     * @param {DescribeTaskResultRequest} req
     * @param {function(string, DescribeTaskResultResponse):void} cb
     * @public
     */
    DescribeTaskResult(req, cb) {
        let resp = new DescribeTaskResultResponse();
        this.request("DescribeTaskResult", req, resp, cb);
    }

    /**
     * Create access control policy
     * @param {CreateGlobalAcceleratorAclPolicyRequest} req
     * @param {function(string, CreateGlobalAcceleratorAclPolicyResponse):void} cb
     * @public
     */
    CreateGlobalAcceleratorAclPolicy(req, cb) {
        let resp = new CreateGlobalAcceleratorAclPolicyResponse();
        this.request("CreateGlobalAcceleratorAclPolicy", req, resp, cb);
    }

    /**
     * View access log reporting parameters
     * @param {DescribeAccessLogParamRequest} req
     * @param {function(string, DescribeAccessLogParamResponse):void} cb
     * @public
     */
    DescribeAccessLogParam(req, cb) {
        let resp = new DescribeAccessLogParamResponse();
        this.request("DescribeAccessLogParam", req, resp, cb);
    }

    /**
     * This API is used to query listeners.
     * @param {DescribeListenersRequest} req
     * @param {function(string, DescribeListenersResponse):void} cb
     * @public
     */
    DescribeListeners(req, cb) {
        let resp = new DescribeListenersResponse();
        this.request("DescribeListeners", req, resp, cb);
    }

    /**
     * Modify a global acceleration instance
     * @param {DescribeGlobalAcceleratorsRequest} req
     * @param {function(string, DescribeGlobalAcceleratorsResponse):void} cb
     * @public
     */
    DescribeGlobalAccelerators(req, cb) {
        let resp = new DescribeGlobalAcceleratorsResponse();
        this.request("DescribeGlobalAccelerators", req, resp, cb);
    }

    /**
     * Delete an acceleration region
     * @param {DeleteAccelerateAreasRequest} req
     * @param {function(string, DeleteAccelerateAreasResponse):void} cb
     * @public
     */
    DeleteAccelerateAreas(req, cb) {
        let resp = new DeleteAccelerateAreasResponse();
        this.request("DeleteAccelerateAreas", req, resp, cb);
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
     * This API is used to create an acceleration region.
     * @param {CreateAccelerateAreasRequest} req
     * @param {function(string, CreateAccelerateAreasResponse):void} cb
     * @public
     */
    CreateAccelerateAreas(req, cb) {
        let resp = new CreateAccelerateAreasResponse();
        this.request("CreateAccelerateAreas", req, resp, cb);
    }

    /**
     * Delete the extension certificate.
     * @param {DeleteListenerAdditionalCertRequest} req
     * @param {function(string, DeleteListenerAdditionalCertResponse):void} cb
     * @public
     */
    DeleteListenerAdditionalCert(req, cb) {
        let resp = new DeleteListenerAdditionalCertResponse();
        this.request("DeleteListenerAdditionalCert", req, resp, cb);
    }

    /**
     * Add an extension certificate.
     * @param {CreateListenerAdditionalCertRequest} req
     * @param {function(string, CreateListenerAdditionalCertResponse):void} cb
     * @public
     */
    CreateListenerAdditionalCert(req, cb) {
        let resp = new CreateListenerAdditionalCertResponse();
        this.request("CreateListenerAdditionalCert", req, resp, cb);
    }

    /**
     * This API is used to modify a terminal node group.
     * @param {ModifyEndpointGroupRequest} req
     * @param {function(string, ModifyEndpointGroupResponse):void} cb
     * @public
     */
    ModifyEndpointGroup(req, cb) {
        let resp = new ModifyEndpointGroupResponse();
        this.request("ModifyEndpointGroup", req, resp, cb);
    }

    /**
     * Modify ACL rules
     * @param {ModifyGlobalAcceleratorAclRuleRequest} req
     * @param {function(string, ModifyGlobalAcceleratorAclRuleResponse):void} cb
     * @public
     */
    ModifyGlobalAcceleratorAclRule(req, cb) {
        let resp = new ModifyGlobalAcceleratorAclRuleResponse();
        this.request("ModifyGlobalAcceleratorAclRule", req, resp, cb);
    }

    /**
     * Create a GA access log
     * @param {CreateGlobalAcceleratorAccessLogRequest} req
     * @param {function(string, CreateGlobalAcceleratorAccessLogResponse):void} cb
     * @public
     */
    CreateGlobalAcceleratorAccessLog(req, cb) {
        let resp = new CreateGlobalAcceleratorAccessLogResponse();
        this.request("CreateGlobalAcceleratorAccessLog", req, resp, cb);
    }

    /**
     * View the access control policy
     * @param {DescribeGlobalAcceleratorAclPoliciesRequest} req
     * @param {function(string, DescribeGlobalAcceleratorAclPoliciesResponse):void} cb
     * @public
     */
    DescribeGlobalAcceleratorAclPolicies(req, cb) {
        let resp = new DescribeGlobalAcceleratorAclPoliciesResponse();
        this.request("DescribeGlobalAcceleratorAclPolicies", req, resp, cb);
    }

    /**
     * Delete a Layer 7 forwarding rule
     * @param {DeleteForwardingRuleRequest} req
     * @param {function(string, DeleteForwardingRuleResponse):void} cb
     * @public
     */
    DeleteForwardingRule(req, cb) {
        let resp = new DeleteForwardingRuleResponse();
        this.request("DeleteForwardingRule", req, resp, cb);
    }

    /**
     * Create a Layer 7 forwarding rule
     * @param {CreateForwardingRuleRequest} req
     * @param {function(string, CreateForwardingRuleResponse):void} cb
     * @public
     */
    CreateForwardingRule(req, cb) {
        let resp = new CreateForwardingRuleResponse();
        this.request("CreateForwardingRule", req, resp, cb);
    }

    /**
     * Modify the status of a log task
     * @param {ModifyAccessLogStatusRequest} req
     * @param {function(string, ModifyAccessLogStatusResponse):void} cb
     * @public
     */
    ModifyAccessLogStatus(req, cb) {
        let resp = new ModifyAccessLogStatusResponse();
        this.request("ModifyAccessLogStatus", req, resp, cb);
    }

    /**
     * Query log tasks
     * @param {DescribeGlobalAcceleratorAccessLogRequest} req
     * @param {function(string, DescribeGlobalAcceleratorAccessLogResponse):void} cb
     * @public
     */
    DescribeGlobalAcceleratorAccessLog(req, cb) {
        let resp = new DescribeGlobalAcceleratorAccessLogResponse();
        this.request("DescribeGlobalAcceleratorAccessLog", req, resp, cb);
    }

    /**
     * Delete access control policy
     * @param {DeleteGlobalAcceleratorAclPolicyRequest} req
     * @param {function(string, DeleteGlobalAcceleratorAclPolicyResponse):void} cb
     * @public
     */
    DeleteGlobalAcceleratorAclPolicy(req, cb) {
        let resp = new DeleteGlobalAcceleratorAclPolicyResponse();
        this.request("DeleteGlobalAcceleratorAclPolicy", req, resp, cb);
    }

    /**
     * This API is used to create a global acceleration instance.
     * @param {CreateGlobalAcceleratorRequest} req
     * @param {function(string, CreateGlobalAcceleratorResponse):void} cb
     * @public
     */
    CreateGlobalAccelerator(req, cb) {
        let resp = new CreateGlobalAcceleratorResponse();
        this.request("CreateGlobalAccelerator", req, resp, cb);
    }

    /**
     * Replace the extension certificate.
     * @param {ReplaceListenerAdditionalCertRequest} req
     * @param {function(string, ReplaceListenerAdditionalCertResponse):void} cb
     * @public
     */
    ReplaceListenerAdditionalCert(req, cb) {
        let resp = new ReplaceListenerAdditionalCertResponse();
        this.request("ReplaceListenerAdditionalCert", req, resp, cb);
    }

    /**
     * Modify acceleration region
     * @param {ModifyAccelerateAreasRequest} req
     * @param {function(string, ModifyAccelerateAreasResponse):void} cb
     * @public
     */
    ModifyAccelerateAreas(req, cb) {
        let resp = new ModifyAccelerateAreasResponse();
        this.request("ModifyAccelerateAreas", req, resp, cb);
    }

    /**
     * Modify a global acceleration instance
     * @param {ModifyGlobalAcceleratorRequest} req
     * @param {function(string, ModifyGlobalAcceleratorResponse):void} cb
     * @public
     */
    ModifyGlobalAccelerator(req, cb) {
        let resp = new ModifyGlobalAcceleratorResponse();
        this.request("ModifyGlobalAccelerator", req, resp, cb);
    }

    /**
     * View a Layer 7 forwarding rule
     * @param {DescribeForwardingRuleRequest} req
     * @param {function(string, DescribeForwardingRuleResponse):void} cb
     * @public
     */
    DescribeForwardingRule(req, cb) {
        let resp = new DescribeForwardingRuleResponse();
        this.request("DescribeForwardingRule", req, resp, cb);
    }

    /**
     * Delete a terminal node group.
     * @param {DeleteEndpointGroupsRequest} req
     * @param {function(string, DeleteEndpointGroupsResponse):void} cb
     * @public
     */
    DeleteEndpointGroups(req, cb) {
        let resp = new DeleteEndpointGroupsResponse();
        this.request("DeleteEndpointGroups", req, resp, cb);
    }

    /**
     * View a layer-7 forwarding policy
     * @param {DescribeForwardingPolicyRequest} req
     * @param {function(string, DescribeForwardingPolicyResponse):void} cb
     * @public
     */
    DescribeForwardingPolicy(req, cb) {
        let resp = new DescribeForwardingPolicyResponse();
        this.request("DescribeForwardingPolicy", req, resp, cb);
    }


}
module.exports = Ga2Client;
