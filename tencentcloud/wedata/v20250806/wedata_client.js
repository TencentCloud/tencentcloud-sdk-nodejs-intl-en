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
const CreateTaskResult = models.CreateTaskResult;
const SystemRole = models.SystemRole;
const ListOpsTriggerWorkflowsResponse = models.ListOpsTriggerWorkflowsResponse;
const ListWorkflowPermissionsResponse = models.ListWorkflowPermissionsResponse;
const ListProcessLineageResponse = models.ListProcessLineageResponse;
const GetWorkflowFolderRequest = models.GetWorkflowFolderRequest;
const WorkflowInfo = models.WorkflowInfo;
const RevokePrivilegesRequest = models.RevokePrivilegesRequest;
const ListTableResponse = models.ListTableResponse;
const CreateDataSourceRequest = models.CreateDataSourceRequest;
const GetResourceGroupMetricsResponse = models.GetResourceGroupMetricsResponse;
const DeleteWorkflowResponse = models.DeleteWorkflowResponse;
const ListDataSourcesRequest = models.ListDataSourcesRequest;
const OpsWorkflows = models.OpsWorkflows;
const ProjectRequest = models.ProjectRequest;
const WorkflowGeneralTaskParam = models.WorkflowGeneralTaskParam;
const GetMyCodeMaxPermissionRequest = models.GetMyCodeMaxPermissionRequest;
const DeleteResourceFolderResponse = models.DeleteResourceFolderResponse;
const UpdateTaskRequest = models.UpdateTaskRequest;
const KVMap = models.KVMap;
const CreateTriggerWorkflowRunResponse = models.CreateTriggerWorkflowRunResponse;
const ListResourceFilesResponse = models.ListResourceFilesResponse;
const ListDownstreamTaskInstancesRequest = models.ListDownstreamTaskInstancesRequest;
const UpdateProjectRequest = models.UpdateProjectRequest;
const DeleteWorkflowRequest = models.DeleteWorkflowRequest;
const ListProjectMembersRequest = models.ListProjectMembersRequest;
const DeleteDataBackfillPlanAsyncRequest = models.DeleteDataBackfillPlanAsyncRequest;
const DeleteTriggerWorkflowResponse = models.DeleteTriggerWorkflowResponse;
const TriggerTaskRunBrief = models.TriggerTaskRunBrief;
const ListTriggerWorkflowsRequest = models.ListTriggerWorkflowsRequest;
const PauseOpsTasksAsyncRequest = models.PauseOpsTasksAsyncRequest;
const TaskConfiguration = models.TaskConfiguration;
const DependencyTriggerTaskBrief = models.DependencyTriggerTaskBrief;
const DissociateResourceGroupFromProjectRequest = models.DissociateResourceGroupFromProjectRequest;
const DLCClusterInfo = models.DLCClusterInfo;
const UpdateTriggerWorkflowResult = models.UpdateTriggerWorkflowResult;
const CreateWorkflowRequest = models.CreateWorkflowRequest;
const TaskSchedulingParameter = models.TaskSchedulingParameter;
const SubmitTaskRequest = models.SubmitTaskRequest;
const RemoveMemberProjectRoleResponse = models.RemoveMemberProjectRoleResponse;
const SchedulingParameter = models.SchedulingParameter;
const UpdateSQLFolderRequest = models.UpdateSQLFolderRequest;
const BackfillInstance = models.BackfillInstance;
const OpsWorkflow = models.OpsWorkflow;
const CreateSQLFolderRequest = models.CreateSQLFolderRequest;
const GetOpsTaskResponse = models.GetOpsTaskResponse;
const UpdateTriggerTaskResponse = models.UpdateTriggerTaskResponse;
const ListTriggerTaskInfo = models.ListTriggerTaskInfo;
const SQLStopResult = models.SQLStopResult;
const ResourceStatus = models.ResourceStatus;
const EnableProjectResponse = models.EnableProjectResponse;
const ListCatalogPage = models.ListCatalogPage;
const CreateProjectMemberRequest = models.CreateProjectMemberRequest;
const DeleteLineageResponse = models.DeleteLineageResponse;
const TaskInstanceDetail = models.TaskInstanceDetail;
const CreateTaskFolderResult = models.CreateTaskFolderResult;
const SubmitTaskResult = models.SubmitTaskResult;
const ProjectUserRole = models.ProjectUserRole;
const TaskDependDto = models.TaskDependDto;
const DeleteWorkflowPermissionsResult = models.DeleteWorkflowPermissionsResult;
const SetSuccessTaskInstancesAsyncRequest = models.SetSuccessTaskInstancesAsyncRequest;
const GetOpsTaskCodeResponse = models.GetOpsTaskCodeResponse;
const ListWorkflowsResponse = models.ListWorkflowsResponse;
const CreateProjectResponse = models.CreateProjectResponse;
const ProjectInstanceStatisticsAlarmInfo = models.ProjectInstanceStatisticsAlarmInfo;
const DeleteProjectResponse = models.DeleteProjectResponse;
const TriggerWorkflowResult = models.TriggerWorkflowResult;
const CodePermissionsResultItem = models.CodePermissionsResultItem;
const GetTaskVersionResponse = models.GetTaskVersionResponse;
const GetOpsWorkflowRequest = models.GetOpsWorkflowRequest;
const ListTaskVersionsResponse = models.ListTaskVersionsResponse;
const ProjectBrief = models.ProjectBrief;
const UpdateOpsTriggerTasksOwnerResponse = models.UpdateOpsTriggerTasksOwnerResponse;
const RevokeDataSourceAuthorizationResponse = models.RevokeDataSourceAuthorizationResponse;
const TaskCode = models.TaskCode;
const BriefTask = models.BriefTask;
const UpdateTaskPartiallyResponse = models.UpdateTaskPartiallyResponse;
const UpdateTriggerTaskPartiallyRequest = models.UpdateTriggerTaskPartiallyRequest;
const DeleteResourceFileRequest = models.DeleteResourceFileRequest;
const DeleteCodePermissionsRequest = models.DeleteCodePermissionsRequest;
const SQLScriptConfig = models.SQLScriptConfig;
const CodeFile = models.CodeFile;
const AddCalcEnginesToProjectRequest = models.AddCalcEnginesToProjectRequest;
const UpdateTaskBaseAttribute = models.UpdateTaskBaseAttribute;
const CreateWorkflowResult = models.CreateWorkflowResult;
const TaskDataRegistry = models.TaskDataRegistry;
const KillTriggerWorkflowRunsRequest = models.KillTriggerWorkflowRunsRequest;
const AuthInfo = models.AuthInfo;
const DeleteCodeFolderRequest = models.DeleteCodeFolderRequest;
const QualitySqlExpression = models.QualitySqlExpression;
const DeleteResourceFileResult = models.DeleteResourceFileResult;
const UpdateTaskFolderRequest = models.UpdateTaskFolderRequest;
const ListOpsWorkflowsResponse = models.ListOpsWorkflowsResponse;
const BackfillInstanceCollection = models.BackfillInstanceCollection;
const CreateSQLFolderResponse = models.CreateSQLFolderResponse;
const ListDownstreamTaskInstancesResponse = models.ListDownstreamTaskInstancesResponse;
const GetWorkflowRequest = models.GetWorkflowRequest;
const ListResourceFoldersResponse = models.ListResourceFoldersResponse;
const UpdateResourceGroupResponse = models.UpdateResourceGroupResponse;
const CreateTriggerTaskSchedulerConfiguration = models.CreateTriggerTaskSchedulerConfiguration;
const GetTriggerTaskResponse = models.GetTriggerTaskResponse;
const ListSQLFolderContentsResponse = models.ListSQLFolderContentsResponse;
const GetTriggerTaskCodeResponse = models.GetTriggerTaskCodeResponse;
const ListWorkflowFoldersRequest = models.ListWorkflowFoldersRequest;
const GetDataSourceRelatedTasksResponse = models.GetDataSourceRelatedTasksResponse;
const DeleteWorkflowFolderResponse = models.DeleteWorkflowFolderResponse;
const ListTaskInstancesRequest = models.ListTaskInstancesRequest;
const RerunTaskInstancesAsyncResponse = models.RerunTaskInstancesAsyncResponse;
const ListUpstreamTriggerTasksRequest = models.ListUpstreamTriggerTasksRequest;
const ExploreFilePermissionsPage = models.ExploreFilePermissionsPage;
const ExploreAuthorizationObject = models.ExploreAuthorizationObject;
const GetTriggerTaskCodeRequest = models.GetTriggerTaskCodeRequest;
const RelateTask = models.RelateTask;
const GetTriggerWorkflowRunRequest = models.GetTriggerWorkflowRunRequest;
const UpdateWorkflowResult = models.UpdateWorkflowResult;
const DescribeDataSourceAuthorityResponse = models.DescribeDataSourceAuthorityResponse;
const AlarmRuleDetail = models.AlarmRuleDetail;
const StopOpsTasksAsyncRequest = models.StopOpsTasksAsyncRequest;
const GetTriggerTaskRunResponse = models.GetTriggerTaskRunResponse;
const UpdateTaskPartiallyRequest = models.UpdateTaskPartiallyRequest;
const GetSQLScriptRequest = models.GetSQLScriptRequest;
const ExecutorResourceGroupInfo = models.ExecutorResourceGroupInfo;
const InstanceExecution = models.InstanceExecution;
const UpdateTriggerTaskRequest = models.UpdateTriggerTaskRequest;
const TaskInstance = models.TaskInstance;
const TriggerWorkflowDetail = models.TriggerWorkflowDetail;
const IntegrationResource = models.IntegrationResource;
const DataSource = models.DataSource;
const OpsTaskDepend = models.OpsTaskDepend;
const ListTaskInstancesResponse = models.ListTaskInstancesResponse;
const DataSourceResult = models.DataSourceResult;
const GetResourcePrivilegeDetailRsp = models.GetResourcePrivilegeDetailRsp;
const CreateResourceGroupRequest = models.CreateResourceGroupRequest;
const ListTableRequest = models.ListTableRequest;
const UpdateResourceGroupRequest = models.UpdateResourceGroupRequest;
const DeleteCodeFileRequest = models.DeleteCodeFileRequest;
const UpdateTriggerWorkflowResponse = models.UpdateTriggerWorkflowResponse;
const ListOpsAlarmRulesRequest = models.ListOpsAlarmRulesRequest;
const ListTenantRolesRequest = models.ListTenantRolesRequest;
const UpdateTriggerTaskBrief = models.UpdateTriggerTaskBrief;
const SecurityFilter = models.SecurityFilter;
const GrantMemberProjectRoleResponse = models.GrantMemberProjectRoleResponse;
const QualityRuleTemplate = models.QualityRuleTemplate;
const ExploreFileResource = models.ExploreFileResource;
const JobDto = models.JobDto;
const DeleteResourceFileResponse = models.DeleteResourceFileResponse;
const ListDownstreamOpsTasksRequest = models.ListDownstreamOpsTasksRequest;
const UpdateOpsTriggerTasksOwnerRequest = models.UpdateOpsTriggerTasksOwnerRequest;
const UpdateCodeFileRequest = models.UpdateCodeFileRequest;
const LineageResource = models.LineageResource;
const TaskBaseAttribute = models.TaskBaseAttribute;
const ListDataSourcesResponse = models.ListDataSourcesResponse;
const TimeOutStrategyInfo = models.TimeOutStrategyInfo;
const GetCodeFileRequest = models.GetCodeFileRequest;
const ExploreAuthorizationRecycleObject = models.ExploreAuthorizationRecycleObject;
const OperateResult = models.OperateResult;
const ListSchemaPage = models.ListSchemaPage;
const GetTriggerWorkflowRunResponse = models.GetTriggerWorkflowRunResponse;
const RegisterLineageResponse = models.RegisterLineageResponse;
const ListTriggerWorkflowRunsResponse = models.ListTriggerWorkflowRunsResponse;
const CreateCodeFileResponse = models.CreateCodeFileResponse;
const ListResourceGroupsResponse = models.ListResourceGroupsResponse;
const UpdateResourceFolderRequest = models.UpdateResourceFolderRequest;
const UpdateTriggerTaskBaseAttributePart = models.UpdateTriggerTaskBaseAttributePart;
const ListTaskInstanceExecutionsRequest = models.ListTaskInstanceExecutionsRequest;
const StopOpsTasksAsyncResponse = models.StopOpsTasksAsyncResponse;
const ProjectUsersBrief = models.ProjectUsersBrief;
const ListLineageRequest = models.ListLineageRequest;
const ListOpsTasksPage = models.ListOpsTasksPage;
const CreateOpsAlarmRuleResponse = models.CreateOpsAlarmRuleResponse;
const AuthorizeDataSourceRequest = models.AuthorizeDataSourceRequest;
const ExploreAuthorizeSubject = models.ExploreAuthorizeSubject;
const GetTriggerTaskRunRequest = models.GetTriggerTaskRunRequest;
const SubmitTriggerTaskResponse = models.SubmitTriggerTaskResponse;
const AuthorizePrivilegesRequest = models.AuthorizePrivilegesRequest;
const GetSQLFolderRequest = models.GetSQLFolderRequest;
const TaskFolder = models.TaskFolder;
const AlarmWayWebHook = models.AlarmWayWebHook;
const Subject = models.Subject;
const GetResourceFileResponse = models.GetResourceFileResponse;
const GetTaskCodeRequest = models.GetTaskCodeRequest;
const CreateSQLScriptResponse = models.CreateSQLScriptResponse;
const TriggerTaskSchedulerConfiguration = models.TriggerTaskSchedulerConfiguration;
const TriggerDependencyConfigPage = models.TriggerDependencyConfigPage;
const ListLineageResponse = models.ListLineageResponse;
const CreateTaskSchedulerConfiguration = models.CreateTaskSchedulerConfiguration;
const CreateCodeFolderResponse = models.CreateCodeFolderResponse;
const ExecutorResourceGroupData = models.ExecutorResourceGroupData;
const CreateTriggerTaskBaseAttribute = models.CreateTriggerTaskBaseAttribute;
const ListTablePage = models.ListTablePage;
const ListTriggerWorkflowInfo = models.ListTriggerWorkflowInfo;
const DataBackfill = models.DataBackfill;
const RemoveMemberProjectRoleRequest = models.RemoveMemberProjectRoleRequest;
const ListTriggerTaskVersionsRequest = models.ListTriggerTaskVersionsRequest;
const RunSQLScriptRequest = models.RunSQLScriptRequest;
const AssociateResourceGroupToProjectResponse = models.AssociateResourceGroupToProjectResponse;
const CreateResourceGroupResponse = models.CreateResourceGroupResponse;
const TriggerWorkflowRunBrief = models.TriggerWorkflowRunBrief;
const GetTriggerTaskRequest = models.GetTriggerTaskRequest;
const DeleteSQLScriptRequest = models.DeleteSQLScriptRequest;
const ListTasksResponse = models.ListTasksResponse;
const UpdateResourceFolderResponse = models.UpdateResourceFolderResponse;
const ListCodePermissionsRequest = models.ListCodePermissionsRequest;
const DataSourceFileUpload = models.DataSourceFileUpload;
const ListTriggerWorkflowsResponse = models.ListTriggerWorkflowsResponse;
const DeleteDataBackfillPlanAsyncResponse = models.DeleteDataBackfillPlanAsyncResponse;
const ListSchemaResponse = models.ListSchemaResponse;
const GetCodeFolderResponse = models.GetCodeFolderResponse;
const DeleteSQLFolderResponse = models.DeleteSQLFolderResponse;
const GetTaskVersionRequest = models.GetTaskVersionRequest;
const GetTableColumnsRequest = models.GetTableColumnsRequest;
const UpdateSQLFolderResponse = models.UpdateSQLFolderResponse;
const ListAlarmMessagesRequest = models.ListAlarmMessagesRequest;
const ListDatabaseResponse = models.ListDatabaseResponse;
const ListSQLScriptRunsResponse = models.ListSQLScriptRunsResponse;
const GetProjectResponse = models.GetProjectResponse;
const GetTaskInstanceLogRequest = models.GetTaskInstanceLogRequest;
const CreateCodeFolderRequest = models.CreateCodeFolderRequest;
const CreateTaskFolderRequest = models.CreateTaskFolderRequest;
const ListPermissionsResponse = models.ListPermissionsResponse;
const GetMyCodeMaxPermissionResponse = models.GetMyCodeMaxPermissionResponse;
const ListCatalogRequest = models.ListCatalogRequest;
const CodeStudioFolderResult = models.CodeStudioFolderResult;
const PrivilegeInfo = models.PrivilegeInfo;
const DeleteTaskResult = models.DeleteTaskResult;
const ExploreFilePrivilegeItem = models.ExploreFilePrivilegeItem;
const GetResourceFolderRequest = models.GetResourceFolderRequest;
const AlarmQuietInterval = models.AlarmQuietInterval;
const UpdateTaskFolderResponse = models.UpdateTaskFolderResponse;
const ResourceGroupSpecification = models.ResourceGroupSpecification;
const DeleteResourceGroupRequest = models.DeleteResourceGroupRequest;
const ListTasksRequest = models.ListTasksRequest;
const ListDownstreamTriggerTasksRequest = models.ListDownstreamTriggerTasksRequest;
const UpdateTaskPart = models.UpdateTaskPart;
const ResourceFile = models.ResourceFile;
const TriggerWorkflowRunResult = models.TriggerWorkflowRunResult;
const ExecutionActionBrief = models.ExecutionActionBrief;
const GetWorkflowResponse = models.GetWorkflowResponse;
const GetTaskResponse = models.GetTaskResponse;
const CreateSQLScriptRequest = models.CreateSQLScriptRequest;
const UpdateTaskFolderResult = models.UpdateTaskFolderResult;
const DeleteTaskFolderRequest = models.DeleteTaskFolderRequest;
const GetAlarmMessageRequest = models.GetAlarmMessageRequest;
const ListCodeFolderContentsRequest = models.ListCodeFolderContentsRequest;
const ListTaskVersionsRequest = models.ListTaskVersionsRequest;
const OpsWorkflowDetail = models.OpsWorkflowDetail;
const TableInfo = models.TableInfo;
const ListResourceFilesRequest = models.ListResourceFilesRequest;
const WorkflowSchedulerConfigurationInfo = models.WorkflowSchedulerConfigurationInfo;
const CreateTriggerTaskRequest = models.CreateTriggerTaskRequest;
const CreateWorkflowPermissionsRequest = models.CreateWorkflowPermissionsRequest;
const ListProjectRolesResponse = models.ListProjectRolesResponse;
const DependencyConfigPage = models.DependencyConfigPage;
const CodeStudioFileActionResult = models.CodeStudioFileActionResult;
const CreateResourceFileResponse = models.CreateResourceFileResponse;
const StopSQLScriptRunRequest = models.StopSQLScriptRunRequest;
const TaskInstanceExecutions = models.TaskInstanceExecutions;
const ListAlarmRulesResult = models.ListAlarmRulesResult;
const EnableProjectRequest = models.EnableProjectRequest;
const ListTaskInstanceExecutionsResponse = models.ListTaskInstanceExecutionsResponse;
const GetOpsTriggerWorkflowResponse = models.GetOpsTriggerWorkflowResponse;
const RerunTriggerWorkflowRunAsyncRequest = models.RerunTriggerWorkflowRunAsyncRequest;
const QualityRuleTemplatePage = models.QualityRuleTemplatePage;
const LineageProperty = models.LineageProperty;
const KillTriggerWorkflowRunsResponse = models.KillTriggerWorkflowRunsResponse;
const CreateTaskResponse = models.CreateTaskResponse;
const CreateWorkflowPermissionsResult = models.CreateWorkflowPermissionsResult;
const CreateCodePermissionsResponse = models.CreateCodePermissionsResponse;
const DisableProjectRequest = models.DisableProjectRequest;
const GetTriggerWorkflowResponse = models.GetTriggerWorkflowResponse;
const DependencyStrategyTask = models.DependencyStrategyTask;
const Task = models.Task;
const CreateTaskBaseAttribute = models.CreateTaskBaseAttribute;
const CreateDataReplenishmentPlan = models.CreateDataReplenishmentPlan;
const GetTableResponse = models.GetTableResponse;
const UpdateWorkflowFolderRequest = models.UpdateWorkflowFolderRequest;
const DeleteProjectMemberRequest = models.DeleteProjectMemberRequest;
const TriggerTaskDependDto = models.TriggerTaskDependDto;
const DeleteCodePermissionsResponse = models.DeleteCodePermissionsResponse;
const AuthorizePrivilegesResponse = models.AuthorizePrivilegesResponse;
const BatchOperationOpsDto = models.BatchOperationOpsDto;
const JobExecutionDto = models.JobExecutionDto;
const CreateTaskFolderResponse = models.CreateTaskFolderResponse;
const ListDownstreamTasksRequest = models.ListDownstreamTasksRequest;
const OutTaskParameter = models.OutTaskParameter;
const DeleteTriggerWorkflowResult = models.DeleteTriggerWorkflowResult;
const ListProcessLineagePage = models.ListProcessLineagePage;
const UpdateFolderResult = models.UpdateFolderResult;
const ListSchemaRequest = models.ListSchemaRequest;
const UpdateTriggerWorkflowPartiallyResponse = models.UpdateTriggerWorkflowPartiallyResponse;
const WorkflowDetail = models.WorkflowDetail;
const DeleteProjectMemberResponse = models.DeleteProjectMemberResponse;
const CreateWorkflowFolderRequest = models.CreateWorkflowFolderRequest;
const ListOpsTriggerWorkflowsRequest = models.ListOpsTriggerWorkflowsRequest;
const CreateResourceFolderRequest = models.CreateResourceFolderRequest;
const MetricData = models.MetricData;
const DeleteResourceFolderRequest = models.DeleteResourceFolderRequest;
const UpdateCodeFolderResponse = models.UpdateCodeFolderResponse;
const ListTaskFoldersRequest = models.ListTaskFoldersRequest;
const UpdateResourceFileRequest = models.UpdateResourceFileRequest;
const ListTriggerWorkflowRunsRequest = models.ListTriggerWorkflowRunsRequest;
const TaskExtParameter = models.TaskExtParameter;
const ColumnInfo = models.ColumnInfo;
const SubmitTaskResponse = models.SubmitTaskResponse;
const ResourceFileItem = models.ResourceFileItem;
const ListAlarmMessages = models.ListAlarmMessages;
const BindProject = models.BindProject;
const ResourceType = models.ResourceType;
const StartOpsTasksResponse = models.StartOpsTasksResponse;
const UpdateTaskResponse = models.UpdateTaskResponse;
const ResourceFolder = models.ResourceFolder;
const UpdateDataSourceRequest = models.UpdateDataSourceRequest;
const AssociateResourceGroupToProjectRequest = models.AssociateResourceGroupToProjectRequest;
const ListOpsWorkflowsRequest = models.ListOpsWorkflowsRequest;
const CreateWorkflowFolderResponse = models.CreateWorkflowFolderResponse;
const GetDataSourceRelatedTasksRequest = models.GetDataSourceRelatedTasksRequest;
const UpdateTriggerTaskBaseAttribute = models.UpdateTriggerTaskBaseAttribute;
const ResourceFolderPage = models.ResourceFolderPage;
const CreateTriggerWorkflowRunResult = models.CreateTriggerWorkflowRunResult;
const ListDownstreamTasksResponse = models.ListDownstreamTasksResponse;
const ListQualityRuleTemplatesRequest = models.ListQualityRuleTemplatesRequest;
const AuthorizePrivilegesRsp = models.AuthorizePrivilegesRsp;
const UpdateOpsTasksOwnerResponse = models.UpdateOpsTasksOwnerResponse;
const DescribeDataSourceAuthorityRequest = models.DescribeDataSourceAuthorityRequest;
const NotebookSessionInfo = models.NotebookSessionInfo;
const ListTaskFoldersResponse = models.ListTaskFoldersResponse;
const ListTenantRolesResponse = models.ListTenantRolesResponse;
const PageRoles = models.PageRoles;
const UpdateTaskBrief = models.UpdateTaskBrief;
const GetTaskInstanceResponse = models.GetTaskInstanceResponse;
const TechnicalMetadata = models.TechnicalMetadata;
const UpdateOpsTasksOwnerRequest = models.UpdateOpsTasksOwnerRequest;
const UpdateDataSourceResponse = models.UpdateDataSourceResponse;
const GetOpsAsyncJobRequest = models.GetOpsAsyncJobRequest;
const DeleteCodeFolderResponse = models.DeleteCodeFolderResponse;
const TriggerWorkflowInfo = models.TriggerWorkflowInfo;
const SubjectInfo = models.SubjectInfo;
const UpdateResourceFileResult = models.UpdateResourceFileResult;
const UpdateResourceFileResponse = models.UpdateResourceFileResponse;
const GetOpsAlarmRuleResponse = models.GetOpsAlarmRuleResponse;
const CreateTriggerTaskResponse = models.CreateTriggerTaskResponse;
const ResourceNumber = models.ResourceNumber;
const CreateProjectRequest = models.CreateProjectRequest;
const ListTriggerTaskVersions = models.ListTriggerTaskVersions;
const InstanceLog = models.InstanceLog;
const OpsAsyncResponse = models.OpsAsyncResponse;
const TriggerTaskBrief = models.TriggerTaskBrief;
const UpdateWorkflowRequest = models.UpdateWorkflowRequest;
const TrendData = models.TrendData;
const ListColumnLineageRequest = models.ListColumnLineageRequest;
const UpdateOpsAlarmRuleResponse = models.UpdateOpsAlarmRuleResponse;
const StartTasks = models.StartTasks;
const OpsAsyncJobDetail = models.OpsAsyncJobDetail;
const ListDownstreamOpsTasksResponse = models.ListDownstreamOpsTasksResponse;
const GetProjectRequest = models.GetProjectRequest;
const ListPermissionsRequest = models.ListPermissionsRequest;
const ListSQLScriptRunsRequest = models.ListSQLScriptRunsRequest;
const CreateDataBackfillPlanRequest = models.CreateDataBackfillPlanRequest;
const UpdateTriggerWorkflowRequest = models.UpdateTriggerWorkflowRequest;
const ListProjectRolesRequest = models.ListProjectRolesRequest;
const GetTaskInstanceRequest = models.GetTaskInstanceRequest;
const ListSQLFolderContentsRequest = models.ListSQLFolderContentsRequest;
const DeleteWorkflowPermission = models.DeleteWorkflowPermission;
const CreateTaskRequest = models.CreateTaskRequest;
const ListTriggerTasksResponse = models.ListTriggerTasksResponse;
const GetOpsTriggerWorkflowRequest = models.GetOpsTriggerWorkflowRequest;
const GetDataSourceRequest = models.GetDataSourceRequest;
const ListProjectMembersResponse = models.ListProjectMembersResponse;
const LineageResouce = models.LineageResouce;
const TaskVersionDetail = models.TaskVersionDetail;
const ListAlarmMessagesResponse = models.ListAlarmMessagesResponse;
const WorkflowFolderDetail = models.WorkflowFolderDetail;
const SubmitTriggerTaskRequest = models.SubmitTriggerTaskRequest;
const GetTaskFolderRequest = models.GetTaskFolderRequest;
const ListDatabaseRequest = models.ListDatabaseRequest;
const RegisterLineageRequest = models.RegisterLineageRequest;
const DeleteTaskRequest = models.DeleteTaskRequest;
const GetCodeFolderRequest = models.GetCodeFolderRequest;
const ListCatalogResponse = models.ListCatalogResponse;
const DeleteAlarmRuleResult = models.DeleteAlarmRuleResult;
const ListWorkflowFoldersResponse = models.ListWorkflowFoldersResponse;
const ResourceFolderDetail = models.ResourceFolderDetail;
const KillTaskInstancesAsyncResponse = models.KillTaskInstancesAsyncResponse;
const ListTaskVersions = models.ListTaskVersions;
const TaskFolderDetail = models.TaskFolderDetail;
const ListUpstreamTasksRequest = models.ListUpstreamTasksRequest;
const ReconciliationStrategyInfo = models.ReconciliationStrategyInfo;
const AddCalcEnginesToProjectResponse = models.AddCalcEnginesToProjectResponse;
const RevokePrivilegesRsp = models.RevokePrivilegesRsp;
const EventListener = models.EventListener;
const InstanceExecutionPhase = models.InstanceExecutionPhase;
const DatasourceRelationTaskInfo = models.DatasourceRelationTaskInfo;
const UpdateWorkflowResponse = models.UpdateWorkflowResponse;
const ListQualityRuleTemplatesResponse = models.ListQualityRuleTemplatesResponse;
const DeleteTriggerTaskResponse = models.DeleteTriggerTaskResponse;
const TriggerTaskVersion = models.TriggerTaskVersion;
const UpdateTriggerWorkflowPartiallyRequest = models.UpdateTriggerWorkflowPartiallyRequest;
const ListUpstreamOpsTasksRequest = models.ListUpstreamOpsTasksRequest;
const ListWorkflowPermissionsRequest = models.ListWorkflowPermissionsRequest;
const CreateTriggerWorkflowResult = models.CreateTriggerWorkflowResult;
const DeleteFolderResult = models.DeleteFolderResult;
const ListWorkflowsRequest = models.ListWorkflowsRequest;
const RevokePrivilegesResponse = models.RevokePrivilegesResponse;
const CodeFileConfig = models.CodeFileConfig;
const DeleteSQLScriptResponse = models.DeleteSQLScriptResponse;
const ListOpsTasksRequest = models.ListOpsTasksRequest;
const GetSQLScriptResponse = models.GetSQLScriptResponse;
const CreateCodeFileRequest = models.CreateCodeFileRequest;
const ChildDependencyConfigPage = models.ChildDependencyConfigPage;
const LineageRelation = models.LineageRelation;
const CreateTaskConfiguration = models.CreateTaskConfiguration;
const RerunTriggerWorkflowRunAsyncResponse = models.RerunTriggerWorkflowRunAsyncResponse;
const TriggerTaskDAGBrief = models.TriggerTaskDAGBrief;
const RerunTaskInstancesAsyncRequest = models.RerunTaskInstancesAsyncRequest;
const ListTaskInfo = models.ListTaskInfo;
const WorkflowSchedulerConfiguration = models.WorkflowSchedulerConfiguration;
const CreateDataBackfillPlanResponse = models.CreateDataBackfillPlanResponse;
const DataSourceInfo = models.DataSourceInfo;
const ListCodePermissionsResponse = models.ListCodePermissionsResponse;
const DeleteWorkflowPermissionsRequest = models.DeleteWorkflowPermissionsRequest;
const MonitorWhiteTask = models.MonitorWhiteTask;
const TriggerTaskLinkBrief = models.TriggerTaskLinkBrief;
const CreateWorkflowResponse = models.CreateWorkflowResponse;
const DeleteTaskResponse = models.DeleteTaskResponse;
const SchemaInfo = models.SchemaInfo;
const RevokeDataSourceAuthorizationRequest = models.RevokeDataSourceAuthorizationRequest;
const DissociateResourceGroupFromProjectResponse = models.DissociateResourceGroupFromProjectResponse;
const AlarmGroup = models.AlarmGroup;
const GrantMemberProjectRoleRequest = models.GrantMemberProjectRoleRequest;
const TriggerTask = models.TriggerTask;
const ListWorkflowInfo = models.ListWorkflowInfo;
const GetTriggerTaskVersionResponse = models.GetTriggerTaskVersionResponse;
const GetOpsAsyncJobResponse = models.GetOpsAsyncJobResponse;
const DeleteSQLFolderRequest = models.DeleteSQLFolderRequest;
const CreateTriggerWorkflowRequest = models.CreateTriggerWorkflowRequest;
const Project = models.Project;
const ListDatabasePage = models.ListDatabasePage;
const ListResourceGroupsRequest = models.ListResourceGroupsRequest;
const GetResourceFolderResponse = models.GetResourceFolderResponse;
const WorkflowFolder = models.WorkflowFolder;
const GetAlarmMessageResponse = models.GetAlarmMessageResponse;
const CreateTriggerWorkflowRunRequest = models.CreateTriggerWorkflowRunRequest;
const GetOpsTaskCodeRequest = models.GetOpsTaskCodeRequest;
const GetTaskFolderResponse = models.GetTaskFolderResponse;
const GetDataBackfillPlanRequest = models.GetDataBackfillPlanRequest;
const ListProcessLineageRequest = models.ListProcessLineageRequest;
const UpdateProjectResponse = models.UpdateProjectResponse;
const TriggerWorkflowBrief = models.TriggerWorkflowBrief;
const TriggerTaskBaseAttribute = models.TriggerTaskBaseAttribute;
const DeleteProjectRequest = models.DeleteProjectRequest;
const CreateResourceFileRequest = models.CreateResourceFileRequest;
const WorkflowPermission = models.WorkflowPermission;
const DeleteTaskFolderResponse = models.DeleteTaskFolderResponse;
const DeleteWorkflowPermissionsResponse = models.DeleteWorkflowPermissionsResponse;
const ListLineagePage = models.ListLineagePage;
const GetOpsAlarmRuleRequest = models.GetOpsAlarmRuleRequest;
const StopSQLScriptRunResponse = models.StopSQLScriptRunResponse;
const ListOpsTasksResponse = models.ListOpsTasksResponse;
const ListProjectsRequest = models.ListProjectsRequest;
const ListUpstreamTriggerTasksResponse = models.ListUpstreamTriggerTasksResponse;
const BizStateEnumInfoBrief = models.BizStateEnumInfoBrief;
const CreateProjectMemberResponse = models.CreateProjectMemberResponse;
const ListOpsAlarmRulesResponse = models.ListOpsAlarmRulesResponse;
const UpdateOpsAlarmRuleRequest = models.UpdateOpsAlarmRuleRequest;
const ParentDependencyConfigPage = models.ParentDependencyConfigPage;
const ListUpstreamOpsTasksResponse = models.ListUpstreamOpsTasksResponse;
const CreateTriggerWorkflowResponse = models.CreateTriggerWorkflowResponse;
const PauseOpsTasksAsyncResponse = models.PauseOpsTasksAsyncResponse;
const GetSQLFolderResponse = models.GetSQLFolderResponse;
const LineagePair = models.LineagePair;
const DeleteOpsAlarmRuleResponse = models.DeleteOpsAlarmRuleResponse;
const GetTaskRequest = models.GetTaskRequest;
const AlarmMessage = models.AlarmMessage;
const StartOpsTasksRequest = models.StartOpsTasksRequest;
const GetOpsTaskRequest = models.GetOpsTaskRequest;
const UpdateTaskResult = models.UpdateTaskResult;
const GetResourceFileRequest = models.GetResourceFileRequest;
const UpdateTasksOwner = models.UpdateTasksOwner;
const TaskInstancePage = models.TaskInstancePage;
const ListTriggerTasksRequest = models.ListTriggerTasksRequest;
const ListColumnLineageResponse = models.ListColumnLineageResponse;
const SqlCreateResult = models.SqlCreateResult;
const QualitySqlExpressionTable = models.QualitySqlExpressionTable;
const CreateAlarmRuleData = models.CreateAlarmRuleData;
const SQLScript = models.SQLScript;
const CreateResourceFileResult = models.CreateResourceFileResult;
const AuthorizeDataSourceResponse = models.AuthorizeDataSourceResponse;
const KVPair = models.KVPair;
const CreateDataSourceResponse = models.CreateDataSourceResponse;
const GetWorkflowFolderResponse = models.GetWorkflowFolderResponse;
const GetMyWorkflowMaxPermissionRequest = models.GetMyWorkflowMaxPermissionRequest;
const CodeStudioMaxPermission = models.CodeStudioMaxPermission;
const GetTriggerTaskVersionRequest = models.GetTriggerTaskVersionRequest;
const GetTriggerWorkflowRequest = models.GetTriggerWorkflowRequest;
const CodeFolderNode = models.CodeFolderNode;
const ResourceGroupMetrics = models.ResourceGroupMetrics;
const UpdateSQLScriptResponse = models.UpdateSQLScriptResponse;
const CreateFolderResult = models.CreateFolderResult;
const CreateTriggerTaskConfiguration = models.CreateTriggerTaskConfiguration;
const CreateWorkflowPermissionsResponse = models.CreateWorkflowPermissionsResponse;
const LineageNodeInfo = models.LineageNodeInfo;
const ResourcePrivilegeDetail = models.ResourcePrivilegeDetail;
const CatalogInfo = models.CatalogInfo;
const ListUpstreamTasksResponse = models.ListUpstreamTasksResponse;
const DeleteWorkflowFolderRequest = models.DeleteWorkflowFolderRequest;
const RunSQLScriptResponse = models.RunSQLScriptResponse;
const CreateProjectResult = models.CreateProjectResult;
const GetTableColumnsResponse = models.GetTableColumnsResponse;
const DeleteOpsAlarmRuleRequest = models.DeleteOpsAlarmRuleRequest;
const GetTaskCodeResponse = models.GetTaskCodeResponse;
const CreateCodePermissionsRequest = models.CreateCodePermissionsRequest;
const SQLContentActionResult = models.SQLContentActionResult;
const DeleteTriggerWorkflowRequest = models.DeleteTriggerWorkflowRequest;
const ProjectResult = models.ProjectResult;
const TriggerWorkflowTaskRunDetailBrief = models.TriggerWorkflowTaskRunDetailBrief;
const ListDataBackfillInstancesResponse = models.ListDataBackfillInstancesResponse;
const ModifyAlarmRuleResult = models.ModifyAlarmRuleResult;
const DisableProjectResponse = models.DisableProjectResponse;
const DeleteLineageRequest = models.DeleteLineageRequest;
const CreateOpsAlarmRuleRequest = models.CreateOpsAlarmRuleRequest;
const SetSuccessTaskInstancesAsyncResponse = models.SetSuccessTaskInstancesAsyncResponse;
const UpdateSQLScriptRequest = models.UpdateSQLScriptRequest;
const ParamInfo = models.ParamInfo;
const UpdateTriggerTaskPart = models.UpdateTriggerTaskPart;
const DeleteTriggerTaskRequest = models.DeleteTriggerTaskRequest;
const DeleteDataSourceResponse = models.DeleteDataSourceResponse;
const InTaskParameter = models.InTaskParameter;
const ListResourceFoldersRequest = models.ListResourceFoldersRequest;
const AuthorizeResult = models.AuthorizeResult;
const GetDataSourceResponse = models.GetDataSourceResponse;
const ListUpstreamTaskInstancesResponse = models.ListUpstreamTaskInstancesResponse;
const GetDataBackfillPlanResponse = models.GetDataBackfillPlanResponse;
const KillTaskInstancesAsyncRequest = models.KillTaskInstancesAsyncRequest;
const ListDataBackfillInstancesRequest = models.ListDataBackfillInstancesRequest;
const CodeStudioFolderActionResult = models.CodeStudioFolderActionResult;
const TriggerTaskVersionDetail = models.TriggerTaskVersionDetail;
const UpdateTriggerTaskPartiallyResponse = models.UpdateTriggerTaskPartiallyResponse;
const Filter = models.Filter;
const GetResourceGroupMetricsRequest = models.GetResourceGroupMetricsRequest;
const BusinessMetadata = models.BusinessMetadata;
const ListProjectsResponse = models.ListProjectsResponse;
const DeleteWorkflowResult = models.DeleteWorkflowResult;
const WorkflowMaxPermission = models.WorkflowMaxPermission;
const TaskSchedulerConfiguration = models.TaskSchedulerConfiguration;
const UpdateWorkflowFolderResponse = models.UpdateWorkflowFolderResponse;
const DeleteDataSourceRequest = models.DeleteDataSourceRequest;
const UpdateTaskBaseAttributePart = models.UpdateTaskBaseAttributePart;
const PrivilegeResource = models.PrivilegeResource;
const AlarmRuleData = models.AlarmRuleData;
const UpdateCodeFileResponse = models.UpdateCodeFileResponse;
const NotificationFatigue = models.NotificationFatigue;
const SQLFolderNode = models.SQLFolderNode;
const DatabaseInfo = models.DatabaseInfo;
const WorkflowTriggerConfig = models.WorkflowTriggerConfig;
const TaskVersion = models.TaskVersion;
const GetCodeFileResponse = models.GetCodeFileResponse;
const ListUpstreamTaskInstancesRequest = models.ListUpstreamTaskInstancesRequest;
const WorkflowFolderPage = models.WorkflowFolderPage;
const TaskCodeResult = models.TaskCodeResult;
const DataBackfillRange = models.DataBackfillRange;
const ListTriggerTaskVersionsResponse = models.ListTriggerTaskVersionsResponse;
const DeleteCodeFileResponse = models.DeleteCodeFileResponse;
const TaskOpsInfo = models.TaskOpsInfo;
const DeleteTaskFolderResult = models.DeleteTaskFolderResult;
const UpdateTriggerWorkflowPartially = models.UpdateTriggerWorkflowPartially;
const DeleteResourceGroupResponse = models.DeleteResourceGroupResponse;
const LineageProcess = models.LineageProcess;
const GetTaskInstanceLogResponse = models.GetTaskInstanceLogResponse;
const ListDownstreamTriggerTasksResponse = models.ListDownstreamTriggerTasksResponse;
const ListCodeFolderContentsResponse = models.ListCodeFolderContentsResponse;
const GetMyWorkflowMaxPermissionResponse = models.GetMyWorkflowMaxPermissionResponse;
const OrderField = models.OrderField;
const DependencyTaskBrief = models.DependencyTaskBrief;
const Page = models.Page;
const TriggerTaskConfiguration = models.TriggerTaskConfiguration;
const UpdateCodeFolderRequest = models.UpdateCodeFolderRequest;
const ResourceFilePage = models.ResourceFilePage;
const ResourceResult = models.ResourceResult;
const GetOpsWorkflowResponse = models.GetOpsWorkflowResponse;
const DataSourceStatus = models.DataSourceStatus;
const GetTableRequest = models.GetTableRequest;
const CreateResourceFolderResponse = models.CreateResourceFolderResponse;
const TaskFolderPage = models.TaskFolderPage;
const WorkflowPermissionPage = models.WorkflowPermissionPage;


/**
 * wedata client
 * @class
 */
class WedataClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("wedata.intl.tencentcloudapi.com", "2025-08-06", credential, region, profile);
    }
    
    /**
     * This API is used to create a task.
     * @param {CreateTaskRequest} req
     * @param {function(string, CreateTaskResponse):void} cb
     * @public
     */
    CreateTask(req, cb) {
        let resp = new CreateTaskResponse();
        this.request("CreateTask", req, resp, cb);
    }

    /**
     * Get Workflows under a Project by Project ID.
     * @param {ListOpsWorkflowsRequest} req
     * @param {function(string, ListOpsWorkflowsResponse):void} cb
     * @public
     */
    ListOpsWorkflows(req, cb) {
        let resp = new ListOpsWorkflowsResponse();
        this.request("ListOpsWorkflows", req, resp, cb);
    }

    /**
     * This API is used to search the alarm information list.
     * @param {ListAlarmMessagesRequest} req
     * @param {function(string, ListAlarmMessagesResponse):void} cb
     * @public
     */
    ListAlarmMessages(req, cb) {
        let resp = new ListAlarmMessagesResponse();
        this.request("ListAlarmMessages", req, resp, cb);
    }

    /**
     * This API is used to get the direct upstream of an instance.
     * @param {ListDownstreamTaskInstancesRequest} req
     * @param {function(string, ListDownstreamTaskInstancesResponse):void} cb
     * @public
     */
    ListDownstreamTaskInstances(req, cb) {
        let resp = new ListDownstreamTaskInstancesResponse();
        this.request("ListDownstreamTaskInstances", req, resp, cb);
    }

    /**
     * Query the associated task details of a data source.
     * @param {GetDataSourceRelatedTasksRequest} req
     * @param {function(string, GetDataSourceRelatedTasksResponse):void} cb
     * @public
     */
    GetDataSourceRelatedTasks(req, cb) {
        let resp = new GetDataSourceRelatedTasksResponse();
        this.request("GetDataSourceRelatedTasks", req, resp, cb);
    }

    /**
     * This API is used to terminate instances in batches asynchronously.
     * @param {KillTaskInstancesAsyncRequest} req
     * @param {function(string, KillTaskInstancesAsyncResponse):void} cb
     * @public
     */
    KillTaskInstancesAsync(req, cb) {
        let resp = new KillTaskInstancesAsyncResponse();
        this.request("KillTaskInstancesAsync", req, resp, cb);
    }

    /**
     * The project list in the tenant's global scope is irrelevant to the user's viewing range.
     * @param {ListProjectsRequest} req
     * @param {function(string, ListProjectsResponse):void} cb
     * @public
     */
    ListProjects(req, cb) {
        let resp = new ListProjectsResponse();
        this.request("ListProjects", req, resp, cb);
    }

    /**
     * Query Task Folder List.
     * @param {ListTaskFoldersRequest} req
     * @param {function(string, ListTaskFoldersResponse):void} cb
     * @public
     */
    ListTaskFolders(req, cb) {
        let resp = new ListTaskFoldersResponse();
        this.request("ListTaskFolders", req, resp, cb);
    }

    /**
     * Query workflow task details.
     * @param {GetOpsTriggerWorkflowRequest} req
     * @param {function(string, GetOpsTriggerWorkflowResponse):void} cb
     * @public
     */
    GetOpsTriggerWorkflow(req, cb) {
        let resp = new GetOpsTriggerWorkflowResponse();
        this.request("GetOpsTriggerWorkflow", req, resp, cb);
    }

    /**
     * Get the role list of all root accounts.
     * @param {ListTenantRolesRequest} req
     * @param {function(string, ListTenantRolesResponse):void} cb
     * @public
     */
    ListTenantRoles(req, cb) {
        let resp = new ListTenantRolesResponse();
        this.request("ListTenantRoles", req, resp, cb);
    }

    /**
     * Delete CodeStudio entity permission.
     * @param {DeleteCodePermissionsRequest} req
     * @param {function(string, DeleteCodePermissionsResponse):void} cb
     * @public
     */
    DeleteCodePermissions(req, cb) {
        let resp = new DeleteCodePermissionsResponse();
        this.request("DeleteCodePermissions", req, resp, cb);
    }

    /**
     * This API is used to retrieve task direct downstream details.
     * @param {ListDownstreamOpsTasksRequest} req
     * @param {function(string, ListDownstreamOpsTasksResponse):void} cb
     * @public
     */
    ListDownstreamOpsTasks(req, cb) {
        let resp = new ListDownstreamOpsTasksResponse();
        this.request("ListDownstreamOpsTasks", req, resp, cb);
    }

    /**
     * Submit a workflow scheduling task.
     * @param {SubmitTriggerTaskRequest} req
     * @param {function(string, SubmitTriggerTaskResponse):void} cb
     * @public
     */
    SubmitTriggerTask(req, cb) {
        let resp = new SubmitTriggerTaskResponse();
        this.request("SubmitTriggerTask", req, resp, cb);
    }

    /**
     * Delete a workflow scheduling task.
     * @param {DeleteTriggerTaskRequest} req
     * @param {function(string, DeleteTriggerTaskResponse):void} cb
     * @public
     */
    DeleteTriggerTask(req, cb) {
        let resp = new DeleteTriggerTaskResponse();
        this.request("DeleteTriggerTask", req, resp, cb);
    }

    /**
     * This API is used to view resource file list
     * @param {ListResourceFilesRequest} req
     * @param {function(string, ListResourceFilesResponse):void} cb
     * @public
     */
    ListResourceFiles(req, cb) {
        let resp = new ListResourceFilesResponse();
        this.request("ListResourceFiles", req, resp, cb);
    }

    /**
     * This API is used to retrieve task details.
     * @param {GetTriggerTaskRequest} req
     * @param {function(string, GetTriggerTaskResponse):void} cb
     * @public
     */
    GetTriggerTask(req, cb) {
        let resp = new GetTriggerTaskResponse();
        this.request("GetTriggerTask", req, resp, cb);
    }

    /**
     * Deletes a workflow
     * @param {DeleteTriggerWorkflowRequest} req
     * @param {function(string, DeleteTriggerWorkflowResponse):void} cb
     * @public
     */
    DeleteTriggerWorkflow(req, cb) {
        let resp = new DeleteTriggerWorkflowResponse();
        this.request("DeleteTriggerWorkflow", req, resp, cb);
    }

    /**
     * This API is used to obtain the task list based on the project id.
     * @param {ListOpsTasksRequest} req
     * @param {function(string, ListOpsTasksResponse):void} cb
     * @public
     */
    ListOpsTasks(req, cb) {
        let resp = new ListOpsTasksResponse();
        this.request("ListOpsTasks", req, resp, cb);
    }

    /**
     * Authorize a data source.
     * @param {AuthorizeDataSourceRequest} req
     * @param {function(string, AuthorizeDataSourceResponse):void} cb
     * @public
     */
    AuthorizeDataSource(req, cb) {
        let resp = new AuthorizeDataSourceResponse();
        this.request("AuthorizeDataSource", req, resp, cb);
    }

    /**
     * Check the current user's maximum permission scope for the workflow folder recursively.
     * @param {GetMyWorkflowMaxPermissionRequest} req
     * @param {function(string, GetMyWorkflowMaxPermissionResponse):void} cb
     * @public
     */
    GetMyWorkflowMaxPermission(req, cb) {
        let resp = new GetMyWorkflowMaxPermissionResponse();
        this.request("GetMyWorkflowMaxPermission", req, resp, cb);
    }

    /**
     * Update workflow (including basic info and workflow parameters).
     * @param {UpdateTriggerWorkflowPartiallyRequest} req
     * @param {function(string, UpdateTriggerWorkflowPartiallyResponse):void} cb
     * @public
     */
    UpdateTriggerWorkflowPartially(req, cb) {
        let resp = new UpdateTriggerWorkflowPartiallyResponse();
        this.request("UpdateTriggerWorkflowPartially", req, resp, cb);
    }

    /**
     * Retrieve asset catalog info.
     * @param {ListCatalogRequest} req
     * @param {function(string, ListCatalogResponse):void} cb
     * @public
     */
    ListCatalog(req, cb) {
        let resp = new ListCatalogResponse();
        this.request("ListCatalog", req, resp, cb);
    }

    /**
     * Retrieve supplementary plan details.
     * @param {GetDataBackfillPlanRequest} req
     * @param {function(string, GetDataBackfillPlanResponse):void} cb
     * @public
     */
    GetDataBackfillPlan(req, cb) {
        let resp = new GetDataBackfillPlanResponse();
        this.request("GetDataBackfillPlan", req, resp, cb);
    }

    /**
     * Query task execution details.
     * @param {GetTriggerTaskRunRequest} req
     * @param {function(string, GetTriggerTaskRunResponse):void} cb
     * @public
     */
    GetTriggerTaskRun(req, cb) {
        let resp = new GetTriggerTaskRunResponse();
        this.request("GetTriggerTaskRun", req, resp, cb);
    }

    /**
     * Deletes a workflow
     * @param {DeleteWorkflowRequest} req
     * @param {function(string, DeleteWorkflowResponse):void} cb
     * @public
     */
    DeleteWorkflow(req, cb) {
        let resp = new DeleteWorkflowResponse();
        this.request("DeleteWorkflow", req, resp, cb);
    }

    /**
     * This API is used to delete a data source.
     * @param {DeleteDataSourceRequest} req
     * @param {function(string, DeleteDataSourceResponse):void} cb
     * @public
     */
    DeleteDataSource(req, cb) {
        let resp = new DeleteDataSourceResponse();
        this.request("DeleteDataSource", req, resp, cb);
    }

    /**
     * This API is used to unbind the designated execution resource group from the project.
     * @param {DissociateResourceGroupFromProjectRequest} req
     * @param {function(string, DissociateResourceGroupFromProjectResponse):void} cb
     * @public
     */
    DissociateResourceGroupFromProject(req, cb) {
        let resp = new DissociateResourceGroupFromProjectResponse();
        this.request("DissociateResourceGroupFromProject", req, resp, cb);
    }

    /**
     * This API is used to obtain resource file details.
     * @param {GetResourceFileRequest} req
     * @param {function(string, GetResourceFileResponse):void} cb
     * @public
     */
    GetResourceFile(req, cb) {
        let resp = new GetResourceFileResponse();
        this.request("GetResourceFile", req, resp, cb);
    }

    /**
     * Update resource folder.
     * @param {UpdateResourceFolderRequest} req
     * @param {function(string, UpdateResourceFolderResponse):void} cb
     * @public
     */
    UpdateResourceFolder(req, cb) {
        let resp = new UpdateResourceFolderResponse();
        this.request("UpdateResourceFolder", req, resp, cb);
    }

    /**
     * This API is used to delete a SQL folder.
     * @param {DeleteSQLFolderRequest} req
     * @param {function(string, DeleteSQLFolderResponse):void} cb
     * @public
     */
    DeleteSQLFolder(req, cb) {
        let resp = new DeleteSQLFolderResponse();
        this.request("DeleteSQLFolder", req, resp, cb);
    }

    /**
     * Query folder details.
     * @param {GetWorkflowFolderRequest} req
     * @param {function(string, GetWorkflowFolderResponse):void} cb
     * @public
     */
    GetWorkflowFolder(req, cb) {
        let resp = new GetWorkflowFolderResponse();
        this.request("GetWorkflowFolder", req, resp, cb);
    }

    /**
     * This API is used to create a data source in the designated project.
     * @param {CreateDataSourceRequest} req
     * @param {function(string, CreateDataSourceResponse):void} cb
     * @public
     */
    CreateDataSource(req, cb) {
        let resp = new CreateDataSourceResponse();
        this.request("CreateDataSource", req, resp, cb);
    }

    /**
     * This API is used to configure data development permissions.
     * @param {CreateWorkflowPermissionsRequest} req
     * @param {function(string, CreateWorkflowPermissionsResponse):void} cb
     * @public
     */
    CreateWorkflowPermissions(req, cb) {
        let resp = new CreateWorkflowPermissionsResponse();
        this.request("CreateWorkflowPermissions", req, resp, cb);
    }

    /**
     * This API is used to delete a resource folder.
     * @param {DeleteResourceFolderRequest} req
     * @param {function(string, DeleteResourceFolderResponse):void} cb
     * @public
     */
    DeleteResourceFolder(req, cb) {
        let resp = new DeleteResourceFolderResponse();
        this.request("DeleteResourceFolder", req, resp, cb);
    }

    /**
     * This API is used to query pagination information of tasks.
     * @param {ListTasksRequest} req
     * @param {function(string, ListTasksResponse):void} cb
     * @public
     */
    ListTasks(req, cb) {
        let resp = new ListTasksResponse();
        this.request("ListTasks", req, resp, cb);
    }

    /**
     * This API is used to bind the designated execution resource group to the project.
     * @param {AssociateResourceGroupToProjectRequest} req
     * @param {function(string, AssociateResourceGroupToProjectResponse):void} cb
     * @public
     */
    AssociateResourceGroupToProject(req, cb) {
        let resp = new AssociateResourceGroupToProjectResponse();
        this.request("AssociateResourceGroupToProject", req, resp, cb);
    }

    /**
     * Delete project user roles.
     * @param {RemoveMemberProjectRoleRequest} req
     * @param {function(string, RemoveMemberProjectRoleResponse):void} cb
     * @public
     */
    RemoveMemberProjectRole(req, cb) {
        let resp = new RemoveMemberProjectRoleResponse();
        this.request("RemoveMemberProjectRole", req, resp, cb);
    }

    /**
     * Query Task Folder Details.
     * @param {GetTaskFolderRequest} req
     * @param {function(string, GetTaskFolderResponse):void} cb
     * @public
     */
    GetTaskFolder(req, cb) {
        let resp = new GetTaskFolderResponse();
        this.request("GetTaskFolder", req, resp, cb);
    }

    /**
     * This API is used to modify project basic information.
     * @param {UpdateProjectRequest} req
     * @param {function(string, UpdateProjectResponse):void} cb
     * @public
     */
    UpdateProject(req, cb) {
        let resp = new UpdateProjectResponse();
        this.request("UpdateProject", req, resp, cb);
    }

    /**
     * Query task execution details.
     * @param {UpdateOpsTriggerTasksOwnerRequest} req
     * @param {function(string, UpdateOpsTriggerTasksOwnerResponse):void} cb
     * @public
     */
    UpdateOpsTriggerTasksOwner(req, cb) {
        let resp = new UpdateOpsTriggerTasksOwnerResponse();
        this.request("UpdateOpsTriggerTasksOwner", req, resp, cb);
    }

    /**
     * This API is used to update a task.
     * @param {UpdateTaskPartiallyRequest} req
     * @param {function(string, UpdateTaskPartiallyResponse):void} cb
     * @public
     */
    UpdateTaskPartially(req, cb) {
        let resp = new UpdateTaskPartiallyResponse();
        this.request("UpdateTaskPartially", req, resp, cb);
    }

    /**
     * Enable a project.
     * @param {EnableProjectRequest} req
     * @param {function(string, EnableProjectResponse):void} cb
     * @public
     */
    EnableProject(req, cb) {
        let resp = new EnableProjectResponse();
        this.request("EnableProject", req, resp, cb);
    }

    /**
     * Task save version list.
     * @param {ListTriggerTaskVersionsRequest} req
     * @param {function(string, ListTriggerTaskVersionsResponse):void} cb
     * @public
     */
    ListTriggerTaskVersions(req, cb) {
        let resp = new ListTriggerTaskVersionsResponse();
        this.request("ListTriggerTaskVersions", req, resp, cb);
    }

    /**
     * This API is used to retrieve direct downstream task details.
     * @param {ListDownstreamTriggerTasksRequest} req
     * @param {function(string, ListDownstreamTriggerTasksResponse):void} cb
     * @public
     */
    ListDownstreamTriggerTasks(req, cb) {
        let resp = new ListDownstreamTriggerTasksResponse();
        this.request("ListDownstreamTriggerTasks", req, resp, cb);
    }

    /**
     * This API is used to update a task.
     * @param {UpdateTriggerTaskPartiallyRequest} req
     * @param {function(string, UpdateTriggerTaskPartiallyResponse):void} cb
     * @public
     */
    UpdateTriggerTaskPartially(req, cb) {
        let resp = new UpdateTriggerTaskPartiallyResponse();
        this.request("UpdateTriggerTaskPartially", req, resp, cb);
    }

    /**
     * This API is used to retrieve the direct upstream task.
     * @param {ListUpstreamTasksRequest} req
     * @param {function(string, ListUpstreamTasksResponse):void} cb
     * @public
     */
    ListUpstreamTasks(req, cb) {
        let resp = new ListUpstreamTasksResponse();
        this.request("ListUpstreamTasks", req, resp, cb);
    }

    /**
     * This API is used to retrieve all instances of a single backfill.
     * @param {ListDataBackfillInstancesRequest} req
     * @param {function(string, ListDataBackfillInstancesResponse):void} cb
     * @public
     */
    ListDataBackfillInstances(req, cb) {
        let resp = new ListDataBackfillInstancesResponse();
        this.request("ListDataBackfillInstances", req, resp, cb);
    }

    /**
     * This API is used to create a data backfill plan.
     * @param {CreateDataBackfillPlanRequest} req
     * @param {function(string, CreateDataBackfillPlanResponse):void} cb
     * @public
     */
    CreateDataBackfillPlan(req, cb) {
        let resp = new CreateDataBackfillPlanResponse();
        this.request("CreateDataBackfillPlan", req, resp, cb);
    }

    /**
     * Retrieve workflow scheduling task code.
     * @param {GetTriggerTaskCodeRequest} req
     * @param {function(string, GetTriggerTaskCodeResponse):void} cb
     * @public
     */
    GetTriggerTaskCode(req, cb) {
        let resp = new GetTriggerTaskCodeResponse();
        this.request("GetTriggerTaskCode", req, resp, cb);
    }

    /**
     * This API is used to run an SQL script.
     * @param {RunSQLScriptRequest} req
     * @param {function(string, RunSQLScriptResponse):void} cb
     * @public
     */
    RunSQLScript(req, cb) {
        let resp = new RunSQLScriptResponse();
        this.request("RunSQLScript", req, resp, cb);
    }

    /**
     * This API is used to query the list of workflows.
     * @param {ListWorkflowsRequest} req
     * @param {function(string, ListWorkflowsResponse):void} cb
     * @public
     */
    ListWorkflows(req, cb) {
        let resp = new ListWorkflowsResponse();
        this.request("ListWorkflows", req, resp, cb);
    }

    /**
     * This API is used to get project information.
     * @param {GetProjectRequest} req
     * @param {function(string, GetProjectResponse):void} cb
     * @public
     */
    GetProject(req, cb) {
        let resp = new GetProjectResponse();
        this.request("GetProject", req, resp, cb);
    }

    /**
     * This API is used to pause tasks in batches asynchronously.
     * @param {PauseOpsTasksAsyncRequest} req
     * @param {function(string, PauseOpsTasksAsyncResponse):void} cb
     * @public
     */
    PauseOpsTasksAsync(req, cb) {
        let resp = new PauseOpsTasksAsyncResponse();
        this.request("PauseOpsTasksAsync", req, resp, cb);
    }

    /**
     * This API is used to query async operation details in Ops center.
     * @param {GetOpsAsyncJobRequest} req
     * @param {function(string, GetOpsAsyncJobResponse):void} cb
     * @public
     */
    GetOpsAsyncJob(req, cb) {
        let resp = new GetOpsAsyncJobResponse();
        this.request("GetOpsAsyncJob", req, resp, cb);
    }

    /**
     * This API is used to modify the task owner.
     * @param {UpdateOpsTasksOwnerRequest} req
     * @param {function(string, UpdateOpsTasksOwnerResponse):void} cb
     * @public
     */
    UpdateOpsTasksOwner(req, cb) {
        let resp = new UpdateOpsTasksOwnerResponse();
        this.request("UpdateOpsTasksOwner", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of all fields in a table.
     * @param {GetTableColumnsRequest} req
     * @param {function(string, GetTableColumnsResponse):void} cb
     * @public
     */
    GetTableColumns(req, cb) {
        let resp = new GetTableColumnsResponse();
        this.request("GetTableColumns", req, resp, cb);
    }

    /**
     * This API is used to query the details of a scheduling instance.
     * @param {ListTaskInstanceExecutionsRequest} req
     * @param {function(string, ListTaskInstanceExecutionsResponse):void} cb
     * @public
     */
    ListTaskInstanceExecutions(req, cb) {
        let resp = new ListTaskInstanceExecutionsResponse();
        this.request("ListTaskInstanceExecutions", req, resp, cb);
    }

    /**
     * Get task version list.
     * @param {GetTriggerTaskVersionRequest} req
     * @param {function(string, GetTriggerTaskVersionResponse):void} cb
     * @public
     */
    GetTriggerTaskVersion(req, cb) {
        let resp = new GetTriggerTaskVersionResponse();
        this.request("GetTriggerTaskVersion", req, resp, cb);
    }

    /**
     * This API is used to delete a code file.
     * @param {DeleteCodeFileRequest} req
     * @param {function(string, DeleteCodeFileResponse):void} cb
     * @public
     */
    DeleteCodeFile(req, cb) {
        let resp = new DeleteCodeFileResponse();
        this.request("DeleteCodeFile", req, resp, cb);
    }

    /**
     * Disable a project.
     * @param {DisableProjectRequest} req
     * @param {function(string, DisableProjectResponse):void} cb
     * @public
     */
    DisableProject(req, cb) {
        let resp = new DisableProjectResponse();
        this.request("DisableProject", req, resp, cb);
    }

    /**
     * Associate a project cluster.
     * @param {AddCalcEnginesToProjectRequest} req
     * @param {function(string, AddCalcEnginesToProjectResponse):void} cb
     * @public
     */
    AddCalcEnginesToProject(req, cb) {
        let resp = new AddCalcEnginesToProjectResponse();
        this.request("AddCalcEnginesToProject", req, resp, cb);
    }

    /**
     * RegisterLineage
     * @param {RegisterLineageRequest} req
     * @param {function(string, RegisterLineageResponse):void} cb
     * @public
     */
    RegisterLineage(req, cb) {
        let resp = new RegisterLineageResponse();
        this.request("RegisterLineage", req, resp, cb);
    }

    /**
     * This API is used to obtain the user under the project with pagination return.
     * @param {ListProjectMembersRequest} req
     * @param {function(string, ListProjectMembersResponse):void} cb
     * @public
     */
    ListProjectMembers(req, cb) {
        let resp = new ListProjectMembersResponse();
        this.request("ListProjectMembers", req, resp, cb);
    }

    /**
     * This API is used to query alert rule information based on alarm rule id or name.
     * @param {GetOpsAlarmRuleRequest} req
     * @param {function(string, GetOpsAlarmRuleResponse):void} cb
     * @public
     */
    GetOpsAlarmRule(req, cb) {
        let resp = new GetOpsAlarmRuleResponse();
        this.request("GetOpsAlarmRule", req, resp, cb);
    }

    /**
     * This API is used to set alarm rules.
     * @param {CreateOpsAlarmRuleRequest} req
     * @param {function(string, CreateOpsAlarmRuleResponse):void} cb
     * @public
     */
    CreateOpsAlarmRule(req, cb) {
        let resp = new CreateOpsAlarmRuleResponse();
        this.request("CreateOpsAlarmRule", req, resp, cb);
    }

    /**
     * This API is used to destroy resources.
     * @param {DeleteResourceGroupRequest} req
     * @param {function(string, DeleteResourceGroupResponse):void} cb
     * @public
     */
    DeleteResourceGroup(req, cb) {
        let resp = new DeleteResourceGroupResponse();
        this.request("DeleteResourceGroup", req, resp, cb);
    }

    /**
     * Query workflow operation.
     * @param {ListTriggerWorkflowRunsRequest} req
     * @param {function(string, ListTriggerWorkflowRunsResponse):void} cb
     * @public
     */
    ListTriggerWorkflowRuns(req, cb) {
        let resp = new ListTriggerWorkflowRunsResponse();
        this.request("ListTriggerWorkflowRuns", req, resp, cb);
    }

    /**
     * This API is used to get the direct upstream of an instance.
     * @param {ListUpstreamTaskInstancesRequest} req
     * @param {function(string, ListUpstreamTaskInstancesResponse):void} cb
     * @public
     */
    ListUpstreamTaskInstances(req, cb) {
        let resp = new ListUpstreamTaskInstancesResponse();
        this.request("ListUpstreamTaskInstances", req, resp, cb);
    }

    /**
     * This API is used to retrieve task details.
     * @param {GetTaskRequest} req
     * @param {function(string, GetTaskResponse):void} cb
     * @public
     */
    GetTask(req, cb) {
        let resp = new GetTaskResponse();
        this.request("GetTask", req, resp, cb);
    }

    /**
     * This API is used to obtain instance lists.
     * @param {GetTaskInstanceLogRequest} req
     * @param {function(string, GetTaskInstanceLogResponse):void} cb
     * @public
     */
    GetTaskInstanceLog(req, cb) {
        let resp = new GetTaskInstanceLogResponse();
        this.request("GetTaskInstanceLog", req, resp, cb);
    }

    /**
     * This API is used to retrieve direct upstream tasks.
     * @param {ListUpstreamTriggerTasksRequest} req
     * @param {function(string, ListUpstreamTriggerTasksResponse):void} cb
     * @public
     */
    ListUpstreamTriggerTasks(req, cb) {
        let resp = new ListUpstreamTriggerTasksResponse();
        this.request("ListUpstreamTriggerTasks", req, resp, cb);
    }

    /**
     * This API is used to query the data source list in the designated project.
     * @param {ListDataSourcesRequest} req
     * @param {function(string, ListDataSourcesResponse):void} cb
     * @public
     */
    ListDataSources(req, cb) {
        let resp = new ListDataSourcesResponse();
        this.request("ListDataSources", req, resp, cb);
    }

    /**
     * This API is used to obtain task code.
     * @param {GetTaskCodeRequest} req
     * @param {function(string, GetTaskCodeResponse):void} cb
     * @public
     */
    GetTaskCode(req, cb) {
        let resp = new GetTaskCodeResponse();
        this.request("GetTaskCode", req, resp, cb);
    }

    /**
     * Query workflow authorization permissions.
     * @param {ListWorkflowPermissionsRequest} req
     * @param {function(string, ListWorkflowPermissionsResponse):void} cb
     * @public
     */
    ListWorkflowPermissions(req, cb) {
        let resp = new ListWorkflowPermissionsResponse();
        this.request("ListWorkflowPermissions", req, resp, cb);
    }

    /**
     * This API is used to obtain asset lineage information.
     * @param {ListProcessLineageRequest} req
     * @param {function(string, ListProcessLineageResponse):void} cb
     * @public
     */
    ListProcessLineage(req, cb) {
        let resp = new ListProcessLineageResponse();
        this.request("ListProcessLineage", req, resp, cb);
    }

    /**
     * View CodeStudio entity permission.
     * @param {ListCodePermissionsRequest} req
     * @param {function(string, ListCodePermissionsResponse):void} cb
     * @public
     */
    ListCodePermissions(req, cb) {
        let resp = new ListCodePermissionsResponse();
        this.request("ListCodePermissions", req, resp, cb);
    }

    /**
     * Query a resource file folder details.
     * @param {GetResourceFolderRequest} req
     * @param {function(string, GetResourceFolderResponse):void} cb
     * @public
     */
    GetResourceFolder(req, cb) {
        let resp = new GetResourceFolderResponse();
        this.request("GetResourceFolder", req, resp, cb);
    }

    /**
     * Create a project with cluster information upon creation.
     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        let resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }

    /**
     * This API is used to create a workflow folder.
     * @param {CreateWorkflowFolderRequest} req
     * @param {function(string, CreateWorkflowFolderResponse):void} cb
     * @public
     */
    CreateWorkflowFolder(req, cb) {
        let resp = new CreateWorkflowFolderResponse();
        this.request("CreateWorkflowFolder", req, resp, cb);
    }

    /**
     * This API is used to delete a project.
     * @param {DeleteProjectRequest} req
     * @param {function(string, DeleteProjectResponse):void} cb
     * @public
     */
    DeleteProject(req, cb) {
        let resp = new DeleteProjectResponse();
        this.request("DeleteProject", req, resp, cb);
    }

    /**
     * This API is used to stop running an SQL script.
     * @param {StopSQLScriptRunRequest} req
     * @param {function(string, StopSQLScriptRunResponse):void} cb
     * @public
     */
    StopSQLScriptRun(req, cb) {
        let resp = new StopSQLScriptRunResponse();
        this.request("StopSQLScriptRun", req, resp, cb);
    }

    /**
     * This API is used to rename an SQL folder.
     * @param {UpdateSQLFolderRequest} req
     * @param {function(string, UpdateSQLFolderResponse):void} cb
     * @public
     */
    UpdateSQLFolder(req, cb) {
        let resp = new UpdateSQLFolderResponse();
        this.request("UpdateSQLFolder", req, resp, cb);
    }

    /**
     * This API is used to save the script content for data exploration.
     * @param {UpdateSQLScriptRequest} req
     * @param {function(string, UpdateSQLScriptResponse):void} cb
     * @public
     */
    UpdateSQLScript(req, cb) {
        let resp = new UpdateSQLScriptResponse();
        this.request("UpdateSQLScript", req, resp, cb);
    }

    /**
     * RegisterLineage
     * @param {DeleteLineageRequest} req
     * @param {function(string, DeleteLineageResponse):void} cb
     * @public
     */
    DeleteLineage(req, cb) {
        let resp = new DeleteLineageResponse();
        this.request("DeleteLineage", req, resp, cb);
    }

    /**
     * This API is used to create a task.
     * @param {CreateTriggerTaskRequest} req
     * @param {function(string, CreateTriggerTaskResponse):void} cb
     * @public
     */
    CreateTriggerTask(req, cb) {
        let resp = new CreateTriggerTaskResponse();
        this.request("CreateTriggerTask", req, resp, cb);
    }

    /**
     * This API is used to create a resource file folder.
     * @param {CreateResourceFolderRequest} req
     * @param {function(string, CreateResourceFolderResponse):void} cb
     * @public
     */
    CreateResourceFolder(req, cb) {
        let resp = new CreateResourceFolderResponse();
        this.request("CreateResourceFolder", req, resp, cb);
    }

    /**
     * This API is used to update a workflow including basic information and workflow parameters.
     * @param {UpdateWorkflowRequest} req
     * @param {function(string, UpdateWorkflowResponse):void} cb
     * @public
     */
    UpdateWorkflow(req, cb) {
        let resp = new UpdateWorkflowResponse();
        this.request("UpdateWorkflow", req, resp, cb);
    }

    /**
     * This API is used to create an SQL folder
     * @param {CreateSQLFolderRequest} req
     * @param {function(string, CreateSQLFolderResponse):void} cb
     * @public
     */
    CreateSQLFolder(req, cb) {
        let resp = new CreateSQLFolderResponse();
        this.request("CreateSQLFolder", req, resp, cb);
    }

    /**
     * This API is used to rename a code folder.
     * @param {UpdateCodeFolderRequest} req
     * @param {function(string, UpdateCodeFolderResponse):void} cb
     * @public
     */
    UpdateCodeFolder(req, cb) {
        let resp = new UpdateCodeFolderResponse();
        this.request("UpdateCodeFolder", req, resp, cb);
    }

    /**
     * [Filter criteria] {template Name, query usage with Keyword fuzzy matching} {template type, 1. system template 2. custom template} {quality detection dimensions (QualityDims), 1. accuracy 2. uniqueness 3. integrity 4. consistency 5. timeliness 6. validity} [Sorting field] {citation sorting type, sort ASC or DESC based on the number of references}.
     * @param {ListQualityRuleTemplatesRequest} req
     * @param {function(string, ListQualityRuleTemplatesResponse):void} cb
     * @public
     */
    ListQualityRuleTemplates(req, cb) {
        let resp = new ListQualityRuleTemplatesResponse();
        this.request("ListQualityRuleTemplates", req, resp, cb);
    }

    /**
     * View the current user's maximum permission scope for the CodeStudio entity.
     * @param {GetMyCodeMaxPermissionRequest} req
     * @param {function(string, GetMyCodeMaxPermissionResponse):void} cb
     * @public
     */
    GetMyCodeMaxPermission(req, cb) {
        let resp = new GetMyCodeMaxPermissionResponse();
        this.request("GetMyCodeMaxPermission", req, resp, cb);
    }

    /**
     * This API is used to retrieve the content list of an sql folder
     * @param {ListSQLFolderContentsRequest} req
     * @param {function(string, ListSQLFolderContentsResponse):void} cb
     * @public
     */
    ListSQLFolderContents(req, cb) {
        let resp = new ListSQLFolderContentsResponse();
        this.request("ListSQLFolderContents", req, resp, cb);
    }

    /**
     * This API is used to create a code folder.
     * @param {CreateCodeFolderRequest} req
     * @param {function(string, CreateCodeFolderResponse):void} cb
     * @public
     */
    CreateCodeFolder(req, cb) {
        let resp = new CreateCodeFolderResponse();
        this.request("CreateCodeFolder", req, resp, cb);
    }

    /**
     * This API is used to add an SQL script.
     * @param {CreateSQLScriptRequest} req
     * @param {function(string, CreateSQLScriptResponse):void} cb
     * @public
     */
    CreateSQLScript(req, cb) {
        let resp = new CreateSQLScriptResponse();
        this.request("CreateSQLScript", req, resp, cb);
    }

    /**
     * This API is used to update a code file.
     * @param {UpdateCodeFileRequest} req
     * @param {function(string, UpdateCodeFileResponse):void} cb
     * @public
     */
    UpdateCodeFile(req, cb) {
        let resp = new UpdateCodeFileResponse();
        this.request("UpdateCodeFile", req, resp, cb);
    }

    /**
     * This API is used to query the resource file folder list.
     * @param {ListResourceFoldersRequest} req
     * @param {function(string, ListResourceFoldersResponse):void} cb
     * @public
     */
    ListResourceFolders(req, cb) {
        let resp = new ListResourceFoldersResponse();
        this.request("ListResourceFolders", req, resp, cb);
    }

    /**
     * This API is used to view specified execution resource group monitoring metrics.
     * @param {GetResourceGroupMetricsRequest} req
     * @param {function(string, GetResourceGroupMetricsResponse):void} cb
     * @public
     */
    GetResourceGroupMetrics(req, cb) {
        let resp = new GetResourceGroupMetricsResponse();
        this.request("GetResourceGroupMetrics", req, resp, cb);
    }

    /**
     * This API is used to list saved task versions.
     * @param {ListTaskVersionsRequest} req
     * @param {function(string, ListTaskVersionsResponse):void} cb
     * @public
     */
    ListTaskVersions(req, cb) {
        let resp = new ListTaskVersionsResponse();
        this.request("ListTaskVersions", req, resp, cb);
    }

    /**
     * Retrieve workflow information.
     * @param {GetTriggerWorkflowRequest} req
     * @param {function(string, GetTriggerWorkflowResponse):void} cb
     * @public
     */
    GetTriggerWorkflow(req, cb) {
        let resp = new GetTriggerWorkflowResponse();
        this.request("GetTriggerWorkflow", req, resp, cb);
    }

    /**
     * This API is used to asynchronously deactivate tasks in batch.
     * @param {StopOpsTasksAsyncRequest} req
     * @param {function(string, StopOpsTasksAsyncResponse):void} cb
     * @public
     */
    StopOpsTasksAsync(req, cb) {
        let resp = new StopOpsTasksAsyncResponse();
        this.request("StopOpsTasksAsync", req, resp, cb);
    }

    /**
     * This API is used to delete an orchestration space task.
     * @param {DeleteTaskRequest} req
     * @param {function(string, DeleteTaskResponse):void} cb
     * @public
     */
    DeleteTask(req, cb) {
        let resp = new DeleteTaskResponse();
        this.request("DeleteTask", req, resp, cb);
    }

    /**
     * This API is used to get folder content.
     * @param {ListCodeFolderContentsRequest} req
     * @param {function(string, ListCodeFolderContentsResponse):void} cb
     * @public
     */
    ListCodeFolderContents(req, cb) {
        let resp = new ListCodeFolderContentsResponse();
        this.request("ListCodeFolderContents", req, resp, cb);
    }

    /**
     * This API is used to create a resource file.
     * @param {CreateResourceFileRequest} req
     * @param {function(string, CreateResourceFileResponse):void} cb
     * @public
     */
    CreateResourceFile(req, cb) {
        let resp = new CreateResourceFileResponse();
        this.request("CreateResourceFile", req, resp, cb);
    }

    /**
     * This API is used to update a data source.
     * @param {UpdateDataSourceRequest} req
     * @param {function(string, UpdateDataSourceResponse):void} cb
     * @public
     */
    UpdateDataSource(req, cb) {
        let resp = new UpdateDataSourceResponse();
        this.request("UpdateDataSource", req, resp, cb);
    }

    /**
     * Authorization Revoked in Catalog mode.
     * @param {RevokePrivilegesRequest} req
     * @param {function(string, RevokePrivilegesResponse):void} cb
     * @public
     */
    RevokePrivileges(req, cb) {
        let resp = new RevokePrivilegesResponse();
        this.request("RevokePrivileges", req, resp, cb);
    }

    /**
     * This API is used to modify configurations or renew resources.
     * @param {UpdateResourceGroupRequest} req
     * @param {function(string, UpdateResourceGroupResponse):void} cb
     * @public
     */
    UpdateResourceGroup(req, cb) {
        let resp = new UpdateResourceGroupResponse();
        this.request("UpdateResourceGroup", req, resp, cb);
    }

    /**
     * This API is used to query the alarm rule list.
     * @param {ListOpsAlarmRulesRequest} req
     * @param {function(string, ListOpsAlarmRulesResponse):void} cb
     * @public
     */
    ListOpsAlarmRules(req, cb) {
        let resp = new ListOpsAlarmRulesResponse();
        this.request("ListOpsAlarmRules", req, resp, cb);
    }

    /**
     * This API is used to query the execution resource group list.
     * @param {ListResourceGroupsRequest} req
     * @param {function(string, ListResourceGroupsResponse):void} cb
     * @public
     */
    ListResourceGroups(req, cb) {
        let resp = new ListResourceGroupsResponse();
        this.request("ListResourceGroups", req, resp, cb);
    }

    /**
     * This API is used to obtain the asset database Schema information.
     * @param {ListSchemaRequest} req
     * @param {function(string, ListSchemaResponse):void} cb
     * @public
     */
    ListSchema(req, cb) {
        let resp = new ListSchemaResponse();
        this.request("ListSchema", req, resp, cb);
    }

    /**
     * Modifies alarm rules
     * @param {UpdateOpsAlarmRuleRequest} req
     * @param {function(string, UpdateOpsAlarmRuleResponse):void} cb
     * @public
     */
    UpdateOpsAlarmRule(req, cb) {
        let resp = new UpdateOpsAlarmRuleResponse();
        this.request("UpdateOpsAlarmRule", req, resp, cb);
    }

    /**
     * Modify project user roles.
     * @param {GrantMemberProjectRoleRequest} req
     * @param {function(string, GrantMemberProjectRoleResponse):void} cb
     * @public
     */
    GrantMemberProjectRole(req, cb) {
        let resp = new GrantMemberProjectRoleResponse();
        this.request("GrantMemberProjectRole", req, resp, cb);
    }

    /**
     * Retrieve sql folder details.
     * @param {GetSQLFolderRequest} req
     * @param {function(string, GetSQLFolderResponse):void} cb
     * @public
     */
    GetSQLFolder(req, cb) {
        let resp = new GetSQLFolderResponse();
        this.request("GetSQLFolder", req, resp, cb);
    }

    /**
     * Add project user role.
     * @param {CreateProjectMemberRequest} req
     * @param {function(string, CreateProjectMemberResponse):void} cb
     * @public
     */
    CreateProjectMember(req, cb) {
        let resp = new CreateProjectMemberResponse();
        this.request("CreateProjectMember", req, resp, cb);
    }

    /**
     * Configure CodeStudio entity permission.
     * @param {CreateCodePermissionsRequest} req
     * @param {function(string, CreateCodePermissionsResponse):void} cb
     * @public
     */
    CreateCodePermissions(req, cb) {
        let resp = new CreateCodePermissionsResponse();
        this.request("CreateCodePermissions", req, resp, cb);
    }

    /**
     * Query job pagination information.
     * @param {ListTriggerTasksRequest} req
     * @param {function(string, ListTriggerTasksResponse):void} cb
     * @public
     */
    ListTriggerTasks(req, cb) {
        let resp = new ListTriggerTasksResponse();
        this.request("ListTriggerTasks", req, resp, cb);
    }

    /**
     * This API is used to create a code file.
     * @param {CreateCodeFileRequest} req
     * @param {function(string, CreateCodeFileResponse):void} cb
     * @public
     */
    CreateCodeFile(req, cb) {
        let resp = new CreateCodeFileResponse();
        this.request("CreateCodeFile", req, resp, cb);
    }

    /**
     * Refresh workflow folder.
     * @param {UpdateWorkflowFolderRequest} req
     * @param {function(string, UpdateWorkflowFolderResponse):void} cb
     * @public
     */
    UpdateWorkflowFolder(req, cb) {
        let resp = new UpdateWorkflowFolderResponse();
        this.request("UpdateWorkflowFolder", req, resp, cb);
    }

    /**
     * This API is used to query the list of workflows.
     * @param {ListTriggerWorkflowsRequest} req
     * @param {function(string, ListTriggerWorkflowsResponse):void} cb
     * @public
     */
    ListTriggerWorkflows(req, cb) {
        let resp = new ListTriggerWorkflowsResponse();
        this.request("ListTriggerWorkflows", req, resp, cb);
    }

    /**
     * Delete a replenishment plan.
     * @param {DeleteDataBackfillPlanAsyncRequest} req
     * @param {function(string, DeleteDataBackfillPlanAsyncResponse):void} cb
     * @public
     */
    DeleteDataBackfillPlanAsync(req, cb) {
        let resp = new DeleteDataBackfillPlanAsyncResponse();
        this.request("DeleteDataBackfillPlanAsync", req, resp, cb);
    }

    /**
     * This API is used to update a task.
     * @param {UpdateTaskRequest} req
     * @param {function(string, UpdateTaskResponse):void} cb
     * @public
     */
    UpdateTask(req, cb) {
        let resp = new UpdateTaskResponse();
        this.request("UpdateTask", req, resp, cb);
    }

    /**
     * This API is used to update a resource file.
     * @param {UpdateResourceFileRequest} req
     * @param {function(string, UpdateResourceFileResponse):void} cb
     * @public
     */
    UpdateResourceFile(req, cb) {
        let resp = new UpdateResourceFileResponse();
        this.request("UpdateResourceFile", req, resp, cb);
    }

    /**
     * This API is used to delete project users.
     * @param {DeleteProjectMemberRequest} req
     * @param {function(string, DeleteProjectMemberResponse):void} cb
     * @public
     */
    DeleteProjectMember(req, cb) {
        let resp = new DeleteProjectMemberResponse();
        this.request("DeleteProjectMember", req, resp, cb);
    }

    /**
     * Get role list info.
     * @param {ListProjectRolesRequest} req
     * @param {function(string, ListProjectRolesResponse):void} cb
     * @public
     */
    ListProjectRoles(req, cb) {
        let resp = new ListProjectRolesResponse();
        this.request("ListProjectRoles", req, resp, cb);
    }

    /**
     * This API is used to create workflow.
     * @param {CreateWorkflowRequest} req
     * @param {function(string, CreateWorkflowResponse):void} cb
     * @public
     */
    CreateWorkflow(req, cb) {
        let resp = new CreateWorkflowResponse();
        this.request("CreateWorkflow", req, resp, cb);
    }

    /**
     * This API is used to retrieve task direct upstream.
     * @param {ListUpstreamOpsTasksRequest} req
     * @param {function(string, ListUpstreamOpsTasksResponse):void} cb
     * @public
     */
    ListUpstreamOpsTasks(req, cb) {
        let resp = new ListUpstreamOpsTasksResponse();
        this.request("ListUpstreamOpsTasks", req, resp, cb);
    }

    /**
     * View Data Source Permission.
     * @param {DescribeDataSourceAuthorityRequest} req
     * @param {function(string, DescribeDataSourceAuthorityResponse):void} cb
     * @public
     */
    DescribeDataSourceAuthority(req, cb) {
        let resp = new DescribeDataSourceAuthorityResponse();
        this.request("DescribeDataSourceAuthority", req, resp, cb);
    }

    /**
     * This API is used to query the list of workflows.
     * @param {ListOpsTriggerWorkflowsRequest} req
     * @param {function(string, ListOpsTriggerWorkflowsResponse):void} cb
     * @public
     */
    ListOpsTriggerWorkflows(req, cb) {
        let resp = new ListOpsTriggerWorkflowsResponse();
        this.request("ListOpsTriggerWorkflows", req, resp, cb);
    }

    /**
     * Delete a data development task folder.
     * @param {DeleteTaskFolderRequest} req
     * @param {function(string, DeleteTaskFolderResponse):void} cb
     * @public
     */
    DeleteTaskFolder(req, cb) {
        let resp = new DeleteTaskFolderResponse();
        this.request("DeleteTaskFolder", req, resp, cb);
    }

    /**
     * This API is used to obtain asset database info.
     * @param {ListDatabaseRequest} req
     * @param {function(string, ListDatabaseResponse):void} cb
     * @public
     */
    ListDatabase(req, cb) {
        let resp = new ListDatabaseResponse();
        this.request("ListDatabase", req, resp, cb);
    }

    /**
     * This API is used to query the details of a scheduling instance.
     * @param {GetTaskInstanceRequest} req
     * @param {function(string, GetTaskInstanceResponse):void} cb
     * @public
     */
    GetTaskInstance(req, cb) {
        let resp = new GetTaskInstanceResponse();
        this.request("GetTaskInstance", req, resp, cb);
    }

    /**
     * This API is used to query SQL run history.
     * @param {ListSQLScriptRunsRequest} req
     * @param {function(string, ListSQLScriptRunsResponse):void} cb
     * @public
     */
    ListSQLScriptRuns(req, cb) {
        let resp = new ListSQLScriptRunsResponse();
        this.request("ListSQLScriptRuns", req, resp, cb);
    }

    /**
     * This API is used to retrieve workflow information.
     * @param {GetWorkflowRequest} req
     * @param {function(string, GetWorkflowResponse):void} cb
     * @public
     */
    GetWorkflow(req, cb) {
        let resp = new GetWorkflowResponse();
        this.request("GetWorkflow", req, resp, cb);
    }

    /**
     * This API is used to obtain table field lineage information.
     * @param {ListColumnLineageRequest} req
     * @param {function(string, ListColumnLineageResponse):void} cb
     * @public
     */
    ListColumnLineage(req, cb) {
        let resp = new ListColumnLineageResponse();
        this.request("ListColumnLineage", req, resp, cb);
    }

    /**
     * This API is used to list task versions.
     * @param {GetTaskVersionRequest} req
     * @param {function(string, GetTaskVersionResponse):void} cb
     * @public
     */
    GetTaskVersion(req, cb) {
        let resp = new GetTaskVersionResponse();
        this.request("GetTaskVersion", req, resp, cb);
    }

    /**
     * This API is used to update a task.
     * @param {UpdateTriggerTaskRequest} req
     * @param {function(string, UpdateTriggerTaskResponse):void} cb
     * @public
     */
    UpdateTriggerTask(req, cb) {
        let resp = new UpdateTriggerTaskResponse();
        this.request("UpdateTriggerTask", req, resp, cb);
    }

    /**
     * Retrieve sql folder details.
     * @param {GetCodeFolderRequest} req
     * @param {function(string, GetCodeFolderResponse):void} cb
     * @public
     */
    GetCodeFolder(req, cb) {
        let resp = new GetCodeFolderResponse();
        this.request("GetCodeFolder", req, resp, cb);
    }

    /**
     * Start tasks asynchronously in batch.
     * @param {StartOpsTasksRequest} req
     * @param {function(string, StartOpsTasksResponse):void} cb
     * @public
     */
    StartOpsTasks(req, cb) {
        let resp = new StartOpsTasksResponse();
        this.request("StartOpsTasks", req, resp, cb);
    }

    /**
     * Deletes alarm rules
     * @param {DeleteOpsAlarmRuleRequest} req
     * @param {function(string, DeleteOpsAlarmRuleResponse):void} cb
     * @public
     */
    DeleteOpsAlarmRule(req, cb) {
        let resp = new DeleteOpsAlarmRuleResponse();
        this.request("DeleteOpsAlarmRule", req, resp, cb);
    }

    /**
     * This API is used to query alert information details.
     * @param {GetAlarmMessageRequest} req
     * @param {function(string, GetAlarmMessageResponse):void} cb
     * @public
     */
    GetAlarmMessage(req, cb) {
        let resp = new GetAlarmMessageResponse();
        this.request("GetAlarmMessage", req, resp, cb);
    }

    /**
     * This API is used to batch rerun instances asynchronously.
     * @param {RerunTaskInstancesAsyncRequest} req
     * @param {function(string, RerunTaskInstancesAsyncResponse):void} cb
     * @public
     */
    RerunTaskInstancesAsync(req, cb) {
        let resp = new RerunTaskInstancesAsyncResponse();
        this.request("RerunTaskInstancesAsync", req, resp, cb);
    }

    /**
     * This API is used to update workflow, including basic information and workflow parameters.
     * @param {UpdateTriggerWorkflowRequest} req
     * @param {function(string, UpdateTriggerWorkflowResponse):void} cb
     * @public
     */
    UpdateTriggerWorkflow(req, cb) {
        let resp = new UpdateTriggerWorkflowResponse();
        this.request("UpdateTriggerWorkflow", req, resp, cb);
    }

    /**
     * This API is used to obtain instance lists.
     * @param {ListTaskInstancesRequest} req
     * @param {function(string, ListTaskInstancesResponse):void} cb
     * @public
     */
    ListTaskInstances(req, cb) {
        let resp = new ListTaskInstancesResponse();
        this.request("ListTaskInstances", req, resp, cb);
    }

    /**
     * This API is used to query script details.
     * @param {GetSQLScriptRequest} req
     * @param {function(string, GetSQLScriptResponse):void} cb
     * @public
     */
    GetSQLScript(req, cb) {
        let resp = new GetSQLScriptResponse();
        this.request("GetSQLScript", req, resp, cb);
    }

    /**
     * Run workflow under workflow scheduling model.
     * @param {CreateTriggerWorkflowRunRequest} req
     * @param {function(string, CreateTriggerWorkflowRunResponse):void} cb
     * @public
     */
    CreateTriggerWorkflowRun(req, cb) {
        let resp = new CreateTriggerWorkflowRunResponse();
        this.request("CreateTriggerWorkflowRun", req, resp, cb);
    }

    /**
     * Terminate running.
     * @param {KillTriggerWorkflowRunsRequest} req
     * @param {function(string, KillTriggerWorkflowRunsResponse):void} cb
     * @public
     */
    KillTriggerWorkflowRuns(req, cb) {
        let resp = new KillTriggerWorkflowRunsResponse();
        this.request("KillTriggerWorkflowRuns", req, resp, cb);
    }

    /**
     * This API is used to obtain asset lineage information.
     * @param {ListLineageRequest} req
     * @param {function(string, ListLineageResponse):void} cb
     * @public
     */
    ListLineage(req, cb) {
        let resp = new ListLineageResponse();
        this.request("ListLineage", req, resp, cb);
    }

    /**
     * Obtaining Task Details
     * @param {GetOpsTaskRequest} req
     * @param {function(string, GetOpsTaskResponse):void} cb
     * @public
     */
    GetOpsTask(req, cb) {
        let resp = new GetOpsTaskResponse();
        this.request("GetOpsTask", req, resp, cb);
    }

    /**
     * This API is used to batch configure instances asynchronously.
     * @param {SetSuccessTaskInstancesAsyncRequest} req
     * @param {function(string, SetSuccessTaskInstancesAsyncResponse):void} cb
     * @public
     */
    SetSuccessTaskInstancesAsync(req, cb) {
        let resp = new SetSuccessTaskInstancesAsyncResponse();
        this.request("SetSuccessTaskInstancesAsync", req, resp, cb);
    }

    /**
     * Rerun an operation.
     * @param {RerunTriggerWorkflowRunAsyncRequest} req
     * @param {function(string, RerunTriggerWorkflowRunAsyncResponse):void} cb
     * @public
     */
    RerunTriggerWorkflowRunAsync(req, cb) {
        let resp = new RerunTriggerWorkflowRunAsyncResponse();
        this.request("RerunTriggerWorkflowRunAsync", req, resp, cb);
    }

    /**
     * This API is used to obtain workflow scheduling details based on the workflow id.
     * @param {GetOpsWorkflowRequest} req
     * @param {function(string, GetOpsWorkflowResponse):void} cb
     * @public
     */
    GetOpsWorkflow(req, cb) {
        let resp = new GetOpsWorkflowResponse();
        this.request("GetOpsWorkflow", req, resp, cb);
    }

    /**
     * This API is used to retrieve task code.
     * @param {GetOpsTaskCodeRequest} req
     * @param {function(string, GetOpsTaskCodeResponse):void} cb
     * @public
     */
    GetOpsTaskCode(req, cb) {
        let resp = new GetOpsTaskCodeResponse();
        this.request("GetOpsTaskCode", req, resp, cb);
    }

    /**
     * Create a folder.
     * @param {CreateTaskFolderRequest} req
     * @param {function(string, CreateTaskFolderResponse):void} cb
     * @public
     */
    CreateTaskFolder(req, cb) {
        let resp = new CreateTaskFolderResponse();
        this.request("CreateTaskFolder", req, resp, cb);
    }

    /**
     * This API is used to query the folder list.
     * @param {ListWorkflowFoldersRequest} req
     * @param {function(string, ListWorkflowFoldersResponse):void} cb
     * @public
     */
    ListWorkflowFolders(req, cb) {
        let resp = new ListWorkflowFoldersResponse();
        this.request("ListWorkflowFolders", req, resp, cb);
    }

    /**
     * Query workflow task details.
     * @param {GetTriggerWorkflowRunRequest} req
     * @param {function(string, GetTriggerWorkflowRunResponse):void} cb
     * @public
     */
    GetTriggerWorkflowRun(req, cb) {
        let resp = new GetTriggerWorkflowRunResponse();
        this.request("GetTriggerWorkflowRun", req, resp, cb);
    }

    /**
     * This API is used to submit a task.
     * @param {SubmitTaskRequest} req
     * @param {function(string, SubmitTaskResponse):void} cb
     * @public
     */
    SubmitTask(req, cb) {
        let resp = new SubmitTaskResponse();
        this.request("SubmitTask", req, resp, cb);
    }

    /**
     * Revoke data source permission.
     * @param {RevokeDataSourceAuthorizationRequest} req
     * @param {function(string, RevokeDataSourceAuthorizationResponse):void} cb
     * @public
     */
    RevokeDataSourceAuthorization(req, cb) {
        let resp = new RevokeDataSourceAuthorizationResponse();
        this.request("RevokeDataSourceAuthorization", req, resp, cb);
    }

    /**
     * Update a task folder.
     * @param {UpdateTaskFolderRequest} req
     * @param {function(string, UpdateTaskFolderResponse):void} cb
     * @public
     */
    UpdateTaskFolder(req, cb) {
        let resp = new UpdateTaskFolderResponse();
        this.request("UpdateTaskFolder", req, resp, cb);
    }

    /**
     * This API is used to delete folders in data exploration.
     * @param {DeleteCodeFolderRequest} req
     * @param {function(string, DeleteCodeFolderResponse):void} cb
     * @public
     */
    DeleteCodeFolder(req, cb) {
        let resp = new DeleteCodeFolderResponse();
        this.request("DeleteCodeFolder", req, resp, cb);
    }

    /**
     * This API is used to delete workflow folder permissions.
     * @param {DeleteWorkflowPermissionsRequest} req
     * @param {function(string, DeleteWorkflowPermissionsResponse):void} cb
     * @public
     */
    DeleteWorkflowPermissions(req, cb) {
        let resp = new DeleteWorkflowPermissionsResponse();
        this.request("DeleteWorkflowPermissions", req, resp, cb);
    }

    /**
     * This API is used to purchase resources.
     * @param {CreateResourceGroupRequest} req
     * @param {function(string, CreateResourceGroupResponse):void} cb
     * @public
     */
    CreateResourceGroup(req, cb) {
        let resp = new CreateResourceGroupResponse();
        this.request("CreateResourceGroup", req, resp, cb);
    }

    /**
     * Authorization in Catalog mode.
     * @param {AuthorizePrivilegesRequest} req
     * @param {function(string, AuthorizePrivilegesResponse):void} cb
     * @public
     */
    AuthorizePrivileges(req, cb) {
        let resp = new AuthorizePrivilegesResponse();
        this.request("AuthorizePrivileges", req, resp, cb);
    }

    /**
     * This API is used to delete a resource file.
     * @param {DeleteResourceFileRequest} req
     * @param {function(string, DeleteResourceFileResponse):void} cb
     * @public
     */
    DeleteResourceFile(req, cb) {
        let resp = new DeleteResourceFileResponse();
        this.request("DeleteResourceFile", req, resp, cb);
    }

    /**
     * This API is used to delete a data development folder
     * @param {DeleteWorkflowFolderRequest} req
     * @param {function(string, DeleteWorkflowFolderResponse):void} cb
     * @public
     */
    DeleteWorkflowFolder(req, cb) {
        let resp = new DeleteWorkflowFolderResponse();
        this.request("DeleteWorkflowFolder", req, resp, cb);
    }

    /**
     * This API is used to obtain table information of assets.
     * @param {ListTableRequest} req
     * @param {function(string, ListTableResponse):void} cb
     * @public
     */
    ListTable(req, cb) {
        let resp = new ListTableResponse();
        this.request("ListTable", req, resp, cb);
    }

    /**
     * This API is used to view code file details.
     * @param {GetCodeFileRequest} req
     * @param {function(string, GetCodeFileResponse):void} cb
     * @public
     */
    GetCodeFile(req, cb) {
        let resp = new GetCodeFileResponse();
        this.request("GetCodeFile", req, resp, cb);
    }

    /**
     * This API is used to delete an SQL script.
     * @param {DeleteSQLScriptRequest} req
     * @param {function(string, DeleteSQLScriptResponse):void} cb
     * @public
     */
    DeleteSQLScript(req, cb) {
        let resp = new DeleteSQLScriptResponse();
        this.request("DeleteSQLScript", req, resp, cb);
    }

    /**
     * create workflow.
     * @param {CreateTriggerWorkflowRequest} req
     * @param {function(string, CreateTriggerWorkflowResponse):void} cb
     * @public
     */
    CreateTriggerWorkflow(req, cb) {
        let resp = new CreateTriggerWorkflowResponse();
        this.request("CreateTriggerWorkflow", req, resp, cb);
    }

    /**
     * Retrieve authorizable permission details.
     * @param {ListPermissionsRequest} req
     * @param {function(string, ListPermissionsResponse):void} cb
     * @public
     */
    ListPermissions(req, cb) {
        let resp = new ListPermissionsResponse();
        this.request("ListPermissions", req, resp, cb);
    }

    /**
     * This API is used to view detailed information of the specified data source.
     * @param {GetDataSourceRequest} req
     * @param {function(string, GetDataSourceResponse):void} cb
     * @public
     */
    GetDataSource(req, cb) {
        let resp = new GetDataSourceResponse();
        this.request("GetDataSource", req, resp, cb);
    }

    /**
     * Query table details.
     * @param {GetTableRequest} req
     * @param {function(string, GetTableResponse):void} cb
     * @public
     */
    GetTable(req, cb) {
        let resp = new GetTableResponse();
        this.request("GetTable", req, resp, cb);
    }

    /**
     * This API is used to retrieve the direct downstream task details.
     * @param {ListDownstreamTasksRequest} req
     * @param {function(string, ListDownstreamTasksResponse):void} cb
     * @public
     */
    ListDownstreamTasks(req, cb) {
        let resp = new ListDownstreamTasksResponse();
        this.request("ListDownstreamTasks", req, resp, cb);
    }


}
module.exports = WedataClient;
