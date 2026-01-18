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
const DescribePaymentDataLineChartResponse = models.DescribePaymentDataLineChartResponse;
const DescribePaymentDataOverviewResponse = models.DescribePaymentDataOverviewResponse;
const DescribeMNGMAUMonthlyComparisonMetricCardRequest = models.DescribeMNGMAUMonthlyComparisonMetricCardRequest;
const DescribeMNPAllStageVersionsRequest = models.DescribeMNPAllStageVersionsRequest;
const DescribeMNGRetentionDataRequest = models.DescribeMNGRetentionDataRequest;
const DescribeAdvertisingOverviewResponse = models.DescribeAdvertisingOverviewResponse;
const DeleteUserRequest = models.DeleteUserRequest;
const DescribeMNGAdvertisingOverviewResponse = models.DescribeMNGAdvertisingOverviewResponse;
const DescribeMNPCategoryResponse = models.DescribeMNPCategoryResponse;
const CreateApplicationSensitiveAPIReq = models.CreateApplicationSensitiveAPIReq;
const CreateMNPApprovalRequest = models.CreateMNPApprovalRequest;
const DescribeMNGAdvertisingDetailRequest = models.DescribeMNGAdvertisingDetailRequest;
const RemoveMNPRequest = models.RemoveMNPRequest;
const DeleteTeamMemberResponse = models.DeleteTeamMemberResponse;
const RemoveMNPResponse = models.RemoveMNPResponse;
const DescribeMNPListResp = models.DescribeMNPListResp;
const DescribeMNPRetentionDataResponse = models.DescribeMNPRetentionDataResponse;
const DeleteApplicationRequest = models.DeleteApplicationRequest;
const DescribeMNPVersionResponse = models.DescribeMNPVersionResponse;
const ModifyApplicationResponse = models.ModifyApplicationResponse;
const AdvertDataOverview = models.AdvertDataOverview;
const DescribeMNGAdvertisingLineChartRequest = models.DescribeMNGAdvertisingLineChartRequest;
const DescribeMNPListResponse = models.DescribeMNPListResponse;
const ProcessMNPApprovalResponse = models.ProcessMNPApprovalResponse;
const DeleteTeamResponse = models.DeleteTeamResponse;
const ModifyMNPDomainRequest = models.ModifyMNPDomainRequest;
const DescribeRevertOnlineVersionPageResp = models.DescribeRevertOnlineVersionPageResp;
const DescribeMNPSensitiveAPIPermissionApprovalRequest = models.DescribeMNPSensitiveAPIPermissionApprovalRequest;
const APPOverviewData = models.APPOverviewData;
const ModifyUserResponse = models.ModifyUserResponse;
const DescribeUserRequest = models.DescribeUserRequest;
const DescribeTeamMemberInfoResp = models.DescribeTeamMemberInfoResp;
const ConfigureMNPPreviewResponse = models.ConfigureMNPPreviewResponse;
const DescribeMNPSensitiveAPIPermissionApprovalListData = models.DescribeMNPSensitiveAPIPermissionApprovalListData;
const DeleteMNPResponse = models.DeleteMNPResponse;
const DescribeMPAllStageVersionsResp = models.DescribeMPAllStageVersionsResp;
const DescribeMNGMAULineChartRequest = models.DescribeMNGMAULineChartRequest;
const DescribeMNGPaymentLineChartRequest = models.DescribeMNGPaymentLineChartRequest;
const DescribeApplicationListRequest = models.DescribeApplicationListRequest;
const DeleteTeamRequest = models.DeleteTeamRequest;
const DescribeRoleListRequest = models.DescribeRoleListRequest;
const DescribeMNGPaymentReportDetailRequest = models.DescribeMNGPaymentReportDetailRequest;
const APPOverview = models.APPOverview;
const DescribeMNGMAUDataDetailRequest = models.DescribeMNGMAUDataDetailRequest;
const ModifyTeamMemberResponse = models.ModifyTeamMemberResponse;
const MAUDetail = models.MAUDetail;
const DeleteApplicationResponse = models.DeleteApplicationResponse;
const DescribeMNGMAUMonthlyComparisonMetricCardResponse = models.DescribeMNGMAUMonthlyComparisonMetricCardResponse;
const DescribePaymentDataOverviewRequest = models.DescribePaymentDataOverviewRequest;
const ModifyApplicationConfigResponse = models.ModifyApplicationConfigResponse;
const DescribeMNPReportDetailResponse = models.DescribeMNPReportDetailResponse;
const DescribeDomainInfoParam = models.DescribeDomainInfoParam;
const ProcessMNPSensitiveAPIPermissionApprovalResponse = models.ProcessMNPSensitiveAPIPermissionApprovalResponse;
const DescribeApplicationListResponse = models.DescribeApplicationListResponse;
const ModifyGlobalDomainResponse = models.ModifyGlobalDomainResponse;
const DescribeRoleListResp = models.DescribeRoleListResp;
const DescribeTeamListInfoResp = models.DescribeTeamListInfoResp;
const CreateMNPSensitiveAPIPermissionApprovalRequest = models.CreateMNPSensitiveAPIPermissionApprovalRequest;
const ReleaseMNPVersionResponse = models.ReleaseMNPVersionResponse;
const DeleteMNPRequest = models.DeleteMNPRequest;
const PaymentActiveRetention = models.PaymentActiveRetention;
const DescribeTeamListResponse = models.DescribeTeamListResponse;
const DescribeMNPAllStageVersionsResponse = models.DescribeMNPAllStageVersionsResponse;
const DescribeUserListResp = models.DescribeUserListResp;
const ApprovalItem = models.ApprovalItem;
const QueryOnlineVersionResp = models.QueryOnlineVersionResp;
const DescribeApplicationListData = models.DescribeApplicationListData;
const DescribeRoleListResponse = models.DescribeRoleListResponse;
const CreateMNPVersionRequest = models.CreateMNPVersionRequest;
const DescribeMNPListData = models.DescribeMNPListData;
const DescribeMNGAccessAnalysisOverviewResponse = models.DescribeMNGAccessAnalysisOverviewResponse;
const DescribeMNPAccessAnalysisOverviewRequest = models.DescribeMNPAccessAnalysisOverviewRequest;
const DescribeApplicationConfigInfosResponse = models.DescribeApplicationConfigInfosResponse;
const DescribeMNPActiveUserRealTimeStatisticsRequest = models.DescribeMNPActiveUserRealTimeStatisticsRequest;
const DescribeGlobalOverviewReportDetailResponse = models.DescribeGlobalOverviewReportDetailResponse;
const DescribeApplicationConfigInfosRequest = models.DescribeApplicationConfigInfosRequest;
const ModifyTeamRequest = models.ModifyTeamRequest;
const CreateTeamMemberInfoReq = models.CreateTeamMemberInfoReq;
const DownloadApplicationConfigResp = models.DownloadApplicationConfigResp;
const ModifyApplicationRequest = models.ModifyApplicationRequest;
const CreateUserResponse = models.CreateUserResponse;
const CreateApplicationConfigRequest = models.CreateApplicationConfigRequest;
const DescribeMNPAdvertisingDetailRequest = models.DescribeMNPAdvertisingDetailRequest;
const ModifyMNPDomainResponse = models.ModifyMNPDomainResponse;
const DescribeMNGPaymentRetentionAnalysisRequest = models.DescribeMNGPaymentRetentionAnalysisRequest;
const DescribeApplicationConfigFileRequest = models.DescribeApplicationConfigFileRequest;
const DescribeUserListRequest = models.DescribeUserListRequest;
const DeleteUserResponse = models.DeleteUserResponse;
const EnableApplicationSensitiveAPIResponse = models.EnableApplicationSensitiveAPIResponse;
const DescribeApplicationResponse = models.DescribeApplicationResponse;
const MAUDetailData = models.MAUDetailData;
const AnalysisData = models.AnalysisData;
const CreateMNPVersionResp = models.CreateMNPVersionResp;
const DescribeAPPDataDetailLineChartResponse = models.DescribeAPPDataDetailLineChartResponse;
const DescribeAdvertisingOverviewRequest = models.DescribeAdvertisingOverviewRequest;
const DescribeAdvertisingLineChartRequest = models.DescribeAdvertisingLineChartRequest;
const CreateMNPApprovalResponse = models.CreateMNPApprovalResponse;
const ModifyApplicationConfigRequest = models.ModifyApplicationConfigRequest;
const DescribeMNPApprovalListData = models.DescribeMNPApprovalListData;
const ResourceIdInfo = models.ResourceIdInfo;
const DescribeMNPPreviewResponse = models.DescribeMNPPreviewResponse;
const DescribeMNGAdvertisingLineChartResponse = models.DescribeMNGAdvertisingLineChartResponse;
const ModifyUserRequest = models.ModifyUserRequest;
const VisitData = models.VisitData;
const CreateMNPResponse = models.CreateMNPResponse;
const DescribeMNPReportDataLineChartRequest = models.DescribeMNPReportDataLineChartRequest;
const DescribeMNPSensitiveAPIPermissionApprovalListResp = models.DescribeMNPSensitiveAPIPermissionApprovalListResp;
const DescribeMNPDomainACLRequest = models.DescribeMNPDomainACLRequest;
const MNGPaymentOverview = models.MNGPaymentOverview;
const ProcessMNPApprovalRequest = models.ProcessMNPApprovalRequest;
const DescribeUserListResponse = models.DescribeUserListResponse;
const DescribeMNGRetentionDataResponse = models.DescribeMNGRetentionDataResponse;
const DescribeApplicationSensitiveAPIListData = models.DescribeApplicationSensitiveAPIListData;
const DescribeMNPPreviewResp = models.DescribeMNPPreviewResp;
const CreateGlobalDomainACLResponse = models.CreateGlobalDomainACLResponse;
const RollbackMNPVersionRequest = models.RollbackMNPVersionRequest;
const ProcessMNPSensitiveAPIPermissionApprovalRequest = models.ProcessMNPSensitiveAPIPermissionApprovalRequest;
const DescribeMNGPaymentLineChartResponse = models.DescribeMNGPaymentLineChartResponse;
const DescribeMNPReportDataLineChartResponse = models.DescribeMNPReportDataLineChartResponse;
const DescribeMNGAdvertisingOverviewRequest = models.DescribeMNGAdvertisingOverviewRequest;
const DescribeMNPSensitiveAPIPermissionListData = models.DescribeMNPSensitiveAPIPermissionListData;
const DescribeMNGAccessAnalysisOverviewRequest = models.DescribeMNGAccessAnalysisOverviewRequest;
const DescribeMNPOfflinePackageURLResponse = models.DescribeMNPOfflinePackageURLResponse;
const ApplicationConfigInfo = models.ApplicationConfigInfo;
const CreateApplicationSensitiveAPIResponse = models.CreateApplicationSensitiveAPIResponse;
const GlobalDomainModifyRespResp = models.GlobalDomainModifyRespResp;
const DisableApplicationSensitiveAPIRequest = models.DisableApplicationSensitiveAPIRequest;
const DescribeApplicationSensitiveAPIListResponse = models.DescribeApplicationSensitiveAPIListResponse;
const AdTrendChart = models.AdTrendChart;
const RollbackMNPVersionResponse = models.RollbackMNPVersionResponse;
const DescribeAdvertisingLineChartResponse = models.DescribeAdvertisingLineChartResponse;
const RetentionData = models.RetentionData;
const DescribeMNPSensitiveAPIPermissionListRequest = models.DescribeMNPSensitiveAPIPermissionListRequest;
const ModifyGlobalDomainRequest = models.ModifyGlobalDomainRequest;
const DescribeUserDetailResp = models.DescribeUserDetailResp;
const DescribeMNPReleasedVersionHistoryRequest = models.DescribeMNPReleasedVersionHistoryRequest;
const DescribeMNPSensitiveAPIPermissionListResponse = models.DescribeMNPSensitiveAPIPermissionListResponse;
const AddTeamMemberResponse = models.AddTeamMemberResponse;
const DescribeMNPMAUMetricCardRequest = models.DescribeMNPMAUMetricCardRequest;
const CreateTeamResponse = models.CreateTeamResponse;
const CreateMNPSensitiveAPIPermissionApprovalResponse = models.CreateMNPSensitiveAPIPermissionApprovalResponse;
const ModifyMNPRequest = models.ModifyMNPRequest;
const CreateMNPDomainACLRequest = models.CreateMNPDomainACLRequest;
const MNPTypeDefine = models.MNPTypeDefine;
const DescribeAPPDataDetailLineChartRequest = models.DescribeAPPDataDetailLineChartRequest;
const MAUIndicatorCard = models.MAUIndicatorCard;
const CreateTeamRequest = models.CreateTeamRequest;
const CreateApplicationSensitiveAPIRequest = models.CreateApplicationSensitiveAPIRequest;
const DescribeMNPSensitiveAPIPermissionListResp = models.DescribeMNPSensitiveAPIPermissionListResp;
const ReleaseMNPVersionRequest = models.ReleaseMNPVersionRequest;
const DescribeMNPMAULineChartRequest = models.DescribeMNPMAULineChartRequest;
const DescribeRoleListData = models.DescribeRoleListData;
const DescribeApplicationResp = models.DescribeApplicationResp;
const DescribeMNGAccessAnalysisDetailResponse = models.DescribeMNGAccessAnalysisDetailResponse;
const DescribeGlobalDomainsResp = models.DescribeGlobalDomainsResp;
const DescribeMNPResponse = models.DescribeMNPResponse;
const DescribeAPPDataOverviewRequest = models.DescribeAPPDataOverviewRequest;
const DescribeMNPApprovalListResp = models.DescribeMNPApprovalListResp;
const DescribeMNPAdvertisingDetailResponse = models.DescribeMNPAdvertisingDetailResponse;
const DescribeMNGAccessAnalysisLineChartRequest = models.DescribeMNGAccessAnalysisLineChartRequest;
const DescribeMNPSensitiveAPIPermissionApprovalListResponse = models.DescribeMNPSensitiveAPIPermissionApprovalListResponse;
const DescribeMNPSensitiveAPIPermissionApprovalListRequest = models.DescribeMNPSensitiveAPIPermissionApprovalListRequest;
const DescribeGlobalOverviewReportDetailRequest = models.DescribeGlobalOverviewReportDetailRequest;
const MNPPaymentOverview = models.MNPPaymentOverview;
const ConfigureMNPPreviewRequest = models.ConfigureMNPPreviewRequest;
const AddTeamMemberRequest = models.AddTeamMemberRequest;
const DescribeMNPOfflinePackageURLRequest = models.DescribeMNPOfflinePackageURLRequest;
const MAUChartData = models.MAUChartData;
const CreateMNPRequest = models.CreateMNPRequest;
const DescribeMNPActiveUserRealTimeStatisticsResponse = models.DescribeMNPActiveUserRealTimeStatisticsResponse;
const DescribeTeamRequest = models.DescribeTeamRequest;
const DescribeMNGAccessAnalysisLineChartResponse = models.DescribeMNGAccessAnalysisLineChartResponse;
const DescribeMNPRequest = models.DescribeMNPRequest;
const CreateUserRequest = models.CreateUserRequest;
const DescribeTeamMemberListRequest = models.DescribeTeamMemberListRequest;
const DescribeUserResponse = models.DescribeUserResponse;
const DescribeMNPApprovalListRequest = models.DescribeMNPApprovalListRequest;
const DescribeMNPSensitiveAPIPermissionApprovalResponse = models.DescribeMNPSensitiveAPIPermissionApprovalResponse;
const AnalysisAdvertOverview = models.AnalysisAdvertOverview;
const DescribeTempSecret4UploadFile2CosRequest = models.DescribeTempSecret4UploadFile2CosRequest;
const DescribeMNGPaymentRetentionAnalysisResponse = models.DescribeMNGPaymentRetentionAnalysisResponse;
const ModifyTeamMemberRequest = models.ModifyTeamMemberRequest;
const DescribeGlobalDomainsListData = models.DescribeGlobalDomainsListData;
const DescribeMNGActiveUserRealTimeStatisticsResponse = models.DescribeMNGActiveUserRealTimeStatisticsResponse;
const DescribeMNPManagerDetailData = models.DescribeMNPManagerDetailData;
const DescribeMNPMAUDataDetailRequest = models.DescribeMNPMAUDataDetailRequest;
const DescribePaymentDataDetailRequest = models.DescribePaymentDataDetailRequest;
const DescribeUserListData = models.DescribeUserListData;
const DeleteTeamMemberRequest = models.DeleteTeamMemberRequest;
const DescribeTeamResponse = models.DescribeTeamResponse;
const DescribeApplicationRequest = models.DescribeApplicationRequest;
const DescribePaymentDataLineChartRequest = models.DescribePaymentDataLineChartRequest;
const DescribeMNPSensitiveAPIPermissionApprovalData = models.DescribeMNPSensitiveAPIPermissionApprovalData;
const CreateMNPVersionResponse = models.CreateMNPVersionResponse;
const DescribeMNPMAUDataDetailResponse = models.DescribeMNPMAUDataDetailResponse;
const DescribeMNPDomainACLResponse = models.DescribeMNPDomainACLResponse;
const DescribeMNPReportDetailRequest = models.DescribeMNPReportDetailRequest;
const DescribeMNPVersionResp = models.DescribeMNPVersionResp;
const DescribePaymentDataDetailResponse = models.DescribePaymentDataDetailResponse;
const ResourceIdStringInfo = models.ResourceIdStringInfo;
const CreateDomainParam = models.CreateDomainParam;
const DescribeMNGPaymentReportDetailResponse = models.DescribeMNGPaymentReportDetailResponse;
const DescribeMNGActiveUserRealTimeStatisticsRequest = models.DescribeMNGActiveUserRealTimeStatisticsRequest;
const MNPAdvertisingOverview = models.MNPAdvertisingOverview;
const DescribeMNPAccessAnalysisOverviewResponse = models.DescribeMNPAccessAnalysisOverviewResponse;
const ModifyTeamResponse = models.ModifyTeamResponse;
const ModifyMNPResponse = models.ModifyMNPResponse;
const DescribeMNPPageAnalysisDetailResponse = models.DescribeMNPPageAnalysisDetailResponse;
const DescribeApplicationConfigFileResponse = models.DescribeApplicationConfigFileResponse;
const BooleanInfo = models.BooleanInfo;
const DisableApplicationSensitiveAPIResponse = models.DisableApplicationSensitiveAPIResponse;
const DescribeMNPMAULineChartResponse = models.DescribeMNPMAULineChartResponse;
const DescribeTeamPageResp = models.DescribeTeamPageResp;
const Overview = models.Overview;
const CreateMNPDomainACLResponse = models.CreateMNPDomainACLResponse;
const DescribeMNGAdvertisingDetailResponse = models.DescribeMNGAdvertisingDetailResponse;
const OverviewDetail = models.OverviewDetail;
const DescribeTeamListRequest = models.DescribeTeamListRequest;
const DescribeMNPApprovalListResponse = models.DescribeMNPApprovalListResponse;
const DescribeMNPVersionRequest = models.DescribeMNPVersionRequest;
const DescribeGlobalDomainACLRequest = models.DescribeGlobalDomainACLRequest;
const CreateApplicationRequest = models.CreateApplicationRequest;
const AccessAnalysisOverview = models.AccessAnalysisOverview;
const StringData = models.StringData;
const MAULineChartData = models.MAULineChartData;
const DescribeTempSecret4UploadFile2CosResponse = models.DescribeTempSecret4UploadFile2CosResponse;
const DescribeApplicationListResp = models.DescribeApplicationListResp;
const DescribeMNPReleasedVersionHistoryResponse = models.DescribeMNPReleasedVersionHistoryResponse;
const DeleteApplicationSensitiveAPIRequest = models.DeleteApplicationSensitiveAPIRequest;
const ReportDataResult = models.ReportDataResult;
const DescribeMNPRetentionDataRequest = models.DescribeMNPRetentionDataRequest;
const CreateMNPApprovalResp = models.CreateMNPApprovalResp;
const DescribeMNPMAUMetricCardResponse = models.DescribeMNPMAUMetricCardResponse;
const MNPAdOverview = models.MNPAdOverview;
const DescribeMNGPaymentOverviewRequest = models.DescribeMNGPaymentOverviewRequest;
const DescribeMNPListRequest = models.DescribeMNPListRequest;
const DescribeMNPPageAnalysisDetailRequest = models.DescribeMNPPageAnalysisDetailRequest;
const DescribeAPPDataOverviewResponse = models.DescribeAPPDataOverviewResponse;
const DescribeApplicationConfigInfo = models.DescribeApplicationConfigInfo;
const UploadFileTempSecret = models.UploadFileTempSecret;
const DescribeGlobalOverviewDataSummaryResponse = models.DescribeGlobalOverviewDataSummaryResponse;
const DescribeApplicationSensitiveAPIListResp = models.DescribeApplicationSensitiveAPIListResp;
const DescribeGlobalOverviewDataSummaryRequest = models.DescribeGlobalOverviewDataSummaryRequest;
const DescribeTeamDetailResp = models.DescribeTeamDetailResp;
const DescribeMNGMAUDataDetailResponse = models.DescribeMNGMAUDataDetailResponse;
const AccessAnalysisDetail = models.AccessAnalysisDetail;
const DescribeGlobalDomainACLResponse = models.DescribeGlobalDomainACLResponse;
const CreatePresetKeyRequest = models.CreatePresetKeyRequest;
const PresetResp = models.PresetResp;
const CreateApplicationResponse = models.CreateApplicationResponse;
const DescribeMNPCategoryRequest = models.DescribeMNPCategoryRequest;
const DescribeMNGMAULineChartResponse = models.DescribeMNGMAULineChartResponse;
const DeleteApplicationSensitiveAPIResponse = models.DeleteApplicationSensitiveAPIResponse;
const EnableApplicationSensitiveAPIRequest = models.EnableApplicationSensitiveAPIRequest;
const DeleteGlobalDomainRequest = models.DeleteGlobalDomainRequest;
const DescribeMNGAccessAnalysisDetailRequest = models.DescribeMNGAccessAnalysisDetailRequest;
const GlobalDomainDeleteResp = models.GlobalDomainDeleteResp;
const PaymentDetail = models.PaymentDetail;
const DeleteGlobalDomainResponse = models.DeleteGlobalDomainResponse;
const MNGMAULineChartData = models.MNGMAULineChartData;
const DescribeMNGPaymentOverviewResponse = models.DescribeMNGPaymentOverviewResponse;
const DescribeMNPPreviewRequest = models.DescribeMNPPreviewRequest;
const CreateGlobalDomainResp = models.CreateGlobalDomainResp;
const CreateGlobalDomainACLRequest = models.CreateGlobalDomainACLRequest;
const DescribeApplicationSensitiveAPIListRequest = models.DescribeApplicationSensitiveAPIListRequest;
const DescribeTeamMemberListResponse = models.DescribeTeamMemberListResponse;
const CreateApplicationConfigResponse = models.CreateApplicationConfigResponse;
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
     * This API is used to retrieve a detailed payment report data for a mini game.
     * @param {DescribeMNGPaymentReportDetailRequest} req
     * @param {function(string, DescribeMNGPaymentReportDetailResponse):void} cb
     * @public
     */
    DescribeMNGPaymentReportDetail(req, cb) {
        let resp = new DescribeMNGPaymentReportDetailResponse();
        this.request("DescribeMNGPaymentReportDetail", req, resp, cb);
    }

    /**
     * This API is used to retrieve the mini game payment retention data.
     * @param {DescribeMNGPaymentRetentionAnalysisRequest} req
     * @param {function(string, DescribeMNGPaymentRetentionAnalysisResponse):void} cb
     * @public
     */
    DescribeMNGPaymentRetentionAnalysis(req, cb) {
        let resp = new DescribeMNGPaymentRetentionAnalysisResponse();
        this.request("DescribeMNGPaymentRetentionAnalysis", req, resp, cb);
    }

    /**
     * This API is used to edit the configuration of a superapp.
     * @param {ModifyApplicationConfigRequest} req
     * @param {function(string, ModifyApplicationConfigResponse):void} cb
     * @public
     */
    ModifyApplicationConfig(req, cb) {
        let resp = new ModifyApplicationConfigResponse();
        this.request("ModifyApplicationConfig", req, resp, cb);
    }

    /**
     * This API is used to retrieve an overview of mini game ad metrics within a specified date range.
     * @param {DescribeMNGAdvertisingOverviewRequest} req
     * @param {function(string, DescribeMNGAdvertisingOverviewResponse):void} cb
     * @public
     */
    DescribeMNGAdvertisingOverview(req, cb) {
        let resp = new DescribeMNGAdvertisingOverviewResponse();
        this.request("DescribeMNGAdvertisingOverview", req, resp, cb);
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
     * This API is used to retrieve user retention data for a mini program within a specified date range.
     * @param {DescribeMNPRetentionDataRequest} req
     * @param {function(string, DescribeMNPRetentionDataResponse):void} cb
     * @public
     */
    DescribeMNPRetentionData(req, cb) {
        let resp = new DescribeMNPRetentionDataResponse();
        this.request("DescribeMNPRetentionData", req, resp, cb);
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
     * This API is used to retrieve the line chart data for selected superapp metrics.
     * @param {DescribeAPPDataDetailLineChartRequest} req
     * @param {function(string, DescribeAPPDataDetailLineChartResponse):void} cb
     * @public
     */
    DescribeAPPDataDetailLineChart(req, cb) {
        let resp = new DescribeAPPDataDetailLineChartResponse();
        this.request("DescribeAPPDataDetailLineChart", req, resp, cb);
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
     * This API is used to retrieve the line chart data for mini game payment.
     * @param {DescribeMNGPaymentLineChartRequest} req
     * @param {function(string, DescribeMNGPaymentLineChartResponse):void} cb
     * @public
     */
    DescribeMNGPaymentLineChart(req, cb) {
        let resp = new DescribeMNGPaymentLineChartResponse();
        this.request("DescribeMNGPaymentLineChart", req, resp, cb);
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
     * This API is used to retrieve an overview of mini game payment data within a specified period.
     * @param {DescribeMNGPaymentOverviewRequest} req
     * @param {function(string, DescribeMNGPaymentOverviewResponse):void} cb
     * @public
     */
    DescribeMNGPaymentOverview(req, cb) {
        let resp = new DescribeMNGPaymentOverviewResponse();
        this.request("DescribeMNGPaymentOverview", req, resp, cb);
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
     * This API is used to retrieve an overview of visit analysis data for a mini program within a specified date range.
     * @param {DescribeMNPAccessAnalysisOverviewRequest} req
     * @param {function(string, DescribeMNPAccessAnalysisOverviewResponse):void} cb
     * @public
     */
    DescribeMNPAccessAnalysisOverview(req, cb) {
        let resp = new DescribeMNPAccessAnalysisOverviewResponse();
        this.request("DescribeMNPAccessAnalysisOverview", req, resp, cb);
    }

    /**
     * This API is used to retrieve line chart analysis data for mini game visits.
     * @param {DescribeMNGAccessAnalysisLineChartRequest} req
     * @param {function(string, DescribeMNGAccessAnalysisLineChartResponse):void} cb
     * @public
     */
    DescribeMNGAccessAnalysisLineChart(req, cb) {
        let resp = new DescribeMNGAccessAnalysisLineChartResponse();
        this.request("DescribeMNGAccessAnalysisLineChart", req, resp, cb);
    }

    /**
     * This API is used to retrieve an overview of mini program payment data within a specified date range.
     * @param {DescribePaymentDataOverviewRequest} req
     * @param {function(string, DescribePaymentDataOverviewResponse):void} cb
     * @public
     */
    DescribePaymentDataOverview(req, cb) {
        let resp = new DescribePaymentDataOverviewResponse();
        this.request("DescribePaymentDataOverview", req, resp, cb);
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
     * This API is used to retrieve the detailed advertising data for a mini program within a specified date range.
     * @param {DescribeMNPAdvertisingDetailRequest} req
     * @param {function(string, DescribeMNPAdvertisingDetailResponse):void} cb
     * @public
     */
    DescribeMNPAdvertisingDetail(req, cb) {
        let resp = new DescribeMNPAdvertisingDetailResponse();
        this.request("DescribeMNPAdvertisingDetail", req, resp, cb);
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
     * This API is used to retrieve user retention data for a mini game within a specified date range.
     * @param {DescribeMNGRetentionDataRequest} req
     * @param {function(string, DescribeMNGRetentionDataResponse):void} cb
     * @public
     */
    DescribeMNGRetentionData(req, cb) {
        let resp = new DescribeMNGRetentionDataResponse();
        this.request("DescribeMNGRetentionData", req, resp, cb);
    }

    /**
     * This API is used to retrieve the configuration details for an superapp.
     * @param {DescribeApplicationConfigInfosRequest} req
     * @param {function(string, DescribeApplicationConfigInfosResponse):void} cb
     * @public
     */
    DescribeApplicationConfigInfos(req, cb) {
        let resp = new DescribeApplicationConfigInfosResponse();
        this.request("DescribeApplicationConfigInfos", req, resp, cb);
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
     * This API is used to retrieve the detailed visit analysis data for a mini game within a specified date range.
     * @param {DescribeMNGAccessAnalysisDetailRequest} req
     * @param {function(string, DescribeMNGAccessAnalysisDetailResponse):void} cb
     * @public
     */
    DescribeMNGAccessAnalysisDetail(req, cb) {
        let resp = new DescribeMNGAccessAnalysisDetailResponse();
        this.request("DescribeMNGAccessAnalysisDetail", req, resp, cb);
    }

    /**
     * This API is used to retrieve an overview of visit analysis data for a mini game within a specified date range.
     * @param {DescribeMNGAccessAnalysisOverviewRequest} req
     * @param {function(string, DescribeMNGAccessAnalysisOverviewResponse):void} cb
     * @public
     */
    DescribeMNGAccessAnalysisOverview(req, cb) {
        let resp = new DescribeMNGAccessAnalysisOverviewResponse();
        this.request("DescribeMNGAccessAnalysisOverview", req, resp, cb);
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
     * This API is used to retrieve the line chart data for mini program visit analysis within a given date range.
     * @param {DescribeMNPReportDataLineChartRequest} req
     * @param {function(string, DescribeMNPReportDataLineChartResponse):void} cb
     * @public
     */
    DescribeMNPReportDataLineChart(req, cb) {
        let resp = new DescribeMNPReportDataLineChartResponse();
        this.request("DescribeMNPReportDataLineChart", req, resp, cb);
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
     * This API is used to retrieve the detailed mini program monthly active user data.
     * @param {DescribeMNPMAUDataDetailRequest} req
     * @param {function(string, DescribeMNPMAUDataDetailResponse):void} cb
     * @public
     */
    DescribeMNPMAUDataDetail(req, cb) {
        let resp = new DescribeMNPMAUDataDetailResponse();
        this.request("DescribeMNPMAUDataDetail", req, resp, cb);
    }

    /**
     * This API is used to retrieve the advertising line chart data for a mini program within a specified date range.
     * @param {DescribeAdvertisingLineChartRequest} req
     * @param {function(string, DescribeAdvertisingLineChartResponse):void} cb
     * @public
     */
    DescribeAdvertisingLineChart(req, cb) {
        let resp = new DescribeAdvertisingLineChartResponse();
        this.request("DescribeAdvertisingLineChart", req, resp, cb);
    }

    /**
     * This API is used to create the configuration for a specified superapp.
     * @param {CreateApplicationConfigRequest} req
     * @param {function(string, CreateApplicationConfigResponse):void} cb
     * @public
     */
    CreateApplicationConfig(req, cb) {
        let resp = new CreateApplicationConfigResponse();
        this.request("CreateApplicationConfig", req, resp, cb);
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
     * This API is used to retrieve the detailed mini program visit analysis data.
     * @param {DescribeMNPReportDetailRequest} req
     * @param {function(string, DescribeMNPReportDetailResponse):void} cb
     * @public
     */
    DescribeMNPReportDetail(req, cb) {
        let resp = new DescribeMNPReportDetailResponse();
        this.request("DescribeMNPReportDetail", req, resp, cb);
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
     * This API is used to retrieve the real-time active user statistics for a mini program.
     * @param {DescribeMNPActiveUserRealTimeStatisticsRequest} req
     * @param {function(string, DescribeMNPActiveUserRealTimeStatisticsResponse):void} cb
     * @public
     */
    DescribeMNPActiveUserRealTimeStatistics(req, cb) {
        let resp = new DescribeMNPActiveUserRealTimeStatisticsResponse();
        this.request("DescribeMNPActiveUserRealTimeStatistics", req, resp, cb);
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
     * This API is used to retrieve the advertising detailed data for a mini game over a specified period.
     * @param {DescribeMNGAdvertisingDetailRequest} req
     * @param {function(string, DescribeMNGAdvertisingDetailResponse):void} cb
     * @public
     */
    DescribeMNGAdvertisingDetail(req, cb) {
        let resp = new DescribeMNGAdvertisingDetailResponse();
        this.request("DescribeMNGAdvertisingDetail", req, resp, cb);
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
     * This API is used to retrieve mini game advertising data in a line chart format.
     * @param {DescribeMNGAdvertisingLineChartRequest} req
     * @param {function(string, DescribeMNGAdvertisingLineChartResponse):void} cb
     * @public
     */
    DescribeMNGAdvertisingLineChart(req, cb) {
        let resp = new DescribeMNGAdvertisingLineChartResponse();
        this.request("DescribeMNGAdvertisingLineChart", req, resp, cb);
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
     * This API is used to retrieve an overview of the superapp data.
     * @param {DescribeAPPDataOverviewRequest} req
     * @param {function(string, DescribeAPPDataOverviewResponse):void} cb
     * @public
     */
    DescribeAPPDataOverview(req, cb) {
        let resp = new DescribeAPPDataOverviewResponse();
        this.request("DescribeAPPDataOverview", req, resp, cb);
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
     * This API is used to retrieve the detailed report data for global overview within a specified date range.
     * @param {DescribeGlobalOverviewReportDetailRequest} req
     * @param {function(string, DescribeGlobalOverviewReportDetailResponse):void} cb
     * @public
     */
    DescribeGlobalOverviewReportDetail(req, cb) {
        let resp = new DescribeGlobalOverviewReportDetailResponse();
        this.request("DescribeGlobalOverviewReportDetail", req, resp, cb);
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
     * This API is used to retrieve MAU comparison data for a mini program between two months.
     * @param {DescribeMNPMAUMetricCardRequest} req
     * @param {function(string, DescribeMNPMAUMetricCardResponse):void} cb
     * @public
     */
    DescribeMNPMAUMetricCard(req, cb) {
        let resp = new DescribeMNPMAUMetricCardResponse();
        this.request("DescribeMNPMAUMetricCard", req, resp, cb);
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
     * This API is used to retrieve the real-time active user statistics for a mini game.
     * @param {DescribeMNGActiveUserRealTimeStatisticsRequest} req
     * @param {function(string, DescribeMNGActiveUserRealTimeStatisticsResponse):void} cb
     * @public
     */
    DescribeMNGActiveUserRealTimeStatistics(req, cb) {
        let resp = new DescribeMNGActiveUserRealTimeStatisticsResponse();
        this.request("DescribeMNGActiveUserRealTimeStatistics", req, resp, cb);
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
     * This API is used to retrieve the detailed mini game monthly active user data.
     * @param {DescribeMNGMAUDataDetailRequest} req
     * @param {function(string, DescribeMNGMAUDataDetailResponse):void} cb
     * @public
     */
    DescribeMNGMAUDataDetail(req, cb) {
        let resp = new DescribeMNGMAUDataDetailResponse();
        this.request("DescribeMNGMAUDataDetail", req, resp, cb);
    }

    /**
     * This API is used to retrieve MAU comparison data for a mini game between two months.
     * @param {DescribeMNGMAUMonthlyComparisonMetricCardRequest} req
     * @param {function(string, DescribeMNGMAUMonthlyComparisonMetricCardResponse):void} cb
     * @public
     */
    DescribeMNGMAUMonthlyComparisonMetricCard(req, cb) {
        let resp = new DescribeMNGMAUMonthlyComparisonMetricCardResponse();
        this.request("DescribeMNGMAUMonthlyComparisonMetricCard", req, resp, cb);
    }

    /**
     * This API is used to retrieve mini game monthly active user data in a line chart format.
     * @param {DescribeMNGMAULineChartRequest} req
     * @param {function(string, DescribeMNGMAULineChartResponse):void} cb
     * @public
     */
    DescribeMNGMAULineChart(req, cb) {
        let resp = new DescribeMNGMAULineChartResponse();
        this.request("DescribeMNGMAULineChart", req, resp, cb);
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
     * This API is used to retrieve an overview of mini program ad metrics within a specified date range.
     * @param {DescribeAdvertisingOverviewRequest} req
     * @param {function(string, DescribeAdvertisingOverviewResponse):void} cb
     * @public
     */
    DescribeAdvertisingOverview(req, cb) {
        let resp = new DescribeAdvertisingOverviewResponse();
        this.request("DescribeAdvertisingOverview", req, resp, cb);
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
     * This API is used to retrieve the detailed page visit data for a mini program over a specified period.
     * @param {DescribeMNPPageAnalysisDetailRequest} req
     * @param {function(string, DescribeMNPPageAnalysisDetailResponse):void} cb
     * @public
     */
    DescribeMNPPageAnalysisDetail(req, cb) {
        let resp = new DescribeMNPPageAnalysisDetailResponse();
        this.request("DescribeMNPPageAnalysisDetail", req, resp, cb);
    }

    /**
     * This API is used to retrieve a global overview summary of usage statistics.
     * @param {DescribeGlobalOverviewDataSummaryRequest} req
     * @param {function(string, DescribeGlobalOverviewDataSummaryResponse):void} cb
     * @public
     */
    DescribeGlobalOverviewDataSummary(req, cb) {
        let resp = new DescribeGlobalOverviewDataSummaryResponse();
        this.request("DescribeGlobalOverviewDataSummary", req, resp, cb);
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
     * This API is used to retrieve mini program monthly active user data in a line chart format.
     * @param {DescribeMNPMAULineChartRequest} req
     * @param {function(string, DescribeMNPMAULineChartResponse):void} cb
     * @public
     */
    DescribeMNPMAULineChart(req, cb) {
        let resp = new DescribeMNPMAULineChartResponse();
        this.request("DescribeMNPMAULineChart", req, resp, cb);
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
     * This API is used to retrieve the detailed standard payment data for specified  mini programs within a specified date range.
     * @param {DescribePaymentDataDetailRequest} req
     * @param {function(string, DescribePaymentDataDetailResponse):void} cb
     * @public
     */
    DescribePaymentDataDetail(req, cb) {
        let resp = new DescribePaymentDataDetailResponse();
        this.request("DescribePaymentDataDetail", req, resp, cb);
    }

    /**
     * This API is used to retrieve the line chart data related to standard payment for a mini program within a specified date range.
     * @param {DescribePaymentDataLineChartRequest} req
     * @param {function(string, DescribePaymentDataLineChartResponse):void} cb
     * @public
     */
    DescribePaymentDataLineChart(req, cb) {
        let resp = new DescribePaymentDataLineChartResponse();
        this.request("DescribePaymentDataLineChart", req, resp, cb);
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
