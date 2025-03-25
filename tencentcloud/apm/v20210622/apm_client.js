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
const SpanLog = models.SpanLog;
const ModifyApmInstanceRequest = models.ModifyApmInstanceRequest;
const ApmInstanceDetail = models.ApmInstanceDetail;
const CreateApmInstanceRequest = models.CreateApmInstanceRequest;
const ModifyGeneralApmApplicationConfigRequest = models.ModifyGeneralApmApplicationConfigRequest;
const DescribeServiceOverviewResponse = models.DescribeServiceOverviewResponse;
const QueryMetricItem = models.QueryMetricItem;
const TerminateApmInstanceRequest = models.TerminateApmInstanceRequest;
const DescribeApmInstancesResponse = models.DescribeApmInstancesResponse;
const Instrument = models.Instrument;
const DescribeTagValuesResponse = models.DescribeTagValuesResponse;
const Span = models.Span;
const ApmAgentInfo = models.ApmAgentInfo;
const DescribeGeneralSpanListResponse = models.DescribeGeneralSpanListResponse;
const ApmMetricRecord = models.ApmMetricRecord;
const DescribeServiceOverviewRequest = models.DescribeServiceOverviewRequest;
const DescribeApmAgentResponse = models.DescribeApmAgentResponse;
const DescribeTagValuesRequest = models.DescribeTagValuesRequest;
const ApmField = models.ApmField;
const Line = models.Line;
const ApmApplicationConfigView = models.ApmApplicationConfigView;
const ApmTag = models.ApmTag;
const APMKVItem = models.APMKVItem;
const OrderBy = models.OrderBy;
const DescribeMetricRecordsResponse = models.DescribeMetricRecordsResponse;
const DescribeGeneralOTSpanListResponse = models.DescribeGeneralOTSpanListResponse;
const DescribeGeneralSpanListRequest = models.DescribeGeneralSpanListRequest;
const Filter = models.Filter;
const APMKV = models.APMKV;
const DescribeGeneralOTSpanListRequest = models.DescribeGeneralOTSpanListRequest;
const DescribeApmAgentRequest = models.DescribeApmAgentRequest;
const DescribeMetricRecordsRequest = models.DescribeMetricRecordsRequest;
const DescribeGeneralApmApplicationConfigResponse = models.DescribeGeneralApmApplicationConfigResponse;
const DescribeGeneralMetricDataRequest = models.DescribeGeneralMetricDataRequest;
const CreateApmInstanceResponse = models.CreateApmInstanceResponse;
const SpanReference = models.SpanReference;
const SpanProcess = models.SpanProcess;
const DescribeGeneralApmApplicationConfigRequest = models.DescribeGeneralApmApplicationConfigRequest;
const ModifyApmInstanceResponse = models.ModifyApmInstanceResponse;
const GeneralFilter = models.GeneralFilter;
const DescribeApmInstancesRequest = models.DescribeApmInstancesRequest;
const SpanTag = models.SpanTag;
const DescribeGeneralMetricDataResponse = models.DescribeGeneralMetricDataResponse;
const ModifyGeneralApmApplicationConfigResponse = models.ModifyGeneralApmApplicationConfigResponse;
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
