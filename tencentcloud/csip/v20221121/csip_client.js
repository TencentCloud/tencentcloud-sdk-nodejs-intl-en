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
const AccountBriefInfo = models.AccountBriefInfo;
const DescribeRiskRulesResponse = models.DescribeRiskRulesResponse;
const DeleteRiskScanTaskRequest = models.DeleteRiskScanTaskRequest;
const DescribeHostVulRiskListResponse = models.DescribeHostVulRiskListResponse;
const CsipRiskCenterStatistics = models.CsipRiskCenterStatistics;
const CreateVulReScanRequest = models.CreateVulReScanRequest;
const SkillCapabilityTag = models.SkillCapabilityTag;
const ReportItemKey = models.ReportItemKey;
const CreateAccessKeySyncTaskRequest = models.CreateAccessKeySyncTaskRequest;
const DescribeSkillScanPayInfoRequest = models.DescribeSkillScanPayInfoRequest;
const KeyValue = models.KeyValue;
const OrganizationUserInfo = models.OrganizationUserInfo;
const AssetTag = models.AssetTag;
const DescribeCheckViewRisksResponse = models.DescribeCheckViewRisksResponse;
const DeleteIaCFileResponse = models.DeleteIaCFileResponse;
const CreateVulFixedExportJobRequest = models.CreateVulFixedExportJobRequest;
const DescribeRiskCenterWebsiteRiskListResponse = models.DescribeRiskCenterWebsiteRiskListResponse;
const Tag = models.Tag;
const DescribeRiskCenterCFGViewCFGRiskListRequest = models.DescribeRiskCenterCFGViewCFGRiskListRequest;
const DescribeCSIPRiskStatisticsResponse = models.DescribeCSIPRiskStatisticsResponse;
const VULViewVULRiskData = models.VULViewVULRiskData;
const DescribeIaCTokenListResponse = models.DescribeIaCTokenListResponse;
const DescribeScanTaskListRequest = models.DescribeScanTaskListRequest;
const CreateAccessKeyCheckTaskResponse = models.CreateAccessKeyCheckTaskResponse;
const DescribeOrganizationInfoRequest = models.DescribeOrganizationInfoRequest;
const DescribeVulFixableMachineListResponse = models.DescribeVulFixableMachineListResponse;
const UserCallRecord = models.UserCallRecord;
const DescribeHostVulRiskListRequest = models.DescribeHostVulRiskListRequest;
const DescribeKeySandboxCredentialRequest = models.DescribeKeySandboxCredentialRequest;
const CheckViewRiskItem = models.CheckViewRiskItem;
const AddNewBindRoleUserRequest = models.AddNewBindRoleUserRequest;
const OrganizationInfo = models.OrganizationInfo;
const TagCount = models.TagCount;
const CreateRiskCenterScanTaskResponse = models.CreateRiskCenterScanTaskResponse;
const StopRiskCenterTaskResponse = models.StopRiskCenterTaskResponse;
const DescribeVpcAssetsRequest = models.DescribeVpcAssetsRequest;
const DescribeExposePathRequest = models.DescribeExposePathRequest;
const DescribeKeySandboxCredentialListResponse = models.DescribeKeySandboxCredentialListResponse;
const AttributeOptionSet = models.AttributeOptionSet;
const VulVendorProduct = models.VulVendorProduct;
const VulFixTaskInfo = models.VulFixTaskInfo;
const SubUserInfo = models.SubUserInfo;
const CloudCountDesc = models.CloudCountDesc;
const DescribeOtherCloudAssetsResponse = models.DescribeOtherCloudAssetsResponse;
const DescribeVulItemListResponse = models.DescribeVulItemListResponse;
const DescribeRiskCenterAssetViewCFGRiskListResponse = models.DescribeRiskCenterAssetViewCFGRiskListResponse;
const UpdateAlertStatusListRequest = models.UpdateAlertStatusListRequest;
const DescribeVulItemListRequest = models.DescribeVulItemListRequest;
const DescribeSkillScanPayInfoResponse = models.DescribeSkillScanPayInfoResponse;
const CreateVulScanManualRequest = models.CreateVulScanManualRequest;
const DescribePublicIpAssetsResponse = models.DescribePublicIpAssetsResponse;
const DescribeVulViewVulRiskListRequest = models.DescribeVulViewVulRiskListRequest;
const VulHostBriefInfo = models.VulHostBriefInfo;
const DescribeRiskRulesRequest = models.DescribeRiskRulesRequest;
const DescribeSourceIPAssetRequest = models.DescribeSourceIPAssetRequest;
const CreateVulFixRetryTaskRequest = models.CreateVulFixRetryTaskRequest;
const DescribeDbAssetInfoRequest = models.DescribeDbAssetInfoRequest;
const DescribeUserCallRecordResponse = models.DescribeUserCallRecordResponse;
const VulRiskItem = models.VulRiskItem;
const RepositoryImageVO = models.RepositoryImageVO;
const DescribeAccessKeyAlarmResponse = models.DescribeAccessKeyAlarmResponse;
const DescribeGatewayAssetsResponse = models.DescribeGatewayAssetsResponse;
const DescribeRiskRuleDetailResponse = models.DescribeRiskRuleDetailResponse;
const DeleteDomainAndIpResponse = models.DeleteDomainAndIpResponse;
const CreateDomainAndIpRequest = models.CreateDomainAndIpRequest;
const RelatedEvent = models.RelatedEvent;
const DescribeVulComponentRelateHostResponse = models.DescribeVulComponentRelateHostResponse;
const DescribeScanStatisticResponse = models.DescribeScanStatisticResponse;
const DescribeAccessKeyAlarmRequest = models.DescribeAccessKeyAlarmRequest;
const DescribeExposuresRequest = models.DescribeExposuresRequest;
const DescribeHighBaseLineRiskListResponse = models.DescribeHighBaseLineRiskListResponse;
const DescribeExposeAssetCategoryResponse = models.DescribeExposeAssetCategoryResponse;
const DescribeHostVulItemVPRInfoResponse = models.DescribeHostVulItemVPRInfoResponse;
const IpAssetListVO = models.IpAssetListVO;
const IaCFileRisk = models.IaCFileRisk;
const DescribeRiskCenterServerRiskListResponse = models.DescribeRiskCenterServerRiskListResponse;
const VulScanTask = models.VulScanTask;
const DescribeVulComponentRelateHostRequest = models.DescribeVulComponentRelateHostRequest;
const DescribeVulRiskRelateHostRequest = models.DescribeVulRiskRelateHostRequest;
const AccessKeyAsset = models.AccessKeyAsset;
const DescribeRiskCallRecordRequest = models.DescribeRiskCallRecordRequest;
const ModifyRiskCenterRiskStatusResponse = models.ModifyRiskCenterRiskStatusResponse;
const DescribeExposuresResponse = models.DescribeExposuresResponse;
const DescribeVulScanPeriodicResponse = models.DescribeVulScanPeriodicResponse;
const VPRRatingInfo = models.VPRRatingInfo;
const DescribeOrganizationUserInfoRequest = models.DescribeOrganizationUserInfoRequest;
const ModifyUebaRuleSwitchResponse = models.ModifyUebaRuleSwitchResponse;
const FilterDataObject = models.FilterDataObject;
const CreateHostVulExportJobRequest = models.CreateHostVulExportJobRequest;
const UpdateAccessKeyRemarkResponse = models.UpdateAccessKeyRemarkResponse;
const VulFixItem = models.VulFixItem;
const CreateVulFixTaskRequest = models.CreateVulFixTaskRequest;
const CreateIaCFileExportJobRequest = models.CreateIaCFileExportJobRequest;
const AlertInfo = models.AlertInfo;
const Vpc = models.Vpc;
const STSCredentialOutput = models.STSCredentialOutput;
const PortRiskAdvanceCFGParamItem = models.PortRiskAdvanceCFGParamItem;
const CreateIaCAccessTokenRequest = models.CreateIaCAccessTokenRequest;
const VulDetailInfo = models.VulDetailInfo;
const DescribeRepositoryImageAssetsResponse = models.DescribeRepositoryImageAssetsResponse;
const DescribeIaCFileListResponse = models.DescribeIaCFileListResponse;
const UebaCustomRule = models.UebaCustomRule;
const DescribeTopAttackInfoResponse = models.DescribeTopAttackInfoResponse;
const CreateIaCAccessTokenResponse = models.CreateIaCAccessTokenResponse;
const DescribeVULRiskAdvanceCFGListRequest = models.DescribeVULRiskAdvanceCFGListRequest;
const ComponentDetailItem = models.ComponentDetailItem;
const DescribeVulScanTaskListResponse = models.DescribeVulScanTaskListResponse;
const CreateSkillScanResponse = models.CreateSkillScanResponse;
const DescribeIaCFileReportRequest = models.DescribeIaCFileReportRequest;
const ModifyVulWhitelistConfigRequest = models.ModifyVulWhitelistConfigRequest;
const CICDToken = models.CICDToken;
const DescribeSkillScanResultRequest = models.DescribeSkillScanResultRequest;
const GateWayAsset = models.GateWayAsset;
const CreateVulFixTaskResponse = models.CreateVulFixTaskResponse;
const DescribeSourceIPAssetResponse = models.DescribeSourceIPAssetResponse;
const CreateIaCFileExportJobResponse = models.CreateIaCFileExportJobResponse;
const DescribeVulIgnoreRuleListRequest = models.DescribeVulIgnoreRuleListRequest;
const AssetViewVULRiskData = models.AssetViewVULRiskData;
const NICAsset = models.NICAsset;
const DescribeAccessKeyAssetResponse = models.DescribeAccessKeyAssetResponse;
const DescribeAccessKeyRiskDetailResponse = models.DescribeAccessKeyRiskDetailResponse;
const DescribeSubnetAssetsResponse = models.DescribeSubnetAssetsResponse;
const DescribeRiskCenterAssetViewPortRiskListRequest = models.DescribeRiskCenterAssetViewPortRiskListRequest;
const DescribeOrganizationInfoResponse = models.DescribeOrganizationInfoResponse;
const DescribeAccessKeyRiskRequest = models.DescribeAccessKeyRiskRequest;
const PublicIpDomainListKey = models.PublicIpDomainListKey;
const CreateRiskCenterScanTaskRequest = models.CreateRiskCenterScanTaskRequest;
const UpdateAlertStatusListResponse = models.UpdateAlertStatusListResponse;
const DescribeScanReportListRequest = models.DescribeScanReportListRequest;
const DescribeAccessKeyAssetRequest = models.DescribeAccessKeyAssetRequest;
const DescribeHostVulItemVPRInfoRequest = models.DescribeHostVulItemVPRInfoRequest;
const DescribeScanTaskListResponse = models.DescribeScanTaskListResponse;
const AssetInstanceTypeMap = models.AssetInstanceTypeMap;
const ModifyVulScanPeriodicRequest = models.ModifyVulScanPeriodicRequest;
const HostVulOverview = models.HostVulOverview;
const DescribeCVMAssetInfoResponse = models.DescribeCVMAssetInfoResponse;
const DescribeGatewayAssetsRequest = models.DescribeGatewayAssetsRequest;
const DescribeAIAgentAssetListResponse = models.DescribeAIAgentAssetListResponse;
const AlertExtraInfo = models.AlertExtraInfo;
const SourceIPVpcInfo = models.SourceIPVpcInfo;
const DescribeUebaRuleRequest = models.DescribeUebaRuleRequest;
const DescribeRiskCenterWebsiteRiskListRequest = models.DescribeRiskCenterWebsiteRiskListRequest;
const DescribeCallRecordRequest = models.DescribeCallRecordRequest;
const DescribeVulScanTaskDetailResponse = models.DescribeVulScanTaskDetailResponse;
const AssetViewVULRisk = models.AssetViewVULRisk;
const DescribeClusterPodAssetsResponse = models.DescribeClusterPodAssetsResponse;
const DescribeCFWAssetStatisticsResponse = models.DescribeCFWAssetStatisticsResponse;
const HostVulComponent = models.HostVulComponent;
const AssetViewPortRisk = models.AssetViewPortRisk;
const DescribeRiskCenterAssetViewCFGRiskListRequest = models.DescribeRiskCenterAssetViewCFGRiskListRequest;
const ReportTaskIdList = models.ReportTaskIdList;
const AddNewBindRoleUserResponse = models.AddNewBindRoleUserResponse;
const DescribeExposePathResponse = models.DescribeExposePathResponse;
const TaskLogInfo = models.TaskLogInfo;
const DescribeTaskLogURLResponse = models.DescribeTaskLogURLResponse;
const UebaRule = models.UebaRule;
const DescribeSearchBugInfoResponse = models.DescribeSearchBugInfoResponse;
const DescribeAccessKeyRiskDetailRequest = models.DescribeAccessKeyRiskDetailRequest;
const ModifyOrganizationAccountStatusRequest = models.ModifyOrganizationAccountStatusRequest;
const DescribeVULListResponse = models.DescribeVULListResponse;
const DescribeExposeAssetCategoryRequest = models.DescribeExposeAssetCategoryRequest;
const DescribeAbnormalCallRecordResponse = models.DescribeAbnormalCallRecordResponse;
const DescribeVulFixTaskDetailResponse = models.DescribeVulFixTaskDetailResponse;
const DescribeRiskCenterAssetViewVULRiskListResponse = models.DescribeRiskCenterAssetViewVULRiskListResponse;
const UpdateAccessKeyAlarmStatusRequest = models.UpdateAccessKeyAlarmStatusRequest;
const RiskCallRecord = models.RiskCallRecord;
const AssetProcessItem = models.AssetProcessItem;
const ModifyUebaRuleSwitchRequest = models.ModifyUebaRuleSwitchRequest;
const RiskDetailItem = models.RiskDetailItem;
const Filter = models.Filter;
const AssetCluster = models.AssetCluster;
const UpdateAccessKeyRemarkRequest = models.UpdateAccessKeyRemarkRequest;
const SkillScanRuleHit = models.SkillScanRuleHit;
const DescribeRiskCenterAssetViewWeakPasswordRiskListResponse = models.DescribeRiskCenterAssetViewWeakPasswordRiskListResponse;
const DescribeVULRiskAdvanceCFGListResponse = models.DescribeVULRiskAdvanceCFGListResponse;
const StandardItem = models.StandardItem;
const VULRiskAdvanceCFGList = models.VULRiskAdvanceCFGList;
const DescribeAssetViewVulRiskListResponse = models.DescribeAssetViewVulRiskListResponse;
const DescribeRepositoryImageAssetsRequest = models.DescribeRepositoryImageAssetsRequest;
const HostVulRisk = models.HostVulRisk;
const UpdateAccessKeyAlarmStatusResponse = models.UpdateAccessKeyAlarmStatusResponse;
const VulImpactComponentInfo = models.VulImpactComponentInfo;
const CVMAssetVO = models.CVMAssetVO;
const VULBaseInfo = models.VULBaseInfo;
const DescribeCallRecordResponse = models.DescribeCallRecordResponse;
const AssetViewCFGRisk = models.AssetViewCFGRisk;
const DescribeIaCFileListRequest = models.DescribeIaCFileListRequest;
const KeyValueInt = models.KeyValueInt;
const DataSearchBug = models.DataSearchBug;
const CommandPluginState = models.CommandPluginState;
const DescribeIaCFileOverviewResponse = models.DescribeIaCFileOverviewResponse;
const VulFixableMachineItem = models.VulFixableMachineItem;
const CreateIaCFileReScanTaskResponse = models.CreateIaCFileReScanTaskResponse;
const DescribeClusterAssetsRequest = models.DescribeClusterAssetsRequest;
const TaskCenterWeakPwdRiskInputParam = models.TaskCenterWeakPwdRiskInputParam;
const DescribeDomainAssetsRequest = models.DescribeDomainAssetsRequest;
const DescribeNICAssetsRequest = models.DescribeNICAssetsRequest;
const DescribeIaCFileReportResponse = models.DescribeIaCFileReportResponse;
const DescribeAssetProcessListRequest = models.DescribeAssetProcessListRequest;
const DescribeAssetProcessListResponse = models.DescribeAssetProcessListResponse;
const DescribeAccessKeyUserListRequest = models.DescribeAccessKeyUserListRequest;
const KeySandboxCredential = models.KeySandboxCredential;
const DeleteDomainAndIpRequest = models.DeleteDomainAndIpRequest;
const DescribeRiskRuleDetailRequest = models.DescribeRiskRuleDetailRequest;
const DescribeVulHostRelateComponentRequest = models.DescribeVulHostRelateComponentRequest;
const TaskIdListKey = models.TaskIdListKey;
const DeleteIaCAccessTokenResponse = models.DeleteIaCAccessTokenResponse;
const MiniTagItem = models.MiniTagItem;
const UebaEventContent = models.UebaEventContent;
const CreateAccessKeySyncTaskResponse = models.CreateAccessKeySyncTaskResponse;
const ModifyIaCTokenPeriodResponse = models.ModifyIaCTokenPeriodResponse;
const ModifyVulWhitelistSwitchRequest = models.ModifyVulWhitelistSwitchRequest;
const DescribeVulFixableMachineListRequest = models.DescribeVulFixableMachineListRequest;
const DescribeSearchBugInfoRequest = models.DescribeSearchBugInfoRequest;
const TaskLogURL = models.TaskLogURL;
const DescribeVulLabelListResponse = models.DescribeVulLabelListResponse;
const DescribeOrganizationUserInfoResponse = models.DescribeOrganizationUserInfoResponse;
const AccessKeyRisk = models.AccessKeyRisk;
const VulSpreadTrend = models.VulSpreadTrend;
const DBAssetVO = models.DBAssetVO;
const StandardTerm = models.StandardTerm;
const DescribeHostVulOverviewRequest = models.DescribeHostVulOverviewRequest;
const DescribeIaCTokenListRequest = models.DescribeIaCTokenListRequest;
const SkillScanEngineResult = models.SkillScanEngineResult;
const ModifyRiskCenterRiskStatusRequest = models.ModifyRiskCenterRiskStatusRequest;
const ServerRisk = models.ServerRisk;
const DescribeRiskCenterAssetViewWeakPasswordRiskListRequest = models.DescribeRiskCenterAssetViewWeakPasswordRiskListRequest;
const VULViewVULRisk = models.VULViewVULRisk;
const DescribeUserCallRecordRequest = models.DescribeUserCallRecordRequest;
const DescribeTopAttackInfoRequest = models.DescribeTopAttackInfoRequest;
const CreateVulFixedExportJobResponse = models.CreateVulFixedExportJobResponse;
const DescribePublicIpAssetsRequest = models.DescribePublicIpAssetsRequest;
const DescribeVulLabelListRequest = models.DescribeVulLabelListRequest;
const DescribeCVMAssetInfoRequest = models.DescribeCVMAssetInfoRequest;
const WebsiteRisk = models.WebsiteRisk;
const ServiceSupport = models.ServiceSupport;
const DescribeAssetRiskListResponse = models.DescribeAssetRiskListResponse;
const AccessCredentialOutput = models.AccessCredentialOutput;
const TaskCenterVulRiskInputParam = models.TaskCenterVulRiskInputParam;
const ScanTaskInfo = models.ScanTaskInfo;
const ModifyVulWhitelistSwitchResponse = models.ModifyVulWhitelistSwitchResponse;
const DescribeVulIgnoreRuleListResponse = models.DescribeVulIgnoreRuleListResponse;
const DescribeAccessKeyAlarmDetailRequest = models.DescribeAccessKeyAlarmDetailRequest;
const Tags = models.Tags;
const PortViewPortRisk = models.PortViewPortRisk;
const DescribeConfigCheckRulesResponse = models.DescribeConfigCheckRulesResponse;
const DescribeVpcAssetsResponse = models.DescribeVpcAssetsResponse;
const VPRLabel = models.VPRLabel;
const DescribeAssetRiskListRequest = models.DescribeAssetRiskListRequest;
const VulFixTaskItem = models.VulFixTaskItem;
const VulTrend = models.VulTrend;
const SkillState = models.SkillState;
const DescribeAccessKeyRiskResponse = models.DescribeAccessKeyRiskResponse;
const DescribeCVMAssetsResponse = models.DescribeCVMAssetsResponse;
const CreateAccessKeyCheckTaskRequest = models.CreateAccessKeyCheckTaskRequest;
const DescribeVulFixedListResponse = models.DescribeVulFixedListResponse;
const AssetBaseInfoResponse = models.AssetBaseInfoResponse;
const DescribeRiskCallRecordResponse = models.DescribeRiskCallRecordResponse;
const DescribeRiskCenterPortViewPortRiskListRequest = models.DescribeRiskCenterPortViewPortRiskListRequest;
const DescribeAccessKeyUserDetailRequest = models.DescribeAccessKeyUserDetailRequest;
const StopRiskCenterTaskRequest = models.StopRiskCenterTaskRequest;
const ExposesItem = models.ExposesItem;
const AKInfo = models.AKInfo;
const WhereFilter = models.WhereFilter;
const DescribeAlertListResponse = models.DescribeAlertListResponse;
const ScanTaskInfoList = models.ScanTaskInfoList;
const DescribeRiskCenterAssetViewVULRiskListRequest = models.DescribeRiskCenterAssetViewVULRiskListRequest;
const DeleteIaCFileRequest = models.DeleteIaCFileRequest;
const DescribeVulRiskRelateComponentRequest = models.DescribeVulRiskRelateComponentRequest;
const SourceIPAsset = models.SourceIPAsset;
const VulFixSummaryItem = models.VulFixSummaryItem;
const DomainAssetVO = models.DomainAssetVO;
const DescribeAccessKeyUserDetailResponse = models.DescribeAccessKeyUserDetailResponse;
const CreateHostVulExportJobResponse = models.CreateHostVulExportJobResponse;
const CredentialEffectScope = models.CredentialEffectScope;
const DescribeTaskLogListResponse = models.DescribeTaskLogListResponse;
const HighBaseLineRiskItem = models.HighBaseLineRiskItem;
const DescribeCVMAssetsRequest = models.DescribeCVMAssetsRequest;
const DescribeRiskCenterServerRiskListRequest = models.DescribeRiskCenterServerRiskListRequest;
const DescribeAccessKeyAlarmDetailResponse = models.DescribeAccessKeyAlarmDetailResponse;
const DescribeOtherCloudAssetsRequest = models.DescribeOtherCloudAssetsRequest;
const DescribeAIAgentAssetListRequest = models.DescribeAIAgentAssetListRequest;
const CreateDomainAndIpResponse = models.CreateDomainAndIpResponse;
const DescribeSubUserInfoRequest = models.DescribeSubUserInfoRequest;
const DescribeHighBaseLineRiskListRequest = models.DescribeHighBaseLineRiskListRequest;
const DescribeTaskLogURLRequest = models.DescribeTaskLogURLRequest;
const AddVulWhitelistResponse = models.AddVulWhitelistResponse;
const DescribeVulRiskRelateHostResponse = models.DescribeVulRiskRelateHostResponse;
const DescribeDbAssetInfoResponse = models.DescribeDbAssetInfoResponse;
const BugInfoDetail = models.BugInfoDetail;
const AccessKeyAlarmInfo = models.AccessKeyAlarmInfo;
const VulFixTaskDetailItem = models.VulFixTaskDetailItem;
const ModifyVulWhitelistConfigResponse = models.ModifyVulWhitelistConfigResponse;
const DescribeVulFixTaskDetailRequest = models.DescribeVulFixTaskDetailRequest;
const DescribeVulRiskRelateComponentResponse = models.DescribeVulRiskRelateComponentResponse;
const DescribeAKAnalysisDetailResponse = models.DescribeAKAnalysisDetailResponse;
const VulComponentSummary = models.VulComponentSummary;
const DescribeCheckViewRisksRequest = models.DescribeCheckViewRisksRequest;
const DescribeHostVulOverviewResponse = models.DescribeHostVulOverviewResponse;
const StatisticalFilter = models.StatisticalFilter;
const DescribeVULRiskDetailRequest = models.DescribeVULRiskDetailRequest;
const DescribeVulFixedHostDetailRequest = models.DescribeVulFixedHostDetailRequest;
const DescribeSkillScanResultResponse = models.DescribeSkillScanResultResponse;
const DescribeConfigCheckRulesRequest = models.DescribeConfigCheckRulesRequest;
const NewAlertKey = models.NewAlertKey;
const DescribeVULRiskDetailResponse = models.DescribeVULRiskDetailResponse;
const VulWhitelist = models.VulWhitelist;
const ModifyRiskCenterScanTaskResponse = models.ModifyRiskCenterScanTaskResponse;
const DeleteVulWhitelistRequest = models.DeleteVulWhitelistRequest;
const TrafficRuleState = models.TrafficRuleState;
const AccessKeyAlarmCount = models.AccessKeyAlarmCount;
const RiskRuleItem = models.RiskRuleItem;
const DescribeAbnormalCallRecordRequest = models.DescribeAbnormalCallRecordRequest;
const AssetRiskItem = models.AssetRiskItem;
const DescribeRiskDetailListRequest = models.DescribeRiskDetailListRequest;
const VulFixStatusItem = models.VulFixStatusItem;
const RoleInfo = models.RoleInfo;
const DescribeScanReportListResponse = models.DescribeScanReportListResponse;
const RiskRuleInfo = models.RiskRuleInfo;
const DescribeListenerListResponse = models.DescribeListenerListResponse;
const HostBriefInfo = models.HostBriefInfo;
const VulFixedItem = models.VulFixedItem;
const AssetInfoDetail = models.AssetInfoDetail;
const SubnetAsset = models.SubnetAsset;
const RiskCenterStatusKey = models.RiskCenterStatusKey;
const TaskAssetObject = models.TaskAssetObject;
const DbAssetInfo = models.DbAssetInfo;
const TrafficPluginState = models.TrafficPluginState;
const IaCFile = models.IaCFile;
const DescribeVulHostRelateComponentResponse = models.DescribeVulHostRelateComponentResponse;
const AccessKeyUser = models.AccessKeyUser;
const CreateVulFixRetryTaskResponse = models.CreateVulFixRetryTaskResponse;
const AccessKeyAlarm = models.AccessKeyAlarm;
const AssetClusterPod = models.AssetClusterPod;
const DescribeKeySandboxCredentialResponse = models.DescribeKeySandboxCredentialResponse;
const SkillScanItem = models.SkillScanItem;
const DescribeVULListRequest = models.DescribeVULListRequest;
const AssetViewWeakPassRisk = models.AssetViewWeakPassRisk;
const DescribeVulFixedListRequest = models.DescribeVulFixedListRequest;
const DescribeVulFixTaskListResponse = models.DescribeVulFixTaskListResponse;
const CFGViewCFGRisk = models.CFGViewCFGRisk;
const CreateIaCFileReScanTaskRequest = models.CreateIaCFileReScanTaskRequest;
const DescribeRiskCenterPortViewPortRiskListResponse = models.DescribeRiskCenterPortViewPortRiskListResponse;
const DescribeRiskCenterVULViewVULRiskListResponse = models.DescribeRiskCenterVULViewVULRiskListResponse;
const DescribeClusterPodAssetsRequest = models.DescribeClusterPodAssetsRequest;
const SkillRuleCatalogItem = models.SkillRuleCatalogItem;
const DescribeRiskCenterVULViewVULRiskListRequest = models.DescribeRiskCenterVULViewVULRiskListRequest;
const ModifyVulScanPeriodicResponse = models.ModifyVulScanPeriodicResponse;
const AddVulWhitelistRequest = models.AddVulWhitelistRequest;
const TaskAdvanceCFG = models.TaskAdvanceCFG;
const CreateVulReScanResponse = models.CreateVulReScanResponse;
const VULRiskInfo = models.VULRiskInfo;
const DescribeScanStatisticRequest = models.DescribeScanStatisticRequest;
const CreateSkillScanRequest = models.CreateSkillScanRequest;
const DescribeVulRiskListRequest = models.DescribeVulRiskListRequest;
const DescribeVulScanTaskDetailRequest = models.DescribeVulScanTaskDetailRequest;
const ModifyIaCTokenPeriodRequest = models.ModifyIaCTokenPeriodRequest;
const DescribeAssetViewVulRiskListRequest = models.DescribeAssetViewVulRiskListRequest;
const DescribeCFWAssetStatisticsRequest = models.DescribeCFWAssetStatisticsRequest;
const DescribeVulFixTaskListRequest = models.DescribeVulFixTaskListRequest;
const AIAgentAsset = models.AIAgentAsset;
const ServerRiskSuggestion = models.ServerRiskSuggestion;
const DescribeSubnetAssetsRequest = models.DescribeSubnetAssetsRequest;
const DescribeVulScanTaskListRequest = models.DescribeVulScanTaskListRequest;
const CallRecord = models.CallRecord;
const DescribeKeySandboxCredentialListRequest = models.DescribeKeySandboxCredentialListRequest;
const CreateVulScanManualResponse = models.CreateVulScanManualResponse;
const ModifyOrganizationAccountStatusResponse = models.ModifyOrganizationAccountStatusResponse;
const DescribeRiskDetailListResponse = models.DescribeRiskDetailListResponse;
const VulScanTaskDetail = models.VulScanTaskDetail;
const DescribeDbAssetsRequest = models.DescribeDbAssetsRequest;
const DescribeVulFixedHostDetailResponse = models.DescribeVulFixedHostDetailResponse;
const DescribeAlertListRequest = models.DescribeAlertListRequest;
const DescribeRiskCenterCFGViewCFGRiskListResponse = models.DescribeRiskCenterCFGViewCFGRiskListResponse;
const TaskCenterCFGRiskInputParam = models.TaskCenterCFGRiskInputParam;
const DescribeVulScanPeriodicRequest = models.DescribeVulScanPeriodicRequest;
const DescribeClusterAssetsResponse = models.DescribeClusterAssetsResponse;
const VPRRatingStage = models.VPRRatingStage;
const DescribeAKAnalysisDetailRequest = models.DescribeAKAnalysisDetailRequest;
const DescribeSubUserInfoResponse = models.DescribeSubUserInfoResponse;
const DescribeVulRiskListResponse = models.DescribeVulRiskListResponse;
const DescribeCSIPRiskStatisticsRequest = models.DescribeCSIPRiskStatisticsRequest;
const DescribeUebaRuleResponse = models.DescribeUebaRuleResponse;
const DescribeDomainAssetsResponse = models.DescribeDomainAssetsResponse;
const DescribeDbAssetsResponse = models.DescribeDbAssetsResponse;
const DescribeNICAssetsResponse = models.DescribeNICAssetsResponse;
const DeleteVulWhitelistResponse = models.DeleteVulWhitelistResponse;
const DescribeRiskCenterAssetViewPortRiskListResponse = models.DescribeRiskCenterAssetViewPortRiskListResponse;
const ModifyRiskCenterScanTaskRequest = models.ModifyRiskCenterScanTaskRequest;
const ClbListenerListInfo = models.ClbListenerListInfo;
const Element = models.Element;
const ProductSupport = models.ProductSupport;
const DescribeListenerListRequest = models.DescribeListenerListRequest;
const DescribeIaCFileOverviewRequest = models.DescribeIaCFileOverviewRequest;
const DeleteIaCAccessTokenRequest = models.DeleteIaCAccessTokenRequest;
const DeleteRiskScanTaskResponse = models.DeleteRiskScanTaskResponse;
const DescribeVulViewVulRiskListResponse = models.DescribeVulViewVulRiskListResponse;
const DescribeAccessKeyUserListResponse = models.DescribeAccessKeyUserListResponse;
const ExposeAssetTypeItem = models.ExposeAssetTypeItem;
const DescribeTaskLogListRequest = models.DescribeTaskLogListRequest;
const Filters = models.Filters;


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
     * Add a vulnerability allowlist
     * @param {AddVulWhitelistRequest} req
     * @param {function(string, AddVulWhitelistResponse):void} cb
     * @public
     */
    AddVulWhitelist(req, cb) {
        let resp = new AddVulWhitelistResponse();
        this.request("AddVulWhitelist", req, resp, cb);
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
     * Users manually submit vulnerability repair tasks, specify the vulnerabilities and target hosts that need to be repaired, and the system creates fixing tasks and dispatches execution. It supports options such as specifying the repair timeout period and whether to create a snapshot. The FixItems array is used to precisely control which hosts each vulnerability or KB patch repairs.
     * @param {CreateVulFixTaskRequest} req
     * @param {function(string, CreateVulFixTaskResponse):void} cb
     * @public
     */
    CreateVulFixTask(req, cb) {
        let resp = new CreateVulFixTaskResponse();
        this.request("CreateVulFixTask", req, resp, cb);
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
     * This API is used to modify the vulnerability allowlist switch.
     * @param {ModifyVulWhitelistSwitchRequest} req
     * @param {function(string, ModifyVulWhitelistSwitchResponse):void} cb
     * @public
     */
    ModifyVulWhitelistSwitch(req, cb) {
        let resp = new ModifyVulWhitelistSwitchResponse();
        this.request("ModifyVulWhitelistSwitch", req, resp, cb);
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
     * This API is used to query the repair details of a certain fixed vulnerability on a specified host, including basic information about the vulnerability, repair host information, and a detailed list of associated components and paths (component name, version number hit, associated path, repair command).
     * @param {DescribeVulFixedHostDetailRequest} req
     * @param {function(string, DescribeVulFixedHostDetailResponse):void} cb
     * @public
     */
    DescribeVulFixedHostDetail(req, cb) {
        let resp = new DescribeVulFixedHostDetailResponse();
        this.request("DescribeVulFixedHostDetail", req, resp, cb);
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
     * This API is used to query the vulnerability repair task record list with paging, support by conditional filtering such as remediation status and time range, and show summary information for each repair task.
     * @param {DescribeVulFixTaskListRequest} req
     * @param {function(string, DescribeVulFixTaskListResponse):void} cb
     * @public
     */
    DescribeVulFixTaskList(req, cb) {
        let resp = new DescribeVulFixTaskListResponse();
        this.request("DescribeVulFixTaskList", req, resp, cb);
    }

    /**
     * Create an export task for the list of fixed vulnerabilities. It supports the same filter criteria as DescribeVulFixedList. The export is implemented via an asynchronous task. After a JobID is returned, the frontend polls to query the export task status. The export fields include vulnerability ID, vulnerability name, vulnerability level, VPR rating, vulnerability type, CVE ID, host name, instance ID, associated component & path, and repair time.
     * @param {CreateVulFixedExportJobRequest} req
     * @param {function(string, CreateVulFixedExportJobResponse):void} cb
     * @public
     */
    CreateVulFixedExportJob(req, cb) {
        let resp = new CreateVulFixedExportJobResponse();
        this.request("CreateVulFixedExportJob", req, resp, cb);
    }

    /**
     * This API is used to obtain the host vulnerability overview.
     * @param {DescribeHostVulOverviewRequest} req
     * @param {function(string, DescribeHostVulOverviewResponse):void} cb
     * @public
     */
    DescribeHostVulOverview(req, cb) {
        let resp = new DescribeHostVulOverviewResponse();
        this.request("DescribeHostVulOverview", req, resp, cb);
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
     * This API is used to create a vulnerability rescan
     * @param {CreateVulReScanRequest} req
     * @param {function(string, CreateVulReScanResponse):void} cb
     * @public
     */
    CreateVulReScan(req, cb) {
        let resp = new CreateVulReScanResponse();
        this.request("CreateVulReScan", req, resp, cb);
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
     * This API is used to retrieve the vulnerability ignore list.
     * @param {DescribeVulIgnoreRuleListRequest} req
     * @param {function(string, DescribeVulIgnoreRuleListResponse):void} cb
     * @public
     */
    DescribeVulIgnoreRuleList(req, cb) {
        let resp = new DescribeVulIgnoreRuleListResponse();
        this.request("DescribeVulIgnoreRuleList", req, resp, cb);
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
     * This API is used to modify the vulnerability allowlist configuration.
     * @param {ModifyVulWhitelistConfigRequest} req
     * @param {function(string, ModifyVulWhitelistConfigResponse):void} cb
     * @public
     */
    ModifyVulWhitelistConfig(req, cb) {
        let resp = new ModifyVulWhitelistConfigResponse();
        this.request("ModifyVulWhitelistConfig", req, resp, cb);
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
     * This API is used to query the host list where specified vulnerabilities can be repaired. Before a user submits a repair task, it is necessary to query which hosts support automatic fix, providing data support for users to select repair targets.
     * @param {DescribeVulFixableMachineListRequest} req
     * @param {function(string, DescribeVulFixableMachineListResponse):void} cb
     * @public
     */
    DescribeVulFixableMachineList(req, cb) {
        let resp = new DescribeVulFixableMachineListResponse();
        this.request("DescribeVulFixableMachineList", req, resp, cb);
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
     * This API is used to query the list of repaired vulnerabilities, show vulnerability information with successful fixes and statistics on repair conditions, helping users understand the repair results.
     * @param {DescribeVulFixedListRequest} req
     * @param {function(string, DescribeVulFixedListResponse):void} cb
     * @public
     */
    DescribeVulFixedList(req, cb) {
        let resp = new DescribeVulFixedListResponse();
        this.request("DescribeVulFixedList", req, resp, cb);
    }

    /**
     * This API is used to create a host vulnerability table export task.
     * @param {CreateHostVulExportJobRequest} req
     * @param {function(string, CreateHostVulExportJobResponse):void} cb
     * @public
     */
    CreateHostVulExportJob(req, cb) {
        let resp = new CreateHostVulExportJobResponse();
        this.request("CreateHostVulExportJob", req, resp, cb);
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
     * Retry the vulnerability repair task that failed to fix, and redispatch the repair instruction only for the hosts of the original task that failed to fix. Retry is allowed only when the task status is partially or totally failed to fix.
     * @param {CreateVulFixRetryTaskRequest} req
     * @param {function(string, CreateVulFixRetryTaskResponse):void} cb
     * @public
     */
    CreateVulFixRetryTask(req, cb) {
        let resp = new CreateVulFixRetryTaskResponse();
        this.request("CreateVulFixRetryTask", req, resp, cb);
    }

    /**
     * Retrieve the associated component of a vulnerability
     * @param {DescribeVulRiskRelateComponentRequest} req
     * @param {function(string, DescribeVulRiskRelateComponentResponse):void} cb
     * @public
     */
    DescribeVulRiskRelateComponent(req, cb) {
        let resp = new DescribeVulRiskRelateComponentResponse();
        this.request("DescribeVulRiskRelateComponent", req, resp, cb);
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
     * Search for hosts associated with vulnerabilities or KBs
     * @param {DescribeVulRiskRelateHostRequest} req
     * @param {function(string, DescribeVulRiskRelateHostResponse):void} cb
     * @public
     */
    DescribeVulRiskRelateHost(req, cb) {
        let resp = new DescribeVulRiskRelateHostResponse();
        this.request("DescribeVulRiskRelateHost", req, resp, cb);
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
     * This API is used to modify vulnerability scanning (period scanning).
     * @param {ModifyVulScanPeriodicRequest} req
     * @param {function(string, ModifyVulScanPeriodicResponse):void} cb
     * @public
     */
    ModifyVulScanPeriodic(req, cb) {
        let resp = new ModifyVulScanPeriodicResponse();
        this.request("ModifyVulScanPeriodic", req, resp, cb);
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
     * This API is used to retrieve vulnerability scanning task detail
     * @param {DescribeVulScanTaskDetailRequest} req
     * @param {function(string, DescribeVulScanTaskDetailResponse):void} cb
     * @public
     */
    DescribeVulScanTaskDetail(req, cb) {
        let resp = new DescribeVulScanTaskDetailResponse();
        this.request("DescribeVulScanTaskDetail", req, resp, cb);
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
     * This API is used to search vulnerability scanning task history
     * @param {DescribeVulScanTaskListRequest} req
     * @param {function(string, DescribeVulScanTaskListResponse):void} cb
     * @public
     */
    DescribeVulScanTaskList(req, cb) {
        let resp = new DescribeVulScanTaskListResponse();
        this.request("DescribeVulScanTaskList", req, resp, cb);
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
     * This API is used to obtain vulnerability scanning (period scanning).
     * @param {DescribeVulScanPeriodicRequest} req
     * @param {function(string, DescribeVulScanPeriodicResponse):void} cb
     * @public
     */
    DescribeVulScanPeriodic(req, cb) {
        let resp = new DescribeVulScanPeriodicResponse();
        this.request("DescribeVulScanPeriodic", req, resp, cb);
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
     * This API is used to query host-associated vulnerability components.
     * @param {DescribeVulHostRelateComponentRequest} req
     * @param {function(string, DescribeVulHostRelateComponentResponse):void} cb
     * @public
     */
    DescribeVulHostRelateComponent(req, cb) {
        let resp = new DescribeVulHostRelateComponentResponse();
        this.request("DescribeVulHostRelateComponent", req, resp, cb);
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
     * This API is used to create a vulnerability scanning (one-click scan).
     * @param {CreateVulScanManualRequest} req
     * @param {function(string, CreateVulScanManualResponse):void} cb
     * @public
     */
    CreateVulScanManual(req, cb) {
        let resp = new CreateVulScanManualResponse();
        this.request("CreateVulScanManual", req, resp, cb);
    }

    /**
     * This API is used to obtain host vulnerability VPR information.
     * @param {DescribeHostVulItemVPRInfoRequest} req
     * @param {function(string, DescribeHostVulItemVPRInfoResponse):void} cb
     * @public
     */
    DescribeHostVulItemVPRInfo(req, cb) {
        let resp = new DescribeHostVulItemVPRInfoResponse();
        this.request("DescribeHostVulItemVPRInfo", req, resp, cb);
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
     * This API is used to delete a vulnerability allowlist.
     * @param {DeleteVulWhitelistRequest} req
     * @param {function(string, DeleteVulWhitelistResponse):void} cb
     * @public
     */
    DeleteVulWhitelist(req, cb) {
        let resp = new DeleteVulWhitelistResponse();
        this.request("DeleteVulWhitelist", req, resp, cb);
    }

    /**
     * This API is used to retrieve the host vulnerability risk list.
     * @param {DescribeHostVulRiskListRequest} req
     * @param {function(string, DescribeHostVulRiskListResponse):void} cb
     * @public
     */
    DescribeHostVulRiskList(req, cb) {
        let resp = new DescribeHostVulRiskListResponse();
        this.request("DescribeHostVulRiskList", req, resp, cb);
    }

    /**
     * Obtains the vulnerability tag list
     * @param {DescribeVulLabelListRequest} req
     * @param {function(string, DescribeVulLabelListResponse):void} cb
     * @public
     */
    DescribeVulLabelList(req, cb) {
        let resp = new DescribeVulLabelListResponse();
        this.request("DescribeVulLabelList", req, resp, cb);
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
     * This API is used to query the associated server of a vulnerable component.
     * @param {DescribeVulComponentRelateHostRequest} req
     * @param {function(string, DescribeVulComponentRelateHostResponse):void} cb
     * @public
     */
    DescribeVulComponentRelateHost(req, cb) {
        let resp = new DescribeVulComponentRelateHostResponse();
        this.request("DescribeVulComponentRelateHost", req, resp, cb);
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
     * This API is used to obtain vulnerability list
     * @param {DescribeVulItemListRequest} req
     * @param {function(string, DescribeVulItemListResponse):void} cb
     * @public
     */
    DescribeVulItemList(req, cb) {
        let resp = new DescribeVulItemListResponse();
        this.request("DescribeVulItemList", req, resp, cb);
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
     * This API is used to query the details of a specified vulnerability repair task, including detailed data such as remediation status and snapshot status for each host, and supports pagination and filtering.
     * @param {DescribeVulFixTaskDetailRequest} req
     * @param {function(string, DescribeVulFixTaskDetailResponse):void} cb
     * @public
     */
    DescribeVulFixTaskDetail(req, cb) {
        let resp = new DescribeVulFixTaskDetailResponse();
        this.request("DescribeVulFixTaskDetail", req, resp, cb);
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
