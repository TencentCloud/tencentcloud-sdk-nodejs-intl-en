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
const CreateIncrementalMigrationStrategyResponse = models.CreateIncrementalMigrationStrategyResponse;
const IncrementalMigrationStrategyInfo = models.IncrementalMigrationStrategyInfo;
const DeleteIncrementalMigrationStrategyRequest = models.DeleteIncrementalMigrationStrategyRequest;
const IncrementalMigrationHttpOriginInfo = models.IncrementalMigrationHttpOriginInfo;
const CreateStorageCredentialsRequest = models.CreateStorageCredentialsRequest;
const IncrementalMigrationHttpEndpointInfo = models.IncrementalMigrationHttpEndpointInfo;
const IncrementalMigrationOriginPrefixConfig = models.IncrementalMigrationOriginPrefixConfig;
const DescribeIncrementalMigrationStrategyInfosResponse = models.DescribeIncrementalMigrationStrategyInfosResponse;
const IncrementalMigrationHttpHeader = models.IncrementalMigrationHttpHeader;
const StorageInfo = models.StorageInfo;
const DescribeStorageRequest = models.DescribeStorageRequest;
const DescribeIncrementalMigrationStrategyInfosRequest = models.DescribeIncrementalMigrationStrategyInfosRequest;
const IncrementalMigrationHttpHeaderInfo = models.IncrementalMigrationHttpHeaderInfo;
const ModifyIncrementalMigrationStrategyRequest = models.ModifyIncrementalMigrationStrategyRequest;
const CreateStorageCredentialsResponse = models.CreateStorageCredentialsResponse;
const IncrementalMigrationOriginFixedFileConfig = models.IncrementalMigrationOriginFixedFileConfig;
const Filter = models.Filter;
const DeleteIncrementalMigrationStrategyResponse = models.DeleteIncrementalMigrationStrategyResponse;
const IncrementalMigrationOriginFileInfo = models.IncrementalMigrationOriginFileInfo;
const Credentials = models.Credentials;
const CreateStorageRequest = models.CreateStorageRequest;
const DescribeStorageResponse = models.DescribeStorageResponse;
const ModifyIncrementalMigrationStrategyResponse = models.ModifyIncrementalMigrationStrategyResponse;
const IncrementalMigrationHttpOriginCondition = models.IncrementalMigrationHttpOriginCondition;
const CreateStorageResponse = models.CreateStorageResponse;
const IncrementalMigrationHttpOriginParameter = models.IncrementalMigrationHttpOriginParameter;
const IncrementalMigrationOriginSuffixConfig = models.IncrementalMigrationOriginSuffixConfig;
const IncrementalMigrationHttpOriginConfig = models.IncrementalMigrationHttpOriginConfig;
const SortBy = models.SortBy;
const CreateIncrementalMigrationStrategyRequest = models.CreateIncrementalMigrationStrategyRequest;


/**
 * vod client
 * @class
 */
class VodClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("vod.intl.tencentcloudapi.com", "2024-07-18", credential, region, profile);
    }
    
    /**
     * Modify the information of incremental migration strategy.
     * @param {ModifyIncrementalMigrationStrategyRequest} req
     * @param {function(string, ModifyIncrementalMigrationStrategyResponse):void} cb
     * @public
     */
    ModifyIncrementalMigrationStrategy(req, cb) {
        let resp = new ModifyIncrementalMigrationStrategyResponse();
        this.request("ModifyIncrementalMigrationStrategy", req, resp, cb);
    }

    /**
     * Describe the information of the incremental migration strategy.
     * @param {DescribeIncrementalMigrationStrategyInfosRequest} req
     * @param {function(string, DescribeIncrementalMigrationStrategyInfosResponse):void} cb
     * @public
     */
    DescribeIncrementalMigrationStrategyInfos(req, cb) {
        let resp = new DescribeIncrementalMigrationStrategyInfosResponse();
        this.request("DescribeIncrementalMigrationStrategyInfos", req, resp, cb);
    }

    /**
     * This API is used to create storage for professional applications.

Note:
- This API is exclusively for professional applications.
- When a customer creates a VOD professional application, the system automatically enables storage in certain regions by default. If the customer needs to enable storage in other regions, they can do so using this API.
- All storage regions and the regions where storage have already been enabled can be queried using the [DescribeStorageRegions](https://cloud.tencent.com/document/product/266/72480) API.
     * @param {CreateStorageRequest} req
     * @param {function(string, CreateStorageResponse):void} cb
     * @public
     */
    CreateStorage(req, cb) {
        let resp = new CreateStorageResponse();
        this.request("CreateStorage", req, resp, cb);
    }

    /**
     * Create an incremental migration strategy for the storage of the professional application.
     * @param {CreateIncrementalMigrationStrategyRequest} req
     * @param {function(string, CreateIncrementalMigrationStrategyResponse):void} cb
     * @public
     */
    CreateIncrementalMigrationStrategy(req, cb) {
        let resp = new CreateIncrementalMigrationStrategyResponse();
        this.request("CreateIncrementalMigrationStrategy", req, resp, cb);
    }

    /**
     * Delete the incremental migration strategy.
     * @param {DeleteIncrementalMigrationStrategyRequest} req
     * @param {function(string, DeleteIncrementalMigrationStrategyResponse):void} cb
     * @public
     */
    DeleteIncrementalMigrationStrategy(req, cb) {
        let resp = new DeleteIncrementalMigrationStrategyResponse();
        this.request("DeleteIncrementalMigrationStrategy", req, resp, cb);
    }

    /**
     * This API is used to query bucket information in the professional application, and it also supports paginated queries.
Note:
- This API is exclusively for use in the professional application.
     * @param {DescribeStorageRequest} req
     * @param {function(string, DescribeStorageResponse):void} cb
     * @public
     */
    DescribeStorage(req, cb) {
        let resp = new DescribeStorageResponse();
        this.request("DescribeStorage", req, resp, cb);
    }

    /**
     * The API is used to generate access credentials for VOD professional applications, such as generating credentials for client uploads.
     * @param {CreateStorageCredentialsRequest} req
     * @param {function(string, CreateStorageCredentialsResponse):void} cb
     * @public
     */
    CreateStorageCredentials(req, cb) {
        let resp = new CreateStorageCredentialsResponse();
        this.request("CreateStorageCredentials", req, resp, cb);
    }


}
module.exports = VodClient;
