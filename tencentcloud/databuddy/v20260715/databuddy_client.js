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
const CreateWorkspaceRoleResponse = models.CreateWorkspaceRoleResponse;
const AddWorkspaceGroupsRequest = models.AddWorkspaceGroupsRequest;
const GetFolderRsp = models.GetFolderRsp;
const DependOnBrief = models.DependOnBrief;
const ListConsoleGroupUsersRequest = models.ListConsoleGroupUsersRequest;
const DeleteFolderResponse = models.DeleteFolderResponse;
const FolderLocator = models.FolderLocator;
const ListWorkspaceGroupsResponse = models.ListWorkspaceGroupsResponse;
const ListConsoleGroupsRequest = models.ListConsoleGroupsRequest;
const InnerWorkflowTaskRunListOption = models.InnerWorkflowTaskRunListOption;
const RemoveWorkspaceGroupsResponse = models.RemoveWorkspaceGroupsResponse;
const PermissionDetail = models.PermissionDetail;
const UpdateConsoleUsersResponse = models.UpdateConsoleUsersResponse;
const ListWorkflowTaskRunsRequest = models.ListWorkflowTaskRunsRequest;
const WorkspaceUserInfo = models.WorkspaceUserInfo;
const Workflow = models.Workflow;
const TaskRetryStrategy = models.TaskRetryStrategy;
const FileStorage = models.FileStorage;
const ScheduledTimeConfig = models.ScheduledTimeConfig;
const Catalog = models.Catalog;
const WorkflowRun = models.WorkflowRun;
const FetchOption = models.FetchOption;
const DeleteWorkflowResponse = models.DeleteWorkflowResponse;
const GetWorkspaceResponse = models.GetWorkspaceResponse;
const ListConsoleUsersResponse = models.ListConsoleUsersResponse;
const RemoveConsoleUsersResponse = models.RemoveConsoleUsersResponse;
const InnerWorkflowTaskBrief = models.InnerWorkflowTaskBrief;
const MonitorMetricBrief = models.MonitorMetricBrief;
const ListCatalogsResponse = models.ListCatalogsResponse;
const UpdateWorkspaceResponse = models.UpdateWorkspaceResponse;
const PlatformStatusRsp = models.PlatformStatusRsp;
const AddWorkspaceUsersResponse = models.AddWorkspaceUsersResponse;
const InnerWorkflowTaskRunIteration = models.InnerWorkflowTaskRunIteration;
const CreateCatalogRequest = models.CreateCatalogRequest;
const SparseCheckoutConfig = models.SparseCheckoutConfig;
const StartComputeRsp = models.StartComputeRsp;
const DeleteWorkflowRequest = models.DeleteWorkflowRequest;
const WorkspaceInfo = models.WorkspaceInfo;
const CreateSchemaRsp = models.CreateSchemaRsp;
const GetWorkspaceRequest = models.GetWorkspaceRequest;
const ListConsoleGroupsRsp = models.ListConsoleGroupsRsp;
const AlarmBrief = models.AlarmBrief;
const CreateWorkspaceRsp = models.CreateWorkspaceRsp;
const RerunWorkflowRunResponse = models.RerunWorkflowRunResponse;
const ListWorkspacesRequest = models.ListWorkspacesRequest;
const WorkflowTaskNodeBrief = models.WorkflowTaskNodeBrief;
const UpdateWorkspaceRsp = models.UpdateWorkspaceRsp;
const CreateWorkspaceRoleRequest = models.CreateWorkspaceRoleRequest;
const ListSchemasResponse = models.ListSchemasResponse;
const CreateWorkflowRequest = models.CreateWorkflowRequest;
const ListFilesRequest = models.ListFilesRequest;
const WorkflowRunBrief = models.WorkflowRunBrief;
const WorkflowTriggerAdvancedConfiguration = models.WorkflowTriggerAdvancedConfiguration;
const UpdateWorkspaceRoleResult = models.UpdateWorkspaceRoleResult;
const AsyncActionRsp = models.AsyncActionRsp;
const CreateFileResponse = models.CreateFileResponse;
const TaskSchedulingParameterBrief = models.TaskSchedulingParameterBrief;
const UpdateWorkflowRequest = models.UpdateWorkflowRequest;
const ListWorkspaceGroupsRsp = models.ListWorkspaceGroupsRsp;
const KVPair = models.KVPair;
const TaskRunConditionRule = models.TaskRunConditionRule;
const ResourceGroupInfo = models.ResourceGroupInfo;
const UnbindWorkflowBundleResponse = models.UnbindWorkflowBundleResponse;
const UpdateConsoleGroupRsp = models.UpdateConsoleGroupRsp;
const UnbindWorkflowBundleRsp = models.UnbindWorkflowBundleRsp;
const CreateFolderRequest = models.CreateFolderRequest;
const KillWorkflowRunResponse = models.KillWorkflowRunResponse;
const ListSchemasRsp = models.ListSchemasRsp;
const DeleteFolderRequest = models.DeleteFolderRequest;
const CommonTagInfo = models.CommonTagInfo;
const AddConsoleUsersRsp = models.AddConsoleUsersRsp;
const RemoveConsoleUsersRequest = models.RemoveConsoleUsersRequest;
const DeleteConsoleGroupsRsp = models.DeleteConsoleGroupsRsp;
const ListWorkflowRunsRequest = models.ListWorkflowRunsRequest;
const WorkflowTriggerConfiguration = models.WorkflowTriggerConfiguration;
const GetWorkflowTaskRunResponse = models.GetWorkflowTaskRunResponse;
const DeleteWorkspaceResponse = models.DeleteWorkspaceResponse;
const GetFileRequest = models.GetFileRequest;
const WorkflowBaseInfo = models.WorkflowBaseInfo;
const TaskType = models.TaskType;
const TaskTypeNotebookExt = models.TaskTypeNotebookExt;
const GetFolderResponse = models.GetFolderResponse;
const DeleteCatalogRsp = models.DeleteCatalogRsp;
const CreateWorkflowRsp = models.CreateWorkflowRsp;
const GetFileResponse = models.GetFileResponse;
const AsyncOperation = models.AsyncOperation;
const UpdateWorkspaceRequest = models.UpdateWorkspaceRequest;
const ListFilesRsp = models.ListFilesRsp;
const RoleMetaData = models.RoleMetaData;
const GetWorkflowRunRsp = models.GetWorkflowRunRsp;
const GetCatalogRsp = models.GetCatalogRsp;
const DeleteWorkspaceRoleResponse = models.DeleteWorkspaceRoleResponse;
const DeleteSchemaResponse = models.DeleteSchemaResponse;
const ListConsoleGroupUsersResponse = models.ListConsoleGroupUsersResponse;
const ListWorkflowTaskRunsRsp = models.ListWorkflowTaskRunsRsp;
const ScheduleBizEnumBrief = models.ScheduleBizEnumBrief;
const AddWorkspaceGroupsResponse = models.AddWorkspaceGroupsResponse;
const CreateCatalogRsp = models.CreateCatalogRsp;
const GetWorkspaceRsp = models.GetWorkspaceRsp;
const TagValueInfo = models.TagValueInfo;
const CreateSchemaResponse = models.CreateSchemaResponse;
const CreateFolderResponse = models.CreateFolderResponse;
const InnerWorkflowTaskRunIterationBrief = models.InnerWorkflowTaskRunIterationBrief;
const CreateConsoleGroupRequest = models.CreateConsoleGroupRequest;
const RemoveConsoleUsersRsp = models.RemoveConsoleUsersRsp;
const ListWorkflowsResponse = models.ListWorkflowsResponse;
const ListWorkflowsRsp = models.ListWorkflowsRsp;
const UpdateFolderResponse = models.UpdateFolderResponse;
const RerunWorkflowRunRequest = models.RerunWorkflowRunRequest;
const DeleteWorkspaceRequest = models.DeleteWorkspaceRequest;
const StartComputeResponse = models.StartComputeResponse;
const LabelBrief = models.LabelBrief;
const DeleteWorkspaceRoleRequest = models.DeleteWorkspaceRoleRequest;
const CreateSchemaRequest = models.CreateSchemaRequest;
const AddConsoleUsersRequest = models.AddConsoleUsersRequest;
const CreateConsoleGroupRsp = models.CreateConsoleGroupRsp;
const WorkflowTaskRun = models.WorkflowTaskRun;
const DeleteCatalogResponse = models.DeleteCatalogResponse;
const DeleteWorkspaceRsp = models.DeleteWorkspaceRsp;
const WorkflowBaseInfoDetail = models.WorkflowBaseInfoDetail;
const WorkflowBrief = models.WorkflowBrief;
const StopComputeRequest = models.StopComputeRequest;
const KillWorkflowRunRequest = models.KillWorkflowRunRequest;
const GetCatalogRequest = models.GetCatalogRequest;
const ListWorkflowTaskRunsResponse = models.ListWorkflowTaskRunsResponse;
const AddConsoleUsersResponse = models.AddConsoleUsersResponse;
const ListConsoleUsersRsp = models.ListConsoleUsersRsp;
const FileMeta = models.FileMeta;
const MetaOwner = models.MetaOwner;
const UnbindWorkflowBundleRequest = models.UnbindWorkflowBundleRequest;
const ConsoleRoleInfo = models.ConsoleRoleInfo;
const ConsoleGroupUserInfo = models.ConsoleGroupUserInfo;
const DeleteFileResult = models.DeleteFileResult;
const RunActionBrief = models.RunActionBrief;
const FileOutputConf = models.FileOutputConf;
const RunWorkflowRequest = models.RunWorkflowRequest;
const ListWorkflowRunsRsp = models.ListWorkflowRunsRsp;
const UpdateConsoleGroupRequest = models.UpdateConsoleGroupRequest;
const ConsoleGroupInfo = models.ConsoleGroupInfo;
const UpdateWorkspaceRoleResponse = models.UpdateWorkspaceRoleResponse;
const ListConsoleRolesRsp = models.ListConsoleRolesRsp;
const UserTagInfo = models.UserTagInfo;
const GetWorkflowResponse = models.GetWorkflowResponse;
const GetWorkflowTaskRunRequest = models.GetWorkflowTaskRunRequest;
const DeleteFileResponse = models.DeleteFileResponse;
const UpdateConsoleUsersRsp = models.UpdateConsoleUsersRsp;
const AddWorkspaceUsersRequest = models.AddWorkspaceUsersRequest;
const ListFilesResponse = models.ListFilesResponse;
const WorkflowTask = models.WorkflowTask;
const DeleteSchemaRsp = models.DeleteSchemaRsp;
const StopComputeResponse = models.StopComputeResponse;
const AdvancedDependencyConfig = models.AdvancedDependencyConfig;
const StopComputeRsp = models.StopComputeRsp;
const DeleteConsoleGroupsRequest = models.DeleteConsoleGroupsRequest;
const ListCatalogsRsp = models.ListCatalogsRsp;
const UpdateWorkflowResponse = models.UpdateWorkflowResponse;
const GetWorkflowRequest = models.GetWorkflowRequest;
const FileInfo = models.FileInfo;
const UpdateWorkspaceRoleRequest = models.UpdateWorkspaceRoleRequest;
const ListWorkspaceUsersResponse = models.ListWorkspaceUsersResponse;
const FileNode = models.FileNode;
const UpdateFolderRsp = models.UpdateFolderRsp;
const TaskTypeProperty = models.TaskTypeProperty;
const GetFolderRequest = models.GetFolderRequest;
const CreateFileRequest = models.CreateFileRequest;
const UpdateFileRequest = models.UpdateFileRequest;
const GetWorkflowRunRequest = models.GetWorkflowRunRequest;
const UserInfo = models.UserInfo;
const ListWorkflowsRequest = models.ListWorkflowsRequest;
const RolePermission = models.RolePermission;
const ListCatalogsRequest = models.ListCatalogsRequest;
const FileConfig = models.FileConfig;
const CreateWorkspaceRoleResult = models.CreateWorkspaceRoleResult;
const RunWorkflowResponse = models.RunWorkflowResponse;
const ListConsoleUsersRequest = models.ListConsoleUsersRequest;
const ListWorkflowRunsResponse = models.ListWorkflowRunsResponse;
const RemoveWorkspaceGroupsRequest = models.RemoveWorkspaceGroupsRequest;
const ListWorkspaceGroupsRequest = models.ListWorkspaceGroupsRequest;
const AdvancedParameter = models.AdvancedParameter;
const DeleteWorkspaceRoleResult = models.DeleteWorkspaceRoleResult;
const UpdateConsoleGroupResponse = models.UpdateConsoleGroupResponse;
const StandardUserInfo = models.StandardUserInfo;
const ConsoleUserInfo = models.ConsoleUserInfo;
const UpdateWorkflowRsp = models.UpdateWorkflowRsp;
const DeleteCatalogRequest = models.DeleteCatalogRequest;
const Schema = models.Schema;
const OrderBy = models.OrderBy;
const UpdateFolderRequest = models.UpdateFolderRequest;
const DeleteFolderRsp = models.DeleteFolderRsp;
const WorkflowAdvanceConfig = models.WorkflowAdvanceConfig;
const ListSchemasRequest = models.ListSchemasRequest;
const ParamInfo = models.ParamInfo;
const CreateCatalogResponse = models.CreateCatalogResponse;
const DeleteConsoleGroupsResponse = models.DeleteConsoleGroupsResponse;
const InnerWorkflowTaskRun = models.InnerWorkflowTaskRun;
const MonitorMetricItem = models.MonitorMetricItem;
const ListWorkspaceUsersRsp = models.ListWorkspaceUsersRsp;
const CreateWorkflowResponse = models.CreateWorkflowResponse;
const ListConsoleRolesRequest = models.ListConsoleRolesRequest;
const ListConsoleGroupUsersRsp = models.ListConsoleGroupUsersRsp;
const Audit = models.Audit;
const AlarmGroup = models.AlarmGroup;
const DeleteFileRequest = models.DeleteFileRequest;
const DeleteWorkflowRsp = models.DeleteWorkflowRsp;
const CommonFailItem = models.CommonFailItem;
const ListWorkspacesResponse = models.ListWorkspacesResponse;
const GetCatalogResponse = models.GetCatalogResponse;
const GetWorkflowRunResponse = models.GetWorkflowRunResponse;
const ListConsoleGroupsResponse = models.ListConsoleGroupsResponse;
const GetWorkflowRsp = models.GetWorkflowRsp;
const CreateWorkspaceRequest = models.CreateWorkspaceRequest;
const WorkspaceGroupInfo = models.WorkspaceGroupInfo;
const RoleBasicInfo = models.RoleBasicInfo;
const GitRepoConfig = models.GitRepoConfig;
const ListConsoleRolesResponse = models.ListConsoleRolesResponse;
const ListWorkspacesRsp = models.ListWorkspacesRsp;
const CreateWorkspaceResponse = models.CreateWorkspaceResponse;
const ListWorkspaceUsersRequest = models.ListWorkspaceUsersRequest;
const UpdateFileResponse = models.UpdateFileResponse;
const CreateFolderRsp = models.CreateFolderRsp;
const DeleteSchemaRequest = models.DeleteSchemaRequest;
const StartComputeRequest = models.StartComputeRequest;
const UpdateConsoleUsersRequest = models.UpdateConsoleUsersRequest;
const CreateConsoleGroupResponse = models.CreateConsoleGroupResponse;
const GetWorkflowTaskRunRsp = models.GetWorkflowTaskRunRsp;


/**
 * databuddy client
 * @class
 */
class DatabuddyClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("databuddy.intl.tencentcloudapi.com", "2026-07-15", credential, region, profile);
    }
    
    /**
     * Unbind workflow Bundle info
Description: This interface is semantically equivalent to Detach in the standard verb list. The name Unbind is retained for compatibility with existing product forms.
     * @param {UnbindWorkflowBundleRequest} req
     * @param {function(string, UnbindWorkflowBundleResponse):void} cb
     * @public
     */
    UnbindWorkflowBundle(req, cb) {
        let resp = new UnbindWorkflowBundleResponse();
        this.request("UnbindWorkflowBundle", req, resp, cb);
    }

    /**
     * Updating a Workflow
     * @param {UpdateWorkflowRequest} req
     * @param {function(string, UpdateWorkflowResponse):void} cb
     * @public
     */
    UpdateWorkflow(req, cb) {
        let resp = new UpdateWorkflowResponse();
        this.request("UpdateWorkflow", req, resp, cb);
    }

    /**
     * Add a console user
     * @param {AddConsoleUsersRequest} req
     * @param {function(string, AddConsoleUsersResponse):void} cb
     * @public
     */
    AddConsoleUsers(req, cb) {
        let resp = new AddConsoleUsersResponse();
        this.request("AddConsoleUsers", req, resp, cb);
    }

    /**
     * This API is used to query workflow details.
     * @param {GetWorkflowRequest} req
     * @param {function(string, GetWorkflowResponse):void} cb
     * @public
     */
    GetWorkflow(req, cb) {
        let resp = new GetWorkflowResponse();
        this.request("GetWorkflow", req, resp, cb);
    }

    /**
     * Create a schema
     * @param {CreateSchemaRequest} req
     * @param {function(string, CreateSchemaResponse):void} cb
     * @public
     */
    CreateSchema(req, cb) {
        let resp = new CreateSchemaResponse();
        this.request("CreateSchema", req, resp, cb);
    }

    /**
     * Query task execution details
     * @param {GetWorkflowTaskRunRequest} req
     * @param {function(string, GetWorkflowTaskRunResponse):void} cb
     * @public
     */
    GetWorkflowTaskRun(req, cb) {
        let resp = new GetWorkflowTaskRunResponse();
        this.request("GetWorkflowTaskRun", req, resp, cb);
    }

    /**
     * Query the historical operation list of workflow tasks
     * @param {ListWorkflowTaskRunsRequest} req
     * @param {function(string, ListWorkflowTaskRunsResponse):void} cb
     * @public
     */
    ListWorkflowTaskRuns(req, cb) {
        let resp = new ListWorkflowTaskRunsResponse();
        this.request("ListWorkflowTaskRuns", req, resp, cb);
    }

    /**
     * Queries the details of a workspace.
     * @param {GetWorkspaceRequest} req
     * @param {function(string, GetWorkspaceResponse):void} cb
     * @public
     */
    GetWorkspace(req, cb) {
        let resp = new GetWorkspaceResponse();
        this.request("GetWorkspace", req, resp, cb);
    }

    /**
     * Queries workflow running details.
     * @param {GetWorkflowRunRequest} req
     * @param {function(string, GetWorkflowRunResponse):void} cb
     * @public
     */
    GetWorkflowRun(req, cb) {
        let resp = new GetWorkflowRunResponse();
        this.request("GetWorkflowRun", req, resp, cb);
    }

    /**
     * Get folder details.
     * @param {GetFolderRequest} req
     * @param {function(string, GetFolderResponse):void} cb
     * @public
     */
    GetFolder(req, cb) {
        let resp = new GetFolderResponse();
        this.request("GetFolder", req, resp, cb);
    }

    /**
     * Delete a console user group
     * @param {DeleteConsoleGroupsRequest} req
     * @param {function(string, DeleteConsoleGroupsResponse):void} cb
     * @public
     */
    DeleteConsoleGroups(req, cb) {
        let resp = new DeleteConsoleGroupsResponse();
        this.request("DeleteConsoleGroups", req, resp, cb);
    }

    /**
     * This API is used to create user groups.
     * @param {AddWorkspaceUsersRequest} req
     * @param {function(string, AddWorkspaceUsersResponse):void} cb
     * @public
     */
    AddWorkspaceUsers(req, cb) {
        let resp = new AddWorkspaceUsersResponse();
        this.request("AddWorkspaceUsers", req, resp, cb);
    }

    /**
     * Queries the workspace list.
     * @param {ListWorkspacesRequest} req
     * @param {function(string, ListWorkspacesResponse):void} cb
     * @public
     */
    ListWorkspaces(req, cb) {
        let resp = new ListWorkspacesResponse();
        this.request("ListWorkspaces", req, resp, cb);
    }

    /**
     * Get the file's metadata, optionally including file content, and read historical snapshots by version.

**Prerequisite**
1. Pass at least one of FileId and FilePath. If both are passed, FileId takes precedence.
2. The corresponding file must exist, and the caller must have read permission for the file;
3. If VersionId is passed, the version must exist.

**Error codes (Module: `Studio`)**

| Error Code | Inner Code | Description | Handling Suggestion |
| --- | --- | --- | --- |
| `MissingParameter.WorkspaceId` | 1030001 | Lack of WorkspaceId | Please input WorkspaceId |
| `MissingParameter.FileId` | 1030003 | FileId and FilePath cannot be empty at the same time | Pass at least one of FileId and FilePath |
| `InvalidParameterValue.FileType` | 1030102 | FileType value unsupported | FileType takes FILE/NOTEBOOK_FILE/SQL_FILE |
| `ResourceNotFound.FileNotFound` | 1030203 | File does not exist or has been deleted | Confirm the FileId or FilePath |
| `ResourceNotFound.FileVersionNotFound` | 1030205 | The specified file version does not exist | Confirm the VersionId or call ListFileVersions to retrieve |
| `UnauthorizedOperation.FileReadDenied` | 1030304 | No read permission for this file | Contact the file owner or space admin for authorization |
| `InternalError` | 1030900 | Internal service error | Please carry the RequestId and contact support |
     * @param {GetFileRequest} req
     * @param {function(string, GetFileResponse):void} cb
     * @public
     */
    GetFile(req, cb) {
        let resp = new GetFileResponse();
        this.request("GetFile", req, resp, cb);
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
     * Remove a user group from a workspace.
     * @param {RemoveWorkspaceGroupsRequest} req
     * @param {function(string, RemoveWorkspaceGroupsResponse):void} cb
     * @public
     */
    RemoveWorkspaceGroups(req, cb) {
        let resp = new RemoveWorkspaceGroupsResponse();
        this.request("RemoveWorkspaceGroups", req, resp, cb);
    }

    /**
     * Delete a catalog.
     * @param {DeleteCatalogRequest} req
     * @param {function(string, DeleteCatalogResponse):void} cb
     * @public
     */
    DeleteCatalog(req, cb) {
        let resp = new DeleteCatalogResponse();
        this.request("DeleteCatalog", req, resp, cb);
    }

    /**
     * This API is used to create a workspace.
     * @param {CreateWorkspaceRequest} req
     * @param {function(string, CreateWorkspaceResponse):void} cb
     * @public
     */
    CreateWorkspace(req, cb) {
        let resp = new CreateWorkspaceResponse();
        this.request("CreateWorkspace", req, resp, cb);
    }

    /**
     * Terminate the operation of a workflow.
     * @param {KillWorkflowRunRequest} req
     * @param {function(string, KillWorkflowRunResponse):void} cb
     * @public
     */
    KillWorkflowRun(req, cb) {
        let resp = new KillWorkflowRunResponse();
        this.request("KillWorkflowRun", req, resp, cb);
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
     * Get schema list
     * @param {ListSchemasRequest} req
     * @param {function(string, ListSchemasResponse):void} cb
     * @public
     */
    ListSchemas(req, cb) {
        let resp = new ListSchemasResponse();
        this.request("ListSchemas", req, resp, cb);
    }

    /**
     * Modifies a workspace
     * @param {UpdateWorkspaceRequest} req
     * @param {function(string, UpdateWorkspaceResponse):void} cb
     * @public
     */
    UpdateWorkspace(req, cb) {
        let resp = new UpdateWorkspaceResponse();
        this.request("UpdateWorkspace", req, resp, cb);
    }

    /**
     * Move the file to Recycle Bin (soft deletion) and clear its version history and execution result snapshots.

**Prerequisite**
1. The file corresponding to FileId must exist and be in active status;
2. The caller has permission to delete the file;
3. The file hasn't been referenced by a workflow task.

**Error codes (Module are all `Studio`)**

| Error Code (Code) | InnerCode | Description | Handling Suggestion |
| --- | --- | --- | --- |
| `MissingParameter.WorkspaceId` | 1030001 | lack of WorkspaceId | Please input WorkspaceId |
| `MissingParameter.FileId` | 1030003 | lack of FileId | Please import FileId |
| `InvalidParameterValue.FileType` | 1030102 | FileType value not supported | FileType takes FILE/NOTEBOOK_FILE/SQL_FILE |
| `ResourceNotFound.FileNotFound` | 1030203 | File does not exist or has been deleted | Please confirm the FileId |
| `ResourceInUse.FileReferencedByTask` | 1030204 | The file is referenced by a workflow task and cannot be deleted. | Disassociate the task reference first. |
| `UnauthorizedOperation.FileDeleteDenied` | 1030303 | No deletion permission for this file | Contact the file owner or space admin for authorization |
| `InternalError` | 1030900 | Internal service error | Please carry the RequestId and contact support |
     * @param {DeleteFileRequest} req
     * @param {function(string, DeleteFileResponse):void} cb
     * @public
     */
    DeleteFile(req, cb) {
        let resp = new DeleteFileResponse();
        this.request("DeleteFile", req, resp, cb);
    }

    /**
     * Create a console user group
     * @param {CreateConsoleGroupRequest} req
     * @param {function(string, CreateConsoleGroupResponse):void} cb
     * @public
     */
    CreateConsoleGroup(req, cb) {
        let resp = new CreateConsoleGroupResponse();
        this.request("CreateConsoleGroup", req, resp, cb);
    }

    /**
     * This API is used to create a data catalog.
     * @param {CreateCatalogRequest} req
     * @param {function(string, CreateCatalogResponse):void} cb
     * @public
     */
    CreateCatalog(req, cb) {
        let resp = new CreateCatalogResponse();
        this.request("CreateCatalog", req, resp, cb);
    }

    /**
     * Delete schema
     * @param {DeleteSchemaRequest} req
     * @param {function(string, DeleteSchemaResponse):void} cb
     * @public
     */
    DeleteSchema(req, cb) {
        let resp = new DeleteSchemaResponse();
        this.request("DeleteSchema", req, resp, cb);
    }

    /**
     * Creates a workspace role
     * @param {CreateWorkspaceRoleRequest} req
     * @param {function(string, CreateWorkspaceRoleResponse):void} cb
     * @public
     */
    CreateWorkspaceRole(req, cb) {
        let resp = new CreateWorkspaceRoleResponse();
        this.request("CreateWorkspaceRole", req, resp, cb);
    }

    /**
     * Start up the computational resource.
     * @param {StartComputeRequest} req
     * @param {function(string, StartComputeResponse):void} cb
     * @public
     */
    StartCompute(req, cb) {
        let resp = new StartComputeResponse();
        this.request("StartCompute", req, resp, cb);
    }

    /**
     * Create a folder
     * @param {CreateFolderRequest} req
     * @param {function(string, CreateFolderResponse):void} cb
     * @public
     */
    CreateFolder(req, cb) {
        let resp = new CreateFolderResponse();
        this.request("CreateFolder", req, resp, cb);
    }

    /**
     * Queries the console user list. This API is a console-level API and is only supported in the central region: use ap-guangzhou for the Chinese site and ap-singapore for the international site. Calls from other regions will return UnsupportedRegion.
     * @param {ListConsoleUsersRequest} req
     * @param {function(string, ListConsoleUsersResponse):void} cb
     * @public
     */
    ListConsoleUsers(req, cb) {
        let resp = new ListConsoleUsersResponse();
        this.request("ListConsoleUsers", req, resp, cb);
    }

    /**
     * <p>Batch remove console users (up to 10 at a time; pre-verification rejects the entire request if any fails; during the Execution Phase, a single failure does not interrupt subsequent deletion, and success or failure is determined by SuccessUins/FailItems)</p>
     * @param {RemoveConsoleUsersRequest} req
     * @param {function(string, RemoveConsoleUsersResponse):void} cb
     * @public
     */
    RemoveConsoleUsers(req, cb) {
        let resp = new RemoveConsoleUsersResponse();
        this.request("RemoveConsoleUsers", req, resp, cb);
    }

    /**
     * Terminate computational resources
     * @param {StopComputeRequest} req
     * @param {function(string, StopComputeResponse):void} cb
     * @public
     */
    StopCompute(req, cb) {
        let resp = new StopComputeResponse();
        this.request("StopCompute", req, resp, cb);
    }

    /**
     * Runs the workflow
     * @param {RunWorkflowRequest} req
     * @param {function(string, RunWorkflowResponse):void} cb
     * @public
     */
    RunWorkflow(req, cb) {
        let resp = new RunWorkflowResponse();
        this.request("RunWorkflow", req, resp, cb);
    }

    /**
     * Get the folder and file list
     * @param {ListFilesRequest} req
     * @param {function(string, ListFilesResponse):void} cb
     * @public
     */
    ListFiles(req, cb) {
        let resp = new ListFilesResponse();
        this.request("ListFiles", req, resp, cb);
    }

    /**
     * Updates a workspace role
     * @param {UpdateWorkspaceRoleRequest} req
     * @param {function(string, UpdateWorkspaceRoleResponse):void} cb
     * @public
     */
    UpdateWorkspaceRole(req, cb) {
        let resp = new UpdateWorkspaceRoleResponse();
        this.request("UpdateWorkspaceRole", req, resp, cb);
    }

    /**
     * Pagination fetch data catalog list
     * @param {ListCatalogsRequest} req
     * @param {function(string, ListCatalogsResponse):void} cb
     * @public
     */
    ListCatalogs(req, cb) {
        let resp = new ListCatalogsResponse();
        this.request("ListCatalogs", req, resp, cb);
    }

    /**
     * Delete folder
     * @param {DeleteFolderRequest} req
     * @param {function(string, DeleteFolderResponse):void} cb
     * @public
     */
    DeleteFolder(req, cb) {
        let resp = new DeleteFolderResponse();
        this.request("DeleteFolder", req, resp, cb);
    }

    /**
     * Queries the console user group list. This API is a console-level API and is only supported in the central region: use ap-guangzhou for the Chinese site and ap-singapore for the international site. Calls from other regions will return UnsupportedRegion.
     * @param {ListConsoleGroupsRequest} req
     * @param {function(string, ListConsoleGroupsResponse):void} cb
     * @public
     */
    ListConsoleGroups(req, cb) {
        let resp = new ListConsoleGroupsResponse();
        this.request("ListConsoleGroups", req, resp, cb);
    }

    /**
     * Query catalog description
     * @param {GetCatalogRequest} req
     * @param {function(string, GetCatalogResponse):void} cb
     * @public
     */
    GetCatalog(req, cb) {
        let resp = new GetCatalogResponse();
        this.request("GetCatalog", req, resp, cb);
    }

    /**
     * This API is used to query the list of user groups in a workspace.
     * @param {ListWorkspaceGroupsRequest} req
     * @param {function(string, ListWorkspaceGroupsResponse):void} cb
     * @public
     */
    ListWorkspaceGroups(req, cb) {
        let resp = new ListWorkspaceGroupsResponse();
        this.request("ListWorkspaceGroups", req, resp, cb);
    }

    /**
     * Queries the console role list. This API is a console-level API and is only supported in the central region: use ap-guangzhou for the Chinese site and ap-singapore for the international site. Calls from other regions will return UnsupportedRegion.
     * @param {ListConsoleRolesRequest} req
     * @param {function(string, ListConsoleRolesResponse):void} cb
     * @public
     */
    ListConsoleRoles(req, cb) {
        let resp = new ListConsoleRolesResponse();
        this.request("ListConsoleRoles", req, resp, cb);
    }

    /**
     * Rerun a workflow
     * @param {RerunWorkflowRunRequest} req
     * @param {function(string, RerunWorkflowRunResponse):void} cb
     * @public
     */
    RerunWorkflowRun(req, cb) {
        let resp = new RerunWorkflowRunResponse();
        this.request("RerunWorkflowRun", req, resp, cb);
    }

    /**
     * Modify a console user group
     * @param {UpdateConsoleGroupRequest} req
     * @param {function(string, UpdateConsoleGroupResponse):void} cb
     * @public
     */
    UpdateConsoleGroup(req, cb) {
        let resp = new UpdateConsoleGroupResponse();
        this.request("UpdateConsoleGroup", req, resp, cb);
    }

    /**
     * Queries the list of users in a workspace.
     * @param {ListWorkspaceUsersRequest} req
     * @param {function(string, ListWorkspaceUsersResponse):void} cb
     * @public
     */
    ListWorkspaceUsers(req, cb) {
        let resp = new ListWorkspaceUsersResponse();
        this.request("ListWorkspaceUsers", req, resp, cb);
    }

    /**
     * Create a workflow
     * @param {CreateWorkflowRequest} req
     * @param {function(string, CreateWorkflowResponse):void} cb
     * @public
     */
    CreateWorkflow(req, cb) {
        let resp = new CreateWorkflowResponse();
        this.request("CreateWorkflow", req, resp, cb);
    }

    /**
     * Update file contents and running configuration (computational resource, default catalog/schema, parameters), and return the file metadata after the update.

**Prerequisite**
1. The file corresponding to FileId must exist and be in active status;
2. The caller has write permission on the file;
3. To update only the configuration, do not pass in Storage. To update only the content, do not pass in FileConfig.
4. If FileConfig.ResourceId is not empty, the match between the resource type and file type will be validated.

**Error codes (Module: `Studio`)**

| Error Code (Code) | InnerCode | Description | Handling Suggestions |
| --- | --- | --- | --- |
| `MissingParameter.WorkspaceId` | 1030001 | lack of WorkspaceId | Please input WorkspaceId |
| `MissingParameter.FileId` | 1030003 | lack of FileId | Please import FileId |
| `InvalidParameterValue.FileType` | 1030102 | FileType value not supported | FileType takes FILE/NOTEBOOK_FILE/SQL_FILE |
| `InvalidParameterValue.ResourceId` | 1030104 | Compute resource type and file type mismatch | Select a computational resource for Python/Notebook and a data analysis resource for SQL |
| `ResourceNotFound.FileNotFound` | 1030203 | File does not exist or has been deleted | confirm the FileId or call GetFile to check the file status |
| `UnauthorizedOperation.FileWriteDenied` | 1030302 | No write permission for this file | Contact the file owner or space admin for authorization |
| `FailedOperation.FileStorageUpdateFailed` | 1030401 | Failed to write file content to storage | Try again later. If the failure persists, contact support with the RequestId. |
| `InternalError` | 1030900 | Internal service error | Please carry the RequestId and contact support |
     * @param {UpdateFileRequest} req
     * @param {function(string, UpdateFileResponse):void} cb
     * @public
     */
    UpdateFile(req, cb) {
        let resp = new UpdateFileResponse();
        this.request("UpdateFile", req, resp, cb);
    }

    /**
     * Modify a console user role
     * @param {UpdateConsoleUsersRequest} req
     * @param {function(string, UpdateConsoleUsersResponse):void} cb
     * @public
     */
    UpdateConsoleUsers(req, cb) {
        let resp = new UpdateConsoleUsersResponse();
        this.request("UpdateConsoleUsers", req, resp, cb);
    }

    /**
     * This API is used to add a user group to a workspace.
     * @param {AddWorkspaceGroupsRequest} req
     * @param {function(string, AddWorkspaceGroupsResponse):void} cb
     * @public
     */
    AddWorkspaceGroups(req, cb) {
        let resp = new AddWorkspaceGroupsResponse();
        this.request("AddWorkspaceGroups", req, resp, cb);
    }

    /**
     * Create a new file (Notebook/SQL/Python, etc.) in the workspace file tree of Studio (unified development IDE), and return the complete meta-information of the file upon success.

**Prerequisite**
1. WorkspaceId corresponds to an existent workspace, and the caller is a space member of this workspace;
2. The parent folder corresponding to ParentFolderPath must exist, and the caller must have write permission on it (pass `/` for the root directory);
3. FileName must be unique under the same parent folder, including suffix comparison.
4. The FileName suffix must be consistent with FileType (`.ipynb`↔`NOTEBOOK_FILE`, `.sql`↔`SQL_FILE`);
5. To create with file content, pass it through Storage (large files are transferred via COS, and small files are placed in Storage.Content).
     * @param {CreateFileRequest} req
     * @param {function(string, CreateFileResponse):void} cb
     * @public
     */
    CreateFile(req, cb) {
        let resp = new CreateFileResponse();
        this.request("CreateFile", req, resp, cb);
    }

    /**
     * Queries the console user group member list. This API is a console-level API and is only supported in the central region: use ap-guangzhou for the Chinese site and ap-singapore for the international site. Calls from other regions will return UnsupportedRegion.
     * @param {ListConsoleGroupUsersRequest} req
     * @param {function(string, ListConsoleGroupUsersResponse):void} cb
     * @public
     */
    ListConsoleGroupUsers(req, cb) {
        let resp = new ListConsoleGroupUsersResponse();
        this.request("ListConsoleGroupUsers", req, resp, cb);
    }

    /**
     * Delete a workspace role.
     * @param {DeleteWorkspaceRoleRequest} req
     * @param {function(string, DeleteWorkspaceRoleResponse):void} cb
     * @public
     */
    DeleteWorkspaceRole(req, cb) {
        let resp = new DeleteWorkspaceRoleResponse();
        this.request("DeleteWorkspaceRole", req, resp, cb);
    }

    /**
     * Workflow run list
     * @param {ListWorkflowRunsRequest} req
     * @param {function(string, ListWorkflowRunsResponse):void} cb
     * @public
     */
    ListWorkflowRuns(req, cb) {
        let resp = new ListWorkflowRunsResponse();
        this.request("ListWorkflowRuns", req, resp, cb);
    }

    /**
     * Update folder (supports rename and move)
     * @param {UpdateFolderRequest} req
     * @param {function(string, UpdateFolderResponse):void} cb
     * @public
     */
    UpdateFolder(req, cb) {
        let resp = new UpdateFolderResponse();
        this.request("UpdateFolder", req, resp, cb);
    }

    /**
     * Delete a workspace.
     * @param {DeleteWorkspaceRequest} req
     * @param {function(string, DeleteWorkspaceResponse):void} cb
     * @public
     */
    DeleteWorkspace(req, cb) {
        let resp = new DeleteWorkspaceResponse();
        this.request("DeleteWorkspace", req, resp, cb);
    }


}
module.exports = DatabuddyClient;
