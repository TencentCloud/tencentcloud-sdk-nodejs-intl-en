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
const DescribeRiskCenterPortViewPortRiskListRequest = models.DescribeRiskCenterPortViewPortRiskListRequest;
const DescribeDbAssetInfoResponse = models.DescribeDbAssetInfoResponse;
const DeleteRiskScanTaskRequest = models.DeleteRiskScanTaskRequest;
const DescribeRiskCenterAssetViewWeakPasswordRiskListResponse = models.DescribeRiskCenterAssetViewWeakPasswordRiskListResponse;
const DescribeCSIPRiskStatisticsRequest = models.DescribeCSIPRiskStatisticsRequest;
const CsipRiskCenterStatistics = models.CsipRiskCenterStatistics;
const DescribeVULRiskAdvanceCFGListResponse = models.DescribeVULRiskAdvanceCFGListResponse;
const StandardItem = models.StandardItem;
const HighBaseLineRiskItem = models.HighBaseLineRiskItem;
const AccessKeyAlarmInfo = models.AccessKeyAlarmInfo;
const DescribeOtherCloudAssetsResponse = models.DescribeOtherCloudAssetsResponse;
const DescribeAssetViewVulRiskListResponse = models.DescribeAssetViewVulRiskListResponse;
const DescribeRepositoryImageAssetsRequest = models.DescribeRepositoryImageAssetsRequest;
const DescribeOrganizationUserInfoRequest = models.DescribeOrganizationUserInfoRequest;
const DescribeTaskLogURLResponse = models.DescribeTaskLogURLResponse;
const SkillCapabilityTag = models.SkillCapabilityTag;
const ModifyUebaRuleSwitchResponse = models.ModifyUebaRuleSwitchResponse;
const DescribeAKAnalysisDetailResponse = models.DescribeAKAnalysisDetailResponse;
const ReportItemKey = models.ReportItemKey;
const CreateAccessKeySyncTaskRequest = models.CreateAccessKeySyncTaskRequest;
const AddNewBindRoleUserRequest = models.AddNewBindRoleUserRequest;
const DescribeCheckViewRisksRequest = models.DescribeCheckViewRisksRequest;
const VULBaseInfo = models.VULBaseInfo;
const DescribeCallRecordResponse = models.DescribeCallRecordResponse;
const AssetViewCFGRisk = models.AssetViewCFGRisk;
const DescribeIaCFileListRequest = models.DescribeIaCFileListRequest;
const DescribeAssetRiskListResponse = models.DescribeAssetRiskListResponse;
const AlertInfo = models.AlertInfo;
const KeyValue = models.KeyValue;
const DescribeClusterPodAssetsResponse = models.DescribeClusterPodAssetsResponse;
const Vpc = models.Vpc;
const STSCredentialOutput = models.STSCredentialOutput;
const PortRiskAdvanceCFGParamItem = models.PortRiskAdvanceCFGParamItem;
const CreateIaCAccessTokenRequest = models.CreateIaCAccessTokenRequest;
const DescribeCFWAssetStatisticsResponse = models.DescribeCFWAssetStatisticsResponse;
const DescribeRepositoryImageAssetsResponse = models.DescribeRepositoryImageAssetsResponse;
const DataSearchBug = models.DataSearchBug;
const VULViewVULRiskData = models.VULViewVULRiskData;
const CommandPluginState = models.CommandPluginState;
const DescribeSkillScanResultResponse = models.DescribeSkillScanResultResponse;
const DescribeIaCFileOverviewResponse = models.DescribeIaCFileOverviewResponse;
const AssetTag = models.AssetTag;
const DescribeCheckViewRisksResponse = models.DescribeCheckViewRisksResponse;
const VULViewVULRisk = models.VULViewVULRisk;
const DescribeConfigCheckRulesRequest = models.DescribeConfigCheckRulesRequest;
const DescribeRiskCallRecordResponse = models.DescribeRiskCallRecordResponse;
const DescribeScanReportListRequest = models.DescribeScanReportListRequest;
const ModifyRiskCenterRiskStatusRequest = models.ModifyRiskCenterRiskStatusRequest;
const NewAlertKey = models.NewAlertKey;
const DeleteIaCFileResponse = models.DeleteIaCFileResponse;
const IpAssetListVO = models.IpAssetListVO;
const UebaCustomRule = models.UebaCustomRule;
const CreateIaCFileReScanTaskResponse = models.CreateIaCFileReScanTaskResponse;
const DescribeClusterAssetsRequest = models.DescribeClusterAssetsRequest;
const DescribeSubnetAssetsRequest = models.DescribeSubnetAssetsRequest;
const DescribeTopAttackInfoResponse = models.DescribeTopAttackInfoResponse;
const DescribeAccessKeyAssetRequest = models.DescribeAccessKeyAssetRequest;
const DescribeVULRiskDetailResponse = models.DescribeVULRiskDetailResponse;
const CreateIaCAccessTokenResponse = models.CreateIaCAccessTokenResponse;
const DescribeDomainAssetsRequest = models.DescribeDomainAssetsRequest;
const ModifyRiskCenterScanTaskResponse = models.ModifyRiskCenterScanTaskResponse;
const DescribeNICAssetsRequest = models.DescribeNICAssetsRequest;
const DescribeIaCFileReportResponse = models.DescribeIaCFileReportResponse;
const TrafficRuleState = models.TrafficRuleState;
const DescribeRiskCenterWebsiteRiskListResponse = models.DescribeRiskCenterWebsiteRiskListResponse;
const TaskCenterWeakPwdRiskInputParam = models.TaskCenterWeakPwdRiskInputParam;
const Tag = models.Tag;
const AccessKeyAlarmCount = models.AccessKeyAlarmCount;
const RiskRuleInfo = models.RiskRuleInfo;
const RiskRuleItem = models.RiskRuleItem;
const DescribeRiskCenterCFGViewCFGRiskListRequest = models.DescribeRiskCenterCFGViewCFGRiskListRequest;
const DescribeAssetProcessListRequest = models.DescribeAssetProcessListRequest;
const DescribeAssetProcessListResponse = models.DescribeAssetProcessListResponse;
const DescribeAbnormalCallRecordRequest = models.DescribeAbnormalCallRecordRequest;
const UpdateAccessKeyAlarmStatusRequest = models.UpdateAccessKeyAlarmStatusRequest;
const DescribeCSIPRiskStatisticsResponse = models.DescribeCSIPRiskStatisticsResponse;
const DescribeAccessKeyUserListRequest = models.DescribeAccessKeyUserListRequest;
const AssetRiskItem = models.AssetRiskItem;
const DeleteDomainAndIpRequest = models.DeleteDomainAndIpRequest;
const DescribeRiskDetailListRequest = models.DescribeRiskDetailListRequest;
const CreateSkillScanResponse = models.CreateSkillScanResponse;
const DescribeRiskRuleDetailRequest = models.DescribeRiskRuleDetailRequest;
const VulImpactComponentInfo = models.VulImpactComponentInfo;
const DescribeRiskCenterPortViewPortRiskListResponse = models.DescribeRiskCenterPortViewPortRiskListResponse;
const CreateAccessKeyCheckTaskResponse = models.CreateAccessKeyCheckTaskResponse;
const SubnetAsset = models.SubnetAsset;
const DescribeOrganizationInfoRequest = models.DescribeOrganizationInfoRequest;
const TaskIdListKey = models.TaskIdListKey;
const DeleteIaCAccessTokenResponse = models.DeleteIaCAccessTokenResponse;
const DescribeIaCFileReportRequest = models.DescribeIaCFileReportRequest;
const DescribeRiskCenterAssetViewCFGRiskListResponse = models.DescribeRiskCenterAssetViewCFGRiskListResponse;
const UserCallRecord = models.UserCallRecord;
const RoleInfo = models.RoleInfo;
const CICDToken = models.CICDToken;
const UebaEventContent = models.UebaEventContent;
const DescribeSkillScanResultRequest = models.DescribeSkillScanResultRequest;
const GateWayAsset = models.GateWayAsset;
const CreateAccessKeySyncTaskResponse = models.CreateAccessKeySyncTaskResponse;
const ModifyIaCTokenPeriodResponse = models.ModifyIaCTokenPeriodResponse;
const DescribeSourceIPAssetResponse = models.DescribeSourceIPAssetResponse;
const CreateIaCFileExportJobResponse = models.CreateIaCFileExportJobResponse;
const DescribeKeySandboxCredentialRequest = models.DescribeKeySandboxCredentialRequest;
const DescribeRiskCallRecordRequest = models.DescribeRiskCallRecordRequest;
const TaskLogURL = models.TaskLogURL;
const ReportTaskIdList = models.ReportTaskIdList;
const CheckViewRiskItem = models.CheckViewRiskItem;
const AssetViewVULRiskData = models.AssetViewVULRiskData;
const DescribeOrganizationUserInfoResponse = models.DescribeOrganizationUserInfoResponse;
const DescribeSkillScanPayInfoRequest = models.DescribeSkillScanPayInfoRequest;
const ModifyRiskCenterRiskStatusResponse = models.ModifyRiskCenterRiskStatusResponse;
const DescribeVULRiskDetailRequest = models.DescribeVULRiskDetailRequest;
const NICAsset = models.NICAsset;
const AccessKeyRisk = models.AccessKeyRisk;
const OrganizationInfo = models.OrganizationInfo;
const DescribeListenerListResponse = models.DescribeListenerListResponse;
const TaskAdvanceCFG = models.TaskAdvanceCFG;
const AssetProcessItem = models.AssetProcessItem;
const DBAssetVO = models.DBAssetVO;
const AssetInfoDetail = models.AssetInfoDetail;
const DescribeAccessKeyAssetResponse = models.DescribeAccessKeyAssetResponse;
const DescribeAccessKeyRiskDetailResponse = models.DescribeAccessKeyRiskDetailResponse;
const CreateRiskCenterScanTaskResponse = models.CreateRiskCenterScanTaskResponse;
const DescribeSubnetAssetsResponse = models.DescribeSubnetAssetsResponse;
const UpdateAlertStatusListResponse = models.UpdateAlertStatusListResponse;
const DescribeIaCTokenListRequest = models.DescribeIaCTokenListRequest;
const StandardTerm = models.StandardTerm;
const DescribeOrganizationInfoResponse = models.DescribeOrganizationInfoResponse;
const SkillScanEngineResult = models.SkillScanEngineResult;
const DescribeVpcAssetsRequest = models.DescribeVpcAssetsRequest;
const TaskAssetObject = models.TaskAssetObject;
const DbAssetInfo = models.DbAssetInfo;
const FilterDataObject = models.FilterDataObject;
const DescribeExposePathRequest = models.DescribeExposePathRequest;
const RiskCenterStatusKey = models.RiskCenterStatusKey;
const ExposesItem = models.ExposesItem;
const DescribeAccessKeyRiskRequest = models.DescribeAccessKeyRiskRequest;
const DescribeRiskCenterAssetViewWeakPasswordRiskListRequest = models.DescribeRiskCenterAssetViewWeakPasswordRiskListRequest;
const PublicIpDomainListKey = models.PublicIpDomainListKey;
const DescribeUserCallRecordRequest = models.DescribeUserCallRecordRequest;
const DescribeKeySandboxCredentialListResponse = models.DescribeKeySandboxCredentialListResponse;
const ProductSupport = models.ProductSupport;
const DescribeCVMAssetsResponse = models.DescribeCVMAssetsResponse;
const UpdateAccessKeyRemarkResponse = models.UpdateAccessKeyRemarkResponse;
const AttributeOptionSet = models.AttributeOptionSet;
const WhereFilter = models.WhereFilter;
const CVMAssetVO = models.CVMAssetVO;
const AccessKeyAlarm = models.AccessKeyAlarm;
const CloudCountDesc = models.CloudCountDesc;
const DescribePublicIpAssetsRequest = models.DescribePublicIpAssetsRequest;
const AssetClusterPod = models.AssetClusterPod;
const DescribeKeySandboxCredentialResponse = models.DescribeKeySandboxCredentialResponse;
const SkillScanItem = models.SkillScanItem;
const DescribeCVMAssetInfoRequest = models.DescribeCVMAssetInfoRequest;
const UebaRule = models.UebaRule;
const DescribeAIAgentAssetListRequest = models.DescribeAIAgentAssetListRequest;
const WebsiteRisk = models.WebsiteRisk;
const UpdateAccessKeyAlarmStatusResponse = models.UpdateAccessKeyAlarmStatusResponse;
const CFGViewCFGRisk = models.CFGViewCFGRisk;
const TagCount = models.TagCount;
const ServiceSupport = models.ServiceSupport;
const CreateIaCFileReScanTaskRequest = models.CreateIaCFileReScanTaskRequest;
const CreateRiskCenterScanTaskRequest = models.CreateRiskCenterScanTaskRequest;
const KeySandboxCredential = models.KeySandboxCredential;
const CreateIaCFileExportJobRequest = models.CreateIaCFileExportJobRequest;
const DescribeIaCTokenListResponse = models.DescribeIaCTokenListResponse;
const DescribeRiskCenterVULViewVULRiskListResponse = models.DescribeRiskCenterVULViewVULRiskListResponse;
const DescribeConfigCheckRulesResponse = models.DescribeConfigCheckRulesResponse;
const AccessCredentialOutput = models.AccessCredentialOutput;
const SkillRuleCatalogItem = models.SkillRuleCatalogItem;
const IaCFile = models.IaCFile;
const DescribeRiskCenterVULViewVULRiskListRequest = models.DescribeRiskCenterVULViewVULRiskListRequest;
const UpdateAccessKeyRemarkRequest = models.UpdateAccessKeyRemarkRequest;
const UpdateAlertStatusListRequest = models.UpdateAlertStatusListRequest;
const DescribeTaskLogURLRequest = models.DescribeTaskLogURLRequest;
const TaskCenterVulRiskInputParam = models.TaskCenterVulRiskInputParam;
const StopRiskCenterTaskRequest = models.StopRiskCenterTaskRequest;
const DescribeScanTaskListResponse = models.DescribeScanTaskListResponse;
const DescribeScanTaskListRequest = models.DescribeScanTaskListRequest;
const ScanTaskInfo = models.ScanTaskInfo;
const TrafficPluginState = models.TrafficPluginState;
const AssetInstanceTypeMap = models.AssetInstanceTypeMap;
const DescribeAccessKeyAlarmDetailRequest = models.DescribeAccessKeyAlarmDetailRequest;
const Tags = models.Tags;
const DescribeSkillScanPayInfoResponse = models.DescribeSkillScanPayInfoResponse;
const StatisticalFilter = models.StatisticalFilter;
const PortViewPortRisk = models.PortViewPortRisk;
const VULRiskInfo = models.VULRiskInfo;
const DescribeClusterPodAssetsRequest = models.DescribeClusterPodAssetsRequest;
const RiskDetailItem = models.RiskDetailItem;
const DescribeCVMAssetInfoResponse = models.DescribeCVMAssetInfoResponse;
const DescribePublicIpAssetsResponse = models.DescribePublicIpAssetsResponse;
const DescribeVulViewVulRiskListRequest = models.DescribeVulViewVulRiskListRequest;
const DescribeAssetRiskListRequest = models.DescribeAssetRiskListRequest;
const CreateSkillScanRequest = models.CreateSkillScanRequest;
const DescribeRiskRulesRequest = models.DescribeRiskRulesRequest;
const DescribeTopAttackInfoRequest = models.DescribeTopAttackInfoRequest;
const DescribeAIAgentAssetListResponse = models.DescribeAIAgentAssetListResponse;
const VulTrend = models.VulTrend;
const DescribeSourceIPAssetRequest = models.DescribeSourceIPAssetRequest;
const DescribeVulRiskListRequest = models.DescribeVulRiskListRequest;
const AlertExtraInfo = models.AlertExtraInfo;
const DescribeAccessKeyRiskResponse = models.DescribeAccessKeyRiskResponse;
const DescribeDbAssetInfoRequest = models.DescribeDbAssetInfoRequest;
const RelatedEvent = models.RelatedEvent;
const DescribeAssetViewVulRiskListRequest = models.DescribeAssetViewVulRiskListRequest;
const DescribeUebaRuleRequest = models.DescribeUebaRuleRequest;
const DescribeVulViewVulRiskListResponse = models.DescribeVulViewVulRiskListResponse;
const CreateAccessKeyCheckTaskRequest = models.CreateAccessKeyCheckTaskRequest;
const Filter = models.Filter;
const AIAgentAsset = models.AIAgentAsset;
const DescribeRiskCenterWebsiteRiskListRequest = models.DescribeRiskCenterWebsiteRiskListRequest;
const DescribeCallRecordRequest = models.DescribeCallRecordRequest;
const VulRiskItem = models.VulRiskItem;
const RepositoryImageVO = models.RepositoryImageVO;
const ServerRiskSuggestion = models.ServerRiskSuggestion;
const AssetViewVULRisk = models.AssetViewVULRisk;
const DescribeAccessKeyAlarmResponse = models.DescribeAccessKeyAlarmResponse;
const AssetBaseInfoResponse = models.AssetBaseInfoResponse;
const DescribeGatewayAssetsResponse = models.DescribeGatewayAssetsResponse;
const AssetViewPortRisk = models.AssetViewPortRisk;
const SubUserInfo = models.SubUserInfo;
const DescribeRiskCenterAssetViewCFGRiskListRequest = models.DescribeRiskCenterAssetViewCFGRiskListRequest;
const DescribeRiskRuleDetailResponse = models.DescribeRiskRuleDetailResponse;
const DescribeAccessKeyUserDetailRequest = models.DescribeAccessKeyUserDetailRequest;
const DescribeVpcAssetsResponse = models.DescribeVpcAssetsResponse;
const CallRecord = models.CallRecord;
const DescribeHighBaseLineRiskListResponse = models.DescribeHighBaseLineRiskListResponse;
const DeleteDomainAndIpResponse = models.DeleteDomainAndIpResponse;
const ServerRisk = models.ServerRisk;
const DescribeKeySandboxCredentialListRequest = models.DescribeKeySandboxCredentialListRequest;
const DescribeExposeAssetCategoryResponse = models.DescribeExposeAssetCategoryResponse;
const TaskCenterCFGRiskInputParam = models.TaskCenterCFGRiskInputParam;
const AddNewBindRoleUserResponse = models.AddNewBindRoleUserResponse;
const StopRiskCenterTaskResponse = models.StopRiskCenterTaskResponse;
const DomainAssetVO = models.DomainAssetVO;
const AKInfo = models.AKInfo;
const DescribeRiskRulesResponse = models.DescribeRiskRulesResponse;
const SkillScanRuleHit = models.SkillScanRuleHit;
const ExposeAssetTypeItem = models.ExposeAssetTypeItem;
const DescribeAlertListResponse = models.DescribeAlertListResponse;
const ModifyOrganizationAccountStatusResponse = models.ModifyOrganizationAccountStatusResponse;
const DescribeRiskDetailListResponse = models.DescribeRiskDetailListResponse;
const ScanTaskInfoList = models.ScanTaskInfoList;
const DescribeExposePathResponse = models.DescribeExposePathResponse;
const DescribeDbAssetsRequest = models.DescribeDbAssetsRequest;
const TaskLogInfo = models.TaskLogInfo;
const DescribeAccessKeyAlarmRequest = models.DescribeAccessKeyAlarmRequest;
const DescribeRiskCenterAssetViewVULRiskListRequest = models.DescribeRiskCenterAssetViewVULRiskListRequest;
const DeleteIaCFileRequest = models.DeleteIaCFileRequest;
const DescribeExposuresRequest = models.DescribeExposuresRequest;
const SourceIPAsset = models.SourceIPAsset;
const DescribeAlertListRequest = models.DescribeAlertListRequest;
const CreateDomainAndIpRequest = models.CreateDomainAndIpRequest;
const DescribeRiskCenterCFGViewCFGRiskListResponse = models.DescribeRiskCenterCFGViewCFGRiskListResponse;
const DescribeAccessKeyUserDetailResponse = models.DescribeAccessKeyUserDetailResponse;
const DescribeSearchBugInfoResponse = models.DescribeSearchBugInfoResponse;
const OrganizationUserInfo = models.OrganizationUserInfo;
const DescribeAccessKeyRiskDetailRequest = models.DescribeAccessKeyRiskDetailRequest;
const CredentialEffectScope = models.CredentialEffectScope;
const ModifyOrganizationAccountStatusRequest = models.ModifyOrganizationAccountStatusRequest;
const DescribeClusterAssetsResponse = models.DescribeClusterAssetsResponse;
const DescribeVULListResponse = models.DescribeVULListResponse;
const DescribeAKAnalysisDetailRequest = models.DescribeAKAnalysisDetailRequest;
const DescribeAbnormalCallRecordResponse = models.DescribeAbnormalCallRecordResponse;
const DescribeSubUserInfoResponse = models.DescribeSubUserInfoResponse;
const DescribeRiskCenterAssetViewPortRiskListRequest = models.DescribeRiskCenterAssetViewPortRiskListRequest;
const DescribeVulRiskListResponse = models.DescribeVulRiskListResponse;
const BugInfoDetail = models.BugInfoDetail;
const DescribeScanStatisticResponse = models.DescribeScanStatisticResponse;
const DescribeUebaRuleResponse = models.DescribeUebaRuleResponse;
const DescribeDomainAssetsResponse = models.DescribeDomainAssetsResponse;
const DescribeExposuresResponse = models.DescribeExposuresResponse;
const DescribeNICAssetsResponse = models.DescribeNICAssetsResponse;
const DescribeRiskCenterAssetViewVULRiskListResponse = models.DescribeRiskCenterAssetViewVULRiskListResponse;
const DescribeCVMAssetsRequest = models.DescribeCVMAssetsRequest;
const DescribeRiskCenterServerRiskListRequest = models.DescribeRiskCenterServerRiskListRequest;
const DescribeUserCallRecordResponse = models.DescribeUserCallRecordResponse;
const DescribeTaskLogListRequest = models.DescribeTaskLogListRequest;
const IaCFileRisk = models.IaCFileRisk;
const DescribeAccessKeyAlarmDetailResponse = models.DescribeAccessKeyAlarmDetailResponse;
const Filters = models.Filters;
const Element = models.Element;
const DescribeOtherCloudAssetsRequest = models.DescribeOtherCloudAssetsRequest;
const ModifyRiskCenterScanTaskRequest = models.ModifyRiskCenterScanTaskRequest;
const DescribeIaCFileListResponse = models.DescribeIaCFileListResponse;
const ClbListenerListInfo = models.ClbListenerListInfo;
const KeyValueInt = models.KeyValueInt;
const SourceIPVpcInfo = models.SourceIPVpcInfo;
const AccessKeyUser = models.AccessKeyUser;
const DescribeRiskCenterServerRiskListResponse = models.DescribeRiskCenterServerRiskListResponse;
const DescribeListenerListRequest = models.DescribeListenerListRequest;
const ModifyIaCTokenPeriodRequest = models.ModifyIaCTokenPeriodRequest;
const ModifyUebaRuleSwitchRequest = models.ModifyUebaRuleSwitchRequest;
const DescribeSubUserInfoRequest = models.DescribeSubUserInfoRequest;
const DescribeVULListRequest = models.DescribeVULListRequest;
const DescribeIaCFileOverviewRequest = models.DescribeIaCFileOverviewRequest;
const DeleteIaCAccessTokenRequest = models.DeleteIaCAccessTokenRequest;
const DeleteRiskScanTaskResponse = models.DeleteRiskScanTaskResponse;
const DescribeScanStatisticRequest = models.DescribeScanStatisticRequest;
const DescribeGatewayAssetsRequest = models.DescribeGatewayAssetsRequest;
const DescribeCFWAssetStatisticsRequest = models.DescribeCFWAssetStatisticsRequest;
const DescribeAccessKeyUserListResponse = models.DescribeAccessKeyUserListResponse;
const SkillState = models.SkillState;
const DescribeExposeAssetCategoryRequest = models.DescribeExposeAssetCategoryRequest;
const AssetViewWeakPassRisk = models.AssetViewWeakPassRisk;
const AssetCluster = models.AssetCluster;
const VULRiskAdvanceCFGList = models.VULRiskAdvanceCFGList;
const CreateDomainAndIpResponse = models.CreateDomainAndIpResponse;
const AccessKeyAsset = models.AccessKeyAsset;
const DescribeTaskLogListResponse = models.DescribeTaskLogListResponse;
const DescribeDbAssetsResponse = models.DescribeDbAssetsResponse;
const RiskCallRecord = models.RiskCallRecord;
const DescribeRiskCenterAssetViewPortRiskListResponse = models.DescribeRiskCenterAssetViewPortRiskListResponse;
const DescribeScanReportListResponse = models.DescribeScanReportListResponse;
const DescribeVULRiskAdvanceCFGListRequest = models.DescribeVULRiskAdvanceCFGListRequest;
const DescribeHighBaseLineRiskListRequest = models.DescribeHighBaseLineRiskListRequest;
const DescribeSearchBugInfoRequest = models.DescribeSearchBugInfoRequest;


/**
 * csip client
 * @class
 */
class CsipClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("csip.intl.tencentcloudapi.com", "2022-11-21", credential, region, profile);
    }
    
    /**
     * Delete IaC detection file
     * @param {DeleteIaCFileRequest} req
     * @param {function(string, DeleteIaCFileResponse):void} cb
     * @public
     */
    DeleteIaCFile(req, cb) {
        let resp = new DeleteIaCFileResponse();
        this.request("DeleteIaCFile", req, resp, cb);
    }

    /**
     * This API is used to delete assets.
     * @param {DeleteDomainAndIpRequest} req
     * @param {function(string, DeleteDomainAndIpResponse):void} cb
     * @public
     */
    DeleteDomainAndIp(req, cb) {
        let resp = new DeleteDomainAndIpResponse();
        this.request("DeleteDomainAndIp", req, resp, cb);
    }

    /**
     * Query risk rule details example
     * @param {DescribeRiskRuleDetailRequest} req
     * @param {function(string, DescribeRiskRuleDetailResponse):void} cb
     * @public
     */
    DescribeRiskRuleDetail(req, cb) {
        let resp = new DescribeRiskRuleDetailResponse();
        this.request("DescribeRiskRuleDetail", req, resp, cb);
    }

    /**
     * This API is used to query details of a database asset. 
     * @param {DescribeDbAssetInfoRequest} req
     * @param {function(string, DescribeDbAssetInfoResponse):void} cb
     * @public
     */
    DescribeDbAssetInfo(req, cb) {
        let resp = new DescribeDbAssetInfoResponse();
        this.request("DescribeDbAssetInfo", req, resp, cb);
    }

    /**
     * Obtain Network Interface Card List
     * @param {DescribeNICAssetsRequest} req
     * @param {function(string, DescribeNICAssetsResponse):void} cb
     * @public
     */
    DescribeNICAssets(req, cb) {
        let resp = new DescribeNICAssetsResponse();
        this.request("DescribeNICAssets", req, resp, cb);
    }

    /**
     * This API is used to list domain assets. 
     * @param {DescribeDomainAssetsRequest} req
     * @param {function(string, DescribeDomainAssetsResponse):void} cb
     * @public
     */
    DescribeDomainAssets(req, cb) {
        let resp = new DescribeDomainAssetsResponse();
        this.request("DescribeDomainAssets", req, resp, cb);
    }

    /**
     * Retrieve the AI agent asset list
     * @param {DescribeAIAgentAssetListRequest} req
     * @param {function(string, DescribeAIAgentAssetListResponse):void} cb
     * @public
     */
    DescribeAIAgentAssetList(req, cb) {
        let resp = new DescribeAIAgentAssetListResponse();
        this.request("DescribeAIAgentAssetList", req, resp, cb);
    }

    /**
     * Query the account list of a user.
     * @param {DescribeAccessKeyUserListRequest} req
     * @param {function(string, DescribeAccessKeyUserListResponse):void} cb
     * @public
     */
    DescribeAccessKeyUserList(req, cb) {
        let resp = new DescribeAccessKeyUserListResponse();
        this.request("DescribeAccessKeyUserList", req, resp, cb);
    }

    /**
     * Cloud Resource Configuration Risk Rule List Example
     * @param {DescribeConfigCheckRulesRequest} req
     * @param {function(string, DescribeConfigCheckRulesResponse):void} cb
     * @public
     */
    DescribeConfigCheckRules(req, cb) {
        let resp = new DescribeConfigCheckRulesResponse();
        this.request("DescribeConfigCheckRules", req, resp, cb);
    }

    /**
     * This API is used to get the list of VPCs.
     * @param {DescribeVpcAssetsRequest} req
     * @param {function(string, DescribeVpcAssetsResponse):void} cb
     * @public
     */
    DescribeVpcAssets(req, cb) {
        let resp = new DescribeVpcAssetsResponse();
        this.request("DescribeVpcAssets", req, resp, cb);
    }

    /**
     * Obtain Vulnerability Risk List from Asset's Perspective
     * @param {DescribeAssetViewVulRiskListRequest} req
     * @param {function(string, DescribeAssetViewVulRiskListResponse):void} cb
     * @public
     */
    DescribeAssetViewVulRiskList(req, cb) {
        let resp = new DescribeAssetViewVulRiskListResponse();
        this.request("DescribeAssetViewVulRiskList", req, resp, cb);
    }

    /**
     * Retrieve vulnerability details.
     * @param {DescribeVULRiskDetailRequest} req
     * @param {function(string, DescribeVULRiskDetailResponse):void} cb
     * @public
     */
    DescribeVULRiskDetail(req, cb) {
        let resp = new DescribeVULRiskDetailResponse();
        this.request("DescribeVULRiskDetail", req, resp, cb);
    }

    /**
     * Obtain Content Risk List
     * @param {DescribeRiskCenterWebsiteRiskListRequest} req
     * @param {function(string, DescribeRiskCenterWebsiteRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterWebsiteRiskList(req, cb) {
        let resp = new DescribeRiskCenterWebsiteRiskListResponse();
        this.request("DescribeRiskCenterWebsiteRiskList", req, resp, cb);
    }

    /**
     * This API is used to stop a scan task. 
     * @param {StopRiskCenterTaskRequest} req
     * @param {function(string, StopRiskCenterTaskResponse):void} cb
     * @public
     */
    StopRiskCenterTask(req, cb) {
        let resp = new StopRiskCenterTaskResponse();
        this.request("StopRiskCenterTask", req, resp, cb);
    }

    /**
     * Trigger an AK asset sync task.
     * @param {CreateAccessKeySyncTaskRequest} req
     * @param {function(string, CreateAccessKeySyncTaskResponse):void} cb
     * @public
     */
    CreateAccessKeySyncTask(req, cb) {
        let resp = new CreateAccessKeySyncTaskResponse();
        this.request("CreateAccessKeySyncTask", req, resp, cb);
    }

    /**
     * Query TOP attack information
     * @param {DescribeTopAttackInfoRequest} req
     * @param {function(string, DescribeTopAttackInfoResponse):void} cb
     * @public
     */
    DescribeTopAttackInfo(req, cb) {
        let resp = new DescribeTopAttackInfoResponse();
        this.request("DescribeTopAttackInfo", req, resp, cb);
    }

    /**
     * Retrieve the IaC detection file list
     * @param {DescribeIaCFileListRequest} req
     * @param {function(string, DescribeIaCFileListResponse):void} cb
     * @public
     */
    DescribeIaCFileList(req, cb) {
        let resp = new DescribeIaCFileListResponse();
        this.request("DescribeIaCFileList", req, resp, cb);
    }

    /**
     * Create an IaC detection file rescan task
     * @param {CreateIaCFileReScanTaskRequest} req
     * @param {function(string, CreateIaCFileReScanTaskResponse):void} cb
     * @public
     */
    CreateIaCFileReScanTask(req, cb) {
        let resp = new CreateIaCFileReScanTaskResponse();
        this.request("CreateIaCFileReScanTask", req, resp, cb);
    }

    /**
     * Create an IaC detection file export task
     * @param {CreateIaCFileExportJobRequest} req
     * @param {function(string, CreateIaCFileExportJobResponse):void} cb
     * @public
     */
    CreateIaCFileExportJob(req, cb) {
        let resp = new CreateIaCFileExportJobResponse();
        this.request("CreateIaCFileExportJob", req, resp, cb);
    }

    /**
     * This API is used to get the list of scan tasks.
     * @param {DescribeScanTaskListRequest} req
     * @param {function(string, DescribeScanTaskListResponse):void} cb
     * @public
     */
    DescribeScanTaskList(req, cb) {
        let resp = new DescribeScanTaskListResponse();
        this.request("DescribeScanTaskList", req, resp, cb);
    }

    /**
     * Alarm Record Details for Access Key.
     * @param {DescribeAccessKeyAlarmDetailRequest} req
     * @param {function(string, DescribeAccessKeyAlarmDetailResponse):void} cb
     * @public
     */
    DescribeAccessKeyAlarmDetail(req, cb) {
        let resp = new DescribeAccessKeyAlarmDetailResponse();
        this.request("DescribeAccessKeyAlarmDetail", req, resp, cb);
    }

    /**
     * Query Group Account User List
     * @param {DescribeOrganizationUserInfoRequest} req
     * @param {function(string, DescribeOrganizationUserInfoResponse):void} cb
     * @public
     */
    DescribeOrganizationUserInfo(req, cb) {
        let resp = new DescribeOrganizationUserInfoResponse();
        this.request("DescribeOrganizationUserInfo", req, resp, cb);
    }

    /**
     * Detect AK async task.
     * @param {CreateAccessKeyCheckTaskRequest} req
     * @param {function(string, CreateAccessKeyCheckTaskResponse):void} cb
     * @public
     */
    CreateAccessKeyCheckTask(req, cb) {
        let resp = new CreateAccessKeyCheckTaskResponse();
        this.request("CreateAccessKeyCheckTask", req, resp, cb);
    }

    /**
     * This API is used to get the list of subnets.
     * @param {DescribeSubnetAssetsRequest} req
     * @param {function(string, DescribeSubnetAssetsResponse):void} cb
     * @public
     */
    DescribeSubnetAssets(req, cb) {
        let resp = new DescribeSubnetAssetsResponse();
        this.request("DescribeSubnetAssets", req, resp, cb);
    }

    /**
     * Obtain user access key asset list.
     * @param {DescribeAccessKeyAssetRequest} req
     * @param {function(string, DescribeAccessKeyAssetResponse):void} cb
     * @public
     */
    DescribeAccessKeyAsset(req, cb) {
        let resp = new DescribeAccessKeyAssetResponse();
        this.request("DescribeAccessKeyAsset", req, resp, cb);
    }

    /**
     * This API is used to query the billing information of Skill security detection, including order status, total quota, consumed quota, expiry time, and payment mode. It returns zero values (only TimeNow and BetaEndTime included) when no order exists. Trial orders can be claimed via ModifyTrialStatus(Module=9), and official orders are generated by the billing system.
     * @param {DescribeSkillScanPayInfoRequest} req
     * @param {function(string, DescribeSkillScanPayInfoResponse):void} cb
     * @public
     */
    DescribeSkillScanPayInfo(req, cb) {
        let resp = new DescribeSkillScanPayInfoResponse();
        this.request("DescribeSkillScanPayInfo", req, resp, cb);
    }

    /**
     * Retrieve the call record list.
     * @param {DescribeAbnormalCallRecordRequest} req
     * @param {function(string, DescribeAbnormalCallRecordResponse):void} cb
     * @public
     */
    DescribeAbnormalCallRecord(req, cb) {
        let resp = new DescribeAbnormalCallRecordResponse();
        this.request("DescribeAbnormalCallRecord", req, resp, cb);
    }

    /**
     * This API is used to query the list of vulnerabilities by vulnerabilities.
     * @param {DescribeRiskCenterVULViewVULRiskListRequest} req
     * @param {function(string, DescribeRiskCenterVULViewVULRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterVULViewVULRiskList(req, cb) {
        let resp = new DescribeRiskCenterVULViewVULRiskListResponse();
        this.request("DescribeRiskCenterVULViewVULRiskList", req, resp, cb);
    }

    /**
     * This API is used to add the CAM role of Cloud Security Center (CSC) to the current account. The name of the CAM role is "csip".
     * @param {AddNewBindRoleUserRequest} req
     * @param {function(string, AddNewBindRoleUserResponse):void} cb
     * @public
     */
    AddNewBindRoleUser(req, cb) {
        let resp = new AddNewBindRoleUserResponse();
        this.request("AddNewBindRoleUser", req, resp, cb);
    }

    /**
     * Query the voucher list
     * @param {DescribeKeySandboxCredentialListRequest} req
     * @param {function(string, DescribeKeySandboxCredentialListResponse):void} cb
     * @public
     */
    DescribeKeySandboxCredentialList(req, cb) {
        let resp = new DescribeKeySandboxCredentialListResponse();
        this.request("DescribeKeySandboxCredentialList", req, resp, cb);
    }

    /**
     * Retrieve the cvm list.
     * @param {DescribeCVMAssetsRequest} req
     * @param {function(string, DescribeCVMAssetsResponse):void} cb
     * @public
     */
    DescribeCVMAssets(req, cb) {
        let resp = new DescribeCVMAssetsResponse();
        this.request("DescribeCVMAssets", req, resp, cb);
    }

    /**
     * Query Group Account Details
     * @param {DescribeOrganizationInfoRequest} req
     * @param {function(string, DescribeOrganizationInfoResponse):void} cb
     * @public
     */
    DescribeOrganizationInfo(req, cb) {
        let resp = new DescribeOrganizationInfoResponse();
        this.request("DescribeOrganizationInfo", req, resp, cb);
    }

    /**
     * Obtain account call record list.
     * @param {DescribeUserCallRecordRequest} req
     * @param {function(string, DescribeUserCallRecordResponse):void} cb
     * @public
     */
    DescribeUserCallRecord(req, cb) {
        let resp = new DescribeUserCallRecordResponse();
        this.request("DescribeUserCallRecord", req, resp, cb);
    }

    /**
     * Create an IaC detection integration Token
     * @param {CreateIaCAccessTokenRequest} req
     * @param {function(string, CreateIaCAccessTokenResponse):void} cb
     * @public
     */
    CreateIaCAccessToken(req, cb) {
        let resp = new CreateIaCAccessTokenResponse();
        this.request("CreateIaCAccessToken", req, resp, cb);
    }

    /**
     * This API is used to list all alarms in the alert center.
     * @param {DescribeAlertListRequest} req
     * @param {function(string, DescribeAlertListResponse):void} cb
     * @public
     */
    DescribeAlertList(req, cb) {
        let resp = new DescribeAlertListResponse();
        this.request("DescribeAlertList", req, resp, cb);
    }

    /**
     * Upload the Skill ZIP file to trigger asynchronous security detection. After a successful upload, use the returned ContentHash and EngineVersion to poll the DescribeSkillScanResult API to obtain the result. The upload API is idempotent, and uploading the same file with an identical hash will not create a repetition task. The detection result is reserved for 90 days. If overdue, reupload the file for detection.
     * @param {CreateSkillScanRequest} req
     * @param {function(string, CreateSkillScanResponse):void} cb
     * @public
     */
    CreateSkillScan(req, cb) {
        let resp = new CreateSkillScanResponse();
        this.request("CreateSkillScan", req, resp, cb);
    }

    /**
     * Risk detail list example
     * @param {DescribeRiskDetailListRequest} req
     * @param {function(string, DescribeRiskDetailListResponse):void} cb
     * @public
     */
    DescribeRiskDetailList(req, cb) {
        let resp = new DescribeRiskDetailListResponse();
        this.request("DescribeRiskDetailList", req, resp, cb);
    }

    /**
     * This API is used to query the list of port risks by assets.
     * @param {DescribeRiskCenterAssetViewPortRiskListRequest} req
     * @param {function(string, DescribeRiskCenterAssetViewPortRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterAssetViewPortRiskList(req, cb) {
        let resp = new DescribeRiskCenterAssetViewPortRiskListResponse();
        this.request("DescribeRiskCenterAssetViewPortRiskList", req, resp, cb);
    }

    /**
     * Cloud Boundary Analysis Asset List.
     * @param {DescribeExposuresRequest} req
     * @param {function(string, DescribeExposuresResponse):void} cb
     * @public
     */
    DescribeExposures(req, cb) {
        let resp = new DescribeExposuresResponse();
        this.request("DescribeExposures", req, resp, cb);
    }

    /**
     * Obtain Configuration Risk List from Configuration's Perspective
     * @param {DescribeRiskCenterCFGViewCFGRiskListRequest} req
     * @param {function(string, DescribeRiskCenterCFGViewCFGRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterCFGViewCFGRiskList(req, cb) {
        let resp = new DescribeRiskCenterCFGViewCFGRiskListResponse();
        this.request("DescribeRiskCenterCFGViewCFGRiskList", req, resp, cb);
    }

    /**
     * Edit access key/Source IP remark.
     * @param {UpdateAccessKeyRemarkRequest} req
     * @param {function(string, UpdateAccessKeyRemarkResponse):void} cb
     * @public
     */
    UpdateAccessKeyRemark(req, cb) {
        let resp = new UpdateAccessKeyRemarkResponse();
        this.request("UpdateAccessKeyRemark", req, resp, cb);
    }

    /**
     * Access key risk record list.
     * @param {DescribeAccessKeyRiskRequest} req
     * @param {function(string, DescribeAccessKeyRiskResponse):void} cb
     * @public
     */
    DescribeAccessKeyRisk(req, cb) {
        let resp = new DescribeAccessKeyRiskResponse();
        this.request("DescribeAccessKeyRisk", req, resp, cb);
    }

    /**
     * Repository Image List
     * @param {DescribeRepositoryImageAssetsRequest} req
     * @param {function(string, DescribeRepositoryImageAssetsResponse):void} cb
     * @public
     */
    DescribeRepositoryImageAssets(req, cb) {
        let resp = new DescribeRepositoryImageAssetsResponse();
        this.request("DescribeRepositoryImageAssets", req, resp, cb);
    }

    /**
     * This API is used to query details of CVM assets.
     * @param {DescribeCVMAssetInfoRequest} req
     * @param {function(string, DescribeCVMAssetInfoResponse):void} cb
     * @public
     */
    DescribeCVMAssetInfo(req, cb) {
        let resp = new DescribeCVMAssetInfoResponse();
        this.request("DescribeCVMAssetInfo", req, resp, cb);
    }

    /**
     * This API is used to get the list of scan task reports.
     * @param {DescribeTaskLogListRequest} req
     * @param {function(string, DescribeTaskLogListResponse):void} cb
     * @public
     */
    DescribeTaskLogList(req, cb) {
        let resp = new DescribeTaskLogListResponse();
        this.request("DescribeTaskLogList", req, resp, cb);
    }

    /**
     * Gets the list of other cloud assets
     * @param {DescribeOtherCloudAssetsRequest} req
     * @param {function(string, DescribeOtherCloudAssetsResponse):void} cb
     * @public
     */
    DescribeOtherCloudAssets(req, cb) {
        let resp = new DescribeOtherCloudAssetsResponse();
        this.request("DescribeOtherCloudAssets", req, resp, cb);
    }

    /**
     * Query the list of vulnerabilities of host nodes under the exposed path in cloud boundary analysis.
     * @param {DescribeVulRiskListRequest} req
     * @param {function(string, DescribeVulRiskListResponse):void} cb
     * @public
     */
    DescribeVulRiskList(req, cb) {
        let resp = new DescribeVulRiskListResponse();
        this.request("DescribeVulRiskList", req, resp, cb);
    }

    /**
     * This API is used to query the list of TCP listeners.
     * @param {DescribeListenerListRequest} req
     * @param {function(string, DescribeListenerListResponse):void} cb
     * @public
     */
    DescribeListenerList(req, cb) {
        let resp = new DescribeListenerListResponse();
        this.request("DescribeListenerList", req, resp, cb);
    }

    /**
     * Delete an IaC detection integration Token
     * @param {DeleteIaCAccessTokenRequest} req
     * @param {function(string, DeleteIaCAccessTokenResponse):void} cb
     * @public
     */
    DeleteIaCAccessToken(req, cb) {
        let resp = new DeleteIaCAccessTokenResponse();
        this.request("DeleteIaCAccessToken", req, resp, cb);
    }

    /**
     * This API is used to list cluster pods.
     * @param {DescribeClusterPodAssetsRequest} req
     * @param {function(string, DescribeClusterPodAssetsResponse):void} cb
     * @public
     */
    DescribeClusterPodAssets(req, cb) {
        let resp = new DescribeClusterPodAssetsResponse();
        this.request("DescribeClusterPodAssets", req, resp, cb);
    }

    /**
     * This API is used to query the list of services in risk.
     * @param {DescribeRiskCenterServerRiskListRequest} req
     * @param {function(string, DescribeRiskCenterServerRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterServerRiskList(req, cb) {
        let resp = new DescribeRiskCenterServerRiskListResponse();
        this.request("DescribeRiskCenterServerRiskList", req, resp, cb);
    }

    /**
     * Retrieve the call record list.
     * @param {DescribeCallRecordRequest} req
     * @param {function(string, DescribeCallRecordResponse):void} cb
     * @public
     */
    DescribeCallRecord(req, cb) {
        let resp = new DescribeCallRecordResponse();
        this.request("DescribeCallRecord", req, resp, cb);
    }

    /**
     * Cloud Defense Asset Center Statistics
     * @param {DescribeCFWAssetStatisticsRequest} req
     * @param {function(string, DescribeCFWAssetStatisticsResponse):void} cb
     * @public
     */
    DescribeCFWAssetStatistics(req, cb) {
        let resp = new DescribeCFWAssetStatisticsResponse();
        this.request("DescribeCFWAssetStatistics", req, resp, cb);
    }

    /**
     * Query the node of the cloud boundary analysis path.
     * @param {DescribeExposePathRequest} req
     * @param {function(string, DescribeExposePathResponse):void} cb
     * @public
     */
    DescribeExposePath(req, cb) {
        let resp = new DescribeExposePathResponse();
        this.request("DescribeExposePath", req, resp, cb);
    }

    /**
     * Obtain Gateway List
     * @param {DescribeGatewayAssetsRequest} req
     * @param {function(string, DescribeGatewayAssetsResponse):void} cb
     * @public
     */
    DescribeGatewayAssets(req, cb) {
        let resp = new DescribeGatewayAssetsResponse();
        this.request("DescribeGatewayAssets", req, resp, cb);
    }

    /**
     * This API is used to create a risk scan task. 
     * @param {CreateRiskCenterScanTaskRequest} req
     * @param {function(string, CreateRiskCenterScanTaskResponse):void} cb
     * @public
     */
    CreateRiskCenterScanTask(req, cb) {
        let resp = new CreateRiskCenterScanTaskResponse();
        this.request("CreateRiskCenterScanTask", req, resp, cb);
    }

    /**
     * List of alarm records for access keys.
     * @param {DescribeAccessKeyAlarmRequest} req
     * @param {function(string, DescribeAccessKeyAlarmResponse):void} cb
     * @public
     */
    DescribeAccessKeyAlarm(req, cb) {
        let resp = new DescribeAccessKeyAlarmResponse();
        this.request("DescribeAccessKeyAlarm", req, resp, cb);
    }

    /**
     * Query the security detection result of Skill. After successfully calling CreateSkillScan, use the returned ContentHash + EngineVersion to poll this interface and obtain the result. For the first time, poll 5 minutes after successful upload. If detection is not completed, poll every 1 minute afterward. The response distinguishes four types of status via the Status field: detection complete (SUCCESS), in-progress detection (SCANNING), no record (NOT_FOUND), and detection failed (FAILED). Note: The detection result is retained for 90 days. It will return NOT_FOUND when overdue.
     * @param {DescribeSkillScanResultRequest} req
     * @param {function(string, DescribeSkillScanResultResponse):void} cb
     * @public
     */
    DescribeSkillScanResult(req, cb) {
        let resp = new DescribeSkillScanResultResponse();
        this.request("DescribeSkillScanResult", req, resp, cb);
    }

    /**
     * Query the high-risk baseline risk list of host nodes under the exposed path in cloud boundary analysis.
     * @param {DescribeHighBaseLineRiskListRequest} req
     * @param {function(string, DescribeHighBaseLineRiskListResponse):void} cb
     * @public
     */
    DescribeHighBaseLineRiskList(req, cb) {
        let resp = new DescribeHighBaseLineRiskListResponse();
        this.request("DescribeHighBaseLineRiskList", req, resp, cb);
    }

    /**
     * This API is used to modify the status of a risk. 
     * @param {ModifyRiskCenterRiskStatusRequest} req
     * @param {function(string, ModifyRiskCenterRiskStatusResponse):void} cb
     * @public
     */
    ModifyRiskCenterRiskStatus(req, cb) {
        let resp = new ModifyRiskCenterRiskStatusResponse();
        this.request("ModifyRiskCenterRiskStatus", req, resp, cb);
    }

    /**
     * This API is used to query the list of public IP assets.
     * @param {DescribePublicIpAssetsRequest} req
     * @param {function(string, DescribePublicIpAssetsResponse):void} cb
     * @public
     */
    DescribePublicIpAssets(req, cb) {
        let resp = new DescribePublicIpAssetsResponse();
        this.request("DescribePublicIpAssets", req, resp, cb);
    }

    /**
     * Cloud boundary analysis asset category.
     * @param {DescribeExposeAssetCategoryRequest} req
     * @param {function(string, DescribeExposeAssetCategoryResponse):void} cb
     * @public
     */
    DescribeExposeAssetCategory(req, cb) {
        let resp = new DescribeExposeAssetCategoryResponse();
        this.request("DescribeExposeAssetCategory", req, resp, cb);
    }

    /**
     * Retrieve the IaC detection integration Token list
     * @param {DescribeIaCTokenListRequest} req
     * @param {function(string, DescribeIaCTokenListResponse):void} cb
     * @public
     */
    DescribeIaCTokenList(req, cb) {
        let resp = new DescribeIaCTokenListResponse();
        this.request("DescribeIaCTokenList", req, resp, cb);
    }

    /**
     * Query the process list of host nodes under the exposed path in cloud boundary analysis.
     * @param {DescribeAssetProcessListRequest} req
     * @param {function(string, DescribeAssetProcessListResponse):void} cb
     * @public
     */
    DescribeAssetProcessList(req, cb) {
        let resp = new DescribeAssetProcessListResponse();
        this.request("DescribeAssetProcessList", req, resp, cb);
    }

    /**
     * Advanced configuration risk rule list illustrative example
     * @param {DescribeRiskRulesRequest} req
     * @param {function(string, DescribeRiskRulesResponse):void} cb
     * @public
     */
    DescribeRiskRules(req, cb) {
        let resp = new DescribeRiskRulesResponse();
        this.request("DescribeRiskRules", req, resp, cb);
    }

    /**
     * This API is used to query the advanced configuration of vulnerability scan.
     * @param {DescribeVULRiskAdvanceCFGListRequest} req
     * @param {function(string, DescribeVULRiskAdvanceCFGListResponse):void} cb
     * @public
     */
    DescribeVULRiskAdvanceCFGList(req, cb) {
        let resp = new DescribeVULRiskAdvanceCFGListResponse();
        this.request("DescribeVULRiskAdvanceCFGList", req, resp, cb);
    }

    /**
     * Retrieve the IaC detection file report
     * @param {DescribeIaCFileReportRequest} req
     * @param {function(string, DescribeIaCFileReportResponse):void} cb
     * @public
     */
    DescribeIaCFileReport(req, cb) {
        let resp = new DescribeIaCFileReportResponse();
        this.request("DescribeIaCFileReport", req, resp, cb);
    }

    /**
     * This example shows you how to obtain the cluster list.
     * @param {DescribeClusterAssetsRequest} req
     * @param {function(string, DescribeClusterAssetsResponse):void} cb
     * @public
     */
    DescribeClusterAssets(req, cb) {
        let resp = new DescribeClusterAssetsResponse();
        this.request("DescribeClusterAssets", req, resp, cb);
    }

    /**
     * Query the user behavior analysis policy list
     * @param {DescribeUebaRuleRequest} req
     * @param {function(string, DescribeUebaRuleResponse):void} cb
     * @public
     */
    DescribeUebaRule(req, cb) {
        let resp = new DescribeUebaRuleResponse();
        this.request("DescribeUebaRule", req, resp, cb);
    }

    /**
     * Query credential details and return credential metadata and masked credential data. The access kind returns an Access array (original Key, masked Value), and the sts kind returns an STS object (original System, masked SecretID and SecretKey).
     * @param {DescribeKeySandboxCredentialRequest} req
     * @param {function(string, DescribeKeySandboxCredentialResponse):void} cb
     * @public
     */
    DescribeKeySandboxCredential(req, cb) {
        let resp = new DescribeKeySandboxCredentialResponse();
        this.request("DescribeKeySandboxCredential", req, resp, cb);
    }

    /**
     * Query the statistical information of cloud boundary analysis scanning results.
     * @param {DescribeScanStatisticRequest} req
     * @param {function(string, DescribeScanStatisticResponse):void} cb
     * @public
     */
    DescribeScanStatistic(req, cb) {
        let resp = new DescribeScanStatisticResponse();
        this.request("DescribeScanStatistic", req, resp, cb);
    }

    /**
     * Security Center Risk Center - List of Vulnerabilities.
     * @param {DescribeVULListRequest} req
     * @param {function(string, DescribeVULListResponse):void} cb
     * @public
     */
    DescribeVULList(req, cb) {
        let resp = new DescribeVULListResponse();
        this.request("DescribeVULList", req, resp, cb);
    }

    /**
     * Access key alarm record AI analysis result details
     * @param {DescribeAKAnalysisDetailRequest} req
     * @param {function(string, DescribeAKAnalysisDetailResponse):void} cb
     * @public
     */
    DescribeAKAnalysisDetail(req, cb) {
        let resp = new DescribeAKAnalysisDetailResponse();
        this.request("DescribeAKAnalysisDetail", req, resp, cb);
    }

    /**
     * Query the user's account details.
     * @param {DescribeAccessKeyUserDetailRequest} req
     * @param {function(string, DescribeAccessKeyUserDetailResponse):void} cb
     * @public
     */
    DescribeAccessKeyUserDetail(req, cb) {
        let resp = new DescribeAccessKeyUserDetailResponse();
        this.request("DescribeAccessKeyUserDetail", req, resp, cb);
    }

    /**
     * This API is used to delete a risk scan task.
     * @param {DeleteRiskScanTaskRequest} req
     * @param {function(string, DeleteRiskScanTaskResponse):void} cb
     * @public
     */
    DeleteRiskScanTask(req, cb) {
        let resp = new DeleteRiskScanTaskResponse();
        this.request("DeleteRiskScanTask", req, resp, cb);
    }

    /**
     * This API is used to query the list of weak passwords by assets.
     * @param {DescribeRiskCenterAssetViewWeakPasswordRiskListRequest} req
     * @param {function(string, DescribeRiskCenterAssetViewWeakPasswordRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterAssetViewWeakPasswordRiskList(req, cb) {
        let resp = new DescribeRiskCenterAssetViewWeakPasswordRiskListResponse();
        this.request("DescribeRiskCenterAssetViewWeakPasswordRiskList", req, resp, cb);
    }

    /**
     * This API is used to query the list of vulnerabilities by assets.
     * @param {DescribeRiskCenterAssetViewVULRiskListRequest} req
     * @param {function(string, DescribeRiskCenterAssetViewVULRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterAssetViewVULRiskList(req, cb) {
        let resp = new DescribeRiskCenterAssetViewVULRiskListResponse();
        this.request("DescribeRiskCenterAssetViewVULRiskList", req, resp, cb);
    }

    /**
     * This API is used to query the list of configuration risks by assets.
     * @param {DescribeRiskCenterAssetViewCFGRiskListRequest} req
     * @param {function(string, DescribeRiskCenterAssetViewCFGRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterAssetViewCFGRiskList(req, cb) {
        let resp = new DescribeRiskCenterAssetViewCFGRiskListResponse();
        this.request("DescribeRiskCenterAssetViewCFGRiskList", req, resp, cb);
    }

    /**
     * Modify Risk Center Scan Task
     * @param {ModifyRiskCenterScanTaskRequest} req
     * @param {function(string, ModifyRiskCenterScanTaskResponse):void} cb
     * @public
     */
    ModifyRiskCenterScanTask(req, cb) {
        let resp = new ModifyRiskCenterScanTaskResponse();
        this.request("ModifyRiskCenterScanTask", req, resp, cb);
    }

    /**
     * List of cloud resource configuration risks from a check perspective
     * @param {DescribeCheckViewRisksRequest} req
     * @param {function(string, DescribeCheckViewRisksResponse):void} cb
     * @public
     */
    DescribeCheckViewRisks(req, cb) {
        let resp = new DescribeCheckViewRisksResponse();
        this.request("DescribeCheckViewRisks", req, resp, cb);
    }

    /**
     * Cloud resource configuration risk list from asset perspective
     * @param {DescribeAssetRiskListRequest} req
     * @param {function(string, DescribeAssetRiskListResponse):void} cb
     * @public
     */
    DescribeAssetRiskList(req, cb) {
        let resp = new DescribeAssetRiskListResponse();
        this.request("DescribeAssetRiskList", req, resp, cb);
    }

    /**
     * Refresh the custom policy switch
     * @param {ModifyUebaRuleSwitchRequest} req
     * @param {function(string, ModifyUebaRuleSwitchResponse):void} cb
     * @public
     */
    ModifyUebaRuleSwitch(req, cb) {
        let resp = new ModifyUebaRuleSwitchResponse();
        this.request("ModifyUebaRuleSwitch", req, resp, cb);
    }

    /**
     * This API is used to list database assets.
     * @param {DescribeDbAssetsRequest} req
     * @param {function(string, DescribeDbAssetsResponse):void} cb
     * @public
     */
    DescribeDbAssets(req, cb) {
        let resp = new DescribeDbAssetsResponse();
        this.request("DescribeDbAssets", req, resp, cb);
    }

    /**
     * This API is used to query information of a vulnerability.
     * @param {DescribeSearchBugInfoRequest} req
     * @param {function(string, DescribeSearchBugInfoResponse):void} cb
     * @public
     */
    DescribeSearchBugInfo(req, cb) {
        let resp = new DescribeSearchBugInfoResponse();
        this.request("DescribeSearchBugInfo", req, resp, cb);
    }

    /**
     * Query the sub-account list of the group
     * @param {DescribeSubUserInfoRequest} req
     * @param {function(string, DescribeSubUserInfoResponse):void} cb
     * @public
     */
    DescribeSubUserInfo(req, cb) {
        let resp = new DescribeSubUserInfoResponse();
        this.request("DescribeSubUserInfo", req, resp, cb);
    }

    /**
     * Obtain Vulnerability Risk List from Vulnerability's Perspective
     * @param {DescribeVulViewVulRiskListRequest} req
     * @param {function(string, DescribeVulViewVulRiskListResponse):void} cb
     * @public
     */
    DescribeVulViewVulRiskList(req, cb) {
        let resp = new DescribeVulViewVulRiskListResponse();
        this.request("DescribeVulViewVulRiskList", req, resp, cb);
    }

    /**
     * This API is used to create an asset with the specific domain/IP.
     * @param {CreateDomainAndIpRequest} req
     * @param {function(string, CreateDomainAndIpResponse):void} cb
     * @public
     */
    CreateDomainAndIp(req, cb) {
        let resp = new CreateDomainAndIpResponse();
        this.request("CreateDomainAndIp", req, resp, cb);
    }

    /**
     * Batch alarm status process API
     * @param {UpdateAlertStatusListRequest} req
     * @param {function(string, UpdateAlertStatusListResponse):void} cb
     * @public
     */
    UpdateAlertStatusList(req, cb) {
        let resp = new UpdateAlertStatusListResponse();
        this.request("UpdateAlertStatusList", req, resp, cb);
    }

    /**
     * This API is used to obtain user access key asset list (source IP perspective).
     * @param {DescribeSourceIPAssetRequest} req
     * @param {function(string, DescribeSourceIPAssetResponse):void} cb
     * @public
     */
    DescribeSourceIPAsset(req, cb) {
        let resp = new DescribeSourceIPAssetResponse();
        this.request("DescribeSourceIPAsset", req, resp, cb);
    }

    /**
     * This API is used to modify the storage cycle of the IaC detection integration Token.
     * @param {ModifyIaCTokenPeriodRequest} req
     * @param {function(string, ModifyIaCTokenPeriodResponse):void} cb
     * @public
     */
    ModifyIaCTokenPeriod(req, cb) {
        let resp = new ModifyIaCTokenPeriodResponse();
        this.request("ModifyIaCTokenPeriod", req, resp, cb);
    }

    /**
     * This API is used to query the list of port risks by ports.
     * @param {DescribeRiskCenterPortViewPortRiskListRequest} req
     * @param {function(string, DescribeRiskCenterPortViewPortRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterPortViewPortRiskList(req, cb) {
        let resp = new DescribeRiskCenterPortViewPortRiskListResponse();
        this.request("DescribeRiskCenterPortViewPortRiskList", req, resp, cb);
    }

    /**
     * This API is used to get the list of scan reports.
     * @param {DescribeScanReportListRequest} req
     * @param {function(string, DescribeScanReportListResponse):void} cb
     * @public
     */
    DescribeScanReportList(req, cb) {
        let resp = new DescribeScanReportListResponse();
        this.request("DescribeScanReportList", req, resp, cb);
    }

    /**
     * Modify group account status
     * @param {ModifyOrganizationAccountStatusRequest} req
     * @param {function(string, ModifyOrganizationAccountStatusResponse):void} cb
     * @public
     */
    ModifyOrganizationAccountStatus(req, cb) {
        let resp = new ModifyOrganizationAccountStatusResponse();
        this.request("ModifyOrganizationAccountStatus", req, resp, cb);
    }

    /**
     * Retrieve IaC detection file overview
     * @param {DescribeIaCFileOverviewRequest} req
     * @param {function(string, DescribeIaCFileOverviewResponse):void} cb
     * @public
     */
    DescribeIaCFileOverview(req, cb) {
        let resp = new DescribeIaCFileOverviewResponse();
        this.request("DescribeIaCFileOverview", req, resp, cb);
    }

    /**
     * This API is used to get the temp download link of a report. 
     * @param {DescribeTaskLogURLRequest} req
     * @param {function(string, DescribeTaskLogURLResponse):void} cb
     * @public
     */
    DescribeTaskLogURL(req, cb) {
        let resp = new DescribeTaskLogURLResponse();
        this.request("DescribeTaskLogURL", req, resp, cb);
    }

    /**
     * Obtain risk center risk overview example.
     * @param {DescribeCSIPRiskStatisticsRequest} req
     * @param {function(string, DescribeCSIPRiskStatisticsResponse):void} cb
     * @public
     */
    DescribeCSIPRiskStatistics(req, cb) {
        let resp = new DescribeCSIPRiskStatisticsResponse();
        this.request("DescribeCSIPRiskStatistics", req, resp, cb);
    }

    /**
     * Access Key Risk Record Details.
     * @param {DescribeAccessKeyRiskDetailRequest} req
     * @param {function(string, DescribeAccessKeyRiskDetailResponse):void} cb
     * @public
     */
    DescribeAccessKeyRiskDetail(req, cb) {
        let resp = new DescribeAccessKeyRiskDetailResponse();
        this.request("DescribeAccessKeyRiskDetail", req, resp, cb);
    }

    /**
     * Retrieve risk call record list.
     * @param {DescribeRiskCallRecordRequest} req
     * @param {function(string, DescribeRiskCallRecordResponse):void} cb
     * @public
     */
    DescribeRiskCallRecord(req, cb) {
        let resp = new DescribeRiskCallRecordResponse();
        this.request("DescribeRiskCallRecord", req, resp, cb);
    }

    /**
     * Tag the risk or Alarm as processed/ignored.
     * @param {UpdateAccessKeyAlarmStatusRequest} req
     * @param {function(string, UpdateAccessKeyAlarmStatusResponse):void} cb
     * @public
     */
    UpdateAccessKeyAlarmStatus(req, cb) {
        let resp = new UpdateAccessKeyAlarmStatusResponse();
        this.request("UpdateAccessKeyAlarmStatus", req, resp, cb);
    }


}
module.exports = CsipClient;
