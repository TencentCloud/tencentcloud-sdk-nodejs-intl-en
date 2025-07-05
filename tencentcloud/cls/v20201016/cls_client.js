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
const UploadLogResponse = models.UploadLogResponse;
const CreateAlarmResponse = models.CreateAlarmResponse;
const AlarmInfo = models.AlarmInfo;
const LogInfo = models.LogInfo;
const DeleteAlarmNoticeResponse = models.DeleteAlarmNoticeResponse;
const DescribeLogHistogramRequest = models.DescribeLogHistogramRequest;
const DeleteAlarmShieldRequest = models.DeleteAlarmShieldRequest;
const DescribeLogContextRequest = models.DescribeLogContextRequest;
const DeleteShipperRequest = models.DeleteShipperRequest;
const DeleteScheduledSqlRequest = models.DeleteScheduledSqlRequest;
const DynamicIndex = models.DynamicIndex;
const DeleteLogsetResponse = models.DeleteLogsetResponse;
const ParquetKeyInfo = models.ParquetKeyInfo;
const DescribeCosRechargesResponse = models.DescribeCosRechargesResponse;
const DescribeShipperTasksResponse = models.DescribeShipperTasksResponse;
const CheckFunctionRequest = models.CheckFunctionRequest;
const Filter = models.Filter;
const DescribeAlarmShieldsResponse = models.DescribeAlarmShieldsResponse;
const SearchCosRechargeInfoRequest = models.SearchCosRechargeInfoRequest;
const KafkaRechargeInfo = models.KafkaRechargeInfo;
const ModifyLogsetRequest = models.ModifyLogsetRequest;
const UploadLogRequest = models.UploadLogRequest;
const CreateLogsetRequest = models.CreateLogsetRequest;
const DescribeShippersRequest = models.DescribeShippersRequest;
const CreateScheduledSqlResponse = models.CreateScheduledSqlResponse;
const QueryMetricRequest = models.QueryMetricRequest;
const LogItem = models.LogItem;
const SearchLogResponse = models.SearchLogResponse;
const DeleteTopicRequest = models.DeleteTopicRequest;
const DescribePartitionsRequest = models.DescribePartitionsRequest;
const ConfigInfo = models.ConfigInfo;
const ModifyAlarmResponse = models.ModifyAlarmResponse;
const DescribeShipperTasksRequest = models.DescribeShipperTasksRequest;
const DescribeAlarmsRequest = models.DescribeAlarmsRequest;
const MergePartitionRequest = models.MergePartitionRequest;
const DescribeShippersResponse = models.DescribeShippersResponse;
const DescribeKafkaConsumerResponse = models.DescribeKafkaConsumerResponse;
const ModifyShipperResponse = models.ModifyShipperResponse;
const DeleteKafkaRechargeResponse = models.DeleteKafkaRechargeResponse;
const ModifyDataTransformRequest = models.ModifyDataTransformRequest;
const DescribeScheduledSqlInfoResponse = models.DescribeScheduledSqlInfoResponse;
const CallBackInfo = models.CallBackInfo;
const OpenKafkaConsumerResponse = models.OpenKafkaConsumerResponse;
const AlarmTargetInfo = models.AlarmTargetInfo;
const AlarmClassification = models.AlarmClassification;
const ScheduledSqlResouceInfo = models.ScheduledSqlResouceInfo;
const RetryShipperTaskResponse = models.RetryShipperTaskResponse;
const DescribeIndexRequest = models.DescribeIndexRequest;
const ModifyScheduledSqlResponse = models.ModifyScheduledSqlResponse;
const ConditionInfo = models.ConditionInfo;
const DeleteMachineGroupInfoRequest = models.DeleteMachineGroupInfoRequest;
const CreateLogsetResponse = models.CreateLogsetResponse;
const NoticeRule = models.NoticeRule;
const DeleteMachineGroupResponse = models.DeleteMachineGroupResponse;
const KafkaProtocolInfo = models.KafkaProtocolInfo;
const ScheduledSqlTaskInfo = models.ScheduledSqlTaskInfo;
const DescribeConfigMachineGroupsRequest = models.DescribeConfigMachineGroupsRequest;
const MetaTagInfo = models.MetaTagInfo;
const CreateCosRechargeRequest = models.CreateCosRechargeRequest;
const DescribeConfigsResponse = models.DescribeConfigsResponse;
const ExtractRuleInfo = models.ExtractRuleInfo;
const CreateAlarmShieldResponse = models.CreateAlarmShieldResponse;
const DeleteDataTransformResponse = models.DeleteDataTransformResponse;
const ShipperTaskInfo = models.ShipperTaskInfo;
const ModifyConsumerRequest = models.ModifyConsumerRequest;
const CreateIndexResponse = models.CreateIndexResponse;
const DeleteConfigFromMachineGroupResponse = models.DeleteConfigFromMachineGroupResponse;
const CreateConsumerResponse = models.CreateConsumerResponse;
const ModifyMachineGroupResponse = models.ModifyMachineGroupResponse;
const DataTransformResouceInfo = models.DataTransformResouceInfo;
const DeleteMachineGroupRequest = models.DeleteMachineGroupRequest;
const FullTextInfo = models.FullTextInfo;
const QueryMetricResponse = models.QueryMetricResponse;
const DescribeAlarmShieldsRequest = models.DescribeAlarmShieldsRequest;
const DescribePartitionsResponse = models.DescribePartitionsResponse;
const DescribeConfigMachineGroupsResponse = models.DescribeConfigMachineGroupsResponse;
const ModifyAlarmRequest = models.ModifyAlarmRequest;
const DescribeTopicsResponse = models.DescribeTopicsResponse;
const LogItems = models.LogItems;
const ModifyAlarmNoticeRequest = models.ModifyAlarmNoticeRequest;
const TopicExtendInfo = models.TopicExtendInfo;
const EventLog = models.EventLog;
const CreateAlarmRequest = models.CreateAlarmRequest;
const DeleteExportResponse = models.DeleteExportResponse;
const SearchLogInfos = models.SearchLogInfos;
const PartitionInfo = models.PartitionInfo;
const DeleteScheduledSqlResponse = models.DeleteScheduledSqlResponse;
const AlertHistoryRecord = models.AlertHistoryRecord;
const ExcludePathInfo = models.ExcludePathInfo;
const FilterRuleInfo = models.FilterRuleInfo;
const ModifyKafkaConsumerRequest = models.ModifyKafkaConsumerRequest;
const CreateMachineGroupResponse = models.CreateMachineGroupResponse;
const SplitPartitionRequest = models.SplitPartitionRequest;
const CheckRechargeKafkaServerRequest = models.CheckRechargeKafkaServerRequest;
const CreateAlarmShieldRequest = models.CreateAlarmShieldRequest;
const MachineGroupInfo = models.MachineGroupInfo;
const DescribeLogHistogramResponse = models.DescribeLogHistogramResponse;
const CloseKafkaConsumerResponse = models.CloseKafkaConsumerResponse;
const DeleteAlarmShieldResponse = models.DeleteAlarmShieldResponse;
const CreateIndexRequest = models.CreateIndexRequest;
const DescribeLogsetsResponse = models.DescribeLogsetsResponse;
const DeleteConsumerResponse = models.DeleteConsumerResponse;
const DescribeTopicsRequest = models.DescribeTopicsRequest;
const GetAlarmLogResponse = models.GetAlarmLogResponse;
const CreateTopicRequest = models.CreateTopicRequest;
const DescribeExportsRequest = models.DescribeExportsRequest;
const DescribeMachineGroupsRequest = models.DescribeMachineGroupsRequest;
const DescribeCosRechargesRequest = models.DescribeCosRechargesRequest;
const AlarmTarget = models.AlarmTarget;
const CreateKafkaRechargeResponse = models.CreateKafkaRechargeResponse;
const ModifyScheduledSqlRequest = models.ModifyScheduledSqlRequest;
const DeleteConfigResponse = models.DeleteConfigResponse;
const ModifyAlarmShieldResponse = models.ModifyAlarmShieldResponse;
const CreateDeliverCloudFunctionRequest = models.CreateDeliverCloudFunctionRequest;
const DeleteConsumerRequest = models.DeleteConsumerRequest;
const QueryRangeMetricResponse = models.QueryRangeMetricResponse;
const DeleteIndexRequest = models.DeleteIndexRequest;
const AnonymousInfo = models.AnonymousInfo;
const SearchLogTopics = models.SearchLogTopics;
const ModifyConsumerResponse = models.ModifyConsumerResponse;
const DescribeAlertRecordHistoryRequest = models.DescribeAlertRecordHistoryRequest;
const DescribeConfigsRequest = models.DescribeConfigsRequest;
const KafkaConsumerContent = models.KafkaConsumerContent;
const LogsetInfo = models.LogsetInfo;
const DescribeConsumerRequest = models.DescribeConsumerRequest;
const DeleteConfigRequest = models.DeleteConfigRequest;
const AnalysisDimensional = models.AnalysisDimensional;
const LogRechargeRuleInfo = models.LogRechargeRuleInfo;
const CloseKafkaConsumerRequest = models.CloseKafkaConsumerRequest;
const RuleTagInfo = models.RuleTagInfo;
const CreateExportRequest = models.CreateExportRequest;
const QueryRangeMetricRequest = models.QueryRangeMetricRequest;
const DescribeAlarmNoticesResponse = models.DescribeAlarmNoticesResponse;
const DeleteDataTransformRequest = models.DeleteDataTransformRequest;
const DescribeMachineGroupsResponse = models.DescribeMachineGroupsResponse;
const ModifyConfigRequest = models.ModifyConfigRequest;
const AddMachineGroupInfoRequest = models.AddMachineGroupInfoRequest;
const DescribeKafkaRechargesRequest = models.DescribeKafkaRechargesRequest;
const JsonInfo = models.JsonInfo;
const PreviewKafkaRechargeResponse = models.PreviewKafkaRechargeResponse;
const CreateShipperRequest = models.CreateShipperRequest;
const CreateTopicResponse = models.CreateTopicResponse;
const DeleteAlarmResponse = models.DeleteAlarmResponse;
const WebCallback = models.WebCallback;
const DescribeAlarmsResponse = models.DescribeAlarmsResponse;
const CreateAlarmNoticeResponse = models.CreateAlarmNoticeResponse;
const ModifyTopicResponse = models.ModifyTopicResponse;
const CreateConfigRequest = models.CreateConfigRequest;
const CreateShipperResponse = models.CreateShipperResponse;
const DescribeKafkaRechargesResponse = models.DescribeKafkaRechargesResponse;
const DeleteIndexResponse = models.DeleteIndexResponse;
const AlarmAnalysisConfig = models.AlarmAnalysisConfig;
const SearchLogErrors = models.SearchLogErrors;
const ModifyIndexRequest = models.ModifyIndexRequest;
const Column = models.Column;
const ContentInfo = models.ContentInfo;
const ValueInfo = models.ValueInfo;
const DescribeDataTransformInfoRequest = models.DescribeDataTransformInfoRequest;
const DeleteShipperResponse = models.DeleteShipperResponse;
const ExportInfo = models.ExportInfo;
const ModifyIndexResponse = models.ModifyIndexResponse;
const TopicInfo = models.TopicInfo;
const GroupTriggerConditionInfo = models.GroupTriggerConditionInfo;
const DescribeLogContextResponse = models.DescribeLogContextResponse;
const CheckFunctionResponse = models.CheckFunctionResponse;
const DeleteExportRequest = models.DeleteExportRequest;
const PreviewKafkaRechargeRequest = models.PreviewKafkaRechargeRequest;
const SplitPartitionResponse = models.SplitPartitionResponse;
const CreateDataTransformResponse = models.CreateDataTransformResponse;
const LogContextInfo = models.LogContextInfo;
const ModifyShipperRequest = models.ModifyShipperRequest;
const NoticeReceiver = models.NoticeReceiver;
const CreateKafkaRechargeRequest = models.CreateKafkaRechargeRequest;
const DeleteKafkaRechargeRequest = models.DeleteKafkaRechargeRequest;
const RuleInfo = models.RuleInfo;
const CreateConfigResponse = models.CreateConfigResponse;
const CreateConsumerRequest = models.CreateConsumerRequest;
const MultiTopicSearchInformation = models.MultiTopicSearchInformation;
const AlarmNotice = models.AlarmNotice;
const ModifyConfigResponse = models.ModifyConfigResponse;
const OpenKafkaConsumerRequest = models.OpenKafkaConsumerRequest;
const ModifyKafkaRechargeResponse = models.ModifyKafkaRechargeResponse;
const ModifyAlarmNoticeResponse = models.ModifyAlarmNoticeResponse;
const CreateDeliverCloudFunctionResponse = models.CreateDeliverCloudFunctionResponse;
const DataTransformTaskInfo = models.DataTransformTaskInfo;
const DescribeMachinesResponse = models.DescribeMachinesResponse;
const ModifyCosRechargeResponse = models.ModifyCosRechargeResponse;
const PreviewLogStatistic = models.PreviewLogStatistic;
const CompressInfo = models.CompressInfo;
const ApplyConfigToMachineGroupResponse = models.ApplyConfigToMachineGroupResponse;
const AlertHistoryNotice = models.AlertHistoryNotice;
const DeleteAlarmRequest = models.DeleteAlarmRequest;
const AlarmShieldInfo = models.AlarmShieldInfo;
const ModifyKafkaConsumerResponse = models.ModifyKafkaConsumerResponse;
const MachineGroupTypeInfo = models.MachineGroupTypeInfo;
const DeleteConfigFromMachineGroupRequest = models.DeleteConfigFromMachineGroupRequest;
const SearchCosRechargeInfoResponse = models.SearchCosRechargeInfoResponse;
const ShipperInfo = models.ShipperInfo;
const CreateCosRechargeResponse = models.CreateCosRechargeResponse;
const DescribeAlertRecordHistoryResponse = models.DescribeAlertRecordHistoryResponse;
const KeyValueInfo = models.KeyValueInfo;
const AddMachineGroupInfoResponse = models.AddMachineGroupInfoResponse;
const ModifyMachineGroupRequest = models.ModifyMachineGroupRequest;
const DescribeAlarmNoticesRequest = models.DescribeAlarmNoticesRequest;
const DescribeConsumerResponse = models.DescribeConsumerResponse;
const MetricLabel = models.MetricLabel;
const ModifyTopicRequest = models.ModifyTopicRequest;
const Ckafka = models.Ckafka;
const DescribeMachinesRequest = models.DescribeMachinesRequest;
const MultiCondition = models.MultiCondition;
const DeleteAlarmNoticeRequest = models.DeleteAlarmNoticeRequest;
const DescribeScheduledSqlInfoRequest = models.DescribeScheduledSqlInfoRequest;
const DeleteLogsetRequest = models.DeleteLogsetRequest;
const MachineInfo = models.MachineInfo;
const ModifyLogsetResponse = models.ModifyLogsetResponse;
const MonitorTime = models.MonitorTime;
const SearchLogRequest = models.SearchLogRequest;
const CreateMachineGroupRequest = models.CreateMachineGroupRequest;
const Tag = models.Tag;
const ModifyAlarmShieldRequest = models.ModifyAlarmShieldRequest;
const DescribeExportsResponse = models.DescribeExportsResponse;
const ApplyConfigToMachineGroupRequest = models.ApplyConfigToMachineGroupRequest;
const GetAlarmLogRequest = models.GetAlarmLogRequest;
const DescribeMachineGroupConfigsResponse = models.DescribeMachineGroupConfigsResponse;
const CsvInfo = models.CsvInfo;
const CreateAlarmNoticeRequest = models.CreateAlarmNoticeRequest;
const DescribeIndexResponse = models.DescribeIndexResponse;
const HistogramInfo = models.HistogramInfo;
const DescribeMachineGroupConfigsRequest = models.DescribeMachineGroupConfigsRequest;
const ModifyKafkaRechargeRequest = models.ModifyKafkaRechargeRequest;
const CreateDataTransformRequest = models.CreateDataTransformRequest;
const DeleteMachineGroupInfoResponse = models.DeleteMachineGroupInfoResponse;
const CheckRechargeKafkaServerResponse = models.CheckRechargeKafkaServerResponse;
const ModifyCosRechargeRequest = models.ModifyCosRechargeRequest;
const DescribeLogsetsRequest = models.DescribeLogsetsRequest;
const ParquetInfo = models.ParquetInfo;
const DeleteTopicResponse = models.DeleteTopicResponse;
const CosRechargeInfo = models.CosRechargeInfo;
const RuleKeyValueInfo = models.RuleKeyValueInfo;
const DescribeKafkaConsumerRequest = models.DescribeKafkaConsumerRequest;
const ModifyDataTransformResponse = models.ModifyDataTransformResponse;
const DescribeDataTransformInfoResponse = models.DescribeDataTransformInfoResponse;
const ConsumerContent = models.ConsumerContent;
const HighLightItem = models.HighLightItem;
const RetryShipperTaskRequest = models.RetryShipperTaskRequest;
const CreateExportResponse = models.CreateExportResponse;
const KeyRegexInfo = models.KeyRegexInfo;
const MergePartitionResponse = models.MergePartitionResponse;
const CreateScheduledSqlRequest = models.CreateScheduledSqlRequest;


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
     * This API is used to query the latest metric value at a specified time.
     * @param {QueryMetricRequest} req
     * @param {function(string, QueryMetricResponse):void} cb
     * @public
     */
    QueryMetric(req, cb) {
        let resp = new QueryMetricResponse();
        this.request("QueryMetric", req, resp, cb);
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
     * This API is used to create a log topic.
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        let resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
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
     * This API is used to get the list of log topics and supports pagination.
     * @param {DescribeTopicsRequest} req
     * @param {function(string, DescribeTopicsResponse):void} cb
     * @public
     */
    DescribeTopics(req, cb) {
        let resp = new DescribeTopicsResponse();
        this.request("DescribeTopics", req, resp, cb);
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
     * This API is used to merge a topic partition in read/write state. During merge, a topic partition ID can be specified, and CLS will automatically merge the partition adjacent to the right of the range.
     * @param {MergePartitionRequest} req
     * @param {function(string, MergePartitionResponse):void} cb
     * @public
     */
    MergePartition(req, cb) {
        let resp = new MergePartitionResponse();
        this.request("MergePartition", req, resp, cb);
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
     * This API is used to create a download task. To get the returned download address, call DescribeExports to view the task list. The CosPath parameter is also included for download address. For more information, visit https://intl.cloud.tencent.com/document/product/614/56449.?from_cn_redirect=1
     * @param {CreateExportRequest} req
     * @param {function(string, CreateExportResponse):void} cb
     * @public
     */
    CreateExport(req, cb) {
        let resp = new CreateExportResponse();
        this.request("CreateExport", req, resp, cb);
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
     * This API is used to delete a shipping task.
     * @param {DeleteConsumerRequest} req
     * @param {function(string, DeleteConsumerResponse):void} cb
     * @public
     */
    DeleteConsumer(req, cb) {
        let resp = new DeleteConsumerResponse();
        this.request("DeleteConsumer", req, resp, cb);
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
     * This API is used to delete an alarm blocking rule.
     * @param {DeleteAlarmShieldRequest} req
     * @param {function(string, DeleteAlarmShieldResponse):void} cb
     * @public
     */
    DeleteAlarmShield(req, cb) {
        let resp = new DeleteAlarmShieldResponse();
        this.request("DeleteAlarmShield", req, resp, cb);
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
     * This API is used to modify alarm blocking rules.
     * @param {ModifyAlarmShieldRequest} req
     * @param {function(string, ModifyAlarmShieldResponse):void} cb
     * @public
     */
    ModifyAlarmShield(req, cb) {
        let resp = new ModifyAlarmShieldResponse();
        this.request("ModifyAlarmShield", req, resp, cb);
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
     * This API is used to create a notification group.
     * @param {CreateAlarmNoticeRequest} req
     * @param {function(string, CreateAlarmNoticeResponse):void} cb
     * @public
     */
    CreateAlarmNotice(req, cb) {
        let resp = new CreateAlarmNoticeResponse();
        this.request("CreateAlarmNotice", req, resp, cb);
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
     * This API is used to get the list of topic partitions.
     * @param {DescribePartitionsRequest} req
     * @param {function(string, DescribePartitionsResponse):void} cb
     * @public
     */
    DescribePartitions(req, cb) {
        let resp = new DescribePartitionsResponse();
        this.request("DescribePartitions", req, resp, cb);
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
     * This API is used to split a topic partition.
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
     * This API is used to modify a log topic.
     * @param {ModifyTopicRequest} req
     * @param {function(string, ModifyTopicResponse):void} cb
     * @public
     */
    ModifyTopic(req, cb) {
        let resp = new ModifyTopicResponse();
        this.request("ModifyTopic", req, resp, cb);
    }

    /**
     * This API is used to modify a machine group.
     * @param {ModifyMachineGroupRequest} req
     * @param {function(string, ModifyMachineGroupResponse):void} cb
     * @public
     */
    ModifyMachineGroup(req, cb) {
        let resp = new ModifyMachineGroupResponse();
        this.request("ModifyMachineGroup", req, resp, cb);
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
     * ## Note
To ensure log data reliability and help you use CLS more efficiently, we recommend you use the optimized API to upload logs. For more information about the API, see [Uploading Log via API](https://intl.cloud.tencent.com/document/product/614/16873?from_cn_redirect=1).

For the optimized API, we have developed an SDK (available in multiple languages) that provides features including async sending, resource control, automatic retry, graceful shutdown, and detection-based reporting. For details, see [Uploading Log via SDK](https://intl.cloud.tencent.com/document/product/614/67157?from_cn_redirect=1).

`UploadLog` allows you to synchronously upload log data. If you still want to continue to use this API instead of the optimized one, read this document.

## Feature Description

This API is used to write logs to a specified log topic.

CLS provides the following two modes:

#### Load balancing mode

In this mode, logs will be automatically written to a target partition among all readable/writable partitions under the current log topic based on the load balancing principle. This mode is suitable for scenarios where sequential consumption is not needed.

#### Hash routing mode

In this mode, data will be written to a target partition that meets the range requirements based on the carried hash value (`X-CLS-HashKey`). For example, a log source can be bound to a topic partition through `HashKey`, strictly guaranteeing the sequence of the data written to and consumed in this partition.

                 

#### Input parameters (pb binary streams in `body`)

| Parameter       | Type    | Location | Required | Description                                                         |
| ------------ | ------- | ---- | ---- | ------------------------------------------------------------ |
| logGroupList | message | pb   | Yes   | The `logGroup` list, which describes the encapsulated log groups. We recommend you enter up to five `logGroup` values. |

`LogGroup` description:

| Parameter      | Required | Description                                                         |
| ----------- | -------- | ------------------------------------------------------------ |
| logs        | Yes       | Log array consisting of multiple `Log` values. The `Log` indicates a log, and a `LogGroup` can contain up to 10,000 `Log` values. |
| contextFlow | No       | Unique `LogGroup` ID, which should be passed in if the context feature needs to be used. Format: "{Context ID}-{LogGroupID}". <br>Context ID: Uniquely identifies the context (a series of log files that are continuously scrolling or a series of logs that need to be sequenced), which is a 64-bit integer hex string. <br>LogGroupID: A 64-bit integer hex string that continuously increases, such as `102700A66102516A-59F59`.                        |
| filename    | No       | Log filename                                                   |
| source      | No       | Log source, which is generally the machine IP                           |
| logTags     | No       | List of log tags                                               |

`Log` description:

| Parameter   | Required | Description                                                         |
| -------- | -------- | ------------------------------------------------------------ |
| time     | Yes       | Unix timestamp of log time in seconds or milliseconds (recommended)      |
| contents | No       | Log content in key-value format. A log can contain multiple key-value pairs. |

`Content` description:

| Parameter | Required | Description                                                         |
| ------ | -------- | ------------------------------------------------------------ |
| key    | Yes       | Key of a field group in one log, which cannot start with `_`.                 |
| value  | Yes       | Value of a field group. The `value` of one log cannot exceed 1 MB and the total `value` in `LogGroup` cannot exceed 5 MB. |

`LogTag` description:

| Parameter | Required | Description                             |
| ------ | -------- | -------------------------------- |
| key    | Yes       | Key of a custom tag                 |
| value  | Yes       | Value corresponding to the custom tag key |

## pb Compilation Example

This example shows you how to use the protoc compiler to compile a pb description file into a log upload API in C++.

> ?Currently, protoc supports compilation in multiple programming languages such as Java, C++, and Python. For more information, see [protoc](https://github.com/protocolbuffers/protobuf).

#### 1. Install protocol buffers

Download [Protocol Buffers](https://main.qcloudimg.com/raw/d7810aaf8b3073fbbc9d4049c21532aa/protobuf-2.6.1.tar.gz), decompress the package, and install the tool. The version used in the example is protobuf 2.6.1 running on CentOS 7.3. Run the following command to decompress the `protobuf-2.6.1.tar.gz` package to the `/usr/local` directory and go to the directory:

```
tar -zxvf protobuf-2.6.1.tar.gz -C /usr/local/ && cd /usr/local/protobuf-2.6.1
```

Run the following commands to start compilation and installation and configure the environment variables:

```
[root@VM_0_8_centos protobuf-2.6.1]# ./configure 
[root@VM_0_8_centos protobuf-2.6.1]# make && make install
[root@VM_0_8_centos protobuf-2.6.1]# export PATH=$PATH:/usr/local/protobuf-2.6.1/bin
```

After the compilation succeeds, run the following command to check the version:

```
[root@VM_0_8_centos protobuf-2.6.1]# protoc --version
liprotoc 2.6.1
```

#### 2. Create a pb description file

A pb description file is an agreed-on data interchange format for communication. To upload logs, compile the specified protocol format to an API in the target programming language and add the API to the project code. For more information, see [protoc](https://github.com/protocolbuffers/protobuf).

Create a pb message description file `cls.proto` based on the pb data format content specified by CLS.

> !The pb description file content cannot be modified, and the filename must end with `.proto`.

The content of `cls.proto` (pb description file) is as follows:

```
package cls;

message Log
{
    message Content
    {
        required string key   = 1; // Key of each field group
        required string value = 2; // Value of each field group
    }
    required int64   time     = 1; // Unix timestamp
    repeated Content contents = 2; // Multiple key-value pairs in one log
}

message LogTag
{
    required string key       = 1;
    required string value     = 2;
}

message LogGroup
{
    repeated Log    logs        = 1; // Log array consisting of multiple logs
    optional string contextFlow = 2; // This parameter does not take effect currently
    optional string filename    = 3; // Log filename
    optional string source      = 4; // Log source, which is generally the machine IP
    repeated LogTag logTags     = 5;
}

message LogGroupList
{
    repeated LogGroup logGroupList = 1; // Log group list
}
```

#### 3. Compile and generate the API

This example uses the proto compiler to generate a C++ file in the same directory as the `cls.proto` file. Run the following compilation command:

```
protoc --cpp_out=./ ./cls.proto 
```

> ?`--cpp_out=./` indicates that the file will be compiled in cpp format and output to the current directory. `./cls.proto` indicates the `cls.proto` description file in the current directory.

After the compilation succeeds, the code file in the corresponding programming language will be generated. This example generates the `cls.pb.h` header file and [cls.pb.cc](http://cls.pb.cc) code implementation file as shown below:

```
[root@VM_0_8_centos protobuf-2.6.1]# protoc --cpp_out=./ ./cls.proto
[root@VM_0_8_centos protobuf-2.6.1]# ls
cls.pb.cc cls.pb.h cls.proto
```

#### 4. Call the API

Import the generated `cls.pb.h` header file into the code and call the API for data encapsulation.
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
     * This API is used to search and analyze logs. When using this API, please note the following:1. Besides being subject to the default API request frequency limit by this API, for a single log topic, the concurrency number cannot exceed 15. 2. For search syntax, it's recommended to use the CQL syntax rule. Please use the SyntaxRule parameter and set its value to 1.
3. The maximum value of API's response data packet is 49MB. It is recommended to enable gzip compression (HTTP Request Header Accept-Encoding: gzip).
     * @param {SearchLogRequest} req
     * @param {function(string, SearchLogResponse):void} cb
     * @public
     */
    SearchLog(req, cb) {
        let resp = new SearchLogResponse();
        this.request("SearchLog", req, resp, cb);
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
     * This API is used to delete a log topic.
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
