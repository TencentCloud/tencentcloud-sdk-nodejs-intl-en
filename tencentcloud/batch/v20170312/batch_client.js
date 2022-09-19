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
const LocalDiskType = models.LocalDiskType;
const DescribeCvmZoneInstanceConfigInfosResponse = models.DescribeCvmZoneInstanceConfigInfosResponse;
const DescribeAvailableCvmInstanceTypesRequest = models.DescribeAvailableCvmInstanceTypesRequest;
const DescribeInstanceCategoriesRequest = models.DescribeInstanceCategoriesRequest;
const InstanceTypeConfig = models.InstanceTypeConfig;
const DescribeCvmZoneInstanceConfigInfosRequest = models.DescribeCvmZoneInstanceConfigInfosRequest;
const Externals = models.Externals;
const StorageBlock = models.StorageBlock;
const Filter = models.Filter;
const DescribeInstanceCategoriesResponse = models.DescribeInstanceCategoriesResponse;
const InstanceTypeQuotaItem = models.InstanceTypeQuotaItem;
const DescribeAvailableCvmInstanceTypesResponse = models.DescribeAvailableCvmInstanceTypesResponse;
const InstanceCategoryItem = models.InstanceCategoryItem;
const ItemPrice = models.ItemPrice;


/**
 * batch client
 * @class
 */
class BatchClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("batch.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * Currently, CVM instance families are classified into different category, and each category contains several instance families. This API is used to query the instance category information.
     * @param {DescribeInstanceCategoriesRequest} req
     * @param {function(string, DescribeInstanceCategoriesResponse):void} cb
     * @public
     */
    DescribeInstanceCategories(req, cb) {
        let resp = new DescribeInstanceCategoriesResponse();
        this.request("DescribeInstanceCategories", req, resp, cb);
    }

    /**
     * This API is used to get the model configuration information of the availability zone of BatchCompute.
     * @param {DescribeCvmZoneInstanceConfigInfosRequest} req
     * @param {function(string, DescribeCvmZoneInstanceConfigInfosResponse):void} cb
     * @public
     */
    DescribeCvmZoneInstanceConfigInfos(req, cb) {
        let resp = new DescribeCvmZoneInstanceConfigInfosResponse();
        this.request("DescribeCvmZoneInstanceConfigInfos", req, resp, cb);
    }

    /**
     * This API is used to view the information of available CVM model configurations.
     * @param {DescribeAvailableCvmInstanceTypesRequest} req
     * @param {function(string, DescribeAvailableCvmInstanceTypesResponse):void} cb
     * @public
     */
    DescribeAvailableCvmInstanceTypes(req, cb) {
        let resp = new DescribeAvailableCvmInstanceTypesResponse();
        this.request("DescribeAvailableCvmInstanceTypes", req, resp, cb);
    }


}
module.exports = BatchClient;
