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
const CreateDBInstanceParamTplResponse = models.CreateDBInstanceParamTplResponse;
const DescribeAccountUsersRequest = models.DescribeAccountUsersRequest;
const DescribeDBInstanceParamTplRequest = models.DescribeDBInstanceParamTplRequest;
const CreateBackupDBInstanceResponse = models.CreateBackupDBInstanceResponse;
const DescribeAuditLogsRequest = models.DescribeAuditLogsRequest;
const DBInstancePrice = models.DBInstancePrice;
const DescribePasswordRotationResponse = models.DescribePasswordRotationResponse;
const KillOpsRequest = models.KillOpsRequest;
const EnablePasswordRotationRequest = models.EnablePasswordRotationRequest;
const DeleteLogDownloadTaskResponse = models.DeleteLogDownloadTaskResponse;
const InquirePriceRenewDBInstancesRequest = models.InquirePriceRenewDBInstancesRequest;
const DescribeAuditLogFilesResponse = models.DescribeAuditLogFilesResponse;
const FlushInstanceRouterConfigRequest = models.FlushInstanceRouterConfigRequest;
const DescribeSlowLogsRequest = models.DescribeSlowLogsRequest;
const FlushInstanceRouterConfigResponse = models.FlushInstanceRouterConfigResponse;
const DescribeCurrentOpResponse = models.DescribeCurrentOpResponse;
const SetDBInstanceDeletionProtectionRequest = models.SetDBInstanceDeletionProtectionRequest;
const InstanceMultiParam = models.InstanceMultiParam;
const DescribeSRVConnectionDomainResponse = models.DescribeSRVConnectionDomainResponse;
const ModifyInstanceParamsResponse = models.ModifyInstanceParamsResponse;
const SetInstanceMaintenanceResponse = models.SetInstanceMaintenanceResponse;
const DescribeInstanceSSLRequest = models.DescribeInstanceSSLRequest;
const EnableTransparentDataEncryptionRequest = models.EnableTransparentDataEncryptionRequest;
const DescribeBackupRulesResponse = models.DescribeBackupRulesResponse;
const ModifyBackupExpireTimeResponse = models.ModifyBackupExpireTimeResponse;
const SlowLogPattern = models.SlowLogPattern;
const Task = models.Task;
const ModifySRVConnectionUrlResponse = models.ModifySRVConnectionUrlResponse;
const AssignProjectResponse = models.AssignProjectResponse;
const AuditLogFilter = models.AuditLogFilter;
const DescribeDBInstanceDealResponse = models.DescribeDBInstanceDealResponse;
const DescribeAuditLogsResponse = models.DescribeAuditLogsResponse;
const OfflineIsolatedDBInstanceResponse = models.OfflineIsolatedDBInstanceResponse;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const CreateDBInstanceParamTplRequest = models.CreateDBInstanceParamTplRequest;
const DisableSRVConnectionUrlResponse = models.DisableSRVConnectionUrlResponse;
const DescribeSecurityGroupRequest = models.DescribeSecurityGroupRequest;
const RenameInstanceRequest = models.RenameInstanceRequest;
const DescribeBackupRulesRequest = models.DescribeBackupRulesRequest;
const DescribeBackupDownloadTaskResponse = models.DescribeBackupDownloadTaskResponse;
const AddNodeList = models.AddNodeList;
const EnablePasswordRotationResponse = models.EnablePasswordRotationResponse;
const DBInstanceInfo = models.DBInstanceInfo;
const ParamType = models.ParamType;
const SetAccountUserPrivilegeResponse = models.SetAccountUserPrivilegeResponse;
const ModifyDBInstanceNetworkAddressRequest = models.ModifyDBInstanceNetworkAddressRequest;
const CreateDBInstanceHourResponse = models.CreateDBInstanceHourResponse;
const InstanceEnableSSLRequest = models.InstanceEnableSSLRequest;
const DescribeDBInstanceNamespaceRequest = models.DescribeDBInstanceNamespaceRequest;
const DescribeDBInstanceNodePropertyRequest = models.DescribeDBInstanceNodePropertyRequest;
const LogInfo = models.LogInfo;
const DeleteAccountUserRequest = models.DeleteAccountUserRequest;
const SpecItem = models.SpecItem;
const DescribeDetailedSlowLogsRequest = models.DescribeDetailedSlowLogsRequest;
const ModifyInstanceAzResponse = models.ModifyInstanceAzResponse;
const UpgradeDbInstanceVersionRequest = models.UpgradeDbInstanceVersionRequest;
const ModifyDBInstanceNetworkAddressResponse = models.ModifyDBInstanceNetworkAddressResponse;
const CreateAccountUserResponse = models.CreateAccountUserResponse;
const DescribeSlowLogPatternsResponse = models.DescribeSlowLogPatternsResponse;
const BackupDownloadTaskStatus = models.BackupDownloadTaskStatus;
const DescribeSlowLogsResponse = models.DescribeSlowLogsResponse;
const InquirePriceModifyDBInstanceSpecRequest = models.InquirePriceModifyDBInstanceSpecRequest;
const BackupInfo = models.BackupInfo;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const InstanceEnableSSLResponse = models.InstanceEnableSSLResponse;
const CurrentOp = models.CurrentOp;
const ModifyDBInstanceSpecRequest = models.ModifyDBInstanceSpecRequest;
const DescribeLogDownloadTasksRequest = models.DescribeLogDownloadTasksRequest;
const Auth = models.Auth;
const ResetDBInstancePasswordRequest = models.ResetDBInstancePasswordRequest;
const InstanceIntegerParam = models.InstanceIntegerParam;
const ModifyInstanceAzRequest = models.ModifyInstanceAzRequest;
const ModifyNetworkAddress = models.ModifyNetworkAddress;
const EnableSRVConnectionUrlResponse = models.EnableSRVConnectionUrlResponse;
const DescribeAsyncRequestInfoResponse = models.DescribeAsyncRequestInfoResponse;
const CreateDBInstanceResponse = models.CreateDBInstanceResponse;
const CreateLogDownloadTaskRequest = models.CreateLogDownloadTaskRequest;
const WanServiceNodeList = models.WanServiceNodeList;
const CreateAccountUserRequest = models.CreateAccountUserRequest;
const InstanceTextParam = models.InstanceTextParam;
const ModifyDBInstanceSecurityGroupRequest = models.ModifyDBInstanceSecurityGroupRequest;
const DeleteDBBackupsRequest = models.DeleteDBBackupsRequest;
const DescribeDBInstanceNamespaceResponse = models.DescribeDBInstanceNamespaceResponse;
const DescribeBackupDownloadTaskRequest = models.DescribeBackupDownloadTaskRequest;
const ModifySRVConnectionUrlRequest = models.ModifySRVConnectionUrlRequest;
const DescribeClientConnectionsResponse = models.DescribeClientConnectionsResponse;
const DescribeAccountUsersResponse = models.DescribeAccountUsersResponse;
const DescribeSRVConnectionDomainRequest = models.DescribeSRVConnectionDomainRequest;
const DescribeDBBackupsResponse = models.DescribeDBBackupsResponse;
const ModifyDBInstanceSecurityGroupResponse = models.ModifyDBInstanceSecurityGroupResponse;
const UserInfo = models.UserInfo;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const NodeTag = models.NodeTag;
const InquirePriceCreateDBInstancesResponse = models.InquirePriceCreateDBInstancesResponse;
const CloseAuditServiceRequest = models.CloseAuditServiceRequest;
const DescribeSecurityGroupResponse = models.DescribeSecurityGroupResponse;
const SecurityGroup = models.SecurityGroup;
const EnableWanServiceRequest = models.EnableWanServiceRequest;
const ReplicaSetInfo = models.ReplicaSetInfo;
const ResetDBInstancePasswordResponse = models.ResetDBInstancePasswordResponse;
const ClientConnection = models.ClientConnection;
const ReplicateSetInfo = models.ReplicateSetInfo;
const DescribeDBInstanceDealRequest = models.DescribeDBInstanceDealRequest;
const UpgradeDBInstanceKernelVersionResponse = models.UpgradeDBInstanceKernelVersionResponse;
const DescribeAsyncRequestInfoRequest = models.DescribeAsyncRequestInfoRequest;
const CreateBackupDownloadTaskRequest = models.CreateBackupDownloadTaskRequest;
const TerminateDBInstancesRequest = models.TerminateDBInstancesRequest;
const ParamTpl = models.ParamTpl;
const InquirePriceModifyDBInstanceSpecResponse = models.InquirePriceModifyDBInstanceSpecResponse;
const CreateDBInstanceHourRequest = models.CreateDBInstanceHourRequest;
const DeleteDBBackupsResponse = models.DeleteDBBackupsResponse;
const SecurityGroupBound = models.SecurityGroupBound;
const RestoreDBInstanceResponse = models.RestoreDBInstanceResponse;
const BackupTotalSize = models.BackupTotalSize;
const DescribeDBInstanceNodePropertyResponse = models.DescribeDBInstanceNodePropertyResponse;
const CloseAuditServiceResponse = models.CloseAuditServiceResponse;
const DescribeDBInstanceParamTplDetailResponse = models.DescribeDBInstanceParamTplDetailResponse;
const DescribeMongodbLogsResponse = models.DescribeMongodbLogsResponse;
const ModifyBackupExpireTimeRequest = models.ModifyBackupExpireTimeRequest;
const DescribeInstanceSSLResponse = models.DescribeInstanceSSLResponse;
const DescribeCurrentOpRequest = models.DescribeCurrentOpRequest;
const BackupDownloadTask = models.BackupDownloadTask;
const DescribeDBBackupsRequest = models.DescribeDBBackupsRequest;
const DescribeClientConnectionsRequest = models.DescribeClientConnectionsRequest;
const SetDBInstanceDeletionProtectionResponse = models.SetDBInstanceDeletionProtectionResponse;
const DescribeDetailedSlowLogsResponse = models.DescribeDetailedSlowLogsResponse;
const ShardInfo = models.ShardInfo;
const TerminateDBInstancesResponse = models.TerminateDBInstancesResponse;
const EnableSRVConnectionUrlRequest = models.EnableSRVConnectionUrlRequest;
const RenewDBInstancesResponse = models.RenewDBInstancesResponse;
const InstanceEnumParam = models.InstanceEnumParam;
const RenameInstanceResponse = models.RenameInstanceResponse;
const DisableSRVConnectionUrlRequest = models.DisableSRVConnectionUrlRequest;
const DescribeAuditConfigRequest = models.DescribeAuditConfigRequest;
const CreateBackupDBInstanceRequest = models.CreateBackupDBInstanceRequest;
const RestoreDatabases = models.RestoreDatabases;
const SetAccountUserPrivilegeRequest = models.SetAccountUserPrivilegeRequest;
const UpgradeDbInstanceVersionResponse = models.UpgradeDbInstanceVersionResponse;
const NodeProperty = models.NodeProperty;
const KillOpsResponse = models.KillOpsResponse;
const IsolateDBInstanceRequest = models.IsolateDBInstanceRequest;
const DescribePasswordRotationRequest = models.DescribePasswordRotationRequest;
const AuditLogFile = models.AuditLogFile;
const EnableTransparentDataEncryptionResponse = models.EnableTransparentDataEncryptionResponse;
const DescribeAuditLogFilesRequest = models.DescribeAuditLogFilesRequest;
const AssignProjectRequest = models.AssignProjectRequest;
const DescribeMongodbLogsRequest = models.DescribeMongodbLogsRequest;
const CreateBackupDownloadTaskResponse = models.CreateBackupDownloadTaskResponse;
const CreateLogDownloadTaskResponse = models.CreateLogDownloadTaskResponse;
const ModifyInstanceParamsRequest = models.ModifyInstanceParamsRequest;
const DescribeAuditConfigResponse = models.DescribeAuditConfigResponse;
const DeleteLogDownloadTaskRequest = models.DeleteLogDownloadTaskRequest;
const SpecificationInfo = models.SpecificationInfo;
const DescribeSlowLogPatternsRequest = models.DescribeSlowLogPatternsRequest;
const RemoveNodeList = models.RemoveNodeList;
const DescribeSpecInfoResponse = models.DescribeSpecInfoResponse;
const InquirePriceRenewDBInstancesResponse = models.InquirePriceRenewDBInstancesResponse;
const TagInfo = models.TagInfo;
const DeleteAccountUserResponse = models.DeleteAccountUserResponse;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const OfflineIsolatedDBInstanceRequest = models.OfflineIsolatedDBInstanceRequest;
const InquirePriceCreateDBInstancesRequest = models.InquirePriceCreateDBInstancesRequest;
const Operation = models.Operation;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const DescribeDBInstanceParamTplResponse = models.DescribeDBInstanceParamTplResponse;
const AuditLog = models.AuditLog;
const DescribeLogDownloadTasksResponse = models.DescribeLogDownloadTasksResponse;
const SlowLogItem = models.SlowLogItem;
const ModifyMongoDBParamType = models.ModifyMongoDBParamType;
const SetInstanceMaintenanceRequest = models.SetInstanceMaintenanceRequest;
const DescribeDBInstanceParamTplDetailRequest = models.DescribeDBInstanceParamTplDetailRequest;
const InstanceDetail = models.InstanceDetail;
const ModifyDBInstanceSpecResponse = models.ModifyDBInstanceSpecResponse;
const RestoreCollection = models.RestoreCollection;
const RestoreDBInstanceRequest = models.RestoreDBInstanceRequest;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const RenewDBInstancesRequest = models.RenewDBInstancesRequest;
const UpgradeDBInstanceKernelVersionRequest = models.UpgradeDBInstanceKernelVersionRequest;
const EnableWanServiceResponse = models.EnableWanServiceResponse;


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
     * This API is used to create a log download task.
     * @param {CreateLogDownloadTaskRequest} req
     * @param {function(string, CreateLogDownloadTaskResponse):void} cb
     * @public
     */
    CreateLogDownloadTask(req, cb) {
        let resp = new CreateLogDownloadTaskResponse();
        this.request("CreateLogDownloadTask", req, resp, cb);
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
     * This API is used to query ALL MongoDB database parameter templates under the current account.
**Description:** The DescribeDBInstanceParamTpl API is in public beta. During this period, this API is only applicable to beta test participants.
     * @param {DescribeDBInstanceParamTplRequest} req
     * @param {function(string, DescribeDBInstanceParamTplResponse):void} cb
     * @public
     */
    DescribeDBInstanceParamTpl(req, cb) {
        let resp = new DescribeDBInstanceParamTplResponse();
        this.request("DescribeDBInstanceParamTpl", req, resp, cb);
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
     * This API is used to query the operation currently being performed on a TencentDB for MongoDB instance.
     * @param {DescribeCurrentOpRequest} req
     * @param {function(string, DescribeCurrentOpResponse):void} cb
     * @public
     */
    DescribeCurrentOp(req, cb) {
        let resp = new DescribeCurrentOpResponse();
        this.request("DescribeCurrentOp", req, resp, cb);
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
     * This API is used to set the account permissions of an instance.
     * @param {SetAccountUserPrivilegeRequest} req
     * @param {function(string, SetAccountUserPrivilegeResponse):void} cb
     * @public
     */
    SetAccountUserPrivilege(req, cb) {
        let resp = new SetAccountUserPrivilegeResponse();
        this.request("SetAccountUserPrivilege", req, resp, cb);
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
     * This API is used to delete a log download task.
     * @param {DeleteLogDownloadTaskRequest} req
     * @param {function(string, DeleteLogDownloadTaskResponse):void} cb
     * @public
     */
    DeleteLogDownloadTask(req, cb) {
        let resp = new DeleteLogDownloadTaskResponse();
        this.request("DeleteLogDownloadTask", req, resp, cb);
    }

    /**
     * This API is used to query the service configurations for a TencentDB audit policy, including the audit log retention period.
     * @param {DescribeAuditConfigRequest} req
     * @param {function(string, DescribeAuditConfigResponse):void} cb
     * @public
     */
    DescribeAuditConfig(req, cb) {
        let resp = new DescribeAuditConfigResponse();
        this.request("DescribeAuditConfig", req, resp, cb);
    }

    /**
     * This API is used to set the SSL status for an instance.
     * @param {InstanceEnableSSLRequest} req
     * @param {function(string, InstanceEnableSSLResponse):void} cb
     * @public
     */
    InstanceEnableSSL(req, cb) {
        let resp = new InstanceEnableSSLResponse();
        this.request("InstanceEnableSSL", req, resp, cb);
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
     * This API is used to query a log download task.
     * @param {DescribeLogDownloadTasksRequest} req
     * @param {function(string, DescribeLogDownloadTasksResponse):void} cb
     * @public
     */
    DescribeLogDownloadTasks(req, cb) {
        let resp = new DescribeLogDownloadTasksResponse();
        this.request("DescribeLogDownloadTasks", req, resp, cb);
    }

    /**
     * This API is used to obtain the automatic backup configuration information of an instance.
     * @param {DescribeBackupRulesRequest} req
     * @param {function(string, DescribeBackupRulesResponse):void} cb
     * @public
     */
    DescribeBackupRules(req, cb) {
        let resp = new DescribeBackupRulesResponse();
        this.request("DescribeBackupRules", req, resp, cb);
    }

    /**
     * This API is used to modify the parameter configuration of a TencentDB for MongoDB instance.
     * @param {ModifyInstanceParamsRequest} req
     * @param {function(string, ModifyInstanceParamsResponse):void} cb
     * @public
     */
    ModifyInstanceParams(req, cb) {
        let resp = new ModifyInstanceParamsResponse();
        this.request("ModifyInstanceParams", req, resp, cb);
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
     * This API is used to customize an account to access the instance.
     * @param {CreateAccountUserRequest} req
     * @param {function(string, CreateAccountUserResponse):void} cb
     * @public
     */
    CreateAccountUser(req, cb) {
        let resp = new CreateAccountUserResponse();
        this.request("CreateAccountUser", req, resp, cb);
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
     * This API is used to query database audit logs.
     * @param {DescribeAuditLogsRequest} req
     * @param {function(string, DescribeAuditLogsResponse):void} cb
     * @public
     */
    DescribeAuditLogs(req, cb) {
        let resp = new DescribeAuditLogsResponse();
        this.request("DescribeAuditLogs", req, resp, cb);
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
     * This API is used to create a parameter template for TencentDB for MongoDB.
**Description:** The CreateDBInstanceParamTpl API is in public beta. During this period, this API is only applicable to beta test participants.
     * @param {CreateDBInstanceParamTplRequest} req
     * @param {function(string, CreateDBInstanceParamTplResponse):void} cb
     * @public
     */
    CreateDBInstanceParamTpl(req, cb) {
        let resp = new CreateDBInstanceParamTplResponse();
        this.request("CreateDBInstanceParamTpl", req, resp, cb);
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
     * This API is used to adjust the TencentDB for MongoDB instance configuration. The [DescribeSpecInfo](https://www.tencentcloud.com/document/product/240/38567?from_cn_redirect=1) API can be called to query and obtain the supported sales specifications.
     * @param {ModifyDBInstanceSpecRequest} req
     * @param {function(string, ModifyDBInstanceSpecResponse):void} cb
     * @public
     */
    ModifyDBInstanceSpec(req, cb) {
        let resp = new ModifyDBInstanceSpecResponse();
        this.request("ModifyDBInstanceSpec", req, resp, cb);
    }

    /**
     * Enable password rotation
     * @param {EnablePasswordRotationRequest} req
     * @param {function(string, EnablePasswordRotationResponse):void} cb
     * @public
     */
    EnablePasswordRotation(req, cb) {
        let resp = new EnablePasswordRotationResponse();
        this.request("EnablePasswordRotation", req, resp, cb);
    }

    /**
     * This API is used to close the audit service.
     * @param {CloseAuditServiceRequest} req
     * @param {function(string, CloseAuditServiceResponse):void} cb
     * @public
     */
    CloseAuditService(req, cb) {
        let resp = new CloseAuditServiceResponse();
        this.request("CloseAuditService", req, resp, cb);
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
     * This API is used to query the current domain information of the MongoDB database.
     * @param {DescribeSRVConnectionDomainRequest} req
     * @param {function(string, DescribeSRVConnectionDomainResponse):void} cb
     * @public
     */
    DescribeSRVConnectionDomain(req, cb) {
        let resp = new DescribeSRVConnectionDomainResponse();
        this.request("DescribeSRVConnectionDomain", req, resp, cb);
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
     * This API is used to upgrade the kernel version of the database instance.
     * @param {UpgradeDBInstanceKernelVersionRequest} req
     * @param {function(string, UpgradeDBInstanceKernelVersionResponse):void} cb
     * @public
     */
    UpgradeDBInstanceKernelVersion(req, cb) {
        let resp = new UpgradeDBInstanceKernelVersionResponse();
        this.request("UpgradeDBInstanceKernelVersion", req, resp, cb);
    }

    /**
     * This API is used to query running logs.
     * @param {DescribeMongodbLogsRequest} req
     * @param {function(string, DescribeMongodbLogsResponse):void} cb
     * @public
     */
    DescribeMongodbLogs(req, cb) {
        let resp = new DescribeMongodbLogsResponse();
        this.request("DescribeMongodbLogs", req, resp, cb);
    }

    /**
     * This API is used to create a yearly/monthly subscription TencentDB for MongoDB instance. The [DescribeSpecInfo](https://www.tencentcloud.com/document/product/240/34701) API can be called to query and obtain the supported sales specifications.
     * @param {CreateDBInstanceRequest} req
     * @param {function(string, CreateDBInstanceResponse):void} cb
     * @public
     */
    CreateDBInstance(req, cb) {
        let resp = new CreateDBInstanceResponse();
        this.request("CreateDBInstance", req, resp, cb);
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
     * This API is used to close the SRV Access Address of the MongoDB database.
     * @param {DisableSRVConnectionUrlRequest} req
     * @param {function(string, DisableSRVConnectionUrlResponse):void} cb
     * @public
     */
    DisableSRVConnectionUrl(req, cb) {
        let resp = new DisableSRVConnectionUrlResponse();
        this.request("DisableSRVConnectionUrl", req, resp, cb);
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
     * This API is used to view the enabling status of Secure Sockets Layer (SSL) for an instance.
     * @param {DescribeInstanceSSLRequest} req
     * @param {function(string, DescribeInstanceSSLResponse):void} cb
     * @public
     */
    DescribeInstanceSSL(req, cb) {
        let resp = new DescribeInstanceSSLResponse();
        this.request("DescribeInstanceSSL", req, resp, cb);
    }

    /**
     * Retrieve the rotation status info
     * @param {DescribePasswordRotationRequest} req
     * @param {function(string, DescribePasswordRotationResponse):void} cb
     * @public
     */
    DescribePasswordRotation(req, cb) {
        let resp = new DescribePasswordRotationResponse();
        this.request("DescribePasswordRotation", req, resp, cb);
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
     * This API is used to adjust the availability zone distribution of MongoDB cloud database nodes. You can specify the primary AZ and total availability zone distribution info to complete node distribution adjustment.
     * @param {ModifyInstanceAzRequest} req
     * @param {function(string, ModifyInstanceAzResponse):void} cb
     * @public
     */
    ModifyInstanceAz(req, cb) {
        let resp = new ModifyInstanceAzResponse();
        this.request("ModifyInstanceAz", req, resp, cb);
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
     * This API is used to enable the public network access address of the current instance.
     * @param {EnableWanServiceRequest} req
     * @param {function(string, EnableWanServiceResponse):void} cb
     * @public
     */
    EnableWanService(req, cb) {
        let resp = new EnableWanServiceResponse();
        this.request("EnableWanService", req, resp, cb);
    }

    /**
     * This API is used to rollback the database instance to a specified time point.
     * @param {RestoreDBInstanceRequest} req
     * @param {function(string, RestoreDBInstanceResponse):void} cb
     * @public
     */
    RestoreDBInstance(req, cb) {
        let resp = new RestoreDBInstanceResponse();
        this.request("RestoreDBInstance", req, resp, cb);
    }

    /**
     * This API is used to upgrade database version.
**Description**: Upgrade to version 3.6 and above is supported. Only upgrading from a lower version to a higher version step by step is allowed. Cross-version upgrade or version downgrade is not supported.
     * @param {UpgradeDbInstanceVersionRequest} req
     * @param {function(string, UpgradeDbInstanceVersionResponse):void} cb
     * @public
     */
    UpgradeDbInstanceVersion(req, cb) {
        let resp = new UpgradeDbInstanceVersionResponse();
        this.request("UpgradeDbInstanceVersion", req, resp, cb);
    }

    /**
     * This API is used to delete full backups.
     * @param {DeleteDBBackupsRequest} req
     * @param {function(string, DeleteDBBackupsResponse):void} cb
     * @public
     */
    DeleteDBBackups(req, cb) {
        let resp = new DeleteDBBackupsResponse();
        this.request("DeleteDBBackups", req, resp, cb);
    }

    /**
     * This API is used to obtain all accounts of the current instance.
     * @param {DescribeAccountUsersRequest} req
     * @param {function(string, DescribeAccountUsersResponse):void} cb
     * @public
     */
    DescribeAccountUsers(req, cb) {
        let resp = new DescribeAccountUsersResponse();
        this.request("DescribeAccountUsers", req, resp, cb);
    }

    /**
     * This API is used to modify the TTL duration of the SRV Access Address for a MongoDB database.
     * @param {ModifySRVConnectionUrlRequest} req
     * @param {function(string, ModifySRVConnectionUrlResponse):void} cb
     * @public
     */
    ModifySRVConnectionUrl(req, cb) {
        let resp = new ModifySRVConnectionUrlResponse();
        this.request("ModifySRVConnectionUrl", req, resp, cb);
    }

    /**
     * This API is used to query audit log files of a cloud database instance.
     * @param {DescribeAuditLogFilesRequest} req
     * @param {function(string, DescribeAuditLogFilesResponse):void} cb
     * @public
     */
    DescribeAuditLogFiles(req, cb) {
        let resp = new DescribeAuditLogFilesResponse();
        this.request("DescribeAuditLogFiles", req, resp, cb);
    }

    /**
     * This API is used to set the instance maintenance window.
     * @param {SetInstanceMaintenanceRequest} req
     * @param {function(string, SetInstanceMaintenanceResponse):void} cb
     * @public
     */
    SetInstanceMaintenance(req, cb) {
        let resp = new SetInstanceMaintenanceResponse();
        this.request("SetInstanceMaintenance", req, resp, cb);
    }

    /**
     * This API is used to enable the SRV Access Address for MongoDB database.
     * @param {EnableSRVConnectionUrlRequest} req
     * @param {function(string, EnableSRVConnectionUrlResponse):void} cb
     * @public
     */
    EnableSRVConnectionUrl(req, cb) {
        let resp = new EnableSRVConnectionUrlResponse();
        this.request("EnableSRVConnectionUrl", req, resp, cb);
    }

    /**
     * This API is used to query parameter template details of a cloud database instance for MongoDB.
**Description:** The DescribeDBInstanceParamTplDetail API is in public beta. During this period, this interface is only applicable to beta test participants.
     * @param {DescribeDBInstanceParamTplDetailRequest} req
     * @param {function(string, DescribeDBInstanceParamTplDetailResponse):void} cb
     * @public
     */
    DescribeDBInstanceParamTplDetail(req, cb) {
        let resp = new DescribeDBInstanceParamTplDetailResponse();
        this.request("DescribeDBInstanceParamTplDetail", req, resp, cb);
    }

    /**
     * This API is used to terminate a specific operation performed on a TencentDB for MongoDB instance.
     * @param {KillOpsRequest} req
     * @param {function(string, KillOpsResponse):void} cb
     * @public
     */
    KillOps(req, cb) {
        let resp = new KillOpsResponse();
        this.request("KillOps", req, resp, cb);
    }

    /**
     * Modify backup expiration time
     * @param {ModifyBackupExpireTimeRequest} req
     * @param {function(string, ModifyBackupExpireTimeResponse):void} cb
     * @public
     */
    ModifyBackupExpireTime(req, cb) {
        let resp = new ModifyBackupExpireTimeResponse();
        this.request("ModifyBackupExpireTime", req, resp, cb);
    }

    /**
     * This API is used to enable the transparent data encryption (TDE) capability for TencentDB for MongoDB.
     * @param {EnableTransparentDataEncryptionRequest} req
     * @param {function(string, EnableTransparentDataEncryptionResponse):void} cb
     * @public
     */
    EnableTransparentDataEncryption(req, cb) {
        let resp = new EnableTransparentDataEncryptionResponse();
        this.request("EnableTransparentDataEncryption", req, resp, cb);
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
     * This API is used to delete a custom account of an instance.
     * @param {DeleteAccountUserRequest} req
     * @param {function(string, DeleteAccountUserResponse):void} cb
     * @public
     */
    DeleteAccountUser(req, cb) {
        let resp = new DeleteAccountUserResponse();
        this.request("DeleteAccountUser", req, resp, cb);
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
