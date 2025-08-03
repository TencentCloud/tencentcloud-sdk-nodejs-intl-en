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
const ApplyEmbedTokenInfo = models.ApplyEmbedTokenInfo;
const ApplyEmbedIntervalResponse = models.ApplyEmbedIntervalResponse;
const CreateDatasourceRequest = models.CreateDatasourceRequest;
const CreateDatasourceResponse = models.CreateDatasourceResponse;
const ApplyEmbedIntervalRequest = models.ApplyEmbedIntervalRequest;
const IdDTO = models.IdDTO;
const ErrorInfo = models.ErrorInfo;


/**
 * bi client
 * @class
 */
class BiClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("bi.intl.tencentcloudapi.com", "2022-01-05", credential, region, profile);
    }
    
    /**
     * This API is used to create a data source.
     * @param {CreateDatasourceRequest} req
     * @param {function(string, CreateDatasourceResponse):void} cb
     * @public
     */
    CreateDatasource(req, cb) {
        let resp = new CreateDatasourceResponse();
        this.request("CreateDatasource", req, resp, cb);
    }

    /**
     * This API is used to extend the available time of a token with strong authentication.
     * @param {ApplyEmbedIntervalRequest} req
     * @param {function(string, ApplyEmbedIntervalResponse):void} cb
     * @public
     */
    ApplyEmbedInterval(req, cb) {
        let resp = new ApplyEmbedIntervalResponse();
        this.request("ApplyEmbedInterval", req, resp, cb);
    }


}
module.exports = BiClient;
