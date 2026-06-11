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
const AlarmInfo = models.AlarmInfo;
const DescribeLogHistogramRequest = models.DescribeLogHistogramRequest;
const FilterStatistics = models.FilterStatistics;
const DescribeNetworkApplicationDetailRequest = models.DescribeNetworkApplicationDetailRequest;
const DeleteShipperRequest = models.DeleteShipperRequest;
const DeleteConsoleResponse = models.DeleteConsoleResponse;
const DynamicIndex = models.DynamicIndex;
const CreateRebuildIndexTaskResponse = models.CreateRebuildIndexTaskResponse;
const CreateSearchViewRequest = models.CreateSearchViewRequest;
const CheckFunctionRequest = models.CheckFunctionRequest;
const ModifyNetworkApplicationResponse = models.ModifyNetworkApplicationResponse;
const NetInfo = models.NetInfo;
const CreateLogsetRequest = models.CreateLogsetRequest;
const CreateScheduledSqlResponse = models.CreateScheduledSqlResponse;
const RecordingRuleYamlTaskInfo = models.RecordingRuleYamlTaskInfo;
const SearchLogResponse = models.SearchLogResponse;
const DeleteMetricSubscribeResponse = models.DeleteMetricSubscribeResponse;
const DescribePartitionsRequest = models.DescribePartitionsRequest;
const CheckFunctionResponse = models.CheckFunctionResponse;
const ModifyAlarmResponse = models.ModifyAlarmResponse;
const PreviewKafkaRechargeRequest = models.PreviewKafkaRechargeRequest;
const DeliverConfig = models.DeliverConfig;
const DescribeClusterBaseMetricConfigsRequest = models.DescribeClusterBaseMetricConfigsRequest;
const DeleteMetricSubscribeRequest = models.DeleteMetricSubscribeRequest;
const AdvancedConsumerConfiguration = models.AdvancedConsumerConfiguration;
const ScheduledSqlResouceInfo = models.ScheduledSqlResouceInfo;
const ConditionInfo = models.ConditionInfo;
const EsInfo = models.EsInfo;
const DeleteMachineGroupResponse = models.DeleteMachineGroupResponse;
const Tag = models.Tag;
const ScheduledSqlTaskInfo = models.ScheduledSqlTaskInfo;
const CreateDlcDeliverResponse = models.CreateDlcDeliverResponse;
const CreateConsumerGroupRequest = models.CreateConsumerGroupRequest;
const Label = models.Label;
const ModifyMachineGroupResponse = models.ModifyMachineGroupResponse;
const RuleInfo = models.RuleInfo;
const DescribeConsumerPreviewRequest = models.DescribeConsumerPreviewRequest;
const CreateRecordingRuleTaskResponse = models.CreateRecordingRuleTaskResponse;
const DeleteDashboardResponse = models.DeleteDashboardResponse;
const OpenClsServiceRequest = models.OpenClsServiceRequest;
const LogItems = models.LogItems;
const DescribeRecordingRuleYamlTaskResponse = models.DescribeRecordingRuleYamlTaskResponse;
const RuleKeyValueInfo = models.RuleKeyValueInfo;
const DeleteExportResponse = models.DeleteExportResponse;
const DescribeDashboardSubscribesRequest = models.DescribeDashboardSubscribesRequest;
const PartitionInfo = models.PartitionInfo;
const CreateNoticeContentResponse = models.CreateNoticeContentResponse;
const OpenClsServiceResponse = models.OpenClsServiceResponse;
const ModifyAlarmRequest = models.ModifyAlarmRequest;
const RetryShipperTaskResponse = models.RetryShipperTaskResponse;
const SplitPartitionRequest = models.SplitPartitionRequest;
const CreateAlarmShieldRequest = models.CreateAlarmShieldRequest;
const MachineGroupInfo = models.MachineGroupInfo;
const DeleteAlarmShieldResponse = models.DeleteAlarmShieldResponse;
const TopicExtendInfo = models.TopicExtendInfo;
const CreateIndexRequest = models.CreateIndexRequest;
const CreateConsoleResponse = models.CreateConsoleResponse;
const CreateTopicRequest = models.CreateTopicRequest;
const ModifyDataTransformRequest = models.ModifyDataTransformRequest;
const CreateDlcDeliverRequest = models.CreateDlcDeliverRequest;
const Dimension = models.Dimension;
const ModifyScheduledSqlRequest = models.ModifyScheduledSqlRequest;
const DeleteConfigResponse = models.DeleteConfigResponse;
const CreateDeliverCloudFunctionRequest = models.CreateDeliverCloudFunctionRequest;
const ModifyDlcDeliverResponse = models.ModifyDlcDeliverResponse;
const ModifyDashboardResponse = models.ModifyDashboardResponse;
const DescribeMetricSubscribesResponse = models.DescribeMetricSubscribesResponse;
const CreateWebCallbackRequest = models.CreateWebCallbackRequest;
const DescribeClusterMetricConfigsRequest = models.DescribeClusterMetricConfigsRequest;
const DescribeConfigsRequest = models.DescribeConfigsRequest;
const DlcPartitionExtra = models.DlcPartitionExtra;
const DescribeKafkaConsumerTopicsResponse = models.DescribeKafkaConsumerTopicsResponse;
const QueryMetricRequest = models.QueryMetricRequest;
const CloudProductLogTaskInfo = models.CloudProductLogTaskInfo;
const Instance = models.Instance;
const DescribeAlarmNoticesResponse = models.DescribeAlarmNoticesResponse;
const DeleteDataTransformRequest = models.DeleteDataTransformRequest;
const AddMachineGroupInfoRequest = models.AddMachineGroupInfoRequest;
const DescribeKafkaConsumerGroupListResponse = models.DescribeKafkaConsumerGroupListResponse;
const CreateHostMetricConfigResponse = models.CreateHostMetricConfigResponse;
const ModifyConsumerGroupRequest = models.ModifyConsumerGroupRequest;
const CreateTopicResponse = models.CreateTopicResponse;
const DeleteAlarmResponse = models.DeleteAlarmResponse;
const DescribeDlcDeliversResponse = models.DescribeDlcDeliversResponse;
const ModifyIndexRequest = models.ModifyIndexRequest;
const MachineInfo = models.MachineInfo;
const ValueInfo = models.ValueInfo;
const GetAlarmLogRequest = models.GetAlarmLogRequest;
const DeleteCosRechargeResponse = models.DeleteCosRechargeResponse;
const CustomMetricSpec = models.CustomMetricSpec;
const DlcPartitionInfo = models.DlcPartitionInfo;
const GroupTriggerConditionInfo = models.GroupTriggerConditionInfo;
const KafkaRechargeInfo = models.KafkaRechargeInfo;
const ConfigInfo = models.ConfigInfo;
const DeleteTopicRequest = models.DeleteTopicRequest;
const ModifyShipperRequest = models.ModifyShipperRequest;
const MonitorNoticeRule = models.MonitorNoticeRule;
const DescribeKafkaConsumerPreviewRequest = models.DescribeKafkaConsumerPreviewRequest;
const CreateDeliverCloudFunctionResponse = models.CreateDeliverCloudFunctionResponse;
const PreviewLogStatistic = models.PreviewLogStatistic;
const CompressInfo = models.CompressInfo;
const CreateConfigResponse = models.CreateConfigResponse;
const CreateCloudProductLogCollectionResponse = models.CreateCloudProductLogCollectionResponse;
const SearchCosRechargeInfoResponse = models.SearchCosRechargeInfoResponse;
const CreateEsRechargeResponse = models.CreateEsRechargeResponse;
const KeyValueInfo = models.KeyValueInfo;
const DataTransformSqlDataSource = models.DataTransformSqlDataSource;
const ModifyMachineGroupRequest = models.ModifyMachineGroupRequest;
const AnonymousInfo = models.AnonymousInfo;
const DescribeHostMetricConfigsResponse = models.DescribeHostMetricConfigsResponse;
const CreateDashboardRequest = models.CreateDashboardRequest;
const DeleteAlarmNoticeRequest = models.DeleteAlarmNoticeRequest;
const DescribeScheduledSqlInfoResponse = models.DescribeScheduledSqlInfoResponse;
const DescribeConsumersRequest = models.DescribeConsumersRequest;
const ModifyRecordingRuleYamlTaskResponse = models.ModifyRecordingRuleYamlTaskResponse;
const CreateMachineGroupRequest = models.CreateMachineGroupRequest;
const DescribeExportsResponse = models.DescribeExportsResponse;
const CreateNoticeContentRequest = models.CreateNoticeContentRequest;
const CsvInfo = models.CsvInfo;
const DescribeCloudProductLogTasksRequest = models.DescribeCloudProductLogTasksRequest;
const CreateAlarmNoticeRequest = models.CreateAlarmNoticeRequest;
const HistogramInfo = models.HistogramInfo;
const DescribeTopicMetricConfigsRequest = models.DescribeTopicMetricConfigsRequest;
const ModifyLogsetRequest = models.ModifyLogsetRequest;
const SearchDashboardSubscribeResponse = models.SearchDashboardSubscribeResponse;
const ModifyCosRechargeRequest = models.ModifyCosRechargeRequest;
const DescribeClusterMetricConfigsResponse = models.DescribeClusterMetricConfigsResponse;
const DescribeWebCallbacksRequest = models.DescribeWebCallbacksRequest;
const ConsumerContent = models.ConsumerContent;
const CreateMetricSubscribeResponse = models.CreateMetricSubscribeResponse;
const DescribeMachinesRequest = models.DescribeMachinesRequest;
const KeyRegexInfo = models.KeyRegexInfo;
const DeleteSplunkDeliverResponse = models.DeleteSplunkDeliverResponse;
const DescribeTopicMetricConfigsResponse = models.DescribeTopicMetricConfigsResponse;
const DeleteDashboardSubscribeRequest = models.DeleteDashboardSubscribeRequest;
const LogInfo = models.LogInfo;
const DeleteAlarmNoticeResponse = models.DeleteAlarmNoticeResponse;
const DeleteAlarmShieldRequest = models.DeleteAlarmShieldRequest;
const ModifyEsRechargeRequest = models.ModifyEsRechargeRequest;
const CreateNetworkApplicationRequest = models.CreateNetworkApplicationRequest;
const DeleteLogsetResponse = models.DeleteLogsetResponse;
const TopicPartitionOffsetInfo = models.TopicPartitionOffsetInfo;
const DeleteDlcDeliverResponse = models.DeleteDlcDeliverResponse;
const ParquetKeyInfo = models.ParquetKeyInfo;
const DescribeShipperTasksResponse = models.DescribeShipperTasksResponse;
const DescribeAlarmShieldsResponse = models.DescribeAlarmShieldsResponse;
const UploadLogRequest = models.UploadLogRequest;
const ChatUsage = models.ChatUsage;
const AppointLabel = models.AppointLabel;
const CommitConsumerOffsetsRequest = models.CommitConsumerOffsetsRequest;
const ModifyConsoleResponse = models.ModifyConsoleResponse;
const ConsumerInfo = models.ConsumerInfo;
const DescribeAlarmsRequest = models.DescribeAlarmsRequest;
const DescribeShippersResponse = models.DescribeShippersResponse;
const ModifyShipperResponse = models.ModifyShipperResponse;
const GroupPartitionInfo = models.GroupPartitionInfo;
const GetMetricLabelValuesResponse = models.GetMetricLabelValuesResponse;
const QueryMetricResponse = models.QueryMetricResponse;
const DeleteLogsetRequest = models.DeleteLogsetRequest;
const OpenKafkaConsumerResponse = models.OpenKafkaConsumerResponse;
const DeleteSearchViewResponse = models.DeleteSearchViewResponse;
const CreateSplunkDeliverResponse = models.CreateSplunkDeliverResponse;
const ModifyScheduledSqlResponse = models.ModifyScheduledSqlResponse;
const QueryRangeMetricRequest = models.QueryRangeMetricRequest;
const MetaTagInfo = models.MetaTagInfo;
const DescribeMachineGroupsRequest = models.DescribeMachineGroupsRequest;
const ModifySearchViewResponse = models.ModifySearchViewResponse;
const DescribeConfigsResponse = models.DescribeConfigsResponse;
const ExtractRuleInfo = models.ExtractRuleInfo;
const TopicInfo = models.TopicInfo;
const DeleteDataTransformResponse = models.DeleteDataTransformResponse;
const ShipperTaskInfo = models.ShipperTaskInfo;
const CreateConsumerResponse = models.CreateConsumerResponse;
const DataTransformResouceInfo = models.DataTransformResouceInfo;
const AnonymousLoginInfo = models.AnonymousLoginInfo;
const DeleteMachineGroupRequest = models.DeleteMachineGroupRequest;
const NetworkApplicationDetail = models.NetworkApplicationDetail;
const DescribeSplunkDeliversResponse = models.DescribeSplunkDeliversResponse;
const SearchDashboardSubscribeRequest = models.SearchDashboardSubscribeRequest;
const DescribePartitionsResponse = models.DescribePartitionsResponse;
const ModifyHostMetricConfigResponse = models.ModifyHostMetricConfigResponse;
const DescribeMetricCorrectDimensionResponse = models.DescribeMetricCorrectDimensionResponse;
const ModifyAlarmNoticeRequest = models.ModifyAlarmNoticeRequest;
const ToolCallFunction = models.ToolCallFunction;
const CreateAlarmRequest = models.CreateAlarmRequest;
const DlcFiledInfo = models.DlcFiledInfo;
const DeleteScheduledSqlResponse = models.DeleteScheduledSqlResponse;
const EscalateNoticeInfo = models.EscalateNoticeInfo;
const ExcludePathInfo = models.ExcludePathInfo;
const DescribeTopicBaseMetricConfigsRequest = models.DescribeTopicBaseMetricConfigsRequest;
const FilterRuleInfo = models.FilterRuleInfo;
const DescribeEsRechargesResponse = models.DescribeEsRechargesResponse;
const AdvanceFilterRuleInfo = models.AdvanceFilterRuleInfo;
const CheckRechargeKafkaServerRequest = models.CheckRechargeKafkaServerRequest;
const DeleteDashboardSubscribeResponse = models.DeleteDashboardSubscribeResponse;
const DescribeLogHistogramResponse = models.DescribeLogHistogramResponse;
const DescribeConsumerGroupsRequest = models.DescribeConsumerGroupsRequest;
const ConsoleAccount = models.ConsoleAccount;
const CreateWebCallbackResponse = models.CreateWebCallbackResponse;
const DeleteConsumerGroupRequest = models.DeleteConsumerGroupRequest;
const OpenKafkaConsumerRequest = models.OpenKafkaConsumerRequest;
const CreateConsumerGroupResponse = models.CreateConsumerGroupResponse;
const SplunkDeliverInfo = models.SplunkDeliverInfo;
const NoticeContentInfo = models.NoticeContentInfo;
const ModifyMetricConfigResponse = models.ModifyMetricConfigResponse;
const DeleteSearchViewRequest = models.DeleteSearchViewRequest;
const DescribeConsumerResponse = models.DescribeConsumerResponse;
const EstimateRebuildIndexTaskRequest = models.EstimateRebuildIndexTaskRequest;
const EsTimeInfo = models.EsTimeInfo;
const DescribeClusterBaseMetricConfigsResponse = models.DescribeClusterBaseMetricConfigsResponse;
const ModifyKafkaRechargeRequest = models.ModifyKafkaRechargeRequest;
const CreateIndexResponse = models.CreateIndexResponse;
const ModifyDashboardSubscribeResponse = models.ModifyDashboardSubscribeResponse;
const DescribeSplunkPreviewRequest = models.DescribeSplunkPreviewRequest;
const ModifyConfigRequest = models.ModifyConfigRequest;
const CreateMetricConfigResponse = models.CreateMetricConfigResponse;
const DeleteConfigFromMachineGroupResponse = models.DeleteConfigFromMachineGroupResponse;
const PreviewKafkaRechargeResponse = models.PreviewKafkaRechargeResponse;
const MonitorNotice = models.MonitorNotice;
const DescribeAlarmsResponse = models.DescribeAlarmsResponse;
const MetricCollectConfig = models.MetricCollectConfig;
const Delta = models.Delta;
const DeleteIndexResponse = models.DeleteIndexResponse;
const AlarmAnalysisConfig = models.AlarmAnalysisConfig;
const SearchLogErrors = models.SearchLogErrors;
const DescribeSplunkDeliversRequest = models.DescribeSplunkDeliversRequest;
const DeleteScheduledSqlRequest = models.DeleteScheduledSqlRequest;
const ModifyRecordingRuleYamlTaskRequest = models.ModifyRecordingRuleYamlTaskRequest;
const DescribeConsumerGroupsResponse = models.DescribeConsumerGroupsResponse;
const NoticeContent = models.NoticeContent;
const CreateDataTransformResponse = models.CreateDataTransformResponse;
const DescribeKafkaConsumerTopicsRequest = models.DescribeKafkaConsumerTopicsRequest;
const CreateConsumerRequest = models.CreateConsumerRequest;
const DeleteHostMetricConfigRequest = models.DeleteHostMetricConfigRequest;
const DeleteMetricConfigResponse = models.DeleteMetricConfigResponse;
const DataTransformTaskInfo = models.DataTransformTaskInfo;
const NoticeRule = models.NoticeRule;
const ContentInfo = models.ContentInfo;
const ApplyConfigToMachineGroupResponse = models.ApplyConfigToMachineGroupResponse;
const AlertHistoryNotice = models.AlertHistoryNotice;
const DeleteAlarmRequest = models.DeleteAlarmRequest;
const DescribeLogContextResponse = models.DescribeLogContextResponse;
const EstimateRebuildIndexTaskResponse = models.EstimateRebuildIndexTaskResponse;
const DeleteDashboardRequest = models.DeleteDashboardRequest;
const CreateCosRechargeResponse = models.CreateCosRechargeResponse;
const NoticeReceiver = models.NoticeReceiver;
const Ckafka = models.Ckafka;
const MultiCondition = models.MultiCondition;
const Filter = models.Filter;
const SearchViewInfo = models.SearchViewInfo;
const ModifyLogsetResponse = models.ModifyLogsetResponse;
const HostMetricItem = models.HostMetricItem;
const CreateDashboardResponse = models.CreateDashboardResponse;
const GetMetricLabelValuesRequest = models.GetMetricLabelValuesRequest;
const ModifyMetricSubscribeResponse = models.ModifyMetricSubscribeResponse;
const DescribeIndexResponse = models.DescribeIndexResponse;
const DescribeConsumerPreviewResponse = models.DescribeConsumerPreviewResponse;
const DeleteRecordingRuleTaskResponse = models.DeleteRecordingRuleTaskResponse;
const DeleteMachineGroupInfoResponse = models.DeleteMachineGroupInfoResponse;
const CheckRechargeKafkaServerResponse = models.CheckRechargeKafkaServerResponse;
const InstanceConfig = models.InstanceConfig;
const DeleteNetworkApplicationResponse = models.DeleteNetworkApplicationResponse;
const CosRechargeInfo = models.CosRechargeInfo;
const DeleteNoticeContentRequest = models.DeleteNoticeContentRequest;
const DescribeKafkaConsumerRequest = models.DescribeKafkaConsumerRequest;
const DeleteRecordingRuleTaskRequest = models.DeleteRecordingRuleTaskRequest;
const DescribeDataTransformInfoResponse = models.DescribeDataTransformInfoResponse;
const ModifyCosRechargeResponse = models.ModifyCosRechargeResponse;
const ExternalRole = models.ExternalRole;
const DescribeEsRechargePreviewRequest = models.DescribeEsRechargePreviewRequest;
const MergePartitionResponse = models.MergePartitionResponse;
const CreateScheduledSqlRequest = models.CreateScheduledSqlRequest;
const DescribeKafkaConsumerGroupDetailResponse = models.DescribeKafkaConsumerGroupDetailResponse;
const ModifyDashboardRequest = models.ModifyDashboardRequest;
const SendConsumerHeartbeatResponse = models.SendConsumerHeartbeatResponse;
const DeleteHostMetricConfigResponse = models.DeleteHostMetricConfigResponse;
const GetClsServiceResponse = models.GetClsServiceResponse;
const Choice = models.Choice;
const DeleteMetricConfigRequest = models.DeleteMetricConfigRequest;
const CreateEsRechargeRequest = models.CreateEsRechargeRequest;
const ConsumerGroup = models.ConsumerGroup;
const DeleteNoticeContentResponse = models.DeleteNoticeContentResponse;
const MetricYamlSpec = models.MetricYamlSpec;
const DeleteCloudProductLogCollectionRequest = models.DeleteCloudProductLogCollectionRequest;
const DescribeKafkaConsumerResponse = models.DescribeKafkaConsumerResponse;
const JsonInfo = models.JsonInfo;
const DeleteKafkaRechargeResponse = models.DeleteKafkaRechargeResponse;
const DeleteDlcDeliverRequest = models.DeleteDlcDeliverRequest;
const CallBackInfo = models.CallBackInfo;
const ModifyNetworkApplicationRequest = models.ModifyNetworkApplicationRequest;
const DescribeHostMetricConfigsRequest = models.DescribeHostMetricConfigsRequest;
const SplitPartitionResponse = models.SplitPartitionResponse;
const AlarmClassification = models.AlarmClassification;
const WebCallbackInfo = models.WebCallbackInfo;
const CreateLogsetResponse = models.CreateLogsetResponse;
const ModifyHostMetricConfigRequest = models.ModifyHostMetricConfigRequest;
const DashboardNoticeMode = models.DashboardNoticeMode;
const KafkaProtocolInfo = models.KafkaProtocolInfo;
const ModifyAlarmShieldResponse = models.ModifyAlarmShieldResponse;
const CreateCosRechargeRequest = models.CreateCosRechargeRequest;
const ChatCompletionsResponse = models.ChatCompletionsResponse;
const DescribeNoticeContentsResponse = models.DescribeNoticeContentsResponse;
const CreateAlarmShieldResponse = models.CreateAlarmShieldResponse;
const DescribeConsumerRequest = models.DescribeConsumerRequest;
const ModifyConsumerRequest = models.ModifyConsumerRequest;
const ModifyMetricConfigRequest = models.ModifyMetricConfigRequest;
const ModifyDashboardSubscribeRequest = models.ModifyDashboardSubscribeRequest;
const RebuildIndexTaskInfo = models.RebuildIndexTaskInfo;
const CreateDashboardSubscribeRequest = models.CreateDashboardSubscribeRequest;
const FullTextInfo = models.FullTextInfo;
const DescribeConfigMachineGroupsResponse = models.DescribeConfigMachineGroupsResponse;
const ModifySplunkDeliverRequest = models.ModifySplunkDeliverRequest;
const HighLightItem = models.HighLightItem;
const EsRechargeInfo = models.EsRechargeInfo;
const CreateMetricSubscribeRequest = models.CreateMetricSubscribeRequest;
const NoticeContentTemplate = models.NoticeContentTemplate;
const LogItem = models.LogItem;
const DescribeConfigMachineGroupsRequest = models.DescribeConfigMachineGroupsRequest;
const DescribeMetricSubscribePreviewRequest = models.DescribeMetricSubscribePreviewRequest;
const DeleteConsumerResponse = models.DeleteConsumerResponse;
const DescribeTopicsRequest = models.DescribeTopicsRequest;
const ModifySplunkDeliverResponse = models.ModifySplunkDeliverResponse;
const RetryShipperTaskRequest = models.RetryShipperTaskRequest;
const DeleteCosRechargeRequest = models.DeleteCosRechargeRequest;
const CreateHostMetricConfigRequest = models.CreateHostMetricConfigRequest;
const AccessControlRule = models.AccessControlRule;
const ModifyWebCallbackResponse = models.ModifyWebCallbackResponse;
const ModifyCloudProductLogCollectionResponse = models.ModifyCloudProductLogCollectionResponse;
const DeleteConsumerRequest = models.DeleteConsumerRequest;
const MetricSubscribeInfo = models.MetricSubscribeInfo;
const CreateNetworkApplicationResponse = models.CreateNetworkApplicationResponse;
const DeleteIndexRequest = models.DeleteIndexRequest;
const DescribeRecordingRuleTaskRequest = models.DescribeRecordingRuleTaskRequest;
const DescribeAlertRecordHistoryRequest = models.DescribeAlertRecordHistoryRequest;
const ChatCompletionsRequest = models.ChatCompletionsRequest;
const DeleteNetworkApplicationRequest = models.DeleteNetworkApplicationRequest;
const LogsetInfo = models.LogsetInfo;
const CreateExportRequest = models.CreateExportRequest;
const DashboardTemplateVariable = models.DashboardTemplateVariable;
const CancelRebuildIndexTaskRequest = models.CancelRebuildIndexTaskRequest;
const DescribeLogsetsResponse = models.DescribeLogsetsResponse;
const DescribeKafkaConsumerPreviewResponse = models.DescribeKafkaConsumerPreviewResponse;
const NetworkApplicationInfo = models.NetworkApplicationInfo;
const ModifySearchViewRequest = models.ModifySearchViewRequest;
const WebCallback = models.WebCallback;
const CreateAlarmNoticeResponse = models.CreateAlarmNoticeResponse;
const ModifyTopicResponse = models.ModifyTopicResponse;
const CreateConfigRequest = models.CreateConfigRequest;
const DeleteEsRechargeResponse = models.DeleteEsRechargeResponse;
const DescribeNetworkApplicationsRequest = models.DescribeNetworkApplicationsRequest;
const DescribeKafkaRechargesResponse = models.DescribeKafkaRechargesResponse;
const ModifyDlcDeliverRequest = models.ModifyDlcDeliverRequest;
const CreateRecordingRuleTaskRequest = models.CreateRecordingRuleTaskRequest;
const ToolCall = models.ToolCall;
const DeleteCloudProductLogCollectionResponse = models.DeleteCloudProductLogCollectionResponse;
const ExportInfo = models.ExportInfo;
const MetricConfigLabel = models.MetricConfigLabel;
const DashboardSubscribeInfo = models.DashboardSubscribeInfo;
const DescribeWebCallbacksResponse = models.DescribeWebCallbacksResponse;
const DeleteExportRequest = models.DeleteExportRequest;
const ModifyKafkaConsumerGroupOffsetRequest = models.ModifyKafkaConsumerGroupOffsetRequest;
const DescribeConsolesRequest = models.DescribeConsolesRequest;
const AlarmShieldInfo = models.AlarmShieldInfo;
const EsImportInfo = models.EsImportInfo;
const ModifyConfigResponse = models.ModifyConfigResponse;
const MetricConfig = models.MetricConfig;
const ModifyConsoleRequest = models.ModifyConsoleRequest;
const DescribeRebuildIndexTasksResponse = models.DescribeRebuildIndexTasksResponse;
const ModifyAlarmNoticeResponse = models.ModifyAlarmNoticeResponse;
const DescribeConsumerOffsetsResponse = models.DescribeConsumerOffsetsResponse;
const SearchLogInfos = models.SearchLogInfos;
const EnvInfo = models.EnvInfo;
const ModifyKafkaConsumerResponse = models.ModifyKafkaConsumerResponse;
const MachineGroupTypeInfo = models.MachineGroupTypeInfo;
const ShipperInfo = models.ShipperInfo;
const DescribeAlertRecordHistoryResponse = models.DescribeAlertRecordHistoryResponse;
const DescribeEsRechargesRequest = models.DescribeEsRechargesRequest;
const DescribeAlarmNoticesRequest = models.DescribeAlarmNoticesRequest;
const DescribeEsRechargePreviewResponse = models.DescribeEsRechargePreviewResponse;
const MergePartitionRequest = models.MergePartitionRequest;
const MonitorTime = models.MonitorTime;
const ApplyConfigToMachineGroupRequest = models.ApplyConfigToMachineGroupRequest;
const DescribeMachineGroupConfigsResponse = models.DescribeMachineGroupConfigsResponse;
const DescribeMachineGroupConfigsRequest = models.DescribeMachineGroupConfigsRequest;
const DescribeSearchViewsRequest = models.DescribeSearchViewsRequest;
const ModifyWebCallbackRequest = models.ModifyWebCallbackRequest;
const DeleteTopicResponse = models.DeleteTopicResponse;
const CreateExportResponse = models.CreateExportResponse;
const CancelRebuildIndexTaskResponse = models.CancelRebuildIndexTaskResponse;
const DescribeRecordingRuleYamlTaskRequest = models.DescribeRecordingRuleYamlTaskRequest;
const UploadLogResponse = models.UploadLogResponse;
const Console = models.Console;
const CreateAlarmResponse = models.CreateAlarmResponse;
const CustomLabel = models.CustomLabel;
const MetadataInfo = models.MetadataInfo;
const DescribeMetricSubscribesRequest = models.DescribeMetricSubscribesRequest;
const DescribeLogContextRequest = models.DescribeLogContextRequest;
const DescribeMetricCorrectDimensionRequest = models.DescribeMetricCorrectDimensionRequest;
const CreateRecordingRuleYamlTaskRequest = models.CreateRecordingRuleYamlTaskRequest;
const DescribeCosRechargesResponse = models.DescribeCosRechargesResponse;
const CreateSplunkDeliverRequest = models.CreateSplunkDeliverRequest;
const CreateMachineGroupResponse = models.CreateMachineGroupResponse;
const DeleteRecordingRuleYamlTaskResponse = models.DeleteRecordingRuleYamlTaskResponse;
const RuleTagInfo = models.RuleTagInfo;
const OpenClawServiceRequest = models.OpenClawServiceRequest;
const AlarmTargetInfo = models.AlarmTargetInfo;
const SearchCosRechargeInfoRequest = models.SearchCosRechargeInfoRequest;
const DescribeNoticeContentsRequest = models.DescribeNoticeContentsRequest;
const DescribeDlcDeliversRequest = models.DescribeDlcDeliversRequest;
const DescribeNetworkApplicationDetailResponse = models.DescribeNetworkApplicationDetailResponse;
const GetClsServiceRequest = models.GetClsServiceRequest;
const DescribeShipperTasksRequest = models.DescribeShipperTasksRequest;
const CreateCloudProductLogCollectionRequest = models.CreateCloudProductLogCollectionRequest;
const DescribeIndexRequest = models.DescribeIndexRequest;
const DescribeKafkaConsumerGroupListRequest = models.DescribeKafkaConsumerGroupListRequest;
const CreateConsoleRequest = models.CreateConsoleRequest;
const DeleteMachineGroupInfoRequest = models.DeleteMachineGroupInfoRequest;
const ModifyNoticeContentResponse = models.ModifyNoticeContentResponse;
const DeleteWebCallbackResponse = models.DeleteWebCallbackResponse;
const DescribeSearchViewsResponse = models.DescribeSearchViewsResponse;
const DescribeAlarmShieldsRequest = models.DescribeAlarmShieldsRequest;
const CreateRecordingRuleYamlTaskResponse = models.CreateRecordingRuleYamlTaskResponse;
const DescribeTopicsResponse = models.DescribeTopicsResponse;
const EventLog = models.EventLog;
const ConsumerGroupInfo = models.ConsumerGroupInfo;
const DescribeRebuildIndexTasksRequest = models.DescribeRebuildIndexTasksRequest;
const DlcDeliverInfo = models.DlcDeliverInfo;
const DescribeShippersRequest = models.DescribeShippersRequest;
const DescribeCloudProductLogTasksResponse = models.DescribeCloudProductLogTasksResponse;
const ModifyKafkaConsumerRequest = models.ModifyKafkaConsumerRequest;
const DescribeCosRechargesRequest = models.DescribeCosRechargesRequest;
const DescribeNetworkApplicationsResponse = models.DescribeNetworkApplicationsResponse;
const DescribeTopicBaseMetricConfigsResponse = models.DescribeTopicBaseMetricConfigsResponse;
const CloseKafkaConsumerResponse = models.CloseKafkaConsumerResponse;
const ViewSearchTopic = models.ViewSearchTopic;
const Relabeling = models.Relabeling;
const GetAlarmLogResponse = models.GetAlarmLogResponse;
const DescribeKafkaRechargesRequest = models.DescribeKafkaRechargesRequest;
const CreateDashboardSubscribeResponse = models.CreateDashboardSubscribeResponse;
const DescribeExportsRequest = models.DescribeExportsRequest;
const AlarmTarget = models.AlarmTarget;
const CreateKafkaRechargeResponse = models.CreateKafkaRechargeResponse;
const DashboardSubscribeData = models.DashboardSubscribeData;
const ModifyIndexResponse = models.ModifyIndexResponse;
const QueryRangeMetricResponse = models.QueryRangeMetricResponse;
const DescribeDashboardSubscribesResponse = models.DescribeDashboardSubscribesResponse;
const BaseMetricCollectConfig = models.BaseMetricCollectConfig;
const SearchLogTopics = models.SearchLogTopics;
const CreateMetricConfigRequest = models.CreateMetricConfigRequest;
const Message = models.Message;
const ModifyConsumerResponse = models.ModifyConsumerResponse;
const CreateSearchViewResponse = models.CreateSearchViewResponse;
const PartitionOffsetInfo = models.PartitionOffsetInfo;
const KafkaConsumerContent = models.KafkaConsumerContent;
const DeleteConfigRequest = models.DeleteConfigRequest;
const AnalysisDimensional = models.AnalysisDimensional;
const DeleteWebCallbackRequest = models.DeleteWebCallbackRequest;
const LogRechargeRuleInfo = models.LogRechargeRuleInfo;
const CloseKafkaConsumerRequest = models.CloseKafkaConsumerRequest;
const ModifyAlarmShieldRequest = models.ModifyAlarmShieldRequest;
const AlarmNoticeDeliverConfig = models.AlarmNoticeDeliverConfig;
const DescribeConsumersResponse = models.DescribeConsumersResponse;
const DlcTableInfo = models.DlcTableInfo;
const ModifyKafkaConsumerGroupOffsetResponse = models.ModifyKafkaConsumerGroupOffsetResponse;
const CreateShipperRequest = models.CreateShipperRequest;
const InstanceData = models.InstanceData;
const HostMetricConfig = models.HostMetricConfig;
const CreateShipperResponse = models.CreateShipperResponse;
const ModifyCloudProductLogCollectionRequest = models.ModifyCloudProductLogCollectionRequest;
const OpenClawServiceResponse = models.OpenClawServiceResponse;
const Column = models.Column;
const DescribeDataTransformInfoRequest = models.DescribeDataTransformInfoRequest;
const AlarmShieldCount = models.AlarmShieldCount;
const CreateRebuildIndexTaskRequest = models.CreateRebuildIndexTaskRequest;
const DeleteShipperResponse = models.DeleteShipperResponse;
const TopicPartitionInfo = models.TopicPartitionInfo;
const ModifyTopicRequest = models.ModifyTopicRequest;
const DeleteSplunkDeliverRequest = models.DeleteSplunkDeliverRequest;
const ModifyEsRechargeResponse = models.ModifyEsRechargeResponse;
const ModifyConsumerGroupResponse = models.ModifyConsumerGroupResponse;
const CreateKafkaRechargeRequest = models.CreateKafkaRechargeRequest;
const DeleteKafkaRechargeRequest = models.DeleteKafkaRechargeRequest;
const DlcInfo = models.DlcInfo;
const ModifyDataTransformResponse = models.ModifyDataTransformResponse;
const AlertHistoryRecord = models.AlertHistoryRecord;
const MultiTopicSearchInformation = models.MultiTopicSearchInformation;
const AlarmNotice = models.AlarmNotice;
const ModifyNoticeContentRequest = models.ModifyNoticeContentRequest;
const ModifyKafkaRechargeResponse = models.ModifyKafkaRechargeResponse;
const RecordingRuleTaskInfo = models.RecordingRuleTaskInfo;
const MetricSpec = models.MetricSpec;
const DescribeMachinesResponse = models.DescribeMachinesResponse;
const DeleteEsRechargeRequest = models.DeleteEsRechargeRequest;
const AuthRoleInfo = models.AuthRoleInfo;
const LogContextInfo = models.LogContextInfo;
const ModifyMetricSubscribeRequest = models.ModifyMetricSubscribeRequest;
const DeleteRecordingRuleYamlTaskRequest = models.DeleteRecordingRuleYamlTaskRequest;
const DeleteConfigFromMachineGroupRequest = models.DeleteConfigFromMachineGroupRequest;
const DescribeRecordingRuleTaskResponse = models.DescribeRecordingRuleTaskResponse;
const AddMachineGroupInfoResponse = models.AddMachineGroupInfoResponse;
const UserKafkaMeta = models.UserKafkaMeta;
const MetricLabel = models.MetricLabel;
const ModifyRecordingRuleTaskRequest = models.ModifyRecordingRuleTaskRequest;
const DescribeMetricSubscribePreviewResponse = models.DescribeMetricSubscribePreviewResponse;
const DescribeScheduledSqlInfoRequest = models.DescribeScheduledSqlInfoRequest;
const DeleteConsumerGroupResponse = models.DeleteConsumerGroupResponse;
const SearchLogRequest = models.SearchLogRequest;
const DescribeKafkaConsumerGroupDetailRequest = models.DescribeKafkaConsumerGroupDetailRequest;
const DescribeConsumerOffsetsRequest = models.DescribeConsumerOffsetsRequest;
const DeleteConsoleRequest = models.DeleteConsoleRequest;
const CreateDataTransformRequest = models.CreateDataTransformRequest;
const DescribeMachineGroupsResponse = models.DescribeMachineGroupsResponse;
const DescribeLogsetsRequest = models.DescribeLogsetsRequest;
const MetadataItem = models.MetadataItem;
const ParquetInfo = models.ParquetInfo;
const ModifyRecordingRuleTaskResponse = models.ModifyRecordingRuleTaskResponse;
const DescribeConsolesResponse = models.DescribeConsolesResponse;
const SendConsumerHeartbeatRequest = models.SendConsumerHeartbeatRequest;
const CommitConsumerOffsetsResponse = models.CommitConsumerOffsetsResponse;
const DescribeSplunkPreviewResponse = models.DescribeSplunkPreviewResponse;


/**
 * cls client
 * @class
 */
class ClsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cls.intl.tencentcloudapi.com", "2020-10-16", credential, region, profile);
    }
    
    /**
     * This API is used to modify Kafka protocol consumption information.
     * @param {ModifyKafkaConsumerRequest} req
     * @param {function(string, ModifyKafkaConsumerResponse):void} cb
     * @public
     */
    ModifyKafkaConsumer(req, cb) {
        let resp = new ModifyKafkaConsumerResponse();
        this.request("ModifyKafkaConsumer", req, resp, cb);
    }

    /**
     * This API is used to create a Kafka data subscription task.
     * @param {CreateKafkaRechargeRequest} req
     * @param {function(string, CreateKafkaRechargeResponse):void} cb
     * @public
     */
    CreateKafkaRecharge(req, cb) {
        let resp = new CreateKafkaRechargeResponse();
        this.request("CreateKafkaRecharge", req, resp, cb);
    }

    /**
     * This API is used to create resources and indexes dependent on OpenClaw.
     * @param {OpenClawServiceRequest} req
     * @param {function(string, OpenClawServiceResponse):void} cb
     * @public
     */
    OpenClawService(req, cb) {
        let resp = new OpenClawServiceResponse();
        this.request("OpenClawService", req, resp, cb);
    }

    /**
     * This API is used to get the list of log download tasks.
     * @param {DescribeExportsRequest} req
     * @param {function(string, DescribeExportsResponse):void} cb
     * @public
     */
    DescribeExports(req, cb) {
        let resp = new DescribeExportsResponse();
        this.request("DescribeExports", req, resp, cb);
    }

    /**
     * Modify a web application
     * @param {ModifyNetworkApplicationRequest} req
     * @param {function(string, ModifyNetworkApplicationResponse):void} cb
     * @public
     */
    ModifyNetworkApplication(req, cb) {
        let resp = new ModifyNetworkApplicationResponse();
        this.request("ModifyNetworkApplication", req, resp, cb);
    }

    /**
     * Modify host metric collection configuration
     * @param {ModifyHostMetricConfigRequest} req
     * @param {function(string, ModifyHostMetricConfigResponse):void} cb
     * @public
     */
    ModifyHostMetricConfig(req, cb) {
        let resp = new ModifyHostMetricConfigResponse();
        this.request("ModifyHostMetricConfig", req, resp, cb);
    }

    /**
     * This API is used to check the heartbeat of a consumer group.
     * @param {CreateConsumerGroupRequest} req
     * @param {function(string, CreateConsumerGroupResponse):void} cb
     * @public
     */
    CreateConsumerGroup(req, cb) {
        let resp = new CreateConsumerGroupResponse();
        this.request("CreateConsumerGroup", req, resp, cb);
    }

    /**
     * This API is used to create an index.
     * @param {CreateIndexRequest} req
     * @param {function(string, CreateIndexResponse):void} cb
     * @public
     */
    CreateIndex(req, cb) {
        let resp = new CreateIndexResponse();
        this.request("CreateIndex", req, resp, cb);
    }

    /**
     * This API is used to check whether CLS is enabled.
This API is used to fill in any region for Region, recommend using Guangzhou (ap-guangzhou).
     * @param {GetClsServiceRequest} req
     * @param {function(string, GetClsServiceResponse):void} cb
     * @public
     */
    GetClsService(req, cb) {
        let resp = new GetClsServiceResponse();
        this.request("GetClsService", req, resp, cb);
    }

    /**
     * Query the latest metric value at a specified time.
If there is no metric data in the 5 minutes before that moment, there will be no query result.
     * @param {QueryMetricRequest} req
     * @param {function(string, QueryMetricResponse):void} cb
     * @public
     */
    QueryMetric(req, cb) {
        let resp = new QueryMetricResponse();
        this.request("QueryMetric", req, resp, cb);
    }

    /**
     * Modify a DLC delivery task
     * @param {ModifyDlcDeliverRequest} req
     * @param {function(string, ModifyDlcDeliverResponse):void} cb
     * @public
     */
    ModifyDlcDeliver(req, cb) {
        let resp = new ModifyDlcDeliverResponse();
        this.request("ModifyDlcDeliver", req, resp, cb);
    }

    /**
     * Delete consumer groups.
     * @param {DeleteConsumerGroupRequest} req
     * @param {function(string, DeleteConsumerGroupResponse):void} cb
     * @public
     */
    DeleteConsumerGroup(req, cb) {
        let resp = new DeleteConsumerGroupResponse();
        this.request("DeleteConsumerGroup", req, resp, cb);
    }

    /**
     * This API is used to get collection rule configuration.
     * @param {DescribeConfigsRequest} req
     * @param {function(string, DescribeConfigsResponse):void} cb
     * @public
     */
    DescribeConfigs(req, cb) {
        let resp = new DescribeConfigsResponse();
        this.request("DescribeConfigs", req, resp, cb);
    }

    /**
     * This API is used to create a delivery SCF task.
     * @param {CreateDeliverCloudFunctionRequest} req
     * @param {function(string, CreateDeliverCloudFunctionResponse):void} cb
     * @public
     */
    CreateDeliverCloudFunction(req, cb) {
        let resp = new CreateDeliverCloudFunctionResponse();
        this.request("CreateDeliverCloudFunction", req, resp, cb);
    }

    /**
     * This API is used to delete a logset.
     * @param {DeleteLogsetRequest} req
     * @param {function(string, DeleteLogsetResponse):void} cb
     * @public
     */
    DeleteLogset(req, cb) {
        let resp = new DeleteLogsetResponse();
        this.request("DeleteLogset", req, resp, cb);
    }

    /**
     * This API is used to delete the collection configuration applied to a machine group.
     * @param {DeleteConfigFromMachineGroupRequest} req
     * @param {function(string, DeleteConfigFromMachineGroupResponse):void} cb
     * @public
     */
    DeleteConfigFromMachineGroup(req, cb) {
        let resp = new DeleteConfigFromMachineGroupResponse();
        this.request("DeleteConfigFromMachineGroup", req, resp, cb);
    }

    /**
     * This API is used to delete a data processing task.
     * @param {DeleteDataTransformRequest} req
     * @param {function(string, DeleteDataTransformResponse):void} cb
     * @public
     */
    DeleteDataTransform(req, cb) {
        let resp = new DeleteDataTransformResponse();
        this.request("DeleteDataTransform", req, resp, cb);
    }

    /**
     * This API is used to create a logset. The ID of the created logset is returned.
     * @param {CreateLogsetRequest} req
     * @param {function(string, CreateLogsetResponse):void} cb
     * @public
     */
    CreateLogset(req, cb) {
        let resp = new CreateLogsetResponse();
        this.request("CreateLogset", req, resp, cb);
    }

    /**
     * Retrieve the network application list
     * @param {DescribeNetworkApplicationsRequest} req
     * @param {function(string, DescribeNetworkApplicationsResponse):void} cb
     * @public
     */
    DescribeNetworkApplications(req, cb) {
        let resp = new DescribeNetworkApplicationsResponse();
        this.request("DescribeNetworkApplications", req, resp, cb);
    }

    /**
     * Enable logging
This API is used to enable CLS in all regions by filling any region for Region, recommend using Guangzhou (ap-guangzhou).
     * @param {OpenClsServiceRequest} req
     * @param {function(string, OpenClsServiceResponse):void} cb
     * @public
     */
    OpenClsService(req, cb) {
        let resp = new OpenClsServiceResponse();
        this.request("OpenClsService", req, resp, cb);
    }

    /**
     * Retrieve the es import configuration
     * @param {DescribeEsRechargesRequest} req
     * @param {function(string, DescribeEsRechargesResponse):void} cb
     * @public
     */
    DescribeEsRecharges(req, cb) {
        let resp = new DescribeEsRechargesResponse();
        this.request("DescribeEsRecharges", req, resp, cb);
    }

    /**
     * This API is used to create logs or metric topics.
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        let resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
    }

    /**
     * Cloud product integration uses relevant APIs
     * @param {DescribeCloudProductLogTasksRequest} req
     * @param {function(string, DescribeCloudProductLogTasksResponse):void} cb
     * @public
     */
    DescribeCloudProductLogTasks(req, cb) {
        let resp = new DescribeCloudProductLogTasksResponse();
        this.request("DescribeCloudProductLogTasks", req, resp, cb);
    }

    /**
     * This API is used to obtain metric subscription configurations.
     * @param {DescribeHostMetricConfigsRequest} req
     * @param {function(string, DescribeHostMetricConfigsResponse):void} cb
     * @public
     */
    DescribeHostMetricConfigs(req, cb) {
        let resp = new DescribeHostMetricConfigsResponse();
        this.request("DescribeHostMetricConfigs", req, resp, cb);
    }

    /**
     * This API is used to create metric subscription configurations.
     * @param {CreateMetricSubscribeRequest} req
     * @param {function(string, CreateMetricSubscribeResponse):void} cb
     * @public
     */
    CreateMetricSubscribe(req, cb) {
        let resp = new CreateMetricSubscribeResponse();
        this.request("CreateMetricSubscribe", req, resp, cb);
    }

    /**
     * This API is used to obtain metric subscription configurations.
     * @param {DescribeClusterMetricConfigsRequest} req
     * @param {function(string, DescribeClusterMetricConfigsResponse):void} cb
     * @public
     */
    DescribeClusterMetricConfigs(req, cb) {
        let resp = new DescribeClusterMetricConfigsResponse();
        this.request("DescribeClusterMetricConfigs", req, resp, cb);
    }

    /**
     * Create a query view
     * @param {CreateSearchViewRequest} req
     * @param {function(string, CreateSearchViewResponse):void} cb
     * @public
     */
    CreateSearchView(req, cb) {
        let resp = new CreateSearchViewResponse();
        this.request("CreateSearchView", req, resp, cb);
    }

    /**
     * This API is used to get alarm records, such as today's uncleared alarms.
     * @param {DescribeAlertRecordHistoryRequest} req
     * @param {function(string, DescribeAlertRecordHistoryResponse):void} cb
     * @public
     */
    DescribeAlertRecordHistory(req, cb) {
        let resp = new DescribeAlertRecordHistoryResponse();
        this.request("DescribeAlertRecordHistory", req, resp, cb);
    }

    /**
     * This API is used to delete a Kafka data subscription task.
     * @param {DeleteKafkaRechargeRequest} req
     * @param {function(string, DeleteKafkaRechargeResponse):void} cb
     * @public
     */
    DeleteKafkaRecharge(req, cb) {
        let resp = new DeleteKafkaRechargeResponse();
        this.request("DeleteKafkaRecharge", req, resp, cb);
    }

    /**
     * This API is used to create collection rule configuration.
     * @param {CreateConfigRequest} req
     * @param {function(string, CreateConfigResponse):void} cb
     * @public
     */
    CreateConfig(req, cb) {
        let resp = new CreateConfigResponse();
        this.request("CreateConfig", req, resp, cb);
    }

    /**
     * This API is used to search alarm channel callback configuration lists.
     * @param {DescribeDlcDeliversRequest} req
     * @param {function(string, DescribeDlcDeliversResponse):void} cb
     * @public
     */
    DescribeDlcDelivers(req, cb) {
        let resp = new DescribeDlcDeliversResponse();
        this.request("DescribeDlcDelivers", req, resp, cb);
    }

    /**
     * This API is used to obtain logs or metric topic lists and supports pagination.
     * @param {DescribeTopicsRequest} req
     * @param {function(string, DescribeTopicsResponse):void} cb
     * @public
     */
    DescribeTopics(req, cb) {
        let resp = new DescribeTopicsResponse();
        this.request("DescribeTopics", req, resp, cb);
    }

    /**
     * This API is used to cancel creating a reindexing task.
     * @param {CancelRebuildIndexTaskRequest} req
     * @param {function(string, CancelRebuildIndexTaskResponse):void} cb
     * @public
     */
    CancelRebuildIndexTask(req, cb) {
        let resp = new CancelRebuildIndexTaskResponse();
        this.request("CancelRebuildIndexTask", req, resp, cb);
    }

    /**
     * This API is used to estimate rebuild index tasks.
     * @param {EstimateRebuildIndexTaskRequest} req
     * @param {function(string, EstimateRebuildIndexTaskResponse):void} cb
     * @public
     */
    EstimateRebuildIndexTask(req, cb) {
        let resp = new EstimateRebuildIndexTaskResponse();
        this.request("EstimateRebuildIndexTask", req, resp, cb);
    }

    /**
     * splunk delivery task preview
     * @param {DescribeSplunkPreviewRequest} req
     * @param {function(string, DescribeSplunkPreviewResponse):void} cb
     * @public
     */
    DescribeSplunkPreview(req, cb) {
        let resp = new DescribeSplunkPreviewResponse();
        this.request("DescribeSplunkPreview", req, resp, cb);
    }

    /**
     * Cloud product integration uses internal APIs
     * @param {CreateCloudProductLogCollectionRequest} req
     * @param {function(string, CreateCloudProductLogCollectionResponse):void} cb
     * @public
     */
    CreateCloudProductLogCollection(req, cb) {
        let resp = new CreateCloudProductLogCollectionResponse();
        this.request("CreateCloudProductLogCollection", req, resp, cb);
    }

    /**
     * This API is used to create a COS import task.
     * @param {CreateCosRechargeRequest} req
     * @param {function(string, CreateCosRechargeResponse):void} cb
     * @public
     */
    CreateCosRecharge(req, cb) {
        let resp = new CreateCosRechargeResponse();
        this.request("CreateCosRecharge", req, resp, cb);
    }

    /**
     * This API is deprecated. If needed, please use the ModifyTopic API to change the number of partitions.
     * @param {MergePartitionRequest} req
     * @param {function(string, MergePartitionResponse):void} cb
     * @public
     */
    MergePartition(req, cb) {
        let resp = new MergePartitionResponse();
        this.request("MergePartition", req, resp, cb);
    }

    /**
     * Delete host metric collection configuration
     * @param {DeleteHostMetricConfigRequest} req
     * @param {function(string, DeleteHostMetricConfigResponse):void} cb
     * @public
     */
    DeleteHostMetricConfig(req, cb) {
        let resp = new DeleteHostMetricConfigResponse();
        this.request("DeleteHostMetricConfig", req, resp, cb);
    }

    /**
     * This API is used to delete a scheduled SQL analysis task.
     * @param {DeleteScheduledSqlRequest} req
     * @param {function(string, DeleteScheduledSqlResponse):void} cb
     * @public
     */
    DeleteScheduledSql(req, cb) {
        let resp = new DeleteScheduledSqlResponse();
        this.request("DeleteScheduledSql", req, resp, cb);
    }

    /**
     * This API only creates download tasks. The download address returned by the task can be obtained by user invocation of [DescribeExports](https://www.tencentcloud.com/document/product/614/56449?from_cn_redirect=1) to view task list, which includes the CosPath parameter for the download address.
     * @param {CreateExportRequest} req
     * @param {function(string, CreateExportResponse):void} cb
     * @public
     */
    CreateExport(req, cb) {
        let resp = new CreateExportResponse();
        this.request("CreateExport", req, resp, cb);
    }

    /**
     * Delete a Splunk delivery task
     * @param {DeleteSplunkDeliverRequest} req
     * @param {function(string, DeleteSplunkDeliverResponse):void} cb
     * @public
     */
    DeleteSplunkDeliver(req, cb) {
        let resp = new DeleteSplunkDeliverResponse();
        this.request("DeleteSplunkDeliver", req, resp, cb);
    }

    /**
     * Query the DataSight console instance list
     * @param {DescribeConsolesRequest} req
     * @param {function(string, DescribeConsolesResponse):void} cb
     * @public
     */
    DescribeConsoles(req, cb) {
        let resp = new DescribeConsolesResponse();
        this.request("DescribeConsoles", req, resp, cb);
    }

    /**
     * Obtaining the Consumer Group Point Information
     * @param {DescribeConsumerOffsetsRequest} req
     * @param {function(string, DescribeConsumerOffsetsResponse):void} cb
     * @public
     */
    DescribeConsumerOffsets(req, cb) {
        let resp = new DescribeConsumerOffsetsResponse();
        this.request("DescribeConsumerOffsets", req, resp, cb);
    }

    /**
     * Retrieve web application details
     * @param {DescribeNetworkApplicationDetailRequest} req
     * @param {function(string, DescribeNetworkApplicationDetailResponse):void} cb
     * @public
     */
    DescribeNetworkApplicationDetail(req, cb) {
        let resp = new DescribeNetworkApplicationDetailResponse();
        this.request("DescribeNetworkApplicationDetail", req, resp, cb);
    }

    /**
     * This API is used to obtain metric subscription configurations.
     * @param {DescribeTopicMetricConfigsRequest} req
     * @param {function(string, DescribeTopicMetricConfigsResponse):void} cb
     * @public
     */
    DescribeTopicMetricConfigs(req, cb) {
        let resp = new DescribeTopicMetricConfigsResponse();
        this.request("DescribeTopicMetricConfigs", req, resp, cb);
    }

    /**
     * This API is used to modify metric subscription configurations.
     * @param {ModifyMetricSubscribeRequest} req
     * @param {function(string, ModifyMetricSubscribeResponse):void} cb
     * @public
     */
    ModifyMetricSubscribe(req, cb) {
        let resp = new ModifyMetricSubscribeResponse();
        this.request("ModifyMetricSubscribe", req, resp, cb);
    }

    /**
     * Create a DLC delivery task
     * @param {CreateDlcDeliverRequest} req
     * @param {function(string, CreateDlcDeliverResponse):void} cb
     * @public
     */
    CreateDlcDeliver(req, cb) {
        let resp = new CreateDlcDeliverResponse();
        this.request("CreateDlcDeliver", req, resp, cb);
    }

    /**
     * This API is used to modify the index configuration. It is subject to the default request frequency limit, and the number of concurrent requests to the same log topic cannot exceed 1, i.e., the index configuration of only one log topic can be modified at a time.
     * @param {ModifyIndexRequest} req
     * @param {function(string, ModifyIndexResponse):void} cb
     * @public
     */
    ModifyIndex(req, cb) {
        let resp = new ModifyIndexResponse();
        this.request("ModifyIndex", req, resp, cb);
    }

    /**
     * Query view list
     * @param {DescribeSearchViewsRequest} req
     * @param {function(string, DescribeSearchViewsResponse):void} cb
     * @public
     */
    DescribeSearchViews(req, cb) {
        let resp = new DescribeSearchViewsResponse();
        this.request("DescribeSearchViews", req, resp, cb);
    }

    /**
     * Cloud product integration uses internal APIs
     * @param {ModifyCloudProductLogCollectionRequest} req
     * @param {function(string, ModifyCloudProductLogCollectionResponse):void} cb
     * @public
     */
    ModifyCloudProductLogCollection(req, cb) {
        let resp = new ModifyCloudProductLogCollectionResponse();
        this.request("ModifyCloudProductLogCollection", req, resp, cb);
    }

    /**
     * This API is used to create an alarm blocking rule.
     * @param {CreateAlarmShieldRequest} req
     * @param {function(string, CreateAlarmShieldResponse):void} cb
     * @public
     */
    CreateAlarmShield(req, cb) {
        let resp = new CreateAlarmShieldResponse();
        this.request("CreateAlarmShield", req, resp, cb);
    }

    /**
     * This API is used to delete metric subscription configurations.
     * @param {DeleteMetricSubscribeRequest} req
     * @param {function(string, DeleteMetricSubscribeResponse):void} cb
     * @public
     */
    DeleteMetricSubscribe(req, cb) {
        let resp = new DeleteMetricSubscribeResponse();
        this.request("DeleteMetricSubscribe", req, resp, cb);
    }

    /**
     * This API is used to create an es import configuration
     * @param {CreateEsRechargeRequest} req
     * @param {function(string, CreateEsRechargeResponse):void} cb
     * @public
     */
    CreateEsRecharge(req, cb) {
        let resp = new CreateEsRechargeResponse();
        this.request("CreateEsRecharge", req, resp, cb);
    }

    /**
     * Modify es import configuration
     * @param {ModifyEsRechargeRequest} req
     * @param {function(string, ModifyEsRechargeResponse):void} cb
     * @public
     */
    ModifyEsRecharge(req, cb) {
        let resp = new ModifyEsRechargeResponse();
        this.request("ModifyEsRecharge", req, resp, cb);
    }

    /**
     * Delete a DLC delivery task
     * @param {DeleteDlcDeliverRequest} req
     * @param {function(string, DeleteDlcDeliverResponse):void} cb
     * @public
     */
    DeleteDlcDeliver(req, cb) {
        let resp = new DeleteDlcDeliverResponse();
        this.request("DeleteDlcDeliver", req, resp, cb);
    }

    /**
     * Cloud product integration uses internal APIs
     * @param {DeleteCloudProductLogCollectionRequest} req
     * @param {function(string, DeleteCloudProductLogCollectionResponse):void} cb
     * @public
     */
    DeleteCloudProductLogCollection(req, cb) {
        let resp = new DeleteCloudProductLogCollectionResponse();
        this.request("DeleteCloudProductLogCollection", req, resp, cb);
    }

    /**
     * This API is used to create metric subscription configurations.
     * @param {DescribeMetricSubscribePreviewRequest} req
     * @param {function(string, DescribeMetricSubscribePreviewResponse):void} cb
     * @public
     */
    DescribeMetricSubscribePreview(req, cb) {
        let resp = new DescribeMetricSubscribePreviewResponse();
        this.request("DescribeMetricSubscribePreview", req, resp, cb);
    }

    /**
     * Import Preview
     * @param {DescribeEsRechargePreviewRequest} req
     * @param {function(string, DescribeEsRechargePreviewResponse):void} cb
     * @public
     */
    DescribeEsRechargePreview(req, cb) {
        let resp = new DescribeEsRechargePreviewResponse();
        this.request("DescribeEsRechargePreview", req, resp, cb);
    }

    /**
     * This API is used to create a task to ship to COS. Note: To use this API, you need to check whether you have configured the role and permission for shipping to COS. If not, see **Viewing and Configuring Shipping Authorization** at https://intl.cloud.tencent.com/document/product/614/71623.?from_cn_redirect=1
     * @param {CreateShipperRequest} req
     * @param {function(string, CreateShipperResponse):void} cb
     * @public
     */
    CreateShipper(req, cb) {
        let resp = new CreateShipperResponse();
        this.request("CreateShipper", req, resp, cb);
    }

    /**
     * This API is used to create notification content.
     * @param {CreateNoticeContentRequest} req
     * @param {function(string, CreateNoticeContentResponse):void} cb
     * @public
     */
    CreateNoticeContent(req, cb) {
        let resp = new CreateNoticeContentResponse();
        this.request("CreateNoticeContent", req, resp, cb);
    }

    /**
     * Deleting a CKafka Delivery Task
     * @param {DeleteConsumerRequest} req
     * @param {function(string, DeleteConsumerResponse):void} cb
     * @public
     */
    DeleteConsumer(req, cb) {
        let resp = new DeleteConsumerResponse();
        this.request("DeleteConsumer", req, resp, cb);
    }

    /**
     * This API is used to preview Kafka shipping data.
     * @param {DescribeConsumerPreviewRequest} req
     * @param {function(string, DescribeConsumerPreviewResponse):void} cb
     * @public
     */
    DescribeConsumerPreview(req, cb) {
        let resp = new DescribeConsumerPreviewResponse();
        this.request("DescribeConsumerPreview", req, resp, cb);
    }

    /**
     * This API is used to delete a machine group.
     * @param {DeleteMachineGroupRequest} req
     * @param {function(string, DeleteMachineGroupResponse):void} cb
     * @public
     */
    DeleteMachineGroup(req, cb) {
        let resp = new DeleteMachineGroupResponse();
        this.request("DeleteMachineGroup", req, resp, cb);
    }

    /**
     * Delete es import configuration
     * @param {DeleteEsRechargeRequest} req
     * @param {function(string, DeleteEsRechargeResponse):void} cb
     * @public
     */
    DeleteEsRecharge(req, cb) {
        let resp = new DeleteEsRechargeResponse();
        this.request("DeleteEsRecharge", req, resp, cb);
    }

    /**
     * This API is used to check the heartbeat of a consumer group.
     * @param {SendConsumerHeartbeatRequest} req
     * @param {function(string, SendConsumerHeartbeatResponse):void} cb
     * @public
     */
    SendConsumerHeartbeat(req, cb) {
        let resp = new SendConsumerHeartbeatResponse();
        this.request("SendConsumerHeartbeat", req, resp, cb);
    }

    /**
     * This API is used to delete a cos Import Task.
     * @param {DeleteCosRechargeRequest} req
     * @param {function(string, DeleteCosRechargeResponse):void} cb
     * @public
     */
    DeleteCosRecharge(req, cb) {
        let resp = new DeleteCosRechargeResponse();
        this.request("DeleteCosRecharge", req, resp, cb);
    }

    /**
     * Retrieve the information list of Kafka protocol consumption groups
     * @param {DescribeKafkaConsumerGroupListRequest} req
     * @param {function(string, DescribeKafkaConsumerGroupListResponse):void} cb
     * @public
     */
    DescribeKafkaConsumerGroupList(req, cb) {
        let resp = new DescribeKafkaConsumerGroupListResponse();
        this.request("DescribeKafkaConsumerGroupList", req, resp, cb);
    }

    /**
     * Modify information related to splunk delivery task
     * @param {ModifySplunkDeliverRequest} req
     * @param {function(string, ModifySplunkDeliverResponse):void} cb
     * @public
     */
    ModifySplunkDeliver(req, cb) {
        let resp = new ModifySplunkDeliverResponse();
        this.request("ModifySplunkDeliver", req, resp, cb);
    }

    /**
     * This API is used to get the list of Kafka data subscription tasks.
     * @param {DescribeKafkaRechargesRequest} req
     * @param {function(string, DescribeKafkaRechargesResponse):void} cb
     * @public
     */
    DescribeKafkaRecharges(req, cb) {
        let resp = new DescribeKafkaRechargesResponse();
        this.request("DescribeKafkaRecharges", req, resp, cb);
    }

    /**
     * This API is used to get the alarm policy list.
     * @param {DescribeAlarmsRequest} req
     * @param {function(string, DescribeAlarmsResponse):void} cb
     * @public
     */
    DescribeAlarms(req, cb) {
        let resp = new DescribeAlarmsResponse();
        this.request("DescribeAlarms", req, resp, cb);
    }

    /**
     * This API is used to get COS import configuration.
     * @param {DescribeCosRechargesRequest} req
     * @param {function(string, DescribeCosRechargesResponse):void} cb
     * @public
     */
    DescribeCosRecharges(req, cb) {
        let resp = new DescribeCosRechargesResponse();
        this.request("DescribeCosRecharges", req, resp, cb);
    }

    /**
     * This API is used to apply the collection configuration to a specified machine group.
     * @param {ApplyConfigToMachineGroupRequest} req
     * @param {function(string, ApplyConfigToMachineGroupResponse):void} cb
     * @public
     */
    ApplyConfigToMachineGroup(req, cb) {
        let resp = new ApplyConfigToMachineGroupResponse();
        this.request("ApplyConfigToMachineGroup", req, resp, cb);
    }

    /**
     * This API is used to create a dashboard.
     * @param {CreateDashboardRequest} req
     * @param {function(string, CreateDashboardResponse):void} cb
     * @public
     */
    CreateDashboard(req, cb) {
        let resp = new CreateDashboardResponse();
        this.request("CreateDashboard", req, resp, cb);
    }

    /**
     * This API is used to delete an alarm blocking rule. When the alarm blocking rule is active or invalid, it cannot be deleted.
     * @param {DeleteAlarmShieldRequest} req
     * @param {function(string, DeleteAlarmShieldResponse):void} cb
     * @public
     */
    DeleteAlarmShield(req, cb) {
        let resp = new DeleteAlarmShieldResponse();
        this.request("DeleteAlarmShield", req, resp, cb);
    }

    /**
     * This API is used to obtain metric subscription configurations.
     * @param {DescribeMetricCorrectDimensionRequest} req
     * @param {function(string, DescribeMetricCorrectDimensionResponse):void} cb
     * @public
     */
    DescribeMetricCorrectDimension(req, cb) {
        let resp = new DescribeMetricCorrectDimensionResponse();
        this.request("DescribeMetricCorrectDimension", req, resp, cb);
    }

    /**
     * This API is used to get a log count histogram.
     * @param {DescribeLogHistogramRequest} req
     * @param {function(string, DescribeLogHistogramResponse):void} cb
     * @public
     */
    DescribeLogHistogram(req, cb) {
        let resp = new DescribeLogHistogramResponse();
        this.request("DescribeLogHistogram", req, resp, cb);
    }

    /**
     * This API is used to modify a notification group.
     * @param {ModifyAlarmNoticeRequest} req
     * @param {function(string, ModifyAlarmNoticeResponse):void} cb
     * @public
     */
    ModifyAlarmNotice(req, cb) {
        let resp = new ModifyAlarmNoticeResponse();
        this.request("ModifyAlarmNotice", req, resp, cb);
    }

    /**
     * This API is used to delete a query view.
     * @param {DeleteSearchViewRequest} req
     * @param {function(string, DeleteSearchViewResponse):void} cb
     * @public
     */
    DeleteSearchView(req, cb) {
        let resp = new DeleteSearchViewResponse();
        this.request("DeleteSearchView", req, resp, cb);
    }

    /**
     * This API is used to enable the Kafka consumption feature.
     * @param {OpenKafkaConsumerRequest} req
     * @param {function(string, OpenKafkaConsumerResponse):void} cb
     * @public
     */
    OpenKafkaConsumer(req, cb) {
        let resp = new OpenKafkaConsumerResponse();
        this.request("OpenKafkaConsumer", req, resp, cb);
    }

    /**
     * This API is used to delete dashboards.
     * @param {DeleteDashboardRequest} req
     * @param {function(string, DeleteDashboardResponse):void} cb
     * @public
     */
    DeleteDashboard(req, cb) {
        let resp = new DeleteDashboardResponse();
        this.request("DeleteDashboard", req, resp, cb);
    }

    /**
     * This API is used to modify an existing shipping rule. To use this API, you need to grant CLS the write permission of the specified bucket.
     * @param {ModifyShipperRequest} req
     * @param {function(string, ModifyShipperResponse):void} cb
     * @public
     */
    ModifyShipper(req, cb) {
        let resp = new ModifyShipperResponse();
        this.request("ModifyShipper", req, resp, cb);
    }

    /**
     * This API is used to modify dashboard subscriptions.
     * @param {ModifyDashboardSubscribeRequest} req
     * @param {function(string, ModifyDashboardSubscribeResponse):void} cb
     * @public
     */
    ModifyDashboardSubscribe(req, cb) {
        let resp = new ModifyDashboardSubscribeResponse();
        this.request("ModifyDashboardSubscribe", req, resp, cb);
    }

    /**
     * This API is used to modify the dashboard.
     * @param {ModifyDashboardRequest} req
     * @param {function(string, ModifyDashboardResponse):void} cb
     * @public
     */
    ModifyDashboard(req, cb) {
        let resp = new ModifyDashboardResponse();
        this.request("ModifyDashboard", req, resp, cb);
    }

    /**
     * This API is used to create a network application.
     * @param {CreateNetworkApplicationRequest} req
     * @param {function(string, CreateNetworkApplicationResponse):void} cb
     * @public
     */
    CreateNetworkApplication(req, cb) {
        let resp = new CreateNetworkApplicationResponse();
        this.request("CreateNetworkApplication", req, resp, cb);
    }

    /**
     * This API is used to delete alarm channel callback configurations.
     * @param {DeleteWebCallbackRequest} req
     * @param {function(string, DeleteWebCallbackResponse):void} cb
     * @public
     */
    DeleteWebCallback(req, cb) {
        let resp = new DeleteWebCallbackResponse();
        this.request("DeleteWebCallback", req, resp, cb);
    }

    /**
     * This API is used to preview the logs of Kafka data subscription tasks.
     * @param {PreviewKafkaRechargeRequest} req
     * @param {function(string, PreviewKafkaRechargeResponse):void} cb
     * @public
     */
    PreviewKafkaRecharge(req, cb) {
        let resp = new PreviewKafkaRechargeResponse();
        this.request("PreviewKafkaRecharge", req, resp, cb);
    }

    /**
     * This API is used to disable Kafka consumption.
     * @param {CloseKafkaConsumerRequest} req
     * @param {function(string, CloseKafkaConsumerResponse):void} cb
     * @public
     */
    CloseKafkaConsumer(req, cb) {
        let resp = new CloseKafkaConsumerResponse();
        this.request("CloseKafkaConsumer", req, resp, cb);
    }

    /**
     * This API is used to obtain metric subscription configurations.
     * @param {DescribeClusterBaseMetricConfigsRequest} req
     * @param {function(string, DescribeClusterBaseMetricConfigsResponse):void} cb
     * @public
     */
    DescribeClusterBaseMetricConfigs(req, cb) {
        let resp = new DescribeClusterBaseMetricConfigsResponse();
        this.request("DescribeClusterBaseMetricConfigs", req, resp, cb);
    }

    /**
     * This API is used to preview the dashboard subscription.
     * @param {SearchDashboardSubscribeRequest} req
     * @param {function(string, SearchDashboardSubscribeResponse):void} cb
     * @public
     */
    SearchDashboardSubscribe(req, cb) {
        let resp = new SearchDashboardSubscribeResponse();
        this.request("SearchDashboardSubscribe", req, resp, cb);
    }

    /**
     * This API is used to create host metric collection configurations.
     * @param {CreateHostMetricConfigRequest} req
     * @param {function(string, CreateHostMetricConfigResponse):void} cb
     * @public
     */
    CreateHostMetricConfig(req, cb) {
        let resp = new CreateHostMetricConfigResponse();
        this.request("CreateHostMetricConfig", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of rebuild index tasks.
     * @param {DescribeRebuildIndexTasksRequest} req
     * @param {function(string, DescribeRebuildIndexTasksResponse):void} cb
     * @public
     */
    DescribeRebuildIndexTasks(req, cb) {
        let resp = new DescribeRebuildIndexTasksResponse();
        this.request("DescribeRebuildIndexTasks", req, resp, cb);
    }

    /**
     * This API is used to access alarm blocking configuration rules.
     * @param {DescribeAlarmShieldsRequest} req
     * @param {function(string, DescribeAlarmShieldsResponse):void} cb
     * @public
     */
    DescribeAlarmShields(req, cb) {
        let resp = new DescribeAlarmShieldsResponse();
        this.request("DescribeAlarmShields", req, resp, cb);
    }

    /**
     * This API is used to modify a scheduled SQL analysis task.
     * @param {ModifyScheduledSqlRequest} req
     * @param {function(string, ModifyScheduledSqlResponse):void} cb
     * @public
     */
    ModifyScheduledSql(req, cb) {
        let resp = new ModifyScheduledSqlResponse();
        this.request("ModifyScheduledSql", req, resp, cb);
    }

    /**
     * This API is used to delete a pre-aggregation analysis task.
     * @param {DeleteRecordingRuleTaskRequest} req
     * @param {function(string, DeleteRecordingRuleTaskResponse):void} cb
     * @public
     */
    DeleteRecordingRuleTask(req, cb) {
        let resp = new DeleteRecordingRuleTaskResponse();
        this.request("DeleteRecordingRuleTask", req, resp, cb);
    }

    /**
     * This API is used to create a machine group.
     * @param {CreateMachineGroupRequest} req
     * @param {function(string, CreateMachineGroupResponse):void} cb
     * @public
     */
    CreateMachineGroup(req, cb) {
        let resp = new CreateMachineGroupResponse();
        this.request("CreateMachineGroup", req, resp, cb);
    }

    /**
     * This API is used to delete machine group information.
     * @param {DeleteMachineGroupInfoRequest} req
     * @param {function(string, DeleteMachineGroupInfoResponse):void} cb
     * @public
     */
    DeleteMachineGroupInfo(req, cb) {
        let resp = new DeleteMachineGroupInfoResponse();
        this.request("DeleteMachineGroupInfo", req, resp, cb);
    }

    /**
     * This API is used to access alarm policy execution details.
     * @param {GetAlarmLogRequest} req
     * @param {function(string, GetAlarmLogResponse):void} cb
     * @public
     */
    GetAlarmLog(req, cb) {
        let resp = new GetAlarmLogResponse();
        this.request("GetAlarmLog", req, resp, cb);
    }

    /**
     * This API is used to submit a consumption offset.
     * @param {CommitConsumerOffsetsRequest} req
     * @param {function(string, CommitConsumerOffsetsResponse):void} cb
     * @public
     */
    CommitConsumerOffsets(req, cb) {
        let resp = new CommitConsumerOffsetsResponse();
        this.request("CommitConsumerOffsets", req, resp, cb);
    }

    /**
     * This API is used to preview the Kafka consumption.
     * @param {DescribeKafkaConsumerPreviewRequest} req
     * @param {function(string, DescribeKafkaConsumerPreviewResponse):void} cb
     * @public
     */
    DescribeKafkaConsumerPreview(req, cb) {
        let resp = new DescribeKafkaConsumerPreviewResponse();
        this.request("DescribeKafkaConsumerPreview", req, resp, cb);
    }

    /**
     * This API is used to get the list of logsets.
     * @param {DescribeLogsetsRequest} req
     * @param {function(string, DescribeLogsetsResponse):void} cb
     * @public
     */
    DescribeLogsets(req, cb) {
        let resp = new DescribeLogsetsResponse();
        this.request("DescribeLogsets", req, resp, cb);
    }

    /**
     * This API is used to create a dashboard subscription.
     * @param {CreateDashboardSubscribeRequest} req
     * @param {function(string, CreateDashboardSubscribeResponse):void} cb
     * @public
     */
    CreateDashboardSubscribe(req, cb) {
        let resp = new CreateDashboardSubscribeResponse();
        this.request("CreateDashboardSubscribe", req, resp, cb);
    }

    /**
     * This API is used to obtain metric subscription configurations.
     * @param {DescribeTopicBaseMetricConfigsRequest} req
     * @param {function(string, DescribeTopicBaseMetricConfigsResponse):void} cb
     * @public
     */
    DescribeTopicBaseMetricConfigs(req, cb) {
        let resp = new DescribeTopicBaseMetricConfigsResponse();
        this.request("DescribeTopicBaseMetricConfigs", req, resp, cb);
    }

    /**
     * This API is used to modify notification content configuration.
     * @param {ModifyNoticeContentRequest} req
     * @param {function(string, ModifyNoticeContentResponse):void} cb
     * @public
     */
    ModifyNoticeContent(req, cb) {
        let resp = new ModifyNoticeContentResponse();
        this.request("ModifyNoticeContent", req, resp, cb);
    }

    /**
     * This API is used to preview COS import information.
     * @param {SearchCosRechargeInfoRequest} req
     * @param {function(string, SearchCosRechargeInfoResponse):void} cb
     * @public
     */
    SearchCosRechargeInfo(req, cb) {
        let resp = new SearchCosRechargeInfoResponse();
        this.request("SearchCosRechargeInfo", req, resp, cb);
    }

    /**
     * This API is used to get the index configuration information.
     * @param {DescribeIndexRequest} req
     * @param {function(string, DescribeIndexResponse):void} cb
     * @public
     */
    DescribeIndex(req, cb) {
        let resp = new DescribeIndexResponse();
        this.request("DescribeIndex", req, resp, cb);
    }

    /**
     * This API is used to delete the DataSight Console
     * @param {DeleteConsoleRequest} req
     * @param {function(string, DeleteConsoleResponse):void} cb
     * @public
     */
    DeleteConsole(req, cb) {
        let resp = new DeleteConsoleResponse();
        this.request("DeleteConsole", req, resp, cb);
    }

    /**
     * This API is used to modify a Kafka data subscription task.
     * @param {ModifyKafkaRechargeRequest} req
     * @param {function(string, ModifyKafkaRechargeResponse):void} cb
     * @public
     */
    ModifyKafkaRecharge(req, cb) {
        let resp = new ModifyKafkaRechargeResponse();
        this.request("ModifyKafkaRecharge", req, resp, cb);
    }

    /**
     * This API is used to search alarm channel callback configuration lists.
     * @param {DescribeWebCallbacksRequest} req
     * @param {function(string, DescribeWebCallbacksResponse):void} cb
     * @public
     */
    DescribeWebCallbacks(req, cb) {
        let resp = new DescribeWebCallbacksResponse();
        this.request("DescribeWebCallbacks", req, resp, cb);
    }

    /**
     * Retrieve the Splunk delivery task list
     * @param {DescribeSplunkDeliversRequest} req
     * @param {function(string, DescribeSplunkDeliversResponse):void} cb
     * @public
     */
    DescribeSplunkDelivers(req, cb) {
        let resp = new DescribeSplunkDeliversResponse();
        this.request("DescribeSplunkDelivers", req, resp, cb);
    }

    /**
     * This API is used to create a notification channel group with two configuration modes to choose from.
1. Easy mode provides the most basic notification channel function. The following parameters are required:
- Type
- NoticeReceivers
- WebCallbacks

2. Advanced mode: On the basis of easy mode, it supports setting rules, setting notification channels for different types of alarms, and escalating alarms. The following parameters are required:
- NoticeRules
     * @param {CreateAlarmNoticeRequest} req
     * @param {function(string, CreateAlarmNoticeResponse):void} cb
     * @public
     */
    CreateAlarmNotice(req, cb) {
        let resp = new CreateAlarmNoticeResponse();
        this.request("CreateAlarmNotice", req, resp, cb);
    }

    /**
     * This API is used to update the consumer group information.
     * @param {ModifyConsumerGroupRequest} req
     * @param {function(string, ModifyConsumerGroupResponse):void} cb
     * @public
     */
    ModifyConsumerGroup(req, cb) {
        let resp = new ModifyConsumerGroupResponse();
        this.request("ModifyConsumerGroup", req, resp, cb);
    }

    /**
     * This API is used to delete dashboard subscriptions.
     * @param {DeleteDashboardSubscribeRequest} req
     * @param {function(string, DeleteDashboardSubscribeResponse):void} cb
     * @public
     */
    DeleteDashboardSubscribe(req, cb) {
        let resp = new DeleteDashboardSubscribeResponse();
        this.request("DeleteDashboardSubscribe", req, resp, cb);
    }

    /**
     * This API is used to creates rebuild index tasks.
Note:
-A single log topic allows only one index reconstruction task at a time and can have up to 10 rebuild index task records. Delete task records that are no longer needed before creating an index task.
-Logs within the same time range only allow rebuilding indexes once. Delete previous task records before rebuilding again.
-Deleting a rebuild index task record restores the index data before rebuilding an index.
-The log write traffic of the selected time range cannot exceed 5TB.
-The index rebuilding time range is subject to the log time. When the log uploading time has a deviation exceeding one hour from the index rebuilding time range (for example, reporting a new log at 16:00 for 02:00 to CLS and rebuilding the log index for 00:00–12:00), the logs will not be rebuilt and cannot be retrieved subsequently. When reporting a new log to the reconstructed log time range, it will not be rebuilt and cannot be retrieved subsequently.
     * @param {CreateRebuildIndexTaskRequest} req
     * @param {function(string, CreateRebuildIndexTaskResponse):void} cb
     * @public
     */
    CreateRebuildIndexTask(req, cb) {
        let resp = new CreateRebuildIndexTaskResponse();
        this.request("CreateRebuildIndexTask", req, resp, cb);
    }

    /**
     * This API is used to modify logs or metric topics.
     * @param {ModifyTopicRequest} req
     * @param {function(string, ModifyTopicResponse):void} cb
     * @public
     */
    ModifyTopic(req, cb) {
        let resp = new ModifyTopicResponse();
        this.request("ModifyTopic", req, resp, cb);
    }

    /**
     * This API is used to delete metric collection configurations.
     * @param {DeleteMetricConfigRequest} req
     * @param {function(string, DeleteMetricConfigResponse):void} cb
     * @public
     */
    DeleteMetricConfig(req, cb) {
        let resp = new DeleteMetricConfigResponse();
        this.request("DeleteMetricConfig", req, resp, cb);
    }

    /**
     * Create a Splunk delivery task
     * @param {CreateSplunkDeliverRequest} req
     * @param {function(string, CreateSplunkDeliverResponse):void} cb
     * @public
     */
    CreateSplunkDeliver(req, cb) {
        let resp = new CreateSplunkDeliverResponse();
        this.request("CreateSplunkDeliver", req, resp, cb);
    }

    /**
     * This API is used to create a data processing task.
     * @param {CreateDataTransformRequest} req
     * @param {function(string, CreateDataTransformResponse):void} cb
     * @public
     */
    CreateDataTransform(req, cb) {
        let resp = new CreateDataTransformResponse();
        this.request("CreateDataTransform", req, resp, cb);
    }

    /**
     * This API is used to add machine group information.
     * @param {AddMachineGroupInfoRequest} req
     * @param {function(string, AddMachineGroupInfoResponse):void} cb
     * @public
     */
    AddMachineGroupInfo(req, cb) {
        let resp = new AddMachineGroupInfoResponse();
        this.request("AddMachineGroupInfo", req, resp, cb);
    }

    /**
     * This API is used to delete notification content configuration.
     * @param {DeleteNoticeContentRequest} req
     * @param {function(string, DeleteNoticeContentResponse):void} cb
     * @public
     */
    DeleteNoticeContent(req, cb) {
        let resp = new DeleteNoticeContentResponse();
        this.request("DeleteNoticeContent", req, resp, cb);
    }

    /**
     * This API is used to get the basic information of data processing tasks.
     * @param {DescribeDataTransformInfoRequest} req
     * @param {function(string, DescribeDataTransformInfoResponse):void} cb
     * @public
     */
    DescribeDataTransformInfo(req, cb) {
        let resp = new DescribeDataTransformInfoResponse();
        this.request("DescribeDataTransformInfo", req, resp, cb);
    }

    /**
     * This API is used to get the notification group list.
     * @param {DescribeAlarmNoticesRequest} req
     * @param {function(string, DescribeAlarmNoticesResponse):void} cb
     * @public
     */
    DescribeAlarmNotices(req, cb) {
        let resp = new DescribeAlarmNoticesResponse();
        this.request("DescribeAlarmNotices", req, resp, cb);
    }

    /**
     * This API is deprecated. If needed, please use the DescribeTopics API to get the number of partitions.
     * @param {DescribePartitionsRequest} req
     * @param {function(string, DescribePartitionsResponse):void} cb
     * @public
     */
    DescribePartitions(req, cb) {
        let resp = new DescribePartitionsResponse();
        this.request("DescribePartitions", req, resp, cb);
    }

    /**
     * Creating a Metric Pre-Aggregation Task Through a YAML File
     * @param {CreateRecordingRuleYamlTaskRequest} req
     * @param {function(string, CreateRecordingRuleYamlTaskResponse):void} cb
     * @public
     */
    CreateRecordingRuleYamlTask(req, cb) {
        let resp = new CreateRecordingRuleYamlTaskResponse();
        this.request("CreateRecordingRuleYamlTask", req, resp, cb);
    }

    /**
     * This API is used to verify the syntax of data processing DSL functions.
     * @param {CheckFunctionRequest} req
     * @param {function(string, CheckFunctionResponse):void} cb
     * @public
     */
    CheckFunction(req, cb) {
        let resp = new CheckFunctionResponse();
        this.request("CheckFunction", req, resp, cb);
    }

    /**
     * This API is used to edit the DataSight Console
     * @param {ModifyConsoleRequest} req
     * @param {function(string, ModifyConsoleResponse):void} cb
     * @public
     */
    ModifyConsole(req, cb) {
        let resp = new ModifyConsoleResponse();
        this.request("ModifyConsole", req, resp, cb);
    }

    /**
     * This API is used to retrieve the pre-aggregation task list in yaml.
     * @param {DescribeRecordingRuleYamlTaskRequest} req
     * @param {function(string, DescribeRecordingRuleYamlTaskResponse):void} cb
     * @public
     */
    DescribeRecordingRuleYamlTask(req, cb) {
        let resp = new DescribeRecordingRuleYamlTaskResponse();
        this.request("DescribeRecordingRuleYamlTask", req, resp, cb);
    }

    /**
     * This API is used to retrieve and analyze logs. Please note the following matters when using this API.
1. Besides being subject to the default API request rate limit, for a single log topic, the number of concurrent queries cannot exceed 15.
2. The API's return data packet maximum is 49MB. It is recommended to enable gzip compression (HTTP Request Header Accept-Encoding: gzip).
     * @param {SearchLogRequest} req
     * @param {function(string, SearchLogResponse):void} cb
     * @public
     */
    SearchLog(req, cb) {
        let resp = new SearchLogResponse();
        this.request("SearchLog", req, resp, cb);
    }

    /**
     * This API is used to modify a scheduled pre-aggregation task.
     * @param {ModifyRecordingRuleTaskRequest} req
     * @param {function(string, ModifyRecordingRuleTaskResponse):void} cb
     * @public
     */
    ModifyRecordingRuleTask(req, cb) {
        let resp = new ModifyRecordingRuleTaskResponse();
        this.request("ModifyRecordingRuleTask", req, resp, cb);
    }

    /**
     * This API is used to delete a COS shipping task.
     * @param {DeleteShipperRequest} req
     * @param {function(string, DeleteShipperResponse):void} cb
     * @public
     */
    DeleteShipper(req, cb) {
        let resp = new DeleteShipperResponse();
        this.request("DeleteShipper", req, resp, cb);
    }

    /**
     * This API is used to create alarm channel callback configurations.
     * @param {CreateWebCallbackRequest} req
     * @param {function(string, CreateWebCallbackResponse):void} cb
     * @public
     */
    CreateWebCallback(req, cb) {
        let resp = new CreateWebCallbackResponse();
        this.request("CreateWebCallback", req, resp, cb);
    }

    /**
     * This API is used to query the trend of metrics within a specified time range.
     * @param {QueryRangeMetricRequest} req
     * @param {function(string, QueryRangeMetricResponse):void} cb
     * @public
     */
    QueryRangeMetric(req, cb) {
        let resp = new QueryRangeMetricResponse();
        this.request("QueryRangeMetric", req, resp, cb);
    }

    /**
     * This API is used to get the machine group bound to collection rule configuration.
     * @param {DescribeConfigMachineGroupsRequest} req
     * @param {function(string, DescribeConfigMachineGroupsResponse):void} cb
     * @public
     */
    DescribeConfigMachineGroups(req, cb) {
        let resp = new DescribeConfigMachineGroupsResponse();
        this.request("DescribeConfigMachineGroups", req, resp, cb);
    }

    /**
     * This API is used to delete a log download task.
     * @param {DeleteExportRequest} req
     * @param {function(string, DeleteExportResponse):void} cb
     * @public
     */
    DeleteExport(req, cb) {
        let resp = new DeleteExportResponse();
        this.request("DeleteExport", req, resp, cb);
    }

    /**
     * Call the API to initiate a dialogue request.
This API supports AI-powered logging features such as intelligently generating retrieval analysis statements.
Note: When calling this API via SSE streaming, ensure the request domain name is set to cls.ai.tencentcloudapi.com (configurable as cls.ai.internal.tencentcloudapi.com in a private network environment).
     * @param {ChatCompletionsRequest} req
     * @param {function(string, ChatCompletionsResponse):void} cb
     * @public
     */
    ChatCompletions(req, cb) {
        let resp = new ChatCompletionsResponse();
        this.request("ChatCompletions", req, resp, cb);
    }

    /**
     * This API is deprecated. If needed, please use the ModifyTopic API to change the number of partitions.
     * @param {SplitPartitionRequest} req
     * @param {function(string, SplitPartitionResponse):void} cb
     * @public
     */
    SplitPartition(req, cb) {
        let resp = new SplitPartitionResponse();
        this.request("SplitPartition", req, resp, cb);
    }

    /**
     * This API is used to get the list of machine groups.
     * @param {DescribeMachineGroupsRequest} req
     * @param {function(string, DescribeMachineGroupsResponse):void} cb
     * @public
     */
    DescribeMachineGroups(req, cb) {
        let resp = new DescribeMachineGroupsResponse();
        this.request("DescribeMachineGroups", req, resp, cb);
    }

    /**
     * This API is used to create a CKafka delivery task.
     * @param {CreateConsumerRequest} req
     * @param {function(string, CreateConsumerResponse):void} cb
     * @public
     */
    CreateConsumer(req, cb) {
        let resp = new CreateConsumerResponse();
        this.request("CreateConsumer", req, resp, cb);
    }

    /**
     * Creating a Metric Pre-Aggregation Task
     * @param {CreateRecordingRuleTaskRequest} req
     * @param {function(string, CreateRecordingRuleTaskResponse):void} cb
     * @public
     */
    CreateRecordingRuleTask(req, cb) {
        let resp = new CreateRecordingRuleTaskResponse();
        this.request("CreateRecordingRuleTask", req, resp, cb);
    }

    /**
     * This API is used to retrieve the pre-aggregation task list.
     * @param {DescribeRecordingRuleTaskRequest} req
     * @param {function(string, DescribeRecordingRuleTaskResponse):void} cb
     * @public
     */
    DescribeRecordingRuleTask(req, cb) {
        let resp = new DescribeRecordingRuleTaskResponse();
        this.request("DescribeRecordingRuleTask", req, resp, cb);
    }

    /**
     * This API is used to obtain the dashboard subscription list, and supports paging.
     * @param {DescribeDashboardSubscribesRequest} req
     * @param {function(string, DescribeDashboardSubscribesResponse):void} cb
     * @public
     */
    DescribeDashboardSubscribes(req, cb) {
        let resp = new DescribeDashboardSubscribesResponse();
        this.request("DescribeDashboardSubscribes", req, resp, cb);
    }

    /**
     * This API is used to get the list of shipping tasks.
     * @param {DescribeShipperTasksRequest} req
     * @param {function(string, DescribeShipperTasksResponse):void} cb
     * @public
     */
    DescribeShipperTasks(req, cb) {
        let resp = new DescribeShipperTasksResponse();
        this.request("DescribeShipperTasks", req, resp, cb);
    }

    /**
     * This API is used to modify alarm channel callback configurations.
     * @param {ModifyWebCallbackRequest} req
     * @param {function(string, ModifyWebCallbackResponse):void} cb
     * @public
     */
    ModifyWebCallback(req, cb) {
        let resp = new ModifyWebCallbackResponse();
        this.request("ModifyWebCallback", req, resp, cb);
    }

    /**
     * Modify machine group.
Note: Modifying the interface will directly overwrite historical data and change it to valid input parameters this time. Please be cautious when calling this API.
     * @param {ModifyMachineGroupRequest} req
     * @param {function(string, ModifyMachineGroupResponse):void} cb
     * @public
     */
    ModifyMachineGroup(req, cb) {
        let resp = new ModifyMachineGroupResponse();
        this.request("ModifyMachineGroup", req, resp, cb);
    }

    /**
     * This API is used to obtain the consumer group list.
     * @param {DescribeConsumerGroupsRequest} req
     * @param {function(string, DescribeConsumerGroupsResponse):void} cb
     * @public
     */
    DescribeConsumerGroups(req, cb) {
        let resp = new DescribeConsumerGroupsResponse();
        this.request("DescribeConsumerGroups", req, resp, cb);
    }

    /**
     * This API is used to obtain the topic information list of Kafka consumption.
     * @param {DescribeKafkaConsumerTopicsRequest} req
     * @param {function(string, DescribeKafkaConsumerTopicsResponse):void} cb
     * @public
     */
    DescribeKafkaConsumerTopics(req, cb) {
        let resp = new DescribeKafkaConsumerTopicsResponse();
        this.request("DescribeKafkaConsumerTopics", req, resp, cb);
    }

    /**
     * This API is used to delete the pre-aggregation task in yaml.
     * @param {DeleteRecordingRuleYamlTaskRequest} req
     * @param {function(string, DeleteRecordingRuleYamlTaskResponse):void} cb
     * @public
     */
    DeleteRecordingRuleYamlTask(req, cb) {
        let resp = new DeleteRecordingRuleYamlTaskResponse();
        this.request("DeleteRecordingRuleYamlTask", req, resp, cb);
    }

    /**
     * This API is used to modify alarm blocking rules. When the alarm blocking rule is invalid, it cannot be modified.
     * @param {ModifyAlarmShieldRequest} req
     * @param {function(string, ModifyAlarmShieldResponse):void} cb
     * @public
     */
    ModifyAlarmShield(req, cb) {
        let resp = new ModifyAlarmShieldResponse();
        this.request("ModifyAlarmShield", req, resp, cb);
    }

    /**
     * This API is used to access the scheduled SQL analysis task list.
     * @param {DescribeScheduledSqlInfoRequest} req
     * @param {function(string, DescribeScheduledSqlInfoResponse):void} cb
     * @public
     */
    DescribeScheduledSqlInfo(req, cb) {
        let resp = new DescribeScheduledSqlInfoResponse();
        this.request("DescribeScheduledSqlInfo", req, resp, cb);
    }

    /**
     * This API is used to delete collection rule configuration.
     * @param {DeleteConfigRequest} req
     * @param {function(string, DeleteConfigResponse):void} cb
     * @public
     */
    DeleteConfig(req, cb) {
        let resp = new DeleteConfigResponse();
        this.request("DeleteConfig", req, resp, cb);
    }

    /**
     * This API is used to get the collection rule configuration bound to a machine group.
     * @param {DescribeMachineGroupConfigsRequest} req
     * @param {function(string, DescribeMachineGroupConfigsResponse):void} cb
     * @public
     */
    DescribeMachineGroupConfigs(req, cb) {
        let resp = new DescribeMachineGroupConfigsResponse();
        this.request("DescribeMachineGroupConfigs", req, resp, cb);
    }

    /**
     * This API is used to check whether the Kafka service cluster is accessible.
     * @param {CheckRechargeKafkaServerRequest} req
     * @param {function(string, CheckRechargeKafkaServerResponse):void} cb
     * @public
     */
    CheckRechargeKafkaServer(req, cb) {
        let resp = new CheckRechargeKafkaServerResponse();
        this.request("CheckRechargeKafkaServer", req, resp, cb);
    }

    /**
     * Modifying a Metric Pre-Aggregation Task Through a YAML File
     * @param {ModifyRecordingRuleYamlTaskRequest} req
     * @param {function(string, ModifyRecordingRuleYamlTaskResponse):void} cb
     * @public
     */
    ModifyRecordingRuleYamlTask(req, cb) {
        let resp = new ModifyRecordingRuleYamlTaskResponse();
        this.request("ModifyRecordingRuleYamlTask", req, resp, cb);
    }

    /**
     * This API is used to modify an alarm policy. At least one valid configuration item needs to be modified.
     * @param {ModifyAlarmRequest} req
     * @param {function(string, ModifyAlarmResponse):void} cb
     * @public
     */
    ModifyAlarm(req, cb) {
        let resp = new ModifyAlarmResponse();
        this.request("ModifyAlarm", req, resp, cb);
    }

    /**
     * This API is used to get the configuration of the task shipped to COS.
     * @param {DescribeShippersRequest} req
     * @param {function(string, DescribeShippersResponse):void} cb
     * @public
     */
    DescribeShippers(req, cb) {
        let resp = new DescribeShippersResponse();
        this.request("DescribeShippers", req, resp, cb);
    }

    /**
     * This API is used to modify Kafka protocol consumption group offsets.
     * @param {ModifyKafkaConsumerGroupOffsetRequest} req
     * @param {function(string, ModifyKafkaConsumerGroupOffsetResponse):void} cb
     * @public
     */
    ModifyKafkaConsumerGroupOffset(req, cb) {
        let resp = new ModifyKafkaConsumerGroupOffsetResponse();
        this.request("ModifyKafkaConsumerGroupOffset", req, resp, cb);
    }

    /**
     * This API is used to obtain metric subscription configurations.
     * @param {DescribeMetricSubscribesRequest} req
     * @param {function(string, DescribeMetricSubscribesResponse):void} cb
     * @public
     */
    DescribeMetricSubscribes(req, cb) {
        let resp = new DescribeMetricSubscribesResponse();
        this.request("DescribeMetricSubscribes", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of time series label values.
     * @param {GetMetricLabelValuesRequest} req
     * @param {function(string, GetMetricLabelValuesResponse):void} cb
     * @public
     */
    GetMetricLabelValues(req, cb) {
        let resp = new GetMetricLabelValuesResponse();
        this.request("GetMetricLabelValues", req, resp, cb);
    }

    /**
     * This API is used to obtain the shipping rule information list.
     * @param {DescribeConsumersRequest} req
     * @param {function(string, DescribeConsumersResponse):void} cb
     * @public
     */
    DescribeConsumers(req, cb) {
        let resp = new DescribeConsumersResponse();
        this.request("DescribeConsumers", req, resp, cb);
    }

    /**
     * Delete a web application
     * @param {DeleteNetworkApplicationRequest} req
     * @param {function(string, DeleteNetworkApplicationResponse):void} cb
     * @public
     */
    DeleteNetworkApplication(req, cb) {
        let resp = new DeleteNetworkApplicationResponse();
        this.request("DeleteNetworkApplication", req, resp, cb);
    }

    /**
     * Retrieve Kafka protocol consumption group details
     * @param {DescribeKafkaConsumerGroupDetailRequest} req
     * @param {function(string, DescribeKafkaConsumerGroupDetailResponse):void} cb
     * @public
     */
    DescribeKafkaConsumerGroupDetail(req, cb) {
        let resp = new DescribeKafkaConsumerGroupDetailResponse();
        this.request("DescribeKafkaConsumerGroupDetail", req, resp, cb);
    }

    /**
     * This API is used to delete a notification group.
     * @param {DeleteAlarmNoticeRequest} req
     * @param {function(string, DeleteAlarmNoticeResponse):void} cb
     * @public
     */
    DeleteAlarmNotice(req, cb) {
        let resp = new DeleteAlarmNoticeResponse();
        this.request("DeleteAlarmNotice", req, resp, cb);
    }

    /**
     * This API is used to modify a COS import task.
     * @param {ModifyCosRechargeRequest} req
     * @param {function(string, ModifyCosRechargeResponse):void} cb
     * @public
     */
    ModifyCosRecharge(req, cb) {
        let resp = new ModifyCosRechargeResponse();
        this.request("ModifyCosRecharge", req, resp, cb);
    }

    /**
     * This API is used to modify collection rule configuration.
     * @param {ModifyConfigRequest} req
     * @param {function(string, ModifyConfigResponse):void} cb
     * @public
     */
    ModifyConfig(req, cb) {
        let resp = new ModifyConfigResponse();
        this.request("ModifyConfig", req, resp, cb);
    }

    /**
     * ## Notification
To ensure the reliability of your log data and use the log service more efficiently, we recommend that you use the CLS-optimized API to upload structured logs (https://www.tencentcloud.com/document/product/614/16873?from_cn_redirect=1).

Meanwhile, we have specially optimized and customized SDKs in multiple languages for this API for you to choose from. The SDK provides unified async sending, resource control, automatic retry, graceful shutdown, perception reporting, and other features to improve the log reporting function. For details, refer to [SDK Collection](https://www.tencentcloud.com/document/product/614/67157?from_cn_redirect=1).

Meanwhile, the log upload API also supports synchronous log data upload. If you select to continue using this API, refer to the following text.

## Feature Description

This API is used to write logs to the designated log topic.

#### Input parameter (pb binary stream, located in body)

| Field name | Data type | Location | Must | Description |
| ------------ | ------- | ---- | ---- | ------------------------------------------------------------ |
| logGroupList | message | pb   | Yes | logGroup list, encapsulated content of the log group list. It is advisable not to exceed 5 logGroups. |

Group description:

| Field name | Required or optional | Description |
| ----------- | -------- | ------------------------------------------------------------ |
| logs        | is       | a log array, which means a set of multiple logs. One Log represents one log, and the number of logs in one LogGroup cannot exceed 10000 |
| contextFlow | No | The unique ID of LogGroup, which must be imported when using context features. Format: "{context ID}-{LogGroupID}".<br>Context ID: A unique identifier for a context (a series of consecutively scrolled log files or a sequence of logs requiring order preservation), a 64-bit integer string in base 16.<br>LogGroupID: A consecutively incremental integer string in base 16. Example: "102700A66102516A-59F59".
| filename    | No       | Log file name |
| source      | No       | Log source, using machine IP as a label in general use       |
| logTags     | No       | Log tag list                                               |

Log description:

| field name | Required or optional | Description |
| -------- | -------- | ------------------------------------------------------------ |
| time     | is       | log time (Unix timestamp), supports second, millisecond, microsecond, milliseconds is recommended |
| contents | No | Key-value formatted log content, representing multiple key-value composites in a log |

Content description:

| Field name | Required or optional | Description |
| ------ | -------- | ------------------------------------------------------------ |
| key    | Yes       | The key value of a field group in a single-line log. It cannot start with `_` |
| value  | Yes       | The value of a field group in a single-line log. The value of a single-line log must not exceed 1MB, and the sum of ALL values in a LogGroup cannot exceed 5MB. |

LogTag description:

| Field name | Required or optional | Description |
| ------ | -------- | -------------------------------- |
| key    | Yes      | Custom tag key                 |
| value  | is       | value corresponding to the custom tag key |

## PB Compilation Example

This example shows how to use the official protoc compiler to compile and generate a C++ language adjustable log upload API from a description file.

Currently protoc officially supports compilation for languages such as Java, C++, and Python. For details, see [protoc](https://github.com/protocolbuffers/protobuf).

#### 1. Protocol Buffer installation

Download [Protocol Buffer](https://main.qcloudimg.com/raw/d7810aaf8b3073fbbc9d4049c21532aa/protobuf-2.6.1.tar.gz), unzip and install. The example version is protobuf 2.6.1, and the environment is Centos 7.3 system. Decompress the `protobuf-2.6.1.tar.gz` compressed package to the `/usr/local` directory and enter the directory. Execute the command as follows:

```
tar -zxvf protobuf-2.6.1.tar.gz -C /usr/local/ && cd /usr/local/protobuf-2.6.1
```

Start compilation and installation, configure environment variables, execute the command as follows:

```
[root@VM_0_8_centos protobuf-2.6.1]# ./configure 
[root@VM_0_8_centos protobuf-2.6.1]# make && make install
[root@VM_0_8_centos protobuf-2.6.1]# export PATH=$PATH:/usr/local/protobuf-2.6.1/bin
```

After successful compilation, view the version using the following command:

```
[root@VM_0_8_centos protobuf-2.6.1]# protoc --version
liprotoc 2.6.1
```

#### 2. Create PB description file

The PB description file is the data interchange format agreed by the communication parties. When uploading logs, compile the specified protocol format into the calling interface of the corresponding language version, then add to engineering code. For details, see [protoc](https://github.com/protocolbuffers/protobuf).

Create a local PB message description file cls.proto based on the PB data format specified by the log service.

!PB description file content immutable, and the file name must end with `.proto`.

The content of cls.proto (PB description file) is as follows:

```
package cls;

message Log
{
    message Content
    {
required string key = 1; // key for each group of fields
required string value = 2; // The value of the group field
    }
required int64   time     = 1; // A timestamp in UNIX time format
repeated Content contents = 2; // multiple kv combinations in a log
}

message LogTag
{
    required string key       = 1;
    required string value     = 2;
}

message LogGroup
{
repeated Log    logs        = 1; // log array composed of multiple logs
optional string contextFlow = 2; // Currently no utility
optional string filename = 3; // log file name
optional string source      = 4; // log source, general use machine IP
    repeated LogTag logTags     = 5;
}

message LogGroupList
{
repeated LogGroup logGroupList = 1; // log group list
}
```

#### 3. Compile and generate

In this example, use the proto compiler to generate C++ language files under the same directory as the cls.proto file and execute the following compilation command:

```
protoc --cpp_out=./ ./cls.proto 
```

`--cpp_out=./` means compile to cpp format and output in the current directory. `./cls.proto` refers to the cls.proto description file located in the current directory.

After successful compilation, it will output the code file in the corresponding language. This routine generates the cls.pb.h header file and the cls.pb.cc code implementation file, as shown below:

```
[root@VM_0_8_centos protobuf-2.6.1]# protoc --cpp_out=./ ./cls.proto
[root@VM_0_8_centos protobuf-2.6.1]# ls
cls.pb.cc cls.pb.h cls.proto
```

#### 4. Call

Import the generated cls.pb.h header file into the code and call the interface to encapsulate the data format.
     * @param {UploadLogRequest} req
     * @param {function(string, UploadLogResponse):void} cb
     * @public
     */
    UploadLog(req, cb) {
        let resp = new UploadLogResponse();
        this.request("UploadLog", req, resp, cb);
    }

    /**
     * This API is used to create a scheduled SQL analysis task.
     * @param {CreateScheduledSqlRequest} req
     * @param {function(string, CreateScheduledSqlResponse):void} cb
     * @public
     */
    CreateScheduledSql(req, cb) {
        let resp = new CreateScheduledSqlResponse();
        this.request("CreateScheduledSql", req, resp, cb);
    }

    /**
     * This API is used to modify a logset.
     * @param {ModifyLogsetRequest} req
     * @param {function(string, ModifyLogsetResponse):void} cb
     * @public
     */
    ModifyLogset(req, cb) {
        let resp = new ModifyLogsetResponse();
        this.request("ModifyLogset", req, resp, cb);
    }

    /**
     * This API is used to modify a CKafka delivery task.
     * @param {ModifyConsumerRequest} req
     * @param {function(string, ModifyConsumerResponse):void} cb
     * @public
     */
    ModifyConsumer(req, cb) {
        let resp = new ModifyConsumerResponse();
        this.request("ModifyConsumer", req, resp, cb);
    }

    /**
     * This API is used to modify a data processing task.
     * @param {ModifyDataTransformRequest} req
     * @param {function(string, ModifyDataTransformResponse):void} cb
     * @public
     */
    ModifyDataTransform(req, cb) {
        let resp = new ModifyDataTransformResponse();
        this.request("ModifyDataTransform", req, resp, cb);
    }

    /**
     * This API is used to create the DataSight Console
     * @param {CreateConsoleRequest} req
     * @param {function(string, CreateConsoleResponse):void} cb
     * @public
     */
    CreateConsole(req, cb) {
        let resp = new CreateConsoleResponse();
        this.request("CreateConsole", req, resp, cb);
    }

    /**
     * This API is used to delete an alarm policy.
     * @param {DeleteAlarmRequest} req
     * @param {function(string, DeleteAlarmResponse):void} cb
     * @public
     */
    DeleteAlarm(req, cb) {
        let resp = new DeleteAlarmResponse();
        this.request("DeleteAlarm", req, resp, cb);
    }

    /**
     * This API is used to modify a query view.
     * @param {ModifySearchViewRequest} req
     * @param {function(string, ModifySearchViewResponse):void} cb
     * @public
     */
    ModifySearchView(req, cb) {
        let resp = new ModifySearchViewResponse();
        this.request("ModifySearchView", req, resp, cb);
    }

    /**
     * This API is used to search for content near the log context. For more details, see [Context Search](https://intl.cloud.tencent.com/document/product/614/53248?from_cn_redirect=1).The maximum value of API's return data packet is 49MB. It is recommended to enable gzip compression (HTTP Request Header Accept-Encoding: gzip).
     * @param {DescribeLogContextRequest} req
     * @param {function(string, DescribeLogContextResponse):void} cb
     * @public
     */
    DescribeLogContext(req, cb) {
        let resp = new DescribeLogContextResponse();
        this.request("DescribeLogContext", req, resp, cb);
    }

    /**
     * This API is used to query a shipping task.
     * @param {DescribeConsumerRequest} req
     * @param {function(string, DescribeConsumerResponse):void} cb
     * @public
     */
    DescribeConsumer(req, cb) {
        let resp = new DescribeConsumerResponse();
        this.request("DescribeConsumer", req, resp, cb);
    }

    /**
     * This API is used to create metric collection configurations.
     * @param {CreateMetricConfigRequest} req
     * @param {function(string, CreateMetricConfigResponse):void} cb
     * @public
     */
    CreateMetricConfig(req, cb) {
        let resp = new CreateMetricConfigResponse();
        this.request("CreateMetricConfig", req, resp, cb);
    }

    /**
     * This API is used to obtain the notification content list.
     * @param {DescribeNoticeContentsRequest} req
     * @param {function(string, DescribeNoticeContentsResponse):void} cb
     * @public
     */
    DescribeNoticeContents(req, cb) {
        let resp = new DescribeNoticeContentsResponse();
        this.request("DescribeNoticeContents", req, resp, cb);
    }

    /**
     * This API is used to delete the index configuration of a log topic. After deleting, you cannot retrieve or query the collected logs.
     * @param {DeleteIndexRequest} req
     * @param {function(string, DeleteIndexResponse):void} cb
     * @public
     */
    DeleteIndex(req, cb) {
        let resp = new DeleteIndexResponse();
        this.request("DeleteIndex", req, resp, cb);
    }

    /**
     * This API is used to create metric collection configurations.
     * @param {ModifyMetricConfigRequest} req
     * @param {function(string, ModifyMetricConfigResponse):void} cb
     * @public
     */
    ModifyMetricConfig(req, cb) {
        let resp = new ModifyMetricConfigResponse();
        this.request("ModifyMetricConfig", req, resp, cb);
    }

    /**
     * This API is used to get the status of a machine under the specified machine group.
     * @param {DescribeMachinesRequest} req
     * @param {function(string, DescribeMachinesResponse):void} cb
     * @public
     */
    DescribeMachines(req, cb) {
        let resp = new DescribeMachinesResponse();
        this.request("DescribeMachines", req, resp, cb);
    }

    /**
     * This API is used to retry a failed shipping task.
     * @param {RetryShipperTaskRequest} req
     * @param {function(string, RetryShipperTaskResponse):void} cb
     * @public
     */
    RetryShipperTask(req, cb) {
        let resp = new RetryShipperTaskResponse();
        this.request("RetryShipperTask", req, resp, cb);
    }

    /**
     * This API is used to access Kafka protocol consumption information.
     * @param {DescribeKafkaConsumerRequest} req
     * @param {function(string, DescribeKafkaConsumerResponse):void} cb
     * @public
     */
    DescribeKafkaConsumer(req, cb) {
        let resp = new DescribeKafkaConsumerResponse();
        this.request("DescribeKafkaConsumer", req, resp, cb);
    }

    /**
     * This API is used to create an alarm policy.
     * @param {CreateAlarmRequest} req
     * @param {function(string, CreateAlarmResponse):void} cb
     * @public
     */
    CreateAlarm(req, cb) {
        let resp = new CreateAlarmResponse();
        this.request("CreateAlarm", req, resp, cb);
    }

    /**
     * This API is used to delete logs or metric topics.
     * @param {DeleteTopicRequest} req
     * @param {function(string, DeleteTopicResponse):void} cb
     * @public
     */
    DeleteTopic(req, cb) {
        let resp = new DeleteTopicResponse();
        this.request("DeleteTopic", req, resp, cb);
    }


}
module.exports = ClsClient;
