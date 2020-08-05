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
const DescribeTopSpaceTableTimeSeriesResponse = models.DescribeTopSpaceTableTimeSeriesResponse;
const DescribeDBDiagHistoryResponse = models.DescribeDBDiagHistoryResponse;
const DescribeDBSpaceStatusRequest = models.DescribeDBSpaceStatusRequest;
const DescribeSlowLogTimeSeriesStatsResponse = models.DescribeSlowLogTimeSeriesStatsResponse;
const TimeSlice = models.TimeSlice;
const MonitorFloatMetric = models.MonitorFloatMetric;
const MonitorMetric = models.MonitorMetric;
const TableSpaceTimeSeries = models.TableSpaceTimeSeries;
const DescribeTopSpaceTablesRequest = models.DescribeTopSpaceTablesRequest;
const DescribeSlowLogTimeSeriesStatsRequest = models.DescribeSlowLogTimeSeriesStatsRequest;
const DescribeDBDiagEventRequest = models.DescribeDBDiagEventRequest;
const DescribeDBSpaceStatusResponse = models.DescribeDBSpaceStatusResponse;
const DescribeDBDiagEventResponse = models.DescribeDBDiagEventResponse;
const DescribeDBDiagHistoryRequest = models.DescribeDBDiagHistoryRequest;
const DescribeTopSpaceTableTimeSeriesRequest = models.DescribeTopSpaceTableTimeSeriesRequest;
const MonitorMetricSeriesData = models.MonitorMetricSeriesData;
const DiagHistoryEventItem = models.DiagHistoryEventItem;
const SlowLogTopSqlItem = models.SlowLogTopSqlItem;
const MonitorFloatMetricSeriesData = models.MonitorFloatMetricSeriesData;
const DescribeSlowLogTopSqlsRequest = models.DescribeSlowLogTopSqlsRequest;
const TableSpaceData = models.TableSpaceData;
const DescribeSlowLogTopSqlsResponse = models.DescribeSlowLogTopSqlsResponse;
const DescribeTopSpaceTablesResponse = models.DescribeTopSpaceTablesResponse;


/**
 * dbbrain client
 * @class
 */
class DbbrainClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dbbrain.tencentcloudapi.com", "2019-10-16", credential, region, profile);
    }
    
    /**
     * This API is used to query the daily space data of top tables consuming the most instance space. The data is daily collected by DBbrain during a specified time period. The return results are sorted by size by default.
     * @param {DescribeTopSpaceTableTimeSeriesRequest} req
     * @param {function(string, DescribeTopSpaceTableTimeSeriesResponse):void} cb
     * @public
     */
    DescribeTopSpaceTableTimeSeries(req, cb) {
        let resp = new DescribeTopSpaceTableTimeSeriesResponse();
        this.request("DescribeTopSpaceTableTimeSeries", req, resp, cb);
    }

    /**
     * This API is used to get the slow log statistics histogram.
     * @param {DescribeSlowLogTimeSeriesStatsRequest} req
     * @param {function(string, DescribeSlowLogTimeSeriesStatsResponse):void} cb
     * @public
     */
    DescribeSlowLogTimeSeriesStats(req, cb) {
        let resp = new DescribeSlowLogTimeSeriesStatsResponse();
        this.request("DescribeSlowLogTimeSeriesStats", req, resp, cb);
    }

    /**
     * This API is used to get the list of instance diagnosis events.
     * @param {DescribeDBDiagHistoryRequest} req
     * @param {function(string, DescribeDBDiagHistoryResponse):void} cb
     * @public
     */
    DescribeDBDiagHistory(req, cb) {
        let resp = new DescribeDBDiagHistoryResponse();
        this.request("DescribeDBDiagHistory", req, resp, cb);
    }

    /**
     * This API is used to query the overview of instance space usage during a specified time period, including disk usage growth (MB), available disk space (MB), total disk space (MB), and estimated number of available days.
     * @param {DescribeDBSpaceStatusRequest} req
     * @param {function(string, DescribeDBSpaceStatusResponse):void} cb
     * @public
     */
    DescribeDBSpaceStatus(req, cb) {
        let resp = new DescribeDBSpaceStatusResponse();
        this.request("DescribeDBSpaceStatus", req, resp, cb);
    }

    /**
     * This API is used to get the details of an instance exception diagnosis event.
     * @param {DescribeDBDiagEventRequest} req
     * @param {function(string, DescribeDBDiagEventResponse):void} cb
     * @public
     */
    DescribeDBDiagEvent(req, cb) {
        let resp = new DescribeDBDiagEventResponse();
        this.request("DescribeDBDiagEvent", req, resp, cb);
    }

    /**
     * This API is used to query real-time space statistics of top tables of an instance. The return results are sorted by size by default.
     * @param {DescribeTopSpaceTablesRequest} req
     * @param {function(string, DescribeTopSpaceTablesResponse):void} cb
     * @public
     */
    DescribeTopSpaceTables(req, cb) {
        let resp = new DescribeTopSpaceTablesResponse();
        this.request("DescribeTopSpaceTables", req, resp, cb);
    }

    /**
     * This API is used to get and sort the top slow SQL statements in a specified time period by the aggregation mode of SQL template plus schema.
     * @param {DescribeSlowLogTopSqlsRequest} req
     * @param {function(string, DescribeSlowLogTopSqlsResponse):void} cb
     * @public
     */
    DescribeSlowLogTopSqls(req, cb) {
        let resp = new DescribeSlowLogTopSqlsResponse();
        this.request("DescribeSlowLogTopSqls", req, resp, cb);
    }


}
module.exports = DbbrainClient;
