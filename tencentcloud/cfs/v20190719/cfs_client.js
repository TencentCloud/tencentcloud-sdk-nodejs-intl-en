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
const CreateMigrationTaskRequest = models.CreateMigrationTaskRequest;
const ScaleUpFileSystemResponse = models.ScaleUpFileSystemResponse;
const SnapshotStatistics = models.SnapshotStatistics;
const DescribeCfsPGroupsResponse = models.DescribeCfsPGroupsResponse;
const DescribeMountTargetsResponse = models.DescribeMountTargetsResponse;
const DescribeSnapshotOperationLogsRequest = models.DescribeSnapshotOperationLogsRequest;
const MigrationTaskInfo = models.MigrationTaskInfo;
const FileSystemClient = models.FileSystemClient;
const DescribeCfsFileSystemsResponse = models.DescribeCfsFileSystemsResponse;
const CreateCfsFileSystemResponse = models.CreateCfsFileSystemResponse;
const FileSystemInfo = models.FileSystemInfo;
const BindAutoSnapshotPolicyRequest = models.BindAutoSnapshotPolicyRequest;
const ModifyFileSystemAutoScaleUpRuleRequest = models.ModifyFileSystemAutoScaleUpRuleRequest;
const ScaleUpFileSystemRequest = models.ScaleUpFileSystemRequest;
const CreateCfsPGroupRequest = models.CreateCfsPGroupRequest;
const DescribeMigrationTasksResponse = models.DescribeMigrationTasksResponse;
const DescribeAutoSnapshotPoliciesRequest = models.DescribeAutoSnapshotPoliciesRequest;
const DescribeAvailableZoneInfoRequest = models.DescribeAvailableZoneInfoRequest;
const DescribeMountTargetsRequest = models.DescribeMountTargetsRequest;
const BindAutoSnapshotPolicyResponse = models.BindAutoSnapshotPolicyResponse;
const StopMigrationTaskResponse = models.StopMigrationTaskResponse;
const SignUpCfsServiceResponse = models.SignUpCfsServiceResponse;
const AutoSnapshotPolicyInfo = models.AutoSnapshotPolicyInfo;
const DescribeCfsRulesRequest = models.DescribeCfsRulesRequest;
const UpdateCfsFileSystemNameRequest = models.UpdateCfsFileSystemNameRequest;
const DeleteCfsPGroupRequest = models.DeleteCfsPGroupRequest;
const UpdateCfsPGroupResponse = models.UpdateCfsPGroupResponse;
const DeleteAutoSnapshotPolicyRequest = models.DeleteAutoSnapshotPolicyRequest;
const DeleteCfsFileSystemResponse = models.DeleteCfsFileSystemResponse;
const UpdateCfsRuleRequest = models.UpdateCfsRuleRequest;
const DescribeAvailableZoneInfoResponse = models.DescribeAvailableZoneInfoResponse;
const DeleteCfsSnapshotResponse = models.DeleteCfsSnapshotResponse;
const DescribeCfsFileSystemClientsResponse = models.DescribeCfsFileSystemClientsResponse;
const DeleteMountTargetResponse = models.DeleteMountTargetResponse;
const CreateCfsSnapshotRequest = models.CreateCfsSnapshotRequest;
const DescribeBucketListRequest = models.DescribeBucketListRequest;
const DeleteCfsRuleRequest = models.DeleteCfsRuleRequest;
const UpdateCfsRuleResponse = models.UpdateCfsRuleResponse;
const DeleteMigrationTaskResponse = models.DeleteMigrationTaskResponse;
const DescribeSnapshotOperationLogsResponse = models.DescribeSnapshotOperationLogsResponse;
const UpdateCfsFileSystemPGroupResponse = models.UpdateCfsFileSystemPGroupResponse;
const DeleteCfsFileSystemRequest = models.DeleteCfsFileSystemRequest;
const CreateCfsPGroupResponse = models.CreateCfsPGroupResponse;
const DescribeCfsServiceStatusRequest = models.DescribeCfsServiceStatusRequest;
const DeleteMigrationTaskRequest = models.DeleteMigrationTaskRequest;
const PGroup = models.PGroup;
const CreateAutoSnapshotPolicyResponse = models.CreateAutoSnapshotPolicyResponse;
const ModifyFileSystemAutoScaleUpRuleResponse = models.ModifyFileSystemAutoScaleUpRuleResponse;
const AvailableType = models.AvailableType;
const CreateCfsSnapshotResponse = models.CreateCfsSnapshotResponse;
const DeleteMountTargetRequest = models.DeleteMountTargetRequest;
const CreateCfsRuleRequest = models.CreateCfsRuleRequest;
const BucketInfo = models.BucketInfo;
const SnapshotOperateLog = models.SnapshotOperateLog;
const DescribeBucketListResponse = models.DescribeBucketListResponse;
const UpdateCfsFileSystemNameResponse = models.UpdateCfsFileSystemNameResponse;
const DescribeCfsSnapshotOverviewResponse = models.DescribeCfsSnapshotOverviewResponse;
const DeleteCfsSnapshotRequest = models.DeleteCfsSnapshotRequest;
const DescribeCfsFileSystemClientsRequest = models.DescribeCfsFileSystemClientsRequest;
const AvailableProtoStatus = models.AvailableProtoStatus;
const DescribeCfsFileSystemsRequest = models.DescribeCfsFileSystemsRequest;
const AvailableRegion = models.AvailableRegion;
const CreateCfsFileSystemRequest = models.CreateCfsFileSystemRequest;
const AvailableZone = models.AvailableZone;
const DescribeMigrationTasksRequest = models.DescribeMigrationTasksRequest;
const Filter = models.Filter;
const UnbindAutoSnapshotPolicyRequest = models.UnbindAutoSnapshotPolicyRequest;
const UnbindAutoSnapshotPolicyResponse = models.UnbindAutoSnapshotPolicyResponse;
const DescribeCfsServiceStatusResponse = models.DescribeCfsServiceStatusResponse;
const PGroupRuleInfo = models.PGroupRuleInfo;
const DescribeCfsSnapshotsRequest = models.DescribeCfsSnapshotsRequest;
const UpdateCfsFileSystemSizeLimitResponse = models.UpdateCfsFileSystemSizeLimitResponse;
const UpdateAutoSnapshotPolicyRequest = models.UpdateAutoSnapshotPolicyRequest;
const UpdateCfsFileSystemSizeLimitRequest = models.UpdateCfsFileSystemSizeLimitRequest;
const DescribeCfsRulesResponse = models.DescribeCfsRulesResponse;
const SignUpCfsServiceRequest = models.SignUpCfsServiceRequest;
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
const TagInfo = models.TagInfo;
const DescribeCfsPGroupsRequest = models.DescribeCfsPGroupsRequest;
const DeleteCfsPGroupResponse = models.DeleteCfsPGroupResponse;
const UpdateCfsSnapshotAttributeRequest = models.UpdateCfsSnapshotAttributeRequest;
const TieringDetailInfo = models.TieringDetailInfo;
const PGroupInfo = models.PGroupInfo;
const CreateCfsRuleResponse = models.CreateCfsRuleResponse;
const DescribeCfsSnapshotsResponse = models.DescribeCfsSnapshotsResponse;
const StopMigrationTaskRequest = models.StopMigrationTaskRequest;
const DescribeAutoSnapshotPoliciesResponse = models.DescribeAutoSnapshotPoliciesResponse;
const DescribeCfsSnapshotOverviewRequest = models.DescribeCfsSnapshotOverviewRequest;
const CreateAutoSnapshotPolicyRequest = models.CreateAutoSnapshotPolicyRequest;


/**
 * cfs client
 * @class
 */
class CfsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cfs.tencentcloudapi.com", "2019-07-19", credential, region, profile);
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
     * This API is used to delete a permission group.
     * @param {DeleteCfsPGroupRequest} req
     * @param {function(string, DeleteCfsPGroupResponse):void} cb
     * @public
     */
    DeleteCfsPGroup(req, cb) {
        let resp = new DeleteCfsPGroupResponse();
        this.request("DeleteCfsPGroup", req, resp, cb);
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
     * This API is used to stop a migration task.
To use this API, submit a ticket for us to add you to the allowlist.
     * @param {StopMigrationTaskRequest} req
     * @param {function(string, StopMigrationTaskResponse):void} cb
     * @public
     */
    StopMigrationTask(req, cb) {
        let resp = new StopMigrationTaskResponse();
        this.request("StopMigrationTask", req, resp, cb);
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
     * This API is used to delete a migration task.
To use this API, submit a ticket for us to add you to the allowlist.
     * @param {DeleteMigrationTaskRequest} req
     * @param {function(string, DeleteMigrationTaskResponse):void} cb
     * @public
     */
    DeleteMigrationTask(req, cb) {
        let resp = new DeleteMigrationTaskResponse();
        this.request("DeleteMigrationTask", req, resp, cb);
    }

    /**
     * This API is used to scale up a Turbo file system.
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
     * This API is used to modify the scaling policy of a file system.
     * @param {ModifyFileSystemAutoScaleUpRuleRequest} req
     * @param {function(string, ModifyFileSystemAutoScaleUpRuleResponse):void} cb
     * @public
     */
    ModifyFileSystemAutoScaleUpRule(req, cb) {
        let resp = new ModifyFileSystemAutoScaleUpRuleResponse();
        this.request("ModifyFileSystemAutoScaleUpRule", req, resp, cb);
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
     * This API is used to get the list of data source buckets.
To use this API, submit a ticket for us to add you to the allowlist.
     * @param {DescribeBucketListRequest} req
     * @param {function(string, DescribeBucketListResponse):void} cb
     * @public
     */
    DescribeBucketList(req, cb) {
        let resp = new DescribeBucketListResponse();
        this.request("DescribeBucketList", req, resp, cb);
    }

    /**
     * This API is used to create a migration task.
To use this API, submit a ticket for us to add you to the allowlist.
     * @param {CreateMigrationTaskRequest} req
     * @param {function(string, CreateMigrationTaskResponse):void} cb
     * @public
     */
    CreateMigrationTask(req, cb) {
        let resp = new CreateMigrationTaskResponse();
        this.request("CreateMigrationTask", req, resp, cb);
    }

    /**
     * This API is used to delete a mount target.
     * @param {DeleteMountTargetRequest} req
     * @param {function(string, DeleteMountTargetResponse):void} cb
     * @public
     */
    DeleteMountTarget(req, cb) {
        let resp = new DeleteMountTargetResponse();
        this.request("DeleteMountTarget", req, resp, cb);
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
