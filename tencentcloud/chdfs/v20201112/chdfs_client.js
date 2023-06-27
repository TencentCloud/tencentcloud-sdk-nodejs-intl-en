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
const CreateFileSystemResponse = models.CreateFileSystemResponse;
const ModifyResourceTagsRequest = models.ModifyResourceTagsRequest;
const DescribeAccessRulesRequest = models.DescribeAccessRulesRequest;
const AccessRule = models.AccessRule;
const DescribeFileSystemResponse = models.DescribeFileSystemResponse;
const AccessGroup = models.AccessGroup;
const ModifyFileSystemResponse = models.ModifyFileSystemResponse;
const ModifyFileSystemRequest = models.ModifyFileSystemRequest;
const DescribeLifeCycleRulesRequest = models.DescribeLifeCycleRulesRequest;
const Summary = models.Summary;
const AssociateAccessGroupsRequest = models.AssociateAccessGroupsRequest;
const ModifyAccessGroupRequest = models.ModifyAccessGroupRequest;
const DescribeFileSystemsResponse = models.DescribeFileSystemsResponse;
const DescribeFileSystemRequest = models.DescribeFileSystemRequest;
const CreateMountPointRequest = models.CreateMountPointRequest;
const DeleteAccessGroupRequest = models.DeleteAccessGroupRequest;
const ModifyLifeCycleRulesRequest = models.ModifyLifeCycleRulesRequest;
const CreateRestoreTasksResponse = models.CreateRestoreTasksResponse;
const DeleteFileSystemRequest = models.DeleteFileSystemRequest;
const DescribeMountPointsRequest = models.DescribeMountPointsRequest;
const DescribeMountPointRequest = models.DescribeMountPointRequest;
const DescribeAccessGroupsRequest = models.DescribeAccessGroupsRequest;
const DeleteAccessGroupResponse = models.DeleteAccessGroupResponse;
const ModifyLifeCycleRulesResponse = models.ModifyLifeCycleRulesResponse;
const DeleteMountPointResponse = models.DeleteMountPointResponse;
const CreateMountPointResponse = models.CreateMountPointResponse;
const CreateFileSystemRequest = models.CreateFileSystemRequest;
const DisassociateAccessGroupsRequest = models.DisassociateAccessGroupsRequest;
const DescribeResourceTagsResponse = models.DescribeResourceTagsResponse;
const DescribeAccessGroupsResponse = models.DescribeAccessGroupsResponse;
const DeleteMountPointRequest = models.DeleteMountPointRequest;
const DeleteFileSystemResponse = models.DeleteFileSystemResponse;
const CreateLifeCycleRulesRequest = models.CreateLifeCycleRulesRequest;
const CreateAccessRulesResponse = models.CreateAccessRulesResponse;
const DeleteLifeCycleRulesRequest = models.DeleteLifeCycleRulesRequest;
const FileSystem = models.FileSystem;
const RestoreTask = models.RestoreTask;
const ModifyMountPointRequest = models.ModifyMountPointRequest;
const DescribeAccessRulesResponse = models.DescribeAccessRulesResponse;
const DeleteLifeCycleRulesResponse = models.DeleteLifeCycleRulesResponse;
const CreateRestoreTasksRequest = models.CreateRestoreTasksRequest;
const Transition = models.Transition;
const DescribeRestoreTasksResponse = models.DescribeRestoreTasksResponse;
const DescribeLifeCycleRulesResponse = models.DescribeLifeCycleRulesResponse;
const CreateAccessGroupResponse = models.CreateAccessGroupResponse;
const DisassociateAccessGroupsResponse = models.DisassociateAccessGroupsResponse;
const DeleteAccessRulesRequest = models.DeleteAccessRulesRequest;
const DeleteAccessRulesResponse = models.DeleteAccessRulesResponse;
const DescribeFileSystemsRequest = models.DescribeFileSystemsRequest;
const DescribeResourceTagsRequest = models.DescribeResourceTagsRequest;
const ModifyResourceTagsResponse = models.ModifyResourceTagsResponse;
const LifeCycleRule = models.LifeCycleRule;
const CreateAccessRulesRequest = models.CreateAccessRulesRequest;
const DescribeAccessGroupResponse = models.DescribeAccessGroupResponse;
const MountPoint = models.MountPoint;
const DescribeMountPointsResponse = models.DescribeMountPointsResponse;
const DescribeRestoreTasksRequest = models.DescribeRestoreTasksRequest;
const DescribeAccessGroupRequest = models.DescribeAccessGroupRequest;
const AssociateAccessGroupsResponse = models.AssociateAccessGroupsResponse;
const ModifyAccessRulesResponse = models.ModifyAccessRulesResponse;
const CreateLifeCycleRulesResponse = models.CreateLifeCycleRulesResponse;
const ModifyAccessGroupResponse = models.ModifyAccessGroupResponse;
const Tag = models.Tag;
const ModifyMountPointResponse = models.ModifyMountPointResponse;
const ModifyAccessRulesRequest = models.ModifyAccessRulesRequest;
const CreateAccessGroupRequest = models.CreateAccessGroupRequest;
const DescribeMountPointResponse = models.DescribeMountPointResponse;


/**
 * chdfs client
 * @class
 */
class ChdfsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("chdfs.tencentcloudapi.com", "2020-11-12", credential, region, profile);
    }
    
    /**
     * This API is used to batch create restoration tasks. You don't need to enter the restoration task IDs, status, and creation time.
     * @param {CreateRestoreTasksRequest} req
     * @param {function(string, CreateRestoreTasksResponse):void} cb
     * @public
     */
    CreateRestoreTasks(req, cb) {
        let resp = new CreateRestoreTasksResponse();
        this.request("CreateRestoreTasks", req, resp, cb);
    }

    /**
     * This API is used to batch create lifecycle rules. You don't need to enter the lifecycle rule IDs and creation time.
     * @param {CreateLifeCycleRulesRequest} req
     * @param {function(string, CreateLifeCycleRulesResponse):void} cb
     * @public
     */
    CreateLifeCycleRules(req, cb) {
        let resp = new CreateLifeCycleRulesResponse();
        this.request("CreateLifeCycleRules", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a mount point.
     * @param {ModifyMountPointRequest} req
     * @param {function(string, ModifyMountPointResponse):void} cb
     * @public
     */
    ModifyMountPoint(req, cb) {
        let resp = new ModifyMountPointResponse();
        this.request("ModifyMountPoint", req, resp, cb);
    }

    /**
     * This API is used to batch modify the attributes of permission rules, such as address, access mode, and priority. You must specify the permission rule IDs.
     * @param {ModifyAccessRulesRequest} req
     * @param {function(string, ModifyAccessRulesResponse):void} cb
     * @public
     */
    ModifyAccessRules(req, cb) {
        let resp = new ModifyAccessRulesResponse();
        this.request("ModifyAccessRules", req, resp, cb);
    }

    /**
     * This API is used to view the list of permission rules by permission group ID.
     * @param {DescribeAccessRulesRequest} req
     * @param {function(string, DescribeAccessRulesResponse):void} cb
     * @public
     */
    DescribeAccessRules(req, cb) {
        let resp = new DescribeAccessRulesResponse();
        this.request("DescribeAccessRules", req, resp, cb);
    }

    /**
     * This API is used to delete a mount point.
     * @param {DeleteMountPointRequest} req
     * @param {function(string, DeleteMountPointResponse):void} cb
     * @public
     */
    DeleteMountPoint(req, cb) {
        let resp = new DeleteMountPointResponse();
        this.request("DeleteMountPoint", req, resp, cb);
    }

    /**
     * This API is used to view the details of a mount point.
     * @param {DescribeMountPointRequest} req
     * @param {function(string, DescribeMountPointResponse):void} cb
     * @public
     */
    DescribeMountPoint(req, cb) {
        let resp = new DescribeMountPointResponse();
        this.request("DescribeMountPoint", req, resp, cb);
    }

    /**
     * This API is used to batch delete permission rules.
     * @param {DeleteAccessRulesRequest} req
     * @param {function(string, DeleteAccessRulesResponse):void} cb
     * @public
     */
    DeleteAccessRules(req, cb) {
        let resp = new DeleteAccessRulesResponse();
        this.request("DeleteAccessRules", req, resp, cb);
    }

    /**
     * This API is used to view the list of resource tags by file system ID.
     * @param {DescribeResourceTagsRequest} req
     * @param {function(string, DescribeResourceTagsResponse):void} cb
     * @public
     */
    DescribeResourceTags(req, cb) {
        let resp = new DescribeResourceTagsResponse();
        this.request("DescribeResourceTags", req, resp, cb);
    }

    /**
     * This API is used to create a mount point for a successfully created file system.
     * @param {CreateMountPointRequest} req
     * @param {function(string, CreateMountPointResponse):void} cb
     * @public
     */
    CreateMountPoint(req, cb) {
        let resp = new CreateMountPointResponse();
        this.request("CreateMountPoint", req, resp, cb);
    }

    /**
     * This API is used to batch modify the attributes of lifecycle rules, such as name, path, transition list, and status. You must specify the lifecycle rule IDs.
     * @param {ModifyLifeCycleRulesRequest} req
     * @param {function(string, ModifyLifeCycleRulesResponse):void} cb
     * @public
     */
    ModifyLifeCycleRules(req, cb) {
        let resp = new ModifyLifeCycleRulesResponse();
        this.request("ModifyLifeCycleRules", req, resp, cb);
    }

    /**
     * This API is used to view the list of permission groups.
     * @param {DescribeAccessGroupsRequest} req
     * @param {function(string, DescribeAccessGroupsResponse):void} cb
     * @public
     */
    DescribeAccessGroups(req, cb) {
        let resp = new DescribeAccessGroupsResponse();
        this.request("DescribeAccessGroups", req, resp, cb);
    }

    /**
     * This API is used to unbind multiple permission groups from a mount point.
     * @param {DisassociateAccessGroupsRequest} req
     * @param {function(string, DisassociateAccessGroupsResponse):void} cb
     * @public
     */
    DisassociateAccessGroups(req, cb) {
        let resp = new DisassociateAccessGroupsResponse();
        this.request("DisassociateAccessGroups", req, resp, cb);
    }

    /**
     * This API is used to delete a file system. Non-empty file systems cannot be deleted.
     * @param {DeleteFileSystemRequest} req
     * @param {function(string, DeleteFileSystemResponse):void} cb
     * @public
     */
    DeleteFileSystem(req, cb) {
        let resp = new DeleteFileSystemResponse();
        this.request("DeleteFileSystem", req, resp, cb);
    }

    /**
     * This API is used to view the details of a file system.
     * @param {DescribeFileSystemRequest} req
     * @param {function(string, DescribeFileSystemResponse):void} cb
     * @public
     */
    DescribeFileSystem(req, cb) {
        let resp = new DescribeFileSystemResponse();
        this.request("DescribeFileSystem", req, resp, cb);
    }

    /**
     * This API is used to create a file system (asynchronously).
     * @param {CreateFileSystemRequest} req
     * @param {function(string, CreateFileSystemResponse):void} cb
     * @public
     */
    CreateFileSystem(req, cb) {
        let resp = new CreateFileSystemResponse();
        this.request("CreateFileSystem", req, resp, cb);
    }

    /**
     * This API is used to view the details of a permission group.
     * @param {DescribeAccessGroupRequest} req
     * @param {function(string, DescribeAccessGroupResponse):void} cb
     * @public
     */
    DescribeAccessGroup(req, cb) {
        let resp = new DescribeAccessGroupResponse();
        this.request("DescribeAccessGroup", req, resp, cb);
    }

    /**
     * This API is used to batch delete lifecycle rules.
     * @param {DeleteLifeCycleRulesRequest} req
     * @param {function(string, DeleteLifeCycleRulesResponse):void} cb
     * @public
     */
    DeleteLifeCycleRules(req, cb) {
        let resp = new DeleteLifeCycleRulesResponse();
        this.request("DeleteLifeCycleRules", req, resp, cb);
    }

    /**
     * This API is used to batch create permission rules. You don't need to enter the permission rule IDs and creation time.
     * @param {CreateAccessRulesRequest} req
     * @param {function(string, CreateAccessRulesResponse):void} cb
     * @public
     */
    CreateAccessRules(req, cb) {
        let resp = new CreateAccessRulesResponse();
        this.request("CreateAccessRules", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a successfully created file system.
     * @param {ModifyFileSystemRequest} req
     * @param {function(string, ModifyFileSystemResponse):void} cb
     * @public
     */
    ModifyFileSystem(req, cb) {
        let resp = new ModifyFileSystemResponse();
        this.request("ModifyFileSystem", req, resp, cb);
    }

    /**
     * This API is used to bind multiple permission groups to a mount point.
     * @param {AssociateAccessGroupsRequest} req
     * @param {function(string, AssociateAccessGroupsResponse):void} cb
     * @public
     */
    AssociateAccessGroups(req, cb) {
        let resp = new AssociateAccessGroupsResponse();
        this.request("AssociateAccessGroups", req, resp, cb);
    }

    /**
     * This API is used to view the list of file systems.
     * @param {DescribeFileSystemsRequest} req
     * @param {function(string, DescribeFileSystemsResponse):void} cb
     * @public
     */
    DescribeFileSystems(req, cb) {
        let resp = new DescribeFileSystemsResponse();
        this.request("DescribeFileSystems", req, resp, cb);
    }

    /**
     * This API is used to view the list of mount points.
     * @param {DescribeMountPointsRequest} req
     * @param {function(string, DescribeMountPointsResponse):void} cb
     * @public
     */
    DescribeMountPoints(req, cb) {
        let resp = new DescribeMountPointsResponse();
        this.request("DescribeMountPoints", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a permission group.
     * @param {ModifyAccessGroupRequest} req
     * @param {function(string, ModifyAccessGroupResponse):void} cb
     * @public
     */
    ModifyAccessGroup(req, cb) {
        let resp = new ModifyAccessGroupResponse();
        this.request("ModifyAccessGroup", req, resp, cb);
    }

    /**
     * This API is used to view the list of restoration tasks by file system ID.
     * @param {DescribeRestoreTasksRequest} req
     * @param {function(string, DescribeRestoreTasksResponse):void} cb
     * @public
     */
    DescribeRestoreTasks(req, cb) {
        let resp = new DescribeRestoreTasksResponse();
        this.request("DescribeRestoreTasks", req, resp, cb);
    }

    /**
     * This API is used to modify the list of resource tags by overwriting them all.
     * @param {ModifyResourceTagsRequest} req
     * @param {function(string, ModifyResourceTagsResponse):void} cb
     * @public
     */
    ModifyResourceTags(req, cb) {
        let resp = new ModifyResourceTagsResponse();
        this.request("ModifyResourceTags", req, resp, cb);
    }

    /**
     * This API is used to view the list of lifecycle rules by file system ID.
     * @param {DescribeLifeCycleRulesRequest} req
     * @param {function(string, DescribeLifeCycleRulesResponse):void} cb
     * @public
     */
    DescribeLifeCycleRules(req, cb) {
        let resp = new DescribeLifeCycleRulesResponse();
        this.request("DescribeLifeCycleRules", req, resp, cb);
    }

    /**
     * This API is used to delete a permission group.
     * @param {DeleteAccessGroupRequest} req
     * @param {function(string, DeleteAccessGroupResponse):void} cb
     * @public
     */
    DeleteAccessGroup(req, cb) {
        let resp = new DeleteAccessGroupResponse();
        this.request("DeleteAccessGroup", req, resp, cb);
    }

    /**
     * This API is used to create a permission group.
     * @param {CreateAccessGroupRequest} req
     * @param {function(string, CreateAccessGroupResponse):void} cb
     * @public
     */
    CreateAccessGroup(req, cb) {
        let resp = new CreateAccessGroupResponse();
        this.request("CreateAccessGroup", req, resp, cb);
    }


}
module.exports = ChdfsClient;
