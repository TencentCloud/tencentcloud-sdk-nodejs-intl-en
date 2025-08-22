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
const DRMInfo = models.DRMInfo;
const DescribeStreamPackageVodRemuxTaskRequest = models.DescribeStreamPackageVodRemuxTaskRequest;
const SourcePackageConf = models.SourcePackageConf;
const CreateStreamPackageSSAIChannelRequest = models.CreateStreamPackageSSAIChannelRequest;
const StartStreamPackageVodRemuxTaskResponse = models.StartStreamPackageVodRemuxTaskResponse;
const AdBreakInfo = models.AdBreakInfo;
const ModifyStreamPackageLinearAssemblyProgramResponse = models.ModifyStreamPackageLinearAssemblyProgramResponse;
const BindNewLVBDomainWithChannelResponse = models.BindNewLVBDomainWithChannelResponse;
const DeleteStreamPackageLinearAssemblyChannelsRequest = models.DeleteStreamPackageLinearAssemblyChannelsRequest;
const CdnDomainInfo = models.CdnDomainInfo;
const StartStreamPackageLinearAssemblyChannelRequest = models.StartStreamPackageLinearAssemblyChannelRequest;
const LocationAlert = models.LocationAlert;
const DescribeStreamPackageLinearAssemblyChannelsRequest = models.DescribeStreamPackageLinearAssemblyChannelsRequest;
const Metadata = models.Metadata;
const ClipRangeInfo = models.ClipRangeInfo;
const AliasValueConf = models.AliasValueConf;
const DescribeStreamPackageSSAIChannelRequest = models.DescribeStreamPackageSSAIChannelRequest;
const DescribeLinearAssemblyCDNDomainWithChannelResponse = models.DescribeLinearAssemblyCDNDomainWithChannelResponse;
const ModifyStreamPackageSSAIChannelResponse = models.ModifyStreamPackageSSAIChannelResponse;
const ModifyStreamPackageChannelInputAuthInfoRequest = models.ModifyStreamPackageChannelInputAuthInfoRequest;
const DescribeStreamPackageVodRemuxTaskResponse = models.DescribeStreamPackageVodRemuxTaskResponse;
const VodRemuxTaskInfo = models.VodRemuxTaskInfo;
const ChannelAlertResp = models.ChannelAlertResp;
const DeleteStreamPackageChannelsRequest = models.DeleteStreamPackageChannelsRequest;
const InputInfo = models.InputInfo;
const DescribeStreamPackageLinearAssemblyProgramsResponse = models.DescribeStreamPackageLinearAssemblyProgramsResponse;
const PointInfo = models.PointInfo;
const DescribeStreamPackageSourceAlertsRequest = models.DescribeStreamPackageSourceAlertsRequest;
const ModifyStreamPackageSSAIChannelRequest = models.ModifyStreamPackageSSAIChannelRequest;
const CreateStreamPackageSourceResponse = models.CreateStreamPackageSourceResponse;
const ProgramAlertInfos = models.ProgramAlertInfos;
const DeleteStreamPackageSourceRequest = models.DeleteStreamPackageSourceRequest;
const DescribeStreamPackageHarvestJobsResponse = models.DescribeStreamPackageHarvestJobsResponse;
const DescribeStreamPackageSourceLocationAlertsRequest = models.DescribeStreamPackageSourceLocationAlertsRequest;
const UnbindCdnDomainWithChannelResponse = models.UnbindCdnDomainWithChannelResponse;
const ModifyStreamPackageChannelEndpointRequest = models.ModifyStreamPackageChannelEndpointRequest;
const SSAIChannelInfo = models.SSAIChannelInfo;
const ModifyStreamPackageSourceLocationResponse = models.ModifyStreamPackageSourceLocationResponse;
const BindLinearAssemblyCDNDomainWithChannelResponse = models.BindLinearAssemblyCDNDomainWithChannelResponse;
const DescribeStreamPackageChannelResponse = models.DescribeStreamPackageChannelResponse;
const DescribeStreamPackageLinearAssemblyProgramsRequest = models.DescribeStreamPackageLinearAssemblyProgramsRequest;
const DomainRecordInfo = models.DomainRecordInfo;
const TimeShiftInfo = models.TimeShiftInfo;
const DescribeStreamPackageLinearAssemblyProgramSchedulesResponse = models.DescribeStreamPackageLinearAssemblyProgramSchedulesResponse;
const DescribeStreamPackageHarvestJobRequest = models.DescribeStreamPackageHarvestJobRequest;
const DeleteStreamPackageVodRemuxTasksRequest = models.DeleteStreamPackageVodRemuxTasksRequest;
const SourceAlert = models.SourceAlert;
const DescribeStreamPackageSourcesResponse = models.DescribeStreamPackageSourcesResponse;
const SourceInfo = models.SourceInfo;
const DescribeStreamPackageSourceLocationAlertsResponse = models.DescribeStreamPackageSourceLocationAlertsResponse;
const CreateStreamPackageLinearAssemblyChannelRequest = models.CreateStreamPackageLinearAssemblyChannelRequest;
const PlaybackInfoReq = models.PlaybackInfoReq;
const DescribeStreamPackageHarvestJobResponse = models.DescribeStreamPackageHarvestJobResponse;
const DescribeStreamPackageLinearAssemblyChannelRequest = models.DescribeStreamPackageLinearAssemblyChannelRequest;
const DeleteStreamPackageVodRemuxTasksResponse = models.DeleteStreamPackageVodRemuxTasksResponse;
const DeleteStreamPackageSSAIChannelRequest = models.DeleteStreamPackageSSAIChannelRequest;
const ModifyStreamPackageChannelEndpointResponse = models.ModifyStreamPackageChannelEndpointResponse;
const CreateStreamPackageSourceLocationRequest = models.CreateStreamPackageSourceLocationRequest;
const CreateStreamPackageVodRemuxTaskRequest = models.CreateStreamPackageVodRemuxTaskRequest;
const DescribeStreamPackageHarvestJobsRequest = models.DescribeStreamPackageHarvestJobsRequest;
const DeleteStreamPackageHarvestJobResponse = models.DeleteStreamPackageHarvestJobResponse;
const DeleteStreamPackageHarvestJobsRequest = models.DeleteStreamPackageHarvestJobsRequest;
const DeleteStreamPackageVodRemuxTaskRequest = models.DeleteStreamPackageVodRemuxTaskRequest;
const CreateStreamPackageChannelEndpointResponse = models.CreateStreamPackageChannelEndpointResponse;
const DescribeLinearAssemblyCDNDomainWithChannelsRequest = models.DescribeLinearAssemblyCDNDomainWithChannelsRequest;
const PlaybackInfo = models.PlaybackInfo;
const ChannelInfo = models.ChannelInfo;
const CacheInfo = models.CacheInfo;
const DescribeStreamPackageSourceLocationRequest = models.DescribeStreamPackageSourceLocationRequest;
const UnbindCdnDomainWithChannelRequest = models.UnbindCdnDomainWithChannelRequest;
const ModifyStreamPackageLinearAssemblyProgramRequest = models.ModifyStreamPackageLinearAssemblyProgramRequest;
const HarvestJobResp = models.HarvestJobResp;
const DescribeStreamPackageVodRemuxTasksRequest = models.DescribeStreamPackageVodRemuxTasksRequest;
const DescribeStreamPackageSourceLocationsRequest = models.DescribeStreamPackageSourceLocationsRequest;
const DescribeStreamPackageSourceLocationResponse = models.DescribeStreamPackageSourceLocationResponse;
const EndpointInfo = models.EndpointInfo;
const ModifyStreamPackageSourceResponse = models.ModifyStreamPackageSourceResponse;
const DeleteStreamPackageLinearAssemblyChannelRequest = models.DeleteStreamPackageLinearAssemblyChannelRequest;
const ModifyStreamPackageChannelRequest = models.ModifyStreamPackageChannelRequest;
const DescribeStreamPackageVodRemuxTasksResponse = models.DescribeStreamPackageVodRemuxTasksResponse;
const DescribeStreamPackageSSAIUsageResponse = models.DescribeStreamPackageSSAIUsageResponse;
const CreateStreamPackageLinearAssemblyProgramRequest = models.CreateStreamPackageLinearAssemblyProgramRequest;
const SegmentDeliverInfo = models.SegmentDeliverInfo;
const DeleteStreamPackageLinearAssemblyChannelResponse = models.DeleteStreamPackageLinearAssemblyChannelResponse;
const CreateStreamPackageChannelRequest = models.CreateStreamPackageChannelRequest;
const ModifyStreamPackageSourceRequest = models.ModifyStreamPackageSourceRequest;
const InputAuthInfo = models.InputAuthInfo;
const DescribeStreamPackageSSAIChannelResponse = models.DescribeStreamPackageSSAIChannelResponse;
const DeleteStreamPackageVodRemuxTaskResponse = models.DeleteStreamPackageVodRemuxTaskResponse;
const DeleteStreamPackageHarvestJobsResponse = models.DeleteStreamPackageHarvestJobsResponse;
const TimeSignalInfo = models.TimeSignalInfo;
const ModifyStreamPackageLinearAssemblyChannelRequest = models.ModifyStreamPackageLinearAssemblyChannelRequest;
const DeleteStreamPackageSourceLocationResponse = models.DeleteStreamPackageSourceLocationResponse;
const CreateStreamPackageSourceRequest = models.CreateStreamPackageSourceRequest;
const DescribeStreamPackageLinearAssemblyProgramRequest = models.DescribeStreamPackageLinearAssemblyProgramRequest;
const DescribeStreamPackageLinearAssemblyChannelAlertsRequest = models.DescribeStreamPackageLinearAssemblyChannelAlertsRequest;
const UnbindLinearAssemblyCDNDomainWithChannelRequest = models.UnbindLinearAssemblyCDNDomainWithChannelRequest;
const DescribeStreamPackageSourceLocationsResponse = models.DescribeStreamPackageSourceLocationsResponse;
const StopStreamPackageLinearAssemblyChannelResponse = models.StopStreamPackageLinearAssemblyChannelResponse;
const DescribeStreamPackageChannelsRequest = models.DescribeStreamPackageChannelsRequest;
const SSAIUsageInfo = models.SSAIUsageInfo;
const ModifyStreamPackageChannelInputAuthInfoResponse = models.ModifyStreamPackageChannelInputAuthInfoResponse;
const SlateInfo = models.SlateInfo;
const UnbindLinearAssemblyCDNDomainWithChannelResponse = models.UnbindLinearAssemblyCDNDomainWithChannelResponse;
const CreateStreamPackageVodRemuxTaskResponse = models.CreateStreamPackageVodRemuxTaskResponse;
const DashManifestInfo = models.DashManifestInfo;
const CreateStreamPackageChannelResponse = models.CreateStreamPackageChannelResponse;
const DescribeStreamPackageLinearAssemblyChannelResponse = models.DescribeStreamPackageLinearAssemblyChannelResponse;
const DescribeStreamPackageLinearAssemblyChannelAlertsResponse = models.DescribeStreamPackageLinearAssemblyChannelAlertsResponse;
const BindLinearAssemblyCDNDomainWithChannelRequest = models.BindLinearAssemblyCDNDomainWithChannelRequest;
const DeleteStreamPackageChannelEndpointsRequest = models.DeleteStreamPackageChannelEndpointsRequest;
const DeleteStreamPackageSSAIChannelResponse = models.DeleteStreamPackageSSAIChannelResponse;
const StartStreamPackageLinearAssemblyChannelResponse = models.StartStreamPackageLinearAssemblyChannelResponse;
const ModifyStreamPackageLinearAssemblyChannelResponse = models.ModifyStreamPackageLinearAssemblyChannelResponse;
const DeleteStreamPackageSourceResponse = models.DeleteStreamPackageSourceResponse;
const StartStreamPackageVodRemuxTaskRequest = models.StartStreamPackageVodRemuxTaskRequest;
const CosInputInfo = models.CosInputInfo;
const DescribeStreamPackageChannelRequest = models.DescribeStreamPackageChannelRequest;
const InputFileInfo = models.InputFileInfo;
const OutputInfo = models.OutputInfo;
const CreateStreamPackageChannelEndpointRequest = models.CreateStreamPackageChannelEndpointRequest;
const DescribeStreamPackageSSAIChannelsRequest = models.DescribeStreamPackageSSAIChannelsRequest;
const ProgramAlertCounts = models.ProgramAlertCounts;
const DeleteStreamPackageSourceLocationRequest = models.DeleteStreamPackageSourceLocationRequest;
const DescribeStreamPackageLinearAssemblyProgramResponse = models.DescribeStreamPackageLinearAssemblyProgramResponse;
const DeleteStreamPackageLinearAssemblyChannelsResponse = models.DeleteStreamPackageLinearAssemblyChannelsResponse;
const BindNewLVBDomainWithChannelRequest = models.BindNewLVBDomainWithChannelRequest;
const DescribeLinearAssemblyCDNDomainWithChannelRequest = models.DescribeLinearAssemblyCDNDomainWithChannelRequest;
const ModifyStreamPackageChannelResponse = models.ModifyStreamPackageChannelResponse;
const CreateStreamPackageSourceLocationResponse = models.CreateStreamPackageSourceLocationResponse;
const StopStreamPackageLinearAssemblyChannelRequest = models.StopStreamPackageLinearAssemblyChannelRequest;
const DescribeStreamPackageLinearAssemblyProgramSchedulesRequest = models.DescribeStreamPackageLinearAssemblyProgramSchedulesRequest;
const DeleteStreamPackageLinearAssemblyProgramsRequest = models.DeleteStreamPackageLinearAssemblyProgramsRequest;
const DeleteStreamPackageChannelEndpointsResponse = models.DeleteStreamPackageChannelEndpointsResponse;
const CreateStreamPackageHarvestJobRequest = models.CreateStreamPackageHarvestJobRequest;
const DescribeStreamPackageSSAIUsageRequest = models.DescribeStreamPackageSSAIUsageRequest;
const DescribeStreamPackageSourceAlertsResponse = models.DescribeStreamPackageSourceAlertsResponse;
const DeleteStreamPackageLinearAssemblyProgramRequest = models.DeleteStreamPackageLinearAssemblyProgramRequest;
const DeleteStreamPackageChannelsResponse = models.DeleteStreamPackageChannelsResponse;
const ProgramScheduleInfo = models.ProgramScheduleInfo;
const DeleteStreamPackageLinearAssemblyProgramsResponse = models.DeleteStreamPackageLinearAssemblyProgramsResponse;
const SpliceInsertInfo = models.SpliceInsertInfo;
const CreateStreamPackageLinearAssemblyProgramResponse = models.CreateStreamPackageLinearAssemblyProgramResponse;
const DescribeStreamPackageChannelsResponse = models.DescribeStreamPackageChannelsResponse;
const DescribeStreamPackageSourceResponse = models.DescribeStreamPackageSourceResponse;
const DeleteStreamPackageLinearAssemblyProgramResponse = models.DeleteStreamPackageLinearAssemblyProgramResponse;
const CreateStreamPackageSSAIChannelResponse = models.CreateStreamPackageSSAIChannelResponse;
const ModifyStreamPackageSourceLocationRequest = models.ModifyStreamPackageSourceLocationRequest;
const CreateStreamPackageHarvestJobResponse = models.CreateStreamPackageHarvestJobResponse;
const EndpointAuthInfo = models.EndpointAuthInfo;
const SourceLocationInfo = models.SourceLocationInfo;
const SSAIConf = models.SSAIConf;
const LinearAssemblyProgramInfo = models.LinearAssemblyProgramInfo;
const DescribeStreamPackageSourcesRequest = models.DescribeStreamPackageSourcesRequest;
const CreateStreamPackageLinearAssemblyChannelResponse = models.CreateStreamPackageLinearAssemblyChannelResponse;
const LinearAssemblyChannelInfo = models.LinearAssemblyChannelInfo;
const OutputStorage = models.OutputStorage;
const UsageDetail = models.UsageDetail;
const DescribeStreamPackageSourceRequest = models.DescribeStreamPackageSourceRequest;
const DescribeStreamPackageSSAIChannelsResponse = models.DescribeStreamPackageSSAIChannelsResponse;
const OutputReq = models.OutputReq;
const CacheInfoInfo = models.CacheInfoInfo;
const DescribeStreamPackageLinearAssemblyChannelsResponse = models.DescribeStreamPackageLinearAssemblyChannelsResponse;
const DeleteStreamPackageHarvestJobRequest = models.DeleteStreamPackageHarvestJobRequest;
const NameServer = models.NameServer;
const ConfigAliasesInfo = models.ConfigAliasesInfo;
const CosOutputStorage = models.CosOutputStorage;
const ManifestInfo = models.ManifestInfo;
const DescribeLinearAssemblyCDNDomainWithChannelsResponse = models.DescribeLinearAssemblyCDNDomainWithChannelsResponse;


/**
 * mdp client
 * @class
 */
class MdpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mdp.intl.tencentcloudapi.com", "2020-05-27", credential, region, profile);
    }
    
    /**
     * Delete channel linear assemblyChannel.
     * @param {DeleteStreamPackageLinearAssemblyChannelRequest} req
     * @param {function(string, DeleteStreamPackageLinearAssemblyChannelResponse):void} cb
     * @public
     */
    DeleteStreamPackageLinearAssemblyChannel(req, cb) {
        let resp = new DeleteStreamPackageLinearAssemblyChannelResponse();
        this.request("DeleteStreamPackageLinearAssemblyChannel", req, resp, cb);
    }

    /**
     * Query channel linear assembly program information.
     * @param {DescribeStreamPackageLinearAssemblyProgramRequest} req
     * @param {function(string, DescribeStreamPackageLinearAssemblyProgramResponse):void} cb
     * @public
     */
    DescribeStreamPackageLinearAssemblyProgram(req, cb) {
        let resp = new DescribeStreamPackageLinearAssemblyProgramResponse();
        this.request("DescribeStreamPackageLinearAssemblyProgram", req, resp, cb);
    }

    /**
     * Delete Vod remux task.
     * @param {DeleteStreamPackageVodRemuxTaskRequest} req
     * @param {function(string, DeleteStreamPackageVodRemuxTaskResponse):void} cb
     * @public
     */
    DeleteStreamPackageVodRemuxTask(req, cb) {
        let resp = new DeleteStreamPackageVodRemuxTaskResponse();
        this.request("DeleteStreamPackageVodRemuxTask", req, resp, cb);
    }

    /**
     * Query the CDN domain names associated with all LinearAssembly channels.
     * @param {DescribeLinearAssemblyCDNDomainWithChannelsRequest} req
     * @param {function(string, DescribeLinearAssemblyCDNDomainWithChannelsResponse):void} cb
     * @public
     */
    DescribeLinearAssemblyCDNDomainWithChannels(req, cb) {
        let resp = new DescribeLinearAssemblyCDNDomainWithChannelsResponse();
        this.request("DescribeLinearAssemblyCDNDomainWithChannels", req, resp, cb);
    }

    /**
     * CreateStreamPackageSSAIChannel
     * @param {CreateStreamPackageSSAIChannelRequest} req
     * @param {function(string, CreateStreamPackageSSAIChannelResponse):void} cb
     * @public
     */
    CreateStreamPackageSSAIChannel(req, cb) {
        let resp = new CreateStreamPackageSSAIChannelResponse();
        this.request("CreateStreamPackageSSAIChannel", req, resp, cb);
    }

    /**
     * This API is used to delete endpoints from a StreamPackage channel in batches.
     * @param {DeleteStreamPackageChannelEndpointsRequest} req
     * @param {function(string, DeleteStreamPackageChannelEndpointsResponse):void} cb
     * @public
     */
    DeleteStreamPackageChannelEndpoints(req, cb) {
        let resp = new DeleteStreamPackageChannelEndpointsResponse();
        this.request("DeleteStreamPackageChannelEndpoints", req, resp, cb);
    }

    /**
     * This API is used to modify the input authentication information of a StreamPackage channel.
     * @param {ModifyStreamPackageChannelInputAuthInfoRequest} req
     * @param {function(string, ModifyStreamPackageChannelInputAuthInfoResponse):void} cb
     * @public
     */
    ModifyStreamPackageChannelInputAuthInfo(req, cb) {
        let resp = new ModifyStreamPackageChannelInputAuthInfoResponse();
        this.request("ModifyStreamPackageChannelInputAuthInfo", req, resp, cb);
    }

    /**
     * Deleting HarvestJobs in Batch.
     * @param {DeleteStreamPackageHarvestJobsRequest} req
     * @param {function(string, DeleteStreamPackageHarvestJobsResponse):void} cb
     * @public
     */
    DeleteStreamPackageHarvestJobs(req, cb) {
        let resp = new DeleteStreamPackageHarvestJobsResponse();
        this.request("DeleteStreamPackageHarvestJobs", req, resp, cb);
    }

    /**
     * Delete channel linear assembly Source.
     * @param {DeleteStreamPackageSourceRequest} req
     * @param {function(string, DeleteStreamPackageSourceResponse):void} cb
     * @public
     */
    DeleteStreamPackageSource(req, cb) {
        let resp = new DeleteStreamPackageSourceResponse();
        this.request("DeleteStreamPackageSource", req, resp, cb);
    }

    /**
     * Modify channel linear assembly SourceLocation configuration
     * @param {ModifyStreamPackageSourceLocationRequest} req
     * @param {function(string, ModifyStreamPackageSourceLocationResponse):void} cb
     * @public
     */
    ModifyStreamPackageSourceLocation(req, cb) {
        let resp = new ModifyStreamPackageSourceLocationResponse();
        this.request("ModifyStreamPackageSourceLocation", req, resp, cb);
    }

    /**
     * Unbind LinearAssembly channel with CDN domain name.
     * @param {UnbindLinearAssemblyCDNDomainWithChannelRequest} req
     * @param {function(string, UnbindLinearAssemblyCDNDomainWithChannelResponse):void} cb
     * @public
     */
    UnbindLinearAssemblyCDNDomainWithChannel(req, cb) {
        let resp = new UnbindLinearAssemblyCDNDomainWithChannelResponse();
        this.request("UnbindLinearAssemblyCDNDomainWithChannel", req, resp, cb);
    }

    /**
     * Start VOD remux task.
     * @param {StartStreamPackageVodRemuxTaskRequest} req
     * @param {function(string, StartStreamPackageVodRemuxTaskResponse):void} cb
     * @public
     */
    StartStreamPackageVodRemuxTask(req, cb) {
        let resp = new StartStreamPackageVodRemuxTaskResponse();
        this.request("StartStreamPackageVodRemuxTask", req, resp, cb);
    }

    /**
     * Query channel linear assembly Source information.
     * @param {DescribeStreamPackageSourceRequest} req
     * @param {function(string, DescribeStreamPackageSourceResponse):void} cb
     * @public
     */
    DescribeStreamPackageSource(req, cb) {
        let resp = new DescribeStreamPackageSourceResponse();
        this.request("DescribeStreamPackageSource", req, resp, cb);
    }

    /**
     * Delete HarvestJob.
     * @param {DeleteStreamPackageHarvestJobRequest} req
     * @param {function(string, DeleteStreamPackageHarvestJobResponse):void} cb
     * @public
     */
    DeleteStreamPackageHarvestJob(req, cb) {
        let resp = new DeleteStreamPackageHarvestJobResponse();
        this.request("DeleteStreamPackageHarvestJob", req, resp, cb);
    }

    /**
     * Modify channel linear assembly Program configuration.
     * @param {ModifyStreamPackageLinearAssemblyProgramRequest} req
     * @param {function(string, ModifyStreamPackageLinearAssemblyProgramResponse):void} cb
     * @public
     */
    ModifyStreamPackageLinearAssemblyProgram(req, cb) {
        let resp = new ModifyStreamPackageLinearAssemblyProgramResponse();
        this.request("ModifyStreamPackageLinearAssemblyProgram", req, resp, cb);
    }

    /**
     * Modify channel linear assembly Source configuration.
     * @param {ModifyStreamPackageSourceRequest} req
     * @param {function(string, ModifyStreamPackageSourceResponse):void} cb
     * @public
     */
    ModifyStreamPackageSource(req, cb) {
        let resp = new ModifyStreamPackageSourceResponse();
        this.request("ModifyStreamPackageSource", req, resp, cb);
    }

    /**
     * Create HarvestJob.
     * @param {CreateStreamPackageHarvestJobRequest} req
     * @param {function(string, CreateStreamPackageHarvestJobResponse):void} cb
     * @public
     */
    CreateStreamPackageHarvestJob(req, cb) {
        let resp = new CreateStreamPackageHarvestJobResponse();
        this.request("CreateStreamPackageHarvestJob", req, resp, cb);
    }

    /**
     * This API is used to query the information of multiple StreamPackage channels.
     * @param {DescribeStreamPackageChannelsRequest} req
     * @param {function(string, DescribeStreamPackageChannelsResponse):void} cb
     * @public
     */
    DescribeStreamPackageChannels(req, cb) {
        let resp = new DescribeStreamPackageChannelsResponse();
        this.request("DescribeStreamPackageChannels", req, resp, cb);
    }

    /**
     * This API is used to modify an endpoint of a StreamPackage channel.
     * @param {ModifyStreamPackageChannelEndpointRequest} req
     * @param {function(string, ModifyStreamPackageChannelEndpointResponse):void} cb
     * @public
     */
    ModifyStreamPackageChannelEndpoint(req, cb) {
        let resp = new ModifyStreamPackageChannelEndpointResponse();
        this.request("ModifyStreamPackageChannelEndpoint", req, resp, cb);
    }

    /**
     * This API is used to query SSAI ad replacement usage.
     * @param {DescribeStreamPackageSSAIUsageRequest} req
     * @param {function(string, DescribeStreamPackageSSAIUsageResponse):void} cb
     * @public
     */
    DescribeStreamPackageSSAIUsage(req, cb) {
        let resp = new DescribeStreamPackageSSAIUsageResponse();
        this.request("DescribeStreamPackageSSAIUsage", req, resp, cb);
    }

    /**
     * Stop linear assembly channel.
     * @param {StopStreamPackageLinearAssemblyChannelRequest} req
     * @param {function(string, StopStreamPackageLinearAssemblyChannelResponse):void} cb
     * @public
     */
    StopStreamPackageLinearAssemblyChannel(req, cb) {
        let resp = new StopStreamPackageLinearAssemblyChannelResponse();
        this.request("StopStreamPackageLinearAssemblyChannel", req, resp, cb);
    }

    /**
     * This API is used to bind an LVB domain name to a channel.
     * @param {BindNewLVBDomainWithChannelRequest} req
     * @param {function(string, BindNewLVBDomainWithChannelResponse):void} cb
     * @public
     */
    BindNewLVBDomainWithChannel(req, cb) {
        let resp = new BindNewLVBDomainWithChannelResponse();
        this.request("BindNewLVBDomainWithChannel", req, resp, cb);
    }

    /**
     * Batch query HarvestJob.
     * @param {DescribeStreamPackageHarvestJobsRequest} req
     * @param {function(string, DescribeStreamPackageHarvestJobsResponse):void} cb
     * @public
     */
    DescribeStreamPackageHarvestJobs(req, cb) {
        let resp = new DescribeStreamPackageHarvestJobsResponse();
        this.request("DescribeStreamPackageHarvestJobs", req, resp, cb);
    }

    /**
     * Query channel linear assembly Programl information list.
     * @param {DescribeStreamPackageLinearAssemblyProgramsRequest} req
     * @param {function(string, DescribeStreamPackageLinearAssemblyProgramsResponse):void} cb
     * @public
     */
    DescribeStreamPackageLinearAssemblyPrograms(req, cb) {
        let resp = new DescribeStreamPackageLinearAssemblyProgramsResponse();
        this.request("DescribeStreamPackageLinearAssemblyPrograms", req, resp, cb);
    }

    /**
     * Delete Channel Linear Assembly Program.
     * @param {DeleteStreamPackageLinearAssemblyProgramRequest} req
     * @param {function(string, DeleteStreamPackageLinearAssemblyProgramResponse):void} cb
     * @public
     */
    DeleteStreamPackageLinearAssemblyProgram(req, cb) {
        let resp = new DeleteStreamPackageLinearAssemblyProgramResponse();
        this.request("DeleteStreamPackageLinearAssemblyProgram", req, resp, cb);
    }

    /**
     * Query channel linear assembly Channel information.
     * @param {DescribeStreamPackageLinearAssemblyChannelRequest} req
     * @param {function(string, DescribeStreamPackageLinearAssemblyChannelResponse):void} cb
     * @public
     */
    DescribeStreamPackageLinearAssemblyChannel(req, cb) {
        let resp = new DescribeStreamPackageLinearAssemblyChannelResponse();
        this.request("DescribeStreamPackageLinearAssemblyChannel", req, resp, cb);
    }

    /**
     * DeleteStreamPackageSSAIChannel
     * @param {DeleteStreamPackageSSAIChannelRequest} req
     * @param {function(string, DeleteStreamPackageSSAIChannelResponse):void} cb
     * @public
     */
    DeleteStreamPackageSSAIChannel(req, cb) {
        let resp = new DeleteStreamPackageSSAIChannelResponse();
        this.request("DeleteStreamPackageSSAIChannel", req, resp, cb);
    }

    /**
     * Query the CDN domain name associated with the LinearAssembly channel.
     * @param {DescribeLinearAssemblyCDNDomainWithChannelRequest} req
     * @param {function(string, DescribeLinearAssemblyCDNDomainWithChannelResponse):void} cb
     * @public
     */
    DescribeLinearAssemblyCDNDomainWithChannel(req, cb) {
        let resp = new DescribeLinearAssemblyCDNDomainWithChannelResponse();
        this.request("DescribeLinearAssemblyCDNDomainWithChannel", req, resp, cb);
    }

    /**
     * Query VOD remux tasks informations.
     * @param {DescribeStreamPackageVodRemuxTasksRequest} req
     * @param {function(string, DescribeStreamPackageVodRemuxTasksResponse):void} cb
     * @public
     */
    DescribeStreamPackageVodRemuxTasks(req, cb) {
        let resp = new DescribeStreamPackageVodRemuxTasksResponse();
        this.request("DescribeStreamPackageVodRemuxTasks", req, resp, cb);
    }

    /**
     * Create channel linear assembly Source.
     * @param {CreateStreamPackageSourceRequest} req
     * @param {function(string, CreateStreamPackageSourceResponse):void} cb
     * @public
     */
    CreateStreamPackageSource(req, cb) {
        let resp = new CreateStreamPackageSourceResponse();
        this.request("CreateStreamPackageSource", req, resp, cb);
    }

    /**
     * Start Linear Assembly Channel.
     * @param {StartStreamPackageLinearAssemblyChannelRequest} req
     * @param {function(string, StartStreamPackageLinearAssemblyChannelResponse):void} cb
     * @public
     */
    StartStreamPackageLinearAssemblyChannel(req, cb) {
        let resp = new StartStreamPackageLinearAssemblyChannelResponse();
        this.request("StartStreamPackageLinearAssemblyChannel", req, resp, cb);
    }

    /**
     * Query linear assembly channel alarm information.
     * @param {DescribeStreamPackageLinearAssemblyChannelAlertsRequest} req
     * @param {function(string, DescribeStreamPackageLinearAssemblyChannelAlertsResponse):void} cb
     * @public
     */
    DescribeStreamPackageLinearAssemblyChannelAlerts(req, cb) {
        let resp = new DescribeStreamPackageLinearAssemblyChannelAlertsResponse();
        this.request("DescribeStreamPackageLinearAssemblyChannelAlerts", req, resp, cb);
    }

    /**
     * This API is used to unbind a CDN playback domain name from a channel.
     * @param {UnbindCdnDomainWithChannelRequest} req
     * @param {function(string, UnbindCdnDomainWithChannelResponse):void} cb
     * @public
     */
    UnbindCdnDomainWithChannel(req, cb) {
        let resp = new UnbindCdnDomainWithChannelResponse();
        this.request("UnbindCdnDomainWithChannel", req, resp, cb);
    }

    /**
     * DescribeStreamPackageSSAIChannels
     * @param {DescribeStreamPackageSSAIChannelsRequest} req
     * @param {function(string, DescribeStreamPackageSSAIChannelsResponse):void} cb
     * @public
     */
    DescribeStreamPackageSSAIChannels(req, cb) {
        let resp = new DescribeStreamPackageSSAIChannelsResponse();
        this.request("DescribeStreamPackageSSAIChannels", req, resp, cb);
    }

    /**
     * ModifyStreamPackageSSAIChannel
     * @param {ModifyStreamPackageSSAIChannelRequest} req
     * @param {function(string, ModifyStreamPackageSSAIChannelResponse):void} cb
     * @public
     */
    ModifyStreamPackageSSAIChannel(req, cb) {
        let resp = new ModifyStreamPackageSSAIChannelResponse();
        this.request("ModifyStreamPackageSSAIChannel", req, resp, cb);
    }

    /**
     * Modify channel linear assembly Channel configuration.
     * @param {ModifyStreamPackageLinearAssemblyChannelRequest} req
     * @param {function(string, ModifyStreamPackageLinearAssemblyChannelResponse):void} cb
     * @public
     */
    ModifyStreamPackageLinearAssemblyChannel(req, cb) {
        let resp = new ModifyStreamPackageLinearAssemblyChannelResponse();
        this.request("ModifyStreamPackageLinearAssemblyChannel", req, resp, cb);
    }

    /**
     * Create a linear assembly channel.
     * @param {CreateStreamPackageLinearAssemblyChannelRequest} req
     * @param {function(string, CreateStreamPackageLinearAssemblyChannelResponse):void} cb
     * @public
     */
    CreateStreamPackageLinearAssemblyChannel(req, cb) {
        let resp = new CreateStreamPackageLinearAssemblyChannelResponse();
        this.request("CreateStreamPackageLinearAssemblyChannel", req, resp, cb);
    }

    /**
     * Query channel linear assembly Source information list.
     * @param {DescribeStreamPackageSourcesRequest} req
     * @param {function(string, DescribeStreamPackageSourcesResponse):void} cb
     * @public
     */
    DescribeStreamPackageSources(req, cb) {
        let resp = new DescribeStreamPackageSourcesResponse();
        this.request("DescribeStreamPackageSources", req, resp, cb);
    }

    /**
     * This API is used to create an endpoint on a StreamPackage channel.
     * @param {CreateStreamPackageChannelEndpointRequest} req
     * @param {function(string, CreateStreamPackageChannelEndpointResponse):void} cb
     * @public
     */
    CreateStreamPackageChannelEndpoint(req, cb) {
        let resp = new CreateStreamPackageChannelEndpointResponse();
        this.request("CreateStreamPackageChannelEndpoint", req, resp, cb);
    }

    /**
     * Query channel linear assembly Source alarm information.
     * @param {DescribeStreamPackageSourceAlertsRequest} req
     * @param {function(string, DescribeStreamPackageSourceAlertsResponse):void} cb
     * @public
     */
    DescribeStreamPackageSourceAlerts(req, cb) {
        let resp = new DescribeStreamPackageSourceAlertsResponse();
        this.request("DescribeStreamPackageSourceAlerts", req, resp, cb);
    }

    /**
     * Create Linear Assembly SourceLocation.
     * @param {CreateStreamPackageSourceLocationRequest} req
     * @param {function(string, CreateStreamPackageSourceLocationResponse):void} cb
     * @public
     */
    CreateStreamPackageSourceLocation(req, cb) {
        let resp = new CreateStreamPackageSourceLocationResponse();
        this.request("CreateStreamPackageSourceLocation", req, resp, cb);
    }

    /**
     * Create a linear assembly program.
     * @param {CreateStreamPackageLinearAssemblyProgramRequest} req
     * @param {function(string, CreateStreamPackageLinearAssemblyProgramResponse):void} cb
     * @public
     */
    CreateStreamPackageLinearAssemblyProgram(req, cb) {
        let resp = new CreateStreamPackageLinearAssemblyProgramResponse();
        this.request("CreateStreamPackageLinearAssemblyProgram", req, resp, cb);
    }

    /**
     * Batch deletion of channels linear assembly program.
     * @param {DeleteStreamPackageLinearAssemblyProgramsRequest} req
     * @param {function(string, DeleteStreamPackageLinearAssemblyProgramsResponse):void} cb
     * @public
     */
    DeleteStreamPackageLinearAssemblyPrograms(req, cb) {
        let resp = new DeleteStreamPackageLinearAssemblyProgramsResponse();
        this.request("DeleteStreamPackageLinearAssemblyPrograms", req, resp, cb);
    }

    /**
     * Query channel linear assembly Programl assembly scheduling information list.
     * @param {DescribeStreamPackageLinearAssemblyProgramSchedulesRequest} req
     * @param {function(string, DescribeStreamPackageLinearAssemblyProgramSchedulesResponse):void} cb
     * @public
     */
    DescribeStreamPackageLinearAssemblyProgramSchedules(req, cb) {
        let resp = new DescribeStreamPackageLinearAssemblyProgramSchedulesResponse();
        this.request("DescribeStreamPackageLinearAssemblyProgramSchedules", req, resp, cb);
    }

    /**
     * Batch delete media packaging SourceLocation.
     * @param {DeleteStreamPackageSourceLocationRequest} req
     * @param {function(string, DeleteStreamPackageSourceLocationResponse):void} cb
     * @public
     */
    DeleteStreamPackageSourceLocation(req, cb) {
        let resp = new DeleteStreamPackageSourceLocationResponse();
        this.request("DeleteStreamPackageSourceLocation", req, resp, cb);
    }

    /**
     * Query HarvestJob.
     * @param {DescribeStreamPackageHarvestJobRequest} req
     * @param {function(string, DescribeStreamPackageHarvestJobResponse):void} cb
     * @public
     */
    DescribeStreamPackageHarvestJob(req, cb) {
        let resp = new DescribeStreamPackageHarvestJobResponse();
        this.request("DescribeStreamPackageHarvestJob", req, resp, cb);
    }

    /**
     * This API is used to query the information of a StreamPackage channel.
     * @param {DescribeStreamPackageChannelRequest} req
     * @param {function(string, DescribeStreamPackageChannelResponse):void} cb
     * @public
     */
    DescribeStreamPackageChannel(req, cb) {
        let resp = new DescribeStreamPackageChannelResponse();
        this.request("DescribeStreamPackageChannel", req, resp, cb);
    }

    /**
     * DescribeStreamPackageSSAIChannel
     * @param {DescribeStreamPackageSSAIChannelRequest} req
     * @param {function(string, DescribeStreamPackageSSAIChannelResponse):void} cb
     * @public
     */
    DescribeStreamPackageSSAIChannel(req, cb) {
        let resp = new DescribeStreamPackageSSAIChannelResponse();
        this.request("DescribeStreamPackageSSAIChannel", req, resp, cb);
    }

    /**
     * Query channel linear assembly SourceLocation information list.
     * @param {DescribeStreamPackageSourceLocationsRequest} req
     * @param {function(string, DescribeStreamPackageSourceLocationsResponse):void} cb
     * @public
     */
    DescribeStreamPackageSourceLocations(req, cb) {
        let resp = new DescribeStreamPackageSourceLocationsResponse();
        this.request("DescribeStreamPackageSourceLocations", req, resp, cb);
    }

    /**
     * Query channel linear assembly sourceLocation information.
     * @param {DescribeStreamPackageSourceLocationRequest} req
     * @param {function(string, DescribeStreamPackageSourceLocationResponse):void} cb
     * @public
     */
    DescribeStreamPackageSourceLocation(req, cb) {
        let resp = new DescribeStreamPackageSourceLocationResponse();
        this.request("DescribeStreamPackageSourceLocation", req, resp, cb);
    }

    /**
     * Delete channels in batches and linearly assemble channels.
     * @param {DeleteStreamPackageLinearAssemblyChannelsRequest} req
     * @param {function(string, DeleteStreamPackageLinearAssemblyChannelsResponse):void} cb
     * @public
     */
    DeleteStreamPackageLinearAssemblyChannels(req, cb) {
        let resp = new DeleteStreamPackageLinearAssemblyChannelsResponse();
        this.request("DeleteStreamPackageLinearAssemblyChannels", req, resp, cb);
    }

    /**
     * Query channel linear assembly Channel information list.
     * @param {DescribeStreamPackageLinearAssemblyChannelsRequest} req
     * @param {function(string, DescribeStreamPackageLinearAssemblyChannelsResponse):void} cb
     * @public
     */
    DescribeStreamPackageLinearAssemblyChannels(req, cb) {
        let resp = new DescribeStreamPackageLinearAssemblyChannelsResponse();
        this.request("DescribeStreamPackageLinearAssemblyChannels", req, resp, cb);
    }

    /**
     * Delete VOD remux tasks in batches.
     * @param {DeleteStreamPackageVodRemuxTasksRequest} req
     * @param {function(string, DeleteStreamPackageVodRemuxTasksResponse):void} cb
     * @public
     */
    DeleteStreamPackageVodRemuxTasks(req, cb) {
        let resp = new DeleteStreamPackageVodRemuxTasksResponse();
        this.request("DeleteStreamPackageVodRemuxTasks", req, resp, cb);
    }

    /**
     * This API is used to create a StreamPackage channel.
     * @param {CreateStreamPackageChannelRequest} req
     * @param {function(string, CreateStreamPackageChannelResponse):void} cb
     * @public
     */
    CreateStreamPackageChannel(req, cb) {
        let resp = new CreateStreamPackageChannelResponse();
        this.request("CreateStreamPackageChannel", req, resp, cb);
    }

    /**
     * Query channel linear assembly Location alarm information.
     * @param {DescribeStreamPackageSourceLocationAlertsRequest} req
     * @param {function(string, DescribeStreamPackageSourceLocationAlertsResponse):void} cb
     * @public
     */
    DescribeStreamPackageSourceLocationAlerts(req, cb) {
        let resp = new DescribeStreamPackageSourceLocationAlertsResponse();
        this.request("DescribeStreamPackageSourceLocationAlerts", req, resp, cb);
    }

    /**
     * This API is used to delete StreamPackage channels in batches.
     * @param {DeleteStreamPackageChannelsRequest} req
     * @param {function(string, DeleteStreamPackageChannelsResponse):void} cb
     * @public
     */
    DeleteStreamPackageChannels(req, cb) {
        let resp = new DeleteStreamPackageChannelsResponse();
        this.request("DeleteStreamPackageChannels", req, resp, cb);
    }

    /**
     * Linear Assembly channel is bound to CDN playback domain name.
     * @param {BindLinearAssemblyCDNDomainWithChannelRequest} req
     * @param {function(string, BindLinearAssemblyCDNDomainWithChannelResponse):void} cb
     * @public
     */
    BindLinearAssemblyCDNDomainWithChannel(req, cb) {
        let resp = new BindLinearAssemblyCDNDomainWithChannelResponse();
        this.request("BindLinearAssemblyCDNDomainWithChannel", req, resp, cb);
    }

    /**
     * This API is used to modify a StreamPackage channel.
     * @param {ModifyStreamPackageChannelRequest} req
     * @param {function(string, ModifyStreamPackageChannelResponse):void} cb
     * @public
     */
    ModifyStreamPackageChannel(req, cb) {
        let resp = new ModifyStreamPackageChannelResponse();
        this.request("ModifyStreamPackageChannel", req, resp, cb);
    }

    /**
     * Query VOD remux task information.
     * @param {DescribeStreamPackageVodRemuxTaskRequest} req
     * @param {function(string, DescribeStreamPackageVodRemuxTaskResponse):void} cb
     * @public
     */
    DescribeStreamPackageVodRemuxTask(req, cb) {
        let resp = new DescribeStreamPackageVodRemuxTaskResponse();
        this.request("DescribeStreamPackageVodRemuxTask", req, resp, cb);
    }

    /**
     * Create VodRemuxTask
     * @param {CreateStreamPackageVodRemuxTaskRequest} req
     * @param {function(string, CreateStreamPackageVodRemuxTaskResponse):void} cb
     * @public
     */
    CreateStreamPackageVodRemuxTask(req, cb) {
        let resp = new CreateStreamPackageVodRemuxTaskResponse();
        this.request("CreateStreamPackageVodRemuxTask", req, resp, cb);
    }


}
module.exports = MdpClient;
