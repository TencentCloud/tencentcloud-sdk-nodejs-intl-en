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
const Convert3DFormatRequest = models.Convert3DFormatRequest;
const Submit3DSmartTopologyJobRequest = models.Submit3DSmartTopologyJobRequest;
const ViewImage = models.ViewImage;
const QueryHunyuanTo3DProJobRequest = models.QueryHunyuanTo3DProJobRequest;
const QueryHunyuan3DPartJobResponse = models.QueryHunyuan3DPartJobResponse;
const QueryHunyuanTo3DRapidJobResponse = models.QueryHunyuanTo3DRapidJobResponse;
const TranslationChoice = models.TranslationChoice;
const ChatTranslationsResponse = models.ChatTranslationsResponse;
const SubmitHunyuanTo3DTextureEditJobRequest = models.SubmitHunyuanTo3DTextureEditJobRequest;
const Usage = models.Usage;
const SubmitHunyuanTo3DRapidJobResponse = models.SubmitHunyuanTo3DRapidJobResponse;
const ChatTranslationsRequest = models.ChatTranslationsRequest;
const PromptTokensDetails = models.PromptTokensDetails;
const SubmitHunyuanTo3DUVJobRequest = models.SubmitHunyuanTo3DUVJobRequest;
const Submit3DSmartTopologyJobResponse = models.Submit3DSmartTopologyJobResponse;
const SubmitHunyuanTo3DTextureEditJobResponse = models.SubmitHunyuanTo3DTextureEditJobResponse;
const File3D = models.File3D;
const QueryHunyuanTo3DTextureEditJobResponse = models.QueryHunyuanTo3DTextureEditJobResponse;
const InputFile3D = models.InputFile3D;
const TranslationDelta = models.TranslationDelta;
const SubmitHunyuanTo3DRapidJobRequest = models.SubmitHunyuanTo3DRapidJobRequest;
const SubmitHunyuanTo3DUVJobResponse = models.SubmitHunyuanTo3DUVJobResponse;
const SubmitHunyuan3DPartJobResponse = models.SubmitHunyuan3DPartJobResponse;
const SubmitHunyuanTo3DProJobRequest = models.SubmitHunyuanTo3DProJobRequest;
const QueryHunyuanTo3DTextureEditJobRequest = models.QueryHunyuanTo3DTextureEditJobRequest;
const Convert3DFormatResponse = models.Convert3DFormatResponse;
const DescribeHunyuanTo3DUVJobRequest = models.DescribeHunyuanTo3DUVJobRequest;
const SubmitHunyuan3DPartJobRequest = models.SubmitHunyuan3DPartJobRequest;
const Describe3DSmartTopologyJobResponse = models.Describe3DSmartTopologyJobResponse;
const DescribeHunyuanTo3DUVJobResponse = models.DescribeHunyuanTo3DUVJobResponse;
const Reference = models.Reference;
const ImageInfo = models.ImageInfo;
const SubmitHunyuanTo3DProJobResponse = models.SubmitHunyuanTo3DProJobResponse;
const ErrorMsg = models.ErrorMsg;
const QueryHunyuanTo3DProJobResponse = models.QueryHunyuanTo3DProJobResponse;
const QueryHunyuan3DPartJobRequest = models.QueryHunyuan3DPartJobRequest;
const TranslationMessage = models.TranslationMessage;
const QueryHunyuanTo3DRapidJobRequest = models.QueryHunyuanTo3DRapidJobRequest;
const Describe3DSmartTopologyJobRequest = models.Describe3DSmartTopologyJobRequest;


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
     * @param {SubmitHunyuanTo3DRapidJobRequest} req
     * @param {function(string, SubmitHunyuanTo3DRapidJobResponse):void} cb
     * @public
     */
    SubmitHunyuanTo3DRapidJob(req, cb) {
        let resp = new SubmitHunyuanTo3DRapidJobResponse();
        this.request("SubmitHunyuanTo3DRapidJob", req, resp, cb);
    }

    /**
     * The SmartTopoly API uses the Polygen 1.5 model. After manually inputting a 3D high-poly model, it can generate a neat 3D model with lower polygon count.
1 concurrent is provided by default, which means 1 submitted task can be processed simultaneously. The next task can be processed only after the previous task is completed.
     * @param {Submit3DSmartTopologyJobRequest} req
     * @param {function(string, Submit3DSmartTopologyJobResponse):void} cb
     * @public
     */
    Submit3DSmartTopologyJob(req, cb) {
        let resp = new Submit3DSmartTopologyJobResponse();
        this.request("Submit3DSmartTopologyJob", req, resp, cb);
    }

    /**
     * After inputting the model, UV unfolding can be performed based on the model texture to output the corresponding UV texture
     * @param {SubmitHunyuanTo3DUVJobRequest} req
     * @param {function(string, SubmitHunyuanTo3DUVJobResponse):void} cb
     * @public
     */
    SubmitHunyuanTo3DUVJob(req, cb) {
        let resp = new SubmitHunyuanTo3DUVJobResponse();
        this.request("SubmitHunyuanTo3DUVJob", req, resp, cb);
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
     * The SmartTopoly API uses the Polygon 1.5 model. After manually inputting a 3D high-poly model, it can generate a neat 3D model with lower polygon count.
1 concurrent is provided by default, which means 1 submitted task can be processed simultaneously. The next task can be processed only after the previous task is completed.
     * @param {Describe3DSmartTopologyJobRequest} req
     * @param {function(string, Describe3DSmartTopologyJobResponse):void} cb
     * @public
     */
    Describe3DSmartTopologyJob(req, cb) {
        let resp = new Describe3DSmartTopologyJobResponse();
        this.request("Describe3DSmartTopologyJob", req, resp, cb);
    }

    /**
     * Query 3D texture edit tasks.
     * @param {QueryHunyuanTo3DTextureEditJobRequest} req
     * @param {function(string, QueryHunyuanTo3DTextureEditJobResponse):void} cb
     * @public
     */
    QueryHunyuanTo3DTextureEditJob(req, cb) {
        let resp = new QueryHunyuanTo3DTextureEditJobResponse();
        this.request("QueryHunyuanTo3DTextureEditJob", req, resp, cb);
    }

    /**
     * Query component splitting tasks.
     * @param {DescribeHunyuanTo3DUVJobRequest} req
     * @param {function(string, DescribeHunyuanTo3DUVJobResponse):void} cb
     * @public
     */
    DescribeHunyuanTo3DUVJob(req, cb) {
        let resp = new DescribeHunyuanTo3DUVJobResponse();
        this.request("DescribeHunyuanTo3DUVJob", req, resp, cb);
    }

    /**
     * Tencent Hunyuan is a large language model (LLM) developed by Tencent R&D. It possesses powerful Chinese creation capacity, logical reasoning in complex context, and reliable task execution power. This API supports streaming or non-streaming calls. When using streaming calls, it follows the SSE protocol.

1. This API does not currently support returning Image Content.
2. By default, this API has account restrictions with a number of concurrencies of 5. 
3. Please use the SDK to call this API. examples are provided in the Git repository examples/hunyuan/v20230901/ directory for each development language. The SDK link is provided in the "**Developer Resources - SDK**" part under the document.
4. We recommend you use API Explorer for quick online debugging interface and download example code in languages, [click to open](https://console.cloud.tencent.com/api/explorer?Product=hunyuan&Version=2023-09-01&Action=ChatCompletions).
     * @param {ChatTranslationsRequest} req
     * @param {function(string, ChatTranslationsResponse):void} cb
     * @public
     */
    ChatTranslations(req, cb) {
        let resp = new ChatTranslationsResponse();
        this.request("ChatTranslations", req, resp, cb);
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
     * After inputting a 3D model file, the 3D model file format can be switched.
     * @param {Convert3DFormatRequest} req
     * @param {function(string, Convert3DFormatResponse):void} cb
     * @public
     */
    Convert3DFormat(req, cb) {
        let resp = new Convert3DFormatResponse();
        this.request("Convert3DFormat", req, resp, cb);
    }

    /**
     * After inputting the 3D model, perform 3D model texture redrawing based on semantics or images.
     * @param {SubmitHunyuanTo3DTextureEditJobRequest} req
     * @param {function(string, SubmitHunyuanTo3DTextureEditJobResponse):void} cb
     * @public
     */
    SubmitHunyuanTo3DTextureEditJob(req, cb) {
        let resp = new SubmitHunyuanTo3DTextureEditJobResponse();
        this.request("SubmitHunyuanTo3DTextureEditJob", req, resp, cb);
    }


}
module.exports = HunyuanClient;
