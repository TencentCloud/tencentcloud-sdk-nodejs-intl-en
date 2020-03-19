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
const DescribeSyncJobsResponse = models.DescribeSyncJobsResponse;
const DescribeMigrateJobsResponse = models.DescribeMigrateJobsResponse;
const MigrateDetailInfo = models.MigrateDetailInfo;
const DeleteMigrateJobResponse = models.DeleteMigrateJobResponse;
const CreateMigrateCheckJobRequest = models.CreateMigrateCheckJobRequest;
const SyncInstanceInfo = models.SyncInstanceInfo;
const CreateSyncJobResponse = models.CreateSyncJobResponse;
const DescribeMigrateCheckJobRequest = models.DescribeMigrateCheckJobRequest;
const StartMigrateJobRequest = models.StartMigrateJobRequest;
const StartSyncJobRequest = models.StartSyncJobRequest;
const CreateMigrateJobRequest = models.CreateMigrateJobRequest;
const SyncJobInfo = models.SyncJobInfo;
const DstInfo = models.DstInfo;
const ModifyMigrateJobResponse = models.ModifyMigrateJobResponse;
const SrcInfo = models.SrcInfo;
const ConsistencyParams = models.ConsistencyParams;
const SyncOption = models.SyncOption;
const MigrateOption = models.MigrateOption;
const CreateMigrateCheckJobResponse = models.CreateMigrateCheckJobResponse;
const MigrateStepDetailInfo = models.MigrateStepDetailInfo;
const DescribeMigrateCheckJobResponse = models.DescribeMigrateCheckJobResponse;
const StartSyncJobResponse = models.StartSyncJobResponse;
const CreateSyncCheckJobResponse = models.CreateSyncCheckJobResponse;
const DescribeSyncCheckJobRequest = models.DescribeSyncCheckJobRequest;
const StopMigrateJobRequest = models.StopMigrateJobRequest;
const ModifySyncJobResponse = models.ModifySyncJobResponse;
const ModifyMigrateJobRequest = models.ModifyMigrateJobRequest;
const CompleteMigrateJobRequest = models.CompleteMigrateJobRequest;
const SyncCheckStepInfo = models.SyncCheckStepInfo;
const CreateSyncJobRequest = models.CreateSyncJobRequest;
const DescribeSyncJobsRequest = models.DescribeSyncJobsRequest;
const DescribeMigrateJobsRequest = models.DescribeMigrateJobsRequest;
const SyncDetailInfo = models.SyncDetailInfo;
const SyncStepDetailInfo = models.SyncStepDetailInfo;
const StopMigrateJobResponse = models.StopMigrateJobResponse;
const DeleteSyncJobResponse = models.DeleteSyncJobResponse;
const CreateSyncCheckJobRequest = models.CreateSyncCheckJobRequest;
const CompleteMigrateJobResponse = models.CompleteMigrateJobResponse;
const StartMigrateJobResponse = models.StartMigrateJobResponse;
const CreateMigrateJobResponse = models.CreateMigrateJobResponse;
const DeleteMigrateJobRequest = models.DeleteMigrateJobRequest;
const DeleteSyncJobRequest = models.DeleteSyncJobRequest;
const MigrateJobInfo = models.MigrateJobInfo;
const ModifySyncJobRequest = models.ModifySyncJobRequest;
const DescribeSyncCheckJobResponse = models.DescribeSyncCheckJobResponse;


/**
 * dts client
 * @class
 */
class DtsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dts.tencentcloudapi.com", "2018-03-30", credential, region, profile);
    }
    
    /**
     * Before the StartSyncJob API is called to start disaster recovery sync, this API should be called first to create a check. Data sync can start only if the check succeeds. You can view the check result through the DescribeSyncCheckJob API.
Sync can begin only if the check succeeds.
     * @param {CreateSyncCheckJobRequest} req
     * @param {function(string, CreateSyncCheckJobResponse):void} cb
     * @public
     */
    CreateSyncCheckJob(req, cb) {
        let resp = new CreateSyncCheckJobResponse();
        this.request("CreateSyncCheckJob", req, resp, cb);
    }

    /**
     * This API is used to get the check result after a disaster recovery sync check task is created through the CreateSyncCheckJob API. Check status and progress can be queried.
If the check succeeds, you can call the StartSyncJob API to start the sync task.
If the check fails, the reason will be returned. You can modify the configuration through the ModifySyncJob API and initiate check again.
It takes about 30 seconds to complete the check task. If the returned status is not "finished", the check has not been completed, and this API needs to be polled.
If Status=finished and CheckFlag=1, the check succeeds.
If Status=finished and CheckFlag !=1, the check fails.
     * @param {DescribeSyncCheckJobRequest} req
     * @param {function(string, DescribeSyncCheckJobResponse):void} cb
     * @public
     */
    DescribeSyncCheckJob(req, cb) {
        let resp = new DescribeSyncCheckJobResponse();
        this.request("DescribeSyncCheckJob", req, resp, cb);
    }

    /**
     * This API is used to delete a disaster recovery sync task. Sync tasks that are running cannot be deleted.
     * @param {DeleteSyncJobRequest} req
     * @param {function(string, DeleteSyncJobResponse):void} cb
     * @public
     */
    DeleteSyncJob(req, cb) {
        let resp = new DeleteSyncJobResponse();
        this.request("DeleteSyncJob", req, resp, cb);
    }

    /**
     * This API is used to query disaster recovery sync tasks initiated on the DTS platform.
     * @param {DescribeSyncJobsRequest} req
     * @param {function(string, DescribeSyncJobsResponse):void} cb
     * @public
     */
    DescribeSyncJobs(req, cb) {
        let resp = new DescribeSyncJobsResponse();
        this.request("DescribeSyncJobs", req, resp, cb);
    }

    /**
     * This API (StartMigrationJob) is used to start a migration task. After the API is called, non-scheduled migration tasks will start the migration immediately, while scheduled tasks will start the countdown.
Before calling this API, be sure to use the CreateMigrateCheckJob API to check the data migration task, which can be started only if its status queried through the DescribeMigrateJobs API is check succeeded (status=4).
     * @param {StartMigrateJobRequest} req
     * @param {function(string, StartMigrateJobResponse):void} cb
     * @public
     */
    StartMigrateJob(req, cb) {
        let resp = new StartMigrateJobResponse();
        this.request("StartMigrateJob", req, resp, cb);
    }

    /**
     * This API is used to modify a disaster recovery sync task. 
If the status of a sync task is creating, created, check succeeded, or check failed, this API can be called to modify the task. 
The information of the source and target instances cannot be modified, but the task name and the tables to be synced can.
     * @param {ModifySyncJobRequest} req
     * @param {function(string, ModifySyncJobResponse):void} cb
     * @public
     */
    ModifySyncJob(req, cb) {
        let resp = new ModifySyncJobResponse();
        this.request("ModifySyncJob", req, resp, cb);
    }

    /**
     * This API (CreateMigrateJob) is used to create a data migration task.

For a finance zone linkage, please use the domain name dts.ap-shenzhen-fsi.tencentcloudapi.com.
     * @param {CreateMigrateJobRequest} req
     * @param {function(string, CreateMigrateJobResponse):void} cb
     * @public
     */
    CreateMigrateJob(req, cb) {
        let resp = new CreateMigrateJobResponse();
        this.request("CreateMigrateJob", req, resp, cb);
    }

    /**
     * This API (DeleteMigrationJob) is used to delete a data migration task. If the task status queried through the DescribeMigrateJobs API is checking (status=3), running (status=7), ready (status=8), canceling (status=11), or completing (status=12), the task cannot be deleted.
     * @param {DeleteMigrateJobRequest} req
     * @param {function(string, DeleteMigrateJobResponse):void} cb
     * @public
     */
    DeleteMigrateJob(req, cb) {
        let resp = new DeleteMigrateJobResponse();
        this.request("DeleteMigrateJob", req, resp, cb);
    }

    /**
     * This API is used to start a disaster recovery sync task after it is successfully checked through the CreateSyncCheckJob and DescribeSyncCheckJob APIs.
     * @param {StartSyncJobRequest} req
     * @param {function(string, StartSyncJobResponse):void} cb
     * @public
     */
    StartSyncJob(req, cb) {
        let resp = new StartSyncJobResponse();
        this.request("StartSyncJob", req, resp, cb);
    }

    /**
     * This API is used to create a migration check task.
Before migration, you should call this API to create a check. Migration will start only if the check succeeds. You can view the check result through the DescribeMigrateCheckJob API.
After successful check, if the migration task needs to be modified, a new check task should be created and migration will begin only after the new check succeeds.
     * @param {CreateMigrateCheckJobRequest} req
     * @param {function(string, CreateMigrateCheckJobResponse):void} cb
     * @public
     */
    CreateMigrateCheckJob(req, cb) {
        let resp = new CreateMigrateCheckJobResponse();
        this.request("CreateMigrateCheckJob", req, resp, cb);
    }

    /**
     * This API (ModifyMigrateJob) is used to modify a data migration task.
If the status of a migration task is creating (status=1), check succeeded (status=4), check failed (status=5), or migration failed (status=10), this API can be called to modify the task, but the type of the source and target instances and the region of the target instance cannot be modified.

For a finance zone linkage, please use the domain name dts.ap-shenzhen-fsi.tencentcloudapi.com.
     * @param {ModifyMigrateJobRequest} req
     * @param {function(string, ModifyMigrateJobResponse):void} cb
     * @public
     */
    ModifyMigrateJob(req, cb) {
        let resp = new ModifyMigrateJobResponse();
        this.request("ModifyMigrateJob", req, resp, cb);
    }

    /**
     * This API (CreateSyncJob) is used to create a disaster recovery sync task.
After successful creation, check can be initiated through the CreateSyncCheckJob API. The sync task can be started through the StartSyncJob API only if the check succeeds.
     * @param {CreateSyncJobRequest} req
     * @param {function(string, CreateSyncJobResponse):void} cb
     * @public
     */
    CreateSyncJob(req, cb) {
        let resp = new CreateSyncJobResponse();
        this.request("CreateSyncJob", req, resp, cb);
    }

    /**
     * This API (StopMigrateJob) is used to cancel a data migration task.
During migration, this API can be used to cancel migration if the task status queried through the DescribeMigrateJobs API is running (status=7) or ready (status=8), and the migration task will fail.
     * @param {StopMigrateJobRequest} req
     * @param {function(string, StopMigrateJobResponse):void} cb
     * @public
     */
    StopMigrateJob(req, cb) {
        let resp = new StopMigrateJobResponse();
        this.request("StopMigrateJob", req, resp, cb);
    }

    /**
     * This API is used to query data migration tasks.
For a finance zone linkage, please use the domain name https://dts.ap-shenzhen-fsi.tencentcloudapi.com.
     * @param {DescribeMigrateJobsRequest} req
     * @param {function(string, DescribeMigrateJobsResponse):void} cb
     * @public
     */
    DescribeMigrateJobs(req, cb) {
        let resp = new DescribeMigrateJobsResponse();
        this.request("DescribeMigrateJobs", req, resp, cb);
    }

    /**
     * This API is used to get the check result and query check status and progress after a check is created. 
If the check succeeds, you can call the StartMigrateJob API to start migration.
If the check fails, the reason can be queried. Please modify the migration configuration or adjust relevant parameters of the source/target instances through the ModifyMigrateJob API based on the error message.
     * @param {DescribeMigrateCheckJobRequest} req
     * @param {function(string, DescribeMigrateCheckJobResponse):void} cb
     * @public
     */
    DescribeMigrateCheckJob(req, cb) {
        let resp = new DescribeMigrateCheckJobResponse();
        this.request("DescribeMigrateCheckJob", req, resp, cb);
    }

    /**
     * This API (CompleteMigrateJob) is used to complete a data migration task.
For tasks in incremental migration mode, you need to call this API before migration gets ready, so as to stop migrating incremental data.
If the task status queried through the (DescribeMigrateJobs) API is ready (status=8), you can call this API to complete the migration task.

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
