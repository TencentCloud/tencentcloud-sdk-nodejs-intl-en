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
const ModifyMigrateJobSpecRequest = models.ModifyMigrateJobSpecRequest;
const StartMigrateJobRequest = models.StartMigrateJobRequest;
const StepTip = models.StepTip;
const DestroyMigrateJobRequest = models.DestroyMigrateJobRequest;
const SkipCheckItemResponse = models.SkipCheckItemResponse;
const ResizeSyncJobResponse = models.ResizeSyncJobResponse;
const ResumeMigrateJobResponse = models.ResumeMigrateJobResponse;
const DifferenceItem = models.DifferenceItem;
const IsolateSyncJobRequest = models.IsolateSyncJobRequest;
const DescribeCheckSyncJobResultRequest = models.DescribeCheckSyncJobResultRequest;
const DestroySyncJobResponse = models.DestroySyncJobResponse;
const DescribeCompareReportResponse = models.DescribeCompareReportResponse;
const IsolateMigrateJobRequest = models.IsolateMigrateJobRequest;
const StopMigrateJobResponse = models.StopMigrateJobResponse;
const TableItem = models.TableItem;
const ModifyCompareTaskNameRequest = models.ModifyCompareTaskNameRequest;
const CompleteMigrateJobResponse = models.CompleteMigrateJobResponse;
const DescribeMigrateDBInstancesResponse = models.DescribeMigrateDBInstancesResponse;
const KeyValuePairOption = models.KeyValuePairOption;
const CreateCheckSyncJobRequest = models.CreateCheckSyncJobRequest;
const StopSyncJobRequest = models.StopSyncJobRequest;
const DescribeMigrationDetailRequest = models.DescribeMigrationDetailRequest;
const DestroySyncJobRequest = models.DestroySyncJobRequest;
const ResizeSyncJobRequest = models.ResizeSyncJobRequest;
const DdlOption = models.DdlOption;
const ConflictHandleOption = models.ConflictHandleOption;
const ResumeSyncJobResponse = models.ResumeSyncJobResponse;
const ModifyCompareTaskNameResponse = models.ModifyCompareTaskNameResponse;
const CreateMigrateCheckJobResponse = models.CreateMigrateCheckJobResponse;
const CreateMigrationServiceRequest = models.CreateMigrationServiceRequest;
const DetailCheckItem = models.DetailCheckItem;
const DescribeCompareTasksRequest = models.DescribeCompareTasksRequest;
const CompareObject = models.CompareObject;
const ErrorInfoItem = models.ErrorInfoItem;
const RecoverSyncJobResponse = models.RecoverSyncJobResponse;
const MigrateAction = models.MigrateAction;
const DeleteCompareTaskResponse = models.DeleteCompareTaskResponse;
const DBEndpointInfo = models.DBEndpointInfo;
const Options = models.Options;
const CompleteMigrateJobRequest = models.CompleteMigrateJobRequest;
const DescribeCompareTasksResponse = models.DescribeCompareTasksResponse;
const StopCompareRequest = models.StopCompareRequest;
const DescribeCheckSyncJobResultResponse = models.DescribeCheckSyncJobResultResponse;
const StopSyncJobResponse = models.StopSyncJobResponse;
const SkippedDetail = models.SkippedDetail;
const MigrateOption = models.MigrateOption;
const ModifyMigrateNameResponse = models.ModifyMigrateNameResponse;
const DescribeMigrationJobsResponse = models.DescribeMigrationJobsResponse;
const SkippedItem = models.SkippedItem;
const DestroyMigrateJobResponse = models.DestroyMigrateJobResponse;
const ProcessProgress = models.ProcessProgress;
const SkipSyncCheckItemRequest = models.SkipSyncCheckItemRequest;
const SkipSyncCheckItemResponse = models.SkipSyncCheckItemResponse;
const IsolateSyncJobResponse = models.IsolateSyncJobResponse;
const CreateMigrateCheckJobRequest = models.CreateMigrateCheckJobRequest;
const DescribeMigrationJobsRequest = models.DescribeMigrationJobsRequest;
const CompareTaskInfo = models.CompareTaskInfo;
const CreateMigrationServiceResponse = models.CreateMigrationServiceResponse;
const StartSyncJobRequest = models.StartSyncJobRequest;
const DescribeMigrationCheckJobResponse = models.DescribeMigrationCheckJobResponse;
const CompareObjectItem = models.CompareObjectItem;
const Endpoint = models.Endpoint;
const DifferenceDetail = models.DifferenceDetail;
const CreateCheckSyncJobResponse = models.CreateCheckSyncJobResponse;
const DBInfo = models.DBInfo;
const ConfigureSyncJobRequest = models.ConfigureSyncJobRequest;
const MigrateDBItem = models.MigrateDBItem;
const DescribeMigrateDBInstancesRequest = models.DescribeMigrateDBInstancesRequest;
const CheckStepInfo = models.CheckStepInfo;
const ProcessStepTip = models.ProcessStepTip;
const ModifyCompareTaskRequest = models.ModifyCompareTaskRequest;
const RecoverSyncJobRequest = models.RecoverSyncJobRequest;
const Database = models.Database;
const ModifyMigrationJobRequest = models.ModifyMigrationJobRequest;
const DescribeSyncJobsRequest = models.DescribeSyncJobsRequest;
const SyncDetailInfo = models.SyncDetailInfo;
const ResumeSyncJobRequest = models.ResumeSyncJobRequest;
const CompareTableItem = models.CompareTableItem;
const ConfigureSyncJobResponse = models.ConfigureSyncJobResponse;
const CompareViewItem = models.CompareViewItem;
const StepInfo = models.StepInfo;
const ResumeMigrateJobRequest = models.ResumeMigrateJobRequest;
const TradeInfo = models.TradeInfo;
const StartCompareResponse = models.StartCompareResponse;
const CreateCompareTaskResponse = models.CreateCompareTaskResponse;
const StopCompareResponse = models.StopCompareResponse;
const SkipCheckItemRequest = models.SkipCheckItemRequest;
const CompareAbstractInfo = models.CompareAbstractInfo;
const CheckStep = models.CheckStep;
const CompareTaskItem = models.CompareTaskItem;
const ModifyMigrateJobSpecResponse = models.ModifyMigrateJobSpecResponse;
const CreateSyncJobResponse = models.CreateSyncJobResponse;
const CreateCompareTaskRequest = models.CreateCompareTaskRequest;
const StartCompareRequest = models.StartCompareRequest;
const DescribeMigrationCheckJobRequest = models.DescribeMigrationCheckJobRequest;
const DescribeMigrationDetailResponse = models.DescribeMigrationDetailResponse;
const ModifyMigrateNameRequest = models.ModifyMigrateNameRequest;
const JobItem = models.JobItem;
const StartSyncJobResponse = models.StartSyncJobResponse;
const Objects = models.Objects;
const RecoverMigrateJobResponse = models.RecoverMigrateJobResponse;
const DBItem = models.DBItem;
const DeleteCompareTaskRequest = models.DeleteCompareTaskRequest;
const MigrateDetailInfo = models.MigrateDetailInfo;
const StopMigrateJobRequest = models.StopMigrateJobRequest;
const IsolateMigrateJobResponse = models.IsolateMigrateJobResponse;
const SyncJobInfo = models.SyncJobInfo;
const RoleItem = models.RoleItem;
const TagFilter = models.TagFilter;
const StepDetailInfo = models.StepDetailInfo;
const CreateSyncJobRequest = models.CreateSyncJobRequest;
const ViewItem = models.ViewItem;
const DescribeCompareReportRequest = models.DescribeCompareReportRequest;
const View = models.View;
const TagItem = models.TagItem;
const RecoverMigrateJobRequest = models.RecoverMigrateJobRequest;
const OnlineDDL = models.OnlineDDL;
const DatabaseTableObject = models.DatabaseTableObject;
const Table = models.Table;
const CompareDetailInfo = models.CompareDetailInfo;
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
     * This API is used to query the result of a sync check task.
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
     * This API is used to complete a data migration task.
For tasks in incremental migration mode, you need to call this API before migration gets ready for completion to stop migrating incremental data.
If the task status queried through the `DescribeMigrationJobs` API is ready (`Status` = `readyComplete), you can call this API to complete the migration task.

     * @param {CompleteMigrateJobRequest} req
     * @param {function(string, CompleteMigrateJobResponse):void} cb
     * @public
     */
    CompleteMigrateJob(req, cb) {
        let resp = new CompleteMigrateJobResponse();
        this.request("CompleteMigrateJob", req, resp, cb);
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
     * This API is used to isolate a sync task. After the task is isolated, you can call the `DescribeSyncJobs` API to query its status, call `RecoverSyncJob` to recover it, or directly delete it. For a free task, calling this API will directly delete it permanently.
     * @param {IsolateSyncJobRequest} req
     * @param {function(string, IsolateSyncJobResponse):void} cb
     * @public
     */
    IsolateSyncJob(req, cb) {
        let resp = new IsolateSyncJobResponse();
        this.request("IsolateSyncJob", req, resp, cb);
    }


}
module.exports = DtsClient;
