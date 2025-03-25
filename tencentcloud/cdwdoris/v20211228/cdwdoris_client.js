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
const UpdateDatabaseRequest = models.UpdateDatabaseRequest;
const DescribeInstanceUsedSubnetsResponse = models.DescribeInstanceUsedSubnetsResponse;
const DescribeInstanceNodesResponse = models.DescribeInstanceNodesResponse;
const DescribeClusterConfigsHistoryResponse = models.DescribeClusterConfigsHistoryResponse;
const DescribeInstanceOperationsRequest = models.DescribeInstanceOperationsRequest;
const DescribeClusterConfigsResponse = models.DescribeClusterConfigsResponse;
const ScaleOutInstanceResponse = models.ScaleOutInstanceResponse;
const ModifyNodeStatusResponse = models.ModifyNodeStatusResponse;
const ModifyUserPrivilegesV3Response = models.ModifyUserPrivilegesV3Response;
const UpdateTableSchemaResponse = models.UpdateTableSchemaResponse;
const ModifyUserPrivilegesV3Request = models.ModifyUserPrivilegesV3Request;
const DestroyInstanceRequest = models.DestroyInstanceRequest;
const BindUser = models.BindUser;
const CancelBackupJobRequest = models.CancelBackupJobRequest;
const ModifyWorkloadGroupRequest = models.ModifyWorkloadGroupRequest;
const UserWorkloadGroup = models.UserWorkloadGroup;
const DescribeSlowQueryRecordsDownloadResponse = models.DescribeSlowQueryRecordsDownloadResponse;
const DeleteWorkloadGroupRequest = models.DeleteWorkloadGroupRequest;
const WorkloadGroupConfig = models.WorkloadGroupConfig;
const DescribeInstanceOperationHistoryResponse = models.DescribeInstanceOperationHistoryResponse;
const InsertDatasToTableRequest = models.InsertDatasToTableRequest;
const InstanceDetail = models.InstanceDetail;
const ModifyDatabaseTableAccessRequest = models.ModifyDatabaseTableAccessRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const CosSourceInfo = models.CosSourceInfo;
const ReduceInstanceResponse = models.ReduceInstanceResponse;
const ModifyCoolDownPolicyRequest = models.ModifyCoolDownPolicyRequest;
const DescribeBackUpTaskDetailRequest = models.DescribeBackUpTaskDetailRequest;
const RecoverBackUpJobRequest = models.RecoverBackUpJobRequest;
const DiskSpec = models.DiskSpec;
const DescribeInstanceOperationsResponse = models.DescribeInstanceOperationsResponse;
const DescribeUserBindWorkloadGroupResponse = models.DescribeUserBindWorkloadGroupResponse;
const CreateTablesDDL = models.CreateTablesDDL;
const ScaleOutInstanceRequest = models.ScaleOutInstanceRequest;
const UpdateUserPrivileges = models.UpdateUserPrivileges;
const ModifyClusterConfigsRequest = models.ModifyClusterConfigsRequest;
const DescribeQueryAnalyseRequest = models.DescribeQueryAnalyseRequest;
const DescribeInstanceStateRequest = models.DescribeInstanceStateRequest;
const NetworkInfo = models.NetworkInfo;
const ZoneInfo = models.ZoneInfo;
const DescribeAreaRegionResponse = models.DescribeAreaRegionResponse;
const DeleteBackUpDataRequest = models.DeleteBackUpDataRequest;
const ExecuteParametrizedQueryResponse = models.ExecuteParametrizedQueryResponse;
const CreateDatabaseRequest = models.CreateDatabaseRequest;
const ConfigKeyValue = models.ConfigKeyValue;
const Tag = models.Tag;
const ResizeDiskResponse = models.ResizeDiskResponse;
const OpenCoolDownRequest = models.OpenCoolDownRequest;
const DescribeCoolDownTableDataRequest = models.DescribeCoolDownTableDataRequest;
const CheckCoolDownWorkingVariableConfigCorrectResponse = models.CheckCoolDownWorkingVariableConfigCorrectResponse;
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const DescribeSlowQueryRecordsDownloadRequest = models.DescribeSlowQueryRecordsDownloadRequest;
const DescribeRestoreTaskDetailResponse = models.DescribeRestoreTaskDetailResponse;
const DescribeUserPolicyResponse = models.DescribeUserPolicyResponse;
const ModifyNodeStatusRequest = models.ModifyNodeStatusRequest;
const DescribeCreateTablesDDLRequest = models.DescribeCreateTablesDDLRequest;
const RestartClusterForNodeResponse = models.RestartClusterForNodeResponse;
const UpdateTableSchemaRequest = models.UpdateTableSchemaRequest;
const CatalogPermission = models.CatalogPermission;
const CancelBackupJobResponse = models.CancelBackupJobResponse;
const DescribeAreaRegionRequest = models.DescribeAreaRegionRequest;
const SlowQueryRecord = models.SlowQueryRecord;
const DescribeInstanceNodesRequest = models.DescribeInstanceNodesRequest;
const ChargeProperties = models.ChargeProperties;
const DescribeWorkloadGroupRequest = models.DescribeWorkloadGroupRequest;
const DescribeCoolDownBackendsRequest = models.DescribeCoolDownBackendsRequest;
const CheckCoolDownWorkingVariableConfigCorrectRequest = models.CheckCoolDownWorkingVariableConfigCorrectRequest;
const InstanceOperation = models.InstanceOperation;
const BackupTableContent = models.BackupTableContent;
const CreateInstanceNewResponse = models.CreateInstanceNewResponse;
const DescribeSqlApisRequest = models.DescribeSqlApisRequest;
const ModifySecurityGroupsRequest = models.ModifySecurityGroupsRequest;
const PermissionHostInfo = models.PermissionHostInfo;
const CreateInstanceNewRequest = models.CreateInstanceNewRequest;
const DescribeDatabaseResponse = models.DescribeDatabaseResponse;
const UpdateCoolDownRequest = models.UpdateCoolDownRequest;
const Partition = models.Partition;
const CoolDownPolicyInfo = models.CoolDownPolicyInfo;
const OpenCoolDownPolicyRequest = models.OpenCoolDownPolicyRequest;
const RangeInfo = models.RangeInfo;
const DorisSourceInfo = models.DorisSourceInfo;
const OpenCoolDownResponse = models.OpenCoolDownResponse;
const AttachCBSSpec = models.AttachCBSSpec;
const DataBaseAuditRecord = models.DataBaseAuditRecord;
const CopyTableDatasResponse = models.CopyTableDatasResponse;
const ClusterConfigsHistory = models.ClusterConfigsHistory;
const InstanceConfigItem = models.InstanceConfigItem;
const Distribution = models.Distribution;
const AccountDetailInfo = models.AccountDetailInfo;
const CreateTableRequest = models.CreateTableRequest;
const Property = models.Property;
const TablePermissions = models.TablePermissions;
const CreateBackUpScheduleRequest = models.CreateBackUpScheduleRequest;
const DeleteTableRequest = models.DeleteTableRequest;
const ActionAlterUserResponse = models.ActionAlterUserResponse;
const BackupCosInfo = models.BackupCosInfo;
const DescribeClusterConfigsHistoryRequest = models.DescribeClusterConfigsHistoryRequest;
const DeleteTableResponse = models.DeleteTableResponse;
const CreateWorkloadGroupRequest = models.CreateWorkloadGroupRequest;
const DescribeInstanceNodesInfoRequest = models.DescribeInstanceNodesInfoRequest;
const DescribeInstancesHealthStateResponse = models.DescribeInstancesHealthStateResponse;
const DescribeDatabaseAuditDownloadRequest = models.DescribeDatabaseAuditDownloadRequest;
const DescribeInstanceNodesRoleResponse = models.DescribeInstanceNodesRoleResponse;
const ExecuteSelectQueryResponse = models.ExecuteSelectQueryResponse;
const DestroyInstanceResponse = models.DestroyInstanceResponse;
const QueryTableDataResponse = models.QueryTableDataResponse;
const ResizeDiskRequest = models.ResizeDiskRequest;
const CopyTableDatasRequest = models.CopyTableDatasRequest;
const DescribeSlowQueryRecordsResponse = models.DescribeSlowQueryRecordsResponse;
const ModifyWorkloadGroupStatusRequest = models.ModifyWorkloadGroupStatusRequest;
const DbInfo = models.DbInfo;
const CreateCoolDownPolicyRequest = models.CreateCoolDownPolicyRequest;
const DescribeSqlApisResponse = models.DescribeSqlApisResponse;
const DescribeCreateTablesDDLResponse = models.DescribeCreateTablesDDLResponse;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const DescribeSpecResponse = models.DescribeSpecResponse;
const ModifyInstanceKeyValConfigsResponse = models.ModifyInstanceKeyValConfigsResponse;
const QueryDetails = models.QueryDetails;
const DescribeBackUpSchedulesResponse = models.DescribeBackUpSchedulesResponse;
const TablesDDL = models.TablesDDL;
const DescribeBackUpTablesResponse = models.DescribeBackUpTablesResponse;
const DescribeDatabaseAuditRecordsResponse = models.DescribeDatabaseAuditRecordsResponse;
const InstanceNode = models.InstanceNode;
const ModifyCoolDownPolicyResponse = models.ModifyCoolDownPolicyResponse;
const DescribeInstancesHealthStateRequest = models.DescribeInstancesHealthStateRequest;
const NodeInfo = models.NodeInfo;
const FrontEndRule = models.FrontEndRule;
const RestartClusterForConfigsResponse = models.RestartClusterForConfigsResponse;
const InstanceInfo = models.InstanceInfo;
const DescribeSlowQueryRecordsRequest = models.DescribeSlowQueryRecordsRequest;
const CreateTableResponse = models.CreateTableResponse;
const DescribeUserBindWorkloadGroupRequest = models.DescribeUserBindWorkloadGroupRequest;
const ScaleUpInstanceRequest = models.ScaleUpInstanceRequest;
const Column = models.Column;
const DescribeBackUpSchedulesRequest = models.DescribeBackUpSchedulesRequest;
const DescribeClusterConfigsRequest = models.DescribeClusterConfigsRequest;
const ExecuteSelectQueryRequest = models.ExecuteSelectQueryRequest;
const CreateCoolDownPolicyResponse = models.CreateCoolDownPolicyResponse;
const ModifyWorkloadGroupResponse = models.ModifyWorkloadGroupResponse;
const DescribeRestoreTaskDetailRequest = models.DescribeRestoreTaskDetailRequest;
const CreateBackUpScheduleResponse = models.CreateBackUpScheduleResponse;
const ModifyDatabaseTableAccessResponse = models.ModifyDatabaseTableAccessResponse;
const DescribeInstanceResponse = models.DescribeInstanceResponse;
const DescribeBackUpJobResponse = models.DescribeBackUpJobResponse;
const DescribeDatabaseRequest = models.DescribeDatabaseRequest;
const RestartClusterForNodeRequest = models.RestartClusterForNodeRequest;
const UpdateCoolDownResponse = models.UpdateCoolDownResponse;
const BackupStatus = models.BackupStatus;
const SearchTags = models.SearchTags;
const UserInfo = models.UserInfo;
const DescribeInstanceUsedSubnetsRequest = models.DescribeInstanceUsedSubnetsRequest;
const ListInfo = models.ListInfo;
const QueryTableDataRequest = models.QueryTableDataRequest;
const DescribeDatabaseAuditRecordsRequest = models.DescribeDatabaseAuditRecordsRequest;
const DescribeUserPolicyRequest = models.DescribeUserPolicyRequest;
const DescribeBackUpJobDetailResponse = models.DescribeBackUpJobDetailResponse;
const DescribeBackUpJobDetailRequest = models.DescribeBackUpJobDetailRequest;
const DescribeCoolDownBackendsResponse = models.DescribeCoolDownBackendsResponse;
const DescribeCoolDownPoliciesResponse = models.DescribeCoolDownPoliciesResponse;
const DescribeTableListRequest = models.DescribeTableListRequest;
const DescribeWorkloadGroupResponse = models.DescribeWorkloadGroupResponse;
const CoolDownTableDataInfo = models.CoolDownTableDataInfo;
const ModifySecurityGroupsResponse = models.ModifySecurityGroupsResponse;
const DescribeTableRequest = models.DescribeTableRequest;
const DescribeSpecRequest = models.DescribeSpecRequest;
const CoolDownBackend = models.CoolDownBackend;
const DescribeBackUpTaskDetailResponse = models.DescribeBackUpTaskDetailResponse;
const DatabasePermissions = models.DatabasePermissions;
const ReduceInstanceRequest = models.ReduceInstanceRequest;
const InsertDatasToTableResponse = models.InsertDatasToTableResponse;
const DeleteWorkloadGroupResponse = models.DeleteWorkloadGroupResponse;
const UpdateDatabaseResponse = models.UpdateDatabaseResponse;
const DescribeInstanceOperationHistoryRequest = models.DescribeInstanceOperationHistoryRequest;
const DescribeCoolDownTableDataResponse = models.DescribeCoolDownTableDataResponse;
const DescribeQueryAnalyseResponse = models.DescribeQueryAnalyseResponse;
const IndexInfo = models.IndexInfo;
const ModifyWorkloadGroupStatusResponse = models.ModifyWorkloadGroupStatusResponse;
const OpenCoolDownPolicyResponse = models.OpenCoolDownPolicyResponse;
const ExecuteParametrizedQueryRequest = models.ExecuteParametrizedQueryRequest;
const ConfigSubmitContext = models.ConfigSubmitContext;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const RegionInfo = models.RegionInfo;
const Rows = models.Rows;
const RestartClusterForConfigsRequest = models.RestartClusterForConfigsRequest;
const CreateWorkloadGroupResponse = models.CreateWorkloadGroupResponse;
const DescribeInstanceStateResponse = models.DescribeInstanceStateResponse;
const CreateDatabaseResponse = models.CreateDatabaseResponse;
const PropertiesMap = models.PropertiesMap;
const DescribeCoolDownPoliciesRequest = models.DescribeCoolDownPoliciesRequest;
const ResourceSpec = models.ResourceSpec;
const ModifyClusterConfigsResponse = models.ModifyClusterConfigsResponse;
const RestoreStatus = models.RestoreStatus;
const DeleteBackUpDataResponse = models.DeleteBackUpDataResponse;
const ModifyInstanceKeyValConfigsRequest = models.ModifyInstanceKeyValConfigsRequest;
const BackUpJobDisplay = models.BackUpJobDisplay;
const ModifyUserBindWorkloadGroupResponse = models.ModifyUserBindWorkloadGroupResponse;
const ClusterConfigsInfoFromEMR = models.ClusterConfigsInfoFromEMR;
const RecoverBackUpJobResponse = models.RecoverBackUpJobResponse;
const DescribeTableResponse = models.DescribeTableResponse;
const DescribeTableListResponse = models.DescribeTableListResponse;
const ModifyUserBindWorkloadGroupRequest = models.ModifyUserBindWorkloadGroupRequest;
const NodesSummary = models.NodesSummary;
const CreateInstanceSpec = models.CreateInstanceSpec;
const DbTablesInfo = models.DbTablesInfo;
const DescribeInstanceRequest = models.DescribeInstanceRequest;
const DescribeBackUpJobRequest = models.DescribeBackUpJobRequest;
const ActionAlterUserRequest = models.ActionAlterUserRequest;
const DescribeBackUpTablesRequest = models.DescribeBackUpTablesRequest;
const RegionAreaInfo = models.RegionAreaInfo;
const DescribeInstanceNodesRoleRequest = models.DescribeInstanceNodesRoleRequest;
const DescribeDatabaseAuditDownloadResponse = models.DescribeDatabaseAuditDownloadResponse;
const NodeInfos = models.NodeInfos;
const DescribeInstanceNodesInfoResponse = models.DescribeInstanceNodesInfoResponse;
const ScaleUpInstanceResponse = models.ScaleUpInstanceResponse;


/**
 * cdwdoris client
 * @class
 */
class CdwdorisClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdwdoris.intl.tencentcloudapi.com", "2021-12-28", credential, region, profile);
    }
    
    /**
     * This API is used to create or modify backup policies.
     * @param {CreateBackUpScheduleRequest} req
     * @param {function(string, CreateBackUpScheduleResponse):void} cb
     * @public
     */
    CreateBackUpSchedule(req, cb) {
        let resp = new CreateBackUpScheduleResponse();
        this.request("CreateBackUpSchedule", req, resp, cb);
    }

    /**
     * This API is used to copy the source table to the target table.
     * @param {CopyTableDatasRequest} req
     * @param {function(string, CopyTableDatasResponse):void} cb
     * @public
     */
    CopyTableDatas(req, cb) {
        let resp = new CopyTableDatasResponse();
        this.request("CopyTableDatas", req, resp, cb);
    }

    /**
     * This API is used to enable and describe the cold storage policy.
     * @param {OpenCoolDownPolicyRequest} req
     * @param {function(string, OpenCoolDownPolicyResponse):void} cb
     * @public
     */
    OpenCoolDownPolicy(req, cb) {
        let resp = new OpenCoolDownPolicyResponse();
        this.request("OpenCoolDownPolicy", req, resp, cb);
    }

    /**
     * This API is used to obtain the scheduled task information for the backup and migration.
     * @param {DescribeBackUpSchedulesRequest} req
     * @param {function(string, DescribeBackUpSchedulesResponse):void} cb
     * @public
     */
    DescribeBackUpSchedules(req, cb) {
        let resp = new DescribeBackUpSchedulesResponse();
        this.request("DescribeBackUpSchedules", req, resp, cb);
    }

    /**
     * This API is used to query the list of backup instances.
     * @param {DescribeBackUpJobRequest} req
     * @param {function(string, DescribeBackUpJobResponse):void} cb
     * @public
     */
    DescribeBackUpJob(req, cb) {
        let resp = new DescribeBackUpJobResponse();
        this.request("DescribeBackUpJob", req, resp, cb);
    }

    /**
     * This API is used to terminate clusters.
     * @param {DestroyInstanceRequest} req
     * @param {function(string, DestroyInstanceResponse):void} cb
     * @public
     */
    DestroyInstance(req, cb) {
        let resp = new DestroyInstanceResponse();
        this.request("DestroyInstance", req, resp, cb);
    }

    /**
     * This API is used to query the layered hot and cold data in a table.
     * @param {DescribeCoolDownTableDataRequest} req
     * @param {function(string, DescribeCoolDownTableDataResponse):void} cb
     * @public
     */
    DescribeCoolDownTableData(req, cb) {
        let resp = new DescribeCoolDownTableDataResponse();
        this.request("DescribeCoolDownTableData", req, resp, cb);
    }

    /**
     * This API is used to get database audit records.
     * @param {DescribeDatabaseAuditRecordsRequest} req
     * @param {function(string, DescribeDatabaseAuditRecordsResponse):void} cb
     * @public
     */
    DescribeDatabaseAuditRecords(req, cb) {
        let resp = new DescribeDatabaseAuditRecordsResponse();
        this.request("DescribeDatabaseAuditRecords", req, resp, cb);
    }

    /**
     * This API is used to query the progress details of the recovery task.
     * @param {DescribeRestoreTaskDetailRequest} req
     * @param {function(string, DescribeRestoreTaskDetailResponse):void} cb
     * @public
     */
    DescribeRestoreTaskDetail(req, cb) {
        let resp = new DescribeRestoreTaskDetailResponse();
        this.request("DescribeRestoreTaskDetail", req, resp, cb);
    }

    /**
     * This API is used to create resource groups.
     * @param {CreateWorkloadGroupRequest} req
     * @param {function(string, CreateWorkloadGroupResponse):void} cb
     * @public
     */
    CreateWorkloadGroup(req, cb) {
        let resp = new CreateWorkloadGroupResponse();
        this.request("CreateWorkloadGroup", req, resp, cb);
    }

    /**
     * This API is used to download database audit logs.
     * @param {DescribeDatabaseAuditDownloadRequest} req
     * @param {function(string, DescribeDatabaseAuditDownloadResponse):void} cb
     * @public
     */
    DescribeDatabaseAuditDownload(req, cb) {
        let resp = new DescribeDatabaseAuditDownloadResponse();
        this.request("DescribeDatabaseAuditDownload", req, resp, cb);
    }

    /**
     * This API is used to obtain the resource information bound to each user in the current cluster.
     * @param {DescribeUserBindWorkloadGroupRequest} req
     * @param {function(string, DescribeUserBindWorkloadGroupResponse):void} cb
     * @public
     */
    DescribeUserBindWorkloadGroup(req, cb) {
        let resp = new DescribeUserBindWorkloadGroupResponse();
        this.request("DescribeUserBindWorkloadGroup", req, resp, cb);
    }

    /**
     * This API is used to create a TCHouse-D table under the specified database.
     * @param {CreateTableRequest} req
     * @param {function(string, CreateTableResponse):void} cb
     * @public
     */
    CreateTable(req, cb) {
        let resp = new CreateTableResponse();
        this.request("CreateTable", req, resp, cb);
    }

    /**
     * This API is used to get the BE/FE node roles.
     * @param {DescribeInstanceNodesInfoRequest} req
     * @param {function(string, DescribeInstanceNodesInfoResponse):void} cb
     * @public
     */
    DescribeInstanceNodesInfo(req, cb) {
        let resp = new DescribeInstanceNodesInfoResponse();
        this.request("DescribeInstanceNodesInfo", req, resp, cb);
    }

    /**
     * This API is used to obtain the information of subnets used by the cluster.
     * @param {DescribeInstanceUsedSubnetsRequest} req
     * @param {function(string, DescribeInstanceUsedSubnetsResponse):void} cb
     * @public
     */
    DescribeInstanceUsedSubnets(req, cb) {
        let resp = new DescribeInstanceUsedSubnetsResponse();
        this.request("DescribeInstanceUsedSubnets", req, resp, cb);
    }

    /**
     * This API is used to scale in clusters.
     * @param {ReduceInstanceRequest} req
     * @param {function(string, ReduceInstanceResponse):void} cb
     * @public
     */
    ReduceInstance(req, cb) {
        let resp = new ReduceInstanceResponse();
        this.request("ReduceInstance", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of tables under the specified data source and database.
     * @param {DescribeTableListRequest} req
     * @param {function(string, DescribeTableListResponse):void} cb
     * @public
     */
    DescribeTableList(req, cb) {
        let resp = new DescribeTableListResponse();
        this.request("DescribeTableList", req, resp, cb);
    }

    /**
     * This API is used to obtain the information of the table available for backup.
     * @param {DescribeBackUpTablesRequest} req
     * @param {function(string, DescribeBackUpTablesResponse):void} cb
     * @public
     */
    DescribeBackUpTables(req, cb) {
        let resp = new DescribeBackUpTablesResponse();
        this.request("DescribeBackUpTables", req, resp, cb);
    }

    /**
     * This API is used to horizontally scale out nodes.
     * @param {ScaleOutInstanceRequest} req
     * @param {function(string, ScaleOutInstanceResponse):void} cb
     * @public
     */
    ScaleOutInstance(req, cb) {
        let resp = new ScaleOutInstanceResponse();
        this.request("ScaleOutInstance", req, resp, cb);
    }

    /**
     * This API is used to change the node status.
     * @param {ModifyNodeStatusRequest} req
     * @param {function(string, ModifyNodeStatusResponse):void} cb
     * @public
     */
    ModifyNodeStatus(req, cb) {
        let resp = new ModifyNodeStatusResponse();
        this.request("ModifyNodeStatus", req, resp, cb);
    }

    /**
     * This API is used to obtain the modification history of cluster configuration files.
     * @param {DescribeClusterConfigsHistoryRequest} req
     * @param {function(string, DescribeClusterConfigsHistoryResponse):void} cb
     * @public
     */
    DescribeClusterConfigsHistory(req, cb) {
        let resp = new DescribeClusterConfigsHistoryResponse();
        this.request("DescribeClusterConfigsHistory", req, resp, cb);
    }

    /**
     * This API is used to get the slow log list.
     * @param {DescribeSlowQueryRecordsRequest} req
     * @param {function(string, DescribeSlowQueryRecordsResponse):void} cb
     * @public
     */
    DescribeSlowQueryRecords(req, cb) {
        let resp = new DescribeSlowQueryRecordsResponse();
        this.request("DescribeSlowQueryRecords", req, resp, cb);
    }

    /**
     * This API is used to back up and recover.
     * @param {RecoverBackUpJobRequest} req
     * @param {function(string, RecoverBackUpJobResponse):void} cb
     * @public
     */
    RecoverBackUpJob(req, cb) {
        let resp = new RecoverBackUpJobResponse();
        this.request("RecoverBackUpJob", req, resp, cb);
    }

    /**
     * This API is used to modify the resource group bound to the user.
     * @param {ModifyUserBindWorkloadGroupRequest} req
     * @param {function(string, ModifyUserBindWorkloadGroupResponse):void} cb
     * @public
     */
    ModifyUserBindWorkloadGroup(req, cb) {
        let resp = new ModifyUserBindWorkloadGroupResponse();
        this.request("ModifyUserBindWorkloadGroup", req, resp, cb);
    }

    /**
     * This API is used to delete backup data.
     * @param {DeleteBackUpDataRequest} req
     * @param {function(string, DeleteBackUpDataResponse):void} cb
     * @public
     */
    DeleteBackUpData(req, cb) {
        let resp = new DeleteBackUpDataResponse();
        this.request("DeleteBackUpData", req, resp, cb);
    }

    /**
     * This API is used to get the list of clusters.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to query data according to the specified database and table name, and support field selection and pagination.
     * @param {ExecuteSelectQueryRequest} req
     * @param {function(string, ExecuteSelectQueryResponse):void} cb
     * @public
     */
    ExecuteSelectQuery(req, cb) {
        let resp = new ExecuteSelectQueryResponse();
        this.request("ExecuteSelectQuery", req, resp, cb);
    }

    /**
     * This API is used to expand cloud disks.
     * @param {ResizeDiskRequest} req
     * @param {function(string, ResizeDiskResponse):void} cb
     * @public
     */
    ResizeDisk(req, cb) {
        let resp = new ResizeDiskResponse();
        this.request("ResizeDisk", req, resp, cb);
    }

    /**
     * This API is used to modify the XML cluster configuration file on the cluster configuration page.
     * @param {ModifyClusterConfigsRequest} req
     * @param {function(string, ModifyClusterConfigsResponse):void} cb
     * @public
     */
    ModifyClusterConfigs(req, cb) {
        let resp = new ModifyClusterConfigsResponse();
        this.request("ModifyClusterConfigs", req, resp, cb);
    }

    /**
     * This API is used to create a hot/cold data layering policy.
     * @param {CreateCoolDownPolicyRequest} req
     * @param {function(string, CreateCoolDownPolicyResponse):void} cb
     * @public
     */
    CreateCoolDownPolicy(req, cb) {
        let resp = new CreateCoolDownPolicyResponse();
        this.request("CreateCoolDownPolicy", req, resp, cb);
    }

    /**
     * This API is used to update the hot/cold data layering information on a cluster.
     * @param {UpdateCoolDownRequest} req
     * @param {function(string, UpdateCoolDownResponse):void} cb
     * @public
     */
    UpdateCoolDown(req, cb) {
        let resp = new UpdateCoolDownResponse();
        this.request("UpdateCoolDown", req, resp, cb);
    }

    /**
     * This API is used to pull the operation list of the cluster. The API supports pagination query and filtering operation records by time range.
     * @param {DescribeInstanceOperationHistoryRequest} req
     * @param {function(string, DescribeInstanceOperationHistoryResponse):void} cb
     * @public
     */
    DescribeInstanceOperationHistory(req, cb) {
        let resp = new DescribeInstanceOperationHistoryResponse();
        this.request("DescribeInstanceOperationHistory", req, resp, cb);
    }

    /**
     * This API is used to display cluster status, process progress, etc. in the cluster details page.
     * @param {DescribeInstanceStateRequest} req
     * @param {function(string, DescribeInstanceStateResponse):void} cb
     * @public
     */
    DescribeInstanceState(req, cb) {
        let resp = new DescribeInstanceStateResponse();
        this.request("DescribeInstanceState", req, resp, cb);
    }

    /**
     * This API is used to get the contents of the latest configuration files (config.xml, metrika.xml, and user.xml) of the cluster and display them to the user.
     * @param {DescribeClusterConfigsRequest} req
     * @param {function(string, DescribeClusterConfigsResponse):void} cb
     * @public
     */
    DescribeClusterConfigs(req, cb) {
        let resp = new DescribeClusterConfigsResponse();
        this.request("DescribeClusterConfigs", req, resp, cb);
    }

    /**
     * This API is used to delete resource groups.
     * @param {DeleteWorkloadGroupRequest} req
     * @param {function(string, DeleteWorkloadGroupResponse):void} cb
     * @public
     */
    DeleteWorkloadGroup(req, cb) {
        let resp = new DeleteWorkloadGroupResponse();
        this.request("DeleteWorkloadGroup", req, resp, cb);
    }

    /**
     * This API is used to insert data into TCHouse-D.
     * @param {InsertDatasToTableRequest} req
     * @param {function(string, InsertDatasToTableResponse):void} cb
     * @public
     */
    InsertDatasToTable(req, cb) {
        let resp = new InsertDatasToTableResponse();
        this.request("InsertDatasToTable", req, resp, cb);
    }

    /**
     * This API is used to edit security groups.
     * @param {ModifySecurityGroupsRequest} req
     * @param {function(string, ModifySecurityGroupsResponse):void} cb
     * @public
     */
    ModifySecurityGroups(req, cb) {
        let resp = new ModifySecurityGroupsResponse();
        this.request("ModifySecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to query the list of backend nodes supporting hot/cold data layering.
     * @param {DescribeCoolDownBackendsRequest} req
     * @param {function(string, DescribeCoolDownBackendsResponse):void} cb
     * @public
     */
    DescribeCoolDownBackends(req, cb) {
        let resp = new DescribeCoolDownBackendsResponse();
        this.request("DescribeCoolDownBackends", req, resp, cb);
    }

    /**
     * This API is used to scale up/down computing resources.
     * @param {ScaleUpInstanceRequest} req
     * @param {function(string, ScaleUpInstanceResponse):void} cb
     * @public
     */
    ScaleUpInstance(req, cb) {
        let resp = new ScaleUpInstanceResponse();
        this.request("ScaleUpInstance", req, resp, cb);
    }

    /**
     * This API is used to obtain the database information under a specific data source.
     * @param {DescribeDatabaseRequest} req
     * @param {function(string, DescribeDatabaseResponse):void} cb
     * @public
     */
    DescribeDatabase(req, cb) {
        let resp = new DescribeDatabaseResponse();
        this.request("DescribeDatabase", req, resp, cb);
    }

    /**
     * This API is used to create a TCHouse-D database.
     * @param {CreateDatabaseRequest} req
     * @param {function(string, CreateDatabaseResponse):void} cb
     * @public
     */
    CreateDatabase(req, cb) {
        let resp = new CreateDatabaseResponse();
        this.request("CreateDatabase", req, resp, cb);
    }

    /**
     * This API is used to obtain detailed information of Doris users, including account information, permission host, and permission configuration.
     * @param {DescribeUserPolicyRequest} req
     * @param {function(string, DescribeUserPolicyResponse):void} cb
     * @public
     */
    DescribeUserPolicy(req, cb) {
        let resp = new DescribeUserPolicyResponse();
        this.request("DescribeUserPolicy", req, resp, cb);
    }

    /**
     * This API is used to modify user permissions and support three permission setting categories: catalog, all db, and some db tables.
     * @param {ModifyUserPrivilegesV3Request} req
     * @param {function(string, ModifyUserPrivilegesV3Response):void} cb
     * @public
     */
    ModifyUserPrivilegesV3(req, cb) {
        let resp = new ModifyUserPrivilegesV3Response();
        this.request("ModifyUserPrivilegesV3", req, resp, cb);
    }

    /**
     * This API is used to pull operations of the cluster on the cluster details page.
     * @param {DescribeInstanceOperationsRequest} req
     * @param {function(string, DescribeInstanceOperationsResponse):void} cb
     * @public
     */
    DescribeInstanceOperations(req, cb) {
        let resp = new DescribeInstanceOperationsResponse();
        this.request("DescribeInstanceOperations", req, resp, cb);
    }

    /**
     * This API is used to enable or disable resource groups.
     * @param {ModifyWorkloadGroupStatusRequest} req
     * @param {function(string, ModifyWorkloadGroupStatusResponse):void} cb
     * @public
     */
    ModifyWorkloadGroupStatus(req, cb) {
        let resp = new ModifyWorkloadGroupStatusResponse();
        this.request("ModifyWorkloadGroupStatus", req, resp, cb);
    }

    /**
     * This API is used to modify the hot/cold data layering policy.
     * @param {ModifyCoolDownPolicyRequest} req
     * @param {function(string, ModifyCoolDownPolicyResponse):void} cb
     * @public
     */
    ModifyCoolDownPolicy(req, cb) {
        let resp = new ModifyCoolDownPolicyResponse();
        this.request("ModifyCoolDownPolicy", req, resp, cb);
    }

    /**
     * This API is used to add and modify a user.
     * @param {ActionAlterUserRequest} req
     * @param {function(string, ActionAlterUserResponse):void} cb
     * @public
     */
    ActionAlterUser(req, cb) {
        let resp = new ActionAlterUserResponse();
        this.request("ActionAlterUser", req, resp, cb);
    }

    /**
     * This API is used to obtain the table information. It only supports querying table information in the TCHouse-D internal catalog.
     * @param {DescribeTableRequest} req
     * @param {function(string, DescribeTableResponse):void} cb
     * @public
     */
    DescribeTable(req, cb) {
        let resp = new DescribeTableResponse();
        this.request("DescribeTable", req, resp, cb);
    }

    /**
     * This API is used to query the cluster information by executing SQL commands.
     * @param {DescribeSqlApisRequest} req
     * @param {function(string, DescribeSqlApisResponse):void} cb
     * @public
     */
    DescribeSqlApis(req, cb) {
        let resp = new DescribeSqlApisResponse();
        this.request("DescribeSqlApis", req, resp, cb);
    }

    /**
     * This API is used to check whether variables and configurations for hot/cold data layering are correct.
     * @param {CheckCoolDownWorkingVariableConfigCorrectRequest} req
     * @param {function(string, CheckCoolDownWorkingVariableConfigCorrectResponse):void} cb
     * @public
     */
    CheckCoolDownWorkingVariableConfigCorrect(req, cb) {
        let resp = new CheckCoolDownWorkingVariableConfigCorrectResponse();
        this.request("CheckCoolDownWorkingVariableConfigCorrect", req, resp, cb);
    }

    /**
     * This API is used to query the specific information of a cluster based on the cluster ID.
     * @param {DescribeInstanceRequest} req
     * @param {function(string, DescribeInstanceResponse):void} cb
     * @public
     */
    DescribeInstance(req, cb) {
        let resp = new DescribeInstanceResponse();
        this.request("DescribeInstance", req, resp, cb);
    }

    /**
     * This API is used to execute an SQL query statement with parameters and return the query results.
     * @param {ExecuteParametrizedQueryRequest} req
     * @param {function(string, ExecuteParametrizedQueryResponse):void} cb
     * @public
     */
    ExecuteParametrizedQuery(req, cb) {
        let resp = new ExecuteParametrizedQueryResponse();
        this.request("ExecuteParametrizedQuery", req, resp, cb);
    }

    /**
     * This API is used to create clusters.
     * @param {CreateInstanceNewRequest} req
     * @param {function(string, CreateInstanceNewResponse):void} cb
     * @public
     */
    CreateInstanceNew(req, cb) {
        let resp = new CreateInstanceNewResponse();
        this.request("CreateInstanceNew", req, resp, cb);
    }

    /**
     * This API is used to modify the resource group information.
     * @param {ModifyWorkloadGroupRequest} req
     * @param {function(string, ModifyWorkloadGroupResponse):void} cb
     * @public
     */
    ModifyWorkloadGroup(req, cb) {
        let resp = new ModifyWorkloadGroupResponse();
        this.request("ModifyWorkloadGroup", req, resp, cb);
    }

    /**
     * This API is used to cancel the corresponding backup instance task.
     * @param {CancelBackupJobRequest} req
     * @param {function(string, CancelBackupJobResponse):void} cb
     * @public
     */
    CancelBackupJob(req, cb) {
        let resp = new CancelBackupJobResponse();
        this.request("CancelBackupJob", req, resp, cb);
    }

    /**
     * This API is used to query data according to the specified database and table names, and support field selection and pagination.
     * @param {QueryTableDataRequest} req
     * @param {function(string, QueryTableDataResponse):void} cb
     * @public
     */
    QueryTableData(req, cb) {
        let resp = new QueryTableDataResponse();
        this.request("QueryTableData", req, resp, cb);
    }

    /**
     * This API is used to GRANT and REVOKE the database and table in the Doris database.
     * @param {ModifyDatabaseTableAccessRequest} req
     * @param {function(string, ModifyDatabaseTableAccessResponse):void} cb
     * @public
     */
    ModifyDatabaseTableAccess(req, cb) {
        let resp = new ModifyDatabaseTableAccessResponse();
        this.request("ModifyDatabaseTableAccess", req, resp, cb);
    }

    /**
     * This API is used to batch obtain the table creation DDL.
     * @param {DescribeCreateTablesDDLRequest} req
     * @param {function(string, DescribeCreateTablesDDLResponse):void} cb
     * @public
     */
    DescribeCreateTablesDDL(req, cb) {
        let resp = new DescribeCreateTablesDDLResponse();
        this.request("DescribeCreateTablesDDL", req, resp, cb);
    }

    /**
     * This API is used to delete the specified table in the specified database.
     * @param {DeleteTableRequest} req
     * @param {function(string, DeleteTableResponse):void} cb
     * @public
     */
    DeleteTable(req, cb) {
        let resp = new DeleteTableResponse();
        this.request("DeleteTable", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a specified table. The API parameters are consistent with those for creating a table.
     * @param {UpdateTableSchemaRequest} req
     * @param {function(string, UpdateTableSchemaResponse):void} cb
     * @public
     */
    UpdateTableSchema(req, cb) {
        let resp = new UpdateTableSchemaResponse();
        this.request("UpdateTableSchema", req, resp, cb);
    }

    /**
     * This API is used to query backup task details.
     * @param {DescribeBackUpJobDetailRequest} req
     * @param {function(string, DescribeBackUpJobDetailResponse):void} cb
     * @public
     */
    DescribeBackUpJobDetail(req, cb) {
        let resp = new DescribeBackUpJobDetailResponse();
        this.request("DescribeBackUpJobDetail", req, resp, cb);
    }

    /**
     * This API is used to query the progress details of backup tasks.
     * @param {DescribeBackUpTaskDetailRequest} req
     * @param {function(string, DescribeBackUpTaskDetailResponse):void} cb
     * @public
     */
    DescribeBackUpTaskDetail(req, cb) {
        let resp = new DescribeBackUpTaskDetailResponse();
        this.request("DescribeBackUpTaskDetail", req, resp, cb);
    }

    /**
     * This API is used to obtain cluster node roles.
     * @param {DescribeInstanceNodesRoleRequest} req
     * @param {function(string, DescribeInstanceNodesRoleResponse):void} cb
     * @public
     */
    DescribeInstanceNodesRole(req, cb) {
        let resp = new DescribeInstanceNodesRoleResponse();
        this.request("DescribeInstanceNodesRole", req, resp, cb);
    }

    /**
     * This API is used to restart the cluster to make the configuration file take effect.
     * @param {RestartClusterForConfigsRequest} req
     * @param {function(string, RestartClusterForConfigsResponse):void} cb
     * @public
     */
    RestartClusterForConfigs(req, cb) {
        let resp = new RestartClusterForConfigsResponse();
        this.request("RestartClusterForConfigs", req, resp, cb);
    }

    /**
     * This API is used to pull the specification list of data nodes and zookeeper nodes for the cluster on the purchase page.
     * @param {DescribeSpecRequest} req
     * @param {function(string, DescribeSpecResponse):void} cb
     * @public
     */
    DescribeSpec(req, cb) {
        let resp = new DescribeSpecResponse();
        this.request("DescribeSpec", req, resp, cb);
    }

    /**
     * This API is used to display region information and the total number of clusters in each region on the cluster list page.
     * @param {DescribeAreaRegionRequest} req
     * @param {function(string, DescribeAreaRegionResponse):void} cb
     * @public
     */
    DescribeAreaRegion(req, cb) {
        let resp = new DescribeAreaRegionResponse();
        this.request("DescribeAreaRegion", req, resp, cb);
    }

    /**
     * This API is used to enable hot/cold data layering.
     * @param {OpenCoolDownRequest} req
     * @param {function(string, OpenCoolDownResponse):void} cb
     * @public
     */
    OpenCoolDown(req, cb) {
        let resp = new OpenCoolDownResponse();
        this.request("OpenCoolDown", req, resp, cb);
    }

    /**
     * This API is used to obtain the SQL query details of the Doris user.
     * @param {DescribeQueryAnalyseRequest} req
     * @param {function(string, DescribeQueryAnalyseResponse):void} cb
     * @public
     */
    DescribeQueryAnalyse(req, cb) {
        let resp = new DescribeQueryAnalyseResponse();
        this.request("DescribeQueryAnalyse", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a specified database, including setting the data volume quota, renaming the database, setting the replica quantity quota, and modifying other attributes of the database.
     * @param {UpdateDatabaseRequest} req
     * @param {function(string, UpdateDatabaseResponse):void} cb
     * @public
     */
    UpdateDatabase(req, cb) {
        let resp = new UpdateDatabaseResponse();
        this.request("UpdateDatabase", req, resp, cb);
    }

    /**
     * This API is used to check cluster health
     * @param {DescribeInstancesHealthStateRequest} req
     * @param {function(string, DescribeInstancesHealthStateResponse):void} cb
     * @public
     */
    DescribeInstancesHealthState(req, cb) {
        let resp = new DescribeInstancesHealthStateResponse();
        this.request("DescribeInstancesHealthState", req, resp, cb);
    }

    /**
     * This API is used to indicate the rolling restart of the clusters.
     * @param {RestartClusterForNodeRequest} req
     * @param {function(string, RestartClusterForNodeResponse):void} cb
     * @public
     */
    RestartClusterForNode(req, cb) {
        let resp = new RestartClusterForNodeResponse();
        this.request("RestartClusterForNode", req, resp, cb);
    }

    /**
     * This API is used to download slow log files.
     * @param {DescribeSlowQueryRecordsDownloadRequest} req
     * @param {function(string, DescribeSlowQueryRecordsDownloadResponse):void} cb
     * @public
     */
    DescribeSlowQueryRecordsDownload(req, cb) {
        let resp = new DescribeSlowQueryRecordsDownloadResponse();
        this.request("DescribeSlowQueryRecordsDownload", req, resp, cb);
    }

    /**
     * This API is used to get the list of cluster node information.
     * @param {DescribeInstanceNodesRequest} req
     * @param {function(string, DescribeInstanceNodesResponse):void} cb
     * @public
     */
    DescribeInstanceNodes(req, cb) {
        let resp = new DescribeInstanceNodesResponse();
        this.request("DescribeInstanceNodes", req, resp, cb);
    }

    /**
     * This API is used to query the list of hot/cold data layering policies.
     * @param {DescribeCoolDownPoliciesRequest} req
     * @param {function(string, DescribeCoolDownPoliciesResponse):void} cb
     * @public
     */
    DescribeCoolDownPolicies(req, cb) {
        let resp = new DescribeCoolDownPoliciesResponse();
        this.request("DescribeCoolDownPolicies", req, resp, cb);
    }

    /**
     * This API is used to obtain resource group information.
     * @param {DescribeWorkloadGroupRequest} req
     * @param {function(string, DescribeWorkloadGroupResponse):void} cb
     * @public
     */
    DescribeWorkloadGroup(req, cb) {
        let resp = new DescribeWorkloadGroupResponse();
        this.request("DescribeWorkloadGroup", req, resp, cb);
    }

    /**
     * This API is used to modify the cluster's name.
     * @param {ModifyInstanceRequest} req
     * @param {function(string, ModifyInstanceResponse):void} cb
     * @public
     */
    ModifyInstance(req, cb) {
        let resp = new ModifyInstanceResponse();
        this.request("ModifyInstance", req, resp, cb);
    }

    /**
     * This API is used to modify configurations in the KV mode.
     * @param {ModifyInstanceKeyValConfigsRequest} req
     * @param {function(string, ModifyInstanceKeyValConfigsResponse):void} cb
     * @public
     */
    ModifyInstanceKeyValConfigs(req, cb) {
        let resp = new ModifyInstanceKeyValConfigsResponse();
        this.request("ModifyInstanceKeyValConfigs", req, resp, cb);
    }


}
module.exports = CdwdorisClient;
