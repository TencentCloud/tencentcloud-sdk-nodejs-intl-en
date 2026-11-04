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
const DeleteSkillShareRequest = models.DeleteSkillShareRequest;
const ToolConfig = models.ToolConfig;
const SkillClassification = models.SkillClassification;
const SearchInput = models.SearchInput;
const AgentAdvancedConfig = models.AgentAdvancedConfig;
const FinalRerankConfig = models.FinalRerankConfig;
const PluginStatistics = models.PluginStatistics;
const IntentAchievementInfo = models.IntentAchievementInfo;
const RollbackReleaseRequest = models.RollbackReleaseRequest;
const CustomVariable = models.CustomVariable;
const DescribeModelListResponse = models.DescribeModelListResponse;
const AppModelConfig = models.AppModelConfig;
const Plugin = models.Plugin;
const ApiKeyAuthConfig = models.ApiKeyAuthConfig;
const AgentPluginCredentialParam = models.AgentPluginCredentialParam;
const DescribeConversationRequest = models.DescribeConversationRequest;
const Conversation = models.Conversation;
const AuthConfig = models.AuthConfig;
const AppShareAccessControl = models.AppShareAccessControl;
const KBCategory = models.KBCategory;
const DialogCustomConfig = models.DialogCustomConfig;
const DescribeAppSummaryListRequest = models.DescribeAppSummaryListRequest;
const ExecuteConfig = models.ExecuteConfig;
const CreateLabelResponse = models.CreateLabelResponse;
const TriggerConfig = models.TriggerConfig;
const DescribeModelListRequest = models.DescribeModelListRequest;
const DescribeMsgRecordCategoryListResponse = models.DescribeMsgRecordCategoryListResponse;
const DeleteVariableResponse = models.DeleteVariableResponse;
const DescribeLabelSummaryListResponse = models.DescribeLabelSummaryListResponse;
const AgentExternalToolConfig = models.AgentExternalToolConfig;
const ApiPluginConfig = models.ApiPluginConfig;
const AppealingStatus = models.AppealingStatus;
const DescribeVariableResponse = models.DescribeVariableResponse;
const CreateLabelRequest = models.CreateLabelRequest;
const CodeToolConfig = models.CodeToolConfig;
const SkillCorpShareConfig = models.SkillCorpShareConfig;
const WeeklyTime = models.WeeklyTime;
const UsageSummary = models.UsageSummary;
const FileVolumeMount = models.FileVolumeMount;
const SkillReferenceSummary = models.SkillReferenceSummary;
const BillingAttribute = models.BillingAttribute;
const DescribeConcurrencyLimitDetailListResponse = models.DescribeConcurrencyLimitDetailListResponse;
const ModifyLabelResponse = models.ModifyLabelResponse;
const AgentSpec = models.AgentSpec;
const ClawAgentConfig = models.ClawAgentConfig;
const ModelLimit = models.ModelLimit;
const Distribution = models.Distribution;
const CreatePluginRequest = models.CreatePluginRequest;
const ThinkModel = models.ThinkModel;
const DeleteAgentResponse = models.DeleteAgentResponse;
const ModifyConversationResponse = models.ModifyConversationResponse;
const RetryReleaseRequest = models.RetryReleaseRequest;
const AppConfig = models.AppConfig;
const AppAuxiliaryInfo = models.AppAuxiliaryInfo;
const ModifyConversationRequest = models.ModifyConversationRequest;
const CreateChannelResponse = models.CreateChannelResponse;
const DescribeNodeRunDetailRequest = models.DescribeNodeRunDetailRequest;
const DeleteCategoryResponse = models.DeleteCategoryResponse;
const SearchResultPayload = models.SearchResultPayload;
const QAQuery = models.QAQuery;
const DescribeAppTriggerResponse = models.DescribeAppTriggerResponse;
const CallMCPToolRequest = models.CallMCPToolRequest;
const ModifyVariableResponse = models.ModifyVariableResponse;
const AgentSkillConfig = models.AgentSkillConfig;
const ModifyAgentRequest = models.ModifyAgentRequest;
const NodeRunDetail = models.NodeRunDetail;
const AppWebSearchConfig = models.AppWebSearchConfig;
const AgentProfile = models.AgentProfile;
const SearchAdvancedConfig = models.SearchAdvancedConfig;
const KnowledgeScope = models.KnowledgeScope;
const RunAppTriggerNowRequest = models.RunAppTriggerNowRequest;
const AppTriggerWebhookConfig = models.AppTriggerWebhookConfig;
const CreateVariableResponse = models.CreateVariableResponse;
const AppShareURLInfo = models.AppShareURLInfo;
const ModelProperty = models.ModelProperty;
const CreateReleaseResponse = models.CreateReleaseResponse;
const DescribeConflictQASummaryListResponse = models.DescribeConflictQASummaryListResponse;
const DescribeConversationListRequest = models.DescribeConversationListRequest;
const ModelDetailInfo = models.ModelDetailInfo;
const ModifyVariableRequest = models.ModifyVariableRequest;
const DescribeConcurrencyLimitDetailListRequest = models.DescribeConcurrencyLimitDetailListRequest;
const DescribeNodeRunDetailResponse = models.DescribeNodeRunDetailResponse;
const MCPPluginConfig = models.MCPPluginConfig;
const DescribeAppStatisticsOverviewRequest = models.DescribeAppStatisticsOverviewRequest;
const CreateMsgRecordCategoryResponse = models.CreateMsgRecordCategoryResponse;
const CreateQAListRequest = models.CreateQAListRequest;
const DeleteVariableRequest = models.DeleteVariableRequest;
const ReleaseSkillResponse = models.ReleaseSkillResponse;
const AppTriggerInstance = models.AppTriggerInstance;
const ModifyDocListRequest = models.ModifyDocListRequest;
const DescribeWorkflowRunResponse = models.DescribeWorkflowRunResponse;
const DeleteConversationRequest = models.DeleteConversationRequest;
const DescribeConflictQASummaryListRequest = models.DescribeConflictQASummaryListRequest;
const DescribeSkillSummaryListRequest = models.DescribeSkillSummaryListRequest;
const CopyAppResponse = models.CopyAppResponse;
const AgentPluginCredentialConfig = models.AgentPluginCredentialConfig;
const CallMCPToolResponse = models.CallMCPToolResponse;
const ComplexBillingItem = models.ComplexBillingItem;
const BackgroundImage = models.BackgroundImage;
const TimerScheduleConfig = models.TimerScheduleConfig;
const Model = models.Model;
const DigitalHumanConfig = models.DigitalHumanConfig;
const SearchResourceStatusInfo = models.SearchResourceStatusInfo;
const CreateQAGenerationTaskRequest = models.CreateQAGenerationTaskRequest;
const DescribeSpaceListRequest = models.DescribeSpaceListRequest;
const AppTriggerRunLog = models.AppTriggerRunLog;
const ConversationContent = models.ConversationContent;
const CamAuthConfig = models.CamAuthConfig;
const DescribeSkillReferenceListResponse = models.DescribeSkillReferenceListResponse;
const CreateKBRequest = models.CreateKBRequest;
const CreateWorkflowRunResponse = models.CreateWorkflowRunResponse;
const DeleteMsgRecordCategoryResponse = models.DeleteMsgRecordCategoryResponse;
const GenerateModel = models.GenerateModel;
const SkillShare = models.SkillShare;
const AppShareWhitelistItem = models.AppShareWhitelistItem;
const ModifyKBRequest = models.ModifyKBRequest;
const CreateWebSocketTokenRequest = models.CreateWebSocketTokenRequest;
const CreateWorkflowRunRequest = models.CreateWorkflowRunRequest;
const NodeRunExecution = models.NodeRunExecution;
const DescribeQARequest = models.DescribeQARequest;
const DeleteSkillResponse = models.DeleteSkillResponse;
const SkillNotice = models.SkillNotice;
const DescribeAgentReleasePreviewListRequest = models.DescribeAgentReleasePreviewListRequest;
const DocSwitch = models.DocSwitch;
const PauseAppTriggerRequest = models.PauseAppTriggerRequest;
const MetaValue = models.MetaValue;
const LabelTermModifyItem = models.LabelTermModifyItem;
const CopyAgentFromAppRequest = models.CopyAgentFromAppRequest;
const QACreateSpec = models.QACreateSpec;
const ModelParameter = models.ModelParameter;
const ModifyAppResponse = models.ModifyAppResponse;
const ExpirationPolicy = models.ExpirationPolicy;
const DescribeAccountListRequest = models.DescribeAccountListRequest;
const DescribeConversationListResponse = models.DescribeConversationListResponse;
const MultiAgentConfig = models.MultiAgentConfig;
const CreateWebSocketTokenResponse = models.CreateWebSocketTokenResponse;
const Statistic = models.Statistic;
const QASegmentHighlight = models.QASegmentHighlight;
const DescribeSkillCategoryListResponse = models.DescribeSkillCategoryListResponse;
const TimeRange = models.TimeRange;
const ConflictQASummary = models.ConflictQASummary;
const ESConfig = models.ESConfig;
const AppOperation = models.AppOperation;
const ClawAgentAgentTeamConfig = models.ClawAgentAgentTeamConfig;
const DescribeSystemVariableListResponse = models.DescribeSystemVariableListResponse;
const WorkflowRunMetadata = models.WorkflowRunMetadata;
const AgentPlugin = models.AgentPlugin;
const SimilarQuestionModifySpec = models.SimilarQuestionModifySpec;
const SearchBilling = models.SearchBilling;
const DeleteQAListResponse = models.DeleteQAListResponse;
const NodeRun = models.NodeRun;
const ConversationResetInfo = models.ConversationResetInfo;
const QASourceInfo = models.QASourceInfo;
const CheckResult = models.CheckResult;
const ConversationQuoteInfo = models.ConversationQuoteInfo;
const DeleteLabelListRequest = models.DeleteLabelListRequest;
const DescribeSpaceListResponse = models.DescribeSpaceListResponse;
const ConversationRecordSummary = models.ConversationRecordSummary;
const ConversationRecordTimeUsage = models.ConversationRecordTimeUsage;
const App = models.App;
const AppTriggerParamBindingValue = models.AppTriggerParamBindingValue;
const DescribeAppTriggerRunLogListResponse = models.DescribeAppTriggerRunLogListResponse;
const FileParseModel = models.FileParseModel;
const AppAppeal = models.AppAppeal;
const DescribeSkillCategoryListRequest = models.DescribeSkillCategoryListRequest;
const LabelTermCheckResult = models.LabelTermCheckResult;
const DescribeLatestReleaseResponse = models.DescribeLatestReleaseResponse;
const SearchContext = models.SearchContext;
const ResponseParam = models.ResponseParam;
const SingleWorkflowConfig = models.SingleWorkflowConfig;
const CreatePluginResponse = models.CreatePluginResponse;
const CreateSimilarQuestionResponse = models.CreateSimilarQuestionResponse;
const WorkflowRunTime = models.WorkflowRunTime;
const QAModifyFields = models.QAModifyFields;
const AgentPluginConfig = models.AgentPluginConfig;
const PluginSummary = models.PluginSummary;
const ModifyDocListResponse = models.ModifyDocListResponse;
const DescribeQASummaryListRequest = models.DescribeQASummaryListRequest;
const CreateWorkspaceCredentialResponse = models.CreateWorkspaceCredentialResponse;
const ConversationMcpApp = models.ConversationMcpApp;
const DescribeAccountListResponse = models.DescribeAccountListResponse;
const DeleteChannelResponse = models.DeleteChannelResponse;
const PluginParam = models.PluginParam;
const AgentUserInputValue = models.AgentUserInputValue;
const SkillProfile = models.SkillProfile;
const ApiToolConfig = models.ApiToolConfig;
const ToolExample = models.ToolExample;
const DescribeAppTriggerRunLogListRequest = models.DescribeAppTriggerRunLogListRequest;
const ResourceConsumption = models.ResourceConsumption;
const ModelBasic = models.ModelBasic;
const ModifyAppRequest = models.ModifyAppRequest;
const DeleteQAListRequest = models.DeleteQAListRequest;
const MCPToolMeta = models.MCPToolMeta;
const CreateSpaceResponse = models.CreateSpaceResponse;
const CreateVariableRequest = models.CreateVariableRequest;
const ExportQARequest = models.ExportQARequest;
const DescribeSystemVariableListRequest = models.DescribeSystemVariableListRequest;
const DescribeReleaseSummaryResponse = models.DescribeReleaseSummaryResponse;
const QASummary = models.QASummary;
const MCPToolConfig = models.MCPToolConfig;
const SkillSummary = models.SkillSummary;
const DescribeLabelRequest = models.DescribeLabelRequest;
const AgentCollaborationConfig = models.AgentCollaborationConfig;
const SummaryListSwitch = models.SummaryListSwitch;
const CheckLabelRequest = models.CheckLabelRequest;
const RoleConfig = models.RoleConfig;
const DescribeAuditLogListResponse = models.DescribeAuditLogListResponse;
const DescribeUsageSummaryListResponse = models.DescribeUsageSummaryListResponse;
const DescribeAppResponse = models.DescribeAppResponse;
const DeleteAppRequest = models.DeleteAppRequest;
const DescribeAppSummaryListResponse = models.DescribeAppSummaryListResponse;
const ClawAgentLongMemoryConfig = models.ClawAgentLongMemoryConfig;
const AgentSummary = models.AgentSummary;
const SupportedFileType = models.SupportedFileType;
const SkillCategory = models.SkillCategory;
const AgentTool = models.AgentTool;
const ReleaseSkillRequest = models.ReleaseSkillRequest;
const DescribeVariableRequest = models.DescribeVariableRequest;
const WorkflowRunProfile = models.WorkflowRunProfile;
const AuditLog = models.AuditLog;
const WorkflowRunOutput = models.WorkflowRunOutput;
const InputBoxConfig = models.InputBoxConfig;
const AppTrigger = models.AppTrigger;
const DescribeAgentSummaryListResponse = models.DescribeAgentSummaryListResponse;
const DeleteKBRequest = models.DeleteKBRequest;
const SkillVersion = models.SkillVersion;
const AppModeConfig = models.AppModeConfig;
const ReplyMessage = models.ReplyMessage;
const Tool = models.Tool;
const ModelUsageSummary = models.ModelUsageSummary;
const DescribeQAResponse = models.DescribeQAResponse;
const DescribeVariableListResponse = models.DescribeVariableListResponse;
const LabelTerm = models.LabelTerm;
const ModifyQARequest = models.ModifyQARequest;
const LabelSummary = models.LabelSummary;
const DescribeReleaseListRequest = models.DescribeReleaseListRequest;
const ModifySpaceResponse = models.ModifySpaceResponse;
const ConversationReference = models.ConversationReference;
const LabelModifyFields = models.LabelModifyFields;
const DeleteMsgRecordCategoryRequest = models.DeleteMsgRecordCategoryRequest;
const ConversationWidget = models.ConversationWidget;
const WorkflowRun = models.WorkflowRun;
const DescribeWorkflowRunRequest = models.DescribeWorkflowRunRequest;
const AgentModelConfig = models.AgentModelConfig;
const ModifyQAListRequest = models.ModifyQAListRequest;
const CreateConversationResponse = models.CreateConversationResponse;
const NodeRunLog = models.NodeRunLog;
const Variable = models.Variable;
const ExpirationAwareness = models.ExpirationAwareness;
const AppSharedKbInfo = models.AppSharedKbInfo;
const ResetConversationResponse = models.ResetConversationResponse;
const DailySchedule = models.DailySchedule;
const PromptRewriteModel = models.PromptRewriteModel;
const ManualOnlySchedule = models.ManualOnlySchedule;
const ModifySpaceRequest = models.ModifySpaceRequest;
const DescribePluginSummaryListRequest = models.DescribePluginSummaryListRequest;
const AppFileVolumeMount = models.AppFileVolumeMount;
const CreateAppResponse = models.CreateAppResponse;
const KBModifyExtendFields = models.KBModifyExtendFields;
const QARetrievalConfig = models.QARetrievalConfig;
const CreateQAListResponse = models.CreateQAListResponse;
const ModelDeveloperBasic = models.ModelDeveloperBasic;
const AppExperienceConfig = models.AppExperienceConfig;
const ReplyContent = models.ReplyContent;
const QAOperator = models.QAOperator;
const LabelRefIdentityList = models.LabelRefIdentityList;
const CreateReleaseRequest = models.CreateReleaseRequest;
const CreateWorkspaceCredentialRequest = models.CreateWorkspaceCredentialRequest;
const ModifyAppTriggerRequest = models.ModifyAppTriggerRequest;
const DescribeAppTriggerSummaryListResponse = models.DescribeAppTriggerSummaryListResponse;
const CreateAgentRequest = models.CreateAgentRequest;
const ConversationExperience = models.ConversationExperience;
const DeletePluginResponse = models.DeletePluginResponse;
const DeletePluginRequest = models.DeletePluginRequest;
const AIOptimizeModel = models.AIOptimizeModel;
const SearchFilterConfig = models.SearchFilterConfig;
const LabelRef = models.LabelRef;
const KBRetrievalConfig = models.KBRetrievalConfig;
const DescribePluginSummaryListResponse = models.DescribePluginSummaryListResponse;
const AppSubStatusInfo = models.AppSubStatusInfo;
const ViewScope = models.ViewScope;
const CreateConversationRequest = models.CreateConversationRequest;
const CreateSkillResponse = models.CreateSkillResponse;
const DescribeMsgRecordCategoryListRequest = models.DescribeMsgRecordCategoryListRequest;
const CallSource = models.CallSource;
const AppTriggerPromptExecuteConfig = models.AppTriggerPromptExecuteConfig;
const DeleteSkillShareResponse = models.DeleteSkillShareResponse;
const WorkflowRunSummary = models.WorkflowRunSummary;
const ReleaseSummary = models.ReleaseSummary;
const SimilarQuestion = models.SimilarQuestion;
const AgentToolBasicConfig = models.AgentToolBasicConfig;
const DescribeConflictQAResponse = models.DescribeConflictQAResponse;
const AppStatusInfo = models.AppStatusInfo;
const ComplexBilling = models.ComplexBilling;
const DocRetrievalConfig = models.DocRetrievalConfig;
const DescribeLabelSummaryListRequest = models.DescribeLabelSummaryListRequest;
const SearchKnowledgeResponse = models.SearchKnowledgeResponse;
const DeleteConversationResponse = models.DeleteConversationResponse;
const DescribeCategoryListResponse = models.DescribeCategoryListResponse;
const AppTriggerParamSchema = models.AppTriggerParamSchema;
const TimerPushConfig = models.TimerPushConfig;
const AgentToolConfig = models.AgentToolConfig;
const SimilarQuestionExtra = models.SimilarQuestionExtra;
const DeleteDocListRequest = models.DeleteDocListRequest;
const WeeklySchedule = models.WeeklySchedule;
const ModelParams = models.ModelParams;
const ConversationFileCollection = models.ConversationFileCollection;
const AgentInput = models.AgentInput;
const AgentReleasePreview = models.AgentReleasePreview;
const AgentToolOutputParameter = models.AgentToolOutputParameter;
const CreateChannelRequest = models.CreateChannelRequest;
const Identity = models.Identity;
const AccessKeyAuthConfig = models.AccessKeyAuthConfig;
const DescribeLabelResponse = models.DescribeLabelResponse;
const CreateAppTriggerResponse = models.CreateAppTriggerResponse;
const DeleteKBResponse = models.DeleteKBResponse;
const KBSpec = models.KBSpec;
const SystemVariable = models.SystemVariable;
const DescribeQASummaryListResponse = models.DescribeQASummaryListResponse;
const DescribeAppTriggerInstanceResponse = models.DescribeAppTriggerInstanceResponse;
const CreateSkillShareRequest = models.CreateSkillShareRequest;
const QALifecycle = models.QALifecycle;
const CategoryPath = models.CategoryPath;
const CreateSimilarQuestionRequest = models.CreateSimilarQuestionRequest;
const AppGreetingConfig = models.AppGreetingConfig;
const DescribeAppTriggerSummaryListRequest = models.DescribeAppTriggerSummaryListRequest;
const AppTriggerScheduleConfig = models.AppTriggerScheduleConfig;
const KnowledgeResult = models.KnowledgeResult;
const ModifyAppTriggerResponse = models.ModifyAppTriggerResponse;
const AccountInfo = models.AccountInfo;
const CreateSkillRequest = models.CreateSkillRequest;
const CreateAgentResponse = models.CreateAgentResponse;
const AgentSkill = models.AgentSkill;
const SearchKnowledgeRequest = models.SearchKnowledgeRequest;
const DBRetrievalConfig = models.DBRetrievalConfig;
const ModelBadge = models.ModelBadge;
const TokenUsage = models.TokenUsage;
const PlatformUsageSummary = models.PlatformUsageSummary;
const DeleteLabelListResponse = models.DeleteLabelListResponse;
const AgentSystemVariable = models.AgentSystemVariable;
const DocExternalLink = models.DocExternalLink;
const PluginProfile = models.PluginProfile;
const DescribePluginResponse = models.DescribePluginResponse;
const ClawAgentChannelContextTimeoutConfig = models.ClawAgentChannelContextTimeoutConfig;
const DescribeAgentReleasePreviewListResponse = models.DescribeAgentReleasePreviewListResponse;
const DescribeSkillSummaryListResponse = models.DescribeSkillSummaryListResponse;
const DescribeConversationMessageListRequest = models.DescribeConversationMessageListRequest;
const EffectivePeriod = models.EffectivePeriod;
const DeleteDocListResponse = models.DeleteDocListResponse;
const DescribeReleaseListResponse = models.DescribeReleaseListResponse;
const DeleteAgentRequest = models.DeleteAgentRequest;
const RequestParam = models.RequestParam;
const ConversationRecordErrorInfo = models.ConversationRecordErrorInfo;
const DescribeUsageSummaryListRequest = models.DescribeUsageSummaryListRequest;
const AgentRelease = models.AgentRelease;
const AgentToolInputParameter = models.AgentToolInputParameter;
const RunAppTriggerNowResponse = models.RunAppTriggerNowResponse;
const DescribeConflictQARequest = models.DescribeConflictQARequest;
const DeleteAppTriggerRequest = models.DeleteAppTriggerRequest;
const QAPermission = models.QAPermission;
const CreateQAGenerationTaskResponse = models.CreateQAGenerationTaskResponse;
const OperationResult = models.OperationResult;
const OnceSchedule = models.OnceSchedule;
const MultiModalQAModel = models.MultiModalQAModel;
const CreateSpaceRequest = models.CreateSpaceRequest;
const MCPToolUIMeta = models.MCPToolUIMeta;
const SearchFilter = models.SearchFilter;
const DescribeCategoryListRequest = models.DescribeCategoryListRequest;
const FieldMask = models.FieldMask;
const AppTriggerWebhookParamSchemaConfig = models.AppTriggerWebhookParamSchemaConfig;
const ConversationMessage = models.ConversationMessage;
const CreateCategoryResponse = models.CreateCategoryResponse;
const DescribeNodeBatchRunRequest = models.DescribeNodeBatchRunRequest;
const DescribeVariableListRequest = models.DescribeVariableListRequest;
const Operator = models.Operator;
const ExportQAResponse = models.ExportQAResponse;
const QAMetadata = models.QAMetadata;
const DescribeConversationMessageListResponse = models.DescribeConversationMessageListResponse;
const AppToolConfig = models.AppToolConfig;
const RollbackReleaseResponse = models.RollbackReleaseResponse;
const DescribeReleaseSummaryRequest = models.DescribeReleaseSummaryRequest;
const AppWorkflowConfig = models.AppWorkflowConfig;
const ConversationAgentTask = models.ConversationAgentTask;
const CheckLabelResponse = models.CheckLabelResponse;
const AppTriggerScheduleStatus = models.AppTriggerScheduleStatus;
const KVPair = models.KVPair;
const DeleteSkillRequest = models.DeleteSkillRequest;
const DescribePluginRequest = models.DescribePluginRequest;
const BatchRunSummary = models.BatchRunSummary;
const PortalShareConfig = models.PortalShareConfig;
const PluginUserState = models.PluginUserState;
const DuplexBilling = models.DuplexBilling;
const MultiModalUnderstandingModel = models.MultiModalUnderstandingModel;
const DescribeAppTriggerRequest = models.DescribeAppTriggerRequest;
const WorkflowRunResult = models.WorkflowRunResult;
const PluginOperation = models.PluginOperation;
const CorpShareConfig = models.CorpShareConfig;
const AppSummary = models.AppSummary;
const AppTriggerSummary = models.AppTriggerSummary;
const ConversationWorkspace = models.ConversationWorkspace;
const SkillReferenceGroup = models.SkillReferenceGroup;
const DeleteSpaceResponse = models.DeleteSpaceResponse;
const DescribeAppTriggerInstanceRequest = models.DescribeAppTriggerInstanceRequest;
const AppSecretInfo = models.AppSecretInfo;
const AgentDetail = models.AgentDetail;
const AppIdentity = models.AppIdentity;
const GraphRAG = models.GraphRAG;
const ModifyQAResponse = models.ModifyQAResponse;
const CreateAppRequest = models.CreateAppRequest;
const DeleteAppResponse = models.DeleteAppResponse;
const CreateAppTriggerRequest = models.CreateAppTriggerRequest;
const AppTriggerWebhookStatus = models.AppTriggerWebhookStatus;
const AccessKeyParamConfig = models.AccessKeyParamConfig;
const CategoryPermission = models.CategoryPermission;
const ResetConversationRequest = models.ResetConversationRequest;
const OAuthConfig = models.OAuthConfig;
const ToolBilling = models.ToolBilling;
const BasicBilling = models.BasicBilling;
const DescribeAppRequest = models.DescribeAppRequest;
const IntervalSchedule = models.IntervalSchedule;
const DescribeLatestReleaseRequest = models.DescribeLatestReleaseRequest;
const DeleteChannelRequest = models.DeleteChannelRequest;
const CronSchedule = models.CronSchedule;
const CopyAgentFromAppResponse = models.CopyAgentFromAppResponse;
const ModifyQAListResponse = models.ModifyQAListResponse;
const ConflictQA = models.ConflictQA;
const RetryReleaseResponse = models.RetryReleaseResponse;
const AICallConfig = models.AICallConfig;
const DescribeNodeBatchRunResponse = models.DescribeNodeBatchRunResponse;
const CreateSkillShareResponse = models.CreateSkillShareResponse;
const TableEnhancement = models.TableEnhancement;
const KnowledgeSource = models.KnowledgeSource;
const KnowledgeSnippetProfile = models.KnowledgeSnippetProfile;
const DeleteAppTriggerResponse = models.DeleteAppTriggerResponse;
const Filter = models.Filter;
const ToolSummary = models.ToolSummary;
const ModifyLabelRequest = models.ModifyLabelRequest;
const MsgRecordCategory = models.MsgRecordCategory;
const AccessKeyPassThroughConfig = models.AccessKeyPassThroughConfig;
const DescribeSkillReferenceListRequest = models.DescribeSkillReferenceListRequest;
const AppTriggerParamBindingConfig = models.AppTriggerParamBindingConfig;
const KBModelConfig = models.KBModelConfig;
const DescribeAuditLogListRequest = models.DescribeAuditLogListRequest;
const VoiceConfig = models.VoiceConfig;
const DeleteCategoryRequest = models.DeleteCategoryRequest;
const DescribeConversationResponse = models.DescribeConversationResponse;
const Space = models.Space;
const PluginUsageSummary = models.PluginUsageSummary;
const AppMetadata = models.AppMetadata;
const CreateKBResponse = models.CreateKBResponse;
const AppPluginConfig = models.AppPluginConfig;
const ModelStatus = models.ModelStatus;
const AppMemoryConfig = models.AppMemoryConfig;
const TriggerStatus = models.TriggerStatus;
const DescribeAgentSummaryListRequest = models.DescribeAgentSummaryListRequest;
const AppTriggerParamBinding = models.AppTriggerParamBinding;
const PluginConfig = models.PluginConfig;
const RerankConfig = models.RerankConfig;
const ConcurrencyLimitDetail = models.ConcurrencyLimitDetail;
const CreateMsgRecordCategoryRequest = models.CreateMsgRecordCategoryRequest;
const DescribeAppStatisticsOverviewResponse = models.DescribeAppStatisticsOverviewResponse;
const DescribeAgentDetailRequest = models.DescribeAgentDetailRequest;
const AgentPluginParameter = models.AgentPluginParameter;
const CopyAppRequest = models.CopyAppRequest;
const CreateCategoryRequest = models.CreateCategoryRequest;
const DescribeAgentDetailResponse = models.DescribeAgentDetailResponse;
const NodeRunContent = models.NodeRunContent;
const RetrievalOption = models.RetrievalOption;
const DeleteSpaceRequest = models.DeleteSpaceRequest;
const ReleaseRecord = models.ReleaseRecord;
const ConversationRecordTokenUsage = models.ConversationRecordTokenUsage;
const SkillAnalysisInfo = models.SkillAnalysisInfo;
const AppTriggerWorkflowExecuteConfig = models.AppTriggerWorkflowExecuteConfig;
const LabelRefIdentity = models.LabelRefIdentity;
const ModifyAgentResponse = models.ModifyAgentResponse;
const ModelProviderBasic = models.ModelProviderBasic;
const SimilarQuestionStat = models.SimilarQuestionStat;
const AppAdvancedConf = models.AppAdvancedConf;
const PauseAppTriggerResponse = models.PauseAppTriggerResponse;
const ModifyKBResponse = models.ModifyKBResponse;
const SpecialStatusInfo = models.SpecialStatusInfo;


/**
 * adp client
 * @class
 */
class AdpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("adp.intl.tencentcloudapi.com", "2026-05-20", credential, region, profile);
    }
    
    /**
     * DeleteAppTrigger
     * @param {DeleteAppTriggerRequest} req
     * @param {function(string, DeleteAppTriggerResponse):void} cb
     * @public
     */
    DeleteAppTrigger(req, cb) {
        let resp = new DeleteAppTriggerResponse();
        this.request("DeleteAppTrigger", req, resp, cb);
    }

    /**
     * Query the Skill list
     * @param {DescribeSkillSummaryListRequest} req
     * @param {function(string, DescribeSkillSummaryListResponse):void} cb
     * @public
     */
    DescribeSkillSummaryList(req, cb) {
        let resp = new DescribeSkillSummaryListResponse();
        this.request("DescribeSkillSummaryList", req, resp, cb);
    }

    /**
     * Retrieve the abstract list of applications.
     * @param {DescribeAppSummaryListRequest} req
     * @param {function(string, DescribeAppSummaryListResponse):void} cb
     * @public
     */
    DescribeAppSummaryList(req, cb) {
        let resp = new DescribeAppSummaryListResponse();
        this.request("DescribeAppSummaryList", req, resp, cb);
    }

    /**
     * Create a channel (distinguish B-end application release channels from C-end IM channels by scene)
     * @param {CreateChannelRequest} req
     * @param {function(string, CreateChannelResponse):void} cb
     * @public
     */
    CreateChannel(req, cb) {
        let resp = new CreateChannelResponse();
        this.request("CreateChannel", req, resp, cb);
    }

    /**
     * Query the model list
     * @param {DescribeModelListRequest} req
     * @param {function(string, DescribeModelListResponse):void} cb
     * @public
     */
    DescribeModelList(req, cb) {
        let resp = new DescribeModelListResponse();
        this.request("DescribeModelList", req, resp, cb);
    }

    /**
     * Add new release task
     * @param {CreateReleaseRequest} req
     * @param {function(string, CreateReleaseResponse):void} cb
     * @public
     */
    CreateRelease(req, cb) {
        let resp = new CreateReleaseResponse();
        this.request("CreateRelease", req, resp, cb);
    }

    /**
     * Modify session information.
     * @param {ModifyConversationRequest} req
     * @param {function(string, ModifyConversationResponse):void} cb
     * @public
     */
    ModifyConversation(req, cb) {
        let resp = new ModifyConversationResponse();
        this.request("ModifyConversation", req, resp, cb);
    }

    /**
     * CreateAppTrigger
     * @param {CreateAppTriggerRequest} req
     * @param {function(string, CreateAppTriggerResponse):void} cb
     * @public
     */
    CreateAppTrigger(req, cb) {
        let resp = new CreateAppTriggerResponse();
        this.request("CreateAppTrigger", req, resp, cb);
    }

    /**
     * Modify Agent configuration information
     * @param {ModifyAgentRequest} req
     * @param {function(string, ModifyAgentResponse):void} cb
     * @public
     */
    ModifyAgent(req, cb) {
        let resp = new ModifyAgentResponse();
        this.request("ModifyAgent", req, resp, cb);
    }

    /**
     * Deletes a specified message record category
     * @param {DeleteMsgRecordCategoryRequest} req
     * @param {function(string, DeleteMsgRecordCategoryResponse):void} cb
     * @public
     */
    DeleteMsgRecordCategory(req, cb) {
        let resp = new DeleteMsgRecordCategoryResponse();
        this.request("DeleteMsgRecordCategory", req, resp, cb);
    }

    /**
     * Reset a session
Note: Resetting is not supported for the current Claw mode application session.
     * @param {ResetConversationRequest} req
     * @param {function(string, ResetConversationResponse):void} cb
     * @public
     */
    ResetConversation(req, cb) {
        let resp = new ResetConversationResponse();
        this.request("ResetConversation", req, resp, cb);
    }

    /**
     * This API is used to create parameter variables.
     * @param {CreateVariableRequest} req
     * @param {function(string, CreateVariableResponse):void} cb
     * @public
     */
    CreateVariable(req, cb) {
        let resp = new CreateVariableResponse();
        this.request("CreateVariable", req, resp, cb);
    }

    /**
     * Querying the List of Plugins
     * @param {DescribePluginSummaryListRequest} req
     * @param {function(string, DescribePluginSummaryListResponse):void} cb
     * @public
     */
    DescribePluginSummaryList(req, cb) {
        let resp = new DescribePluginSummaryListResponse();
        this.request("DescribePluginSummaryList", req, resp, cb);
    }

    /**
     * Get session list.
     * @param {DescribeConversationListRequest} req
     * @param {function(string, DescribeConversationListResponse):void} cb
     * @public
     */
    DescribeConversationList(req, cb) {
        let resp = new DescribeConversationListResponse();
        this.request("DescribeConversationList", req, resp, cb);
    }

    /**
     * Edit a space
     * @param {ModifySpaceRequest} req
     * @param {function(string, ModifySpaceResponse):void} cb
     * @public
     */
    ModifySpace(req, cb) {
        let resp = new ModifySpaceResponse();
        this.request("ModifySpace", req, resp, cb);
    }

    /**
     * Submit a custom Skill for enterprise-level shared approval (two-segment: submit, approve, callback to create a shared task)
     * @param {CreateSkillShareRequest} req
     * @param {function(string, CreateSkillShareResponse):void} cb
     * @public
     */
    CreateSkillShare(req, cb) {
        let resp = new CreateSkillShareResponse();
        this.request("CreateSkillShare", req, resp, cb);
    }

    /**
     * This API is used to obtain application information.
     * @param {DescribeAppRequest} req
     * @param {function(string, DescribeAppResponse):void} cb
     * @public
     */
    DescribeApp(req, cb) {
        let resp = new DescribeAppResponse();
        this.request("DescribeApp", req, resp, cb);
    }

    /**
     * Roll back a release
     * @param {RollbackReleaseRequest} req
     * @param {function(string, RollbackReleaseResponse):void} cb
     * @public
     */
    RollbackRelease(req, cb) {
        let resp = new RollbackReleaseResponse();
        this.request("RollbackRelease", req, resp, cb);
    }

    /**
     * Queries the abstract information list of an Agent.
     * @param {DescribeAgentSummaryListRequest} req
     * @param {function(string, DescribeAgentSummaryListResponse):void} cb
     * @public
     */
    DescribeAgentSummaryList(req, cb) {
        let resp = new DescribeAgentSummaryListResponse();
        this.request("DescribeAgentSummaryList", req, resp, cb);
    }

    /**
     * DescribeAppTriggerInstance
     * @param {DescribeAppTriggerInstanceRequest} req
     * @param {function(string, DescribeAppTriggerInstanceResponse):void} cb
     * @public
     */
    DescribeAppTriggerInstance(req, cb) {
        let resp = new DescribeAppTriggerInstanceResponse();
        this.request("DescribeAppTriggerInstance", req, resp, cb);
    }

    /**
     * Validate tags
     * @param {CheckLabelRequest} req
     * @param {function(string, CheckLabelResponse):void} cb
     * @public
     */
    CheckLabel(req, cb) {
        let resp = new CheckLabelResponse();
        this.request("CheckLabel", req, resp, cb);
    }

    /**
     * Get parameter variables
     * @param {DescribeVariableRequest} req
     * @param {function(string, DescribeVariableResponse):void} cb
     * @public
     */
    DescribeVariable(req, cb) {
        let resp = new DescribeVariableResponse();
        this.request("DescribeVariable", req, resp, cb);
    }

    /**
     * Delete a channel (scenarios are distinguished by scene)
     * @param {DeleteChannelRequest} req
     * @param {function(string, DeleteChannelResponse):void} cb
     * @public
     */
    DeleteChannel(req, cb) {
        let resp = new DeleteChannelResponse();
        this.request("DeleteChannel", req, resp, cb);
    }

    /**
     * Query Agent details
     * @param {DescribeAgentDetailRequest} req
     * @param {function(string, DescribeAgentDetailResponse):void} cb
     * @public
     */
    DescribeAgentDetail(req, cb) {
        let resp = new DescribeAgentDetailResponse();
        this.request("DescribeAgentDetail", req, resp, cb);
    }

    /**
     * This API is used to delete applications
     * @param {DeleteAppRequest} req
     * @param {function(string, DeleteAppResponse):void} cb
     * @public
     */
    DeleteApp(req, cb) {
        let resp = new DeleteAppResponse();
        this.request("DeleteApp", req, resp, cb);
    }

    /**
     * Queries a publication task
     * @param {DescribeReleaseSummaryRequest} req
     * @param {function(string, DescribeReleaseSummaryResponse):void} cb
     * @public
     */
    DescribeReleaseSummary(req, cb) {
        let resp = new DescribeReleaseSummaryResponse();
        this.request("DescribeReleaseSummary", req, resp, cb);
    }

    /**
     * Copy an application
     * @param {CopyAppRequest} req
     * @param {function(string, CopyAppResponse):void} cb
     * @public
     */
    CopyApp(req, cb) {
        let resp = new CopyAppResponse();
        this.request("CopyApp", req, resp, cb);
    }

    /**
     * Submit a shared Skill delisting approval (v2, two-segment: submit → approve → callback to delist the shared Skill) Authorization: right to erasure Denied scenarios: not shared / pending listing approval / pending delisting approval
     * @param {DeleteSkillShareRequest} req
     * @param {function(string, DeleteSkillShareResponse):void} cb
     * @public
     */
    DeleteSkillShare(req, cb) {
        let resp = new DeleteSkillShareResponse();
        this.request("DeleteSkillShare", req, resp, cb);
    }

    /**
     * This API is used to replicate an Agent. Currently only support claw mode.
     * @param {CopyAgentFromAppRequest} req
     * @param {function(string, CopyAgentFromAppResponse):void} cb
     * @public
     */
    CopyAgentFromApp(req, cb) {
        let resp = new CopyAgentFromAppResponse();
        this.request("CopyAgentFromApp", req, resp, cb);
    }

    /**
     * Get the release preview list of agents under an application
     * @param {DescribeAgentReleasePreviewListRequest} req
     * @param {function(string, DescribeAgentReleasePreviewListResponse):void} cb
     * @public
     */
    DescribeAgentReleasePreviewList(req, cb) {
        let resp = new DescribeAgentReleasePreviewListResponse();
        this.request("DescribeAgentReleasePreviewList", req, resp, cb);
    }

    /**
     * Create a space
     * @param {CreateSpaceRequest} req
     * @param {function(string, CreateSpaceResponse):void} cb
     * @public
     */
    CreateSpace(req, cb) {
        let resp = new CreateSpaceResponse();
        this.request("CreateSpace", req, resp, cb);
    }

    /**
     * This API is used to create a knowledge base.
     * @param {CreateKBRequest} req
     * @param {function(string, CreateKBResponse):void} cb
     * @public
     */
    CreateKB(req, cb) {
        let resp = new CreateKBResponse();
        this.request("CreateKB", req, resp, cb);
    }

    /**
     * Creates a skill
     * @param {CreateSkillRequest} req
     * @param {function(string, CreateSkillResponse):void} cb
     * @public
     */
    CreateSkill(req, cb) {
        let resp = new CreateSkillResponse();
        this.request("CreateSkill", req, resp, cb);
    }

    /**
     * This API is used to create a similar question generation task.
     * @param {CreateSimilarQuestionRequest} req
     * @param {function(string, CreateSimilarQuestionResponse):void} cb
     * @public
     */
    CreateSimilarQuestion(req, cb) {
        let resp = new CreateSimilarQuestionResponse();
        this.request("CreateSimilarQuestion", req, resp, cb);
    }

    /**
     * This API is used to create a WebSocket Token.
     * @param {CreateWebSocketTokenRequest} req
     * @param {function(string, CreateWebSocketTokenResponse):void} cb
     * @public
     */
    CreateWebSocketToken(req, cb) {
        let resp = new CreateWebSocketTokenResponse();
        this.request("CreateWebSocketToken", req, resp, cb);
    }

    /**
     * Tool call triggered by a user in the MCP App iframe.
     * @param {CallMCPToolRequest} req
     * @param {function(string, CallMCPToolResponse):void} cb
     * @public
     */
    CallMCPTool(req, cb) {
        let resp = new CallMCPToolResponse();
        this.request("CallMCPTool", req, resp, cb);
    }

    /**
     * This API is used to obtain the space list.
     * @param {DescribeSpaceListRequest} req
     * @param {function(string, DescribeSpaceListResponse):void} cb
     * @public
     */
    DescribeSpaceList(req, cb) {
        let resp = new DescribeSpaceListResponse();
        this.request("DescribeSpaceList", req, resp, cb);
    }

    /**
     * Query QA details
     * @param {DescribeQARequest} req
     * @param {function(string, DescribeQAResponse):void} cb
     * @public
     */
    DescribeQA(req, cb) {
        let resp = new DescribeQAResponse();
        this.request("DescribeQA", req, resp, cb);
    }

    /**
     * This API is used to create an application.
     * @param {CreateAppRequest} req
     * @param {function(string, CreateAppResponse):void} cb
     * @public
     */
    CreateApp(req, cb) {
        let resp = new CreateAppResponse();
        this.request("CreateApp", req, resp, cb);
    }

    /**
     * Create a QA generation task
     * @param {CreateQAGenerationTaskRequest} req
     * @param {function(string, CreateQAGenerationTaskResponse):void} cb
     * @public
     */
    CreateQAGenerationTask(req, cb) {
        let resp = new CreateQAGenerationTaskResponse();
        this.request("CreateQAGenerationTask", req, resp, cb);
    }

    /**
     * This API is used to query plugin details.
     * @param {CreatePluginRequest} req
     * @param {function(string, CreatePluginResponse):void} cb
     * @public
     */
    CreatePlugin(req, cb) {
        let resp = new CreatePluginResponse();
        this.request("CreatePlugin", req, resp, cb);
    }

    /**
     * This API is used to delete an Agent.
     * @param {DeleteAgentRequest} req
     * @param {function(string, DeleteAgentResponse):void} cb
     * @public
     */
    DeleteAgent(req, cb) {
        let resp = new DeleteAgentResponse();
        this.request("DeleteAgent", req, resp, cb);
    }

    /**
     * Batch deletes tags
     * @param {DeleteLabelListRequest} req
     * @param {function(string, DeleteLabelListResponse):void} cb
     * @public
     */
    DeleteLabelList(req, cb) {
        let resp = new DeleteLabelListResponse();
        this.request("DeleteLabelList", req, resp, cb);
    }

    /**
     * Create a tag
     * @param {CreateLabelRequest} req
     * @param {function(string, CreateLabelResponse):void} cb
     * @public
     */
    CreateLabel(req, cb) {
        let resp = new CreateLabelResponse();
        this.request("CreateLabel", req, resp, cb);
    }

    /**
     * Delete a space
     * @param {DeleteSpaceRequest} req
     * @param {function(string, DeleteSpaceResponse):void} cb
     * @public
     */
    DeleteSpace(req, cb) {
        let resp = new DeleteSpaceResponse();
        this.request("DeleteSpace", req, resp, cb);
    }

    /**
     * Query the classification list
     * @param {DescribeCategoryListRequest} req
     * @param {function(string, DescribeCategoryListResponse):void} cb
     * @public
     */
    DescribeCategoryList(req, cb) {
        let resp = new DescribeCategoryListResponse();
        this.request("DescribeCategoryList", req, resp, cb);
    }

    /**
     * PauseAppTrigger
     * @param {PauseAppTriggerRequest} req
     * @param {function(string, PauseAppTriggerResponse):void} cb
     * @public
     */
    PauseAppTrigger(req, cb) {
        let resp = new PauseAppTriggerResponse();
        this.request("PauseAppTrigger", req, resp, cb);
    }

    /**
     * This API is used to modify the knowledge base.
     * @param {ModifyKBRequest} req
     * @param {function(string, ModifyKBResponse):void} cb
     * @public
     */
    ModifyKB(req, cb) {
        let resp = new ModifyKBResponse();
        this.request("ModifyKB", req, resp, cb);
    }

    /**
     * View operation log list
     * @param {DescribeAuditLogListRequest} req
     * @param {function(string, DescribeAuditLogListResponse):void} cb
     * @public
     */
    DescribeAuditLogList(req, cb) {
        let resp = new DescribeAuditLogListResponse();
        this.request("DescribeAuditLogList", req, resp, cb);
    }

    /**
     * This API is used to create an asynchronous running instance of a workflow. After successful creation, the workflow runs asynchronously in the backend. The API returns the workflow running instance ID (WorkflowRunId) and other information. You can call the DescribeWorkflowRun API to query the workflow running details.
Note: Asynchronous execution of a workflow is application-based. The corresponding application configuration must be set to "Single Workflow Mode" before it can be successfully created.
     * @param {CreateWorkflowRunRequest} req
     * @param {function(string, CreateWorkflowRunResponse):void} cb
     * @public
     */
    CreateWorkflowRun(req, cb) {
        let resp = new CreateWorkflowRunResponse();
        this.request("CreateWorkflowRun", req, resp, cb);
    }

    /**
     * Delete documents in batches
     * @param {DeleteDocListRequest} req
     * @param {function(string, DeleteDocListResponse):void} cb
     * @public
     */
    DeleteDocList(req, cb) {
        let resp = new DeleteDocListResponse();
        this.request("DeleteDocList", req, resp, cb);
    }

    /**
     * RunAppTriggerNow
     * @param {RunAppTriggerNowRequest} req
     * @param {function(string, RunAppTriggerNowResponse):void} cb
     * @public
     */
    RunAppTriggerNow(req, cb) {
        let resp = new RunAppTriggerNowResponse();
        this.request("RunAppTriggerNow", req, resp, cb);
    }

    /**
     * Queries the QA list
     * @param {DescribeQASummaryListRequest} req
     * @param {function(string, DescribeQASummaryListResponse):void} cb
     * @public
     */
    DescribeQASummaryList(req, cb) {
        let resp = new DescribeQASummaryListResponse();
        this.request("DescribeQASummaryList", req, resp, cb);
    }

    /**
     * Release record list
     * @param {DescribeReleaseListRequest} req
     * @param {function(string, DescribeReleaseListResponse):void} cb
     * @public
     */
    DescribeReleaseList(req, cb) {
        let resp = new DescribeReleaseListResponse();
        this.request("DescribeReleaseList", req, resp, cb);
    }

    /**
     * This API is used to create an Agent. Currently only support claw mode.
     * @param {CreateAgentRequest} req
     * @param {function(string, CreateAgentResponse):void} cb
     * @public
     */
    CreateAgent(req, cb) {
        let resp = new CreateAgentResponse();
        this.request("CreateAgent", req, resp, cb);
    }

    /**
     * Modify a tag
     * @param {ModifyLabelRequest} req
     * @param {function(string, ModifyLabelResponse):void} cb
     * @public
     */
    ModifyLabel(req, cb) {
        let resp = new ModifyLabelResponse();
        this.request("ModifyLabel", req, resp, cb);
    }

    /**
     * Batch modify QAs
     * @param {ModifyQAListRequest} req
     * @param {function(string, ModifyQAListResponse):void} cb
     * @public
     */
    ModifyQAList(req, cb) {
        let resp = new ModifyQAListResponse();
        this.request("ModifyQAList", req, resp, cb);
    }

    /**
     * Create a workspace credential
     * @param {CreateWorkspaceCredentialRequest} req
     * @param {function(string, CreateWorkspaceCredentialResponse):void} cb
     * @public
     */
    CreateWorkspaceCredential(req, cb) {
        let resp = new CreateWorkspaceCredentialResponse();
        this.request("CreateWorkspaceCredential", req, resp, cb);
    }

    /**
     * Query the conflict list
     * @param {DescribeConflictQASummaryListRequest} req
     * @param {function(string, DescribeConflictQASummaryListResponse):void} cb
     * @public
     */
    DescribeConflictQASummaryList(req, cb) {
        let resp = new DescribeConflictQASummaryListResponse();
        this.request("DescribeConflictQASummaryList", req, resp, cb);
    }

    /**
     * DescribeAppTrigger
     * @param {DescribeAppTriggerRequest} req
     * @param {function(string, DescribeAppTriggerResponse):void} cb
     * @public
     */
    DescribeAppTrigger(req, cb) {
        let resp = new DescribeAppTriggerResponse();
        this.request("DescribeAppTrigger", req, resp, cb);
    }

    /**
     * Delete a Custom Skill Authorization: creator ∨ (edit permission ∧ delete permission) Denied scenarios: non-Custom type / shared / in security detection / pending listing approval / pending delisting approval
     * @param {DeleteSkillRequest} req
     * @param {function(string, DeleteSkillResponse):void} cb
     * @public
     */
    DeleteSkill(req, cb) {
        let resp = new DeleteSkillResponse();
        this.request("DeleteSkill", req, resp, cb);
    }

    /**
     * This API is used to query plugin details.
     * @param {DescribePluginRequest} req
     * @param {function(string, DescribePluginResponse):void} cb
     * @public
     */
    DescribePlugin(req, cb) {
        let resp = new DescribePluginResponse();
        this.request("DescribePlugin", req, resp, cb);
    }

    /**
     * Queries tag details.
     * @param {DescribeLabelRequest} req
     * @param {function(string, DescribeLabelResponse):void} cb
     * @public
     */
    DescribeLabel(req, cb) {
        let resp = new DescribeLabelResponse();
        this.request("DescribeLabel", req, resp, cb);
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

    /**
     * Query concurrency overrun details, including QPM/TPM overruns and exclusive concurrency overruns. Return the overrun time, space, app, model, and request content.
     * @param {DescribeConcurrencyLimitDetailListRequest} req
     * @param {function(string, DescribeConcurrencyLimitDetailListResponse):void} cb
     * @public
     */
    DescribeConcurrencyLimitDetailList(req, cb) {
        let resp = new DescribeConcurrencyLimitDetailListResponse();
        this.request("DescribeConcurrencyLimitDetailList", req, resp, cb);
    }

    /**
     * View the employee list of a business
     * @param {DescribeAccountListRequest} req
     * @param {function(string, DescribeAccountListResponse):void} cb
     * @public
     */
    DescribeAccountList(req, cb) {
        let resp = new DescribeAccountListResponse();
        this.request("DescribeAccountList", req, resp, cb);
    }

    /**
     * DescribeNodeBatchRun
     * @param {DescribeNodeBatchRunRequest} req
     * @param {function(string, DescribeNodeBatchRunResponse):void} cb
     * @public
     */
    DescribeNodeBatchRun(req, cb) {
        let resp = new DescribeNodeBatchRunResponse();
        this.request("DescribeNodeBatchRun", req, resp, cb);
    }

    /**
     * Delete a category
     * @param {DeleteCategoryRequest} req
     * @param {function(string, DeleteCategoryResponse):void} cb
     * @public
     */
    DeleteCategory(req, cb) {
        let resp = new DeleteCategoryResponse();
        this.request("DeleteCategory", req, resp, cb);
    }

    /**
     * Retry publishing (republish after suspension)
     * @param {RetryReleaseRequest} req
     * @param {function(string, RetryReleaseResponse):void} cb
     * @public
     */
    RetryRelease(req, cb) {
        let resp = new RetryReleaseResponse();
        this.request("RetryRelease", req, resp, cb);
    }

    /**
     * ModifyAppTrigger
     * @param {ModifyAppTriggerRequest} req
     * @param {function(string, ModifyAppTriggerResponse):void} cb
     * @public
     */
    ModifyAppTrigger(req, cb) {
        let resp = new ModifyAppTriggerResponse();
        this.request("ModifyAppTrigger", req, resp, cb);
    }

    /**
     * Modify single QA
     * @param {ModifyQARequest} req
     * @param {function(string, ModifyQAResponse):void} cb
     * @public
     */
    ModifyQA(req, cb) {
        let resp = new ModifyQAResponse();
        this.request("ModifyQA", req, resp, cb);
    }

    /**
     * Obtain system variables
     * @param {DescribeSystemVariableListRequest} req
     * @param {function(string, DescribeSystemVariableListResponse):void} cb
     * @public
     */
    DescribeSystemVariableList(req, cb) {
        let resp = new DescribeSystemVariableListResponse();
        this.request("DescribeSystemVariableList", req, resp, cb);
    }

    /**
     * View workflow node running details.
     * @param {DescribeNodeRunDetailRequest} req
     * @param {function(string, DescribeNodeRunDetailResponse):void} cb
     * @public
     */
    DescribeNodeRunDetail(req, cb) {
        let resp = new DescribeNodeRunDetailResponse();
        this.request("DescribeNodeRunDetail", req, resp, cb);
    }

    /**
     * View session information.
     * @param {DescribeConversationRequest} req
     * @param {function(string, DescribeConversationResponse):void} cb
     * @public
     */
    DescribeConversation(req, cb) {
        let resp = new DescribeConversationResponse();
        this.request("DescribeConversation", req, resp, cb);
    }

    /**
     * This API is used to create a message record category, with support for specifying the category name and parent category. A ParentId of 0 indicates a level-1 category.
     * @param {CreateMsgRecordCategoryRequest} req
     * @param {function(string, CreateMsgRecordCategoryResponse):void} cb
     * @public
     */
    CreateMsgRecordCategory(req, cb) {
        let resp = new CreateMsgRecordCategoryResponse();
        this.request("CreateMsgRecordCategory", req, resp, cb);
    }

    /**
     * This API is used to query the list of details where a certain Skill is referenced, grouped by SkillRefType: OpenClaw, cloud agent, or business assistant agent. Authentication: same as DescribeSkillDetail.
     * @param {DescribeSkillReferenceListRequest} req
     * @param {function(string, DescribeSkillReferenceListResponse):void} cb
     * @public
     */
    DescribeSkillReferenceList(req, cb) {
        let resp = new DescribeSkillReferenceListResponse();
        this.request("DescribeSkillReferenceList", req, resp, cb);
    }

    /**
     * This API is used to list a skill.
     * @param {ReleaseSkillRequest} req
     * @param {function(string, ReleaseSkillResponse):void} cb
     * @public
     */
    ReleaseSkill(req, cb) {
        let resp = new ReleaseSkillResponse();
        this.request("ReleaseSkill", req, resp, cb);
    }

    /**
     * This API is used to query the invocation statistics overview under an application view, including the total number of calls, call success rate, avg duration of total tokens, and avg duration of first tokens. For RAG applications, it also returns the count and proportion of calls for each response method for drawing a pie chart.
     * @param {DescribeAppStatisticsOverviewRequest} req
     * @param {function(string, DescribeAppStatisticsOverviewResponse):void} cb
     * @public
     */
    DescribeAppStatisticsOverview(req, cb) {
        let resp = new DescribeAppStatisticsOverviewResponse();
        this.request("DescribeAppStatisticsOverview", req, resp, cb);
    }

    /**
     * Asynchronously export QAs.
     * @param {ExportQARequest} req
     * @param {function(string, ExportQAResponse):void} cb
     * @public
     */
    ExportQA(req, cb) {
        let resp = new ExportQAResponse();
        this.request("ExportQA", req, resp, cb);
    }

    /**
     * Modifies applications
     * @param {ModifyAppRequest} req
     * @param {function(string, ModifyAppResponse):void} cb
     * @public
     */
    ModifyApp(req, cb) {
        let resp = new ModifyAppResponse();
        this.request("ModifyApp", req, resp, cb);
    }

    /**
     * DescribeAppTriggerSummaryList
     * @param {DescribeAppTriggerSummaryListRequest} req
     * @param {function(string, DescribeAppTriggerSummaryListResponse):void} cb
     * @public
     */
    DescribeAppTriggerSummaryList(req, cb) {
        let resp = new DescribeAppTriggerSummaryListResponse();
        this.request("DescribeAppTriggerSummaryList", req, resp, cb);
    }

    /**
     * Queries the conflict query details
     * @param {DescribeConflictQARequest} req
     * @param {function(string, DescribeConflictQAResponse):void} cb
     * @public
     */
    DescribeConflictQA(req, cb) {
        let resp = new DescribeConflictQAResponse();
        this.request("DescribeConflictQA", req, resp, cb);
    }

    /**
     * Batch create QA
     * @param {CreateQAListRequest} req
     * @param {function(string, CreateQAListResponse):void} cb
     * @public
     */
    CreateQAList(req, cb) {
        let resp = new CreateQAListResponse();
        this.request("CreateQAList", req, resp, cb);
    }

    /**
     * DescribeAppTriggerRunLogList
     * @param {DescribeAppTriggerRunLogListRequest} req
     * @param {function(string, DescribeAppTriggerRunLogListResponse):void} cb
     * @public
     */
    DescribeAppTriggerRunLogList(req, cb) {
        let resp = new DescribeAppTriggerRunLogListResponse();
        this.request("DescribeAppTriggerRunLogList", req, resp, cb);
    }

    /**
     * Queries workflow running details.
     * @param {DescribeWorkflowRunRequest} req
     * @param {function(string, DescribeWorkflowRunResponse):void} cb
     * @public
     */
    DescribeWorkflowRun(req, cb) {
        let resp = new DescribeWorkflowRunResponse();
        this.request("DescribeWorkflowRun", req, resp, cb);
    }

    /**
     * Create session
     * @param {CreateConversationRequest} req
     * @param {function(string, CreateConversationResponse):void} cb
     * @public
     */
    CreateConversation(req, cb) {
        let resp = new CreateConversationResponse();
        this.request("CreateConversation", req, resp, cb);
    }

    /**
     * Create a category
     * @param {CreateCategoryRequest} req
     * @param {function(string, CreateCategoryResponse):void} cb
     * @public
     */
    CreateCategory(req, cb) {
        let resp = new CreateCategoryResponse();
        this.request("CreateCategory", req, resp, cb);
    }

    /**
     * Modify a plug-in
     * @param {DeletePluginRequest} req
     * @param {function(string, DeletePluginResponse):void} cb
     * @public
     */
    DeletePlugin(req, cb) {
        let resp = new DeletePluginResponse();
        this.request("DeletePlugin", req, resp, cb);
    }

    /**
     * Delete QAs in batches
     * @param {DeleteQAListRequest} req
     * @param {function(string, DeleteQAListResponse):void} cb
     * @public
     */
    DeleteQAList(req, cb) {
        let resp = new DeleteQAListResponse();
        this.request("DeleteQAList", req, resp, cb);
    }

    /**
     * Query the message record category tree of an app, return categories and subcategories, number of records under each category, and operation permissions.
     * @param {DescribeMsgRecordCategoryListRequest} req
     * @param {function(string, DescribeMsgRecordCategoryListResponse):void} cb
     * @public
     */
    DescribeMsgRecordCategoryList(req, cb) {
        let resp = new DescribeMsgRecordCategoryListResponse();
        this.request("DescribeMsgRecordCategoryList", req, resp, cb);
    }

    /**
     * Delete a parameter variable
     * @param {DeleteVariableRequest} req
     * @param {function(string, DeleteVariableResponse):void} cb
     * @public
     */
    DeleteVariable(req, cb) {
        let resp = new DeleteVariableResponse();
        this.request("DeleteVariable", req, resp, cb);
    }

    /**
     * Querying the Tag List
     * @param {DescribeLabelSummaryListRequest} req
     * @param {function(string, DescribeLabelSummaryListResponse):void} cb
     * @public
     */
    DescribeLabelSummaryList(req, cb) {
        let resp = new DescribeLabelSummaryListResponse();
        this.request("DescribeLabelSummaryList", req, resp, cb);
    }

    /**
     * This API is used to delete the knowledge base.
     * @param {DeleteKBRequest} req
     * @param {function(string, DeleteKBResponse):void} cb
     * @public
     */
    DeleteKB(req, cb) {
        let resp = new DeleteKBResponse();
        this.request("DeleteKB", req, resp, cb);
    }

    /**
     * Gets the parameter variable list
     * @param {DescribeVariableListRequest} req
     * @param {function(string, DescribeVariableListResponse):void} cb
     * @public
     */
    DescribeVariableList(req, cb) {
        let resp = new DescribeVariableListResponse();
        this.request("DescribeVariableList", req, resp, cb);
    }

    /**
     * Update parameter variables
     * @param {ModifyVariableRequest} req
     * @param {function(string, ModifyVariableResponse):void} cb
     * @public
     */
    ModifyVariable(req, cb) {
        let resp = new ModifyVariableResponse();
        this.request("ModifyVariable", req, resp, cb);
    }

    /**
     * Batch modify documents.
     * @param {ModifyDocListRequest} req
     * @param {function(string, ModifyDocListResponse):void} cb
     * @public
     */
    ModifyDocList(req, cb) {
        let resp = new ModifyDocListResponse();
        this.request("ModifyDocList", req, resp, cb);
    }

    /**
     * This API is used to query aggregated details of resource usage, including three types of resources: models, plug-ins, and platforms. It displays indicators such as call count and Token consumption, aggregated by space or application dimension.
     * @param {DescribeUsageSummaryListRequest} req
     * @param {function(string, DescribeUsageSummaryListResponse):void} cb
     * @public
     */
    DescribeUsageSummaryList(req, cb) {
        let resp = new DescribeUsageSummaryListResponse();
        this.request("DescribeUsageSummaryList", req, resp, cb);
    }

    /**
     * Get historical messages of a conversation.
     * @param {DescribeConversationMessageListRequest} req
     * @param {function(string, DescribeConversationMessageListResponse):void} cb
     * @public
     */
    DescribeConversationMessageList(req, cb) {
        let resp = new DescribeConversationMessageListResponse();
        this.request("DescribeConversationMessageList", req, resp, cb);
    }

    /**
     * Query the Skill classification list
     * @param {DescribeSkillCategoryListRequest} req
     * @param {function(string, DescribeSkillCategoryListResponse):void} cb
     * @public
     */
    DescribeSkillCategoryList(req, cb) {
        let resp = new DescribeSkillCategoryListResponse();
        this.request("DescribeSkillCategoryList", req, resp, cb);
    }

    /**
     * Pull the latest release info (including release time, status, and channel).
     * @param {DescribeLatestReleaseRequest} req
     * @param {function(string, DescribeLatestReleaseResponse):void} cb
     * @public
     */
    DescribeLatestRelease(req, cb) {
        let resp = new DescribeLatestReleaseResponse();
        this.request("DescribeLatestRelease", req, resp, cb);
    }

    /**
     * Delete conversation
     * @param {DeleteConversationRequest} req
     * @param {function(string, DeleteConversationResponse):void} cb
     * @public
     */
    DeleteConversation(req, cb) {
        let resp = new DeleteConversationResponse();
        this.request("DeleteConversation", req, resp, cb);
    }


}
module.exports = AdpClient;
