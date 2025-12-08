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
const BaselineConfigItem = models.BaselineConfigItem;
const UpdateAccountFactoryBaselineResponse = models.UpdateAccountFactoryBaselineResponse;
const BaselineStepTaskInfo = models.BaselineStepTaskInfo;
const ListAccountFactoryBaselineItemsRequest = models.ListAccountFactoryBaselineItemsRequest;
const DependsOnItem = models.DependsOnItem;
const BatchApplyAccountBaselinesResponse = models.BatchApplyAccountBaselinesResponse;
const UpdateAccountFactoryBaselineRequest = models.UpdateAccountFactoryBaselineRequest;
const ListDeployStepTasksRequest = models.ListDeployStepTasksRequest;
const AccountFactoryItem = models.AccountFactoryItem;
const BatchApplyAccountBaselinesRequest = models.BatchApplyAccountBaselinesRequest;
const GetAccountFactoryBaselineResponse = models.GetAccountFactoryBaselineResponse;
const ListAccountFactoryBaselineItemsResponse = models.ListAccountFactoryBaselineItemsResponse;
const GetAccountFactoryBaselineRequest = models.GetAccountFactoryBaselineRequest;
const BaselineInfoItem = models.BaselineInfoItem;
const ListDeployStepTasksResponse = models.ListDeployStepTasksResponse;


/**
 * controlcenter client
 * @class
 */
class ControlcenterClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("controlcenter.intl.tencentcloudapi.com", "2023-01-10", credential, region, profile);
    }
    
    /**
     * This API is used to retrieve the application history of a certain baseline item.
     * @param {ListDeployStepTasksRequest} req
     * @param {function(string, ListDeployStepTasksResponse):void} cb
     * @public
     */
    ListDeployStepTasks(req, cb) {
        let resp = new ListDeployStepTasksResponse();
        this.request("ListDeployStepTasks", req, resp, cb);
    }

    /**
     * This API is used to retrieve user baseline configuration data.
     * @param {GetAccountFactoryBaselineRequest} req
     * @param {function(string, GetAccountFactoryBaselineResponse):void} cb
     * @public
     */
    GetAccountFactoryBaseline(req, cb) {
        let resp = new GetAccountFactoryBaselineResponse();
        this.request("GetAccountFactoryBaseline", req, resp, cb);
    }

    /**
     * This API is used to update the current baseline item configuration of a user. The baseline configuration will be overwritten with the current configuration. When adding new baseline items, the newly-added baseline configuration needs to be added to the existing configuration. When deleting baseline items, the deleted baseline configuration needs to be removed from the existing configuration, then save the latest baseline configuration.
     * @param {UpdateAccountFactoryBaselineRequest} req
     * @param {function(string, UpdateAccountFactoryBaselineResponse):void} cb
     * @public
     */
    UpdateAccountFactoryBaseline(req, cb) {
        let resp = new UpdateAccountFactoryBaselineResponse();
        this.request("UpdateAccountFactoryBaseline", req, resp, cb);
    }

    /**
     * This API is used to apply baselines to existing accounts in batches.
     * @param {BatchApplyAccountBaselinesRequest} req
     * @param {function(string, BatchApplyAccountBaselinesResponse):void} cb
     * @public
     */
    BatchApplyAccountBaselines(req, cb) {
        let resp = new BatchApplyAccountBaselinesResponse();
        this.request("BatchApplyAccountBaselines", req, resp, cb);
    }

    /**
     * This API is used to obtain account factory system baseline items.
     * @param {ListAccountFactoryBaselineItemsRequest} req
     * @param {function(string, ListAccountFactoryBaselineItemsResponse):void} cb
     * @public
     */
    ListAccountFactoryBaselineItems(req, cb) {
        let resp = new ListAccountFactoryBaselineItemsResponse();
        this.request("ListAccountFactoryBaselineItems", req, resp, cb);
    }


}
module.exports = ControlcenterClient;
