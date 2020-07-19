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
const DeleteCfsFileSystemRequest = models.DeleteCfsFileSystemRequest;
const DeleteCfsFileSystemResponse = models.DeleteCfsFileSystemResponse;
const UpdateCfsRuleRequest = models.UpdateCfsRuleRequest;
const DeleteMountTargetRequest = models.DeleteMountTargetRequest;
const CreateCfsRuleRequest = models.CreateCfsRuleRequest;
const PGroup = models.PGroup;
const DescribeAvailableZoneInfoResponse = models.DescribeAvailableZoneInfoResponse;
const UpdateCfsFileSystemNameResponse = models.UpdateCfsFileSystemNameResponse;
const UpdateCfsFileSystemNameRequest = models.UpdateCfsFileSystemNameRequest;
const DescribeCfsPGroupsResponse = models.DescribeCfsPGroupsResponse;
const UpdateCfsPGroupRequest = models.UpdateCfsPGroupRequest;
const DeleteMountTargetResponse = models.DeleteMountTargetResponse;
const DescribeMountTargetsResponse = models.DescribeMountTargetsResponse;
const DeleteCfsRuleResponse = models.DeleteCfsRuleResponse;
const DeleteCfsRuleRequest = models.DeleteCfsRuleRequest;
const MountInfo = models.MountInfo;
const UpdateCfsRuleResponse = models.UpdateCfsRuleResponse;
const DescribeCfsFileSystemsResponse = models.DescribeCfsFileSystemsResponse;
const CreateCfsFileSystemResponse = models.CreateCfsFileSystemResponse;
const FileSystemInfo = models.FileSystemInfo;
const TagInfo = models.TagInfo;
const DescribeCfsPGroupsRequest = models.DescribeCfsPGroupsRequest;
const AvailableZone = models.AvailableZone;
const CreateCfsPGroupRequest = models.CreateCfsPGroupRequest;
const DeleteCfsPGroupResponse = models.DeleteCfsPGroupResponse;
const UpdateCfsFileSystemSizeLimitResponse = models.UpdateCfsFileSystemSizeLimitResponse;
const DescribeAvailableZoneInfoRequest = models.DescribeAvailableZoneInfoRequest;
const AvailableRegion = models.AvailableRegion;
const CreateCfsFileSystemRequest = models.CreateCfsFileSystemRequest;
const DescribeMountTargetsRequest = models.DescribeMountTargetsRequest;
const CreateCfsPGroupResponse = models.CreateCfsPGroupResponse;
const SignUpCfsServiceRequest = models.SignUpCfsServiceRequest;
const DescribeCfsServiceStatusRequest = models.DescribeCfsServiceStatusRequest;
const PGroupInfo = models.PGroupInfo;
const SignUpCfsServiceResponse = models.SignUpCfsServiceResponse;
const UpdateCfsFileSystemPGroupRequest = models.UpdateCfsFileSystemPGroupRequest;
const DescribeCfsServiceStatusResponse = models.DescribeCfsServiceStatusResponse;
const CreateCfsRuleResponse = models.CreateCfsRuleResponse;
const AvailableProtoStatus = models.AvailableProtoStatus;
const DescribeCfsRulesRequest = models.DescribeCfsRulesRequest;
const PGroupRuleInfo = models.PGroupRuleInfo;
const DeleteCfsPGroupRequest = models.DeleteCfsPGroupRequest;
const AvailableType = models.AvailableType;
const UpdateCfsFileSystemSizeLimitRequest = models.UpdateCfsFileSystemSizeLimitRequest;
const DescribeCfsFileSystemsRequest = models.DescribeCfsFileSystemsRequest;
const UpdateCfsPGroupResponse = models.UpdateCfsPGroupResponse;
const DescribeCfsRulesResponse = models.DescribeCfsRulesResponse;
const UpdateCfsFileSystemPGroupResponse = models.UpdateCfsFileSystemPGroupResponse;


/**
 * cfs client
 * @class
 */
class CfsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cfs.tencentcloudapi.com", "2019-07-19", credential, region, profile);
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
     * This API is used to update the information of a permission group.
     * @param {UpdateCfsPGroupRequest} req
     * @param {function(string, UpdateCfsPGroupResponse):void} cb
     * @public
     */
    UpdateCfsPGroup(req, cb) {
        let resp = new UpdateCfsPGroupResponse();
        this.request("UpdateCfsPGroup", req, resp, cb);
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


}
module.exports = CfsClient;
