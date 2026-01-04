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
const ViewImage = models.ViewImage;
const SubmitHunyuanTo3DRapidJobRequest = models.SubmitHunyuanTo3DRapidJobRequest;
const SubmitHunyuanTo3DProJobResponse = models.SubmitHunyuanTo3DProJobResponse;
const SubmitHunyuan3DPartJobResponse = models.SubmitHunyuan3DPartJobResponse;
const SubmitHunyuanTo3DProJobRequest = models.SubmitHunyuanTo3DProJobRequest;
const QueryHunyuanTo3DProJobRequest = models.QueryHunyuanTo3DProJobRequest;
const File3D = models.File3D;
const QueryHunyuanTo3DRapidJobResponse = models.QueryHunyuanTo3DRapidJobResponse;
const QueryHunyuan3DPartJobResponse = models.QueryHunyuan3DPartJobResponse;
const QueryHunyuanTo3DProJobResponse = models.QueryHunyuanTo3DProJobResponse;
const SubmitHunyuan3DPartJobRequest = models.SubmitHunyuan3DPartJobRequest;
const QueryHunyuan3DPartJobRequest = models.QueryHunyuan3DPartJobRequest;
const SubmitHunyuanTo3DRapidJobResponse = models.SubmitHunyuanTo3DRapidJobResponse;
const InputFile3D = models.InputFile3D;
const QueryHunyuanTo3DRapidJobRequest = models.QueryHunyuanTo3DRapidJobRequest;


/**
 * hunyuan client
 * @class
 */
class HunyuanClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("hunyuan.intl.tencentcloudapi.com", "2023-09-01", credential, region, profile);
    }
    
    /**
     * This API is used to intelligently generate 3D content based on the HunYuan Large Model and input text descriptions/images.
This API is used to provide 3 concurrent tasks by default. Up to 3 submitted tasks can be processed simultaneously. A new task can be processed only after the previous one is completed.
     * @param {SubmitHunyuanTo3DProJobRequest} req
     * @param {function(string, SubmitHunyuanTo3DProJobResponse):void} cb
     * @public
     */
    SubmitHunyuanTo3DProJob(req, cb) {
        let resp = new SubmitHunyuanTo3DProJobResponse();
        this.request("SubmitHunyuanTo3DProJob", req, resp, cb);
    }

    /**
     * This API is used to intelligently generate 3D content based on the HunYuan Large Model with input text descriptions or images.
This API is used to provide 1 concurrent task by default, which means only 1 submitted task can be processed simultaneously. The next task can be processed only after the previous task is completed.
     * @param {QueryHunyuanTo3DRapidJobRequest} req
     * @param {function(string, QueryHunyuanTo3DRapidJobResponse):void} cb
     * @public
     */
    QueryHunyuanTo3DRapidJob(req, cb) {
        let resp = new QueryHunyuanTo3DRapidJobResponse();
        this.request("QueryHunyuanTo3DRapidJob", req, resp, cb);
    }

    /**
     * This API is used to query the generation task of a component.
     * @param {QueryHunyuan3DPartJobRequest} req
     * @param {function(string, QueryHunyuan3DPartJobResponse):void} cb
     * @public
     */
    QueryHunyuan3DPartJob(req, cb) {
        let resp = new QueryHunyuan3DPartJobResponse();
        this.request("QueryHunyuan3DPartJob", req, resp, cb);
    }

    /**
     * This API is used to intelligently generate 3D content based on the HunYuan Large Model and input text descriptions/images.
This API is used to provide 3 concurrent tasks by default, which can process 3 submitted tasks simultaneously. The next task can be processed only after the previous task is completed.
     * @param {QueryHunyuanTo3DProJobRequest} req
     * @param {function(string, QueryHunyuanTo3DProJobResponse):void} cb
     * @public
     */
    QueryHunyuanTo3DProJob(req, cb) {
        let resp = new QueryHunyuanTo3DProJobResponse();
        this.request("QueryHunyuanTo3DProJob", req, resp, cb);
    }

    /**
     * This API is used to intelligently generate 3D content based on the HunYuan Large Model with input text descriptions or images.
This API is used to provide 1 concurrent task by default, which means only 1 submitted task can be processed simultaneously. The next task can be processed only after the previous task is completed.
     * @param {SubmitHunyuanTo3DRapidJobRequest} req
     * @param {function(string, SubmitHunyuanTo3DRapidJobResponse):void} cb
     * @public
     */
    SubmitHunyuanTo3DRapidJob(req, cb) {
        let resp = new SubmitHunyuanTo3DRapidJobResponse();
        this.request("SubmitHunyuanTo3DRapidJob", req, resp, cb);
    }

    /**
     * This API is used to automatically perform component identification and generation based on the model structure after inputting a 3D model file.
     * @param {SubmitHunyuan3DPartJobRequest} req
     * @param {function(string, SubmitHunyuan3DPartJobResponse):void} cb
     * @public
     */
    SubmitHunyuan3DPartJob(req, cb) {
        let resp = new SubmitHunyuan3DPartJobResponse();
        this.request("SubmitHunyuan3DPartJob", req, resp, cb);
    }


}
module.exports = HunyuanClient;
