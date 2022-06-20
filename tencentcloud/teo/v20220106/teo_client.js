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
const CreatePurgeTaskResponse = models.CreatePurgeTaskResponse;
const DownloadL7LogsRequest = models.DownloadL7LogsRequest;
const CreatePurgeTaskRequest = models.CreatePurgeTaskRequest;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const CreatePrefetchTaskResponse = models.CreatePrefetchTaskResponse;
const Zone = models.Zone;
const DownloadL7LogsResponse = models.DownloadL7LogsResponse;
const DescribePrefetchTasksResponse = models.DescribePrefetchTasksResponse;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DescribeZonesResponse = models.DescribeZonesResponse;
const Header = models.Header;
const FailReason = models.FailReason;
const Task = models.Task;
const CreatePrefetchTaskRequest = models.CreatePrefetchTaskRequest;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const DescribePrefetchTasksRequest = models.DescribePrefetchTasksRequest;
const ZoneFilter = models.ZoneFilter;
const L7OfflineLog = models.L7OfflineLog;


/**
 * teo client
 * @class
 */
class TeoClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("teo.tencentcloudapi.com", "2022-01-06", credential, region, profile);
    }
    
    /**
     * This API is used to query layer-7 logs.
     * @param {DownloadL7LogsRequest} req
     * @param {function(string, DownloadL7LogsResponse):void} cb
     * @public
     */
    DownloadL7Logs(req, cb) {
        let resp = new DownloadL7LogsResponse();
        this.request("DownloadL7Logs", req, resp, cb);
    }

    /**
     * This API is used to create a cache purging task.
     * @param {CreatePurgeTaskRequest} req
     * @param {function(string, CreatePurgeTaskResponse):void} cb
     * @public
     */
    CreatePurgeTask(req, cb) {
        let resp = new CreatePurgeTaskResponse();
        this.request("CreatePurgeTask", req, resp, cb);
    }

    /**
     * This API is used to query the cache purging history.
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }

    /**
     * This API is used to query the pre-warming task status.
     * @param {DescribePrefetchTasksRequest} req
     * @param {function(string, DescribePrefetchTasksResponse):void} cb
     * @public
     */
    DescribePrefetchTasks(req, cb) {
        let resp = new DescribePrefetchTasksResponse();
        this.request("DescribePrefetchTasks", req, resp, cb);
    }

    /**
     * This API is used to create a pre-warming task.
     * @param {CreatePrefetchTaskRequest} req
     * @param {function(string, CreatePrefetchTaskResponse):void} cb
     * @public
     */
    CreatePrefetchTask(req, cb) {
        let resp = new CreatePrefetchTaskResponse();
        this.request("CreatePrefetchTask", req, resp, cb);
    }

    /**
     * This API is used to query the list of user sites.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }


}
module.exports = TeoClient;
