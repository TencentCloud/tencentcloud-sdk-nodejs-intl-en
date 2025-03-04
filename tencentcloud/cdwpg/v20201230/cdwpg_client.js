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
const DescribeInstanceInfoRequest = models.DescribeInstanceInfoRequest;
const AccessInfo = models.AccessInfo;
const InstanceStateInfo = models.InstanceStateInfo;
const DescribeInstanceStateRequest = models.DescribeInstanceStateRequest;
const ChargeProperties = models.ChargeProperties;
const DestroyInstanceByApiRequest = models.DestroyInstanceByApiRequest;
const ResourceSpecNew = models.ResourceSpecNew;
const InstanceNodeGroup = models.InstanceNodeGroup;
const CBSSpec = models.CBSSpec;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const DescribeSimpleInstancesResponse = models.DescribeSimpleInstancesResponse;
const ResourceInfo = models.ResourceInfo;
const InstanceInfo = models.InstanceInfo;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DiskSpecPlus = models.DiskSpecPlus;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const CreateInstanceByApiResponse = models.CreateInstanceByApiResponse;
const SimpleInstanceInfo = models.SimpleInstanceInfo;
const DescribeInstanceResponse = models.DescribeInstanceResponse;
const DestroyInstanceByApiResponse = models.DestroyInstanceByApiResponse;
const CBSSpecInfo = models.CBSSpecInfo;
const CreateInstanceByApiRequest = models.CreateInstanceByApiRequest;
const SearchTags = models.SearchTags;
const DescribeInstanceRequest = models.DescribeInstanceRequest;
const Tag = models.Tag;
const DescribeInstanceStateResponse = models.DescribeInstanceStateResponse;
const InstanceSimpleInfoNew = models.InstanceSimpleInfoNew;
const DescribeSimpleInstancesRequest = models.DescribeSimpleInstancesRequest;
const DescribeInstanceInfoResponse = models.DescribeInstanceInfoResponse;


/**
 * cdwpg client
 * @class
 */
class CdwpgClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdwpg.tencentcloudapi.com", "2020-12-30", credential, region, profile);
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
