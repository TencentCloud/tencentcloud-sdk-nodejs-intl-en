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
const ModifyAlarmPolicyInfoRequest = models.ModifyAlarmPolicyInfoRequest;
const AlarmPolicyTriggerTask = models.AlarmPolicyTriggerTask;
const DescribePolicyGroupListResponse = models.DescribePolicyGroupListResponse;
const DescribePrometheusInstancesOverviewRequest = models.DescribePrometheusInstancesOverviewRequest;
const ModifyGrafanaInstanceResponse = models.ModifyGrafanaInstanceResponse;
const DescribePolicyGroupInfoCallback = models.DescribePolicyGroupInfoCallback;
const ModifyGrafanaInstanceRequest = models.ModifyGrafanaInstanceRequest;
const AlarmHistoryMetric = models.AlarmHistoryMetric;
const EnableGrafanaSSOResponse = models.EnableGrafanaSSOResponse;
const DescribePolicyGroupInfoResponse = models.DescribePolicyGroupInfoResponse;
const DeletePrometheusClusterAgentRequest = models.DeletePrometheusClusterAgentRequest;
const DescribePrometheusScrapeJobsRequest = models.DescribePrometheusScrapeJobsRequest;
const CreatePolicyGroupResponse = models.CreatePolicyGroupResponse;
const DescribeBaseMetricsResponse = models.DescribeBaseMetricsResponse;
const CreatePrometheusMultiTenantInstancePostPayModeRequest = models.CreatePrometheusMultiTenantInstancePostPayModeRequest;
const DescribePolicyConditionListResponseDeprecatingInfo = models.DescribePolicyConditionListResponseDeprecatingInfo;
const PrometheusTempModify = models.PrometheusTempModify;
const SendCustomAlarmMsgRequest = models.SendCustomAlarmMsgRequest;
const UnBindingPolicyObjectRequest = models.UnBindingPolicyObjectRequest;
const CommonNamespaceNew = models.CommonNamespaceNew;
const Tag = models.Tag;
const DescribePrometheusAgentInstancesRequest = models.DescribePrometheusAgentInstancesRequest;
const PrometheusRecordRuleYamlItem = models.PrometheusRecordRuleYamlItem;
const Label = models.Label;
const DescribeGrafanaIntegrationsResponse = models.DescribeGrafanaIntegrationsResponse;
const CreatePrometheusMultiTenantInstancePostPayModeResponse = models.CreatePrometheusMultiTenantInstancePostPayModeResponse;
const UpdatePrometheusAgentStatusResponse = models.UpdatePrometheusAgentStatusResponse;
const SyncPrometheusTempResponse = models.SyncPrometheusTempResponse;
const UpdateGrafanaWhiteListResponse = models.UpdateGrafanaWhiteListResponse;
const DescribeGrafanaEnvironmentsRequest = models.DescribeGrafanaEnvironmentsRequest;
const PrometheusConfigItem = models.PrometheusConfigItem;
const AlarmPolicy = models.AlarmPolicy;
const DeleteExporterIntegrationRequest = models.DeleteExporterIntegrationRequest;
const DescribePolicyConditionListResponse = models.DescribePolicyConditionListResponse;
const PrometheusRuleSet = models.PrometheusRuleSet;
const DescribeAllNamespacesResponse = models.DescribeAllNamespacesResponse;
const TerminatePrometheusInstancesRequest = models.TerminatePrometheusInstancesRequest;
const InstallPluginsResponse = models.InstallPluginsResponse;
const AlarmPolicyRule = models.AlarmPolicyRule;
const CreateGrafanaIntegrationRequest = models.CreateGrafanaIntegrationRequest;
const Dimension = models.Dimension;
const DescribeBindingPolicyObjectListResponse = models.DescribeBindingPolicyObjectListResponse;
const PrometheusInstancesOverview = models.PrometheusInstancesOverview;
const DescribePrometheusInstanceInitStatusResponse = models.DescribePrometheusInstanceInitStatusResponse;
const DescribeProductEventListResponse = models.DescribeProductEventListResponse;
const DescribeAlarmNoticeCallbacksResponse = models.DescribeAlarmNoticeCallbacksResponse;
const DescribePrometheusInstanceUsageRequest = models.DescribePrometheusInstanceUsageRequest;
const DeletePrometheusScrapeJobsRequest = models.DeletePrometheusScrapeJobsRequest;
const CreatePrometheusRecordRuleYamlRequest = models.CreatePrometheusRecordRuleYamlRequest;
const Instance = models.Instance;
const DescribeAlarmNoticesResponse = models.DescribeAlarmNoticesResponse;
const PrometheusClusterAgentPodConfig = models.PrometheusClusterAgentPodConfig;
const GrafanaInstanceInfo = models.GrafanaInstanceInfo;
const DeletePrometheusConfigResponse = models.DeletePrometheusConfigResponse;
const CreatePrometheusRecordRuleYamlResponse = models.CreatePrometheusRecordRuleYamlResponse;
const MetricObjectMeaning = models.MetricObjectMeaning;
const AlarmEvent = models.AlarmEvent;
const ModifyPolicyGroupResponse = models.ModifyPolicyGroupResponse;
const UninstallGrafanaPluginsResponse = models.UninstallGrafanaPluginsResponse;
const ModifyPrometheusTempRequest = models.ModifyPrometheusTempRequest;
const UpgradeGrafanaInstanceResponse = models.UpgradeGrafanaInstanceResponse;
const DeletePrometheusTempSyncResponse = models.DeletePrometheusTempSyncResponse;
const DescribeDNSConfigRequest = models.DescribeDNSConfigRequest;
const DescribePolicyGroupInfoConditionTpl = models.DescribePolicyGroupInfoConditionTpl;
const UnBindingPolicyObjectResponse = models.UnBindingPolicyObjectResponse;
const DescribePrometheusRecordRulesRequest = models.DescribePrometheusRecordRulesRequest;
const DescribeExporterIntegrationsResponse = models.DescribeExporterIntegrationsResponse;
const UpdateAlertRuleResponse = models.UpdateAlertRuleResponse;
const InstanceGroup = models.InstanceGroup;
const EnableGrafanaSSORequest = models.EnableGrafanaSSORequest;
const DescribePrometheusScrapeJobsResponse = models.DescribePrometheusScrapeJobsResponse;
const EnableGrafanaInternetRequest = models.EnableGrafanaInternetRequest;
const GrafanaAccountRole = models.GrafanaAccountRole;
const DestroyPrometheusInstanceRequest = models.DestroyPrometheusInstanceRequest;
const PolicyGroupReceiverInfo = models.PolicyGroupReceiverInfo;
const Metric = models.Metric;
const MidQueryCondition = models.MidQueryCondition;
const DeleteSSOAccountRequest = models.DeleteSSOAccountRequest;
const DescribePrometheusAgentInstancesResponse = models.DescribePrometheusAgentInstancesResponse;
const URLNotice = models.URLNotice;
const DeletePrometheusTempResponse = models.DeletePrometheusTempResponse;
const CreatePolicyGroupCondition = models.CreatePolicyGroupCondition;
const DescribePolicyGroupInfoReceiverInfo = models.DescribePolicyGroupInfoReceiverInfo;
const RecordingRuleSet = models.RecordingRuleSet;
const DescribeBasicAlarmListRequest = models.DescribeBasicAlarmListRequest;
const ModifyAlarmPolicyStatusResponse = models.ModifyAlarmPolicyStatusResponse;
const DescribeGrafanaInstancesRequest = models.DescribeGrafanaInstancesRequest;
const DescribePrometheusTempSyncRequest = models.DescribePrometheusTempSyncRequest;
const DescribePrometheusGlobalConfigResponse = models.DescribePrometheusGlobalConfigResponse;
const CreateRecordingRuleResponse = models.CreateRecordingRuleResponse;
const CreateGrafanaNotificationChannelResponse = models.CreateGrafanaNotificationChannelResponse;
const DescribeGrafanaNotificationChannelsRequest = models.DescribeGrafanaNotificationChannelsRequest;
const CleanGrafanaInstanceRequest = models.CleanGrafanaInstanceRequest;
const DescribeSSOAccountRequest = models.DescribeSSOAccountRequest;
const UpdateExporterIntegrationResponse = models.UpdateExporterIntegrationResponse;
const CreateAlarmNoticeRequest = models.CreateAlarmNoticeRequest;
const InstanceGroups = models.InstanceGroups;
const UpdateGrafanaNotificationChannelResponse = models.UpdateGrafanaNotificationChannelResponse;
const CreatePrometheusTempResponse = models.CreatePrometheusTempResponse;
const UnBindingAllPolicyObjectRequest = models.UnBindingAllPolicyObjectRequest;
const SendCustomAlarmMsgResponse = models.SendCustomAlarmMsgResponse;
const AlarmPolicyCondition = models.AlarmPolicyCondition;
const DescribeGrafanaChannelsRequest = models.DescribeGrafanaChannelsRequest;
const DescribePolicyGroupListRequest = models.DescribePolicyGroupListRequest;
const DescribeGrafanaConfigRequest = models.DescribeGrafanaConfigRequest;
const UpdateRecordingRuleRequest = models.UpdateRecordingRuleRequest;
const DescribePolicyConditionListConfigManualCalcValue = models.DescribePolicyConditionListConfigManualCalcValue;
const DescribePrometheusInstancesRequest = models.DescribePrometheusInstancesRequest;
const Toleration = models.Toleration;
const TagInstance = models.TagInstance;
const DescribePolicyConditionListConfigManual = models.DescribePolicyConditionListConfigManual;
const InstallPluginsRequest = models.InstallPluginsRequest;
const DescribeAlarmEventsResponse = models.DescribeAlarmEventsResponse;
const DescribeServiceDiscoveryResponse = models.DescribeServiceDiscoveryResponse;
const PrometheusTag = models.PrometheusTag;
const DescribePolicyConditionListMetric = models.DescribePolicyConditionListMetric;
const BindingPolicyObjectRequest = models.BindingPolicyObjectRequest;
const CreateServiceDiscoveryResponse = models.CreateServiceDiscoveryResponse;
const EnableSSOCamCheckResponse = models.EnableSSOCamCheckResponse;
const DescribeAccidentEventListRequest = models.DescribeAccidentEventListRequest;
const CreatePrometheusScrapeJobResponse = models.CreatePrometheusScrapeJobResponse;
const CreateAlarmPolicyRequest = models.CreateAlarmPolicyRequest;
const PrometheusZoneItem = models.PrometheusZoneItem;
const ModifyPrometheusAlertPolicyRequest = models.ModifyPrometheusAlertPolicyRequest;
const ModifyPrometheusInstanceAttributesResponse = models.ModifyPrometheusInstanceAttributesResponse;
const PrometheusTemplateSyncTarget = models.PrometheusTemplateSyncTarget;
const DescribePrometheusAlertPolicyResponse = models.DescribePrometheusAlertPolicyResponse;
const UpdateGrafanaEnvironmentsRequest = models.UpdateGrafanaEnvironmentsRequest;
const CommonNamespace = models.CommonNamespace;
const DeleteGrafanaNotificationChannelResponse = models.DeleteGrafanaNotificationChannelResponse;
const DataPoint = models.DataPoint;
const DescribeAlarmPoliciesResponse = models.DescribeAlarmPoliciesResponse;
const ModifyPrometheusGlobalNotificationRequest = models.ModifyPrometheusGlobalNotificationRequest;
const DescribePolicyConditionListConfigManualPeriod = models.DescribePolicyConditionListConfigManualPeriod;
const DescribePrometheusRecordRulesResponse = models.DescribePrometheusRecordRulesResponse;
const DescribePrometheusGlobalNotificationResponse = models.DescribePrometheusGlobalNotificationResponse;
const DescribeMonitorTypesRequest = models.DescribeMonitorTypesRequest;
const DimensionsDesc = models.DimensionsDesc;
const DeletePrometheusAlertPolicyRequest = models.DeletePrometheusAlertPolicyRequest;
const ServiceDiscoveryItem = models.ServiceDiscoveryItem;
const ModifyPrometheusAgentExternalLabelsResponse = models.ModifyPrometheusAgentExternalLabelsResponse;
const ModifyAlarmNoticeRequest = models.ModifyAlarmNoticeRequest;
const DescribeGrafanaWhiteListResponse = models.DescribeGrafanaWhiteListResponse;
const DescribeAlertRulesResponse = models.DescribeAlertRulesResponse;
const ResumeGrafanaInstanceRequest = models.ResumeGrafanaInstanceRequest;
const DescribeBasicAlarmListResponse = models.DescribeBasicAlarmListResponse;
const ModifyAlarmReceiversRequest = models.ModifyAlarmReceiversRequest;
const DescribeExporterIntegrationsRequest = models.DescribeExporterIntegrationsRequest;
const DescribePrometheusInstanceDetailResponse = models.DescribePrometheusInstanceDetailResponse;
const Point = models.Point;
const ModifyPolicyGroupEventCondition = models.ModifyPolicyGroupEventCondition;
const CreateGrafanaNotificationChannelRequest = models.CreateGrafanaNotificationChannelRequest;
const DescribePrometheusTargetsTMPResponse = models.DescribePrometheusTargetsTMPResponse;
const DescribePrometheusClusterAgentsResponse = models.DescribePrometheusClusterAgentsResponse;
const UpdatePrometheusScrapeJobRequest = models.UpdatePrometheusScrapeJobRequest;
const PrometheusAgentInfo = models.PrometheusAgentInfo;
const CreatePrometheusClusterAgentResponse = models.CreatePrometheusClusterAgentResponse;
const CreateGrafanaIntegrationResponse = models.CreateGrafanaIntegrationResponse;
const BindPrometheusManagedGrafanaRequest = models.BindPrometheusManagedGrafanaRequest;
const PrometheusAlertManagerConfig = models.PrometheusAlertManagerConfig;
const CreateGrafanaInstanceRequest = models.CreateGrafanaInstanceRequest;
const DescribePrometheusInstanceUsageResponse = models.DescribePrometheusInstanceUsageResponse;
const DescribePrometheusGlobalNotificationRequest = models.DescribePrometheusGlobalNotificationRequest;
const DeleteExporterIntegrationResponse = models.DeleteExporterIntegrationResponse;
const UpdateRecordingRuleResponse = models.UpdateRecordingRuleResponse;
const CreatePrometheusAgentResponse = models.CreatePrometheusAgentResponse;
const DescribePrometheusAlertPolicyRequest = models.DescribePrometheusAlertPolicyRequest;
const DescribeAlarmMetricsResponse = models.DescribeAlarmMetricsResponse;
const DescribePrometheusRecordRuleYamlRequest = models.DescribePrometheusRecordRuleYamlRequest;
const DescribeGrafanaWhiteListRequest = models.DescribeGrafanaWhiteListRequest;
const DescribePrometheusConfigRequest = models.DescribePrometheusConfigRequest;
const CreateGrafanaInstanceResponse = models.CreateGrafanaInstanceResponse;
const UpdateAlertRuleRequest = models.UpdateAlertRuleRequest;
const AlarmPolicyEventCondition = models.AlarmPolicyEventCondition;
const DeleteAlarmNoticesRequest = models.DeleteAlarmNoticesRequest;
const DescribeGrafanaNotificationChannelsResponse = models.DescribeGrafanaNotificationChannelsResponse;
const DescribePolicyConditionListConfigManualCalcType = models.DescribePolicyConditionListConfigManualCalcType;
const ResumeGrafanaInstanceResponse = models.ResumeGrafanaInstanceResponse;
const DescribeAccidentEventListResponse = models.DescribeAccidentEventListResponse;
const DescribePrometheusTempSyncResponse = models.DescribePrometheusTempSyncResponse;
const CreatePrometheusConfigResponse = models.CreatePrometheusConfigResponse;
const UpdateDNSConfigRequest = models.UpdateDNSConfigRequest;
const DeletePrometheusClusterAgentResponse = models.DeletePrometheusClusterAgentResponse;
const DescribeDNSConfigResponse = models.DescribeDNSConfigResponse;
const DeleteRecordingRulesRequest = models.DeleteRecordingRulesRequest;
const MonitorTypeNamespace = models.MonitorTypeNamespace;
const UninstallGrafanaPluginsRequest = models.UninstallGrafanaPluginsRequest;
const DeleteSSOAccountResponse = models.DeleteSSOAccountResponse;
const DescribePolicyGroupListGroup = models.DescribePolicyGroupListGroup;
const GrafanaAccountInfo = models.GrafanaAccountInfo;
const DescribeBindingPolicyObjectListInstanceGroup = models.DescribeBindingPolicyObjectListInstanceGroup;
const ModifyAlarmPolicyTasksRequest = models.ModifyAlarmPolicyTasksRequest;
const GetPrometheusAgentManagementCommandRequest = models.GetPrometheusAgentManagementCommandRequest;
const DescribeBindingPolicyObjectListDimension = models.DescribeBindingPolicyObjectListDimension;
const DescribePolicyGroupInfoEventCondition = models.DescribePolicyGroupInfoEventCondition;
const GetPrometheusAgentManagementCommandResponse = models.GetPrometheusAgentManagementCommandResponse;
const MetricData = models.MetricData;
const DescribeStatisticDataResponse = models.DescribeStatisticDataResponse;
const DescribeProductEventListOverView = models.DescribeProductEventListOverView;
const UpdateDNSConfigResponse = models.UpdateDNSConfigResponse;
const UninstallGrafanaDashboardResponse = models.UninstallGrafanaDashboardResponse;
const AlarmHierarchicalValue = models.AlarmHierarchicalValue;
const UpdateGrafanaNotificationChannelRequest = models.UpdateGrafanaNotificationChannelRequest;
const CreatePolicyGroupEventCondition = models.CreatePolicyGroupEventCondition;
const GrafanaPlugin = models.GrafanaPlugin;
const DestroyPrometheusInstanceResponse = models.DestroyPrometheusInstanceResponse;
const DescribeAlertRulesRequest = models.DescribeAlertRulesRequest;
const DescribePrometheusInstancesResponse = models.DescribePrometheusInstancesResponse;
const LogFilterInfo = models.LogFilterInfo;
const CreateExporterIntegrationRequest = models.CreateExporterIntegrationRequest;
const ModifyPrometheusConfigResponse = models.ModifyPrometheusConfigResponse;
const PrometheusAgent = models.PrometheusAgent;
const CreatePrometheusAlertPolicyResponse = models.CreatePrometheusAlertPolicyResponse;
const DescribePrometheusInstanceDetailRequest = models.DescribePrometheusInstanceDetailRequest;
const UserNotice = models.UserNotice;
const PrometheusInstancesItem = models.PrometheusInstancesItem;
const DescribeConditionsTemplateListRequest = models.DescribeConditionsTemplateListRequest;
const DeletePrometheusRecordRuleYamlResponse = models.DeletePrometheusRecordRuleYamlResponse;
const MetricDataPoint = models.MetricDataPoint;
const GetMonitorDataRequest = models.GetMonitorDataRequest;
const CreateRecordingRuleRequest = models.CreateRecordingRuleRequest;
const ModifyPrometheusConfigRequest = models.ModifyPrometheusConfigRequest;
const DescribeGrafanaEnvironmentsResponse = models.DescribeGrafanaEnvironmentsResponse;
const DescribePolicyConditionListRequest = models.DescribePolicyConditionListRequest;
const DeletePolicyGroupResponse = models.DeletePolicyGroupResponse;
const DeleteGrafanaInstanceRequest = models.DeleteGrafanaInstanceRequest;
const GrafanaIntegrationConfig = models.GrafanaIntegrationConfig;
const DeleteGrafanaIntegrationRequest = models.DeleteGrafanaIntegrationRequest;
const ModifyPrometheusAlertPolicyResponse = models.ModifyPrometheusAlertPolicyResponse;
const DescribePrometheusTargetsTMPRequest = models.DescribePrometheusTargetsTMPRequest;
const CreateServiceDiscoveryRequest = models.CreateServiceDiscoveryRequest;
const PeriodsSt = models.PeriodsSt;
const ModifyAlarmReceiversResponse = models.ModifyAlarmReceiversResponse;
const GrafanaChannel = models.GrafanaChannel;
const CreatePrometheusConfigRequest = models.CreatePrometheusConfigRequest;
const DescribeSSOAccountResponse = models.DescribeSSOAccountResponse;
const CreateAlarmPolicyResponse = models.CreateAlarmPolicyResponse;
const DeleteGrafanaNotificationChannelRequest = models.DeleteGrafanaNotificationChannelRequest;
const AlarmNotice = models.AlarmNotice;
const DescribeProductEventListEventsDimensions = models.DescribeProductEventListEventsDimensions;
const CreatePrometheusClusterAgentRequest = models.CreatePrometheusClusterAgentRequest;
const ModifyAlarmPolicyConditionResponse = models.ModifyAlarmPolicyConditionResponse;
const DescribePrometheusInstancesOverviewResponse = models.DescribePrometheusInstancesOverviewResponse;
const MetricSet = models.MetricSet;
const PrometheusInstanceGrantInfo = models.PrometheusInstanceGrantInfo;
const TemplateGroup = models.TemplateGroup;
const DescribeBindingPolicyObjectListInstance = models.DescribeBindingPolicyObjectListInstance;
const UpdateGrafanaIntegrationResponse = models.UpdateGrafanaIntegrationResponse;
const DescribeAlarmHistoriesResponse = models.DescribeAlarmHistoriesResponse;
const DescribeAlarmMetricsRequest = models.DescribeAlarmMetricsRequest;
const CreateSSOAccountRequest = models.CreateSSOAccountRequest;
const AlarmPolicyFilter = models.AlarmPolicyFilter;
const ModifyAlarmPolicyNoticeResponse = models.ModifyAlarmPolicyNoticeResponse;
const PrometheusAlertRule = models.PrometheusAlertRule;
const UnbindPrometheusManagedGrafanaResponse = models.UnbindPrometheusManagedGrafanaResponse;
const DescribeGrafanaChannelsResponse = models.DescribeGrafanaChannelsResponse;
const DescribeAlarmPolicyResponse = models.DescribeAlarmPolicyResponse;
const PrometheusNotificationItem = models.PrometheusNotificationItem;
const DescribeMonitorTypesResponse = models.DescribeMonitorTypesResponse;
const UpgradeGrafanaInstanceRequest = models.UpgradeGrafanaInstanceRequest;
const DescribeAccidentEventListAlarms = models.DescribeAccidentEventListAlarms;
const CreatePrometheusGlobalNotificationResponse = models.CreatePrometheusGlobalNotificationResponse;
const DescribeAlarmHistoriesRequest = models.DescribeAlarmHistoriesRequest;
const DescribePrometheusRecordRuleYamlResponse = models.DescribePrometheusRecordRuleYamlResponse;
const DeletePolicyGroupRequest = models.DeletePolicyGroupRequest;
const EnableSSOCamCheckRequest = models.EnableSSOCamCheckRequest;
const DeleteGrafanaIntegrationResponse = models.DeleteGrafanaIntegrationResponse;
const DescribeInstalledPluginsRequest = models.DescribeInstalledPluginsRequest;
const DescribePrometheusZonesResponse = models.DescribePrometheusZonesResponse;
const DescribePrometheusAgentsRequest = models.DescribePrometheusAgentsRequest;
const DescribePolicyGroupInfoCondition = models.DescribePolicyGroupInfoCondition;
const DescribePrometheusInstanceInitStatusRequest = models.DescribePrometheusInstanceInitStatusRequest;
const CreatePrometheusAlertPolicyRequest = models.CreatePrometheusAlertPolicyRequest;
const DescribeBindingPolicyObjectListRequest = models.DescribeBindingPolicyObjectListRequest;
const DescribeProductEventListEvents = models.DescribeProductEventListEvents;
const DescribePolicyConditionListConfigManualPeriodNum = models.DescribePolicyConditionListConfigManualPeriodNum;
const UpgradeGrafanaDashboardResponse = models.UpgradeGrafanaDashboardResponse;
const DescribeAllNamespacesRequest = models.DescribeAllNamespacesRequest;
const PolicyGroup = models.PolicyGroup;
const DescribePrometheusClusterAgentsRequest = models.DescribePrometheusClusterAgentsRequest;
const UnbindPrometheusManagedGrafanaRequest = models.UnbindPrometheusManagedGrafanaRequest;
const DescribePolicyGroupListGroupInstanceGroup = models.DescribePolicyGroupListGroupInstanceGroup;
const DescribeConditionsTemplateListResponse = models.DescribeConditionsTemplateListResponse;
const CreatePrometheusTempRequest = models.CreatePrometheusTempRequest;
const ModifyAlarmPolicyInfoResponse = models.ModifyAlarmPolicyInfoResponse;
const MetricConfig = models.MetricConfig;
const Targets = models.Targets;
const DescribeAlarmEventsRequest = models.DescribeAlarmEventsRequest;
const ModifyAlarmPolicyConditionRequest = models.ModifyAlarmPolicyConditionRequest;
const ModifyAlarmNoticeResponse = models.ModifyAlarmNoticeResponse;
const PrometheusJobTargets = models.PrometheusJobTargets;
const UpdateGrafanaConfigRequest = models.UpdateGrafanaConfigRequest;
const DescribeGrafanaIntegrationsRequest = models.DescribeGrafanaIntegrationsRequest;
const AlarmHistory = models.AlarmHistory;
const PrometheusClusterAgentBasic = models.PrometheusClusterAgentBasic;
const CreatePolicyGroupRequest = models.CreatePolicyGroupRequest;
const CreatePrometheusScrapeJobRequest = models.CreatePrometheusScrapeJobRequest;
const CreateExporterIntegrationResponse = models.CreateExporterIntegrationResponse;
const DescribePolicyConditionListEventMetric = models.DescribePolicyConditionListEventMetric;
const NoticeBindPolicys = models.NoticeBindPolicys;
const UnBindingAllPolicyObjectResponse = models.UnBindingAllPolicyObjectResponse;
const DescribeAlarmNoticesRequest = models.DescribeAlarmNoticesRequest;
const RunPrometheusInstanceResponse = models.RunPrometheusInstanceResponse;
const UpdateExporterIntegrationRequest = models.UpdateExporterIntegrationRequest;
const CheckIsPrometheusNewUserRequest = models.CheckIsPrometheusNewUserRequest;
const DescribeAlarmNoticeResponse = models.DescribeAlarmNoticeResponse;
const DeleteAlertRulesRequest = models.DeleteAlertRulesRequest;
const SyncPrometheusTempRequest = models.SyncPrometheusTempRequest;
const GetMonitorDataResponse = models.GetMonitorDataResponse;
const ReceiverInfo = models.ReceiverInfo;
const DescribeRecordingRulesRequest = models.DescribeRecordingRulesRequest;
const UpgradeGrafanaDashboardRequest = models.UpgradeGrafanaDashboardRequest;
const DeleteAlarmPolicyResponse = models.DeleteAlarmPolicyResponse;
const DescribeInstalledPluginsResponse = models.DescribeInstalledPluginsResponse;
const UpdateGrafanaConfigResponse = models.UpdateGrafanaConfigResponse;
const ModifyPrometheusInstanceAttributesRequest = models.ModifyPrometheusInstanceAttributesRequest;
const DescribePrometheusConfigResponse = models.DescribePrometheusConfigResponse;
const UpdateGrafanaEnvironmentsResponse = models.UpdateGrafanaEnvironmentsResponse;
const DescribeProductEventListRequest = models.DescribeProductEventListRequest;
const CreatePrometheusGlobalNotificationRequest = models.CreatePrometheusGlobalNotificationRequest;
const ModifyPrometheusTempResponse = models.ModifyPrometheusTempResponse;
const DescribeRecordingRulesResponse = models.DescribeRecordingRulesResponse;
const DeleteRecordingRulesResponse = models.DeleteRecordingRulesResponse;
const UpdateGrafanaWhiteListRequest = models.UpdateGrafanaWhiteListRequest;
const UpdatePrometheusAgentStatusRequest = models.UpdatePrometheusAgentStatusRequest;
const DescribeAlarmNoticeCallbacksRequest = models.DescribeAlarmNoticeCallbacksRequest;
const CheckIsPrometheusNewUserResponse = models.CheckIsPrometheusNewUserResponse;
const PutMonitorDataResponse = models.PutMonitorDataResponse;
const DescribePolicyGroupInfoRequest = models.DescribePolicyGroupInfoRequest;
const UpdateAlertRuleStateResponse = models.UpdateAlertRuleStateResponse;
const ModifyPrometheusRecordRuleYamlRequest = models.ModifyPrometheusRecordRuleYamlRequest;
const DeletePrometheusAlertPolicyResponse = models.DeletePrometheusAlertPolicyResponse;
const DescribeProductEventListDimensions = models.DescribeProductEventListDimensions;
const ModifyAlarmPolicyNoticeRequest = models.ModifyAlarmPolicyNoticeRequest;
const DeleteAlarmPolicyRequest = models.DeleteAlarmPolicyRequest;
const EventCondition = models.EventCondition;
const CreateAlertRuleResponse = models.CreateAlertRuleResponse;
const DescribePolicyConditionListConfigManualContinueTime = models.DescribePolicyConditionListConfigManualContinueTime;
const ModifyAlarmPolicyTasksResponse = models.ModifyAlarmPolicyTasksResponse;
const MonitorTypeInfo = models.MonitorTypeInfo;
const DimensionNew = models.DimensionNew;
const DeleteAlertRulesResponse = models.DeleteAlertRulesResponse;
const ModifyAlarmPolicyStatusRequest = models.ModifyAlarmPolicyStatusRequest;
const ConditionsTemp = models.ConditionsTemp;
const Operator = models.Operator;
const DescribeServiceDiscoveryRequest = models.DescribeServiceDiscoveryRequest;
const TaskStepInfo = models.TaskStepInfo;
const DescribePrometheusTempResponse = models.DescribePrometheusTempResponse;
const DescribeGrafanaConfigResponse = models.DescribeGrafanaConfigResponse;
const DescribeAlarmNoticeRequest = models.DescribeAlarmNoticeRequest;
const PrometheusTemp = models.PrometheusTemp;
const DescribePolicyConditionListCondition = models.DescribePolicyConditionListCondition;
const DeletePrometheusTempRequest = models.DeletePrometheusTempRequest;
const EnableGrafanaInternetResponse = models.EnableGrafanaInternetResponse;
const PrometheusRuleKV = models.PrometheusRuleKV;
const BindPrometheusManagedGrafanaResponse = models.BindPrometheusManagedGrafanaResponse;
const ManagementCommand = models.ManagementCommand;
const CreatePrometheusAgentRequest = models.CreatePrometheusAgentRequest;
const DeleteAlarmNoticesResponse = models.DeleteAlarmNoticesResponse;
const DeletePrometheusTempSyncRequest = models.DeletePrometheusTempSyncRequest;
const DescribePrometheusGlobalConfigRequest = models.DescribePrometheusGlobalConfigRequest;
const PrometheusInstanceTenantUsage = models.PrometheusInstanceTenantUsage;
const DescribePrometheusZonesRequest = models.DescribePrometheusZonesRequest;
const ModifyPolicyGroupCondition = models.ModifyPolicyGroupCondition;
const ModifyPolicyGroupRequest = models.ModifyPolicyGroupRequest;
const DescribeBaseMetricsRequest = models.DescribeBaseMetricsRequest;
const DeletePrometheusConfigRequest = models.DeletePrometheusConfigRequest;
const PrometheusAlertPolicyItem = models.PrometheusAlertPolicyItem;
const ModifyPrometheusAgentExternalLabelsRequest = models.ModifyPrometheusAgentExternalLabelsRequest;
const AlarmHierarchicalNotice = models.AlarmHierarchicalNotice;
const BindingPolicyObjectDimension = models.BindingPolicyObjectDimension;
const DescribePrometheusTempRequest = models.DescribePrometheusTempRequest;
const DescribeBasicAlarmListAlarms = models.DescribeBasicAlarmListAlarms;
const CreateAlarmNoticeResponse = models.CreateAlarmNoticeResponse;
const Condition = models.Condition;
const DeleteGrafanaInstanceResponse = models.DeleteGrafanaInstanceResponse;
const PrometheusAgentOverview = models.PrometheusAgentOverview;
const Filter = models.Filter;
const DescribeProductEventListEventsGroupInfo = models.DescribeProductEventListEventsGroupInfo;
const UpdateSSOAccountRequest = models.UpdateSSOAccountRequest;
const CreateSSOAccountResponse = models.CreateSSOAccountResponse;
const PutMonitorDataRequest = models.PutMonitorDataRequest;
const UpdatePrometheusScrapeJobResponse = models.UpdatePrometheusScrapeJobResponse;
const DescribeAlarmPoliciesRequest = models.DescribeAlarmPoliciesRequest;
const PrometheusScrapeJob = models.PrometheusScrapeJob;
const DescribePolicyConditionListConfigManualStatType = models.DescribePolicyConditionListConfigManualStatType;
const IntegrationConfiguration = models.IntegrationConfiguration;
const DescribePrometheusAgentsResponse = models.DescribePrometheusAgentsResponse;
const ModifyPrometheusGlobalNotificationResponse = models.ModifyPrometheusGlobalNotificationResponse;
const CleanGrafanaInstanceResponse = models.CleanGrafanaInstanceResponse;
const CreateAlertRuleRequest = models.CreateAlertRuleRequest;
const ModifyPrometheusRecordRuleYamlResponse = models.ModifyPrometheusRecordRuleYamlResponse;
const DeletePrometheusScrapeJobsResponse = models.DeletePrometheusScrapeJobsResponse;
const DescribeAlarmPolicyRequest = models.DescribeAlarmPolicyRequest;
const UninstallGrafanaDashboardRequest = models.UninstallGrafanaDashboardRequest;
const UpdateGrafanaIntegrationRequest = models.UpdateGrafanaIntegrationRequest;
const DeletePrometheusRecordRuleYamlRequest = models.DeletePrometheusRecordRuleYamlRequest;
const MetricDatum = models.MetricDatum;
const DescribeStatisticDataRequest = models.DescribeStatisticDataRequest;
const GrafanaNotificationChannel = models.GrafanaNotificationChannel;
const SetDefaultAlarmPolicyRequest = models.SetDefaultAlarmPolicyRequest;
const CLSNotice = models.CLSNotice;
const LogAlarmReq = models.LogAlarmReq;
const TerminatePrometheusInstancesResponse = models.TerminatePrometheusInstancesResponse;
const UpdateSSOAccountResponse = models.UpdateSSOAccountResponse;
const DescribeGrafanaInstancesResponse = models.DescribeGrafanaInstancesResponse;
const RunPrometheusInstanceRequest = models.RunPrometheusInstanceRequest;
const UpdateAlertRuleStateRequest = models.UpdateAlertRuleStateRequest;
const SetDefaultAlarmPolicyResponse = models.SetDefaultAlarmPolicyResponse;
const BindingPolicyObjectResponse = models.BindingPolicyObjectResponse;


/**
 * monitor client
 * @class
 */
class MonitorClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("monitor.tencentcloudapi.com", "2018-07-24", credential, region, profile);
    }
    
    /**
     * This API is used to update the Grafana notification channel.
     * @param {UpdateGrafanaNotificationChannelRequest} req
     * @param {function(string, UpdateGrafanaNotificationChannelResponse):void} cb
     * @public
     */
    UpdateGrafanaNotificationChannel(req, cb) {
        let resp = new UpdateGrafanaNotificationChannelResponse();
        this.request("UpdateGrafanaNotificationChannel", req, resp, cb);
    }

    /**
     * This API is used to create a Prometheus alerting rule.

Note that alert object and alert message are special fields of Prometheus Rule Annotations, which need to be passed in through `annotations` and correspond to `summary` and `description` keys respectively. For more information, see [Alerting rules](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/).
     * @param {CreateAlertRuleRequest} req
     * @param {function(string, CreateAlertRuleResponse):void} cb
     * @public
     */
    CreateAlertRule(req, cb) {
        let resp = new CreateAlertRuleResponse();
        this.request("CreateAlertRule", req, resp, cb);
    }

    /**
     * This API is used to disassociate a TMP instance from a cluster.
     * @param {DeletePrometheusClusterAgentRequest} req
     * @param {function(string, DeletePrometheusClusterAgentResponse):void} cb
     * @public
     */
    DeletePrometheusClusterAgent(req, cb) {
        let resp = new DeletePrometheusClusterAgentResponse();
        this.request("DeletePrometheusClusterAgent", req, resp, cb);
    }

    /**
     * This API is used to get the bound object list.
     * @param {DescribeBindingPolicyObjectListRequest} req
     * @param {function(string, DescribeBindingPolicyObjectListResponse):void} cb
     * @public
     */
    DescribeBindingPolicyObjectList(req, cb) {
        let resp = new DescribeBindingPolicyObjectListResponse();
        this.request("DescribeBindingPolicyObjectList", req, resp, cb);
    }

    /**
     * This API is used to update a Prometheus alerting rule.

Note that alert object and alert message are special fields of Prometheus Rule Annotations, which need to be passed in through `annotations` and correspond to `summary` and `description` keys respectively. For more information, see [Alerting rules](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/).
     * @param {UpdateAlertRuleRequest} req
     * @param {function(string, UpdateAlertRuleResponse):void} cb
     * @public
     */
    UpdateAlertRule(req, cb) {
        let resp = new UpdateAlertRuleResponse();
        this.request("UpdateAlertRule", req, resp, cb);
    }

    /**
     * This API is used to modify a TMP 2.0 instance alerting rule.
     * @param {ModifyPrometheusAlertPolicyRequest} req
     * @param {function(string, ModifyPrometheusAlertPolicyResponse):void} cb
     * @public
     */
    ModifyPrometheusAlertPolicy(req, cb) {
        let resp = new ModifyPrometheusAlertPolicyResponse();
        this.request("ModifyPrometheusAlertPolicy", req, resp, cb);
    }

    /**
     *  This API is used to query the usage of a pay-as-you-go Tencent Managed Service for Prometheus (TMP) instance.
     * @param {DescribePrometheusInstanceUsageRequest} req
     * @param {function(string, DescribePrometheusInstanceUsageResponse):void} cb
     * @public
     */
    DescribePrometheusInstanceUsage(req, cb) {
        let resp = new DescribePrometheusInstanceUsageResponse();
        this.request("DescribePrometheusInstanceUsage", req, resp, cb);
    }

    /**
     * This API is used to modify alarm recipients.
     * @param {ModifyAlarmReceiversRequest} req
     * @param {function(string, ModifyAlarmReceiversResponse):void} cb
     * @public
     */
    ModifyAlarmReceivers(req, cb) {
        let resp = new ModifyAlarmReceiversResponse();
        this.request("ModifyAlarmReceivers", req, resp, cb);
    }

    /**
     * This API is used to bind an alarm policy to a specific object.
     * @param {BindingPolicyObjectRequest} req
     * @param {function(string, BindingPolicyObjectResponse):void} cb
     * @public
     */
    BindingPolicyObject(req, cb) {
        let resp = new BindingPolicyObjectResponse();
        this.request("BindingPolicyObject", req, resp, cb);
    }

    /**
     * This API is used to create a Grafana instance.
     * @param {CreateGrafanaInstanceRequest} req
     * @param {function(string, CreateGrafanaInstanceResponse):void} cb
     * @public
     */
    CreateGrafanaInstance(req, cb) {
        let resp = new CreateGrafanaInstanceResponse();
        this.request("CreateGrafanaInstance", req, resp, cb);
    }

    /**
     * This API is used to create an alarm policy.
     * @param {CreateAlarmPolicyRequest} req
     * @param {function(string, CreateAlarmPolicyResponse):void} cb
     * @public
     */
    CreateAlarmPolicy(req, cb) {
        let resp = new CreateAlarmPolicyResponse();
        this.request("CreateAlarmPolicy", req, resp, cb);
    }

    /**
     * This API is used to update the exporter integration configuration.
     * @param {UpdateExporterIntegrationRequest} req
     * @param {function(string, UpdateExporterIntegrationResponse):void} cb
     * @public
     */
    UpdateExporterIntegration(req, cb) {
        let resp = new UpdateExporterIntegrationResponse();
        this.request("UpdateExporterIntegration", req, resp, cb);
    }

    /**
     * This API is used to get the list of recording rules, including those created by CRD resources in the associated cluster.
     * @param {DescribePrometheusRecordRulesRequest} req
     * @param {function(string, DescribePrometheusRecordRulesResponse):void} cb
     * @public
     */
    DescribePrometheusRecordRules(req, cb) {
        let resp = new DescribePrometheusRecordRulesResponse();
        this.request("DescribePrometheusRecordRules", req, resp, cb);
    }

    /**
     * This API is used to update the remarks and permission information of an authorized account in an overwriting manner.
     * @param {UpdateSSOAccountRequest} req
     * @param {function(string, UpdateSSOAccountResponse):void} cb
     * @public
     */
    UpdateSSOAccount(req, cb) {
        let resp = new UpdateSSOAccountResponse();
        this.request("UpdateSSOAccount", req, resp, cb);
    }

    /**
     * This API is used to get the list of clusters associated with the TMP instance.
     * @param {DescribePrometheusClusterAgentsRequest} req
     * @param {function(string, DescribePrometheusClusterAgentsResponse):void} cb
     * @public
     */
    DescribePrometheusClusterAgents(req, cb) {
        let resp = new DescribePrometheusClusterAgentsResponse();
        this.request("DescribePrometheusClusterAgents", req, resp, cb);
    }

    /**
     * This API is used to determine whether the user is new to TMP, that is, whether the user has never created a TMP instance in any region.
     * @param {CheckIsPrometheusNewUserRequest} req
     * @param {function(string, CheckIsPrometheusNewUserResponse):void} cb
     * @public
     */
    CheckIsPrometheusNewUser(req, cb) {
        let resp = new CheckIsPrometheusNewUserResponse();
        this.request("CheckIsPrometheusNewUser", req, resp, cb);
    }

    /**
     * This API is used to list Grafana environment variables.
     * @param {DescribeGrafanaEnvironmentsRequest} req
     * @param {function(string, DescribeGrafanaEnvironmentsResponse):void} cb
     * @public
     */
    DescribeGrafanaEnvironments(req, cb) {
        let resp = new DescribeGrafanaEnvironmentsResponse();
        this.request("DescribeGrafanaEnvironments", req, resp, cb);
    }

    /**
     * This API is used to update a Prometheus recording rule.
     * @param {UpdateRecordingRuleRequest} req
     * @param {function(string, UpdateRecordingRuleResponse):void} cb
     * @public
     */
    UpdateRecordingRule(req, cb) {
        let resp = new UpdateRecordingRuleResponse();
        this.request("UpdateRecordingRule", req, resp, cb);
    }

    /**
     * This API is used to delete a Grafana notification channel.
     * @param {DeleteGrafanaNotificationChannelRequest} req
     * @param {function(string, DeleteGrafanaNotificationChannelResponse):void} cb
     * @public
     */
    DeleteGrafanaNotificationChannel(req, cb) {
        let resp = new DeleteGrafanaNotificationChannelResponse();
        this.request("DeleteGrafanaNotificationChannel", req, resp, cb);
    }

    /**
     * This API is used to query monitoring data by dimension conditions.
     * @param {DescribeStatisticDataRequest} req
     * @param {function(string, DescribeStatisticDataResponse):void} cb
     * @public
     */
    DescribeStatisticData(req, cb) {
        let resp = new DescribeStatisticDataResponse();
        this.request("DescribeStatisticData", req, resp, cb);
    }

    /**
     * This API is used to list Grafana settings, i.e., the `grafana.ini` file content.
     * @param {DescribeGrafanaConfigRequest} req
     * @param {function(string, DescribeGrafanaConfigResponse):void} cb
     * @public
     */
    DescribeGrafanaConfig(req, cb) {
        let resp = new DescribeGrafanaConfigResponse();
        this.request("DescribeGrafanaConfig", req, resp, cb);
    }

    /**
     * This API is used to edit the basic information of a v2.0 alarm policy, including policy name and remarks.
     * @param {ModifyAlarmPolicyInfoRequest} req
     * @param {function(string, ModifyAlarmPolicyInfoResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyInfo(req, cb) {
        let resp = new ModifyAlarmPolicyInfoResponse();
        this.request("ModifyAlarmPolicyInfo", req, resp, cb);
    }

    /**
     * This API is used to enable/disable an alarm policy.
     * @param {ModifyAlarmPolicyStatusRequest} req
     * @param {function(string, ModifyAlarmPolicyStatusResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyStatus(req, cb) {
        let resp = new ModifyAlarmPolicyStatusResponse();
        this.request("ModifyAlarmPolicyStatus", req, resp, cb);
    }

    /**
     * This API is used to delete a Prometheus scrape task.
     * @param {DeletePrometheusScrapeJobsRequest} req
     * @param {function(string, DeletePrometheusScrapeJobsResponse):void} cb
     * @public
     */
    DeletePrometheusScrapeJobs(req, cb) {
        let resp = new DeletePrometheusScrapeJobsResponse();
        this.request("DeletePrometheusScrapeJobs", req, resp, cb);
    }

    /**
     * This API is used to set the Grafana SSO through a Tencent Cloud account.
     * @param {EnableGrafanaSSORequest} req
     * @param {function(string, EnableGrafanaSSOResponse):void} cb
     * @public
     */
    EnableGrafanaSSO(req, cb) {
        let resp = new EnableGrafanaSSOResponse();
        this.request("EnableGrafanaSSO", req, resp, cb);
    }

    /**
     * This API is used to batch delete Prometheus alerting rules.
     * @param {DeleteAlertRulesRequest} req
     * @param {function(string, DeleteAlertRulesResponse):void} cb
     * @public
     */
    DeleteAlertRules(req, cb) {
        let resp = new DeleteAlertRulesResponse();
        this.request("DeleteAlertRules", req, resp, cb);
    }

    /**
     * This API is used to get the attributes of basic metrics.
     * @param {DescribeBaseMetricsRequest} req
     * @param {function(string, DescribeBaseMetricsResponse):void} cb
     * @public
     */
    DescribeBaseMetrics(req, cb) {
        let resp = new DescribeBaseMetricsResponse();
        this.request("DescribeBaseMetrics", req, resp, cb);
    }

    /**
     * This API is used to query the list of alarm events.
     * @param {DescribeAlarmEventsRequest} req
     * @param {function(string, DescribeAlarmEventsResponse):void} cb
     * @public
     */
    DescribeAlarmEvents(req, cb) {
        let resp = new DescribeAlarmEventsResponse();
        this.request("DescribeAlarmEvents", req, resp, cb);
    }

    /**
     * This API is used to delete an alarm notification template.
     * @param {DeleteAlarmNoticesRequest} req
     * @param {function(string, DeleteAlarmNoticesResponse):void} cb
     * @public
     */
    DeleteAlarmNotices(req, cb) {
        let resp = new DeleteAlarmNoticesResponse();
        this.request("DeleteAlarmNotices", req, resp, cb);
    }

    /**
     * This API is used to edit an alarm notification template.
     * @param {ModifyAlarmNoticeRequest} req
     * @param {function(string, ModifyAlarmNoticeResponse):void} cb
     * @public
     */
    ModifyAlarmNotice(req, cb) {
        let resp = new ModifyAlarmNoticeResponse();
        this.request("ModifyAlarmNotice", req, resp, cb);
    }

    /**
     * This API is used to get the details of a TMP instance.
     * @param {DescribePrometheusInstanceDetailRequest} req
     * @param {function(string, DescribePrometheusInstanceDetailResponse):void} cb
     * @public
     */
    DescribePrometheusInstanceDetail(req, cb) {
        let resp = new DescribePrometheusInstanceDetailResponse();
        this.request("DescribePrometheusInstanceDetail", req, resp, cb);
    }

    /**
     * This API is used to create a Prometheus scrape task.
     * @param {CreatePrometheusScrapeJobRequest} req
     * @param {function(string, CreatePrometheusScrapeJobResponse):void} cb
     * @public
     */
    CreatePrometheusScrapeJob(req, cb) {
        let resp = new CreatePrometheusScrapeJobResponse();
        this.request("CreatePrometheusScrapeJob", req, resp, cb);
    }

    /**
     * This API is used to delete an object that is bound to a policy.
     * @param {UnBindingPolicyObjectRequest} req
     * @param {function(string, UnBindingPolicyObjectResponse):void} cb
     * @public
     */
    UnBindingPolicyObject(req, cb) {
        let resp = new UnBindingPolicyObjectResponse();
        this.request("UnBindingPolicyObject", req, resp, cb);
    }

    /**
     * This API is used to get the trigger condition template.
     * @param {DescribeConditionsTemplateListRequest} req
     * @param {function(string, DescribeConditionsTemplateListResponse):void} cb
     * @public
     */
    DescribeConditionsTemplateList(req, cb) {
        let resp = new DescribeConditionsTemplateListResponse();
        this.request("DescribeConditionsTemplateList", req, resp, cb);
    }

    /**
     * This API is used to list Prometheus scrape tasks.
     * @param {DescribePrometheusScrapeJobsRequest} req
     * @param {function(string, DescribePrometheusScrapeJobsResponse):void} cb
     * @public
     */
    DescribePrometheusScrapeJobs(req, cb) {
        let resp = new DescribePrometheusScrapeJobsResponse();
        this.request("DescribePrometheusScrapeJobs", req, resp, cb);
    }

    /**
     * This API is used to associate a cluster with a Cloud Monitor (CM)-integrated Tencent Managed Service for Prometheus (TMP) 2.0 instance.
     * @param {CreatePrometheusClusterAgentRequest} req
     * @param {function(string, CreatePrometheusClusterAgentResponse):void} cb
     * @public
     */
    CreatePrometheusClusterAgent(req, cb) {
        let resp = new CreatePrometheusClusterAgentResponse();
        this.request("CreatePrometheusClusterAgent", req, resp, cb);
    }

    /**
     * This API is used to create a pay-as-you-go Prometheus instance.
     * @param {CreatePrometheusMultiTenantInstancePostPayModeRequest} req
     * @param {function(string, CreatePrometheusMultiTenantInstancePostPayModeResponse):void} cb
     * @public
     */
    CreatePrometheusMultiTenantInstancePostPayMode(req, cb) {
        let resp = new CreatePrometheusMultiTenantInstancePostPayModeResponse();
        this.request("CreatePrometheusMultiTenantInstancePostPayMode", req, resp, cb);
    }

    /**
     * This API is used to update Grafana environment variables.
     * @param {UpdateGrafanaEnvironmentsRequest} req
     * @param {function(string, UpdateGrafanaEnvironmentsResponse):void} cb
     * @public
     */
    UpdateGrafanaEnvironments(req, cb) {
        let resp = new UpdateGrafanaEnvironmentsResponse();
        this.request("UpdateGrafanaEnvironments", req, resp, cb);
    }

    /**
     * This API is used to get basic alarm policy conditions.
     * @param {DescribePolicyConditionListRequest} req
     * @param {function(string, DescribePolicyConditionListResponse):void} cb
     * @public
     */
    DescribePolicyConditionList(req, cb) {
        let resp = new DescribePolicyConditionListResponse();
        this.request("DescribePolicyConditionList", req, resp, cb);
    }

    /**
     * This API is used to modify the trigger condition of an alarm policy.
     * @param {ModifyAlarmPolicyConditionRequest} req
     * @param {function(string, ModifyAlarmPolicyConditionResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyCondition(req, cb) {
        let resp = new ModifyAlarmPolicyConditionResponse();
        this.request("ModifyAlarmPolicyCondition", req, resp, cb);
    }

    /**
     * This API is used to get the command line for Prometheus agent management.
     * @param {GetPrometheusAgentManagementCommandRequest} req
     * @param {function(string, GetPrometheusAgentManagementCommandResponse):void} cb
     * @public
     */
    GetPrometheusAgentManagementCommand(req, cb) {
        let resp = new GetPrometheusAgentManagementCommandResponse();
        this.request("GetPrometheusAgentManagementCommand", req, resp, cb);
    }

    /**
     * This API is used to update a Prometheus scrape task.
     * @param {UpdatePrometheusScrapeJobRequest} req
     * @param {function(string, UpdatePrometheusScrapeJobResponse):void} cb
     * @public
     */
    UpdatePrometheusScrapeJob(req, cb) {
        let resp = new UpdatePrometheusScrapeJobResponse();
        this.request("UpdatePrometheusScrapeJob", req, resp, cb);
    }

    /**
     * This API is used to get the initialization task status of a v2.0 instance.
     * @param {DescribePrometheusInstanceInitStatusRequest} req
     * @param {function(string, DescribePrometheusInstanceInitStatusResponse):void} cb
     * @public
     */
    DescribePrometheusInstanceInitStatus(req, cb) {
        let resp = new DescribePrometheusInstanceInitStatusResponse();
        this.request("DescribePrometheusInstanceInitStatus", req, resp, cb);
    }

    /**
     * This API is used to upgrade a Grafana instance.
     * @param {UpgradeGrafanaInstanceRequest} req
     * @param {function(string, UpgradeGrafanaInstanceResponse):void} cb
     * @public
     */
    UpgradeGrafanaInstance(req, cb) {
        let resp = new UpgradeGrafanaInstanceResponse();
        this.request("UpgradeGrafanaInstance", req, resp, cb);
    }

    /**
     * This API is used to list all Grafana alert channels.
     * @param {DescribeGrafanaChannelsRequest} req
     * @param {function(string, DescribeGrafanaChannelsResponse):void} cb
     * @public
     */
    DescribeGrafanaChannels(req, cb) {
        let resp = new DescribeGrafanaChannelsResponse();
        this.request("DescribeGrafanaChannels", req, resp, cb);
    }

    /**
     * This API is used to delete a Grafana integration configuration.
     * @param {DeleteGrafanaIntegrationRequest} req
     * @param {function(string, DeleteGrafanaIntegrationResponse):void} cb
     * @public
     */
    DeleteGrafanaIntegration(req, cb) {
        let resp = new DeleteGrafanaIntegrationResponse();
        this.request("DeleteGrafanaIntegration", req, resp, cb);
    }

    /**
     * This API is used to bind a Grafana instance.
     * @param {BindPrometheusManagedGrafanaRequest} req
     * @param {function(string, BindPrometheusManagedGrafanaResponse):void} cb
     * @public
     */
    BindPrometheusManagedGrafana(req, cb) {
        let resp = new BindPrometheusManagedGrafanaResponse();
        this.request("BindPrometheusManagedGrafana", req, resp, cb);
    }

    /**
     * This API is used to delete all bound objects.
     * @param {UnBindingAllPolicyObjectRequest} req
     * @param {function(string, UnBindingAllPolicyObjectResponse):void} cb
     * @public
     */
    UnBindingAllPolicyObject(req, cb) {
        let resp = new UnBindingAllPolicyObjectResponse();
        this.request("UnBindingAllPolicyObject", req, resp, cb);
    }

    /**
     * This API is used to delete an alarm policy group.
     * @param {DeletePolicyGroupRequest} req
     * @param {function(string, DeletePolicyGroupResponse):void} cb
     * @public
     */
    DeletePolicyGroup(req, cb) {
        let resp = new DeletePolicyGroupResponse();
        this.request("DeletePolicyGroup", req, resp, cb);
    }

    /**
     * This API is used to list all the monitoring types supported by CM.
     * @param {DescribeMonitorTypesRequest} req
     * @param {function(string, DescribeMonitorTypesResponse):void} cb
     * @public
     */
    DescribeMonitorTypes(req, cb) {
        let resp = new DescribeMonitorTypesResponse();
        this.request("DescribeMonitorTypes", req, resp, cb);
    }

    /**
     * This API is used to set whether to enable CAM authentication during SSO.
     * @param {EnableSSOCamCheckRequest} req
     * @param {function(string, EnableSSOCamCheckResponse):void} cb
     * @public
     */
    EnableSSOCamCheck(req, cb) {
        let resp = new EnableSSOCamCheckResponse();
        this.request("EnableSSOCamCheck", req, resp, cb);
    }

    /**
     * This API is used to install a Grafana plugin.
     * @param {InstallPluginsRequest} req
     * @param {function(string, InstallPluginsResponse):void} cb
     * @public
     */
    InstallPlugins(req, cb) {
        let resp = new InstallPluginsResponse();
        this.request("InstallPlugins", req, resp, cb);
    }

    /**
     * This API is used to create an exporter integration.
     * @param {CreateExporterIntegrationRequest} req
     * @param {function(string, CreateExporterIntegrationResponse):void} cb
     * @public
     */
    CreateExporterIntegration(req, cb) {
        let resp = new CreateExporterIntegrationResponse();
        this.request("CreateExporterIntegration", req, resp, cb);
    }

    /**
     * This API is used to batch delete Prometheus recording rules.
     * @param {DeleteRecordingRulesRequest} req
     * @param {function(string, DeleteRecordingRulesResponse):void} cb
     * @public
     */
    DeleteRecordingRules(req, cb) {
        let resp = new DeleteRecordingRulesResponse();
        this.request("DeleteRecordingRules", req, resp, cb);
    }

    /**
     * This API is used to get the list of product events by page.
     * @param {DescribeProductEventListRequest} req
     * @param {function(string, DescribeProductEventListResponse):void} cb
     * @public
     */
    DescribeProductEventList(req, cb) {
        let resp = new DescribeProductEventListResponse();
        this.request("DescribeProductEventList", req, resp, cb);
    }

    /**
     * This API is used to query the alarm records.

Note: **If you use a sub-account, you can only query the alarm records of authorized projects** or uncategorized products.
     * @param {DescribeAlarmHistoriesRequest} req
     * @param {function(string, DescribeAlarmHistoriesResponse):void} cb
     * @public
     */
    DescribeAlarmHistories(req, cb) {
        let resp = new DescribeAlarmHistoriesResponse();
        this.request("DescribeAlarmHistories", req, resp, cb);
    }

    /**
     * This API is used to create a notification template.
     * @param {CreateAlarmNoticeRequest} req
     * @param {function(string, CreateAlarmNoticeResponse):void} cb
     * @public
     */
    CreateAlarmNotice(req, cb) {
        let resp = new CreateAlarmNoticeResponse();
        this.request("CreateAlarmNotice", req, resp, cb);
    }

    /**
     * This API is used to delete an authorized TCMG user.
     * @param {DeleteSSOAccountRequest} req
     * @param {function(string, DeleteSSOAccountResponse):void} cb
     * @public
     */
    DeleteSSOAccount(req, cb) {
        let resp = new DeleteSSOAccountResponse();
        this.request("DeleteSSOAccount", req, resp, cb);
    }

    /**
     * This API is used to query the details of a single notification template.
     * @param {DescribeAlarmNoticeRequest} req
     * @param {function(string, DescribeAlarmNoticeResponse):void} cb
     * @public
     */
    DescribeAlarmNotice(req, cb) {
        let resp = new DescribeAlarmNoticeResponse();
        this.request("DescribeAlarmNotice", req, resp, cb);
    }

    /**
     * This API is used to create a Grafana integration configuration.
     * @param {CreateGrafanaIntegrationRequest} req
     * @param {function(string, CreateGrafanaIntegrationResponse):void} cb
     * @public
     */
    CreateGrafanaIntegration(req, cb) {
        let resp = new CreateGrafanaIntegrationResponse();
        this.request("CreateGrafanaIntegration", req, resp, cb);
    }

    /**
     * This API is used to get the list of templates, where the default template is always on top.
     * @param {DescribePrometheusTempRequest} req
     * @param {function(string, DescribePrometheusTempResponse):void} cb
     * @public
     */
    DescribePrometheusTemp(req, cb) {
        let resp = new DescribePrometheusTempResponse();
        this.request("DescribePrometheusTemp", req, resp, cb);
    }

    /**
     * This API is used to update the Grafana allowlist.
     * @param {UpdateGrafanaWhiteListRequest} req
     * @param {function(string, UpdateGrafanaWhiteListResponse):void} cb
     * @public
     */
    UpdateGrafanaWhiteList(req, cb) {
        let resp = new UpdateGrafanaWhiteListResponse();
        this.request("UpdateGrafanaWhiteList", req, resp, cb);
    }

    /**
     * This API is used to set an alarm policy as the default policy in the current policy type under the current project.
Alarm policies in the same type under the project will be set as non-default.
     * @param {SetDefaultAlarmPolicyRequest} req
     * @param {function(string, SetDefaultAlarmPolicyResponse):void} cb
     * @public
     */
    SetDefaultAlarmPolicy(req, cb) {
        let resp = new SetDefaultAlarmPolicyResponse();
        this.request("SetDefaultAlarmPolicy", req, resp, cb);
    }

    /**
     * This API is used to delete a Grafana instance.
     * @param {DeleteGrafanaInstanceRequest} req
     * @param {function(string, DeleteGrafanaInstanceResponse):void} cb
     * @public
     */
    DeleteGrafanaInstance(req, cb) {
        let resp = new DeleteGrafanaInstanceResponse();
        this.request("DeleteGrafanaInstance", req, resp, cb);
    }

    /**
     * This API is used to delete Prometheus configurations. If the target cluster does not exist, a result indicating success will be returned.
     * @param {DeletePrometheusConfigRequest} req
     * @param {function(string, DeletePrometheusConfigResponse):void} cb
     * @public
     */
    DeletePrometheusConfig(req, cb) {
        let resp = new DeletePrometheusConfigResponse();
        this.request("DeletePrometheusConfig", req, resp, cb);
    }

    /**
     * This API is used to authorize a Grafana instance to another Tencent Cloud user.
     * @param {CreateSSOAccountRequest} req
     * @param {function(string, CreateSSOAccountResponse):void} cb
     * @public
     */
    CreateSSOAccount(req, cb) {
        let resp = new CreateSSOAccountResponse();
        this.request("CreateSSOAccount", req, resp, cb);
    }

    /**
     * This API is used to send a custom alarm notification.
     * @param {SendCustomAlarmMsgRequest} req
     * @param {function(string, SendCustomAlarmMsgResponse):void} cb
     * @public
     */
    SendCustomAlarmMsg(req, cb) {
        let resp = new SendCustomAlarmMsgResponse();
        this.request("SendCustomAlarmMsg", req, resp, cb);
    }

    /**
     * This API is used to modify the alarm notification template bound to an alarm policy.
     * @param {ModifyAlarmPolicyNoticeRequest} req
     * @param {function(string, ModifyAlarmPolicyNoticeResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyNotice(req, cb) {
        let resp = new ModifyAlarmPolicyNoticeResponse();
        this.request("ModifyAlarmPolicyNotice", req, resp, cb);
    }

    /**
     * This API is used to set the Grafana public network access.
     * @param {EnableGrafanaInternetRequest} req
     * @param {function(string, EnableGrafanaInternetResponse):void} cb
     * @public
     */
    EnableGrafanaInternet(req, cb) {
        let resp = new EnableGrafanaInternetResponse();
        this.request("EnableGrafanaInternet", req, resp, cb);
    }

    /**
     * This API is used to create a Grafana notification channel.
     * @param {CreateGrafanaNotificationChannelRequest} req
     * @param {function(string, CreateGrafanaNotificationChannelResponse):void} cb
     * @public
     */
    CreateGrafanaNotificationChannel(req, cb) {
        let resp = new CreateGrafanaNotificationChannelResponse();
        this.request("CreateGrafanaNotificationChannel", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a Grafana instance.
     * @param {ModifyGrafanaInstanceRequest} req
     * @param {function(string, ModifyGrafanaInstanceResponse):void} cb
     * @public
     */
    ModifyGrafanaInstance(req, cb) {
        let resp = new ModifyGrafanaInstanceResponse();
        this.request("ModifyGrafanaInstance", req, resp, cb);
    }

    /**
     * This API is used to restore a Grafana instance.
     * @param {ResumeGrafanaInstanceRequest} req
     * @param {function(string, ResumeGrafanaInstanceResponse):void} cb
     * @public
     */
    ResumeGrafanaInstance(req, cb) {
        let resp = new ResumeGrafanaInstanceResponse();
        this.request("ResumeGrafanaInstance", req, resp, cb);
    }

    /**
     * This API is used to create a TMP template.
     * @param {CreatePrometheusTempRequest} req
     * @param {function(string, CreatePrometheusTempResponse):void} cb
     * @public
     */
    CreatePrometheusTemp(req, cb) {
        let resp = new CreatePrometheusTempResponse();
        this.request("CreatePrometheusTemp", req, resp, cb);
    }

    /**
     * This API is used to list all authorized accounts of the current Grafana instance.
     * @param {DescribeSSOAccountRequest} req
     * @param {function(string, DescribeSSOAccountResponse):void} cb
     * @public
     */
    DescribeSSOAccount(req, cb) {
        let resp = new DescribeSSOAccountResponse();
        this.request("DescribeSSOAccount", req, resp, cb);
    }

    /**
     * This API is used to get the basic alarm list.
     * @param {DescribeBasicAlarmListRequest} req
     * @param {function(string, DescribeBasicAlarmListResponse):void} cb
     * @public
     */
    DescribeBasicAlarmList(req, cb) {
        let resp = new DescribeBasicAlarmListResponse();
        this.request("DescribeBasicAlarmList", req, resp, cb);
    }

    /**
     * This API is used to create a Prometheus CVM agent.
     * @param {CreatePrometheusAgentRequest} req
     * @param {function(string, CreatePrometheusAgentResponse):void} cb
     * @public
     */
    CreatePrometheusAgent(req, cb) {
        let resp = new CreatePrometheusAgentResponse();
        this.request("CreatePrometheusAgent", req, resp, cb);
    }

    /**
     * This API is used to sync a template to an instance or cluster. It takes effect for v2 instances.
     * @param {SyncPrometheusTempRequest} req
     * @param {function(string, SyncPrometheusTempResponse):void} cb
     * @public
     */
    SyncPrometheusTemp(req, cb) {
        let resp = new SyncPrometheusTempResponse();
        this.request("SyncPrometheusTemp", req, resp, cb);
    }

    /**
     * This API is used to create a global alert notification channel.
     * @param {CreatePrometheusGlobalNotificationRequest} req
     * @param {function(string, CreatePrometheusGlobalNotificationResponse):void} cb
     * @public
     */
    CreatePrometheusGlobalNotification(req, cb) {
        let resp = new CreatePrometheusGlobalNotificationResponse();
        this.request("CreatePrometheusGlobalNotification", req, resp, cb);
    }

    /**
     * This API is used to update the status of a Prometheus alerting rule.
     * @param {UpdateAlertRuleStateRequest} req
     * @param {function(string, UpdateAlertRuleStateResponse):void} cb
     * @public
     */
    UpdateAlertRuleState(req, cb) {
        let resp = new UpdateAlertRuleStateResponse();
        this.request("UpdateAlertRuleState", req, resp, cb);
    }

    /**
     * This API is used to modify a template.
     * @param {ModifyPrometheusTempRequest} req
     * @param {function(string, ModifyPrometheusTempResponse):void} cb
     * @public
     */
    ModifyPrometheusTemp(req, cb) {
        let resp = new ModifyPrometheusTempResponse();
        this.request("ModifyPrometheusTemp", req, resp, cb);
    }

    /**
     * This API is used to unbind a Grafana instance from an instance.
     * @param {UnbindPrometheusManagedGrafanaRequest} req
     * @param {function(string, UnbindPrometheusManagedGrafanaResponse):void} cb
     * @public
     */
    UnbindPrometheusManagedGrafana(req, cb) {
        let resp = new UnbindPrometheusManagedGrafanaResponse();
        this.request("UnbindPrometheusManagedGrafana", req, resp, cb);
    }

    /**
     * This API is used to initialize a TMP instance, which is called when the integration center is enabled.
     * @param {RunPrometheusInstanceRequest} req
     * @param {function(string, RunPrometheusInstanceResponse):void} cb
     * @public
     */
    RunPrometheusInstance(req, cb) {
        let resp = new RunPrometheusInstanceResponse();
        this.request("RunPrometheusInstance", req, resp, cb);
    }

    /**
     * This API is used to query the list of exporter integrations.
     * @param {DescribeExporterIntegrationsRequest} req
     * @param {function(string, DescribeExporterIntegrationsResponse):void} cb
     * @public
     */
    DescribeExporterIntegrations(req, cb) {
        let resp = new DescribeExporterIntegrationsResponse();
        this.request("DescribeExporterIntegrations", req, resp, cb);
    }

    /**
     * This API is used to list the plugins installed in an instance.
     * @param {DescribeInstalledPluginsRequest} req
     * @param {function(string, DescribeInstalledPluginsResponse):void} cb
     * @public
     */
    DescribeInstalledPlugins(req, cb) {
        let resp = new DescribeInstalledPluginsResponse();
        this.request("DescribeInstalledPlugins", req, resp, cb);
    }

    /**
     * This API is used to query the global alert notification channel.
     * @param {DescribePrometheusGlobalNotificationRequest} req
     * @param {function(string, DescribePrometheusGlobalNotificationResponse):void} cb
     * @public
     */
    DescribePrometheusGlobalNotification(req, cb) {
        let resp = new DescribePrometheusGlobalNotificationResponse();
        this.request("DescribePrometheusGlobalNotification", req, resp, cb);
    }

    /**
     * This API is used to update a Grafana dashboard.
     * @param {UpgradeGrafanaDashboardRequest} req
     * @param {function(string, UpgradeGrafanaDashboardResponse):void} cb
     * @public
     */
    UpgradeGrafanaDashboard(req, cb) {
        let resp = new UpgradeGrafanaDashboardResponse();
        this.request("UpgradeGrafanaDashboard", req, resp, cb);
    }

    /**
     * This API is used to query the list of notification templates.
     * @param {DescribeAlarmNoticesRequest} req
     * @param {function(string, DescribeAlarmNoticesResponse):void} cb
     * @public
     */
    DescribeAlarmNotices(req, cb) {
        let resp = new DescribeAlarmNoticesResponse();
        this.request("DescribeAlarmNotices", req, resp, cb);
    }

    /**
     * This API is used to list Grafana DNS configurations.
     * @param {DescribeDNSConfigRequest} req
     * @param {function(string, DescribeDNSConfigResponse):void} cb
     * @public
     */
    DescribeDNSConfig(req, cb) {
        let resp = new DescribeDNSConfigResponse();
        this.request("DescribeDNSConfig", req, resp, cb);
    }

    /**
     * This API is used to modify the global alert notification channel.
     * @param {ModifyPrometheusGlobalNotificationRequest} req
     * @param {function(string, ModifyPrometheusGlobalNotificationResponse):void} cb
     * @public
     */
    ModifyPrometheusGlobalNotification(req, cb) {
        let resp = new ModifyPrometheusGlobalNotificationResponse();
        this.request("ModifyPrometheusGlobalNotification", req, resp, cb);
    }

    /**
     * This API is used to get the list of instances associated with the target cluster.
     * @param {DescribePrometheusAgentInstancesRequest} req
     * @param {function(string, DescribePrometheusAgentInstancesResponse):void} cb
     * @public
     */
    DescribePrometheusAgentInstances(req, cb) {
        let resp = new DescribePrometheusAgentInstancesResponse();
        this.request("DescribePrometheusAgentInstances", req, resp, cb);
    }

    /**
     * This API is used to delete a recording instance.
     * @param {DeletePrometheusRecordRuleYamlRequest} req
     * @param {function(string, DeletePrometheusRecordRuleYamlResponse):void} cb
     * @public
     */
    DeletePrometheusRecordRuleYaml(req, cb) {
        let resp = new DeletePrometheusRecordRuleYamlResponse();
        this.request("DeletePrometheusRecordRuleYaml", req, resp, cb);
    }

    /**
     * This API is used to query the details of one or multiple instances.
<ul>
<li>You can query the details of an instance by its ID, name, or status.</li>
<li>If this parameter is empty, the information of a certain number of instances under the current account will be returned. The number is specified by `Limit` and is 20 by default.</li>
</ul>
     * @param {DescribePrometheusInstancesRequest} req
     * @param {function(string, DescribePrometheusInstancesResponse):void} cb
     * @public
     */
    DescribePrometheusInstances(req, cb) {
        let resp = new DescribePrometheusInstancesResponse();
        this.request("DescribePrometheusInstances", req, resp, cb);
    }

    /**
     * This API is used to list all Grafana instances under a user account.
     * @param {DescribeGrafanaInstancesRequest} req
     * @param {function(string, DescribeGrafanaInstancesResponse):void} cb
     * @public
     */
    DescribeGrafanaInstances(req, cb) {
        let resp = new DescribeGrafanaInstancesResponse();
        this.request("DescribeGrafanaInstances", req, resp, cb);
    }

    /**
     * This API is used to modify a Prometheus recording instance through YAML.
     * @param {ModifyPrometheusRecordRuleYamlRequest} req
     * @param {function(string, ModifyPrometheusRecordRuleYamlResponse):void} cb
     * @public
     */
    ModifyPrometheusRecordRuleYaml(req, cb) {
        let resp = new ModifyPrometheusRecordRuleYamlResponse();
        this.request("ModifyPrometheusRecordRuleYaml", req, resp, cb);
    }

    /**
     * This API is used to update the Grafana configuration.
     * @param {UpdateGrafanaConfigRequest} req
     * @param {function(string, UpdateGrafanaConfigResponse):void} cb
     * @public
     */
    UpdateGrafanaConfig(req, cb) {
        let resp = new UpdateGrafanaConfigResponse();
        this.request("UpdateGrafanaConfig", req, resp, cb);
    }

    /**
     * This API is used to list Grafana notification channels.
     * @param {DescribeGrafanaNotificationChannelsRequest} req
     * @param {function(string, DescribeGrafanaNotificationChannelsResponse):void} cb
     * @public
     */
    DescribeGrafanaNotificationChannels(req, cb) {
        let resp = new DescribeGrafanaNotificationChannelsResponse();
        this.request("DescribeGrafanaNotificationChannels", req, resp, cb);
    }

    /**
     * This API is used to modify the external labels of the associated cluster.
     * @param {ModifyPrometheusAgentExternalLabelsRequest} req
     * @param {function(string, ModifyPrometheusAgentExternalLabelsResponse):void} cb
     * @public
     */
    ModifyPrometheusAgentExternalLabels(req, cb) {
        let resp = new ModifyPrometheusAgentExternalLabelsResponse();
        this.request("ModifyPrometheusAgentExternalLabels", req, resp, cb);
    }

    /**
     * This API is used to update policy group.
     * @param {ModifyPolicyGroupRequest} req
     * @param {function(string, ModifyPolicyGroupResponse):void} cb
     * @public
     */
    ModifyPolicyGroup(req, cb) {
        let resp = new ModifyPolicyGroupResponse();
        this.request("ModifyPolicyGroup", req, resp, cb);
    }

    /**
     * This API is used to get the platform event list.
     * @param {DescribeAccidentEventListRequest} req
     * @param {function(string, DescribeAccidentEventListResponse):void} cb
     * @public
     */
    DescribeAccidentEventList(req, cb) {
        let resp = new DescribeAccidentEventListResponse();
        this.request("DescribeAccidentEventList", req, resp, cb);
    }

    /**
     * This API is used to get the information of instances associated with a template. It takes effect for v2 instances.
     * @param {DescribePrometheusTempSyncRequest} req
     * @param {function(string, DescribePrometheusTempSyncResponse):void} cb
     * @public
     */
    DescribePrometheusTempSync(req, cb) {
        let resp = new DescribePrometheusTempSyncResponse();
        this.request("DescribePrometheusTempSync", req, resp, cb);
    }

    /**
     * This API is used to list the AZs of Tencent Managed Service for Prometheus (TMP).
     * @param {DescribePrometheusZonesRequest} req
     * @param {function(string, DescribePrometheusZonesResponse):void} cb
     * @public
     */
    DescribePrometheusZones(req, cb) {
        let resp = new DescribePrometheusZonesResponse();
        this.request("DescribePrometheusZones", req, resp, cb);
    }

    /**
     * This API is used to query the list of alarm metrics.
     * @param {DescribeAlarmMetricsRequest} req
     * @param {function(string, DescribeAlarmMetricsResponse):void} cb
     * @public
     */
    DescribeAlarmMetrics(req, cb) {
        let resp = new DescribeAlarmMetricsResponse();
        this.request("DescribeAlarmMetrics", req, resp, cb);
    }

    /**
     * This API is used to modify the tasks triggered by alarm policy, which are listed by the value of the `TriggerTasks` field. If an empty array is passed in for `TriggerTasks`, it means unbinding all the trigger tasks from the policy.
     * @param {ModifyAlarmPolicyTasksRequest} req
     * @param {function(string, ModifyAlarmPolicyTasksResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyTasks(req, cb) {
        let resp = new ModifyAlarmPolicyTasksResponse();
        this.request("ModifyAlarmPolicyTasks", req, resp, cb);
    }

    /**
     * This API is used to delete an exporter integration.
     * @param {DeleteExporterIntegrationRequest} req
     * @param {function(string, DeleteExporterIntegrationResponse):void} cb
     * @public
     */
    DeleteExporterIntegration(req, cb) {
        let resp = new DeleteExporterIntegrationResponse();
        this.request("DeleteExporterIntegration", req, resp, cb);
    }

    /**
     * This API is used to delete a TMP 2.0 instance alerting rule.
     * @param {DeletePrometheusAlertPolicyRequest} req
     * @param {function(string, DeletePrometheusAlertPolicyResponse):void} cb
     * @public
     */
    DeletePrometheusAlertPolicy(req, cb) {
        let resp = new DeletePrometheusAlertPolicyResponse();
        this.request("DeletePrometheusAlertPolicy", req, resp, cb);
    }

    /**
     * This API is used to update the status of a Prometheus CVM agent.
     * @param {UpdatePrometheusAgentStatusRequest} req
     * @param {function(string, UpdatePrometheusAgentStatusResponse):void} cb
     * @public
     */
    UpdatePrometheusAgentStatus(req, cb) {
        let resp = new UpdatePrometheusAgentStatusResponse();
        this.request("UpdatePrometheusAgentStatus", req, resp, cb);
    }

    /**
     * This API is used to create a Prometheus recording rule.
     * @param {CreateRecordingRuleRequest} req
     * @param {function(string, CreateRecordingRuleResponse):void} cb
     * @public
     */
    CreateRecordingRule(req, cb) {
        let resp = new CreateRecordingRuleResponse();
        this.request("CreateRecordingRule", req, resp, cb);
    }

    /**
     * This API is used to query a Prometheus alerting rule.
     * @param {DescribeAlertRulesRequest} req
     * @param {function(string, DescribeAlertRulesResponse):void} cb
     * @public
     */
    DescribeAlertRules(req, cb) {
        let resp = new DescribeAlertRulesResponse();
        this.request("DescribeAlertRules", req, resp, cb);
    }

    /**
     * This API is used to get the instance-level scrape configurations.
     * @param {DescribePrometheusGlobalConfigRequest} req
     * @param {function(string, DescribePrometheusGlobalConfigResponse):void} cb
     * @public
     */
    DescribePrometheusGlobalConfig(req, cb) {
        let resp = new DescribePrometheusGlobalConfigResponse();
        this.request("DescribePrometheusGlobalConfig", req, resp, cb);
    }

    /**
     * This API is used to list Prometheus CVM agents.
     * @param {DescribePrometheusAgentsRequest} req
     * @param {function(string, DescribePrometheusAgentsResponse):void} cb
     * @public
     */
    DescribePrometheusAgents(req, cb) {
        let resp = new DescribePrometheusAgentsResponse();
        this.request("DescribePrometheusAgents", req, resp, cb);
    }

    /**
     * This API is used to query the list of alarm policies.
     * @param {DescribeAlarmPoliciesRequest} req
     * @param {function(string, DescribeAlarmPoliciesResponse):void} cb
     * @public
     */
    DescribeAlarmPolicies(req, cb) {
        let resp = new DescribeAlarmPoliciesResponse();
        this.request("DescribeAlarmPolicies", req, resp, cb);
    }

    /**
     * This API is used to get the targets information.
     * @param {DescribePrometheusTargetsTMPRequest} req
     * @param {function(string, DescribePrometheusTargetsTMPResponse):void} cb
     * @public
     */
    DescribePrometheusTargetsTMP(req, cb) {
        let resp = new DescribePrometheusTargetsTMPResponse();
        this.request("DescribePrometheusTargetsTMP", req, resp, cb);
    }

    /**
     * This API is used to list the Grafana allowlist.
     * @param {DescribeGrafanaWhiteListRequest} req
     * @param {function(string, DescribeGrafanaWhiteListResponse):void} cb
     * @public
     */
    DescribeGrafanaWhiteList(req, cb) {
        let resp = new DescribeGrafanaWhiteListResponse();
        this.request("DescribeGrafanaWhiteList", req, resp, cb);
    }

    /**
     * This API is used to create an alerting rule.
     * @param {CreatePrometheusAlertPolicyRequest} req
     * @param {function(string, CreatePrometheusAlertPolicyResponse):void} cb
     * @public
     */
    CreatePrometheusAlertPolicy(req, cb) {
        let resp = new CreatePrometheusAlertPolicyResponse();
        this.request("CreatePrometheusAlertPolicy", req, resp, cb);
    }

    /**
     * This API is used to forcibly terminate a Grafana instance.
     * @param {CleanGrafanaInstanceRequest} req
     * @param {function(string, CleanGrafanaInstanceResponse):void} cb
     * @public
     */
    CleanGrafanaInstance(req, cb) {
        let resp = new CleanGrafanaInstanceResponse();
        this.request("CleanGrafanaInstance", req, resp, cb);
    }

    /**
     * This API is used to delete a Grafana dashboard.
     * @param {UninstallGrafanaDashboardRequest} req
     * @param {function(string, UninstallGrafanaDashboardResponse):void} cb
     * @public
     */
    UninstallGrafanaDashboard(req, cb) {
        let resp = new UninstallGrafanaDashboardResponse();
        this.request("UninstallGrafanaDashboard", req, resp, cb);
    }

    /**
     * This API is used to get the list of v2.0 instance alerting rules.
     * @param {DescribePrometheusAlertPolicyRequest} req
     * @param {function(string, DescribePrometheusAlertPolicyResponse):void} cb
     * @public
     */
    DescribePrometheusAlertPolicy(req, cb) {
        let resp = new DescribePrometheusAlertPolicyResponse();
        this.request("DescribePrometheusAlertPolicy", req, resp, cb);
    }

    /**
     * This API is used to get the list of basic policy alarm groups.
     * @param {DescribePolicyGroupListRequest} req
     * @param {function(string, DescribePolicyGroupListResponse):void} cb
     * @public
     */
    DescribePolicyGroupList(req, cb) {
        let resp = new DescribePolicyGroupListResponse();
        this.request("DescribePolicyGroupList", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a Prometheus instance.
     * @param {ModifyPrometheusInstanceAttributesRequest} req
     * @param {function(string, ModifyPrometheusInstanceAttributesResponse):void} cb
     * @public
     */
    ModifyPrometheusInstanceAttributes(req, cb) {
        let resp = new ModifyPrometheusInstanceAttributesResponse();
        this.request("ModifyPrometheusInstanceAttributes", req, resp, cb);
    }

    /**
     * This API is used to delete an alarm policy.
     * @param {DeleteAlarmPolicyRequest} req
     * @param {function(string, DeleteAlarmPolicyResponse):void} cb
     * @public
     */
    DeleteAlarmPolicy(req, cb) {
        let resp = new DeleteAlarmPolicyResponse();
        this.request("DeleteAlarmPolicy", req, resp, cb);
    }

    /**
     * This API is used to get the monitoring data of Tencent Cloud services except TKE. To pull TKE’s monitoring data, use the [DescribeStatisticData](https://www.tencentcloud.com/document/product/248/39481) API.
You can get the monitoring data of a Tencent Cloud service by passing in its namespace, object dimension description, and monitoring metrics.
API call rate limit: 20 calls/second (1,200 calls/minute). A single request can get the data of up to 10 instances for up to 1,440 data points.
If you need to call a large number of APIs to pull metrics or objects at a time, some APIs may fail to be called due to the rate limit. We suggest you evenly arrange API calls at a time granularity.

     * @param {GetMonitorDataRequest} req
     * @param {function(string, GetMonitorDataResponse):void} cb
     * @public
     */
    GetMonitorData(req, cb) {
        let resp = new GetMonitorDataResponse();
        this.request("GetMonitorData", req, resp, cb);
    }

    /**
     * 对应的功能控制台及后端服务已于2年前下线，剩余该API接口未下线。

This API is not deprecated, but its related console features and backend services were deactivated two years ago.

The default API request rate limit is 50 requests/sec.
The default upper limit on metrics of a single tenant is 100.
A maximum of 30 metric/value pairs can be reported at a time. When an error is returned for a request, no metrics/values in the request will be saved.

The reporting timestamp is the timestamp when you want to save the data. We recommend that you construct a timestamp at integer minutes.
The time range of a timestamp is from 300 seconds before the current time to the current time.
The data of the same IP metric/value pair must be reported by minute in chronological order.
     * @param {PutMonitorDataRequest} req
     * @param {function(string, PutMonitorDataResponse):void} cb
     * @public
     */
    PutMonitorData(req, cb) {
        let resp = new PutMonitorDataResponse();
        this.request("PutMonitorData", req, resp, cb);
    }

    /**
     * This API is used to update the Grafana DNS configuration.
     * @param {UpdateDNSConfigRequest} req
     * @param {function(string, UpdateDNSConfigResponse):void} cb
     * @public
     */
    UpdateDNSConfig(req, cb) {
        let resp = new UpdateDNSConfigResponse();
        this.request("UpdateDNSConfig", req, resp, cb);
    }

    /**
     * This API is used to list Prometheus scrape configurations in TKE.
<p>Note: The prerequisite is that the corresponding TKE service has been integrated through the Prometheus console. For more information, see
<a href="https://intl.cloud.tencent.com/document/product/248/48859?from_cn_redirect=1" target="_blank">Agent Management</a>.</p>
     * @param {DescribeServiceDiscoveryRequest} req
     * @param {function(string, DescribeServiceDiscoveryResponse):void} cb
     * @public
     */
    DescribeServiceDiscovery(req, cb) {
        let resp = new DescribeServiceDiscoveryResponse();
        this.request("DescribeServiceDiscovery", req, resp, cb);
    }

    /**
     * This API is used to list installed Grafana integrations.
     * @param {DescribeGrafanaIntegrationsRequest} req
     * @param {function(string, DescribeGrafanaIntegrationsResponse):void} cb
     * @public
     */
    DescribeGrafanaIntegrations(req, cb) {
        let resp = new DescribeGrafanaIntegrationsResponse();
        this.request("DescribeGrafanaIntegrations", req, resp, cb);
    }

    /**
     * This API is used to get the Prometheus configuration.
     * @param {DescribePrometheusConfigRequest} req
     * @param {function(string, DescribePrometheusConfigResponse):void} cb
     * @public
     */
    DescribePrometheusConfig(req, cb) {
        let resp = new DescribePrometheusConfigResponse();
        this.request("DescribePrometheusConfig", req, resp, cb);
    }

    /**
     * This API is used to get details of a basic policy group.
     * @param {DescribePolicyGroupInfoRequest} req
     * @param {function(string, DescribePolicyGroupInfoResponse):void} cb
     * @public
     */
    DescribePolicyGroupInfo(req, cb) {
        let resp = new DescribePolicyGroupInfoResponse();
        this.request("DescribePolicyGroupInfo", req, resp, cb);
    }

    /**
     * This API is used to get the YAML list of Prometheus recording rules.
     * @param {DescribePrometheusRecordRuleYamlRequest} req
     * @param {function(string, DescribePrometheusRecordRuleYamlResponse):void} cb
     * @public
     */
    DescribePrometheusRecordRuleYaml(req, cb) {
        let resp = new DescribePrometheusRecordRuleYamlResponse();
        this.request("DescribePrometheusRecordRuleYaml", req, resp, cb);
    }

    /**
     * This API is used to query all namespaces.
     * @param {DescribeAllNamespacesRequest} req
     * @param {function(string, DescribeAllNamespacesResponse):void} cb
     * @public
     */
    DescribeAllNamespaces(req, cb) {
        let resp = new DescribeAllNamespacesResponse();
        this.request("DescribeAllNamespaces", req, resp, cb);
    }

    /**
     * This API is used to create a Prometheus scrape configuration in TKE.
<p>Note: The prerequisite is that the corresponding TKE service has been integrated through the Prometheus console. For more information, see
<a href="https://intl.cloud.tencent.com/document/product/248/48859?from_cn_redirect=1" target="_blank">Agent Management</a>.</p>
     * @param {CreateServiceDiscoveryRequest} req
     * @param {function(string, CreateServiceDiscoveryResponse):void} cb
     * @public
     */
    CreateServiceDiscovery(req, cb) {
        let resp = new CreateServiceDiscoveryResponse();
        this.request("CreateServiceDiscovery", req, resp, cb);
    }

    /**
     * This API is used to create a recording rule in the YAML way.
     * @param {CreatePrometheusRecordRuleYamlRequest} req
     * @param {function(string, CreatePrometheusRecordRuleYamlResponse):void} cb
     * @public
     */
    CreatePrometheusRecordRuleYaml(req, cb) {
        let resp = new CreatePrometheusRecordRuleYamlResponse();
        this.request("CreatePrometheusRecordRuleYaml", req, resp, cb);
    }

    /**
     * This API is used to delete a TMP template.
     * @param {DeletePrometheusTempRequest} req
     * @param {function(string, DeletePrometheusTempResponse):void} cb
     * @public
     */
    DeletePrometheusTemp(req, cb) {
        let resp = new DeletePrometheusTempResponse();
        this.request("DeletePrometheusTemp", req, resp, cb);
    }

    /**
     * This API is used to obtain all the callback URLs of an alarm notification template.
     * @param {DescribeAlarmNoticeCallbacksRequest} req
     * @param {function(string, DescribeAlarmNoticeCallbacksResponse):void} cb
     * @public
     */
    DescribeAlarmNoticeCallbacks(req, cb) {
        let resp = new DescribeAlarmNoticeCallbacksResponse();
        this.request("DescribeAlarmNoticeCallbacks", req, resp, cb);
    }

    /**
     * This API is used to delete the data of a Prometheus instance. The specified instance must be terminated first.
     * @param {DestroyPrometheusInstanceRequest} req
     * @param {function(string, DestroyPrometheusInstanceResponse):void} cb
     * @public
     */
    DestroyPrometheusInstance(req, cb) {
        let resp = new DestroyPrometheusInstanceResponse();
        this.request("DestroyPrometheusInstance", req, resp, cb);
    }

    /**
     * This API is used to delete installed plugins.
     * @param {UninstallGrafanaPluginsRequest} req
     * @param {function(string, UninstallGrafanaPluginsResponse):void} cb
     * @public
     */
    UninstallGrafanaPlugins(req, cb) {
        let resp = new UninstallGrafanaPluginsResponse();
        this.request("UninstallGrafanaPlugins", req, resp, cb);
    }

    /**
     * This API is used to update the Grafana integration configuration.
     * @param {UpdateGrafanaIntegrationRequest} req
     * @param {function(string, UpdateGrafanaIntegrationResponse):void} cb
     * @public
     */
    UpdateGrafanaIntegration(req, cb) {
        let resp = new UpdateGrafanaIntegrationResponse();
        this.request("UpdateGrafanaIntegration", req, resp, cb);
    }

    /**
     * This API is used to add a policy group.
     * @param {CreatePolicyGroupRequest} req
     * @param {function(string, CreatePolicyGroupResponse):void} cb
     * @public
     */
    CreatePolicyGroup(req, cb) {
        let resp = new CreatePolicyGroupResponse();
        this.request("CreatePolicyGroup", req, resp, cb);
    }

    /**
     * This API is used to terminate a pay-as-you-go Prometheus instance.
     * @param {TerminatePrometheusInstancesRequest} req
     * @param {function(string, TerminatePrometheusInstancesResponse):void} cb
     * @public
     */
    TerminatePrometheusInstances(req, cb) {
        let resp = new TerminatePrometheusInstancesResponse();
        this.request("TerminatePrometheusInstances", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of Tencent Managed Service for Prometheus (TMP) instances and the clusters associated with them.
     * @param {DescribePrometheusInstancesOverviewRequest} req
     * @param {function(string, DescribePrometheusInstancesOverviewResponse):void} cb
     * @public
     */
    DescribePrometheusInstancesOverview(req, cb) {
        let resp = new DescribePrometheusInstancesOverviewResponse();
        this.request("DescribePrometheusInstancesOverview", req, resp, cb);
    }

    /**
     * This API is used to unsync a template, which will delete the configuration generated by the template in the target. It takes effect for v2 instances.
     * @param {DeletePrometheusTempSyncRequest} req
     * @param {function(string, DeletePrometheusTempSyncResponse):void} cb
     * @public
     */
    DeletePrometheusTempSync(req, cb) {
        let resp = new DeletePrometheusTempSyncResponse();
        this.request("DeletePrometheusTempSync", req, resp, cb);
    }

    /**
     * This API is used to create Prometheus configurations.
     * @param {CreatePrometheusConfigRequest} req
     * @param {function(string, CreatePrometheusConfigResponse):void} cb
     * @public
     */
    CreatePrometheusConfig(req, cb) {
        let resp = new CreatePrometheusConfigResponse();
        this.request("CreatePrometheusConfig", req, resp, cb);
    }

    /**
     * This API is used to query Prometheus recording rules by filter.
     * @param {DescribeRecordingRulesRequest} req
     * @param {function(string, DescribeRecordingRulesResponse):void} cb
     * @public
     */
    DescribeRecordingRules(req, cb) {
        let resp = new DescribeRecordingRulesResponse();
        this.request("DescribeRecordingRules", req, resp, cb);
    }

    /**
     * This API is used to modify the Prometheus configuration. If there are no configuration items, one will be added.
     * @param {ModifyPrometheusConfigRequest} req
     * @param {function(string, ModifyPrometheusConfigResponse):void} cb
     * @public
     */
    ModifyPrometheusConfig(req, cb) {
        let resp = new ModifyPrometheusConfigResponse();
        this.request("ModifyPrometheusConfig", req, resp, cb);
    }

    /**
     * This API is used to get the details of a single alarm policy.
     * @param {DescribeAlarmPolicyRequest} req
     * @param {function(string, DescribeAlarmPolicyResponse):void} cb
     * @public
     */
    DescribeAlarmPolicy(req, cb) {
        let resp = new DescribeAlarmPolicyResponse();
        this.request("DescribeAlarmPolicy", req, resp, cb);
    }


}
module.exports = MonitorClient;
