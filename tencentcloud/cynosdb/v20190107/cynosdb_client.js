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
const UpgradeProxyVersionResponse = models.UpgradeProxyVersionResponse;
const ModifyMaintainPeriodConfigRequest = models.ModifyMaintainPeriodConfigRequest;
const ModifyClusterReadOnlyResponse = models.ModifyClusterReadOnlyResponse;
const DescribeResourcePackageDetailResponse = models.DescribeResourcePackageDetailResponse;
const SearchClusterTablesRequest = models.SearchClusterTablesRequest;
const DescribeMaintainPeriodRequest = models.DescribeMaintainPeriodRequest;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const DescribeClusterDatabaseTablesRequest = models.DescribeClusterDatabaseTablesRequest;
const DescribeClusterParamsResponse = models.DescribeClusterParamsResponse;
const RefundResourcePackageResponse = models.RefundResourcePackageResponse;
const ModifyInstanceNameResponse = models.ModifyInstanceNameResponse;
const DescribeParamTemplatesRequest = models.DescribeParamTemplatesRequest;
const DescribeSlaveZonesResponse = models.DescribeSlaveZonesResponse;
const DescribeProxiesResponse = models.DescribeProxiesResponse;
const DescribeClusterDetailDatabasesRequest = models.DescribeClusterDetailDatabasesRequest;
const InquirePriceMultiSpecRequest = models.InquirePriceMultiSpecRequest;
const CreateClustersResponse = models.CreateClustersResponse;
const CynosdbInstanceGrp = models.CynosdbInstanceGrp;
const ModifyInstanceParamRequest = models.ModifyInstanceParamRequest;
const DatabaseTables = models.DatabaseTables;
const UserHostPrivilege = models.UserHostPrivilege;
const ExportResourcePackageDeductDetailsResponse = models.ExportResourcePackageDeductDetailsResponse;
const DescribeClustersRequest = models.DescribeClustersRequest;
const OpenReadOnlyInstanceExclusiveAccessResponse = models.OpenReadOnlyInstanceExclusiveAccessResponse;
const SearchClusterDatabasesResponse = models.SearchClusterDatabasesResponse;
const CreateParamTemplateRequest = models.CreateParamTemplateRequest;
const DescribeBackupDownloadUserRestrictionRequest = models.DescribeBackupDownloadUserRestrictionRequest;
const DescribeClusterDetailRequest = models.DescribeClusterDetailRequest;
const ModifyResourcePackageNameRequest = models.ModifyResourcePackageNameRequest;
const BackupFileInfo = models.BackupFileInfo;
const UpgradeProxyRequest = models.UpgradeProxyRequest;
const DescribeBinlogDownloadUrlResponse = models.DescribeBinlogDownloadUrlResponse;
const SwitchClusterVpcRequest = models.SwitchClusterVpcRequest;
const CloseProxyRequest = models.CloseProxyRequest;
const CloseSSLRequest = models.CloseSSLRequest;
const CynosdbInstance = models.CynosdbInstance;
const DescribeClusterPasswordComplexityResponse = models.DescribeClusterPasswordComplexityResponse;
const DescribeAuditRuleWithInstanceIdsRequest = models.DescribeAuditRuleWithInstanceIdsRequest;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const ModifyBinlogSaveDaysRequest = models.ModifyBinlogSaveDaysRequest;
const ProxySpec = models.ProxySpec;
const AddInstancesResponse = models.AddInstancesResponse;
const BackupLimitClusterRestriction = models.BackupLimitClusterRestriction;
const SlowQueriesItem = models.SlowQueriesItem;
const DescribeIntegrateTaskRequest = models.DescribeIntegrateTaskRequest;
const ProxyGroupInfo = models.ProxyGroupInfo;
const CreateProxyEndPointRequest = models.CreateProxyEndPointRequest;
const ModifyBackupDownloadUserRestrictionResponse = models.ModifyBackupDownloadUserRestrictionResponse;
const AuditRuleTemplateInfo = models.AuditRuleTemplateInfo;
const DescribeParamTemplateDetailRequest = models.DescribeParamTemplateDetailRequest;
const ModifyAccountPrivilegesRequest = models.ModifyAccountPrivilegesRequest;
const ExportResourcePackageDeductDetailsRequest = models.ExportResourcePackageDeductDetailsRequest;
const UpgradeProxyResponse = models.UpgradeProxyResponse;
const DescribeClusterReadOnlyResponse = models.DescribeClusterReadOnlyResponse;
const DescribeInstanceSpecsRequest = models.DescribeInstanceSpecsRequest;
const DescribeProxyNodesResponse = models.DescribeProxyNodesResponse;
const CreateIntegrateClusterRequest = models.CreateIntegrateClusterRequest;
const ProxyNodeInfo = models.ProxyNodeInfo;
const DescribeZonesResponse = models.DescribeZonesResponse;
const ModifyParamTemplateRequest = models.ModifyParamTemplateRequest;
const OpenAuditServiceResponse = models.OpenAuditServiceResponse;
const ModifyServerlessStrategyResponse = models.ModifyServerlessStrategyResponse;
const ProxyGroupRwInfo = models.ProxyGroupRwInfo;
const DescribeProxyNodesRequest = models.DescribeProxyNodesRequest;
const InquirePriceCreateResponse = models.InquirePriceCreateResponse;
const DescribeClusterReadOnlyRequest = models.DescribeClusterReadOnlyRequest;
const DescribeIntegrateTaskResponse = models.DescribeIntegrateTaskResponse;
const CreateClusterDatabaseResponse = models.CreateClusterDatabaseResponse;
const CloseProxyResponse = models.CloseProxyResponse;
const DescribeResourcePackageSaleSpecRequest = models.DescribeResourcePackageSaleSpecRequest;
const UnbindClusterResourcePackagesResponse = models.UnbindClusterResourcePackagesResponse;
const DescribeClusterInstanceGrpsResponse = models.DescribeClusterInstanceGrpsResponse;
const ModifyBackupConfigResponse = models.ModifyBackupConfigResponse;
const ModifyClusterDatabaseRequest = models.ModifyClusterDatabaseRequest;
const DescribeServerlessStrategyResponse = models.DescribeServerlessStrategyResponse;
const InquirePriceMultiSpecResponse = models.InquirePriceMultiSpecResponse;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const ModifyBackupNameRequest = models.ModifyBackupNameRequest;
const AuditRuleFilters = models.AuditRuleFilters;
const DescribeClusterParamsRequest = models.DescribeClusterParamsRequest;
const ModifyAccountHostResponse = models.ModifyAccountHostResponse;
const ProxyEndPointConfigInfo = models.ProxyEndPointConfigInfo;
const DescribeServerlessInstanceSpecsResponse = models.DescribeServerlessInstanceSpecsResponse;
const DescribeBinlogsRequest = models.DescribeBinlogsRequest;
const InquirePriceModifyResponse = models.InquirePriceModifyResponse;
const SlaveZoneStockInfo = models.SlaveZoneStockInfo;
const ModifyProxyRwSplitRequest = models.ModifyProxyRwSplitRequest;
const DescribeResourcePackageListResponse = models.DescribeResourcePackageListResponse;
const RuleFilters = models.RuleFilters;
const ModifyAuditRuleTemplatesRequest = models.ModifyAuditRuleTemplatesRequest;
const DescribeProxiesRequest = models.DescribeProxiesRequest;
const ModifyParamItem = models.ModifyParamItem;
const ParamTemplateListInfo = models.ParamTemplateListInfo;
const CloseProxyEndPointRequest = models.CloseProxyEndPointRequest;
const DescribeBinlogsResponse = models.DescribeBinlogsResponse;
const AddClusterSlaveZoneResponse = models.AddClusterSlaveZoneResponse;
const DescribeProxySpecsResponse = models.DescribeProxySpecsResponse;
const BindClusterResourcePackagesRequest = models.BindClusterResourcePackagesRequest;
const IsolateInstanceResponse = models.IsolateInstanceResponse;
const CopyClusterPasswordComplexityResponse = models.CopyClusterPasswordComplexityResponse;
const DescribeClusterTransparentEncryptInfoRequest = models.DescribeClusterTransparentEncryptInfoRequest;
const GoodsSpec = models.GoodsSpec;
const DeleteParamTemplateRequest = models.DeleteParamTemplateRequest;
const ServerlessSpec = models.ServerlessSpec;
const ModifyBackupDownloadRestrictionRequest = models.ModifyBackupDownloadRestrictionRequest;
const DescribeClusterDetailDatabasesResponse = models.DescribeClusterDetailDatabasesResponse;
const CreateParamTemplateResponse = models.CreateParamTemplateResponse;
const UpgradeClusterVersionRequest = models.UpgradeClusterVersionRequest;
const DatabasePrivileges = models.DatabasePrivileges;
const DescribeSupportProxyVersionRequest = models.DescribeSupportProxyVersionRequest;
const DescribeProxySpecsRequest = models.DescribeProxySpecsRequest;
const ResumeServerlessRequest = models.ResumeServerlessRequest;
const InstanceNetInfo = models.InstanceNetInfo;
const ModifyClusterDatabaseResponse = models.ModifyClusterDatabaseResponse;
const InstanceParamItem = models.InstanceParamItem;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const UnbindClusterResourcePackagesRequest = models.UnbindClusterResourcePackagesRequest;
const ModifyBackupDownloadUserRestrictionRequest = models.ModifyBackupDownloadUserRestrictionRequest;
const ModifyMaintainPeriodConfigResponse = models.ModifyMaintainPeriodConfigResponse;
const SwitchClusterVpcResponse = models.SwitchClusterVpcResponse;
const DescribeZonesRequest = models.DescribeZonesRequest;
const Tag = models.Tag;
const RuleTemplateInfo = models.RuleTemplateInfo;
const PauseServerlessResponse = models.PauseServerlessResponse;
const DescribeInstanceDetailResponse = models.DescribeInstanceDetailResponse;
const DeleteAccountsResponse = models.DeleteAccountsResponse;
const CreateResourcePackageResponse = models.CreateResourcePackageResponse;
const ModifyBinlogConfigRequest = models.ModifyBinlogConfigRequest;
const SetRenewFlagResponse = models.SetRenewFlagResponse;
const CreateClustersRequest = models.CreateClustersRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const DescribeBackupConfigResponse = models.DescribeBackupConfigResponse;
const DescribeParamTemplatesResponse = models.DescribeParamTemplatesResponse;
const Addr = models.Addr;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const ServerlessZoneStockInfo = models.ServerlessZoneStockInfo;
const DbInfo = models.DbInfo;
const DescribeBackupDownloadUrlRequest = models.DescribeBackupDownloadUrlRequest;
const CopyClusterPasswordComplexityRequest = models.CopyClusterPasswordComplexityRequest;
const CreateProxyEndPointResponse = models.CreateProxyEndPointResponse;
const NetAddr = models.NetAddr;
const OpenWanRequest = models.OpenWanRequest;
const ReplayInstanceAuditLogRequest = models.ReplayInstanceAuditLogRequest;
const ModifyAccountPrivilegesResponse = models.ModifyAccountPrivilegesResponse;
const InquirePriceCreateRequest = models.InquirePriceCreateRequest;
const ModifyAuditServiceRequest = models.ModifyAuditServiceRequest;
const ModifyClusterNameResponse = models.ModifyClusterNameResponse;
const ExportInstanceSlowQueriesRequest = models.ExportInstanceSlowQueriesRequest;
const ModifyAuditServiceResponse = models.ModifyAuditServiceResponse;
const ResumeServerlessResponse = models.ResumeServerlessResponse;
const DescribeBackupDownloadUserRestrictionResponse = models.DescribeBackupDownloadUserRestrictionResponse;
const SaleZone = models.SaleZone;
const SwitchProxyVpcResponse = models.SwitchProxyVpcResponse;
const SlaveZoneAttrItem = models.SlaveZoneAttrItem;
const SwitchProxyVpcRequest = models.SwitchProxyVpcRequest;
const RestartInstanceResponse = models.RestartInstanceResponse;
const DescribeBinlogSaveDaysRequest = models.DescribeBinlogSaveDaysRequest;
const DescribeClusterTransparentEncryptInfoResponse = models.DescribeClusterTransparentEncryptInfoResponse;
const ActivateInstanceResponse = models.ActivateInstanceResponse;
const IsolateClusterRequest = models.IsolateClusterRequest;
const AddInstancesRequest = models.AddInstancesRequest;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const CynosdbInstanceDetail = models.CynosdbInstanceDetail;
const DescribeBackupDownloadRestrictionRequest = models.DescribeBackupDownloadRestrictionRequest;
const DescribeInstanceErrorLogsRequest = models.DescribeInstanceErrorLogsRequest;
const DescribeInstanceDetailRequest = models.DescribeInstanceDetailRequest;
const Package = models.Package;
const DeleteAccountsRequest = models.DeleteAccountsRequest;
const OpenClusterTransparentEncryptRequest = models.OpenClusterTransparentEncryptRequest;
const ReloadBalanceProxyNodeRequest = models.ReloadBalanceProxyNodeRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const RollbackTimeRange = models.RollbackTimeRange;
const CreateClusterDatabaseRequest = models.CreateClusterDatabaseRequest;
const OfflineInstanceRequest = models.OfflineInstanceRequest;
const CreateProxyResponse = models.CreateProxyResponse;
const Module = models.Module;
const OpenClusterTransparentEncryptResponse = models.OpenClusterTransparentEncryptResponse;
const ProxyVersionInfo = models.ProxyVersionInfo;
const DescribeRollbackTimeRangeRequest = models.DescribeRollbackTimeRangeRequest;
const InquirePriceRenewRequest = models.InquirePriceRenewRequest;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const ProxyInstanceWeight = models.ProxyInstanceWeight;
const CreateResourcePackageRequest = models.CreateResourcePackageRequest;
const CloseProxyEndPointResponse = models.CloseProxyEndPointResponse;
const DescribeBackupConfigRequest = models.DescribeBackupConfigRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const DescribeRollbackTimeRangeResponse = models.DescribeRollbackTimeRangeResponse;
const ModifyBackupNameResponse = models.ModifyBackupNameResponse;
const SwitchClusterZoneResponse = models.SwitchClusterZoneResponse;
const ProxyConnectionPoolInfo = models.ProxyConnectionPoolInfo;
const DescribeClusterPasswordComplexityRequest = models.DescribeClusterPasswordComplexityRequest;
const QueryFilter = models.QueryFilter;
const CreateAccountsResponse = models.CreateAccountsResponse;
const CloseWanResponse = models.CloseWanResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const SalePackageSpec = models.SalePackageSpec;
const Account = models.Account;
const ModifyResourcePackagesDeductionPriorityResponse = models.ModifyResourcePackagesDeductionPriorityResponse;
const CloseWanRequest = models.CloseWanRequest;
const InstanceNameWeight = models.InstanceNameWeight;
const UpgradeProxyVersionRequest = models.UpgradeProxyVersionRequest;
const GoodsPrice = models.GoodsPrice;
const ModifyResourcePackageClustersRequest = models.ModifyResourcePackageClustersRequest;
const ObjectTask = models.ObjectTask;
const DescribeFlowResponse = models.DescribeFlowResponse;
const ExportInstanceErrorLogsRequest = models.ExportInstanceErrorLogsRequest;
const ActivateInstanceRequest = models.ActivateInstanceRequest;
const DescribeBackupDownloadRestrictionResponse = models.DescribeBackupDownloadRestrictionResponse;
const DeleteClusterDatabaseRequest = models.DeleteClusterDatabaseRequest;
const CynosdbErrorLogItem = models.CynosdbErrorLogItem;
const ModifyVipVportRequest = models.ModifyVipVportRequest;
const InstanceAbility = models.InstanceAbility;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DescribeClusterInstanceGrpsRequest = models.DescribeClusterInstanceGrpsRequest;
const DescribeResourcesByDealNameResponse = models.DescribeResourcesByDealNameResponse;
const CreateAccountsRequest = models.CreateAccountsRequest;
const DeleteAuditRuleTemplatesRequest = models.DeleteAuditRuleTemplatesRequest;
const ExportInstanceSlowQueriesResponse = models.ExportInstanceSlowQueriesResponse;
const SwitchClusterZoneRequest = models.SwitchClusterZoneRequest;
const Ability = models.Ability;
const InstanceInitInfo = models.InstanceInitInfo;
const InquirePriceModifyRequest = models.InquirePriceModifyRequest;
const ModifyResourcePackagesDeductionPriorityRequest = models.ModifyResourcePackagesDeductionPriorityRequest;
const RemoveClusterSlaveZoneResponse = models.RemoveClusterSlaveZoneResponse;
const OpenClusterReadOnlyInstanceGroupAccessResponse = models.OpenClusterReadOnlyInstanceGroupAccessResponse;
const QueryParamFilter = models.QueryParamFilter;
const NewAccount = models.NewAccount;
const BindInstanceInfo = models.BindInstanceInfo;
const DescribeAuditRuleWithInstanceIdsResponse = models.DescribeAuditRuleWithInstanceIdsResponse;
const SearchClusterDatabasesRequest = models.SearchClusterDatabasesRequest;
const ModifyProxyDescResponse = models.ModifyProxyDescResponse;
const CreateIntegrateClusterResponse = models.CreateIntegrateClusterResponse;
const ModifyClusterSlaveZoneResponse = models.ModifyClusterSlaveZoneResponse;
const BinlogItem = models.BinlogItem;
const ModifyProxyDescRequest = models.ModifyProxyDescRequest;
const ReloadBalanceProxyNodeResponse = models.ReloadBalanceProxyNodeResponse;
const CloseAuditServiceResponse = models.CloseAuditServiceResponse;
const ModifyParamTemplateResponse = models.ModifyParamTemplateResponse;
const BindClusterResourcePackagesResponse = models.BindClusterResourcePackagesResponse;
const ProxyZone = models.ProxyZone;
const CreateProxyRequest = models.CreateProxyRequest;
const DescribeResourcePackageSaleSpecResponse = models.DescribeResourcePackageSaleSpecResponse;
const DescribeResourcesByDealNameRequest = models.DescribeResourcesByDealNameRequest;
const DescribeInstanceSlowQueriesResponse = models.DescribeInstanceSlowQueriesResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const CloseClusterPasswordComplexityResponse = models.CloseClusterPasswordComplexityResponse;
const DescribeBackupDownloadUrlResponse = models.DescribeBackupDownloadUrlResponse;
const TradePrice = models.TradePrice;
const DescribeBinlogConfigRequest = models.DescribeBinlogConfigRequest;
const CreateAuditRuleTemplateRequest = models.CreateAuditRuleTemplateRequest;
const PauseServerlessRequest = models.PauseServerlessRequest;
const CynosdbCluster = models.CynosdbCluster;
const OpenWanResponse = models.OpenWanResponse;
const OfflineClusterResponse = models.OfflineClusterResponse;
const ClusterTaskId = models.ClusterTaskId;
const ModifyAccountHostRequest = models.ModifyAccountHostRequest;
const DescribeFlowRequest = models.DescribeFlowRequest;
const DescribeClusterDatabaseTablesResponse = models.DescribeClusterDatabaseTablesResponse;
const OpenReadOnlyInstanceExclusiveAccessRequest = models.OpenReadOnlyInstanceExclusiveAccessRequest;
const CreateBackupRequest = models.CreateBackupRequest;
const SearchClusterTablesResponse = models.SearchClusterTablesResponse;
const DescribeMaintainPeriodResponse = models.DescribeMaintainPeriodResponse;
const DescribeBackupListResponse = models.DescribeBackupListResponse;
const DescribeResourcePackageDetailRequest = models.DescribeResourcePackageDetailRequest;
const ModifyClusterParamRequest = models.ModifyClusterParamRequest;
const ModifyClusterReadOnlyRequest = models.ModifyClusterReadOnlyRequest;
const OfflineInstanceResponse = models.OfflineInstanceResponse;
const ModifyClusterSlaveZoneRequest = models.ModifyClusterSlaveZoneRequest;
const DescribeInstanceErrorLogsResponse = models.DescribeInstanceErrorLogsResponse;
const DescribeSupportProxyVersionResponse = models.DescribeSupportProxyVersionResponse;
const DeleteClusterDatabaseResponse = models.DeleteClusterDatabaseResponse;
const CynosdbClusterDetail = models.CynosdbClusterDetail;
const RestartInstanceRequest = models.RestartInstanceRequest;
const PackageDetail = models.PackageDetail;
const BackupLimitVpcItem = models.BackupLimitVpcItem;
const BinlogConfigInfo = models.BinlogConfigInfo;
const ClusterReadOnlyValue = models.ClusterReadOnlyValue;
const DescribeInstanceSpecsResponse = models.DescribeInstanceSpecsResponse;
const ParamItem = models.ParamItem;
const DescribeClusterDetailResponse = models.DescribeClusterDetailResponse;
const ModifyResourcePackageClustersResponse = models.ModifyResourcePackageClustersResponse;
const InputAccount = models.InputAccount;
const ModifyClusterNameRequest = models.ModifyClusterNameRequest;
const InstanceAuditRule = models.InstanceAuditRule;
const RefundResourcePackageRequest = models.RefundResourcePackageRequest;
const DescribeBinlogDownloadUrlRequest = models.DescribeBinlogDownloadUrlRequest;
const ModifyInstanceNameRequest = models.ModifyInstanceNameRequest;
const UpgradeClusterVersionResponse = models.UpgradeClusterVersionResponse;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const DeleteParamTemplateResponse = models.DeleteParamTemplateResponse;
const ClusterInstanceDetail = models.ClusterInstanceDetail;
const OldAddrInfo = models.OldAddrInfo;
const OpenClusterPasswordComplexityRequest = models.OpenClusterPasswordComplexityRequest;
const ProxyConfigInfo = models.ProxyConfigInfo;
const PackagePriority = models.PackagePriority;
const DescribeInstancesWithinSameClusterRequest = models.DescribeInstancesWithinSameClusterRequest;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const SetRenewFlagRequest = models.SetRenewFlagRequest;
const DescribeServerlessInstanceSpecsRequest = models.DescribeServerlessInstanceSpecsRequest;
const ProxyGroup = models.ProxyGroup;
const AddClusterSlaveZoneRequest = models.AddClusterSlaveZoneRequest;
const CloseClusterPasswordComplexityRequest = models.CloseClusterPasswordComplexityRequest;
const DescribeIsolatedInstancesRequest = models.DescribeIsolatedInstancesRequest;
const ReplayInstanceAuditLogResponse = models.ReplayInstanceAuditLogResponse;
const IsolateInstanceRequest = models.IsolateInstanceRequest;
const DescribeAuditRuleTemplatesResponse = models.DescribeAuditRuleTemplatesResponse;
const LogicBackupConfigInfo = models.LogicBackupConfigInfo;
const IntegrateCreateClusterConfig = models.IntegrateCreateClusterConfig;
const DeleteBackupResponse = models.DeleteBackupResponse;
const ModifyBackupDownloadRestrictionResponse = models.ModifyBackupDownloadRestrictionResponse;
const ParamDetail = models.ParamDetail;
const OfflineClusterRequest = models.OfflineClusterRequest;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const OpenAuditServiceRequest = models.OpenAuditServiceRequest;
const ModifyResourcePackageNameResponse = models.ModifyResourcePackageNameResponse;
const DescribeBackupListRequest = models.DescribeBackupListRequest;
const IntegrateInstanceInfo = models.IntegrateInstanceInfo;
const ExportInstanceErrorLogsResponse = models.ExportInstanceErrorLogsResponse;
const ParamItemDetail = models.ParamItemDetail;
const DescribeBinlogSaveDaysResponse = models.DescribeBinlogSaveDaysResponse;
const IsolateClusterResponse = models.IsolateClusterResponse;
const ModifyVipVportResponse = models.ModifyVipVportResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const CloseAuditServiceRequest = models.CloseAuditServiceRequest;
const ModifyClusterPasswordComplexityResponse = models.ModifyClusterPasswordComplexityResponse;
const ParamInfo = models.ParamInfo;
const ModifyClusterParamResponse = models.ModifyClusterParamResponse;
const SecurityGroup = models.SecurityGroup;
const ModifyClusterPasswordComplexityRequest = models.ModifyClusterPasswordComplexityRequest;
const BackupLimitRestriction = models.BackupLimitRestriction;
const ModifyInstanceParamResponse = models.ModifyInstanceParamResponse;
const TemplateParamInfo = models.TemplateParamInfo;
const CreateBackupResponse = models.CreateBackupResponse;
const DescribeInstancesWithinSameClusterResponse = models.DescribeInstancesWithinSameClusterResponse;
const ResourcePackage = models.ResourcePackage;
const DescribeSlaveZonesRequest = models.DescribeSlaveZonesRequest;
const BillingResourceInfo = models.BillingResourceInfo;
const ModifyProxyRwSplitResponse = models.ModifyProxyRwSplitResponse;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const CreateAuditRuleTemplateResponse = models.CreateAuditRuleTemplateResponse;
const DescribeResourcePackageListRequest = models.DescribeResourcePackageListRequest;
const CloseSSLResponse = models.CloseSSLResponse;
const OpenClusterPasswordComplexityResponse = models.OpenClusterPasswordComplexityResponse;
const OpenClusterReadOnlyInstanceGroupAccessRequest = models.OpenClusterReadOnlyInstanceGroupAccessRequest;
const DescribeAuditRuleTemplatesRequest = models.DescribeAuditRuleTemplatesRequest;
const InstanceSpec = models.InstanceSpec;
const ModifyServerlessStrategyRequest = models.ModifyServerlessStrategyRequest;
const DescribeBinlogConfigResponse = models.DescribeBinlogConfigResponse;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const SaleRegion = models.SaleRegion;
const ModifyBackupConfigRequest = models.ModifyBackupConfigRequest;
const DescribeInstanceSlowQueriesRequest = models.DescribeInstanceSlowQueriesRequest;
const DescribeIsolatedInstancesResponse = models.DescribeIsolatedInstancesResponse;
const ModifyBinlogConfigResponse = models.ModifyBinlogConfigResponse;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const ModifiableInfo = models.ModifiableInfo;
const DescribeServerlessStrategyRequest = models.DescribeServerlessStrategyRequest;
const TablePrivileges = models.TablePrivileges;
const RemoveClusterSlaveZoneRequest = models.RemoveClusterSlaveZoneRequest;
const DeleteBackupRequest = models.DeleteBackupRequest;
const ErrorLogItemExport = models.ErrorLogItemExport;
const DescribeParamTemplateDetailResponse = models.DescribeParamTemplateDetailResponse;
const ModifyBinlogSaveDaysResponse = models.ModifyBinlogSaveDaysResponse;
const DeleteAuditRuleTemplatesResponse = models.DeleteAuditRuleTemplatesResponse;
const PolicyRule = models.PolicyRule;
const ZoneStockInfo = models.ZoneStockInfo;
const InquirePriceRenewResponse = models.InquirePriceRenewResponse;
const ModifyAuditRuleTemplatesResponse = models.ModifyAuditRuleTemplatesResponse;


/**
 * cynosdb client
 * @class
 */
class CynosdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cynosdb.intl.tencentcloudapi.com", "2019-01-07", credential, region, profile);
    }
    
    /**
     * This API is used to create a newly purchased cluster.
     * @param {CreateIntegrateClusterRequest} req
     * @param {function(string, CreateIntegrateClusterResponse):void} cb
     * @public
     */
    CreateIntegrateCluster(req, cb) {
        let resp = new CreateIntegrateClusterResponse();
        this.request("CreateIntegrateCluster", req, resp, cb);
    }

    /**
     * This API is used to upgrade the database proxy version.
     * @param {UpgradeProxyVersionRequest} req
     * @param {function(string, UpgradeProxyVersionResponse):void} cb
     * @public
     */
    UpgradeProxyVersion(req, cb) {
        let resp = new UpgradeProxyVersionResponse();
        this.request("UpgradeProxyVersion", req, resp, cb);
    }

    /**
     * This API is used to obtain the backup configuration information of a specified cluster, including the full backup time period and the backup file retention time.
     * @param {DescribeBackupConfigRequest} req
     * @param {function(string, DescribeBackupConfigResponse):void} cb
     * @public
     */
    DescribeBackupConfig(req, cb) {
        let resp = new DescribeBackupConfigResponse();
        this.request("DescribeBackupConfig", req, resp, cb);
    }

    /**
     * This API is used to replay instance audit logs.
     * @param {ReplayInstanceAuditLogRequest} req
     * @param {function(string, ReplayInstanceAuditLogResponse):void} cb
     * @public
     */
    ReplayInstanceAuditLog(req, cb) {
        let resp = new ReplayInstanceAuditLogResponse();
        this.request("ReplayInstanceAuditLog", req, resp, cb);
    }

    /**
     * This API is used to modify Binlog configuration.
     * @param {ModifyBinlogConfigRequest} req
     * @param {function(string, ModifyBinlogConfigResponse):void} cb
     * @public
     */
    ModifyBinlogConfig(req, cb) {
        let resp = new ModifyBinlogConfigResponse();
        this.request("ModifyBinlogConfig", req, resp, cb);
    }

    /**
     * This API is used to restore a serverless cluster.
     * @param {ResumeServerlessRequest} req
     * @param {function(string, ResumeServerlessResponse):void} cb
     * @public
     */
    ResumeServerless(req, cb) {
        let resp = new ResumeServerlessResponse();
        this.request("ResumeServerless", req, resp, cb);
    }

    /**
     * This API is used to create a database proxy connection point.
     * @param {CreateProxyEndPointRequest} req
     * @param {function(string, CreateProxyEndPointResponse):void} cb
     * @public
     */
    CreateProxyEndPoint(req, cb) {
        let resp = new CreateProxyEndPointResponse();
        this.request("CreateProxyEndPoint", req, resp, cb);
    }

    /**
     * This API is used to search cluster database lists.
     * @param {SearchClusterDatabasesRequest} req
     * @param {function(string, SearchClusterDatabasesResponse):void} cb
     * @public
     */
    SearchClusterDatabases(req, cb) {
        let resp = new SearchClusterDatabasesResponse();
        this.request("SearchClusterDatabases", req, resp, cb);
    }

    /**
     * This API is used to create audit rule templates.
     * @param {CreateAuditRuleTemplateRequest} req
     * @param {function(string, CreateAuditRuleTemplateResponse):void} cb
     * @public
     */
    CreateAuditRuleTemplate(req, cb) {
        let resp = new CreateAuditRuleTemplateResponse();
        this.request("CreateAuditRuleTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify maintenance time configuration.
     * @param {ModifyMaintainPeriodConfigRequest} req
     * @param {function(string, ModifyMaintainPeriodConfigResponse):void} cb
     * @public
     */
    ModifyMaintainPeriodConfig(req, cb) {
        let resp = new ModifyMaintainPeriodConfigResponse();
        this.request("ModifyMaintainPeriodConfig", req, resp, cb);
    }

    /**
     * This API is used to copy the password complexity of a replication cluster.
     * @param {CopyClusterPasswordComplexityRequest} req
     * @param {function(string, CopyClusterPasswordComplexityResponse):void} cb
     * @public
     */
    CopyClusterPasswordComplexity(req, cb) {
        let resp = new CopyClusterPasswordComplexityResponse();
        this.request("CopyClusterPasswordComplexity", req, resp, cb);
    }

    /**
     * This API is used to close the database audit service for TDSQL-C MySQL instances.
     * @param {CloseAuditServiceRequest} req
     * @param {function(string, CloseAuditServiceResponse):void} cb
     * @public
     */
    CloseAuditService(req, cb) {
        let resp = new CloseAuditServiceResponse();
        this.request("CloseAuditService", req, resp, cb);
    }

    /**
     * This API is used to query supported database proxy versions.
     * @param {DescribeSupportProxyVersionRequest} req
     * @param {function(string, DescribeSupportProxyVersionResponse):void} cb
     * @public
     */
    DescribeSupportProxyVersion(req, cb) {
        let resp = new DescribeSupportProxyVersionResponse();
        this.request("DescribeSupportProxyVersion", req, resp, cb);
    }

    /**
     * This API is used to search cluster data table lists.
     * @param {SearchClusterTablesRequest} req
     * @param {function(string, SearchClusterTablesResponse):void} cb
     * @public
     */
    SearchClusterTables(req, cb) {
        let resp = new SearchClusterTablesResponse();
        this.request("SearchClusterTables", req, resp, cb);
    }

    /**
     * This API is used to query from availability zones.
     * @param {DescribeSlaveZonesRequest} req
     * @param {function(string, DescribeSlaveZonesResponse):void} cb
     * @public
     */
    DescribeSlaveZones(req, cb) {
        let resp = new DescribeSlaveZonesResponse();
        this.request("DescribeSlaveZones", req, resp, cb);
    }

    /**
     * This API is used to close the database proxy connection address.
     * @param {CloseProxyEndPointRequest} req
     * @param {function(string, CloseProxyEndPointResponse):void} cb
     * @public
     */
    CloseProxyEndPoint(req, cb) {
        let resp = new CloseProxyEndPointResponse();
        this.request("CloseProxyEndPoint", req, resp, cb);
    }

    /**
     * This API is used to close the database proxy service of a cluster.
     * @param {CloseProxyRequest} req
     * @param {function(string, CloseProxyResponse):void} cb
     * @public
     */
    CloseProxy(req, cb) {
        let resp = new CloseProxyResponse();
        this.request("CloseProxy", req, resp, cb);
    }

    /**
     * This API is used to export the usage details of a resource package.
     * @param {ExportResourcePackageDeductDetailsRequest} req
     * @param {function(string, ExportResourcePackageDeductDetailsResponse):void} cb
     * @public
     */
    ExportResourcePackageDeductDetails(req, cb) {
        let resp = new ExportResourcePackageDeductDetailsResponse();
        this.request("ExportResourcePackageDeductDetails", req, resp, cb);
    }

    /**
     * This API is used to query the price for modifying the specifications of a prepaid cluster.
     * @param {InquirePriceModifyRequest} req
     * @param {function(string, InquirePriceModifyResponse):void} cb
     * @public
     */
    InquirePriceModify(req, cb) {
        let resp = new InquirePriceModifyResponse();
        this.request("InquirePriceModify", req, resp, cb);
    }

    /**
     * This API is used to replace the vpc of the database proxy.
     * @param {SwitchProxyVpcRequest} req
     * @param {function(string, SwitchProxyVpcResponse):void} cb
     * @public
     */
    SwitchProxyVpc(req, cb) {
        let resp = new SwitchProxyVpcResponse();
        this.request("SwitchProxyVpc", req, resp, cb);
    }

    /**
     * This API is used to display cluster details.
     * @param {DescribeClusterDetailRequest} req
     * @param {function(string, DescribeClusterDetailResponse):void} cb
     * @public
     */
    DescribeClusterDetail(req, cb) {
        let resp = new DescribeClusterDetailResponse();
        this.request("DescribeClusterDetail", req, resp, cb);
    }

    /**
     * This interface (DescribeInstanceSpecs) is used to query the instance specifications available for purchase on the query purchase page.
     * @param {DescribeInstanceSpecsRequest} req
     * @param {function(string, DescribeInstanceSpecsResponse):void} cb
     * @public
     */
    DescribeInstanceSpecs(req, cb) {
        let resp = new DescribeInstanceSpecsResponse();
        this.request("DescribeInstanceSpecs", req, resp, cb);
    }

    /**
     * This API is used to query the download address of Binlog.
     * @param {DescribeBinlogDownloadUrlRequest} req
     * @param {function(string, DescribeBinlogDownloadUrlResponse):void} cb
     * @public
     */
    DescribeBinlogDownloadUrl(req, cb) {
        let resp = new DescribeBinlogDownloadUrlResponse();
        this.request("DescribeBinlogDownloadUrl", req, resp, cb);
    }

    /**
     * This interface (DescribeResourcesByDealName) is used to query order-associated instances.
     * @param {DescribeResourcesByDealNameRequest} req
     * @param {function(string, DescribeResourcesByDealNameResponse):void} cb
     * @public
     */
    DescribeResourcesByDealName(req, cb) {
        let resp = new DescribeResourcesByDealNameResponse();
        this.request("DescribeResourcesByDealName", req, resp, cb);
    }

    /**
     * This interface (ActivateInstance) restores access to isolated instances.
     * @param {ActivateInstanceRequest} req
     * @param {function(string, ActivateInstanceResponse):void} cb
     * @public
     */
    ActivateInstance(req, cb) {
        let resp = new ActivateInstanceResponse();
        this.request("ActivateInstance", req, resp, cb);
    }

    /**
     * This API is used to query the list of proxy nodes.
     * @param {DescribeProxyNodesRequest} req
     * @param {function(string, DescribeProxyNodesResponse):void} cb
     * @public
     */
    DescribeProxyNodes(req, cb) {
        let resp = new DescribeProxyNodesResponse();
        this.request("DescribeProxyNodes", req, resp, cb);
    }

    /**
     * This API is used to query cluster transparent encryption information.
     * @param {DescribeClusterTransparentEncryptInfoRequest} req
     * @param {function(string, DescribeClusterTransparentEncryptInfoResponse):void} cb
     * @public
     */
    DescribeClusterTransparentEncryptInfo(req, cb) {
        let resp = new DescribeClusterTransparentEncryptInfoResponse();
        this.request("DescribeClusterTransparentEncryptInfo", req, resp, cb);
    }

    /**
     * This API is used to export instance slow logs.
     * @param {ExportInstanceSlowQueriesRequest} req
     * @param {function(string, ExportInstanceSlowQueriesResponse):void} cb
     * @public
     */
    ExportInstanceSlowQueries(req, cb) {
        let resp = new ExportInstanceSlowQueriesResponse();
        this.request("ExportInstanceSlowQueries", req, resp, cb);
    }

    /**
     * This API is used to modify the security group bound to the instance.
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to query account privileges.
     * @param {DescribeAccountPrivilegesRequest} req
     * @param {function(string, DescribeAccountPrivilegesResponse):void} cb
     * @public
     */
    DescribeAccountPrivileges(req, cb) {
        let resp = new DescribeAccountPrivilegesResponse();
        this.request("DescribeAccountPrivileges", req, resp, cb);
    }

    /**
     * This API is used to close cluster password complexity.
     * @param {CloseClusterPasswordComplexityRequest} req
     * @param {function(string, CloseClusterPasswordComplexityResponse):void} cb
     * @public
     */
    CloseClusterPasswordComplexity(req, cb) {
        let resp = new CloseClusterPasswordComplexityResponse();
        this.request("CloseClusterPasswordComplexity", req, resp, cb);
    }

    /**
     * This API is used to query the binlog retention period of a cluster in days.
     * @param {DescribeBinlogSaveDaysRequest} req
     * @param {function(string, DescribeBinlogSaveDaysResponse):void} cb
     * @public
     */
    DescribeBinlogSaveDays(req, cb) {
        let resp = new DescribeBinlogSaveDaysResponse();
        this.request("DescribeBinlogSaveDays", req, resp, cb);
    }

    /**
     * This API is used to query instance groups.
     * @param {DescribeClusterInstanceGrpsRequest} req
     * @param {function(string, DescribeClusterInstanceGrpsResponse):void} cb
     * @public
     */
    DescribeClusterInstanceGrps(req, cb) {
        let resp = new DescribeClusterInstanceGrpsResponse();
        this.request("DescribeClusterInstanceGrps", req, resp, cb);
    }

    /**
     * This interface is used for querying the recycle bin instance list.
     * @param {DescribeIsolatedInstancesRequest} req
     * @param {function(string, DescribeIsolatedInstancesResponse):void} cb
     * @public
     */
    DescribeIsolatedInstances(req, cb) {
        let resp = new DescribeIsolatedInstancesResponse();
        this.request("DescribeIsolatedInstances", req, resp, cb);
    }

    /**
     * This API is used to modify cluster names.
     * @param {ModifyClusterNameRequest} req
     * @param {function(string, ModifyClusterNameResponse):void} cb
     * @public
     */
    ModifyClusterName(req, cb) {
        let resp = new ModifyClusterNameResponse();
        this.request("ModifyClusterName", req, resp, cb);
    }

    /**
     * This API is used to configure read-write separation for database proxy.
     * @param {ModifyProxyRwSplitRequest} req
     * @param {function(string, ModifyProxyRwSplitResponse):void} cb
     * @public
     */
    ModifyProxyRwSplit(req, cb) {
        let resp = new ModifyProxyRwSplitResponse();
        this.request("ModifyProxyRwSplit", req, resp, cb);
    }

    /**
     * This API is used to modify the ip and port of an instance group.
     * @param {ModifyVipVportRequest} req
     * @param {function(string, ModifyVipVportResponse):void} cb
     * @public
     */
    ModifyVipVport(req, cb) {
        let resp = new ModifyVipVportResponse();
        this.request("ModifyVipVport", req, resp, cb);
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
     * This API is used to modify the description of a database proxy.
     * @param {ModifyProxyDescRequest} req
     * @param {function(string, ModifyProxyDescResponse):void} cb
     * @public
     */
    ModifyProxyDesc(req, cb) {
        let resp = new ModifyProxyDescResponse();
        this.request("ModifyProxyDesc", req, resp, cb);
    }

    /**
     * This API is used to create parameter templates.
     * @param {CreateParamTemplateRequest} req
     * @param {function(string, CreateParamTemplateResponse):void} cb
     * @public
     */
    CreateParamTemplate(req, cb) {
        let resp = new CreateParamTemplateResponse();
        this.request("CreateParamTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify the slave availability zone of a cluster.
     * @param {ModifyClusterSlaveZoneRequest} req
     * @param {function(string, ModifyClusterSlaveZoneResponse):void} cb
     * @public
     */
    ModifyClusterSlaveZone(req, cb) {
        let resp = new ModifyClusterSlaveZoneResponse();
        this.request("ModifyClusterSlaveZone", req, resp, cb);
    }

    /**
     * This API is used to modify the binding relationship between resource packages and clusters.
     * @param {ModifyResourcePackageClustersRequest} req
     * @param {function(string, ModifyResourcePackageClustersResponse):void} cb
     * @public
     */
    ModifyResourcePackageClusters(req, cb) {
        let resp = new ModifyResourcePackageClustersResponse();
        this.request("ModifyResourcePackageClusters", req, resp, cb);
    }

    /**
     * This API is used to modify or enable cluster password complexity.
     * @param {ModifyClusterPasswordComplexityRequest} req
     * @param {function(string, ModifyClusterPasswordComplexityResponse):void} cb
     * @public
     */
    ModifyClusterPasswordComplexity(req, cb) {
        let resp = new ModifyClusterPasswordComplexityResponse();
        this.request("ModifyClusterPasswordComplexity", req, resp, cb);
    }

    /**
     * This API is used to create a manual backup for a cluster.
     * @param {CreateBackupRequest} req
     * @param {function(string, CreateBackupResponse):void} cb
     * @public
     */
    CreateBackup(req, cb) {
        let resp = new CreateBackupResponse();
        this.request("CreateBackup", req, resp, cb);
    }

    /**
     * This interface (OfflineInstance) is used to terminate an instance.
     * @param {OfflineInstanceRequest} req
     * @param {function(string, OfflineInstanceResponse):void} cb
     * @public
     */
    OfflineInstance(req, cb) {
        let resp = new OfflineInstanceResponse();
        this.request("OfflineInstance", req, resp, cb);
    }

    /**
     * This interface (IsolateCluster) is used to isolate a cluster.
     * @param {IsolateClusterRequest} req
     * @param {function(string, IsolateClusterResponse):void} cb
     * @public
     */
    IsolateCluster(req, cb) {
        let resp = new IsolateClusterResponse();
        this.request("IsolateCluster", req, resp, cb);
    }

    /**
     * This API is used to query the instance list under the same cluster.
     * @param {DescribeInstancesWithinSameClusterRequest} req
     * @param {function(string, DescribeInstancesWithinSameClusterResponse):void} cb
     * @public
     */
    DescribeInstancesWithinSameCluster(req, cb) {
        let resp = new DescribeInstancesWithinSameClusterResponse();
        this.request("DescribeInstancesWithinSameCluster", req, resp, cb);
    }

    /**
     * This API is used to reboot an instance.
     * @param {RestartInstanceRequest} req
     * @param {function(string, RestartInstanceResponse):void} cb
     * @public
     */
    RestartInstance(req, cb) {
        let resp = new RestartInstanceResponse();
        this.request("RestartInstance", req, resp, cb);
    }

    /**
     * This API is used to upgrade database proxy configuration.
     * @param {UpgradeProxyRequest} req
     * @param {function(string, UpgradeProxyResponse):void} cb
     * @public
     */
    UpgradeProxy(req, cb) {
        let resp = new UpgradeProxyResponse();
        this.request("UpgradeProxy", req, resp, cb);
    }

    /**
     * This API is used to inquire prices in batch.
     * @param {InquirePriceMultiSpecRequest} req
     * @param {function(string, InquirePriceMultiSpecResponse):void} cb
     * @public
     */
    InquirePriceMultiSpec(req, cb) {
        let resp = new InquirePriceMultiSpecResponse();
        this.request("InquirePriceMultiSpec", req, resp, cb);
    }

    /**
     * This API is used to describe clusters.
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }

    /**
     * This interface (CloseWan) is used to disable public network.
     * @param {CloseWanRequest} req
     * @param {function(string, CloseWanResponse):void} cb
     * @public
     */
    CloseWan(req, cb) {
        let resp = new CloseWanResponse();
        this.request("CloseWan", req, resp, cb);
    }

    /**
     * This API is used to query project security group information.
     * @param {DescribeProjectSecurityGroupsRequest} req
     * @param {function(string, DescribeProjectSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroups(req, cb) {
        let resp = new DescribeProjectSecurityGroupsResponse();
        this.request("DescribeProjectSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to modify account authorization of a database.
     * @param {ModifyClusterDatabaseRequest} req
     * @param {function(string, ModifyClusterDatabaseResponse):void} cb
     * @public
     */
    ModifyClusterDatabase(req, cb) {
        let resp = new ModifyClusterDatabaseResponse();
        this.request("ModifyClusterDatabase", req, resp, cb);
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
     * This API is used to query the default backup download access restrictions of user-level settings in the current region.
     * @param {DescribeBackupDownloadUserRestrictionRequest} req
     * @param {function(string, DescribeBackupDownloadUserRestrictionResponse):void} cb
     * @public
     */
    DescribeBackupDownloadUserRestriction(req, cb) {
        let resp = new DescribeBackupDownloadUserRestrictionResponse();
        this.request("DescribeBackupDownloadUserRestriction", req, resp, cb);
    }

    /**
     * This API is used to modify a parameter template.
     * @param {ModifyParamTemplateRequest} req
     * @param {function(string, ModifyParamTemplateResponse):void} cb
     * @public
     */
    ModifyParamTemplate(req, cb) {
        let resp = new ModifyParamTemplateResponse();
        this.request("ModifyParamTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify the deduction priority of the bound resource package.
     * @param {ModifyResourcePackagesDeductionPriorityRequest} req
     * @param {function(string, ModifyResourcePackagesDeductionPriorityResponse):void} cb
     * @public
     */
    ModifyResourcePackagesDeductionPriority(req, cb) {
        let resp = new ModifyResourcePackagesDeductionPriorityResponse();
        this.request("ModifyResourcePackagesDeductionPriority", req, resp, cb);
    }

    /**
     * This API is used to query the instance parameter list.
     * @param {DescribeInstanceParamsRequest} req
     * @param {function(string, DescribeInstanceParamsResponse):void} cb
     * @public
     */
    DescribeInstanceParams(req, cb) {
        let resp = new DescribeInstanceParamsResponse();
        this.request("DescribeInstanceParams", req, resp, cb);
    }

    /**
     * This API is used to query the slow query logs of an instance.
     * @param {DescribeInstanceSlowQueriesRequest} req
     * @param {function(string, DescribeInstanceSlowQueriesResponse):void} cb
     * @public
     */
    DescribeInstanceSlowQueries(req, cb) {
        let resp = new DescribeInstanceSlowQueriesResponse();
        this.request("DescribeInstanceSlowQueries", req, resp, cb);
    }

    /**
     * This API is used to modify cluster parameters.
     * @param {ModifyClusterParamRequest} req
     * @param {function(string, ModifyClusterParamResponse):void} cb
     * @public
     */
    ModifyClusterParam(req, cb) {
        let resp = new ModifyClusterParamResponse();
        this.request("ModifyClusterParam", req, resp, cb);
    }

    /**
     * This API is used to purchase new clusters.
     * @param {CreateClustersRequest} req
     * @param {function(string, CreateClustersResponse):void} cb
     * @public
     */
    CreateClusters(req, cb) {
        let resp = new CreateClustersResponse();
        this.request("CreateClusters", req, resp, cb);
    }

    /**
     * This API is used to modify the download source restrictions for backup files in the user's current region. It can be configured to allow downloads from both private and public networks, only from a private network, or from a designated vpc or ip within the private network.
     * @param {ModifyBackupDownloadUserRestrictionRequest} req
     * @param {function(string, ModifyBackupDownloadUserRestrictionResponse):void} cb
     * @public
     */
    ModifyBackupDownloadUserRestriction(req, cb) {
        let resp = new ModifyBackupDownloadUserRestrictionResponse();
        this.request("ModifyBackupDownloadUserRestriction", req, resp, cb);
    }

    /**
     * This API is used to create user accounts.
     * @param {CreateAccountsRequest} req
     * @param {function(string, CreateAccountsResponse):void} cb
     * @public
     */
    CreateAccounts(req, cb) {
        let resp = new CreateAccountsResponse();
        this.request("CreateAccounts", req, resp, cb);
    }

    /**
     * This API is used to purchase new resource packets.
     * @param {CreateResourcePackageRequest} req
     * @param {function(string, CreateResourcePackageResponse):void} cb
     * @public
     */
    CreateResourcePackage(req, cb) {
        let resp = new CreateResourcePackageResponse();
        this.request("CreateResourcePackage", req, resp, cb);
    }

    /**
     * This interface is used to delete a database.
     * @param {DeleteClusterDatabaseRequest} req
     * @param {function(string, DeleteClusterDatabaseResponse):void} cb
     * @public
     */
    DeleteClusterDatabase(req, cb) {
        let resp = new DeleteClusterDatabaseResponse();
        this.request("DeleteClusterDatabase", req, resp, cb);
    }

    /**
     * This API is used to switch the primary and secondary AZs of a cluster.
     * @param {SwitchClusterZoneRequest} req
     * @param {function(string, SwitchClusterZoneResponse):void} cb
     * @public
     */
    SwitchClusterZone(req, cb) {
        let resp = new SwitchClusterZoneResponse();
        this.request("SwitchClusterZone", req, resp, cb);
    }

    /**
     * This API is used to add instances to a cluster.
     * @param {AddInstancesRequest} req
     * @param {function(string, AddInstancesResponse):void} cb
     * @public
     */
    AddInstances(req, cb) {
        let resp = new AddInstancesResponse();
        this.request("AddInstances", req, resp, cb);
    }

    /**
     * This API is used to delete user accounts.
     * @param {DeleteAccountsRequest} req
     * @param {function(string, DeleteAccountsResponse):void} cb
     * @public
     */
    DeleteAccounts(req, cb) {
        let resp = new DeleteAccountsResponse();
        this.request("DeleteAccounts", req, resp, cb);
    }

    /**
     * This API is used to enable read-only instance group access.
     * @param {OpenClusterReadOnlyInstanceGroupAccessRequest} req
     * @param {function(string, OpenClusterReadOnlyInstanceGroupAccessResponse):void} cb
     * @public
     */
    OpenClusterReadOnlyInstanceGroupAccess(req, cb) {
        let resp = new OpenClusterReadOnlyInstanceGroupAccessResponse();
        this.request("OpenClusterReadOnlyInstanceGroupAccess", req, resp, cb);
    }

    /**
     * Enable transparent data encryption for the cluster.
     * @param {OpenClusterTransparentEncryptRequest} req
     * @param {function(string, OpenClusterTransparentEncryptResponse):void} cb
     * @public
     */
    OpenClusterTransparentEncrypt(req, cb) {
        let resp = new OpenClusterTransparentEncryptResponse();
        this.request("OpenClusterTransparentEncrypt", req, resp, cb);
    }

    /**
     * This API is used to query all parameter template information under the user-specified product.
     * @param {DescribeParamTemplatesRequest} req
     * @param {function(string, DescribeParamTemplatesResponse):void} cb
     * @public
     */
    DescribeParamTemplates(req, cb) {
        let resp = new DescribeParamTemplatesResponse();
        this.request("DescribeParamTemplates", req, resp, cb);
    }

    /**
     * This API is used to delete manual backups for a cluster. Automatic backups cannot be deleted.
     * @param {DeleteBackupRequest} req
     * @param {function(string, DeleteBackupResponse):void} cb
     * @public
     */
    DeleteBackup(req, cb) {
        let resp = new DeleteBackupResponse();
        this.request("DeleteBackup", req, resp, cb);
    }

    /**
     * This API is used to query serverless policies.
     * @param {DescribeServerlessStrategyRequest} req
     * @param {function(string, DescribeServerlessStrategyResponse):void} cb
     * @public
     */
    DescribeServerlessStrategy(req, cb) {
        let resp = new DescribeServerlessStrategyResponse();
        this.request("DescribeServerlessStrategy", req, resp, cb);
    }

    /**
     * This API is used to suspend a serverless cluster.
     * @param {PauseServerlessRequest} req
     * @param {function(string, PauseServerlessResponse):void} cb
     * @public
     */
    PauseServerless(req, cb) {
        let resp = new PauseServerlessResponse();
        this.request("PauseServerless", req, resp, cb);
    }

    /**
     * This API is used to modify account hosts.
     * @param {ModifyAccountHostRequest} req
     * @param {function(string, ModifyAccountHostResponse):void} cb
     * @public
     */
    ModifyAccountHost(req, cb) {
        let resp = new ModifyAccountHostResponse();
        this.request("ModifyAccountHost", req, resp, cb);
    }

    /**
     * This API is used to modify the database account password.
     * @param {ResetAccountPasswordRequest} req
     * @param {function(string, ResetAccountPasswordResponse):void} cb
     * @public
     */
    ResetAccountPassword(req, cb) {
        let resp = new ResetAccountPasswordResponse();
        this.request("ResetAccountPassword", req, resp, cb);
    }

    /**
     * This API is used to query instance details.
     * @param {DescribeInstanceDetailRequest} req
     * @param {function(string, DescribeInstanceDetailResponse):void} cb
     * @public
     */
    DescribeInstanceDetail(req, cb) {
        let resp = new DescribeInstanceDetailResponse();
        this.request("DescribeInstanceDetail", req, resp, cb);
    }

    /**
     * This API is used to query the rollback time range.
     * @param {DescribeRollbackTimeRangeRequest} req
     * @param {function(string, DescribeRollbackTimeRangeResponse):void} cb
     * @public
     */
    DescribeRollbackTimeRange(req, cb) {
        let resp = new DescribeRollbackTimeRangeResponse();
        this.request("DescribeRollbackTimeRange", req, resp, cb);
    }

    /**
     * This API is used to query task flow information.
     * @param {DescribeFlowRequest} req
     * @param {function(string, DescribeFlowResponse):void} cb
     * @public
     */
    DescribeFlow(req, cb) {
        let resp = new DescribeFlowResponse();
        this.request("DescribeFlow", req, resp, cb);
    }

    /**
     * This API is used to modify the instance parameters.
     * @param {ModifyInstanceParamRequest} req
     * @param {function(string, ModifyInstanceParamResponse):void} cb
     * @public
     */
    ModifyInstanceParam(req, cb) {
        let resp = new ModifyInstanceParamResponse();
        this.request("ModifyInstanceParam", req, resp, cb);
    }

    /**
     * This API is used to bind resource packages to a cluster.
     * @param {BindClusterResourcePackagesRequest} req
     * @param {function(string, BindClusterResourcePackagesResponse):void} cb
     * @public
     */
    BindClusterResourcePackages(req, cb) {
        let resp = new BindClusterResourcePackagesResponse();
        this.request("BindClusterResourcePackages", req, resp, cb);
    }

    /**
     * This API is used to query available specifications of Serverless instances.
     * @param {DescribeServerlessInstanceSpecsRequest} req
     * @param {function(string, DescribeServerlessInstanceSpecsResponse):void} cb
     * @public
     */
    DescribeServerlessInstanceSpecs(req, cb) {
        let resp = new DescribeServerlessInstanceSpecsResponse();
        this.request("DescribeServerlessInstanceSpecs", req, resp, cb);
    }

    /**
     * This API is used to unbind resource packages from clusters.
     * @param {UnbindClusterResourcePackagesRequest} req
     * @param {function(string, UnbindClusterResourcePackagesResponse):void} cb
     * @public
     */
    UnbindClusterResourcePackages(req, cb) {
        let resp = new UnbindClusterResourcePackagesResponse();
        this.request("UnbindClusterResourcePackages", req, resp, cb);
    }

    /**
     * This API is used to query agent list.
     * @param {DescribeProxiesRequest} req
     * @param {function(string, DescribeProxiesResponse):void} cb
     * @public
     */
    DescribeProxies(req, cb) {
        let resp = new DescribeProxiesResponse();
        this.request("DescribeProxies", req, resp, cb);
    }

    /**
     * This interface (OpenWan) is used to enable external network.
     * @param {OpenWanRequest} req
     * @param {function(string, OpenWanResponse):void} cb
     * @public
     */
    OpenWan(req, cb) {
        let resp = new OpenWanResponse();
        this.request("OpenWan", req, resp, cb);
    }

    /**
     * This interface (InquirePriceCreate) is used for price inquiry of newly purchased clusters.
     * @param {InquirePriceCreateRequest} req
     * @param {function(string, InquirePriceCreateResponse):void} cb
     * @public
     */
    InquirePriceCreate(req, cb) {
        let resp = new InquirePriceCreateResponse();
        this.request("InquirePriceCreate", req, resp, cb);
    }

    /**
     * This API is used to modify the serverless policy.
     * @param {ModifyServerlessStrategyRequest} req
     * @param {function(string, ModifyServerlessStrategyResponse):void} cb
     * @public
     */
    ModifyServerlessStrategy(req, cb) {
        let resp = new ModifyServerlessStrategyResponse();
        this.request("ModifyServerlessStrategy", req, resp, cb);
    }

    /**
     * This API is used to query the cluster read-only switch.
     * @param {DescribeClusterReadOnlyRequest} req
     * @param {function(string, DescribeClusterReadOnlyResponse):void} cb
     * @public
     */
    DescribeClusterReadOnly(req, cb) {
        let resp = new DescribeClusterReadOnlyResponse();
        this.request("DescribeClusterReadOnly", req, resp, cb);
    }

    /**
     * This API is used to query resource package specifications.
     * @param {DescribeResourcePackageSaleSpecRequest} req
     * @param {function(string, DescribeResourcePackageSaleSpecResponse):void} cb
     * @public
     */
    DescribeResourcePackageSaleSpec(req, cb) {
        let resp = new DescribeResourcePackageSaleSpecResponse();
        this.request("DescribeResourcePackageSaleSpec", req, resp, cb);
    }

    /**
     * This API is used to modify account database and table permissions.
     * @param {ModifyAccountPrivilegesRequest} req
     * @param {function(string, ModifyAccountPrivilegesResponse):void} cb
     * @public
     */
    ModifyAccountPrivileges(req, cb) {
        let resp = new ModifyAccountPrivilegesResponse();
        this.request("ModifyAccountPrivileges", req, resp, cb);
    }

    /**
     * This API is used to obtain the audit rules of the instance.
     * @param {DescribeAuditRuleWithInstanceIdsRequest} req
     * @param {function(string, DescribeAuditRuleWithInstanceIdsResponse):void} cb
     * @public
     */
    DescribeAuditRuleWithInstanceIds(req, cb) {
        let resp = new DescribeAuditRuleWithInstanceIdsResponse();
        this.request("DescribeAuditRuleWithInstanceIds", req, resp, cb);
    }

    /**
     * This API is used to export the error logs of an instance.
     * @param {ExportInstanceErrorLogsRequest} req
     * @param {function(string, ExportInstanceErrorLogsResponse):void} cb
     * @public
     */
    ExportInstanceErrorLogs(req, cb) {
        let resp = new ExportInstanceErrorLogsResponse();
        this.request("ExportInstanceErrorLogs", req, resp, cb);
    }

    /**
     * This interface (AddClusterSlaveZone) is used to enable multi-az deployment for a cluster.
     * @param {AddClusterSlaveZoneRequest} req
     * @param {function(string, AddClusterSlaveZoneResponse):void} cb
     * @public
     */
    AddClusterSlaveZone(req, cb) {
        let resp = new AddClusterSlaveZoneResponse();
        this.request("AddClusterSlaveZone", req, resp, cb);
    }

    /**
     * This API is used to rename a backup file.
     * @param {ModifyBackupNameRequest} req
     * @param {function(string, ModifyBackupNameResponse):void} cb
     * @public
     */
    ModifyBackupName(req, cb) {
        let resp = new ModifyBackupNameResponse();
        this.request("ModifyBackupName", req, resp, cb);
    }

    /**
     * This API is used to query the database account list.
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * This API is used to set the auto-renewal feature of an instance.
     * @param {SetRenewFlagRequest} req
     * @param {function(string, SetRenewFlagResponse):void} cb
     * @public
     */
    SetRenewFlag(req, cb) {
        let resp = new SetRenewFlagResponse();
        this.request("SetRenewFlag", req, resp, cb);
    }

    /**
     * This API is used to query the renewal price of a cluster.
     * @param {InquirePriceRenewRequest} req
     * @param {function(string, InquirePriceRenewResponse):void} cb
     * @public
     */
    InquirePriceRenew(req, cb) {
        let resp = new InquirePriceRenewResponse();
        this.request("InquirePriceRenew", req, resp, cb);
    }

    /**
     * This API is used to query cluster tasks.
     * @param {DescribeIntegrateTaskRequest} req
     * @param {function(string, DescribeIntegrateTaskResponse):void} cb
     * @public
     */
    DescribeIntegrateTask(req, cb) {
        let resp = new DescribeIntegrateTaskResponse();
        this.request("DescribeIntegrateTask", req, resp, cb);
    }

    /**
     * This API is used to reload the database proxy of Cloud Load Balancer.
     * @param {ReloadBalanceProxyNodeRequest} req
     * @param {function(string, ReloadBalanceProxyNodeResponse):void} cb
     * @public
     */
    ReloadBalanceProxyNode(req, cb) {
        let resp = new ReloadBalanceProxyNodeResponse();
        this.request("ReloadBalanceProxyNode", req, resp, cb);
    }

    /**
     * This API is used to query the download source limit of the default backup configured by the user in the current region.
     * @param {DescribeBackupDownloadRestrictionRequest} req
     * @param {function(string, DescribeBackupDownloadRestrictionResponse):void} cb
     * @public
     */
    DescribeBackupDownloadRestriction(req, cb) {
        let resp = new DescribeBackupDownloadRestrictionResponse();
        this.request("DescribeBackupDownloadRestriction", req, resp, cb);
    }

    /**
     * This interface (OfflineCluster) is used to terminate clusters.
     * @param {OfflineClusterRequest} req
     * @param {function(string, OfflineClusterResponse):void} cb
     * @public
     */
    OfflineCluster(req, cb) {
        let resp = new OfflineClusterResponse();
        this.request("OfflineCluster", req, resp, cb);
    }

    /**
     * This API is used to access the table list.
     * @param {DescribeClusterDatabaseTablesRequest} req
     * @param {function(string, DescribeClusterDatabaseTablesResponse):void} cb
     * @public
     */
    DescribeClusterDatabaseTables(req, cb) {
        let resp = new DescribeClusterDatabaseTablesResponse();
        this.request("DescribeClusterDatabaseTables", req, resp, cb);
    }

    /**
     * This API is used to query the backup file list of a cluster.
     * @param {DescribeBackupListRequest} req
     * @param {function(string, DescribeBackupListResponse):void} cb
     * @public
     */
    DescribeBackupList(req, cb) {
        let resp = new DescribeBackupListResponse();
        this.request("DescribeBackupList", req, resp, cb);
    }

    /**
     * This API is used to modify the descriptions of a database account.
     * @param {ModifyAccountDescriptionRequest} req
     * @param {function(string, ModifyAccountDescriptionResponse):void} cb
     * @public
     */
    ModifyAccountDescription(req, cb) {
        let resp = new ModifyAccountDescriptionResponse();
        this.request("ModifyAccountDescription", req, resp, cb);
    }

    /**
     * This API is used to replace the cluster vpc.
     * @param {SwitchClusterVpcRequest} req
     * @param {function(string, SwitchClusterVpcResponse):void} cb
     * @public
     */
    SwitchClusterVpc(req, cb) {
        let resp = new SwitchClusterVpcResponse();
        this.request("SwitchClusterVpc", req, resp, cb);
    }

    /**
     * This API is used to create a database.
     * @param {CreateClusterDatabaseRequest} req
     * @param {function(string, CreateClusterDatabaseResponse):void} cb
     * @public
     */
    CreateClusterDatabase(req, cb) {
        let resp = new CreateClusterDatabaseResponse();
        this.request("CreateClusterDatabase", req, resp, cb);
    }

    /**
     * This API is used to enable database audit service for an instance.
     * @param {OpenAuditServiceRequest} req
     * @param {function(string, OpenAuditServiceResponse):void} cb
     * @public
     */
    OpenAuditService(req, cb) {
        let resp = new OpenAuditServiceResponse();
        this.request("OpenAuditService", req, resp, cb);
    }

    /**
     * This API is used to modify the read-only switch of a cluster.
     * @param {ModifyClusterReadOnlyRequest} req
     * @param {function(string, ModifyClusterReadOnlyResponse):void} cb
     * @public
     */
    ModifyClusterReadOnly(req, cb) {
        let resp = new ModifyClusterReadOnlyResponse();
        this.request("ModifyClusterReadOnly", req, resp, cb);
    }

    /**
     * This API is used to query audit rule template information.
     * @param {DescribeAuditRuleTemplatesRequest} req
     * @param {function(string, DescribeAuditRuleTemplatesResponse):void} cb
     * @public
     */
    DescribeAuditRuleTemplates(req, cb) {
        let resp = new DescribeAuditRuleTemplatesResponse();
        this.request("DescribeAuditRuleTemplates", req, resp, cb);
    }

    /**
     * This API is used to query resource package usage details.
     * @param {DescribeResourcePackageDetailRequest} req
     * @param {function(string, DescribeResourcePackageDetailResponse):void} cb
     * @public
     */
    DescribeResourcePackageDetail(req, cb) {
        let resp = new DescribeResourcePackageDetailResponse();
        this.request("DescribeResourcePackageDetail", req, resp, cb);
    }

    /**
     * This API is used to modify the backup configuration of a specified cluster.
     * @param {ModifyBackupConfigRequest} req
     * @param {function(string, ModifyBackupConfigResponse):void} cb
     * @public
     */
    ModifyBackupConfig(req, cb) {
        let resp = new ModifyBackupConfigResponse();
        this.request("ModifyBackupConfig", req, resp, cb);
    }

    /**
     * This API is used to query the list of instances.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to query binlog configurations.
     * @param {DescribeBinlogConfigRequest} req
     * @param {function(string, DescribeBinlogConfigResponse):void} cb
     * @public
     */
    DescribeBinlogConfig(req, cb) {
        let resp = new DescribeBinlogConfigResponse();
        this.request("DescribeBinlogConfig", req, resp, cb);
    }

    /**
     * This interface (UpgradeClusterVersion) is used to update the kernel minor version.
     * @param {UpgradeClusterVersionRequest} req
     * @param {function(string, UpgradeClusterVersionResponse):void} cb
     * @public
     */
    UpgradeClusterVersion(req, cb) {
        let resp = new UpgradeClusterVersionResponse();
        this.request("UpgradeClusterVersion", req, resp, cb);
    }

    /**
     * This API is used to query resource package list.
     * @param {DescribeResourcePackageListRequest} req
     * @param {function(string, DescribeResourcePackageListResponse):void} cb
     * @public
     */
    DescribeResourcePackageList(req, cb) {
        let resp = new DescribeResourcePackageListResponse();
        this.request("DescribeResourcePackageList", req, resp, cb);
    }

    /**
     * This API is used to query cluster parameters.
     * @param {DescribeClusterParamsRequest} req
     * @param {function(string, DescribeClusterParamsResponse):void} cb
     * @public
     */
    DescribeClusterParams(req, cb) {
        let resp = new DescribeClusterParamsResponse();
        this.request("DescribeClusterParams", req, resp, cb);
    }

    /**
     * This API is used to refund a resource package.
     * @param {RefundResourcePackageRequest} req
     * @param {function(string, RefundResourcePackageResponse):void} cb
     * @public
     */
    RefundResourcePackage(req, cb) {
        let resp = new RefundResourcePackageResponse();
        this.request("RefundResourcePackage", req, resp, cb);
    }

    /**
     * This API is used to modify instance name.
     * @param {ModifyInstanceNameRequest} req
     * @param {function(string, ModifyInstanceNameResponse):void} cb
     * @public
     */
    ModifyInstanceName(req, cb) {
        let resp = new ModifyInstanceNameResponse();
        this.request("ModifyInstanceName", req, resp, cb);
    }

    /**
     * This interface (DescribeMaintainPeriod) is used to query the instance maintenance window.
     * @param {DescribeMaintainPeriodRequest} req
     * @param {function(string, DescribeMaintainPeriodResponse):void} cb
     * @public
     */
    DescribeMaintainPeriod(req, cb) {
        let resp = new DescribeMaintainPeriodResponse();
        this.request("DescribeMaintainPeriod", req, resp, cb);
    }

    /**
     * This API is used to query database proxy specifications.
     * @param {DescribeProxySpecsRequest} req
     * @param {function(string, DescribeProxySpecsResponse):void} cb
     * @public
     */
    DescribeProxySpecs(req, cb) {
        let resp = new DescribeProxySpecsResponse();
        this.request("DescribeProxySpecs", req, resp, cb);
    }

    /**
     * This API is used to query database list.
     * @param {DescribeClusterDetailDatabasesRequest} req
     * @param {function(string, DescribeClusterDetailDatabasesResponse):void} cb
     * @public
     */
    DescribeClusterDetailDatabases(req, cb) {
        let resp = new DescribeClusterDetailDatabasesResponse();
        this.request("DescribeClusterDetailDatabases", req, resp, cb);
    }

    /**
     * This API is used to modify the audit configurations of an instance, such as audit log retention period and audit rule.
     * @param {ModifyAuditServiceRequest} req
     * @param {function(string, ModifyAuditServiceResponse):void} cb
     * @public
     */
    ModifyAuditService(req, cb) {
        let resp = new ModifyAuditServiceResponse();
        this.request("ModifyAuditService", req, resp, cb);
    }

    /**
     * This API is used to query marketable regional availability zone information.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * This API is used to query the download link of cluster backup files.
     * @param {DescribeBackupDownloadUrlRequest} req
     * @param {function(string, DescribeBackupDownloadUrlResponse):void} cb
     * @public
     */
    DescribeBackupDownloadUrl(req, cb) {
        let resp = new DescribeBackupDownloadUrlResponse();
        this.request("DescribeBackupDownloadUrl", req, resp, cb);
    }

    /**
     * This API is used to enable the database proxy of a cluster.
     * @param {CreateProxyRequest} req
     * @param {function(string, CreateProxyResponse):void} cb
     * @public
     */
    CreateProxy(req, cb) {
        let resp = new CreateProxyResponse();
        this.request("CreateProxy", req, resp, cb);
    }

    /**
     * This API is used to modify the download source limit of the backup file for the user in the current region. It can be configured to allow downloads from both private and public networks, only the private network, or a designated vpc or ip within the private network.
     * @param {ModifyBackupDownloadRestrictionRequest} req
     * @param {function(string, ModifyBackupDownloadRestrictionResponse):void} cb
     * @public
     */
    ModifyBackupDownloadRestriction(req, cb) {
        let resp = new ModifyBackupDownloadRestrictionResponse();
        this.request("ModifyBackupDownloadRestriction", req, resp, cb);
    }

    /**
     * This API is used to query the list of instance error logs.
     * @param {DescribeInstanceErrorLogsRequest} req
     * @param {function(string, DescribeInstanceErrorLogsResponse):void} cb
     * @public
     */
    DescribeInstanceErrorLogs(req, cb) {
        let resp = new DescribeInstanceErrorLogsResponse();
        this.request("DescribeInstanceErrorLogs", req, resp, cb);
    }

    /**
     * This API is used to modify the binlog retention period in days.
     * @param {ModifyBinlogSaveDaysRequest} req
     * @param {function(string, ModifyBinlogSaveDaysResponse):void} cb
     * @public
     */
    ModifyBinlogSaveDays(req, cb) {
        let resp = new ModifyBinlogSaveDaysResponse();
        this.request("ModifyBinlogSaveDays", req, resp, cb);
    }

    /**
     * This interface (OpenReadOnlyInstanceExclusiveAccess) is used to enable the dedicated access access group for a read-only instance.
     * @param {OpenReadOnlyInstanceExclusiveAccessRequest} req
     * @param {function(string, OpenReadOnlyInstanceExclusiveAccessResponse):void} cb
     * @public
     */
    OpenReadOnlyInstanceExclusiveAccess(req, cb) {
        let resp = new OpenReadOnlyInstanceExclusiveAccessResponse();
        this.request("OpenReadOnlyInstanceExclusiveAccess", req, resp, cb);
    }

    /**
     * This API is used to view the cluster password complexity details.
     * @param {DescribeClusterPasswordComplexityRequest} req
     * @param {function(string, DescribeClusterPasswordComplexityResponse):void} cb
     * @public
     */
    DescribeClusterPasswordComplexity(req, cb) {
        let resp = new DescribeClusterPasswordComplexityResponse();
        this.request("DescribeClusterPasswordComplexity", req, resp, cb);
    }

    /**
     * This API is used to delete a parameter template.
     * @param {DeleteParamTemplateRequest} req
     * @param {function(string, DeleteParamTemplateResponse):void} cb
     * @public
     */
    DeleteParamTemplate(req, cb) {
        let resp = new DeleteParamTemplateResponse();
        this.request("DeleteParamTemplate", req, resp, cb);
    }

    /**
     * This interface (UpgradeInstance) is used to upgrade instances.
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        let resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
    }

    /**
     * This interface (DescribeBinlogs) queries the cluster binlog list.
     * @param {DescribeBinlogsRequest} req
     * @param {function(string, DescribeBinlogsResponse):void} cb
     * @public
     */
    DescribeBinlogs(req, cb) {
        let resp = new DescribeBinlogsResponse();
        this.request("DescribeBinlogs", req, resp, cb);
    }

    /**
     * This API is used to query instance security group information.
     * @param {DescribeDBSecurityGroupsRequest} req
     * @param {function(string, DescribeDBSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBSecurityGroups(req, cb) {
        let resp = new DescribeDBSecurityGroupsResponse();
        this.request("DescribeDBSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to enable the custom password complexity feature.
     * @param {OpenClusterPasswordComplexityRequest} req
     * @param {function(string, OpenClusterPasswordComplexityResponse):void} cb
     * @public
     */
    OpenClusterPasswordComplexity(req, cb) {
        let resp = new OpenClusterPasswordComplexityResponse();
        this.request("OpenClusterPasswordComplexity", req, resp, cb);
    }

    /**
     * This API is used to modify resource package name.
     * @param {ModifyResourcePackageNameRequest} req
     * @param {function(string, ModifyResourcePackageNameResponse):void} cb
     * @public
     */
    ModifyResourcePackageName(req, cb) {
        let resp = new ModifyResourcePackageNameResponse();
        this.request("ModifyResourcePackageName", req, resp, cb);
    }

    /**
     * This API is used to disable multi-AZ deployment for a cluster.
     * @param {RemoveClusterSlaveZoneRequest} req
     * @param {function(string, RemoveClusterSlaveZoneResponse):void} cb
     * @public
     */
    RemoveClusterSlaveZone(req, cb) {
        let resp = new RemoveClusterSlaveZoneResponse();
        this.request("RemoveClusterSlaveZone", req, resp, cb);
    }

    /**
     * This API is used to disable SSL encryption.
     * @param {CloseSSLRequest} req
     * @param {function(string, CloseSSLResponse):void} cb
     * @public
     */
    CloseSSL(req, cb) {
        let resp = new CloseSSLResponse();
        this.request("CloseSSL", req, resp, cb);
    }

    /**
     * This API is used to query user parameter template details.
     * @param {DescribeParamTemplateDetailRequest} req
     * @param {function(string, DescribeParamTemplateDetailResponse):void} cb
     * @public
     */
    DescribeParamTemplateDetail(req, cb) {
        let resp = new DescribeParamTemplateDetailResponse();
        this.request("DescribeParamTemplateDetail", req, resp, cb);
    }

    /**
     * This API is used to isolate an instance.
     * @param {IsolateInstanceRequest} req
     * @param {function(string, IsolateInstanceResponse):void} cb
     * @public
     */
    IsolateInstance(req, cb) {
        let resp = new IsolateInstanceResponse();
        this.request("IsolateInstance", req, resp, cb);
    }


}
module.exports = CynosdbClient;
