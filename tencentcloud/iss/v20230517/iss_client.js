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
const DescribeTaskResponse = models.DescribeTaskResponse;
const BatchGetVLPlanSourceFileURLRequest = models.BatchGetVLPlanSourceFileURLRequest;
const UpdateDeviceStatusRequest = models.UpdateDeviceStatusRequest;
const ListDevicesRequest = models.ListDevicesRequest;
const DeleteRecordBackupPlanResponse = models.DeleteRecordBackupPlanResponse;
const DescribeDeviceChannelData = models.DescribeDeviceChannelData;
const VideoDownloadTaskData = models.VideoDownloadTaskData;
const ListOrganizationChannelsRequest = models.ListOrganizationChannelsRequest;
const DescribeDevicePresetData = models.DescribeDevicePresetData;
const ListSubTasksRequest = models.ListSubTasksRequest;
const VLPlanResultSnapshotImageUrlInfo = models.VLPlanResultSnapshotImageUrlInfo;
const AddRecordBackupPlanResponse = models.AddRecordBackupPlanResponse;
const DescribeCNAMERequest = models.DescribeCNAMERequest;
const DescribeVideoDownloadUrlData = models.DescribeVideoDownloadUrlData;
const ControlRecordTimelineRequest = models.ControlRecordTimelineRequest;
const CreateVLTemplateResponse = models.CreateVLTemplateResponse;
const DeleteOrganizationRequest = models.DeleteOrganizationRequest;
const SetForbidPlayChannelsRequest = models.SetForbidPlayChannelsRequest;
const SubTaskData = models.SubTaskData;
const DescribeCNAMEResponse = models.DescribeCNAMEResponse;
const ISAPIOutputData = models.ISAPIOutputData;
const UpdateOrganizationResponse = models.UpdateOrganizationResponse;
const DescribeDeviceData = models.DescribeDeviceData;
const DescribeDeviceChannelResponse = models.DescribeDeviceChannelResponse;
const BatchDeleteVideoDownloadTaskRequest = models.BatchDeleteVideoDownloadTaskRequest;
const BatchAssignVLPlanChannelsResponse = models.BatchAssignVLPlanChannelsResponse;
const ListVideoSnapshotTemplateRequest = models.ListVideoSnapshotTemplateRequest;
const ModifyVLPlanRequest = models.ModifyVLPlanRequest;
const UpdateDeviceOrganizationRequest = models.UpdateDeviceOrganizationRequest;
const UpdateDeviceOrganizationResponse = models.UpdateDeviceOrganizationResponse;
const AddOrganizationResponse = models.AddOrganizationResponse;
const CreateVideoSnapshotTemplateResponse = models.CreateVideoSnapshotTemplateResponse;
const ModifyVideoSnapshotConfigRequest = models.ModifyVideoSnapshotConfigRequest;
const DescribeVideoBitRateResponse = models.DescribeVideoBitRateResponse;
const DescribeDomainResponse = models.DescribeDomainResponse;
const DescribeRecordRetrieveTaskData = models.DescribeRecordRetrieveTaskData;
const VLPlanResultDetailInfo = models.VLPlanResultDetailInfo;
const DescribeRecordBackupTemplateData = models.DescribeRecordBackupTemplateData;
const DeleteVLPlanRequest = models.DeleteVLPlanRequest;
const ControlDeviceStreamResponse = models.ControlDeviceStreamResponse;
const DeleteRecordRetrieveTaskResponse = models.DeleteRecordRetrieveTaskResponse;
const DeleteRecordPlanResponse = models.DeleteRecordPlanResponse;
const DescribeOrganizationResponse = models.DescribeOrganizationResponse;
const UpdateUserDeviceRequest = models.UpdateUserDeviceRequest;
const DescribeVideoSnapshotTemplateRequest = models.DescribeVideoSnapshotTemplateRequest;
const CreateVLPlanResponse = models.CreateVLPlanResponse;
const AddRecordBackupTemplateRequest = models.AddRecordBackupTemplateRequest;
const DescribeVideoBitRateRequest = models.DescribeVideoBitRateRequest;
const SetForbidplayChannelParam = models.SetForbidplayChannelParam;
const DescribeUserDeviceListRequest = models.DescribeUserDeviceListRequest;
const VLPlanInfo = models.VLPlanInfo;
const DescribeRecordRetrieveTaskRequest = models.DescribeRecordRetrieveTaskRequest;
const ControlDeviceSnapshotResponse = models.ControlDeviceSnapshotResponse;
const MultiSnapshotMode = models.MultiSnapshotMode;
const RefreshDeviceChannelResponse = models.RefreshDeviceChannelResponse;
const DeleteOrganizationResponse = models.DeleteOrganizationResponse;
const DescribeRecordTemplateRequest = models.DescribeRecordTemplateRequest;
const DeleteVideoSnapshotTemplateResponse = models.DeleteVideoSnapshotTemplateResponse;
const DeleteRecordTemplateRequest = models.DeleteRecordTemplateRequest;
const DescribeRecordPlanResponse = models.DescribeRecordPlanResponse;
const ListRecordBackupPlanDevicesData = models.ListRecordBackupPlanDevicesData;
const BatchGetVideoSnapshotImageUrlResponse = models.BatchGetVideoSnapshotImageUrlResponse;
const AddRecordBackupTemplateData = models.AddRecordBackupTemplateData;
const DeleteUserDeviceRequest = models.DeleteUserDeviceRequest;
const AddRecordPlanResponse = models.AddRecordPlanResponse;
const ListRecordRetrieveTasksResponse = models.ListRecordRetrieveTasksResponse;
const ListVideoDownloadTaskResponse = models.ListVideoDownloadTaskResponse;
const DeleteDomainRequest = models.DeleteDomainRequest;
const ListRecordRetrieveTasksRequest = models.ListRecordRetrieveTasksRequest;
const DeleteRecordPlanRequest = models.DeleteRecordPlanRequest;
const DescribeStreamAuthData = models.DescribeStreamAuthData;
const AddRecordTemplateResponse = models.AddRecordTemplateResponse;
const ListRecordPlansRequest = models.ListRecordPlansRequest;
const DescribeUserDeviceResponse = models.DescribeUserDeviceResponse;
const DescribeRecordRetrieveTaskResponse = models.DescribeRecordRetrieveTaskResponse;
const DescribeVLPlanResponse = models.DescribeVLPlanResponse;
const ListDeviceSnapshotsRequest = models.ListDeviceSnapshotsRequest;
const UpdateRecordPlanRequest = models.UpdateRecordPlanRequest;
const DescribeOrganizationRequest = models.DescribeOrganizationRequest;
const DescribeVideoSnapshotConfigRequest = models.DescribeVideoSnapshotConfigRequest;
const UpdateDeviceData = models.UpdateDeviceData;
const AddRecordPlanRequest = models.AddRecordPlanRequest;
const ModifyVLPlanResponse = models.ModifyVLPlanResponse;
const ListRecordTemplatesRequest = models.ListRecordTemplatesRequest;
const DescribeOrganizationData = models.DescribeOrganizationData;
const VideoSnapshotConfigInfo = models.VideoSnapshotConfigInfo;
const DescribeVideoDownloadUrlResponse = models.DescribeVideoDownloadUrlResponse;
const RecordPlanOptData = models.RecordPlanOptData;
const EffectiveTime = models.EffectiveTime;
const DescribeUserDeviceListResponse = models.DescribeUserDeviceListResponse;
const ListVideoSnapshotTemplateData = models.ListVideoSnapshotTemplateData;
const UpdateRecordBackupPlanModify = models.UpdateRecordBackupPlanModify;
const RecordRetrieveTaskChannelInfo = models.RecordRetrieveTaskChannelInfo;
const DescribeVLPlanRequest = models.DescribeVLPlanRequest;
const CallISAPIRequest = models.CallISAPIRequest;
const AddRecordRetrieveTaskRequest = models.AddRecordRetrieveTaskRequest;
const DescribeRecordPlanRequest = models.DescribeRecordPlanRequest;
const VideoSceneInfo = models.VideoSceneInfo;
const ControlDevicePresetResponse = models.ControlDevicePresetResponse;
const ListRecordBackupPlansResponse = models.ListRecordBackupPlansResponse;
const OrganizationChannelInfo = models.OrganizationChannelInfo;
const ChannelInfo = models.ChannelInfo;
const DeleteVideoSnapshotConfigRequest = models.DeleteVideoSnapshotConfigRequest;
const DescribeDevicePresetRequest = models.DescribeDevicePresetRequest;
const DescribeDomainRequest = models.DescribeDomainRequest;
const BatchOperateDeviceData = models.BatchOperateDeviceData;
const RecordPlaybackUrl = models.RecordPlaybackUrl;
const BatchDeleteVideoDownloadTaskResponse = models.BatchDeleteVideoDownloadTaskResponse;
const VideoDownloadTask = models.VideoDownloadTask;
const CallISAPIResponse = models.CallISAPIResponse;
const ListRecordPlanDevicesRequest = models.ListRecordPlanDevicesRequest;
const ListTasksResponse = models.ListTasksResponse;
const AddStreamAuthResponse = models.AddStreamAuthResponse;
const ListDevicesResponse = models.ListDevicesResponse;
const AddStreamAuthData = models.AddStreamAuthData;
const RefreshDeviceChannelRequest = models.RefreshDeviceChannelRequest;
const DescribeVLPlanResultRequest = models.DescribeVLPlanResultRequest;
const CallbackURL = models.CallbackURL;
const ListDeviceInfo = models.ListDeviceInfo;
const LifeCycleData = models.LifeCycleData;
const ListVideoDownloadTaskData = models.ListVideoDownloadTaskData;
const DescribeDomainData = models.DescribeDomainData;
const ListRecordBackupTemplatesResponse = models.ListRecordBackupTemplatesResponse;
const VideoSnapshotTemplateInfo = models.VideoSnapshotTemplateInfo;
const MultiVideoSnapshotMode = models.MultiVideoSnapshotMode;
const UpdateRecordTemplateRequest = models.UpdateRecordTemplateRequest;
const DescribeRecordPlaybackUrlRequest = models.DescribeRecordPlaybackUrlRequest;
const DescribeDeviceAddrList = models.DescribeDeviceAddrList;
const ListRecordPlansResponse = models.ListRecordPlansResponse;
const DescribeRecordTemplateResponse = models.DescribeRecordTemplateResponse;
const BatchAddVideoSnapshotConfigChannelRequest = models.BatchAddVideoSnapshotConfigChannelRequest;
const Timeline = models.Timeline;
const DescribeDevicePresetResponse = models.DescribeDevicePresetResponse;
const DescribeStreamAuthRequest = models.DescribeStreamAuthRequest;
const UpdateRecordBackupPlanRequest = models.UpdateRecordBackupPlanRequest;
const RecordTimeLine = models.RecordTimeLine;
const VLTemplateInfo = models.VLTemplateInfo;
const ControlDevicePTZResponse = models.ControlDevicePTZResponse;
const ListRecordBackupPlansRequest = models.ListRecordBackupPlansRequest;
const CreateVideoSnapshotConfigRequest = models.CreateVideoSnapshotConfigRequest;
const AddOrgData = models.AddOrgData;
const AddUserDeviceRequest = models.AddUserDeviceRequest;
const ListRecordBackupPlanDevicesResponse = models.ListRecordBackupPlanDevicesResponse;
const DeleteTaskRequest = models.DeleteTaskRequest;
const UpdateUserDeviceResponse = models.UpdateUserDeviceResponse;
const ControlDevicePTZRequest = models.ControlDevicePTZRequest;
const DescribeRecordBackupPlanRequest = models.DescribeRecordBackupPlanRequest;
const DescribeRecordBackupPlanResponse = models.DescribeRecordBackupPlanResponse;
const ListSubTasksData = models.ListSubTasksData;
const DescribeDeviceChannelRequest = models.DescribeDeviceChannelRequest;
const DescribeVideoSnapshotTemplateResponse = models.DescribeVideoSnapshotTemplateResponse;
const BatchGetVLPlanSourceFileURLResponse = models.BatchGetVLPlanSourceFileURLResponse;
const ListVLPlansResponse = models.ListVLPlansResponse;
const UpdateRecordPlanData = models.UpdateRecordPlanData;
const CreateVideoSnapshotConfigResponse = models.CreateVideoSnapshotConfigResponse;
const ListTasksRequest = models.ListTasksRequest;
const ListForbidplayChannelsData = models.ListForbidplayChannelsData;
const CreateVideoDownloadTaskResponse = models.CreateVideoDownloadTaskResponse;
const UpdateOrganizationRequest = models.UpdateOrganizationRequest;
const AddRecordBackupPlanData = models.AddRecordBackupPlanData;
const ListVLPlansRequest = models.ListVLPlansRequest;
const DescribeGBDeviceAddrRequest = models.DescribeGBDeviceAddrRequest;
const GBDeviceSnapInfo = models.GBDeviceSnapInfo;
const DescribeDeviceListData = models.DescribeDeviceListData;
const ControlDeviceSnapshotRequest = models.ControlDeviceSnapshotRequest;
const UpdateRecordTemplateData = models.UpdateRecordTemplateData;
const DescribeDomainRegionRequest = models.DescribeDomainRegionRequest;
const AddRecordTemplateRequest = models.AddRecordTemplateRequest;
const DescribeRecordFileRequest = models.DescribeRecordFileRequest;
const TaskData = models.TaskData;
const QueryForbidPlayChannelListResponse = models.QueryForbidPlayChannelListResponse;
const DescribeVideoDownloadUrlRequest = models.DescribeVideoDownloadUrlRequest;
const RecordPlanBaseInfo = models.RecordPlanBaseInfo;
const BatchGetVideoSnapshotImageUrlData = models.BatchGetVideoSnapshotImageUrlData;
const DescribeVLPlanResultResponse = models.DescribeVLPlanResultResponse;
const DescribeUserDeviceRequest = models.DescribeUserDeviceRequest;
const ImageSceneInfo = models.ImageSceneInfo;
const DescribeRecordFileData = models.DescribeRecordFileData;
const AddStreamAuthRequest = models.AddStreamAuthRequest;
const RecordTemplateTimeSections = models.RecordTemplateTimeSections;
const BitRateInfo = models.BitRateInfo;
const PlayRecordRequest = models.PlayRecordRequest;
const UpdateRecordBackupTemplateModify = models.UpdateRecordBackupTemplateModify;
const DeleteRecordRetrieveTaskRequest = models.DeleteRecordRetrieveTaskRequest;
const QueryForbidPlayChannelListRequest = models.QueryForbidPlayChannelListRequest;
const DeleteVideoSnapshotConfigResponse = models.DeleteVideoSnapshotConfigResponse;
const DescribeRecordFileResponse = models.DescribeRecordFileResponse;
const DescribeGBDeviceAddrResponse = models.DescribeGBDeviceAddrResponse;
const ControlDevicePresetRequest = models.ControlDevicePresetRequest;
const ControlDeviceStreamRequest = models.ControlDeviceStreamRequest;
const DescribeVideoSnapshotConfigResponse = models.DescribeVideoSnapshotConfigResponse;
const ListRecordBackupPlanDevicesRequest = models.ListRecordBackupPlanDevicesRequest;
const ModifyVideoSnapshotConfigResponse = models.ModifyVideoSnapshotConfigResponse;
const DeleteDomainResponse = models.DeleteDomainResponse;
const AddRecordRetrieveTaskResponse = models.AddRecordRetrieveTaskResponse;
const DeleteRecordTemplateResponse = models.DeleteRecordTemplateResponse;
const ListRecordPlanDevicesData = models.ListRecordPlanDevicesData;
const ListRecordBackupTemplatesData = models.ListRecordBackupTemplatesData;
const ListRecordTemplatesResponse = models.ListRecordTemplatesResponse;
const ListVLTemplatesRequest = models.ListVLTemplatesRequest;
const DescribeRecordBackupTemplateRequest = models.DescribeRecordBackupTemplateRequest;
const ListSubTasksResponse = models.ListSubTasksResponse;
const DescribeVLTemplateResponse = models.DescribeVLTemplateResponse;
const UpdateRecordBackupTemplateResponse = models.UpdateRecordBackupTemplateResponse;
const ControlRecordTimelineResponse = models.ControlRecordTimelineResponse;
const AddRecordRetrieveTaskData = models.AddRecordRetrieveTaskData;
const BatchAssignVLPlanChannelsRequest = models.BatchAssignVLPlanChannelsRequest;
const DescribeRecordBackupPlanData = models.DescribeRecordBackupPlanData;
const ImageUrlInfo = models.ImageUrlInfo;
const ChannelAttrInfo = models.ChannelAttrInfo;
const UpdateRecordPlanResponse = models.UpdateRecordPlanResponse;
const DeleteVLTemplateResponse = models.DeleteVLTemplateResponse;
const DeleteRecordBackupPlanRequest = models.DeleteRecordBackupPlanRequest;
const ListRecordBackupTemplatesRequest = models.ListRecordBackupTemplatesRequest;
const ListRecordPlanDevicesResponse = models.ListRecordPlanDevicesResponse;
const RecordPlanChannelInfo = models.RecordPlanChannelInfo;
const SetForbidPlayChannelsResponse = models.SetForbidPlayChannelsResponse;
const ListVideoDownloadTaskRequest = models.ListVideoDownloadTaskRequest;
const ListVideoSnapshotTemplateResponse = models.ListVideoSnapshotTemplateResponse;
const DeleteRecordBackupTemplateRequest = models.DeleteRecordBackupTemplateRequest;
const RecordRetrieveTaskDetailsInfo = models.RecordRetrieveTaskDetailsInfo;
const DescribeStreamAuthResponse = models.DescribeStreamAuthResponse;
const DescribeVideoBitRateList = models.DescribeVideoBitRateList;
const UpdateRecordTemplateResponse = models.UpdateRecordTemplateResponse;
const AddRecordBackupTemplateResponse = models.AddRecordBackupTemplateResponse;
const PlayRecordResponse = models.PlayRecordResponse;
const DescribeRecordBackupTemplateResponse = models.DescribeRecordBackupTemplateResponse;
const AddUserDeviceResponse = models.AddUserDeviceResponse;
const PlayRecordData = models.PlayRecordData;
const DeleteTaskResponse = models.DeleteTaskResponse;
const DescribeRecordPlaybackUrlResponse = models.DescribeRecordPlaybackUrlResponse;
const DeleteVLPlanResponse = models.DeleteVLPlanResponse;
const DescribeTaskRequest = models.DescribeTaskRequest;
const ListOrganizationChannelsResponse = models.ListOrganizationChannelsResponse;
const DescribeVLTemplateRequest = models.DescribeVLTemplateRequest;
const CreateVLTemplateRequest = models.CreateVLTemplateRequest;
const UpdateOrgData = models.UpdateOrgData;
const DescribeDomainRegionResponse = models.DescribeDomainRegionResponse;
const BatchOperateDeviceRequest = models.BatchOperateDeviceRequest;
const ListOrganizationChannelsData = models.ListOrganizationChannelsData;
const AddRecordBackupPlanRequest = models.AddRecordBackupPlanRequest;
const ListTasksData = models.ListTasksData;
const CreateVLPlanRequest = models.CreateVLPlanRequest;
const ControlDeviceStreamData = models.ControlDeviceStreamData;
const ListDeviceSnapshotsResponse = models.ListDeviceSnapshotsResponse;
const RecordTemplateInfo = models.RecordTemplateInfo;
const UpdateRecordBackupTemplateRequest = models.UpdateRecordBackupTemplateRequest;
const DeleteVLTemplateRequest = models.DeleteVLTemplateRequest;
const UpdateDeviceStatusResponse = models.UpdateDeviceStatusResponse;
const DeleteUserDeviceResponse = models.DeleteUserDeviceResponse;
const UpdateRecordBackupPlanResponse = models.UpdateRecordBackupPlanResponse;
const DescribeDomainRegionData = models.DescribeDomainRegionData;
const AddOrganizationRequest = models.AddOrganizationRequest;
const RemoteAddrInfo = models.RemoteAddrInfo;
const BatchGetVideoSnapshotImageUrlRequest = models.BatchGetVideoSnapshotImageUrlRequest;
const UpdateRecordBackupPlanData = models.UpdateRecordBackupPlanData;
const ListRecordBackupPlanData = models.ListRecordBackupPlanData;
const DeleteRecordBackupTemplateResponse = models.DeleteRecordBackupTemplateResponse;
const CreateVideoDownloadTaskRequest = models.CreateVideoDownloadTaskRequest;
const CreateVideoSnapshotTemplateRequest = models.CreateVideoSnapshotTemplateRequest;
const DeleteVideoSnapshotTemplateRequest = models.DeleteVideoSnapshotTemplateRequest;
const BatchAddVideoSnapshotConfigChannelResponse = models.BatchAddVideoSnapshotConfigChannelResponse;
const UpdateRecordBackupTemplateData = models.UpdateRecordBackupTemplateData;
const BatchOperateDeviceResponse = models.BatchOperateDeviceResponse;
const ListVLTemplatesResponse = models.ListVLTemplatesResponse;
const AddDeviceData = models.AddDeviceData;


/**
 * iss client
 * @class
 */
class IssClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iss.intl.tencentcloudapi.com", "2023-05-17", credential, region, profile);
    }
    
    /**
     * Get the visual understanding plan list.
     * @param {ListVLPlansRequest} req
     * @param {function(string, ListVLPlansResponse):void} cb
     * @public
     */
    ListVLPlans(req, cb) {
        let resp = new ListVLPlansResponse();
        this.request("ListVLPlans", req, resp, cb);
    }

    /**
     * This API is used to query the retrieval task list.
     * @param {ListRecordRetrieveTasksRequest} req
     * @param {function(string, ListRecordRetrieveTasksResponse):void} cb
     * @public
     */
    ListRecordRetrieveTasks(req, cb) {
        let resp = new ListRecordRetrieveTasksResponse();
        this.request("ListRecordRetrieveTasks", req, resp, cb);
    }

    /**
     * This API is used to query the real-time cloud migration plan list.
     * @param {ListRecordPlansRequest} req
     * @param {function(string, ListRecordPlansResponse):void} cb
     * @public
     */
    ListRecordPlans(req, cb) {
        let resp = new ListRecordPlansResponse();
        this.request("ListRecordPlans", req, resp, cb);
    }

    /**
     * This API is used to create a screenshot configuration.
     * @param {CreateVideoSnapshotConfigRequest} req
     * @param {function(string, CreateVideoSnapshotConfigResponse):void} cb
     * @public
     */
    CreateVideoSnapshotConfig(req, cb) {
        let resp = new CreateVideoSnapshotConfigResponse();
        this.request("CreateVideoSnapshotConfig", req, resp, cb);
    }

    /**
     * Used to modify an organization.
     * @param {UpdateOrganizationRequest} req
     * @param {function(string, UpdateOrganizationResponse):void} cb
     * @public
     */
    UpdateOrganization(req, cb) {
        let resp = new UpdateOrganizationResponse();
        this.request("UpdateOrganization", req, resp, cb);
    }

    /**
     * Add channels for screenshot configuration in batches.
     * @param {BatchAddVideoSnapshotConfigChannelRequest} req
     * @param {function(string, BatchAddVideoSnapshotConfigChannelResponse):void} cb
     * @public
     */
    BatchAddVideoSnapshotConfigChannel(req, cb) {
        let resp = new BatchAddVideoSnapshotConfigChannelResponse();
        this.request("BatchAddVideoSnapshotConfigChannel", req, resp, cb);
    }

    /**
     * This API is used to query the list of added domains.
     * @param {DescribeDomainRequest} req
     * @param {function(string, DescribeDomainResponse):void} cb
     * @public
     */
    DescribeDomain(req, cb) {
        let resp = new DescribeDomainResponse();
        this.request("DescribeDomain", req, resp, cb);
    }

    /**
     * This API is used to obtain the real-time streaming address of a device.
     * @param {ControlDeviceStreamRequest} req
     * @param {function(string, ControlDeviceStreamResponse):void} cb
     * @public
     */
    ControlDeviceStream(req, cb) {
        let resp = new ControlDeviceStreamResponse();
        this.request("ControlDeviceStream", req, resp, cb);
    }

    /**
     * This API is used to synchronize channels of national standard devices. After the API is called, a request is triggered to get the channel list from devices. Newly-added channels are stored, and channels deleted on devices need to be deleted manually and are not automatically deleted in the backend.
     * @param {RefreshDeviceChannelRequest} req
     * @param {function(string, RefreshDeviceChannelResponse):void} cb
     * @public
     */
    RefreshDeviceChannel(req, cb) {
        let resp = new RefreshDeviceChannelResponse();
        this.request("RefreshDeviceChannel", req, resp, cb);
    }

    /**
     * Control device capture (single). Currently only support national standard devices.
     * @param {ControlDeviceSnapshotRequest} req
     * @param {function(string, ControlDeviceSnapshotResponse):void} cb
     * @public
     */
    ControlDeviceSnapshot(req, cb) {
        let resp = new ControlDeviceSnapshotResponse();
        this.request("ControlDeviceSnapshot", req, resp, cb);
    }

    /**
     * Batch associate visual understanding plan channels
     * @param {BatchAssignVLPlanChannelsRequest} req
     * @param {function(string, BatchAssignVLPlanChannelsResponse):void} cb
     * @public
     */
    BatchAssignVLPlanChannels(req, cb) {
        let resp = new BatchAssignVLPlanChannelsResponse();
        this.request("BatchAssignVLPlanChannels", req, resp, cb);
    }

    /**
     * This API is used to delete a real-time cloud migration plan.
     * @param {DeleteRecordPlanRequest} req
     * @param {function(string, DeleteRecordPlanResponse):void} cb
     * @public
     */
    DeleteRecordPlan(req, cb) {
        let resp = new DeleteRecordPlanResponse();
        this.request("DeleteRecordPlan", req, resp, cb);
    }

    /**
     * Used for device channel panning control, including turn, zoom scale, zoom, and aperture.
     * @param {ControlDevicePTZRequest} req
     * @param {function(string, ControlDevicePTZResponse):void} cb
     * @public
     */
    ControlDevicePTZ(req, cb) {
        let resp = new ControlDevicePTZResponse();
        this.request("ControlDevicePTZ", req, resp, cb);
    }

    /**
     * This API is used to query the device channel list under a recording cloud migration plan.
     * @param {ListRecordBackupPlanDevicesRequest} req
     * @param {function(string, ListRecordBackupPlanDevicesResponse):void} cb
     * @public
     */
    ListRecordBackupPlanDevices(req, cb) {
        let resp = new ListRecordBackupPlanDevicesResponse();
        this.request("ListRecordBackupPlanDevices", req, resp, cb);
    }

    /**
     * This API is used to query the batch task and simple task list.
     * @param {ListTasksRequest} req
     * @param {function(string, ListTasksResponse):void} cb
     * @public
     */
    ListTasks(req, cb) {
        let resp = new ListTasksResponse();
        this.request("ListTasks", req, resp, cb);
    }

    /**
     * Used to set push/pull stream authentication configuration.
     * @param {AddStreamAuthRequest} req
     * @param {function(string, AddStreamAuthResponse):void} cb
     * @public
     */
    AddStreamAuth(req, cb) {
        let resp = new AddStreamAuthResponse();
        this.request("AddStreamAuth", req, resp, cb);
    }

    /**
     * Used to delete a video recording cloud template.
     * @param {DeleteRecordBackupPlanRequest} req
     * @param {function(string, DeleteRecordBackupPlanResponse):void} cb
     * @public
     */
    DeleteRecordBackupPlan(req, cb) {
        let resp = new DeleteRecordBackupPlanResponse();
        this.request("DeleteRecordBackupPlan", req, resp, cb);
    }

    /**
     * This API is used to obtain the local device recording URL address.
     * @param {PlayRecordRequest} req
     * @param {function(string, PlayRecordResponse):void} cb
     * @public
     */
    PlayRecord(req, cb) {
        let resp = new PlayRecordResponse();
        this.request("PlayRecord", req, resp, cb);
    }

    /**
     * Used to modify a real-time cloud template.
     * @param {UpdateRecordTemplateRequest} req
     * @param {function(string, UpdateRecordTemplateResponse):void} cb
     * @public
     */
    UpdateRecordTemplate(req, cb) {
        let resp = new UpdateRecordTemplateResponse();
        this.request("UpdateRecordTemplate", req, resp, cb);
    }

    /**
     * Used to delete a real-time cloud template.
     * @param {DeleteRecordTemplateRequest} req
     * @param {function(string, DeleteRecordTemplateResponse):void} cb
     * @public
     */
    DeleteRecordTemplate(req, cb) {
        let resp = new DeleteRecordTemplateResponse();
        this.request("DeleteRecordTemplate", req, resp, cb);
    }

    /**
     * Used to enable or disable a device. After it is disabled, device registration is denied.
     * @param {UpdateDeviceStatusRequest} req
     * @param {function(string, UpdateDeviceStatusResponse):void} cb
     * @public
     */
    UpdateDeviceStatus(req, cb) {
        let resp = new UpdateDeviceStatusResponse();
        this.request("UpdateDeviceStatus", req, resp, cb);
    }

    /**
     * This API is used to create a retrieval task.
     * @param {AddRecordRetrieveTaskRequest} req
     * @param {function(string, AddRecordRetrieveTaskResponse):void} cb
     * @public
     */
    AddRecordRetrieveTask(req, cb) {
        let resp = new AddRecordRetrieveTaskResponse();
        this.request("AddRecordRetrieveTask", req, resp, cb);
    }

    /**
     * Query the plan details of visual understanding.
     * @param {DescribeVLPlanRequest} req
     * @param {function(string, DescribeVLPlanResponse):void} cb
     * @public
     */
    DescribeVLPlan(req, cb) {
        let resp = new DescribeVLPlanResponse();
        this.request("DescribeVLPlan", req, resp, cb);
    }

    /**
     * This API is used to query the service nodes that can be bound when a user adds a domain name. The result is all service nodes supported by the platform. Each service node can only be bound to one domain name.
     * @param {DescribeDomainRegionRequest} req
     * @param {function(string, DescribeDomainRegionResponse):void} cb
     * @public
     */
    DescribeDomainRegion(req, cb) {
        let resp = new DescribeDomainRegionResponse();
        this.request("DescribeDomainRegion", req, resp, cb);
    }

    /**
     * This API is used to query the video recording cloud template list.
     * @param {ListRecordBackupTemplatesRequest} req
     * @param {function(string, ListRecordBackupTemplatesResponse):void} cb
     * @public
     */
    ListRecordBackupTemplates(req, cb) {
        let resp = new ListRecordBackupTemplatesResponse();
        this.request("ListRecordBackupTemplates", req, resp, cb);
    }

    /**
     * This API is used to query video recording cloud template details.
     * @param {DescribeRecordBackupTemplateRequest} req
     * @param {function(string, DescribeRecordBackupTemplateResponse):void} cb
     * @public
     */
    DescribeRecordBackupTemplate(req, cb) {
        let resp = new DescribeRecordBackupTemplateResponse();
        this.request("DescribeRecordBackupTemplate", req, resp, cb);
    }

    /**
     * This API is used to query device details in batches.
     * @param {DescribeUserDeviceListRequest} req
     * @param {function(string, DescribeUserDeviceListResponse):void} cb
     * @public
     */
    DescribeUserDeviceList(req, cb) {
        let resp = new DescribeUserDeviceListResponse();
        this.request("DescribeUserDeviceList", req, resp, cb);
    }

    /**
     * This API is used to obtain the bitrate info of a video channel.
     * @param {DescribeVideoBitRateRequest} req
     * @param {function(string, DescribeVideoBitRateResponse):void} cb
     * @public
     */
    DescribeVideoBitRate(req, cb) {
        let resp = new DescribeVideoBitRateResponse();
        this.request("DescribeVideoBitRate", req, resp, cb);
    }

    /**
     * This API is used to create a local recording download task.
     * @param {CreateVideoDownloadTaskRequest} req
     * @param {function(string, CreateVideoDownloadTaskResponse):void} cb
     * @public
     */
    CreateVideoDownloadTask(req, cb) {
        let resp = new CreateVideoDownloadTaskResponse();
        this.request("CreateVideoDownloadTask", req, resp, cb);
    }

    /**
     * Delete a visual understanding template.
     * @param {DeleteVLTemplateRequest} req
     * @param {function(string, DeleteVLTemplateResponse):void} cb
     * @public
     */
    DeleteVLTemplate(req, cb) {
        let resp = new DeleteVLTemplateResponse();
        this.request("DeleteVLTemplate", req, resp, cb);
    }

    /**
     * This API is used to query recording cloud migration plan details.
     * @param {DescribeRecordBackupPlanRequest} req
     * @param {function(string, DescribeRecordBackupPlanResponse):void} cb
     * @public
     */
    DescribeRecordBackupPlan(req, cb) {
        let resp = new DescribeRecordBackupPlanResponse();
        this.request("DescribeRecordBackupPlan", req, resp, cb);
    }

    /**
     * Used to query the details of a cloud recording retrieval task.
     * @param {DescribeRecordRetrieveTaskRequest} req
     * @param {function(string, DescribeRecordRetrieveTaskResponse):void} cb
     * @public
     */
    DescribeRecordRetrieveTask(req, cb) {
        let resp = new DescribeRecordRetrieveTaskResponse();
        this.request("DescribeRecordRetrieveTask", req, resp, cb);
    }

    /**
     * Get device capture result list
     * @param {ListDeviceSnapshotsRequest} req
     * @param {function(string, ListDeviceSnapshotsResponse):void} cb
     * @public
     */
    ListDeviceSnapshots(req, cb) {
        let resp = new ListDeviceSnapshotsResponse();
        this.request("ListDeviceSnapshots", req, resp, cb);
    }

    /**
     * This API is used to query task details.
     * @param {DescribeTaskRequest} req
     * @param {function(string, DescribeTaskResponse):void} cb
     * @public
     */
    DescribeTask(req, cb) {
        let resp = new DescribeTaskResponse();
        this.request("DescribeTask", req, resp, cb);
    }

    /**
     * Used to change the organization of devices in batches.
     * @param {UpdateDeviceOrganizationRequest} req
     * @param {function(string, UpdateDeviceOrganizationResponse):void} cb
     * @public
     */
    UpdateDeviceOrganization(req, cb) {
        let resp = new UpdateDeviceOrganizationResponse();
        this.request("UpdateDeviceOrganization", req, resp, cb);
    }

    /**
     * This API is used to query the device channel list under a real-time cloud migration plan.
     * @param {ListRecordPlanDevicesRequest} req
     * @param {function(string, ListRecordPlanDevicesResponse):void} cb
     * @public
     */
    ListRecordPlanDevices(req, cb) {
        let resp = new ListRecordPlanDevicesResponse();
        this.request("ListRecordPlanDevices", req, resp, cb);
    }

    /**
     * This API is used to obtain the download url of cloud recordings.
     * @param {DescribeVideoDownloadUrlRequest} req
     * @param {function(string, DescribeVideoDownloadUrlResponse):void} cb
     * @public
     */
    DescribeVideoDownloadUrl(req, cb) {
        let resp = new DescribeVideoDownloadUrlResponse();
        this.request("DescribeVideoDownloadUrl", req, resp, cb);
    }

    /**
     * Used for batch operations (enable, disable, delete) on devices.
     * @param {BatchOperateDeviceRequest} req
     * @param {function(string, BatchOperateDeviceResponse):void} cb
     * @public
     */
    BatchOperateDevice(req, cb) {
        let resp = new BatchOperateDeviceResponse();
        this.request("BatchOperateDevice", req, resp, cb);
    }

    /**
     * Used to query push/pull stream authentication configuration.
     * @param {DescribeStreamAuthRequest} req
     * @param {function(string, DescribeStreamAuthResponse):void} cb
     * @public
     */
    DescribeStreamAuth(req, cb) {
        let resp = new DescribeStreamAuthResponse();
        this.request("DescribeStreamAuth", req, resp, cb);
    }

    /**
     * Used to add a real-time cloud template.
     * @param {AddRecordTemplateRequest} req
     * @param {function(string, AddRecordTemplateResponse):void} cb
     * @public
     */
    AddRecordTemplate(req, cb) {
        let resp = new AddRecordTemplateResponse();
        this.request("AddRecordTemplate", req, resp, cb);
    }

    /**
     * This API is used to obtain the device list under the corresponding organization.
     * @param {ListDevicesRequest} req
     * @param {function(string, ListDevicesResponse):void} cb
     * @public
     */
    ListDevices(req, cb) {
        let resp = new ListDevicesResponse();
        this.request("ListDevices", req, resp, cb);
    }

    /**
     * This API is used to query real-time cloud migration template details.
     * @param {DescribeRecordTemplateRequest} req
     * @param {function(string, DescribeRecordTemplateResponse):void} cb
     * @public
     */
    DescribeRecordTemplate(req, cb) {
        let resp = new DescribeRecordTemplateResponse();
        this.request("DescribeRecordTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the device cloud recording timeline information, which is the cloud storage video recording after setting a recording schedule for video upload to cloud.
     * @param {DescribeRecordFileRequest} req
     * @param {function(string, DescribeRecordFileResponse):void} cb
     * @public
     */
    DescribeRecordFile(req, cb) {
        let resp = new DescribeRecordFileResponse();
        this.request("DescribeRecordFile", req, resp, cb);
    }

    /**
     * Query the result details of a vision understanding plan
     * @param {DescribeVLPlanResultRequest} req
     * @param {function(string, DescribeVLPlanResultResponse):void} cb
     * @public
     */
    DescribeVLPlanResult(req, cb) {
        let resp = new DescribeVLPlanResultResponse();
        this.request("DescribeVLPlanResult", req, resp, cb);
    }

    /**
     * Get a list of visual understanding templates.
     * @param {ListVLTemplatesRequest} req
     * @param {function(string, ListVLTemplatesResponse):void} cb
     * @public
     */
    ListVLTemplates(req, cb) {
        let resp = new ListVLTemplatesResponse();
        this.request("ListVLTemplates", req, resp, cb);
    }

    /**
     * This API is used to delete domain names.
     * @param {DeleteDomainRequest} req
     * @param {function(string, DeleteDomainResponse):void} cb
     * @public
     */
    DeleteDomain(req, cb) {
        let resp = new DeleteDomainResponse();
        this.request("DeleteDomain", req, resp, cb);
    }

    /**
     * Create a visual understanding template.
     * @param {CreateVLTemplateRequest} req
     * @param {function(string, CreateVLTemplateResponse):void} cb
     * @public
     */
    CreateVLTemplate(req, cb) {
        let resp = new CreateVLTemplateResponse();
        this.request("CreateVLTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify device configuration information.
     * @param {UpdateUserDeviceRequest} req
     * @param {function(string, UpdateUserDeviceResponse):void} cb
     * @public
     */
    UpdateUserDevice(req, cb) {
        let resp = new UpdateUserDeviceResponse();
        this.request("UpdateUserDevice", req, resp, cb);
    }

    /**
     * This API is used to query the channels of a device.
     * @param {DescribeDeviceChannelRequest} req
     * @param {function(string, DescribeDeviceChannelResponse):void} cb
     * @public
     */
    DescribeDeviceChannel(req, cb) {
        let resp = new DescribeDeviceChannelResponse();
        this.request("DescribeDeviceChannel", req, resp, cb);
    }

    /**
     * Deletes screenshot configuration
     * @param {DeleteVideoSnapshotConfigRequest} req
     * @param {function(string, DeleteVideoSnapshotConfigResponse):void} cb
     * @public
     */
    DeleteVideoSnapshotConfig(req, cb) {
        let resp = new DeleteVideoSnapshotConfigResponse();
        this.request("DeleteVideoSnapshotConfig", req, resp, cb);
    }

    /**
     * This API is used to query the recording cloud migration plan list.
     * @param {ListRecordBackupPlansRequest} req
     * @param {function(string, ListRecordBackupPlansResponse):void} cb
     * @public
     */
    ListRecordBackupPlans(req, cb) {
        let resp = new ListRecordBackupPlansResponse();
        this.request("ListRecordBackupPlans", req, resp, cb);
    }

    /**
     * This API is used to obtain the public network address of a national standard device.
     * @param {DescribeGBDeviceAddrRequest} req
     * @param {function(string, DescribeGBDeviceAddrResponse):void} cb
     * @public
     */
    DescribeGBDeviceAddr(req, cb) {
        let resp = new DescribeGBDeviceAddrResponse();
        this.request("DescribeGBDeviceAddr", req, resp, cb);
    }

    /**
     * Used to add an organization.
     * @param {AddOrganizationRequest} req
     * @param {function(string, AddOrganizationResponse):void} cb
     * @public
     */
    AddOrganization(req, cb) {
        let resp = new AddOrganizationResponse();
        this.request("AddOrganization", req, resp, cb);
    }

    /**
     * This API is used to query preset position information of device channels.
     * @param {DescribeDevicePresetRequest} req
     * @param {function(string, DescribeDevicePresetResponse):void} cb
     * @public
     */
    DescribeDevicePreset(req, cb) {
        let resp = new DescribeDevicePresetResponse();
        this.request("DescribeDevicePreset", req, resp, cb);
    }

    /**
     * This API is used to delete failed local recording download tasks in batches.
     * @param {BatchDeleteVideoDownloadTaskRequest} req
     * @param {function(string, BatchDeleteVideoDownloadTaskResponse):void} cb
     * @public
     */
    BatchDeleteVideoDownloadTask(req, cb) {
        let resp = new BatchDeleteVideoDownloadTaskResponse();
        this.request("BatchDeleteVideoDownloadTask", req, resp, cb);
    }

    /**
     * This API is used to query the subtask list of a query task.
     * @param {ListSubTasksRequest} req
     * @param {function(string, ListSubTasksResponse):void} cb
     * @public
     */
    ListSubTasks(req, cb) {
        let resp = new ListSubTasksResponse();
        this.request("ListSubTasks", req, resp, cb);
    }

    /**
     * This API is used to query detailed information of a device.
     * @param {DescribeUserDeviceRequest} req
     * @param {function(string, DescribeUserDeviceResponse):void} cb
     * @public
     */
    DescribeUserDevice(req, cb) {
        let resp = new DescribeUserDeviceResponse();
        this.request("DescribeUserDevice", req, resp, cb);
    }

    /**
     * Create a screenshot template.
     * @param {CreateVideoSnapshotTemplateRequest} req
     * @param {function(string, CreateVideoSnapshotTemplateResponse):void} cb
     * @public
     */
    CreateVideoSnapshotTemplate(req, cb) {
        let resp = new CreateVideoSnapshotTemplateResponse();
        this.request("CreateVideoSnapshotTemplate", req, resp, cb);
    }

    /**
     * Get screenshot template details.
     * @param {DescribeVideoSnapshotTemplateRequest} req
     * @param {function(string, DescribeVideoSnapshotTemplateResponse):void} cb
     * @public
     */
    DescribeVideoSnapshotTemplate(req, cb) {
        let resp = new DescribeVideoSnapshotTemplateResponse();
        this.request("DescribeVideoSnapshotTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete a video recording cloud template.
     * @param {DeleteRecordBackupTemplateRequest} req
     * @param {function(string, DeleteRecordBackupTemplateResponse):void} cb
     * @public
     */
    DeleteRecordBackupTemplate(req, cb) {
        let resp = new DeleteRecordBackupTemplateResponse();
        this.request("DeleteRecordBackupTemplate", req, resp, cb);
    }

    /**
     * This API is used to add a single device. After the device is added, configure it based on the returned results, then wait for device registration or stream pushing.
     * @param {AddUserDeviceRequest} req
     * @param {function(string, AddUserDeviceResponse):void} cb
     * @public
     */
    AddUserDevice(req, cb) {
        let resp = new AddUserDeviceResponse();
        this.request("AddUserDevice", req, resp, cb);
    }

    /**
     * Used to delete completed tasks.
     * @param {DeleteTaskRequest} req
     * @param {function(string, DeleteTaskResponse):void} cb
     * @public
     */
    DeleteTask(req, cb) {
        let resp = new DeleteTaskResponse();
        this.request("DeleteTask", req, resp, cb);
    }

    /**
     * This API is used to delete an organization.
     * @param {DeleteOrganizationRequest} req
     * @param {function(string, DeleteOrganizationResponse):void} cb
     * @public
     */
    DeleteOrganization(req, cb) {
        let resp = new DeleteOrganizationResponse();
        this.request("DeleteOrganization", req, resp, cb);
    }

    /**
     * This API is used to obtain the cloud recording playback url address.
     * @param {DescribeRecordPlaybackUrlRequest} req
     * @param {function(string, DescribeRecordPlaybackUrlResponse):void} cb
     * @public
     */
    DescribeRecordPlaybackUrl(req, cb) {
        let resp = new DescribeRecordPlaybackUrlResponse();
        this.request("DescribeRecordPlaybackUrl", req, resp, cb);
    }

    /**
     * This API is used to query real-time cloud migration plan details.
     * @param {DescribeRecordPlanRequest} req
     * @param {function(string, DescribeRecordPlanResponse):void} cb
     * @public
     */
    DescribeRecordPlan(req, cb) {
        let resp = new DescribeRecordPlanResponse();
        this.request("DescribeRecordPlan", req, resp, cb);
    }

    /**
     * Modify a vision understanding plan
     * @param {ModifyVLPlanRequest} req
     * @param {function(string, ModifyVLPlanResponse):void} cb
     * @public
     */
    ModifyVLPlan(req, cb) {
        let resp = new ModifyVLPlanResponse();
        this.request("ModifyVLPlan", req, resp, cb);
    }

    /**
     * Used for querying organizations.
     * @param {DescribeOrganizationRequest} req
     * @param {function(string, DescribeOrganizationResponse):void} cb
     * @public
     */
    DescribeOrganization(req, cb) {
        let resp = new DescribeOrganizationResponse();
        this.request("DescribeOrganization", req, resp, cb);
    }

    /**
     * Update screenshot configuration
     * @param {ModifyVideoSnapshotConfigRequest} req
     * @param {function(string, ModifyVideoSnapshotConfigResponse):void} cb
     * @public
     */
    ModifyVideoSnapshotConfig(req, cb) {
        let resp = new ModifyVideoSnapshotConfigResponse();
        this.request("ModifyVideoSnapshotConfig", req, resp, cb);
    }

    /**
     * Delete a vision understanding plan
     * @param {DeleteVLPlanRequest} req
     * @param {function(string, DeleteVLPlanResponse):void} cb
     * @public
     */
    DeleteVLPlan(req, cb) {
        let resp = new DeleteVLPlanResponse();
        this.request("DeleteVLPlan", req, resp, cb);
    }

    /**
     * This API is used to query the channel list under the organizational unit directory.
     * @param {ListOrganizationChannelsRequest} req
     * @param {function(string, ListOrganizationChannelsResponse):void} cb
     * @public
     */
    ListOrganizationChannels(req, cb) {
        let resp = new ListOrganizationChannelsResponse();
        this.request("ListOrganizationChannels", req, resp, cb);
    }

    /**
     * Forbid the live preview of video channels for root accounts and sub-accounts.
     * @param {SetForbidPlayChannelsRequest} req
     * @param {function(string, SetForbidPlayChannelsResponse):void} cb
     * @public
     */
    SetForbidPlayChannels(req, cb) {
        let resp = new SetForbidPlayChannelsResponse();
        this.request("SetForbidPlayChannels", req, resp, cb);
    }

    /**
     * This API is used to create a video recording cloud template.
> The feature essentially pulls local device recording data to the cloud (i.e., recordings stored in the IPC camera memory card or NVR hard disk). When operating, first set the recording time period (i.e., the local device recording you want to upload to the cloud), then set the Cloud Upload Time Period and upload speed. The platform will pull the previous day's Time Period Data from the device at the specified speed during the Cloud Upload Time Period.

> Set the Cloud Upload Time Period to at least meet (Cloud Upload Time Period = previous day's recording time period / cloud upload speed multiplication). It is advisable to set about 10% more time for the Cloud Upload Time Period to avoid incomplete data retrieval due to network fluctuations.
     * @param {AddRecordBackupTemplateRequest} req
     * @param {function(string, AddRecordBackupTemplateResponse):void} cb
     * @public
     */
    AddRecordBackupTemplate(req, cb) {
        let resp = new AddRecordBackupTemplateResponse();
        this.request("AddRecordBackupTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify a real-time cloud migration plan.
     * @param {UpdateRecordPlanRequest} req
     * @param {function(string, UpdateRecordPlanResponse):void} cb
     * @public
     */
    UpdateRecordPlan(req, cb) {
        let resp = new UpdateRecordPlanResponse();
        this.request("UpdateRecordPlan", req, resp, cb);
    }

    /**
     * This API is used to delete added devices.
     * @param {DeleteUserDeviceRequest} req
     * @param {function(string, DeleteUserDeviceResponse):void} cb
     * @public
     */
    DeleteUserDevice(req, cb) {
        let resp = new DeleteUserDeviceResponse();
        this.request("DeleteUserDevice", req, resp, cb);
    }

    /**
     * Query the details of a visual understanding template.
     * @param {DescribeVLTemplateRequest} req
     * @param {function(string, DescribeVLTemplateResponse):void} cb
     * @public
     */
    DescribeVLTemplate(req, cb) {
        let resp = new DescribeVLTemplateResponse();
        this.request("DescribeVLTemplate", req, resp, cb);
    }

    /**
     * Bulk gets screenshot image URLs
     * @param {BatchGetVideoSnapshotImageUrlRequest} req
     * @param {function(string, BatchGetVideoSnapshotImageUrlResponse):void} cb
     * @public
     */
    BatchGetVideoSnapshotImageUrl(req, cb) {
        let resp = new BatchGetVideoSnapshotImageUrlResponse();
        this.request("BatchGetVideoSnapshotImageUrl", req, resp, cb);
    }

    /**
     * This API is used to query the recording download task list in this store.
     * @param {ListVideoDownloadTaskRequest} req
     * @param {function(string, ListVideoDownloadTaskResponse):void} cb
     * @public
     */
    ListVideoDownloadTask(req, cb) {
        let resp = new ListVideoDownloadTaskResponse();
        this.request("ListVideoDownloadTask", req, resp, cb);
    }

    /**
     * This API is used to query the real-time cloud migration template list.
     * @param {ListRecordTemplatesRequest} req
     * @param {function(string, ListRecordTemplatesResponse):void} cb
     * @public
     */
    ListRecordTemplates(req, cb) {
        let resp = new ListRecordTemplatesResponse();
        this.request("ListRecordTemplates", req, resp, cb);
    }

    /**
     * This API is used to delete a screenshot template.
     * @param {DeleteVideoSnapshotTemplateRequest} req
     * @param {function(string, DeleteVideoSnapshotTemplateResponse):void} cb
     * @public
     */
    DeleteVideoSnapshotTemplate(req, cb) {
        let resp = new DeleteVideoSnapshotTemplateResponse();
        this.request("DeleteVideoSnapshotTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the CNAME value based on the service node.
     * @param {DescribeCNAMERequest} req
     * @param {function(string, DescribeCNAMEResponse):void} cb
     * @public
     */
    DescribeCNAME(req, cb) {
        let resp = new DescribeCNAMEResponse();
        this.request("DescribeCNAME", req, resp, cb);
    }

    /**
     * Queries screenshot configuration details
     * @param {DescribeVideoSnapshotConfigRequest} req
     * @param {function(string, DescribeVideoSnapshotConfigResponse):void} cb
     * @public
     */
    DescribeVideoSnapshotConfig(req, cb) {
        let resp = new DescribeVideoSnapshotConfigResponse();
        this.request("DescribeVideoSnapshotConfig", req, resp, cb);
    }

    /**
     * This API is used to search the screenshot template details list.
     * @param {ListVideoSnapshotTemplateRequest} req
     * @param {function(string, ListVideoSnapshotTemplateResponse):void} cb
     * @public
     */
    ListVideoSnapshotTemplate(req, cb) {
        let resp = new ListVideoSnapshotTemplateResponse();
        this.request("ListVideoSnapshotTemplate", req, resp, cb);
    }

    /**
     * Used to operate device preset positions, including settings, deletion, and calls.
     * @param {ControlDevicePresetRequest} req
     * @param {function(string, ControlDevicePresetResponse):void} cb
     * @public
     */
    ControlDevicePreset(req, cb) {
        let resp = new ControlDevicePresetResponse();
        this.request("ControlDevicePreset", req, resp, cb);
    }

    /**
     * This API can be based on the Hikvision ISUP 5.0 protocol to pass through ISAPI request data. Before calling the API, ensure the device has successfully registered to this platform using the ISUP protocol.
     * @param {CallISAPIRequest} req
     * @param {function(string, CallISAPIResponse):void} cb
     * @public
     */
    CallISAPI(req, cb) {
        let resp = new CallISAPIResponse();
        this.request("CallISAPI", req, resp, cb);
    }

    /**
     * This API is used to create a real-time cloud migration plan.
     * @param {AddRecordPlanRequest} req
     * @param {function(string, AddRecordPlanResponse):void} cb
     * @public
     */
    AddRecordPlan(req, cb) {
        let resp = new AddRecordPlanResponse();
        this.request("AddRecordPlan", req, resp, cb);
    }

    /**
     * Used to modify the recording cloud migration plan.
     * @param {UpdateRecordBackupPlanRequest} req
     * @param {function(string, UpdateRecordBackupPlanResponse):void} cb
     * @public
     */
    UpdateRecordBackupPlan(req, cb) {
        let resp = new UpdateRecordBackupPlanResponse();
        this.request("UpdateRecordBackupPlan", req, resp, cb);
    }

    /**
     * This API is used to batch obtain source material URLs for visual understanding plans.
     * @param {BatchGetVLPlanSourceFileURLRequest} req
     * @param {function(string, BatchGetVLPlanSourceFileURLResponse):void} cb
     * @public
     */
    BatchGetVLPlanSourceFileURL(req, cb) {
        let resp = new BatchGetVLPlanSourceFileURLResponse();
        this.request("BatchGetVLPlanSourceFileURL", req, resp, cb);
    }

    /**
     * Query the disabled channel list
     * @param {QueryForbidPlayChannelListRequest} req
     * @param {function(string, QueryForbidPlayChannelListResponse):void} cb
     * @public
     */
    QueryForbidPlayChannelList(req, cb) {
        let resp = new QueryForbidPlayChannelListResponse();
        this.request("QueryForbidPlayChannelList", req, resp, cb);
    }

    /**
     * Used to modify a video recording cloud template.
     * @param {UpdateRecordBackupTemplateRequest} req
     * @param {function(string, UpdateRecordBackupTemplateResponse):void} cb
     * @public
     */
    UpdateRecordBackupTemplate(req, cb) {
        let resp = new UpdateRecordBackupTemplateResponse();
        this.request("UpdateRecordBackupTemplate", req, resp, cb);
    }

    /**
     * Creates a vision understanding plan
     * @param {CreateVLPlanRequest} req
     * @param {function(string, CreateVLPlanResponse):void} cb
     * @public
     */
    CreateVLPlan(req, cb) {
        let resp = new CreateVLPlanResponse();
        this.request("CreateVLPlan", req, resp, cb);
    }

    /**
     * This API is used to delete a retrieval task.
     * @param {DeleteRecordRetrieveTaskRequest} req
     * @param {function(string, DeleteRecordRetrieveTaskResponse):void} cb
     * @public
     */
    DeleteRecordRetrieveTask(req, cb) {
        let resp = new DeleteRecordRetrieveTaskResponse();
        this.request("DeleteRecordRetrieveTask", req, resp, cb);
    }

    /**
     * Used to add a recording cloud migration plan (currently applicable only to devices/video channels connected via the GB28181 protocol and gateway).
     * @param {AddRecordBackupPlanRequest} req
     * @param {function(string, AddRecordBackupPlanResponse):void} cb
     * @public
     */
    AddRecordBackupPlan(req, cb) {
        let resp = new AddRecordBackupPlanResponse();
        this.request("AddRecordBackupPlan", req, resp, cb);
    }

    /**
     * This API is used to query the local recording timeline info of a device, which is stored locally on the NVR/IPC.
     * @param {ControlRecordTimelineRequest} req
     * @param {function(string, ControlRecordTimelineResponse):void} cb
     * @public
     */
    ControlRecordTimeline(req, cb) {
        let resp = new ControlRecordTimelineResponse();
        this.request("ControlRecordTimeline", req, resp, cb);
    }


}
module.exports = IssClient;
