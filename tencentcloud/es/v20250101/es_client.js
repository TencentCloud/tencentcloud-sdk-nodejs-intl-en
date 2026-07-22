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
const DocumentChunkUsage = models.DocumentChunkUsage;
const ChunkDocumentAsyncRequest = models.ChunkDocumentAsyncRequest;
const ChunkDocumentRequest = models.ChunkDocumentRequest;
const GetDocumentChunkResultRequest = models.GetDocumentChunkResultRequest;
const RerankResult = models.RerankResult;
const GetDocumentParseResultRequest = models.GetDocumentParseResultRequest;
const PageUsage = models.PageUsage;
const Usage = models.Usage;
const DocumentParseConfig = models.DocumentParseConfig;
const ParseDocumentResponse = models.ParseDocumentResponse;
const Document = models.Document;
const GetTextEmbeddingRequest = models.GetTextEmbeddingRequest;
const ParseDocumentAsyncResponse = models.ParseDocumentAsyncResponse;
const ChunkDocumentResponse = models.ChunkDocumentResponse;
const GetDocumentParseResultResponse = models.GetDocumentParseResultResponse;
const RunRerankRequest = models.RunRerankRequest;
const EmbeddingData = models.EmbeddingData;
const ChunkConfig = models.ChunkConfig;
const ParseDocument = models.ParseDocument;
const GetDocumentChunkResultResponse = models.GetDocumentChunkResultResponse;
const ChunkDocumentAsyncResponse = models.ChunkDocumentAsyncResponse;
const GetMultiModalEmbeddingResponse = models.GetMultiModalEmbeddingResponse;
const GetMultiModalEmbeddingRequest = models.GetMultiModalEmbeddingRequest;
const ParseDocumentRequest = models.ParseDocumentRequest;
const Chunk = models.Chunk;
const ChunkConfigAsync = models.ChunkConfigAsync;
const GetTextEmbeddingResponse = models.GetTextEmbeddingResponse;
const ParseDocumentAsyncRequest = models.ParseDocumentAsyncRequest;
const ChunkDocument = models.ChunkDocument;
const RunRerankResponse = models.RunRerankResponse;


/**
 * es client
 * @class
 */
class EsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("es.intl.tencentcloudapi.com", "2025-01-01", credential, region, profile);
    }
    
    /**
     * Text segmentation is a technology that splits long text into short clips for adapting to model input, improving processing efficiency, or information retrieval. It balances clip length and semantic consistency, suitable for NLP and data analysis scenarios.
This API is an async API with a model dimensional call limit. Each model has a qps limit of 5. If you need to increase the concurrent limit, please contact us (https://www.tencentcloud.com/act/event/Online_service?from_cn_redirect=1).
     * @param {ChunkDocumentAsyncRequest} req
     * @param {function(string, ChunkDocumentAsyncResponse):void} cb
     * @public
     */
    ChunkDocumentAsync(req, cb) {
        let resp = new ChunkDocumentAsyncResponse();
        this.request("ChunkDocumentAsync", req, resp, cb);
    }

    /**
     * Retrieve document slices
     * @param {GetDocumentChunkResultRequest} req
     * @param {function(string, GetDocumentChunkResultResponse):void} cb
     * @public
     */
    GetDocumentChunkResult(req, cb) {
        let resp = new GetDocumentChunkResultResponse();
        this.request("GetDocumentChunkResult", req, resp, cb);
    }

    /**
     * This service accurately converts various format documents into standard format, meeting requirements for Enterprise Knowledge Base construction, technical documentation migration, and structured storage for content platforms.
This API is an async API with a model dimensional call limit. Each model has a qps limit of 5. If you need to increase the concurrent limit, please contact us (https://www.tencentcloud.com/act/event/Online_service?from_cn_redirect=1).
     * @param {ParseDocumentAsyncRequest} req
     * @param {function(string, ParseDocumentAsyncResponse):void} cb
     * @public
     */
    ParseDocumentAsync(req, cb) {
        let resp = new ParseDocumentAsyncResponse();
        this.request("ParseDocumentAsync", req, resp, cb);
    }

    /**
     * This API is used to retrieve the asynchronous processing result of document parsing.
     * @param {GetDocumentParseResultRequest} req
     * @param {function(string, GetDocumentParseResultResponse):void} cb
     * @public
     */
    GetDocumentParseResult(req, cb) {
        let resp = new GetDocumentParseResultResponse();
        this.request("GetDocumentParseResult", req, resp, cb);
    }

    /**
     * Embedding is a technology that maps high-dimensional data to a low-dimensional space, usually used for converting unstructured data such as text, images, or audio into vector representation, making it easier to input into machine models for processing, and the distance between vectors can reflect the similarity between objects.
This API has a model dimensional call limit. Each model has a qps limit of 20. If you need to increase the concurrent limit, please contact us (https://www.tencentcloud.com/act/event/Online_service?from_cn_redirect=1).
     * @param {GetTextEmbeddingRequest} req
     * @param {function(string, GetTextEmbeddingResponse):void} cb
     * @public
     */
    GetTextEmbedding(req, cb) {
        let resp = new GetTextEmbeddingResponse();
        this.request("GetTextEmbedding", req, resp, cb);
    }

    /**
     * This service can accurately convert various types of documents into a standard format to meet the requirements for building an enterprise knowledge base, migrating technical documentation, and structured storage for content platforms.
This API has a model dimensional call limit. Each model has a qps limit of 5. If you need to increase the concurrent limit, please contact us (https://www.tencentcloud.com/act/event/Online_service?from_cn_redirect=1).
     * @param {ParseDocumentRequest} req
     * @param {function(string, ParseDocumentResponse):void} cb
     * @public
     */
    ParseDocument(req, cb) {
        let resp = new ParseDocumentResponse();
        this.request("ParseDocument", req, resp, cb);
    }

    /**
     * Text segmentation is a technology that splits long text into short fragments for adapting to model input, improving processing efficiency, or information retrieval. It balances fragment length and semantic consistency, suitable for NLP and data analysis scenarios.
This API is used to slice text based on delimiter rules. It has a single-account call limit. If you need to increase the concurrent limit, please contact us (https://www.tencentcloud.com/act/event/Online_service?from_cn_redirect=1).
     * @param {ChunkDocumentRequest} req
     * @param {function(string, ChunkDocumentResponse):void} cb
     * @public
     */
    ChunkDocument(req, cb) {
        let resp = new ChunkDocumentResponse();
        this.request("ChunkDocument", req, resp, cb);
    }

    /**
     * Embedding is a technology that maps high-dimensional data to a low-dimensional space, usually used for converting unstructured data such as text, images, or audio into vector representation, making it easier to input into machine models for processing, and the distance between vectors can reflect the similarity between objects. 
This API has a model dimensional call limit. Each model has a qps limit of 10. If you need to increase the concurrent limit, please contact us (https://www.tencentcloud.com/act/event/Online_service?from_cn_redirect=1).
     * @param {GetMultiModalEmbeddingRequest} req
     * @param {function(string, GetMultiModalEmbeddingResponse):void} cb
     * @public
     */
    GetMultiModalEmbedding(req, cb) {
        let resp = new GetMultiModalEmbeddingResponse();
        this.request("GetMultiModalEmbedding", req, resp, cb);
    }

    /**
     * Rearrangement refers to the process in RAG where, by assessing the relevance between documents and queries, the most relevant documents are placed at the front. This ensures that the language model prioritizes high-ranking context when generating responses, improving the accuracy and reliability of generated results. It can also be used for filtering to reduce large model costs.
This API has a single-account call limit. If you need to increase the concurrent limit, please contact us (https://www.tencentcloud.com/act/event/Online_service?from_cn_redirect=1).
     * @param {RunRerankRequest} req
     * @param {function(string, RunRerankResponse):void} cb
     * @public
     */
    RunRerank(req, cb) {
        let resp = new RunRerankResponse();
        this.request("RunRerank", req, resp, cb);
    }


}
module.exports = EsClient;
