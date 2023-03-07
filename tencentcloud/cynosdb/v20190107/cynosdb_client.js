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
const ModifyClusterNameRequest = models.ModifyClusterNameRequest;
const DescribeRollbackTimeRangeRequest = models.DescribeRollbackTimeRangeRequest;
const InquirePriceRenewRequest = models.InquirePriceRenewRequest;
const InstanceAuditRule = models.InstanceAuditRule;
const ModifiableInfo = models.ModifiableInfo;
const DescribeBackupConfigRequest = models.DescribeBackupConfigRequest;
const ModifyAuditRuleTemplatesRequest = models.ModifyAuditRuleTemplatesRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const ModifyMaintainPeriodConfigRequest = models.ModifyMaintainPeriodConfigRequest;
const DescribeRollbackTimeRangeResponse = models.DescribeRollbackTimeRangeResponse;
const DescribeZonesRequest = models.DescribeZonesRequest;
const ModifyBackupNameResponse = models.ModifyBackupNameResponse;
const SwitchClusterZoneResponse = models.SwitchClusterZoneResponse;
const ModifyParamItem = models.ModifyParamItem;
const QueryFilter = models.QueryFilter;
const DescribeBinlogDownloadUrlRequest = models.DescribeBinlogDownloadUrlRequest;
const CreateAccountsResponse = models.CreateAccountsResponse;
const ModifyInstanceNameRequest = models.ModifyInstanceNameRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const DescribeMaintainPeriodRequest = models.DescribeMaintainPeriodRequest;
const DescribeBinlogsResponse = models.DescribeBinlogsResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const ClusterInstanceDetail = models.ClusterInstanceDetail;
const AddClusterSlaveZoneResponse = models.AddClusterSlaveZoneResponse;
const OldAddrInfo = models.OldAddrInfo;
const DescribeClusterParamsResponse = models.DescribeClusterParamsResponse;
const IsolateInstanceResponse = models.IsolateInstanceResponse;
const ModifyInstanceNameResponse = models.ModifyInstanceNameResponse;
const DescribeParamTemplatesRequest = models.DescribeParamTemplatesRequest;
const SearchClusterTablesRequest = models.SearchClusterTablesRequest;
const PauseServerlessRequest = models.PauseServerlessRequest;
const ObjectTask = models.ObjectTask;
const DescribeFlowResponse = models.DescribeFlowResponse;
const CreateClustersResponse = models.CreateClustersResponse;
const SetRenewFlagRequest = models.SetRenewFlagRequest;
const CynosdbInstanceGrp = models.CynosdbInstanceGrp;
const SlowQueriesItem = models.SlowQueriesItem;
const ActivateInstanceRequest = models.ActivateInstanceRequest;
const DatabaseTables = models.DatabaseTables;
const AddClusterSlaveZoneRequest = models.AddClusterSlaveZoneRequest;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const ModifyVipVportRequest = models.ModifyVipVportRequest;
const DescribeClustersRequest = models.DescribeClustersRequest;
const DescribeInstanceDetailResponse = models.DescribeInstanceDetailResponse;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DescribeClusterInstanceGrpsRequest = models.DescribeClusterInstanceGrpsRequest;
const DescribeResourcesByDealNameResponse = models.DescribeResourcesByDealNameResponse;
const ResumeServerlessResponse = models.ResumeServerlessResponse;
const CreateAccountsRequest = models.CreateAccountsRequest;
const DeleteAuditRuleTemplatesRequest = models.DeleteAuditRuleTemplatesRequest;
const DescribeAuditRuleTemplatesResponse = models.DescribeAuditRuleTemplatesResponse;
const SwitchClusterZoneRequest = models.SwitchClusterZoneRequest;
const RestartInstanceRequest = models.RestartInstanceRequest;
const Ability = models.Ability;
const InstanceInitInfo = models.InstanceInitInfo;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const SwitchClusterVpcResponse = models.SwitchClusterVpcResponse;
const DescribeClusterDetailRequest = models.DescribeClusterDetailRequest;
const DeleteBackupResponse = models.DeleteBackupResponse;
const Tag = models.Tag;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const RemoveClusterSlaveZoneResponse = models.RemoveClusterSlaveZoneResponse;
const PauseServerlessResponse = models.PauseServerlessResponse;
const OfflineClusterRequest = models.OfflineClusterRequest;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const NewAccount = models.NewAccount;
const BackupFileInfo = models.BackupFileInfo;
const DescribeBinlogDownloadUrlResponse = models.DescribeBinlogDownloadUrlResponse;
const DescribeAuditRuleWithInstanceIdsResponse = models.DescribeAuditRuleWithInstanceIdsResponse;
const DescribeBackupListRequest = models.DescribeBackupListRequest;
const SearchClusterDatabasesRequest = models.SearchClusterDatabasesRequest;
const SwitchClusterVpcRequest = models.SwitchClusterVpcRequest;
const CynosdbInstance = models.CynosdbInstance;
const DescribeAuditRuleWithInstanceIdsRequest = models.DescribeAuditRuleWithInstanceIdsRequest;
const ModifyClusterSlaveZoneResponse = models.ModifyClusterSlaveZoneResponse;
const RemoveClusterSlaveZoneRequest = models.RemoveClusterSlaveZoneRequest;
const BinlogItem = models.BinlogItem;
const ModifyAuditServiceRequest = models.ModifyAuditServiceRequest;
const CreateClustersRequest = models.CreateClustersRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const DescribeBackupConfigResponse = models.DescribeBackupConfigResponse;
const ModifyVipVportResponse = models.ModifyVipVportResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeParamTemplatesResponse = models.DescribeParamTemplatesResponse;
const CloseAuditServiceRequest = models.CloseAuditServiceRequest;
const AddInstancesResponse = models.AddInstancesResponse;
const Addr = models.Addr;
const ParamTemplateListInfo = models.ParamTemplateListInfo;
const ParamInfo = models.ParamInfo;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const ModifyClusterParamResponse = models.ModifyClusterParamResponse;
const SecurityGroup = models.SecurityGroup;
const DescribeBackupDownloadUrlRequest = models.DescribeBackupDownloadUrlRequest;
const OfflineInstanceRequest = models.OfflineInstanceRequest;
const OpenAuditServiceRequest = models.OpenAuditServiceRequest;
const NetAddr = models.NetAddr;
const TemplateParamInfo = models.TemplateParamInfo;
const DescribeResourcesByDealNameRequest = models.DescribeResourcesByDealNameRequest;
const CreateBackupResponse = models.CreateBackupResponse;
const DescribeRollbackTimeValidityResponse = models.DescribeRollbackTimeValidityResponse;
const AuditRuleTemplateInfo = models.AuditRuleTemplateInfo;
const DescribeInstanceSlowQueriesResponse = models.DescribeInstanceSlowQueriesResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const DescribeBackupDownloadUrlResponse = models.DescribeBackupDownloadUrlResponse;
const ResumeServerlessRequest = models.ResumeServerlessRequest;
const InquirePriceCreateRequest = models.InquirePriceCreateRequest;
const CreateAuditRuleTemplateRequest = models.CreateAuditRuleTemplateRequest;
const ModifyClusterNameResponse = models.ModifyClusterNameResponse;
const DescribeInstanceSpecsRequest = models.DescribeInstanceSpecsRequest;
const ExportInstanceSlowQueriesRequest = models.ExportInstanceSlowQueriesRequest;
const ParamItem = models.ParamItem;
const CynosdbCluster = models.CynosdbCluster;
const CreateAuditRuleTemplateResponse = models.CreateAuditRuleTemplateResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const IsolateClusterResponse = models.IsolateClusterResponse;
const SaleZone = models.SaleZone;
const SetRenewFlagResponse = models.SetRenewFlagResponse;
const OpenAuditServiceResponse = models.OpenAuditServiceResponse;
const OfflineClusterResponse = models.OfflineClusterResponse;
const SwitchProxyVpcResponse = models.SwitchProxyVpcResponse;
const DescribeAuditRuleTemplatesRequest = models.DescribeAuditRuleTemplatesRequest;
const InstanceSpec = models.InstanceSpec;
const DescribeFlowRequest = models.DescribeFlowRequest;
const IsolateInstanceRequest = models.IsolateInstanceRequest;
const BillingResourceInfo = models.BillingResourceInfo;
const Account = models.Account;
const CreateBackupRequest = models.CreateBackupRequest;
const ExportInstanceSlowQueriesResponse = models.ExportInstanceSlowQueriesResponse;
const SearchClusterTablesResponse = models.SearchClusterTablesResponse;
const PolicyRule = models.PolicyRule;
const DescribeMaintainPeriodResponse = models.DescribeMaintainPeriodResponse;
const SwitchProxyVpcRequest = models.SwitchProxyVpcRequest;
const DescribeBackupListResponse = models.DescribeBackupListResponse;
const SaleRegion = models.SaleRegion;
const RestartInstanceResponse = models.RestartInstanceResponse;
const DescribeBinlogSaveDaysRequest = models.DescribeBinlogSaveDaysRequest;
const ModifyBackupConfigRequest = models.ModifyBackupConfigRequest;
const ActivateInstanceResponse = models.ActivateInstanceResponse;
const DescribeRollbackTimeValidityRequest = models.DescribeRollbackTimeValidityRequest;
const IsolateClusterRequest = models.IsolateClusterRequest;
const DescribeClusterInstanceGrpsResponse = models.DescribeClusterInstanceGrpsResponse;
const AddInstancesRequest = models.AddInstancesRequest;
const InquirePriceCreateResponse = models.InquirePriceCreateResponse;
const ModifyClusterSlaveZoneRequest = models.ModifyClusterSlaveZoneRequest;
const CynosdbInstanceDetail = models.CynosdbInstanceDetail;
const RuleFilters = models.RuleFilters;
const CynosdbClusterDetail = models.CynosdbClusterDetail;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const SearchClusterDatabasesResponse = models.SearchClusterDatabasesResponse;
const DescribeInstanceDetailRequest = models.DescribeInstanceDetailRequest;
const ModifyMaintainPeriodConfigResponse = models.ModifyMaintainPeriodConfigResponse;
const ModifyBackupNameRequest = models.ModifyBackupNameRequest;
const AuditRuleFilters = models.AuditRuleFilters;
const DescribeBinlogSaveDaysResponse = models.DescribeBinlogSaveDaysResponse;
const ModifyClusterParamRequest = models.ModifyClusterParamRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const RollbackTimeRange = models.RollbackTimeRange;
const DeleteBackupRequest = models.DeleteBackupRequest;
const TradePrice = models.TradePrice;
const DescribeClusterParamsRequest = models.DescribeClusterParamsRequest;
const CloseAuditServiceResponse = models.CloseAuditServiceResponse;
const DescribeInstanceSpecsResponse = models.DescribeInstanceSpecsResponse;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const OfflineInstanceResponse = models.OfflineInstanceResponse;
const ModifyAuditServiceResponse = models.ModifyAuditServiceResponse;
const DeleteAuditRuleTemplatesResponse = models.DeleteAuditRuleTemplatesResponse;
const Module = models.Module;
const DescribeClusterDetailResponse = models.DescribeClusterDetailResponse;
const DescribeInstanceSlowQueriesRequest = models.DescribeInstanceSlowQueriesRequest;
const DescribeBinlogsRequest = models.DescribeBinlogsRequest;
const ModifyBackupConfigResponse = models.ModifyBackupConfigResponse;
const ZoneStockInfo = models.ZoneStockInfo;
const InquirePriceRenewResponse = models.InquirePriceRenewResponse;
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
     * This API is used to add an instance in a cluster.
     * @param {AddInstancesRequest} req
     * @param {function(string, AddInstancesResponse):void} cb
     * @public
     */
    AddInstances(req, cb) {
        let resp = new AddInstancesResponse();
        this.request("AddInstances", req, resp, cb);
    }


}
module.exports = CynosdbClient;
