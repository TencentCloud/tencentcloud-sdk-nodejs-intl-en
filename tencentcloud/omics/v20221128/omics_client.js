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
const DeleteVolumeDataRequest = models.DeleteVolumeDataRequest;
const RetryRunsResponse = models.RetryRunsResponse;
const RunApplicationResponse = models.RunApplicationResponse;
const ExecutionTime = models.ExecutionTime;
const RunStatusCount = models.RunStatusCount;
const GetRunStatusRequest = models.GetRunStatusRequest;
const DescribeRunsResponse = models.DescribeRunsResponse;
const ImportTableFileResponse = models.ImportTableFileResponse;
const RunApplicationRequest = models.RunApplicationRequest;
const GetRunMetadataFileResponse = models.GetRunMetadataFileResponse;
const CreateVolumeResponse = models.CreateVolumeResponse;
const DeleteEnvironmentResponse = models.DeleteEnvironmentResponse;
const Environment = models.Environment;
const GetRunCallsRequest = models.GetRunCallsRequest;
const RunWorkflowRequest = models.RunWorkflowRequest;
const DescribeRunsRequest = models.DescribeRunsRequest;
const Run = models.Run;
const TableColumn = models.TableColumn;
const CreateVolumeRequest = models.CreateVolumeRequest;
const SecurityGroupOption = models.SecurityGroupOption;
const DescribeTablesRowsRequest = models.DescribeTablesRowsRequest;
const DescribeEnvironmentsResponse = models.DescribeEnvironmentsResponse;
const ModifyVolumeResponse = models.ModifyVolumeResponse;
const LimitRange = models.LimitRange;
const DescribeTablesResponse = models.DescribeTablesResponse;
const VPCOption = models.VPCOption;
const ResourceQuota = models.ResourceQuota;
const RetryRunsRequest = models.RetryRunsRequest;
const ImportTableFileRequest = models.ImportTableFileRequest;
const DeleteVolumeResponse = models.DeleteVolumeResponse;
const CacheInfo = models.CacheInfo;
const ClusterOption = models.ClusterOption;
const TerminateRunGroupResponse = models.TerminateRunGroupResponse;
const DescribeVolumesResponse = models.DescribeVolumesResponse;
const GitInfo = models.GitInfo;
const ApplicationVersion = models.ApplicationVersion;
const DeleteVolumeRequest = models.DeleteVolumeRequest;
const DeleteEnvironmentRequest = models.DeleteEnvironmentRequest;
const RunGroup = models.RunGroup;
const DatabaseOption = models.DatabaseOption;
const GetRunCallsResponse = models.GetRunCallsResponse;
const Filter = models.Filter;
const ResourceIds = models.ResourceIds;
const DescribeRunGroupsResponse = models.DescribeRunGroupsResponse;
const Volume = models.Volume;
const TerminateRunGroupRequest = models.TerminateRunGroupRequest;
const EnvironmentConfig = models.EnvironmentConfig;
const DescribeTablesRowsResponse = models.DescribeTablesRowsResponse;
const CreateEnvironmentResponse = models.CreateEnvironmentResponse;
const GetRunMetadataFileRequest = models.GetRunMetadataFileRequest;
const RunWorkflowResponse = models.RunWorkflowResponse;
const ModifyVolumeRequest = models.ModifyVolumeRequest;
const DescribeRunGroupsRequest = models.DescribeRunGroupsRequest;
const GetRunStatusResponse = models.GetRunStatusResponse;
const StorageOption = models.StorageOption;
const DescribeTablesRequest = models.DescribeTablesRequest;
const TableRow = models.TableRow;
const DeleteVolumeDataResponse = models.DeleteVolumeDataResponse;
const DescribeEnvironmentsRequest = models.DescribeEnvironmentsRequest;
const RunOption = models.RunOption;
const NFOption = models.NFOption;
const Table = models.Table;
const CVMOption = models.CVMOption;
const RunMetadata = models.RunMetadata;
const DescribeVolumesRequest = models.DescribeVolumesRequest;
const CreateEnvironmentRequest = models.CreateEnvironmentRequest;


/**
 * omics client
 * @class
 */
class OmicsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("omics.intl.tencentcloudapi.com", "2022-11-28", credential, region, profile);
    }
    
    /**
     * This API is used to import the table file.
     * @param {ImportTableFileRequest} req
     * @param {function(string, ImportTableFileResponse):void} cb
     * @public
     */
    ImportTableFile(req, cb) {
        let resp = new ImportTableFileResponse();
        this.request("ImportTableFile", req, resp, cb);
    }

    /**
     * This API is used to query the run group list.
     * @param {DescribeRunGroupsRequest} req
     * @param {function(string, DescribeRunGroupsResponse):void} cb
     * @public
     */
    DescribeRunGroups(req, cb) {
        let resp = new DescribeRunGroupsResponse();
        this.request("DescribeRunGroups", req, resp, cb);
    }

    /**
     * This API is used to query the table row data.
     * @param {DescribeTablesRowsRequest} req
     * @param {function(string, DescribeTablesRowsResponse):void} cb
     * @public
     */
    DescribeTablesRows(req, cb) {
        let resp = new DescribeTablesRowsResponse();
        this.request("DescribeTablesRows", req, resp, cb);
    }

    /**
     * This API is used to delete the volume data.
     * @param {DeleteVolumeDataRequest} req
     * @param {function(string, DeleteVolumeDataResponse):void} cb
     * @public
     */
    DeleteVolumeData(req, cb) {
        let resp = new DeleteVolumeDataResponse();
        this.request("DeleteVolumeData", req, resp, cb);
    }

    /**
     * This API is used to query the environment list.
     * @param {DescribeEnvironmentsRequest} req
     * @param {function(string, DescribeEnvironmentsResponse):void} cb
     * @public
     */
    DescribeEnvironments(req, cb) {
        let resp = new DescribeEnvironmentsResponse();
        this.request("DescribeEnvironments", req, resp, cb);
    }

    /**
     * This API is used to get the run details file.
     * @param {GetRunMetadataFileRequest} req
     * @param {function(string, GetRunMetadataFileResponse):void} cb
     * @public
     */
    GetRunMetadataFile(req, cb) {
        let resp = new GetRunMetadataFileResponse();
        this.request("GetRunMetadataFile", req, resp, cb);
    }

    /**
     * This API is used to create a volume.
     * @param {CreateVolumeRequest} req
     * @param {function(string, CreateVolumeResponse):void} cb
     * @public
     */
    CreateVolume(req, cb) {
        let resp = new CreateVolumeResponse();
        this.request("CreateVolume", req, resp, cb);
    }

    /**
     * This API is used to query the volume list.
     * @param {DescribeVolumesRequest} req
     * @param {function(string, DescribeVolumesResponse):void} cb
     * @public
     */
    DescribeVolumes(req, cb) {
        let resp = new DescribeVolumesResponse();
        this.request("DescribeVolumes", req, resp, cb);
    }

    /**
     * This API is used to query run details.
     * @param {GetRunStatusRequest} req
     * @param {function(string, GetRunStatusResponse):void} cb
     * @public
     */
    GetRunStatus(req, cb) {
        let resp = new GetRunStatusResponse();
        this.request("GetRunStatus", req, resp, cb);
    }

    /**
     * This API is used to run the application.
     * @param {RunApplicationRequest} req
     * @param {function(string, RunApplicationResponse):void} cb
     * @public
     */
    RunApplication(req, cb) {
        let resp = new RunApplicationResponse();
        this.request("RunApplication", req, resp, cb);
    }

    /**
     * This API is used to run the workflow.
     * @param {RunWorkflowRequest} req
     * @param {function(string, RunWorkflowResponse):void} cb
     * @public
     */
    RunWorkflow(req, cb) {
        let resp = new RunWorkflowResponse();
        this.request("RunWorkflow", req, resp, cb);
    }

    /**
     * This API is used to create an environment for Tencent Healthcare Omics Platform.
     * @param {CreateEnvironmentRequest} req
     * @param {function(string, CreateEnvironmentResponse):void} cb
     * @public
     */
    CreateEnvironment(req, cb) {
        let resp = new CreateEnvironmentResponse();
        this.request("CreateEnvironment", req, resp, cb);
    }

    /**
     * This API is used to retry the run.
     * @param {RetryRunsRequest} req
     * @param {function(string, RetryRunsResponse):void} cb
     * @public
     */
    RetryRuns(req, cb) {
        let resp = new RetryRunsResponse();
        this.request("RetryRuns", req, resp, cb);
    }

    /**
     * This API is used to terminate the run group.
     * @param {TerminateRunGroupRequest} req
     * @param {function(string, TerminateRunGroupResponse):void} cb
     * @public
     */
    TerminateRunGroup(req, cb) {
        let resp = new TerminateRunGroupResponse();
        this.request("TerminateRunGroup", req, resp, cb);
    }

    /**
     * This API is used to query the run list.
     * @param {DescribeRunsRequest} req
     * @param {function(string, DescribeRunsResponse):void} cb
     * @public
     */
    DescribeRuns(req, cb) {
        let resp = new DescribeRunsResponse();
        this.request("DescribeRuns", req, resp, cb);
    }

    /**
     * This API is used to delete the volume.
     * @param {DeleteVolumeRequest} req
     * @param {function(string, DeleteVolumeResponse):void} cb
     * @public
     */
    DeleteVolume(req, cb) {
        let resp = new DeleteVolumeResponse();
        this.request("DeleteVolume", req, resp, cb);
    }

    /**
     * This API is used to modify the volume.
     * @param {ModifyVolumeRequest} req
     * @param {function(string, ModifyVolumeResponse):void} cb
     * @public
     */
    ModifyVolume(req, cb) {
        let resp = new ModifyVolumeResponse();
        this.request("ModifyVolume", req, resp, cb);
    }

    /**
     * This API is used to delete the environment.
     * @param {DeleteEnvironmentRequest} req
     * @param {function(string, DeleteEnvironmentResponse):void} cb
     * @public
     */
    DeleteEnvironment(req, cb) {
        let resp = new DeleteEnvironmentResponse();
        this.request("DeleteEnvironment", req, resp, cb);
    }

    /**
     * This API is used to query the table.
     * @param {DescribeTablesRequest} req
     * @param {function(string, DescribeTablesResponse):void} cb
     * @public
     */
    DescribeTables(req, cb) {
        let resp = new DescribeTablesResponse();
        this.request("DescribeTables", req, resp, cb);
    }

    /**
     * This API is used to query job details.
     * @param {GetRunCallsRequest} req
     * @param {function(string, GetRunCallsResponse):void} cb
     * @public
     */
    GetRunCalls(req, cb) {
        let resp = new GetRunCallsResponse();
        this.request("GetRunCalls", req, resp, cb);
    }


}
module.exports = OmicsClient;
