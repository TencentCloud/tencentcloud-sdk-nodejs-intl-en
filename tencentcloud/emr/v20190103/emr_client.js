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
const MultiDiskMC = models.MultiDiskMC;
const ModifyResourceSchedulerRequest = models.ModifyResourceSchedulerRequest;
const EmrProductConfigOutter = models.EmrProductConfigOutter;
const LoginSettings = models.LoginSettings;
const TerminateTasksResponse = models.TerminateTasksResponse;
const InquiryPriceCreateInstanceRequest = models.InquiryPriceCreateInstanceRequest;
const CustomServiceDefine = models.CustomServiceDefine;
const Resource = models.Resource;
const ModifyResourceScheduleConfigRequest = models.ModifyResourceScheduleConfigRequest;
const CreateInstanceResponse = models.CreateInstanceResponse;
const InquiryPriceRenewInstanceResponse = models.InquiryPriceRenewInstanceResponse;
const TerminateTasksRequest = models.TerminateTasksRequest;
const InquiryPriceCreateInstanceResponse = models.InquiryPriceCreateInstanceResponse;
const ExternalService = models.ExternalService;
const DescribeClusterNodesRequest = models.DescribeClusterNodesRequest;
const PreExecuteFileSettings = models.PreExecuteFileSettings;
const CreateInstanceRequest = models.CreateInstanceRequest;
const ClusterExternalServiceInfo = models.ClusterExternalServiceInfo;
const OutterResource = models.OutterResource;
const DescribeResourceScheduleRequest = models.DescribeResourceScheduleRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const UpdateInstanceSettings = models.UpdateInstanceSettings;
const Tag = models.Tag;
const Placement = models.Placement;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const CustomMetaInfo = models.CustomMetaInfo;
const InquiryPriceUpdateInstanceRequest = models.InquiryPriceUpdateInstanceRequest;
const COSSettings = models.COSSettings;
const ClusterInstancesInfo = models.ClusterInstancesInfo;
const MultiDisk = models.MultiDisk;
const SearchItem = models.SearchItem;
const ModifyResourceSchedulerResponse = models.ModifyResourceSchedulerResponse;
const ModifyResourceScheduleConfigResponse = models.ModifyResourceScheduleConfigResponse;
const VPCSettings = models.VPCSettings;
const DescribeClusterNodesResponse = models.DescribeClusterNodesResponse;
const NodeHardwareInfo = models.NodeHardwareInfo;
const InquiryPriceUpdateInstanceResponse = models.InquiryPriceUpdateInstanceResponse;
const NewResourceSpec = models.NewResourceSpec;
const InquiryPriceRenewInstanceRequest = models.InquiryPriceRenewInstanceRequest;
const DescribeResourceScheduleResponse = models.DescribeResourceScheduleResponse;
const CdbInfo = models.CdbInfo;


/**
 * emr client
 * @class
 */
class EmrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("emr.tencentcloudapi.com", "2019-01-03", credential, region, profile);
    }
    
    /**
     * This API is used to query EMR instances.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to query price of scaling.
     * @param {InquiryPriceUpdateInstanceRequest} req
     * @param {function(string, InquiryPriceUpdateInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpdateInstance(req, cb) {
        let resp = new InquiryPriceUpdateInstanceResponse();
        this.request("InquiryPriceUpdateInstance", req, resp, cb);
    }

    /**
     * This API is used to query the information of a hardware node.
     * @param {DescribeClusterNodesRequest} req
     * @param {function(string, DescribeClusterNodesResponse):void} cb
     * @public
     */
    DescribeClusterNodes(req, cb) {
        let resp = new DescribeClusterNodesResponse();
        this.request("DescribeClusterNodes", req, resp, cb);
    }

    /**
     * This API is used to modify the YARN resource scheduler (the change will take effect after you click Apply).
     * @param {ModifyResourceSchedulerRequest} req
     * @param {function(string, ModifyResourceSchedulerResponse):void} cb
     * @public
     */
    ModifyResourceScheduler(req, cb) {
        let resp = new ModifyResourceSchedulerResponse();
        this.request("ModifyResourceScheduler", req, resp, cb);
    }

    /**
     * This API is used to query the price for renewal.
     * @param {InquiryPriceRenewInstanceRequest} req
     * @param {function(string, InquiryPriceRenewInstanceResponse):void} cb
     * @public
     */
    InquiryPriceRenewInstance(req, cb) {
        let resp = new InquiryPriceRenewInstanceResponse();
        this.request("InquiryPriceRenewInstance", req, resp, cb);
    }

    /**
     * This API is used to create an EMR cluster instance.
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        let resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }

    /**
     * This API is used to query price of instance creation.
     * @param {InquiryPriceCreateInstanceRequest} req
     * @param {function(string, InquiryPriceCreateInstanceResponse):void} cb
     * @public
     */
    InquiryPriceCreateInstance(req, cb) {
        let resp = new InquiryPriceCreateInstanceResponse();
        this.request("InquiryPriceCreateInstance", req, resp, cb);
    }

    /**
     * This API is used to get data from the YARN Resource Scheduling page.
     * @param {DescribeResourceScheduleRequest} req
     * @param {function(string, DescribeResourceScheduleResponse):void} cb
     * @public
     */
    DescribeResourceSchedule(req, cb) {
        let resp = new DescribeResourceScheduleResponse();
        this.request("DescribeResourceSchedule", req, resp, cb);
    }

    /**
     * This API is used to modify the resource configuration of YARN Resource Scheduling.
     * @param {ModifyResourceScheduleConfigRequest} req
     * @param {function(string, ModifyResourceScheduleConfigResponse):void} cb
     * @public
     */
    ModifyResourceScheduleConfig(req, cb) {
        let resp = new ModifyResourceScheduleConfigResponse();
        this.request("ModifyResourceScheduleConfig", req, resp, cb);
    }

    /**
     * This API is used to terminate a task node.
     * @param {TerminateTasksRequest} req
     * @param {function(string, TerminateTasksResponse):void} cb
     * @public
     */
    TerminateTasks(req, cb) {
        let resp = new TerminateTasksResponse();
        this.request("TerminateTasks", req, resp, cb);
    }


}
module.exports = EmrClient;
