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
const SetAutoRenewFlagRequest = models.SetAutoRenewFlagRequest;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const DescribeDBXlogsRequest = models.DescribeDBXlogsRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const DeleteReadOnlyGroupResponse = models.DeleteReadOnlyGroupResponse;
const CreateInstancesRequest = models.CreateInstancesRequest;
const SpecItemInfo = models.SpecItemInfo;
const ModifyDBInstanceReadOnlyGroupResponse = models.ModifyDBInstanceReadOnlyGroupResponse;
const OpenServerlessDBExtranetAccessRequest = models.OpenServerlessDBExtranetAccessRequest;
const RenewInstanceResponse = models.RenewInstanceResponse;
const DeleteServerlessDBInstanceResponse = models.DeleteServerlessDBInstanceResponse;
const ModifyReadOnlyGroupConfigRequest = models.ModifyReadOnlyGroupConfigRequest;
const AddDBInstanceToReadOnlyGroupRequest = models.AddDBInstanceToReadOnlyGroupRequest;
const DescribeProductConfigRequest = models.DescribeProductConfigRequest;
const InitDBInstancesResponse = models.InitDBInstancesResponse;
const RenewInstanceRequest = models.RenewInstanceRequest;
const RebalanceReadOnlyGroupRequest = models.RebalanceReadOnlyGroupRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DBInstanceNetInfo = models.DBInstanceNetInfo;
const ZoneInfo = models.ZoneInfo;
const InquiryPriceCreateDBInstancesRequest = models.InquiryPriceCreateDBInstancesRequest;
const NormalQueryItem = models.NormalQueryItem;
const Tag = models.Tag;
const DescribeDBInstanceAttributeRequest = models.DescribeDBInstanceAttributeRequest;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const ServerlessDBAccount = models.ServerlessDBAccount;
const ModifyDBInstanceReadOnlyGroupRequest = models.ModifyDBInstanceReadOnlyGroupRequest;
const AddDBInstanceToReadOnlyGroupResponse = models.AddDBInstanceToReadOnlyGroupResponse;
const CreateReadOnlyDBInstanceResponse = models.CreateReadOnlyDBInstanceResponse;
const CreateInstancesResponse = models.CreateInstancesResponse;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const InquiryPriceCreateDBInstancesResponse = models.InquiryPriceCreateDBInstancesResponse;
const DisIsolateDBInstancesRequest = models.DisIsolateDBInstancesRequest;
const ServerlessDBInstanceNetInfo = models.ServerlessDBInstanceNetInfo;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const ModifyAccountRemarkResponse = models.ModifyAccountRemarkResponse;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DescribeReadOnlyGroupsResponse = models.DescribeReadOnlyGroupsResponse;
const SetAutoRenewFlagResponse = models.SetAutoRenewFlagResponse;
const SpecInfo = models.SpecInfo;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const CloseServerlessDBExtranetAccessRequest = models.CloseServerlessDBExtranetAccessRequest;
const ReadOnlyGroup = models.ReadOnlyGroup;
const PgDeal = models.PgDeal;
const DescribeDBErrlogsRequest = models.DescribeDBErrlogsRequest;
const DestroyDBInstanceRequest = models.DestroyDBInstanceRequest;
const OpenServerlessDBExtranetAccessResponse = models.OpenServerlessDBExtranetAccessResponse;
const Xlog = models.Xlog;
const DescribeServerlessDBInstancesRequest = models.DescribeServerlessDBInstancesRequest;
const DescribeDBBackupsResponse = models.DescribeDBBackupsResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const ServerlessDBInstance = models.ServerlessDBInstance;
const CreateReadOnlyGroupRequest = models.CreateReadOnlyGroupRequest;
const CloseServerlessDBExtranetAccessResponse = models.CloseServerlessDBExtranetAccessResponse;
const RestartDBInstanceRequest = models.RestartDBInstanceRequest;
const IsolateDBInstancesResponse = models.IsolateDBInstancesResponse;
const OpenDBExtranetAccessResponse = models.OpenDBExtranetAccessResponse;
const InquiryPriceUpgradeDBInstanceRequest = models.InquiryPriceUpgradeDBInstanceRequest;
const RebalanceReadOnlyGroupResponse = models.RebalanceReadOnlyGroupResponse;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const InquiryPriceRenewDBInstanceResponse = models.InquiryPriceRenewDBInstanceResponse;
const ErrLogDetail = models.ErrLogDetail;
const DescribeServerlessDBInstancesResponse = models.DescribeServerlessDBInstancesResponse;
const IsolateDBInstancesRequest = models.IsolateDBInstancesRequest;
const InitDBInstancesRequest = models.InitDBInstancesRequest;
const DBInstance = models.DBInstance;
const DescribeProductConfigResponse = models.DescribeProductConfigResponse;
const DeleteReadOnlyGroupRequest = models.DeleteReadOnlyGroupRequest;
const DescribeDBBackupsRequest = models.DescribeDBBackupsRequest;
const Filter = models.Filter;
const DisIsolateDBInstancesResponse = models.DisIsolateDBInstancesResponse;
const OpenDBExtranetAccessRequest = models.OpenDBExtranetAccessRequest;
const SlowlogDetail = models.SlowlogDetail;
const RemoveDBInstanceFromReadOnlyGroupRequest = models.RemoveDBInstanceFromReadOnlyGroupRequest;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const CreateReadOnlyDBInstanceRequest = models.CreateReadOnlyDBInstanceRequest;
const DescribeZonesResponse = models.DescribeZonesResponse;
const CreateServerlessDBInstanceResponse = models.CreateServerlessDBInstanceResponse;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const ModifyAccountRemarkRequest = models.ModifyAccountRemarkRequest;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
const CreateServerlessDBInstanceRequest = models.CreateServerlessDBInstanceRequest;
const InquiryPriceRenewDBInstanceRequest = models.InquiryPriceRenewDBInstanceRequest;
const CreateReadOnlyGroupResponse = models.CreateReadOnlyGroupResponse;
const DeleteServerlessDBInstanceRequest = models.DeleteServerlessDBInstanceRequest;
const ModifyReadOnlyGroupConfigResponse = models.ModifyReadOnlyGroupConfigResponse;
const AccountInfo = models.AccountInfo;
const DBBackup = models.DBBackup;
const DescribeDBErrlogsResponse = models.DescribeDBErrlogsResponse;
const InquiryPriceUpgradeDBInstanceResponse = models.InquiryPriceUpgradeDBInstanceResponse;
const RegionInfo = models.RegionInfo;
const RestartDBInstanceResponse = models.RestartDBInstanceResponse;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const RemoveDBInstanceFromReadOnlyGroupResponse = models.RemoveDBInstanceFromReadOnlyGroupResponse;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const DescribeReadOnlyGroupsRequest = models.DescribeReadOnlyGroupsRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const DescribeDBSlowlogsRequest = models.DescribeDBSlowlogsRequest;
const DestroyDBInstanceResponse = models.DestroyDBInstanceResponse;
const DescribeDBInstanceAttributeResponse = models.DescribeDBInstanceAttributeResponse;
const DescribeDBXlogsResponse = models.DescribeDBXlogsResponse;
const DescribeDBSlowlogsResponse = models.DescribeDBSlowlogsResponse;
const CreateDBInstancesResponse = models.CreateDBInstancesResponse;


/**
 * postgres client
 * @class
 */
class PostgresClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("postgres.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * This API is used to transfer an instance to another project.
     * @param {ModifyDBInstancesProjectRequest} req
     * @param {function(string, ModifyDBInstancesProjectResponse):void} cb
     * @public
     */
    ModifyDBInstancesProject(req, cb) {
        let resp = new ModifyDBInstancesProjectResponse();
        this.request("ModifyDBInstancesProject", req, resp, cb);
    }

    /**
     * This API is used to get order information.
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        let resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }

    /**
     * This API is used to eliminate an isolated instance by specifying the `DBInstanceId` parameter. The data of an eliminated instance will be deleted and cannot be recovered.
     * @param {DestroyDBInstanceRequest} req
     * @param {function(string, DestroyDBInstanceResponse):void} cb
     * @public
     */
    DestroyDBInstance(req, cb) {
        let resp = new DestroyDBInstanceResponse();
        this.request("DestroyDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the instance backup list.
     * @param {DescribeDBBackupsRequest} req
     * @param {function(string, DescribeDBBackupsResponse):void} cb
     * @public
     */
    DescribeDBBackups(req, cb) {
        let resp = new DescribeDBBackupsResponse();
        this.request("DescribeDBBackups", req, resp, cb);
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
     * This API is used to get error logs.
     * @param {DescribeDBErrlogsRequest} req
     * @param {function(string, DescribeDBErrlogsResponse):void} cb
     * @public
     */
    DescribeDBErrlogs(req, cb) {
        let resp = new DescribeDBErrlogsResponse();
        this.request("DescribeDBErrlogs", req, resp, cb);
    }

    /**
     * This API is used to restart an instance.
     * @param {RestartDBInstanceRequest} req
     * @param {function(string, RestartDBInstanceResponse):void} cb
     * @public
     */
    RestartDBInstance(req, cb) {
        let resp = new RestartDBInstanceResponse();
        this.request("RestartDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the purchase price of one or multiple instances.
     * @param {InquiryPriceCreateDBInstancesRequest} req
     * @param {function(string, InquiryPriceCreateDBInstancesResponse):void} cb
     * @public
     */
    InquiryPriceCreateDBInstances(req, cb) {
        let resp = new InquiryPriceCreateDBInstancesResponse();
        this.request("InquiryPriceCreateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to enable public network access.
     * @param {OpenDBExtranetAccessRequest} req
     * @param {function(string, OpenDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenDBExtranetAccess(req, cb) {
        let resp = new OpenDBExtranetAccessResponse();
        this.request("OpenDBExtranetAccess", req, resp, cb);
    }

    /**
     * This API is used to disable public network access for a PostgreSQL for Serverless instance.
     * @param {CloseServerlessDBExtranetAccessRequest} req
     * @param {function(string, CloseServerlessDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseServerlessDBExtranetAccess(req, cb) {
        let resp = new CloseServerlessDBExtranetAccessResponse();
        this.request("CloseServerlessDBExtranetAccess", req, resp, cb);
    }

    /**
     * This API is used to delete an RO group.
     * @param {DeleteReadOnlyGroupRequest} req
     * @param {function(string, DeleteReadOnlyGroupResponse):void} cb
     * @public
     */
    DeleteReadOnlyGroup(req, cb) {
        let resp = new DeleteReadOnlyGroupResponse();
        this.request("DeleteReadOnlyGroup", req, resp, cb);
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
     * This API is used to get the instance Xlog list.
     * @param {DescribeDBXlogsRequest} req
     * @param {function(string, DescribeDBXlogsResponse):void} cb
     * @public
     */
    DescribeDBXlogs(req, cb) {
        let resp = new DescribeDBXlogsResponse();
        this.request("DescribeDBXlogs", req, resp, cb);
    }

    /**
     * This API is used to set auto-renewal.
     * @param {SetAutoRenewFlagRequest} req
     * @param {function(string, SetAutoRenewFlagResponse):void} cb
     * @public
     */
    SetAutoRenewFlag(req, cb) {
        let resp = new SetAutoRenewFlagResponse();
        this.request("SetAutoRenewFlag", req, resp, cb);
    }

    /**
     * This API is used to query the details of one instance.
     * @param {DescribeDBInstanceAttributeRequest} req
     * @param {function(string, DescribeDBInstanceAttributeResponse):void} cb
     * @public
     */
    DescribeDBInstanceAttribute(req, cb) {
        let resp = new DescribeDBInstanceAttributeResponse();
        this.request("DescribeDBInstanceAttribute", req, resp, cb);
    }

    /**
     * This API is used to rename a TencentDB for PostgreSQL instance.
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        let resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
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
     * This API is used to create (but not initialize) one or more TencentDB for PostgreSQL instances.
     * @param {CreateDBInstancesRequest} req
     * @param {function(string, CreateDBInstancesResponse):void} cb
     * @public
     */
    CreateDBInstances(req, cb) {
        let resp = new CreateDBInstancesResponse();
        this.request("CreateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to create a PostgreSQL for Serverless instance. If the creation succeeds, the instance ID will be returned.
     * @param {CreateServerlessDBInstanceRequest} req
     * @param {function(string, CreateServerlessDBInstanceResponse):void} cb
     * @public
     */
    CreateServerlessDBInstance(req, cb) {
        let resp = new CreateServerlessDBInstanceResponse();
        this.request("CreateServerlessDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the details of one or more instances.
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the supported AZs.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * This API is used to isolate one or more instances.
     * @param {IsolateDBInstancesRequest} req
     * @param {function(string, IsolateDBInstancesResponse):void} cb
     * @public
     */
    IsolateDBInstances(req, cb) {
        let resp = new IsolateDBInstancesResponse();
        this.request("IsolateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to delete a PostgreSQL for Serverless instance.
     * @param {DeleteServerlessDBInstanceRequest} req
     * @param {function(string, DeleteServerlessDBInstanceResponse):void} cb
     * @public
     */
    DeleteServerlessDBInstance(req, cb) {
        let resp = new DeleteServerlessDBInstanceResponse();
        this.request("DeleteServerlessDBInstance", req, resp, cb);
    }

    /**
     * This API is used to initialize a TencentDB for PostgreSQL instance.
     * @param {InitDBInstancesRequest} req
     * @param {function(string, InitDBInstancesResponse):void} cb
     * @public
     */
    InitDBInstances(req, cb) {
        let resp = new InitDBInstancesResponse();
        this.request("InitDBInstances", req, resp, cb);
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
     * This API is used to remove a read-only replica from an RO group.
     * @param {RemoveDBInstanceFromReadOnlyGroupRequest} req
     * @param {function(string, RemoveDBInstanceFromReadOnlyGroupResponse):void} cb
     * @public
     */
    RemoveDBInstanceFromReadOnlyGroup(req, cb) {
        let resp = new RemoveDBInstanceFromReadOnlyGroupResponse();
        this.request("RemoveDBInstanceFromReadOnlyGroup", req, resp, cb);
    }

    /**
     * This API is used to create an RO group.
     * @param {CreateReadOnlyGroupRequest} req
     * @param {function(string, CreateReadOnlyGroupResponse):void} cb
     * @public
     */
    CreateReadOnlyGroup(req, cb) {
        let resp = new CreateReadOnlyGroupResponse();
        this.request("CreateReadOnlyGroup", req, resp, cb);
    }

    /**
     * This API is used to query the purchasable regions.
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * This API is used to query the renewal price of an instance.
     * @param {InquiryPriceRenewDBInstanceRequest} req
     * @param {function(string, InquiryPriceRenewDBInstanceResponse):void} cb
     * @public
     */
    InquiryPriceRenewDBInstance(req, cb) {
        let resp = new InquiryPriceRenewDBInstanceResponse();
        this.request("InquiryPriceRenewDBInstance", req, resp, cb);
    }

    /**
     * This API is used to modify the RO group of an instance.
     * @param {ModifyDBInstanceReadOnlyGroupRequest} req
     * @param {function(string, ModifyDBInstanceReadOnlyGroupResponse):void} cb
     * @public
     */
    ModifyDBInstanceReadOnlyGroup(req, cb) {
        let resp = new ModifyDBInstanceReadOnlyGroupResponse();
        this.request("ModifyDBInstanceReadOnlyGroup", req, resp, cb);
    }

    /**
     * This API is used to disable the public network link to an instance.
     * @param {CloseDBExtranetAccessRequest} req
     * @param {function(string, CloseDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseDBExtranetAccess(req, cb) {
        let resp = new CloseDBExtranetAccessResponse();
        this.request("CloseDBExtranetAccess", req, resp, cb);
    }

    /**
     * This API is used to add a read-only replica to an RO group.
     * @param {AddDBInstanceToReadOnlyGroupRequest} req
     * @param {function(string, AddDBInstanceToReadOnlyGroupResponse):void} cb
     * @public
     */
    AddDBInstanceToReadOnlyGroup(req, cb) {
        let resp = new AddDBInstanceToReadOnlyGroupResponse();
        this.request("AddDBInstanceToReadOnlyGroup", req, resp, cb);
    }

    /**
     * This API is used to get the instance user list.
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * This API is used to remove one or more instances from isolation.
     * @param {DisIsolateDBInstancesRequest} req
     * @param {function(string, DisIsolateDBInstancesResponse):void} cb
     * @public
     */
    DisIsolateDBInstances(req, cb) {
        let resp = new DisIsolateDBInstancesResponse();
        this.request("DisIsolateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the details of one or more PostgreSQL for Serverless instances.
     * @param {DescribeServerlessDBInstancesRequest} req
     * @param {function(string, DescribeServerlessDBInstancesResponse):void} cb
     * @public
     */
    DescribeServerlessDBInstances(req, cb) {
        let resp = new DescribeServerlessDBInstancesResponse();
        this.request("DescribeServerlessDBInstances", req, resp, cb);
    }

    /**
     * This API is used to rebalance the loads of read-only replicas in an RO group. Please note that connections to those read-only replicas will be interrupted transiently; therefore, you should ensure that your application can reconnect to the databases. This operation should be performed with caution.
     * @param {RebalanceReadOnlyGroupRequest} req
     * @param {function(string, RebalanceReadOnlyGroupResponse):void} cb
     * @public
     */
    RebalanceReadOnlyGroup(req, cb) {
        let resp = new RebalanceReadOnlyGroupResponse();
        this.request("RebalanceReadOnlyGroup", req, resp, cb);
    }

    /**
     * This API is used to renew an instance.
     * @param {RenewInstanceRequest} req
     * @param {function(string, RenewInstanceResponse):void} cb
     * @public
     */
    RenewInstance(req, cb) {
        let resp = new RenewInstanceResponse();
        this.request("RenewInstance", req, resp, cb);
    }

    /**
     * This API is used to pull the list of databases.
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * This API is used to create read-only replicas.
     * @param {CreateReadOnlyDBInstanceRequest} req
     * @param {function(string, CreateReadOnlyDBInstanceResponse):void} cb
     * @public
     */
    CreateReadOnlyDBInstance(req, cb) {
        let resp = new CreateReadOnlyDBInstanceResponse();
        this.request("CreateReadOnlyDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query RO group information by specifying the primary instance IDs.
     * @param {DescribeReadOnlyGroupsRequest} req
     * @param {function(string, DescribeReadOnlyGroupsResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroups(req, cb) {
        let resp = new DescribeReadOnlyGroupsResponse();
        this.request("DescribeReadOnlyGroups", req, resp, cb);
    }

    /**
     * This API is used to modify RO group configuration.
     * @param {ModifyReadOnlyGroupConfigRequest} req
     * @param {function(string, ModifyReadOnlyGroupConfigResponse):void} cb
     * @public
     */
    ModifyReadOnlyGroupConfig(req, cb) {
        let resp = new ModifyReadOnlyGroupConfigResponse();
        this.request("ModifyReadOnlyGroupConfig", req, resp, cb);
    }

    /**
     * This API is used to create and initialize one or more TencentDB for PostgreSQL instances.
     * @param {CreateInstancesRequest} req
     * @param {function(string, CreateInstancesResponse):void} cb
     * @public
     */
    CreateInstances(req, cb) {
        let resp = new CreateInstancesResponse();
        this.request("CreateInstances", req, resp, cb);
    }

    /**
     * This API is used to query the purchasable specification configuration.
     * @param {DescribeProductConfigRequest} req
     * @param {function(string, DescribeProductConfigResponse):void} cb
     * @public
     */
    DescribeProductConfig(req, cb) {
        let resp = new DescribeProductConfigResponse();
        this.request("DescribeProductConfig", req, resp, cb);
    }

    /**
     * This API is used to get slow query logs.
     * @param {DescribeDBSlowlogsRequest} req
     * @param {function(string, DescribeDBSlowlogsResponse):void} cb
     * @public
     */
    DescribeDBSlowlogs(req, cb) {
        let resp = new DescribeDBSlowlogsResponse();
        this.request("DescribeDBSlowlogs", req, resp, cb);
    }

    /**
     * This API is used to enable public network access for a PostgreSQL for Serverless instance.
     * @param {OpenServerlessDBExtranetAccessRequest} req
     * @param {function(string, OpenServerlessDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenServerlessDBExtranetAccess(req, cb) {
        let resp = new OpenServerlessDBExtranetAccessResponse();
        this.request("OpenServerlessDBExtranetAccess", req, resp, cb);
    }


}
module.exports = PostgresClient;
