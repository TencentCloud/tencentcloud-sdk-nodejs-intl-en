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
const ResourceListInfo = models.ResourceListInfo;
const ListAggregateDiscoveredResourcesRequest = models.ListAggregateDiscoveredResourcesRequest;
const AddAggregateCompliancePackResponse = models.AddAggregateCompliancePackResponse;
const CloseAggregateConfigRuleResponse = models.CloseAggregateConfigRuleResponse;
const AddCompliancePackRequest = models.AddCompliancePackRequest;
const ListRemediationsRequest = models.ListRemediationsRequest;
const DescribeAggregatorRequest = models.DescribeAggregatorRequest;
const PutEvaluationsResponse = models.PutEvaluationsResponse;
const UpdateAggregatorResponse = models.UpdateAggregatorResponse;
const OpenAggregateConfigRuleResponse = models.OpenAggregateConfigRuleResponse;
const AddAggregateCompliancePackRequest = models.AddAggregateCompliancePackRequest;
const DescribeAggregateCompliancePackResponse = models.DescribeAggregateCompliancePackResponse;
const StartAggregateConfigRuleEvaluationResponse = models.StartAggregateConfigRuleEvaluationResponse;
const CloseConfigRecorderRequest = models.CloseConfigRecorderRequest;
const DescribeSystemRuleRequest = models.DescribeSystemRuleRequest;
const ListConfigRulesResponse = models.ListConfigRulesResponse;
const SystemCompliancePack = models.SystemCompliancePack;
const DeleteConfigRuleResponse = models.DeleteConfigRuleResponse;
const Annotation = models.Annotation;
const UpdateRemediationResponse = models.UpdateRemediationResponse;
const ListSystemRulesResponse = models.ListSystemRulesResponse;
const CreateAggregatorResponse = models.CreateAggregatorResponse;
const DeleteAlarmPolicyRequest = models.DeleteAlarmPolicyRequest;
const ListAggregateCompliancePacksResponse = models.ListAggregateCompliancePacksResponse;
const ListSystemCompliancePacksResponse = models.ListSystemCompliancePacksResponse;
const Remediation = models.Remediation;
const ListAggregateConfigRuleEvaluationResultsResponse = models.ListAggregateConfigRuleEvaluationResultsResponse;
const CloseAggregateConfigRuleRequest = models.CloseAggregateConfigRuleRequest;
const DescribeAggregateDiscoveredResourceResponse = models.DescribeAggregateDiscoveredResourceResponse;
const AggregatorAccount = models.AggregatorAccount;
const InputParameterForManage = models.InputParameterForManage;
const ListConfigRulesRequest = models.ListConfigRulesRequest;
const DescribeAggregateConfigRuleRequest = models.DescribeAggregateConfigRuleRequest;
const Control = models.Control;
const ListAggregateConfigRulesRequest = models.ListAggregateConfigRulesRequest;
const ListConfigRuleEvaluationResultsResponse = models.ListConfigRuleEvaluationResultsResponse;
const UpdateAlarmPolicyResponse = models.UpdateAlarmPolicyResponse;
const DescribeCompliancePackRequest = models.DescribeCompliancePackRequest;
const ListDiscoveredResourcesResponse = models.ListDiscoveredResourcesResponse;
const ListConfigRuleResourceEvaluationResultsRequest = models.ListConfigRuleResourceEvaluationResultsRequest;
const UpdateAggregateCompliancePackStatusResponse = models.UpdateAggregateCompliancePackStatusResponse;
const Aggregator = models.Aggregator;
const DescribeAggregateConfigDeliverResponse = models.DescribeAggregateConfigDeliverResponse;
const OpenConfigRecorderResponse = models.OpenConfigRecorderResponse;
const UpdateConfigDeliverResponse = models.UpdateConfigDeliverResponse;
const DescribeConfigRuleResponse = models.DescribeConfigRuleResponse;
const UpdateCompliancePackRequest = models.UpdateCompliancePackRequest;
const ListCompliancePacksRequest = models.ListCompliancePacksRequest;
const UpdateCompliancePackStatusResponse = models.UpdateCompliancePackStatusResponse;
const UpdateAggregateCompliancePackStatusRequest = models.UpdateAggregateCompliancePackStatusRequest;
const ListAggregateConfigRuleResourceEvaluationResultsResponse = models.ListAggregateConfigRuleResourceEvaluationResultsResponse;
const UpdateConfigRecorderResponse = models.UpdateConfigRecorderResponse;
const ListAlarmPolicyRequest = models.ListAlarmPolicyRequest;
const DescribeSystemCompliancePackResponse = models.DescribeSystemCompliancePackResponse;
const CompliancePackRules = models.CompliancePackRules;
const ComplianceConfigRule = models.ComplianceConfigRule;
const OpenAggregateConfigRuleRequest = models.OpenAggregateConfigRuleRequest;
const ListSystemCompliancePacksRequest = models.ListSystemCompliancePacksRequest;
const ListAlarmPolicyResponse = models.ListAlarmPolicyResponse;
const ListAggregatorsResponse = models.ListAggregatorsResponse;
const ListConfigRuleEvaluationResultsRequest = models.ListConfigRuleEvaluationResultsRequest;
const DeleteAggregateConfigRuleResponse = models.DeleteAggregateConfigRuleResponse;
const CreateAggregatorRequest = models.CreateAggregatorRequest;
const DescribeConfigRecorderResponse = models.DescribeConfigRecorderResponse;
const UpdateAggregateCompliancePackRequest = models.UpdateAggregateCompliancePackRequest;
const CreateRemediationRequest = models.CreateRemediationRequest;
const AddCompliancePackResponse = models.AddCompliancePackResponse;
const TriggerType = models.TriggerType;
const ConfigResource = models.ConfigResource;
const DescribeAggregateConfigDeliverRequest = models.DescribeAggregateConfigDeliverRequest;
const ListAggregatorsRequest = models.ListAggregatorsRequest;
const UpdateAggregateConfigDeliverRequest = models.UpdateAggregateConfigDeliverRequest;
const PutEvaluationsRequest = models.PutEvaluationsRequest;
const UpdateConfigRuleRequest = models.UpdateConfigRuleRequest;
const UserConfigResource = models.UserConfigResource;
const DetachConfigRuleToCompliancePackRequest = models.DetachConfigRuleToCompliancePackRequest;
const UpdateRemediationRequest = models.UpdateRemediationRequest;
const AggregateEvaluationResult = models.AggregateEvaluationResult;
const SystemConfigRule = models.SystemConfigRule;
const DetachAggregateConfigRuleToCompliancePackResponse = models.DetachAggregateConfigRuleToCompliancePackResponse;
const DescribeAggregateDiscoveredResourceRequest = models.DescribeAggregateDiscoveredResourceRequest;
const AddConfigRuleResponse = models.AddConfigRuleResponse;
const SourceConditionForManage = models.SourceConditionForManage;
const AddConfigRuleRequest = models.AddConfigRuleRequest;
const ListCompliancePacksResponse = models.ListCompliancePacksResponse;
const DescribeConfigDeliverResponse = models.DescribeConfigDeliverResponse;
const DetachConfigRuleToCompliancePackResponse = models.DetachConfigRuleToCompliancePackResponse;
const UpdateAlarmPolicyRequest = models.UpdateAlarmPolicyRequest;
const CloseConfigRuleRequest = models.CloseConfigRuleRequest;
const DescribeSystemCompliancePackRequest = models.DescribeSystemCompliancePackRequest;
const Evaluation = models.Evaluation;
const AddAggregateConfigRuleResponse = models.AddAggregateConfigRuleResponse;
const OpenConfigRuleResponse = models.OpenConfigRuleResponse;
const DescribeDiscoveredResourceResponse = models.DescribeDiscoveredResourceResponse;
const RemediationExecutions = models.RemediationExecutions;
const DescribeConfigDeliverRequest = models.DescribeConfigDeliverRequest;
const UpdateConfigRuleResponse = models.UpdateConfigRuleResponse;
const DetachAggregateConfigRuleToCompliancePackRequest = models.DetachAggregateConfigRuleToCompliancePackRequest;
const ListAggregateCompliancePacksRequest = models.ListAggregateCompliancePacksRequest;
const ListResourceTypesResponse = models.ListResourceTypesResponse;
const DeleteRemediationsResponse = models.DeleteRemediationsResponse;
const UpdateAggregatorRequest = models.UpdateAggregatorRequest;
const DeleteConfigRuleRequest = models.DeleteConfigRuleRequest;
const Filter = models.Filter;
const ListAggregateConfigRuleEvaluationResultsRequest = models.ListAggregateConfigRuleEvaluationResultsRequest;
const UpdateCompliancePackStatusRequest = models.UpdateCompliancePackStatusRequest;
const DeleteAggregateConfigRuleRequest = models.DeleteAggregateConfigRuleRequest;
const DeleteCompliancePackResponse = models.DeleteCompliancePackResponse;
const CreateRemediationResponse = models.CreateRemediationResponse;
const UpdateAggregateConfigDeliverResponse = models.UpdateAggregateConfigDeliverResponse;
const UpdateAggregateCompliancePackResponse = models.UpdateAggregateCompliancePackResponse;
const CompliancePackRuleForManage = models.CompliancePackRuleForManage;
const ListConfigRuleResourceEvaluationResultsResponse = models.ListConfigRuleResourceEvaluationResultsResponse;
const DeleteAggregateCompliancePackRequest = models.DeleteAggregateCompliancePackRequest;
const ListSystemRulesRequest = models.ListSystemRulesRequest;
const AggregateResourceInfo = models.AggregateResourceInfo;
const DescribeAggregatorResponse = models.DescribeAggregatorResponse;
const AddAlarmPolicyResponse = models.AddAlarmPolicyResponse;
const EvaluationResult = models.EvaluationResult;
const ConfigCompliancePack = models.ConfigCompliancePack;
const DescribeAggregateConfigRuleResponse = models.DescribeAggregateConfigRuleResponse;
const StartAggregateConfigRuleEvaluationRequest = models.StartAggregateConfigRuleEvaluationRequest;
const ListRemediationExecutionsRequest = models.ListRemediationExecutionsRequest;
const DeleteAggregatorsResponse = models.DeleteAggregatorsResponse;
const CompliancePackRule = models.CompliancePackRule;
const DescribeDiscoveredResourceRequest = models.DescribeDiscoveredResourceRequest;
const ListRemediationExecutionsResponse = models.ListRemediationExecutionsResponse;
const CloseConfigRecorderResponse = models.CloseConfigRecorderResponse;
const DescribeConfigRecorderRequest = models.DescribeConfigRecorderRequest;
const StartConfigRuleEvaluationRequest = models.StartConfigRuleEvaluationRequest;
const DescribeConfigRuleRequest = models.DescribeConfigRuleRequest;
const UpdateConfigDeliverRequest = models.UpdateConfigDeliverRequest;
const ListDiscoveredResourcesRequest = models.ListDiscoveredResourcesRequest;
const AddAlarmPolicyRequest = models.AddAlarmPolicyRequest;
const ConfigRule = models.ConfigRule;
const Tag = models.Tag;
const ListResourceTypesRequest = models.ListResourceTypesRequest;
const UpdateConfigRecorderRequest = models.UpdateConfigRecorderRequest;
const UpdateCompliancePackResponse = models.UpdateCompliancePackResponse;
const ListAggregateConfigRulesResponse = models.ListAggregateConfigRulesResponse;
const StartRemediationResponse = models.StartRemediationResponse;
const DeleteAggregateCompliancePackResponse = models.DeleteAggregateCompliancePackResponse;
const DescribeCompliancePackResponse = models.DescribeCompliancePackResponse;
const DescribeAggregateCompliancePackRequest = models.DescribeAggregateCompliancePackRequest;
const OpenConfigRuleRequest = models.OpenConfigRuleRequest;
const StartRemediationRequest = models.StartRemediationRequest;
const CloseConfigRuleResponse = models.CloseConfigRuleResponse;
const ConfigRuleResourceEvaluationResult = models.ConfigRuleResourceEvaluationResult;
const DescribeSystemRuleResponse = models.DescribeSystemRuleResponse;
const AlarmPolicyRsp = models.AlarmPolicyRsp;
const UpdateAggregateConfigRuleRequest = models.UpdateAggregateConfigRuleRequest;
const OpenConfigRecorderRequest = models.OpenConfigRecorderRequest;
const DeleteAlarmPolicyResponse = models.DeleteAlarmPolicyResponse;
const AddAggregateConfigRuleRequest = models.AddAggregateConfigRuleRequest;
const DeleteCompliancePackRequest = models.DeleteCompliancePackRequest;
const StartConfigRuleEvaluationResponse = models.StartConfigRuleEvaluationResponse;
const ListAggregateDiscoveredResourcesResponse = models.ListAggregateDiscoveredResourcesResponse;
const UpdateAggregateConfigRuleResponse = models.UpdateAggregateConfigRuleResponse;
const InputParameter = models.InputParameter;
const ListRemediationsResponse = models.ListRemediationsResponse;
const DeleteAggregatorsRequest = models.DeleteAggregatorsRequest;
const ListAggregateConfigRuleResourceEvaluationResultsRequest = models.ListAggregateConfigRuleResourceEvaluationResultsRequest;
const DeleteRemediationsRequest = models.DeleteRemediationsRequest;


/**
 * config client
 * @class
 */
class ConfigClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("config.intl.tencentcloudapi.com", "2022-08-02", credential, region, profile);
    }
    
    /**
     * This API is used to create rules.
     * @param {AddConfigRuleRequest} req
     * @param {function(string, AddConfigRuleResponse):void} cb
     * @public
     */
    AddConfigRule(req, cb) {
        let resp = new AddConfigRuleResponse();
        this.request("AddConfigRule", req, resp, cb);
    }

    /**
     * This API is used to query compliance package details.
     * @param {DescribeCompliancePackRequest} req
     * @param {function(string, DescribeCompliancePackResponse):void} cb
     * @public
     */
    DescribeCompliancePack(req, cb) {
        let resp = new DescribeCompliancePackResponse();
        this.request("DescribeCompliancePack", req, resp, cb);
    }

    /**
     * This API is used to trigger evaluation for account groups.
     * @param {StartAggregateConfigRuleEvaluationRequest} req
     * @param {function(string, StartAggregateConfigRuleEvaluationResponse):void} cb
     * @public
     */
    StartAggregateConfigRuleEvaluation(req, cb) {
        let resp = new StartAggregateConfigRuleEvaluationResponse();
        this.request("StartAggregateConfigRuleEvaluation", req, resp, cb);
    }

    /**
     * This API is used to edit delivery settings for account groups.
     * @param {UpdateAggregateConfigDeliverRequest} req
     * @param {function(string, UpdateAggregateConfigDeliverResponse):void} cb
     * @public
     */
    UpdateAggregateConfigDeliver(req, cb) {
        let resp = new UpdateAggregateConfigDeliverResponse();
        this.request("UpdateAggregateConfigDeliver", req, resp, cb);
    }

    /**
     * Obtaining the Resource List
     * @param {ListDiscoveredResourcesRequest} req
     * @param {function(string, ListDiscoveredResourcesResponse):void} cb
     * @public
     */
    ListDiscoveredResources(req, cb) {
        let resp = new ListDiscoveredResourcesResponse();
        this.request("ListDiscoveredResources", req, resp, cb);
    }

    /**
     * Account group list.
     * @param {ListAggregatorsRequest} req
     * @param {function(string, ListAggregatorsResponse):void} cb
     * @public
     */
    ListAggregators(req, cb) {
        let resp = new ListAggregatorsResponse();
        this.request("ListAggregators", req, resp, cb);
    }

    /**
     * This example shows you how to query the rule list.
     * @param {ListConfigRulesRequest} req
     * @param {function(string, ListConfigRulesResponse):void} cb
     * @public
     */
    ListConfigRules(req, cb) {
        let resp = new ListConfigRulesResponse();
        this.request("ListConfigRules", req, resp, cb);
    }

    /**
     * Enable rules
     * @param {OpenConfigRuleRequest} req
     * @param {function(string, OpenConfigRuleResponse):void} cb
     * @public
     */
    OpenConfigRule(req, cb) {
        let resp = new OpenConfigRuleResponse();
        this.request("OpenConfigRule", req, resp, cb);
    }

    /**
     * This API is used to create account groups.
     * @param {CreateAggregatorRequest} req
     * @param {function(string, CreateAggregatorResponse):void} cb
     * @public
     */
    CreateAggregator(req, cb) {
        let resp = new CreateAggregatorResponse();
        this.request("CreateAggregator", req, resp, cb);
    }

    /**
     * This API is used to manage resource monitoring - enabling monitoring.
     * @param {OpenConfigRecorderRequest} req
     * @param {function(string, OpenConfigRecorderResponse):void} cb
     * @public
     */
    OpenConfigRecorder(req, cb) {
        let resp = new OpenConfigRecorderResponse();
        this.request("OpenConfigRecorder", req, resp, cb);
    }

    /**
     * This API is used to query the list of resource evaluation results under configuration rules.
     * @param {ListConfigRuleResourceEvaluationResultsRequest} req
     * @param {function(string, ListConfigRuleResourceEvaluationResultsResponse):void} cb
     * @public
     */
    ListConfigRuleResourceEvaluationResults(req, cb) {
        let resp = new ListConfigRuleResourceEvaluationResultsResponse();
        this.request("ListConfigRuleResourceEvaluationResults", req, resp, cb);
    }

    /**
     * This API is used to trigger evaluations.
     * @param {StartConfigRuleEvaluationRequest} req
     * @param {function(string, StartConfigRuleEvaluationResponse):void} cb
     * @public
     */
    StartConfigRuleEvaluation(req, cb) {
        let resp = new StartConfigRuleEvaluationResponse();
        this.request("StartConfigRuleEvaluation", req, resp, cb);
    }

    /**
     * Deletes alarm rules
     * @param {DeleteAlarmPolicyRequest} req
     * @param {function(string, DeleteAlarmPolicyResponse):void} cb
     * @public
     */
    DeleteAlarmPolicy(req, cb) {
        let resp = new DeleteAlarmPolicyResponse();
        this.request("DeleteAlarmPolicy", req, resp, cb);
    }

    /**
     * This API is used to create rules for account groups.
     * @param {AddAggregateConfigRuleRequest} req
     * @param {function(string, AddAggregateConfigRuleResponse):void} cb
     * @public
     */
    AddAggregateConfigRule(req, cb) {
        let resp = new AddAggregateConfigRuleResponse();
        this.request("AddAggregateConfigRule", req, resp, cb);
    }

    /**
     * This API is used to query the list of resources for account groups.
     * @param {ListAggregateDiscoveredResourcesRequest} req
     * @param {function(string, ListAggregateDiscoveredResourcesResponse):void} cb
     * @public
     */
    ListAggregateDiscoveredResources(req, cb) {
        let resp = new ListAggregateDiscoveredResourcesResponse();
        this.request("ListAggregateDiscoveredResources", req, resp, cb);
    }

    /**
     * This API is used to add rule remediation settings.
     * @param {CreateRemediationRequest} req
     * @param {function(string, CreateRemediationResponse):void} cb
     * @public
     */
    CreateRemediation(req, cb) {
        let resp = new CreateRemediationResponse();
        this.request("CreateRemediation", req, resp, cb);
    }

    /**
     * This API is used to query the preset rule list.
     * @param {ListSystemRulesRequest} req
     * @param {function(string, ListSystemRulesResponse):void} cb
     * @public
     */
    ListSystemRules(req, cb) {
        let resp = new ListSystemRulesResponse();
        this.request("ListSystemRules", req, resp, cb);
    }

    /**
     * Delete a rule
     * @param {DeleteConfigRuleRequest} req
     * @param {function(string, DeleteConfigRuleResponse):void} cb
     * @public
     */
    DeleteConfigRule(req, cb) {
        let resp = new DeleteConfigRuleResponse();
        this.request("DeleteConfigRule", req, resp, cb);
    }

    /**
     * This API is used to query the resource type list.
     * @param {ListResourceTypesRequest} req
     * @param {function(string, ListResourceTypesResponse):void} cb
     * @public
     */
    ListResourceTypes(req, cb) {
        let resp = new ListResourceTypesResponse();
        this.request("ListResourceTypes", req, resp, cb);
    }

    /**
     * This API is used to add alarm monitoring rules.
     * @param {UpdateRemediationRequest} req
     * @param {function(string, UpdateRemediationResponse):void} cb
     * @public
     */
    UpdateRemediation(req, cb) {
        let resp = new UpdateRemediationResponse();
        this.request("UpdateRemediation", req, resp, cb);
    }

    /**
     * Edit an account group.
     * @param {UpdateAggregatorRequest} req
     * @param {function(string, UpdateAggregatorResponse):void} cb
     * @public
     */
    UpdateAggregator(req, cb) {
        let resp = new UpdateAggregatorResponse();
        this.request("UpdateAggregator", req, resp, cb);
    }

    /**
     * This API is used to edit a conformance pack.
     * @param {UpdateCompliancePackRequest} req
     * @param {function(string, UpdateCompliancePackResponse):void} cb
     * @public
     */
    UpdateCompliancePack(req, cb) {
        let resp = new UpdateCompliancePackResponse();
        this.request("UpdateCompliancePack", req, resp, cb);
    }

    /**
     * This API is used to manually execute rule repairs.
     * @param {StartRemediationRequest} req
     * @param {function(string, StartRemediationResponse):void} cb
     * @public
     */
    StartRemediation(req, cb) {
        let resp = new StartRemediationResponse();
        this.request("StartRemediation", req, resp, cb);
    }

    /**
     * This API is used to query delivery setting details.
     * @param {DescribeConfigDeliverRequest} req
     * @param {function(string, DescribeConfigDeliverResponse):void} cb
     * @public
     */
    DescribeConfigDeliver(req, cb) {
        let resp = new DescribeConfigDeliverResponse();
        this.request("DescribeConfigDeliver", req, resp, cb);
    }

    /**
     * This API is used to list remediation settings.
     * @param {ListRemediationsRequest} req
     * @param {function(string, ListRemediationsResponse):void} cb
     * @public
     */
    ListRemediations(req, cb) {
        let resp = new ListRemediationsResponse();
        this.request("ListRemediations", req, resp, cb);
    }

    /**
     * This API is used to list resource evaluation results of compliance rules in account groups.
     * @param {ListAggregateConfigRuleResourceEvaluationResultsRequest} req
     * @param {function(string, ListAggregateConfigRuleResourceEvaluationResultsResponse):void} cb
     * @public
     */
    ListAggregateConfigRuleResourceEvaluationResults(req, cb) {
        let resp = new ListAggregateConfigRuleResourceEvaluationResultsResponse();
        this.request("ListAggregateConfigRuleResourceEvaluationResults", req, resp, cb);
    }

    /**
     * This API is used to delete compliance packages for account groups.
     * @param {DeleteAggregateCompliancePackRequest} req
     * @param {function(string, DeleteAggregateCompliancePackResponse):void} cb
     * @public
     */
    DeleteAggregateCompliancePack(req, cb) {
        let resp = new DeleteAggregateCompliancePackResponse();
        this.request("DeleteAggregateCompliancePack", req, resp, cb);
    }

    /**
     * This API is used to query the list of compliance packages for account groups.
     * @param {ListAggregateCompliancePacksRequest} req
     * @param {function(string, ListAggregateCompliancePacksResponse):void} cb
     * @public
     */
    ListAggregateCompliancePacks(req, cb) {
        let resp = new ListAggregateCompliancePacksResponse();
        this.request("ListAggregateCompliancePacks", req, resp, cb);
    }

    /**
     * This API is used to query rule details for account groups.
     * @param {DescribeAggregateConfigRuleRequest} req
     * @param {function(string, DescribeAggregateConfigRuleResponse):void} cb
     * @public
     */
    DescribeAggregateConfigRule(req, cb) {
        let resp = new DescribeAggregateConfigRuleResponse();
        this.request("DescribeAggregateConfigRule", req, resp, cb);
    }

    /**
     * This API is used to query monitoring details.
     * @param {DescribeConfigRecorderRequest} req
     * @param {function(string, DescribeConfigRecorderResponse):void} cb
     * @public
     */
    DescribeConfigRecorder(req, cb) {
        let resp = new DescribeConfigRecorderResponse();
        this.request("DescribeConfigRecorder", req, resp, cb);
    }

    /**
     * Alarm rule list
     * @param {ListAlarmPolicyRequest} req
     * @param {function(string, ListAlarmPolicyResponse):void} cb
     * @public
     */
    ListAlarmPolicy(req, cb) {
        let resp = new ListAlarmPolicyResponse();
        this.request("ListAlarmPolicy", req, resp, cb);
    }

    /**
     * This API is used to edit rules for account groups.
     * @param {UpdateAggregateConfigRuleRequest} req
     * @param {function(string, UpdateAggregateConfigRuleResponse):void} cb
     * @public
     */
    UpdateAggregateConfigRule(req, cb) {
        let resp = new UpdateAggregateConfigRuleResponse();
        this.request("UpdateAggregateConfigRule", req, resp, cb);
    }

    /**
     * This API is used to enable or disable compliance packages.
     * @param {UpdateCompliancePackStatusRequest} req
     * @param {function(string, UpdateCompliancePackStatusResponse):void} cb
     * @public
     */
    UpdateCompliancePackStatus(req, cb) {
        let resp = new UpdateCompliancePackStatusResponse();
        this.request("UpdateCompliancePackStatus", req, resp, cb);
    }

    /**
     * This API is used to add alarm monitoring rules.
     * @param {AddAlarmPolicyRequest} req
     * @param {function(string, AddAlarmPolicyResponse):void} cb
     * @public
     */
    AddAlarmPolicy(req, cb) {
        let resp = new AddAlarmPolicyResponse();
        this.request("AddAlarmPolicy", req, resp, cb);
    }

    /**
     * This API is used to query compliance package details for account groups.
     * @param {DescribeAggregateCompliancePackRequest} req
     * @param {function(string, DescribeAggregateCompliancePackResponse):void} cb
     * @public
     */
    DescribeAggregateCompliancePack(req, cb) {
        let resp = new DescribeAggregateCompliancePackResponse();
        this.request("DescribeAggregateCompliancePack", req, resp, cb);
    }

    /**
     * This API is used to enable a rule for an account group.
     * @param {OpenAggregateConfigRuleRequest} req
     * @param {function(string, OpenAggregateConfigRuleResponse):void} cb
     * @public
     */
    OpenAggregateConfigRule(req, cb) {
        let resp = new OpenAggregateConfigRuleResponse();
        this.request("OpenAggregateConfigRule", req, resp, cb);
    }

    /**
     * This API is used to query delivery setting details for account groups.
     * @param {DescribeAggregateConfigDeliverRequest} req
     * @param {function(string, DescribeAggregateConfigDeliverResponse):void} cb
     * @public
     */
    DescribeAggregateConfigDeliver(req, cb) {
        let resp = new DescribeAggregateConfigDeliverResponse();
        this.request("DescribeAggregateConfigDeliver", req, resp, cb);
    }

    /**
     * This API is used to remove rules for a compliance package.
     * @param {DetachConfigRuleToCompliancePackRequest} req
     * @param {function(string, DetachConfigRuleToCompliancePackResponse):void} cb
     * @public
     */
    DetachConfigRuleToCompliancePack(req, cb) {
        let resp = new DetachConfigRuleToCompliancePackResponse();
        this.request("DetachConfigRuleToCompliancePack", req, resp, cb);
    }

    /**
     * This example shows you how to query rule details.
     * @param {DescribeConfigRuleRequest} req
     * @param {function(string, DescribeConfigRuleResponse):void} cb
     * @public
     */
    DescribeConfigRule(req, cb) {
        let resp = new DescribeConfigRuleResponse();
        this.request("DescribeConfigRule", req, resp, cb);
    }

    /**
     * This API is used to query evaluation results from the rule dimension for account groups (the list of evaluation results for resources under a specific rule).
     * @param {ListAggregateConfigRuleEvaluationResultsRequest} req
     * @param {function(string, ListAggregateConfigRuleEvaluationResultsResponse):void} cb
     * @public
     */
    ListAggregateConfigRuleEvaluationResults(req, cb) {
        let resp = new ListAggregateConfigRuleEvaluationResultsResponse();
        this.request("ListAggregateConfigRuleEvaluationResults", req, resp, cb);
    }

    /**
     * This API is used to edit shipping settings.
     * @param {UpdateConfigDeliverRequest} req
     * @param {function(string, UpdateConfigDeliverResponse):void} cb
     * @public
     */
    UpdateConfigDeliver(req, cb) {
        let resp = new UpdateConfigDeliverResponse();
        this.request("UpdateConfigDeliver", req, resp, cb);
    }

    /**
     * This API is used to create a compliance package.
     * @param {AddCompliancePackRequest} req
     * @param {function(string, AddCompliancePackResponse):void} cb
     * @public
     */
    AddCompliancePack(req, cb) {
        let resp = new AddCompliancePackResponse();
        this.request("AddCompliancePack", req, resp, cb);
    }

    /**
     * This API is used to manage resource monitoring - disabling monitoring.
     * @param {CloseConfigRecorderRequest} req
     * @param {function(string, CloseConfigRecorderResponse):void} cb
     * @public
     */
    CloseConfigRecorder(req, cb) {
        let resp = new CloseConfigRecorderResponse();
        this.request("CloseConfigRecorder", req, resp, cb);
    }

    /**
     * Resource details.
     * @param {DescribeDiscoveredResourceRequest} req
     * @param {function(string, DescribeDiscoveredResourceResponse):void} cb
     * @public
     */
    DescribeDiscoveredResource(req, cb) {
        let resp = new DescribeDiscoveredResourceResponse();
        this.request("DescribeDiscoveredResource", req, resp, cb);
    }

    /**
     * Updating an Alarm Rule
     * @param {UpdateAlarmPolicyRequest} req
     * @param {function(string, UpdateAlarmPolicyResponse):void} cb
     * @public
     */
    UpdateAlarmPolicy(req, cb) {
        let resp = new UpdateAlarmPolicyResponse();
        this.request("UpdateAlarmPolicy", req, resp, cb);
    }

    /**
     * This example shows you how to query account group details.
     * @param {DescribeAggregatorRequest} req
     * @param {function(string, DescribeAggregatorResponse):void} cb
     * @public
     */
    DescribeAggregator(req, cb) {
        let resp = new DescribeAggregatorResponse();
        this.request("DescribeAggregator", req, resp, cb);
    }

    /**
     * Edit the monitoring scope.
     * @param {UpdateConfigRecorderRequest} req
     * @param {function(string, UpdateConfigRecorderResponse):void} cb
     * @public
     */
    UpdateConfigRecorder(req, cb) {
        let resp = new UpdateConfigRecorderResponse();
        this.request("UpdateConfigRecorder", req, resp, cb);
    }

    /**
     * This API is used to delete rule remediation settings.
     * @param {DeleteRemediationsRequest} req
     * @param {function(string, DeleteRemediationsResponse):void} cb
     * @public
     */
    DeleteRemediations(req, cb) {
        let resp = new DeleteRemediationsResponse();
        this.request("DeleteRemediations", req, resp, cb);
    }

    /**
     * Reporting Evaluation Results Under Custom Rules
     * @param {PutEvaluationsRequest} req
     * @param {function(string, PutEvaluationsResponse):void} cb
     * @public
     */
    PutEvaluations(req, cb) {
        let resp = new PutEvaluationsResponse();
        this.request("PutEvaluations", req, resp, cb);
    }

    /**
     * This API is used to edit conformance packages for account groups.
     * @param {UpdateAggregateCompliancePackRequest} req
     * @param {function(string, UpdateAggregateCompliancePackResponse):void} cb
     * @public
     */
    UpdateAggregateCompliancePack(req, cb) {
        let resp = new UpdateAggregateCompliancePackResponse();
        this.request("UpdateAggregateCompliancePack", req, resp, cb);
    }

    /**
     * This API is used to query the system compliance package details.
     * @param {DescribeSystemCompliancePackRequest} req
     * @param {function(string, DescribeSystemCompliancePackResponse):void} cb
     * @public
     */
    DescribeSystemCompliancePack(req, cb) {
        let resp = new DescribeSystemCompliancePackResponse();
        this.request("DescribeSystemCompliancePack", req, resp, cb);
    }

    /**
     * This API is used to edit a rule.
     * @param {UpdateConfigRuleRequest} req
     * @param {function(string, UpdateConfigRuleResponse):void} cb
     * @public
     */
    UpdateConfigRule(req, cb) {
        let resp = new UpdateConfigRuleResponse();
        this.request("UpdateConfigRule", req, resp, cb);
    }

    /**
     * This API is used to preset rule details.
     * @param {DescribeSystemRuleRequest} req
     * @param {function(string, DescribeSystemRuleResponse):void} cb
     * @public
     */
    DescribeSystemRule(req, cb) {
        let resp = new DescribeSystemRuleResponse();
        this.request("DescribeSystemRule", req, resp, cb);
    }

    /**
     * This API is used to close rules for account groups.
     * @param {CloseAggregateConfigRuleRequest} req
     * @param {function(string, CloseAggregateConfigRuleResponse):void} cb
     * @public
     */
    CloseAggregateConfigRule(req, cb) {
        let resp = new CloseAggregateConfigRuleResponse();
        this.request("CloseAggregateConfigRule", req, resp, cb);
    }

    /**
     * This API is used to remove rules from compliance packages for account groups.
     * @param {DetachAggregateConfigRuleToCompliancePackRequest} req
     * @param {function(string, DetachAggregateConfigRuleToCompliancePackResponse):void} cb
     * @public
     */
    DetachAggregateConfigRuleToCompliancePack(req, cb) {
        let resp = new DetachAggregateConfigRuleToCompliancePackResponse();
        this.request("DetachAggregateConfigRuleToCompliancePack", req, resp, cb);
    }

    /**
     * Correction records.
     * @param {ListRemediationExecutionsRequest} req
     * @param {function(string, ListRemediationExecutionsResponse):void} cb
     * @public
     */
    ListRemediationExecutions(req, cb) {
        let resp = new ListRemediationExecutionsResponse();
        this.request("ListRemediationExecutions", req, resp, cb);
    }

    /**
     * This API is used to query the list of rules for account groups.
     * @param {ListAggregateConfigRulesRequest} req
     * @param {function(string, ListAggregateConfigRulesResponse):void} cb
     * @public
     */
    ListAggregateConfigRules(req, cb) {
        let resp = new ListAggregateConfigRulesResponse();
        this.request("ListAggregateConfigRules", req, resp, cb);
    }

    /**
     * This API is used to query the list of system compliance packages.
     * @param {ListSystemCompliancePacksRequest} req
     * @param {function(string, ListSystemCompliancePacksResponse):void} cb
     * @public
     */
    ListSystemCompliancePacks(req, cb) {
        let resp = new ListSystemCompliancePacksResponse();
        this.request("ListSystemCompliancePacks", req, resp, cb);
    }

    /**
     *  This API is used to obtain evaluation results from the rule dimension (the list of evaluation results for resources under a specific rule).
     * @param {ListConfigRuleEvaluationResultsRequest} req
     * @param {function(string, ListConfigRuleEvaluationResultsResponse):void} cb
     * @public
     */
    ListConfigRuleEvaluationResults(req, cb) {
        let resp = new ListConfigRuleEvaluationResultsResponse();
        this.request("ListConfigRuleEvaluationResults", req, resp, cb);
    }

    /**
     * This API is used to create compliance packages for account groups.
     * @param {AddAggregateCompliancePackRequest} req
     * @param {function(string, AddAggregateCompliancePackResponse):void} cb
     * @public
     */
    AddAggregateCompliancePack(req, cb) {
        let resp = new AddAggregateCompliancePackResponse();
        this.request("AddAggregateCompliancePack", req, resp, cb);
    }

    /**
     * This API is used to query resource details for account groups.
     * @param {DescribeAggregateDiscoveredResourceRequest} req
     * @param {function(string, DescribeAggregateDiscoveredResourceResponse):void} cb
     * @public
     */
    DescribeAggregateDiscoveredResource(req, cb) {
        let resp = new DescribeAggregateDiscoveredResourceResponse();
        this.request("DescribeAggregateDiscoveredResource", req, resp, cb);
    }

    /**
     * This API is used to enable or disable compliance packages for account groups.
     * @param {UpdateAggregateCompliancePackStatusRequest} req
     * @param {function(string, UpdateAggregateCompliancePackStatusResponse):void} cb
     * @public
     */
    UpdateAggregateCompliancePackStatus(req, cb) {
        let resp = new UpdateAggregateCompliancePackStatusResponse();
        this.request("UpdateAggregateCompliancePackStatus", req, resp, cb);
    }

    /**
     * This API is used to delete account groups.
     * @param {DeleteAggregatorsRequest} req
     * @param {function(string, DeleteAggregatorsResponse):void} cb
     * @public
     */
    DeleteAggregators(req, cb) {
        let resp = new DeleteAggregatorsResponse();
        this.request("DeleteAggregators", req, resp, cb);
    }

    /**
     * Close rules
     * @param {CloseConfigRuleRequest} req
     * @param {function(string, CloseConfigRuleResponse):void} cb
     * @public
     */
    CloseConfigRule(req, cb) {
        let resp = new CloseConfigRuleResponse();
        this.request("CloseConfigRule", req, resp, cb);
    }

    /**
     * This API is used to query the list of compliance packages.
     * @param {ListCompliancePacksRequest} req
     * @param {function(string, ListCompliancePacksResponse):void} cb
     * @public
     */
    ListCompliancePacks(req, cb) {
        let resp = new ListCompliancePacksResponse();
        this.request("ListCompliancePacks", req, resp, cb);
    }

    /**
     * This API is used to delete compliance packages.
     * @param {DeleteCompliancePackRequest} req
     * @param {function(string, DeleteCompliancePackResponse):void} cb
     * @public
     */
    DeleteCompliancePack(req, cb) {
        let resp = new DeleteCompliancePackResponse();
        this.request("DeleteCompliancePack", req, resp, cb);
    }

    /**
     * This API is used to delete rules for account groups.
     * @param {DeleteAggregateConfigRuleRequest} req
     * @param {function(string, DeleteAggregateConfigRuleResponse):void} cb
     * @public
     */
    DeleteAggregateConfigRule(req, cb) {
        let resp = new DeleteAggregateConfigRuleResponse();
        this.request("DeleteAggregateConfigRule", req, resp, cb);
    }


}
module.exports = ConfigClient;
