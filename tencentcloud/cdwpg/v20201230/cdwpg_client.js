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
const ConfigParams = models.ConfigParams;
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const DescribeInstanceInfoRequest = models.DescribeInstanceInfoRequest;
const DescribeUserHbaConfigResponse = models.DescribeUserHbaConfigResponse;
const AccessInfo = models.AccessInfo;
const DescribeUserHbaConfigRequest = models.DescribeUserHbaConfigRequest;
const ModifyDBParametersResponse = models.ModifyDBParametersResponse;
const InstanceStateInfo = models.InstanceStateInfo;
const NormQueryItem = models.NormQueryItem;
const DescribeInstanceStateRequest = models.DescribeInstanceStateRequest;
const AccountInfo = models.AccountInfo;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const ScaleOutInstanceResponse = models.ScaleOutInstanceResponse;
const DescribeInstanceNodesRequest = models.DescribeInstanceNodesRequest;
const RestartInstanceResponse = models.RestartInstanceResponse;
const ChargeProperties = models.ChargeProperties;
const DestroyInstanceByApiRequest = models.DestroyInstanceByApiRequest;
const UpgradeItem = models.UpgradeItem;
const DescribeDBConfigHistoryResponse = models.DescribeDBConfigHistoryResponse;
const ResourceSpecNew = models.ResourceSpecNew;
const InstanceNode = models.InstanceNode;
const DescribeDBConfigHistoryRequest = models.DescribeDBConfigHistoryRequest;
const ErrorLogDetail = models.ErrorLogDetail;
const DescribeDBParamsRequest = models.DescribeDBParamsRequest;
const CBSSpec = models.CBSSpec;
const DescribeInstanceNodesResponse = models.DescribeInstanceNodesResponse;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const DescribeSimpleInstancesResponse = models.DescribeSimpleInstancesResponse;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const DescribeSlowLogResponse = models.DescribeSlowLogResponse;
const ModifyUserHbaResponse = models.ModifyUserHbaResponse;
const NodeConfigParams = models.NodeConfigParams;
const InstanceInfo = models.InstanceInfo;
const DescribeDBParamsResponse = models.DescribeDBParamsResponse;
const ParamDetail = models.ParamDetail;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const ConfigHistory = models.ConfigHistory;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const DiskSpecPlus = models.DiskSpecPlus;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const RestartInstanceRequest = models.RestartInstanceRequest;
const DescribeUpgradeListRequest = models.DescribeUpgradeListRequest;
const ResourceInfo = models.ResourceInfo;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const DescribeInstanceOperationsResponse = models.DescribeInstanceOperationsResponse;
const CreateInstanceByApiResponse = models.CreateInstanceByApiResponse;
const DescribeSlowLogRequest = models.DescribeSlowLogRequest;
const DescribeUpgradeListResponse = models.DescribeUpgradeListResponse;
const ScaleOutInstanceRequest = models.ScaleOutInstanceRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const SearchTags = models.SearchTags;
const Range = models.Range;
const InstanceNodeGroup = models.InstanceNodeGroup;
const DescribeInstanceResponse = models.DescribeInstanceResponse;
const ModifyDBParametersRequest = models.ModifyDBParametersRequest;
const DescribeErrorLogResponse = models.DescribeErrorLogResponse;
const ModifyUserHbaRequest = models.ModifyUserHbaRequest;
const ScaleUpInstanceRequest = models.ScaleUpInstanceRequest;
const CNResourceSpec = models.CNResourceSpec;
const DestroyInstanceByApiResponse = models.DestroyInstanceByApiResponse;
const ParamItem = models.ParamItem;
const CBSSpecInfo = models.CBSSpecInfo;
const HbaConfig = models.HbaConfig;
const SimpleInstanceInfo = models.SimpleInstanceInfo;
const CreateInstanceByApiRequest = models.CreateInstanceByApiRequest;
const DescribeInstanceOperationsRequest = models.DescribeInstanceOperationsRequest;
const DescribeInstanceRequest = models.DescribeInstanceRequest;
const SlowLogDetail = models.SlowLogDetail;
const ValueRange = models.ValueRange;
const Tag = models.Tag;
const DescribeInstanceStateResponse = models.DescribeInstanceStateResponse;
const InstanceOperation = models.InstanceOperation;
const InstanceSimpleInfoNew = models.InstanceSimpleInfoNew;
const DescribeSimpleInstancesRequest = models.DescribeSimpleInstancesRequest;
const DescribeErrorLogRequest = models.DescribeErrorLogRequest;
const ScaleUpInstanceResponse = models.ScaleUpInstanceResponse;
const DescribeInstanceInfoResponse = models.DescribeInstanceInfoResponse;


/**
 * cdwpg client
 * @class
 */
class CdwpgClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdwpg.intl.tencentcloudapi.com", "2020-12-30", credential, region, profile);
    }
    
    /**
     * Describe User HbaConfig.
     * @param {DescribeUserHbaConfigRequest} req
     * @param {function(string, DescribeUserHbaConfigResponse):void} cb
     * @public
     */
    DescribeUserHbaConfig(req, cb) {
        let resp = new DescribeUserHbaConfigResponse();
        this.request("DescribeUserHbaConfig", req, resp, cb);
    }

    /**
     * This API is used to change account password.
     * @param {ResetAccountPasswordRequest} req
     * @param {function(string, ResetAccountPasswordResponse):void} cb
     * @public
     */
    ResetAccountPassword(req, cb) {
        let resp = new ResetAccountPasswordResponse();
        this.request("ResetAccountPassword", req, resp, cb);
    }

    /**
     * This API is used to modify instance configurations
     * @param {ModifyDBParametersRequest} req
     * @param {function(string, ModifyDBParametersResponse):void} cb
     * @public
     */
    ModifyDBParameters(req, cb) {
        let resp = new ModifyDBParametersResponse();
        this.request("ModifyDBParameters", req, resp, cb);
    }

    /**
     * This API is used to scale out instance.
     * @param {ScaleOutInstanceRequest} req
     * @param {function(string, ScaleOutInstanceResponse):void} cb
     * @public
     */
    ScaleOutInstance(req, cb) {
        let resp = new ScaleOutInstanceResponse();
        this.request("ScaleOutInstance", req, resp, cb);
    }

    /**
     * This API is used to scale up instance in the console.
     * @param {ScaleUpInstanceRequest} req
     * @param {function(string, ScaleUpInstanceResponse):void} cb
     * @public
     */
    ScaleUpInstance(req, cb) {
        let resp = new ScaleUpInstanceResponse();
        this.request("ScaleUpInstance", req, resp, cb);
    }

    /**
     * This API is used to get a list of  instances.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to display instance status, process progress, etc., in the instance details page.
     * @param {DescribeInstanceStateRequest} req
     * @param {function(string, DescribeInstanceStateResponse):void} cb
     * @public
     */
    DescribeInstanceState(req, cb) {
        let resp = new DescribeInstanceStateResponse();
        this.request("DescribeInstanceState", req, resp, cb);
    }

    /**
     * This API is used to destroy instance.
     * @param {DestroyInstanceByApiRequest} req
     * @param {function(string, DestroyInstanceByApiResponse):void} cb
     * @public
     */
    DestroyInstanceByApi(req, cb) {
        let resp = new DestroyInstanceByApiResponse();
        this.request("DestroyInstanceByApi", req, resp, cb);
    }

    /**
     * This API is used to get instance information.
     * @param {DescribeInstanceInfoRequest} req
     * @param {function(string, DescribeInstanceInfoResponse):void} cb
     * @public
     */
    DescribeInstanceInfo(req, cb) {
        let resp = new DescribeInstanceInfoResponse();
        this.request("DescribeInstanceInfo", req, resp, cb);
    }

    /**
     * This API is used by users to proactively restart instances in the console.
     * @param {RestartInstanceRequest} req
     * @param {function(string, RestartInstanceResponse):void} cb
     * @public
     */
    RestartInstance(req, cb) {
        let resp = new RestartInstanceResponse();
        this.request("RestartInstance", req, resp, cb);
    }

    /**
     * Describe DBConfig History
     * @param {DescribeDBConfigHistoryRequest} req
     * @param {function(string, DescribeDBConfigHistoryResponse):void} cb
     * @public
     */
    DescribeDBConfigHistory(req, cb) {
        let resp = new DescribeDBConfigHistoryResponse();
        this.request("DescribeDBConfigHistory", req, resp, cb);
    }

    /**
     * This API is used to describe instance configurations.
     * @param {DescribeDBParamsRequest} req
     * @param {function(string, DescribeDBParamsResponse):void} cb
     * @public
     */
    DescribeDBParams(req, cb) {
        let resp = new DescribeDBParamsResponse();
        this.request("DescribeDBParams", req, resp, cb);
    }

    /**
     * This API is used to get operations of the instance .
     * @param {DescribeInstanceOperationsRequest} req
     * @param {function(string, DescribeInstanceOperationsResponse):void} cb
     * @public
     */
    DescribeInstanceOperations(req, cb) {
        let resp = new DescribeInstanceOperationsResponse();
        this.request("DescribeInstanceOperations", req, resp, cb);
    }

    /**
     * This API is used to modify user Hba configurations.
     * @param {ModifyUserHbaRequest} req
     * @param {function(string, ModifyUserHbaResponse):void} cb
     * @public
     */
    ModifyUserHba(req, cb) {
        let resp = new ModifyUserHbaResponse();
        this.request("ModifyUserHba", req, resp, cb);
    }

    /**
     * This API is used to query the instance information by an instance ID.
     * @param {DescribeInstanceRequest} req
     * @param {function(string, DescribeInstanceResponse):void} cb
     * @public
     */
    DescribeInstance(req, cb) {
        let resp = new DescribeInstanceResponse();
        this.request("DescribeInstance", req, resp, cb);
    }

    /**
     * This API is used to list nodes.
     * @param {DescribeInstanceNodesRequest} req
     * @param {function(string, DescribeInstanceNodesResponse):void} cb
     * @public
     */
    DescribeInstanceNodes(req, cb) {
        let resp = new DescribeInstanceNodesResponse();
        this.request("DescribeInstanceNodes", req, resp, cb);
    }

    /**
     * This API is used to create  instance
     * @param {CreateInstanceByApiRequest} req
     * @param {function(string, CreateInstanceByApiResponse):void} cb
     * @public
     */
    CreateInstanceByApi(req, cb) {
        let resp = new CreateInstanceByApiResponse();
        this.request("CreateInstanceByApi", req, resp, cb);
    }

    /**
     * This API is used to obtain instance upgrade records.
     * @param {DescribeUpgradeListRequest} req
     * @param {function(string, DescribeUpgradeListResponse):void} cb
     * @public
     */
    DescribeUpgradeList(req, cb) {
        let resp = new DescribeUpgradeListResponse();
        this.request("DescribeUpgradeList", req, resp, cb);
    }

    /**
     * This API is used to obtain the account list corresponding to the instance.
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * This API is used to upgrade Instance.
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        let resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
    }

    /**
     * This API is used to query slow SQL logs.
     * @param {DescribeSlowLogRequest} req
     * @param {function(string, DescribeSlowLogResponse):void} cb
     * @public
     */
    DescribeSlowLog(req, cb) {
        let resp = new DescribeSlowLogResponse();
        this.request("DescribeSlowLog", req, resp, cb);
    }

    /**
     * This API is used to query error logs.
     * @param {DescribeErrorLogRequest} req
     * @param {function(string, DescribeErrorLogResponse):void} cb
     * @public
     */
    DescribeErrorLog(req, cb) {
        let resp = new DescribeErrorLogResponse();
        this.request("DescribeErrorLog", req, resp, cb);
    }

    /**
     * This API is used to get a list of instance
     * @param {DescribeSimpleInstancesRequest} req
     * @param {function(string, DescribeSimpleInstancesResponse):void} cb
     * @public
     */
    DescribeSimpleInstances(req, cb) {
        let resp = new DescribeSimpleInstancesResponse();
        this.request("DescribeSimpleInstances", req, resp, cb);
    }

    /**
     * This API is used to modify instance information. Only the name of an instance can be modified currently.
     * @param {ModifyInstanceRequest} req
     * @param {function(string, ModifyInstanceResponse):void} cb
     * @public
     */
    ModifyInstance(req, cb) {
        let resp = new ModifyInstanceResponse();
        this.request("ModifyInstance", req, resp, cb);
    }


}
module.exports = CdwpgClient;
