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
const DDoSUnblockQuota = models.DDoSUnblockQuota;
const Filter = models.Filter;
const UnblockResourcesResponse = models.UnblockResourcesResponse;
const DDoSBlockRecord = models.DDoSBlockRecord;
const DescribeDDoSBlockRecordsResponse = models.DescribeDDoSBlockRecordsResponse;
const UnblockResourcesRequest = models.UnblockResourcesRequest;
const DescribeDDoSBlockRecordsRequest = models.DescribeDDoSBlockRecordsRequest;


/**
 * antiddos client
 * @class
 */
class AntiddosClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("antiddos.intl.tencentcloudapi.com", "2025-09-03", credential, region, profile);
    }
    
    /**
     * Query block unblock records and unblocking quota info.
     * @param {DescribeDDoSBlockRecordsRequest} req
     * @param {function(string, DescribeDDoSBlockRecordsResponse):void} cb
     * @public
     */
    DescribeDDoSBlockRecords(req, cb) {
        let resp = new DescribeDDoSBlockRecordsResponse();
        this.request("DescribeDDoSBlockRecords", req, resp, cb);
    }

    /**
     * Apply for unblocking resources. You can obtain the unblocking status of resources through the DescribeDDoSBlockRecords API.
     * @param {UnblockResourcesRequest} req
     * @param {function(string, UnblockResourcesResponse):void} cb
     * @public
     */
    UnblockResources(req, cb) {
        let resp = new UnblockResourcesResponse();
        this.request("UnblockResources", req, resp, cb);
    }


}
module.exports = AntiddosClient;
