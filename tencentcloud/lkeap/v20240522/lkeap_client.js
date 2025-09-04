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
const CreateSplitDocumentFlowRequest = models.CreateSplitDocumentFlowRequest;
const QueryRewriteRequest = models.QueryRewriteRequest;
const SplitDocumentFailedPage = models.SplitDocumentFailedPage;
const Usage = models.Usage;
const RunRerankRequest = models.RunRerankRequest;
const CreateReconstructDocumentFlowRequest = models.CreateReconstructDocumentFlowRequest;
const DocumentUsage = models.DocumentUsage;
const RunRerankResponse = models.RunRerankResponse;
const CreateReconstructDocumentFlowResponse = models.CreateReconstructDocumentFlowResponse;
const GetReconstructDocumentResultResponse = models.GetReconstructDocumentResultResponse;
const CreateReconstructDocumentFlowConfig = models.CreateReconstructDocumentFlowConfig;
const CreateSplitDocumentFlowConfig = models.CreateSplitDocumentFlowConfig;
const GetReconstructDocumentResultRequest = models.GetReconstructDocumentResultRequest;
const GetSplitDocumentResultRequest = models.GetSplitDocumentResultRequest;
const QueryRewriteResponse = models.QueryRewriteResponse;
const ReconstructDocumentFailedPage = models.ReconstructDocumentFailedPage;
const Message = models.Message;
const GetSplitDocumentResultResponse = models.GetSplitDocumentResultResponse;
const CreateSplitDocumentFlowResponse = models.CreateSplitDocumentFlowResponse;


/**
 * lkeap client
 * @class
 */
class LkeapClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("lkeap.intl.tencentcloudapi.com", "2024-05-22", credential, region, profile);
    }
    
    /**
     * This API is used to initiate requests for this asynchronous API, for initiating document parsing tasks.
Document parsing supports converting images or PDF files into Markdown format files, and can parse content elements including tables, formulas, images, headings, paragraphs, headers, and footers, and intelligently convert the content into reading order. Please refer to the input parameter list below for specific supported file types.
During the trial period, the QPS limit for a single account is only 1. If you need to access officially, please contact our R&D team.
     * @param {CreateReconstructDocumentFlowRequest} req
     * @param {function(string, CreateReconstructDocumentFlowResponse):void} cb
     * @public
     */
    CreateReconstructDocumentFlow(req, cb) {
        let resp = new CreateReconstructDocumentFlowResponse();
        this.request("CreateReconstructDocumentFlow", req, resp, cb);
    }

    /**
     * This API is used to query the results of document splitting tasks.
     * @param {GetSplitDocumentResultRequest} req
     * @param {function(string, GetSplitDocumentResultResponse):void} cb
     * @public
     */
    GetSplitDocumentResult(req, cb) {
        let resp = new GetSplitDocumentResultResponse();
        this.request("GetSplitDocumentResult", req, resp, cb);
    }

    /**
     * QueryRewrite is mainly used in multi-round conversations for reference resolution and ellipsis completion. Using this API, you don't need to input prompt descriptions. A more accurate user query can be generated based on the conversation history. In terms of application scenarios, this API can be applied to various scenarios such as intelligent Q&A and conversational search.
There is a call limit for single-account for this API. If you need to increase the concurrency limit, please contact us (https://cloud.tencent.com/act/event/Online_service).
     * @param {QueryRewriteRequest} req
     * @param {function(string, QueryRewriteResponse):void} cb
     * @public
     */
    QueryRewrite(req, cb) {
        let resp = new QueryRewriteResponse();
        this.request("QueryRewrite", req, resp, cb);
    }

    /**
     * This API is used to reorder the results of multi-channel recall based on the rerank model of knowledge engine fine-tuning model technology, sort the segments according to the relevance between the query and the segment content from high to low score, and output the corresponding scoring results.
     * @param {RunRerankRequest} req
     * @param {function(string, RunRerankResponse):void} cb
     * @public
     */
    RunRerank(req, cb) {
        let resp = new RunRerankResponse();
        this.request("RunRerank", req, resp, cb);
    }

    /**
     * This is an asynchronous API for querying results, which is used to obtain the result of document parsing.
     * @param {GetReconstructDocumentResultRequest} req
     * @param {function(string, GetReconstructDocumentResultResponse):void} cb
     * @public
     */
    GetReconstructDocumentResult(req, cb) {
        let resp = new GetReconstructDocumentResultResponse();
        this.request("GetReconstructDocumentResult", req, resp, cb);
    }

    /**
     * This API is used to create document segmentation tasks, support various file types, possess mllm capacity, and can analyze and deeply understand the information in charts.
     * @param {CreateSplitDocumentFlowRequest} req
     * @param {function(string, CreateSplitDocumentFlowResponse):void} cb
     * @public
     */
    CreateSplitDocumentFlow(req, cb) {
        let resp = new CreateSplitDocumentFlowResponse();
        this.request("CreateSplitDocumentFlow", req, resp, cb);
    }


}
module.exports = LkeapClient;
