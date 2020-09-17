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
const EmrProductConfigOutter = models.EmrProductConfigOutter;
const LoginSettings = models.LoginSettings;
const VPCSettings = models.VPCSettings;
const PriceResource = models.PriceResource;
const ScaleOutInstanceResponse = models.ScaleOutInstanceResponse;
const InquiryPriceCreateInstanceRequest = models.InquiryPriceCreateInstanceRequest;
const Resource = models.Resource;
const TerminateInstanceRequest = models.TerminateInstanceRequest;
const PodVolume = models.PodVolume;
const TerminateInstanceResponse = models.TerminateInstanceResponse;
const CreateInstanceResponse = models.CreateInstanceResponse;
const PodSpec = models.PodSpec;
const InquiryPriceRenewInstanceResponse = models.InquiryPriceRenewInstanceResponse;
const TerminateTasksRequest = models.TerminateTasksRequest;
const InquiryPriceCreateInstanceResponse = models.InquiryPriceCreateInstanceResponse;
const HostVolumeContext = models.HostVolumeContext;
const DescribeClusterNodesRequest = models.DescribeClusterNodesRequest;
const PreExecuteFileSettings = models.PreExecuteFileSettings;
const CreateInstanceRequest = models.CreateInstanceRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const InquiryPriceScaleOutInstanceRequest = models.InquiryPriceScaleOutInstanceRequest;
const Tag = models.Tag;
const Placement = models.Placement;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const CustomMetaInfo = models.CustomMetaInfo;
const InquiryPriceUpdateInstanceRequest = models.InquiryPriceUpdateInstanceRequest;
const COSSettings = models.COSSettings;
const ClusterInstancesInfo = models.ClusterInstancesInfo;
const MultiDisk = models.MultiDisk;
const SearchItem = models.SearchItem;
const InquiryPriceScaleOutInstanceResponse = models.InquiryPriceScaleOutInstanceResponse;
const OutterResource = models.OutterResource;
const UpdateInstanceSettings = models.UpdateInstanceSettings;
const TerminateTasksResponse = models.TerminateTasksResponse;
const DescribeClusterNodesResponse = models.DescribeClusterNodesResponse;
const NodeHardwareInfo = models.NodeHardwareInfo;
const InquiryPriceUpdateInstanceResponse = models.InquiryPriceUpdateInstanceResponse;
const NewResourceSpec = models.NewResourceSpec;
const PersistentVolumeContext = models.PersistentVolumeContext;
const InquiryPriceRenewInstanceRequest = models.InquiryPriceRenewInstanceRequest;
const CdbInfo = models.CdbInfo;
const ScaleOutInstanceRequest = models.ScaleOutInstanceRequest;


/**
 * emr client
 * @class
 */
class EmrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("emr.tencentcloudapi.com", "2019-01-03", credential, region, profile);
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
     * This API is used to create EMR instance.
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
     * This API is used to query price of scale-out.
     * @param {InquiryPriceScaleOutInstanceRequest} req
     * @param {function(string, InquiryPriceScaleOutInstanceResponse):void} cb
     * @public
     */
    InquiryPriceScaleOutInstance(req, cb) {
        let resp = new InquiryPriceScaleOutInstanceResponse();
        this.request("InquiryPriceScaleOutInstance", req, resp, cb);
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
     * This API is used to terminate an EMR instance. It is only supported in the official paid edition of EMR.
     * @param {TerminateInstanceRequest} req
     * @param {function(string, TerminateInstanceResponse):void} cb
     * @public
     */
    TerminateInstance(req, cb) {
        let resp = new TerminateInstanceResponse();
        this.request("TerminateInstance", req, resp, cb);
    }


}
module.exports = EmrClient;
