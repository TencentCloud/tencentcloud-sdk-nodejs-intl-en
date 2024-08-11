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
const CreatePresetKeyResponse = models.CreatePresetKeyResponse;
const DescribeOnlineVersionRequest = models.DescribeOnlineVersionRequest;
const DescribeMNPVersionCompileTaskExtInfo = models.DescribeMNPVersionCompileTaskExtInfo;
const DescribeOfflineMNPPackageRequest = models.DescribeOfflineMNPPackageRequest;
const DescribeRoleDetailRequest = models.DescribeRoleDetailRequest;
const DescribeSensitiveApiAuthListRequest = models.DescribeSensitiveApiAuthListRequest;
const ModifyUserPasswordRequest = models.ModifyUserPasswordRequest;
const ModifyMNPStatusOfflineResponse = models.ModifyMNPStatusOfflineResponse;
const DescribeDomainTeamListPageResp = models.DescribeDomainTeamListPageResp;
const DeleteUserRequest = models.DeleteUserRequest;
const ModifyPlatformAuditStatusResponse = models.ModifyPlatformAuditStatusResponse;
const DescribeRoleListResponse = models.DescribeRoleListResponse;
const ModifyOnlineVersionResponse = models.ModifyOnlineVersionResponse;
const DescribeTeamMemberListRequest = models.DescribeTeamMemberListRequest;
const DeleteTeamMemberResponse = models.DeleteTeamMemberResponse;
const ModifyApplicationResponse = models.ModifyApplicationResponse;
const DescribeTeamDomainListRequest = models.DescribeTeamDomainListRequest;
const DescribeSensitiveAPIAuditListResponse = models.DescribeSensitiveAPIAuditListResponse;
const ModifyMNPStatusOfflineRequest = models.ModifyMNPStatusOfflineRequest;
const DescribeSensitiveAPIAuditListRequest = models.DescribeSensitiveAPIAuditListRequest;
const DeleteTeamResponse = models.DeleteTeamResponse;
const DescribeRevertOnlineVersionPageResp = models.DescribeRevertOnlineVersionPageResp;
const CreateOnlineApplyRequest = models.CreateOnlineApplyRequest;
const CheckGlobalDomainRequest = models.CheckGlobalDomainRequest;
const DescribeTeamMemberInfoResp = models.DescribeTeamMemberInfoResp;
const ModifyMNPVersionPreviewRequest = models.ModifyMNPVersionPreviewRequest;
const DescribeMNPManagerListResp = models.DescribeMNPManagerListResp;
const DescribeSensitiveApiApplyDetailResponse = models.DescribeSensitiveApiApplyDetailResponse;
const DescribeSimpleApplicationInfoListResponse = models.DescribeSimpleApplicationInfoListResponse;
const DeleteMNPResponse = models.DeleteMNPResponse;
const GlobalDomainDescribeListPageResp = models.GlobalDomainDescribeListPageResp;
const DescribeShowCaseResp = models.DescribeShowCaseResp;
const DescribeApplicationListRequest = models.DescribeApplicationListRequest;
const DeleteTeamRequest = models.DeleteTeamRequest;
const DescribeRoleListRequest = models.DescribeRoleListRequest;
const StringData = models.StringData;
const CreateTeamMemberResponse = models.CreateTeamMemberResponse;
const DescribeMNPDetailResponse = models.DescribeMNPDetailResponse;
const DeleteSensitiveAPIResponse = models.DeleteSensitiveAPIResponse;
const ShowCaseRelAppInfo = models.ShowCaseRelAppInfo;
const DescribeMNPTypeRequest = models.DescribeMNPTypeRequest;
const DescribeDomainInfoRequest = models.DescribeDomainInfoRequest;
const DescribeMNPTypeResponse = models.DescribeMNPTypeResponse;
const DeleteApplicationResponse = models.DeleteApplicationResponse;
const DescribeMNPManagerListResponse = models.DescribeMNPManagerListResponse;
const DescribeMNPPrivacyResponse = models.DescribeMNPPrivacyResponse;
const CreateSensitiveAPIRequest = models.CreateSensitiveAPIRequest;
const DescribeUserDetailResp = models.DescribeUserDetailResp;
const DescribeSensitiveApiAuthPageParam = models.DescribeSensitiveApiAuthPageParam;
const DescribeApplicationListResponse = models.DescribeApplicationListResponse;
const DisableTeamDomainResponse = models.DisableTeamDomainResponse;
const ModifyGlobalDomainResponse = models.ModifyGlobalDomainResponse;
const DescribeRoleListResp = models.DescribeRoleListResp;
const DescribeTeamListInfoResp = models.DescribeTeamListInfoResp;
const DeleteMNPRequest = models.DeleteMNPRequest;
const DescribeRoleDetailResp = models.DescribeRoleDetailResp;
const DescribeSimpleTeamListResp = models.DescribeSimpleTeamListResp;
const DescribeMNPManagerListRequest = models.DescribeMNPManagerListRequest;
const ApplicationSimpleInfo = models.ApplicationSimpleInfo;
const DescribeTeamListResponse = models.DescribeTeamListResponse;
const DescribeUserListResp = models.DescribeUserListResp;
const CreateTeamMemberRequest = models.CreateTeamMemberRequest;
const DescribeTeamMembersInfoResp = models.DescribeTeamMembersInfoResp;
const DescribeMNPDetailRequest = models.DescribeMNPDetailRequest;
const DeleteSensitiveAPIRequest = models.DeleteSensitiveAPIRequest;
const CreateTeamMemberInfoResp = models.CreateTeamMemberInfoResp;
const DescribeApplicationMNPVersionAuditListRequest = models.DescribeApplicationMNPVersionAuditListRequest;
const ModifyApplicationAppKeyResponse = models.ModifyApplicationAppKeyResponse;
const SimpleStringKeyValue = models.SimpleStringKeyValue;
const ModifyTeamRequest = models.ModifyTeamRequest;
const CreateTeamMemberInfoReq = models.CreateTeamMemberInfoReq;
const ModifyApplicationAppUrlResponse = models.ModifyApplicationAppUrlResponse;
const DownloadApplicationConfigResp = models.DownloadApplicationConfigResp;
const DescribeTempSecret4UploadFile2CosRequest = models.DescribeTempSecret4UploadFile2CosRequest;
const CreateUserResponse = models.CreateUserResponse;
const DescribeDomainTeamListResponse = models.DescribeDomainTeamListResponse;
const DescribeSimpleTeamListRequest = models.DescribeSimpleTeamListRequest;
const DescribeUserListRequest = models.DescribeUserListRequest;
const DeleteUserResponse = models.DeleteUserResponse;
const CreatePlatformAuditResponse = models.CreatePlatformAuditResponse;
const DescribeOnlineVersionResponse = models.DescribeOnlineVersionResponse;
const DescribeApplicationResponse = models.DescribeApplicationResponse;
const CheckGlobalDomainResponse = models.CheckGlobalDomainResponse;
const CreateGlobalDomainResponse = models.CreateGlobalDomainResponse;
const DescribeDomainInfoParam = models.DescribeDomainInfoParam;
const DisableEnterpriseDomainResp = models.DisableEnterpriseDomainResp;
const ResourceIdInfo = models.ResourceIdInfo;
const ModifyTeamMemberRequest = models.ModifyTeamMemberRequest;
const CreateGlobalDomainRequest = models.CreateGlobalDomainRequest;
const DescribeMNPBoardResponse = models.DescribeMNPBoardResponse;
const ModifyUserRequest = models.ModifyUserRequest;
const CreateMNPResponse = models.CreateMNPResponse;
const DescribeUserListResponse = models.DescribeUserListResponse;
const ApplicationInfo = models.ApplicationInfo;
const DescribeTeamDomainListPageResp = models.DescribeTeamDomainListPageResp;
const ModifyUserPasswordResponse = models.ModifyUserPasswordResponse;
const DescribeMNPManagerListData = models.DescribeMNPManagerListData;
const CreateDomainResponse = models.CreateDomainResponse;
const SensitiveApiInfoResp = models.SensitiveApiInfoResp;
const DescribeSensitiveApiAuthListResponse = models.DescribeSensitiveApiAuthListResponse;
const ModifyDomainRequest = models.ModifyDomainRequest;
const AuditInfoReq = models.AuditInfoReq;
const DescribeConsoleMNPVersionCompileTaskResponse = models.DescribeConsoleMNPVersionCompileTaskResponse;
const CreateMNPVersionCompileTaskResp = models.CreateMNPVersionCompileTaskResp;
const ModifySensitiveAPIAuditStatusRequest = models.ModifySensitiveAPIAuditStatusRequest;
const DescribeSensitiveApiAuthListParam = models.DescribeSensitiveApiAuthListParam;
const DescribeSensitiveAPIListResponse = models.DescribeSensitiveAPIListResponse;
const DeleteApplicationRequest = models.DeleteApplicationRequest;
const DescribeGlobalDomainListResponse = models.DescribeGlobalDomainListResponse;
const DescribeMNPManagerDetailRequest = models.DescribeMNPManagerDetailRequest;
const ModifyGlobalDomainRequest = models.ModifyGlobalDomainRequest;
const CreateSensitiveAPIReq = models.CreateSensitiveAPIReq;
const ModifyTeamMemberResponse = models.ModifyTeamMemberResponse;
const DescribeTeamMembersResponse = models.DescribeTeamMembersResponse;
const AddTeamMemberResponse = models.AddTeamMemberResponse;
const CreateTeamResponse = models.CreateTeamResponse;
const MNPDetail = models.MNPDetail;
const SensitiveApiAuditInfoPageResp = models.SensitiveApiAuditInfoPageResp;
const ModifyPlatformAuditStatusRequest = models.ModifyPlatformAuditStatusRequest;
const ModifyMNPRequest = models.ModifyMNPRequest;
const DescribeSensitiveAPIListRequest = models.DescribeSensitiveAPIListRequest;
const DescribeTeamDetailResp = models.DescribeTeamDetailResp;
const DescribeMNPVersionPreviewRequest = models.DescribeMNPVersionPreviewRequest;
const DescribeUserDetailResponse = models.DescribeUserDetailResponse;
const CreateTeamRequest = models.CreateTeamRequest;
const CreateDomainRequest = models.CreateDomainRequest;
const DescribeRoleListData = models.DescribeRoleListData;
const CreateConsoleMNPVersionCompileTaskRequest = models.CreateConsoleMNPVersionCompileTaskRequest;
const DescribeTeamDomainListResponse = models.DescribeTeamDomainListResponse;
const DescribeMNPPrivacyRequest = models.DescribeMNPPrivacyRequest;
const CreateSensitiveApiApplyRequest = models.CreateSensitiveApiApplyRequest;
const QueryOnlineVersionResp = models.QueryOnlineVersionResp;
const ModifyApplicationAppUrlRequest = models.ModifyApplicationAppUrlRequest;
const CreatePlatformAuditRequest = models.CreatePlatformAuditRequest;
const CreateMNPRequest = models.CreateMNPRequest;
const DescribeApplicationMNPVersionAuditListInfoResp = models.DescribeApplicationMNPVersionAuditListInfoResp;
const DescribeTeamRequest = models.DescribeTeamRequest;
const DescribeApplicationConfigResponse = models.DescribeApplicationConfigResponse;
const ModifyDomainResponse = models.ModifyDomainResponse;
const ApplicationDetail = models.ApplicationDetail;
const ModifyApplicationRequest = models.ModifyApplicationRequest;
const CreateUserRequest = models.CreateUserRequest;
const DescribeGlobalDomainListRequest = models.DescribeGlobalDomainListRequest;
const ModifyTeamResponse = models.ModifyTeamResponse;
const DescribeTeamDomainListInfoResp = models.DescribeTeamDomainListInfoResp;
const DescribeApplicationConfigRequest = models.DescribeApplicationConfigRequest;
const ModifyUserResponse = models.ModifyUserResponse;
const DescribeConsoleMNPVersionCompileTaskRequest = models.DescribeConsoleMNPVersionCompileTaskRequest;
const DescribeMNPManagerDetailData = models.DescribeMNPManagerDetailData;
const DescribeApplicationMNPVersionAuditListPageResp = models.DescribeApplicationMNPVersionAuditListPageResp;
const DescribeUserListData = models.DescribeUserListData;
const CreateOnlineApplyResponse = models.CreateOnlineApplyResponse;
const DescribeApplicationRequest = models.DescribeApplicationRequest;
const SensitiveApiPageInfo = models.SensitiveApiPageInfo;
const GlobalDomainDescribeListInfoResp = models.GlobalDomainDescribeListInfoResp;
const ModifyMNPResponse = models.ModifyMNPResponse;
const DescribeSimpleApplicationInfoListRequest = models.DescribeSimpleApplicationInfoListRequest;
const DisableTeamDomainRequest = models.DisableTeamDomainRequest;
const ApplicationPageInfo = models.ApplicationPageInfo;
const CreateConsoleMNPVersionCompileTaskResponse = models.CreateConsoleMNPVersionCompileTaskResponse;
const DescribeMNPVersionCompileTaskResp = models.DescribeMNPVersionCompileTaskResp;
const CreateDomainParam = models.CreateDomainParam;
const DescribeApplicationMNPVersionAuditListResponse = models.DescribeApplicationMNPVersionAuditListResponse;
const ApplicationSimpleInfoResp = models.ApplicationSimpleInfoResp;
const DescribeSimpleTeamListResponse = models.DescribeSimpleTeamListResponse;
const DescribeTeamPageResp = models.DescribeTeamPageResp;
const BooleanInfo = models.BooleanInfo;
const DescribeUserDetailRequest = models.DescribeUserDetailRequest;
const DescribeMNPBoardRequest = models.DescribeMNPBoardRequest;
const UploadFileTempSecret = models.UploadFileTempSecret;
const DescribeTeamMembersRequest = models.DescribeTeamMembersRequest;
const DescribeOfflineMNPPackageResponse = models.DescribeOfflineMNPPackageResponse;
const SensitiveApiAuditInfoResp = models.SensitiveApiAuditInfoResp;
const DescribeTeamListRequest = models.DescribeTeamListRequest;
const DescribeTeamMembersInfoPageResp = models.DescribeTeamMembersInfoPageResp;
const ModifyApplicationAppKeyRequest = models.ModifyApplicationAppKeyRequest;
const CreateSensitiveApiApplyResponse = models.CreateSensitiveApiApplyResponse;
const ApplicationSimpleListInfoResp = models.ApplicationSimpleListInfoResp;
const CreateApplicationRequest = models.CreateApplicationRequest;
const MNPTypeDefine = models.MNPTypeDefine;
const ApplicationMNPRelInfoResp = models.ApplicationMNPRelInfoResp;
const CreateSensitiveAPIResponse = models.CreateSensitiveAPIResponse;
const DescribeTempSecret4UploadFile2CosResponse = models.DescribeTempSecret4UploadFile2CosResponse;
const DescribeSensitiveApiApplyDetail = models.DescribeSensitiveApiApplyDetail;
const DescribeSensitiveApiApplyDetailRequest = models.DescribeSensitiveApiApplyDetailRequest;
const DescribeDomainInfoResponse = models.DescribeDomainInfoResponse;
const DescribeDomainTeamListRequest = models.DescribeDomainTeamListRequest;
const AddTeamMemberRequest = models.AddTeamMemberRequest;
const GlobalDomainCheckResp = models.GlobalDomainCheckResp;
const DescribeMNPVersionPreviewResponse = models.DescribeMNPVersionPreviewResponse;
const DeleteTeamMemberRequest = models.DeleteTeamMemberRequest;
const ModifyOnlineVersionRequest = models.ModifyOnlineVersionRequest;
const GlobalDomainModifyRespResp = models.GlobalDomainModifyRespResp;
const DescribeDomainTeamListInfoResp = models.DescribeDomainTeamListInfoResp;
const DescribeRoleDetailResponse = models.DescribeRoleDetailResponse;
const VersionBoardResp = models.VersionBoardResp;
const CreatePresetKeyRequest = models.CreatePresetKeyRequest;
const PresetResp = models.PresetResp;
const CreateApplicationResponse = models.CreateApplicationResponse;
const DescribeMNPVersionCompileTaskSubSimpleInfo = models.DescribeMNPVersionCompileTaskSubSimpleInfo;
const DescribeTeamResponse = models.DescribeTeamResponse;
const ModifyMNPVersionPreviewResponse = models.ModifyMNPVersionPreviewResponse;
const ResourceIdStringInfo = models.ResourceIdStringInfo;
const DescribeMNPManagerDetailResponse = models.DescribeMNPManagerDetailResponse;
const DeleteGlobalDomainRequest = models.DeleteGlobalDomainRequest;
const GlobalDomainDeleteResp = models.GlobalDomainDeleteResp;
const DeleteGlobalDomainResponse = models.DeleteGlobalDomainResponse;
const ModifySensitiveAPIAuditStatusResponse = models.ModifySensitiveAPIAuditStatusResponse;
const CreateGlobalDomainResp = models.CreateGlobalDomainResp;
const DescribeTeamMemberListResponse = models.DescribeTeamMemberListResponse;
const DescribeTeamMemberListPageResp = models.DescribeTeamMemberListPageResp;


/**
 * tcmpp client
 * @class
 */
class TcmppClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcmpp.tencentcloudapi.com", "2024-08-01", credential, region, profile);
    }
    
    /**
     * This API is used to query if the mini program version is uploaded successfully
     * @param {DescribeConsoleMNPVersionCompileTaskRequest} req
     * @param {function(string, DescribeConsoleMNPVersionCompileTaskResponse):void} cb
     * @public
     */
    DescribeConsoleMNPVersionCompileTask(req, cb) {
        let resp = new DescribeConsoleMNPVersionCompileTaskResponse();
        this.request("DescribeConsoleMNPVersionCompileTask", req, resp, cb);
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
     * This API is used to apply for sensitive API call permissions
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
     * This API is used to query the sensitive APIs that require permission
     * @param {DescribeSensitiveApiAuthListRequest} req
     * @param {function(string, DescribeSensitiveApiAuthListResponse):void} cb
     * @public
     */
    DescribeSensitiveApiAuthList(req, cb) {
        let resp = new DescribeSensitiveApiAuthListResponse();
        this.request("DescribeSensitiveApiAuthList", req, resp, cb);
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
     * This API is used to query role list data
     * @param {DescribeRoleListRequest} req
     * @param {function(string, DescribeRoleListResponse):void} cb
     * @public
     */
    DescribeRoleList(req, cb) {
        let resp = new DescribeRoleListResponse();
        this.request("DescribeRoleList", req, resp, cb);
    }

    /**
     * This API is used to add new mini program version to the console
     * @param {CreateConsoleMNPVersionCompileTaskRequest} req
     * @param {function(string, CreateConsoleMNPVersionCompileTaskResponse):void} cb
     * @public
     */
    CreateConsoleMNPVersionCompileTask(req, cb) {
        let resp = new CreateConsoleMNPVersionCompileTaskResponse();
        this.request("CreateConsoleMNPVersionCompileTask", req, resp, cb);
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
     * This API is used to query the team list that can be viewed by the current role permissions
     * @param {DescribeTeamListRequest} req
     * @param {function(string, DescribeTeamListResponse):void} cb
     * @public
     */
    DescribeTeamList(req, cb) {
        let resp = new DescribeTeamListResponse();
        this.request("DescribeTeamList", req, resp, cb);
    }

    /**
     * This API is used to query team details
     * @param {DescribeTeamRequest} req
     * @param {function(string, DescribeTeamResponse):void} cb
     * @public
     */
    DescribeTeam(req, cb) {
        let resp = new DescribeTeamResponse();
        this.request("DescribeTeam", req, resp, cb);
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
     * This API is used to approve sensitive API call permission
     * @param {ModifySensitiveAPIAuditStatusRequest} req
     * @param {function(string, ModifySensitiveAPIAuditStatusResponse):void} cb
     * @public
     */
    ModifySensitiveAPIAuditStatus(req, cb) {
        let resp = new ModifySensitiveAPIAuditStatusResponse();
        this.request("ModifySensitiveAPIAuditStatus", req, resp, cb);
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
     * This API is used to query the current release version of the mini program
     * @param {DescribeOnlineVersionRequest} req
     * @param {function(string, DescribeOnlineVersionResponse):void} cb
     * @public
     */
    DescribeOnlineVersion(req, cb) {
        let resp = new DescribeOnlineVersionResponse();
        this.request("DescribeOnlineVersion", req, resp, cb);
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
     * This API is used to query sensitive API call details
     * @param {DescribeSensitiveApiApplyDetailRequest} req
     * @param {function(string, DescribeSensitiveApiApplyDetailResponse):void} cb
     * @public
     */
    DescribeSensitiveApiApplyDetail(req, cb) {
        let resp = new DescribeSensitiveApiApplyDetailResponse();
        this.request("DescribeSensitiveApiApplyDetail", req, resp, cb);
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
     * This API is used to add users to a team
     * @param {AddTeamMemberRequest} req
     * @param {function(string, AddTeamMemberResponse):void} cb
     * @public
     */
    AddTeamMember(req, cb) {
        let resp = new AddTeamMemberResponse();
        this.request("AddTeamMember", req, resp, cb);
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
     * This API is used to delete a sensitive API
     * @param {DeleteSensitiveAPIRequest} req
     * @param {function(string, DeleteSensitiveAPIResponse):void} cb
     * @public
     */
    DeleteSensitiveAPI(req, cb) {
        let resp = new DeleteSensitiveAPIResponse();
        this.request("DeleteSensitiveAPI", req, resp, cb);
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
     * This API is used to approve the release of the mini program version
     * @param {ModifyPlatformAuditStatusRequest} req
     * @param {function(string, ModifyPlatformAuditStatusResponse):void} cb
     * @public
     */
    ModifyPlatformAuditStatus(req, cb) {
        let resp = new ModifyPlatformAuditStatusResponse();
        this.request("ModifyPlatformAuditStatus", req, resp, cb);
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
     * This API is used to change team member roles
     * @param {ModifyTeamMemberRequest} req
     * @param {function(string, ModifyTeamMemberResponse):void} cb
     * @public
     */
    ModifyTeamMember(req, cb) {
        let resp = new ModifyTeamMemberResponse();
        this.request("ModifyTeamMember", req, resp, cb);
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
     * This API is used to create a team
     * @param {CreateTeamRequest} req
     * @param {function(string, CreateTeamResponse):void} cb
     * @public
     */
    CreateTeam(req, cb) {
        let resp = new CreateTeamResponse();
        this.request("CreateTeam", req, resp, cb);
    }

    /**
     * This API is used to configure the mini program trial version
     * @param {ModifyMNPVersionPreviewRequest} req
     * @param {function(string, ModifyMNPVersionPreviewResponse):void} cb
     * @public
     */
    ModifyMNPVersionPreview(req, cb) {
        let resp = new ModifyMNPVersionPreviewResponse();
        this.request("ModifyMNPVersionPreview", req, resp, cb);
    }

    /**
     * This API is used to add an application
     * @param {CreateApplicationRequest} req
     * @param {function(string, CreateApplicationResponse):void} cb
     * @public
     */
    CreateApplication(req, cb) {
        let resp = new CreateApplicationResponse();
        this.request("CreateApplication", req, resp, cb);
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
     * This API is used to edit user information
     * @param {ModifyUserRequest} req
     * @param {function(string, ModifyUserResponse):void} cb
     * @public
     */
    ModifyUser(req, cb) {
        let resp = new ModifyUserResponse();
        this.request("ModifyUser", req, resp, cb);
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
     * This API is used to query application list data
     * @param {DescribeApplicationListRequest} req
     * @param {function(string, DescribeApplicationListResponse):void} cb
     * @public
     */
    DescribeApplicationList(req, cb) {
        let resp = new DescribeApplicationListResponse();
        this.request("DescribeApplicationList", req, resp, cb);
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
     * This API is used to query the details of the mini program trial version
     * @param {DescribeMNPVersionPreviewRequest} req
     * @param {function(string, DescribeMNPVersionPreviewResponse):void} cb
     * @public
     */
    DescribeMNPVersionPreview(req, cb) {
        let resp = new DescribeMNPVersionPreviewResponse();
        this.request("DescribeMNPVersionPreview", req, resp, cb);
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
     * This API is used to query application details
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
     * This API is used to query the member list of a specified team
     * @param {DescribeTeamMembersRequest} req
     * @param {function(string, DescribeTeamMembersResponse):void} cb
     * @public
     */
    DescribeTeamMembers(req, cb) {
        let resp = new DescribeTeamMembersResponse();
        this.request("DescribeTeamMembers", req, resp, cb);
    }


}
module.exports = TcmppClient;
