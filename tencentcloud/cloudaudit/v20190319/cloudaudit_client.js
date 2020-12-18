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
const DeleteRecorderResponse = models.DeleteRecorderResponse;
const DescribeDiscoveredResourceResponse = models.DescribeDiscoveredResourceResponse;
const ConfigurationItems = models.ConfigurationItems;
const CreateRecorderResponse = models.CreateRecorderResponse;
const SupportResourceType = models.SupportResourceType;
const DescribeRecorderResponse = models.DescribeRecorderResponse;
const UpdateRecorderRequest = models.UpdateRecorderRequest;
const UpdateRecorderResponse = models.UpdateRecorderResponse;
const DescribeDiscoveredResourceRequest = models.DescribeDiscoveredResourceRequest;
const ListDiscoveredResourcesResponse = models.ListDiscoveredResourcesResponse;
const ListSupportResourceTypesRequest = models.ListSupportResourceTypesRequest;
const ListSupportResourceTypesResponse = models.ListSupportResourceTypesResponse;
const ListDiscoveredResourcesRequest = models.ListDiscoveredResourcesRequest;
const DescribeRecorderRequest = models.DescribeRecorderRequest;
const CreateRecorderRequest = models.CreateRecorderRequest;
const GetConfigurationItemsRequest = models.GetConfigurationItemsRequest;
const GetConfigurationItemsResponse = models.GetConfigurationItemsResponse;
const DeleteRecorderRequest = models.DeleteRecorderRequest;
const RecordResourceType = models.RecordResourceType;
const Resources = models.Resources;
const RelatedEvent = models.RelatedEvent;


/**
 * cloudaudit client
 * @class
 */
class CloudauditClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cloudaudit.tencentcloudapi.com", "2019-03-19", credential, region, profile);
    }
    
    /**
     * This API is used to create resource recorders to detect and record resource configuration changes.
     * @param {CreateRecorderRequest} req
     * @param {function(string, CreateRecorderResponse):void} cb
     * @public
     */
    CreateRecorder(req, cb) {
        let resp = new CreateRecorderResponse();
        this.request("CreateRecorder", req, resp, cb);
    }

    /**
     * This API is used to get the list of resource configuration items and display resource configuration changes in chronological order.
     * @param {GetConfigurationItemsRequest} req
     * @param {function(string, GetConfigurationItemsResponse):void} cb
     * @public
     */
    GetConfigurationItems(req, cb) {
        let resp = new GetConfigurationItemsResponse();
        this.request("GetConfigurationItems", req, resp, cb);
    }

    /**
     * This API is used to view the list of discovered resources.
     * @param {ListDiscoveredResourcesRequest} req
     * @param {function(string, ListDiscoveredResourcesResponse):void} cb
     * @public
     */
    ListDiscoveredResources(req, cb) {
        let resp = new ListDiscoveredResourcesResponse();
        this.request("ListDiscoveredResources", req, resp, cb);
    }

    /**
     * This API is used to view the basic information of discovered resources.
     * @param {DescribeDiscoveredResourceRequest} req
     * @param {function(string, DescribeDiscoveredResourceResponse):void} cb
     * @public
     */
    DescribeDiscoveredResource(req, cb) {
        let resp = new DescribeDiscoveredResourceResponse();
        this.request("DescribeDiscoveredResource", req, resp, cb);
    }

    /**
     * This API is used to delete resource recorders. After deletion, resource configuration changes will not be recorded.
     * @param {DeleteRecorderRequest} req
     * @param {function(string, DeleteRecorderResponse):void} cb
     * @public
     */
    DeleteRecorder(req, cb) {
        let resp = new DeleteRecorderResponse();
        this.request("DeleteRecorder", req, resp, cb);
    }

    /**
     * This API is used to modify the resources to monitor, recorder name, and other recorder configurations.
     * @param {UpdateRecorderRequest} req
     * @param {function(string, UpdateRecorderResponse):void} cb
     * @public
     */
    UpdateRecorder(req, cb) {
        let resp = new UpdateRecorderResponse();
        this.request("UpdateRecorder", req, resp, cb);
    }

    /**
     * This API is used to display current configurations and status of a recorder.
     * @param {DescribeRecorderRequest} req
     * @param {function(string, DescribeRecorderResponse):void} cb
     * @public
     */
    DescribeRecorder(req, cb) {
        let resp = new DescribeRecorderResponse();
        this.request("DescribeRecorder", req, resp, cb);
    }

    /**
     * This API is used to query the list of all CFA supported resource types.
     * @param {ListSupportResourceTypesRequest} req
     * @param {function(string, ListSupportResourceTypesResponse):void} cb
     * @public
     */
    ListSupportResourceTypes(req, cb) {
        let resp = new ListSupportResourceTypesResponse();
        this.request("ListSupportResourceTypes", req, resp, cb);
    }


}
module.exports = CloudauditClient;
