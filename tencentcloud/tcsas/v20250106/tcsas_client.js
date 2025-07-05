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
const CreatePresetKeyResponse = models.CreatePresetKeyResponse;
const DescribeTeamMemberListRequest = models.DescribeTeamMemberListRequest;
const DescribeMNPAllStageVersionsRequest = models.DescribeMNPAllStageVersionsRequest;
const ModifyApplicationRequest = models.ModifyApplicationRequest;
const DeleteUserRequest = models.DeleteUserRequest;
const DescribeMNPCategoryResponse = models.DescribeMNPCategoryResponse;
const CreateApplicationSensitiveAPIReq = models.CreateApplicationSensitiveAPIReq;
const CreateMNPApprovalRequest = models.CreateMNPApprovalRequest;
const RemoveMNPRequest = models.RemoveMNPRequest;
const DescribeMNPPreviewResponse = models.DescribeMNPPreviewResponse;
const DescribeMNPListResp = models.DescribeMNPListResp;
const DescribeMNPPreviewResp = models.DescribeMNPPreviewResp;
const DescribeMNPVersionResponse = models.DescribeMNPVersionResponse;
const ModifyApplicationResponse = models.ModifyApplicationResponse;
const EnableApplicationSensitiveAPIResponse = models.EnableApplicationSensitiveAPIResponse;
const DescribeMNPListResponse = models.DescribeMNPListResponse;
const ProcessMNPApprovalResponse = models.ProcessMNPApprovalResponse;
const DeleteTeamResponse = models.DeleteTeamResponse;
const RemoveMNPResponse = models.RemoveMNPResponse;
const DescribeMNPSensitiveAPIPermissionApprovalRequest = models.DescribeMNPSensitiveAPIPermissionApprovalRequest;
const ModifyUserResponse = models.ModifyUserResponse;
const DescribeTeamMemberInfoResp = models.DescribeTeamMemberInfoResp;
const ConfigureMNPPreviewResponse = models.ConfigureMNPPreviewResponse;
const DescribeMNPSensitiveAPIPermissionApprovalListData = models.DescribeMNPSensitiveAPIPermissionApprovalListData;
const DeleteMNPResponse = models.DeleteMNPResponse;
const DescribeMPAllStageVersionsResp = models.DescribeMPAllStageVersionsResp;
const DescribeMNPSensitiveAPIPermissionListRequest = models.DescribeMNPSensitiveAPIPermissionListRequest;
const DescribeApplicationListRequest = models.DescribeApplicationListRequest;
const DeleteTeamRequest = models.DeleteTeamRequest;
const DescribeRoleListRequest = models.DescribeRoleListRequest;
const ModifyTeamMemberResponse = models.ModifyTeamMemberResponse;
const DeleteApplicationResponse = models.DeleteApplicationResponse;
const ProcessMNPSensitiveAPIPermissionApprovalResponse = models.ProcessMNPSensitiveAPIPermissionApprovalResponse;
const DescribeApplicationResp = models.DescribeApplicationResp;
const ModifyGlobalDomainResponse = models.ModifyGlobalDomainResponse;
const DescribeRoleListResp = models.DescribeRoleListResp;
const DescribeTeamListInfoResp = models.DescribeTeamListInfoResp;
const CreateMNPSensitiveAPIPermissionApprovalRequest = models.CreateMNPSensitiveAPIPermissionApprovalRequest;
const DeleteMNPRequest = models.DeleteMNPRequest;
const DescribeTeamListResponse = models.DescribeTeamListResponse;
const DescribeMNPAllStageVersionsResponse = models.DescribeMNPAllStageVersionsResponse;
const DescribeUserListResp = models.DescribeUserListResp;
const ApprovalItem = models.ApprovalItem;
const QueryOnlineVersionResp = models.QueryOnlineVersionResp;
const DescribeApplicationListData = models.DescribeApplicationListData;
const DescribeRoleListResponse = models.DescribeRoleListResponse;
const CreateMNPVersionRequest = models.CreateMNPVersionRequest;
const DescribeMNPListData = models.DescribeMNPListData;
const DescribeApplicationListResponse = models.DescribeApplicationListResponse;
const DescribeMNPApprovalListRequest = models.DescribeMNPApprovalListRequest;
const ModifyMNPDomainRequest = models.ModifyMNPDomainRequest;
const ModifyTeamRequest = models.ModifyTeamRequest;
const CreateTeamMemberInfoReq = models.CreateTeamMemberInfoReq;
const DownloadApplicationConfigResp = models.DownloadApplicationConfigResp;
const CreateUserResponse = models.CreateUserResponse;
const ModifyMNPDomainResponse = models.ModifyMNPDomainResponse;
const DescribeApplicationConfigFileRequest = models.DescribeApplicationConfigFileRequest;
const DescribeUserListRequest = models.DescribeUserListRequest;
const DeleteUserResponse = models.DeleteUserResponse;
const DescribeApplicationResponse = models.DescribeApplicationResponse;
const CreateMNPVersionResp = models.CreateMNPVersionResp;
const DescribeDomainInfoParam = models.DescribeDomainInfoParam;
const CreateMNPApprovalResponse = models.CreateMNPApprovalResponse;
const DescribeMNPApprovalListData = models.DescribeMNPApprovalListData;
const ResourceIdInfo = models.ResourceIdInfo;
const DeleteTeamMemberResponse = models.DeleteTeamMemberResponse;
const ProcessMNPApprovalRequest = models.ProcessMNPApprovalRequest;
const ModifyUserRequest = models.ModifyUserRequest;
const CreateMNPResponse = models.CreateMNPResponse;
const DescribeMNPSensitiveAPIPermissionApprovalListResp = models.DescribeMNPSensitiveAPIPermissionApprovalListResp;
const DescribeMNPDomainACLRequest = models.DescribeMNPDomainACLRequest;
const DescribeUserListResponse = models.DescribeUserListResponse;
const DeleteTeamMemberRequest = models.DeleteTeamMemberRequest;
const CreateGlobalDomainACLResponse = models.CreateGlobalDomainACLResponse;
const RollbackMNPVersionRequest = models.RollbackMNPVersionRequest;
const ProcessMNPSensitiveAPIPermissionApprovalRequest = models.ProcessMNPSensitiveAPIPermissionApprovalRequest;
const DescribeMNPSensitiveAPIPermissionListData = models.DescribeMNPSensitiveAPIPermissionListData;
const DescribeMNPOfflinePackageURLResponse = models.DescribeMNPOfflinePackageURLResponse;
const DescribeUserResponse = models.DescribeUserResponse;
const CreateApplicationSensitiveAPIResponse = models.CreateApplicationSensitiveAPIResponse;
const GlobalDomainModifyRespResp = models.GlobalDomainModifyRespResp;
const DisableApplicationSensitiveAPIRequest = models.DisableApplicationSensitiveAPIRequest;
const DescribeApplicationSensitiveAPIListResponse = models.DescribeApplicationSensitiveAPIListResponse;
const DeleteApplicationRequest = models.DeleteApplicationRequest;
const DescribeUserRequest = models.DescribeUserRequest;
const ModifyGlobalDomainRequest = models.ModifyGlobalDomainRequest;
const DescribeUserDetailResp = models.DescribeUserDetailResp;
const DescribeMNPReleasedVersionHistoryRequest = models.DescribeMNPReleasedVersionHistoryRequest;
const DescribeMNPSensitiveAPIPermissionListResponse = models.DescribeMNPSensitiveAPIPermissionListResponse;
const AddTeamMemberResponse = models.AddTeamMemberResponse;
const CreateTeamResponse = models.CreateTeamResponse;
const CreateMNPSensitiveAPIPermissionApprovalResponse = models.CreateMNPSensitiveAPIPermissionApprovalResponse;
const ModifyMNPRequest = models.ModifyMNPRequest;
const CreateMNPDomainACLRequest = models.CreateMNPDomainACLRequest;
const RollbackMNPVersionResponse = models.RollbackMNPVersionResponse;
const CreateTeamRequest = models.CreateTeamRequest;
const CreateApplicationSensitiveAPIRequest = models.CreateApplicationSensitiveAPIRequest;
const DescribeMNPSensitiveAPIPermissionListResp = models.DescribeMNPSensitiveAPIPermissionListResp;
const ReleaseMNPVersionRequest = models.ReleaseMNPVersionRequest;
const DescribeRoleListData = models.DescribeRoleListData;
const DescribeMNPResponse = models.DescribeMNPResponse;
const DescribeGlobalDomainsResp = models.DescribeGlobalDomainsResp;
const DescribeRevertOnlineVersionPageResp = models.DescribeRevertOnlineVersionPageResp;
const DescribeMNPApprovalListResp = models.DescribeMNPApprovalListResp;
const DescribeMNPSensitiveAPIPermissionApprovalData = models.DescribeMNPSensitiveAPIPermissionApprovalData;
const DescribeMNPSensitiveAPIPermissionApprovalListResponse = models.DescribeMNPSensitiveAPIPermissionApprovalListResponse;
const DescribeMNPSensitiveAPIPermissionApprovalListRequest = models.DescribeMNPSensitiveAPIPermissionApprovalListRequest;
const DescribeApplicationListResp = models.DescribeApplicationListResp;
const AddTeamMemberRequest = models.AddTeamMemberRequest;
const DescribeMNPOfflinePackageURLRequest = models.DescribeMNPOfflinePackageURLRequest;
const CreateMNPRequest = models.CreateMNPRequest;
const DescribeTeamRequest = models.DescribeTeamRequest;
const DescribeMNPRequest = models.DescribeMNPRequest;
const CreateUserRequest = models.CreateUserRequest;
const ModifyTeamResponse = models.ModifyTeamResponse;
const DescribeMNPSensitiveAPIPermissionApprovalResponse = models.DescribeMNPSensitiveAPIPermissionApprovalResponse;
const DescribeTempSecret4UploadFile2CosRequest = models.DescribeTempSecret4UploadFile2CosRequest;
const ModifyTeamMemberRequest = models.ModifyTeamMemberRequest;
const DescribeGlobalDomainsListData = models.DescribeGlobalDomainsListData;
const DescribeMNPManagerDetailData = models.DescribeMNPManagerDetailData;
const DescribeUserListData = models.DescribeUserListData;
const DescribeTeamResponse = models.DescribeTeamResponse;
const DescribeApplicationRequest = models.DescribeApplicationRequest;
const CreateMNPVersionResponse = models.CreateMNPVersionResponse;
const DescribeMNPDomainACLResponse = models.DescribeMNPDomainACLResponse;
const ReleaseMNPVersionResponse = models.ReleaseMNPVersionResponse;
const ResourceIdStringInfo = models.ResourceIdStringInfo;
const CreateDomainParam = models.CreateDomainParam;
const DescribeTeamPageResp = models.DescribeTeamPageResp;
const ModifyMNPResponse = models.ModifyMNPResponse;
const DescribeMNPVersionResp = models.DescribeMNPVersionResp;
const DescribeApplicationConfigFileResponse = models.DescribeApplicationConfigFileResponse;
const BooleanInfo = models.BooleanInfo;
const DisableApplicationSensitiveAPIResponse = models.DisableApplicationSensitiveAPIResponse;
const UploadFileTempSecret = models.UploadFileTempSecret;
const CreateMNPDomainACLResponse = models.CreateMNPDomainACLResponse;
const DescribeTeamListRequest = models.DescribeTeamListRequest;
const DescribeMNPApprovalListResponse = models.DescribeMNPApprovalListResponse;
const DescribeMNPVersionRequest = models.DescribeMNPVersionRequest;
const DescribeGlobalDomainACLRequest = models.DescribeGlobalDomainACLRequest;
const CreateApplicationRequest = models.CreateApplicationRequest;
const MNPTypeDefine = models.MNPTypeDefine;
const StringData = models.StringData;
const DescribeTempSecret4UploadFile2CosResponse = models.DescribeTempSecret4UploadFile2CosResponse;
const ConfigureMNPPreviewRequest = models.ConfigureMNPPreviewRequest;
const DescribeMNPReleasedVersionHistoryResponse = models.DescribeMNPReleasedVersionHistoryResponse;
const DeleteApplicationSensitiveAPIRequest = models.DeleteApplicationSensitiveAPIRequest;
const DescribeApplicationSensitiveAPIListData = models.DescribeApplicationSensitiveAPIListData;
const DescribeApplicationSensitiveAPIListResp = models.DescribeApplicationSensitiveAPIListResp;
const DescribeTeamDetailResp = models.DescribeTeamDetailResp;
const DescribeGlobalDomainACLResponse = models.DescribeGlobalDomainACLResponse;
const CreatePresetKeyRequest = models.CreatePresetKeyRequest;
const PresetResp = models.PresetResp;
const CreateApplicationResponse = models.CreateApplicationResponse;
const DescribeMNPCategoryRequest = models.DescribeMNPCategoryRequest;
const DeleteApplicationSensitiveAPIResponse = models.DeleteApplicationSensitiveAPIResponse;
const EnableApplicationSensitiveAPIRequest = models.EnableApplicationSensitiveAPIRequest;
const DeleteGlobalDomainRequest = models.DeleteGlobalDomainRequest;
const GlobalDomainDeleteResp = models.GlobalDomainDeleteResp;
const DeleteGlobalDomainResponse = models.DeleteGlobalDomainResponse;
const DescribeMNPListRequest = models.DescribeMNPListRequest;
const DescribeMNPPreviewRequest = models.DescribeMNPPreviewRequest;
const CreateGlobalDomainResp = models.CreateGlobalDomainResp;
const CreateGlobalDomainACLRequest = models.CreateGlobalDomainACLRequest;
const DescribeApplicationSensitiveAPIListRequest = models.DescribeApplicationSensitiveAPIListRequest;
const DescribeTeamMemberListResponse = models.DescribeTeamMemberListResponse;
const DescribeTeamMemberListPageResp = models.DescribeTeamMemberListPageResp;


/**
 * tcsas client
 * @class
 */
class TcsasClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcsas.intl.tencentcloudapi.com", "2025-01-06", credential, region, profile);
    }
    
    /**
     * DescribeMNPOfflinePackageURL
     * @param {DescribeMNPOfflinePackageURLRequest} req
     * @param {function(string, DescribeMNPOfflinePackageURLResponse):void} cb
     * @public
     */
    DescribeMNPOfflinePackageURL(req, cb) {
        let resp = new DescribeMNPOfflinePackageURLResponse();
        this.request("DescribeMNPOfflinePackageURL", req, resp, cb);
    }

    /**
     * This API is used to delete domains from the allowlist or blocklist.
     * @param {DeleteGlobalDomainRequest} req
     * @param {function(string, DeleteGlobalDomainResponse):void} cb
     * @public
     */
    DeleteGlobalDomain(req, cb) {
        let resp = new DeleteGlobalDomainResponse();
        this.request("DeleteGlobalDomain", req, resp, cb);
    }

    /**
     * This API is used to rollback a mini program online version.
     * @param {RollbackMNPVersionRequest} req
     * @param {function(string, RollbackMNPVersionResponse):void} cb
     * @public
     */
    RollbackMNPVersion(req, cb) {
        let resp = new RollbackMNPVersionResponse();
        this.request("RollbackMNPVersion", req, resp, cb);
    }

    /**
     * This API is used to remove a mini program.
     * @param {RemoveMNPRequest} req
     * @param {function(string, RemoveMNPResponse):void} cb
     * @public
     */
    RemoveMNP(req, cb) {
        let resp = new RemoveMNPResponse();
        this.request("RemoveMNP", req, resp, cb);
    }

    /**
     * This API is used to list sensitive APIs of an application.
     * @param {DescribeApplicationSensitiveAPIListRequest} req
     * @param {function(string, DescribeApplicationSensitiveAPIListResponse):void} cb
     * @public
     */
    DescribeApplicationSensitiveAPIList(req, cb) {
        let resp = new DescribeApplicationSensitiveAPIListResponse();
        this.request("DescribeApplicationSensitiveAPIList", req, resp, cb);
    }

    /**
     * This API is used to delete the applications.
     * @param {DeleteApplicationRequest} req
     * @param {function(string, DeleteApplicationResponse):void} cb
     * @public
     */
    DeleteApplication(req, cb) {
        let resp = new DeleteApplicationResponse();
        this.request("DeleteApplication", req, resp, cb);
    }

    /**
     * This API is used to query the roles.
     * @param {DescribeRoleListRequest} req
     * @param {function(string, DescribeRoleListResponse):void} cb
     * @public
     */
    DescribeRoleList(req, cb) {
        let resp = new DescribeRoleListResponse();
        this.request("DescribeRoleList", req, resp, cb);
    }

    /**
     * This API is used to approve or reject the release of a mini program version.
     * @param {ProcessMNPApprovalRequest} req
     * @param {function(string, ProcessMNPApprovalResponse):void} cb
     * @public
     */
    ProcessMNPApproval(req, cb) {
        let resp = new ProcessMNPApprovalResponse();
        this.request("ProcessMNPApproval", req, resp, cb);
    }

    /**
     * This API is used to query the users.
     * @param {DescribeUserListRequest} req
     * @param {function(string, DescribeUserListResponse):void} cb
     * @public
     */
    DescribeUserList(req, cb) {
        let resp = new DescribeUserListResponse();
        this.request("DescribeUserList", req, resp, cb);
    }

    /**
     * This API is used to query the teams.
     * @param {DescribeTeamListRequest} req
     * @param {function(string, DescribeTeamListResponse):void} cb
     * @public
     */
    DescribeTeamList(req, cb) {
        let resp = new DescribeTeamListResponse();
        this.request("DescribeTeamList", req, resp, cb);
    }

    /**
     * This API is used to query the configuration files of an application.
     * @param {DescribeApplicationConfigFileRequest} req
     * @param {function(string, DescribeApplicationConfigFileResponse):void} cb
     * @public
     */
    DescribeApplicationConfigFile(req, cb) {
        let resp = new DescribeApplicationConfigFileResponse();
        this.request("DescribeApplicationConfigFile", req, resp, cb);
    }

    /**
     * This API is used to query the team details.
     * @param {DescribeTeamRequest} req
     * @param {function(string, DescribeTeamResponse):void} cb
     * @public
     */
    DescribeTeam(req, cb) {
        let resp = new DescribeTeamResponse();
        this.request("DescribeTeam", req, resp, cb);
    }

    /**
     * This API is used to create a mini program.
     * @param {CreateMNPRequest} req
     * @param {function(string, CreateMNPResponse):void} cb
     * @public
     */
    CreateMNP(req, cb) {
        let resp = new CreateMNPResponse();
        this.request("CreateMNP", req, resp, cb);
    }

    /**
     * This API is used to configure the preview of a mini program.
     * @param {ConfigureMNPPreviewRequest} req
     * @param {function(string, ConfigureMNPPreviewResponse):void} cb
     * @public
     */
    ConfigureMNPPreview(req, cb) {
        let resp = new ConfigureMNPPreviewResponse();
        this.request("ConfigureMNPPreview", req, resp, cb);
    }

    /**
     * This API is used to list the approval requests related with a mini program version.
     * @param {DescribeMNPApprovalListRequest} req
     * @param {function(string, DescribeMNPApprovalListResponse):void} cb
     * @public
     */
    DescribeMNPApprovalList(req, cb) {
        let resp = new DescribeMNPApprovalListResponse();
        this.request("DescribeMNPApprovalList", req, resp, cb);
    }

    /**
     * This API is used to query permission requests to allow a mini program calling sensitive APIs.
     * @param {DescribeMNPSensitiveAPIPermissionApprovalListRequest} req
     * @param {function(string, DescribeMNPSensitiveAPIPermissionApprovalListResponse):void} cb
     * @public
     */
    DescribeMNPSensitiveAPIPermissionApprovalList(req, cb) {
        let resp = new DescribeMNPSensitiveAPIPermissionApprovalListResponse();
        this.request("DescribeMNPSensitiveAPIPermissionApprovalList", req, resp, cb);
    }

    /**
     * This API is used to change the application information.
     * @param {ModifyApplicationRequest} req
     * @param {function(string, ModifyApplicationResponse):void} cb
     * @public
     */
    ModifyApplication(req, cb) {
        let resp = new ModifyApplicationResponse();
        this.request("ModifyApplication", req, resp, cb);
    }

    /**
     * This API is used to query the user details.
     * @param {DescribeUserRequest} req
     * @param {function(string, DescribeUserResponse):void} cb
     * @public
     */
    DescribeUser(req, cb) {
        let resp = new DescribeUserResponse();
        this.request("DescribeUser", req, resp, cb);
    }

    /**
     * This API is used to release a mini program version.
     * @param {ReleaseMNPVersionRequest} req
     * @param {function(string, ReleaseMNPVersionResponse):void} cb
     * @public
     */
    ReleaseMNPVersion(req, cb) {
        let resp = new ReleaseMNPVersionResponse();
        this.request("ReleaseMNPVersion", req, resp, cb);
    }

    /**
     * This API is used to query the team members.
     * @param {DescribeTeamMemberListRequest} req
     * @param {function(string, DescribeTeamMemberListResponse):void} cb
     * @public
     */
    DescribeTeamMemberList(req, cb) {
        let resp = new DescribeTeamMemberListResponse();
        this.request("DescribeTeamMemberList", req, resp, cb);
    }

    /**
     * This API is used to approve or reject the sensitive API permission requests.
     * @param {ProcessMNPSensitiveAPIPermissionApprovalRequest} req
     * @param {function(string, ProcessMNPSensitiveAPIPermissionApprovalResponse):void} cb
     * @public
     */
    ProcessMNPSensitiveAPIPermissionApproval(req, cb) {
        let resp = new ProcessMNPSensitiveAPIPermissionApprovalResponse();
        this.request("ProcessMNPSensitiveAPIPermissionApproval", req, resp, cb);
    }

    /**
     * This API is used to change the team information.
     * @param {ModifyTeamRequest} req
     * @param {function(string, ModifyTeamResponse):void} cb
     * @public
     */
    ModifyTeam(req, cb) {
        let resp = new ModifyTeamResponse();
        this.request("ModifyTeam", req, resp, cb);
    }

    /**
     * This API is used to delete a team member.
     * @param {DeleteTeamMemberRequest} req
     * @param {function(string, DeleteTeamMemberResponse):void} cb
     * @public
     */
    DeleteTeamMember(req, cb) {
        let resp = new DeleteTeamMemberResponse();
        this.request("DeleteTeamMember", req, resp, cb);
    }

    /**
     * This API is used to query the domain allowlist / blocklist of a mini program.
     * @param {DescribeMNPDomainACLRequest} req
     * @param {function(string, DescribeMNPDomainACLResponse):void} cb
     * @public
     */
    DescribeMNPDomainACL(req, cb) {
        let resp = new DescribeMNPDomainACLResponse();
        this.request("DescribeMNPDomainACL", req, resp, cb);
    }

    /**
     * This API is used to query details of a specific permission request to call sensitive APIs.
     * @param {DescribeMNPSensitiveAPIPermissionApprovalRequest} req
     * @param {function(string, DescribeMNPSensitiveAPIPermissionApprovalResponse):void} cb
     * @public
     */
    DescribeMNPSensitiveAPIPermissionApproval(req, cb) {
        let resp = new DescribeMNPSensitiveAPIPermissionApprovalResponse();
        this.request("DescribeMNPSensitiveAPIPermissionApproval", req, resp, cb);
    }

    /**
     * This API is used to deletes a team.
     * @param {DeleteTeamRequest} req
     * @param {function(string, DeleteTeamResponse):void} cb
     * @public
     */
    DeleteTeam(req, cb) {
        let resp = new DeleteTeamResponse();
        this.request("DeleteTeam", req, resp, cb);
    }

    /**
     * This API is used to query the mini program details.
     * @param {DescribeMNPRequest} req
     * @param {function(string, DescribeMNPResponse):void} cb
     * @public
     */
    DescribeMNP(req, cb) {
        let resp = new DescribeMNPResponse();
        this.request("DescribeMNP", req, resp, cb);
    }

    /**
     * This API is used to add a domain name to the allowlist / blocklist of a mini program.
     * @param {CreateMNPDomainACLRequest} req
     * @param {function(string, CreateMNPDomainACLResponse):void} cb
     * @public
     */
    CreateMNPDomainACL(req, cb) {
        let resp = new CreateMNPDomainACLResponse();
        this.request("CreateMNPDomainACL", req, resp, cb);
    }

    /**
     * This API is used to add a team member.
     * @param {AddTeamMemberRequest} req
     * @param {function(string, AddTeamMemberResponse):void} cb
     * @public
     */
    AddTeamMember(req, cb) {
        let resp = new AddTeamMemberResponse();
        this.request("AddTeamMember", req, resp, cb);
    }

    /**
     * This API is used to modify the team member information.
     * @param {ModifyTeamMemberRequest} req
     * @param {function(string, ModifyTeamMemberResponse):void} cb
     * @public
     */
    ModifyTeamMember(req, cb) {
        let resp = new ModifyTeamMemberResponse();
        this.request("ModifyTeamMember", req, resp, cb);
    }

    /**
     * This API is used to set a sensitive API to restricted.
     * @param {DisableApplicationSensitiveAPIRequest} req
     * @param {function(string, DisableApplicationSensitiveAPIResponse):void} cb
     * @public
     */
    DisableApplicationSensitiveAPI(req, cb) {
        let resp = new DisableApplicationSensitiveAPIResponse();
        this.request("DisableApplicationSensitiveAPI", req, resp, cb);
    }

    /**
     * This API is used to create a mini program approval request.
     * @param {CreateMNPApprovalRequest} req
     * @param {function(string, CreateMNPApprovalResponse):void} cb
     * @public
     */
    CreateMNPApproval(req, cb) {
        let resp = new CreateMNPApprovalResponse();
        this.request("CreateMNPApproval", req, resp, cb);
    }

    /**
     * This API is used to delete a mini program.
     * @param {DeleteMNPRequest} req
     * @param {function(string, DeleteMNPResponse):void} cb
     * @public
     */
    DeleteMNP(req, cb) {
        let resp = new DeleteMNPResponse();
        this.request("DeleteMNP", req, resp, cb);
    }

    /**
     * This API is used to query the list of sensitive APIs that available to a mini program.
     * @param {DescribeMNPSensitiveAPIPermissionListRequest} req
     * @param {function(string, DescribeMNPSensitiveAPIPermissionListResponse):void} cb
     * @public
     */
    DescribeMNPSensitiveAPIPermissionList(req, cb) {
        let resp = new DescribeMNPSensitiveAPIPermissionListResponse();
        this.request("DescribeMNPSensitiveAPIPermissionList", req, resp, cb);
    }

    /**
     * This API is used to query the mini program types.
     * @param {DescribeMNPCategoryRequest} req
     * @param {function(string, DescribeMNPCategoryResponse):void} cb
     * @public
     */
    DescribeMNPCategory(req, cb) {
        let resp = new DescribeMNPCategoryResponse();
        this.request("DescribeMNPCategory", req, resp, cb);
    }

    /**
     * This API is used to query the mini program version creation results.
     * @param {DescribeMNPVersionRequest} req
     * @param {function(string, DescribeMNPVersionResponse):void} cb
     * @public
     */
    DescribeMNPVersion(req, cb) {
        let resp = new DescribeMNPVersionResponse();
        this.request("DescribeMNPVersion", req, resp, cb);
    }

    /**
     * This API is used to create a global domain allowlist or blocklist.
     * @param {CreateGlobalDomainACLRequest} req
     * @param {function(string, CreateGlobalDomainACLResponse):void} cb
     * @public
     */
    CreateGlobalDomainACL(req, cb) {
        let resp = new CreateGlobalDomainACLResponse();
        this.request("CreateGlobalDomainACL", req, resp, cb);
    }

    /**
     * This API is used to query the mini program version management information.
     * @param {DescribeMNPAllStageVersionsRequest} req
     * @param {function(string, DescribeMNPAllStageVersionsResponse):void} cb
     * @public
     */
    DescribeMNPAllStageVersions(req, cb) {
        let resp = new DescribeMNPAllStageVersionsResponse();
        this.request("DescribeMNPAllStageVersions", req, resp, cb);
    }

    /**
     * This API is used to edit the mini program domain information.
     * @param {ModifyMNPDomainRequest} req
     * @param {function(string, ModifyMNPDomainResponse):void} cb
     * @public
     */
    ModifyMNPDomain(req, cb) {
        let resp = new ModifyMNPDomainResponse();
        this.request("ModifyMNPDomain", req, resp, cb);
    }

    /**
     * This API is used to obtain a temporary key for file uploads.
     * @param {DescribeTempSecret4UploadFile2CosRequest} req
     * @param {function(string, DescribeTempSecret4UploadFile2CosResponse):void} cb
     * @public
     */
    DescribeTempSecret4UploadFile2Cos(req, cb) {
        let resp = new DescribeTempSecret4UploadFile2CosResponse();
        this.request("DescribeTempSecret4UploadFile2Cos", req, resp, cb);
    }

    /**
     * This API is used to query the global domain allowlist and blocklist.
     * @param {DescribeGlobalDomainACLRequest} req
     * @param {function(string, DescribeGlobalDomainACLResponse):void} cb
     * @public
     */
    DescribeGlobalDomainACL(req, cb) {
        let resp = new DescribeGlobalDomainACLResponse();
        this.request("DescribeGlobalDomainACL", req, resp, cb);
    }

    /**
     * This API is used to modify the mini program information.
     * @param {ModifyMNPRequest} req
     * @param {function(string, ModifyMNPResponse):void} cb
     * @public
     */
    ModifyMNP(req, cb) {
        let resp = new ModifyMNPResponse();
        this.request("ModifyMNP", req, resp, cb);
    }

    /**
     * This API is used to create a team.
     * @param {CreateTeamRequest} req
     * @param {function(string, CreateTeamResponse):void} cb
     * @public
     */
    CreateTeam(req, cb) {
        let resp = new CreateTeamResponse();
        this.request("CreateTeam", req, resp, cb);
    }

    /**
     * This API is used to create an application.
     * @param {CreateApplicationRequest} req
     * @param {function(string, CreateApplicationResponse):void} cb
     * @public
     */
    CreateApplication(req, cb) {
        let resp = new CreateApplicationResponse();
        this.request("CreateApplication", req, resp, cb);
    }

    /**
     * This API is used to set an application sensitive API to public.
     * @param {EnableApplicationSensitiveAPIRequest} req
     * @param {function(string, EnableApplicationSensitiveAPIResponse):void} cb
     * @public
     */
    EnableApplicationSensitiveAPI(req, cb) {
        let resp = new EnableApplicationSensitiveAPIResponse();
        this.request("EnableApplicationSensitiveAPI", req, resp, cb);
    }

    /**
     * This API is used to modify the user information.
     * @param {ModifyUserRequest} req
     * @param {function(string, ModifyUserResponse):void} cb
     * @public
     */
    ModifyUser(req, cb) {
        let resp = new ModifyUserResponse();
        this.request("ModifyUser", req, resp, cb);
    }

    /**
     * This API is used to delete a user.
     * @param {DeleteUserRequest} req
     * @param {function(string, DeleteUserResponse):void} cb
     * @public
     */
    DeleteUser(req, cb) {
        let resp = new DeleteUserResponse();
        this.request("DeleteUser", req, resp, cb);
    }

    /**
     * This API is used to create a mini program version.
     * @param {CreateMNPVersionRequest} req
     * @param {function(string, CreateMNPVersionResponse):void} cb
     * @public
     */
    CreateMNPVersion(req, cb) {
        let resp = new CreateMNPVersionResponse();
        this.request("CreateMNPVersion", req, resp, cb);
    }

    /**
     * This API is used to modify the domain allowlist or blocklist.
     * @param {ModifyGlobalDomainRequest} req
     * @param {function(string, ModifyGlobalDomainResponse):void} cb
     * @public
     */
    ModifyGlobalDomain(req, cb) {
        let resp = new ModifyGlobalDomainResponse();
        this.request("ModifyGlobalDomain", req, resp, cb);
    }

    /**
     * This API is used to query the applications.
     * @param {DescribeApplicationListRequest} req
     * @param {function(string, DescribeApplicationListResponse):void} cb
     * @public
     */
    DescribeApplicationList(req, cb) {
        let resp = new DescribeApplicationListResponse();
        this.request("DescribeApplicationList", req, resp, cb);
    }

    /**
     * This API is used to obtain the encryption key.
     * @param {CreatePresetKeyRequest} req
     * @param {function(string, CreatePresetKeyResponse):void} cb
     * @public
     */
    CreatePresetKey(req, cb) {
        let resp = new CreatePresetKeyResponse();
        this.request("CreatePresetKey", req, resp, cb);
    }

    /**
     * This API is used to list all released versions of a mini program.
     * @param {DescribeMNPReleasedVersionHistoryRequest} req
     * @param {function(string, DescribeMNPReleasedVersionHistoryResponse):void} cb
     * @public
     */
    DescribeMNPReleasedVersionHistory(req, cb) {
        let resp = new DescribeMNPReleasedVersionHistoryResponse();
        this.request("DescribeMNPReleasedVersionHistory", req, resp, cb);
    }

    /**
     * This API is used to query the mini program preview details.
     * @param {DescribeMNPPreviewRequest} req
     * @param {function(string, DescribeMNPPreviewResponse):void} cb
     * @public
     */
    DescribeMNPPreview(req, cb) {
        let resp = new DescribeMNPPreviewResponse();
        this.request("DescribeMNPPreview", req, resp, cb);
    }

    /**
     * This API is used to create a sensitive API of an application.
     * @param {CreateApplicationSensitiveAPIRequest} req
     * @param {function(string, CreateApplicationSensitiveAPIResponse):void} cb
     * @public
     */
    CreateApplicationSensitiveAPI(req, cb) {
        let resp = new CreateApplicationSensitiveAPIResponse();
        this.request("CreateApplicationSensitiveAPI", req, resp, cb);
    }

    /**
     * This API is used to create a permission request to allow a mini program to call sensitive APIs.
     * @param {CreateMNPSensitiveAPIPermissionApprovalRequest} req
     * @param {function(string, CreateMNPSensitiveAPIPermissionApprovalResponse):void} cb
     * @public
     */
    CreateMNPSensitiveAPIPermissionApproval(req, cb) {
        let resp = new CreateMNPSensitiveAPIPermissionApprovalResponse();
        this.request("CreateMNPSensitiveAPIPermissionApproval", req, resp, cb);
    }

    /**
     * This API is used to query the mini programs.
     * @param {DescribeMNPListRequest} req
     * @param {function(string, DescribeMNPListResponse):void} cb
     * @public
     */
    DescribeMNPList(req, cb) {
        let resp = new DescribeMNPListResponse();
        this.request("DescribeMNPList", req, resp, cb);
    }

    /**
     * This API is used to create a user.
     * @param {CreateUserRequest} req
     * @param {function(string, CreateUserResponse):void} cb
     * @public
     */
    CreateUser(req, cb) {
        let resp = new CreateUserResponse();
        this.request("CreateUser", req, resp, cb);
    }

    /**
     * This API is used to query the application details.
     * @param {DescribeApplicationRequest} req
     * @param {function(string, DescribeApplicationResponse):void} cb
     * @public
     */
    DescribeApplication(req, cb) {
        let resp = new DescribeApplicationResponse();
        this.request("DescribeApplication", req, resp, cb);
    }

    /**
     * This API is used to delete a sensitive API.
     * @param {DeleteApplicationSensitiveAPIRequest} req
     * @param {function(string, DeleteApplicationSensitiveAPIResponse):void} cb
     * @public
     */
    DeleteApplicationSensitiveAPI(req, cb) {
        let resp = new DeleteApplicationSensitiveAPIResponse();
        this.request("DeleteApplicationSensitiveAPI", req, resp, cb);
    }


}
module.exports = TcsasClient;
