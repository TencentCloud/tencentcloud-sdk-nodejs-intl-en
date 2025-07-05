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
const CreateDBInstancesRequest = models.CreateDBInstancesRequest;
const SetAutoRenewFlagRequest = models.SetAutoRenewFlagRequest;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const DescribeDBXlogsRequest = models.DescribeDBXlogsRequest;
const CreateReadOnlyGroupNetworkAccessRequest = models.CreateReadOnlyGroupNetworkAccessRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const DeleteReadOnlyGroupResponse = models.DeleteReadOnlyGroupResponse;
const OpenDBExtranetAccessRequest = models.OpenDBExtranetAccessRequest;
const CreateInstancesRequest = models.CreateInstancesRequest;
const SpecItemInfo = models.SpecItemInfo;
const ParameterTemplate = models.ParameterTemplate;
const CreateDBInstanceNetworkAccessResponse = models.CreateDBInstanceNetworkAccessResponse;
const DescribeAvailableRecoveryTimeResponse = models.DescribeAvailableRecoveryTimeResponse;
const CreateBaseBackupRequest = models.CreateBaseBackupRequest;
const ModifyDBInstanceReadOnlyGroupResponse = models.ModifyDBInstanceReadOnlyGroupResponse;
const ClassInfo = models.ClassInfo;
const DescribeCloneDBInstanceSpecRequest = models.DescribeCloneDBInstanceSpecRequest;
const DescribeDBInstanceSecurityGroupsResponse = models.DescribeDBInstanceSecurityGroupsResponse;
const BackupPlan = models.BackupPlan;
const RestoreDBInstanceObjectsResponse = models.RestoreDBInstanceObjectsResponse;
const SwitchDBInstancePrimaryRequest = models.SwitchDBInstancePrimaryRequest;
const OpenServerlessDBExtranetAccessRequest = models.OpenServerlessDBExtranetAccessRequest;
const RenewInstanceResponse = models.RenewInstanceResponse;
const DeleteServerlessDBInstanceResponse = models.DeleteServerlessDBInstanceResponse;
const DeleteLogBackupResponse = models.DeleteLogBackupResponse;
const ModifyReadOnlyGroupConfigRequest = models.ModifyReadOnlyGroupConfigRequest;
const BackupSummary = models.BackupSummary;
const AddDBInstanceToReadOnlyGroupRequest = models.AddDBInstanceToReadOnlyGroupRequest;
const DescribeProductConfigRequest = models.DescribeProductConfigRequest;
const RemoveDBInstanceFromReadOnlyGroupRequest = models.RemoveDBInstanceFromReadOnlyGroupRequest;
const InitDBInstancesResponse = models.InitDBInstancesResponse;
const DescribeDefaultParametersRequest = models.DescribeDefaultParametersRequest;
const RenewInstanceRequest = models.RenewInstanceRequest;
const DescribeBackupOverviewRequest = models.DescribeBackupOverviewRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const ModifyBaseBackupExpireTimeResponse = models.ModifyBaseBackupExpireTimeResponse;
const UpgradeDBInstanceMajorVersionResponse = models.UpgradeDBInstanceMajorVersionResponse;
const ModifyBackupDownloadRestrictionRequest = models.ModifyBackupDownloadRestrictionRequest;
const DBInstanceNetInfo = models.DBInstanceNetInfo;
const BackupDownloadRestriction = models.BackupDownloadRestriction;
const ModifyDBInstanceDeploymentRequest = models.ModifyDBInstanceDeploymentRequest;
const DeleteReadOnlyGroupNetworkAccessRequest = models.DeleteReadOnlyGroupNetworkAccessRequest;
const DescribeBackupDownloadRestrictionRequest = models.DescribeBackupDownloadRestrictionRequest;
const ZoneInfo = models.ZoneInfo;
const DescribeReadOnlyGroupsResponse = models.DescribeReadOnlyGroupsResponse;
const NormalQueryItem = models.NormalQueryItem;
const Tag = models.Tag;
const DescribeBackupSummariesRequest = models.DescribeBackupSummariesRequest;
const DescribeDBInstanceAttributeRequest = models.DescribeDBInstanceAttributeRequest;
const CloseServerlessDBExtranetAccessRequest = models.CloseServerlessDBExtranetAccessRequest;
const CreateBaseBackupResponse = models.CreateBaseBackupResponse;
const CloneDBInstanceResponse = models.CloneDBInstanceResponse;
const ModifyDBInstanceReadOnlyGroupRequest = models.ModifyDBInstanceReadOnlyGroupRequest;
const AddDBInstanceToReadOnlyGroupResponse = models.AddDBInstanceToReadOnlyGroupResponse;
const BaseBackup = models.BaseBackup;
const CreateReadOnlyDBInstanceResponse = models.CreateReadOnlyDBInstanceResponse;
const DescribeAvailableRecoveryTimeRequest = models.DescribeAvailableRecoveryTimeRequest;
const DurationAnalysis = models.DurationAnalysis;
const DescribeDBInstanceParametersRequest = models.DescribeDBInstanceParametersRequest;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const DescribeBackupDownloadURLResponse = models.DescribeBackupDownloadURLResponse;
const OpenServerlessDBExtranetAccessResponse = models.OpenServerlessDBExtranetAccessResponse;
const ModifyParameterTemplateRequest = models.ModifyParameterTemplateRequest;
const InquiryPriceCreateDBInstancesResponse = models.InquiryPriceCreateDBInstancesResponse;
const Version = models.Version;
const CreateDBInstanceNetworkAccessRequest = models.CreateDBInstanceNetworkAccessRequest;
const ModifySwitchTimePeriodResponse = models.ModifySwitchTimePeriodResponse;
const InquiryPriceCreateDBInstancesRequest = models.InquiryPriceCreateDBInstancesRequest;
const DescribeDefaultParametersResponse = models.DescribeDefaultParametersResponse;
const ServerlessDBInstanceNetInfo = models.ServerlessDBInstanceNetInfo;
const DescribeBackupPlansResponse = models.DescribeBackupPlansResponse;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const ReadOnlyGroup = models.ReadOnlyGroup;
const ModifyDBInstanceSpecRequest = models.ModifyDBInstanceSpecRequest;
const ModifyAccountRemarkResponse = models.ModifyAccountRemarkResponse;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const DescribeZonesRequest = models.DescribeZonesRequest;
const SpecInfo = models.SpecInfo;
const ModifyBackupDownloadRestrictionResponse = models.ModifyBackupDownloadRestrictionResponse;
const ParamVersionRelation = models.ParamVersionRelation;
const DescribeLogBackupsRequest = models.DescribeLogBackupsRequest;
const SetAutoRenewFlagResponse = models.SetAutoRenewFlagResponse;
const NetworkAccess = models.NetworkAccess;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const RemoveDBInstanceFromReadOnlyGroupResponse = models.RemoveDBInstanceFromReadOnlyGroupResponse;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const DescribeParameterTemplatesResponse = models.DescribeParameterTemplatesResponse;
const ParamSpecRelation = models.ParamSpecRelation;
const SwitchDBInstancePrimaryResponse = models.SwitchDBInstancePrimaryResponse;
const ModifyDBInstanceHAConfigRequest = models.ModifyDBInstanceHAConfigRequest;
const PgDeal = models.PgDeal;
const DeleteReadOnlyGroupNetworkAccessResponse = models.DeleteReadOnlyGroupNetworkAccessResponse;
const DescribeBackupSummariesResponse = models.DescribeBackupSummariesResponse;
const DescribeDBErrlogsRequest = models.DescribeDBErrlogsRequest;
const DBBackup = models.DBBackup;
const ServerlessDBAccount = models.ServerlessDBAccount;
const CloneDBInstanceRequest = models.CloneDBInstanceRequest;
const DeleteParameterTemplateRequest = models.DeleteParameterTemplateRequest;
const DescribeClassesRequest = models.DescribeClassesRequest;
const DescribeParamsEventRequest = models.DescribeParamsEventRequest;
const EventInfo = models.EventInfo;
const CreateInstancesResponse = models.CreateInstancesResponse;
const AnalysisItems = models.AnalysisItems;
const Xlog = models.Xlog;
const DescribeServerlessDBInstancesRequest = models.DescribeServerlessDBInstancesRequest;
const DescribeDBBackupsResponse = models.DescribeDBBackupsResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeSlowQueryListResponse = models.DescribeSlowQueryListResponse;
const ServerlessDBInstance = models.ServerlessDBInstance;
const CreateReadOnlyGroupRequest = models.CreateReadOnlyGroupRequest;
const DescribeParamsEventResponse = models.DescribeParamsEventResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const CloseServerlessDBExtranetAccessResponse = models.CloseServerlessDBExtranetAccessResponse;
const EventItem = models.EventItem;
const RestartDBInstanceRequest = models.RestartDBInstanceRequest;
const DescribeDBInstanceHAConfigRequest = models.DescribeDBInstanceHAConfigRequest;
const CreateParameterTemplateResponse = models.CreateParameterTemplateResponse;
const ParamInfo = models.ParamInfo;
const DescribeLogBackupsResponse = models.DescribeLogBackupsResponse;
const Detail = models.Detail;
const SecurityGroup = models.SecurityGroup;
const IsolateDBInstancesResponse = models.IsolateDBInstancesResponse;
const OpenDBExtranetAccessResponse = models.OpenDBExtranetAccessResponse;
const InquiryPriceUpgradeDBInstanceRequest = models.InquiryPriceUpgradeDBInstanceRequest;
const DescribeDBInstanceHAConfigResponse = models.DescribeDBInstanceHAConfigResponse;
const IsolateDBInstancesRequest = models.IsolateDBInstancesRequest;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const EncryptionKey = models.EncryptionKey;
const UpgradeDBInstanceKernelVersionResponse = models.UpgradeDBInstanceKernelVersionResponse;
const InquiryPriceRenewDBInstanceResponse = models.InquiryPriceRenewDBInstanceResponse;
const DescribeSlowQueryAnalysisRequest = models.DescribeSlowQueryAnalysisRequest;
const ErrLogDetail = models.ErrLogDetail;
const DescribeServerlessDBInstancesResponse = models.DescribeServerlessDBInstancesResponse;
const DescribeBackupOverviewResponse = models.DescribeBackupOverviewResponse;
const DescribeParameterTemplatesRequest = models.DescribeParameterTemplatesRequest;
const InitDBInstancesRequest = models.InitDBInstancesRequest;
const DescribeClassesResponse = models.DescribeClassesResponse;
const DeleteDBInstanceNetworkAccessRequest = models.DeleteDBInstanceNetworkAccessRequest;
const ModifyDBInstanceDeploymentResponse = models.ModifyDBInstanceDeploymentResponse;
const DBInstance = models.DBInstance;
const DeleteParameterTemplateResponse = models.DeleteParameterTemplateResponse;
const DeleteReadOnlyGroupRequest = models.DeleteReadOnlyGroupRequest;
const DescribeDBBackupsRequest = models.DescribeDBBackupsRequest;
const Filter = models.Filter;
const DescribeReadOnlyGroupsRequest = models.DescribeReadOnlyGroupsRequest;
const DescribeBackupDownloadURLRequest = models.DescribeBackupDownloadURLRequest;
const ModifyDBInstanceParametersResponse = models.ModifyDBInstanceParametersResponse;
const DescribeDBVersionsResponse = models.DescribeDBVersionsResponse;
const SlowlogDetail = models.SlowlogDetail;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DBNode = models.DBNode;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const UpgradeDBInstanceMajorVersionRequest = models.UpgradeDBInstanceMajorVersionRequest;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const DescribeBackupDownloadRestrictionResponse = models.DescribeBackupDownloadRestrictionResponse;
const CreateReadOnlyDBInstanceRequest = models.CreateReadOnlyDBInstanceRequest;
const DescribeCloneDBInstanceSpecResponse = models.DescribeCloneDBInstanceSpecResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const CreateServerlessDBInstanceResponse = models.CreateServerlessDBInstanceResponse;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const DescribeProductConfigResponse = models.DescribeProductConfigResponse;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
const ModifyParameterTemplateResponse = models.ModifyParameterTemplateResponse;
const DescribeEncryptionKeysRequest = models.DescribeEncryptionKeysRequest;
const LogBackup = models.LogBackup;
const RebalanceReadOnlyGroupRequest = models.RebalanceReadOnlyGroupRequest;
const ModifyBackupPlanResponse = models.ModifyBackupPlanResponse;
const DestroyDBInstanceRequest = models.DestroyDBInstanceRequest;
const CreateServerlessDBInstanceRequest = models.CreateServerlessDBInstanceRequest;
const InquiryPriceRenewDBInstanceRequest = models.InquiryPriceRenewDBInstanceRequest;
const CreateReadOnlyGroupResponse = models.CreateReadOnlyGroupResponse;
const DeleteDBInstanceNetworkAccessResponse = models.DeleteDBInstanceNetworkAccessResponse;
const DeleteServerlessDBInstanceRequest = models.DeleteServerlessDBInstanceRequest;
const ModifyReadOnlyGroupConfigResponse = models.ModifyReadOnlyGroupConfigResponse;
const AccountInfo = models.AccountInfo;
const ModifyAccountRemarkRequest = models.ModifyAccountRemarkRequest;
const DescribeParameterTemplateAttributesRequest = models.DescribeParameterTemplateAttributesRequest;
const DescribeDBErrlogsResponse = models.DescribeDBErrlogsResponse;
const ModifyBackupPlanRequest = models.ModifyBackupPlanRequest;
const DeleteBaseBackupRequest = models.DeleteBaseBackupRequest;
const ParamEntry = models.ParamEntry;
const InquiryPriceUpgradeDBInstanceResponse = models.InquiryPriceUpgradeDBInstanceResponse;
const DisIsolateDBInstancesResponse = models.DisIsolateDBInstancesResponse;
const CreateParameterTemplateRequest = models.CreateParameterTemplateRequest;
const ModifySwitchTimePeriodRequest = models.ModifySwitchTimePeriodRequest;
const DescribeSlowQueryListRequest = models.DescribeSlowQueryListRequest;
const DescribeDBInstanceParametersResponse = models.DescribeDBInstanceParametersResponse;
const RegionInfo = models.RegionInfo;
const DisIsolateDBInstancesRequest = models.DisIsolateDBInstancesRequest;
const RestartDBInstanceResponse = models.RestartDBInstanceResponse;
const ModifyBaseBackupExpireTimeRequest = models.ModifyBaseBackupExpireTimeRequest;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const DescribeDBInstanceSecurityGroupsRequest = models.DescribeDBInstanceSecurityGroupsRequest;
const DescribeBackupPlansRequest = models.DescribeBackupPlansRequest;
const ModifyDBInstanceHAConfigResponse = models.ModifyDBInstanceHAConfigResponse;
const RebalanceReadOnlyGroupResponse = models.RebalanceReadOnlyGroupResponse;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const DescribeSlowQueryAnalysisResponse = models.DescribeSlowQueryAnalysisResponse;
const ModifyDBInstanceParametersRequest = models.ModifyDBInstanceParametersRequest;
const RawSlowQuery = models.RawSlowQuery;
const DescribeDBSlowlogsResponse = models.DescribeDBSlowlogsResponse;
const RestoreDBInstanceObjectsRequest = models.RestoreDBInstanceObjectsRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const ModifyDBInstanceChargeTypeRequest = models.ModifyDBInstanceChargeTypeRequest;
const DescribeParameterTemplateAttributesResponse = models.DescribeParameterTemplateAttributesResponse;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const DescribeDBVersionsRequest = models.DescribeDBVersionsRequest;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const DescribeDBSlowlogsRequest = models.DescribeDBSlowlogsRequest;
const DestroyDBInstanceResponse = models.DestroyDBInstanceResponse;
const DescribeDBInstanceAttributeResponse = models.DescribeDBInstanceAttributeResponse;
const DeleteLogBackupRequest = models.DeleteLogBackupRequest;
const DeleteBaseBackupResponse = models.DeleteBaseBackupResponse;
const PolicyRule = models.PolicyRule;
const ModifyDBInstanceSpecResponse = models.ModifyDBInstanceSpecResponse;
const DescribeBaseBackupsResponse = models.DescribeBaseBackupsResponse;
const DescribeDBXlogsResponse = models.DescribeDBXlogsResponse;
const UpgradeDBInstanceKernelVersionRequest = models.UpgradeDBInstanceKernelVersionRequest;
const DescribeBaseBackupsRequest = models.DescribeBaseBackupsRequest;
const DescribeEncryptionKeysResponse = models.DescribeEncryptionKeysResponse;
const CreateReadOnlyGroupNetworkAccessResponse = models.CreateReadOnlyGroupNetworkAccessResponse;
const CreateDBInstancesResponse = models.CreateDBInstancesResponse;
const ModifyDBInstanceChargeTypeResponse = models.ModifyDBInstanceChargeTypeResponse;


/**
 * postgres client
 * @class
 */
class PostgresClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("postgres.intl.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * u200cThis API is used to query the download address of a specified backup set, including full backup sets and incremental log backup sets.
     * @param {DescribeBackupDownloadURLRequest} req
     * @param {function(string, DescribeBackupDownloadURLResponse):void} cb
     * @public
     */
    DescribeBackupDownloadURL(req, cb) {
        let resp = new DescribeBackupDownloadURLResponse();
        this.request("DescribeBackupDownloadURL", req, resp, cb);
    }

    /**
     * This API is used to query all parameters supported by a database version and engine.
     * @param {DescribeDefaultParametersRequest} req
     * @param {function(string, DescribeDefaultParametersResponse):void} cb
     * @public
     */
    DescribeDefaultParameters(req, cb) {
        let resp = new DescribeDefaultParametersResponse();
        this.request("DescribeDefaultParameters", req, resp, cb);
    }

    /**
     * This API is used to query an error log.
     * @param {DescribeDBErrlogsRequest} req
     * @param {function(string, DescribeDBErrlogsResponse):void} cb
     * @public
     */
    DescribeDBErrlogs(req, cb) {
        let resp = new DescribeDBErrlogsResponse();
        this.request("DescribeDBErrlogs", req, resp, cb);
    }

    /**
     * This API is used to query the HA configuration of an instance, which includes:
<li>Allow a standby node to promote to a primary node.
<li>Allow a semi-sync instance to adopt sync or async replication.
     * @param {DescribeDBInstanceHAConfigRequest} req
     * @param {function(string, DescribeDBInstanceHAConfigResponse):void} cb
     * @public
     */
    DescribeDBInstanceHAConfig(req, cb) {
        let resp = new DescribeDBInstanceHAConfigResponse();
        this.request("DescribeDBInstanceHAConfig", req, resp, cb);
    }

    /**
     * This API is used to rebalance the loads of read-only replicas in an RO group. Please note that connections to those read-only replicas will be interrupted transiently; therefore, you should ensure that your application can reconnect to the databases. This operation should be performed with caution.
     * @param {RebalanceReadOnlyGroupRequest} req
     * @param {function(string, RebalanceReadOnlyGroupResponse):void} cb
     * @public
     */
    RebalanceReadOnlyGroup(req, cb) {
        let resp = new RebalanceReadOnlyGroupResponse();
        this.request("RebalanceReadOnlyGroup", req, resp, cb);
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
     * This API is used to set auto-renewal.
     * @param {SetAutoRenewFlagRequest} req
     * @param {function(string, SetAutoRenewFlagResponse):void} cb
     * @public
     */
    SetAutoRenewFlag(req, cb) {
        let resp = new SetAutoRenewFlagResponse();
        this.request("SetAutoRenewFlag", req, resp, cb);
    }

    /**
     * This API is used to rename a TencentDB for PostgreSQL instance.
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        let resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }

    /**
     * This API is used to delete a parameter template.
     * @param {DeleteParameterTemplateRequest} req
     * @param {function(string, DeleteParameterTemplateResponse):void} cb
     * @public
     */
    DeleteParameterTemplate(req, cb) {
        let resp = new DeleteParameterTemplateResponse();
        this.request("DeleteParameterTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the parameters of an instance.
     * @param {DescribeDBInstanceParametersRequest} req
     * @param {function(string, DescribeDBInstanceParametersResponse):void} cb
     * @public
     */
    DescribeDBInstanceParameters(req, cb) {
        let resp = new DescribeDBInstanceParametersResponse();
        this.request("DescribeDBInstanceParameters", req, resp, cb);
    }

    /**
     * This API is used to delete a PostgreSQL for Serverless instance.
     * @param {DeleteServerlessDBInstanceRequest} req
     * @param {function(string, DeleteServerlessDBInstanceResponse):void} cb
     * @public
     */
    DeleteServerlessDBInstance(req, cb) {
        let resp = new DeleteServerlessDBInstanceResponse();
        this.request("DeleteServerlessDBInstance", req, resp, cb);
    }

    /**
     * This API is used to create a network for an instance.
     * @param {CreateDBInstanceNetworkAccessRequest} req
     * @param {function(string, CreateDBInstanceNetworkAccessResponse):void} cb
     * @public
     */
    CreateDBInstanceNetworkAccess(req, cb) {
        let resp = new CreateDBInstanceNetworkAccessResponse();
        this.request("CreateDBInstanceNetworkAccess", req, resp, cb);
    }

    /**
     * This API is used to modify instance specifications, including memory and disk size.
     * @param {ModifyDBInstanceSpecRequest} req
     * @param {function(string, ModifyDBInstanceSpecResponse):void} cb
     * @public
     */
    ModifyDBInstanceSpec(req, cb) {
        let resp = new ModifyDBInstanceSpecResponse();
        this.request("ModifyDBInstanceSpec", req, resp, cb);
    }

    /**
     * This API is used to modify the security group of an instance.
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to create a PostgreSQL for Serverless instance. If the creation succeeds, the instance ID will be returned.
     * @param {CreateServerlessDBInstanceRequest} req
     * @param {function(string, CreateServerlessDBInstanceResponse):void} cb
     * @public
     */
    CreateServerlessDBInstance(req, cb) {
        let resp = new CreateServerlessDBInstanceResponse();
        this.request("CreateServerlessDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the database list of an instance.
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * This API is used to query the list of parameter templates.
     * @param {DescribeParameterTemplatesRequest} req
     * @param {function(string, DescribeParameterTemplatesResponse):void} cb
     * @public
     */
    DescribeParameterTemplates(req, cb) {
        let resp = new DescribeParameterTemplatesResponse();
        this.request("DescribeParameterTemplates", req, resp, cb);
    }

    /**
     * This API is used to query the purchasable specification configuration. u200cThis API is disused and replaced by the [DescribeClasses](https://intl.cloud.tencent.com/document/api/409/89019?from_cn_redirect=1) API.
     * @param {DescribeProductConfigRequest} req
     * @param {function(string, DescribeProductConfigResponse):void} cb
     * @public
     */
    DescribeProductConfig(req, cb) {
        let resp = new DescribeProductConfigResponse();
        this.request("DescribeProductConfig", req, resp, cb);
    }

    /**
     * This API is used to get a slow query log. Since it was deprecated on September 1, 2021, it has no longer returned data. You need to use the [DescribeSlowQueryList](https://intl.cloud.tencent.com/document/product/409/60540?from_cn_redirect=1) API instead to get slow query logs.
     * @param {DescribeDBSlowlogsRequest} req
     * @param {function(string, DescribeDBSlowlogsResponse):void} cb
     * @public
     */
    DescribeDBSlowlogs(req, cb) {
        let resp = new DescribeDBSlowlogsResponse();
        this.request("DescribeDBSlowlogs", req, resp, cb);
    }

    /**
     * This API is used to delete a network of an RO group.
     * @param {DeleteReadOnlyGroupNetworkAccessRequest} req
     * @param {function(string, DeleteReadOnlyGroupNetworkAccessResponse):void} cb
     * @public
     */
    DeleteReadOnlyGroupNetworkAccess(req, cb) {
        let resp = new DeleteReadOnlyGroupNetworkAccessResponse();
        this.request("DeleteReadOnlyGroupNetworkAccess", req, resp, cb);
    }

    /**
     * This API is used to switch the instance billing mode from pay-as-you-go to monthly subscription.
     * @param {ModifyDBInstanceChargeTypeRequest} req
     * @param {function(string, ModifyDBInstanceChargeTypeResponse):void} cb
     * @public
     */
    ModifyDBInstanceChargeType(req, cb) {
        let resp = new ModifyDBInstanceChargeTypeResponse();
        this.request("ModifyDBInstanceChargeType", req, resp, cb);
    }

    /**
     * This API is used to terminate an isolated instance by specifying the `DBInstanceId` parameter. The data of a terminated instance will be deleted and cannot be recovered. Be cautious with this API calling. Only the instance in isolation can be terminated.
     * @param {DestroyDBInstanceRequest} req
     * @param {function(string, DestroyDBInstanceResponse):void} cb
     * @public
     */
    DestroyDBInstance(req, cb) {
        let resp = new DestroyDBInstanceResponse();
        this.request("DestroyDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the backup list of an instance. This API is disused and replaced by the [DescribeBaseBackups](https://intl.cloud.tencent.com/document/api/409/89022?from_cn_redirect=1) API.
     * @param {DescribeDBBackupsRequest} req
     * @param {function(string, DescribeDBBackupsResponse):void} cb
     * @public
     */
    DescribeDBBackups(req, cb) {
        let resp = new DescribeDBBackupsResponse();
        this.request("DescribeDBBackups", req, resp, cb);
    }

    /**
     * This API is used to count and analyze slow query statements during the specified period of time and return aggregated statistical analysis results which are classified by statement with abstract parameter values.
     * @param {DescribeSlowQueryAnalysisRequest} req
     * @param {function(string, DescribeSlowQueryAnalysisResponse):void} cb
     * @public
     */
    DescribeSlowQueryAnalysis(req, cb) {
        let resp = new DescribeSlowQueryAnalysisResponse();
        this.request("DescribeSlowQueryAnalysis", req, resp, cb);
    }

    /**
     * This API is used to query the purchase price of an instance.
     * @param {InquiryPriceCreateDBInstancesRequest} req
     * @param {function(string, InquiryPriceCreateDBInstancesResponse):void} cb
     * @public
     */
    InquiryPriceCreateDBInstances(req, cb) {
        let resp = new InquiryPriceCreateDBInstancesResponse();
        this.request("InquiryPriceCreateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the security group of an instance.
     * @param {DescribeDBInstanceSecurityGroupsRequest} req
     * @param {function(string, DescribeDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBInstanceSecurityGroups(req, cb) {
        let resp = new DescribeDBInstanceSecurityGroupsResponse();
        this.request("DescribeDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to create a data backup of an instance.
     * @param {CreateBaseBackupRequest} req
     * @param {function(string, CreateBaseBackupResponse):void} cb
     * @public
     */
    CreateBaseBackup(req, cb) {
        let resp = new CreateBaseBackupResponse();
        this.request("CreateBaseBackup", req, resp, cb);
    }

    /**
     * This API is used to query the details of a parameter template, including basic information and parameter information.
     * @param {DescribeParameterTemplateAttributesRequest} req
     * @param {function(string, DescribeParameterTemplateAttributesResponse):void} cb
     * @public
     */
    DescribeParameterTemplateAttributes(req, cb) {
        let resp = new DescribeParameterTemplateAttributesResponse();
        this.request("DescribeParameterTemplateAttributes", req, resp, cb);
    }

    /**
     * This API is used to disable the public network address of a PostgreSQL for Serverless instance.
     * @param {CloseServerlessDBExtranetAccessRequest} req
     * @param {function(string, CloseServerlessDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseServerlessDBExtranetAccess(req, cb) {
        let resp = new CloseServerlessDBExtranetAccessResponse();
        this.request("CloseServerlessDBExtranetAccess", req, resp, cb);
    }

    /**
     * This API is used to modify the AZs where the nodes of a source instance reside.
     * @param {ModifyDBInstanceDeploymentRequest} req
     * @param {function(string, ModifyDBInstanceDeploymentResponse):void} cb
     * @public
     */
    ModifyDBInstanceDeployment(req, cb) {
        let resp = new ModifyDBInstanceDeploymentResponse();
        this.request("ModifyDBInstanceDeployment", req, resp, cb);
    }

    /**
     * This API is used to renew an instance.
     * @param {RenewInstanceRequest} req
     * @param {function(string, RenewInstanceResponse):void} cb
     * @public
     */
    RenewInstance(req, cb) {
        let resp = new RenewInstanceResponse();
        this.request("RenewInstance", req, resp, cb);
    }

    /**
     * This API is used to modify instance parameters.
     * @param {ModifyDBInstanceParametersRequest} req
     * @param {function(string, ModifyDBInstanceParametersResponse):void} cb
     * @public
     */
    ModifyDBInstanceParameters(req, cb) {
        let resp = new ModifyDBInstanceParametersResponse();
        this.request("ModifyDBInstanceParameters", req, resp, cb);
    }

    /**
     * This API is used to query the list of data backups.
     * @param {DescribeBaseBackupsRequest} req
     * @param {function(string, DescribeBaseBackupsResponse):void} cb
     * @public
     */
    DescribeBaseBackups(req, cb) {
        let resp = new DescribeBaseBackupsResponse();
        this.request("DescribeBaseBackups", req, resp, cb);
    }

    /**
     * This API is used to query the available restoration time of an instance.
     * @param {DescribeAvailableRecoveryTimeRequest} req
     * @param {function(string, DescribeAvailableRecoveryTimeResponse):void} cb
     * @public
     */
    DescribeAvailableRecoveryTime(req, cb) {
        let resp = new DescribeAvailableRecoveryTimeResponse();
        this.request("DescribeAvailableRecoveryTime", req, resp, cb);
    }

    /**
     * This API is used to query the purchasable regions.
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * This API is used to enable the public network address of a PostgreSQL for Serverless instance.
     * @param {OpenServerlessDBExtranetAccessRequest} req
     * @param {function(string, OpenServerlessDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenServerlessDBExtranetAccess(req, cb) {
        let resp = new OpenServerlessDBExtranetAccessResponse();
        this.request("OpenServerlessDBExtranetAccess", req, resp, cb);
    }

    /**
     * This API is used to modify the RO group of an instance.
     * @param {ModifyDBInstanceReadOnlyGroupRequest} req
     * @param {function(string, ModifyDBInstanceReadOnlyGroupResponse):void} cb
     * @public
     */
    ModifyDBInstanceReadOnlyGroup(req, cb) {
        let resp = new ModifyDBInstanceReadOnlyGroupResponse();
        this.request("ModifyDBInstanceReadOnlyGroup", req, resp, cb);
    }

    /**
     * This API is used to clone an instance by specifying a backup set or a point in time.
     * @param {CloneDBInstanceRequest} req
     * @param {function(string, CloneDBInstanceResponse):void} cb
     * @public
     */
    CloneDBInstance(req, cb) {
        let resp = new CloneDBInstanceResponse();
        this.request("CloneDBInstance", req, resp, cb);
    }

    /**
     * This API is used to remove one or more instances from isolation.
     * @param {DisIsolateDBInstancesRequest} req
     * @param {function(string, DisIsolateDBInstancesResponse):void} cb
     * @public
     */
    DisIsolateDBInstances(req, cb) {
        let resp = new DisIsolateDBInstancesResponse();
        this.request("DisIsolateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the details of one or more PostgreSQL for Serverless instances.
     * @param {DescribeServerlessDBInstancesRequest} req
     * @param {function(string, DescribeServerlessDBInstancesResponse):void} cb
     * @public
     */
    DescribeServerlessDBInstances(req, cb) {
        let resp = new DescribeServerlessDBInstancesResponse();
        this.request("DescribeServerlessDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the list of supported database versions.
     * @param {DescribeDBVersionsRequest} req
     * @param {function(string, DescribeDBVersionsResponse):void} cb
     * @public
     */
    DescribeDBVersions(req, cb) {
        let resp = new DescribeDBVersionsResponse();
        this.request("DescribeDBVersions", req, resp, cb);
    }

    /**
     * This API is used to modify the configurations, such as parameter template name and description. It can also be used to manage the parameter list in the parameter template.
     * @param {ModifyParameterTemplateRequest} req
     * @param {function(string, ModifyParameterTemplateResponse):void} cb
     * @public
     */
    ModifyParameterTemplate(req, cb) {
        let resp = new ModifyParameterTemplateResponse();
        this.request("ModifyParameterTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a parameter template.
     * @param {CreateParameterTemplateRequest} req
     * @param {function(string, CreateParameterTemplateResponse):void} cb
     * @public
     */
    CreateParameterTemplate(req, cb) {
        let resp = new CreateParameterTemplateResponse();
        this.request("CreateParameterTemplate", req, resp, cb);
    }

    /**
     * This API is used to create read-only replicas.
     * @param {CreateReadOnlyDBInstanceRequest} req
     * @param {function(string, CreateReadOnlyDBInstanceResponse):void} cb
     * @public
     */
    CreateReadOnlyDBInstance(req, cb) {
        let resp = new CreateReadOnlyDBInstanceResponse();
        this.request("CreateReadOnlyDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the backup statistics of an instance. It will return the number and size (bytes) of backups of the instance.
     * @param {DescribeBackupSummariesRequest} req
     * @param {function(string, DescribeBackupSummariesResponse):void} cb
     * @public
     */
    DescribeBackupSummaries(req, cb) {
        let resp = new DescribeBackupSummariesResponse();
        this.request("DescribeBackupSummaries", req, resp, cb);
    }

    /**
     * This API is used to upgrade the major kernel version of an instance, for example, from PostgreSQL 12 to PostgreSQL 15.
     * @param {UpgradeDBInstanceMajorVersionRequest} req
     * @param {function(string, UpgradeDBInstanceMajorVersionResponse):void} cb
     * @public
     */
    UpgradeDBInstanceMajorVersion(req, cb) {
        let resp = new UpgradeDBInstanceMajorVersionResponse();
        this.request("UpgradeDBInstanceMajorVersion", req, resp, cb);
    }

    /**
     * This API is used to query the backup overview. It will return the current number and size of backups, free backup space size, and paid backup space size (all size values are in bytes).
     * @param {DescribeBackupOverviewRequest} req
     * @param {function(string, DescribeBackupOverviewResponse):void} cb
     * @public
     */
    DescribeBackupOverview(req, cb) {
        let resp = new DescribeBackupOverviewResponse();
        this.request("DescribeBackupOverview", req, resp, cb);
    }

    /**
     * This API is used to create a network for an RO group.
     * @param {CreateReadOnlyGroupNetworkAccessRequest} req
     * @param {function(string, CreateReadOnlyGroupNetworkAccessResponse):void} cb
     * @public
     */
    CreateReadOnlyGroupNetworkAccess(req, cb) {
        let resp = new CreateReadOnlyGroupNetworkAccessResponse();
        this.request("CreateReadOnlyGroupNetworkAccess", req, resp, cb);
    }

    /**
     * This API is used to query the instance key list.
     * @param {DescribeEncryptionKeysRequest} req
     * @param {function(string, DescribeEncryptionKeysResponse):void} cb
     * @public
     */
    DescribeEncryptionKeys(req, cb) {
        let resp = new DescribeEncryptionKeysResponse();
        this.request("DescribeEncryptionKeys", req, resp, cb);
    }

    /**
     * This API is used to delete an RO group.
     * @param {DeleteReadOnlyGroupRequest} req
     * @param {function(string, DeleteReadOnlyGroupResponse):void} cb
     * @public
     */
    DeleteReadOnlyGroup(req, cb) {
        let resp = new DeleteReadOnlyGroupResponse();
        this.request("DeleteReadOnlyGroup", req, resp, cb);
    }

    /**
     * This API is used to upgrade the kernel version of an instance.
     * @param {UpgradeDBInstanceKernelVersionRequest} req
     * @param {function(string, UpgradeDBInstanceKernelVersionResponse):void} cb
     * @public
     */
    UpgradeDBInstanceKernelVersion(req, cb) {
        let resp = new UpgradeDBInstanceKernelVersionResponse();
        this.request("UpgradeDBInstanceKernelVersion", req, resp, cb);
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
     * This API is used to recover database-related objects such as databases and tables on the original instance based on the backup set or recovery target time.
     * @param {RestoreDBInstanceObjectsRequest} req
     * @param {function(string, RestoreDBInstanceObjectsResponse):void} cb
     * @public
     */
    RestoreDBInstanceObjects(req, cb) {
        let resp = new RestoreDBInstanceObjectsResponse();
        this.request("RestoreDBInstanceObjects", req, resp, cb);
    }

    /**
     * This API is used to delete a network of an instance.
     * @param {DeleteDBInstanceNetworkAccessRequest} req
     * @param {function(string, DeleteDBInstanceNetworkAccessResponse):void} cb
     * @public
     */
    DeleteDBInstanceNetworkAccess(req, cb) {
        let resp = new DeleteDBInstanceNetworkAccessResponse();
        this.request("DeleteDBInstanceNetworkAccess", req, resp, cb);
    }

    /**
     * This API is used to modify the project of an instance.
     * @param {ModifyDBInstancesProjectRequest} req
     * @param {function(string, ModifyDBInstancesProjectResponse):void} cb
     * @public
     */
    ModifyDBInstancesProject(req, cb) {
        let resp = new ModifyDBInstancesProjectResponse();
        this.request("ModifyDBInstancesProject", req, resp, cb);
    }

    /**
     * This API is used to get the instance Xlog list. This API is disused and replaced by the [DescribeBaseBackups](https://www.tencentcloud.com/zh/document/product/409/54343) API.
     * @param {DescribeDBXlogsRequest} req
     * @param {function(string, DescribeDBXlogsResponse):void} cb
     * @public
     */
    DescribeDBXlogs(req, cb) {
        let resp = new DescribeDBXlogsResponse();
        this.request("DescribeDBXlogs", req, resp, cb);
    }

    /**
     * This API is used to restart an instance.
     * @param {RestartDBInstanceRequest} req
     * @param {function(string, RestartDBInstanceResponse):void} cb
     * @public
     */
    RestartDBInstance(req, cb) {
        let resp = new RestartDBInstanceResponse();
        this.request("RestartDBInstance", req, resp, cb);
    }

    /**
     * This API is used to create (but not initialize) one or more TencentDB for PostgreSQL instances. This API is disused and replaced by the [CreateInstances](https://intl.cloud.tencent.com/document/api/409/56107?from_cn_redirect=1) API.
     * @param {CreateDBInstancesRequest} req
     * @param {function(string, CreateDBInstancesResponse):void} cb
     * @public
     */
    CreateDBInstances(req, cb) {
        let resp = new CreateDBInstancesResponse();
        this.request("CreateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to modify the HA configuration of an instance. which includes:
<li>Allow the standby node to promote to the primary node.
<li>Allow a semi-sync instance to adopt sync or async replication.
     * @param {ModifyDBInstanceHAConfigRequest} req
     * @param {function(string, ModifyDBInstanceHAConfigResponse):void} cb
     * @public
     */
    ModifyDBInstanceHAConfig(req, cb) {
        let resp = new ModifyDBInstanceHAConfigResponse();
        this.request("ModifyDBInstanceHAConfig", req, resp, cb);
    }

    /**
     * This API is used to delete the specified log backup of an instance.
     * @param {DeleteLogBackupRequest} req
     * @param {function(string, DeleteLogBackupResponse):void} cb
     * @public
     */
    DeleteLogBackup(req, cb) {
        let resp = new DeleteLogBackupResponse();
        this.request("DeleteLogBackup", req, resp, cb);
    }

    /**
     * This API is used to isolate an instance.
     * @param {IsolateDBInstancesRequest} req
     * @param {function(string, IsolateDBInstancesResponse):void} cb
     * @public
     */
    IsolateDBInstances(req, cb) {
        let resp = new IsolateDBInstancesResponse();
        this.request("IsolateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to modify the expiration time of a specified data backup for an instance.
     * @param {ModifyBaseBackupExpireTimeRequest} req
     * @param {function(string, ModifyBaseBackupExpireTimeResponse):void} cb
     * @public
     */
    ModifyBaseBackupExpireTime(req, cb) {
        let resp = new ModifyBaseBackupExpireTimeResponse();
        this.request("ModifyBaseBackupExpireTime", req, resp, cb);
    }

    /**
     * This API is used to create an RO group.
     * @param {CreateReadOnlyGroupRequest} req
     * @param {function(string, CreateReadOnlyGroupResponse):void} cb
     * @public
     */
    CreateReadOnlyGroup(req, cb) {
        let resp = new CreateReadOnlyGroupResponse();
        this.request("CreateReadOnlyGroup", req, resp, cb);
    }

    /**
     * This API is used to get the slow queries during the specified period of time.
     * @param {DescribeSlowQueryListRequest} req
     * @param {function(string, DescribeSlowQueryListResponse):void} cb
     * @public
     */
    DescribeSlowQueryList(req, cb) {
        let resp = new DescribeSlowQueryListResponse();
        this.request("DescribeSlowQueryList", req, resp, cb);
    }

    /**
     * This API is used to query the list of log backups.
     * @param {DescribeLogBackupsRequest} req
     * @param {function(string, DescribeLogBackupsResponse):void} cb
     * @public
     */
    DescribeLogBackups(req, cb) {
        let resp = new DescribeLogBackupsResponse();
        this.request("DescribeLogBackups", req, resp, cb);
    }

    /**
     * This API is used to disable the public network address of an instance.
     * @param {CloseDBExtranetAccessRequest} req
     * @param {function(string, CloseDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseDBExtranetAccess(req, cb) {
        let resp = new CloseDBExtranetAccessResponse();
        this.request("CloseDBExtranetAccess", req, resp, cb);
    }

    /**
     * This API is used to add a read-only replica to an RO group.
     * @param {AddDBInstanceToReadOnlyGroupRequest} req
     * @param {function(string, AddDBInstanceToReadOnlyGroupResponse):void} cb
     * @public
     */
    AddDBInstanceToReadOnlyGroup(req, cb) {
        let resp = new AddDBInstanceToReadOnlyGroupResponse();
        this.request("AddDBInstanceToReadOnlyGroup", req, resp, cb);
    }

    /**
     * This API is used to query the list of the database accounts for an instance.
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * This API is used to query the minimum specification required by a cloned instance, including `SpecCode` and disk specification.
     * @param {DescribeCloneDBInstanceSpecRequest} req
     * @param {function(string, DescribeCloneDBInstanceSpecResponse):void} cb
     * @public
     */
    DescribeCloneDBInstanceSpec(req, cb) {
        let resp = new DescribeCloneDBInstanceSpecResponse();
        this.request("DescribeCloneDBInstanceSpec", req, resp, cb);
    }

    /**
     * This API is used to query the details of one or more instances.
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the backup download restrictions.
     * @param {DescribeBackupDownloadRestrictionRequest} req
     * @param {function(string, DescribeBackupDownloadRestrictionResponse):void} cb
     * @public
     */
    DescribeBackupDownloadRestriction(req, cb) {
        let resp = new DescribeBackupDownloadRestrictionResponse();
        this.request("DescribeBackupDownloadRestriction", req, resp, cb);
    }

    /**
     * This API is used to modify RO group configuration.
     * @param {ModifyReadOnlyGroupConfigRequest} req
     * @param {function(string, ModifyReadOnlyGroupConfigResponse):void} cb
     * @public
     */
    ModifyReadOnlyGroupConfig(req, cb) {
        let resp = new ModifyReadOnlyGroupConfigResponse();
        this.request("ModifyReadOnlyGroupConfig", req, resp, cb);
    }

    /**
     * This API is used to remove a read-only replica from an RO group.
     * @param {RemoveDBInstanceFromReadOnlyGroupRequest} req
     * @param {function(string, RemoveDBInstanceFromReadOnlyGroupResponse):void} cb
     * @public
     */
    RemoveDBInstanceFromReadOnlyGroup(req, cb) {
        let resp = new RemoveDBInstanceFromReadOnlyGroupResponse();
        this.request("RemoveDBInstanceFromReadOnlyGroup", req, resp, cb);
    }

    /**
     * This API is used to query the parameter modification event.
     * @param {DescribeParamsEventRequest} req
     * @param {function(string, DescribeParamsEventResponse):void} cb
     * @public
     */
    DescribeParamsEvent(req, cb) {
        let resp = new DescribeParamsEventResponse();
        this.request("DescribeParamsEvent", req, resp, cb);
    }

    /**
     * This API is used to query purchasable instance specifications.
     * @param {DescribeClassesRequest} req
     * @param {function(string, DescribeClassesResponse):void} cb
     * @public
     */
    DescribeClasses(req, cb) {
        let resp = new DescribeClassesResponse();
        this.request("DescribeClasses", req, resp, cb);
    }

    /**
     * This API is used to query the order information.
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        let resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }

    /**
     * This API is used to enable the primary-standby switch of an instance.
<li>By initiating a switch, you can verify whether the primary-standby switch is performed correctly.
<li>By using forced switch, you can forcibly initiate the primary-standby switch when the delay of replica node failed to meet the switch requirement.
<li>This operation can only be performed for the primary instance.
     * @param {SwitchDBInstancePrimaryRequest} req
     * @param {function(string, SwitchDBInstancePrimaryResponse):void} cb
     * @public
     */
    SwitchDBInstancePrimary(req, cb) {
        let resp = new SwitchDBInstancePrimaryResponse();
        this.request("SwitchDBInstancePrimary", req, resp, cb);
    }

    /**
     * This API is used to query all backup plans of an instance.
     * @param {DescribeBackupPlansRequest} req
     * @param {function(string, DescribeBackupPlansResponse):void} cb
     * @public
     */
    DescribeBackupPlans(req, cb) {
        let resp = new DescribeBackupPlansResponse();
        this.request("DescribeBackupPlans", req, resp, cb);
    }

    /**
     * This API is used to perform a primary-standby switch for an instance waiting for the switch after it is upgraded.
     * @param {ModifySwitchTimePeriodRequest} req
     * @param {function(string, ModifySwitchTimePeriodResponse):void} cb
     * @public
     */
    ModifySwitchTimePeriod(req, cb) {
        let resp = new ModifySwitchTimePeriodResponse();
        this.request("ModifySwitchTimePeriod", req, resp, cb);
    }

    /**
     * This API is used to enable the public network access of an instance.
     * @param {OpenDBExtranetAccessRequest} req
     * @param {function(string, OpenDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenDBExtranetAccess(req, cb) {
        let resp = new OpenDBExtranetAccessResponse();
        this.request("OpenDBExtranetAccess", req, resp, cb);
    }

    /**
     * This API is used to modify the backup plan of an instance, such as modifying the backup start time. By default, a full backup starts at midnight every day and the generated backup files will be retained for seven days.
     * @param {ModifyBackupPlanRequest} req
     * @param {function(string, ModifyBackupPlanResponse):void} cb
     * @public
     */
    ModifyBackupPlan(req, cb) {
        let resp = new ModifyBackupPlanResponse();
        this.request("ModifyBackupPlan", req, resp, cb);
    }

    /**
     * This API is used to initialize a TencentDB for PostgreSQL instance. This API is disused and replaced by the [CreateInstances](https://intl.cloud.tencent.com/document/api/409/56107?from_cn_redirect=1) API.
     * @param {InitDBInstancesRequest} req
     * @param {function(string, InitDBInstancesResponse):void} cb
     * @public
     */
    InitDBInstances(req, cb) {
        let resp = new InitDBInstancesResponse();
        this.request("InitDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the supported AZs.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * This API is used to query the fees of upgrading a specified database instance. Only pay-as-you-go instance is supported.
     * @param {InquiryPriceUpgradeDBInstanceRequest} req
     * @param {function(string, InquiryPriceUpgradeDBInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpgradeDBInstance(req, cb) {
        let resp = new InquiryPriceUpgradeDBInstanceResponse();
        this.request("InquiryPriceUpgradeDBInstance", req, resp, cb);
    }

    /**
     * This API is used to query the renewal price of an instance.
     * @param {InquiryPriceRenewDBInstanceRequest} req
     * @param {function(string, InquiryPriceRenewDBInstanceResponse):void} cb
     * @public
     */
    InquiryPriceRenewDBInstance(req, cb) {
        let resp = new InquiryPriceRenewDBInstanceResponse();
        this.request("InquiryPriceRenewDBInstance", req, resp, cb);
    }

    /**
     * This API is used to modify the backup download restrictions.
     * @param {ModifyBackupDownloadRestrictionRequest} req
     * @param {function(string, ModifyBackupDownloadRestrictionResponse):void} cb
     * @public
     */
    ModifyBackupDownloadRestriction(req, cb) {
        let resp = new ModifyBackupDownloadRestrictionResponse();
        this.request("ModifyBackupDownloadRestriction", req, resp, cb);
    }

    /**
     * This API is used to delete a specified data backup for an instance.
     * @param {DeleteBaseBackupRequest} req
     * @param {function(string, DeleteBaseBackupResponse):void} cb
     * @public
     */
    DeleteBaseBackup(req, cb) {
        let resp = new DeleteBaseBackupResponse();
        this.request("DeleteBaseBackup", req, resp, cb);
    }

    /**
     * This API is used to query the list of RO groups.
     * @param {DescribeReadOnlyGroupsRequest} req
     * @param {function(string, DescribeReadOnlyGroupsResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroups(req, cb) {
        let resp = new DescribeReadOnlyGroupsResponse();
        this.request("DescribeReadOnlyGroups", req, resp, cb);
    }

    /**
     * This API is used to query the details of one instance.
     * @param {DescribeDBInstanceAttributeRequest} req
     * @param {function(string, DescribeDBInstanceAttributeResponse):void} cb
     * @public
     */
    DescribeDBInstanceAttribute(req, cb) {
        let resp = new DescribeDBInstanceAttributeResponse();
        this.request("DescribeDBInstanceAttribute", req, resp, cb);
    }

    /**
     * This API is used to upgrade instance configurations. u200cThis API is disused and replaced by the [ModifyDBInstanceSpec](https://intl.cloud.tencent.com/document/api/409/63689?from_cn_redirect=1) API.
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req, cb) {
        let resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
    }

    /**
     * This API is used to create one or more PostgreSQL instances. Instances created through this interface do not need to be initialized and can be used directly.
<li>After an instance is successfully created, it will automatically start up, and its status changes to "Running".</li>
<li>For prepaid instances, the required amount for the instance purchase will be deducted in advance. For post-paid hourly instances, the amount required for the purchase within the first hour will be temporarily frozen. Please ensure that your account balance is sufficient before calling this interface.</li>
     * @param {CreateInstancesRequest} req
     * @param {function(string, CreateInstancesResponse):void} cb
     * @public
     */
    CreateInstances(req, cb) {
        let resp = new CreateInstancesResponse();
        this.request("CreateInstances", req, resp, cb);
    }


}
module.exports = PostgresClient;
