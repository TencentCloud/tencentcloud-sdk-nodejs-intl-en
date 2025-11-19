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
const DescribeApmAssociationResponse = models.DescribeApmAssociationResponse;
const ModifyApmInstanceRequest = models.ModifyApmInstanceRequest;
const ApmInstanceDetail = models.ApmInstanceDetail;
const CreateApmInstanceRequest = models.CreateApmInstanceRequest;
const ModifyGeneralApmApplicationConfigRequest = models.ModifyGeneralApmApplicationConfigRequest;
const DescribeApmServiceMetricRequest = models.DescribeApmServiceMetricRequest;
const CreateApmPrometheusRuleRequest = models.CreateApmPrometheusRuleRequest;
const QueryMetricItem = models.QueryMetricItem;
const ModifyApmPrometheusRuleRequest = models.ModifyApmPrometheusRuleRequest;
const ModifyGeneralApmApplicationConfigResponse = models.ModifyGeneralApmApplicationConfigResponse;
const DescribeApmInstancesResponse = models.DescribeApmInstancesResponse;
const AgentOperationConfigView = models.AgentOperationConfigView;
const Instrument = models.Instrument;
const DescribeTagValuesResponse = models.DescribeTagValuesResponse;
const DescribeTagValuesRequest = models.DescribeTagValuesRequest;
const DescribeApmPrometheusRuleResponse = models.DescribeApmPrometheusRuleResponse;
const ServiceDetail = models.ServiceDetail;
const Span = models.Span;
const ApmAgentInfo = models.ApmAgentInfo;
const TerminateApmInstanceRequest = models.TerminateApmInstanceRequest;
const ApmApplicationConfigView = models.ApmApplicationConfigView;
const ApmMetricRecord = models.ApmMetricRecord;
const DescribeServiceOverviewRequest = models.DescribeServiceOverviewRequest;
const DescribeApmSampleConfigResponse = models.DescribeApmSampleConfigResponse;
const DescribeApmAgentResponse = models.DescribeApmAgentResponse;
const CreateApmSampleConfigRequest = models.CreateApmSampleConfigRequest;
const DescribeApmSampleConfigRequest = models.DescribeApmSampleConfigRequest;
const ModifyApmInstanceResponse = models.ModifyApmInstanceResponse;
const SpanLog = models.SpanLog;
const ApmServiceMetric = models.ApmServiceMetric;
const ModifyApmSampleConfigResponse = models.ModifyApmSampleConfigResponse;
const ApmAppConfig = models.ApmAppConfig;
const CreateApmSampleConfigResponse = models.CreateApmSampleConfigResponse;
const DescribeApmApplicationConfigRequest = models.DescribeApmApplicationConfigRequest;
const Filter = models.Filter;
const ApmField = models.ApmField;
const Line = models.Line;
const DescribeGeneralSpanListResponse = models.DescribeGeneralSpanListResponse;
const CreateProfileTaskResponse = models.CreateProfileTaskResponse;
const DescribeGeneralSpanListRequest = models.DescribeGeneralSpanListRequest;
const ModifyApmPrometheusRuleResponse = models.ModifyApmPrometheusRuleResponse;
const ApmAssociation = models.ApmAssociation;
const OrderBy = models.OrderBy;
const DescribeServiceOverviewResponse = models.DescribeServiceOverviewResponse;
const DescribeApmServiceMetricResponse = models.DescribeApmServiceMetricResponse;
const ModifyApmAssociationResponse = models.ModifyApmAssociationResponse;
const DescribeMetricRecordsResponse = models.DescribeMetricRecordsResponse;
const DescribeGeneralOTSpanListResponse = models.DescribeGeneralOTSpanListResponse;
const ApmTag = models.ApmTag;
const ModifyApmApplicationConfigResponse = models.ModifyApmApplicationConfigResponse;
const DescribeApmApplicationConfigResponse = models.DescribeApmApplicationConfigResponse;
const DescribeApmAssociationRequest = models.DescribeApmAssociationRequest;
const ModifyApmApplicationConfigRequest = models.ModifyApmApplicationConfigRequest;
const APMKV = models.APMKV;
const DescribeGeneralOTSpanListRequest = models.DescribeGeneralOTSpanListRequest;
const DescribeApmAgentRequest = models.DescribeApmAgentRequest;
const DescribeMetricRecordsRequest = models.DescribeMetricRecordsRequest;
const DescribeGeneralApmApplicationConfigResponse = models.DescribeGeneralApmApplicationConfigResponse;
const DescribeGeneralMetricDataRequest = models.DescribeGeneralMetricDataRequest;
const DescribeApmPrometheusRuleRequest = models.DescribeApmPrometheusRuleRequest;
const CreateApmInstanceResponse = models.CreateApmInstanceResponse;
const SpanReference = models.SpanReference;
const CreateProfileTaskRequest = models.CreateProfileTaskRequest;
const SpanProcess = models.SpanProcess;
const DeleteApmSampleConfigResponse = models.DeleteApmSampleConfigResponse;
const ModifyApmAssociationRequest = models.ModifyApmAssociationRequest;
const ApmPrometheusRules = models.ApmPrometheusRules;
const ModifyApmSampleConfigRequest = models.ModifyApmSampleConfigRequest;
const DescribeGeneralApmApplicationConfigRequest = models.DescribeGeneralApmApplicationConfigRequest;
const ApmSampleConfig = models.ApmSampleConfig;
const GeneralFilter = models.GeneralFilter;
const DescribeApmInstancesRequest = models.DescribeApmInstancesRequest;
const SpanTag = models.SpanTag;
const DescribeGeneralMetricDataResponse = models.DescribeGeneralMetricDataResponse;
const DeleteApmSampleConfigRequest = models.DeleteApmSampleConfigRequest;
const APMKVItem = models.APMKVItem;
const CreateApmPrometheusRuleResponse = models.CreateApmPrometheusRuleResponse;
const TerminateApmInstanceResponse = models.TerminateApmInstanceResponse;


/**
 * apm client
 * @class
 */
class ApmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("apm.intl.tencentcloudapi.com", "2021-06-22", credential, region, profile);
    }
    
    /**
     * This API is used to modify the APM business system.
     * @param {ModifyApmInstanceRequest} req
     * @param {function(string, ModifyApmInstanceResponse):void} cb
     * @public
     */
    ModifyApmInstance(req, cb) {
        let resp = new ModifyApmInstanceResponse();
        this.request("ModifyApmInstance", req, resp, cb);
    }

    /**
     * General Query Call Chain List.
     * @param {DescribeGeneralSpanListRequest} req
     * @param {function(string, DescribeGeneralSpanListResponse):void} cb
     * @public
     */
    DescribeGeneralSpanList(req, cb) {
        let resp = new DescribeGeneralSpanListResponse();
        this.request("DescribeGeneralSpanList", req, resp, cb);
    }

    /**
     * General Query OpenTelemetry Call Chain List.
     * @param {DescribeGeneralOTSpanListRequest} req
     * @param {function(string, DescribeGeneralOTSpanListResponse):void} cb
     * @public
     */
    DescribeGeneralOTSpanList(req, cb) {
        let resp = new DescribeGeneralOTSpanListResponse();
        this.request("DescribeGeneralOTSpanList", req, resp, cb);
    }

    /**
     * This API is used to create a business purchase in the APM business system.
     * @param {CreateApmInstanceRequest} req
     * @param {function(string, CreateApmInstanceResponse):void} cb
     * @public
     */
    CreateApmInstance(req, cb) {
        let resp = new CreateApmInstanceResponse();
        this.request("CreateApmInstance", req, resp, cb);
    }

    /**
     * This API is used to query the application configuration information.
     * @param {DescribeGeneralApmApplicationConfigRequest} req
     * @param {function(string, DescribeGeneralApmApplicationConfigResponse):void} cb
     * @public
     */
    DescribeGeneralApmApplicationConfig(req, cb) {
        let resp = new DescribeGeneralApmApplicationConfigResponse();
        this.request("DescribeGeneralApmApplicationConfig", req, resp, cb);
    }

    /**
     * This API is used to modify the relationship between the apm Business System and other products, including deletion.
     * @param {ModifyApmAssociationRequest} req
     * @param {function(string, ModifyApmAssociationResponse):void} cb
     * @public
     */
    ModifyApmAssociation(req, cb) {
        let resp = new ModifyApmAssociationResponse();
        this.request("ModifyApmAssociation", req, resp, cb);
    }

    /**
     * Modify sampling configurations
     * @param {ModifyApmSampleConfigRequest} req
     * @param {function(string, ModifyApmSampleConfigResponse):void} cb
     * @public
     */
    ModifyApmSampleConfig(req, cb) {
        let resp = new ModifyApmSampleConfigResponse();
        this.request("ModifyApmSampleConfig", req, resp, cb);
    }

    /**
     * Obtaining APM Access Point.
     * @param {DescribeApmAgentRequest} req
     * @param {function(string, DescribeApmAgentResponse):void} cb
     * @public
     */
    DescribeApmAgent(req, cb) {
        let resp = new DescribeApmAgentResponse();
        this.request("DescribeApmAgent", req, resp, cb);
    }

    /**
     * This API is a general API used to obtain metric data. Users submit request parameters as needed and receive the corresponding metric data.
The API call frequency is limited to 20 requests per second and 1200 requests per minute. The number of data points per request is limited to 1440.
     * @param {DescribeGeneralMetricDataRequest} req
     * @param {function(string, DescribeGeneralMetricDataResponse):void} cb
     * @public
     */
    DescribeGeneralMetricData(req, cb) {
        let resp = new DescribeGeneralMetricDataResponse();
        this.request("DescribeGeneralMetricData", req, resp, cb);
    }

    /**
     * This API is used to create metric match rules between apm Business System and Prometheus Instance.
     * @param {CreateApmPrometheusRuleRequest} req
     * @param {function(string, CreateApmPrometheusRuleResponse):void} cb
     * @public
     */
    CreateApmPrometheusRule(req, cb) {
        let resp = new CreateApmPrometheusRuleResponse();
        this.request("CreateApmPrometheusRule", req, resp, cb);
    }

    /**
     * Termination of APM business system.
     * @param {TerminateApmInstanceRequest} req
     * @param {function(string, TerminateApmInstanceResponse):void} cb
     * @public
     */
    TerminateApmInstance(req, cb) {
        let resp = new TerminateApmInstanceResponse();
        this.request("TerminateApmInstance", req, resp, cb);
    }

    /**
     * This API is used to query the relationship between apm Business System and other product.
     * @param {DescribeApmAssociationRequest} req
     * @param {function(string, DescribeApmAssociationResponse):void} cb
     * @public
     */
    DescribeApmAssociation(req, cb) {
        let resp = new DescribeApmAssociationResponse();
        this.request("DescribeApmAssociation", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of APM application metrics.
     * @param {DescribeApmServiceMetricRequest} req
     * @param {function(string, DescribeApmServiceMetricResponse):void} cb
     * @public
     */
    DescribeApmServiceMetric(req, cb) {
        let resp = new DescribeApmServiceMetricResponse();
        this.request("DescribeApmServiceMetric", req, resp, cb);
    }

    /**
     * This API is used to modify metric match rules between apm Business System and Prometheus Instance.
     * @param {ModifyApmPrometheusRuleRequest} req
     * @param {function(string, ModifyApmPrometheusRuleResponse):void} cb
     * @public
     */
    ModifyApmPrometheusRule(req, cb) {
        let resp = new ModifyApmPrometheusRuleResponse();
        this.request("ModifyApmPrometheusRule", req, resp, cb);
    }

    /**
     * Create sampling configurations
     * @param {CreateApmSampleConfigRequest} req
     * @param {function(string, CreateApmSampleConfigResponse):void} cb
     * @public
     */
    CreateApmSampleConfig(req, cb) {
        let resp = new CreateApmSampleConfigResponse();
        this.request("CreateApmSampleConfig", req, resp, cb);
    }

    /**
     * Query sampling configuration
     * @param {DescribeApmSampleConfigRequest} req
     * @param {function(string, DescribeApmSampleConfigResponse):void} cb
     * @public
     */
    DescribeApmSampleConfig(req, cb) {
        let resp = new DescribeApmSampleConfigResponse();
        this.request("DescribeApmSampleConfig", req, resp, cb);
    }

    /**
     * This API is used to query dimensional data by dimension name and filter condition.
     * @param {DescribeTagValuesRequest} req
     * @param {function(string, DescribeTagValuesResponse):void} cb
     * @public
     */
    DescribeTagValues(req, cb) {
        let resp = new DescribeTagValuesResponse();
        this.request("DescribeTagValues", req, resp, cb);
    }

    /**
     * This API is used to query the match rule for metrics between apm Business System and Prometheus Instance.
     * @param {DescribeApmPrometheusRuleRequest} req
     * @param {function(string, DescribeApmPrometheusRuleResponse):void} cb
     * @public
     */
    DescribeApmPrometheusRule(req, cb) {
        let resp = new DescribeApmPrometheusRuleResponse();
        this.request("DescribeApmPrometheusRule", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of APM business systems.
     * @param {DescribeApmInstancesRequest} req
     * @param {function(string, DescribeApmInstancesResponse):void} cb
     * @public
     */
    DescribeApmInstances(req, cb) {
        let resp = new DescribeApmInstancesResponse();
        this.request("DescribeApmInstances", req, resp, cb);
    }

    /**
     * Delete sampling configurations
     * @param {DeleteApmSampleConfigRequest} req
     * @param {function(string, DeleteApmSampleConfigResponse):void} cb
     * @public
     */
    DeleteApmSampleConfig(req, cb) {
        let resp = new DeleteApmSampleConfigResponse();
        this.request("DeleteApmSampleConfig", req, resp, cb);
    }

    /**
     * This API is used to create an event task.
     * @param {CreateProfileTaskRequest} req
     * @param {function(string, CreateProfileTaskResponse):void} cb
     * @public
     */
    CreateProfileTask(req, cb) {
        let resp = new CreateProfileTaskResponse();
        this.request("CreateProfileTask", req, resp, cb);
    }

    /**
     * This API is used to query application configuration.
     * @param {DescribeApmApplicationConfigRequest} req
     * @param {function(string, DescribeApmApplicationConfigResponse):void} cb
     * @public
     */
    DescribeApmApplicationConfig(req, cb) {
        let resp = new DescribeApmApplicationConfigResponse();
        this.request("DescribeApmApplicationConfig", req, resp, cb);
    }

    /**
     * OpenAPI available for external use. Customers can flexibly specify the fields to be modified, and then add the list of services to be modified.
     * @param {ModifyGeneralApmApplicationConfigRequest} req
     * @param {function(string, ModifyGeneralApmApplicationConfigResponse):void} cb
     * @public
     */
    ModifyGeneralApmApplicationConfig(req, cb) {
        let resp = new ModifyGeneralApmApplicationConfigResponse();
        this.request("ModifyGeneralApmApplicationConfig", req, resp, cb);
    }

    /**
     * This API is used to query metric list. To query metrics, it is recommended to use the DescribeGeneralMetricData API.
     * @param {DescribeMetricRecordsRequest} req
     * @param {function(string, DescribeMetricRecordsResponse):void} cb
     * @public
     */
    DescribeMetricRecords(req, cb) {
        let resp = new DescribeMetricRecordsResponse();
        this.request("DescribeMetricRecords", req, resp, cb);
    }

    /**
     * Modify application configurations
     * @param {ModifyApmApplicationConfigRequest} req
     * @param {function(string, ModifyApmApplicationConfigResponse):void} cb
     * @public
     */
    ModifyApmApplicationConfig(req, cb) {
        let resp = new ModifyApmApplicationConfigResponse();
        this.request("ModifyApmApplicationConfig", req, resp, cb);
    }

    /**
     * This API is used to pull application overview data.
     * @param {DescribeServiceOverviewRequest} req
     * @param {function(string, DescribeServiceOverviewResponse):void} cb
     * @public
     */
    DescribeServiceOverview(req, cb) {
        let resp = new DescribeServiceOverviewResponse();
        this.request("DescribeServiceOverview", req, resp, cb);
    }


}
module.exports = ApmClient;
