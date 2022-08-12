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
const ObjectTask = models.ObjectTask;
const DescribeBackupConfigRequest = models.DescribeBackupConfigRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const ModifyMaintainPeriodConfigRequest = models.ModifyMaintainPeriodConfigRequest;
const DescribeRollbackTimeRangeResponse = models.DescribeRollbackTimeRangeResponse;
const ModifyBackupNameResponse = models.ModifyBackupNameResponse;
const QueryFilter = models.QueryFilter;
const DescribeBinlogDownloadUrlRequest = models.DescribeBinlogDownloadUrlRequest;
const CreateAccountsResponse = models.CreateAccountsResponse;
const ModifyInstanceNameRequest = models.ModifyInstanceNameRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const DescribeMaintainPeriodRequest = models.DescribeMaintainPeriodRequest;
const DescribeBinlogsResponse = models.DescribeBinlogsResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const ClusterInstanceDetail = models.ClusterInstanceDetail;
const Account = models.Account;
const IsolateInstanceResponse = models.IsolateInstanceResponse;
const ModifyInstanceNameResponse = models.ModifyInstanceNameResponse;
const DescribeParamTemplatesRequest = models.DescribeParamTemplatesRequest;
const PauseServerlessRequest = models.PauseServerlessRequest;
const CreateClustersResponse = models.CreateClustersResponse;
const SetRenewFlagRequest = models.SetRenewFlagRequest;
const CynosdbInstanceGrp = models.CynosdbInstanceGrp;
const SlowQueriesItem = models.SlowQueriesItem;
const ActivateInstanceRequest = models.ActivateInstanceRequest;
const DescribeClustersRequest = models.DescribeClustersRequest;
const DescribeInstanceDetailResponse = models.DescribeInstanceDetailResponse;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DescribeClusterInstanceGrpsRequest = models.DescribeClusterInstanceGrpsRequest;
const DescribeResourcesByDealNameResponse = models.DescribeResourcesByDealNameResponse;
const ResumeServerlessResponse = models.ResumeServerlessResponse;
const CreateAccountsRequest = models.CreateAccountsRequest;
const IsolateInstanceRequest = models.IsolateInstanceRequest;
const ExportInstanceSlowQueriesResponse = models.ExportInstanceSlowQueriesResponse;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const DescribeClusterDetailRequest = models.DescribeClusterDetailRequest;
const Tag = models.Tag;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const PauseServerlessResponse = models.PauseServerlessResponse;
const OfflineClusterRequest = models.OfflineClusterRequest;
const NewAccount = models.NewAccount;
const BackupFileInfo = models.BackupFileInfo;
const DescribeBinlogDownloadUrlResponse = models.DescribeBinlogDownloadUrlResponse;
const DescribeBackupListRequest = models.DescribeBackupListRequest;
const CynosdbInstance = models.CynosdbInstance;
const IsolateClusterResponse = models.IsolateClusterResponse;
const CreateClustersRequest = models.CreateClustersRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const DescribeBackupConfigResponse = models.DescribeBackupConfigResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeParamTemplatesResponse = models.DescribeParamTemplatesResponse;
const AddInstancesResponse = models.AddInstancesResponse;
const Addr = models.Addr;
const ParamTemplateListInfo = models.ParamTemplateListInfo;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const ModifyClusterParamResponse = models.ModifyClusterParamResponse;
const SecurityGroup = models.SecurityGroup;
const DescribeBackupDownloadUrlRequest = models.DescribeBackupDownloadUrlRequest;
const NetAddr = models.NetAddr;
const DescribeResourcesByDealNameRequest = models.DescribeResourcesByDealNameRequest;
const DescribeRollbackTimeValidityResponse = models.DescribeRollbackTimeValidityResponse;
const DescribeInstanceSlowQueriesResponse = models.DescribeInstanceSlowQueriesResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const DescribeBackupDownloadUrlResponse = models.DescribeBackupDownloadUrlResponse;
const ResumeServerlessRequest = models.ResumeServerlessRequest;
const InquirePriceCreateRequest = models.InquirePriceCreateRequest;
const BillingResourceInfo = models.BillingResourceInfo;
const ModifyClusterNameResponse = models.ModifyClusterNameResponse;
const DescribeInstanceSpecsRequest = models.DescribeInstanceSpecsRequest;
const ExportInstanceSlowQueriesRequest = models.ExportInstanceSlowQueriesRequest;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const CynosdbCluster = models.CynosdbCluster;
const BinlogItem = models.BinlogItem;
const OfflineClusterResponse = models.OfflineClusterResponse;
const InstanceSpec = models.InstanceSpec;
const InquirePriceCreateResponse = models.InquirePriceCreateResponse;
const SetRenewFlagResponse = models.SetRenewFlagResponse;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const DescribeMaintainPeriodResponse = models.DescribeMaintainPeriodResponse;
const DescribeBackupListResponse = models.DescribeBackupListResponse;
const DescribeBinlogSaveDaysRequest = models.DescribeBinlogSaveDaysRequest;
const DescribeClusterDetailResponse = models.DescribeClusterDetailResponse;
const ActivateInstanceResponse = models.ActivateInstanceResponse;
const DescribeRollbackTimeValidityRequest = models.DescribeRollbackTimeValidityRequest;
const IsolateClusterRequest = models.IsolateClusterRequest;
const DescribeClusterInstanceGrpsResponse = models.DescribeClusterInstanceGrpsResponse;
const AddInstancesRequest = models.AddInstancesRequest;
const CynosdbInstanceDetail = models.CynosdbInstanceDetail;
const CynosdbClusterDetail = models.CynosdbClusterDetail;
const DescribeInstanceDetailRequest = models.DescribeInstanceDetailRequest;
const ModifyMaintainPeriodConfigResponse = models.ModifyMaintainPeriodConfigResponse;
const ModifyBackupNameRequest = models.ModifyBackupNameRequest;
const DescribeBinlogSaveDaysResponse = models.DescribeBinlogSaveDaysResponse;
const ModifyClusterParamRequest = models.ModifyClusterParamRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const OfflineInstanceRequest = models.OfflineInstanceRequest;
const TradePrice = models.TradePrice;
const DescribeInstanceSpecsResponse = models.DescribeInstanceSpecsResponse;
const OfflineInstanceResponse = models.OfflineInstanceResponse;
const ParamItem = models.ParamItem;
const PolicyRule = models.PolicyRule;
const ModifyBackupConfigRequest = models.ModifyBackupConfigRequest;
const DescribeInstanceSlowQueriesRequest = models.DescribeInstanceSlowQueriesRequest;
const DescribeBinlogsRequest = models.DescribeBinlogsRequest;
const ModifyBackupConfigResponse = models.ModifyBackupConfigResponse;
const InquirePriceRenewResponse = models.InquirePriceRenewResponse;


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
