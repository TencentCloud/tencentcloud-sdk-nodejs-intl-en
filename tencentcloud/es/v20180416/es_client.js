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
const InstanceLog = models.InstanceLog;
const LocalDiskInfo = models.LocalDiskInfo;
const TaskDetail = models.TaskDetail;
const NodeInfo = models.NodeInfo;
const DescribeInstanceOperationsRequest = models.DescribeInstanceOperationsRequest;
const OperationDetail = models.OperationDetail;
const EsPublicAcl = models.EsPublicAcl;
const DictInfo = models.DictInfo;
const RestartInstanceResponse = models.RestartInstanceResponse;
const CreateInstanceResponse = models.CreateInstanceResponse;
const DescribeInstanceLogsRequest = models.DescribeInstanceLogsRequest;
const UpgradeLicenseRequest = models.UpgradeLicenseRequest;
const CosBackup = models.CosBackup;
const TagInfo = models.TagInfo;
const KeyValue = models.KeyValue;
const CreateInstanceRequest = models.CreateInstanceRequest;
const InstanceInfo = models.InstanceInfo;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeInstanceLogsResponse = models.DescribeInstanceLogsResponse;
const UpdatePluginsResponse = models.UpdatePluginsResponse;
const RestartInstanceRequest = models.RestartInstanceRequest;
const ZoneDetail = models.ZoneDetail;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const UpdateInstanceRequest = models.UpdateInstanceRequest;
const EsDictionaryInfo = models.EsDictionaryInfo;
const DescribeInstanceOperationsResponse = models.DescribeInstanceOperationsResponse;
const RestartNodesRequest = models.RestartNodesRequest;
const UpdatePluginsRequest = models.UpdatePluginsRequest;
const UpgradeLicenseResponse = models.UpgradeLicenseResponse;
const EsAcl = models.EsAcl;
const MasterNodeInfo = models.MasterNodeInfo;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const SubTaskDetail = models.SubTaskDetail;
const RestartNodesResponse = models.RestartNodesResponse;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const UpdateInstanceResponse = models.UpdateInstanceResponse;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const Operation = models.Operation;


/**
 * es client
 * @class
 */
class EsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("es.tencentcloudapi.com", "2018-04-16", credential, region, profile);
    }
    
    /**
     * This API is used to query the operation history of an instance by specified criteria.
     * @param {DescribeInstanceOperationsRequest} req
     * @param {function(string, DescribeInstanceOperationsResponse):void} cb
     * @public
     */
    DescribeInstanceOperations(req, cb) {
        let resp = new DescribeInstanceOperationsResponse();
        this.request("DescribeInstanceOperations", req, resp, cb);
    }

    /**
     * This API is used to query all eligible instances in the current region under the current account.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to change the list of plugins.
     * @param {UpdatePluginsRequest} req
     * @param {function(string, UpdatePluginsResponse):void} cb
     * @public
     */
    UpdatePlugins(req, cb) {
        let resp = new UpdatePluginsResponse();
        this.request("UpdatePlugins", req, resp, cb);
    }

    /**
     * This API is used to create an ES cluster instance with the specified specification.
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        let resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }

    /**
     * This API is used to upgrade ES cluster version
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        let resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
    }

    /**
     * This API is used to upgrade ES X-Pack.
     * @param {UpgradeLicenseRequest} req
     * @param {function(string, UpgradeLicenseResponse):void} cb
     * @public
     */
    UpgradeLicense(req, cb) {
        let resp = new UpgradeLicenseResponse();
        this.request("UpgradeLicense", req, resp, cb);
    }

    /**
     * This API is used for operations such as modifying node specification, renaming an instance, modifying configuration, resetting password, and setting Kibana blocklist/allowlist. `InstanceId` is required, while `ForceRestart` is optional. Other parameters or parameter combinations and their meanings are as follows:
- InstanceName: renames an instance (only for instance identification)
- NodeInfoList: modifies node configuration (horizontally scaling nodes, vertically scaling nodes, adding primary nodes, adding cold nodes, etc.)
- EsConfig: modifies cluster configuration
- Password: changes the password of the default user "elastic"
- EsAcl: modifies the ACL
- CosBackUp: sets auto-backup to COS for a cluster
Only one of the parameters or parameter combinations above can be passed in at a time, while passing fewer or more ones will cause the request to fail.
     * @param {UpdateInstanceRequest} req
     * @param {function(string, UpdateInstanceResponse):void} cb
     * @public
     */
    UpdateInstance(req, cb) {
        let resp = new UpdateInstanceResponse();
        this.request("UpdateInstance", req, resp, cb);
    }

    /**
     * This API is used to terminate a cluster instance. 
     * @param {DeleteInstanceRequest} req
     * @param {function(string, DeleteInstanceResponse):void} cb
     * @public
     */
    DeleteInstance(req, cb) {
        let resp = new DeleteInstanceResponse();
        this.request("DeleteInstance", req, resp, cb);
    }

    /**
     * This API is used to restart an ES cluster instance (for operations such as system update). 
     * @param {RestartInstanceRequest} req
     * @param {function(string, RestartInstanceResponse):void} cb
     * @public
     */
    RestartInstance(req, cb) {
        let resp = new RestartInstanceResponse();
        this.request("RestartInstance", req, resp, cb);
    }

    /**
     * This API is used to restart cluster nodes.
     * @param {RestartNodesRequest} req
     * @param {function(string, RestartNodesResponse):void} cb
     * @public
     */
    RestartNodes(req, cb) {
        let resp = new RestartNodesResponse();
        this.request("RestartNodes", req, resp, cb);
    }

    /**
     * This API is used to query the eligible ES cluster logs in the current region.
     * @param {DescribeInstanceLogsRequest} req
     * @param {function(string, DescribeInstanceLogsResponse):void} cb
     * @public
     */
    DescribeInstanceLogs(req, cb) {
        let resp = new DescribeInstanceLogsResponse();
        this.request("DescribeInstanceLogs", req, resp, cb);
    }


}
module.exports = EsClient;
