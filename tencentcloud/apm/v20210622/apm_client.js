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
const CreateApmInstanceRequest = models.CreateApmInstanceRequest;
const DescribeApmVulnerabilityCountResponse = models.DescribeApmVulnerabilityCountResponse;
const DescribeServiceOverviewResponse = models.DescribeServiceOverviewResponse;
const ApmSampleConfig = models.ApmSampleConfig;
const DescribeApmSQLInjectionDetailResponse = models.DescribeApmSQLInjectionDetailResponse;
const AgentOperationConfigView = models.AgentOperationConfigView;
const SelectorView = models.SelectorView;
const DescribeApmSampleConfigRequest = models.DescribeApmSampleConfigRequest;
const DescribeApmAllVulCountResponse = models.DescribeApmAllVulCountResponse;
const DescribeApmSampleConfigResponse = models.DescribeApmSampleConfigResponse;
const DescribeServiceOverviewRequest = models.DescribeServiceOverviewRequest;
const DescribeTopologyNewResponse = models.DescribeTopologyNewResponse;
const DescribeOPRAllVulCountResponse = models.DescribeOPRAllVulCountResponse;
const ModifyApmApplicationConfigResponse = models.ModifyApmApplicationConfigResponse;
const DescribeApmServiceMetricResponse = models.DescribeApmServiceMetricResponse;
const ModifyApmAssociationRequest = models.ModifyApmAssociationRequest;
const DescribeGeneralOTSpanListResponse = models.DescribeGeneralOTSpanListResponse;
const DescribeApmApplicationConfigResponse = models.DescribeApmApplicationConfigResponse;
const DescribeApmAssociationRequest = models.DescribeApmAssociationRequest;
const APMKV = models.APMKV;
const Position = models.Position;
const ComponentTopologyView = models.ComponentTopologyView;
const CreateProfileTaskRequest = models.CreateProfileTaskRequest;
const DescribeApmVulnerabilityDetailRequest = models.DescribeApmVulnerabilityDetailRequest;
const DeleteApmSampleConfigResponse = models.DeleteApmSampleConfigResponse;
const TopologyEdgeNew = models.TopologyEdgeNew;
const DescribeApmPrometheusRuleRequest = models.DescribeApmPrometheusRuleRequest;
const CreateApmPrometheusRuleResponse = models.CreateApmPrometheusRuleResponse;
const TerminateApmInstanceResponse = models.TerminateApmInstanceResponse;
const ApmPrometheusRules = models.ApmPrometheusRules;
const ApmMetricRecord = models.ApmMetricRecord;
const TopologyNode = models.TopologyNode;
const DescribeApmAgentResponse = models.DescribeApmAgentResponse;
const CreateApmSampleConfigRequest = models.CreateApmSampleConfigRequest;
const DescribeTagValuesRequest = models.DescribeTagValuesRequest;
const ApmServiceMetric = models.ApmServiceMetric;
const ApmAppConfig = models.ApmAppConfig;
const CreateApmSampleConfigResponse = models.CreateApmSampleConfigResponse;
const Line = models.Line;
const ModifyApmAssociationResponse = models.ModifyApmAssociationResponse;
const APMKVItem = models.APMKVItem;
const DescribeGeneralSpanListRequest = models.DescribeGeneralSpanListRequest;
const DescribeApmAgentRequest = models.DescribeApmAgentRequest;
const DescribeMetricRecordsRequest = models.DescribeMetricRecordsRequest;
const DescribeGeneralMetricDataRequest = models.DescribeGeneralMetricDataRequest;
const ModifyApmPrometheusRuleRequest = models.ModifyApmPrometheusRuleRequest;
const ModifyApmInstanceResponse = models.ModifyApmInstanceResponse;
const SpanTag = models.SpanTag;
const DescribeGeneralMetricDataResponse = models.DescribeGeneralMetricDataResponse;
const ModifyApmInstanceRequest = models.ModifyApmInstanceRequest;
const SpanLog = models.SpanLog;
const QueryMetricItem = models.QueryMetricItem;
const ServiceDetail = models.ServiceDetail;
const DescribeApmInstancesResponse = models.DescribeApmInstancesResponse;
const DescribeApmPrometheusRuleResponse = models.DescribeApmPrometheusRuleResponse;
const ModifyApmSampleConfigResponse = models.ModifyApmSampleConfigResponse;
const DescribeApmApplicationConfigRequest = models.DescribeApmApplicationConfigRequest;
const CreateProfileTaskResponse = models.CreateProfileTaskResponse;
const DescribeApmVulnerabilityDetailResponse = models.DescribeApmVulnerabilityDetailResponse;
const ModifyApmPrometheusRuleResponse = models.ModifyApmPrometheusRuleResponse;
const DescribeMetricRecordsResponse = models.DescribeMetricRecordsResponse;
const ApmTag = models.ApmTag;
const DescribeApmSQLInjectionDetailRequest = models.DescribeApmSQLInjectionDetailRequest;
const Filter = models.Filter;
const DescribeGeneralOTSpanListRequest = models.DescribeGeneralOTSpanListRequest;
const AutoProfilingConfig = models.AutoProfilingConfig;
const DescribeGeneralApmApplicationConfigResponse = models.DescribeGeneralApmApplicationConfigResponse;
const CreateApmInstanceResponse = models.CreateApmInstanceResponse;
const ApmVulnerabilityServiceDetail = models.ApmVulnerabilityServiceDetail;
const DescribeGeneralApmApplicationConfigRequest = models.DescribeGeneralApmApplicationConfigRequest;
const DescribeTopologyNewRequest = models.DescribeTopologyNewRequest;
const DescribeApmInstancesRequest = models.DescribeApmInstancesRequest;
const DeleteApmSampleConfigRequest = models.DeleteApmSampleConfigRequest;
const DescribeApmVulnerabilityCountRequest = models.DescribeApmVulnerabilityCountRequest;
const ModifyApmSampleConfigRequest = models.ModifyApmSampleConfigRequest;
const TerminateApmInstanceRequest = models.TerminateApmInstanceRequest;
const ApmInstanceDetail = models.ApmInstanceDetail;
const Span = models.Span;
const ModifyGeneralApmApplicationConfigRequest = models.ModifyGeneralApmApplicationConfigRequest;
const DescribeApmServiceMetricRequest = models.DescribeApmServiceMetricRequest;
const CreateApmPrometheusRuleRequest = models.CreateApmPrometheusRuleRequest;
const DescribeApmAllVulCountRequest = models.DescribeApmAllVulCountRequest;
const TkeMeta = models.TkeMeta;
const Instrument = models.Instrument;
const DescribeTagValuesResponse = models.DescribeTagValuesResponse;
const ApmAgentInfo = models.ApmAgentInfo;
const ApmApplicationConfigView = models.ApmApplicationConfigView;
const OrderBy = models.OrderBy;
const ApmField = models.ApmField;
const DescribeGeneralSpanListResponse = models.DescribeGeneralSpanListResponse;
const ApmAssociation = models.ApmAssociation;
const Resource = models.Resource;
const Selectors = models.Selectors;
const ModifyApmServiceResponse = models.ModifyApmServiceResponse;
const ModifyApmApplicationConfigRequest = models.ModifyApmApplicationConfigRequest;
const ModifyGeneralApmApplicationConfigResponse = models.ModifyGeneralApmApplicationConfigResponse;
const CVMMeta = models.CVMMeta;
const ModifyApmServiceRequest = models.ModifyApmServiceRequest;
const SpanReference = models.SpanReference;
const SpanProcess = models.SpanProcess;
const GeneralFilter = models.GeneralFilter;
const DescribeOPRAllVulCountRequest = models.DescribeOPRAllVulCountRequest;


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
     * Query vulnerability details.
     * @param {DescribeApmVulnerabilityDetailRequest} req
     * @param {function(string, DescribeApmVulnerabilityDetailResponse):void} cb
     * @public
     */
    DescribeApmVulnerabilityDetail(req, cb) {
        let resp = new DescribeApmVulnerabilityDetailResponse();
        this.request("DescribeApmVulnerabilityDetail", req, resp, cb);
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
     * This API is used to edit information about applications of APM.
     * @param {ModifyApmServiceRequest} req
     * @param {function(string, ModifyApmServiceResponse):void} cb
     * @public
     */
    ModifyApmService(req, cb) {
        let resp = new ModifyApmServiceResponse();
        this.request("ModifyApmService", req, resp, cb);
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
     * This API is used to query the service topology diagram according to the application name.
     * @param {DescribeTopologyNewRequest} req
     * @param {function(string, DescribeTopologyNewResponse):void} cb
     * @public
     */
    DescribeTopologyNew(req, cb) {
        let resp = new DescribeTopologyNewResponse();
        this.request("DescribeTopologyNew", req, resp, cb);
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
     * General interface to obtain metric data. Submit request parameters as needed and receive the corresponding metric data.
API call frequency limit: 20 requests/second, 1,200 requests/minute. Data point limit per single request: up to 1,440 data points.

General interface to obtain metric data usage: This API is used to query metric data flexibly. The query method of this API is similar to using the following SQL statement: SELECT {Metrics} FROM {ViewName} WHERE {Filters} GROUP BY {GroupBy}. Before initiating request, please confirm the following key parameters:
1. View (ViewName)
Determine the domain of the queried data.
For example: service_metric (service monitoring view), db_metric (database view). For views supported by APM, see metrics view (https://www.tencentcloud.com/document/product/248/101681?from_cn_redirect=1#069b06a9-2593-49db-b694-dea4200f3b19).

2. Metrics
Used to specify one or more metric items in the returned result.
For example: request_count (request count), duration_avg (avg duration), error_rate (error rate). For supported metrics about APM, see [APM Protocol Standards](https://www.tencentcloud.com/document/product/248/101681?from_cn_redirect=1). Each view (ViewName) supports an exclusive metric set.
3. Filters
Support filter criteria in the form of one or multiple Key-Value pairs.
For example: Only query a certain specific service with service.name = "order-service". Common dimensional and each view (ViewName) support exclusive dimensions, which can be used as keys in filter conditions. For details, refer to the APM metrics protocol standard (https://www.tencentcloud.com/document/product/248/101681?from_cn_redirect=1).

4. GroupBy (aggregation)
Support one or more aggregate dimensions, equivalent to SQL GROUP BY.
For example: Group by API name operation to view the performance of each API. Common dimensional and each view (ViewName) support exclusive dimensional, which can be used as aggregation dimension. For details, see [APM protocol standards](https://www.tencentcloud.com/document/product/248/101681?from_cn_redirect=1).
5. Granularity (Period) 
This parameter determines whether time slice aggregation is required.
-Period = 1: Time series mode: In the returned result, aggregation is performed by time slice. The time series (TimeSerial) and data sequence (DataSerial) have a one-to-one correspondence, representing aggregation results for specific time slices. Time series mode is mainly used to show time trend charts.
-Period = 0: Summarize mode. In the returned result, the data sequence (DataSerial) only contains a unique value, representing the aggregated data for the entire time interval.
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
     * Query SQL injection details
     * @param {DescribeApmSQLInjectionDetailRequest} req
     * @param {function(string, DescribeApmSQLInjectionDetailResponse):void} cb
     * @public
     */
    DescribeApmSQLInjectionDetail(req, cb) {
        let resp = new DescribeApmSQLInjectionDetailResponse();
        this.request("DescribeApmSQLInjectionDetail", req, resp, cb);
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
     * Query all vulnerability information of the user
     * @param {DescribeApmAllVulCountRequest} req
     * @param {function(string, DescribeApmAllVulCountResponse):void} cb
     * @public
     */
    DescribeApmAllVulCount(req, cb) {
        let resp = new DescribeApmAllVulCountResponse();
        this.request("DescribeApmAllVulCount", req, resp, cb);
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
     * Query all vulnerability information of the user
     * @param {DescribeOPRAllVulCountRequest} req
     * @param {function(string, DescribeOPRAllVulCountResponse):void} cb
     * @public
     */
    DescribeOPRAllVulCount(req, cb) {
        let resp = new DescribeOPRAllVulCountResponse();
        this.request("DescribeOPRAllVulCount", req, resp, cb);
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

    /**
     * Query vulnerability metrics
     * @param {DescribeApmVulnerabilityCountRequest} req
     * @param {function(string, DescribeApmVulnerabilityCountResponse):void} cb
     * @public
     */
    DescribeApmVulnerabilityCount(req, cb) {
        let resp = new DescribeApmVulnerabilityCountResponse();
        this.request("DescribeApmVulnerabilityCount", req, resp, cb);
    }


}
module.exports = ApmClient;
