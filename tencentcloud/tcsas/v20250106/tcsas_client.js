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
const MAULineChartData = models.MAULineChartData;
const MAUIndicatorCard = models.MAUIndicatorCard;
const DescribeMNGMAUMonthlyComparisonMetricCardRequest = models.DescribeMNGMAUMonthlyComparisonMetricCardRequest;
const DescribeMNGMAUMonthlyComparisonMetricCardResponse = models.DescribeMNGMAUMonthlyComparisonMetricCardResponse;
const DescribeMNGMAULineChartResponse = models.DescribeMNGMAULineChartResponse;
const DescribeMNGMAULineChartRequest = models.DescribeMNGMAULineChartRequest;
const DescribeMNPMAULineChartRequest = models.DescribeMNPMAULineChartRequest;
const DescribeMNPMAUDataDetailRequest = models.DescribeMNPMAUDataDetailRequest;
const MNGMAULineChartData = models.MNGMAULineChartData;
const DescribeMNPMAUMetricCardRequest = models.DescribeMNPMAUMetricCardRequest;
const MAUDetail = models.MAUDetail;
const DescribeMNPMAUMetricCardResponse = models.DescribeMNPMAUMetricCardResponse;
const DescribeMNGMAUDataDetailRequest = models.DescribeMNGMAUDataDetailRequest;
const DescribeMNGMAUDataDetailResponse = models.DescribeMNGMAUDataDetailResponse;
const DescribeMNPMAULineChartResponse = models.DescribeMNPMAULineChartResponse;
const MAUChartData = models.MAUChartData;
const DescribeMNPMAUDataDetailResponse = models.DescribeMNPMAUDataDetailResponse;


/**
 * tcsas client
 * @class
 */
class TcsasClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcsas.intl.tencentcloudapi.com", "2025-01-06", credential, region, profile);
    }
    
    /**
     * This API is used to retrieve mini program monthly active user data in a line chart format.
     * @param {DescribeMNPMAULineChartRequest} req
     * @param {function(string, DescribeMNPMAULineChartResponse):void} cb
     * @public
     */
    DescribeMNPMAULineChart(req, cb) {
        let resp = new DescribeMNPMAULineChartResponse();
        this.request("DescribeMNPMAULineChart", req, resp, cb);
    }

    /**
     * This API is used to retrieve MAU comparison data for a mini game between two months.
     * @param {DescribeMNGMAUMonthlyComparisonMetricCardRequest} req
     * @param {function(string, DescribeMNGMAUMonthlyComparisonMetricCardResponse):void} cb
     * @public
     */
    DescribeMNGMAUMonthlyComparisonMetricCard(req, cb) {
        let resp = new DescribeMNGMAUMonthlyComparisonMetricCardResponse();
        this.request("DescribeMNGMAUMonthlyComparisonMetricCard", req, resp, cb);
    }

    /**
     * This API is used to retrieve mini game monthly active user data in a line chart format.
     * @param {DescribeMNGMAULineChartRequest} req
     * @param {function(string, DescribeMNGMAULineChartResponse):void} cb
     * @public
     */
    DescribeMNGMAULineChart(req, cb) {
        let resp = new DescribeMNGMAULineChartResponse();
        this.request("DescribeMNGMAULineChart", req, resp, cb);
    }

    /**
     * This API is used to retrieve the detailed mini program monthly active user data.
     * @param {DescribeMNPMAUDataDetailRequest} req
     * @param {function(string, DescribeMNPMAUDataDetailResponse):void} cb
     * @public
     */
    DescribeMNPMAUDataDetail(req, cb) {
        let resp = new DescribeMNPMAUDataDetailResponse();
        this.request("DescribeMNPMAUDataDetail", req, resp, cb);
    }

    /**
     * This API is used to retrieve MAU comparison data for a mini program between two months.
     * @param {DescribeMNPMAUMetricCardRequest} req
     * @param {function(string, DescribeMNPMAUMetricCardResponse):void} cb
     * @public
     */
    DescribeMNPMAUMetricCard(req, cb) {
        let resp = new DescribeMNPMAUMetricCardResponse();
        this.request("DescribeMNPMAUMetricCard", req, resp, cb);
    }

    /**
     * This API is used to retrieve the detailed mini game monthly active user data.
     * @param {DescribeMNGMAUDataDetailRequest} req
     * @param {function(string, DescribeMNGMAUDataDetailResponse):void} cb
     * @public
     */
    DescribeMNGMAUDataDetail(req, cb) {
        let resp = new DescribeMNGMAUDataDetailResponse();
        this.request("DescribeMNGMAUDataDetail", req, resp, cb);
    }


}
module.exports = TcsasClient;
