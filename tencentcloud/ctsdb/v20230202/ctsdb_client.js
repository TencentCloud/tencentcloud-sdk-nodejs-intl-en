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
const Tag = models.Tag;
const Network = models.Network;
const DescribeClustersRequest = models.DescribeClustersRequest;
const Database = models.Database;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const Period = models.Period;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const Spec = models.Spec;
const Filter = models.Filter;
const Cluster = models.Cluster;
const DescribeClustersResponse = models.DescribeClustersResponse;
const Order = models.Order;
const Tenant = models.Tenant;


/**
 * ctsdb client
 * @class
 */
class CtsdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ctsdb.intl.tencentcloudapi.com", "2023-02-02", credential, region, profile);
    }
    
    /**
     * This API is used to query the instance list and details.
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }

    /**
     * This API is used to query the database list.
```
  "Database":{
    "ClusterID":"ctsdbi-rebg0ghl",
    "Name":"" //This API is used to query all databases under the instance if the parameter is not specified.
  }
```
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }


}
module.exports = CtsdbClient;
