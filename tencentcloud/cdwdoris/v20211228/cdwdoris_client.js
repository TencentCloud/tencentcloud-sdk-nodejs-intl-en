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
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const DestroyInstanceResponse = models.DestroyInstanceResponse;
const DescribeSlowQueryRecordsDownloadRequest = models.DescribeSlowQueryRecordsDownloadRequest;
const ResizeDiskRequest = models.ResizeDiskRequest;
const NodeInfo = models.NodeInfo;
const RestartClusterForNodeResponse = models.RestartClusterForNodeResponse;
const DescribeInstanceNodesResponse = models.DescribeInstanceNodesResponse;
const DescribeInstanceStateRequest = models.DescribeInstanceStateRequest;
const DescribeClusterConfigsResponse = models.DescribeClusterConfigsResponse;
const ScaleOutInstanceResponse = models.ScaleOutInstanceResponse;
const SlowQueryRecord = models.SlowQueryRecord;
const DescribeInstanceNodesRequest = models.DescribeInstanceNodesRequest;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const ChargeProperties = models.ChargeProperties;
const ClusterConfigsInfoFromEMR = models.ClusterConfigsInfoFromEMR;
const InstanceNode = models.InstanceNode;
const CreateInstanceNewResponse = models.CreateInstanceNewResponse;
const DescribeSlowQueryRecordsDownloadResponse = models.DescribeSlowQueryRecordsDownloadResponse;
const DestroyInstanceRequest = models.DestroyInstanceRequest;
const CreateInstanceNewRequest = models.CreateInstanceNewRequest;
const InstanceInfo = models.InstanceInfo;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const DescribeSlowQueryRecordsRequest = models.DescribeSlowQueryRecordsRequest;
const DescribeClusterConfigsRequest = models.DescribeClusterConfigsRequest;
const ResizeDiskResponse = models.ResizeDiskResponse;
const AttachCBSSpec = models.AttachCBSSpec;
const DataBaseAuditRecord = models.DataBaseAuditRecord;
const ScaleOutInstanceRequest = models.ScaleOutInstanceRequest;
const DescribeSlowQueryRecordsResponse = models.DescribeSlowQueryRecordsResponse;
const DescribeDatabaseAuditRecordsResponse = models.DescribeDatabaseAuditRecordsResponse;
const DescribeInstanceResponse = models.DescribeInstanceResponse;
const RestartClusterForNodeRequest = models.RestartClusterForNodeRequest;
const ScaleUpInstanceRequest = models.ScaleUpInstanceRequest;
const NodesSummary = models.NodesSummary;
const NetworkInfo = models.NetworkInfo;
const CreateInstanceSpec = models.CreateInstanceSpec;
const SearchTags = models.SearchTags;
const DescribeInstanceRequest = models.DescribeInstanceRequest;
const ConfigKeyValue = models.ConfigKeyValue;
const Tag = models.Tag;
const DescribeInstanceStateResponse = models.DescribeInstanceStateResponse;
const DescribeDatabaseAuditRecordsRequest = models.DescribeDatabaseAuditRecordsRequest;
const DescribeInstanceNodesInfoRequest = models.DescribeInstanceNodesInfoRequest;
const DescribeDatabaseAuditDownloadResponse = models.DescribeDatabaseAuditDownloadResponse;
const DescribeDatabaseAuditDownloadRequest = models.DescribeDatabaseAuditDownloadRequest;
const DescribeInstanceNodesInfoResponse = models.DescribeInstanceNodesInfoResponse;
const ScaleUpInstanceResponse = models.ScaleUpInstanceResponse;


/**
 * cdwdoris client
 * @class
 */
class CdwdorisClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdwdoris.tencentcloudapi.com", "2021-12-28", credential, region, profile);
    }
    
    /**
     * This API is used to scale up/down computing resources.
     * @param {ScaleUpInstanceRequest} req
     * @param {function(string, ScaleUpInstanceResponse):void} cb
     * @public
     */
    ScaleUpInstance(req, cb) {
        let resp = new ScaleUpInstanceResponse();
        this.request("ScaleUpInstance", req, resp, cb);
    }

    /**
     * This API is used to get the list of clusters.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to terminate clusters.
     * @param {DestroyInstanceRequest} req
     * @param {function(string, DestroyInstanceResponse):void} cb
     * @public
     */
    DestroyInstance(req, cb) {
        let resp = new DestroyInstanceResponse();
        this.request("DestroyInstance", req, resp, cb);
    }

    /**
     * This API is used to display cluster status, process progress, etc. in the cluster details page.
     * @param {DescribeInstanceStateRequest} req
     * @param {function(string, DescribeInstanceStateResponse):void} cb
     * @public
     */
    DescribeInstanceState(req, cb) {
        let resp = new DescribeInstanceStateResponse();
        this.request("DescribeInstanceState", req, resp, cb);
    }

    /**
     * This API is used to get database audit records.
     * @param {DescribeDatabaseAuditRecordsRequest} req
     * @param {function(string, DescribeDatabaseAuditRecordsResponse):void} cb
     * @public
     */
    DescribeDatabaseAuditRecords(req, cb) {
        let resp = new DescribeDatabaseAuditRecordsResponse();
        this.request("DescribeDatabaseAuditRecords", req, resp, cb);
    }

    /**
     * This API is used to get the contents of the latest configuration files (config.xml, metrika.xml, and user.xml) of the cluster and display them to the user.
     * @param {DescribeClusterConfigsRequest} req
     * @param {function(string, DescribeClusterConfigsResponse):void} cb
     * @public
     */
    DescribeClusterConfigs(req, cb) {
        let resp = new DescribeClusterConfigsResponse();
        this.request("DescribeClusterConfigs", req, resp, cb);
    }

    /**
     * This API is used to expand cloud disks.
     * @param {ResizeDiskRequest} req
     * @param {function(string, ResizeDiskResponse):void} cb
     * @public
     */
    ResizeDisk(req, cb) {
        let resp = new ResizeDiskResponse();
        this.request("ResizeDisk", req, resp, cb);
    }

    /**
     * This API is used to download database audit logs.
     * @param {DescribeDatabaseAuditDownloadRequest} req
     * @param {function(string, DescribeDatabaseAuditDownloadResponse):void} cb
     * @public
     */
    DescribeDatabaseAuditDownload(req, cb) {
        let resp = new DescribeDatabaseAuditDownloadResponse();
        this.request("DescribeDatabaseAuditDownload", req, resp, cb);
    }

    /**
     * This API is used to query the specific information of a cluster based on the cluster ID.
     * @param {DescribeInstanceRequest} req
     * @param {function(string, DescribeInstanceResponse):void} cb
     * @public
     */
    DescribeInstance(req, cb) {
        let resp = new DescribeInstanceResponse();
        this.request("DescribeInstance", req, resp, cb);
    }

    /**
     * This API is used to indicate the rolling restart of the clusters.
     * @param {RestartClusterForNodeRequest} req
     * @param {function(string, RestartClusterForNodeResponse):void} cb
     * @public
     */
    RestartClusterForNode(req, cb) {
        let resp = new RestartClusterForNodeResponse();
        this.request("RestartClusterForNode", req, resp, cb);
    }

    /**
     * This API is used to get the list of cluster node information.
     * @param {DescribeInstanceNodesRequest} req
     * @param {function(string, DescribeInstanceNodesResponse):void} cb
     * @public
     */
    DescribeInstanceNodes(req, cb) {
        let resp = new DescribeInstanceNodesResponse();
        this.request("DescribeInstanceNodes", req, resp, cb);
    }

    /**
     * This API is used to download slow log files.
     * @param {DescribeSlowQueryRecordsDownloadRequest} req
     * @param {function(string, DescribeSlowQueryRecordsDownloadResponse):void} cb
     * @public
     */
    DescribeSlowQueryRecordsDownload(req, cb) {
        let resp = new DescribeSlowQueryRecordsDownloadResponse();
        this.request("DescribeSlowQueryRecordsDownload", req, resp, cb);
    }

    /**
     * This API is used to get the BE/FE node roles.
     * @param {DescribeInstanceNodesInfoRequest} req
     * @param {function(string, DescribeInstanceNodesInfoResponse):void} cb
     * @public
     */
    DescribeInstanceNodesInfo(req, cb) {
        let resp = new DescribeInstanceNodesInfoResponse();
        this.request("DescribeInstanceNodesInfo", req, resp, cb);
    }

    /**
     * This API is used to create clusters.
     * @param {CreateInstanceNewRequest} req
     * @param {function(string, CreateInstanceNewResponse):void} cb
     * @public
     */
    CreateInstanceNew(req, cb) {
        let resp = new CreateInstanceNewResponse();
        this.request("CreateInstanceNew", req, resp, cb);
    }

    /**
     * This API is used to horizontally scale out nodes.
     * @param {ScaleOutInstanceRequest} req
     * @param {function(string, ScaleOutInstanceResponse):void} cb
     * @public
     */
    ScaleOutInstance(req, cb) {
        let resp = new ScaleOutInstanceResponse();
        this.request("ScaleOutInstance", req, resp, cb);
    }

    /**
     * This API is used to modify the cluster's name.
     * @param {ModifyInstanceRequest} req
     * @param {function(string, ModifyInstanceResponse):void} cb
     * @public
     */
    ModifyInstance(req, cb) {
        let resp = new ModifyInstanceResponse();
        this.request("ModifyInstance", req, resp, cb);
    }

    /**
     * This API is used to get the slow log list.
     * @param {DescribeSlowQueryRecordsRequest} req
     * @param {function(string, DescribeSlowQueryRecordsResponse):void} cb
     * @public
     */
    DescribeSlowQueryRecords(req, cb) {
        let resp = new DescribeSlowQueryRecordsResponse();
        this.request("DescribeSlowQueryRecords", req, resp, cb);
    }


}
module.exports = CdwdorisClient;
