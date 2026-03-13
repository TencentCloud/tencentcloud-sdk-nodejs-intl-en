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
const CreateMigrationTaskRequest = models.CreateMigrationTaskRequest;
const ScaleUpFileSystemResponse = models.ScaleUpFileSystemResponse;
const SnapshotStatistics = models.SnapshotStatistics;
const CreateLifecycleDataTaskRequest = models.CreateLifecycleDataTaskRequest;
const DescribeCfsPGroupsResponse = models.DescribeCfsPGroupsResponse;
const ModifyDataFlowResponse = models.ModifyDataFlowResponse;
const DescribeMountTargetsResponse = models.DescribeMountTargetsResponse;
const DescribeSnapshotOperationLogsRequest = models.DescribeSnapshotOperationLogsRequest;
const CreateLifecyclePolicyDownloadTaskRequest = models.CreateLifecyclePolicyDownloadTaskRequest;
const MigrationTaskInfo = models.MigrationTaskInfo;
const StopLifecycleDataTaskRequest = models.StopLifecycleDataTaskRequest;
const FileSystemClient = models.FileSystemClient;
const DescribeCfsFileSystemsResponse = models.DescribeCfsFileSystemsResponse;
const CreateLifecycleDataTaskResponse = models.CreateLifecycleDataTaskResponse;
const ApplyPathLifecyclePolicyRequest = models.ApplyPathLifecyclePolicyRequest;
const BindAutoSnapshotPolicyRequest = models.BindAutoSnapshotPolicyRequest;
const ModifyFileSystemAutoScaleUpRuleRequest = models.ModifyFileSystemAutoScaleUpRuleRequest;
const ScaleUpFileSystemRequest = models.ScaleUpFileSystemRequest;
const CreateCfsPGroupRequest = models.CreateCfsPGroupRequest;
const DescribeMigrationTasksResponse = models.DescribeMigrationTasksResponse;
const DescribeAutoSnapshotPoliciesRequest = models.DescribeAutoSnapshotPoliciesRequest;
const DescribeAvailableZoneInfoRequest = models.DescribeAvailableZoneInfoRequest;
const DescribeMountTargetsRequest = models.DescribeMountTargetsRequest;
const CreateDataFlowResponse = models.CreateDataFlowResponse;
const SignUpCfsServiceRequest = models.SignUpCfsServiceRequest;
const SignUpCfsServiceResponse = models.SignUpCfsServiceResponse;
const AutoSnapshotPolicyInfo = models.AutoSnapshotPolicyInfo;
const CreateLifecyclePolicyDownloadTaskResponse = models.CreateLifecyclePolicyDownloadTaskResponse;
const DescribeCfsRulesRequest = models.DescribeCfsRulesRequest;
const UpdateCfsFileSystemNameRequest = models.UpdateCfsFileSystemNameRequest;
const DeleteCfsPGroupRequest = models.DeleteCfsPGroupRequest;
const DoDirectoryOperationResponse = models.DoDirectoryOperationResponse;
const UpdateCfsPGroupResponse = models.UpdateCfsPGroupResponse;
const DescribeLifecyclePoliciesRequest = models.DescribeLifecyclePoliciesRequest;
const DeleteAutoSnapshotPolicyRequest = models.DeleteAutoSnapshotPolicyRequest;
const CreateLifecyclePolicyResponse = models.CreateLifecyclePolicyResponse;
const UpdateCfsRuleRequest = models.UpdateCfsRuleRequest;
const StopLifecycleDataTaskResponse = models.StopLifecycleDataTaskResponse;
const DescribeAvailableZoneInfoResponse = models.DescribeAvailableZoneInfoResponse;
const DeleteCfsSnapshotResponse = models.DeleteCfsSnapshotResponse;
const DescribeCfsFileSystemClientsResponse = models.DescribeCfsFileSystemClientsResponse;
const DescribeLifecycleDataTaskResponse = models.DescribeLifecycleDataTaskResponse;
const ModifyLifecyclePolicyResponse = models.ModifyLifecyclePolicyResponse;
const CreateCfsSnapshotRequest = models.CreateCfsSnapshotRequest;
const DescribeBucketListRequest = models.DescribeBucketListRequest;
const DeleteCfsRuleRequest = models.DeleteCfsRuleRequest;
const ApplyPathLifecyclePolicyResponse = models.ApplyPathLifecyclePolicyResponse;
const UpdateCfsRuleResponse = models.UpdateCfsRuleResponse;
const DeleteMigrationTaskResponse = models.DeleteMigrationTaskResponse;
const DescribeLifecycleDataTaskRequest = models.DescribeLifecycleDataTaskRequest;
const DescribeSnapshotOperationLogsResponse = models.DescribeSnapshotOperationLogsResponse;
const DeleteCfsFileSystemRequest = models.DeleteCfsFileSystemRequest;
const DeleteLifecyclePolicyResponse = models.DeleteLifecyclePolicyResponse;
const CreateCfsPGroupResponse = models.CreateCfsPGroupResponse;
const DescribeCfsServiceStatusRequest = models.DescribeCfsServiceStatusRequest;
const CheckResult = models.CheckResult;
const DeleteMigrationTaskRequest = models.DeleteMigrationTaskRequest;
const PGroup = models.PGroup;
const CreateAutoSnapshotPolicyResponse = models.CreateAutoSnapshotPolicyResponse;
const ModifyFileSystemAutoScaleUpRuleResponse = models.ModifyFileSystemAutoScaleUpRuleResponse;
const DataFlowInfo = models.DataFlowInfo;
const AvailableType = models.AvailableType;
const LifecyclePolicy = models.LifecyclePolicy;
const CreateCfsSnapshotResponse = models.CreateCfsSnapshotResponse;
const LifecycleRule = models.LifecycleRule;
const CreateCfsRuleRequest = models.CreateCfsRuleRequest;
const DeleteCfsFileSystemResponse = models.DeleteCfsFileSystemResponse;
const CreateCfsFileSystemResponse = models.CreateCfsFileSystemResponse;
const BucketInfo = models.BucketInfo;
const DeleteDataFlowResponse = models.DeleteDataFlowResponse;
const SnapshotOperateLog = models.SnapshotOperateLog;
const LifecycleDataTaskInfo = models.LifecycleDataTaskInfo;
const DescribeLifecyclePoliciesResponse = models.DescribeLifecyclePoliciesResponse;
const FileSystemInfo = models.FileSystemInfo;
const DescribeDataFlowRequest = models.DescribeDataFlowRequest;
const DescribeBucketListResponse = models.DescribeBucketListResponse;
const UpdateCfsFileSystemNameResponse = models.UpdateCfsFileSystemNameResponse;
const DescribeCfsSnapshotOverviewResponse = models.DescribeCfsSnapshotOverviewResponse;
const AutoScaleUpRule = models.AutoScaleUpRule;
const DeleteCfsSnapshotRequest = models.DeleteCfsSnapshotRequest;
const DescribeCfsFileSystemClientsRequest = models.DescribeCfsFileSystemClientsRequest;
const AvailableProtoStatus = models.AvailableProtoStatus;
const DescribeCfsFileSystemsRequest = models.DescribeCfsFileSystemsRequest;
const AvailableRegion = models.AvailableRegion;
const CreateCfsFileSystemRequest = models.CreateCfsFileSystemRequest;
const AvailableZone = models.AvailableZone;
const DescribeMigrationTasksRequest = models.DescribeMigrationTasksRequest;
const PGroupRuleInfo = models.PGroupRuleInfo;
const Filter = models.Filter;
const UnbindAutoSnapshotPolicyRequest = models.UnbindAutoSnapshotPolicyRequest;
const UnbindAutoSnapshotPolicyResponse = models.UnbindAutoSnapshotPolicyResponse;
const DescribeCfsServiceStatusResponse = models.DescribeCfsServiceStatusResponse;
const ExstraPerformanceInfo = models.ExstraPerformanceInfo;
const BindAutoSnapshotPolicyResponse = models.BindAutoSnapshotPolicyResponse;
const DescribeCfsSnapshotsRequest = models.DescribeCfsSnapshotsRequest;
const UpdateCfsFileSystemSizeLimitResponse = models.UpdateCfsFileSystemSizeLimitResponse;
const UpdateAutoSnapshotPolicyRequest = models.UpdateAutoSnapshotPolicyRequest;
const UpdateCfsFileSystemSizeLimitRequest = models.UpdateCfsFileSystemSizeLimitRequest;
const DescribeCfsRulesResponse = models.DescribeCfsRulesResponse;
const UpdateCfsFileSystemPGroupResponse = models.UpdateCfsFileSystemPGroupResponse;
const UpdateAutoSnapshotPolicyResponse = models.UpdateAutoSnapshotPolicyResponse;
const FileSystemByPolicy = models.FileSystemByPolicy;
const SnapshotInfo = models.SnapshotInfo;
const MountInfo = models.MountInfo;
const UpdateCfsFileSystemPGroupRequest = models.UpdateCfsFileSystemPGroupRequest;
const CreateMigrationTaskResponse = models.CreateMigrationTaskResponse;
const DeleteAutoSnapshotPolicyResponse = models.DeleteAutoSnapshotPolicyResponse;
const DeleteCfsRuleResponse = models.DeleteCfsRuleResponse;
const UpdateCfsSnapshotAttributeResponse = models.UpdateCfsSnapshotAttributeResponse;
const UpdateCfsPGroupRequest = models.UpdateCfsPGroupRequest;
const DeleteDataFlowRequest = models.DeleteDataFlowRequest;
const PathInfo = models.PathInfo;
const TagInfo = models.TagInfo;
const DescribeCfsPGroupsRequest = models.DescribeCfsPGroupsRequest;
const DeleteCfsPGroupResponse = models.DeleteCfsPGroupResponse;
const UpdateCfsSnapshotAttributeRequest = models.UpdateCfsSnapshotAttributeRequest;
const ModifyLifecyclePolicyRequest = models.ModifyLifecyclePolicyRequest;
const DeleteLifecyclePolicyRequest = models.DeleteLifecyclePolicyRequest;
const TieringDetailInfo = models.TieringDetailInfo;
const CreateLifecyclePolicyRequest = models.CreateLifecyclePolicyRequest;
const PGroupInfo = models.PGroupInfo;
const CreateCfsRuleResponse = models.CreateCfsRuleResponse;
const StopMigrationTaskResponse = models.StopMigrationTaskResponse;
const DescribeCfsSnapshotsResponse = models.DescribeCfsSnapshotsResponse;
const StopMigrationTaskRequest = models.StopMigrationTaskRequest;
const DescribeAutoSnapshotPoliciesResponse = models.DescribeAutoSnapshotPoliciesResponse;
const ModifyDataFlowRequest = models.ModifyDataFlowRequest;
const DescribeCfsSnapshotOverviewRequest = models.DescribeCfsSnapshotOverviewRequest;
const CreateAutoSnapshotPolicyRequest = models.CreateAutoSnapshotPolicyRequest;
const CreateDataFlowRequest = models.CreateDataFlowRequest;
const DescribeDataFlowResponse = models.DescribeDataFlowResponse;
const DoDirectoryOperationRequest = models.DoDirectoryOperationRequest;


/**
 * cfs client
 * @class
 */
class CfsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cfs.intl.tencentcloudapi.com", "2019-07-19", credential, region, profile);
    }
    
    /**
     * This API is used to query the list of permission group rules.
     * @param {DescribeCfsRulesRequest} req
     * @param {function(string, DescribeCfsRulesResponse):void} cb
     * @public
     */
    DescribeCfsRules(req, cb) {
        let resp = new DescribeCfsRulesResponse();
        this.request("DescribeCfsRules", req, resp, cb);
    }

    /**
     * This API is used to update the permission group used by a file system.
     * @param {UpdateCfsFileSystemPGroupRequest} req
     * @param {function(string, UpdateCfsFileSystemPGroupResponse):void} cb
     * @public
     */
    UpdateCfsFileSystemPGroup(req, cb) {
        let resp = new UpdateCfsFileSystemPGroupResponse();
        this.request("UpdateCfsFileSystemPGroup", req, resp, cb);
    }

    /**
     * This API is used to query the lifecycle task. It only supports querying task data within 3 months.
     * @param {DescribeLifecycleDataTaskRequest} req
     * @param {function(string, DescribeLifecycleDataTaskResponse):void} cb
     * @public
     */
    DescribeLifecycleDataTask(req, cb) {
        let resp = new DescribeLifecycleDataTaskResponse();
        this.request("DescribeLifecycleDataTask", req, resp, cb);
    }

    /**
     * This API is used to delete a file system snapshot.
     * @param {DeleteCfsSnapshotRequest} req
     * @param {function(string, DeleteCfsSnapshotResponse):void} cb
     * @public
     */
    DeleteCfsSnapshot(req, cb) {
        let resp = new DeleteCfsSnapshotResponse();
        this.request("DeleteCfsSnapshot", req, resp, cb);
    }

    /**
     * This API is used to delete a file system.
     * @param {DeleteCfsFileSystemRequest} req
     * @param {function(string, DeleteCfsFileSystemResponse):void} cb
     * @public
     */
    DeleteCfsFileSystem(req, cb) {
        let resp = new DeleteCfsFileSystemResponse();
        this.request("DeleteCfsFileSystem", req, resp, cb);
    }

    /**
     * This API is used to update the name and retention period of a file system snapshot.
     * @param {UpdateCfsSnapshotAttributeRequest} req
     * @param {function(string, UpdateCfsSnapshotAttributeResponse):void} cb
     * @public
     */
    UpdateCfsSnapshotAttribute(req, cb) {
        let resp = new UpdateCfsSnapshotAttributeResponse();
        this.request("UpdateCfsSnapshotAttribute", req, resp, cb);
    }

    /**
     * This API is used to get the list of migration tasks.
To use this API, submit a ticket for us to add you to the allowlist.
     * @param {DescribeMigrationTasksRequest} req
     * @param {function(string, DescribeMigrationTasksResponse):void} cb
     * @public
     */
    DescribeMigrationTasks(req, cb) {
        let resp = new DescribeMigrationTasksResponse();
        this.request("DescribeMigrationTasks", req, resp, cb);
    }

    /**
     * This API is used to query the list of scheduled snapshot policies of a file system.
     * @param {DescribeAutoSnapshotPoliciesRequest} req
     * @param {function(string, DescribeAutoSnapshotPoliciesResponse):void} cb
     * @public
     */
    DescribeAutoSnapshotPolicies(req, cb) {
        let resp = new DescribeAutoSnapshotPoliciesResponse();
        this.request("DescribeAutoSnapshotPolicies", req, resp, cb);
    }

    /**
     * This API is used to query the mount targets of a file system.
     * @param {DescribeMountTargetsRequest} req
     * @param {function(string, DescribeMountTargetsResponse):void} cb
     * @public
     */
    DescribeMountTargets(req, cb) {
        let resp = new DescribeMountTargetsResponse();
        this.request("DescribeMountTargets", req, resp, cb);
    }

    /**
     * This API is used to create a data flow.
     * @param {CreateDataFlowRequest} req
     * @param {function(string, CreateDataFlowResponse):void} cb
     * @public
     */
    CreateDataFlow(req, cb) {
        let resp = new CreateDataFlowResponse();
        this.request("CreateDataFlow", req, resp, cb);
    }

    /**
     * This API is used to delete a permission group. Only permission groups not bound to a file system can be deleted by this API.
     * @param {DeleteCfsPGroupRequest} req
     * @param {function(string, DeleteCfsPGroupResponse):void} cb
     * @public
     */
    DeleteCfsPGroup(req, cb) {
        let resp = new DeleteCfsPGroupResponse();
        this.request("DeleteCfsPGroup", req, resp, cb);
    }

    /**
     * Delete a lifecycle management policy.
     * @param {DeleteLifecyclePolicyRequest} req
     * @param {function(string, DeleteLifecyclePolicyResponse):void} cb
     * @public
     */
    DeleteLifecyclePolicy(req, cb) {
        let resp = new DeleteLifecyclePolicyResponse();
        this.request("DeleteLifecyclePolicy", req, resp, cb);
    }

    /**
     * This API is used to unbind a snapshot policy from a file system.
     * @param {UnbindAutoSnapshotPolicyRequest} req
     * @param {function(string, UnbindAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    UnbindAutoSnapshotPolicy(req, cb) {
        let resp = new UnbindAutoSnapshotPolicyResponse();
        this.request("UnbindAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * Download the file list in a lifecycle task.
     * @param {CreateLifecyclePolicyDownloadTaskRequest} req
     * @param {function(string, CreateLifecyclePolicyDownloadTaskResponse):void} cb
     * @public
     */
    CreateLifecyclePolicyDownloadTask(req, cb) {
        let resp = new CreateLifecyclePolicyDownloadTaskResponse();
        this.request("CreateLifecyclePolicyDownloadTask", req, resp, cb);
    }

    /**
     * This API is used to query clients on which this file system is mounted. To do so, the client needs to have the CFS monitoring plugin installed.
     * @param {DescribeCfsFileSystemClientsRequest} req
     * @param {function(string, DescribeCfsFileSystemClientsResponse):void} cb
     * @public
     */
    DescribeCfsFileSystemClients(req, cb) {
        let resp = new DescribeCfsFileSystemClientsResponse();
        this.request("DescribeCfsFileSystemClients", req, resp, cb);
    }

    /**
     * This API is used to query the status of the CFS service.
     * @param {DescribeCfsServiceStatusRequest} req
     * @param {function(string, DescribeCfsServiceStatusResponse):void} cb
     * @public
     */
    DescribeCfsServiceStatus(req, cb) {
        let resp = new DescribeCfsServiceStatusResponse();
        this.request("DescribeCfsServiceStatus", req, resp, cb);
    }

    /**
     * This API is used to terminate a migration task, including tasks in the Waiting or Running status.
     * @param {StopMigrationTaskRequest} req
     * @param {function(string, StopMigrationTaskResponse):void} cb
     * @public
     */
    StopMigrationTask(req, cb) {
        let resp = new StopMigrationTaskResponse();
        this.request("StopMigrationTask", req, resp, cb);
    }

    /**
     * To obtain the list of data source buckets.
     * @param {DescribeBucketListRequest} req
     * @param {function(string, DescribeBucketListResponse):void} cb
     * @public
     */
    DescribeBucketList(req, cb) {
        let resp = new DescribeBucketListResponse();
        this.request("DescribeBucketList", req, resp, cb);
    }

    /**
     * This API is used to query the availability of a region.
     * @param {DescribeAvailableZoneInfoRequest} req
     * @param {function(string, DescribeAvailableZoneInfoResponse):void} cb
     * @public
     */
    DescribeAvailableZoneInfo(req, cb) {
        let resp = new DescribeAvailableZoneInfoResponse();
        this.request("DescribeAvailableZoneInfo", req, resp, cb);
    }

    /**
     * Support proactive settlement/preheat API.
     * @param {CreateLifecycleDataTaskRequest} req
     * @param {function(string, CreateLifecycleDataTaskResponse):void} cb
     * @public
     */
    CreateLifecycleDataTask(req, cb) {
        let resp = new CreateLifecycleDataTaskResponse();
        this.request("CreateLifecycleDataTask", req, resp, cb);
    }

    /**
     * This API is used to activate the CFS service.
     * @param {SignUpCfsServiceRequest} req
     * @param {function(string, SignUpCfsServiceResponse):void} cb
     * @public
     */
    SignUpCfsService(req, cb) {
        let resp = new SignUpCfsServiceResponse();
        this.request("SignUpCfsService", req, resp, cb);
    }

    /**
     * This API is used to delete migration tasks. Deletion is not supported for tasks in the status of Waiting, creating, running, canceling, or terminating.
     * @param {DeleteMigrationTaskRequest} req
     * @param {function(string, DeleteMigrationTaskResponse):void} cb
     * @public
     */
    DeleteMigrationTask(req, cb) {
        let resp = new DeleteMigrationTaskResponse();
        this.request("DeleteMigrationTask", req, resp, cb);
    }

    /**
     * This API is used to expand the turbo file system. It only supports expansion and does not support scale-down. The scaling increment for the turbo standard type is 10240 GIB, and for the turbo performance type, it is 5120 GIB.
     * @param {ScaleUpFileSystemRequest} req
     * @param {function(string, ScaleUpFileSystemResponse):void} cb
     * @public
     */
    ScaleUpFileSystem(req, cb) {
        let resp = new ScaleUpFileSystemResponse();
        this.request("ScaleUpFileSystem", req, resp, cb);
    }

    /**
     * This API is used to update the capacity limit of a file system.
     * @param {UpdateCfsFileSystemSizeLimitRequest} req
     * @param {function(string, UpdateCfsFileSystemSizeLimitResponse):void} cb
     * @public
     */
    UpdateCfsFileSystemSizeLimit(req, cb) {
        let resp = new UpdateCfsFileSystemSizeLimitResponse();
        this.request("UpdateCfsFileSystemSizeLimit", req, resp, cb);
    }

    /**
     * This API is used to create a file storage lifecycle policy.
     * @param {CreateLifecyclePolicyRequest} req
     * @param {function(string, CreateLifecyclePolicyResponse):void} cb
     * @public
     */
    CreateLifecyclePolicy(req, cb) {
        let resp = new CreateLifecyclePolicyResponse();
        this.request("CreateLifecyclePolicy", req, resp, cb);
    }

    /**
     * This API is used to create a file system.
     * @param {CreateCfsFileSystemRequest} req
     * @param {function(string, CreateCfsFileSystemResponse):void} cb
     * @public
     */
    CreateCfsFileSystem(req, cb) {
        let resp = new CreateCfsFileSystemResponse();
        this.request("CreateCfsFileSystem", req, resp, cb);
    }

    /**
     * This API is used to query the list of permission groups.
     * @param {DescribeCfsPGroupsRequest} req
     * @param {function(string, DescribeCfsPGroupsResponse):void} cb
     * @public
     */
    DescribeCfsPGroups(req, cb) {
        let resp = new DescribeCfsPGroupsResponse();
        this.request("DescribeCfsPGroups", req, resp, cb);
    }

    /**
     * This API is used to get the snapshot overview of a file system.
     * @param {DescribeCfsSnapshotOverviewRequest} req
     * @param {function(string, DescribeCfsSnapshotOverviewResponse):void} cb
     * @public
     */
    DescribeCfsSnapshotOverview(req, cb) {
        let resp = new DescribeCfsSnapshotOverviewResponse();
        this.request("DescribeCfsSnapshotOverview", req, resp, cb);
    }

    /**
     * Query lifecycle management policies.
     * @param {DescribeLifecyclePoliciesRequest} req
     * @param {function(string, DescribeLifecyclePoliciesResponse):void} cb
     * @public
     */
    DescribeLifecyclePolicies(req, cb) {
        let resp = new DescribeLifecyclePoliciesResponse();
        this.request("DescribeLifecyclePolicies", req, resp, cb);
    }

    /**
     * Configure the directory list associated with the lifecycle policy.
     * @param {ApplyPathLifecyclePolicyRequest} req
     * @param {function(string, ApplyPathLifecyclePolicyResponse):void} cb
     * @public
     */
    ApplyPathLifecyclePolicy(req, cb) {
        let resp = new ApplyPathLifecyclePolicyResponse();
        this.request("ApplyPathLifecyclePolicy", req, resp, cb);
    }

    /**
     * This API is used to set the file system scaling policy. It supports only the turbo file system.
     * @param {ModifyFileSystemAutoScaleUpRuleRequest} req
     * @param {function(string, ModifyFileSystemAutoScaleUpRuleResponse):void} cb
     * @public
     */
    ModifyFileSystemAutoScaleUpRule(req, cb) {
        let resp = new ModifyFileSystemAutoScaleUpRuleResponse();
        this.request("ModifyFileSystemAutoScaleUpRule", req, resp, cb);
    }

    /**
     * Modify data flow parameters.
     * @param {ModifyDataFlowRequest} req
     * @param {function(string, ModifyDataFlowResponse):void} cb
     * @public
     */
    ModifyDataFlow(req, cb) {
        let resp = new ModifyDataFlowResponse();
        this.request("ModifyDataFlow", req, resp, cb);
    }

    /**
     * This API is used to query file systems.
     * @param {DescribeCfsFileSystemsRequest} req
     * @param {function(string, DescribeCfsFileSystemsResponse):void} cb
     * @public
     */
    DescribeCfsFileSystems(req, cb) {
        let resp = new DescribeCfsFileSystemsResponse();
        this.request("DescribeCfsFileSystems", req, resp, cb);
    }

    /**
     * This API is used to query the list of snapshots of a file system.
     * @param {DescribeCfsSnapshotsRequest} req
     * @param {function(string, DescribeCfsSnapshotsResponse):void} cb
     * @public
     */
    DescribeCfsSnapshots(req, cb) {
        let resp = new DescribeCfsSnapshotsResponse();
        this.request("DescribeCfsSnapshots", req, resp, cb);
    }

    /**
     * This API is used to bind one or multiple file systems to a snapshot policy. A file system can be bound to only one policy.
     * @param {BindAutoSnapshotPolicyRequest} req
     * @param {function(string, BindAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    BindAutoSnapshotPolicy(req, cb) {
        let resp = new BindAutoSnapshotPolicyResponse();
        this.request("BindAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * Update a file storage lifecycle policy.
     * @param {ModifyLifecyclePolicyRequest} req
     * @param {function(string, ModifyLifecyclePolicyResponse):void} cb
     * @public
     */
    ModifyLifecyclePolicy(req, cb) {
        let resp = new ModifyLifecyclePolicyResponse();
        this.request("ModifyLifecyclePolicy", req, resp, cb);
    }

    /**
     * This API is used to delete a permission group rule.
     * @param {DeleteCfsRuleRequest} req
     * @param {function(string, DeleteCfsRuleResponse):void} cb
     * @public
     */
    DeleteCfsRule(req, cb) {
        let resp = new DeleteCfsRuleResponse();
        this.request("DeleteCfsRule", req, resp, cb);
    }

    /**
     * Delete a data flow.
     * @param {DeleteDataFlowRequest} req
     * @param {function(string, DeleteDataFlowResponse):void} cb
     * @public
     */
    DeleteDataFlow(req, cb) {
        let resp = new DeleteDataFlowResponse();
        this.request("DeleteDataFlow", req, resp, cb);
    }

    /**
     * This API is used to create a migration task.
     * @param {CreateMigrationTaskRequest} req
     * @param {function(string, CreateMigrationTaskResponse):void} cb
     * @public
     */
    CreateMigrationTask(req, cb) {
        let resp = new CreateMigrationTaskResponse();
        this.request("CreateMigrationTask", req, resp, cb);
    }

    /**
     * This API is used to create a scheduled snapshot policy.
     * @param {CreateAutoSnapshotPolicyRequest} req
     * @param {function(string, CreateAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    CreateAutoSnapshotPolicy(req, cb) {
        let resp = new CreateAutoSnapshotPolicyResponse();
        this.request("CreateAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * This API is used to create a permission group.
     * @param {CreateCfsPGroupRequest} req
     * @param {function(string, CreateCfsPGroupResponse):void} cb
     * @public
     */
    CreateCfsPGroup(req, cb) {
        let resp = new CreateCfsPGroupResponse();
        this.request("CreateCfsPGroup", req, resp, cb);
    }

    /**
     * This API is used to delete a scheduled snapshot policy.
     * @param {DeleteAutoSnapshotPolicyRequest} req
     * @param {function(string, DeleteAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    DeleteAutoSnapshotPolicy(req, cb) {
        let resp = new DeleteAutoSnapshotPolicyResponse();
        this.request("DeleteAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * This API is used to terminate a lifecycle task.
     * @param {StopLifecycleDataTaskRequest} req
     * @param {function(string, StopLifecycleDataTaskResponse):void} cb
     * @public
     */
    StopLifecycleDataTask(req, cb) {
        let resp = new StopLifecycleDataTaskResponse();
        this.request("StopLifecycleDataTask", req, resp, cb);
    }

    /**
     * This API is used to create a file system snapshot.
     * @param {CreateCfsSnapshotRequest} req
     * @param {function(string, CreateCfsSnapshotResponse):void} cb
     * @public
     */
    CreateCfsSnapshot(req, cb) {
        let resp = new CreateCfsSnapshotResponse();
        this.request("CreateCfsSnapshot", req, resp, cb);
    }

    /**
     * This API is used to update a scheduled snapshot policy.
     * @param {UpdateAutoSnapshotPolicyRequest} req
     * @param {function(string, UpdateAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    UpdateAutoSnapshotPolicy(req, cb) {
        let resp = new UpdateAutoSnapshotPolicyResponse();
        this.request("UpdateAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * File system directory operation API. Currently, only the Turbo series file system supports calling this API to perform directory operations. The Universal Series file system (including the enhanced version) does not support calling.
     * @param {DoDirectoryOperationRequest} req
     * @param {function(string, DoDirectoryOperationResponse):void} cb
     * @public
     */
    DoDirectoryOperation(req, cb) {
        let resp = new DoDirectoryOperationResponse();
        this.request("DoDirectoryOperation", req, resp, cb);
    }

    /**
     * This API is used to query the operation logs of a snapshot.
     * @param {DescribeSnapshotOperationLogsRequest} req
     * @param {function(string, DescribeSnapshotOperationLogsResponse):void} cb
     * @public
     */
    DescribeSnapshotOperationLogs(req, cb) {
        let resp = new DescribeSnapshotOperationLogsResponse();
        this.request("DescribeSnapshotOperationLogs", req, resp, cb);
    }

    /**
     * This API is used to update a file system name.
     * @param {UpdateCfsFileSystemNameRequest} req
     * @param {function(string, UpdateCfsFileSystemNameResponse):void} cb
     * @public
     */
    UpdateCfsFileSystemName(req, cb) {
        let resp = new UpdateCfsFileSystemNameResponse();
        this.request("UpdateCfsFileSystemName", req, resp, cb);
    }

    /**
     * This API is used to query data flow information.
     * @param {DescribeDataFlowRequest} req
     * @param {function(string, DescribeDataFlowResponse):void} cb
     * @public
     */
    DescribeDataFlow(req, cb) {
        let resp = new DescribeDataFlowResponse();
        this.request("DescribeDataFlow", req, resp, cb);
    }

    /**
     * This API is used to create a permission group rule.
     * @param {CreateCfsRuleRequest} req
     * @param {function(string, CreateCfsRuleResponse):void} cb
     * @public
     */
    CreateCfsRule(req, cb) {
        let resp = new CreateCfsRuleResponse();
        this.request("CreateCfsRule", req, resp, cb);
    }

    /**
     * This API is used to update a permission rule.
     * @param {UpdateCfsRuleRequest} req
     * @param {function(string, UpdateCfsRuleResponse):void} cb
     * @public
     */
    UpdateCfsRule(req, cb) {
        let resp = new UpdateCfsRuleResponse();
        this.request("UpdateCfsRule", req, resp, cb);
    }

    /**
     * This API is used to update the information of a permission group.
     * @param {UpdateCfsPGroupRequest} req
     * @param {function(string, UpdateCfsPGroupResponse):void} cb
     * @public
     */
    UpdateCfsPGroup(req, cb) {
        let resp = new UpdateCfsPGroupResponse();
        this.request("UpdateCfsPGroup", req, resp, cb);
    }


}
module.exports = CfsClient;
