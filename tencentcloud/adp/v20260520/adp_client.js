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
const SearchResultPayload = models.SearchResultPayload;
const SearchContext = models.SearchContext;
const KVPair = models.KVPair;
const KnowledgeResult = models.KnowledgeResult;
const SearchInput = models.SearchInput;
const FinalRerankConfig = models.FinalRerankConfig;
const SimilarQuestionExtra = models.SimilarQuestionExtra;
const SearchKnowledgeRequest = models.SearchKnowledgeRequest;
const DBRetrievalConfig = models.DBRetrievalConfig;
const SearchFilterConfig = models.SearchFilterConfig;
const TokenUsage = models.TokenUsage;
const KBRetrievalConfig = models.KBRetrievalConfig;
const ModelParams = models.ModelParams;
const SearchAdvancedConfig = models.SearchAdvancedConfig;
const QARetrievalConfig = models.QARetrievalConfig;
const SearchBilling = models.SearchBilling;
const TableEnhancement = models.TableEnhancement;
const KnowledgeSource = models.KnowledgeSource;
const SearchFilter = models.SearchFilter;
const RerankConfig = models.RerankConfig;
const RetrievalOption = models.RetrievalOption;
const KnowledgeSnippetProfile = models.KnowledgeSnippetProfile;
const ExpirationAwareness = models.ExpirationAwareness;
const GraphRAG = models.GraphRAG;
const ModelDetailInfo = models.ModelDetailInfo;
const DocRetrievalConfig = models.DocRetrievalConfig;
const SearchKnowledgeResponse = models.SearchKnowledgeResponse;


/**
 * adp client
 * @class
 */
class AdpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("adp.intl.tencentcloudapi.com", "2026-05-20", credential, region, profile);
    }
    
    /**
     * Knowledge retrieval
     * @param {SearchKnowledgeRequest} req
     * @param {function(string, SearchKnowledgeResponse):void} cb
     * @public
     */
    SearchKnowledge(req, cb) {
        let resp = new SearchKnowledgeResponse();
        this.request("SearchKnowledge", req, resp, cb);
    }


}
module.exports = AdpClient;
