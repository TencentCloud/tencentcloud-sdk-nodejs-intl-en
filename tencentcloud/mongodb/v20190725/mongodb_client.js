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
const ResetDBInstancePasswordResponse = models.ResetDBInstancePasswordResponse;
const DescribeSpecInfoRequest = models.DescribeSpecInfoRequest;
const CreateDBInstanceRequest = models.CreateDBInstanceRequest;
const DescribeSecurityGroupResponse = models.DescribeSecurityGroupResponse;
const IsolateDBInstanceRequest = models.IsolateDBInstanceRequest;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const BackupDownloadTaskStatus = models.BackupDownloadTaskStatus;
const CreateBackupDBInstanceResponse = models.CreateBackupDBInstanceResponse;
const DBInstancePrice = models.DBInstancePrice;
const DescribeBackupAccessResponse = models.DescribeBackupAccessResponse;
const InquirePriceCreateDBInstancesRequest = models.InquirePriceCreateDBInstancesRequest;
const DescribeSlowLogPatternsResponse = models.DescribeSlowLogPatternsResponse;
const ReplicaSetInfo = models.ReplicaSetInfo;
const CreateDBInstanceHourRequest = models.CreateDBInstanceHourRequest;
const AssignProjectRequest = models.AssignProjectRequest;
const SecurityGroupBound = models.SecurityGroupBound;
const CreateBackupDownloadTaskResponse = models.CreateBackupDownloadTaskResponse;
const ClientConnection = models.ClientConnection;
const InquirePriceModifyDBInstanceSpecRequest = models.InquirePriceModifyDBInstanceSpecRequest;
const BackupInfo = models.BackupInfo;
const InquirePriceRenewDBInstancesRequest = models.InquirePriceRenewDBInstancesRequest;
const DescribeAsyncRequestInfoRequest = models.DescribeAsyncRequestInfoRequest;
const SpecificationInfo = models.SpecificationInfo;
const CreateBackupDownloadTaskRequest = models.CreateBackupDownloadTaskRequest;
const DescribeSlowLogPatternsRequest = models.DescribeSlowLogPatternsRequest;
const DescribeSlowLogsResponse = models.DescribeSlowLogsResponse;
const FlushInstanceRouterConfigResponse = models.FlushInstanceRouterConfigResponse;
const InquirePriceModifyDBInstanceSpecResponse = models.InquirePriceModifyDBInstanceSpecResponse;
const SpecItem = models.SpecItem;
const DescribeSpecInfoResponse = models.DescribeSpecInfoResponse;
const InquirePriceRenewDBInstancesResponse = models.InquirePriceRenewDBInstancesResponse;
const ResetDBInstancePasswordRequest = models.ResetDBInstancePasswordRequest;
const TagInfo = models.TagInfo;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const OfflineIsolatedDBInstanceRequest = models.OfflineIsolatedDBInstanceRequest;
const DescribeDBInstanceDealRequest = models.DescribeDBInstanceDealRequest;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const DescribeAsyncRequestInfoResponse = models.DescribeAsyncRequestInfoResponse;
const CreateDBInstanceResponse = models.CreateDBInstanceResponse;
const AssignProjectResponse = models.AssignProjectResponse;
const BackupDownloadTask = models.BackupDownloadTask;
const DescribeDBBackupsRequest = models.DescribeDBBackupsRequest;
const DescribeClientConnectionsRequest = models.DescribeClientConnectionsRequest;
const DescribeDBInstanceDealResponse = models.DescribeDBInstanceDealResponse;
const ModifyDBInstanceSpecResponse = models.ModifyDBInstanceSpecResponse;
const SecurityGroup = models.SecurityGroup;
const OfflineIsolatedDBInstanceResponse = models.OfflineIsolatedDBInstanceResponse;
const DescribeBackupDownloadTaskRequest = models.DescribeBackupDownloadTaskRequest;
const DescribeBackupAccessRequest = models.DescribeBackupAccessRequest;
const RenameInstanceRequest = models.RenameInstanceRequest;
const DescribeSecurityGroupRequest = models.DescribeSecurityGroupRequest;
const RenewDBInstancesResponse = models.RenewDBInstancesResponse;
const DescribeBackupDownloadTaskResponse = models.DescribeBackupDownloadTaskResponse;
const RenameInstanceResponse = models.RenameInstanceResponse;
const DescribeClientConnectionsResponse = models.DescribeClientConnectionsResponse;
const FlushInstanceRouterConfigRequest = models.FlushInstanceRouterConfigRequest;
const DBInstanceInfo = models.DBInstanceInfo;
const DescribeSlowLogsRequest = models.DescribeSlowLogsRequest;
const BackupFile = models.BackupFile;
const DescribeDBBackupsResponse = models.DescribeDBBackupsResponse;
const InstanceDetail = models.InstanceDetail;
const ModifyDBInstanceSpecRequest = models.ModifyDBInstanceSpecRequest;
const SlowLogPattern = models.SlowLogPattern;
const CreateDBInstanceHourResponse = models.CreateDBInstanceHourResponse;
const CreateBackupDBInstanceRequest = models.CreateBackupDBInstanceRequest;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const InquirePriceCreateDBInstancesResponse = models.InquirePriceCreateDBInstancesResponse;
const RenewDBInstancesRequest = models.RenewDBInstancesRequest;
const ShardInfo = models.ShardInfo;


/**
 * mongodb client
 * @class
 */
class MongodbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mongodb.tencentcloudapi.com", "2019-07-25", credential, region, profile);
    }
    
    /**
     * This API is used to get details of purchase, renewal, and specification adjustment orders of a MongoDB instance.
     * @param {DescribeDBInstanceDealRequest} req
     * @param {function(string, DescribeDBInstanceDealResponse):void} cb
     * @public
     */
    DescribeDBInstanceDeal(req, cb) {
        let resp = new DescribeDBInstanceDealResponse();
        this.request("DescribeDBInstanceDeal", req, resp, cb);
    }

    /**
     * This API is used to deactivate isolated TencentDB instances immediately. The instances must be in isolated status.
     * @param {OfflineIsolatedDBInstanceRequest} req
     * @param {function(string, OfflineIsolatedDBInstanceResponse):void} cb
     * @public
     */
    OfflineIsolatedDBInstance(req, cb) {
        let resp = new OfflineIsolatedDBInstanceResponse();
        this.request("OfflineIsolatedDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the client connection information of an instance, including the IP and number of connections. Currently, only instances of MongoDB 3.2 are supported.
     * @param {DescribeClientConnectionsRequest} req
     * @param {function(string, DescribeClientConnectionsResponse):void} cb
     * @public
     */
    DescribeClientConnections(req, cb) {
        let resp = new DescribeClientConnectionsResponse();
        this.request("DescribeClientConnections", req, resp, cb);
    }

    /**
     * This API is used to modify instance password.
     * @param {ResetDBInstancePasswordRequest} req
     * @param {function(string, ResetDBInstancePasswordResponse):void} cb
     * @public
     */
    ResetDBInstancePassword(req, cb) {
        let resp = new ResetDBInstancePasswordResponse();
        this.request("ResetDBInstancePassword", req, resp, cb);
    }

    /**
     * This API is used to query the security groups associated with an instance.
     * @param {DescribeSecurityGroupRequest} req
     * @param {function(string, DescribeSecurityGroupResponse):void} cb
     * @public
     */
    DescribeSecurityGroup(req, cb) {
        let resp = new DescribeSecurityGroupResponse();
        this.request("DescribeSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to run the `FlushRouterConfig` command on all mongos instances.
     * @param {FlushInstanceRouterConfigRequest} req
     * @param {function(string, FlushInstanceRouterConfigResponse):void} cb
     * @public
     */
    FlushInstanceRouterConfig(req, cb) {
        let resp = new FlushInstanceRouterConfigResponse();
        this.request("FlushInstanceRouterConfig", req, resp, cb);
    }

    /**
     * This API is used to query the list of instance backups. Currently, only backups created in the last seven days can be queried.
     * @param {DescribeDBBackupsRequest} req
     * @param {function(string, DescribeDBBackupsResponse):void} cb
     * @public
     */
    DescribeDBBackups(req, cb) {
        let resp = new DescribeDBBackupsResponse();
        this.request("DescribeDBBackups", req, resp, cb);
    }

    /**
     * This API is used to isolate a pay-as-you-go TencentDB for MongoDB instance. An isolated instance is retained in the recycle bin and data can no longer be written to it. After it is isolated for a certain period of time, it will be completely deleted. For the retention period in the recycle bin, please see the terms of service for pay-as-you-go billing. Isolated pay-as-you-go instances cannot be recovered, so please proceed with caution.
     * @param {IsolateDBInstanceRequest} req
     * @param {function(string, IsolateDBInstanceResponse):void} cb
     * @public
     */
    IsolateDBInstance(req, cb) {
        let resp = new IsolateDBInstanceResponse();
        this.request("IsolateDBInstance", req, resp, cb);
    }

    /**
     * 备份下载功能已调整，此接口即将下线

TencentDB will soon stop supporting this API, as the backup download feature has been modified.

This API is used to get the permission to download a backup file. The detailed backup file information can be obtained through the `DescribeDBBackups` API.
     * @param {DescribeBackupAccessRequest} req
     * @param {function(string, DescribeBackupAccessResponse):void} cb
     * @public
     */
    DescribeBackupAccess(req, cb) {
        let resp = new DescribeBackupAccessResponse();
        this.request("DescribeBackupAccess", req, resp, cb);
    }

    /**
     * This API is used to query price of instance specification adjustment.
     * @param {InquirePriceModifyDBInstanceSpecRequest} req
     * @param {function(string, InquirePriceModifyDBInstanceSpecResponse):void} cb
     * @public
     */
    InquirePriceModifyDBInstanceSpec(req, cb) {
        let resp = new InquirePriceModifyDBInstanceSpecResponse();
        this.request("InquirePriceModifyDBInstanceSpec", req, resp, cb);
    }

    /**
     * This API is used to query async task status.
     * @param {DescribeAsyncRequestInfoRequest} req
     * @param {function(string, DescribeAsyncRequestInfoResponse):void} cb
     * @public
     */
    DescribeAsyncRequestInfo(req, cb) {
        let resp = new DescribeAsyncRequestInfoResponse();
        this.request("DescribeAsyncRequestInfo", req, resp, cb);
    }

    /**
     * This API is used to create a pay-as-you-go TencentDB for MongoDB instance.
     * @param {CreateDBInstanceHourRequest} req
     * @param {function(string, CreateDBInstanceHourResponse):void} cb
     * @public
     */
    CreateDBInstanceHour(req, cb) {
        let resp = new CreateDBInstanceHourResponse();
        this.request("CreateDBInstanceHour", req, resp, cb);
    }

    /**
     * This API is used to create a backup download task.
     * @param {CreateBackupDownloadTaskRequest} req
     * @param {function(string, CreateBackupDownloadTaskResponse):void} cb
     * @public
     */
    CreateBackupDownloadTask(req, cb) {
        let resp = new CreateBackupDownloadTaskResponse();
        this.request("CreateBackupDownloadTask", req, resp, cb);
    }

    /**
     * This API is used to query the list of TencentDB instances (which can be primary, disaster recovery, or read-only instances). It supports filtering instances by project ID, instance ID, and instance status.
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * This API is used to get the slow log statistics of a database instance.
     * @param {DescribeSlowLogPatternsRequest} req
     * @param {function(string, DescribeSlowLogPatternsResponse):void} cb
     * @public
     */
    DescribeSlowLogPatterns(req, cb) {
        let resp = new DescribeSlowLogPatternsResponse();
        this.request("DescribeSlowLogPatterns", req, resp, cb);
    }

    /**
     * This API is used to get the slow log information of a TencentDB instance. Only slow logs for the last 7 days can be queried.
     * @param {DescribeSlowLogsRequest} req
     * @param {function(string, DescribeSlowLogsResponse):void} cb
     * @public
     */
    DescribeSlowLogs(req, cb) {
        let resp = new DescribeSlowLogsResponse();
        this.request("DescribeSlowLogs", req, resp, cb);
    }

    /**
     * This API is used to create a monthly subscription TencentDB for MongoDB instance. The purchasable specifications supported by this API can be obtained through the `DescribeSpecInfo` API.
     * @param {CreateDBInstanceRequest} req
     * @param {function(string, CreateDBInstanceResponse):void} cb
     * @public
     */
    CreateDBInstance(req, cb) {
        let resp = new CreateDBInstanceResponse();
        this.request("CreateDBInstance", req, resp, cb);
    }

    /**
     * This API is used to adjust the specification configuration of a TencentDB for MongoDB. The purchasable specifications supported by the API can be obtained through the DescribeSpecInfo API.
     * @param {ModifyDBInstanceSpecRequest} req
     * @param {function(string, ModifyDBInstanceSpecResponse):void} cb
     * @public
     */
    ModifyDBInstanceSpec(req, cb) {
        let resp = new ModifyDBInstanceSpecResponse();
        this.request("ModifyDBInstanceSpec", req, resp, cb);
    }

    /**
     * This API is used to query the purchasable instance specifications.
     * @param {DescribeSpecInfoRequest} req
     * @param {function(string, DescribeSpecInfoResponse):void} cb
     * @public
     */
    DescribeSpecInfo(req, cb) {
        let resp = new DescribeSpecInfoResponse();
        this.request("DescribeSpecInfo", req, resp, cb);
    }

    /**
     * This API is used to query backup download task information.
     * @param {DescribeBackupDownloadTaskRequest} req
     * @param {function(string, DescribeBackupDownloadTaskResponse):void} cb
     * @public
     */
    DescribeBackupDownloadTask(req, cb) {
        let resp = new DescribeBackupDownloadTaskResponse();
        this.request("DescribeBackupDownloadTask", req, resp, cb);
    }

    /**
     * This API is used to query price of instance creation. The `region` parameter must be passed in this API, otherwise verification will fail. This API allows queries only for purchasable instance specifications.
     * @param {InquirePriceCreateDBInstancesRequest} req
     * @param {function(string, InquirePriceCreateDBInstancesResponse):void} cb
     * @public
     */
    InquirePriceCreateDBInstances(req, cb) {
        let resp = new InquirePriceCreateDBInstancesResponse();
        this.request("InquirePriceCreateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to specify the project to which a TencentDB instance belongs.

     * @param {AssignProjectRequest} req
     * @param {function(string, AssignProjectResponse):void} cb
     * @public
     */
    AssignProject(req, cb) {
        let resp = new AssignProjectResponse();
        this.request("AssignProject", req, resp, cb);
    }

    /**
     * This API is used to rename a TencentDB instance.
     * @param {RenameInstanceRequest} req
     * @param {function(string, RenameInstanceResponse):void} cb
     * @public
     */
    RenameInstance(req, cb) {
        let resp = new RenameInstanceResponse();
        this.request("RenameInstance", req, resp, cb);
    }

    /**
     * This API is used to renew a monthly subscription TencentDB instance. Only monthly subscription instances are supported, while pay-as-you-go instances do not need to be renewed.
     * @param {RenewDBInstancesRequest} req
     * @param {function(string, RenewDBInstancesResponse):void} cb
     * @public
     */
    RenewDBInstances(req, cb) {
        let resp = new RenewDBInstancesResponse();
        this.request("RenewDBInstances", req, resp, cb);
    }

    /**
     * This API is used to create instance backups.
     * @param {CreateBackupDBInstanceRequest} req
     * @param {function(string, CreateBackupDBInstanceResponse):void} cb
     * @public
     */
    CreateBackupDBInstance(req, cb) {
        let resp = new CreateBackupDBInstanceResponse();
        this.request("CreateBackupDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the renewal price of a monthly subscription instance.
     * @param {InquirePriceRenewDBInstancesRequest} req
     * @param {function(string, InquirePriceRenewDBInstancesResponse):void} cb
     * @public
     */
    InquirePriceRenewDBInstances(req, cb) {
        let resp = new InquirePriceRenewDBInstancesResponse();
        this.request("InquirePriceRenewDBInstances", req, resp, cb);
    }


}
module.exports = MongodbClient;
