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
const DescribeDCDBInstancesResponse = models.DescribeDCDBInstancesResponse;
const DescribeFlowRequest = models.DescribeFlowRequest;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const CopyAccountPrivilegesRequest = models.CopyAccountPrivilegesRequest;
const SecurityGroup = models.SecurityGroup;
const GrantAccountPrivilegesRequest = models.GrantAccountPrivilegesRequest;
const CreateHourDCDBInstanceRequest = models.CreateHourDCDBInstanceRequest;
const DescribeDCDBInstanceNodeInfoResponse = models.DescribeDCDBInstanceNodeInfoResponse;
const DescribeProjectsRequest = models.DescribeProjectsRequest;
const CopyAccountPrivilegesResponse = models.CopyAccountPrivilegesResponse;
const LogFileInfo = models.LogFileInfo;
const DescribeDcnDetailResponse = models.DescribeDcnDetailResponse;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const SecurityGroupBound = models.SecurityGroupBound;
const GrantAccountPrivilegesResponse = models.GrantAccountPrivilegesResponse;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const CancelDcnJobResponse = models.CancelDcnJobResponse;
const DescribeFileDownloadUrlRequest = models.DescribeFileDownloadUrlRequest;
const DestroyHourDCDBInstanceResponse = models.DestroyHourDCDBInstanceResponse;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const CreateHourDCDBInstanceResponse = models.CreateHourDCDBInstanceResponse;
const DescribeDBSyncModeResponse = models.DescribeDBSyncModeResponse;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const DestroyDCDBInstanceResponse = models.DestroyDCDBInstanceResponse;
const CreateAccountRequest = models.CreateAccountRequest;
const CancelDcnJobRequest = models.CancelDcnJobRequest;
const DescribeFlowResponse = models.DescribeFlowResponse;
const Project = models.Project;
const ShardInfo = models.ShardInfo;
const DescribeDCDBInstanceNodeInfoRequest = models.DescribeDCDBInstanceNodeInfoRequest;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const DescribeDCDBInstancesRequest = models.DescribeDCDBInstancesRequest;
const DestroyHourDCDBInstanceRequest = models.DestroyHourDCDBInstanceRequest;
const SwitchDBInstanceHAResponse = models.SwitchDBInstanceHAResponse;
const DcnDetailItem = models.DcnDetailItem;
const DescribeFileDownloadUrlResponse = models.DescribeFileDownloadUrlResponse;
const DescribeDBSyncModeRequest = models.DescribeDBSyncModeRequest;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const DestroyDCDBInstanceRequest = models.DestroyDCDBInstanceRequest;
const SwitchDBInstanceHARequest = models.SwitchDBInstanceHARequest;
const DBParamValue = models.DBParamValue;
const BriefNodeInfo = models.BriefNodeInfo;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const DescribeDBLogFilesResponse = models.DescribeDBLogFilesResponse;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
const ResourceTag = models.ResourceTag;
const DCDBInstanceInfo = models.DCDBInstanceInfo;
const DeleteAccountResponse = models.DeleteAccountResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;


/**
 * dcdb client
 * @class
 */
class DcdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dcdb.tencentcloudapi.com", "2018-04-11", credential, region, profile);
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
     * This API is used to create pay-as-you-go TDSQL for MySQL instances.
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
