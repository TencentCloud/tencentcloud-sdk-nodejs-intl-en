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
const EventDetail = models.EventDetail;
const DescribeEventsResponse = models.DescribeEventsResponse;
const DescribeEventsRequest = models.DescribeEventsRequest;
const ProductEventList = models.ProductEventList;


/**
 * tchd client
 * @class
 */
class TchdClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tchd.tencentcloudapi.com", "2023-03-06", credential, region, profile);
    }
    
    /**
     * This API is used to query the availability event list of tencent cloud services. It can be filtered by product, region, or event occurrence date.
     * @param {DescribeEventsRequest} req
     * @param {function(string, DescribeEventsResponse):void} cb
     * @public
     */
    DescribeEvents(req, cb) {
        let resp = new DescribeEventsResponse();
        this.request("DescribeEvents", req, resp, cb);
    }


}
module.exports = TchdClient;
