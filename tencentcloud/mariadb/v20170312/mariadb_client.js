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
const CreateDBInstanceRequest = models.CreateDBInstanceRequest;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const ParamDesc = models.ParamDesc;
const DescribeDBParametersRequest = models.DescribeDBParametersRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const ModifyInstanceNetworkResponse = models.ModifyInstanceNetworkResponse;
const ModifyInstanceVportResponse = models.ModifyInstanceVportResponse;
const DestroyHourDBInstanceRequest = models.DestroyHourDBInstanceRequest;
const ModifyInstanceVipResponse = models.ModifyInstanceVipResponse;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const CancelDcnJobResponse = models.CancelDcnJobResponse;
const DescribeFileDownloadUrlRequest = models.DescribeFileDownloadUrlRequest;
const DestroyHourDBInstanceResponse = models.DestroyHourDBInstanceResponse;
const Account = models.Account;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const DescribeDBSlowLogsRequest = models.DescribeDBSlowLogsRequest;
const CreateAccountRequest = models.CreateAccountRequest;
const DescribeDBParametersResponse = models.DescribeDBParametersResponse;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const CloneAccountResponse = models.CloneAccountResponse;
const IsolateDedicatedDBInstanceRequest = models.IsolateDedicatedDBInstanceRequest;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const ParamConstraint = models.ParamConstraint;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const DatabaseView = models.DatabaseView;
const DescribeDBLogFilesRequest = models.DescribeDBLogFilesRequest;
const NodeInfo = models.NodeInfo;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const ModifySyncTaskAttributeResponse = models.ModifySyncTaskAttributeResponse;
const DcnDetailItem = models.DcnDetailItem;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const CopyAccountPrivilegesResponse = models.CopyAccountPrivilegesResponse;
const DCNReplicaStatus = models.DCNReplicaStatus;
const CreateHourDBInstanceResponse = models.CreateHourDBInstanceResponse;
const DescribePriceRequest = models.DescribePriceRequest;
const ParamModifyResult = models.ParamModifyResult;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const TablePrivilege = models.TablePrivilege;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const DatabaseFunction = models.DatabaseFunction;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const DescribeDatabaseObjectsRequest = models.DescribeDatabaseObjectsRequest;
const CreateDBInstanceResponse = models.CreateDBInstanceResponse;
const DescribeDBEncryptAttributesResponse = models.DescribeDBEncryptAttributesResponse;
const DestroyDBInstanceRequest = models.DestroyDBInstanceRequest;
const DatabaseTable = models.DatabaseTable;
const DescribeDBEncryptAttributesRequest = models.DescribeDBEncryptAttributesRequest;
const Deal = models.Deal;
const GrantAccountPrivilegesRequest = models.GrantAccountPrivilegesRequest;
const DBParamValue = models.DBParamValue;
const ModifyDBParametersRequest = models.ModifyDBParametersRequest;
const DescribeDcnDetailRequest = models.DescribeDcnDetailRequest;
const DescribeFileDownloadUrlResponse = models.DescribeFileDownloadUrlResponse;
const ModifyDBParametersResponse = models.ModifyDBParametersResponse;
const CopyAccountPrivilegesRequest = models.CopyAccountPrivilegesRequest;
const SecurityGroup = models.SecurityGroup;
const DescribeDatabaseTableRequest = models.DescribeDatabaseTableRequest;
const KillSessionRequest = models.KillSessionRequest;
const TerminateDedicatedDBInstanceRequest = models.TerminateDedicatedDBInstanceRequest;
const DescribeDatabaseObjectsResponse = models.DescribeDatabaseObjectsResponse;
const DeleteAccountRequest = models.DeleteAccountRequest;
const TableColumn = models.TableColumn;
const SecurityGroupBound = models.SecurityGroupBound;
const ColumnPrivilege = models.ColumnPrivilege;
const ModifySyncTaskAttributeRequest = models.ModifySyncTaskAttributeRequest;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const DBInstance = models.DBInstance;
const DescribePriceResponse = models.DescribePriceResponse;
const ModifyAccountPrivilegesResponse = models.ModifyAccountPrivilegesResponse;
const Database = models.Database;
const GrantAccountPrivilegesResponse = models.GrantAccountPrivilegesResponse;
const CancelDcnJobRequest = models.CancelDcnJobRequest;
const ModifyInstanceVipRequest = models.ModifyInstanceVipRequest;
const DatabasePrivilege = models.DatabasePrivilege;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const FunctionPrivilege = models.FunctionPrivilege;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const KillSessionResponse = models.KillSessionResponse;
const SlowLogData = models.SlowLogData;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const ViewPrivileges = models.ViewPrivileges;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const DescribeDBLogFilesResponse = models.DescribeDBLogFilesResponse;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
const ResourceTag = models.ResourceTag;
const DescribeDcnDetailResponse = models.DescribeDcnDetailResponse;
const IsolateDBInstanceRequest = models.IsolateDBInstanceRequest;
const DCNReplicaConfig = models.DCNReplicaConfig;
const ModifyAccountPrivilegesRequest = models.ModifyAccountPrivilegesRequest;
const DatabaseProcedure = models.DatabaseProcedure;
const ModifyDBSyncModeRequest = models.ModifyDBSyncModeRequest;
const DescribeInstanceNodeInfoRequest = models.DescribeInstanceNodeInfoRequest;
const CloneAccountRequest = models.CloneAccountRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const IsolateDedicatedDBInstanceResponse = models.IsolateDedicatedDBInstanceResponse;
const DescribeLogFileRetentionPeriodResponse = models.DescribeLogFileRetentionPeriodResponse;
const TerminateDedicatedDBInstanceResponse = models.TerminateDedicatedDBInstanceResponse;
const ModifyInstanceNetworkRequest = models.ModifyInstanceNetworkRequest;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const ConstraintRange = models.ConstraintRange;
const LogFileInfo = models.LogFileInfo;
const ProcedurePrivilege = models.ProcedurePrivilege;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const DBAccount = models.DBAccount;
const CreateHourDBInstanceRequest = models.CreateHourDBInstanceRequest;
const DescribeDatabaseTableResponse = models.DescribeDatabaseTableResponse;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const DescribeDBSlowLogsResponse = models.DescribeDBSlowLogsResponse;
const DescribeLogFileRetentionPeriodRequest = models.DescribeLogFileRetentionPeriodRequest;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const DestroyDBInstanceResponse = models.DestroyDBInstanceResponse;
const ModifyDBSyncModeResponse = models.ModifyDBSyncModeResponse;
const DescribeInstanceNodeInfoResponse = models.DescribeInstanceNodeInfoResponse;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const ModifyInstanceVportRequest = models.ModifyInstanceVportRequest;
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
Note: Accounts with the same username but different hosts are different accounts.
     * @param {DescribeAccountPrivilegesRequest} req
     * @param {function(string, DescribeAccountPrivilegesResponse):void} cb
     * @public
     */
    DescribeAccountPrivileges(req, cb) {
        let resp = new DescribeAccountPrivilegesResponse();
        this.request("DescribeAccountPrivileges", req, resp, cb);
    }

    /**
     * This API is used to create pay-as-you-go instances.
     * @param {CreateHourDBInstanceRequest} req
     * @param {function(string, CreateHourDBInstanceResponse):void} cb
     * @public
     */
    CreateHourDBInstance(req, cb) {
        let resp = new CreateHourDBInstanceResponse();
        this.request("CreateHourDBInstance", req, resp, cb);
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
     * This API is used to terminate an isolated monthly subscribed instance.
     * @param {DestroyDBInstanceRequest} req
     * @param {function(string, DestroyDBInstanceResponse):void} cb
     * @public
     */
    DestroyDBInstance(req, cb) {
        let resp = new DestroyDBInstanceResponse();
        this.request("DestroyDBInstance", req, resp, cb);
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
     * This API is used to query TencentDB order information. You can pass in an order ID to query the TencentDB instance associated with the order and the corresponding task process ID.
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        let resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
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
     * This API is used to isolate a monthly subscribed TencentDB instance, which will no longer be accessible via IP and port. The isolated instance can be started up in the recycle bin. If it is isolated due to overdue payments, top up your account as soon as possible.
     * @param {IsolateDBInstanceRequest} req
     * @param {function(string, IsolateDBInstanceResponse):void} cb
     * @public
     */
    IsolateDBInstance(req, cb) {
        let resp = new IsolateDBInstanceResponse();
        this.request("IsolateDBInstance", req, resp, cb);
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
     * This API is used to create a monthly subscribed TencentDB instance by passing in information such as instance specifications, database version number, validity period, and quantity.
     * @param {CreateDBInstanceRequest} req
     * @param {function(string, CreateDBInstanceResponse):void} cb
     * @public
     */
    CreateDBInstance(req, cb) {
        let resp = new CreateDBInstanceResponse();
        this.request("CreateDBInstance", req, resp, cb);
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
     * This API is used to query the instance price before you purchase it.
     * @param {DescribePriceRequest} req
     * @param {function(string, DescribePriceResponse):void} cb
     * @public
     */
    DescribePrice(req, cb) {
        let resp = new DescribePriceResponse();
        this.request("DescribePrice", req, resp, cb);
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
     * This API is used to terminate the isolated dedicated TencentDB instance.
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


}
module.exports = MariadbClient;
