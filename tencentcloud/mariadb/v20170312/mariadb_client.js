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
const DescribeDBLogFilesRequest = models.DescribeDBLogFilesRequest;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const MonitorData = models.MonitorData;
const DeleteAccountRequest = models.DeleteAccountRequest;
const ModifyDBParametersResponse = models.ModifyDBParametersResponse;
const DescribeFlowRequest = models.DescribeFlowRequest;
const CopyAccountPrivilegesRequest = models.CopyAccountPrivilegesRequest;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const DescribeDBPerformanceResponse = models.DescribeDBPerformanceResponse;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const GrantAccountPrivilegesRequest = models.GrantAccountPrivilegesRequest;
const OpenDBExtranetAccessResponse = models.OpenDBExtranetAccessResponse;
const DescribeDBParametersRequest = models.DescribeDBParametersRequest;
const CopyAccountPrivilegesResponse = models.CopyAccountPrivilegesResponse;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const OpenDBExtranetAccessRequest = models.OpenDBExtranetAccessRequest;
const ParamDesc = models.ParamDesc;
const CloneAccountRequest = models.CloneAccountRequest;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const ModifyBackupTimeRequest = models.ModifyBackupTimeRequest;
const ParamModifyResult = models.ParamModifyResult;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const ModifyBackupTimeResponse = models.ModifyBackupTimeResponse;
const ResourceUsageMonitorSet = models.ResourceUsageMonitorSet;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const DescribeDBSlowLogsRequest = models.DescribeDBSlowLogsRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const PerformanceMonitorSet = models.PerformanceMonitorSet;
const DescribeLogFileRetentionPeriodResponse = models.DescribeLogFileRetentionPeriodResponse;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const InitDBInstancesRequest = models.InitDBInstancesRequest;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const ConstraintRange = models.ConstraintRange;
const DBInstance = models.DBInstance;
const DescribeDBResourceUsageResponse = models.DescribeDBResourceUsageResponse;
const LogFileInfo = models.LogFileInfo;
const DescribeDBResourceUsageDetailsRequest = models.DescribeDBResourceUsageDetailsRequest;
const Database = models.Database;
const CreateAccountRequest = models.CreateAccountRequest;
const InitDBInstancesResponse = models.InitDBInstancesResponse;
const DescribeBackupTimeRequest = models.DescribeBackupTimeRequest;
const DBAccount = models.DBAccount;
const DescribeDBParametersResponse = models.DescribeDBParametersResponse;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const DescribeDBPerformanceDetailsResponse = models.DescribeDBPerformanceDetailsResponse;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const DescribeDBSlowLogsResponse = models.DescribeDBSlowLogsResponse;
const ModifyLogFileRetentionPeriodRequest = models.ModifyLogFileRetentionPeriodRequest;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const ModifyDBParametersRequest = models.ModifyDBParametersRequest;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const GrantAccountPrivilegesResponse = models.GrantAccountPrivilegesResponse;
const DescribeLogFileRetentionPeriodRequest = models.DescribeLogFileRetentionPeriodRequest;
const DescribeFlowResponse = models.DescribeFlowResponse;
const DescribeDBResourceUsageDetailsResponse = models.DescribeDBResourceUsageDetailsResponse;
const CloneAccountResponse = models.CloneAccountResponse;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const DescribeDBPerformanceDetailsRequest = models.DescribeDBPerformanceDetailsRequest;
const DescribeBackupTimeResponse = models.DescribeBackupTimeResponse;
const SlowLogData = models.SlowLogData;
const ModifyLogFileRetentionPeriodResponse = models.ModifyLogFileRetentionPeriodResponse;
const DescribeDBResourceUsageRequest = models.DescribeDBResourceUsageRequest;
const DBParamValue = models.DBParamValue;
const ParamConstraint = models.ParamConstraint;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const DBBackupTimeConfig = models.DBBackupTimeConfig;
const DescribeDBPerformanceRequest = models.DescribeDBPerformanceRequest;
const DescribeDBLogFilesResponse = models.DescribeDBLogFilesResponse;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
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


}
module.exports = MariadbClient;
