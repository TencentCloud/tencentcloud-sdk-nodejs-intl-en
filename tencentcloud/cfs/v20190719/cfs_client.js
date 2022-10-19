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
const DeleteCfsFileSystemResponse = models.DeleteCfsFileSystemResponse;
const SnapshotInfo = models.SnapshotInfo;
const DescribeCfsFileSystemsRequest = models.DescribeCfsFileSystemsRequest;
const DeleteMountTargetRequest = models.DeleteMountTargetRequest;
const CreateCfsRuleRequest = models.CreateCfsRuleRequest;
const FileSystemInfo = models.FileSystemInfo;
const PGroup = models.PGroup;
const DescribeAvailableZoneInfoResponse = models.DescribeAvailableZoneInfoResponse;
const SnapshotStatistics = models.SnapshotStatistics;
const UpdateCfsFileSystemNameRequest = models.UpdateCfsFileSystemNameRequest;
const DeleteCfsSnapshotResponse = models.DeleteCfsSnapshotResponse;
const DescribeCfsPGroupsResponse = models.DescribeCfsPGroupsResponse;
const DescribeCfsFileSystemClientsResponse = models.DescribeCfsFileSystemClientsResponse;
const SnapshotOperateLog = models.SnapshotOperateLog;
const DescribeSnapshotOperationLogsResponse = models.DescribeSnapshotOperationLogsResponse;
const UpdateCfsRuleRequest = models.UpdateCfsRuleRequest;
const DeleteAutoSnapshotPolicyResponse = models.DeleteAutoSnapshotPolicyResponse;
const CreateCfsSnapshotRequest = models.CreateCfsSnapshotRequest;
const DescribeSnapshotOperationLogsRequest = models.DescribeSnapshotOperationLogsRequest;
const DeleteCfsRuleResponse = models.DeleteCfsRuleResponse;
const DescribeCfsSnapshotOverviewResponse = models.DescribeCfsSnapshotOverviewResponse;
const DeleteCfsRuleRequest = models.DeleteCfsRuleRequest;
const DeleteMountTargetResponse = models.DeleteMountTargetResponse;
const UpdateCfsPGroupRequest = models.UpdateCfsPGroupRequest;
const MountInfo = models.MountInfo;
const UpdateCfsRuleResponse = models.UpdateCfsRuleResponse;
const FileSystemClient = models.FileSystemClient;
const DescribeCfsFileSystemsResponse = models.DescribeCfsFileSystemsResponse;
const DescribeAutoSnapshotPoliciesResponse = models.DescribeAutoSnapshotPoliciesResponse;
const CreateCfsFileSystemResponse = models.CreateCfsFileSystemResponse;
const DescribeMountTargetsResponse = models.DescribeMountTargetsResponse;
const BindAutoSnapshotPolicyRequest = models.BindAutoSnapshotPolicyRequest;
const DescribeCfsFileSystemClientsRequest = models.DescribeCfsFileSystemClientsRequest;
const DeleteCfsSnapshotRequest = models.DeleteCfsSnapshotRequest;
const DescribeCfsPGroupsRequest = models.DescribeCfsPGroupsRequest;
const AvailableZone = models.AvailableZone;
const CreateCfsPGroupRequest = models.CreateCfsPGroupRequest;
const DeleteCfsPGroupResponse = models.DeleteCfsPGroupResponse;
const DescribeCfsSnapshotsResponse = models.DescribeCfsSnapshotsResponse;
const DescribeAutoSnapshotPoliciesRequest = models.DescribeAutoSnapshotPoliciesRequest;
const DeleteCfsFileSystemRequest = models.DeleteCfsFileSystemRequest;
const AvailableRegion = models.AvailableRegion;
const UpdateCfsSnapshotAttributeRequest = models.UpdateCfsSnapshotAttributeRequest;
const CreateCfsFileSystemRequest = models.CreateCfsFileSystemRequest;
const DescribeMountTargetsRequest = models.DescribeMountTargetsRequest;
const CreateCfsPGroupResponse = models.CreateCfsPGroupResponse;
const UpdateCfsFileSystemPGroupRequest = models.UpdateCfsFileSystemPGroupRequest;
const PGroupRuleInfo = models.PGroupRuleInfo;
const UpdateCfsFileSystemNameResponse = models.UpdateCfsFileSystemNameResponse;
const DescribeCfsServiceStatusRequest = models.DescribeCfsServiceStatusRequest;
const UpdateCfsSnapshotAttributeResponse = models.UpdateCfsSnapshotAttributeResponse;
const FileSystemByPolicy = models.FileSystemByPolicy;
const PGroupInfo = models.PGroupInfo;
const Filter = models.Filter;
const UnbindAutoSnapshotPolicyRequest = models.UnbindAutoSnapshotPolicyRequest;
const SignUpCfsServiceResponse = models.SignUpCfsServiceResponse;
const AutoSnapshotPolicyInfo = models.AutoSnapshotPolicyInfo;
const DescribeCfsServiceStatusResponse = models.DescribeCfsServiceStatusResponse;
const CreateCfsRuleResponse = models.CreateCfsRuleResponse;
const CreateAutoSnapshotPolicyResponse = models.CreateAutoSnapshotPolicyResponse;
const UpdateCfsFileSystemPGroupResponse = models.UpdateCfsFileSystemPGroupResponse;
const TagInfo = models.TagInfo;
const AvailableProtoStatus = models.AvailableProtoStatus;
const DescribeCfsRulesRequest = models.DescribeCfsRulesRequest;
const BindAutoSnapshotPolicyResponse = models.BindAutoSnapshotPolicyResponse;
const DescribeCfsSnapshotsRequest = models.DescribeCfsSnapshotsRequest;
const UpdateCfsFileSystemSizeLimitResponse = models.UpdateCfsFileSystemSizeLimitResponse;
const DeleteCfsPGroupRequest = models.DeleteCfsPGroupRequest;
const UpdateAutoSnapshotPolicyRequest = models.UpdateAutoSnapshotPolicyRequest;
const DescribeCfsSnapshotOverviewRequest = models.DescribeCfsSnapshotOverviewRequest;
const AvailableType = models.AvailableType;
const UnbindAutoSnapshotPolicyResponse = models.UnbindAutoSnapshotPolicyResponse;
const UpdateCfsFileSystemSizeLimitRequest = models.UpdateCfsFileSystemSizeLimitRequest;
const DescribeAvailableZoneInfoRequest = models.DescribeAvailableZoneInfoRequest;
const UpdateCfsPGroupResponse = models.UpdateCfsPGroupResponse;
const DescribeCfsRulesResponse = models.DescribeCfsRulesResponse;
const SignUpCfsServiceRequest = models.SignUpCfsServiceRequest;
const DeleteAutoSnapshotPolicyRequest = models.DeleteAutoSnapshotPolicyRequest;
const CreateAutoSnapshotPolicyRequest = models.CreateAutoSnapshotPolicyRequest;
const UpdateAutoSnapshotPolicyResponse = models.UpdateAutoSnapshotPolicyResponse;
const CreateCfsSnapshotResponse = models.CreateCfsSnapshotResponse;


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
