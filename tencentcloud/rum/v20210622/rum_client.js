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
const CreateTawInstanceRequest = models.CreateTawInstanceRequest;
const DescribeDataFetchProjectRequest = models.DescribeDataFetchProjectRequest;
const DescribeDataResponse = models.DescribeDataResponse;
const CreateTawInstanceResponse = models.CreateTawInstanceResponse;
const DeleteProjectRequest = models.DeleteProjectRequest;
const DescribeProjectLimitsResponse = models.DescribeProjectLimitsResponse;
const DeleteOfflineLogConfigResponse = models.DeleteOfflineLogConfigResponse;
const ResumeProjectResponse = models.ResumeProjectResponse;
const DescribeRumLogListResponse = models.DescribeRumLogListResponse;
const DescribeDataPvUrlInfoResponse = models.DescribeDataPvUrlInfoResponse;
const StopProjectResponse = models.StopProjectResponse;
const DescribeDataFetchUrlResponse = models.DescribeDataFetchUrlResponse;
const DescribeErrorRequest = models.DescribeErrorRequest;
const StopInstanceRequest = models.StopInstanceRequest;
const DescribeDataStaticUrlV2Request = models.DescribeDataStaticUrlV2Request;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const DescribeDataStaticProjectV2Response = models.DescribeDataStaticProjectV2Response;
const DescribeLogListRequest = models.DescribeLogListRequest;
const DescribeErrorResponse = models.DescribeErrorResponse;
const DeleteWhitelistResponse = models.DeleteWhitelistResponse;
const CreateLogExportRequest = models.CreateLogExportRequest;
const DescribePvListResponse = models.DescribePvListResponse;
const RumUvInfo = models.RumUvInfo;
const DescribeOfflineLogsRequest = models.DescribeOfflineLogsRequest;
const DescribeScoresRequest = models.DescribeScoresRequest;
const ScoreInfoV2 = models.ScoreInfoV2;
const DescribeDataReportCountRequest = models.DescribeDataReportCountRequest;
const DeleteOfflineLogRecordRequest = models.DeleteOfflineLogRecordRequest;
const DescribeDataStaticResourceV2Request = models.DescribeDataStaticResourceV2Request;
const DescribeReleaseFilesRequest = models.DescribeReleaseFilesRequest;
const CreateReleaseFileRequest = models.CreateReleaseFileRequest;
const DeleteOfflineLogRecordResponse = models.DeleteOfflineLogRecordResponse;
const DescribeDataCustomUrlRequest = models.DescribeDataCustomUrlRequest;
const DescribeUvListResponse = models.DescribeUvListResponse;
const DescribeDataStaticUrlV2Response = models.DescribeDataStaticUrlV2Response;
const Tag = models.Tag;
const DescribeDataPvUrlStatisticsV2Request = models.DescribeDataPvUrlStatisticsV2Request;
const DescribeDataFetchUrlV2Response = models.DescribeDataFetchUrlV2Response;
const CreateProjectRequest = models.CreateProjectRequest;
const DescribeDataStaticUrlRequest = models.DescribeDataStaticUrlRequest;
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const DescribeOfflineLogRecordsResponse = models.DescribeOfflineLogRecordsResponse;
const DeleteStarProjectRequest = models.DeleteStarProjectRequest;
const DescribeWhitelistsRequest = models.DescribeWhitelistsRequest;
const DescribeLogExportsResponse = models.DescribeLogExportsResponse;
const DescribeUvListRequest = models.DescribeUvListRequest;
const DescribeDataReportCountV2Request = models.DescribeDataReportCountV2Request;
const CreateStarProjectRequest = models.CreateStarProjectRequest;
const DescribeDataRequest = models.DescribeDataRequest;
const DescribeDataEventUrlV2Request = models.DescribeDataEventUrlV2Request;
const StopProjectRequest = models.StopProjectRequest;
const DescribeTawAreasResponse = models.DescribeTawAreasResponse;
const CreateOfflineLogConfigResponse = models.CreateOfflineLogConfigResponse;
const ModifyProjectLimitRequest = models.ModifyProjectLimitRequest;
const DescribeDataEventUrlV2Response = models.DescribeDataEventUrlV2Response;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const DescribeDataWebVitalsPageV2Request = models.DescribeDataWebVitalsPageV2Request;
const ResumeInstanceRequest = models.ResumeInstanceRequest;
const DescribeDataPerformancePageRequest = models.DescribeDataPerformancePageRequest;
const DeleteReleaseFileRequest = models.DeleteReleaseFileRequest;
const DescribeScoresV2Request = models.DescribeScoresV2Request;
const DescribeDataFetchUrlRequest = models.DescribeDataFetchUrlRequest;
const DescribeRumLogExportRequest = models.DescribeRumLogExportRequest;
const DescribeDataLogUrlStatisticsResponse = models.DescribeDataLogUrlStatisticsResponse;
const CreateProjectResponse = models.CreateProjectResponse;
const DescribeDataLogUrlStatisticsV2Response = models.DescribeDataLogUrlStatisticsV2Response;
const DescribeDataCustomUrlResponse = models.DescribeDataCustomUrlResponse;
const CreateStarProjectResponse = models.CreateStarProjectResponse;
const DeleteProjectResponse = models.DeleteProjectResponse;
const DescribeOfflineLogRecordsRequest = models.DescribeOfflineLogRecordsRequest;
const DescribeDataPvUrlStatisticsRequest = models.DescribeDataPvUrlStatisticsRequest;
const ReleaseFile = models.ReleaseFile;
const ModifyProjectLimitResponse = models.ModifyProjectLimitResponse;
const DescribeRumLogExportsResponse = models.DescribeRumLogExportsResponse;
const DescribeDataStaticProjectRequest = models.DescribeDataStaticProjectRequest;
const DescribeScoresResponse = models.DescribeScoresResponse;
const DescribeRumStatsLogListRequest = models.DescribeRumStatsLogListRequest;
const DescribeDataBridgeUrlV2Request = models.DescribeDataBridgeUrlV2Request;
const ResumeProjectRequest = models.ResumeProjectRequest;
const ProjectLimit = models.ProjectLimit;
const DeleteLogExportRequest = models.DeleteLogExportRequest;
const DescribeRumGroupLogResponse = models.DescribeRumGroupLogResponse;
const DescribeRumStatsLogListResponse = models.DescribeRumStatsLogListResponse;
const CreateWhitelistRequest = models.CreateWhitelistRequest;
const StopInstanceResponse = models.StopInstanceResponse;
const DescribeDataPvUrlStatisticsResponse = models.DescribeDataPvUrlStatisticsResponse;
const DescribeDataLogUrlInfoRequest = models.DescribeDataLogUrlInfoRequest;
const DescribeProjectLimitsRequest = models.DescribeProjectLimitsRequest;
const DescribeDataPvUrlStatisticsV2Response = models.DescribeDataPvUrlStatisticsV2Response;
const RumAreaInfo = models.RumAreaInfo;
const DescribeDataSetUrlStatisticsRequest = models.DescribeDataSetUrlStatisticsRequest;
const DescribeDataPerformanceProjectResponse = models.DescribeDataPerformanceProjectResponse;
const DescribeDataWebVitalsPageV2Response = models.DescribeDataWebVitalsPageV2Response;
const ResumeInstanceResponse = models.ResumeInstanceResponse;
const DescribeDataStaticProjectResponse = models.DescribeDataStaticProjectResponse;
const DescribeDataPerformancePageV2Response = models.DescribeDataPerformancePageV2Response;
const DescribeDataSetUrlStatisticsV2Request = models.DescribeDataSetUrlStatisticsV2Request;
const DescribeReleaseFileSignRequest = models.DescribeReleaseFileSignRequest;
const DeleteWhitelistRequest = models.DeleteWhitelistRequest;
const DescribeDataLogUrlInfoResponse = models.DescribeDataLogUrlInfoResponse;
const RumPvInfo = models.RumPvInfo;
const DeleteReleaseFileResponse = models.DeleteReleaseFileResponse;
const DescribeDataCustomUrlV2Request = models.DescribeDataCustomUrlV2Request;
const DescribeOfflineLogConfigsResponse = models.DescribeOfflineLogConfigsResponse;
const DeleteLogExportResponse = models.DeleteLogExportResponse;
const DescribeDataBridgeUrlV2Response = models.DescribeDataBridgeUrlV2Response;
const DescribeOfflineLogsResponse = models.DescribeOfflineLogsResponse;
const DescribeTawAreasRequest = models.DescribeTawAreasRequest;
const DescribeDataCustomUrlV2Response = models.DescribeDataCustomUrlV2Response;
const Filter = models.Filter;
const DescribeDataLogUrlStatisticsRequest = models.DescribeDataLogUrlStatisticsRequest;
const DeleteStarProjectResponse = models.DeleteStarProjectResponse;
const DescribeDataPerformancePageResponse = models.DescribeDataPerformancePageResponse;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const LogExport = models.LogExport;
const DescribeDataStaticResourceResponse = models.DescribeDataStaticResourceResponse;
const DescribeDataEventUrlResponse = models.DescribeDataEventUrlResponse;
const DescribeReleaseFileSignResponse = models.DescribeReleaseFileSignResponse;
const DescribeDataWebVitalsPageRequest = models.DescribeDataWebVitalsPageRequest;
const DescribeDataFetchUrlInfoRequest = models.DescribeDataFetchUrlInfoRequest;
const DescribeDataFetchUrlInfoResponse = models.DescribeDataFetchUrlInfoResponse;
const DescribeReleaseFilesResponse = models.DescribeReleaseFilesResponse;
const CreateOfflineLogConfigRequest = models.CreateOfflineLogConfigRequest;
const DescribeDataStaticUrlResponse = models.DescribeDataStaticUrlResponse;
const CreateWhitelistResponse = models.CreateWhitelistResponse;
const ScoreInfo = models.ScoreInfo;
const DescribeDataWebVitalsPageResponse = models.DescribeDataWebVitalsPageResponse;
const DescribeDataStaticProjectV2Request = models.DescribeDataStaticProjectV2Request;
const DescribeLogListResponse = models.DescribeLogListResponse;
const DescribeProjectsRequest = models.DescribeProjectsRequest;
const DescribeDataEventUrlRequest = models.DescribeDataEventUrlRequest;
const DescribeDataSetUrlStatisticsV2Response = models.DescribeDataSetUrlStatisticsV2Response;
const DescribeOfflineLogConfigsRequest = models.DescribeOfflineLogConfigsRequest;
const DescribeRumGroupLogRequest = models.DescribeRumGroupLogRequest;
const DeleteOfflineLogConfigRequest = models.DeleteOfflineLogConfigRequest;
const DescribeWhitelistsResponse = models.DescribeWhitelistsResponse;
const DescribeDataFetchUrlV2Request = models.DescribeDataFetchUrlV2Request;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const DescribeDataReportCountV2Response = models.DescribeDataReportCountV2Response;
const ModifyProjectResponse = models.ModifyProjectResponse;
const DescribeLogExportsRequest = models.DescribeLogExportsRequest;
const DescribeDataReportCountResponse = models.DescribeDataReportCountResponse;
const DescribeDataPerformanceProjectRequest = models.DescribeDataPerformanceProjectRequest;
const DescribeRumLogExportResponse = models.DescribeRumLogExportResponse;
const DescribeRumLogExportsRequest = models.DescribeRumLogExportsRequest;
const ModifyProjectRequest = models.ModifyProjectRequest;
const DescribeRumLogListRequest = models.DescribeRumLogListRequest;
const DescribeDataPerformancePageV2Request = models.DescribeDataPerformancePageV2Request;
const DescribeDataStaticResourceRequest = models.DescribeDataStaticResourceRequest;
const DescribePvListRequest = models.DescribePvListRequest;
const DescribeDataPvUrlInfoRequest = models.DescribeDataPvUrlInfoRequest;
const CreateReleaseFileResponse = models.CreateReleaseFileResponse;
const CreateLogExportResponse = models.CreateLogExportResponse;
const DescribeDataFetchProjectResponse = models.DescribeDataFetchProjectResponse;
const DescribeScoresV2Response = models.DescribeScoresV2Response;
const Whitelist = models.Whitelist;
const DescribeDataLogUrlStatisticsV2Request = models.DescribeDataLogUrlStatisticsV2Request;
const RumProject = models.RumProject;
const DescribeDataStaticResourceV2Response = models.DescribeDataStaticResourceV2Response;
const DescribeDataSetUrlStatisticsResponse = models.DescribeDataSetUrlStatisticsResponse;


/**
 * rum client
 * @class
 */
class RumClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("rum.intl.tencentcloudapi.com", "2021-06-22", credential, region, profile);
    }
    
    /**
     * This API is used to query region information.
     * @param {DescribeTawAreasRequest} req
     * @param {function(string, DescribeTawAreasResponse):void} cb
     * @public
     */
    DescribeTawAreas(req, cb) {
        let resp = new DescribeTawAreasResponse();
        this.request("DescribeTawAreas", req, resp, cb);
    }

    /**
     * This API is used to get the list of PVs under a project.
     * @param {DescribePvListRequest} req
     * @param {function(string, DescribePvListResponse):void} cb
     * @public
     */
    DescribePvList(req, cb) {
        let resp = new DescribePvListResponse();
        this.request("DescribePvList", req, resp, cb);
    }

    /**
     * This API is used to create a file record for the specified project.
     * @param {CreateReleaseFileRequest} req
     * @param {function(string, CreateReleaseFileResponse):void} cb
     * @public
     */
    CreateReleaseFile(req, cb) {
        let resp = new CreateReleaseFileResponse();
        this.request("CreateReleaseFile", req, resp, cb);
    }

    /**
     * This API is used to get the loginfo information.
     * @param {DescribeDataLogUrlInfoRequest} req
     * @param {function(string, DescribeDataLogUrlInfoResponse):void} cb
     * @public
     */
    DescribeDataLogUrlInfo(req, cb) {
        let resp = new DescribeDataLogUrlInfoResponse();
        this.request("DescribeDataLogUrlInfo", req, resp, cb);
    }

    /**
     * This API is used to get the list of logs in a project (created by an instance).
     * @param {DescribeRumLogListRequest} req
     * @param {function(string, DescribeRumLogListResponse):void} cb
     * @public
     */
    DescribeRumLogList(req, cb) {
        let resp = new DescribeRumLogListResponse();
        this.request("DescribeRumLogList", req, resp, cb);
    }

    /**
     * This API is used to get the PerformancePage information.
     * @param {DescribeDataPerformancePageRequest} req
     * @param {function(string, DescribeDataPerformancePageResponse):void} cb
     * @public
     */
    DescribeDataPerformancePage(req, cb) {
        let resp = new DescribeDataPerformancePageResponse();
        this.request("DescribeDataPerformancePage", req, resp, cb);
    }

    /**
     * This API is used to get the LogUrlStatistics information.
     * @param {DescribeDataLogUrlStatisticsRequest} req
     * @param {function(string, DescribeDataLogUrlStatisticsResponse):void} cb
     * @public
     */
    DescribeDataLogUrlStatistics(req, cb) {
        let resp = new DescribeDataLogUrlStatisticsResponse();
        this.request("DescribeDataLogUrlStatistics", req, resp, cb);
    }

    /**
     * This API is used to get the list of logs in a project every minute.
     * @param {DescribeRumStatsLogListRequest} req
     * @param {function(string, DescribeRumStatsLogListResponse):void} cb
     * @public
     */
    DescribeRumStatsLogList(req, cb) {
        let resp = new DescribeRumStatsLogListResponse();
        this.request("DescribeRumStatsLogList", req, resp, cb);
    }

    /**
     * This API is used to get the list of homepage scores.
     * @param {DescribeScoresRequest} req
     * @param {function(string, DescribeScoresResponse):void} cb
     * @public
     */
    DescribeScores(req, cb) {
        let resp = new DescribeScoresResponse();
        this.request("DescribeScores", req, resp, cb);
    }

    /**
     * This API is used to obtain PerformancePage information.
     * @param {DescribeDataPerformancePageV2Request} req
     * @param {function(string, DescribeDataPerformancePageV2Response):void} cb
     * @public
     */
    DescribeDataPerformancePageV2(req, cb) {
        let resp = new DescribeDataPerformancePageV2Response();
        this.request("DescribeDataPerformancePageV2", req, resp, cb);
    }

    /**
     * This API is used to get the `DescribeDataFetchProject` information and has been deprecated. Use `DescribeDataFetchUrl` instead.
     * @param {DescribeDataFetchProjectRequest} req
     * @param {function(string, DescribeDataFetchProjectResponse):void} cb
     * @public
     */
    DescribeDataFetchProject(req, cb) {
        let resp = new DescribeDataFetchProjectResponse();
        this.request("DescribeDataFetchProject", req, resp, cb);
    }

    /**
     * This API is used to delete an instance. The deleted instance cannot be recovered.
     * @param {DeleteInstanceRequest} req
     * @param {function(string, DeleteInstanceResponse):void} cb
     * @public
     */
    DeleteInstance(req, cb) {
        let resp = new DeleteInstanceResponse();
        this.request("DeleteInstance", req, resp, cb);
    }

    /**
     * This API is used to get the list of logs in a project (created by an instance).
     * @param {DescribeRumLogExportRequest} req
     * @param {function(string, DescribeRumLogExportResponse):void} cb
     * @public
     */
    DescribeRumLogExport(req, cb) {
        let resp = new DescribeRumLogExportResponse();
        this.request("DescribeRumLogExport", req, resp, cb);
    }

    /**
     * This API is used to get the list of exported logs in a project.
     * @param {DescribeRumLogExportsRequest} req
     * @param {function(string, DescribeRumLogExportsResponse):void} cb
     * @public
     */
    DescribeRumLogExports(req, cb) {
        let resp = new DescribeRumLogExportsResponse();
        this.request("DescribeRumLogExports", req, resp, cb);
    }

    /**
     * This API is used to delete a starred project for the specified user.
     * @param {DeleteStarProjectRequest} req
     * @param {function(string, DeleteStarProjectResponse):void} cb
     * @public
     */
    DeleteStarProject(req, cb) {
        let resp = new DeleteStarProjectResponse();
        this.request("DeleteStarProject", req, resp, cb);
    }

    /**
     * This API is used to recover a RUM business system so that you can use the application to report data normally.
     * @param {ResumeInstanceRequest} req
     * @param {function(string, ResumeInstanceResponse):void} cb
     * @public
     */
    ResumeInstance(req, cb) {
        let resp = new ResumeInstanceResponse();
        this.request("ResumeInstance", req, resp, cb);
    }

    /**
     * This API is used to get the PerformanceProject information.
     * @param {DescribeDataPerformanceProjectRequest} req
     * @param {function(string, DescribeDataPerformanceProjectResponse):void} cb
     * @public
     */
    DescribeDataPerformanceProject(req, cb) {
        let resp = new DescribeDataPerformanceProjectResponse();
        this.request("DescribeDataPerformanceProject", req, resp, cb);
    }

    /**
     * This API is used to get the homepage error information.
     * @param {DescribeErrorRequest} req
     * @param {function(string, DescribeErrorResponse):void} cb
     * @public
     */
    DescribeError(req, cb) {
        let resp = new DescribeErrorResponse();
        this.request("DescribeError", req, resp, cb);
    }

    /**
     * This API is used to get the log aggregation information under a project.
     * @param {DescribeRumGroupLogRequest} req
     * @param {function(string, DescribeRumGroupLogResponse):void} cb
     * @public
     */
    DescribeRumGroupLog(req, cb) {
        let resp = new DescribeRumGroupLogResponse();
        this.request("DescribeRumGroupLog", req, resp, cb);
    }

    /**
     * This API is used to get the log list. It has been deprecated. Use `DescribeRumLogList` instead.
     * @param {DescribeLogListRequest} req
     * @param {function(string, DescribeLogListResponse):void} cb
     * @public
     */
    DescribeLogList(req, cb) {
        let resp = new DescribeLogListResponse();
        this.request("DescribeLogList", req, resp, cb);
    }

    /**
     * This API is used to obtain DescribeDataFetchUrl information.
     * @param {DescribeDataFetchUrlV2Request} req
     * @param {function(string, DescribeDataFetchUrlV2Response):void} cb
     * @public
     */
    DescribeDataFetchUrlV2(req, cb) {
        let resp = new DescribeDataFetchUrlV2Response();
        this.request("DescribeDataFetchUrlV2", req, resp, cb);
    }

    /**
     * This API is used to obtain DescribeDataPvUrlStatistics information.
     * @param {DescribeDataPvUrlStatisticsV2Request} req
     * @param {function(string, DescribeDataPvUrlStatisticsV2Response):void} cb
     * @public
     */
    DescribeDataPvUrlStatisticsV2(req, cb) {
        let resp = new DescribeDataPvUrlStatisticsV2Response();
        this.request("DescribeDataPvUrlStatisticsV2", req, resp, cb);
    }

    /**
     * This API is used to get the DescribeDataFetchUrlInfo information.
     * @param {DescribeDataFetchUrlInfoRequest} req
     * @param {function(string, DescribeDataFetchUrlInfoResponse):void} cb
     * @public
     */
    DescribeDataFetchUrlInfo(req, cb) {
        let resp = new DescribeDataFetchUrlInfoResponse();
        this.request("DescribeDataFetchUrlInfo", req, resp, cb);
    }

    /**
     * API domain name: `rum.tencentcloudapi.com`.

This API is used to get the list of log download tasks.

Default API request rate limit: 20 requests/sec.
     * @param {DescribeLogExportsRequest} req
     * @param {function(string, DescribeLogExportsResponse):void} cb
     * @public
     */
    DescribeLogExports(req, cb) {
        let resp = new DescribeLogExportsResponse();
        this.request("DescribeLogExports", req, resp, cb);
    }

    /**
     * This API is used to get the DescribeDataPvUrlStatistics information.
     * @param {DescribeDataPvUrlStatisticsRequest} req
     * @param {function(string, DescribeDataPvUrlStatisticsResponse):void} cb
     * @public
     */
    DescribeDataPvUrlStatistics(req, cb) {
        let resp = new DescribeDataPvUrlStatisticsResponse();
        this.request("DescribeDataPvUrlStatistics", req, resp, cb);
    }

    /**
     * This API is used to get the DescribeDataWebVitalsPage information, which is about core user activities.
It includes the Web Vitals metric for the page loading performance.
     * @param {DescribeDataWebVitalsPageRequest} req
     * @param {function(string, DescribeDataWebVitalsPageResponse):void} cb
     * @public
     */
    DescribeDataWebVitalsPage(req, cb) {
        let resp = new DescribeDataWebVitalsPageResponse();
        this.request("DescribeDataWebVitalsPage", req, resp, cb);
    }

    /**
     * This API is used to get the DescribeDataStaticUrl information.
     * @param {DescribeDataStaticUrlRequest} req
     * @param {function(string, DescribeDataStaticUrlResponse):void} cb
     * @public
     */
    DescribeDataStaticUrl(req, cb) {
        let resp = new DescribeDataStaticUrlResponse();
        this.request("DescribeDataStaticUrl", req, resp, cb);
    }

    /**
     * This API is used to add or modify data reporting limit.
     * @param {ModifyProjectLimitRequest} req
     * @param {function(string, ModifyProjectLimitResponse):void} cb
     * @public
     */
    ModifyProjectLimit(req, cb) {
        let resp = new ModifyProjectLimitResponse();
        this.request("ModifyProjectLimit", req, resp, cb);
    }

    /**
     * This API is used to obtain DescribeDataCustomUrl information.
     * @param {DescribeDataCustomUrlV2Request} req
     * @param {function(string, DescribeDataCustomUrlV2Response):void} cb
     * @public
     */
    DescribeDataCustomUrlV2(req, cb) {
        let resp = new DescribeDataCustomUrlV2Response();
        this.request("DescribeDataCustomUrlV2", req, resp, cb);
    }

    /**
     * This API is used to obtain DescribeDataSetUrlStatistics information.
     * @param {DescribeDataSetUrlStatisticsV2Request} req
     * @param {function(string, DescribeDataSetUrlStatisticsV2Response):void} cb
     * @public
     */
    DescribeDataSetUrlStatisticsV2(req, cb) {
        let resp = new DescribeDataSetUrlStatisticsV2Response();
        this.request("DescribeDataSetUrlStatisticsV2", req, resp, cb);
    }

    /**
     * This API is used to get the temporary key for uploaded file storage.
     * @param {DescribeReleaseFileSignRequest} req
     * @param {function(string, DescribeReleaseFileSignResponse):void} cb
     * @public
     */
    DescribeReleaseFileSign(req, cb) {
        let resp = new DescribeReleaseFileSignResponse();
        this.request("DescribeReleaseFileSign", req, resp, cb);
    }

    /**
     * This API is used to obtain DescribeDataStaticResource information.
     * @param {DescribeDataStaticResourceV2Request} req
     * @param {function(string, DescribeDataStaticResourceV2Response):void} cb
     * @public
     */
    DescribeDataStaticResourceV2(req, cb) {
        let resp = new DescribeDataStaticResourceV2Response();
        this.request("DescribeDataStaticResourceV2", req, resp, cb);
    }

    /**
     * API domain name: `rum.tencentcloudapi.com`.

This API is used to create a log download task.

Default API request rate limit: 20 requests/sec.
     * @param {CreateLogExportRequest} req
     * @param {function(string, CreateLogExportResponse):void} cb
     * @public
     */
    CreateLogExport(req, cb) {
        let resp = new CreateLogExportResponse();
        this.request("CreateLogExport", req, resp, cb);
    }

    /**
     * This API is used to get the DescribeDataSetUrlStatistics information.
     * @param {DescribeDataSetUrlStatisticsRequest} req
     * @param {function(string, DescribeDataSetUrlStatisticsResponse):void} cb
     * @public
     */
    DescribeDataSetUrlStatistics(req, cb) {
        let resp = new DescribeDataSetUrlStatisticsResponse();
        this.request("DescribeDataSetUrlStatistics", req, resp, cb);
    }

    /**
     * This API is used to modify a RUM business system.
     * @param {ModifyInstanceRequest} req
     * @param {function(string, ModifyInstanceResponse):void} cb
     * @public
     */
    ModifyInstance(req, cb) {
        let resp = new ModifyInstanceResponse();
        this.request("ModifyInstance", req, resp, cb);
    }

    /**
     * This API is used to obtain DescribeDataEventUrl information.
     * @param {DescribeDataEventUrlV2Request} req
     * @param {function(string, DescribeDataEventUrlV2Response):void} cb
     * @public
     */
    DescribeDataEventUrlV2(req, cb) {
        let resp = new DescribeDataEventUrlV2Response();
        this.request("DescribeDataEventUrlV2", req, resp, cb);
    }

    /**
     * This API is used to get the DescribeDataStaticResource information.
     * @param {DescribeDataStaticResourceRequest} req
     * @param {function(string, DescribeDataStaticResourceResponse):void} cb
     * @public
     */
    DescribeDataStaticResource(req, cb) {
        let resp = new DescribeDataStaticResourceResponse();
        this.request("DescribeDataStaticResource", req, resp, cb);
    }

    /**
     * This API is used to get the sampling information of an application’s reporting APIs.
     * @param {DescribeProjectLimitsRequest} req
     * @param {function(string, DescribeProjectLimitsResponse):void} cb
     * @public
     */
    DescribeProjectLimits(req, cb) {
        let resp = new DescribeProjectLimitsResponse();
        this.request("DescribeProjectLimits", req, resp, cb);
    }

    /**
     * This API is used to obtain DescribeDataStaticProject information.
     * @param {DescribeDataStaticProjectV2Request} req
     * @param {function(string, DescribeDataStaticProjectV2Response):void} cb
     * @public
     */
    DescribeDataStaticProjectV2(req, cb) {
        let resp = new DescribeDataStaticProjectV2Response();
        this.request("DescribeDataStaticProjectV2", req, resp, cb);
    }

    /**
     * This API is used to get the DescribeDataCustomUrl information.
     * @param {DescribeDataCustomUrlRequest} req
     * @param {function(string, DescribeDataCustomUrlResponse):void} cb
     * @public
     */
    DescribeDataCustomUrl(req, cb) {
        let resp = new DescribeDataCustomUrlResponse();
        this.request("DescribeDataCustomUrl", req, resp, cb);
    }

    /**
     * This API is used to obtain DescribeDataStaticUrl information.
     * @param {DescribeDataStaticUrlV2Request} req
     * @param {function(string, DescribeDataStaticUrlV2Response):void} cb
     * @public
     */
    DescribeDataStaticUrlV2(req, cb) {
        let resp = new DescribeDataStaticUrlV2Response();
        this.request("DescribeDataStaticUrlV2", req, resp, cb);
    }

    /**
     * This API is used to create an allowlist.
     * @param {CreateWhitelistRequest} req
     * @param {function(string, CreateWhitelistResponse):void} cb
     * @public
     */
    CreateWhitelist(req, cb) {
        let resp = new CreateWhitelistResponse();
        this.request("CreateWhitelist", req, resp, cb);
    }

    /**
     * This API is used to get the list of projects (under teams created by an instance).
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        let resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
    }

    /**
     * This API is used to recover an application and resume data reporting.
     * @param {ResumeProjectRequest} req
     * @param {function(string, ResumeProjectResponse):void} cb
     * @public
     */
    ResumeProject(req, cb) {
        let resp = new ResumeProjectResponse();
        this.request("ResumeProject", req, resp, cb);
    }

    /**
     * This API is used to stop a project from reporting data.
     * @param {StopProjectRequest} req
     * @param {function(string, StopProjectResponse):void} cb
     * @public
     */
    StopProject(req, cb) {
        let resp = new StopProjectResponse();
        this.request("StopProject", req, resp, cb);
    }

    /**
     * This API is used to add a starred project.
     * @param {CreateStarProjectRequest} req
     * @param {function(string, CreateStarProjectResponse):void} cb
     * @public
     */
    CreateStarProject(req, cb) {
        let resp = new CreateStarProjectResponse();
        this.request("CreateStarProject", req, resp, cb);
    }

    /**
     * This API is used to delete an allowlist.
     * @param {DeleteWhitelistRequest} req
     * @param {function(string, DeleteWhitelistResponse):void} cb
     * @public
     */
    DeleteWhitelist(req, cb) {
        let resp = new DeleteWhitelistResponse();
        this.request("DeleteWhitelist", req, resp, cb);
    }

    /**
     * This API is used to create a RUM business system.
     * @param {CreateTawInstanceRequest} req
     * @param {function(string, CreateTawInstanceResponse):void} cb
     * @public
     */
    CreateTawInstance(req, cb) {
        let resp = new CreateTawInstanceResponse();
        this.request("CreateTawInstance", req, resp, cb);
    }

    /**
     * This API is used to stop an instance.
     * @param {StopInstanceRequest} req
     * @param {function(string, StopInstanceResponse):void} cb
     * @public
     */
    StopInstance(req, cb) {
        let resp = new StopInstanceResponse();
        this.request("StopInstance", req, resp, cb);
    }

    /**
     * This API is used to modify the RUM application information.
     * @param {ModifyProjectRequest} req
     * @param {function(string, ModifyProjectResponse):void} cb
     * @public
     */
    ModifyProject(req, cb) {
        let resp = new ModifyProjectResponse();
        this.request("ModifyProject", req, resp, cb);
    }

    /**
     * This API is used to obtain LogUrlStatistics information.
     * @param {DescribeDataLogUrlStatisticsV2Request} req
     * @param {function(string, DescribeDataLogUrlStatisticsV2Response):void} cb
     * @public
     */
    DescribeDataLogUrlStatisticsV2(req, cb) {
        let resp = new DescribeDataLogUrlStatisticsV2Response();
        this.request("DescribeDataLogUrlStatisticsV2", req, resp, cb);
    }

    /**
     * This API is used to get the list of source maps of an application.
     * @param {DescribeReleaseFilesRequest} req
     * @param {function(string, DescribeReleaseFilesResponse):void} cb
     * @public
     */
    DescribeReleaseFiles(req, cb) {
        let resp = new DescribeReleaseFilesResponse();
        this.request("DescribeReleaseFiles", req, resp, cb);
    }

    /**
     * API domain name: `rum.tencentcloudapi.com`.

This API is used to delete a log download task.

Default API request rate limit: 20 requests/sec.
     * @param {DeleteLogExportRequest} req
     * @param {function(string, DeleteLogExportResponse):void} cb
     * @public
     */
    DeleteLogExport(req, cb) {
        let resp = new DeleteLogExportResponse();
        this.request("DeleteLogExport", req, resp, cb);
    }

    /**
     * This API is used to get the specified offline log.
     * @param {DescribeOfflineLogsRequest} req
     * @param {function(string, DescribeOfflineLogsResponse):void} cb
     * @public
     */
    DescribeOfflineLogs(req, cb) {
        let resp = new DescribeOfflineLogsResponse();
        this.request("DescribeOfflineLogs", req, resp, cb);
    }

    /**
     * This API is used to get the list of allowlists.
     * @param {DescribeWhitelistsRequest} req
     * @param {function(string, DescribeWhitelistsResponse):void} cb
     * @public
     */
    DescribeWhitelists(req, cb) {
        let resp = new DescribeWhitelistsResponse();
        this.request("DescribeWhitelists", req, resp, cb);
    }

    /**
     * This API is used to get the DescribeDataEventUrl information.
     * @param {DescribeDataEventUrlRequest} req
     * @param {function(string, DescribeDataEventUrlResponse):void} cb
     * @public
     */
    DescribeDataEventUrl(req, cb) {
        let resp = new DescribeDataEventUrlResponse();
        this.request("DescribeDataEventUrl", req, resp, cb);
    }

    /**
     * This API is used to delete an offline log record.
     * @param {DeleteOfflineLogRecordRequest} req
     * @param {function(string, DeleteOfflineLogRecordResponse):void} cb
     * @public
     */
    DeleteOfflineLogRecord(req, cb) {
        let resp = new DeleteOfflineLogRecordResponse();
        this.request("DeleteOfflineLogRecord", req, resp, cb);
    }

    /**
     * This API is used to get the configuration of the set offline log listener and return the unique user ID.
     * @param {DescribeOfflineLogConfigsRequest} req
     * @param {function(string, DescribeOfflineLogConfigsResponse):void} cb
     * @public
     */
    DescribeOfflineLogConfigs(req, cb) {
        let resp = new DescribeOfflineLogConfigsResponse();
        this.request("DescribeOfflineLogConfigs", req, resp, cb);
    }

    /**
     * This API is used to obtain DescribeDataBridgeUrl information.
     * @param {DescribeDataBridgeUrlV2Request} req
     * @param {function(string, DescribeDataBridgeUrlV2Response):void} cb
     * @public
     */
    DescribeDataBridgeUrlV2(req, cb) {
        let resp = new DescribeDataBridgeUrlV2Response();
        this.request("DescribeDataBridgeUrlV2", req, resp, cb);
    }

    /**
     * This API is used to create a RUM application which belongs to a specific team.
     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        let resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }

    /**
     * This API is used to get the number of reported data entries for a project.
     * @param {DescribeDataReportCountRequest} req
     * @param {function(string, DescribeDataReportCountResponse):void} cb
     * @public
     */
    DescribeDataReportCount(req, cb) {
        let resp = new DescribeDataReportCountResponse();
        this.request("DescribeDataReportCount", req, resp, cb);
    }

    /**
     * This API is used to obtain DescribeDataWebVitalsPage information, which is the core user activity information.
Web Vitals for page loading performance are key performance metrics.
     * @param {DescribeDataWebVitalsPageV2Request} req
     * @param {function(string, DescribeDataWebVitalsPageV2Response):void} cb
     * @public
     */
    DescribeDataWebVitalsPageV2(req, cb) {
        let resp = new DescribeDataWebVitalsPageV2Response();
        this.request("DescribeDataWebVitalsPageV2", req, resp, cb);
    }

    /**
     * This API is used to get the PvUrlInfo information.
     * @param {DescribeDataPvUrlInfoRequest} req
     * @param {function(string, DescribeDataPvUrlInfoResponse):void} cb
     * @public
     */
    DescribeDataPvUrlInfo(req, cb) {
        let resp = new DescribeDataPvUrlInfoResponse();
        this.request("DescribeDataPvUrlInfo", req, resp, cb);
    }

    /**
     * This API is used to obtain the home page score list.
     * @param {DescribeScoresV2Request} req
     * @param {function(string, DescribeScoresV2Response):void} cb
     * @public
     */
    DescribeScoresV2(req, cb) {
        let resp = new DescribeScoresV2Response();
        this.request("DescribeScoresV2", req, resp, cb);
    }

    /**
     * This API is used to obtain the project reporting volume.
     * @param {DescribeDataReportCountV2Request} req
     * @param {function(string, DescribeDataReportCountV2Response):void} cb
     * @public
     */
    DescribeDataReportCountV2(req, cb) {
        let resp = new DescribeDataReportCountV2Response();
        this.request("DescribeDataReportCountV2", req, resp, cb);
    }

    /**
     * This API is used to delete the specified RUM project.
     * @param {DeleteProjectRequest} req
     * @param {function(string, DeleteProjectResponse):void} cb
     * @public
     */
    DeleteProject(req, cb) {
        let resp = new DeleteProjectResponse();
        this.request("DeleteProject", req, resp, cb);
    }

    /**
     * This API is used to get the DescribeDataStaticProject information.
     * @param {DescribeDataStaticProjectRequest} req
     * @param {function(string, DescribeDataStaticProjectResponse):void} cb
     * @public
     */
    DescribeDataStaticProject(req, cb) {
        let resp = new DescribeDataStaticProjectResponse();
        this.request("DescribeDataStaticProject", req, resp, cb);
    }

    /**
     * This API is used to get all (up to 100) offline log records.
     * @param {DescribeOfflineLogRecordsRequest} req
     * @param {function(string, DescribeOfflineLogRecordsResponse):void} cb
     * @public
     */
    DescribeOfflineLogRecords(req, cb) {
        let resp = new DescribeOfflineLogRecordsResponse();
        this.request("DescribeOfflineLogRecords", req, resp, cb);
    }

    /**
     * This API is used to get the list of UVs under a project.
     * @param {DescribeUvListRequest} req
     * @param {function(string, DescribeUvListResponse):void} cb
     * @public
     */
    DescribeUvList(req, cb) {
        let resp = new DescribeUvListResponse();
        this.request("DescribeUvList", req, resp, cb);
    }

    /**
     * This API is used to delete an offline RUM log listener. Then, offline logs of particular users will not be reported.
     * @param {DeleteOfflineLogConfigRequest} req
     * @param {function(string, DeleteOfflineLogConfigResponse):void} cb
     * @public
     */
    DeleteOfflineLogConfig(req, cb) {
        let resp = new DeleteOfflineLogConfigResponse();
        this.request("DeleteOfflineLogConfig", req, resp, cb);
    }

    /**
     * This API is used to delete the specified sourcemap file.
     * @param {DeleteReleaseFileRequest} req
     * @param {function(string, DeleteReleaseFileResponse):void} cb
     * @public
     */
    DeleteReleaseFile(req, cb) {
        let resp = new DeleteReleaseFileResponse();
        this.request("DeleteReleaseFile", req, resp, cb);
    }

    /**
     * This API is used to create an offline log listener to report offline logs of particular users.
     * @param {CreateOfflineLogConfigRequest} req
     * @param {function(string, CreateOfflineLogConfigResponse):void} cb
     * @public
     */
    CreateOfflineLogConfig(req, cb) {
        let resp = new CreateOfflineLogConfigResponse();
        this.request("CreateOfflineLogConfig", req, resp, cb);
    }

    /**
     * This API is used to get the DescribeDataFetchUrl information.
     * @param {DescribeDataFetchUrlRequest} req
     * @param {function(string, DescribeDataFetchUrlResponse):void} cb
     * @public
     */
    DescribeDataFetchUrl(req, cb) {
        let resp = new DescribeDataFetchUrlResponse();
        this.request("DescribeDataFetchUrl", req, resp, cb);
    }

    /**
     * This API is used to query the forwarding monitor.
     * @param {DescribeDataRequest} req
     * @param {function(string, DescribeDataResponse):void} cb
     * @public
     */
    DescribeData(req, cb) {
        let resp = new DescribeDataResponse();
        this.request("DescribeData", req, resp, cb);
    }


}
module.exports = RumClient;
