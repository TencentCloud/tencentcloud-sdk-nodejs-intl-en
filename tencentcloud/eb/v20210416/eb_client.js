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
const Transform = models.Transform;
const ListConnectionsResponse = models.ListConnectionsResponse;
const ESTargetParams = models.ESTargetParams;
const GetEventBusResponse = models.GetEventBusResponse;
const RetryPolicy = models.RetryPolicy;
const CkafkaTargetParams = models.CkafkaTargetParams;
const ListConnectionsRequest = models.ListConnectionsRequest;
const DeleteRuleRequest = models.DeleteRuleRequest;
const UpdateRuleResponse = models.UpdateRuleResponse;
const CreateTargetRequest = models.CreateTargetRequest;
const DeleteTargetResponse = models.DeleteTargetResponse;
const DescribeLogTagValueRequest = models.DescribeLogTagValueRequest;
const TargetBrief = models.TargetBrief;
const DTSParams = models.DTSParams;
const ListRulesResponse = models.ListRulesResponse;
const CreateTargetResponse = models.CreateTargetResponse;
const CheckRuleRequest = models.CheckRuleRequest;
const GetRuleResponse = models.GetRuleResponse;
const CreateConnectionResponse = models.CreateConnectionResponse;
const EventBus = models.EventBus;
const ListTargetsRequest = models.ListTargetsRequest;
const Transformation = models.Transformation;
const Target = models.Target;
const ListRulesRequest = models.ListRulesRequest;
const SCFParams = models.SCFParams;
const DeadLetterConfig = models.DeadLetterConfig;
const LogFilters = models.LogFilters;
const UpdateEventBusRequest = models.UpdateEventBusRequest;
const CreateEventBusRequest = models.CreateEventBusRequest;
const UpdateRuleRequest = models.UpdateRuleRequest;
const CreateRuleRequest = models.CreateRuleRequest;
const TextParams = models.TextParams;
const DeleteConnectionResponse = models.DeleteConnectionResponse;
const DeleteRuleResponse = models.DeleteRuleResponse;
const GetTransformationResponse = models.GetTransformationResponse;
const Rule = models.Rule;
const CreateTransformationRequest = models.CreateTransformationRequest;
const EtlFilter = models.EtlFilter;
const SearchLogResponse = models.SearchLogResponse;
const CheckTransformationResponse = models.CheckTransformationResponse;
const ListTargetsResponse = models.ListTargetsResponse;
const ListEventBusesResponse = models.ListEventBusesResponse;
const CheckRuleResponse = models.CheckRuleResponse;
const ConnectionDescription = models.ConnectionDescription;
const SearchLogResult = models.SearchLogResult;
const CkafkaDeliveryParams = models.CkafkaDeliveryParams;
const UpdateTargetResponse = models.UpdateTargetResponse;
const CreateConnectionRequest = models.CreateConnectionRequest;
const DeleteEventBusRequest = models.DeleteEventBusRequest;
const ListEventBusesRequest = models.ListEventBusesRequest;
const CreateTransformationResponse = models.CreateTransformationResponse;
const ConnectionBrief = models.ConnectionBrief;
const Filter = models.Filter;
const Connection = models.Connection;
const DeleteEventBusResponse = models.DeleteEventBusResponse;
const GetTransformationRequest = models.GetTransformationRequest;
const CreateEventBusResponse = models.CreateEventBusResponse;
const DeleteConnectionRequest = models.DeleteConnectionRequest;
const UpdateTransformationRequest = models.UpdateTransformationRequest;
const CreateRuleResponse = models.CreateRuleResponse;
const TargetDescription = models.TargetDescription;
const DeleteTransformationResponse = models.DeleteTransformationResponse;
const DeleteTransformationRequest = models.DeleteTransformationRequest;
const Extraction = models.Extraction;
const UpdateConnectionRequest = models.UpdateConnectionRequest;
const GetEventBusRequest = models.GetEventBusRequest;
const DeleteTargetRequest = models.DeleteTargetRequest;
const CkafkaParams = models.CkafkaParams;
const DescribeLogTagValueResponse = models.DescribeLogTagValueResponse;
const UpdateTransformationResponse = models.UpdateTransformationResponse;
const OutputStructParam = models.OutputStructParam;
const SearchLogRequest = models.SearchLogRequest;
const CheckTransformationRequest = models.CheckTransformationRequest;
const UpdateConnectionResponse = models.UpdateConnectionResponse;
const GetRuleRequest = models.GetRuleRequest;
const UpdateTargetRequest = models.UpdateTargetRequest;
const LogFilter = models.LogFilter;
const UpdateEventBusResponse = models.UpdateEventBusResponse;
const APIGWParams = models.APIGWParams;


/**
 * eb client
 * @class
 */
class EbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("eb.intl.tencentcloudapi.com", "2021-04-16", credential, region, profile);
    }
    
    /**
     * This API is used to delete an event bus.
     * @param {DeleteEventBusRequest} req
     * @param {function(string, DeleteEventBusResponse):void} cb
     * @public
     */
    DeleteEventBus(req, cb) {
        let resp = new DeleteEventBusResponse();
        this.request("DeleteEventBus", req, resp, cb);
    }

    /**
     * This API is used to create a transformer.
     * @param {CreateTransformationRequest} req
     * @param {function(string, CreateTransformationResponse):void} cb
     * @public
     */
    CreateTransformation(req, cb) {
        let resp = new CreateTransformationResponse();
        this.request("CreateTransformation", req, resp, cb);
    }

    /**
     * This API is used to create an event bus.
     * @param {CreateEventBusRequest} req
     * @param {function(string, CreateEventBusResponse):void} cb
     * @public
     */
    CreateEventBus(req, cb) {
        let resp = new CreateEventBusResponse();
        this.request("CreateEventBus", req, resp, cb);
    }

    /**
     * This API is used to create an event rule.
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }

    /**
     * This API is used to delete a delivery target.
     * @param {DeleteTargetRequest} req
     * @param {function(string, DeleteTargetResponse):void} cb
     * @public
     */
    DeleteTarget(req, cb) {
        let resp = new DeleteTargetResponse();
        this.request("DeleteTarget", req, resp, cb);
    }

    /**
     * This API is used to get the list delivery targets.
     * @param {ListTargetsRequest} req
     * @param {function(string, ListTargetsResponse):void} cb
     * @public
     */
    ListTargets(req, cb) {
        let resp = new ListTargetsResponse();
        this.request("ListTargets", req, resp, cb);
    }

    /**
     * This API is used to check a rule.
     * @param {CheckRuleRequest} req
     * @param {function(string, CheckRuleResponse):void} cb
     * @public
     */
    CheckRule(req, cb) {
        let resp = new CheckRuleResponse();
        this.request("CheckRule", req, resp, cb);
    }

    /**
     * This API is used to update a delivery target.
     * @param {UpdateTargetRequest} req
     * @param {function(string, UpdateTargetResponse):void} cb
     * @public
     */
    UpdateTarget(req, cb) {
        let resp = new UpdateTargetResponse();
        this.request("UpdateTarget", req, resp, cb);
    }

    /**
     * This API is used to get the details of a transformer.
     * @param {GetTransformationRequest} req
     * @param {function(string, GetTransformationResponse):void} cb
     * @public
     */
    GetTransformation(req, cb) {
        let resp = new GetTransformationResponse();
        this.request("GetTransformation", req, resp, cb);
    }

    /**
     * This API is used to get the list of event rules.
     * @param {ListRulesRequest} req
     * @param {function(string, ListRulesResponse):void} cb
     * @public
     */
    ListRules(req, cb) {
        let resp = new ListRulesResponse();
        this.request("ListRules", req, resp, cb);
    }

    /**
     * This API is used to delete an event rule.
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        let resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }

    /**
     * This API is used to update an event bus.
     * @param {UpdateEventBusRequest} req
     * @param {function(string, UpdateEventBusResponse):void} cb
     * @public
     */
    UpdateEventBus(req, cb) {
        let resp = new UpdateEventBusResponse();
        this.request("UpdateEventBus", req, resp, cb);
    }

    /**
     * This API is used to create a delivery target.
     * @param {CreateTargetRequest} req
     * @param {function(string, CreateTargetResponse):void} cb
     * @public
     */
    CreateTarget(req, cb) {
        let resp = new CreateTargetResponse();
        this.request("CreateTarget", req, resp, cb);
    }

    /**
     * This API is used to update an event rule.
     * @param {UpdateRuleRequest} req
     * @param {function(string, UpdateRuleResponse):void} cb
     * @public
     */
    UpdateRule(req, cb) {
        let resp = new UpdateRuleResponse();
        this.request("UpdateRule", req, resp, cb);
    }

    /**
     * This API is used to query log searching metric values.
     * @param {DescribeLogTagValueRequest} req
     * @param {function(string, DescribeLogTagValueResponse):void} cb
     * @public
     */
    DescribeLogTagValue(req, cb) {
        let resp = new DescribeLogTagValueResponse();
        this.request("DescribeLogTagValue", req, resp, cb);
    }

    /**
     * This API is used to delete a transformer.
     * @param {DeleteTransformationRequest} req
     * @param {function(string, DeleteTransformationResponse):void} cb
     * @public
     */
    DeleteTransformation(req, cb) {
        let resp = new DeleteTransformationResponse();
        this.request("DeleteTransformation", req, resp, cb);
    }

    /**
     * This API is used to create an event connector.
     * @param {CreateConnectionRequest} req
     * @param {function(string, CreateConnectionResponse):void} cb
     * @public
     */
    CreateConnection(req, cb) {
        let resp = new CreateConnectionResponse();
        this.request("CreateConnection", req, resp, cb);
    }

    /**
     * This API is used to get the details of an event rule.
     * @param {GetRuleRequest} req
     * @param {function(string, GetRuleResponse):void} cb
     * @public
     */
    GetRule(req, cb) {
        let resp = new GetRuleResponse();
        this.request("GetRule", req, resp, cb);
    }

    /**
     * This API is used to query logs. 
     * @param {SearchLogRequest} req
     * @param {function(string, SearchLogResponse):void} cb
     * @public
     */
    SearchLog(req, cb) {
        let resp = new SearchLogResponse();
        this.request("SearchLog", req, resp, cb);
    }

    /**
     * This API is used to delete an event connector.
     * @param {DeleteConnectionRequest} req
     * @param {function(string, DeleteConnectionResponse):void} cb
     * @public
     */
    DeleteConnection(req, cb) {
        let resp = new DeleteConnectionResponse();
        this.request("DeleteConnection", req, resp, cb);
    }

    /**
     * This API is used to get the list of event buses.
     * @param {ListEventBusesRequest} req
     * @param {function(string, ListEventBusesResponse):void} cb
     * @public
     */
    ListEventBuses(req, cb) {
        let resp = new ListEventBusesResponse();
        this.request("ListEventBuses", req, resp, cb);
    }

    /**
     * This API is used to get the details of an event bus.
     * @param {GetEventBusRequest} req
     * @param {function(string, GetEventBusResponse):void} cb
     * @public
     */
    GetEventBus(req, cb) {
        let resp = new GetEventBusResponse();
        this.request("GetEventBus", req, resp, cb);
    }

    /**
     * This API is used to update a transformer.
     * @param {UpdateTransformationRequest} req
     * @param {function(string, UpdateTransformationResponse):void} cb
     * @public
     */
    UpdateTransformation(req, cb) {
        let resp = new UpdateTransformationResponse();
        this.request("UpdateTransformation", req, resp, cb);
    }

    /**
     * This API is used to test rules and data on the ETL configuration page.
     * @param {CheckTransformationRequest} req
     * @param {function(string, CheckTransformationResponse):void} cb
     * @public
     */
    CheckTransformation(req, cb) {
        let resp = new CheckTransformationResponse();
        this.request("CheckTransformation", req, resp, cb);
    }

    /**
     * This API is used to get the list of event connectors.
     * @param {ListConnectionsRequest} req
     * @param {function(string, ListConnectionsResponse):void} cb
     * @public
     */
    ListConnections(req, cb) {
        let resp = new ListConnectionsResponse();
        this.request("ListConnections", req, resp, cb);
    }

    /**
     * This API is used to update an event connector.
     * @param {UpdateConnectionRequest} req
     * @param {function(string, UpdateConnectionResponse):void} cb
     * @public
     */
    UpdateConnection(req, cb) {
        let resp = new UpdateConnectionResponse();
        this.request("UpdateConnection", req, resp, cb);
    }


}
module.exports = EbClient;
