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
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const CreateMigrationResponse = models.CreateMigrationResponse;
const RestartDBInstanceRequest = models.RestartDBInstanceRequest;
const RegionInfo = models.RegionInfo;
const ModifyBackupStrategyResponse = models.ModifyBackupStrategyResponse;
const MigrateDetail = models.MigrateDetail;
const RunMigrationResponse = models.RunMigrationResponse;
const DescribeProductConfigRequest = models.DescribeProductConfigRequest;
const CreateAccountRequest = models.CreateAccountRequest;
const RollbackInstanceResponse = models.RollbackInstanceResponse;
const DBRemark = models.DBRemark;
const MigrateDB = models.MigrateDB;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeBackupsRequest = models.DescribeBackupsRequest;
const ModifyDBInstanceProjectResponse = models.ModifyDBInstanceProjectResponse;
const DescribeRollbackTimeResponse = models.DescribeRollbackTimeResponse;
const RestoreInstanceRequest = models.RestoreInstanceRequest;
const RunMigrationRequest = models.RunMigrationRequest;
const RestoreInstanceResponse = models.RestoreInstanceResponse;
const ZoneInfo = models.ZoneInfo;
const InquiryPriceCreateDBInstancesRequest = models.InquiryPriceCreateDBInstancesRequest;
const ModifyDBInstanceNetworkRequest = models.ModifyDBInstanceNetworkRequest;
const RecycleDBInstanceRequest = models.RecycleDBInstanceRequest;
const ModifyBackupStrategyRequest = models.ModifyBackupStrategyRequest;
const MigrateTask = models.MigrateTask;
const SpecInfo = models.SpecInfo;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const InquiryPriceCreateDBInstancesResponse = models.InquiryPriceCreateDBInstancesResponse;
const ModifyAccountPrivilegeResponse = models.ModifyAccountPrivilegeResponse;
const DBCreateInfo = models.DBCreateInfo;
const AccountPrivilege = models.AccountPrivilege;
const ModifyMigrationResponse = models.ModifyMigrationResponse;
const AccountCreateInfo = models.AccountCreateInfo;
const DescribeDBsResponse = models.DescribeDBsResponse;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const SlowlogInfo = models.SlowlogInfo;
const ModifyAccountRemarkResponse = models.ModifyAccountRemarkResponse;
const DescribeMigrationsResponse = models.DescribeMigrationsResponse;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DeleteDBRequest = models.DeleteDBRequest;
const MigrateSource = models.MigrateSource;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const ModifyAccountPrivilegeRequest = models.ModifyAccountPrivilegeRequest;
const DescribeMigrationsRequest = models.DescribeMigrationsRequest;
const DescribeFlowStatusRequest = models.DescribeFlowStatusRequest;
const DescribeDBsRequest = models.DescribeDBsRequest;
const ModifyDBNameRequest = models.ModifyDBNameRequest;
const DescribeBackupsResponse = models.DescribeBackupsResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeFlowStatusResponse = models.DescribeFlowStatusResponse;
const DeleteMigrationRequest = models.DeleteMigrationRequest;
const DescribeMigrationDetailRequest = models.DescribeMigrationDetailRequest;
const DBPrivilegeModifyInfo = models.DBPrivilegeModifyInfo;
const TerminateDBInstanceRequest = models.TerminateDBInstanceRequest;
const CreateDBRequest = models.CreateDBRequest;
const RenameRestoreDatabase = models.RenameRestoreDatabase;
const InquiryPriceUpgradeDBInstanceRequest = models.InquiryPriceUpgradeDBInstanceRequest;
const ModifyDBRemarkRequest = models.ModifyDBRemarkRequest;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const AccountPassword = models.AccountPassword;
const DeleteMigrationResponse = models.DeleteMigrationResponse;
const InstanceDBDetail = models.InstanceDBDetail;
const DbRollbackTimeInfo = models.DbRollbackTimeInfo;
const ModifyDBInstanceNetworkResponse = models.ModifyDBInstanceNetworkResponse;
const AccountDetail = models.AccountDetail;
const CreateBackupResponse = models.CreateBackupResponse;
const DBInstance = models.DBInstance;
const DescribeProductConfigResponse = models.DescribeProductConfigResponse;
const CreateMigrationRequest = models.CreateMigrationRequest;
const ModifyDBNameResponse = models.ModifyDBNameResponse;
const Backup = models.Backup;
const AccountRemark = models.AccountRemark;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const AccountPrivilegeModifyInfo = models.AccountPrivilegeModifyInfo;
const MigrateTarget = models.MigrateTarget;
const DescribeZonesResponse = models.DescribeZonesResponse;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const DBPrivilege = models.DBPrivilege;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const ResourceTag = models.ResourceTag;
const RecycleDBInstanceResponse = models.RecycleDBInstanceResponse;
const DeleteAccountRequest = models.DeleteAccountRequest;
const CreateBackupRequest = models.CreateBackupRequest;
const ModifyAccountRemarkRequest = models.ModifyAccountRemarkRequest;
const InquiryPriceUpgradeDBInstanceResponse = models.InquiryPriceUpgradeDBInstanceResponse;
const CloneDBRequest = models.CloneDBRequest;
const DescribeMigrationDetailResponse = models.DescribeMigrationDetailResponse;
const ModifyMigrationRequest = models.ModifyMigrationRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const DeleteDBResponse = models.DeleteDBResponse;
const CreateDBResponse = models.CreateDBResponse;
const RestartDBInstanceResponse = models.RestartDBInstanceResponse;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const DescribeSlowlogsResponse = models.DescribeSlowlogsResponse;
const DBDetail = models.DBDetail;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const DescribeSlowlogsRequest = models.DescribeSlowlogsRequest;
const ModifyDBInstanceProjectRequest = models.ModifyDBInstanceProjectRequest;
const TerminateDBInstanceResponse = models.TerminateDBInstanceResponse;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const RollbackInstanceRequest = models.RollbackInstanceRequest;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const DescribeRollbackTimeRequest = models.DescribeRollbackTimeRequest;
const ModifyDBRemarkResponse = models.ModifyDBRemarkResponse;
const CreateDBInstancesResponse = models.CreateDBInstancesResponse;
const DeleteAccountResponse = models.DeleteAccountResponse;


/**
 * sqlserver client
 * @class
 */
class SqlserverClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sqlserver.tencentcloudapi.com", "2018-03-28", credential, region, profile);
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
     * This API is used to query purchasable specification configuration.
     * @param {DescribeProductConfigRequest} req
     * @param {function(string, DescribeProductConfigResponse):void} cb
     * @public
     */
    DescribeProductConfig(req, cb) {
        let resp = new DescribeProductConfigResponse();
        this.request("DescribeProductConfig", req, resp, cb);
    }


}
module.exports = SqlserverClient;
