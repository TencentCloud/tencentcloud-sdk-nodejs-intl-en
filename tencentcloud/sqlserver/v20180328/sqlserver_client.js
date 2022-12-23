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
const CreateDBInstancesRequest = models.CreateDBInstancesRequest;
const CloneDBResponse = models.CloneDBResponse;
const DealInfo = models.DealInfo;
const ModifyBackupStrategyRequest = models.ModifyBackupStrategyRequest;
const RestoreInstanceRequest = models.RestoreInstanceRequest;
const CrossRegionStatus = models.CrossRegionStatus;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const CreateBusinessIntelligenceFileRequest = models.CreateBusinessIntelligenceFileRequest;
const CreateMigrationResponse = models.CreateMigrationResponse;
const DeleteBackupMigrationRequest = models.DeleteBackupMigrationRequest;
const RestartDBInstanceRequest = models.RestartDBInstanceRequest;
const DeleteBusinessIntelligenceFileRequest = models.DeleteBusinessIntelligenceFileRequest;
const CreateBusinessDBInstancesResponse = models.CreateBusinessDBInstancesResponse;
const StartBackupMigrationResponse = models.StartBackupMigrationResponse;
const RegionInfo = models.RegionInfo;
const ModifyBackupStrategyResponse = models.ModifyBackupStrategyResponse;
const SlaveZones = models.SlaveZones;
const ModifyIncrementalMigrationRequest = models.ModifyIncrementalMigrationRequest;
const MigrateDetail = models.MigrateDetail;
const CreateIncrementalMigrationRequest = models.CreateIncrementalMigrationRequest;
const RunMigrationRequest = models.RunMigrationRequest;
const DescribeDBInstanceInterResponse = models.DescribeDBInstanceInterResponse;
const CreateBusinessIntelligenceFileResponse = models.CreateBusinessIntelligenceFileResponse;
const OpenInterCommunicationRequest = models.OpenInterCommunicationRequest;
const DescribeProductConfigRequest = models.DescribeProductConfigRequest;
const CreateAccountRequest = models.CreateAccountRequest;
const ParamRecord = models.ParamRecord;
const RollbackInstanceResponse = models.RollbackInstanceResponse;
const DeleteIncrementalMigrationRequest = models.DeleteIncrementalMigrationRequest;
const DBRemark = models.DBRemark;
const CloseInterCommunicationRequest = models.CloseInterCommunicationRequest;
const MigrateDB = models.MigrateDB;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeBackupsRequest = models.DescribeBackupsRequest;
const ModifyDBInstanceProjectResponse = models.ModifyDBInstanceProjectResponse;
const DescribeRollbackTimeResponse = models.DescribeRollbackTimeResponse;
const DescribeInstanceParamRecordsResponse = models.DescribeInstanceParamRecordsResponse;
const DescribeIncrementalMigrationRequest = models.DescribeIncrementalMigrationRequest;
const DeleteBusinessIntelligenceFileResponse = models.DeleteBusinessIntelligenceFileResponse;
const ParameterDetail = models.ParameterDetail;
const DescribeBusinessIntelligenceFileResponse = models.DescribeBusinessIntelligenceFileResponse;
const ZoneInfo = models.ZoneInfo;
const InquiryPriceCreateDBInstancesRequest = models.InquiryPriceCreateDBInstancesRequest;
const ModifyInstanceParamRequest = models.ModifyInstanceParamRequest;
const Migration = models.Migration;
const ModifyDBInstanceNetworkRequest = models.ModifyDBInstanceNetworkRequest;
const MigrationDetail = models.MigrationDetail;
const RecycleDBInstanceRequest = models.RecycleDBInstanceRequest;
const BusinessIntelligenceFile = models.BusinessIntelligenceFile;
const DescribeFlowStatusRequest = models.DescribeFlowStatusRequest;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const MigrateTask = models.MigrateTask;
const SpecInfo = models.SpecInfo;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const InquiryPriceCreateDBInstancesResponse = models.InquiryPriceCreateDBInstancesResponse;
const OpenInterCommunicationResponse = models.OpenInterCommunicationResponse;
const ModifyAccountPrivilegeResponse = models.ModifyAccountPrivilegeResponse;
const DBCreateInfo = models.DBCreateInfo;
const AccountPrivilege = models.AccountPrivilege;
const ModifyMigrationResponse = models.ModifyMigrationResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const DescribeDBsResponse = models.DescribeDBsResponse;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const SlowlogInfo = models.SlowlogInfo;
const ModifyAccountRemarkResponse = models.ModifyAccountRemarkResponse;
const DescribeMigrationsResponse = models.DescribeMigrationsResponse;
const DescribeBackupFilesResponse = models.DescribeBackupFilesResponse;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DeleteDBRequest = models.DeleteDBRequest;
const StartIncrementalMigrationRequest = models.StartIncrementalMigrationRequest;
const MigrateSource = models.MigrateSource;
const ModifyDatabaseCTRequest = models.ModifyDatabaseCTRequest;
const ModifyBackupMigrationResponse = models.ModifyBackupMigrationResponse;
const ModifyAccountPrivilegeRequest = models.ModifyAccountPrivilegeRequest;
const CreateBackupMigrationRequest = models.CreateBackupMigrationRequest;
const DescribeDBsNormalResponse = models.DescribeDBsNormalResponse;
const DescribeMigrationsRequest = models.DescribeMigrationsRequest;
const DescribeDBCharsetsRequest = models.DescribeDBCharsetsRequest;
const DescribeInstanceParamRecordsRequest = models.DescribeInstanceParamRecordsRequest;
const DescribeDBsRequest = models.DescribeDBsRequest;
const ModifyDBNameRequest = models.ModifyDBNameRequest;
const ModifyDatabaseMdfRequest = models.ModifyDatabaseMdfRequest;
const DeleteIncrementalMigrationResponse = models.DeleteIncrementalMigrationResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeFlowStatusResponse = models.DescribeFlowStatusResponse;
const DeleteMigrationRequest = models.DeleteMigrationRequest;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const DescribeMigrationDetailRequest = models.DescribeMigrationDetailRequest;
const DBPrivilegeModifyInfo = models.DBPrivilegeModifyInfo;
const TerminateDBInstanceRequest = models.TerminateDBInstanceRequest;
const CreateDBRequest = models.CreateDBRequest;
const InstanceDBDetail = models.InstanceDBDetail;
const DescribeBackupFilesRequest = models.DescribeBackupFilesRequest;
const RenameRestoreDatabase = models.RenameRestoreDatabase;
const InquiryPriceUpgradeDBInstanceRequest = models.InquiryPriceUpgradeDBInstanceRequest;
const ModifyDBRemarkRequest = models.ModifyDBRemarkRequest;
const DescribeBusinessIntelligenceFileRequest = models.DescribeBusinessIntelligenceFileRequest;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const AccountPassword = models.AccountPassword;
const DescribeSlowlogsRequest = models.DescribeSlowlogsRequest;
const DeleteMigrationResponse = models.DeleteMigrationResponse;
const DescribeBackupMigrationRequest = models.DescribeBackupMigrationRequest;
const DescribeBackupUploadSizeResponse = models.DescribeBackupUploadSizeResponse;
const ModifyDatabaseCDCRequest = models.ModifyDatabaseCDCRequest;
const ModifyInstanceParamResponse = models.ModifyInstanceParamResponse;
const StartIncrementalMigrationResponse = models.StartIncrementalMigrationResponse;
const InterInstanceFlow = models.InterInstanceFlow;
const DbRollbackTimeInfo = models.DbRollbackTimeInfo;
const ModifyDBInstanceNetworkResponse = models.ModifyDBInstanceNetworkResponse;
const DbNormalDetail = models.DbNormalDetail;
const AccountDetail = models.AccountDetail;
const ModifyDatabaseMdfResponse = models.ModifyDatabaseMdfResponse;
const CreateBackupResponse = models.CreateBackupResponse;
const DBInstance = models.DBInstance;
const DescribeProductConfigResponse = models.DescribeProductConfigResponse;
const DescribeRollbackTimeRequest = models.DescribeRollbackTimeRequest;
const DescribeUploadBackupInfoResponse = models.DescribeUploadBackupInfoResponse;
const CreateMigrationRequest = models.CreateMigrationRequest;
const DescribeDBInstanceInterRequest = models.DescribeDBInstanceInterRequest;
const InterInstance = models.InterInstance;
const DescribeUploadBackupInfoRequest = models.DescribeUploadBackupInfoRequest;
const ModifyDBNameResponse = models.ModifyDBNameResponse;
const CosUploadBackupFile = models.CosUploadBackupFile;
const StartBackupMigrationRequest = models.StartBackupMigrationRequest;
const Backup = models.Backup;
const DescribeBackupCommandRequest = models.DescribeBackupCommandRequest;
const AccountRemark = models.AccountRemark;
const ModifyDatabaseCDCResponse = models.ModifyDatabaseCDCResponse;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const CreateIncrementalMigrationResponse = models.CreateIncrementalMigrationResponse;
const RunMigrationResponse = models.RunMigrationResponse;
const AccountPrivilegeModifyInfo = models.AccountPrivilegeModifyInfo;
const DescribeBackupMigrationResponse = models.DescribeBackupMigrationResponse;
const AccountCreateInfo = models.AccountCreateInfo;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const DBPrivilege = models.DBPrivilege;
const FileAction = models.FileAction;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const DescribeBackupsResponse = models.DescribeBackupsResponse;
const ResourceTag = models.ResourceTag;
const CreateBackupMigrationResponse = models.CreateBackupMigrationResponse;
const RecycleDBInstanceResponse = models.RecycleDBInstanceResponse;
const DeleteAccountRequest = models.DeleteAccountRequest;
const DeleteBackupMigrationResponse = models.DeleteBackupMigrationResponse;
const CreateBackupRequest = models.CreateBackupRequest;
const DescribeDBsNormalRequest = models.DescribeDBsNormalRequest;
const BackupFile = models.BackupFile;
const ModifyAccountRemarkRequest = models.ModifyAccountRemarkRequest;
const ModifyIncrementalMigrationResponse = models.ModifyIncrementalMigrationResponse;
const MigrationAction = models.MigrationAction;
const InquiryPriceUpgradeDBInstanceResponse = models.InquiryPriceUpgradeDBInstanceResponse;
const CloneDBRequest = models.CloneDBRequest;
const DescribeMigrationDetailResponse = models.DescribeMigrationDetailResponse;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const ModifyMigrationRequest = models.ModifyMigrationRequest;
const CrossBackupAddr = models.CrossBackupAddr;
const Parameter = models.Parameter;
const CreateAccountResponse = models.CreateAccountResponse;
const DescribeBackupUploadSizeRequest = models.DescribeBackupUploadSizeRequest;
const DeleteDBResponse = models.DeleteDBResponse;
const CreateDBResponse = models.CreateDBResponse;
const CloseInterCommunicationResponse = models.CloseInterCommunicationResponse;
const RestartDBInstanceResponse = models.RestartDBInstanceResponse;
const CreateBusinessDBInstancesRequest = models.CreateBusinessDBInstancesRequest;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const DescribeSlowlogsResponse = models.DescribeSlowlogsResponse;
const DBDetail = models.DBDetail;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const ModifyDBInstanceProjectRequest = models.ModifyDBInstanceProjectRequest;
const MigrationStep = models.MigrationStep;
const TerminateDBInstanceResponse = models.TerminateDBInstanceResponse;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const RollbackInstanceRequest = models.RollbackInstanceRequest;
const RestoreInstanceResponse = models.RestoreInstanceResponse;
const DescribeBackupCommandResponse = models.DescribeBackupCommandResponse;
const ModifyDatabaseCTResponse = models.ModifyDatabaseCTResponse;
const DescribeIncrementalMigrationResponse = models.DescribeIncrementalMigrationResponse;
const ModifyDBRemarkResponse = models.ModifyDBRemarkResponse;
const MigrateTarget = models.MigrateTarget;
const CreateDBInstancesResponse = models.CreateDBInstancesResponse;
const ModifyBackupMigrationRequest = models.ModifyBackupMigrationRequest;
const DeleteAccountResponse = models.DeleteAccountResponse;
const DescribeDBCharsetsResponse = models.DescribeDBCharsetsResponse;


/**
 * sqlserver client
 * @class
 */
class SqlserverClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sqlserver.tencentcloudapi.com", "2018-03-28", credential, region, profile);
    }
    
    /**
     * This API is used to shrink database MDF files.
     * @param {ModifyDatabaseMdfRequest} req
     * @param {function(string, ModifyDatabaseMdfResponse):void} cb
     * @public
     */
    ModifyDatabaseMdf(req, cb) {
        let resp = new ModifyDatabaseMdfResponse();
        this.request("ModifyDatabaseMdf", req, resp, cb);
    }

    /**
     * This API is used to modify the backup policy.
     * @param {ModifyBackupStrategyRequest} req
     * @param {function(string, ModifyBackupStrategyResponse):void} cb
     * @public
     */
    ModifyBackupStrategy(req, cb) {
        let resp = new ModifyBackupStrategyResponse();
        this.request("ModifyBackupStrategy", req, resp, cb);
    }

    /**
     * This API is used to modify an existing migration task.
     * @param {ModifyMigrationRequest} req
     * @param {function(string, ModifyMigrationResponse):void} cb
     * @public
     */
    ModifyMigration(req, cb) {
        let resp = new ModifyMigrationResponse();
        this.request("ModifyMigration", req, resp, cb);
    }

    /**
     * This API is used to query order information.
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        let resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }

    /**
     * This API is used to modify account remarks.
     * @param {ModifyAccountRemarkRequest} req
     * @param {function(string, ModifyAccountRemarkResponse):void} cb
     * @public
     */
    ModifyAccountRemark(req, cb) {
        let resp = new ModifyAccountRemarkResponse();
        this.request("ModifyAccountRemark", req, resp, cb);
    }

    /**
     * This API is used to isolate an instance to move it into a recycle bin.
     * @param {TerminateDBInstanceRequest} req
     * @param {function(string, TerminateDBInstanceResponse):void} cb
     * @public
     */
    TerminateDBInstance(req, cb) {
        let resp = new TerminateDBInstanceResponse();
        this.request("TerminateDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query purchasable specification configuration.
     * @param {DescribeProductConfigRequest} req
     * @param {function(string, DescribeProductConfigResponse):void} cb
     * @public
     */
    DescribeProductConfig(req, cb) {
        let resp = new DescribeProductConfigResponse();
        this.request("DescribeProductConfig", req, resp, cb);
    }

    /**
     * This API is used to query the database character sets supported by an instance.
     * @param {DescribeDBCharsetsRequest} req
     * @param {function(string, DescribeDBCharsetsResponse):void} cb
     * @public
     */
    DescribeDBCharsets(req, cb) {
        let resp = new DescribeDBCharsetsResponse();
        this.request("DescribeDBCharsets", req, resp, cb);
    }

    /**
     * This API is used to query the list of backups.
     * @param {DescribeBackupsRequest} req
     * @param {function(string, DescribeBackupsResponse):void} cb
     * @public
     */
    DescribeBackups(req, cb) {
        let resp = new DescribeBackupsResponse();
        this.request("DescribeBackups", req, resp, cb);
    }

    /**
     * This API is used to query migration task details.
     * @param {DescribeMigrationDetailRequest} req
     * @param {function(string, DescribeMigrationDetailResponse):void} cb
     * @public
     */
    DescribeMigrationDetail(req, cb) {
        let resp = new DescribeMigrationDetailResponse();
        this.request("DescribeMigrationDetail", req, resp, cb);
    }

    /**
     * This API is used to modify instance account permissions.
     * @param {ModifyAccountPrivilegeRequest} req
     * @param {function(string, ModifyAccountPrivilegeResponse):void} cb
     * @public
     */
    ModifyAccountPrivilege(req, cb) {
        let resp = new ModifyAccountPrivilegeResponse();
        this.request("ModifyAccountPrivilege", req, resp, cb);
    }

    /**
     * This API is used to modify database remarks.
     * @param {ModifyDBRemarkRequest} req
     * @param {function(string, ModifyDBRemarkResponse):void} cb
     * @public
     */
    ModifyDBRemark(req, cb) {
        let resp = new ModifyDBRemarkResponse();
        this.request("ModifyDBRemark", req, resp, cb);
    }

    /**
     * This API is used to rename a database.
     * @param {ModifyDBNameRequest} req
     * @param {function(string, ModifyDBNameResponse):void} cb
     * @public
     */
    ModifyDBName(req, cb) {
        let resp = new ModifyDBNameResponse();
        this.request("ModifyDBName", req, resp, cb);
    }

    /**
     * This API is used to restart a database instance.
     * @param {RestartDBInstanceRequest} req
     * @param {function(string, RestartDBInstanceResponse):void} cb
     * @public
     */
    RestartDBInstance(req, cb) {
        let resp = new RestartDBInstanceResponse();
        this.request("RestartDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the price of requested instances.
     * @param {InquiryPriceCreateDBInstancesRequest} req
     * @param {function(string, InquiryPriceCreateDBInstancesResponse):void} cb
     * @public
     */
    InquiryPriceCreateDBInstances(req, cb) {
        let resp = new InquiryPriceCreateDBInstancesResponse();
        this.request("InquiryPriceCreateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to clone and rename databases of an instance. The clones are still in the instance from which they are cloned.
     * @param {CloneDBRequest} req
     * @param {function(string, CloneDBResponse):void} cb
     * @public
     */
    CloneDB(req, cb) {
        let resp = new CloneDBResponse();
        this.request("CloneDB", req, resp, cb);
    }

    /**
     * This API is used to modify instance parameters.
<b>Note</b>: if <b>the instance needs to be restarted</b> for the modified parameter to take effect, <b>it will be restarted</b> immediately or during the maintenance time according to the `WaitSwitch` parameter.
Before you modify a parameter, you can use the `DescribeInstanceParams` API to query whether the instance needs to be restarted.
     * @param {ModifyInstanceParamRequest} req
     * @param {function(string, ModifyInstanceParamResponse):void} cb
     * @public
     */
    ModifyInstanceParam(req, cb) {
        let resp = new ModifyInstanceParamResponse();
        this.request("ModifyInstanceParam", req, resp, cb);
    }

    /**
     * This API is used to modify the project to which a database instance belongs.
     * @param {ModifyDBInstanceProjectRequest} req
     * @param {function(string, ModifyDBInstanceProjectResponse):void} cb
     * @public
     */
    ModifyDBInstanceProject(req, cb) {
        let resp = new ModifyDBInstanceProjectResponse();
        this.request("ModifyDBInstanceProject", req, resp, cb);
    }

    /**
     * This API is used to enable or disable the change tracking (CT) feature.
     * @param {ModifyDatabaseCTRequest} req
     * @param {function(string, ModifyDatabaseCTResponse):void} cb
     * @public
     */
    ModifyDatabaseCT(req, cb) {
        let resp = new ModifyDatabaseCTResponse();
        this.request("ModifyDatabaseCT", req, resp, cb);
    }

    /**
     * This API is used to get file information of slow query logs.
     * @param {DescribeSlowlogsRequest} req
     * @param {function(string, DescribeSlowlogsResponse):void} cb
     * @public
     */
    DescribeSlowlogs(req, cb) {
        let resp = new DescribeSlowlogsResponse();
        this.request("DescribeSlowlogs", req, resp, cb);
    }

    /**
     * This API is used to delete an instance account.
     * @param {DeleteAccountRequest} req
     * @param {function(string, DeleteAccountResponse):void} cb
     * @public
     */
    DeleteAccount(req, cb) {
        let resp = new DeleteAccountResponse();
        this.request("DeleteAccount", req, resp, cb);
    }

    /**
     * This API is used to query flow status.
     * @param {DescribeFlowStatusRequest} req
     * @param {function(string, DescribeFlowStatusResponse):void} cb
     * @public
     */
    DescribeFlowStatus(req, cb) {
        let resp = new DescribeFlowStatusResponse();
        this.request("DescribeFlowStatus", req, resp, cb);
    }

    /**
     * This API is used to query database configurations. It does not return information of the accounts that have permissions to operate the database.
     * @param {DescribeDBsNormalRequest} req
     * @param {function(string, DescribeDBsNormalResponse):void} cb
     * @public
     */
    DescribeDBsNormal(req, cb) {
        let resp = new DescribeDBsNormalResponse();
        this.request("DescribeDBsNormal", req, resp, cb);
    }

    /**
     * This API is used to upgrade an instance.
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req, cb) {
        let resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the list of eligible migration tasks based on the entered criteria.
     * @param {DescribeMigrationsRequest} req
     * @param {function(string, DescribeMigrationsResponse):void} cb
     * @public
     */
    DescribeMigrations(req, cb) {
        let resp = new DescribeMigrationsResponse();
        this.request("DescribeMigrations", req, resp, cb);
    }

    /**
     * This API is used to query an incremental backup import task.
     * @param {DescribeIncrementalMigrationRequest} req
     * @param {function(string, DescribeIncrementalMigrationResponse):void} cb
     * @public
     */
    DescribeIncrementalMigration(req, cb) {
        let resp = new DescribeIncrementalMigrationResponse();
        this.request("DescribeIncrementalMigration", req, resp, cb);
    }

    /**
     * This API is used to rename an instance.
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        let resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }

    /**
     * This API is used to enable instance interconnection, which can interconnect business intelligence services.
     * @param {OpenInterCommunicationRequest} req
     * @param {function(string, OpenInterCommunicationResponse):void} cb
     * @public
     */
    OpenInterCommunication(req, cb) {
        let resp = new OpenInterCommunicationResponse();
        this.request("OpenInterCommunication", req, resp, cb);
    }

    /**
     * This API is used to create a backup.
     * @param {CreateBackupRequest} req
     * @param {function(string, CreateBackupResponse):void} cb
     * @public
     */
    CreateBackup(req, cb) {
        let resp = new CreateBackupResponse();
        this.request("CreateBackup", req, resp, cb);
    }

    /**
     * This API is used to create an instance.
     * @param {CreateDBInstancesRequest} req
     * @param {function(string, CreateDBInstancesResponse):void} cb
     * @public
     */
    CreateDBInstances(req, cb) {
        let resp = new CreateDBInstancesResponse();
        this.request("CreateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to roll back an instance.
     * @param {RollbackInstanceRequest} req
     * @param {function(string, RollbackInstanceResponse):void} cb
     * @public
     */
    RollbackInstance(req, cb) {
        let resp = new RollbackInstanceResponse();
        this.request("RollbackInstance", req, resp, cb);
    }

    /**
     * This API is used to create a migration task.
     * @param {CreateMigrationRequest} req
     * @param {function(string, CreateMigrationResponse):void} cb
     * @public
     */
    CreateMigration(req, cb) {
        let resp = new CreateMigrationResponse();
        this.request("CreateMigration", req, resp, cb);
    }

    /**
     * This API is used to create an incremental backup import task.
     * @param {DescribeBackupMigrationRequest} req
     * @param {function(string, DescribeBackupMigrationResponse):void} cb
     * @public
     */
    DescribeBackupMigration(req, cb) {
        let resp = new DescribeBackupMigrationResponse();
        this.request("DescribeBackupMigration", req, resp, cb);
    }

    /**
     * This API is used to delete a business intelligence service file.
     * @param {DeleteBusinessIntelligenceFileRequest} req
     * @param {function(string, DeleteBusinessIntelligenceFileResponse):void} cb
     * @public
     */
    DeleteBusinessIntelligenceFile(req, cb) {
        let resp = new DeleteBusinessIntelligenceFileResponse();
        this.request("DeleteBusinessIntelligenceFile", req, resp, cb);
    }

    /**
     * This API is used to create a backup import task.
     * @param {CreateBackupMigrationRequest} req
     * @param {function(string, CreateBackupMigrationResponse):void} cb
     * @public
     */
    CreateBackupMigration(req, cb) {
        let resp = new CreateBackupMigrationResponse();
        this.request("CreateBackupMigration", req, resp, cb);
    }

    /**
     * This API is used to query the list of instances.
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the commands of creating backups canonically.
     * @param {DescribeBackupCommandRequest} req
     * @param {function(string, DescribeBackupCommandResponse):void} cb
     * @public
     */
    DescribeBackupCommand(req, cb) {
        let resp = new DescribeBackupCommandResponse();
        this.request("DescribeBackupCommand", req, resp, cb);
    }

    /**
     * This API is used to query the files required by business intelligence service.
     * @param {DescribeBusinessIntelligenceFileRequest} req
     * @param {function(string, DescribeBusinessIntelligenceFileResponse):void} cb
     * @public
     */
    DescribeBusinessIntelligenceFile(req, cb) {
        let resp = new DescribeBusinessIntelligenceFileResponse();
        this.request("DescribeBusinessIntelligenceFile", req, resp, cb);
    }

    /**
     * This API is used to start running a migration task.
     * @param {RunMigrationRequest} req
     * @param {function(string, RunMigrationResponse):void} cb
     * @public
     */
    RunMigration(req, cb) {
        let resp = new RunMigrationResponse();
        this.request("RunMigration", req, resp, cb);
    }

    /**
     * This API is used to start a backup import task.
     * @param {StartBackupMigrationRequest} req
     * @param {function(string, StartBackupMigrationResponse):void} cb
     * @public
     */
    StartBackupMigration(req, cb) {
        let resp = new StartBackupMigrationResponse();
        this.request("StartBackupMigration", req, resp, cb);
    }

    /**
     * This API is used to delete an incremental backup import task.
     * @param {DeleteIncrementalMigrationRequest} req
     * @param {function(string, DeleteIncrementalMigrationResponse):void} cb
     * @public
     */
    DeleteIncrementalMigration(req, cb) {
        let resp = new DeleteIncrementalMigrationResponse();
        this.request("DeleteIncrementalMigration", req, resp, cb);
    }

    /**
     * This API is used to create an instance account.
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        let resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
    }

    /**
     * This API is used to start an incremental backup import task.
     * @param {StartIncrementalMigrationRequest} req
     * @param {function(string, StartIncrementalMigrationResponse):void} cb
     * @public
     */
    StartIncrementalMigration(req, cb) {
        let resp = new StartIncrementalMigrationResponse();
        this.request("StartIncrementalMigration", req, resp, cb);
    }

    /**
     * This API is used to query the upgrade price of an instance.
     * @param {InquiryPriceUpgradeDBInstanceRequest} req
     * @param {function(string, InquiryPriceUpgradeDBInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpgradeDBInstance(req, cb) {
        let resp = new InquiryPriceUpgradeDBInstanceResponse();
        this.request("InquiryPriceUpgradeDBInstance", req, resp, cb);
    }

    /**
     * This API is used to reset the account password of an instance.
     * @param {ResetAccountPasswordRequest} req
     * @param {function(string, ResetAccountPasswordResponse):void} cb
     * @public
     */
    ResetAccountPassword(req, cb) {
        let resp = new ResetAccountPasswordResponse();
        this.request("ResetAccountPassword", req, resp, cb);
    }

    /**
     * This API is used to create an incremental backup import task.
     * @param {CreateIncrementalMigrationRequest} req
     * @param {function(string, CreateIncrementalMigrationResponse):void} cb
     * @public
     */
    CreateIncrementalMigration(req, cb) {
        let resp = new CreateIncrementalMigrationResponse();
        this.request("CreateIncrementalMigration", req, resp, cb);
    }

    /**
     * This API is used to query the list of databases
     * @param {DescribeDBsRequest} req
     * @param {function(string, DescribeDBsResponse):void} cb
     * @public
     */
    DescribeDBs(req, cb) {
        let resp = new DescribeDBsResponse();
        this.request("DescribeDBs", req, resp, cb);
    }

    /**
     * This API is used to query the size of uploaded backup files. It is valid if the backup file type is `COS_UPLOAD` (the file is stored in COS).
     * @param {DescribeBackupUploadSizeRequest} req
     * @param {function(string, DescribeBackupUploadSizeResponse):void} cb
     * @public
     */
    DescribeBackupUploadSize(req, cb) {
        let resp = new DescribeBackupUploadSizeResponse();
        this.request("DescribeBackupUploadSize", req, resp, cb);
    }

    /**
     * This API is used to query purchasable regions.
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * This API is used to delete a migration task.
     * @param {DeleteMigrationRequest} req
     * @param {function(string, DeleteMigrationResponse):void} cb
     * @public
     */
    DeleteMigration(req, cb) {
        let resp = new DeleteMigrationResponse();
        this.request("DeleteMigration", req, resp, cb);
    }

    /**
     * This API is used to modify a backup import task.
     * @param {ModifyBackupMigrationRequest} req
     * @param {function(string, ModifyBackupMigrationResponse):void} cb
     * @public
     */
    ModifyBackupMigration(req, cb) {
        let resp = new ModifyBackupMigrationResponse();
        this.request("ModifyBackupMigration", req, resp, cb);
    }

    /**
     * This API is used to query the parameter list of an instance.
     * @param {DescribeInstanceParamsRequest} req
     * @param {function(string, DescribeInstanceParamsResponse):void} cb
     * @public
     */
    DescribeInstanceParams(req, cb) {
        let resp = new DescribeInstanceParamsResponse();
        this.request("DescribeInstanceParams", req, resp, cb);
    }

    /**
     * This API is used to switch a running instance from a VPC to another.
     * @param {ModifyDBInstanceNetworkRequest} req
     * @param {function(string, ModifyDBInstanceNetworkResponse):void} cb
     * @public
     */
    ModifyDBInstanceNetwork(req, cb) {
        let resp = new ModifyDBInstanceNetworkResponse();
        this.request("ModifyDBInstanceNetwork", req, resp, cb);
    }

    /**
     * This API is used to query the list of unarchived database backup files.
     * @param {DescribeBackupFilesRequest} req
     * @param {function(string, DescribeBackupFilesResponse):void} cb
     * @public
     */
    DescribeBackupFiles(req, cb) {
        let resp = new DescribeBackupFilesResponse();
        this.request("DescribeBackupFiles", req, resp, cb);
    }

    /**
     * This API is used to pull the list of instance accounts.
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * This API is used to modify an incremental backup import task.
     * @param {ModifyIncrementalMigrationRequest} req
     * @param {function(string, ModifyIncrementalMigrationResponse):void} cb
     * @public
     */
    ModifyIncrementalMigration(req, cb) {
        let resp = new ModifyIncrementalMigrationResponse();
        this.request("ModifyIncrementalMigration", req, resp, cb);
    }

    /**
     * This API is used to restore an instance from a backup file.
     * @param {RestoreInstanceRequest} req
     * @param {function(string, RestoreInstanceResponse):void} cb
     * @public
     */
    RestoreInstance(req, cb) {
        let resp = new RestoreInstanceResponse();
        this.request("RestoreInstance", req, resp, cb);
    }

    /**
     * This API is used to query the time range available for instance rollback.
     * @param {DescribeRollbackTimeRequest} req
     * @param {function(string, DescribeRollbackTimeResponse):void} cb
     * @public
     */
    DescribeRollbackTime(req, cb) {
        let resp = new DescribeRollbackTimeResponse();
        this.request("DescribeRollbackTime", req, resp, cb);
    }

    /**
     * This API is used to create a database.
     * @param {CreateDBRequest} req
     * @param {function(string, CreateDBResponse):void} cb
     * @public
     */
    CreateDB(req, cb) {
        let resp = new CreateDBResponse();
        this.request("CreateDB", req, resp, cb);
    }

    /**
     * This API is used to drop a database.
     * @param {DeleteDBRequest} req
     * @param {function(string, DeleteDBResponse):void} cb
     * @public
     */
    DeleteDB(req, cb) {
        let resp = new DeleteDBResponse();
        this.request("DeleteDB", req, resp, cb);
    }

    /**
     * This API is used to create a business intelligence service instance.
     * @param {CreateBusinessDBInstancesRequest} req
     * @param {function(string, CreateBusinessDBInstancesResponse):void} cb
     * @public
     */
    CreateBusinessDBInstances(req, cb) {
        let resp = new CreateBusinessDBInstancesResponse();
        this.request("CreateBusinessDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query currently purchasable AZs.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * This API is used to delete a backup import task.
     * @param {DeleteBackupMigrationRequest} req
     * @param {function(string, DeleteBackupMigrationResponse):void} cb
     * @public
     */
    DeleteBackupMigration(req, cb) {
        let resp = new DeleteBackupMigrationResponse();
        this.request("DeleteBackupMigration", req, resp, cb);
    }

    /**
     * This API is used to query the parameter modification records of an instance.
     * @param {DescribeInstanceParamRecordsRequest} req
     * @param {function(string, DescribeInstanceParamRecordsResponse):void} cb
     * @public
     */
    DescribeInstanceParamRecords(req, cb) {
        let resp = new DescribeInstanceParamRecordsResponse();
        this.request("DescribeInstanceParamRecords", req, resp, cb);
    }

    /**
     * This API is used to query a backup upload permission.
     * @param {DescribeUploadBackupInfoRequest} req
     * @param {function(string, DescribeUploadBackupInfoResponse):void} cb
     * @public
     */
    DescribeUploadBackupInfo(req, cb) {
        let resp = new DescribeUploadBackupInfoResponse();
        this.request("DescribeUploadBackupInfo", req, resp, cb);
    }

    /**
     * This API is used to query the information of the interconnected instances.
     * @param {DescribeDBInstanceInterRequest} req
     * @param {function(string, DescribeDBInstanceInterResponse):void} cb
     * @public
     */
    DescribeDBInstanceInter(req, cb) {
        let resp = new DescribeDBInstanceInterResponse();
        this.request("DescribeDBInstanceInter", req, resp, cb);
    }

    /**
     * This API is used to add a business intelligence service file.
     * @param {CreateBusinessIntelligenceFileRequest} req
     * @param {function(string, CreateBusinessIntelligenceFileResponse):void} cb
     * @public
     */
    CreateBusinessIntelligenceFile(req, cb) {
        let resp = new CreateBusinessIntelligenceFileResponse();
        this.request("CreateBusinessIntelligenceFile", req, resp, cb);
    }

    /**
     * This API is used to return a deactivated SQL Server instance.
     * @param {RecycleDBInstanceRequest} req
     * @param {function(string, RecycleDBInstanceResponse):void} cb
     * @public
     */
    RecycleDBInstance(req, cb) {
        let resp = new RecycleDBInstanceResponse();
        this.request("RecycleDBInstance", req, resp, cb);
    }

    /**
     * This API is used to disable instance interconnection.
     * @param {CloseInterCommunicationRequest} req
     * @param {function(string, CloseInterCommunicationResponse):void} cb
     * @public
     */
    CloseInterCommunication(req, cb) {
        let resp = new CloseInterCommunicationResponse();
        this.request("CloseInterCommunication", req, resp, cb);
    }

    /**
     * This API is used to enable or disable the change data capture (CDC) feature.
     * @param {ModifyDatabaseCDCRequest} req
     * @param {function(string, ModifyDatabaseCDCResponse):void} cb
     * @public
     */
    ModifyDatabaseCDC(req, cb) {
        let resp = new ModifyDatabaseCDCResponse();
        this.request("ModifyDatabaseCDC", req, resp, cb);
    }


}
module.exports = SqlserverClient;
