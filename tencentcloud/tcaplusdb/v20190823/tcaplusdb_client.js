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
const DescribeUinInWhitelistResponse = models.DescribeUinInWhitelistResponse;
const DescribeTasksRequest = models.DescribeTasksRequest;
const IdlFileInfo = models.IdlFileInfo;
const ClearTablesRequest = models.ClearTablesRequest;
const DescribeClustersRequest = models.DescribeClustersRequest;
const ModifyTableQuotasResponse = models.ModifyTableQuotasResponse;
const DescribeIdlFileInfosResponse = models.DescribeIdlFileInfosResponse;
const CreateBackupRequest = models.CreateBackupRequest;
const ModifyTableGroupNameResponse = models.ModifyTableGroupNameResponse;
const RecoverRecycleTablesResponse = models.RecoverRecycleTablesResponse;
const ModifyClusterPasswordResponse = models.ModifyClusterPasswordResponse;
const DeleteClusterResponse = models.DeleteClusterResponse;
const VerifyIdlFilesRequest = models.VerifyIdlFilesRequest;
const ModifyClusterNameRequest = models.ModifyClusterNameRequest;
const ClearTablesResponse = models.ClearTablesResponse;
const DescribeIdlFileInfosRequest = models.DescribeIdlFileInfosRequest;
const TableResultNew = models.TableResultNew;
const CreateClusterResponse = models.CreateClusterResponse;
const ErrorInfo = models.ErrorInfo;
const CreateTablesRequest = models.CreateTablesRequest;
const ClusterInfo = models.ClusterInfo;
const ParsedTableInfoNew = models.ParsedTableInfoNew;
const RegionInfo = models.RegionInfo;
const TableInfoNew = models.TableInfoNew;
const TaskInfoNew = models.TaskInfoNew;
const RollbackTablesResponse = models.RollbackTablesResponse;
const DescribeTablesInRecycleResponse = models.DescribeTablesInRecycleResponse;
const DescribeTableGroupsResponse = models.DescribeTableGroupsResponse;
const ModifyTablesResponse = models.ModifyTablesResponse;
const ModifyTableMemosResponse = models.ModifyTableMemosResponse;
const RollbackTablesRequest = models.RollbackTablesRequest;
const DeleteIdlFilesRequest = models.DeleteIdlFilesRequest;
const DeleteTableGroupResponse = models.DeleteTableGroupResponse;
const CreateBackupResponse = models.CreateBackupResponse;
const TableRollbackResultNew = models.TableRollbackResultNew;
const VerifyIdlFilesResponse = models.VerifyIdlFilesResponse;
const DeleteClusterRequest = models.DeleteClusterRequest;
const DescribeTablesResponse = models.DescribeTablesResponse;
const ModifyClusterNameResponse = models.ModifyClusterNameResponse;
const RecoverRecycleTablesRequest = models.RecoverRecycleTablesRequest;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DeleteTablesRequest = models.DeleteTablesRequest;
const DescribeUinInWhitelistRequest = models.DescribeUinInWhitelistRequest;
const CreateTableGroupResponse = models.CreateTableGroupResponse;
const ModifyTableGroupNameRequest = models.ModifyTableGroupNameRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeTableGroupsRequest = models.DescribeTableGroupsRequest;
const CompareIdlFilesRequest = models.CompareIdlFilesRequest;
const SelectedTableInfoNew = models.SelectedTableInfoNew;
const IdlFileInfoWithoutContent = models.IdlFileInfoWithoutContent;
const ModifyClusterPasswordRequest = models.ModifyClusterPasswordRequest;
const CreateClusterRequest = models.CreateClusterRequest;
const Filter = models.Filter;
const DeleteTablesResponse = models.DeleteTablesResponse;
const ModifyTableQuotasRequest = models.ModifyTableQuotasRequest;
const CompareIdlFilesResponse = models.CompareIdlFilesResponse;
const ModifyTablesRequest = models.ModifyTablesRequest;
const DeleteTableGroupRequest = models.DeleteTableGroupRequest;
const CreateTablesResponse = models.CreateTablesResponse;
const DescribeTablesInRecycleRequest = models.DescribeTablesInRecycleRequest;
const DescribeTablesRequest = models.DescribeTablesRequest;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const DeleteIdlFilesResponse = models.DeleteIdlFilesResponse;
const CreateTableGroupRequest = models.CreateTableGroupRequest;
const ModifyTableMemosRequest = models.ModifyTableMemosRequest;
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
     * This API is used to query whether the current user is in the whitelist and control whether the user can create TDR-type apps or tables.
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
     * This API is used to clear table data based on the specified table information.
     * @param {ClearTablesRequest} req
     * @param {function(string, ClearTablesResponse):void} cb
     * @public
     */
    ClearTables(req, cb) {
        let resp = new ClearTablesResponse();
        this.request("ClearTables", req, resp, cb);
    }


}
module.exports = TcaplusdbClient;
