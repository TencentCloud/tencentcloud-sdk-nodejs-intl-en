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
const CreateApplicationVersionResponse = models.CreateApplicationVersionResponse;
const DeleteApplicationRequest = models.DeleteApplicationRequest;
const ModifyApplicationProjectRequest = models.ModifyApplicationProjectRequest;
const BindConcurrentPackagesToProjectRequest = models.BindConcurrentPackagesToProjectRequest;
const DescribeApplicationListResponse = models.DescribeApplicationListResponse;
const ModifyConcurrentPackageRequest = models.ModifyConcurrentPackageRequest;
const ApplicationBaseInfo = models.ApplicationBaseInfo;
const CreateSessionRequest = models.CreateSessionRequest;
const DescribeApplicationPathListResponse = models.DescribeApplicationPathListResponse;
const BindConcurrentPackagesToProjectResponse = models.BindConcurrentPackagesToProjectResponse;
const StartPublishStreamWithURLResponse = models.StartPublishStreamWithURLResponse;
const UnbindConcurrentPackagesFromProjectResponse = models.UnbindConcurrentPackagesFromProjectResponse;
const DeleteApplicationVersionRequest = models.DeleteApplicationVersionRequest;
const CreateApplicationProjectResponse = models.CreateApplicationProjectResponse;
const CreateApplicationSnapshotRequest = models.CreateApplicationSnapshotRequest;
const DescribeApplicationProjectsResponse = models.DescribeApplicationProjectsResponse;
const UserMobileApplicationInfo = models.UserMobileApplicationInfo;
const Filter = models.Filter;
const SetApplicationVersionOnlineRequest = models.SetApplicationVersionOnlineRequest;
const CreateApplicationSnapshotResponse = models.CreateApplicationSnapshotResponse;
const DescribeApplicationFileInfoResponse = models.DescribeApplicationFileInfoResponse;
const VideoEncodeConfig = models.VideoEncodeConfig;
const ModifyMobileApplicationInfoResponse = models.ModifyMobileApplicationInfoResponse;
const ModifyApplicationBaseInfoRequest = models.ModifyApplicationBaseInfoRequest;
const ModifyApplicationBaseInfoResponse = models.ModifyApplicationBaseInfoResponse;
const DescribeConcurrentPackagesResponse = models.DescribeConcurrentPackagesResponse;
const DescribeApplicationVersionRequest = models.DescribeApplicationVersionRequest;
const DescribeApplicationProjectAdvancedConfigRequest = models.DescribeApplicationProjectAdvancedConfigRequest;
const DeleteApplicationProjectsResponse = models.DeleteApplicationProjectsResponse;
const DescribeCosCredentialResponse = models.DescribeCosCredentialResponse;
const DescribeApplicationStatusRequest = models.DescribeApplicationStatusRequest;
const CreateApplicationRequest = models.CreateApplicationRequest;
const DescribeConcurrentCountRequest = models.DescribeConcurrentCountRequest;
const ApplicationProject = models.ApplicationProject;
const DeleteApplicationVersionResponse = models.DeleteApplicationVersionResponse;
const DescribeConcurrentSummaryRequest = models.DescribeConcurrentSummaryRequest;
const ModifyApplicationVersionResponse = models.ModifyApplicationVersionResponse;
const DescribeCosCredentialRequest = models.DescribeCosCredentialRequest;
const StopPublishStreamResponse = models.StopPublishStreamResponse;
const CreateApplicationProjectRequest = models.CreateApplicationProjectRequest;
const StopPublishStreamRequest = models.StopPublishStreamRequest;
const CreateApplicationVersionRequest = models.CreateApplicationVersionRequest;
const DescribeApplicationStatusResponse = models.DescribeApplicationStatusResponse;
const DestroySessionResponse = models.DestroySessionResponse;
const DescribeApplicationVersionResponse = models.DescribeApplicationVersionResponse;
const DescribeApplicationPathListRequest = models.DescribeApplicationPathListRequest;
const ResetConcurrentPackagesRequest = models.ResetConcurrentPackagesRequest;
const StartPublishStreamResponse = models.StartPublishStreamResponse;
const CreateSessionResponse = models.CreateSessionResponse;
const BackgroundImage = models.BackgroundImage;
const ModifyApplicationProjectResponse = models.ModifyApplicationProjectResponse;
const DescribeApplicationListRequest = models.DescribeApplicationListRequest;
const StartPublishStreamRequest = models.StartPublishStreamRequest;
const ModifyConcurrentPackageResponse = models.ModifyConcurrentPackageResponse;
const UnbindConcurrentPackagesFromProjectRequest = models.UnbindConcurrentPackagesFromProjectRequest;
const UserApplicationStatus = models.UserApplicationStatus;
const UserApplicationInfo = models.UserApplicationInfo;
const DeleteApplicationResponse = models.DeleteApplicationResponse;
const DeleteApplicationProjectsRequest = models.DeleteApplicationProjectsRequest;
const DescribeConcurrentPackagesRequest = models.DescribeConcurrentPackagesRequest;
const DescribeConcurrentSummaryResponse = models.DescribeConcurrentSummaryResponse;
const CreateApplicationResponse = models.CreateApplicationResponse;
const StartPublishStreamWithURLRequest = models.StartPublishStreamWithURLRequest;
const ResetConcurrentPackagesResponse = models.ResetConcurrentPackagesResponse;
const UserApplicationVersion = models.UserApplicationVersion;
const DescribeApplicationProjectAdvancedConfigResponse = models.DescribeApplicationProjectAdvancedConfigResponse;
const ApplyConcurrentResponse = models.ApplyConcurrentResponse;
const SetApplicationVersionOnlineResponse = models.SetApplicationVersionOnlineResponse;
const ApplyConcurrentRequest = models.ApplyConcurrentRequest;
const UserApplicationFileInfo = models.UserApplicationFileInfo;
const ModifyMobileApplicationInfoRequest = models.ModifyMobileApplicationInfoRequest;
const DescribeConcurrentCountResponse = models.DescribeConcurrentCountResponse;
const DestroySessionRequest = models.DestroySessionRequest;
const DescribeApplicationFileInfoRequest = models.DescribeApplicationFileInfoRequest;
const ApplicationConcurrentPackage = models.ApplicationConcurrentPackage;
const UserApplicationStore = models.UserApplicationStore;
const ModifyApplicationVersionRequest = models.ModifyApplicationVersionRequest;
const DescribeApplicationProjectsRequest = models.DescribeApplicationProjectsRequest;


/**
 * car client
 * @class
 */
class CarClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("car.tencentcloudapi.com", "2022-01-10", credential, region, profile);
    }
    
    /**
     * This API is used to launch an application version.
     * @param {SetApplicationVersionOnlineRequest} req
     * @param {function(string, SetApplicationVersionOnlineResponse):void} cb
     * @public
     */
    SetApplicationVersionOnline(req, cb) {
        let resp = new SetApplicationVersionOnlineResponse();
        this.request("SetApplicationVersionOnline", req, resp, cb);
    }

    /**
     * This API is used to query application file information.
     * @param {DescribeApplicationFileInfoRequest} req
     * @param {function(string, DescribeApplicationFileInfoResponse):void} cb
     * @public
     */
    DescribeApplicationFileInfo(req, cb) {
        let resp = new DescribeApplicationFileInfoResponse();
        this.request("DescribeApplicationFileInfo", req, resp, cb);
    }

    /**
     * This API is used to modify a cloud application project.
     * @param {ModifyApplicationProjectRequest} req
     * @param {function(string, ModifyApplicationProjectResponse):void} cb
     * @public
     */
    ModifyApplicationProject(req, cb) {
        let resp = new ModifyApplicationProjectResponse();
        this.request("ModifyApplicationProject", req, resp, cb);
    }

    /**
     * This API is used to modify the version information of a cloud application.
     * @param {ModifyApplicationVersionRequest} req
     * @param {function(string, ModifyApplicationVersionResponse):void} cb
     * @public
     */
    ModifyApplicationVersion(req, cb) {
        let resp = new ModifyApplicationVersionResponse();
        this.request("ModifyApplicationVersion", req, resp, cb);
    }

    /**
     * This API is used to obtain the cloud application concurrency pack list.
     * @param {DescribeConcurrentPackagesRequest} req
     * @param {function(string, DescribeConcurrentPackagesResponse):void} cb
     * @public
     */
    DescribeConcurrentPackages(req, cb) {
        let resp = new DescribeConcurrentPackagesResponse();
        this.request("DescribeConcurrentPackages", req, resp, cb);
    }

    /**
     * This API is used to delete cloud application projects in batches.
     * @param {DeleteApplicationProjectsRequest} req
     * @param {function(string, DeleteApplicationProjectsResponse):void} cb
     * @public
     */
    DeleteApplicationProjects(req, cb) {
        let resp = new DeleteApplicationProjectsResponse();
        this.request("DeleteApplicationProjects", req, resp, cb);
    }

    /**
     * This API is used to delete a cloud application.
     * @param {DeleteApplicationRequest} req
     * @param {function(string, DeleteApplicationResponse):void} cb
     * @public
     */
    DeleteApplication(req, cb) {
        let resp = new DeleteApplicationResponse();
        this.request("DeleteApplication", req, resp, cb);
    }

    /**
     * This API is used to start pushing your cloud application's video streams to a specified URL. The codec for the streaming is automatically selected based on the client's (SDK) capabilities, with a default order of H.265, H.264, VP8, and VP9. This streaming method will be billed separately. For details about the billing method, see [Charging for Streaming to Specified URL](https://intl.cloud.tencent.com/document/product/1547/72168?from_cn_redirect=1#98ac188a-d122-4caf-88be-05268ecefdf6).
     * @param {StartPublishStreamWithURLRequest} req
     * @param {function(string, StartPublishStreamWithURLResponse):void} cb
     * @public
     */
    StartPublishStreamWithURL(req, cb) {
        let resp = new StartPublishStreamWithURLResponse();
        this.request("StartPublishStreamWithURL", req, resp, cb);
    }

    /**
     * This API is used to create a cloud application version snapshot.
     * @param {CreateApplicationSnapshotRequest} req
     * @param {function(string, CreateApplicationSnapshotResponse):void} cb
     * @public
     */
    CreateApplicationSnapshot(req, cb) {
        let resp = new CreateApplicationSnapshotResponse();
        this.request("CreateApplicationSnapshot", req, resp, cb);
    }

    /**
     * This API is used to modify basic information of a cloud application.
     * @param {ModifyApplicationBaseInfoRequest} req
     * @param {function(string, ModifyApplicationBaseInfoResponse):void} cb
     * @public
     */
    ModifyApplicationBaseInfo(req, cb) {
        let resp = new ModifyApplicationBaseInfoResponse();
        this.request("ModifyApplicationBaseInfo", req, resp, cb);
    }

    /**
     * This API is used to query the version information of a cloud application.
     * @param {DescribeApplicationVersionRequest} req
     * @param {function(string, DescribeApplicationVersionResponse):void} cb
     * @public
     */
    DescribeApplicationVersion(req, cb) {
        let resp = new DescribeApplicationVersionResponse();
        this.request("DescribeApplicationVersion", req, resp, cb);
    }

    /**
     * This API is used to query the cloud application startup path list.
     * @param {DescribeApplicationPathListRequest} req
     * @param {function(string, DescribeApplicationPathListResponse):void} cb
     * @public
     */
    DescribeApplicationPathList(req, cb) {
        let resp = new DescribeApplicationPathListResponse();
        this.request("DescribeApplicationPathList", req, resp, cb);
    }

    /**
     * This API is used to modify a cloud application concurrency pack.
     * @param {ModifyConcurrentPackageRequest} req
     * @param {function(string, ModifyConcurrentPackageResponse):void} cb
     * @public
     */
    ModifyConcurrentPackage(req, cb) {
        let resp = new ModifyConcurrentPackageResponse();
        this.request("ModifyConcurrentPackage", req, resp, cb);
    }

    /**
     * This API is used to request concurrency quota. The timeout period of the API is 20 seconds.
     * @param {ApplyConcurrentRequest} req
     * @param {function(string, ApplyConcurrentResponse):void} cb
     * @public
     */
    ApplyConcurrent(req, cb) {
        let resp = new ApplyConcurrentResponse();
        this.request("ApplyConcurrent", req, resp, cb);
    }

    /**
     * This API is used to unbind a concurrency pack from a project.
     * @param {UnbindConcurrentPackagesFromProjectRequest} req
     * @param {function(string, UnbindConcurrentPackagesFromProjectResponse):void} cb
     * @public
     */
    UnbindConcurrentPackagesFromProject(req, cb) {
        let resp = new UnbindConcurrentPackagesFromProjectResponse();
        this.request("UnbindConcurrentPackagesFromProject", req, resp, cb);
    }

    /**
     * This API is used to start pushing your cloud application's video streams in real time to CSS. The codec for the streaming is automatically selected based on the client's (SDK) capabilities, with a default order of H.265, H.264, VP8, and VP9.
     * @param {StartPublishStreamRequest} req
     * @param {function(string, StartPublishStreamResponse):void} cb
     * @public
     */
    StartPublishStream(req, cb) {
        let resp = new StartPublishStreamResponse();
        this.request("StartPublishStream", req, resp, cb);
    }

    /**
     * This API is used to stop pushing streams.
     * @param {StopPublishStreamRequest} req
     * @param {function(string, StopPublishStreamResponse):void} cb
     * @public
     */
    StopPublishStream(req, cb) {
        let resp = new StopPublishStreamResponse();
        this.request("StopPublishStream", req, resp, cb);
    }

    /**
     * This API is used to obtain the concurrency count.
     * @param {DescribeConcurrentCountRequest} req
     * @param {function(string, DescribeConcurrentCountResponse):void} cb
     * @public
     */
    DescribeConcurrentCount(req, cb) {
        let resp = new DescribeConcurrentCountResponse();
        this.request("DescribeConcurrentCount", req, resp, cb);
    }

    /**
     * This API is used to query COS key information.
     * @param {DescribeCosCredentialRequest} req
     * @param {function(string, DescribeCosCredentialResponse):void} cb
     * @public
     */
    DescribeCosCredential(req, cb) {
        let resp = new DescribeCosCredentialResponse();
        this.request("DescribeCosCredential", req, resp, cb);
    }

    /**
     * This API is used to delete a cloud application version.
     * @param {DeleteApplicationVersionRequest} req
     * @param {function(string, DeleteApplicationVersionResponse):void} cb
     * @public
     */
    DeleteApplicationVersion(req, cb) {
        let resp = new DeleteApplicationVersionResponse();
        this.request("DeleteApplicationVersion", req, resp, cb);
    }

    /**
     * This API is used to query the running status of a cloud application and update status information.
     * @param {DescribeApplicationStatusRequest} req
     * @param {function(string, DescribeApplicationStatusResponse):void} cb
     * @public
     */
    DescribeApplicationStatus(req, cb) {
        let resp = new DescribeApplicationStatusResponse();
        this.request("DescribeApplicationStatus", req, resp, cb);
    }

    /**
     * This API is used to query the concurrency overview.
     * @param {DescribeConcurrentSummaryRequest} req
     * @param {function(string, DescribeConcurrentSummaryResponse):void} cb
     * @public
     */
    DescribeConcurrentSummary(req, cb) {
        let resp = new DescribeConcurrentSummaryResponse();
        this.request("DescribeConcurrentSummary", req, resp, cb);
    }

    /**
     * This API is used to create a cloud application project.
     * @param {CreateApplicationProjectRequest} req
     * @param {function(string, CreateApplicationProjectResponse):void} cb
     * @public
     */
    CreateApplicationProject(req, cb) {
        let resp = new CreateApplicationProjectResponse();
        this.request("CreateApplicationProject", req, resp, cb);
    }

    /**
     * This API is used to obtain the cloud application project list.
     * @param {DescribeApplicationProjectsRequest} req
     * @param {function(string, DescribeApplicationProjectsResponse):void} cb
     * @public
     */
    DescribeApplicationProjects(req, cb) {
        let resp = new DescribeApplicationProjectsResponse();
        this.request("DescribeApplicationProjects", req, resp, cb);
    }

    /**
     * This API is used to bind a concurrency pack to a project.
     * @param {BindConcurrentPackagesToProjectRequest} req
     * @param {function(string, BindConcurrentPackagesToProjectResponse):void} cb
     * @public
     */
    BindConcurrentPackagesToProject(req, cb) {
        let resp = new BindConcurrentPackagesToProjectResponse();
        this.request("BindConcurrentPackagesToProject", req, resp, cb);
    }

    /**
     * This API is used to create a session. The timeout period of the API is 5 seconds.
     * @param {CreateSessionRequest} req
     * @param {function(string, CreateSessionResponse):void} cb
     * @public
     */
    CreateSession(req, cb) {
        let resp = new CreateSessionResponse();
        this.request("CreateSession", req, resp, cb);
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
     * This API is used to modify the mobile application data.
     * @param {ModifyMobileApplicationInfoRequest} req
     * @param {function(string, ModifyMobileApplicationInfoResponse):void} cb
     * @public
     */
    ModifyMobileApplicationInfo(req, cb) {
        let resp = new ModifyMobileApplicationInfoResponse();
        this.request("ModifyMobileApplicationInfo", req, resp, cb);
    }

    /**
     * This API is used to query the cloud application list.
     * @param {DescribeApplicationListRequest} req
     * @param {function(string, DescribeApplicationListResponse):void} cb
     * @public
     */
    DescribeApplicationList(req, cb) {
        let resp = new DescribeApplicationListResponse();
        this.request("DescribeApplicationList", req, resp, cb);
    }

    /**
     * This API is used to obtain the advanced configuration information of a cloud application project.
     * @param {DescribeApplicationProjectAdvancedConfigRequest} req
     * @param {function(string, DescribeApplicationProjectAdvancedConfigResponse):void} cb
     * @public
     */
    DescribeApplicationProjectAdvancedConfig(req, cb) {
        let resp = new DescribeApplicationProjectAdvancedConfigResponse();
        this.request("DescribeApplicationProjectAdvancedConfig", req, resp, cb);
    }

    /**
     * This API is used to terminate a session. If cloud-based streaming has been enabled for this session, the cloud-based streaming will end upon session termination.
     * @param {DestroySessionRequest} req
     * @param {function(string, DestroySessionResponse):void} cb
     * @public
     */
    DestroySession(req, cb) {
        let resp = new DestroySessionResponse();
        this.request("DestroySession", req, resp, cb);
    }

    /**
     * This API is used to create a cloud application version.
     * @param {CreateApplicationVersionRequest} req
     * @param {function(string, CreateApplicationVersionResponse):void} cb
     * @public
     */
    CreateApplicationVersion(req, cb) {
        let resp = new CreateApplicationVersionResponse();
        this.request("CreateApplicationVersion", req, resp, cb);
    }

    /**
     * This API is used to reset a concurrency pack and disconnect all user connections.
     * @param {ResetConcurrentPackagesRequest} req
     * @param {function(string, ResetConcurrentPackagesResponse):void} cb
     * @public
     */
    ResetConcurrentPackages(req, cb) {
        let resp = new ResetConcurrentPackagesResponse();
        this.request("ResetConcurrentPackages", req, resp, cb);
    }


}
module.exports = CarClient;
