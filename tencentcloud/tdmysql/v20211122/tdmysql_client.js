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
const CreateDBInstancesRequest = models.CreateDBInstancesRequest;
const ExpandInstanceResponse = models.ExpandInstanceResponse;
const DescribeSaleZonesInfo = models.DescribeSaleZonesInfo;
const BackupMethodStatisticsOutPut = models.BackupMethodStatisticsOutPut;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const DescribeDBParametersRequest = models.DescribeDBParametersRequest;
const RestartDBInstancesResponse = models.RestartDBInstancesResponse;
const ModifyInstanceNameRequest = models.ModifyInstanceNameRequest;
const DescribeUserPrivilegesResponse = models.DescribeUserPrivilegesResponse;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const InstanceFilter = models.InstanceFilter;
const BackupStatisticsModel = models.BackupStatisticsModel;
const BackupPolicyModelOutPut = models.BackupPolicyModelOutPut;
const ModifyInstanceNameResponse = models.ModifyInstanceNameResponse;
const DescribeDBSBackupStatisticsDetailRequest = models.DescribeDBSBackupStatisticsDetailRequest;
const DescribeDBParametersResponse = models.DescribeDBParametersResponse;
const StorageNodeSpec = models.StorageNodeSpec;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const DeleteDBSBackupSetsResponse = models.DeleteDBSBackupSetsResponse;
const DescribeFlowResponse = models.DescribeFlowResponse;
const MaintenanceWindowInfo = models.MaintenanceWindowInfo;
const DescribeDBSBackupStatisticsDetailResponse = models.DescribeDBSBackupStatisticsDetailResponse;
const ModifyDBSBackupSetCommentRequest = models.ModifyDBSBackupSetCommentRequest;
const ParamConstraint = models.ParamConstraint;
const DescribeDBSBackupPolicyResponse = models.DescribeDBSBackupPolicyResponse;
const DeleteDBSBackupSetsRequest = models.DeleteDBSBackupSetsRequest;
const BinlogInfo = models.BinlogInfo;
const DatabasePrivileges = models.DatabasePrivileges;
const NodeInfo = models.NodeInfo;
const DescribeSpecsResponse = models.DescribeSpecsResponse;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const CreateCloneInstanceResponse = models.CreateCloneInstanceResponse;
const ModifyUserPrivilegesResponse = models.ModifyUserPrivilegesResponse;
const CreateDBSBackupResponse = models.CreateDBSBackupResponse;
const BackupSetsReqFilter = models.BackupSetsReqFilter;
const DescribeDBSBackupSetsResponse = models.DescribeDBSBackupSetsResponse;
const DescribeDBSCloneInstancesRequest = models.DescribeDBSCloneInstancesRequest;
const CreateCloneInstanceRequest = models.CreateCloneInstanceRequest;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const DescribeSaleInfoRequest = models.DescribeSaleInfoRequest;
const ModifyUserPrivilegesRequest = models.ModifyUserPrivilegesRequest;
const DescribeDBSArchiveLogsRequest = models.DescribeDBSArchiveLogsRequest;
const DatabaseFunction = models.DatabaseFunction;
const ModifyDBSBackupPolicyRequest = models.ModifyDBSBackupPolicyRequest;
const DescribeDBInstanceDetailResponse = models.DescribeDBInstanceDetailResponse;
const DescribeDatabaseObjectsRequest = models.DescribeDatabaseObjectsRequest;
const DestroyInstancesResponse = models.DestroyInstancesResponse;
const DescribeSaleInfoResponse = models.DescribeSaleInfoResponse;
const DescribeDBSBackupSetsRequest = models.DescribeDBSBackupSetsRequest;
const DescribeDBInstanceDetailRequest = models.DescribeDBInstanceDetailRequest;
const ModifyAutoRenewFlagResponse = models.ModifyAutoRenewFlagResponse;
const DescribeUsersRequest = models.DescribeUsersRequest;
const DatabaseView = models.DatabaseView;
const DataBackupStatisticsModel = models.DataBackupStatisticsModel;
const ModifyDBSBackupPolicyResponse = models.ModifyDBSBackupPolicyResponse;
const DBParamValue = models.DBParamValue;
const UserInfo = models.UserInfo;
const ModifyDBParametersRequest = models.ModifyDBParametersRequest;
const CloneInstanceModel = models.CloneInstanceModel;
const ArchiveLogInterval = models.ArchiveLogInterval;
const ModifyDBParametersResponse = models.ModifyDBParametersResponse;
const SecurityGroup = models.SecurityGroup;
const DescribeDBSAvailableRecoveryTimeRequest = models.DescribeDBSAvailableRecoveryTimeRequest;
const DescribeDBSArchiveLogsResponse = models.DescribeDBSArchiveLogsResponse;
const DescribeDatabaseObjectsResponse = models.DescribeDatabaseObjectsResponse;
const DescribeSaleRegionInfo = models.DescribeSaleRegionInfo;
const InstanceNode = models.InstanceNode;
const SecurityGroupBound = models.SecurityGroupBound;
const DescribeDBSBackupStatisticsResponse = models.DescribeDBSBackupStatisticsResponse;
const BackupTypeStatisticsModel = models.BackupTypeStatisticsModel;
const DescribeDBSCloneInstancesResponse = models.DescribeDBSCloneInstancesResponse;
const InstanceInfo = models.InstanceInfo;
const User = models.User;
const DatabaseTable = models.DatabaseTable;
const AnalysisInstanceInfo = models.AnalysisInstanceInfo;
const ServerlessCcu = models.ServerlessCcu;
const Database = models.Database;
const DescribeSaleZonesGroup = models.DescribeSaleZonesGroup;
const DescribeDBSBackupStatisticsRequest = models.DescribeDBSBackupStatisticsRequest;
const DescribeUsersResponse = models.DescribeUsersResponse;
const CancelIsolateDBInstancesResponse = models.CancelIsolateDBInstancesResponse;
const BackupMethodStatisticsModel = models.BackupMethodStatisticsModel;
const DescribeDBSBackupPolicyRequest = models.DescribeDBSBackupPolicyRequest;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const CancelIsolateDBInstancesRequest = models.CancelIsolateDBInstancesRequest;
const ExpandInstanceRequest = models.ExpandInstanceRequest;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const ArchiveLogModel = models.ArchiveLogModel;
const AnalysisRelationInfo = models.AnalysisRelationInfo;
const ResourceTag = models.ResourceTag;
const IsolateDBInstanceRequest = models.IsolateDBInstanceRequest;
const DescribeFlowRequest = models.DescribeFlowRequest;
const ModifyDBSBackupSetCommentResponse = models.ModifyDBSBackupSetCommentResponse;
const AutoScalingConfig = models.AutoScalingConfig;
const DatabaseProcedure = models.DatabaseProcedure;
const ModifyAutoRenewFlagRequest = models.ModifyAutoRenewFlagRequest;
const CreateDBSBackupRequest = models.CreateDBSBackupRequest;
const DestroyInstancesRequest = models.DestroyInstancesRequest;
const DescribeSpecsRequest = models.DescribeSpecsRequest;
const ParamDesc = models.ParamDesc;
const BackupPolicyModelInput = models.BackupPolicyModelInput;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const ConstraintRange = models.ConstraintRange;
const RestartDBInstancesRequest = models.RestartDBInstancesRequest;
const DescribeDBSAvailableRecoveryTimeResponse = models.DescribeDBSAvailableRecoveryTimeResponse;
const TablePrivileges = models.TablePrivileges;
const DescribeUserPrivilegesRequest = models.DescribeUserPrivilegesRequest;
const LogBackupStatisticsModel = models.LogBackupStatisticsModel;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const BackupSetModel = models.BackupSetModel;
const InstanceParam = models.InstanceParam;
const CreateDBInstancesResponse = models.CreateDBInstancesResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;


/**
 * tdmysql client
 * @class
 */
class TdmysqlClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tdmysql.intl.tencentcloudapi.com", "2021-11-22", credential, region, profile);
    }
    
    /**
     * Query an instance backup strategy
     * @param {DescribeDBSBackupPolicyRequest} req
     * @param {function(string, DescribeDBSBackupPolicyResponse):void} cb
     * @public
     */
    DescribeDBSBackupPolicy(req, cb) {
        let resp = new DescribeDBSBackupPolicyResponse();
        this.request("DescribeDBSBackupPolicy", req, resp, cb);
    }

    /**
     * This API is used to query the object list in the database of a cloud database instance, including table, stored procedure, view and function.
     * @param {DescribeDatabaseObjectsRequest} req
     * @param {function(string, DescribeDatabaseObjectsResponse):void} cb
     * @public
     */
    DescribeDatabaseObjects(req, cb) {
        let resp = new DescribeDatabaseObjectsResponse();
        this.request("DescribeDatabaseObjects", req, resp, cb);
    }

    /**
     * This API is used to lift isolation for instances in batch.
     * @param {CancelIsolateDBInstancesRequest} req
     * @param {function(string, CancelIsolateDBInstancesResponse):void} cb
     * @public
     */
    CancelIsolateDBInstances(req, cb) {
        let resp = new CancelIsolateDBInstancesResponse();
        this.request("CancelIsolateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query available regions.
     * @param {DescribeSaleInfoRequest} req
     * @param {function(string, DescribeSaleInfoResponse):void} cb
     * @public
     */
    DescribeSaleInfo(req, cb) {
        let resp = new DescribeSaleInfoResponse();
        this.request("DescribeSaleInfo", req, resp, cb);
    }

    /**
     * This API is used to create clone instances.
     * @param {CreateCloneInstanceRequest} req
     * @param {function(string, CreateCloneInstanceResponse):void} cb
     * @public
     */
    CreateCloneInstance(req, cb) {
        let resp = new CreateCloneInstanceResponse();
        this.request("CreateCloneInstance", req, resp, cb);
    }

    /**
     * This API is used to query user list.
     * @param {DescribeUsersRequest} req
     * @param {function(string, DescribeUsersResponse):void} cb
     * @public
     */
    DescribeUsers(req, cb) {
        let resp = new DescribeUsersResponse();
        this.request("DescribeUsers", req, resp, cb);
    }

    /**
     * This API is used to modify instance parameters.
     * @param {ModifyDBParametersRequest} req
     * @param {function(string, ModifyDBParametersResponse):void} cb
     * @public
     */
    ModifyDBParameters(req, cb) {
        let resp = new ModifyDBParametersResponse();
        this.request("ModifyDBParameters", req, resp, cb);
    }

    /**
     * This API is used to batch isolate instances.
     * @param {IsolateDBInstanceRequest} req
     * @param {function(string, IsolateDBInstanceResponse):void} cb
     * @public
     */
    IsolateDBInstance(req, cb) {
        let resp = new IsolateDBInstanceResponse();
        this.request("IsolateDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the process status of an asynchronous task.
     * @param {DescribeFlowRequest} req
     * @param {function(string, DescribeFlowResponse):void} cb
     * @public
     */
    DescribeFlow(req, cb) {
        let resp = new DescribeFlowResponse();
        this.request("DescribeFlow", req, resp, cb);
    }

    /**
     * This API is used to obtain the current parameter settings of the instance.
     * @param {DescribeDBParametersRequest} req
     * @param {function(string, DescribeDBParametersResponse):void} cb
     * @public
     */
    DescribeDBParameters(req, cb) {
        let resp = new DescribeDBParametersResponse();
        this.request("DescribeDBParameters", req, resp, cb);
    }

    /**
     * This API is used to batch create instances.
     * @param {CreateDBInstancesRequest} req
     * @param {function(string, CreateDBInstancesResponse):void} cb
     * @public
     */
    CreateDBInstances(req, cb) {
        let resp = new CreateDBInstancesResponse();
        this.request("CreateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to modify instance name.
     * @param {ModifyInstanceNameRequest} req
     * @param {function(string, ModifyInstanceNameResponse):void} cb
     * @public
     */
    ModifyInstanceName(req, cb) {
        let resp = new ModifyInstanceNameResponse();
        this.request("ModifyInstanceName", req, resp, cb);
    }

    /**
     * This API is used to query instance archived WAL log list.
     * @param {DescribeDBSArchiveLogsRequest} req
     * @param {function(string, DescribeDBSArchiveLogsResponse):void} cb
     * @public
     */
    DescribeDBSArchiveLogs(req, cb) {
        let resp = new DescribeDBSArchiveLogsResponse();
        this.request("DescribeDBSArchiveLogs", req, resp, cb);
    }

    /**
     * This API is used to destroy instances in batch.
     * @param {DestroyInstancesRequest} req
     * @param {function(string, DestroyInstancesResponse):void} cb
     * @public
     */
    DestroyInstances(req, cb) {
        let resp = new DestroyInstancesResponse();
        this.request("DestroyInstances", req, resp, cb);
    }

    /**
     * This API is used to modify the auto-renewal flag.
     * @param {ModifyAutoRenewFlagRequest} req
     * @param {function(string, ModifyAutoRenewFlagResponse):void} cb
     * @public
     */
    ModifyAutoRenewFlag(req, cb) {
        let resp = new ModifyAutoRenewFlagResponse();
        this.request("ModifyAutoRenewFlag", req, resp, cb);
    }

    /**
     * This API is used to modify user permissions.
     * @param {ModifyUserPrivilegesRequest} req
     * @param {function(string, ModifyUserPrivilegesResponse):void} cb
     * @public
     */
    ModifyUserPrivileges(req, cb) {
        let resp = new ModifyUserPrivilegesResponse();
        this.request("ModifyUserPrivileges", req, resp, cb);
    }

    /**
     * This API is used to query instance backup set information.
     * @param {DescribeDBSBackupSetsRequest} req
     * @param {function(string, DescribeDBSBackupSetsResponse):void} cb
     * @public
     */
    DescribeDBSBackupSets(req, cb) {
        let resp = new DescribeDBSBackupSetsResponse();
        this.request("DescribeDBSBackupSets", req, resp, cb);
    }

    /**
     * This API is used to modify the instance backup strategy.
     * @param {ModifyDBSBackupPolicyRequest} req
     * @param {function(string, ModifyDBSBackupPolicyResponse):void} cb
     * @public
     */
    ModifyDBSBackupPolicy(req, cb) {
        let resp = new ModifyDBSBackupPolicyResponse();
        this.request("ModifyDBSBackupPolicy", req, resp, cb);
    }

    /**
     * This API is used to query instance backup space overview.
     * @param {DescribeDBSBackupStatisticsRequest} req
     * @param {function(string, DescribeDBSBackupStatisticsResponse):void} cb
     * @public
     */
    DescribeDBSBackupStatistics(req, cb) {
        let resp = new DescribeDBSBackupStatisticsResponse();
        this.request("DescribeDBSBackupStatistics", req, resp, cb);
    }

    /**
     * This API is used to modify cloud database security groups.
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to obtain the recoverable time.
     * @param {DescribeDBSAvailableRecoveryTimeRequest} req
     * @param {function(string, DescribeDBSAvailableRecoveryTimeResponse):void} cb
     * @public
     */
    DescribeDBSAvailableRecoveryTime(req, cb) {
        let resp = new DescribeDBSAvailableRecoveryTimeResponse();
        this.request("DescribeDBSAvailableRecoveryTime", req, resp, cb);
    }

    /**
     * This API is used to delete manual backups of instances.
     * @param {DeleteDBSBackupSetsRequest} req
     * @param {function(string, DeleteDBSBackupSetsResponse):void} cb
     * @public
     */
    DeleteDBSBackupSets(req, cb) {
        let resp = new DeleteDBSBackupSetsResponse();
        this.request("DeleteDBSBackupSets", req, resp, cb);
    }

    /**
     * This API is used to create a manual backup of an instance.
     * @param {CreateDBSBackupRequest} req
     * @param {function(string, CreateDBSBackupResponse):void} cb
     * @public
     */
    CreateDBSBackup(req, cb) {
        let resp = new CreateDBSBackupResponse();
        this.request("CreateDBSBackup", req, resp, cb);
    }

    /**
     * This API is used to restart database instances.
     * @param {RestartDBInstancesRequest} req
     * @param {function(string, RestartDBInstancesResponse):void} cb
     * @public
     */
    RestartDBInstances(req, cb) {
        let resp = new RestartDBInstancesResponse();
        this.request("RestartDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query user permissions.
     * @param {DescribeUserPrivilegesRequest} req
     * @param {function(string, DescribeUserPrivilegesResponse):void} cb
     * @public
     */
    DescribeUserPrivileges(req, cb) {
        let resp = new DescribeUserPrivilegesResponse();
        this.request("DescribeUserPrivileges", req, resp, cb);
    }

    /**
     * This API is used to scale up a TDSQL Boundless instance, which can be a primary instance or a disaster recovery instance.
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        let resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
    }

    /**
     * This API is used to list available component specifications.
     * @param {DescribeSpecsRequest} req
     * @param {function(string, DescribeSpecsResponse):void} cb
     * @public
     */
    DescribeSpecs(req, cb) {
        let resp = new DescribeSpecsResponse();
        this.request("DescribeSpecs", req, resp, cb);
    }

    /**
     * This API is used to query backup set statistical detail.
     * @param {DescribeDBSBackupStatisticsDetailRequest} req
     * @param {function(string, DescribeDBSBackupStatisticsDetailResponse):void} cb
     * @public
     */
    DescribeDBSBackupStatisticsDetail(req, cb) {
        let resp = new DescribeDBSBackupStatisticsDetailResponse();
        this.request("DescribeDBSBackupStatisticsDetail", req, resp, cb);
    }

    /**
     * This API is used to query the database list of a cloud database instance.
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * This API is used to query instance list.
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query instance security group information.
     * @param {DescribeDBSecurityGroupsRequest} req
     * @param {function(string, DescribeDBSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBSecurityGroups(req, cb) {
        let resp = new DescribeDBSecurityGroupsResponse();
        this.request("DescribeDBSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to horizontally scale out instances.
     * @param {ExpandInstanceRequest} req
     * @param {function(string, ExpandInstanceResponse):void} cb
     * @public
     */
    ExpandInstance(req, cb) {
        let resp = new ExpandInstanceResponse();
        this.request("ExpandInstance", req, resp, cb);
    }

    /**
     * This API is used to modify backup notes of an instance.
     * @param {ModifyDBSBackupSetCommentRequest} req
     * @param {function(string, ModifyDBSBackupSetCommentResponse):void} cb
     * @public
     */
    ModifyDBSBackupSetComment(req, cb) {
        let resp = new ModifyDBSBackupSetCommentResponse();
        this.request("ModifyDBSBackupSetComment", req, resp, cb);
    }

    /**
     * This API is used to query instance details.
     * @param {DescribeDBInstanceDetailRequest} req
     * @param {function(string, DescribeDBInstanceDetailResponse):void} cb
     * @public
     */
    DescribeDBInstanceDetail(req, cb) {
        let resp = new DescribeDBInstanceDetailResponse();
        this.request("DescribeDBInstanceDetail", req, resp, cb);
    }

    /**
     * Query clone list
     * @param {DescribeDBSCloneInstancesRequest} req
     * @param {function(string, DescribeDBSCloneInstancesResponse):void} cb
     * @public
     */
    DescribeDBSCloneInstances(req, cb) {
        let resp = new DescribeDBSCloneInstancesResponse();
        this.request("DescribeDBSCloneInstances", req, resp, cb);
    }


}
module.exports = TdmysqlClient;
