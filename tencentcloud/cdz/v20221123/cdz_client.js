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
const DescribeCloudDedicatedZoneResourceSummaryRequest = models.DescribeCloudDedicatedZoneResourceSummaryRequest;
const CloudDedicatedZoneResourceStatisticsInfo = models.CloudDedicatedZoneResourceStatisticsInfo;
const ExtraInfo = models.ExtraInfo;
const CloudDedicatedZoneResourceSummaryInfo = models.CloudDedicatedZoneResourceSummaryInfo;
const DescribeCloudDedicatedZoneResourceSummaryResponse = models.DescribeCloudDedicatedZoneResourceSummaryResponse;


/**
 * cdz client
 * @class
 */
class CdzClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdz.intl.tencentcloudapi.com", "2022-11-23", credential, region, profile);
    }
    
    /**
     * This API is used to query resource usage of each vertical product in Cloud Dedicated Zone.
     * @param {DescribeCloudDedicatedZoneResourceSummaryRequest} req
     * @param {function(string, DescribeCloudDedicatedZoneResourceSummaryResponse):void} cb
     * @public
     */
    DescribeCloudDedicatedZoneResourceSummary(req, cb) {
        let resp = new DescribeCloudDedicatedZoneResourceSummaryResponse();
        this.request("DescribeCloudDedicatedZoneResourceSummary", req, resp, cb);
    }


}
module.exports = CdzClient;
