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
const ImportSnapshotsResponse = models.ImportSnapshotsResponse;
const CompareTablesInfo = models.CompareTablesInfo;
const ModifyClusterNameRequest = models.ModifyClusterNameRequest;
const ModifyTableGroupNameResponse = models.ModifyTableGroupNameResponse;
const DescribeTableTagsRequest = models.DescribeTableTagsRequest;
const ModifyClusterPasswordResponse = models.ModifyClusterPasswordResponse;
const DeleteClusterResponse = models.DeleteClusterResponse;
const DeleteTableIndexResponse = models.DeleteTableIndexResponse;
const TableRollbackResultNew = models.TableRollbackResultNew;
const ApplyStatus = models.ApplyStatus;
const RegionInfo = models.RegionInfo;
const DescribeTablesResponse = models.DescribeTablesResponse;
const ModifySnapshotsResponse = models.ModifySnapshotsResponse;
const UpdateApplyResponse = models.UpdateApplyResponse;
const DeleteClusterRequest = models.DeleteClusterRequest;
const SelectedTableWithField = models.SelectedTableWithField;
const DeleteTableIndexRequest = models.DeleteTableIndexRequest;
const ProxyMachineInfo = models.ProxyMachineInfo;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DeleteTablesRequest = models.DeleteTablesRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const SetTableDataFlowResponse = models.SetTableDataFlowResponse;
const SelectedTableInfoNew = models.SelectedTableInfoNew;
const ModifyClusterPasswordRequest = models.ModifyClusterPasswordRequest;
const DescribeMachineResponse = models.DescribeMachineResponse;
const DeleteTableDataFlowRequest = models.DeleteTableDataFlowRequest;
const DeleteTableGroupRequest = models.DeleteTableGroupRequest;
const DescribeSnapshotsRequest = models.DescribeSnapshotsRequest;
const TagsInfoOfTableGroup = models.TagsInfoOfTableGroup;
const DescribeApplicationsResponse = models.DescribeApplicationsResponse;
const CreateTableGroupRequest = models.CreateTableGroupRequest;
const ModifyClusterMachineResponse = models.ModifyClusterMachineResponse;
const TagsInfoOfTable = models.TagsInfoOfTable;
const DeleteIdlFilesResponse = models.DeleteIdlFilesResponse;
const FieldInfo = models.FieldInfo;
const ModifyTableTagsRequest = models.ModifyTableTagsRequest;
const MergeTableResult = models.MergeTableResult;
const ApplyResult = models.ApplyResult;
const DescribeTasksRequest = models.DescribeTasksRequest;
const SnapshotInfoNew = models.SnapshotInfoNew;
const Application = models.Application;
const ClearTablesResponse = models.ClearTablesResponse;
const DescribeIdlFileInfosRequest = models.DescribeIdlFileInfosRequest;
const ModifyTableTagsResponse = models.ModifyTableTagsResponse;
const SnapshotResult = models.SnapshotResult;
const ModifyCensorshipRequest = models.ModifyCensorshipRequest;
const ClusterInfo = models.ClusterInfo;
const DisableRestProxyRequest = models.DisableRestProxyRequest;
const DescribeTablesInRecycleResponse = models.DescribeTablesInRecycleResponse;
const ModifyTablesResponse = models.ModifyTablesResponse;
const DeleteSnapshotsRequest = models.DeleteSnapshotsRequest;
const ModifyTableGroupTagsResponse = models.ModifyTableGroupTagsResponse;
const ModifyClusterTagsRequest = models.ModifyClusterTagsRequest;
const CreateSnapshotsRequest = models.CreateSnapshotsRequest;
const DescribeTableGroupTagsResponse = models.DescribeTableGroupTagsResponse;
const SetTableIndexRequest = models.SetTableIndexRequest;
const ModifyTableQuotasResponse = models.ModifyTableQuotasResponse;
const RecoverRecycleTablesRequest = models.RecoverRecycleTablesRequest;
const DeleteSnapshotsResponse = models.DeleteSnapshotsResponse;
const DeleteTablesResponse = models.DeleteTablesResponse;
const ModifyTableGroupNameRequest = models.ModifyTableGroupNameRequest;
const DescribeTableGroupsRequest = models.DescribeTableGroupsRequest;
const DescribeUinInWhitelistRequest = models.DescribeUinInWhitelistRequest;
const MergeTablesDataRequest = models.MergeTablesDataRequest;
const CreateClusterRequest = models.CreateClusterRequest;
const ModifyTableGroupTagsRequest = models.ModifyTableGroupTagsRequest;
const EnableRestProxyRequest = models.EnableRestProxyRequest;
const ModifyTableQuotasRequest = models.ModifyTableQuotasRequest;
const CompareIdlFilesResponse = models.CompareIdlFilesResponse;
const CreateTablesResponse = models.CreateTablesResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const MergeTablesInfo = models.MergeTablesInfo;
const ModifyClusterTagsResponse = models.ModifyClusterTagsResponse;
const DescribeClusterTagsResponse = models.DescribeClusterTagsResponse;
const TagsInfoOfCluster = models.TagsInfoOfCluster;
const SetTableIndexResponse = models.SetTableIndexResponse;
const ClearTablesRequest = models.ClearTablesRequest;
const DescribeIdlFileInfosResponse = models.DescribeIdlFileInfosResponse;
const ServerMachineInfo = models.ServerMachineInfo;
const CreateSnapshotsResponse = models.CreateSnapshotsResponse;
const IdlFileInfo = models.IdlFileInfo;
const DisableRestProxyResponse = models.DisableRestProxyResponse;
const TagInfoUnit = models.TagInfoUnit;
const CreateClusterResponse = models.CreateClusterResponse;
const DescribeClustersRequest = models.DescribeClustersRequest;
const ServerDetailInfo = models.ServerDetailInfo;
const TableInfoNew = models.TableInfoNew;
const TaskInfoNew = models.TaskInfoNew;
const DeleteIdlFilesRequest = models.DeleteIdlFilesRequest;
const CreateBackupResponse = models.CreateBackupResponse;
const KeyFile = models.KeyFile;
const VerifyIdlFilesResponse = models.VerifyIdlFilesResponse;
const DescribeTableTagsResponse = models.DescribeTableTagsResponse;
const CreateTableGroupResponse = models.CreateTableGroupResponse;
const DescribeSnapshotsResponse = models.DescribeSnapshotsResponse;
const VerifyIdlFilesRequest = models.VerifyIdlFilesRequest;
const EnableRestProxyResponse = models.EnableRestProxyResponse;
const ModifyClusterNameResponse = models.ModifyClusterNameResponse;
const ModifyTablesRequest = models.ModifyTablesRequest;
const SetTableDataFlowRequest = models.SetTableDataFlowRequest;
const DescribeTableGroupTagsRequest = models.DescribeTableGroupTagsRequest;
const DescribeTablesInRecycleRequest = models.DescribeTablesInRecycleRequest;
const DescribeTablesRequest = models.DescribeTablesRequest;
const KafkaInfo = models.KafkaInfo;
const DeleteTableDataFlowResponse = models.DeleteTableDataFlowResponse;
const UpdateApplyRequest = models.UpdateApplyRequest;
const ModifyTableMemosRequest = models.ModifyTableMemosRequest;
const DescribeUinInWhitelistResponse = models.DescribeUinInWhitelistResponse;
const SnapshotInfo = models.SnapshotInfo;
const ParsedTableInfoNew = models.ParsedTableInfoNew;
const RollbackTablesResponse = models.RollbackTablesResponse;
const MachineInfo = models.MachineInfo;
const CreateBackupRequest = models.CreateBackupRequest;
const TableResultNew = models.TableResultNew;
const CreateTablesRequest = models.CreateTablesRequest;
const DescribeClusterTagsRequest = models.DescribeClusterTagsRequest;
const RecoverRecycleTablesResponse = models.RecoverRecycleTablesResponse;
const MergeTablesDataResponse = models.MergeTablesDataResponse;
const DescribeApplicationsRequest = models.DescribeApplicationsRequest;
const DescribeTableGroupsResponse = models.DescribeTableGroupsResponse;
const DeleteTableGroupResponse = models.DeleteTableGroupResponse;
const PoolInfo = models.PoolInfo;
const DescribeMachineRequest = models.DescribeMachineRequest;
const RollbackTablesRequest = models.RollbackTablesRequest;
const ModifyCensorshipResponse = models.ModifyCensorshipResponse;
const CompareIdlFilesRequest = models.CompareIdlFilesRequest;
const ProxyDetailInfo = models.ProxyDetailInfo;
const IdlFileInfoWithoutContent = models.IdlFileInfoWithoutContent;
const ModifyTableMemosResponse = models.ModifyTableMemosResponse;
const ModifyClusterMachineRequest = models.ModifyClusterMachineRequest;
const Filter = models.Filter;
const ModifySnapshotsRequest = models.ModifySnapshotsRequest;
const ImportSnapshotsRequest = models.ImportSnapshotsRequest;
const ErrorInfo = models.ErrorInfo;
const TableGroupInfo = models.TableGroupInfo;


/**
 * tcaplusdb client
 * @class
 */
class TcaplusdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcaplusdb.tencentcloudapi.com", "2019-08-23", credential, region, profile);
    }
    
    /**
     * This API is used to delete the global index from a table.
     * @param {DeleteTableIndexRequest} req
     * @param {function(string, DeleteTableIndexResponse):void} cb
     * @public
     */
    DeleteTableIndex(req, cb) {
        let resp = new DeleteTableIndexResponse();
        this.request("DeleteTableIndex", req, resp, cb);
    }

    /**
     * This API is used to get table tags.
     * @param {DescribeTableTagsRequest} req
     * @param {function(string, DescribeTableTagsResponse):void} cb
     * @public
     */
    DescribeTableTags(req, cb) {
        let resp = new DescribeTableTagsResponse();
        this.request("DescribeTableTags", req, resp, cb);
    }

    /**
     * This API is used to update the application status.
     * @param {UpdateApplyRequest} req
     * @param {function(string, UpdateApplyResponse):void} cb
     * @public
     */
    UpdateApply(req, cb) {
        let resp = new UpdateApplyResponse();
        this.request("UpdateApply", req, resp, cb);
    }

    /**
     * This API is used to modify table tags.
     * @param {ModifyTableTagsRequest} req
     * @param {function(string, ModifyTableTagsResponse):void} cb
     * @public
     */
    ModifyTableTags(req, cb) {
        let resp = new ModifyTableTagsResponse();
        this.request("ModifyTableTags", req, resp, cb);
    }

    /**
     * This API is used to create a TcaplusDB cluster.
     * @param {CreateClusterRequest} req
     * @param {function(string, CreateClusterResponse):void} cb
     * @public
     */
    CreateCluster(req, cb) {
        let resp = new CreateClusterResponse();
        this.request("CreateCluster", req, resp, cb);
    }

    /**
     * This API is used to query the available machines in a dedicated cluster.
     * @param {DescribeMachineRequest} req
     * @param {function(string, DescribeMachineResponse):void} cb
     * @public
     */
    DescribeMachine(req, cb) {
        let resp = new DescribeMachineResponse();
        this.request("DescribeMachine", req, resp, cb);
    }

    /**
     * This API is used to merge tables.
     * @param {MergeTablesDataRequest} req
     * @param {function(string, MergeTablesDataResponse):void} cb
     * @public
     */
    MergeTablesData(req, cb) {
        let resp = new MergeTablesDataResponse();
        this.request("MergeTablesData", req, resp, cb);
    }

    /**
     * This API is used to query whether the current user is in the allowlist and control whether the user can create TDR-type apps or tables.
     * @param {DescribeUinInWhitelistRequest} req
     * @param {function(string, DescribeUinInWhitelistResponse):void} cb
     * @public
     */
    DescribeUinInWhitelist(req, cb) {
        let resp = new DescribeUinInWhitelistResponse();
        this.request("DescribeUinInWhitelist", req, resp, cb);
    }

    /**
     * This API is used to query the details of a table in recycle bin.
     * @param {DescribeTablesInRecycleRequest} req
     * @param {function(string, DescribeTablesInRecycleResponse):void} cb
     * @public
     */
    DescribeTablesInRecycle(req, cb) {
        let resp = new DescribeTablesInRecycleResponse();
        this.request("DescribeTablesInRecycle", req, resp, cb);
    }

    /**
     * This API is used to disable the RESTful API.
     * @param {DisableRestProxyRequest} req
     * @param {function(string, DisableRestProxyResponse):void} cb
     * @public
     */
    DisableRestProxy(req, cb) {
        let resp = new DisableRestProxyResponse();
        this.request("DisableRestProxy", req, resp, cb);
    }

    /**
     * This API is used to roll back table data.
     * @param {RollbackTablesRequest} req
     * @param {function(string, RollbackTablesResponse):void} cb
     * @public
     */
    RollbackTables(req, cb) {
        let resp = new RollbackTablesResponse();
        this.request("RollbackTables", req, resp, cb);
    }

    /**
     * This API is used to rename a specified cluster.
     * @param {ModifyClusterNameRequest} req
     * @param {function(string, ModifyClusterNameResponse):void} cb
     * @public
     */
    ModifyClusterName(req, cb) {
        let resp = new ModifyClusterNameResponse();
        this.request("ModifyClusterName", req, resp, cb);
    }

    /**
     * This API is used to enable data subscription for tables or modify the feature's configurations.
     * @param {SetTableDataFlowRequest} req
     * @param {function(string, SetTableDataFlowResponse):void} cb
     * @public
     */
    SetTableDataFlow(req, cb) {
        let resp = new SetTableDataFlowResponse();
        this.request("SetTableDataFlow", req, resp, cb);
    }

    /**
     * This API is used to delete a TcaplusDB cluster, which will succeed only after all resources (including table groups and tables) in the cluster are released.
     * @param {DeleteClusterRequest} req
     * @param {function(string, DeleteClusterResponse):void} cb
     * @public
     */
    DeleteCluster(req, cb) {
        let resp = new DeleteClusterResponse();
        this.request("DeleteCluster", req, resp, cb);
    }

    /**
     * This API is used to change the password of a specified cluster. The backend will allow the TcaplusDB SDK to access databases with both old and new passwords before the old password expires. You cannot submit a new password change request before the old password expires or submit a request to modify the expiration time of the old password after the old password expires.
     * @param {ModifyClusterPasswordRequest} req
     * @param {function(string, ModifyClusterPasswordResponse):void} cb
     * @public
     */
    ModifyClusterPassword(req, cb) {
        let resp = new ModifyClusterPasswordResponse();
        this.request("ModifyClusterPassword", req, resp, cb);
    }

    /**
     * This API is used to create a global index for a table.
     * @param {SetTableIndexRequest} req
     * @param {function(string, SetTableIndexResponse):void} cb
     * @public
     */
    SetTableIndex(req, cb) {
        let resp = new SetTableIndexResponse();
        this.request("SetTableIndex", req, resp, cb);
    }

    /**
     * This API is used to delete a target IDL file by specifying the cluster ID and information of the file to be deleted. If the file is associated with a table, deletion will fail.
     * @param {DeleteIdlFilesRequest} req
     * @param {function(string, DeleteIdlFilesResponse):void} cb
     * @public
     */
    DeleteIdlFiles(req, cb) {
        let resp = new DeleteIdlFilesResponse();
        this.request("DeleteIdlFiles", req, resp, cb);
    }

    /**
     * This API is used to create one or more table snapshots at a specified past time point.
     * @param {CreateSnapshotsRequest} req
     * @param {function(string, CreateSnapshotsResponse):void} cb
     * @public
     */
    CreateSnapshots(req, cb) {
        let resp = new CreateSnapshotsResponse();
        this.request("CreateSnapshots", req, resp, cb);
    }

    /**
     * This API is used to enable the RESTful API.
     * @param {EnableRestProxyRequest} req
     * @param {function(string, EnableRestProxyResponse):void} cb
     * @public
     */
    EnableRestProxy(req, cb) {
        let resp = new EnableRestProxyResponse();
        this.request("EnableRestProxy", req, resp, cb);
    }

    /**
     * This API is used to create a backup task.
     * @param {CreateBackupRequest} req
     * @param {function(string, CreateBackupResponse):void} cb
     * @public
     */
    CreateBackup(req, cb) {
        let resp = new CreateBackupResponse();
        this.request("CreateBackup", req, resp, cb);
    }

    /**
     * This API is used to enable or disable the cluster operation approval feature.
     * @param {ModifyCensorshipRequest} req
     * @param {function(string, ModifyCensorshipResponse):void} cb
     * @public
     */
    ModifyCensorship(req, cb) {
        let resp = new ModifyCensorshipResponse();
        this.request("ModifyCensorship", req, resp, cb);
    }

    /**
     * This API is used to create tables in batches based on the selected IDL file list.
     * @param {CreateTablesRequest} req
     * @param {function(string, CreateTablesResponse):void} cb
     * @public
     */
    CreateTables(req, cb) {
        let resp = new CreateTablesResponse();
        this.request("CreateTables", req, resp, cb);
    }

    /**
     * This API is used to scale a table.
     * @param {ModifyTableQuotasRequest} req
     * @param {function(string, ModifyTableQuotasResponse):void} cb
     * @public
     */
    ModifyTableQuotas(req, cb) {
        let resp = new ModifyTableQuotasResponse();
        this.request("ModifyTableQuotas", req, resp, cb);
    }

    /**
     * This API is used to query the TcaplusDB cluster list, including cluster details.
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }

    /**
     * This API is used to modify the machines of a dedicated cluster.
     * @param {ModifyClusterMachineRequest} req
     * @param {function(string, ModifyClusterMachineResponse):void} cb
     * @public
     */
    ModifyClusterMachine(req, cb) {
        let resp = new ModifyClusterMachineResponse();
        this.request("ModifyClusterMachine", req, resp, cb);
    }

    /**
     * This API is used to delete a table group.
     * @param {DeleteTableGroupRequest} req
     * @param {function(string, DeleteTableGroupResponse):void} cb
     * @public
     */
    DeleteTableGroup(req, cb) {
        let resp = new DeleteTableGroupResponse();
        this.request("DeleteTableGroup", req, resp, cb);
    }

    /**
     * This API is used to rename a TcaplusDB table group.
     * @param {ModifyTableGroupNameRequest} req
     * @param {function(string, ModifyTableGroupNameResponse):void} cb
     * @public
     */
    ModifyTableGroupName(req, cb) {
        let resp = new ModifyTableGroupNameResponse();
        this.request("ModifyTableGroupName", req, resp, cb);
    }

    /**
     * This API is used to delete one or more table snapshots.
     * @param {DeleteSnapshotsRequest} req
     * @param {function(string, DeleteSnapshotsResponse):void} cb
     * @public
     */
    DeleteSnapshots(req, cb) {
        let resp = new DeleteSnapshotsResponse();
        this.request("DeleteSnapshots", req, resp, cb);
    }

    /**
     * This API is used to create a table group in a TcaplusDB cluster.
     * @param {CreateTableGroupRequest} req
     * @param {function(string, CreateTableGroupResponse):void} cb
     * @public
     */
    CreateTableGroup(req, cb) {
        let resp = new CreateTableGroupResponse();
        this.request("CreateTableGroup", req, resp, cb);
    }

    /**
     * This API is used to recover a dropped table from the recycle bin. It will not work for tables to be released due to arrears.
     * @param {RecoverRecycleTablesRequest} req
     * @param {function(string, RecoverRecycleTablesResponse):void} cb
     * @public
     */
    RecoverRecycleTables(req, cb) {
        let resp = new RecoverRecycleTablesResponse();
        this.request("RecoverRecycleTables", req, resp, cb);
    }

    /**
     * This API is used to query the list of regions supported by the TcaplusDB service.
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * This API is used to query the task list.
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * This API is used to query the list of table snapshots.
     * @param {DescribeSnapshotsRequest} req
     * @param {function(string, DescribeSnapshotsResponse):void} cb
     * @public
     */
    DescribeSnapshots(req, cb) {
        let resp = new DescribeSnapshotsResponse();
        this.request("DescribeSnapshots", req, resp, cb);
    }

    /**
     * This API is used to modify cluster tags.
     * @param {ModifyClusterTagsRequest} req
     * @param {function(string, ModifyClusterTagsResponse):void} cb
     * @public
     */
    ModifyClusterTags(req, cb) {
        let resp = new ModifyClusterTagsResponse();
        this.request("ModifyClusterTags", req, resp, cb);
    }

    /**
     * This API is used to modify table group tags.
     * @param {ModifyTableGroupTagsRequest} req
     * @param {function(string, ModifyTableGroupTagsResponse):void} cb
     * @public
     */
    ModifyTableGroupTags(req, cb) {
        let resp = new ModifyTableGroupTagsResponse();
        this.request("ModifyTableGroupTags", req, resp, cb);
    }

    /**
     * This API is used to query the list of cluster operation applications.
     * @param {DescribeApplicationsRequest} req
     * @param {function(string, DescribeApplicationsResponse):void} cb
     * @public
     */
    DescribeApplications(req, cb) {
        let resp = new DescribeApplicationsResponse();
        this.request("DescribeApplications", req, resp, cb);
    }

    /**
     * This API is used to get the associated tag list of a table group.
     * @param {DescribeTableGroupTagsRequest} req
     * @param {function(string, DescribeTableGroupTagsResponse):void} cb
     * @public
     */
    DescribeTableGroupTags(req, cb) {
        let resp = new DescribeTableGroupTagsResponse();
        this.request("DescribeTableGroupTags", req, resp, cb);
    }

    /**
     * This API is used to import a snapshot into a new table or the original table from which the snapshot was created.
     * @param {ImportSnapshotsRequest} req
     * @param {function(string, ImportSnapshotsResponse):void} cb
     * @public
     */
    ImportSnapshots(req, cb) {
        let resp = new ImportSnapshotsResponse();
        this.request("ImportSnapshots", req, resp, cb);
    }

    /**
     * This API is used to query the table group list.
     * @param {DescribeTableGroupsRequest} req
     * @param {function(string, DescribeTableGroupsResponse):void} cb
     * @public
     */
    DescribeTableGroups(req, cb) {
        let resp = new DescribeTableGroupsResponse();
        this.request("DescribeTableGroups", req, resp, cb);
    }

    /**
     * This API is used to select a target table, upload and verify the table modification file, and return the result of whether the table structure is allowed to be modified.
     * @param {CompareIdlFilesRequest} req
     * @param {function(string, CompareIdlFilesResponse):void} cb
     * @public
     */
    CompareIdlFiles(req, cb) {
        let resp = new CompareIdlFilesResponse();
        this.request("CompareIdlFiles", req, resp, cb);
    }

    /**
     * This API is used to query table description file details.
     * @param {DescribeIdlFileInfosRequest} req
     * @param {function(string, DescribeIdlFileInfosResponse):void} cb
     * @public
     */
    DescribeIdlFileInfos(req, cb) {
        let resp = new DescribeIdlFileInfosResponse();
        this.request("DescribeIdlFileInfos", req, resp, cb);
    }

    /**
     * This API is used to drop a specified table. Calling this API for the first time means to move the table to the recycle bin, while calling it again means to drop the table completely from the recycle bin.
     * @param {DeleteTablesRequest} req
     * @param {function(string, DeleteTablesResponse):void} cb
     * @public
     */
    DeleteTables(req, cb) {
        let resp = new DeleteTablesResponse();
        this.request("DeleteTables", req, resp, cb);
    }

    /**
     * This API is used to modify table remarks.
     * @param {ModifyTableMemosRequest} req
     * @param {function(string, ModifyTableMemosResponse):void} cb
     * @public
     */
    ModifyTableMemos(req, cb) {
        let resp = new ModifyTableMemosResponse();
        this.request("ModifyTableMemos", req, resp, cb);
    }

    /**
     * This API is used to modify the expiration time of one or more table snapshots.
     * @param {ModifySnapshotsRequest} req
     * @param {function(string, ModifySnapshotsResponse):void} cb
     * @public
     */
    ModifySnapshots(req, cb) {
        let resp = new ModifySnapshotsResponse();
        this.request("ModifySnapshots", req, resp, cb);
    }

    /**
     * This API is used to upload and verify a table creation file and return the definition of tables that are verified to be valid.
     * @param {VerifyIdlFilesRequest} req
     * @param {function(string, VerifyIdlFilesResponse):void} cb
     * @public
     */
    VerifyIdlFiles(req, cb) {
        let resp = new VerifyIdlFilesResponse();
        this.request("VerifyIdlFiles", req, resp, cb);
    }

    /**
     * This API is used to clear table data based on the specified table information.
     * @param {ClearTablesRequest} req
     * @param {function(string, ClearTablesResponse):void} cb
     * @public
     */
    ClearTables(req, cb) {
        let resp = new ClearTablesResponse();
        this.request("ClearTables", req, resp, cb);
    }

    /**
     * This API is used to disable data subscription for tables.
     * @param {DeleteTableDataFlowRequest} req
     * @param {function(string, DeleteTableDataFlowResponse):void} cb
     * @public
     */
    DeleteTableDataFlow(req, cb) {
        let resp = new DeleteTableDataFlowResponse();
        this.request("DeleteTableDataFlow", req, resp, cb);
    }

    /**
     * This API is used to modify specified tables in batches based on the selected table definition IDL file.
     * @param {ModifyTablesRequest} req
     * @param {function(string, ModifyTablesResponse):void} cb
     * @public
     */
    ModifyTables(req, cb) {
        let resp = new ModifyTablesResponse();
        this.request("ModifyTables", req, resp, cb);
    }

    /**
     * This API is used to query table details.
     * @param {DescribeTablesRequest} req
     * @param {function(string, DescribeTablesResponse):void} cb
     * @public
     */
    DescribeTables(req, cb) {
        let resp = new DescribeTablesResponse();
        this.request("DescribeTables", req, resp, cb);
    }

    /**
     * This API is used to get the associated tag list of a cluster.
     * @param {DescribeClusterTagsRequest} req
     * @param {function(string, DescribeClusterTagsResponse):void} cb
     * @public
     */
    DescribeClusterTags(req, cb) {
        let resp = new DescribeClusterTagsResponse();
        this.request("DescribeClusterTags", req, resp, cb);
    }


}
module.exports = TcaplusdbClient;
