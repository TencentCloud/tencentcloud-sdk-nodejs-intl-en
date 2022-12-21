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
const ModifyInstanceTagResponse = models.ModifyInstanceTagResponse;
const ModifyDBInstanceProjectResponse = models.ModifyDBInstanceProjectResponse;
const DescribeProxyConnectionPoolConfRequest = models.DescribeProxyConnectionPoolConfRequest;
const DeviceDiskInfo = models.DeviceDiskInfo;
const CdbZoneSellConf = models.CdbZoneSellConf;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const CreateDBImportJobRequest = models.CreateDBImportJobRequest;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const DescribeBackupConfigRequest = models.DescribeBackupConfigRequest;
const ParamRecord = models.ParamRecord;
const ModifyAccountMaxUserConnectionsResponse = models.ModifyAccountMaxUserConnectionsResponse;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const StopDBImportJobRequest = models.StopDBImportJobRequest;
const DescribeUploadedFilesResponse = models.DescribeUploadedFilesResponse;
const DescribeSlowLogDataResponse = models.DescribeSlowLogDataResponse;
const StopDBImportJobResponse = models.StopDBImportJobResponse;
const DescribeDBInstanceInfoResponse = models.DescribeDBInstanceInfoResponse;
const SlaveInstanceInfo = models.SlaveInstanceInfo;
const DescribeErrorLogDataRequest = models.DescribeErrorLogDataRequest;
const Parameter = models.Parameter;
const DescribeDBInstanceRebootTimeRequest = models.DescribeDBInstanceRebootTimeRequest;
const TaskDetail = models.TaskDetail;
const DescribeSlowLogsRequest = models.DescribeSlowLogsRequest;
const Inbound = models.Inbound;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const TagInfoItem = models.TagInfoItem;
const CreateAccountsResponse = models.CreateAccountsResponse;
const SwitchDBInstanceMasterSlaveResponse = models.SwitchDBInstanceMasterSlaveResponse;
const InstanceRollbackRangeTime = models.InstanceRollbackRangeTime;
const SqlFileInfo = models.SqlFileInfo;
const CdbSellType = models.CdbSellType;
const DescribeProxyCustomConfRequest = models.DescribeProxyCustomConfRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const MasterInfo = models.MasterInfo;
const DescribeBinlogsResponse = models.DescribeBinlogsResponse;
const StopReplicationResponse = models.StopReplicationResponse;
const ResetRootAccountResponse = models.ResetRootAccountResponse;
const DeleteParamTemplateResponse = models.DeleteParamTemplateResponse;
const ProxyNodeInfo = models.ProxyNodeInfo;
const DescribeRoMinScaleRequest = models.DescribeRoMinScaleRequest;
const DescribeDefaultParamsRequest = models.DescribeDefaultParamsRequest;
const RoGroupAttr = models.RoGroupAttr;
const DBSwitchInfo = models.DBSwitchInfo;
const StartReplicationResponse = models.StartReplicationResponse;
const ModifyNameOrDescByDpIdResponse = models.ModifyNameOrDescByDpIdResponse;
const DescribeDBPriceResponse = models.DescribeDBPriceResponse;
const CloseCDBProxyResponse = models.CloseCDBProxyResponse;
const ReleaseIsolatedDBInstancesResponse = models.ReleaseIsolatedDBInstancesResponse;
const CustomConfig = models.CustomConfig;
const ConnectionPoolInfo = models.ConnectionPoolInfo;
const DescribeBackupOverviewRequest = models.DescribeBackupOverviewRequest;
const DescribeBackupsRequest = models.DescribeBackupsRequest;
const DescribeAuditPoliciesResponse = models.DescribeAuditPoliciesResponse;
const DescribeInstanceParamRecordsResponse = models.DescribeInstanceParamRecordsResponse;
const DescribeDBInstanceGTIDResponse = models.DescribeDBInstanceGTIDResponse;
const OpenDBInstanceGTIDResponse = models.OpenDBInstanceGTIDResponse;
const DescribeDBInstanceRebootTimeResponse = models.DescribeDBInstanceRebootTimeResponse;
const SwitchDrInstanceToMasterRequest = models.SwitchDrInstanceToMasterRequest;
const DeleteParamTemplateRequest = models.DeleteParamTemplateRequest;
const DrInfo = models.DrInfo;
const RoGroup = models.RoGroup;
const DescribeDataBackupOverviewResponse = models.DescribeDataBackupOverviewResponse;
const ParameterDetail = models.ParameterDetail;
const SwitchCDBProxyResponse = models.SwitchCDBProxyResponse;
const BackupSummaryItem = models.BackupSummaryItem;
const SwitchForUpgradeRequest = models.SwitchForUpgradeRequest;
const ModifyBackupDownloadRestrictionRequest = models.ModifyBackupDownloadRestrictionRequest;
const CreateParamTemplateResponse = models.CreateParamTemplateResponse;
const CreateDBInstanceHourResponse = models.CreateDBInstanceHourResponse;
const DescribeCloneListResponse = models.DescribeCloneListResponse;
const ModifyAccountMaxUserConnectionsRequest = models.ModifyAccountMaxUserConnectionsRequest;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const ReleaseIsolatedDBInstancesRequest = models.ReleaseIsolatedDBInstancesRequest;
const ProxyGroup = models.ProxyGroup;
const BinlogInfo = models.BinlogInfo;
const CloneItem = models.CloneItem;
const DescribeTasksRequest = models.DescribeTasksRequest;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const SlaveConfig = models.SlaveConfig;
const DescribeErrorLogDataResponse = models.DescribeErrorLogDataResponse;
const AddTimeWindowRequest = models.AddTimeWindowRequest;
const ModifyCDBProxyDescResponse = models.ModifyCDBProxyDescResponse;
const ImportRecord = models.ImportRecord;
const OfflineIsolatedInstancesRequest = models.OfflineIsolatedInstancesRequest;
const DescribeRollbackTaskDetailResponse = models.DescribeRollbackTaskDetailResponse;
const CreateParamTemplateRequest = models.CreateParamTemplateRequest;
const CreateDBInstanceHourRequest = models.CreateDBInstanceHourRequest;
const RemoteBackupInfo = models.RemoteBackupInfo;
const RWInstanceInfo = models.RWInstanceInfo;
const DescribeSlowLogsResponse = models.DescribeSlowLogsResponse;
const RollbackInstancesInfo = models.RollbackInstancesInfo;
const ReloadBalanceProxyNodeRequest = models.ReloadBalanceProxyNodeRequest;
const DescribeCloneListRequest = models.DescribeCloneListRequest;
const BackupInfo = models.BackupInfo;
const CloseWanServiceResponse = models.CloseWanServiceResponse;
const CreateCloneInstanceRequest = models.CreateCloneInstanceRequest;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const ModifyDBInstanceVipVportResponse = models.ModifyDBInstanceVipVportResponse;
const CloseCDBProxyRequest = models.CloseCDBProxyRequest;
const DescribeDBSwitchRecordsResponse = models.DescribeDBSwitchRecordsResponse;
const ModifyCDBProxyConnectionPoolResponse = models.ModifyCDBProxyConnectionPoolResponse;
const SlowLogInfo = models.SlowLogInfo;
const RollbackTableName = models.RollbackTableName;
const DeleteBackupResponse = models.DeleteBackupResponse;
const ModifyInstanceParamRequest = models.ModifyInstanceParamRequest;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const CdbRegionSellConf = models.CdbRegionSellConf;
const UploadInfo = models.UploadInfo;
const ModifyLocalBinlogConfigResponse = models.ModifyLocalBinlogConfigResponse;
const DescribeBackupSummariesRequest = models.DescribeBackupSummariesRequest;
const StartBatchRollbackResponse = models.StartBatchRollbackResponse;
const DescribeRoGroupsRequest = models.DescribeRoGroupsRequest;
const DescribeDBSwitchRecordsRequest = models.DescribeDBSwitchRecordsRequest;
const DescribeSupportedPrivilegesRequest = models.DescribeSupportedPrivilegesRequest;
const DescribeAsyncRequestInfoResponse = models.DescribeAsyncRequestInfoResponse;
const ModifyInstanceTagRequest = models.ModifyInstanceTagRequest;
const DescribeDBInstanceCharsetResponse = models.DescribeDBInstanceCharsetResponse;
const DeleteAccountsResponse = models.DeleteAccountsResponse;
const OpenAuditServiceResponse = models.OpenAuditServiceResponse;
const CloseWanServiceRequest = models.CloseWanServiceRequest;
const RestartDBInstancesResponse = models.RestartDBInstancesResponse;
const CreateRoInstanceIpResponse = models.CreateRoInstanceIpResponse;
const CreateAuditPolicyResponse = models.CreateAuditPolicyResponse;
const SwitchForUpgradeResponse = models.SwitchForUpgradeResponse;
const DescribeBackupSummariesResponse = models.DescribeBackupSummariesResponse;
const DescribeInstanceParamRecordsRequest = models.DescribeInstanceParamRecordsRequest;
const SwitchDBInstanceMasterSlaveRequest = models.SwitchDBInstanceMasterSlaveRequest;
const StopRollbackResponse = models.StopRollbackResponse;
const ParamTemplateInfo = models.ParamTemplateInfo;
const ModifyAutoRenewFlagResponse = models.ModifyAutoRenewFlagResponse;
const DeleteTimeWindowResponse = models.DeleteTimeWindowResponse;
const RollbackTables = models.RollbackTables;
const DescribeBinlogBackupOverviewRequest = models.DescribeBinlogBackupOverviewRequest;
const RollbackTask = models.RollbackTask;
const StartReplicationRequest = models.StartReplicationRequest;
const DescribeBackupsResponse = models.DescribeBackupsResponse;
const ReloadBalanceProxyNodeResponse = models.ReloadBalanceProxyNodeResponse;
const CreateAuditPolicyRequest = models.CreateAuditPolicyRequest;
const CreateRoInstanceIpRequest = models.CreateRoInstanceIpRequest;
const ModifyInstanceParamResponse = models.ModifyInstanceParamResponse;
const DescribeDBImportRecordsResponse = models.DescribeDBImportRecordsResponse;
const DescribeTimeWindowResponse = models.DescribeTimeWindowResponse;
const OpenAuditServiceRequest = models.OpenAuditServiceRequest;
const BackupItem = models.BackupItem;
const ModifyCDBProxyVipVPortRequest = models.ModifyCDBProxyVipVPortRequest;
const DescribeCDBProxyRequest = models.DescribeCDBProxyRequest;
const DescribeBackupConfigResponse = models.DescribeBackupConfigResponse;
const DescribeRollbackTaskDetailRequest = models.DescribeRollbackTaskDetailRequest;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeParamTemplatesResponse = models.DescribeParamTemplatesResponse;
const DescribeRoMinScaleResponse = models.DescribeRoMinScaleResponse;
const Outbound = models.Outbound;
const CdbSellConfig = models.CdbSellConfig;
const RoWeightValue = models.RoWeightValue;
const ModifyParamTemplateResponse = models.ModifyParamTemplateResponse;
const ParamInfo = models.ParamInfo;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const RoInstanceInfo = models.RoInstanceInfo;
const SecurityGroup = models.SecurityGroup;
const StopReplicationRequest = models.StopReplicationRequest;
const BalanceRoGroupLoadResponse = models.BalanceRoGroupLoadResponse;
const DeviceNetInfo = models.DeviceNetInfo;
const DescribeProxyConnectionPoolConfResponse = models.DescribeProxyConnectionPoolConfResponse;
const TagInfo = models.TagInfo;
const ModifyCDBProxyVipVPortResponse = models.ModifyCDBProxyVipVPortResponse;
const DescribeSupportedPrivilegesResponse = models.DescribeSupportedPrivilegesResponse;
const CreateCloneInstanceResponse = models.CreateCloneInstanceResponse;
const DescribeCdbZoneConfigRequest = models.DescribeCdbZoneConfigRequest;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const TagInfoUnit = models.TagInfoUnit;
const OpenDBInstanceGTIDRequest = models.OpenDBInstanceGTIDRequest;
const UpgradeDBInstanceEngineVersionResponse = models.UpgradeDBInstanceEngineVersionResponse;
const ModifyLocalBinlogConfigRequest = models.ModifyLocalBinlogConfigRequest;
const DescribeAsyncRequestInfoRequest = models.DescribeAsyncRequestInfoRequest;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const TablePrivilege = models.TablePrivilege;
const BalanceRoGroupLoadRequest = models.BalanceRoGroupLoadRequest;
const QueryCDBProxyRequest = models.QueryCDBProxyRequest;
const DescribeAuditRulesRequest = models.DescribeAuditRulesRequest;
const ModifyNameOrDescByDpIdRequest = models.ModifyNameOrDescByDpIdRequest;
const DescribeBackupOverviewResponse = models.DescribeBackupOverviewResponse;
const ColumnPrivilege = models.ColumnPrivilege;
const DescribeUploadedFilesRequest = models.DescribeUploadedFilesRequest;
const ErrlogItem = models.ErrlogItem;
const DescribeTablesResponse = models.DescribeTablesResponse;
const DescribeDeviceMonitorInfoRequest = models.DescribeDeviceMonitorInfoRequest;
const DescribeDBPriceRequest = models.DescribeDBPriceRequest;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const QueryCDBProxyResponse = models.QueryCDBProxyResponse;
const DescribeLocalBinlogConfigRequest = models.DescribeLocalBinlogConfigRequest;
const CreateBackupResponse = models.CreateBackupResponse;
const ModifyCDBProxyDescRequest = models.ModifyCDBProxyDescRequest;
const RWInfos = models.RWInfos;
const DescribeDBInstanceConfigResponse = models.DescribeDBInstanceConfigResponse;
const DescribeDefaultParamsResponse = models.DescribeDefaultParamsResponse;
const ModifyAccountPrivilegesResponse = models.ModifyAccountPrivilegesResponse;
const SwitchCDBProxyRequest = models.SwitchCDBProxyRequest;
const BackupConfig = models.BackupConfig;
const DescribeLocalBinlogConfigResponse = models.DescribeLocalBinlogConfigResponse;
const DescribeCDBProxyResponse = models.DescribeCDBProxyResponse;
const TagsInfoOfInstance = models.TagsInfoOfInstance;
const UpgradeCDBProxyResponse = models.UpgradeCDBProxyResponse;
const ResetRootAccountRequest = models.ResetRootAccountRequest;
const DeviceCpuInfo = models.DeviceCpuInfo;
const AuditPolicy = models.AuditPolicy;
const ModifyRoGroupInfoResponse = models.ModifyRoGroupInfoResponse;
const DescribeDBInstanceConfigRequest = models.DescribeDBInstanceConfigRequest;
const CdbZoneDataResult = models.CdbZoneDataResult;
const InstanceInfo = models.InstanceInfo;
const OfflineIsolatedInstancesResponse = models.OfflineIsolatedInstancesResponse;
const DatabasePrivilege = models.DatabasePrivilege;
const SlaveInfo = models.SlaveInfo;
const UpgradeCDBProxyVersionRequest = models.UpgradeCDBProxyVersionRequest;
const DescribeProxyCustomConfResponse = models.DescribeProxyCustomConfResponse;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const UpgradeCDBProxyVersionResponse = models.UpgradeCDBProxyVersionResponse;
const RoVipInfo = models.RoVipInfo;
const DescribeCdbZoneConfigResponse = models.DescribeCdbZoneConfigResponse;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const DescribeBackupDownloadRestrictionResponse = models.DescribeBackupDownloadRestrictionResponse;
const ModifyAccountPasswordRequest = models.ModifyAccountPasswordRequest;
const PoolConf = models.PoolConf;
const DescribeAuditPoliciesRequest = models.DescribeAuditPoliciesRequest;
const DescribeTablesRequest = models.DescribeTablesRequest;
const InstanceRebootTime = models.InstanceRebootTime;
const ModifyInstancePasswordComplexityRequest = models.ModifyInstancePasswordComplexityRequest;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const ModifyParamTemplateRequest = models.ModifyParamTemplateRequest;
const AddTimeWindowResponse = models.AddTimeWindowResponse;
const DescribeRoGroupsResponse = models.DescribeRoGroupsResponse;
const DescribeAuditRulesResponse = models.DescribeAuditRulesResponse;
const BaseGroupInfo = models.BaseGroupInfo;
const DescribeBinlogBackupOverviewResponse = models.DescribeBinlogBackupOverviewResponse;
const ModifyCDBProxyConnectionPoolRequest = models.ModifyCDBProxyConnectionPoolRequest;
const ModifyTimeWindowResponse = models.ModifyTimeWindowResponse;
const InitDBInstancesRequest = models.InitDBInstancesRequest;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const CreateAccountsRequest = models.CreateAccountsRequest;
const IsolateDBInstanceRequest = models.IsolateDBInstanceRequest;
const ModifyBackupDownloadRestrictionResponse = models.ModifyBackupDownloadRestrictionResponse;
const ModifyTimeWindowRequest = models.ModifyTimeWindowRequest;
const DeviceCpuRateInfo = models.DeviceCpuRateInfo;
const ModifyAccountPrivilegesRequest = models.ModifyAccountPrivilegesRequest;
const Account = models.Account;
const CreateBackupRequest = models.CreateBackupRequest;
const CommonTimeWindow = models.CommonTimeWindow;
const AccountInfo = models.AccountInfo;
const DescribeDBInstanceCharsetRequest = models.DescribeDBInstanceCharsetRequest;
const DescribeTimeWindowRequest = models.DescribeTimeWindowRequest;
const ModifyInstancePasswordComplexityResponse = models.ModifyInstancePasswordComplexityResponse;
const LocalBinlogConfigDefault = models.LocalBinlogConfigDefault;
const DeviceMemInfo = models.DeviceMemInfo;
const ModifyAutoRenewFlagRequest = models.ModifyAutoRenewFlagRequest;
const StartBatchRollbackRequest = models.StartBatchRollbackRequest;
const UpgradeDBInstanceEngineVersionRequest = models.UpgradeDBInstanceEngineVersionRequest;
const ModifyBackupConfigRequest = models.ModifyBackupConfigRequest;
const DescribeSlowLogDataRequest = models.DescribeSlowLogDataRequest;
const DatabasesWithCharacterLists = models.DatabasesWithCharacterLists;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const ModifyDBInstanceVipVportRequest = models.ModifyDBInstanceVipVportRequest;
const ModifyBackupConfigResponse = models.ModifyBackupConfigResponse;
const DescribeDBImportRecordsRequest = models.DescribeDBImportRecordsRequest;
const CreateDBImportJobResponse = models.CreateDBImportJobResponse;
const DescribeTagsOfInstanceIdsRequest = models.DescribeTagsOfInstanceIdsRequest;
const RWInfo = models.RWInfo;
const OpenWanServiceRequest = models.OpenWanServiceRequest;
const DeleteTimeWindowRequest = models.DeleteTimeWindowRequest;
const Address = models.Address;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const DescribeParamTemplateInfoRequest = models.DescribeParamTemplateInfoRequest;
const DescribeBackupDownloadRestrictionRequest = models.DescribeBackupDownloadRestrictionRequest;
const InitDBInstancesResponse = models.InitDBInstancesResponse;
const DescribeDataBackupOverviewRequest = models.DescribeDataBackupOverviewRequest;
const DescribeParamTemplateInfoResponse = models.DescribeParamTemplateInfoResponse;
const DescribeTasksResponse = models.DescribeTasksResponse;
const RestartDBInstancesRequest = models.RestartDBInstancesRequest;
const DescribeDBInstanceInfoRequest = models.DescribeDBInstanceInfoRequest;
const BackupLimitVpcItem = models.BackupLimitVpcItem;
const ModifyDBInstanceProjectRequest = models.ModifyDBInstanceProjectRequest;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const DeleteAccountsRequest = models.DeleteAccountsRequest;
const SwitchDrInstanceToMasterResponse = models.SwitchDrInstanceToMasterResponse;
const ZoneConf = models.ZoneConf;
const AuditFilter = models.AuditFilter;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const Rule = models.Rule;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const RollbackTimeRange = models.RollbackTimeRange;
const StopRollbackRequest = models.StopRollbackRequest;
const DeleteBackupRequest = models.DeleteBackupRequest;
const DescribeParamTemplatesRequest = models.DescribeParamTemplatesRequest;
const UpgradeCDBProxyRequest = models.UpgradeCDBProxyRequest;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const SlowLogItem = models.SlowLogItem;
const DescribeDeviceMonitorInfoResponse = models.DescribeDeviceMonitorInfoResponse;
const DescribeRollbackRangeTimeResponse = models.DescribeRollbackRangeTimeResponse;
const ModifyRoGroupInfoRequest = models.ModifyRoGroupInfoRequest;
const DescribeRollbackRangeTimeRequest = models.DescribeRollbackRangeTimeRequest;
const ReleaseResult = models.ReleaseResult;
const ProxyGroups = models.ProxyGroups;
const OpenWanServiceResponse = models.OpenWanServiceResponse;
const DescribeTagsOfInstanceIdsResponse = models.DescribeTagsOfInstanceIdsResponse;
const ModifyAccountPasswordResponse = models.ModifyAccountPasswordResponse;
const AuditRule = models.AuditRule;
const DescribeBinlogsRequest = models.DescribeBinlogsRequest;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const DescribeDBInstanceGTIDRequest = models.DescribeDBInstanceGTIDRequest;
const RollbackDBName = models.RollbackDBName;
const LocalBinlogConfig = models.LocalBinlogConfig;
const Tag = models.Tag;


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
     * This API is used to create an audit policy for a TencentDB instance by associating an audit rule with the TencentDB instance.
     * @param {CreateAuditPolicyRequest} req
     * @param {function(string, CreateAuditPolicyResponse):void} cb
     * @public
     */
    CreateAuditPolicy(req, cb) {
        let resp = new CreateAuditPolicyResponse();
        this.request("CreateAuditPolicy", req, resp, cb);
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
     * This API is used to stop the data replication from the source instance to the read-only instance.
     * @param {StopReplicationRequest} req
     * @param {function(string, StopReplicationResponse):void} cb
     * @public
     */
    StopReplication(req, cb) {
        let resp = new StopReplicationResponse();
        this.request("StopReplication", req, resp, cb);
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
     * This API is used to query the purchasable specifications of TencentDB instances in a region.
     * @param {DescribeCdbZoneConfigRequest} req
     * @param {function(string, DescribeCdbZoneConfigResponse):void} cb
     * @public
     */
    DescribeCdbZoneConfig(req, cb) {
        let resp = new DescribeCdbZoneConfigResponse();
        this.request("DescribeCdbZoneConfig", req, resp, cb);
    }

    /**
     * This API is used to cancel a rollback task in progress, and returns an async task ID. You can use the `DescribeAsyncRequestInfo` API to query the result of cancellation.
     * @param {StopRollbackRequest} req
     * @param {function(string, StopRollbackResponse):void} cb
     * @public
     */
    StopRollback(req, cb) {
        let resp = new StopRollbackResponse();
        this.request("StopRollback", req, resp, cb);
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
     * This API is used to modify the description of database proxy.
     * @param {ModifyCDBProxyDescRequest} req
     * @param {function(string, ModifyCDBProxyDescResponse):void} cb
     * @public
     */
    ModifyCDBProxyDesc(req, cb) {
        let resp = new ModifyCDBProxyDescResponse();
        this.request("ModifyCDBProxyDesc", req, resp, cb);
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
     * This API is used to modify the restrictions of downloading backups in a region. You can specify which types of networks (private, or both private and public), VPCs, and IPs to download backups.
     * @param {ModifyBackupDownloadRestrictionRequest} req
     * @param {function(string, ModifyBackupDownloadRestrictionResponse):void} cb
     * @public
     */
    ModifyBackupDownloadRestriction(req, cb) {
        let resp = new ModifyBackupDownloadRestrictionResponse();
        this.request("ModifyBackupDownloadRestriction", req, resp, cb);
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
     * This API is used to query the audit policies of a TencentDB instance.
     * @param {DescribeAuditPoliciesRequest} req
     * @param {function(string, DescribeAuditPoliciesResponse):void} cb
     * @public
     */
    DescribeAuditPolicies(req, cb) {
        let resp = new DescribeAuditPoliciesResponse();
        this.request("DescribeAuditPolicies", req, resp, cb);
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
     * This API is used to query the information of databases in a TencentDB instance which must be a source or disaster recovery instance.
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * This API is used to query the error logs of an instance over the past month by search criteria.
Note: the HTTP response packet will be very large if it contain a single large error log, which causes the API call to time out. If this happens, we recommend you lower the value of the input parameter `Limit` to reduce the packet size so that the API can respond timely.
     * @param {DescribeErrorLogDataRequest} req
     * @param {function(string, DescribeErrorLogDataResponse):void} cb
     * @public
     */
    DescribeErrorLogData(req, cb) {
        let resp = new DescribeErrorLogDataResponse();
        this.request("DescribeErrorLogData", req, resp, cb);
    }

    /**
     * This API is used for source-to-replica switch.
     * @param {SwitchDBInstanceMasterSlaveRequest} req
     * @param {function(string, SwitchDBInstanceMasterSlaveResponse):void} cb
     * @public
     */
    SwitchDBInstanceMasterSlave(req, cb) {
        let resp = new SwitchDBInstanceMasterSlaveResponse();
        this.request("SwitchDBInstanceMasterSlave", req, resp, cb);
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
     * This API is used to query the information of database tables in a TencentDB instance. It only supports source or disaster recovery instances.
     * @param {DescribeTablesRequest} req
     * @param {function(string, DescribeTablesResponse):void} cb
     * @public
     */
    DescribeTables(req, cb) {
        let resp = new DescribeTablesResponse();
        this.request("DescribeTables", req, resp, cb);
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
     * This API is used to create a clone of a specific instance, and roll back the clone by using a physical backup file of the instance or roll back the clone to a point in time.
     * @param {CreateCloneInstanceRequest} req
     * @param {function(string, CreateCloneInstanceResponse):void} cb
     * @public
     */
    CreateCloneInstance(req, cb) {
        let resp = new CreateCloneInstanceResponse();
        this.request("CreateCloneInstance", req, resp, cb);
    }

    /**
     * This API is used to modify the password complexity of a TencentDB instance.
     * @param {ModifyInstancePasswordComplexityRequest} req
     * @param {function(string, ModifyInstancePasswordComplexityResponse):void} cb
     * @public
     */
    ModifyInstancePasswordComplexity(req, cb) {
        let resp = new ModifyInstancePasswordComplexityResponse();
        this.request("ModifyInstancePasswordComplexity", req, resp, cb);
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
     * This API is used to query the proxy details.
     * @param {QueryCDBProxyRequest} req
     * @param {function(string, QueryCDBProxyResponse):void} cb
     * @public
     */
    QueryCDBProxy(req, cb) {
        let resp = new QueryCDBProxyResponse();
        this.request("QueryCDBProxy", req, resp, cb);
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
     * This API is used to delete a parameter template. The common request parameter `Region` can only be set to `ap-guangzhou`.
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
     * This API is used to create a parameter template. The common request parameter `Region` can only be set to `ap-guangzhou`.
     * @param {CreateParamTemplateRequest} req
     * @param {function(string, CreateParamTemplateResponse):void} cb
     * @public
     */
    CreateParamTemplate(req, cb) {
        let resp = new CreateParamTemplateResponse();
        this.request("CreateParamTemplate", req, resp, cb);
    }

    /**
     * This API is used to create pay-as-you-go TencentDB instances (which can be source instances, disaster recovery instances, or read-only replicas) by passing in information such as instance specifications, MySQL version number, and instance quantity.

This is an asynchronous API. You can also use the [DescribeDBInstances](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) API to query instance details. If the output parameter `Status` is `1` and the output parameter `TaskStatus` is `0`, the instances have been successfully delivered.

1. Use the [DescribeDBZoneConfig](https://intl.cloud.tencent.com/document/api/236/17229?from_cn_redirect=1) API to query the purchasable instance specifications, and then use the [DescribeDBPrice](https://intl.cloud.tencent.com/document/api/236/18566?from_cn_redirect=1) API to query the prices of the purchasable instances;
2. You can create up to 100 instances at a time, with an instance validity period of up to 36 months;
3. MySQL v5.5, v5.6, v5.7, and v8.0 are supported;
4. Source instances, disaster recovery instances, and read-only replicas can be created;
5. If `Port`, `ParamList`, or `Password` is specified in the input parameters, the instance (excluding basic instances) will be initialized.
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
     * This API is used to modify the IP and port number of a TencentDB instance, switch from classic network to VPC, or change VPC subnets.
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
     * This API is used to modify the retention policy of local binlog of an instance.
     * @param {ModifyLocalBinlogConfigRequest} req
     * @param {function(string, ModifyLocalBinlogConfigResponse):void} cb
     * @public
     */
    ModifyLocalBinlogConfig(req, cb) {
        let resp = new ModifyLocalBinlogConfigResponse();
        this.request("ModifyLocalBinlogConfig", req, resp, cb);
    }

    /**
     * This API is used to configure the connection pool of database proxy. You can use the `DescribeProxyConnectionPoolConf` API to query the supported connection pool configurations.
     * @param {ModifyCDBProxyConnectionPoolRequest} req
     * @param {function(string, ModifyCDBProxyConnectionPoolResponse):void} cb
     * @public
     */
    ModifyCDBProxyConnectionPool(req, cb) {
        let resp = new ModifyCDBProxyConnectionPoolResponse();
        this.request("ModifyCDBProxyConnectionPool", req, resp, cb);
    }

    /**
     * This API is used to modify a parameter template. The common request parameter `Region` can only be set to `ap-guangzhou`.
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
     * This API is used to query the proxy configuration.
     * @param {DescribeProxyCustomConfRequest} req
     * @param {function(string, DescribeProxyCustomConfResponse):void} cb
     * @public
     */
    DescribeProxyCustomConf(req, cb) {
        let resp = new DescribeProxyCustomConfResponse();
        this.request("DescribeProxyCustomConf", req, resp, cb);
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
     * This API is used to create a TencentDB account. The account name, host address, and password are required. Account remarks and maximum connections can also be configured.
     * @param {CreateAccountsRequest} req
     * @param {function(string, CreateAccountsResponse):void} cb
     * @public
     */
    CreateAccounts(req, cb) {
        let resp = new CreateAccountsResponse();
        this.request("CreateAccounts", req, resp, cb);
    }

    /**
     * This API is used to upgrade the configuration of database proxy.
     * @param {UpgradeCDBProxyRequest} req
     * @param {function(string, UpgradeCDBProxyResponse):void} cb
     * @public
     */
    UpgradeCDBProxy(req, cb) {
        let resp = new UpgradeCDBProxyResponse();
        this.request("UpgradeCDBProxy", req, resp, cb);
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
     * This API is used to query parameter template details. The common request parameter `Region` can only be set to `ap-guangzhou`.
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
     * This API is used to promote a disaster recovery instance to source instance. The request parameter `Region` must be the region of the disaster recovery instance.
     * @param {SwitchDrInstanceToMasterRequest} req
     * @param {function(string, SwitchDrInstanceToMasterResponse):void} cb
     * @public
     */
    SwitchDrInstanceToMaster(req, cb) {
        let resp = new SwitchDrInstanceToMasterResponse();
        this.request("SwitchDrInstanceToMaster", req, resp, cb);
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
     * This API is used to query the parameter template list. The common request parameter `Region` can only be set to `ap-guangzhou`.
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
     * This API is used to modify the VIP or port of database proxy.
     * @param {ModifyCDBProxyVipVPortRequest} req
     * @param {function(string, ModifyCDBProxyVipVPortResponse):void} cb
     * @public
     */
    ModifyCDBProxyVipVPort(req, cb) {
        let resp = new ModifyCDBProxyVipVPortResponse();
        this.request("ModifyCDBProxyVipVPort", req, resp, cb);
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
     * This API is used to start the data replication from the source instance to the read-only instance.
     * @param {StartReplicationRequest} req
     * @param {function(string, StartReplicationResponse):void} cb
     * @public
     */
    StartReplication(req, cb) {
        let resp = new StartReplicationResponse();
        this.request("StartReplication", req, resp, cb);
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
     * This API is used to disable database proxy.
     * @param {CloseCDBProxyRequest} req
     * @param {function(string, CloseCDBProxyResponse):void} cb
     * @public
     */
    CloseCDBProxy(req, cb) {
        let resp = new CloseCDBProxyResponse();
        this.request("CloseCDBProxy", req, resp, cb);
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
     * This API is used to update the information of a TencentDB RO group, such as configuring a read-only instance removal policy in case of excessive delay, setting read weights of read-only instances, and setting the replication delay.
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
     * This API is used to initialize a TencentDB instance, including initial password, default character set, and instance port number. But it is disused and not recommended. You can now set the instance information by using the parameter `Password`, `ParamList`, and `Port` respectively in the `CreateDBInstance` and `CreateDBInstanceHour` APIs.
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
     * This API is used to query information of all TencentDB accounts.
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * This API is used to rebalance the load on database proxy.
     * @param {ReloadBalanceProxyNodeRequest} req
     * @param {function(string, ReloadBalanceProxyNodeResponse):void} cb
     * @public
     */
    ReloadBalanceProxyNode(req, cb) {
        let resp = new ReloadBalanceProxyNodeResponse();
        this.request("ReloadBalanceProxyNode", req, resp, cb);
    }

    /**
     * This API is used to query the restrictions of downloading backups in a region.
     * @param {DescribeBackupDownloadRestrictionRequest} req
     * @param {function(string, DescribeBackupDownloadRestrictionResponse):void} cb
     * @public
     */
    DescribeBackupDownloadRestriction(req, cb) {
        let resp = new DescribeBackupDownloadRestrictionResponse();
        this.request("DescribeBackupDownloadRestriction", req, resp, cb);
    }

    /**
     * This API is used to reset the root account and initialize the account permissions.
     * @param {ResetRootAccountRequest} req
     * @param {function(string, ResetRootAccountResponse):void} cb
     * @public
     */
    ResetRootAccount(req, cb) {
        let resp = new ResetRootAccountResponse();
        this.request("ResetRootAccount", req, resp, cb);
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
     * This API is used to query the list of SQL files imported by users. The common request parameter `Region` must be `ap-shanghai`.
     * @param {DescribeUploadedFilesRequest} req
     * @param {function(string, DescribeUploadedFilesResponse):void} cb
     * @public
     */
    DescribeUploadedFiles(req, cb) {
        let resp = new DescribeUploadedFilesResponse();
        this.request("DescribeUploadedFiles", req, resp, cb);
    }

    /**
     * This API is used to query database proxy. It will be deprecated and replaced by the `QueryCDBProxy` API.
     * @param {DescribeCDBProxyRequest} req
     * @param {function(string, DescribeCDBProxyResponse):void} cb
     * @public
     */
    DescribeCDBProxy(req, cb) {
        let resp = new DescribeCDBProxyResponse();
        this.request("DescribeCDBProxy", req, resp, cb);
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
     * This API is used to query the slow logs of an instance over the past month by search criteria.
Note: the HTTP response packet will be very large if it contain a single large slow log, which causes the API call to time out. If this happens, we recommend you lower the value of the input parameter `Limit` to reduce the packet size so that the API can respond timely.
     * @param {DescribeSlowLogDataRequest} req
     * @param {function(string, DescribeSlowLogDataResponse):void} cb
     * @public
     */
    DescribeSlowLogData(req, cb) {
        let resp = new DescribeSlowLogDataResponse();
        this.request("DescribeSlowLogData", req, resp, cb);
    }

    /**
     * This API is used to enable the audit service.
     * @param {OpenAuditServiceRequest} req
     * @param {function(string, OpenAuditServiceResponse):void} cb
     * @public
     */
    OpenAuditService(req, cb) {
        let resp = new OpenAuditServiceResponse();
        this.request("OpenAuditService", req, resp, cb);
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
     * This API is used to query the audit rules in the current region.
     * @param {DescribeAuditRulesRequest} req
     * @param {function(string, DescribeAuditRulesResponse):void} cb
     * @public
     */
    DescribeAuditRules(req, cb) {
        let resp = new DescribeAuditRulesResponse();
        this.request("DescribeAuditRules", req, resp, cb);
    }

    /**
     * This API is used to query the purchase or renewal price of a pay-as-you-go or monthly subscribed TencentDB instance by passing in information such as instance type, purchase duration, number of instances to purchase, memory size, disk size, and AZ. For the price of instance renewal, you can pass in instance name to query.

Note: To query prices in a specific region, you need to use the access point of the region. For more information on access points, see <a href="https://www.tencentcloud.com/document/product/236/15832">Service Address</a>. For example, to query prices in Guangzhou, send a request to: cdb.ap-guangzhou.tencentcloudapi.com. Likewise, to query prices in Shanghai, send a request to: cdb.ap-shanghai.tencentcloudapi.com.
     * @param {DescribeDBPriceRequest} req
     * @param {function(string, DescribeDBPriceResponse):void} cb
     * @public
     */
    DescribeDBPrice(req, cb) {
        let resp = new DescribeDBPriceResponse();
        this.request("DescribeDBPrice", req, resp, cb);
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
     * This API is used to switch database proxy after the proxy configuration is modified or the proxy version is upgraded.
     * @param {SwitchCDBProxyRequest} req
     * @param {function(string, SwitchCDBProxyResponse):void} cb
     * @public
     */
    SwitchCDBProxy(req, cb) {
        let resp = new SwitchCDBProxyResponse();
        this.request("SwitchCDBProxy", req, resp, cb);
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
     * This API is used to query the retention policy of local binlog of an instance.
     * @param {DescribeLocalBinlogConfigRequest} req
     * @param {function(string, DescribeLocalBinlogConfigResponse):void} cb
     * @public
     */
    DescribeLocalBinlogConfig(req, cb) {
        let resp = new DescribeLocalBinlogConfigResponse();
        this.request("DescribeLocalBinlogConfig", req, resp, cb);
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
     * This API is used to query the connection pool configuration of database proxy.
     * @param {DescribeProxyConnectionPoolConfRequest} req
     * @param {function(string, DescribeProxyConnectionPoolConfResponse):void} cb
     * @public
     */
    DescribeProxyConnectionPoolConf(req, cb) {
        let resp = new DescribeProxyConnectionPoolConfResponse();
        this.request("DescribeProxyConnectionPoolConf", req, resp, cb);
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
     * This API is used to query the clone task list of an instance.
     * @param {DescribeCloneListRequest} req
     * @param {function(string, DescribeCloneListResponse):void} cb
     * @public
     */
    DescribeCloneList(req, cb) {
        let resp = new DescribeCloneListResponse();
        this.request("DescribeCloneList", req, resp, cb);
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
     * This API is used to upgrade the version of database proxy.
     * @param {UpgradeCDBProxyVersionRequest} req
     * @param {function(string, UpgradeCDBProxyVersionResponse):void} cb
     * @public
     */
    UpgradeCDBProxyVersion(req, cb) {
        let resp = new UpgradeCDBProxyVersionResponse();
        this.request("UpgradeCDBProxyVersion", req, resp, cb);
    }

    /**
     * This API is used to modify the maximum connections of one or more TencentDB instance accounts.
     * @param {ModifyAccountMaxUserConnectionsRequest} req
     * @param {function(string, ModifyAccountMaxUserConnectionsResponse):void} cb
     * @public
     */
    ModifyAccountMaxUserConnections(req, cb) {
        let resp = new ModifyAccountMaxUserConnectionsResponse();
        this.request("ModifyAccountMaxUserConnections", req, resp, cb);
    }


}
module.exports = CdbClient;
