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
const RegionProduct = models.RegionProduct;
const DescribeProductsRequest = models.DescribeProductsRequest;
const DescribeProductsResponse = models.DescribeProductsResponse;
const ZoneInfo = models.ZoneInfo;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DescribeZonesResponse = models.DescribeZonesResponse;
const RegionInfo = models.RegionInfo;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;


/**
 * region client
 * @class
 */
class RegionClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("region.intl.tencentcloudapi.com", "2022-06-27", credential, region, profile);
    }
    
    /**
     * This interface (DescribeProducts) is used for querying product information in each supported region list.
     * @param {DescribeProductsRequest} req
     * @param {function(string, DescribeProductsResponse):void} cb
     * @public
     */
    DescribeProducts(req, cb) {
        let resp = new DescribeProductsResponse();
        this.request("DescribeProducts", req, resp, cb);
    }

    /**
     * This interface (DescribeRegions) is used for querying the supported regions of each product.
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * This interface (DescribeZones) is used for querying product availability zone information.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }


}
module.exports = RegionClient;
