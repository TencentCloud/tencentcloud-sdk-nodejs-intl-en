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
const ModifyCompareTaskResponse = models.ModifyCompareTaskResponse;
const DescribeSyncJobsResponse = models.DescribeSyncJobsResponse;
const ModifyMigrationJobResponse = models.ModifyMigrationJobResponse;
const ResetConsumerGroupOffsetResponse = models.ResetConsumerGroupOffsetResponse;
const ModifyMigrateRateLimitResponse = models.ModifyMigrateRateLimitResponse;
const IsolateMigrateJobResponse = models.IsolateMigrateJobResponse;
const ModifyMigrateJobSpecRequest = models.ModifyMigrateJobSpecRequest;
const IsolateSubscribeResponse = models.IsolateSubscribeResponse;
const ModifyConsumerGroupPasswordRequest = models.ModifyConsumerGroupPasswordRequest;
const StepTip = models.StepTip;
const ModifySyncRateLimitResponse = models.ModifySyncRateLimitResponse;
const DestroyMigrateJobRequest = models.DestroyMigrateJobRequest;
const ModifySubscribeNameRequest = models.ModifySubscribeNameRequest;
const OffsetTimeMap = models.OffsetTimeMap;
const SkipCheckItemResponse = models.SkipCheckItemResponse;
const ResumeSyncJobRequest = models.ResumeSyncJobRequest;
const PartitionAssignment = models.PartitionAssignment;
const ResizeSyncJobResponse = models.ResizeSyncJobResponse;
const CreateSubscribeCheckJobRequest = models.CreateSubscribeCheckJobRequest;
const ResumeMigrateJobResponse = models.ResumeMigrateJobResponse;
const DifferenceItem = models.DifferenceItem;
const CreateModifyCheckSyncJobRequest = models.CreateModifyCheckSyncJobRequest;
const IsolateSyncJobRequest = models.IsolateSyncJobRequest;
const PauseMigrateJobRequest = models.PauseMigrateJobRequest;
const ContinueMigrateJobRequest = models.ContinueMigrateJobRequest;
const ResetConsumerGroupOffsetRequest = models.ResetConsumerGroupOffsetRequest;
const ModifySyncRateLimitRequest = models.ModifySyncRateLimitRequest;
const DescribeCheckSyncJobResultRequest = models.DescribeCheckSyncJobResultRequest;
const ModifySubscribeAutoRenewFlagResponse = models.ModifySubscribeAutoRenewFlagResponse;
const DestroySyncJobResponse = models.DestroySyncJobResponse;
const ErrorInfoItem = models.ErrorInfoItem;
const IsolateMigrateJobRequest = models.IsolateMigrateJobRequest;
const StopMigrateJobResponse = models.StopMigrateJobResponse;
const TableItem = models.TableItem;
const SubscribeInfo = models.SubscribeInfo;
const ModifyCompareTaskNameRequest = models.ModifyCompareTaskNameRequest;
const CompleteMigrateJobResponse = models.CompleteMigrateJobResponse;
const DescribeMigrateDBInstancesResponse = models.DescribeMigrateDBInstancesResponse;
const KeyValuePairOption = models.KeyValuePairOption;
const CreateCheckSyncJobRequest = models.CreateCheckSyncJobRequest;
const DescribeModifyCheckSyncJobResultResponse = models.DescribeModifyCheckSyncJobResultResponse;
const StartSubscribeResponse = models.StartSubscribeResponse;
const DescribeSubscribeReturnableRequest = models.DescribeSubscribeReturnableRequest;
const DescribeMigrationDetailRequest = models.DescribeMigrationDetailRequest;
const CreateConsumerGroupRequest = models.CreateConsumerGroupRequest;
const ResizeSyncJobRequest = models.ResizeSyncJobRequest;
const ModifySubscribeNameResponse = models.ModifySubscribeNameResponse;
const DdlOption = models.DdlOption;
const ConflictHandleOption = models.ConflictHandleOption;
const PipelineInfo = models.PipelineInfo;
const ResumeSyncJobResponse = models.ResumeSyncJobResponse;
const RecoverMigrateJobResponse = models.RecoverMigrateJobResponse;
const ModifyCompareTaskNameResponse = models.ModifyCompareTaskNameResponse;
const StartSyncJobRequest = models.StartSyncJobRequest;
const StartSubscribeRequest = models.StartSubscribeRequest;
const ModifyMigrateRuntimeAttributeResponse = models.ModifyMigrateRuntimeAttributeResponse;
const DescribeOffsetByTimeResponse = models.DescribeOffsetByTimeResponse;
const PauseSyncJobRequest = models.PauseSyncJobRequest;
const CreateMigrateCheckJobResponse = models.CreateMigrateCheckJobResponse;
const ModifySyncJobConfigRequest = models.ModifySyncJobConfigRequest;
const ContinueMigrateJobResponse = models.ContinueMigrateJobResponse;
const CreateMigrationServiceRequest = models.CreateMigrationServiceRequest;
const DetailCheckItem = models.DetailCheckItem;
const DescribeCompareTasksRequest = models.DescribeCompareTasksRequest;
const DestroyIsolatedSubscribeRequest = models.DestroyIsolatedSubscribeRequest;
const ResetSubscribeResponse = models.ResetSubscribeResponse;
const CompareObject = models.CompareObject;
const DescribeCompareReportResponse = models.DescribeCompareReportResponse;
const RecoverSyncJobResponse = models.RecoverSyncJobResponse;
const MigrateAction = models.MigrateAction;
const ConfigureSubscribeJobResponse = models.ConfigureSubscribeJobResponse;
const DescribeConsumerGroupsRequest = models.DescribeConsumerGroupsRequest;
const GroupInfo = models.GroupInfo;
const DeleteCompareTaskResponse = models.DeleteCompareTaskResponse;
const DBEndpointInfo = models.DBEndpointInfo;
const ResumeSubscribeRequest = models.ResumeSubscribeRequest;
const ModifySyncJobConfigResponse = models.ModifySyncJobConfigResponse;
const CompareColumnItem = models.CompareColumnItem;
const DescribeSubscribeDetailResponse = models.DescribeSubscribeDetailResponse;
const ContinueSyncJobResponse = models.ContinueSyncJobResponse;
const TradeInfo = models.TradeInfo;
const Options = models.Options;
const DeleteConsumerGroupRequest = models.DeleteConsumerGroupRequest;
const ModifySubscribeAutoRenewFlagRequest = models.ModifySubscribeAutoRenewFlagRequest;
const CompleteMigrateJobRequest = models.CompleteMigrateJobRequest;
const CreateConsumerGroupResponse = models.CreateConsumerGroupResponse;
const StopCompareRequest = models.StopCompareRequest;
const SyncDBEndpointInfos = models.SyncDBEndpointInfos;
const StartModifySyncJobRequest = models.StartModifySyncJobRequest;
const DescribeCheckSyncJobResultResponse = models.DescribeCheckSyncJobResultResponse;
const StopSyncJobResponse = models.StopSyncJobResponse;
const MigrateOption = models.MigrateOption;
const DescribeSubscribeDetailRequest = models.DescribeSubscribeDetailRequest;
const SkippedDetail = models.SkippedDetail;
const SubsErr = models.SubsErr;
const CreateSubscribeResponse = models.CreateSubscribeResponse;
const CompareOptions = models.CompareOptions;
const ModifyMigrateNameResponse = models.ModifyMigrateNameResponse;
const DescribeMigrationJobsResponse = models.DescribeMigrationJobsResponse;
const ModifyMigrationJobRequest = models.ModifyMigrationJobRequest;
const StopCompareResponse = models.StopCompareResponse;
const DestroyMigrateJobResponse = models.DestroyMigrateJobResponse;
const ProcessProgress = models.ProcessProgress;
const SkipSyncCheckItemRequest = models.SkipSyncCheckItemRequest;
const DescribeModifyCheckSyncJobResultRequest = models.DescribeModifyCheckSyncJobResultRequest;
const SkipSyncCheckItemResponse = models.SkipSyncCheckItemResponse;
const IsolateSyncJobResponse = models.IsolateSyncJobResponse;
const CreateMigrateCheckJobRequest = models.CreateMigrateCheckJobRequest;
const ModifyConsumerGroupPasswordResponse = models.ModifyConsumerGroupPasswordResponse;
const DescribeMigrationJobsRequest = models.DescribeMigrationJobsRequest;
const CompareTaskInfo = models.CompareTaskInfo;
const ModifyConsumerGroupDescriptionRequest = models.ModifyConsumerGroupDescriptionRequest;
const ContinueSyncJobRequest = models.ContinueSyncJobRequest;
const ModifySubscribeObjectsResponse = models.ModifySubscribeObjectsResponse;
const CreateMigrationServiceResponse = models.CreateMigrationServiceResponse;
const KafkaOption = models.KafkaOption;
const DescribeMigrationCheckJobResponse = models.DescribeMigrationCheckJobResponse;
const StopSyncJobRequest = models.StopSyncJobRequest;
const DifferenceDetail = models.DifferenceDetail;
const DBInfo = models.DBInfo;
const TopicRule = models.TopicRule;
const DestroySyncJobRequest = models.DestroySyncJobRequest;
const ViewItem = models.ViewItem;
const CreateCheckSyncJobResponse = models.CreateCheckSyncJobResponse;
const CreateSubscribeCheckJobResponse = models.CreateSubscribeCheckJobResponse;
const ModifyConsumerGroupDescriptionResponse = models.ModifyConsumerGroupDescriptionResponse;
const CompareObjectItem = models.CompareObjectItem;
const ConfigureSyncJobRequest = models.ConfigureSyncJobRequest;
const StartModifySyncJobResponse = models.StartModifySyncJobResponse;
const SubscribeCheckStepInfo = models.SubscribeCheckStepInfo;
const MigrateDBItem = models.MigrateDBItem;
const DescribeMigrateDBInstancesRequest = models.DescribeMigrateDBInstancesRequest;
const CheckStepInfo = models.CheckStepInfo;
const ProcessStepTip = models.ProcessStepTip;
const ModifyCompareTaskRequest = models.ModifyCompareTaskRequest;
const RecoverSyncJobRequest = models.RecoverSyncJobRequest;
const Database = models.Database;
const Column = models.Column;
const JobItem = models.JobItem;
const DestroyIsolatedSubscribeResponse = models.DestroyIsolatedSubscribeResponse;
const ModifiedSubscribeObject = models.ModifiedSubscribeObject;
const DescribeCompareTasksResponse = models.DescribeCompareTasksResponse;
const ResumeSubscribeResponse = models.ResumeSubscribeResponse;
const DescribeSyncJobsRequest = models.DescribeSyncJobsRequest;
const SyncDetailInfo = models.SyncDetailInfo;
const DescribeConsumerGroupsResponse = models.DescribeConsumerGroupsResponse;
const ModifyMigrateRateLimitRequest = models.ModifyMigrateRateLimitRequest;
const CompareTableItem = models.CompareTableItem;
const ConfigureSyncJobResponse = models.ConfigureSyncJobResponse;
const CompareViewItem = models.CompareViewItem;
const StepInfo = models.StepInfo;
const SubscribeObject = models.SubscribeObject;
const ResumeMigrateJobRequest = models.ResumeMigrateJobRequest;
const PauseSyncJobResponse = models.PauseSyncJobResponse;
const DescribeSubscribeCheckJobRequest = models.DescribeSubscribeCheckJobRequest;
const ModifySubscribeObjectsRequest = models.ModifySubscribeObjectsRequest;
const View = models.View;
const MonitorInfo = models.MonitorInfo;
const DescribeOffsetByTimeRequest = models.DescribeOffsetByTimeRequest;
const StartCompareResponse = models.StartCompareResponse;
const DynamicOptions = models.DynamicOptions;
const CreateCompareTaskResponse = models.CreateCompareTaskResponse;
const RateLimitOption = models.RateLimitOption;
const SkipCheckItemRequest = models.SkipCheckItemRequest;
const CompareAbstractInfo = models.CompareAbstractInfo;
const CheckStep = models.CheckStep;
const CompareTaskItem = models.CompareTaskItem;
const ModifyMigrateJobSpecResponse = models.ModifyMigrateJobSpecResponse;
const CreateSyncJobResponse = models.CreateSyncJobResponse;
const CreateCompareTaskRequest = models.CreateCompareTaskRequest;
const ErrInfo = models.ErrInfo;
const StartCompareRequest = models.StartCompareRequest;
const EndpointItem = models.EndpointItem;
const DescribeMigrationCheckJobRequest = models.DescribeMigrationCheckJobRequest;
const DescribeMigrationDetailResponse = models.DescribeMigrationDetailResponse;
const CreateModifyCheckSyncJobResponse = models.CreateModifyCheckSyncJobResponse;
const ModifyMigrateNameRequest = models.ModifyMigrateNameRequest;
const CreateSubscribeRequest = models.CreateSubscribeRequest;
const StartSyncJobResponse = models.StartSyncJobResponse;
const StartMigrateJobRequest = models.StartMigrateJobRequest;
const DistributeRule = models.DistributeRule;
const Objects = models.Objects;
const DeleteConsumerGroupResponse = models.DeleteConsumerGroupResponse;
const DBItem = models.DBItem;
const DeleteCompareTaskRequest = models.DeleteCompareTaskRequest;
const MigrateDetailInfo = models.MigrateDetailInfo;
const StopMigrateJobRequest = models.StopMigrateJobRequest;
const Endpoint = models.Endpoint;
const ConfigureSubscribeJobRequest = models.ConfigureSubscribeJobRequest;
const SyncJobInfo = models.SyncJobInfo;
const DescribeSubscribeCheckJobResponse = models.DescribeSubscribeCheckJobResponse;
const RoleItem = models.RoleItem;
const TagFilter = models.TagFilter;
const StepDetailInfo = models.StepDetailInfo;
const CreateSyncJobRequest = models.CreateSyncJobRequest;
const SubscribeKafkaConfig = models.SubscribeKafkaConfig;
const DescribeCompareReportRequest = models.DescribeCompareReportRequest;
const SkippedItem = models.SkippedItem;
const IsolateSubscribeRequest = models.IsolateSubscribeRequest;
const DescribeSubscribeReturnableResponse = models.DescribeSubscribeReturnableResponse;
const TagItem = models.TagItem;
const RecoverMigrateJobRequest = models.RecoverMigrateJobRequest;
const OnlineDDL = models.OnlineDDL;
const DescribeSubscribeJobsResponse = models.DescribeSubscribeJobsResponse;
const ResetSubscribeRequest = models.ResetSubscribeRequest;
const DatabaseTableObject = models.DatabaseTableObject;
const ModifyMigrateRuntimeAttributeRequest = models.ModifyMigrateRuntimeAttributeRequest;
const PauseMigrateJobResponse = models.PauseMigrateJobResponse;
const Table = models.Table;
const SubscribeCheckStepTip = models.SubscribeCheckStepTip;
const CompareDetailInfo = models.CompareDetailInfo;
const DescribeSubscribeJobsRequest = models.DescribeSubscribeJobsRequest;
const StartMigrateJobResponse = models.StartMigrateJobResponse;
const ConsistencyOption = models.ConsistencyOption;


/**
 * dts client
 * @class
 */
class DtsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dts.tencentcloudapi.com", "2021-12-06", credential, region, profile);
    }
    
    /**
     * This API is used to resume faulty subscription tasks. When the status of the subscription task is set to error, you can resume task via this API.
     * @param {ResumeSubscribeRequest} req
     * @param {function(string, ResumeSubscribeResponse):void} cb
     * @public
     */
    ResumeSubscribe(req, cb) {
        let resp = new ResumeSubscribeResponse();
        this.request("ResumeSubscribe", req, resp, cb);
    }

    /**
     * This API is used for the backend to skip a failed check item. Theoretically, to execute a sync task normally, any check step cannot be skipped, and the check must be passed. For products or links that support check item skipping, see [Check Item Overview](https://www.tencentcloud.com/document/product/571/42551).
     * @param {SkipSyncCheckItemRequest} req
     * @param {function(string, SkipSyncCheckItemResponse):void} cb
     * @public
     */
    SkipSyncCheckItem(req, cb) {
        let resp = new SkipSyncCheckItemResponse();
        this.request("SkipSyncCheckItem", req, resp, cb);
    }

    /**
     * This API is used to deactivate an isolated data subscription instance.
     * @param {DestroyIsolatedSubscribeRequest} req
     * @param {function(string, DestroyIsolatedSubscribeResponse):void} cb
     * @public
     */
    DestroyIsolatedSubscribe(req, cb) {
        let resp = new DestroyIsolatedSubscribeResponse();
        this.request("DestroyIsolatedSubscribe", req, resp, cb);
    }

    /**
     * This API is used to check whether the current data sync task supports object modification after the task configuration is modified.
     * @param {CreateModifyCheckSyncJobRequest} req
     * @param {function(string, CreateModifyCheckSyncJobResponse):void} cb
     * @public
     */
    CreateModifyCheckSyncJob(req, cb) {
        let resp = new CreateModifyCheckSyncJobResponse();
        this.request("CreateModifyCheckSyncJob", req, resp, cb);
    }

    /**
     * This API is used to configure a migration task. After it is configured successfully, you can call the `CreateMigrationCheckJob` API to create a check task, and only after it passes the check can it be started.
     * @param {ModifyMigrationJobRequest} req
     * @param {function(string, ModifyMigrationJobResponse):void} cb
     * @public
     */
    ModifyMigrationJob(req, cb) {
        let resp = new ModifyMigrationJobResponse();
        this.request("ModifyMigrationJob", req, resp, cb);
    }

    /**
     * This API is used to query the information of a sync task.
     * @param {DescribeSyncJobsRequest} req
     * @param {function(string, DescribeSyncJobsResponse):void} cb
     * @public
     */
    DescribeSyncJobs(req, cb) {
        let resp = new DescribeSyncJobsResponse();
        this.request("DescribeSyncJobs", req, resp, cb);
    }

    /**
     * This API is used to modify task runtime attributes. This interface is different from the configuration class interface and does not perform state machine evaluation.
     * @param {ModifyMigrateRuntimeAttributeRequest} req
     * @param {function(string, ModifyMigrateRuntimeAttributeResponse):void} cb
     * @public
     */
    ModifyMigrateRuntimeAttribute(req, cb) {
        let resp = new ModifyMigrateRuntimeAttributeResponse();
        this.request("ModifyMigrateRuntimeAttribute", req, resp, cb);
    }

    /**
     * This API is used to purchase migration tasks. After the tasks are purchased successfully, a randomly generated list of task IDs will be returned. You can also call the `DescribeMigrationJobs` API to query the IDs of the successfully purchased tasks. Note that once a task is purchased successfully, the types and regions of the source and target databases cannot be changed.
     * @param {CreateMigrationServiceRequest} req
     * @param {function(string, CreateMigrationServiceResponse):void} cb
     * @public
     */
    CreateMigrationService(req, cb) {
        let resp = new CreateMigrationServiceResponse();
        this.request("CreateMigrationService", req, resp, cb);
    }

    /**
     * This API is used to get the information list of data subscription instances. Pagination is enabled by default with 20 results returned each time.
     * @param {DescribeSubscribeJobsRequest} req
     * @param {function(string, DescribeSubscribeJobsResponse):void} cb
     * @public
     */
    DescribeSubscribeJobs(req, cb) {
        let resp = new DescribeSubscribeJobsResponse();
        this.request("DescribeSubscribeJobs", req, resp, cb);
    }

    /**
     * This API is used to restrict the rate limit of the task, when a user finds that migration task has a large impact on the load of user's database.
     * @param {ModifyMigrateRateLimitRequest} req
     * @param {function(string, ModifyMigrateRateLimitResponse):void} cb
     * @public
     */
    ModifyMigrateRateLimit(req, cb) {
        let resp = new ModifyMigrateRateLimitResponse();
        this.request("ModifyMigrateRateLimit", req, resp, cb);
    }

    /**
     * This API is used to query whether a subscription task can be terminated and returned.
     * @param {DescribeSubscribeReturnableRequest} req
     * @param {function(string, DescribeSubscribeReturnableResponse):void} cb
     * @public
     */
    DescribeSubscribeReturnable(req, cb) {
        let resp = new DescribeSubscribeReturnableResponse();
        this.request("DescribeSubscribeReturnable", req, resp, cb);
    }

    /**
     * This API is used to isolate a sync task. After the task is isolated, you can call the `DescribeSyncJobs` API to query its status, call `RecoverSyncJob` to recover it, or directly delete it. For a free task, calling this API will directly delete it permanently.
     * @param {IsolateSyncJobRequest} req
     * @param {function(string, IsolateSyncJobResponse):void} cb
     * @public
     */
    IsolateSyncJob(req, cb) {
        let resp = new IsolateSyncJobResponse();
        this.request("IsolateSyncJob", req, resp, cb);
    }

    /**
     * This API is used to stop a data consistency check task.
     * @param {StopCompareRequest} req
     * @param {function(string, StopCompareResponse):void} cb
     * @public
     */
    StopCompare(req, cb) {
        let resp = new StopCompareResponse();
        this.request("StopCompare", req, resp, cb);
    }

    /**
     * This API is used to create a sync task.
     * @param {CreateSyncJobRequest} req
     * @param {function(string, CreateSyncJobResponse):void} cb
     * @public
     */
    CreateSyncJob(req, cb) {
        let resp = new CreateSyncJobResponse();
        this.request("CreateSyncJob", req, resp, cb);
    }

    /**
     * This API is used to configure data subscription instances.
     * @param {ConfigureSubscribeJobRequest} req
     * @param {function(string, ConfigureSubscribeJobResponse):void} cb
     * @public
     */
    ConfigureSubscribeJob(req, cb) {
        let resp = new ConfigureSubscribeJobResponse();
        this.request("ConfigureSubscribeJob", req, resp, cb);
    }

    /**
     * This API is used to get consumer group details for the subscription instance configuration.
     * @param {DescribeConsumerGroupsRequest} req
     * @param {function(string, DescribeConsumerGroupsResponse):void} cb
     * @public
     */
    DescribeConsumerGroups(req, cb) {
        let resp = new DescribeConsumerGroupsResponse();
        this.request("DescribeConsumerGroups", req, resp, cb);
    }

    /**
     * This API is used to creat a consumer group for the subscription instance.
     * @param {CreateConsumerGroupRequest} req
     * @param {function(string, CreateConsumerGroupResponse):void} cb
     * @public
     */
    CreateConsumerGroup(req, cb) {
        let resp = new CreateConsumerGroupResponse();
        this.request("CreateConsumerGroup", req, resp, cb);
    }

    /**
     * This API is used to reset the offset of the subscription consumer group. Call the DescribeConsumerGroups API to query the status of the consumer group, only when the status is Dead or Empty can this operation be executed. Otherwise, the reset will not be effective and the API will not return any error.
     * @param {ResetConsumerGroupOffsetRequest} req
     * @param {function(string, ResetConsumerGroupOffsetResponse):void} cb
     * @public
     */
    ResetConsumerGroupOffset(req, cb) {
        let resp = new ResetConsumerGroupOffsetResponse();
        this.request("ResetConsumerGroupOffset", req, resp, cb);
    }

    /**
     * This API is used to delete a data consistency check task, which can be called when the task status is `success`, `failed`, or `canceled`.
     * @param {DeleteCompareTaskRequest} req
     * @param {function(string, DeleteCompareTaskResponse):void} cb
     * @public
     */
    DeleteCompareTask(req, cb) {
        let resp = new DeleteCompareTaskResponse();
        this.request("DeleteCompareTask", req, resp, cb);
    }

    /**
     * This API is used to start a Kafka version of the data subscription instance. This interface can be called only when the status of the subscription task is checkPass.
     * @param {StartSubscribeRequest} req
     * @param {function(string, StartSubscribeResponse):void} cb
     * @public
     */
    StartSubscribe(req, cb) {
        let resp = new StartSubscribeResponse();
        this.request("StartSubscribe", req, resp, cb);
    }

    /**
     * This API is used to start a sync task.
     * @param {StartSyncJobRequest} req
     * @param {function(string, StartSyncJobResponse):void} cb
     * @public
     */
    StartSyncJob(req, cb) {
        let resp = new StartSyncJobResponse();
        this.request("StartSyncJob", req, resp, cb);
    }

    /**
     * This API is used to stop a sync task. After calling this API, you can call the `DescribeSyncJobs` API to query the latest task status.
     * @param {StopSyncJobRequest} req
     * @param {function(string, StopSyncJobResponse):void} cb
     * @public
     */
    StopSyncJob(req, cb) {
        let resp = new StopSyncJobResponse();
        this.request("StopSyncJob", req, resp, cb);
    }

    /**
     * This API is used to verify a sync task by checking required parameters and peripheral configuration.
     * @param {CreateCheckSyncJobRequest} req
     * @param {function(string, CreateCheckSyncJobResponse):void} cb
     * @public
     */
    CreateCheckSyncJob(req, cb) {
        let resp = new CreateCheckSyncJobResponse();
        this.request("CreateCheckSyncJob", req, resp, cb);
    }

    /**
     * This API is used to query the details of a data consistency check task.
     * @param {DescribeCompareReportRequest} req
     * @param {function(string, DescribeCompareReportResponse):void} cb
     * @public
     */
    DescribeCompareReport(req, cb) {
        let resp = new DescribeCompareReportResponse();
        this.request("DescribeCompareReport", req, resp, cb);
    }

    /**
     * This API is used to resume a paused migration task.
     * @param {ContinueMigrateJobRequest} req
     * @param {function(string, ContinueMigrateJobResponse):void} cb
     * @public
     */
    ContinueMigrateJob(req, cb) {
        let resp = new ContinueMigrateJobResponse();
        this.request("ContinueMigrateJob", req, resp, cb);
    }

    /**
     * This API is used to pause a migration task.
     * @param {PauseMigrateJobRequest} req
     * @param {function(string, PauseMigrateJobResponse):void} cb
     * @public
     */
    PauseMigrateJob(req, cb) {
        let resp = new PauseMigrateJobResponse();
        this.request("PauseMigrateJob", req, resp, cb);
    }

    /**
     * This API is used to modify the data subscription object and Kafka partition rule. For MongoDB subscription, you can also modify the output aggregation rule.
     * @param {ModifySubscribeObjectsRequest} req
     * @param {function(string, ModifySubscribeObjectsResponse):void} cb
     * @public
     */
    ModifySubscribeObjects(req, cb) {
        let resp = new ModifySubscribeObjectsResponse();
        this.request("ModifySubscribeObjects", req, resp, cb);
    }

    /**
     * This API is used to configure a sync task.
     * @param {ConfigureSyncJobRequest} req
     * @param {function(string, ConfigureSyncJobResponse):void} cb
     * @public
     */
    ConfigureSyncJob(req, cb) {
        let resp = new ConfigureSyncJobResponse();
        this.request("ConfigureSyncJob", req, resp, cb);
    }

    /**
     * This API is used to isolate the subscription task. After calling, the subscription task will not be available. Pay-as-you-go tasks will stop billing, and monthly subscription tasks will refund automatically.
     * @param {IsolateSubscribeRequest} req
     * @param {function(string, IsolateSubscribeResponse):void} cb
     * @public
     */
    IsolateSubscribe(req, cb) {
        let resp = new IsolateSubscribeResponse();
        this.request("IsolateSubscribe", req, resp, cb);
    }

    /**
     * This API is used to start the configuration modification process when the modification check task status becomes “success”.
     * @param {StartModifySyncJobRequest} req
     * @param {function(string, StartModifySyncJobResponse):void} cb
     * @public
     */
    StartModifySyncJob(req, cb) {
        let resp = new StartModifySyncJobResponse();
        this.request("StartModifySyncJob", req, resp, cb);
    }

    /**
     * This API is used to adjust the specification of a pay-as-you-go sync task. After this API is called, the backend needs to take about 3-5 minutes to implement the adjustment. You can call the `DescribeSyncJobs` API to query the latest task status.
     * @param {ResizeSyncJobRequest} req
     * @param {function(string, ResizeSyncJobResponse):void} cb
     * @public
     */
    ResizeSyncJob(req, cb) {
        let resp = new ResizeSyncJobResponse();
        this.request("ResizeSyncJob", req, resp, cb);
    }

    /**
     * This API is used to modify the auto-renewal flag of your subscription instance. Only the monthly subscription modification task makes sense. After modifying, the pay-as-you-go task has no impact.
     * @param {ModifySubscribeAutoRenewFlagRequest} req
     * @param {function(string, ModifySubscribeAutoRenewFlagResponse):void} cb
     * @public
     */
    ModifySubscribeAutoRenewFlag(req, cb) {
        let resp = new ModifySubscribeAutoRenewFlagResponse();
        this.request("ModifySubscribeAutoRenewFlag", req, resp, cb);
    }

    /**
     * This API is used to modify the configuration of a data sync task after the task is started.\n Configuration modification steps:  Modify sync task configuration -> Create a modification check task -> Query the check task result -> Start the configuration modification check task
     * @param {ModifySyncJobConfigRequest} req
     * @param {function(string, ModifySyncJobConfigResponse):void} cb
     * @public
     */
    ModifySyncJobConfig(req, cb) {
        let resp = new ModifySyncJobConfigResponse();
        this.request("ModifySyncJobConfig", req, resp, cb);
    }

    /**
     * This API is used to retry an abnormal or failed Redis data migration task. Note that this operation will skip the check stage and directly start the task, just like by calling `StartMigrationJob`. After calling this API, you can call the `DescribeMigrationJobs` API to query the latest task status.
     * @param {ResumeMigrateJobRequest} req
     * @param {function(string, ResumeMigrateJobResponse):void} cb
     * @public
     */
    ResumeMigrateJob(req, cb) {
        let resp = new ResumeMigrateJobResponse();
        this.request("ResumeMigrateJob", req, resp, cb);
    }

    /**
     * This API is used to stop a data migration task.
After calling this API, you can call the `DescribeMigrationJobs` API to query the latest task status.
     * @param {StopMigrateJobRequest} req
     * @param {function(string, StopMigrateJobResponse):void} cb
     * @public
     */
    StopMigrateJob(req, cb) {
        let resp = new StopMigrateJobResponse();
        this.request("StopMigrateJob", req, resp, cb);
    }

    /**
     * This API is used to pause a data sync task.
     * @param {PauseSyncJobRequest} req
     * @param {function(string, PauseSyncJobResponse):void} cb
     * @public
     */
    PauseSyncJob(req, cb) {
        let resp = new PauseSyncJobResponse();
        this.request("PauseSyncJob", req, resp, cb);
    }

    /**
     * This API is used to restrict the rate limit of the task, when a user finds that the sync task has a large impact on the load of user's database.
     * @param {ModifySyncRateLimitRequest} req
     * @param {function(string, ModifySyncRateLimitResponse):void} cb
     * @public
     */
    ModifySyncRateLimit(req, cb) {
        let resp = new ModifySyncRateLimitResponse();
        this.request("ModifySyncRateLimit", req, resp, cb);
    }

    /**
     * This API is used to start a data consistency check task after creating it by calling the `CreateCompareTask` API. After calling this API, you can call the `DescribeCompareTasks` API to query the latest task status.
     * @param {StartCompareRequest} req
     * @param {function(string, StartCompareResponse):void} cb
     * @public
     */
    StartCompare(req, cb) {
        let resp = new StartCompareResponse();
        this.request("StartCompare", req, resp, cb);
    }

    /**
     * This API is used to query the results of a subscription check task.
     * @param {DescribeSubscribeCheckJobRequest} req
     * @param {function(string, DescribeSubscribeCheckJobResponse):void} cb
     * @public
     */
    DescribeSubscribeCheckJob(req, cb) {
        let resp = new DescribeSubscribeCheckJobResponse();
        this.request("DescribeSubscribeCheckJob", req, resp, cb);
    }

    /**
     * This API is used to resume a paused data sync task.
     * @param {ContinueSyncJobRequest} req
     * @param {function(string, ContinueSyncJobResponse):void} cb
     * @public
     */
    ContinueSyncJob(req, cb) {
        let resp = new ContinueSyncJobResponse();
        this.request("ContinueSyncJob", req, resp, cb);
    }

    /**
     *  This API is used to isolate and return a data migration task. After calling this API, you can call the `DescribeMigrationJobs` API to query the latest task status. For a billed task, after isolating it, you can call `RecoverMigrationJob` to recover it or call `DestroyMigrateJob` to delete it. For a free task, calling this API will directly delete it permanently.
     * @param {IsolateMigrateJobRequest} req
     * @param {function(string, IsolateMigrateJobResponse):void} cb
     * @public
     */
    IsolateMigrateJob(req, cb) {
        let resp = new IsolateMigrateJobResponse();
        this.request("IsolateMigrateJob", req, resp, cb);
    }

    /**
     * This API is used to modify the description of the specified subscription consumption group.
     * @param {ModifyConsumerGroupDescriptionRequest} req
     * @param {function(string, ModifyConsumerGroupDescriptionResponse):void} cb
     * @public
     */
    ModifyConsumerGroupDescription(req, cb) {
        let resp = new ModifyConsumerGroupDescriptionResponse();
        this.request("ModifyConsumerGroupDescription", req, resp, cb);
    }

    /**
     * This API is used to query migratable database instances.
     * @param {DescribeMigrateDBInstancesRequest} req
     * @param {function(string, DescribeMigrateDBInstancesResponse):void} cb
     * @public
     */
    DescribeMigrateDBInstances(req, cb) {
        let resp = new DescribeMigrateDBInstancesResponse();
        this.request("DescribeMigrateDBInstances", req, resp, cb);
    }

    /**
     * This API is used for the backend to skip a failed check item. Theoretically, to execute a migration task normally, any check step cannot be skipped, and the check must be passed. For products or links that support check item skipping, see [Check Item Overview](https://www.tencentcloud.com/document/product/571/42551).
     * @param {SkipCheckItemRequest} req
     * @param {function(string, SkipCheckItemResponse):void} cb
     * @public
     */
    SkipCheckItem(req, cb) {
        let resp = new SkipCheckItemResponse();
        this.request("SkipCheckItem", req, resp, cb);
    }

    /**
     * This API is used to modify the password of the specified subscription consumer group.
     * @param {ModifyConsumerGroupPasswordRequest} req
     * @param {function(string, ModifyConsumerGroupPasswordResponse):void} cb
     * @public
     */
    ModifyConsumerGroupPassword(req, cb) {
        let resp = new ModifyConsumerGroupPasswordResponse();
        this.request("ModifyConsumerGroupPassword", req, resp, cb);
    }

    /**
     * This API is used to create a subscription check task. The task must have successfully called the ConfigureSubscribeJob interface to configure all necessary information before starting the check.
     * @param {CreateSubscribeCheckJobRequest} req
     * @param {function(string, CreateSubscribeCheckJobResponse):void} cb
     * @public
     */
    CreateSubscribeCheckJob(req, cb) {
        let resp = new CreateSubscribeCheckJobResponse();
        this.request("CreateSubscribeCheckJob", req, resp, cb);
    }

    /**
     * This API is used to verify a migration task.
Before migration, you should call this API to create a check task. Migration will start only if the check succeeds. You can view the check result through the `DescribeMigrationCheckJob` API.
After successful check, if the migration task needs to be modified, a new check task should be created, and migration will start only after the new check succeeds.

     * @param {CreateMigrateCheckJobRequest} req
     * @param {function(string, CreateMigrateCheckJobResponse):void} cb
     * @public
     */
    CreateMigrateCheckJob(req, cb) {
        let resp = new CreateMigrateCheckJobResponse();
        this.request("CreateMigrateCheckJob", req, resp, cb);
    }

    /**
     * This API is used to query the result of the sync check task and check the required parameters and peripheral configurations.
     * @param {DescribeCheckSyncJobResultRequest} req
     * @param {function(string, DescribeCheckSyncJobResultResponse):void} cb
     * @public
     */
    DescribeCheckSyncJobResult(req, cb) {
        let resp = new DescribeCheckSyncJobResultResponse();
        this.request("DescribeCheckSyncJobResult", req, resp, cb);
    }

    /**
     * This API is used to query the list of data consistency check tasks under the current task.
     * @param {DescribeCompareTasksRequest} req
     * @param {function(string, DescribeCompareTasksResponse):void} cb
     * @public
     */
    DescribeCompareTasks(req, cb) {
        let resp = new DescribeCompareTasksResponse();
        this.request("DescribeCompareTasks", req, resp, cb);
    }

    /**
     * This API is used to modify the parameters of a data consistency check task after it is created and before it starts.
     * @param {ModifyCompareTaskRequest} req
     * @param {function(string, ModifyCompareTaskResponse):void} cb
     * @public
     */
    ModifyCompareTask(req, cb) {
        let resp = new ModifyCompareTaskResponse();
        this.request("ModifyCompareTask", req, resp, cb);
    }

    /**
     * This API is used to get the configuration information of the data subscription instance.
     * @param {DescribeSubscribeDetailRequest} req
     * @param {function(string, DescribeSubscribeDetailResponse):void} cb
     * @public
     */
    DescribeSubscribeDetail(req, cb) {
        let resp = new DescribeSubscribeDetailResponse();
        this.request("DescribeSubscribeDetail", req, resp, cb);
    }

    /**
     * This API is used to delete a consumer group of a subscription task.
     * @param {DeleteConsumerGroupRequest} req
     * @param {function(string, DeleteConsumerGroupResponse):void} cb
     * @public
     */
    DeleteConsumerGroup(req, cb) {
        let resp = new DeleteConsumerGroupResponse();
        this.request("DeleteConsumerGroup", req, resp, cb);
    }

    /**
     * This API is used to query the list of data migration tasks.
     * @param {DescribeMigrationJobsRequest} req
     * @param {function(string, DescribeMigrationJobsResponse):void} cb
     * @public
     */
    DescribeMigrationJobs(req, cb) {
        let resp = new DescribeMigrationJobsResponse();
        this.request("DescribeMigrationJobs", req, resp, cb);
    }

    /**
     * This API is used to recover a data migration task in **Isolated** status. After calling this API, you can call the `DescribeMigrationJobs` API to query the latest task status.
     * @param {RecoverMigrateJobRequest} req
     * @param {function(string, RecoverMigrateJobResponse):void} cb
     * @public
     */
    RecoverMigrateJob(req, cb) {
        let resp = new RecoverMigrateJobResponse();
        this.request("RecoverMigrateJob", req, resp, cb);
    }

    /**
     * This API is used to create a data subscription task.
     * @param {CreateSubscribeRequest} req
     * @param {function(string, CreateSubscribeResponse):void} cb
     * @public
     */
    CreateSubscribe(req, cb) {
        let resp = new CreateSubscribeResponse();
        this.request("CreateSubscribe", req, resp, cb);
    }

    /**
     * This API is used to recover a sync task in **Isolated** status. After calling this API, you can call the `DescribeSyncJobs` API to query the latest task status.
     * @param {RecoverSyncJobRequest} req
     * @param {function(string, RecoverSyncJobResponse):void} cb
     * @public
     */
    RecoverSyncJob(req, cb) {
        let resp = new RecoverSyncJobResponse();
        this.request("RecoverSyncJob", req, resp, cb);
    }

    /**
     * This API is used to reset the subscription instance. After resetting, the subscription task can be reconfigured.You can call DescribeSubscribeDetail to query the subscription information to determine whether the subscription is successful. When SubsStatus changes to notStarted, it means the reset is successful.
     * @param {ResetSubscribeRequest} req
     * @param {function(string, ResetSubscribeResponse):void} cb
     * @public
     */
    ResetSubscribe(req, cb) {
        let resp = new ResetSubscribeResponse();
        this.request("ResetSubscribe", req, resp, cb);
    }

    /**
     * This API is used to create a data consistency check task. After the task is successfully created, its ID will be returned in the format of `dts-8yv4w2i1-cmp-37skmii9`, and you can call `StartCompare` to start it.
     * @param {CreateCompareTaskRequest} req
     * @param {function(string, CreateCompareTaskResponse):void} cb
     * @public
     */
    CreateCompareTask(req, cb) {
        let resp = new CreateCompareTaskResponse();
        this.request("CreateCompareTask", req, resp, cb);
    }

    /**
     * This API is used to query the result of the created check task for object modification.
     * @param {DescribeModifyCheckSyncJobResultRequest} req
     * @param {function(string, DescribeModifyCheckSyncJobResultResponse):void} cb
     * @public
     */
    DescribeModifyCheckSyncJobResult(req, cb) {
        let resp = new DescribeModifyCheckSyncJobResultResponse();
        this.request("DescribeModifyCheckSyncJobResult", req, resp, cb);
    }

    /**
     * This API is used to modify the name of the data subscription instance.
     * @param {ModifySubscribeNameRequest} req
     * @param {function(string, ModifySubscribeNameResponse):void} cb
     * @public
     */
    ModifySubscribeName(req, cb) {
        let resp = new ModifySubscribeNameResponse();
        this.request("ModifySubscribeName", req, resp, cb);
    }

    /**
     * This API is used to delete a data migration task. For a billed task, you must first call the `IsolateMigrateJob` API to isolate it and make sure that it is in **Isolated** status before calling this API to delete it. For a free task, you can directly call the `IsolateMigrateJob` API to delete it.
     * @param {DestroyMigrateJobRequest} req
     * @param {function(string, DestroyMigrateJobResponse):void} cb
     * @public
     */
    DestroyMigrateJob(req, cb) {
        let resp = new DestroyMigrateJobResponse();
        this.request("DestroyMigrateJob", req, resp, cb);
    }

    /**
     * This API is used to query the details of a migration task.
     * @param {DescribeMigrationDetailRequest} req
     * @param {function(string, DescribeMigrationDetailResponse):void} cb
     * @public
     */
    DescribeMigrationDetail(req, cb) {
        let resp = new DescribeMigrationDetailResponse();
        this.request("DescribeMigrationDetail", req, resp, cb);
    }

    /**
     * This API is used to query the latest offset before the specified time in KafkaTopic.The offset output by the interface is the closest offset to this time.If the input time is much later than the current time, the output is equivalent to the latest offset;If the input time is much earlier than the current time, the output is equivalent to the oldest offset;If the input is empty, the default time is 0, which is the oldest offset to be queried.
     * @param {DescribeOffsetByTimeRequest} req
     * @param {function(string, DescribeOffsetByTimeResponse):void} cb
     * @public
     */
    DescribeOffsetByTime(req, cb) {
        let resp = new DescribeOffsetByTimeResponse();
        this.request("DescribeOffsetByTime", req, resp, cb);
    }

    /**
     * This API is used to retry a sync task after certain resolvable errors are reported. After calling this API, you can call the `DescribeSyncJobs` API to query the latest task status.
     * @param {ResumeSyncJobRequest} req
     * @param {function(string, ResumeSyncJobResponse):void} cb
     * @public
     */
    ResumeSyncJob(req, cb) {
        let resp = new ResumeSyncJobResponse();
        this.request("ResumeSyncJob", req, resp, cb);
    }

    /**
     * This API is used to get the check result and query the check status and progress after a check is created. 
If the check succeeds, you can call the `StartMigrateJob` API to start migration.
If the check fails, the cause can be queried. Modify the migration configuration or adjust relevant parameters of the source/target instances through the `ModifyMigrationJob` API based on the error message.
     * @param {DescribeMigrationCheckJobRequest} req
     * @param {function(string, DescribeMigrationCheckJobResponse):void} cb
     * @public
     */
    DescribeMigrationCheckJob(req, cb) {
        let resp = new DescribeMigrationCheckJobResponse();
        this.request("DescribeMigrationCheckJob", req, resp, cb);
    }

    /**
     * This API (`StartMigrationJob`) is used to start a migration task. After calling this API, you can call the `DescribeMigrationJobs` API to query the latest task status.
     * @param {StartMigrateJobRequest} req
     * @param {function(string, StartMigrateJobResponse):void} cb
     * @public
     */
    StartMigrateJob(req, cb) {
        let resp = new StartMigrateJobResponse();
        this.request("StartMigrateJob", req, resp, cb);
    }

    /**
     * This API is used to adjust the specification of a pay-as-you-go task. After calling this API, you can call the `DescribeMigrationJobs` API to query the latest task status.
     * @param {ModifyMigrateJobSpecRequest} req
     * @param {function(string, ModifyMigrateJobSpecResponse):void} cb
     * @public
     */
    ModifyMigrateJobSpec(req, cb) {
        let resp = new ModifyMigrateJobSpecResponse();
        this.request("ModifyMigrateJobSpec", req, resp, cb);
    }

    /**
     * This API is used to delete a sync task. Only tasks in **Isolated** status can be completely deleted. After deletion, you can call the `DescribeSyncJobs` API to get the task list. If the deleted task is not in the list, it is deleted successfully.
     * @param {DestroySyncJobRequest} req
     * @param {function(string, DestroySyncJobResponse):void} cb
     * @public
     */
    DestroySyncJob(req, cb) {
        let resp = new DestroySyncJobResponse();
        this.request("DestroySyncJob", req, resp, cb);
    }

    /**
     * This API is used to rename a data consistency check task.
     * @param {ModifyCompareTaskNameRequest} req
     * @param {function(string, ModifyCompareTaskNameResponse):void} cb
     * @public
     */
    ModifyCompareTaskName(req, cb) {
        let resp = new ModifyCompareTaskNameResponse();
        this.request("ModifyCompareTaskName", req, resp, cb);
    }

    /**
     * This API is used to rename a migration task.
     * @param {ModifyMigrateNameRequest} req
     * @param {function(string, ModifyMigrateNameResponse):void} cb
     * @public
     */
    ModifyMigrateName(req, cb) {
        let resp = new ModifyMigrateNameResponse();
        this.request("ModifyMigrateName", req, resp, cb);
    }

    /**
     * This API is used to complete a data migration task.
For tasks in incremental migration mode, you need to call this API before migration gets ready for completion to stop migrating incremental data.
If the task status queried through the `DescribeMigrationJobs` API is ready (`Status` = `readyComplete`), you can call this API to complete the migration task.
     * @param {CompleteMigrateJobRequest} req
     * @param {function(string, CompleteMigrateJobResponse):void} cb
     * @public
     */
    CompleteMigrateJob(req, cb) {
        let resp = new CompleteMigrateJobResponse();
        this.request("CompleteMigrateJob", req, resp, cb);
    }


}
module.exports = DtsClient;
