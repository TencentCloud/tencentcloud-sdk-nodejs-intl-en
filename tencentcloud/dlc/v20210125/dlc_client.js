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
const UserDetailInfo = models.UserDetailInfo;
const CheckDataEngineConfigPairsValidityResponse = models.CheckDataEngineConfigPairsValidityResponse;
const DescribeResultDownloadResponse = models.DescribeResultDownloadResponse;
const AccessInfo = models.AccessInfo;
const PrestoMonitorMetrics = models.PrestoMonitorMetrics;
const ModifyDataEngineDescriptionRequest = models.ModifyDataEngineDescriptionRequest;
const StatementInformation = models.StatementInformation;
const DescribeUpdatableDataEnginesResponse = models.DescribeUpdatableDataEnginesResponse;
const DeleteUserRequest = models.DeleteUserRequest;
const DescribeUserDataEngineConfigResponse = models.DescribeUserDataEngineConfigResponse;
const DescribeSparkAppJobRequest = models.DescribeSparkAppJobRequest;
const DataEngineScaleInfoDetail = models.DataEngineScaleInfoDetail;
const SparkSessionBatchLogOperate = models.SparkSessionBatchLogOperate;
const DescribeTaskResultResponse = models.DescribeTaskResultResponse;
const DeleteDataEngineResponse = models.DeleteDataEngineResponse;
const RenewDataEngineResponse = models.RenewDataEngineResponse;
const CosPermission = models.CosPermission;
const CreateResultDownloadResponse = models.CreateResultDownloadResponse;
const ModifyGovernEventRuleResponse = models.ModifyGovernEventRuleResponse;
const SparkMonitorMetrics = models.SparkMonitorMetrics;
const RestartDataEngineRequest = models.RestartDataEngineRequest;
const DescribeDataEngineImageVersionsResponse = models.DescribeDataEngineImageVersionsResponse;
const CreateStoreLocationResponse = models.CreateStoreLocationResponse;
const DescribeSubUserAccessPolicyResponse = models.DescribeSubUserAccessPolicyResponse;
const DescribeTablesNameRequest = models.DescribeTablesNameRequest;
const Policys = models.Policys;
const ModifyWorkGroupResponse = models.ModifyWorkGroupResponse;
const DetachUserPolicyResponse = models.DetachUserPolicyResponse;
const SparkJobInfo = models.SparkJobInfo;
const SwitchDataEngineRequest = models.SwitchDataEngineRequest;
const DeleteSparkAppRequest = models.DeleteSparkAppRequest;
const DLCCatalogAccess = models.DLCCatalogAccess;
const DescribeDLCCatalogAccessRequest = models.DescribeDLCCatalogAccessRequest;
const ModifyUserResponse = models.ModifyUserResponse;
const SwitchDataEngineImageResponse = models.SwitchDataEngineImageResponse;
const PythonSparkImage = models.PythonSparkImage;
const Task = models.Task;
const DataEngineConfigInstanceInfo = models.DataEngineConfigInstanceInfo;
const DetachUserPolicyRequest = models.DetachUserPolicyRequest;
const CrontabResumeSuspendStrategy = models.CrontabResumeSuspendStrategy;
const CreateCHDFSBindingProductRequest = models.CreateCHDFSBindingProductRequest;
const DescribeTasksResponse = models.DescribeTasksResponse;
const VpcInfo = models.VpcInfo;
const CommonMetrics = models.CommonMetrics;
const UserRole = models.UserRole;
const DataEngineBasicInfo = models.DataEngineBasicInfo;
const DetachWorkGroupPolicyResponse = models.DetachWorkGroupPolicyResponse;
const DescribeSparkSessionBatchSqlLogResponse = models.DescribeSparkSessionBatchSqlLogResponse;
const GenerateCreateMangedTableSqlRequest = models.GenerateCreateMangedTableSqlRequest;
const DescribeUserTypeRequest = models.DescribeUserTypeRequest;
const SwitchDataEngineResponse = models.SwitchDataEngineResponse;
const CheckDataEngineConfigPairsValidityRequest = models.CheckDataEngineConfigPairsValidityRequest;
const MountPointAssociates = models.MountPointAssociates;
const DescribeLakeFsInfoRequest = models.DescribeLakeFsInfoRequest;
const ModifySparkAppRequest = models.ModifySparkAppRequest;
const StreamingStatistics = models.StreamingStatistics;
const DescribeUserInfoRequest = models.DescribeUserInfoRequest;
const CHDFSProductVpcInfo = models.CHDFSProductVpcInfo;
const GenerateCreateMangedTableSqlResponse = models.GenerateCreateMangedTableSqlResponse;
const WorkGroupMessage = models.WorkGroupMessage;
const UpdateDataEngineConfigResponse = models.UpdateDataEngineConfigResponse;
const UserIdSetOfWorkGroupId = models.UserIdSetOfWorkGroupId;
const DescribeAdvancedStoreLocationResponse = models.DescribeAdvancedStoreLocationResponse;
const DescribeTablesNameResponse = models.DescribeTablesNameResponse;
const DescribeAdvancedStoreLocationRequest = models.DescribeAdvancedStoreLocationRequest;
const UpdateDataEngineRequest = models.UpdateDataEngineRequest;
const DescribeTasksRequest = models.DescribeTasksRequest;
const CreateSparkAppTaskRequest = models.CreateSparkAppTaskRequest;
const ModifySparkAppBatchResponse = models.ModifySparkAppBatchResponse;
const DescribeUserTypeResponse = models.DescribeUserTypeResponse;
const DeleteWorkGroupRequest = models.DeleteWorkGroupRequest;
const KVPair = models.KVPair;
const QueryResultResponse = models.QueryResultResponse;
const CheckDataEngineImageCanBeUpgradeResponse = models.CheckDataEngineImageCanBeUpgradeResponse;
const AttachUserPolicyRequest = models.AttachUserPolicyRequest;
const CreateInternalTableRequest = models.CreateInternalTableRequest;
const DeleteThirdPartyAccessUserRequest = models.DeleteThirdPartyAccessUserRequest;
const AttachWorkGroupPolicyRequest = models.AttachWorkGroupPolicyRequest;
const TagInfo = models.TagInfo;
const CreateUserResponse = models.CreateUserResponse;
const CreateSparkAppRequest = models.CreateSparkAppRequest;
const RevokeDLCCatalogAccessResponse = models.RevokeDLCCatalogAccessResponse;
const DeleteCHDFSBindingProductRequest = models.DeleteCHDFSBindingProductRequest;
const UpdateDataEngineResponse = models.UpdateDataEngineResponse;
const DeleteUserResponse = models.DeleteUserResponse;
const SparkSessionBatchLog = models.SparkSessionBatchLog;
const DescribeEngineUsageInfoRequest = models.DescribeEngineUsageInfoRequest;
const SmartOptimizerWrittenPolicy = models.SmartOptimizerWrittenPolicy;
const TPartition = models.TPartition;
const DescribeForbiddenTableProRequest = models.DescribeForbiddenTableProRequest;
const CreateDataEngineResponse = models.CreateDataEngineResponse;
const DescribeSparkAppJobsRequest = models.DescribeSparkAppJobsRequest;
const DescribeDataEngineRequest = models.DescribeDataEngineRequest;
const RollbackDataEngineImageResponse = models.RollbackDataEngineImageResponse;
const LakeFsInfo = models.LakeFsInfo;
const QueryResultRequest = models.QueryResultRequest;
const CheckDataEngineImageCanBeRollbackRequest = models.CheckDataEngineImageCanBeRollbackRequest;
const CreateDataEngineRequest = models.CreateDataEngineRequest;
const ModifySparkAppBatchRequest = models.ModifySparkAppBatchRequest;
const SmartOptimizerPolicy = models.SmartOptimizerPolicy;
const CreateTaskRequest = models.CreateTaskRequest;
const RegisterThirdPartyAccessUserResponse = models.RegisterThirdPartyAccessUserResponse;
const ModifySparkAppResponse = models.ModifySparkAppResponse;
const UpgradeDataEngineImageRequest = models.UpgradeDataEngineImageRequest;
const DescribeUserInfoResponse = models.DescribeUserInfoResponse;
const ModifyUserTypeRequest = models.ModifyUserTypeRequest;
const RollbackDataEngineImageRequest = models.RollbackDataEngineImageRequest;
const DescribeWorkGroupsResponse = models.DescribeWorkGroupsResponse;
const DescribeUsersRequest = models.DescribeUsersRequest;
const DescribeSparkSessionBatchSqlLogRequest = models.DescribeSparkSessionBatchSqlLogRequest;
const Property = models.Property;
const TasksOverview = models.TasksOverview;
const DescribeUpdatableDataEnginesRequest = models.DescribeUpdatableDataEnginesRequest;
const DescribeSparkAppJobResponse = models.DescribeSparkAppJobResponse;
const SmartOptimizerLifecyclePolicy = models.SmartOptimizerLifecyclePolicy;
const DeleteUsersFromWorkGroupResponse = models.DeleteUsersFromWorkGroupResponse;
const AddUsersToWorkGroupRequest = models.AddUsersToWorkGroupRequest;
const DescribeStoreLocationRequest = models.DescribeStoreLocationRequest;
const DescribeDLCCatalogAccessResponse = models.DescribeDLCCatalogAccessResponse;
const AddUsersToWorkGroupResponse = models.AddUsersToWorkGroupResponse;
const ModifyAdvancedStoreLocationRequest = models.ModifyAdvancedStoreLocationRequest;
const DescribeUserRolesResponse = models.DescribeUserRolesResponse;
const GetOptimizerPolicyRequest = models.GetOptimizerPolicyRequest;
const Users = models.Users;
const GrantDLCCatalogAccessRequest = models.GrantDLCCatalogAccessRequest;
const DataEngineConfigPair = models.DataEngineConfigPair;
const SessionResourceTemplate = models.SessionResourceTemplate;
const AttachWorkGroupPolicyResponse = models.AttachWorkGroupPolicyResponse;
const ModifyAdvancedStoreLocationResponse = models.ModifyAdvancedStoreLocationResponse;
const SuspendResumeDataEngineResponse = models.SuspendResumeDataEngineResponse;
const TaskResponseInfo = models.TaskResponseInfo;
const UpgradeDataEngineImageResponse = models.UpgradeDataEngineImageResponse;
const CreateCHDFSBindingProductResponse = models.CreateCHDFSBindingProductResponse;
const OpendThirdAccessUserInfo = models.OpendThirdAccessUserInfo;
const CreateSparkAppTaskResponse = models.CreateSparkAppTaskResponse;
const CancelTaskRequest = models.CancelTaskRequest;
const DescribeDataEnginesScaleDetailResponse = models.DescribeDataEnginesScaleDetailResponse;
const DescribeDataEngineImageVersionsRequest = models.DescribeDataEngineImageVersionsRequest;
const BindWorkGroupsToUserResponse = models.BindWorkGroupsToUserResponse;
const DescribeStoreLocationResponse = models.DescribeStoreLocationResponse;
const DescribeUserRolesRequest = models.DescribeUserRolesRequest;
const QueryTaskCostDetailResponse = models.QueryTaskCostDetailResponse;
const OtherCHDFSBinding = models.OtherCHDFSBinding;
const WorkGroups = models.WorkGroups;
const ResourceInfo = models.ResourceInfo;
const Execution = models.Execution;
const WorkGroupInfo = models.WorkGroupInfo;
const SmartPolicy = models.SmartPolicy;
const SmartOptimizerIndexPolicy = models.SmartOptimizerIndexPolicy;
const BindWorkGroupsToUserRequest = models.BindWorkGroupsToUserRequest;
const Column = models.Column;
const VpcCidrBlock = models.VpcCidrBlock;
const RenewDataEngineRequest = models.RenewDataEngineRequest;
const DescribeTaskResultRequest = models.DescribeTaskResultRequest;
const UpdateUserDataEngineConfigRequest = models.UpdateUserDataEngineConfigRequest;
const Filter = models.Filter;
const DescribeLakeFsDirSummaryResponse = models.DescribeLakeFsDirSummaryResponse;
const TableBaseInfo = models.TableBaseInfo;
const DescribeForbiddenTableProResponse = models.DescribeForbiddenTableProResponse;
const DescribeWorkGroupInfoRequest = models.DescribeWorkGroupInfoRequest;
const CreateUserRequest = models.CreateUserRequest;
const RevokeDLCCatalogAccessRequest = models.RevokeDLCCatalogAccessRequest;
const ModifyWorkGroupRequest = models.ModifyWorkGroupRequest;
const DescribeOtherCHDFSBindingListRequest = models.DescribeOtherCHDFSBindingListRequest;
const CancelTaskResponse = models.CancelTaskResponse;
const DataGovernPolicy = models.DataGovernPolicy;
const DeleteWorkGroupResponse = models.DeleteWorkGroupResponse;
const RestartDataEngineResponse = models.RestartDataEngineResponse;
const WorkGroupIdSetOfUserId = models.WorkGroupIdSetOfUserId;
const CreateWorkGroupResponse = models.CreateWorkGroupResponse;
const RegisterThirdPartyAccessUserRequest = models.RegisterThirdPartyAccessUserRequest;
const DescribeEngineUsageInfoResponse = models.DescribeEngineUsageInfoResponse;
const DescribeWorkGroupInfoResponse = models.DescribeWorkGroupInfoResponse;
const CheckDataEngineImageCanBeRollbackResponse = models.CheckDataEngineImageCanBeRollbackResponse;
const SmartPolicyBaseInfo = models.SmartPolicyBaseInfo;
const CreateStoreLocationRequest = models.CreateStoreLocationRequest;
const DescribeThirdPartyAccessUserResponse = models.DescribeThirdPartyAccessUserResponse;
const CreateResultDownloadRequest = models.CreateResultDownloadRequest;
const DescribeLakeFsInfoResponse = models.DescribeLakeFsInfoResponse;
const FavorInfo = models.FavorInfo;
const CancelSparkSessionBatchSQLResponse = models.CancelSparkSessionBatchSQLResponse;
const WorkGroupDetailInfo = models.WorkGroupDetailInfo;
const DescribeThirdPartyAccessUserRequest = models.DescribeThirdPartyAccessUserRequest;
const GetOptimizerPolicyResponse = models.GetOptimizerPolicyResponse;
const DeleteDataEngineRequest = models.DeleteDataEngineRequest;
const TasksInfo = models.TasksInfo;
const DataEngineImageVersion = models.DataEngineImageVersion;
const CreateSparkSessionBatchSQLResponse = models.CreateSparkSessionBatchSQLResponse;
const DescribeLakeFsDirSummaryRequest = models.DescribeLakeFsDirSummaryRequest;
const ModifyGovernEventRuleRequest = models.ModifyGovernEventRuleRequest;
const DeleteUsersFromWorkGroupRequest = models.DeleteUsersFromWorkGroupRequest;
const Policy = models.Policy;
const CreateSparkAppResponse = models.CreateSparkAppResponse;
const CreateTaskResponse = models.CreateTaskResponse;
const DescribeDataEnginesScaleDetailRequest = models.DescribeDataEnginesScaleDetailRequest;
const DeleteSparkAppResponse = models.DeleteSparkAppResponse;
const NetworkConnection = models.NetworkConnection;
const CreateTasksRequest = models.CreateTasksRequest;
const SuspendResumeDataEngineRequest = models.SuspendResumeDataEngineRequest;
const TaskResultInfo = models.TaskResultInfo;
const DescribeSparkAppJobsResponse = models.DescribeSparkAppJobsResponse;
const DeleteThirdPartyAccessUserResponse = models.DeleteThirdPartyAccessUserResponse;
const DescribeSparkAppTasksResponse = models.DescribeSparkAppTasksResponse;
const UpdateUserDataEngineConfigResponse = models.UpdateUserDataEngineConfigResponse;
const ModifyUserTypeResponse = models.ModifyUserTypeResponse;
const DescribeDataEnginePythonSparkImagesRequest = models.DescribeDataEnginePythonSparkImagesRequest;
const CancelSparkSessionBatchSQLRequest = models.CancelSparkSessionBatchSQLRequest;
const DescribeWorkGroupsRequest = models.DescribeWorkGroupsRequest;
const DescribeUserDataEngineConfigRequest = models.DescribeUserDataEngineConfigRequest;
const UnbindWorkGroupsFromUserRequest = models.UnbindWorkGroupsFromUserRequest;
const UpdateRowFilterResponse = models.UpdateRowFilterResponse;
const UserInfo = models.UserInfo;
const CreateTasksResponse = models.CreateTasksResponse;
const GrantDLCCatalogAccessResponse = models.GrantDLCCatalogAccessResponse;
const DescribeDataEngineResponse = models.DescribeDataEngineResponse;
const DataEngineScaleInfo = models.DataEngineScaleInfo;
const CreateSparkSessionBatchSQLRequest = models.CreateSparkSessionBatchSQLRequest;
const UnbindWorkGroupsFromUserResponse = models.UnbindWorkGroupsFromUserResponse;
const QueryTaskCostDetailRequest = models.QueryTaskCostDetailRequest;
const ModifyDataEngineDescriptionResponse = models.ModifyDataEngineDescriptionResponse;
const UpdateDataEngineConfigRequest = models.UpdateDataEngineConfigRequest;
const CreateWorkGroupRequest = models.CreateWorkGroupRequest;
const CreateInternalTableResponse = models.CreateInternalTableResponse;
const DataEngineInfo = models.DataEngineInfo;
const DescribeSparkAppTasksRequest = models.DescribeSparkAppTasksRequest;
const DescribeSubUserAccessPolicyRequest = models.DescribeSubUserAccessPolicyRequest;
const CheckDataEngineImageCanBeUpgradeRequest = models.CheckDataEngineImageCanBeUpgradeRequest;
const SQLTask = models.SQLTask;
const UserMessage = models.UserMessage;
const DescribeOtherCHDFSBindingListResponse = models.DescribeOtherCHDFSBindingListResponse;
const DescribeUsersResponse = models.DescribeUsersResponse;
const SwitchDataEngineImageRequest = models.SwitchDataEngineImageRequest;
const AttachUserPolicyResponse = models.AttachUserPolicyResponse;
const DetachWorkGroupPolicyRequest = models.DetachWorkGroupPolicyRequest;
const DeleteCHDFSBindingProductResponse = models.DeleteCHDFSBindingProductResponse;
const DescribeDataEnginePythonSparkImagesResponse = models.DescribeDataEnginePythonSparkImagesResponse;
const ModifyUserRequest = models.ModifyUserRequest;
const UpdateRowFilterRequest = models.UpdateRowFilterRequest;
const TColumn = models.TColumn;
const DescribeResultDownloadRequest = models.DescribeResultDownloadRequest;


/**
 * dlc client
 * @class
 */
class DlcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dlc.tencentcloudapi.com", "2021-01-25", credential, region, profile);
    }
    
    /**
     * This API is used to create and execute a SQL task. (`CreateTasks` is recommended.)
     * @param {CreateTaskRequest} req
     * @param {function(string, CreateTaskResponse):void} cb
     * @public
     */
    CreateTask(req, cb) {
        let resp = new CreateTaskResponse();
        this.request("CreateTask", req, resp, cb);
    }

    /**
     * This API is used to add users to working groups.
     * @param {AddUsersToWorkGroupRequest} req
     * @param {function(string, AddUsersToWorkGroupResponse):void} cb
     * @public
     */
    AddUsersToWorkGroup(req, cb) {
        let resp = new AddUsersToWorkGroupResponse();
        this.request("AddUsersToWorkGroup", req, resp, cb);
    }

    /**
     * This API is used to query the result of a task.
     * @param {DescribeTaskResultRequest} req
     * @param {function(string, DescribeTaskResultResponse):void} cb
     * @public
     */
    DescribeTaskResult(req, cb) {
        let resp = new DescribeTaskResultResponse();
        this.request("DescribeTaskResult", req, resp, cb);
    }

    /**
     * This API is used to get the list of disabled table attributes (new).
     * @param {DescribeForbiddenTableProRequest} req
     * @param {function(string, DescribeForbiddenTableProResponse):void} cb
     * @public
     */
    DescribeForbiddenTablePro(req, cb) {
        let resp = new DescribeForbiddenTableProResponse();
        this.request("DescribeForbiddenTablePro", req, resp, cb);
    }

    /**
     * This API is used to enumerate user roles.
     * @param {DescribeUserRolesRequest} req
     * @param {function(string, DescribeUserRolesResponse):void} cb
     * @public
     */
    DescribeUserRoles(req, cb) {
        let resp = new DescribeUserRolesResponse();
        this.request("DescribeUserRoles", req, resp, cb);
    }

    /**
     * This API is used to modify the types of users. Only users who are also administrators can call this API to conduct the operation.
     * @param {ModifyUserTypeRequest} req
     * @param {function(string, ModifyUserTypeResponse):void} cb
     * @public
     */
    ModifyUserType(req, cb) {
        let resp = new ModifyUserTypeResponse();
        this.request("ModifyUserType", req, resp, cb);
    }

    /**
     * This API is used to get detailed information about working groups.
     * @param {DescribeWorkGroupInfoRequest} req
     * @param {function(string, DescribeWorkGroupInfoResponse):void} cb
     * @public
     */
    DescribeWorkGroupInfo(req, cb) {
        let resp = new DescribeWorkGroupInfoResponse();
        this.request("DescribeWorkGroupInfo", req, resp, cb);
    }

    /**
     * This API is used to delete working groups.
     * @param {DeleteWorkGroupRequest} req
     * @param {function(string, DeleteWorkGroupResponse):void} cb
     * @public
     */
    DeleteWorkGroup(req, cb) {
        let resp = new DeleteWorkGroupResponse();
        this.request("DeleteWorkGroup", req, resp, cb);
    }

    /**
     * This API is used to obtain detailed data engine information based on names.
     * @param {DescribeDataEngineRequest} req
     * @param {function(string, DescribeDataEngineResponse):void} cb
     * @public
     */
    DescribeDataEngine(req, cb) {
        let resp = new DescribeDataEngineResponse();
        this.request("DescribeDataEngine", req, resp, cb);
    }

    /**
     * This API is used to add or overwrite the storage location of results.
     * @param {CreateStoreLocationRequest} req
     * @param {function(string, CreateStoreLocationResponse):void} cb
     * @public
     */
    CreateStoreLocation(req, cb) {
        let resp = new CreateStoreLocationResponse();
        this.request("CreateStoreLocation", req, resp, cb);
    }

    /**
     * This API is used to switch between the primary and standby clusters.
     * @param {SwitchDataEngineRequest} req
     * @param {function(string, SwitchDataEngineResponse):void} cb
     * @public
     */
    SwitchDataEngine(req, cb) {
        let resp = new SwitchDataEngineResponse();
        this.request("SwitchDataEngine", req, resp, cb);
    }

    /**
     * This API is used to query Spark SQL batch task logs.
     * @param {DescribeSparkSessionBatchSqlLogRequest} req
     * @param {function(string, DescribeSparkSessionBatchSqlLogResponse):void} cb
     * @public
     */
    DescribeSparkSessionBatchSqlLog(req, cb) {
        let resp = new DescribeSparkSessionBatchSqlLogResponse();
        this.request("DescribeSparkSessionBatchSqlLog", req, resp, cb);
    }

    /**
     * This API is used to query the DLC Catalog authorization list.
     * @param {DescribeDLCCatalogAccessRequest} req
     * @param {function(string, DescribeDLCCatalogAccessResponse):void} cb
     * @public
     */
    DescribeDLCCatalogAccess(req, cb) {
        let resp = new DescribeDLCCatalogAccessResponse();
        this.request("DescribeDLCCatalogAccess", req, resp, cb);
    }

    /**
     * This API is used to get the types of users.
     * @param {DescribeUserTypeRequest} req
     * @param {function(string, DescribeUserTypeResponse):void} cb
     * @public
     */
    DescribeUserType(req, cb) {
        let resp = new DescribeUserTypeResponse();
        this.request("DescribeUserType", req, resp, cb);
    }

    /**
     * This API is used to query the list of tasks.
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * This API is used to query the summary of a specified directory in a managed storage.
     * @param {DescribeLakeFsDirSummaryRequest} req
     * @param {function(string, DescribeLakeFsDirSummaryResponse):void} cb
     * @public
     */
    DescribeLakeFsDirSummary(req, cb) {
        let resp = new DescribeLakeFsDirSummaryResponse();
        this.request("DescribeLakeFsDirSummary", req, resp, cb);
    }

    /**
     * This API is used to start a Spark job.
     * @param {CreateSparkAppTaskRequest} req
     * @param {function(string, CreateSparkAppTaskResponse):void} cb
     * @public
     */
    CreateSparkAppTask(req, cb) {
        let resp = new CreateSparkAppTaskResponse();
        this.request("CreateSparkAppTask", req, resp, cb);
    }

    /**
     * This API is used to query the list of metadata acceleration buckets bound to other products.
     * @param {DescribeOtherCHDFSBindingListRequest} req
     * @param {function(string, DescribeOtherCHDFSBindingListResponse):void} cb
     * @public
     */
    DescribeOtherCHDFSBindingList(req, cb) {
        let resp = new DescribeOtherCHDFSBindingListResponse();
        this.request("DescribeOtherCHDFSBindingList", req, resp, cb);
    }

    /**
     * This API is used to switch the versions of the engine image.
     * @param {SwitchDataEngineImageRequest} req
     * @param {function(string, SwitchDataEngineImageResponse):void} cb
     * @public
     */
    SwitchDataEngineImage(req, cb) {
        let resp = new SwitchDataEngineImageResponse();
        this.request("SwitchDataEngineImage", req, resp, cb);
    }

    /**
     * This API is used to revoke permissions for visiting DLC Catalog.
     * @param {RevokeDLCCatalogAccessRequest} req
     * @param {function(string, RevokeDLCCatalogAccessResponse):void} cb
     * @public
     */
    RevokeDLCCatalogAccess(req, cb) {
        let resp = new RevokeDLCCatalogAccessResponse();
        this.request("RevokeDLCCatalogAccess", req, resp, cb);
    }

    /**
     * This API is used to create users.
     * @param {CreateUserRequest} req
     * @param {function(string, CreateUserResponse):void} cb
     * @public
     */
    CreateUser(req, cb) {
        let resp = new CreateUserResponse();
        this.request("CreateUser", req, resp, cb);
    }

    /**
     * This API is used to update row filters. Please note that it updates filters only but not catalogs, databases, or tables.
     * @param {UpdateRowFilterRequest} req
     * @param {function(string, UpdateRowFilterResponse):void} cb
     * @public
     */
    UpdateRowFilter(req, cb) {
        let resp = new UpdateRowFilterResponse();
        this.request("UpdateRowFilter", req, resp, cb);
    }

    /**
     * This API is used to query the advanced settings of the SQL query interface.
     * @param {DescribeAdvancedStoreLocationRequest} req
     * @param {function(string, DescribeAdvancedStoreLocationResponse):void} cb
     * @public
     */
    DescribeAdvancedStoreLocation(req, cb) {
        let resp = new DescribeAdvancedStoreLocationResponse();
        this.request("DescribeAdvancedStoreLocation", req, resp, cb);
    }

    /**
     * This API is used to query the list of Spark jobs.
     * @param {DescribeSparkAppJobsRequest} req
     * @param {function(string, DescribeSparkAppJobsResponse):void} cb
     * @public
     */
    DescribeSparkAppJobs(req, cb) {
        let resp = new DescribeSparkAppJobsResponse();
        this.request("DescribeSparkAppJobs", req, resp, cb);
    }

    /**
     * This API is used to obtain the user list.
     * @param {DescribeUsersRequest} req
     * @param {function(string, DescribeUsersResponse):void} cb
     * @public
     */
    DescribeUsers(req, cb) {
        let resp = new DescribeUsersResponse();
        this.request("DescribeUsers", req, resp, cb);
    }

    /**
     * This API is used to create and execute SQL tasks in batches.
     * @param {CreateTasksRequest} req
     * @param {function(string, CreateTasksResponse):void} cb
     * @public
     */
    CreateTasks(req, cb) {
        let resp = new CreateTasksResponse();
        this.request("CreateTasks", req, resp, cb);
    }

    /**
     * This API is used to modify working group information.
     * @param {ModifyWorkGroupRequest} req
     * @param {function(string, ModifyWorkGroupResponse):void} cb
     * @public
     */
    ModifyWorkGroup(req, cb) {
        let resp = new ModifyWorkGroupResponse();
        this.request("ModifyWorkGroup", req, resp, cb);
    }

    /**
     * This API is used to query the data table name list.
     * @param {DescribeTablesNameRequest} req
     * @param {function(string, DescribeTablesNameResponse):void} cb
     * @public
     */
    DescribeTablesName(req, cb) {
        let resp = new DescribeTablesNameResponse();
        this.request("DescribeTablesName", req, resp, cb);
    }

    /**
     * This API is used to delete the binding relationship between metadata acceleration buckets and products.
     * @param {DeleteCHDFSBindingProductRequest} req
     * @param {function(string, DeleteCHDFSBindingProductResponse):void} cb
     * @public
     */
    DeleteCHDFSBindingProduct(req, cb) {
        let resp = new DeleteCHDFSBindingProductResponse();
        this.request("DeleteCHDFSBindingProduct", req, resp, cb);
    }

    /**
     * This API is used to query the list of engines that are able to upgrade their configuration.
     * @param {DescribeUpdatableDataEnginesRequest} req
     * @param {function(string, DescribeUpdatableDataEnginesResponse):void} cb
     * @public
     */
    DescribeUpdatableDataEngines(req, cb) {
        let resp = new DescribeUpdatableDataEnginesResponse();
        this.request("DescribeUpdatableDataEngines", req, resp, cb);
    }

    /**
     * This API is used to create a managed internal table. It has been disused.
     * @param {CreateInternalTableRequest} req
     * @param {function(string, CreateInternalTableResponse):void} cb
     * @public
     */
    CreateInternalTable(req, cb) {
        let resp = new CreateInternalTableResponse();
        this.request("CreateInternalTable", req, resp, cb);
    }

    /**
     * This API is used to generate SQL statements for creating a managed table.
     * @param {GenerateCreateMangedTableSqlRequest} req
     * @param {function(string, GenerateCreateMangedTableSqlResponse):void} cb
     * @public
     */
    GenerateCreateMangedTableSql(req, cb) {
        let resp = new GenerateCreateMangedTableSqlResponse();
        this.request("GenerateCreateMangedTableSql", req, resp, cb);
    }

    /**
     * This API is used to bind an authentication policy to a working group.
     * @param {AttachWorkGroupPolicyRequest} req
     * @param {function(string, AttachWorkGroupPolicyResponse):void} cb
     * @public
     */
    AttachWorkGroupPolicy(req, cb) {
        let resp = new AttachWorkGroupPolicyResponse();
        this.request("AttachWorkGroupPolicy", req, resp, cb);
    }

    /**
     * This API is used to query engine specification details.
     * @param {DescribeDataEnginesScaleDetailRequest} req
     * @param {function(string, DescribeDataEnginesScaleDetailResponse):void} cb
     * @public
     */
    DescribeDataEnginesScaleDetail(req, cb) {
        let resp = new DescribeDataEnginesScaleDetailResponse();
        this.request("DescribeDataEnginesScaleDetail", req, resp, cb);
    }

    /**
     * This API is used to create a Spark job.
     * @param {CreateSparkAppRequest} req
     * @param {function(string, CreateSparkAppResponse):void} cb
     * @public
     */
    CreateSparkApp(req, cb) {
        let resp = new CreateSparkAppResponse();
        this.request("CreateSparkApp", req, resp, cb);
    }

    /**
     * This API is used to query the information of users visiting through the third-party platform.
     * @param {DescribeThirdPartyAccessUserRequest} req
     * @param {function(string, DescribeThirdPartyAccessUserResponse):void} cb
     * @public
     */
    DescribeThirdPartyAccessUser(req, cb) {
        let resp = new DescribeThirdPartyAccessUserResponse();
        this.request("DescribeThirdPartyAccessUser", req, resp, cb);
    }

    /**
     * This API is used to roll back the versions of the engine image.
     * @param {RollbackDataEngineImageRequest} req
     * @param {function(string, RollbackDataEngineImageResponse):void} cb
     * @public
     */
    RollbackDataEngineImage(req, cb) {
        let resp = new RollbackDataEngineImageResponse();
        this.request("RollbackDataEngineImage", req, resp, cb);
    }

    /**
     * This API is used to query the sub-user's visiting policy for users accessing through the third-party platform.
     * @param {DescribeSubUserAccessPolicyRequest} req
     * @param {function(string, DescribeSubUserAccessPolicyResponse):void} cb
     * @public
     */
    DescribeSubUserAccessPolicy(req, cb) {
        let resp = new DescribeSubUserAccessPolicyResponse();
        this.request("DescribeSubUserAccessPolicy", req, resp, cb);
    }

    /**
     * This API is used to submit a Spark SQL batch task to the job engine.
     * @param {CreateSparkSessionBatchSQLRequest} req
     * @param {function(string, CreateSparkSessionBatchSQLResponse):void} cb
     * @public
     */
    CreateSparkSessionBatchSQL(req, cb) {
        let resp = new CreateSparkSessionBatchSQLResponse();
        this.request("CreateSparkSessionBatchSQL", req, resp, cb);
    }

    /**
     * This API is used to grant permissions for visiting DLC Catalog.
     * @param {GrantDLCCatalogAccessRequest} req
     * @param {function(string, GrantDLCCatalogAccessResponse):void} cb
     * @public
     */
    GrantDLCCatalogAccess(req, cb) {
        let resp = new GrantDLCCatalogAccessResponse();
        this.request("GrantDLCCatalogAccess", req, resp, cb);
    }

    /**
     * This API is used to suspend or start a data engine.
     * @param {SuspendResumeDataEngineRequest} req
     * @param {function(string, SuspendResumeDataEngineResponse):void} cb
     * @public
     */
    SuspendResumeDataEngine(req, cb) {
        let resp = new SuspendResumeDataEngineResponse();
        this.request("SuspendResumeDataEngine", req, resp, cb);
    }

    /**
     * This API is used to bind the authentication policy to the user.
     * @param {AttachUserPolicyRequest} req
     * @param {function(string, AttachUserPolicyResponse):void} cb
     * @public
     */
    AttachUserPolicy(req, cb) {
        let resp = new AttachUserPolicyResponse();
        this.request("AttachUserPolicy", req, resp, cb);
    }

    /**
     * This API is used to change data governance event thresholds.
     * @param {ModifyGovernEventRuleRequest} req
     * @param {function(string, ModifyGovernEventRuleResponse):void} cb
     * @public
     */
    ModifyGovernEventRule(req, cb) {
        let resp = new ModifyGovernEventRuleResponse();
        this.request("ModifyGovernEventRule", req, resp, cb);
    }

    /**
     * This API is used to create a query result download task.
     * @param {CreateResultDownloadRequest} req
     * @param {function(string, CreateResultDownloadResponse):void} cb
     * @public
     */
    CreateResultDownload(req, cb) {
        let resp = new CreateResultDownloadResponse();
        this.request("CreateResultDownload", req, resp, cb);
    }

    /**
     * This API is used to modify the advanced settings of the SQL query interface.
     * @param {ModifyAdvancedStoreLocationRequest} req
     * @param {function(string, ModifyAdvancedStoreLocationResponse):void} cb
     * @public
     */
    ModifyAdvancedStoreLocation(req, cb) {
        let resp = new ModifyAdvancedStoreLocationResponse();
        this.request("ModifyAdvancedStoreLocation", req, resp, cb);
    }

    /**
     * This API is used to modify the custom configuration of the user's engine.
     * @param {UpdateUserDataEngineConfigRequest} req
     * @param {function(string, UpdateUserDataEngineConfigResponse):void} cb
     * @public
     */
    UpdateUserDataEngineConfig(req, cb) {
        let resp = new UpdateUserDataEngineConfigResponse();
        this.request("UpdateUserDataEngineConfig", req, resp, cb);
    }

    /**
     * This API is used to modify Spark job parameters in batches.
     * @param {ModifySparkAppBatchRequest} req
     * @param {function(string, ModifySparkAppBatchResponse):void} cb
     * @public
     */
    ModifySparkAppBatch(req, cb) {
        let resp = new ModifySparkAppBatchResponse();
        this.request("ModifySparkAppBatch", req, resp, cb);
    }

    /**
     * This API is used to check whether the cluster image can be upgraded.
     * @param {CheckDataEngineImageCanBeUpgradeRequest} req
     * @param {function(string, CheckDataEngineImageCanBeUpgradeResponse):void} cb
     * @public
     */
    CheckDataEngineImageCanBeUpgrade(req, cb) {
        let resp = new CheckDataEngineImageCanBeUpgradeResponse();
        this.request("CheckDataEngineImageCanBeUpgrade", req, resp, cb);
    }

    /**
     * This API is used to delete a Spark job.
     * @param {DeleteSparkAppRequest} req
     * @param {function(string, DeleteSparkAppResponse):void} cb
     * @public
     */
    DeleteSparkApp(req, cb) {
        let resp = new DeleteSparkAppResponse();
        this.request("DeleteSparkApp", req, resp, cb);
    }

    /**
     * This API is used to get a query result download task.
     * @param {DescribeResultDownloadRequest} req
     * @param {function(string, DescribeResultDownloadResponse):void} cb
     * @public
     */
    DescribeResultDownload(req, cb) {
        let resp = new DescribeResultDownloadResponse();
        this.request("DescribeResultDownload", req, resp, cb);
    }

    /**
     * This API is used to query task consumption details.
     * @param {QueryTaskCostDetailRequest} req
     * @param {function(string, QueryTaskCostDetailResponse):void} cb
     * @public
     */
    QueryTaskCostDetail(req, cb) {
        let resp = new QueryTaskCostDetailResponse();
        this.request("QueryTaskCostDetail", req, resp, cb);
    }

    /**
     * This API is used to create working groups.
     * @param {CreateWorkGroupRequest} req
     * @param {function(string, CreateWorkGroupResponse):void} cb
     * @public
     */
    CreateWorkGroup(req, cb) {
        let resp = new CreateWorkGroupResponse();
        this.request("CreateWorkGroup", req, resp, cb);
    }

    /**
     * This API is used to create metadata acceleration buckets and the binding relationship between products.
     * @param {CreateCHDFSBindingProductRequest} req
     * @param {function(string, CreateCHDFSBindingProductResponse):void} cb
     * @public
     */
    CreateCHDFSBindingProduct(req, cb) {
        let resp = new CreateCHDFSBindingProductResponse();
        this.request("CreateCHDFSBindingProduct", req, resp, cb);
    }

    /**
     * This API is used to check whether the cluster can be rolled back.
     * @param {CheckDataEngineImageCanBeRollbackRequest} req
     * @param {function(string, CheckDataEngineImageCanBeRollbackResponse):void} cb
     * @public
     */
    CheckDataEngineImageCanBeRollback(req, cb) {
        let resp = new CheckDataEngineImageCanBeRollbackResponse();
        this.request("CheckDataEngineImageCanBeRollback", req, resp, cb);
    }

    /**
     * This API is used to cancel a Spark SQL batch task.
     * @param {CancelSparkSessionBatchSQLRequest} req
     * @param {function(string, CancelSparkSessionBatchSQLResponse):void} cb
     * @public
     */
    CancelSparkSessionBatchSQL(req, cb) {
        let resp = new CancelSparkSessionBatchSQLResponse();
        this.request("CancelSparkSessionBatchSQL", req, resp, cb);
    }

    /**
     * This API is used to cancel a task.
     * @param {CancelTaskRequest} req
     * @param {function(string, CancelTaskResponse):void} cb
     * @public
     */
    CancelTask(req, cb) {
        let resp = new CancelTaskResponse();
        this.request("CancelTask", req, resp, cb);
    }

    /**
     * This API is used to update a Spark job.
     * @param {ModifySparkAppRequest} req
     * @param {function(string, ModifySparkAppResponse):void} cb
     * @public
     */
    ModifySparkApp(req, cb) {
        let resp = new ModifySparkAppResponse();
        this.request("ModifySparkApp", req, resp, cb);
    }

    /**
     * GetOptimizerPolicy
     * @param {GetOptimizerPolicyRequest} req
     * @param {function(string, GetOptimizerPolicyResponse):void} cb
     * @public
     */
    GetOptimizerPolicy(req, cb) {
        let resp = new GetOptimizerPolicyResponse();
        this.request("GetOptimizerPolicy", req, resp, cb);
    }

    /**
     * This API is used to get detailed user information.
     * @param {DescribeUserInfoRequest} req
     * @param {function(string, DescribeUserInfoResponse):void} cb
     * @public
     */
    DescribeUserInfo(req, cb) {
        let resp = new DescribeUserInfoResponse();
        this.request("DescribeUserInfo", req, resp, cb);
    }

    /**
     * This API is used to upgrade data engine configuration.
     * @param {UpdateDataEngineRequest} req
     * @param {function(string, UpdateDataEngineResponse):void} cb
     * @public
     */
    UpdateDataEngine(req, cb) {
        let resp = new UpdateDataEngineResponse();
        this.request("UpdateDataEngine", req, resp, cb);
    }

    /**
     * This API is used to check the validity of the engine's user-defined parameters.
     * @param {CheckDataEngineConfigPairsValidityRequest} req
     * @param {function(string, CheckDataEngineConfigPairsValidityResponse):void} cb
     * @public
     */
    CheckDataEngineConfigPairsValidity(req, cb) {
        let resp = new CheckDataEngineConfigPairsValidityResponse();
        this.request("CheckDataEngineConfigPairsValidity", req, resp, cb);
    }

    /**
     * This API is used to delete the data engine.
     * @param {DeleteDataEngineRequest} req
     * @param {function(string, DeleteDataEngineResponse):void} cb
     * @public
     */
    DeleteDataEngine(req, cb) {
        let resp = new DeleteDataEngineResponse();
        this.request("DeleteDataEngine", req, resp, cb);
    }

    /**
     * This API is used to delete users.
     * @param {DeleteUserRequest} req
     * @param {function(string, DeleteUserResponse):void} cb
     * @public
     */
    DeleteUser(req, cb) {
        let resp = new DeleteUserResponse();
        this.request("DeleteUser", req, resp, cb);
    }

    /**
     * This API is used to query the resource usage of a data engine based on its ID.
     * @param {DescribeEngineUsageInfoRequest} req
     * @param {function(string, DescribeEngineUsageInfoResponse):void} cb
     * @public
     */
    DescribeEngineUsageInfo(req, cb) {
        let resp = new DescribeEngineUsageInfoResponse();
        this.request("DescribeEngineUsageInfo", req, resp, cb);
    }

    /**
     * This API is used to trigger the modification of the engine configuration by the user through a certain operation.
     * @param {UpdateDataEngineConfigRequest} req
     * @param {function(string, UpdateDataEngineConfigResponse):void} cb
     * @public
     */
    UpdateDataEngineConfig(req, cb) {
        let resp = new UpdateDataEngineConfigResponse();
        this.request("UpdateDataEngineConfig", req, resp, cb);
    }

    /**
     * This API is used to obtain the major version image list of exclusive clusters.
     * @param {DescribeDataEngineImageVersionsRequest} req
     * @param {function(string, DescribeDataEngineImageVersionsResponse):void} cb
     * @public
     */
    DescribeDataEngineImageVersions(req, cb) {
        let resp = new DescribeDataEngineImageVersionsResponse();
        this.request("DescribeDataEngineImageVersions", req, resp, cb);
    }

    /**
     * This API is used to upgrade the engine image.
     * @param {UpgradeDataEngineImageRequest} req
     * @param {function(string, UpgradeDataEngineImageResponse):void} cb
     * @public
     */
    UpgradeDataEngineImage(req, cb) {
        let resp = new UpgradeDataEngineImageResponse();
        this.request("UpgradeDataEngineImage", req, resp, cb);
    }

    /**
     * This API is used to unbind the authentication policy from the user.
     * @param {DetachUserPolicyRequest} req
     * @param {function(string, DetachUserPolicyResponse):void} cb
     * @public
     */
    DetachUserPolicy(req, cb) {
        let resp = new DetachUserPolicyResponse();
        this.request("DetachUserPolicy", req, resp, cb);
    }

    /**
     * This API is used to unbind the authentication policy from the working group.
     * @param {DetachWorkGroupPolicyRequest} req
     * @param {function(string, DetachWorkGroupPolicyResponse):void} cb
     * @public
     */
    DetachWorkGroupPolicy(req, cb) {
        let resp = new DetachWorkGroupPolicyResponse();
        this.request("DetachWorkGroupPolicy", req, resp, cb);
    }

    /**
     * This API is used to query the result of obtaining tasks.
     * @param {QueryResultRequest} req
     * @param {function(string, QueryResultResponse):void} cb
     * @public
     */
    QueryResult(req, cb) {
        let resp = new QueryResultResponse();
        this.request("QueryResult", req, resp, cb);
    }

    /**
     * This API is used to enable visits to the third-party platform.
     * @param {RegisterThirdPartyAccessUserRequest} req
     * @param {function(string, RegisterThirdPartyAccessUserResponse):void} cb
     * @public
     */
    RegisterThirdPartyAccessUser(req, cb) {
        let resp = new RegisterThirdPartyAccessUserResponse();
        this.request("RegisterThirdPartyAccessUser", req, resp, cb);
    }

    /**
     * This API is used to delete users from working groups.
     * @param {DeleteUsersFromWorkGroupRequest} req
     * @param {function(string, DeleteUsersFromWorkGroupResponse):void} cb
     * @public
     */
    DeleteUsersFromWorkGroup(req, cb) {
        let resp = new DeleteUsersFromWorkGroupResponse();
        this.request("DeleteUsersFromWorkGroup", req, resp, cb);
    }

    /**
     * This API is used to create a data engine.
     * @param {CreateDataEngineRequest} req
     * @param {function(string, CreateDataEngineResponse):void} cb
     * @public
     */
    CreateDataEngine(req, cb) {
        let resp = new CreateDataEngineResponse();
        this.request("CreateDataEngine", req, resp, cb);
    }

    /**
     * This API is used to unbind a user group from a user.
     * @param {UnbindWorkGroupsFromUserRequest} req
     * @param {function(string, UnbindWorkGroupsFromUserResponse):void} cb
     * @public
     */
    UnbindWorkGroupsFromUser(req, cb) {
        let resp = new UnbindWorkGroupsFromUserResponse();
        this.request("UnbindWorkGroupsFromUser", req, resp, cb);
    }

    /**
     * This API is used to get a list of working groups.
     * @param {DescribeWorkGroupsRequest} req
     * @param {function(string, DescribeWorkGroupsResponse):void} cb
     * @public
     */
    DescribeWorkGroups(req, cb) {
        let resp = new DescribeWorkGroupsResponse();
        this.request("DescribeWorkGroups", req, resp, cb);
    }

    /**
     * This API is used to restart engines.
     * @param {RestartDataEngineRequest} req
     * @param {function(string, RestartDataEngineResponse):void} cb
     * @public
     */
    RestartDataEngine(req, cb) {
        let resp = new RestartDataEngineResponse();
        this.request("RestartDataEngine", req, resp, cb);
    }

    /**
     * This API is used to renew the data engine.
     * @param {RenewDataEngineRequest} req
     * @param {function(string, RenewDataEngineResponse):void} cb
     * @public
     */
    RenewDataEngine(req, cb) {
        let resp = new RenewDataEngineResponse();
        this.request("RenewDataEngine", req, resp, cb);
    }

    /**
     * This API is used to remove visits through the third-party platform.
     * @param {DeleteThirdPartyAccessUserRequest} req
     * @param {function(string, DeleteThirdPartyAccessUserResponse):void} cb
     * @public
     */
    DeleteThirdPartyAccessUser(req, cb) {
        let resp = new DeleteThirdPartyAccessUserResponse();
        this.request("DeleteThirdPartyAccessUser", req, resp, cb);
    }

    /**
     * This API is used to bind working groups to users.
     * @param {BindWorkGroupsToUserRequest} req
     * @param {function(string, BindWorkGroupsToUserResponse):void} cb
     * @public
     */
    BindWorkGroupsToUser(req, cb) {
        let resp = new BindWorkGroupsToUserResponse();
        this.request("BindWorkGroupsToUser", req, resp, cb);
    }

    /**
     * This API is used to query user-defined engine parameters.
     * @param {DescribeUserDataEngineConfigRequest} req
     * @param {function(string, DescribeUserDataEngineConfigResponse):void} cb
     * @public
     */
    DescribeUserDataEngineConfig(req, cb) {
        let resp = new DescribeUserDataEngineConfigResponse();
        this.request("DescribeUserDataEngineConfig", req, resp, cb);
    }

    /**
     * This API is used to modify user information.
     * @param {ModifyUserRequest} req
     * @param {function(string, ModifyUserResponse):void} cb
     * @public
     */
    ModifyUser(req, cb) {
        let resp = new ModifyUserResponse();
        this.request("ModifyUser", req, resp, cb);
    }

    /**
     * This API is used to modify the engine's description.
     * @param {ModifyDataEngineDescriptionRequest} req
     * @param {function(string, ModifyDataEngineDescriptionResponse):void} cb
     * @public
     */
    ModifyDataEngineDescription(req, cb) {
        let resp = new ModifyDataEngineDescriptionResponse();
        this.request("ModifyDataEngineDescription", req, resp, cb);
    }

    /**
     * This API is used to query the storage location of calculation results.
     * @param {DescribeStoreLocationRequest} req
     * @param {function(string, DescribeStoreLocationResponse):void} cb
     * @public
     */
    DescribeStoreLocation(req, cb) {
        let resp = new DescribeStoreLocationResponse();
        this.request("DescribeStoreLocation", req, resp, cb);
    }

    /**
     * u200cThis API is used to query the information of a Spark job.
     * @param {DescribeSparkAppJobRequest} req
     * @param {function(string, DescribeSparkAppJobResponse):void} cb
     * @public
     */
    DescribeSparkAppJob(req, cb) {
        let resp = new DescribeSparkAppJobResponse();
        this.request("DescribeSparkAppJob", req, resp, cb);
    }

    /**
     * This API is used to query the list of running task instances of a Spark job.
     * @param {DescribeSparkAppTasksRequest} req
     * @param {function(string, DescribeSparkAppTasksResponse):void} cb
     * @public
     */
    DescribeSparkAppTasks(req, cb) {
        let resp = new DescribeSparkAppTasksResponse();
        this.request("DescribeSparkAppTasks", req, resp, cb);
    }

    /**
     * This API is used to obtain the PYSPARK image list.
     * @param {DescribeDataEnginePythonSparkImagesRequest} req
     * @param {function(string, DescribeDataEnginePythonSparkImagesResponse):void} cb
     * @public
     */
    DescribeDataEnginePythonSparkImages(req, cb) {
        let resp = new DescribeDataEnginePythonSparkImagesResponse();
        this.request("DescribeDataEnginePythonSparkImages", req, resp, cb);
    }

    /**
     * This API is used to query managed storage information.
     * @param {DescribeLakeFsInfoRequest} req
     * @param {function(string, DescribeLakeFsInfoResponse):void} cb
     * @public
     */
    DescribeLakeFsInfo(req, cb) {
        let resp = new DescribeLakeFsInfoResponse();
        this.request("DescribeLakeFsInfo", req, resp, cb);
    }


}
module.exports = DlcClient;
