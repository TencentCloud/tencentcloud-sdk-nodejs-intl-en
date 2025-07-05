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
const DescribeOnlineVersionRequest = models.DescribeOnlineVersionRequest;
const DescribeMNPVersionCompileTaskExtInfo = models.DescribeMNPVersionCompileTaskExtInfo;
const DescribeOfflineMNPPackageRequest = models.DescribeOfflineMNPPackageRequest;
const DescribeRoleDetailRequest = models.DescribeRoleDetailRequest;
const DescribeMNPAllStageVersionsRequest = models.DescribeMNPAllStageVersionsRequest;
const ModifyApplicationRequest = models.ModifyApplicationRequest;
const ModifyUserPasswordRequest = models.ModifyUserPasswordRequest;
const DescribeTeamMembersInfoPageResp = models.DescribeTeamMembersInfoPageResp;
const DescribeDomainTeamListPageResp = models.DescribeDomainTeamListPageResp;
const DeleteUserRequest = models.DeleteUserRequest;
const ModifyPlatformAuditStatusResponse = models.ModifyPlatformAuditStatusResponse;
const DescribeMNPCategoryResponse = models.DescribeMNPCategoryResponse;
const CreateApplicationSensitiveAPIReq = models.CreateApplicationSensitiveAPIReq;
const DescribeSensitiveAPIListRequest = models.DescribeSensitiveAPIListRequest;
const CreateMNPApprovalRequest = models.CreateMNPApprovalRequest;
const RemoveMNPRequest = models.RemoveMNPRequest;
const DeleteTeamMemberResponse = models.DeleteTeamMemberResponse;
const RemoveMNPResponse = models.RemoveMNPResponse;
const DescribeMNPListResp = models.DescribeMNPListResp;
const DescribeMNPPreviewResp = models.DescribeMNPPreviewResp;
const DescribeMNPVersionResponse = models.DescribeMNPVersionResponse;
const ModifyApplicationResponse = models.ModifyApplicationResponse;
const EnableApplicationSensitiveAPIResponse = models.EnableApplicationSensitiveAPIResponse;
const DescribeTeamDomainListRequest = models.DescribeTeamDomainListRequest;
const DescribeSensitiveApiAuthListRequest = models.DescribeSensitiveApiAuthListRequest;
const DescribeMNPListResponse = models.DescribeMNPListResponse;
const ModifyMNPStatusOfflineRequest = models.ModifyMNPStatusOfflineRequest;
const ProcessMNPApprovalResponse = models.ProcessMNPApprovalResponse;
const ResourceIdStringInfo = models.ResourceIdStringInfo;
const DescribeGlobalDomainACLRequest = models.DescribeGlobalDomainACLRequest;
const DeleteTeamResponse = models.DeleteTeamResponse;
const DescribeRevertOnlineVersionPageResp = models.DescribeRevertOnlineVersionPageResp;
const DescribeMNPSensitiveAPIPermissionApprovalRequest = models.DescribeMNPSensitiveAPIPermissionApprovalRequest;
const CreateOnlineApplyRequest = models.CreateOnlineApplyRequest;
const CheckGlobalDomainRequest = models.CheckGlobalDomainRequest;
const DescribeTeamMemberInfoResp = models.DescribeTeamMemberInfoResp;
const ConfigureMNPPreviewResponse = models.ConfigureMNPPreviewResponse;
const ModifyMNPVersionPreviewRequest = models.ModifyMNPVersionPreviewRequest;
const DescribeMNPManagerListResp = models.DescribeMNPManagerListResp;
const DescribeSensitiveApiApplyDetailResponse = models.DescribeSensitiveApiApplyDetailResponse;
const DescribeSimpleApplicationInfoListResponse = models.DescribeSimpleApplicationInfoListResponse;
const DescribeMNPSensitiveAPIPermissionApprovalListData = models.DescribeMNPSensitiveAPIPermissionApprovalListData;
const DeleteMNPResponse = models.DeleteMNPResponse;
const ModifySensitiveAPIAuditStatusRequest = models.ModifySensitiveAPIAuditStatusRequest;
const DescribeMPAllStageVersionsResp = models.DescribeMPAllStageVersionsResp;
const GlobalDomainDescribeListPageResp = models.GlobalDomainDescribeListPageResp;
const DescribeMNPSensitiveAPIPermissionListRequest = models.DescribeMNPSensitiveAPIPermissionListRequest;
const DescribeApplicationListRequest = models.DescribeApplicationListRequest;
const DescribeTeamResponse = models.DescribeTeamResponse;
const DeleteTeamRequest = models.DeleteTeamRequest;
const DescribeRoleListRequest = models.DescribeRoleListRequest;
const ReleaseMNPVersionResponse = models.ReleaseMNPVersionResponse;
const CreateTeamMemberResponse = models.CreateTeamMemberResponse;
const DescribeMNPDetailResponse = models.DescribeMNPDetailResponse;
const DeleteSensitiveAPIResponse = models.DeleteSensitiveAPIResponse;
const ModifyMNPStatusOfflineResponse = models.ModifyMNPStatusOfflineResponse;
const ModifyTeamRequest = models.ModifyTeamRequest;
const DescribeMNPTypeRequest = models.DescribeMNPTypeRequest;
const DescribeDomainInfoRequest = models.DescribeDomainInfoRequest;
const DescribeMNPTypeResponse = models.DescribeMNPTypeResponse;
const DeleteApplicationResponse = models.DeleteApplicationResponse;
const DescribeMNPManagerListResponse = models.DescribeMNPManagerListResponse;
const DescribeMNPPrivacyResponse = models.DescribeMNPPrivacyResponse;
const CreateSensitiveAPIRequest = models.CreateSensitiveAPIRequest;
const DescribeUserDetailResp = models.DescribeUserDetailResp;
const DescribeSensitiveApiAuthPageParam = models.DescribeSensitiveApiAuthPageParam;
const ProcessMNPSensitiveAPIPermissionApprovalResponse = models.ProcessMNPSensitiveAPIPermissionApprovalResponse;
const DescribeApplicationListResponse = models.DescribeApplicationListResponse;
const DescribeSensitiveApiApplyDetail = models.DescribeSensitiveApiApplyDetail;
const ModifyGlobalDomainResponse = models.ModifyGlobalDomainResponse;
const DescribeRoleListResp = models.DescribeRoleListResp;
const DescribeTeamListInfoResp = models.DescribeTeamListInfoResp;
const CreateMNPSensitiveAPIPermissionApprovalRequest = models.CreateMNPSensitiveAPIPermissionApprovalRequest;
const DeleteMNPRequest = models.DeleteMNPRequest;
const DescribeRoleDetailResp = models.DescribeRoleDetailResp;
const DescribeSimpleTeamListResp = models.DescribeSimpleTeamListResp;
const DescribeMNPManagerListRequest = models.DescribeMNPManagerListRequest;
const ApplicationSimpleInfo = models.ApplicationSimpleInfo;
const DescribeMNPAllStageVersionsResponse = models.DescribeMNPAllStageVersionsResponse;
const DescribeTeamListResponse = models.DescribeTeamListResponse;
const DescribeUserListResp = models.DescribeUserListResp;
const ApprovalItem = models.ApprovalItem;
const ShowCaseRelAppInfo = models.ShowCaseRelAppInfo;
const CreateTeamMemberRequest = models.CreateTeamMemberRequest;
const DescribeTeamMembersInfoResp = models.DescribeTeamMembersInfoResp;
const DescribeRoleListResponse = models.DescribeRoleListResponse;
const CreateMNPVersionRequest = models.CreateMNPVersionRequest;
const DescribeMNPListData = models.DescribeMNPListData;
const ModifyOnlineVersionResponse = models.ModifyOnlineVersionResponse;
const DescribeMNPDetailRequest = models.DescribeMNPDetailRequest;
const DeleteSensitiveAPIRequest = models.DeleteSensitiveAPIRequest;
const CreateSensitiveApiApplyRequest = models.CreateSensitiveApiApplyRequest;
const DescribeMNPApprovalListRequest = models.DescribeMNPApprovalListRequest;
const ModifyMNPDomainRequest = models.ModifyMNPDomainRequest;
const DescribeApplicationMNPVersionAuditListRequest = models.DescribeApplicationMNPVersionAuditListRequest;
const ModifyApplicationAppKeyResponse = models.ModifyApplicationAppKeyResponse;
const SimpleStringKeyValue = models.SimpleStringKeyValue;
const MNPDetail = models.MNPDetail;
const CreateTeamMemberInfoReq = models.CreateTeamMemberInfoReq;
const DisableEnterpriseDomainResp = models.DisableEnterpriseDomainResp;
const ModifyApplicationAppUrlResponse = models.ModifyApplicationAppUrlResponse;
const DisableTeamDomainResponse = models.DisableTeamDomainResponse;
const DescribeTempSecret4UploadFile2CosRequest = models.DescribeTempSecret4UploadFile2CosRequest;
const CreateUserResponse = models.CreateUserResponse;
const DescribeDomainTeamListResponse = models.DescribeDomainTeamListResponse;
const SensitiveApiAuditInfoPageResp = models.SensitiveApiAuditInfoPageResp;
const ModifyMNPDomainResponse = models.ModifyMNPDomainResponse;
const DescribeApplicationConfigFileRequest = models.DescribeApplicationConfigFileRequest;
const DescribeSimpleTeamListRequest = models.DescribeSimpleTeamListRequest;
const DescribeUserListRequest = models.DescribeUserListRequest;
const DeleteUserResponse = models.DeleteUserResponse;
const CreatePlatformAuditResponse = models.CreatePlatformAuditResponse;
const DescribeOnlineVersionResponse = models.DescribeOnlineVersionResponse;
const DescribeApplicationResponse = models.DescribeApplicationResponse;
const CheckGlobalDomainResponse = models.CheckGlobalDomainResponse;
const DescribeDomainInfoResponse = models.DescribeDomainInfoResponse;
const CreateMNPVersionResp = models.CreateMNPVersionResp;
const CreateGlobalDomainResponse = models.CreateGlobalDomainResponse;
const DescribeDomainInfoParam = models.DescribeDomainInfoParam;
const CreateMNPApprovalResponse = models.CreateMNPApprovalResponse;
const DescribeMNPApprovalListData = models.DescribeMNPApprovalListData;
const ResourceIdInfo = models.ResourceIdInfo;
const DescribeMNPPreviewResponse = models.DescribeMNPPreviewResponse;
const CreateGlobalDomainRequest = models.CreateGlobalDomainRequest;
const DescribeMNPBoardResponse = models.DescribeMNPBoardResponse;
const ModifyUserRequest = models.ModifyUserRequest;
const CreateMNPResponse = models.CreateMNPResponse;
const DescribeTeamMembersResponse = models.DescribeTeamMembersResponse;
const DescribeMNPSensitiveAPIPermissionApprovalListResp = models.DescribeMNPSensitiveAPIPermissionApprovalListResp;
const DescribeMNPDomainACLRequest = models.DescribeMNPDomainACLRequest;
const ProcessMNPApprovalRequest = models.ProcessMNPApprovalRequest;
const DescribeUserListResponse = models.DescribeUserListResponse;
const DescribeApplicationSensitiveAPIListData = models.DescribeApplicationSensitiveAPIListData;
const ApplicationInfo = models.ApplicationInfo;
const CreateGlobalDomainACLResponse = models.CreateGlobalDomainACLResponse;
const DescribeTeamDomainListPageResp = models.DescribeTeamDomainListPageResp;
const ProcessMNPSensitiveAPIPermissionApprovalRequest = models.ProcessMNPSensitiveAPIPermissionApprovalRequest;
const ModifyUserPasswordResponse = models.ModifyUserPasswordResponse;
const DescribeMNPManagerListData = models.DescribeMNPManagerListData;
const CreateDomainResponse = models.CreateDomainResponse;
const DescribeMNPSensitiveAPIPermissionListData = models.DescribeMNPSensitiveAPIPermissionListData;
const SensitiveApiInfoResp = models.SensitiveApiInfoResp;
const DescribeSensitiveApiAuthListResponse = models.DescribeSensitiveApiAuthListResponse;
const DescribeMNPOfflinePackageURLResponse = models.DescribeMNPOfflinePackageURLResponse;
const ModifyDomainRequest = models.ModifyDomainRequest;
const AuditInfoReq = models.AuditInfoReq;
const DescribeConsoleMNPVersionCompileTaskResponse = models.DescribeConsoleMNPVersionCompileTaskResponse;
const CreateMNPVersionCompileTaskResp = models.CreateMNPVersionCompileTaskResp;
const GlobalDomainModifyRespResp = models.GlobalDomainModifyRespResp;
const DisableApplicationSensitiveAPIRequest = models.DisableApplicationSensitiveAPIRequest;
const DescribeApplicationSensitiveAPIListResponse = models.DescribeApplicationSensitiveAPIListResponse;
const DescribeSensitiveAPIListResponse = models.DescribeSensitiveAPIListResponse;
const DeleteApplicationRequest = models.DeleteApplicationRequest;
const DescribeGlobalDomainListResponse = models.DescribeGlobalDomainListResponse;
const DescribeSensitiveAPIAuditListResponse = models.DescribeSensitiveAPIAuditListResponse;
const DescribeUserRequest = models.DescribeUserRequest;
const DescribeMNPManagerDetailRequest = models.DescribeMNPManagerDetailRequest;
const ModifyGlobalDomainRequest = models.ModifyGlobalDomainRequest;
const CreateSensitiveAPIReq = models.CreateSensitiveAPIReq;
const DescribeMNPReleasedVersionHistoryRequest = models.DescribeMNPReleasedVersionHistoryRequest;
const DescribeMNPSensitiveAPIPermissionListResponse = models.DescribeMNPSensitiveAPIPermissionListResponse;
const AddTeamMemberResponse = models.AddTeamMemberResponse;
const DescribeMNPResponse = models.DescribeMNPResponse;
const CreateTeamResponse = models.CreateTeamResponse;
const CreateMNPSensitiveAPIPermissionApprovalResponse = models.CreateMNPSensitiveAPIPermissionApprovalResponse;
const RollbackMNPVersionRequest = models.RollbackMNPVersionRequest;
const ModifyPlatformAuditStatusRequest = models.ModifyPlatformAuditStatusRequest;
const ModifyMNPRequest = models.ModifyMNPRequest;
const CreateMNPDomainACLRequest = models.CreateMNPDomainACLRequest;
const DescribeTeamDetailResp = models.DescribeTeamDetailResp;
const RollbackMNPVersionResponse = models.RollbackMNPVersionResponse;
const DescribeMNPVersionPreviewRequest = models.DescribeMNPVersionPreviewRequest;
const DescribeUserDetailResponse = models.DescribeUserDetailResponse;
const CreateTeamRequest = models.CreateTeamRequest;
const CreateDomainRequest = models.CreateDomainRequest;
const CreateApplicationSensitiveAPIRequest = models.CreateApplicationSensitiveAPIRequest;
const DescribeMNPSensitiveAPIPermissionListResp = models.DescribeMNPSensitiveAPIPermissionListResp;
const ReleaseMNPVersionRequest = models.ReleaseMNPVersionRequest;
const DescribeRoleListData = models.DescribeRoleListData;
const StringData = models.StringData;
const CreateConsoleMNPVersionCompileTaskRequest = models.CreateConsoleMNPVersionCompileTaskRequest;
const ModifyTeamMemberResponse = models.ModifyTeamMemberResponse;
const DescribeGlobalDomainsResp = models.DescribeGlobalDomainsResp;
const DescribeTeamDomainListResponse = models.DescribeTeamDomainListResponse;
const DescribeMNPPrivacyRequest = models.DescribeMNPPrivacyRequest;
const GlobalDomainDescribeListInfoResp = models.GlobalDomainDescribeListInfoResp;
const DescribeMNPApprovalListResp = models.DescribeMNPApprovalListResp;
const DescribeMNPSensitiveAPIPermissionApprovalData = models.DescribeMNPSensitiveAPIPermissionApprovalData;
const DescribeMNPSensitiveAPIPermissionApprovalListResponse = models.DescribeMNPSensitiveAPIPermissionApprovalListResponse;
const QueryOnlineVersionResp = models.QueryOnlineVersionResp;
const ModifyApplicationAppUrlRequest = models.ModifyApplicationAppUrlRequest;
const DescribeMNPSensitiveAPIPermissionApprovalListRequest = models.DescribeMNPSensitiveAPIPermissionApprovalListRequest;
const ConfigureMNPPreviewRequest = models.ConfigureMNPPreviewRequest;
const CreatePlatformAuditRequest = models.CreatePlatformAuditRequest;
const DescribeMNPOfflinePackageURLRequest = models.DescribeMNPOfflinePackageURLRequest;
const CreateMNPRequest = models.CreateMNPRequest;
const DescribeApplicationMNPVersionAuditListInfoResp = models.DescribeApplicationMNPVersionAuditListInfoResp;
const DescribeTeamRequest = models.DescribeTeamRequest;
const DescribeApplicationConfigResponse = models.DescribeApplicationConfigResponse;
const ModifyDomainResponse = models.ModifyDomainResponse;
const ApplicationDetail = models.ApplicationDetail;
const DescribeMNPRequest = models.DescribeMNPRequest;
const CreateUserRequest = models.CreateUserRequest;
const DescribeGlobalDomainListRequest = models.DescribeGlobalDomainListRequest;
const CreateTeamMemberInfoResp = models.CreateTeamMemberInfoResp;
const DescribeShowCaseResp = models.DescribeShowCaseResp;
const DescribeTeamMemberListRequest = models.DescribeTeamMemberListRequest;
const PresetResp = models.PresetResp;
const DescribeTeamDomainListInfoResp = models.DescribeTeamDomainListInfoResp;
const DescribeMNPSensitiveAPIPermissionApprovalResponse = models.DescribeMNPSensitiveAPIPermissionApprovalResponse;
const DescribeApplicationConfigRequest = models.DescribeApplicationConfigRequest;
const ModifyTeamMemberRequest = models.ModifyTeamMemberRequest;
const DescribeGlobalDomainsListData = models.DescribeGlobalDomainsListData;
const ModifyUserResponse = models.ModifyUserResponse;
const DescribeConsoleMNPVersionCompileTaskRequest = models.DescribeConsoleMNPVersionCompileTaskRequest;
const DescribeMNPManagerDetailData = models.DescribeMNPManagerDetailData;
const DescribeApplicationMNPVersionAuditListPageResp = models.DescribeApplicationMNPVersionAuditListPageResp;
const DescribeUserListData = models.DescribeUserListData;
const DescribeSensitiveApiApplyDetailRequest = models.DescribeSensitiveApiApplyDetailRequest;
const CreateOnlineApplyResponse = models.CreateOnlineApplyResponse;
const DescribeApplicationRequest = models.DescribeApplicationRequest;
const SensitiveApiPageInfo = models.SensitiveApiPageInfo;
const CreateMNPVersionResponse = models.CreateMNPVersionResponse;
const ModifyMNPResponse = models.ModifyMNPResponse;
const DescribeSimpleApplicationInfoListRequest = models.DescribeSimpleApplicationInfoListRequest;
const DisableTeamDomainRequest = models.DisableTeamDomainRequest;
const DescribeMNPDomainACLResponse = models.DescribeMNPDomainACLResponse;
const ApplicationPageInfo = models.ApplicationPageInfo;
const CreateConsoleMNPVersionCompileTaskResponse = models.CreateConsoleMNPVersionCompileTaskResponse;
const DescribeMNPVersionCompileTaskResp = models.DescribeMNPVersionCompileTaskResp;
const CreateDomainParam = models.CreateDomainParam;
const DescribeTeamPageResp = models.DescribeTeamPageResp;
const DescribeApplicationMNPVersionAuditListResponse = models.DescribeApplicationMNPVersionAuditListResponse;
const ApplicationSimpleInfoResp = models.ApplicationSimpleInfoResp;
const ModifyTeamResponse = models.ModifyTeamResponse;
const DescribeSimpleTeamListResponse = models.DescribeSimpleTeamListResponse;
const DescribeMNPVersionResp = models.DescribeMNPVersionResp;
const DescribeApplicationConfigFileResponse = models.DescribeApplicationConfigFileResponse;
const BooleanInfo = models.BooleanInfo;
const DescribeUserDetailRequest = models.DescribeUserDetailRequest;
const DescribeMNPBoardRequest = models.DescribeMNPBoardRequest;
const DownloadApplicationConfigResp = models.DownloadApplicationConfigResp;
const CreateMNPDomainACLResponse = models.CreateMNPDomainACLResponse;
const DescribeOfflineMNPPackageResponse = models.DescribeOfflineMNPPackageResponse;
const SensitiveApiAuditInfoResp = models.SensitiveApiAuditInfoResp;
const DescribeTeamListRequest = models.DescribeTeamListRequest;
const DescribeMNPApprovalListResponse = models.DescribeMNPApprovalListResponse;
const ModifyApplicationAppKeyRequest = models.ModifyApplicationAppKeyRequest;
const DescribeMNPVersionRequest = models.DescribeMNPVersionRequest;
const CreateSensitiveApiApplyResponse = models.CreateSensitiveApiApplyResponse;
const ApplicationSimpleListInfoResp = models.ApplicationSimpleListInfoResp;
const CreateApplicationRequest = models.CreateApplicationRequest;
const MNPTypeDefine = models.MNPTypeDefine;
const ApplicationMNPRelInfoResp = models.ApplicationMNPRelInfoResp;
const CreateSensitiveAPIResponse = models.CreateSensitiveAPIResponse;
const DescribeTempSecret4UploadFile2CosResponse = models.DescribeTempSecret4UploadFile2CosResponse;
const DescribeSensitiveAPIAuditListRequest = models.DescribeSensitiveAPIAuditListRequest;
const DescribeMNPReleasedVersionHistoryResponse = models.DescribeMNPReleasedVersionHistoryResponse;
const DeleteApplicationSensitiveAPIRequest = models.DeleteApplicationSensitiveAPIRequest;
const DescribeDomainTeamListRequest = models.DescribeDomainTeamListRequest;
const AddTeamMemberRequest = models.AddTeamMemberRequest;
const GlobalDomainCheckResp = models.GlobalDomainCheckResp;
const DescribeMNPVersionPreviewResponse = models.DescribeMNPVersionPreviewResponse;
const DisableApplicationSensitiveAPIResponse = models.DisableApplicationSensitiveAPIResponse;
const DescribeUserResponse = models.DescribeUserResponse;
const DeleteTeamMemberRequest = models.DeleteTeamMemberRequest;
const ModifyOnlineVersionRequest = models.ModifyOnlineVersionRequest;
const UploadFileTempSecret = models.UploadFileTempSecret;
const DescribeApplicationSensitiveAPIListResp = models.DescribeApplicationSensitiveAPIListResp;
const DescribeSensitiveApiAuthListParam = models.DescribeSensitiveApiAuthListParam;
const DescribeDomainTeamListInfoResp = models.DescribeDomainTeamListInfoResp;
const DescribeRoleDetailResponse = models.DescribeRoleDetailResponse;
const CreateApplicationSensitiveAPIResponse = models.CreateApplicationSensitiveAPIResponse;
const DescribeGlobalDomainACLResponse = models.DescribeGlobalDomainACLResponse;
const VersionBoardResp = models.VersionBoardResp;
const CreatePresetKeyRequest = models.CreatePresetKeyRequest;
const DescribeTeamMembersRequest = models.DescribeTeamMembersRequest;
const CreateApplicationResponse = models.CreateApplicationResponse;
const DescribeMNPCategoryRequest = models.DescribeMNPCategoryRequest;
const DescribeMNPVersionCompileTaskSubSimpleInfo = models.DescribeMNPVersionCompileTaskSubSimpleInfo;
const DeleteApplicationSensitiveAPIResponse = models.DeleteApplicationSensitiveAPIResponse;
const ModifyMNPVersionPreviewResponse = models.ModifyMNPVersionPreviewResponse;
const EnableApplicationSensitiveAPIRequest = models.EnableApplicationSensitiveAPIRequest;
const DescribeMNPManagerDetailResponse = models.DescribeMNPManagerDetailResponse;
const DeleteGlobalDomainRequest = models.DeleteGlobalDomainRequest;
const GlobalDomainDeleteResp = models.GlobalDomainDeleteResp;
const DeleteGlobalDomainResponse = models.DeleteGlobalDomainResponse;
const ModifySensitiveAPIAuditStatusResponse = models.ModifySensitiveAPIAuditStatusResponse;
const DescribeMNPListRequest = models.DescribeMNPListRequest;
const DescribeMNPPreviewRequest = models.DescribeMNPPreviewRequest;
const CreateGlobalDomainResp = models.CreateGlobalDomainResp;
const CreateGlobalDomainACLRequest = models.CreateGlobalDomainACLRequest;
const DescribeApplicationSensitiveAPIListRequest = models.DescribeApplicationSensitiveAPIListRequest;
const DescribeTeamMemberListResponse = models.DescribeTeamMemberListResponse;
const DescribeTeamMemberListPageResp = models.DescribeTeamMemberListPageResp;


/**
 * tcmpp client
 * @class
 */
class TcmppClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcmpp.intl.tencentcloudapi.com", "2024-08-01", credential, region, profile);
    }
    
    /**
     * This API is used to query if the mini program version is created successfully
     * @param {DescribeConsoleMNPVersionCompileTaskRequest} req
     * @param {function(string, DescribeConsoleMNPVersionCompileTaskResponse):void} cb
     * @public
     */
    DescribeConsoleMNPVersionCompileTask(req, cb) {
        let resp = new DescribeConsoleMNPVersionCompileTaskResponse();
        this.request("DescribeConsoleMNPVersionCompileTask", req, resp, cb);
    }

    /**
     * This API is used to query the mini program type list
     * @param {DescribeMNPTypeRequest} req
     * @param {function(string, DescribeMNPTypeResponse):void} cb
     * @public
     */
    DescribeMNPType(req, cb) {
        let resp = new DescribeMNPTypeResponse();
        this.request("DescribeMNPType", req, resp, cb);
    }

    /**
     * This API is used to apply for sensitive API permissions
     * @param {CreateSensitiveApiApplyRequest} req
     * @param {function(string, CreateSensitiveApiApplyResponse):void} cb
     * @public
     */
    CreateSensitiveApiApply(req, cb) {
        let resp = new CreateSensitiveApiApplyResponse();
        this.request("CreateSensitiveApiApply", req, resp, cb);
    }

    /**
     * This API is used to query application configuration information
     * @param {DescribeApplicationConfigRequest} req
     * @param {function(string, DescribeApplicationConfigResponse):void} cb
     * @public
     */
    DescribeApplicationConfig(req, cb) {
        let resp = new DescribeApplicationConfigResponse();
        this.request("DescribeApplicationConfig", req, resp, cb);
    }

    /**
     * This API is used to approve or reject the sensitive API permission application. 
     * @param {ProcessMNPSensitiveAPIPermissionApprovalRequest} req
     * @param {function(string, ProcessMNPSensitiveAPIPermissionApprovalResponse):void} cb
     * @public
     */
    ProcessMNPSensitiveAPIPermissionApproval(req, cb) {
        let resp = new ProcessMNPSensitiveAPIPermissionApprovalResponse();
        this.request("ProcessMNPSensitiveAPIPermissionApproval", req, resp, cb);
    }

    /**
     * This API is used to delete domains from allowlist or blocklist
     * @param {DeleteGlobalDomainRequest} req
     * @param {function(string, DeleteGlobalDomainResponse):void} cb
     * @public
     */
    DeleteGlobalDomain(req, cb) {
        let resp = new DeleteGlobalDomainResponse();
        this.request("DeleteGlobalDomain", req, resp, cb);
    }

    /**
     * This API is used to add domains to allowlist or blocklist
     * @param {CreateGlobalDomainRequest} req
     * @param {function(string, CreateGlobalDomainResponse):void} cb
     * @public
     */
    CreateGlobalDomain(req, cb) {
        let resp = new CreateGlobalDomainResponse();
        this.request("CreateGlobalDomain", req, resp, cb);
    }

    /**
     * This API is used to query the release version history
     * @param {DescribeOnlineVersionRequest} req
     * @param {function(string, DescribeOnlineVersionResponse):void} cb
     * @public
     */
    DescribeOnlineVersion(req, cb) {
        let resp = new DescribeOnlineVersionResponse();
        this.request("DescribeOnlineVersion", req, resp, cb);
    }

    /**
     * This API is used to query details of a user. 
     * @param {DescribeUserRequest} req
     * @param {function(string, DescribeUserResponse):void} cb
     * @public
     */
    DescribeUser(req, cb) {
        let resp = new DescribeUserResponse();
        this.request("DescribeUser", req, resp, cb);
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
     * This API is used to query if the domain is in the allowlist or blocklist
     * @param {CheckGlobalDomainRequest} req
     * @param {function(string, CheckGlobalDomainResponse):void} cb
     * @public
     */
    CheckGlobalDomain(req, cb) {
        let resp = new CheckGlobalDomainResponse();
        this.request("CheckGlobalDomain", req, resp, cb);
    }

    /**
     * This API is used to query the mini program version management information
     * @param {DescribeMNPBoardRequest} req
     * @param {function(string, DescribeMNPBoardResponse):void} cb
     * @public
     */
    DescribeMNPBoard(req, cb) {
        let resp = new DescribeMNPBoardResponse();
        this.request("DescribeMNPBoard", req, resp, cb);
    }

    /**
     * This API is used to approve or reject the sensitive API permission application
     * @param {ModifySensitiveAPIAuditStatusRequest} req
     * @param {function(string, ModifySensitiveAPIAuditStatusResponse):void} cb
     * @public
     */
    ModifySensitiveAPIAuditStatus(req, cb) {
        let resp = new ModifySensitiveAPIAuditStatusResponse();
        this.request("ModifySensitiveAPIAuditStatus", req, resp, cb);
    }

    /**
     * This API is used to query offline mini program packages
     * @param {DescribeOfflineMNPPackageRequest} req
     * @param {function(string, DescribeOfflineMNPPackageResponse):void} cb
     * @public
     */
    DescribeOfflineMNPPackage(req, cb) {
        let resp = new DescribeOfflineMNPPackageResponse();
        this.request("DescribeOfflineMNPPackage", req, resp, cb);
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
     * This API is used to query the sensitive API permission list
     * @param {DescribeSensitiveApiAuthListRequest} req
     * @param {function(string, DescribeSensitiveApiAuthListResponse):void} cb
     * @public
     */
    DescribeSensitiveApiAuthList(req, cb) {
        let resp = new DescribeSensitiveApiAuthListResponse();
        this.request("DescribeSensitiveApiAuthList", req, resp, cb);
    }

    /**
     * This API is used to query mini program details
     * @param {DescribeMNPDetailRequest} req
     * @param {function(string, DescribeMNPDetailResponse):void} cb
     * @public
     */
    DescribeMNPDetail(req, cb) {
        let resp = new DescribeMNPDetailResponse();
        this.request("DescribeMNPDetail", req, resp, cb);
    }

    /**
     * This API is used to add team members
     * @param {CreateTeamMemberRequest} req
     * @param {function(string, CreateTeamMemberResponse):void} cb
     * @public
     */
    CreateTeamMember(req, cb) {
        let resp = new CreateTeamMemberResponse();
        this.request("CreateTeamMember", req, resp, cb);
    }

    /**
     * This API is used to delete sensitive API
     * @param {DeleteSensitiveAPIRequest} req
     * @param {function(string, DeleteSensitiveAPIResponse):void} cb
     * @public
     */
    DeleteSensitiveAPI(req, cb) {
        let resp = new DeleteSensitiveAPIResponse();
        this.request("DeleteSensitiveAPI", req, resp, cb);
    }

    /**
     * This API is used to set a sensitive API to Restricted.
     * @param {DisableApplicationSensitiveAPIRequest} req
     * @param {function(string, DisableApplicationSensitiveAPIResponse):void} cb
     * @public
     */
    DisableApplicationSensitiveAPI(req, cb) {
        let resp = new DisableApplicationSensitiveAPIResponse();
        this.request("DisableApplicationSensitiveAPI", req, resp, cb);
    }

    /**
     * This API is used to remove the mini program
     * @param {ModifyMNPStatusOfflineRequest} req
     * @param {function(string, ModifyMNPStatusOfflineResponse):void} cb
     * @public
     */
    ModifyMNPStatusOffline(req, cb) {
        let resp = new ModifyMNPStatusOfflineResponse();
        this.request("ModifyMNPStatusOffline", req, resp, cb);
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
     * This API is used to query the mini program list
     * @param {DescribeMNPManagerListRequest} req
     * @param {function(string, DescribeMNPManagerListResponse):void} cb
     * @public
     */
    DescribeMNPManagerList(req, cb) {
        let resp = new DescribeMNPManagerListResponse();
        this.request("DescribeMNPManagerList", req, resp, cb);
    }

    /**
     * This API is used to obtain a temporary key for file uploads
     * @param {DescribeTempSecret4UploadFile2CosRequest} req
     * @param {function(string, DescribeTempSecret4UploadFile2CosResponse):void} cb
     * @public
     */
    DescribeTempSecret4UploadFile2Cos(req, cb) {
        let resp = new DescribeTempSecret4UploadFile2CosResponse();
        this.request("DescribeTempSecret4UploadFile2Cos", req, resp, cb);
    }

    /**
     * This API is used to query sensitive API approval list
     * @param {DescribeSensitiveAPIAuditListRequest} req
     * @param {function(string, DescribeSensitiveAPIAuditListResponse):void} cb
     * @public
     */
    DescribeSensitiveAPIAuditList(req, cb) {
        let resp = new DescribeSensitiveAPIAuditListResponse();
        this.request("DescribeSensitiveAPIAuditList", req, resp, cb);
    }

    /**
     * This API is used to query details of a mini program. 
     * @param {DescribeMNPRequest} req
     * @param {function(string, DescribeMNPResponse):void} cb
     * @public
     */
    DescribeMNP(req, cb) {
        let resp = new DescribeMNPResponse();
        this.request("DescribeMNP", req, resp, cb);
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
     * This API is used to create a user
     * @param {CreateUserRequest} req
     * @param {function(string, CreateUserResponse):void} cb
     * @public
     */
    CreateUser(req, cb) {
        let resp = new CreateUserResponse();
        this.request("CreateUser", req, resp, cb);
    }

    /**
     * This API is used to query details of an application. 
     * @param {DescribeApplicationRequest} req
     * @param {function(string, DescribeApplicationResponse):void} cb
     * @public
     */
    DescribeApplication(req, cb) {
        let resp = new DescribeApplicationResponse();
        this.request("DescribeApplication", req, resp, cb);
    }

    /**
     * This API is used to submit mini program version for approval
     * @param {CreatePlatformAuditRequest} req
     * @param {function(string, CreatePlatformAuditResponse):void} cb
     * @public
     */
    CreatePlatformAudit(req, cb) {
        let resp = new CreatePlatformAuditResponse();
        this.request("CreatePlatformAudit", req, resp, cb);
    }

    /**
     * This API is used to query the user list
     * @param {DescribeUserListRequest} req
     * @param {function(string, DescribeUserListResponse):void} cb
     * @public
     */
    DescribeUserList(req, cb) {
        let resp = new DescribeUserListResponse();
        this.request("DescribeUserList", req, resp, cb);
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
     * This API is used to query the list of roles. 
     * @param {DescribeRoleListRequest} req
     * @param {function(string, DescribeRoleListResponse):void} cb
     * @public
     */
    DescribeRoleList(req, cb) {
        let resp = new DescribeRoleListResponse();
        this.request("DescribeRoleList", req, resp, cb);
    }

    /**
     * This API is used to query the team information list
     * @param {DescribeSimpleTeamListRequest} req
     * @param {function(string, DescribeSimpleTeamListResponse):void} cb
     * @public
     */
    DescribeSimpleTeamList(req, cb) {
        let resp = new DescribeSimpleTeamListResponse();
        this.request("DescribeSimpleTeamList", req, resp, cb);
    }

    /**
     * This API is used to query the list of teams. 
     * @param {DescribeTeamListRequest} req
     * @param {function(string, DescribeTeamListResponse):void} cb
     * @public
     */
    DescribeTeamList(req, cb) {
        let resp = new DescribeTeamListResponse();
        this.request("DescribeTeamList", req, resp, cb);
    }

    /**
     * This API is used to reset user password
     * @param {ModifyUserPasswordRequest} req
     * @param {function(string, ModifyUserPasswordResponse):void} cb
     * @public
     */
    ModifyUserPassword(req, cb) {
        let resp = new ModifyUserPasswordResponse();
        this.request("ModifyUserPassword", req, resp, cb);
    }

    /**
     * This API is used to query all sensitive APIs list
     * @param {DescribeSensitiveAPIListRequest} req
     * @param {function(string, DescribeSensitiveAPIListResponse):void} cb
     * @public
     */
    DescribeSensitiveAPIList(req, cb) {
        let resp = new DescribeSensitiveAPIListResponse();
        this.request("DescribeSensitiveAPIList", req, resp, cb);
    }

    /**
     * This API is used to delete a team
     * @param {DeleteTeamRequest} req
     * @param {function(string, DeleteTeamResponse):void} cb
     * @public
     */
    DeleteTeam(req, cb) {
        let resp = new DeleteTeamResponse();
        this.request("DeleteTeam", req, resp, cb);
    }

    /**
     * This API is used to add a sensitive API
     * @param {CreateSensitiveAPIRequest} req
     * @param {function(string, CreateSensitiveAPIResponse):void} cb
     * @public
     */
    CreateSensitiveAPI(req, cb) {
        let resp = new CreateSensitiveAPIResponse();
        this.request("CreateSensitiveAPI", req, resp, cb);
    }

    /**
     * This API is used to query user details
     * @param {DescribeUserDetailRequest} req
     * @param {function(string, DescribeUserDetailResponse):void} cb
     * @public
     */
    DescribeUserDetail(req, cb) {
        let resp = new DescribeUserDetailResponse();
        this.request("DescribeUserDetail", req, resp, cb);
    }

    /**
     * This API is used to query the list of mini program types.
     * @param {DescribeMNPCategoryRequest} req
     * @param {function(string, DescribeMNPCategoryResponse):void} cb
     * @public
     */
    DescribeMNPCategory(req, cb) {
        let resp = new DescribeMNPCategoryResponse();
        this.request("DescribeMNPCategory", req, resp, cb);
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
     * This API is used to configure the mini program preview version
     * @param {ModifyMNPVersionPreviewRequest} req
     * @param {function(string, ModifyMNPVersionPreviewResponse):void} cb
     * @public
     */
    ModifyMNPVersionPreview(req, cb) {
        let resp = new ModifyMNPVersionPreviewResponse();
        this.request("ModifyMNPVersionPreview", req, resp, cb);
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
     * This API is used to query the list of application. 
     * @param {DescribeApplicationListRequest} req
     * @param {function(string, DescribeApplicationListResponse):void} cb
     * @public
     */
    DescribeApplicationList(req, cb) {
        let resp = new DescribeApplicationListResponse();
        this.request("DescribeApplicationList", req, resp, cb);
    }

    /**
     * This API is used to create a permission request to allow a mini program calling sensitive APIs.
     * @param {CreateMNPSensitiveAPIPermissionApprovalRequest} req
     * @param {function(string, CreateMNPSensitiveAPIPermissionApprovalResponse):void} cb
     * @public
     */
    CreateMNPSensitiveAPIPermissionApproval(req, cb) {
        let resp = new CreateMNPSensitiveAPIPermissionApprovalResponse();
        this.request("CreateMNPSensitiveAPIPermissionApproval", req, resp, cb);
    }

    /**
     * This API is used to query the list of mini programs.
     * @param {DescribeMNPListRequest} req
     * @param {function(string, DescribeMNPListResponse):void} cb
     * @public
     */
    DescribeMNPList(req, cb) {
        let resp = new DescribeMNPListResponse();
        this.request("DescribeMNPList", req, resp, cb);
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
     * This API is used to disable the company’s domain name that obtained the ICP filing
     * @param {DisableTeamDomainRequest} req
     * @param {function(string, DisableTeamDomainResponse):void} cb
     * @public
     */
    DisableTeamDomain(req, cb) {
        let resp = new DisableTeamDomainResponse();
        this.request("DisableTeamDomain", req, resp, cb);
    }

    /**
     * This API is used to create a mini program
     * @param {CreateMNPRequest} req
     * @param {function(string, CreateMNPResponse):void} cb
     * @public
     */
    CreateMNP(req, cb) {
        let resp = new CreateMNPResponse();
        this.request("CreateMNP", req, resp, cb);
    }

    /**
     * This API is used to query the approval list of the mini program versions
     * @param {DescribeApplicationMNPVersionAuditListRequest} req
     * @param {function(string, DescribeApplicationMNPVersionAuditListResponse):void} cb
     * @public
     */
    DescribeApplicationMNPVersionAuditList(req, cb) {
        let resp = new DescribeApplicationMNPVersionAuditListResponse();
        this.request("DescribeApplicationMNPVersionAuditList", req, resp, cb);
    }

    /**
     * This API is used to query the details of the mini program preview version
     * @param {DescribeMNPVersionPreviewRequest} req
     * @param {function(string, DescribeMNPVersionPreviewResponse):void} cb
     * @public
     */
    DescribeMNPVersionPreview(req, cb) {
        let resp = new DescribeMNPVersionPreviewResponse();
        this.request("DescribeMNPVersionPreview", req, resp, cb);
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
     * This API is used to edit the mini program domain information
     * @param {ModifyDomainRequest} req
     * @param {function(string, ModifyDomainResponse):void} cb
     * @public
     */
    ModifyDomain(req, cb) {
        let resp = new ModifyDomainResponse();
        this.request("ModifyDomain", req, resp, cb);
    }

    /**
     * This API is used to add a new mini program version
     * @param {CreateConsoleMNPVersionCompileTaskRequest} req
     * @param {function(string, CreateConsoleMNPVersionCompileTaskResponse):void} cb
     * @public
     */
    CreateConsoleMNPVersionCompileTask(req, cb) {
        let resp = new CreateConsoleMNPVersionCompileTaskResponse();
        this.request("CreateConsoleMNPVersionCompileTask", req, resp, cb);
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
     * This API is used to modify mini program information
     * @param {ModifyMNPRequest} req
     * @param {function(string, ModifyMNPResponse):void} cb
     * @public
     */
    ModifyMNP(req, cb) {
        let resp = new ModifyMNPResponse();
        this.request("ModifyMNP", req, resp, cb);
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
     * This API is used to change application information
     * @param {ModifyApplicationRequest} req
     * @param {function(string, ModifyApplicationResponse):void} cb
     * @public
     */
    ModifyApplication(req, cb) {
        let resp = new ModifyApplicationResponse();
        this.request("ModifyApplication", req, resp, cb);
    }

    /**
     * This API is used to query team member list
     * @param {DescribeTeamMemberListRequest} req
     * @param {function(string, DescribeTeamMemberListResponse):void} cb
     * @public
     */
    DescribeTeamMemberList(req, cb) {
        let resp = new DescribeTeamMemberListResponse();
        this.request("DescribeTeamMemberList", req, resp, cb);
    }

    /**
     * This API is used to query the domain name allowlist / blocklist of a mini program. 
     * @param {DescribeMNPDomainACLRequest} req
     * @param {function(string, DescribeMNPDomainACLResponse):void} cb
     * @public
     */
    DescribeMNPDomainACL(req, cb) {
        let resp = new DescribeMNPDomainACLResponse();
        this.request("DescribeMNPDomainACL", req, resp, cb);
    }

    /**
     * This API is used to create a mini program service domain
     * @param {CreateDomainRequest} req
     * @param {function(string, CreateDomainResponse):void} cb
     * @public
     */
    CreateDomain(req, cb) {
        let resp = new CreateDomainResponse();
        this.request("CreateDomain", req, resp, cb);
    }

    /**
     * This API is used to add a domain name to the allowlist/blocklist of a mini program.
     * @param {CreateMNPDomainACLRequest} req
     * @param {function(string, CreateMNPDomainACLResponse):void} cb
     * @public
     */
    CreateMNPDomainACL(req, cb) {
        let resp = new CreateMNPDomainACLResponse();
        this.request("CreateMNPDomainACL", req, resp, cb);
    }

    /**
     * This API is used to query mini program details in the mini program list
     * @param {DescribeMNPManagerDetailRequest} req
     * @param {function(string, DescribeMNPManagerDetailResponse):void} cb
     * @public
     */
    DescribeMNPManagerDetail(req, cb) {
        let resp = new DescribeMNPManagerDetailResponse();
        this.request("DescribeMNPManagerDetail", req, resp, cb);
    }

    /**
     * This API is used to query a specified team’s domains that obtained ICP filing
     * @param {DescribeTeamDomainListRequest} req
     * @param {function(string, DescribeTeamDomainListResponse):void} cb
     * @public
     */
    DescribeTeamDomainList(req, cb) {
        let resp = new DescribeTeamDomainListResponse();
        this.request("DescribeTeamDomainList", req, resp, cb);
    }

    /**
     * This API is used to modify team member information.
     * @param {ModifyTeamMemberRequest} req
     * @param {function(string, ModifyTeamMemberResponse):void} cb
     * @public
     */
    ModifyTeamMember(req, cb) {
        let resp = new ModifyTeamMemberResponse();
        this.request("ModifyTeamMember", req, resp, cb);
    }

    /**
     * This API is used to change team information
     * @param {ModifyTeamRequest} req
     * @param {function(string, ModifyTeamResponse):void} cb
     * @public
     */
    ModifyTeam(req, cb) {
        let resp = new ModifyTeamResponse();
        this.request("ModifyTeam", req, resp, cb);
    }

    /**
     * This API is used to delete the mini program
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
     * This API is used to query the mini program version management information
     * @param {DescribeMNPAllStageVersionsRequest} req
     * @param {function(string, DescribeMNPAllStageVersionsResponse):void} cb
     * @public
     */
    DescribeMNPAllStageVersions(req, cb) {
        let resp = new DescribeMNPAllStageVersionsResponse();
        this.request("DescribeMNPAllStageVersions", req, resp, cb);
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
     * This API is used to query the list of teams with domains that obtained the ICP filing
     * @param {DescribeDomainTeamListRequest} req
     * @param {function(string, DescribeDomainTeamListResponse):void} cb
     * @public
     */
    DescribeDomainTeamList(req, cb) {
        let resp = new DescribeDomainTeamListResponse();
        this.request("DescribeDomainTeamList", req, resp, cb);
    }

    /**
     * This API is used to release the mini program
     * @param {CreateOnlineApplyRequest} req
     * @param {function(string, CreateOnlineApplyResponse):void} cb
     * @public
     */
    CreateOnlineApply(req, cb) {
        let resp = new CreateOnlineApplyResponse();
        this.request("CreateOnlineApply", req, resp, cb);
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
     * This API is used to delete a user
     * @param {DeleteUserRequest} req
     * @param {function(string, DeleteUserResponse):void} cb
     * @public
     */
    DeleteUser(req, cb) {
        let resp = new DeleteUserResponse();
        this.request("DeleteUser", req, resp, cb);
    }

    /**
     * This API is used to modify domain allowlist or blocklist
     * @param {ModifyGlobalDomainRequest} req
     * @param {function(string, ModifyGlobalDomainResponse):void} cb
     * @public
     */
    ModifyGlobalDomain(req, cb) {
        let resp = new ModifyGlobalDomainResponse();
        this.request("ModifyGlobalDomain", req, resp, cb);
    }

    /**
     * This API is used to obtain the encryption key
     * @param {CreatePresetKeyRequest} req
     * @param {function(string, CreatePresetKeyResponse):void} cb
     * @public
     */
    CreatePresetKey(req, cb) {
        let resp = new CreatePresetKeyResponse();
        this.request("CreatePresetKey", req, resp, cb);
    }

    /**
     * This API is used to query the details of a mini program preview version.
     * @param {DescribeMNPPreviewRequest} req
     * @param {function(string, DescribeMNPPreviewResponse):void} cb
     * @public
     */
    DescribeMNPPreview(req, cb) {
        let resp = new DescribeMNPPreviewResponse();
        this.request("DescribeMNPPreview", req, resp, cb);
    }

    /**
     * This API is used to query the domain name list configured for the mini program
     * @param {DescribeDomainInfoRequest} req
     * @param {function(string, DescribeDomainInfoResponse):void} cb
     * @public
     */
    DescribeDomainInfo(req, cb) {
        let resp = new DescribeDomainInfoResponse();
        this.request("DescribeDomainInfo", req, resp, cb);
    }

    /**
     * This API is used to query the result of the task to create a mini program version.
     * @param {DescribeMNPVersionRequest} req
     * @param {function(string, DescribeMNPVersionResponse):void} cb
     * @public
     */
    DescribeMNPVersion(req, cb) {
        let resp = new DescribeMNPVersionResponse();
        this.request("DescribeMNPVersion", req, resp, cb);
    }

    /**
     * This API is used to query the member list of a specified team
     * @param {DescribeTeamMembersRequest} req
     * @param {function(string, DescribeTeamMembersResponse):void} cb
     * @public
     */
    DescribeTeamMembers(req, cb) {
        let resp = new DescribeTeamMembersResponse();
        this.request("DescribeTeamMembers", req, resp, cb);
    }

    /**
     * This API is used to change the app download address
     * @param {ModifyApplicationAppUrlRequest} req
     * @param {function(string, ModifyApplicationAppUrlResponse):void} cb
     * @public
     */
    ModifyApplicationAppUrl(req, cb) {
        let resp = new ModifyApplicationAppUrlResponse();
        this.request("ModifyApplicationAppUrl", req, resp, cb);
    }

    /**
     * This API is used to delete applications
     * @param {DeleteApplicationRequest} req
     * @param {function(string, DeleteApplicationResponse):void} cb
     * @public
     */
    DeleteApplication(req, cb) {
        let resp = new DeleteApplicationResponse();
        this.request("DeleteApplication", req, resp, cb);
    }

    /**
     * This API is used to modify the application package name
     * @param {ModifyApplicationAppKeyRequest} req
     * @param {function(string, ModifyApplicationAppKeyResponse):void} cb
     * @public
     */
    ModifyApplicationAppKey(req, cb) {
        let resp = new ModifyApplicationAppKeyResponse();
        this.request("ModifyApplicationAppKey", req, resp, cb);
    }

    /**
     * This API is used to query role permission information
     * @param {DescribeRoleDetailRequest} req
     * @param {function(string, DescribeRoleDetailResponse):void} cb
     * @public
     */
    DescribeRoleDetail(req, cb) {
        let resp = new DescribeRoleDetailResponse();
        this.request("DescribeRoleDetail", req, resp, cb);
    }

    /**
     * This API is used to query details of a team. 
     * @param {DescribeTeamRequest} req
     * @param {function(string, DescribeTeamResponse):void} cb
     * @public
     */
    DescribeTeam(req, cb) {
        let resp = new DescribeTeamResponse();
        this.request("DescribeTeam", req, resp, cb);
    }

    /**
     * This API is used to configure the preview version of a mini program.
     * @param {ConfigureMNPPreviewRequest} req
     * @param {function(string, ConfigureMNPPreviewResponse):void} cb
     * @public
     */
    ConfigureMNPPreview(req, cb) {
        let resp = new ConfigureMNPPreviewResponse();
        this.request("ConfigureMNPPreview", req, resp, cb);
    }

    /**
     * This API is used to query domain allowlist and blocklist
     * @param {DescribeGlobalDomainListRequest} req
     * @param {function(string, DescribeGlobalDomainListResponse):void} cb
     * @public
     */
    DescribeGlobalDomainList(req, cb) {
        let resp = new DescribeGlobalDomainListResponse();
        this.request("DescribeGlobalDomainList", req, resp, cb);
    }

    /**
     * This API is used to query application list information
     * @param {DescribeSimpleApplicationInfoListRequest} req
     * @param {function(string, DescribeSimpleApplicationInfoListResponse):void} cb
     * @public
     */
    DescribeSimpleApplicationInfoList(req, cb) {
        let resp = new DescribeSimpleApplicationInfoListResponse();
        this.request("DescribeSimpleApplicationInfoList", req, resp, cb);
    }

    /**
     * This API is used to query sensitive API permission approval details
     * @param {DescribeSensitiveApiApplyDetailRequest} req
     * @param {function(string, DescribeSensitiveApiApplyDetailResponse):void} cb
     * @public
     */
    DescribeSensitiveApiApplyDetail(req, cb) {
        let resp = new DescribeSensitiveApiApplyDetailResponse();
        this.request("DescribeSensitiveApiApplyDetail", req, resp, cb);
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
     * This API is used to approve or reject the release of the mini program version
     * @param {ModifyPlatformAuditStatusRequest} req
     * @param {function(string, ModifyPlatformAuditStatusResponse):void} cb
     * @public
     */
    ModifyPlatformAuditStatus(req, cb) {
        let resp = new ModifyPlatformAuditStatusResponse();
        this.request("ModifyPlatformAuditStatus", req, resp, cb);
    }

    /**
     * This API is used to query the details filled in the service description
     * @param {DescribeMNPPrivacyRequest} req
     * @param {function(string, DescribeMNPPrivacyResponse):void} cb
     * @public
     */
    DescribeMNPPrivacy(req, cb) {
        let resp = new DescribeMNPPrivacyResponse();
        this.request("DescribeMNPPrivacy", req, resp, cb);
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
     * This API is used to modify user information.
     * @param {ModifyUserRequest} req
     * @param {function(string, ModifyUserResponse):void} cb
     * @public
     */
    ModifyUser(req, cb) {
        let resp = new ModifyUserResponse();
        this.request("ModifyUser", req, resp, cb);
    }

    /**
     * This API is used to rollback a mini program release version
     * @param {ModifyOnlineVersionRequest} req
     * @param {function(string, ModifyOnlineVersionResponse):void} cb
     * @public
     */
    ModifyOnlineVersion(req, cb) {
        let resp = new ModifyOnlineVersionResponse();
        this.request("ModifyOnlineVersion", req, resp, cb);
    }

    /**
     * This API is used to delete a team member
     * @param {DeleteTeamMemberRequest} req
     * @param {function(string, DeleteTeamMemberResponse):void} cb
     * @public
     */
    DeleteTeamMember(req, cb) {
        let resp = new DeleteTeamMemberResponse();
        this.request("DeleteTeamMember", req, resp, cb);
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
module.exports = TcmppClient;
