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
const SellType = models.SellType;
const TaskDetail = models.TaskDetail;
const DeviceDiskInfo = models.DeviceDiskInfo;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const CreateDBImportJobRequest = models.CreateDBImportJobRequest;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const DescribeBackupConfigRequest = models.DescribeBackupConfigRequest;
const DescribeRoMinScaleResponse = models.DescribeRoMinScaleResponse;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const StopDBImportJobRequest = models.StopDBImportJobRequest;
const RoWeightValue = models.RoWeightValue;
const DescribeSlowLogDataResponse = models.DescribeSlowLogDataResponse;
const StopDBImportJobResponse = models.StopDBImportJobResponse;
const DescribeDBInstanceInfoResponse = models.DescribeDBInstanceInfoResponse;
const DescribeErrorLogDataRequest = models.DescribeErrorLogDataRequest;
const Parameter = models.Parameter;
const DescribeDBInstanceRebootTimeRequest = models.DescribeDBInstanceRebootTimeRequest;
const DescribeSlowLogsRequest = models.DescribeSlowLogsRequest;
const Inbound = models.Inbound;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const CreateAccountsResponse = models.CreateAccountsResponse;
const RegionSellConf = models.RegionSellConf;
const InstanceRollbackRangeTime = models.InstanceRollbackRangeTime;
const SqlFileInfo = models.SqlFileInfo;
const CreateDeployGroupResponse = models.CreateDeployGroupResponse;
const DescribeTablesResponse = models.DescribeTablesResponse;
const SellConfig = models.SellConfig;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const MasterInfo = models.MasterInfo;
const DescribeBinlogsResponse = models.DescribeBinlogsResponse;
const DeleteParamTemplateResponse = models.DeleteParamTemplateResponse;
const ParamInfo = models.ParamInfo;
const DescribeRoMinScaleRequest = models.DescribeRoMinScaleRequest;
const DescribeDefaultParamsRequest = models.DescribeDefaultParamsRequest;
const DBSwitchInfo = models.DBSwitchInfo;
const ModifyNameOrDescByDpIdResponse = models.ModifyNameOrDescByDpIdResponse;
const InitDBInstancesResponse = models.InitDBInstancesResponse;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DescribeParamTemplatesRequest = models.DescribeParamTemplatesRequest;
const DescribeRollbackRangeTimeRequest = models.DescribeRollbackRangeTimeRequest;
const DescribeBackupOverviewRequest = models.DescribeBackupOverviewRequest;
const DescribeBackupsRequest = models.DescribeBackupsRequest;
const ModifyDBInstanceProjectResponse = models.ModifyDBInstanceProjectResponse;
const DescribeInstanceParamRecordsResponse = models.DescribeInstanceParamRecordsResponse;
const DescribeDBInstanceGTIDResponse = models.DescribeDBInstanceGTIDResponse;
const OpenDBInstanceGTIDResponse = models.OpenDBInstanceGTIDResponse;
const DescribeDBZoneConfigRequest = models.DescribeDBZoneConfigRequest;
const DescribeDBInstanceRebootTimeResponse = models.DescribeDBInstanceRebootTimeResponse;
const DeleteParamTemplateRequest = models.DeleteParamTemplateRequest;
const DrInfo = models.DrInfo;
const RoGroup = models.RoGroup;
const DescribeDataBackupOverviewResponse = models.DescribeDataBackupOverviewResponse;
const ParameterDetail = models.ParameterDetail;
const BackupSummaryItem = models.BackupSummaryItem;
const SwitchForUpgradeRequest = models.SwitchForUpgradeRequest;
const ModifyInstanceTagResponse = models.ModifyInstanceTagResponse;
const CreateParamTemplateResponse = models.CreateParamTemplateResponse;
const CreateDBInstanceHourResponse = models.CreateDBInstanceHourResponse;
const ReleaseIsolatedDBInstancesRequest = models.ReleaseIsolatedDBInstancesRequest;
const BinlogInfo = models.BinlogInfo;
const DeleteDeployGroupsResponse = models.DeleteDeployGroupsResponse;
const DescribeTasksRequest = models.DescribeTasksRequest;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const DescribeErrorLogDataResponse = models.DescribeErrorLogDataResponse;
const AddTimeWindowRequest = models.AddTimeWindowRequest;
const ImportRecord = models.ImportRecord;
const DescribeRollbackTaskDetailResponse = models.DescribeRollbackTaskDetailResponse;
const CreateParamTemplateRequest = models.CreateParamTemplateRequest;
const CreateDBInstanceHourRequest = models.CreateDBInstanceHourRequest;
const DescribeDeployGroupListRequest = models.DescribeDeployGroupListRequest;
const RollbackInstancesInfo = models.RollbackInstancesInfo;
const DescribeParamTemplateInfoRequest = models.DescribeParamTemplateInfoRequest;
const BackupInfo = models.BackupInfo;
const CloseWanServiceResponse = models.CloseWanServiceResponse;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const ModifyDBInstanceVipVportResponse = models.ModifyDBInstanceVipVportResponse;
const DescribeDBSwitchRecordsResponse = models.DescribeDBSwitchRecordsResponse;
const TableName = models.TableName;
const RollbackTableName = models.RollbackTableName;
const DeleteBackupResponse = models.DeleteBackupResponse;
const ModifyInstanceParamRequest = models.ModifyInstanceParamRequest;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const ModifyDBInstanceProjectRequest = models.ModifyDBInstanceProjectRequest;
const DescribeBackupSummariesRequest = models.DescribeBackupSummariesRequest;
const StartBatchRollbackResponse = models.StartBatchRollbackResponse;
const DescribeRoGroupsRequest = models.DescribeRoGroupsRequest;
const DescribeDBSwitchRecordsRequest = models.DescribeDBSwitchRecordsRequest;
const DescribeSupportedPrivilegesRequest = models.DescribeSupportedPrivilegesRequest;
const DescribeAsyncRequestInfoResponse = models.DescribeAsyncRequestInfoResponse;
const ModifyInstanceTagRequest = models.ModifyInstanceTagRequest;
const DescribeDBInstanceCharsetResponse = models.DescribeDBInstanceCharsetResponse;
const DeleteAccountsResponse = models.DeleteAccountsResponse;
const CloseWanServiceRequest = models.CloseWanServiceRequest;
const RestartDBInstancesResponse = models.RestartDBInstancesResponse;
const CreateRoInstanceIpResponse = models.CreateRoInstanceIpResponse;
const DescribeBackupDatabasesResponse = models.DescribeBackupDatabasesResponse;
const DescribeBackupSummariesResponse = models.DescribeBackupSummariesResponse;
const DescribeInstanceParamRecordsRequest = models.DescribeInstanceParamRecordsRequest;
const ParamTemplateInfo = models.ParamTemplateInfo;
const ModifyAutoRenewFlagResponse = models.ModifyAutoRenewFlagResponse;
const DeleteTimeWindowResponse = models.DeleteTimeWindowResponse;
const DescribeBinlogBackupOverviewRequest = models.DescribeBinlogBackupOverviewRequest;
const RollbackTask = models.RollbackTask;
const DescribeBackupsResponse = models.DescribeBackupsResponse;
const DescribeTimeWindowRequest = models.DescribeTimeWindowRequest;
const CreateRoInstanceIpRequest = models.CreateRoInstanceIpRequest;
const ModifyInstanceParamResponse = models.ModifyInstanceParamResponse;
const DescribeDBImportRecordsResponse = models.DescribeDBImportRecordsResponse;
const DescribeTimeWindowResponse = models.DescribeTimeWindowResponse;
const BackupItem = models.BackupItem;
const DatabaseName = models.DatabaseName;
const DescribeBackupConfigResponse = models.DescribeBackupConfigResponse;
const DescribeRollbackTaskDetailRequest = models.DescribeRollbackTaskDetailRequest;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeParamTemplatesResponse = models.DescribeParamTemplatesResponse;
const DescribeBackupTablesResponse = models.DescribeBackupTablesResponse;
const Outbound = models.Outbound;
const SlaveInstanceInfo = models.SlaveInstanceInfo;
const ModifyParamTemplateResponse = models.ModifyParamTemplateResponse;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const StartBatchRollbackRequest = models.StartBatchRollbackRequest;
const SecurityGroup = models.SecurityGroup;
const ZoneConf = models.ZoneConf;
const BalanceRoGroupLoadResponse = models.BalanceRoGroupLoadResponse;
const DeviceNetInfo = models.DeviceNetInfo;
const SlaveInfo = models.SlaveInfo;
const TagInfo = models.TagInfo;
const RollbackTimeRange = models.RollbackTimeRange;
const DescribeSupportedPrivilegesResponse = models.DescribeSupportedPrivilegesResponse;
const OfflineIsolatedInstancesRequest = models.OfflineIsolatedInstancesRequest;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const TagInfoUnit = models.TagInfoUnit;
const OpenDBInstanceGTIDRequest = models.OpenDBInstanceGTIDRequest;
const UpgradeDBInstanceEngineVersionResponse = models.UpgradeDBInstanceEngineVersionResponse;
const DescribeAsyncRequestInfoRequest = models.DescribeAsyncRequestInfoRequest;
const BalanceRoGroupLoadRequest = models.BalanceRoGroupLoadRequest;
const DescribeBackupOverviewResponse = models.DescribeBackupOverviewResponse;
const ColumnPrivilege = models.ColumnPrivilege;
const DescribeUploadedFilesRequest = models.DescribeUploadedFilesRequest;
const ErrlogItem = models.ErrlogItem;
const DescribeDeviceMonitorInfoRequest = models.DescribeDeviceMonitorInfoRequest;
const InitDBInstancesRequest = models.InitDBInstancesRequest;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const TagsInfoOfInstance = models.TagsInfoOfInstance;
const DescribeUploadedFilesResponse = models.DescribeUploadedFilesResponse;
const CreateBackupResponse = models.CreateBackupResponse;
const DescribeDBInstanceConfigResponse = models.DescribeDBInstanceConfigResponse;
const DescribeDefaultParamsResponse = models.DescribeDefaultParamsResponse;
const ModifyAccountPrivilegesResponse = models.ModifyAccountPrivilegesResponse;
const BackupConfig = models.BackupConfig;
const DeviceCpuInfo = models.DeviceCpuInfo;
const DescribeTagsOfInstanceIdsResponse = models.DescribeTagsOfInstanceIdsResponse;
const DescribeDeployGroupListResponse = models.DescribeDeployGroupListResponse;
const DescribeDBInstanceConfigRequest = models.DescribeDBInstanceConfigRequest;
const DescribeBackupTablesRequest = models.DescribeBackupTablesRequest;
const InstanceInfo = models.InstanceInfo;
const OfflineIsolatedInstancesResponse = models.OfflineIsolatedInstancesResponse;
const DatabasePrivilege = models.DatabasePrivilege;
const RoGroupAttr = models.RoGroupAttr;
const ModifyBackupConfigResponse = models.ModifyBackupConfigResponse;
const RoVipInfo = models.RoVipInfo;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const ModifyAccountPasswordRequest = models.ModifyAccountPasswordRequest;
const DescribeTablesRequest = models.DescribeTablesRequest;
const InstanceRebootTime = models.InstanceRebootTime;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const ModifyParamTemplateRequest = models.ModifyParamTemplateRequest;
const AddTimeWindowResponse = models.AddTimeWindowResponse;
const DescribeRoGroupsResponse = models.DescribeRoGroupsResponse;
const ZoneSellConf = models.ZoneSellConf;
const DescribeBinlogBackupOverviewResponse = models.DescribeBinlogBackupOverviewResponse;
const SlaveConfig = models.SlaveConfig;
const RoInstanceInfo = models.RoInstanceInfo;
const CreateAccountsRequest = models.CreateAccountsRequest;
const IsolateDBInstanceRequest = models.IsolateDBInstanceRequest;
const ModifyTimeWindowRequest = models.ModifyTimeWindowRequest;
const DeviceCpuRateInfo = models.DeviceCpuRateInfo;
const ModifyAccountPrivilegesRequest = models.ModifyAccountPrivilegesRequest;
const Account = models.Account;
const CreateBackupRequest = models.CreateBackupRequest;
const ModifyRoGroupInfoResponse = models.ModifyRoGroupInfoResponse;
const CommonTimeWindow = models.CommonTimeWindow;
const AccountInfo = models.AccountInfo;
const DescribeDBInstanceCharsetRequest = models.DescribeDBInstanceCharsetRequest;
const RollbackTables = models.RollbackTables;
const DescribeBackupDatabasesRequest = models.DescribeBackupDatabasesRequest;
const ModifyTimeWindowResponse = models.ModifyTimeWindowResponse;
const DeviceMemInfo = models.DeviceMemInfo;
const ModifyAutoRenewFlagRequest = models.ModifyAutoRenewFlagRequest;
const UpgradeDBInstanceEngineVersionRequest = models.UpgradeDBInstanceEngineVersionRequest;
const DeleteDeployGroupsRequest = models.DeleteDeployGroupsRequest;
const DescribeSlowLogDataRequest = models.DescribeSlowLogDataRequest;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const ModifyDBInstanceVipVportRequest = models.ModifyDBInstanceVipVportRequest;
const DescribeSlowLogsResponse = models.DescribeSlowLogsResponse;
const DescribeDBImportRecordsRequest = models.DescribeDBImportRecordsRequest;
const CreateDBImportJobResponse = models.CreateDBImportJobResponse;
const DescribeTagsOfInstanceIdsRequest = models.DescribeTagsOfInstanceIdsRequest;
const OpenWanServiceRequest = models.OpenWanServiceRequest;
const DeleteTimeWindowRequest = models.DeleteTimeWindowRequest;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const TablePrivilege = models.TablePrivilege;
const SlowLogInfo = models.SlowLogInfo;
const DescribeDataBackupOverviewRequest = models.DescribeDataBackupOverviewRequest;
const DescribeParamTemplateInfoResponse = models.DescribeParamTemplateInfoResponse;
const ParamRecord = models.ParamRecord;
const RestartDBInstancesRequest = models.RestartDBInstancesRequest;
const DescribeDBInstanceInfoRequest = models.DescribeDBInstanceInfoRequest;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const DescribeDBZoneConfigResponse = models.DescribeDBZoneConfigResponse;
const CreateDeployGroupRequest = models.CreateDeployGroupRequest;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const DeleteAccountsRequest = models.DeleteAccountsRequest;
const SwitchForUpgradeResponse = models.SwitchForUpgradeResponse;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const RollbackDBName = models.RollbackDBName;
const DeleteBackupRequest = models.DeleteBackupRequest;
const ModifyNameOrDescByDpIdRequest = models.ModifyNameOrDescByDpIdRequest;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const SlowLogItem = models.SlowLogItem;
const DescribeDeviceMonitorInfoResponse = models.DescribeDeviceMonitorInfoResponse;
const UploadInfo = models.UploadInfo;
const DescribeRollbackRangeTimeResponse = models.DescribeRollbackRangeTimeResponse;
const ModifyRoGroupInfoRequest = models.ModifyRoGroupInfoRequest;
const ReleaseResult = models.ReleaseResult;
const ReleaseIsolatedDBInstancesResponse = models.ReleaseIsolatedDBInstancesResponse;
const OpenWanServiceResponse = models.OpenWanServiceResponse;
const ModifyBackupConfigRequest = models.ModifyBackupConfigRequest;
const ModifyAccountPasswordResponse = models.ModifyAccountPasswordResponse;
const DescribeBinlogsRequest = models.DescribeBinlogsRequest;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const DescribeDBInstanceGTIDRequest = models.DescribeDBInstanceGTIDRequest;
const DeployGroupInfo = models.DeployGroupInfo;


/**
 * cdb client
 * @class
 */
class CdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdb.tencentcloudapi.com", "2017-03-20", credential, region, profile);
    }
    
    /**
     * This API (DescribeDBInstanceGTID) is used to query whether GTID is activated for a TencentDB instance. Instances on or below version 5.5 are not supported.
     * @param {DescribeDBInstanceGTIDRequest} req
     * @param {function(string, DescribeDBInstanceGTIDResponse):void} cb
     * @public
     */
    DescribeDBInstanceGTID(req, cb) {
        let resp = new DescribeDBInstanceGTIDResponse();
        this.request("DescribeDBInstanceGTID", req, resp, cb);
    }

    /**
     * This API is used to create a VIP exclusive to a TencentDB read-only instance.
     * @param {CreateRoInstanceIpRequest} req
     * @param {function(string, CreateRoInstanceIpResponse):void} cb
     * @public
     */
    CreateRoInstanceIp(req, cb) {
        let resp = new CreateRoInstanceIpResponse();
        this.request("CreateRoInstanceIp", req, resp, cb);
    }

    /**
     * This API (DescribeTimeWindow) is used to query the maintenance time window of a TencentDB instance.
     * @param {DescribeTimeWindowRequest} req
     * @param {function(string, DescribeTimeWindowResponse):void} cb
     * @public
     */
    DescribeTimeWindow(req, cb) {
        let resp = new DescribeTimeWindowResponse();
        this.request("DescribeTimeWindow", req, resp, cb);
    }

    /**
     * This API is used to query the data backup overview of a user in the current region.
     * @param {DescribeDataBackupOverviewRequest} req
     * @param {function(string, DescribeDataBackupOverviewResponse):void} cb
     * @public
     */
    DescribeDataBackupOverview(req, cb) {
        let resp = new DescribeDataBackupOverviewResponse();
        this.request("DescribeDataBackupOverview", req, resp, cb);
    }

    /**
     * This API is used to rebalance the loads of instances in an RO group. Please note that the database connections to those instances will be interrupted transiently; therefore, you should ensure that your application can reconnect to the databases. This operation should be performed with caution.
     * @param {BalanceRoGroupLoadRequest} req
     * @param {function(string, BalanceRoGroupLoadResponse):void} cb
     * @public
     */
    BalanceRoGroupLoad(req, cb) {
        let resp = new BalanceRoGroupLoadResponse();
        this.request("BalanceRoGroupLoad", req, resp, cb);
    }

    /**
     * This API is used to isolate a TencentDB instance, which will no longer be accessible via IP and port. The isolated instance can be started up in the recycle bin. If it is isolated due to arrears, please top up your account as soon as possible.
     * @param {IsolateDBInstanceRequest} req
     * @param {function(string, IsolateDBInstanceResponse):void} cb
     * @public
     */
    IsolateDBInstance(req, cb) {
        let resp = new IsolateDBInstanceResponse();
        this.request("IsolateDBInstance", req, resp, cb);
    }

    /**
     * This API (DescribeAccounts) is used to query information of all TencentDB accounts.
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * This API (ModifyInstanceTag) is used to add, modify, or delete an instance tag.
     * @param {ModifyInstanceTagRequest} req
     * @param {function(string, ModifyInstanceTagResponse):void} cb
     * @public
     */
    ModifyInstanceTag(req, cb) {
        let resp = new ModifyInstanceTagResponse();
        this.request("ModifyInstanceTag", req, resp, cb);
    }

    /**
     * This API is used to query the backup overview of a user. It will return the user's current total number of backups, total capacity used by backups, capacity in the free tier, and paid capacity (all capacity values are in bytes).
     * @param {DescribeBackupOverviewRequest} req
     * @param {function(string, DescribeBackupOverviewResponse):void} cb
     * @public
     */
    DescribeBackupOverview(req, cb) {
        let resp = new DescribeBackupOverviewResponse();
        this.request("DescribeBackupOverview", req, resp, cb);
    }

    /**
     * This API (ModifyDBInstanceName) is used to rename a TencentDB instance.
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        let resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }

    /**
     * This API (OfflineIsolatedInstances) is used to deactivate isolated TencentDB instances immediately. The instances must be in isolated status, i.e., their `Status` value is 5 in the return of the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1).

This is an asynchronous API. There may be a delay in repossessing some resources. You can query the details by using the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) and specifying the InstanceId and the `Status` value as [5, 6, 7]. If the returned instance is empty, then all its resources have been released.

Note that once an instance is deactivated, its resources and data will not be recoverable. Please do so with caution.
     * @param {OfflineIsolatedInstancesRequest} req
     * @param {function(string, OfflineIsolatedInstancesResponse):void} cb
     * @public
     */
    OfflineIsolatedInstances(req, cb) {
        let resp = new OfflineIsolatedInstancesResponse();
        this.request("OfflineIsolatedInstances", req, resp, cb);
    }

    /**
     * This API (OpenDBInstanceGTID) is used to enable GTID for a TencentDB instance. Only instances on or above version 5.6 are supported.
     * @param {OpenDBInstanceGTIDRequest} req
     * @param {function(string, OpenDBInstanceGTIDResponse):void} cb
     * @public
     */
    OpenDBInstanceGTID(req, cb) {
        let resp = new OpenDBInstanceGTIDResponse();
        this.request("OpenDBInstanceGTID", req, resp, cb);
    }

    /**
     * This API is used to query the details of a TencentDB instance rollback task.
     * @param {DescribeRollbackTaskDetailRequest} req
     * @param {function(string, DescribeRollbackTaskDetailResponse):void} cb
     * @public
     */
    DescribeRollbackTaskDetail(req, cb) {
        let resp = new DescribeRollbackTaskDetailResponse();
        this.request("DescribeRollbackTaskDetail", req, resp, cb);
    }

    /**
     * This API (ModifyDBInstanceSecurityGroups) is used to modify the security groups bound to a TencentDB instance.
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * This API (DescribeTasks) is used to query the list of tasks for a TencentDB instance.
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * This API (DescribeBackupConfig) is used to query the configuration information of a TencentDB instance backup.
     * @param {DescribeBackupConfigRequest} req
     * @param {function(string, DescribeBackupConfigResponse):void} cb
     * @public
     */
    DescribeBackupConfig(req, cb) {
        let resp = new DescribeBackupConfigResponse();
        this.request("DescribeBackupConfig", req, resp, cb);
    }

    /**
     * This API (CloseWanService) is used to disable public network access for TencentDB instance, which will make public IP addresses inaccessible.
     * @param {CloseWanServiceRequest} req
     * @param {function(string, CloseWanServiceResponse):void} cb
     * @public
     */
    CloseWanService(req, cb) {
        let resp = new CloseWanServiceResponse();
        this.request("CloseWanService", req, resp, cb);
    }

    /**
     * This API (DescribeDefaultParams) is used to query the list of default configurable parameters.
     * @param {DescribeDefaultParamsRequest} req
     * @param {function(string, DescribeDefaultParamsResponse):void} cb
     * @public
     */
    DescribeDefaultParams(req, cb) {
        let resp = new DescribeDefaultParamsResponse();
        this.request("DescribeDefaultParams", req, resp, cb);
    }

    /**
     * This API (DescribeTagsOfInstanceIds) is used to query the tag information of a TencentDB instance.
     * @param {DescribeTagsOfInstanceIdsRequest} req
     * @param {function(string, DescribeTagsOfInstanceIdsResponse):void} cb
     * @public
     */
    DescribeTagsOfInstanceIds(req, cb) {
        let resp = new DescribeTagsOfInstanceIdsResponse();
        this.request("DescribeTagsOfInstanceIds", req, resp, cb);
    }

    /**
     * This API (DescribeDatabases) is used to query the information of databases of a TencentDB instance.
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * This API is used to query the details of instance error logs by search criteria. You can only query error logs within a month.
     * @param {DescribeErrorLogDataRequest} req
     * @param {function(string, DescribeErrorLogDataResponse):void} cb
     * @public
     */
    DescribeErrorLogData(req, cb) {
        let resp = new DescribeErrorLogDataResponse();
        this.request("DescribeErrorLogData", req, resp, cb);
    }

    /**
     * This API (DisassociateSecurityGroups) is used to unbind security groups from instances in batches.
     * @param {DisassociateSecurityGroupsRequest} req
     * @param {function(string, DisassociateSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateSecurityGroups(req, cb) {
        let resp = new DisassociateSecurityGroupsResponse();
        this.request("DisassociateSecurityGroups", req, resp, cb);
    }

    /**
     * This API (DescribeTables) is used to query the database tables of a TencentDB instance.
     * @param {DescribeTablesRequest} req
     * @param {function(string, DescribeTablesResponse):void} cb
     * @public
     */
    DescribeTables(req, cb) {
        let resp = new DescribeTablesResponse();
        this.request("DescribeTables", req, resp, cb);
    }

    /**
     * This API (DescribeAccountPrivileges) is used to query the information of TencentDB account permissions.
     * @param {DescribeAccountPrivilegesRequest} req
     * @param {function(string, DescribeAccountPrivilegesResponse):void} cb
     * @public
     */
    DescribeAccountPrivileges(req, cb) {
        let resp = new DescribeAccountPrivilegesResponse();
        this.request("DescribeAccountPrivileges", req, resp, cb);
    }

    /**
     * This API is used to deisolate an isolated TencentDB instance.
     * @param {ReleaseIsolatedDBInstancesRequest} req
     * @param {function(string, ReleaseIsolatedDBInstancesResponse):void} cb
     * @public
     */
    ReleaseIsolatedDBInstances(req, cb) {
        let resp = new ReleaseIsolatedDBInstancesResponse();
        this.request("ReleaseIsolatedDBInstances", req, resp, cb);
    }

    /**
     * This API (ModifyTimeWindow) is used to update the maintenance time window of a TencentDB instance.
     * @param {ModifyTimeWindowRequest} req
     * @param {function(string, ModifyTimeWindowResponse):void} cb
     * @public
     */
    ModifyTimeWindow(req, cb) {
        let resp = new ModifyTimeWindowResponse();
        this.request("ModifyTimeWindow", req, resp, cb);
    }

    /**
     * This API is used to delete placement groups by placement group ID (a placement group cannot be deleted if it contains resources).
     * @param {DeleteDeployGroupsRequest} req
     * @param {function(string, DeleteDeployGroupsResponse):void} cb
     * @public
     */
    DeleteDeployGroups(req, cb) {
        let resp = new DeleteDeployGroupsResponse();
        this.request("DeleteDeployGroups", req, resp, cb);
    }

    /**
     * This API (SwitchForUpgrade) is used to switch to a new instance. You can initiate this process when the primary instance being upgraded is pending switch.
     * @param {SwitchForUpgradeRequest} req
     * @param {function(string, SwitchForUpgradeResponse):void} cb
     * @public
     */
    SwitchForUpgrade(req, cb) {
        let resp = new SwitchForUpgradeResponse();
        this.request("SwitchForUpgrade", req, resp, cb);
    }

    /**
     * This API (DeleteParamTemplate) is used to delete a parameter template.
     * @param {DeleteParamTemplateRequest} req
     * @param {function(string, DeleteParamTemplateResponse):void} cb
     * @public
     */
    DeleteParamTemplate(req, cb) {
        let resp = new DeleteParamTemplateResponse();
        this.request("DeleteParamTemplate", req, resp, cb);
    }

    /**
     * This API (DescribeBackups) is used to query the backups of a TencentDB instance.
     * @param {DescribeBackupsRequest} req
     * @param {function(string, DescribeBackupsResponse):void} cb
     * @public
     */
    DescribeBackups(req, cb) {
        let resp = new DescribeBackupsResponse();
        this.request("DescribeBackups", req, resp, cb);
    }

    /**
     * This API (CreateParamTemplate) is used to create a parameter template.
     * @param {CreateParamTemplateRequest} req
     * @param {function(string, CreateParamTemplateResponse):void} cb
     * @public
     */
    CreateParamTemplate(req, cb) {
        let resp = new CreateParamTemplateResponse();
        this.request("CreateParamTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a pay-as-you-go TencentDB instance (which can be a primary, disaster recovery, or read-only instance) by passing in information such as instance specifications, MySQL version number, and quantity.

This is an async API. You can also use the [DescribeDBInstances](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) API to query the instance details. If the `Status` value of an instance is 1 and `TaskStatus` is 0, the instance has been successfully delivered.

1. Please use the [DescribeDBZoneConfig](https://intl.cloud.tencent.com/document/api/236/17229?from_cn_redirect=1) API to query the supported instance specifications first and then use the [DescribeDBPrice](https://intl.cloud.tencent.com/document/api/236/18566?from_cn_redirect=1) API to query the prices of the supported instances;
2. You can create up to 100 instances at a time, with an instance validity period of up to 36 months;
3. MySQL v5.5, v5.6, and v5.7 are supported;
4. primary instances, read-only instances, and disaster recovery instances can be created;
5. If `Port`, `ParamList`, or `Password` is set in the input parameters, the instance will be initialized.
     * @param {CreateDBInstanceHourRequest} req
     * @param {function(string, CreateDBInstanceHourResponse):void} cb
     * @public
     */
    CreateDBInstanceHour(req, cb) {
        let resp = new CreateDBInstanceHourResponse();
        this.request("CreateDBInstanceHour", req, resp, cb);
    }

    /**
     * This API (AddTimeWindow) is used to add a maintenance time window for a TencentDB instance, so as to specify when the instance can automatically perform access switch operations.
     * @param {AddTimeWindowRequest} req
     * @param {function(string, AddTimeWindowResponse):void} cb
     * @public
     */
    AddTimeWindow(req, cb) {
        let resp = new AddTimeWindowResponse();
        this.request("AddTimeWindow", req, resp, cb);
    }

    /**
     * This API (CreateBackup) is used to create a TencentDB instance backup.
     * @param {CreateBackupRequest} req
     * @param {function(string, CreateBackupResponse):void} cb
     * @public
     */
    CreateBackup(req, cb) {
        let resp = new CreateBackupResponse();
        this.request("CreateBackup", req, resp, cb);
    }

    /**
     * This API (ModifyDBInstanceVipVport) is used to modify the IP and port number of a TencentDB instance, switch from the basic network to VPC, or change VPC subnets.
     * @param {ModifyDBInstanceVipVportRequest} req
     * @param {function(string, ModifyDBInstanceVipVportResponse):void} cb
     * @public
     */
    ModifyDBInstanceVipVport(req, cb) {
        let resp = new ModifyDBInstanceVipVportResponse();
        this.request("ModifyDBInstanceVipVport", req, resp, cb);
    }

    /**
     * This API (DescribeDBInstanceConfig) is used to query the configuration information of a TencentDB instance, such as its synchronization mode and deployment mode.
     * @param {DescribeDBInstanceConfigRequest} req
     * @param {function(string, DescribeDBInstanceConfigResponse):void} cb
     * @public
     */
    DescribeDBInstanceConfig(req, cb) {
        let resp = new DescribeDBInstanceConfigResponse();
        this.request("DescribeDBInstanceConfig", req, resp, cb);
    }

    /**
     * This API is used to query the backup tables of the specified database. It has been disused.
After the legacy version becomes capable of full backup, if you want to download logical backup files by table, you need to use this API.
The new API (CreateBackup) can specify the table to be backed up when a logical backup file is created, which can be downloaded directly.
     * @param {DescribeBackupTablesRequest} req
     * @param {function(string, DescribeBackupTablesResponse):void} cb
     * @public
     */
    DescribeBackupTables(req, cb) {
        let resp = new DescribeBackupTablesResponse();
        this.request("DescribeBackupTables", req, resp, cb);
    }

    /**
     * This API (DescribeProjectSecurityGroups) is used to query the security group details of a project.
     * @param {DescribeProjectSecurityGroupsRequest} req
     * @param {function(string, DescribeProjectSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroups(req, cb) {
        let resp = new DescribeProjectSecurityGroupsResponse();
        this.request("DescribeProjectSecurityGroups", req, resp, cb);
    }

    /**
     * This API (DescribeSlowLogs) is used to query the slow logs of a TencentDB instance.
     * @param {DescribeSlowLogsRequest} req
     * @param {function(string, DescribeSlowLogsResponse):void} cb
     * @public
     */
    DescribeSlowLogs(req, cb) {
        let resp = new DescribeSlowLogsResponse();
        this.request("DescribeSlowLogs", req, resp, cb);
    }

    /**
     * This API (ModifyParamTemplate) is used to modify a parameter template.
     * @param {ModifyParamTemplateRequest} req
     * @param {function(string, ModifyParamTemplateResponse):void} cb
     * @public
     */
    ModifyParamTemplate(req, cb) {
        let resp = new ModifyParamTemplateResponse();
        this.request("ModifyParamTemplate", req, resp, cb);
    }

    /**
     * This API (DescribeInstanceParams) is used to query the list of parameters for an instance.
     * @param {DescribeInstanceParamsRequest} req
     * @param {function(string, DescribeInstanceParamsResponse):void} cb
     * @public
     */
    DescribeInstanceParams(req, cb) {
        let resp = new DescribeInstanceParamsResponse();
        this.request("DescribeInstanceParams", req, resp, cb);
    }

    /**
     * This API is used to query the list of placement groups of a user. You can specify the placement group ID or name.
     * @param {DescribeDeployGroupListRequest} req
     * @param {function(string, DescribeDeployGroupListResponse):void} cb
     * @public
     */
    DescribeDeployGroupList(req, cb) {
        let resp = new DescribeDeployGroupListResponse();
        this.request("DescribeDeployGroupList", req, resp, cb);
    }

    /**
     * This API (StopDBImportJob) is used to stop a data import task.
     * @param {StopDBImportJobRequest} req
     * @param {function(string, StopDBImportJobResponse):void} cb
     * @public
     */
    StopDBImportJob(req, cb) {
        let resp = new StopDBImportJobResponse();
        this.request("StopDBImportJob", req, resp, cb);
    }

    /**
     * This API (CreateAccounts) is used to create TencentDB accounts. The new account names, domain names, and passwords need to be specified, and account remarks can also be added.
     * @param {CreateAccountsRequest} req
     * @param {function(string, CreateAccountsResponse):void} cb
     * @public
     */
    CreateAccounts(req, cb) {
        let resp = new CreateAccountsResponse();
        this.request("CreateAccounts", req, resp, cb);
    }

    /**
     * This API (UpgradeDBInstanceEngineVersion) is used to upgrade the version of a TencentDB instance, which can be a primary instance, disaster recovery instance, or read-only instance.
     * @param {UpgradeDBInstanceEngineVersionRequest} req
     * @param {function(string, UpgradeDBInstanceEngineVersionResponse):void} cb
     * @public
     */
    UpgradeDBInstanceEngineVersion(req, cb) {
        let resp = new UpgradeDBInstanceEngineVersionResponse();
        this.request("UpgradeDBInstanceEngineVersion", req, resp, cb);
    }

    /**
     * This API (DescribeInstanceParamRecords) is used to query the parameter modification records of an instance.
     * @param {DescribeInstanceParamRecordsRequest} req
     * @param {function(string, DescribeInstanceParamRecordsResponse):void} cb
     * @public
     */
    DescribeInstanceParamRecords(req, cb) {
        let resp = new DescribeInstanceParamRecordsResponse();
        this.request("DescribeInstanceParamRecords", req, resp, cb);
    }

    /**
     * This API is used to query the statistics of backups. It will return the capacity used by backups at the instance level and the number and used capacity of data backups and log backups of each instance (all capacity values are in bytes).
     * @param {DescribeBackupSummariesRequest} req
     * @param {function(string, DescribeBackupSummariesResponse):void} cb
     * @public
     */
    DescribeBackupSummaries(req, cb) {
        let resp = new DescribeBackupSummariesResponse();
        this.request("DescribeBackupSummaries", req, resp, cb);
    }

    /**
     * This API (DescribeParamTemplateInfo) is used to query parameter template details.
     * @param {DescribeParamTemplateInfoRequest} req
     * @param {function(string, DescribeParamTemplateInfoResponse):void} cb
     * @public
     */
    DescribeParamTemplateInfo(req, cb) {
        let resp = new DescribeParamTemplateInfoResponse();
        this.request("DescribeParamTemplateInfo", req, resp, cb);
    }

    /**
     * This API is used to query the log backup overview of a user in the current region.
     * @param {DescribeBinlogBackupOverviewRequest} req
     * @param {function(string, DescribeBinlogBackupOverviewResponse):void} cb
     * @public
     */
    DescribeBinlogBackupOverview(req, cb) {
        let resp = new DescribeBinlogBackupOverviewResponse();
        this.request("DescribeBinlogBackupOverview", req, resp, cb);
    }

    /**
     * This API (DeleteAccounts) is used to delete TencentDB accounts.
     * @param {DeleteAccountsRequest} req
     * @param {function(string, DeleteAccountsResponse):void} cb
     * @public
     */
    DeleteAccounts(req, cb) {
        let resp = new DeleteAccountsResponse();
        this.request("DeleteAccounts", req, resp, cb);
    }

    /**
     * This API is used to query the basic information of an instance (instance ID, instance name, and whether encryption is enabled).
     * @param {DescribeDBInstanceInfoRequest} req
     * @param {function(string, DescribeDBInstanceInfoResponse):void} cb
     * @public
     */
    DescribeDBInstanceInfo(req, cb) {
        let resp = new DescribeDBInstanceInfoResponse();
        this.request("DescribeDBInstanceInfo", req, resp, cb);
    }

    /**
     * This API (DescribeRollbackRangeTime) is used to query the time range available for instance rollback.
     * @param {DescribeRollbackRangeTimeRequest} req
     * @param {function(string, DescribeRollbackRangeTimeResponse):void} cb
     * @public
     */
    DescribeRollbackRangeTime(req, cb) {
        let resp = new DescribeRollbackRangeTimeResponse();
        this.request("DescribeRollbackRangeTime", req, resp, cb);
    }

    /**
     * This API (DescribeParamTemplates) is used to query the list of parameter templates
     * @param {DescribeParamTemplatesRequest} req
     * @param {function(string, DescribeParamTemplatesResponse):void} cb
     * @public
     */
    DescribeParamTemplates(req, cb) {
        let resp = new DescribeParamTemplatesResponse();
        this.request("DescribeParamTemplates", req, resp, cb);
    }

    /**
     * This API is used to delete a database backup. It can only delete manually initiated backups.
     * @param {DeleteBackupRequest} req
     * @param {function(string, DeleteBackupResponse):void} cb
     * @public
     */
    DeleteBackup(req, cb) {
        let resp = new DeleteBackupResponse();
        this.request("DeleteBackup", req, resp, cb);
    }

    /**
     * This API is used to query the minimum specification of a read-only instance that can be purchased or upgraded to.
     * @param {DescribeRoMinScaleRequest} req
     * @param {function(string, DescribeRoMinScaleResponse):void} cb
     * @public
     */
    DescribeRoMinScale(req, cb) {
        let resp = new DescribeRoMinScaleResponse();
        this.request("DescribeRoMinScale", req, resp, cb);
    }

    /**
     * This API (ModifyInstanceParam) is used to modify instance parameters.
     * @param {ModifyInstanceParamRequest} req
     * @param {function(string, ModifyInstanceParamResponse):void} cb
     * @public
     */
    ModifyInstanceParam(req, cb) {
        let resp = new ModifyInstanceParamResponse();
        this.request("ModifyInstanceParam", req, resp, cb);
    }

    /**
     * This API (DescribeAsyncRequestInfo) is used to query the async task execution result of a TencentDB instance.
     * @param {DescribeAsyncRequestInfoRequest} req
     * @param {function(string, DescribeAsyncRequestInfoResponse):void} cb
     * @public
     */
    DescribeAsyncRequestInfo(req, cb) {
        let resp = new DescribeAsyncRequestInfoResponse();
        this.request("DescribeAsyncRequestInfo", req, resp, cb);
    }

    /**
     * This API (DescribeDBZoneConfig) is used to query the specifications of TencentDB instances purchasable in a region.
     * @param {DescribeDBZoneConfigRequest} req
     * @param {function(string, DescribeDBZoneConfigResponse):void} cb
     * @public
     */
    DescribeDBZoneConfig(req, cb) {
        let resp = new DescribeDBZoneConfigResponse();
        this.request("DescribeDBZoneConfig", req, resp, cb);
    }

    /**
     * This API (DescribeDBInstanceRebootTime) is used to query the estimated time needed for a TencentDB instance to restart.
     * @param {DescribeDBInstanceRebootTimeRequest} req
     * @param {function(string, DescribeDBInstanceRebootTimeResponse):void} cb
     * @public
     */
    DescribeDBInstanceRebootTime(req, cb) {
        let resp = new DescribeDBInstanceRebootTimeResponse();
        this.request("DescribeDBInstanceRebootTime", req, resp, cb);
    }

    /**
     * This API (DescribeDBInstances) is used to query the list of TencentDB instances (which can be primary, disaster recovery, or read-only instances). It supports filtering instances by project ID, instance ID, access address, and instance status.
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * This API is used to update the information of a TencentDB RO group, such as configuring an instance removal policy in case of excessive delay and setting read weights of RO instances.
     * @param {ModifyRoGroupInfoRequest} req
     * @param {function(string, ModifyRoGroupInfoResponse):void} cb
     * @public
     */
    ModifyRoGroupInfo(req, cb) {
        let resp = new ModifyRoGroupInfoResponse();
        this.request("ModifyRoGroupInfo", req, resp, cb);
    }

    /**
     * This API (DescribeDBInstanceCharset) is used to query the character set and its name of a TencentDB instance.
     * @param {DescribeDBInstanceCharsetRequest} req
     * @param {function(string, DescribeDBInstanceCharsetResponse):void} cb
     * @public
     */
    DescribeDBInstanceCharset(req, cb) {
        let resp = new DescribeDBInstanceCharsetResponse();
        this.request("DescribeDBInstanceCharset", req, resp, cb);
    }

    /**
     * This API (AssociateSecurityGroups) is used to bind security groups to instances in batches.
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        let resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }

    /**
     * This API (InitDBInstances) is used to initialize instances, including their password, default character set, and instance port number.
     * @param {InitDBInstancesRequest} req
     * @param {function(string, InitDBInstancesResponse):void} cb
     * @public
     */
    InitDBInstances(req, cb) {
        let resp = new InitDBInstancesResponse();
        this.request("InitDBInstances", req, resp, cb);
    }

    /**
     * This API is used to modify the permissions of a TencentDB instance account.

Note that when modifying account permissions, you need to pass in the full permission information of the account. You can [query the account permission information
](https://intl.cloud.tencent.com/document/api/236/17500?from_cn_redirect=1) first before modifying permissions.
     * @param {ModifyAccountPrivilegesRequest} req
     * @param {function(string, ModifyAccountPrivilegesResponse):void} cb
     * @public
     */
    ModifyAccountPrivileges(req, cb) {
        let resp = new ModifyAccountPrivilegesResponse();
        this.request("ModifyAccountPrivileges", req, resp, cb);
    }

    /**
     * This API (DescribeDBImportRecords) is used to query the records of import tasks in a TencentDB instance.
     * @param {DescribeDBImportRecordsRequest} req
     * @param {function(string, DescribeDBImportRecordsResponse):void} cb
     * @public
     */
    DescribeDBImportRecords(req, cb) {
        let resp = new DescribeDBImportRecordsResponse();
        this.request("DescribeDBImportRecords", req, resp, cb);
    }

    /**
     * This API (DescribeDBSwitchRecords) is used to query the instance switch records.
     * @param {DescribeDBSwitchRecordsRequest} req
     * @param {function(string, DescribeDBSwitchRecordsResponse):void} cb
     * @public
     */
    DescribeDBSwitchRecords(req, cb) {
        let resp = new DescribeDBSwitchRecordsResponse();
        this.request("DescribeDBSwitchRecords", req, resp, cb);
    }

    /**
     * This API (CreateDBImportJob) is used to create a data import task for a TencentDB instance.

Note that the files for a data import task must be uploaded to Tencent Cloud in advance. You need to do so in the console.
     * @param {CreateDBImportJobRequest} req
     * @param {function(string, CreateDBImportJobResponse):void} cb
     * @public
     */
    CreateDBImportJob(req, cb) {
        let resp = new CreateDBImportJobResponse();
        this.request("CreateDBImportJob", req, resp, cb);
    }

    /**
     * This API (RestartDBInstances) is used to restart TencentDB instances.

Note:
1. This API only supports restarting primary instances.
2. The instance status must be normal, and no other async tasks are in progress.
     * @param {RestartDBInstancesRequest} req
     * @param {function(string, RestartDBInstancesResponse):void} cb
     * @public
     */
    RestartDBInstances(req, cb) {
        let resp = new RestartDBInstancesResponse();
        this.request("RestartDBInstances", req, resp, cb);
    }

    /**
     * This API (ModifyAccountPassword) is used to modify the password of a TencentDB instance account.
     * @param {ModifyAccountPasswordRequest} req
     * @param {function(string, ModifyAccountPasswordResponse):void} cb
     * @public
     */
    ModifyAccountPassword(req, cb) {
        let resp = new ModifyAccountPasswordResponse();
        this.request("ModifyAccountPassword", req, resp, cb);
    }

    /**
     * This API is used to query the list of user-imported SQL files.
     * @param {DescribeUploadedFilesRequest} req
     * @param {function(string, DescribeUploadedFilesResponse):void} cb
     * @public
     */
    DescribeUploadedFiles(req, cb) {
        let resp = new DescribeUploadedFilesResponse();
        this.request("DescribeUploadedFiles", req, resp, cb);
    }

    /**
     * This API (ModifyAccountDescription) is used to modify the remarks of a TencentDB instance account.
     * @param {ModifyAccountDescriptionRequest} req
     * @param {function(string, ModifyAccountDescriptionResponse):void} cb
     * @public
     */
    ModifyAccountDescription(req, cb) {
        let resp = new ModifyAccountDescriptionResponse();
        this.request("ModifyAccountDescription", req, resp, cb);
    }

    /**
     * This API is used to search for slow logs of an instance by criteria. You can only view slow logs within a month.
     * @param {DescribeSlowLogDataRequest} req
     * @param {function(string, DescribeSlowLogDataResponse):void} cb
     * @public
     */
    DescribeSlowLogData(req, cb) {
        let resp = new DescribeSlowLogDataResponse();
        this.request("DescribeSlowLogData", req, resp, cb);
    }

    /**
     * This API (ModifyBackupConfig) is used to modify the database backup configuration.
     * @param {ModifyBackupConfigRequest} req
     * @param {function(string, ModifyBackupConfigResponse):void} cb
     * @public
     */
    ModifyBackupConfig(req, cb) {
        let resp = new ModifyBackupConfigResponse();
        this.request("ModifyBackupConfig", req, resp, cb);
    }

    /**
     * This API (ModifyDBInstanceProject) is used to modify the project to which a TencentDB instance belongs.
     * @param {ModifyDBInstanceProjectRequest} req
     * @param {function(string, ModifyDBInstanceProjectResponse):void} cb
     * @public
     */
    ModifyDBInstanceProject(req, cb) {
        let resp = new ModifyDBInstanceProjectResponse();
        this.request("ModifyDBInstanceProject", req, resp, cb);
    }

    /**
     * This API is used to query the databases contained in a backup file. It has been disused.
After the legacy version becomes capable of full backup, if you want to download logical backup files by table, you need to use this API.
The new API (CreateBackup) can specify the table to be backed up when a logical backup file is created, which can be downloaded directly.
     * @param {DescribeBackupDatabasesRequest} req
     * @param {function(string, DescribeBackupDatabasesResponse):void} cb
     * @public
     */
    DescribeBackupDatabases(req, cb) {
        let resp = new DescribeBackupDatabasesResponse();
        this.request("DescribeBackupDatabases", req, resp, cb);
    }

    /**
     * This API is used to modify the auto-renewal flag of a TencentDB instance.
     * @param {ModifyAutoRenewFlagRequest} req
     * @param {function(string, ModifyAutoRenewFlagResponse):void} cb
     * @public
     */
    ModifyAutoRenewFlag(req, cb) {
        let resp = new ModifyAutoRenewFlagResponse();
        this.request("ModifyAutoRenewFlag", req, resp, cb);
    }

    /**
     * This API (StartBatchRollback) is used to roll back the tables of a TencentDB instance in batches.
     * @param {StartBatchRollbackRequest} req
     * @param {function(string, StartBatchRollbackResponse):void} cb
     * @public
     */
    StartBatchRollback(req, cb) {
        let resp = new StartBatchRollbackResponse();
        this.request("StartBatchRollback", req, resp, cb);
    }

    /**
     * This API (DescribeDeviceMonitorInfo) is used to query the monitoring information of a TencentDB physical machine on the day. Currently, it only supports instances with 488 GB memory and 6 TB disk.
     * @param {DescribeDeviceMonitorInfoRequest} req
     * @param {function(string, DescribeDeviceMonitorInfoResponse):void} cb
     * @public
     */
    DescribeDeviceMonitorInfo(req, cb) {
        let resp = new DescribeDeviceMonitorInfoResponse();
        this.request("DescribeDeviceMonitorInfo", req, resp, cb);
    }

    /**
     * This API (OpenWanService) is used to enable public network access for an instance.

Note that before enabling public network access, you need to first [initialize the instance](https://intl.cloud.tencent.com/document/api/236/15873?from_cn_redirect=1).
     * @param {OpenWanServiceRequest} req
     * @param {function(string, OpenWanServiceResponse):void} cb
     * @public
     */
    OpenWanService(req, cb) {
        let resp = new OpenWanServiceResponse();
        this.request("OpenWanService", req, resp, cb);
    }

    /**
     * This API (DescribeSupportedPrivileges) is used to query the information of TencentDB account permissions, including global permissions, database permissions, table permissions, and column permissions.
     * @param {DescribeSupportedPrivilegesRequest} req
     * @param {function(string, DescribeSupportedPrivilegesResponse):void} cb
     * @public
     */
    DescribeSupportedPrivileges(req, cb) {
        let resp = new DescribeSupportedPrivilegesResponse();
        this.request("DescribeSupportedPrivileges", req, resp, cb);
    }

    /**
     * This API is used to query the list of binlog files of a TencentDB instance.
     * @param {DescribeBinlogsRequest} req
     * @param {function(string, DescribeBinlogsResponse):void} cb
     * @public
     */
    DescribeBinlogs(req, cb) {
        let resp = new DescribeBinlogsResponse();
        this.request("DescribeBinlogs", req, resp, cb);
    }

    /**
     * This API (DescribeDBSecurityGroups) is used to query the security group details of an instance.
     * @param {DescribeDBSecurityGroupsRequest} req
     * @param {function(string, DescribeDBSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBSecurityGroups(req, cb) {
        let resp = new DescribeDBSecurityGroupsResponse();
        this.request("DescribeDBSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to query the information of all RO groups of a TencentDB instance.
     * @param {DescribeRoGroupsRequest} req
     * @param {function(string, DescribeRoGroupsResponse):void} cb
     * @public
     */
    DescribeRoGroups(req, cb) {
        let resp = new DescribeRoGroupsResponse();
        this.request("DescribeRoGroups", req, resp, cb);
    }

    /**
     * This API is used to modify the name or description of a placement group.
     * @param {ModifyNameOrDescByDpIdRequest} req
     * @param {function(string, ModifyNameOrDescByDpIdResponse):void} cb
     * @public
     */
    ModifyNameOrDescByDpId(req, cb) {
        let resp = new ModifyNameOrDescByDpIdResponse();
        this.request("ModifyNameOrDescByDpId", req, resp, cb);
    }

    /**
     * This API is used to upgrade or downgrade a TencentDB instance, which can be a primary instance, disaster recovery instance, or read-only instance.
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req, cb) {
        let resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
    }

    /**
     * This API is used to create a placement group for placing instances.
     * @param {CreateDeployGroupRequest} req
     * @param {function(string, CreateDeployGroupResponse):void} cb
     * @public
     */
    CreateDeployGroup(req, cb) {
        let resp = new CreateDeployGroupResponse();
        this.request("CreateDeployGroup", req, resp, cb);
    }

    /**
     * This API (DeleteTimeWindow) is used to delete a maintenance time window for a TencentDB instance. After it is deleted, the default maintenance time window will be 03:00-04:00, i.e., switch to a new instance will be performed during 03:00-04:00 by default.
     * @param {DeleteTimeWindowRequest} req
     * @param {function(string, DeleteTimeWindowResponse):void} cb
     * @public
     */
    DeleteTimeWindow(req, cb) {
        let resp = new DeleteTimeWindowResponse();
        this.request("DeleteTimeWindow", req, resp, cb);
    }


}
module.exports = CdbClient;
