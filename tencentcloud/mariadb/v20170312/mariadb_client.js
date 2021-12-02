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
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const ParamDesc = models.ParamDesc;
const DescribeDBParametersRequest = models.DescribeDBParametersRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const ProcedurePrivilege = models.ProcedurePrivilege;
const DestroyHourDBInstanceRequest = models.DestroyHourDBInstanceRequest;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const CancelDcnJobResponse = models.CancelDcnJobResponse;
const DescribeDBResourceUsageDetailsResponse = models.DescribeDBResourceUsageDetailsResponse;
const DestroyHourDBInstanceResponse = models.DestroyHourDBInstanceResponse;
const Account = models.Account;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const DescribeDBSlowLogsRequest = models.DescribeDBSlowLogsRequest;
const CreateAccountRequest = models.CreateAccountRequest;
const InitDBInstancesResponse = models.InitDBInstancesResponse;
const DescribeDBParametersResponse = models.DescribeDBParametersResponse;
const ResourceUsageMonitorSet = models.ResourceUsageMonitorSet;
const ModifyLogFileRetentionPeriodRequest = models.ModifyLogFileRetentionPeriodRequest;
const PerformanceMonitorSet = models.PerformanceMonitorSet;
const DescribeFlowResponse = models.DescribeFlowResponse;
const CloneAccountResponse = models.CloneAccountResponse;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const DescribeDBResourceUsageRequest = models.DescribeDBResourceUsageRequest;
const ParamConstraint = models.ParamConstraint;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const DBBackupTimeConfig = models.DBBackupTimeConfig;
const DescribeDBLogFilesRequest = models.DescribeDBLogFilesRequest;
const NodeInfo = models.NodeInfo;
const ModifySyncTaskAttributeResponse = models.ModifySyncTaskAttributeResponse;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const CopyAccountPrivilegesResponse = models.CopyAccountPrivilegesResponse;
const CloneAccountRequest = models.CloneAccountRequest;
const ParamModifyResult = models.ParamModifyResult;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const TablePrivilege = models.TablePrivilege;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const DescribeBackupTimeRequest = models.DescribeBackupTimeRequest;
const GrantAccountPrivilegesRequest = models.GrantAccountPrivilegesRequest;
const DBParamValue = models.DBParamValue;
const ModifyDBParametersRequest = models.ModifyDBParametersRequest;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeDcnDetailRequest = models.DescribeDcnDetailRequest;
const ModifyDBParametersResponse = models.ModifyDBParametersResponse;
const CopyAccountPrivilegesRequest = models.CopyAccountPrivilegesRequest;
const SecurityGroup = models.SecurityGroup;
const OpenDBExtranetAccessResponse = models.OpenDBExtranetAccessResponse;
const DescribeDcnDetailResponse = models.DescribeDcnDetailResponse;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const ModifyBackupTimeRequest = models.ModifyBackupTimeRequest;
const SecurityGroupBound = models.SecurityGroupBound;
const ColumnPrivilege = models.ColumnPrivilege;
const ModifySyncTaskAttributeRequest = models.ModifySyncTaskAttributeRequest;
const InitDBInstancesRequest = models.InitDBInstancesRequest;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const DBInstance = models.DBInstance;
const ModifyAccountPrivilegesResponse = models.ModifyAccountPrivilegesResponse;
const ModifyBackupTimeResponse = models.ModifyBackupTimeResponse;
const Database = models.Database;
const GrantAccountPrivilegesResponse = models.GrantAccountPrivilegesResponse;
const CancelDcnJobRequest = models.CancelDcnJobRequest;
const OpenDBExtranetAccessRequest = models.OpenDBExtranetAccessRequest;
const DatabasePrivilege = models.DatabasePrivilege;
const DcnDetailItem = models.DcnDetailItem;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const FunctionPrivilege = models.FunctionPrivilege;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const DescribeDBPerformanceDetailsRequest = models.DescribeDBPerformanceDetailsRequest;
const DescribeBackupTimeResponse = models.DescribeBackupTimeResponse;
const SlowLogData = models.SlowLogData;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const ViewPrivileges = models.ViewPrivileges;
const DescribeDBLogFilesResponse = models.DescribeDBLogFilesResponse;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
const DeleteAccountRequest = models.DeleteAccountRequest;
const DescribeFlowRequest = models.DescribeFlowRequest;
const ModifyAccountPrivilegesRequest = models.ModifyAccountPrivilegesRequest;
const DescribeDBPerformanceResponse = models.DescribeDBPerformanceResponse;
const ModifyDBSyncModeRequest = models.ModifyDBSyncModeRequest;
const DescribeInstanceNodeInfoRequest = models.DescribeInstanceNodeInfoRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const DescribeLogFileRetentionPeriodResponse = models.DescribeLogFileRetentionPeriodResponse;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const ConstraintRange = models.ConstraintRange;
const DescribeDBResourceUsageResponse = models.DescribeDBResourceUsageResponse;
const LogFileInfo = models.LogFileInfo;
const DescribeDBResourceUsageDetailsRequest = models.DescribeDBResourceUsageDetailsRequest;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const DBAccount = models.DBAccount;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const DescribeDBPerformanceDetailsResponse = models.DescribeDBPerformanceDetailsResponse;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const DescribeDBSlowLogsResponse = models.DescribeDBSlowLogsResponse;
const DescribeLogFileRetentionPeriodRequest = models.DescribeLogFileRetentionPeriodRequest;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const MonitorData = models.MonitorData;
const ModifyDBSyncModeResponse = models.ModifyDBSyncModeResponse;
const DescribeInstanceNodeInfoResponse = models.DescribeInstanceNodeInfoResponse;
const ModifyLogFileRetentionPeriodResponse = models.ModifyLogFileRetentionPeriodResponse;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const DescribeDBPerformanceRequest = models.DescribeDBPerformanceRequest;
const DeleteAccountResponse = models.DeleteAccountResponse;


/**
 * mariadb client
 * @class
 */
class MariadbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mariadb.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * This API is used to query the permissions of a TencentDB account.
Note: accounts with the same username but different hosts are different accounts.
     * @param {DescribeAccountPrivilegesRequest} req
     * @param {function(string, DescribeAccountPrivilegesResponse):void} cb
     * @public
     */
    DescribeAccountPrivileges(req, cb) {
        let resp = new DescribeAccountPrivilegesResponse();
        this.request("DescribeAccountPrivileges", req, resp, cb);
    }

    /**
     * This API is used to query the information of primary and replica nodes of an instance.
     * @param {DescribeInstanceNodeInfoRequest} req
     * @param {function(string, DescribeInstanceNodeInfoResponse):void} cb
     * @public
     */
    DescribeInstanceNodeInfo(req, cb) {
        let resp = new DescribeInstanceNodeInfoResponse();
        this.request("DescribeInstanceNodeInfo", req, resp, cb);
    }

    /**
     * This API is used to modify the remarks of a TencentDB account.
Note: accounts with the same username but different hosts are different accounts.
     * @param {ModifyAccountDescriptionRequest} req
     * @param {function(string, ModifyAccountDescriptionResponse):void} cb
     * @public
     */
    ModifyAccountDescription(req, cb) {
        let resp = new ModifyAccountDescriptionResponse();
        this.request("ModifyAccountDescription", req, resp, cb);
    }

    /**
     * This API is used to get the backup time of a TencentDB instance. The backend system will perform instance backup regularly according to this configuration.
     * @param {DescribeBackupTimeRequest} req
     * @param {function(string, DescribeBackupTimeResponse):void} cb
     * @public
     */
    DescribeBackupTime(req, cb) {
        let resp = new DescribeBackupTimeResponse();
        this.request("DescribeBackupTime", req, resp, cb);
    }

    /**
     * This API is used to view the current performance data of a database instance.
     * @param {DescribeDBResourceUsageDetailsRequest} req
     * @param {function(string, DescribeDBResourceUsageDetailsResponse):void} cb
     * @public
     */
    DescribeDBResourceUsageDetails(req, cb) {
        let resp = new DescribeDBResourceUsageDetailsResponse();
        this.request("DescribeDBResourceUsageDetails", req, resp, cb);
    }

    /**
     * This API is used to reset the password of a TencentDB account.
Note: accounts with the same username but different hosts are different accounts.
     * @param {ResetAccountPasswordRequest} req
     * @param {function(string, ResetAccountPasswordResponse):void} cb
     * @public
     */
    ResetAccountPassword(req, cb) {
        let resp = new ResetAccountPasswordResponse();
        this.request("ResetAccountPassword", req, resp, cb);
    }

    /**
     * This API is used to modify database parameters.
     * @param {ModifyDBParametersRequest} req
     * @param {function(string, ModifyDBParametersResponse):void} cb
     * @public
     */
    ModifyDBParameters(req, cb) {
        let resp = new ModifyDBParametersResponse();
        this.request("ModifyDBParameters", req, resp, cb);
    }

    /**
     * This API is used to modify the number of days for retention of database backup logs.
     * @param {ModifyLogFileRetentionPeriodRequest} req
     * @param {function(string, ModifyLogFileRetentionPeriodResponse):void} cb
     * @public
     */
    ModifyLogFileRetentionPeriod(req, cb) {
        let resp = new ModifyLogFileRetentionPeriodResponse();
        this.request("ModifyLogFileRetentionPeriod", req, resp, cb);
    }

    /**
     * This API is used to query the slow query log list.
     * @param {DescribeDBSlowLogsRequest} req
     * @param {function(string, DescribeDBSlowLogsResponse):void} cb
     * @public
     */
    DescribeDBSlowLogs(req, cb) {
        let resp = new DescribeDBSlowLogsResponse();
        this.request("DescribeDBSlowLogs", req, resp, cb);
    }

    /**
     * This API is used to query flow status.
     * @param {DescribeFlowRequest} req
     * @param {function(string, DescribeFlowResponse):void} cb
     * @public
     */
    DescribeFlow(req, cb) {
        let resp = new DescribeFlowResponse();
        this.request("DescribeFlow", req, resp, cb);
    }

    /**
     * This API is used to rename a TencentDB instance.
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        let resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }

    /**
     * This API is used to grant permissions to a TencentDB account.
Note: accounts with the same username but different hosts are different accounts.
     * @param {GrantAccountPrivilegesRequest} req
     * @param {function(string, GrantAccountPrivilegesResponse):void} cb
     * @public
     */
    GrantAccountPrivileges(req, cb) {
        let resp = new GrantAccountPrivilegesResponse();
        this.request("GrantAccountPrivileges", req, resp, cb);
    }

    /**
     * This API is used to delete a TencentDB account, which is uniquely identified by username and host.
     * @param {DeleteAccountRequest} req
     * @param {function(string, DeleteAccountResponse):void} cb
     * @public
     */
    DeleteAccount(req, cb) {
        let resp = new DeleteAccountResponse();
        this.request("DeleteAccount", req, resp, cb);
    }

    /**
     * This API is used to get the current parameter settings of a database.
     * @param {DescribeDBParametersRequest} req
     * @param {function(string, DescribeDBParametersResponse):void} cb
     * @public
     */
    DescribeDBParameters(req, cb) {
        let resp = new DescribeDBParametersResponse();
        this.request("DescribeDBParameters", req, resp, cb);
    }

    /**
     * This API is used to modify the project to which TencentDB instances belong.
     * @param {ModifyDBInstancesProjectRequest} req
     * @param {function(string, ModifyDBInstancesProjectResponse):void} cb
     * @public
     */
    ModifyDBInstancesProject(req, cb) {
        let resp = new ModifyDBInstancesProjectResponse();
        this.request("ModifyDBInstancesProject", req, resp, cb);
    }

    /**
     * This API is used to view the instance performance data details.
     * @param {DescribeDBPerformanceDetailsRequest} req
     * @param {function(string, DescribeDBPerformanceDetailsResponse):void} cb
     * @public
     */
    DescribeDBPerformanceDetails(req, cb) {
        let resp = new DescribeDBPerformanceDetailsResponse();
        this.request("DescribeDBPerformanceDetails", req, resp, cb);
    }

    /**
     * This API is used to get the list of various logs of a database, including cold backups, binlogs, errlogs, and slowlogs.
     * @param {DescribeDBLogFilesRequest} req
     * @param {function(string, DescribeDBLogFilesResponse):void} cb
     * @public
     */
    DescribeDBLogFiles(req, cb) {
        let resp = new DescribeDBLogFilesResponse();
        this.request("DescribeDBLogFiles", req, resp, cb);
    }

    /**
     * This API is used to modify sync task attributes (currently, only the task name can be modified).
     * @param {ModifySyncTaskAttributeRequest} req
     * @param {function(string, ModifySyncTaskAttributeResponse):void} cb
     * @public
     */
    ModifySyncTaskAttribute(req, cb) {
        let resp = new ModifySyncTaskAttributeResponse();
        this.request("ModifySyncTaskAttribute", req, resp, cb);
    }

    /**
     * This API is used to terminate a pay-as-you-go instance.
     * @param {DestroyHourDBInstanceRequest} req
     * @param {function(string, DestroyHourDBInstanceResponse):void} cb
     * @public
     */
    DestroyHourDBInstance(req, cb) {
        let resp = new DestroyHourDBInstanceResponse();
        this.request("DestroyHourDBInstance", req, resp, cb);
    }

    /**
     * This API is used to enable public network access for a TencentDB instance. After that, you can access the instance with the public domain name and port obtained through the `DescribeDCDBInstances` API.
     * @param {OpenDBExtranetAccessRequest} req
     * @param {function(string, OpenDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenDBExtranetAccess(req, cb) {
        let resp = new OpenDBExtranetAccessResponse();
        this.request("OpenDBExtranetAccess", req, resp, cb);
    }

    /**
     * This API is used to query the TencentDB instance list. It supports filtering instances by project ID, instance ID, private address, and instance name.
If no filter is specified, 20 instances will be returned by default. Up to 100 instances can be returned for a single request.
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the security group details of a project.
     * @param {DescribeProjectSecurityGroupsRequest} req
     * @param {function(string, DescribeProjectSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroups(req, cb) {
        let resp = new DescribeProjectSecurityGroupsResponse();
        this.request("DescribeProjectSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to associate security groups with Tencent Cloud resources in batches.
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        let resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to create a TencentDB account. Multiple accounts can be created for one instance. Accounts with the same username but different hosts are different accounts.
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        let resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
    }

    /**
     * This API is used to initialize TencentDB instances, including setting the default character set and table name case sensitivity.
     * @param {InitDBInstancesRequest} req
     * @param {function(string, InitDBInstancesResponse):void} cb
     * @public
     */
    InitDBInstances(req, cb) {
        let resp = new InitDBInstancesResponse();
        this.request("InitDBInstances", req, resp, cb);
    }

    /**
     * This API is used to set the backup time of a TencentDB instance. The backend system will perform instance backup regularly according to this configuration.
     * @param {ModifyBackupTimeRequest} req
     * @param {function(string, ModifyBackupTimeResponse):void} cb
     * @public
     */
    ModifyBackupTime(req, cb) {
        let resp = new ModifyBackupTimeResponse();
        this.request("ModifyBackupTime", req, resp, cb);
    }

    /**
     * This API is used to modify the permissions of a TencentDB instance account.

**Notes**
- Only the SELECT permission (that is, set the permission parameter to `["SELECT"]`) of the system database `mysql` can be granted.
- An error will be reported if read-write permissions are granted to a read-only account.
- If the parameter of permissions at a level is left empty, no change will be made to the permissions at the level that have been granted. To clear granted permissions at a level, set `GlobalPrivileges.N` or `Privileges` to an empty array.
     * @param {ModifyAccountPrivilegesRequest} req
     * @param {function(string, ModifyAccountPrivilegesResponse):void} cb
     * @public
     */
    ModifyAccountPrivileges(req, cb) {
        let resp = new ModifyAccountPrivilegesResponse();
        this.request("ModifyAccountPrivileges", req, resp, cb);
    }

    /**
     * This API is used to modify the security groups associated with TencentDB.
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to modify the sync mode of a TencentDB instance.
     * @param {ModifyDBSyncModeRequest} req
     * @param {function(string, ModifyDBSyncModeResponse):void} cb
     * @public
     */
    ModifyDBSyncMode(req, cb) {
        let resp = new ModifyDBSyncModeResponse();
        this.request("ModifyDBSyncMode", req, resp, cb);
    }

    /**
     * This API is used to disable public network access for a TencentDB instance, which will make the public IP address inaccessible. The `DescribeDCDBInstances` API will not return the public domain name and port information of the corresponding instance.
     * @param {CloseDBExtranetAccessRequest} req
     * @param {function(string, CloseDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseDBExtranetAccess(req, cb) {
        let resp = new CloseDBExtranetAccessResponse();
        this.request("CloseDBExtranetAccess", req, resp, cb);
    }

    /**
     * This API is used to query the list of accounts of a specified TencentDB instance.
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * This API is used to query the disaster recovery details of an instance.
     * @param {DescribeDcnDetailRequest} req
     * @param {function(string, DescribeDcnDetailResponse):void} cb
     * @public
     */
    DescribeDcnDetail(req, cb) {
        let resp = new DescribeDcnDetailResponse();
        this.request("DescribeDcnDetail", req, resp, cb);
    }

    /**
     * This API is used to copy the permissions of a TencentDB account.
Note: accounts with the same username but different hosts are different accounts. Permissions can only be copied between accounts with the same `Readonly` attribute.
     * @param {CopyAccountPrivilegesRequest} req
     * @param {function(string, CopyAccountPrivilegesResponse):void} cb
     * @public
     */
    CopyAccountPrivileges(req, cb) {
        let resp = new CopyAccountPrivilegesResponse();
        this.request("CopyAccountPrivileges", req, resp, cb);
    }

    /**
     * This API is used to query the list of databases of a TencentDB instance.
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * This API is used to query the security group details of an instance.
     * @param {DescribeDBSecurityGroupsRequest} req
     * @param {function(string, DescribeDBSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBSecurityGroups(req, cb) {
        let resp = new DescribeDBSecurityGroupsResponse();
        this.request("DescribeDBSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to cancel DCN synchronization.
     * @param {CancelDcnJobRequest} req
     * @param {function(string, CancelDcnJobResponse):void} cb
     * @public
     */
    CancelDcnJob(req, cb) {
        let resp = new CancelDcnJobResponse();
        this.request("CancelDcnJob", req, resp, cb);
    }

    /**
     * This API is used to clone an instance account.
     * @param {CloneAccountRequest} req
     * @param {function(string, CloneAccountResponse):void} cb
     * @public
     */
    CloneAccount(req, cb) {
        let resp = new CloneAccountResponse();
        this.request("CloneAccount", req, resp, cb);
    }

    /**
     * This API is used to view the current performance data of a database instance.
     * @param {DescribeDBPerformanceRequest} req
     * @param {function(string, DescribeDBPerformanceResponse):void} cb
     * @public
     */
    DescribeDBPerformance(req, cb) {
        let resp = new DescribeDBPerformanceResponse();
        this.request("DescribeDBPerformance", req, resp, cb);
    }

    /**
     * This API is used to view the configured number of days for retention of database backup logs.
     * @param {DescribeLogFileRetentionPeriodRequest} req
     * @param {function(string, DescribeLogFileRetentionPeriodResponse):void} cb
     * @public
     */
    DescribeLogFileRetentionPeriod(req, cb) {
        let resp = new DescribeLogFileRetentionPeriodResponse();
        this.request("DescribeLogFileRetentionPeriod", req, resp, cb);
    }

    /**
     * This API is used to view the resource usage of a database instance.
     * @param {DescribeDBResourceUsageRequest} req
     * @param {function(string, DescribeDBResourceUsageResponse):void} cb
     * @public
     */
    DescribeDBResourceUsage(req, cb) {
        let resp = new DescribeDBResourceUsageResponse();
        this.request("DescribeDBResourceUsage", req, resp, cb);
    }

    /**
     * This API is used to unassociate security groups from instances in batches.
     * @param {DisassociateSecurityGroupsRequest} req
     * @param {function(string, DisassociateSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateSecurityGroups(req, cb) {
        let resp = new DisassociateSecurityGroupsResponse();
        this.request("DisassociateSecurityGroups", req, resp, cb);
    }


}
module.exports = MariadbClient;
