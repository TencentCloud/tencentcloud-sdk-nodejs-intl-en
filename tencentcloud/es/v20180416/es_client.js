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
const TaskDetail = models.TaskDetail;
const OtherConfig = models.OtherConfig;
const DescribeInstanceOperationsRequest = models.DescribeInstanceOperationsRequest;
const OperationDetail = models.OperationDetail;
const EsPublicAcl = models.EsPublicAcl;
const DictInfo = models.DictInfo;
const CreateInstanceResponse = models.CreateInstanceResponse;
const DescribeInstanceLogsRequest = models.DescribeInstanceLogsRequest;
const ModifyAutoBackUpCommonInfoRequest = models.ModifyAutoBackUpCommonInfoRequest;
const KeyValue = models.KeyValue;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeInstanceLogsResponse = models.DescribeInstanceLogsResponse;
const UpdateIndexResponse = models.UpdateIndexResponse;
const DescribeInstanceOperationsResponse = models.DescribeInstanceOperationsResponse;
const AutoScaleDiskInfo = models.AutoScaleDiskInfo;
const UpdateRequestTargetNodeTypesResponse = models.UpdateRequestTargetNodeTypesResponse;
const IndexOptionsField = models.IndexOptionsField;
const SubTaskDetail = models.SubTaskDetail;
const GpuInfo = models.GpuInfo;
const EsConfigSetInfo = models.EsConfigSetInfo;
const GetRequestTargetNodeTypesResponse = models.GetRequestTargetNodeTypesResponse;
const Operation = models.Operation;
const InstanceLog = models.InstanceLog;
const NodeInfo = models.NodeInfo;
const DescribeAutoBackUpStrategyRequest = models.DescribeAutoBackUpStrategyRequest;
const DescribeIndexMetaResponse = models.DescribeIndexMetaResponse;
const ModifyAutoBackUpStrategyRequest = models.ModifyAutoBackUpStrategyRequest;
const KibanaView = models.KibanaView;
const IndexSettingsField = models.IndexSettingsField;
const UpdateRequestTargetNodeTypesRequest = models.UpdateRequestTargetNodeTypesRequest;
const CreateAutoBackUpStrategyRequest = models.CreateAutoBackUpStrategyRequest;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const CreateIndexRequest = models.CreateIndexRequest;
const UpdatePluginsRequest = models.UpdatePluginsRequest;
const UpgradeLicenseRequest = models.UpgradeLicenseRequest;
const UpdateInstanceResponse = models.UpdateInstanceResponse;
const DeleteIndexRequest = models.DeleteIndexRequest;
const DescribeViewsRequest = models.DescribeViewsRequest;
const ModifyAutoBackUpStrategyResponse = models.ModifyAutoBackUpStrategyResponse;
const DescribeIndexListResponse = models.DescribeIndexListResponse;
const ClusterView = models.ClusterView;
const CreateIndexResponse = models.CreateIndexResponse;
const DeleteAutoBackUpStrategyRequest = models.DeleteAutoBackUpStrategyRequest;
const UpgradeLicenseResponse = models.UpgradeLicenseResponse;
const RestartKibanaRequest = models.RestartKibanaRequest;
const DescribeAutoBackUpStrategyResponse = models.DescribeAutoBackUpStrategyResponse;
const UpdateDictionariesRequest = models.UpdateDictionariesRequest;
const CosBackup = models.CosBackup;
const DescribeIndexListRequest = models.DescribeIndexListRequest;
const OperationDuration = models.OperationDuration;
const OperationDurationUpdated = models.OperationDurationUpdated;
const CreateInstanceRequest = models.CreateInstanceRequest;
const UpdateDictionariesResponse = models.UpdateDictionariesResponse;
const ProcessDetail = models.ProcessDetail;
const DeleteIndexResponse = models.DeleteIndexResponse;
const UpdatePluginsResponse = models.UpdatePluginsResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const EsDictionaryInfo = models.EsDictionaryInfo;
const OutboundPublicAcl = models.OutboundPublicAcl;
const GetRequestTargetNodeTypesRequest = models.GetRequestTargetNodeTypesRequest;
const InstanceInfo = models.InstanceInfo;
const MasterNodeInfo = models.MasterNodeInfo;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const DeleteAutoBackUpStrategyResponse = models.DeleteAutoBackUpStrategyResponse;
const DescribeIndexMetaRequest = models.DescribeIndexMetaRequest;
const RestartKibanaResponse = models.RestartKibanaResponse;
const UpdateIndexRequest = models.UpdateIndexRequest;
const IndexMetaField = models.IndexMetaField;
const WebNodeTypeInfo = models.WebNodeTypeInfo;
const LocalDiskInfo = models.LocalDiskInfo;
const IndexPolicyField = models.IndexPolicyField;
const EnableScheduleOperationDuration = models.EnableScheduleOperationDuration;
const RestartInstanceResponse = models.RestartInstanceResponse;
const BackingIndexMetaField = models.BackingIndexMetaField;
const NodeView = models.NodeView;
const TagInfo = models.TagInfo;
const UpdateInstanceRequest = models.UpdateInstanceRequest;
const CreateAutoBackUpStrategyResponse = models.CreateAutoBackUpStrategyResponse;
const RestartInstanceRequest = models.RestartInstanceRequest;
const ZoneDetail = models.ZoneDetail;
const KibanaNodeInfo = models.KibanaNodeInfo;
const EsAcl = models.EsAcl;
const RestartNodesRequest = models.RestartNodesRequest;
const RestartNodesResponse = models.RestartNodesResponse;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const DescribeViewsResponse = models.DescribeViewsResponse;
const ModifyAutoBackUpCommonInfoResponse = models.ModifyAutoBackUpCommonInfoResponse;
const OptionalWebServiceInfo = models.OptionalWebServiceInfo;


/**
 * es client
 * @class
 */
class EsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("es.intl.tencentcloudapi.com", "2018-04-16", credential, region, profile);
    }
    
    /**
     * Get the node type that receives client requests.
     * @param {GetRequestTargetNodeTypesRequest} req
     * @param {function(string, GetRequestTargetNodeTypesResponse):void} cb
     * @public
     */
    GetRequestTargetNodeTypes(req, cb) {
        let resp = new GetRequestTargetNodeTypesResponse();
        this.request("GetRequestTargetNodeTypes", req, resp, cb);
    }

    /**
     * This API is used to modify an auto backup snapshot policy.
     * @param {ModifyAutoBackUpStrategyRequest} req
     * @param {function(string, ModifyAutoBackUpStrategyResponse):void} cb
     * @public
     */
    ModifyAutoBackUpStrategy(req, cb) {
        let resp = new ModifyAutoBackUpStrategyResponse();
        this.request("ModifyAutoBackUpStrategy", req, resp, cb);
    }

    /**
     * This API is used to obtain the index list.
     * @param {DescribeIndexListRequest} req
     * @param {function(string, DescribeIndexListResponse):void} cb
     * @public
     */
    DescribeIndexList(req, cb) {
        let resp = new DescribeIndexListResponse();
        this.request("DescribeIndexList", req, resp, cb);
    }

    /**
     * Terminate cluster instances
     * @param {DeleteInstanceRequest} req
     * @param {function(string, DeleteInstanceResponse):void} cb
     * @public
     */
    DeleteInstance(req, cb) {
        let resp = new DeleteInstanceResponse();
        this.request("DeleteInstance", req, resp, cb);
    }

    /**
     * Create an index
     * @param {CreateIndexRequest} req
     * @param {function(string, CreateIndexResponse):void} cb
     * @public
     */
    CreateIndex(req, cb) {
        let resp = new CreateIndexResponse();
        this.request("CreateIndex", req, resp, cb);
    }

    /**
     * Query all instances meeting conditions for the user in that region
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to delete an auto backup snapshot policy.
     * @param {DeleteAutoBackUpStrategyRequest} req
     * @param {function(string, DeleteAutoBackUpStrategyResponse):void} cb
     * @public
     */
    DeleteAutoBackUpStrategy(req, cb) {
        let resp = new DeleteAutoBackUpStrategyResponse();
        this.request("DeleteAutoBackUpStrategy", req, resp, cb);
    }

    /**
     * Update the plug-in list
     * @param {UpdatePluginsRequest} req
     * @param {function(string, UpdatePluginsResponse):void} cb
     * @public
     */
    UpdatePlugins(req, cb) {
        let resp = new UpdatePluginsResponse();
        this.request("UpdatePlugins", req, resp, cb);
    }

    /**
     * Perform operations on the cluster, such as node specification change, instance name modification, configuration modification, password resetting, and Kibana blocklist/allowlist addition. InstanceId is a required parameter, while ForceRestart is optional. The remaining parameter combinations and their meanings are as follows:
- InstanceName: Modify the instance name (only used to identify the instance)
-NodeInfoList: Modify node configuration (horizontally scale nodes, vertically scale nodes, add primary nodes, add cold nodes, etc.)
-EsConfig: modify cluster configuration
-Password: Modify the password of the default user elastic
-EsAcl: Modify an ACL
-CosBackUp: Set cluster COS auto backup information
Only one of the above parameters can be passed. Passing more or fewer will cause request failure.
     * @param {UpdateInstanceRequest} req
     * @param {function(string, UpdateInstanceResponse):void} cb
     * @public
     */
    UpdateInstance(req, cb) {
        let resp = new UpdateInstanceResponse();
        this.request("UpdateInstance", req, resp, cb);
    }

    /**
     * Restart ES cluster instances for system version update.
     * @param {RestartInstanceRequest} req
     * @param {function(string, RestartInstanceResponse):void} cb
     * @public
     */
    RestartInstance(req, cb) {
        let resp = new RestartInstanceResponse();
        this.request("RestartInstance", req, resp, cb);
    }

    /**
     * This API is used to create an auto backup snapshot policy.
     * @param {CreateAutoBackUpStrategyRequest} req
     * @param {function(string, CreateAutoBackUpStrategyResponse):void} cb
     * @public
     */
    CreateAutoBackUpStrategy(req, cb) {
        let resp = new CreateAutoBackUpStrategyResponse();
        this.request("CreateAutoBackUpStrategy", req, resp, cb);
    }

    /**
     * This API is used to obtain an auto backup snapshot policy.
     * @param {DescribeAutoBackUpStrategyRequest} req
     * @param {function(string, DescribeAutoBackUpStrategyResponse):void} cb
     * @public
     */
    DescribeAutoBackUpStrategy(req, cb) {
        let resp = new DescribeAutoBackUpStrategyResponse();
        this.request("DescribeAutoBackUpStrategy", req, resp, cb);
    }

    /**
     * Query the logs of eligible ES clusters in that region for the user.
     * @param {DescribeInstanceLogsRequest} req
     * @param {function(string, DescribeInstanceLogsResponse):void} cb
     * @public
     */
    DescribeInstanceLogs(req, cb) {
        let resp = new DescribeInstanceLogsResponse();
        this.request("DescribeInstanceLogs", req, resp, cb);
    }

    /**
     * Restart Kibana
     * @param {RestartKibanaRequest} req
     * @param {function(string, RestartKibanaResponse):void} cb
     * @public
     */
    RestartKibana(req, cb) {
        let resp = new RestartKibanaResponse();
        this.request("RestartKibana", req, resp, cb);
    }

    /**
     * Update the ES cluster dictionary
     * @param {UpdateDictionariesRequest} req
     * @param {function(string, UpdateDictionariesResponse):void} cb
     * @public
     */
    UpdateDictionaries(req, cb) {
        let resp = new UpdateDictionariesResponse();
        this.request("UpdateDictionaries", req, resp, cb);
    }

    /**
     * This API is used to update the node type that receives client requests.
     * @param {UpdateRequestTargetNodeTypesRequest} req
     * @param {function(string, UpdateRequestTargetNodeTypesResponse):void} cb
     * @public
     */
    UpdateRequestTargetNodeTypes(req, cb) {
        let resp = new UpdateRequestTargetNodeTypesResponse();
        this.request("UpdateRequestTargetNodeTypes", req, resp, cb);
    }

    /**
     * Query the operation records of an instance under specified conditions.
     * @param {DescribeInstanceOperationsRequest} req
     * @param {function(string, DescribeInstanceOperationsResponse):void} cb
     * @public
     */
    DescribeInstanceOperations(req, cb) {
        let resp = new DescribeInstanceOperationsResponse();
        this.request("DescribeInstanceOperations", req, resp, cb);
    }

    /**
     * Query view data of a cluster, including cluster-level, node, and Kibana dimensions.
     * @param {DescribeViewsRequest} req
     * @param {function(string, DescribeViewsResponse):void} cb
     * @public
     */
    DescribeViews(req, cb) {
        let resp = new DescribeViewsResponse();
        this.request("DescribeViews", req, resp, cb);
    }

    /**
     * Create an ES cluster instance with the specified specification.
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        let resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }

    /**
     * Updates an index
     * @param {UpdateIndexRequest} req
     * @param {function(string, UpdateIndexResponse):void} cb
     * @public
     */
    UpdateIndex(req, cb) {
        let resp = new UpdateIndexResponse();
        this.request("UpdateIndex", req, resp, cb);
    }

    /**
     * Used to restart cluster nodes.
     * @param {RestartNodesRequest} req
     * @param {function(string, RestartNodesResponse):void} cb
     * @public
     */
    RestartNodes(req, cb) {
        let resp = new RestartNodesResponse();
        this.request("RestartNodes", req, resp, cb);
    }

    /**
     * Delete an index
     * @param {DeleteIndexRequest} req
     * @param {function(string, DeleteIndexResponse):void} cb
     * @public
     */
    DeleteIndex(req, cb) {
        let resp = new DeleteIndexResponse();
        this.request("DeleteIndex", req, resp, cb);
    }

    /**
     * Upgrades the edition of an ES cluster
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        let resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
    }

    /**
     * Upgrade ES commercial features
     * @param {UpgradeLicenseRequest} req
     * @param {function(string, UpgradeLicenseResponse):void} cb
     * @public
     */
    UpgradeLicense(req, cb) {
        let resp = new UpgradeLicenseResponse();
        this.request("UpgradeLicense", req, resp, cb);
    }

    /**
     * This API is used to modify the common information of an auto backup snapshot policy.
     * @param {ModifyAutoBackUpCommonInfoRequest} req
     * @param {function(string, ModifyAutoBackUpCommonInfoResponse):void} cb
     * @public
     */
    ModifyAutoBackUpCommonInfo(req, cb) {
        let resp = new ModifyAutoBackUpCommonInfoResponse();
        this.request("ModifyAutoBackUpCommonInfo", req, resp, cb);
    }

    /**
     * This API is used to retrieve index metadata.
     * @param {DescribeIndexMetaRequest} req
     * @param {function(string, DescribeIndexMetaResponse):void} cb
     * @public
     */
    DescribeIndexMeta(req, cb) {
        let resp = new DescribeIndexMetaResponse();
        this.request("DescribeIndexMeta", req, resp, cb);
    }


}
module.exports = EsClient;
