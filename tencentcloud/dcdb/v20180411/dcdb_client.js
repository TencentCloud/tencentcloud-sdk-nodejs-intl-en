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
const InitDCDBInstancesResponse = models.InitDCDBInstancesResponse;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const ParamDesc = models.ParamDesc;
const DescribeDBParametersRequest = models.DescribeDBParametersRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const DescribeDBSyncModeResponse = models.DescribeDBSyncModeResponse;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const CreateAccountRequest = models.CreateAccountRequest;
const DescribeDBParametersResponse = models.DescribeDBParametersResponse;
const DescribeFlowResponse = models.DescribeFlowResponse;
const CloneAccountResponse = models.CloneAccountResponse;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const DestroyDCDBInstanceRequest = models.DestroyDCDBInstanceRequest;
const OpenDBExtranetAccessResponse = models.OpenDBExtranetAccessResponse;
const ParamConstraint = models.ParamConstraint;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const DescribeDCDBInstanceNodeInfoRequest = models.DescribeDCDBInstanceNodeInfoRequest;
const DatabaseView = models.DatabaseView;
const DescribeDBLogFilesRequest = models.DescribeDBLogFilesRequest;
const DcnDetailItem = models.DcnDetailItem;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const CopyAccountPrivilegesResponse = models.CopyAccountPrivilegesResponse;
const CloneAccountRequest = models.CloneAccountRequest;
const ParamModifyResult = models.ParamModifyResult;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const DatabaseFunction = models.DatabaseFunction;
const BriefNodeInfo = models.BriefNodeInfo;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const DescribeDatabaseObjectsRequest = models.DescribeDatabaseObjectsRequest;
const DescribeDBLogFilesResponse = models.DescribeDBLogFilesResponse;
const DatabaseTable = models.DatabaseTable;
const GrantAccountPrivilegesRequest = models.GrantAccountPrivilegesRequest;
const DescribeDCDBShardsRequest = models.DescribeDCDBShardsRequest;
const DBParamValue = models.DBParamValue;
const ModifyDBParametersRequest = models.ModifyDBParametersRequest;
const DCDBInstanceInfo = models.DCDBInstanceInfo;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeDcnDetailRequest = models.DescribeDcnDetailRequest;
const ModifyDBParametersResponse = models.ModifyDBParametersResponse;
const DCDBShardInfo = models.DCDBShardInfo;
const CopyAccountPrivilegesRequest = models.CopyAccountPrivilegesRequest;
const SecurityGroup = models.SecurityGroup;
const DescribeDatabaseTableRequest = models.DescribeDatabaseTableRequest;
const DescribeDCDBInstanceNodeInfoResponse = models.DescribeDCDBInstanceNodeInfoResponse;
const DescribeDatabaseObjectsResponse = models.DescribeDatabaseObjectsResponse;
const DescribeDcnDetailResponse = models.DescribeDcnDetailResponse;
const TableColumn = models.TableColumn;
const SecurityGroupBound = models.SecurityGroupBound;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const DescribeDCDBShardsResponse = models.DescribeDCDBShardsResponse;
const Database = models.Database;
const GrantAccountPrivilegesResponse = models.GrantAccountPrivilegesResponse;
const ShardInfo = models.ShardInfo;
const OpenDBExtranetAccessRequest = models.OpenDBExtranetAccessRequest;
const DestroyHourDCDBInstanceRequest = models.DestroyHourDCDBInstanceRequest;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DescribeDBSyncModeRequest = models.DescribeDBSyncModeRequest;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const DescribeProjectsRequest = models.DescribeProjectsRequest;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const DestroyDCDBInstanceResponse = models.DestroyDCDBInstanceResponse;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
const InitDCDBInstancesRequest = models.InitDCDBInstancesRequest;
const DeleteAccountRequest = models.DeleteAccountRequest;
const DescribeDCDBInstancesResponse = models.DescribeDCDBInstancesResponse;
const DescribeFlowRequest = models.DescribeFlowRequest;
const DatabaseProcedure = models.DatabaseProcedure;
const ModifyDBSyncModeRequest = models.ModifyDBSyncModeRequest;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const CreateAccountResponse = models.CreateAccountResponse;
const DestroyHourDCDBInstanceResponse = models.DestroyHourDCDBInstanceResponse;
const ConstraintRange = models.ConstraintRange;
const LogFileInfo = models.LogFileInfo;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const DBAccount = models.DBAccount;
const DescribeDatabaseTableResponse = models.DescribeDatabaseTableResponse;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const DescribeDCDBInstancesRequest = models.DescribeDCDBInstancesRequest;
const Project = models.Project;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const ModifyDBSyncModeResponse = models.ModifyDBSyncModeResponse;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const DeleteAccountResponse = models.DeleteAccountResponse;


/**
 * dcdb client
 * @class
 */
class DcdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dcdb.tencentcloudapi.com", "2018-04-11", credential, region, profile);
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
     * This API is used to terminate an isolated monthly-subscribed instance.
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
     * This API is used to query the project list.
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        let resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
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
     * This API is used to terminate a pay-as-you-go instance.
     * @param {DestroyHourDCDBInstanceRequest} req
     * @param {function(string, DestroyHourDCDBInstanceResponse):void} cb
     * @public
     */
    DestroyHourDCDBInstance(req, cb) {
        let resp = new DestroyHourDCDBInstanceResponse();
        this.request("DestroyHourDCDBInstance", req, resp, cb);
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
