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
const TaskDetail = models.TaskDetail;
const DescribeTableColumnsResponse = models.DescribeTableColumnsResponse;
const CdbZoneSellConf = models.CdbZoneSellConf;
const CreateDBImportJobRequest = models.CreateDBImportJobRequest;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const CreateCdbProxyRequest = models.CreateCdbProxyRequest;
const CreateCdbProxyResponse = models.CreateCdbProxyResponse;
const InstanceRollbackRangeTime = models.InstanceRollbackRangeTime;
const DescribeTablesResponse = models.DescribeTablesResponse;
const ModifyBackupDownloadRestrictionResponse = models.ModifyBackupDownloadRestrictionResponse;
const InstanceDbAuditStatus = models.InstanceDbAuditStatus;
const ModifyTimeWindowResponse = models.ModifyTimeWindowResponse;
const ParamRecord = models.ParamRecord;
const ModifyTimeWindowRequest = models.ModifyTimeWindowRequest;
const DescribeRollbackRangeTimeRequest = models.DescribeRollbackRangeTimeRequest;
const DescribeBackupOverviewRequest = models.DescribeBackupOverviewRequest;
const DescribeAuditInstanceListResponse = models.DescribeAuditInstanceListResponse;
const ModifyDBInstanceProjectResponse = models.ModifyDBInstanceProjectResponse;
const ModifyDBInstanceModesResponse = models.ModifyDBInstanceModesResponse;
const DeleteAuditPolicyRequest = models.DeleteAuditPolicyRequest;
const BackupSummaryItem = models.BackupSummaryItem;
const CreateDatabaseRequest = models.CreateDatabaseRequest;
const ModifyInstanceParamRequest = models.ModifyInstanceParamRequest;
const ModifyProtectModeResponse = models.ModifyProtectModeResponse;
const CreateParamTemplateRequest = models.CreateParamTemplateRequest;
const RemoteBackupInfo = models.RemoteBackupInfo;
const PeriodStrategy = models.PeriodStrategy;
const DescribeParamTemplateInfoRequest = models.DescribeParamTemplateInfoRequest;
const ModifyCdbProxyAddressVipAndVPortResponse = models.ModifyCdbProxyAddressVipAndVPortResponse;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const CreateRotationPasswordResponse = models.CreateRotationPasswordResponse;
const ModifyCdbProxyAddressDescRequest = models.ModifyCdbProxyAddressDescRequest;
const CdbRegionSellConf = models.CdbRegionSellConf;
const ReadWriteNode = models.ReadWriteNode;
const DescribeRoGroupsRequest = models.DescribeRoGroupsRequest;
const DescribeInstanceUpgradeTypeResponse = models.DescribeInstanceUpgradeTypeResponse;
const CreateCdbProxyAddressResponse = models.CreateCdbProxyAddressResponse;
const RollbackTableName = models.RollbackTableName;
const CloseWanServiceRequest = models.CloseWanServiceRequest;
const DescribeAuditConfigRequest = models.DescribeAuditConfigRequest;
const CreateRoInstanceIpResponse = models.CreateRoInstanceIpResponse;
const CloseSSLRequest = models.CloseSSLRequest;
const CreateAuditPolicyResponse = models.CreateAuditPolicyResponse;
const LogRuleTemplateInfo = models.LogRuleTemplateInfo;
const DescribeInstanceParamRecordsRequest = models.DescribeInstanceParamRecordsRequest;
const StopRollbackResponse = models.StopRollbackResponse;
const CreateCdbProxyAddressRequest = models.CreateCdbProxyAddressRequest;
const AnalyzeAuditLogsRequest = models.AnalyzeAuditLogsRequest;
const ModifyBackupEncryptionStatusResponse = models.ModifyBackupEncryptionStatusResponse;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const DescribeRoMinScaleResponse = models.DescribeRoMinScaleResponse;
const StopDBImportJobResponse = models.StopDBImportJobResponse;
const ProxyAllocation = models.ProxyAllocation;
const StopCpuExpandRequest = models.StopCpuExpandRequest;
const DescribeInstancePasswordComplexityRequest = models.DescribeInstancePasswordComplexityRequest;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const TagInfoUnit = models.TagInfoUnit;
const DescribeAuditRulesRequest = models.DescribeAuditRulesRequest;
const UpgradeDBInstanceEngineVersionResponse = models.UpgradeDBInstanceEngineVersionResponse;
const ErrlogItem = models.ErrlogItem;
const ProxyGroupInfo = models.ProxyGroupInfo;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const DescribeCPUExpandStrategyInfoResponse = models.DescribeCPUExpandStrategyInfoResponse;
const Rule = models.Rule;
const AuditPolicy = models.AuditPolicy;
const ProxyNode = models.ProxyNode;
const DescribeCdbZoneConfigResponse = models.DescribeCdbZoneConfigResponse;
const ReadonlyNode = models.ReadonlyNode;
const DescribeTablesRequest = models.DescribeTablesRequest;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const ModifyParamTemplateRequest = models.ModifyParamTemplateRequest;
const OpenAuditServiceResponse = models.OpenAuditServiceResponse;
const DescribeBinlogBackupOverviewResponse = models.DescribeBinlogBackupOverviewResponse;
const DescribeDBInstanceLogToCLSResponse = models.DescribeDBInstanceLogToCLSResponse;
const SwitchDBInstanceMasterSlaveRequest = models.SwitchDBInstanceMasterSlaveRequest;
const ModifyCdbProxyAddressVipAndVPortRequest = models.ModifyCdbProxyAddressVipAndVPortRequest;
const ModifyAutoRenewFlagRequest = models.ModifyAutoRenewFlagRequest;
const OpenSSLRequest = models.OpenSSLRequest;
const DescribeAuditConfigResponse = models.DescribeAuditConfigResponse;
const ModifyBackupConfigResponse = models.ModifyBackupConfigResponse;
const OpenWanServiceRequest = models.OpenWanServiceRequest;
const DeleteAuditPolicyResponse = models.DeleteAuditPolicyResponse;
const DescribeParamTemplateInfoResponse = models.DescribeParamTemplateInfoResponse;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const DeleteDatabaseRequest = models.DeleteDatabaseRequest;
const UploadInfo = models.UploadInfo;
const NodeDistribution = models.NodeDistribution;
const AuditRuleFilters = models.AuditRuleFilters;
const SubmitInstanceUpgradeCheckJobRequest = models.SubmitInstanceUpgradeCheckJobRequest;
const ModifyLocalBinlogConfigRequest = models.ModifyLocalBinlogConfigRequest;
const StartBatchRollbackResponse = models.StartBatchRollbackResponse;
const DescribeDeviceMonitorInfoResponse = models.DescribeDeviceMonitorInfoResponse;
const DescribeRollbackRangeTimeResponse = models.DescribeRollbackRangeTimeResponse;
const ModifyRoGroupInfoRequest = models.ModifyRoGroupInfoRequest;
const ReleaseResult = models.ReleaseResult;
const ModifyDBInstanceVipVportRequest = models.ModifyDBInstanceVipVportRequest;
const AuditRule = models.AuditRule;
const DescribeInstanceAlarmEventsRequest = models.DescribeInstanceAlarmEventsRequest;
const DescribeBinlogsRequest = models.DescribeBinlogsRequest;
const TimeIntervalStrategy = models.TimeIntervalStrategy;
const DescribeCdbProxyInfoRequest = models.DescribeCdbProxyInfoRequest;
const RollbackDBName = models.RollbackDBName;
const RuleFilters = models.RuleFilters;
const ModifyAuditRuleTemplatesRequest = models.ModifyAuditRuleTemplatesRequest;
const StopDBImportJobRequest = models.StopDBImportJobRequest;
const ModifyRemoteBackupConfigResponse = models.ModifyRemoteBackupConfigResponse;
const DescribeDBInstanceInfoResponse = models.DescribeDBInstanceInfoResponse;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const DescribeInstanceUpgradeCheckJobRequest = models.DescribeInstanceUpgradeCheckJobRequest;
const DescribeDBFeaturesResponse = models.DescribeDBFeaturesResponse;
const SubmitInstanceUpgradeCheckJobResponse = models.SubmitInstanceUpgradeCheckJobResponse;
const DescribeBinlogsResponse = models.DescribeBinlogsResponse;
const DescribeRoMinScaleRequest = models.DescribeRoMinScaleRequest;
const DescribeDefaultParamsRequest = models.DescribeDefaultParamsRequest;
const AuditInstanceInfo = models.AuditInstanceInfo;
const CustomConfig = models.CustomConfig;
const SwitchDBInstanceMasterSlaveResponse = models.SwitchDBInstanceMasterSlaveResponse;
const DescribeDataBackupOverviewResponse = models.DescribeDataBackupOverviewResponse;
const DescribeBackupsRequest = models.DescribeBackupsRequest;
const DescribeInstanceParamRecordsResponse = models.DescribeInstanceParamRecordsResponse;
const DescribeDBInstanceGTIDResponse = models.DescribeDBInstanceGTIDResponse;
const DeleteParamTemplateRequest = models.DeleteParamTemplateRequest;
const DrInfo = models.DrInfo;
const ModifyBackupDownloadRestrictionRequest = models.ModifyBackupDownloadRestrictionRequest;
const CreateParamTemplateResponse = models.CreateParamTemplateResponse;
const ModifyAccountPasswordResponse = models.ModifyAccountPasswordResponse;
const ReleaseIsolatedDBInstancesRequest = models.ReleaseIsolatedDBInstancesRequest;
const BinlogInfo = models.BinlogInfo;
const CreateDatabaseResponse = models.CreateDatabaseResponse;
const DescribeErrorLogDataResponse = models.DescribeErrorLogDataResponse;
const AddTimeWindowRequest = models.AddTimeWindowRequest;
const ImportRecord = models.ImportRecord;
const DeleteAuditLogFileResponse = models.DeleteAuditLogFileResponse;
const DescribeSlowLogsResponse = models.DescribeSlowLogsResponse;
const DescribeCPUExpandStrategyInfoRequest = models.DescribeCPUExpandStrategyInfoRequest;
const SlaveInfo = models.SlaveInfo;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const DescribeDBSwitchRecordsResponse = models.DescribeDBSwitchRecordsResponse;
const Tag = models.Tag;
const RuleTemplateInfo = models.RuleTemplateInfo;
const CreateAuditLogFileResponse = models.CreateAuditLogFileResponse;
const ModifyCdbProxyParamResponse = models.ModifyCdbProxyParamResponse;
const ModifyInstanceTagResponse = models.ModifyInstanceTagResponse;
const DescribeDBSwitchRecordsRequest = models.DescribeDBSwitchRecordsRequest;
const DescribeSupportedPrivilegesRequest = models.DescribeSupportedPrivilegesRequest;
const DescribeAsyncRequestInfoResponse = models.DescribeAsyncRequestInfoResponse;
const DeleteAccountsResponse = models.DeleteAccountsResponse;
const ParamTemplateInfo = models.ParamTemplateInfo;
const ModifyCdbProxyAddressDescResponse = models.ModifyCdbProxyAddressDescResponse;
const ModifyDBInstanceLogToCLSRequest = models.ModifyDBInstanceLogToCLSRequest;
const DeleteTimeWindowResponse = models.DeleteTimeWindowResponse;
const DescribeBackupsResponse = models.DescribeBackupsResponse;
const CreateAuditPolicyRequest = models.CreateAuditPolicyRequest;
const CreateRoInstanceIpRequest = models.CreateRoInstanceIpRequest;
const DescribeTimeWindowResponse = models.DescribeTimeWindowResponse;
const StopCpuExpandResponse = models.StopCpuExpandResponse;
const DescribeBackupConfigResponse = models.DescribeBackupConfigResponse;
const DescribeParamTemplatesResponse = models.DescribeParamTemplatesResponse;
const ZoneConf = models.ZoneConf;
const SlaveInstanceInfo = models.SlaveInstanceInfo;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const StopReplicationRequest = models.StopReplicationRequest;
const StartCpuExpandResponse = models.StartCpuExpandResponse;
const CreateCloneInstanceResponse = models.CreateCloneInstanceResponse;
const DescribeCdbZoneConfigRequest = models.DescribeCdbZoneConfigRequest;
const ResetPasswordRequest = models.ResetPasswordRequest;
const DeviceCpuInfo = models.DeviceCpuInfo;
const DescribeAsyncRequestInfoRequest = models.DescribeAsyncRequestInfoRequest;
const BalanceRoGroupLoadRequest = models.BalanceRoGroupLoadRequest;
const DescribeBackupOverviewResponse = models.DescribeBackupOverviewResponse;
const DescribeLocalBinlogConfigRequest = models.DescribeLocalBinlogConfigRequest;
const TagsInfoOfInstance = models.TagsInfoOfInstance;
const DescribeDeviceMonitorInfoRequest = models.DescribeDeviceMonitorInfoRequest;
const DescribeInstanceUpgradeTypeRequest = models.DescribeInstanceUpgradeTypeRequest;
const DescribeDBInstanceConfigResponse = models.DescribeDBInstanceConfigResponse;
const SlaveConfig = models.SlaveConfig;
const ModifyAccountPrivilegesResponse = models.ModifyAccountPrivilegesResponse;
const StopRollbackRequest = models.StopRollbackRequest;
const LogToCLSConfig = models.LogToCLSConfig;
const ResetRootAccountRequest = models.ResetRootAccountRequest;
const DescribeDBInstanceConfigRequest = models.DescribeDBInstanceConfigRequest;
const ClusterNodeInfo = models.ClusterNodeInfo;
const DescribeTableColumnsRequest = models.DescribeTableColumnsRequest;
const DescribeProxyCustomConfResponse = models.DescribeProxyCustomConfResponse;
const ModifyAuditConfigResponse = models.ModifyAuditConfigResponse;
const SwitchDrInstanceToMasterResponse = models.SwitchDrInstanceToMasterResponse;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const RuleTemplateRecordInfo = models.RuleTemplateRecordInfo;
const DescribeCloneListResponse = models.DescribeCloneListResponse;
const DescribeDBInstanceLogToCLSRequest = models.DescribeDBInstanceLogToCLSRequest;
const AnalysisNodeInfo = models.AnalysisNodeInfo;
const StartBatchRollbackRequest = models.StartBatchRollbackRequest;
const OpenDBInstanceEncryptionRequest = models.OpenDBInstanceEncryptionRequest;
const DescribeDBInstanceCharsetRequest = models.DescribeDBInstanceCharsetRequest;
const ModifyInstancePasswordComplexityResponse = models.ModifyInstancePasswordComplexityResponse;
const DeviceMemInfo = models.DeviceMemInfo;
const AuditLogAggregationResult = models.AuditLogAggregationResult;
const DatabasesWithCharacterLists = models.DatabasesWithCharacterLists;
const DescribeRemoteBackupConfigRequest = models.DescribeRemoteBackupConfigRequest;
const ClusterTopology = models.ClusterTopology;
const TagInfo = models.TagInfo;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const DescribeBackupDownloadRestrictionRequest = models.DescribeBackupDownloadRestrictionRequest;
const DeleteAccountsRequest = models.DeleteAccountsRequest;
const DeleteRotationPasswordResponse = models.DeleteRotationPasswordResponse;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const RollbackTimeRange = models.RollbackTimeRange;
const ModifyProtectModeRequest = models.ModifyProtectModeRequest;
const DescribeAuditRuleTemplateModifyHistoryResponse = models.DescribeAuditRuleTemplateModifyHistoryResponse;
const DescribeAuditLogFilesRequest = models.DescribeAuditLogFilesRequest;
const ModifyBackupConfigRequest = models.ModifyBackupConfigRequest;
const DiskTypeConfigItem = models.DiskTypeConfigItem;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const AggregationCondition = models.AggregationCondition;
const LocalBinlogConfig = models.LocalBinlogConfig;
const CreateDBInstanceRequest = models.CreateDBInstanceRequest;
const DescribeParamTemplatesRequest = models.DescribeParamTemplatesRequest;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const DescribeAuditLogsRequest = models.DescribeAuditLogsRequest;
const DescribeBackupConfigRequest = models.DescribeBackupConfigRequest;
const RoVipInfo = models.RoVipInfo;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const ModifyAuditServiceRequest = models.ModifyAuditServiceRequest;
const DescribeErrorLogDataRequest = models.DescribeErrorLogDataRequest;
const DescribeAuditLogFilesResponse = models.DescribeAuditLogFilesResponse;
const DescribeDBInstanceRebootTimeRequest = models.DescribeDBInstanceRebootTimeRequest;
const Inbound = models.Inbound;
const CreateAccountsResponse = models.CreateAccountsResponse;
const ModifyDBInstanceModesRequest = models.ModifyDBInstanceModesRequest;
const CdbSellType = models.CdbSellType;
const MasterInfo = models.MasterInfo;
const ResetRootAccountResponse = models.ResetRootAccountResponse;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const Account = models.Account;
const ModifyNameOrDescByDpIdResponse = models.ModifyNameOrDescByDpIdResponse;
const DescribeClusterInfoRequest = models.DescribeClusterInfoRequest;
const DescribeDBPriceResponse = models.DescribeDBPriceResponse;
const AuditLogFilter = models.AuditLogFilter;
const OpenDBInstanceGTIDResponse = models.OpenDBInstanceGTIDResponse;
const DescribeDBInstanceRebootTimeResponse = models.DescribeDBInstanceRebootTimeResponse;
const SwitchDrInstanceToMasterRequest = models.SwitchDrInstanceToMasterRequest;
const ModifyCdbProxyParamRequest = models.ModifyCdbProxyParamRequest;
const RoGroup = models.RoGroup;
const ParameterDetail = models.ParameterDetail;
const SwitchForUpgradeRequest = models.SwitchForUpgradeRequest;
const CreateRotationPasswordRequest = models.CreateRotationPasswordRequest;
const CreateDBInstanceHourResponse = models.CreateDBInstanceHourResponse;
const DescribeBackupDownloadRestrictionResponse = models.DescribeBackupDownloadRestrictionResponse;
const DescribeBackupDecryptionKeyRequest = models.DescribeBackupDecryptionKeyRequest;
const CloneItem = models.CloneItem;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const CreateAccountsRequest = models.CreateAccountsRequest;
const DeleteAuditRuleTemplatesRequest = models.DeleteAuditRuleTemplatesRequest;
const CreateAuditRuleTemplateResponse = models.CreateAuditRuleTemplateResponse;
const BackupInfo = models.BackupInfo;
const CloseWanServiceResponse = models.CloseWanServiceResponse;
const RenewDBInstanceRequest = models.RenewDBInstanceRequest;
const SlowLogInfo = models.SlowLogInfo;
const ModifyLocalBinlogConfigResponse = models.ModifyLocalBinlogConfigResponse;
const DeleteDatabaseResponse = models.DeleteDatabaseResponse;
const DescribeInstanceUpgradeCheckJobResponse = models.DescribeInstanceUpgradeCheckJobResponse;
const DescribeCloneListRequest = models.DescribeCloneListRequest;
const ModifyInstanceTagRequest = models.ModifyInstanceTagRequest;
const DescribeProxySupportParamRequest = models.DescribeProxySupportParamRequest;
const ModifyAutoRenewFlagResponse = models.ModifyAutoRenewFlagResponse;
const RollbackTask = models.RollbackTask;
const StartReplicationRequest = models.StartReplicationRequest;
const ProxyInst = models.ProxyInst;
const ReloadBalanceProxyNodeResponse = models.ReloadBalanceProxyNodeResponse;
const DescribeRemoteBackupConfigResponse = models.DescribeRemoteBackupConfigResponse;
const DescribeDBImportRecordsResponse = models.DescribeDBImportRecordsResponse;
const BackupItem = models.BackupItem;
const AuditFilter = models.AuditFilter;
const DescribeProxySupportParamResponse = models.DescribeProxySupportParamResponse;
const CloseAuditServiceResponse = models.CloseAuditServiceResponse;
const DescribeRollbackTaskDetailRequest = models.DescribeRollbackTaskDetailRequest;
const AdjustCdbProxyResponse = models.AdjustCdbProxyResponse;
const ModifyParamTemplateResponse = models.ModifyParamTemplateResponse;
const BalanceRoGroupLoadResponse = models.BalanceRoGroupLoadResponse;
const DeviceNetInfo = models.DeviceNetInfo;
const ModifyRoGroupVipVportResponse = models.ModifyRoGroupVipVportResponse;
const ModifyDBInstanceVipVportResponse = models.ModifyDBInstanceVipVportResponse;
const IsolateDBInstanceRequest = models.IsolateDBInstanceRequest;
const InstanceAuditLogFilters = models.InstanceAuditLogFilters;
const DescribeUploadedFilesRequest = models.DescribeUploadedFilesRequest;
const InstanceInfo = models.InstanceInfo;
const DescribeDefaultParamsResponse = models.DescribeDefaultParamsResponse;
const SwitchCDBProxyRequest = models.SwitchCDBProxyRequest;
const StartReplicationResponse = models.StartReplicationResponse;
const DescribeTagsOfInstanceIdsResponse = models.DescribeTagsOfInstanceIdsResponse;
const OfflineIsolatedInstancesResponse = models.OfflineIsolatedInstancesResponse;
const CreateAuditRuleTemplateRequest = models.CreateAuditRuleTemplateRequest;
const DatabasePrivilege = models.DatabasePrivilege;
const DescribeAuditPoliciesRequest = models.DescribeAuditPoliciesRequest;
const DescribeInstancePasswordComplexityResponse = models.DescribeInstancePasswordComplexityResponse;
const AdjustCdbProxyAddressRequest = models.AdjustCdbProxyAddressRequest;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const TaskAttachInfo = models.TaskAttachInfo;
const DescribeRoGroupsResponse = models.DescribeRoGroupsResponse;
const CloseCdbProxyAddressResponse = models.CloseCdbProxyAddressResponse;
const DescribeAuditRulesResponse = models.DescribeAuditRulesResponse;
const RoInstanceInfo = models.RoInstanceInfo;
const DeviceCpuRateInfo = models.DeviceCpuRateInfo;
const ModifyAccountPrivilegesRequest = models.ModifyAccountPrivilegesRequest;
const CreateBackupRequest = models.CreateBackupRequest;
const AccountInfo = models.AccountInfo;
const DescribeTimeWindowRequest = models.DescribeTimeWindowRequest;
const UpgradeAnalysisInstanceVersionInfo = models.UpgradeAnalysisInstanceVersionInfo;
const AdjustCdbProxyAddressResponse = models.AdjustCdbProxyAddressResponse;
const CreateAuditLogFileRequest = models.CreateAuditLogFileRequest;
const DescribeSSLStatusResponse = models.DescribeSSLStatusResponse;
const DescribeDBImportRecordsRequest = models.DescribeDBImportRecordsRequest;
const CreateDBImportJobResponse = models.CreateDBImportJobResponse;
const DescribeTagsOfInstanceIdsRequest = models.DescribeTagsOfInstanceIdsRequest;
const StartCpuExpandRequest = models.StartCpuExpandRequest;
const CloseCDBProxyResponse = models.CloseCDBProxyResponse;
const StopReplicationResponse = models.StopReplicationResponse;
const UpgradeDBInstanceEngineVersionRequest = models.UpgradeDBInstanceEngineVersionRequest;
const DescribeDataBackupOverviewRequest = models.DescribeDataBackupOverviewRequest;
const DescribeDBInstanceInfoRequest = models.DescribeDBInstanceInfoRequest;
const BackupLimitVpcItem = models.BackupLimitVpcItem;
const ModifyDBInstanceProjectRequest = models.ModifyDBInstanceProjectRequest;
const Bucket = models.Bucket;
const SwitchForUpgradeResponse = models.SwitchForUpgradeResponse;
const UpgradeEngineVersionParams = models.UpgradeEngineVersionParams;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const CdbSellConfig = models.CdbSellConfig;
const DescribeSupportedPrivilegesResponse = models.DescribeSupportedPrivilegesResponse;
const SlowLogItem = models.SlowLogItem;
const DescribeLocalBinlogConfigResponse = models.DescribeLocalBinlogConfigResponse;
const OpenSSLResponse = models.OpenSSLResponse;
const ModifyAuditServiceResponse = models.ModifyAuditServiceResponse;
const ModifyInstancePasswordComplexityRequest = models.ModifyInstancePasswordComplexityRequest;
const OpenWanServiceResponse = models.OpenWanServiceResponse;
const DescribeDBInstanceGTIDRequest = models.DescribeDBInstanceGTIDRequest;
const DescribeBackupEncryptionStatusResponse = models.DescribeBackupEncryptionStatusResponse;
const DescribeCdbProxyInfoResponse = models.DescribeCdbProxyInfoResponse;
const ModifyAuditConfigRequest = models.ModifyAuditConfigRequest;
const DeviceDiskInfo = models.DeviceDiskInfo;
const DescribeInstanceAlarmEventsResponse = models.DescribeInstanceAlarmEventsResponse;
const RoWeightValue = models.RoWeightValue;
const DescribeSlowLogDataResponse = models.DescribeSlowLogDataResponse;
const DeleteRotationPasswordRequest = models.DeleteRotationPasswordRequest;
const RestartDBInstancesResponse = models.RestartDBInstancesResponse;
const DescribeSlowLogsRequest = models.DescribeSlowLogsRequest;
const TagInfoItem = models.TagInfoItem;
const ProxyNodeCustom = models.ProxyNodeCustom;
const DescribeProxyCustomConfRequest = models.DescribeProxyCustomConfRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const CloseCdbProxyAddressRequest = models.CloseCdbProxyAddressRequest;
const ModifyRoGroupInfoResponse = models.ModifyRoGroupInfoResponse;
const DeleteParamTemplateResponse = models.DeleteParamTemplateResponse;
const TimeInterval = models.TimeInterval;
const DBSwitchInfo = models.DBSwitchInfo;
const ResetPasswordResponse = models.ResetPasswordResponse;
const DescribeAuditRuleTemplateModifyHistoryRequest = models.DescribeAuditRuleTemplateModifyHistoryRequest;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DescribeAuditLogsResponse = models.DescribeAuditLogsResponse;
const DescribeAuditPoliciesResponse = models.DescribeAuditPoliciesResponse;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const AdjustCdbProxyRequest = models.AdjustCdbProxyRequest;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const ProxyAddress = models.ProxyAddress;
const CommonTimeWindow = models.CommonTimeWindow;
const ModifyAccountMaxUserConnectionsRequest = models.ModifyAccountMaxUserConnectionsRequest;
const DescribeTasksRequest = models.DescribeTasksRequest;
const ModifyBackupEncryptionStatusRequest = models.ModifyBackupEncryptionStatusRequest;
const DescribeRollbackTaskDetailResponse = models.DescribeRollbackTaskDetailResponse;
const CreateDBInstanceHourRequest = models.CreateDBInstanceHourRequest;
const DescribeAuditRuleTemplatesResponse = models.DescribeAuditRuleTemplatesResponse;
const RollbackInstancesInfo = models.RollbackInstancesInfo;
const CreateCloneInstanceRequest = models.CreateCloneInstanceRequest;
const ClusterInfo = models.ClusterInfo;
const CloseCDBProxyRequest = models.CloseCDBProxyRequest;
const DeleteBackupResponse = models.DeleteBackupResponse;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const DescribeBackupSummariesRequest = models.DescribeBackupSummariesRequest;
const AnalyzeAuditLogsResponse = models.AnalyzeAuditLogsResponse;
const CreateDBInstanceResponse = models.CreateDBInstanceResponse;
const ModifyRoGroupVipVportRequest = models.ModifyRoGroupVipVportRequest;
const OpenAuditServiceRequest = models.OpenAuditServiceRequest;
const DescribeDBInstanceCharsetResponse = models.DescribeDBInstanceCharsetResponse;
const DescribeDBFeaturesRequest = models.DescribeDBFeaturesRequest;
const TImeCycle = models.TImeCycle;
const DescribeBackupSummariesResponse = models.DescribeBackupSummariesResponse;
const DescribeBinlogBackupOverviewRequest = models.DescribeBinlogBackupOverviewRequest;
const InstEventInfo = models.InstEventInfo;
const ReloadBalanceProxyNodeRequest = models.ReloadBalanceProxyNodeRequest;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const CloseAuditServiceRequest = models.CloseAuditServiceRequest;
const AutoStrategy = models.AutoStrategy;
const ModifyAccountMaxUserConnectionsResponse = models.ModifyAccountMaxUserConnectionsResponse;
const Outbound = models.Outbound;
const DescribeClusterInfoResponse = models.DescribeClusterInfoResponse;
const AuditInstanceFilters = models.AuditInstanceFilters;
const ParamInfo = models.ParamInfo;
const DescribeBackupDecryptionKeyResponse = models.DescribeBackupDecryptionKeyResponse;
const SecurityGroup = models.SecurityGroup;
const OfflineIsolatedInstancesRequest = models.OfflineIsolatedInstancesRequest;
const ModifyInstanceParamResponse = models.ModifyInstanceParamResponse;
const AuditLog = models.AuditLog;
const ColumnPrivilege = models.ColumnPrivilege;
const DescribeUploadedFilesResponse = models.DescribeUploadedFilesResponse;
const DescribeDBPriceRequest = models.DescribeDBPriceRequest;
const CreateBackupResponse = models.CreateBackupResponse;
const OpenDBInstanceGTIDRequest = models.OpenDBInstanceGTIDRequest;
const OpenDBInstanceEncryptionResponse = models.OpenDBInstanceEncryptionResponse;
const CdbZoneDataResult = models.CdbZoneDataResult;
const SqlFileInfo = models.SqlFileInfo;
const RoGroupAttr = models.RoGroupAttr;
const UpgradeCDBProxyVersionResponse = models.UpgradeCDBProxyVersionResponse;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const ModifyAccountPasswordRequest = models.ModifyAccountPasswordRequest;
const InstanceRebootTime = models.InstanceRebootTime;
const RenewDBInstanceResponse = models.RenewDBInstanceResponse;
const TablePrivilege = models.TablePrivilege;
const AddTimeWindowResponse = models.AddTimeWindowResponse;
const CloseSSLResponse = models.CloseSSLResponse;
const DescribeAuditInstanceListRequest = models.DescribeAuditInstanceListRequest;
const DescribeBackupEncryptionStatusRequest = models.DescribeBackupEncryptionStatusRequest;
const ModifyDBInstanceLogToCLSResponse = models.ModifyDBInstanceLogToCLSResponse;
const AuditRuleTemplateInfo = models.AuditRuleTemplateInfo;
const AuditLogFile = models.AuditLogFile;
const DescribeAuditRuleTemplatesRequest = models.DescribeAuditRuleTemplatesRequest;
const RollbackTables = models.RollbackTables;
const BackupConfig = models.BackupConfig;
const LocalBinlogConfigDefault = models.LocalBinlogConfigDefault;
const DescribeSSLStatusRequest = models.DescribeSSLStatusRequest;
const DescribeSlowLogDataRequest = models.DescribeSlowLogDataRequest;
const ReleaseIsolatedDBInstancesResponse = models.ReleaseIsolatedDBInstancesResponse;
const DeleteAuditLogFileRequest = models.DeleteAuditLogFileRequest;
const Parameter = models.Parameter;
const DeleteTimeWindowRequest = models.DeleteTimeWindowRequest;
const SwitchCDBProxyResponse = models.SwitchCDBProxyResponse;
const RestartDBInstancesRequest = models.RestartDBInstancesRequest;
const ModifyRemoteBackupConfigRequest = models.ModifyRemoteBackupConfigRequest;
const DeleteBackupRequest = models.DeleteBackupRequest;
const ModifyNameOrDescByDpIdRequest = models.ModifyNameOrDescByDpIdRequest;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const UpgradeCDBProxyVersionRequest = models.UpgradeCDBProxyVersionRequest;
const DeleteAuditRuleTemplatesResponse = models.DeleteAuditRuleTemplatesResponse;
const AddressInfo = models.AddressInfo;
const ModifyAuditRuleTemplatesResponse = models.ModifyAuditRuleTemplatesResponse;


/**
 * cdb client
 * @class
 */
class CdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdb.intl.tencentcloudapi.com", "2017-03-20", credential, region, profile);
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
     * This API is used to query table column information of a designated database in a cloud database instance. It only supports primary instance and disaster recovery instance.
     * @param {DescribeTableColumnsRequest} req
     * @param {function(string, DescribeTableColumnsResponse):void} cb
     * @public
     */
    DescribeTableColumns(req, cb) {
        let resp = new DescribeTableColumnsResponse();
        this.request("DescribeTableColumns", req, resp, cb);
    }

    /**
     * This API is used to enable SSL connectivity function.
     * @param {OpenSSLRequest} req
     * @param {function(string, OpenSSLResponse):void} cb
     * @public
     */
    OpenSSL(req, cb) {
        let resp = new OpenSSLResponse();
        this.request("OpenSSL", req, resp, cb);
    }

    /**
     * This API is used to query cloud database version attributes, including whether database encryption and database audit are supported, and other features.
     * @param {DescribeDBFeaturesRequest} req
     * @param {function(string, DescribeDBFeaturesResponse):void} cb
     * @public
     */
    DescribeDBFeatures(req, cb) {
        let resp = new DescribeDBFeaturesResponse();
        this.request("DescribeDBFeatures", req, resp, cb);
    }

    /**
     * This API is used to create an audit rule template.
     * @param {CreateAuditRuleTemplateRequest} req
     * @param {function(string, CreateAuditRuleTemplateResponse):void} cb
     * @public
     */
    CreateAuditRuleTemplate(req, cb) {
        let resp = new CreateAuditRuleTemplateResponse();
        this.request("CreateAuditRuleTemplate", req, resp, cb);
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
     * This API is used to isolate a cloud database instance. After an instance is isolated, you cannot access the database via IP and port. The isolated instance can be started in the recycle bin. If the instance is isolated due to arrears, please recharge as soon as possible.
     * @param {IsolateDBInstanceRequest} req
     * @param {function(string, IsolateDBInstanceResponse):void} cb
     * @public
     */
    IsolateDBInstance(req, cb) {
        let resp = new IsolateDBInstanceResponse();
        this.request("IsolateDBInstance", req, resp, cb);
    }

    /**
     * This API is used to modify the vip and vport of a Ro group.
     * @param {ModifyRoGroupVipVportRequest} req
     * @param {function(string, ModifyRoGroupVipVportResponse):void} cb
     * @public
     */
    ModifyRoGroupVipVport(req, cb) {
        let resp = new ModifyRoGroupVipVportResponse();
        this.request("ModifyRoGroupVipVport", req, resp, cb);
    }

    /**
     * This API is used to restart cloud database instances.

Note:
This API supports performing a restart operation on primary instances, read-only instances, and disaster recovery instances.
2. The instance status must be normal and no other async tasks are in progress.
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
     * This API is used to stop RO replication and interrupt data sync from the primary instance.
     * @param {StopReplicationRequest} req
     * @param {function(string, StopReplicationResponse):void} cb
     * @public
     */
    StopReplication(req, cb) {
        let resp = new StopReplicationResponse();
        this.request("StopReplication", req, resp, cb);
    }

    /**
     * This API is used to enable or disable the feature of sending CDB slow and error logs to CLS.
     * @param {ModifyDBInstanceLogToCLSRequest} req
     * @param {function(string, ModifyDBInstanceLogToCLSResponse):void} cb
     * @public
     */
    ModifyDBInstanceLogToCLS(req, cb) {
        let resp = new ModifyDBInstanceLogToCLSResponse();
        this.request("ModifyDBInstanceLogToCLS", req, resp, cb);
    }

    /**
     * This API is used to disable elastic CPU expansion.
     * @param {StopCpuExpandRequest} req
     * @param {function(string, StopCpuExpandResponse):void} cb
     * @public
     */
    StopCpuExpand(req, cb) {
        let resp = new StopCpuExpandResponse();
        this.request("StopCpuExpand", req, resp, cb);
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
     * This API is used to disable the audit service for an instance.
     * @param {CloseAuditServiceRequest} req
     * @param {function(string, CloseAuditServiceResponse):void} cb
     * @public
     */
    CloseAuditService(req, cb) {
        let resp = new CloseAuditServiceResponse();
        this.request("CloseAuditService", req, resp, cb);
    }

    /**
     * This api is used to revoke an ongoing rollback task of an instance. The api response returns an Asynchronous Task ID. The revocation result can be queried through [DescribeAsyncRequestInfo](https://www.tencentcloud.com/document/api/236/20410?from_cn_redirect=1) for task execution.
     * @param {StopRollbackRequest} req
     * @param {function(string, StopRollbackResponse):void} cb
     * @public
     */
    StopRollback(req, cb) {
        let resp = new StopRollbackResponse();
        this.request("StopRollback", req, resp, cb);
    }

    /**
     * This API is used to query the upgrade type of a database instance.
     * @param {DescribeInstanceUpgradeTypeRequest} req
     * @param {function(string, DescribeInstanceUpgradeTypeResponse):void} cb
     * @public
     */
    DescribeInstanceUpgradeType(req, cb) {
        let resp = new DescribeInstanceUpgradeTypeResponse();
        this.request("DescribeInstanceUpgradeType", req, resp, cb);
    }

    /**
     * This api is used to deactivate cloud database instances in quarantined state now. The instance Status for row operations must be quarantined state, such as instances with Status value 5 queried through the query instance list api.

This API is used to perform asynchronous operation, and delays may occur when reclaiming partial resources. You can query by using the query instance list API (https://www.tencentcloud.com/document/api/236/15872?from_cn_redirect=1) with specified instance InstanceId and status Status as [5,6,7]. Among them, 5 represents isolated, 6 represents offline, and 7 represents Offline. If the return instance is empty, all instance resources have been released.

Note that after the instance goes offline, relevant resources and data cannot be recovered. Proceed with caution.
     * @param {OfflineIsolatedInstancesRequest} req
     * @param {function(string, OfflineIsolatedInstancesResponse):void} cb
     * @public
     */
    OfflineIsolatedInstances(req, cb) {
        let resp = new OfflineIsolatedInstancesResponse();
        this.request("OfflineIsolatedInstances", req, resp, cb);
    }

    /**
     * This API is used to create an audit log file for a TencentDB instance.
     * @param {CreateAuditLogFileRequest} req
     * @param {function(string, CreateAuditLogFileResponse):void} cb
     * @public
     */
    CreateAuditLogFile(req, cb) {
        let resp = new CreateAuditLogFileResponse();
        this.request("CreateAuditLogFile", req, resp, cb);
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
     * This API is used to query the rollback task detail of a cloud database instance.
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
     * This API is used to query the parameter template list.
Description: The parameter template is a common component, effective across all regions once configured. For api calls, Guangzhou or Singapore is available to configure region.
     * @param {DescribeParamTemplatesRequest} req
     * @param {function(string, DescribeParamTemplatesResponse):void} cb
     * @public
     */
    DescribeParamTemplates(req, cb) {
        let resp = new DescribeParamTemplatesResponse();
        this.request("DescribeParamTemplates", req, resp, cb);
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
     * This API is used to query database backup configuration info.
     * @param {DescribeBackupConfigRequest} req
     * @param {function(string, DescribeBackupConfigResponse):void} cb
     * @public
     */
    DescribeBackupConfig(req, cb) {
        let resp = new DescribeBackupConfigResponse();
        this.request("DescribeBackupConfig", req, resp, cb);
    }

    /**
     * This API is used to enable data storage encryption for instance and support users to specify custom keys.

Note that before enabling data storage encryption for instance, perform the following operations:

1. Perform instance initialization (https://www.tencentcloud.com/document/api/236/15873?from_cn_redirect=1).

2. Enable the KMS service (https://console.cloud.tencent.com/kms2).

3. Grant the cloud database (MySQL) permission to access the KMS key (https://console.cloud.tencent.com/cam/role). The role name is MySQL_QCSRole and the preset policy name is QcloudAccessForMySQLRole.
4. Closing is not allowed after encryption being enabled.

This API may take up to 10s, and the client may timeout. If the API call returns InternalError, please call [DescribeDBInstanceInfo](https://www.tencentcloud.com/document/product/236/44160?from_cn_redirect=1) to confirm whether backend encryption is successfully enabled. After calling, if the parameter Encryption is YES, it means activation is successful.
     * @param {OpenDBInstanceEncryptionRequest} req
     * @param {function(string, OpenDBInstanceEncryptionResponse):void} cb
     * @public
     */
    OpenDBInstanceEncryption(req, cb) {
        let resp = new OpenDBInstanceEncryptionResponse();
        this.request("OpenDBInstanceEncryption", req, resp, cb);
    }

    /**
     * This API is used to query the instance version upgrade validation task.
     * @param {DescribeInstanceUpgradeCheckJobRequest} req
     * @param {function(string, DescribeInstanceUpgradeCheckJobResponse):void} cb
     * @public
     */
    DescribeInstanceUpgradeCheckJob(req, cb) {
        let resp = new DescribeInstanceUpgradeCheckJobResponse();
        this.request("DescribeInstanceUpgradeCheckJob", req, resp, cb);
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
     * This API is used to query audit policies of cloud database instances.
     * @param {DescribeAuditPoliciesRequest} req
     * @param {function(string, DescribeAuditPoliciesResponse):void} cb
     * @public
     */
    DescribeAuditPolicies(req, cb) {
        let resp = new DescribeAuditPoliciesResponse();
        this.request("DescribeAuditPolicies", req, resp, cb);
    }

    /**
     * This API is used to delete a database in a cloud database instance.
     * @param {DeleteDatabaseRequest} req
     * @param {function(string, DeleteDatabaseResponse):void} cb
     * @public
     */
    DeleteDatabase(req, cb) {
        let resp = new DeleteDatabaseResponse();
        this.request("DeleteDatabase", req, resp, cb);
    }

    /**
     * This API is used to access tag information of the instance for cloud databases.
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
     * This API is used to create a database in a TencentDB instance.
     * @param {CreateDatabaseRequest} req
     * @param {function(string, CreateDatabaseResponse):void} cb
     * @public
     */
    CreateDatabase(req, cb) {
        let resp = new CreateDatabaseResponse();
        this.request("CreateDatabase", req, resp, cb);
    }

    /**
     * This API is used to query the CPU Elastic Scaling information of an instance.
     * @param {DescribeCPUExpandStrategyInfoRequest} req
     * @param {function(string, DescribeCPUExpandStrategyInfoResponse):void} cb
     * @public
     */
    DescribeCPUExpandStrategyInfo(req, cb) {
        let resp = new DescribeCPUExpandStrategyInfoResponse();
        this.request("DescribeCPUExpandStrategyInfo", req, resp, cb);
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
     * This API is used to renew cloud database instances. It supports yearly/monthly subscription instances. Pay-as-you-go instances can be renewed as yearly/monthly subscription instances through this API.
     * @param {RenewDBInstanceRequest} req
     * @param {function(string, RenewDBInstanceResponse):void} cb
     * @public
     */
    RenewDBInstance(req, cb) {
        let resp = new RenewDBInstanceResponse();
        this.request("RenewDBInstance", req, resp, cb);
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
     * This API is used to query the permission information supported by a cloud database account.
     * @param {DescribeAccountPrivilegesRequest} req
     * @param {function(string, DescribeAccountPrivilegesResponse):void} cb
     * @public
     */
    DescribeAccountPrivileges(req, cb) {
        let resp = new DescribeAccountPrivilegesResponse();
        this.request("DescribeAccountPrivileges", req, resp, cb);
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
     * This API is used to restore isolated cloud database instances. It is only used for de-isolating pay-as-you-go instances. For monthly subscription instances, please use RenewDBInstance.
     * @param {ReleaseIsolatedDBInstancesRequest} req
     * @param {function(string, ReleaseIsolatedDBInstancesResponse):void} cb
     * @public
     */
    ReleaseIsolatedDBInstances(req, cb) {
        let resp = new ReleaseIsolatedDBInstancesResponse();
        this.request("ReleaseIsolatedDBInstances", req, resp, cb);
    }

    /**
     * This API is used to create a clone instance from the source instance. You can specify a physical backup file or a rollback time point for the clone instance.
     * @param {CreateCloneInstanceRequest} req
     * @param {function(string, CreateCloneInstanceResponse):void} cb
     * @public
     */
    CreateCloneInstance(req, cb) {
        let resp = new CreateCloneInstanceResponse();
        this.request("CreateCloneInstance", req, resp, cb);
    }

    /**
     * This API is used to modify the service configurations for a TencentDB audit policy, including the audit log retention period.
     * @param {ModifyAuditConfigRequest} req
     * @param {function(string, ModifyAuditConfigResponse):void} cb
     * @public
     */
    ModifyAuditConfig(req, cb) {
        let resp = new ModifyAuditConfigResponse();
        this.request("ModifyAuditConfig", req, resp, cb);
    }

    /**
     * This API is used to modify the password complexity of a cloud database instance.
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
     * This API is used to delete audit rule templates.
     * @param {DeleteAuditRuleTemplatesRequest} req
     * @param {function(string, DeleteAuditRuleTemplatesResponse):void} cb
     * @public
     */
    DeleteAuditRuleTemplates(req, cb) {
        let resp = new DeleteAuditRuleTemplatesResponse();
        this.request("DeleteAuditRuleTemplates", req, resp, cb);
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
     * This API is used to query database proxy detailed information.
     * @param {DescribeCdbProxyInfoRequest} req
     * @param {function(string, DescribeCdbProxyInfoResponse):void} cb
     * @public
     */
    DescribeCdbProxyInfo(req, cb) {
        let resp = new DescribeCdbProxyInfoResponse();
        this.request("DescribeCdbProxyInfo", req, resp, cb);
    }

    /**
     * This API is used to create a parameter template.
Description: The parameter template is a common component, effective across all regions once configured. For api calls, Guangzhou or Singapore is available to configure region.
     * @param {CreateParamTemplateRequest} req
     * @param {function(string, CreateParamTemplateResponse):void} cb
     * @public
     */
    CreateParamTemplate(req, cb) {
        let resp = new CreateParamTemplateResponse();
        this.request("CreateParamTemplate", req, resp, cb);
    }

    /**
     * This API is used to create pay-as-you-go instances. You can create a cloud database instance by inputting the instance specification, MySQL version number, quantity, etc. It supports the creation of primary instances, disaster recovery instances, and read-only instances.

This API is an async API. You can also use the API for the query (https://www.tencentcloud.com/document/api/236/15872?from_cn_redirect=1) to check the instance details. When the instance Status is 1 and TaskStatus is 0, it means the instance has been delivered successfully.

1. First, please use the API for the query (https://www.tencentcloud.com/document/api/236/17229?from_cn_redirect=1) to obtain the purchasable specifications of cloud databases, then please use the API for the query (https://www.tencentcloud.com/document/api/236/18566?from_cn_redirect=1) to query the instance selling price.
2. Supports a maximum of 100 instances created at a time, with a maximum duration of 36 months;
3. Support creating MySQL 5.5, MySQL 5.6, MySQL 5.7, and MySQL 8.0 versions.
4. Support creating primary instances, disaster recovery instances, and read-only instances.
     * @param {CreateDBInstanceHourRequest} req
     * @param {function(string, CreateDBInstanceHourResponse):void} cb
     * @public
     */
    CreateDBInstanceHour(req, cb) {
        let resp = new CreateDBInstanceHourResponse();
        this.request("CreateDBInstanceHour", req, resp, cb);
    }

    /**
     * This API is used to add a maintenance time window for cloud database instances to specify which time periods allow automatic execution of access operations.
     * @param {AddTimeWindowRequest} req
     * @param {function(string, AddTimeWindowResponse):void} cb
     * @public
     */
    AddTimeWindow(req, cb) {
        let resp = new AddTimeWindowResponse();
        this.request("AddTimeWindow", req, resp, cb);
    }

    /**
     * This API is used to query instance support proxy version and parameters.
     * @param {DescribeProxySupportParamRequest} req
     * @param {function(string, DescribeProxySupportParamResponse):void} cb
     * @public
     */
    DescribeProxySupportParam(req, cb) {
        let resp = new DescribeProxySupportParamResponse();
        this.request("DescribeProxySupportParam", req, resp, cb);
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
     * This API is used to create a database backup.
     * @param {CreateBackupRequest} req
     * @param {function(string, CreateBackupResponse):void} cb
     * @public
     */
    CreateBackup(req, cb) {
        let resp = new CreateBackupResponse();
        this.request("CreateBackup", req, resp, cb);
    }

    /**
     * This API is used to modify the IP and port number of a cloud database instance. It can also perform basic network to VPC network and subnet change under VPC network.
     * @param {ModifyDBInstanceVipVportRequest} req
     * @param {function(string, ModifyDBInstanceVipVportResponse):void} cb
     * @public
     */
    ModifyDBInstanceVipVport(req, cb) {
        let resp = new ModifyDBInstanceVipVportResponse();
        this.request("ModifyDBInstanceVipVport", req, resp, cb);
    }

    /**
     * This API is used to query the configuration message of a cloud database instance, including sync mode and deployment mode.
     * @param {DescribeDBInstanceConfigRequest} req
     * @param {function(string, DescribeDBInstanceConfigResponse):void} cb
     * @public
     */
    DescribeDBInstanceConfig(req, cb) {
        let resp = new DescribeDBInstanceConfigResponse();
        this.request("DescribeDBInstanceConfig", req, resp, cb);
    }

    /**
     * This API is used to query the password complexity parameter list of the instance.
     * @param {DescribeInstancePasswordComplexityRequest} req
     * @param {function(string, DescribeInstancePasswordComplexityResponse):void} cb
     * @public
     */
    DescribeInstancePasswordComplexity(req, cb) {
        let resp = new DescribeInstancePasswordComplexityResponse();
        this.request("DescribeInstancePasswordComplexity", req, resp, cb);
    }

    /**
     * This API is used to add a proxy address for database proxy.
     * @param {CreateCdbProxyAddressRequest} req
     * @param {function(string, CreateCdbProxyAddressResponse):void} cb
     * @public
     */
    CreateCdbProxyAddress(req, cb) {
        let resp = new CreateCdbProxyAddressResponse();
        this.request("CreateCdbProxyAddress", req, resp, cb);
    }

    /**
     * This API is used to delete an audit policy.
     * @param {DeleteAuditPolicyRequest} req
     * @param {function(string, DeleteAuditPolicyResponse):void} cb
     * @public
     */
    DeleteAuditPolicy(req, cb) {
        let resp = new DeleteAuditPolicyResponse();
        this.request("DeleteAuditPolicy", req, resp, cb);
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
     * This API is used to obtain the slow query log of a cloud database instance.
Description: If the data volume is too large in a single query, it may lead to response timeout. We recommend shortening the query time range per request, such as one hour, to avoid timeout.
     * @param {DescribeSlowLogsRequest} req
     * @param {function(string, DescribeSlowLogsResponse):void} cb
     * @public
     */
    DescribeSlowLogs(req, cb) {
        let resp = new DescribeSlowLogsResponse();
        this.request("DescribeSlowLogs", req, resp, cb);
    }

    /**
     * This API is used to modify the local binlog retention policy of an instance.
     * @param {ModifyLocalBinlogConfigRequest} req
     * @param {function(string, ModifyLocalBinlogConfigResponse):void} cb
     * @public
     */
    ModifyLocalBinlogConfig(req, cb) {
        let resp = new ModifyLocalBinlogConfigResponse();
        this.request("ModifyLocalBinlogConfig", req, resp, cb);
    }

    /**
     * This API is used to create a cloud database instance with an annual/monthly subscription, including primary instance, disaster recovery instance, and read-only instance. You can create a cloud database instance by importing instance specification, MySQL version number, purchase period, and quantity information.

This API is an asynchronous API. You can also use the query instance list API (https://www.tencentcloud.com/document/api/236/15872?from_cn_redirect=1) to query the instance details. When the Status of the instance is 1 and TaskStatus is 0, it means the instance has been delivered successfully.

1. First, please use the API for the query (https://www.tencentcloud.com/document/api/236/17229?from_cn_redirect=1) to obtain the purchasable specifications of cloud databases, then please use the API for the query (https://www.tencentcloud.com/document/api/236/18566?from_cn_redirect=1) to query database price.
2. You can create up to 100 instances at a time, with a maximum instance duration of 36 months.
3. Support creating MySQL 5.5, MySQL 5.6, MySQL 5.7, and MySQL 8.0 versions.
4. Support creating primary instance, read-only instance, disaster recovery instance.
5. When ParamTemplateId or AlarmPolicyList is specified in the input parameters, you need to upgrade the SDK to the latest version to support it.
     * @param {CreateDBInstanceRequest} req
     * @param {function(string, CreateDBInstanceResponse):void} cb
     * @public
     */
    CreateDBInstance(req, cb) {
        let resp = new CreateDBInstanceResponse();
        this.request("CreateDBInstance", req, resp, cb);
    }

    /**
     * This API is used to modify parameter templates.
Description: The parameter template is a common component, effective across all regions once configured. For api calls, Guangzhou or Singapore is available to configure region.
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
     * This API is used to query the default encryption status of an instance backup.
     * @param {DescribeBackupEncryptionStatusRequest} req
     * @param {function(string, DescribeBackupEncryptionStatusResponse):void} cb
     * @public
     */
    DescribeBackupEncryptionStatus(req, cb) {
        let resp = new DescribeBackupEncryptionStatusResponse();
        this.request("DescribeBackupEncryptionStatus", req, resp, cb);
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
     * This API is used to terminate a data import task.
Description: Only incomplete import jobs support termination, and the executed SQL part is retained after termination.
     * @param {StopDBImportJobRequest} req
     * @param {function(string, StopDBImportJobResponse):void} cb
     * @public
     */
    StopDBImportJob(req, cb) {
        let resp = new StopDBImportJobResponse();
        this.request("StopDBImportJob", req, resp, cb);
    }

    /**
     * This API is used to perform aggregation statistics on specified data columns in audit log result sets with different filter criteria.
     * @param {AnalyzeAuditLogsRequest} req
     * @param {function(string, AnalyzeAuditLogsResponse):void} cb
     * @public
     */
    AnalyzeAuditLogs(req, cb) {
        let resp = new AnalyzeAuditLogsResponse();
        this.request("AnalyzeAuditLogs", req, resp, cb);
    }

    /**
     * This API is used to create cloud database accounts. It requires specifying a new account name and domain name as well as the corresponding password. You can also set the account's remark information and maximum number of available connections.
     * @param {CreateAccountsRequest} req
     * @param {function(string, CreateAccountsResponse):void} cb
     * @public
     */
    CreateAccounts(req, cb) {
        let resp = new CreateAccountsResponse();
        this.request("CreateAccounts", req, resp, cb);
    }

    /**
     * This API is used to adjust database proxy configuration.
     * @param {AdjustCdbProxyRequest} req
     * @param {function(string, AdjustCdbProxyResponse):void} cb
     * @public
     */
    AdjustCdbProxy(req, cb) {
        let resp = new AdjustCdbProxyResponse();
        this.request("AdjustCdbProxy", req, resp, cb);
    }

    /**
     * This API is used to modify the sync method of an instance.
Description: This API can be called only by an exclusive cluster. This API is about to go offline.
     * @param {ModifyProtectModeRequest} req
     * @param {function(string, ModifyProtectModeResponse):void} cb
     * @public
     */
    ModifyProtectMode(req, cb) {
        let resp = new ModifyProtectModeResponse();
        this.request("ModifyProtectMode", req, resp, cb);
    }

    /**
     * This API is used to upgrade the version of a cloud database instance. Supported instance types include primary instance, disaster recovery instance, and read-only instance. Before upgrade, submit an upgrade check task via SubmitInstanceUpgradeCheckJob (https://www.tencentcloud.com/document/product/236/110468?from_cn_redirect=1).
     * @param {UpgradeDBInstanceEngineVersionRequest} req
     * @param {function(string, UpgradeDBInstanceEngineVersionResponse):void} cb
     * @public
     */
    UpgradeDBInstanceEngineVersion(req, cb) {
        let resp = new UpgradeDBInstanceEngineVersionResponse();
        this.request("UpgradeDBInstanceEngineVersion", req, resp, cb);
    }

    /**
     * This API is used to query the audit log files of a TencentDB instance.
     * @param {DescribeAuditLogFilesRequest} req
     * @param {function(string, DescribeAuditLogFilesResponse):void} cb
     * @public
     */
    DescribeAuditLogFiles(req, cb) {
        let resp = new DescribeAuditLogFilesResponse();
        this.request("DescribeAuditLogFiles", req, resp, cb);
    }

    /**
     * This API is used to query the decryption key of a backup file.
     * @param {DescribeBackupDecryptionKeyRequest} req
     * @param {function(string, DescribeBackupDecryptionKeyResponse):void} cb
     * @public
     */
    DescribeBackupDecryptionKey(req, cb) {
        let resp = new DescribeBackupDecryptionKeyResponse();
        this.request("DescribeBackupDecryptionKey", req, resp, cb);
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
     * This API is used to query backup statistics, return the occupied capacity of backups by instance as well as the count and capacity of data backup and log backup for each instance (in bytes).
     * @param {DescribeBackupSummariesRequest} req
     * @param {function(string, DescribeBackupSummariesResponse):void} cb
     * @public
     */
    DescribeBackupSummaries(req, cb) {
        let resp = new DescribeBackupSummariesResponse();
        this.request("DescribeBackupSummaries", req, resp, cb);
    }

    /**
     * This API is used to query parameter template details.
Description: The parameter template is a common component, effective across all regions once configured. For api calls, Guangzhou or Singapore is available to configure region.
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
     * This API is used to switch a cloud database disaster recovery instance to primary instance. Note that the request must be sent to the region where the disaster recovery instance is located.
     * @param {SwitchDrInstanceToMasterRequest} req
     * @param {function(string, SwitchDrInstanceToMasterResponse):void} cb
     * @public
     */
    SwitchDrInstanceToMaster(req, cb) {
        let resp = new SwitchDrInstanceToMasterResponse();
        this.request("SwitchDrInstanceToMaster", req, resp, cb);
    }

    /**
     * This API is used to delete CDB accounts.
     * @param {DeleteAccountsRequest} req
     * @param {function(string, DeleteAccountsResponse):void} cb
     * @public
     */
    DeleteAccounts(req, cb) {
        let resp = new DeleteAccountsResponse();
        this.request("DeleteAccounts", req, resp, cb);
    }

    /**
     * This API is used to query the basic information of an instance, including instance ID, instance name, and whether encryption is enabled. Querying read-only instances is not supported.
     * @param {DescribeDBInstanceInfoRequest} req
     * @param {function(string, DescribeDBInstanceInfoResponse):void} cb
     * @public
     */
    DescribeDBInstanceInfo(req, cb) {
        let resp = new DescribeDBInstanceInfoResponse();
        this.request("DescribeDBInstanceInfo", req, resp, cb);
    }

    /**
     * This API is used to query cloud disk edition instance info.
     * @param {DescribeClusterInfoRequest} req
     * @param {function(string, DescribeClusterInfoResponse):void} cb
     * @public
     */
    DescribeClusterInfo(req, cb) {
        let resp = new DescribeClusterInfoResponse();
        this.request("DescribeClusterInfo", req, resp, cb);
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
     * This API is used to disable database proxy.
     * @param {CloseCdbProxyAddressRequest} req
     * @param {function(string, CloseCdbProxyAddressResponse):void} cb
     * @public
     */
    CloseCdbProxyAddress(req, cb) {
        let resp = new CloseCdbProxyAddressResponse();
        this.request("CloseCdbProxyAddress", req, resp, cb);
    }

    /**
     * This API is used to delete database backups. It only supports deleting manually initiated backups.
     * @param {DeleteBackupRequest} req
     * @param {function(string, DeleteBackupResponse):void} cb
     * @public
     */
    DeleteBackup(req, cb) {
        let resp = new DeleteBackupResponse();
        this.request("DeleteBackup", req, resp, cb);
    }

    /**
     * This API is used to change the mode of a cloud database.
     * @param {ModifyDBInstanceModesRequest} req
     * @param {function(string, ModifyDBInstanceModesResponse):void} cb
     * @public
     */
    ModifyDBInstanceModes(req, cb) {
        let resp = new ModifyDBInstanceModesResponse();
        this.request("ModifyDBInstanceModes", req, resp, cb);
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
     * This API is used to modify the proxy address description.
     * @param {ModifyCdbProxyAddressDescRequest} req
     * @param {function(string, ModifyCdbProxyAddressDescResponse):void} cb
     * @public
     */
    ModifyCdbProxyAddressDesc(req, cb) {
        let resp = new ModifyCdbProxyAddressDescResponse();
        this.request("ModifyCdbProxyAddressDesc", req, resp, cb);
    }

    /**
     * This API is used to enable RO replication and sync data from the primary instance.
     * @param {StartReplicationRequest} req
     * @param {function(string, StartReplicationResponse):void} cb
     * @public
     */
    StartReplication(req, cb) {
        let resp = new StartReplicationResponse();
        this.request("StartReplication", req, resp, cb);
    }

    /**
     * This API is used to adjust the database proxy address configuration.
     * @param {AdjustCdbProxyAddressRequest} req
     * @param {function(string, AdjustCdbProxyAddressResponse):void} cb
     * @public
     */
    AdjustCdbProxyAddress(req, cb) {
        let resp = new AdjustCdbProxyAddressResponse();
        this.request("AdjustCdbProxyAddress", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of audit instances.
     * @param {DescribeAuditInstanceListRequest} req
     * @param {function(string, DescribeAuditInstanceListResponse):void} cb
     * @public
     */
    DescribeAuditInstanceList(req, cb) {
        let resp = new DescribeAuditInstanceListResponse();
        this.request("DescribeAuditInstanceList", req, resp, cb);
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
     * Manually refresh rotation passwords
     * @param {ResetPasswordRequest} req
     * @param {function(string, ResetPasswordResponse):void} cb
     * @public
     */
    ResetPassword(req, cb) {
        let resp = new ResetPasswordResponse();
        this.request("ResetPassword", req, resp, cb);
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
     * This API is used to disable the database proxy.
     * @param {CloseCDBProxyRequest} req
     * @param {function(string, CloseCDBProxyResponse):void} cb
     * @public
     */
    CloseCDBProxy(req, cb) {
        let resp = new CloseCDBProxyResponse();
        this.request("CloseCDBProxy", req, resp, cb);
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
     * This API is used to modify the maximum number of available connections for a cloud database account.
     * @param {ModifyAccountMaxUserConnectionsRequest} req
     * @param {function(string, ModifyAccountMaxUserConnectionsResponse):void} cb
     * @public
     */
    ModifyAccountMaxUserConnections(req, cb) {
        let resp = new ModifyAccountMaxUserConnectionsResponse();
        this.request("ModifyAccountMaxUserConnections", req, resp, cb);
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
     * This API is used to query the expected time required to restart a cloud database instance.
     * @param {DescribeDBInstanceRebootTimeRequest} req
     * @param {function(string, DescribeDBInstanceRebootTimeResponse):void} cb
     * @public
     */
    DescribeDBInstanceRebootTime(req, cb) {
        let resp = new DescribeDBInstanceRebootTimeResponse();
        this.request("DescribeDBInstanceRebootTime", req, resp, cb);
    }

    /**
     * This API is used to query the list of TencentDB for MySQL instances. It supports filtering instances by conditions such as project ID, instance ID, access address, and instance status. It also supports querying the list of information about primary instances, disaster recovery instances, and read-only instances.
This API is used to return the availability zone (AZ) status during purchase, which does not change along with the proactive HA switch. If you want to know the AZ status in real time, query through the [DescribeDBInstanceConfig](https://www.tencentcloud.com/document/product/236/17491?from_cn_redirect=1) API.
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
     * This API is used to query the price of purchasing or renewing a cloud database instance. It supports querying the price of pay-as-you-go or yearly/monthly subscription. You can input instance type, purchase period, purchase quantity, memory size, disk capacity and availability zone information to query instance price. You can input instance name to query instance renewal price.

Note: To request a price for a certain region, please use the access point of the corresponding region. For access point information, please refer to the <a href="https://www.tencentcloud.com/document/api/236/15832?from_cn_redirect=1">service address</a> document. For example, to request a price for the Guangzhou region, send the request to: cdb.ap-guangzhou.tencentcloudapi.com. Likewise, for the Shanghai region, send the request to: cdb.ap-shanghai.tencentcloudapi.com.
     * @param {DescribeDBPriceRequest} req
     * @param {function(string, DescribeDBPriceResponse):void} cb
     * @public
     */
    DescribeDBPrice(req, cb) {
        let resp = new DescribeDBPriceResponse();
        this.request("DescribeDBPrice", req, resp, cb);
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
     * This API is used to query SSL activation status. If SSL has been enabled, it will synchronously return the certificate download URL.
     * @param {DescribeSSLStatusRequest} req
     * @param {function(string, DescribeSSLStatusResponse):void} cb
     * @public
     */
    DescribeSSLStatus(req, cb) {
        let resp = new DescribeSSLStatusResponse();
        this.request("DescribeSSLStatus", req, resp, cb);
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
     * This API is used to enable password rotation.
     * @param {CreateRotationPasswordRequest} req
     * @param {function(string, CreateRotationPasswordResponse):void} cb
     * @public
     */
    CreateRotationPassword(req, cb) {
        let resp = new CreateRotationPasswordResponse();
        this.request("CreateRotationPassword", req, resp, cb);
    }

    /**
     * This API is used to create a cloud database data import task.
Note that the file for the data import task must be uploaded to Tencent Cloud in advance. The user must perform file import on the console.
     * @param {CreateDBImportJobRequest} req
     * @param {function(string, CreateDBImportJobResponse):void} cb
     * @public
     */
    CreateDBImportJob(req, cb) {
        let resp = new CreateDBImportJobResponse();
        this.request("CreateDBImportJob", req, resp, cb);
    }

    /**
     * This API is used to query ALL account information of the cloud database.
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
     * This API is used to set the encryption status of an instance backup.
     * @param {ModifyBackupEncryptionStatusRequest} req
     * @param {function(string, ModifyBackupEncryptionStatusResponse):void} cb
     * @public
     */
    ModifyBackupEncryptionStatus(req, cb) {
        let resp = new ModifyBackupEncryptionStatusResponse();
        this.request("ModifyBackupEncryptionStatus", req, resp, cb);
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
     * This API is used to modify audit rule templates.
     * @param {ModifyAuditRuleTemplatesRequest} req
     * @param {function(string, ModifyAuditRuleTemplatesResponse):void} cb
     * @public
     */
    ModifyAuditRuleTemplates(req, cb) {
        let resp = new ModifyAuditRuleTemplatesResponse();
        this.request("ModifyAuditRuleTemplates", req, resp, cb);
    }

    /**
     * This API is used to submit an instance version upgrade validation task.
     * @param {SubmitInstanceUpgradeCheckJobRequest} req
     * @param {function(string, SubmitInstanceUpgradeCheckJobResponse):void} cb
     * @public
     */
    SubmitInstanceUpgradeCheckJob(req, cb) {
        let resp = new SubmitInstanceUpgradeCheckJobResponse();
        this.request("SubmitInstanceUpgradeCheckJob", req, resp, cb);
    }

    /**
     * This API is used to close instance account password rotation.
     * @param {DeleteRotationPasswordRequest} req
     * @param {function(string, DeleteRotationPasswordResponse):void} cb
     * @public
     */
    DeleteRotationPassword(req, cb) {
        let resp = new DeleteRotationPasswordResponse();
        this.request("DeleteRotationPassword", req, resp, cb);
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
     * This API is used to search for instance slow logs under usage conditions. Only allow viewing slow logs within one month.
During use, pay attention: a single slow log may be too large, causing the entire http request return content to be too large, furthermore leading to API timeout. Once timed out, narrow down the Limit parameter value when querying, thereby reducing the size and enabling the API to return content promptly.
     * @param {DescribeSlowLogDataRequest} req
     * @param {function(string, DescribeSlowLogDataResponse):void} cb
     * @public
     */
    DescribeSlowLogData(req, cb) {
        let resp = new DescribeSlowLogDataResponse();
        this.request("DescribeSlowLogData", req, resp, cb);
    }

    /**
     * This API is used to activate audit service for CDB instance.
     * @param {OpenAuditServiceRequest} req
     * @param {function(string, OpenAuditServiceResponse):void} cb
     * @public
     */
    OpenAuditService(req, cb) {
        let resp = new OpenAuditServiceResponse();
        this.request("OpenAuditService", req, resp, cb);
    }

    /**
     * This API is used to delete an audit log file of a TencentDB instance.
     * @param {DeleteAuditLogFileRequest} req
     * @param {function(string, DeleteAuditLogFileResponse):void} cb
     * @public
     */
    DeleteAuditLogFile(req, cb) {
        let resp = new DeleteAuditLogFileResponse();
        this.request("DeleteAuditLogFile", req, resp, cb);
    }

    /**
     * This API is used to query the information of audit rule templates.
     * @param {DescribeAuditRuleTemplatesRequest} req
     * @param {function(string, DescribeAuditRuleTemplatesResponse):void} cb
     * @public
     */
    DescribeAuditRuleTemplates(req, cb) {
        let resp = new DescribeAuditRuleTemplatesResponse();
        this.request("DescribeAuditRuleTemplates", req, resp, cb);
    }

    /**
     * This API is used to modify database backup configuration.
     * @param {ModifyBackupConfigRequest} req
     * @param {function(string, ModifyBackupConfigResponse):void} cb
     * @public
     */
    ModifyBackupConfig(req, cb) {
        let resp = new ModifyBackupConfigResponse();
        this.request("ModifyBackupConfig", req, resp, cb);
    }

    /**
     * This API is used to create audit rules no longer supported.

This API is used to query audit rules in current region.
     * @param {DescribeAuditRulesRequest} req
     * @param {function(string, DescribeAuditRulesResponse):void} cb
     * @public
     */
    DescribeAuditRules(req, cb) {
        let resp = new DescribeAuditRulesResponse();
        this.request("DescribeAuditRules", req, resp, cb);
    }

    /**
     * This API is used to query the configuration information of a remote TencentDB instance backup.
     * @param {DescribeRemoteBackupConfigRequest} req
     * @param {function(string, DescribeRemoteBackupConfigResponse):void} cb
     * @public
     */
    DescribeRemoteBackupConfig(req, cb) {
        let resp = new DescribeRemoteBackupConfigResponse();
        this.request("DescribeRemoteBackupConfig", req, resp, cb);
    }

    /**
     * This API is used to modify the database proxy address VPC information.
     * @param {ModifyCdbProxyAddressVipAndVPortRequest} req
     * @param {function(string, ModifyCdbProxyAddressVipAndVPortResponse):void} cb
     * @public
     */
    ModifyCdbProxyAddressVipAndVPort(req, cb) {
        let resp = new ModifyCdbProxyAddressVipAndVPortResponse();
        this.request("ModifyCdbProxyAddressVipAndVPort", req, resp, cb);
    }

    /**
     * This API is used to query the configuration of slow log and error log delivery to CLS for an instance. It filters out the present instance log delivery configuration to CLS by AppId, Region, and instance ID.
     * @param {DescribeDBInstanceLogToCLSRequest} req
     * @param {function(string, DescribeDBInstanceLogToCLSResponse):void} cb
     * @public
     */
    DescribeDBInstanceLogToCLS(req, cb) {
        let resp = new DescribeDBInstanceLogToCLSResponse();
        this.request("DescribeDBInstanceLogToCLS", req, resp, cb);
    }

    /**
     * This API is used to query the change history of rule templates.
     * @param {DescribeAuditRuleTemplateModifyHistoryRequest} req
     * @param {function(string, DescribeAuditRuleTemplateModifyHistoryResponse):void} cb
     * @public
     */
    DescribeAuditRuleTemplateModifyHistory(req, cb) {
        let resp = new DescribeAuditRuleTemplateModifyHistoryResponse();
        this.request("DescribeAuditRuleTemplateModifyHistory", req, resp, cb);
    }

    /**
     * This API is used to create a database proxy for the primary instance.
     * @param {CreateCdbProxyRequest} req
     * @param {function(string, CreateCdbProxyResponse):void} cb
     * @public
     */
    CreateCdbProxy(req, cb) {
        let resp = new CreateCdbProxyResponse();
        this.request("CreateCdbProxy", req, resp, cb);
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
     * This API is used to manually initiate an immediate switch after database proxy configuration modification or edition upgrade.
     * @param {SwitchCDBProxyRequest} req
     * @param {function(string, SwitchCDBProxyResponse):void} cb
     * @public
     */
    SwitchCDBProxy(req, cb) {
        let resp = new SwitchCDBProxyResponse();
        this.request("SwitchCDBProxy", req, resp, cb);
    }

    /**
     * This API is used to modify the service configurations for a TencentDB instance, including the audit log retention period and the audit rules.
     * @param {ModifyAuditServiceRequest} req
     * @param {function(string, ModifyAuditServiceResponse):void} cb
     * @public
     */
    ModifyAuditService(req, cb) {
        let resp = new ModifyAuditServiceResponse();
        this.request("ModifyAuditService", req, resp, cb);
    }

    /**
     * This API is used to configure database proxy parameters.
     * @param {ModifyCdbProxyParamRequest} req
     * @param {function(string, ModifyCdbProxyParamResponse):void} cb
     * @public
     */
    ModifyCdbProxyParam(req, cb) {
        let resp = new ModifyCdbProxyParamResponse();
        this.request("ModifyCdbProxyParam", req, resp, cb);
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
     * This API is used to enable CPU Elastic Scaling, including one-time manual scale-out and automatic elastic scaling.
     * @param {StartCpuExpandRequest} req
     * @param {function(string, StartCpuExpandResponse):void} cb
     * @public
     */
    StartCpuExpand(req, cb) {
        let resp = new StartCpuExpandResponse();
        this.request("StartCpuExpand", req, resp, cb);
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
     * This API is used to delete parameter template.
Description: The parameter template is a common component, effective across all regions once configured. For api calls, Guangzhou or Singapore is available to configure region.
     * @param {DeleteParamTemplateRequest} req
     * @param {function(string, DeleteParamTemplateResponse):void} cb
     * @public
     */
    DeleteParamTemplate(req, cb) {
        let resp = new DeleteParamTemplateResponse();
        this.request("DeleteParamTemplate", req, resp, cb);
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
     * This API is used to query all RO groups of a cloud database instance.
     * @param {DescribeRoGroupsRequest} req
     * @param {function(string, DescribeRoGroupsResponse):void} cb
     * @public
     */
    DescribeRoGroups(req, cb) {
        let resp = new DescribeRoGroupsResponse();
        this.request("DescribeRoGroups", req, resp, cb);
    }

    /**
     * This API is used to query the clone task list of a user instance.
     * @param {DescribeCloneListRequest} req
     * @param {function(string, DescribeCloneListResponse):void} cb
     * @public
     */
    DescribeCloneList(req, cb) {
        let resp = new DescribeCloneListResponse();
        this.request("DescribeCloneList", req, resp, cb);
    }

    /**
     * This API is used to query event information of instance occurrence.
     * @param {DescribeInstanceAlarmEventsRequest} req
     * @param {function(string, DescribeInstanceAlarmEventsResponse):void} cb
     * @public
     */
    DescribeInstanceAlarmEvents(req, cb) {
        let resp = new DescribeInstanceAlarmEventsResponse();
        this.request("DescribeInstanceAlarmEvents", req, resp, cb);
    }

    /**
     * This API is used to upgrade or downgrade the configuration of a cloud database instance. Supported instance types include primary instance, disaster recovery instance and read-only instance. If you need to migrate business, fill in the instance specification (CPU, memory), otherwise the system will use the minimum allowed specification by default.
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req, cb) {
        let resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
    }

    /**
     * This API is used to close the SSL connectivity function.
     * @param {CloseSSLRequest} req
     * @param {function(string, CloseSSLResponse):void} cb
     * @public
     */
    CloseSSL(req, cb) {
        let resp = new CloseSSLResponse();
        this.request("CloseSSL", req, resp, cb);
    }

    /**
     * This API is used to upgrade the database proxy version.
     * @param {UpgradeCDBProxyVersionRequest} req
     * @param {function(string, UpgradeCDBProxyVersionResponse):void} cb
     * @public
     */
    UpgradeCDBProxyVersion(req, cb) {
        let resp = new UpgradeCDBProxyVersionResponse();
        this.request("UpgradeCDBProxyVersion", req, resp, cb);
    }

    /**
     * This API is used to modify the configuration information of a remote TencentDB instance backup.
     * @param {ModifyRemoteBackupConfigRequest} req
     * @param {function(string, ModifyRemoteBackupConfigResponse):void} cb
     * @public
     */
    ModifyRemoteBackupConfig(req, cb) {
        let resp = new ModifyRemoteBackupConfigResponse();
        this.request("ModifyRemoteBackupConfig", req, resp, cb);
    }

    /**
     * This API is used to delete the maintenance time window of a cloud database instance. After deleting the instance maintenance window, the default maintenance period is 03:00-04:00 daily with a data validation delay threshold of 10 seconds. When switching to a new instance during the maintenance time window, the switch is performed by default at 03:00-04:00.
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
