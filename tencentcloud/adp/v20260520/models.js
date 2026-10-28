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
const AbstractModel = require("../../common/abstract_model");

/**
 * Result payload
 * @class
 */
class SearchResultPayload extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Additional information of knowledge graph (JSON string)</p>
         * @type {string || null}
         */
        this.GraphData = null;

        /**
         * <p>List of hit image URLs</p>
         * @type {Array.<string> || null}
         */
        this.ImageUrlList = null;

        /**
         * <p>Table additional information (JSON string)</p>
         * @type {string || null}
         */
        this.SheetInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GraphData = 'GraphData' in params ? params.GraphData : null;
        this.ImageUrlList = 'ImageUrlList' in params ? params.ImageUrlList : null;
        this.SheetInfo = 'SheetInfo' in params ? params.SheetInfo : null;

    }
}

/**
 * Retrieval request context info
 * @class
 */
class SearchContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Request source<table><tbody><tr><td>Enumeration item</td><td>Enumeration value</td><td>Description</td></tr><tr><td>CALL_SOURCE_UNSPECIFIED</td><td>0</td><td></td></tr><tr><td>CALL_SOURCE_RAG</td><td>1</td><td>Standard mode</td></tr><tr><td>CALL_SOURCE_WORKFLOW</td><td>2</td><td>Workflow</td></tr><tr><td>CALL_SOURCE_PLUGIN</td><td>3</td><td>Plug-in</td></tr><tr><td>CALL_SOURCE_OPENCLAW</td><td>4</td><td>openclaw</td></tr><tr><td>CALL_SOURCE_RECALL_TEST</td><td>5</td><td>Recall test</td></tr><tr><td>CALL_SOURCE_RECALL_TEST_DIFF</td><td>6</td><td>Recall test in comparison scenarios also needs to trigger the retrieval interface. The difference is that in this case, the frontend does not need to update the latest configuration. Because when comparing 1, 2, and 3, the final saved one may be 2.</td></tr></tbody></table></p>
         * @type {number || null}
         */
        this.CallSource = null;

        /**
         * <p>adp DOMAIN: 1=development DOMAIN, 2=production DOMAIN<table><tbody><tr><td>Enumeration item</td><td>Enumeration value</td><td>Description</td></tr><tr><td>adp_DOMAIN_UNSPECIFIED</td><td>0</td><td>not specified</td></tr><tr><td>adp_DOMAIN_DEV</td><td>1</td><td>development DOMAIN</td></tr><tr><td>adp_DOMAIN_PROD</td><td>2</td><td>production DOMAIN</td></tr></tbody></table></p>
         * @type {number || null}
         */
        this.Domain = null;

        /**
         * <p>Visitor ID</p>
         * @type {string || null}
         */
        this.VisitorId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CallSource = 'CallSource' in params ? params.CallSource : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.VisitorId = 'VisitorId' in params ? params.VisitorId : null;

    }
}

/**
 * Common key-value pair
 * @class
 */
class KVPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * A single retrieval result
 * @class
 */
class KnowledgeResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Confidence degree</p>
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * <p>Hit knowledge type: 1=QA, 2=document fragment, 3=database, 4=map<table><tbody><tr><td>Enumeration item</td><td>Enumeration value</td><td>Description</td></tr><tr><td>KNOWLEDGE_SOURCE_TYPE_UNKNOWN</td><td>0</td><td></td></tr><tr><td>KNOWLEDGE_SOURCE_TYPE_QA</td><td>1</td><td>QA</td></tr><tr><td>KNOWLEDGE_SOURCE_TYPE_DOC</td><td>2</td><td>Document fragment</td></tr><tr><td>KNOWLEDGE_SOURCE_TYPE_DB</td><td>3</td><td>Database</td></tr><tr><td>KNOWLEDGE_SOURCE_TYPE_GRAPH</td><td>4</td><td>Map</td></tr></tbody></table></p>
         * @type {number || null}
         */
        this.KnowledgeType = null;

        /**
         * <p>Recall type list</p>
         * @type {Array.<number> || null}
         */
        this.RecallTypeList = null;

        /**
         * <p>Result payload</p>
         * @type {SearchResultPayload || null}
         */
        this.ResultPayload = null;

        /**
         * <p>Result type<table><tbody><tr><td>Enumeration item</td><td>Enumeration value</td><td>Description</td></tr><tr><td>SEARCH_RESULT_TYPE_UNKNOWN</td><td>0</td><td></td></tr><tr><td>SEARCH_RESULT_TYPE_RETRIEVAL</td><td>1</td><td>Standard search result</td></tr><tr><td>SEARCH_RESULT_TYPE_TEXT_TO_SQL</td><td>2</td><td>text2sql result</td></tr><tr><td>SEARCH_RESULT_TYPE_IMAGE_SEARCH_IMAGE</td><td>3</td><td></td></tr><tr><td>SEARCH_RESULT_TYPE_TEXT_SEARCH_IMAGE</td><td>4</td><td></td></tr></tbody></table></p>
         * @type {number || null}
         */
        this.ResultType = null;

        /**
         * <p>Additional information for similar questions.</p>
         * @type {SimilarQuestionExtra || null}
         */
        this.SimilarQuestionExtra = null;

        /**
         * <p>Basic information of knowledge fragment</p>
         * @type {KnowledgeSnippetProfile || null}
         */
        this.SnippetProfile = null;

        /**
         * <p>Knowledge source information</p>
         * @type {KnowledgeSource || null}
         */
        this.SourceInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.KnowledgeType = 'KnowledgeType' in params ? params.KnowledgeType : null;
        this.RecallTypeList = 'RecallTypeList' in params ? params.RecallTypeList : null;

        if (params.ResultPayload) {
            let obj = new SearchResultPayload();
            obj.deserialize(params.ResultPayload)
            this.ResultPayload = obj;
        }
        this.ResultType = 'ResultType' in params ? params.ResultType : null;

        if (params.SimilarQuestionExtra) {
            let obj = new SimilarQuestionExtra();
            obj.deserialize(params.SimilarQuestionExtra)
            this.SimilarQuestionExtra = obj;
        }

        if (params.SnippetProfile) {
            let obj = new KnowledgeSnippetProfile();
            obj.deserialize(params.SnippetProfile)
            this.SnippetProfile = obj;
        }

        if (params.SourceInfo) {
            let obj = new KnowledgeSource();
            obj.deserialize(params.SourceInfo)
            this.SourceInfo = obj;
        }

    }
}

/**
 * Retrieval input
 * @class
 */
class SearchInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>List of image URLs</p>
         * @type {Array.<string> || null}
         */
        this.ImageUrlList = null;

        /**
         * <p>Query</p>
         * @type {string || null}
         */
        this.Question = null;

        /**
         * <p>Deconstructed sub-problem list</p>
         * @type {Array.<string> || null}
         */
        this.SubQuestionList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrlList = 'ImageUrlList' in params ? params.ImageUrlList : null;
        this.Question = 'Question' in params ? params.Question : null;
        this.SubQuestionList = 'SubQuestionList' in params ? params.SubQuestionList : null;

    }
}

/**
 * Final rerank configuration
 * @class
 */
class FinalRerankConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Model name</p>
         * @type {string || null}
         */
        this.ModelName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelName = 'ModelName' in params ? params.ModelName : null;

    }
}

/**
 * Additional information of the similar question
 * @class
 */
class SimilarQuestionExtra extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Text content of the similar question</p>
         * @type {string || null}
         */
        this.Content = null;

        /**
         * <p>Similar question ID</p>
         * @type {string || null}
         */
        this.SimilarQuestionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.SimilarQuestionId = 'SimilarQuestionId' in params ? params.SimilarQuestionId : null;

    }
}

/**
 * SearchKnowledge request structure.
 * @class
 */
class SearchKnowledgeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Advanced search configuration</p>
         * @type {SearchAdvancedConfig || null}
         */
        this.AdvancedConfig = null;

        /**
         * <p>Retrieval input</p>
         * @type {SearchInput || null}
         */
        this.Input = null;

        /**
         * <p>Retrieval context</p>
         * @type {SearchContext || null}
         */
        this.Context = null;

        /**
         * <p>Billing information</p>
         * @type {SearchBilling || null}
         */
        this.SearchBilling = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AdvancedConfig) {
            let obj = new SearchAdvancedConfig();
            obj.deserialize(params.AdvancedConfig)
            this.AdvancedConfig = obj;
        }

        if (params.Input) {
            let obj = new SearchInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Context) {
            let obj = new SearchContext();
            obj.deserialize(params.Context)
            this.Context = obj;
        }

        if (params.SearchBilling) {
            let obj = new SearchBilling();
            obj.deserialize(params.SearchBilling)
            this.SearchBilling = obj;
        }

    }
}

/**
 * Database search configuration
 * @class
 */
class DBRetrievalConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether to enable</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * Search filter configuration
 * @class
 */
class SearchFilterConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether to retrieve only selected tags. true: retrieve only knowledge with selected tags; false: simultaneous retrieval of knowledge with selected tags and knowledge without any tags</p>
         * @type {boolean || null}
         */
        this.OnlyRetrievalSelectedLabel = null;

        /**
         * <p>Search filter</p>
         * @type {SearchFilter || null}
         */
        this.SearchFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OnlyRetrievalSelectedLabel = 'OnlyRetrievalSelectedLabel' in params ? params.OnlyRetrievalSelectedLabel : null;

        if (params.SearchFilter) {
            let obj = new SearchFilter();
            obj.deserialize(params.SearchFilter)
            this.SearchFilter = obj;
        }

    }
}

/**
 * Token usage statistics
 * @class
 */
class TokenUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of completion tokens</p>
         * @type {number || null}
         */
        this.CompletionTokens = null;

        /**
         * <p>Model name</p>
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * <p>prompt token count</p>
         * @type {number || null}
         */
        this.PromptTokens = null;

        /**
         * <p>Total token count</p>
         * @type {number || null}
         */
        this.TotalTokens = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompletionTokens = 'CompletionTokens' in params ? params.CompletionTokens : null;
        this.ModelName = 'ModelName' in params ? params.ModelName : null;
        this.PromptTokens = 'PromptTokens' in params ? params.PromptTokens : null;
        this.TotalTokens = 'TotalTokens' in params ? params.TotalTokens : null;

    }
}

/**
 * Search configuration of each knowledge base
 * @class
 */
class KBRetrievalConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Database search configuration</p>
         * @type {DBRetrievalConfig || null}
         */
        this.DbRetrievalConfig = null;

        /**
         * <p>Document retrieval configuration.</p>
         * @type {DocRetrievalConfig || null}
         */
        this.DocRetrievalConfig = null;

        /**
         * <p>Knowledge base ID</p>
         * @type {string || null}
         */
        this.KbId = null;

        /**
         * <p>Retrieval optional configuration</p>
         * @type {RetrievalOption || null}
         */
        this.OptionConfig = null;

        /**
         * <p>QA search configuration</p>
         * @type {QARetrievalConfig || null}
         */
        this.QaRetrievalConfig = null;

        /**
         * <p>ReRank configuration</p>
         * @type {RerankConfig || null}
         */
        this.RerankConfig = null;

        /**
         * <p>Search filter configuration</p>
         * @type {SearchFilterConfig || null}
         */
        this.SearchFilterConfig = null;

        /**
         * <p>Retrieval strategy: 1=hybrid, 2=semantic, 3=keyword, 4=none<table><tbody><tr><td>Enumeration item</td><td>Enumeration value</td><td>Description</td></tr><tr><td>SEARCH_STRATEGY_TYPE_UNKNOWN</td><td>0</td><td></td></tr><tr><td>SEARCH_STRATEGY_TYPE_MIXING</td><td>1</td><td>Hybrid retrieval</td></tr><tr><td>SEARCH_STRATEGY_TYPE_SEMANTIC</td><td>2</td><td>Semantic retrieval</td></tr><tr><td>SEARCH_STRATEGY_TYPE_KEYWORD</td><td>3</td><td>Keyword retrieval</td></tr><tr><td>SEARCH_STRATEGY_TYPE_NONE</td><td>4</td><td>No semantic/vector retrieval</td></tr></tbody></table></p>
         * @type {number || null}
         */
        this.StrategyType = null;

        /**
         * <p>Text2SQL model</p>
         * @type {ModelDetailInfo || null}
         */
        this.TextToSqlModel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DbRetrievalConfig) {
            let obj = new DBRetrievalConfig();
            obj.deserialize(params.DbRetrievalConfig)
            this.DbRetrievalConfig = obj;
        }

        if (params.DocRetrievalConfig) {
            let obj = new DocRetrievalConfig();
            obj.deserialize(params.DocRetrievalConfig)
            this.DocRetrievalConfig = obj;
        }
        this.KbId = 'KbId' in params ? params.KbId : null;

        if (params.OptionConfig) {
            let obj = new RetrievalOption();
            obj.deserialize(params.OptionConfig)
            this.OptionConfig = obj;
        }

        if (params.QaRetrievalConfig) {
            let obj = new QARetrievalConfig();
            obj.deserialize(params.QaRetrievalConfig)
            this.QaRetrievalConfig = obj;
        }

        if (params.RerankConfig) {
            let obj = new RerankConfig();
            obj.deserialize(params.RerankConfig)
            this.RerankConfig = obj;
        }

        if (params.SearchFilterConfig) {
            let obj = new SearchFilterConfig();
            obj.deserialize(params.SearchFilterConfig)
            this.SearchFilterConfig = obj;
        }
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;

        if (params.TextToSqlModel) {
            let obj = new ModelDetailInfo();
            obj.deserialize(params.TextToSqlModel)
            this.TextToSqlModel = obj;
        }

    }
}

/**
 * Model parameters
 * @class
 */
class ModelParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether deep thinking is enabled</p>
         * @type {string || null}
         */
        this.DeepThinking = null;

        /**
         * <p>Frequency penalty</p>
         * @type {number || null}
         */
        this.FrequencyPenalty = null;

        /**
         * <p>Maximum output length</p>
         * @type {number || null}
         */
        this.MaxTokens = null;

        /**
         * <p>Existence penalty</p>
         * @type {number || null}
         */
        this.PresencePenalty = null;

        /**
         * <p>Deep thinking effect</p>
         * @type {string || null}
         */
        this.ReasoningEffort = null;

        /**
         * <p>Repetition penalty</p>
         * @type {number || null}
         */
        this.RepetitionPenalty = null;

        /**
         * <p>Output format (text, json_object)</p>
         * @type {string || null}
         */
        this.ReplyFormat = null;

        /**
         * <p>Random seed</p>
         * @type {number || null}
         */
        this.Seed = null;

        /**
         * <p>Stop sequence</p>
         * @type {Array.<string> || null}
         */
        this.StopSequenceList = null;

        /**
         * <p>Temperature</p>
         * @type {number || null}
         */
        this.Temperature = null;

        /**
         * <p>top_p</p>
         * @type {number || null}
         */
        this.TopP = null;

        /**
         * <p>top_k</p>
         * @type {number || null}
         */
        this.TopK = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeepThinking = 'DeepThinking' in params ? params.DeepThinking : null;
        this.FrequencyPenalty = 'FrequencyPenalty' in params ? params.FrequencyPenalty : null;
        this.MaxTokens = 'MaxTokens' in params ? params.MaxTokens : null;
        this.PresencePenalty = 'PresencePenalty' in params ? params.PresencePenalty : null;
        this.ReasoningEffort = 'ReasoningEffort' in params ? params.ReasoningEffort : null;
        this.RepetitionPenalty = 'RepetitionPenalty' in params ? params.RepetitionPenalty : null;
        this.ReplyFormat = 'ReplyFormat' in params ? params.ReplyFormat : null;
        this.Seed = 'Seed' in params ? params.Seed : null;
        this.StopSequenceList = 'StopSequenceList' in params ? params.StopSequenceList : null;
        this.Temperature = 'Temperature' in params ? params.Temperature : null;
        this.TopP = 'TopP' in params ? params.TopP : null;
        this.TopK = 'TopK' in params ? params.TopK : null;

    }
}

/**
 * Retrieve advanced configuration
 * @class
 */
class SearchAdvancedConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Final ReRank Configuration</p>
         * @type {FinalRerankConfig || null}
         */
        this.FinalRerankConfig = null;

        /**
         * <p>Search configuration of each knowledge base</p>
         * @type {Array.<KBRetrievalConfig> || null}
         */
        this.KbRetrievalList = null;

        /**
         * <p>Retrieve knowledge type: 1=document and QA, 2=rejected question<table><tbody><tr><td>Enumeration item</td><td>Enumeration value</td><td>Description</td></tr><tr><td>SEARCH_KNOWLEDGE_TYPE_UNKNOWN</td><td>0</td><td></td></tr><tr><td>SEARCH_KNOWLEDGE_TYPE_DOC_QA</td><td>1</td><td>Document and QA</td></tr><tr><td>SEARCH_KNOWLEDGE_TYPE_REJECTED_QUESTION</td><td>2</td><td>Rejected question</td></tr></tbody></table></p>
         * @type {number || null}
         */
        this.KnowledgeType = null;

        /**
         * <p>Number of final returned results</p>
         * @type {number || null}
         */
        this.RecallCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FinalRerankConfig) {
            let obj = new FinalRerankConfig();
            obj.deserialize(params.FinalRerankConfig)
            this.FinalRerankConfig = obj;
        }

        if (params.KbRetrievalList) {
            this.KbRetrievalList = new Array();
            for (let z in params.KbRetrievalList) {
                let obj = new KBRetrievalConfig();
                obj.deserialize(params.KbRetrievalList[z]);
                this.KbRetrievalList.push(obj);
            }
        }
        this.KnowledgeType = 'KnowledgeType' in params ? params.KnowledgeType : null;
        this.RecallCount = 'RecallCount' in params ? params.RecallCount : null;

    }
}

/**
 * QA search configuration
 * @class
 */
class QARetrievalConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Confidence threshold</p>
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * <p>Whether to enable</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * <p>Return the top N entries</p>
         * @type {number || null}
         */
        this.TopN = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.TopN = 'TopN' in params ? params.TopN : null;

    }
}

/**
 * Retrieval billing information
 * @class
 */
class SearchBilling extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Billing tag list</p>
         * @type {Array.<KVPair> || null}
         */
        this.BillingTagList = null;

        /**
         * <p>Billing sub-business type</p>
         * @type {string || null}
         */
        this.FinanceSubBusinessType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BillingTagList) {
            this.BillingTagList = new Array();
            for (let z in params.BillingTagList) {
                let obj = new KVPair();
                obj.deserialize(params.BillingTagList[z]);
                this.BillingTagList.push(obj);
            }
        }
        this.FinanceSubBusinessType = 'FinanceSubBusinessType' in params ? params.FinanceSubBusinessType : null;

    }
}

/**
 * Table enhancement configuration
 * @class
 */
class TableEnhancement extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether to enable</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * Knowledge source information
 * @class
 */
class KnowledgeSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether it is big data</p>
         * @type {boolean || null}
         */
        this.IsBigData = null;

        /**
         * <p>Whether it is a shared knowledge base</p>
         * @type {boolean || null}
         */
        this.IsShared = null;

        /**
         * <p>Knowledge base name</p>
         * @type {string || null}
         */
        this.KbName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsBigData = 'IsBigData' in params ? params.IsBigData : null;
        this.IsShared = 'IsShared' in params ? params.IsShared : null;
        this.KbName = 'KbName' in params ? params.KbName : null;

    }
}

/**
 * Search filter
 * @class
 */
class SearchFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Search filter type<table><tbody><tr><td>Enumeration item</td><td>Enumeration value</td><td>Description</td></tr><tr><td>SEARCH_FILTER_TYPE_UNKNOWN</td><td>0</td><td></td></tr><tr><td>SEARCH_FILTER_TYPE_CUSTOMER_LABEL_VALUE</td><td>1</td><td>User-customized tag value</td></tr><tr><td>SEARCH_FILTER_TYPE_CUSTOMER_LABEL_VALUE_ID</td><td>2</td><td>User-customized tag value ID</td></tr><tr><td>SEARCH_FILTER_TYPE_DOC_ID</td><td>3</td><td>Retrieve by specified document ID</td></tr><tr><td>SEARCH_FILTER_TYPE_DOC_CATEGORY_ID</td><td>4</td><td>Retrieve by specified document classification ID</td></tr><tr><td>SEARCH_FILTER_TYPE_DB_TABLE_ID</td><td>5</td><td>Retrieve by specified database table ID</td></tr><tr><td>SEARCH_FILTER_TYPE_KB_SCHEMA_ID</td><td>6</td><td>Specified knowledge base schema ID</td></tr></tbody></table></p>
         * @type {number || null}
         */
        this.FilterType = null;

        /**
         * <p>Filter value list. According to SearchFilterType, take value 1: pass a custom tag value; 2: pass a custom tag value ID; 3: pass a document ID; 4: pass a category ID</p>
         * @type {Array.<string> || null}
         */
        this.FilterValueList = null;

        /**
         * <p>User-customized tag ID</p>
         * @type {string || null}
         */
        this.LabelId = null;

        /**
         * <p>Logical operator: AND or OR<table><tbody><tr><td>Enumeration item</td><td>Enumeration value</td><td>Description</td></tr><tr><td>LOGIC_OPR_NOOP</td><td>0</td><td></td></tr><tr><td>LOGIC_OPR_AND</td><td>1</td><td></td></tr><tr><td>LOGIC_OPR_OR</td><td>2</td><td></td></tr></tbody></table></p>
         * @type {number || null}
         */
        this.LogicOp = null;

        /**
         * <p>Nested search filter</p>
         * @type {Array.<SearchFilter> || null}
         */
        this.SearchFilterList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.FilterValueList = 'FilterValueList' in params ? params.FilterValueList : null;
        this.LabelId = 'LabelId' in params ? params.LabelId : null;
        this.LogicOp = 'LogicOp' in params ? params.LogicOp : null;

        if (params.SearchFilterList) {
            this.SearchFilterList = new Array();
            for (let z in params.SearchFilterList) {
                let obj = new SearchFilter();
                obj.deserialize(params.SearchFilterList[z]);
                this.SearchFilterList.push(obj);
            }
        }

    }
}

/**
 * Rearrange the configuration
 * @class
 */
class RerankConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether to enable</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * <p>Model name</p>
         * @type {string || null}
         */
        this.ModelName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.ModelName = 'ModelName' in params ? params.ModelName : null;

    }
}

/**
 * Optional retrieval configuration
 * @class
 */
class RetrievalOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Timeliness retrieval enhancement configuration</p>
         * @type {ExpirationAwareness || null}
         */
        this.ExpirationAwareness = null;

        /**
         * <p>GraphRAG Configuration</p>
         * @type {GraphRAG || null}
         */
        this.GraphRag = null;

        /**
         * <p>Spreadsheet enhancement configuration</p>
         * @type {TableEnhancement || null}
         */
        this.TableEnhancement = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ExpirationAwareness) {
            let obj = new ExpirationAwareness();
            obj.deserialize(params.ExpirationAwareness)
            this.ExpirationAwareness = obj;
        }

        if (params.GraphRag) {
            let obj = new GraphRAG();
            obj.deserialize(params.GraphRag)
            this.GraphRag = obj;
        }

        if (params.TableEnhancement) {
            let obj = new TableEnhancement();
            obj.deserialize(params.TableEnhancement)
            this.TableEnhancement = obj;
        }

    }
}

/**
 * Basic information of knowledge fragment
 * @class
 */
class KnowledgeSnippetProfile extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Content</p>
         * @type {string || null}
         */
        this.Content = null;

        /**
         * <p>Associated document ID</p>
         * @type {string || null}
         */
        this.DocId = null;

        /**
         * <p>Document name</p>
         * @type {string || null}
         */
        this.DocName = null;

        /**
         * <p>Knowledge base ID</p>
         * @type {string || null}
         */
        this.KbId = null;

        /**
         * <p>Knowledge ID</p>
         * @type {string || null}
         */
        this.KnowledgeId = null;

        /**
         * <p>Query</p>
         * @type {string || null}
         */
        this.Question = null;

        /**
         * <p>Document title</p>
         * @type {string || null}
         */
        this.Title = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.DocId = 'DocId' in params ? params.DocId : null;
        this.DocName = 'DocName' in params ? params.DocName : null;
        this.KbId = 'KbId' in params ? params.KbId : null;
        this.KnowledgeId = 'KnowledgeId' in params ? params.KnowledgeId : null;
        this.Question = 'Question' in params ? params.Question : null;
        this.Title = 'Title' in params ? params.Title : null;

    }
}

/**
 * Timeliness retrieval enhancement configuration
 * @class
 */
class ExpirationAwareness extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether to enable timeliness retrieval. Once enabled, retrieval results will be sorted based on the validity time of the knowledge</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * GraphRAG configuration
 * @class
 */
class GraphRAG extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether to enable</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * Model details
 * @class
 */
class ModelDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Model alias.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Limit on number of historical conversations
         * @type {number || null}
         */
        this.HistoryLimit = null;

        /**
         * Unique model ID
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * Model parameters
         * @type {ModelParams || null}
         */
        this.ModelParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.HistoryLimit = 'HistoryLimit' in params ? params.HistoryLimit : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;

        if (params.ModelParams) {
            let obj = new ModelParams();
            obj.deserialize(params.ModelParams)
            this.ModelParams = obj;
        }

    }
}

/**
 * Document search configuration
 * @class
 */
class DocRetrievalConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Confidence threshold</p>
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * <p>Whether to enable</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * <p>Return the top N entries</p>
         * @type {number || null}
         */
        this.TopN = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.TopN = 'TopN' in params ? params.TopN : null;

    }
}

/**
 * SearchKnowledge response structure.
 * @class
 */
class SearchKnowledgeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Search results list</p>
         * @type {Array.<KnowledgeResult> || null}
         */
        this.KnowledgeList = null;

        /**
         * <p>token consumption statistics</p>
         * @type {Array.<TokenUsage> || null}
         */
        this.TokenUsageList = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KnowledgeList) {
            this.KnowledgeList = new Array();
            for (let z in params.KnowledgeList) {
                let obj = new KnowledgeResult();
                obj.deserialize(params.KnowledgeList[z]);
                this.KnowledgeList.push(obj);
            }
        }

        if (params.TokenUsageList) {
            this.TokenUsageList = new Array();
            for (let z in params.TokenUsageList) {
                let obj = new TokenUsage();
                obj.deserialize(params.TokenUsageList[z]);
                this.TokenUsageList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    SearchResultPayload: SearchResultPayload,
    SearchContext: SearchContext,
    KVPair: KVPair,
    KnowledgeResult: KnowledgeResult,
    SearchInput: SearchInput,
    FinalRerankConfig: FinalRerankConfig,
    SimilarQuestionExtra: SimilarQuestionExtra,
    SearchKnowledgeRequest: SearchKnowledgeRequest,
    DBRetrievalConfig: DBRetrievalConfig,
    SearchFilterConfig: SearchFilterConfig,
    TokenUsage: TokenUsage,
    KBRetrievalConfig: KBRetrievalConfig,
    ModelParams: ModelParams,
    SearchAdvancedConfig: SearchAdvancedConfig,
    QARetrievalConfig: QARetrievalConfig,
    SearchBilling: SearchBilling,
    TableEnhancement: TableEnhancement,
    KnowledgeSource: KnowledgeSource,
    SearchFilter: SearchFilter,
    RerankConfig: RerankConfig,
    RetrievalOption: RetrievalOption,
    KnowledgeSnippetProfile: KnowledgeSnippetProfile,
    ExpirationAwareness: ExpirationAwareness,
    GraphRAG: GraphRAG,
    ModelDetailInfo: ModelDetailInfo,
    DocRetrievalConfig: DocRetrievalConfig,
    SearchKnowledgeResponse: SearchKnowledgeResponse,

}
