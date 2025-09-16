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
const Container = models.Container;
const Service = models.Service;
const HTTPGetAction = models.HTTPGetAction;
const RollingUpdate = models.RollingUpdate;
const ServiceEIP = models.ServiceEIP;
const ResourceGroupInfo = models.ResourceGroupInfo;
const ExecAction = models.ExecAction;
const HorizontalPodAutoscaler = models.HorizontalPodAutoscaler;
const PublicDataSourceFS = models.PublicDataSourceFS;
const AuthToken = models.AuthToken;
const HealthProbe = models.HealthProbe;
const Option = models.Option;
const CrossTenantENIInfo = models.CrossTenantENIInfo;
const AuthTokenBase = models.AuthTokenBase;
const TCPSocketAction = models.TCPSocketAction;
const ResourceInfo = models.ResourceInfo;
const GooseFSx = models.GooseFSx;
const VolumeMount = models.VolumeMount;
const ScheduledAction = models.ScheduledAction;
const DescribeModelServiceGroupsResponse = models.DescribeModelServiceGroupsResponse;
const InferCodeInfo = models.InferCodeInfo;
const CosPathInfo = models.CosPathInfo;
const ServiceInfo = models.ServiceInfo;
const SchedulingPolicy = models.SchedulingPolicy;
const GpuDetail = models.GpuDetail;
const CronScaleJob = models.CronScaleJob;
const Filter = models.Filter;
const ProbeAction = models.ProbeAction;
const CFSConfig = models.CFSConfig;
const ModelInfo = models.ModelInfo;
const NumOrPercent = models.NumOrPercent;
const TagFilter = models.TagFilter;
const Pod = models.Pod;
const DescribeModelServiceGroupsRequest = models.DescribeModelServiceGroupsRequest;
const ServiceGroup = models.ServiceGroup;
const ContainerStatus = models.ContainerStatus;
const ServiceLimit = models.ServiceLimit;
const ImageInfo = models.ImageInfo;
const Probe = models.Probe;
const AuthTokenLimit = models.AuthTokenLimit;
const Tag = models.Tag;
const EnvVar = models.EnvVar;
const StatefulSetCondition = models.StatefulSetCondition;
const LogConfig = models.LogConfig;
const WorkloadStatus = models.WorkloadStatus;


/**
 * tione client
 * @class
 */
class TioneClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tione.intl.tencentcloudapi.com", "2021-11-11", credential, region, profile);
    }
    
    /**
     * This API is used to list online inference service groups.
     * @param {DescribeModelServiceGroupsRequest} req
     * @param {function(string, DescribeModelServiceGroupsResponse):void} cb
     * @public
     */
    DescribeModelServiceGroups(req, cb) {
        let resp = new DescribeModelServiceGroupsResponse();
        this.request("DescribeModelServiceGroups", req, resp, cb);
    }


}
module.exports = TioneClient;
