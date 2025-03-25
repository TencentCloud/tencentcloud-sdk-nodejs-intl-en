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
const PodSpecInfo = models.PodSpecInfo;
const ScaleOutInstanceResponse = models.ScaleOutInstanceResponse;
const ModifyUserManagerPwdResponse = models.ModifyUserManagerPwdResponse;
const PodVolume = models.PodVolume;
const CreateInstanceResponse = models.CreateInstanceResponse;
const TerminateTasksRequest = models.TerminateTasksRequest;
const HostVolumeContext = models.HostVolumeContext;
const ScaleOutClusterRequest = models.ScaleOutClusterRequest;
const DiskSpecInfo = models.DiskSpecInfo;
const HiveQuery = models.HiveQuery;
const KeyValue = models.KeyValue;
const DescribeEmrApplicationStaticsRequest = models.DescribeEmrApplicationStaticsRequest;
const UserManagerFilter = models.UserManagerFilter;
const DynamicPodSpec = models.DynamicPodSpec;
const ModifyUserManagerPwdRequest = models.ModifyUserManagerPwdRequest;
const COSSettings = models.COSSettings;
const ClusterInstancesInfo = models.ClusterInstancesInfo;
const SubnetInfo = models.SubnetInfo;
const ScaleOutInstanceRequest = models.ScaleOutInstanceRequest;
const ZoneDetailPriceResult = models.ZoneDetailPriceResult;
const PodNewSpec = models.PodNewSpec;
const NodeResourceSpec = models.NodeResourceSpec;
const ModifyResourceScheduleConfigResponse = models.ModifyResourceScheduleConfigResponse;
const TopologyInfo = models.TopologyInfo;
const NodeDetailPriceResult = models.NodeDetailPriceResult;
const Tag = models.Tag;
const ClusterIDToFlowID = models.ClusterIDToFlowID;
const EmrListInstance = models.EmrListInstance;
const AddUsersForUserManagerResponse = models.AddUsersForUserManagerResponse;
const EmrProductConfigOutter = models.EmrProductConfigOutter;
const CustomServiceDefine = models.CustomServiceDefine;
const TerminateTasksResponse = models.TerminateTasksResponse;
const PartDetailPriceItem = models.PartDetailPriceItem;
const DependService = models.DependService;
const PodSpec = models.PodSpec;
const InquiryPriceRenewInstanceResponse = models.InquiryPriceRenewInstanceResponse;
const InquiryPriceCreateInstanceResponse = models.InquiryPriceCreateInstanceResponse;
const StartStopServiceOrMonitorRequest = models.StartStopServiceOrMonitorRequest;
const TerminateInstanceRequest = models.TerminateInstanceRequest;
const AutoScaleRecord = models.AutoScaleRecord;
const DescribeResourceScheduleRequest = models.DescribeResourceScheduleRequest;
const Placement = models.Placement;
const PodParameter = models.PodParameter;
const AllNodeResourceSpec = models.AllNodeResourceSpec;
const DescribeUsersForUserManagerRequest = models.DescribeUsersForUserManagerRequest;
const StrategyConfig = models.StrategyConfig;
const StartStopServiceOrMonitorResponse = models.StartStopServiceOrMonitorResponse;
const MultiDisk = models.MultiDisk;
const PodNewParameter = models.PodNewParameter;
const SearchItem = models.SearchItem;
const ModifyResourcesTagsResponse = models.ModifyResourcesTagsResponse;
const ScaleOutServiceConfGroupsInfo = models.ScaleOutServiceConfGroupsInfo;
const MultiZoneSetting = models.MultiZoneSetting;
const TerminateInstanceResponse = models.TerminateInstanceResponse;
const InquiryPriceUpdateInstanceResponse = models.InquiryPriceUpdateInstanceResponse;
const NewResourceSpec = models.NewResourceSpec;
const PersistentVolumeContext = models.PersistentVolumeContext;
const ScaleOutNodeConfig = models.ScaleOutNodeConfig;
const ModifyResourceTags = models.ModifyResourceTags;
const ModifyResourcesTagsRequest = models.ModifyResourcesTagsRequest;
const DescribeResourceScheduleResponse = models.DescribeResourceScheduleResponse;
const DescribeHiveQueriesResponse = models.DescribeHiveQueriesResponse;
const TerminateClusterNodesResponse = models.TerminateClusterNodesResponse;
const ModifyResourceSchedulerRequest = models.ModifyResourceSchedulerRequest;
const LoginSettings = models.LoginSettings;
const PriceResource = models.PriceResource;
const DescribeHiveQueriesRequest = models.DescribeHiveQueriesRequest;
const CreateClusterResponse = models.CreateClusterResponse;
const DescribeAutoScaleRecordsResponse = models.DescribeAutoScaleRecordsResponse;
const CreateClusterRequest = models.CreateClusterRequest;
const DescribeClusterNodesRequest = models.DescribeClusterNodesRequest;
const ComponentBasicRestartInfo = models.ComponentBasicRestartInfo;
const CreateInstanceRequest = models.CreateInstanceRequest;
const UpdateInstanceSettings = models.UpdateInstanceSettings;
const ScriptBootstrapActionConfig = models.ScriptBootstrapActionConfig;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const InquiryPriceUpdateInstanceRequest = models.InquiryPriceUpdateInstanceRequest;
const TerminateClusterNodesRequest = models.TerminateClusterNodesRequest;
const DescribeInstancesListRequest = models.DescribeInstancesListRequest;
const OutterResource = models.OutterResource;
const OpScope = models.OpScope;
const DescribeInstancesListResponse = models.DescribeInstancesListResponse;
const VPCSettings = models.VPCSettings;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeUsersForUserManagerResponse = models.DescribeUsersForUserManagerResponse;
const InquiryPriceRenewInstanceRequest = models.InquiryPriceRenewInstanceRequest;
const CdbInfo = models.CdbInfo;
const PriceDetail = models.PriceDetail;
const MultiDiskMC = models.MultiDiskMC;
const AddUsersForUserManagerRequest = models.AddUsersForUserManagerRequest;
const ZoneResourceConfiguration = models.ZoneResourceConfiguration;
const CustomMetaInfo = models.CustomMetaInfo;
const ApplicationStatics = models.ApplicationStatics;
const InquiryPriceCreateInstanceRequest = models.InquiryPriceCreateInstanceRequest;
const DescribeClusterNodesResponse = models.DescribeClusterNodesResponse;
const ModifyResourceScheduleConfigRequest = models.ModifyResourceScheduleConfigRequest;
const UserInfoForUserManager = models.UserInfoForUserManager;
const ScaleOutClusterResponse = models.ScaleOutClusterResponse;
const ExternalService = models.ExternalService;
const PreExecuteFileSettings = models.PreExecuteFileSettings;
const ClusterExternalServiceInfo = models.ClusterExternalServiceInfo;
const SoftDependInfo = models.SoftDependInfo;
const InquiryPriceScaleOutInstanceRequest = models.InquiryPriceScaleOutInstanceRequest;
const Resource = models.Resource;
const DescribeEmrApplicationStaticsResponse = models.DescribeEmrApplicationStaticsResponse;
const CustomMetaDBInfo = models.CustomMetaDBInfo;
const UserManagerUserBriefInfo = models.UserManagerUserBriefInfo;
const InquiryPriceScaleOutInstanceResponse = models.InquiryPriceScaleOutInstanceResponse;
const ModifyResourceSchedulerResponse = models.ModifyResourceSchedulerResponse;
const VirtualPrivateCloud = models.VirtualPrivateCloud;
const SceneSoftwareConfig = models.SceneSoftwareConfig;
const ShortNodeInfo = models.ShortNodeInfo;
const EmrPrice = models.EmrPrice;
const NodeHardwareInfo = models.NodeHardwareInfo;
const ServiceBasicRestartInfo = models.ServiceBasicRestartInfo;
const DescribeAutoScaleRecordsRequest = models.DescribeAutoScaleRecordsRequest;
const Filters = models.Filters;
const InstanceChargePrepaid = models.InstanceChargePrepaid;


/**
 * emr client
 * @class
 */
class EmrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("emr.intl.tencentcloudapi.com", "2019-01-03", credential, region, profile);
    }
    
    /**
     * This API is used to forcibly modify tags.
     * @param {ModifyResourcesTagsRequest} req
     * @param {function(string, ModifyResourcesTagsResponse):void} cb
     * @public
     */
    ModifyResourcesTags(req, cb) {
        let resp = new ModifyResourcesTagsResponse();
        this.request("ModifyResourcesTags", req, resp, cb);
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
     * This API is used to create an EMR cluster instance.
     * @param {CreateClusterRequest} req
     * @param {function(string, CreateClusterResponse):void} cb
     * @public
     */
    CreateCluster(req, cb) {
        let resp = new CreateClusterResponse();
        this.request("CreateCluster", req, resp, cb);
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
     * This API is used to inquiry detailed records of cluster autoscaling.
     * @param {DescribeAutoScaleRecordsRequest} req
     * @param {function(string, DescribeAutoScaleRecordsResponse):void} cb
     * @public
     */
    DescribeAutoScaleRecords(req, cb) {
        let resp = new DescribeAutoScaleRecordsResponse();
        this.request("DescribeAutoScaleRecords", req, resp, cb);
    }

    /**
     * This API is used to scale out instances.
     * @param {ScaleOutInstanceRequest} req
     * @param {function(string, ScaleOutInstanceResponse):void} cb
     * @public
     */
    ScaleOutInstance(req, cb) {
        let resp = new ScaleOutInstanceResponse();
        this.request("ScaleOutInstance", req, resp, cb);
    }

    /**
     * This API is used to change user password (user management).
     * @param {ModifyUserManagerPwdRequest} req
     * @param {function(string, ModifyUserManagerPwdResponse):void} cb
     * @public
     */
    ModifyUserManagerPwd(req, cb) {
        let resp = new ModifyUserManagerPwdResponse();
        this.request("ModifyUserManagerPwd", req, resp, cb);
    }

    /**
     * This API is used to query the information of instances in a cluster.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to terminate cluster nodes.
     * @param {TerminateClusterNodesRequest} req
     * @param {function(string, TerminateClusterNodesResponse):void} cb
     * @public
     */
    TerminateClusterNodes(req, cb) {
        let resp = new TerminateClusterNodesResponse();
        this.request("TerminateClusterNodes", req, resp, cb);
    }

    /**
     * This API is available for clusters with OpenLDAP components configured.
This API is used to export users in batches. For a Kerberos cluster, set `NeedKeytabInfo` to `true` to obtain the download link of the Keytab file. If `SupportDownLoadKeyTab` is `true`, but `DownLoadKeyTabUrl` is null, the Keytab file is not ready yet (being generated) in the backend.
     * @param {DescribeUsersForUserManagerRequest} req
     * @param {function(string, DescribeUsersForUserManagerResponse):void} cb
     * @public
     */
    DescribeUsersForUserManager(req, cb) {
        let resp = new DescribeUsersForUserManagerResponse();
        this.request("DescribeUsersForUserManager", req, resp, cb);
    }

    /**
     * This API is available for clusters with OpenLDAP components configured.
This API is used to add user lists (user management).
     * @param {AddUsersForUserManagerRequest} req
     * @param {function(string, AddUsersForUserManagerResponse):void} cb
     * @public
     */
    AddUsersForUserManager(req, cb) {
        let resp = new AddUsersForUserManagerResponse();
        this.request("AddUsersForUserManager", req, resp, cb);
    }

    /**
     * This API is used to scale out a cluster.
     * @param {ScaleOutClusterRequest} req
     * @param {function(string, ScaleOutClusterResponse):void} cb
     * @public
     */
    ScaleOutCluster(req, cb) {
        let resp = new ScaleOutClusterResponse();
        this.request("ScaleOutCluster", req, resp, cb);
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
     * This API is used to query the data of YARN Resource Scheduling.
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
     * This API is used to inquiry Hive query data.
     * @param {DescribeHiveQueriesRequest} req
     * @param {function(string, DescribeHiveQueriesResponse):void} cb
     * @public
     */
    DescribeHiveQueries(req, cb) {
        let resp = new DescribeHiveQueriesResponse();
        this.request("DescribeHiveQueries", req, resp, cb);
    }

    /**
     * This API is used to start, stop, or restart services.
     * @param {StartStopServiceOrMonitorRequest} req
     * @param {function(string, StartStopServiceOrMonitorResponse):void} cb
     * @public
     */
    StartStopServiceOrMonitor(req, cb) {
        let resp = new StartStopServiceOrMonitorResponse();
        this.request("StartStopServiceOrMonitor", req, resp, cb);
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
     * This API is used to terminate EMR instances. It is only supported in the official paid edition of EMR.
     * @param {TerminateInstanceRequest} req
     * @param {function(string, TerminateInstanceResponse):void} cb
     * @public
     */
    TerminateInstance(req, cb) {
        let resp = new TerminateInstanceResponse();
        this.request("TerminateInstance", req, resp, cb);
    }

    /**
     * This API is used to query the information of nodes in a cluster.
     * @param {DescribeClusterNodesRequest} req
     * @param {function(string, DescribeClusterNodesResponse):void} cb
     * @public
     */
    DescribeClusterNodes(req, cb) {
        let resp = new DescribeClusterNodesResponse();
        this.request("DescribeClusterNodes", req, resp, cb);
    }

    /**
     * This API is used to query the cluster list.
     * @param {DescribeInstancesListRequest} req
     * @param {function(string, DescribeInstancesListResponse):void} cb
     * @public
     */
    DescribeInstancesList(req, cb) {
        let resp = new DescribeInstancesListResponse();
        this.request("DescribeInstancesList", req, resp, cb);
    }

    /**
     *  This API is used to query the Yarn application statistics.
     * @param {DescribeEmrApplicationStaticsRequest} req
     * @param {function(string, DescribeEmrApplicationStaticsResponse):void} cb
     * @public
     */
    DescribeEmrApplicationStatics(req, cb) {
        let resp = new DescribeEmrApplicationStaticsResponse();
        this.request("DescribeEmrApplicationStatics", req, resp, cb);
    }


}
module.exports = EmrClient;
