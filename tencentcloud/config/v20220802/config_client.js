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
const ResourceListInfo = models.ResourceListInfo;
const ListAggregateDiscoveredResourcesRequest = models.ListAggregateDiscoveredResourcesRequest;
const SourceConditionForManage = models.SourceConditionForManage;
const ListAggregateConfigRulesRequest = models.ListAggregateConfigRulesRequest;
const DescribeDiscoveredResourceRequest = models.DescribeDiscoveredResourceRequest;
const PutEvaluationsResponse = models.PutEvaluationsResponse;
const Evaluation = models.Evaluation;
const DescribeDiscoveredResourceResponse = models.DescribeDiscoveredResourceResponse;
const InputParameterForManage = models.InputParameterForManage;
const ListConfigRulesResponse = models.ListConfigRulesResponse;
const ListDiscoveredResourcesResponse = models.ListDiscoveredResourcesResponse;
const ListDiscoveredResourcesRequest = models.ListDiscoveredResourcesRequest;
const Annotation = models.Annotation;
const ConfigRule = models.ConfigRule;
const TriggerType = models.TriggerType;
const PutEvaluationsRequest = models.PutEvaluationsRequest;
const Filter = models.Filter;
const ListAggregateConfigRulesResponse = models.ListAggregateConfigRulesResponse;
const ListAggregateDiscoveredResourcesResponse = models.ListAggregateDiscoveredResourcesResponse;
const ListConfigRulesRequest = models.ListConfigRulesRequest;
const AggregateResourceInfo = models.AggregateResourceInfo;
const Tag = models.Tag;
const InputParameter = models.InputParameter;


/**
 * config client
 * @class
 */
class ConfigClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("config.intl.tencentcloudapi.com", "2022-08-02", credential, region, profile);
    }
    
    /**
     * This API is used to get the account group rule list.
     * @param {ListAggregateConfigRulesRequest} req
     * @param {function(string, ListAggregateConfigRulesResponse):void} cb
     * @public
     */
    ListAggregateConfigRules(req, cb) {
        let resp = new ListAggregateConfigRulesResponse();
        this.request("ListAggregateConfigRules", req, resp, cb);
    }

    /**
     * This API is used to get the resource list.
     * @param {ListDiscoveredResourcesRequest} req
     * @param {function(string, ListDiscoveredResourcesResponse):void} cb
     * @public
     */
    ListDiscoveredResources(req, cb) {
        let resp = new ListDiscoveredResourcesResponse();
        this.request("ListDiscoveredResources", req, resp, cb);
    }

    /**
     * This API is used to get the rule list.
     * @param {ListConfigRulesRequest} req
     * @param {function(string, ListConfigRulesResponse):void} cb
     * @public
     */
    ListConfigRules(req, cb) {
        let resp = new ListConfigRulesResponse();
        this.request("ListConfigRules", req, resp, cb);
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
     * Account Group access the list of resources.
     * @param {ListAggregateDiscoveredResourcesRequest} req
     * @param {function(string, ListAggregateDiscoveredResourcesResponse):void} cb
     * @public
     */
    ListAggregateDiscoveredResources(req, cb) {
        let resp = new ListAggregateDiscoveredResourcesResponse();
        this.request("ListAggregateDiscoveredResources", req, resp, cb);
    }

    /**
     * This API is used to report custom rule evaluation results.
     * @param {PutEvaluationsRequest} req
     * @param {function(string, PutEvaluationsResponse):void} cb
     * @public
     */
    PutEvaluations(req, cb) {
        let resp = new PutEvaluationsResponse();
        this.request("PutEvaluations", req, resp, cb);
    }


}
module.exports = ConfigClient;
