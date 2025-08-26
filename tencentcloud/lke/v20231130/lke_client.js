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
const ModifyQAAttrRangeResponse = models.ModifyQAAttrRangeResponse;
const GetWsTokenResponse = models.GetWsTokenResponse;
const ListUsageCallDetailRequest = models.ListUsageCallDetailRequest;
const CheckAttributeLabelExistRequest = models.CheckAttributeLabelExistRequest;
const AttributeFilters = models.AttributeFilters;
const DescribeQAResponse = models.DescribeQAResponse;
const ExtraInfo = models.ExtraInfo;
const GetAppKnowledgeCountRequest = models.GetAppKnowledgeCountRequest;
const StopDocParseResponse = models.StopDocParseResponse;
const ListSelectDocResponse = models.ListSelectDocResponse;
const DescribeReleaseInfoRequest = models.DescribeReleaseInfoRequest;
const DeleteDocRequest = models.DeleteDocRequest;
const GetAnswerTypeDataCountRequest = models.GetAnswerTypeDataCountRequest;
const RunNodeInfo = models.RunNodeInfo;
const AgentDebugInfo = models.AgentDebugInfo;
const UploadAttributeLabelResponse = models.UploadAttributeLabelResponse;
const MsgRecord = models.MsgRecord;
const CreateDocCateResponse = models.CreateDocCateResponse;
const DeleteDocCateResponse = models.DeleteDocCateResponse;
const ExportAttributeLabelResponse = models.ExportAttributeLabelResponse;
const WorkflowInfo = models.WorkflowInfo;
const ExportQAListResponse = models.ExportQAListResponse;
const GetAppSecretResponse = models.GetAppSecretResponse;
const ListRejectedQuestionRequest = models.ListRejectedQuestionRequest;
const CreateQACateResponse = models.CreateQACateResponse;
const ModifyDocAttrRangeResponse = models.ModifyDocAttrRangeResponse;
const GetAnswerTypeDataCountResponse = models.GetAnswerTypeDataCountResponse;
const DescribeQARequest = models.DescribeQARequest;
const AttrLabelRefer = models.AttrLabelRefer;
const CreateReconstructDocumentFlowConfig = models.CreateReconstructDocumentFlowConfig;
const DescribeUnsatisfiedReplyContextRequest = models.DescribeUnsatisfiedReplyContextRequest;
const Procedure = models.Procedure;
const ListAppRequest = models.ListAppRequest;
const AttrLabel = models.AttrLabel;
const ModifyQAAttrRangeRequest = models.ModifyQAAttrRangeRequest;
const GetWsTokenReq_Label = models.GetWsTokenReq_Label;
const ModifyDocResponse = models.ModifyDocResponse;
const ReleaseDoc = models.ReleaseDoc;
const KnowledgeQaSearch = models.KnowledgeQaSearch;
const CreateCorpResponse = models.CreateCorpResponse;
const ListQARequest = models.ListQARequest;
const DescribeKnowledgeUsageResponse = models.DescribeKnowledgeUsageResponse;
const ReferDetail = models.ReferDetail;
const ListUnsatisfiedReplyRequest = models.ListUnsatisfiedReplyRequest;
const DeleteQARequest = models.DeleteQARequest;
const GetLikeDataCountResponse = models.GetLikeDataCountResponse;
const ListReleaseRequest = models.ListReleaseRequest;
const KnowledgeCapacityPieGraphDetail = models.KnowledgeCapacityPieGraphDetail;
const CreateDocCateRequest = models.CreateDocCateRequest;
const InvokeAPI = models.InvokeAPI;
const SummaryOutput = models.SummaryOutput;
const ModifyAppResponse = models.ModifyAppResponse;
const ListDocResponse = models.ListDocResponse;
const ModifyQARequest = models.ModifyQARequest;
const TaskFlowInfo = models.TaskFlowInfo;
const GetDocPreviewRequest = models.GetDocPreviewRequest;
const ListDocCateResponse = models.ListDocCateResponse;
const ListRejectedQuestionPreviewResponse = models.ListRejectedQuestionPreviewResponse;
const DescribeCorpRequest = models.DescribeCorpRequest;
const ListAppCategoryResponse = models.ListAppCategoryResponse;
const CreateAppResponse = models.CreateAppResponse;
const DescribeAttributeLabelRequest = models.DescribeAttributeLabelRequest;
const CreateQARequest = models.CreateQARequest;
const KnowledgeSummary = models.KnowledgeSummary;
const TaskFlowSummary = models.TaskFlowSummary;
const CreateCorpRequest = models.CreateCorpRequest;
const RetryDocParseRequest = models.RetryDocParseRequest;
const ListQaItem = models.ListQaItem;
const DeleteAttributeLabelRequest = models.DeleteAttributeLabelRequest;
const DescribeRobotBizIDByAppKeyResponse = models.DescribeRobotBizIDByAppKeyResponse;
const RenameDocResponse = models.RenameDocResponse;
const ListDocCateRequest = models.ListDocCateRequest;
const DescribeDocResponse = models.DescribeDocResponse;
const CreateReleaseRequest = models.CreateReleaseRequest;
const Label = models.Label;
const AgentProcedure = models.AgentProcedure;
const KnowledgeQaOutput = models.KnowledgeQaOutput;
const ModifyRejectedQuestionRequest = models.ModifyRejectedQuestionRequest;
const ApiVarAttrInfo = models.ApiVarAttrInfo;
const AgentThought = models.AgentThought;
const GroupDocRequest = models.GroupDocRequest;
const CheckAttributeLabelReferRequest = models.CheckAttributeLabelReferRequest;
const ModifyQACateRequest = models.ModifyQACateRequest;
const SearchStrategy = models.SearchStrategy;
const ModifyAttributeLabelRequest = models.ModifyAttributeLabelRequest;
const ProcedureDebugging = models.ProcedureDebugging;
const AttributeLabel = models.AttributeLabel;
const Option = models.Option;
const ListUnsatisfiedReplyResponse = models.ListUnsatisfiedReplyResponse;
const GetAppSecretRequest = models.GetAppSecretRequest;
const ModelParameter = models.ModelParameter;
const DeleteQACateResponse = models.DeleteQACateResponse;
const SaveDocResponse = models.SaveDocResponse;
const ListReleaseDocPreviewResponse = models.ListReleaseDocPreviewResponse;
const RenameDocRequest = models.RenameDocRequest;
const SummaryConfig = models.SummaryConfig;
const GenerateQAResponse = models.GenerateQAResponse;
const GetTaskStatusResponse = models.GetTaskStatusResponse;
const DescribeConcurrencyUsageGraphRequest = models.DescribeConcurrencyUsageGraphRequest;
const DescribeDocRequest = models.DescribeDocRequest;
const AgentProcedureDebugging = models.AgentProcedureDebugging;
const DescribeTokenUsageGraphRequest = models.DescribeTokenUsageGraphRequest;
const RetryDocAuditRequest = models.RetryDocAuditRequest;
const VoiceConfig = models.VoiceConfig;
const SaveDocRequest = models.SaveDocRequest;
const ReconstructDocumentFailedPage = models.ReconstructDocumentFailedPage;
const ListAppKnowledgeDetailResponse = models.ListAppKnowledgeDetailResponse;
const ModifyQACateResponse = models.ModifyQACateResponse;
const DescribeAttributeLabelResponse = models.DescribeAttributeLabelResponse;
const KnowledgeQaSingleWorkflow = models.KnowledgeQaSingleWorkflow;
const ListQACateResponse = models.ListQACateResponse;
const RetryDocParseResponse = models.RetryDocParseResponse;
const CreateRejectedQuestionResponse = models.CreateRejectedQuestionResponse;
const ListReleaseQAPreviewResponse = models.ListReleaseQAPreviewResponse;
const ExportUnsatisfiedReplyRequest = models.ExportUnsatisfiedReplyRequest;
const GroupQAResponse = models.GroupQAResponse;
const QuoteInfo = models.QuoteInfo;
const CreateAppRequest = models.CreateAppRequest;
const AppConfig = models.AppConfig;
const DescribeReleaseRequest = models.DescribeReleaseRequest;
const ReleaseQA = models.ReleaseQA;
const ListAppCategoryRequest = models.ListAppCategoryRequest;
const ListReleaseConfigPreviewRequest = models.ListReleaseConfigPreviewRequest;
const CallDetail = models.CallDetail;
const DocFilterFlag = models.DocFilterFlag;
const ListReleaseDocPreviewRequest = models.ListReleaseDocPreviewRequest;
const TokenStat = models.TokenStat;
const DocSegment = models.DocSegment;
const UnsatisfiedReply = models.UnsatisfiedReply;
const DescribeUnsatisfiedReplyContextResponse = models.DescribeUnsatisfiedReplyContextResponse;
const ModifyDocAttrRangeRequest = models.ModifyDocAttrRangeRequest;
const DigitalHumanConfig = models.DigitalHumanConfig;
const CreateRejectedQuestionRequest = models.CreateRejectedQuestionRequest;
const DescribeKnowledgeUsagePieGraphRequest = models.DescribeKnowledgeUsagePieGraphRequest;
const AttrLabelDetail = models.AttrLabelDetail;
const DescribeReferResponse = models.DescribeReferResponse;
const Context = models.Context;
const ListDocRequest = models.ListDocRequest;
const QAQuery = models.QAQuery;
const GroupQARequest = models.GroupQARequest;
const UpdatePeriodInfo = models.UpdatePeriodInfo;
const DescribeCallStatsGraphRequest = models.DescribeCallStatsGraphRequest;
const GetMsgRecordResponse = models.GetMsgRecordResponse;
const DescribeAppRequest = models.DescribeAppRequest;
const GetReconstructDocumentResultRequest = models.GetReconstructDocumentResultRequest;
const DescribeKnowledgeUsageRequest = models.DescribeKnowledgeUsageRequest;
const ListQAResponse = models.ListQAResponse;
const IgnoreUnsatisfiedReplyRequest = models.IgnoreUnsatisfiedReplyRequest;
const DescribeReleaseResponse = models.DescribeReleaseResponse;
const DescribeConcurrencyUsageGraphResponse = models.DescribeConcurrencyUsageGraphResponse;
const ListDocItem = models.ListDocItem;
const VerifyQARequest = models.VerifyQARequest;
const RateMsgRecordRequest = models.RateMsgRecordRequest;
const AppModel = models.AppModel;
const Stat = models.Stat;
const DescribeKnowledgeUsagePieGraphResponse = models.DescribeKnowledgeUsagePieGraphResponse;
const ListRejectedQuestionResponse = models.ListRejectedQuestionResponse;
const ClassifyLabel = models.ClassifyLabel;
const DescribeTokenUsageGraphResponse = models.DescribeTokenUsageGraphResponse;
const SimilarQuestionModify = models.SimilarQuestionModify;
const WorkflowRunNodeInfo = models.WorkflowRunNodeInfo;
const StatisticInfo = models.StatisticInfo;
const RetryDocAuditResponse = models.RetryDocAuditResponse;
const GetReconstructDocumentResultResponse = models.GetReconstructDocumentResultResponse;
const ModifyDocCateRequest = models.ModifyDocCateRequest;
const RetryReleaseResponse = models.RetryReleaseResponse;
const GetLikeDataCountRequest = models.GetLikeDataCountRequest;
const DeleteRejectedQuestionResponse = models.DeleteRejectedQuestionResponse;
const Credentials = models.Credentials;
const MsgFileInfo = models.MsgFileInfo;
const CreateAttributeLabelRequest = models.CreateAttributeLabelRequest;
const ListAppResponse = models.ListAppResponse;
const AppInfo = models.AppInfo;
const CateInfo = models.CateInfo;
const CreateReconstructDocumentFlowRequest = models.CreateReconstructDocumentFlowRequest;
const ValueInfo = models.ValueInfo;
const KnowledgeQaConfig = models.KnowledgeQaConfig;
const RejectedQuestion = models.RejectedQuestion;
const MsgRecordReference = models.MsgRecordReference;
const AICallConfig = models.AICallConfig;
const ListRejectedQuestionPreviewRequest = models.ListRejectedQuestionPreviewRequest;
const ListReleaseConfigPreviewResponse = models.ListReleaseConfigPreviewResponse;
const ModelInfo = models.ModelInfo;
const DeleteRejectedQuestionRequest = models.DeleteRejectedQuestionRequest;
const Highlight = models.Highlight;
const FileInfo = models.FileInfo;
const ExportQAListRequest = models.ExportQAListRequest;
const GetDocPreviewResponse = models.GetDocPreviewResponse;
const DescribeConcurrencyUsageResponse = models.DescribeConcurrencyUsageResponse;
const CreateReleaseResponse = models.CreateReleaseResponse;
const ModifyAppRequest = models.ModifyAppRequest;
const KnowledgeDetail = models.KnowledgeDetail;
const DeleteAttributeLabelResponse = models.DeleteAttributeLabelResponse;
const RetryReleaseRequest = models.RetryReleaseRequest;
const KnowledgeQaPlugin = models.KnowledgeQaPlugin;
const IntentAchievement = models.IntentAchievement;
const DeleteQACateRequest = models.DeleteQACateRequest;
const GenerateQARequest = models.GenerateQARequest;
const GetWsTokenRequest = models.GetWsTokenRequest;
const QACate = models.QACate;
const ModifyAttributeLabelResponse = models.ModifyAttributeLabelResponse;
const ModifyDocRequest = models.ModifyDocRequest;
const DescribeTokenUsageResponse = models.DescribeTokenUsageResponse;
const DeleteAppResponse = models.DeleteAppResponse;
const SearchRange = models.SearchRange;
const ListAttributeLabelRequest = models.ListAttributeLabelRequest;
const DeleteDocCateRequest = models.DeleteDocCateRequest;
const AgentReference = models.AgentReference;
const DeleteDocResponse = models.DeleteDocResponse;
const BaseConfig = models.BaseConfig;
const DescribeSegmentsResponse = models.DescribeSegmentsResponse;
const SimilarQuestion = models.SimilarQuestion;
const ClassifyConfig = models.ClassifyConfig;
const DescribeConcurrencyUsageRequest = models.DescribeConcurrencyUsageRequest;
const GroupDocResponse = models.GroupDocResponse;
const UploadAttributeLabelRequest = models.UploadAttributeLabelRequest;
const ListUsageCallDetailResponse = models.ListUsageCallDetailResponse;
const ExportAttributeLabelRequest = models.ExportAttributeLabelRequest;
const DescribeTokenUsageRequest = models.DescribeTokenUsageRequest;
const GetAppKnowledgeCountResponse = models.GetAppKnowledgeCountResponse;
const CreateAttributeLabelResponse = models.CreateAttributeLabelResponse;
const DuplicateFileHandle = models.DuplicateFileHandle;
const ListAppKnowledgeDetailRequest = models.ListAppKnowledgeDetailRequest;
const CreateQAResponse = models.CreateQAResponse;
const ListQACateRequest = models.ListQACateRequest;
const ListReleaseQAPreviewRequest = models.ListReleaseQAPreviewRequest;
const DescribeReleaseInfoResponse = models.DescribeReleaseInfoResponse;
const DescribeAppResponse = models.DescribeAppResponse;
const DeleteAppRequest = models.DeleteAppRequest;
const ModifyRejectedQuestionResponse = models.ModifyRejectedQuestionResponse;
const WorkFlowSummary = models.WorkFlowSummary;
const TaskParams = models.TaskParams;
const ListAppCategoryRspOption = models.ListAppCategoryRspOption;
const DescribeStorageCredentialRequest = models.DescribeStorageCredentialRequest;
const QAList = models.QAList;
const DescribeCorpResponse = models.DescribeCorpResponse;
const ModifyDocCateResponse = models.ModifyDocCateResponse;
const ListReleaseResponse = models.ListReleaseResponse;
const ListModelResponse = models.ListModelResponse;
const ListAttributeLabelResponse = models.ListAttributeLabelResponse;
const ListReleaseItem = models.ListReleaseItem;
const ModifyQAResponse = models.ModifyQAResponse;
const DeleteQAResponse = models.DeleteQAResponse;
const DescribeCallStatsGraphResponse = models.DescribeCallStatsGraphResponse;
const GetMsgRecordRequest = models.GetMsgRecordRequest;
const DescribeStorageCredentialResponse = models.DescribeStorageCredentialResponse;
const CheckAttributeLabelExistResponse = models.CheckAttributeLabelExistResponse;
const StrValue = models.StrValue;
const GetTaskStatusRequest = models.GetTaskStatusRequest;
const CheckAttributeLabelReferResponse = models.CheckAttributeLabelReferResponse;
const RateMsgRecordResponse = models.RateMsgRecordResponse;
const PluginToolReqParam = models.PluginToolReqParam;
const ReleaseRejectedQuestion = models.ReleaseRejectedQuestion;
const CreateQACateRequest = models.CreateQACateRequest;
const DescribeRobotBizIDByAppKeyRequest = models.DescribeRobotBizIDByAppKeyRequest;
const ExportUnsatisfiedReplyResponse = models.ExportUnsatisfiedReplyResponse;
const CreateReconstructDocumentFlowResponse = models.CreateReconstructDocumentFlowResponse;
const HistorySummary = models.HistorySummary;
const VerifyQAResponse = models.VerifyQAResponse;
const ReleaseConfigs = models.ReleaseConfigs;
const DescribeSegmentsRequest = models.DescribeSegmentsRequest;
const DescribeSearchStatsGraphRequest = models.DescribeSearchStatsGraphRequest;
const DescribeSearchStatsGraphResponse = models.DescribeSearchStatsGraphResponse;
const Filters = models.Filters;
const DescribeReferRequest = models.DescribeReferRequest;
const IgnoreUnsatisfiedReplyResponse = models.IgnoreUnsatisfiedReplyResponse;
const StopDocParseRequest = models.StopDocParseRequest;
const KnowledgeWorkflow = models.KnowledgeWorkflow;
const ListModelRequest = models.ListModelRequest;
const ListSelectDocRequest = models.ListSelectDocRequest;


/**
 * lke client
 * @class
 */
class LkeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("lke.intl.tencentcloudapi.com", "2023-11-30", credential, region, profile);
    }
    
    /**
     * This API is used to query a list of dissatisfied responses.
     * @param {ListUnsatisfiedReplyRequest} req
     * @param {function(string, ListUnsatisfiedReplyResponse):void} cb
     * @public
     */
    ListUnsatisfiedReply(req, cb) {
        let resp = new ListUnsatisfiedReplyResponse();
        this.request("ListUnsatisfiedReply", req, resp, cb);
    }

    /**
     * This API is used to delete attribute labels.
     * @param {DeleteAttributeLabelRequest} req
     * @param {function(string, DeleteAttributeLabelResponse):void} cb
     * @public
     */
    DeleteAttributeLabel(req, cb) {
        let resp = new DeleteAttributeLabelResponse();
        this.request("DeleteAttributeLabel", req, resp, cb);
    }

    /**
     * This API is used to query pie chart of the enterprise knowledge base capacity .
     * @param {DescribeKnowledgeUsagePieGraphRequest} req
     * @param {function(string, DescribeKnowledgeUsagePieGraphResponse):void} cb
     * @public
     */
    DescribeKnowledgeUsagePieGraph(req, cb) {
        let resp = new DescribeKnowledgeUsagePieGraphResponse();
        this.request("DescribeKnowledgeUsagePieGraph", req, resp, cb);
    }

    /**
     * This API is used to modify Q&A applicable scope in batches.
     * @param {ModifyQAAttrRangeRequest} req
     * @param {function(string, ModifyQAAttrRangeResponse):void} cb
     * @public
     */
    ModifyQAAttrRange(req, cb) {
        let resp = new ModifyQAAttrRangeResponse();
        this.request("ModifyQAAttrRange", req, resp, cb);
    }

    /**
     * This is an asynchronous APIs, used to get document parsing task results.
     * @param {GetReconstructDocumentResultRequest} req
     * @param {function(string, GetReconstructDocumentResultResponse):void} cb
     * @public
     */
    GetReconstructDocumentResult(req, cb) {
        let resp = new GetReconstructDocumentResultResponse();
        this.request("GetReconstructDocumentResult", req, resp, cb);
    }

    /**
     * This API is used to get account information.
     * @param {ListSelectDocRequest} req
     * @param {function(string, ListSelectDocResponse):void} cb
     * @public
     */
    ListSelectDoc(req, cb) {
        let resp = new ListSelectDocResponse();
        this.request("ListSelectDoc", req, resp, cb);
    }

    /**
     * This API is used to modify applicable scope of the document in batches.
     * @param {ModifyDocAttrRangeRequest} req
     * @param {function(string, ModifyDocAttrRangeResponse):void} cb
     * @public
     */
    ModifyDocAttrRange(req, cb) {
        let resp = new ModifyDocAttrRangeResponse();
        this.request("ModifyDocAttrRange", req, resp, cb);
    }

    /**
     * This API is used to create a release.
     * @param {CreateReleaseRequest} req
     * @param {function(string, CreateReleaseResponse):void} cb
     * @public
     */
    CreateRelease(req, cb) {
        let resp = new CreateReleaseResponse();
        this.request("CreateRelease", req, resp, cb);
    }

    /**
     * This API is used to delete Q&As.
     * @param {DeleteQARequest} req
     * @param {function(string, DeleteQAResponse):void} cb
     * @public
     */
    DeleteQA(req, cb) {
        let resp = new DeleteQAResponse();
        this.request("DeleteQA", req, resp, cb);
    }

    /**
     * This API is used to create attributes.
     * @param {CreateAttributeLabelRequest} req
     * @param {function(string, CreateAttributeLabelResponse):void} cb
     * @public
     */
    CreateAttributeLabel(req, cb) {
        let resp = new CreateAttributeLabelResponse();
        this.request("CreateAttributeLabel", req, resp, cb);
    }

    /**
     * This API is used to retry document parsing.
     * @param {RetryDocAuditRequest} req
     * @param {function(string, RetryDocAuditResponse):void} cb
     * @public
     */
    RetryDocAudit(req, cb) {
        let resp = new RetryDocAuditResponse();
        this.request("RetryDocAudit", req, resp, cb);
    }

    /**
     * This API is used to query attribute label details.
     * @param {DescribeAttributeLabelRequest} req
     * @param {function(string, DescribeAttributeLabelResponse):void} cb
     * @public
     */
    DescribeAttributeLabel(req, cb) {
        let resp = new DescribeAttributeLabelResponse();
        this.request("DescribeAttributeLabel", req, resp, cb);
    }

    /**
     * This API is used to release a preview of rejected questions.
     * @param {ListRejectedQuestionPreviewRequest} req
     * @param {function(string, ListRejectedQuestionPreviewResponse):void} cb
     * @public
     */
    ListRejectedQuestionPreview(req, cb) {
        let resp = new ListRejectedQuestionPreviewResponse();
        this.request("ListRejectedQuestionPreview", req, resp, cb);
    }

    /**
     * This API is used to retry document parsing.
     * @param {RetryDocParseRequest} req
     * @param {function(string, RetryDocParseResponse):void} cb
     * @public
     */
    RetryDocParse(req, cb) {
        let resp = new RetryDocParseResponse();
        this.request("RetryDocParse", req, resp, cb);
    }

    /**
     * This API is used to enter Q&As.
     * @param {CreateQARequest} req
     * @param {function(string, CreateQAResponse):void} cb
     * @public
     */
    CreateQA(req, cb) {
        let resp = new CreateQAResponse();
        this.request("CreateQA", req, resp, cb);
    }

    /**
     * This API is used to show API call token line chart.
     * @param {DescribeTokenUsageGraphRequest} req
     * @param {function(string, DescribeTokenUsageGraphResponse):void} cb
     * @public
     */
    DescribeTokenUsageGraph(req, cb) {
        let resp = new DescribeTokenUsageGraphResponse();
        this.request("DescribeTokenUsageGraph", req, resp, cb);
    }

    /**
     * This API is used to generate Q%A from document.
     * @param {GenerateQARequest} req
     * @param {function(string, GenerateQAResponse):void} cb
     * @public
     */
    GenerateQA(req, cb) {
        let resp = new GenerateQAResponse();
        this.request("GenerateQA", req, resp, cb);
    }

    /**
     * This API is used to obtain application details under the corporate.
     * @param {DescribeAppRequest} req
     * @param {function(string, DescribeAppResponse):void} cb
     * @public
     */
    DescribeApp(req, cb) {
        let resp = new DescribeAppResponse();
        this.request("DescribeApp", req, resp, cb);
    }

    /**
     * This API is used to get ws token.
     * @param {GetWsTokenRequest} req
     * @param {function(string, GetWsTokenResponse):void} cb
     * @public
     */
    GetWsToken(req, cb) {
        let resp = new GetWsTokenResponse();
        this.request("GetWsToken", req, resp, cb);
    }

    /**
     * This API is used to query attribute label lists.
     * @param {ListAttributeLabelRequest} req
     * @param {function(string, ListAttributeLabelResponse):void} cb
     * @public
     */
    ListAttributeLabel(req, cb) {
        let resp = new ListAttributeLabelResponse();
        this.request("ListAttributeLabel", req, resp, cb);
    }

    /**
     * This API is used to preview the release configuration items.
     * @param {ListReleaseConfigPreviewRequest} req
     * @param {function(string, ListReleaseConfigPreviewResponse):void} cb
     * @public
     */
    ListReleaseConfigPreview(req, cb) {
        let resp = new ListReleaseConfigPreviewResponse();
        this.request("ListReleaseConfigPreview", req, resp, cb);
    }

    /**
     * This API is used to query line chart of search service calls.
     * @param {DescribeSearchStatsGraphRequest} req
     * @param {function(string, DescribeSearchStatsGraphResponse):void} cb
     * @public
     */
    DescribeSearchStatsGraph(req, cb) {
        let resp = new DescribeSearchStatsGraphResponse();
        this.request("DescribeSearchStatsGraph", req, resp, cb);
    }

    /**
     * This API is used to delete Doc categories.
     * @param {DeleteDocCateRequest} req
     * @param {function(string, DeleteDocCateResponse):void} cb
     * @public
     */
    DeleteDocCate(req, cb) {
        let resp = new DeleteDocCateResponse();
        this.request("DeleteDocCate", req, resp, cb);
    }

    /**
     * This API is used to verify Q&A.
     * @param {VerifyQARequest} req
     * @param {function(string, VerifyQAResponse):void} cb
     * @public
     */
    VerifyQA(req, cb) {
        let resp = new VerifyQAResponse();
        this.request("VerifyQA", req, resp, cb);
    }

    /**
     * This API is used to create doc categories.
     * @param {CreateDocCateRequest} req
     * @param {function(string, CreateDocCateResponse):void} cb
     * @public
     */
    CreateDocCate(req, cb) {
        let resp = new CreateDocCateResponse();
        this.request("CreateDocCate", req, resp, cb);
    }

    /**
     * This API is used to check if the label name under an attribute exist.
     * @param {CheckAttributeLabelExistRequest} req
     * @param {function(string, CheckAttributeLabelExistResponse):void} cb
     * @public
     */
    CheckAttributeLabelExist(req, cb) {
        let resp = new CheckAttributeLabelExistResponse();
        this.request("CheckAttributeLabelExist", req, resp, cb);
    }

    /**
     * This API is used to rename a document.
     * @param {RenameDocRequest} req
     * @param {function(string, RenameDocResponse):void} cb
     * @public
     */
    RenameDoc(req, cb) {
        let resp = new RenameDocResponse();
        this.request("RenameDoc", req, resp, cb);
    }

    /**
     * This API is used to query document details.
     * @param {DescribeDocRequest} req
     * @param {function(string, DescribeDocResponse):void} cb
     * @public
     */
    DescribeDoc(req, cb) {
        let resp = new DescribeDocResponse();
        this.request("DescribeDoc", req, resp, cb);
    }

    /**
     * This API is used to query single call details in a list.
     * @param {ListUsageCallDetailRequest} req
     * @param {function(string, ListUsageCallDetailResponse):void} cb
     * @public
     */
    ListUsageCallDetail(req, cb) {
        let resp = new ListUsageCallDetailResponse();
        this.request("ListUsageCallDetail", req, resp, cb);
    }

    /**
     * This API is used to get the temporary key for file upload.
     * @param {DescribeStorageCredentialRequest} req
     * @param {function(string, DescribeStorageCredentialResponse):void} cb
     * @public
     */
    DescribeStorageCredential(req, cb) {
        let resp = new DescribeStorageCredentialResponse();
        this.request("DescribeStorageCredential", req, resp, cb);
    }

    /**
     * This API is used to show messages for likes and dislikes.
     * @param {RateMsgRecordRequest} req
     * @param {function(string, RateMsgRecordResponse):void} cb
     * @public
     */
    RateMsgRecord(req, cb) {
        let resp = new RateMsgRecordResponse();
        this.request("RateMsgRecord", req, resp, cb);
    }

    /**
     * List of documents.
     * @param {ListReleaseQAPreviewRequest} req
     * @param {function(string, ListReleaseQAPreviewResponse):void} cb
     * @public
     */
    ListReleaseQAPreview(req, cb) {
        let resp = new ListReleaseQAPreviewResponse();
        this.request("ListReleaseQAPreview", req, resp, cb);
    }

    /**
     * This API is used to modify Q&A categories.
     * @param {ModifyQACateRequest} req
     * @param {function(string, ModifyQACateResponse):void} cb
     * @public
     */
    ModifyQACate(req, cb) {
        let resp = new ModifyQACateResponse();
        this.request("ModifyQACate", req, resp, cb);
    }

    /**
     * This API is used to delete applications.
     * @param {DeleteAppRequest} req
     * @param {function(string, DeleteAppResponse):void} cb
     * @public
     */
    DeleteApp(req, cb) {
        let resp = new DeleteAppResponse();
        this.request("DeleteApp", req, resp, cb);
    }

    /**
     * This API is used to check attribute label references.
     * @param {CheckAttributeLabelReferRequest} req
     * @param {function(string, CheckAttributeLabelReferResponse):void} cb
     * @public
     */
    CheckAttributeLabelRefer(req, cb) {
        let resp = new CheckAttributeLabelReferResponse();
        this.request("CheckAttributeLabelRefer", req, resp, cb);
    }

    /**
     * This API is used to query corporate details.
     * @param {DescribeCorpRequest} req
     * @param {function(string, DescribeCorpResponse):void} cb
     * @public
     */
    DescribeCorp(req, cb) {
        let resp = new DescribeCorpResponse();
        this.request("DescribeCorp", req, resp, cb);
    }

    /**
     * This API is used to get the context of dissatisfied responses.
     * @param {DescribeUnsatisfiedReplyContextRequest} req
     * @param {function(string, DescribeUnsatisfiedReplyContextResponse):void} cb
     * @public
     */
    DescribeUnsatisfiedReplyContext(req, cb) {
        let resp = new DescribeUnsatisfiedReplyContextResponse();
        this.request("DescribeUnsatisfiedReplyContext", req, resp, cb);
    }

    /**
     * DocGroup.
     * @param {GroupDocRequest} req
     * @param {function(string, GroupDocResponse):void} cb
     * @public
     */
    GroupDoc(req, cb) {
        let resp = new GroupDocResponse();
        this.request("GroupDoc", req, resp, cb);
    }

    /**
     * This API is used to get the application list under the corporate.
     * @param {ListAppRequest} req
     * @param {function(string, ListAppResponse):void} cb
     * @public
     */
    ListApp(req, cb) {
        let resp = new ListAppResponse();
        this.request("ListApp", req, resp, cb);
    }

    /**
     * This API is used to query API call token details.
     * @param {DescribeTokenUsageRequest} req
     * @param {function(string, DescribeTokenUsageResponse):void} cb
     * @public
     */
    DescribeTokenUsage(req, cb) {
        let resp = new DescribeTokenUsageResponse();
        this.request("DescribeTokenUsage", req, resp, cb);
    }

    /**
     * This API is used to get Q&A categories.
     * @param {ListQACateRequest} req
     * @param {function(string, ListQACateResponse):void} cb
     * @public
     */
    ListQACate(req, cb) {
        let resp = new ListQACateResponse();
        this.request("ListQACate", req, resp, cb);
    }

    /**
     * This API is used to get list of application types.
     * @param {ListAppCategoryRequest} req
     * @param {function(string, ListAppCategoryResponse):void} cb
     * @public
     */
    ListAppCategory(req, cb) {
        let resp = new ListAppCategoryResponse();
        this.request("ListAppCategory", req, resp, cb);
    }

    /**
     * This API is used to query Q&A details.
     * @param {DescribeQARequest} req
     * @param {function(string, DescribeQAResponse):void} cb
     * @public
     */
    DescribeQA(req, cb) {
        let resp = new DescribeQAResponse();
        this.request("DescribeQA", req, resp, cb);
    }

    /**
     * This API is used to create knowledge engine applications.
     * @param {CreateAppRequest} req
     * @param {function(string, CreateAppResponse):void} cb
     * @public
     */
    CreateApp(req, cb) {
        let resp = new CreateAppResponse();
        this.request("CreateApp", req, resp, cb);
    }

    /**
     * This API is used to modify documents.
     * @param {ModifyDocRequest} req
     * @param {function(string, ModifyDocResponse):void} cb
     * @public
     */
    ModifyDoc(req, cb) {
        let resp = new ModifyDocResponse();
        this.request("ModifyDoc", req, resp, cb);
    }

    /**
     * This API is used to create Q&A categories.
     * @param {CreateQACateRequest} req
     * @param {function(string, CreateQACateResponse):void} cb
     * @public
     */
    CreateQACate(req, cb) {
        let resp = new CreateQACateResponse();
        this.request("CreateQACate", req, resp, cb);
    }

    /**
     * This API is used to export attribute labels.
     * @param {ExportAttributeLabelRequest} req
     * @param {function(string, ExportAttributeLabelResponse):void} cb
     * @public
     */
    ExportAttributeLabel(req, cb) {
        let resp = new ExportAttributeLabelResponse();
        this.request("ExportAttributeLabel", req, resp, cb);
    }

    /**
     * This API is used to get the reference source details list.
     * @param {DescribeReferRequest} req
     * @param {function(string, DescribeReferResponse):void} cb
     * @public
     */
    DescribeRefer(req, cb) {
        let resp = new DescribeReferResponse();
        this.request("DescribeRefer", req, resp, cb);
    }

    /**
     * This API is used to query the knowledge library usage.
     * @param {DescribeKnowledgeUsageRequest} req
     * @param {function(string, DescribeKnowledgeUsageResponse):void} cb
     * @public
     */
    DescribeKnowledgeUsage(req, cb) {
        let resp = new DescribeKnowledgeUsageResponse();
        this.request("DescribeKnowledgeUsage", req, resp, cb);
    }

    /**
     * This API is used to get application business ID through appKey.
     * @param {DescribeRobotBizIDByAppKeyRequest} req
     * @param {function(string, DescribeRobotBizIDByAppKeyResponse):void} cb
     * @public
     */
    DescribeRobotBizIDByAppKey(req, cb) {
        let resp = new DescribeRobotBizIDByAppKeyResponse();
        this.request("DescribeRobotBizIDByAppKey", req, resp, cb);
    }

    /**
     * This API is used to get document list.
     * @param {ListDocRequest} req
     * @param {function(string, ListDocResponse):void} cb
     * @public
     */
    ListDoc(req, cb) {
        let resp = new ListDocResponse();
        this.request("ListDoc", req, resp, cb);
    }

    /**
     * This API is used to query Q&A lists.
     * @param {ListQARequest} req
     * @param {function(string, ListQAResponse):void} cb
     * @public
     */
    ListQA(req, cb) {
        let resp = new ListQAResponse();
        this.request("ListQA", req, resp, cb);
    }

    /**
     * This API is used to get likes and dislikes data statistics.
     * @param {GetLikeDataCountRequest} req
     * @param {function(string, GetLikeDataCountResponse):void} cb
     * @public
     */
    GetLikeDataCount(req, cb) {
        let resp = new GetLikeDataCountResponse();
        this.request("GetLikeDataCount", req, resp, cb);
    }

    /**
     * This API is used to modify Doc categories.
     * @param {ModifyDocCateRequest} req
     * @param {function(string, ModifyDocCateResponse):void} cb
     * @public
     */
    ModifyDocCate(req, cb) {
        let resp = new ModifyDocCateResponse();
        this.request("ModifyDocCate", req, resp, cb);
    }

    /**
     * This API is used to export Q&A list.
     * @param {ExportQAListRequest} req
     * @param {function(string, ExportQAListResponse):void} cb
     * @public
     */
    ExportQAList(req, cb) {
        let resp = new ExportQAListResponse();
        this.request("ExportQAList", req, resp, cb);
    }

    /**
     * This API is used to initiate requests for this asynchronous API, for initiating document parsing tasks.
Document parsing supports converting images or PDF files into Markdown format files, and can parse content elements including tables, formulas, images, headings, paragraphs, headers, and footers, and intelligently convert the content into reading order.
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
     * This API is used to upload and import attribute labels.
     * @param {UploadAttributeLabelRequest} req
     * @param {function(string, UploadAttributeLabelResponse):void} cb
     * @public
     */
    UploadAttributeLabel(req, cb) {
        let resp = new UploadAttributeLabelResponse();
        this.request("UploadAttributeLabel", req, resp, cb);
    }

    /**
     * This API is used to get document preview information.
     * @param {GetDocPreviewRequest} req
     * @param {function(string, GetDocPreviewResponse):void} cb
     * @public
     */
    GetDocPreview(req, cb) {
        let resp = new GetDocPreviewResponse();
        this.request("GetDocPreview", req, resp, cb);
    }

    /**
     * This API is used to response to concurrent calls.
     * @param {DescribeConcurrencyUsageRequest} req
     * @param {function(string, DescribeConcurrencyUsageResponse):void} cb
     * @public
     */
    DescribeConcurrencyUsage(req, cb) {
        let resp = new DescribeConcurrencyUsageResponse();
        this.request("DescribeConcurrencyUsage", req, resp, cb);
    }

    /**
     * This API is used to modify rejected questions.
     * @param {ModifyRejectedQuestionRequest} req
     * @param {function(string, ModifyRejectedQuestionResponse):void} cb
     * @public
     */
    ModifyRejectedQuestion(req, cb) {
        let resp = new ModifyRejectedQuestionResponse();
        this.request("ModifyRejectedQuestion", req, resp, cb);
    }

    /**
     * This API is used to pull the release button status and last release time.
     * @param {DescribeReleaseInfoRequest} req
     * @param {function(string, DescribeReleaseInfoResponse):void} cb
     * @public
     */
    DescribeReleaseInfo(req, cb) {
        let resp = new DescribeReleaseInfoResponse();
        this.request("DescribeReleaseInfo", req, resp, cb);
    }

    /**
     * This API is used to get the release list.
     * @param {ListReleaseRequest} req
     * @param {function(string, ListReleaseResponse):void} cb
     * @public
     */
    ListRelease(req, cb) {
        let resp = new ListReleaseResponse();
        this.request("ListRelease", req, resp, cb);
    }

    /**
     * This API is used to get the model list.
     * @param {ListModelRequest} req
     * @param {function(string, ListModelResponse):void} cb
     * @public
     */
    ListModel(req, cb) {
        let resp = new ListModelResponse();
        this.request("ListModel", req, resp, cb);
    }

    /**
     * This API is used to get rejected questions.
     * @param {ListRejectedQuestionRequest} req
     * @param {function(string, ListRejectedQuestionResponse):void} cb
     * @public
     */
    ListRejectedQuestion(req, cb) {
        let resp = new ListRejectedQuestionResponse();
        this.request("ListRejectedQuestion", req, resp, cb);
    }

    /**
     * This API is used to delete categories.
     * @param {DeleteQACateRequest} req
     * @param {function(string, DeleteQACateResponse):void} cb
     * @public
     */
    DeleteQACate(req, cb) {
        let resp = new DeleteQACateResponse();
        this.request("DeleteQACate", req, resp, cb);
    }

    /**
     * This API is used to export dissatisfied responses.
     * @param {ExportUnsatisfiedReplyRequest} req
     * @param {function(string, ExportUnsatisfiedReplyResponse):void} cb
     * @public
     */
    ExportUnsatisfiedReply(req, cb) {
        let resp = new ExportUnsatisfiedReplyResponse();
        this.request("ExportUnsatisfiedReply", req, resp, cb);
    }

    /**
     * This API is used to retry after release suspension.
     * @param {RetryReleaseRequest} req
     * @param {function(string, RetryReleaseResponse):void} cb
     * @public
     */
    RetryRelease(req, cb) {
        let resp = new RetryReleaseResponse();
        this.request("RetryRelease", req, resp, cb);
    }

    /**
     * This API is used to update Q&As.
     * @param {ModifyQARequest} req
     * @param {function(string, ModifyQAResponse):void} cb
     * @public
     */
    ModifyQA(req, cb) {
        let resp = new ModifyQAResponse();
        this.request("ModifyQA", req, resp, cb);
    }

    /**
     * This API is used to save a knowledge base document Q&As.
Three steps to store a file in the knowledge library of the application: 
1. Obtain a temporary key. For more information, see [API Documentation](https://cloud.tencent.com/document/product/1759/105050). Different parameter combinations of the temporary key have different permissions. For more information, see [Tencent Cloud Agent Development Platform/ADP COS Guide](https://cloud.tencent.com/document/product/1759/116238). 
2. Call the COS storage API provided by Tencent Cloud to store the file in the COS of ADP. For details, see [COS SDK Overview](https://cloud.tencent.com/document/product/436/6474). Note that the temporary key method is used to operate COS. 
3. Call this API to store the basic information of the file in ADP. 
For the above steps, see [Documentation](https://cloud.tencent.com/document/product/1759/108903). At the end of the documentation, there is a [code demo](https://cloud.tencent.com/document/product/1759/108903#demo), which can be used as a reference.
     * @param {SaveDocRequest} req
     * @param {function(string, SaveDocResponse):void} cb
     * @public
     */
    SaveDoc(req, cb) {
        let resp = new SaveDocResponse();
        this.request("SaveDoc", req, resp, cb);
    }

    /**
     * This API is used to delete documents.
     * @param {DeleteDocRequest} req
     * @param {function(string, DeleteDocResponse):void} cb
     * @public
     */
    DeleteDoc(req, cb) {
        let resp = new DeleteDocResponse();
        this.request("DeleteDoc", req, resp, cb);
    }

    /**
     * This API is used to delete rejected questions.
     * @param {DeleteRejectedQuestionRequest} req
     * @param {function(string, DeleteRejectedQuestionResponse):void} cb
     * @public
     */
    DeleteRejectedQuestion(req, cb) {
        let resp = new DeleteRejectedQuestionResponse();
        this.request("DeleteRejectedQuestion", req, resp, cb);
    }

    /**
     * This API is used to get document category.
     * @param {ListDocCateRequest} req
     * @param {function(string, ListDocCateResponse):void} cb
     * @public
     */
    ListDocCate(req, cb) {
        let resp = new ListDocCateResponse();
        this.request("ListDocCate", req, resp, cb);
    }

    /**
     * This API is used to modify application request structure.
     * @param {ModifyAppRequest} req
     * @param {function(string, ModifyAppResponse):void} cb
     * @public
     */
    ModifyApp(req, cb) {
        let resp = new ModifyAppResponse();
        this.request("ModifyApp", req, resp, cb);
    }

    /**
     * This API is used to get application secret keys.
     * @param {GetAppSecretRequest} req
     * @param {function(string, GetAppSecretResponse):void} cb
     * @public
     */
    GetAppSecret(req, cb) {
        let resp = new GetAppSecretResponse();
        this.request("GetAppSecret", req, resp, cb);
    }

    /**
     * This API is used to edit attribute labels.
     * @param {ModifyAttributeLabelRequest} req
     * @param {function(string, ModifyAttributeLabelResponse):void} cb
     * @public
     */
    ModifyAttributeLabel(req, cb) {
        let resp = new ModifyAttributeLabelResponse();
        this.request("ModifyAttributeLabel", req, resp, cb);
    }

    /**
     * This API is used to get response type data statistics.
     * @param {GetAnswerTypeDataCountRequest} req
     * @param {function(string, GetAnswerTypeDataCountResponse):void} cb
     * @public
     */
    GetAnswerTypeDataCount(req, cb) {
        let resp = new GetAnswerTypeDataCountResponse();
        this.request("GetAnswerTypeDataCount", req, resp, cb);
    }

    /**
     * This API is used to preview released documents.
     * @param {ListReleaseDocPreviewRequest} req
     * @param {function(string, ListReleaseDocPreviewResponse):void} cb
     * @public
     */
    ListReleaseDocPreview(req, cb) {
        let resp = new ListReleaseDocPreviewResponse();
        this.request("ListReleaseDocPreview", req, resp, cb);
    }

    /**
     * This API is used to query release details.
     * @param {DescribeReleaseRequest} req
     * @param {function(string, DescribeReleaseResponse):void} cb
     * @public
     */
    DescribeRelease(req, cb) {
        let resp = new DescribeReleaseResponse();
        this.request("DescribeRelease", req, resp, cb);
    }

    /**
     * This API is used to create enterprises.
     * @param {CreateCorpRequest} req
     * @param {function(string, CreateCorpResponse):void} cb
     * @public
     */
    CreateCorp(req, cb) {
        let resp = new CreateCorpResponse();
        this.request("CreateCorp", req, resp, cb);
    }

    /**
     * This API is used to get a model list.
     * @param {GetAppKnowledgeCountRequest} req
     * @param {function(string, GetAppKnowledgeCountResponse):void} cb
     * @public
     */
    GetAppKnowledgeCount(req, cb) {
        let resp = new GetAppKnowledgeCountResponse();
        this.request("GetAppKnowledgeCount", req, resp, cb);
    }

    /**
     * This API is used to show line chart of concurrent calls.
     * @param {DescribeConcurrencyUsageGraphRequest} req
     * @param {function(string, DescribeConcurrencyUsageGraphResponse):void} cb
     * @public
     */
    DescribeConcurrencyUsageGraph(req, cb) {
        let resp = new DescribeConcurrencyUsageGraphResponse();
        this.request("DescribeConcurrencyUsageGraph", req, resp, cb);
    }

    /**
     * This API is used to obtain chat history based on the session ID (only historical session data within the past 180 days will be retained).
     * @param {GetMsgRecordRequest} req
     * @param {function(string, GetMsgRecordResponse):void} cb
     * @public
     */
    GetMsgRecord(req, cb) {
        let resp = new GetMsgRecordResponse();
        this.request("GetMsgRecord", req, resp, cb);
    }

    /**
     * This API is used to create rejected questions.
     * @param {CreateRejectedQuestionRequest} req
     * @param {function(string, CreateRejectedQuestionResponse):void} cb
     * @public
     */
    CreateRejectedQuestion(req, cb) {
        let resp = new CreateRejectedQuestionResponse();
        this.request("CreateRejectedQuestion", req, resp, cb);
    }

    /**
     * This API is used to show line chart of API calls.
     * @param {DescribeCallStatsGraphRequest} req
     * @param {function(string, DescribeCallStatsGraphResponse):void} cb
     * @public
     */
    DescribeCallStatsGraph(req, cb) {
        let resp = new DescribeCallStatsGraphResponse();
        this.request("DescribeCallStatsGraph", req, resp, cb);
    }

    /**
     * Q&A Group.
     * @param {GroupQARequest} req
     * @param {function(string, GroupQAResponse):void} cb
     * @public
     */
    GroupQA(req, cb) {
        let resp = new GroupQAResponse();
        this.request("GroupQA", req, resp, cb);
    }

    /**
     * This API is used to get fragment details.
     * @param {DescribeSegmentsRequest} req
     * @param {function(string, DescribeSegmentsResponse):void} cb
     * @public
     */
    DescribeSegments(req, cb) {
        let resp = new DescribeSegmentsResponse();
        this.request("DescribeSegments", req, resp, cb);
    }

    /**
     * This API is used to get the task status.
     * @param {GetTaskStatusRequest} req
     * @param {function(string, GetTaskStatusResponse):void} cb
     * @public
     */
    GetTaskStatus(req, cb) {
        let resp = new GetTaskStatusResponse();
        this.request("GetTaskStatus", req, resp, cb);
    }

    /**
     * This API is used to terminate document parsing.
     * @param {StopDocParseRequest} req
     * @param {function(string, StopDocParseResponse):void} cb
     * @public
     */
    StopDocParse(req, cb) {
        let resp = new StopDocParseResponse();
        this.request("StopDocParse", req, resp, cb);
    }

    /**
     * This API is used to query the knowledge base capacity details in a list.
     * @param {ListAppKnowledgeDetailRequest} req
     * @param {function(string, ListAppKnowledgeDetailResponse):void} cb
     * @public
     */
    ListAppKnowledgeDetail(req, cb) {
        let resp = new ListAppKnowledgeDetailResponse();
        this.request("ListAppKnowledgeDetail", req, resp, cb);
    }

    /**
     * This API is used to ignore dissatisfied responses.
     * @param {IgnoreUnsatisfiedReplyRequest} req
     * @param {function(string, IgnoreUnsatisfiedReplyResponse):void} cb
     * @public
     */
    IgnoreUnsatisfiedReply(req, cb) {
        let resp = new IgnoreUnsatisfiedReplyResponse();
        this.request("IgnoreUnsatisfiedReply", req, resp, cb);
    }


}
module.exports = LkeClient;
