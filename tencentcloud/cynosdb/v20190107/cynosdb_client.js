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
const ProxySpec = models.ProxySpec;
const ModifyClusterNameRequest = models.ModifyClusterNameRequest;
const ModifyProxyRwSplitRequest = models.ModifyProxyRwSplitRequest;
const DescribeRollbackTimeRangeRequest = models.DescribeRollbackTimeRangeRequest;
const DescribeResourcePackageListResponse = models.DescribeResourcePackageListResponse;
const InquirePriceRenewRequest = models.InquirePriceRenewRequest;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const InstanceAuditRule = models.InstanceAuditRule;
const ProxyInstanceWeight = models.ProxyInstanceWeight;
const CreateResourcePackageRequest = models.CreateResourcePackageRequest;
const DescribeClusterDetailDatabasesRequest = models.DescribeClusterDetailDatabasesRequest;
const DescribeBackupConfigRequest = models.DescribeBackupConfigRequest;
const ModifyAuditRuleTemplatesRequest = models.ModifyAuditRuleTemplatesRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const ModifyMaintainPeriodConfigRequest = models.ModifyMaintainPeriodConfigRequest;
const DescribeRollbackTimeRangeResponse = models.DescribeRollbackTimeRangeResponse;
const BillingResourceInfo = models.BillingResourceInfo;
const DescribeProxiesRequest = models.DescribeProxiesRequest;
const ModifyClusterPasswordComplexityResponse = models.ModifyClusterPasswordComplexityResponse;
const ModifyBackupNameResponse = models.ModifyBackupNameResponse;
const SwitchClusterZoneResponse = models.SwitchClusterZoneResponse;
const ProxyConnectionPoolInfo = models.ProxyConnectionPoolInfo;
const DescribeResourcePackageDetailResponse = models.DescribeResourcePackageDetailResponse;
const DescribeClusterPasswordComplexityRequest = models.DescribeClusterPasswordComplexityRequest;
const QueryFilter = models.QueryFilter;
const DescribeBinlogDownloadUrlRequest = models.DescribeBinlogDownloadUrlRequest;
const CreateAccountsResponse = models.CreateAccountsResponse;
const ModifyInstanceNameRequest = models.ModifyInstanceNameRequest;
const ModifyClusterDatabaseResponse = models.ModifyClusterDatabaseResponse;
const UpgradeClusterVersionResponse = models.UpgradeClusterVersionResponse;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const CloseWanResponse = models.CloseWanResponse;
const DescribeBinlogsResponse = models.DescribeBinlogsResponse;
const DeleteParamTemplateResponse = models.DeleteParamTemplateResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeZonesRequest = models.DescribeZonesRequest;
const ClusterInstanceDetail = models.ClusterInstanceDetail;
const AddClusterSlaveZoneResponse = models.AddClusterSlaveZoneResponse;
const DescribeProxySpecsResponse = models.DescribeProxySpecsResponse;
const OldAddrInfo = models.OldAddrInfo;
const SlowQueriesItem = models.SlowQueriesItem;
const DescribeClusterParamsResponse = models.DescribeClusterParamsResponse;
const CloseWanRequest = models.CloseWanRequest;
const BindClusterResourcePackagesRequest = models.BindClusterResourcePackagesRequest;
const IsolateInstanceResponse = models.IsolateInstanceResponse;
const ModifyInstanceNameResponse = models.ModifyInstanceNameResponse;
const DescribeParamTemplatesRequest = models.DescribeParamTemplatesRequest;
const CopyClusterPasswordComplexityResponse = models.CopyClusterPasswordComplexityResponse;
const UpgradeProxyVersionRequest = models.UpgradeProxyVersionRequest;
const SwitchClusterVpcRequest = models.SwitchClusterVpcRequest;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const DescribeProxiesResponse = models.DescribeProxiesResponse;
const ModifyResourcePackageClustersRequest = models.ModifyResourcePackageClustersRequest;
const DeleteParamTemplateRequest = models.DeleteParamTemplateRequest;
const DbInfo = models.DbInfo;
const DescribeFlowResponse = models.DescribeFlowResponse;
const ParamDetail = models.ParamDetail;
const DescribeResourcePackageSaleSpecRequest = models.DescribeResourcePackageSaleSpecRequest;
const ExportInstanceErrorLogsRequest = models.ExportInstanceErrorLogsRequest;
const CreateClustersResponse = models.CreateClustersResponse;
const SetRenewFlagRequest = models.SetRenewFlagRequest;
const RuleFilters = models.RuleFilters;
const OfflineClusterRequest = models.OfflineClusterRequest;
const DescribeClusterDetailDatabasesResponse = models.DescribeClusterDetailDatabasesResponse;
const CynosdbInstanceGrp = models.CynosdbInstanceGrp;
const CreateParamTemplateResponse = models.CreateParamTemplateResponse;
const ActivateInstanceRequest = models.ActivateInstanceRequest;
const DatabaseTables = models.DatabaseTables;
const ProxyGroup = models.ProxyGroup;
const AddClusterSlaveZoneRequest = models.AddClusterSlaveZoneRequest;
const RemoveClusterSlaveZoneResponse = models.RemoveClusterSlaveZoneResponse;
const CynosdbErrorLogItem = models.CynosdbErrorLogItem;
const UpgradeClusterVersionRequest = models.UpgradeClusterVersionRequest;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const ModifyVipVportRequest = models.ModifyVipVportRequest;
const DatabasePrivileges = models.DatabasePrivileges;
const DescribeClustersRequest = models.DescribeClustersRequest;
const ParamItem = models.ParamItem;
const DescribeSupportProxyVersionRequest = models.DescribeSupportProxyVersionRequest;
const DescribeProxySpecsRequest = models.DescribeProxySpecsRequest;
const CloseClusterPasswordComplexityRequest = models.CloseClusterPasswordComplexityRequest;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const OpenReadOnlyInstanceExclusiveAccessResponse = models.OpenReadOnlyInstanceExclusiveAccessResponse;
const ProxyGroupRwInfo = models.ProxyGroupRwInfo;
const DescribeClusterInstanceGrpsRequest = models.DescribeClusterInstanceGrpsRequest;
const DescribeResourcesByDealNameResponse = models.DescribeResourcesByDealNameResponse;
const InstanceNetInfo = models.InstanceNetInfo;
const CreateAccountsRequest = models.CreateAccountsRequest;
const DeleteAuditRuleTemplatesRequest = models.DeleteAuditRuleTemplatesRequest;
const DescribeAuditRuleTemplatesResponse = models.DescribeAuditRuleTemplatesResponse;
const Package = models.Package;
const SwitchClusterZoneRequest = models.SwitchClusterZoneRequest;
const InstanceParamItem = models.InstanceParamItem;
const ReloadBalanceProxyNodeRequest = models.ReloadBalanceProxyNodeRequest;
const DescribeInstanceDetailRequest = models.DescribeInstanceDetailRequest;
const ProxyZone = models.ProxyZone;
const Ability = models.Ability;
const InstanceInitInfo = models.InstanceInitInfo;
const PackageDetail = models.PackageDetail;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const ModifyMaintainPeriodConfigResponse = models.ModifyMaintainPeriodConfigResponse;
const SearchClusterTablesResponse = models.SearchClusterTablesResponse;
const SwitchClusterVpcResponse = models.SwitchClusterVpcResponse;
const DescribeClusterDetailRequest = models.DescribeClusterDetailRequest;
const SearchClusterTablesRequest = models.SearchClusterTablesRequest;
const DeleteBackupResponse = models.DeleteBackupResponse;
const ModifyInstanceParamRequest = models.ModifyInstanceParamRequest;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const ModifyResourcePackageNameRequest = models.ModifyResourcePackageNameRequest;
const OpenWanResponse = models.OpenWanResponse;
const PauseServerlessResponse = models.PauseServerlessResponse;
const OpenClusterReadOnlyInstanceGroupAccessResponse = models.OpenClusterReadOnlyInstanceGroupAccessResponse;
const DeleteAccountsResponse = models.DeleteAccountsResponse;
const UpgradeProxyVersionResponse = models.UpgradeProxyVersionResponse;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const NewAccount = models.NewAccount;
const BackupFileInfo = models.BackupFileInfo;
const TablePrivileges = models.TablePrivileges;
const UpgradeProxyRequest = models.UpgradeProxyRequest;
const DescribeBinlogDownloadUrlResponse = models.DescribeBinlogDownloadUrlResponse;
const BindInstanceInfo = models.BindInstanceInfo;
const DescribeAuditRuleWithInstanceIdsResponse = models.DescribeAuditRuleWithInstanceIdsResponse;
const ModifyResourcePackageNameResponse = models.ModifyResourcePackageNameResponse;
const DescribeBackupListRequest = models.DescribeBackupListRequest;
const CloseProxyRequest = models.CloseProxyRequest;
const ModifyProxyDescResponse = models.ModifyProxyDescResponse;
const CreateResourcePackageResponse = models.CreateResourcePackageResponse;
const CynosdbInstance = models.CynosdbInstance;
const SearchClusterDatabasesRequest = models.SearchClusterDatabasesRequest;
const DescribeClusterPasswordComplexityResponse = models.DescribeClusterPasswordComplexityResponse;
const DescribeAuditRuleWithInstanceIdsRequest = models.DescribeAuditRuleWithInstanceIdsRequest;
const ExportInstanceErrorLogsResponse = models.ExportInstanceErrorLogsResponse;
const ModifyClusterSlaveZoneResponse = models.ModifyClusterSlaveZoneResponse;
const ParamItemDetail = models.ParamItemDetail;
const RemoveClusterSlaveZoneRequest = models.RemoveClusterSlaveZoneRequest;
const BinlogItem = models.BinlogItem;
const ModifyProxyDescRequest = models.ModifyProxyDescRequest;
const ModifyParamItem = models.ModifyParamItem;
const ModifyAuditServiceRequest = models.ModifyAuditServiceRequest;
const CreateClustersRequest = models.CreateClustersRequest;
const UserHostPrivilege = models.UserHostPrivilege;
const DescribeClustersResponse = models.DescribeClustersResponse;
const OpenAuditServiceRequest = models.OpenAuditServiceRequest;
const RefundResourcePackageRequest = models.RefundResourcePackageRequest;
const DescribeBackupConfigResponse = models.DescribeBackupConfigResponse;
const ModifyBinlogSaveDaysRequest = models.ModifyBinlogSaveDaysRequest;
const ResumeServerlessResponse = models.ResumeServerlessResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeParamTemplatesResponse = models.DescribeParamTemplatesResponse;
const CloseAuditServiceRequest = models.CloseAuditServiceRequest;
const AddInstancesResponse = models.AddInstancesResponse;
const Addr = models.Addr;
const SalePackageSpec = models.SalePackageSpec;
const PauseServerlessRequest = models.PauseServerlessRequest;
const ModifyParamTemplateResponse = models.ModifyParamTemplateResponse;
const ParamInfo = models.ParamInfo;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const ModifyClusterParamResponse = models.ModifyClusterParamResponse;
const SecurityGroup = models.SecurityGroup;
const BindClusterResourcePackagesResponse = models.BindClusterResourcePackagesResponse;
const QueryParamFilter = models.QueryParamFilter;
const DescribeBackupDownloadUrlRequest = models.DescribeBackupDownloadUrlRequest;
const SearchClusterDatabasesResponse = models.SearchClusterDatabasesResponse;
const OfflineInstanceRequest = models.OfflineInstanceRequest;
const ModifyClusterPasswordComplexityRequest = models.ModifyClusterPasswordComplexityRequest;
const OpenWanRequest = models.OpenWanRequest;
const UnbindClusterResourcePackagesRequest = models.UnbindClusterResourcePackagesRequest;
const CreateProxyRequest = models.CreateProxyRequest;
const OpenClusterPasswordComplexityResponse = models.OpenClusterPasswordComplexityResponse;
const CreateProxyEndPointResponse = models.CreateProxyEndPointResponse;
const DescribeResourcePackageSaleSpecResponse = models.DescribeResourcePackageSaleSpecResponse;
const OfflineInstanceResponse = models.OfflineInstanceResponse;
const ModifyInstanceParamResponse = models.ModifyInstanceParamResponse;
const NetAddr = models.NetAddr;
const ResourcePackage = models.ResourcePackage;
const RestartInstanceResponse = models.RestartInstanceResponse;
const CopyClusterPasswordComplexityRequest = models.CopyClusterPasswordComplexityRequest;
const ProxyGroupInfo = models.ProxyGroupInfo;
const TemplateParamInfo = models.TemplateParamInfo;
const DescribeResourcesByDealNameRequest = models.DescribeResourcesByDealNameRequest;
const DescribeInstanceDetailResponse = models.DescribeInstanceDetailResponse;
const CreateBackupResponse = models.CreateBackupResponse;
const CreateProxyEndPointRequest = models.CreateProxyEndPointRequest;
const ModifyAccountPrivilegesResponse = models.ModifyAccountPrivilegesResponse;
const DescribeRollbackTimeValidityResponse = models.DescribeRollbackTimeValidityResponse;
const AuditRuleTemplateInfo = models.AuditRuleTemplateInfo;
const DescribeInstanceSlowQueriesResponse = models.DescribeInstanceSlowQueriesResponse;
const ModifyAccountHostResponse = models.ModifyAccountHostResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const OpenReadOnlyInstanceExclusiveAccessRequest = models.OpenReadOnlyInstanceExclusiveAccessRequest;
const CloseClusterPasswordComplexityResponse = models.CloseClusterPasswordComplexityResponse;
const DescribeMaintainPeriodRequest = models.DescribeMaintainPeriodRequest;
const DescribeBackupDownloadUrlResponse = models.DescribeBackupDownloadUrlResponse;
const ResumeServerlessRequest = models.ResumeServerlessRequest;
const InquirePriceCreateRequest = models.InquirePriceCreateRequest;
const OpenClusterPasswordComplexityRequest = models.OpenClusterPasswordComplexityRequest;
const CreateAuditRuleTemplateRequest = models.CreateAuditRuleTemplateRequest;
const UpgradeProxyResponse = models.UpgradeProxyResponse;
const ModifyClusterNameResponse = models.ModifyClusterNameResponse;
const ModifyProxyRwSplitResponse = models.ModifyProxyRwSplitResponse;
const DescribeInstanceSpecsRequest = models.DescribeInstanceSpecsRequest;
const ExportInstanceSlowQueriesRequest = models.ExportInstanceSlowQueriesRequest;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const DescribeProxyNodesResponse = models.DescribeProxyNodesResponse;
const ModifyClusterParamRequest = models.ModifyClusterParamRequest;
const CynosdbCluster = models.CynosdbCluster;
const CreateAuditRuleTemplateResponse = models.CreateAuditRuleTemplateResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const IsolateClusterResponse = models.IsolateClusterResponse;
const DescribeResourcePackageListRequest = models.DescribeResourcePackageListRequest;
const SaleZone = models.SaleZone;
const ModifyParamTemplateRequest = models.ModifyParamTemplateRequest;
const ObjectTask = models.ObjectTask;
const OpenAuditServiceResponse = models.OpenAuditServiceResponse;
const ProxyNodeInfo = models.ProxyNodeInfo;
const OfflineClusterResponse = models.OfflineClusterResponse;
const SwitchProxyVpcResponse = models.SwitchProxyVpcResponse;
const DescribeParamTemplateDetailRequest = models.DescribeParamTemplateDetailRequest;
const ModifyAccountHostRequest = models.ModifyAccountHostRequest;
const CreateParamTemplateRequest = models.CreateParamTemplateRequest;
const OpenClusterReadOnlyInstanceGroupAccessRequest = models.OpenClusterReadOnlyInstanceGroupAccessRequest;
const DescribeAuditRuleTemplatesRequest = models.DescribeAuditRuleTemplatesRequest;
const InstanceSpec = models.InstanceSpec;
const DescribeFlowRequest = models.DescribeFlowRequest;
const RestartInstanceRequest = models.RestartInstanceRequest;
const IsolateInstanceRequest = models.IsolateInstanceRequest;
const ModifyAccountPrivilegesRequest = models.ModifyAccountPrivilegesRequest;
const Account = models.Account;
const CreateBackupRequest = models.CreateBackupRequest;
const CreateClusterDatabaseResponse = models.CreateClusterDatabaseResponse;
const ExportInstanceSlowQueriesResponse = models.ExportInstanceSlowQueriesResponse;
const CloseProxyResponse = models.CloseProxyResponse;
const PolicyRule = models.PolicyRule;
const DescribeProxyNodesRequest = models.DescribeProxyNodesRequest;
const UnbindClusterResourcePackagesResponse = models.UnbindClusterResourcePackagesResponse;
const DescribeMaintainPeriodResponse = models.DescribeMaintainPeriodResponse;
const SwitchProxyVpcRequest = models.SwitchProxyVpcRequest;
const DescribeBackupListResponse = models.DescribeBackupListResponse;
const SaleRegion = models.SaleRegion;
const DescribeResourcePackageDetailRequest = models.DescribeResourcePackageDetailRequest;
const DescribeBinlogSaveDaysRequest = models.DescribeBinlogSaveDaysRequest;
const ModifyBackupConfigRequest = models.ModifyBackupConfigRequest;
const ActivateInstanceResponse = models.ActivateInstanceResponse;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const DescribeRollbackTimeValidityRequest = models.DescribeRollbackTimeValidityRequest;
const IsolateClusterRequest = models.IsolateClusterRequest;
const DescribeClusterInstanceGrpsResponse = models.DescribeClusterInstanceGrpsResponse;
const AddInstancesRequest = models.AddInstancesRequest;
const ModifyClusterDatabaseRequest = models.ModifyClusterDatabaseRequest;
const InquirePriceCreateResponse = models.InquirePriceCreateResponse;
const ModifyClusterSlaveZoneRequest = models.ModifyClusterSlaveZoneRequest;
const DescribeInstanceErrorLogsResponse = models.DescribeInstanceErrorLogsResponse;
const CynosdbInstanceDetail = models.CynosdbInstanceDetail;
const DescribeSupportProxyVersionResponse = models.DescribeSupportProxyVersionResponse;
const RefundResourcePackageResponse = models.RefundResourcePackageResponse;
const DeleteClusterDatabaseResponse = models.DeleteClusterDatabaseResponse;
const CynosdbClusterDetail = models.CynosdbClusterDetail;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const DescribeInstanceErrorLogsRequest = models.DescribeInstanceErrorLogsRequest;
const DeleteClusterDatabaseRequest = models.DeleteClusterDatabaseRequest;
const ModifiableInfo = models.ModifiableInfo;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const ModifyBackupNameRequest = models.ModifyBackupNameRequest;
const DeleteAccountsRequest = models.DeleteAccountsRequest;
const AuditRuleFilters = models.AuditRuleFilters;
const DescribeBinlogSaveDaysResponse = models.DescribeBinlogSaveDaysResponse;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const ParamTemplateListInfo = models.ParamTemplateListInfo;
const ReloadBalanceProxyNodeResponse = models.ReloadBalanceProxyNodeResponse;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const RollbackTimeRange = models.RollbackTimeRange;
const CreateClusterDatabaseRequest = models.CreateClusterDatabaseRequest;
const DeleteBackupRequest = models.DeleteBackupRequest;
const TradePrice = models.TradePrice;
const DescribeClusterParamsRequest = models.DescribeClusterParamsRequest;
const CloseAuditServiceResponse = models.CloseAuditServiceResponse;
const DescribeInstanceSpecsResponse = models.DescribeInstanceSpecsResponse;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const ErrorLogItemExport = models.ErrorLogItemExport;
const CreateProxyResponse = models.CreateProxyResponse;
const DescribeParamTemplateDetailResponse = models.DescribeParamTemplateDetailResponse;
const ModifyBinlogSaveDaysResponse = models.ModifyBinlogSaveDaysResponse;
const ModifyAuditServiceResponse = models.ModifyAuditServiceResponse;
const DeleteAuditRuleTemplatesResponse = models.DeleteAuditRuleTemplatesResponse;
const Module = models.Module;
const ModifyVipVportResponse = models.ModifyVipVportResponse;
const DescribeClusterDetailResponse = models.DescribeClusterDetailResponse;
const DescribeInstanceSlowQueriesRequest = models.DescribeInstanceSlowQueriesRequest;
const ModifyResourcePackageClustersResponse = models.ModifyResourcePackageClustersResponse;
const DescribeBinlogsRequest = models.DescribeBinlogsRequest;
const InputAccount = models.InputAccount;
const ModifyBackupConfigResponse = models.ModifyBackupConfigResponse;
const SetRenewFlagResponse = models.SetRenewFlagResponse;
const ZoneStockInfo = models.ZoneStockInfo;
const InquirePriceRenewResponse = models.InquirePriceRenewResponse;
const Tag = models.Tag;
const ModifyAuditRuleTemplatesResponse = models.ModifyAuditRuleTemplatesResponse;


/**
 * cynosdb client
 * @class
 */
class CynosdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cynosdb.tencentcloudapi.com", "2019-01-07", credential, region, profile);
    }
    
    /**
     * This API is used to resume a serverless cluster.
     * @param {ResumeServerlessRequest} req
     * @param {function(string, ResumeServerlessResponse):void} cb
     * @public
     */
    ResumeServerless(req, cb) {
        let resp = new ResumeServerlessResponse();
        this.request("ResumeServerless", req, resp, cb);
    }

    /**
     * This API is used to get the backup configuration information of the specified cluster, including the full backup time range and backup file retention period.
     * @param {DescribeBackupConfigRequest} req
     * @param {function(string, DescribeBackupConfigResponse):void} cb
     * @public
     */
    DescribeBackupConfig(req, cb) {
        let resp = new DescribeBackupConfigResponse();
        this.request("DescribeBackupConfig", req, resp, cb);
    }

    /**
     * This API is used to create a database proxy connection.
     * @param {CreateProxyEndPointRequest} req
     * @param {function(string, CreateProxyEndPointResponse):void} cb
     * @public
     */
    CreateProxyEndPoint(req, cb) {
        let resp = new CreateProxyEndPointResponse();
        this.request("CreateProxyEndPoint", req, resp, cb);
    }

    /**
     * This API is used to search the list of cluster databases.
     * @param {SearchClusterDatabasesRequest} req
     * @param {function(string, SearchClusterDatabasesResponse):void} cb
     * @public
     */
    SearchClusterDatabases(req, cb) {
        let resp = new SearchClusterDatabasesResponse();
        this.request("SearchClusterDatabases", req, resp, cb);
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
     * This API is used to modify the maintenance time configuration.
     * @param {ModifyMaintainPeriodConfigRequest} req
     * @param {function(string, ModifyMaintainPeriodConfigResponse):void} cb
     * @public
     */
    ModifyMaintainPeriodConfig(req, cb) {
        let resp = new ModifyMaintainPeriodConfigResponse();
        this.request("ModifyMaintainPeriodConfig", req, resp, cb);
    }

    /**
     * This API is used to replicate the password complexity for a cluster.
     * @param {CopyClusterPasswordComplexityRequest} req
     * @param {function(string, CopyClusterPasswordComplexityResponse):void} cb
     * @public
     */
    CopyClusterPasswordComplexity(req, cb) {
        let resp = new CopyClusterPasswordComplexityResponse();
        this.request("CopyClusterPasswordComplexity", req, resp, cb);
    }

    /**
     * This API is used to disable the audit service for a TDSQL-C for MySQL instance.
     * @param {CloseAuditServiceRequest} req
     * @param {function(string, CloseAuditServiceResponse):void} cb
     * @public
     */
    CloseAuditService(req, cb) {
        let resp = new CloseAuditServiceResponse();
        this.request("CloseAuditService", req, resp, cb);
    }

    /**
     * This API is used to query the supported database proxy versions.
     * @param {DescribeSupportProxyVersionRequest} req
     * @param {function(string, DescribeSupportProxyVersionResponse):void} cb
     * @public
     */
    DescribeSupportProxyVersion(req, cb) {
        let resp = new DescribeSupportProxyVersionResponse();
        this.request("DescribeSupportProxyVersion", req, resp, cb);
    }

    /**
     * This API is used to modify the cluster VPC.
     * @param {SwitchClusterVpcRequest} req
     * @param {function(string, SwitchClusterVpcResponse):void} cb
     * @public
     */
    SwitchClusterVpc(req, cb) {
        let resp = new SwitchClusterVpcResponse();
        this.request("SwitchClusterVpc", req, resp, cb);
    }

    /**
     * This API is used to disable u200dthe database proxy.
     * @param {CloseProxyRequest} req
     * @param {function(string, CloseProxyResponse):void} cb
     * @public
     */
    CloseProxy(req, cb) {
        let resp = new CloseProxyResponse();
        this.request("CloseProxy", req, resp, cb);
    }

    /**
     * This API is used to query the specifications of a database proxy.
     * @param {DescribeProxySpecsRequest} req
     * @param {function(string, DescribeProxySpecsResponse):void} cb
     * @public
     */
    DescribeProxySpecs(req, cb) {
        let resp = new DescribeProxySpecsResponse();
        this.request("DescribeProxySpecs", req, resp, cb);
    }

    /**
     * This API is used to show the details of an instance.
     * @param {DescribeClusterDetailRequest} req
     * @param {function(string, DescribeClusterDetailResponse):void} cb
     * @public
     */
    DescribeClusterDetail(req, cb) {
        let resp = new DescribeClusterDetailResponse();
        this.request("DescribeClusterDetail", req, resp, cb);
    }

    /**
     * This API is used to query instance specifications.
     * @param {DescribeInstanceSpecsRequest} req
     * @param {function(string, DescribeInstanceSpecsResponse):void} cb
     * @public
     */
    DescribeInstanceSpecs(req, cb) {
        let resp = new DescribeInstanceSpecsResponse();
        this.request("DescribeInstanceSpecs", req, resp, cb);
    }

    /**
     * This API is used to query the download address of a binlog.
     * @param {DescribeBinlogDownloadUrlRequest} req
     * @param {function(string, DescribeBinlogDownloadUrlResponse):void} cb
     * @public
     */
    DescribeBinlogDownloadUrl(req, cb) {
        let resp = new DescribeBinlogDownloadUrlResponse();
        this.request("DescribeBinlogDownloadUrl", req, resp, cb);
    }

    /**
     * This API is used to query the list of resources by billing order ID.
     * @param {DescribeResourcesByDealNameRequest} req
     * @param {function(string, DescribeResourcesByDealNameResponse):void} cb
     * @public
     */
    DescribeResourcesByDealName(req, cb) {
        let resp = new DescribeResourcesByDealNameResponse();
        this.request("DescribeResourcesByDealName", req, resp, cb);
    }

    /**
     * This API is used to remove the isolation of an instance to make it accessible again.
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
     * This API is used to export the slow logs of an instance.
     * @param {ExportInstanceSlowQueriesRequest} req
     * @param {function(string, ExportInstanceSlowQueriesResponse):void} cb
     * @public
     */
    ExportInstanceSlowQueries(req, cb) {
        let resp = new ExportInstanceSlowQueriesResponse();
        this.request("ExportInstanceSlowQueries", req, resp, cb);
    }

    /**
     * This API is used to query the existing permissions of an account.
     * @param {DescribeAccountPrivilegesRequest} req
     * @param {function(string, DescribeAccountPrivilegesResponse):void} cb
     * @public
     */
    DescribeAccountPrivileges(req, cb) {
        let resp = new DescribeAccountPrivilegesResponse();
        this.request("DescribeAccountPrivileges", req, resp, cb);
    }

    /**
     * This API is used to disable the password complexity for a cluster.
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
     * This API is used to deactivate a cluster.
     * @param {OfflineClusterRequest} req
     * @param {function(string, OfflineClusterResponse):void} cb
     * @public
     */
    OfflineCluster(req, cb) {
        let resp = new OfflineClusterResponse();
        this.request("OfflineCluster", req, resp, cb);
    }

    /**
     * This API is used to modify cluster name.
     * @param {ModifyClusterNameRequest} req
     * @param {function(string, ModifyClusterNameResponse):void} cb
     * @public
     */
    ModifyClusterName(req, cb) {
        let resp = new ModifyClusterNameResponse();
        this.request("ModifyClusterName", req, resp, cb);
    }

    /**
     * This API is used to configure the read/write separation of a database proxy.
     * @param {ModifyProxyRwSplitRequest} req
     * @param {function(string, ModifyProxyRwSplitResponse):void} cb
     * @public
     */
    ModifyProxyRwSplit(req, cb) {
        let resp = new ModifyProxyRwSplitResponse();
        this.request("ModifyProxyRwSplit", req, resp, cb);
    }

    /**
     * This API is used to modify the IP and port of an instance group.
     * @param {ModifyVipVportRequest} req
     * @param {function(string, ModifyVipVportResponse):void} cb
     * @public
     */
    ModifyVipVport(req, cb) {
        let resp = new ModifyVipVportResponse();
        this.request("ModifyVipVport", req, resp, cb);
    }

    /**
     * This API is used to delete an audit rule template.
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
     * This API is used to create a parameter template.
     * @param {CreateParamTemplateRequest} req
     * @param {function(string, CreateParamTemplateResponse):void} cb
     * @public
     */
    CreateParamTemplate(req, cb) {
        let resp = new CreateParamTemplateResponse();
        this.request("CreateParamTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify the replica AZ.
     * @param {ModifyClusterSlaveZoneRequest} req
     * @param {function(string, ModifyClusterSlaveZoneResponse):void} cb
     * @public
     */
    ModifyClusterSlaveZone(req, cb) {
        let resp = new ModifyClusterSlaveZoneResponse();
        this.request("ModifyClusterSlaveZone", req, resp, cb);
    }

    /**
     * This API is used to bind a resource pack to a cluster.
     * @param {ModifyResourcePackageClustersRequest} req
     * @param {function(string, ModifyResourcePackageClustersResponse):void} cb
     * @public
     */
    ModifyResourcePackageClusters(req, cb) {
        let resp = new ModifyResourcePackageClustersResponse();
        this.request("ModifyResourcePackageClusters", req, resp, cb);
    }

    /**
     * This API is used to modify or enable the password complexity for a cluster.
     * @param {ModifyClusterPasswordComplexityRequest} req
     * @param {function(string, ModifyClusterPasswordComplexityResponse):void} cb
     * @public
     */
    ModifyClusterPasswordComplexity(req, cb) {
        let resp = new ModifyClusterPasswordComplexityResponse();
        this.request("ModifyClusterPasswordComplexity", req, resp, cb);
    }

    /**
     * This API is used to create manual backup.
     * @param {CreateBackupRequest} req
     * @param {function(string, CreateBackupResponse):void} cb
     * @public
     */
    CreateBackup(req, cb) {
        let resp = new CreateBackupResponse();
        this.request("CreateBackup", req, resp, cb);
    }

    /**
     * This API is used to deactivate an instance.
     * @param {OfflineInstanceRequest} req
     * @param {function(string, OfflineInstanceResponse):void} cb
     * @public
     */
    OfflineInstance(req, cb) {
        let resp = new OfflineInstanceResponse();
        this.request("OfflineInstance", req, resp, cb);
    }

    /**
     * This API is used to isolate a cluster.
     * @param {IsolateClusterRequest} req
     * @param {function(string, IsolateClusterResponse):void} cb
     * @public
     */
    IsolateCluster(req, cb) {
        let resp = new IsolateClusterResponse();
        this.request("IsolateCluster", req, resp, cb);
    }

    /**
     * This API is used to restart an instance.
     * @param {RestartInstanceRequest} req
     * @param {function(string, RestartInstanceResponse):void} cb
     * @public
     */
    RestartInstance(req, cb) {
        let resp = new RestartInstanceResponse();
        this.request("RestartInstance", req, resp, cb);
    }

    /**
     * This API is used to upgrade the configuration of a database proxy.
     * @param {UpgradeProxyRequest} req
     * @param {function(string, UpgradeProxyResponse):void} cb
     * @public
     */
    UpgradeProxy(req, cb) {
        let resp = new UpgradeProxyResponse();
        this.request("UpgradeProxy", req, resp, cb);
    }

    /**
     * This API is used to the list of clusters.
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }

    /**
     * This API is used to disable the public network.
     * @param {CloseWanRequest} req
     * @param {function(string, CloseWanResponse):void} cb
     * @public
     */
    CloseWan(req, cb) {
        let resp = new CloseWanResponse();
        this.request("CloseWan", req, resp, cb);
    }

    /**
     * This API is used to query the security group information of a project.
     * @param {DescribeProjectSecurityGroupsRequest} req
     * @param {function(string, DescribeProjectSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroups(req, cb) {
        let resp = new DescribeProjectSecurityGroupsResponse();
        this.request("DescribeProjectSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to modify the database.
     * @param {ModifyClusterDatabaseRequest} req
     * @param {function(string, ModifyClusterDatabaseResponse):void} cb
     * @public
     */
    ModifyClusterDatabase(req, cb) {
        let resp = new ModifyClusterDatabaseResponse();
        this.request("ModifyClusterDatabase", req, resp, cb);
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
     * This API is used to modify the parameters of a cluster.
     * @param {ModifyClusterParamRequest} req
     * @param {function(string, ModifyClusterParamResponse):void} cb
     * @public
     */
    ModifyClusterParam(req, cb) {
        let resp = new ModifyClusterParamResponse();
        this.request("ModifyClusterParam", req, resp, cb);
    }

    /**
     * This API is used to create a cluster.
     * @param {CreateClustersRequest} req
     * @param {function(string, CreateClustersResponse):void} cb
     * @public
     */
    CreateClusters(req, cb) {
        let resp = new CreateClustersResponse();
        this.request("CreateClusters", req, resp, cb);
    }

    /**
     * This API is used to create an account.
     * @param {CreateAccountsRequest} req
     * @param {function(string, CreateAccountsResponse):void} cb
     * @public
     */
    CreateAccounts(req, cb) {
        let resp = new CreateAccountsResponse();
        this.request("CreateAccounts", req, resp, cb);
    }

    /**
     * This API is used to purchase a resource pack.
     * @param {CreateResourcePackageRequest} req
     * @param {function(string, CreateResourcePackageResponse):void} cb
     * @public
     */
    CreateResourcePackage(req, cb) {
        let resp = new CreateResourcePackageResponse();
        this.request("CreateResourcePackage", req, resp, cb);
    }

    /**
     * This API is used to delete a database.
     * @param {DeleteClusterDatabaseRequest} req
     * @param {function(string, DeleteClusterDatabaseResponse):void} cb
     * @public
     */
    DeleteClusterDatabase(req, cb) {
        let resp = new DeleteClusterDatabaseResponse();
        this.request("DeleteClusterDatabase", req, resp, cb);
    }

    /**
     * This API is used to switch to the replica AZ.
     * @param {SwitchClusterZoneRequest} req
     * @param {function(string, SwitchClusterZoneResponse):void} cb
     * @public
     */
    SwitchClusterZone(req, cb) {
        let resp = new SwitchClusterZoneResponse();
        this.request("SwitchClusterZone", req, resp, cb);
    }

    /**
     * This API is used to add an instance in a cluster.
     * @param {AddInstancesRequest} req
     * @param {function(string, AddInstancesResponse):void} cb
     * @public
     */
    AddInstances(req, cb) {
        let resp = new AddInstancesResponse();
        this.request("AddInstances", req, resp, cb);
    }

    /**
     * This API is used to delete an account.
     * @param {DeleteAccountsRequest} req
     * @param {function(string, DeleteAccountsResponse):void} cb
     * @public
     */
    DeleteAccounts(req, cb) {
        let resp = new DeleteAccountsResponse();
        this.request("DeleteAccounts", req, resp, cb);
    }

    /**
     * This API is used to enable the access to read-only instance group.
     * @param {OpenClusterReadOnlyInstanceGroupAccessRequest} req
     * @param {function(string, OpenClusterReadOnlyInstanceGroupAccessResponse):void} cb
     * @public
     */
    OpenClusterReadOnlyInstanceGroupAccess(req, cb) {
        let resp = new OpenClusterReadOnlyInstanceGroupAccessResponse();
        this.request("OpenClusterReadOnlyInstanceGroupAccess", req, resp, cb);
    }

    /**
     * This API is used to search the list of cluster data tables.
     * @param {SearchClusterTablesRequest} req
     * @param {function(string, SearchClusterTablesResponse):void} cb
     * @public
     */
    SearchClusterTables(req, cb) {
        let resp = new SearchClusterTablesResponse();
        this.request("SearchClusterTables", req, resp, cb);
    }

    /**
     * This API is used to query all parameter templates information of a user-specified product.
     * @param {DescribeParamTemplatesRequest} req
     * @param {function(string, DescribeParamTemplatesResponse):void} cb
     * @public
     */
    DescribeParamTemplates(req, cb) {
        let resp = new DescribeParamTemplatesResponse();
        this.request("DescribeParamTemplates", req, resp, cb);
    }

    /**
     * This API is used to delete the manual backup for a cluster. It cannot be used to delete the automatic backup.
     * @param {DeleteBackupRequest} req
     * @param {function(string, DeleteBackupResponse):void} cb
     * @public
     */
    DeleteBackup(req, cb) {
        let resp = new DeleteBackupResponse();
        this.request("DeleteBackup", req, resp, cb);
    }

    /**
     * This API is used to pause a serverless cluster.
     * @param {PauseServerlessRequest} req
     * @param {function(string, PauseServerlessResponse):void} cb
     * @public
     */
    PauseServerless(req, cb) {
        let resp = new PauseServerlessResponse();
        this.request("PauseServerless", req, resp, cb);
    }

    /**
     * This API is used to modify the account host.
     * @param {ModifyAccountHostRequest} req
     * @param {function(string, ModifyAccountHostResponse):void} cb
     * @public
     */
    ModifyAccountHost(req, cb) {
        let resp = new ModifyAccountHostResponse();
        this.request("ModifyAccountHost", req, resp, cb);
    }

    /**
     * This API is used to reset the password of a TencentDB instance account.
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
     * This API is used to query the valid rollback time range for the specified cluster.
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
     * This API is used to bind a resource pack to a cluster.
     * @param {BindClusterResourcePackagesRequest} req
     * @param {function(string, BindClusterResourcePackagesResponse):void} cb
     * @public
     */
    BindClusterResourcePackages(req, cb) {
        let resp = new BindClusterResourcePackagesResponse();
        this.request("BindClusterResourcePackages", req, resp, cb);
    }

    /**
     * This API is used to unbind a TDSQL-C for MySQL resource pack.
     * @param {UnbindClusterResourcePackagesRequest} req
     * @param {function(string, UnbindClusterResourcePackagesResponse):void} cb
     * @public
     */
    UnbindClusterResourcePackages(req, cb) {
        let resp = new UnbindClusterResourcePackagesResponse();
        this.request("UnbindClusterResourcePackages", req, resp, cb);
    }

    /**
     * This API is used to query the list of database proxies.
     * @param {DescribeProxiesRequest} req
     * @param {function(string, DescribeProxiesResponse):void} cb
     * @public
     */
    DescribeProxies(req, cb) {
        let resp = new DescribeProxiesResponse();
        this.request("DescribeProxies", req, resp, cb);
    }

    /**
     * This API is used to enable the public network.
     * @param {OpenWanRequest} req
     * @param {function(string, OpenWanResponse):void} cb
     * @public
     */
    OpenWan(req, cb) {
        let resp = new OpenWanResponse();
        this.request("OpenWan", req, resp, cb);
    }

    /**
     * This API is used to query the purchasable price of a cluster.
     * @param {InquirePriceCreateRequest} req
     * @param {function(string, InquirePriceCreateResponse):void} cb
     * @public
     */
    InquirePriceCreate(req, cb) {
        let resp = new InquirePriceCreateResponse();
        this.request("InquirePriceCreate", req, resp, cb);
    }

    /**
     * This API is used to query the specifications of a resource pack.
     * @param {DescribeResourcePackageSaleSpecRequest} req
     * @param {function(string, DescribeResourcePackageSaleSpecResponse):void} cb
     * @public
     */
    DescribeResourcePackageSaleSpec(req, cb) {
        let resp = new DescribeResourcePackageSaleSpecResponse();
        this.request("DescribeResourcePackageSaleSpec", req, resp, cb);
    }

    /**
     * This API is used to modify the account permissions.
     * @param {ModifyAccountPrivilegesRequest} req
     * @param {function(string, ModifyAccountPrivilegesResponse):void} cb
     * @public
     */
    ModifyAccountPrivileges(req, cb) {
        let resp = new ModifyAccountPrivilegesResponse();
        this.request("ModifyAccountPrivileges", req, resp, cb);
    }

    /**
     * This API is used to get the audit rule templates of an instance.
     * @param {DescribeAuditRuleWithInstanceIdsRequest} req
     * @param {function(string, DescribeAuditRuleWithInstanceIdsResponse):void} cb
     * @public
     */
    DescribeAuditRuleWithInstanceIds(req, cb) {
        let resp = new DescribeAuditRuleWithInstanceIdsResponse();
        this.request("DescribeAuditRuleWithInstanceIds", req, resp, cb);
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

    /**
     * This API is used to add the replica AZ.
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
     * This API is used to query database management accounts.
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * This API is used to set auto-renewal for an instance.
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
     * This API is used to rebalance the load on the database proxy.
     * @param {ReloadBalanceProxyNodeRequest} req
     * @param {function(string, ReloadBalanceProxyNodeResponse):void} cb
     * @public
     */
    ReloadBalanceProxyNode(req, cb) {
        let resp = new ReloadBalanceProxyNodeResponse();
        this.request("ReloadBalanceProxyNode", req, resp, cb);
    }

    /**
     * This API is used to upgrade the version of a database proxy.
     * @param {UpgradeProxyVersionRequest} req
     * @param {function(string, UpgradeProxyVersionResponse):void} cb
     * @public
     */
    UpgradeProxyVersion(req, cb) {
        let resp = new UpgradeProxyVersionResponse();
        this.request("UpgradeProxyVersion", req, resp, cb);
    }

    /**
     * This API is used to modify an audit rule template.
     * @param {ModifyAuditRuleTemplatesRequest} req
     * @param {function(string, ModifyAuditRuleTemplatesResponse):void} cb
     * @public
     */
    ModifyAuditRuleTemplates(req, cb) {
        let resp = new ModifyAuditRuleTemplatesResponse();
        this.request("ModifyAuditRuleTemplates", req, resp, cb);
    }

    /**
     * This API is used to query the list of backup files.
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
     * This API is used to enable the audit service for a TDSQL-C for MySQL instance.
     * @param {OpenAuditServiceRequest} req
     * @param {function(string, OpenAuditServiceResponse):void} cb
     * @public
     */
    OpenAuditService(req, cb) {
        let resp = new OpenAuditServiceResponse();
        this.request("OpenAuditService", req, resp, cb);
    }

    /**
     * This API is used to query audit rule templates.
     * @param {DescribeAuditRuleTemplatesRequest} req
     * @param {function(string, DescribeAuditRuleTemplatesResponse):void} cb
     * @public
     */
    DescribeAuditRuleTemplates(req, cb) {
        let resp = new DescribeAuditRuleTemplatesResponse();
        this.request("DescribeAuditRuleTemplates", req, resp, cb);
    }

    /**
     * This API is used to query the usage details of a resource pack.
     * @param {DescribeResourcePackageDetailRequest} req
     * @param {function(string, DescribeResourcePackageDetailResponse):void} cb
     * @public
     */
    DescribeResourcePackageDetail(req, cb) {
        let resp = new DescribeResourcePackageDetailResponse();
        this.request("DescribeResourcePackageDetail", req, resp, cb);
    }

    /**
     * This API is used to modify the backup configuration of the specified cluster.
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
     * This API is used to upgrade the kernel version of a TDSQL-C for MySQL cluster.
     * @param {UpgradeClusterVersionRequest} req
     * @param {function(string, UpgradeClusterVersionResponse):void} cb
     * @public
     */
    UpgradeClusterVersion(req, cb) {
        let resp = new UpgradeClusterVersionResponse();
        this.request("UpgradeClusterVersion", req, resp, cb);
    }

    /**
     * This API is used to query the list of the resource packs.
     * @param {DescribeResourcePackageListRequest} req
     * @param {function(string, DescribeResourcePackageListResponse):void} cb
     * @public
     */
    DescribeResourcePackageList(req, cb) {
        let resp = new DescribeResourcePackageListResponse();
        this.request("DescribeResourcePackageList", req, resp, cb);
    }

    /**
     * This API is used to query the parameters of a cluster.
     * @param {DescribeClusterParamsRequest} req
     * @param {function(string, DescribeClusterParamsResponse):void} cb
     * @public
     */
    DescribeClusterParams(req, cb) {
        let resp = new DescribeClusterParamsResponse();
        this.request("DescribeClusterParams", req, resp, cb);
    }

    /**
     * This API is used to refund a resource pack.
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
     * This API is used to query the instance maintenance window.
     * @param {DescribeMaintainPeriodRequest} req
     * @param {function(string, DescribeMaintainPeriodResponse):void} cb
     * @public
     */
    DescribeMaintainPeriod(req, cb) {
        let resp = new DescribeMaintainPeriodResponse();
        this.request("DescribeMaintainPeriod", req, resp, cb);
    }

    /**
     * This API is used to modify the database proxy VPC.
     * @param {SwitchProxyVpcRequest} req
     * @param {function(string, SwitchProxyVpcResponse):void} cb
     * @public
     */
    SwitchProxyVpc(req, cb) {
        let resp = new SwitchProxyVpcResponse();
        this.request("SwitchProxyVpc", req, resp, cb);
    }

    /**
     * This API is used to query the database list.
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
     * This API is used to query the AZ information in a purchasable region.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * This API is used to query the download address of a cluster backup file.
     * @param {DescribeBackupDownloadUrlRequest} req
     * @param {function(string, DescribeBackupDownloadUrlResponse):void} cb
     * @public
     */
    DescribeBackupDownloadUrl(req, cb) {
        let resp = new DescribeBackupDownloadUrlResponse();
        this.request("DescribeBackupDownloadUrl", req, resp, cb);
    }

    /**
     * This API is used to create a database proxy.
     * @param {CreateProxyRequest} req
     * @param {function(string, CreateProxyResponse):void} cb
     * @public
     */
    CreateProxy(req, cb) {
        let resp = new CreateProxyResponse();
        this.request("CreateProxy", req, resp, cb);
    }

    /**
     * This API is used to modify the security groups bound to an instance.
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to query the list of error logs for an instance.
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
     * This API is used to enable the dedicated access group for a read-only instance.
     * @param {OpenReadOnlyInstanceExclusiveAccessRequest} req
     * @param {function(string, OpenReadOnlyInstanceExclusiveAccessResponse):void} cb
     * @public
     */
    OpenReadOnlyInstanceExclusiveAccess(req, cb) {
        let resp = new OpenReadOnlyInstanceExclusiveAccessResponse();
        this.request("OpenReadOnlyInstanceExclusiveAccess", req, resp, cb);
    }

    /**
     * This API is used to query the details of password complexity for a cluster.
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
     * This API is used to upgrade an instance.
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        let resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
    }

    /**
     * This API is used to query the list of binlogs in a cluster.
     * @param {DescribeBinlogsRequest} req
     * @param {function(string, DescribeBinlogsResponse):void} cb
     * @public
     */
    DescribeBinlogs(req, cb) {
        let resp = new DescribeBinlogsResponse();
        this.request("DescribeBinlogs", req, resp, cb);
    }

    /**
     * This API is used to query whether rollback is possible based on the specified time and cluster.
     * @param {DescribeRollbackTimeValidityRequest} req
     * @param {function(string, DescribeRollbackTimeValidityResponse):void} cb
     * @public
     */
    DescribeRollbackTimeValidity(req, cb) {
        let resp = new DescribeRollbackTimeValidityResponse();
        this.request("DescribeRollbackTimeValidity", req, resp, cb);
    }

    /**
     * This API is used to query the security group information of an instance.
     * @param {DescribeDBSecurityGroupsRequest} req
     * @param {function(string, DescribeDBSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBSecurityGroups(req, cb) {
        let resp = new DescribeDBSecurityGroupsResponse();
        this.request("DescribeDBSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to enable the password complexity for a cluster.
     * @param {OpenClusterPasswordComplexityRequest} req
     * @param {function(string, OpenClusterPasswordComplexityResponse):void} cb
     * @public
     */
    OpenClusterPasswordComplexity(req, cb) {
        let resp = new OpenClusterPasswordComplexityResponse();
        this.request("OpenClusterPasswordComplexity", req, resp, cb);
    }

    /**
     * This API is used to modify the name of a resource pack.
     * @param {ModifyResourcePackageNameRequest} req
     * @param {function(string, ModifyResourcePackageNameResponse):void} cb
     * @public
     */
    ModifyResourcePackageName(req, cb) {
        let resp = new ModifyResourcePackageNameResponse();
        this.request("ModifyResourcePackageName", req, resp, cb);
    }

    /**
     * This API is used to delete the replica AZ.
     * @param {RemoveClusterSlaveZoneRequest} req
     * @param {function(string, RemoveClusterSlaveZoneResponse):void} cb
     * @public
     */
    RemoveClusterSlaveZone(req, cb) {
        let resp = new RemoveClusterSlaveZoneResponse();
        this.request("RemoveClusterSlaveZone", req, resp, cb);
    }

    /**
     * This API is used to query the details of a parameter template.
     * @param {DescribeParamTemplateDetailRequest} req
     * @param {function(string, DescribeParamTemplateDetailResponse):void} cb
     * @public
     */
    DescribeParamTemplateDetail(req, cb) {
        let resp = new DescribeParamTemplateDetailResponse();
        this.request("DescribeParamTemplateDetail", req, resp, cb);
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


}
module.exports = CynosdbClient;
