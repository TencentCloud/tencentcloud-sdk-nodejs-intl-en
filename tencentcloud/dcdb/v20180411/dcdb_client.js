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
const InitDCDBInstancesResponse = models.InitDCDBInstancesResponse;
const DescribeDBTmpInstancesRequest = models.DescribeDBTmpInstancesRequest;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const ParamDesc = models.ParamDesc;
const DestroyDCDBInstanceResponse = models.DestroyDCDBInstanceResponse;
const DescribeDBParametersRequest = models.DescribeDBParametersRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const UpgradeHourDCDBInstanceResponse = models.UpgradeHourDCDBInstanceResponse;
const ActiveHourDCDBInstanceResponse = models.ActiveHourDCDBInstanceResponse;
const DescribeDCDBPriceResponse = models.DescribeDCDBPriceResponse;
const ModifyInstanceVportResponse = models.ModifyInstanceVportResponse;
const DescribeDCDBInstanceDetailRequest = models.DescribeDCDBInstanceDetailRequest;
const ModifyInstanceVipResponse = models.ModifyInstanceVipResponse;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const ShardBriefInfo = models.ShardBriefInfo;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const CancelDcnJobResponse = models.CancelDcnJobResponse;
const DescribeFileDownloadUrlRequest = models.DescribeFileDownloadUrlRequest;
const DescribeDBSyncModeResponse = models.DescribeDBSyncModeResponse;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const DescribeDBSlowLogsRequest = models.DescribeDBSlowLogsRequest;
const CreateAccountRequest = models.CreateAccountRequest;
const UpgradeDedicatedDCDBInstanceResponse = models.UpgradeDedicatedDCDBInstanceResponse;
const CreateOnlineDDLJobResponse = models.CreateOnlineDDLJobResponse;
const DescribeDBParametersResponse = models.DescribeDBParametersResponse;
const DescribeBackupFilesRequest = models.DescribeBackupFilesRequest;
const IsolateHourDCDBInstanceRequest = models.IsolateHourDCDBInstanceRequest;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const DescribeFlowResponse = models.DescribeFlowResponse;
const UpgradeHourDCDBInstanceRequest = models.UpgradeHourDCDBInstanceRequest;
const CloneAccountResponse = models.CloneAccountResponse;
const IsolateDCDBInstanceRequest = models.IsolateDCDBInstanceRequest;
const IsolateDedicatedDBInstanceRequest = models.IsolateDedicatedDBInstanceRequest;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const DestroyDCDBInstanceRequest = models.DestroyDCDBInstanceRequest;
const CreateDCDBInstanceResponse = models.CreateDCDBInstanceResponse;
const BriefNodeInfo = models.BriefNodeInfo;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const ModifyDBEncryptAttributesResponse = models.ModifyDBEncryptAttributesResponse;
const DescribeDCDBInstanceNodeInfoRequest = models.DescribeDCDBInstanceNodeInfoRequest;
const DatabaseView = models.DatabaseView;
const ConfigValue = models.ConfigValue;
const DescribeDBLogFilesRequest = models.DescribeDBLogFilesRequest;
const NodeInfo = models.NodeInfo;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const CreateDedicatedClusterDCDBInstanceRequest = models.CreateDedicatedClusterDCDBInstanceRequest;
const DcnDetailItem = models.DcnDetailItem;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const CopyAccountPrivilegesResponse = models.CopyAccountPrivilegesResponse;
const CloneAccountRequest = models.CloneAccountRequest;
const DescribeDCDBInstanceDetailResponse = models.DescribeDCDBInstanceDetailResponse;
const ModifyInstanceNetworkResponse = models.ModifyInstanceNetworkResponse;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const DescribeDCDBPriceRequest = models.DescribeDCDBPriceRequest;
const SwitchDBInstanceHAResponse = models.SwitchDBInstanceHAResponse;
const DescribeBackupFilesResponse = models.DescribeBackupFilesResponse;
const ParamModifyResult = models.ParamModifyResult;
const TablePrivilege = models.TablePrivilege;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const DatabaseFunction = models.DatabaseFunction;
const ParamConstraint = models.ParamConstraint;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const DescribeDatabaseObjectsRequest = models.DescribeDatabaseObjectsRequest;
const ExpandShardConfig = models.ExpandShardConfig;
const ModifyAccountConfigRequest = models.ModifyAccountConfigRequest;
const DescribeDBEncryptAttributesResponse = models.DescribeDBEncryptAttributesResponse;
const DatabaseTable = models.DatabaseTable;
const DescribeDBEncryptAttributesRequest = models.DescribeDBEncryptAttributesRequest;
const Deal = models.Deal;
const GrantAccountPrivilegesRequest = models.GrantAccountPrivilegesRequest;
const DescribeDCDBShardsRequest = models.DescribeDCDBShardsRequest;
const SwitchDBInstanceHARequest = models.SwitchDBInstanceHARequest;
const DBParamValue = models.DBParamValue;
const TmpInstance = models.TmpInstance;
const ModifyDBParametersRequest = models.ModifyDBParametersRequest;
const DCDBInstanceInfo = models.DCDBInstanceInfo;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeDcnDetailRequest = models.DescribeDcnDetailRequest;
const DescribeFileDownloadUrlResponse = models.DescribeFileDownloadUrlResponse;
const ModifyDBParametersResponse = models.ModifyDBParametersResponse;
const DCDBShardInfo = models.DCDBShardInfo;
const CopyAccountPrivilegesRequest = models.CopyAccountPrivilegesRequest;
const SecurityGroup = models.SecurityGroup;
const DescribeDatabaseTableRequest = models.DescribeDatabaseTableRequest;
const DescribeDCDBInstanceNodeInfoResponse = models.DescribeDCDBInstanceNodeInfoResponse;
const KillSessionRequest = models.KillSessionRequest;
const TerminateDedicatedDBInstanceRequest = models.TerminateDedicatedDBInstanceRequest;
const DescribeDatabaseObjectsResponse = models.DescribeDatabaseObjectsResponse;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const DescribeDcnDetailResponse = models.DescribeDcnDetailResponse;
const TableColumn = models.TableColumn;
const SecurityGroupBound = models.SecurityGroupBound;
const ColumnPrivilege = models.ColumnPrivilege;
const SplitShardConfig = models.SplitShardConfig;
const UpgradeDedicatedDCDBInstanceRequest = models.UpgradeDedicatedDCDBInstanceRequest;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const DescribeDCDBShardsResponse = models.DescribeDCDBShardsResponse;
const InstanceBackupFileItem = models.InstanceBackupFileItem;
const CreateHourDCDBInstanceResponse = models.CreateHourDCDBInstanceResponse;
const Database = models.Database;
const GrantAccountPrivilegesResponse = models.GrantAccountPrivilegesResponse;
const CancelDcnJobRequest = models.CancelDcnJobRequest;
const IsolateHourDCDBInstanceResponse = models.IsolateHourDCDBInstanceResponse;
const ShardInfo = models.ShardInfo;
const ModifyInstanceVipRequest = models.ModifyInstanceVipRequest;
const ReservedNetResource = models.ReservedNetResource;
const DatabasePrivilege = models.DatabasePrivilege;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const CreateHourDCDBInstanceRequest = models.CreateHourDCDBInstanceRequest;
const DescribeDBSyncModeRequest = models.DescribeDBSyncModeRequest;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const KillSessionResponse = models.KillSessionResponse;
const SlowLogData = models.SlowLogData;
const CreateOnlineDDLJobRequest = models.CreateOnlineDDLJobRequest;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const ViewPrivileges = models.ViewPrivileges;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const DescribeDBLogFilesResponse = models.DescribeDBLogFilesResponse;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
const InitDCDBInstancesRequest = models.InitDCDBInstancesRequest;
const ResourceTag = models.ResourceTag;
const DeleteAccountRequest = models.DeleteAccountRequest;
const DescribeDCDBInstancesResponse = models.DescribeDCDBInstancesResponse;
const ModifyAccountPrivilegesResponse = models.ModifyAccountPrivilegesResponse;
const DescribeFlowRequest = models.DescribeFlowRequest;
const ModifyAccountPrivilegesRequest = models.ModifyAccountPrivilegesRequest;
const Account = models.Account;
const CreateDCDBInstanceRequest = models.CreateDCDBInstanceRequest;
const CreateDedicatedClusterDCDBInstanceResponse = models.CreateDedicatedClusterDCDBInstanceResponse;
const DatabaseProcedure = models.DatabaseProcedure;
const DescribeDBTmpInstancesResponse = models.DescribeDBTmpInstancesResponse;
const AddShardConfig = models.AddShardConfig;
const ModifyDBSyncModeRequest = models.ModifyDBSyncModeRequest;
const ModifyAccountConfigResponse = models.ModifyAccountConfigResponse;
const IsolateDCDBInstanceResponse = models.IsolateDCDBInstanceResponse;
const ModifyDBEncryptAttributesRequest = models.ModifyDBEncryptAttributesRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const IsolateDedicatedDBInstanceResponse = models.IsolateDedicatedDBInstanceResponse;
const DescribeLogFileRetentionPeriodResponse = models.DescribeLogFileRetentionPeriodResponse;
const TerminateDedicatedDBInstanceResponse = models.TerminateDedicatedDBInstanceResponse;
const ModifyInstanceNetworkRequest = models.ModifyInstanceNetworkRequest;
const DestroyHourDCDBInstanceResponse = models.DestroyHourDCDBInstanceResponse;
const ConstraintRange = models.ConstraintRange;
const LogFileInfo = models.LogFileInfo;
const ActiveHourDCDBInstanceRequest = models.ActiveHourDCDBInstanceRequest;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const DBAccount = models.DBAccount;
const DescribeDatabaseTableResponse = models.DescribeDatabaseTableResponse;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const DescribeDBSlowLogsResponse = models.DescribeDBSlowLogsResponse;
const DescribeDCDBInstancesRequest = models.DescribeDCDBInstancesRequest;
const DescribeLogFileRetentionPeriodRequest = models.DescribeLogFileRetentionPeriodRequest;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DestroyHourDCDBInstanceRequest = models.DestroyHourDCDBInstanceRequest;
const ModifyDBSyncModeResponse = models.ModifyDBSyncModeResponse;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const ModifyInstanceVportRequest = models.ModifyInstanceVportRequest;
const DeleteAccountResponse = models.DeleteAccountResponse;


/**
 * dcdb client
 * @class
 */
class DcdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dcdb.intl.tencentcloudapi.com", "2018-04-11", credential, region, profile);
    }
    
    /**
     * This API is used to query the permissions of a TencentDB account.
Note: Accounts with the same username but different hosts are considered as different accounts.
     * @param {DescribeAccountPrivilegesRequest} req
     * @param {function(string, DescribeAccountPrivilegesResponse):void} cb
     * @public
     */
    DescribeAccountPrivileges(req, cb) {
        let resp = new DescribeAccountPrivilegesResponse();
        this.request("DescribeAccountPrivileges", req, resp, cb);
    }

    /**
     * This API is used to modify the configurations of an account, such as `max_user_connections`.
     * @param {ModifyAccountConfigRequest} req
     * @param {function(string, ModifyAccountConfigResponse):void} cb
     * @public
     */
    ModifyAccountConfig(req, cb) {
        let resp = new ModifyAccountConfigResponse();
        this.request("ModifyAccountConfig", req, resp, cb);
    }

    /**
     * This API is used to upgrade a dedicated TDSQL cluster instance.
     * @param {UpgradeDedicatedDCDBInstanceRequest} req
     * @param {function(string, UpgradeDedicatedDCDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDedicatedDCDBInstance(req, cb) {
        let resp = new UpgradeDedicatedDCDBInstanceResponse();
        this.request("UpgradeDedicatedDCDBInstance", req, resp, cb);
    }

    /**
     * This API is used to remove a pay-as-you-go TDSQL instance from isolation.
     * @param {ActiveHourDCDBInstanceRequest} req
     * @param {function(string, ActiveHourDCDBInstanceResponse):void} cb
     * @public
     */
    ActiveHourDCDBInstance(req, cb) {
        let resp = new ActiveHourDCDBInstanceResponse();
        this.request("ActiveHourDCDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the list of database objects in a TencentDB instance, including tables, stored procedures, views, and functions.
     * @param {DescribeDatabaseObjectsRequest} req
     * @param {function(string, DescribeDatabaseObjectsResponse):void} cb
     * @public
     */
    DescribeDatabaseObjects(req, cb) {
        let resp = new DescribeDatabaseObjectsResponse();
        this.request("DescribeDatabaseObjects", req, resp, cb);
    }

    /**
     * This API is used to query the list of TencentDB instances. It supports filtering instances by project ID, instance ID, private network address, and instance name.
If no filter is specified, 10 instances will be returned by default. Up to 100 instances can be returned for a single request.
     * @param {DescribeDCDBInstancesRequest} req
     * @param {function(string, DescribeDCDBInstancesResponse):void} cb
     * @public
     */
    DescribeDCDBInstances(req, cb) {
        let resp = new DescribeDCDBInstancesResponse();
        this.request("DescribeDCDBInstances", req, resp, cb);
    }

    /**
     * This API is used to get the download URL of a specific backup or log file of a database.
     * @param {DescribeFileDownloadUrlRequest} req
     * @param {function(string, DescribeFileDownloadUrlResponse):void} cb
     * @public
     */
    DescribeFileDownloadUrl(req, cb) {
        let resp = new DescribeFileDownloadUrlResponse();
        this.request("DescribeFileDownloadUrl", req, resp, cb);
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
     * This API is used to query TDSQL order information. You can pass in an order ID to query the TDSQL instance associated with the order and the corresponding task process ID.
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        let resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
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
     * This API is used to query the price of an instance before you purchase it.
     * @param {DescribeDCDBPriceRequest} req
     * @param {function(string, DescribeDCDBPriceResponse):void} cb
     * @public
     */
    DescribeDCDBPrice(req, cb) {
        let resp = new DescribeDCDBPriceResponse();
        this.request("DescribeDCDBPrice", req, resp, cb);
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
     * This API is used to query the list of slow query logs.
     * @param {DescribeDBSlowLogsRequest} req
     * @param {function(string, DescribeDBSlowLogsResponse):void} cb
     * @public
     */
    DescribeDBSlowLogs(req, cb) {
        let resp = new DescribeDBSlowLogsResponse();
        this.request("DescribeDBSlowLogs", req, resp, cb);
    }

    /**
     * This API is used to query task status.
     * @param {DescribeFlowRequest} req
     * @param {function(string, DescribeFlowResponse):void} cb
     * @public
     */
    DescribeFlow(req, cb) {
        let resp = new DescribeFlowResponse();
        this.request("DescribeFlow", req, resp, cb);
    }

    /**
     * This API is used to start a source-replica switch of instances.
     * @param {SwitchDBInstanceHARequest} req
     * @param {function(string, SwitchDBInstanceHAResponse):void} cb
     * @public
     */
    SwitchDBInstanceHA(req, cb) {
        let resp = new SwitchDBInstanceHAResponse();
        this.request("SwitchDBInstanceHA", req, resp, cb);
    }

    /**
     * This API is used to initialize instances, including setting the default character set and table name case sensitivity.
     * @param {InitDCDBInstancesRequest} req
     * @param {function(string, InitDCDBInstancesResponse):void} cb
     * @public
     */
    InitDCDBInstances(req, cb) {
        let resp = new InitDCDBInstancesResponse();
        this.request("InitDCDBInstances", req, resp, cb);
    }

    /**
     * This API is used to isolate a dedicated TencentDB instance.
     * @param {IsolateDedicatedDBInstanceRequest} req
     * @param {function(string, IsolateDedicatedDBInstanceResponse):void} cb
     * @public
     */
    IsolateDedicatedDBInstance(req, cb) {
        let resp = new IsolateDedicatedDBInstanceResponse();
        this.request("IsolateDedicatedDBInstance", req, resp, cb);
    }

    /**
     * This API is used to create a dedicated TDSQL cluster instance.
     * @param {CreateDedicatedClusterDCDBInstanceRequest} req
     * @param {function(string, CreateDedicatedClusterDCDBInstanceResponse):void} cb
     * @public
     */
    CreateDedicatedClusterDCDBInstance(req, cb) {
        let resp = new CreateDedicatedClusterDCDBInstanceResponse();
        this.request("CreateDedicatedClusterDCDBInstance", req, resp, cb);
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
     * This API is used to get the details of a TDSQL instance.
     * @param {DescribeDCDBInstanceDetailRequest} req
     * @param {function(string, DescribeDCDBInstanceDetailResponse):void} cb
     * @public
     */
    DescribeDCDBInstanceDetail(req, cb) {
        let resp = new DescribeDCDBInstanceDetailResponse();
        this.request("DescribeDCDBInstanceDetail", req, resp, cb);
    }

    /**
     * This API is used to kill the specified session.
     * @param {KillSessionRequest} req
     * @param {function(string, KillSessionResponse):void} cb
     * @public
     */
    KillSession(req, cb) {
        let resp = new KillSessionResponse();
        this.request("KillSession", req, resp, cb);
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
     * This API is used to isolate a pay-as-you-go TDSQL instance.
     * @param {IsolateHourDCDBInstanceRequest} req
     * @param {function(string, IsolateHourDCDBInstanceResponse):void} cb
     * @public
     */
    IsolateHourDCDBInstance(req, cb) {
        let resp = new IsolateHourDCDBInstanceResponse();
        this.request("IsolateHourDCDBInstance", req, resp, cb);
    }

    /**
     * This API is used to upgrade a pay-as-you-go TDSQL instance.
     * @param {UpgradeHourDCDBInstanceRequest} req
     * @param {function(string, UpgradeHourDCDBInstanceResponse):void} cb
     * @public
     */
    UpgradeHourDCDBInstance(req, cb) {
        let resp = new UpgradeHourDCDBInstanceResponse();
        this.request("UpgradeHourDCDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the sync mode of a TencentDB instance.
     * @param {DescribeDBSyncModeRequest} req
     * @param {function(string, DescribeDBSyncModeResponse):void} cb
     * @public
     */
    DescribeDBSyncMode(req, cb) {
        let resp = new DescribeDBSyncModeResponse();
        this.request("DescribeDBSyncMode", req, resp, cb);
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
     * This API is used to modify instance network.
     * @param {ModifyInstanceNetworkRequest} req
     * @param {function(string, ModifyInstanceNetworkResponse):void} cb
     * @public
     */
    ModifyInstanceNetwork(req, cb) {
        let resp = new ModifyInstanceNetworkResponse();
        this.request("ModifyInstanceNetwork", req, resp, cb);
    }

    /**
     * This API is used to modify the permissions of a TencentDB instance account. \n\n**Note**\n-Only the SELECT permission (that is, set the permission parameter to `["SELECT"]`) of the system database `mysql` can be granted. An error will be reported if read-write permissions are granted to a read-only account. If the parameter is not passed in, no change will be made to the granted table permissions. To clear the granted view permissions, set `Privileges` to an empty array.
     * @param {ModifyAccountPrivilegesRequest} req
     * @param {function(string, ModifyAccountPrivilegesResponse):void} cb
     * @public
     */
    ModifyAccountPrivileges(req, cb) {
        let resp = new ModifyAccountPrivilegesResponse();
        this.request("ModifyAccountPrivileges", req, resp, cb);
    }

    /**
     * This API is used to terminate an isolated monthly subscribed TDSQL instance.
     * @param {DestroyDCDBInstanceRequest} req
     * @param {function(string, DestroyDCDBInstanceResponse):void} cb
     * @public
     */
    DestroyDCDBInstance(req, cb) {
        let resp = new DestroyDCDBInstanceResponse();
        this.request("DestroyDCDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the information of instance nodes.
     * @param {DescribeDCDBInstanceNodeInfoRequest} req
     * @param {function(string, DescribeDCDBInstanceNodeInfoResponse):void} cb
     * @public
     */
    DescribeDCDBInstanceNodeInfo(req, cb) {
        let resp = new DescribeDCDBInstanceNodeInfoResponse();
        this.request("DescribeDCDBInstanceNodeInfo", req, resp, cb);
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
     * This API is used to view the backup log retention days.
     * @param {DescribeLogFileRetentionPeriodRequest} req
     * @param {function(string, DescribeLogFileRetentionPeriodResponse):void} cb
     * @public
     */
    DescribeLogFileRetentionPeriod(req, cb) {
        let resp = new DescribeLogFileRetentionPeriodResponse();
        this.request("DescribeLogFileRetentionPeriod", req, resp, cb);
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
     * This API is used to query the list of backup files.
     * @param {DescribeBackupFilesRequest} req
     * @param {function(string, DescribeBackupFilesResponse):void} cb
     * @public
     */
    DescribeBackupFiles(req, cb) {
        let resp = new DescribeBackupFilesResponse();
        this.request("DescribeBackupFiles", req, resp, cb);
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
     * This API is used to modify the instance data encryption.
     * @param {ModifyDBEncryptAttributesRequest} req
     * @param {function(string, ModifyDBEncryptAttributesResponse):void} cb
     * @public
     */
    ModifyDBEncryptAttributes(req, cb) {
        let resp = new ModifyDBEncryptAttributesResponse();
        this.request("ModifyDBEncryptAttributes", req, resp, cb);
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
     * This API is used to copy the permissions of a TencentDB account.
Note: Accounts with the same username but different hosts are different accounts. Permissions can only be copied between accounts with the same `Readonly` attribute.
     * @param {CopyAccountPrivilegesRequest} req
     * @param {function(string, CopyAccountPrivilegesResponse):void} cb
     * @public
     */
    CopyAccountPrivileges(req, cb) {
        let resp = new CopyAccountPrivilegesResponse();
        this.request("CopyAccountPrivileges", req, resp, cb);
    }

    /**
     * This API is used to obtain a temp rollback instance.
     * @param {DescribeDBTmpInstancesRequest} req
     * @param {function(string, DescribeDBTmpInstancesResponse):void} cb
     * @public
     */
    DescribeDBTmpInstances(req, cb) {
        let resp = new DescribeDBTmpInstancesResponse();
        this.request("DescribeDBTmpInstances", req, resp, cb);
    }

    /**
     * This API is used to query the information of shards of a TencentDB instance.
     * @param {DescribeDCDBShardsRequest} req
     * @param {function(string, DescribeDCDBShardsResponse):void} cb
     * @public
     */
    DescribeDCDBShards(req, cb) {
        let resp = new DescribeDCDBShardsResponse();
        this.request("DescribeDCDBShards", req, resp, cb);
    }

    /**
     * This API is used to query the database list of a TencentDB instance.
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * This API is used to create a monthly subscribed TDSQL instance by passing in information such as instance specifications, database version number, and purchased duration.
     * @param {CreateDCDBInstanceRequest} req
     * @param {function(string, CreateDCDBInstanceResponse):void} cb
     * @public
     */
    CreateDCDBInstance(req, cb) {
        let resp = new CreateDCDBInstanceResponse();
        this.request("CreateDCDBInstance", req, resp, cb);
    }

    /**
     * This API is used to terminate a pay-as-you-go TDSQL instance.
     * @param {DestroyHourDCDBInstanceRequest} req
     * @param {function(string, DestroyHourDCDBInstanceResponse):void} cb
     * @public
     */
    DestroyHourDCDBInstance(req, cb) {
        let resp = new DestroyHourDCDBInstanceResponse();
        this.request("DestroyHourDCDBInstance", req, resp, cb);
    }

    /**
     * This API is used to isolate a monthly subscribed TDSQL instance, which will no longer be accessible via IP and port.  The isolated instance can be started up in the recycle bin.  If it is isolated due to overdue payments, top up your account as soon as possible.
     * @param {IsolateDCDBInstanceRequest} req
     * @param {function(string, IsolateDCDBInstanceResponse):void} cb
     * @public
     */
    IsolateDCDBInstance(req, cb) {
        let resp = new IsolateDCDBInstanceResponse();
        this.request("IsolateDCDBInstance", req, resp, cb);
    }

    /**
     * This API is used to modify instance Vport.
     * @param {ModifyInstanceVportRequest} req
     * @param {function(string, ModifyInstanceVportResponse):void} cb
     * @public
     */
    ModifyInstanceVport(req, cb) {
        let resp = new ModifyInstanceVportResponse();
        this.request("ModifyInstanceVport", req, resp, cb);
    }

    /**
     * This API is used to query the security group information of an instance.
     * @param {DescribeDBSecurityGroupsRequest} req
     * @param {function(string, DescribeDBSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBSecurityGroups(req, cb) {
        let resp = new DescribeDBSecurityGroupsResponse();
        this.request("DescribeDBSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to modify instance VIP.
     * @param {ModifyInstanceVipRequest} req
     * @param {function(string, ModifyInstanceVipResponse):void} cb
     * @public
     */
    ModifyInstanceVip(req, cb) {
        let resp = new ModifyInstanceVipResponse();
        this.request("ModifyInstanceVip", req, resp, cb);
    }

    /**
     * This API is used to query the table information of a TencentDB instance.
     * @param {DescribeDatabaseTableRequest} req
     * @param {function(string, DescribeDatabaseTableResponse):void} cb
     * @public
     */
    DescribeDatabaseTable(req, cb) {
        let resp = new DescribeDatabaseTableResponse();
        this.request("DescribeDatabaseTable", req, resp, cb);
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
     * This API is used to terminate the isolated dedicated TDSQL instance.
     * @param {TerminateDedicatedDBInstanceRequest} req
     * @param {function(string, TerminateDedicatedDBInstanceResponse):void} cb
     * @public
     */
    TerminateDedicatedDBInstance(req, cb) {
        let resp = new TerminateDedicatedDBInstanceResponse();
        this.request("TerminateDedicatedDBInstance", req, resp, cb);
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
     * This API is used to create an online DDL job.
     * @param {CreateOnlineDDLJobRequest} req
     * @param {function(string, CreateOnlineDDLJobResponse):void} cb
     * @public
     */
    CreateOnlineDDLJob(req, cb) {
        let resp = new CreateOnlineDDLJobResponse();
        this.request("CreateOnlineDDLJob", req, resp, cb);
    }

    /**
     * This API is used to modify instance name.
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        let resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }

    /**
     * This API is used to create a pay-as-you-go TDSQL instance.
     * @param {CreateHourDCDBInstanceRequest} req
     * @param {function(string, CreateHourDCDBInstanceResponse):void} cb
     * @public
     */
    CreateHourDCDBInstance(req, cb) {
        let resp = new CreateHourDCDBInstanceResponse();
        this.request("CreateHourDCDBInstance", req, resp, cb);
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

    /**
     * This API is used to query the encryption status of the instance data.
     * @param {DescribeDBEncryptAttributesRequest} req
     * @param {function(string, DescribeDBEncryptAttributesResponse):void} cb
     * @public
     */
    DescribeDBEncryptAttributes(req, cb) {
        let resp = new DescribeDBEncryptAttributesResponse();
        this.request("DescribeDBEncryptAttributes", req, resp, cb);
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


}
module.exports = DcdbClient;
