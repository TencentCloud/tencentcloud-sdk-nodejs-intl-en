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
const DeleteProjectRequest = models.DeleteProjectRequest;
const License = models.License;
const ModifyDeviceResponse = models.ModifyDeviceResponse;
const GetLicensesRequest = models.GetLicensesRequest;
const BatchDeleteDevicesRequest = models.BatchDeleteDevicesRequest;
const SessionInfo = models.SessionInfo;
const DescribeDeviceInfoRequest = models.DescribeDeviceInfoRequest;
const DescribeSessionStatisticsByIntervalResponse = models.DescribeSessionStatisticsByIntervalResponse;
const DescribeRecentSessionListRequest = models.DescribeRecentSessionListRequest;
const RecentSessionInfo = models.RecentSessionInfo;
const DescribeProjectInfoRequest = models.DescribeProjectInfoRequest;
const ModifyPolicyRequest = models.ModifyPolicyRequest;
const DescribeDeviceInfoResponse = models.DescribeDeviceInfoResponse;
const GetLicenseStatRequest = models.GetLicenseStatRequest;
const DescribeProjectListResponse = models.DescribeProjectListResponse;
const ModifyProjectResponse = models.ModifyProjectResponse;
const BatchDeletePolicyResponse = models.BatchDeletePolicyResponse;
const GetLicenseStatResponse = models.GetLicenseStatResponse;
const ModifyPolicyResponse = models.ModifyPolicyResponse;
const Device = models.Device;
const DescribeSessionStatisticsRequest = models.DescribeSessionStatisticsRequest;
const BatchDeleteDevicesResponse = models.BatchDeleteDevicesResponse;
const ModifyProjectRequest = models.ModifyProjectRequest;
const DescribeRecentSessionListResponse = models.DescribeRecentSessionListResponse;
const ModifyDeviceRequest = models.ModifyDeviceRequest;
const DescribeProjectListRequest = models.DescribeProjectListRequest;
const ProjectInfo = models.ProjectInfo;
const BatchDeletePolicyRequest = models.BatchDeletePolicyRequest;
const DescribeDeviceSessionListResponse = models.DescribeDeviceSessionListResponse;
const DescribeProjectInfoResponse = models.DescribeProjectInfoResponse;
const DeleteProjectResponse = models.DeleteProjectResponse;
const GetDeviceLicenseResponse = models.GetDeviceLicenseResponse;
const CreateDeviceResponse = models.CreateDeviceResponse;
const DescribeSessionStatisticsByIntervalRequest = models.DescribeSessionStatisticsByIntervalRequest;
const CreateDeviceRequest = models.CreateDeviceRequest;
const DescribeSessionStatisticsResponse = models.DescribeSessionStatisticsResponse;
const GetDevicesResponse = models.GetDevicesResponse;
const GetLicensesResponse = models.GetLicensesResponse;
const DescribeDeviceSessionListRequest = models.DescribeDeviceSessionListRequest;
const GetDevicesRequest = models.GetDevicesRequest;
const CreateProjectResponse = models.CreateProjectResponse;
const SessionIntervalStatistic = models.SessionIntervalStatistic;
const GetDeviceLicenseRequest = models.GetDeviceLicenseRequest;
const CreateProjectRequest = models.CreateProjectRequest;


/**
 * trro client
 * @class
 */
class TrroClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("trro.tencentcloudapi.com", "2022-03-25", credential, region, profile);
    }
    
    /**
     * Statistics of license types and quantities
     * @param {GetLicenseStatRequest} req
     * @param {function(string, GetLicenseStatResponse):void} cb
     * @public
     */
    GetLicenseStat(req, cb) {
        let resp = new GetLicenseStatResponse();
        this.request("GetLicenseStat", req, resp, cb);
    }

    /**
     * Getting session statistics for each time period
     * @param {DescribeSessionStatisticsByIntervalRequest} req
     * @param {function(string, DescribeSessionStatisticsByIntervalResponse):void} cb
     * @public
     */
    DescribeSessionStatisticsByInterval(req, cb) {
        let resp = new DescribeSessionStatisticsByIntervalResponse();
        this.request("DescribeSessionStatisticsByInterval", req, resp, cb);
    }

    /**
     * This API is used to batch delete and modify permission configurations.
     * @param {BatchDeletePolicyRequest} req
     * @param {function(string, BatchDeletePolicyResponse):void} cb
     * @public
     */
    BatchDeletePolicy(req, cb) {
        let resp = new BatchDeletePolicyResponse();
        this.request("BatchDeletePolicy", req, resp, cb);
    }

    /**
     * This API is used to create a device.
     * @param {CreateDeviceRequest} req
     * @param {function(string, CreateDeviceResponse):void} cb
     * @public
     */
    CreateDevice(req, cb) {
        let resp = new CreateDeviceResponse();
        this.request("CreateDevice", req, resp, cb);
    }

    /**
     * This API is used to modify permission configuration.
     * @param {ModifyPolicyRequest} req
     * @param {function(string, ModifyPolicyResponse):void} cb
     * @public
     */
    ModifyPolicy(req, cb) {
        let resp = new ModifyPolicyResponse();
        this.request("ModifyPolicy", req, resp, cb);
    }

    /**
     * This API is used to delete devices in batches.
     * @param {BatchDeleteDevicesRequest} req
     * @param {function(string, BatchDeleteDevicesResponse):void} cb
     * @public
     */
    BatchDeleteDevices(req, cb) {
        let resp = new BatchDeleteDevicesResponse();
        this.request("BatchDeleteDevices", req, resp, cb);
    }

    /**
     * Getting the device session list
     * @param {DescribeDeviceSessionListRequest} req
     * @param {function(string, DescribeDeviceSessionListResponse):void} cb
     * @public
     */
    DescribeDeviceSessionList(req, cb) {
        let resp = new DescribeDeviceSessionListResponse();
        this.request("DescribeDeviceSessionList", req, resp, cb);
    }

    /**
     * View the license list by authorization
     * @param {GetLicensesRequest} req
     * @param {function(string, GetLicensesResponse):void} cb
     * @public
     */
    GetLicenses(req, cb) {
        let resp = new GetLicensesResponse();
        this.request("GetLicenses", req, resp, cb);
    }

    /**
     * This API is used to get project information.
     * @param {DescribeProjectInfoRequest} req
     * @param {function(string, DescribeProjectInfoResponse):void} cb
     * @public
     */
    DescribeProjectInfo(req, cb) {
        let resp = new DescribeProjectInfoResponse();
        this.request("DescribeProjectInfo", req, resp, cb);
    }

    /**
     * This API is used to create a project.
     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        let resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }

    /**
     * Get the latest device session list
     * @param {DescribeRecentSessionListRequest} req
     * @param {function(string, DescribeRecentSessionListResponse):void} cb
     * @public
     */
    DescribeRecentSessionList(req, cb) {
        let resp = new DescribeRecentSessionListResponse();
        this.request("DescribeRecentSessionList", req, resp, cb);
    }

    /**
     * This API is used to get specified device information.
     * @param {DescribeDeviceInfoRequest} req
     * @param {function(string, DescribeDeviceInfoResponse):void} cb
     * @public
     */
    DescribeDeviceInfo(req, cb) {
        let resp = new DescribeDeviceInfoResponse();
        this.request("DescribeDeviceInfo", req, resp, cb);
    }

    /**
     * This API is used to delete a project.
     * @param {DeleteProjectRequest} req
     * @param {function(string, DeleteProjectResponse):void} cb
     * @public
     */
    DeleteProject(req, cb) {
        let resp = new DeleteProjectResponse();
        this.request("DeleteProject", req, resp, cb);
    }

    /**
     * Get session statistical values
     * @param {DescribeSessionStatisticsRequest} req
     * @param {function(string, DescribeSessionStatisticsResponse):void} cb
     * @public
     */
    DescribeSessionStatistics(req, cb) {
        let resp = new DescribeSessionStatisticsResponse();
        this.request("DescribeSessionStatistics", req, resp, cb);
    }

    /**
     * This API is used to modify project information.
     * @param {ModifyProjectRequest} req
     * @param {function(string, ModifyProjectResponse):void} cb
     * @public
     */
    ModifyProject(req, cb) {
        let resp = new ModifyProjectResponse();
        this.request("ModifyProject", req, resp, cb);
    }

    /**
     * This API is used to get project lists.
     * @param {DescribeProjectListRequest} req
     * @param {function(string, DescribeProjectListResponse):void} cb
     * @public
     */
    DescribeProjectList(req, cb) {
        let resp = new DescribeProjectListResponse();
        this.request("DescribeProjectList", req, resp, cb);
    }

    /**
     * Query the authorization binding status of user devices
     * @param {GetDevicesRequest} req
     * @param {function(string, GetDevicesResponse):void} cb
     * @public
     */
    GetDevices(req, cb) {
        let resp = new GetDevicesResponse();
        this.request("GetDevices", req, resp, cb);
    }

    /**
     * This API is used to modify device information.
     * @param {ModifyDeviceRequest} req
     * @param {function(string, ModifyDeviceResponse):void} cb
     * @public
     */
    ModifyDevice(req, cb) {
        let resp = new ModifyDeviceResponse();
        this.request("ModifyDevice", req, resp, cb);
    }

    /**
     * Obtain the quantity of available authorizations already bound to the device
     * @param {GetDeviceLicenseRequest} req
     * @param {function(string, GetDeviceLicenseResponse):void} cb
     * @public
     */
    GetDeviceLicense(req, cb) {
        let resp = new GetDeviceLicenseResponse();
        this.request("GetDeviceLicense", req, resp, cb);
    }


}
module.exports = TrroClient;
