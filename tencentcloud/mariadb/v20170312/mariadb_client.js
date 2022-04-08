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
const DescribeDcnDetailRequest = models.DescribeDcnDetailRequest;
const DeleteAccountRequest = models.DeleteAccountRequest;
const DescribeFileDownloadUrlResponse = models.DescribeFileDownloadUrlResponse;
const NodeInfo = models.NodeInfo;
const CopyAccountPrivilegesRequest = models.CopyAccountPrivilegesRequest;
const ModifyAccountPrivilegesRequest = models.ModifyAccountPrivilegesRequest;
const ModifySyncTaskAttributeResponse = models.ModifySyncTaskAttributeResponse;
const DcnDetailItem = models.DcnDetailItem;
const LogFileInfo = models.LogFileInfo;
const CopyAccountPrivilegesResponse = models.CopyAccountPrivilegesResponse;
const CreateHourDBInstanceResponse = models.CreateHourDBInstanceResponse;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const DescribeDcnDetailResponse = models.DescribeDcnDetailResponse;
const DescribeInstanceNodeInfoRequest = models.DescribeInstanceNodeInfoRequest;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const ModifySyncTaskAttributeRequest = models.ModifySyncTaskAttributeRequest;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const SecurityGroupBound = models.SecurityGroupBound;
const ColumnPrivilege = models.ColumnPrivilege;
const GrantAccountPrivilegesResponse = models.GrantAccountPrivilegesResponse;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const CancelDcnJobResponse = models.CancelDcnJobResponse;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const DBInstance = models.DBInstance;
const DestroyHourDBInstanceResponse = models.DestroyHourDBInstanceResponse;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const ModifyAccountPrivilegesResponse = models.ModifyAccountPrivilegesResponse;
const Account = models.Account;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const ProcedurePrivilege = models.ProcedurePrivilege;
const CreateAccountRequest = models.CreateAccountRequest;
const CancelDcnJobRequest = models.CancelDcnJobRequest;
const DestroyHourDBInstanceRequest = models.DestroyHourDBInstanceRequest;
const CreateHourDBInstanceRequest = models.CreateHourDBInstanceRequest;
const SecurityGroup = models.SecurityGroup;
const DescribeFileDownloadUrlRequest = models.DescribeFileDownloadUrlRequest;
const DatabasePrivilege = models.DatabasePrivilege;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const FunctionPrivilege = models.FunctionPrivilege;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const GrantAccountPrivilegesRequest = models.GrantAccountPrivilegesRequest;
const DescribeInstanceNodeInfoResponse = models.DescribeInstanceNodeInfoResponse;
const TablePrivilege = models.TablePrivilege;
const DBParamValue = models.DBParamValue;
const ViewPrivileges = models.ViewPrivileges;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const DescribeDBLogFilesResponse = models.DescribeDBLogFilesResponse;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const DeleteAccountResponse = models.DeleteAccountResponse;
const ResourceTag = models.ResourceTag;


/**
 * mariadb client
 * @class
 */
class MariadbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mariadb.tencentcloudapi.com", "2017-03-12", credential, region, profile);
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
