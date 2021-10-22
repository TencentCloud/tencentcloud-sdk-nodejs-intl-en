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
const LookupAttribute = models.LookupAttribute;
const DescribeEventsResponse = models.DescribeEventsResponse;
const Resource = models.Resource;
const Event = models.Event;
const DescribeEventsRequest = models.DescribeEventsRequest;


/**
 * cloudaudit client
 * @class
 */
class CloudauditClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cloudaudit.tencentcloudapi.com", "2019-03-19", credential, region, profile);
    }
    
    /**
     * This API is used to query CloudAudit logs.
     * @param {DescribeEventsRequest} req
     * @param {function(string, DescribeEventsResponse):void} cb
     * @public
     */
    DescribeEvents(req, cb) {
        let resp = new DescribeEventsResponse();
        this.request("DescribeEvents", req, resp, cb);
    }


}
module.exports = CloudauditClient;
