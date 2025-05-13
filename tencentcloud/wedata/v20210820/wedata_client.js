/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
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
const DescribeEventConsumeTasksResponse = models.DescribeEventConsumeTasksResponse;
const CreateRuleTemplateResponse = models.CreateRuleTemplateResponse;
const AlarmInfo = models.AlarmInfo;
const DescribeBatchOperateTaskPage = models.DescribeBatchOperateTaskPage;
const UpdateWorkflowInfoResponse = models.UpdateWorkflowInfoResponse;
const DescribeIntegrationStatisticsResponse = models.DescribeIntegrationStatisticsResponse;
const UnlockIntegrationTaskResponse = models.UnlockIntegrationTaskResponse;
const DescribeReportTaskListRequest = models.DescribeReportTaskListRequest;
const DescribeStreamTaskLogListRequest = models.DescribeStreamTaskLogListRequest;
const DescribeIntegrationNodeResponse = models.DescribeIntegrationNodeResponse;
const LogContentInfo = models.LogContentInfo;
const ModifyIntegrationTaskRequest = models.ModifyIntegrationTaskRequest;
const DescribeRuleDimStatResponse = models.DescribeRuleDimStatResponse;
const RegisterEventListenerResponse = models.RegisterEventListenerResponse;
const DescribeTaskAlarmRegulationsResponse = models.DescribeTaskAlarmRegulationsResponse;
const ColumnBasicInfo = models.ColumnBasicInfo;
const DescribeWorkflowInfoByIdRequest = models.DescribeWorkflowInfoByIdRequest;
const CreateDataSourceRequest = models.CreateDataSourceRequest;
const IntegrationNodeSchemaMapping = models.IntegrationNodeSchemaMapping;
const DescribeTrendStatResponse = models.DescribeTrendStatResponse;
const DescribeRealTimeTaskSpeedRequest = models.DescribeRealTimeTaskSpeedRequest;
const BatchTaskOperateNew = models.BatchTaskOperateNew;
const DescribeRuleDimStatRequest = models.DescribeRuleDimStatRequest;
const DescribeRuleTemplatesResponse = models.DescribeRuleTemplatesResponse;
const CreateIntegrationNodeResponse = models.CreateIntegrationNodeResponse;
const TaskInnerInfo = models.TaskInnerInfo;
const CreateDsFolderResponse = models.CreateDsFolderResponse;
const UserFileInfo = models.UserFileInfo;
const FreezeOpsTasksRequest = models.FreezeOpsTasksRequest;
const InstanceOpsInfoPage = models.InstanceOpsInfoPage;
const DescribeRulesResponse = models.DescribeRulesResponse;
const WorkFlowExecuteDto = models.WorkFlowExecuteDto;
const RecordsSpeed = models.RecordsSpeed;
const ColumnLineageInfo = models.ColumnLineageInfo;
const SubmitTaskRequest = models.SubmitTaskRequest;
const ListInstancesResponse = models.ListInstancesResponse;
const DescribeTableMetasRequest = models.DescribeTableMetasRequest;
const RuleExecResultDetail = models.RuleExecResultDetail;
const DataSourceInfoPage = models.DataSourceInfoPage;
const OpsTaskInfoPage = models.OpsTaskInfoPage;
const DescribeRuleGroupExecResultsByPageRequest = models.DescribeRuleGroupExecResultsByPageRequest;
const EventCaseAuditLogOptDto = models.EventCaseAuditLogOptDto;
const DescribeTableLineageRequest = models.DescribeTableLineageRequest;
const KillOpsMakePlanInstancesRequest = models.KillOpsMakePlanInstancesRequest;
const AddProjectUserRoleResponse = models.AddProjectUserRoleResponse;
const ModifyDimensionWeightResponse = models.ModifyDimensionWeightResponse;
const BatchResumeIntegrationTasksResponse = models.BatchResumeIntegrationTasksResponse;
const DescribeFieldBasicInfoResponse = models.DescribeFieldBasicInfoResponse;
const DescribeStatisticInstanceStatusTrendOpsResponse = models.DescribeStatisticInstanceStatusTrendOpsResponse;
const RuleGroupExecResult = models.RuleGroupExecResult;
const AlarmEventInfo = models.AlarmEventInfo;
const BytesSpeed = models.BytesSpeed;
const RegisterDsEventRequest = models.RegisterDsEventRequest;
const CheckTaskNameExistRequest = models.CheckTaskNameExistRequest;
const ThresholdValue = models.ThresholdValue;
const DescribeFunctionKindsRequest = models.DescribeFunctionKindsRequest;
const DescribeFunctionKindsResponse = models.DescribeFunctionKindsResponse;
const DescribeTemplateDimCountRequest = models.DescribeTemplateDimCountRequest;
const ModifyIntegrationTaskResponse = models.ModifyIntegrationTaskResponse;
const DescribeDataSourceListRequest = models.DescribeDataSourceListRequest;
const DescribeInstanceByCycleResponse = models.DescribeInstanceByCycleResponse;
const DescribeIntegrationStatisticsRecordsTrendRequest = models.DescribeIntegrationStatisticsRecordsTrendRequest;
const DescribeDataCheckStatRequest = models.DescribeDataCheckStatRequest;
const TablePropertyScore = models.TablePropertyScore;
const SubscribeWebHook = models.SubscribeWebHook;
const GetOfflineInstanceListRequest = models.GetOfflineInstanceListRequest;
const TaskTypeMap = models.TaskTypeMap;
const InstanceLifeDetailDto = models.InstanceLifeDetailDto;
const Workflow = models.Workflow;
const DescribeRuleExecResultsRequest = models.DescribeRuleExecResultsRequest;
const InstanceDownloadLogInfo = models.InstanceDownloadLogInfo;
const EventCaseDTO = models.EventCaseDTO;
const InstanceOpsDto = models.InstanceOpsDto;
const SubmitWorkflowResponse = models.SubmitWorkflowResponse;
const TriggerEventRequest = models.TriggerEventRequest;
const WorkflowTaskCountOpsDto = models.WorkflowTaskCountOpsDto;
const StageCloudApiRequest = models.StageCloudApiRequest;
const DescribeDependOpsTasksRequest = models.DescribeDependOpsTasksRequest;
const RolePrivilege = models.RolePrivilege;
const RuleGroupTable = models.RuleGroupTable;
const DescribeInstanceLogRequest = models.DescribeInstanceLogRequest;
const DescribeRuleGroupSubscriptionResponse = models.DescribeRuleGroupSubscriptionResponse;
const BaseClusterInfo = models.BaseClusterInfo;
const DescribeIntegrationStatisticsTaskStatusTrendResponse = models.DescribeIntegrationStatisticsTaskStatusTrendResponse;
const DeleteResourceFileRequest = models.DeleteResourceFileRequest;
const SaveCustomFunctionRequest = models.SaveCustomFunctionRequest;
const DescribeSchedulerTaskTypeCntRequest = models.DescribeSchedulerTaskTypeCntRequest;
const MakePlanTaskOpsDto = models.MakePlanTaskOpsDto;
const RuleGroupExecStrategy = models.RuleGroupExecStrategy;
const ModifyWorkflowScheduleRequest = models.ModifyWorkflowScheduleRequest;
const CreateDsFolderRequest = models.CreateDsFolderRequest;
const RegisterEventRequest = models.RegisterEventRequest;
const InstanceDetailVO = models.InstanceDetailVO;
const MakePlanOpsDtoCollection = models.MakePlanOpsDtoCollection;
const DescribeTableMetasResponse = models.DescribeTableMetasResponse;
const UploadContentResponse = models.UploadContentResponse;
const RuleExecLog = models.RuleExecLog;
const RuleTemplate = models.RuleTemplate;
const DescribeRuleGroupsByPageRequest = models.DescribeRuleGroupsByPageRequest;
const BatchDeleteIntegrationTasksResponse = models.BatchDeleteIntegrationTasksResponse;
const SearchConditionInstanceNew = models.SearchConditionInstanceNew;
const BaseRole = models.BaseRole;
const BatchRerunIntegrationTaskInstancesRequest = models.BatchRerunIntegrationTaskInstancesRequest;
const DescribeWorkflowTaskCountResponse = models.DescribeWorkflowTaskCountResponse;
const TaskTag = models.TaskTag;
const TaskTypeCnt = models.TaskTypeCnt;
const SubmitCustomFunctionResponse = models.SubmitCustomFunctionResponse;
const DescribeTopTableStatRequest = models.DescribeTopTableStatRequest;
const SearchCondition = models.SearchCondition;
const Rule = models.Rule;
const AddProjectUserRoleRequest = models.AddProjectUserRoleRequest;
const ModifyRuleGroupSubscriptionRequest = models.ModifyRuleGroupSubscriptionRequest;
const DescribeDataSourceListResponse = models.DescribeDataSourceListResponse;
const AgentStatus = models.AgentStatus;
const DescribeInstanceLogDetailRequest = models.DescribeInstanceLogDetailRequest;
const BatchSuspendIntegrationTasksRequest = models.BatchSuspendIntegrationTasksRequest;
const DeleteDsFolderResponse = models.DeleteDsFolderResponse;
const DescribeDrInstancePageResponse = models.DescribeDrInstancePageResponse;
const MoveTasksToFolderRequest = models.MoveTasksToFolderRequest;
const OrderFields = models.OrderFields;
const MoveTasksToFolderResponse = models.MoveTasksToFolderResponse;
const UpdateWorkflowOwnerRequest = models.UpdateWorkflowOwnerRequest;
const DescribeSchedulerTaskTypeCntResponse = models.DescribeSchedulerTaskTypeCntResponse;
const DeleteCustomFunctionResponse = models.DeleteCustomFunctionResponse;
const DimensionScoreInfo = models.DimensionScoreInfo;
const DescribeTaskScriptResponse = models.DescribeTaskScriptResponse;
const InstancePageVO = models.InstancePageVO;
const CollectionInstanceOpsDto = models.CollectionInstanceOpsDto;
const DrInstanceOpsDtoPage = models.DrInstanceOpsDtoPage;
const TableLineageInfo = models.TableLineageInfo;
const DescribeSchedulerInstanceStatusResponse = models.DescribeSchedulerInstanceStatusResponse;
const CountOpsInstanceStateRequest = models.CountOpsInstanceStateRequest;
const EventCaseOpsDto = models.EventCaseOpsDto;
const CreateTaskVersionDsResponse = models.CreateTaskVersionDsResponse;
const InstanceNodeInfo = models.InstanceNodeInfo;
const BatchUpdateIntegrationTasksRequest = models.BatchUpdateIntegrationTasksRequest;
const BatchModifyOpsOwnersRequest = models.BatchModifyOpsOwnersRequest;
const ModifyTaskNameResponse = models.ModifyTaskNameResponse;
const BatchDeleteOpsTasksRequest = models.BatchDeleteOpsTasksRequest;
const ResumeIntegrationTaskResponse = models.ResumeIntegrationTaskResponse;
const UpdateProjectUserRoleRequest = models.UpdateProjectUserRoleRequest;
const LineageParamRecord = models.LineageParamRecord;
const BatchResult = models.BatchResult;
const InstanceLogVO = models.InstanceLogVO;
const StartTaskInfo = models.StartTaskInfo;
const DescribeIntegrationStatisticsInstanceTrendResponse = models.DescribeIntegrationStatisticsInstanceTrendResponse;
const DescribeInstanceLogListRequest = models.DescribeInstanceLogListRequest;
const WorkflowExtOpsDto = models.WorkflowExtOpsDto;
const IntegrationNodeInfo = models.IntegrationNodeInfo;
const DescribeRuleGroupResponse = models.DescribeRuleGroupResponse;
const DeleteDataSourcesResponse = models.DeleteDataSourcesResponse;
const DescribeBatchOperateTaskDTO = models.DescribeBatchOperateTaskDTO;
const DescribeReportTaskListResponse = models.DescribeReportTaskListResponse;
const DescribeOpsMakePlansResponse = models.DescribeOpsMakePlansResponse;
const EventCaseConsumeLogOptDtoCollection = models.EventCaseConsumeLogOptDtoCollection;
const DeleteFileRequest = models.DeleteFileRequest;
const DeleteDataSourcesRequest = models.DeleteDataSourcesRequest;
const ModifyTaskAlarmRegularRequest = models.ModifyTaskAlarmRegularRequest;
const SubmitSqlTaskResponse = models.SubmitSqlTaskResponse;
const DescribeColumnsMetaRequest = models.DescribeColumnsMetaRequest;
const DescribeOrganizationalFunctionsRequest = models.DescribeOrganizationalFunctionsRequest;
const DescribeRuleTemplateResponse = models.DescribeRuleTemplateResponse;
const DescribeDependTaskListsRequest = models.DescribeDependTaskListsRequest;
const DatabaseMeta = models.DatabaseMeta;
const DescribeAllByFolderNewRequest = models.DescribeAllByFolderNewRequest;
const DescribeTaskRunHistoryResponse = models.DescribeTaskRunHistoryResponse;
const BatchStopWorkflowsByIdsRequest = models.BatchStopWorkflowsByIdsRequest;
const DescribeBatchOperateTaskResponse = models.DescribeBatchOperateTaskResponse;
const CommitIntegrationTaskRequest = models.CommitIntegrationTaskRequest;
const DescribeTableInfoListRequest = models.DescribeTableInfoListRequest;
const DescribeQualityScoreRequest = models.DescribeQualityScoreRequest;
const RunForceSucScheduleInstancesResponse = models.RunForceSucScheduleInstancesResponse;
const CommitIntegrationTaskResponse = models.CommitIntegrationTaskResponse;
const Apply = models.Apply;
const IntegrationTaskInfo = models.IntegrationTaskInfo;
const DeleteResourceFilesRequest = models.DeleteResourceFilesRequest;
const DeleteResourceFileResponse = models.DeleteResourceFileResponse;
const PageRoles = models.PageRoles;
const SubmitTaskResponse = models.SubmitTaskResponse;
const ModifyApproveStatusResponse = models.ModifyApproveStatusResponse;
const DescribeAlarmEventsResponse = models.DescribeAlarmEventsResponse;
const DescribeInstanceLogListResponse = models.DescribeInstanceLogListResponse;
const RuleGroup = models.RuleGroup;
const DescribeTableQualityDetailsRequest = models.DescribeTableQualityDetailsRequest;
const DescribeScheduleInstancesResponse = models.DescribeScheduleInstancesResponse;
const DeleteProjectParamDsResponse = models.DeleteProjectParamDsResponse;
const DescribeRoleListResponse = models.DescribeRoleListResponse;
const DescribeOpsWorkflowsRequest = models.DescribeOpsWorkflowsRequest;
const CreateOfflineTaskResponse = models.CreateOfflineTaskResponse;
const DescribeColumnLineageRequest = models.DescribeColumnLineageRequest;
const CreateTaskAlarmRegularRequest = models.CreateTaskAlarmRegularRequest;
const ModifyRuleRequest = models.ModifyRuleRequest;
const RunTasksByMultiWorkflowResponse = models.RunTasksByMultiWorkflowResponse;
const BatchReturn = models.BatchReturn;
const FindAllFolderResponse = models.FindAllFolderResponse;
const ResourcePathTree = models.ResourcePathTree;
const DescribeRuleExecLogResponse = models.DescribeRuleExecLogResponse;
const ParamInfo = models.ParamInfo;
const DescribeDsFolderTreeRequest = models.DescribeDsFolderTreeRequest;
const TableMetaProperty = models.TableMetaProperty;
const BatchDeleteIntegrationTasksRequest = models.BatchDeleteIntegrationTasksRequest;
const KillOpsMakePlanInstancesResponse = models.KillOpsMakePlanInstancesResponse;
const TaskLogRequest = models.TaskLogRequest;
const OpsTaskLinkInfoDto = models.OpsTaskLinkInfoDto;
const DescribeIntegrationStatisticsTaskStatusRequest = models.DescribeIntegrationStatisticsTaskStatusRequest;
const GetFileInfoResponse = models.GetFileInfoResponse;
const BaseUser = models.BaseUser;
const InstanceCondition = models.InstanceCondition;
const ReportTaskDetail = models.ReportTaskDetail;
const FreezeOpsTasksResponse = models.FreezeOpsTasksResponse;
const IntegrationNodeMapping = models.IntegrationNodeMapping;
const ColumnAggregationLineage = models.ColumnAggregationLineage;
const ModifyRuleGroupSubscriptionResponse = models.ModifyRuleGroupSubscriptionResponse;
const CreateWorkflowDsResponse = models.CreateWorkflowDsResponse;
const CreateHiveTableByDDLResponse = models.CreateHiveTableByDDLResponse;
const DescribeTaskByCycleResponse = models.DescribeTaskByCycleResponse;
const DescribeExecStrategyResponse = models.DescribeExecStrategyResponse;
const DescribeSuccessorOpsTaskInfosResponse = models.DescribeSuccessorOpsTaskInfosResponse;
const DeleteResourceResponse = models.DeleteResourceResponse;
const RuleGroupSubscribe = models.RuleGroupSubscribe;
const ModifyRuleResponse = models.ModifyRuleResponse;
const DescribeInstanceLogFileResponse = models.DescribeInstanceLogFileResponse;
const PairDto = models.PairDto;
const ModifyTaskLinksRequest = models.ModifyTaskLinksRequest;
const DeleteTaskDsResponse = models.DeleteTaskDsResponse;
const DescribeAllByFolderNewResponse = models.DescribeAllByFolderNewResponse;
const DescribeDsParentFolderTreeRequest = models.DescribeDsParentFolderTreeRequest;
const KillScheduleInstancesResponse = models.KillScheduleInstancesResponse;
const UnlockIntegrationTaskRequest = models.UnlockIntegrationTaskRequest;
const DescribeWorkflowTaskCountRequest = models.DescribeWorkflowTaskCountRequest;
const DescribeInstanceListRequest = models.DescribeInstanceListRequest;
const ModifyWorkflowScheduleResponse = models.ModifyWorkflowScheduleResponse;
const DeleteCustomFunctionRequest = models.DeleteCustomFunctionRequest;
const DrInstanceOpsDto = models.DrInstanceOpsDto;
const InstanceLogInfo = models.InstanceLogInfo;
const GetFileInfoRequest = models.GetFileInfoRequest;
const TableLineageBaseInfo = models.TableLineageBaseInfo;
const InstanceList = models.InstanceList;
const SqlExpressionTable = models.SqlExpressionTable;
const OrderFieldOptional = models.OrderFieldOptional;
const DryRunDIOfflineTaskRequest = models.DryRunDIOfflineTaskRequest;
const CreateOfflineTaskRequest = models.CreateOfflineTaskRequest;
const DescribeIntegrationStatisticsRecordsTrendResponse = models.DescribeIntegrationStatisticsRecordsTrendResponse;
const EventOpsDto = models.EventOpsDto;
const DescribeFolderWorkflowListData = models.DescribeFolderWorkflowListData;
const ScreenTaskInfo = models.ScreenTaskInfo;
const TableConfig = models.TableConfig;
const FilterOptional = models.FilterOptional;
const TaskInstanceCountDto = models.TaskInstanceCountDto;
const TableScoreStatisticsInfo = models.TableScoreStatisticsInfo;
const BatchForceSuccessIntegrationTaskInstancesResponse = models.BatchForceSuccessIntegrationTaskInstancesResponse;
const InstanceLifeCycleOpsDto = models.InstanceLifeCycleOpsDto;
const AlarmReceiverInfo = models.AlarmReceiverInfo;
const GeneralTaskParam = models.GeneralTaskParam;
const DescribeTableBasicInfoResponse = models.DescribeTableBasicInfoResponse;
const Property = models.Property;
const ModifyRuleTemplateRequest = models.ModifyRuleTemplateRequest;
const DescribeRuleExecStatResponse = models.DescribeRuleExecStatResponse;
const TaskByCycle = models.TaskByCycle;
const DagInstancesResponse = models.DagInstancesResponse;
const DimensionScore = models.DimensionScore;
const GetInstanceLogResponse = models.GetInstanceLogResponse;
const DescribeTableLineageInfoRequest = models.DescribeTableLineageInfoRequest;
const CreateTaskFolderRequest = models.CreateTaskFolderRequest;
const EngineTaskInfo = models.EngineTaskInfo;
const IntegrationNodeDetail = models.IntegrationNodeDetail;
const DescribeEventResponse = models.DescribeEventResponse;
const DescribeOpsMakePlanInstancesRequest = models.DescribeOpsMakePlanInstancesRequest;
const GenHiveTableDDLSqlRequest = models.GenHiveTableDDLSqlRequest;
const BatchCreateIntegrationTaskAlarmsRequest = models.BatchCreateIntegrationTaskAlarmsRequest;
const QualityScore = models.QualityScore;
const LockIntegrationTaskResponse = models.LockIntegrationTaskResponse;
const KillScheduleInstancesRequest = models.KillScheduleInstancesRequest;
const SearchConditionNew = models.SearchConditionNew;
const BatchStopOpsTasksRequest = models.BatchStopOpsTasksRequest;
const DescribeFunctionTypesResponse = models.DescribeFunctionTypesResponse;
const ModifyRuleTemplateResponse = models.ModifyRuleTemplateResponse;
const RenewWorkflowSchedulerInfoDsResponse = models.RenewWorkflowSchedulerInfoDsResponse;
const BatchUpdateIntegrationTasksResponse = models.BatchUpdateIntegrationTasksResponse;
const TaskLogResponse = models.TaskLogResponse;
const QuietPeriod = models.QuietPeriod;
const AdhocDetail = models.AdhocDetail;
const DescribeInstanceLastLogRequest = models.DescribeInstanceLastLogRequest;
const DescribeEventRequest = models.DescribeEventRequest;
const TaskScriptContent = models.TaskScriptContent;
const TableQualityDetailPage = models.TableQualityDetailPage;
const BatchCreateTaskVersionAsyncRequest = models.BatchCreateTaskVersionAsyncRequest;
const TaskTypeOpsDto = models.TaskTypeOpsDto;
const BatchModifyOpsOwnersResponse = models.BatchModifyOpsOwnersResponse;
const CreateTaskAlarmRegularResponse = models.CreateTaskAlarmRegularResponse;
const DeleteRuleTemplateRequest = models.DeleteRuleTemplateRequest;
const DescribeOpsMakePlanTasksRequest = models.DescribeOpsMakePlanTasksRequest;
const TaskVersionInstance = models.TaskVersionInstance;
const TableInfo = models.TableInfo;
const DescribeProjectRequest = models.DescribeProjectRequest;
const GetTaskInstanceResponse = models.GetTaskInstanceResponse;
const CreateIntegrationTaskResponse = models.CreateIntegrationTaskResponse;
const DescribeIntegrationTasksResponse = models.DescribeIntegrationTasksResponse;
const DeleteProjectUsersResponse = models.DeleteProjectUsersResponse;
const DescribeAlarmReceiverRequest = models.DescribeAlarmReceiverRequest;
const InstanceVO = models.InstanceVO;
const SchedulerTaskInstanceInfo = models.SchedulerTaskInstanceInfo;
const DescribeSchedulerTaskCntByStatusResponse = models.DescribeSchedulerTaskCntByStatusResponse;
const TaskExtInfo = models.TaskExtInfo;
const ModifyWorkflowInfoRequest = models.ModifyWorkflowInfoRequest;
const MakePlanOpsDto = models.MakePlanOpsDto;
const SubmitWorkflow = models.SubmitWorkflow;
const BatchResumeIntegrationTasksRequest = models.BatchResumeIntegrationTasksRequest;
const OperationOpsDto = models.OperationOpsDto;
const DeleteTaskAlarmRegularResponse = models.DeleteTaskAlarmRegularResponse;
const DeleteWorkflowByIdRequest = models.DeleteWorkflowByIdRequest;
const ProjectBaseInfoOpsRequest = models.ProjectBaseInfoOpsRequest;
const DescribeEventCasesRequest = models.DescribeEventCasesRequest;
const DeleteRuleResponse = models.DeleteRuleResponse;
const UpdateWorkflowInfoRequest = models.UpdateWorkflowInfoRequest;
const MakePlanTaskOpsDtoCollection = models.MakePlanTaskOpsDtoCollection;
const SimpleColumnInfo = models.SimpleColumnInfo;
const CreateWorkflowDsRequest = models.CreateWorkflowDsRequest;
const CreateTaskResponse = models.CreateTaskResponse;
const TableQualityDetail = models.TableQualityDetail;
const BatchStopIntegrationTasksResponse = models.BatchStopIntegrationTasksResponse;
const EventListenerTaskInfo = models.EventListenerTaskInfo;
const DescribeApproveTypeListRequest = models.DescribeApproveTypeListRequest;
const DeleteIntegrationNodeResponse = models.DeleteIntegrationNodeResponse;
const DescribeDataSourceInfoListRequest = models.DescribeDataSourceInfoListRequest;
const BatchResultDs = models.BatchResultDs;
const DescribeIntegrationNodeRequest = models.DescribeIntegrationNodeRequest;
const SetTaskAlarmNewResponse = models.SetTaskAlarmNewResponse;
const GetOfflineDIInstanceListResponse = models.GetOfflineDIInstanceListResponse;
const DescribeDatasourceResponse = models.DescribeDatasourceResponse;
const BatchOperationOpsDto = models.BatchOperationOpsDto;
const RuleExecConfig = models.RuleExecConfig;
const SuspendIntegrationTaskResponse = models.SuspendIntegrationTaskResponse;
const ListInstancesRequest = models.ListInstancesRequest;
const RenewWorkflowOwnerDsRequest = models.RenewWorkflowOwnerDsRequest;
const DescribeSchedulerRunTimeInstanceCntByStatusResponse = models.DescribeSchedulerRunTimeInstanceCntByStatusResponse;
const CreateTaskFolderResponse = models.CreateTaskFolderResponse;
const RunForceSucScheduleInstancesRequest = models.RunForceSucScheduleInstancesRequest;
const DescribeQualityScoreResponse = models.DescribeQualityScoreResponse;
const CreateTaskNewRequest = models.CreateTaskNewRequest;
const DescribeRulesByPageResponse = models.DescribeRulesByPageResponse;
const DescribeDsParentFolderTreeResponse = models.DescribeDsParentFolderTreeResponse;
const TopTableStatItem = models.TopTableStatItem;
const DescribeEventConsumeTasksRequest = models.DescribeEventConsumeTasksRequest;
const DescribeDataSourceInfoListResponse = models.DescribeDataSourceInfoListResponse;
const InstanceStatisticInfo = models.InstanceStatisticInfo;
const CommitRuleGroupTaskRequest = models.CommitRuleGroupTaskRequest;
const CheckIntegrationNodeNameExistsRequest = models.CheckIntegrationNodeNameExistsRequest;
const InstanceLifeCycleVO = models.InstanceLifeCycleVO;
const DescribeReportTaskDetailRequest = models.DescribeReportTaskDetailRequest;
const GetOfflineInstanceListResponse = models.GetOfflineInstanceListResponse;
const DescribeOpsMakePlansRequest = models.DescribeOpsMakePlansRequest;
const CreateOpsMakePlanRequest = models.CreateOpsMakePlanRequest;
const DescribeDimensionScoreResponse = models.DescribeDimensionScoreResponse;
const ScriptRequestInfo = models.ScriptRequestInfo;
const DescribeOrganizationalFunctionsResponse = models.DescribeOrganizationalFunctionsResponse;
const CollectionFolderOpsDto = models.CollectionFolderOpsDto;
const FreezeTasksByWorkflowIdsRequest = models.FreezeTasksByWorkflowIdsRequest;
const DescribeTaskByCycleReportResponse = models.DescribeTaskByCycleReportResponse;
const BatchDeleteOpsTasksResponse = models.BatchDeleteOpsTasksResponse;
const CheckIntegrationTaskNameExistsResponse = models.CheckIntegrationTaskNameExistsResponse;
const BatchOperateResultOpsDto = models.BatchOperateResultOpsDto;
const DeleteRuleRequest = models.DeleteRuleRequest;
const ApproveType = models.ApproveType;
const TableNameFilter = models.TableNameFilter;
const RealTimeTaskInstanceNodeInfo = models.RealTimeTaskInstanceNodeInfo;
const DeleteResourceFilesResponse = models.DeleteResourceFilesResponse;
const DescribeFieldBasicInfoRequest = models.DescribeFieldBasicInfoRequest;
const DiagnoseProRequest = models.DiagnoseProRequest;
const CreateOpsMakePlanResponse = models.CreateOpsMakePlanResponse;
const DescribeStreamTaskLogListResponse = models.DescribeStreamTaskLogListResponse;
const DlcDataGovernPolicy = models.DlcDataGovernPolicy;
const DescribeRuleGroupExecResultsByPageResponse = models.DescribeRuleGroupExecResultsByPageResponse;
const DescribeRuleGroupsByPageResponse = models.DescribeRuleGroupsByPageResponse;
const GetIntegrationNodeColumnSchemaRequest = models.GetIntegrationNodeColumnSchemaRequest;
const DeleteWorkflowByIdResponse = models.DeleteWorkflowByIdResponse;
const RulePage = models.RulePage;
const DeleteIntegrationNodeRequest = models.DeleteIntegrationNodeRequest;
const ModifyIntegrationNodeResponse = models.ModifyIntegrationNodeResponse;
const DescribeIntegrationStatisticsTaskStatusTrendRequest = models.DescribeIntegrationStatisticsTaskStatusTrendRequest;
const DescribeTableMetaRequest = models.DescribeTableMetaRequest;
const DescribeWorkflowInfoByIdResponse = models.DescribeWorkflowInfoByIdResponse;
const OpsTaskCanvasInfoList = models.OpsTaskCanvasInfoList;
const SubmitTaskTestRunResponse = models.SubmitTaskTestRunResponse;
const UpdateProjectUserRoleResponse = models.UpdateProjectUserRoleResponse;
const DescribeRoleListRequest = models.DescribeRoleListRequest;
const ModifyTaskAlarmRegularResponse = models.ModifyTaskAlarmRegularResponse;
const InstanceSearchCondition = models.InstanceSearchCondition;
const CreateRuleResponse = models.CreateRuleResponse;
const ModifyTaskLinksResponse = models.ModifyTaskLinksResponse;
const DescribeTaskRunHistoryRequest = models.DescribeTaskRunHistoryRequest;
const BatchMakeUpIntegrationTasksRequest = models.BatchMakeUpIntegrationTasksRequest;
const OfflineInstance = models.OfflineInstance;
const BatchCreateTaskVersionDTO = models.BatchCreateTaskVersionDTO;
const CreateTaskVersionDsRequest = models.CreateTaskVersionDsRequest;
const DeleteOfflineTaskRequest = models.DeleteOfflineTaskRequest;
const WeightInfo = models.WeightInfo;
const DescribeDatabaseInfoListResponse = models.DescribeDatabaseInfoListResponse;
const ModifyDsFolderResponse = models.ModifyDsFolderResponse;
const CommonContent = models.CommonContent;
const DescribeTableScoreTrendResponse = models.DescribeTableScoreTrendResponse;
const ModifyIntegrationNodeRequest = models.ModifyIntegrationNodeRequest;
const ModifyMonitorStatusResponse = models.ModifyMonitorStatusResponse;
const DescribeRuleTemplatesByPageResponse = models.DescribeRuleTemplatesByPageResponse;
const DescribeTemplateDimCountResponse = models.DescribeTemplateDimCountResponse;
const DescribeFunctionTypesRequest = models.DescribeFunctionTypesRequest;
const DimensionCount = models.DimensionCount;
const AttributeItemDTO = models.AttributeItemDTO;
const DescribeInstanceLogResponse = models.DescribeInstanceLogResponse;
const ApproveModify = models.ApproveModify;
const DescribeOpsMakePlanTasksResponse = models.DescribeOpsMakePlanTasksResponse;
const InstanceLogList = models.InstanceLogList;
const ModifyMonitorStatusRequest = models.ModifyMonitorStatusRequest;
const DescribeColumnLineageResponse = models.DescribeColumnLineageResponse;
const DescribeIntegrationTaskRequest = models.DescribeIntegrationTaskRequest;
const DiagnoseRep = models.DiagnoseRep;
const DescribeWorkflowListByProjectIdResponse = models.DescribeWorkflowListByProjectIdResponse;
const DeleteFilePathRequest = models.DeleteFilePathRequest;
const DescribeRulesByPageRequest = models.DescribeRulesByPageRequest;
const DescribeTopTableStatResponse = models.DescribeTopTableStatResponse;
const ProdSchedulerTask = models.ProdSchedulerTask;
const WorkflowSchedulerOpsDto = models.WorkflowSchedulerOpsDto;
const SourceFieldInfo = models.SourceFieldInfo;
const GetTaskInstanceRequest = models.GetTaskInstanceRequest;
const DeleteDsFolderRequest = models.DeleteDsFolderRequest;
const SaveCustomFunctionResponse = models.SaveCustomFunctionResponse;
const ModifyDsFolderRequest = models.ModifyDsFolderRequest;
const AdhocRecord = models.AdhocRecord;
const TriggerDsEventResponse = models.TriggerDsEventResponse;
const EventBatchCaseDTO = models.EventBatchCaseDTO;
const CreateTaskRequest = models.CreateTaskRequest;
const DescribeDatabaseMetasRequest = models.DescribeDatabaseMetasRequest;
const SearchColumnDocVO = models.SearchColumnDocVO;
const SimpleTaskInfo = models.SimpleTaskInfo;
const DescribeSchedulerTaskCntByStatusRequest = models.DescribeSchedulerTaskCntByStatusRequest;
const DescribeRealTimeTaskInstanceNodeInfoRequest = models.DescribeRealTimeTaskInstanceNodeInfoRequest;
const EventCaseAuditLogVOCollection = models.EventCaseAuditLogVOCollection;
const DescribeDependTaskListsResponse = models.DescribeDependTaskListsResponse;
const CreateHiveTableResponse = models.CreateHiveTableResponse;
const RuleTemplatePage = models.RuleTemplatePage;
const ModifyDataSourceResponse = models.ModifyDataSourceResponse;
const DescribeTaskByStatusReportResponse = models.DescribeTaskByStatusReportResponse;
const ModifyDimensionWeightRequest = models.ModifyDimensionWeightRequest;
const CreateMakeDatetimeInfo = models.CreateMakeDatetimeInfo;
const InstanceApiOpsRequest = models.InstanceApiOpsRequest;
const SubmitSqlTaskRequest = models.SubmitSqlTaskRequest;
const DescribeTaskLockStatusResponse = models.DescribeTaskLockStatusResponse;
const ReportTaskListInfo = models.ReportTaskListInfo;
const RemoveWorkflowDsRequest = models.RemoveWorkflowDsRequest;
const BatchKillIntegrationTaskInstancesRequest = models.BatchKillIntegrationTaskInstancesRequest;
const DeleteTaskDsRequest = models.DeleteTaskDsRequest;
const BatchStopOpsTasksResponse = models.BatchStopOpsTasksResponse;
const InstanceLogInfoOpsDto = models.InstanceLogInfoOpsDto;
const DeleteFilePathResponse = models.DeleteFilePathResponse;
const FailMessage = models.FailMessage;
const RunRerunScheduleInstancesResponse = models.RunRerunScheduleInstancesResponse;
const DependencyConfig = models.DependencyConfig;
const RobAndLockIntegrationTaskRequest = models.RobAndLockIntegrationTaskRequest;
const ModifyTaskInfoResponse = models.ModifyTaskInfoResponse;
const DataCheckStat = models.DataCheckStat;
const CreateRuleRequest = models.CreateRuleRequest;
const IntegrationNodeSchema = models.IntegrationNodeSchema;
const DescribeColumnsMetaResponse = models.DescribeColumnsMetaResponse;
const DescribeRuleExecResultsResponse = models.DescribeRuleExecResultsResponse;
const QualityScoreTrend = models.QualityScoreTrend;
const DeleteFileResponse = models.DeleteFileResponse;
const ResumeIntegrationTaskRequest = models.ResumeIntegrationTaskRequest;
const ModifyDataSourceRequest = models.ModifyDataSourceRequest;
const TriggerEventResponse = models.TriggerEventResponse;
const TaskAlarmInfo = models.TaskAlarmInfo;
const ModifyApproveStatusRequest = models.ModifyApproveStatusRequest;
const DescribeOperateOpsTasksResponse = models.DescribeOperateOpsTasksResponse;
const DescribeResourceManagePathTreesRequest = models.DescribeResourceManagePathTreesRequest;
const FunctionResource = models.FunctionResource;
const DescribeTableQualityDetailsResponse = models.DescribeTableQualityDetailsResponse;
const CommonIdOpsDto = models.CommonIdOpsDto;
const BatchStopWorkflowsByIdsResponse = models.BatchStopWorkflowsByIdsResponse;
const RuleGroupSchedulerInfo = models.RuleGroupSchedulerInfo;
const DatasourceBaseInfo = models.DatasourceBaseInfo;
const LinkOpsDto = models.LinkOpsDto;
const DlcMergeManifestsInfo = models.DlcMergeManifestsInfo;
const DescribeWorkflowListByProjectIdRequest = models.DescribeWorkflowListByProjectIdRequest;
const AlarmIndicatorInfo = models.AlarmIndicatorInfo;
const ColumnItem = models.ColumnItem;
const TableMeta = models.TableMeta;
const RegisterEventResponse = models.RegisterEventResponse;
const CountOpsInstanceStateResponse = models.CountOpsInstanceStateResponse;
const SubscribeReceiver = models.SubscribeReceiver;
const TriggerDsEventRequest = models.TriggerDsEventRequest;
const DescribeQualityScoreTrendRequest = models.DescribeQualityScoreTrendRequest;
const RobLockState = models.RobLockState;
const SubmitTaskTestRunRequest = models.SubmitTaskTestRunRequest;
const DescribeAlarmEventsRequest = models.DescribeAlarmEventsRequest;
const CompareResult = models.CompareResult;
const CheckAlarmRegularNameExistResponse = models.CheckAlarmRegularNameExistResponse;
const DeleteProjectParamDsRequest = models.DeleteProjectParamDsRequest;
const Content = models.Content;
const SpeedValue = models.SpeedValue;
const FunctionVersion = models.FunctionVersion;
const RuleExecDateStat = models.RuleExecDateStat;
const DescribeThirdTaskRunLogResponse = models.DescribeThirdTaskRunLogResponse;
const DescribeTaskAlarmRegulationsRequest = models.DescribeTaskAlarmRegulationsRequest;
const CreateCustomFunctionResponse = models.CreateCustomFunctionResponse;
const ScreenInstanceInfo = models.ScreenInstanceInfo;
const ModifyTaskInfoRequest = models.ModifyTaskInfoRequest;
const DescribeOperateOpsTasksRequest = models.DescribeOperateOpsTasksRequest;
const DataSourceInfo = models.DataSourceInfo;
const DescribeTableMetaResponse = models.DescribeTableMetaResponse;
const TaskOpsDto = models.TaskOpsDto;
const DescribeOfflineTaskTokenRequest = models.DescribeOfflineTaskTokenRequest;
const DescribeRuleExecDetailRequest = models.DescribeRuleExecDetailRequest;
const DeleteResourceRequest = models.DeleteResourceRequest;
const RenewWorkflowOwnerDsResponse = models.RenewWorkflowOwnerDsResponse;
const RegisterEventListenerRequest = models.RegisterEventListenerRequest;
const BatchRunOpsTaskResponse = models.BatchRunOpsTaskResponse;
const CheckIntegrationNodeNameExistsResponse = models.CheckIntegrationNodeNameExistsResponse;
const RobAndLockIntegrationTaskResponse = models.RobAndLockIntegrationTaskResponse;
const MakePlanInstanceOpsDtoCollection = models.MakePlanInstanceOpsDtoCollection;
const DeleteTaskAlarmRegularRequest = models.DeleteTaskAlarmRegularRequest;
const CompareRule = models.CompareRule;
const CompareRuleItem = models.CompareRuleItem;
const DescribeInstanceLogFileRequest = models.DescribeInstanceLogFileRequest;
const EventListenerDTO = models.EventListenerDTO;
const DeleteOfflineTaskResponse = models.DeleteOfflineTaskResponse;
const IntegrationInstanceLog = models.IntegrationInstanceLog;
const EventDsDto = models.EventDsDto;
const IntegrationStatisticsTrendResult = models.IntegrationStatisticsTrendResult;
const DescribeDrInstancePageRequest = models.DescribeDrInstancePageRequest;
const RuntimeInstanceCntTop = models.RuntimeInstanceCntTop;
const ColumnMeta = models.ColumnMeta;
const GenHiveTableDDLSqlResponse = models.GenHiveTableDDLSqlResponse;
const DescribeRuleGroupTableRequest = models.DescribeRuleGroupTableRequest;
const CheckAlarmRegularNameExistRequest = models.CheckAlarmRegularNameExistRequest;
const ColumnData = models.ColumnData;
const RuleExecResult = models.RuleExecResult;
const Table = models.Table;
const DescribeWorkflowExecuteByIdResponse = models.DescribeWorkflowExecuteByIdResponse;
const CreateIntegrationTaskRequest = models.CreateIntegrationTaskRequest;
const BatchRunOpsTaskRequest = models.BatchRunOpsTaskRequest;
const FieldConfig = models.FieldConfig;
const DescribeRealTimeTaskMetricOverviewRequest = models.DescribeRealTimeTaskMetricOverviewRequest;
const DescribeDatabaseMetasResponse = models.DescribeDatabaseMetasResponse;
const OfflineTaskAddParam = models.OfflineTaskAddParam;
const FreezeTasksByWorkflowIdsResponse = models.FreezeTasksByWorkflowIdsResponse;
const SubmitWorkflowRequest = models.SubmitWorkflowRequest;
const DescribeResourceManagePathTreesResponse = models.DescribeResourceManagePathTreesResponse;
const RunRerunScheduleInstancesRequest = models.RunRerunScheduleInstancesRequest;
const RuleGroupTableInnerInfo = models.RuleGroupTableInnerInfo;
const DeleteIntegrationTaskRequest = models.DeleteIntegrationTaskRequest;
const CompareResultItem = models.CompareResultItem;
const ModifyTaskScriptRequest = models.ModifyTaskScriptRequest;
const CreateIntegrationNodeRequest = models.CreateIntegrationNodeRequest;
const DescribeTableSchemaInfoRequest = models.DescribeTableSchemaInfoRequest;
const DescribeTableScoreTrendRequest = models.DescribeTableScoreTrendRequest;
const RuleExecResultPage = models.RuleExecResultPage;
const DescribeTaskByStatusReportRequest = models.DescribeTaskByStatusReportRequest;
const ModifyExecStrategyRequest = models.ModifyExecStrategyRequest;
const BatchForceSuccessIntegrationTaskInstancesRequest = models.BatchForceSuccessIntegrationTaskInstancesRequest;
const DescribeRealTimeTaskInstanceNodeInfoResponse = models.DescribeRealTimeTaskInstanceNodeInfoResponse;
const DescribeTaskByCycleReportRequest = models.DescribeTaskByCycleReportRequest;
const DescribeInstanceLogDetailResponse = models.DescribeInstanceLogDetailResponse;
const DescribeApproveListRequest = models.DescribeApproveListRequest;
const DescribeBatchOperateTaskRequest = models.DescribeBatchOperateTaskRequest;
const StartIntegrationTaskResponse = models.StartIntegrationTaskResponse;
const CommitRuleGroupTaskResponse = models.CommitRuleGroupTaskResponse;
const Project = models.Project;
const DescribeRealTimeTaskMetricOverviewResponse = models.DescribeRealTimeTaskMetricOverviewResponse;
const DescribeOfflineTaskTokenResponse = models.DescribeOfflineTaskTokenResponse;
const CreateTaskNewResponse = models.CreateTaskNewResponse;
const DescribeTableInfoListResponse = models.DescribeTableInfoListResponse;
const RemoveWorkflowDsResponse = models.RemoveWorkflowDsResponse;
const GetOfflineDIInstanceListRequest = models.GetOfflineDIInstanceListRequest;
const ModifyExecStrategyResponse = models.ModifyExecStrategyResponse;
const BatchStartIntegrationTasksRequest = models.BatchStartIntegrationTasksRequest;
const CreateCustomFunctionRequest = models.CreateCustomFunctionRequest;
const DescribeTableBasicInfoRequest = models.DescribeTableBasicInfoRequest;
const DescribeDatasourceRequest = models.DescribeDatasourceRequest;
const RuleExecStat = models.RuleExecStat;
const DescribeStatisticInstanceStatusTrendOpsRequest = models.DescribeStatisticInstanceStatusTrendOpsRequest;
const DescribeEventCasesResponse = models.DescribeEventCasesResponse;
const DescribeTableSchemaInfoResponse = models.DescribeTableSchemaInfoResponse;
const DiagnoseProResponse = models.DiagnoseProResponse;
const DescribeReportTaskDetailResponse = models.DescribeReportTaskDetailResponse;
const UpdateWorkflowOwnerResponse = models.UpdateWorkflowOwnerResponse;
const SetTaskAlarmNewRequest = models.SetTaskAlarmNewRequest;
const DescribeInstanceListResponse = models.DescribeInstanceListResponse;
const DescribeOpsInstanceLogListRequest = models.DescribeOpsInstanceLogListRequest;
const UploadContentRequest = models.UploadContentRequest;
const StartIntegrationTaskRequest = models.StartIntegrationTaskRequest;
const DescribeProjectResponse = models.DescribeProjectResponse;
const StopIntegrationTaskRequest = models.StopIntegrationTaskRequest;
const FunctionTypeOrKind = models.FunctionTypeOrKind;
const DescribeApply = models.DescribeApply;
const CreateDataSourceResponse = models.CreateDataSourceResponse;
const TaskByStatus = models.TaskByStatus;
const DescribeFolderWorkflowListResponse = models.DescribeFolderWorkflowListResponse;
const RecordField = models.RecordField;
const DescribeIntegrationVersionNodesInfoResponse = models.DescribeIntegrationVersionNodesInfoResponse;
const DescribeRulesRequest = models.DescribeRulesRequest;
const DescribeRuleResponse = models.DescribeRuleResponse;
const DescribeTaskScriptRequest = models.DescribeTaskScriptRequest;
const ModifyTaskLinksDsResponse = models.ModifyTaskLinksDsResponse;
const SchemaDetail = models.SchemaDetail;
const DescribeRuleRequest = models.DescribeRuleRequest;
const BatchOpsDTO = models.BatchOpsDTO;
const DescribeAlarmReceiverResponse = models.DescribeAlarmReceiverResponse;
const DescribeTableLineageInfoResponse = models.DescribeTableLineageInfoResponse;
const DlcExpiredSnapshotsInfo = models.DlcExpiredSnapshotsInfo;
const DescribeWorkflowCanvasInfoResponse = models.DescribeWorkflowCanvasInfoResponse;
const Partition = models.Partition;
const RuleDimCnt = models.RuleDimCnt;
const BatchOperateResult = models.BatchOperateResult;
const ModifyTaskScriptResponse = models.ModifyTaskScriptResponse;
const DescribeDimensionScoreRequest = models.DescribeDimensionScoreRequest;
const FindAllFolderRequest = models.FindAllFolderRequest;
const FolderDsDto = models.FolderDsDto;
const BatchStartIntegrationTasksResponse = models.BatchStartIntegrationTasksResponse;
const DescribeIntegrationVersionNodesInfoRequest = models.DescribeIntegrationVersionNodesInfoRequest;
const DescribeSuccessorOpsTaskInfosRequest = models.DescribeSuccessorOpsTaskInfosRequest;
const DescribeSchedulerInstanceStatusRequest = models.DescribeSchedulerInstanceStatusRequest;
const DescribeScheduleInstancesRequest = models.DescribeScheduleInstancesRequest;
const DescribeRealTimeTaskSpeedResponse = models.DescribeRealTimeTaskSpeedResponse;
const ModifyWorkflowInfoResponse = models.ModifyWorkflowInfoResponse;
const DescribeFolderWorkflowListRequest = models.DescribeFolderWorkflowListRequest;
const RuleFieldConfig = models.RuleFieldConfig;
const CheckTaskNameExistResponse = models.CheckTaskNameExistResponse;
const DescribeSchedulerRunTimeInstanceCntByStatusRequest = models.DescribeSchedulerRunTimeInstanceCntByStatusRequest;
const StrToStrMap = models.StrToStrMap;
const WorkflowCanvasOpsDto = models.WorkflowCanvasOpsDto;
const DlcRemoveOrphanFilesInfo = models.DlcRemoveOrphanFilesInfo;
const LockIntegrationTaskRequest = models.LockIntegrationTaskRequest;
const BatchStopIntegrationTasksRequest = models.BatchStopIntegrationTasksRequest;
const DescribeRuleTemplatesByPageRequest = models.DescribeRuleTemplatesByPageRequest;
const RegisterDsEventResponse = models.RegisterDsEventResponse;
const RenewWorkflowSchedulerInfoDsRequest = models.RenewWorkflowSchedulerInfoDsRequest;
const DescribeInstanceLastLogResponse = models.DescribeInstanceLastLogResponse;
const TableHeat = models.TableHeat;
const DescribeExecStrategyRequest = models.DescribeExecStrategyRequest;
const ScriptInfoResponse = models.ScriptInfoResponse;
const CreateHiveTableRequest = models.CreateHiveTableRequest;
const BatchKillIntegrationTaskInstancesResponse = models.BatchKillIntegrationTaskInstancesResponse;
const RunTasksByMultiWorkflowRequest = models.RunTasksByMultiWorkflowRequest;
const EventListenerOpsDto = models.EventListenerOpsDto;
const CheckIntegrationTaskNameExistsRequest = models.CheckIntegrationTaskNameExistsRequest;
const DescribeRuleGroupTableResponse = models.DescribeRuleGroupTableResponse;
const DailyScoreInfo = models.DailyScoreInfo;
const SuspendIntegrationTaskRequest = models.SuspendIntegrationTaskRequest;
const DescribeDependOpsTasksResponse = models.DescribeDependOpsTasksResponse;
const DeleteRuleTemplateResponse = models.DeleteRuleTemplateResponse;
const DescribeRuleTemplateRequest = models.DescribeRuleTemplateRequest;
const SqlExpression = models.SqlExpression;
const DescribeTaskByCycleRequest = models.DescribeTaskByCycleRequest;
const CommonId = models.CommonId;
const CreateRuleTemplateRequest = models.CreateRuleTemplateRequest;
const DlcRewriteDataInfo = models.DlcRewriteDataInfo;
const TopTableStat = models.TopTableStat;
const WorkFlowExecuteDtoByPage = models.WorkFlowExecuteDtoByPage;
const DescribeRuleExecDetailResponse = models.DescribeRuleExecDetailResponse;
const Filter = models.Filter;
const Pair = models.Pair;
const DeleteIntegrationTaskResponse = models.DeleteIntegrationTaskResponse;
const TableBaseInfo = models.TableBaseInfo;
const BatchCreateTaskVersionAsyncResponse = models.BatchCreateTaskVersionAsyncResponse;
const DescribeInstanceByCycleRequest = models.DescribeInstanceByCycleRequest;
const TableBasicInfo = models.TableBasicInfo;
const DescribeThirdTaskRunLogRequest = models.DescribeThirdTaskRunLogRequest;
const DescribeIntegrationStatisticsTaskStatusResponse = models.DescribeIntegrationStatisticsTaskStatusResponse;
const ModifyTaskLinksDsRequest = models.ModifyTaskLinksDsRequest;
const DescribeOpsMakePlanInstancesResponse = models.DescribeOpsMakePlanInstancesResponse;
const DescribeDatabaseInfoListRequest = models.DescribeDatabaseInfoListRequest;
const DescribeIntegrationTaskResponse = models.DescribeIntegrationTaskResponse;
const TaskInfoVo = models.TaskInfoVo;
const DescribeQualityScoreTrendResponse = models.DescribeQualityScoreTrendResponse;
const RuleDimStat = models.RuleDimStat;
const CreateHiveTableByDDLRequest = models.CreateHiveTableByDDLRequest;
const DatabaseInfo = models.DatabaseInfo;
const GetIntegrationNodeColumnSchemaResponse = models.GetIntegrationNodeColumnSchemaResponse;
const StopIntegrationTaskResponse = models.StopIntegrationTaskResponse;
const DescribeOpsWorkflowsResponse = models.DescribeOpsWorkflowsResponse;
const OpsTaskCanvasDto = models.OpsTaskCanvasDto;
const DescribeRuleTemplatesRequest = models.DescribeRuleTemplatesRequest;
const DescribeDataCheckStatResponse = models.DescribeDataCheckStatResponse;
const DescribeIntegrationStatisticsInstanceTrendRequest = models.DescribeIntegrationStatisticsInstanceTrendRequest;
const DescribeDsFolderTreeResponse = models.DescribeDsFolderTreeResponse;
const PathNodeDsVO = models.PathNodeDsVO;
const DescribeWorkflowCanvasInfoRequest = models.DescribeWorkflowCanvasInfoRequest;
const ParamInfoDs = models.ParamInfoDs;
const DagInstancesRequest = models.DagInstancesRequest;
const DryRunDIOfflineTaskResponse = models.DryRunDIOfflineTaskResponse;
const FolderOpsDto = models.FolderOpsDto;
const DescribeTaskLockStatusRequest = models.DescribeTaskLockStatusRequest;
const DescribeRuleExecStatRequest = models.DescribeRuleExecStatRequest;
const GetInstanceLogRequest = models.GetInstanceLogRequest;
const RuleConfig = models.RuleConfig;
const LogContent = models.LogContent;
const RealTimeTaskSpeed = models.RealTimeTaskSpeed;
const BatchCreateIntegrationTaskAlarmsResponse = models.BatchCreateIntegrationTaskAlarmsResponse;
const DescribeIntegrationStatisticsRequest = models.DescribeIntegrationStatisticsRequest;
const DescribeRuleGroupRequest = models.DescribeRuleGroupRequest;
const ModifyTaskNameRequest = models.ModifyTaskNameRequest;
const DescribeTrendStatRequest = models.DescribeTrendStatRequest;
const DescribeOpsInstanceLogListResponse = models.DescribeOpsInstanceLogListResponse;
const DescribeApproveTypeListResponse = models.DescribeApproveTypeListResponse;
const RuleGroupExecResultPage = models.RuleGroupExecResultPage;
const DescribeRuleGroupSubscriptionRequest = models.DescribeRuleGroupSubscriptionRequest;
const OrganizationalFunction = models.OrganizationalFunction;
const OrderField = models.OrderField;
const BatchSuspendIntegrationTasksResponse = models.BatchSuspendIntegrationTasksResponse;
const DeleteProjectUsersRequest = models.DeleteProjectUsersRequest;
const BaseTenant = models.BaseTenant;
const DescribeWorkflowExecuteByIdRequest = models.DescribeWorkflowExecuteByIdRequest;
const WorkflowExtOpsDtoPage = models.WorkflowExtOpsDtoPage;
const DescribeTableLineageResponse = models.DescribeTableLineageResponse;
const DescribeRuleExecLogRequest = models.DescribeRuleExecLogRequest;
const BatchRerunIntegrationTaskInstancesResponse = models.BatchRerunIntegrationTaskInstancesResponse;
const RuleGroupPage = models.RuleGroupPage;
const DescribeApproveListResponse = models.DescribeApproveListResponse;
const DescribeIntegrationTasksRequest = models.DescribeIntegrationTasksRequest;
const BatchMakeUpIntegrationTasksResponse = models.BatchMakeUpIntegrationTasksResponse;
const SubmitCustomFunctionRequest = models.SubmitCustomFunctionRequest;
const TaskLockStatus = models.TaskLockStatus;
const EventCaseConsumeLogOptDto = models.EventCaseConsumeLogOptDto;


/**
 * wedata client
 * @class
 */
class WedataClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("wedata.intl.tencentcloudapi.com", "2021-08-20", credential, region, profile);
    }
    
    /**
     * This API is used to create a task. This API is deprecated. Use the CreateTaskNew API.
     * @param {CreateTaskRequest} req
     * @param {function(string, CreateTaskResponse):void} cb
     * @public
     */
    CreateTask(req, cb) {
        let resp = new CreateTaskResponse();
        this.request("CreateTask", req, resp, cb);
    }

    /**
     * Create task alert rules
     * @param {CreateTaskAlarmRegularRequest} req
     * @param {function(string, CreateTaskAlarmRegularResponse):void} cb
     * @public
     */
    CreateTaskAlarmRegular(req, cb) {
        let resp = new CreateTaskAlarmRegularResponse();
        this.request("CreateTaskAlarmRegular", req, resp, cb);
    }

    /**
     * DataInLong Dashboard synchronization count trend
     * @param {DescribeIntegrationStatisticsRecordsTrendRequest} req
     * @param {function(string, DescribeIntegrationStatisticsRecordsTrendResponse):void} cb
     * @public
     */
    DescribeIntegrationStatisticsRecordsTrend(req, cb) {
        let resp = new DescribeIntegrationStatisticsRecordsTrendResponse();
        this.request("DescribeIntegrationStatisticsRecordsTrend", req, resp, cb);
    }

    /**
     * Delete integration tasks
     * @param {DeleteIntegrationTaskRequest} req
     * @param {function(string, DeleteIntegrationTaskResponse):void} cb
     * @public
     */
    DeleteIntegrationTask(req, cb) {
        let resp = new DeleteIntegrationTaskResponse();
        this.request("DeleteIntegrationTask", req, resp, cb);
    }

    /**
     * Batch Termination of Instances
     * @param {KillScheduleInstancesRequest} req
     * @param {function(string, KillScheduleInstancesResponse):void} cb
     * @public
     */
    KillScheduleInstances(req, cb) {
        let resp = new KillScheduleInstancesResponse();
        this.request("KillScheduleInstances", req, resp, cb);
    }

    /**
     * Development Space - Obtain data development script information
     * @param {GetFileInfoRequest} req
     * @param {function(string, GetFileInfoResponse):void} cb
     * @public
     */
    GetFileInfo(req, cb) {
        let resp = new GetFileInfoResponse();
        this.request("GetFileInfo", req, resp, cb);
    }

    /**
     * Query Task Script
     * @param {DescribeTaskScriptRequest} req
     * @param {function(string, DescribeTaskScriptResponse):void} cb
     * @public
     */
    DescribeTaskScript(req, cb) {
        let resp = new DescribeTaskScriptResponse();
        this.request("DescribeTaskScript", req, resp, cb);
    }

    /**
     * Create Rule Template
     * @param {CreateRuleTemplateRequest} req
     * @param {function(string, CreateRuleTemplateResponse):void} cb
     * @public
     */
    CreateRuleTemplate(req, cb) {
        let resp = new CreateRuleTemplateResponse();
        this.request("CreateRuleTemplate", req, resp, cb);
    }

    /**
     * Instance diagnosis for diagnosing instances in INITIAL, DEPENDENCE, ALLOCATED, LAUNCHED, EVENT_LISTENING, BEFORE_ASPECT, EXPIRED, FAILED states
     * @param {DiagnoseProRequest} req
     * @param {function(string, DiagnoseProResponse):void} cb
     * @public
     */
    DiagnosePro(req, cb) {
        let resp = new DiagnoseProResponse();
        this.request("DiagnosePro", req, resp, cb);
    }

    /**
     * Real-time Task Running Metrics Overview
     * @param {DescribeRealTimeTaskMetricOverviewRequest} req
     * @param {function(string, DescribeRealTimeTaskMetricOverviewResponse):void} cb
     * @public
     */
    DescribeRealTimeTaskMetricOverview(req, cb) {
        let resp = new DescribeRealTimeTaskMetricOverviewResponse();
        this.request("DescribeRealTimeTaskMetricOverview", req, resp, cb);
    }

    /**
     * Get Instance List
     * @param {DescribeScheduleInstancesRequest} req
     * @param {function(string, DescribeScheduleInstancesResponse):void} cb
     * @public
     */
    DescribeScheduleInstances(req, cb) {
        let resp = new DescribeScheduleInstancesResponse();
        this.request("DescribeScheduleInstances", req, resp, cb);
    }

    /**
     * Only valid for tasks in "Scheduling In Progress" and "Paused" statuses, terminate the task instances of the selected tasks, and stop scheduling
     * @param {BatchStopOpsTasksRequest} req
     * @param {function(string, BatchStopOpsTasksResponse):void} cb
     * @public
     */
    BatchStopOpsTasks(req, cb) {
        let resp = new BatchStopOpsTasksResponse();
        this.request("BatchStopOpsTasks", req, resp, cb);
    }

    /**
     * Task Status Cycle Growth Trend
     * @param {DescribeTaskByCycleReportRequest} req
     * @param {function(string, DescribeTaskByCycleReportResponse):void} cb
     * @public
     */
    DescribeTaskByCycleReport(req, cb) {
        let resp = new DescribeTaskByCycleReportResponse();
        this.request("DescribeTaskByCycleReport", req, resp, cb);
    }

    /**
     * Data Quality Overview Page Data Monitoring Interface
     * @param {DescribeDataCheckStatRequest} req
     * @param {function(string, DescribeDataCheckStatResponse):void} cb
     * @public
     */
    DescribeDataCheckStat(req, cb) {
        let resp = new DescribeDataCheckStatResponse();
        this.request("DescribeDataCheckStat", req, resp, cb);
    }

    /**
     * Batch Terminate Integration Task Instances
     * @param {BatchKillIntegrationTaskInstancesRequest} req
     * @param {function(string, BatchKillIntegrationTaskInstancesResponse):void} cb
     * @public
     */
    BatchKillIntegrationTaskInstances(req, cb) {
        let resp = new BatchKillIntegrationTaskInstancesResponse();
        this.request("BatchKillIntegrationTaskInstances", req, resp, cb);
    }

    /**
     * Update Rule Group Execution Strategy
     * @param {ModifyExecStrategyRequest} req
     * @param {function(string, ModifyExecStrategyResponse):void} cb
     * @public
     */
    ModifyExecStrategy(req, cb) {
        let resp = new ModifyExecStrategyResponse();
        this.request("ModifyExecStrategy", req, resp, cb);
    }

    /**
     * DataInLong Dashboard Task Status Statistical Trend
     * @param {DescribeIntegrationStatisticsTaskStatusTrendRequest} req
     * @param {function(string, DescribeIntegrationStatisticsTaskStatusTrendResponse):void} cb
     * @public
     */
    DescribeIntegrationStatisticsTaskStatusTrend(req, cb) {
        let resp = new DescribeIntegrationStatisticsTaskStatusTrendResponse();
        this.request("DescribeIntegrationStatisticsTaskStatusTrend", req, resp, cb);
    }

    /**
     * Create Hive Table
     * @param {CreateHiveTableRequest} req
     * @param {function(string, CreateHiveTableResponse):void} cb
     * @public
     */
    CreateHiveTable(req, cb) {
        let resp = new CreateHiveTableResponse();
        this.request("CreateHiveTable", req, resp, cb);
    }

    /**
     * Task Operation and Maintenance List Combined Condition Query
     * @param {DescribeOperateOpsTasksRequest} req
     * @param {function(string, DescribeOperateOpsTasksResponse):void} cb
     * @public
     */
    DescribeOperateOpsTasks(req, cb) {
        let resp = new DescribeOperateOpsTasksResponse();
        this.request("DescribeOperateOpsTasks", req, resp, cb);
    }

    /**
     * Query all instances by cycle type
     * @param {DescribeInstanceByCycleRequest} req
     * @param {function(string, DescribeInstanceByCycleResponse):void} cb
     * @public
     */
    DescribeInstanceByCycle(req, cb) {
        let resp = new DescribeInstanceByCycleResponse();
        this.request("DescribeInstanceByCycle", req, resp, cb);
    }

    /**
     * Query integrated nodes
     * @param {DescribeIntegrationNodeRequest} req
     * @param {function(string, DescribeIntegrationNodeResponse):void} cb
     * @public
     */
    DescribeIntegrationNode(req, cb) {
        let resp = new DescribeIntegrationNodeResponse();
        this.request("DescribeIntegrationNode", req, resp, cb);
    }

    /**
     * Query all tasks by cycle type
     * @param {DescribeTaskByCycleRequest} req
     * @param {function(string, DescribeTaskByCycleResponse):void} cb
     * @public
     */
    DescribeTaskByCycle(req, cb) {
        let resp = new DescribeTaskByCycleResponse();
        this.request("DescribeTaskByCycle", req, resp, cb);
    }

    /**
     * Batch pause integration tasks
     * @param {BatchSuspendIntegrationTasksRequest} req
     * @param {function(string, BatchSuspendIntegrationTasksResponse):void} cb
     * @public
     */
    BatchSuspendIntegrationTasks(req, cb) {
        let resp = new BatchSuspendIntegrationTasksResponse();
        this.request("BatchSuspendIntegrationTasks", req, resp, cb);
    }

    /**
     * Metadata Model - Field Basic Information Query Interface
     * @param {DescribeFieldBasicInfoRequest} req
     * @param {function(string, DescribeFieldBasicInfoResponse):void} cb
     * @public
     */
    DescribeFieldBasicInfo(req, cb) {
        let resp = new DescribeFieldBasicInfoResponse();
        this.request("DescribeFieldBasicInfo", req, resp, cb);
    }

    /**
     * Delete orchestration space workflow
     * @param {RemoveWorkflowDsRequest} req
     * @param {function(string, RemoveWorkflowDsResponse):void} cb
     * @public
     */
    RemoveWorkflowDs(req, cb) {
        let resp = new RemoveWorkflowDsResponse();
        this.request("RemoveWorkflowDs", req, resp, cb);
    }

    /**
     * Get third-party operation logs
     * @param {DescribeThirdTaskRunLogRequest} req
     * @param {function(string, DescribeThirdTaskRunLogResponse):void} cb
     * @public
     */
    DescribeThirdTaskRunLog(req, cb) {
        let resp = new DescribeThirdTaskRunLogResponse();
        this.request("DescribeThirdTaskRunLog", req, resp, cb);
    }

    /**
     * Query Parent Directory Tree, for Workflow, Task Localization
     * @param {DescribeDsParentFolderTreeRequest} req
     * @param {function(string, DescribeDsParentFolderTreeResponse):void} cb
     * @public
     */
    DescribeDsParentFolderTree(req, cb) {
        let resp = new DescribeDsParentFolderTreeResponse();
        this.request("DescribeDsParentFolderTree", req, resp, cb);
    }

    /**
     * Continue Integration Task
     * @param {ResumeIntegrationTaskRequest} req
     * @param {function(string, ResumeIntegrationTaskResponse):void} cb
     * @public
     */
    ResumeIntegrationTask(req, cb) {
        let resp = new ResumeIntegrationTaskResponse();
        this.request("ResumeIntegrationTask", req, resp, cb);
    }

    /**
     * Rename Task (Task Editing)
     * @param {ModifyTaskNameRequest} req
     * @param {function(string, ModifyTaskNameResponse):void} cb
     * @public
     */
    ModifyTaskName(req, cb) {
        let resp = new ModifyTaskNameResponse();
        this.request("ModifyTaskName", req, resp, cb);
    }

    /**
     * Offline Task Instance Run Log List
     * @param {DescribeInstanceLogListRequest} req
     * @param {function(string, DescribeInstanceLogListResponse):void} cb
     * @public
     */
    DescribeInstanceLogList(req, cb) {
        let resp = new DescribeInstanceLogListResponse();
        this.request("DescribeInstanceLogList", req, resp, cb);
    }

    /**
     * Submit Task Version
     * @param {CreateTaskVersionDsRequest} req
     * @param {function(string, CreateTaskVersionDsResponse):void} cb
     * @public
     */
    CreateTaskVersionDs(req, cb) {
        let resp = new CreateTaskVersionDsResponse();
        this.request("CreateTaskVersionDs", req, resp, cb);
    }

    /**
     * Batch Modify Task Assignee
     * @param {BatchModifyOpsOwnersRequest} req
     * @param {function(string, BatchModifyOpsOwnersResponse):void} cb
     * @public
     */
    BatchModifyOpsOwners(req, cb) {
        let resp = new BatchModifyOpsOwnersResponse();
        this.request("BatchModifyOpsOwners", req, resp, cb);
    }

    /**
     * Create User-Defined Function
     * @param {CreateCustomFunctionRequest} req
     * @param {function(string, CreateCustomFunctionResponse):void} cb
     * @public
     */
    CreateCustomFunction(req, cb) {
        let resp = new CreateCustomFunctionResponse();
        this.request("CreateCustomFunction", req, resp, cb);
    }

    /**
     * Unlock Integration Task
     * @param {UnlockIntegrationTaskRequest} req
     * @param {function(string, UnlockIntegrationTaskResponse):void} cb
     * @public
     */
    UnlockIntegrationTask(req, cb) {
        let resp = new UnlockIntegrationTaskResponse();
        this.request("UnlockIntegrationTask", req, resp, cb);
    }

    /**
     * Batch Stop Integration Tasks
     * @param {BatchStopIntegrationTasksRequest} req
     * @param {function(string, BatchStopIntegrationTasksResponse):void} cb
     * @public
     */
    BatchStopIntegrationTasks(req, cb) {
        let resp = new BatchStopIntegrationTasksResponse();
        this.request("BatchStopIntegrationTasks", req, resp, cb);
    }

    /**
     * Operation and Maintenance Dashboard - Task Status Distribution
     * @param {DescribeSchedulerTaskTypeCntRequest} req
     * @param {function(string, DescribeSchedulerTaskTypeCntResponse):void} cb
     * @public
     */
    DescribeSchedulerTaskTypeCnt(req, cb) {
        let resp = new DescribeSchedulerTaskTypeCntResponse();
        this.request("DescribeSchedulerTaskTypeCnt", req, resp, cb);
    }

    /**
     * Delete Project Parameters
     * @param {DeleteProjectParamDsRequest} req
     * @param {function(string, DeleteProjectParamDsResponse):void} cb
     * @public
     */
    DeleteProjectParamDs(req, cb) {
        let resp = new DeleteProjectParamDsResponse();
        this.request("DeleteProjectParamDs", req, resp, cb);
    }

    /**
     * Orchestration Space - Workflow - Move Task to Workflow Folder
     * @param {MoveTasksToFolderRequest} req
     * @param {function(string, MoveTasksToFolderResponse):void} cb
     * @public
     */
    MoveTasksToFolder(req, cb) {
        let resp = new MoveTasksToFolderResponse();
        this.request("MoveTasksToFolder", req, resp, cb);
    }

    /**
     * Get all workflow lists under the project by Project ID
     * @param {DescribeWorkflowListByProjectIdRequest} req
     * @param {function(string, DescribeWorkflowListByProjectIdResponse):void} cb
     * @public
     */
    DescribeWorkflowListByProjectId(req, cb) {
        let resp = new DescribeWorkflowListByProjectIdResponse();
        this.request("DescribeWorkflowListByProjectId", req, resp, cb);
    }

    /**
     * Create Data Source
     * @param {CreateDataSourceRequest} req
     * @param {function(string, CreateDataSourceResponse):void} cb
     * @public
     */
    CreateDataSource(req, cb) {
        let resp = new CreateDataSourceResponse();
        this.request("CreateDataSource", req, resp, cb);
    }

    /**
     * Instance Operation and Maintenance - Get Instance Log List
     * @param {DescribeOpsInstanceLogListRequest} req
     * @param {function(string, DescribeOpsInstanceLogListResponse):void} cb
     * @public
     */
    DescribeOpsInstanceLogList(req, cb) {
        let resp = new DescribeOpsInstanceLogListResponse();
        this.request("DescribeOpsInstanceLogList", req, resp, cb);
    }

    /**
     * <p style="color:red;">[Note: This version is only available to a portion of allowlist customers in the Guangzhou Region]</p>
Set Task Alerts, Create/Update Alert Information (Latest)
     * @param {SetTaskAlarmNewRequest} req
     * @param {function(string, SetTaskAlarmNewResponse):void} cb
     * @public
     */
    SetTaskAlarmNew(req, cb) {
        let resp = new SetTaskAlarmNewResponse();
        this.request("SetTaskAlarmNew", req, resp, cb);
    }

    /**
     * Viewing consumption tasks of event instances
     * @param {DescribeEventConsumeTasksRequest} req
     * @param {function(string, DescribeEventConsumeTasksResponse):void} cb
     * @public
     */
    DescribeEventConsumeTasks(req, cb) {
        let resp = new DescribeEventConsumeTasksResponse();
        this.request("DescribeEventConsumeTasks", req, resp, cb);
    }

    /**
     * This API is used to update task scheduling information under a workflow.
     * @param {RenewWorkflowSchedulerInfoDsRequest} req
     * @param {function(string, RenewWorkflowSchedulerInfoDsResponse):void} cb
     * @public
     */
    RenewWorkflowSchedulerInfoDs(req, cb) {
        let resp = new RenewWorkflowSchedulerInfoDsResponse();
        this.request("RenewWorkflowSchedulerInfoDs", req, resp, cb);
    }

    /**
     * Getting long connection Token for offline tasks
     * @param {DescribeOfflineTaskTokenRequest} req
     * @param {function(string, DescribeOfflineTaskTokenResponse):void} cb
     * @public
     */
    DescribeOfflineTaskToken(req, cb) {
        let resp = new DescribeOfflineTaskTokenResponse();
        this.request("DescribeOfflineTaskToken", req, resp, cb);
    }

    /**
     * Deleting Rule Template
     * @param {DeleteRuleTemplateRequest} req
     * @param {function(string, DeleteRuleTemplateResponse):void} cb
     * @public
     */
    DeleteRuleTemplate(req, cb) {
        let resp = new DeleteRuleTemplateResponse();
        this.request("DeleteRuleTemplate", req, resp, cb);
    }

    /**
     * Getting pending approval list
     * @param {DescribeApproveListRequest} req
     * @param {function(string, DescribeApproveListResponse):void} cb
     * @public
     */
    DescribeApproveList(req, cb) {
        let resp = new DescribeApproveListResponse();
        this.request("DescribeApproveList", req, resp, cb);
    }

    /**
     * This API is used to add a user role to a project.
     * @param {AddProjectUserRoleRequest} req
     * @param {function(string, AddProjectUserRoleResponse):void} cb
     * @public
     */
    AddProjectUserRole(req, cb) {
        let resp = new AddProjectUserRoleResponse();
        this.request("AddProjectUserRole", req, resp, cb);
    }

    /**
     * Determining if the name of the integrated node exists
     * @param {CheckIntegrationNodeNameExistsRequest} req
     * @param {function(string, CheckIntegrationNodeNameExistsResponse):void} cb
     * @public
     */
    CheckIntegrationNodeNameExists(req, cb) {
        let resp = new CheckIntegrationNodeNameExistsResponse();
        this.request("CheckIntegrationNodeNameExists", req, resp, cb);
    }

    /**
     * Alert event list
     * @param {DescribeAlarmEventsRequest} req
     * @param {function(string, DescribeAlarmEventsResponse):void} cb
     * @public
     */
    DescribeAlarmEvents(req, cb) {
        let resp = new DescribeAlarmEventsResponse();
        this.request("DescribeAlarmEvents", req, resp, cb);
    }

    /**
     * Batch startup of workflows
     * @param {RunTasksByMultiWorkflowRequest} req
     * @param {function(string, RunTasksByMultiWorkflowResponse):void} cb
     * @public
     */
    RunTasksByMultiWorkflow(req, cb) {
        let resp = new RunTasksByMultiWorkflowResponse();
        this.request("RunTasksByMultiWorkflow", req, resp, cb);
    }

    /**
     * Quality Report - Quality Score
     * @param {DescribeQualityScoreRequest} req
     * @param {function(string, DescribeQualityScoreResponse):void} cb
     * @public
     */
    DescribeQualityScore(req, cb) {
        let resp = new DescribeQualityScoreResponse();
        this.request("DescribeQualityScore", req, resp, cb);
    }

    /**
     * Data Quality Overview Page Triggers Dimension Distribution Statistics Interface
     * @param {DescribeRuleDimStatRequest} req
     * @param {function(string, DescribeRuleDimStatResponse):void} cb
     * @public
     */
    DescribeRuleDimStat(req, cb) {
        let resp = new DescribeRuleDimStatResponse();
        this.request("DescribeRuleDimStat", req, resp, cb);
    }

    /**
     * Generate SQL for Creating Hive Table
     * @param {GenHiveTableDDLSqlRequest} req
     * @param {function(string, GenHiveTableDDLSqlResponse):void} cb
     * @public
     */
    GenHiveTableDDLSql(req, cb) {
        let resp = new GenHiveTableDDLSqlResponse();
        this.request("GenHiveTableDDLSql", req, resp, cb);
    }

    /**
     * Paging Query Task Execution History
     * @param {DescribeTaskRunHistoryRequest} req
     * @param {function(string, DescribeTaskRunHistoryResponse):void} cb
     * @public
     */
    DescribeTaskRunHistory(req, cb) {
        let resp = new DescribeTaskRunHistoryResponse();
        this.request("DescribeTaskRunHistory", req, resp, cb);
    }

    /**
     * View Supplemental Plan Tasks
     * @param {DescribeOpsMakePlanTasksRequest} req
     * @param {function(string, DescribeOpsMakePlanTasksResponse):void} cb
     * @public
     */
    DescribeOpsMakePlanTasks(req, cb) {
        let resp = new DescribeOpsMakePlanTasksResponse();
        this.request("DescribeOpsMakePlanTasks", req, resp, cb);
    }

    /**
     * This API is developed in ds.
This API is used to update a workflow, including its basic information and workflow parameters.
     * @param {UpdateWorkflowInfoRequest} req
     * @param {function(string, UpdateWorkflowInfoResponse):void} cb
     * @public
     */
    UpdateWorkflowInfo(req, cb) {
        let resp = new UpdateWorkflowInfoResponse();
        this.request("UpdateWorkflowInfo", req, resp, cb);
    }

    /**
     * Data Quality Overview Page Table Ranking Interface
     * @param {DescribeTopTableStatRequest} req
     * @param {function(string, DescribeTopTableStatResponse):void} cb
     * @public
     */
    DescribeTopTableStat(req, cb) {
        let resp = new DescribeTopTableStatResponse();
        this.request("DescribeTopTableStat", req, resp, cb);
    }

    /**
     * Query Full Functionality
     * @param {DescribeOrganizationalFunctionsRequest} req
     * @param {function(string, DescribeOrganizationalFunctionsResponse):void} cb
     * @public
     */
    DescribeOrganizationalFunctions(req, cb) {
        let resp = new DescribeOrganizationalFunctionsResponse();
        this.request("DescribeOrganizationalFunctions", req, resp, cb);
    }

    /**
     * Instance Batch Successfully Configured
     * @param {RunForceSucScheduleInstancesRequest} req
     * @param {function(string, RunForceSucScheduleInstancesResponse):void} cb
     * @public
     */
    RunForceSucScheduleInstances(req, cb) {
        let resp = new RunForceSucScheduleInstancesResponse();
        this.request("RunForceSucScheduleInstances", req, resp, cb);
    }

    /**
     * This API is used to aggregate task creation.
     * @param {CreateTaskNewRequest} req
     * @param {function(string, CreateTaskNewResponse):void} cb
     * @public
     */
    CreateTaskNew(req, cb) {
        let resp = new CreateTaskNewResponse();
        this.request("CreateTaskNew", req, resp, cb);
    }

    /**
     * Query Directory Tree
     * @param {DescribeDsFolderTreeRequest} req
     * @param {function(string, DescribeDsFolderTreeResponse):void} cb
     * @public
     */
    DescribeDsFolderTree(req, cb) {
        let resp = new DescribeDsFolderTreeResponse();
        this.request("DescribeDsFolderTree", req, resp, cb);
    }

    /**
     * No
     * @param {SubmitTaskTestRunRequest} req
     * @param {function(string, SubmitTaskTestRunResponse):void} cb
     * @public
     */
    SubmitTaskTestRun(req, cb) {
        let resp = new SubmitTaskTestRunResponse();
        this.request("SubmitTaskTestRun", req, resp, cb);
    }

    /**
     * Get Approval Category List
     * @param {DescribeApproveTypeListRequest} req
     * @param {function(string, DescribeApproveTypeListResponse):void} cb
     * @public
     */
    DescribeApproveTypeList(req, cb) {
        let resp = new DescribeApproveTypeListResponse();
        this.request("DescribeApproveTypeList", req, resp, cb);
    }

    /**
     * Rule Execution Log Query
     * @param {DescribeRuleExecLogRequest} req
     * @param {function(string, DescribeRuleExecLogResponse):void} cb
     * @public
     */
    DescribeRuleExecLog(req, cb) {
        let resp = new DescribeRuleExecLogResponse();
        this.request("DescribeRuleExecLog", req, resp, cb);
    }

    /**
     * Development Space - Batch Delete Directories and Files
     * @param {DeleteFilePathRequest} req
     * @param {function(string, DeleteFilePathResponse):void} cb
     * @public
     */
    DeleteFilePath(req, cb) {
        let resp = new DeleteFilePathResponse();
        this.request("DeleteFilePath", req, resp, cb);
    }

    /**
     * Orchestration Space - Create Folder
     * @param {CreateDsFolderRequest} req
     * @param {function(string, CreateDsFolderResponse):void} cb
     * @public
     */
    CreateDsFolder(req, cb) {
        let resp = new CreateDsFolderResponse();
        this.request("CreateDsFolder", req, resp, cb);
    }

    /**
     * Get Downstream Task Information
     * @param {DescribeSuccessorOpsTaskInfosRequest} req
     * @param {function(string, DescribeSuccessorOpsTaskInfosResponse):void} cb
     * @public
     */
    DescribeSuccessorOpsTaskInfos(req, cb) {
        let resp = new DescribeSuccessorOpsTaskInfosResponse();
        this.request("DescribeSuccessorOpsTaskInfos", req, resp, cb);
    }

    /**
     * Debug and Run Integration Task
     * @param {DryRunDIOfflineTaskRequest} req
     * @param {function(string, DryRunDIOfflineTaskResponse):void} cb
     * @public
     */
    DryRunDIOfflineTask(req, cb) {
        let resp = new DryRunDIOfflineTaskResponse();
        this.request("DryRunDIOfflineTask", req, resp, cb);
    }

    /**
     * Quality Report - Query Quality Score
     * @param {DescribeDimensionScoreRequest} req
     * @param {function(string, DescribeDimensionScoreResponse):void} cb
     * @public
     */
    DescribeDimensionScore(req, cb) {
        let resp = new DescribeDimensionScoreResponse();
        this.request("DescribeDimensionScore", req, resp, cb);
    }

    /**
     * Query Table Binding Execution Rule Group Information
     * @param {DescribeRuleGroupTableRequest} req
     * @param {function(string, DescribeRuleGroupTableResponse):void} cb
     * @public
     */
    DescribeRuleGroupTable(req, cb) {
        let resp = new DescribeRuleGroupTableResponse();
        this.request("DescribeRuleGroupTable", req, resp, cb);
    }

    /**
     * This API is used to retrieve role list information.
     * @param {DescribeRoleListRequest} req
     * @param {function(string, DescribeRoleListResponse):void} cb
     * @public
     */
    DescribeRoleList(req, cb) {
        let resp = new DescribeRoleListResponse();
        this.request("DescribeRoleList", req, resp, cb);
    }

    /**
     * Create Integration Task
     * @param {CreateIntegrationTaskRequest} req
     * @param {function(string, CreateIntegrationTaskResponse):void} cb
     * @public
     */
    CreateIntegrationTask(req, cb) {
        let resp = new CreateIntegrationTaskResponse();
        this.request("CreateIntegrationTask", req, resp, cb);
    }

    /**
     * Queries rule details
     * @param {DescribeRuleRequest} req
     * @param {function(string, DescribeRuleResponse):void} cb
     * @public
     */
    DescribeRule(req, cb) {
        let resp = new DescribeRuleResponse();
        this.request("DescribeRule", req, resp, cb);
    }

    /**
     * Batch Termination of Instances by Supplement Plan.
     * @param {KillOpsMakePlanInstancesRequest} req
     * @param {function(string, KillOpsMakePlanInstancesResponse):void} cb
     * @public
     */
    KillOpsMakePlanInstances(req, cb) {
        let resp = new KillOpsMakePlanInstancesResponse();
        this.request("KillOpsMakePlanInstances", req, resp, cb);
    }

    /**
     * Data Source Details
     * @param {DescribeDataSourceListRequest} req
     * @param {function(string, DescribeDataSourceListResponse):void} cb
     * @public
     */
    DescribeDataSourceList(req, cb) {
        let resp = new DescribeDataSourceListResponse();
        this.request("DescribeDataSourceList", req, resp, cb);
    }

    /**
     * This API is used to obtain instance lists.
     * @param {GetInstanceLogRequest} req
     * @param {function(string, GetInstanceLogResponse):void} cb
     * @public
     */
    GetInstanceLog(req, cb) {
        let resp = new GetInstanceLogResponse();
        this.request("GetInstanceLog", req, resp, cb);
    }

    /**
     * Event Management - Triggered Events
     * @param {TriggerDsEventRequest} req
     * @param {function(string, TriggerDsEventResponse):void} cb
     * @public
     */
    TriggerDsEvent(req, cb) {
        let resp = new TriggerDsEventResponse();
        this.request("TriggerDsEvent", req, resp, cb);
    }

    /**
     * Operation and Maintenance Dashboard - Instance Running Duration Ranking
     * @param {DescribeSchedulerRunTimeInstanceCntByStatusRequest} req
     * @param {function(string, DescribeSchedulerRunTimeInstanceCntByStatusResponse):void} cb
     * @public
     */
    DescribeSchedulerRunTimeInstanceCntByStatus(req, cb) {
        let resp = new DescribeSchedulerRunTimeInstanceCntByStatusResponse();
        this.request("DescribeSchedulerRunTimeInstanceCntByStatus", req, resp, cb);
    }

    /**
     * Task Status Statistics
     * @param {DescribeSchedulerTaskCntByStatusRequest} req
     * @param {function(string, DescribeSchedulerTaskCntByStatusResponse):void} cb
     * @public
     */
    DescribeSchedulerTaskCntByStatus(req, cb) {
        let resp = new DescribeSchedulerTaskCntByStatusResponse();
        this.request("DescribeSchedulerTaskCntByStatus", req, resp, cb);
    }

    /**
     * Update Integration Task
     * @param {ModifyIntegrationTaskRequest} req
     * @param {function(string, ModifyIntegrationTaskResponse):void} cb
     * @public
     */
    ModifyIntegrationTask(req, cb) {
        let resp = new ModifyIntegrationTaskResponse();
        this.request("ModifyIntegrationTask", req, resp, cb);
    }

    /**
     * Query Table Score Trend
     * @param {DescribeTableScoreTrendRequest} req
     * @param {function(string, DescribeTableScoreTrendResponse):void} cb
     * @public
     */
    DescribeTableScoreTrend(req, cb) {
        let resp = new DescribeTableScoreTrendResponse();
        this.request("DescribeTableScoreTrend", req, resp, cb);
    }

    /**
     * DataInLong Dashboard Task Status Distribution Statistics
     * @param {DescribeIntegrationStatisticsTaskStatusRequest} req
     * @param {function(string, DescribeIntegrationStatisticsTaskStatusResponse):void} cb
     * @public
     */
    DescribeIntegrationStatisticsTaskStatus(req, cb) {
        let resp = new DescribeIntegrationStatisticsTaskStatusResponse();
        this.request("DescribeIntegrationStatisticsTaskStatus", req, resp, cb);
    }

    /**
     * Batch Run Integration Tasks
     * @param {BatchStartIntegrationTasksRequest} req
     * @param {function(string, BatchStartIntegrationTasksResponse):void} cb
     * @public
     */
    BatchStartIntegrationTasks(req, cb) {
        let resp = new BatchStartIntegrationTasksResponse();
        this.request("BatchStartIntegrationTasks", req, resp, cb);
    }

    /**
     * Quality Report - Modify Dimension Permissions
     * @param {ModifyDimensionWeightRequest} req
     * @param {function(string, ModifyDimensionWeightResponse):void} cb
     * @public
     */
    ModifyDimensionWeight(req, cb) {
        let resp = new ModifyDimensionWeightResponse();
        this.request("ModifyDimensionWeight", req, resp, cb);
    }

    /**
     * Query Rule Execution Result Details
     * @param {DescribeRuleExecDetailRequest} req
     * @param {function(string, DescribeRuleExecDetailResponse):void} cb
     * @public
     */
    DescribeRuleExecDetail(req, cb) {
        let resp = new DescribeRuleExecDetailResponse();
        this.request("DescribeRuleExecDetail", req, resp, cb);
    }

    /**
     * Offline Task Renaming Verification
     * @param {CheckTaskNameExistRequest} req
     * @param {function(string, CheckTaskNameExistResponse):void} cb
     * @public
     */
    CheckTaskNameExist(req, cb) {
        let resp = new CheckTaskNameExistResponse();
        this.request("CheckTaskNameExist", req, resp, cb);
    }

    /**
     * Obtain the Supplementary Instance List based on the Supplementary Plan and Task.
     * @param {DescribeOpsMakePlanInstancesRequest} req
     * @param {function(string, DescribeOpsMakePlanInstancesResponse):void} cb
     * @public
     */
    DescribeOpsMakePlanInstances(req, cb) {
        let resp = new DescribeOpsMakePlanInstancesResponse();
        this.request("DescribeOpsMakePlanInstances", req, resp, cb);
    }

    /**
     * Data Source Details
     * @param {DescribeDatasourceRequest} req
     * @param {function(string, DescribeDatasourceResponse):void} cb
     * @public
     */
    DescribeDatasource(req, cb) {
        let resp = new DescribeDatasourceResponse();
        this.request("DescribeDatasource", req, resp, cb);
    }

    /**
     * Data Development Module - Folder Update
     * @param {ModifyDsFolderRequest} req
     * @param {function(string, ModifyDsFolderResponse):void} cb
     * @public
     */
    ModifyDsFolder(req, cb) {
        let resp = new ModifyDsFolderResponse();
        this.request("ModifyDsFolder", req, resp, cb);
    }

    /**
     * Query Workflow Details by Workflow ID
     * @param {DescribeWorkflowInfoByIdRequest} req
     * @param {function(string, DescribeWorkflowInfoByIdResponse):void} cb
     * @public
     */
    DescribeWorkflowInfoById(req, cb) {
        let resp = new DescribeWorkflowInfoByIdResponse();
        this.request("DescribeWorkflowInfoById", req, resp, cb);
    }

    /**
     * Task Status Trend
     * @param {DescribeTaskByStatusReportRequest} req
     * @param {function(string, DescribeTaskByStatusReportResponse):void} cb
     * @public
     */
    DescribeTaskByStatusReport(req, cb) {
        let resp = new DescribeTaskByStatusReportResponse();
        this.request("DescribeTaskByStatusReport", req, resp, cb);
    }

    /**
     * Obtain Offline Task Instances
     * @param {GetOfflineInstanceListRequest} req
     * @param {function(string, GetOfflineInstanceListResponse):void} cb
     * @public
     */
    GetOfflineInstanceList(req, cb) {
        let resp = new GetOfflineInstanceListResponse();
        this.request("GetOfflineInstanceList", req, resp, cb);
    }

    /**
     * Create Offline Task
     * @param {CreateOfflineTaskRequest} req
     * @param {function(string, CreateOfflineTaskResponse):void} cb
     * @public
     */
    CreateOfflineTask(req, cb) {
        let resp = new CreateOfflineTaskResponse();
        this.request("CreateOfflineTask", req, resp, cb);
    }

    /**
     * This API is used to update workflow scheduling. This API is deprecated. Use the RenewWorkflowSchedulerInfoDs API instead.
     * @param {ModifyWorkflowScheduleRequest} req
     * @param {function(string, ModifyWorkflowScheduleResponse):void} cb
     * @public
     */
    ModifyWorkflowSchedule(req, cb) {
        let resp = new ModifyWorkflowScheduleResponse();
        this.request("ModifyWorkflowSchedule", req, resp, cb);
    }

    /**
     * Retrieve Table Schema Information
     * @param {DescribeTableSchemaInfoRequest} req
     * @param {function(string, DescribeTableSchemaInfoResponse):void} cb
     * @public
     */
    DescribeTableSchemaInfo(req, cb) {
        let resp = new DescribeTableSchemaInfoResponse();
        this.request("DescribeTableSchemaInfo", req, resp, cb);
    }

    /**
     * Update Quality Rule Interface
     * @param {ModifyRuleRequest} req
     * @param {function(string, ModifyRuleResponse):void} cb
     * @public
     */
    ModifyRule(req, cb) {
        let resp = new ModifyRuleResponse();
        this.request("ModifyRule", req, resp, cb);
    }

    /**
     * Query Function Type
     * @param {DescribeFunctionTypesRequest} req
     * @param {function(string, DescribeFunctionTypesResponse):void} cb
     * @public
     */
    DescribeFunctionTypes(req, cb) {
        let resp = new DescribeFunctionTypesResponse();
        this.request("DescribeFunctionTypes", req, resp, cb);
    }

    /**
     * Delete Data Source
     * @param {DeleteDataSourcesRequest} req
     * @param {function(string, DeleteDataSourcesResponse):void} cb
     * @public
     */
    DeleteDataSources(req, cb) {
        let resp = new DeleteDataSourcesResponse();
        this.request("DeleteDataSources", req, resp, cb);
    }

    /**
     * Delete Integration Node
     * @param {DeleteIntegrationNodeRequest} req
     * @param {function(string, DeleteIntegrationNodeResponse):void} cb
     * @public
     */
    DeleteIntegrationNode(req, cb) {
        let resp = new DeleteIntegrationNodeResponse();
        this.request("DeleteIntegrationNode", req, resp, cb);
    }

    /**
     * Stop Integration Task
     * @param {StopIntegrationTaskRequest} req
     * @param {function(string, StopIntegrationTaskResponse):void} cb
     * @public
     */
    StopIntegrationTask(req, cb) {
        let resp = new StopIntegrationTaskResponse();
        this.request("StopIntegrationTask", req, resp, cb);
    }

    /**
     * Get Table Metadata List
     * @param {DescribeTableMetasRequest} req
     * @param {function(string, DescribeTableMetasResponse):void} cb
     * @public
     */
    DescribeTableMetas(req, cb) {
        let resp = new DescribeTableMetasResponse();
        this.request("DescribeTableMetas", req, resp, cb);
    }

    /**
     * Real-time task synchronization speed trend
     * @param {DescribeRealTimeTaskSpeedRequest} req
     * @param {function(string, DescribeRealTimeTaskSpeedResponse):void} cb
     * @public
     */
    DescribeRealTimeTaskSpeed(req, cb) {
        let resp = new DescribeRealTimeTaskSpeedResponse();
        this.request("DescribeRealTimeTaskSpeed", req, resp, cb);
    }

    /**
     * Get Instance List
     * @param {DescribeInstanceListRequest} req
     * @param {function(string, DescribeInstanceListResponse):void} cb
     * @public
     */
    DescribeInstanceList(req, cb) {
        let resp = new DescribeInstanceListResponse();
        this.request("DescribeInstanceList", req, resp, cb);
    }

    /**
     * Metadata Model-Table Basic Information Query Interface
     * @param {DescribeTableBasicInfoRequest} req
     * @param {function(string, DescribeTableBasicInfoResponse):void} cb
     * @public
     */
    DescribeTableBasicInfo(req, cb) {
        let resp = new DescribeTableBasicInfoResponse();
        this.request("DescribeTableBasicInfo", req, resp, cb);
    }

    /**
     * Alert Recipient Details
     * @param {DescribeAlarmReceiverRequest} req
     * @param {function(string, DescribeAlarmReceiverResponse):void} cb
     * @public
     */
    DescribeAlarmReceiver(req, cb) {
        let resp = new DescribeAlarmReceiverResponse();
        this.request("DescribeAlarmReceiver", req, resp, cb);
    }

    /**
     * View Task Lock Status Information
     * @param {DescribeTaskLockStatusRequest} req
     * @param {function(string, DescribeTaskLockStatusResponse):void} cb
     * @public
     */
    DescribeTaskLockStatus(req, cb) {
        let resp = new DescribeTaskLockStatusResponse();
        this.request("DescribeTaskLockStatus", req, resp, cb);
    }

    /**
     * Operation and Maintenance Dashboard-Instance Status Distribution
     * @param {DescribeSchedulerInstanceStatusRequest} req
     * @param {function(string, DescribeSchedulerInstanceStatusResponse):void} cb
     * @public
     */
    DescribeSchedulerInstanceStatus(req, cb) {
        let resp = new DescribeSchedulerInstanceStatusResponse();
        this.request("DescribeSchedulerInstanceStatus", req, resp, cb);
    }

    /**
     * Get Instance Running Logs
     * @param {DescribeInstanceLogRequest} req
     * @param {function(string, DescribeInstanceLogResponse):void} cb
     * @public
     */
    DescribeInstanceLog(req, cb) {
        let resp = new DescribeInstanceLogResponse();
        this.request("DescribeInstanceLog", req, resp, cb);
    }

    /**
     * Bulk Update Integration Tasks (Currently only supports bulk updating of the person in charge)
     * @param {BatchUpdateIntegrationTasksRequest} req
     * @param {function(string, BatchUpdateIntegrationTasksResponse):void} cb
     * @public
     */
    BatchUpdateIntegrationTasks(req, cb) {
        let resp = new BatchUpdateIntegrationTasksResponse();
        this.request("BatchUpdateIntegrationTasks", req, resp, cb);
    }

    /**
     * Resource Management-Batch Delete Resource Files
     * @param {DeleteResourceFilesRequest} req
     * @param {function(string, DeleteResourceFilesResponse):void} cb
     * @public
     */
    DeleteResourceFiles(req, cb) {
        let resp = new DeleteResourceFilesResponse();
        this.request("DeleteResourceFiles", req, resp, cb);
    }

    /**
     * Bulk Data Supplement (Create Supplementary Entry Task)
     * @param {CreateOpsMakePlanRequest} req
     * @param {function(string, CreateOpsMakePlanResponse):void} cb
     * @public
     */
    CreateOpsMakePlan(req, cb) {
        let resp = new CreateOpsMakePlanResponse();
        this.request("CreateOpsMakePlan", req, resp, cb);
    }

    /**
     * This API is used to obtain instance lists.
     * @param {GetTaskInstanceRequest} req
     * @param {function(string, GetTaskInstanceResponse):void} cb
     * @public
     */
    GetTaskInstance(req, cb) {
        let resp = new GetTaskInstanceResponse();
        this.request("GetTaskInstance", req, resp, cb);
    }

    /**
     * Task Operation and Maintenance - Bulk Pause Tasks
     * @param {FreezeOpsTasksRequest} req
     * @param {function(string, FreezeOpsTasksResponse):void} cb
     * @public
     */
    FreezeOpsTasks(req, cb) {
        let resp = new FreezeOpsTasksResponse();
        this.request("FreezeOpsTasks", req, resp, cb);
    }

    /**
     * Query Rule Group Details Interface
     * @param {DescribeRuleGroupRequest} req
     * @param {function(string, DescribeRuleGroupResponse):void} cb
     * @public
     */
    DescribeRuleGroup(req, cb) {
        let resp = new DescribeRuleGroupResponse();
        this.request("DescribeRuleGroup", req, resp, cb);
    }

    /**
     * <p style="color:red;">[Note: This version is only available to a portion of allowlist customers in the Guangzhou Region]</p>
Modify Task Script
     * @param {ModifyTaskScriptRequest} req
     * @param {function(string, ModifyTaskScriptResponse):void} cb
     * @public
     */
    ModifyTaskScript(req, cb) {
        let resp = new ModifyTaskScriptResponse();
        this.request("ModifyTaskScript", req, resp, cb);
    }

    /**
     * Obtain Specific Instance-related Log Information
     * @param {DescribeInstanceLogDetailRequest} req
     * @param {function(string, DescribeInstanceLogDetailResponse):void} cb
     * @public
     */
    DescribeInstanceLogDetail(req, cb) {
        let resp = new DescribeInstanceLogDetailResponse();
        this.request("DescribeInstanceLogDetail", req, resp, cb);
    }

    /**
     * Orchestration Space Bulk Operation Page Find All Folders
     * @param {FindAllFolderRequest} req
     * @param {function(string, FindAllFolderResponse):void} cb
     * @public
     */
    FindAllFolder(req, cb) {
        let resp = new FindAllFolderResponse();
        this.request("FindAllFolder", req, resp, cb);
    }

    /**
     * Obtain Database Information
     * @param {DescribeDatabaseInfoListRequest} req
     * @param {function(string, DescribeDatabaseInfoListResponse):void} cb
     * @public
     */
    DescribeDatabaseInfoList(req, cb) {
        let resp = new DescribeDatabaseInfoListResponse();
        this.request("DescribeDatabaseInfoList", req, resp, cb);
    }

    /**
     * Search for upstream/downstream task nodes by hierarchy
     * @param {DescribeDependOpsTasksRequest} req
     * @param {function(string, DescribeDependOpsTasksResponse):void} cb
     * @public
     */
    DescribeDependOpsTasks(req, cb) {
        let resp = new DescribeDependOpsTasksResponse();
        this.request("DescribeDependOpsTasks", req, resp, cb);
    }

    /**
     * Submit integration task
     * @param {CommitIntegrationTaskRequest} req
     * @param {function(string, CommitIntegrationTaskResponse):void} cb
     * @public
     */
    CommitIntegrationTask(req, cb) {
        let resp = new CommitIntegrationTaskResponse();
        this.request("CommitIntegrationTask", req, resp, cb);
    }

    /**
     * Deleting task
     * @param {DeleteOfflineTaskRequest} req
     * @param {function(string, DeleteOfflineTaskResponse):void} cb
     * @public
     */
    DeleteOfflineTask(req, cb) {
        let resp = new DeleteOfflineTaskResponse();
        this.request("DeleteOfflineTask", req, resp, cb);
    }

    /**
     * Create Hive table and return table name
     * @param {CreateHiveTableByDDLRequest} req
     * @param {function(string, CreateHiveTableByDDLResponse):void} cb
     * @public
     */
    CreateHiveTableByDDL(req, cb) {
        let resp = new CreateHiveTableByDDLResponse();
        this.request("CreateHiveTableByDDL", req, resp, cb);
    }

    /**
     * Orchestration space - delete folders
     * @param {DeleteDsFolderRequest} req
     * @param {function(string, DeleteDsFolderResponse):void} cb
     * @public
     */
    DeleteDsFolder(req, cb) {
        let resp = new DeleteDsFolderResponse();
        this.request("DeleteDsFolder", req, resp, cb);
    }

    /**
     * Retrieve resource management directory tree
     * @param {DescribeResourceManagePathTreesRequest} req
     * @param {function(string, DescribeResourceManagePathTreesResponse):void} cb
     * @public
     */
    DescribeResourceManagePathTrees(req, cb) {
        let resp = new DescribeResourceManagePathTreesResponse();
        this.request("DescribeResourceManagePathTrees", req, resp, cb);
    }

    /**
     * Batch set successful integration task instances
     * @param {BatchForceSuccessIntegrationTaskInstancesRequest} req
     * @param {function(string, BatchForceSuccessIntegrationTaskInstancesResponse):void} cb
     * @public
     */
    BatchForceSuccessIntegrationTaskInstances(req, cb) {
        let resp = new BatchForceSuccessIntegrationTaskInstancesResponse();
        this.request("BatchForceSuccessIntegrationTaskInstances", req, resp, cb);
    }

    /**
     * Query real-time task log list
     * @param {DescribeStreamTaskLogListRequest} req
     * @param {function(string, DescribeStreamTaskLogListResponse):void} cb
     * @public
     */
    DescribeStreamTaskLogList(req, cb) {
        let resp = new DescribeStreamTaskLogListResponse();
        this.request("DescribeStreamTaskLogList", req, resp, cb);
    }

    /**
     * Create quality rule interface
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }

    /**
     * Edit Rule Template
     * @param {ModifyRuleTemplateRequest} req
     * @param {function(string, ModifyRuleTemplateResponse):void} cb
     * @public
     */
    ModifyRuleTemplate(req, cb) {
        let resp = new ModifyRuleTemplateResponse();
        this.request("ModifyRuleTemplate", req, resp, cb);
    }

    /**
     * View Event Details by Project ID and Event Name
     * @param {DescribeEventRequest} req
     * @param {function(string, DescribeEventResponse):void} cb
     * @public
     */
    DescribeEvent(req, cb) {
        let resp = new DescribeEventResponse();
        this.request("DescribeEvent", req, resp, cb);
    }

    /**
     * Query all subfolders + workflows under the parent directory
     * @param {DescribeAllByFolderNewRequest} req
     * @param {function(string, DescribeAllByFolderNewResponse):void} cb
     * @public
     */
    DescribeAllByFolderNew(req, cb) {
        let resp = new DescribeAllByFolderNewResponse();
        this.request("DescribeAllByFolderNew", req, resp, cb);
    }

    /**
     * Quality Report - Query Table Quality Details
     * @param {DescribeTableQualityDetailsRequest} req
     * @param {function(string, DescribeTableQualityDetailsResponse):void} cb
     * @public
     */
    DescribeTableQualityDetails(req, cb) {
        let resp = new DescribeTableQualityDetailsResponse();
        this.request("DescribeTableQualityDetails", req, resp, cb);
    }

    /**
     * [Filter Criteria]
{Table Name (TableName), supports fuzzy matching}       {Table Owner (TableOwnerName), supports fuzzy matching}      {Monitoring Methods (MonitorTypes), 1. Not Configured 2. Linked to Production Scheduling 3. Offline Periodic Inspection, supports multiple selections}  {Subscriber (ReceiverUin)}
[Required Fields]
{Data Source (DatasourceId)}
     * @param {DescribeRuleGroupsByPageRequest} req
     * @param {function(string, DescribeRuleGroupsByPageResponse):void} cb
     * @public
     */
    DescribeRuleGroupsByPage(req, cb) {
        let resp = new DescribeRuleGroupsByPageResponse();
        this.request("DescribeRuleGroupsByPage", req, resp, cb);
    }

    /**
     * Query all column metadata of the table
     * @param {DescribeColumnsMetaRequest} req
     * @param {function(string, DescribeColumnsMetaResponse):void} cb
     * @public
     */
    DescribeColumnsMeta(req, cb) {
        let resp = new DescribeColumnsMetaResponse();
        this.request("DescribeColumnsMeta", req, resp, cb);
    }

    /**
     * <p style="color:red;">[Note: This version is only available to a portion of allowlist customers in the Guangzhou Region]</p>
Register Event Listener
     * @param {RegisterEventListenerRequest} req
     * @param {function(string, RegisterEventListenerResponse):void} cb
     * @public
     */
    RegisterEventListener(req, cb) {
        let resp = new RegisterEventListenerResponse();
        this.request("RegisterEventListener", req, resp, cb);
    }

    /**
     * Batch operation page to retrieve task list
     * @param {DescribeBatchOperateTaskRequest} req
     * @param {function(string, DescribeBatchOperateTaskResponse):void} cb
     * @public
     */
    DescribeBatchOperateTask(req, cb) {
        let resp = new DescribeBatchOperateTaskResponse();
        this.request("DescribeBatchOperateTask", req, resp, cb);
    }

    /**
     * Delete Quality Rule Interface
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        let resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }

    /**
     * Check for Duplicate Alert Rule Names
     * @param {CheckAlarmRegularNameExistRequest} req
     * @param {function(string, CheckAlarmRegularNameExistResponse):void} cb
     * @public
     */
    CheckAlarmRegularNameExist(req, cb) {
        let resp = new CheckAlarmRegularNameExistResponse();
        this.request("CheckAlarmRegularNameExist", req, resp, cb);
    }

    /**
     * Check if Integration Task Name Exists
     * @param {CheckIntegrationTaskNameExistsRequest} req
     * @param {function(string, CheckIntegrationTaskNameExistsResponse):void} cb
     * @public
     */
    CheckIntegrationTaskNameExists(req, cb) {
        let resp = new CheckIntegrationTaskNameExistsResponse();
        this.request("CheckIntegrationTaskNameExists", req, resp, cb);
    }

    /**
     * Paginated Query of Quality Rules
     * @param {DescribeRulesByPageRequest} req
     * @param {function(string, DescribeRulesByPageResponse):void} cb
     * @public
     */
    DescribeRulesByPage(req, cb) {
        let resp = new DescribeRulesByPageResponse();
        this.request("DescribeRulesByPage", req, resp, cb);
    }

    /**
     * Delete Project Users
     * @param {DeleteProjectUsersRequest} req
     * @param {function(string, DeleteProjectUsersResponse):void} cb
     * @public
     */
    DeleteProjectUsers(req, cb) {
        let resp = new DeleteProjectUsersResponse();
        this.request("DeleteProjectUsers", req, resp, cb);
    }

    /**
     * Delete File
     * @param {DeleteFileRequest} req
     * @param {function(string, DeleteFileResponse):void} cb
     * @public
     */
    DeleteFile(req, cb) {
        let resp = new DeleteFileResponse();
        this.request("DeleteFile", req, resp, cb);
    }

    /**
     * Perform Batch Data Supplement Operation on Integrated Offline Tasks
     * @param {BatchMakeUpIntegrationTasksRequest} req
     * @param {function(string, BatchMakeUpIntegrationTasksResponse):void} cb
     * @public
     */
    BatchMakeUpIntegrationTasks(req, cb) {
        let resp = new BatchMakeUpIntegrationTasksResponse();
        this.request("BatchMakeUpIntegrationTasks", req, resp, cb);
    }

    /**
     * Save Task Information
     * @param {UploadContentRequest} req
     * @param {function(string, UploadContentResponse):void} cb
     * @public
     */
    UploadContent(req, cb) {
        let resp = new UploadContentResponse();
        this.request("UploadContent", req, resp, cb);
    }

    /**
     * Query Template Details
     * @param {DescribeRuleTemplateRequest} req
     * @param {function(string, DescribeRuleTemplateResponse):void} cb
     * @public
     */
    DescribeRuleTemplate(req, cb) {
        let resp = new DescribeRuleTemplateResponse();
        this.request("DescribeRuleTemplate", req, resp, cb);
    }

    /**
     * Task Operation and Maintenance - Task List Batch Startup
     * @param {BatchRunOpsTaskRequest} req
     * @param {function(string, BatchRunOpsTaskResponse):void} cb
     * @public
     */
    BatchRunOpsTask(req, cb) {
        let resp = new BatchRunOpsTaskResponse();
        this.request("BatchRunOpsTask", req, resp, cb);
    }

    /**
     * [Filter Conditions] {Template Name (Name), supports fuzzy matching} {Template Type (type), 1.System Template 2.Custom Definition Template} {Quality Detection Dimensions (QualityDims), 1.Accuracy 2.Uniqueness 3.Integrity 4.Consistency 5.Timeliness 6.Validity} [Sorting Field] {Citation Sorting Type (CitationOrderType), sort by citation count ASC DESC}
     * @param {DescribeRuleTemplatesByPageRequest} req
     * @param {function(string, DescribeRuleTemplatesByPageResponse):void} cb
     * @public
     */
    DescribeRuleTemplatesByPage(req, cb) {
        let resp = new DescribeRuleTemplatesByPageResponse();
        this.request("DescribeRuleTemplatesByPage", req, resp, cb);
    }

    /**
     * This API is used to update workflow information. (deprecated). Use API UpdateWorkflowInfo.
     * @param {ModifyWorkflowInfoRequest} req
     * @param {function(string, ModifyWorkflowInfoResponse):void} cb
     * @public
     */
    ModifyWorkflowInfo(req, cb) {
        let resp = new ModifyWorkflowInfoResponse();
        this.request("ModifyWorkflowInfo", req, resp, cb);
    }

    /**
     * Data Quality Overview Page Rule Operation Interface
     * @param {DescribeRuleExecStatRequest} req
     * @param {function(string, DescribeRuleExecStatResponse):void} cb
     * @public
     */
    DescribeRuleExecStat(req, cb) {
        let resp = new DescribeRuleExecStatResponse();
        this.request("DescribeRuleExecStat", req, resp, cb);
    }

    /**
     * Instance Batch Rerun
     * @param {RunRerunScheduleInstancesRequest} req
     * @param {function(string, RunRerunScheduleInstancesResponse):void} cb
     * @public
     */
    RunRerunScheduleInstances(req, cb) {
        let resp = new RunRerunScheduleInstancesResponse();
        this.request("RunRerunScheduleInstances", req, resp, cb);
    }

    /**
     * Rule Group Execution Result Pagination Query Interface
     * @param {DescribeRuleGroupExecResultsByPageRequest} req
     * @param {function(string, DescribeRuleGroupExecResultsByPageResponse):void} cb
     * @public
     */
    DescribeRuleGroupExecResultsByPage(req, cb) {
        let resp = new DescribeRuleGroupExecResultsByPageResponse();
        this.request("DescribeRuleGroupExecResultsByPage", req, resp, cb);
    }

    /**
     * Resource Management - Delete Resource File
     * @param {DeleteResourceFileRequest} req
     * @param {function(string, DeleteResourceFileResponse):void} cb
     * @public
     */
    DeleteResourceFile(req, cb) {
        let resp = new DeleteResourceFileResponse();
        this.request("DeleteResourceFile", req, resp, cb);
    }

    /**
     * Bulk Create Task Alert Rules
     * @param {BatchCreateIntegrationTaskAlarmsRequest} req
     * @param {function(string, BatchCreateIntegrationTaskAlarmsResponse):void} cb
     * @public
     */
    BatchCreateIntegrationTaskAlarms(req, cb) {
        let resp = new BatchCreateIntegrationTaskAlarmsResponse();
        this.request("BatchCreateIntegrationTaskAlarms", req, resp, cb);
    }

    /**
     * Pull DAG Instance
     * @param {DagInstancesRequest} req
     * @param {function(string, DagInstancesResponse):void} cb
     * @public
     */
    DagInstances(req, cb) {
        let resp = new DagInstancesResponse();
        this.request("DagInstances", req, resp, cb);
    }

    /**
     * Modify Approval Form Status
     * @param {ModifyApproveStatusRequest} req
     * @param {function(string, ModifyApproveStatusResponse):void} cb
     * @public
     */
    ModifyApproveStatus(req, cb) {
        let resp = new ModifyApproveStatusResponse();
        this.request("ModifyApproveStatus", req, resp, cb);
    }

    /**
     * Download Log File, Return Log Download URL
     * @param {DescribeInstanceLogFileRequest} req
     * @param {function(string, DescribeInstanceLogFileResponse):void} cb
     * @public
     */
    DescribeInstanceLogFile(req, cb) {
        let resp = new DescribeInstanceLogFileResponse();
        this.request("DescribeInstanceLogFile", req, resp, cb);
    }

    /**
     * This API is used to asynchronously create task versions in batches.
     * @param {BatchCreateTaskVersionAsyncRequest} req
     * @param {function(string, BatchCreateTaskVersionAsyncResponse):void} cb
     * @public
     */
    BatchCreateTaskVersionAsync(req, cb) {
        let resp = new BatchCreateTaskVersionAsyncResponse();
        this.request("BatchCreateTaskVersionAsync", req, resp, cb);
    }

    /**
     * Update Monitoring Status
     * @param {ModifyMonitorStatusRequest} req
     * @param {function(string, ModifyMonitorStatusResponse):void} cb
     * @public
     */
    ModifyMonitorStatus(req, cb) {
        let resp = new ModifyMonitorStatusResponse();
        this.request("ModifyMonitorStatus", req, resp, cb);
    }

    /**
     * Query Rule Group Execution Policy
     * @param {DescribeExecStrategyRequest} req
     * @param {function(string, DescribeExecStrategyResponse):void} cb
     * @public
     */
    DescribeExecStrategy(req, cb) {
        let resp = new DescribeExecStrategyResponse();
        this.request("DescribeExecStrategy", req, resp, cb);
    }

    /**
     * List Table Lineage Information
     * @param {DescribeTableLineageRequest} req
     * @param {function(string, DescribeTableLineageResponse):void} cb
     * @public
     */
    DescribeTableLineage(req, cb) {
        let resp = new DescribeTableLineageResponse();
        this.request("DescribeTableLineage", req, resp, cb);
    }

    /**
     * This API is used to add parent task dependency.
     * @param {ModifyTaskLinksDsRequest} req
     * @param {function(string, ModifyTaskLinksDsResponse):void} cb
     * @public
     */
    ModifyTaskLinksDs(req, cb) {
        let resp = new ModifyTaskLinksDsResponse();
        this.request("ModifyTaskLinksDs", req, resp, cb);
    }

    /**
     * Pause Integration Task
     * @param {SuspendIntegrationTaskRequest} req
     * @param {function(string, SuspendIntegrationTaskResponse):void} cb
     * @public
     */
    SuspendIntegrationTask(req, cb) {
        let resp = new SuspendIntegrationTaskResponse();
        this.request("SuspendIntegrationTask", req, resp, cb);
    }

    /**
     * Creating workflow
     * @param {CreateWorkflowDsRequest} req
     * @param {function(string, CreateWorkflowDsResponse):void} cb
     * @public
     */
    CreateWorkflowDs(req, cb) {
        let resp = new CreateWorkflowDsResponse();
        this.request("CreateWorkflowDs", req, resp, cb);
    }

    /**
     * Find Event Instances Based on Conditions
     * @param {DescribeEventCasesRequest} req
     * @param {function(string, DescribeEventCasesResponse):void} cb
     * @public
     */
    DescribeEventCases(req, cb) {
        let resp = new DescribeEventCasesResponse();
        this.request("DescribeEventCases", req, resp, cb);
    }

    /**
     * Get Offline Task Instance List (New)
     * @param {GetOfflineDIInstanceListRequest} req
     * @param {function(string, GetOfflineDIInstanceListResponse):void} cb
     * @public
     */
    GetOfflineDIInstanceList(req, cb) {
        let resp = new GetOfflineDIInstanceListResponse();
        this.request("GetOfflineDIInstanceList", req, resp, cb);
    }

    /**
     * Delete Workflow by Workflow Id
     * @param {DeleteWorkflowByIdRequest} req
     * @param {function(string, DeleteWorkflowByIdResponse):void} cb
     * @public
     */
    DeleteWorkflowById(req, cb) {
        let resp = new DeleteWorkflowByIdResponse();
        this.request("DeleteWorkflowById", req, resp, cb);
    }

    /**
     * Query Quality Rule List
     * @param {DescribeRulesRequest} req
     * @param {function(string, DescribeRulesResponse):void} cb
     * @public
     */
    DescribeRules(req, cb) {
        let resp = new DescribeRulesResponse();
        this.request("DescribeRules", req, resp, cb);
    }

    /**
     * This API is used to register an event.
     * @param {RegisterDsEventRequest} req
     * @param {function(string, RegisterDsEventResponse):void} cb
     * @public
     */
    RegisterDsEvent(req, cb) {
        let resp = new RegisterDsEventResponse();
        this.request("RegisterDsEvent", req, resp, cb);
    }

    /**
     * Initiate Integration Task
     * @param {StartIntegrationTaskRequest} req
     * @param {function(string, StartIntegrationTaskResponse):void} cb
     * @public
     */
    StartIntegrationTask(req, cb) {
        let resp = new StartIntegrationTaskResponse();
        this.request("StartIntegrationTask", req, resp, cb);
    }

    /**
     * Lock Integration Task
     * @param {LockIntegrationTaskRequest} req
     * @param {function(string, LockIntegrationTaskResponse):void} cb
     * @public
     */
    LockIntegrationTask(req, cb) {
        let resp = new LockIntegrationTaskResponse();
        this.request("LockIntegrationTask", req, resp, cb);
    }

    /**
     * This API is used to query the task submission list.
     * @param {DescribeReportTaskListRequest} req
     * @param {function(string, DescribeReportTaskListResponse):void} cb
     * @public
     */
    DescribeReportTaskList(req, cb) {
        let resp = new DescribeReportTaskListResponse();
        this.request("DescribeReportTaskList", req, resp, cb);
    }

    /**
     * Submit a workflow. This API is deprecated. Use the BatchCreateTaskVersionAsync API.
     * @param {SubmitWorkflowRequest} req
     * @param {function(string, SubmitWorkflowResponse):void} cb
     * @public
     */
    SubmitWorkflow(req, cb) {
        let resp = new SubmitWorkflowResponse();
        this.request("SubmitWorkflow", req, resp, cb);
    }

    /**
     * Batch Delete Integration Tasks.
     * @param {BatchDeleteIntegrationTasksRequest} req
     * @param {function(string, BatchDeleteIntegrationTasksResponse):void} cb
     * @public
     */
    BatchDeleteIntegrationTasks(req, cb) {
        let resp = new BatchDeleteIntegrationTasksResponse();
        this.request("BatchDeleteIntegrationTasks", req, resp, cb);
    }

    /**
     * Query Integration Task List
     * @param {DescribeIntegrationTasksRequest} req
     * @param {function(string, DescribeIntegrationTasksResponse):void} cb
     * @public
     */
    DescribeIntegrationTasks(req, cb) {
        let resp = new DescribeIntegrationTasksResponse();
        this.request("DescribeIntegrationTasks", req, resp, cb);
    }

    /**
     * Task Status Trend
     * @param {DescribeStatisticInstanceStatusTrendOpsRequest} req
     * @param {function(string, DescribeStatisticInstanceStatusTrendOpsResponse):void} cb
     * @public
     */
    DescribeStatisticInstanceStatusTrendOps(req, cb) {
        let resp = new DescribeStatisticInstanceStatusTrendOpsResponse();
        this.request("DescribeStatisticInstanceStatusTrendOps", req, resp, cb);
    }

    /**
     * List Field Lineage Information
     * @param {DescribeColumnLineageRequest} req
     * @param {function(string, DescribeColumnLineageResponse):void} cb
     * @public
     */
    DescribeColumnLineage(req, cb) {
        let resp = new DescribeColumnLineageResponse();
        this.request("DescribeColumnLineage", req, resp, cb);
    }

    /**
     * Data Quality Overview Page Trend Change Interface
     * @param {DescribeTrendStatRequest} req
     * @param {function(string, DescribeTrendStatResponse):void} cb
     * @public
     */
    DescribeTrendStat(req, cb) {
        let resp = new DescribeTrendStatResponse();
        this.request("DescribeTrendStat", req, resp, cb);
    }

    /**
     * Retrieve Data Table Information
     * @param {DescribeTableInfoListRequest} req
     * @param {function(string, DescribeTableInfoListResponse):void} cb
     * @public
     */
    DescribeTableInfoList(req, cb) {
        let resp = new DescribeTableInfoListResponse();
        this.request("DescribeTableInfoList", req, resp, cb);
    }

    /**
     * Query Rule Group Subscription Information
     * @param {DescribeRuleGroupSubscriptionRequest} req
     * @param {function(string, DescribeRuleGroupSubscriptionResponse):void} cb
     * @public
     */
    DescribeRuleGroupSubscription(req, cb) {
        let resp = new DescribeRuleGroupSubscriptionResponse();
        this.request("DescribeRuleGroupSubscription", req, resp, cb);
    }

    /**
     * Delete Orchestration Space Task
     * @param {DeleteTaskDsRequest} req
     * @param {function(string, DeleteTaskDsResponse):void} cb
     * @public
     */
    DeleteTaskDs(req, cb) {
        let resp = new DeleteTaskDsResponse();
        this.request("DeleteTaskDs", req, resp, cb);
    }

    /**
     * Update Rule Group Subscription Information
     * @param {ModifyRuleGroupSubscriptionRequest} req
     * @param {function(string, ModifyRuleGroupSubscriptionResponse):void} cb
     * @public
     */
    ModifyRuleGroupSubscription(req, cb) {
        let resp = new ModifyRuleGroupSubscriptionResponse();
        this.request("ModifyRuleGroupSubscription", req, resp, cb);
    }

    /**
     * Delete Task Alert Rule
     * @param {DeleteTaskAlarmRegularRequest} req
     * @param {function(string, DeleteTaskAlarmRegularResponse):void} cb
     * @public
     */
    DeleteTaskAlarmRegular(req, cb) {
        let resp = new DeleteTaskAlarmRegularResponse();
        this.request("DeleteTaskAlarmRegular", req, resp, cb);
    }

    /**
     * Query Rule Execution Result List
     * @param {DescribeRuleExecResultsRequest} req
     * @param {function(string, DescribeRuleExecResultsResponse):void} cb
     * @public
     */
    DescribeRuleExecResults(req, cb) {
        let resp = new DescribeRuleExecResultsResponse();
        this.request("DescribeRuleExecResults", req, resp, cb);
    }

    /**
     * <p style="color:red;">[Note: This version is only available to some allowlisted customers in the Guangzhou region]</p>.
This API is used to trigger event. This API is deprecated. Use API TriggerDsEvent.
     * @param {TriggerEventRequest} req
     * @param {function(string, TriggerEventResponse):void} cb
     * @public
     */
    TriggerEvent(req, cb) {
        let resp = new TriggerEventResponse();
        this.request("TriggerEvent", req, resp, cb);
    }

    /**
     * Pause All Tasks Under Workflow
     * @param {FreezeTasksByWorkflowIdsRequest} req
     * @param {function(string, FreezeTasksByWorkflowIdsResponse):void} cb
     * @public
     */
    FreezeTasksByWorkflowIds(req, cb) {
        let resp = new FreezeTasksByWorkflowIdsResponse();
        this.request("FreezeTasksByWorkflowIds", req, resp, cb);
    }

    /**
     * Remove resources in Resource Management
     * @param {DeleteResourceRequest} req
     * @param {function(string, DeleteResourceResponse):void} cb
     * @public
     */
    DeleteResource(req, cb) {
        let resp = new DeleteResourceResponse();
        this.request("DeleteResource", req, resp, cb);
    }

    /**
     * Quality Report - Quality Score Periodic Trend
     * @param {DescribeQualityScoreTrendRequest} req
     * @param {function(string, DescribeQualityScoreTrendResponse):void} cb
     * @public
     */
    DescribeQualityScoreTrend(req, cb) {
        let resp = new DescribeQualityScoreTrendResponse();
        this.request("DescribeQualityScoreTrend", req, resp, cb);
    }

    /**
     * Query Task Detail List by taskIds
     * @param {DescribeDependTaskListsRequest} req
     * @param {function(string, DescribeDependTaskListsResponse):void} cb
     * @public
     */
    DescribeDependTaskLists(req, cb) {
        let resp = new DescribeDependTaskListsResponse();
        this.request("DescribeDependTaskLists", req, resp, cb);
    }

    /**
     * Save User-Defined Function
     * @param {SaveCustomFunctionRequest} req
     * @param {function(string, SaveCustomFunctionResponse):void} cb
     * @public
     */
    SaveCustomFunction(req, cb) {
        let resp = new SaveCustomFunctionResponse();
        this.request("SaveCustomFunction", req, resp, cb);
    }

    /**
     * Modify Data Source
     * @param {ModifyDataSourceRequest} req
     * @param {function(string, ModifyDataSourceResponse):void} cb
     * @public
     */
    ModifyDataSource(req, cb) {
        let resp = new ModifyDataSourceResponse();
        this.request("ModifyDataSource", req, resp, cb);
    }

    /**
     * Query Task Alert Rule List
     * @param {DescribeTaskAlarmRegulationsRequest} req
     * @param {function(string, DescribeTaskAlarmRegulationsResponse):void} cb
     * @public
     */
    DescribeTaskAlarmRegulations(req, cb) {
        let resp = new DescribeTaskAlarmRegulationsResponse();
        this.request("DescribeTaskAlarmRegulations", req, resp, cb);
    }

    /**
     * Query Integration Task Version Node Information
     * @param {DescribeIntegrationVersionNodesInfoRequest} req
     * @param {function(string, DescribeIntegrationVersionNodesInfoResponse):void} cb
     * @public
     */
    DescribeIntegrationVersionNodesInfo(req, cb) {
        let resp = new DescribeIntegrationVersionNodesInfoResponse();
        this.request("DescribeIntegrationVersionNodesInfo", req, resp, cb);
    }

    /**
     * This API is used to batch update the task owner under a workflow.
     * @param {RenewWorkflowOwnerDsRequest} req
     * @param {function(string, RenewWorkflowOwnerDsResponse):void} cb
     * @public
     */
    RenewWorkflowOwnerDs(req, cb) {
        let resp = new RenewWorkflowOwnerDsResponse();
        this.request("RenewWorkflowOwnerDs", req, resp, cb);
    }

    /**
     * Modify task alert rules
     * @param {ModifyTaskAlarmRegularRequest} req
     * @param {function(string, ModifyTaskAlarmRegularResponse):void} cb
     * @public
     */
    ModifyTaskAlarmRegular(req, cb) {
        let resp = new ModifyTaskAlarmRegularResponse();
        this.request("ModifyTaskAlarmRegular", req, resp, cb);
    }

    /**
     * Delete user-defined Definition functions
     * @param {DeleteCustomFunctionRequest} req
     * @param {function(string, DeleteCustomFunctionResponse):void} cb
     * @public
     */
    DeleteCustomFunction(req, cb) {
        let resp = new DeleteCustomFunctionResponse();
        this.request("DeleteCustomFunction", req, resp, cb);
    }

    /**
     * Query rule template dimension distribution
     * @param {DescribeTemplateDimCountRequest} req
     * @param {function(string, DescribeTemplateDimCountResponse):void} cb
     * @public
     */
    DescribeTemplateDimCount(req, cb) {
        let resp = new DescribeTemplateDimCountResponse();
        this.request("DescribeTemplateDimCount", req, resp, cb);
    }

    /**
     * Get all workflow lists under the project by Project ID
     * @param {DescribeFolderWorkflowListRequest} req
     * @param {function(string, DescribeFolderWorkflowListResponse):void} cb
     * @public
     */
    DescribeFolderWorkflowList(req, cb) {
        let resp = new DescribeFolderWorkflowListResponse();
        this.request("DescribeFolderWorkflowList", req, resp, cb);
    }

    /**
     * Query integration tasks
     * @param {DescribeIntegrationTaskRequest} req
     * @param {function(string, DescribeIntegrationTaskResponse):void} cb
     * @public
     */
    DescribeIntegrationTask(req, cb) {
        let resp = new DescribeIntegrationTaskResponse();
        this.request("DescribeIntegrationTask", req, resp, cb);
    }

    /**
     * Query the number of workflow tasks
     * @param {DescribeWorkflowTaskCountRequest} req
     * @param {function(string, DescribeWorkflowTaskCountResponse):void} cb
     * @public
     */
    DescribeWorkflowTaskCount(req, cb) {
        let resp = new DescribeWorkflowTaskCountResponse();
        this.request("DescribeWorkflowTaskCount", req, resp, cb);
    }

    /**
     * Statistics on task instance status
     * @param {CountOpsInstanceStateRequest} req
     * @param {function(string, CountOpsInstanceStateResponse):void} cb
     * @public
     */
    CountOpsInstanceState(req, cb) {
        let resp = new CountOpsInstanceStateResponse();
        this.request("CountOpsInstanceState", req, resp, cb);
    }

    /**
     * DataInLong dashboard instance status statistical trend
     * @param {DescribeIntegrationStatisticsInstanceTrendRequest} req
     * @param {function(string, DescribeIntegrationStatisticsInstanceTrendResponse):void} cb
     * @public
     */
    DescribeIntegrationStatisticsInstanceTrend(req, cb) {
        let resp = new DescribeIntegrationStatisticsInstanceTrendResponse();
        this.request("DescribeIntegrationStatisticsInstanceTrend", req, resp, cb);
    }

    /**
     * Query Workflow Canvas Run Start and End Time
     * @param {DescribeWorkflowExecuteByIdRequest} req
     * @param {function(string, DescribeWorkflowExecuteByIdResponse):void} cb
     * @public
     */
    DescribeWorkflowExecuteById(req, cb) {
        let resp = new DescribeWorkflowExecuteByIdResponse();
        this.request("DescribeWorkflowExecuteById", req, resp, cb);
    }

    /**
     * Create Integration Node
     * @param {CreateIntegrationNodeRequest} req
     * @param {function(string, CreateIntegrationNodeResponse):void} cb
     * @public
     */
    CreateIntegrationNode(req, cb) {
        let resp = new CreateIntegrationNodeResponse();
        this.request("CreateIntegrationNode", req, resp, cb);
    }

    /**
     * Task Operation and Maintenance - Batch Delete Tasks
     * @param {BatchDeleteOpsTasksRequest} req
     * @param {function(string, BatchDeleteOpsTasksResponse):void} cb
     * @public
     */
    BatchDeleteOpsTasks(req, cb) {
        let resp = new BatchDeleteOpsTasksResponse();
        this.request("BatchDeleteOpsTasks", req, resp, cb);
    }

    /**
     * This API is used to obtain instance lists.
     * @param {ListInstancesRequest} req
     * @param {function(string, ListInstancesResponse):void} cb
     * @public
     */
    ListInstances(req, cb) {
        let resp = new ListInstancesResponse();
        this.request("ListInstances", req, resp, cb);
    }

    /**
     * Submit Rule Group to Run Task Interface
     * @param {CommitRuleGroupTaskRequest} req
     * @param {function(string, CommitRuleGroupTaskResponse):void} cb
     * @public
     */
    CommitRuleGroupTask(req, cb) {
        let resp = new CommitRuleGroupTaskResponse();
        this.request("CommitRuleGroupTask", req, resp, cb);
    }

    /**
     * Log Detail Acquisition Page
     * @param {DescribeInstanceLastLogRequest} req
     * @param {function(string, DescribeInstanceLastLogResponse):void} cb
     * @public
     */
    DescribeInstanceLastLog(req, cb) {
        let resp = new DescribeInstanceLastLogResponse();
        this.request("DescribeInstanceLastLog", req, resp, cb);
    }

    /**
     * <p style="color:red;">[Note: This version is only available to some whitelist customers in the Guangzhou zone]</p>.
Add parent task dependency. This API is deprecated. Use API ModifyTaskLinksDs.
     * @param {ModifyTaskLinksRequest} req
     * @param {function(string, ModifyTaskLinksResponse):void} cb
     * @public
     */
    ModifyTaskLinks(req, cb) {
        let resp = new ModifyTaskLinksResponse();
        this.request("ModifyTaskLinks", req, resp, cb);
    }

    /**
     * <p style="color:red;">[Note: This version is only available for partial allowlisted customers in the Guangzhou region]</p>.
This API is used to register events. This API is deprecated. Use API RegisterDsEvent.
     * @param {RegisterEventRequest} req
     * @param {function(string, RegisterEventResponse):void} cb
     * @public
     */
    RegisterEvent(req, cb) {
        let resp = new RegisterEventResponse();
        this.request("RegisterEvent", req, resp, cb);
    }

    /**
     * Paginated Query of Supplement Plan Based on Conditions
     * @param {DescribeOpsMakePlansRequest} req
     * @param {function(string, DescribeOpsMakePlansResponse):void} cb
     * @public
     */
    DescribeOpsMakePlans(req, cb) {
        let resp = new DescribeOpsMakePlansResponse();
        this.request("DescribeOpsMakePlans", req, resp, cb);
    }

    /**
     * Query Workflow Canvas
     * @param {DescribeWorkflowCanvasInfoRequest} req
     * @param {function(string, DescribeWorkflowCanvasInfoResponse):void} cb
     * @public
     */
    DescribeWorkflowCanvasInfo(req, cb) {
        let resp = new DescribeWorkflowCanvasInfoResponse();
        this.request("DescribeWorkflowCanvasInfo", req, resp, cb);
    }

    /**
     * Querying database list
     * @param {DescribeDatabaseMetasRequest} req
     * @param {function(string, DescribeDatabaseMetasResponse):void} cb
     * @public
     */
    DescribeDatabaseMetas(req, cb) {
        let resp = new DescribeDatabaseMetasResponse();
        this.request("DescribeDatabaseMetas", req, resp, cb);
    }

    /**
     * Orchestration Space - Workflow - Create Task Folder
     * @param {CreateTaskFolderRequest} req
     * @param {function(string, CreateTaskFolderResponse):void} cb
     * @public
     */
    CreateTaskFolder(req, cb) {
        let resp = new CreateTaskFolderResponse();
        this.request("CreateTaskFolder", req, resp, cb);
    }

    /**
     * Batch Continue Execution of Integrated Real-time Tasks
     * @param {BatchResumeIntegrationTasksRequest} req
     * @param {function(string, BatchResumeIntegrationTasksResponse):void} cb
     * @public
     */
    BatchResumeIntegrationTasks(req, cb) {
        let resp = new BatchResumeIntegrationTasksResponse();
        this.request("BatchResumeIntegrationTasks", req, resp, cb);
    }

    /**
     * <p style="color:red;">[Note: This version is only available to a portion of allowlist customers in the Guangzhou Region]</p>
Update Task
     * @param {ModifyTaskInfoRequest} req
     * @param {function(string, ModifyTaskInfoResponse):void} cb
     * @public
     */
    ModifyTaskInfo(req, cb) {
        let resp = new ModifyTaskInfoResponse();
        this.request("ModifyTaskInfo", req, resp, cb);
    }

    /**
     * <p style="color:red;">[Note: This version is only available for partial whitelist customers in the Guangzhou zone]</p>.
This API is used to submit tasks. This API is deprecated. Use the CreateTaskVersionDs API.
     * @param {SubmitTaskRequest} req
     * @param {function(string, SubmitTaskResponse):void} cb
     * @public
     */
    SubmitTask(req, cb) {
        let resp = new SubmitTaskResponse();
        this.request("SubmitTask", req, resp, cb);
    }

    /**
     * Ad Hoc Analysis - Submit SQL Task
     * @param {SubmitSqlTaskRequest} req
     * @param {function(string, SubmitSqlTaskResponse):void} cb
     * @public
     */
    SubmitSqlTask(req, cb) {
        let resp = new SubmitSqlTaskResponse();
        this.request("SubmitSqlTask", req, resp, cb);
    }

    /**
     * Obtain Data Source Information - Data Source Pagination List
     * @param {DescribeDataSourceInfoListRequest} req
     * @param {function(string, DescribeDataSourceInfoListResponse):void} cb
     * @public
     */
    DescribeDataSourceInfoList(req, cb) {
        let resp = new DescribeDataSourceInfoListResponse();
        this.request("DescribeDataSourceInfoList", req, resp, cb);
    }

    /**
     * Query Function Classification
     * @param {DescribeFunctionKindsRequest} req
     * @param {function(string, DescribeFunctionKindsResponse):void} cb
     * @public
     */
    DescribeFunctionKinds(req, cb) {
        let resp = new DescribeFunctionKindsResponse();
        this.request("DescribeFunctionKinds", req, resp, cb);
    }

    /**
     * This API is used to modify user roles in a project.
     * @param {UpdateProjectUserRoleRequest} req
     * @param {function(string, UpdateProjectUserRoleResponse):void} cb
     * @public
     */
    UpdateProjectUserRole(req, cb) {
        let resp = new UpdateProjectUserRoleResponse();
        this.request("UpdateProjectUserRole", req, resp, cb);
    }

    /**
     * Query Inlong Manager Logs
     * @param {TaskLogRequest} req
     * @param {function(string, TaskLogResponse):void} cb
     * @public
     */
    TaskLog(req, cb) {
        let resp = new TaskLogResponse();
        this.request("TaskLog", req, resp, cb);
    }

    /**
     * Viewing Rule Template List
     * @param {DescribeRuleTemplatesRequest} req
     * @param {function(string, DescribeRuleTemplatesResponse):void} cb
     * @public
     */
    DescribeRuleTemplates(req, cb) {
        let resp = new DescribeRuleTemplatesResponse();
        this.request("DescribeRuleTemplates", req, resp, cb);
    }

    /**
     * This API is used to modify the workflow owner. Deprecated. Use the RenewWorkflowOwnerDs API.
     * @param {UpdateWorkflowOwnerRequest} req
     * @param {function(string, UpdateWorkflowOwnerResponse):void} cb
     * @public
     */
    UpdateWorkflowOwner(req, cb) {
        let resp = new UpdateWorkflowOwnerResponse();
        this.request("UpdateWorkflowOwner", req, resp, cb);
    }

    /**
     * Updating Integrated Nodes
     * @param {ModifyIntegrationNodeRequest} req
     * @param {function(string, ModifyIntegrationNodeResponse):void} cb
     * @public
     */
    ModifyIntegrationNode(req, cb) {
        let resp = new ModifyIntegrationNodeResponse();
        this.request("ModifyIntegrationNode", req, resp, cb);
    }

    /**
     * Preemptive locking of integration tasks
     * @param {RobAndLockIntegrationTaskRequest} req
     * @param {function(string, RobAndLockIntegrationTaskResponse):void} cb
     * @public
     */
    RobAndLockIntegrationTask(req, cb) {
        let resp = new RobAndLockIntegrationTaskResponse();
        this.request("RobAndLockIntegrationTask", req, resp, cb);
    }

    /**
     * Retrieving Project Information
     * @param {DescribeProjectRequest} req
     * @param {function(string, DescribeProjectResponse):void} cb
     * @public
     */
    DescribeProject(req, cb) {
        let resp = new DescribeProjectResponse();
        this.request("DescribeProject", req, resp, cb);
    }

    /**
     * Querying Table Metadata Details
     * @param {DescribeTableMetaRequest} req
     * @param {function(string, DescribeTableMetaResponse):void} cb
     * @public
     */
    DescribeTableMeta(req, cb) {
        let resp = new DescribeTableMetaResponse();
        this.request("DescribeTableMeta", req, resp, cb);
    }

    /**
     * Extracting DataInLong Node Field Schema
     * @param {GetIntegrationNodeColumnSchemaRequest} req
     * @param {function(string, GetIntegrationNodeColumnSchemaResponse):void} cb
     * @public
     */
    GetIntegrationNodeColumnSchema(req, cb) {
        let resp = new GetIntegrationNodeColumnSchemaResponse();
        this.request("GetIntegrationNodeColumnSchema", req, resp, cb);
    }

    /**
     * Querying User Production Workflow List
     * @param {DescribeOpsWorkflowsRequest} req
     * @param {function(string, DescribeOpsWorkflowsResponse):void} cb
     * @public
     */
    DescribeOpsWorkflows(req, cb) {
        let resp = new DescribeOpsWorkflowsResponse();
        this.request("DescribeOpsWorkflows", req, resp, cb);
    }

    /**
     * Batch Rerun Integration Task Instances
     * @param {BatchRerunIntegrationTaskInstancesRequest} req
     * @param {function(string, BatchRerunIntegrationTaskInstancesResponse):void} cb
     * @public
     */
    BatchRerunIntegrationTaskInstances(req, cb) {
        let resp = new BatchRerunIntegrationTaskInstancesResponse();
        this.request("BatchRerunIntegrationTaskInstances", req, resp, cb);
    }

    /**
     * List Table Lineage Information
     * @param {DescribeTableLineageInfoRequest} req
     * @param {function(string, DescribeTableLineageInfoResponse):void} cb
     * @public
     */
    DescribeTableLineageInfo(req, cb) {
        let resp = new DescribeTableLineageInfoResponse();
        this.request("DescribeTableLineageInfo", req, resp, cb);
    }

    /**
     * Submit Custom Definition Function
     * @param {SubmitCustomFunctionRequest} req
     * @param {function(string, SubmitCustomFunctionResponse):void} cb
     * @public
     */
    SubmitCustomFunction(req, cb) {
        let resp = new SubmitCustomFunctionResponse();
        this.request("SubmitCustomFunction", req, resp, cb);
    }

    /**
     * Query Real-time Task Instance Node Information
     * @param {DescribeRealTimeTaskInstanceNodeInfoRequest} req
     * @param {function(string, DescribeRealTimeTaskInstanceNodeInfoResponse):void} cb
     * @public
     */
    DescribeRealTimeTaskInstanceNodeInfo(req, cb) {
        let resp = new DescribeRealTimeTaskInstanceNodeInfoResponse();
        this.request("DescribeRealTimeTaskInstanceNodeInfo", req, resp, cb);
    }

    /**
     * DataInLong Dashboard Overview
     * @param {DescribeIntegrationStatisticsRequest} req
     * @param {function(string, DescribeIntegrationStatisticsResponse):void} cb
     * @public
     */
    DescribeIntegrationStatistics(req, cb) {
        let resp = new DescribeIntegrationStatisticsResponse();
        this.request("DescribeIntegrationStatistics", req, resp, cb);
    }

    /**
     * This API is used to query task details for reports.
     * @param {DescribeReportTaskDetailRequest} req
     * @param {function(string, DescribeReportTaskDetailResponse):void} cb
     * @public
     */
    DescribeReportTaskDetail(req, cb) {
        let resp = new DescribeReportTaskDetailResponse();
        this.request("DescribeReportTaskDetail", req, resp, cb);
    }

    /**
     * Batch Stop Workflow
     * @param {BatchStopWorkflowsByIdsRequest} req
     * @param {function(string, BatchStopWorkflowsByIdsResponse):void} cb
     * @public
     */
    BatchStopWorkflowsByIds(req, cb) {
        let resp = new BatchStopWorkflowsByIdsResponse();
        this.request("BatchStopWorkflowsByIds", req, resp, cb);
    }

    /**
     * Paginated Query of Trial Run Instance List
     * @param {DescribeDrInstancePageRequest} req
     * @param {function(string, DescribeDrInstancePageResponse):void} cb
     * @public
     */
    DescribeDrInstancePage(req, cb) {
        let resp = new DescribeDrInstancePageResponse();
        this.request("DescribeDrInstancePage", req, resp, cb);
    }


}
module.exports = WedataClient;
