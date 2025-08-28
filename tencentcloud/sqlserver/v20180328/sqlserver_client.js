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
const DescribeCrossBackupStatisticalResponse = models.DescribeCrossBackupStatisticalResponse;
const DealInfo = models.DealInfo;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const CrossRegionStatus = models.CrossRegionStatus;
const DescribeBackupStatisticalResponse = models.DescribeBackupStatisticalResponse;
const DeleteBackupMigrationRequest = models.DeleteBackupMigrationRequest;
const DescribeInstanceTasksResponse = models.DescribeInstanceTasksResponse;
const CreateBusinessDBInstancesResponse = models.CreateBusinessDBInstancesResponse;
const DatabaseTupleStatus = models.DatabaseTupleStatus;
const DescribeDatabasesNormalRequest = models.DescribeDatabasesNormalRequest;
const ModifyDatabasePrivilegeRequest = models.ModifyDatabasePrivilegeRequest;
const DescribeCollationTimeZoneResponse = models.DescribeCollationTimeZoneResponse;
const CreateBusinessIntelligenceFileResponse = models.CreateBusinessIntelligenceFileResponse;
const ParamRecord = models.ParamRecord;
const RollbackInstanceResponse = models.RollbackInstanceResponse;
const MigrateDB = models.MigrateDB;
const DescribeDBCharsetsResponse = models.DescribeDBCharsetsResponse;
const ModifyDBInstanceProjectResponse = models.ModifyDBInstanceProjectResponse;
const DescribeIncrementalMigrationRequest = models.DescribeIncrementalMigrationRequest;
const DescribeSpecSellStatusResponse = models.DescribeSpecSellStatusResponse;
const RestoreInstanceResponse = models.RestoreInstanceResponse;
const InstanceTask = models.InstanceTask;
const ModifyInstanceParamRequest = models.ModifyInstanceParamRequest;
const SSLConfig = models.SSLConfig;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const ModifyAccountPrivilegeResponse = models.ModifyAccountPrivilegeResponse;
const ModifyMigrationResponse = models.ModifyMigrationResponse;
const DescribeInstanceTasksRequest = models.DescribeInstanceTasksRequest;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const SpecInfo = models.SpecInfo;
const ModifyBackupNameResponse = models.ModifyBackupNameResponse;
const CreateReadOnlyDBInstancesRequest = models.CreateReadOnlyDBInstancesRequest;
const CreateBackupMigrationRequest = models.CreateBackupMigrationRequest;
const DescribeInstanceParamRecordsRequest = models.DescribeInstanceParamRecordsRequest;
const SwitchCloudInstanceHARequest = models.SwitchCloudInstanceHARequest;
const DescribeInstanceByOrdersResponse = models.DescribeInstanceByOrdersResponse;
const CreateReadOnlyDBInstancesResponse = models.CreateReadOnlyDBInstancesResponse;
const CreatePublishSubscribeResponse = models.CreatePublishSubscribeResponse;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const TerminateDBInstanceRequest = models.TerminateDBInstanceRequest;
const RestartDBInstanceRequest = models.RestartDBInstanceRequest;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const AccountPassword = models.AccountPassword;
const DeleteAccountRequest = models.DeleteAccountRequest;
const DescribeDBCharsetsRequest = models.DescribeDBCharsetsRequest;
const StartIncrementalMigrationResponse = models.StartIncrementalMigrationResponse;
const ModifyDBInstanceNetworkResponse = models.ModifyDBInstanceNetworkResponse;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const ModifyDatabaseMdfResponse = models.ModifyDatabaseMdfResponse;
const MigrateTarget = models.MigrateTarget;
const DBTDEEncrypt = models.DBTDEEncrypt;
const CreateMigrationRequest = models.CreateMigrationRequest;
const InterInstance = models.InterInstance;
const ModifyDBNameResponse = models.ModifyDBNameResponse;
const CosUploadBackupFile = models.CosUploadBackupFile;
const ModifyDBNameRequest = models.ModifyDBNameRequest;
const DescribeUpgradeInstanceCheckResponse = models.DescribeUpgradeInstanceCheckResponse;
const DescribeRestoreTimeRangeResponse = models.DescribeRestoreTimeRangeResponse;
const ModifyDatabasePrivilegeResponse = models.ModifyDatabasePrivilegeResponse;
const CreateIncrementalMigrationResponse = models.CreateIncrementalMigrationResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const ModifyDBInstanceSSLResponse = models.ModifyDBInstanceSSLResponse;
const DBPrivilege = models.DBPrivilege;
const DescribeReadOnlyGroupDetailsResponse = models.DescribeReadOnlyGroupDetailsResponse;
const ResourceTag = models.ResourceTag;
const DeleteBackupMigrationResponse = models.DeleteBackupMigrationResponse;
const DescribePublishSubscribeRequest = models.DescribePublishSubscribeRequest;
const BackupFile = models.BackupFile;
const DescribeRegularBackupPlanResponse = models.DescribeRegularBackupPlanResponse;
const InquiryPriceUpgradeDBInstanceResponse = models.InquiryPriceUpgradeDBInstanceResponse;
const ModifyMigrationRequest = models.ModifyMigrationRequest;
const CrossBackupAddr = models.CrossBackupAddr;
const RestartDBInstanceResponse = models.RestartDBInstanceResponse;
const DescribeRollbackTimeResponse = models.DescribeRollbackTimeResponse;
const DBDetail = models.DBDetail;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const ModifyBackupNameRequest = models.ModifyBackupNameRequest;
const CreateDBRequest = models.CreateDBRequest;
const RollbackInstanceRequest = models.RollbackInstanceRequest;
const DrReadableInfo = models.DrReadableInfo;
const DescribeRollbackTimeRequest = models.DescribeRollbackTimeRequest;
const DescribeIncrementalMigrationResponse = models.DescribeIncrementalMigrationResponse;
const CreateDBInstancesResponse = models.CreateDBInstancesResponse;
const DeleteAccountResponse = models.DeleteAccountResponse;
const TDEConfigAttribute = models.TDEConfigAttribute;
const SummaryDetailRes = models.SummaryDetailRes;
const ModifyDReadableRequest = models.ModifyDReadableRequest;
const DeleteBusinessIntelligenceFileRequest = models.DeleteBusinessIntelligenceFileRequest;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const ModifyBackupStrategyResponse = models.ModifyBackupStrategyResponse;
const SlaveZones = models.SlaveZones;
const StartInstanceXEventResponse = models.StartInstanceXEventResponse;
const DescribeDBInstanceInterResponse = models.DescribeDBInstanceInterResponse;
const ModifyPublishSubscribeNameResponse = models.ModifyPublishSubscribeNameResponse;
const DeleteIncrementalMigrationRequest = models.DeleteIncrementalMigrationRequest;
const CutXEventsResponse = models.CutXEventsResponse;
const DescribeBackupsRequest = models.DescribeBackupsRequest;
const RestoreInstanceRequest = models.RestoreInstanceRequest;
const ModifyDatabaseShrinkMDFRequest = models.ModifyDatabaseShrinkMDFRequest;
const DescribeInstanceTradeParameterResponse = models.DescribeInstanceTradeParameterResponse;
const RunMigrationRequest = models.RunMigrationRequest;
const SecurityGroupPolicy = models.SecurityGroupPolicy;
const DescribeInstanceByOrdersRequest = models.DescribeInstanceByOrdersRequest;
const ModifyMaintenanceSpanResponse = models.ModifyMaintenanceSpanResponse;
const InquiryPriceCreateDBInstancesRequest = models.InquiryPriceCreateDBInstancesRequest;
const StartIncrementalMigrationRequest = models.StartIncrementalMigrationRequest;
const ModifyDBInstanceNetworkRequest = models.ModifyDBInstanceNetworkRequest;
const ModifyDBEncryptAttributesResponse = models.ModifyDBEncryptAttributesResponse;
const ModifyMaintenanceSpanRequest = models.ModifyMaintenanceSpanRequest;
const RecycleDBInstanceRequest = models.RecycleDBInstanceRequest;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const ModifyCloseWanIpRequest = models.ModifyCloseWanIpRequest;
const InterInstanceFlow = models.InterInstanceFlow;
const ModifyDBInstanceNoteResponse = models.ModifyDBInstanceNoteResponse;
const Parameter = models.Parameter;
const DescribeDBsResponse = models.DescribeDBsResponse;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const ModifyAccountRemarkResponse = models.ModifyAccountRemarkResponse;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DescribeCrossRegionZoneResponse = models.DescribeCrossRegionZoneResponse;
const MigrateSource = models.MigrateSource;
const DescribeProductConfigResponse = models.DescribeProductConfigResponse;
const ModifyBackupMigrationResponse = models.ModifyBackupMigrationResponse;
const ReadOnlyGroup = models.ReadOnlyGroup;
const DescribeDBsNormalResponse = models.DescribeDBsNormalResponse;
const DescribeDBsRequest = models.DescribeDBsRequest;
const CompleteExpansionRequest = models.CompleteExpansionRequest;
const ModifyDatabaseMdfRequest = models.ModifyDatabaseMdfRequest;
const DescribeBackupsResponse = models.DescribeBackupsResponse;
const TerminateDBInstanceResponse = models.TerminateDBInstanceResponse;
const ModifyDBRemarkRequest = models.ModifyDBRemarkRequest;
const DescribeAccountPrivilegeByDBResponse = models.DescribeAccountPrivilegeByDBResponse;
const DBPrivilegeModifyInfo = models.DBPrivilegeModifyInfo;
const CheckItem = models.CheckItem;
const EventConfig = models.EventConfig;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const RenameRestoreDatabase = models.RenameRestoreDatabase;
const InquiryPriceUpgradeDBInstanceRequest = models.InquiryPriceUpgradeDBInstanceRequest;
const SpecSellStatus = models.SpecSellStatus;
const ModifyDatabaseCDCRequest = models.ModifyDatabaseCDCRequest;
const DescribeRestoreTaskRequest = models.DescribeRestoreTaskRequest;
const DescribeInstanceTradeParameterRequest = models.DescribeInstanceTradeParameterRequest;
const ModifyDatabaseCDCResponse = models.ModifyDatabaseCDCResponse;
const DBInstance = models.DBInstance;
const DescribeBackupCommandResponse = models.DescribeBackupCommandResponse;
const CreateBasicDBInstancesRequest = models.CreateBasicDBInstancesRequest;
const DescribeDBInstancesAttributeResponse = models.DescribeDBInstancesAttributeResponse;
const Backup = models.Backup;
const OpenInterCommunicationRequest = models.OpenInterCommunicationRequest;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const BalanceReadOnlyGroupResponse = models.BalanceReadOnlyGroupResponse;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const CreateBackupMigrationResponse = models.CreateBackupMigrationResponse;
const DescribeMaintenanceSpanRequest = models.DescribeMaintenanceSpanRequest;
const ModifyAccountRemarkRequest = models.ModifyAccountRemarkRequest;
const DeletePublishSubscribeResponse = models.DeletePublishSubscribeResponse;
const Price = models.Price;
const CreateAccountResponse = models.CreateAccountResponse;
const RenewPostpaidDBInstanceResponse = models.RenewPostpaidDBInstanceResponse;
const CloseInterCommunicationResponse = models.CloseInterCommunicationResponse;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const DescribeSlowlogsResponse = models.DescribeSlowlogsResponse;
const DescribeUpgradeInstanceCheckRequest = models.DescribeUpgradeInstanceCheckRequest;
const DescribeAccountPrivilegeByDBRequest = models.DescribeAccountPrivilegeByDBRequest;
const ModifyReadOnlyGroupDetailsRequest = models.ModifyReadOnlyGroupDetailsRequest;
const SlowLog = models.SlowLog;
const DescribeUploadBackupInfoRequest = models.DescribeUploadBackupInfoRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const DeleteDBInstanceResponse = models.DeleteDBInstanceResponse;
const DescribeDBInstancesAttributeRequest = models.DescribeDBInstancesAttributeRequest;
const CreateCloudDBInstancesRequest = models.CreateCloudDBInstancesRequest;
const ModifyInstanceEncryptAttributesRequest = models.ModifyInstanceEncryptAttributesRequest;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const DescribeHASwitchLogResponse = models.DescribeHASwitchLogResponse;
const ModifyBackupMigrationRequest = models.ModifyBackupMigrationRequest;
const CloneDBResponse = models.CloneDBResponse;
const CreateBasicDBInstancesResponse = models.CreateBasicDBInstancesResponse;
const DataBasePrivilegeModifyInfo = models.DataBasePrivilegeModifyInfo;
const DescribeMaintenanceSpanResponse = models.DescribeMaintenanceSpanResponse;
const DatabaseTuple = models.DatabaseTuple;
const CreateCloudDBInstancesResponse = models.CreateCloudDBInstancesResponse;
const DeletePublishSubscribeRequest = models.DeletePublishSubscribeRequest;
const StartBackupMigrationResponse = models.StartBackupMigrationResponse;
const ModifyOpenWanIpResponse = models.ModifyOpenWanIpResponse;
const RunMigrationResponse = models.RunMigrationResponse;
const DescribeProductConfigRequest = models.DescribeProductConfigRequest;
const CreateAccountRequest = models.CreateAccountRequest;
const DescribeReadOnlyGroupByReadOnlyInstanceResponse = models.DescribeReadOnlyGroupByReadOnlyInstanceResponse;
const ParameterDetail = models.ParameterDetail;
const DescribeBusinessIntelligenceFileResponse = models.DescribeBusinessIntelligenceFileResponse;
const ZoneInfo = models.ZoneInfo;
const DescribeDBRestoreTimeRequest = models.DescribeDBRestoreTimeRequest;
const MigrateTask = models.MigrateTask;
const InquiryPriceCreateDBInstancesResponse = models.InquiryPriceCreateDBInstancesResponse;
const RemoveBackupsRequest = models.RemoveBackupsRequest;
const CreateCloudReadOnlyDBInstancesRequest = models.CreateCloudReadOnlyDBInstancesRequest;
const ModifyInstanceEncryptAttributesResponse = models.ModifyInstanceEncryptAttributesResponse;
const DescribeBackupFilesResponse = models.DescribeBackupFilesResponse;
const DeleteDBRequest = models.DeleteDBRequest;
const CompleteExpansionResponse = models.CompleteExpansionResponse;
const ModifyDatabaseCTRequest = models.ModifyDatabaseCTRequest;
const ModifyAccountPrivilegeRequest = models.ModifyAccountPrivilegeRequest;
const DescribeXEventsResponse = models.DescribeXEventsResponse;
const DeleteIncrementalMigrationResponse = models.DeleteIncrementalMigrationResponse;
const DescribeFlowStatusResponse = models.DescribeFlowStatusResponse;
const CutXEventsRequest = models.CutXEventsRequest;
const SwitchCloudInstanceHAResponse = models.SwitchCloudInstanceHAResponse;
const DescribeBackupFilesRequest = models.DescribeBackupFilesRequest;
const ModifyPublishSubscribeRequest = models.ModifyPublishSubscribeRequest;
const DescribeCrossRegionsResponse = models.DescribeCrossRegionsResponse;
const ReadOnlyInstanceWeightPair = models.ReadOnlyInstanceWeightPair;
const DescribeBusinessIntelligenceFileRequest = models.DescribeBusinessIntelligenceFileRequest;
const Events = models.Events;
const RecycleReadOnlyGroupRequest = models.RecycleReadOnlyGroupRequest;
const AccountDetail = models.AccountDetail;
const DescribeDBInstanceInterRequest = models.DescribeDBInstanceInterRequest;
const ModifyDatabaseCTResponse = models.ModifyDatabaseCTResponse;
const SwitchLog = models.SwitchLog;
const AccountRemark = models.AccountRemark;
const AccountPrivilegeModifyInfo = models.AccountPrivilegeModifyInfo;
const AccountCreateInfo = models.AccountCreateInfo;
const StartInstanceXEventRequest = models.StartInstanceXEventRequest;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const DescribeDBRestoreTimeResponse = models.DescribeDBRestoreTimeResponse;
const DescribeSpecSellStatusRequest = models.DescribeSpecSellStatusRequest;
const DeleteMigrationResponse = models.DeleteMigrationResponse;
const DescribeReadOnlyGroupListRequest = models.DescribeReadOnlyGroupListRequest;
const CreateBackupRequest = models.CreateBackupRequest;
const DescribeDBsNormalRequest = models.DescribeDBsNormalRequest;
const ModifyDBInstanceSSLRequest = models.ModifyDBInstanceSSLRequest;
const ModifyPublishSubscribeNameRequest = models.ModifyPublishSubscribeNameRequest;
const DescribeBackupUploadSizeRequest = models.DescribeBackupUploadSizeRequest;
const DescribeCrossRegionZoneRequest = models.DescribeCrossRegionZoneRequest;
const ModifyReadOnlyGroupDetailsResponse = models.ModifyReadOnlyGroupDetailsResponse;
const DescribeBackupStatisticalRequest = models.DescribeBackupStatisticalRequest;
const ModifyDBInstanceProjectRequest = models.ModifyDBInstanceProjectRequest;
const MigrationStep = models.MigrationStep;
const RenewPostpaidDBInstanceRequest = models.RenewPostpaidDBInstanceRequest;
const DescribeMigrationDetailRequest = models.DescribeMigrationDetailRequest;
const DescribeReadOnlyGroupDetailsRequest = models.DescribeReadOnlyGroupDetailsRequest;
const CreateDBInstancesRequest = models.CreateDBInstancesRequest;
const ModifyCrossBackupStrategyRequest = models.ModifyCrossBackupStrategyRequest;
const DescribeReadOnlyGroupAutoWeightResponse = models.DescribeReadOnlyGroupAutoWeightResponse;
const DrZoneInfo = models.DrZoneInfo;
const ModifyBackupStrategyRequest = models.ModifyBackupStrategyRequest;
const CreatePublishSubscribeRequest = models.CreatePublishSubscribeRequest;
const CreateBusinessIntelligenceFileRequest = models.CreateBusinessIntelligenceFileRequest;
const CreateMigrationResponse = models.CreateMigrationResponse;
const DescribeCollationTimeZoneRequest = models.DescribeCollationTimeZoneRequest;
const ModifyDBInstanceNoteRequest = models.ModifyDBInstanceNoteRequest;
const DeleteDBResponse = models.DeleteDBResponse;
const ModifyIncrementalMigrationRequest = models.ModifyIncrementalMigrationRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const CreateIncrementalMigrationRequest = models.CreateIncrementalMigrationRequest;
const FileAction = models.FileAction;
const DescribeRegularBackupPlanRequest = models.DescribeRegularBackupPlanRequest;
const ModifyDBEncryptAttributesRequest = models.ModifyDBEncryptAttributesRequest;
const DescribeDatabasesNormalResponse = models.DescribeDatabasesNormalResponse;
const DBRenameRes = models.DBRenameRes;
const DBRemark = models.DBRemark;
const CloseInterCommunicationRequest = models.CloseInterCommunicationRequest;
const DescribeReadOnlyGroupListResponse = models.DescribeReadOnlyGroupListResponse;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeBackupSummaryResponse = models.DescribeBackupSummaryResponse;
const DescribeDBPrivilegeByAccountResponse = models.DescribeDBPrivilegeByAccountResponse;
const DeleteBusinessIntelligenceFileResponse = models.DeleteBusinessIntelligenceFileResponse;
const DescribeBackupMonitorResponse = models.DescribeBackupMonitorResponse;
const DescribeXEventsRequest = models.DescribeXEventsRequest;
const Migration = models.Migration;
const BusinessIntelligenceFile = models.BusinessIntelligenceFile;
const ZoneStatus = models.ZoneStatus;
const PublishSubscribe = models.PublishSubscribe;
const DescribeRestoreTaskResponse = models.DescribeRestoreTaskResponse;
const DescribeCrossRegionsRequest = models.DescribeCrossRegionsRequest;
const OpenInterCommunicationResponse = models.OpenInterCommunicationResponse;
const DescribeDatabaseNamesRequest = models.DescribeDatabaseNamesRequest;
const DBCreateInfo = models.DBCreateInfo;
const ModifyDatabaseShrinkMDFResponse = models.ModifyDatabaseShrinkMDFResponse;
const DescribeDatabaseNamesResponse = models.DescribeDatabaseNamesResponse;
const RecycleReadOnlyGroupResponse = models.RecycleReadOnlyGroupResponse;
const DescribeDBPrivilegeByAccountRequest = models.DescribeDBPrivilegeByAccountRequest;
const DescribeHASwitchLogRequest = models.DescribeHASwitchLogRequest;
const SlowlogInfo = models.SlowlogInfo;
const DescribeMigrationsResponse = models.DescribeMigrationsResponse;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const MigrationDetail = models.MigrationDetail;
const ModifyDataBaseTuple = models.ModifyDataBaseTuple;
const DescribeMigrationsRequest = models.DescribeMigrationsRequest;
const DealInstance = models.DealInstance;
const DescribeBackupUploadSizeResponse = models.DescribeBackupUploadSizeResponse;
const DescribeFlowStatusRequest = models.DescribeFlowStatusRequest;
const DescribeBackupByFlowIdResponse = models.DescribeBackupByFlowIdResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const AccountPrivilege = models.AccountPrivilege;
const ModifyCrossBackupStrategyResponse = models.ModifyCrossBackupStrategyResponse;
const DescribeCrossBackupStatisticalRequest = models.DescribeCrossBackupStatisticalRequest;
const DeleteMigrationRequest = models.DeleteMigrationRequest;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeBackupMonitorRequest = models.DescribeBackupMonitorRequest;
const RemoveBackupsResponse = models.RemoveBackupsResponse;
const ModifyCloseWanIpResponse = models.ModifyCloseWanIpResponse;
const SecurityGroup = models.SecurityGroup;
const ReadOnlyInstance = models.ReadOnlyInstance;
const MigrateDetail = models.MigrateDetail;
const DescribeBackupMigrationRequest = models.DescribeBackupMigrationRequest;
const InstanceDBDetail = models.InstanceDBDetail;
const BalanceReadOnlyGroupRequest = models.BalanceReadOnlyGroupRequest;
const ModifyInstanceParamResponse = models.ModifyInstanceParamResponse;
const DescribeRestoreTimeRangeRequest = models.DescribeRestoreTimeRangeRequest;
const DbRollbackTimeInfo = models.DbRollbackTimeInfo;
const CreateCloudReadOnlyDBInstancesResponse = models.CreateCloudReadOnlyDBInstancesResponse;
const DbNormalDetail = models.DbNormalDetail;
const CreateBackupResponse = models.CreateBackupResponse;
const DescribeBackupMigrationResponse = models.DescribeBackupMigrationResponse;
const RestoreTask = models.RestoreTask;
const DescribeUploadBackupInfoResponse = models.DescribeUploadBackupInfoResponse;
const OldVip = models.OldVip;
const DescribeBackupCommandRequest = models.DescribeBackupCommandRequest;
const CrossSummaryDetailRes = models.CrossSummaryDetailRes;
const DescribeInstanceParamRecordsResponse = models.DescribeInstanceParamRecordsResponse;
const DescribeBackupSummaryRequest = models.DescribeBackupSummaryRequest;
const DescribeReadOnlyGroupAutoWeightRequest = models.DescribeReadOnlyGroupAutoWeightRequest;
const RecycleDBInstanceResponse = models.RecycleDBInstanceResponse;
const DescribeReadOnlyGroupByReadOnlyInstanceRequest = models.DescribeReadOnlyGroupByReadOnlyInstanceRequest;
const DescribeBackupByFlowIdRequest = models.DescribeBackupByFlowIdRequest;
const StartBackupMigrationRequest = models.StartBackupMigrationRequest;
const ModifyIncrementalMigrationResponse = models.ModifyIncrementalMigrationResponse;
const MigrationAction = models.MigrationAction;
const CloneDBRequest = models.CloneDBRequest;
const DescribeMigrationDetailResponse = models.DescribeMigrationDetailResponse;
const DeleteDBInstanceRequest = models.DeleteDBInstanceRequest;
const RegionInfo = models.RegionInfo;
const CreateDBResponse = models.CreateDBResponse;
const CreateBusinessDBInstancesRequest = models.CreateBusinessDBInstancesRequest;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const DescribeSlowlogsRequest = models.DescribeSlowlogsRequest;
const ModifyDReadableResponse = models.ModifyDReadableResponse;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const DescribePublishSubscribeResponse = models.DescribePublishSubscribeResponse;
const ModifyDBRemarkResponse = models.ModifyDBRemarkResponse;
const ModifyOpenWanIpRequest = models.ModifyOpenWanIpRequest;
const ModifyPublishSubscribeResponse = models.ModifyPublishSubscribeResponse;


/**
 * sqlserver client
 * @class
 */
class SqlserverClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sqlserver.intl.tencentcloudapi.com", "2018-03-28", credential, region, profile);
    }
    
    /**
     * This API is used to modify instance account permissions.
     * @param {ModifyAccountPrivilegeRequest} req
     * @param {function(string, ModifyAccountPrivilegeResponse):void} cb
     * @public
     */
    ModifyAccountPrivilege(req, cb) {
        let resp = new ModifyAccountPrivilegeResponse();
        this.request("ModifyAccountPrivilege", req, resp, cb);
    }

    /**
     * This API is used to reclaim resources of read-only groups immediately. The resources, such as VIP, occupied by the read-only group will be released immediately and cannot be recovered.
     * @param {RecycleReadOnlyGroupRequest} req
     * @param {function(string, RecycleReadOnlyGroupResponse):void} cb
     * @public
     */
    RecycleReadOnlyGroup(req, cb) {
        let resp = new RecycleReadOnlyGroupResponse();
        this.request("RecycleReadOnlyGroup", req, resp, cb);
    }

    /**
     * This API is used to modify the name of a backup task.
     * @param {ModifyBackupNameRequest} req
     * @param {function(string, ModifyBackupNameResponse):void} cb
     * @public
     */
    ModifyBackupName(req, cb) {
        let resp = new ModifyBackupNameResponse();
        this.request("ModifyBackupName", req, resp, cb);
    }

    /**
     * This API is used to query the status information on specifications, including the sales status and reference price. (The actual price is subject to the result returned by price querying APIs.)
     * @param {DescribeSpecSellStatusRequest} req
     * @param {function(string, DescribeSpecSellStatusResponse):void} cb
     * @public
     */
    DescribeSpecSellStatus(req, cb) {
        let resp = new DescribeSpecSellStatusResponse();
        this.request("DescribeSpecSellStatus", req, resp, cb);
    }

    /**
     * This API is used to start an incremental backup import task.
     * @param {StartIncrementalMigrationRequest} req
     * @param {function(string, StartIncrementalMigrationResponse):void} cb
     * @public
     */
    StartIncrementalMigration(req, cb) {
        let resp = new StartIncrementalMigrationResponse();
        this.request("StartIncrementalMigration", req, resp, cb);
    }

    /**
     * This API is used to modify account remarks.
     * @param {ModifyAccountRemarkRequest} req
     * @param {function(string, ModifyAccountRemarkResponse):void} cb
     * @public
     */
    ModifyAccountRemark(req, cb) {
        let resp = new ModifyAccountRemarkResponse();
        this.request("ModifyAccountRemark", req, resp, cb);
    }

    /**
     * This API is used to modify the publish/subscribe relationship of the instance.
     * @param {ModifyPublishSubscribeRequest} req
     * @param {function(string, ModifyPublishSubscribeResponse):void} cb
     * @public
     */
    ModifyPublishSubscribe(req, cb) {
        let resp = new ModifyPublishSubscribeResponse();
        this.request("ModifyPublishSubscribe", req, resp, cb);
    }

    /**
     * This API is used to rename an instance.
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        let resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }

    /**
     * This API is used to isolate an instance to move it into a recycle bin.
     * @param {TerminateDBInstanceRequest} req
     * @param {function(string, TerminateDBInstanceResponse):void} cb
     * @public
     */
    TerminateDBInstance(req, cb) {
        let resp = new TerminateDBInstanceResponse();
        this.request("TerminateDBInstance", req, resp, cb);
    }

    /**
     * This API is used to shrink database MDF files.
     * @param {ModifyDatabaseMdfRequest} req
     * @param {function(string, ModifyDatabaseMdfResponse):void} cb
     * @public
     */
    ModifyDatabaseMdf(req, cb) {
        let resp = new ModifyDatabaseMdfResponse();
        this.request("ModifyDatabaseMdf", req, resp, cb);
    }

    /**
     * This API is used to modify database remarks.
     * @param {ModifyDBRemarkRequest} req
     * @param {function(string, ModifyDBRemarkResponse):void} cb
     * @public
     */
    ModifyDBRemark(req, cb) {
        let resp = new ModifyDBRemarkResponse();
        this.request("ModifyDBRemark", req, resp, cb);
    }

    /**
     * This API is used to delete an incremental backup import task.
     * @param {DeleteIncrementalMigrationRequest} req
     * @param {function(string, DeleteIncrementalMigrationResponse):void} cb
     * @public
     */
    DeleteIncrementalMigration(req, cb) {
        let resp = new DeleteIncrementalMigrationResponse();
        this.request("DeleteIncrementalMigration", req, resp, cb);
    }

    /**
     * This API is used to switch a running instance from a VPC to another.
     * @param {ModifyDBInstanceNetworkRequest} req
     * @param {function(string, ModifyDBInstanceNetworkResponse):void} cb
     * @public
     */
    ModifyDBInstanceNetwork(req, cb) {
        let resp = new ModifyDBInstanceNetworkResponse();
        this.request("ModifyDBInstanceNetwork", req, resp, cb);
    }

    /**
     * This API is used to disable the public network for the instance.
     * @param {ModifyCloseWanIpRequest} req
     * @param {function(string, ModifyCloseWanIpResponse):void} cb
     * @public
     */
    ModifyCloseWanIp(req, cb) {
        let resp = new ModifyCloseWanIpResponse();
        this.request("ModifyCloseWanIp", req, resp, cb);
    }

    /**
     * This API is used to modify security groups bound to an instance.
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to modify the maintenance window of the instance.
     * @param {ModifyMaintenanceSpanRequest} req
     * @param {function(string, ModifyMaintenanceSpanResponse):void} cb
     * @public
     */
    ModifyMaintenanceSpan(req, cb) {
        let resp = new ModifyMaintenanceSpanResponse();
        this.request("ModifyMaintenanceSpan", req, resp, cb);
    }

    /**
     * This API is used to query the maintenance time window of an instance based on its instance ID.
     * @param {DescribeMaintenanceSpanRequest} req
     * @param {function(string, DescribeMaintenanceSpanResponse):void} cb
     * @public
     */
    DescribeMaintenanceSpan(req, cb) {
        let resp = new DescribeMaintenanceSpanResponse();
        this.request("DescribeMaintenanceSpan", req, resp, cb);
    }

    /**
     * This API is used to query read-only group details.
     * @param {DescribeReadOnlyGroupDetailsRequest} req
     * @param {function(string, DescribeReadOnlyGroupDetailsResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroupDetails(req, cb) {
        let resp = new DescribeReadOnlyGroupDetailsResponse();
        this.request("DescribeReadOnlyGroupDetails", req, resp, cb);
    }

    /**
     * This API is used to create a publish/subscribe relationship between two databases. A subscriber cannot act as a publisher, and a publisher can have multiple subscriber instances.
     * @param {CreatePublishSubscribeRequest} req
     * @param {function(string, CreatePublishSubscribeResponse):void} cb
     * @public
     */
    CreatePublishSubscribe(req, cb) {
        let resp = new CreatePublishSubscribeResponse();
        this.request("CreatePublishSubscribe", req, resp, cb);
    }

    /**
     * This API is used to query the details of an unarchived backup.
     * @param {DescribeBackupFilesRequest} req
     * @param {function(string, DescribeBackupFilesResponse):void} cb
     * @public
     */
    DescribeBackupFiles(req, cb) {
        let resp = new DescribeBackupFilesResponse();
        this.request("DescribeBackupFiles", req, resp, cb);
    }

    /**
     * This API is used to query the scheduled backup retention plans of instances.
     * @param {DescribeRegularBackupPlanRequest} req
     * @param {function(string, DescribeRegularBackupPlanResponse):void} cb
     * @public
     */
    DescribeRegularBackupPlan(req, cb) {
        let resp = new DescribeRegularBackupPlanResponse();
        this.request("DescribeRegularBackupPlan", req, resp, cb);
    }

    /**
     * This API is used to query the publish/subscribe relationship list.
     * @param {DescribePublishSubscribeRequest} req
     * @param {function(string, DescribePublishSubscribeResponse):void} cb
     * @public
     */
    DescribePublishSubscribe(req, cb) {
        let resp = new DescribePublishSubscribeResponse();
        this.request("DescribePublishSubscribe", req, resp, cb);
    }

    /**
     * This API is used to query the database list.
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * This API is used to manually cut block logs and deadlock logs.
     * @param {CutXEventsRequest} req
     * @param {function(string, CutXEventsResponse):void} cb
     * @public
     */
    CutXEvents(req, cb) {
        let resp = new CutXEventsResponse();
        this.request("CutXEvents", req, resp, cb);
    }

    /**
     * This API is used to query the read-only group list.
     * @param {DescribeReadOnlyGroupListRequest} req
     * @param {function(string, DescribeReadOnlyGroupListResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroupList(req, cb) {
        let resp = new DescribeReadOnlyGroupListResponse();
        this.request("DescribeReadOnlyGroupList", req, resp, cb);
    }

    /**
     * This API is used to query migration task details.
     * @param {DescribeMigrationDetailRequest} req
     * @param {function(string, DescribeMigrationDetailResponse):void} cb
     * @public
     */
    DescribeMigrationDetail(req, cb) {
        let resp = new DescribeMigrationDetailResponse();
        this.request("DescribeMigrationDetail", req, resp, cb);
    }

    /**
     * This API is used to query currently purchasable AZs.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * This API is used to query a backup upload permission.
     * @param {DescribeUploadBackupInfoRequest} req
     * @param {function(string, DescribeUploadBackupInfoResponse):void} cb
     * @public
     */
    DescribeUploadBackupInfo(req, cb) {
        let resp = new DescribeUploadBackupInfoResponse();
        this.request("DescribeUploadBackupInfo", req, resp, cb);
    }

    /**
     * This API is used to query purchasable specification configuration.
     * @param {DescribeProductConfigRequest} req
     * @param {function(string, DescribeProductConfigResponse):void} cb
     * @public
     */
    DescribeProductConfig(req, cb) {
        let resp = new DescribeProductConfigResponse();
        this.request("DescribeProductConfig", req, resp, cb);
    }

    /**
     * This API is used to pre-check the impact of the instance configuration adjustment before the adjustment.
     * @param {DescribeUpgradeInstanceCheckRequest} req
     * @param {function(string, DescribeUpgradeInstanceCheckResponse):void} cb
     * @public
     */
    DescribeUpgradeInstanceCheck(req, cb) {
        let resp = new DescribeUpgradeInstanceCheckResponse();
        this.request("DescribeUpgradeInstanceCheck", req, resp, cb);
    }

    /**
     * This API is used to unbind security groups from instances in batches.
     * @param {DisassociateSecurityGroupsRequest} req
     * @param {function(string, DisassociateSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateSecurityGroups(req, cb) {
        let resp = new DisassociateSecurityGroupsResponse();
        this.request("DisassociateSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to modify the instance remarks.
     * @param {ModifyDBInstanceNoteRequest} req
     * @param {function(string, ModifyDBInstanceNoteResponse):void} cb
     * @public
     */
    ModifyDBInstanceNote(req, cb) {
        let resp = new ModifyDBInstanceNoteResponse();
        this.request("ModifyDBInstanceNote", req, resp, cb);
    }

    /**
     * This API is used to release SQL server instances (eliminated immediately) in the recycle bin. The released instances will be physically terminated after being retained for a period of time. Their publish-subscribe relationships will be automatically disassociated, and their RO replicas will be automatically released.
     * @param {DeleteDBInstanceRequest} req
     * @param {function(string, DeleteDBInstanceResponse):void} cb
     * @public
     */
    DeleteDBInstance(req, cb) {
        let resp = new DeleteDBInstanceResponse();
        this.request("DeleteDBInstance", req, resp, cb);
    }

    /**
     * This API is used to create business intelligence service instances (cloud disk).
     * @param {CreateBusinessDBInstancesRequest} req
     * @param {function(string, CreateBusinessDBInstancesResponse):void} cb
     * @public
     */
    CreateBusinessDBInstances(req, cb) {
        let resp = new CreateBusinessDBInstancesResponse();
        this.request("CreateBusinessDBInstances", req, resp, cb);
    }

    /**
     * This API is used to rename a database.
     * @param {ModifyDBNameRequest} req
     * @param {function(string, ModifyDBNameResponse):void} cb
     * @public
     */
    ModifyDBName(req, cb) {
        let resp = new ModifyDBNameResponse();
        this.request("ModifyDBName", req, resp, cb);
    }

    /**
     * This API is used to query the price of requested instances.
     * @param {InquiryPriceCreateDBInstancesRequest} req
     * @param {function(string, InquiryPriceCreateDBInstancesResponse):void} cb
     * @public
     */
    InquiryPriceCreateDBInstances(req, cb) {
        let resp = new InquiryPriceCreateDBInstancesResponse();
        this.request("InquiryPriceCreateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the disaster recovery region and AZ of the secondary node based on the primary instance.
     * @param {DescribeCrossRegionZoneRequest} req
     * @param {function(string, DescribeCrossRegionZoneResponse):void} cb
     * @public
     */
    DescribeCrossRegionZone(req, cb) {
        let resp = new DescribeCrossRegionZoneResponse();
        this.request("DescribeCrossRegionZone", req, resp, cb);
    }

    /**
     * This API is used to enable or disable the change tracking (CT) feature.
     * @param {ModifyDatabaseCTRequest} req
     * @param {function(string, ModifyDatabaseCTResponse):void} cb
     * @public
     */
    ModifyDatabaseCT(req, cb) {
        let resp = new ModifyDatabaseCTResponse();
        this.request("ModifyDatabaseCT", req, resp, cb);
    }

    /**
     * This API is used to query the list of backups.
     * @param {DescribeBackupsRequest} req
     * @param {function(string, DescribeBackupsResponse):void} cb
     * @public
     */
    DescribeBackups(req, cb) {
        let resp = new DescribeBackupsResponse();
        this.request("DescribeBackups", req, resp, cb);
    }

    /**
     * This API is used to modify the publish/subscribe names.
     * @param {ModifyPublishSubscribeNameRequest} req
     * @param {function(string, ModifyPublishSubscribeNameResponse):void} cb
     * @public
     */
    ModifyPublishSubscribeName(req, cb) {
        let resp = new ModifyPublishSubscribeNameResponse();
        this.request("ModifyPublishSubscribeName", req, resp, cb);
    }

    /**
     * This API is used to recover the pay-as-you-go instance that is manually isolated through the API TerminateDBInstance from the recycle bin.
     * @param {RenewPostpaidDBInstanceRequest} req
     * @param {function(string, RenewPostpaidDBInstanceResponse):void} cb
     * @public
     */
    RenewPostpaidDBInstance(req, cb) {
        let resp = new RenewPostpaidDBInstanceResponse();
        this.request("RenewPostpaidDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query an incremental backup import task.
     * @param {DescribeIncrementalMigrationRequest} req
     * @param {function(string, DescribeIncrementalMigrationResponse):void} cb
     * @public
     */
    DescribeIncrementalMigration(req, cb) {
        let resp = new DescribeIncrementalMigrationResponse();
        this.request("DescribeIncrementalMigration", req, resp, cb);
    }

    /**
     * This API is used to create a backup.
     * @param {CreateBackupRequest} req
     * @param {function(string, CreateBackupResponse):void} cb
     * @public
     */
    CreateBackup(req, cb) {
        let resp = new CreateBackupResponse();
        this.request("CreateBackup", req, resp, cb);
    }

    /**
     * This API is used to query databases that can be rolled back.
     * @param {DescribeDBRestoreTimeRequest} req
     * @param {function(string, DescribeDBRestoreTimeResponse):void} cb
     * @public
     */
    DescribeDBRestoreTime(req, cb) {
        let resp = new DescribeDBRestoreTimeResponse();
        this.request("DescribeDBRestoreTime", req, resp, cb);
    }

    /**
     * This API is used to create an incremental backup import task.
     * @param {DescribeBackupMigrationRequest} req
     * @param {function(string, DescribeBackupMigrationResponse):void} cb
     * @public
     */
    DescribeBackupMigration(req, cb) {
        let resp = new DescribeBackupMigrationResponse();
        this.request("DescribeBackupMigration", req, resp, cb);
    }

    /**
     * This API is used to balance the routing weight of each read-only instance according to the predefined weights. The DescribeReadOnlyGroupAutoWeight API is used to query the predefined weights.
     * @param {BalanceReadOnlyGroupRequest} req
     * @param {function(string, BalanceReadOnlyGroupResponse):void} cb
     * @public
     */
    BalanceReadOnlyGroup(req, cb) {
        let resp = new BalanceReadOnlyGroupResponse();
        this.request("BalanceReadOnlyGroup", req, resp, cb);
    }

    /**
     * This API is used to enable or disable the change data capture (CDC) feature.
     * @param {ModifyDatabaseCDCRequest} req
     * @param {function(string, ModifyDatabaseCDCResponse):void} cb
     * @public
     */
    ModifyDatabaseCDC(req, cb) {
        let resp = new ModifyDatabaseCDCResponse();
        this.request("ModifyDatabaseCDC", req, resp, cb);
    }

    /**
     * This API is used to start running a migration task.
     * @param {RunMigrationRequest} req
     * @param {function(string, RunMigrationResponse):void} cb
     * @public
     */
    RunMigration(req, cb) {
        let resp = new RunMigrationResponse();
        this.request("RunMigration", req, resp, cb);
    }

    /**
     * This API is used to query security group details of a project.
     * @param {DescribeProjectSecurityGroupsRequest} req
     * @param {function(string, DescribeProjectSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroups(req, cb) {
        let resp = new DescribeProjectSecurityGroupsResponse();
        this.request("DescribeProjectSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to create an instance account.
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        let resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
    }

    /**
     * This API is used to query purchasable regions.
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * This API is used to query the list of rollback tasks.
     * @param {DescribeRestoreTaskRequest} req
     * @param {function(string, DescribeRestoreTaskResponse):void} cb
     * @public
     */
    DescribeRestoreTask(req, cb) {
        let resp = new DescribeRestoreTaskResponse();
        this.request("DescribeRestoreTask", req, resp, cb);
    }

    /**
     * This API is used to query the parameter list of an instance.
     * @param {DescribeInstanceParamsRequest} req
     * @param {function(string, DescribeInstanceParamsResponse):void} cb
     * @public
     */
    DescribeInstanceParams(req, cb) {
        let resp = new DescribeInstanceParamsResponse();
        this.request("DescribeInstanceParams", req, resp, cb);
    }

    /**
     * This API is used to modify instance database permissions.
     * @param {ModifyDatabasePrivilegeRequest} req
     * @param {function(string, ModifyDatabasePrivilegeResponse):void} cb
     * @public
     */
    ModifyDatabasePrivilege(req, cb) {
        let resp = new ModifyDatabasePrivilegeResponse();
        this.request("ModifyDatabasePrivilege", req, resp, cb);
    }

    /**
     * This API is used to complete the instance upgrade and switch immediately without waiting for the maintenance window when the instance status is "upgrade pending switch" after scale-out is initiated. This API needs to be called during off-peak hours of the instance. Some databases cannot be accessed before the switch is completed.
     * @param {CompleteExpansionRequest} req
     * @param {function(string, CompleteExpansionResponse):void} cb
     * @public
     */
    CompleteExpansion(req, cb) {
        let resp = new CompleteExpansionResponse();
        this.request("CompleteExpansion", req, resp, cb);
    }

    /**
     * This API is used to query the real-time statistics list of backups.
     * @param {DescribeBackupStatisticalRequest} req
     * @param {function(string, DescribeBackupStatisticalResponse):void} cb
     * @public
     */
    DescribeBackupStatistical(req, cb) {
        let resp = new DescribeBackupStatisticalResponse();
        this.request("DescribeBackupStatistical", req, resp, cb);
    }

    /**
     * This API is used to create a database.
     * @param {CreateDBRequest} req
     * @param {function(string, CreateDBResponse):void} cb
     * @public
     */
    CreateDB(req, cb) {
        let resp = new CreateDBResponse();
        this.request("CreateDB", req, resp, cb);
    }

    /**
     * This API is used to create high-availability instances (cloud disk).
     * @param {CreateCloudDBInstancesRequest} req
     * @param {function(string, CreateCloudDBInstancesResponse):void} cb
     * @public
     */
    CreateCloudDBInstances(req, cb) {
        let resp = new CreateCloudDBInstancesResponse();
        this.request("CreateCloudDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the character set and time zone supported by the instance.
     * @param {DescribeCollationTimeZoneRequest} req
     * @param {function(string, DescribeCollationTimeZoneResponse):void} cb
     * @public
     */
    DescribeCollationTimeZone(req, cb) {
        let resp = new DescribeCollationTimeZoneResponse();
        this.request("DescribeCollationTimeZone", req, resp, cb);
    }

    /**
     * This API is used to query the parameter modification records of an instance.
     * @param {DescribeInstanceParamRecordsRequest} req
     * @param {function(string, DescribeInstanceParamRecordsResponse):void} cb
     * @public
     */
    DescribeInstanceParamRecords(req, cb) {
        let resp = new DescribeInstanceParamRecordsResponse();
        this.request("DescribeInstanceParamRecords", req, resp, cb);
    }

    /**
     * This API is used to add a business intelligence service file.
     * @param {CreateBusinessIntelligenceFileRequest} req
     * @param {function(string, CreateBusinessIntelligenceFileResponse):void} cb
     * @public
     */
    CreateBusinessIntelligenceFile(req, cb) {
        let resp = new CreateBusinessIntelligenceFileResponse();
        this.request("CreateBusinessIntelligenceFile", req, resp, cb);
    }

    /**
     * This API is used to query the list of asynchronous tasks related to an instance.
     * @param {DescribeInstanceTasksRequest} req
     * @param {function(string, DescribeInstanceTasksResponse):void} cb
     * @public
     */
    DescribeInstanceTasks(req, cb) {
        let resp = new DescribeInstanceTasksResponse();
        this.request("DescribeInstanceTasks", req, resp, cb);
    }

    /**
     * This API is used to perform the manual primary-secondary switch.
     * @param {DescribeHASwitchLogRequest} req
     * @param {function(string, DescribeHASwitchLogResponse):void} cb
     * @public
     */
    DescribeHASwitchLog(req, cb) {
        let resp = new DescribeHASwitchLogResponse();
        this.request("DescribeHASwitchLog", req, resp, cb);
    }

    /**
     * This API is used to query the database character sets supported by an instance.
     * @param {DescribeDBCharsetsRequest} req
     * @param {function(string, DescribeDBCharsetsResponse):void} cb
     * @public
     */
    DescribeDBCharsets(req, cb) {
        let resp = new DescribeDBCharsetsResponse();
        this.request("DescribeDBCharsets", req, resp, cb);
    }

    /**
     * This API is used to delete the publish/subscribe relationship between two databases.
     * @param {DeletePublishSubscribeRequest} req
     * @param {function(string, DeletePublishSubscribeResponse):void} cb
     * @public
     */
    DeletePublishSubscribe(req, cb) {
        let resp = new DeletePublishSubscribeResponse();
        this.request("DeletePublishSubscribe", req, resp, cb);
    }

    /**
     * This API is used to shrink the database mdf (Shrink mdf).
     * @param {ModifyDatabaseShrinkMDFRequest} req
     * @param {function(string, ModifyDatabaseShrinkMDFResponse):void} cb
     * @public
     */
    ModifyDatabaseShrinkMDF(req, cb) {
        let resp = new ModifyDatabaseShrinkMDFResponse();
        this.request("ModifyDatabaseShrinkMDF", req, resp, cb);
    }

    /**
     * This API is used to reset the account password of an instance.
     * @param {ResetAccountPasswordRequest} req
     * @param {function(string, ResetAccountPasswordResponse):void} cb
     * @public
     */
    ResetAccountPassword(req, cb) {
        let resp = new ResetAccountPasswordResponse();
        this.request("ResetAccountPassword", req, resp, cb);
    }

    /**
     * This API is used to modify instance parameters.
<b>Note</b>: if <b>the instance needs to be restarted</b> for the modified parameter to take effect, <b>it will be restarted</b> immediately or during the maintenance time according to the `WaitSwitch` parameter.
Before you modify a parameter, you can use the `DescribeInstanceParams` API to query whether the instance needs to be restarted.
     * @param {ModifyInstanceParamRequest} req
     * @param {function(string, ModifyInstanceParamResponse):void} cb
     * @public
     */
    ModifyInstanceParam(req, cb) {
        let resp = new ModifyInstanceParamResponse();
        this.request("ModifyInstanceParam", req, resp, cb);
    }

    /**
     * This API is used to query the time range available for rollback by time point.
     * @param {DescribeRestoreTimeRangeRequest} req
     * @param {function(string, DescribeRestoreTimeRangeResponse):void} cb
     * @public
     */
    DescribeRestoreTimeRange(req, cb) {
        let resp = new DescribeRestoreTimeRangeResponse();
        this.request("DescribeRestoreTimeRange", req, resp, cb);
    }

    /**
     * This API is used to get file information of slow query logs.
     * @param {DescribeSlowlogsRequest} req
     * @param {function(string, DescribeSlowlogsResponse):void} cb
     * @public
     */
    DescribeSlowlogs(req, cb) {
        let resp = new DescribeSlowlogsResponse();
        this.request("DescribeSlowlogs", req, resp, cb);
    }

    /**
     * This API is used to enable or disable cross-region backup policies.
     * @param {ModifyCrossBackupStrategyRequest} req
     * @param {function(string, ModifyCrossBackupStrategyResponse):void} cb
     * @public
     */
    ModifyCrossBackupStrategy(req, cb) {
        let resp = new ModifyCrossBackupStrategyResponse();
        this.request("ModifyCrossBackupStrategy", req, resp, cb);
    }

    /**
     * This API is used to drop a database.
     * @param {DeleteDBRequest} req
     * @param {function(string, DeleteDBResponse):void} cb
     * @public
     */
    DeleteDB(req, cb) {
        let resp = new DeleteDBResponse();
        this.request("DeleteDB", req, resp, cb);
    }

    /**
     * This API is used to query flow status.
     * @param {DescribeFlowStatusRequest} req
     * @param {function(string, DescribeFlowStatusResponse):void} cb
     * @public
     */
    DescribeFlowStatus(req, cb) {
        let resp = new DescribeFlowStatusResponse();
        this.request("DescribeFlowStatus", req, resp, cb);
    }

    /**
     * This API is used to create basic edition instances (cloud disk).
     * @param {CreateBasicDBInstancesRequest} req
     * @param {function(string, CreateBasicDBInstancesResponse):void} cb
     * @public
     */
    CreateBasicDBInstances(req, cb) {
        let resp = new CreateBasicDBInstancesResponse();
        this.request("CreateBasicDBInstances", req, resp, cb);
    }

    /**
     * This API is used to restart a database instance.
     * @param {RestartDBInstanceRequest} req
     * @param {function(string, RestartDBInstanceResponse):void} cb
     * @public
     */
    RestartDBInstance(req, cb) {
        let resp = new RestartDBInstanceResponse();
        this.request("RestartDBInstance", req, resp, cb);
    }

    /**
     * This API is used to create high-availability instances (local disk).
     * @param {CreateDBInstancesRequest} req
     * @param {function(string, CreateDBInstancesResponse):void} cb
     * @public
     */
    CreateDBInstances(req, cb) {
        let resp = new CreateDBInstancesResponse();
        this.request("CreateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to create a migration task.
     * @param {CreateMigrationRequest} req
     * @param {function(string, CreateMigrationResponse):void} cb
     * @public
     */
    CreateMigration(req, cb) {
        let resp = new CreateMigrationResponse();
        this.request("CreateMigration", req, resp, cb);
    }

    /**
     * This API is used to delete a business intelligence service file.
     * @param {DeleteBusinessIntelligenceFileRequest} req
     * @param {function(string, DeleteBusinessIntelligenceFileResponse):void} cb
     * @public
     */
    DeleteBusinessIntelligenceFile(req, cb) {
        let resp = new DeleteBusinessIntelligenceFileResponse();
        this.request("DeleteBusinessIntelligenceFile", req, resp, cb);
    }

    /**
     * This API is used to create a backup import task.
     * @param {CreateBackupMigrationRequest} req
     * @param {function(string, CreateBackupMigrationResponse):void} cb
     * @public
     */
    CreateBackupMigration(req, cb) {
        let resp = new CreateBackupMigrationResponse();
        this.request("CreateBackupMigration", req, resp, cb);
    }

    /**
     * This API is used to query the list of instances.
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the files required by business intelligence service.
     * @param {DescribeBusinessIntelligenceFileRequest} req
     * @param {function(string, DescribeBusinessIntelligenceFileResponse):void} cb
     * @public
     */
    DescribeBusinessIntelligenceFile(req, cb) {
        let resp = new DescribeBusinessIntelligenceFileResponse();
        this.request("DescribeBusinessIntelligenceFile", req, resp, cb);
    }

    /**
     * This API is used to start a backup import task.
     * @param {StartBackupMigrationRequest} req
     * @param {function(string, StartBackupMigrationResponse):void} cb
     * @public
     */
    StartBackupMigration(req, cb) {
        let resp = new StartBackupMigrationResponse();
        this.request("StartBackupMigration", req, resp, cb);
    }

    /**
     * This API is used to bind security groups to instances in batches.
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        let resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to enable instance interconnection, which can interconnect business intelligence services.
     * @param {OpenInterCommunicationRequest} req
     * @param {function(string, OpenInterCommunicationResponse):void} cb
     * @public
     */
    OpenInterCommunication(req, cb) {
        let resp = new OpenInterCommunicationResponse();
        this.request("OpenInterCommunication", req, resp, cb);
    }

    /**
     * This API is used to create an incremental backup import task.
     * @param {CreateIncrementalMigrationRequest} req
     * @param {function(string, CreateIncrementalMigrationResponse):void} cb
     * @public
     */
    CreateIncrementalMigration(req, cb) {
        let resp = new CreateIncrementalMigrationResponse();
        this.request("CreateIncrementalMigration", req, resp, cb);
    }

    /**
     * This API is used to query the size of uploaded backup files. It is valid if the backup file type is `COS_UPLOAD` (the file is stored in COS).
     * @param {DescribeBackupUploadSizeRequest} req
     * @param {function(string, DescribeBackupUploadSizeResponse):void} cb
     * @public
     */
    DescribeBackupUploadSize(req, cb) {
        let resp = new DescribeBackupUploadSizeResponse();
        this.request("DescribeBackupUploadSize", req, resp, cb);
    }

    /**
     * This API is used to start and stop an extended event.
     * @param {StartInstanceXEventRequest} req
     * @param {function(string, StartInstanceXEventResponse):void} cb
     * @public
     */
    StartInstanceXEvent(req, cb) {
        let resp = new StartInstanceXEventResponse();
        this.request("StartInstanceXEvent", req, resp, cb);
    }

    /**
     * This API is used to delete a migration task.
     * @param {DeleteMigrationRequest} req
     * @param {function(string, DeleteMigrationResponse):void} cb
     * @public
     */
    DeleteMigration(req, cb) {
        let resp = new DeleteMigrationResponse();
        this.request("DeleteMigration", req, resp, cb);
    }

    /**
     * This API is used to enable TDE of an instance.
     * @param {ModifyInstanceEncryptAttributesRequest} req
     * @param {function(string, ModifyInstanceEncryptAttributesResponse):void} cb
     * @public
     */
    ModifyInstanceEncryptAttributes(req, cb) {
        let resp = new ModifyInstanceEncryptAttributesResponse();
        this.request("ModifyInstanceEncryptAttributes", req, resp, cb);
    }

    /**
     * This API is used to query the database name associated with the account.
     * @param {DescribeDatabaseNamesRequest} req
     * @param {function(string, DescribeDatabaseNamesResponse):void} cb
     * @public
     */
    DescribeDatabaseNames(req, cb) {
        let resp = new DescribeDatabaseNamesResponse();
        this.request("DescribeDatabaseNames", req, resp, cb);
    }

    /**
     * This API is used to query the instance ID by the order number.
     * @param {DescribeInstanceByOrdersRequest} req
     * @param {function(string, DescribeInstanceByOrdersResponse):void} cb
     * @public
     */
    DescribeInstanceByOrders(req, cb) {
        let resp = new DescribeInstanceByOrdersResponse();
        this.request("DescribeInstanceByOrders", req, resp, cb);
    }

    /**
     * This API is used to pull the list of instance accounts.
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * This API is used to modify an incremental backup import task.
     * @param {ModifyIncrementalMigrationRequest} req
     * @param {function(string, ModifyIncrementalMigrationResponse):void} cb
     * @public
     */
    ModifyIncrementalMigration(req, cb) {
        let resp = new ModifyIncrementalMigrationResponse();
        this.request("ModifyIncrementalMigration", req, resp, cb);
    }

    /**
     * This API is used to enable or disable TDE of a database.
     * @param {ModifyDBEncryptAttributesRequest} req
     * @param {function(string, ModifyDBEncryptAttributesResponse):void} cb
     * @public
     */
    ModifyDBEncryptAttributes(req, cb) {
        let resp = new ModifyDBEncryptAttributesResponse();
        this.request("ModifyDBEncryptAttributes", req, resp, cb);
    }

    /**
     * This API is used to query the target region for cross-region backups.
     * @param {DescribeCrossRegionsRequest} req
     * @param {function(string, DescribeCrossRegionsResponse):void} cb
     * @public
     */
    DescribeCrossRegions(req, cb) {
        let resp = new DescribeCrossRegionsResponse();
        this.request("DescribeCrossRegions", req, resp, cb);
    }

    /**
     * This API is used to enable or disable the read-only feature of the replica server.
     * @param {ModifyDReadableRequest} req
     * @param {function(string, ModifyDReadableResponse):void} cb
     * @public
     */
    ModifyDReadable(req, cb) {
        let resp = new ModifyDReadableResponse();
        this.request("ModifyDReadable", req, resp, cb);
    }

    /**
     * This API is used to delete backup files created by users manually. The backup policy to be deleted can be instance backup or multi-database backup.
     * @param {RemoveBackupsRequest} req
     * @param {function(string, RemoveBackupsResponse):void} cb
     * @public
     */
    RemoveBackups(req, cb) {
        let resp = new RemoveBackupsResponse();
        this.request("RemoveBackups", req, resp, cb);
    }

    /**
     * This API is used to query the information of the interconnected instances.
     * @param {DescribeDBInstanceInterRequest} req
     * @param {function(string, DescribeDBInstanceInterResponse):void} cb
     * @public
     */
    DescribeDBInstanceInter(req, cb) {
        let resp = new DescribeDBInstanceInterResponse();
        this.request("DescribeDBInstanceInter", req, resp, cb);
    }

    /**
     * This API is used to return a deactivated SQL Server instance.
     * @param {RecycleDBInstanceRequest} req
     * @param {function(string, RecycleDBInstanceResponse):void} cb
     * @public
     */
    RecycleDBInstance(req, cb) {
        let resp = new RecycleDBInstanceResponse();
        this.request("RecycleDBInstance", req, resp, cb);
    }

    /**
     * This API is used to create read-only instances (local disk).
     * @param {CreateReadOnlyDBInstancesRequest} req
     * @param {function(string, CreateReadOnlyDBInstancesResponse):void} cb
     * @public
     */
    CreateReadOnlyDBInstances(req, cb) {
        let resp = new CreateReadOnlyDBInstancesResponse();
        this.request("CreateReadOnlyDBInstances", req, resp, cb);
    }

    /**
     * This API is used to manually switch between primary and secondary.
     * @param {SwitchCloudInstanceHARequest} req
     * @param {function(string, SwitchCloudInstanceHAResponse):void} cb
     * @public
     */
    SwitchCloudInstanceHA(req, cb) {
        let resp = new SwitchCloudInstanceHAResponse();
        this.request("SwitchCloudInstanceHA", req, resp, cb);
    }

    /**
     * This API is used to create read-only instances (cloud disk).
     * @param {CreateCloudReadOnlyDBInstancesRequest} req
     * @param {function(string, CreateCloudReadOnlyDBInstancesResponse):void} cb
     * @public
     */
    CreateCloudReadOnlyDBInstances(req, cb) {
        let resp = new CreateCloudReadOnlyDBInstancesResponse();
        this.request("CreateCloudReadOnlyDBInstances", req, resp, cb);
    }

    /**
     * This API is used to disable instance interconnection.
     * @param {CloseInterCommunicationRequest} req
     * @param {function(string, CloseInterCommunicationResponse):void} cb
     * @public
     */
    CloseInterCommunication(req, cb) {
        let resp = new CloseInterCommunicationResponse();
        this.request("CloseInterCommunication", req, resp, cb);
    }

    /**
     * This API is used to query the backup overview information of databases.
     * @param {DescribeBackupSummaryRequest} req
     * @param {function(string, DescribeBackupSummaryResponse):void} cb
     * @public
     */
    DescribeBackupSummary(req, cb) {
        let resp = new DescribeBackupSummaryResponse();
        this.request("DescribeBackupSummary", req, resp, cb);
    }

    /**
     * This API is used to modify an existing migration task.
     * @param {ModifyMigrationRequest} req
     * @param {function(string, ModifyMigrationResponse):void} cb
     * @public
     */
    ModifyMigration(req, cb) {
        let resp = new ModifyMigrationResponse();
        this.request("ModifyMigration", req, resp, cb);
    }

    /**
     * This API is used to query order information.
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        let resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }

    /**
     * This API is used to query the instance billing parameters.
     * @param {DescribeInstanceTradeParameterRequest} req
     * @param {function(string, DescribeInstanceTradeParameterResponse):void} cb
     * @public
     */
    DescribeInstanceTradeParameter(req, cb) {
        let resp = new DescribeInstanceTradeParameterResponse();
        this.request("DescribeInstanceTradeParameter", req, resp, cb);
    }

    /**
     * This API is used to query backup space usage details.
     * @param {DescribeBackupMonitorRequest} req
     * @param {function(string, DescribeBackupMonitorResponse):void} cb
     * @public
     */
    DescribeBackupMonitor(req, cb) {
        let resp = new DescribeBackupMonitorResponse();
        this.request("DescribeBackupMonitor", req, resp, cb);
    }

    /**
     * This API is used to clone and rename databases of an instance. The clones are still in the instance from which they are cloned.
     * @param {CloneDBRequest} req
     * @param {function(string, CloneDBResponse):void} cb
     * @public
     */
    CloneDB(req, cb) {
        let resp = new CloneDBResponse();
        this.request("CloneDB", req, resp, cb);
    }

    /**
     * This API is used to roll back the database by backup set.
     * @param {RestoreInstanceRequest} req
     * @param {function(string, RestoreInstanceResponse):void} cb
     * @public
     */
    RestoreInstance(req, cb) {
        let resp = new RestoreInstanceResponse();
        this.request("RestoreInstance", req, resp, cb);
    }

    /**
     * This API is used to modify the project to which a database instance belongs.
     * @param {ModifyDBInstanceProjectRequest} req
     * @param {function(string, ModifyDBInstanceProjectResponse):void} cb
     * @public
     */
    ModifyDBInstanceProject(req, cb) {
        let resp = new ModifyDBInstanceProjectResponse();
        this.request("ModifyDBInstanceProject", req, resp, cb);
    }

    /**
     * This API is used to query the real-time statistics list of cross-region backups.
     * @param {DescribeCrossBackupStatisticalRequest} req
     * @param {function(string, DescribeCrossBackupStatisticalResponse):void} cb
     * @public
     */
    DescribeCrossBackupStatistical(req, cb) {
        let resp = new DescribeCrossBackupStatisticalResponse();
        this.request("DescribeCrossBackupStatistical", req, resp, cb);
    }

    /**
     * This API is used to delete an instance account.
     * @param {DeleteAccountRequest} req
     * @param {function(string, DeleteAccountResponse):void} cb
     * @public
     */
    DeleteAccount(req, cb) {
        let resp = new DeleteAccountResponse();
        this.request("DeleteAccount", req, resp, cb);
    }

    /**
     * This API is used to enable/disable/update SSL encryption.
     * @param {ModifyDBInstanceSSLRequest} req
     * @param {function(string, ModifyDBInstanceSSLResponse):void} cb
     * @public
     */
    ModifyDBInstanceSSL(req, cb) {
        let resp = new ModifyDBInstanceSSLResponse();
        this.request("ModifyDBInstanceSSL", req, resp, cb);
    }

    /**
     * This API is used to modify the backup policy.
     * @param {ModifyBackupStrategyRequest} req
     * @param {function(string, ModifyBackupStrategyResponse):void} cb
     * @public
     */
    ModifyBackupStrategy(req, cb) {
        let resp = new ModifyBackupStrategyResponse();
        this.request("ModifyBackupStrategy", req, resp, cb);
    }

    /**
     * This API is used to query database configurations. It does not return information of the accounts that have permissions to operate the database.
     * @param {DescribeDBsNormalRequest} req
     * @param {function(string, DescribeDBsNormalResponse):void} cb
     * @public
     */
    DescribeDBsNormal(req, cb) {
        let resp = new DescribeDBsNormalResponse();
        this.request("DescribeDBsNormal", req, resp, cb);
    }

    /**
     * This API is used to enable the public network for the instance.
     * @param {ModifyOpenWanIpRequest} req
     * @param {function(string, ModifyOpenWanIpResponse):void} cb
     * @public
     */
    ModifyOpenWanIp(req, cb) {
        let resp = new ModifyOpenWanIpResponse();
        this.request("ModifyOpenWanIp", req, resp, cb);
    }

    /**
     * This API is used to query the list of eligible migration tasks based on the entered criteria.
     * @param {DescribeMigrationsRequest} req
     * @param {function(string, DescribeMigrationsResponse):void} cb
     * @public
     */
    DescribeMigrations(req, cb) {
        let resp = new DescribeMigrationsResponse();
        this.request("DescribeMigrations", req, resp, cb);
    }

    /**
     * This API is used to query database configuration information. This API does not contain accounts associated with databases.
     * @param {DescribeDatabasesNormalRequest} req
     * @param {function(string, DescribeDatabasesNormalResponse):void} cb
     * @public
     */
    DescribeDatabasesNormal(req, cb) {
        let resp = new DescribeDatabasesNormalResponse();
        this.request("DescribeDatabasesNormal", req, resp, cb);
    }

    /**
     * This API is used to roll back the instance by time point.
     * @param {RollbackInstanceRequest} req
     * @param {function(string, RollbackInstanceResponse):void} cb
     * @public
     */
    RollbackInstance(req, cb) {
        let resp = new RollbackInstanceResponse();
        this.request("RollbackInstance", req, resp, cb);
    }

    /**
     * This API is used to query the list of databases
     * @param {DescribeDBsRequest} req
     * @param {function(string, DescribeDBsResponse):void} cb
     * @public
     */
    DescribeDBs(req, cb) {
        let resp = new DescribeDBsResponse();
        this.request("DescribeDBs", req, resp, cb);
    }

    /**
     * This API is used to query the commands of creating backups canonically.
     * @param {DescribeBackupCommandRequest} req
     * @param {function(string, DescribeBackupCommandResponse):void} cb
     * @public
     */
    DescribeBackupCommand(req, cb) {
        let resp = new DescribeBackupCommandResponse();
        this.request("DescribeBackupCommand", req, resp, cb);
    }

    /**
     * This API is used to query the upgrade prices of a monthly subscribed instance.
.
     * @param {InquiryPriceUpgradeDBInstanceRequest} req
     * @param {function(string, InquiryPriceUpgradeDBInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpgradeDBInstance(req, cb) {
        let resp = new InquiryPriceUpgradeDBInstanceResponse();
        this.request("InquiryPriceUpgradeDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the automatic weight assignment result of the read-only group. The BalanceReadOnlyGroup API is used to perform routing weight assignment according to the automatic weight assignment result.
     * @param {DescribeReadOnlyGroupAutoWeightRequest} req
     * @param {function(string, DescribeReadOnlyGroupAutoWeightResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroupAutoWeight(req, cb) {
        let resp = new DescribeReadOnlyGroupAutoWeightResponse();
        this.request("DescribeReadOnlyGroupAutoWeight", req, resp, cb);
    }

    /**
     * This API is used to query the list of extended events.
     * @param {DescribeXEventsRequest} req
     * @param {function(string, DescribeXEventsResponse):void} cb
     * @public
     */
    DescribeXEvents(req, cb) {
        let resp = new DescribeXEventsResponse();
        this.request("DescribeXEvents", req, resp, cb);
    }

    /**
     * This API is used to modify a backup import task.
     * @param {ModifyBackupMigrationRequest} req
     * @param {function(string, ModifyBackupMigrationResponse):void} cb
     * @public
     */
    ModifyBackupMigration(req, cb) {
        let resp = new ModifyBackupMigrationResponse();
        this.request("ModifyBackupMigration", req, resp, cb);
    }

    /**
     * This API is used to query information on the databases and permissions associated with the account.
     * @param {DescribeDBPrivilegeByAccountRequest} req
     * @param {function(string, DescribeDBPrivilegeByAccountResponse):void} cb
     * @public
     */
    DescribeDBPrivilegeByAccount(req, cb) {
        let resp = new DescribeDBPrivilegeByAccountResponse();
        this.request("DescribeDBPrivilegeByAccount", req, resp, cb);
    }

    /**
     * This API is used to query information on the account and permissions associated with the database.
     * @param {DescribeAccountPrivilegeByDBRequest} req
     * @param {function(string, DescribeAccountPrivilegeByDBResponse):void} cb
     * @public
     */
    DescribeAccountPrivilegeByDB(req, cb) {
        let resp = new DescribeAccountPrivilegeByDBResponse();
        this.request("DescribeAccountPrivilegeByDB", req, resp, cb);
    }

    /**
     * This API is used to query the created backup details through the backup creation process ID. The process ID can be obtained through the CreateBackup API.
     * @param {DescribeBackupByFlowIdRequest} req
     * @param {function(string, DescribeBackupByFlowIdResponse):void} cb
     * @public
     */
    DescribeBackupByFlowId(req, cb) {
        let resp = new DescribeBackupByFlowIdResponse();
        this.request("DescribeBackupByFlowId", req, resp, cb);
    }

    /**
     * This API is used to query the time range available for instance rollback.
     * @param {DescribeRollbackTimeRequest} req
     * @param {function(string, DescribeRollbackTimeResponse):void} cb
     * @public
     */
    DescribeRollbackTime(req, cb) {
        let resp = new DescribeRollbackTimeResponse();
        this.request("DescribeRollbackTime", req, resp, cb);
    }

    /**
     * This API is used to query the security group details of instances.
     * @param {DescribeDBSecurityGroupsRequest} req
     * @param {function(string, DescribeDBSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBSecurityGroups(req, cb) {
        let resp = new DescribeDBSecurityGroupsResponse();
        this.request("DescribeDBSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to delete a backup import task.
     * @param {DeleteBackupMigrationRequest} req
     * @param {function(string, DeleteBackupMigrationResponse):void} cb
     * @public
     */
    DeleteBackupMigration(req, cb) {
        let resp = new DeleteBackupMigrationResponse();
        this.request("DeleteBackupMigration", req, resp, cb);
    }

    /**
     * This API is used to query the attributes of an instance.
     * @param {DescribeDBInstancesAttributeRequest} req
     * @param {function(string, DescribeDBInstancesAttributeResponse):void} cb
     * @public
     */
    DescribeDBInstancesAttribute(req, cb) {
        let resp = new DescribeDBInstancesAttributeResponse();
        this.request("DescribeDBInstancesAttribute", req, resp, cb);
    }

    /**
     * This API is used to upgrade an instance.
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req, cb) {
        let resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
    }

    /**
     * This API is used to modify read-only group details.
     * @param {ModifyReadOnlyGroupDetailsRequest} req
     * @param {function(string, ModifyReadOnlyGroupDetailsResponse):void} cb
     * @public
     */
    ModifyReadOnlyGroupDetails(req, cb) {
        let resp = new ModifyReadOnlyGroupDetailsResponse();
        this.request("ModifyReadOnlyGroupDetails", req, resp, cb);
    }

    /**
     * This API is used to query the read-only group where the read-only instance is located by its ID.
     * @param {DescribeReadOnlyGroupByReadOnlyInstanceRequest} req
     * @param {function(string, DescribeReadOnlyGroupByReadOnlyInstanceResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroupByReadOnlyInstance(req, cb) {
        let resp = new DescribeReadOnlyGroupByReadOnlyInstanceResponse();
        this.request("DescribeReadOnlyGroupByReadOnlyInstance", req, resp, cb);
    }


}
module.exports = SqlserverClient;
