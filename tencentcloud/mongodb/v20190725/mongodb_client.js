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
const DescribeSpecInfoRequest = models.DescribeSpecInfoRequest;
const CreateDBInstanceRequest = models.CreateDBInstanceRequest;
const CreateBackupDBInstanceResponse = models.CreateBackupDBInstanceResponse;
const DBInstancePrice = models.DBInstancePrice;
const DescribeDBInstanceNamespaceResponse = models.DescribeDBInstanceNamespaceResponse;
const DescribeSlowLogsRequest = models.DescribeSlowLogsRequest;
const FlushInstanceRouterConfigResponse = models.FlushInstanceRouterConfigResponse;
const SetDBInstanceDeletionProtectionRequest = models.SetDBInstanceDeletionProtectionRequest;
const DescribeSecurityGroupRequest = models.DescribeSecurityGroupRequest;
const SlowLogPattern = models.SlowLogPattern;
const AssignProjectResponse = models.AssignProjectResponse;
const DescribeDBInstanceDealResponse = models.DescribeDBInstanceDealResponse;
const OfflineIsolatedDBInstanceResponse = models.OfflineIsolatedDBInstanceResponse;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const InstanceMultiParam = models.InstanceMultiParam;
const DescribeBackupDownloadTaskResponse = models.DescribeBackupDownloadTaskResponse;
const AddNodeList = models.AddNodeList;
const FlushInstanceRouterConfigRequest = models.FlushInstanceRouterConfigRequest;
const DBInstanceInfo = models.DBInstanceInfo;
const ModifyDBInstanceNetworkAddressRequest = models.ModifyDBInstanceNetworkAddressRequest;
const CreateDBInstanceHourResponse = models.CreateDBInstanceHourResponse;
const DescribeDBInstanceNamespaceRequest = models.DescribeDBInstanceNamespaceRequest;
const DescribeDBInstanceNodePropertyRequest = models.DescribeDBInstanceNodePropertyRequest;
const SpecItem = models.SpecItem;
const DescribeDetailedSlowLogsRequest = models.DescribeDetailedSlowLogsRequest;
const ModifyDBInstanceNetworkAddressResponse = models.ModifyDBInstanceNetworkAddressResponse;
const DescribeSlowLogPatternsResponse = models.DescribeSlowLogPatternsResponse;
const BackupDownloadTaskStatus = models.BackupDownloadTaskStatus;
const DescribeSlowLogsResponse = models.DescribeSlowLogsResponse;
const InquirePriceModifyDBInstanceSpecRequest = models.InquirePriceModifyDBInstanceSpecRequest;
const BackupInfo = models.BackupInfo;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const ModifyDBInstanceSpecRequest = models.ModifyDBInstanceSpecRequest;
const ResetDBInstancePasswordRequest = models.ResetDBInstancePasswordRequest;
const InstanceIntegerParam = models.InstanceIntegerParam;
const ModifyNetworkAddress = models.ModifyNetworkAddress;
const DescribeAsyncRequestInfoResponse = models.DescribeAsyncRequestInfoResponse;
const CreateDBInstanceResponse = models.CreateDBInstanceResponse;
const InstanceTextParam = models.InstanceTextParam;
const ModifyDBInstanceSecurityGroupRequest = models.ModifyDBInstanceSecurityGroupRequest;
const InquirePriceRenewDBInstancesRequest = models.InquirePriceRenewDBInstancesRequest;
const DescribeBackupDownloadTaskRequest = models.DescribeBackupDownloadTaskRequest;
const DescribeClientConnectionsResponse = models.DescribeClientConnectionsResponse;
const TerminateDBInstancesRequest = models.TerminateDBInstancesRequest;
const DescribeDBBackupsResponse = models.DescribeDBBackupsResponse;
const ModifyDBInstanceSecurityGroupResponse = models.ModifyDBInstanceSecurityGroupResponse;
const RemoveNodeList = models.RemoveNodeList;
const NodeTag = models.NodeTag;
const InquirePriceCreateDBInstancesResponse = models.InquirePriceCreateDBInstancesResponse;
const DescribeSecurityGroupResponse = models.DescribeSecurityGroupResponse;
const SecurityGroup = models.SecurityGroup;
const ReplicaSetInfo = models.ReplicaSetInfo;
const ResetDBInstancePasswordResponse = models.ResetDBInstancePasswordResponse;
const ClientConnection = models.ClientConnection;
const ReplicateSetInfo = models.ReplicateSetInfo;
const DescribeDBInstanceDealRequest = models.DescribeDBInstanceDealRequest;
const DescribeAsyncRequestInfoRequest = models.DescribeAsyncRequestInfoRequest;
const CreateBackupDownloadTaskRequest = models.CreateBackupDownloadTaskRequest;
const InquirePriceModifyDBInstanceSpecResponse = models.InquirePriceModifyDBInstanceSpecResponse;
const SecurityGroupBound = models.SecurityGroupBound;
const DescribeDBInstanceNodePropertyResponse = models.DescribeDBInstanceNodePropertyResponse;
const BackupDownloadTask = models.BackupDownloadTask;
const DescribeDBBackupsRequest = models.DescribeDBBackupsRequest;
const DescribeClientConnectionsRequest = models.DescribeClientConnectionsRequest;
const SetDBInstanceDeletionProtectionResponse = models.SetDBInstanceDeletionProtectionResponse;
const DescribeDetailedSlowLogsResponse = models.DescribeDetailedSlowLogsResponse;
const ShardInfo = models.ShardInfo;
const TerminateDBInstancesResponse = models.TerminateDBInstancesResponse;
const RenameInstanceRequest = models.RenameInstanceRequest;
const RenewDBInstancesResponse = models.RenewDBInstancesResponse;
const InstanceEnumParam = models.InstanceEnumParam;
const RenameInstanceResponse = models.RenameInstanceResponse;
const CreateBackupDBInstanceRequest = models.CreateBackupDBInstanceRequest;
const NodeProperty = models.NodeProperty;
const IsolateDBInstanceRequest = models.IsolateDBInstanceRequest;
const CreateDBInstanceHourRequest = models.CreateDBInstanceHourRequest;
const AssignProjectRequest = models.AssignProjectRequest;
const CreateBackupDownloadTaskResponse = models.CreateBackupDownloadTaskResponse;
const SlowLogItem = models.SlowLogItem;
const SpecificationInfo = models.SpecificationInfo;
const DescribeSlowLogPatternsRequest = models.DescribeSlowLogPatternsRequest;
const DescribeSpecInfoResponse = models.DescribeSpecInfoResponse;
const InquirePriceRenewDBInstancesResponse = models.InquirePriceRenewDBInstancesResponse;
const TagInfo = models.TagInfo;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const OfflineIsolatedDBInstanceRequest = models.OfflineIsolatedDBInstanceRequest;
const InquirePriceCreateDBInstancesRequest = models.InquirePriceCreateDBInstancesRequest;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const InstanceDetail = models.InstanceDetail;
const ModifyDBInstanceSpecResponse = models.ModifyDBInstanceSpecResponse;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const RenewDBInstancesRequest = models.RenewDBInstancesRequest;


/**
 * mongodb client
 * @class
 */
class MongodbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mongodb.intl.tencentcloudapi.com", "2019-07-25", credential, region, profile);
    }
    
    /**
     * This API is used to terminate monthly subscription billing instances.
     * @param {TerminateDBInstancesRequest} req
     * @param {function(string, TerminateDBInstancesResponse):void} cb
     * @public
     */
    TerminateDBInstances(req, cb) {
        let resp = new TerminateDBInstancesResponse();
        this.request("TerminateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query node attributes, such as the AZ, node name, address, role, status, delay between primary and secondary nodes, priority, voting right, and tags.
     * @param {DescribeDBInstanceNodePropertyRequest} req
     * @param {function(string, DescribeDBInstanceNodePropertyResponse):void} cb
     * @public
     */
    DescribeDBInstanceNodeProperty(req, cb) {
        let resp = new DescribeDBInstanceNodePropertyResponse();
        this.request("DescribeDBInstanceNodeProperty", req, resp, cb);
    }

    /**
     * This API is used to get order details of purchase, renewal, and specification adjustment of a MongoDB instance.
     * @param {DescribeDBInstanceDealRequest} req
     * @param {function(string, DescribeDBInstanceDealResponse):void} cb
     * @public
     */
    DescribeDBInstanceDeal(req, cb) {
        let resp = new DescribeDBInstanceDealResponse();
        this.request("DescribeDBInstanceDeal", req, resp, cb);
    }

    /**
     * This API is used to query the table information on a database.
     * @param {DescribeDBInstanceNamespaceRequest} req
     * @param {function(string, DescribeDBInstanceNamespaceResponse):void} cb
     * @public
     */
    DescribeDBInstanceNamespace(req, cb) {
        let resp = new DescribeDBInstanceNamespaceResponse();
        this.request("DescribeDBInstanceNamespace", req, resp, cb);
    }

    /**
     * This API is used to query the client connection information on an instance, including the IP address for connection and the number of connections.
     * @param {DescribeClientConnectionsRequest} req
     * @param {function(string, DescribeClientConnectionsResponse):void} cb
     * @public
     */
    DescribeClientConnections(req, cb) {
        let resp = new DescribeClientConnectionsResponse();
        this.request("DescribeClientConnections", req, resp, cb);
    }

    /**
     * This API is used to reset the instance access password.
     * @param {ResetDBInstancePasswordRequest} req
     * @param {function(string, ResetDBInstancePasswordResponse):void} cb
     * @public
     */
    ResetDBInstancePassword(req, cb) {
        let resp = new ResetDBInstancePasswordResponse();
        this.request("ResetDBInstancePassword", req, resp, cb);
    }

    /**
     * This API is used to query security groups bound to an instance.
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
     * This API is used to query slow log details of the instance.
     * @param {DescribeDetailedSlowLogsRequest} req
     * @param {function(string, DescribeDetailedSlowLogsResponse):void} cb
     * @public
     */
    DescribeDetailedSlowLogs(req, cb) {
        let resp = new DescribeDetailedSlowLogsResponse();
        this.request("DescribeDetailedSlowLogs", req, resp, cb);
    }

    /**
     * This API is used to query the price of instance specification adjustment.
     * @param {InquirePriceModifyDBInstanceSpecRequest} req
     * @param {function(string, InquirePriceModifyDBInstanceSpecResponse):void} cb
     * @public
     */
    InquirePriceModifyDBInstanceSpec(req, cb) {
        let resp = new InquirePriceModifyDBInstanceSpecResponse();
        this.request("InquirePriceModifyDBInstanceSpec", req, resp, cb);
    }

    /**
     * This API is used to query the asynchronous task status.
     * @param {DescribeAsyncRequestInfoRequest} req
     * @param {function(string, DescribeAsyncRequestInfoResponse):void} cb
     * @public
     */
    DescribeAsyncRequestInfo(req, cb) {
        let resp = new DescribeAsyncRequestInfoResponse();
        this.request("DescribeAsyncRequestInfo", req, resp, cb);
    }

    /**
     * This API is used to modify the network information on a TencentDB for MongoDB instance. It supports switching from a basic network to a VPC network or from one VPC network to another VPC network.
     * @param {ModifyDBInstanceNetworkAddressRequest} req
     * @param {function(string, ModifyDBInstanceNetworkAddressResponse):void} cb
     * @public
     */
    ModifyDBInstanceNetworkAddress(req, cb) {
        let resp = new ModifyDBInstanceNetworkAddressResponse();
        this.request("ModifyDBInstanceNetworkAddress", req, resp, cb);
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
     * This API is used to isolate a pay-as-you-go TencentDB for MongoDB instance. After isolation, the instance is retained in the recycle bin, and data cannot be written into it. After a certain period of isolation, the instance is deleted permanently. For the retention time in the recycle bin, see the pay-as-you-go service terms. The deleted pay-as-you-go instance cannot be recovered. Proceed with caution.
     * @param {IsolateDBInstanceRequest} req
     * @param {function(string, IsolateDBInstanceResponse):void} cb
     * @public
     */
    IsolateDBInstance(req, cb) {
        let resp = new IsolateDBInstanceResponse();
        this.request("IsolateDBInstance", req, resp, cb);
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
     * This API is used to query the list of TencentDB for MongoDB instances. It supports filtering primary instances, disaster recovery instances, and read-only instances by project ID, instance ID, instance status, and other conditions.
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
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
     * This API is used to create a yearly/monthly subscription TencentDB for MongoDB instance. The [DescribeSpecInfo](https://www.tencentcloud.comom/document/product/240/35767?from_cn_redirect=1) API can be called to query and obtain the supported sales specifications.
     * @param {CreateDBInstanceRequest} req
     * @param {function(string, CreateDBInstanceResponse):void} cb
     * @public
     */
    CreateDBInstance(req, cb) {
        let resp = new CreateDBInstanceResponse();
        this.request("CreateDBInstance", req, resp, cb);
    }

    /**
     * This API is used to adjust the TencentDB for MongoDB instance configuration. The [DescribeSpecInfo](https://www.tencentcloud.comom/document/product/240/38567?from_cn_redirect=1) API can be called to query and obtain the supported sales specifications.
     * @param {ModifyDBInstanceSpecRequest} req
     * @param {function(string, ModifyDBInstanceSpecResponse):void} cb
     * @public
     */
    ModifyDBInstanceSpec(req, cb) {
        let resp = new ModifyDBInstanceSpecResponse();
        this.request("ModifyDBInstanceSpec", req, resp, cb);
    }

    /**
     * This API is used to query the list of parameters that can be modified for the current instance.
     * @param {DescribeInstanceParamsRequest} req
     * @param {function(string, DescribeInstanceParamsResponse):void} cb
     * @public
     */
    DescribeInstanceParams(req, cb) {
        let resp = new DescribeInstanceParamsResponse();
        this.request("DescribeInstanceParams", req, resp, cb);
    }

    /**
     * This API is used to query the sales specification of an instance.
     * @param {DescribeSpecInfoRequest} req
     * @param {function(string, DescribeSpecInfoResponse):void} cb
     * @public
     */
    DescribeSpecInfo(req, cb) {
        let resp = new DescribeSpecInfoResponse();
        this.request("DescribeSpecInfo", req, resp, cb);
    }

    /**
     * This API is used to query information about the backup download task.
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
     * This API is used to set instance termination protection.
     * @param {SetDBInstanceDeletionProtectionRequest} req
     * @param {function(string, SetDBInstanceDeletionProtectionResponse):void} cb
     * @public
     */
    SetDBInstanceDeletionProtection(req, cb) {
        let resp = new SetDBInstanceDeletionProtectionResponse();
        this.request("SetDBInstanceDeletionProtection", req, resp, cb);
    }

    /**
     * This API is used to specify the project of a TencentDB for MongoDB instance.
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
     * This API is used to back up an instance.
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

    /**
     * This API is used to modify security groups bound to an instance.
     * @param {ModifyDBInstanceSecurityGroupRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroup(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupResponse();
        this.request("ModifyDBInstanceSecurityGroup", req, resp, cb);
    }


}
module.exports = MongodbClient;
