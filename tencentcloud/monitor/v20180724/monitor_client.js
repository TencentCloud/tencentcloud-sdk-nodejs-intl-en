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
const GetMonitorDataRequest = models.GetMonitorDataRequest;
const Instance = models.Instance;
const PeriodsSt = models.PeriodsSt;
const Dimension = models.Dimension;
const DescribeBaseMetricsRequest = models.DescribeBaseMetricsRequest;
const GetMonitorDataResponse = models.GetMonitorDataResponse;
const MetricSet = models.MetricSet;
const DataPoint = models.DataPoint;
const MetricObjectMeaning = models.MetricObjectMeaning;
const DimensionsDesc = models.DimensionsDesc;
const DescribeBaseMetricsResponse = models.DescribeBaseMetricsResponse;


/**
 * monitor client
 * @class
 */
class MonitorClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("monitor.tencentcloudapi.com", "2018-07-24", credential, region, profile);
    }
    
    /**
     * This API is used to get the details of basic metrics.
     * @param {DescribeBaseMetricsRequest} req
     * @param {function(string, DescribeBaseMetricsResponse):void} cb
     * @public
     */
    DescribeBaseMetrics(req, cb) {
        let resp = new DescribeBaseMetricsResponse();
        this.request("DescribeBaseMetrics", req, resp, cb);
    }

    /**
     * This API is used to get the monitoring data of a Tencent Cloud product by passing in the product's namespace, object dimension description, and monitoring metric.
API call rate limit: 20 calls/sec, 1,200 calls/min.
If you need to call a lot of metrics and objects, there may be cases where the call fails due to the rate limit. It is recommended to spread the call requests as much as possible over time.
     * @param {GetMonitorDataRequest} req
     * @param {function(string, GetMonitorDataResponse):void} cb
     * @public
     */
    GetMonitorData(req, cb) {
        let resp = new GetMonitorDataResponse();
        this.request("GetMonitorData", req, resp, cb);
    }


}
module.exports = MonitorClient;
