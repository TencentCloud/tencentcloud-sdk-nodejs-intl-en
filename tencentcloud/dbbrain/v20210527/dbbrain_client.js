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
const DescribeRedisTopKeyPrefixListRequest = models.DescribeRedisTopKeyPrefixListRequest;
const DescribeSlowLogUserHostStatsRequest = models.DescribeSlowLogUserHostStatsRequest;
const DescribeTopSpaceSchemasResponse = models.DescribeTopSpaceSchemasResponse;
const CreateProxySessionKillTaskResponse = models.CreateProxySessionKillTaskResponse;
const MySqlProcess = models.MySqlProcess;
const DescribeRedisTopKeyPrefixListResponse = models.DescribeRedisTopKeyPrefixListResponse;
const SchemaSpaceData = models.SchemaSpaceData;
const InstanceConfs = models.InstanceConfs;
const DescribeDiagDBInstancesRequest = models.DescribeDiagDBInstancesRequest;
const DescribeUserSqlAdviceResponse = models.DescribeUserSqlAdviceResponse;
const InstanceInfo = models.InstanceInfo;
const DescribeSlowLogUserHostStatsResponse = models.DescribeSlowLogUserHostStatsResponse;
const DescribeDBDiagEventsRequest = models.DescribeDBDiagEventsRequest;
const DiagHistoryEventItem = models.DiagHistoryEventItem;
const SlowLogHost = models.SlowLogHost;
const RedisPreKeySpaceData = models.RedisPreKeySpaceData;
const DescribeDBDiagEventsResponse = models.DescribeDBDiagEventsResponse;
const DescribeTopSpaceSchemasRequest = models.DescribeTopSpaceSchemasRequest;
const DescribeProxySessionKillTasksRequest = models.DescribeProxySessionKillTasksRequest;
const DescribeMySqlProcessListResponse = models.DescribeMySqlProcessListResponse;
const DescribeDiagDBInstancesResponse = models.DescribeDiagDBInstancesResponse;
const DescribeUserSqlAdviceRequest = models.DescribeUserSqlAdviceRequest;
const CreateProxySessionKillTaskRequest = models.CreateProxySessionKillTaskRequest;
const DescribeMySqlProcessListRequest = models.DescribeMySqlProcessListRequest;
const TaskInfo = models.TaskInfo;
const DescribeProxySessionKillTasksResponse = models.DescribeProxySessionKillTasksResponse;


/**
 * dbbrain client
 * @class
 */
class DbbrainClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dbbrain.tencentcloudapi.com", "2021-05-27", credential, region, profile);
    }
    
    /**
     * This API is used to get the statistical distribution chart of slow log source addresses.
     * @param {DescribeSlowLogUserHostStatsRequest} req
     * @param {function(string, DescribeSlowLogUserHostStatsResponse):void} cb
     * @public
     */
    DescribeSlowLogUserHostStats(req, cb) {
        let resp = new DescribeSlowLogUserHostStatsResponse();
        this.request("DescribeSlowLogUserHostStats", req, resp, cb);
    }

    /**
     * This API is used to get SQL statement optimization suggestions. It is free of charge for a limited time and will be charged after DBbrain is commercialized.
     * @param {DescribeUserSqlAdviceRequest} req
     * @param {function(string, DescribeUserSqlAdviceResponse):void} cb
     * @public
     */
    DescribeUserSqlAdvice(req, cb) {
        let resp = new DescribeUserSqlAdviceResponse();
        this.request("DescribeUserSqlAdvice", req, resp, cb);
    }

    /**
     * This API is used to get the real-time space statistics of top databases of an instance. The returned results are sorted by size by default.
     * @param {DescribeTopSpaceSchemasRequest} req
     * @param {function(string, DescribeTopSpaceSchemasResponse):void} cb
     * @public
     */
    DescribeTopSpaceSchemas(req, cb) {
        let resp = new DescribeTopSpaceSchemasResponse();
        this.request("DescribeTopSpaceSchemas", req, resp, cb);
    }

    /**
     * This API is used to query the list of top key prefixes for Redis instances.
     * @param {DescribeRedisTopKeyPrefixListRequest} req
     * @param {function(string, DescribeRedisTopKeyPrefixListResponse):void} cb
     * @public
     */
    DescribeRedisTopKeyPrefixList(req, cb) {
        let resp = new DescribeRedisTopKeyPrefixListResponse();
        this.request("DescribeRedisTopKeyPrefixList", req, resp, cb);
    }

    /**
     * This API is used to create an async task of killing all proxy node connection sessions and is currently supported only for Redis. The async task ID is the returned value, which can be passed to the API `DescribeProxySessionKillTasks` as a parameter to query the execution status of the session killing task.
     * @param {CreateProxySessionKillTaskRequest} req
     * @param {function(string, CreateProxySessionKillTaskResponse):void} cb
     * @public
     */
    CreateProxySessionKillTask(req, cb) {
        let resp = new CreateProxySessionKillTaskResponse();
        this.request("CreateProxySessionKillTask", req, resp, cb);
    }

    /**
     * This API is used to query the real-time thread list of a relational database.
     * @param {DescribeMySqlProcessListRequest} req
     * @param {function(string, DescribeMySqlProcessListResponse):void} cb
     * @public
     */
    DescribeMySqlProcessList(req, cb) {
        let resp = new DescribeMySqlProcessListResponse();
        this.request("DescribeMySqlProcessList", req, resp, cb);
    }

    /**
     * This API is used to get the instance information list. Please always select Guangzhou for `Region`.
     * @param {DescribeDiagDBInstancesRequest} req
     * @param {function(string, DescribeDiagDBInstancesResponse):void} cb
     * @public
     */
    DescribeDiagDBInstances(req, cb) {
        let resp = new DescribeDiagDBInstancesResponse();
        this.request("DescribeDiagDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the result of the session killing task executed by the Redis proxy node. The async task ID (an input parameter) is obtained after the API `CreateProxySessionKillTask` is successfully called. Currently, the only valid value of `product` is `redis`.
     * @param {DescribeProxySessionKillTasksRequest} req
     * @param {function(string, DescribeProxySessionKillTasksResponse):void} cb
     * @public
     */
    DescribeProxySessionKillTasks(req, cb) {
        let resp = new DescribeProxySessionKillTasksResponse();
        this.request("DescribeProxySessionKillTasks", req, resp, cb);
    }

    /**
     * This API is used to obtain the diagnosis event list in a specified time period by risk level, instance ID, etc.
     * @param {DescribeDBDiagEventsRequest} req
     * @param {function(string, DescribeDBDiagEventsResponse):void} cb
     * @public
     */
    DescribeDBDiagEvents(req, cb) {
        let resp = new DescribeDBDiagEventsResponse();
        this.request("DescribeDBDiagEvents", req, resp, cb);
    }


}
module.exports = DbbrainClient;
